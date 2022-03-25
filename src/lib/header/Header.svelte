<script lang="ts">
	import NormalizeCSS from '$lib/styles/NormalizeCSS.svelte';
	import GlobalCSS from '$lib/styles/GlobalCSS.svelte';
	import ImportVariablesCSS from '$lib/styles/ImportVariablesCSS.svelte';
	import Logo from './Logo.svelte';
	import Button from '../shared/Button.svelte';
	import Link from '../shared/Link.svelte';
</script>

<!-- CSS -->
<NormalizeCSS />
<GlobalCSS />
<ImportVariablesCSS />

<!-- Content -->
<nav>
	<div class="content">
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
	</div>
</nav>

<style>
	nav {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: var(--header-height);
	}

	.content {
		max-width: 1920px;
		height: 100%;
		margin: 0 auto;
		display: grid;
		grid-template-rows: 40px 40px 40px;
		grid-template-columns: 140px min-content 1fr min-content 140px;
		grid-template-areas: '. . . . .' '. logo . links .' '. . . . .';
		align-items: center;
	}

	.links {
		grid-area: links;
		display: grid;
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
</style>
