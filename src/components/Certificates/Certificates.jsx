import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Certificates = () => {
	return (
		<div className="md:bg-certi-bg bg-certif-tablet-bg bg-cover bg-center  flex flex-col items-none text-center pb-16 relative">
			<div className="flex flex-col text-center">
				<h1 className="custom-h1">certifications</h1>
				<div className="flex gap-[60px] flex-wrap justify-center items-center">
					<div className="flex flex-col gap-[60px] tablet:mb-[0]">
						<img
							className="w-[22em] md:w-[38em] border-[7px] border-solid border-[#ec6bc0] rounded-[3px] shadow-[0_0_20px_rgb(255,0,136)]"
							src="./images/cert-1.png"
							alt="Web development certification"
						/>
						<img
							className="w-[22em] md:w-[38em] border-[7px] border-solid border-[#ec6bc0] rounded-[3px] shadow-[0_0_20px_rgb(255,0,136)]"
							src="./images/cert-2.png"
							alt="Javascript certification"
						/>
					</div>
					<div className="flex flex-col gap-[60px] tablet:mt-[14em]">
						<img
							className="w-[22em] md:w-[38em] border-[7px] border-solid border-[#ec6bc0] rounded-[3px] shadow-[0_0_20px_rgb(255,0,136)]"
							src="./images/cert-3.png"
							alt="React certification"
						/>
						<img
							className="w-[22em] md:w-[38em] border-[7px] border-solid border-[#ec6bc0] rounded-[3px] shadow-[0_0_20px_rgb(255,0,136)]"
							src="./images/cert-en-4.png"
							alt="Frontend React Career certification"
						/>
					</div>
					<section className="w-full flex items-center justify-center pb-[20rem]">
						<Contact />
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Certificates;
