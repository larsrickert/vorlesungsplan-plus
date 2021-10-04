import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';
import { defineStore } from 'pinia';

export const useNetworkStore = defineStore('network', {
  state() {
    return {
      status: {
        connected: false,
        connectionType: 'none',
      } as ConnectionStatus,
      listener: null as null | PluginListenerHandle,
    };
  },
  actions: {
    /**
     * Updates network status and adds listener that updates network status if not still listening.
     */
    async initListener(): Promise<void> {
      if (this.listener) return;
      this.status = await Network.getStatus();

      this.listener = await Network.addListener('networkStatusChange', (status) => {
        this.status = status;
      });
    },
    /**
     * Removes the network status listener if it exists.
     */
    async removeListener(): Promise<void> {
      if (!this.listener) return;

      await this.listener.remove();
      this.listener = null;
    },
  },
});
