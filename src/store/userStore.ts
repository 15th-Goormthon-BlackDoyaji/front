import { createStore } from './zustand';

const USER_ID_KEY = 'userId';

export type UserState = {
  userId: string | null;
  setUserId: (id: number | string) => void;
  clearUserId: () => void;
};

// 초기값 로드
const initialUserId = (() => {
  try {
    return localStorage.getItem(USER_ID_KEY);
  } catch {
    return null;
  }
})();

export const useUserStore = createStore<UserState>('user-store', (set) => ({
  userId: initialUserId,

  setUserId: (id) => {
    const val = String(id);
    set((state) => {
      if (state.userId === val) return state;
      state.userId = val;
    });
    try {
      localStorage.setItem(USER_ID_KEY, val);
    } catch {}
  },

  clearUserId: () => {
    set((state) => {
      state.userId = null;
    });
    localStorage.removeItem(USER_ID_KEY);
  },
}));
// const userId = useUserStore((s) => s.userId);
