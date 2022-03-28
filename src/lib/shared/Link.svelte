<script lang="ts">
	export let href = '/';
	export let empty = false;
	export let fontSize = '16px';
</script>

<a {href} class:text={!empty} style="font-size: {fontSize}">
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
	}
</style>
