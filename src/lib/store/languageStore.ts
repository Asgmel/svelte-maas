import { writable } from 'svelte/store';
import type { ILanguage } from './languageInterface';

export const lang = writable('en');
export const text = writable<ILanguage>({
	shared: {
		pages: {
			services: '',
			portfolio: '',
			about: '',
			contact: ''
		}
	},
	landing: {
		hero: {
			heading: '',
			text: ''
		},
		pitch: {
			one: {
				heading: '',
				text: ''
			},
			two: {
				heading: '',
				text: ''
			},
			three: {
				heading: '',
				text: ''
			},
			learnMore: ''
		},
		services: {
			heading: '',
			graphicDesign: '',
			webDevelopment: '',
			seo: '',
			cms: '',
			techConsulting: '',
			hosting: ''
		}
	},
	footer: {
		motto: '',
		services: {
			development: '',
			design: '',
			seo: '',
			cms: '',
			consulting: '',
			hosting: ''
		},
		portfolio: {
			portfolioOne: '',
			portfolioTwo: '',
			portfolioThree: ''
		},
		about: {
			faq: '',
			company: '',
			people: '',
			tech: ''
		},
		contact: {
			email: '',
			phone: '',
			address: ''
		}
	}
});
