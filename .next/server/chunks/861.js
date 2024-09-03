exports.id = 861;
exports.ids = [861];
exports.modules = {
	/***/ 73318: /***/ (
		__unused_webpack_module,
		__unused_webpack_exports,
		__webpack_require__,
	) => {
		Promise.resolve(/* import() eager */).then(
			__webpack_require__.bind(__webpack_require__, 38620),
		);

		/***/
	},

	/***/ 38620: /***/ (
		__unused_webpack_module,
		__webpack_exports__,
		__webpack_require__,
	) => {
		'use strict';
		// ESM COMPAT FLAG
		__webpack_require__.r(__webpack_exports__);

		// EXPORTS
		__webpack_require__.d(__webpack_exports__, {
			default: () => /* binding */ HomePage,
		});

		// EXTERNAL MODULE: ./node_modules/@carbon/react/lib/index.js
		var lib = __webpack_require__(57633);
		// EXTERNAL MODULE: ./node_modules/@carbon/pictograms-react/lib/index.js
		var pictograms_react_lib = __webpack_require__(54888);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
		var es_array_join = __webpack_require__(66289); // CONCATENATED MODULE: ./src/app/components/Info/Info.js
		// Take in a phrase and separate the third word in an array
		function createArrayFromPhrase(phrase) {
			var splitPhrase = phrase.split(' ');
			var thirdWord = splitPhrase.pop();
			return [splitPhrase.join(' '), thirdWord];
		}
		var InfoSection = function InfoSection(props) {
			return /*#__PURE__*/ React.createElement(
				lib /* Grid */.rjZ,
				{
					className: ''.concat(props.className, ' info-section'),
				},
				/*#__PURE__*/ React.createElement(
					lib /* Column */.sgG,
					{
						sm: 4,
						md: 8,
						lg: 16,
						xlg: 3,
					},
					/*#__PURE__*/ React.createElement(
						'h3',
						{
							className: 'info-section__heading',
						},
						props.heading,
					),
				),
				props.children,
			);
		};
		var InfoCard = function InfoCard(props) {
			var splitHeading = createArrayFromPhrase(props.heading);
			return /*#__PURE__*/ React.createElement(
				lib /* Column */.sgG,
				{
					sm: 4,
					md: 8,
					lg: 5,
					xlg: 4,
					className: 'info-card',
				},
				/*#__PURE__*/ React.createElement(
					'div',
					null,
					/*#__PURE__*/ React.createElement(
						'h4',
						{
							className: 'info-card__heading',
						},
						''.concat(splitHeading[0], ' '),
						/*#__PURE__*/ React.createElement(
							'strong',
							null,
							splitHeading[1],
						),
					),
					/*#__PURE__*/ React.createElement(
						'p',
						{
							className: 'info-card__body',
						},
						props.body,
					),
				),
				props.icon(),
			);
		};

		// EXTERNAL MODULE: ./node_modules/next/image.js
		var next_image = __webpack_require__(48421);
		var image_default = /*#__PURE__*/ __webpack_require__.n(next_image); // CONCATENATED MODULE: ./src/app/dashboard/home/page.js
		/* __next_internal_client_entry_do_not_use__ default auto */

		function HomePage() {
			return /*#__PURE__*/ React.createElement(
				lib /* Grid */.rjZ,
				{
					className: 'landing-page',
					fullWidth: true,
				},
				/*#__PURE__*/ React.createElement(
					lib /* Column */.sgG,
					{
						lg: 16,
						md: 8,
						sm: 4,
						className: 'landing-page__banner',
					},
					/*#__PURE__*/ React.createElement(
						lib /* Breadcrumb */.aGc,
						{
							noTrailingSlash: true,
							'aria-label': 'Page navigation',
						},
						/*#__PURE__*/ React.createElement(
							lib /* BreadcrumbItem */.gN6,
							null,
							/*#__PURE__*/ React.createElement(
								'a',
								{
									href: '/',
								},
								'Getting started',
							),
						),
					),
					/*#__PURE__*/ React.createElement(
						'h1',
						{
							className: 'landing-page__heading',
						},
						'Design & build with Diamond',
					),
				),
				/*#__PURE__*/ React.createElement(
					lib /* Column */.sgG,
					{
						lg: 16,
						md: 8,
						sm: 4,
						className: 'landing-page__r2',
					},
					/*#__PURE__*/ React.createElement(
						lib /* Tabs */.mQc,
						{
							defaultSelectedIndex: 0,
						},
						/*#__PURE__*/ React.createElement(
							lib /* TabList */.tdY,
							{
								className: 'tabs-group',
								'aria-label': 'Page navigation',
							},
							/*#__PURE__*/ React.createElement(
								lib /* Tab */.OK9,
								null,
								'About',
							),
							/*#__PURE__*/ React.createElement(
								lib /* Tab */.OK9,
								null,
								'Design',
							),
							/*#__PURE__*/ React.createElement(
								lib /* Tab */.OK9,
								null,
								'Develop',
							),
						),
						/*#__PURE__*/ React.createElement(
							lib /* TabPanels */.nPR,
							null,
							/*#__PURE__*/ React.createElement(
								lib /* TabPanel */.x45,
								null,
								/*#__PURE__*/ React.createElement(
									lib /* Grid */.rjZ,
									{
										className: 'tabs-group-content',
									},
									/*#__PURE__*/ React.createElement(
										lib /* Column */.sgG,
										{
											md: 4,
											lg: 7,
											sm: 4,
											className:
												'landing-page__tab-content',
										},
										/*#__PURE__*/ React.createElement(
											'h3',
											{
												className:
													'landing-page__subheading',
											},
											'What is Diamond?',
										),
										/*#__PURE__*/ React.createElement(
											'p',
											{
												className: 'landing-page__p',
											},
											'Diamond is a fork from IBM’s Carbon open-source design system for digital products and experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.',
										),
										/*#__PURE__*/ React.createElement(
											lib /* Button */.zxk,
											null,
											'Learn more',
										),
									),
									/*#__PURE__*/ React.createElement(
										lib /* Column */.sgG,
										{
											md: 4,
											lg: {
												span: 8,
												offset: 8,
											},
											sm: 4,
										},
										/*#__PURE__*/ React.createElement(
											image_default(),
											{
												className: 'landing-page__illo',
												src: '/tab-illo.png',
												alt: 'Diamond illustration',
												width: 604,
												height: 498,
											},
										),
									),
								),
							),
							/*#__PURE__*/ React.createElement(
								lib /* TabPanel */.x45,
								null,
								/*#__PURE__*/ React.createElement(
									lib /* Grid */.rjZ,
									{
										className: 'tabs-group-content',
									},
									/*#__PURE__*/ React.createElement(
										lib /* Column */.sgG,
										{
											lg: 16,
											md: 8,
											sm: 4,
											className:
												'landing-page__tab-content',
										},
										/*#__PURE__*/ React.createElement(
											'p',
											{
												className: 'landing-page__p',
											},
											'Rapidly build beautiful and accessible experiences. The Diamond kit contains all resources you need to get started.',
										),
									),
								),
							),
							/*#__PURE__*/ React.createElement(
								lib /* TabPanel */.x45,
								null,
								/*#__PURE__*/ React.createElement(
									lib /* Grid */.rjZ,
									{
										className: 'tabs-group-content',
									},
									/*#__PURE__*/ React.createElement(
										lib /* Column */.sgG,
										{
											lg: 16,
											md: 8,
											sm: 4,
											className:
												'landing-page__tab-content',
										},
										/*#__PURE__*/ React.createElement(
											'p',
											{
												className: 'landing-page__p',
											},
											'Diamond provides styles and components in Vanilla, React, Next, Angular, and Vue for anyone building on the web.',
										),
									),
								),
							),
						),
					),
				),
				/*#__PURE__*/ React.createElement(
					lib /* Column */.sgG,
					{
						lg: 16,
						md: 8,
						sm: 4,
						className: 'landing-page__r3',
					},
					/*#__PURE__*/ React.createElement(
						InfoSection,
						{
							heading: 'The Principles',
						},
						/*#__PURE__*/ React.createElement(InfoCard, {
							heading: 'Diamond is Open',
							body: "It's a distributed effort, guided by the principles of the open-source movement. Diamond's users are also it's makers, and everyone is encouraged to contribute.",
							icon: function icon() {
								return /*#__PURE__*/ React.createElement(
									pictograms_react_lib /* Advocate */.ID6,
									{
										size: 32,
									},
								);
							},
						}),
						/*#__PURE__*/ React.createElement(InfoCard, {
							heading: 'Diamond is Modular',
							body: "Diamond's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.",
							icon: function icon() {
								return /*#__PURE__*/ React.createElement(
									pictograms_react_lib /* AcceleratingTransformation */.pNg,
									{
										size: 32,
									},
								);
							},
						}),
						/*#__PURE__*/ React.createElement(InfoCard, {
							heading: 'Diamond is Consistent',
							body: 'Based on the comprehensive IBM Design Language, every element and component of Diamond was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.',
							icon: function icon() {
								return /*#__PURE__*/ React.createElement(
									pictograms_react_lib /* Globe */.THo,
									{
										size: 32,
									},
								);
							},
						}),
					),
				),
			);
		}

		/***/
	},

	/***/ 45569: /***/ (
		__unused_webpack_module,
		__webpack_exports__,
		__webpack_require__,
	) => {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		/* harmony export */ __webpack_require__.d(__webpack_exports__, {
			/* harmony export */ $$typeof: () => /* binding */ $$typeof,
			/* harmony export */ __esModule: () => /* binding */ __esModule,
			/* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
			/* harmony export */
		});
		/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ =
			__webpack_require__(86354);

		const proxy = (0,
		next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(
			String.raw`/Users/unknown1/Codex/github/common-project-back-front/src/app/dashboard/home/page.js`,
		);

		// Accessing the __esModule property and exporting $$typeof are required here.
		// The __esModule getter forces the proxy target to create the default export
		// and the $$typeof value is for rendering logic to determine if the module
		// is a client boundary.
		const { __esModule, $$typeof } = proxy;
		const __default__ = proxy.default;

		/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
			__default__;

		/***/
	},
};
