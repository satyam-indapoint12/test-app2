
import CustomErrorBoundary  from "./error-boundary";
import { Suspense } from "./suspense";
import { ReactHelmetProvider } from "./helmet";
import Toastify from "./toastify";


export const AppProvider = ({ children }) => {
  return (
    <CustomErrorBoundary >
      <Suspense>
        <ReactHelmetProvider>
          <Toastify />
            {children}
        </ReactHelmetProvider>
      </Suspense>
    </CustomErrorBoundary>
  );
};