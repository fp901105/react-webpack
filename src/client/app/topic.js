import React from 'react'

export default function Topic(props) {
  return <h1>{props.match.params.name}</h1>
}