import React from 'react';
import Nav from '../Nav';

export default class Home extends React.Component {
  render() {
      console.log(this.props);
    return (
      <div>
        <Nav />
        <h1>Home Page</h1>
      </div>
    )
  }
}
