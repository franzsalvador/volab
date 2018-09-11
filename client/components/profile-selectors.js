import React from 'react'

export default class ProfileSelectors extends React.Component {
  constructor(props) {
    super(props)
    this.handleClickProducer = this.handleClickProducer.bind(this)
    this.handleClickVocalist = this.handleClickVocalist.bind(this)
  }

  handleClickProducer() {
    const { navigate } = this.props
    navigate({ path: 'create-producer-profile' })
  }

  handleClickVocalist() {
    const { navigate } = this.props
    navigate({ path: 'create-vocalist-profile' })
  }

  render() {
    const { handleClickProducer, handleClickVocalist } = this
    return (
      <div className="mb-5" id="profile-selectors">
        <button className="mr-2 btn btn-outline-light" onClick={ handleClickProducer } type="button">Producer</button>
        <button className="ml-2 btn btn-outline-light" onClick={ handleClickVocalist}type="button">Vocalist</button>
      </div>
    )
  }
}
