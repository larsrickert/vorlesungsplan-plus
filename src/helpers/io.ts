import { loadingController, toastController } from '@ionic/vue';

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
