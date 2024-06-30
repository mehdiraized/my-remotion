"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { TextIcon, ImageIcon, VideoIcon } from "@radix-ui/react-icons";
import { ContentType } from "./types";

const Header: React.FC<{
	onAddItem: (type: ContentType, content: any) => void;
}> = ({ onAddItem }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileUpload = (type: "image" | "video") => {
		if (fileInputRef.current) {
			fileInputRef.current.accept = type === "image" ? "image/*" : "video/*";
			fileInputRef.current.click();
		}
	};

	return (
		<div className="flex space-x-2 mb-4 items-center justify-center">
			<Button
				variant="outline"
				onClick={() => onAddItem("text", "This is Test Text")}
			>
				<TextIcon className="mr-2 h-4 w-4" /> Add Text
			</Button>
			<Button variant="outline" onClick={() => handleFileUpload("image")}>
				<ImageIcon className="mr-2 h-4 w-4" /> Add Image
			</Button>
			<Button variant="outline" onClick={() => handleFileUpload("video")}>
				<VideoIcon className="mr-2 h-4 w-4" /> Add Video
			</Button>
			<input
				type="file"
				ref={fileInputRef}
				className="hidden"
				onChange={(e) => {
					const file = e.target.files?.[0];
					if (file) {
						const reader = new FileReader();
						reader.onload = (event) => {
							onAddItem(
								file.type.startsWith("image/") ? "image" : "video",
								event.target?.result
							);
						};
						reader.readAsDataURL(file);
					}
				}}
			/>
		</div>
	);
};

export default Header;
