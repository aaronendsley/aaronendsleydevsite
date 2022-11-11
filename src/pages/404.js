import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const NotFoundPage = () => {
  return (
    <div style={pageStyles}>

      <Link to="/">Go home</Link>.

    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
