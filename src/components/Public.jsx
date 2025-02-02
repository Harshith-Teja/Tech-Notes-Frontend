import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Vishnu Repairs!</span>
        </h1>
      </header>
      <main className="public__main">
        <p style={{ margin: "20px" }}>
          Located in Beautiful Hyderabad City, Vishnu Repairs provides a trained
          staff ready to meet your tech repair needs.
        </p>
        <p style={{ margin: "20px" }}>
          Tech notes is a software that can be used by the employees & managers
          in a tech repair shop to track the work notes/designated tasks. The
          notes can be created, updated, assigned, opened, closed and deleted.
        </p>
        <p style={{ margin: "20px" }}>
          Use the credentials 'Amar' as username and 'Aa$1234' as password to
          login to the website, these credentials have enough data for you to
          evaluate the website
        </p>
        <br />
        <p>Owner: Vishnu Dev</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
