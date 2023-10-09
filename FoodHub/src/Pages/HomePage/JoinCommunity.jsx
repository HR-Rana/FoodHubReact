import React from "react";
import img from "../../assets/Images/img_1.png";

export default function JoinCommunity() {
	return (
		<div className="bg-blue-100">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="left-text items-center h-full flex flex-cols">
					<span className="w-[80%] mx-auto gap-3">
						<p>Join Our Community Forum</p>
						<h3 className="text-5xl my-4 capitalize">
							Let's start sharing your awesome recipes
						</h3>
						<button className="bg-yellow-500 hover:bg-yellow-400 mt-3 p-3 text-white w-[50%]">Join Now</button>
					</span>
				</div>
				<div className="right-img">
					<img src={img} alt="image" />
				</div>
			</div>
		</div>
	);
}
