<script lang="ts">
	export let href = '/';
	export let empty = false;
	export let fontSize = '16px';
	export let onClick = () => {};
</script>

<a {href} class:text={!empty} style="font-size: {fontSize}" on:click={onClick}>
	<slot />
</a>

<style>
	.text {
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 28px;
		text-decoration-line: underline;
		color: inherit;
		white-space: nowrap;
		text-underline-offset: 2px;
		display: flex;
		text-decoration: none;
	}
</style>
