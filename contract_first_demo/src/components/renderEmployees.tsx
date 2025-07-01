import { EmployeeView } from '../models/EmployeeView';
import { EmployeeAction } from '../actions/actions';
import { useContext } from 'react';
import { DispatchContext } from '../contexts/AppContexts';

type Props = {
    employee: EmployeeView
}

export function EmployeeItem({employee}: Props) {
    const action: EmployeeAction = {type: 'selected', surname: employee.surname}
    const selectAction = useContext(DispatchContext)
    return (
        <>
            <li key="0" className="list-group-item"><input type="checkbox" onChange={()=>selectAction(action)}  /></li>
            <li key={employee.name} className="list-group-item">Name: {employee.name}</li>
            <li key={employee.surname} className="list-group-item list-group-item-primary">Surname: {employee.surname}</li>
            <li key={employee.job} className="list-group-item">Job: {employee.job} </li>
            <li key={employee.department} className="list-group-item list-group-item-primary">Department: {employee.department} </li>
        </>
    )
}