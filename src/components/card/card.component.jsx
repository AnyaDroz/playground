import "./card.styles.css";

const Card = ({ author }) => {
  const { id, name, src } = author;
  return (
    <div className="card-container" key={id}>
      <img alt={`author ${name}`} src={`${src}`} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
