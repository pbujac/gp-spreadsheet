import React, { Suspense, lazy, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {SpreadsheetDispatch, SpreadsheetState} from 'utils/constants';

const PageLayout = lazy(() => import('components/PageLayout/PageLayout' /* webpackChunkName: 'page-layout' */));
const Homepage = lazy(() => import('pages/Homepage/Homepage' /* webpackChunkName: 'homepage' */));
const SpreadsheetPage = lazy(() => import('pages/SpreadsheetPage/SpreadsheetPage' /* webpackChunkName: 'spreadsheet-page' */));
const EditSpreadsheetPage = lazy(() => import('pages/SpreadsheetPage/EditSpreadsheetPage' /* webpackChunkName: 'edit-spreadsheet-page' */));

import Loading from 'components/Loading/Loading';
import spreadsheetReducer from 'reducers/spreadsheet.reducer';

const Routes = () => {
  const [state, dispatch] = useReducer(spreadsheetReducer);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <PageLayout>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <SpreadsheetDispatch.Provider value={dispatch}>
              <SpreadsheetState.Provider value={state}>
                <Route exact path="/create-spreadsheet" component={SpreadsheetPage} />
                <Route path="/edit-spreadsheet" component={EditSpreadsheetPage} />
              </SpreadsheetState.Provider>
            </SpreadsheetDispatch.Provider>
          </Switch>
        </PageLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
