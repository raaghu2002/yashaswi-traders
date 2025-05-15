import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import productsData from '../../data/products';
import featuredproducts from '../../styles/components/featuredproducts.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

const FeaturedProducts = () => {

  // const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
  // Get first 4 products to feature
  const featuredProducts = productsData.slice(0, 4);

  return (
    <section className="section__slider">
      <div className="container__center">
        <div style={{ textAlign: 'center', margin: '0 0 40px 0' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '10px' }}>Featured Products</h2>
          <p>Quality Steel Solutions for Every Need</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Parallax]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          parallax={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          className="featured-products-swiper"
        >
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="swiper-slide__block">
                <div className="swiper-slide__block__img" data-swiper-parallax-y="70%">
                  <a href={`#product-${product.id}`}>
                    <img
                      src={product.image || "/api/placeholder/800/600"}
                      alt={product.name}
                    />
                  </a>
                </div>
                <div className="swiper-slide__block__text">
                  <h2 data-swiper-parallax-x="-60%" className="main__title">
                    {product.name.split(' ')[0]}
                    <br />
                    {product.name.split(' ').slice(1).join(' ')}
                    <span>.</span>
                  </h2>
                  <h3 data-swiper-parallax-x="-50%" className="main__subtitle">
                    {product.categories?.join(', ') || 'SS Steel'}

                    <span> • {new Date().getFullYear()}</span>
                  </h3>
                  <p data-swiper-parallax-x="-40%" className="paragraphe">
                    {product.description}
                  </p>
                  {/* <a 
                    data-swiper-parallax-x="-30%" 
                    className="link" 
                    href={`#product-${product.id}`}
                  >
                    Discover
                  </a> */}
                  <span data-swiper-parallax-y="60%" className="number">{index + 1}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
          </div>
        </Swiper>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          {/* <a href={`${BASE_URL}/products`} className="link__apply">View All Products</a> */}
          <Link to="/products" className="link__apply">View All Products</Link>
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;