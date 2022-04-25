<script>
	import Button from '$lib/shared/common/Button.svelte';

	export let data = {
		title: '',
		text: '',
		button: ''
	};
</script>

<div class="sectionOne">
	<div class="content">
		<div class="textContainer">
			<h1>{data.title}</h1>
			<p>{data.text}</p>
			<Button width="165px" height="56px">{data.button}</Button>
		</div>
		<div class="gradient" />
	</div>
</div>

<style>
	.sectionOne {
		width: 100%;
		background-color: var(--color-black);
	}

	.content {
		position: relative;
		height: calc(100vh + 50px);
		background: url('/images/landing/Mountains_adjusted.jpg') no-repeat center center;
		background-size: cover;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gradient {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 222px;
		background: linear-gradient(360deg, #25313c 0%, rgba(37, 49, 60, 0) 100%);
		grid-area: gradient;
	}
	.textContainer {
		height: 400px;
		max-width: 380px;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 20px;
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

	@media only screen and (min-width: 600px) {
		.textContainer {
			height: 450px;
		}
	}
	@media only screen and (min-width: 900px) {
		h1 {
			font-size: 48px;
		}
		p {
			font-size: 18px;
		}
	}
</style>
