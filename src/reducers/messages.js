//changes states of messages in app
//in a reducer, always pass in a current state and action, and return a new state; if no state it is set to empty array
import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ])
    default:
      return state
  }
}

export default messages