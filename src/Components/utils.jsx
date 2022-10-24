import React from 'react'

export function InputField(props) {
  return (
    <input
    className="form-control  me-2"
    value=  {props.value}
    onChange={props.onChange}
    type="search"
    placeholder="Search For Cities..."
    aria-label="Search"
/>
  )
}

export function Button(props) {
  return (
    <button
      className="btn btn-outline-success"
      onClick={props.click}
      type="submit" >
      Search
      </button>
  )
}
