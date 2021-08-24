import pic from '../../assets/images/avatarHolder.png'
import { Link } from 'react-router-dom'
import React from 'react'

type PropsType = {
  state: any
  id: number
}

const Card: React.FC<PropsType> = ({ id, state }) => {
  return (
    <div className="card m-3" style={{ width: "14rem" }}>
      <img
        className="card-img-top"
        src={state.photos.large || pic}
        height="222"
        alt="avatar"
        style={{ fontSize: 0 }}
      />
      <div className="card-body h-100 d-flex flex-column justify-content-between">
        <div className="mb-2">
          <h5 className="card-title">{state.name}</h5>
          <p className="card-text">{state.status || 'Hi! i am React JS Junior developer'}</p>
        </div>
        <Link className="btn btn-outline-primary" to={'/users/' + id}>More</Link>
      </div>
    </div>
  )
}

export default Card;