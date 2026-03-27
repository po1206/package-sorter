export type StackType = "STANDARD" | "SPECIAL" | "REJECTED";

export interface PackageDimensions {
    readonly width: number;
    readonly height: number;
    readonly length: number;
    readonly mass: number;
}

function validateInput({ width, height, length, mass }: PackageDimensions): void {
    const values = [width, height, length, mass];

    if (values.some(v => typeof v !== "number" || !Number.isFinite(v) || v < 0)) {
        throw new Error("Invalid input: all values must be non-negative finite numbers.");
    }
}

export function sort({
    width,
    height,
    length,
    mass
}: PackageDimensions): StackType {
    validateInput({ width, height, length, mass });

    const volume = width * height * length;

    const isBulky =
        volume >= 1_000_000 ||
        width >= 150 ||
        height >= 150 ||
        length >= 150;

    const isHeavy = mass >= 20;

    if (isBulky && isHeavy) return "REJECTED";
    if (isBulky || isHeavy) return "SPECIAL";
    return "STANDARD";
}
