import { useEffect, useReducer } from 'react'
import { LoadServiceService } from '@mytest/openapi-client';
import { EmployeeItem } from './components/renderEmployees';
import { EmployeeView } from './models/EmployeeView'
import { EmployeeAction } from './actions/actions';
import { DispatchContext, StateContext } from './contexts/AppContexts';
import { OrdersComponent } from './components/OrdersComponent';


function reducer(state: EmployeeView[], action: EmployeeAction) {
  switch (action.type) {
    case 'loaded': {
      return action.data;
    }
    case 'selected': {
      return state.map(e=>({...e, selected: ((e.surname === action.surname) ? !e.selected : false)}))
    }
  }
}

function App() {

  const orders = [
        {count: 1, product: 'Apple iPhone 15', orderDate: new Date()},
        {count: 2, product: 'Trijicon RMR', orderDate: new Date()},
        {count: 3, product: 'Glock 19', orderDate: new Date()}
    ] 

  //const [data, setData] = useState<EmployeeView[] | null>(null)
  const [data, dispatch] = useReducer(reducer, [])

  const fetchData = async () => {
    try {
      console.info('Calling server...')
      await LoadServiceService.myoperation()
      .then((obj) => {
        const transformed = (obj.data || []).map(empl=> ({...empl, selected: false}) as EmployeeView)
        const loadAction: EmployeeAction = { type: 'loaded', data: transformed}
        dispatch(loadAction)
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    } catch(exc) {
      console.error(exc)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const mapRender = (data || []).map(item=><EmployeeItem employee={item} />)

  return (
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>
        <>
          <div className="align-middle">
            <h1>Title</h1>
            <ul className="list-group">
              {mapRender}
            </ul>
            <button value="OK" onClick={() => {
              const selectedData = data.filter(e=>e.selected)
              console.info(selectedData)
            }}>
              OK
            </button>

            <OrdersComponent orders={orders} />
          </div>
        </>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
