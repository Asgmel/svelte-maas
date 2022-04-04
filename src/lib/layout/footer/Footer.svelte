<script lang="ts">
	import Link from '$lib/shared/Link.svelte';
	import Logo from '$lib/shared/Logo.svelte';
	import { svg_element } from 'svelte/internal';
	import links from './footerElements';
</script>

<footer>
	<div class="content">
		<Logo light />
		<p class="caption motto">All-in-one place for your web design and development needs.</p>
		{#each links as link}
			<div class="linkSection" style="grid-area: {link.heading}">
				<h4>{link.heading}</h4>
				<ul>
					{#each link.elements as _element}
						<li>
							{#if _element.type == 'link'}
								<a class="link caption" href={_element.href}>{_element.name}</a>
							{:else}
								<p class="text caption">{_element.name}</p>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
		<p class="caption copyright">© Copyright maas media.</p>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		background-color: var(--color-black);
		display: flex;
		justify-content: center;
		padding: 40px 0;
	}
	p {
		color: var(--color-white);
	}
	li {
		list-style-type: none;
	}
	ul {
		display: grid;
		row-gap: 8px;
	}
	h4 {
		color: var(--color-white);
		margin: 0 0 10px 0;
		font-size: 18px;
	}
	.content {
		width: 300px;
		display: grid;
		grid-template-areas: 'logo' 'motto' 'Services' 'Portfolio' 'About' 'Contact' 'copyright';
	}
	.caption {
		color: rgba(255, 255, 255, 0.6);
		font-size: 14px;
		line-height: 20px;
	}
	.motto {
		grid-area: motto;
	}
	.copyright {
		grid-area: copyright;
		margin-top: 40px;
	}
	.link {
		text-decoration: none;
	}
	.link:hover {
		color: var(--color-white);
	}
	.linkSection {
		margin: 20px 0;
	}
	@media only screen and (min-width: 600px) {
		.content {
			width: 450px;
			grid-template-areas: 'logo logo' 'motto motto' 'Services Portfolio' 'About Contact' 'copyright copyright';
			grid-template-columns: 225px 225px;
		}
	}

	@media only screen and (min-width: 900px) {
		.content {
			width: 810px;
			grid-template-areas: 'logo . . .' 'motto motto . .' 'Services Portfolio About Contact' 'copyright copyright . .';
			grid-template-columns: repeat(4, 160px);
			column-gap: 56px;
		}
		.motto {
			padding-right: 150px;
		}
		.linkSection {
			margin: 40px 0;
		}
		.copyright {
			margin-top: 0;
		}
	}

	@media only screen and (min-width: 1200px) {
		.content {
			width: 1100px;
			grid-template-areas: 'logo . . . .' 'motto . . . .' '. Services Portfolio About Contact' 'copyright copyright . . .';
			grid-template-columns: 380px repeat(4, 160px);
			column-gap: 20px;
		}
		.motto {
			padding-right: 110px;
		}
	}

	@media only screen and (min-width: 1300px) {
		.content {
			width: 1200px;
			grid-template-areas: 'logo . . . .' 'motto . . . .' '. Services Portfolio About Contact' 'copyright copyright . . .';
			grid-template-columns: 480px repeat(4, 160px);
		}
		.motto {
			padding-right: 260px;
		}
	}
</style>
