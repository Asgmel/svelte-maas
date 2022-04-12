<div class="headingContainer">
	<slot />
</div>

<style>
	.headingContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 20px;
		margin: 20px 0;
		max-width: 410px;
	}
	@media only screen and (min-width: 600px) {
		.headingContainer {
			margin: 40px 0;
		}
	}

	@media only screen and (min-width: 1200px) {
		.headingContainer {
			margin: 80px 0;
		}
	}
</style>
