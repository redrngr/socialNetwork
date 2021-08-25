import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux'
import pic from '../assets/images/avatarHolder.png'
import { RouteComponentProps } from 'react-router'
import { RootStateType } from '../redux/store'
import { useEffect } from 'react';
import { getProfile } from '../redux/redusers/profile-reducer';
import Loader from './Loader';

const mapStateToProps = (state: RootStateType) => ({
  profile: state.profile.profile,
  inProgress: state.profile.inProgress,
  ownId: state.common.id
})

type PropsType = PropsFromRedux & RouteComponentProps<{ id: string }>

const Profile: React.FC<PropsType> = ({ profile, ...props }) => {

  const [editMode, setEditMode] = useState(false)

  let id: number = props.match.params.id ? Number(props.match.params.id) : props.ownId

  useEffect(() => {
    props.getProfile(id)
  }, [id])

  const handleToggle = () => {
    setEditMode(!editMode)
  }

  if (props.inProgress) return <Loader message="Loading..." />

  return (
    <div className="d-flex mb-5 p-3" style={{ width: "100%" }}>
      <div className="d-flex flex-column">
        <img className="card-img-top" src={profile.photos.large || pic} alt="Pic" />
      </div>
      <div className="ms-3">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={profile.fullName || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-md-6">
            <label htmlFor="github" className="form-label">GITHUB</label>
            <input type="tel" className="form-control" id="github" value={profile.contacts.github || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-md-6">
            <label htmlFor="vk" className="form-label">VK</label>
            <input type="email" className="form-control" id="vk" value={profile.contacts.vk || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-md-6">
            <label htmlFor="facebook" className="form-label">FACEBOOK</label>
            <input type="text" className="form-control" id="facebook" value={profile.contacts.facebook || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-12">
            <label htmlFor="instagram" className="form-label">INSTAGRAM</label>
            <input type="text" className="form-control" id="instagram" value={profile.contacts.instagram || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-12">
            <label htmlFor="twitter" className="form-label">TWITTER</label>
            <input type="text" className="form-control" id="twitter" value={profile.contacts.twitter || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-12">
            <label htmlFor="website" className="form-label">WEBSITE</label>
            <input type="text" className="form-control" id="website" value={profile.contacts.website || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-md-6">
            <label htmlFor="youtube" className="form-label">YOUTUBE</label>
            <input type="text" className="form-control" id="youtube" value={profile.contacts.youtube || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          <div className="col-md-2">
            <label htmlFor="mainLink" className="form-label">MAINLINK</label>
            <input type="text" className="form-control" id="mainLink" value={profile.contacts.mainLink || ''} disabled={!editMode} readOnly={!editMode} />
          </div>
          {(id === props.ownId) &&
            (<div className="d-flex justify-content-between mt-3 mb-3">
              {editMode ?
                <button type="submit" className="btn btn-success ms-3">Save changes</button>
                : <div className="btn btn-primary" onClick={handleToggle}>Edit profile</div>}
            </div>)}
        </form>
      </div>
    </div>
  )
}

const connector = connect(mapStateToProps, { getProfile })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Profile)
