import React, { useEffect, setState } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import "../components/assets/styles.scss";
import Posts from "../components/post";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ReactPaginate from "react-paginate";

import { projectRequest, blogRequest } from "../store/actions";
import Footer from "../components/footer";

function Home(props) {
  useEffect(() => {
    async function fetchData() {
      await props.dispatch(blogRequest());
    }
    fetchData();
    console.log(props);
  }, []);

  const handlePageClick = data => {
    let selected = data.selected;
    // let offset = Math.ceil(selected * props.perPage);

    // setState({ offset: offset }, () => {
    props.dispatch(blogRequest(selected + 1));
    // });
  };

  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="grid">
        <Grid container spacing={2} justify="center" sm={8}>
          {props.blogs.data.map(blog => (
            <Grid item sm={4}>
              <Posts data={blog}></Posts>
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
          justify-content: space-around;
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

  return { isServer };
};

export default connect(state => state)(Home);
