import {
  loadingController,
  modalController,
  toastController,
  type ModalOptions as IonicModalOptions,
} from '@ionic/vue';

export interface Toast {
  message: string;
  duration?: number;
  btn?: {
    text: string;
    onClick?: () => void;
  };
  color?: string;
}

export async function showToast({
  message,
  duration,
  color,
  btn,
}: Toast): Promise<HTMLIonToastElement> {
  const toast = await toastController.create({
    message,
    duration,
    cssClass: 'app-toast',
    buttons: btn
      ? [
          {
            text: btn.text,
            role: 'cancel',
            handler: () => btn?.onClick?.(),
          },
        ]
      : undefined,
    color,
  });
  await toast.present();
  return toast;
}
export async function showLoading(message: string): Promise<HTMLIonLoadingElement> {
  const loading = await loadingController.create({ message });
  await loading.present();
  return loading;
}

export interface ModalOptions {
  /** The component (page) that should be displayed in the modal. */
  component: IonicModalOptions['component'];
  /** Custom data that can be passed to the modal. */
  data?: IonicModalOptions['componentProps'];
}

export async function showModal({ component, data }: ModalOptions) {
  const modal = await modalController.create({
    component,
    cssClass: 'app-modal',
    componentProps: data,
  });

  await modal.present();
}
