import { type FC } from "react";
import { type PropsWithChildren } from "react";
import { type ListItem } from "../types/ListItem";

type ListData = {
    items: ListItem[];
    onDelete: (delIndex: number) => void
}

type ListProps = PropsWithChildren<ListData>;

const ListComponent : FC<ListProps> = ({items, onDelete}) => {    
    const listRender = items.map(item => <li>{item.value}<button onClick={()=> onDelete(item.index)}>X</button></li>)

    return (
        <ul>
            {listRender}
        </ul>
    );
}

export default ListComponent