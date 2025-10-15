import React from "react";

type ErrorFallbackProps = {
  message: string;
};

const ErrorFallback = ({ message }:any) => (
  <div className="w-full bg-red-50 border border-red-300 text-red-700 text-center py-4 rounded-md my-4">
    <p className="font-medium">{message}</p>
  </div>
);

export default ErrorFallback;
