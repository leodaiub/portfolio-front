import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../components/assets/styles.scss";
import Form from "../components/form";
import { connect } from "react-redux";

import { projectRequest, blogRequest } from "../store/actions";
import Footer from "../components/footer";

function Contact(props) {
  useEffect(() => {
    async function fetchData() {
      await props.dispatch(projectRequest());
      await props.dispatch(blogRequest());
    }
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="grid">
        <Form></Form>
      </div>

      <Footer></Footer>
      <style jsx>{`
        .grid {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

Contact.getInitialProps = props => {
  const { store, isServer } = props.ctx;
  // store.dispatch(tickClock(isServer));
  if (!store.getState().projects) {
    store.dispatch(projectRequest());
  }

  return { isServer };
};

export default connect(state => state)(Contact);
