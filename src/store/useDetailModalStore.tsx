import { create } from 'zustand';

interface DetailModalState {
  isOpen: boolean;
  selectedIndex: number;
  openModal: (index: number) => void;
  closeModal: () => void;
}

export const useDetailModalStore = create<DetailModalState>((set) => ({
  isOpen: false,
  selectedIndex: 0,
  openModal: (index: number) =>
    set(() => ({
      isOpen: true,
      selectedIndex: index,
    })),
  closeModal: () =>
    set(() => ({
      isOpen: false,
      selectedIndex: 0,
    })),
}));
