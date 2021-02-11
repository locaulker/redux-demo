const redux = require("redux")
const createStore = redux.createStore

const BUY_CAKE = "BUY_CAKE"

// Action
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  }
}

/**
 * Reducer - initial state
 * (previousState,action) => newState
 */
const initialState = {
  numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
