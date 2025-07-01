import { createContext } from "react";
import { EmployeeView } from "../models/EmployeeView";
import { EmployeeAction } from "../actions/actions";

export const StateContext = createContext<EmployeeView[]>([])
export const DispatchContext = createContext<React.Dispatch<EmployeeAction>>(() => {})

