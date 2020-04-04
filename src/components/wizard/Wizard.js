import React, { useState } from 'react';
import './Wizard.css';

const Wizard = (props) => {

  const data = props.data || {};
  const useHistory = (props.useHistory === undefined) ? true : props.useHistory;
  const onComplete = (props.onComplete !== undefined) ? props.onComplete : (data) => data;

  const [activeStepId, setActiveStepId] = useState(!props.activeStepId ? 0 : props.activeStepId);
  const [stepHistory, setStepHistory] = useState([]);

  var _maxSteps = 0;

  const goToStep = (n) => {
    var stepId;
    if (isNaN(n)) {
      // TODO
      // stepId = findStepIdByName(n);
    } else {
      stepId = parseInt(n);
    }
    if (stepId === undefined || stepId === activeStepId || stepId < 0 || stepId >= _maxSteps) {
      return -1;
    }
    setActiveStepId(stepId);

    if (useHistory) {
      setStepHistory([...stepHistory, activeStepId]);
    }

    return stepId;
  }

  const goToPreviousStep = () => {
    if (stepHistory.length === 0) {
      return;
    }
    let stepId = goToStep(stepHistory.pop());
    setStepHistory(stepHistory);
    return stepId;
  }

  const complete = () => {
    console.log(data);
    onComplete(data);
  }

  function buildWizardSteps() {
    _maxSteps = 0;
    const wizardSteps = [];

    wizardSteps.push(React.Children.map(props.children, child => {
      if (child.type.name === 'WizardStep') {
        let stepId = _maxSteps++;
        var newProps = {
          stepId: stepId,
          activeStepId: activeStepId
        };

        let onNext = () => goToStep(stepId + 1)
        if (child.props.nextStep) {
          if (typeof child.props.nextStep === 'function') {
            onNext = () => goToStep(child.props.nextStep(data));
          } else {
            onNext = () => goToStep(child.props.nextStep);
          }
        }
        newProps['onNext'] = onNext;

        let onPrev = goToPreviousStep;
        if (!useHistory) {
          onPrev = () => goToStep(stepId - 1);
          if (child.props.prevStep) {
            if (typeof child.props.prevStep === 'function') {
              onPrev = () => goToStep(child.props.prevStep(data));
            } else {
              onPrev = () => goToStep(child.props.prevStep);
            }
          }
        }
        newProps['onPrev'] = onPrev;

        return React.cloneElement(child, newProps);
      }
    }));

    if (wizardSteps.length > 0 && onComplete) {
      const lastElement = wizardSteps[0].pop();
      wizardSteps[0].push(React.cloneElement(lastElement, {
        ...lastElement.props,
        onNext: complete
      }));
    }

    return wizardSteps;
  }

  const wizardSteps = buildWizardSteps();

  return (
    <div className="wizard">
      {wizardSteps}
    </div>
  );
}

export default Wizard;