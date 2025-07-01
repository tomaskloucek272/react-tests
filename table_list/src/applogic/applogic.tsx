import { create  } from "zustand";

export type AppLogic  = {
    counter: number,
    setCounter: (newCounter: number) => void
}

  // The function that creates the store
export const useApplogic = create<AppLogic>((set) => ({
      counter: 0,  // Initial state
      setCounter: (newCounter) => set({ counter: newCounter }), // Action to update state
    }));
  