import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="text-center" style={{ paddingTop: "30vh" }}>
      <h1>Oops!</h1>
      <h2>404 Not Found</h2>
      <div className="mb-2">
        Sorry, an error has occured, Requested page not found!
      </div>
      <div className="error-actions">
        <Link to="/users" className="btn btn-primary btn-lg me-3">
          <span className="glyphicon glyphicon-home">
            Show users's list
          </span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound;