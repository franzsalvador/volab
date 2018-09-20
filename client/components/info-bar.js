import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'

export default class InfoBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFollowing: false,
      messageModal: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnFollow = this.handleUnFollow.bind(this)
    this.handleSendMessage = this.handleSendMessage.bind(this)
  }
  componentDidMount() {
    const userFollowing = this.props.user.following
    const { displayName } = this.props
    const artist = displayName.replace('%20', ' ')
    userFollowing.includes(artist) ? this.setState({ isFollowing: true }) : this.setState({ isFollowing: false })
  }
  toggle() {
    this.setState({
      messageModal: !this.state.messageModal
    })
  }
  handleFollow() {
    const user = this.props.user.displayName
    const artistFollowed = this.props.artist.displayName
    const { updateUser, updateArtist } = this.props
    const urlFollow = 'artists/follow/' + user
    const urlFollowedBy = 'artists/follow/' + artistFollowed

    const reqFollow = {
      method: 'PUT',
      body: JSON.stringify({ following: artistFollowed }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlFollow, reqFollow)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))

    const reqFollowedBy = {
      method: 'PUT',
      body: JSON.stringify({ followers: user }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlFollowedBy, reqFollowedBy)
      .then(res => res.ok ? res.json() : null)
      .then(artist => updateArtist(artist))
      .catch(err => console.error(err))

    this.setState({ isFollowing: true })

  }
  handleUnFollow() {
    const user = this.props.user.displayName
    const artistUnFollowed = this.props.artist.displayName
    const { updateUser, updateArtist } = this.props
    const urlUnFollow = 'artists/unfollow/' + user
    const urlUnFollowedBy = 'artists/unfollow/' + artistUnFollowed

    const reqUnFollow = {
      method: 'PUT',
      body: JSON.stringify({ following: { $in: [ artistUnFollowed ] } }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlUnFollow, reqUnFollow)
      .then(res => res.ok ? res.json() : null)
      .then(user => user && updateUser(user))
      .catch(err => console.error(err))

    const reqUnFollowedBy = {
      method: 'PUT',
      body: JSON.stringify({ followers: { $in: [ user ] } }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(urlUnFollowedBy, reqUnFollowedBy)
      .then(res => res.ok ? res.json() : null)
      .then(artist => updateArtist(artist))
      .catch(err => console.error(err))

    this.setState({ isFollowing: false })
  }
  handleSendMessage(event) {
    event.preventDefault()
    const { toggle } = this
    const sender = this.props.user.email
    const recipient = this.props.artist.email
    const sendMessageForm = event.target
    const formData = new FormData(sendMessageForm)
    const messageDetails = {}
    for (const pair of formData.entries()) {
      messageDetails[pair[0]] = pair[1]
      messageDetails.from = sender
      messageDetails.to = recipient
    }
    toggle()
    const url = '/email'
    const req = {
      method: 'POST',
      body: JSON.stringify(messageDetails),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, req)
      .then(res => res.ok ? res.json() : null)
      .catch(err => console.error(err))
  }
  render() {
    const { handleFollow, handleUnFollow, toggle, handleSendMessage } = this
    const { user } = this.props
    const { isFollowing } = this.state
    const currentArtistPage = this.props.artist.displayName
    return (
      <div>
        <div className="info-bar pt-2">
          <div className="px-4 font-weight-bold float-left">Tracks</div>
          <div className="px-4 float-right">
            {user.displayName !== currentArtistPage &&
            <div>
              <Button className="btn btn-outline-dark btn-sm mb-3 mx-2 email-icon" onClick={toggle} type="button">
                <span className="fas fa-envelope"></span>
              </Button>
              <Button className="btn btn-outline-dark btn-sm mb-3" type="button" onClick={isFollowing ? handleUnFollow : handleFollow}>{isFollowing ? 'Following' : 'Follow'}</Button>
            </div>
            }
          </div>
        </div>
        <hr className="mx-4"/>
        <div>
          <Modal isOpen={this.state.messageModal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{'To: ' + currentArtistPage}</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSendMessage}>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input type="text" name="subject" id="subject"/>
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input type="textarea" name="text" id="text"/>
                </FormGroup>
                <Button className="btn btn-outline-dark btn-sm float-right ml-2" type="submit">Send</Button>
              </Form>
              <Button className="btn btn-outline-dark btn-sm float-right" onClick={this.toggle}>Cancel</Button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}
