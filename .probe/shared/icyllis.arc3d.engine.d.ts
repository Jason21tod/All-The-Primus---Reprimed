declare module "icyllis.arc3d.engine.Device$Stats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Device$Stats {
constructor()

public "incImageCreates"(): void
public "incNumDraws"(): void
public "incNumDraws"(increment: integer): void
public "incNumFailedDraws"(): void
public "incNumScratchMSAAAttachmentsReused"(): void
public "incNumScratchRenderTargetsReused"(): void
public "incNumScratchTexturesReused"(): void
public "incNumSubmitToGpus"(): void
public "incRenderPasses"(): void
public "incTextureCreates"(): void
public "incTextureUploads"(): void
public "incTransfersFromSurface"(): void
public "incTransfersToTexture"(): void
public "numDraws"(): long
public "numFailedDraws"(): long
public "numImageCreates"(): long
public "numRenderPasses"(): long
public "numScratchMSAAAttachmentsReused"(): long
public "numScratchRenderTargetsReused"(): long
public "numScratchTexturesReused"(): long
public "numSubmitToGpus"(): long
public "numTextureCreates"(): long
public "numTextureUploads"(): long
public "numTransfersFromSurface"(): long
public "numTransfersToTexture"(): long
public "reset"(): void
}
}

declare module "icyllis.arc3d.engine.ContextOptions" {
import { $DriverBugWorkarounds, $DriverBugWorkarounds$$Type } from "icyllis.arc3d.engine.DriverBugWorkarounds"
import { $Logger, $Logger$$Type } from "org.slf4j.Logger"

export class $ContextOptions {
constructor()

get "mAllowGLSPIRV"(): boolean
set "mAllowGLSPIRV"(value: boolean)
get "mAllowMultipleGlyphCacheTextures"(): boolean
set "mAllowMultipleGlyphCacheTextures"(value: boolean)
get "mDriverBugWorkarounds"(): $DriverBugWorkarounds
set "mDriverBugWorkarounds"(value: $DriverBugWorkarounds$$Type)
get "mGlyphCacheTextureMaximumBytes"(): long
set "mGlyphCacheTextureMaximumBytes"(value: long)
get "mGlyphsAsPathsFontSize"(): float
set "mGlyphsAsPathsFontSize"(value: float)
get "mInternalMultisampleCount"(): integer
set "mInternalMultisampleCount"(value: integer)
get "mLogger"(): $Logger
set "mLogger"(value: $Logger$$Type)
get "mMaxResourceBudget"(): long
set "mMaxResourceBudget"(value: long)
get "mMaxRuntimeProgramCacheSize"(): integer
set "mMaxRuntimeProgramCacheSize"(value: integer)
get "mMaxTextureSizeOverride"(): integer
set "mMaxTextureSizeOverride"(value: integer)
get "mMaxVkSecondaryCommandBufferCacheSize"(): integer
set "mMaxVkSecondaryCommandBufferCacheSize"(value: integer)
get "mMinDistanceFieldFontSize"(): float
set "mMinDistanceFieldFontSize"(value: float)
get "mReducedShaderVariations"(): boolean
set "mReducedShaderVariations"(value: boolean)
get "mSharpenMipmappedTextures"(): boolean
set "mSharpenMipmappedTextures"(value: boolean)
get "mSkipGLErrorChecks"(): boolean
set "mSkipGLErrorChecks"(value: boolean)
get "mSupportBilerpFromGlyphAtlas"(): boolean
set "mSupportBilerpFromGlyphAtlas"(value: boolean)
get "mUseStagingBuffers"(): boolean
set "mUseStagingBuffers"(value: boolean)
get "mVolatileContext"(): boolean
set "mVolatileContext"(value: boolean)
get "mVulkanVMALargeHeapBlockSize"(): long
set "mVulkanVMALargeHeapBlockSize"(value: long)
}
}

declare module "icyllis.arc3d.engine.Device" {
import { $ContextOptions } from "icyllis.arc3d.engine.ContextOptions"
import { $GpuBufferPool } from "icyllis.arc3d.engine.GpuBufferPool"
import { $BackendImage$$Type } from "icyllis.arc3d.engine.BackendImage"
import { $Image$$Type } from "icyllis.arc3d.engine.Image"
import { $FlushInfo$FinishedCallback$$Type } from "icyllis.arc3d.engine.FlushInfo$FinishedCallback"
import { $Thread } from "java.lang.Thread"
import { $BackendFormat, $BackendFormat$$Type } from "icyllis.arc3d.engine.BackendFormat"
import { $Logger } from "org.slf4j.Logger"
import { $Device$Stats } from "icyllis.arc3d.engine.Device$Stats"
import { $ShaderCodeSource } from "icyllis.arc3d.granite.ShaderCodeSource"
import { $RendererProvider } from "icyllis.arc3d.granite.RendererProvider"
import { $ResourceProvider } from "icyllis.arc3d.engine.ResourceProvider"
import { $Set$$Type } from "java.util.Set"
import { $GlobalResourceCache } from "icyllis.arc3d.engine.GlobalResourceCache"
import { $GpuRenderTarget, $GpuRenderTarget$$Type } from "icyllis.arc3d.engine.GpuRenderTarget"
import { $Engine } from "icyllis.arc3d.engine.Engine"
import { $ImageProxyView$$Type } from "icyllis.arc3d.engine.ImageProxyView"
import { $Context$$Type } from "icyllis.arc3d.engine.Context"
import { $ShaderCompiler } from "icyllis.arc3d.compiler.ShaderCompiler"
import { $BackendRenderTarget$$Type } from "icyllis.arc3d.engine.BackendRenderTarget"
import { $OpsRenderPass } from "icyllis.arc3d.engine.OpsRenderPass"
import { $Caps } from "icyllis.arc3d.engine.Caps"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $SurfaceProxy$$Type } from "icyllis.arc3d.engine.SurfaceProxy"

export class $Device implements $Engine {
public "addFinishedCallback"(finishedCallback0: $FlushInfo$FinishedCallback$$Type): void
public "checkFence"(long0: long): boolean
public "checkFinishedCallbacks"(): void
public "checkOutOfMemory"(): boolean
public static "colorTypeClampType"(ct: integer): integer
public static "colorTypeEncoding"(ct: integer): integer
public static "colorTypeToPublic"(ct: integer): integer
/** @deprecated */
public "createRenderTarget"(numColorTargets: integer, colorTargets: $Image$$Type[], resolveTargets: $Image$$Type[], mipLevels: integer[], depthStencilTarget: $Image$$Type, surfaceFlags: integer): $GpuRenderTarget
public "deleteFence"(long0: long): void
public "disconnect"(cleanup: boolean): void
public "getBackend"(): integer
public "getCaps"(): $Caps
public "getCompressedBackendFormat"(compressionType: integer): $BackendFormat
public "getContextID"(): integer
public "getDefaultBackendFormat"(colorType: integer, renderable: boolean): $BackendFormat
public "getExecutingThread"(): $Thread
public "getGlobalResourceCache"(): $GlobalResourceCache
/** @deprecated */
public "getIndexPool"(): $GpuBufferPool
/** @deprecated */
public "getInstancePool"(): $GpuBufferPool
public "getLogger"(): $Logger
public "getMaxSurfaceSampleCount"(colorType: integer): integer
/** @deprecated */
public "getOpsRenderPass"(writeView: $ImageProxyView$$Type, contentBounds: $Rect2i$$Type, colorOps: byte, stencilOps: byte, clearColor: float[], sampledTextures: $Set$$Type<$SurfaceProxy$$Type>, pipelineFlags: integer): $OpsRenderPass
public "getOptions"(): $ContextOptions
public "getRendererProvider"(): $RendererProvider
public "getShaderCodeSource"(): $ShaderCodeSource
public "getShaderCompiler"(): $ShaderCompiler
public "getStats"(): $Device$Stats
/** @deprecated */
public "getVertexPool"(): $GpuBufferPool
public "insertFence"(): long
public "isDeviceLost"(): boolean
public "isDiscarded"(): boolean
public "isOnExecutingThread"(): boolean
public "isValid"(): boolean
public "makeResourceProvider"(context0: $Context$$Type, long1: long): $ResourceProvider
public "markContextDirty"(state: integer): void
public static "maskFormatBytesPerPixel"(maskFormat: integer): integer
public static "maskFormatToColorType"(maskFormat: integer): integer
/** @deprecated */
public "onWrapBackendRenderTarget"(backendRenderTarget0: $BackendRenderTarget$$Type): $GpuRenderTarget
/** @deprecated */
public "resolveRenderTarget"(renderTarget: $GpuRenderTarget$$Type, resolveLeft: integer, resolveTop: integer, resolveRight: integer, resolveBottom: integer): void
public "waitForQueue"(): void
/** @deprecated */
public "wrapBackendRenderTarget"(backendRenderTarget: $BackendRenderTarget$$Type): $GpuRenderTarget
/** @deprecated */
public "wrapGLDefaultFramebuffer"(width: integer, height: integer, sampleCount: integer, depthBits: integer, stencilBits: integer, format: $BackendFormat$$Type): $GpuRenderTarget
/** @deprecated */
public "wrapRenderableBackendTexture"(texture: $BackendImage$$Type, sampleCount: integer, ownership: boolean): $GpuRenderTarget
get "backend"(): integer
get "caps"(): $Caps
get "contextID"(): integer
get "executingThread"(): $Thread
get "globalResourceCache"(): $GlobalResourceCache
get "indexPool"(): $GpuBufferPool
get "instancePool"(): $GpuBufferPool
get "logger"(): $Logger
get "options"(): $ContextOptions
get "rendererProvider"(): $RendererProvider
get "shaderCodeSource"(): $ShaderCodeSource
get "shaderCompiler"(): $ShaderCompiler
get "stats"(): $Device$Stats
get "vertexPool"(): $GpuBufferPool
get "deviceLost"(): boolean
get "discarded"(): boolean
get "onExecutingThread"(): boolean
get "valid"(): boolean
}
}

declare module "icyllis.arc3d.engine.IUniqueKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUniqueKey {
"copy"(): $IUniqueKey
"equals"(object0: any): boolean
"hashCode"(): integer
}

export namespace $IUniqueKey {
const probejs$$marker: never
}
export abstract class $IUniqueKey$$Static implements $IUniqueKey {
}
}

declare module "icyllis.arc3d.engine.ImageViewProxy$LazyCallbackResult" {
import { $Image, $Image$$Type } from "icyllis.arc3d.engine.Image"

export class $ImageViewProxy$LazyCallbackResult {
constructor()
constructor(image: $Image$$Type)
constructor(image: $Image$$Type, releaseCallback: boolean)

get "mImage"(): $Image
set "mImage"(value: $Image$$Type)
get "mReleaseCallback"(): boolean
set "mReleaseCallback"(value: boolean)
}
}

declare module "icyllis.arc3d.engine.Task" {
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"
import { $CommandBuffer$$Type } from "icyllis.arc3d.engine.CommandBuffer"

export interface $Task {
"execute"(immediateContext0: $ImmediateContext$$Type, commandBuffer1: $CommandBuffer$$Type): integer
}

export namespace $Task {
const RESULT_DISCARD: integer
const RESULT_FAILURE: integer
const RESULT_SUCCESS: integer
}
export abstract class $Task$$Static implements $Task {
static readonly "RESULT_DISCARD": integer
static readonly "RESULT_FAILURE": integer
static readonly "RESULT_SUCCESS": integer

}
}

declare module "icyllis.arc3d.engine.BackendRenderTarget" {
import { $VulkanImageDesc$$Type } from "icyllis.arc3d.vulkan.VulkanImageDesc"
import { $GLFramebufferInfo$$Type } from "icyllis.arc3d.opengl.GLFramebufferInfo"
import { $BackendFormat } from "icyllis.arc3d.engine.BackendFormat"

/** @deprecated */
export class $BackendRenderTarget {
constructor(width: integer, height: integer)

public "getBackend"(): integer
public "getBackendFormat"(): $BackendFormat
public "getDepthBits"(): integer
public "getGLFramebufferInfo"(info: $GLFramebufferInfo$$Type): boolean
public "getHeight"(): integer
public "getSampleCount"(): integer
public "getStencilBits"(): integer
public "getVkImageInfo"(info: $VulkanImageDesc$$Type): boolean
public "getWidth"(): integer
public "isProtected"(): boolean
public "setVkImageLayout"(layout: integer): void
public "setVkQueueFamilyIndex"(queueFamilyIndex: integer): void
get "backend"(): integer
get "backendFormat"(): $BackendFormat
get "depthBits"(): integer
get "height"(): integer
get "sampleCount"(): integer
get "stencilBits"(): integer
get "width"(): integer
get "protected"(): boolean
set "vkImageLayout"(value: integer)
set "vkQueueFamilyIndex"(value: integer)
}
}

declare module "icyllis.arc3d.engine.GlobalResourceCache$Stats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GlobalResourceCache$Stats {
constructor()

public "incNumCompilationFailures"(): void
public "incNumCompilationSuccesses"(): void
public "incNumInlineCompilationFailures"(): void
public "incNumPartialCompilationSuccesses"(): void
public "incNumPreCompilationFailures"(): void
public "incShaderCompilations"(): void
public "numCompilationFailures"(): integer
public "numCompilationSuccesses"(): integer
public "numInlineCompilationFailures"(): integer
public "numPartialCompilationSuccesses"(): integer
public "numPreCompilationFailures"(): integer
public "shaderCompilations"(): integer
}
}

declare module "icyllis.arc3d.engine.ShaderCaps" {
import { $ShaderCaps as $ShaderCaps$0 } from "icyllis.arc3d.compiler.ShaderCaps"
import { $ContextOptions$$Type } from "icyllis.arc3d.engine.ContextOptions"

export class $ShaderCaps extends $ShaderCaps$0 {
static readonly "Automatic_AdvBlendEqInteraction": integer
static readonly "GeneralEnable_AdvBlendEqInteraction": integer
static readonly "NotSupported_AdvBlendEqInteraction": integer

constructor()

public "applyOptionsOverrides"(options: $ContextOptions$$Type): void
public "mustEnableAdvBlendEqs"(): boolean
get "mAdvBlendEqInteraction"(): integer
set "mAdvBlendEqInteraction"(value: integer)
get "mAvoidDfDxForGradientsWhenPossible"(): boolean
set "mAvoidDfDxForGradientsWhenPossible"(value: boolean)
get "mBitManipulationSupport"(): boolean
set "mBitManipulationSupport"(value: boolean)
get "mColorSpaceMathNeedsFloat"(): boolean
set "mColorSpaceMathNeedsFloat"(value: boolean)
get "mDualSourceBlendingSupport"(): boolean
set "mDualSourceBlendingSupport"(value: boolean)
get "mInfinitySupport"(): boolean
set "mInfinitySupport"(value: boolean)
get "mMaxFragmentSamplers"(): integer
set "mMaxFragmentSamplers"(value: integer)
get "mMustObfuscateUniformColor"(): boolean
set "mMustObfuscateUniformColor"(value: boolean)
get "mMustWriteToFragColor"(): boolean
set "mMustWriteToFragColor"(value: boolean)
get "mNoPerspectiveInterpolationSupport"(): boolean
set "mNoPerspectiveInterpolationSupport"(value: boolean)
get "mNonConstantArrayIndexSupport"(): boolean
set "mNonConstantArrayIndexSupport"(value: boolean)
get "mPreferFlatInterpolation"(): boolean
set "mPreferFlatInterpolation"(value: boolean)
get "mReducedShaderMode"(): boolean
set "mReducedShaderMode"(value: boolean)
get "mRequiresLocalOutputColorForFBFetch"(): boolean
set "mRequiresLocalOutputColorForFBFetch"(value: boolean)
get "mSecondaryOutputExtension"(): string
set "mSecondaryOutputExtension"(value: string)
get "mTextureQueryLod"(): boolean
set "mTextureQueryLod"(value: boolean)
get "mUseBlockMemberOffset"(): boolean
set "mUseBlockMemberOffset"(value: boolean)
get "mUsePrecisionModifiers"(): boolean
set "mUsePrecisionModifiers"(value: boolean)
get "mUseUniformBinding"(): boolean
set "mUseUniformBinding"(value: boolean)
get "mUseVaryingLocation"(): boolean
set "mUseVaryingLocation"(value: boolean)
get "mVertexIDSupport"(): boolean
set "mVertexIDSupport"(value: boolean)
}
}

declare module "icyllis.arc3d.engine.ImageProxyView" {
import { $ImageViewProxy, $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $ImageProxyView implements $AutoCloseable {
constructor(proxy: $ImageViewProxy$$Type)
constructor(proxy: $ImageViewProxy$$Type, origin: integer, swizzle: short)

public "close"(): void
public "concat"(swizzle: short): void
public "detachProxy"(): $ImageViewProxy
public "getHeight"(): integer
public "getOrigin"(): integer
public "getProxy"(): $ImageViewProxy
public "getSwizzle"(): short
public "getWidth"(): integer
public "isMipmapped"(): boolean
public "refProxy"(): $ImageViewProxy
public "reset"(): void
get "height"(): integer
get "origin"(): integer
get "proxy"(): $ImageViewProxy
get "swizzle"(): short
get "width"(): integer
get "mipmapped"(): boolean
}
}

declare module "icyllis.arc3d.engine.BufferViewInfo" {
import { $Buffer, $Buffer$$Type } from "icyllis.arc3d.engine.Buffer"

export class $BufferViewInfo {
constructor()

public "equals"(o: $BufferViewInfo$$Type): boolean
public "isValid"(): boolean
public "set"(o: $BufferViewInfo$$Type): void
get "mBuffer"(): $Buffer
set "mBuffer"(value: $Buffer$$Type)
get "mOffset"(): long
set "mOffset"(value: long)
get "mSize"(): long
set "mSize"(value: long)
get "valid"(): boolean
}
}

declare module "icyllis.arc3d.engine.BackendFormat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** @deprecated */
export class $BackendFormat {
constructor()

public "getBackend"(): integer
public "getBytesPerBlock"(): integer
public "getChannelFlags"(): integer
public "getCompressionType"(): integer
public "getDepthBits"(): integer
public "getFormatKey"(): integer
public "getGLFormat"(): integer
public "getStencilBits"(): integer
public "getVkFormat"(): integer
public "isCompressed"(): boolean
public "isExternal"(): boolean
public "isSRGB"(): boolean
get "backend"(): integer
get "bytesPerBlock"(): integer
get "channelFlags"(): integer
get "compressionType"(): integer
get "depthBits"(): integer
get "formatKey"(): integer
get "gLFormat"(): integer
get "stencilBits"(): integer
get "vkFormat"(): integer
get "compressed"(): boolean
get "external"(): boolean
get "sRGB"(): boolean
}
}

declare module "icyllis.arc3d.engine.Buffer" {
import { $Resource } from "icyllis.arc3d.engine.Resource"

export class $Buffer extends $Resource {
static readonly "kRead_MapMode": integer
static readonly "kWriteDiscard_MapMode": integer

public "getMappedBuffer"(): long
public "getSize"(): long
public "getUsage"(): integer
public "isMapped"(): boolean
public "map"(): long
public "map"(offset: long, size: long): long
public "unmap"(): void
public "unmap"(size: long): void
public "updateData"(offset: integer, size: integer, data: long): boolean
get "mappedBuffer"(): long
get "size"(): long
get "usage"(): integer
get "mapped"(): boolean
}
}

declare module "icyllis.arc3d.engine.KeyBuilder" {
import { $Key } from "icyllis.arc3d.engine.Key"

export class $KeyBuilder extends $Key {
constructor()
constructor(other: $KeyBuilder$$Type)

public "addBits"(numBits: integer, value: integer, label: string): void
public "addBool"(b: boolean, label: string): void
public "addInt"(v: integer): void
public "addInt32"(v: integer, label: string): void
public "addInts"(v: integer[], off: integer, len: integer): void
public "clear"(): void
public "flush"(): void
public "toStorageKey"(): $Key
public "trim"(): void
}
}

declare module "icyllis.arc3d.engine.ReleaseCallback" {
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"

export class $ReleaseCallback extends $RefCnt {
constructor()

public "invoke"(): void
}
}

declare module "icyllis.arc3d.engine.DepthStencilSettings" {
import { $DepthStencilSettings$Face, $DepthStencilSettings$Face$$Type } from "icyllis.arc3d.engine.DepthStencilSettings$Face"

export class $DepthStencilSettings {
static readonly "COMPARE_OP_ALWAYS": byte
static readonly "COMPARE_OP_EQUAL": byte
static readonly "COMPARE_OP_GEQUAL": byte
static readonly "COMPARE_OP_GREATER": byte
static readonly "COMPARE_OP_LEQUAL": byte
static readonly "COMPARE_OP_LESS": byte
static readonly "COMPARE_OP_NEVER": byte
static readonly "COMPARE_OP_NOTEQUAL": byte
static readonly "STENCIL_OP_DEC_CLAMP": byte
static readonly "STENCIL_OP_DEC_WRAP": byte
static readonly "STENCIL_OP_INC_CLAMP": byte
static readonly "STENCIL_OP_INC_WRAP": byte
static readonly "STENCIL_OP_INVERT": byte
static readonly "STENCIL_OP_KEEP": byte
static readonly "STENCIL_OP_REPLACE": byte
static readonly "STENCIL_OP_ZERO": byte
readonly "mBackFace": $DepthStencilSettings$Face
readonly "mDepthCompareOp": byte
readonly "mDepthTest": boolean
readonly "mDepthWrite": boolean
readonly "mFrontFace": $DepthStencilSettings$Face
readonly "mStencilTest": boolean

constructor(frontFace: $DepthStencilSettings$Face$$Type, backFace: $DepthStencilSettings$Face$$Type, depthCompareOp: byte, depthWrite: boolean, stencilTest: boolean, depthTest: boolean)

public "isTwoSided"(): boolean
get "twoSided"(): boolean
}
}

declare module "icyllis.arc3d.engine.PipelineDesc$UniformBlockInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PipelineDesc$UniformBlockInfo {
readonly "mBinding": integer
readonly "mBlockName": string
readonly "mVisibility": integer

constructor(visibility: integer, binding: integer, blockName: string)

}
}

declare module "icyllis.arc3d.engine.BufferImageCopyData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BufferImageCopyData {
constructor()
constructor(bufferOffset: long, bufferRowBytes: long, mipLevel: integer, arraySlice: integer, numSlices: integer, x: integer, y: integer, z: integer, width: integer, height: integer, depth: integer)

get "mArraySlice"(): integer
set "mArraySlice"(value: integer)
get "mBufferOffset"(): long
set "mBufferOffset"(value: long)
get "mBufferRowBytes"(): long
set "mBufferRowBytes"(value: long)
get "mDepth"(): integer
set "mDepth"(value: integer)
get "mHeight"(): integer
set "mHeight"(value: integer)
get "mMipLevel"(): integer
set "mMipLevel"(value: integer)
get "mNumSlices"(): integer
set "mNumSlices"(value: integer)
get "mWidth"(): integer
set "mWidth"(value: integer)
get "mX"(): integer
set "mX"(value: integer)
get "mY"(): integer
set "mY"(value: integer)
get "mZ"(): integer
set "mZ"(value: integer)
}
}

declare module "icyllis.arc3d.engine.Caps$BlendEquationSupport" {
import { $Enum } from "java.lang.Enum"

export class $Caps$BlendEquationSupport extends $Enum<$Caps$BlendEquationSupport> {
static readonly "ADVANCED": $Caps$BlendEquationSupport
static readonly "ADVANCED_COHERENT": $Caps$BlendEquationSupport
static readonly "BASIC": $Caps$BlendEquationSupport

public static "valueOf"(name: string): $Caps$BlendEquationSupport
public static "values"(): $Caps$BlendEquationSupport[]
}
}

declare module "icyllis.arc3d.engine.ShaderVar" {
import { $StringBuilder$$Type } from "java.lang.StringBuilder"

export class $ShaderVar {
static readonly "kInOut_TypeModifier": byte
static readonly "kIn_TypeModifier": byte
static readonly "kNonArray": integer
static readonly "kNone_TypeModifier": byte
static readonly "kOut_TypeModifier": byte
static readonly "kUniform_TypeModifier": byte

constructor()
constructor(name: string, type: byte, typeModifier: byte, arraySize: integer, layoutQualifier: string, extraModifier: string)
constructor(name: string, type: byte, typeModifier: byte)
constructor(name: string, type: byte, arraySize: integer)
constructor(name: string, type: byte)
constructor(name: string, type: byte, typeModifier: byte, arraySize: integer)

public "addLayoutQualifier"(layoutQualifier: string): void
public "addLayoutQualifier"(qualifier: string, value: integer): void
public "addModifier"(modifier: string): void
public "appendDecl"(out: $StringBuilder$$Type): void
public "getArraySize"(): integer
public "getName"(): string
public "getType"(): byte
public "getTypeModifier"(): byte
public "isArray"(): boolean
public "set"(name: string, type: byte): void
public "setTypeModifier"(typeModifier: byte): void
get "arraySize"(): integer
get "name"(): string
get "type"(): byte
get "typeModifier"(): byte
get "array"(): boolean
set "typeModifier"(value: byte)
}
}

declare module "icyllis.arc3d.engine.UniqueID" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UniqueID {
constructor()

}
}

declare module "icyllis.arc3d.engine.ImmediateContext" {
import { $Context } from "icyllis.arc3d.engine.Context"
import { $QueueManager, $QueueManager$$Type } from "icyllis.arc3d.engine.QueueManager"
import { $Device$$Type } from "icyllis.arc3d.engine.Device"
import { $CommandBuffer } from "icyllis.arc3d.engine.CommandBuffer"
import { $Task$$Type } from "icyllis.arc3d.engine.Task"

export class $ImmediateContext extends $Context {
constructor(device: $Device$$Type, queueManager: $QueueManager$$Type)

public "addTask"(task: $Task$$Type): boolean
public "checkForFinishedWork"(): void
public "currentCommandBuffer"(): $CommandBuffer
public "getQueueManager"(): $QueueManager
public "init"(): boolean
public "isDiscarded"(): boolean
public "resetContext"(state: integer): void
public "submit"(): boolean
get "queueManager"(): $QueueManager
get "discarded"(): boolean
}
}

declare module "icyllis.arc3d.engine.UploadBufferManager" {
import { $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $List$$Type } from "java.util.List"
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $BufferViewInfo$$Type } from "icyllis.arc3d.engine.BufferViewInfo"

export class $UploadBufferManager {
static readonly "SMALL_BUFFER_SIZE": long

constructor(resourceProvider: $ResourceProvider$$Type)

public "flush"(outResourceRefs: $List$$Type<$Resource$$Type>): void
public static "getLargeBufferSize"(minBytes: long): long
public "getUploadPointer"(requiredBytes: long, requiredAlignment: long, outInfo: $BufferViewInfo$$Type): long
}
}

declare module "icyllis.arc3d.engine.VertexInputLayout" {
import { $VertexInputLayout$AttributeSet$$Type } from "icyllis.arc3d.engine.VertexInputLayout$AttributeSet"
import { $VertexInputLayout$Attribute } from "icyllis.arc3d.engine.VertexInputLayout$Attribute"
import { $Iterator } from "java.util.Iterator"

export class $VertexInputLayout {
static readonly "INPUT_RATE_INSTANCE": integer
static readonly "INPUT_RATE_VERTEX": integer

constructor(...attributeSets: $VertexInputLayout$AttributeSet$$Type[])
constructor(attributeSets: $VertexInputLayout$AttributeSet$$Type[], masks: integer[])

public "getAttributeCount"(binding: integer): integer
public "getAttributes"(binding: integer): $Iterator<$VertexInputLayout$Attribute>
public "getBindingCount"(): integer
public "getInputRate"(binding: integer): integer
public "getLocationCount"(binding: integer): integer
public "getStride"(binding: integer): integer
get "bindingCount"(): integer
}
}

declare module "icyllis.arc3d.engine.FramebufferDesc$ColorAttachmentDesc" {
import { $UniqueID } from "icyllis.arc3d.engine.UniqueID"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Image, $Image$$Type } from "icyllis.arc3d.engine.Image"

export class $FramebufferDesc$ColorAttachmentDesc {
readonly "mArraySlice": integer
readonly "mAttachment": $WeakReference<$Image>
readonly "mAttachmentID": $UniqueID
readonly "mMipLevel": integer
readonly "mResolveAttachment": $WeakReference<$Image>
readonly "mResolveAttachmentID": $UniqueID

constructor()
constructor(attachment: $Image$$Type, resolveAttachment: $Image$$Type, mipLevel: integer, arraySlice: integer)

public "isStale"(): boolean
get "stale"(): boolean
}
}

declare module "icyllis.arc3d.engine.SurfaceProxy" {
import { $GpuSurface } from "icyllis.arc3d.engine.GpuSurface"
import { $ImageViewProxy } from "icyllis.arc3d.engine.ImageViewProxy"
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $RenderTargetProxy } from "icyllis.arc3d.engine.RenderTargetProxy"
import { $UniqueID } from "icyllis.arc3d.engine.UniqueID"
import { $GpuRenderTarget } from "icyllis.arc3d.engine.GpuRenderTarget"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"
import { $BackendFormat } from "icyllis.arc3d.engine.BackendFormat"
import { $Image } from "icyllis.arc3d.engine.Image"
import { $IUniqueKey } from "icyllis.arc3d.engine.IUniqueKey"

/** @deprecated */
export class $SurfaceProxy extends $RefCnt {
public "asImageProxy"(): $ImageViewProxy
public "asRenderTargetProxy"(): $RenderTargetProxy
public "clear"(): void
public "doLazyInstantiation"(resourceProvider0: $ResourceProvider$$Type): boolean
public "getBackendFormat"(): $BackendFormat
public "getBackingHeight"(): integer
public "getBackingUniqueID"(): $UniqueID
public "getBackingWidth"(): integer
public "getGpuImage"(): $Image
public "getGpuRenderTarget"(): $GpuRenderTarget
public "getGpuSurface"(): $GpuSurface
public "getHeight"(): integer
public "getMemorySize"(): long
public "getSampleCount"(): integer
public "getTaskTargetCount"(): integer
public "getUniqueID"(): $UniqueID
public "getUniqueKey"(): $IUniqueKey
public "getWidth"(): integer
public "instantiate"(resourceProvider0: $ResourceProvider$$Type): boolean
public "isBackingWrapped"(): boolean
public "isBudgeted"(): boolean
public "isDeferredListTarget"(): boolean
public "isExact"(): boolean
public "isInstantiated"(): boolean
public "isLazy"(): boolean
public "isLazyMost"(): boolean
public "isManualMSAAResolve"(): boolean
public "isProtected"(): boolean
public "isReadOnly"(): boolean
public "isUsedAsTaskTarget"(): void
public "isUserExact"(): boolean
public "setIsDeferredListTarget"(): void
public "shouldSkipAllocator"(): boolean
public "wrapsGLDefaultFB"(): boolean
public "wrapsVkSecondaryCB"(): boolean
get "backendFormat"(): $BackendFormat
get "backingHeight"(): integer
get "backingUniqueID"(): $UniqueID
get "backingWidth"(): integer
get "gpuImage"(): $Image
get "gpuRenderTarget"(): $GpuRenderTarget
get "gpuSurface"(): $GpuSurface
get "height"(): integer
get "memorySize"(): long
get "sampleCount"(): integer
get "taskTargetCount"(): integer
get "uniqueID"(): $UniqueID
get "uniqueKey"(): $IUniqueKey
get "width"(): integer
get "backingWrapped"(): boolean
get "budgeted"(): boolean
get "deferredListTarget"(): boolean
get "exact"(): boolean
get "instantiated"(): boolean
get "lazy"(): boolean
get "lazyMost"(): boolean
get "manualMSAAResolve"(): boolean
get "protected"(): boolean
get "readOnly"(): boolean
get "usedAsTaskTarget"(): void
get "userExact"(): boolean
}
}

declare module "icyllis.arc3d.engine.RenderPassDesc$ColorAttachmentDesc" {
import { $ImageDesc, $ImageDesc$$Type } from "icyllis.arc3d.engine.ImageDesc"

export class $RenderPassDesc$ColorAttachmentDesc {
constructor()

get "mDesc"(): $ImageDesc
set "mDesc"(value: $ImageDesc$$Type)
get "mLoadOp"(): byte
set "mLoadOp"(value: byte)
get "mResolveDesc"(): $ImageDesc
set "mResolveDesc"(value: $ImageDesc$$Type)
get "mStoreOp"(): byte
set "mStoreOp"(value: byte)
}
}

declare module "icyllis.arc3d.engine.GpuRenderTarget" {
import { $GpuSurface } from "icyllis.arc3d.engine.GpuSurface"
import { $BackendRenderTarget } from "icyllis.arc3d.engine.BackendRenderTarget"
import { $Image } from "icyllis.arc3d.engine.Image"

/** @deprecated */
export class $GpuRenderTarget extends $GpuSurface {
public "getBackendRenderTarget"(): $BackendRenderTarget
public "getColorAttachment"(int0: integer): $Image
public "getColorAttachment"(): $Image
public "getDepthStencilAttachment"(): $Image
public "getResolveAttachment"(): $Image
public "getResolveAttachment"(int0: integer): $Image
public "numColorTargets"(): integer
get "backendRenderTarget"(): $BackendRenderTarget
get "colorAttachment"(): $Image
get "depthStencilAttachment"(): $Image
get "resolveAttachment"(): $Image
}
}

declare module "icyllis.arc3d.engine.ManagedResource" {
import { $Device$$Type } from "icyllis.arc3d.engine.Device"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"

export class $ManagedResource extends $RefCnt {
constructor(device: $Device$$Type)

}
}

declare module "icyllis.arc3d.engine.BlendInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlendInfo {
static readonly "BLEND_CLEAR": $BlendInfo
static readonly "BLEND_DST": $BlendInfo
static readonly "BLEND_DST_ATOP": $BlendInfo
static readonly "BLEND_DST_IN": $BlendInfo
static readonly "BLEND_DST_OUT": $BlendInfo
static readonly "BLEND_DST_OVER": $BlendInfo
static readonly "BLEND_MINUS": $BlendInfo
static readonly "BLEND_MODULATE": $BlendInfo
static readonly "BLEND_PLUS": $BlendInfo
static readonly "BLEND_SCREEN": $BlendInfo
static readonly "BLEND_SRC": $BlendInfo
static readonly "BLEND_SRC_ATOP": $BlendInfo
static readonly "BLEND_SRC_IN": $BlendInfo
static readonly "BLEND_SRC_OUT": $BlendInfo
static readonly "BLEND_SRC_OVER": $BlendInfo
static readonly "BLEND_XOR": $BlendInfo
static readonly "EQUATION_ADD": byte
static readonly "EQUATION_COLORBURN": byte
static readonly "EQUATION_COLORDODGE": byte
static readonly "EQUATION_DARKEN": byte
static readonly "EQUATION_DIFFERENCE": byte
static readonly "EQUATION_EXCLUSION": byte
static readonly "EQUATION_HARDLIGHT": byte
static readonly "EQUATION_HSL_COLOR": byte
static readonly "EQUATION_HSL_HUE": byte
static readonly "EQUATION_HSL_LUMINOSITY": byte
static readonly "EQUATION_HSL_SATURATION": byte
static readonly "EQUATION_LIGHTEN": byte
static readonly "EQUATION_MULTIPLY": byte
static readonly "EQUATION_OVERLAY": byte
static readonly "EQUATION_REVERSE_SUBTRACT": byte
static readonly "EQUATION_SCREEN": byte
static readonly "EQUATION_SOFTLIGHT": byte
static readonly "EQUATION_SUBTRACT": byte
static readonly "EQUATION_UNKNOWN": byte
static readonly "FACTOR_CONSTANT_ALPHA": byte
static readonly "FACTOR_CONSTANT_COLOR": byte
static readonly "FACTOR_DST_ALPHA": byte
static readonly "FACTOR_DST_COLOR": byte
static readonly "FACTOR_ONE": byte
static readonly "FACTOR_ONE_MINUS_CONSTANT_ALPHA": byte
static readonly "FACTOR_ONE_MINUS_CONSTANT_COLOR": byte
static readonly "FACTOR_ONE_MINUS_DST_ALPHA": byte
static readonly "FACTOR_ONE_MINUS_DST_COLOR": byte
static readonly "FACTOR_ONE_MINUS_SRC1_ALPHA": byte
static readonly "FACTOR_ONE_MINUS_SRC1_COLOR": byte
static readonly "FACTOR_ONE_MINUS_SRC_ALPHA": byte
static readonly "FACTOR_ONE_MINUS_SRC_COLOR": byte
static readonly "FACTOR_SRC1_ALPHA": byte
static readonly "FACTOR_SRC1_COLOR": byte
static readonly "FACTOR_SRC_ALPHA": byte
static readonly "FACTOR_SRC_ALPHA_SATURATE": byte
static readonly "FACTOR_SRC_COLOR": byte
static readonly "FACTOR_UNKNOWN": byte
static readonly "FACTOR_ZERO": byte
readonly "mColorWrite": boolean
readonly "mDstFactor": byte
readonly "mEquation": byte
readonly "mSrcFactor": byte

constructor(equation: byte, srcFactor: byte, dstFactor: byte, colorWrite: boolean)

public static "blendCoeffRefsDst"(factor: byte): boolean
public static "blendCoeffRefsSrc"(factor: byte): boolean
public static "blendCoeffRefsSrc1"(factor: byte): boolean
public static "blendCoeffsUseDstColor"(srcFactor: byte, dstFactor: byte, srcColorIsOpaque: boolean): boolean
public static "blendCoeffsUseSrcColor"(srcFactor: byte, dstFactor: byte): boolean
public static "blendModifiesDst"(equation: byte, srcFactor: byte, dstFactor: byte): boolean
public "blendShouldDisable"(): boolean
}
}

declare module "icyllis.arc3d.engine.RenderTargetProxy" {
import { $SurfaceProxy$LazyInstantiateCallback$$Type } from "icyllis.arc3d.engine.SurfaceProxy$LazyInstantiateCallback"
import { $Rect2ic } from "icyllis.arc3d.core.Rect2ic"
import { $GpuRenderTarget$$Type } from "icyllis.arc3d.engine.GpuRenderTarget"
import { $SurfaceProxy } from "icyllis.arc3d.engine.SurfaceProxy"
import { $BackendFormat$$Type } from "icyllis.arc3d.engine.BackendFormat"

/** @deprecated */
export class $RenderTargetProxy extends $SurfaceProxy {
constructor(format: $BackendFormat$$Type, width: integer, height: integer, sampleCount: integer, surfaceFlags: integer)
constructor(renderTarget: $GpuRenderTarget$$Type, surfaceFlags: integer)
constructor(format: $BackendFormat$$Type, width: integer, height: integer, sampleCount: integer, surfaceFlags: integer, callback: $SurfaceProxy$LazyInstantiateCallback$$Type)

public "getResolveRect"(): $Rect2ic
public "needsResolve"(): boolean
public "setResolveRect"(left: integer, top: integer, right: integer, bottom: integer): void
get "resolveRect"(): $Rect2ic
}
}

declare module "icyllis.arc3d.engine.CommandBuffer" {
import { $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $GraphicsPipeline$$Type } from "icyllis.arc3d.engine.GraphicsPipeline"
import { $BufferImageCopyData$$Type } from "icyllis.arc3d.engine.BufferImageCopyData"
import { $RenderPassDesc$$Type } from "icyllis.arc3d.engine.RenderPassDesc"
import { $Buffer$$Type } from "icyllis.arc3d.engine.Buffer"
import { $FramebufferDesc$$Type } from "icyllis.arc3d.engine.FramebufferDesc"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Sampler$$Type } from "icyllis.arc3d.engine.Sampler"
import { $Image$$Type } from "icyllis.arc3d.engine.Image"
import { $ManagedResource$$Type } from "icyllis.arc3d.engine.ManagedResource"

export class $CommandBuffer {
constructor()

public "beginRenderPass"(renderPassDesc0: $RenderPassDesc$$Type, framebufferDesc1: $FramebufferDesc$$Type, rect2ic2: $Rect2ic$$Type, float3s: float[], float4: float, int5: integer): boolean
public "bindGraphicsPipeline"(graphicsPipeline0: $GraphicsPipeline$$Type): boolean
public "bindIndexBuffer"(int0: integer, buffer1: $Buffer$$Type, long2: long): void
public "bindTextureSampler"(int0: integer, image1: $Image$$Type, sampler2: $Sampler$$Type, short3: short): void
public "bindUniformBuffer"(int0: integer, buffer1: $Buffer$$Type, long2: long, long3: long): void
public "bindVertexBuffer"(int0: integer, buffer1: $Buffer$$Type, long2: long): void
public "copyBuffer"(srcBuffer: $Buffer$$Type, dstBuffer: $Buffer$$Type, srcOffset: long, dstOffset: long, size: long): boolean
public "copyBufferToImage"(srcBuffer: $Buffer$$Type, dstImage: $Image$$Type, srcColorType: integer, dstColorType: integer, copyData: $BufferImageCopyData$$Type[]): boolean
public "copyImage"(srcImage: $Image$$Type, srcL: integer, srcT: integer, srcR: integer, srcB: integer, dstImage: $Image$$Type, dstX: integer, dstY: integer, mipLevel: integer): boolean
public "draw"(int0: integer, int1: integer): void
public "drawIndexed"(int0: integer, int1: integer, int2: integer): void
public "drawIndexedInstanced"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "drawInstanced"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "endRenderPass"(): void
public "setScissor"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "setViewport"(int0: integer, int1: integer, int2: integer, int3: integer): void
public "trackCommandBufferResource"(resource: $Resource$$Type): void
public "trackResource"(resource: $Resource$$Type): void
public "trackResource"(resource: $ManagedResource$$Type): void
}
}

declare module "icyllis.arc3d.engine.FramebufferDesc$DepthStencilAttachmentDesc" {
import { $UniqueID } from "icyllis.arc3d.engine.UniqueID"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $Image, $Image$$Type } from "icyllis.arc3d.engine.Image"

export class $FramebufferDesc$DepthStencilAttachmentDesc {
readonly "mAttachment": $WeakReference<$Image>
readonly "mAttachmentID": $UniqueID

constructor()
constructor(attachment: $Image$$Type)

public "isStale"(): boolean
get "stale"(): boolean
}
}

declare module "icyllis.arc3d.engine.Key" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Key {
static readonly "EMPTY": $Key

public "get"(i: integer): integer
public "isEmpty"(): boolean
public "size"(): integer
get "empty"(): boolean
}
}

declare module "icyllis.arc3d.engine.BackendImage" {
import { $ImageMutableState } from "icyllis.arc3d.engine.ImageMutableState"
import { $ImageDesc } from "icyllis.arc3d.engine.ImageDesc"
import { $BackendFormat } from "icyllis.arc3d.engine.BackendFormat"

export class $BackendImage {
public "getArraySize"(): integer
public "getBackend"(): integer
public "getBackendFormat"(): $BackendFormat
public "getDepth"(): integer
public "getDesc"(): $ImageDesc
public "getHeight"(): integer
public "getImageType"(): integer
public "getMipLevelCount"(): integer
public "getMutableState"(): $ImageMutableState
public "getWidth"(): integer
public "glTextureParametersModified"(): void
public "isExternal"(): boolean
public "isMipmapped"(): boolean
public "isProtected"(): boolean
public "isSameImage"(backendImage0: $BackendImage$$Type): boolean
public "setVkImageLayout"(layout: integer): void
public "setVkQueueFamilyIndex"(queueFamilyIndex: integer): void
get "arraySize"(): integer
get "backend"(): integer
get "backendFormat"(): $BackendFormat
get "depth"(): integer
get "desc"(): $ImageDesc
get "height"(): integer
get "imageType"(): integer
get "mipLevelCount"(): integer
get "mutableState"(): $ImageMutableState
get "width"(): integer
get "external"(): boolean
get "mipmapped"(): boolean
get "protected"(): boolean
set "vkImageLayout"(value: integer)
set "vkQueueFamilyIndex"(value: integer)
}
}

declare module "icyllis.arc3d.engine.FlushInfo$FinishedCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FlushInfo$FinishedCallback {
"onFinished"(boolean0: boolean): void
}

export namespace $FlushInfo$FinishedCallback {
const probejs$$marker: never
}
export abstract class $FlushInfo$FinishedCallback$$Static implements $FlushInfo$FinishedCallback {
}
}

declare module "icyllis.arc3d.engine.SamplerDesc" {
import { $IResourceKey } from "icyllis.arc3d.engine.IResourceKey"

export class $SamplerDesc implements $IResourceKey {
static readonly "ADDRESS_MODE_CLAMP_TO_BORDER": integer
static readonly "ADDRESS_MODE_CLAMP_TO_EDGE": integer
static readonly "ADDRESS_MODE_MIRRORED_REPEAT": integer
static readonly "ADDRESS_MODE_REPEAT": integer
static readonly "DEFAULT": $SamplerDesc
static readonly "FILTER_LINEAR": integer
static readonly "FILTER_NEAREST": integer
static readonly "MIPMAP_MODE_LINEAR": integer
static readonly "MIPMAP_MODE_NEAREST": integer
static readonly "MIPMAP_MODE_NONE": integer
static readonly "NEAREST": $SamplerDesc

public "copy"(): $SamplerDesc
public "getAddressModeX"(): integer
public "getAddressModeY"(): integer
public "getAddressModeZ"(): integer
public "getMagFilter"(): integer
public "getMaxAnisotropy"(): integer
public "getMinFilter"(): integer
public "getMipmapMode"(): integer
public "isAnisotropy"(): boolean
public "isMipmapped"(): boolean
public "isRepeated"(): boolean
public "isRepeatedX"(): boolean
public "isRepeatedY"(): boolean
public "isRepeatedZ"(): boolean
public static "make"(filter: integer): $SamplerDesc
public static "make"(magFilter: integer, minFilter: integer, mipmapMode: integer, addressModeX: integer, addressModeY: integer, addressModeZ: integer): $SamplerDesc
public static "make"(filter: integer, mipmap: integer, address: integer): $SamplerDesc
public static "make"(filter: integer, mipmap: integer): $SamplerDesc
public static "makeAnisotropy"(addressModeX: integer, addressModeY: integer, addressModeZ: integer, maxAnisotropy: integer, isMipmapped: boolean): $SamplerDesc
public "resetMipmapMode"(): $SamplerDesc
get "addressModeX"(): integer
get "addressModeY"(): integer
get "addressModeZ"(): integer
get "magFilter"(): integer
get "maxAnisotropy"(): integer
get "minFilter"(): integer
get "mipmapMode"(): integer
get "anisotropy"(): boolean
get "mipmapped"(): boolean
get "repeated"(): boolean
get "repeatedX"(): boolean
get "repeatedY"(): boolean
get "repeatedZ"(): boolean
}
}

declare module "icyllis.arc3d.engine.Sampler" {
import { $Resource } from "icyllis.arc3d.engine.Resource"

export class $Sampler extends $Resource {
}
}

declare module "icyllis.arc3d.engine.PipelineKey" {
import { $PipelineDesc, $PipelineDesc$$Type } from "icyllis.arc3d.engine.PipelineDesc"
import { $IUniqueKey } from "icyllis.arc3d.engine.IUniqueKey"

export class $PipelineKey implements $IUniqueKey {
constructor()

public "copy"(): $PipelineKey
public "equals"(object0: any): boolean
public "hashCode"(): integer
get "mPipelineDesc"(): $PipelineDesc
set "mPipelineDesc"(value: $PipelineDesc$$Type)
}
}

declare module "icyllis.arc3d.engine.Mesh" {
import { $Buffer$$Type } from "icyllis.arc3d.engine.Buffer"

/** @deprecated */
export interface $Mesh {
"getIndexCount"(): integer
"getInstanceCount"(): integer
"getInstanceSize"(): integer
"getVertexCount"(): integer
"getVertexSize"(): integer
"setIndexBuffer"(buffer: $Buffer$$Type, baseIndex: integer, actualIndexCount: integer): void
"setInstanceBuffer"(buffer: $Buffer$$Type, baseInstance: integer, actualInstanceCount: integer): void
"setVertexBuffer"(buffer: $Buffer$$Type, baseVertex: integer, actualVertexCount: integer): void
get "indexCount"(): integer
get "instanceCount"(): integer
get "instanceSize"(): integer
get "vertexCount"(): integer
get "vertexSize"(): integer
}

export namespace $Mesh {
const probejs$$marker: never
}
export abstract class $Mesh$$Static implements $Mesh {
}
}

declare module "icyllis.arc3d.engine.GraphicsPipeline" {
import { $Device$$Type } from "icyllis.arc3d.engine.Device"
import { $ManagedResource } from "icyllis.arc3d.engine.ManagedResource"

export class $GraphicsPipeline extends $ManagedResource {
constructor(device: $Device$$Type)

}
}

declare module "icyllis.arc3d.engine.Image" {
import { $ImageMutableState } from "icyllis.arc3d.engine.ImageMutableState"
import { $Resource } from "icyllis.arc3d.engine.Resource"
import { $ImageDesc } from "icyllis.arc3d.engine.ImageDesc"
import { $ReleaseCallback$$Type } from "icyllis.arc3d.engine.ReleaseCallback"

export class $Image extends $Resource {
public "getArraySize"(): integer
public "getDepth"(): integer
public "getDepthBits"(): integer
public "getDesc"(): $ImageDesc
public "getHeight"(): integer
public "getImageType"(): integer
public "getMipLevelCount"(): integer
public "getMutableState"(): $ImageMutableState
public "getSampleCount"(): integer
public "getStencilBits"(): integer
public "getWidth"(): integer
public "isMipmapped"(): boolean
public "isMipmapsDirty"(): boolean
public "isProtected"(): boolean
public "isReadOnly"(): boolean
public "isRenderable"(): boolean
public "isSampledImage"(): boolean
public "isStorageImage"(): boolean
public "setMipmapsDirty"(mipmapsDirty: boolean): void
public "setReleaseCallback"(callback: $ReleaseCallback$$Type): void
get "arraySize"(): integer
get "depth"(): integer
get "depthBits"(): integer
get "desc"(): $ImageDesc
get "height"(): integer
get "imageType"(): integer
get "mipLevelCount"(): integer
get "mutableState"(): $ImageMutableState
get "sampleCount"(): integer
get "stencilBits"(): integer
get "width"(): integer
get "mipmapped"(): boolean
get "mipmapsDirty"(): boolean
get "protected"(): boolean
get "readOnly"(): boolean
get "renderable"(): boolean
get "sampledImage"(): boolean
get "storageImage"(): boolean
set "mipmapsDirty"(value: boolean)
set "releaseCallback"(value: $ReleaseCallback$$Type)
}
}

declare module "icyllis.arc3d.engine.ImageMutableState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ImageMutableState {
constructor()

}
}

declare module "icyllis.arc3d.engine.RenderPassDesc" {
import { $RenderPassDesc$ColorAttachmentDesc } from "icyllis.arc3d.engine.RenderPassDesc$ColorAttachmentDesc"
import { $RenderPassDesc$DepthStencilAttachmentDesc } from "icyllis.arc3d.engine.RenderPassDesc$DepthStencilAttachmentDesc"

export class $RenderPassDesc {
readonly "mColorAttachments": $RenderPassDesc$ColorAttachmentDesc[]
readonly "mDepthStencilAttachment": $RenderPassDesc$DepthStencilAttachmentDesc

constructor()

get "mNumColorAttachments"(): integer
set "mNumColorAttachments"(value: integer)
get "mSampleCount"(): integer
set "mSampleCount"(value: integer)
}
}

declare module "icyllis.arc3d.engine.Engine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Engine {
}

export namespace $Engine {
const CLAMP_TYPE_AUTO: integer
const CLAMP_TYPE_MANUAL: integer
const CLAMP_TYPE_NONE: integer
const COLOR_ENCODING_FLOAT: integer
const COLOR_ENCODING_UNORM: integer
const COLOR_ENCODING_UNORM_PACK16: integer
const COLOR_ENCODING_UNORM_PACK32: integer
const COLOR_ENCODING_UNORM_SRGB: integer
const INVALID_RESOURCE_HANDLE: integer
const LAST_MASK_FORMAT: integer
const MASK_FORMAT_A565: integer
const MASK_FORMAT_A8: integer
const MASK_FORMAT_ARGB: integer
const MASK_FORMAT_COUNT: integer
const Ownership_Borrowed: boolean
const Ownership_Owned: boolean
function colorTypeClampType(ct: integer): integer
function colorTypeEncoding(ct: integer): integer
function colorTypeToPublic(ct: integer): integer
function maskFormatBytesPerPixel(maskFormat: integer): integer
function maskFormatToColorType(maskFormat: integer): integer
}
export abstract class $Engine$$Static implements $Engine {
static readonly "CLAMP_TYPE_AUTO": integer
static readonly "CLAMP_TYPE_MANUAL": integer
static readonly "CLAMP_TYPE_NONE": integer
static readonly "COLOR_ENCODING_FLOAT": integer
static readonly "COLOR_ENCODING_UNORM": integer
static readonly "COLOR_ENCODING_UNORM_PACK16": integer
static readonly "COLOR_ENCODING_UNORM_PACK32": integer
static readonly "COLOR_ENCODING_UNORM_SRGB": integer
static readonly "INVALID_RESOURCE_HANDLE": integer
static readonly "LAST_MASK_FORMAT": integer
static readonly "MASK_FORMAT_A565": integer
static readonly "MASK_FORMAT_A8": integer
static readonly "MASK_FORMAT_ARGB": integer
static readonly "MASK_FORMAT_COUNT": integer
static readonly "Ownership_Borrowed": boolean
static readonly "Ownership_Owned": boolean

static "colorTypeClampType"(ct: integer): integer
static "colorTypeEncoding"(ct: integer): integer
static "colorTypeToPublic"(ct: integer): integer
static "maskFormatBytesPerPixel"(maskFormat: integer): integer
static "maskFormatToColorType"(maskFormat: integer): integer
}
}

declare module "icyllis.arc3d.engine.DriverBugWorkarounds" {
import { $Map$$Type } from "java.util.Map"

export class $DriverBugWorkarounds {
static readonly "DEFAULT": integer
static readonly "DISABLED": integer
static readonly "ENABLED": integer

constructor()
constructor(states: $Map$$Type<string, boolean>)

public "applyOverrides"(workarounds: $DriverBugWorkarounds$$Type): void
public static "isDisabled"(state: byte): boolean
public static "isEnabled"(state: byte): boolean
}
}

declare module "icyllis.arc3d.engine.PipelineDesc$GraphicsPipelineInfo" {
import { $BlendInfo, $BlendInfo$$Type } from "icyllis.arc3d.engine.BlendInfo"
import { $PipelineDesc$SamplerInfo, $PipelineDesc$SamplerInfo$$Type } from "icyllis.arc3d.engine.PipelineDesc$SamplerInfo"
import { $PipelineDesc$UniformBlockInfo, $PipelineDesc$UniformBlockInfo$$Type } from "icyllis.arc3d.engine.PipelineDesc$UniformBlockInfo"
import { $DepthStencilSettings, $DepthStencilSettings$$Type } from "icyllis.arc3d.engine.DepthStencilSettings"
import { $VertexInputLayout, $VertexInputLayout$$Type } from "icyllis.arc3d.engine.VertexInputLayout"

export class $PipelineDesc$GraphicsPipelineInfo {
constructor()

get "mBlendInfo"(): $BlendInfo
set "mBlendInfo"(value: $BlendInfo$$Type)
get "mDepthStencilSettings"(): $DepthStencilSettings
set "mDepthStencilSettings"(value: $DepthStencilSettings$$Type)
get "mFragLabel"(): string
set "mFragLabel"(value: string)
get "mFragSource"(): string
set "mFragSource"(value: string)
get "mInputLayout"(): $VertexInputLayout
set "mInputLayout"(value: $VertexInputLayout$$Type)
get "mInputLayoutLabel"(): string
set "mInputLayoutLabel"(value: string)
get "mPipelineLabel"(): string
set "mPipelineLabel"(value: string)
get "mPrimitiveType"(): byte
set "mPrimitiveType"(value: byte)
get "mSamplerInfos"(): $PipelineDesc$SamplerInfo[]
set "mSamplerInfos"(value: $PipelineDesc$SamplerInfo$$Type[])
get "mUniformBlockInfos"(): $PipelineDesc$UniformBlockInfo[]
set "mUniformBlockInfos"(value: $PipelineDesc$UniformBlockInfo$$Type[])
get "mVertLabel"(): string
set "mVertLabel"(value: string)
get "mVertSource"(): string
set "mVertSource"(value: string)
}
}

declare module "icyllis.arc3d.engine.OpsRenderPass" {
import { $GraphicsPipeline$$Type } from "icyllis.arc3d.engine.GraphicsPipeline"
import { $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $Buffer$$Type } from "icyllis.arc3d.engine.Buffer"
import { $GpuRenderTarget$$Type } from "icyllis.arc3d.engine.GpuRenderTarget"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

/** @deprecated */
export class $OpsRenderPass {
constructor(fs: $GpuRenderTarget$$Type, origin: integer)
constructor()

public "begin"(): void
public "bindBuffers"(indexBuffer: $Buffer$$Type, indexType: integer, vertexBuffer: $Buffer$$Type, vertexStreamOffset: integer, instanceBuffer: $Buffer$$Type, instanceStreamOffset: integer): void
public "bindPipeline"(pipeline: $GraphicsPipeline$$Type, drawBounds: $Rect2fc$$Type): void
public "bindTexture"(geomTexture: $ImageViewProxy$$Type): void
public "bindTextures"(geomTextures: $ImageViewProxy$$Type[]): void
public "clearColor"(left: integer, top: integer, right: integer, bottom: integer, red: float, green: float, blue: float, alpha: float): void
public "clearStencil"(left: integer, top: integer, right: integer, bottom: integer, insideMask: boolean): void
public "draw"(vertexCount: integer, baseVertex: integer): void
public "drawIndexed"(indexCount: integer, baseIndex: integer, baseVertex: integer): void
public "drawIndexedInstanced"(indexCount: integer, baseIndex: integer, instanceCount: integer, baseInstance: integer, baseVertex: integer): void
public "drawInstanced"(instanceCount: integer, baseInstance: integer, vertexCount: integer, baseVertex: integer): void
public "end"(): void
}
}

declare module "icyllis.arc3d.engine.ImageProxyCache" {
import { $Pixmap$$Type } from "icyllis.arc3d.core.Pixmap"
import { $ImageViewProxy, $ImageViewProxy$$Type } from "icyllis.arc3d.engine.ImageViewProxy"
import { $RenderTargetProxy } from "icyllis.arc3d.engine.RenderTargetProxy"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $BackendImage$$Type } from "icyllis.arc3d.engine.BackendImage"
import { $GpuSurface$$Type } from "icyllis.arc3d.engine.GpuSurface"
import { $Context$$Type } from "icyllis.arc3d.engine.Context"
import { $SurfaceProxy$LazyInstantiateCallback$$Type } from "icyllis.arc3d.engine.SurfaceProxy$LazyInstantiateCallback"
import { $BackendRenderTarget$$Type } from "icyllis.arc3d.engine.BackendRenderTarget"
import { $PixelRef$$Type } from "icyllis.arc3d.core.PixelRef"
import { $BackendFormat$$Type } from "icyllis.arc3d.engine.BackendFormat"
import { $IUniqueKey$$Type } from "icyllis.arc3d.engine.IUniqueKey"

export class $ImageProxyCache {
constructor(context: $Context$$Type)

public "adoptUniqueKeyFromSurface"(proxy: $ImageViewProxy$$Type, texture: $GpuSurface$$Type): void
public "assignUniqueKeyToProxy"(key: $IUniqueKey$$Type, proxy: $ImageViewProxy$$Type): boolean
/** @deprecated */
public "createLazyTexture"(format: $BackendFormat$$Type, width: integer, height: integer, surfaceFlags: integer, callback: $SurfaceProxy$LazyInstantiateCallback$$Type): $ImageViewProxy
/** @deprecated */
public "createRenderTexture"(format: $BackendFormat$$Type, width: integer, height: integer, sampleCount: integer, surfaceFlags: integer): $RenderTargetProxy
/** @deprecated */
public "createTexture"(format: $BackendFormat$$Type, width: integer, height: integer, surfaceFlags: integer): $ImageViewProxy
/** @deprecated */
public "createTextureFromPixels"(pixmap: $Pixmap$$Type, pixelRef: $PixelRef$$Type, dstColorType: integer, surfaceFlags: integer): $ImageViewProxy
public "dropUniqueRefs"(): void
public "dropUniqueRefsOlderThan"(nanoTime: long): void
public "isDeferredProvider"(): boolean
public "processInvalidUniqueKey"(key: any, proxy: $ImageViewProxy$$Type, invalidateResource: boolean): void
/** @deprecated */
public "wrapBackendRenderTarget"(backendRenderTarget: $BackendRenderTarget$$Type, rcReleaseCB: $Runnable$$Type): $RenderTargetProxy
/** @deprecated */
public "wrapRenderableBackendTexture"(texture: $BackendImage$$Type, sampleCount: integer, ownership: boolean, cacheable: boolean, releaseCallback: $Runnable$$Type): $RenderTargetProxy
get "deferredProvider"(): boolean
}
}

declare module "icyllis.arc3d.engine.UniformDataManager" {
import { $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Matrix3$$Type } from "icyllis.arc3d.core.Matrix3"
import { $Matrixc$$Type } from "icyllis.arc3d.sketch.Matrixc"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"

export class $UniformDataManager extends $RefCnt {
constructor(uniformCount: integer, uniformSize: integer)

public "set1f"(u: integer, v0: float): void
public "set1fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "set1fv"(u: integer, count: integer, value: long): void
public "set1i"(u: integer, v0: integer): void
public "set1iv"(u: integer, count: integer, value: long): void
public "set1iv"(u: integer, offset: integer, count: integer, value: integer[]): void
public "set2f"(u: integer, v0: float, v1: float): void
public "set2fv"(u: integer, count: integer, value: long): void
public "set2fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "set2i"(u: integer, v0: integer, v1: integer): void
public "set2iv"(u: integer, offset: integer, count: integer, value: integer[]): void
public "set2iv"(u: integer, count: integer, value: long): void
public "set3f"(u: integer, v0: float, v1: float, v2: float): void
public "set3fv"(u: integer, count: integer, value: long): void
public "set3fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "set3i"(u: integer, v0: integer, v1: integer, v2: integer): void
public "set3iv"(u: integer, count: integer, value: long): void
public "set3iv"(u: integer, offset: integer, count: integer, value: integer[]): void
public "set4f"(u: integer, v0: float, v1: float, v2: float, v3: float): void
public "set4fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "set4fv"(u: integer, count: integer, value: long): void
public "set4i"(u: integer, v0: integer, v1: integer, v2: integer, v3: integer): void
public "set4iv"(u: integer, count: integer, value: long): void
public "set4iv"(u: integer, offset: integer, count: integer, value: integer[]): void
public "setMatrix2fv"(u: integer, count: integer, value: long): void
public "setMatrix2fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "setMatrix3f"(u: integer, matrix: $Matrix3$$Type): void
public "setMatrix3f"(u: integer, matrix: $Matrixc$$Type): void
public "setMatrix3fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "setMatrix3fv"(u: integer, count: integer, value: long): void
public "setMatrix4f"(u: integer, matrix: $Matrix4$$Type): void
public "setMatrix4fv"(u: integer, offset: integer, count: integer, value: float[]): void
public "setMatrix4fv"(u: integer, count: integer, value: long): void
}
}

declare module "icyllis.arc3d.engine.GlobalResourceCache" {
import { $ComputePipeline, $ComputePipeline$$Type } from "icyllis.arc3d.engine.ComputePipeline"
import { $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $GraphicsPipeline, $GraphicsPipeline$$Type } from "icyllis.arc3d.engine.GraphicsPipeline"
import { $GlobalResourceCache$Stats } from "icyllis.arc3d.engine.GlobalResourceCache$Stats"
import { $IUniqueKey$$Type } from "icyllis.arc3d.engine.IUniqueKey"

export class $GlobalResourceCache {
constructor()

public "addStaticResource"(resource: $Resource$$Type): void
public "findComputePipeline"(key: $IUniqueKey$$Type): $ComputePipeline
public "findGraphicsPipeline"(key: $IUniqueKey$$Type): $GraphicsPipeline
public "getStats"(): $GlobalResourceCache$Stats
public "insertComputePipeline"(key: $IUniqueKey$$Type, pipeline: $ComputePipeline$$Type): $ComputePipeline
public "insertGraphicsPipeline"(key: $IUniqueKey$$Type, pipeline: $GraphicsPipeline$$Type): $GraphicsPipeline
public "release"(): void
get "stats"(): $GlobalResourceCache$Stats
}
}

declare module "icyllis.arc3d.engine.ImageViewProxy" {
import { $ImageViewProxy$LazyInstantiateCallback$$Type } from "icyllis.arc3d.engine.ImageViewProxy$LazyInstantiateCallback"
import { $Context$$Type } from "icyllis.arc3d.engine.Context"
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $ImageDesc, $ImageDesc$$Type } from "icyllis.arc3d.engine.ImageDesc"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"
import { $Image, $Image$$Type } from "icyllis.arc3d.engine.Image"

export class $ImageViewProxy extends $RefCnt {
public "clear"(): void
public "concatSwizzle"(swizzle: short): void
public "doLazyInstantiation"(resourceProvider: $ResourceProvider$$Type): boolean
public "getDesc"(): $ImageDesc
public "getHeight"(): integer
public "getImage"(): $Image
public "getLabel"(): string
public "getMemorySize"(): long
public "getOrigin"(): integer
public "getSampleCount"(): integer
public "getSwizzle"(): short
public "getWidth"(): integer
public "instantiate"(resourceProvider: $ResourceProvider$$Type): boolean
public "instantiateIfNonLazy"(resourceProvider: $ResourceProvider$$Type): boolean
public "isBackingWrapped"(): boolean
public "isBudgeted"(): boolean
public "isInstantiated"(): boolean
public "isLazy"(): boolean
public "isLazyMost"(): boolean
public "isMipmapped"(): boolean
public "isProtected"(): boolean
public "isVolatile"(): boolean
public static "make"(context: $Context$$Type, desc: $ImageDesc$$Type, origin: integer, swizzle: short, budgeted: boolean, label: string): $ImageViewProxy
public static "make"(context: $Context$$Type, imageType: integer, colorType: integer, width: integer, height: integer, depthOrArraySize: integer, imageFlags: integer, origin: integer, swizzle: short): $ImageViewProxy
public static "makeLazy"(desc: $ImageDesc$$Type, origin: integer, swizzle: short, budgeted: boolean, isVolatile: boolean, lazyDimensions: boolean, callback: $ImageViewProxy$LazyInstantiateCallback$$Type): $ImageViewProxy
public "refImage"(): $Image
public "setSwizzle"(swizzle: short): void
public static "wrap"(image: $Image$$Type, origin: integer, swizzle: short): $ImageViewProxy
get "desc"(): $ImageDesc
get "height"(): integer
get "image"(): $Image
get "label"(): string
get "memorySize"(): long
get "origin"(): integer
get "sampleCount"(): integer
get "swizzle"(): short
get "width"(): integer
get "backingWrapped"(): boolean
get "budgeted"(): boolean
get "instantiated"(): boolean
get "lazy"(): boolean
get "lazyMost"(): boolean
get "mipmapped"(): boolean
get "protected"(): boolean
get "volatile"(): boolean
set "swizzle"(value: short)
}
}

declare module "icyllis.arc3d.engine.SurfaceProxy$LazyCallbackResult" {
import { $GpuSurface, $GpuSurface$$Type } from "icyllis.arc3d.engine.GpuSurface"

export class $SurfaceProxy$LazyCallbackResult {
constructor()
constructor(surface: $GpuSurface$$Type)
constructor(surface: $GpuSurface$$Type, syncTargetKey: boolean, releaseCallback: boolean)

get "mReleaseCallback"(): boolean
set "mReleaseCallback"(value: boolean)
get "mSurface"(): $GpuSurface
set "mSurface"(value: $GpuSurface$$Type)
get "mSyncTargetKey"(): boolean
set "mSyncTargetKey"(value: boolean)
}
}

declare module "icyllis.arc3d.engine.VertexInputLayout$AttributeSet" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $VertexInputLayout$Attribute, $VertexInputLayout$Attribute$$Type } from "icyllis.arc3d.engine.VertexInputLayout$Attribute"
import { $Iterator } from "java.util.Iterator"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $VertexInputLayout$AttributeSet implements $Iterable<$VertexInputLayout$Attribute> {
public "forEach"(consumer0: $Consumer$$Type<$VertexInputLayout$Attribute$$Type>): void
public "iterator"(): $Iterator<$VertexInputLayout$Attribute>
public static "makeExplicit"(stride: integer, inputRate: integer, ...attrs: $VertexInputLayout$Attribute$$Type[]): $VertexInputLayout$AttributeSet
public static "makeImplicit"(inputRate: integer, ...attrs: $VertexInputLayout$Attribute$$Type[]): $VertexInputLayout$AttributeSet
public "spliterator"(): $Spliterator<$VertexInputLayout$Attribute>
[Symbol.iterator](): IterableIterator<$VertexInputLayout$Attribute>;
}
}

declare module "icyllis.arc3d.engine.ResourceProvider" {
import { $Buffer } from "icyllis.arc3d.engine.Buffer"
import { $ResourceCache } from "icyllis.arc3d.engine.ResourceCache"
import { $SamplerDesc$$Type } from "icyllis.arc3d.engine.SamplerDesc"
import { $GpuRenderTarget } from "icyllis.arc3d.engine.GpuRenderTarget"
import { $BackendImage$$Type } from "icyllis.arc3d.engine.BackendImage"
import { $Image, $Image$$Type } from "icyllis.arc3d.engine.Image"
import { $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $GraphicsPipeline } from "icyllis.arc3d.engine.GraphicsPipeline"
import { $PipelineDesc$$Type } from "icyllis.arc3d.engine.PipelineDesc"
import { $RenderPassDesc$$Type } from "icyllis.arc3d.engine.RenderPassDesc"
import { $ImageDesc$$Type } from "icyllis.arc3d.engine.ImageDesc"
import { $BackendRenderTarget$$Type } from "icyllis.arc3d.engine.BackendRenderTarget"
import { $IResourceKey$$Type } from "icyllis.arc3d.engine.IResourceKey"
import { $Sampler } from "icyllis.arc3d.engine.Sampler"
import { $BackendFormat$$Type } from "icyllis.arc3d.engine.BackendFormat"
import { $IUniqueKey$$Type } from "icyllis.arc3d.engine.IUniqueKey"

export class $ResourceProvider {
public "assignUniqueKeyToResource"(key: $IUniqueKey$$Type, resource: $Resource$$Type): void
/** @deprecated */
public "createImage"(width: integer, height: integer, format: $BackendFormat$$Type, sampleCount: integer, surfaceFlags: integer, label: string): $Image
public "createNewBuffer"(size: long, usage: integer): $Buffer
public "createNewImage"(desc: $ImageDesc$$Type, label: string): $Image
/** @deprecated */
public "createRenderTarget"(numColorTargets: integer, colorTargets: $Image$$Type[], resolveTargets: $Image$$Type[], mipLevels: integer[], depthStencilTarget: $Image$$Type, surfaceFlags: integer): $GpuRenderTarget
/** @deprecated */
public "createRenderTarget"(width: integer, height: integer, sampleCount: integer): $GpuRenderTarget
/** @deprecated */
public "createRenderTarget"(width: integer, height: integer, colorFormat: $BackendFormat$$Type, colorFlags: integer, resolveFormat: $BackendFormat$$Type, resolveFlags: integer, depthStencilFormat: $BackendFormat$$Type, depthStencilFlags: integer, sampleCount: integer, surfaceFlags: integer, label: string): $GpuRenderTarget
/** @deprecated */
public "createTexture"(width: integer, height: integer, format: $BackendFormat$$Type, sampleCount: integer, surfaceFlags: integer, label: string): $Image
public "findAndRefScratchImage"(key: $IResourceKey$$Type, budgeted: boolean, shareable: boolean, label: string): $Image
public "findAndRefScratchImage"(desc: $ImageDesc$$Type, budgeted: boolean, shareable: boolean, label: string): $Image
/** @deprecated */
public "findAndRefScratchRenderTarget"(key: $IResourceKey$$Type, label: string): $GpuRenderTarget
/** @deprecated */
public "findAndRefScratchRenderTarget"(width: integer, height: integer, colorFormat: $BackendFormat$$Type, colorFlags: integer, resolveFormat: $BackendFormat$$Type, resolveFlags: integer, depthStencilFormat: $BackendFormat$$Type, depthStencilFlags: integer, sampleCount: integer, surfaceFlags: integer, label: string): $GpuRenderTarget
public "findOrCreateBuffer"(size: long, usage: integer, label: string): $Buffer
public "findOrCreateCompatibleSampler"(desc: $SamplerDesc$$Type): $Sampler
public "findOrCreateGraphicsPipeline"(pipelineDesc: $PipelineDesc$$Type, renderPassDesc: $RenderPassDesc$$Type): $GraphicsPipeline
public "findOrCreateImage"(desc: $ImageDesc$$Type, budgeted: boolean, label: string): $Image
public "freeGpuResources"(): void
public "getResourceCache"(): $ResourceCache
public "getResourceCacheBudgetedBytes"(): long
public "getResourceCacheLimit"(): long
public "getResourceCachePurgeableBytes"(): long
public "purgeResourcesNotUsedSince"(timeMillis: long): void
/** @deprecated */
public "wrapBackendRenderTarget"(backendRenderTarget: $BackendRenderTarget$$Type): $GpuRenderTarget
/** @deprecated */
public "wrapGLDefaultFramebuffer"(width: integer, height: integer, sampleCount: integer, depthBits: integer, stencilBits: integer, format: $BackendFormat$$Type): $GpuRenderTarget
/** @deprecated */
public "wrapRenderableBackendTexture"(texture: $BackendImage$$Type, sampleCount: integer, ownership: boolean): $GpuRenderTarget
get "resourceCache"(): $ResourceCache
get "resourceCacheBudgetedBytes"(): long
get "resourceCacheLimit"(): long
get "resourceCachePurgeableBytes"(): long
}
}

declare module "icyllis.arc3d.engine.DrawableInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DrawableInfo {
constructor()

}
}

declare module "icyllis.arc3d.engine.DepthStencilSettings$Face" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DepthStencilSettings$Face {
readonly "mCompareMask": integer
readonly "mCompareOp": byte
readonly "mDepthFailOp": byte
readonly "mFailOp": byte
readonly "mPassOp": byte
readonly "mReference": integer
readonly "mWriteMask": integer

constructor(failOp: byte, passOp: byte, depthFailOp: byte, compareOp: byte, reference: integer, compareMask: integer, writeMask: integer)

}
}

declare module "icyllis.arc3d.engine.PipelineDesc$SamplerInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PipelineDesc$SamplerInfo {
readonly "mBinding": integer
readonly "mName": string
readonly "mVisibility": integer

constructor(visibility: integer, binding: integer, name: string)

}
}

declare module "icyllis.arc3d.engine.FramebufferDesc" {
import { $FramebufferDesc$ColorAttachmentDesc, $FramebufferDesc$ColorAttachmentDesc$$Type } from "icyllis.arc3d.engine.FramebufferDesc$ColorAttachmentDesc"
import { $FramebufferDesc$DepthStencilAttachmentDesc, $FramebufferDesc$DepthStencilAttachmentDesc$$Type } from "icyllis.arc3d.engine.FramebufferDesc$DepthStencilAttachmentDesc"

export class $FramebufferDesc {
static readonly "FLAG_GL_WRAP_DEFAULT_FB": integer
static readonly "FLAG_MANUAL_MSAA_RESOLVE": integer
static readonly "FLAG_VK_WRAP_SECONDARY_CB": integer
static readonly "NO_COLOR_ATTACHMENTS": $FramebufferDesc$ColorAttachmentDesc[]
static readonly "NO_DEPTH_STENCIL_ATTACHMENT": $FramebufferDesc$DepthStencilAttachmentDesc
readonly "mColorAttachments": $FramebufferDesc$ColorAttachmentDesc[]
readonly "mDepthStencilAttachment": $FramebufferDesc$DepthStencilAttachmentDesc
readonly "mHeight": integer
readonly "mSampleCount": integer
readonly "mWidth": integer

constructor(width: integer, height: integer, sampleCount: integer, colorAttachment: $FramebufferDesc$ColorAttachmentDesc$$Type, depthStencilAttachment: $FramebufferDesc$DepthStencilAttachmentDesc$$Type)
constructor(width: integer, height: integer, sampleCount: integer, colorAttachments: $FramebufferDesc$ColorAttachmentDesc$$Type[], depthStencilAttachment: $FramebufferDesc$DepthStencilAttachmentDesc$$Type)

public "isStale"(): boolean
get "mFramebufferFlags"(): integer
set "mFramebufferFlags"(value: integer)
get "stale"(): boolean
}
}

declare module "icyllis.arc3d.engine.SurfaceProxy$LazyInstantiateCallback" {
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $SurfaceProxy$LazyCallbackResult } from "icyllis.arc3d.engine.SurfaceProxy$LazyCallbackResult"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $BackendFormat$$Type } from "icyllis.arc3d.engine.BackendFormat"

export interface $SurfaceProxy$LazyInstantiateCallback extends $AutoCloseable {
"close"(): void
"onLazyInstantiate"(resourceProvider0: $ResourceProvider$$Type, backendFormat1: $BackendFormat$$Type, int2: integer, int3: integer, int4: integer, int5: integer, string6: string): $SurfaceProxy$LazyCallbackResult
}

export namespace $SurfaceProxy$LazyInstantiateCallback {
const probejs$$marker: never
}
export abstract class $SurfaceProxy$LazyInstantiateCallback$$Static implements $SurfaceProxy$LazyInstantiateCallback {
}
}

declare module "icyllis.arc3d.engine.GpuSurface" {
import { $Resource } from "icyllis.arc3d.engine.Resource"
import { $GpuRenderTarget } from "icyllis.arc3d.engine.GpuRenderTarget"
import { $Image } from "icyllis.arc3d.engine.Image"
import { $BackendFormat } from "icyllis.arc3d.engine.BackendFormat"

/** @deprecated */
export class $GpuSurface extends $Resource {
public "asImage"(): $Image
public "asRenderTarget"(): $GpuRenderTarget
public "getBackendFormat"(): $BackendFormat
public "getDepthBits"(): integer
public "getHeight"(): integer
public "getSampleCount"(): integer
public "getStencilBits"(): integer
public "getSurfaceFlags"(): integer
public "getWidth"(): integer
public "isProtected"(): boolean
get "backendFormat"(): $BackendFormat
get "depthBits"(): integer
get "height"(): integer
get "sampleCount"(): integer
get "stencilBits"(): integer
get "surfaceFlags"(): integer
get "width"(): integer
get "protected"(): boolean
}
}

declare module "icyllis.arc3d.engine.ComputePipeline" {
import { $Device$$Type } from "icyllis.arc3d.engine.Device"
import { $ManagedResource } from "icyllis.arc3d.engine.ManagedResource"

export class $ComputePipeline extends $ManagedResource {
constructor(device: $Device$$Type)

}
}

declare module "icyllis.arc3d.engine.ImageViewProxy$LazyInstantiateCallback" {
import { $ImageViewProxy$LazyCallbackResult } from "icyllis.arc3d.engine.ImageViewProxy$LazyCallbackResult"
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $ImageDesc$$Type } from "icyllis.arc3d.engine.ImageDesc"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export interface $ImageViewProxy$LazyInstantiateCallback extends $AutoCloseable {
"close"(): void
"onLazyInstantiate"(resourceProvider0: $ResourceProvider$$Type, imageDesc1: $ImageDesc$$Type, boolean2: boolean, string3: string): $ImageViewProxy$LazyCallbackResult
}

export namespace $ImageViewProxy$LazyInstantiateCallback {
const probejs$$marker: never
}
export abstract class $ImageViewProxy$LazyInstantiateCallback$$Static implements $ImageViewProxy$LazyInstantiateCallback {
}
}

declare module "icyllis.arc3d.engine.Resource" {
import { $Context } from "icyllis.arc3d.engine.Context"
import { $RefCounted } from "icyllis.arc3d.core.RefCounted"
import { $UniqueID } from "icyllis.arc3d.engine.UniqueID"
import { $IResourceKey } from "icyllis.arc3d.engine.IResourceKey"

export class $Resource implements $RefCounted {
public "getContext"(): $Context
public "getKey"(): $IResourceKey
public "getLabel"(): string
public "getMemorySize"(): long
public "getUniqueID"(): $UniqueID
public "hasAnyRefs"(): boolean
public "isBudgeted"(): boolean
public "isDestroyed"(): boolean
public "isPurgeable"(): boolean
public "isShareable"(): boolean
public "isWrapped"(): boolean
public "ref"(): void
public "refCommandBuffer"(): void
public "setLabel"(label: string): void
public "unref"(): void
public "unrefCommandBuffer"(): void
get "context"(): $Context
get "key"(): $IResourceKey
get "label"(): string
get "memorySize"(): long
get "uniqueID"(): $UniqueID
get "budgeted"(): boolean
get "destroyed"(): boolean
get "purgeable"(): boolean
get "shareable"(): boolean
get "wrapped"(): boolean
set "label"(value: string)
}
}

declare module "icyllis.arc3d.engine.VertexInputLayout$Attribute" {
import { $ShaderVar } from "icyllis.arc3d.engine.ShaderVar"

export class $VertexInputLayout$Attribute {
static readonly "OFFSET_ALIGNMENT": integer

constructor(name: string, srcType: byte, dstType: byte, offset: integer)
constructor(name: string, srcType: byte, dstType: byte)

public static "alignOffset"(offset: integer): integer
public "asShaderVar"(): $ShaderVar
public "dstType"(): byte
public "locations"(): integer
public "name"(): string
public "offset"(): integer
public "size"(): integer
public "srcType"(): byte
public "stride"(): integer
}
}

declare module "icyllis.arc3d.engine.Context" {
import { $Logger } from "org.slf4j.Logger"
import { $Device } from "icyllis.arc3d.engine.Device"
import { $Thread } from "java.lang.Thread"
import { $RendererProvider } from "icyllis.arc3d.granite.RendererProvider"
import { $ResourceProvider } from "icyllis.arc3d.engine.ResourceProvider"
import { $ContextOptions } from "icyllis.arc3d.engine.ContextOptions"
import { $GlobalResourceCache } from "icyllis.arc3d.engine.GlobalResourceCache"
import { $Caps } from "icyllis.arc3d.engine.Caps"
import { $RefCnt } from "icyllis.arc3d.core.RefCnt"
import { $BackendFormat } from "icyllis.arc3d.engine.BackendFormat"

export class $Context extends $RefCnt {
public "checkOwnerThread"(): void
public "freeGpuResources"(): void
public "getBackend"(): integer
public "getCaps"(): $Caps
public "getCompressedBackendFormat"(compressionType: integer): $BackendFormat
public "getContextID"(): integer
public "getCurrentBudgetedBytes"(): long
public "getCurrentPurgeableBytes"(): long
public "getDefaultBackendFormat"(colorType: integer, renderable: boolean): $BackendFormat
public "getDevice"(): $Device
public "getGlobalResourceCache"(): $GlobalResourceCache
public "getLogger"(): $Logger
public "getMaxBudgetedBytes"(): long
public "getMaxRenderTargetSize"(): integer
public "getMaxSurfaceSampleCount"(colorType: integer): integer
public "getMaxTextureSize"(): integer
public "getOptions"(): $ContextOptions
public "getOwnerThread"(): $Thread
public "getRendererProvider"(): $RendererProvider
public "getResourceProvider"(): $ResourceProvider
public "isDeviceLost"(): boolean
public "isImmediate"(): boolean
public "isOwnerThread"(): boolean
public "matches"(c: $Context$$Type): boolean
public "performDeferredCleanup"(long0: long): void
get "backend"(): integer
get "caps"(): $Caps
get "contextID"(): integer
get "currentBudgetedBytes"(): long
get "currentPurgeableBytes"(): long
get "device"(): $Device
get "globalResourceCache"(): $GlobalResourceCache
get "logger"(): $Logger
get "maxBudgetedBytes"(): long
get "maxRenderTargetSize"(): integer
get "maxTextureSize"(): integer
get "options"(): $ContextOptions
get "ownerThread"(): $Thread
get "rendererProvider"(): $RendererProvider
get "resourceProvider"(): $ResourceProvider
get "deviceLost"(): boolean
get "immediate"(): boolean
get "ownerThread"(): boolean
}
}

declare module "icyllis.arc3d.engine.QueueManager" {
import { $Task$$Type } from "icyllis.arc3d.engine.Task"

export class $QueueManager {
public "addTask"(task: $Task$$Type): boolean
public "checkForFinishedWork"(): void
public "finishOutstandingWork"(): void
public "getMaxCommandBuffers"(): integer
public "hasOutstandingWork"(): boolean
public "submit"(): boolean
get "maxCommandBuffers"(): integer
}
}

declare module "icyllis.arc3d.engine.RenderPassDesc$DepthStencilAttachmentDesc" {
import { $ImageDesc, $ImageDesc$$Type } from "icyllis.arc3d.engine.ImageDesc"

export class $RenderPassDesc$DepthStencilAttachmentDesc {
constructor()

get "mDesc"(): $ImageDesc
set "mDesc"(value: $ImageDesc$$Type)
get "mLoadOp"(): byte
set "mLoadOp"(value: byte)
get "mStoreOp"(): byte
set "mStoreOp"(value: byte)
}
}

declare module "icyllis.arc3d.engine.Caps" {
import { $PipelineDesc$$Type } from "icyllis.arc3d.engine.PipelineDesc"
import { $DriverBugWorkarounds } from "icyllis.arc3d.engine.DriverBugWorkarounds"
import { $RenderPassDesc$$Type } from "icyllis.arc3d.engine.RenderPassDesc"
import { $ImageDesc, $ImageDesc$$Type } from "icyllis.arc3d.engine.ImageDesc"
import { $ContextOptions$$Type } from "icyllis.arc3d.engine.ContextOptions"
import { $IResourceKey, $IResourceKey$$Type } from "icyllis.arc3d.engine.IResourceKey"
import { $ShaderCaps } from "icyllis.arc3d.engine.ShaderCaps"
import { $BackendFormat, $BackendFormat$$Type } from "icyllis.arc3d.engine.BackendFormat"
import { $Caps$BlendEquationSupport } from "icyllis.arc3d.engine.Caps$BlendEquationSupport"
import { $PipelineKey, $PipelineKey$$Type } from "icyllis.arc3d.engine.PipelineKey"

export class $Caps {
static readonly "MAX_COLOR_TARGETS": integer
static readonly "MAX_VERTEX_ATTRIBUTES": integer
static readonly "MAX_VERTEX_BINDINGS": integer

constructor(options: $ContextOptions$$Type)

public "advancedBlendEquationSupport"(): boolean
public "advancedCoherentBlendEquationSupport"(): boolean
public "avoidLargeIndexBufferDraws"(): boolean
public "avoidStencilBuffers"(): boolean
public "avoidWritePixelsFastPath"(): boolean
public "blendEquationSupport"(): $Caps$BlendEquationSupport
public "clampToBorderSupport"(): boolean
public "computeImageKey"(imageDesc0: $ImageDesc$$Type, iResourceKey1: $IResourceKey$$Type): $IResourceKey
public "conservativeRasterSupport"(): boolean
public "crossContextTextureSupport"(): boolean
public "depthClipNegativeOneToOne"(): boolean
public "discardStencilValuesAfterRenderPass"(): boolean
public "drawInstancedSupport"(): boolean
public "dynamicStateArrayGeometryProcessorTextureSupport"(): boolean
public "fenceSyncSupport"(): boolean
public "getCompressedBackendFormat"(int0: integer): $BackendFormat
public "getDefaultBackendFormat"(colorType: integer, renderable: boolean): $BackendFormat
public "getDefaultColorImageDesc"(imageType: integer, colorType: integer, width: integer, height: integer, depthOrArraySize: integer, mipLevelCount: integer, sampleCount: integer, imageFlags: integer): $ImageDesc
public "getDefaultColorImageDesc"(imageType: integer, colorType: integer, width: integer, height: integer, depthOrArraySize: integer, imageFlags: integer): $ImageDesc
public "getDefaultDepthStencilImageDesc"(depthBits: integer, stencilBits: integer, width: integer, height: integer, sampleCount: integer, imageFlags: integer): $ImageDesc
public "getImageDescForSampledCopy"(src: $ImageDesc$$Type, width: integer, height: integer, depthOrArraySize: integer, imageFlags: integer): $ImageDesc
public "getInternalMultisampleCount"(format: $BackendFormat$$Type): integer
public "getMaxRenderTargetSampleCount"(backendFormat0: $BackendFormat$$Type): integer
public "getReadSwizzle"(desc: $ImageDesc$$Type, colorType: integer): short
public "getRenderTargetSampleCount"(int0: integer, backendFormat1: $BackendFormat$$Type): integer
public "getSupportedReadColorType"(srcColorType: integer, srcFormat: $BackendFormat$$Type, dstColorType: integer): long
public "getSupportedWriteColorType"(int0: integer, imageDesc1: $ImageDesc$$Type, int2: integer): long
public "getWriteSwizzle"(imageDesc0: $ImageDesc$$Type, int1: integer): short
public "gpuTracingSupport"(): boolean
public "halfFloatVertexAttributeSupport"(): boolean
public "hasAnisotropySupport"(): boolean
public "isFormatCompatible"(colorType: integer, format: $BackendFormat$$Type): boolean
public "isFormatRenderable"(int0: integer, backendFormat1: $BackendFormat$$Type, int2: integer): boolean
public "isFormatRenderable"(backendFormat0: $BackendFormat$$Type, int1: integer): boolean
public "isFormatTexturable"(backendFormat0: $BackendFormat$$Type): boolean
public "makeGraphicsPipelineKey"(pipelineKey0: $PipelineKey$$Type, pipelineDesc1: $PipelineDesc$$Type, renderPassDesc2: $RenderPassDesc$$Type): $PipelineKey
public "maxColorAttachments"(): integer
public "maxPreferredRenderTargetSize"(): integer
public "maxPushConstantsSize"(): integer
public "maxRenderTargetSize"(): integer
public "maxTextureSize"(): integer
public "maxVertexAttributes"(): integer
public "maxVertexBindings"(): integer
public "minStorageBufferOffsetAlignment"(): integer
public "minUniformBufferOffsetAlignment"(): integer
public "mipmapSupport"(): boolean
public "msaaResolvesAutomatically"(): boolean
public "mustClearUploadedBufferData"(): boolean
public "mustSyncGpuDuringDiscard"(): boolean
public "nativeDrawIndexedIndirectIsBroken"(): boolean
public "npotTextureTileSupport"(): boolean
public "oversizedStencilSupport"(): boolean
public "performColorClearsAsDraws"(): boolean
public "performPartialClearsAsDraws"(): boolean
public "performStencilClearsAsDraws"(): boolean
public "preferClientSideDynamicBuffers"(): boolean
public "preferDiscardableMSAAAttachment"(): boolean
public "preferFullscreenClears"(): boolean
public "preferVRAMUseOverFlushes"(): boolean
public "readPixelsRowBytesSupport"(): boolean
public "reducedShaderMode"(): boolean
public "requiresManualFBBarrierAfterTessellatedStencilDraw"(): boolean
public "reuseScratchBuffers"(): boolean
public "reuseScratchTextures"(): boolean
public "sampleLocationsSupport"(): boolean
public "semaphoreSupport"(): boolean
public "shaderCaps"(): $ShaderCaps
public "shouldCollapseSrcOverToSrcWhenAble"(): boolean
public "shouldInitializeTextures"(): boolean
public "supportsTextureBarrier"(): boolean
public "textureBarrierSupport"(): boolean
public "transferBufferAlignment"(): integer
public "transferFromBufferToTextureSupport"(): boolean
public "transferFromSurfaceToBufferSupport"(): boolean
public "transferPixelsToRowBytesSupport"(): boolean
public "twoSidedStencilRefsAndMasksMustMatch"(): boolean
public "usePrimitiveRestart"(): boolean
public "validateAttachmentParams"(width: integer, height: integer, format: $BackendFormat$$Type, sampleCount: integer): boolean
public "validateSurfaceParams"(width: integer, height: integer, format: $BackendFormat$$Type, sampleCount: integer, surfaceFlags: integer): boolean
public "wireframeSupport"(): boolean
public "workarounds"(): $DriverBugWorkarounds
public "writePixelsRowBytesSupport"(): boolean
}
}

declare module "icyllis.arc3d.engine.ResourceCache" {
import { $ThreadSafeCache$$Type } from "icyllis.arc3d.engine.ThreadSafeCache"
import { $Resource, $Resource$$Type } from "icyllis.arc3d.engine.Resource"
import { $ImageProxyCache$$Type } from "icyllis.arc3d.engine.ImageProxyCache"
import { $IResourceKey$$Type } from "icyllis.arc3d.engine.IResourceKey"

export class $ResourceCache {
public "findAndRefResource"(key: $IResourceKey$$Type, budgeted: boolean, shareable: boolean): $Resource
public "getBudgetedBytes"(): long
public "getBudgetedResourceCount"(): integer
public "getMaxBudget"(): long
public "getPurgeableBytes"(): long
public "getResourceCount"(): integer
public "insertResource"(resource: $Resource$$Type, key: $IResourceKey$$Type, budgeted: boolean, shareable: boolean): void
public "processReturnedResources"(): boolean
public "purgeAsNeeded"(): void
public "purgeResources"(): void
public "purgeResourcesNotUsedSince"(timeMillis: long): void
public "setMaxBudget"(maxBytes: long): void
public "setSurfaceProvider"(imageProxyCache: $ImageProxyCache$$Type): void
public "setThreadSafeCache"(threadSafeCache: $ThreadSafeCache$$Type): void
public "shutdown"(): void
get "budgetedBytes"(): long
get "budgetedResourceCount"(): integer
get "maxBudget"(): long
get "purgeableBytes"(): long
get "resourceCount"(): integer
set "maxBudget"(value: long)
set "surfaceProvider"(value: $ImageProxyCache$$Type)
set "threadSafeCache"(value: $ThreadSafeCache$$Type)
}
}

declare module "icyllis.arc3d.engine.GpuBufferPool" {
import { $ResourceProvider$$Type } from "icyllis.arc3d.engine.ResourceProvider"
import { $CommandBuffer$$Type } from "icyllis.arc3d.engine.CommandBuffer"
import { $Mesh$$Type } from "icyllis.arc3d.engine.Mesh"
import { $ByteBuffer } from "java.nio.ByteBuffer"

/** @deprecated */
export class $GpuBufferPool {
static readonly "DEFAULT_BUFFER_SIZE": integer

public "flush"(): void
public static "makeIndexPool"(resourceProvider: $ResourceProvider$$Type): $GpuBufferPool
public static "makeInstancePool"(resourceProvider: $ResourceProvider$$Type): $GpuBufferPool
public "makeSpace"(mesh0: $Mesh$$Type): long
public static "makeVertexPool"(resourceProvider: $ResourceProvider$$Type): $GpuBufferPool
public "makeWriter"(mesh0: $Mesh$$Type): $ByteBuffer
public "putBack"(bytes: integer): void
public "reset"(): void
public "submit"(cmdBuffer: $CommandBuffer$$Type): void
}
}

declare module "icyllis.arc3d.engine.IResourceKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IResourceKey {
"copy"(): $IResourceKey
"equals"(object0: any): boolean
"hashCode"(): integer
}

export namespace $IResourceKey {
const probejs$$marker: never
}
export abstract class $IResourceKey$$Static implements $IResourceKey {
}
}

declare module "icyllis.arc3d.engine.PipelineDesc" {
import { $BlendInfo } from "icyllis.arc3d.engine.BlendInfo"
import { $PipelineDesc$GraphicsPipelineInfo } from "icyllis.arc3d.engine.PipelineDesc$GraphicsPipelineInfo"
import { $Device$$Type } from "icyllis.arc3d.engine.Device"
import { $DepthStencilSettings } from "icyllis.arc3d.engine.DepthStencilSettings"

export class $PipelineDesc {
static readonly "DYNAMIC_COLOR_BLEND_STATE": integer
static readonly "NO_DYNAMIC_STATE": integer

constructor()

public "copy"(): $PipelineDesc
public "createGraphicsPipelineInfo"(device: $Device$$Type): $PipelineDesc$GraphicsPipelineInfo
public "getBlendInfo"(): $BlendInfo
public "getDepthStencilSettings"(): $DepthStencilSettings
public "getDynamicStates"(): integer
public "getPrimitiveType"(): byte
get "blendInfo"(): $BlendInfo
get "depthStencilSettings"(): $DepthStencilSettings
get "dynamicStates"(): integer
get "primitiveType"(): byte
}
}

declare module "icyllis.arc3d.engine.ImageDesc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ImageDesc {
public "getArraySize"(): integer
public "getBackend"(): integer
public "getBytesPerBlock"(): integer
public "getChannelFlags"(): integer
public "getCompressionType"(): integer
public "getDepth"(): integer
public "getDepthBits"(): integer
public "getGLFormat"(): integer
public "getHeight"(): integer
public "getImageType"(): integer
public "getMipLevelCount"(): integer
public "getSampleCount"(): integer
public "getStencilBits"(): integer
public "getVkFormat"(): integer
public "getWidth"(): integer
public "isCompressed"(): boolean
public "isMipmapped"(): boolean
public "isMultisampled"(): boolean
public "isProtected"(): boolean
public "isRenderable"(): boolean
public "isSRGB"(): boolean
public "isSampledImage"(): boolean
public "isStorageImage"(): boolean
get "arraySize"(): integer
get "backend"(): integer
get "bytesPerBlock"(): integer
get "channelFlags"(): integer
get "compressionType"(): integer
get "depth"(): integer
get "depthBits"(): integer
get "gLFormat"(): integer
get "height"(): integer
get "imageType"(): integer
get "mipLevelCount"(): integer
get "sampleCount"(): integer
get "stencilBits"(): integer
get "vkFormat"(): integer
get "width"(): integer
get "compressed"(): boolean
get "mipmapped"(): boolean
get "multisampled"(): boolean
get "protected"(): boolean
get "renderable"(): boolean
get "sRGB"(): boolean
get "sampledImage"(): boolean
get "storageImage"(): boolean
}
}

declare module "icyllis.arc3d.engine.ThreadSafeCache" {
import { $ResourceCache$$Type } from "icyllis.arc3d.engine.ResourceCache"

export class $ThreadSafeCache {
constructor()

public "dropUniqueRefs"(resourceCache: $ResourceCache$$Type): void
public "dropUniqueRefsOlderThan"(nanoTime: long): void
}
}

