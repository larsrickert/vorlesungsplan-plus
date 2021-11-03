<template>
  <IonSplitPane :content-id="contentId">
    <IonMenu
      :content-id="contentId"
      :disabled="disabled"
      :side="side"
      :swipe-gesture="swipeGesture"
      :type="animation"
    >
      <IonContent>
        <IonList id="inbox-list">
          <img v-if="img" :src="img" alt="Logo" class="logo" />

          <IonListHeader>{{ heading }}</IonListHeader>

          <div class="note__wrapper">
            <IonNote>{{ description }}</IonNote>
            <AppLanguageSwitch class="lang-switch" />
          </div>

          <div class="slot">
            <slot></slot>
          </div>

          <SideMenuItem
            v-for="(item, index) in navItems"
            :key="index"
            :href="item.href"
            :icon="item.icon"
            :title="item.title"
            class="menu-item"
          />
        </IonList>

        <IonList v-if="subItems.length > 0" id="labels-list">
          <IonListHeader v-if="subItemsHeading">{{ subItemsHeading }}</IonListHeader>

          <SideMenuItem
            v-for="(item, index) in subItems"
            :key="index"
            :href="item.href"
            :icon="item.icon"
            :title="item.title"
            class="menu-item"
          />
        </IonList>
      </IonContent>
    </IonMenu>
    <IonRouterOutlet :id="contentId" />
  </IonSplitPane>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonList,
  IonListHeader,
  IonMenu,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';
import AppLanguageSwitch from '../components/AppLanguageSwitch.vue';
import SideMenuItem from '../components/SideMenuItem.vue';
import { MenuItem } from '../types/misc';

interface SideMenuProps {
  navItems: MenuItem[];
  subItems?: MenuItem[];
  contentId?: string;
  disabled?: boolean;
  subItemsHeading?: string;
  heading: string;
  description: string;
  img?: string;
  swipeGesture?: boolean;
  side?: 'start' | 'end';
  animation?: 'overlay' | 'reveal' | 'push';
}

withDefaults(defineProps<SideMenuProps>(), {
  subItems: () => [],
  contentId: 'main-content',
  subItemsHeading: '',
  img: '',
  swipeGesture: true,
  side: 'start',
  animation: 'overlay',
});
</script>

<style lang="scss" scoped>
@import '../styles/mixin';

ion-menu {
  border-color: var(--ion-border-color);
}

ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 16px;
  --padding-bottom: 16px;
  --background: var(--ion-toolbar-background);

  @include breakpoint(l, min) {
    --padding-start: 16px;
    --padding-end: 16px;
    --padding-top: 16px;
    --padding-bottom: 16px;
  }
}

.logo {
  height: 100px;
  display: block;
  padding-bottom: 10px;
}

.menu-item {
  display: block;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
}

ion-list {
  padding: 20px 0;
  background: transparent;
}

ion-note {
  line-height: 24px;
  display: block;
  color: var(--ion-color-medium-shade);
  font-size: 16px;
}

.slot {
  padding: 16px 0;
  display: block;
}

ion-list-header,
ion-note,
.logo {
  padding-left: 16px;
}

.note__wrapper {
  display: flex;
  align-content: center;
  font-weight: 500;

  .lang-switch {
    margin: 2px 20px 0 20px;
  }
}

#inbox-list {
  border-bottom: 1px solid var(--ion-border-color);

  ion-list-header {
    font-size: 24px;

    font-weight: 600;
    min-height: 20px;
  }
}

#labels-list {
  ion-list-header {
    font-size: 16px;
    margin-bottom: 10px;
    color: #757575;
    min-height: 26px;
    font-weight: 500;
  }
}
</style>
