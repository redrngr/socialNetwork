import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center" style={{ paddingTop: "30vh" }}>
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <div className="mb-2">
        Sorry, an error has occured, Requested page not found!
      </div>
      <div className="error-actions">
        <Link to="/employees" className="btn btn-primary btn-lg me-3"><span className="glyphicon glyphicon-home"></span>
          Show employee's list </Link>
        <Link to="/add" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-envelope"></span>
          Add new employee </Link>
      </div>
    </div>
  )
}

export default NotFound;