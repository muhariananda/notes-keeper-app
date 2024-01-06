import React from "react";
import PropTypes from "prop-types";
import { MdErrorOutline } from "react-icons/md";

const NotFoundPage = ({ message }) => (
  <section className="not-found-page">
    <MdErrorOutline className="icon" />
    <h1>404</h1>
    <h3>Page Not Found</h3>
    <p>{message}</p>
  </section>
);

NotFoundPage.propTypes = {
  message: PropTypes.string.isRequired,
};

NotFoundPage.defaultProps = {
  message: "Opps... halaman yang kamu cari tidak ditemukan",
};

export default NotFoundPage;
