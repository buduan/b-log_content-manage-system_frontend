import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  id: 'appStore',
  state: () => ({
    message: '',
    isMenuOpen: false,
    hideHeader: false,
    hideFooter: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
  getters: {},
})
