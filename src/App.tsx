import React, { Fragment , FC} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Pages/Home';

export interface IAppProps {};

const App: React.FunctionComponent<IAppProps> = props => {
  return (
      <>
      <Header></Header>
      </>
    );
}
export default App;