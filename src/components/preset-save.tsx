import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PresetSave() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="secondary">Save</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[475px]">
				<DialogHeader>
					<DialogTitle>Save Video</DialogTitle>
					<DialogDescription>
						Save your video to access it later
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" autoFocus />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Description</Label>
						<Input id="description" />
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
