"use client";

import { Separator } from "@/components/ui/separator";

import { PresetExport } from "../components/preset-export";
import { PresetActions } from "../components/preset-actions";
import { PresetSave } from "../components/preset-save";
import { ArtboardSelector } from "../components/artboard-selector";
import { PresetShare } from "../components/preset-share";
import { Artboard, artboards, types } from "../data/artboards";
import ContentEditor from "@/components/aspect-ratio-container";
import { useState } from "react";

export default function HomePage() {
	const [aspectRatio, setAspectRatio] = useState<Artboard>(artboards[0]);

	return (
		<>
			<div className="hidden h-full flex-col md:flex">
				<div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
					<h2 className="text-lg font-semibold text-nowrap">
						Remotion Test Project
					</h2>
					<div className="ml-auto flex w-full space-x-2 sm:justify-end">
						<ArtboardSelector
							types={types}
							artboards={artboards}
							value={aspectRatio}
							setValue={setAspectRatio}
						/>
						<PresetExport />
						<PresetSave />
						<PresetShare />
						<PresetActions />
					</div>
				</div>
				<Separator />
				<ContentEditor aspectRatio={aspectRatio.value} />
			</div>
		</>
	);
}
