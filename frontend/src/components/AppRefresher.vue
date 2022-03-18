import { IonRefresher, IonRefresherContent } from '@ionic/vue';
<template>
  <IonRefresher slot="fixed" pull-min="100" pull-max="150" @ionRefresh="refresh">
    <IonRefresherContent
      :pulling-icon="chevronDown"
      :pulling-text="pullingText"
      refreshing-spinner="circles"
      :refreshing-text="t('global.isRefreshing')"
    />
  </IonRefresher>
</template>

<script lang="ts" setup>
import { IonRefresher, IonRefresherContent } from '@ionic/vue';
import { chevronDown } from 'ionicons/icons';
import { useI18n } from 'vue-i18n';

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

<style lang="scss" scoped></style>
