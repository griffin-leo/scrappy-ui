var ScrappyUI = function(vue) {
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
}(Vue);
