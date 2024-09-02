/**
 * A 4x4 transformation matrix.
 */
export class TransformationMatrix4x4 {
    /** The element of the first row and first column. */
    protected e11: number;

    /** The element of the first row and second column. */
    protected e12: number;

    /** The element of the first row and third column. */
    protected e13: number;

    /** The element of the first row and fourth column. */
    protected e14: number;

    /** The element of the second row and first column. */
    protected e21: number;

    /** The element of the second row and second column. */
    protected e22: number;

    /** The element of the second row and third column. */
    protected e23: number;

    /** The element of the second row and fourth column. */
    protected e24: number;

    /** The element of the third row and first column. */
    protected e31: number;

    /** The element of the third row and second column. */
    protected e32: number;

    /** The element of the third row and third column. */
    protected e33: number;

    /** The element of the third row and fourth column. */
    protected e34: number;

    /** The element of the fourth row and first column. */
    protected e41: number;

    /** The element of the fourth row and second column. */
    protected e42: number;

    /** The element of the fourth row and third column. */
    protected e43: number;

    /** The element of the fourth row and fourth column. */
    protected e44: number;

    /**
     * The constructor.
     * 
     * ```
     * |-----|-----|-----|-----|
     * | e11 | e12 | e13 | e14 |
     * | e21 | e22 | e23 | e24 |
     * | e31 | e32 | e33 | e34 |
     * | e41 | e42 | e43 | e44 |
     * |-----|-----|-----|-----|
     * ```
     */
    public constructor(e11: number, e12: number, e13: number, e14: number, e21: number, e22: number, e23: number, e24: number, e31: number, e32: number, e33: number, e34: number, e41: number, e42: number, e43: number, e44: number,) {
        this.e11 = e11;
        this.e12 = e12;
        this.e13 = e13;
        this.e14 = e14;
        this.e21 = e21;
        this.e22 = e22;
        this.e23 = e23;
        this.e24 = e24;
        this.e31 = e31;
        this.e32 = e32;
        this.e33 = e33;
        this.e34 = e34;
        this.e41 = e41;
        this.e42 = e42;
        this.e43 = e43;
        this.e44 = e44;
    }

    /**
     * Concatenates this with another transformation matrix.
     * @param other The other transformation matrix.
     * @returns The concatenated matrix.
     *```
     *                                           |-----|-----|-----|-----|   |-----|-----|-----|-----|
     *                                           | a11 | a12 | a13 | a14 |   | a11 | a12 | a13 | a14 |
     *                                           | a21 | a22 | a23 | a24 |   | a21 | a22 | a23 | a24 |
     *                                           | a31 | a32 | a33 | a34 | x | a31 | a32 | a33 | a34 |
     *                                           | a41 | a42 | a43 | a44 |   | a41 | a42 | a43 | a44 |
     *                                           |-----|-----|-----|-----|   |-----|-----|-----|-----|
     *                                                                     =
     * |---------------------------------|---------------------------------|---------------------------------|---------------------------------|
     * | a11*b11+a12*b21+a13*b31+a14*b41 | a11*b12+a12*b22+a13*b32+a14*b42 | a11*b13+a12*b23+a13*b33+a14*b43 | a11*b14+a12*b24+a13*b34+a14*b44 |
     * | a21*b11+a22*b21+a23*b31+a24*b41 | a21*b12+a22*b22+a23*b32+a24*b42 | a21*b13+a22*b23+a23*b33+a24*b43 | a21*b14+a22*b24+a23*b34+a24*b44 |
     * | a31*b11+a32*b21+a33*b31+a34*b41 | a31*b12+a32*b22+a33*b32+a34*b42 | a31*b13+a32*b23+a33*b33+a34*b43 | a31*b14+a32*b24+a33*b34+a34*b44 |
     * | a41*b11+a42*b21+a43*b31+a44*b41 | a41*b12+a42*b22+a43*b32+a44*b42 | a41*b13+a42*b23+a43*b33+a44*b43 | a41*b14+a42*b24+a43*b34+a44*b44 |
     * |---------------------------------|---------------------------------|---------------------------------|---------------------------------|
     * ```
     */
    public concatenate(other: TransformationMatrix4x4): TransformationMatrix4x4 {
        const a = this;
        const b = other;

        const e11 = a.e11 * b.e11 + a.e12 * b.e21 + a.e13 * b.e31 + a.e14 * b.e41;
        const e12 = a.e11 * b.e12 + a.e12 * b.e22 + a.e13 * b.e32 + a.e14 * b.e42;
        const e13 = a.e11 * b.e13 + a.e12 * b.e23 + a.e13 * b.e33 + a.e14 * b.e43;
        const e14 = a.e11 * b.e14 + a.e12 * b.e24 + a.e13 * b.e34 + a.e14 * b.e44;
        const e21 = a.e21 * b.e11 + a.e22 * b.e21 + a.e23 * b.e31 + a.e24 * b.e41;
        const e22 = a.e21 * b.e12 + a.e22 * b.e22 + a.e23 * b.e32 + a.e24 * b.e42;
        const e23 = a.e21 * b.e13 + a.e22 * b.e23 + a.e23 * b.e33 + a.e24 * b.e43;
        const e24 = a.e21 * b.e14 + a.e22 * b.e24 + a.e23 * b.e34 + a.e24 * b.e44;
        const e31 = a.e31 * b.e11 + a.e32 * b.e21 + a.e33 * b.e31 + a.e34 * b.e41;
        const e32 = a.e31 * b.e12 + a.e32 * b.e22 + a.e33 * b.e32 + a.e34 * b.e42;
        const e33 = a.e31 * b.e13 + a.e32 * b.e23 + a.e33 * b.e33 + a.e34 * b.e43;
        const e34 = a.e31 * b.e14 + a.e32 * b.e24 + a.e33 * b.e34 + a.e34 * b.e44;
        const e41 = a.e41 * b.e11 + a.e42 * b.e21 + a.e43 * b.e31 + a.e44 * b.e41;
        const e42 = a.e41 * b.e12 + a.e42 * b.e22 + a.e43 * b.e32 + a.e44 * b.e42;
        const e43 = a.e41 * b.e13 + a.e42 * b.e23 + a.e43 * b.e33 + a.e44 * b.e43;
        const e44 = a.e41 * b.e14 + a.e42 * b.e24 + a.e43 * b.e34 + a.e44 * b.e44;
        return new TransformationMatrix4x4(
            e11, e12, e13, e14,
            e21, e22, e23, e24,
            e31, e32, e33, e34,
            e41, e42, e43, e44,
        );
    }

    /**
     * Applies the transformation to a point.
     * 
     * For points the `w` component should be `1`.
     * For vectors the `w` component should be `0`.
     * @returns The transformed point.
     * ```
     * x: e11*x + e12*y + e13*z + e14*w,
     * y: e21*x + e22*y + e23*z + e24*w,
     * z: e31*x + e32*y + e33*z + e34*w,
     * w: e41*x + e42*y + e43*z + e44*w,
     * ```
     */
    public apply(x: number, y: number, z: number, w: number): [x: number, y: number, z: number, w: number] {
        return [
            this.e11 * x + this.e12 * y + this.e13 * z + this.e14 * w,
            this.e21 * x + this.e22 * y + this.e23 * z + this.e24 * w,
            this.e31 * x + this.e32 * y + this.e33 * z + this.e34 * w,
            this.e41 * x + this.e42 * y + this.e43 * z + this.e44 * w,
        ];
    }

    /**
     * Sets an element.
     * @param row The row. Must be between 0-3 and an integer.
     * @param column The column. Must be between 0-3 and an integer.
     * @param value The value.
     * @returns `this`
     * @throws \`Invalid row ${row} and column ${column}\`
     * @throws \`Invalid row ${row}\`
     * @throws \`Invalid column ${column}\`
     */
    public set(row: number, column: number, value: number): TransformationMatrix4x4 {
        this.checkRowAndColumn(row, column);
        switch (row) {
            case 0:
                switch (column) {
                    case 0: this.e11 = value; return this;
                    case 1: this.e12 = value; return this;
                    case 2: this.e13 = value; return this;
                    case 3: this.e14 = value; return this;
                }
                break;
            case 1:
                switch (column) {
                    case 0: this.e21 = value; return this;
                    case 1: this.e22 = value; return this;
                    case 2: this.e23 = value; return this;
                    case 3: this.e24 = value; return this;
                }
                break;
            case 2:
                switch (column) {
                    case 0: this.e31 = value; return this;
                    case 1: this.e32 = value; return this;
                    case 2: this.e33 = value; return this;
                    case 3: this.e34 = value; return this;
                };
                break;
            case 3:
                switch (column) {
                    case 0: this.e41 = value; return this;
                    case 1: this.e42 = value; return this;
                    case 2: this.e43 = value; return this;
                    case 3: this.e44 = value; return this;
                }
                break;
        }
        throw `Something went wrong ${row} ${column}`;
    }

    /**
     * Gets an element.
     * @param row The row. Must be between 0-3 and an integer.
     * @param column The column. Must be between 0-3 and an integer.
     * @returns The element.
     * @throws \`Invalid row ${row} and column ${column}\`
     * @throws \`Invalid row ${row}\`
     * @throws \`Invalid column ${column}\`
     */
    public get(row: number, column: number): number {
        this.checkRowAndColumn(row, column);
        switch (row) {
            case 0:
                switch (column) {
                    case 0: return this.e11;
                    case 1: return this.e12;
                    case 2: return this.e13;
                    case 3: return this.e14;
                }
                break;
            case 1:
                switch (column) {
                    case 0: return this.e21;
                    case 1: return this.e22;
                    case 2: return this.e23;
                    case 3: return this.e24;
                }
                break;
            case 2:
                switch (column) {
                    case 0: return this.e31;
                    case 1: return this.e32;
                    case 2: return this.e33;
                    case 3: return this.e34;
                }
                break;
            case 3:
                switch (column) {
                    case 0: return this.e41;
                    case 1: return this.e42;
                    case 2: return this.e43;
                    case 3: return this.e44;
                }
                break;
        }
        throw `Something went wrong ${row} ${column}`;
    }

    /**
     * Compares this to another transformation matrix element-wise.
     * @param other The other transformation matrix.
     * @param tolerance The maximum allowed tolerance.
     * @returns Whether the matrices are equal.
     */
    public isEqual(other: TransformationMatrix4x4, tolerance: number = 0.0): boolean {
        if (Math.abs(this.e11 - other.e11) > tolerance) return false;
        if (Math.abs(this.e12 - other.e12) > tolerance) return false;
        if (Math.abs(this.e13 - other.e13) > tolerance) return false;
        if (Math.abs(this.e14 - other.e14) > tolerance) return false;
        if (Math.abs(this.e21 - other.e21) > tolerance) return false;
        if (Math.abs(this.e22 - other.e22) > tolerance) return false;
        if (Math.abs(this.e23 - other.e23) > tolerance) return false;
        if (Math.abs(this.e24 - other.e24) > tolerance) return false;
        if (Math.abs(this.e31 - other.e31) > tolerance) return false;
        if (Math.abs(this.e32 - other.e32) > tolerance) return false;
        if (Math.abs(this.e33 - other.e33) > tolerance) return false;
        if (Math.abs(this.e34 - other.e34) > tolerance) return false;
        if (Math.abs(this.e41 - other.e41) > tolerance) return false;
        if (Math.abs(this.e42 - other.e42) > tolerance) return false;
        if (Math.abs(this.e43 - other.e43) > tolerance) return false;
        if (Math.abs(this.e44 - other.e44) > tolerance) return false;
        return true;
    }

    /**
     * Creates a copy.
     * @param overrides Overrides specific elements. 
     * @returns The copy.
     */
    public copy(overrides?: { e11?: number, e12?: number, e13?: number, e14?: number, e21?: number, e22?: number, e23?: number, e24?: number, e31?: number, e32?: number, e33?: number, e34?: number, e41?: number, e42?: number, e43?: number, e44?: number, }): TransformationMatrix4x4 {
        return new TransformationMatrix4x4(
            overrides?.e11 ?? this.e11, overrides?.e12 ?? this.e12, overrides?.e13 ?? this.e13, overrides?.e14 ?? this.e14,
            overrides?.e21 ?? this.e21, overrides?.e22 ?? this.e22, overrides?.e23 ?? this.e23, overrides?.e24 ?? this.e24,
            overrides?.e31 ?? this.e31, overrides?.e32 ?? this.e32, overrides?.e33 ?? this.e33, overrides?.e34 ?? this.e34,
            overrides?.e41 ?? this.e41, overrides?.e42 ?? this.e42, overrides?.e43 ?? this.e43, overrides?.e44 ?? this.e44,
        );
    }

    /**
     * Returns the string representation.
     * 
     * - The elements are converted to strings using `toFixed`. 
     * - The elements of each columns are right-aligned.
     * @param digits The number of digits.
     * @returns The string representation.
     * ```
     * "e11 e12 e13 e14" + "\n"  
     * "e21 e22 e23 e24" + "\n"  
     * "e31 e32 e33 e34" + "\n"  
     * "e41 e42 e43 e44"
     * ```
     */
    public toString(digits?: number): string {
        const s11 = this.e11.toFixed(digits);
        const s12 = this.e12.toFixed(digits);
        const s13 = this.e13.toFixed(digits);
        const s14 = this.e14.toFixed(digits);
        const s21 = this.e21.toFixed(digits);
        const s22 = this.e22.toFixed(digits);
        const s23 = this.e23.toFixed(digits);
        const s24 = this.e24.toFixed(digits);
        const s31 = this.e31.toFixed(digits);
        const s32 = this.e32.toFixed(digits);
        const s33 = this.e33.toFixed(digits);
        const s34 = this.e34.toFixed(digits);
        const s41 = this.e41.toFixed(digits);
        const s42 = this.e42.toFixed(digits);
        const s43 = this.e43.toFixed(digits);
        const s44 = this.e44.toFixed(digits);

        const p1 = Math.max(s11.length, s21.length, s31.length, s41.length);
        const p2 = Math.max(s12.length, s22.length, s32.length, s42.length);
        const p3 = Math.max(s13.length, s23.length, s33.length, s43.length);
        const p4 = Math.max(s14.length, s24.length, s34.length, s44.length);

        return "" +
            `${s11.padStart(p1)} ${s12.padStart(p2)} ${s13.padStart(p3)} ${s14.padStart(p4)}\n` +
            `${s21.padStart(p1)} ${s22.padStart(p2)} ${s23.padStart(p3)} ${s24.padStart(p4)}\n` +
            `${s31.padStart(p1)} ${s32.padStart(p2)} ${s33.padStart(p3)} ${s34.padStart(p4)}\n` +
            `${s41.padStart(p1)} ${s42.padStart(p2)} ${s43.padStart(p3)} ${s44.padStart(p4)}`
    }

    /**
     * Creates a matrix with all elements set to zero.
     * @returns The zero matrix.
     * ```
     * |---|---|---|---|
     * | 0 | 0 | 0 | 0 |
     * | 0 | 0 | 0 | 0 |
     * | 0 | 0 | 0 | 0 |
     * | 0 | 0 | 0 | 0 |
     * |---|---|---|---|
     * ```
     */
    public static zero(): TransformationMatrix4x4 {
        return new TransformationMatrix4x4(
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        );
    }

    /**
     * Creates the identity matrix. 
     * @returns The identity matrix.
     * ```
     * |---|---|---|---|  
     * | 1 | 0 | 0 | 0 |  
     * | 0 | 1 | 0 | 0 |  
     * | 0 | 0 | 1 | 0 |  
     * | 0 | 0 | 0 | 1 |  
     * |---|---|---|---|
     * ```
     */
    public static identity(): TransformationMatrix4x4 {
        return new TransformationMatrix4x4(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        );
    }

    /**
     * Creates a translation matrix.
     * @param x The x translation.
     * @param y The y translation.
     * @param z The z translation.
     * @returns The translation matrix.
     * ```
     * |---|---|---|---|  
     * | 1 | 0 | 0 | x |  
     * | 0 | 1 | 0 | y |  
     * | 0 | 0 | 1 | z |  
     * | 0 | 0 | 0 | 1 |  
     * |---|---|---|---| 
     * ```
     */
    public static translate(x: number, y: number, z: number) {
        return new TransformationMatrix4x4(
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1,
        );
    }

    /**
     * Creates a scaling matrix.
     * @param x The x scaling.
     * @param y The y scaling.
     * @param z The z scaling.
     * @returns The scaling matrix.
     * ```
     * |---|---|---|---|  
     * | x | 0 | 0 | 0 |  
     * | 0 | y | 0 | 0 |  
     * | 0 | 0 | z | 0 |  
     * | 0 | 0 | 0 | 1 |  
     * |---|---|---|---| 
     * ```
     */
    public static scale(x: number, y: number, z: number) {
        return new TransformationMatrix4x4(
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1,
        );
    }

    /**
     * Creates a rotation matrix around the x axis.
     * @param radians The angle.
     * @returns The rotation matrix.
     * ```
     * |---|-----|------|---|  
     * | 1 |  0  |   0  | 0 |  
     * | 0 | cos | -sin | 0 |  
     * | 0 | sin |  cos | 0 |  
     * | 0 |  0  |   0  | 1 |  
     * |---|-----|------|---|
     * ```
     */
    public static rotateX(radians: number) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        return new TransformationMatrix4x4(
            1, 0, 0, 0,
            0, cos, -sin, 0,
            0, sin, cos, 0,
            0, 0, 0, 1,
        );
    }

    /**
     * Creates a rotation matrix around the y axis.
     * @param radians The angle.
     * @returns The rotation matrix.
     * ```
     * |------|---|-----|---|  
     * |  cos | 0 | sin | 0 |  
     * |   0  | 1 |  0  | 0 |  
     * | -sin | 0 | cos | 0 |  
     * |   0  | 0 |  0  | 1 |  
     * |------|---|-----|---|
     * ```
     */
    public static rotateY(radians: number) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        return new TransformationMatrix4x4(
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1,
        );
    }

    /**
     * Creates a rotation matrix around the z axis.
     * @param radians The angle.
     * @returns The rotation matrix.
     * ```
     * |-----|------|---|---|  
     * | cos | -sin | 0 | 0 |  
     * | sin |  cos | 0 | 0 |  
     * |  0  |   0  | 1 | 0 |  
     * |  0  |   0  | 0 | 1 |  
     * |-----|------|---|---|
     * ```
     */
    public static rotateZ(radians: number) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        return new TransformationMatrix4x4(
            cos, -sin, 0, 0,
            sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        );
    }

    /**
     * Checks whether the row and column are valid.
     * @param row The row. Must be between 1-4 and an integer.
     * @param column The column. Must be between 1-4 and an integer.
     * @throws \`Invalid row ${row} and column ${column}\`
     * @throws \`Invalid row ${row}\`
     * @throws \`Invalid column ${column}\`
     */
    private checkRowAndColumn(row: number, column: number): void {
        const row_invalid = row < 0 || row > 3 || !Number.isInteger(row);
        const column_invalid = column < 0 || column > 3 || !Number.isInteger(column);
        if (row_invalid && column_invalid) {
            throw `Invalid row ${row} and column ${column}`;
        } else if (row_invalid) {
            throw `Invalid row ${row}`;
        } else if (column_invalid) {
            throw `Invalid column ${column}`;
        }
    }
}