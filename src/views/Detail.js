import React from 'react'

export default function Detail(props) {
  console.log(7777, props);
  return (
    <div>{props.match.params.filmId}</div>
  )
}
