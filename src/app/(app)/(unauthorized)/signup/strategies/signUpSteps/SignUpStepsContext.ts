import { IStrategy, Steps } from "./IStrategy";

export class SignUpStepsContext {
  private strategy: IStrategy;
  private steps: Steps | null;
  constructor(strategy: IStrategy) {
    this.steps = null;
    this.strategy = strategy;
  }

  public setStrategy(strategy: IStrategy) {
    this.steps = null;
    this.strategy = strategy;
  }

  public getSignUpSteps(): Steps {
    if (this.steps) {
      return this.steps;
    }
    return this.strategy.getSignUpSteps();
  }
}
