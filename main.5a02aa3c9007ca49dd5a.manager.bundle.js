(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{465:function(module){module.exports=JSON.parse('{"name":"@innovaccer/design-system","version":"2.1.0-0","description":"React components library project for Innovaccer Design System","main":"dist/index.umd.js","module":"dist/index.esm.js","types":"dist/core/index.type.d.ts","directories":{"css":"css"},"scripts":{"chromatic":"chromatic","test":"jest --coverage","test:ci":"jest --onlyChanged","start":"start-storybook -p 5000","dev":"concurrently --kill-others --raw \\"npm run watch-css\\" \\"npm run start\\"","storybook":"start-storybook","build-storybook":"build-storybook -c .storybook -o .dist --loglevel error","deploy-storybook":"storybook-to-ghpages","setup-css-dev":"./scripts/setup-local-css.sh","lint":"tslint --project tsconfig.json \'core/**/*.{tx,tsx}\'","prettier":"./node_modules/prettier/bin-prettier.js --config ./.prettierrc --write ./core/**/*.tsx","build-css":"gulp --gulpfile css/gulpfile.js build","clean-css":"gulp --gulpfile css/gulpfile.js clean","watch-css":"gulp --gulpfile css/gulpfile.js build && gulp --gulpfile css/gulpfile.js watch","build-js":"rm -rf dist/.lib && rollup -c","build-type":"rm -rf .lib && tsc -b tsconfig.type.json","build":"npm run build-css && npm run build-js","version":"./scripts/version.sh"},"author":"Innovaccer","license":"MIT","devDependencies":{"@babel/cli":"^7.8.4","@babel/core":"^7.8.7","@babel/plugin-proposal-class-properties":"^7.8.3","@babel/preset-env":"^7.8.7","@babel/preset-typescript":"^7.8.3","@rollup/plugin-alias":"^3.0.1","@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.0.2","@rollup/plugin-node-resolve":"^7.1.1","@rollup/plugin-replace":"^2.3.3","@rollup/plugin-typescript":"^5.0.2","@storybook/addon-a11y":"^6.1.21","@storybook/addon-actions":"^6.1.21","@storybook/addon-backgrounds":"^6.1.21","@storybook/addon-controls":"^6.1.21","@storybook/addon-docs":"^6.1.21","@storybook/addon-essentials":"^6.1.21","@storybook/addon-knobs":"^6.1.21","@storybook/addon-toolbars":"^6.1.21","@storybook/addon-viewport":"^6.1.21","@storybook/preset-typescript":"^3.0.0","@storybook/react":"^6.1.21","@storybook/storybook-deployer":"^2.8.7","@testing-library/jest-dom":"^5.11.1","@testing-library/react":"^10.4.7","@types/jest":"^24.0.24","@types/lz-string":"^1.3.34","@types/react-dom":"^16.9.4","@types/throttle-debounce":"^2.1.0","autoprefixer":"^9.7.3","babel-loader":"^8.0.6","babel-plugin-transform-object-rest-spread":"^6.26.0","concurrently":"^5.1.0","eslint":"^6.8.0","fork-ts-checker-webpack-plugin":"^4.0.0-beta.4","gulp":"^4.0.2","gulp-clean":"^0.4.0","gulp-concat":"^2.6.1","gulp-postcss":"^8.0.0","gulp-sourcemaps":"^2.6.5","install":"^0.13.0","lz-string":"^1.4.4","npm":"^6.14.7","postcss-color-mod-function":"^3.0.3","prettier":"^1.19.1","react":"^16.12.0","react-docgen-typescript-loader":"^3.6.0","react-is":"^16.12.0","react-live":"^2.2.2","rollup":"^2.0.6","rollup-plugin-babel":"^4.4.0","rollup-plugin-node-builtins":"^2.1.2","storybook-chromatic":"^3.5.5","ts-jest":"^24.3.0","ts-loader":"^6.2.1","tslint":"^6.0.0-beta0","tslint-config-airbnb":"^5.11.2","tslint-config-prettier":"^1.18.0","tslint-react":"^4.1.0","ttypescript":"^1.5.10","typescript":"^3.7.4","typescript-eslint-parser":"^22.0.0","typescript-transform-paths":"^1.1.14"},"dependencies":{"classnames":"^2.3.1","core-js":"^3.9.1","js-beautify":"1.10.3","react-dom":"^16.8.6","react-dynamic-virtual-scroll":"^1.3.0","react-popper":"^1.3.7","throttle-debounce":"^2.1.0","utility-types":"^3.10.0"},"bugs":"https://github.com/innovaccer/design-system/issues","homepage":"https://innovaccer.github.io/design-system","keywords":["React","Design System","Typescript","Innovaccer"],"repository":"github:innovaccer/design-system"}')},493:function(module,exports,__webpack_require__){__webpack_require__(494),__webpack_require__(919),__webpack_require__(911),__webpack_require__(920),__webpack_require__(913),__webpack_require__(916),__webpack_require__(915),__webpack_require__(917),__webpack_require__(918),__webpack_require__(914),__webpack_require__(912),module.exports=__webpack_require__(910)},561:function(module,exports){},910:function(module,exports,__webpack_require__){"use strict";__webpack_require__(30).addons.setConfig({refs:{}})},919:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var public_api=__webpack_require__(30),create=__webpack_require__(466),package_0=__webpack_require__(465),primary=Object(create.create)({base:"light",colorPrimary:"#0000001a",colorSecondary:"deepskyblue",appBg:"white",appContentBg:"white",appBorderColor:"#0000001a",appBorderRadius:4,fontBase:'"Nunito Sans", "Open Sans", sans-serif',fontCode:"monospace",textColor:"black",textInverseColor:"rgba(255,255,255,0.9)",barTextColor:"silver",barSelectedColor:"black",barBg:"white",inputBg:"white",inputBorder:"silver",inputTextColor:"black",inputBorderRadius:4,brandTitle:"Masala Design System v".concat(package_0.version),brandUrl:"https://github.com/innovaccer/design-system/"});public_api.default.setConfig({theme:primary})}},[[493,2,3]]]);