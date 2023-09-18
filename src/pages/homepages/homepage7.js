import React, { useState, useEffect } from 'react';
import { FaUsers, FaGlobeAsia, FaShoppingBasket } from 'react-icons/fa';
import { MdDiscount } from 'react-icons/md';

const Counter = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [products, setProducts] = useState(0);
  const [brands, setBrands] = useState(0);
  const [countries, setCountries] = useState(0);

  const targetValues = {
    happyCustomers: 21900,
    products: 326,
    brands: 311,
    countries: 190,
  };

  useEffect(() => {
    const interval = setInterval(() => {
     
      setHappyCustomers(prevCount => Math.min(prevCount + 1, targetValues.happyCustomers));
      setProducts(prevCount => Math.min(prevCount + 1, targetValues.products));
      setBrands(prevCount => Math.min(prevCount + 1, targetValues.brands));
      setCountries(prevCount => Math.min(prevCount + 1, targetValues.countries));
    }, 150); 

    return () => {
      clearInterval(interval); 
    };
  }, [targetValues]);

  return (
    <div>
      <div className="main_container counter_section">
        <div className="no1 counter_main_data">
          <div className="font_data">
            <h3><FaUsers /></h3>
          </div>
          <div className='counter_main'>{happyCustomers}+</div> <br />
          <p>Happy Customers</p>
        </div>

        <div className="no1">
          <div className="font_data">
            <h3><FaShoppingBasket /></h3>
          </div>
          <div className='counter_main'>{products}+</div> <br />
          <p>Products</p>
        </div>

        <div className="no1">
          <div className="font_data">
            <h3><MdDiscount /></h3>
          </div>
          <div className='counter_main'>{brands}+</div> <br />
          <p>Brands</p>
        </div>

        <div className="no1 counter_last_heading">
          <div className="font_data">
            <h3><FaGlobeAsia /></h3>
          </div>
          <div className='counter_main'>{countries}+</div> <br />
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
