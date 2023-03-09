/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { END } from "redux-saga";
import { compose } from "redux";
import { wrapper } from "configureStore";
import { handleApi } from "./actions";
import makeSelectpage2 from "./selectors";
import { useRouter } from "next/router";
import Link from "next/link";
import makeSelectpage1 from "../page1/selectors";

export function page2(props) {
  const router = useRouter();

  const {
    page2: { data },
  } = props;

  const handleClickNew = (e, path) => {
    e.preventDefault();

    if (path === "/page1") {
      console.log("I clicked on the About Page");
      // then you can:
      router.push(path);
    }
  };
  return (
    <div>
      {data.map((item) => (
        <h3 key={item.name}>{item.name}</h3>
      ))}
      <button onClick={(e) => handleClickNew(e, "/page1")}>Go to Page1</button>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(
  (store, s) => async (eee) => {
    await store.dispatch(handleApi());
    await store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

page2.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  page2: makeSelectpage2(),
  page1: makeSelectpage1(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(page2);
