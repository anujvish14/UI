import React from 'react'
import { Link } from 'react-router-dom'

function ContactLink() {
  return (
    <Link to={"../Contact"} className="nav-link">Contact</Link>
  )
}

export default ContactLink