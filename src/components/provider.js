import React, { Component } from "react";
import { connect } from "react-redux";

import { hydrate } from "../store";

const MyContext = React.createContext();

const { Provider } = MyContext;

class MyProvider extends Component {
  state = {
    ...this.props.data,
    ...this.props.reduxContext
  };

  changeTitle = () => {
    this.setState({ title: "De una papa" });
  };

  componentDidMount = async () => {
    await this.props.hydrate({ ...this.state, redux: true });
    console.log(this.props);
  };

  render() {
    const redux = this.props.reduxContext.redux;
    return (
      <Provider
        value={{
          state: !redux ? this.state : this.props.reduxContext,
          funcs: {
            changeTitle: this.changeTitle
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default connect(
  ({ reduxState }) => ({ reduxContext: reduxState }),
  { hydrate }
)(MyProvider);

export const Consumer = MyContext.Consumer;
