import React from 'react';

const WizardStep = (props) => {
  let stepId = parseInt(props.stepId);
  let activeStepId = parseInt(props.activeStepId);
  let name = props.name;
  let data = props.data;

  let onNext = props.onNext;
  let onPrev = props.onPrev;
  
  var wizardStepClassName = 'wizard-step';
  if (name) {
    wizardStepClassName += ` ${name}`;
  }
  if (activeStepId === stepId) {
    wizardStepClassName += ' active';
  }

  return (
    <div className={wizardStepClassName}>
      {props.children}
      <button onClick={onPrev}>Previous</button>
      <button onClick={() => onNext(data)}>Next</button>
    </div>
  )
}

export default WizardStep;