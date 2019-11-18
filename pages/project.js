import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Single from "../components/single";
import "../components/assets/styles.scss";
import { connect } from "react-redux";
import { singleProjectRequest } from "../store/actions";
import Footer from "../components/footer";

function Project(props) {
  useEffect(() => {
    async function fetchData() {
      await props.dispatch(singleProjectRequest(props.id));
    }
    fetchData();
  }, []);

  <div>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <Single
        title={props.title}
        image={props.image}
        content={props.content}
      ></Single>
    </div>

    <Footer></Footer>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>;
}

Project.getInitialProps = (props) => {
  const { store, isServer } = props.ctx;
  if (!store.getState().project) {
    store.dispatch(singleProjectRequest());
  }

  return { isServer };
};

export default connect((state) => state)(Project);
