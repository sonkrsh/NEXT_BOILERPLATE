/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { END } from "redux-saga";
import { compose } from "redux";
import { wrapper } from "configureStore";

import makeSelectpage1 from "./selectors";
import { useRouter } from "next/router";
import { handleDemoUrl } from "./actions";

export function page1(props) {
  const router = useRouter();
  console.log("page 1 call");
  const {
    handleClick,
    page1: { demoValue, arrayValue },
  } = props;

  const handleClickNew = (e, path) => {
    e.preventDefault();

    if (path === "/page2") {
      console.log("I clicked on the About Page");
      // then you can:
      router.push(path);
    }
  };

  return (
    <>
      <div>hi</div>
      {demoValue}
      <button onClick={() => handleClick()}>click me</button>
      {arrayValue.map((item) => (
        <h1 key={item.name}>{item.name}</h1>
      ))}
      <button onClick={(e) => handleClickNew(e, "/page2")}>Go to Page2</button>
    </>
  );
}
// // console.log("wrapper",wrapper);
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     // console.log("==---REact", React.useContext);
//     // console.log("==-->>>>>Bbb", store);
//     await store.dispatch(handleDemoUrl());
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(handleDemoUrl());
    await store.dispatch(END);
    await store.sagaTask.toPromise();
  }
);

page1.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  page1: makeSelectpage1(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleClick: (evt) => dispatch(handleDemoUrl()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(page1);