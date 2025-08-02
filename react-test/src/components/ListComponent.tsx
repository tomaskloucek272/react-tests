import { type FC } from "react";
import { type PropsWithChildren } from "react";
import { type ListItem } from "../types/ListItem";

type ListData = {
    items: ListItem[];
    onDelete: (delIndex: number) => void
}

type ListProps = PropsWithChildren<ListData>;

const ListComponent : FC<ListProps> = ({items, onDelete}) => {    
    const listRender = items.map(item => <li key={item.value}>{item.value}<button onClick={()=> onDelete(item.index)}>X</button></li>)

    return (
        <> 
        <label id="username">Username</label>
        <span aria-labelledby="username">Please enter your username</span>
        <ul>
            {listRender}
        </ul>
        </>
    );
}

export default ListComponent