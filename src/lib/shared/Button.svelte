<script lang="ts">
	export let ghostButton = false;
	export let link = false;
	export let href = '/';
	export let width = 'auto';
	export let height = 'auto';
	export let transparent = false;
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
		style="width: {width}; height: {height}"
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
		style="width: {width}; height: {height}"
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
