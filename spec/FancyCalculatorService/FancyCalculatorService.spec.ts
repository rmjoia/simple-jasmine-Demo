import { FancyCalculatorService } from '../../src/Services/FancyCalculatorService';

describe('FancyCalculatorService', () => {

    let fancyCalculatorService: FancyCalculatorService

    beforeEach(() => {
        fancyCalculatorService = new FancyCalculatorService();
    });

    it('should return 4 when fancyCalculator is called with 2 and 2', () => {
        //  Arrange
        const value1 = 2;
        const value2 = 2;

        //  Act
        const result = fancyCalculatorService.fancyCalculation(value1, value2);

        //  Assert
        expect(result).toBe(4);

    });

    it('should return 8 when fancyCalculator is called with 2 and 3', () => {
        //  Arrange
        const value1 = 2;
        const value2 = 3;

        //  Act
        const result = fancyCalculatorService.fancyCalculation(value1, value2);

        //  Assert
        expect(result).toBe(8);

    });

});
