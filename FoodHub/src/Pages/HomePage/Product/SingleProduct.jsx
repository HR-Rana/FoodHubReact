import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductData } from "../../../assets/ProductData/ProductData";

export default function SingleProduct() {
	const [productView, setProductView] = useState("");
	const { id } = useParams();

	const product = ProductData.find((data) => {
		return data.id == id;
	});

	console.log(product.id);

	return (
		<div className="my-[50px]">
			<div className="product-image w-[50%] mx-auto flex justify-center">
				<img src={product.img} alt="Product" className="w-[100%]" />
			</div>
			<div className="product-body w-[90%] mx-auto text-left">
				<h3 className="text-3xl my-3">
					Product Name:{" "}
					<span className="text-green-600 font-[500]">{product.title}</span>
				</h3>
				<p>
					Product Details: <span className="">{product.body}</span>
				</p>
			</div>
		</div>
	);
}
