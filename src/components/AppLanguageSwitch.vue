<template>
  <div :class="{ open: isOpen }" class="wrapper" @mouseenter="open(true)" @mouseleave="open(false)">
    <img class="flag" :src="getFlag(locale)" :alt="`flag-${locale}`" @click="open(true)" />
    <div class="triangle"></div>

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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSettingsStore } from '../store/settings';

const { locale, availableLocales, t } = useI18n();
const isOpen = ref<boolean>(false);

const open = (shouldOpen: boolean) => {
  isOpen.value = shouldOpen;
};

const settingsStore = useSettingsStore();

const change = async (lang: string) => {
  open(false);
  if (lang === locale.value) return;
  await settingsStore.changeLocale(lang);
};

const getFlag = (locale: string): string =>
  new URL(`../assets/flags/${locale}.svg`, import.meta.url).href;
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$flagSize: 18px;

.wrapper {
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;

  width: $flagSize;
  height: $flagSize;

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ul {
    display: none;
  }

  &.open {
    ul {
      list-style: none;
      position: absolute;
      top: 12px;
      left: -16px;
      width: 125px;
      background: var(--ion-background-color);
      z-index: 1;
      border-radius: var(--app-border-radius);
      box-shadow: $box-shadow;
      display: block;

      -webkit-animation: fadeIn 0.3s;
      animation: fadeIn 0.3s;

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
          color: var(--ion-text-color);
          margin-left: 10px;
        }
      }
    }

    .triangle {
      position: absolute;
      top: 14px;
      right: -7px;
      z-index: 10;
      height: 14px;
      overflow: hidden;
      width: 30px;
      background: transparent;

      -webkit-animation: fadeIn 0.15s;
      animation: fadeIn 0.15s;

      &:after {
        content: '';
        display: block;
        z-index: 20;
        width: 15px;
        transform: rotate(45deg) translateY(0px) translatex(10px);
        height: 15px;
        background: var(--ion-background-color);
        border-radius: 2px 0 0 0;
        box-shadow: $box-shadow;

        -webkit-animation: fadeIn 0.3s;
        animation: fadeIn 0.3s;
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
}
</style>
