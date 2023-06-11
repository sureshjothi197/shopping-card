import StarRating from "../StarRating";
import { stringTruncate } from "../../Utils/helperFuction";
import "./shopCard.css";
const ShopCard = ({ product }) => {
  return (
    <div class="card" style={{ width: "16.5rem" }}>
      <img src={product.thumbnail} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title card-head">{product.title}</h5>
        <p class="card-text card-description"> {stringTruncate(product.description, 0, 100, 100)}</p>
        <h4>${product.price}</h4>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
};
export default ShopCard;
