import { EmployeeView } from '../models/EmployeeView'

type EmployeeActionBase = {
  type: string,  
}

type LoadEmployeeAction = EmployeeActionBase & {
  type: 'loaded'
  data: EmployeeView[]
}

type SelectEmployeeAction = EmployeeActionBase & {
  type: 'selected'
  surname: string
}

export type EmployeeAction = LoadEmployeeAction | SelectEmployeeAction