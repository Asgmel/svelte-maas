<script>
	import Container from '$lib/shared/Container.svelte';
</script>

<Container light>
	<div class="red" />
</Container>
<Container />
<Container light />

<style>
	.red {
		width: 100%;
		height: 800px;
		background-color: red;
	}
</style>
