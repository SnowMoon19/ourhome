import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SvgIcon from '@/components/SvgIcon' // svg组件
import {Axios} from "axios";
// 引入刚才的js文件
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { initTheme, themeOptions } from '@/myConfig/theme.js'

import { Button, Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Col, Row } from 'vant';

const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app');

app.config.globalProperties.$axios = Axios;

/**
 * 主题化，暂未用到
 */
app.config.globalProperties.$initTheme = initTheme;
app.config.globalProperties.$themeOptions = themeOptions;
initTheme('dark')

app.component('svg-icon', SvgIcon);

// vant 组件
app.use(Button);
app.use(Cell);
app.use(CellGroup);
app.use(Field);
app.use(Col);
app.use(Row);

