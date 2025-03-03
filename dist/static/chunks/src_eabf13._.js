(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_eabf13._.js", {

"[project]/src/config/axios.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "axiosInstance": (()=>axiosInstance),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? "https://falcon-api.lyticaltechserver.com/api";
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
// Request interceptor for API calls
axiosInstance.interceptors.request.use(async (config)=>{
    const token = localStorage.getItem("auth-token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Response interceptor for API calls
axiosInstance.interceptors.response.use((response)=>response, async (error)=>{
    const originalRequest = error.config;
    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshToken = localStorage.getItem("refresh-token");
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${baseURL}/Auth/refresh-token`, {
                refreshToken
            });
            const { token } = response.data;
            localStorage.setItem("auth-token", token);
            // Retry the original request with the new token
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
        } catch  {
            // If refresh token fails, redirect to login
            localStorage.removeItem("auth-token");
            localStorage.removeItem("refresh-token");
            window.location.href = "/login";
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/authServices.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkToken": (()=>checkToken),
    "enableTwoFactor": (()=>enableTwoFactor),
    "forgotPassword": (()=>forgotPassword),
    "login": (()=>login),
    "logout": (()=>logout),
    "register": (()=>register),
    "resetPassword": (()=>resetPassword),
    "verifyEmail": (()=>verifyEmail),
    "verifyTwoFactor": (()=>verifyTwoFactor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/axios.config.ts [app-client] (ecmascript)");
;
async function register(data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/Auth/register", data);
    return response.data;
}
async function login(data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/Auth/login", data);
    if (response.data.isSuccess && response.data.data) {
        localStorage.setItem("auth-token", response.data.data.token);
        localStorage.setItem("refresh-token", response.data.data.refreshToken);
    }
    return response.data;
}
async function logout() {
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("/Auth/logout");
    localStorage.removeItem("auth-token");
    localStorage.removeItem("refresh-token");
}
async function forgotPassword(email) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/Auth/forgot-password", {
        email
    });
    return response.data;
}
async function resetPassword(data) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/Auth/reset-password", data);
    return response.data;
}
async function verifyEmail(token, email) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/Auth/email-verify", {
        verificationCode: token,
        email
    });
    return response.data;
}
async function enableTwoFactor() {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put("/Auth/enable-twofactor");
    return response.data;
}
async function verifyTwoFactor(code) {
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/Auth/two-factor-verification", {
        code
    });
    return response.data;
}
async function checkToken() {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$axios$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/Auth/refresh-token");
        return true;
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/slices/authSlice/authSlice.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkAuth": (()=>checkAuth),
    "default": (()=>__TURBOPACK__default__export__),
    "login": (()=>login),
    "logout": (()=>logout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/authServices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
};
const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/checkAuth", async (_, { rejectWithValue })=>{
    try {
        const isValid = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__.checkToken();
        if (!isValid) {
            throw new Error("Token is invalid");
        }
        return {
            id: "1",
            email: "user@example.com",
            name: "User"
        } // Replace with actual user data
        ;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/login", async (credentials)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__.login(credentials);
    if (!response.success) throw new Error(response.message);
    return response.data?.user;
});
const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/logout", async ()=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$authServices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__.logout();
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(checkAuth.pending, (state)=>{
            state.loading = true;
        }).addCase(checkAuth.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload || null;
            state.isAuthenticated = !!action.payload;
        }).addCase(checkAuth.rejected, (state)=>{
            state.loading = false;
            state.user = null;
        }).addCase(login.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload || null;
            state.isAuthenticated = true;
        }).addCase(login.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message ?? "Login failed";
        }).addCase(logout.fulfilled, (state)=>{
            state.user = null;
            state.isAuthenticated = false;
        });
    }
});
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "store": (()=>store)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$authSlice$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/slices/authSlice/authSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$authSlice$2f$authSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/redux/provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/redux/provider.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_refresh__.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_eabf13._.js.map