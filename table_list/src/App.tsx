import PersonListComponent from "./components/PersonListComponent"
import { PersonDetail } from "./components/PersonDetail"
import { AppProvider } from "./contexts/contexts"
import axios from "axios"
import { useEffect, useState } from "react"
import { PersonData } from "./model/PersonData"
import { TestComponent } from "./components/TestComponent"
import { AppLogic, useApplogic } from "./applogic/applogic"

export type TestProps = {
  storeHook: () => AppLogic;  // `storeHook` should be a function that returns `AppLogic`
}

function App() {

  const [persons, setPersons] = useState<PersonData[]>([])

  useEffect(() => {
    axios
      .get<PersonData[]>(`http://localhost:8080/persons`)
      .then((response) => {
        setPersons(response.data);
      })
      .catch((_) => {
      });
  }, []);

  return (
    <AppProvider>
    <>
    <TestComponent storeHook={useApplogic}/>
     <PersonDetail /> 
     <PersonListComponent personsList={persons}/>
    </>
    </AppProvider>
  )
}

export default App
