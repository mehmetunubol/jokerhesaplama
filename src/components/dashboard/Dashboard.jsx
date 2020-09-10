import React, { Component } from 'react';
import Calculation from './Calculation';
import Cover from './Cover'
import { connect } from 'react-redux'

const Dashboard = (props) => {
  let logined = props.auth.uid;
  console.log(logined);
  return (
    <div >
      <Cover/>
      <div className="container">
        <div className="row">
            <Calculation/>
        </div>
        { !logined &&
          <div className="row">
            <div className="col-sm h-10 red darken-4 white-text" align="center"> <b>Üye olun !</b>&nbsp; Sonucu tek bir tıkla indirin!</div>
          </div>
        }
        
      </div>
    </div>
  )
  
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Dashboard)