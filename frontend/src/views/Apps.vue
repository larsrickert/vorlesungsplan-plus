<template>
  <IonPage>
    <AppHeader :title="t('apps.installVorlesungsplanPlus')" />

    <IonContent :fullscreen="true">
      <div class="page__content">
        <div ref="lottieRef" class="animation"></div>

        <AppSegment v-model="selectedSegment" :options="segments" />

        <template v-if="selectedSegment === 'iosWidget'">
          <div class="widget__wrapper">
            <img
              class="widget__img"
              src="../assets/ios-widget.jpg"
              :alt="t('apps.iosWidget.title')"
            />

            <div>
              <p>{{ t('apps.iosWidget.description') }}</p>

              <p v-if="settingsStore.iosWidgetVersion">
                <strong>
                  {{
                    t('apps.iosWidget.installedVersion', {
                      version: settingsStore.iosWidgetVersion,
                    })
                  }}
                </strong>
              </p>

              <IonChip color="medium" @click="downloadWidget">
                {{ t('apps.iosWidget.download') }}
                <span v-if="widgetVersion" class="widget__version">
                  {{ `(${t('global.appVersion', { version: widgetVersion })})` }}
                </span>
                <IonIcon :icon="apps" />
              </IonChip>
            </div>
          </div>

          <ol>
            <li>
              <a href="https://apps.apple.com/de/app/scriptable/id1405459188" target="_blank">{{
                t('apps.iosWidget.steps.installScriptable')
              }}</a>
            </li>
            <li>
              {{ t('apps.iosWidget.steps.downloadWidget') }}
            </li>
            <li>
              {{ t('apps.iosWidget.steps.openWithScriptable') }}
            </li>
            <li>
              {{ t('apps.iosWidget.steps.addToHomescreen') }}
            </li>
            <li>
              {{
                t('apps.iosWidget.steps.editWidget', {
                  courses: settingsStore.courses.join(', ') || '-',
                })
              }}
            </li>
          </ol>
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
import { computed, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import lottieDownloadAnimationData from '../assets/lottie/download.json';
import axiosInstance from '../axios';
import AppHeader from '../components/AppHeader.vue';
import AppSegment from '../components/AppSegment.vue';
import config from '../configs';
import { navigate } from '../helpers/misc';
import { useSettingsStore } from '../store/settings';
import { SelectOption } from '../types/misc';

const { t } = useI18n();
const settingsStore = useSettingsStore();
const router = useRouter();

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
const selectedSegment = ref<string>(
  segments.value.find((s) => s.value === router.currentRoute.value.query.type)
    ? (router.currentRoute.value.query.type as string)
    : 'apps'
);

watch(selectedSegment, (newValue) => {
  router.replace({
    path: router.currentRoute.value.path,
    query: {
      type: newValue !== 'apps' ? newValue : undefined,
    },
  });
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

const widgetVersion = ref('');

const fetchWidgetVersion = async () => {
  if (widgetVersion.value) return;

  try {
    const { data } = await axiosInstance.get<{ version: string }>('ios/widget/version');
    widgetVersion.value = data.version;
  } catch (e) {
    console.error('Error while fetching widget version', e);
  }
};
fetchWidgetVersion();

const downloadWidget = async () => {
  await navigate(`${config.api.host}/ios/widget`);

  await fetchWidgetVersion();
  if (widgetVersion.value) await settingsStore.changeIosWidgetVersion(widgetVersion.value);
};
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';

.animation {
  height: 200px;
  margin: auto;
  margin-bottom: 32px;
}

p,
li {
  line-height: 1.6em;
}

.widget {
  &__img {
    height: 200px;
    width: 200px;
    border-radius: var(--app-border-radius-l);
    box-shadow: var(--app-box-shadow);
  }

  &__wrapper {
    display: flex;
    gap: 32px;
    margin-bottom: 32px;

    ion-chip {
      margin: 0;
    }

    @include breakpoint(m) {
      gap: 20px;
      flex-direction: column;
    }
  }

  &__version {
    margin-left: 4px;
  }
}
</style>
