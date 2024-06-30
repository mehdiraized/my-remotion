"use client";

import { useState, useRef, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Video, useVideoConfig, Composition, AbsoluteFill } from "remotion";
// import { Player } from "@remotion/player";
// import { getVideoMetadata } from "@remotion/media-utils";
// import { AbsoluteFill, Composition, Video, staticFile } from "remotion";

import { ContentItem, ContentType } from "./content/types";
import Header from "./content/Header";
import ContentItemComponent from "./content/ContentItem";
import ResizeItemComponent from "./content/ResizeItem";

const ContentEditor = ({ aspectRatio }: { aspectRatio: number }) => {
	const [items, setItems] = useState<ContentItem[]>([]);
	const vidRef = useRef<any>();

	useEffect(() => {
		if (vidRef?.current) vidRef.current.play();
	}, []);

	const handleAddItem = async (type: ContentType, content?: any) => {
		const newItem: ContentItem = {
			id: Date.now().toString(),
			type,
			content: content || "",
		};
		setItems([...items, newItem]);
	};

	const handleEditText = (id: string, newContent: string) => {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, content: newContent } : item
			)
		);
	};

	return (
		<div className="container mx-auto p-4">
			<Header onAddItem={handleAddItem} />
			<div
				style={{
					height: "calc(100vh - 150px)",
					width: `calc((100vh - 150px) * (${aspectRatio}))`,
				}}
				className="w-auto mx-auto"
			>
				<AspectRatio
					ratio={aspectRatio}
					className="w-full h-full relative rounded-xl border border-solid border-gray-400 overflow-hidden"
				>
					{/* <Player
						component={() => (
							<Composition
								id="MyComposition"
								durationInFrames={150}
								fps={30}
								width={width}
								height={height}
								component={() => (
									<>
										<AbsoluteFill> */}
					<ResizeItemComponent>
						{/* <Video src={staticFile("/video.mp4")} playsInline loop /> */}
						<video
							ref={vidRef}
							className="rounded shadow"
							controls={false}
							muted
							autoPlay
							loop
						>
							<source src={"/video.mp4"} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</ResizeItemComponent>
					{/* </AbsoluteFill> */}
					{items.map((item) => (
						<ResizeItemComponent key={item.id}>
							{/* <AbsoluteFill > */}
							<ContentItemComponent {...item} onEdit={handleEditText} />
							{/* </AbsoluteFill> */}
						</ResizeItemComponent>
					))}
					{/* </>
								)}
							/>
						)}
						// inputProps={inputProps}
						durationInFrames={150}
						fps={30}
						width={width}
						height={height}
						style={{
							width: "100%",
						}}
						controls
						autoPlay
						loop
					/> */}
				</AspectRatio>
			</div>
		</div>
	);
};

export default ContentEditor;
