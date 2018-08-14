import { connect } from 'react-redux'
import {
  removeMessage
} from '../actions'
import Message from '../views/Dashboard/components/Message/'
import { API } from '../const'

const mapDispatchToProps = dispatch => {
  return {
    removeMessage: async function(id) {
      try {
        const res = await API.delete(`/${id}`)
        dispatch(removeMessage(res.data.id))
      } catch (err) {
        console.log(err)
      }
    }
  }
}

const MessageContainer = connect(
  null,
  mapDispatchToProps
)(Message)

export default MessageContainer