
import {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);


  return (
    <div>
   <Header cart={count} />
   <Banner />
   <div className="product-list">
   {/* <Product setCount={setCount} count={count}/>
   <Product setCount={setCount} count={count}/>
   <Product setCount={setCount} count={count}/>
   <Product setCount={setCount} count={count}/> */}
   {productsArr.map((shoe) => {
     return <Product image={shoe.image} name={shoe.name} price={shoe.price} setCount={setCount} count={count}/>
   })}
   </div>
    </div>
   
  );
}

export default App;


//header component



function Header({cart}) {

  return(
  <div className="header">
    <h1>Products</h1>
    <h3>Cart {cart}</h3>
  </div>
  );
}

// Banner component

function Banner() {
return(
   <div className='Banner'>
    <h1>Monsoon Offers!</h1>
    <h3>Shop your heart out</h3>
   </div>
);
}


// products array

const productsArr = [
  {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7shaPrUqS-S8eOMnipXiDAgYPEar-H_8eDg&usqp=CAU',
  name: 'Nike',
  price: 300
},
{
  image: 'https://i.pinimg.com/originals/f2/80/94/f280941d0279be5d422113204202b48e.jpg',
  name: 'Adidas',
  price: 250
},
{
  image: 'https://5.imimg.com/data5/ANDROID/Default/2021/1/GZ/TU/CU/12235381/product-jpeg-500x500.jpg',
  name: 'Nike Jordan 1',
  price: 380
},
{
  image: 'https://sneakernews.com/wp-content/uploads/2022/04/adidas-Yeezy-Foam-Runner-Stone-Sage-GX4472-Restock-5.jpeg',
  name: 'Yeezy',
  price: 3000
}
]

// Product component  

function Product({setCount, count, image, name, price}) {

  
  const [inCart, setInCart] = useState(false);
  
 
  return(
    <div className='product'>
      <img alt='some-shoes' src={image} ></img>
      <h3>{name}</h3>
      <p>$ {price}</p>
      <button onClick={() => {
         setCount(count + 1);
         setInCart(true);
        }} className="add-button" disabled={inCart} >Add</button>
      <button onClick={() => {
         setCount(count - 1);
         setInCart(false);
        }} className="remove-button" disabled={!inCart} >Remove</button>
    </div>
  );
}