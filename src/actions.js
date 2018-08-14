export const setUser = (user) => {
  return {type: 'SET_USER', user}
}

export const getUsers = () => {
  return {type: 'GET_USERS'}
}

export const fetchMessagesBegin = () => {
  return {type: 'FETCH_MESSAGES_BEGIN'}
}

export const fetchMessagesSuccess = messages => {
  return {type: 'FETCH_MESSAGES_SUCCESS', payload: {messages}}
}

export const fetchMessagesError = error => {
  return {type: 'FETCH_MESSAGES_ERROR', payload: {error}}
}

export const removeMessage = id => {
  return {type: 'REMOVE_MESSAGE', payload: {id: id}}
}