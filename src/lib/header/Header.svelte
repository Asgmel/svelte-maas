<script lang="ts">
	import NormalizeCSS from '$lib/styles/NormalizeCSS.svelte';
	import GlobalCSS from '$lib/styles/GlobalCSS.svelte';
	import ImportVariablesCSS from '$lib/styles/ImportVariablesCSS.svelte';
	import Logo from '../shared/Logo.svelte';
	import Button from '../shared/Button.svelte';
	import Link from '../shared/Link.svelte';
	import MobileMenu from './MobileMenu.svelte';
</script>

<!-- CSS -->
<NormalizeCSS />
<GlobalCSS />
<ImportVariablesCSS />

<!-- Content -->
<header>
	<nav class="content">
		<Logo />
		<ul class="links">
			<li>
				<Link href="/services">Services</Link>
			</li>
			<li>
				<Link href="/portfolio">Portfolio</Link>
			</li>
			<li>
				<Link href="/about">About Us</Link>
			</li>
			<li class="button">
				<Button link ghostButton>Contact Us</Button>
			</li>
		</ul>
		<MobileMenu />
	</nav>
</header>

<style>
	nav {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: var(--header-height);
	}

	.content {
		max-width: 1600px;
		height: 100%;
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
		grid-template-columns: 64px 66px 72px 117px;
		column-gap: 30px;
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
