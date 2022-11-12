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

          <p>I would *never* do that to you. They were just sucked into space. How long can two people talk about nothing? I think you've let your personal feelings cloud your judgement. Maybe we better talk out here; the observation lounge has turned into a swamp. I suggest you drop it, Mr. Data. What? We're not at all alike! Talk about going nowhere fast. The Federation's gone; the Borg is everywhere! When has justice ever been as simple as a rule book? In all trust, there is the possibility for betrayal. For an android with no feelings, he sure managed to evoke them in others. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. and attack the Romulans. But the probability of making a six is no greater than that of rolling a seven. I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. About four years. I got tired of hearing how young I looked. The look in your eyes, I recognize it. You used to have it for me.</p>
        </section>
      </div>
    </>
  )
}

export const Head = () => <title>Home Page</title>
