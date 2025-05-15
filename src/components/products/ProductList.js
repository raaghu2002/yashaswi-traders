import React from 'react';
import ProductCard from './ProductCard';
import SectionTitle from '../common/SectionTitle';
import products from '../../data/products';


const ProductList = () => {
  return (
    <section className="product-list">
      <div className="container">
        <SectionTitle 
          title="Our Products" 
          subtitle="Quality Steel Products for All Applications" 
        />

        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
