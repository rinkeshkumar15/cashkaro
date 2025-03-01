      import React , { useEffect , useState } from 'react';
      import './Home.css'; 
      import  karo from './karo.jpeg'
       import shoe from './shoes.jpeg'; 
       import shoe2 from './shoe2.jpeg';
      import axios from 'axios';
    
      

  
    const Home=() => {
      const[productData, setproduct]=useState([]);
      async function dummy() {
        await axios.get("https://dummyjson.com/carts").then((res) =>{
        setproduct(res.data.products);
        });
    }
    dummy()
    useEffect(() => {
    },[]);
    console.log(productData);
  return (
    <div className="main">
      <header>
         <h1 className="logo">Cashkaro</h1>
        <img src={karo} alt="Logo"  className='yuvaraj'/> 

        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Product</li>
          <li>Contact</li>
        </ul>

        <button className="btn">Login</button>
      </header>

      <div className="products">
        <div className="product">
          <img src={shoe} alt="shoe" />
          <p> Anjrs mens latest stylecasual shoe</p>
          <p>SIZE & COLOR</p>
          
          <div className="sizes">
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>

          <div className="colors">
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>

          <h3>$15</h3>
        </div>

        <div className="product">
          <img src={shoe2} alt="shoe2" />
          <p>men puma Smashic unisex sneakers</p>
          <p>SIZE & COLOR</p>

          <div className="sizes">
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>

          <div className="colors">
            <div className="color color1"></div>
            <div className="color color2"></div>
            <div className="color color3"></div>
          </div>

          <h3>$15</h3>
        </div>
      </div>
    </div>
  );
};



export default Home
