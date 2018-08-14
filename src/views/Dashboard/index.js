import React, { Component } from 'react';
import io from 'socket.io-client'
import './Dashboard.css';
import Message from '../../containers/Message'
import MessageForm from './components/MessageForm/'
import { API } from '../../const'

let socket

class App extends Component {
  constructor(props) {
    super(props)
  }

  // socketPost(msg) {
  //   socket.emit('message', msg)
  // }

  // async removeMessage (id) {
  //   console.log('removing msg', id)
  //   try {
  //     const res = await API.delete(`/${id}`)
  //     const localMessages = [...this.state.messages]
  //     console.log(localMessages)
  //     this.setState({
  //       messages: localMessages.filter(msg => msg.id !== id)
  //     })
  //     socket.emit('removed')
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  componentDidMount () {
    this.props.getMessages()
  //   this.getMessages()
  //   socket = io.connect('http://localhost:3030/')
  //   socket.on('message', msg => {
  //     this.getMessages()
  //   })
  //   socket.on('removed', () => {
  //     this.getMessages()
  //   })
  }

  render() {
    return (
      <div className="App">
        <ul className="messages-list">
          {this.props.messages.map(message => 
            <Message message={message} key={message.id} removeMessage={this.removeMessage} />
          )}
        </ul>
        <MessageForm />
      </div>
    );
  }
}

export default App;
