import React from 'react'
import PropTypes from 'prop-types'
import * as actions from './actions'
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    const { count, onClickPlus, onClickMinus } = this.props
    return (
      <div>
        <p>
          <span>Count: {count}</span>
        </p>
        <div>
          <button onClick={onClickPlus}>+1</button>
          <button onClick={onClickMinus}>-1</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickPlus: () => dispatch(actions.INCREMENT()),
    onClickMinus: () => dispatch(actions.DECREMENT())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
