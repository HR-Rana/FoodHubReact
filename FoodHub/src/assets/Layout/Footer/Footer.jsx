import React from "react";
import logo from "../../Images/logo.png";
import { Icon } from "@iconify/react";

export default function Footer() {
	return (
		<footer className="bg-gray-800 py-[50px] px-5">
			<div className="grid grid-cols-3 text-gray-300 w-[80%] mx-auto justify-center">
				<div className="logo-area w-[55%]">
					<img src={logo} alt="logo" className="w-[80%]" />

					<p className="my-5 ">
						I provide new recipes with a twist on daily basis. I also post blog
						posts about fun ideas to do in the kitchen
					</p>

					<span className="flex justify-between w-[50%] text-[30px] text-gray-200 ">
						<Icon icon="formkit:facebook" />
						<Icon icon="mdi:twitter" />
						<Icon icon="mdi:linkedin" />
						<Icon icon="mdi:instagram" />
					</span>
				</div>
				<div className="recipe justify-center grid w-[100%]">
					<h3 className="text-2xl my-3">Recipes</h3>
					<span className="list-none">
						<li>Breakfast </li>
						<li>Desserts </li>
						<li>Dinner</li>
						<li>Dairy</li>
					</span>
				</div>
				<div className="recipe w-[100%] justify-center grid">
					<h3 className="text-2xl my-3">Legal</h3>
					<span className="list-none">
						<li>Privacy Policy</li>
						<li>Refund Policy</li>
						<li>Cookie Policy</li>
						<li>Terms and Conditions</li>
					</span>
				</div>
			</div>
		</footer>
	);
}
