import * as React from "react"
import { Link } from "gatsby"
import { fourOhFour } from '../styles/404.module.css';
import Qoutes from '../utils/qoutes';
import chooseAQoute from "../utils/chooseQoute";

const NotFoundPage = () => {
  const qoutes = Qoutes;
  const Qoute = chooseAQoute(qoutes);
  console.log(Qoute);

  return (
    <div className={fourOhFour}>
      <h2>404</h2>
      <p>{Qoute}</p>
      <h3>The Page Requested Does not Exist</h3>
      <Link to="/" alt="Go Home">Go Back Home, to Where Your Journey Began</Link>

    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
