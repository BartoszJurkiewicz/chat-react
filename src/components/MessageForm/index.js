import React, { Component } from 'react'
import './MessageForm.css'
import moment from 'moment'
import PropTypes from 'prop-types'
import { API } from '../../const'

class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        message: '',
        name: 'Frontend'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  clearForm () {
    this.setState({
      message: {
        message: '',
        name: 'Frontend'
      }
    })
  }

  handleChange (e) {
    let message = {...this.state.message}
    message.message = e.target.value
    this.setState({message})
  }

  async handleSubmit (e) {
    e.preventDefault()
    try {
      const res = await API.post('', this.state.message)
      this.props.socketPost(this.state.message)
      this.clearForm()
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <input type="text" name="message" id="message" value={this.state.message.message} onChange={this.handleChange} />
        <button type="submit">Send</button>
      </form>
    )
  }
}

MessageForm.propTypes = {
  socketPost: PropTypes.func.isRequired
}

export default MessageForm