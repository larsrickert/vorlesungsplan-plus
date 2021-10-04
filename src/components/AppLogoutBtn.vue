<template>
  <IonChip
    v-if="authStore.user"
    :disabled="isDisabled"
    class="logout"
    color="primary"
    @click="logout"
  >
    <IonIcon :icon="logOutOutline" />
    <span>{{ t('auth.logout') }}</span>
  </IonChip>
</template>

<script lang="ts" setup>
import { showLoading } from '@/helpers/io';
import { useAuthStore } from '@/store/auth';
import { IonChip, IonIcon } from '@ionic/vue';
import { logOutOutline } from 'ionicons/icons';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const authStore = useAuthStore();

const isDisabled = ref<boolean>(false);

const router = useRouter();

const logout = async () => {
  isDisabled.value = true;
  const loading = await showLoading(t('auth.isLoggingOut'));
  await authStore.logout();
  await router.push('/login');
  isDisabled.value = false;
  await loading.dismiss();
};
</script>

<style lang="scss" scoped>
ion-icon {
  font-size: 24px;
}
</style>
