import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron body className="text-center">
        <h1 className="display-3" className="text-white">Santren Koding</h1>
        <p className="lead" className="text-white">Intensive Coding Bootcamp for Yatim & Dhuafa</p>
        <p className="lead">
          <Button color="success" className="text-white">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;