import ListGroup from './components/ListGroup';
import LabelComponent from './components/LabelComponent';
import { useReducer } from 'react';


var cities = [
  'Prague',
  'Brno',
  'Madrid',
]

interface State {
  selectedIndex: number;
}

interface Action {
  type: string;
  value: number
}

const initialState: State = { selectedIndex: 0 };

function reducer(state: State, action: Action) {
  return { ...state, selectedIndex: action.value }
}

function App() {
  var [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <LabelComponent selectedCity={cities[state.selectedIndex]} />
      <ListGroup selectedIndex={state.selectedIndex} cities={cities} dispatch={dispatch}/>
    </>
  )
}

export default App;