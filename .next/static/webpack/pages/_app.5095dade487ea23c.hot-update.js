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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body, div, span, applet, object, iframe, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed,\\r\\nfigure, figcaption, footer, header, hgroup,\\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\nmargin: 0;\\r\\npadding: 0;\\r\\nborder: 0;\\r\\nfont-size: 100%;\\r\\nfont: inherit;\\r\\nvertical-align: baseline;\\r\\n}\\r\\n\\r\\narticle, aside, details, figcaption, figure,\\r\\nfooter, header, hgroup, menu, nav, section {\\r\\ndisplay: block;\\r\\n}\\r\\nbody {\\r\\nline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\nlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\nquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\ncontent: '';\\r\\ncontent: none;\\r\\n}\\r\\ntable {\\r\\nborder-collapse: collapse;\\r\\nborder-spacing: 0;\\r\\n}\\r\\n.container1{\\r\\n    font-family: IDE;\\r\\n}\\r\\n.titulo-imagem{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: rgb(92, 0, 128);\\r\\n    padding: 50px;\\r\\n    height: 100vh;\\r\\n    gap: 16px;\\r\\n}\\r\\n.neko1{\\r\\n    max-width: 50vw;\\r\\n    height: auto;\\r\\n}\\r\\n.titulo{\\r\\n    font-size: 200px;\\r\\n    color: white;\\r\\n    text-shadow: 9px 9px 4px black;\\r\\n}\\r\\n#ide-vermelho{\\r\\n    color: red;\\r\\n}\\r\\n.header{\\r\\n    position: fixed;\\r\\n    font-size: 40px;\\r\\n    z-index: 999;\\r\\n    height: 100px;\\r\\n    width: 100vw;\\r\\n    display: flex;\\r\\n    background-color: #2c202c;\\r\\n    color: white;\\r\\n    font-weight: bold;\\r\\n    justify-content:space-evenly;\\r\\n    align-items: center;\\r\\n    \\r\\n}\\r\\n\\r\\n.start_button{\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.form_table{\\r\\n    font-family: IDE;   \\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n.form_title{\\r\\n    color: #580a58;\\r\\n    margin-top: 20vh;\\r\\n    padding-bottom: 3vh;\\r\\n}\\r\\n.form{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 60vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n}\\r\\n\\r\\n.form_submit{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 36vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n    color: #580a58;\\r\\n}\\r\\n\\r\\n\\r\\n.footer{\\r\\n    background-color: #3d3d3d;\\r\\n    color: aliceblue;\\r\\n    font-family: IDE;\\r\\n\\r\\n    margin-top: 50px;\\r\\n    padding-top: 50px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n\\r\\n}\\r\\n\\r\\n::placeholder{\\r\\n    color: #580a58;\\r\\n}\\r\\n@font-face {\\r\\n    font-family: IDE;\\r\\n    src: url('/fonts/uni05_53.ttf');\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;AAYA,SAAS;AACT,UAAU;AACV,SAAS;AACT,eAAe;AACf,aAAa;AACb,wBAAwB;AACxB;;AAEA;;AAEA,cAAc;AACd;AACA;AACA,cAAc;AACd;AACA;AACA,gBAAgB;AAChB;AACA;AACA,YAAY;AACZ;AACA;;AAEA,WAAW;AACX,aAAa;AACb;AACA;AACA,yBAAyB;AACzB,iBAAiB;AACjB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,aAAa;IACb,SAAS;AACb;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;AAClC;AACA;IACI,UAAU;AACd;AACA;IACI,eAAe;IACf,eAAe;IACf,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,iBAAiB;IACjB,4BAA4B;IAC5B,mBAAmB;;AAEvB;;AAEA;;AAEA;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;AACA;IACI,cAAc;IACd,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;IACrB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,cAAc;AAClB;;;AAGA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,gBAAgB;;IAEhB,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;;AAEf;;AAEA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,+BAA+B;AACnC\",\"sourcesContent\":[\"html, body, div, span, applet, object, iframe, p, blockquote, pre,\\r\\na, abbr, acronym, address, big, cite, code,\\r\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\r\\nsmall, strike, strong, sub, sup, tt, var,\\r\\nb, u, i, center,\\r\\ndl, dt, dd, ol, ul, li,\\r\\nfieldset, form, label, legend,\\r\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\r\\narticle, aside, canvas, details, embed,\\r\\nfigure, figcaption, footer, header, hgroup,\\r\\nmenu, nav, output, ruby, section, summary,\\r\\ntime, mark, audio, video {\\r\\nmargin: 0;\\r\\npadding: 0;\\r\\nborder: 0;\\r\\nfont-size: 100%;\\r\\nfont: inherit;\\r\\nvertical-align: baseline;\\r\\n}\\r\\n\\r\\narticle, aside, details, figcaption, figure,\\r\\nfooter, header, hgroup, menu, nav, section {\\r\\ndisplay: block;\\r\\n}\\r\\nbody {\\r\\nline-height: 1;\\r\\n}\\r\\nol, ul {\\r\\nlist-style: none;\\r\\n}\\r\\nblockquote, q {\\r\\nquotes: none;\\r\\n}\\r\\nblockquote:before, blockquote:after,\\r\\nq:before, q:after {\\r\\ncontent: '';\\r\\ncontent: none;\\r\\n}\\r\\ntable {\\r\\nborder-collapse: collapse;\\r\\nborder-spacing: 0;\\r\\n}\\r\\n.container1{\\r\\n    font-family: IDE;\\r\\n}\\r\\n.titulo-imagem{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: rgb(92, 0, 128);\\r\\n    padding: 50px;\\r\\n    height: 100vh;\\r\\n    gap: 16px;\\r\\n}\\r\\n.neko1{\\r\\n    max-width: 50vw;\\r\\n    height: auto;\\r\\n}\\r\\n.titulo{\\r\\n    font-size: 200px;\\r\\n    color: white;\\r\\n    text-shadow: 9px 9px 4px black;\\r\\n}\\r\\n#ide-vermelho{\\r\\n    color: red;\\r\\n}\\r\\n.header{\\r\\n    position: fixed;\\r\\n    font-size: 40px;\\r\\n    z-index: 999;\\r\\n    height: 100px;\\r\\n    width: 100vw;\\r\\n    display: flex;\\r\\n    background-color: #2c202c;\\r\\n    color: white;\\r\\n    font-weight: bold;\\r\\n    justify-content:space-evenly;\\r\\n    align-items: center;\\r\\n    \\r\\n}\\r\\n\\r\\n.start_button{\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.form_table{\\r\\n    font-family: IDE;   \\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n\\r\\n}\\r\\n.form_title{\\r\\n    color: #580a58;\\r\\n    margin-top: 20vh;\\r\\n    padding-bottom: 3vh;\\r\\n}\\r\\n.form{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 60vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n}\\r\\n\\r\\n.form_submit{\\r\\n    font-family: IDE;   \\r\\n    border-color: #580a58;\\r\\n    font-size: 16px;\\r\\n    width: 36vw;\\r\\n    height: 50px;\\r\\n    margin-top: 1vh;\\r\\n    margin-bottom: 1vh;\\r\\n    color: #580a58;\\r\\n}\\r\\n\\r\\n\\r\\n.footer{\\r\\n    background-color: #3d3d3d;\\r\\n    color: aliceblue;\\r\\n    font-family: IDE;\\r\\n\\r\\n    margin-top: 50px;\\r\\n    padding-top: 50px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    width: 100%;\\r\\n\\r\\n}\\r\\n\\r\\n::placeholder{\\r\\n    color: #580a58;\\r\\n}\\r\\n@font-face {\\r\\n    font-family: IDE;\\r\\n    src: url('/fonts/uni05_53.ttf');\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSwraEJBQStoQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixLQUFLLG9HQUFvRyxtQkFBbUIsS0FBSyxVQUFVLG1CQUFtQixLQUFLLFlBQVkscUJBQXFCLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLCtEQUErRCxnQkFBZ0Isa0JBQWtCLEtBQUssV0FBVyw4QkFBOEIsc0JBQXNCLEtBQUssZ0JBQWdCLHlCQUF5QixLQUFLLG1CQUFtQixzQkFBc0IsZ0NBQWdDLDRCQUE0QiwwQ0FBMEMsc0JBQXNCLHNCQUFzQixrQkFBa0IsS0FBSyxXQUFXLHdCQUF3QixxQkFBcUIsS0FBSyxZQUFZLHlCQUF5QixxQkFBcUIsdUNBQXVDLEtBQUssa0JBQWtCLG1CQUFtQixLQUFLLFlBQVksd0JBQXdCLHdCQUF3QixxQkFBcUIsc0JBQXNCLHFCQUFxQixzQkFBc0Isa0NBQWtDLHFCQUFxQiwwQkFBMEIscUNBQXFDLDRCQUE0QixhQUFhLHNCQUFzQixTQUFTLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsU0FBUyxnQkFBZ0IsdUJBQXVCLHlCQUF5Qiw0QkFBNEIsS0FBSyxVQUFVLDRCQUE0Qiw4QkFBOEIsd0JBQXdCLG9CQUFvQixxQkFBcUIsd0JBQXdCLDJCQUEyQixLQUFLLHFCQUFxQiw0QkFBNEIsOEJBQThCLHdCQUF3QixvQkFBb0IscUJBQXFCLHdCQUF3QiwyQkFBMkIsdUJBQXVCLEtBQUssb0JBQW9CLGtDQUFrQyx5QkFBeUIseUJBQXlCLDZCQUE2QiwwQkFBMEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixTQUFTLHNCQUFzQix1QkFBdUIsS0FBSyxnQkFBZ0IseUJBQXlCLHdDQUF3QyxLQUFLLFdBQVcsa0dBQWtHLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLCtnQkFBK2dCLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEtBQUssb0dBQW9HLG1CQUFtQixLQUFLLFVBQVUsbUJBQW1CLEtBQUssWUFBWSxxQkFBcUIsS0FBSyxtQkFBbUIsaUJBQWlCLEtBQUssK0RBQStELGdCQUFnQixrQkFBa0IsS0FBSyxXQUFXLDhCQUE4QixzQkFBc0IsS0FBSyxnQkFBZ0IseUJBQXlCLEtBQUssbUJBQW1CLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLDBDQUEwQyxzQkFBc0Isc0JBQXNCLGtCQUFrQixLQUFLLFdBQVcsd0JBQXdCLHFCQUFxQixLQUFLLFlBQVkseUJBQXlCLHFCQUFxQix1Q0FBdUMsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssWUFBWSx3QkFBd0Isd0JBQXdCLHFCQUFxQixzQkFBc0IscUJBQXFCLHNCQUFzQixrQ0FBa0MscUJBQXFCLDBCQUEwQixxQ0FBcUMsNEJBQTRCLGFBQWEsc0JBQXNCLFNBQVMsd0JBQXdCLDRCQUE0QixzQkFBc0IsK0JBQStCLDRCQUE0QixTQUFTLGdCQUFnQix1QkFBdUIseUJBQXlCLDRCQUE0QixLQUFLLFVBQVUsNEJBQTRCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLHFCQUFxQix3QkFBd0IsMkJBQTJCLEtBQUsscUJBQXFCLDRCQUE0Qiw4QkFBOEIsd0JBQXdCLG9CQUFvQixxQkFBcUIsd0JBQXdCLDJCQUEyQix1QkFBdUIsS0FBSyxvQkFBb0Isa0NBQWtDLHlCQUF5Qix5QkFBeUIsNkJBQTZCLDBCQUEwQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0Msb0JBQW9CLFNBQVMsc0JBQXNCLHVCQUF1QixLQUFLLGdCQUFnQix5QkFBeUIsd0NBQXdDLEtBQUssdUJBQXVCO0FBQ3Q2TjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MTFmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbm1hcmdpbjogMDtcXHJcXG5wYWRkaW5nOiAwO1xcclxcbmJvcmRlcjogMDtcXHJcXG5mb250LXNpemU6IDEwMCU7XFxyXFxuZm9udDogaW5oZXJpdDtcXHJcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5kaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxubGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxubGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxucXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuY29udGVudDogJyc7XFxyXFxuY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcbi5jb250YWluZXIxe1xcclxcbiAgICBmb250LWZhbWlseTogSURFO1xcclxcbn1cXHJcXG4udGl0dWxvLWltYWdlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMCwgMTI4KTtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG4ubmVrbzF7XFxyXFxuICAgIG1heC13aWR0aDogNTB2dztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4udGl0dWxve1xcclxcbiAgICBmb250LXNpemU6IDIwMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiA5cHggOXB4IDRweCBibGFjaztcXHJcXG59XFxyXFxuI2lkZS12ZXJtZWxob3tcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyMDJjO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0X2J1dHRvbntcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm1fdGFibGV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7ICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5mb3JtX3RpdGxle1xcclxcbiAgICBjb2xvcjogIzU4MGE1ODtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDN2aDtcXHJcXG59XFxyXFxuLmZvcm17XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7ICAgXFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzU4MGE1ODtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fc3VibWl0e1xcclxcbiAgICBmb250LWZhbWlseTogSURFOyAgIFxcclxcbiAgICBib3JkZXItY29sb3I6ICM1ODBhNTg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgd2lkdGg6IDM2dnc7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxyXFxuICAgIGNvbG9yOiAjNTgwYTU4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBmb250LWZhbWlseTogSURFO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjogIzU4MGE1ODtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxuICAgIHNyYzogdXJsKCcvZm9udHMvdW5pMDVfNTMudHRmJyk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLFNBQVM7QUFDVCxlQUFlO0FBQ2YsYUFBYTtBQUNiLHdCQUF3QjtBQUN4Qjs7QUFFQTs7QUFFQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixtQkFBbUI7O0FBRXZCOztBQUVBOztBQUVBOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcbm1hcmdpbjogMDtcXHJcXG5wYWRkaW5nOiAwO1xcclxcbmJvcmRlcjogMDtcXHJcXG5mb250LXNpemU6IDEwMCU7XFxyXFxuZm9udDogaW5oZXJpdDtcXHJcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5kaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxubGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxubGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxucXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuY29udGVudDogJyc7XFxyXFxuY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcbi5jb250YWluZXIxe1xcclxcbiAgICBmb250LWZhbWlseTogSURFO1xcclxcbn1cXHJcXG4udGl0dWxvLWltYWdlbXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMCwgMTI4KTtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG4ubmVrbzF7XFxyXFxuICAgIG1heC13aWR0aDogNTB2dztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4udGl0dWxve1xcclxcbiAgICBmb250LXNpemU6IDIwMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtc2hhZG93OiA5cHggOXB4IDRweCBibGFjaztcXHJcXG59XFxyXFxuI2lkZS12ZXJtZWxob3tcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuLmhlYWRlcntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHotaW5kZXg6IDk5OTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyMDJjO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0X2J1dHRvbntcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmZvcm1fdGFibGV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7ICAgXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5mb3JtX3RpdGxle1xcclxcbiAgICBjb2xvcjogIzU4MGE1ODtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDN2aDtcXHJcXG59XFxyXFxuLmZvcm17XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7ICAgXFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzU4MGE1ODtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB3aWR0aDogNjB2dztcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1fc3VibWl0e1xcclxcbiAgICBmb250LWZhbWlseTogSURFOyAgIFxcclxcbiAgICBib3JkZXItY29sb3I6ICM1ODBhNTg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgd2lkdGg6IDM2dnc7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxdmg7XFxyXFxuICAgIGNvbG9yOiAjNTgwYTU4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZm9vdGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xcclxcbiAgICBjb2xvcjogYWxpY2VibHVlO1xcclxcbiAgICBmb250LWZhbWlseTogSURFO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG46OnBsYWNlaG9sZGVye1xcclxcbiAgICBjb2xvcjogIzU4MGE1ODtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBJREU7XFxyXFxuICAgIHNyYzogdXJsKCcvZm9udHMvdW5pMDVfNTMudHRmJyk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});