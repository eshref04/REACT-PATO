import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MainContext from "./context/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/Routes";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);
	const router = createBrowserRouter(ROUTES);

	const contextData = {
		data,
		setData,
	};

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

	return (
		<>
			<MainContext.Provider value={contextData}>
				<RouterProvider router={router} />
			</MainContext.Provider>
		</>
	);
}

export default App;
