import { type PropsWithChildren, type FC, useRef } from "react";
import { type ValueItem } from "../types/Model";

type FormComponentProps = PropsWithChildren<ValueItem>;

const FormComponentTest: FC<FormComponentProps> = ({item, onItemAdd}) => {
    const valueRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e)=> {
            e.preventDefault();

            const data = valueRef.current!.value

            e.currentTarget.reset()
            
            onItemAdd(data)
        }}>
            <label id="addItem">Item</label>
            <input aria-labelledby="addItem" data-testid="addItem" name="item" type="text" ref={valueRef} />                        
            <button data-testid="addButton">SUBMIT</button>
        </form>
    );
}

export default FormComponentTest;

