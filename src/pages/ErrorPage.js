import { useRouteError } from "react-router-dom";

import Navigation from "../components/Navigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Page does not exist.";

  if (error.status === 500) {
    message = error.data.message;
  }

  return (
    <>
      <Navigation />
      <main className=" text-center mt-10">
        <h1 className=" font-semibold text-xl">{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
