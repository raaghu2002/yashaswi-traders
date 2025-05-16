import React, { useState } from 'react';
import '../../styles/components/ProductCard.css';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  // Handle image navigation - now only used with the position controls
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="productCard_block">
      <div className="productCard_row">
        {/* Left Side - Product Image and Slider */}
        <div className="productCard_leftSide">
          <div className="productCard_brendBlock">
            <div className="productCard_brendBlock__imageBlock">
              <span>{product.categories?.[0] || 'Unknown'} Grade</span>
            </div>
          </div>

          <div className="sliderBlock">
            <ul className="sliderBlock_items">
              {/* Check if images exist and map through them */}
              {product.images && product.images.length > 0 ? (
                product.images.map((image, index) => (
                  <li
                    key={index}
                    className={`sliderBlock_items__itemPhoto ${
                      currentImageIndex === index ? 'sliderBlock_items__showing' : ''
                    }`}
                  >
                    <img src={image} alt={`${product.name} - view ${index + 1}`} />
                  </li>
                ))
              ) : (
                <li className="sliderBlock_items__itemPhoto sliderBlock_items__showing">
                  <img src={product.image || ''} alt={product.name} />
                </li>
              )}
            </ul>

            
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="productCard_rightSide">
          <div className="block_product">
            <h2 className="block_name block_name__mainName">{product.name}</h2>

            <p className="block_product__availableCategories">
              Available in: {product.categories?.join(', ') || 'SS Steel'}
            </p>

            <p className="block_product__advantagesProduct">
              {product.description || 'No description available.'}
            </p>

            <div className="block_informationAboutDevice">
              <div className="block_variantsSection">
                <h3 className="variants_title">Variants</h3>
                <div className="variants_container">
                  {product.variants?.map((variant, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedVariant(index)}
                      className={`variant_item ${selectedVariant === index ? 'variant_item_selected' : ''}`}
                    >
                      {variant}
                    </div>
                  )) || <div>No variants available.</div>}
                </div>
              </div>

              <div className="block_applicationsSection">
                <h3 className="applications_title">Applications</h3>
                <div className="applications_container">
                  {product.applications?.map((application, index) => (
                    <span key={index} className="application_badge">
                      {application}
                    </span>
                  )) || <span>No applications listed.</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;