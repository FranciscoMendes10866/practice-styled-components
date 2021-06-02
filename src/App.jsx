import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './layout'
import { Home, About } from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
