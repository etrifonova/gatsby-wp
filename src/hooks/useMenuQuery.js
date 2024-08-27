import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            parentId
            id
            url
            childItems {
              nodes {
                label
                url
                title
                id
              }
            }
          }
        }
      }
    }
  `)
  
  return data;
}
