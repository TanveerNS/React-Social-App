import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Tooltip, message, Modal, Breadcrumb } from "antd";
import Link from "next/link";

import { fetchWishListRequest } from "../../redux/actions/wishlistActions";
import { fetchCartRequest } from "../../redux/actions/cartActions";
import { onRemoveProductFromWishlist } from "../../common/wishlistServices";
import { onAddProductToCart } from "../../common/cartServices";
import { checkProductInCart } from "../../common/shopUtils";
import { formatCurrency } from "../../common/utils";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import FetchDataHandle from "../../components/other/FetchDataHandle";
import PartnerOne from "../../components/sections/partners/PartnerOne";

function wishlist() {
  const dispatch = useDispatch();
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [modalState, setModalState] = useState({
    visible: false,
    message: "Add some message",
    cartId: null,
  });
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistState = useSelector((state) => state.wishlistReducer);

  const showModal = (message, productId) => {
    setModalState({
      ...modalState,
      visible: true,
      message: message,
      productId,
    });
  };

  const handleOk = (e) => {
    onRemoveProductFromWishlist({
      productId: modalState.productId,
      onSuccess: () => {
        setModalState({ ...modalState, visible: false });
        message.success("Product removed from wishlist");
        dispatch(fetchWishListRequest());
      },
      onError: (mes) => {
        setModalState({ ...modalState, visible: false });
        message.error(mes);
      },
    });
  };

  const handleCancel = (e) => {
    setModalState({ ...modalState, visible: false });
  };

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
    <LayoutOne title="Wishlist">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Wishlist</Breadcrumb.Item>
        </Breadcrumb>
        <FetchDataHandle
          data={wishlistState}
          renderData={(data) => (
            <div className="wishlist">
              <div className="shop-table">
                <table>
                  <colgroup>
                    <col style={{ width: 150 / 16 + "em" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "20%" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Add to cart</th>
                      <th>
                        <Tooltip title="Clear cart">
                          <Button
                            onClick={() =>
                              showModal(
                                "Are you sure to remove alll product from cart"
                              )
                            }
                            icon={<i className="fal fa-times" />}
                          ></Button>
                        </Tooltip>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td className="table-img">
                          <div className="table-img-wrapper">
                            <img
                              src={process.env.PUBLIC_URL + item.coverImage}
                              alt="Product image"
                            />
                          </div>
                        </td>
                        <td className="table-name">{item.name}</td>
                        <td className="table-price">
                          {formatCurrency(item.price)}
                        </td>
                        <td className="table-atc">
                          <Button
                            disabled={checkProductInCart(
                              cartState.data,
                              item.id
                            )}
                            loading={addToCartLoading}
                            onClick={() => onAddToCart(item)}
                            type="primary"
                            shape="round"
                          >
                            Add to cart
                          </Button>
                        </td>
                        <td className="table-remove">
                          <Tooltip title="Remove product">
                            <Button
                              onClick={() =>
                                showModal(
                                  "Are you sure to remove this product from cart",
                                  item.id
                                )
                              }
                              icon={<i className="fal fa-times" />}
                            ></Button>
                          </Tooltip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button className="wishlist-btn" type="primary" shape="round">
                <Link href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                  <a>Continue shopping</a>
                </Link>
              </Button>
            </div>
          )}
        />
        <PartnerOne />
      </Container>
      <Modal
        visible={modalState.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalState.message}</p>
      </Modal>
    </LayoutOne>
  );
}

export default React.memo(wishlist);
