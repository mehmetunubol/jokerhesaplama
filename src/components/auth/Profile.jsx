import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import 'moment/locale/tr'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.profile.email,
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      createdAt: props.profile.createdAt
    }
  };
  componentDidMount() {

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    if(!this.props.calculations) {
      return <div>Loading ...</div>
    }
    if(!this.state.createdAt) {
      return <Redirect to="/"/>
    }
    const id = this.props.auth.uid;
    let calculation = this.props.calculations.find((calc) => {
      return calc.userId === id;
    });
    let since = moment(this.state.createdAt.toDate()).fromNow()
    since = since.charAt(0).toUpperCase() + since.slice(1)
    moment.locale('tr');
    return (
      <div className="container topMargin">
        <div className="row m12">
          <div className="col m6">
            <div className="card-panel">
              <table>
                <thead>
                  <tr>
                      <th>Son Hesaplama</th>
                      <td>{moment(calculation.createdAt.toDate()).format('L')}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Toplam Ödenen</th>
                    <td>{calculation.calcTotal - calculation.joker} TL</td>
                  </tr>
                  <tr>
                    <th>Joker</th>
                    <td>{calculation.joker} TL</td>
                  </tr>
                  <tr>
                    <th>Yüzde</th>
                    <td>{calculation.percent}</td>
                  </tr>
                  <tr>
                    <th>Ortaklar</th>
                    <td>{calculation.pairs.join()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col m6">
            <div className="card-panel">
              <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Teşekkürler {this.state.firstName}</h5>
                <h6 className="grey-text text-darken-3">{since} üye oldun.</h6>
                <div className="input-field">
                  <input disabled  type="email" id='email' onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div className="input-field">
                  <input disabled type="text" id='firstName' onChange={this.handleChange} value={this.state.firstName}/>
                </div>
                <div className="input-field">
                  <input disabled type="text" id='lastName' onChange={this.handleChange} value={this.state.lastName}/>
                </div>
                {/*
                <div className="input-field">
                  <button className="btn orange lighten-1 z-depth-0">UPDATE</button>
                </div>
                */}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    calculations: state.firestore.ordered.calculations,
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'calculations', orderBy: ['createdAt', 'desc']

  }])
)(Profile)