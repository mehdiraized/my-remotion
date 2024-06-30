"use client";

import { Rnd } from "react-rnd";
import { ReactNode } from "react";

const ResizeItemComponent: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<Rnd
			default={{
				x: 0,
				y: 0,
				width: "auto",
				height: "auto",
			}}
			resizeHandleComponent={{
				topRight: (
					<div className="w[20px] h-[20px] flex justify-center items-center">
						<div className="w-2 h-2 bg-amber-300" />
					</div>
				),
				topLeft: (
					<div className="w[20px] h-[20px] flex justify-center items-center">
						<div className="w-2 h-2 bg-amber-300" />
					</div>
				),
				bottomRight: (
					<div className="w[20px] h-[20px] flex justify-center items-center">
						<div className="w-2 h-2 bg-amber-300" />
					</div>
				),
				bottomLeft: (
					<div className="w[20px] h-[20px] flex justify-center items-center">
						<div className="w-2 h-2 bg-amber-300" />
					</div>
				),
			}}
		>
			{children}
		</Rnd>
	);
};

export default ResizeItemComponent;
