import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
      <li><NavLink className="btn red" to='/stats'>Canlı İzleme</NavLink></li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
        <li><NavLink to='/profile' className="btn btn-floating red darken-1 hide-on-med-and-down">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
