import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui'; 
import { Provider } from 'react-redux';
import store from '../src/state/store';
import LiveData from "views/admin/LiveForm";
import SignIn from './views/auth/signIn/index.jsx';
ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              <Route path={`/auth`} component={AuthLayout} />
              <Route path={`/admin`} component={AdminLayout} />
              <Route path={`/rtl`} component={RtlLayout} />
              <Route path={`/live-data`} component={LiveData} />
              <Route path="/" component={SignIn} />
              <Redirect path={`/`} component={SignIn} />
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
