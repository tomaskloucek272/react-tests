import { type FC } from "react"
import HeaderComponent from "./HeaderComponent"
import type { ListItem } from "../types/ListItem"
import ListComponent from "./ListComponent"
import FormComponentTest from "./FormTest"

interface GoalProps {
    name: string,
    title: string
}

interface GoalProps {
    test: string
}

const LocalComponent: FC<GoalProps> = ({name, title, test}) => {
    return (
        <>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <h3>{test}</h3>
            <HeaderComponent image={{src: "/src/assets/gal.jpg", alt: "Gal"}}>
                <p>This is my component</p>
            </HeaderComponent>
        </>
    );
}

const listItems: ListItem[] = [
    {index: 1, value: "Number one"},
    {index: 2, value: "Number two"},
    {index: 3, value: "Number three"},
    {index: 4, value: "Number four"},
]

export default function GoalComponent() {
    return (
        <>
            <FormComponentTest name="Enter name" surname="Enter surname" />
            <ListComponent items={listItems} />
            <LocalComponent name="aaa" title="sss" test="sws" />
        </>
    );
}