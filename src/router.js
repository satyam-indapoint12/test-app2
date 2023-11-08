import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './containers/home';
import Layout from './common/layout';



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
        <Layout>
          <HomeContainer />
        </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default Router