export interface ILanguage {
	shared: {
		pages: {
			services: string;
			portfolio: string;
			about: string;
			contact: string;
		};
	};
	landing: {
		hero: {
			title: string;
			text: string;
			button: string;
		};
		pitch: {
			items: {
				title: string;
				text: string[];
				img: string;
				alt: string;
			}[];
			learnMore: string;
		};
		services: {
			title: string;
			items: {
				title: string;
				icon: string;
				url: string;
			}[];
			button: string;
		};
	};
	services: {
		graphicDesign: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		development: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		seo: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		cms: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		techConsulting: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		hosting: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
	};
	about: {
		company: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		tech: {
			title: string;
			text: string[];
			img: string;
			alt: string;
		};
		faq: {
			title: string;
			questions: {
				question: string;
				answer: string;
			}[];
			img: string;
			alt: string;
		};
	};
	portfolio: {
		items: {
			title: string;
			description: string;
			tags: string;
			img: string;
			alt: string;
			url: string;
		}[];
	};
	footer: {
		motto: string;
		services: {
			development: string;
			design: string;
			seo: string;
			cms: string;
			consulting: string;
			hosting: string;
		};
		portfolio: {
			portfolioOne: string;
			portfolioTwo: string;
			portfolioThree: string;
		};
		about: {
			faq: string;
			company: string;
			people: string;
			tech: string;
		};
		contact: {
			email: string;
			phone: string;
			address: string;
		};
	};
}
