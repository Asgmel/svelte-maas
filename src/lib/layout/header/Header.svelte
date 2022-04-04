<script lang="ts">
	import NormalizeCSS from '$lib/styles/NormalizeCSS.svelte';
	import GlobalCSS from '$lib/styles/GlobalCSS.svelte';
	import ImportVariablesCSS from '$lib/styles/ImportVariablesCSS.svelte';
	import Logo from '../../shared/Logo.svelte';
	import Button from '../../shared/Button.svelte';
	import Link from '../../shared/Link.svelte';
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
	header {
		height: var(--header-height);
		background-color: var(--color-darkblue);
	}

	.content {
		max-width: 1600px;
		margin: 0 auto;
		padding: 40px 0;
		display: grid;
		grid-template-rows: 40px;
		grid-template-columns: min-content 1fr min-content;
		grid-template-areas: 'logo . links';
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
