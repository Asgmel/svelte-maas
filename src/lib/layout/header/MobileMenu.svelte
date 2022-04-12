<script>
	import Button from '$lib/shared/common/Button.svelte';
	import Link from '$lib/shared/common/Link.svelte';
	import Logo from '$lib/shared/common/Logo.svelte';

	export let light = false;
	let active = false;
	let hideOverlay = false;

	const menuIcon = '/icons/mi_menu.svg';
	const menuIconLight = '/icons/mi_menu_light.svg';

	// function to enable and disable the menu overlay on a timer to let transitions finish
	const setActive = (_active) => {
		if (!_active) {
			setTimeout(() => {
				hideOverlay = true;
			}, 500);
		} else {
			hideOverlay = false;
		}

		active = _active;
	};
</script>

<div class="wrapper">
	<Button width="48px" height="48px" transparent onClick={() => setActive(true)}>
		<div class="icon" style="background-image: url('{light ? menuIcon : menuIconLight}');" />
	</Button>
	<div class="menu" class:active>
		<Button width="48px" height="48px" transparent onClick={() => setActive(false)}>
			<div class="close icon" />
		</Button>
		<Logo light />
		<ul class="links">
			<li>
				<Link href="/services" fontSize="25px" onClick={() => setActive(false)}>Services</Link>
			</li>
			<li>
				<Link href="/portfolio" fontSize="25px" onClick={() => setActive(false)}>Portfolio</Link>
			</li>
			<li>
				<Link href="/about" fontSize="25px" onClick={() => setActive(false)}>About Us</Link>
			</li>
			<li class="button">
				<Button width="200px" link ghostButton fontSize="25px">Contact Us</Button>
			</li>
		</ul>
	</div>
	<div class="overlay" on:click={() => setActive(false)} class:active class:hideOverlay />
</div>

<style>
	.wrapper {
		display: block;
		grid-area: links;
		height: 48px;
	}
	.menu {
		position: fixed;
		top: 0px;
		right: -300px;
		bottom: 0px;
		width: 300px;
		background-color: var(--color-black);
		z-index: 2;
		transition: right 0.4s ease-in-out;
		padding: 8px 20px;
		display: grid;
		align-items: center;
		grid-template-rows: 48px 30px min-content 1fr;
		grid-template-columns: 100px 1fr 48px;
		grid-template-areas: 'logo . button' '. . .' 'links links links' '. . .';
	}
	.menu.active {
		right: 0px;
	}
	.overlay.active {
		background-color: rgba(0, 0, 0, 0.8);
		pointer-events: auto;
	}
	.hideOverlay {
		z-index: -1;
	}
	.overlay {
		pointer-events: none;
		position: fixed;
		background-color: rgba(0, 0, 0, 0);
		transition: background-color 0.4s ease-in-out;
		top: 0px;
		left: 0px;
		bottom: 0px;
		right: 0px;
		z-index: 1;
	}
	.icon {
		margin: 6px;
		width: 36px;
		height: 36px;
		background-size: cover;
		background-position: center center;
	}
	.close {
		background-image: url('/icons/mi_close.svg');
	}
	.links {
		grid-area: links;
		display: grid;
		grid-template-rows: repeat(3, 40px) 55px;
		grid-template-columns: 1fr;
		row-gap: 10px;
	}
	li {
		list-style-type: none;
		color: var(--color-white);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button {
		padding-top: 15px;
	}

	@media only screen and (min-width: 900px) {
		.wrapper {
			display: none;
		}
	}
</style>
