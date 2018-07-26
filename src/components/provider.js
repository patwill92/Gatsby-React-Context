import React, { Component } from 'react'

const MyContext = React.createContext()

const { Provider } = MyContext

export default class MyProvider extends Component {
  state = {
    ...this.props.data,
  }

  changeTitle = () => {
    this.setState({title: 'De una papa'})
  }
  
  render() {
    return <Provider value={{
      state: this.state,
      funcs: {
        changeTitle: this.changeTitle
      }
    }}>{this.props.children}</Provider>
  }
}

export const Consumer = MyContext.Consumer
