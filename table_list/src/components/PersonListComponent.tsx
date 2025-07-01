import { useContext } from "react";
import { PersonList } from "../model/PersonList";
import DataContext  from "../contexts/contexts";

function PersonListComponent({personsList}: PersonList) {
    const dataContext = useContext(DataContext)

    const rowMapper = personsList.map((person)=>
        <tr onClick={() => dataContext?.setState(person)}>
          <th>{person.age}</th>
          <td>{person.name}</td>
          <td>{person.surname}</td>
        </tr>
      )
    
    return (
      <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>surname</th>
            </tr>
          </thead>
          <tbody>
            {rowMapper}
          </tbody>
        </table>
      </>
    )
}

export default PersonListComponent;