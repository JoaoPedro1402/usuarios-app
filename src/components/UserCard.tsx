
type UserCardProps = {
  nome: string;
  email: string;
  onClick: () => void;
};

export function UserCard({
  nome,
  email,
  onClick,
}: UserCardProps) {
  const iniciais = nome
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();

  return (
    <button
      className="user-card"
      type="button"
      onClick={onClick}
    >
      <span className="user-avatar">{iniciais}</span>

      <span className="user-info">
        <strong>{nome}</strong>
        <small>{email}</small>
      </span>

      <span className="user-action">
        Ver detalhes <span aria-hidden="true">›</span>
      </span>
    </button>
  );
}
