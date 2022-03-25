<script lang="ts">
	export let href = '/';
	export let empty = false;
</script>

<a {href} class:text={!empty}>
	<slot />
</a>

<style>
	.text {
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 28px;
		text-decoration-line: underline;
		color: var(--color-black);
	}
</style>
