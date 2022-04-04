<script lang="ts">
	import Logo from '../shared/Logo.svelte';
	import Button from '../shared/Button.svelte';
	import Link from '../shared/Link.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import { text } from '$lib/store/languageStore';
</script>

<header>
	<nav class="content">
		<Logo />
		<ul class="links">
			<li>
				<Link href="/services">{$text.shared.pages.services}</Link>
			</li>
			<li>
				<Link href="/portfolio">{$text.shared.pages.portfolio}</Link>
			</li>
			<li>
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
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: var(--header-height);
	}

	.content {
		max-width: 1600px;
		margin: 0 auto;
		padding: 0 40px;
		display: grid;
		grid-template-rows: 20px 40px;
		grid-template-columns: min-content 1fr min-content;
		grid-template-areas: '. . .' 'logo . links';
		align-items: center;
	}

	.links {
		display: none;
		grid-area: links;
		grid-template-columns: repeat(4, min-content);
		column-gap: 40px;
		text-align: center;
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

	@media only screen and (min-width: 600px) {
		.content {
			grid-template-rows: 40px 40px;
			grid-template-areas: '. . .' 'logo . links';
			grid-template-columns: min-content 1fr min-content;
		}
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
