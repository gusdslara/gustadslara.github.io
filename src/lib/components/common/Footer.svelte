<script lang="ts">
	import { t } from '$lib/i18n';
	const year = new Date().getFullYear();

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/gustavodslara/gustavodslara.github.io',
			icon: 'github'
		},
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/gustavodslara/', icon: 'linkedin' }
	];
</script>

<footer
	class="w-full bg-gradient-to-b from-transparent to-black/[0.02] mt-16 px-4 md:px-8 lg:px-12"
>
	<div class="max-w-7xl mx-auto">
		<div class="h-12"></div>

		<div
			class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8"
		>
			<div>
				<p class="text-sm md:text-base text-black/60 m-0 whitespace-pre-wrap">
					{@html $t('common.footer.staticSite')}
					<a
						href="https://kit.svelte.dev"
						target="_blank"
						rel="noopener"
						class="text-black underline hover:text-[#dd206b]">SvelteKit</a
					>
					+
					<a
						href="https://www.typescriptlang.org"
						target="_blank"
						rel="noopener"
						class="text-black underline hover:text-[#dd206b]">TS</a
					>
					+
					<a
						href="https://tailwindcss.com"
						target="_blank"
						rel="noopener"
						class="text-black underline hover:text-[#dd206b]">Tailwind</a
					>
					{$t('common.footer.and')}
					<a
						href="https://svelte-motion.gradientdescent.de/"
						target="_blank"
						rel="noopener"
						class="text-black underline hover:text-[#dd206b]">Motion</a
					>
				</p>
			</div>
		</div>

		<div class="h-14"></div>

		<div
			class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8"
		>
			<p class="text-sm text-black/50 m-0 whitespace-pre-wrap">
				{$t('common.footer.copyright', { year: year.toString() })}
			</p>

			<div class="flex gap-8 md:gap-10">
				{#each socialLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener"
						aria-label={social.name}
						class="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-black/5 hover:-translate-y-1 no-underline"
					>
						<img
							src="/assets/svg/icons/social/{social.icon}.svg"
							alt={social.name}
							class="w-4 h-4 opacity-60 transition-opacity duration-300 hover:opacity-100"
						/>
					</a>
				{/each}
			</div>
		</div>

		<div class="h-5"></div>
	</div>
</footer>
