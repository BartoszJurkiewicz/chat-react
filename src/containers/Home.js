import { connect } from 'react-redux'
import { setUser } from '../actions'
import Home from '../views/Home/'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: user => dispatch(setUser(user))
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer