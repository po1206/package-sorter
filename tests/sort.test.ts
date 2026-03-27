import { sort } from "../src/sort";

describe("Package Sorting", () => {
    test("STANDARD", () => {
        expect(sort({ width: 10, height: 10, length: 10, mass: 5 }))
            .toBe("STANDARD");
    });

    test("BULKY", () => {
        expect(sort({ width: 100, height: 100, length: 100, mass: 10 }))
            .toBe("SPECIAL");
    });

    test("HEAVY", () => {
        expect(sort({ width: 10, height: 10, length: 10, mass: 20 }))
            .toBe("SPECIAL");
    });

    test("REJECTED", () => {
        expect(sort({ width: 100, height: 100, length: 100, mass: 25 }))
            .toBe("REJECTED");
    });
});
