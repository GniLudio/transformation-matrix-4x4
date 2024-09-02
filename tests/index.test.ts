import { TransformationMatrix4x4 } from "../src";

describe("TransformationMatrix3D", () => {
    // Matrices
    const matrix_0_to_0 = new TransformationMatrix4x4(
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
    );
    const matrix_0_to_15 = new TransformationMatrix4x4(
        0, 1, 2, 3,
        4, 5, 6, 7,
        8, 9, 10, 11,
        12, 13, 14, 15,
    );
    const matrix_0_0_to_15_15 = new TransformationMatrix4x4(
        0.0, 1.1, 2.2, 3.3,
        4.4, 5.5, 6.6, 7.7,
        8.8, 9.9, 10.10, 11.11,
        12.12, 13.13, 14.14, 15.15,
    );
    const matrix0_123456789_to_15_678901234 = new TransformationMatrix4x4(
        0.123456789, 1.234567890, 2.345678901, 3.456789012,
        4.567890123, 5.678901234, 6.789012345, 7.890123456,
        8.901234567, 9.012345678, 10.123456789, 11.234567890,
        12.345678901, 13.456789012, 14.567890123, 15.678901234,
    );

    // Factories
    const zero = TransformationMatrix4x4.zero();
    const identity = TransformationMatrix4x4.identity();
    const translate_0_0_0 = TransformationMatrix4x4.translate(0, 0, 0);
    const translate_1_2_3 = TransformationMatrix4x4.translate(1, 2, 3);
    const translate_111_222_333 = TransformationMatrix4x4.translate(111, 222, 333);
    const scale_0_0_0 = TransformationMatrix4x4.scale(0, 0, 0);
    const scale_1_1_1 = TransformationMatrix4x4.scale(1, 1, 1);
    const scale_4_5_6 = TransformationMatrix4x4.scale(4, 5, 6);
    const scale_111_222_333 = TransformationMatrix4x4.scale(111, 222, 333);
    const rotate_x_0 = TransformationMatrix4x4.rotateX(0 * Math.PI / 180);
    const rotate_x_3 = TransformationMatrix4x4.rotateX(3 * Math.PI / 180);
    const rotate_x_33 = TransformationMatrix4x4.rotateX(33 * Math.PI / 180);
    const rotate_x_45 = TransformationMatrix4x4.rotateX(45 * Math.PI / 180);
    const rotate_x_90 = TransformationMatrix4x4.rotateX(90 * Math.PI / 180);
    const rotate_x_180 = TransformationMatrix4x4.rotateX(180 * Math.PI / 180);
    const rotate_x_360 = TransformationMatrix4x4.rotateX(360 * Math.PI / 180);
    const rotate_x_450 = TransformationMatrix4x4.rotateX(450 * Math.PI / 180);
    const rotate_x_n90 = TransformationMatrix4x4.rotateX(-90 * Math.PI / 180);
    const rotate_x_n111 = TransformationMatrix4x4.rotateX(-111 * Math.PI / 180);
    const rotate_x_n270 = TransformationMatrix4x4.rotateX(-270 * Math.PI / 180);
    const rotate_y_0 = TransformationMatrix4x4.rotateY(0 * Math.PI / 180);
    const rotate_y_3 = TransformationMatrix4x4.rotateY(3 * Math.PI / 180);
    const rotate_y_33 = TransformationMatrix4x4.rotateY(33 * Math.PI / 180);
    const rotate_y_45 = TransformationMatrix4x4.rotateY(45 * Math.PI / 180);
    const rotate_y_90 = TransformationMatrix4x4.rotateY(90 * Math.PI / 180);
    const rotate_y_180 = TransformationMatrix4x4.rotateY(180 * Math.PI / 180);
    const rotate_y_360 = TransformationMatrix4x4.rotateY(360 * Math.PI / 180);
    const rotate_y_450 = TransformationMatrix4x4.rotateY(450 * Math.PI / 180);
    const rotate_y_n90 = TransformationMatrix4x4.rotateY(-90 * Math.PI / 180);
    const rotate_y_n111 = TransformationMatrix4x4.rotateY(-111 * Math.PI / 180);
    const rotate_y_n270 = TransformationMatrix4x4.rotateY(-270 * Math.PI / 180);
    const rotate_z_0 = TransformationMatrix4x4.rotateZ(0 * Math.PI / 180);
    const rotate_z_3 = TransformationMatrix4x4.rotateZ(3 * Math.PI / 180);
    const rotate_z_33 = TransformationMatrix4x4.rotateZ(33 * Math.PI / 180);
    const rotate_z_45 = TransformationMatrix4x4.rotateZ(45 * Math.PI / 180);
    const rotate_z_90 = TransformationMatrix4x4.rotateZ(90 * Math.PI / 180);
    const rotate_z_180 = TransformationMatrix4x4.rotateZ(180 * Math.PI / 180);
    const rotate_z_360 = TransformationMatrix4x4.rotateZ(360 * Math.PI / 180);
    const rotate_z_450 = TransformationMatrix4x4.rotateZ(450 * Math.PI / 180);
    const rotate_z_n90 = TransformationMatrix4x4.rotateZ(-90 * Math.PI / 180);
    const rotate_z_n111 = TransformationMatrix4x4.rotateZ(-111 * Math.PI / 180);
    const rotate_z_n270 = TransformationMatrix4x4.rotateZ(-270 * Math.PI / 180);

    // Points
    const point_0_0_0: [number, number, number, number] = [0, 0, 0, 1];
    const point_1_2_3: [number, number, number, number] = [1, 2, 3, 1];
    const point_111_222_333: [number, number, number, number] = [111, 222, 333, 1];
    const point_100_0_0: [number, number, number, number] = [100, 0, 0, 1];
    const point_0_200_0: [number, number, number, number] = [0, 200, 0, 1];
    const point_0_0_300: [number, number, number, number] = [0, 0, 300, 1];
    const vector_0_0_0: [number, number, number, number] = [0, 0, 0, 0];
    const vector_1_2_3: [number, number, number, number] = [1, 2, 3, 0];
    const vector_111_222_333: [number, number, number, number] = [111, 222, 333, 0];

    describe("General", () => {
        test("constructor", () => {
            expect(matrix_0_to_0).toEqual({
                'e11': 0, 'e12': 0, 'e13': 0, 'e14': 0,
                'e21': 0, 'e22': 0, 'e23': 0, 'e24': 0,
                'e31': 0, 'e32': 0, 'e33': 0, 'e34': 0,
                'e41': 0, 'e42': 0, 'e43': 0, 'e44': 0,
            });
            expect(matrix_0_to_15).toEqual({
                'e11': 0, 'e12': 1, 'e13': 2, 'e14': 3,
                'e21': 4, 'e22': 5, 'e23': 6, 'e24': 7,
                'e31': 8, 'e32': 9, 'e33': 10, 'e34': 11,
                'e41': 12, 'e42': 13, 'e43': 14, 'e44': 15,
            });
            expect(matrix_0_0_to_15_15).toEqual({
                'e11': 0.0, 'e12': 1.1, 'e13': 2.2, 'e14': 3.3,
                'e21': 4.4, 'e22': 5.5, 'e23': 6.6, 'e24': 7.7,
                'e31': 8.8, 'e32': 9.9, 'e33': 10.10, 'e34': 11.11,
                'e41': 12.12, 'e42': 13.13, 'e43': 14.14, 'e44': 15.15,
            });
            expect(matrix0_123456789_to_15_678901234).toEqual({
                'e11': 0.123456789, 'e12': 1.234567890, 'e13': 2.345678901, 'e14': 3.456789012,
                'e21': 4.567890123, 'e22': 5.678901234, 'e23': 6.789012345, 'e24': 7.890123456,
                'e31': 8.901234567, 'e32': 9.012345678, 'e33': 10.123456789, 'e34': 11.234567890,
                'e41': 12.345678901, 'e42': 13.456789012, 'e43': 14.567890123, 'e44': 15.678901234,
            });
        });
        describe("get", () => {
            test("(0 ... 0)", () => {
                expect(matrix_0_to_0.get(0, 0)).toBe(0);
                expect(matrix_0_to_0.get(0, 1)).toBe(0);
                expect(matrix_0_to_0.get(0, 2)).toBe(0);
                expect(matrix_0_to_0.get(0, 3)).toBe(0);
                expect(matrix_0_to_0.get(1, 0)).toBe(0);
                expect(matrix_0_to_0.get(1, 1)).toBe(0);
                expect(matrix_0_to_0.get(1, 2)).toBe(0);
                expect(matrix_0_to_0.get(1, 3)).toBe(0);
                expect(matrix_0_to_0.get(2, 0)).toBe(0);
                expect(matrix_0_to_0.get(2, 1)).toBe(0);
                expect(matrix_0_to_0.get(2, 2)).toBe(0);
                expect(matrix_0_to_0.get(2, 3)).toBe(0);
                expect(matrix_0_to_0.get(3, 0)).toBe(0);
                expect(matrix_0_to_0.get(3, 1)).toBe(0);
                expect(matrix_0_to_0.get(3, 2)).toBe(0);
                expect(matrix_0_to_0.get(3, 3)).toBe(0);
            });
            test("(0 ... 15)", () => {
                expect(matrix_0_to_15.get(0, 0)).toBe(0);
                expect(matrix_0_to_15.get(0, 1)).toBe(1);
                expect(matrix_0_to_15.get(0, 2)).toBe(2);
                expect(matrix_0_to_15.get(0, 3)).toBe(3);
                expect(matrix_0_to_15.get(1, 0)).toBe(4);
                expect(matrix_0_to_15.get(1, 1)).toBe(5);
                expect(matrix_0_to_15.get(1, 2)).toBe(6);
                expect(matrix_0_to_15.get(1, 3)).toBe(7);
                expect(matrix_0_to_15.get(2, 0)).toBe(8);
                expect(matrix_0_to_15.get(2, 1)).toBe(9);
                expect(matrix_0_to_15.get(2, 2)).toBe(10);
                expect(matrix_0_to_15.get(2, 3)).toBe(11);
                expect(matrix_0_to_15.get(3, 0)).toBe(12);
                expect(matrix_0_to_15.get(3, 1)).toBe(13);
                expect(matrix_0_to_15.get(3, 2)).toBe(14);
                expect(matrix_0_to_15.get(3, 3)).toBe(15);
            });
            test("(0.0 ... 15.15)", () => {
                expect(matrix_0_0_to_15_15.get(0, 0)).toBe(0.0);
                expect(matrix_0_0_to_15_15.get(0, 1)).toBe(1.1);
                expect(matrix_0_0_to_15_15.get(0, 2)).toBe(2.2);
                expect(matrix_0_0_to_15_15.get(0, 3)).toBe(3.3);
                expect(matrix_0_0_to_15_15.get(1, 0)).toBe(4.4);
                expect(matrix_0_0_to_15_15.get(1, 1)).toBe(5.5);
                expect(matrix_0_0_to_15_15.get(1, 2)).toBe(6.6);
                expect(matrix_0_0_to_15_15.get(1, 3)).toBe(7.7);
                expect(matrix_0_0_to_15_15.get(2, 0)).toBe(8.8);
                expect(matrix_0_0_to_15_15.get(2, 1)).toBe(9.9);
                expect(matrix_0_0_to_15_15.get(2, 2)).toBe(10.10);
                expect(matrix_0_0_to_15_15.get(2, 3)).toBe(11.11);
                expect(matrix_0_0_to_15_15.get(3, 0)).toBe(12.12);
                expect(matrix_0_0_to_15_15.get(3, 1)).toBe(13.13);
                expect(matrix_0_0_to_15_15.get(3, 2)).toBe(14.14);
                expect(matrix_0_0_to_15_15.get(3, 3)).toBe(15.15);
            });
            test("(0.123456789 ... 15.678901234)", () => {
                expect(matrix0_123456789_to_15_678901234.get(0, 0)).toBe(0.123456789);
                expect(matrix0_123456789_to_15_678901234.get(0, 1)).toBe(1.234567890);
                expect(matrix0_123456789_to_15_678901234.get(0, 2)).toBe(2.345678901);
                expect(matrix0_123456789_to_15_678901234.get(0, 3)).toBe(3.456789012);
                expect(matrix0_123456789_to_15_678901234.get(1, 0)).toBe(4.567890123);
                expect(matrix0_123456789_to_15_678901234.get(1, 1)).toBe(5.678901234);
                expect(matrix0_123456789_to_15_678901234.get(1, 2)).toBe(6.789012345);
                expect(matrix0_123456789_to_15_678901234.get(1, 3)).toBe(7.890123456);
                expect(matrix0_123456789_to_15_678901234.get(2, 0)).toBe(8.901234567);
                expect(matrix0_123456789_to_15_678901234.get(2, 1)).toBe(9.012345678);
                expect(matrix0_123456789_to_15_678901234.get(2, 2)).toBe(10.123456789);
                expect(matrix0_123456789_to_15_678901234.get(2, 3)).toBe(11.234567890);
                expect(matrix0_123456789_to_15_678901234.get(3, 0)).toBe(12.345678901);
                expect(matrix0_123456789_to_15_678901234.get(3, 1)).toBe(13.456789012);
                expect(matrix0_123456789_to_15_678901234.get(3, 2)).toBe(14.567890123);
                expect(matrix0_123456789_to_15_678901234.get(3, 3)).toBe(15.678901234);
            });
            describe("Invalid", () => {
                test("Row and Column", () => {
                    expect(() => matrix_0_to_0.get(999, 333)).toThrow(`Invalid row 999 and column 333`);
                    expect(() => matrix_0_to_15.get(-1, 3.1)).toThrow(`Invalid row -1 and column 3.1`);
                    expect(() => matrix0_123456789_to_15_678901234.get(0.9, 0.5)).toThrow(`Invalid row 0.9 and column 0.5`);
                    expect(() => matrix_0_to_0.get(0.5, 0.9)).toThrow(`Invalid row 0.5 and column 0.9`);
                    expect(() => matrix_0_0_to_15_15.get(3.1, -1)).toThrow(`Invalid row 3.1 and column -1`);
                    expect(() => matrix0_123456789_to_15_678901234.get(333, 999)).toThrow(`Invalid row 333 and column 999`);
                });
                test("Row", () => {
                    expect(() => matrix_0_to_0.get(999, 3.0)).toThrow(`Invalid row 999`);
                    expect(() => matrix_0_to_15.get(-1, 2.0)).toThrow(`Invalid row -1`);
                    expect(() => matrix0_123456789_to_15_678901234.get(0.9, 0.0)).toThrow(`Invalid row 0.9`);
                    expect(() => matrix_0_to_0.get(1.5, 3)).toThrow(`Invalid row 1.5`);
                    expect(() => matrix_0_to_15.get(2.5, 2)).toThrow(`Invalid row 2.5`);
                    expect(() => matrix_0_0_to_15_15.get(3.1, 1)).toThrow(`Invalid row 3.1`);
                    expect(() => matrix0_123456789_to_15_678901234.get(333, 0)).toThrow(`Invalid row 333`);
                });
                test("Column", () => {
                    expect(() => matrix_0_to_0.get(0, 333)).toThrow(`Invalid column 333`);
                    expect(() => matrix_0_to_15.get(1, 3.1)).toThrow(`Invalid column 3.1`);
                    expect(() => matrix_0_0_to_15_15.get(2, 2.5)).toThrow(`Invalid column 2.5`);
                    expect(() => matrix0_123456789_to_15_678901234.get(3, 0.5)).toThrow(`Invalid column 0.5`);
                    expect(() => matrix_0_to_0.get(0.0, 0.9)).toThrow(`Invalid column 0.9`);
                    expect(() => matrix_0_0_to_15_15.get(2.0, -1)).toThrow(`Invalid column -1`);
                    expect(() => matrix0_123456789_to_15_678901234.get(3.0, 999)).toThrow(`Invalid column 999`);
                })
            });
        });
        describe("copy", () => {
            test("toStrictEqual", () => {
                expect(matrix_0_to_0.copy()).toStrictEqual(matrix_0_to_0);
                expect(matrix_0_to_15.copy()).toStrictEqual(matrix_0_to_15);
                expect(matrix_0_0_to_15_15.copy()).toStrictEqual(matrix_0_0_to_15_15);
                expect(matrix0_123456789_to_15_678901234.copy()).toStrictEqual(matrix0_123456789_to_15_678901234);
            });
            test("isEqual", () => {
                expect(matrix_0_to_0.copy().isEqual(matrix_0_to_0)).toBeTruthy();
                expect(matrix_0_to_15.copy().isEqual(matrix_0_to_15)).toBeTruthy();
                expect(matrix_0_0_to_15_15.copy().isEqual(matrix_0_0_to_15_15)).toBeTruthy();
                expect(matrix0_123456789_to_15_678901234.copy().isEqual(matrix0_123456789_to_15_678901234)).toBeTruthy();
            });
            test("not.toBe", () => {
                expect(matrix_0_to_0.copy()).not.toBe(matrix_0_to_0);
                expect(matrix_0_to_15.copy()).not.toBe(matrix_0_to_15);
                expect(matrix_0_0_to_15_15.copy()).not.toBe(matrix_0_0_to_15_15);
                expect(matrix0_123456789_to_15_678901234.copy()).not.toBe(matrix0_123456789_to_15_678901234);
            });
        });
        describe("isEqual", () => {
            test("(0 ... 0)", () => {
                expect(matrix_0_to_0.isEqual(matrix_0_to_0)).toBeTruthy();
                expect(matrix_0_to_0.isEqual(matrix_0_to_15)).toBeFalsy();
                expect(matrix_0_to_0.isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                expect(matrix_0_to_0.isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
            });
            test("(0 ... 15)", () => {
                expect(matrix_0_to_15.isEqual(matrix_0_to_0)).toBeFalsy();
                expect(matrix_0_to_15.isEqual(matrix_0_to_15)).toBeTruthy();
                expect(matrix_0_to_15.isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                expect(matrix_0_to_15.isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
            });
            test("0.0 ... 15.15)", () => {
                expect(matrix_0_0_to_15_15.isEqual(matrix_0_to_0)).toBeFalsy();
                expect(matrix_0_0_to_15_15.isEqual(matrix_0_to_15)).toBeFalsy();
                expect(matrix_0_0_to_15_15.isEqual(matrix_0_0_to_15_15)).toBeTruthy();
                expect(matrix_0_0_to_15_15.isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
            });
            test("(0.123456789 ... 15.678901234)", () => {
                expect(matrix0_123456789_to_15_678901234.isEqual(matrix_0_to_0)).toBeFalsy();
                expect(matrix0_123456789_to_15_678901234.isEqual(matrix_0_to_15)).toBeFalsy();
                expect(matrix0_123456789_to_15_678901234.isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                expect(matrix0_123456789_to_15_678901234.isEqual(matrix0_123456789_to_15_678901234)).toBeTruthy();
            });
            describe("With offset", () => {
                test("Default Tolerance", () => {
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
                });
                test("tolerance=0", () => {
                    const tolerance = 0;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeFalsy();
                });
                test("tolerance=0.00011", () => {
                    const tolerance = 0.00011;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeFalsy();
                });
                test("tolerance=0.0011", () => {
                    const tolerance = 0.0011;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                });
                test("tolerance=0.011", () => {
                    const tolerance = 0.011;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                });
                test("tolerance=0.11", () => {
                    const tolerance = 0.11;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeFalsy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                });
                test("tolerance=1.1", () => {
                    const tolerance = 1.1;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                });
                test("tolerance=11", () => {
                    const tolerance = 11;
                    expect(copyWithOffset(matrix_0_to_0, 1).isEqual(matrix_0_to_0, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_0, -1).isEqual(matrix_0_to_0, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_15, 0.1).isEqual(matrix_0_to_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_to_15, -0.1).isEqual(matrix_0_to_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, 0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix_0_0_to_15_15, -0.01).isEqual(matrix_0_0_to_15_15, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, 0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                    expect(copyWithOffset(matrix0_123456789_to_15_678901234, -0.001).isEqual(matrix0_123456789_to_15_678901234, tolerance)).toBeTruthy();
                });
                test("Each Element", () => {
                    expect(matrix_0_to_0.copy().set(0, 0, -1).isEqual(matrix_0_to_0)).toBeFalsy();
                    expect(matrix_0_to_15.copy().set(0, 1, -1).isEqual(matrix_0_to_15)).toBeFalsy();
                    expect(matrix_0_0_to_15_15.copy().set(0, 2, -1).isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                    expect(matrix0_123456789_to_15_678901234.copy().set(0, 3, -1).isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
                    expect(matrix_0_to_0.copy().set(1, 0, -1).isEqual(matrix_0_to_0)).toBeFalsy();
                    expect(matrix_0_to_15.copy().set(1, 1, -1).isEqual(matrix_0_to_15)).toBeFalsy();
                    expect(matrix_0_0_to_15_15.copy().set(1, 2, -1).isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                    expect(matrix0_123456789_to_15_678901234.copy().set(1, 3, -1).isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
                    expect(matrix_0_to_0.copy().set(2, 0, -1).isEqual(matrix_0_to_0)).toBeFalsy();
                    expect(matrix_0_to_15.copy().set(2, 1, -1).isEqual(matrix_0_to_15)).toBeFalsy();
                    expect(matrix_0_0_to_15_15.copy().set(2, 2, -1).isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                    expect(matrix0_123456789_to_15_678901234.copy().set(2, 3, -1).isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
                    expect(matrix_0_to_0.copy().set(3, 0, -1).isEqual(matrix_0_to_0)).toBeFalsy();
                    expect(matrix_0_to_15.copy().set(3, 1, -1).isEqual(matrix_0_to_15)).toBeFalsy();
                    expect(matrix_0_0_to_15_15.copy().set(3, 2, -1).isEqual(matrix_0_0_to_15_15)).toBeFalsy();
                    expect(matrix0_123456789_to_15_678901234.copy().set(3, 3, -1).isEqual(matrix0_123456789_to_15_678901234)).toBeFalsy();
                });
            });
        });
        describe("toString", () => {
            test("Default digits", () => {
                expect(matrix_0_to_0.toString()).toBe(
                    "0 0 0 0" + "\n" +
                    "0 0 0 0" + "\n" +
                    "0 0 0 0" + "\n" +
                    "0 0 0 0"
                );
                expect(matrix_0_to_15.toString()).toBe(
                    " 0  1  2  3" + "\n" +
                    " 4  5  6  7" + "\n" +
                    " 8  9 10 11" + "\n" +
                    "12 13 14 15"
                );
                expect(matrix_0_0_to_15_15.toString()).toBe(
                    " 0  1  2  3" + "\n" +
                    " 4  6  7  8" + "\n" +
                    " 9 10 10 11" + "\n" +
                    "12 13 14 15"
                );
                expect(matrix0_123456789_to_15_678901234.toString()).toBe(
                    " 0  1  2  3" + "\n" +
                    " 5  6  7  8" + "\n" +
                    " 9  9 10 11" + "\n" +
                    "12 13 15 16"
                );
            });
            test("digits=4", () => {
                expect(matrix_0_to_0.toString(4)).toBe(
                    "0.0000 0.0000 0.0000 0.0000" + "\n" +
                    "0.0000 0.0000 0.0000 0.0000" + "\n" +
                    "0.0000 0.0000 0.0000 0.0000" + "\n" +
                    "0.0000 0.0000 0.0000 0.0000"
                );
                expect(matrix_0_to_15.toString(4)).toBe(
                    " 0.0000  1.0000  2.0000  3.0000" + "\n" +
                    " 4.0000  5.0000  6.0000  7.0000" + "\n" +
                    " 8.0000  9.0000 10.0000 11.0000" + "\n" +
                    "12.0000 13.0000 14.0000 15.0000"
                );
                expect(matrix_0_0_to_15_15.toString(4)).toBe(
                    " 0.0000  1.1000  2.2000  3.3000" + "\n" +
                    " 4.4000  5.5000  6.6000  7.7000" + "\n" +
                    " 8.8000  9.9000 10.1000 11.1100" + "\n" +
                    "12.1200 13.1300 14.1400 15.1500"
                );
                expect(matrix0_123456789_to_15_678901234.toString(4)).toBe(
                    " 0.1235  1.2346  2.3457  3.4568" + "\n" +
                    " 4.5679  5.6789  6.7890  7.8901" + "\n" +
                    " 8.9012  9.0123 10.1235 11.2346" + "\n" +
                    "12.3457 13.4568 14.5679 15.6789"
                );
            });
        });
    });
    describe("Factories", () => {
        test("zero", () => {
            expect(zero).toStrictEqual(
                new TransformationMatrix4x4(
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                )
            )
        })
        test("identity", () => {
            expect(identity).toStrictEqual(
                new TransformationMatrix4x4(
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1
                )
            );
        });
        test("translate", () => {
            expect(translate_0_0_0).toStrictEqual(
                new TransformationMatrix4x4(
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1,
                )
            );
            expect(translate_1_2_3).toStrictEqual(
                new TransformationMatrix4x4(
                    1, 0, 0, 1,
                    0, 1, 0, 2,
                    0, 0, 1, 3,
                    0, 0, 0, 1,
                )
            );
            expect(translate_111_222_333).toStrictEqual(
                new TransformationMatrix4x4(
                    1, 0, 0, 111,
                    0, 1, 0, 222,
                    0, 0, 1, 333,
                    0, 0, 0, 1,
                )
            );
        });
        test("scale", () => {
            expect(scale_0_0_0).toStrictEqual(
                new TransformationMatrix4x4(
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 0,
                    0, 0, 0, 1,
                )
            );
            expect(scale_1_1_1).toStrictEqual(
                new TransformationMatrix4x4(
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1,
                )
            );
            expect(scale_4_5_6).toStrictEqual(
                new TransformationMatrix4x4(
                    4, 0, 0, 0,
                    0, 5, 0, 0,
                    0, 0, 6, 0,
                    0, 0, 0, 1,
                )
            );
            expect(scale_111_222_333).toStrictEqual(
                new TransformationMatrix4x4(
                    111, 0, 0, 0,
                    0, 222, 0, 0,
                    0, 0, 333, 0,
                    0, 0, 0, 1,
                )
            );
        });
        describe("rotate", () => {
            const tolerance = 0.1 ** 5;
            test("X", () => {
                expect(rotate_x_0.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_3.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0.99862, -0.05233, 0,
                        0, 0.05233, 0.99862, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_33.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0.83867, -0.54463, 0,
                        0, 0.54463, 0.83867, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_45.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0.70710, -0.70710, 0,
                        0, 0.70710, 0.70710, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_90.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0, -1, 0,
                        0, 1, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_180.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, -1, 0, 0,
                        0, 0, -1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_360.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_450.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0, -1, 0,
                        0, 1, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_n90.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0, 1, 0,
                        0, -1, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_n111.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, -0.35836, 0.93358, 0,
                        0, -0.93358, -0.35836, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_x_n270.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 0, -1, 0,
                        0, 1, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
            });
            test("Y", () => {
                expect(rotate_y_0.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_3.isEqual(
                    new TransformationMatrix4x4(
                        0.99862, 0, 0.05233, 0,
                        0, 1, 0, 0,
                        -0.05233, 0, 0.99862, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_33.isEqual(
                    new TransformationMatrix4x4(
                        0.83867, 0, 0.54463, 0,
                        0, 1, 0, 0,
                        -0.54463, 0, 0.83867, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_45.isEqual(
                    new TransformationMatrix4x4(
                        0.70710, 0, 0.70710, 0,
                        0, 1, 0, 0,
                        -0.70710, 0, 0.70710, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_90.isEqual(
                    new TransformationMatrix4x4(
                        0, 0, 1, 0,
                        0, 1, 0, 0,
                        -1, 0, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_180.isEqual(
                    new TransformationMatrix4x4(
                        -1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, -1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_360.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_450.isEqual(
                    new TransformationMatrix4x4(
                        0, 0, 1, 0,
                        0, 1, 0, 0,
                        -1, 0, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_n90.isEqual(
                    new TransformationMatrix4x4(
                        0, 0, -1, 0,
                        0, 1, 0, 0,
                        1, 0, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_n111.isEqual(
                    new TransformationMatrix4x4(
                        -0.35836, 0, -0.93358, 0,
                        0, 1, 0, 0,
                        0.93358, 0, -0.35836, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_y_n270.isEqual(
                    new TransformationMatrix4x4(
                        0, 0, 1, 0,
                        0, 1, 0, 0,
                        -1, 0, 0, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
            });
            test("Z", () => {
                expect(rotate_z_0.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_3.isEqual(
                    new TransformationMatrix4x4(
                        0.99862, -0.05233, 0, 0,
                        0.05233, 0.99862, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_33.isEqual(
                    new TransformationMatrix4x4(
                        0.83867, -0.54463, 0, 0,
                        0.54463, 0.83867, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_45.isEqual(
                    new TransformationMatrix4x4(
                        0.70710, -0.70710, 0, 0,
                        0.70710, 0.70710, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_90.isEqual(
                    new TransformationMatrix4x4(
                        0, -1, 0, 0,
                        1, 0, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_180.isEqual(
                    new TransformationMatrix4x4(
                        -1, 0, 0, 0,
                        0, -1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_360.isEqual(
                    new TransformationMatrix4x4(
                        1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_450.isEqual(
                    new TransformationMatrix4x4(
                        0, -1, 0, 0,
                        1, 0, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_n90.isEqual(
                    new TransformationMatrix4x4(
                        0, 1, 0, 0,
                        -1, 0, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_n111.isEqual(
                    new TransformationMatrix4x4(
                        -0.35836, 0.93358, 0, 0,
                        -0.93358, -0.35836, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
                expect(rotate_z_n270.isEqual(
                    new TransformationMatrix4x4(
                        0, -1, 0, 0,
                        1, 0, 0, 0,
                        0, 0, 1, 0,
                        0, 0, 0, 1,
                    ),
                    tolerance
                )).toBeTruthy();
            });
        });
    });

    describe("Operations", () => {
        describe("apply", () => {
            test("identity", () => {
                expect(identity.apply(...point_0_0_0)).toStrictEqual([0, 0, 0, 1]);
                expect(identity.apply(...point_1_2_3)).toStrictEqual([1, 2, 3, 1]);
                expect(identity.apply(...point_111_222_333)).toStrictEqual([111, 222, 333, 1]);
                expect(identity.apply(...point_100_0_0)).toStrictEqual([100, 0, 0, 1]);
                expect(identity.apply(...point_0_200_0)).toStrictEqual([0, 200, 0, 1]);
                expect(identity.apply(...point_0_0_300)).toStrictEqual([0, 0, 300, 1]);
                expect(identity.apply(...vector_0_0_0)).toStrictEqual([0, 0, 0, 0]);
                expect(identity.apply(...vector_1_2_3)).toStrictEqual([1, 2, 3, 0]);
                expect(identity.apply(...vector_111_222_333)).toStrictEqual([111, 222, 333, 0]);
            });
            describe("translate", () => {
                test("(0,0,0)", () => {
                    expect(translate_0_0_0.apply(...point_0_0_0)).toStrictEqual([0, 0, 0, 1]);
                    expect(translate_0_0_0.apply(...point_1_2_3)).toStrictEqual([1, 2, 3, 1]);
                    expect(translate_0_0_0.apply(...point_111_222_333)).toStrictEqual([111, 222, 333, 1]);
                    expect(translate_0_0_0.apply(...point_100_0_0)).toStrictEqual([100, 0, 0, 1]);
                    expect(translate_0_0_0.apply(...point_0_200_0)).toStrictEqual([0, 200, 0, 1]);
                    expect(translate_0_0_0.apply(...point_0_0_300)).toStrictEqual([0, 0, 300, 1]);
                    expect(translate_0_0_0.apply(...vector_0_0_0)).toStrictEqual([0, 0, 0, 0]);
                    expect(translate_0_0_0.apply(...vector_1_2_3)).toStrictEqual([1, 2, 3, 0]);
                    expect(translate_0_0_0.apply(...vector_111_222_333)).toStrictEqual([111, 222, 333, 0]);
                });
                test("(1,2,3)", () => {
                    expect(translate_1_2_3.apply(...point_0_0_0)).toStrictEqual([0 + 1, 0 + 2, 0 + 3, 1]);
                    expect(translate_1_2_3.apply(...point_1_2_3)).toStrictEqual([1 + 1, 2 + 2, 3 + 3, 1]);
                    expect(translate_1_2_3.apply(...point_111_222_333)).toStrictEqual([111 + 1, 222 + 2, 333 + 3, 1]);
                    expect(translate_1_2_3.apply(...point_100_0_0)).toStrictEqual([100 + 1, 0 + 2, 0 + 3, 1]);
                    expect(translate_1_2_3.apply(...point_0_200_0)).toStrictEqual([0 + 1, 200 + 2, 0 + 3, 1]);
                    expect(translate_1_2_3.apply(...point_0_0_300)).toStrictEqual([0 + 1, 0 + 2, 300 + 3, 1]);
                    expect(translate_1_2_3.apply(...vector_0_0_0)).toStrictEqual([0, 0, 0, 0]);
                    expect(translate_1_2_3.apply(...vector_1_2_3)).toStrictEqual([1, 2, 3, 0]);
                    expect(translate_1_2_3.apply(...vector_111_222_333)).toStrictEqual([111, 222, 333, 0]);
                });
                test("(111,222,333)", () => {
                    expect(translate_111_222_333.apply(...point_0_0_0)).toStrictEqual([0 + 111, 0 + 222, 0 + 333, 1]);
                    expect(translate_111_222_333.apply(...point_1_2_3)).toStrictEqual([1 + 111, 2 + 222, 3 + 333, 1]);
                    expect(translate_111_222_333.apply(...point_111_222_333)).toStrictEqual([111 + 111, 222 + 222, 333 + 333, 1]);
                    expect(translate_111_222_333.apply(...point_100_0_0)).toStrictEqual([100 + 111, 0 + 222, 0 + 333, 1]);
                    expect(translate_111_222_333.apply(...point_0_200_0)).toStrictEqual([0 + 111, 200 + 222, 0 + 333, 1]);
                    expect(translate_111_222_333.apply(...point_0_0_300)).toStrictEqual([0 + 111, 0 + 222, 300 + 333, 1]);
                    expect(translate_111_222_333.apply(...vector_0_0_0)).toStrictEqual([0, 0, 0, 0]);
                    expect(translate_111_222_333.apply(...vector_1_2_3)).toStrictEqual([1, 2, 3, 0]);
                    expect(translate_111_222_333.apply(...vector_111_222_333)).toStrictEqual([111, 222, 333, 0]);
                });
            });
            describe("scale", () => {
                test("(0,0,0)", () => {
                    expect(scale_0_0_0.apply(...point_0_0_0)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_0_0_0.apply(...point_1_2_3)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_0_0_0.apply(...point_111_222_333)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_0_0_0.apply(...point_100_0_0)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_0_0_0.apply(...point_0_200_0)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_0_0_0.apply(...point_0_0_300)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_0_0_0.apply(...vector_0_0_0)).toStrictEqual([0, 0, 0, 0]);
                    expect(scale_0_0_0.apply(...vector_1_2_3)).toStrictEqual([0, 0, 0, 0]);
                    expect(scale_0_0_0.apply(...vector_111_222_333)).toStrictEqual([0, 0, 0, 0]);
                });
                test("(1,1,1)", () => {
                    expect(scale_1_1_1.apply(...point_0_0_0)).toStrictEqual([0, 0, 0, 1]);
                    expect(scale_1_1_1.apply(...point_1_2_3)).toStrictEqual([1, 2, 3, 1]);
                    expect(scale_1_1_1.apply(...point_111_222_333)).toStrictEqual([111, 222, 333, 1]);
                    expect(scale_1_1_1.apply(...point_100_0_0)).toStrictEqual([100, 0, 0, 1]);
                    expect(scale_1_1_1.apply(...point_0_200_0)).toStrictEqual([0, 200, 0, 1]);
                    expect(scale_1_1_1.apply(...point_0_0_300)).toStrictEqual([0, 0, 300, 1]);
                    expect(scale_1_1_1.apply(...vector_0_0_0)).toStrictEqual([0, 0, 0, 0]);
                    expect(scale_1_1_1.apply(...vector_1_2_3)).toStrictEqual([1, 2, 3, 0]);
                    expect(scale_1_1_1.apply(...vector_111_222_333)).toStrictEqual([111, 222, 333, 0]);
                });
                test("(4,5,6)", () => {
                    expect(scale_4_5_6.apply(...point_0_0_0)).toStrictEqual([0 * 4, 0 * 5, 0 * 6, 1]);
                    expect(scale_4_5_6.apply(...point_1_2_3)).toStrictEqual([1 * 4, 2 * 5, 3 * 6, 1]);
                    expect(scale_4_5_6.apply(...point_111_222_333)).toStrictEqual([111 * 4, 222 * 5, 333 * 6, 1]);
                    expect(scale_4_5_6.apply(...point_100_0_0)).toStrictEqual([100 * 4, 0 * 5, 0 * 6, 1]);
                    expect(scale_4_5_6.apply(...point_0_200_0)).toStrictEqual([0 * 4, 200 * 5, 0 * 6, 1]);
                    expect(scale_4_5_6.apply(...point_0_0_300)).toStrictEqual([0 * 4, 0 * 5, 300 * 6, 1]);
                    expect(scale_4_5_6.apply(...vector_0_0_0)).toStrictEqual([0 * 4, 0 * 5, 0 * 6, 0]);
                    expect(scale_4_5_6.apply(...vector_1_2_3)).toStrictEqual([1 * 4, 2 * 5, 3 * 6, 0]);
                    expect(scale_4_5_6.apply(...vector_111_222_333)).toStrictEqual([111 * 4, 222 * 5, 333 * 6, 0]);
                });
                test("(111,222,333)", () => {
                    expect(scale_111_222_333.apply(...point_0_0_0)).toStrictEqual([0 * 111, 0 * 222, 0 * 333, 1]);
                    expect(scale_111_222_333.apply(...point_1_2_3)).toStrictEqual([1 * 111, 2 * 222, 3 * 333, 1]);
                    expect(scale_111_222_333.apply(...point_111_222_333)).toStrictEqual([111 * 111, 222 * 222, 333 * 333, 1]);
                    expect(scale_111_222_333.apply(...point_100_0_0)).toStrictEqual([100 * 111, 0 * 222, 0 * 333, 1]);
                    expect(scale_111_222_333.apply(...point_0_200_0)).toStrictEqual([0 * 111, 200 * 222, 0 * 333, 1]);
                    expect(scale_111_222_333.apply(...point_0_0_300)).toStrictEqual([0 * 111, 0 * 222, 300 * 333, 1]);
                    expect(scale_111_222_333.apply(...vector_0_0_0)).toStrictEqual([0 * 111, 0 * 222, 0 * 333, 0]);
                    expect(scale_111_222_333.apply(...vector_1_2_3)).toStrictEqual([1 * 111, 2 * 222, 3 * 333, 0]);
                    expect(scale_111_222_333.apply(...vector_111_222_333)).toStrictEqual([111 * 111, 222 * 222, 333 * 333, 0]);
                });
            });
            describe("rotate", () => {
                const numDigits = 3;

                describe("X", () => {
                    test("0°", () => {
                        rotate_x_0.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_0.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 1][i], numDigits));
                        rotate_x_0.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 1][i], numDigits));
                        rotate_x_0.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_0.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_x_0.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_x_0.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_0.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 0][i], numDigits));
                        rotate_x_0.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 0][i], numDigits));
                    });
                    test("3°", () => {
                        rotate_x_3.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_3.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 1.84, 3.101, 1][i], numDigits));
                        rotate_x_3.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 204.268, 344.162, 1][i], numDigits));
                        rotate_x_3.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_3.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 199.726, 10.467, 1][i], numDigits));
                        rotate_x_3.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, -15.701, 299.589, 1][i], numDigits));
                        rotate_x_3.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_3.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 1.84, 3.101, 0][i], numDigits));
                        rotate_x_3.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 204.268, 344.162, 0][i], numDigits));
                    });
                    test("33°", () => {
                        rotate_x_33.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_33.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 0.043, 3.605, 1][i], numDigits));
                        rotate_x_33.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 4.82, 400.187, 1][i], numDigits));
                        rotate_x_33.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_33.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 167.734, 108.928, 1][i], numDigits));
                        rotate_x_33.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, -163.392, 251.601, 1][i], numDigits));
                        rotate_x_33.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_33.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 0.043, 3.605, 0][i], numDigits));
                        rotate_x_33.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 4.82, 400.187, 0][i], numDigits));
                    });
                    test("45°", () => {
                        rotate_x_45.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_45.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -0.707, 3.536, 1][i], numDigits));
                        rotate_x_45.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -78.489, 392.444, 1][i], numDigits));
                        rotate_x_45.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_45.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 141.421, 141.421, 1][i], numDigits));
                        rotate_x_45.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, -212.132, 212.132, 1][i], numDigits));
                        rotate_x_45.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_45.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -0.707, 3.536, 0][i], numDigits));
                        rotate_x_45.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -78.489, 392.444, 0][i], numDigits));
                    });
                    test("90°", () => {
                        rotate_x_90.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_90.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -3, 2, 1][i], numDigits));
                        rotate_x_90.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -333, 222, 1][i], numDigits));
                        rotate_x_90.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_90.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 200, 1][i], numDigits));
                        rotate_x_90.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, -300, 0, 1][i], numDigits));
                        rotate_x_90.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_90.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -3, 2, 0][i], numDigits));
                        rotate_x_90.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -333, 222, 0][i], numDigits));
                    });
                    test("180°", () => {
                        rotate_x_180.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_180.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -2, -3, 1][i], numDigits));
                        rotate_x_180.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -222, -333, 1][i], numDigits));
                        rotate_x_180.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_180.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, -200, 0, 1][i], numDigits));
                        rotate_x_180.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, -300, 1][i], numDigits));
                        rotate_x_180.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_180.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -2, -3, 0][i], numDigits));
                        rotate_x_180.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -222, -333, 0][i], numDigits));
                    });
                    test("360°", () => {
                        rotate_x_360.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_360.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 1][i], numDigits));
                        rotate_x_360.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 1][i], numDigits));
                        rotate_x_360.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_360.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_x_360.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_x_360.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_360.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 0][i], numDigits));
                        rotate_x_360.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 0][i], numDigits));
                    });
                    test("450°", () => {
                        rotate_x_450.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_450.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -3, 2, 1][i], numDigits));
                        rotate_x_450.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -333, 222, 1][i], numDigits));
                        rotate_x_450.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_450.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 200, 1][i], numDigits));
                        rotate_x_450.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, -300, 0, 1][i], numDigits));
                        rotate_x_450.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_450.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -3, 2, 0][i], numDigits));
                        rotate_x_450.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -333, 222, 0][i], numDigits));
                    });
                    test("-90°", () => {
                        rotate_x_n90.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_n90.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 3, -2, 1][i], numDigits));
                        rotate_x_n90.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 333, -222, 1][i], numDigits));
                        rotate_x_n90.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_n90.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, -200, 1][i], numDigits));
                        rotate_x_n90.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 300, 0, 1][i], numDigits));
                        rotate_x_n90.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_n90.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 3, -2, 0][i], numDigits));
                        rotate_x_n90.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 333, -222, 0][i], numDigits));
                    });
                    test("-111°", () => {
                        rotate_x_n111.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_n111.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2.084, -2.942, 1][i], numDigits));
                        rotate_x_n111.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 231.325, -326.591, 1][i], numDigits));
                        rotate_x_n111.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_n111.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, -71.674, -186.716, 1][i], numDigits));
                        rotate_x_n111.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 280.074, -107.51, 1][i], numDigits));
                        rotate_x_n111.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_n111.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2.084, -2.942, 0][i], numDigits));
                        rotate_x_n111.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 231.325, -326.591, 0][i], numDigits));
                    });
                    test("-270°", () => {
                        rotate_x_n270.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_x_n270.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -3, 2, 1][i], numDigits));
                        rotate_x_n270.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -333, 222, 1][i], numDigits));
                        rotate_x_n270.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_x_n270.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 200, 1][i], numDigits));
                        rotate_x_n270.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, -300, 0, 1][i], numDigits));
                        rotate_x_n270.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_x_n270.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, -3, 2, 0][i], numDigits));
                        rotate_x_n270.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, -333, 222, 0][i], numDigits));
                    });
                });

                describe("Y", () => {
                    test("0°", () => {
                        rotate_y_0.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_0.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 1][i], numDigits));
                        rotate_y_0.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 1][i], numDigits));
                        rotate_y_0.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_y_0.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_0.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_y_0.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_0.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 0][i], numDigits));
                        rotate_y_0.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 0][i], numDigits));
                    });
                    test("3°", () => {
                        rotate_y_3.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_3.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1.156, 2, 2.944, 1][i], numDigits));
                        rotate_y_3.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([128.276, 222, 326.734, 1][i], numDigits));
                        rotate_y_3.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([99.863, 0, -5.234, 1][i], numDigits));
                        rotate_y_3.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_3.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([15.701, 0, 299.589, 1][i], numDigits));
                        rotate_y_3.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_3.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1.156, 2, 2.944, 0][i], numDigits));
                        rotate_y_3.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([128.276, 222, 326.734, 0][i], numDigits));
                    });
                    test("33°", () => {
                        rotate_y_33.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_33.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([2.473, 2, 1.971, 1][i], numDigits));
                        rotate_y_33.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([274.457, 222, 218.822, 1][i], numDigits));
                        rotate_y_33.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([83.867, 0, -54.464, 1][i], numDigits));
                        rotate_y_33.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_33.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([163.392, 0, 251.601, 1][i], numDigits));
                        rotate_y_33.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_33.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([2.473, 2, 1.971, 0][i], numDigits));
                        rotate_y_33.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([274.457, 222, 218.822, 0][i], numDigits));
                    });
                    test("45°", () => {
                        rotate_y_45.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_45.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([2.828, 2, 1.414, 1][i], numDigits));
                        rotate_y_45.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([313.955, 222, 156.978, 1][i], numDigits));
                        rotate_y_45.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([70.711, 0, -70.711, 1][i], numDigits));
                        rotate_y_45.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_45.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([212.132, 0, 212.132, 1][i], numDigits));
                        rotate_y_45.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_45.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([2.828, 2, 1.414, 0][i], numDigits));
                        rotate_y_45.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([313.955, 222, 156.978, 0][i], numDigits));
                    });
                    test("90°", () => {
                        rotate_y_90.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_90.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([3, 2, -1, 1][i], numDigits));
                        rotate_y_90.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([333, 222, -111, 1][i], numDigits));
                        rotate_y_90.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, -100, 1][i], numDigits));
                        rotate_y_90.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_90.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([300, 0, 0, 1][i], numDigits));
                        rotate_y_90.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_90.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([3, 2, -1, 0][i], numDigits));
                        rotate_y_90.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([333, 222, -111, 0][i], numDigits));
                    });
                    test("180°", () => {
                        rotate_y_180.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_180.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-1, 2, -3, 1][i], numDigits));
                        rotate_y_180.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-111, 222, -333, 1][i], numDigits));
                        rotate_y_180.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([-100, 0, 0, 1][i], numDigits));
                        rotate_y_180.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_180.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, -300, 1][i], numDigits));
                        rotate_y_180.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_180.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-1, 2, -3, 0][i], numDigits));
                        rotate_y_180.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-111, 222, -333, 0][i], numDigits));
                    });
                    test("360°", () => {
                        rotate_y_360.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_360.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 1][i], numDigits));
                        rotate_y_360.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 1][i], numDigits));
                        rotate_y_360.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_y_360.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_360.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_y_360.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_360.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 0][i], numDigits));
                        rotate_y_360.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 0][i], numDigits));
                    });
                    test("450°", () => {
                        rotate_y_450.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_450.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([3, 2, -1, 1][i], numDigits));
                        rotate_y_450.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([333, 222, -111, 1][i], numDigits));
                        rotate_y_450.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, -100, 1][i], numDigits));
                        rotate_y_450.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_450.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([300, 0, 0, 1][i], numDigits));
                        rotate_y_450.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_450.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([3, 2, -1, 0][i], numDigits));
                        rotate_y_450.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([333, 222, -111, 0][i], numDigits));
                    });
                    test("-90°", () => {
                        rotate_y_n90.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_n90.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-3, 2, 1, 1][i], numDigits));
                        rotate_y_n90.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-333, 222, 111, 1][i], numDigits));
                        rotate_y_n90.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 100, 1][i], numDigits));
                        rotate_y_n90.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_n90.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([-300, 0, 0, 1][i], numDigits));
                        rotate_y_n90.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_n90.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-3, 2, 1, 0][i], numDigits));
                        rotate_y_n90.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-333, 222, 111, 0][i], numDigits));
                    });
                    test("-111°", () => {
                        rotate_y_n111.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_n111.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-3.159, 2, -0.142, 1][i], numDigits));
                        rotate_y_n111.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-350.661, 222, -15.709, 1][i], numDigits));
                        rotate_y_n111.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([-35.837, 0, 93.358, 1][i], numDigits));
                        rotate_y_n111.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_n111.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([-280.074, 0, -107.51, 1][i], numDigits));
                        rotate_y_n111.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_n111.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-3.159, 2, -0.142, 0][i], numDigits));
                        rotate_y_n111.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-350.661, 222, -15.709, 0][i], numDigits));
                    });
                    test("-270°", () => {
                        rotate_y_n270.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_y_n270.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([3, 2, -1, 1][i], numDigits));
                        rotate_y_n270.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([333, 222, -111, 1][i], numDigits));
                        rotate_y_n270.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, -100, 1][i], numDigits));
                        rotate_y_n270.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_y_n270.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([300, 0, 0, 1][i], numDigits));
                        rotate_y_n270.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_y_n270.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([3, 2, -1, 0][i], numDigits));
                        rotate_y_n270.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([333, 222, -111, 0][i], numDigits));
                    });
                });

                describe("Z", () => {
                    test("0°", () => {
                        rotate_z_0.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_0.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 1][i], numDigits));
                        rotate_z_0.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 1][i], numDigits));
                        rotate_z_0.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_z_0.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_z_0.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_0.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_0.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 0][i], numDigits));
                        rotate_z_0.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 0][i], numDigits));
                    });
                    test("3°", () => {
                        rotate_z_3.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_3.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([0.894, 2.05, 3, 1][i], numDigits));
                        rotate_z_3.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([99.229, 227.505, 333, 1][i], numDigits));
                        rotate_z_3.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([99.863, 5.234, 0, 1][i], numDigits));
                        rotate_z_3.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([-10.467, 199.726, 0, 1][i], numDigits));
                        rotate_z_3.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_3.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_3.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([0.894, 2.05, 3, 0][i], numDigits));
                        rotate_z_3.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([99.229, 227.505, 333, 0][i], numDigits));
                    });
                    test("33°", () => {
                        rotate_z_33.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_33.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-0.251, 2.222, 3, 1][i], numDigits));
                        rotate_z_33.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-27.817, 246.64, 333, 1][i], numDigits));
                        rotate_z_33.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([83.867, 54.464, 0, 1][i], numDigits));
                        rotate_z_33.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([-108.928, 167.734, 0, 1][i], numDigits));
                        rotate_z_33.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_33.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_33.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-0.251, 2.222, 3, 0][i], numDigits));
                        rotate_z_33.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-27.817, 246.64, 333, 0][i], numDigits));
                    });
                    test("45°", () => {
                        rotate_z_45.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_45.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-0.707, 2.121, 3, 1][i], numDigits));
                        rotate_z_45.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-78.489, 235.467, 333, 1][i], numDigits));
                        rotate_z_45.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([70.711, 70.711, 0, 1][i], numDigits));
                        rotate_z_45.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([-141.421, 141.421, 0, 1][i], numDigits));
                        rotate_z_45.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_45.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_45.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-0.707, 2.121, 3, 0][i], numDigits));
                        rotate_z_45.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-78.489, 235.467, 333, 0][i], numDigits));
                    });
                    test("90°", () => {
                        rotate_z_90.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_90.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-2, 1, 3, 1][i], numDigits));
                        rotate_z_90.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-222, 111, 333, 1][i], numDigits));
                        rotate_z_90.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 100, 0, 1][i], numDigits));
                        rotate_z_90.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([-200, 0, 0, 1][i], numDigits));
                        rotate_z_90.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_90.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_90.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-2, 1, 3, 0][i], numDigits));
                        rotate_z_90.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-222, 111, 333, 0][i], numDigits));
                    });
                    test("180°", () => {
                        rotate_z_180.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_180.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-1, -2, 3, 1][i], numDigits));
                        rotate_z_180.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-111, -222, 333, 1][i], numDigits));
                        rotate_z_180.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([-100, 0, 0, 1][i], numDigits));
                        rotate_z_180.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, -200, 0, 1][i], numDigits));
                        rotate_z_180.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_180.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_180.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-1, -2, 3, 0][i], numDigits));
                        rotate_z_180.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-111, -222, 333, 0][i], numDigits));
                    });
                    test("360°", () => {
                        rotate_z_360.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_360.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 1][i], numDigits));
                        rotate_z_360.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 1][i], numDigits));
                        rotate_z_360.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([100, 0, 0, 1][i], numDigits));
                        rotate_z_360.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([0, 200, 0, 1][i], numDigits));
                        rotate_z_360.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_360.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_360.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1, 2, 3, 0][i], numDigits));
                        rotate_z_360.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([111, 222, 333, 0][i], numDigits));
                    });
                    test("450°", () => {
                        rotate_z_450.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_450.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-2, 1, 3, 1][i], numDigits));
                        rotate_z_450.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-222, 111, 333, 1][i], numDigits));
                        rotate_z_450.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 100, 0, 1][i], numDigits));
                        rotate_z_450.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([-200, 0, 0, 1][i], numDigits));
                        rotate_z_450.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_450.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_450.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-2, 1, 3, 0][i], numDigits));
                        rotate_z_450.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-222, 111, 333, 0][i], numDigits));
                    });
                    test("-90°", () => {
                        rotate_z_n90.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_n90.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([2, -1, 3, 1][i], numDigits));
                        rotate_z_n90.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([222, -111, 333, 1][i], numDigits));
                        rotate_z_n90.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, -100, 0, 1][i], numDigits));
                        rotate_z_n90.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([200, 0, 0, 1][i], numDigits));
                        rotate_z_n90.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_n90.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_n90.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([2, -1, 3, 0][i], numDigits));
                        rotate_z_n90.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([222, -111, 333, 0][i], numDigits));
                    });
                    test("-111°", () => {
                        rotate_z_n111.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_n111.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1.509, -1.65, 3, 1][i], numDigits));
                        rotate_z_n111.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([167.476, -183.185, 333, 1][i], numDigits));
                        rotate_z_n111.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([-35.837, -93.358, 0, 1][i], numDigits));
                        rotate_z_n111.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([186.716, -71.674, 0, 1][i], numDigits));
                        rotate_z_n111.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_n111.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_n111.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([1.509, -1.65, 3, 0][i], numDigits));
                        rotate_z_n111.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([167.476, -183.185, 333, 0][i], numDigits));
                    });
                    test("-270°", () => {
                        rotate_z_n270.apply(...point_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 1][i], numDigits));
                        rotate_z_n270.apply(...point_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-2, 1, 3, 1][i], numDigits));
                        rotate_z_n270.apply(...point_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-222, 111, 333, 1][i], numDigits));
                        rotate_z_n270.apply(...point_100_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 100, 0, 1][i], numDigits));
                        rotate_z_n270.apply(...point_0_200_0).forEach((value, i) => expect(value).toBeCloseTo([-200, 0, 0, 1][i], numDigits));
                        rotate_z_n270.apply(...point_0_0_300).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 300, 1][i], numDigits));
                        rotate_z_n270.apply(...vector_0_0_0).forEach((value, i) => expect(value).toBeCloseTo([0, 0, 0, 0][i], numDigits));
                        rotate_z_n270.apply(...vector_1_2_3).forEach((value, i) => expect(value).toBeCloseTo([-2, 1, 3, 0][i], numDigits));
                        rotate_z_n270.apply(...vector_111_222_333).forEach((value, i) => expect(value).toBeCloseTo([-222, 111, 333, 0][i], numDigits));
                    });
                });
            });
        });
        describe("concatenate", () => {
            const threshold = 0.1 ** 3;
            describe("identity", () => {
                test("identity", () => {
                    expect(identity.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 1, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(identity.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, 1, 0, 2,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(identity.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, 5, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(identity.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.999, -0.052, 0,
                            0, 0.052, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(identity.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.839, -0.545, 0,
                            0, 0.545, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(identity.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, -0.358, 0.934, 0,
                            0, -0.934, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(identity.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 0,
                            0, 1, 0, 0,
                            -0.052, 0, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(identity.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 0,
                            0, 1, 0, 0,
                            -0.545, 0, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(identity.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, 0,
                            0, 1, 0, 0,
                            0.934, 0, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(identity.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 0,
                            0.052, 0.999, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(identity.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, 0,
                            0.545, 0.839, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(identity.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 0,
                            -0.934, -0.358, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("translate_1_2_3", () => {
                test("identity", () => {
                    expect(translate_1_2_3.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, 1, 0, 2,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(translate_1_2_3.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 2,
                            0, 1, 0, 4,
                            0, 0, 1, 6,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(translate_1_2_3.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 1,
                            0, 5, 0, 2,
                            0, 0, 6, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(translate_1_2_3.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, 0.999, -0.052, 2,
                            0, 0.052, 0.999, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(translate_1_2_3.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, 0.839, -0.545, 2,
                            0, 0.545, 0.839, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(translate_1_2_3.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, -0.358, 0.934, 2,
                            0, -0.934, -0.358, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(translate_1_2_3.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 1,
                            0, 1, 0, 2,
                            -0.052, 0, 0.999, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(translate_1_2_3.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 1,
                            0, 1, 0, 2,
                            -0.545, 0, 0.839, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(translate_1_2_3.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, 1,
                            0, 1, 0, 2,
                            0.934, 0, -0.358, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(translate_1_2_3.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 1,
                            0.052, 0.999, 0, 2,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(translate_1_2_3.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, 1,
                            0.545, 0.839, 0, 2,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(translate_1_2_3.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 1,
                            -0.934, -0.358, 0, 2,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("scale_4_5_6", () => {
                test("identity", () => {
                    expect(scale_4_5_6.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, 5, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(scale_4_5_6.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 4,
                            0, 5, 0, 10,
                            0, 0, 6, 18,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(scale_4_5_6.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            16, 0, 0, 0,
                            0, 25, 0, 0,
                            0, 0, 36, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(scale_4_5_6.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, 4.993, -0.262, 0,
                            0, 0.314, 5.992, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(scale_4_5_6.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, 4.193, -2.723, 0,
                            0, 3.268, 5.032, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(scale_4_5_6.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, -1.792, 4.668, 0,
                            0, -5.601, -2.15, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(scale_4_5_6.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            3.995, 0, 0.209, 0,
                            0, 5, 0, 0,
                            -0.314, 0, 5.992, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(scale_4_5_6.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            3.355, 0, 2.179, 0,
                            0, 5, 0, 0,
                            -3.268, 0, 5.032, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(scale_4_5_6.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -1.433, 0, -3.734, 0,
                            0, 5, 0, 0,
                            5.601, 0, -2.15, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(scale_4_5_6.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            3.995, -0.209, 0, 0,
                            0.262, 4.993, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(scale_4_5_6.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            3.355, -2.179, 0, 0,
                            2.723, 4.193, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(scale_4_5_6.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -1.433, 3.734, 0, 0,
                            -4.668, -1.792, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_x_3", () => {
                test("identity", () => {
                    expect(rotate_x_3.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.999, -0.052, 0,
                            0, 0.052, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_x_3.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, 0.999, -0.052, 1.84,
                            0, 0.052, 0.999, 3.101,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_x_3.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, 4.993, -0.314, 0,
                            0, 0.262, 5.992, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_x_3.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.995, -0.105, 0,
                            0, 0.105, 0.995, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_x_3.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.809, -0.588, 0,
                            0, 0.588, 0.809, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_x_3.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, -0.309, 0.951, 0,
                            0, -0.951, -0.309, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_x_3.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 0,
                            0.003, 0.999, -0.052, 0,
                            -0.052, 0.052, 0.997, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_x_3.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 0,
                            0.029, 0.999, -0.044, 0,
                            -0.544, 0.052, 0.838, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_x_3.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, 0,
                            -0.049, 0.999, 0.019, 0,
                            0.932, 0.052, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_x_3.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 0,
                            0.052, 0.997, -0.052, 0,
                            0.003, 0.052, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_x_3.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, 0,
                            0.544, 0.838, -0.052, 0,
                            0.029, 0.044, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_x_3.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 0,
                            -0.932, -0.358, -0.052, 0,
                            -0.049, -0.019, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_x_33", () => {
                test("identity", () => {
                    expect(rotate_x_33.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.839, -0.545, 0,
                            0, 0.545, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_x_33.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, 0.839, -0.545, 0.043,
                            0, 0.545, 0.839, 3.605,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_x_33.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, 4.193, -3.268, 0,
                            0, 2.723, 5.032, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_x_33.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.809, -0.588, 0,
                            0, 0.588, 0.809, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_x_33.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.407, -0.914, 0,
                            0, 0.914, 0.407, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_x_33.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.208, 0.978, 0,
                            0, -0.978, 0.208, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_x_33.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 0,
                            0.029, 0.839, -0.544, 0,
                            -0.044, 0.545, 0.838, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_x_33.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 0,
                            0.297, 0.839, -0.457, 0,
                            -0.457, 0.545, 0.703, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_x_33.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, 0,
                            -0.508, 0.839, 0.195, 0,
                            0.783, 0.545, -0.301, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_x_33.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 0,
                            0.044, 0.838, -0.545, 0,
                            0.029, 0.544, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_x_33.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, 0,
                            0.457, 0.703, -0.545, 0,
                            0.297, 0.457, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_x_33.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 0,
                            -0.783, -0.301, -0.545, 0,
                            -0.508, -0.195, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_x_n111", () => {
                test("identity", () => {
                    expect(rotate_x_n111.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, -0.358, 0.934, 0,
                            0, -0.934, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_x_n111.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 1,
                            0, -0.358, 0.934, 2.084,
                            0, -0.934, -0.358, -2.942,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_x_n111.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            4, 0, 0, 0,
                            0, -1.792, 5.601, 0,
                            0, -4.668, -2.15, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_x_n111.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, -0.309, 0.951, 0,
                            0, -0.951, -0.309, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_x_n111.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, 0.208, 0.978, 0,
                            0, -0.978, 0.208, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_x_n111.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            1, 0, 0, 0,
                            0, -0.743, -0.669, 0,
                            0, 0.669, -0.743, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_x_n111.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 0,
                            -0.049, -0.358, 0.932, 0,
                            0.019, -0.934, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_x_n111.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 0,
                            -0.508, -0.358, 0.783, 0,
                            0.195, -0.934, -0.301, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_x_n111.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, 0,
                            0.872, -0.358, -0.335, 0,
                            -0.335, -0.934, 0.128, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_x_n111.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 0,
                            -0.019, -0.358, 0.934, 0,
                            -0.049, -0.932, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_x_n111.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, 0,
                            -0.195, -0.301, 0.934, 0,
                            -0.508, -0.783, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_x_n111.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 0,
                            0.335, 0.128, 0.934, 0,
                            0.872, 0.335, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_y_3", () => {
                test("identity", () => {
                    expect(rotate_y_3.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 0,
                            0, 1, 0, 0,
                            -0.052, 0, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_y_3.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0, 0.052, 1.156,
                            0, 1, 0, 2,
                            -0.052, 0, 0.999, 2.944,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_y_3.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            3.995, 0, 0.314, 0,
                            0, 5, 0, 0,
                            -0.209, 0, 5.992, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_y_3.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0.003, 0.052, 0,
                            0, 0.999, -0.052, 0,
                            -0.052, 0.052, 0.997, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_y_3.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0.029, 0.044, 0,
                            0, 0.839, -0.545, 0,
                            -0.052, 0.544, 0.838, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_y_3.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.049, -0.019, 0,
                            0, -0.358, 0.934, 0,
                            -0.052, -0.932, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_y_3.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.995, 0, 0.105, 0,
                            0, 1, 0, 0,
                            -0.105, 0, 0.995, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_y_3.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.809, 0, 0.588, 0,
                            0, 1, 0, 0,
                            -0.588, 0, 0.809, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_y_3.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.309, 0, -0.951, 0,
                            0, 1, 0, 0,
                            0.951, 0, -0.309, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_y_3.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.997, -0.052, 0.052, 0,
                            0.052, 0.999, 0, 0,
                            -0.052, 0.003, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_y_3.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.838, -0.544, 0.052, 0,
                            0.545, 0.839, 0, 0,
                            -0.044, 0.029, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_y_3.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.932, 0.052, 0,
                            -0.934, -0.358, 0, 0,
                            0.019, -0.049, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_y_33", () => {
                test("identity", () => {
                    expect(rotate_y_33.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 0,
                            0, 1, 0, 0,
                            -0.545, 0, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_y_33.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0, 0.545, 2.473,
                            0, 1, 0, 2,
                            -0.545, 0, 0.839, 1.971,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_y_33.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            3.355, 0, 3.268, 0,
                            0, 5, 0, 0,
                            -2.179, 0, 5.032, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_y_33.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0.029, 0.544, 0,
                            0, 0.999, -0.052, 0,
                            -0.545, 0.044, 0.838, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_y_33.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0.297, 0.457, 0,
                            0, 0.839, -0.545, 0,
                            -0.545, 0.457, 0.703, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_y_33.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.508, -0.195, 0,
                            0, -0.358, 0.934, 0,
                            -0.545, -0.783, -0.301, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_y_33.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.809, 0, 0.588, 0,
                            0, 1, 0, 0,
                            -0.588, 0, 0.809, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_y_33.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.407, 0, 0.914, 0,
                            0, 1, 0, 0,
                            -0.914, 0, 0.407, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_y_33.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.208, 0, -0.978, 0,
                            0, 1, 0, 0,
                            0.978, 0, 0.208, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_y_33.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.838, -0.044, 0.545, 0,
                            0.052, 0.999, 0, 0,
                            -0.544, 0.029, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_y_33.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.703, -0.457, 0.545, 0,
                            0.545, 0.839, 0, 0,
                            -0.457, 0.297, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_y_33.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.301, 0.783, 0.545, 0,
                            -0.934, -0.358, 0, 0,
                            0.195, -0.508, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_y_n111", () => {
                test("identity", () => {
                    expect(rotate_y_n111.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, 0,
                            0, 1, 0, 0,
                            0.934, 0, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_y_n111.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0, -0.934, -3.159,
                            0, 1, 0, 2,
                            0.934, 0, -0.358, -0.142,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_y_n111.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            -1.433, 0, -5.601, 0,
                            0, 5, 0, 0,
                            3.734, 0, -2.15, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_y_n111.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, -0.049, -0.932, 0,
                            0, 0.999, -0.052, 0,
                            0.934, -0.019, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_y_n111.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, -0.508, -0.783, 0,
                            0, 0.839, -0.545, 0,
                            0.934, -0.195, -0.301, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_y_n111.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.872, 0.335, 0,
                            0, -0.358, 0.934, 0,
                            0.934, 0.335, 0.128, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_y_n111.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.309, 0, -0.951, 0,
                            0, 1, 0, 0,
                            0.951, 0, -0.309, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_y_n111.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.208, 0, -0.978, 0,
                            0, 1, 0, 0,
                            0.978, 0, 0.208, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_y_n111.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.743, 0, 0.669, 0,
                            0, 1, 0, 0,
                            -0.669, 0, -0.743, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_y_n111.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.019, -0.934, 0,
                            0.052, 0.999, 0, 0,
                            0.932, -0.049, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_y_n111.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            -0.301, 0.195, -0.934, 0,
                            0.545, 0.839, 0, 0,
                            0.783, -0.508, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_y_n111.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.128, -0.335, -0.934, 0,
                            -0.934, -0.358, 0, 0,
                            -0.335, 0.872, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_z_3", () => {
                test("identity", () => {
                    expect(rotate_z_3.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 0,
                            0.052, 0.999, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_z_3.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0, 0.894,
                            0.052, 0.999, 0, 2.05,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_z_3.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            3.995, -0.262, 0, 0,
                            0.209, 4.993, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_z_3.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.052, 0.003, 0,
                            0.052, 0.997, -0.052, 0,
                            0, 0.052, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_z_3.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            0.999, -0.044, 0.029, 0,
                            0.052, 0.838, -0.544, 0,
                            0, 0.545, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_z_3.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.999, 0.019, -0.049, 0,
                            0.052, -0.358, 0.932, 0,
                            0, -0.934, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_z_3.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.997, -0.052, 0.052, 0,
                            0.052, 0.999, 0.003, 0,
                            -0.052, 0, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_z_3.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.838, -0.052, 0.544, 0,
                            0.044, 0.999, 0.029, 0,
                            -0.545, 0, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_z_3.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, -0.052, -0.932, 0,
                            -0.019, 0.999, -0.049, 0,
                            0.934, 0, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_z_3.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.995, -0.105, 0, 0,
                            0.105, 0.995, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_z_3.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.809, -0.588, 0, 0,
                            0.588, 0.809, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_z_3.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.309, 0.951, 0, 0,
                            -0.951, -0.309, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_z_33", () => {
                test("identity", () => {
                    expect(rotate_z_33.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, 0,
                            0.545, 0.839, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_z_33.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.545, 0, -0.251,
                            0.545, 0.839, 0, 2.222,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_z_33.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            3.355, -2.723, 0, 0,
                            2.179, 4.193, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_z_33.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.544, 0.029, 0,
                            0.545, 0.838, -0.044, 0,
                            0, 0.052, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_z_33.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            0.839, -0.457, 0.297, 0,
                            0.545, 0.703, -0.457, 0,
                            0, 0.545, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_z_33.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.839, 0.195, -0.508, 0,
                            0.545, -0.301, 0.783, 0,
                            0, -0.934, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_z_33.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            0.838, -0.545, 0.044, 0,
                            0.544, 0.839, 0.029, 0,
                            -0.052, 0, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_z_33.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            0.703, -0.545, 0.457, 0,
                            0.457, 0.839, 0.297, 0,
                            -0.545, 0, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_z_33.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.301, -0.545, -0.783, 0,
                            -0.195, 0.839, -0.508, 0,
                            0.934, 0, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_z_33.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            0.809, -0.588, 0, 0,
                            0.588, 0.809, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_z_33.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.407, -0.914, 0, 0,
                            0.914, 0.407, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_z_33.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.208, 0.978, 0, 0,
                            -0.978, 0.208, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
            describe("rotate_z_n111", () => {
                test("identity", () => {
                    expect(rotate_z_n111.concatenate(identity).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 0,
                            -0.934, -0.358, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("translate_1_2_3", () => {
                    expect(rotate_z_n111.concatenate(translate_1_2_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, 0, 1.509,
                            -0.934, -0.358, 0, -1.65,
                            0, 0, 1, 3,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("scale_4_5_6", () => {
                    expect(rotate_z_n111.concatenate(scale_4_5_6).isEqual(
                        new TransformationMatrix4x4(
                            -1.433, 4.668, 0, 0,
                            -3.734, -1.792, 0, 0,
                            0, 0, 6, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_3", () => {
                    expect(rotate_z_n111.concatenate(rotate_x_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.932, -0.049, 0,
                            -0.934, -0.358, 0.019, 0,
                            0, 0.052, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_33", () => {
                    expect(rotate_z_n111.concatenate(rotate_x_33).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.783, -0.508, 0,
                            -0.934, -0.301, 0.195, 0,
                            0, 0.545, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_x_n111", () => {
                    expect(rotate_z_n111.concatenate(rotate_x_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, -0.335, 0.872, 0,
                            -0.934, 0.128, -0.335, 0,
                            0, -0.934, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_3", () => {
                    expect(rotate_z_n111.concatenate(rotate_y_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.358, 0.934, -0.019, 0,
                            -0.932, -0.358, -0.049, 0,
                            -0.052, 0, 0.999, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_33", () => {
                    expect(rotate_z_n111.concatenate(rotate_y_33).isEqual(
                        new TransformationMatrix4x4(
                            -0.301, 0.934, -0.195, 0,
                            -0.783, -0.358, -0.508, 0,
                            -0.545, 0, 0.839, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_y_n111", () => {
                    expect(rotate_z_n111.concatenate(rotate_y_n111).isEqual(
                        new TransformationMatrix4x4(
                            0.128, 0.934, 0.335, 0,
                            0.335, -0.358, 0.872, 0,
                            0.934, 0, -0.358, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_3", () => {
                    expect(rotate_z_n111.concatenate(rotate_z_3).isEqual(
                        new TransformationMatrix4x4(
                            -0.309, 0.951, 0, 0,
                            -0.951, -0.309, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_33", () => {
                    expect(rotate_z_n111.concatenate(rotate_z_33).isEqual(
                        new TransformationMatrix4x4(
                            0.208, 0.978, 0, 0,
                            -0.978, 0.208, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
                test("rotate_z_n111", () => {
                    expect(rotate_z_n111.concatenate(rotate_z_n111).isEqual(
                        new TransformationMatrix4x4(
                            -0.743, -0.669, 0, 0,
                            0.669, -0.743, 0, 0,
                            0, 0, 1, 0,
                            0, 0, 0, 1,
                        ),
                        threshold
                    )).toBeTruthy();
                });
            });
        });

    });
});

function copyWithOffset(matrix: TransformationMatrix4x4, offset: number): TransformationMatrix4x4 {
    const copy = matrix.copy();
    for (let row = 0; row <= 3; row++) {
        for (let column = 0; column <= 3; column++) {
            copy.set(row, column, copy.get(row, column) + offset);
        }
    }
    return copy;
};