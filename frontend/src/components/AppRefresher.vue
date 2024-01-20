<template>
  <div class="refresher-wrapper">
    <IonRefresher slot="fixed" :pull-min="100" :pull-max="150" @ionRefresh="refresh">
      <IonRefresherContent
        :pulling-icon="chevronDown"
        :pulling-text="pullingText"
        refreshing-spinner="circles"
        :refreshing-text="t('global.isRefreshing')"
      />
    </IonRefresher>

    <LottieAnimation
      :animation-data="swipeDownAnimationData"
      :speed="0.6"
      class="animation"
      :title="t('global.pullToRefresh')"
    />
  </div>
</template>

<script lang="ts" setup>
import { IonRefresher, IonRefresherContent } from "@ionic/vue";
import { chevronDown } from "ionicons/icons";
import { useI18n } from "vue-i18n";
import swipeDownAnimationData from "../assets/lottie/swipe-down.json";
import LottieAnimation from "./LottieAnimation.vue";

const props = defineProps<{
  pullingText: string;
  refreshFunc: () => unknown;
}>();

const { t } = useI18n();

const refresh = async (ev: CustomEvent) => {
  const refresher = ev.target as HTMLIonRefresherElement;

  try {
    await props.refreshFunc();
    await refresher.complete();
  } catch (e) {
    await refresher.complete();
    throw e;
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.refresher-wrapper {
  margin-bottom: 12px;

  @include breakpoint(s) {
    margin-bottom: 32px;
  }
}

.animation {
  height: 48px;
  width: 100%;
  cursor: grab;
  position: absolute;
  left: 0;
  top: 76px;
}
</style>
