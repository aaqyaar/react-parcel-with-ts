import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../navigators/paths';

export default function Hello() {
  return <h1>
    Hello

    <Link to={paths.hello}>
      <button>Go to Hello 2</button>
    </Link>
  </h1>
}
