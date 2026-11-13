
import { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import "./App.css";

type Usuario = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
};

function App() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [busca, setBusca] = useState("");
  const [buscaAplicada, setBuscaAplicada] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] =
    useState<Usuario | null>(null);

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!resposta.ok) {
          throw new Error("Erro ao buscar usuários");
        }

        const dados: Usuario[] = await resposta.json();
        setUsuarios(dados);
      } catch {
        setErro("Não foi possível carregar os usuários.");
      } finally {
        setCarregando(false);
      }
    }

    buscarUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(buscaAplicada.toLowerCase())
  );

  return (
    <main>
      <header className="page-heading">
        <span className="eyebrow">PAINEL DE USUÁRIOS</span>
        <h1>Diretório de usuários</h1>
        <p>Consulte e pesquise informações de usuários.</p>
      </header>

      <form
        className="search-form"
        onSubmit={(evento) => {
  evento.preventDefault();

  setBuscaAplicada(busca.trim());

  setBuscando(true);
  window.setTimeout(() => {
    setBuscando(false);
  }, 300);
}}
      >
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          aria-label="Buscar usuário pelo nome"
          value={busca}
          onChange={(evento) => {
  const texto = evento.target.value;

  setBusca(texto);

  if (texto.trim() === "") {
    setBuscaAplicada("");
  }
}}
        />

        <button
  className="search-button"
  type="submit"
  disabled={buscando}
>
  {buscando ? (
    <>
      <span className="mini-spinner" aria-hidden="true" />
      Buscando...
    </>
  ) : (
    "Buscar"
  )}
</button>

        <button
          className="clear-button"
          type="button"
          onClick={() => {
            setBusca("");
            setBuscaAplicada("");
          }}
        >
          Limpar
        </button>
      </form>

      {carregando && (
        <div className="loading-state" role="status">
          <span className="spinner" aria-hidden="true"></span>
          <p>Carregando usuários...</p>
        </div>
      )}

      {erro && <p className="error-state" role="alert">{erro}</p>}

      {!carregando && !erro && (
        <>
          <p className="results-count">
            {usuariosFiltrados.length} usuários encontrados
          </p>

          {usuariosFiltrados.length === 0 ? (
            <p className="empty-state">
              Nenhum usuário encontrado.
            </p>
          ) : (
            usuariosFiltrados.map((usuario) => (
              <UserCard
                key={usuario.id}
                nome={usuario.name}
                email={usuario.email}
                onClick={() => setUsuarioSelecionado(usuario)}
              />
            ))
          )}
        </>
      )}

      {usuarioSelecionado && (
        <div className="modal-overlay">
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-modal"
          >
            <h2 id="titulo-modal">Detalhes do usuário</h2>

            <p>Nome: {usuarioSelecionado.name}</p>
            <p>Email: {usuarioSelecionado.email}</p>
            <p>Telefone: {usuarioSelecionado.phone}</p>
            <p>Empresa: {usuarioSelecionado.company.name}</p>
            <p>Cidade: {usuarioSelecionado.address.city}</p>

            <button
              type="button"
              onClick={() => setUsuarioSelecionado(null)}
            >
              Fechar
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
