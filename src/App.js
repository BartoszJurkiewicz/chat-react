import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';
import Message from './components/Message/'
import MessageForm from './components/MessageForm/'
import { API } from './const'

let socket

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.getMessages = this.getMessages.bind(this)
    this.removeMessage = this.removeMessage.bind(this)
  }

  async getMessages() {
    try {
      const res = await API.get('')
      this.setState({
        messages: res.data.data
      })
    } catch(err) {
      console.log(err)
    }
  }

  socketPost(msg) {
    socket.emit('message', msg)
  }

  async removeMessage (id) {
    console.log('removing msg', id)
    try {
      const res = await API.delete(`/${id}`)
      const localMessages = [...this.state.messages]
      console.log(localMessages)
      this.setState({
        messages: localMessages.filter(msg => msg.id !== id)
      })
      socket.emit('removed')
    } catch(err) {
      console.log(err)
    }
  }

  componentDidMount () {
    this.getMessages()
    socket = io.connect('http://localhost:3030/')
    socket.on('message', msg => {
      this.getMessages()
    })
    socket.on('removed', () => {
      this.getMessages()
    })
  }

  render() {
    return (
      <div className="App">
        <ul className="messages-list">
          {this.state.messages.map(message => 
            <Message message={message} key={message.id} removeMessage={this.removeMessage} />
          )}
        </ul>
        <MessageForm socketPost={this.socketPost} />
      </div>
    );
  }
}

export default App;
