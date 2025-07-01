import { type FC } from "react";
import { useState, type PropsWithChildren } from "react";
import { type ListItem } from "../types/ListItem";

type ListData = {
    items: ListItem[];
}

type ListProps = PropsWithChildren<ListData>;

const ListComponent : FC<ListProps> = ({items}) => {
    const [state, setItems] = useState<ListItem[]>(items);

    const listRender = state.map(item => <li>{item.value}<button onClick={()=>setItems(prev=>prev.filter(it=>it.index != item.index))}>X</button></li>)

    return (
        <ul>
            {listRender}
        </ul>
    );
}

export default ListComponent