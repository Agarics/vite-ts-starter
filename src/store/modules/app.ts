import { defineStore } from 'pinia'

import { store } from '@/store'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({}),
  actions: {},
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
