
import { useEffect, useState } from "react";
import { UserCard } from "./components/UserCard";
import "./App.css";
import type { Usuario } from "./types/Usuario";
import { UserModal } from "./components/UserModal";

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
                empresa={usuario.company.name}
                cidade={usuario.address.city}
                onClick={() => setUsuarioSelecionado(usuario)}
              />
            ))
          )}
        </>
      )}

      {usuarioSelecionado && (
  <UserModal
    usuario={usuarioSelecionado}
    onClose={() => setUsuarioSelecionado(null)}
  />
)}
    </main>
  );
}

export default App;
