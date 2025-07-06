import { type PropsWithChildren, type FC, useState } from "react";
import { type ValueItem } from "../types/Model";

type FormComponentProps = PropsWithChildren<ValueItem>;

const FormComponentTest: FC<FormComponentProps> = ({item, onItemAdd}) => {
    const [data, setForm] = useState(item)
    return (
        <form onSubmit={(e)=> {
            e.preventDefault();
            onItemAdd(data)
        }}>
            Item: 
            <input name="item" onChange={(e)=>{ setForm(e.target.value) }} value={data} />                        
            <button>SUBMIT</button>
        </form>
    );
}

export default FormComponentTest;

