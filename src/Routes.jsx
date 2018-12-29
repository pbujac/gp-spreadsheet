import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const PageLayout = lazy(() => import('components/PageLayout/PageLayout' /* webpackChunkName: 'page-layout' */));
const Homepage = lazy(() => import('pages/Homepage/Homepage' /* webpackChunkName: 'homepage' */));

import Loading from 'components/Loading/Loading';

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </PageLayout>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
