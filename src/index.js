import React from 'react'
import PropTypes from 'prop-types'
import localforage from 'localforage'

const Forage = {}

Forage.GetItem = class GetItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inProgress: false,
      value: undefined,
      error: undefined
    }
  }

  componentWillMount () {
    if (typeof window !== 'object') {
      return
    }

    if (this.props.lazy) {
      return
    }

    this.getValue()
  }

  componentWillUnmount () {
    this.willUnmount = true
  }

  getValue = () => {
    this.setState({ inProgress: true })
    localforage.getItem(this.props.itemKey, (err, value) => {
      if (this.willUnmount) return

      this.setState(() => ({ value, error: err, inProgress: false }))
    })
  }

  render () {
    if (!this.props.render) {
      return null
    }
    return (
      this.props.render({
        getValue: this.getValue,
        inProgress: this.state.inProgress,
        value: this.state.value,
        error: this.state.error
      }) || null
    )
  }
}

Forage.GetItem.propTypes = {
  itemKey: PropTypes.string,
  // Do not call getValue on mount
  lazy: PropTypes.bool,
  render: PropTypes.func
}

Forage.GetItem.defaultProps = {
  lazy: false
}

Forage.SetItem = class SetItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      inProgress: false,
      value: undefined,
      error: undefined
    }
  }

  componentWillMount () {
    if (typeof window !== 'object') {
      return
    }

    if (this.props.lazy) {
      return
    }

    this.setValue(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.value !==
      nextProps.value ||
      this.props.itemKey !==
      nextProps.itemKey) {
      console.log('setting new value')
      this.setValue(nextProps)
    }
  }

  componentWillUnmount () {
    this.willUnmount = true
  }

  setValue = (props) => {
    this.setState({ inProgress: true })
    localforage.setItem(props.itemKey, props.itemValue, (err, value) => {
      if (this.willUnmount) return

      this.setState(() => ({ value, error: err, inProgress: false }))
    })
  }

  render () {
    if (!this.props.render) {
      return null
    }
    return (
      this.props.render({
        setValue: this.setValue,
        inProgress: this.state.inProgress,
        value: this.state.value,
        error: this.state.error
      }) || null
    )
  }
}

export default Forage

Forage.SetItem.propTypes = {
  itemKey: PropTypes.string,
  itemValue: PropTypes.any,
  // Do not call getValue on mount
  lazy: PropTypes.bool,
  render: PropTypes.func
}

Forage.SetItem.defaultProps = {
  lazy: false
}
