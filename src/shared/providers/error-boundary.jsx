import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function fallbackRender({ error }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
  
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }

const CustomErrorBoundary = ({ children }) => {

    return <ErrorBoundary
    fallbackRender={fallbackRender}
  >
    {children}
  </ErrorBoundary>
}

export default CustomErrorBoundary;