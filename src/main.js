import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import AvueFormDesign from 'avue-form-design-3'

const app =createApp(App)
app.use(ElementPlus)
app.use(Avue);
app.use(AvueFormDesign)
app.mount('#app')