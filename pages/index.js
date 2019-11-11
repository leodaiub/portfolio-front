import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../components/assets/styles.scss";

import { connect } from "react-redux";

import { projectRequest, blogRequest } from "../store/actions";

function Home(props) {
  useEffect(() => {
    async function fetchData() {
      await props.dispatch(projectRequest());
      await props.dispatch(blogRequest());
    }
    fetchData();
    console.log(props);
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(props)}
      <Nav />

      <div className="hero">
        <h1 className="title">Leonardo Daiub</h1>
        <p className="description">Software Developer</p>

        <div className="row">
          <a href="/projects" className="card">
            <h3>Projetos</h3>
            <p>Veja meus projetos anteriores!</p>
          </a>
          <a href="/blog" className="card">
            <h3>Blog</h3>
            <p>Veja os artigos do meu blog!</p>
          </a>
          <a href="/contact" className="card">
            <h3>Contato</h3>
            <p>Quer entrar em contato comigo? clique aqui!</p>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100%;
          width: 100%;
          color: #fff;
          font-family: "McLaren", cursive;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #fff;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = props => {
  const { store, isServer } = props.ctx;
  // store.dispatch(tickClock(isServer));
  if (!store.getState().projects) {
    store.dispatch(projectRequest());
  }
  console.log(store);
  return { isServer };
};

export default connect(state => state)(Home);
