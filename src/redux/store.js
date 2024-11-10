import { configureStore } from "@reduxjs/toolkit"

// Temporary placeholder reducer
const placeholderReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
})

export default store
