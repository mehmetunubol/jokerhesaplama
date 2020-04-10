import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="container topMargin">
      <div className="card z-depth-4">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li className="smallMargin z-depth-3" key={item.id}>
                <span className="smallMargin">{item.content}</span>
                <div className="red-text smallMargin">{item.user} </div>
                <div className="note-date grey-text smallMargin">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 10, orderBy: ['time', 'desc']}
  ])
)(Notifications)