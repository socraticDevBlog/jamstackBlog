import React from 'react'
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Button } from 'reactstrap'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const Post = ({title, author, path, date, body, fluid}) => {
   return(
      <Card>
         <Link to={path}>
            <Img className="card-image-top" fluid={fluid} />
         </Link>
         <CardBody>
            <CardTitle>
               <Link to={path}>{title}</Link>
            </CardTitle>
            <CardSubtitle>
               <span className="text-info">{date}</span> par{' '}
               <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
               <Link to={path} className="btn btn-outline-primary float-right">Lire davantage</Link>
         </CardBody>
      </Card>
   )
}

export default Post
