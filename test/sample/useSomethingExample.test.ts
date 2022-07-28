import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import App from '/src/App.vue';
import {useSomethingExample} from "../../src/composables/primevue/useSomethingExample";
import {createPinia} from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import {createHead} from "@vueuse/head";
import Toast from "primevue/toast";

test('mount component', async () => {
  expect(App).toBeTruthy();

  const wrapper = mount(App, {
    global: {
      components: {Toast},
      plugins: [createPinia(), PrimeVue, ToastService, createHead()]
    }
  });

  const useSomething = useSomethingExample()

});
