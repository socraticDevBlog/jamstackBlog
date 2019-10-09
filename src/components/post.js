import React from 'react'
import {Link} from 'gatsby'
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'

const Post = ({title, author, path, date, body}) => {
   return(
      <Card>
         <CardBody>
            <CardTitle>
               {title}
            </CardTitle>
            <CardSubtitle>
               <span className="text-info">{date}</span> par
               <span className="text-info">{author}</span>
            </CardSubtitle>
            <CardText>{body}</CardText>
           <Link to={path} className="btn.btn-outline-primary.float-right">Lire davantage ...</Link>
         </CardBody>
      </Card>
   )
}

export default Post
