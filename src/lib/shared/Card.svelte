<div class="card">
	<slot />
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: var(--color-black);
		border-radius: 10px;
	}
</style>
