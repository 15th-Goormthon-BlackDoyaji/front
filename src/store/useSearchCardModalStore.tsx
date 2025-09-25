import { create } from 'zustand';
import type { InfoItem } from '../pages/Home/Home';

interface SearchCardModalState {
  isOpen: boolean;
  info: InfoItem | null;
  openModal: (info: InfoItem) => void;
  closeModal: () => void;
}

export const useSearchCardModalStore = create<SearchCardModalState>((set) => ({
  isOpen: false,
  info: null,
  openModal: (info: InfoItem) =>
    set(() => ({
      info,
      isOpen: true,
    })),
  closeModal: () =>
    set(() => ({
      info: null,
      isOpen: false,
    })),
}));
