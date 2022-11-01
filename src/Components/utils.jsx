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
      className="btn btn-outline-light"
      onClick={props.click}
      type="submit" >
      Search
      </button>
  )
}

export function GeoButton(props) {
  return (
    <button
      className="btn btn-outline-light"
      onClick={props.click}
      type="submit" >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
      </button>
  )
}



