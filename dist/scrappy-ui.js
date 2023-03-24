import { defineComponent, createVNode, createTextVNode } from "vue";
const JSXButton = /* @__PURE__ */ defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  entry as default
};
