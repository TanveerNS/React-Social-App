import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, message, Rate, Empty, Breadcrumb } from "antd";
import Link from "next/link";

import { fetchCartRequest } from "../../redux/actions/cartActions";
import { onAddProductToCart } from "../../common/cartServices";
import { checkProductInCart } from "../../common/shopUtils";
import { formatCurrency } from "../../common/utils";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import PartnerOne from "../../components/sections/partners/PartnerOne";

function compare() {
  const dispatch = useDispatch();
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const compareState = useSelector((state) => state.compareReducer);
  const cartState = useSelector((state) => state.cartReducer);
  const onAddToCart = (product) => {
    setAddToCartLoading(true);
    onAddProductToCart({
      product,
      onSuccess: (data) => {
        setAddToCartLoading(false);
        message.success("Product added to cart");
        dispatch(fetchCartRequest());
      },
      onError: (mes, err) => {
        setAddToCartLoading(false);
        message.error(mes);
      },
    });
  };
  return (
    <LayoutOne title="Compare">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Compare</Breadcrumb.Item>
        </Breadcrumb>
        {compareState.length === 0 ? (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No product in compare"
          />
        ) : (
          <div className="compare">
            <div className="compare-table">
              <table>
                <colgroup>
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "25%" }} />
                  <col style={{ width: "25%" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>ITMES</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-item">
                        <img
                          src={process.env.PUBLIC_URL + item.coverImage}
                          alt="Product image"
                        />
                        <h5 className="product-type">{item.category}</h5>
                        <Link
                          href={process.env.PUBLIC_URL + `/product/[slug]`}
                          as={process.env.PUBLIC_URL + `/product/${item.slug}`}
                        >
                          <a className="product-name" title="Pure Pineapple">
                            {item.name}
                          </a>
                        </Link>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>CUSTOMER RATING</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-rate">
                        <Rate defaultValue={item.rate} />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Price</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-price">
                        {formatCurrency(item.price)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>ADD TO CART</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-atc">
                        <Button
                          disabled={checkProductInCart(cartState.data, item.id)}
                          onClick={() => onAddToCart(item)}
                          type="link"
                          loading={addToCartLoading}
                        >
                          Add to cart
                        </Button>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>AVAILABILITY</th>
                    {compareState.map((item, index) =>
                      item.quantity > 0 ? (
                        <td
                          key={index}
                          className="compare-availability -avaiable"
                        >
                          {item.quantity} in stock
                        </td>
                      ) : (
                        <td
                          key={index}
                          className="compare-availability -outstock"
                        >
                          Out of stock
                        </td>
                      )
                    )}
                  </tr>
                  <tr>
                    <th>weight</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-weight">
                        {item.specifications.weight}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Size</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-size">
                        {item.specifications.size}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Color</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-color">
                        <div
                          style={{ backgroundColor: item.specifications.color }}
                        ></div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    {compareState.map((item, index) => (
                      <td key={index} className="compare-weight">
                        {item.specifications.dimensions.long}x
                        {item.specifications.dimensions.width}x
                        {item.specifications.dimensions.height}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}

export default React.memo(compare);
