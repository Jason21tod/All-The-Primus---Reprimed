declare module "icyllis.arc3d.sketch.StrikeDesc" {
import { $Strike } from "icyllis.arc3d.sketch.Strike"
import { $Font$$Type } from "icyllis.arc3d.sketch.Font"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $Matrix$$Type } from "icyllis.arc3d.sketch.Matrix"
import { $ScalerContext } from "icyllis.arc3d.sketch.ScalerContext"
import { $StrikeCache$$Type } from "icyllis.arc3d.sketch.StrikeCache"
import { $PathEffect } from "icyllis.arc3d.sketch.PathEffect"

export class $StrikeDesc {
static readonly "kFrameAndFill_Flag": integer
static readonly "kLinearMetrics_Flag": integer
static readonly "kSubpixelPositioning_Flag": integer

public "createScalerContext"(): $ScalerContext
public "findOrCreateStrike"(): $Strike
public "findOrCreateStrike"(cache: $StrikeCache$$Type): $Strike
public "getDeviceMatrix"(dst: $Matrix$$Type): void
public "getFlags"(): integer
public "getFrameWidth"(): float
public "getLocalMatrix"(dst: $Matrix$$Type): void
public "getMaskFormat"(): byte
public "getMemorySize"(): long
public "getMiterLimit"(): float
public "getPathEffect"(): $PathEffect
public "getPostScaleX"(): float
public "getPostScaleY"(): float
public "getPostShearX"(): float
public "getPostShearY"(): float
public "getStrokeJoin"(): integer
public "getTextSize"(): float
public "getTotalMatrix"(dst: $Matrix$$Type): void
public "immutable"(): $StrikeDesc
public "isImmutable"(): boolean
public static "makeMask"(font: $Font$$Type, paint: $Paint$$Type, deviceMatrix: $Matrixc$$Type): $StrikeDesc
public static "shouldDrawAsPath"(paint: $Paint$$Type, font: $Font$$Type, viewMatrix: $Matrixc$$Type): boolean
get "flags"(): integer
get "frameWidth"(): float
get "maskFormat"(): byte
get "memorySize"(): long
get "miterLimit"(): float
get "pathEffect"(): $PathEffect
get "postScaleX"(): float
get "postScaleY"(): float
get "postShearX"(): float
get "postShearY"(): float
get "strokeJoin"(): integer
get "textSize"(): float
}
}

declare module "icyllis.arc3d.sketch.Paint" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $BlendMode, $BlendMode$$Type } from "icyllis.arc3d.sketch.BlendMode"
import { $ImageFilter$$Type } from "icyllis.arc3d.sketch.ImageFilter"
import { $Blender, $Blender$$Type } from "icyllis.arc3d.sketch.Blender"
import { $ColorFilter, $ColorFilter$$Type } from "icyllis.arc3d.sketch.effects.ColorFilter"
import { $Shader, $Shader$$Type } from "icyllis.arc3d.sketch.shaders.Shader"
import { $ColorSpace$$Type } from "icyllis.arc3d.core.ColorSpace"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"
import { $PathEffect, $PathEffect$$Type } from "icyllis.arc3d.sketch.PathEffect"

export class $Paint implements $AutoCloseable {
static readonly "ALIGN_CENTER": integer
static readonly "ALIGN_COUNT": integer
static readonly "ALIGN_INSIDE": integer
static readonly "ALIGN_OUTSIDE": integer
static readonly "CAP_BUTT": integer
static readonly "CAP_COUNT": integer
static readonly "CAP_ROUND": integer
static readonly "CAP_SQUARE": integer
static readonly "FILL": integer
static readonly "FILL_AND_STROKE": integer
static readonly "JOIN_BEVEL": integer
static readonly "JOIN_COUNT": integer
static readonly "JOIN_MITER": integer
static readonly "JOIN_ROUND": integer
static readonly "STROKE": integer
static readonly "STROKE_AND_FILL": integer

constructor()
constructor(paint: $Paint$$Type)

public "a"(): float
public "b"(): float
public "canComputeFastBounds"(imageFilter: $ImageFilter$$Type): boolean
public "close"(): void
public "computeFastBounds"(imageFilter: $ImageFilter$$Type, orig: $Rect2fc$$Type, storage: $Rect2f$$Type): void
public "g"(): float
public "getAlpha"(): integer
public static "getAlphaDirect"(paint: $Paint$$Type): integer
public "getAlphaF"(): float
public "getBlendMode"(): $BlendMode
public static "getBlendModeDirect"(paint: $Paint$$Type): $BlendMode
public "getBlender"(): $Blender
public "getColor"(): integer
public "getColor4f"(dst: float[]): void
public "getColorFilter"(): $ColorFilter
public "getPathEffect"(): $PathEffect
public "getShader"(): $Shader
public "getStrokeAlign"(): integer
public "getStrokeCap"(): integer
public "getStrokeJoin"(): integer
public "getStrokeMiter"(): float
public "getStrokeWidth"(): float
public "getStyle"(): integer
public "isAntiAlias"(): boolean
public static "isBlendedColorFilter"(filter: $ColorFilter$$Type): boolean
public static "isBlendedImageFilter"(filter: $ImageFilter$$Type): boolean
public static "isBlendedShader"(shader: $Shader$$Type): boolean
public "isDither"(): boolean
public static "isOpaquePaint"(paint: $Paint$$Type): boolean
public "isSrcOver"(): boolean
public "nothingToDraw"(): boolean
public "r"(): float
public "refShader"(): $Shader
public "reset"(): void
public "set"(paint: $Paint$$Type): void
public "setARGB"(a: integer, r: integer, g: integer, b: integer): void
public "setAlpha"(a: integer): void
public "setAlphaF"(a: float): void
public "setAntiAlias"(aa: boolean): void
public "setBlendMode"(mode: $BlendMode$$Type): void
public "setBlender"(blender: $Blender$$Type): void
public "setColor"(color: integer): void
public "setColor4f"(r: float, g: float, b: float, a: float, colorSpace: $ColorSpace$$Type): void
public "setColor4f"(r: float, g: float, b: float, a: float): void
public "setColorFilter"(colorFilter: $ColorFilter$$Type): void
public "setDither"(dither: boolean): void
public "setPathEffect"(pathEffect: $PathEffect$$Type): void
public "setRGB"(r: integer, g: integer, b: integer): void
public "setRGBA"(r: integer, g: integer, b: integer, a: integer): void
public "setShader"(shader: $Shader$$Type): void
public "setStroke"(stroke: boolean): void
public "setStrokeAlign"(align: integer): void
public "setStrokeCap"(cap: integer): void
public "setStrokeJoin"(join: integer): void
public "setStrokeMiter"(miter: float): void
public "setStrokeWidth"(width: float): void
public "setStyle"(style: integer): void
get "alpha"(): integer
get "alphaF"(): float
get "blendMode"(): $BlendMode
get "blender"(): $Blender
get "color"(): integer
get "colorFilter"(): $ColorFilter
get "pathEffect"(): $PathEffect
get "shader"(): $Shader
get "strokeAlign"(): integer
get "strokeCap"(): integer
get "strokeJoin"(): integer
get "strokeMiter"(): float
get "strokeWidth"(): float
get "style"(): integer
get "antiAlias"(): boolean
get "dither"(): boolean
get "srcOver"(): boolean
set "alpha"(value: integer)
set "alphaF"(value: float)
set "antiAlias"(value: boolean)
set "blendMode"(value: $BlendMode$$Type)
set "blender"(value: $Blender$$Type)
set "color"(value: integer)
set "colorFilter"(value: $ColorFilter$$Type)
set "dither"(value: boolean)
set "pathEffect"(value: $PathEffect$$Type)
set "shader"(value: $Shader$$Type)
set "stroke"(value: boolean)
set "strokeAlign"(value: integer)
set "strokeCap"(value: integer)
set "strokeJoin"(value: integer)
set "strokeMiter"(value: float)
set "strokeWidth"(value: float)
set "style"(value: integer)
}
}

declare module "icyllis.arc3d.sketch.ImageFilter" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"

export class $ImageFilter {
constructor()

public "canComputeFastBounds"(): boolean
public "computeFastBounds"(src: $Rect2f$$Type, dst: $Rect2f$$Type): void
}
}

declare module "icyllis.arc3d.sketch.ScalerContext" {
import { $StrikeDesc$$Type } from "icyllis.arc3d.sketch.StrikeDesc"
import { $Typeface, $Typeface$$Type } from "icyllis.arc3d.sketch.Typeface"
import { $Glyph, $Glyph$$Type } from "icyllis.arc3d.sketch.Glyph"

export class $ScalerContext {
constructor(typeface: $Typeface$$Type, desc: $StrikeDesc$$Type)

public "getImage"(glyph: $Glyph$$Type): void
public "getMaskFormat"(): byte
public "getPath"(glyph: $Glyph$$Type): void
public "getTypeface"(): $Typeface
public "isLinearMetrics"(): boolean
public "isSubpixel"(): boolean
public "makeGlyph"(packedID: integer): $Glyph
get "maskFormat"(): byte
get "typeface"(): $Typeface
get "linearMetrics"(): boolean
get "subpixel"(): boolean
}
}

declare module "icyllis.arc3d.sketch.PathEffect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PathEffect {
constructor()

}
}

declare module "icyllis.arc3d.sketch.Glyph" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Path, $Path$$Type } from "icyllis.arc3d.sketch.Path"
import { $ScalerContext$$Type } from "icyllis.arc3d.sketch.ScalerContext"

export class $Glyph {
static readonly "kAccept_Action": integer
static readonly "kBilerpGlyphBorder": integer
static readonly "kDirectMask": integer
static readonly "kDrawable": integer
static readonly "kDrop_Action": integer
static readonly "kMSDF": integer
static readonly "kMaxAtlasDimension": integer
static readonly "kMaxBilerpAtlasDimension": integer
static readonly "kMaxTextSizeForMask": integer
static readonly "kPath": integer
static readonly "kReject_Action": integer
static readonly "kSDF": integer
static readonly "kSubPixelPosLen": integer
static readonly "kSubPixelPosMask": integer
static readonly "kSubPixelXMask": integer
static readonly "kSubPixelXShift": integer
static readonly "kTransformedMask": integer
static readonly "kUnset_Action": integer

constructor(id: integer)

public "actionFor"(actionType: integer): integer
public "getBounds"(dst: $Rect2f$$Type): void
public "getBounds"(dst: $Rect2i$$Type): void
public static "getGlyphID"(packedID: integer): integer
public "getGlyphID"(): integer
public "getHeight"(): integer
public "getImageAddress"(): long
public "getImageBase"(): any
public "getImageSize"(): integer
public "getLeft"(): integer
public "getMaskFormat"(): byte
public "getMaxDimension"(): integer
public "getPackedID"(): integer
public "getPath"(): $Path
public "getRowBytes"(): integer
public static "getSubX"(packedID: integer): float
public "getSubX"(): float
public "getTop"(): integer
public "getWidth"(): integer
public "imageIsTooLarge"(): boolean
public "isColor"(): boolean
public "isEmpty"(): boolean
public static "packGlyphID"(glyphID: integer, xPos: float, mask: integer): integer
public "setImage"(scalerContext: $ScalerContext$$Type): boolean
public "setImageHasBeenCalled"(): boolean
public "setPath"(path: $Path$$Type): boolean
public "setPath"(scalerContext: $ScalerContext$$Type): boolean
public "setPathHasBeenCalled"(): boolean
get "glyphID"(): integer
get "height"(): integer
get "imageAddress"(): long
get "imageBase"(): any
get "imageSize"(): integer
get "left"(): integer
get "maskFormat"(): byte
get "maxDimension"(): integer
get "packedID"(): integer
get "path"(): $Path
get "rowBytes"(): integer
get "subX"(): float
get "top"(): integer
get "width"(): integer
get "color"(): boolean
get "empty"(): boolean
set "image"(value: $ScalerContext$$Type)
set "path"(value: $Path$$Type)
set "path"(value: $ScalerContext$$Type)
}
}

declare module "icyllis.arc3d.sketch.Strike" {
import { $StrikeDesc, $StrikeDesc$$Type } from "icyllis.arc3d.sketch.StrikeDesc"
import { $Glyph, $Glyph$$Type } from "icyllis.arc3d.sketch.Glyph"
import { $StrikeCache$$Type } from "icyllis.arc3d.sketch.StrikeCache"
import { $ScalerContext$$Type } from "icyllis.arc3d.sketch.ScalerContext"

export class $Strike {
constructor(strikeCache: $StrikeCache$$Type, strikeDesc: $StrikeDesc$$Type, scalerContext: $ScalerContext$$Type)

public "digestFor"(actionType: integer, packedID: integer): $Glyph
public "getGlyph"(packedID: integer): $Glyph
public "getMetrics"(glyphs: integer[], glyphOffset: integer, glyphCount: integer, results: $Glyph$$Type[]): $Glyph[]
public "getStrikeDesc"(): $StrikeDesc
public "getSubpixelFieldMask"(): integer
public "getSubpixelRounding"(): float
public "lock"(): void
public "prepareForImage"(glyph: $Glyph$$Type): boolean
public "prepareForPath"(glyph: $Glyph$$Type): boolean
public "unlock"(): void
get "strikeDesc"(): $StrikeDesc
get "subpixelFieldMask"(): integer
get "subpixelRounding"(): float
}
}

declare module "icyllis.arc3d.sketch.Image" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $ImageInfo } from "icyllis.arc3d.core.ImageInfo"
import { $Context } from "icyllis.arc3d.engine.Context"
import { $ColorSpace } from "icyllis.arc3d.core.ColorSpace"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"

export class $Image extends $RefCnt {
public "getAlphaType"(): integer
public "getBounds"(bounds: $Rect2f$$Type): void
public "getBounds"(bounds: $Rect2i$$Type): void
public "getColorSpace"(): $ColorSpace
public "getColorType"(): integer
public "getContext"(): $Context
public "getHeight"(): integer
public "getInfo"(): $ImageInfo
public "getTextureSize"(): long
public "getUniqueID"(): any
public "getWidth"(): integer
public "isAlphaOnly"(): boolean
public "isOpaque"(): boolean
public "isRasterBacked"(): boolean
public "isTextureBacked"(): boolean
get "alphaType"(): integer
get "colorSpace"(): $ColorSpace
get "colorType"(): integer
get "context"(): $Context
get "height"(): integer
get "info"(): $ImageInfo
get "textureSize"(): long
get "uniqueID"(): any
get "width"(): integer
get "alphaOnly"(): boolean
get "opaque"(): boolean
get "rasterBacked"(): boolean
get "textureBacked"(): boolean
}
}

declare module "icyllis.arc3d.sketch.GlyphRun" {
import { $Font, $Font$$Type } from "icyllis.arc3d.sketch.Font"

export class $GlyphRun {
constructor()

public "clear"(): void
public "font"(): $Font
public "set"(glyphs: integer[], glyphOffset: integer, positions: float[], positionOffset: integer, glyphCount: integer, font: $Font$$Type): void
get "mGlyphCount"(): integer
set "mGlyphCount"(value: integer)
get "mGlyphOffset"(): integer
set "mGlyphOffset"(value: integer)
get "mGlyphs"(): integer[]
set "mGlyphs"(value: integer[])
get "mPositionOffset"(): integer
set "mPositionOffset"(value: integer)
get "mPositions"(): float[]
set "mPositions"(value: float[])
}
}

declare module "icyllis.arc3d.sketch.Vertices" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $ShortBuffer$$Type } from "java.nio.ShortBuffer"
import { $Rect2fc } from "icyllis.arc3d.core.Rect2fc"

export class $Vertices {
static readonly "kLineStrip_VertexMode": integer
static readonly "kLines_VertexMode": integer
static readonly "kPoints_VertexMode": integer
static readonly "kTriangleStrip_VertexMode": integer
static readonly "kTriangles_VertexMode": integer
static readonly "kVertexModeCount": integer

public "getBounds"(bounds: $Rect2f$$Type): void
public "getBounds"(): $Rect2fc
public "getColors"(): integer[]
public "getIndexCount"(): integer
public "getIndices"(): short[]
public "getPositions"(): float[]
public "getTexCoords"(): float[]
public "getVertexCount"(): integer
public "getVertexMode"(): integer
public "hasColors"(): boolean
public "hasIndices"(): boolean
public "hasTexCoords"(): boolean
public static "makeCopy"(vertexMode: integer, positions: $FloatBuffer$$Type, texCoords: $FloatBuffer$$Type, colors: $IntBuffer$$Type, indices: $ShortBuffer$$Type): $Vertices
public static "makeCopy"(vertexMode: integer, vertexCount: integer, positions: float[], positionOffset: integer, texCoords: float[], texCoordOffset: integer, colors: integer[], colorOffset: integer): $Vertices
public static "makeCopy"(vertexMode: integer, vertexCount: integer, positions: float[], positionOffset: integer, texCoords: float[], texCoordOffset: integer, colors: integer[], colorOffset: integer, indices: short[], indexOffset: integer, indexCount: integer): $Vertices
get "bounds"(): $Rect2fc
get "colors"(): integer[]
get "indexCount"(): integer
get "indices"(): short[]
get "positions"(): float[]
get "texCoords"(): float[]
get "vertexCount"(): integer
get "vertexMode"(): integer
}
}

declare module "icyllis.arc3d.sketch.Font" {
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Typeface, $Typeface$$Type } from "icyllis.arc3d.sketch.Typeface"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"

export class $Font {
static readonly "kAlias_Edging": integer
static readonly "kAntiAlias_Edging": integer
static readonly "kCanonicalTextSizeForPaths": integer

constructor()
constructor(other: $Font$$Type)

public "approximateTransformedFontSize"(matrix: $Matrixc$$Type, centerX: float, centerY: float): float
public "getEdging"(): integer
public "getSize"(): float
public "getTypeface"(): $Typeface
public "isLinearMetrics"(): boolean
public "isSubpixel"(): boolean
public "set"(other: $Font$$Type): void
public "setEdging"(edging: integer): void
public "setLinearMetrics"(linearMetrics: boolean): void
public "setSize"(size: float): void
public "setSubpixel"(subpixel: boolean): void
public "setTypeface"(typeface: $Typeface$$Type): void
public "setupForPaths"(paint: $Paint$$Type): float
get "edging"(): integer
get "size"(): float
get "typeface"(): $Typeface
get "linearMetrics"(): boolean
get "subpixel"(): boolean
set "edging"(value: integer)
set "linearMetrics"(value: boolean)
set "size"(value: float)
set "subpixel"(value: boolean)
set "typeface"(value: $Typeface$$Type)
set "upForPaths"(value: $Paint$$Type)
}
}

declare module "icyllis.arc3d.sketch.GlyphRunList" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $GlyphRun, $GlyphRun$$Type } from "icyllis.arc3d.sketch.GlyphRun"
import { $TextBlob, $TextBlob$$Type } from "icyllis.arc3d.sketch.TextBlob"
import { $Rect2fc, $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $GlyphRunList {
constructor()

public "clear"(): void
public "getSourceBounds"(): $Rect2fc
public "getSourceBoundsWithOrigin"(bounds: $Rect2f$$Type): void
public "maxGlyphRunSize"(): integer
public "set"(glyphRuns: $GlyphRun$$Type[], glyphRunCount: integer, blob: $TextBlob$$Type, bounds: $Rect2fc$$Type, originX: float, originY: float): void
get "mGlyphRunCount"(): integer
set "mGlyphRunCount"(value: integer)
get "mGlyphRuns"(): $GlyphRun[]
set "mGlyphRuns"(value: $GlyphRun$$Type[])
get "mOriginX"(): float
set "mOriginX"(value: float)
get "mOriginY"(): float
set "mOriginY"(value: float)
get "mOriginalTextBlob"(): $TextBlob
set "mOriginalTextBlob"(value: $TextBlob$$Type)
get "sourceBounds"(): $Rect2fc
}
}

declare module "icyllis.arc3d.sketch.StrikeCache" {
import { $Strike } from "icyllis.arc3d.sketch.Strike"
import { $StrikeDesc$$Type } from "icyllis.arc3d.sketch.StrikeDesc"

export class $StrikeCache {
constructor()

public "findOrCreateStrike"(desc: $StrikeDesc$$Type): $Strike
public static "getGlobalStrikeCache"(): $StrikeCache
public "getTotalMemoryUsed"(): long
get "totalMemoryUsed"(): long
}
}

declare module "icyllis.arc3d.sketch.Canvas" {
import { $BlendMode$$Type } from "icyllis.arc3d.sketch.BlendMode"
import { $ImageFilter$$Type } from "icyllis.arc3d.sketch.ImageFilter"
import { $Font$$Type } from "icyllis.arc3d.sketch.Font"
import { $Blender$$Type } from "icyllis.arc3d.sketch.Blender"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Matrix4c$$Type } from "icyllis.arc3d.core.Matrix4c"
import { $RRect$$Type } from "icyllis.arc3d.sketch.RRect"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Surface } from "icyllis.arc3d.sketch.Surface"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $TextBlob$$Type } from "icyllis.arc3d.sketch.TextBlob"
import { $ImageInfo, $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $Device$$Type } from "icyllis.arc3d.sketch.Device"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Context } from "icyllis.arc3d.engine.Context"
import { $Image$$Type } from "icyllis.arc3d.sketch.Image"
import { $SamplingOptions$$Type } from "icyllis.arc3d.core.SamplingOptions"
import { $Vertices$$Type } from "icyllis.arc3d.sketch.Vertices"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Matrix$$Type } from "icyllis.arc3d.sketch.Matrix"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $Canvas implements $AutoCloseable {
static readonly "F16_COLOR_TYPE_SAVE_LAYER_FLAG": integer
static readonly "INIT_WITH_PREVIOUS_SAVE_LAYER_FLAG": integer
static readonly "POINT_MODE_LINES": integer
static readonly "POINT_MODE_POINTS": integer
static readonly "POINT_MODE_POLYGON": integer
static readonly "QUAD_AA_FLAGS_ALL": integer
static readonly "QUAD_AA_FLAGS_NONE": integer
static readonly "QUAD_AA_FLAG_BOTTOM": integer
static readonly "QUAD_AA_FLAG_LEFT": integer
static readonly "QUAD_AA_FLAG_RIGHT": integer
static readonly "QUAD_AA_FLAG_TOP": integer
static readonly "SRC_RECT_CONSTRAINT_FAST": integer
static readonly "SRC_RECT_CONSTRAINT_STRICT": integer

constructor(device: $Device$$Type)
constructor(width: integer, height: integer)
constructor()

public "clear"(color: integer): void
public "clear"(r: float, g: float, b: float, a: float): void
public "clipRect"(rect: $Rect2fc$$Type, clipOp: integer, doAA: boolean): void
public "clipRect"(rect: $Rect2ic$$Type, clipOp: integer): void
public "clipRect"(left: float, top: float, right: float, bottom: float, clipOp: integer): void
public "clipRect"(rect: $Rect2fc$$Type, clipOp: integer): void
public "clipRect"(rect: $Rect2fc$$Type): void
public "clipRect"(left: float, top: float, right: float, bottom: float): void
public "clipRect"(rect: $Rect2fc$$Type, doAA: boolean): void
public "clipRect"(left: float, top: float, right: float, bottom: float, doAA: boolean): void
public "clipRect"(rect: $Rect2ic$$Type): void
public "close"(): void
public "concat"(matrix: $Matrixc$$Type): void
public "concat"(matrix: $Consumer$$Type<$Matrix4$$Type>): void
public "concat"(matrix: $Matrix4c$$Type): void
public "discard"(): void
public "drawArc"(cx: float, cy: float, radius: float, startAngle: float, sweepAngle: float, paint: $Paint$$Type): void
public "drawArc"(cx: float, cy: float, radius: float, startAngle: float, sweepAngle: float, cap: integer, width: float, paint: $Paint$$Type): void
public "drawBlurredRRect"(rr: $RRect$$Type, paint: $Paint$$Type, blurRadius: float, noiseAlpha: float): void
public "drawChord"(cx: float, cy: float, radius: float, startAngle: float, sweepAngle: float, paint: $Paint$$Type): void
public "drawCircle"(cx: float, cy: float, radius: float, paint: $Paint$$Type): void
public "drawColor"(color: integer, mode: $BlendMode$$Type): void
public "drawColor"(r: float, g: float, b: float, a: float, mode: $BlendMode$$Type): void
public "drawColor"(r: float, g: float, b: float, a: float): void
public "drawColor"(color: integer): void
public "drawEdgeAAQuad"(rect: $Rect2fc$$Type, clip: float[], edgeFlags: integer, paint: $Paint$$Type): void
public "drawEllipse"(cx: float, cy: float, radiusX: float, radiusY: float, paint: $Paint$$Type): void
public "drawGlyphs"(glyphs: integer[], glyphOffset: integer, positions: float[], positionOffset: integer, glyphCount: integer, originX: float, originY: float, font: $Font$$Type, paint: $Paint$$Type): void
public "drawImage"(image: $Image$$Type, x: float, y: float, sampling: $SamplingOptions$$Type, paint: $Paint$$Type): void
public "drawImageRect"(image: $Image$$Type, dst: $Rect2fc$$Type, sampling: $SamplingOptions$$Type, paint: $Paint$$Type): void
public "drawImageRect"(image: $Image$$Type, src: $Rect2fc$$Type, dst: $Rect2fc$$Type, sampling: $SamplingOptions$$Type, paint: $Paint$$Type, constraint: integer): void
public "drawLine"(x0: float, y0: float, x1: float, y1: float, cap: integer, width: float, paint: $Paint$$Type): void
public "drawLine"(x0: float, y0: float, x1: float, y1: float, paint: $Paint$$Type): void
public "drawPaint"(paint: $Paint$$Type): void
public "drawPie"(cx: float, cy: float, radius: float, startAngle: float, sweepAngle: float, paint: $Paint$$Type): void
public "drawPoint"(x: float, y: float, paint: $Paint$$Type): void
public "drawPoint"(x: float, y: float, cap: integer, size: float, paint: $Paint$$Type): void
public "drawPoints"(mode: integer, pts: float[], offset: integer, count: integer, paint: $Paint$$Type): void
public "drawRRect"(rrect: $RRect$$Type, paint: $Paint$$Type): void
public "drawRect"(left: float, top: float, right: float, bottom: float, paint: $Paint$$Type): void
public "drawRect"(r: $Rect2fc$$Type, paint: $Paint$$Type): void
public "drawRect"(r: $Rect2ic$$Type, paint: $Paint$$Type): void
public "drawTextBlob"(blob: $TextBlob$$Type, originX: float, originY: float, paint: $Paint$$Type): void
public "drawVertices"(vertices: $Vertices$$Type, blender: $Blender$$Type, paint: $Paint$$Type): void
public "getBaseLayerHeight"(): integer
public "getBaseLayerWidth"(): integer
public "getCommandContext"(): $Context
public "getDeviceClipBounds"(bounds: $Rect2i$$Type): boolean
public "getImageInfo"(): $ImageInfo
public "getLocalClipBounds"(bounds: $Rect2f$$Type): boolean
public "getLocalToDevice"(storage: $Matrix$$Type): void
public "getLocalToDevice"(storage: $Matrix4$$Type): void
public "getSaveCount"(): integer
public "getSurface"(): $Surface
public "isClipEmpty"(): boolean
public "isClipRect"(): boolean
public "makeSurface"(info: $ImageInfo$$Type): $Surface
public "quickReject"(rect: $Rect2fc$$Type): boolean
public "quickReject"(left: float, top: float, right: float, bottom: float): boolean
public "resetMatrix"(): void
public "restore"(): void
public "restoreToCount"(saveCount: integer): void
public "rotate"(degrees: float): void
public "rotate"(degrees: float, px: float, py: float): void
public "save"(): integer
public "saveLayer"(bounds: $Rect2f$$Type, paint: $Paint$$Type): integer
public "saveLayer"(left: float, top: float, right: float, bottom: float, paint: $Paint$$Type): integer
public "saveLayer"(left: float, top: float, right: float, bottom: float, paint: $Paint$$Type, backdrop: $ImageFilter$$Type, saveLayerFlags: integer): integer
public "saveLayer"(bounds: $Rect2f$$Type, paint: $Paint$$Type, backdrop: $ImageFilter$$Type, saveLayerFlags: integer): integer
public "saveLayerAlpha"(bounds: $Rect2f$$Type, alpha: integer): integer
public "saveLayerAlpha"(left: float, top: float, right: float, bottom: float, alpha: integer): integer
public "scale"(sx: float, sy: float, px: float, py: float): void
public "scale"(sx: float, sy: float, sz: float): void
public "scale"(sx: float, sy: float): void
public "setMatrix"(matrix: $Matrix4c$$Type): void
public "shear"(sx: float, sy: float, px: float, py: float): void
public "shear"(sx: float, sy: float): void
public "translate"(dx: float, dy: float): void
public "translate"(dx: float, dy: float, dz: float): void
get "baseLayerHeight"(): integer
get "baseLayerWidth"(): integer
get "commandContext"(): $Context
get "imageInfo"(): $ImageInfo
get "saveCount"(): integer
get "surface"(): $Surface
get "clipEmpty"(): boolean
set "matrix"(value: $Matrix4c$$Type)
}
}

declare module "icyllis.arc3d.sketch.Path" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Shape } from "java.awt.Shape"
import { $Rectangle } from "java.awt.Rectangle"
import { $Point2D$$Type } from "java.awt.geom.Point2D"
import { $Rectangle2D, $Rectangle2D$$Type } from "java.awt.geom.Rectangle2D"
import { $Shape as $Shape$0 } from "icyllis.arc3d.sketch.Shape"
import { $AffineTransform$$Type } from "java.awt.geom.AffineTransform"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $PathConsumer, $PathConsumer$$Type } from "icyllis.arc3d.sketch.PathConsumer"
import { $PathIterator } from "java.awt.geom.PathIterator"

export class $Path implements $Shape$0, $Shape, $PathConsumer {
static readonly "APPROXIMATE_ARC_WITH_CUBICS": integer
static readonly "APPROXIMATE_CONIC_WITH_QUADS": integer
static readonly "DIRECTION_CCW": integer
static readonly "DIRECTION_CW": integer
static readonly "SEGMENT_CUBIC": integer
static readonly "SEGMENT_LINE": integer
static readonly "SEGMENT_QUAD": integer
static readonly "VERB_CLOSE": byte
static readonly "VERB_CUBIC": byte
static readonly "VERB_DONE": byte
static readonly "VERB_LINE": byte
static readonly "VERB_MOVE": byte
static readonly "VERB_QUAD": byte
static readonly "WIND_EVEN_ODD": integer
static readonly "WIND_NON_ZERO": integer

constructor()
constructor(other: $Path$$Type)

public "clear"(): void
public "close"(): void
public "contains"(x: double, y: double): boolean
public "contains"(r: $Rectangle2D$$Type): boolean
public "contains"(x: double, y: double, w: double, h: double): boolean
public "contains"(p: $Point2D$$Type): boolean
public "countPoints"(): integer
public "countVerbs"(): integer
public "cubicTo"(x1: float, y1: float, x2: float, y2: float, x3: float, y3: float): void
public "cubicTo"(pts: float[], off: integer): void
public "cubicToRel"(dx1: float, dy1: float, dx2: float, dy2: float, dx3: float, dy3: float): void
public "done"(): void
public "estimatedByteSize"(): long
public "forEach"(action: $PathConsumer$$Type): void
public "getBounds"(dst: $Rect2f$$Type): void
public "getBounds"(): $Rectangle
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(at: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(): $PathIterator
public "getPathIterator"(at: $AffineTransform$$Type, flatness: double): $PathIterator
public "getSegmentMask"(): integer
public "getWindingRule"(): integer
public "intersects"(r: $Rectangle2D$$Type): boolean
public "intersects"(x: double, y: double, w: double, h: double): boolean
public "isEmpty"(): boolean
public "isFinite"(): boolean
public "lineTo"(x: float, y: float): void
public "lineToRel"(dx: float, dy: float): void
public "move"(other: $Path$$Type): void
public "moveTo"(x: float, y: float): void
public "moveToRel"(dx: float, dy: float): void
public "quadTo"(x1: float, y1: float, x2: float, y2: float): void
public "quadTo"(pts: float[], off: integer): void
public "quadToRel"(dx1: float, dy1: float, dx2: float, dy2: float): void
public "release"(): void
public "reset"(): void
public "set"(other: $Path$$Type): void
public "setWindingRule"(rule: integer): void
public "transform"(matrix: $Matrixc$$Type): void
public "transform"(matrix: $Matrixc$$Type, dst: $Path$$Type): void
public "trimToSize"(): void
public "updateBoundsCache"(): void
get "bounds"(): $Rectangle
get "bounds2D"(): $Rectangle2D
get "pathIterator"(): $PathIterator
get "segmentMask"(): integer
get "windingRule"(): integer
get "empty"(): boolean
get "finite"(): boolean
set "windingRule"(value: integer)
}
}

declare module "icyllis.arc3d.sketch.Matrixc" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Matrix4, $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Matrix, $Matrix$$Type } from "icyllis.arc3d.sketch.Matrix"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export interface $Matrixc {
"clone"(): $Matrix
"differentialAreaScale"(float0: float, float1: float): float
"equals"(object0: any): boolean
"getMaxScale"(float0: float, float1: float): float
"getMaxScale"(): float
"getMinScale"(): float
"getMinScale"(float0: float, float1: float): float
"getPerspX"(): float
"getPerspY"(): float
"getScaleX"(): float
"getScaleY"(): float
"getShearX"(): float
"getShearY"(): float
"getTranslateX"(): float
"getTranslateY"(): float
"getType"(): integer
"hasPerspective"(): boolean
"hashCode"(): integer
"invert"(matrix0: $Matrix$$Type): boolean
"isAxisAligned"(): boolean
"isFinite"(): boolean
"isIdentity"(): boolean
"isScaleTranslate"(): boolean
"isSimilarity"(): boolean
"isTranslate"(): boolean
"localAARadius"(float0: float, float1: float, float2: float, float3: float): float
"localAARadius"(rect2fc0: $Rect2fc$$Type): float
"m11"(): float
"m12"(): float
"m14"(): float
"m21"(): float
"m22"(): float
"m24"(): float
"m41"(): float
"m42"(): float
"m44"(): float
"mapPoint"(p: float[]): void
"mapPoints"(pts: float[], pos: integer, count: integer): void
"mapPoints"(pts: float[], count: integer): void
"mapPoints"(src: float[], dst: float[], count: integer): void
"mapPoints"(float0s: float[], int1: integer, float2s: float[], int3: integer, int4: integer): void
"mapPoints"(pts: float[]): void
"mapRect"(rect2fc0: $Rect2fc$$Type, rect2f1: $Rect2f$$Type): boolean
"mapRect"(r: $Rect2i$$Type): void
"mapRect"(r: $Rect2fc$$Type, out: $Rect2i$$Type): void
"mapRect"(float0: float, float1: float, float2: float, float3: float, rect2i4: $Rect2i$$Type): void
"mapRect"(r: $Rect2ic$$Type, out: $Rect2i$$Type): void
"mapRect"(rect: $Rect2f$$Type): boolean
"mapRectOut"(r: $Rect2fc$$Type, dst: $Rect2i$$Type): void
"mapRectOut"(r: $Rect2i$$Type): void
"mapRectOut"(float0: float, float1: float, float2: float, float3: float, rect2i4: $Rect2i$$Type): void
"mapRectOut"(r: $Rect2ic$$Type, dst: $Rect2i$$Type): void
"preservesRightAngles"(): boolean
"store"(matrix0: $Matrix$$Type): void
"store"(float0s: float[]): void
"store"(float0s: float[], int1: integer): void
"store"(byteBuffer0: $ByteBuffer$$Type): void
"store"(floatBuffer0: $FloatBuffer$$Type): void
"store"(long0: long): void
"storeAligned"(byteBuffer0: $ByteBuffer$$Type): void
"storeAligned"(long0: long): void
"storeAligned"(floatBuffer0: $FloatBuffer$$Type): void
"toMatrix4"(matrix40: $Matrix4$$Type): void
"toMatrix4"(): $Matrix4
"toString"(): string
get "maxScale"(): float
get "minScale"(): float
get "perspX"(): float
get "perspY"(): float
get "scaleX"(): float
get "scaleY"(): float
get "shearX"(): float
get "shearY"(): float
get "translateX"(): float
get "translateY"(): float
get "type"(): integer
get "axisAligned"(): boolean
get "finite"(): boolean
get "identity"(): boolean
get "scaleTranslate"(): boolean
get "similarity"(): boolean
get "translate"(): boolean
}

export namespace $Matrixc {
const kAffine_Mask: integer
const kIdentity_Mask: integer
const kPerspective_Mask: integer
const kScale_Mask: integer
const kTranslate_Mask: integer
}
export abstract class $Matrixc$$Static implements $Matrixc {
static readonly "kAffine_Mask": integer
static readonly "kIdentity_Mask": integer
static readonly "kPerspective_Mask": integer
static readonly "kScale_Mask": integer
static readonly "kTranslate_Mask": integer

}
}

declare module "icyllis.arc3d.sketch.effects.ColorFilter" {
import { $ColorSpace$$Type } from "icyllis.arc3d.core.ColorSpace"

export interface $ColorFilter {
"andThen"(after: $ColorFilter$$Type): $ColorFilter
"compose"(before: $ColorFilter$$Type): $ColorFilter
"filterColor"(col: integer): integer
"filterColor4f"(float0s: float[], float1s: float[], colorSpace2: $ColorSpace$$Type): void
"isAlphaUnchanged"(): boolean
get "alphaUnchanged"(): boolean
}

export namespace $ColorFilter {
const probejs$$marker: never
}
export abstract class $ColorFilter$$Static implements $ColorFilter {
}
}

declare module "icyllis.arc3d.sketch.PathConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PathConsumer {
"close"(): void
"cubicTo"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
"cubicTo"(pts: float[], off: integer): void
"done"(): void
"lineTo"(float0: float, float1: float): void
"moveTo"(float0: float, float1: float): void
"quadTo"(pts: float[], off: integer): void
"quadTo"(float0: float, float1: float, float2: float, float3: float): void
}

export namespace $PathConsumer {
const probejs$$marker: never
}
export abstract class $PathConsumer$$Static implements $PathConsumer {
}
}

declare module "icyllis.arc3d.sketch.shaders.Shader" {
import { $RefCounted } from "icyllis.arc3d.core.RefCounted"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"

export interface $Shader extends $RefCounted {
"asGradient"(): integer
"isConstant"(): boolean
"isOpaque"(): boolean
"isTriviallyCounted"(): boolean
"makeWithLocalMatrix"(localMatrix: $Matrixc$$Type, mode: integer): $Shader
"ref"(): void
"unref"(): void
get "constant"(): boolean
get "opaque"(): boolean
get "triviallyCounted"(): boolean
}

export namespace $Shader {
const GRADIENT_TYPE_ANGULAR: integer
const GRADIENT_TYPE_LINEAR: integer
const GRADIENT_TYPE_NONE: integer
const GRADIENT_TYPE_RADIAL: integer
const LAST_TILE_MODE: integer
const LOCAL_MATRIX_AFTER: integer
const LOCAL_MATRIX_BEFORE: integer
const LOCAL_MATRIX_REPLACE: integer
const TILE_MODE_CLAMP: integer
const TILE_MODE_DECAL: integer
const TILE_MODE_MIRROR: integer
const TILE_MODE_REPEAT: integer
}
export abstract class $Shader$$Static implements $Shader {
static readonly "GRADIENT_TYPE_ANGULAR": integer
static readonly "GRADIENT_TYPE_LINEAR": integer
static readonly "GRADIENT_TYPE_NONE": integer
static readonly "GRADIENT_TYPE_RADIAL": integer
static readonly "LAST_TILE_MODE": integer
static readonly "LOCAL_MATRIX_AFTER": integer
static readonly "LOCAL_MATRIX_BEFORE": integer
static readonly "LOCAL_MATRIX_REPLACE": integer
static readonly "TILE_MODE_CLAMP": integer
static readonly "TILE_MODE_DECAL": integer
static readonly "TILE_MODE_MIRROR": integer
static readonly "TILE_MODE_REPEAT": integer

}
}

declare module "icyllis.arc3d.sketch.BlendMode" {
import { $Blender } from "icyllis.arc3d.sketch.Blender"
import { $Enum } from "java.lang.Enum"

export class $BlendMode extends $Enum<$BlendMode> implements $Blender {
static readonly "ADD": $BlendMode
static readonly "CLEAR": $BlendMode
static readonly "COLOR": $BlendMode
static readonly "COLOR_BURN": $BlendMode
static readonly "COLOR_DODGE": $BlendMode
static readonly "COUNT": integer
static readonly "DARKEN": $BlendMode
static readonly "DARKER_COLOR": $BlendMode
static readonly "DIFFERENCE": $BlendMode
static readonly "DIVIDE": $BlendMode
static readonly "DST": $BlendMode
static readonly "DST_ATOP": $BlendMode
static readonly "DST_IN": $BlendMode
static readonly "DST_OUT": $BlendMode
static readonly "DST_OVER": $BlendMode
static readonly "EXCLUSION": $BlendMode
static readonly "HARD_LIGHT": $BlendMode
static readonly "HARD_MIX": $BlendMode
static readonly "HUE": $BlendMode
static readonly "LIGHTEN": $BlendMode
static readonly "LIGHTER_COLOR": $BlendMode
static readonly "LINEAR_BURN": $BlendMode
static readonly "LINEAR_DODGE": $BlendMode
static readonly "LINEAR_LIGHT": $BlendMode
static readonly "LUMINOSITY": $BlendMode
static readonly "MINUS": $BlendMode
static readonly "MINUS_CLAMPED": $BlendMode
static readonly "MODULATE": $BlendMode
static readonly "MULTIPLY": $BlendMode
static readonly "OVERLAY": $BlendMode
static readonly "PIN_LIGHT": $BlendMode
static readonly "PLUS": $BlendMode
static readonly "PLUS_CLAMPED": $BlendMode
static readonly "SATURATION": $BlendMode
static readonly "SCREEN": $BlendMode
static readonly "SOFT_LIGHT": $BlendMode
static readonly "SRC": $BlendMode
static readonly "SRC_ATOP": $BlendMode
static readonly "SRC_IN": $BlendMode
static readonly "SRC_OUT": $BlendMode
static readonly "SRC_OVER": $BlendMode
static readonly "SUBTRACT": $BlendMode
static readonly "VIVID_LIGHT": $BlendMode
static readonly "XOR": $BlendMode

public "apply"(src: float[], dst: float[], out: float[]): void
public "asBlendMode"(): $BlendMode
public "blend"(src: integer, dst: integer): integer
public static "blend_color"(src: float[], dst: float[], out: float[]): void
public static "blend_color_burn"(src: float[], dst: float[], out: float[]): void
public static "blend_color_dodge"(src: float[], dst: float[], out: float[]): void
public static "blend_darken"(src: float[], dst: float[], out: float[]): void
public static "blend_darker_color"(src: float[], dst: float[], out: float[]): void
public static "blend_difference"(src: float[], dst: float[], out: float[]): void
public static "blend_divide"(src: float[], dst: float[], out: float[]): void
public static "blend_dst_atop"(src: float[], dst: float[], out: float[]): void
public static "blend_dst_in"(src: float[], dst: float[], out: float[]): void
public static "blend_dst_out"(src: float[], dst: float[], out: float[]): void
public static "blend_dst_over"(src: float[], dst: float[], out: float[]): void
public static "blend_exclusion"(src: float[], dst: float[], out: float[]): void
public static "blend_hard_light"(src: float[], dst: float[], out: float[]): void
public static "blend_hard_mix"(src: float[], dst: float[], out: float[]): void
public static "blend_hue"(src: float[], dst: float[], out: float[]): void
public static "blend_lighten"(src: float[], dst: float[], out: float[]): void
public static "blend_lighter_color"(src: float[], dst: float[], out: float[]): void
public static "blend_linear_burn"(src: float[], dst: float[], out: float[]): void
public static "blend_linear_dodge"(src: float[], dst: float[], out: float[]): void
public static "blend_linear_light"(src: float[], dst: float[], out: float[]): void
public static "blend_luminosity"(src: float[], dst: float[], out: float[]): void
public static "blend_minus"(src: float[], dst: float[], out: float[]): void
public static "blend_minus_clamped"(src: float[], dst: float[], out: float[]): void
public static "blend_modulate"(src: float[], dst: float[], out: float[]): void
public static "blend_multiply"(src: float[], dst: float[], out: float[]): void
public static "blend_overlay"(src: float[], dst: float[], out: float[]): void
public static "blend_pin_light"(src: float[], dst: float[], out: float[]): void
public static "blend_plus"(src: float[], dst: float[], out: float[]): void
public static "blend_plus_clamped"(src: float[], dst: float[], out: float[]): void
public static "blend_saturation"(src: float[], dst: float[], out: float[]): void
public static "blend_screen"(src: float[], dst: float[], out: float[]): void
public static "blend_soft_light"(src: float[], dst: float[], out: float[]): void
public static "blend_src_atop"(src: float[], dst: float[], out: float[]): void
public static "blend_src_in"(src: float[], dst: float[], out: float[]): void
public static "blend_src_out"(src: float[], dst: float[], out: float[]): void
public static "blend_src_over"(src: float[], dst: float[], out: float[]): void
public static "blend_subtract"(src: float[], dst: float[], out: float[]): void
public static "blend_vivid_light"(src: float[], dst: float[], out: float[]): void
public static "blend_xor"(src: float[], dst: float[], out: float[]): void
public "getBlendFuncName"(): string
public "getPrettyName"(): string
public "isAdvanced"(): boolean
public static "modeAt"(index: integer): $BlendMode
public static "valueOf"(name: string): $BlendMode
public static "values"(): $BlendMode[]
get "blendFuncName"(): string
get "prettyName"(): string
get "advanced"(): boolean
}
}

declare module "icyllis.arc3d.sketch.Blender" {
import { $BlendMode } from "icyllis.arc3d.sketch.BlendMode"

export interface $Blender {
"asBlendMode"(): $BlendMode
}

export namespace $Blender {
const probejs$$marker: never
}
export abstract class $Blender$$Static implements $Blender {
}
}

declare module "icyllis.arc3d.sketch.RRect" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $RRect {
static readonly "kAlignOf": integer
static readonly "kComplex_Type": integer
static readonly "kEmpty_Type": integer
static readonly "kLast_Type": integer
static readonly "kLowerLeftX": integer
static readonly "kLowerLeftY": integer
static readonly "kLowerRightX": integer
static readonly "kLowerRightY": integer
static readonly "kNineSlice_Type": integer
static readonly "kOval_Type": integer
static readonly "kRect_Type": integer
static readonly "kSimple_Type": integer
static readonly "kSizeOf": integer
static readonly "kUpperLeftX": integer
static readonly "kUpperLeftY": integer
static readonly "kUpperRightX": integer
static readonly "kUpperRightY": integer

constructor(other: $Rect2fc$$Type)
constructor(other: $RRect$$Type)
constructor()

public static "allCornersAreCircular"(rr: $RRect$$Type): boolean
public "bottom"(): float
public "centerX"(): float
public "centerY"(): float
public "getBounds"(dest: $Rect2f$$Type): void
public "getRadii"(): float[]
public "getRadius"(i: integer): float
public "getRect"(dest: $Rect2f$$Type): void
public "getSimpleRadiusX"(): float
public "getSimpleRadiusY"(): float
public "getType"(): integer
public "halfHeight"(): float
public "halfWidth"(): float
public "height"(): float
public "isComplex"(): boolean
public "isEmpty"(): boolean
public "isNineSlice"(): boolean
public "isOval"(): boolean
public "isRect"(): boolean
public "isSimple"(): boolean
public "isValid"(): boolean
public "left"(): float
public "right"(): float
public "set"(p: long): void
public "set"(src: $RRect$$Type): void
public "setEllipse"(cx: float, cy: float, radiusX: float, radiusY: float): void
public "setEmpty"(): void
public "setNineSlice"(rect: $Rect2fc$$Type, leftRad: float, topRad: float, rightRad: float, bottomRad: float): void
public "setNineSlice"(left: float, top: float, right: float, bottom: float, leftRad: float, topRad: float, rightRad: float, bottomRad: float): void
public "setOval"(left: float, top: float, right: float, bottom: float): void
public "setOval"(oval: $Rect2fc$$Type): void
public "setRect"(left: float, top: float, right: float, bottom: float): void
public "setRect"(rect: $Rect2fc$$Type): void
public "setRectRadii"(left: float, top: float, right: float, bottom: float, radii: float[]): void
public "setRectRadii"(rect: $Rect2fc$$Type, radii: float[]): void
public "setRectXY"(left: float, top: float, right: float, bottom: float, radiusX: float, radiusY: float): void
public "setRectXY"(rect: $Rect2fc$$Type, radiusX: float, radiusY: float): void
public "store"(p: long): void
public "top"(): float
public "width"(): float
public "x"(): float
public "y"(): float
get "radii"(): float[]
get "simpleRadiusX"(): float
get "simpleRadiusY"(): float
get "type"(): integer
get "complex"(): boolean
get "empty"(): boolean
get "nineSlice"(): boolean
get "oval"(): boolean
get "rect"(): boolean
get "simple"(): boolean
get "valid"(): boolean
set "oval"(value: $Rect2fc$$Type)
set "rect"(value: $Rect2fc$$Type)
}
}

declare module "icyllis.arc3d.sketch.Surface" {
import { $Canvas } from "icyllis.arc3d.sketch.Canvas"
import { $ImageInfo, $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $Context } from "icyllis.arc3d.engine.Context"
import { $Image } from "icyllis.arc3d.sketch.Image"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $BackendImage$$Type } from "icyllis.arc3d.engine.BackendImage"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"

export class $Surface extends $RefCnt {
public "getCachedCanvas"(): $Canvas
public "getCachedImage"(): $Image
public "getCanvas"(): $Canvas
public "getCommandContext"(): $Context
public "getGenerationID"(): any
public "getHeight"(): integer
public "getImageInfo"(): $ImageInfo
public "getWidth"(): integer
public "hasCachedImage"(): boolean
public static "makeFromBackendTexture"(context: $RecordingContext$$Type, backendImage: $BackendImage$$Type, origin: integer, sampleCount: integer, colorType: integer, releaseCallback: $Runnable$$Type): $Surface
public "makeImageSnapshot"(subset: $Rect2ic$$Type): $Image
public "makeImageSnapshot"(): $Image
public static "makeRenderTarget"(context: $RecordingContext$$Type, imageInfo: $ImageInfo$$Type, origin: integer, sampleCount: integer, mipmapped: boolean, budgeted: boolean): $Surface
public "notifyWillChange"(): void
get "cachedCanvas"(): $Canvas
get "cachedImage"(): $Image
get "canvas"(): $Canvas
get "commandContext"(): $Context
get "generationID"(): any
get "height"(): integer
get "imageInfo"(): $ImageInfo
get "width"(): integer
}
}

declare module "icyllis.arc3d.sketch.Matrix" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Matrix4c$$Type } from "icyllis.arc3d.core.Matrix4c"
import { $Cloneable } from "java.lang.Cloneable"
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Matrix4, $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Matrixc, $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"
import { $ByteBuffer$$Type } from "java.nio.ByteBuffer"

export class $Matrix implements $Matrixc, $Cloneable {
constructor(m: $Matrix4c$$Type)
constructor(m: $Matrix4$$Type)
constructor(scaleX: float, shearY: float, persp0: float, shearX: float, scaleY: float, persp1: float, transX: float, transY: float, persp2: float)
constructor(m: $Matrixc$$Type)
constructor()

public "determinant"(): float
public "differentialAreaScale"(px: float, py: float): float
public static "equals"(a: $Matrixc$$Type, b: $Matrixc$$Type): boolean
public "getMaxScale"(): float
public "getMaxScale"(px: float, py: float): float
public "getMinScale"(px: float, py: float): float
public "getMinScale"(): float
public "getPerspX"(): float
public "getPerspY"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getShearX"(): float
public "getShearY"(): float
public "getTranslateX"(): float
public "getTranslateY"(): float
public "getType"(): integer
public "hasPerspective"(): boolean
public static "identity"(): $Matrixc
public "invert"(dest: $Matrix$$Type): boolean
public "invert"(): boolean
public "isApproxEqual"(m: $Matrix$$Type): boolean
public "isAxisAligned"(): boolean
public "isFinite"(): boolean
public "isIdentity"(): boolean
public "isScaleTranslate"(): boolean
public "isSimilarity"(): boolean
public "isTranslate"(): boolean
public "localAARadius"(bounds: $Rect2fc$$Type): float
public "localAARadius"(left: float, top: float, right: float, bottom: float): float
public "m11"(scaleX: float): void
public "m11"(): float
public "m12"(): float
public "m12"(shearY: float): void
public "m14"(persp0: float): void
public "m14"(): float
public "m21"(shearX: float): void
public "m21"(): float
public "m22"(): float
public "m22"(scaleY: float): void
public "m24"(): float
public "m24"(persp1: float): void
public "m41"(): float
public "m41"(transX: float): void
public "m42"(transY: float): void
public "m42"(): float
public "m44"(persp2: float): void
public "m44"(): float
public static "makeScale"(sx: float, sy: float): $Matrix
public static "makeTranslate"(dx: float, dy: float): $Matrix
public "mapPoint"(p: float[]): void
public "mapPoints"(src: float[], srcPos: integer, dst: float[], dstPos: integer, count: integer): void
public "mapPoints"(pts: float[], pos: integer, count: integer): void
public "mapPoints"(pts: float[], count: integer): void
public "mapPoints"(src: float[], dst: float[], count: integer): void
public "mapPoints"(pts: float[]): void
public "mapRect"(src: $Rect2fc$$Type, dst: $Rect2f$$Type): boolean
public "mapRect"(left: float, top: float, right: float, bottom: float, dst: $Rect2i$$Type): void
public "mapRect"(r: $Rect2i$$Type): void
public "mapRect"(r: $Rect2fc$$Type, out: $Rect2i$$Type): void
public "mapRect"(r: $Rect2ic$$Type, out: $Rect2i$$Type): void
public "mapRect"(rect: $Rect2f$$Type): boolean
public "mapRectOut"(left: float, top: float, right: float, bottom: float, dst: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2fc$$Type, dst: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2ic$$Type, dst: $Rect2i$$Type): void
public "normalizePerspective"(): void
public "postConcat"(rhs: $Matrixc$$Type): void
public "postRotate"(angle: float): void
public "postScale"(sx: float, sy: float): void
public "postShear"(sx: float, sy: float): void
public "postTranslate"(dx: float, dy: float): void
public "preConcat"(lhs: $Matrixc$$Type): void
public "preRotate"(angle: float): void
public "preScale"(sx: float, sy: float): void
public "preShear"(sx: float, sy: float): void
public "preTranslate"(dx: float, dy: float): void
public "preservesRightAngles"(): boolean
public "set"(m: $Matrixc$$Type): void
public "set"(a: $ByteBuffer$$Type): void
public "set"(p: long): void
public "set"(scaleX: float, shearY: float, persp0: float, shearX: float, scaleY: float, persp1: float, transX: float, transY: float, persp2: float): void
public "set"(m: $Matrix4$$Type): void
public "set"(m: $Matrix4c$$Type): void
public "set"(a: float[]): void
public "set"(a: float[], offset: integer): void
public "set"(a: $FloatBuffer$$Type): void
public "setIdentity"(): void
public "setPerspX"(perspX: float): void
public "setPerspY"(perspY: float): void
public "setRectToRect"(src: $Rect2fc$$Type, dst: $Rect2fc$$Type): void
public "setRotate"(angle: float, px: float, py: float): void
public "setRotate"(angle: float): void
public "setScale"(sx: float, sy: float): void
public "setScale"(sx: float, sy: float, px: float, py: float): void
public "setScaleTranslate"(sx: float, sy: float, tx: float, ty: float): void
public "setScaleX"(scaleX: float): void
public "setScaleY"(scaleY: float): void
public "setShear"(sx: float, sy: float): void
public "setShear"(sx: float, sy: float, px: float, py: float): void
public "setShearX"(shearX: float): void
public "setShearY"(shearY: float): void
public "setSinCos"(sin: float, cos: float): void
public "setSinCos"(sin: float, cos: float, px: float, py: float): void
public "setTranslate"(dx: float, dy: float): void
public "setTranslateX"(transX: float): void
public "setTranslateY"(transY: float): void
public "store"(dst: $Matrix$$Type): void
public "store"(a: float[]): void
public "store"(a: $ByteBuffer$$Type): void
public "store"(a: float[], offset: integer): void
public "store"(p: long): void
public "store"(a: $FloatBuffer$$Type): void
public "storeAligned"(a: $FloatBuffer$$Type): void
public "storeAligned"(p: long): void
public "storeAligned"(a: $ByteBuffer$$Type): void
public "toMatrix4"(): $Matrix4
public "toMatrix4"(dest: $Matrix4$$Type): void
public "trace"(): float
get "maxScale"(): float
get "minScale"(): float
get "perspX"(): float
get "perspY"(): float
get "scaleX"(): float
get "scaleY"(): float
get "shearX"(): float
get "shearY"(): float
get "translateX"(): float
get "translateY"(): float
get "type"(): integer
get "axisAligned"(): boolean
get "finite"(): boolean
get "scaleTranslate"(): boolean
get "similarity"(): boolean
get "translate"(): boolean
set "perspX"(value: float)
set "perspY"(value: float)
set "rotate"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "shearX"(value: float)
set "shearY"(value: float)
set "translateX"(value: float)
set "translateY"(value: float)
}
}

declare module "icyllis.arc3d.sketch.Shape" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $PathConsumer$$Type } from "icyllis.arc3d.sketch.PathConsumer"
import { $PathIterator } from "java.awt.geom.PathIterator"

export interface $Shape {
"forEach"(action: $PathConsumer$$Type): void
"getBounds"(rect2f0: $Rect2f$$Type): void
"getPathIterator"(): $PathIterator
"getWindingRule"(): integer
get "pathIterator"(): $PathIterator
get "windingRule"(): integer
}

export namespace $Shape {
const probejs$$marker: never
}
export abstract class $Shape$$Static implements $Shape {
}
}

declare module "icyllis.arc3d.sketch.TextBlob" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $Font, $Font$$Type } from "icyllis.arc3d.sketch.Font"
import { $Rect2fc, $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $TextBlob {
public "getBounds"(bounds: $Rect2f$$Type): void
public "getBounds"(): $Rect2fc
public "getCounts"(): integer[]
public "getFonts"(): $Font[]
public "getGlyphs"(): integer[]
public "getPositions"(): float[]
public "getRunCount"(): integer
public static "make"(glyphs: integer[], glyphOffset: integer, positions: float[], positionOffset: integer, glyphCount: integer, font: $Font$$Type, bounds: $Rect2fc$$Type): $TextBlob
public static "makeNoCopy"(glyphs: integer[], positions: float[], font: $Font$$Type, bounds: $Rect2fc$$Type): $TextBlob
get "bounds"(): $Rect2fc
get "counts"(): integer[]
get "fonts"(): $Font[]
get "glyphs"(): integer[]
get "positions"(): float[]
get "runCount"(): integer
}
}

declare module "icyllis.arc3d.sketch.Typeface" {
import { $StrikeDesc$$Type } from "icyllis.arc3d.sketch.StrikeDesc"
import { $ScalerContext } from "icyllis.arc3d.sketch.ScalerContext"

export class $Typeface {
constructor()

public "createScalerContext"(desc: $StrikeDesc$$Type): $ScalerContext
}
}

declare module "icyllis.arc3d.sketch.Device" {
import { $ImageInfo, $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $Blender$$Type } from "icyllis.arc3d.sketch.Blender"
import { $GlyphRunList$$Type } from "icyllis.arc3d.sketch.GlyphRunList"
import { $Matrixc } from "icyllis.arc3d.sketch.Matrixc"
import { $Canvas$$Type } from "icyllis.arc3d.sketch.Canvas"
import { $Matrix4c, $Matrix4c$$Type } from "icyllis.arc3d.core.Matrix4c"
import { $Context } from "icyllis.arc3d.engine.Context"
import { $RRect$$Type } from "icyllis.arc3d.sketch.RRect"
import { $Image$$Type } from "icyllis.arc3d.sketch.Image"
import { $SamplingOptions$$Type } from "icyllis.arc3d.core.SamplingOptions"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Rect2ic } from "icyllis.arc3d.core.Rect2ic"
import { $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Vertices$$Type } from "icyllis.arc3d.sketch.Vertices"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $Device extends $RefCnt {
constructor(info: $ImageInfo$$Type)

public "clipRect"(rect2fc0: $Rect2fc$$Type, int1: integer, boolean2: boolean): void
public "drawArc"(float0: float, float1: float, float2: float, float3: float, float4: float, int5: integer, float6: float, paint7: $Paint$$Type): void
public "drawBlurredRRect"(rr: $RRect$$Type, paint: $Paint$$Type, blurRadius: float, noiseAlpha: float): boolean
public "drawChord"(float0: float, float1: float, float2: float, float3: float, float4: float, paint5: $Paint$$Type): void
public "drawEdgeAAQuad"(r: $Rect2fc$$Type, clip: float[], flags: integer, paint: $Paint$$Type): void
public "drawEllipse"(float0: float, float1: float, float2: float, float3: float, paint4: $Paint$$Type): void
public "drawGlyphRunList"(canvas: $Canvas$$Type, glyphRunList: $GlyphRunList$$Type, paint: $Paint$$Type): void
public "drawImageRect"(image0: $Image$$Type, rect2fc1: $Rect2fc$$Type, rect2fc2: $Rect2fc$$Type, samplingOptions3: $SamplingOptions$$Type, paint4: $Paint$$Type, int5: integer): void
public "drawLine"(float0: float, float1: float, float2: float, float3: float, int4: integer, float5: float, paint6: $Paint$$Type): void
public "drawPaint"(paint0: $Paint$$Type): void
public "drawPie"(float0: float, float1: float, float2: float, float3: float, float4: float, paint5: $Paint$$Type): void
public "drawPoints"(int0: integer, float1s: float[], int2: integer, int3: integer, paint4: $Paint$$Type): void
public "drawRRect"(rRect0: $RRect$$Type, paint1: $Paint$$Type): void
public "drawRect"(rect2fc0: $Rect2fc$$Type, paint1: $Paint$$Type): void
public "drawVertices"(vertices0: $Vertices$$Type, blender1: $Blender$$Type, paint2: $Paint$$Type): void
public "getBounds"(bounds: $Rect2i$$Type): void
public "getBounds"(): $Rect2ic
public "getClipBounds"(rect2i0: $Rect2i$$Type): void
public "getCommandContext"(): $Context
public "getDeviceToGlobal"(): $Matrix4c
public "getGlobalBounds"(bounds: $Rect2i$$Type): void
public "getGlobalToDevice"(): $Matrix4c
public "getHeight"(): integer
public "getImageInfo"(): $ImageInfo
public "getLocalToDevice"(): $Matrix4c
public "getLocalToDevice33"(): $Matrixc
public "getRelativeTransform"(device: $Device$$Type, dest: $Matrix4$$Type): void
public "getWidth"(): integer
public "isClipAA"(): boolean
public "isClipEmpty"(): boolean
public "isClipRect"(): boolean
public "isClipWideOpen"(): boolean
public "isPixelAlignedToGlobal"(): boolean
public "popClipStack"(): void
public "pushClipStack"(): void
public "setGlobalCTM"(ctm: $Matrix4c$$Type): void
public "setLocalToDevice"(localToDevice: $Matrix4c$$Type): void
get "bounds"(): $Rect2ic
get "commandContext"(): $Context
get "deviceToGlobal"(): $Matrix4c
get "globalToDevice"(): $Matrix4c
get "height"(): integer
get "imageInfo"(): $ImageInfo
get "localToDevice"(): $Matrix4c
get "localToDevice33"(): $Matrixc
get "width"(): integer
get "clipAA"(): boolean
get "clipEmpty"(): boolean
get "clipWideOpen"(): boolean
get "pixelAlignedToGlobal"(): boolean
set "globalCTM"(value: $Matrix4c$$Type)
set "localToDevice"(value: $Matrix4c$$Type)
}
}

