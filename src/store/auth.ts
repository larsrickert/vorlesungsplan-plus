import { defineStore } from 'pinia';
import config from '../configs';
import { User } from '../types/auth';

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      user: null as User | null,
    };
  },
  actions: {
    async login(): Promise<void> {
      this.user = {
        uid: '1',
        fullName: 'Max Mustermann',
      };
    },
    async logout(): Promise<void> {
      this.user = null;
    },
  },
  getters: {
    isAuthenticated(): boolean {
      return config.auth.disabled || this.user != null;
    },
  },
});
