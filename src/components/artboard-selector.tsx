"use client";

import * as React from "react";
import {
	CaretSortIcon,
	CheckIcon,
	DimensionsIcon,
} from "@radix-ui/react-icons";
import { PopoverProps } from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
import { useMutationObserver } from "@/hooks/use-mutation-observer";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Artboard, ArtboardType } from "../data/artboards";

interface ArtboardSelectorProps extends PopoverProps {
	types: readonly ArtboardType[];
	artboards: Artboard[];
	value: Artboard;
	setValue: (value: Artboard) => void;
}

export function ArtboardSelector({
	artboards,
	types,
	value,
	setValue,
	...props
}: ArtboardSelectorProps) {
	const [open, setOpen] = React.useState(false);
	const [peekedArtboard, setPeekedArtboard] = React.useState<Artboard>(
		artboards[0]
	);

	return (
		<Popover open={open} onOpenChange={setOpen} {...props}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					aria-label="Select a artboard"
					className="flex-1 justify-between md:max-w-[150px] lg:max-w-[150px]"
				>
					<DimensionsIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
					{value ? value.name : "Select a artboard..."}
					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent align="end" className="w-[250px] p-0">
				<HoverCard>
					<HoverCardContent
						side="left"
						align="start"
						forceMount
						className="min-h-[280px]"
					>
						<div className="grid gap-2">
							<h4 className="font-medium leading-none">
								{peekedArtboard.name}
							</h4>
							<div className="text-sm text-muted-foreground">
								{peekedArtboard.description}
							</div>
							<div className="mt-4 grid gap-2">
								<h5 className="text-sm font-medium leading-none">
									Sample Size
								</h5>
								<img
									src={`https://placehold.co/${
										peekedArtboard.name.split(":")[0]
									}0x${peekedArtboard.name.split(":")[1]}0/EEE/31343C/`}
									alt="Artboard"
									className="w-auto h-[150px] rounded-lg"
								/>
							</div>
						</div>
					</HoverCardContent>
					<Command loop>
						<CommandList className="h-[var(--cmdk-list-height)] max-h-[400px]">
							<CommandInput placeholder="Search Artboards..." />
							<CommandEmpty>No Artboards found.</CommandEmpty>
							<HoverCardTrigger />
							{types.map((type) => (
								<CommandGroup key={type} heading={type}>
									{artboards
										.filter((artboard) => artboard.type === type)
										.map((artboard) => (
											<ArtboardItem
												key={artboard.id}
												artboard={artboard}
												isSelected={value?.id === artboard.id}
												onPeek={(artboard) => setPeekedArtboard(artboard)}
												onSelect={() => {
													setValue(artboard);
													setOpen(false);
												}}
											/>
										))}
								</CommandGroup>
							))}
						</CommandList>
					</Command>
				</HoverCard>
			</PopoverContent>
		</Popover>
	);
}

interface ArtboardItemProps {
	artboard: Artboard;
	isSelected: boolean;
	onSelect: () => void;
	onPeek: (artboard: Artboard) => void;
}

function ArtboardItem({
	artboard,
	isSelected,
	onSelect,
	onPeek,
}: ArtboardItemProps) {
	const ref = React.useRef<HTMLDivElement>(null);

	useMutationObserver(ref, (mutations) => {
		for (const mutation of mutations) {
			if (mutation.type === "attributes") {
				if (mutation.attributeName === "aria-selected") {
					onPeek(artboard);
				}
			}
		}
	});

	return (
		<CommandItem
			key={artboard.id}
			onSelect={onSelect}
			ref={ref}
			className="data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground"
		>
			{artboard.name}
			<CheckIcon
				className={cn(
					"ml-auto h-4 w-4",
					isSelected ? "opacity-100" : "opacity-0"
				)}
			/>
		</CommandItem>
	);
}
