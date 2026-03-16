export interface AppType {
	id: string;
	name: string;
	image: string;
	link: string;
	tab: string;
	caption: string;
	isFull: boolean;
	primary?: string;
	background: string;
}

export interface ToolType {
	id: string;
	name: string;
	logo: string;
	link: string;
	tab: string;
	color?: string;
}

export interface ContactForm {
	name: string;
	email: string;
	details: string;
}

