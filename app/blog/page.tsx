"use client"
import { title } from "@/components/primitives";
import Quote from "@/components/dashboard/quote";

export default function BlogPage() {
	return (
		<div>
			<Quote />
			<h1 className={title()}>Blog</h1>
		</div>
	);
}
