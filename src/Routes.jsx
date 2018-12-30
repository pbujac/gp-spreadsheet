import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const PageLayout = lazy(() => import('components/PageLayout/PageLayout' /* webpackChunkName: 'page-layout' */));
const Homepage = lazy(() => import('pages/Homepage/Homepage' /* webpackChunkName: 'homepage' */));
const SpreadsheetPage = lazy(() => import('pages/SpreadsheetPage/SpreadsheetPage' /* webpackChunkName: 'spreadsheetReducer-page' */));

import Loading from 'components/Loading/Loading';


const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/create-spreadsheet" component={SpreadsheetPage} />
        </Switch>
      </PageLayout>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
