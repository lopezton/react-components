import * as React from 'react';

interface WizardProps {
  data: any,
  onComplete: () => {},
  useHistory: boolean
}

interface WizardStepProps {
  data: any,
  name: string,
  nextStep: number | (() => number),
  prevStep: number | (() => number),
}

export class Wizard extends React.Component<WizardProps, any> { }