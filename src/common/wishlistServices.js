import {
  fetchProductIdWishlistData,
  addWishlistData,
  removeWishlistData,
} from "../apis/wishlist";

export const onAddProductToWishlist = ({ product, onSuccess, onError }) => {
  fetchProductIdWishlistData(product.id)
    .then((res) => {
      if (res.data.length === 0) {
        addWishlistData(product)
          .then((res) => onSuccess && onSuccess(res))
          .catch(
            (err) =>
              onError &&
              onError("Add product to wislist failed, please try again", err)
          );
      } else {
        onError && onError("Product already in wishlist");
      }
    })
    .catch(
      (err) =>
        onError &&
        onError("Add product to wislist failed, please try again", err)
    );
};

export const onRemoveProductFromWishlist = ({
  productId,
  onSuccess,
  onError,
}) => {
  if (productId && productId !== "" && productId !== null) {
    removeWishlistData(productId)
      .then((res) => onSuccess && onSuccess(res))
      .catch(
        (err) =>
          onError && onError("Remove product fail, pleaser try again", err)
      );
  }
};
