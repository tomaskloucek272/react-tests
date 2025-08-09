'use client';

import ButtonComponent from "./ButtonComponent";
import { DataContext, ActionContext, Action } from "./TestContext";

import { useReducer } from "react";

function reducer(data: number, action: Action) {
    if (action.type == 'increase') {
        console.log(action.text)
        return data + 1;
    } else {
        console.log(action.text)
        return data - 1;
    }
}

export default function ContextPage() {      
    const [data, actions] = useReducer(reducer, 0);

    return (
        <DataContext.Provider value={0}>
            <ActionContext.Provider value={actions}>
                Data : {data} <br/>
                <ButtonComponent />
            </ActionContext.Provider>
        </DataContext.Provider>
    );
}