// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "The hOSe Project",
	tagline: "Humane Operating System for the Elderly",
	favicon: "img/favicon.ico",

	plugins: [
		[
			'vercel-analytics',
			{
				debug: true,
				mode: 'auto',
			},
		],
	],

	url: "https://hoseproject.vercel.app",
	baseUrl: "/",

	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({

			navbar: {
				style: "primary",
				title: "The hOSe Project",
				logo: {
					alt: "hOSe Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Documentation",
					},
					{ to: "/about", label: "About", position: "left" },
					{
						href: "https://github.com/akoreandumpling/hose",
						label: "Website on Github",
						position: "right",
					},
					{
						href: "https://github.com/akoreandumpling/hose-website",
						label: "Project on GitHub",
						position: "right",
					},
				],
			},

			footer: {
				style: "dark",
				links: [
					{
						label: "Home",
						to: "/",
					},
					{
						label: "Github",
						to: "https://github.com/akoreandumpling",
					},
					{
						label: "Stack Overflow",
						to: "https://stackoverflow.com/users/30162710/akoreandumpling",
					},
					{
						label: "Twitter",
						to: "https://twitter.com/@akoreandumpling",
					},
					{
						label: "About",
						to: "/about",
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} <a href="/easteregg" style="text-decoration:none, color: inherit"> Nathan Mah </a> - The hOSe Project, Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
