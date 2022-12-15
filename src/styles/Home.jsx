import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';

const Home = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [msg, setmsg] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setmsg(true);
			setTimeout(()=>{
				setmsg(false);
			}, 2000);
			return ;
		}
		
		setCart([...cart, item]);
		console.log(cart);
		console.log(item);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].qty += d;
		
		if (tempArr[ind].qty === 0)
			tempArr[ind].qty = 1;
		setCart([...tempArr])
	}

  return (
	<React.Fragment>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			msg && <div className='msg'>Item is already added to your cart</div>
		}
	</React.Fragment>
  )
}

export default Home;