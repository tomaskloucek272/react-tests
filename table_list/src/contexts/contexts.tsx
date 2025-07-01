import { createContext, useState, ReactNode } from "react";
import { PersonData } from "../model/PersonData";

type NullablePerson = PersonData | null;

// Define the type of the context
interface DataContextType {
    state: NullablePerson;
    setState: React.Dispatch<React.SetStateAction<NullablePerson>>;
}

// Provide an initial value with a proper type
const DataContext = createContext<DataContextType | null>(null);

// Define props type for AppProvider
interface AppProviderProps {
    children: ReactNode;
}


export function AppProvider({ children }: AppProviderProps) {
    const [state, setState] = useState<NullablePerson>(null);

    const contextData : DataContextType = {
        state,
        setState,
    };

    return (
        <DataContext.Provider value={contextData}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
