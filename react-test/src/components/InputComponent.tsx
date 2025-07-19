import { useState } from 'react';
import {type InputComponentProps} from '../types/InputComponentProps'

export default function InputComponent(props: InputComponentProps) {
    const [text, setText] = useState(props.startingText)

    return (
        <>
            <label>{props.label}</label>
            <input value = {text} onChange={(e) => {setText(e.currentTarget.value)} } {...props} />
        </>
    );
}