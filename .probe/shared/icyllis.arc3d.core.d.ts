declare module "icyllis.arc3d.core.ColorSpace$Named" {
import { $Enum } from "java.lang.Enum"

export class $ColorSpace$Named extends $Enum<$ColorSpace$Named> {
static readonly "ACES": $ColorSpace$Named
static readonly "ACESCG": $ColorSpace$Named
static readonly "ADOBE_RGB": $ColorSpace$Named
static readonly "BT2020": $ColorSpace$Named
static readonly "BT709": $ColorSpace$Named
static readonly "CIE_LAB": $ColorSpace$Named
static readonly "CIE_XYZ": $ColorSpace$Named
static readonly "DCI_P3": $ColorSpace$Named
static readonly "DISPLAY_P3": $ColorSpace$Named
static readonly "EXTENDED_SRGB": $ColorSpace$Named
static readonly "LINEAR_EXTENDED_SRGB": $ColorSpace$Named
static readonly "LINEAR_SRGB": $ColorSpace$Named
static readonly "NTSC_1953": $ColorSpace$Named
static readonly "PRO_PHOTO_RGB": $ColorSpace$Named
static readonly "SMPTE_C": $ColorSpace$Named
static readonly "SRGB": $ColorSpace$Named

public static "valueOf"(name: string): $ColorSpace$Named
public static "values"(): $ColorSpace$Named[]
}
}

declare module "icyllis.arc3d.core.SamplingOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SamplingOptions {
static readonly "CATMULLROM": $SamplingOptions
static readonly "CUBIC_BSPLINE": $SamplingOptions
static readonly "FILTER_MODE_LINEAR": integer
static readonly "FILTER_MODE_NEAREST": integer
static readonly "LINEAR": $SamplingOptions
static readonly "MIN_LINEAR_MAG_MIP_POINT": $SamplingOptions
static readonly "MIN_LINEAR_MAG_POINT": $SamplingOptions
static readonly "MIN_LINEAR_MAG_POINT_MIP_LINEAR": $SamplingOptions
static readonly "MIN_MAG_LINEAR_MIP_POINT": $SamplingOptions
static readonly "MIN_MAG_MIP_LINEAR": $SamplingOptions
static readonly "MIN_MAG_MIP_POINT": $SamplingOptions
static readonly "MIN_MAG_POINT_MIP_LINEAR": $SamplingOptions
static readonly "MIN_POINT_MAG_LINEAR": $SamplingOptions
static readonly "MIN_POINT_MAG_LINEAR_MIP_POINT": $SamplingOptions
static readonly "MIN_POINT_MAG_MIP_LINEAR": $SamplingOptions
static readonly "MIPMAP_MODE_LINEAR": integer
static readonly "MIPMAP_MODE_NEAREST": integer
static readonly "MIPMAP_MODE_NONE": integer
static readonly "MITCHELL": $SamplingOptions
static readonly "PHOTOSHOP_BICUBIC": $SamplingOptions
static readonly "POINT": $SamplingOptions
readonly "mCubicB": float
readonly "mCubicC": float
readonly "mMagFilter": byte
readonly "mMaxAnisotropy": integer
readonly "mMinFilter": byte
readonly "mMipmapMode": byte
readonly "mUseCubic": boolean

public "isAnisotropy"(): boolean
public static "make"(minFilter: integer, magFilter: integer, mipmapMode: integer): $SamplingOptions
public static "make"(filter: integer): $SamplingOptions
public static "make"(filter: integer, mipmap: integer): $SamplingOptions
public static "makeAnisotropy"(maxAnisotropy: integer): $SamplingOptions
public static "makeCubic"(B: float, C: float): $SamplingOptions
get "anisotropy"(): boolean
}
}

declare module "icyllis.arc3d.core.Pixmap" {
import { $ImageInfo, $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $ColorSpace } from "icyllis.arc3d.core.ColorSpace"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"

export class $Pixmap {
constructor(info: $ImageInfo$$Type, base: any, address: long, rowBytes: integer)
constructor(newInfo: $ImageInfo$$Type, oldPixmap: $Pixmap$$Type)

public "clear"(color: float[], subset: $Rect2ic$$Type): boolean
public "getAddress"(): long
public "getAddress"(x: integer, y: integer): long
public "getAlphaType"(): integer
public "getBase"(): any
public "getColor"(x: integer, y: integer): integer
public "getColor4f"(x: integer, y: integer, dst: float[]): void
public "getColorSpace"(): $ColorSpace
public "getColorType"(): integer
public "getHeight"(): integer
public "getInfo"(): $ImageInfo
public "getPixelOrigin"(pix: long, origin: integer[]): void
public "getRowBytes"(): integer
public "getWidth"(): integer
public "makeSubset"(subset: $Rect2ic$$Type): $Pixmap
public "readPixels"(dst: $Pixmap$$Type, srcX: integer, srcY: integer): boolean
public "setColor4f"(x: integer, y: integer, src: float[]): void
public "writePixels"(src: $Pixmap$$Type, dstX: integer, dstY: integer): boolean
get "address"(): long
get "alphaType"(): integer
get "base"(): any
get "colorSpace"(): $ColorSpace
get "colorType"(): integer
get "height"(): integer
get "info"(): $ImageInfo
get "rowBytes"(): integer
get "width"(): integer
}
}

declare module "icyllis.arc3d.core.RefCnt" {
import { $RefCounted, $RefCounted$$Type } from "icyllis.arc3d.core.RefCounted"

export class $RefCnt implements $RefCounted {
constructor()

public static "create"<T extends $RefCounted>(sp: T, that: T): T
public static "create"<T extends $RefCounted>(that: T): T
public "getRefCnt"(): integer
public "getRefCntAcquire"(): integer
public "getRefCntVolatile"(): integer
public static "move"<T extends $RefCounted>(sp: T): T
public static "move"<T extends $RefCounted>(sp: T, that: T): T
public "ref"(): void
public "unique"(): boolean
public "unref"(): void
get "refCnt"(): integer
get "refCntAcquire"(): integer
get "refCntVolatile"(): integer
}
}

declare module "icyllis.arc3d.core.Matrix4" {
import { $Cloneable } from "java.lang.Cloneable"
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Matrix4c, $Matrix4c$$Type } from "icyllis.arc3d.core.Matrix4c"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Matrix3, $Matrix3$$Type } from "icyllis.arc3d.core.Matrix3"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Vector3$$Type } from "icyllis.arc3d.core.Vector3"
import { $Quaternion$$Type } from "icyllis.arc3d.core.Quaternion"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"
import { $Vector4$$Type } from "icyllis.arc3d.core.Vector4"

export class $Matrix4 implements $Matrix4c, $Cloneable {
"m11": float
"m12": float
"m13": float
"m14": float
"m21": float
"m22": float
"m23": float
"m24": float
"m31": float
"m32": float
"m33": float
"m34": float
"m41": float
"m42": float
"m43": float
"m44": float

constructor(...a: float[])
constructor(m: $Matrix4c$$Type)
constructor()

public "add"(m: $Matrix4$$Type): void
public "clone"(): $Matrix4
public static "copy"(m: $Matrix4c$$Type): $Matrix4
public "determinant"(): float
public "hasPerspective"(): boolean
public "hasTranslation"(): boolean
public static "identity"(): $Matrix4c
public "invert"(dest: $Matrix4$$Type): boolean
public "invert"(): boolean
public "isAffine"(): boolean
public "isApproxEqual"(m: $Matrix4$$Type): boolean
public "isAxisAligned"(): boolean
public "isIdentity"(): boolean
public "isScaleTranslate"(): boolean
public "localAARadius"(left: float, top: float, right: float, bottom: float): float
public "localAARadius"(bounds: $Rect2fc$$Type): float
public "m11"(): float
public "m12"(): float
public "m13"(): float
public "m14"(): float
public "m21"(): float
public "m22"(): float
public "m23"(): float
public "m24"(): float
public "m31"(): float
public "m32"(): float
public "m33"(): float
public "m34"(): float
public "m41"(): float
public "m42"(): float
public "m43"(): float
public "m44"(): float
public static "makeOrthographic"(width: float, height: float, near: float, far: float, flipY: boolean): $Matrix4
public static "makeOrthographic"(left: float, right: float, bottom: float, top: float, near: float, far: float): $Matrix4
public static "makePerspective"(fov: float, aspect: float, near: float, far: float): $Matrix4
public static "makePerspective"(left: float, right: float, bottom: float, top: float, near: float, far: float): $Matrix4
public static "makeScale"(x: float, y: float, z: float): $Matrix4
public static "makeTranslate"(x: float, y: float, z: float): $Matrix4
public "mapPoint"(p: float[]): void
public "mapPointX"(x: float, y: float): float
public "mapPointY"(x: float, y: float): float
public "mapRect"(r: $Rect2ic$$Type, dest: $Rect2i$$Type): void
public "mapRect"(left: float, top: float, right: float, bottom: float, dest: $Rect2f$$Type): void
public "mapRect"(r: $Rect2fc$$Type, dest: $Rect2f$$Type): void
public "mapRect"(r: $Rect2fc$$Type, dest: $Rect2i$$Type): void
public "mapRect"(r: $Rect2f$$Type): void
public "mapRect"(left: float, top: float, right: float, bottom: float, dest: $Rect2i$$Type): void
public "mapRectIn"(left: float, top: float, right: float, bottom: float, dest: $Rect2i$$Type): void
public "mapRectIn"(r: $Rect2fc$$Type, dest: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2fc$$Type, dest: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2ic$$Type, dest: $Rect2i$$Type): void
public "mapRectOut"(left: float, top: float, right: float, bottom: float, dest: $Rect2i$$Type): void
public "mapVec3"(vec: float[]): void
public "normalizePerspective"(): void
public "postConcat"(r11: float, r12: float, r13: float, r14: float, r21: float, r22: float, r23: float, r24: float, r31: float, r32: float, r33: float, r34: float, r41: float, r42: float, r43: float, r44: float): void
public "postConcat"(rhs: $Matrix4c$$Type): void
public "postConcat"(rhs: $Matrix3$$Type): void
public "postConcat2D"(r11: float, r12: float, r14: float, r21: float, r22: float, r24: float, r41: float, r42: float, r44: float): void
public "postRotate"(angleX: double, angleY: double, angleZ: double): void
public "postRotate"(x: double, y: double, z: double, angle: double): void
public "postRotateX"(angle: double): void
public "postRotateY"(angle: double): void
public "postRotateZ"(angle: double): void
public "postScale"(sx: float, sy: float): void
public "postScale"(s: $Vector3$$Type): void
public "postScale"(sx: float, sy: float, sz: float): void
public "postScaleX"(s: float): void
public "postScaleY"(s: float): void
public "postScaleZ"(s: float): void
public "postShear"(sxy: float, sxz: float, syx: float, syz: float, szx: float, szy: float): void
public "postShear2D"(sx: float, sy: float): void
public "postTransform"(vec: $Vector3$$Type): void
public "postTransform"(vec: $Vector4$$Type): void
public "postTranslate"(dx: float, dy: float): void
public "postTranslate"(dx: float, dy: float, dz: float): void
public "postTranslate"(t: $Vector3$$Type): void
public "postTranslateX"(dx: float): void
public "postTranslateY"(dy: float): void
public "postTranslateZ"(dz: float): void
public "preConcat"(lhs: $Matrix4c$$Type): void
public "preConcat"(l11: float, l12: float, l13: float, l14: float, l21: float, l22: float, l23: float, l24: float, l31: float, l32: float, l33: float, l34: float, l41: float, l42: float, l43: float, l44: float): void
public "preConcat"(lhs: $Matrix3$$Type): void
public "preConcat2D"(l11: float, l12: float, l14: float, l21: float, l22: float, l24: float, l41: float, l42: float, l44: float): void
public "preRotate"(axis: $Vector3$$Type, angle: float): void
public "preRotate"(q: $Quaternion$$Type): void
public "preRotate"(x: double, y: double, z: double, angle: double): void
public "preRotate"(angleX: double, angleY: double, angleZ: double): void
public "preRotateX"(angle: double): void
public "preRotateY"(angle: double): void
public "preRotateZ"(angle: double): void
public "preScale"(sx: float, sy: float, sz: float): void
public "preScale"(s: $Vector3$$Type): void
public "preScale"(sx: float, sy: float): void
public "preScaleX"(s: float): void
public "preScaleY"(s: float): void
public "preScaleZ"(s: float): void
public "preShear"(sxy: float, sxz: float, syx: float, syz: float, szx: float, szy: float): void
public "preShear2D"(sx: float, sy: float): void
public "preTransform"(vec: $Vector4$$Type): void
public "preTransform"(vec: $Vector3$$Type): void
public "preTranslate"(t: $Vector3$$Type): void
public "preTranslate"(dx: float, dy: float, dz: float): void
public "preTranslate"(dx: float, dy: float): void
public "preTranslateX"(dx: float): void
public "preTranslateY"(dy: float): void
public "preTranslateZ"(dz: float): void
public "set"(p: long): void
public "set"(a: float[], offset: integer): void
public "set"(a: $FloatBuffer$$Type): void
public "set"(a: $ByteBuffer$$Type): void
public "set"(a: float[]): void
public "set"(m11: float, m12: float, m13: float, m14: float, m21: float, m22: float, m23: float, m24: float, m31: float, m32: float, m33: float, m34: float, m41: float, m42: float, m43: float, m44: float): void
public "set"(m: $Matrix4c$$Type): void
public "setIdentity"(): void
public "setOrthographic"(left: float, right: float, bottom: float, top: float, near: float, far: float): $Matrix4
public "setOrthographic"(width: float, height: float, near: float, far: float, flipY: boolean): $Matrix4
public "setOrthographic"(left: float, right: float, bottom: float, top: float, near: float, far: float, negativeOneToOne: boolean): void
public "setOrthographicLH"(left: float, right: float, bottom: float, top: float, near: float, far: float, negativeOneToOne: boolean): void
public "setPerspective"(fov: float, aspect: float, near: float, far: float): $Matrix4
public "setPerspective"(left: float, right: float, bottom: float, top: float, near: float, far: float): $Matrix4
public "setPerspective"(fov: double, aspect: double, near: float, far: float, negativeOneToOne: boolean): void
public "setPerspectiveLH"(fov: double, aspect: double, near: float, far: float, negativeOneToOne: boolean): void
public "setRotation"(q: $Quaternion$$Type): void
public "setScale"(s: $Vector3$$Type): void
public "setScale"(x: float, y: float, z: float): void
public "setShear"(sxy: float, sxz: float, syx: float, syz: float, szx: float, szy: float): void
public "setTranslate"(x: float, y: float, z: float): void
public "setTranslate"(t: $Vector3$$Type): void
public "setZero"(): void
public "store"(a: float[], offset: integer): void
public "store"(a: float[]): void
public "store"(m: $Matrix4$$Type): void
public "store"(a: $ByteBuffer$$Type): void
public "store"(p: long): void
public "store"(a: $FloatBuffer$$Type): void
public "storeAs2D"(p: long): void
public "storeAs2DAligned"(p: long): void
public "subtract"(m: $Matrix4$$Type): void
public "toMatrix3"(): $Matrix3
public "toMatrix3"(dest: $Matrix3$$Type): void
public "trace"(): float
public "transpose"(): void
get "affine"(): boolean
get "axisAligned"(): boolean
get "scaleTranslate"(): boolean
set "rotation"(value: $Quaternion$$Type)
set "scale"(value: $Vector3$$Type)
set "translate"(value: $Vector3$$Type)
}
}

declare module "icyllis.arc3d.core.Matrix3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Matrix3 {
constructor()

public static "identity"(): $Matrix3
public "setIdentity"(): void
public "store"(p: long): void
public "storeAligned"(p: long): void
get "m11"(): float
set "m11"(value: float)
get "m12"(): float
set "m12"(value: float)
get "m13"(): float
set "m13"(value: float)
get "m21"(): float
set "m21"(value: float)
get "m22"(): float
set "m22"(value: float)
get "m23"(): float
set "m23"(value: float)
get "m31"(): float
set "m31"(value: float)
get "m32"(): float
set "m32"(value: float)
get "m33"(): float
set "m33"(value: float)
}
}

declare module "icyllis.arc3d.core.ColorSpace$Adaptation" {
import { $Enum } from "java.lang.Enum"

export class $ColorSpace$Adaptation extends $Enum<$ColorSpace$Adaptation> {
static readonly "BRADFORD": $ColorSpace$Adaptation
static readonly "CIECAT02": $ColorSpace$Adaptation
static readonly "VON_KRIES": $ColorSpace$Adaptation

public static "valueOf"(name: string): $ColorSpace$Adaptation
public static "values"(): $ColorSpace$Adaptation[]
}
}

declare module "icyllis.arc3d.core.ImageInfo" {
import { $ColorSpace, $ColorSpace$$Type } from "icyllis.arc3d.core.ColorSpace"

export class $ImageInfo {
constructor(width: integer, height: integer, colorType: integer, alphaType: integer)
constructor(width: integer, height: integer)
constructor()
constructor(w: integer, h: integer, ct: integer, at: integer, cs: $ColorSpace$$Type)

public "alphaType"(): integer
public "bytesPerPixel"(): integer
public "colorSpace"(): $ColorSpace
public "colorType"(): integer
public "computeByteSize"(rowBytes: integer): long
public "computeMinByteSize"(): long
public "height"(): integer
public "isEmpty"(): boolean
public "isOpaque"(): boolean
public "isValid"(): boolean
public static "make"(width: integer, height: integer, ct: integer, at: integer, cs: $ColorSpace$$Type): $ImageInfo
public "makeAlphaType"(newAlphaType: integer): $ImageInfo
public "makeColorSpace"(newColorSpace: $ColorSpace$$Type): $ImageInfo
public "makeColorType"(newColorType: integer): $ImageInfo
public static "makeUnknown"(width: integer, height: integer): $ImageInfo
public "makeWH"(newWidth: integer, newHeight: integer): $ImageInfo
public "minRowBytes"(): integer
public "resize"(width: integer, height: integer): void
public "width"(): integer
get "empty"(): boolean
get "opaque"(): boolean
get "valid"(): boolean
}
}

declare module "icyllis.arc3d.core.Vector3" {
import { $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Quaternion, $Quaternion$$Type } from "icyllis.arc3d.core.Quaternion"

export class $Vector3 {
constructor()
constructor(x: float, y: float, z: float)

public "add"(v: $Vector3$$Type): void
public "copy"(): $Vector3
public "cross"(x: float, y: float, z: float): void
public "cross"(v: $Vector3$$Type): void
public "dot"(v: $Vector3$$Type): float
public "dot"(x: float, y: float, z: float): float
public "equivalent"(v: $Vector3$$Type): boolean
public "isNormalized"(): boolean
public "length"(): float
public "lengthSq"(): float
public "maxComponent"(v: $Vector3$$Type): void
public "minComponent"(v: $Vector3$$Type): void
public "multiply"(v: $Vector3$$Type): void
public "multiply"(mx: float, my: float, mz: float): void
public "multiply"(s: float): void
public "negate"(): void
public "normalize"(): void
public "perpendicular"(): void
public "preTransform"(mat: $Matrix4$$Type): void
public "product"(): float
public "projection"(v: $Vector3$$Type): void
public "reverse"(): void
public "rotation"(angle: float): $Quaternion
public "set"(v: $Vector3$$Type): void
public "set"(x: float, y: float, z: float): void
public "setZero"(): void
public "sort"(): void
public "subtract"(v: $Vector3$$Type): void
public "sum"(): float
public "transform"(mat: $Matrix4$$Type): void
public "transform"(q: $Quaternion$$Type): void
get "x"(): float
set "x"(value: float)
get "y"(): float
set "y"(value: float)
get "z"(): float
set "z"(value: float)
get "normalized"(): boolean
}
}

declare module "icyllis.arc3d.core.Vector4" {
import { $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"

export class $Vector4 {
constructor()

public "transform"(mat: $Matrix4$$Type): void
get "w"(): float
set "w"(value: float)
get "x"(): float
set "x"(value: float)
get "y"(): float
set "y"(value: float)
get "z"(): float
set "z"(value: float)
}
}

declare module "icyllis.arc3d.core.Quaternion" {
import { $Matrix4, $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Matrix3, $Matrix3$$Type } from "icyllis.arc3d.core.Matrix3"
import { $Vector3$$Type } from "icyllis.arc3d.core.Vector3"

export class $Quaternion {
constructor()
constructor(x: float, y: float, z: float, w: float)

public "add"(q: $Quaternion$$Type): void
public "conjugate"(): void
public "copy"(): $Quaternion
public static "copy"(q: $Quaternion$$Type): $Quaternion
public "dot"(q: $Quaternion$$Type): float
public "dot"(x: float, y: float, z: float, w: float): float
public static "identity"(): $Quaternion
public "inverse"(): void
public "isApproxEqual"(q: $Quaternion$$Type): boolean
public "isIdentity"(): boolean
public "isNormalized"(): boolean
public "length"(): float
public "lengthSq"(): float
public static "makeAxisAngle"(axis: $Vector3$$Type, angle: float): $Quaternion
public static "makeAxisAngle"(axisX: float, axisY: float, axisZ: float, angle: float): $Quaternion
public static "makeEulerAngles"(rotationX: float, rotationY: float, rotationZ: float): $Quaternion
public "multiply"(q: $Quaternion$$Type): void
public "multiply"(s: float): void
public "negate"(): void
public "normalize"(): void
public "rotateByAxis"(axis: $Vector3$$Type, angle: float): void
public "rotateByAxis"(axisX: float, axisY: float, axisZ: float, angle: float): void
public "rotateByEuler"(rotationX: float, rotationY: float, rotationZ: float): void
public "rotateX"(angle: float): void
public "rotateY"(angle: float): void
public "rotateZ"(angle: float): void
public "set"(x: float, y: float, z: float, w: float): void
public "set"(q: $Quaternion$$Type): void
public "setFromAxisAngle"(axisX: float, axisY: float, axisZ: float, angle: float): void
public "setFromAxisAngle"(axis: $Vector3$$Type, angle: float): void
public "setFromEulerAngles"(rotationX: float, rotationY: float, rotationZ: float): void
public "setIdentity"(): void
public "setZero"(): void
public "slerp"(a: $Quaternion$$Type, t: float): void
public "slerp"(a: $Quaternion$$Type, b: $Quaternion$$Type, t: float): void
public "subtract"(q: $Quaternion$$Type): void
public "toAxisAngle"(axis: float[]): float
public "toAxisAngle"(axis: $Vector3$$Type): float
public "toEulerAngles"(angles: float[]): void
public "toEulerAngles"(result: $Vector3$$Type): void
public "toMatrix3"(out: $Matrix3$$Type): $Matrix3
public "toMatrix3"(): $Matrix3
public "toMatrix4"(out: $Matrix4$$Type): $Matrix4
public "toMatrix4"(): $Matrix4
get "normalized"(): boolean
}
}

declare module "icyllis.arc3d.core.ColorSpace$RenderIntent" {
import { $Enum } from "java.lang.Enum"

export class $ColorSpace$RenderIntent extends $Enum<$ColorSpace$RenderIntent> {
static readonly "ABSOLUTE": $ColorSpace$RenderIntent
static readonly "PERCEPTUAL": $ColorSpace$RenderIntent
static readonly "RELATIVE": $ColorSpace$RenderIntent
static readonly "SATURATION": $ColorSpace$RenderIntent

public static "valueOf"(name: string): $ColorSpace$RenderIntent
public static "values"(): $ColorSpace$RenderIntent[]
}
}

declare module "icyllis.arc3d.core.RefCounted" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RefCounted {
"ref"(): void
"unref"(): void
}

export namespace $RefCounted {
const probejs$$marker: never
}
export abstract class $RefCounted$$Static implements $RefCounted {
}
}

declare module "icyllis.arc3d.core.ColorSpace" {
import { $ColorSpace$Connector } from "icyllis.arc3d.core.ColorSpace$Connector"
import { $ColorSpace$Model } from "icyllis.arc3d.core.ColorSpace$Model"
import { $ColorSpace$Adaptation$$Type } from "icyllis.arc3d.core.ColorSpace$Adaptation"
import { $ColorSpace$RenderIntent$$Type } from "icyllis.arc3d.core.ColorSpace$RenderIntent"
import { $ColorSpace$Named$$Type } from "icyllis.arc3d.core.ColorSpace$Named"
import { $ColorSpace$Rgb$TransferParameters$$Type } from "icyllis.arc3d.core.ColorSpace$Rgb$TransferParameters"

export class $ColorSpace {
static readonly "ILLUMINANT_A": float[]
static readonly "ILLUMINANT_B": float[]
static readonly "ILLUMINANT_C": float[]
static readonly "ILLUMINANT_D50": float[]
static readonly "ILLUMINANT_D55": float[]
static readonly "ILLUMINANT_D60": float[]
static readonly "ILLUMINANT_D65": float[]
static readonly "ILLUMINANT_D75": float[]
static readonly "ILLUMINANT_E": float[]
static readonly "MAX_ID": integer
static readonly "MIN_ID": integer

public static "adapt"(colorSpace: $ColorSpace$$Type, whitePoint: float[]): $ColorSpace
public static "adapt"(colorSpace: $ColorSpace$$Type, whitePoint: float[], adaptation: $ColorSpace$Adaptation$$Type): $ColorSpace
public static "adaptToIlluminantD50"(origWhitePoint: float[], origTransform: float[]): float[]
public static "cctToXyz"(cct: integer): float[]
public static "chromaticAdaptation"(adaptation: $ColorSpace$Adaptation$$Type, srcWhitePoint: float[], dstWhitePoint: float[]): float[]
public static "connect"(source: $ColorSpace$$Type, intent: $ColorSpace$RenderIntent$$Type): $ColorSpace$Connector
public static "connect"(source: $ColorSpace$$Type, destination: $ColorSpace$$Type, intent: $ColorSpace$RenderIntent$$Type): $ColorSpace$Connector
public static "connect"(source: $ColorSpace$$Type, destination: $ColorSpace$$Type): $ColorSpace$Connector
public static "connect"(source: $ColorSpace$$Type): $ColorSpace$Connector
public "fromXyz"(float0s: float[]): float[]
public "fromXyz"(x: float, y: float, z: float): float[]
public static "get"(name: $ColorSpace$Named$$Type): $ColorSpace
public "getComponentCount"(): integer
public "getId"(): integer
public "getMaxValue"(int0: integer): float
public "getMinValue"(int0: integer): float
public "getModel"(): $ColorSpace$Model
public "getName"(): string
public "isSrgb"(): boolean
public "isWideGamut"(): boolean
public static "match"(toXYZD50: float[], function_: $ColorSpace$Rgb$TransferParameters$$Type): $ColorSpace
public "toXyz"(r: float, g: float, b: float): float[]
public "toXyz"(float0s: float[]): float[]
get "componentCount"(): integer
get "id"(): integer
get "model"(): $ColorSpace$Model
get "name"(): string
get "srgb"(): boolean
get "wideGamut"(): boolean
}
}

declare module "icyllis.arc3d.core.Rect2ic" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export interface $Rect2ic {
"bottom"(): integer
"contains"(rect2fc0: $Rect2fc$$Type): boolean
"contains"(int0: integer, int1: integer): boolean
"contains"(float0: float, float1: float): boolean
"contains"(rect2ic0: $Rect2ic$$Type): boolean
"height"(): integer
"intersects"(rect2ic0: $Rect2ic$$Type): boolean
"isEmpty"(): boolean
"isSorted"(): boolean
"left"(): integer
"right"(): integer
"store"(rect2i0: $Rect2i$$Type): void
"store"(rect2f0: $Rect2f$$Type): void
"top"(): integer
"width"(): integer
"x"(): integer
"y"(): integer
get "empty"(): boolean
get "sorted"(): boolean
}

export namespace $Rect2ic {
const probejs$$marker: never
}
export abstract class $Rect2ic$$Static implements $Rect2ic {
}
}

declare module "icyllis.arc3d.core.Rect2fc" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"

export interface $Rect2fc {
"bottom"(): float
"centerX"(): float
"centerY"(): float
"contains"(rect2ic0: $Rect2ic$$Type): boolean
"contains"(float0: float, float1: float, float2: float, float3: float): boolean
"contains"(rect2fc0: $Rect2fc$$Type): boolean
"contains"(float0: float, float1: float): boolean
"height"(): float
"intersects"(rect2ic0: $Rect2ic$$Type): boolean
"intersects"(rect2fc0: $Rect2fc$$Type): boolean
"intersects"(float0: float, float1: float, float2: float, float3: float): boolean
"isEmpty"(): boolean
"isFinite"(): boolean
"isSorted"(): boolean
"left"(): float
"right"(): float
"round"(rect2i0: $Rect2i$$Type): void
"round"(rect2f0: $Rect2f$$Type): void
"roundIn"(rect2i0: $Rect2i$$Type): void
"roundIn"(rect2f0: $Rect2f$$Type): void
"roundOut"(rect2i0: $Rect2i$$Type): void
"roundOut"(rect2f0: $Rect2f$$Type): void
"store"(rect2f0: $Rect2f$$Type): void
"store"(rect2i0: $Rect2i$$Type): void
"top"(): float
"width"(): float
"x"(): float
"y"(): float
get "empty"(): boolean
get "finite"(): boolean
get "sorted"(): boolean
}

export namespace $Rect2fc {
const probejs$$marker: never
}
export abstract class $Rect2fc$$Static implements $Rect2fc {
}
}

declare module "icyllis.arc3d.core.ColorSpace$Rgb$TransferParameters" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ColorSpace$Rgb$TransferParameters {
readonly "a": double
readonly "b": double
readonly "c": double
readonly "d": double
readonly "e": double
readonly "f": double
readonly "g": double

constructor(a: double, b: double, c: double, d: double, g: double)
constructor(a: double, b: double, c: double, d: double, e: double, f: double, g: double)

}
}

declare module "icyllis.arc3d.core.ColorSpace$Connector" {
import { $ColorSpace } from "icyllis.arc3d.core.ColorSpace"
import { $ColorSpace$RenderIntent } from "icyllis.arc3d.core.ColorSpace$RenderIntent"

export class $ColorSpace$Connector {
public "getDestination"(): $ColorSpace
public "getRenderIntent"(): $ColorSpace$RenderIntent
public "getSource"(): $ColorSpace
public "transform"(r: float, g: float, b: float): float[]
public "transform"(v: float[]): float[]
get "destination"(): $ColorSpace
get "renderIntent"(): $ColorSpace$RenderIntent
get "source"(): $ColorSpace
}
}

declare module "icyllis.arc3d.core.ColorSpace$Model" {
import { $Enum } from "java.lang.Enum"

export class $ColorSpace$Model extends $Enum<$ColorSpace$Model> {
static readonly "CMYK": $ColorSpace$Model
static readonly "LAB": $ColorSpace$Model
static readonly "RGB": $ColorSpace$Model
static readonly "XYZ": $ColorSpace$Model

public "getComponentCount"(): integer
public static "valueOf"(name: string): $ColorSpace$Model
public static "values"(): $ColorSpace$Model[]
get "componentCount"(): integer
}
}

declare module "icyllis.arc3d.core.PixelRef" {
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"

export class $PixelRef extends $RefCnt {
constructor(width: integer, height: integer, base: any, address: long, rowBytes: integer, freeFn: $LongConsumer$$Type)

public "getAddress"(): long
public "getBase"(): any
public "getHeight"(): integer
public "getRowBytes"(): integer
public "getWidth"(): integer
public "isImmutable"(): boolean
public "setImmutable"(): void
get "address"(): long
get "base"(): any
get "height"(): integer
get "rowBytes"(): integer
get "width"(): integer
get "immutable"(): boolean
}
}

declare module "icyllis.arc3d.core.Rect2f" {
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Rect2fc, $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $Rect2f implements $Rect2fc {
constructor(r: $Rect2ic$$Type)
constructor(r: $Rect2fc$$Type)
constructor(left: float, top: float, right: float, bottom: float)
constructor()

public "adjust"(adjusts: $Rect2ic$$Type): void
public "adjust"(adjusts: $Rect2fc$$Type): void
public "adjust"(left: float, top: float, right: float, bottom: float): void
public "bottom"(): float
public "centerX"(): float
public "centerY"(): float
public "contains"(x: float, y: float): boolean
public "contains"(r: $Rect2ic$$Type): boolean
public "contains"(r: $Rect2fc$$Type): boolean
public "contains"(left: float, top: float, right: float, bottom: float): boolean
public static "empty"(): $Rect2fc
public "halfHeight"(): float
public "halfWidth"(): float
public "height"(): float
public "inset"(insets: $Rect2ic$$Type): void
public "inset"(insets: $Rect2fc$$Type): void
public "inset"(left: float, top: float, right: float, bottom: float): void
public "inset"(dx: float, dy: float): void
public "intersect"(left: float, top: float, right: float, bottom: float): boolean
public "intersect"(r: $Rect2fc$$Type): boolean
public "intersect"(r: $Rect2ic$$Type): boolean
public "intersect"(a: $Rect2fc$$Type, b: $Rect2fc$$Type): boolean
public "intersectNoCheck"(r: $Rect2ic$$Type): void
public "intersectNoCheck"(r: $Rect2fc$$Type): void
public "intersectNoCheck"(left: float, top: float, right: float, bottom: float): void
public "intersects"(left: float, top: float, right: float, bottom: float): boolean
public "intersects"(r: $Rect2fc$$Type): boolean
public "intersects"(r: $Rect2ic$$Type): boolean
public static "intersects"(a: $Rect2fc$$Type, b: $Rect2fc$$Type): boolean
public "isEmpty"(): boolean
public "isFinite"(): boolean
public "isSorted"(): boolean
public "join"(r: $Rect2ic$$Type): void
public "join"(x: float, y: float): void
public "join"(left: float, top: float, right: float, bottom: float): void
public "join"(r: $Rect2fc$$Type): void
public "joinNoCheck"(r: $Rect2fc$$Type): void
public "joinNoCheck"(r: $Rect2ic$$Type): void
public "joinNoCheck"(left: float, top: float, right: float, bottom: float): void
public "left"(): float
public static "makeInfiniteInverted"(): $Rect2f
public "offset"(dx: float, dy: float): void
public "offsetTo"(newLeft: float, newTop: float): void
public "outset"(dx: float, dy: float): void
public static "rectsOverlap"(a: $Rect2fc$$Type, b: $Rect2fc$$Type): boolean
public static "rectsTouchOrOverlap"(a: $Rect2fc$$Type, b: $Rect2fc$$Type): boolean
public "right"(): float
public "round"(dst: $Rect2f$$Type): void
public "round"(dst: $Rect2i$$Type): void
public "roundIn"(dst: $Rect2f$$Type): void
public "roundIn"(dst: $Rect2i$$Type): void
public "roundOut"(dst: $Rect2f$$Type): void
public "roundOut"(dst: $Rect2i$$Type): void
public "set"(src: $Rect2fc$$Type): void
public "set"(left: float, top: float, right: float, bottom: float): void
public "set"(src: $Rect2ic$$Type): void
public "setBounds"(pts: float[], offset: integer, count: integer): boolean
public "setBoundsNoCheck"(pts: float[], offset: integer, count: integer): void
public "setEmpty"(): void
public "sort"(): void
public "store"(dst: $Rect2f$$Type): void
public "store"(dst: $Rect2i$$Type): void
public static "subtract"(a: $Rect2fc$$Type, b: $Rect2fc$$Type, out: $Rect2f$$Type): boolean
public "top"(): float
public "width"(): float
public "x"(): float
public "y"(): float
get "mBottom"(): float
set "mBottom"(value: float)
get "mLeft"(): float
set "mLeft"(value: float)
get "mRight"(): float
set "mRight"(value: float)
get "mTop"(): float
set "mTop"(value: float)
get "finite"(): boolean
get "sorted"(): boolean
}
}

declare module "icyllis.arc3d.core.Rect2i" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Rect2ic, $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $Rect2i implements $Rect2ic {
constructor(r: $Rect2fc$$Type)
constructor(r: $Rect2ic$$Type)
constructor(left: integer, top: integer, right: integer, bottom: integer)
constructor()

public "adjust"(adjusts: $Rect2ic$$Type): void
public "adjust"(left: integer, top: integer, right: integer, bottom: integer): void
public "bottom"(): integer
public "contains"(x: integer, y: integer): boolean
public "contains"(left: integer, top: integer, right: integer, bottom: integer): boolean
public "contains"(x: float, y: float): boolean
public "contains"(r: $Rect2ic$$Type): boolean
public "contains"(left: float, top: float, right: float, bottom: float): boolean
public "contains"(r: $Rect2fc$$Type): boolean
public static "empty"(): $Rect2ic
public "height"(): integer
public "inset"(insets: $Rect2ic$$Type): void
public "inset"(dx: integer, dy: integer): void
public "inset"(left: integer, top: integer, right: integer, bottom: integer): void
public "intersect"(left: integer, top: integer, right: integer, bottom: integer): boolean
public "intersect"(a: $Rect2ic$$Type, b: $Rect2ic$$Type): boolean
public "intersect"(r: $Rect2ic$$Type): boolean
public "intersectNoCheck"(r: $Rect2ic$$Type): void
public "intersectNoCheck"(left: integer, top: integer, right: integer, bottom: integer): void
public "intersects"(r: $Rect2ic$$Type): boolean
public "intersects"(left: integer, top: integer, right: integer, bottom: integer): boolean
public static "intersects"(a: $Rect2ic$$Type, b: $Rect2ic$$Type): boolean
public "isEmpty"(): boolean
public "isSorted"(): boolean
public "join"(left: integer, top: integer, right: integer, bottom: integer): void
public "join"(r: $Rect2ic$$Type): void
public "join"(x: integer, y: integer): void
public "joinNoCheck"(r: $Rect2ic$$Type): void
public "joinNoCheck"(left: integer, top: integer, right: integer, bottom: integer): void
public "left"(): integer
public "offset"(dx: integer, dy: integer): void
public "offsetTo"(newLeft: integer, newTop: integer): void
public "right"(): integer
public "set"(left: integer, top: integer, right: integer, bottom: integer): void
public "set"(src: $Rect2ic$$Type): void
public "setEmpty"(): void
public "sort"(): void
public "store"(dst: $Rect2f$$Type): void
public "store"(dst: $Rect2i$$Type): void
public static "subtract"(a: $Rect2ic$$Type, b: $Rect2ic$$Type, out: $Rect2i$$Type): boolean
public "top"(): integer
public "width"(): integer
public "x"(): integer
public "y"(): integer
get "mBottom"(): integer
set "mBottom"(value: integer)
get "mLeft"(): integer
set "mLeft"(value: integer)
get "mRight"(): integer
set "mRight"(value: integer)
get "mTop"(): integer
set "mTop"(value: integer)
get "sorted"(): boolean
}
}

declare module "icyllis.arc3d.core.Matrix4c" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Cloneable } from "java.lang.Cloneable"
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Matrix4, $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Matrix3, $Matrix3$$Type } from "icyllis.arc3d.core.Matrix3"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Matrix4c extends $Cloneable {
"clone"(): $Matrix4
"determinant"(): float
"hasPerspective"(): boolean
"invert"(matrix40: $Matrix4$$Type): boolean
"isApproxEqual"(matrix40: $Matrix4$$Type): boolean
"isAxisAligned"(): boolean
"isScaleTranslate"(): boolean
"localAARadius"(rect2fc0: $Rect2fc$$Type): float
"localAARadius"(float0: float, float1: float, float2: float, float3: float): float
"m11"(): float
"m12"(): float
"m13"(): float
"m14"(): float
"m21"(): float
"m22"(): float
"m23"(): float
"m24"(): float
"m31"(): float
"m32"(): float
"m33"(): float
"m34"(): float
"m41"(): float
"m42"(): float
"m43"(): float
"m44"(): float
"mapRect"(rect2fc0: $Rect2fc$$Type, rect2f1: $Rect2f$$Type): void
"mapRect"(rect2f0: $Rect2f$$Type): void
"mapRect"(rect2ic0: $Rect2ic$$Type, rect2i1: $Rect2i$$Type): void
"mapRect"(rect2fc0: $Rect2fc$$Type, rect2i1: $Rect2i$$Type): void
"mapRectIn"(rect2fc0: $Rect2fc$$Type, rect2i1: $Rect2i$$Type): void
"mapRectOut"(rect2ic0: $Rect2ic$$Type, rect2i1: $Rect2i$$Type): void
"mapRectOut"(rect2fc0: $Rect2fc$$Type, rect2i1: $Rect2i$$Type): void
"store"(float0s: float[], int1: integer): void
"store"(float0s: float[]): void
"store"(matrix40: $Matrix4$$Type): void
"store"(byteBuffer0: $ByteBuffer$$Type): void
"store"(floatBuffer0: $FloatBuffer$$Type): void
"store"(long0: long): void
"toMatrix3"(): $Matrix3
"toMatrix3"(matrix30: $Matrix3$$Type): void
get "axisAligned"(): boolean
get "scaleTranslate"(): boolean
}

export namespace $Matrix4c {
const probejs$$marker: never
}
export abstract class $Matrix4c$$Static implements $Matrix4c {
}
}

