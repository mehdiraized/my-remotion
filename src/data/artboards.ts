export const types = ["Standard", "Custom"] as const;

export type ArtboardType = (typeof types)[number];

export interface Artboard<Type = string> {
	id: string;
	name: string;
	value: number;
	description: string;
	type: Type;
}

export const artboards: Artboard<ArtboardType>[] = [
	{
		id: "1",
		name: "16:9",
		value: 16 / 9,
		description: "Best for YouTube videos.",
		type: "Standard",
	},
	{
		id: "2",
		name: "1:1",
		value: 1,
		description: "Square videos are great for social media.",
		type: "Standard",
	},
	{
		id: "3",
		name: "3:4",
		value: 3 / 4,
		description: "Great for Instagram stories.",
		type: "Standard",
	},
	{
		id: "4",
		name: "4:5",
		value: 4 / 5,
		description: "Great for Instagram posts.",
		type: "Standard",
	},
	{
		id: "5",
		name: "9:16",
		value: 9 / 16,
		description: "Great for TikTok videos.",
		type: "Custom",
	},
	{
		id: "6",
		name: "4:3",
		value: 4 / 3,
		description: "Great for old TV screens.",
		type: "Custom",
	},
	{
		id: "7",
		name: "5:4",
		value: 5 / 4,
		description: "Great for Instagram posts.",
		type: "Custom",
	},
	{
		id: "8",
		name: "10:24",
		value: 10 / 24,
		description: "Great for iMax screens.",
		type: "Custom",
	},
];
