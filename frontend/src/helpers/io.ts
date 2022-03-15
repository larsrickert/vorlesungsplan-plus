import { ComponentProps, ComponentRef } from '@ionic/core';
import { loadingController, modalController, toastController } from '@ionic/vue';

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
  component: ComponentRef;
  /** Custom data that can be passed to the modal. */
  data?: ComponentProps;
}

export async function showModal({ component, data }: ModalOptions) {
  const modal = await modalController.create({
    component,
    cssClass: 'app-modal',
    componentProps: data,
    swipeToClose: true,
    // null is not supported as type for presentingElement
    // but it somehow as a nice card style effect that cannot be achieved
    // with setting the element to e.g. ion-router-outlet
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    presentingElement: null as any,
  });

  await modal.present();
}
