<script>
	import { onMount } from 'svelte';
	import defaultTheme from './defaultTheme';
	let theme = defaultTheme;
	onMount(() => {
		const keys = Object.keys(theme);
		keys.forEach((key) => {
			console.log(key);
			document.documentElement.style.setProperty(key, theme[key]);
		});
	});
</script>
