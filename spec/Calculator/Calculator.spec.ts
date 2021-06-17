import { Calculator } from '../../src/Calculator/Calculator';
import { FancyCalculatorService } from '../../src/Services/FancyCalculatorService';

describe('Calculator', () => {

    let fancyCalculationMock: jasmine.SpyObj<FancyCalculatorService>;
    let calculator: Calculator

    beforeEach(() => {

        fancyCalculationMock = jasmine.createSpyObj<FancyCalculatorService>('FancyCalculatorService', ['fancyCalculation']);
        calculator = new Calculator(fancyCalculationMock);
    });

    it('should return 2 when 1 is added to 1', () => {
        //  Arrange
        const value1 = 1;
        const value2 = 1;

        //  Act
        const result = calculator.add(value1, value2);

        //  Assert
        expect(result).toBe(2);

    });

    it('should call fancyCalculation with values 1 and 1 when fancyCalculation is called', () => {
        //  Arrange
        const value1 = 1;
        const value2 = 1;

        //  Act
        const result = calculator.fancyCalculation(value1, value2);

        //  Assert
        expect(fancyCalculationMock.fancyCalculation).toHaveBeenCalledOnceWith(1, 1);
    });

});
