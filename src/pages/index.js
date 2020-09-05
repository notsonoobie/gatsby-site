import React from "react"
import splash from "../Images/splash.jpg"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Bio from "../Components/Bio"
import Cards from "../Components/Cards"
import random from "../Images/random.png"
import Typography from "@material-ui/core/Typography"
import { graphql, Link } from "gatsby"

const useStyles = makeStyles({
  mainPage: {
    backgroundImage: `url(${splash})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  bioProjectsWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  projectContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "100%",
    flex: 5,
  },
  link: { textDecoration: "none", color: "inherit" },
})

export default function App({ data }) {
  const classes = useStyles()
  return (
    <div className="App">
      <CssBaseline />
      <div className={classes.mainPage} />
      <div className={classes.bioProjectsWrapper}>
        <Bio />
        <div className={classes.projectContainer}>
          <Typography variant="h2">Code Portfolio</Typography>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <Link to={node.fields.slug} className={classes.link}>
              <Cards
                title={node.frontmatter.title}
                key={index}
                url="Code-Etch"
                image={random}
                desc={node.frontmatter.desc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            desc
            title
          }
        }
      }
    }
  }
`
