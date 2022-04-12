<script>
	import Button from '$lib/shared/common/Button.svelte';
</script>

<div class="sectionOne">
	<div class="content">
		<h1>Hassle free web development</h1>
		<p>All-in-one place for your web design and development needs.</p>
		<Button width="165px" height="56px">Contact Us</Button>
		<div class="gradient" />
	</div>
</div>

<style>
	.sectionOne {
		width: 100%;
		background-color: var(--color-black);
		margin-top: -120px;
	}

	.content {
		width: 100%;
		height: calc(100vh + 100px);
		background: url('/images/landing/Mountains_large.jpg') no-repeat center center;
		background-size: cover;
		display: grid;
		grid-template-columns: 1fr 320px 1fr;
		grid-template-rows: 20% min-content min-content min-content 1fr min-content;
		grid-template-areas: '. . .' '. heading .' '. paragraph .' '. button .' '. . .' 'gradient gradient gradient';
		row-gap: 10px;
		justify-items: center;
	}

	.gradient {
		width: 100%;
		height: 222px;
		background: linear-gradient(360deg, #25313c 0%, rgba(37, 49, 60, 0) 100%);
		grid-area: gradient;
	}

	h1 {
		font-size: 40px;
		grid-area: heading;
		text-align: center;
	}

	p {
		font-size: 16px;
		grid-area: paragraph;
		text-align: center;
	}

	@media only screen and (min-width: 1440px) {
		h1 {
			font-size: 48px;
		}
		p {
			font-size: 18px;
		}
		.content {
			row-gap: 20px;
			grid-template-columns: 1fr 374px 1fr;
		}
	}

	@media only screen and (min-width: 1600px) {
		.content {
			grid-template-rows: 25% min-content min-content min-content 1fr min-content;
		}
	}
</style>
