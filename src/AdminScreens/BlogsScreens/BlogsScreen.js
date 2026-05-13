import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import BlogsPortalListings from "../../component/Blogs & Landing Page/BlogsPortalListings";
import PlainHero from "../../component/PlainHero/PlainHero";

const BlogsScreen = () => {
  return (
    <Fragment>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <PlainHero
          Heading="Blogs Portal"
          fontDark={true}
      />
      <BlogsPortalListings />
    </Fragment>
  );
};

export default BlogsScreen;
