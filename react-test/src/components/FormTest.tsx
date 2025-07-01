import { type PropsWithChildren, type FC, useState } from "react";
import { type Person } from "../types/Model";

type FormComponentProps = PropsWithChildren<Person>;

const FormComponentTest: FC<FormComponentProps> = ({name, surname}) => {
    const [data, setForm] = useState<Person>({
        name: name,
        surname: surname
    })
    return (
        <form onSubmit={()=> {
            alert(data.name + " "+data.surname);
        }}>
            Name: 
            <input name="name" onChange={(e)=>{ setForm(prev=> {
                return {...prev, [e.target.name] : e.target.value}
                }
                )}} value={data.name} />            
            Surname: 
            <input name="surname" onChange={(e)=>{ setForm(prev=>({...prev, [e.target.name] : e.target.value}))}} value={data.surname} />            
            <button>SUBMIT</button>
        </form>
    );
}

export default FormComponentTest;

