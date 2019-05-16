import React from "react";

interface Props {
  title: any
}

export class Title extends React.Component<Props, {}> {

  render() {
    return <h1>Kubernetes: {this.props.title} </h1>;
  }

}