import React from "react"
import {
  Badge,
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { slugify } from "../util/util-functions"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Link to={`/${slug}`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={`/${slug}`}>{title}</Link>
        </CardTitle>
        <CardSubtitle>
          <span className="text-info">{date}</span> par{" "}
          <span className="text-info">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link to={`/tag/${slugify(tag)}`}>
                <Badge pill color="primary">{tag}</Badge>
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/${slug}`} className="btn btn-outline-primary float-right">
          Lire davantage
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
