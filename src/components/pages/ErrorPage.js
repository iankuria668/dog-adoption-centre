import { useRouteError } from "react-router-dom";
import React from "react";


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
      </header>
      <main>
        <h1>Whoops! Something went wrong! Kindly go back</h1>
      </main>
    </>
  );
}

export default ErrorPage;