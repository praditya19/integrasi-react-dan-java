import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import DaftarBuku from './components/DaftarBuku';
import AddBuku from './components/AddBuku';
import Header from './components/Header';
import EditBuku from './components/EditBuku';
export default class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Header />
        <Route path="/" exact component={DaftarBuku} />
        <Route path="/add" exact component={AddBuku} />
        <Route path="/edit/:id" exact component={EditBuku} />
      </BrowserRouter>


    )
  }
}