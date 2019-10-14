import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Button, Badge } from "reactstrap"
import { slugify } from "../util/utilFunctions"

const tagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext
  return (
    <Layout pageTitle="Tous les sujets">
      <SEO title="Sujets" keywords={["sujets", "tags", "thèmes"]} />
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ marginBottom: "10px" }}>
            <Button color="info" href={`/tag/${slugify(tag)}`}>
              {tag} <Badge color="light">{tagPostCounts[tag]}</Badge>
            </Button>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default tagsPage
