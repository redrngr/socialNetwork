import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div className="text-center" style={{ paddingTop: "30vh" }}>
      <h1>Welcome!</h1>
      <h2>Enjoy my social network</h2>
      <div className="mb-2">
        Dolor ipsum do voluptate do amet sit ut qui do reprehenderit officia. Reprehenderit do proident velit esse cupidatat exercitation sint in. Ad aliquip culpa magna culpa amet ipsum aliquip. Sunt anim ipsum ipsum dolore nulla id veniam do enim. Eu ea est velit qui fugiat labore ex. Eu Lorem non officia minim anim do aliquip laborum id proident. Irure id magna ad ex qui aliquip et ex.
      </div>
      <div>
        <Link to="/users" className="btn btn-primary btn-lg me-3">
          <span className="glyphicon glyphicon-home">
            Show users's list
          </span></Link>
      </div>
    </div>
  )
}

export default Welcome;