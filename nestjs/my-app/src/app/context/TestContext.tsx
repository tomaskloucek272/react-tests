import { createContext } from 'react'

export type Action = {
    type: string,
    text: string
}

export const DataContext = createContext<number | null>(null);
export const ActionContext = createContext<React.Dispatch<Action> | null>(null);

