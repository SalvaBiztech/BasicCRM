!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);function n(e,t,i,n,r,s,o,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}var r=n({props:{component:String,componentProps:Object},data:function(){return{loading:!0,readOnly:!1,componentPropValues:{}}},computed:{publishContainer:function(){return"relate-fieldtype-inline-".concat(this._uid)}},created:function(){this.getItem()},methods:{getItem:function(){var e=this;this.$axios.get(this.itemUrl).then((function(t){for(var i in e.componentProps){var n=data_get(t.data,e.componentProps[i]);e.$set(e.componentPropValues,i,n)}e.loading=!1}))},close:function(){this.$emit("closed")},confirmClose:function(){this.shouldClose()&&this.close()},shouldClose:function(){return!(this.$dirty.has(this.publishContainer)&&!confirm(__("Are you sure? Unsaved changes will be lost.")))}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("stack",{attrs:{name:"inline-editor","before-close":e.shouldClose},on:{closed:e.close}},[i("div",{staticClass:"h-full overflow-auto p-3 bg-grey-30"},[e.loading?i("div",{staticClass:"absolute inset-0 z-200 flex items-center justify-center text-center"},[i("loading-graphic")],1):e._e(),e._v(" "),e.loading?e._e():i(e.component,e._b({tag:"component",staticClass:"max-w-3xl mx-auto",attrs:{method:e.method,"is-creating":e.creating,"is-inline":!0,"publish-container":e.publishContainer},on:{saved:e.saved}},"component",e.componentPropValues,!1),[i("template",{slot:"action-buttons-right"},[e._t("action-buttons-right"),e._v(" "),i("button",{staticClass:"btn-close",attrs:{type:"button"},domProps:{innerHTML:e._s("&times")},on:{click:e.confirmClose}})],2)],2)],1)])],1)}),[],!1,null,null,null),s=n({mixins:[r.exports],props:{item:Object},data:function(){return{creating:!1,method:"patch",action:"update",title:this.item.title,itemUrl:this.item.edit_url}},methods:{saved:function(e){this.$emit("updated",e.data.data)}}},void 0,void 0,!1,null,null,null),o=n({components:{InlineEditForm:s.exports},props:{item:Object,config:Object,statusIcon:Boolean,editable:Boolean,sortable:Boolean,readOnly:Boolean,formComponent:String,formComponentProps:Object},data:function(){return{isEditing:!1}},methods:{edit:function(){this.editable&&(this.item.invalid||(this.isEditing=!0))},itemUpdated:function(e){this.item.title=e.title,this.item.published=e.published,this.item.private=e.private,this.item.status=e.status}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"item select-none",class:{invalid:e.item.invalid}},[e.sortable?i("div",{staticClass:"item-move"},[e._v(" ")]):e._e(),e._v(" "),i("div",{staticClass:"item-inner"},[e.statusIcon?i("div",{staticClass:"little-dot mr-1",class:e.item.status}):e._e(),e._v(" "),e.item.invalid?i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.__("An item with this ID could not be found"),expression:"__('An item with this ID could not be found')",modifiers:{top:!0}}],domProps:{textContent:e._s(e.item.title)}}):e._e(),e._v(" "),!e.item.invalid&&e.editable?i("a",{domProps:{textContent:e._s(e.item.title)},on:{click:e.edit}}):e._e(),e._v(" "),e.item.invalid||e.editable?e._e():i("div",{domProps:{textContent:e._s(e.item.title)}}),e._v(" "),e.isEditing?i("inline-edit-form",{attrs:{item:e.item,component:e.formComponent,"component-props":e.formComponentProps},on:{updated:e.itemUpdated,closed:function(t){e.isEditing=!1}}}):e._e()],1),e._v(" "),e.item.collection?i("div",{staticClass:"text-4xs text-grey-60 uppercase whitespace-no-wrap mr-1",domProps:{textContent:e._s(e.item.collection.title)}}):e._e(),e._v(" "),e.readOnly?e._e():i("div",{staticClass:"pr-1 flex items-center"},[i("dropdown-list",[e.editable?i("dropdown-item",{attrs:{text:e.__("Edit")},on:{click:e.edit}}):e._e(),e._v(" "),i("dropdown-item",{staticClass:"warning",attrs:{text:e.__("Delete")},on:{click:function(t){return e.$emit("removed")}}})],1)],1)])}),[],!1,null,null,null).exports,a=n({props:{breadcrumbs:Array,initialBlueprint:Object,initialValues:Object,initialMeta:Object,initialTitle:String,action:String,method:String,resourceHasRoutes:Boolean,permalink:String,isCreating:Boolean,publishContainer:String,readOnly:Boolean},data:function(){return{blueprint:this.initialBlueprint,values:this.initialValues,meta:this.initialMeta,title:this.initialTitle,errors:{},saving:!1,containerWidth:null,saveKeyBinding:null}},computed:{enableSidebar:function(){return this.blueprint.sections.map((function(e){return e.handle})).includes("sidebar")},shouldShowSidebar:function(){return this.enableSidebar}},created:function(){var e=this;this.publishContainer.includes("relate-fieldtype-inline")&&this.initialBlueprint.sections.forEach((function(t){t.fields.forEach((function(t){"belongs_to"===t.type&&t.resource===window.Runway.currentResource&&(e.values[t.handle].includes(window.Runway.currentRecord.id)||(e.values[t.handle].push(window.Runway.currentRecord.id),e.meta[t.handle].data=[window.Runway.currentRecord]))}))}))},methods:{save:function(){var e=this;this.saving=!0,this.clearErrors(),this.$axios({method:this.method,url:this.action,data:this.values}).then((function(t){e.saving=!1,e.$refs.container.saved(),e.$emit("saved",t),e.isCreating&&"base"===e.publishContainer?e.$nextTick((function(){window.location.href=t.data.redirect})):e.$toast.success(__("Saved"))})).catch((function(t){return e.handleAxiosError(t)}))},clearErrors:function(){this.error=null,this.errors={}},handleAxiosError:function(e){if(this.saving=!1,e.response&&422===e.response.status){var t=e.response.data,i=t.message,n=t.errors;this.error=i,this.errors=n,this.$toast.error(i)}else e.response?this.$toast.error(e.response.data.message):this.$toast.error(e||"Something went wrong")},setFieldValue:function(e,t){this.$refs.container.setFieldValue(e,t)},setFieldMeta:function(e,t){this.$store.dispatch("publish/".concat(this.publishContainer,"/setFieldMeta"),{handle:e,value:t,user:Statamic.user.id})}},watch:{saving:function(e){this.$progress.loading("runway-publish-form",e)}},mounted:function(){var e=this;this.saveKeyBinding=this.$keys.bindGlobal(["mod+s","mod+return"],(function(t){t.preventDefault(),e.save()}))},destroyed:function(){this.saveKeyBinding.destroy()}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.breadcrumbs?i("breadcrumb",{attrs:{url:e.breadcrumbs[0].url,title:e.breadcrumbs[0].text}}):e._e(),e._v(" "),i("div",{staticClass:"flex items-center mb-3"},[i("h1",{staticClass:"flex-1"},[i("div",{staticClass:"flex items-center"},[i("span",{domProps:{innerHTML:e._s(e.title)}})])]),e._v(" "),e.readOnly?e._e():i("div",{staticClass:"hidden md:flex items-center"},[i("button",{staticClass:"btn-primary",attrs:{disabled:e.isSaving},on:{click:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[e._v("\n        Save\n      ")])])]),e._v(" "),i("publish-container",{ref:"container",attrs:{name:e.publishContainer,blueprint:e.blueprint,values:e.values,meta:e.meta,errors:e.errors},on:{updated:function(t){e.values=t}}},[i("div",[e._l(e.components,(function(t){return i(t.name,e._g(e._b({key:t.id,tag:"component",attrs:{container:e.container}},"component",t.props,!1),t.events))})),e._v(" "),i("publish-sections",{attrs:{"read-only":e.readOnly,"enable-sidebar":e.shouldShowSidebar},on:{updated:e.setFieldValue,"meta-updated":e.setFieldMeta,focus:function(t){return e.$refs.container.$emit("focus",t)},blur:function(t){return e.$refs.container.$emit("blur",t)}},scopedSlots:e._u([{key:"actions",fn:function(t){var n=t.shouldShowSidebar;return[e.resourceHasRoutes&&e.permalink?i("div",{class:{hi:!n}},[i("div",{staticClass:"p-2 flex items-center -mx-1"},[e.permalink?i("a",{staticClass:"flex items-center justify-center btn-flat w-full mx-1 px-1",attrs:{href:e.permalink,target:"_blank"}},[i("svg-icon",{staticClass:"w-5 h-5 mr-1",attrs:{name:"external-link"}}),e._v(" "),i("span",[e._v(e._s(e.__("Visit URL")))])],1):e._e()])]):e._e()]}}])})],2)])],1)}),[],!1,null,null,null).exports;function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var f=n({mixins:[{methods:{actionStarted:function(){this.loading=!0},actionCompleted:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;if(this.loading=!1,!1!==e){var i;if(this.$events.$emit("clear-selections"),this.$events.$emit("reset-action-modals"),t.callback)(i=Statamic.$callbacks).call.apply(i,[t.callback[0]].concat(l(t.callback.slice(1))));!1!==t.message&&this.$toast.success(t.message||__("Action completed")),this.afterActionSuccessfullyCompleted()}},afterActionSuccessfullyCompleted:function(){this.request()}}},{data:function(){return{activePreset:null,activePresetPayload:{},searchQuery:"",activeFilters:{},activeFilterBadges:{}}},computed:{activeFilterCount:function(){var e=Object.keys(this.activeFilters).length;return this.activeFilters.hasOwnProperty("fields")&&(e=e+Object.keys(this.activeFilters.fields).filter((function(e){return"badge"!=e})).length-1),e},hasActiveFilters:function(){return this.activeFilterCount>0}},methods:{searchChanged:function(e){this.searchQuery=e},hasFields:function(e){for(var t in e)if(e[t])return!0;return!1},filterChanged:function(e){var t=e.handle,i=e.values,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i&&this.hasFields(i)?Vue.set(this.activeFilters,t,i):Vue.delete(this.activeFilters,t),n&&this.unselectAllItems()},filtersChanged:function(e){for(var t in this.activeFilters={},e){var i=e[t];this.filterChanged({handle:t,values:i},!1)}this.unselectAllItems()},filtersReset:function(){this.activePreset=null,this.activePresetPayload={},this.searchQuery="",this.activeFilters={},this.activeFilterBadges={}},unselectAllItems:function(){this.$refs.toggleAll&&this.$refs.toggleAll.uncheckAllItems()},selectPreset:function(e,t){this.activePreset=e,this.activePresetPayload=t,this.searchQuery=t.query,this.filtersChanged(t.filters)},autoApplyFilters:function(e){if(e){var t={};e.filter((function(e){return!_.isEmpty(e.auto_apply)})).forEach((function(e){t[e.handle]=e.auto_apply})),this.activeFilters=t}}}},{props:{initialPerPage:{type:Number,default:function(){return Statamic.$config.get("paginationSize")}}},data:function(){return{perPage:this.initialPerPage,page:1}},mounted:function(){this.setInitialPerPage()},methods:{setInitialPerPage:function(){this.hasPreferences&&(this.perPage=this.getPreference("per_page")||this.initialPerPage)},changePerPage:function(e){var t=this;e=parseInt(e),(this.hasPreferences?this.setPreference("per_page",e!=this.initialPerPage?e:null):Promise.resolve()).then((function(i){t.perPage=e,t.resetPage()}))},selectPage:function(e){this.page=e},resetPage:function(){this.page=1}}},{data:function(){return{preferencesPrefix:null}},computed:{hasPreferences:function(){return null!==this.preferencesPrefix}},methods:{preferencesKey:function(e){return"".concat(this.preferencesPrefix,".").concat(e)},getPreference:function(e){return this.$preferences.get(this.preferencesKey(e))},setPreference:function(e,t){return this.$preferences.set(this.preferencesKey(e),t)},removePreference:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.$preferences.remove(this.preferencesKey(e),t)}}}],props:{initialSortColumn:String,initialSortDirection:String,initialColumns:{type:Array,default:function(){return[]}},filters:Array,actionUrl:String},data:function(){return{source:null,initializing:!0,loading:!0,items:[],columns:this.initialColumns,visibleColumns:this.initialColumns.filter((function(e){return e.visible})),sortColumn:this.initialSortColumn,sortDirection:this.initialSortDirection,meta:null}},computed:{parameters:function(){return Object.assign({sort:this.sortColumn,order:this.sortDirection,page:this.page,perPage:this.perPage,search:this.searchQuery,filters:this.activeFilterParameters,columns:this.visibleColumns.map((function(e){return e.field})).join(",")},this.additionalParameters)},activeFilterParameters:function(){return utf8btoa(JSON.stringify(this.activeFilters))},additionalParameters:function(){return{}},shouldRequestFirstPage:function(){return this.page>1&&0===this.items.length&&(this.page=1,!0)}},created:function(){this.autoApplyFilters(this.filters),this.request()},watch:{parameters:{deep:!0,handler:function(e,t){t.search===e.search&&JSON.stringify(t)!==JSON.stringify(e)&&this.request()}},loading:{immediate:!0,handler:function(e){this.$progress.loading(this.listingKey,e)}},searchQuery:function(e){this.sortColumn=null,this.sortDirection=null,this.resetPage(),this.request()}},methods:{request:function(){var e=this;this.requestUrl?(this.loading=!0,this.source&&this.source.cancel(),this.source=this.$axios.CancelToken.source(),this.$axios.get(this.requestUrl,{params:this.parameters,cancelToken:this.source.token}).then((function(t){if(e.columns=t.data.meta.columns,e.activeFilterBadges=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},t.data.meta.activeFilterBadges),e.items=Object.values(t.data.data),e.meta=t.data.meta,e.shouldRequestFirstPage)return e.request();e.loading=!1,e.initializing=!1,e.afterRequestCompleted()})).catch((function(t){e.$axios.isCancel(t)||(e.loading=!1,e.initializing=!1,e.$toast.error(t.response?t.response.data.message:__("Something went wrong"),{duration:null}))}))):this.loading=!1},afterRequestCompleted:function(e){},sorted:function(e,t){this.sortColumn=e,this.sortDirection=t},removeRow:function(e){var t=e.id,i=_.indexOf(this.rows,_.findWhere(this.rows,{id:t}));this.rows.splice(i,1),0===this.rows.length&&location.reload()}}},void 0,void 0,!1,null,null,null),h=n({mixins:[f.exports],props:{listingConfig:Object,initialColumns:Array,actionUrl:String},data:function(){var e,t="";return this.initialColumns&&this.initialColumns.forEach((function(e){e.is_primary_column&&(t=e.handle)})),{listingKey:"id",preferencesPrefix:null!==(e=this.listingConfig.preferencesPrefix)&&void 0!==e?e:"runway",requestUrl:this.listingConfig.requestUrl,columns:this.initialColumns,meta:{},primaryColumn:"cell-".concat(t),deletingRow:!1}},methods:{canViewRow:function(e){return e.viewable&&e.permalink},canEditRow:function(e){return e.editable&&e.permalink},confirmDeleteRow:function(e,t,i){this.visibleColumns=this.columns.filter((function(e){return e.visible})),this.deletingRow={id:e,index:t,deleteUrl:i}},deleteRow:function(e){var t=this,i=this.deletingRow.id;e=e||__("Deleted"),this.$axios.delete(this.deletingRow.deleteUrl).then((function(){var n=_.indexOf(t.items,_.findWhere(t.rows,{id:i}));t.items.splice(n,1),t.deletingRow=!1,t.$toast.success(e)})).catch((function(e){t.$toast.error(e.response?e.response.data.message:__("Something went wrong"))}))},cancelDeleteRow:function(){var e=this;this.deletingRow=!1,setTimeout((function(){e.visibleColumns=e.columns.filter((function(e){return e.visible}))}),50)}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.initializing?i("div",{staticClass:"card loading"},[i("loading-graphic")],1):e._e(),e._v(" "),e.initializing?e._e():i("data-list",{staticClass:"mb-4",attrs:{columns:e.columns,rows:e.items,sort:!1,"sort-column":e.sortColumn,"sort-direction":e.sortDirection},on:{"visible-columns-updated":function(t){e.visibleColumns=t}},scopedSlots:e._u([{key:"default",fn:function(t){t.hasSelections;return i("div",{},[i("div",{staticClass:"card p-0 relative"},[i("data-list-filter-presets",{ref:"presets",attrs:{"active-preset":e.activePreset,"preferences-prefix":e.preferencesPrefix},on:{selected:e.selectPreset,reset:e.filtersReset}}),e._v(" "),i("div",{staticClass:"data-list-header"},[i("data-list-filters",{attrs:{filters:e.filters,"active-preset":e.activePreset,"active-preset-payload":e.activePresetPayload,"active-filters":e.activeFilters,"active-filter-badges":e.activeFilterBadges,"active-count":e.activeFilterCount,"search-query":e.searchQuery,"saves-presets":!0,"preferences-prefix":e.preferencesPrefix},on:{"filter-changed":e.filterChanged,"search-changed":e.searchChanged,saved:function(t){return e.$refs.presets.setPreset(t)},deleted:function(t){return e.$refs.presets.refreshPresets()},"restore-preset":function(t){return e.$refs.presets.viewPreset(t)},reset:e.filtersReset}})],1),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.items.length,expression:"items.length === 0"}],staticClass:"p-3 text-center text-grey-50",domProps:{textContent:e._s(e.__("No results"))}}),e._v(" "),i("data-list-bulk-actions",{attrs:{url:e.actionUrl},on:{started:e.actionStarted,completed:e.actionCompleted}}),e._v(" "),i("data-list-table",{directives:[{name:"show",rawName:"v-show",value:e.items.length,expression:"items.length"}],attrs:{"allow-bulk-actions":!0,loading:e.loading,reorderable:!1,sortable:!0,"toggle-selection-on-row-click":!0,"allow-column-picker":!0,"column-preferences-key":e.preferencesKey("columns")},on:{sorted:e.sorted},scopedSlots:e._u([{key:e.primaryColumn,fn:function(t){var n=t.row,r=t.value;return[i("a",{attrs:{href:n.edit_url}},[e._v(e._s(r))])]}},{key:"actions",fn:function(t){var n=t.row;t.index;return[e.canViewRow(n)||e.canEditRow(n)||n.actions.length?i("dropdown-list",[e.canViewRow(n)?i("dropdown-item",{attrs:{text:e.__("View"),redirect:n.permalink}}):e._e(),e._v(" "),e.canEditRow(n)?i("dropdown-item",{attrs:{text:e.__("Edit"),redirect:n.edit_url}}):e._e(),e._v(" "),(e.canViewRow(n)||e.canEditRow(n))&&n.actions.length?i("div",{staticClass:"divider"}):e._e(),e._v(" "),i("data-list-inline-actions",{attrs:{item:n.id,url:e.actionUrl,actions:n.actions},on:{started:e.actionStarted,completed:e.actionCompleted}})],1):i("div",{staticClass:"w-10 block"})]}}],null,!0)}),e._v(" "),!1!==e.deletingRow?i("confirmation-modal",{attrs:{title:e.__("Delete"),bodyText:e.__("Are you sure you want to delete this item?"),buttonText:e.__("Delete"),danger:!0},on:{confirm:function(t){return e.deleteRow()},cancel:e.cancelDeleteRow}}):e._e()],1)])}}],null,!1,2136579939)}),e._v(" "),i("data-list-pagination",{staticClass:"mt-3",attrs:{"resource-meta":e.meta,"per-page":e.perPage},on:{"page-selected":e.selectPage,"per-page-changed":e.changePerPage}})],1)}),[],!1,null,null,null).exports;Statamic.$components.register("hasmany-related-item",o),Statamic.$components.register("runway-publish-form",a),Statamic.$components.register("runway-listing-view",h)}]);