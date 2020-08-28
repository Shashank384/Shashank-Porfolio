import React from 'react';
import { Switch, Route} from 'react-router-dom';
import theme from '../ui/Theme';
import HomePage from './HomePage';
import WorksPage from './WorksPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';
import { ThemeProvider } from '@material-ui/core/styles';

const AppRouter = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      {/* <CssBaseline /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />          
          <Route path='/resume' component={ResumePage} />
          <Route path='/works' component={WorksPage} />
          <Route path='/contactme' component={ContactPage} />
        </Switch>
    </React.Fragment>
  </ThemeProvider>  
)

export default AppRouter;
