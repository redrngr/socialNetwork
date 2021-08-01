import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="text-center">
      <h1>Welcome!</h1>
      <h2>See, edit and add information about employees</h2>
      <div className="mb-2">
        Dolor ipsum do voluptate do amet sit ut qui do reprehenderit officia. Reprehenderit do proident velit esse cupidatat exercitation sint in. Ad aliquip culpa magna culpa amet ipsum aliquip. Sunt anim ipsum ipsum dolore nulla id veniam do enim. Eu ea est velit qui fugiat labore ex. Eu Lorem non officia minim anim do aliquip laborum id proident. Irure id magna ad ex qui aliquip et ex.
      </div>
      <div>
        <Link to="/employees" className="btn btn-primary btn-lg me-3"><span className="glyphicon glyphicon-home"></span>
          Show employee's list </Link>
        <Link to="/add" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-envelope"></span>
          Add new employee </Link>
      </div>
    </div>
  )
}

export default Welcome;