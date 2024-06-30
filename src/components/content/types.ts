export type ContentType = "text" | "image" | "video";

export interface ContentItem {
	id: string;
	type: ContentType;
	content: string;
}

export interface ContentItemComponentProps extends ContentItem {
	onEdit: (id: string, content: string) => void;
}
