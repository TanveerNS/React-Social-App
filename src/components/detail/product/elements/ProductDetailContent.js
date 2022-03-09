import { Button, Col, Rate, Row, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { formatCurrency } from "../../../../common/utils";
import {
  checkProductCartQuantity,
  checkProductInWishlist,
} from "../../../../common/shopUtils";
import QuantitySelector from "../../../other/QuantitySelector";
import SocialIcons from "../../../other/SocialIcons";
import { onAddProductToCart } from "../../../../common/cartServices";
import { fetchCartRequest } from "../../../../redux/actions/cartActions";
import {
  addToCompare,
  removeFromCompare,
} from "../../../../redux/actions/compareActions";

export default function ProductDetailContent({ data, type }) {
  const dispatch = useDispatch();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const cartState = useSelector((state) => state.cartReducer);
  const compareState = useSelector((state) => state.compareReducer);
  const productInCompare = checkProductInWishlist(compareState, data.id);
  const avaiableQuantity =
    data.quantity - checkProductCartQuantity(cartState.data, data.id);
  console.log(avaiableQuantity);
  const onAddToCart = (product, quantity) => {
    if (addToCartLoading) {
      return;
    }
    setAddToCartLoading(true);
    onAddProductToCart({
      product,
      quantity,
      onSuccess: (data) => {
        setAddToCartLoading(false);
        message.success("Product added to cart");
        dispatch(fetchCartRequest());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        message.error(mes);
        console.log(err);
      },
    });
  };
  const onAddToCompare = (product) => {
    if (productInCompare) {
      dispatch(removeFromCompare(product.id));
      message.error("Product removed from compare");
    } else {
      dispatch(addToCompare(product));
      message.success("Product added to compare");
    }
  };
  if (type === "fluid") {
    return (
      <div className="product-detail-content -wide">
        <Row>
          <Col xs={24} sm={24} xl={16}>
            <div className="product-detail-content__left">
              <h5 className="product-type">{data.category}</h5>
              <h2 className="product-detail-content__name">{data.name}</h2>
              <div className="product-detail-content__description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventor.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem
                </p>
              </div>
              <ul className="product-detail-content__meta">
                <li>
                  <span>SKU:</span> A1359
                </li>
                <li>
                  <span>Categories:</span> Fastfood
                </li>
                <li>
                  <span>Tag:</span> Food, Organic
                </li>
              </ul>
              <div className="product-detail-content__share">
                <h5>Share link:</h5>
                <SocialIcons />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} xl={8}>
            <div className="product-detail-content__right">
              <div className="product-detail-content__delivery">
                Free delivery
              </div>
              <h3 className="product-detail-content__price">
                {data.discount && <del>{formatCurrency(data.price)}</del>}
                <div className="product-detail-content__price-discount">
                  <h5>
                    {data.discount
                      ? formatCurrency(data.price - data.discount)
                      : formatCurrency(data.price)}
                  </h5>
                  <span>
                    <Rate defaultValue={data.rate} />
                  </span>
                </div>
              </h3>
              <QuantitySelector
                onChange={(val) => setCurrentQuantity(val)}
                max={avaiableQuantity}
              />
              <div className="product-detail-content__actions">
                <Button
                  loading={addToCartLoading}
                  onClick={() => onAddToCart(data, currentQuantity)}
                  shape="round"
                >
                  Add to cart
                </Button>
                <Button
                  onClick={() => onAddToCompare(data)}
                  className={classNames({
                    active: productInCompare,
                  })}
                  shape="round"
                >
                  Add to compare
                </Button>
              </div>
              <ul className="product-detail-content__benefits">
                <li>Satisfaction 100% Guaranteed</li>
                <li>Free shipping on orders over $99</li>
                <li>14 day easy Return</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div className="product-detail-content">
      <h5 className="product-type">{data.category}</h5>
      <h2 className="product-detail-content__name">{data.name}</h2>
      <p className="product-detail-content__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor
        {/* Change to {data.description} */}
      </p>
      <div className="product-detail-content__delivery">Free delivery</div>
      <h3 className="product-detail-content__price">
        {data.discount && <del>{formatCurrency(data.price)}</del>}
        <div className="product-detail-content__price-discount">
          <h5>
            {data.discount
              ? formatCurrency(data.price - data.discount)
              : formatCurrency(data.price)}
          </h5>
          <span>
            <Rate defaultValue={data.rate} />
          </span>
        </div>
      </h3>
      <QuantitySelector
        onChange={(val) => setCurrentQuantity(val)}
        max={avaiableQuantity}
      />
      <div className="product-detail-content__actions">
        <Button
          loading={addToCartLoading}
          onClick={() => onAddToCart(data, currentQuantity)}
          shape="round"
        >
          Add to cart
        </Button>
        <Button
          onClick={() => onAddToCompare(data)}
          className={classNames({
            active: productInCompare,
          })}
          shape="round"
        >
          Add to compare
        </Button>
      </div>
      <div className="product-detail-content__share">
        <h5>Share link:</h5>
        <SocialIcons />
      </div>
    </div>
  );
}

React.memo(ProductDetailContent);
