import React, { Props } from "react";

interface State {
  count: number;
}

export class Title extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = { count: 0 };

    setTimeout(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }

  render() {
    return <h1>Kubernetes: {this.state.count}</h1>;
  }

}