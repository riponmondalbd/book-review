import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-[350px] space-y-4">
      <h1 className="text-4xl font-extrabold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="font-extrabold">
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
        <Link to={-1}>
          <button className="btn text-white font-semibold text-xl bg-[#23BE0A]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
