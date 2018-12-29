import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const PageLayout = React.lazy(() => import('components/PageLayout/PageLayout' /* webpackChunkName: 'page-layout' */));
const Homepage = React.lazy(() => import('pages/Homepage/Homepage' /* webpackChunkName: 'homepage' */));

import Loading from 'components/Loading/Loading';

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={Loading}>
      <PageLayout>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </PageLayout>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
