import { connect } from 'react-redux'
import {
  getUsers,
  fetchMessagesBegin,
  fetchMessagesError,
  fetchMessagesSuccess
} from '../actions'
import Dashboard from '../views/Dashboard/'
import { API } from '../const'

const mapStateToProps = state => {
  return {
    users: state.users,
    messages: state.messagesModule.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: dispatch(getUsers()),
    getMessages: async function() {
      dispatch(fetchMessagesBegin())
      try {
        const res = await API.get()
        dispatch(fetchMessagesSuccess(res.data.data))
      } catch(err) {
        dispatch(fetchMessagesError(err))
      }
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer