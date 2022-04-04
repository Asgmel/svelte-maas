<script lang="ts">
	import Logo from '$lib/shared/Logo.svelte';
	import Button from '$lib/shared/Button.svelte';
	import Link from '$lib/shared/Link.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import { text } from '$lib/store/languageStore';
	import { page } from '$app/stores';
</script>

<header class:transparent={$page.routeId === ''}>
	<nav class="content">
		<Logo light={$page.routeId !== ''} />
		<ul class="links">
			<li class:light={$page.routeId !== ''}>
				<Link href="/services">{$text.shared.pages.services}</Link>
			</li>
			<li class:light={$page.routeId !== ''}>
				<Link href="/portfolio">{$text.shared.pages.portfolio}</Link>
			</li>
			<li class:light={$page.routeId !== ''}>
				<Link href="/about">{$text.shared.pages.about}</Link>
			</li>
			<li class="button">
				<Button link ghostButton>{$text.shared.pages.contact}</Button>
			</li>
		</ul>
		<MobileMenu />
	</nav>
</header>

<style>
	header {
		height: var(--header-height);
		background-color: var(--color-darkblue);
	}

	nav {
		max-width: 1600px;
		margin: 0 auto;
		padding: 40px 0;
		display: grid;
		grid-template-rows: 40px;
		grid-template-columns: min-content 1fr min-content;
		grid-template-areas: 'logo . links';
		align-items: center;
	}

	ul {
		height: 100%;
	}

	li {
		display: grid;
		align-items: center;
		height: 100%;
		list-style-type: none;
	}

	.transparent {
		background-color: rgba(0, 0, 0, 0);
	}

	.light {
		color: var(--color-white);
	}

	.links {
		display: none;
		grid-area: links;
		grid-template-columns: repeat(4, min-content);
		column-gap: 40px;
		text-align: center;
	}

	@media only screen and (min-width: 900px) {
		.links {
			display: grid;
		}
	}
	@media only screen and (min-width: 1200px) {
		.content {
			grid-template-columns: min-content 1fr min-content;
		}
	}
</style>
