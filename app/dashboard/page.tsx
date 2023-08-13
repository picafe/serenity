import { title } from "@/components/primitives";
import Quote from "@/components/dashboard/quote";

export default function DashboardPage() {
	return (
		<div>
			<h1 className={title()}>Dashboard</h1>
			<Quote />
		</div>
	);
}
