import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import HeroSection from "../../../components/HeroSection/HeroSection";
import axios from "axios";
import MainContext from "../../../context/Context";
import { useParams } from "react-router";

const Product = () => {
	const { data, setData } = useContext(MainContext);

  const deleteFunc = (_id) => {
    
    axios.delete(`http://localhost:8080/api/products/${_id}`).then((res) => {
        
        const updatedData = data.filter((x) => x._id !== _id);
        
        setData(updatedData);
    }).catch(error => {
        
        console.error( error);
    });
};


	return (
		<>
			<HeroSection />
			<div className="container pt-5">
				<table class="table table-success">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Image</th>
							<th scope="col">Title</th>
							<th scope="col">Price</th>
							<th scope="col">Delete</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index}>
								<th scope="row">{item._id}</th>
								<td>
									<img width={"60px"} height={"60px"} src={item.image} alt="" />
								</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>
									<button
										onClick={() => {
											deleteFunc(item._id);
										}}
										className="btn btn-danger"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Product;
