import React, { Component } from 'react'
import Parser from 'html-react-parser'
import { Container } from 'reactstrap'

export default class MusicSection extends Component {
  render() {
    const { artist } = this.props
    const links = []
    for (const key in artist) {
      if (key.startsWith('soundcloudLink')) {
        links.push(Parser((artist[key]).replace(/'/, "'")))
      }
    }
    return (
      <Container className="clear-border border-right px-4 col-md-9 float-md-left">
        {links.map((link, index) => {
          return (
            <div key={ index }>
              { link }
            </div>)
        })}
      </Container>
    )
  }
}
