<script>
	import Button from '$lib/shared/Button.svelte';

	let active = false;
	let hideOverlay = false;

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
	<Button width="40px" height="40px" transparent onClick={() => setActive(true)}>
		<div class="hamburger" />
	</Button>
	<div class="menu" class:active>This is the menu</div>
	<div class="overlay" on:click={() => setActive(false)} class:active class:hideOverlay />
</div>

<style>
	.hamburger {
		width: 30px;
		height: 30px;
		margin: 5px;
		background: url('/icons/mi_menu.svg') no-repeat center center;
		background-size: cover;
	}
	.wrapper {
		display: block;
		grid-area: links;
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

	@media only screen and (min-width: 900px) {
		.wrapper {
			display: none;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
</style>
