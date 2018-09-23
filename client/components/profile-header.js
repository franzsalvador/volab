import React, { Component } from 'react'
import { Modal, ModalBody } from 'reactstrap'

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    const { modal } = this.state
    const { toggle } = this
    const { displayName, firstName, lastName, city, country, imageUrl, backgroundImageUrl } = this.props.artist
    return (
      <div>
        <div className="profile-header p-4" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          <div className="profile-image rounded-circle float-md-left border" onClick={toggle} style={{ backgroundImage: `url(${imageUrl})` }}></div>
          <p className="profile-display-name mb-2 mt-1 profile-details"><span className="py-1 px-2">{displayName}</span></p>
          <p className="profile-details mb-2"><span className="py-1 px-2">{firstName + ' ' + lastName}</span></p>
          <p className="profile-details details-location"><span className="py-1 px-2">{city + ', ' + country}</span></p>
        </div>
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalBody>
              <div className="profile-image-modal border" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}
