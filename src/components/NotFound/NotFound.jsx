import "./NotFound.css";
import vectorImage from "../../images/not-found_v1.png";

function NotFound() {
  return (
    <div className="not-found">
      <img src={vectorImage} alt="Nothing found" className="not-found__image" />
      <h1 className="not-found__heading">Nothing Found</h1>
      <p className="not-found__description">
        Sorry, but nothing matched <br /> your search terms.
      </p>
    </div>
  );
}

export default NotFound;
