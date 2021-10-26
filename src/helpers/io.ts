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
  /** Used for card style on ios. Only needed if multiple modals are open.
   * Default to: "document.getElementById('ion-router-outlet-content')"
   */
  presentingElement?: HTMLElement;
}

export async function showModal({ component, data, presentingElement }: ModalOptions) {
  const modal = await modalController.create({
    component,
    cssClass: 'app-modal',
    componentProps: data,
    presentingElement:
      presentingElement ?? document.getElementsByTagName('ion-router-outlet').item(0) ?? undefined,
    swipeToClose: true,
  });

  await modal.present();
}
