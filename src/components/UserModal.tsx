
import type { Usuario } from "../types/Usuario";

type UserModalProps = {
  usuario: Usuario;
  onClose: () => void;
};

export function UserModal({ usuario, onClose }: UserModalProps) {
  return (
    <div className="modal-overlay">
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-modal"
      >
        <h2 id="titulo-modal">Detalhes do usuário</h2>

        <p>Nome: {usuario.name}</p>
        <p>Email: {usuario.email}</p>
        <p>Telefone: {usuario.phone}</p>
        <p>Empresa: {usuario.company.name}</p>
        <p>Cidade: {usuario.address.city}</p>

        <button type="button" onClick={onClose}>
          Fechar
        </button>
      </section>
    </div>
  );
}
