(()=>{var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const n=flarum.core.compat["admin/app"];var r=t.n(n);function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}const l=flarum.core.compat["admin/components/ExtensionPage"];var o=function(t){var e,n;function l(){return t.apply(this,arguments)||this}n=t,(e=l).prototype=Object.create(n.prototype),e.prototype.constructor=e,a(e,n);var o=l.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e)},o.content=function(){return m("div",{className:"FilterSettingsPage"},m("div",{className:"container"},m("form",null,m("h2",null,r().translator.trans("fof-filter.admin.title")),this.buildSettingComponent({type:"textarea",rows:6,setting:"fof-filter.words",label:r().translator.trans("fof-filter.admin.filter_label"),placeholder:r().translator.trans("fof-filter.admin.input.placeholder"),help:r().translator.trans("fof-filter.admin.bad_words_help")}),this.buildSettingComponent({type:"boolean",setting:"fof-filter.autoDeletePosts",label:r().translator.trans("fof-filter.admin.input.switch.delete")}),m("hr",null),m("h2",null,r().translator.trans("fof-filter.admin.auto_merge_title")),this.buildSettingComponent({type:"boolean",setting:"fof-filter.autoMergePosts",label:r().translator.trans("fof-filter.admin.input.switch.merge")}),this.buildSettingComponent({type:"number",setting:"fof-filter.cooldown",label:r().translator.trans("fof-filter.admin.cooldownLabel"),help:r().translator.trans("fof-filter.admin.help2"),min:0}),m("hr",null),m("h2",null,r().translator.trans("fof-filter.admin.input.email_label")),this.buildSettingComponent({type:"string",setting:"fof-filter.flaggedSubject",label:r().translator.trans("fof-filter.admin.input.email_subject"),placeholder:r().translator.trans("fof-filter.admin.email.default_subject")}),this.buildSettingComponent({type:"textarea",rows:4,setting:"fof-filter.flaggedEmail",label:r().translator.trans("fof-filter.admin.input.email_body"),help:r().translator.trans("fof-filter.admin.email_help"),placeholder:r().translator.trans("fof-filter.admin.email.default_text")}),this.buildSettingComponent({type:"boolean",setting:"fof-filter.emailWhenFlagged",label:r().translator.trans("fof-filter.admin.input.switch.email")}),m("hr",null),this.submitButton())))},l}(t.n(l)());r().initializers.add("fof-filter",(function(){r().extensionData.for("fof-filter").registerPage(o).registerPermission({icon:"fas fa-user-ninja",label:r().translator.trans("fof-filter.admin.permission.bypass_filter_label"),permission:"discussion.bypassFoFFilter"},"reply")}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map