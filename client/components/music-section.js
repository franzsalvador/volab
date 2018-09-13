import React, { Component } from 'react'
import Parser from 'html-react-parser'

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
      <div>
        {links.map((link, index) => {
          return (
            <div key={ index }>
              { link }
            </div>)
        })}
      </div>
    )
  }
}
