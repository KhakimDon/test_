import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/icommon/style.css";
import "@/styles/index.css";
import router from "./router";
import i18n from "@/plugins/i18n";
import definePlugins from "@/plugins";
import CKEditor from "@ckeditor/ckeditor5-vue";
export const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(CKEditor);

definePlugins(app);

app.mount("#app");
