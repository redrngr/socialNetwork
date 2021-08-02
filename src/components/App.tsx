import { Route, Switch } from 'react-router-dom';
import Add from './Add';
import Employee from './List/Employee';
import List from './List/List';
import Nav from './Navbar/Nav';
import NotFound from './NotFound';
import Welcome from './Welcome';

const App = () => {
  return (
    <div className="d-flex flex-nowrap vh-100 overflow-hidden">
      <aside className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
        <Nav />
      </aside>
      <main className="overflow-scroll w-100">
        <div className="container pt-3">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/employees" component={List} />
            <Route path="/add" component={Add} />
            <Route path="/employees/:id" component={Employee} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main >
    </div >
  )
}

export default App;