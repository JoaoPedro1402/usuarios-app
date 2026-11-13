
type UserCardProps = {
  nome: string;
  email: string;
  empresa: string;
  cidade: string;
  onClick: () => void;
};

export function UserCard({
  nome,
  email,
  empresa,
  cidade,
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

      <span className="user-extra">
        <small>Empresa</small>
        <strong>{empresa}</strong>
      </span>

      <span className="user-extra">
        <small>Cidade</small>
        <strong>{cidade}</strong>
      </span>

      <span className="user-action" aria-hidden="true">›</span>
    </button>
  );
}
