import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { registerGlobComp } from '/@/components/registerGlobComp';

let app = createApp(App);
// Register global components
// 注册全局组件
registerGlobComp(app);
app.mount('#app');
