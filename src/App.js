"use client";

import Router from './router'
import { AppProvider } from "./shared/providers";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router />
      </AppProvider>

    </div>
  );
}

export default App;
