<template>
  <div class="wrapper">
    <img
      class="flag toggle"
      :src="getFlag(locale)"
      :alt="`flag-${locale}`"
      @click="setOpen(true, $event)"
    />
    <IonPopover
      :is-open="isOpenRef"
      css-class="app-popover app-popover--small"
      :event="event"
      :translucent="false"
      :show-backdrop="false"
      @didDismiss="setOpen(false)"
    >
      <ul>
        <li
          v-for="lang in availableLocales"
          :key="lang"
          :class="{ active: lang === locale }"
          @click="change(lang)"
        >
          <img class="flag" :src="getFlag(lang)" :alt="`flag-${lang}`" />
          <span class="active">{{ t(`locales.${lang}`) }}</span>
        </li>
      </ul>
    </IonPopover>
  </div>
</template>

<script lang="ts" setup>
import { IonPopover } from "@ionic/vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useSettingsStore } from "../store/settings";

const isOpenRef = ref(false);
const event = ref<MouseEvent | undefined>();
const setOpen = (state: boolean, ev?: MouseEvent) => {
  event.value = ev;
  isOpenRef.value = state;
};

const { locale, availableLocales, t } = useI18n();
const settingsStore = useSettingsStore();

const change = async (lang: string) => {
  setOpen(false);
  if (lang === locale.value) return;
  await settingsStore.changeLocale(lang);
};

const getFlag = (locale: string): string =>
  new URL(`../assets/flags/${locale}.svg`, import.meta.url).href;
</script>

<style scoped lang="scss">
@import "../styles/variables";

$flagSize: 18px;

.wrapper {
  min-width: $flagSize;
}

.toggle {
  cursor: pointer;
  display: block;
}

ul {
  list-style: none;
  margin: 0;
  padding: 6px 0;

  li {
    padding: 6px 12px;
    cursor: pointer;

    &.active {
      background: rgba(var(--ion-text-color-rgb), 0.05);
    }

    &:hover {
      background: rgba(var(--ion-text-color-rgb), 0.1);
    }

    span {
      font-size: 15px;
      color: var(--app-font-color);
      margin-left: 10px;
    }
  }
}

.flag {
  display: inline-block;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  width: $flagSize;
  height: $flagSize;
  border-radius: 50%;
  margin-bottom: -2px;
  overflow: hidden;
  object-fit: cover;
  background-size: cover;
  background-color: #aaa;
  background-position: center center;
}
</style>
