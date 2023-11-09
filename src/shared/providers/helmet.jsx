import React from "react";
import { HelmetProvider } from "react-helmet-async";


export const ReactHelmetProvider = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};