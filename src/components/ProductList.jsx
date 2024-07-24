import React from "react";
import StarRating from "./StarRating";

const products = [
  {
    id: 1,
    name: "Boys Graphic Print T-Shirt & Shorts Set",
    price: "25.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240528/azyC/6655c9f505ac7d77bb843d03/-473Wx593H-700019628-yellow-MODEL.jpg",
    rating: 4,
    isSale: false,
  },
  {
    id: 2,
    name: "Boys Printed Shorts & T-Shirt Set",
    originalPrice: "35.00",
    price: "28.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240712/mXjx/669142c26f60443f31fa0d97/-473Wx593H-700186641-orange-MODEL.jpg",
    rating: 4,
    isSale: true,
  },
  {
    id: 3,
    name: "Boys Graphic Print T-Shirt & Shorts Set",
    originalPrice: "50.00",
    price: "35.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240528/XtRO/6655cac405ac7d77bb845430/-473Wx593H-700019615-blue-MODEL.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 4,
    name: "Girls Printed Shirt Dress with Insert Pocket",
    price: "35.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231227/gytR/658c26aeafa4cf41f5eeead9/-473Wx593H-466922537-multi-MODEL.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 5,
    name: "Polka-Dot Shirt Dress",
    originalPrice: "30.00",
    price: "20.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20231227/f8UU/658c512aafa4cf41f5eff032/-473Wx593H-466924147-cream-MODEL.jpg",
    rating: 3,
    isSale: true,
  },
  {
    id: 6,
    name: "Floral Print A-line Dress with Slip Pocket",
    originalPrice: "39.00",
    price: "32.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220905/ErmO/6315f725aeb269dbb36bb8a5/-473Wx593H-469262142-multi-MODEL.jpg",
    rating: 5,
    isSale: true,
  },
  {
    id: 7,
    name: "Embroidered A-line Dress",
    originalPrice: "35.00",
    price: "27.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240617/lSTq/667003ff6f60443f3148cdd8/-473Wx593H-469115160-yellow-MODEL.jpg",
    rating: 4,
    isSale: true,
  },
  {
    id: 8,
    name: "Boys Striped Regular Fit Shirt",
    price: "40.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20240611/RhKO/6668000316fd2c6e6a860903/-473Wx593H-700012696-red-MODEL.jpg",
    rating: 5,
    isSale: false,
  },
  {
    id: 9,
    name: "Printed Linen Blend Shirt with Patch Pocket",
    price: "22.00",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230807/6tDb/64d1094deebac147fcaee97c/-473Wx593H-442110381-ltkhaki-MODEL.jpg",
    rating: 4,
    isSale: false,
  },
];

const ProductList = ({ addToCart, removeFromCart, isInCart }) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {products.map((product) => (
            <div className="col mb-5" key={product.id}>
              <div className="card h-100">
                {product.isSale && (
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>
                )}
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    <StarRating rating={product.rating} />
                    {product.isSale ? (
                      <>
                        <span className="text-muted text-decoration-line-through">
                          ${product.originalPrice}
                        </span>
                        ${product.price}
                      </>
                    ) : (
                      <>${product.price}</>
                    )}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    {isInCart(product) ? (
                      <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart(product)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline-dark mt-auto"
                        onClick={() => addToCart(product)}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
