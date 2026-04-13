declare module "icyllis.arc3d.granite.AtlasProvider" {
import { $SurfaceDrawContext$$Type } from "icyllis.arc3d.granite.SurfaceDrawContext"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $GlyphAtlasManager } from "icyllis.arc3d.granite.GlyphAtlasManager"

export class $AtlasProvider implements $AutoCloseable {
constructor(rc: $RecordingContext$$Type)

public "close"(): void
public "compact"(): void
public "freeGpuResources"(): void
public "getGlyphAtlasManager"(): $GlyphAtlasManager
public "invalidateAtlases"(): void
public "purge"(): void
public "recordUploads"(sdc: $SurfaceDrawContext$$Type): void
get "glyphAtlasManager"(): $GlyphAtlasManager
}
}

declare module "icyllis.arc3d.granite.task.Task" {
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"
import { $CommandBuffer$$Type } from "icyllis.arc3d.engine.CommandBuffer"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Task as $Task$0 } from "icyllis.arc3d.engine.Task"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"

export class $Task extends $RefCnt implements $Task$0 {
constructor()

public "execute"(immediateContext0: $ImmediateContext$$Type, commandBuffer1: $CommandBuffer$$Type): integer
public "prepare"(recordingContext0: $RecordingContext$$Type): integer
}
}

declare module "icyllis.arc3d.granite.task.ImageUploadTask$UploadCondition" {
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"

export interface $ImageUploadTask$UploadCondition {
"needsUpload"(immediateContext0: $ImmediateContext$$Type): boolean
"onUploadSubmitted"(): boolean
}

export namespace $ImageUploadTask$UploadCondition {
const DISCARD: boolean
const PRESERVE: boolean
}
export abstract class $ImageUploadTask$UploadCondition$$Static implements $ImageUploadTask$UploadCondition {
static readonly "DISCARD": boolean
static readonly "PRESERVE": boolean

}
}

declare module "icyllis.arc3d.granite.shading.VaryingHandler" {
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $ShaderCaps$$Type } from "icyllis.arc3d.engine.ShaderCaps"

export class $VaryingHandler {
static readonly "kCanBeFlat_Interpolation": integer
static readonly "kRequiredToBeFlat_Interpolation": integer
static readonly "kSmooth_Interpolation": integer

constructor(shaderCaps: $ShaderCaps$$Type)

public "addVarying"(name: string, type: byte): void
public "addVarying"(name: string, type: byte, interpolation: integer): void
public "finish"(): void
public "getFragDecls"(inputDecls: $StringBuilder$$Type): void
public "getVertDecls"(outputDecls: $StringBuilder$$Type): void
public "setNoPerspective"(): void
}
}

declare module "icyllis.arc3d.granite.task.TaskList" {
import { $Task, $Task$$Type } from "icyllis.arc3d.granite.task.Task"
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $CommandBuffer$$Type } from "icyllis.arc3d.engine.CommandBuffer"
import { $ObjectList, $ObjectList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectList"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $TaskList extends $ObjectArrayList<$Task> implements $Consumer<$Task>, $AutoCloseable {
constructor()

public "accept"(task: $Task$$Type): void
public "addAll"(objectList0: $ObjectList$$Type<$Task$$Type>): boolean
public "addFirst"(task0: $Task$$Type): void
public "addLast"(task0: $Task$$Type): void
public "andThen"(consumer0: $Consumer$$Type<$Task$$Type>): $Consumer<$Task>
public "appendTask"(task: $Task$$Type): void
public "appendTasks"(tasks: $ObjectList$$Type<$Task$$Type>): void
public "close"(): void
public "containsAll"(collection0: $Collection$$Type<any>): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "execute"(context: $ImmediateContext$$Type, commandBuffer: $CommandBuffer$$Type): integer
public "getFirst"(): $Task
public "getLast"(): $Task
public static "of"<K>(k0: K, k1: K, k2: K): $ObjectList<K>
public static "of"<K>(k0: K, k1: K): $ObjectList<K>
public static "of"<K>(k0: K): $ObjectList<K>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public "parallelStream"(): $Stream<$Task>
public "prepare"(context: $RecordingContext$$Type): integer
public "prependTask"(task: $Task$$Type): void
public "removeFirst"(): $Task
public "removeIf"(predicate0: $Predicate$$Type<$Task$$Type>): boolean
public "removeLast"(): $Task
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<$Task$$Type>): void
public "reset"(): void
public "retainAll"(collection0: $Collection$$Type<any>): boolean
public "setElements"(int0: integer, task1s: $Task$$Type[]): void
public "setElements"(task0s: $Task$$Type[]): void
public "stream"(): $Stream<$Task>
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
get "first"(): $Task
get "last"(): $Task
set "elements"(value: $Task$$Type[])
}
}

declare module "icyllis.arc3d.granite.GeometryStep$ProgramImpl" {
import { $FPFragmentBuilder$$Type } from "icyllis.arc3d.granite.shading.FPFragmentBuilder"
import { $VertexGeomBuilder$$Type } from "icyllis.arc3d.granite.shading.VertexGeomBuilder"
import { $VaryingHandler$$Type } from "icyllis.arc3d.granite.shading.VaryingHandler"
import { $UniformHandler$$Type } from "icyllis.arc3d.granite.shading.UniformHandler"
import { $ShaderCaps$$Type } from "icyllis.arc3d.engine.ShaderCaps"
import { $GeometryStep$$Type } from "icyllis.arc3d.granite.GeometryStep"
import { $UniformDataManager$$Type } from "icyllis.arc3d.engine.UniformDataManager"

export class $GeometryStep$ProgramImpl {
constructor()

public "emitCode"(vertBuilder: $VertexGeomBuilder$$Type, fragBuilder: $FPFragmentBuilder$$Type, varyingHandler: $VaryingHandler$$Type, uniformHandler: $UniformHandler$$Type, shaderCaps: $ShaderCaps$$Type, geomProc: $GeometryStep$$Type, outputColor: string, outputCoverage: string, texSamplers: integer[]): void
public "setData"(uniformDataManager0: $UniformDataManager$$Type, geometryStep1: $GeometryStep$$Type): void
}
}

declare module "icyllis.arc3d.granite.FragmentStage" {
import { $List, $List$$Type } from "java.util.List"
import { $FragmentStage$Sampler, $FragmentStage$Sampler$$Type } from "icyllis.arc3d.granite.FragmentStage$Sampler"
import { $FragmentStage$GenerateExpression, $FragmentStage$GenerateExpression$$Type } from "icyllis.arc3d.granite.FragmentStage$GenerateExpression"
import { $FragmentStage$Uniform, $FragmentStage$Uniform$$Type } from "icyllis.arc3d.granite.FragmentStage$Uniform"
import { $UniformHandler$$Type } from "icyllis.arc3d.granite.shading.UniformHandler"

export class $FragmentStage {
static readonly "NO_FUNCTIONS": $List<string>
static readonly "NO_SAMPLERS": $List<$FragmentStage$Sampler>
static readonly "NO_UNIFORMS": $List<$FragmentStage$Uniform>
static readonly "kAlphaOnlyPaintColor_BuiltinStageID": integer
static readonly "kAnalyticRRectShader_BuiltinStageID": integer
static readonly "kAngularGradientShader4_BuiltinStageID": integer
static readonly "kAngularGradientShader8_BuiltinStageID": integer
static readonly "kBlendModeBlender_BuiltinStageID": integer
static readonly "kBlend_BuiltinStageID": integer
static readonly "kBlenderDstColor_ReqFlag": integer
static readonly "kBuiltinStageIDCount": integer
static readonly "kColorSpaceXformColorFilter_BuiltinStageID": integer
static readonly "kCompose_BuiltinStageID": integer
static readonly "kCubicImageShader_BuiltinStageID": integer
static readonly "kDitherShader_BuiltinStageID": integer
static readonly "kError_BuiltinStageID": integer
static readonly "kFirstFixedBlend_BuiltinStageID": integer
static readonly "kHWImageShader_BuiltinStageID": integer
static readonly "kImageShader_BuiltinStageID": integer
static readonly "kLastFixedBlend_BuiltinStageID": integer
static readonly "kLast_BuiltinStageID": integer
static readonly "kLinearGradientShader4_BuiltinStageID": integer
static readonly "kLinearGradientShader8_BuiltinStageID": integer
static readonly "kLocalCoords_ReqFlag": integer
static readonly "kLocalMatrixShader_BuiltinStageID": integer
static readonly "kNone_ReqFlag": integer
static readonly "kPassthrough_BuiltinStageID": integer
static readonly "kPorterDuffBlender_BuiltinStageID": integer
static readonly "kPrimitiveColor_BuiltinStageID": integer
static readonly "kPrimitiveColor_ReqFlag": integer
static readonly "kPriorStageOutput_ReqFlag": integer
static readonly "kRGBOpaquePaintColor_BuiltinStageID": integer
static readonly "kRadialGradientShader4_BuiltinStageID": integer
static readonly "kRadialGradientShader8_BuiltinStageID": integer
static readonly "kSolidColorShader_BuiltinStageID": integer
readonly "mExpressionGenerator": $FragmentStage$GenerateExpression
readonly "mName": string
readonly "mNumChildren": integer
readonly "mRequiredFunctions": $List<string>
readonly "mRequirementFlags": integer
readonly "mSamplers": $List<$FragmentStage$Sampler>
readonly "mStaticFunctionName": string
readonly "mUniforms": $List<$FragmentStage$Uniform>

constructor(name: string, requirementFlags: integer, staticFunctionName: string, requiredFunctions: $List$$Type<string>, uniforms: $List$$Type<$FragmentStage$Uniform$$Type>, samplers: $List$$Type<$FragmentStage$Sampler$$Type>, expressionGenerator: $FragmentStage$GenerateExpression$$Type, numChildren: integer)

public "generateUniforms"(uniformHandler: $UniformHandler$$Type, stageIndex: integer): void
public "name"(): string
}
}

declare module "icyllis.arc3d.granite.MeshDrawWriter" {
import { $DrawCommandList$$Type } from "icyllis.arc3d.granite.DrawCommandList"
import { $BufferViewInfo$$Type } from "icyllis.arc3d.engine.BufferViewInfo"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $DrawBufferManager$$Type } from "icyllis.arc3d.granite.DrawBufferManager"

export class $MeshDrawWriter implements $AutoCloseable {
constructor(drawBufferManager: $DrawBufferManager$$Type, commandList: $DrawCommandList$$Type)

public "append"(count: integer): long
public "beginInstances"(vertexBufferInfo: $BufferViewInfo$$Type, indexBufferInfo: $BufferViewInfo$$Type, vertexCount: integer): void
public "beginVertices"(): void
public "close"(): void
public "endAppender"(): void
public "flush"(): void
public "newDynamicState"(): void
public "newPipelineState"(vertexBinding: integer, instanceBinding: integer, vertexStride: integer, instanceStride: integer): void
public "reserve"(count: integer): void
}
}

declare module "icyllis.arc3d.granite.SubRunContainer" {
import { $Canvas$$Type } from "icyllis.arc3d.sketch.Canvas"
import { $GlyphRunList$$Type } from "icyllis.arc3d.sketch.GlyphRunList"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Matrixc, $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $GraniteDevice$$Type } from "icyllis.arc3d.granite.GraniteDevice"
import { $StrikeCache$$Type } from "icyllis.arc3d.sketch.StrikeCache"

export class $SubRunContainer {
constructor(initialPositionMatrix: $Matrixc$$Type)

public "canReuse"(paint: $Paint$$Type, positionMatrix: $Matrixc$$Type, glyphRunListX: float, glyphRunListY: float): boolean
public "draw"(canvas: $Canvas$$Type, originX: float, originY: float, paint: $Paint$$Type, device: $GraniteDevice$$Type): void
public "getMemorySize"(): long
public "initialPosition"(): $Matrixc
public static "isDirect"(approximateDeviceTextSize: float): boolean
public static "isDirect"(approximateDeviceTextSize: float, paint: $Paint$$Type, matrix: $Matrixc$$Type): boolean
public "isEmpty"(): boolean
public static "make"(glyphRunList: $GlyphRunList$$Type, positionMatrix: $Matrixc$$Type, runPaint: $Paint$$Type, strikeCache: $StrikeCache$$Type): $SubRunContainer
get "memorySize"(): long
get "empty"(): boolean
}
}

declare module "icyllis.arc3d.granite.Draw" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $PaintParams, $PaintParams$$Type } from "icyllis.arc3d.granite.PaintParams"
import { $Rect2ic, $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Matrixc, $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $GeometryRenderer, $GeometryRenderer$$Type } from "icyllis.arc3d.granite.GeometryRenderer"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Rect2fc, $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $Draw implements $AutoCloseable {
readonly "mGeometry": any

constructor(transform: $Matrixc$$Type, geometry: any)

public "close"(): void
public "getBounds"(dest: $Rect2f$$Type): void
public "getDepth"(): integer
public "getDepthAsFloat"(): float
public "getInflationRadius"(): float
public "getMiterLimit"(): float
public "isBevelJoin"(): boolean
public "isClippedOut"(): boolean
public "isMiterJoin"(): boolean
public "isRoundJoin"(): boolean
public "isStroke"(): boolean
get "mAARadius"(): float
set "mAARadius"(value: float)
get "mDrawBounds"(): $Rect2fc
set "mDrawBounds"(value: $Rect2fc$$Type)
get "mDrawOrder"(): long
set "mDrawOrder"(value: long)
get "mHalfWidth"(): float
set "mHalfWidth"(value: float)
get "mInverseFill"(): boolean
set "mInverseFill"(value: boolean)
get "mJoinLimit"(): float
set "mJoinLimit"(value: float)
get "mPaintParams"(): $PaintParams
set "mPaintParams"(value: $PaintParams$$Type)
get "mRenderer"(): $GeometryRenderer
set "mRenderer"(value: $GeometryRenderer$$Type)
get "mScissorRect"(): $Rect2ic
set "mScissorRect"(value: $Rect2ic$$Type)
get "mStrokeAlign"(): byte
set "mStrokeAlign"(value: byte)
get "mStrokeCap"(): byte
set "mStrokeCap"(value: byte)
get "mTransform"(): $Matrixc
set "mTransform"(value: $Matrixc$$Type)
get "mTransformedShapeBounds"(): $Rect2fc
set "mTransformedShapeBounds"(value: $Rect2fc$$Type)
get "depth"(): integer
get "depthAsFloat"(): float
get "inflationRadius"(): float
get "miterLimit"(): float
get "bevelJoin"(): boolean
get "clippedOut"(): boolean
get "miterJoin"(): boolean
get "roundJoin"(): boolean
get "stroke"(): boolean
}
}

declare module "icyllis.arc3d.granite.BakedGlyph" {
import { $DrawAtlas$AtlasLocator } from "icyllis.arc3d.granite.DrawAtlas$AtlasLocator"
import { $Glyph$$Type } from "icyllis.arc3d.sketch.Glyph"

export class $BakedGlyph extends $DrawAtlas$AtlasLocator {
constructor()

public static "chooseMaskFormat"(mask: byte): integer
public static "chooseMaskFormat"(glyph: $Glyph$$Type): integer
}
}

declare module "icyllis.arc3d.granite.ClipStack" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $BoundsManager$$Type } from "icyllis.arc3d.granite.geom.BoundsManager"
import { $ClipStack$ClipGeometry$$Type } from "icyllis.arc3d.granite.ClipStack$ClipGeometry"
import { $List$$Type } from "java.util.List"
import { $Collection } from "java.util.Collection"
import { $Draw$$Type } from "icyllis.arc3d.granite.Draw"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ClipStack$Element, $ClipStack$Element$$Type } from "icyllis.arc3d.granite.ClipStack$Element"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $GraniteDevice$$Type } from "icyllis.arc3d.granite.GraniteDevice"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $ClipStack {
static readonly "CLIP_GEOMETRY_A_ONLY": integer
static readonly "CLIP_GEOMETRY_BOTH": integer
static readonly "CLIP_GEOMETRY_B_ONLY": integer
static readonly "CLIP_GEOMETRY_EMPTY": integer
static readonly "OP_DIFFERENCE": integer
static readonly "OP_INTERSECT": integer
static readonly "STATE_COMPLEX": integer
static readonly "STATE_DEVICE_RECT": integer
static readonly "STATE_EMPTY": integer
static readonly "STATE_WIDE_OPEN": integer

constructor(device: $GraniteDevice$$Type)

public "clipRect"(viewMatrix: $Matrixc$$Type, localRect: $Rect2fc$$Type, clipOp: integer): void
public "currentClipState"(): integer
public "elements"(): $Collection<$ClipStack$Element>
public static "getClipGeometry"(A: $ClipStack$ClipGeometry$$Type, B: $ClipStack$ClipGeometry$$Type): integer
public "getConservativeBounds"(out: $Rect2f$$Type): void
public static "intersects"(A: $ClipStack$ClipGeometry$$Type, B: $ClipStack$ClipGeometry$$Type): boolean
public "maxDeferredClipDraws"(): integer
public "prepareForDraw"<GEO>(draw: $Draw$$Type, geometry: GEO, boundsFn: $BiConsumer$$Type<GEO, $Rect2f$$Type>, outsetBoundsForAA: boolean, elementsForMask: $List$$Type<$ClipStack$Element$$Type>): boolean
public "recordDeferredClipDraws"(): void
public "restore"(): void
public "save"(): void
public "updateForDraw"(draw: $Draw$$Type, elementsForMask: $List$$Type<$ClipStack$Element$$Type>, boundsManager: $BoundsManager$$Type, depth: integer): integer
}
}

declare module "icyllis.arc3d.granite.SurfaceDrawContext" {
import { $Task$$Type } from "icyllis.arc3d.granite.task.Task"
import { $ImageInfo, $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $ImageUploadTask$UploadCondition$$Type } from "icyllis.arc3d.granite.task.ImageUploadTask$UploadCondition"
import { $DrawTask } from "icyllis.arc3d.granite.task.DrawTask"
import { $ImageViewProxy, $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $Draw$$Type } from "icyllis.arc3d.granite.Draw"
import { $ColorSpace$$Type } from "icyllis.arc3d.core.ColorSpace"
import { $ImageUploadTask$MipLevel$$Type } from "icyllis.arc3d.granite.task.ImageUploadTask$MipLevel"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $SurfaceDrawContext implements $AutoCloseable {
public "clear"(clearColor: float[]): void
public "close"(): void
public "discard"(): void
public "flush"(context: $RecordingContext$$Type): void
public "getAlphaType"(): integer
public "getColorType"(): integer
public "getHeight"(): integer
public "getImageInfo"(): $ImageInfo
public "getOrigin"(): integer
public "getReadSwizzle"(): short
public "getReadView"(): $ImageViewProxy
public "getWidth"(): integer
public "isMipmapped"(): boolean
public static "make"(context: $RecordingContext$$Type, targetView: $ImageViewProxy$$Type, deviceInfo: $ImageInfo$$Type): $SurfaceDrawContext
public "numPendingSteps"(): integer
public "recordDependency"(task: $Task$$Type): void
public "recordDraw"(draw: $Draw$$Type): void
public "recordUpload"(context: $RecordingContext$$Type, imageViewProxy: $ImageViewProxy$$Type, srcColorType: integer, srcAlphaType: integer, srcColorSpace: $ColorSpace$$Type, dstColorType: integer, dstAlphaType: integer, dstColorSpace: $ColorSpace$$Type, levels: $ImageUploadTask$MipLevel$$Type[], dstRect: $Rect2ic$$Type, condition: $ImageUploadTask$UploadCondition$$Type): boolean
public "snapDrawTask"(context: $RecordingContext$$Type): $DrawTask
get "alphaType"(): integer
get "colorType"(): integer
get "height"(): integer
get "imageInfo"(): $ImageInfo
get "origin"(): integer
get "readSwizzle"(): short
get "readView"(): $ImageViewProxy
get "width"(): integer
get "mipmapped"(): boolean
}
}

declare module "icyllis.arc3d.granite.DrawAtlas$AtlasTokenTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DrawAtlas$AtlasTokenTracker {
constructor()

public "issueFlushToken"(): void
public "nextFlushToken"(): long
get "sueFlushToken"(): void
}
}

declare module "icyllis.arc3d.granite.SubRunContainer$AtlasSubRun" {
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $Matrix$$Type } from "icyllis.arc3d.sketch.Matrix"
import { $SubRunContainer$SubRun } from "icyllis.arc3d.granite.SubRunContainer$SubRun"
import { $MeshDrawWriter$$Type } from "icyllis.arc3d.granite.MeshDrawWriter"
import { $Rect2fc } from "icyllis.arc3d.core.Rect2fc"

export class $SubRunContainer$AtlasSubRun extends $SubRunContainer$SubRun {
public "fillInstanceData"(writer: $MeshDrawWriter$$Type, offset: integer, count: integer, depth: float): void
public "fillInstanceData"(writer: $MeshDrawWriter$$Type, offset: integer, count: integer, offsetX: float, offsetY: float, depth: float): void
public "getBounds"(): $Rect2fc
public "getGlyphCount"(): integer
public "getMaskFormat"(): integer
public "getMatrixAndFilter"(localToDevice: $Matrixc$$Type, originX: float, originY: float, outSubRunToLocal: $Matrix$$Type, outSubRunToDevice: $Matrix$$Type): integer
public "prepareGlyphs"(start: integer, end: integer, context: $RecordingContext$$Type): integer
get "bounds"(): $Rect2fc
get "glyphCount"(): integer
get "maskFormat"(): integer
}
}

declare module "icyllis.arc3d.granite.FragmentStage$Uniform" {
import { $Record } from "java.lang.Record"

export class $FragmentStage$Uniform extends $Record {
constructor(type: byte, name: string, arraySize: short)
constructor(type: byte, name: string, arraySize: integer)
constructor(type: byte, name: string)

public "arraySize"(): short
public "name"(): string
public "type"(): byte
}
}

declare module "icyllis.arc3d.granite.BakedTextBlob" {
import { $Canvas$$Type } from "icyllis.arc3d.sketch.Canvas"
import { $GlyphRunList$$Type } from "icyllis.arc3d.sketch.GlyphRunList"
import { $SubRunContainer$$Type } from "icyllis.arc3d.granite.SubRunContainer"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $GraniteDevice$$Type } from "icyllis.arc3d.granite.GraniteDevice"
import { $StrikeCache$$Type } from "icyllis.arc3d.sketch.StrikeCache"

export class $BakedTextBlob {
constructor(subRuns: $SubRunContainer$$Type)

public "canReuse"(paint: $Paint$$Type, positionMatrix: $Matrixc$$Type, glyphRunListX: float, glyphRunListY: float): boolean
public "draw"(canvas: $Canvas$$Type, originX: float, originY: float, paint: $Paint$$Type, device: $GraniteDevice$$Type): void
public "getMemorySize"(): long
public static "make"(glyphRunList: $GlyphRunList$$Type, paint: $Paint$$Type, positionMatrix: $Matrixc$$Type, strikeCache: $StrikeCache$$Type): $BakedTextBlob
get "memorySize"(): long
}
}

declare module "icyllis.arc3d.granite.shading.ShaderBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShaderBuilder {
"codeAppend"(string0: string): void
"codeAppendf"(string0: string, ...object1s: any[]): void
"codePrependf"(string0: string, ...object1s: any[]): void
"getMangledName"(string0: string): string
}

export namespace $ShaderBuilder {
const probejs$$marker: never
}
export abstract class $ShaderBuilder$$Static implements $ShaderBuilder {
}
}

declare module "icyllis.arc3d.granite.StaticBufferManager" {
import { $QueueManager$$Type } from "icyllis.arc3d.engine.QueueManager"
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $GlobalResourceCache$$Type } from "icyllis.arc3d.engine.GlobalResourceCache"
import { $Caps$$Type } from "icyllis.arc3d.engine.Caps"
import { $BufferViewInfo$$Type } from "icyllis.arc3d.engine.BufferViewInfo"

export class $StaticBufferManager {
static readonly "RESULT_FAILURE": integer
static readonly "RESULT_NO_WORK": integer
static readonly "RESULT_SUCCESS": integer

constructor(resourceProvider: $ResourceProvider$$Type, caps: $Caps$$Type)

public "flush"(queueManager: $QueueManager$$Type, globalResourceCache: $GlobalResourceCache$$Type): integer
public "getIndexWriter"(requiredBytes: long, outInfo: $BufferViewInfo$$Type): long
public "getVertexWriter"(requiredBytes: long, outInfo: $BufferViewInfo$$Type): long
}
}

declare module "icyllis.arc3d.granite.GlyphStrikeCache" {
import { $GlyphStrike } from "icyllis.arc3d.granite.GlyphStrike"
import { $StrikeDesc$$Type } from "icyllis.arc3d.sketch.StrikeDesc"

export class $GlyphStrikeCache {
constructor()

public "clear"(): void
public "findOrCreateStrike"(desc: $StrikeDesc$$Type): $GlyphStrike
}
}

declare module "icyllis.arc3d.granite.FragmentStage$GenerateExpression" {
import { $FragmentNode$$Type } from "icyllis.arc3d.granite.FragmentNode"
import { $Formatter$$Type } from "java.util.Formatter"

export interface $FragmentStage$GenerateExpression {
"generate"(fragmentNode0: $FragmentNode$$Type, string1: string, string2: string, string3: string, string4: string, formatter5: $Formatter$$Type): void
}

export namespace $FragmentStage$GenerateExpression {
const probejs$$marker: never
}
export abstract class $FragmentStage$GenerateExpression$$Static implements $FragmentStage$GenerateExpression {
}
}

declare module "icyllis.arc3d.granite.GeometryStep" {
import { $VertexInputLayout$Attribute } from "icyllis.arc3d.engine.VertexInputLayout$Attribute"
import { $Iterator } from "java.util.Iterator"
import { $KeyBuilder$$Type } from "icyllis.arc3d.engine.KeyBuilder"
import { $Draw$$Type } from "icyllis.arc3d.granite.Draw"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $GeometryStep$ProgramImpl } from "icyllis.arc3d.granite.GeometryStep$ProgramImpl"
import { $ShaderCaps$$Type } from "icyllis.arc3d.engine.ShaderCaps"
import { $VertexInputLayout } from "icyllis.arc3d.engine.VertexInputLayout"
import { $Formatter$$Type } from "java.util.Formatter"
import { $UniformDataGatherer$$Type } from "icyllis.arc3d.granite.UniformDataGatherer"
import { $VaryingHandler$$Type } from "icyllis.arc3d.granite.shading.VaryingHandler"
import { $UniformHandler$$Type } from "icyllis.arc3d.granite.shading.UniformHandler"
import { $TextureDataGatherer$$Type } from "icyllis.arc3d.granite.TextureDataGatherer"
import { $DepthStencilSettings } from "icyllis.arc3d.engine.DepthStencilSettings"
import { $MeshDrawWriter$$Type } from "icyllis.arc3d.granite.MeshDrawWriter"

export class $GeometryStep {
static readonly "DEPTH": $VertexInputLayout$Attribute
static readonly "FLAG_EMIT_COVERAGE": integer
static readonly "FLAG_EMIT_PRIMITIVE_COLOR": integer
static readonly "FLAG_HANDLE_SOLID_COLOR": integer
static readonly "FLAG_HAS_TEXTURES": integer
static readonly "FLAG_OUTSET_BOUNDS_FOR_AA": integer
static readonly "FLAG_PERFORM_SHADING": integer
static readonly "MODEL_VIEW": $VertexInputLayout$Attribute
static readonly "SOLID_COLOR": $VertexInputLayout$Attribute

public "appendAttributesToKey"(b: $KeyBuilder$$Type): void
public "appendToKey"(keyBuilder0: $KeyBuilder$$Type): void
public "depthStencilFlags"(): integer
public "depthStencilSettings"(): $DepthStencilSettings
public "emitFragmentColorCode"(fs: $Formatter$$Type, outputColor: string): void
public "emitFragmentCoverageCode"(fs: $Formatter$$Type, outputCoverage: string): void
public "emitFragmentDefinitions"(fs: $Formatter$$Type): void
public "emitSamplers"(uniformHandler: $UniformHandler$$Type): void
public "emitUniforms"(uniformHandler: $UniformHandler$$Type, mayRequireLocalCoords: boolean): void
public "emitVaryings"(varyingHandler: $VaryingHandler$$Type, usesFastSolidColor: boolean): void
public "emitVertexDefinitions"(vs: $Formatter$$Type): void
public "emitVertexGeomCode"(vs: $Formatter$$Type, worldPosVar: string, localPosVar: string, usesFastSolidColor: boolean): void
public "emitsCoverage"(): boolean
public "emitsPrimitiveColor"(): boolean
public "getInputLayout"(): $VertexInputLayout
public "handlesSolidColor"(): boolean
public "hasInstanceAttributes"(): boolean
public "hasVertexAttributes"(): boolean
public "instanceAttributes"(): $Iterator<$VertexInputLayout$Attribute>
public "instanceBinding"(): integer
public "instanceStride"(): integer
public "makeProgramImpl"(shaderCaps0: $ShaderCaps$$Type): $GeometryStep$ProgramImpl
public "name"(): string
public "numInstanceAttributes"(): integer
public "numInstanceLocations"(): integer
public "numTextureSamplers"(): integer
public "numVertexAttributes"(): integer
public "numVertexLocations"(): integer
public "performsShading"(): boolean
public "primitiveType"(): byte
public "textureSamplerState"(i: integer): integer
public "textureSamplerSwizzle"(i: integer): short
public "uniqueID"(): integer
public "vertexAttributes"(): $Iterator<$VertexInputLayout$Attribute>
public "vertexBinding"(): integer
public "vertexStride"(): integer
public "writeMesh"(writer: $MeshDrawWriter$$Type, draw: $Draw$$Type, solidColor: float[], mayRequireLocalCoords: boolean): void
public "writeUniformsAndTextures"(context: $RecordingContext$$Type, draw: $Draw$$Type, uniformDataGatherer: $UniformDataGatherer$$Type, textureDataGatherer: $TextureDataGatherer$$Type, mayRequireLocalCoords: boolean): void
get "inputLayout"(): $VertexInputLayout
}
}

declare module "icyllis.arc3d.granite.RecordingContext" {
import { $Task$$Type } from "icyllis.arc3d.granite.task.Task"
import { $Recording } from "icyllis.arc3d.granite.Recording"
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"
import { $RecordingContext$Options$$Type } from "icyllis.arc3d.granite.RecordingContext$Options"
import { $DrawAtlas$AtlasTokenTracker } from "icyllis.arc3d.granite.DrawAtlas$AtlasTokenTracker"
import { $GraniteDevice$$Type } from "icyllis.arc3d.granite.GraniteDevice"
import { $Context } from "icyllis.arc3d.engine.Context"
import { $TextBlobCache } from "icyllis.arc3d.granite.TextBlobCache"
import { $UploadBufferManager } from "icyllis.arc3d.engine.UploadBufferManager"
import { $AtlasProvider } from "icyllis.arc3d.granite.AtlasProvider"
import { $DrawBufferManager } from "icyllis.arc3d.granite.DrawBufferManager"
import { $GlyphStrikeCache } from "icyllis.arc3d.granite.GlyphStrikeCache"

export class $RecordingContext extends $Context {
public "addTask"(task: $Task$$Type): void
public "clearStrikeCache"(): void
public "flushTrackedDevices"(): void
public "getAtlasProvider"(): $AtlasProvider
public "getAtlasTokenTracker"(): $DrawAtlas$AtlasTokenTracker
public "getDynamicBufferManager"(): $DrawBufferManager
public "getGlyphStrikeCache"(): $GlyphStrikeCache
public "getTextBlobCache"(): $TextBlobCache
public "getUploadBufferManager"(): $UploadBufferManager
public "init"(options: $RecordingContext$Options$$Type): boolean
public "isDiscarded"(): boolean
public "isImageCompatible"(colorType: integer): boolean
public "isSurfaceCompatible"(colorType: integer): boolean
public static "makeRecordingContext"(context: $ImmediateContext$$Type, options: $RecordingContext$Options$$Type): $RecordingContext
public "snap"(): $Recording
public "trackDevice"(device: $GraniteDevice$$Type): void
public "untrackDevice"(device: $GraniteDevice$$Type): void
get "atlasProvider"(): $AtlasProvider
get "atlasTokenTracker"(): $DrawAtlas$AtlasTokenTracker
get "dynamicBufferManager"(): $DrawBufferManager
get "glyphStrikeCache"(): $GlyphStrikeCache
get "textBlobCache"(): $TextBlobCache
get "uploadBufferManager"(): $UploadBufferManager
get "discarded"(): boolean
}
}

declare module "icyllis.arc3d.granite.ClipStack$Element" {
import { $Matrixc } from "icyllis.arc3d.sketch.Matrixc"
import { $Rect2fc } from "icyllis.arc3d.core.Rect2fc"

export class $ClipStack$Element {
public "clipOp"(): integer
public "shape"(): $Rect2fc
public "viewMatrix"(): $Matrixc
}
}

declare module "icyllis.arc3d.granite.GlyphStrike" {
import { $StrikeDesc, $StrikeDesc$$Type } from "icyllis.arc3d.sketch.StrikeDesc"
import { $BakedGlyph } from "icyllis.arc3d.granite.BakedGlyph"

export class $GlyphStrike {
constructor(desc: $StrikeDesc$$Type)

public "getGlyph"(glyphID: integer): $BakedGlyph
public "getStrikeDesc"(): $StrikeDesc
get "strikeDesc"(): $StrikeDesc
}
}

declare module "icyllis.arc3d.granite.GlyphAtlasManager" {
import { $DrawAtlas$PlotBulkUseUpdater$$Type } from "icyllis.arc3d.granite.DrawAtlas$PlotBulkUseUpdater"
import { $SurfaceDrawContext$$Type } from "icyllis.arc3d.granite.SurfaceDrawContext"
import { $DrawAtlas$AtlasGenerationCounter } from "icyllis.arc3d.granite.DrawAtlas$AtlasGenerationCounter"
import { $BakedGlyph$$Type } from "icyllis.arc3d.granite.BakedGlyph"
import { $ImageViewProxy } from "icyllis.arc3d.engine.ImageViewProxy"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Glyph$$Type } from "icyllis.arc3d.sketch.Glyph"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $GlyphAtlasManager extends $DrawAtlas$AtlasGenerationCounter implements $AutoCloseable {
constructor(context: $RecordingContext$$Type)

public "addGlyphAndSetLastUseToken"(updater: $DrawAtlas$PlotBulkUseUpdater$$Type, glyph: $BakedGlyph$$Type, maskFormat: integer, token: long): void
public "addGlyphToAtlas"(glyph: $Glyph$$Type, bakedGlyph: $BakedGlyph$$Type): integer
public "close"(): void
public "compact"(): void
public "evictAtlases"(): void
public "getAtlasGeneration"(maskFormat: integer): long
public "getCurrentTexture"(maskFormat: integer): $ImageViewProxy
public "hasGlyph"(maskFormat: integer, glyph: $BakedGlyph$$Type): boolean
public "initAtlas"(maskFormat: integer): boolean
public "purge"(): void
public "recordUploads"(sdc: $SurfaceDrawContext$$Type): boolean
public "setLastUseTokenBulk"(maskFormat: integer, updater: $DrawAtlas$PlotBulkUseUpdater$$Type, token: long): void
}
}

declare module "icyllis.arc3d.granite.RecordingContext$Options" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RecordingContext$Options {
constructor()

get "mMaxResourceBudget"(): long
set "mMaxResourceBudget"(value: long)
}
}

declare module "icyllis.arc3d.granite.ShaderCodeSource" {
import { $IdentityHashMap$$Type } from "java.util.IdentityHashMap"
import { $FragmentNode$$Type } from "icyllis.arc3d.granite.FragmentNode"
import { $FragmentStage } from "icyllis.arc3d.granite.FragmentStage"
import { $Formatter$$Type } from "java.util.Formatter"

export class $ShaderCodeSource {
static readonly "ARC_ALPHA_ONLY": string
static readonly "ARC_ANALYTIC_RRECT_SHADER": string
static readonly "ARC_ANGULAR_GRAD_4_SHADER": string
static readonly "ARC_ANGULAR_GRAD_8_SHADER": string
static readonly "ARC_BLEND": string
static readonly "ARC_COLOR_SPACE_TRANSFORM": string
static readonly "ARC_CUBIC_IMAGE_SHADER": string
static readonly "ARC_DITHER_SHADER": string
static readonly "ARC_ERROR": string
static readonly "ARC_HW_IMAGE_SHADER": string
static readonly "ARC_IMAGE_SHADER": string
static readonly "ARC_LINEAR_GRAD_4_SHADER": string
static readonly "ARC_LINEAR_GRAD_8_SHADER": string
static readonly "ARC_PASSTHROUGH": string
static readonly "ARC_PORTER_DUFF_BLEND": string
static readonly "ARC_RADIAL_GRAD_4_SHADER": string
static readonly "ARC_RADIAL_GRAD_8_SHADER": string
static readonly "ARC_RGB_OPAQUE": string
static readonly "ARC_SOLID_COLOR": string
static readonly "BLEND_CLEAR": string
static readonly "BLEND_COLOR": string
static readonly "BLEND_COLOR_BURN": string
static readonly "BLEND_COLOR_DODGE": string
static readonly "BLEND_DARKEN": string
static readonly "BLEND_DARKER_COLOR": string
static readonly "BLEND_DIFFERENCE": string
static readonly "BLEND_DIVIDE": string
static readonly "BLEND_DST": string
static readonly "BLEND_DST_ATOP": string
static readonly "BLEND_DST_IN": string
static readonly "BLEND_DST_OUT": string
static readonly "BLEND_DST_OVER": string
static readonly "BLEND_EXCLUSION": string
static readonly "BLEND_HARD_LIGHT": string
static readonly "BLEND_HARD_MIX": string
static readonly "BLEND_HUE": string
static readonly "BLEND_LIGHTEN": string
static readonly "BLEND_LIGHTER_COLOR": string
static readonly "BLEND_LINEAR_BURN": string
static readonly "BLEND_LINEAR_DODGE": string
static readonly "BLEND_LINEAR_LIGHT": string
static readonly "BLEND_LUMINOSITY": string
static readonly "BLEND_MINUS": string
static readonly "BLEND_MINUS_CLAMPED": string
static readonly "BLEND_MODULATE": string
static readonly "BLEND_MULTIPLY": string
static readonly "BLEND_OVERLAY": string
static readonly "BLEND_PIN_LIGHT": string
static readonly "BLEND_PLUS": string
static readonly "BLEND_PLUS_CLAMPED": string
static readonly "BLEND_SATURATION": string
static readonly "BLEND_SCREEN": string
static readonly "BLEND_SOFT_LIGHT": string
static readonly "BLEND_SRC": string
static readonly "BLEND_SRC_ATOP": string
static readonly "BLEND_SRC_IN": string
static readonly "BLEND_SRC_OUT": string
static readonly "BLEND_SRC_OVER": string
static readonly "BLEND_SUBTRACT": string
static readonly "BLEND_VIVID_LIGHT": string
static readonly "BLEND_XOR": string

constructor()

public static "emitDefinitions"(nodes: $FragmentNode$$Type[], added: $IdentityHashMap$$Type<string, string>, code: $Formatter$$Type): void
public "findStage"(stageId: integer): $FragmentStage
public static "getMangledName"(baseName: string, manglingSuffix: integer): string
public static "invoke_child"(child: $FragmentNode$$Type, localCoords: string, priorStageOutput: string, blenderDstColor: string, outputNode: $FragmentNode$$Type, outputBaseName: string, outputType: byte, code: $Formatter$$Type): string
public static "invoke_node"(node: $FragmentNode$$Type, localCoords: string, priorStageOutput: string, blenderDstColor: string, code: $Formatter$$Type): string
}
}

declare module "icyllis.arc3d.granite.DrawAtlas$AtlasGenerationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DrawAtlas$AtlasGenerationCounter {
static readonly "kInvalidGeneration": long
static readonly "kMaxGeneration": long

constructor()

public "next"(): long
}
}

declare module "icyllis.arc3d.granite.shading.UniformHandler$UniformInfo" {
import { $ShaderVar, $ShaderVar$$Type } from "icyllis.arc3d.engine.ShaderVar"

export class $UniformHandler$UniformInfo {
constructor()

get "mOffset"(): integer
set "mOffset"(value: integer)
get "mRawName"(): string
set "mRawName"(value: string)
get "mVariable"(): $ShaderVar
set "mVariable"(value: $ShaderVar$$Type)
get "mVisibility"(): integer
set "mVisibility"(value: integer)
}
}

declare module "icyllis.arc3d.granite.GraniteImage" {
import { $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $Image } from "icyllis.arc3d.sketch.Image"
import { $ImageViewProxy, $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $ColorSpace$$Type } from "icyllis.arc3d.core.ColorSpace"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"

export class $GraniteImage extends $Image {
constructor(context: $RecordingContext$$Type, view: $ImageViewProxy$$Type, colorType: integer, alphaType: integer, colorSpace: $ColorSpace$$Type)

public static "copy"(rc: $RecordingContext$$Type, srcView: $ImageViewProxy$$Type, srcInfo: $ImageInfo$$Type, subset: $Rect2ic$$Type, budgeted: boolean, mipmapped: boolean, approxFit: boolean, label: string): $GraniteImage
public "getImageViewProxy"(): $ImageViewProxy
get "imageViewProxy"(): $ImageViewProxy
}
}

declare module "icyllis.arc3d.granite.FragmentNode" {
import { $FragmentStage, $FragmentStage$$Type } from "icyllis.arc3d.granite.FragmentStage"

export class $FragmentNode {
static readonly "NO_CHILDREN": $FragmentNode[]

constructor(stage: $FragmentStage$$Type, children: $FragmentNode$$Type[], stageID: integer, stageIndex: integer)

public "childAt"(index: integer): $FragmentNode
public "children"(): $FragmentNode[]
public "numChildren"(): integer
public "requirementFlags"(): integer
public "stage"(): $FragmentStage
public "stageID"(): integer
public "stageIndex"(): integer
}
}

declare module "icyllis.arc3d.granite.KeyContext" {
import { $ImageInfo, $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $PaintParams$$Type } from "icyllis.arc3d.granite.PaintParams"
import { $RecordingContext, $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Caps } from "icyllis.arc3d.engine.Caps"

export class $KeyContext {
constructor(recordingContext: $RecordingContext$$Type, targetInfo: $ImageInfo$$Type)

public "a"(): float
public "b"(): float
public "g"(): float
public "getCaps"(): $Caps
public "getRecordingContext"(): $RecordingContext
public "r"(): float
public "reset"(paintParams: $PaintParams$$Type): void
public "targetInfo"(): $ImageInfo
get "caps"(): $Caps
get "recordingContext"(): $RecordingContext
}
}

declare module "icyllis.arc3d.granite.DrawBufferManager" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Task$$Type } from "icyllis.arc3d.granite.task.Task"
import { $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $List$$Type } from "java.util.List"
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $Caps$$Type } from "icyllis.arc3d.engine.Caps"
import { $BufferViewInfo$$Type } from "icyllis.arc3d.engine.BufferViewInfo"

export class $DrawBufferManager {
static readonly "INDEX_BUFFER_SIZE": integer
static readonly "UNIFORM_BUFFER_SIZE": integer
static readonly "VERTEX_BUFFER_SIZE": integer

constructor(caps: $Caps$$Type, resourceProvider: $ResourceProvider$$Type)

public "alignUniformBlockSize"(dataSize: integer): integer
public "flush"(outTasks: $Consumer$$Type<$Task$$Type>, outResourceRefs: $List$$Type<$Resource$$Type>): void
public "getUniformPointer"(requiredBytes: integer, outInfo: $BufferViewInfo$$Type): long
public "getVertexPointer"(requiredBytes: integer, outInfo: $BufferViewInfo$$Type): long
public "hasMappingFailed"(): boolean
public "putBackVertexBytes"(unusedBytes: integer): void
}
}

declare module "icyllis.arc3d.granite.shading.VertexGeomBuilder" {
import { $ShaderVar$$Type } from "icyllis.arc3d.engine.ShaderVar"
import { $ShaderBuilder } from "icyllis.arc3d.granite.shading.ShaderBuilder"
import { $GeometryStep$$Type } from "icyllis.arc3d.granite.GeometryStep"

export interface $VertexGeomBuilder extends $ShaderBuilder {
"codeAppend"(string0: string): void
"codeAppendf"(string0: string, ...object1s: any[]): void
"codePrependf"(string0: string, ...object1s: any[]): void
"emitAttributes"(geometryStep0: $GeometryStep$$Type): void
"emitNormalizedPosition"(shaderVar0: $ShaderVar$$Type): void
"getMangledName"(string0: string): string
}

export namespace $VertexGeomBuilder {
const probejs$$marker: never
}
export abstract class $VertexGeomBuilder$$Static implements $VertexGeomBuilder {
}
}

declare module "icyllis.arc3d.granite.task.ImageUploadTask$MipLevel" {
import { $Pixmap$$Type } from "icyllis.arc3d.core.Pixmap"
import { $PixelRef$$Type } from "icyllis.arc3d.core.PixelRef"

export class $ImageUploadTask$MipLevel {
constructor(pixelRef: $PixelRef$$Type)
constructor(pixmap: $Pixmap$$Type)
constructor(base: any, address: long, rowBytes: integer)
constructor()

get "mAddress"(): long
set "mAddress"(value: long)
get "mBase"(): any
set "mBase"(value: any)
get "mRowBytes"(): integer
set "mRowBytes"(value: integer)
}
}

declare module "icyllis.arc3d.granite.TextureDataGatherer" {
import { $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $SamplerDesc$$Type } from "icyllis.arc3d.engine.SamplerDesc"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $TextureDataGatherer implements $AutoCloseable {
constructor()

public "add"(textureView: $ImageViewProxy$$Type, samplerDesc: $SamplerDesc$$Type): void
public "close"(): void
public "finish"(): integer[]
public "reset"(): void
}
}

declare module "icyllis.arc3d.granite.Recording" {
import { $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"
import { $TaskList$$Type } from "icyllis.arc3d.granite.task.TaskList"
import { $CommandBuffer$$Type } from "icyllis.arc3d.engine.CommandBuffer"
import { $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Task } from "icyllis.arc3d.engine.Task"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $Recording implements $Task, $AutoCloseable {
constructor(rootTaskList: $TaskList$$Type, extraResourceRefs: $ObjectArrayList$$Type<$Resource$$Type>)

public "close"(): void
public "execute"(context: $ImmediateContext$$Type, commandBuffer: $CommandBuffer$$Type): integer
}
}

declare module "icyllis.arc3d.granite.ClipStack$ClipGeometry" {
import { $Matrixc } from "icyllis.arc3d.sketch.Matrixc"
import { $Rect2fc } from "icyllis.arc3d.core.Rect2fc"

export interface $ClipStack$ClipGeometry {
"contains"(clipGeometry0: $ClipStack$ClipGeometry$$Type): boolean
"op"(): integer
"outerBounds"(): $Rect2fc
"shape"(): $Rect2fc
"viewMatrix"(): $Matrixc
}

export namespace $ClipStack$ClipGeometry {
const probejs$$marker: never
}
export abstract class $ClipStack$ClipGeometry$$Static implements $ClipStack$ClipGeometry {
}
}

declare module "icyllis.arc3d.granite.DrawAtlas$AtlasLocator" {
import { $DrawAtlas$PlotLocator } from "icyllis.arc3d.granite.DrawAtlas$PlotLocator"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"

export class $DrawAtlas$AtlasLocator extends $DrawAtlas$PlotLocator {
constructor()

public "height"(): short
public "insetRect"(padding: integer): void
public "setRect"(rect: $Rect2ic$$Type): void
public "width"(): short
get "u1"(): short
set "u1"(value: short)
get "u2"(): short
set "u2"(value: short)
get "v1"(): short
set "v1"(value: short)
get "v2"(): short
set "v2"(value: short)
set "rect"(value: $Rect2ic$$Type)
}
}

declare module "icyllis.arc3d.granite.GeometryRenderer" {
import { $GeometryStep, $GeometryStep$$Type } from "icyllis.arc3d.granite.GeometryStep"

export class $GeometryRenderer {
static readonly "MAX_RENDER_STEPS": integer

constructor(name: string, step0: $GeometryStep$$Type, step1: $GeometryStep$$Type, step2: $GeometryStep$$Type)
constructor(name: string, step0: $GeometryStep$$Type, step1: $GeometryStep$$Type)
constructor(name: string, step0: $GeometryStep$$Type)

public "depthStencilFlags"(): integer
public "emitsCoverage"(): boolean
public "emitsPrimitiveColor"(): boolean
public "name"(): string
public "numSteps"(): integer
public "outsetBoundsForAA"(): boolean
public "step"(i: integer): $GeometryStep
}
}

declare module "icyllis.arc3d.granite.GraniteDevice" {
import { $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $Device } from "icyllis.arc3d.sketch.Device"
import { $Blender$$Type } from "icyllis.arc3d.sketch.Blender"
import { $ImageViewProxy, $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $Draw$$Type } from "icyllis.arc3d.granite.Draw"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $SubRunContainer$AtlasSubRun$$Type } from "icyllis.arc3d.granite.SubRunContainer$AtlasSubRun"
import { $ClipStack } from "icyllis.arc3d.granite.ClipStack"
import { $GraniteImage } from "icyllis.arc3d.granite.GraniteImage"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $GeometryRenderer$$Type } from "icyllis.arc3d.granite.GeometryRenderer"

export class $GraniteDevice extends $Device {
public "discardRC"(): void
public "drawAtlasSubRun"(subRun: $SubRunContainer$AtlasSubRun$$Type, originX: float, originY: float, paint: $Paint$$Type): void
public "drawClipShape"(draw: $Draw$$Type): void
public "drawGeometry"<GEO>(localToDevice: $Matrixc$$Type, geometry: GEO, boundsFn: $BiConsumer$$Type<GEO, $Rect2f$$Type>, inverseFill: boolean, paint: $Paint$$Type, renderer: $GeometryRenderer$$Type, primitiveBlender: $Blender$$Type): void
public "flushPendingWork"(): void
public "getClipStack"(): $ClipStack
public "getReadView"(): $ImageViewProxy
public static "make"(rc: $RecordingContext$$Type, deviceInfo: $ImageInfo$$Type, surfaceFlags: integer, origin: integer, initialLoadOp: byte, label: string, trackDevice: boolean): $GraniteDevice
public static "make"(rc: $RecordingContext$$Type, targetView: $ImageViewProxy$$Type, deviceInfo: $ImageInfo$$Type, initialLoadOp: byte, trackDevice: boolean): $GraniteDevice
public "makeImageCopy"(subset: $Rect2ic$$Type, budgeted: boolean, mipmapped: boolean, approxFit: boolean): $GraniteImage
public "setImmutable"(): void
get "clipStack"(): $ClipStack
get "readView"(): $ImageViewProxy
}
}

declare module "icyllis.arc3d.granite.UniformDataGatherer" {
import { $Matrix4c$$Type } from "icyllis.arc3d.core.Matrix4c"
import { $IntBuffer } from "java.nio.IntBuffer"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $Matrix3$$Type } from "icyllis.arc3d.core.Matrix3"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $UniformDataGatherer implements $AutoCloseable {
static readonly "Std140Layout": integer
static readonly "Std430Layout": integer

constructor(layout: integer)

public "close"(): void
public "finish"(): $IntBuffer
public "reset"(): void
public "reset"(layout: integer): void
public "write1f"(v0: float): void
public "write1i"(v0: integer): void
public "write2f"(v0: float, v1: float): void
public "write2i"(v0: integer, v1: integer): void
public "write3f"(v0: float, v1: float, v2: float): void
public "write4f"(v0: float, v1: float, v2: float, v3: float): void
public "write4fv"(offset: integer, count: integer, value: float[]): void
public "write4i"(v0: integer, v1: integer, v2: integer, v3: integer): void
public "writeMatrix3f"(matrix: $Matrixc$$Type): void
public "writeMatrix3f"(offset: integer, value: float[]): void
public "writeMatrix3f"(matrix: $Matrix3$$Type): void
public "writeMatrix4f"(offset: integer, value: float[]): void
public "writeMatrix4f"(matrix: $Matrix4c$$Type): void
public "writePaintColor"(r: float, g: float, b: float, a: float): void
}
}

declare module "icyllis.arc3d.granite.PaintParams" {
import { $BlendMode } from "icyllis.arc3d.sketch.BlendMode"
import { $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $Blender, $Blender$$Type } from "icyllis.arc3d.sketch.Blender"
import { $UniformDataGatherer$$Type } from "icyllis.arc3d.granite.UniformDataGatherer"
import { $ColorFilter } from "icyllis.arc3d.sketch.effects.ColorFilter"
import { $Shader } from "icyllis.arc3d.sketch.shaders.Shader"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $KeyContext$$Type } from "icyllis.arc3d.granite.KeyContext"
import { $KeyBuilder$$Type } from "icyllis.arc3d.engine.KeyBuilder"
import { $TextureDataGatherer$$Type } from "icyllis.arc3d.granite.TextureDataGatherer"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $PaintParams implements $AutoCloseable {
constructor(paint: $Paint$$Type, primitiveBlender: $Blender$$Type)

public "a"(): float
public "appendToKey"(keyContext: $KeyContext$$Type, keyBuilder: $KeyBuilder$$Type, uniformDataGatherer: $UniformDataGatherer$$Type, textureDataGatherer: $TextureDataGatherer$$Type): void
public "b"(): float
public "close"(): void
public "g"(): float
public "getColorFilter"(): $ColorFilter
public "getFinalBlendMode"(): $BlendMode
public "getFinalBlender"(): $Blender
public "getPrimitiveBlender"(): $Blender
public "getShader"(): $Shader
public static "getSolidColor"(paint: $Paint$$Type, targetInfo: $ImageInfo$$Type, outColor: float[]): boolean
public "getSolidColor"(targetInfo: $ImageInfo$$Type, outColor: float[]): boolean
public "isSolidColor"(): boolean
public static "prepareColorForDst"(color: float[], dstInfo: $ImageInfo$$Type, copyOnWrite: boolean): float[]
public "r"(): float
get "colorFilter"(): $ColorFilter
get "finalBlendMode"(): $BlendMode
get "finalBlender"(): $Blender
get "primitiveBlender"(): $Blender
get "shader"(): $Shader
get "solidColor"(): boolean
}
}

declare module "icyllis.arc3d.granite.DrawCommandList" {
import { $PrintWriter$$Type } from "java.io.PrintWriter"
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Buffer$$Type } from "icyllis.arc3d.engine.Buffer"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $BufferViewInfo$$Type } from "icyllis.arc3d.engine.BufferViewInfo"
import { $IntArrayList } from "it.unimi.dsi.fastutil.ints.IntArrayList"

export class $DrawCommandList {
static readonly "CMD_BIND_GRAPHICS_PIPELINE": integer
static readonly "CMD_BIND_INDEX_BUFFER": integer
static readonly "CMD_BIND_TEXTURES": integer
static readonly "CMD_BIND_UNIFORM_BUFFER": integer
static readonly "CMD_BIND_VERTEX_BUFFER": integer
static readonly "CMD_DRAW": integer
static readonly "CMD_DRAW_INDEXED": integer
static readonly "CMD_DRAW_INDEXED_INSTANCED": integer
static readonly "CMD_DRAW_INSTANCED": integer
static readonly "CMD_SET_SCISSOR": integer
readonly "mPointers": $ObjectArrayList<any>
readonly "mPrimitives": $IntArrayList

constructor()

public "bindGraphicsPipeline"(pipelineIndex: integer): void
public "bindIndexBuffer"(indexType: integer, bufferInfo: $BufferViewInfo$$Type): void
public "bindTextures"(textures: integer[]): void
public "bindUniformBuffer"(binding: integer, buffer: $Buffer$$Type, offset: long, size: long): void
public "bindVertexBuffer"(binding: integer, bufferInfo: $BufferViewInfo$$Type): void
public "debug"(pw: $PrintWriter$$Type): void
public "draw"(vertexCount: integer, baseVertex: integer): void
public "drawIndexed"(indexCount: integer, baseIndex: integer, baseVertex: integer): void
public "drawIndexedInstanced"(indexCount: integer, baseIndex: integer, instanceCount: integer, baseInstance: integer, baseVertex: integer): void
public "drawInstanced"(instanceCount: integer, baseInstance: integer, vertexCount: integer, baseVertex: integer): void
public "finish"(): void
public "setScissor"(scissor: $Rect2ic$$Type, surfaceHeight: integer, origin: integer): void
}
}

declare module "icyllis.arc3d.granite.DrawAtlas$PlotLocator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DrawAtlas$PlotLocator {
static readonly "kMaxPages": integer
static readonly "kMaxPlots": integer

constructor()

public "getGeneration"(): long
public "getPageIndex"(): integer
public "getPlotIndex"(): integer
public "isValid"(): boolean
public "setGeneration"(generation: long): void
public "setLocation"(plotLocator: $DrawAtlas$PlotLocator$$Type): void
public "setLocation"(pageIndex: integer, plotIndex: integer, generation: long): void
get "generation"(): long
get "pageIndex"(): integer
get "plotIndex"(): integer
get "valid"(): boolean
set "generation"(value: long)
set "location"(value: $DrawAtlas$PlotLocator$$Type)
}
}

declare module "icyllis.arc3d.granite.shading.UniformHandler" {
import { $ShaderVar } from "icyllis.arc3d.engine.ShaderVar"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $ShaderCaps$$Type } from "icyllis.arc3d.engine.ShaderCaps"
import { $UniformHandler$UniformInfo } from "icyllis.arc3d.granite.shading.UniformHandler$UniformInfo"
import { $ArrayList } from "java.util.ArrayList"

export class $UniformHandler {
static readonly "INPUT_BINDING": integer
static readonly "INPUT_DESC_SET": integer
static readonly "MAIN_DESC_SET": integer
static readonly "NO_MANGLE_PREFIX": string
static readonly "PAINT_COLOR_NAME": string
static readonly "PROJECTION_NAME": string
static readonly "SAMPLER_DESC_SET": integer
static readonly "Std140Layout": integer
static readonly "Std430Layout": integer
readonly "mSamplers": $ArrayList<$UniformHandler$UniformInfo>
readonly "mUniforms": $ArrayList<$UniformHandler$UniformInfo>

constructor(shaderCaps: $ShaderCaps$$Type, layout: integer)

public "addSampler"(type: byte, name: string, manglingSuffix: integer): integer
public "addUniform"(visibility: integer, type: byte, name: string, manglingSuffix: integer): integer
public "addUniformArray"(visibility: integer, type: byte, name: string, arraySize: integer, manglingSuffix: integer): integer
public "appendSamplerDecls"(visibility: integer, out: $StringBuilder$$Type): void
public "appendUniformDecls"(visibility: integer, binding: integer, blockName: string, out: $StringBuilder$$Type): boolean
public "finish"(reorderUniforms: boolean): void
public static "getAlignedOffset"(offset: integer, type: byte, arraySize: integer, layout: integer): integer
public static "getAlignedStride"(type: byte, arraySize: integer, layout: integer): integer
public static "getAlignmentMask"(type: byte, nonArray: boolean, layout: integer): integer
public static "getSize"(type: byte, layout: integer): integer
public "getUniformName"(handle: integer): string
public "getUniformVariable"(handle: integer): $ShaderVar
public "numSamplers"(): integer
public "numUniforms"(): integer
public "samplerVariable"(handle: integer): string
public "uniform"(index: integer): $UniformHandler$UniformInfo
get "mCurrentOffset"(): integer
set "mCurrentOffset"(value: integer)
}
}

declare module "icyllis.arc3d.granite.FragmentStage$Sampler" {
import { $Record } from "java.lang.Record"

export class $FragmentStage$Sampler extends $Record {
constructor(type: byte, name: string)

public "name"(): string
public "type"(): byte
}
}

declare module "icyllis.arc3d.granite.task.DrawTask" {
import { $Task } from "icyllis.arc3d.granite.task.Task"
import { $TaskList$$Type } from "icyllis.arc3d.granite.task.TaskList"
import { $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"

export class $DrawTask extends $Task {
constructor(targetView: $ImageViewProxy$$Type, childTasks: $TaskList$$Type)

}
}

declare module "icyllis.arc3d.granite.DrawAtlas$PlotBulkUseUpdater" {
import { $DrawAtlas$AtlasLocator$$Type } from "icyllis.arc3d.granite.DrawAtlas$AtlasLocator"

export class $DrawAtlas$PlotBulkUseUpdater {
constructor()

public "add"(locator: $DrawAtlas$AtlasLocator$$Type): boolean
public "clear"(): void
public "count"(): integer
public "dataAt"(index: integer): integer
public "getMemorySize"(): long
get "memorySize"(): long
}
}

declare module "icyllis.arc3d.granite.geom.BoundsManager" {
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $BoundsManager {
constructor()

public "clear"(): void
public "getMostRecentDraw"(rect2fc0: $Rect2fc$$Type): integer
public "recordDraw"(rect2fc0: $Rect2fc$$Type, int1: integer): void
}
}

declare module "icyllis.arc3d.granite.TextBlobCache$FeatureKey" {
import { $GlyphRunList$$Type } from "icyllis.arc3d.sketch.GlyphRunList"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"

export class $TextBlobCache$FeatureKey {
constructor()
constructor(other: $TextBlobCache$FeatureKey$$Type)

public "update"(glyphRunList: $GlyphRunList$$Type, paint: $Paint$$Type, positionMatrix: $Matrixc$$Type): void
}
}

declare module "icyllis.arc3d.granite.shading.FPFragmentBuilder" {
import { $ShaderBuilder } from "icyllis.arc3d.granite.shading.ShaderBuilder"

export interface $FPFragmentBuilder extends $ShaderBuilder {
"codeAppend"(string0: string): void
"codeAppendf"(string0: string, ...object1s: any[]): void
"codePrependf"(string0: string, ...object1s: any[]): void
"getMangledName"(string0: string): string
}

export namespace $FPFragmentBuilder {
const probejs$$marker: never
}
export abstract class $FPFragmentBuilder$$Static implements $FPFragmentBuilder {
}
}

declare module "icyllis.arc3d.granite.SubRunContainer$SubRun" {
import { $Canvas$$Type } from "icyllis.arc3d.sketch.Canvas"
import { $Paint$$Type } from "icyllis.arc3d.sketch.Paint"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $GraniteDevice$$Type } from "icyllis.arc3d.granite.GraniteDevice"

export class $SubRunContainer$SubRun {
constructor()

public "canReuse"(paint0: $Paint$$Type, matrixc1: $Matrixc$$Type, float2: float, float3: float): boolean
public "draw"(canvas0: $Canvas$$Type, float1: float, float2: float, paint3: $Paint$$Type, graniteDevice4: $GraniteDevice$$Type): void
public "getMemorySize"(): long
get "memorySize"(): long
}
}

declare module "icyllis.arc3d.granite.RendererProvider" {
import { $GeometryRenderer } from "icyllis.arc3d.granite.GeometryRenderer"
import { $Caps$$Type } from "icyllis.arc3d.engine.Caps"
import { $StaticBufferManager$$Type } from "icyllis.arc3d.granite.StaticBufferManager"

export class $RendererProvider {
constructor(caps: $Caps$$Type, staticBufferManager: $StaticBufferManager$$Type)

public "getArc"(type: integer): $GeometryRenderer
public "getComplexBox"(): $GeometryRenderer
public "getNonAABoundsFill"(): $GeometryRenderer
public "getPerEdgeAAQuad"(): $GeometryRenderer
public "getRasterText"(maskFormat: integer): $GeometryRenderer
public "getSimpleBox"(blur: boolean): $GeometryRenderer
public "getVertices"(vertexMode: integer, hasColor: boolean, hasTexCoords: boolean): $GeometryRenderer
get "complexBox"(): $GeometryRenderer
get "nonAABoundsFill"(): $GeometryRenderer
get "perEdgeAAQuad"(): $GeometryRenderer
}
}

declare module "icyllis.arc3d.granite.TextBlobCache" {
import { $BakedTextBlob, $BakedTextBlob$$Type } from "icyllis.arc3d.granite.BakedTextBlob"
import { $TextBlobCache$FeatureKey$$Type } from "icyllis.arc3d.granite.TextBlobCache$FeatureKey"
import { $TextBlob$$Type } from "icyllis.arc3d.sketch.TextBlob"

export class $TextBlobCache {
constructor()

public "find"(blob: $TextBlob$$Type, key: $TextBlobCache$FeatureKey$$Type): $BakedTextBlob
public "insert"(blob: $TextBlob$$Type, key: $TextBlobCache$FeatureKey$$Type, entry: $BakedTextBlob$$Type): $BakedTextBlob
public "purgeStaleEntries"(): void
public "remove"(entry: $BakedTextBlob$$Type): void
}
}

