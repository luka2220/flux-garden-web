import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import Button from "primevue/button";
import DataView from "primevue/dataview";

import "./style.css";
import "primeicons/primeicons.css";

// App instance of Vue
const app = createApp(App);

// register themeing
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// register UI components
app.component("Button", Button);
app.component("DataView", DataView);

app.mount("#app");
