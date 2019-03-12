import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import ModalExample from './Modal';

const Example = (props) => {
  return (
    <div>
      <Jumbotron body className="text-center">
        <h1 className="display-3" className="text-black">Santren Koding</h1>
        <p className="lead" className="text-black">Intensive Coding Bootcamp for Yatim & Dhuafa</p>
        <p className="lead">
          <ModalExample></ModalExample>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;