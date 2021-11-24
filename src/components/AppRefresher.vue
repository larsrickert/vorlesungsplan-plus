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
  await props.refreshFunc();
  await (ev.target as HTMLIonRefresherElement).complete();
};
</script>

<style lang="scss" scoped></style>
