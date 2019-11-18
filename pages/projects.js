import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../components/assets/styles.scss";
import Posts from "../components/project";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ReactPaginate from "react-paginate";

import { projectRequest, blogRequest } from "../store/actions";
import Footer from "../components/footer";
import Link from "next/link";

function Home(props) {
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
        <title>Projetos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="grid">
        <Grid container spacing={2} justify="center" sm={8}>
          {props.projects.data.map((project) => (
            <Grid item sm={4}>
              <Link href={`blog/${project.id}`}>
                <Posts data={project}></Posts>
              </Link>
            </Grid>
          ))}
        </Grid>
        <ReactPaginate
          previousLabel={"Pág. anterior"}
          nextLabel={"Próxima pág."}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={props.projects.lastPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={`this.handlePageClick`}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>

      <Footer></Footer>

      <style jsx>{`
        .grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = (props) => {
  const { store, isServer } = props.ctx;
  // store.dispatch(tickClock(isServer));
  if (!store.getState().projects) {
    store.dispatch(projectRequest());
  }

  return { isServer };
};

export default connect((state) => state)(Home);
