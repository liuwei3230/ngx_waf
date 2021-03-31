(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{388:function(e,t,o){"use strict";o.r(t);var i=o(45),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"configuration-syntax"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-syntax"}},[e._v("#")]),e._v(" Configuration syntax")]),e._v(" "),o("h2",{attrs:{id:"waf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#waf"}},[e._v("#")]),e._v(" "),o("code",[e._v("waf")])]),e._v(" "),o("ul",[o("li",[e._v("syntax: "),o("code",[e._v("waf <on|off>;")])]),e._v(" "),o("li",[e._v("default: "),o("code",[e._v("waf off;")])]),e._v(" "),o("li",[e._v("context: server")])]),e._v(" "),o("p",[e._v("Whether to enable this module.")]),e._v(" "),o("h2",{attrs:{id:"waf-rule-path"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#waf-rule-path"}},[e._v("#")]),e._v(" "),o("code",[e._v("waf_rule_path")])]),e._v(" "),o("ul",[o("li",[e._v("syntax: "),o("code",[e._v("waf_rule_path <dir>;")])]),e._v(" "),o("li",[e._v("default: —")]),e._v(" "),o("li",[e._v("context: server")])]),e._v(" "),o("p",[e._v("The absolute path to the directory where the rule file is located, and must end with "),o("code",[e._v("/")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"waf-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#waf-mode"}},[e._v("#")]),e._v(" "),o("code",[e._v("waf_mode")])]),e._v(" "),o("ul",[o("li",[e._v("syntax: "),o("code",[e._v("waf_mode <mode_type> ...;")])]),e._v(" "),o("li",[e._v("default: —")]),e._v(" "),o("li",[e._v("context: server")])]),e._v(" "),o("p",[e._v("Specify the working mode of the firewall, specifying at least one mode and up to eight modes.")]),e._v(" "),o("p",[o("code",[e._v("mode_type")]),e._v(" has the following values (not case sensitive):")]),e._v(" "),o("ul",[o("li",[e._v("GET: Start the inspection process when "),o("code",[e._v("Http.Method=GET")]),e._v(".")]),e._v(" "),o("li",[e._v("HEAD: Start the inspection process when "),o("code",[e._v("Http.Method=HEAD")]),e._v(".")]),e._v(" "),o("li",[e._v("POST: Start the inspection process when "),o("code",[e._v("Http.Method=POST")]),e._v(".")]),e._v(" "),o("li",[e._v("PUT: Start the inspection process when "),o("code",[e._v("Http.Method=PUT")]),e._v(".")]),e._v(" "),o("li",[e._v("DELETE: Start the inspection process when "),o("code",[e._v("Http.Method=DELETE")]),e._v(".")]),e._v(" "),o("li",[e._v("MKCOL: Start the check process when "),o("code",[e._v("Http.Method=MKCOL")]),e._v(".")]),e._v(" "),o("li",[e._v("COPY: Start the inspection process when "),o("code",[e._v("Http.Method=COPY")]),e._v(".")]),e._v(" "),o("li",[e._v("MOVE: Start the inspection process when "),o("code",[e._v("Http.Method=MOVE")]),e._v(".")]),e._v(" "),o("li",[e._v("OPTIONS: Start the inspection process when "),o("code",[e._v("Http.Method=OPTIONS")]),e._v(".")]),e._v(" "),o("li",[e._v("PROPFIN: Start the inspection process when "),o("code",[e._v("Http.Method=PROPFIN")]),e._v(".")]),e._v(" "),o("li",[e._v("PROPPATCH: Start the inspection process when "),o("code",[e._v("Http.Method=PROPPATCH")]),e._v(".")]),e._v(" "),o("li",[e._v("LOCK: Start the inspection process when "),o("code",[e._v("Http.Method=LOCK")]),e._v(".")]),e._v(" "),o("li",[e._v("UNLOCK: Start the inspection process when "),o("code",[e._v("Http.Method=UNLOCK")]),e._v(".")]),e._v(" "),o("li",[e._v("PATCH: Start the inspection process when "),o("code",[e._v("Http.Method=PATCH")]),e._v(".")]),e._v(" "),o("li",[e._v("TRAC: Start the inspection process when "),o("code",[e._v("Http.Method=TRAC")]),e._v(".")]),e._v(" "),o("li",[e._v("IP: Enable IP address inspecting rules.")]),e._v(" "),o("li",[e._v("URL: Enable URL inspecting rules.")]),e._v(" "),o("li",[e._v("RBODY: Enable POST request body inspecting rules.")]),e._v(" "),o("li",[e._v("ARGS: Enable ARGS inspecting rules.")]),e._v(" "),o("li",[e._v("UA: Enable UA inspecting rules.")]),e._v(" "),o("li",[e._v("COOKIE: Enable COOKIE inspecting rules.")]),e._v(" "),o("li",[e._v("REFERER: Enable REFERER inspecting rules.")]),e._v(" "),o("li",[e._v("CC: Enable 'Anti Challenge Collapsar'. When you enable this mode, you must set "),o("a",{attrs:{href:"#waf-cc-deny-limit"}},[e._v("waf_cc_deny_limit")]),e._v(".")]),e._v(" "),o("li",[e._v("COMPAT: compatibility mode, used to enable compatibility options with other modules or environments, currently used for compatibility with the ngx_http_rewrite_module, see "),o("RouterLink",{attrs:{to:"/guide/compatibility.html"}},[e._v("compatibility statement")]),e._v(".")],1),e._v(" "),o("li",[e._v("STRICT: Strict mode, which sacrifices some performance for more checks, currently only works when "),o("code",[e._v("COMPAT")]),e._v(" mode is enabled, and performs a full round of inspections before and after the ngx_http_rewrite_module takes effect.")]),e._v(" "),o("li",[e._v("STATIC: working mode for static sites, equivalent to "),o("code",[e._v("HEAD GET IP URL UA CC")]),e._v(".")]),e._v(" "),o("li",[e._v("DYNAMIC: working mode for dynamic sites, equivalent to "),o("code",[e._v("HEAD GET POST IP URL ARGS UA RBODY COOKIE CC")]),e._v(".")]),e._v(" "),o("li",[e._v("STD: Equivalent to "),o("code",[e._v("HEAD GET POST IP URL RBODY ARGS UA CC COMPAT")]),e._v(".")]),e._v(" "),o("li",[e._v("FULL: Enable all modes.")])]),e._v(" "),o("p",[e._v("You can turn off a mode by prefixing a "),o("code",[e._v("mode_type")]),e._v(" with "),o("code",[e._v("!")]),e._v(" prefix to a "),o("code",[e._v("mode_type")]),e._v(" to turn it off.\nThe following is an example of using the standard working mode, but without inspecting the User-Agent.")]),e._v(" "),o("div",{staticClass:"language-nginx extra-class"},[o("pre",{pre:!0,attrs:{class:"language-nginx"}},[o("code",[e._v("waf_mode STD "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("UA"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("The mode of "),o("code",[e._v("CC")]),e._v(" is independent of other modes, and whether it takes effect or not is not affected by other modes. A typical situation such as the "),o("code",[e._v("URL")]),e._v(" mode will be affected by the "),o("code",[e._v("GET")]),e._v(" mode, because if the "),o("code",[e._v("GET")]),e._v(" mode is not used, the check will not be started when "),o("code",[e._v("Http.Method=GET")]),e._v(", and the URL will naturally not be inspected, but "),o("code",[e._v("CC")]),e._v(" mode will not be similarly affected.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("CHANGES IN THE DEVELOPMENT VERSION")]),e._v(" "),o("p",[e._v("Added a new mode:")]),e._v(" "),o("ul",[o("li",[e._v("CACHE: Enable caching. Enabling this mode will cache the result of the inspection, so that the next time the same target is inspected, there is no need to repeat the inspection. However, the results of the POST body inspection are not cached. For example, if a URL is not in the blacklist after inspection, the next time the same URL is inspected, the cache can be read directly. When you enable this mode, you must set "),o("a",{attrs:{href:"#waf-cache-size"}},[e._v("waf_cache_size")]),e._v(".")])]),e._v(" "),o("p",[e._v("The following modes have changed:")]),e._v(" "),o("ul",[o("li",[e._v("STD: Standard working mode, equivalent to "),o("code",[e._v("HEAD GET POST IP URL RBODY ARGS UA CC COMPAT CACHE")]),e._v(".")]),e._v(" "),o("li",[e._v("STATIC: working mode for static sites, equivalent to "),o("code",[e._v("HEAD GET IP URL UA CC CACHE")]),e._v(".")]),e._v(" "),o("li",[e._v("DYNAMIC: working mode for dynamic sites, equivalent to "),o("code",[e._v("HEAD GET POST IP URL ARGS UA RBODY COOKIE CC COMPAT CACHE")]),e._v(".")])])]),e._v(" "),o("h2",{attrs:{id:"waf-cc-deny-limit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#waf-cc-deny-limit"}},[e._v("#")]),e._v(" "),o("code",[e._v("waf_cc_deny_limit")])]),e._v(" "),o("ul",[o("li",[e._v("syntax: "),o("code",[e._v("waf_cc_deny_limit <rate> <duration> [buffer_size]")]),e._v(";")]),e._v(" "),o("li",[e._v("default: ——")]),e._v(" "),o("li",[e._v("context: server")])]),e._v(" "),o("p",[e._v("Set the parameters related to CC protection.")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("rate")]),e._v(":Indicates the maximum number of requests per minute (an integer greater than zero).")]),e._v(" "),o("li",[o("code",[e._v("duration")]),e._v(":Indicates how many minutes (an integer greater than zero) to pull the IP after exceeding the limit of the first parameter "),o("code",[e._v("rate")]),e._v(".")]),e._v(" "),o("li",[o("code",[e._v("buffer_size")]),e._v(": used to set the size of the memory for recording IP accesses, such as "),o("code",[e._v("10m")]),e._v(", "),o("code",[e._v("10240k")]),e._v(", must not be less than "),o("code",[e._v("10m")]),e._v(", if not specified then the default is "),o("code",[e._v("10m")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"waf-cache-size"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#waf-cache-size"}},[e._v("#")]),e._v(" "),o("code",[e._v("waf_cache_size")])]),e._v(" "),o("ul",[o("li",[e._v("syntax: "),o("code",[e._v("waf_cache_size buffer_size")]),e._v(";")]),e._v(" "),o("li",[e._v("default: ——")]),e._v(" "),o("li",[e._v("context: server")])]),e._v(" "),o("p",[e._v("Set the size of the memory used to cache the inspection results.\nFor example "),o("code",[e._v("10m")]),e._v(", "),o("code",[e._v("10240k")]),e._v(", must not be less than "),o("code",[e._v("10m")]),e._v(", or default to "),o("code",[e._v("10m")]),e._v(" if not specified.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("It is recommended to set the size of the cache space according to the actual situation. If the memory space is not large enough, the cache will be deleted frequently, which will reduce the performance.")]),e._v(" "),o("p",[e._v("You can check if the following line appears frequently by looking at the "),o("RouterLink",{attrs:{to:"/advance/log.html"}},[e._v("debug log")]),e._v(".\nIf it appears almost every request, please increase the size of the cache space appropriately.")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ngx_slab_alloc() failed: no memory\n")])])]),o("p",[e._v("Translated with www.DeepL.com/Translator (free version)")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("This configuration is a new feature in the development version,\nand can only be used in the development version,\nand will be merged into the stable version when it is stable.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);