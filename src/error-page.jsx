import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Link to="/" className="text-slate-500 fixed top-6 left-8">
        ← Back to Home 🏡
      </Link>
      <h1 className="text-4xl font-bold p-6">Oops!</h1>
      <p className="p-6">Sorry, an unexpected error has occurred.</p>
      <p className="p-4 italic text-slate-400">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
