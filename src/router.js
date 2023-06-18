import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CafesContainer from './containers/cafes';
import CafeInfoContainer from './containers/cafe-info'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CafesContainer />} />
        <Route exact path="/cafes/:id" element={<CafeInfoContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router