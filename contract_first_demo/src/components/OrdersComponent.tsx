import { useState } from "react"
import { OrderItem } from "../models/OrderItem"

type OrderProps = {
    orders: OrderItem[]
}


export function OrdersComponent({ orders }: OrderProps) {

    const [filter, setFilter] = useState('')

    const render = orders
    .filter(item=>filter == '' || item.product == filter)
    .map(o => (
        <tr>
        <td>{o.count}</td><td>{o.product}</td><td>{o.orderDate.toLocaleDateString()}</td>
        </tr>
    ))

    return (
        <>
        <input type="text" onChange={e=>setFilter(e.target.value)}/>
        <table>
            <th>Count</th>
            <th>Product</th>
            <th>OrderDate</th>
            {render}
        </table>
        </>
    )
}


