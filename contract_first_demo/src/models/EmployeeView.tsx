import { Employee } from "@mytest/openapi-client";

export type EmployeeView = Employee & {
     selected: boolean;
};