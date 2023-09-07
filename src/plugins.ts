import "vue-toastification/dist/index.css";

import { App } from "vue";
import Toast from "vue-toastification";
import CommonToast from "@/components/CToast.vue";

export default function definePlugins(app: App): App {
  //Toast Notification
  const options = {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false,
    maxToasts: 3,
    newestOnTop: true,
    component: CommonToast,
  };
  app.use(Toast, options);
  return app;
}
