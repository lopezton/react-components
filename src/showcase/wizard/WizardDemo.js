import React from 'react';
import Wizard from '../../components/wizard/Wizard';
import WizardStep from '../../components/wizard/WizardStep';

const WizardDemo = () => {

  function renderExampleBasicUsage() {
    return (
      <>
        <h3>Basic Usage</h3>
        <Wizard>
          <WizardStep>
            <p>Step 1</p>
          </WizardStep>
          <WizardStep>
            <p>Step 2</p>
          </WizardStep>
          <WizardStep>
            <p>Step 3</p>
          </WizardStep>
        </Wizard>
        <p><b>Code</b></p>
        <pre>
          <code>
            {`
<Wizard>
  <WizardStep>
    <p>Step 1</p>
  </WizardStep>
  <WizardStep>
    <p>Step 2</p>
  </WizardStep>
  <WizardStep>
    <p>Step 3</p>
  </WizardStep>
</Wizard>
        `}
          </code>
        </pre>
      </>
    );
  }

  function renderExampleStepNav() {
    const data = {
      color: 'red'
    };

    function checkIfRed(data) {
      if (data.color === 'red') {
        return 2;
      }
      return 1;
    }

    return (
      <>
        <h4>Custom Step Navigation</h4>
        <p>When a <code>&lt;WizardStep&gt;</code> component executes it's <code>onComplete</code> event, it will become inactive and the next <code>&lt;WizardStep&gt;</code> component in the DOM will become active. The default behavior for navigation is sequential in the order by which the <code>&lt;WizardStep&gt;</code> components are defined. Custom navigation can be controlled using <code>nextStep</code>.</p>
        <Wizard data={data}>
          <WizardStep name="favorite-color" nextStep={checkIfRed}>
            <p>Step 1</p>
            <label htmlFor="color">What is your favorite color?</label>
            <input type="text" name="color" />
          </WizardStep>
          <WizardStep name="favorite-number">
            <p>Step 2</p>
            <label htmlFor="number">What is your favorite number?</label>
            <input type="text" name="number" />
          </WizardStep>
          <WizardStep name="favorite-drink">
            <p>Step 3</p>
            <label htmlFor="beverage">What is your favorite beverage?</label>
            <input type="text" name="beverage" />
          </WizardStep>
        </Wizard>
        <p><b>Code</b></p>
        <pre>
          <code>
            {`
<Wizard data={data}>
  <WizardStep name="favorite-color" nextStep={checkIfRed}>
    <p>Step 1</p>
    <label htmlFor="color">What is your favorite color?</label>
    <input type="text" name="color" />
  </WizardStep>
  <WizardStep name="favorite-number">
    <p>Step 2</p>
    <label htmlFor="number">What is your favorite number?</label>
    <input type="text" name="number" />
  </WizardStep>
  <WizardStep name="favorite-drink">
    <p>Step 3</p>
    <label htmlFor="beverage">What is your favorite beverage?</label>
    <input type="text" name="beverage" />
  </WizardStep>
</Wizard>
        `}
          </code>
        </pre>
      </>
    );
  }

  function renderExampleStepNavHistory() {
    return (
      <>
        <h4>Step History</h4>
        <p>By default, the <code>prevStep</code> event navigates to the previously visited <code>&lt;WizardStep&gt;</code>. It is possible to manually control the the <code>prevStep</code> event by setting the property <code>useHistory</code> to <code>false</code>.</p>
        <Wizard useHistory={false}>
          <WizardStep prevStep="2">
            <p>Step 1</p>
          </WizardStep>
          <WizardStep>
            <p>Step 2</p>
          </WizardStep>
          <WizardStep>
            <p>Step 3</p>
          </WizardStep>
        </Wizard>
        <p><b>Code</b></p>
        <pre>
          <code>
            {`
<Wizard useHistory={false}>
  <WizardStep prevStep="2">
    <p>Step 1</p>
  </WizardStep>
  <WizardStep>
    <p>Step 2</p>
  </WizardStep>
  <WizardStep>
    <p>Step 3</p>
  </WizardStep>
</Wizard>
        `}
          </code>
        </pre>
      </>
    );
  }

  function renderExampleSubmitData() {

    const data = {
      p1: 'hello',
      p3: 'world'
    };

    function submitData(data) {
      console.log("Submitting data...", data);
    }

    return (
      <>
        <p>By default, the last <code>&lt;WizardStep&gt;</code> in the DOM will be treated as the "completion" step. All data collected from the <code>&lt;Wizard&gt;</code> component will be passed to the function provided to <code>onComplete</code>.</p>
        <Wizard data={data} onComplete={submitData}>
          <WizardStep>
            <label htmlFor="greeting">Greeting</label>
            <input type="text" name="greeting" />
          </WizardStep>
          <WizardStep>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </WizardStep>
        </Wizard>
        <p><b>Code</b></p>
        <pre>
          <code>
            {`
<Wizard data={data} onComplete={submitData}>
  <WizardStep>
    <label htmlFor="greeting">Greeting</label>
    <input type="text" name="greeting" />
  </WizardStep>
  <WizardStep>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />
  </WizardStep>
</Wizard>
        `}
          </code>
        </pre>
      </>
    );
  }

  return (
    <>
      <h2>Wizard</h2>
      <p>The Wizard component is a multi-step container component that allows for creating "wizard" like form behavior.</p>

      {renderExampleBasicUsage()}

      <h3>Submitting Data</h3>
      {renderExampleSubmitData()}

      <h3>Controlling Step Navigation</h3>

      {renderExampleStepNav()}
      {renderExampleStepNavHistory()}
    </>
  );
}

export default WizardDemo;