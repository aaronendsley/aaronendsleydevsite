import * as React from "react"
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { indexHero, heroImageContainer, heroImage, indexContent } from '../styles/index.module.css';

export const query = graphql`
  query HeroPictureQuery {
  Hero:file(name: {eq: "Aaron"}) {
    childImageSharp {
      gatsbyImageData(placeholder:TRACED_SVG)
    }
  },
  SpacePic:file(name: {eq: "Aaron_in_Space"}) {
    childImageSharp {
      gatsbyImageData(placeholder:TRACED_SVG)
    }
  }
}
`

export default function IndexPage({ data }) {

  return (
    <>
      <div className={indexHero}>
        <h2>
          <span>Hello World!</span>
          <span>I'm Aaron!</span>
        </h2>
        <div className={heroImageContainer}>
          <GatsbyImage className={heroImage} image={getImage(data.Hero)} alt="A Photo of Aaron Endsley" />
        </div>
      </div>
      <div className={indexContent}>
        <section className="post-decorator">
          <p>&emsp; I am from Lawton, Oklahoma. I am a Christian, husband and a dad to four, I love playing video games, reading,  and watching Star Trek with my kids!</p>
          <p> &emsp; I love to write code in HTML, CSS and JavaScript. I have been writing code for web pages since I was twelve years old, when my Dad taught me how to write HTML. I went to college and earned a bachelors degree in Multimedia Design, shortly after, I discovered CSS, and then JavaScript shortly after that. I am self taught and have been a front end web developer professionally for the last six years.  I love to learn new web technologies and experiment with them. I like to solve problems that help others or make their work simpler and have done this in my own professional work and those opportunity's are a joy to me when they come. </p>
          <div className="image-decorator"><GatsbyImage image={getImage(data.SpacePic)} alt="A Photo of Aaron Endsley in a SpaceShip made for his children" /></div>
          <p>&emsp; Soon, you will find on this site my portfolio. I plan to try to write about things that I have learned, and show off projects I have been working on. If you like what you see here please feel free to send me an e- mail or contact me on any of the links below!</p>
          <p> Soli Deo Gloria <span> - Aaron Endsley</span> </p>


        </section>
      </div>
    </>
  )
}

export const Head = () => <title>Home Page</title>
