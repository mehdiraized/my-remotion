"use client";

import { Input } from "@/components/ui/input";

import { ContentItemComponentProps } from "./types";

const ContentItemComponent: React.FC<ContentItemComponentProps> = ({
	id,
	type,
	content,
	onEdit,
}) => {
	return (
		<>
			{/* <AbsoluteFill> */}
			{type === "text" && (
				<div className={`p-2 hover:bg-white  rounded-lg transition-colors`}>
					<Input
						value={content}
						onChange={(e) => onEdit(id, e.target.value)}
						className="border-none shadow-none focus:bg-white text-lg"
						onMouseDown={(e) => e.stopPropagation()}
					/>
				</div>
			)}
			{type === "image" && (
				// eslint-disable-next-line @next/next/no-img-element
				<img
					src={content}
					alt="Draggable content"
					className={`max-w-[100%] max-h-[auto] rounded shadow`}
					draggable={false}
				/>
			)}
			{type === "video" && (
				<video className="rounded shadow" controls={false} muted autoPlay loop>
					<source src={content} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
			{/* {type === "video" && (
				<Video src={content} />
			)} */}
			{/* </AbsoluteFill> */}
		</>
	);
};

export default ContentItemComponent;
