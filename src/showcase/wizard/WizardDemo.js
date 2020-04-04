import React from 'react';
import Wizard from '../../components/wizard/Wizard';

function WizardDemo() {

  return (
    <>
      <h2>Wizard</h2>
      <p>The Wizard component is a multi-step container component that allows for creating "wizard" like form behavior.</p>
      <Wizard />
      <p><b>Code</b></p>
      <code>
        {`
          <Wizard />
        `}
      </code>
    </>
  );
}

export default WizardDemo;