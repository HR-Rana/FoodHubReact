import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// slide images

const SlideData = [
	{
		id: "01",
		title:
			"No matter how you cook,The FoodHub has many the recipes to surprice you.",
		body: "Savor the Flavors: Your Ultimate Destination for Delicious Cuisine!",
	},
	{
		id: "02",
		title:
			"No matter how you cook,The FoodHub has many the recipes to surprice you.",
		body: "Savor the Flavors: Your Ultimate Destination for Delicious Cuisine!",
	},
	{
		id: "03",
		title:
			"No matter how you cook, The FoodHub has many the recipes to surprice you.",

		body: "Savor the Flavors: Your Ultimate Destination for Delicious Cuisine!",
	},
];

export default function Slide() {
	return (
		<>
			<Swiper
				rewind={true}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				{SlideData.map((data) => {
					const { img, body, title, id } = data;
					return (
						<SwiperSlide className="hero" key={id}>
							<div className="card">
								<div className="card-body">
									<span>
										<h3 className="text-7xl capitalize text-gray-300 font-[800] text-center">{title}</h3>
										<p className="text-2xl my-5">{body}</p>
									</span>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
}
