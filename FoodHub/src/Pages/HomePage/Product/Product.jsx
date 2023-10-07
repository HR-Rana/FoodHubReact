import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductData } from "../../../assets/ProductData/ProductData";

export default function ProductItem(props) {
	const [products, setProduct] = useState(ProductData);
	const [addCart, setAddcart] = useState(false);
	const [ShowaddCartButton, setShowAddCartButton] = useState(false);

	const slice = ProductData.slice(0, props.sliceNumber);
	const Slice = props.ProductSlice;

	function AddtoCartProductHandler(e, item) {
		// let tempArr = [];
		// products.forEach((element) => {
		// 	if (element.id === item.id) {
		// 		element = {
		// 			...element,
		// 			is_added: 1,
		// 		};
		// 	}
		// 	tempArr.push(element);
		// });
		// setProduct(tempArr);


		let store =[];
		ProductData.forEach(data =>{
			if (data.id === item.id) {
				data ={...item,	Button:true};
				// console.log(data);
			}
			store.push(data);
			
		})
		setProduct(store);
		// console.log(products)
		console.log(store);
	}

	return (
		<div className="Product-area">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{Slice
					? slice.map((data) => {
							const { id, price, title, review, body, img, sales } = data;
							return (
								<div className="product-card shadow-md p-2" title={title}>
									<Link to={`/Product/${id}`}>
										<div className="card-title">
											<span className="h-[200px] flex justify-center w-[80%] mx-auto">
												<img
													src={img}
													alt="product"
													className="hover:scale-100 scale-90 transition-all duration-700"
												/>
											</span>
										</div>
										<div className="card-body w-[80%] mx-auto ">
											<span>
												<h3 className="text-xl text-green-600 font-[600]">
													{title}
												</h3>
												<p className="my-5 font-[500]">
													{body.slice(0, 220) + `...`}
												</p>
											</span>
											<div className="price my-2 flex justify-between">
												<p>
													Price:{" "}
													<span className="text-red-700 font-[600]">
														{price}
													</span>
												</p>
												<p>
													Sales:{" "}
													<span className="text-red-700 font-[600]">
														{sales}
													</span>
												</p>
												<p>
													Review:{" "}
													<span className="text-red-700 font-[600]">
														{review}
													</span>
												</p>
											</div>
										</div>
									</Link>
									<div className="card-footer">
										{props.CartButton ? (
											<span>
												<button
													className="w-[100%] my-2 font-[500] mx-auto"
													onClick={(e) => {AddtoCartProductHandler(e, data)}}
												>
													{data.is_added ? "Added" : "Add to Cart"}
												</button>
											</span>
										) : (
											""
										)}
									</div>
								</div>
							);
					  })
					: products.map((data) => {
							const { id, price, title, review, body, img, sales } = data;
							return (
								<div
									className="product-card shadow-md p-2"
									title={title}
									key={id}
								>
									<Link to={`/Product/${id}`}>
										<div className="card-title">
											<span className="h-[200px] flex justify-center w-[80%] mx-auto">
												<img
													src={img}
													alt="product"
													className="hover:scale-100 scale-90 transition-all duration-700"
												/>
											</span>
										</div>
										<div className="card-body w-[80%] mx-auto ">
											<span>
												<h3 className="text-xl text-green-600 font-[600]">
													{title}
												</h3>
												<p className="my-5 font-[500]">
													{body.slice(0, 220) + `...`}
												</p>
											</span>
											<div className="price my-2 flex justify-between">
												<p>
													Price:{" "}
													<span className="text-red-700 font-[600]">
														{price}
													</span>
												</p>
												<p>
													Sales:{" "}
													<span className="text-red-700 font-[600]">
														{sales}
													</span>
												</p>
												<p>
													Review:{" "}
													<span className="text-red-700 font-[600]">
														{review}
													</span>
												</p>
											</div>
										</div>
									</Link>
									<div className="card-footer">
										{props.CartButton ? (
											""
										) : (
											<span>
												<button
													className="w-[100%] my-2 font-[500] mx-auto"
													onClick={(e)=>{AddtoCartProductHandler(e, data)}}
												>
													{data.is_added ? "Added" : "Add to Cart"}
												</button>
											</span>
										)}
									</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
}
