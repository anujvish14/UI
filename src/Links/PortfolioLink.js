import React from 'react'
import { Link } from 'react-router-dom'
function PortfolioLink() {
  return (
    <Link className='nav-link' to={"../Portfolio"}>Portfolio</Link>
  )
}

export default PortfolioLink