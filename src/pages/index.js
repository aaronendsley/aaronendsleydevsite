import * as React from "react"
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { indexHero, heroImageContainer, heroImage } from '../styles/index.module.css';

export const query = graphql`
  query HeroPictureQuery {
  file(name: {eq: "Aaron"}) {
    childImageSharp {
      gatsbyImageData(placeholder:DOMINANT_COLOR)
    }
  }
}
`

export default function IndexPage({ data }) {
  console.log(data);
  return (
    <>
      <div className={indexHero}>
        <h2>
          <span>Hello World!</span>
          <span>I'm Aaron!</span>
        </h2>
        <div className={heroImageContainer}>
          <GatsbyImage className={heroImage} image={getImage(data.file)} alt="A Photo of Aaron Endsley" />
        </div>
      </div>
    </>
  )
}

export const Head = () => <title>Home Page</title>
