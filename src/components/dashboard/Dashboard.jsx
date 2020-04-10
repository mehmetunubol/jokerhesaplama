import React, { Component } from 'react';
import Calculation from './Calculation';
import Cover from './Cover'

class Dashboard extends Component {
  render() {
    return (
      <div >
        <Cover/>
        <div className="container">
          <div className="row">
              <Calculation/>
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard
