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
import Link from "next/link";

function Home(props) {
  useEffect(() => {
    props.dispatch(blogRequest());
    console.log(props);
  }, []);

  const handlePageClick = (data) => {
    let selected = data.selected;
    props.dispatch(blogRequest(selected + 1));
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
          {!props.loading ? (
            props.blogs.data.map((blog) => (
              <Link href="/post/[pid]" as={`/post/${blog.id}`}>
                <Grid item sm={4}>
                  <Posts data={blog}></Posts>
                </Grid>
              </Link>
            ))
          ) : (
            <p>loading</p>
          )}
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

Home.getInitialProps = (props) => {
  const { store, isServer } = props.ctx;
  // store.dispatch(tickClock(isServer));
  if (!store.getState().projects) {
    store.dispatch(projectRequest());
  }

  return { isServer };
};

export default connect((state) => state)(Home);
