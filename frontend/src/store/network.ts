import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { defineStore } from 'pinia';

let listener: null | PluginListenerHandle = null;

export const useNetworkStore = defineStore('network', {
  state() {
    return {
      status: {
        connected: false,
        connectionType: 'none',
      } as ConnectionStatus,
    };
  },
  actions: {
    /**
     * Updates network status and adds listener that updates network status if not still listening.
     */
    async initListener(): Promise<void> {
      if (listener) return;
      this.status = await Network.getStatus();

      listener = await Network.addListener('networkStatusChange', (status) => {
        this.status = status;
      });
    },
    /**
     * Removes the network status listener if it exists.
     */
    async removeListener(): Promise<void> {
      if (!listener) return;

      await listener.remove();
      listener = null;
    },
  },
});
