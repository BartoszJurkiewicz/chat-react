import React, { Component } from 'react'
import './Home.css'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: '20px'
  }
})

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput (e) {
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit () {
    this.props.history.push('/dashboard')
    this.props.setUser(this.state.user)
  }

  render() {
    return (
      <section className="splash">
        <form onSubmit={this.handleSubmit} className="user-form">
          <TextField required id="name" name="name" label="Username" value={this.state.user} onChange={this.handleInput} className="user-form__input input" />
          <Button variant="contained" color="primary" className={`user-form__button ${this.props.classes.button}`} type="submit">
            Join
          </Button>
        </form>
      </section>
    )
  }
}

export default withStyles(styles)(Home)