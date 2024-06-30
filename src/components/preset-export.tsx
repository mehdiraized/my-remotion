"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function PresetExport() {
	const [value, setValue] = useState<number>(10);

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default">Export Video</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px]">
				<DialogHeader>
					<DialogTitle>Export Process</DialogTitle>
					<DialogDescription>
						Please wait while we export your video
					</DialogDescription>
				</DialogHeader>
				<Slider
					id="test"
					max={100}
					step={1}
					value={[80]}
					className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
				/>
			</DialogContent>
		</Dialog>
	);
}
