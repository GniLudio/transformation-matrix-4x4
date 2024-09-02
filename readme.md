# Transformation Matrix 4x4

A 4x4 transformation matrix. 

Install with `npm i transformation-matrix-4x4`.

## API

### TransformationMatrix
* `apply(x,y,z,w)` &rarr; `[x, y, z, w]`  
    * Applies the transformation to a point or vector.  
    * Returns the transformed point.
* `concatenate(other)` &rarr; `TransformationMatrix4x4`  
    * Multiplies the two matrices.  
    * Returns the product.
* `set(row, column, value)` &rarr; `TransformationMatrix4x4`  
    * Modifies one element of this matrix.  
    * Returns `this`.
* `get(row, column)` &rarr; `number`
    * Returns this value of one element.
* `isEqual(other, tolerance)` &rarr; `boolean`
    * Compares the two matrices.
    * Returns whether the matrices are equal.
* `copy(overrides: {e11? ... e44?})` &rarr; `TransformationMatrix4x4`
    * Returns a copy.
* `toString(digits?)` &rarr; `string`
    * Returns the string representation.

### Operations
* `zero()` &rarr; `TransformationMatrix4x4`  
    * Returns a matrix with all elements set to 0.
* `identity()` &rarr; `TransformationMatrix4x4`  
    * Returns the identity matrix.
* `translation(x,y,z)` &rarr; `TransformationMatrix4x4`  
    * Returns a translation matrix.
* `scale(x,y,z)`&rarr; `TransformationMatrix4x4`  
    * Returns a scaling matrix.
* `rotateX(angle)`&rarr; `TransformationMatrix4x4`  
    * Returns a rotation matrix around the x-axis.
* `rotateY(angle)`&rarr; `TransformationMatrix4x4`  
    * Returns a rotation matrix around the y-axis.
* `rotateZ(angle)`&rarr; `TransformationMatrix4x4`  
    * Returns a rotation matrix around the z-axis.