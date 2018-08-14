import { combineReducers } from 'redux'
import {
  SET_USER
} from './actions'
import API from './const'

const messagesState = {
  messages: [],
  loading: false,
  error: null
}

function messagesModule (state = messagesState, action) {
  switch(action.type) {
    case 'FETCH_MESSAGES_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_MESSAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        messages: action.payload.messages
      }
    case 'FETCH_MESSAGES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        messages: []
      }
    case 'ADD_MESSAGE':
      return [
        ...state.messages,
        {
          message: action.message,
          name: action.username
        }
      ]
    case 'REMOVE_MESSAGE':
      return {
        ...state,
        messages: state.messages.filter(msg => msg.id !== action.payload.id)
      }
      
    default:
      return state
  }
}

function usersModule (state = [], action) {
  switch(action.type) {
    case 'GET_USERS':
      return state
    default:
      return state
  }
}

function user (state = '', action) {
  switch(action.type) {
    case 'SET_USER':
      return action.user
    default:
      return state
  }
}

const storeReducers = combineReducers({
  messagesModule,
  usersModule,
  user
})

export default storeReducers