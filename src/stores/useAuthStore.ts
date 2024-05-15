import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  // state
  const userIsAuthenticated = ref( false );
  // computed
  // actions/methods

  return { userIsAuthenticated };
});
