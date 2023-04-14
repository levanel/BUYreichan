import React, { useState } from 'react';

const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showAboutContent, setShowAboutContent] = useState(false);

  const handleOptionSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (onSelect) {
      onSelect(selectedValue);
    }

    if (selectedValue === 'about') {
      setShowAboutContent(true);
    } else {
      setShowAboutContent(false);
    }
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionSelect}>
        <option value="">Select an option</option>
        <option value="home">Home</option>
        <option value="about">About Us</option>
        <option value="cart">Cart</option>
      </select>
      {showAboutContent && (
        <div>
          <h1>Hello Aagrim</h1>
          {/* Render additional content for About Us */}
          {/* Add any other desired content here */}
        </div>
      )}
    </div>
  );
};

const ShoppingItem = () => {
  const handleAddToCart = () => {
    // Handle Add to Cart logic here
    console.log('Added to Cart');
  };

  const handleBuyNow = () => {
    // Handle Buy Now logic here
    console.log('Buy Now clicked');
  };
  return (
    <div>
      <img
        src="https://th.bing.com/th/id/OIP.otCrQVmdjIpA_5TT1FPWigHaHa?pid=ImgDet&rs=1"
        alt="Shopping Item"
      />
      <h3>Product name: Rei Ayanami Plush</h3>
      <h3>product description: rei</h3>
      <p>Price: Rs. 10,000/pc</p>
      <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
        <span>Rating: </span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <h1>Reviews</h1>
        <h4>
          <span>Daniel creg:</span>
        </h4>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <p>very cool!! wait why is it moving?</p>
        <h4>Adam Adamas: </h4>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <p>GOD HELP ME SHE KILLED MY MOTHER</p>
        <h4>Lucy heartfilia: </h4>
        <span>★</span>
        <p>Every second you're not running away, it is only getting closer</p>
      </div>
    </div>
  );
};

const App = () => {
  const handleDropdownSelect = (selectedOption) => {
    console.log('Selected Option:', selectedOption);
    // Handle selected option here
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <Dropdown onSelect={handleDropdownSelect} />
      <ShoppingItem />
    </div>
  );
};

export default App;
