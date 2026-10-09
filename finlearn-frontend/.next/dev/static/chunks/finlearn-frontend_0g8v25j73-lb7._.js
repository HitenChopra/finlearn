(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/finlearn-frontend/app/learn/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LearnExplorePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finlearn-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finlearn-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finlearn-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$data$2f$tracks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finlearn-frontend/data/tracks.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finlearn-frontend/data/lessons.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LearnExplorePage() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const normalizedQuery = query.trim().toLowerCase();
    const searchResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LearnExplorePage.useMemo[searchResults]": ()=>{
            if (!normalizedQuery) return [];
            return __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter({
                "LearnExplorePage.useMemo[searchResults]": (lesson)=>{
                    const searchText = [
                        lesson.title,
                        lesson.summary,
                        lesson.track,
                        ...lesson.keyPoints || []
                    ].join(" ").toLowerCase();
                    return searchText.includes(normalizedQuery);
                }
            }["LearnExplorePage.useMemo[searchResults]"]);
        }
    }["LearnExplorePage.useMemo[searchResults]"], [
        normalizedQuery
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "page-shell explore-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explore-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "FINLEARN"
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Pick a track or search for a lesson directly."
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "lesson-search",
                        "aria-label": "Search lessons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "search-icon",
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "search",
                                placeholder: "Search lessons...",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            normalizedQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-results-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "results-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Search results"
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    searchResults.length,
                                    " found"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-result-grid",
                        children: searchResults.map((lesson)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/learn/${lesson.id}`,
                                className: "search-result-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "result-icon",
                                        children: getTrackIcon(lesson.trackId)
                                    }, void 0, false, {
                                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "result-track",
                                                children: lesson.track
                                            }, void 0, false, {
                                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: lesson.title
                                            }, void 0, false, {
                                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: lesson.summary
                                            }, void 0, false, {
                                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "result-arrow",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                        lineNumber: 77,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, lesson.id, true, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 62,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "empty-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🔎"
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "No lesson found"
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Try inflation, UPI, credit, insurance or FOMO."
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                lineNumber: 53,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "track-grid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$data$2f$tracks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map((track)=>{
                    const count = __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].filter((lesson)=>lesson.trackId === track.id).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/learn/track/${track.id}`,
                        className: "track-tile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "track-tile-icon",
                                children: track.icon
                            }, void 0, false, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 102,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "track-tile-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: track.title
                                    }, void 0, false, {
                                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: track.description
                                    }, void 0, false, {
                                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            count,
                                            " lessons"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this)
                        ]
                    }, track.id, true, {
                        fileName: "[project]/finlearn-frontend/app/learn/page.js",
                        lineNumber: 97,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/finlearn-frontend/app/learn/page.js",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/finlearn-frontend/app/learn/page.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(LearnExplorePage, "LSHwKi9fPAW9SiulJX1qJrKIHj4=");
_c = LearnExplorePage;
function getTrackIcon(trackId) {
    const track = __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$data$2f$tracks$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((item)=>item.id === trackId);
    return track?.icon || "📘";
}
var _c;
__turbopack_context__.k.register(_c, "LearnExplorePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/finlearn-frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/finlearn-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/finlearn-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/finlearn-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$finlearn$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/finlearn-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/finlearn-frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]})(),
"[project]/finlearn-frontend/data/lessons.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":\"income-vs-expenses\",\"trackId\":\"money-basics\",\"track\":\"Money Basics\",\"title\":\"Income vs Expenses\",\"summary\":\"Learn the difference between money coming in and money going out.\",\"duration\":\"4 min\",\"xp\":30,\"concept\":\"Income is money received, while expenses are money spent. Comparing the two helps you understand whether you are living within your means.\",\"example\":\"If you receive ₹20,000 in a month and spend ₹15,500, ₹4,500 remains before any new spending.\",\"keyPoints\":[\"Track income and expenses over the same period.\",\"A positive gap means income is higher than expenses.\",\"Tracking is the first step toward budgeting.\"],\"sourceLabel\":\"NCFE / general financial-literacy concepts\",\"quiz\":{\"question\":\"If income is ₹25,000 and expenses are ₹19,000, how much remains?\",\"options\":[\"₹4,000\",\"₹5,000\",\"₹6,000\",\"₹7,000\"],\"answerIndex\":2,\"explanation\":\"₹25,000 − ₹19,000 = ₹6,000.\"}},{\"id\":\"budgeting\",\"trackId\":\"money-basics\",\"track\":\"Money Basics\",\"title\":\"Budgeting\",\"summary\":\"Turn your income into a plan before you spend it.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"A budget is a plan for allocating available money across needs, wants, saving and goals.\",\"example\":\"A student with ₹10,000 for the month can first estimate essentials, then decide how much can go toward flexible spending and saving.\",\"keyPoints\":[\"A budget is a plan, not a punishment.\",\"Separate essential and discretionary spending.\",\"Review actual spending and adjust future budgets.\"],\"sourceLabel\":\"NCFE / personal budgeting concepts\",\"quiz\":{\"question\":\"What is the main purpose of a budget?\",\"options\":[\"To eliminate all fun spending\",\"To plan how money will be allocated\",\"To guarantee returns\",\"To increase salary\"],\"answerIndex\":1,\"explanation\":\"A budget helps decide where available money should go.\"}},{\"id\":\"saving-emergency-fund\",\"trackId\":\"money-basics\",\"track\":\"Money Basics\",\"title\":\"Saving & Emergency Funds\",\"summary\":\"Build a financial cushion for future goals and unexpected costs.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Saving means setting aside part of your available money for future use. An emergency fund is money reserved for unexpected essential expenses or income disruptions.\",\"example\":\"Saving ₹1,500 each month can gradually create a buffer for urgent travel, repairs or other necessary costs.\",\"keyPoints\":[\"Saving works best when done regularly.\",\"Emergency funds should be accessible when genuinely needed.\",\"The right buffer depends on personal circumstances.\"],\"sourceLabel\":\"NCFE / basic saving principles\",\"quiz\":{\"question\":\"Which best describes an emergency fund?\",\"options\":[\"Money for unexpected essential costs\",\"Money only for entertainment\",\"A guaranteed-return investment\",\"A loan\"],\"answerIndex\":0,\"explanation\":\"An emergency fund is money saved in advance for unexpected essential expenses.\"}},{\"id\":\"financial-goals\",\"trackId\":\"money-basics\",\"track\":\"Money Basics\",\"title\":\"Financial Goals\",\"summary\":\"Convert vague wishes into measurable money targets.\",\"duration\":\"4 min\",\"xp\":35,\"concept\":\"A financial goal defines what you want to achieve, how much money it may require and the time available to reach it.\",\"example\":\"Instead of saying 'I want a laptop', a clearer goal is 'Save ₹60,000 in 10 months'.\",\"keyPoints\":[\"Goals should be specific.\",\"Time horizon matters.\",\"A target amount makes progress measurable.\"],\"sourceLabel\":\"NCFE / financial planning basics\",\"quiz\":{\"question\":\"Which is the clearest financial goal?\",\"options\":[\"Save more someday\",\"Buy something expensive\",\"Save ₹24,000 in 12 months\",\"Spend less somehow\"],\"answerIndex\":2,\"explanation\":\"A clear goal includes a target amount and time frame.\"}},{\"id\":\"inflation\",\"trackId\":\"money-basics\",\"track\":\"Money Basics\",\"title\":\"Inflation & Purchasing Power\",\"summary\":\"Understand why the same amount of money can buy less over time.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Inflation is a sustained increase in the general price level of goods and services. When prices rise faster than your money grows, purchasing power falls.\",\"example\":\"If a basket costs ₹1,000 today and ₹1,060 later, you need ₹60 more to buy the same basket.\",\"keyPoints\":[\"Inflation concerns general prices, not one item.\",\"Purchasing power is what money can buy.\",\"Price indices are commonly used to track inflation.\"],\"sourceLabel\":\"RBI / inflation and financial-awareness concepts\",\"quiz\":{\"question\":\"If general prices rise while income stays unchanged, purchasing power usually:\",\"options\":[\"Increases\",\"Decreases\",\"Doubles\",\"Stays guaranteed\"],\"answerIndex\":1,\"explanation\":\"Higher general prices mean the same income usually buys fewer goods and services.\"}},{\"id\":\"bank-account-basics\",\"trackId\":\"banking-digital-money\",\"track\":\"Banking & Digital Money\",\"title\":\"Bank Account Basics\",\"summary\":\"Understand how common bank accounts fit into everyday money management.\",\"duration\":\"4 min\",\"xp\":30,\"concept\":\"Bank accounts provide a structured way to hold, receive, transfer and manage money. Different account types can have different rules, charges and features.\",\"example\":\"A savings account can be used to receive money, make digital payments and keep funds safer than carrying all money as cash.\",\"keyPoints\":[\"Account features vary by bank and account type.\",\"Review fees and balance requirements.\",\"Keep credentials private.\"],\"sourceLabel\":\"RBI / banking-awareness concepts\",\"quiz\":{\"question\":\"Which is a good banking habit?\",\"options\":[\"Sharing OTPs\",\"Protecting PINs and passwords\",\"Ignoring all fees\",\"Giving strangers access\"],\"answerIndex\":1,\"explanation\":\"Bank credentials should be kept private.\"}},{\"id\":\"upi-basics\",\"trackId\":\"banking-digital-money\",\"track\":\"Banking & Digital Money\",\"title\":\"UPI Basics\",\"summary\":\"Learn how instant bank-to-bank digital payments work.\",\"duration\":\"4 min\",\"xp\":35,\"concept\":\"UPI enables eligible bank accounts to send and receive money digitally through compatible applications and identifiers.\",\"example\":\"Before paying a merchant, verify the name and amount shown in the UPI app before authorising the transaction.\",\"keyPoints\":[\"Verify recipient details.\",\"Check the amount before authorising.\",\"Never share UPI PINs.\"],\"sourceLabel\":\"RBI / digital-payment awareness\",\"quiz\":{\"question\":\"What should you verify before approving a UPI payment?\",\"options\":[\"Recipient and amount\",\"Phone wallpaper\",\"App colour\",\"Nothing\"],\"answerIndex\":0,\"explanation\":\"Checking recipient details and amount helps prevent avoidable mistakes.\"}},{\"id\":\"cards-basics\",\"trackId\":\"banking-digital-money\",\"track\":\"Banking & Digital Money\",\"title\":\"Debit vs Credit Cards\",\"summary\":\"Know the difference between spending your own money and borrowing.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"A debit card usually draws money from your bank account, while a credit card generally allows purchases using a credit limit that must later be repaid.\",\"example\":\"A ₹2,000 debit-card purchase reduces available bank balance, while the same credit-card purchase adds ₹2,000 to the amount owed to the issuer.\",\"keyPoints\":[\"Debit usually uses deposited funds.\",\"Credit creates an amount to repay.\",\"Fees and interest rules matter.\"],\"sourceLabel\":\"RBI / basic banking concepts\",\"quiz\":{\"question\":\"Which card generally creates a repayment obligation?\",\"options\":[\"Debit card\",\"Credit card\",\"ATM slip\",\"Cheque book\"],\"answerIndex\":1,\"explanation\":\"A credit-card purchase is generally paid back later according to the issuer's terms.\"}},{\"id\":\"digital-payment-safety\",\"trackId\":\"banking-digital-money\",\"track\":\"Banking & Digital Money\",\"title\":\"Digital Payment Safety\",\"summary\":\"Recognize common habits that reduce payment fraud risk.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Digital-payment safety depends on verifying transactions, protecting credentials and being cautious with unexpected links, calls and requests.\",\"example\":\"A caller claiming to be 'support' asks for your OTP to reverse a payment. The safe action is to refuse and use official support channels.\",\"keyPoints\":[\"Do not share OTPs or PINs.\",\"Treat urgent payment requests cautiously.\",\"Use official channels to resolve issues.\"],\"sourceLabel\":\"RBI / digital-payment safety guidance\",\"quiz\":{\"question\":\"Someone asks for your OTP to 'refund' money. What should you do?\",\"options\":[\"Share it quickly\",\"Refuse to share it\",\"Post it publicly\",\"Forward it to friends\"],\"answerIndex\":1,\"explanation\":\"OTPs and PINs should never be shared with untrusted parties.\"}},{\"id\":\"banking-channels\",\"trackId\":\"banking-digital-money\",\"track\":\"Banking & Digital Money\",\"title\":\"NEFT, RTGS & IMPS Overview\",\"summary\":\"See that different electronic transfer systems exist for different use cases.\",\"duration\":\"5 min\",\"xp\":35,\"concept\":\"India uses multiple electronic bank-transfer systems. Their operating rules, limits, settlement characteristics and availability can differ.\",\"example\":\"A user choosing between transfer methods should check the bank's current rules rather than assuming all systems behave identically.\",\"keyPoints\":[\"Transfer systems have different characteristics.\",\"Bank rules and limits can change.\",\"Use official bank information for current details.\"],\"sourceLabel\":\"RBI / payment-system concepts\",\"quiz\":{\"question\":\"Why should you check your bank's current transfer rules?\",\"options\":[\"Because all systems are identical\",\"Because limits and conditions can differ\",\"Because transfers are always free\",\"Because only cash works\"],\"answerIndex\":1,\"explanation\":\"Different transfer systems and banks can have different current rules and conditions.\"}},{\"id\":\"credit-score\",\"trackId\":\"credit-debt\",\"track\":\"Credit & Debt\",\"title\":\"Credit Scores\",\"summary\":\"Understand what a credit score represents at a high level.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"A credit score is a numerical summary used by lenders as one input when evaluating a borrower's credit history and repayment behaviour.\",\"example\":\"Consistently paying obligations on time may support a healthier credit history, while repeated missed payments can harm it.\",\"keyPoints\":[\"Credit history matters.\",\"Repayment behaviour is important.\",\"A score is only one part of lending decisions.\"],\"sourceLabel\":\"General credit-literacy concepts\",\"quiz\":{\"question\":\"Which behaviour can negatively affect credit history?\",\"options\":[\"Regular on-time repayment\",\"Repeated missed payments\",\"Checking statements\",\"Making a budget\"],\"answerIndex\":1,\"explanation\":\"Repeated missed payments can harm credit history.\"}},{\"id\":\"simple-vs-compound-interest\",\"trackId\":\"credit-debt\",\"track\":\"Credit & Debt\",\"title\":\"Simple vs Compound Interest\",\"summary\":\"Understand the core difference between two common interest calculations.\",\"duration\":\"6 min\",\"xp\":45,\"concept\":\"Simple interest is calculated on the original principal, while compound interest can be calculated on principal plus previously accumulated interest.\",\"example\":\"With compounding, growth can accelerate because earlier interest may itself begin earning interest.\",\"keyPoints\":[\"Simple interest uses original principal.\",\"Compound interest can include accumulated interest.\",\"Compounding frequency affects outcomes.\"],\"sourceLabel\":\"NCFE / basic interest concepts\",\"quiz\":{\"question\":\"What makes compound interest different?\",\"options\":[\"It ignores previous interest\",\"It can earn interest on accumulated interest\",\"It never changes\",\"It applies only to cash\"],\"answerIndex\":1,\"explanation\":\"Compound interest can apply interest to both principal and earlier accumulated interest.\"}},{\"id\":\"emi-basics\",\"trackId\":\"credit-debt\",\"track\":\"Credit & Debt\",\"title\":\"EMI Basics\",\"summary\":\"Learn what an EMI represents in a loan repayment schedule.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"An EMI is a periodic loan repayment amount. It can include both principal repayment and interest, depending on the loan structure.\",\"example\":\"A borrower may pay the same scheduled EMI each month while the internal split between principal and interest changes over time.\",\"keyPoints\":[\"EMI is a scheduled repayment amount.\",\"Interest increases total borrowing cost.\",\"Loan tenure can affect total interest paid.\"],\"sourceLabel\":\"General lending concepts\",\"quiz\":{\"question\":\"What does an EMI generally represent?\",\"options\":[\"A one-time bank gift\",\"A periodic loan repayment\",\"A tax refund\",\"An investment dividend\"],\"answerIndex\":1,\"explanation\":\"EMI refers to a periodic repayment on a loan.\"}},{\"id\":\"credit-cards-debt\",\"trackId\":\"credit-debt\",\"track\":\"Credit & Debt\",\"title\":\"Credit Card Debt\",\"summary\":\"See why minimum payments can become expensive when balances persist.\",\"duration\":\"5 min\",\"xp\":45,\"concept\":\"Credit cards can be useful payment tools, but carrying unpaid balances may lead to high interest and fees depending on the issuer's terms.\",\"example\":\"Paying only a small portion of a large balance can keep debt outstanding longer and increase total interest cost.\",\"keyPoints\":[\"Read issuer terms carefully.\",\"Carrying balances can be costly.\",\"Minimum payment is not the same as full repayment.\"],\"sourceLabel\":\"General credit-card literacy\",\"quiz\":{\"question\":\"What is the safest interpretation of a minimum payment?\",\"options\":[\"It means the full balance is cleared\",\"It is only the minimum required payment\",\"It removes all interest\",\"It increases your salary\"],\"answerIndex\":1,\"explanation\":\"A minimum payment does not necessarily clear the full outstanding balance.\"}},{\"id\":\"debt-traps\",\"trackId\":\"credit-debt\",\"track\":\"Credit & Debt\",\"title\":\"Debt Traps\",\"summary\":\"Recognize borrowing patterns that can become difficult to escape.\",\"duration\":\"6 min\",\"xp\":45,\"concept\":\"A debt trap can occur when a borrower repeatedly takes new debt to meet old obligations, causing repayment pressure to grow.\",\"example\":\"Using one high-cost loan to repay another without reducing spending or improving cash flow can worsen the problem.\",\"keyPoints\":[\"Borrowing to repay borrowing is risky.\",\"High-cost debt can compound financial stress.\",\"Early action is better than ignoring the problem.\"],\"sourceLabel\":\"General debt-management concepts\",\"quiz\":{\"question\":\"Which pattern is a warning sign of a debt trap?\",\"options\":[\"Saving regularly\",\"Borrowing repeatedly to repay old debt\",\"Tracking expenses\",\"Building an emergency fund\"],\"answerIndex\":1,\"explanation\":\"Repeatedly taking new debt to service old debt is a classic warning sign.\"}},{\"id\":\"risk-vs-return\",\"trackId\":\"investing-fundamentals\",\"track\":\"Investing Fundamentals\",\"title\":\"Risk vs Return\",\"summary\":\"Learn why higher potential returns usually come with uncertainty.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Investment return is what you gain or lose from an investment, while risk describes uncertainty around outcomes. Higher expected return often comes with greater risk, but higher risk never guarantees higher return.\",\"example\":\"A bank deposit and an equity investment can have very different levels of uncertainty and potential return.\",\"keyPoints\":[\"Return can be positive or negative.\",\"Risk means uncertainty.\",\"Higher risk does not guarantee profit.\"],\"sourceLabel\":\"SEBI / investor-education concepts\",\"quiz\":{\"question\":\"Which statement is correct?\",\"options\":[\"High risk guarantees high return\",\"Risk means uncertainty\",\"All investments are equally risky\",\"Returns can never be negative\"],\"answerIndex\":1,\"explanation\":\"Risk refers to uncertainty in outcomes, not guaranteed profit.\"}},{\"id\":\"stocks-basics\",\"trackId\":\"investing-fundamentals\",\"track\":\"Investing Fundamentals\",\"title\":\"Stocks\",\"summary\":\"Understand what owning a share of a company means.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"A stock or share generally represents an ownership interest in a company. Its market price can rise or fall based on many factors.\",\"example\":\"Owning shares in a listed company makes you a shareholder, but it does not guarantee dividends or price gains.\",\"keyPoints\":[\"Shares represent ownership interest.\",\"Prices can fluctuate.\",\"Returns are not guaranteed.\"],\"sourceLabel\":\"SEBI / equity-market basics\",\"quiz\":{\"question\":\"Buying a company's share generally makes you:\",\"options\":[\"A lender to the government\",\"A shareholder\",\"An employee automatically\",\"A bank manager\"],\"answerIndex\":1,\"explanation\":\"A share generally represents an ownership interest in the company.\"}},{\"id\":\"bonds-basics\",\"trackId\":\"investing-fundamentals\",\"track\":\"Investing Fundamentals\",\"title\":\"Bonds\",\"summary\":\"Learn how debt securities differ from ownership securities.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"A bond is generally a debt instrument in which an investor lends money to an issuer under specified terms. Bonds can still carry risks, including credit and interest-rate risk.\",\"example\":\"When an entity issues a bond, investors are generally lending money rather than buying ownership in the issuer.\",\"keyPoints\":[\"Bonds are debt instruments.\",\"Bond investors are generally creditors.\",\"Bonds are not risk-free by default.\"],\"sourceLabel\":\"SEBI / debt-market basics\",\"quiz\":{\"question\":\"A bond investor is generally:\",\"options\":[\"Buying company ownership\",\"Lending money to an issuer\",\"Buying a house\",\"Receiving free insurance\"],\"answerIndex\":1,\"explanation\":\"Bonds generally represent lending rather than ownership.\"}},{\"id\":\"mutual-funds-sip\",\"trackId\":\"investing-fundamentals\",\"track\":\"Investing Fundamentals\",\"title\":\"Mutual Funds & SIPs\",\"summary\":\"Understand pooled investing and systematic contributions.\",\"duration\":\"6 min\",\"xp\":45,\"concept\":\"A mutual fund pools money from multiple investors into a portfolio managed according to a stated investment objective. A SIP is a method of investing a fixed amount periodically into a mutual fund.\",\"example\":\"An investor may choose to invest ₹1,000 every month through a SIP rather than investing a large amount at once.\",\"keyPoints\":[\"Mutual funds pool investor money.\",\"SIP is a contribution method, not an asset class.\",\"Fund objectives and risks differ.\"],\"sourceLabel\":\"SEBI / mutual-fund investor education\",\"quiz\":{\"question\":\"What is a SIP?\",\"options\":[\"A type of bank loan\",\"A periodic method of investing\",\"A guaranteed profit scheme\",\"A tax bill\"],\"answerIndex\":1,\"explanation\":\"A SIP is a method of investing a fixed amount periodically, commonly into mutual funds.\"}},{\"id\":\"diversification\",\"trackId\":\"investing-fundamentals\",\"track\":\"Investing Fundamentals\",\"title\":\"Diversification\",\"summary\":\"Learn why spreading exposure can reduce concentration risk.\",\"duration\":\"5 min\",\"xp\":45,\"concept\":\"Diversification means spreading investments across different assets, sectors or categories so that one weak holding has less impact on the entire portfolio.\",\"example\":\"Owning only one stock creates more concentration risk than holding a broader mix of unrelated investments.\",\"keyPoints\":[\"Diversification reduces concentration risk.\",\"It does not eliminate all risk.\",\"Too much exposure to one asset increases dependence on it.\"],\"sourceLabel\":\"SEBI / portfolio-risk concepts\",\"quiz\":{\"question\":\"What is the main purpose of diversification?\",\"options\":[\"Guarantee profits\",\"Reduce concentration risk\",\"Avoid all market movement\",\"Double returns\"],\"answerIndex\":1,\"explanation\":\"Diversification is mainly used to reduce dependence on a small number of holdings.\"}},{\"id\":\"income-tax-basics\",\"trackId\":\"taxes-insurance\",\"track\":\"Taxes & Insurance\",\"title\":\"Income Tax Basics\",\"summary\":\"Understand the basic idea of taxable income and tax obligations.\",\"duration\":\"6 min\",\"xp\":40,\"concept\":\"Income tax is a tax imposed on taxable income according to applicable law. Rules, slabs, deductions and filing requirements can change, so current official guidance should be checked.\",\"example\":\"A learner should not rely on an old social-media post for current tax rules; official government tax sources should be used.\",\"keyPoints\":[\"Tax rules can change.\",\"Taxable income is not always the same as gross income.\",\"Use current official sources.\"],\"sourceLabel\":\"Income Tax Department / general tax-literacy concepts\",\"quiz\":{\"question\":\"Why should tax information be checked against current official rules?\",\"options\":[\"Because tax rules never change\",\"Because slabs and deductions can change\",\"Because taxes are optional\",\"Because only banks know tax law\"],\"answerIndex\":1,\"explanation\":\"Tax rules and thresholds can change over time.\"}},{\"id\":\"tax-saving-concepts\",\"trackId\":\"taxes-insurance\",\"track\":\"Taxes & Insurance\",\"title\":\"Tax-Saving Concepts\",\"summary\":\"Learn the difference between reducing tax legally and chasing products blindly.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Some financial products or deductions may receive tax treatment under current law, but tax benefits should not be the only reason to choose a financial product.\",\"example\":\"A product with a tax benefit may still be unsuitable if its risk, lock-in or costs do not match your goals.\",\"keyPoints\":[\"Tax benefit is only one factor.\",\"Product suitability still matters.\",\"Always verify current rules.\"],\"sourceLabel\":\"General tax-planning principles\",\"quiz\":{\"question\":\"Should tax benefit be the only reason to choose an investment product?\",\"options\":[\"Yes\",\"No\",\"Always if advertised\",\"Only when friends say so\"],\"answerIndex\":1,\"explanation\":\"Tax treatment is only one factor in a financial decision.\"}},{\"id\":\"insurance-basics\",\"trackId\":\"taxes-insurance\",\"track\":\"Taxes & Insurance\",\"title\":\"Insurance Basics\",\"summary\":\"Understand how insurance transfers certain financial risks.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Insurance is a risk-management arrangement in which a policyholder pays a premium for specified protection subject to policy terms, exclusions and limits.\",\"example\":\"Health insurance may help cover eligible medical costs according to the policy, while exclusions and waiting periods can still apply.\",\"keyPoints\":[\"Insurance manages specified risks.\",\"Policy terms matter.\",\"Coverage is not unlimited.\"],\"sourceLabel\":\"IRDAI / insurance-literacy concepts\",\"quiz\":{\"question\":\"What should you review before buying insurance?\",\"options\":[\"Only the ad slogan\",\"Policy terms, exclusions and coverage\",\"Friends' opinions only\",\"Nothing\"],\"answerIndex\":1,\"explanation\":\"Coverage depends on the actual policy terms, exclusions and limits.\"}},{\"id\":\"term-vs-health-insurance\",\"trackId\":\"taxes-insurance\",\"track\":\"Taxes & Insurance\",\"title\":\"Term vs Health Insurance\",\"summary\":\"Understand that different insurance products protect against different risks.\",\"duration\":\"5 min\",\"xp\":45,\"concept\":\"Term life insurance and health insurance address different financial risks. Term insurance is generally related to life cover, while health insurance is generally related to eligible medical expenses under policy terms.\",\"example\":\"A person may need different types of protection because medical-cost risk and loss-of-income-to-dependents risk are not the same.\",\"keyPoints\":[\"Different policies solve different problems.\",\"Coverage details vary.\",\"Compare terms, not only premiums.\"],\"sourceLabel\":\"IRDAI / insurance-literacy concepts\",\"quiz\":{\"question\":\"Why might someone need both health and term insurance?\",\"options\":[\"They cover identical risks\",\"They address different financial risks\",\"They guarantee investment returns\",\"They replace savings\"],\"answerIndex\":1,\"explanation\":\"Health and term insurance are designed around different types of protection.\"}},{\"id\":\"retirement-basics\",\"trackId\":\"taxes-insurance\",\"track\":\"Taxes & Insurance\",\"title\":\"Retirement Planning Basics\",\"summary\":\"See why long time horizons make early planning powerful.\",\"duration\":\"6 min\",\"xp\":45,\"concept\":\"Retirement planning means building financial resources for a period when regular employment income may reduce or stop. Time horizon, inflation and expected expenses all matter.\",\"example\":\"Starting earlier gives savings and investments more time to grow and can reduce the amount that must be contributed later.\",\"keyPoints\":[\"Time horizon matters.\",\"Inflation affects future expenses.\",\"Starting early can improve flexibility.\"],\"sourceLabel\":\"NPS / retirement-planning concepts\",\"quiz\":{\"question\":\"Why can starting retirement planning early help?\",\"options\":[\"It guarantees profits\",\"It gives money more time to grow\",\"It removes inflation\",\"It avoids all risk\"],\"answerIndex\":1,\"explanation\":\"More time can allow contributions and potential compounding to work for longer.\"}},{\"id\":\"loss-aversion\",\"trackId\":\"behavioural-finance\",\"track\":\"Behavioural Finance\",\"title\":\"Loss Aversion\",\"summary\":\"Learn why losses can feel more powerful than equal-sized gains.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Loss aversion describes the tendency for people to feel the pain of losses more strongly than the pleasure of comparable gains, which can distort financial decisions.\",\"example\":\"An investor may hold a poor investment too long simply because selling would make the loss feel 'real'.\",\"keyPoints\":[\"Emotions influence financial choices.\",\"Avoiding a realised loss can become irrational.\",\"Decision rules can reduce emotional reactions.\"],\"sourceLabel\":\"Behavioural-finance concepts\",\"quiz\":{\"question\":\"Loss aversion can cause an investor to:\",\"options\":[\"Ignore all emotions\",\"Hold a poor investment only to avoid realising a loss\",\"Always diversify perfectly\",\"Guarantee profit\"],\"answerIndex\":1,\"explanation\":\"Loss aversion can make people avoid accepting a loss even when circumstances have changed.\"}},{\"id\":\"herd-behaviour\",\"trackId\":\"behavioural-finance\",\"track\":\"Behavioural Finance\",\"title\":\"Herd Behaviour\",\"summary\":\"Understand why people copy the crowd even without strong evidence.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Herd behaviour occurs when people follow what others are doing instead of independently evaluating information.\",\"example\":\"A stock trending on social media may attract buyers simply because everyone appears to be buying it.\",\"keyPoints\":[\"Popularity is not evidence of value.\",\"Crowds can be wrong.\",\"Independent reasoning matters.\"],\"sourceLabel\":\"Behavioural-finance concepts\",\"quiz\":{\"question\":\"What is herd behaviour?\",\"options\":[\"Independent analysis\",\"Following the crowd without enough evaluation\",\"Reading disclosures\",\"Diversifying\"],\"answerIndex\":1,\"explanation\":\"Herd behaviour means copying others rather than relying on independent evaluation.\"}},{\"id\":\"fomo\",\"trackId\":\"behavioural-finance\",\"track\":\"Behavioural Finance\",\"title\":\"FOMO\",\"summary\":\"See how fear of missing out can push people into rushed financial decisions.\",\"duration\":\"4 min\",\"xp\":35,\"concept\":\"FOMO is the fear that others are benefiting from an opportunity that you are missing, which can encourage impulsive decisions.\",\"example\":\"Seeing people post large crypto gains may tempt someone to invest immediately without understanding the asset or risk.\",\"keyPoints\":[\"Urgency can weaken judgement.\",\"Social proof can amplify FOMO.\",\"A decision process helps slow impulsive choices.\"],\"sourceLabel\":\"Behavioural-finance concepts\",\"quiz\":{\"question\":\"What is a useful response to FOMO?\",\"options\":[\"Act immediately\",\"Pause and evaluate the decision\",\"Borrow heavily\",\"Ignore risk\"],\"answerIndex\":1,\"explanation\":\"Pausing and evaluating evidence helps reduce impulsive decisions.\"}},{\"id\":\"overconfidence\",\"trackId\":\"behavioural-finance\",\"track\":\"Behavioural Finance\",\"title\":\"Overconfidence\",\"summary\":\"Learn how believing too strongly in your own judgement can increase risk.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Overconfidence is the tendency to overestimate one's knowledge, skill or ability to predict outcomes.\",\"example\":\"After a few successful trades, a beginner may assume they can consistently beat the market and take much larger risks.\",\"keyPoints\":[\"Past success does not prove permanent skill.\",\"Confidence and accuracy are different.\",\"Check decisions against evidence.\"],\"sourceLabel\":\"Behavioural-finance concepts\",\"quiz\":{\"question\":\"Which is an example of overconfidence?\",\"options\":[\"Reviewing mistakes\",\"Assuming a few wins prove permanent skill\",\"Diversifying\",\"Reading risk disclosures\"],\"answerIndex\":1,\"explanation\":\"Overconfidence can make people mistake short-term success for reliable skill.\"}},{\"id\":\"anchoring\",\"trackId\":\"behavioural-finance\",\"track\":\"Behavioural Finance\",\"title\":\"Anchoring\",\"summary\":\"Understand why the first number you see can distort later judgement.\",\"duration\":\"5 min\",\"xp\":40,\"concept\":\"Anchoring happens when people rely too heavily on an initial number or reference point, even when it is no longer relevant.\",\"example\":\"An investor may insist that a stock 'should return' to ₹500 simply because that was the price when they bought it.\",\"keyPoints\":[\"Initial numbers can distort judgement.\",\"Purchase price does not determine future value.\",\"Use current evidence instead of emotional reference points.\"],\"sourceLabel\":\"Behavioural-finance concepts\",\"quiz\":{\"question\":\"Which is an example of anchoring?\",\"options\":[\"Re-evaluating with new information\",\"Fixating on the original purchase price\",\"Diversifying\",\"Checking a balance sheet\"],\"answerIndex\":1,\"explanation\":\"Anchoring occurs when an old reference point dominates current judgement.\"}}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/finlearn-frontend/data/tracks.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "money-basics",
        "number": 1,
        "title": "Money Basics",
        "icon": "💸",
        "description": "Understand income, expenses, budgeting, saving and inflation.",
        "accent": "Foundation"
    },
    {
        "id": "banking-digital-money",
        "number": 2,
        "title": "Banking & Digital Money",
        "icon": "🏦",
        "description": "Learn how bank accounts, cards, UPI and digital payments work safely.",
        "accent": "Everyday finance"
    },
    {
        "id": "credit-debt",
        "number": 3,
        "title": "Credit & Debt",
        "icon": "💳",
        "description": "Understand credit scores, loans, EMIs, interest and debt traps.",
        "accent": "Borrowing"
    },
    {
        "id": "investing-fundamentals",
        "number": 4,
        "title": "Investing Fundamentals",
        "icon": "📈",
        "description": "Build a base in risk, return, stocks, bonds, mutual funds and diversification.",
        "accent": "Investing"
    },
    {
        "id": "taxes-insurance",
        "number": 5,
        "title": "Taxes & Insurance",
        "icon": "🧾",
        "description": "Learn tax basics, insurance concepts and long-term financial protection.",
        "accent": "Protection"
    },
    {
        "id": "behavioural-finance",
        "number": 6,
        "title": "Behavioural Finance",
        "icon": "🧠",
        "description": "See how biases, emotions and social pressure affect money decisions.",
        "accent": "Decision-making"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=finlearn-frontend_0g8v25j73-lb7._.js.map