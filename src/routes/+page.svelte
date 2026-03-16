<script lang="ts">
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import HomeTop from '$lib/components/home/HomeTop.svelte';
	import HomeAbout from '$lib/components/home/HomeAbout.svelte';
	import HomeEducation from '$lib/components/home/HomeEducation.svelte';
	import HomeShowcases from '$lib/components/home/HomeShowcases.svelte';
	import HomePlatforms from '$lib/components/home/HomePlatforms.svelte';
	import HomeContact from '$lib/components/home/HomeContact.svelte';
	import Footer from '$lib/components/common/Footer.svelte';
	import { locale } from '$lib/i18n';
</script>

<svelte:head>
	<title>Gustavo Lara | Software Architect</title>
	<meta
		name="description"
		content="Portfolio of Gustavo Lara - Software Architect from Brazil, specialized in microservices, scalable distributed systems, and fullstack development (Angular, Svelte, Flutter, Java, Go, Node.js)."
	/>

	<!-- JSON-LD for AI Indexation and Rich Snippets -->
	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Person",
					"name": "Gustavo Lara",
					"jobTitle": "Software Architect & Tech Lead",
					"url": "https://gustavodslara.pro/",
					"sameAs": [
						"https://github.com/gustavodslara",
						"https://www.linkedin.com/in/gustavodslara/"
					],
					"alumniOf": {
						"@type": "Organization",
						"name": "FIAP"
					},
					"knowsAbout": [
						"Software Architecture",
						"Microservices",
						"System Design",
						"SvelteKit",
						"TypeScript",
						"Java",
						"Go",
						"Angular"
					],
					"nationality": {
						"@type": "Country",
						"name": "Brazil"
					}
				},
				{
					"@type": "WebSite",
					"url": "https://gustavodslara.pro/",
					"name": "Gustavo Lara - Portfolio",
					"description": "Portfolio of Gustavo Lara - Software Architect & Tech Lead",
					"publisher": {
						"@type": "Person",
						"name": "Gustavo Lara"
					}
				}
			]
		}
	</script>`}
</svelte:head>

<Navbar />

<main class="flex-1 w-full">
	<div class="h-20 md:h-24"></div>

	{#key $locale}
		<HomeTop />

		<div class="h-12 md:h-16"></div>
		<HomeAbout />

		<div class="h-12 md:h-20"></div>
		<HomeEducation />

		<div class="h-12 md:h-20"></div>
		<HomeShowcases />

		<HomePlatforms />

		<div class="h-12 md:h-20"></div>
		<HomeContact />
	{/key}

	<div class="h-12 md:h-16"></div>
	<Footer />
</main>
