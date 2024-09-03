exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 97507:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23846, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 23433, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 17382, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90613, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90316, 23))

/***/ }),

/***/ 17111:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31645))

/***/ }),

/***/ 31645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: ./node_modules/@carbon/react/lib/index.js
var lib = __webpack_require__(57633);
// EXTERNAL MODULE: ./node_modules/@carbon/icons-react/lib/index.js
var icons_react_lib = __webpack_require__(61865);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/TutorialHeader/TutorialHeader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


var TutorialHeader = function TutorialHeader() {
    return /*#__PURE__*/ React.createElement(lib/* HeaderContainer */.gMZ, {
        render: function render(_ref) {
            var isSideNavExpanded = _ref.isSideNavExpanded, onClickSideNavExpand = _ref.onClickSideNavExpand;
            return /*#__PURE__*/ React.createElement(lib/* Header */.h4i, {
                "aria-label": "AD 3.0 - React Component Diamond Tutorial"
            }, /*#__PURE__*/ React.createElement(lib/* SkipToContent */.zl5, null), /*#__PURE__*/ React.createElement(lib/* HeaderMenuButton */.wID, {
                "aria-label": "Open menu",
                onClick: onClickSideNavExpand,
                isActive: isSideNavExpanded
            }), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderName */.nho, {
                prefix: "AD 3.0"
            }, "Dashboard")), /*#__PURE__*/ React.createElement(lib/* HeaderNavigation */.F1E, {
                "aria-label": "AD 3.0 - React Component Diamond Tutorial"
            }, /*#__PURE__*/ React.createElement((link_default()), {
                href: "/modules",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Modules")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/projects",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Projects")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/tasks",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Tasks")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/messages",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Messages")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/games",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Games"))), /*#__PURE__*/ React.createElement(lib/* SideNav */.kwZ, {
                "aria-label": "Side navigation",
                expanded: isSideNavExpanded,
                isPersistent: false
            }, /*#__PURE__*/ React.createElement(lib/* SideNavItems */.LDp, null, /*#__PURE__*/ React.createElement(lib/* HeaderSideNavItems */.YJg, null, /*#__PURE__*/ React.createElement((link_default()), {
                href: "/modules",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Modules")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/projects",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Projects")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/tasks",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Tasks")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/messages",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Messages")), /*#__PURE__*/ React.createElement((link_default()), {
                href: "/games",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(lib/* HeaderMenuItem */.h1_, null, "Games"))))), /*#__PURE__*/ React.createElement(lib/* HeaderGlobalBar */.sLE, null, /*#__PURE__*/ React.createElement(lib/* HeaderGlobalAction */.JMr, {
                "aria-label": "Notifications",
                tooltipAlignment: "center",
                className: "action-icons"
            }, /*#__PURE__*/ React.createElement((link_default()), {
                href: "/notifications",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(icons_react_lib.Notification, {
                size: 20
            }))), /*#__PURE__*/ React.createElement(lib/* HeaderGlobalAction */.JMr, {
                "aria-label": "User Avatar",
                tooltipAlignment: "center",
                className: "action-icons"
            }, /*#__PURE__*/ React.createElement((link_default()), {
                href: "/profile",
                passHref: true,
                legacyBehavior: true
            }, /*#__PURE__*/ React.createElement(icons_react_lib.UserAvatar, {
                size: 20
            }))), /*#__PURE__*/ React.createElement(lib/* HeaderGlobalAction */.JMr, {
                "aria-label": "App Switcher",
                tooltipAlignment: "end"
            }, /*#__PURE__*/ React.createElement(icons_react_lib.Switcher, {
                size: 20
            }))));
        }
    });
};
/* harmony default export */ const TutorialHeader_TutorialHeader = (TutorialHeader);

;// CONCATENATED MODULE: ./src/app/dashboard/providers.js
/* __next_internal_client_entry_do_not_use__ Providers auto */ 

function Providers(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(lib/* Theme */.Q2A, {
        theme: "g100"
    }, /*#__PURE__*/ React.createElement(TutorialHeader_TutorialHeader, null)), /*#__PURE__*/ React.createElement(lib/* Content */.VYI, null, children));
}


/***/ }),

/***/ 37182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(39675);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(86354);
;// CONCATENATED MODULE: ./src/app/dashboard/providers.js

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/unknown1/Codex/github/common-project-back-front/src/app/dashboard/providers.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/app/dashboard/layout.js


var metadata = {
    title: "AD 3.0 - Dashboard",
    description: "A learning dashboard project in React Express"
};
function RootLayout(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/ React.createElement("html", {
        lang: "en"
    }, /*#__PURE__*/ React.createElement("body", null, /*#__PURE__*/ React.createElement(e0, null, children)));
}


/***/ }),

/***/ 39675:
/***/ (() => {



/***/ })

};
;