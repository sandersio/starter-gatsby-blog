import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery, useStaticQuery } from "gatsby";

import styles from "./hero.module.css";

export default ({ data }) => {

  const a = useStaticQuery(graphql`query {
    contentfulBlogPost(
      id: { eq: "32be9310-0e65-5422-9f7f-57e8ec5a8afe" }
    ) {
      id
      title
    }
  }`);
  return (
    <div className={styles.hero}>
      <StaticQuery
        query={graphql`
          query {
            contentfulBlogPost(
              id: { eq: "32be9310-0e65-5422-9f7f-57e8ec5a8afe" }
            ) {
              id
              title
            }
          }
        `}
        render={(data) => {
          return <pre>{JSON.stringify(data)}</pre>;
        }}
      />
      <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
      />
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{JSON.stringify(a)}</h3>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  );
};
