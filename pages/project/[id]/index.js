import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Disqus from "disqus-react";

import Head from "next/head";
import Nav from "../../../components/nav";
import Single from "../../../components/single";
import "../../../components/assets/styles.scss";
import { connect } from "react-redux";
import { singleProjectRequest } from "../../../store/actions";
import Footer from "../../../components/footer";

function Project(props) {
  const router = useRouter();
  const { id } = router.query;

  const disqusShortname = "leonardodaiub"; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "https://leonardodaiub.com", //this.props.pageUrl
    identifier: id, //this.props.uniqueId
    title: "Title of Your Article" //this.props.title
  };

  useEffect(() => {
    props.dispatch(singleProjectRequest(id));
  }, []);

  return (
    <div>
      <Head>
        <title>{props && props.project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <Single
          title={props && props.project.title}
          //image={props.project.image}
          content={props && props.project.content}
        ></Single>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>

      <Footer></Footer>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
      `}</style>
    </div>
  );
}

Project.getInitialProps = (props) => {
  const { store, isServer } = props.ctx;
  if (!store.getState().project) {
    store.dispatch(singleProjectRequest(id));
  }

  return { isServer };
};

export default connect((state) => state)(Project);
