import React, { useState } from "react";
import TotalAmount from "./TotalAmount";

export default function AddToCart() {
	const [quantity, setQuantity] = useState(1);

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

	function RemoveFromCart (){


	}

	return (
		<div className="py-8 px-3 flex justify-between my-10">
			<div className="cart-product shadow-sm flex justify-between p-3 w-[77%]">
				<div className="">
					<img src="" alt="product" />
				</div>
				<div>
					<h4 className="text-[20px] font-[600]">
						Price: <span className="text-red-600">$320</span>
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
						<input type="number" className="p-3 w-[60px] text-center" value={quantity}  />
						<button className="px-3" onClick={IncreaseQuantity}>
							+
						</button>
					</span>
				</div>
				<div>
					<button className="bg-red-500 text-white px-4">Remove</button>
				</div>
			</div>
			<div className="total-amount w-[20%] h-full">
				<TotalAmount></TotalAmount>
			</div>
		</div>
	);
}
