import { FancyCalculatorService } from '../Services/FancyCalculatorService';

export class Calculator {
    constructor(private fancyCalculatorService: FancyCalculatorService) {
    }

    add(value1: number, value2: number): number {
        return value1 + value2;
    }

    fancyCalculation(value1: number, value2: number): number {
        return this.fancyCalculatorService.fancyCalculation(value1, value2);
    }
}