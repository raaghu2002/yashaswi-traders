import React from 'react';
import ProductList from '../components/products/ProductList';
import ScrollToTop from '../components/common/ScrollToTop';
import '../styles/components/ProductsPage.css'; 

const ProductsPage = () => {
  return (
    <div className="products-page">
      
      
      <ProductList />
      <ScrollToTop />
    </div>
  );
};

export default ProductsPage;