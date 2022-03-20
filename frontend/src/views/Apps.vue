<template>
  <IonPage>
    <AppHeader :title="t('apps.installVorlesungsplanPlus')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <div ref="lottieRef" class="animation"></div>

        <AppSegment v-model="selectedSegment" :options="segments" />

        <template v-if="selectedSegment === 'iosWidget'">
          <p>{{ t('apps.iosWidget.description') }}</p>

          <IonChip
            color="medium"
            @click="navigate('https://support.google.com/chrome/answer/9658361')"
          >
            {{ t('apps.iosWidget.download') }}
            <IonIcon :icon="apps" />
          </IonChip>
        </template>

        <template v-else>
          <p>{{ t('apps.pwa.description') }}</p>

          <IonChip
            color="medium"
            @click="navigate('https://support.google.com/chrome/answer/9658361')"
          >
            {{ t('apps.pwa.installWith', { browser: 'Chrome' }) }}
            <IonIcon :icon="logoChrome" />
          </IonChip>

          <IonChip
            color="medium"
            @click="
              navigate(
                'https://howtomanagedevices.com/windows-10/5720/how-to-install-progressive-web-app-in-microsoft-edge-chromium'
              )
            "
          >
            {{ t('apps.pwa.installWith', { browser: 'Edge' }) }}
            <IonIcon :icon="logoEdge" />
          </IonChip>

          <IonChip
            color="medium"
            @click="
              navigate(
                'https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/'
              )
            "
          >
            {{ t('apps.pwa.installWith', { browser: 'Safari' }) }}
            <IonIcon :icon="logoApple" />
          </IonChip>
        </template>
      </div>
    </IonContent>
  </IonPage>
</template>

<script lang="ts" setup>
import { IonChip, IonContent, IonIcon, IonPage } from '@ionic/vue';
import { apps, logoApple, logoChrome, logoEdge } from 'ionicons/icons';
import lottie from 'lottie-web';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import lottieDownloadAnimationData from '../assets/lottie/download.json';
import AppHeader from '../components/AppHeader.vue';
import AppSegment from '../components/AppSegment.vue';
import { navigate } from '../helpers/misc';
import { SelectOption } from '../types/misc';

const { t } = useI18n();

const selectedSegment = ref('apps');
const segments = computed((): SelectOption[] => {
  return [
    {
      name: t('apps.pwa.title'),
      value: 'apps',
    },
    {
      name: t('apps.iosWidget.title'),
      value: 'iosWidget',
    },
  ];
});

const lottieRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (lottieRef.value) {
    lottie.loadAnimation({
      container: lottieRef.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieDownloadAnimationData,
    });
  }
});
</script>

<style lang="scss" scoped>
.animation {
  height: 200px;
  margin: auto;
  margin-bottom: 32px;
}

p {
  line-height: 1.6em;
}
</style>
