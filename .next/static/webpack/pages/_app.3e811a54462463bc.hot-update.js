"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed,\\r\\nfigure, figcaption, footer, header, hgroup,\\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\nmargin: 0;\\r\\npadding: 0;\\r\\nborder: 0;\\r\\nfont-size: 100%;\\r\\nfont: inherit;\\r\\nvertical-align: baseline;\\r\\n}\\r\\n\\r\\narticle, aside, details, figcaption, figure,\\r\\nfooter, header, hgroup, menu, nav, section {\\r\\ndisplay: block;\\r\\n}\\r\\nbody {\\r\\nline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\nlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\nquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\ncontent: '';\\r\\ncontent: none;\\r\\n}\\r\\ntable {\\r\\nborder-collapse: collapse;\\r\\nborder-spacing: 0;\\r\\n}\\r\\n.container1{\\r\\n    font-family: IDE;\\r\\n}\\r\\n.titulo-imagem{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: rgb(92, 0, 128);\\r\\n    padding: 50px;\\r\\n    height: 100vh;\\r\\n    gap: 16px;\\r\\n}\\r\\n.neko1{\\r\\n    max-width: 50vw;\\r\\n    height: auto;\\r\\n}\\r\\n.titulo{\\r\\n    font-size: 200px;\\r\\n    color: white;\\r\\n    text-shadow: 9px 9px 4px black;\\r\\n}\\r\\n#ide-vermelho{\\r\\n    color: red;\\r\\n}\\r\\n.header{\\r\\n    position: fixed;\\r\\n    font-size: 40px;\\r\\n    z-index: 999;\\r\\n    height: 100px;\\r\\n    width: 100vw;\\r\\n    display: flex;\\r\\n    background-color: #2c202c;\\r\\n    color: white;\\r\\n    font-weight: bold;\\r\\n    justify-content:space-evenly;\\r\\n    align-items: center;\\r\\n    \\r\\n}\\r\\n\\r\\n.start_button{\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.form_table{\\r\\n    font-family: IDE;   \\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n.form_title{\\r\\n    color: #580a58;\\r\\n    margin-top: 20vh;\\r\\n    padding-bottom: 3vh;\\r\\n}\\r\\n.form{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 60vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n}\\r\\n\\r\\n.form_submit{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 36vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n    color: #580a58;\\r\\n}\\r\\n\\r\\n\\r\\n.footer{\\r\\n    background-color: #3d3d3d;\\r\\n    color: aliceblue;\\r\\n    font-family: IDE;\\r\\n\\r\\n    margin-top: 200px;\\r\\n    padding-top: 50px;\\r\\n    padding-bottom: 50px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n\\r\\n}\\r\\n\\r\\n.icons{\\r\\n    background-color: #3d3d3d;\\r\\n    border-radius: 0%;\\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\n.icon_buttons{\\r\\n    cursor:pointer;\\r\\n    border: none;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n::placeholder{\\r\\n    color: #580a58;\\r\\n}\\r\\n@font-face {\\r\\n    font-family: IDE;\\r\\n    src: url('/fonts/uni05_53.ttf');\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;AAYA,SAAS;AACT,UAAU;AACV,SAAS;AACT,eAAe;AACf,aAAa;AACb,wBAAwB;AACxB;;AAEA;;AAEA,cAAc;AACd;AACA;AACA,cAAc;AACd;AACA;AACA,gBAAgB;AAChB;AACA;AACA,YAAY;AACZ;AACA;;AAEA,WAAW;AACX,aAAa;AACb;AACA;AACA,yBAAyB;AACzB,iBAAiB;AACjB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,aAAa;IACb,SAAS;AACb;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;IACf,eAAe;IACf,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,4BAA4B;IAC5B,mBAAmB;;AAEvB;;AAEA;;AAEA;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,cAAc;AAClB;;;AAGA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;;IAEhB,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;;AAEf;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;;;AAGrB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,UAAU;AACd;;;;AAIA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,+BAA+B;AACnC\",\"sourcesContent\":[\"html, body, div, span, applet, object, iframe, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed,\\r\\nfigure, figcaption, footer, header, hgroup,\\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\nmargin: 0;\\r\\npadding: 0;\\r\\nborder: 0;\\r\\nfont-size: 100%;\\r\\nfont: inherit;\\r\\nvertical-align: baseline;\\r\\n}\\r\\n\\r\\narticle, aside, details, figcaption, figure,\\r\\nfooter, header, hgroup, menu, nav, section {\\r\\ndisplay: block;\\r\\n}\\r\\nbody {\\r\\nline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\nlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\nquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\ncontent: '';\\r\\ncontent: none;\\r\\n}\\r\\ntable {\\r\\nborder-collapse: collapse;\\r\\nborder-spacing: 0;\\r\\n}\\r\\n.container1{\\r\\n    font-family: IDE;\\r\\n}\\r\\n.titulo-imagem{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: rgb(92, 0, 128);\\r\\n    padding: 50px;\\r\\n    height: 100vh;\\r\\n    gap: 16px;\\r\\n}\\r\\n.neko1{\\r\\n    max-width: 50vw;\\r\\n    height: auto;\\r\\n}\\r\\n.titulo{\\r\\n    font-size: 200px;\\r\\n    color: white;\\r\\n    text-shadow: 9px 9px 4px black;\\r\\n}\\r\\n#ide-vermelho{\\r\\n    color: red;\\r\\n}\\r\\n.header{\\r\\n    position: fixed;\\r\\n    font-size: 40px;\\r\\n    z-index: 999;\\r\\n    height: 100px;\\r\\n    width: 100vw;\\r\\n    display: flex;\\r\\n    background-color: #2c202c;\\r\\n    color: white;\\r\\n    font-weight: bold;\\r\\n    justify-content:space-evenly;\\r\\n    align-items: center;\\r\\n    \\r\\n}\\r\\n\\r\\n.start_button{\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.form_table{\\r\\n    font-family: IDE;   \\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n.form_title{\\r\\n    color: #580a58;\\r\\n    margin-top: 20vh;\\r\\n    padding-bottom: 3vh;\\r\\n}\\r\\n.form{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 60vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n}\\r\\n\\r\\n.form_submit{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 36vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n    color: #580a58;\\r\\n}\\r\\n\\r\\n\\r\\n.footer{\\r\\n    background-color: #3d3d3d;\\r\\n    color: aliceblue;\\r\\n    font-family: IDE;\\r\\n\\r\\n    margin-top: 200px;\\r\\n    padding-top: 50px;\\r\\n    padding-bottom: 50px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n\\r\\n}\\r\\n\\r\\n.icons{\\r\\n    background-color: #3d3d3d;\\r\\n    border-radius: 0%;\\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\n.icon_buttons{\\r\\n    cursor:pointer;\\r\\n    border: none;\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n::placeholder{\\r\\n    color: #580a58;\\r\\n}\\r\\n@font-face {\\r\\n    font-family: IDE;\\r\\n    src: url('/fonts/uni05_53.ttf');\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSwraEJBQStoQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixLQUFLLG9HQUFvRyxtQkFBbUIsS0FBSyxVQUFVLG1CQUFtQixLQUFLLFlBQVkscUJBQXFCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLCtEQUErRCxnQkFBZ0Isa0JBQWtCLEtBQUssV0FBVyw4QkFBOEIsc0JBQXNCLEtBQUssZ0JBQWdCLHlCQUF5QixLQUFLLG1CQUFtQixzQkFBc0IsZ0NBQWdDLDRCQUE0QiwwQ0FBMEMsc0JBQXNCLHNCQUFzQixrQkFBa0IsS0FBSyxXQUFXLHdCQUF3QixxQkFBcUIsS0FBSyxZQUFZLHlCQUF5QixxQkFBcUIsdUNBQXVDLEtBQUssa0JBQWtCLG1CQUFtQixLQUFLLFlBQVksd0JBQXdCLHdCQUF3QixxQkFBcUIsc0JBQXNCLHFCQUFxQixzQkFBc0Isa0NBQWtDLHFCQUFxQiwwQkFBMEIscUNBQXFDLDRCQUE0QixhQUFhLHNCQUFzQixTQUFTLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsU0FBUyxnQkFBZ0IsdUJBQXVCLHlCQUF5Qiw0QkFBNEIsS0FBSyxVQUFVLDRCQUE0Qiw4QkFBOEIsd0JBQXdCLG9CQUFvQixxQkFBcUIsd0JBQXdCLDJCQUEyQixLQUFLLHFCQUFxQiw0QkFBNEIsOEJB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b250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxubWFyZ2luOiAwO1xcclxcbnBhZGRpbmc6IDA7XFxyXFxuYm9yZGVyOiAwO1xcclxcbmZvbnQtc2l6ZTogMTAwJTtcXHJcXG5mb250OiBpbmhlcml0O1xcclxcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5saW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5saXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5xdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5jb250ZW50OiAnJztcXHJcXG5jb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5ib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcjF7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxufVxcclxcbi50aXR1bG8taW1hZ2Vte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAwLCAxMjgpO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxufVxcclxcbi5uZWtvMXtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi50aXR1bG97XFxyXFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDlweCA5cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG4jaWRlLXZlcm1lbGhve1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzIwMmM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRfYnV0dG9ue1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZm9ybV90YWJsZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElERTsgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLmZvcm1fdGl0bGV7XFxyXFxuICAgIGNvbG9yOiAjNTgwYTU4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcclxcbn1cXHJcXG4uZm9ybXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElERTsgICBcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTgwYTU4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9zdWJtaXR7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7ICAgXFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzU4MGE1ODtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB3aWR0aDogMzZ2dztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXHJcXG4gICAgY29sb3I6ICM1ODBhNTg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmljb25ze1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbl9idXR0b25ze1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjogIzU4MGE1ODtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxuICAgIHNyYzogdXJsKCcvZm9udHMvdW5pMDVfNTMudHRmJyk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFNBQVM7QUFDVCxlQUFlO0FBQ2YsYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qjs7QUFFQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixtQkFBbUI7O0FBRXZCOztBQUVBOztBQUVBOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCOzs7QUFHckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFVBQVU7QUFDZDs7OztBQUlBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxubWFyZ2luOiAwO1xcclxcbnBhZGRpbmc6IDA7XFxyXFxuYm9yZGVyOiAwO1xcclxcbmZvbnQtc2l6ZTogMTAwJTtcXHJcXG5mb250OiBpbmhlcml0O1xcclxcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5saW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5saXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5xdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5jb250ZW50OiAnJztcXHJcXG5jb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5ib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuLmNvbnRhaW5lcjF7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxufVxcclxcbi50aXR1bG8taW1hZ2Vte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAwLCAxMjgpO1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxufVxcclxcbi5uZWtvMXtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi50aXR1bG97XFxyXFxuICAgIGZvbnQtc2l6ZTogMjAwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDlweCA5cHggNHB4IGJsYWNrO1xcclxcbn1cXHJcXG4jaWRlLXZlcm1lbGhve1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgei1pbmRleDogOTk5O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzIwMmM7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnRfYnV0dG9ue1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZm9ybV90YWJsZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElERTsgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuLmZvcm1fdGl0bGV7XFxyXFxuICAgIGNvbG9yOiAjNTgwYTU4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcclxcbn1cXHJcXG4uZm9ybXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IElERTsgICBcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTgwYTU4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybV9zdWJtaXR7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7ICAgXFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzU4MGE1ODtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB3aWR0aDogMzZ2dztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXHJcXG4gICAgY29sb3I6ICM1ODBhNTg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XFxyXFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmljb25ze1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbl9idXR0b25ze1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjogIzU4MGE1ODtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxuICAgIHNyYzogdXJsKCcvZm9udHMvdW5pMDVfNTMudHRmJyk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});