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
			heading: string;
			text: string;
		};
		pitch: {
			one: {
				heading: string;
				text: string;
			};
			two: {
				heading: string;
				text: string;
			};
			three: {
				heading: string;
				text: string;
			};
			learnMore: string;
		};
		services: {
			heading: string;
			graphicDesign: string;
			webDevelopment: string;
			seo: string;
			cms: string;
			techConsulting: string;
			hosting: string;
		};
	};
	services: {
		graphicDesign: {
			title: string;
			text: string;
			img: string;
			alt: string;
		};
		development: {
			title: string;
			text: string;
			img: string;
			alt: string;
		};
		seo: {
			title: string;
			text: string;
			img: string;
			alt: string;
		};
		cms: {
			title: string;
			text: string;
			img: string;
			alt: string;
		};
		techConsulting: {
			title: string;
			text: string;
			img: string;
			alt: string;
		};
		hosting: {
			title: string;
			text: string;
			img: string;
			alt: string;
		};
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
