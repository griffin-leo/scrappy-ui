(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.ScrappyUI = factory(global.Vue));
})(this, function(vue) {
  "use strict";
  const JSXButton = /* @__PURE__ */ vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("JSX Button")]);
    }
  });
  const entry = {
    install(app) {
      app.component(JSXButton.name, JSXButton);
    }
  };
  return entry;
});
