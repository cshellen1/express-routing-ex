const { mean, mode, median, valNumAndMakeArr } = require('./helpers.js');

describe('mean', () => {
    test("finds mean of an empty array", () => {
        let m = mean([]);
        expect(m).toEqual(0);
    })

    test("finds mean of numbers", () => {
        let m = mean([1, 2, 3, 4]);
        expect(m).toEqual(2.5);
    })
});

describe('median', () => {
    test("finds median with odd count of numbers", () => {
        let m = median([1, 2, 3, 4, 5]);
        expect(m).toEqual(3);
    })

    test("finds median with even count of numbers", () => {
        let m = median([1, 2, 3, 4]);
        expect(m).toEqual(2.5);
    })
});

describe('mode', () => {
    test("finds mode of numbers", () => {
        let m = mode([1, 2, 3, 3, 3, 3, 5]);
        expect(m).toEqual(3);
    })
})