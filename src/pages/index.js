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
  console.log(data);
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
          <p>We could cause a diplomatic crisis. Take the ship into the Neutral Zone Mr. Crusher, ready a collision course with the Borg ship. Damage report! You're going to be an interesting companion, Mr. Data. Shields up! Rrrrred alert! Commander William Riker of the Starship Enterprise. Not if I weaken first. We have a saboteur aboard. Travel time to the nearest starbase? A surprise party? Mr. Worf, I hate surprise parties.</p>
          <div className="image-decorator">          <GatsbyImage image={getImage(data.SpacePic)} alt="A Photo of Aaron Endsley in a SpaceShip made for his children" /></div>

          <p>I would *never* do that to you. They were just sucked into space. How long can two people talk about nothing? I think you've let your personal feelings cloud your judgement. Maybe we better talk out here; the observation lounge has turned into a swamp. I suggest you drop it, Mr. Data. What? We're not at all alike! Talk about going nowhere fast. The Federation's gone; the Borg is everywhere!</p>
        </section>
      </div>
    </>
  )
}

export const Head = () => <title>Home Page</title>
