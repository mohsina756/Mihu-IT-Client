/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { context } from "../ContextProvider/Provider";

const Private = ({ children }) => {
  const { user, loading } = useContext(context);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-spinner text-yellow-400 mt-36 pt-36 pl-36"></span>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default Private;
