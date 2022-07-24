import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Button, Badge } from "reactstrap"
import { slugify } from "../util/util-functions"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="Les sujets abordés">
      <Seo title="Sujets" keywords={["sujets", "tags", "thèmes"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="primary" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge pill bg="dark">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
