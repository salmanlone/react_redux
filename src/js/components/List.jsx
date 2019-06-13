// src/js/components/List.jsx
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles !== undefined ? state.articles : null };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles &&
      articles.map(el => (
        <li className="list-group-item" key={el.id}>
          {el.title}
        </li>
      ))}
  </ul>
);

export default connect(mapStateToProps)(ConnectedList);