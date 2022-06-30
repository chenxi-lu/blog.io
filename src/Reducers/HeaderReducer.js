const initialState = {
  currentTab: 'index'
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
      case 'SET_CURRENT_TAB': return {
          ...state,
          currentTab: action.payload
      }
      default: return state
  }
}
export default reducer;