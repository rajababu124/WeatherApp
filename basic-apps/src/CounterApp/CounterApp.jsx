import React, {useReducer} from 'react'

const CounterApp = () => {
    const initialState = 0;
    const reducer = (state, action) => {
         switch (action){
            case 'increment' :
                return state + 1
            case 'decrement' :
                return state > 0 ? state - 1 : state
            case 'reset' :
                return initialState
            case 'default' :
                return state
         }
    } 
   const [state, dispatch] = useReducer( reducer, initialState)
  return (
      <>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <h3>{state}</h3>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )
}

export default CounterApp
