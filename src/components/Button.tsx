import React from "react";

interface Props {
  title: any
}

export class Button extends React.Component<Props, {}> {

  render() {
    return <h1>Teste {this.props.title} </h1>;
  }

}