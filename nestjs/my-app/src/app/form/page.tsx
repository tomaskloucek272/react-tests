'use client';
import { useActionState } from "react";
import serverAction from "./actions";

export default function FormPage() {
    const [state, formAction] = useActionState(serverAction, {status: null, list: []}); 

    const renderList = state.list.map(item=>(
        <li key={item}>{item}</li>
    ));

    return (
        <form action={formAction}>
            <label htmlFor="Name">Name: </label><p/>
            <input type="text" aria-label="Name" name="name"></input>
            <button type="submit">SUBMIT</button>
            <ul>
                {
                   renderList     
                }
            </ul>
        </form>
    );
};