/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const PageTemplate = path.resolve("./src/templates/PageTemplate.js")

  return graphql(`
    {
      allContentfulPage {
        edges {
          node {
            name
            slug
            parentPage {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const Pages = result.data.allContentfulPage.edges
    Pages.forEach(page => {
      createPage({
        path: page.node.parentPage
          ? page.node.parentPage.slug + page.node.slug
          : page.node.slug,
        component: PageTemplate,
        context: {
          name: page.node.name,
        },
      })
    })
  })
}
