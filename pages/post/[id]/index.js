import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "../../../components/nav";
import Single from "../../../components/single";
import "../../../components/assets/styles.scss";
import { connect } from "react-redux";
import { singleBlogRequest } from "../../../store/actions";
import Footer from "../../../components/footer";

function Blog(props) {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    props.dispatch(singleBlogRequest(id));
  }, [props.post]);
  if (!props.loading) {
    console.log(props);
  }
  return (
    !props.loading && (
      <div>
        <Head>
          <title>{props && props.blog.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />

        <div className="hero">
          <Single
            title={props.blog.title}
            // image={props.image}
            content={props.blog.content}
          ></Single>
        </div>

        <Footer></Footer>

        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
        `}</style>
      </div>
    )
  );
}

Blog.getInitialProps = (props) => {
  const { store, isServer } = props.ctx;
  if (!store.getState().blog) {
    store.dispatch(singleBlogRequest(id));
  }

  return { isServer };
};

export default connect((state) => state)(Blog);
