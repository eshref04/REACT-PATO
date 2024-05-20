import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MainContext from "./context/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/Routes";
import axios from "axios";
import { HelmetProvider } from 'react-helmet-async';

function App() {
	const [data, setData] = useState([]);
	const router = createBrowserRouter(ROUTES);
    const [basket, setBasket] = useState( localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/products")
			.then((res) => {
				setData([...res.data]);
			})
			.catch((error) => {
				console.log("Error geldi");
			});
	}, []);

	useEffect(() => {
		localStorage.setItem("basket", JSON.stringify(basket));
	  }, [basket]);
	
	  function deleteFromBasket(id) {
		let target = basket.find((x) => x._id == id);
		if (target.count > 1) {
		  target.count -= 1;
		  target.totalPrice -= target.price;
		  setBasket([...basket]);
		} else {
		  setBasket([...basket.filter((x) => x._id != id)]);
		}
	  }
	
	  function addToBasket(id) {
		let basketItem = basket.find((x) => x._id == id);
	
		if (!basketItem) {
		  let target = data.find((x) => x._id == id);
		
		  let newItem = {
			...target,
			count: 1,
			totalPrice: target.price,
		  };
		  setBasket([...basket, newItem]);
		} else {
		  basketItem.count += 1;
		  basketItem.totalPrice += basketItem.price;
		  setBasket([...basket]);
		}
	  }
	
	
		const contextData = {
		  data, setData, addToBasket, deleteFromBasket, basket, setBasket,
		}

	return (
		<>
			<MainContext.Provider value={contextData}>
			<HelmetProvider>
            <RouterProvider router={router} />
			</HelmetProvider>	
			</MainContext.Provider>
		</>
	);
}

export default App;
