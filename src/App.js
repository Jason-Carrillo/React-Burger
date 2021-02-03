import React, { Component } from 'react';

import Layout from './Components/Layout/Layout'
import BurgerBuilder from "./Containers/burgerbuilder/BurgerBuilder";

class App extends Component {
    render() {
      return (
          <div>
            <Layout>
                <p>Layout wrapper</p>
                <BurgerBuilder/>
            </Layout>
          </div>
      )};
}

export default App;
