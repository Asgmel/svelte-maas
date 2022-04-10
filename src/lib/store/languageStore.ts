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
				text: [],
				img: '',
				alt: ''
			},
			two: {
				heading: '',
				text: [],
				img: '',
				alt: ''
			},
			three: {
				heading: '',
				text: [],
				img: '',
				alt: ''
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
	services: {
		graphicDesign: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		development: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		seo: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		cms: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		techConsulting: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		hosting: {
			title: '',
			text: [],
			img: '',
			alt: ''
		}
	},
	about: {
		company: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		tech: {
			title: '',
			text: [],
			img: '',
			alt: ''
		},
		faq: {
			title: '',
			questions: [
				{
					question: '',
					answer: ''
				}
			],
			img: '',
			alt: ''
		}
	},
	portfolio: {
		items: []
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
