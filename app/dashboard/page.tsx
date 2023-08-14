import { title } from "@/components/primitives";
import Quote from "@/components/dashboard/quote";
import TodoList from "@/components/dashboard/todo";
import Calendar from "@/components/dashboard/calendar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "../lib/database.types";
import { cookies } from "next/headers";
import clsx from "clsx";

export default async function DashboardPage() {
	const supabase = createServerComponentClient<Database>({
		cookies,
	  })
	const {
		data: { user },
  } = await supabase.auth.getUser()
	return (
		<div className="mx-none w-max">
			<div className="pb-4 text-center ">
				<h1 className={title()}>Dashboard</h1>
			</div>
			<div className="container grid grid-rows-2 md:grid-cols-2 gap-5 min-h-screen max-h-screen">
				<div className="row-span-2 rounded-lg bg-stone-100 max-h-screen overflow-auto">
					<Calendar />
				</div>
				<div className="col-span-1 rounded-lg">
					<Quote />
				</div>
				<div className="row-span-1 col-span-1 rounded-lg bg-stone-100">
					<TodoList user={user}/>
				</div>
			</div>
		</div>
	);
}
