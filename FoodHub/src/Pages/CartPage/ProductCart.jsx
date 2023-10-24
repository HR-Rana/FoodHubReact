import React, { useContext, useState } from "react";
import TotalAmount from "./TotalAmount";
import { AuthContext } from "../Provider/AuthProvider";

export default function AddToCart() {
	const [quantity, setQuantity] = useState(1);
	const { cart, cartArr } = useContext(AuthContext);

	function IncreaseQuantity() {
		setQuantity(quantity + 1);
	}
	function DecreaseQuantity() {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		} else {
			return quantity;
		}
	}
	
	const CartArr2 = localStorage.getItem('CartItems');
	const cartItems = JSON.parse(CartArr2);


	function RemoveFromCart(data) {
		// localStorage.removeItem("CartItems")
	}

	return (
		<div className="py-8 px-3 flex justify-between my-10">
			<div className="w-[75%]">
			 <div className="mb-6">
			 	<h3 className="text-[28px] ">Cart items, which you have added for Buy</h3>
				<p className="text-[20px]">Total : <span className="text-[600] font-[600] text-red-500">{cartItems?.length}</span> Product</p>
			 </div>
				{cartItems?.map((data) => {
					const { id, title, img, price } = data;
					return (
						<div className="flex items-center my-5 shadow-sm p-3 justify-between" key={id}>
							<div className="w-[15%]">
								<img
									src={img}
									className="w-[100px] items-center "
									alt={title}
								/>
							</div>
							<div className="w-[20%]">
								<h4 className="text-[20px] font-[600]">
									Price: <span className="text-red-600">${price}</span>
								</h4>
								<span>
									<ul>Ratings...</ul>
								</span>
							</div>
							<div className="quantity w-[10%]">
								<span className="w-[90%] mx-auto h-full flex items-center justify-between">
									<button className="px-3" onClick={DecreaseQuantity}>
										-
									</button>
									{/* <button className="mx-1 px-5">{quantity}</button> */}
									<input
										type="number"
										className="p-3 w-[60px] text-center"
										value={quantity}
									/>
									<button className="px-3" onClick={IncreaseQuantity}>
										+
									</button>
								</span>
							</div>
							<div>
								<button className="bg-red-500 text-white px-4" onClick={()=>RemoveFromCart(data)}>Remove</button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="total-amount w-[20%] h-full">
				<TotalAmount></TotalAmount>
			</div>
		</div>
	);
}
