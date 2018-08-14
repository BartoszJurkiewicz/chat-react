import React, { Component } from 'react';
import './Message.css';
import PropTypes from 'prop-types'
import moment from 'moment'
import { API } from '../../../../const'

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const date = moment(this.props.message.createdAt).format('DD/MM/YYYY@HH:mm:ss')
    return (
      <li className="message">
        <p>
          {date}
        </p>
        <p>
          From: {this.props.message.name}
        </p>
        <p>
          {this.props.message.message}
        </p>
        <button onClick={() => this.props.removeMessage(this.props.message.id)}>X</button>
      </li>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  removeMessage: PropTypes.func.isRequired
}

export default Message