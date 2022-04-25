<script>
	import HeroSection from '$lib/landing/HeroSection.svelte';
	import PitchSection from '$lib/landing/PitchSection.svelte';
	import ServicesSection from '$lib/landing/ServicesSection.svelte';
	import { text } from '$lib/store/languageStore';
</script>

<HeroSection data={$text.landing.hero} />
<PitchSection data={$text.landing.pitch} />
<ServicesSection data={$text.landing.services} />

<style>
</style>
