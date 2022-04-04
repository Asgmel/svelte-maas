<script lang="ts">
	import { lang, text } from '$lib/store/languageStore';
	import * as english from '$lib/languages/english.json';
	import * as norwegian from '$lib/languages/norwegian.json';

	switch ($lang) {
		case 'en':
			$text = english;
			break;

		case 'no':
			$text = norwegian;
			break;

		default:
			$text = english;
			break;
	}
</script>
