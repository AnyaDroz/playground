import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ authors }) => (
  <div className="card-list">
    {authors.map((author) => {
      return <Card author={author} key={author.id} />;
    })}
  </div>
);

export default CardList;
