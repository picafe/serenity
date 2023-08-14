export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Serenity",
	description: "Find your inner peace through journaling.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "Login",
			href: "/login",
		},
	],
	profileItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/picafe/serenity",
		twitter: "https://twitter.com/",
		discord: "https://discord.gg/",
	},
};
