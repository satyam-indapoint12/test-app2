
import React from 'react'
import { Suspense as ReactSuspense } from "react";

export const Suspense = ({ children, fallback }) => {
    return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>;
  };