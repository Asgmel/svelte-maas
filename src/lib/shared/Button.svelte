<script lang="ts">
	export let ghostButton = false;
</script>

<button class:ghostButton class:fillButton={!ghostButton}>
	<slot />
</button>

<style>
	button {
		border-radius: 4px;
	}

	.ghostButton {
		border: 2px solid --color-pink;
		color: --color-pink;
	}

	.fillButton {
		color: --color-white;
		background-color: --color-pink;
	}
</style>
