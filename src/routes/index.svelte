<script>
	import Button from '$lib/shared/Button.svelte';
</script>

<div class="sectionOne">
	<div class="content">
		<h1>Hassle free web development</h1>
		<p>All-in-one place for your web design and development needs.</p>
		<Button width="165px" height="56px">Contact Us</Button>
		<div class="gradient" />
	</div>
</div>
<div class="sectionTwo" />

<style>
	.sectionOne {
		width: 100%;
		height: calc(100vw / 1.5);
		background-color: var(--color-black);
	}

	.sectionTwo {
		width: 100%;
		height: 1000px;
		background-color: var(--color-black);
	}

	.content {
		width: 100%;
		height: 100%;
		max-height: calc(100vh + 100px);
		background: url('/images/Mountains_large.jpg') no-repeat center center;
		background-size: cover;
		display: grid;
		grid-template-columns: 1fr 374px 1fr;
		grid-template-rows: 20% min-content min-content min-content 1fr min-content;
		grid-template-areas: '. . .' '. heading .' '. paragraph .' '. button .' '. . .' 'gradient gradient gradient';
		row-gap: 20px;
		justify-items: center;
	}

	.gradient {
		width: 100%;
		height: 222px;
		background: linear-gradient(0deg, #25313c 24.77%, rgba(37, 49, 60, 0) 100%);
		grid-area: gradient;
	}

	h1 {
		grid-area: heading;
		text-align: center;
	}

	p {
		grid-area: paragraph;
		text-align: center;
	}
</style>
