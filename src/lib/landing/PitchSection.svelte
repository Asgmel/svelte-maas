<script lang="ts">
	import Link from '$lib/shared/Link.svelte';
</script>

<div class="section">
	<div class="text container" style="grid-area: text1">
		<h1>Custom Made Designs</h1>
		<p>
			We tailor every website to your needs and wishes to make your ideas come to life. We can do
			the whole design and development process for you, to give you more time to focus on other
			areas of your business.
		</p>
		<div>
			<Link>Learn More</Link>
			<Link>-></Link>
		</div>
	</div>
	<img
		src="/images/design_drawing.svg"
		alt="Drawing of a woman designing something"
		class="container"
		style="grid-area: img1"
	/>
	<img
		src="/images/mobile_drawing.svg"
		alt="Drawing of a woman looking at her cellphone"
		class="container"
		style="grid-area: img2"
	/>
	<div class="text container" style="grid-area: text2">
		<h1>Modern and Responsive Websites</h1>
		<p>
			All our websites are made according to the current web-development standards with responsive
			design. This means the website will look beautiful on all screens, be it phone, tablet or
			desktop.
		</p>
		<div>
			<Link>Learn More</Link>
			<Link>-></Link>
		</div>
	</div>
	<div class="text container" style="grid-area: text3">
		<h1>Search Engine Optimized</h1>
		<p>
			Our websites are search engine optimized (SEO), which ensures that they appear and look good
			in searches on all popular search engines like Google, Bing and DuckDuckGo.
		</p>
		<div>
			<Link>Learn More</Link>
			<Link>-></Link>
		</div>
	</div>
	<img
		src="/images/SEO_drawing.svg"
		alt="Drawing of a woman building something with a looking glass (search icon)"
		class="container"
		style="grid-area: img3"
	/>
</div>

<style>
	.section {
		width: 100%;
		background-color: var(--color-black);
		padding: 0 20px 100px 20px;
		display: grid;
		grid-template-columns: 300px;
		grid-template-areas: 'text1' 'img1' 'text2' 'img2' 'text3' 'img3';
		justify-content: center;
		align-items: center;
		justify-items: center;
		row-gap: 50px;
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--color-pink);
	}
	.container {
		width: 100%;
		height: 100%;
	}
	h1 {
		font-size: 28px;
		color: var(--color-white);
		line-height: 40px;
	}
	p {
		font-size: 15px;
		color: var(--color-white);
		margin: 20px 0;
	}

	@media only screen and (min-width: 600px) {
		.section {
			padding: 20px 20px 200px 20px;
			grid-template-columns: 450px;
		}
		h1 {
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 900px) {
		.section {
			padding: 100px 20px 200px 20px;
			grid-template-columns: 380px 380px;
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-areas: 'text1 img1' 'img2 text2' 'text3 img3';
			column-gap: 50px;
		}

		h1 {
			font-size: 35px;
		}
	}

	@media only screen and (min-width: 1200px) {
		h1 {
			font-size: 48px;
		}
		p {
			font-size: 18px;
		}
		.section {
			grid-template-columns: 500px 500px;
			column-gap: 100px;
			row-gap: 0px;
		}
	}

	@media only screen and (min-width: 1300px) {
		.section {
			column-gap: 200px;
		}
	}
</style>
