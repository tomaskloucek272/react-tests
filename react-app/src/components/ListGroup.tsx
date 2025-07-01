interface ListGroupApi {
    cities: string[],
    selectedIndex: number,
    dispatch: React.Dispatch<any>
}


function ListGroup({cities, selectedIndex, dispatch}: ListGroupApi) {
    //cities = []

    const clazz = (index: number) => ((index === selectedIndex) ? "list-group-item active" : "list-group-item")

    return (
    <>
    <ul className="list-group">
        {cities.map
        ((city, index)=> 
            <li key={index} className={clazz(index)} onClick={() => dispatch({value: index})}>{city}</li>
        )
        }
    </ul>
    </> );
}

export default ListGroup