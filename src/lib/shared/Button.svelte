<script lang="ts">
	export let ghostButton = false;
	export let link = false;
	export let href = '/';
	export let width = 'auto';
	export let height = 'auto';
	export let transparent = false;
	export let fontSize = '16px';
	export let onClick = () => {
		console.log('test');
	};
</script>

{#if link}
	<a
		{href}
		class="button"
		class:ghostButton
		class:fillButton={!ghostButton}
		class:transparent
		style="width: {width}; height: {height}; font-size: {fontSize}"
	>
		<slot />
	</a>
{:else}
	<button
		class="button"
		class:ghostButton
		class:fillButton={!ghostButton}
		class:transparent
		on:click={onClick}
		style="width: {width}; height: {height}; font-size: {fontSize}"
	>
		<slot />
	</button>
{/if}

<style>
	a {
		padding: 8px 0;
		text-decoration: none;
	}
	.button {
		border-radius: 4px;
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		grid-area: button;
		text-align: center;
	}

	.ghostButton {
		border: 2px solid var(--color-pink);
		color: var(--color-pink);
	}

	.fillButton {
		color: var(--color-white);
		background-color: var(--color-pink);
	}
	.transparent {
		color: var(--color-black);
		background-color: rgba(0, 0, 0, 0);
	}
</style>
