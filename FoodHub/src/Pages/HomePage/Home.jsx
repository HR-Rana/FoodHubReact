import React, { useState } from "react";
import Slide from "./Slide";
import ProductItem from "./Product/Product";
import JoinCommunity from "./JoinCommunity";

export default function Home() {
	return (
		<>
			<div className="hero-area">
				<Slide></Slide>
			</div>
			<div className="some-Products-area">
				
				<ProductItem
					CartButton={false}
					ProductSlice={true}
					sliceNumber={6}
				></ProductItem>
			</div>
			<div>
				<JoinCommunity></JoinCommunity>
			</div>
		</>
	);
}
