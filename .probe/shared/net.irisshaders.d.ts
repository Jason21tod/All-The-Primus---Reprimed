declare module "net.irisshaders.batchedentityrendering.mixin.BufferSourceAccessor" {
import { $Map } from "java.util.Map"
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $BufferSourceAccessor {
"getFixedBuffers"(): $Map<$RenderType, $BufferBuilder>
get "fixedBuffers"(): $Map<$RenderType, $BufferBuilder>
}

export namespace $BufferSourceAccessor {
const probejs$$marker: never
}
export abstract class $BufferSourceAccessor$$Static implements $BufferSourceAccessor {
}
}

declare module "net.irisshaders.batchedentityrendering.impl.MemoryTrackingBuffer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingBuffer {
"freeAndDeleteBuffer"(): void
"getAllocatedSize"(): integer
"getUsedSize"(): integer
get "allocatedSize"(): integer
get "usedSize"(): integer
}

export namespace $MemoryTrackingBuffer {
const probejs$$marker: never
}
export abstract class $MemoryTrackingBuffer$$Static implements $MemoryTrackingBuffer {
}
}

declare module "net.irisshaders.iris.vertices.ExtendingBufferBuilder" {
import { $VertexFormat$Mode$$Type } from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import { $VertexFormat$$Type } from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $ExtendingBufferBuilder {
"iris$beginWithoutExtending"(mode0: $VertexFormat$Mode$$Type, vertexFormat1: $VertexFormat$$Type): void
}

export namespace $ExtendingBufferBuilder {
const probejs$$marker: never
}
export abstract class $ExtendingBufferBuilder$$Static implements $ExtendingBufferBuilder {
}
}

declare module "net.irisshaders.iris.texture.pbr.SpriteContentsExtension" {
import { $PBRSpriteHolder } from "net.irisshaders.iris.texture.pbr.PBRSpriteHolder"

export interface $SpriteContentsExtension {
"getOrCreatePBRHolder"(): $PBRSpriteHolder
"getPBRHolder"(): $PBRSpriteHolder
get "orCreatePBRHolder"(): $PBRSpriteHolder
get "pBRHolder"(): $PBRSpriteHolder
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export abstract class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {
}
}

declare module "net.irisshaders.iris.vertices.IrisExtendedBufferBuilder" {
import { $VertexFormat$Mode } from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import { $VertexFormat } from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $IrisExtendedBufferBuilder {
"iris$currentBlock"(): short
"iris$currentLocalPosX"(): integer
"iris$currentLocalPosY"(): integer
"iris$currentLocalPosZ"(): integer
"iris$currentRenderType"(): short
"iris$extending"(): boolean
"iris$format"(): $VertexFormat
"iris$incrementVertexCount"(): void
"iris$injectNormalAndUV1"(): boolean
"iris$isTerrain"(): boolean
"iris$mode"(): $VertexFormat$Mode
"iris$resetVertexCount"(): void
"iris$vertexCount"(): integer
}

export namespace $IrisExtendedBufferBuilder {
const probejs$$marker: never
}
export abstract class $IrisExtendedBufferBuilder$$Static implements $IrisExtendedBufferBuilder {
}
}

declare module "net.irisshaders.iris.mixin.rendertype.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {
"shouldSortOnUpload"(): boolean
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export abstract class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {
}
}

declare module "net.irisshaders.iris.mixin.texture.AnimationMetadataSectionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimationMetadataSectionAccessor {
"getFrameHeight"(): integer
"getFrameWidth"(): integer
"setFrameHeight"(int0: integer): void
"setFrameWidth"(int0: integer): void
get "frameHeight"(): integer
get "frameWidth"(): integer
set "frameHeight"(value: integer)
set "frameWidth"(value: integer)
}

export namespace $AnimationMetadataSectionAccessor {
const probejs$$marker: never
}
export abstract class $AnimationMetadataSectionAccessor$$Static implements $AnimationMetadataSectionAccessor {
}
}

declare module "net.irisshaders.iris.compat.sodium.mixin.vertex_format.ChunkMeshAttributeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkMeshAttributeAccessor {
}

export namespace $ChunkMeshAttributeAccessor {
const probejs$$marker: never
}
export abstract class $ChunkMeshAttributeAccessor$$Static implements $ChunkMeshAttributeAccessor {
}
}

declare module "net.irisshaders.iris.parsing.ExtendedBiome" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedBiome {
"getBiomeCategory"(): integer
"getDownfall"(): float
"setBiomeCategory"(int0: integer): void
get "biomeCategory"(): integer
get "downfall"(): float
set "biomeCategory"(value: integer)
}

export namespace $ExtendedBiome {
const probejs$$marker: never
}
export abstract class $ExtendedBiome$$Static implements $ExtendedBiome {
}
}

declare module "net.irisshaders.iris.targets.Blaze3dRenderTargetExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Blaze3dRenderTargetExt {
"iris$getColorBufferVersion"(): integer
"iris$getDepthBufferVersion"(): integer
}

export namespace $Blaze3dRenderTargetExt {
const probejs$$marker: never
}
export abstract class $Blaze3dRenderTargetExt$$Static implements $Blaze3dRenderTargetExt {
}
}

declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAccessor" {
import { $SpriteContents$AnimatedTexture } from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsAccessor {
"getAnimatedTexture"(): $SpriteContents$AnimatedTexture
get "animatedTexture"(): $SpriteContents$AnimatedTexture
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAccessor$$Static implements $SpriteContentsAccessor {
}
}

declare module "net.irisshaders.batchedentityrendering.impl.BufferBuilderExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderExt {
"splitStrip"(): void
}

export namespace $BufferBuilderExt {
const probejs$$marker: never
}
export abstract class $BufferBuilderExt$$Static implements $BufferBuilderExt {
}
}

declare module "net.irisshaders.batchedentityrendering.impl.MemoryTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryTrackingRenderBuffers {
"freeAndDeleteBuffers"(): void
"getEntityBufferAllocatedSize"(): integer
"getMaxBegins"(): integer
"getMiscBufferAllocatedSize"(): integer
get "entityBufferAllocatedSize"(): integer
get "maxBegins"(): integer
get "miscBufferAllocatedSize"(): integer
}

export namespace $MemoryTrackingRenderBuffers {
const probejs$$marker: never
}
export abstract class $MemoryTrackingRenderBuffers$$Static implements $MemoryTrackingRenderBuffers {
}
}

declare module "net.irisshaders.iris.texture.pbr.PBRAtlasTexture" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpriteContents$Ticker$$Type } from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"
import { $AbstractTexture } from "net.minecraft.client.renderer.texture.AbstractTexture"
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $PBRType, $PBRType$$Type } from "net.irisshaders.iris.texture.pbr.PBRType"
import { $PBRDumpable } from "net.irisshaders.iris.texture.pbr.PBRDumpable"
import { $AtlasPBRLoader$PBRTextureAtlasSprite, $AtlasPBRLoader$PBRTextureAtlasSprite$$Type } from "net.irisshaders.iris.texture.pbr.loader.AtlasPBRLoader$PBRTextureAtlasSprite"
import { $Path$$Type } from "java.nio.file.Path"

export class $PBRAtlasTexture extends $AbstractTexture implements $PBRDumpable {
constructor(atlasTexture: $TextureAtlas$$Type, type: $PBRType$$Type)

public "addSprite"(sprite: $AtlasPBRLoader$PBRTextureAtlasSprite$$Type): void
public "clear"(): void
public "cycleAnimationFrames"(): void
public "dumpContents"(id: $ResourceLocation$$Type, path: $Path$$Type): void
public "getAtlasId"(): $ResourceLocation
public "getDefaultDumpLocation"(): $ResourceLocation
public "getSprite"(id: $ResourceLocation$$Type): $AtlasPBRLoader$PBRTextureAtlasSprite
public "getType"(): $PBRType
public static "syncAnimation"(source: $SpriteContents$Ticker$$Type, target: $SpriteContents$Ticker$$Type): void
public "tryUpload"(atlasWidth: integer, atlasHeight: integer, mipLevel: integer): boolean
public "upload"(atlasWidth: integer, atlasHeight: integer, mipLevel: integer): void
get "atlasId"(): $ResourceLocation
get "defaultDumpLocation"(): $ResourceLocation
get "type"(): $PBRType
}
}

declare module "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder" {
import { $TransparencyType, $TransparencyType$$Type } from "net.irisshaders.batchedentityrendering.impl.TransparencyType"

export interface $BlendingStateHolder {
"getTransparencyType"(): $TransparencyType
"setTransparencyType"(transparencyType0: $TransparencyType$$Type): void
get "transparencyType"(): $TransparencyType
set "transparencyType"(value: $TransparencyType$$Type)
}

export namespace $BlendingStateHolder {
const probejs$$marker: never
}
export abstract class $BlendingStateHolder$$Static implements $BlendingStateHolder {
}
}

declare module "net.irisshaders.batchedentityrendering.mixin.RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {
}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
export abstract class $RenderStateShardAccessor$$Static implements $RenderStateShardAccessor {
}
}

declare module "net.irisshaders.iris.pipeline.programs.ShaderInstanceInterface" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"

export interface $ShaderInstanceInterface {
"iris$createExtraShaders"(resourceProvider0: $ResourceProvider$$Type, resourceLocation1: $ResourceLocation$$Type): void
}

export namespace $ShaderInstanceInterface {
const probejs$$marker: never
}
export abstract class $ShaderInstanceInterface$$Static implements $ShaderInstanceInterface {
}
}

declare module "net.irisshaders.iris.shadows.CullingDataCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CullingDataCache {
"restoreState"(): void
"saveState"(): void
}

export namespace $CullingDataCache {
const probejs$$marker: never
}
export abstract class $CullingDataCache$$Static implements $CullingDataCache {
}
}

declare module "net.irisshaders.iris.compat.sodium.mixin.vertex_format.GlVertexAttributeFormatAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GlVertexAttributeFormatAccessor {
}

export namespace $GlVertexAttributeFormatAccessor {
const probejs$$marker: never
}
export abstract class $GlVertexAttributeFormatAccessor$$Static implements $GlVertexAttributeFormatAccessor {
}
}

declare module "net.irisshaders.iris.mixin.texture.SpriteContentsFrameInfoAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsFrameInfoAccessor {
"getIndex"(): integer
"getTime"(): integer
get "index"(): integer
get "time"(): integer
}

export namespace $SpriteContentsFrameInfoAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsFrameInfoAccessor$$Static implements $SpriteContentsFrameInfoAccessor {
}
}

declare module "net.irisshaders.iris.texture.pbr.PBRType" {
import { $Enum } from "java.lang.Enum"

export class $PBRType extends $Enum<$PBRType> {
static readonly "NORMAL": $PBRType
static readonly "SPECULAR": $PBRType

public "appendSuffix"(path: string): string
public static "fromFileLocation"(location: string): $PBRType
public "getDefaultValue"(): integer
public "getSuffix"(): string
public static "removeSuffix"(path: string): string
public static "valueOf"(name: string): $PBRType
public static "values"(): $PBRType[]
get "defaultValue"(): integer
get "suffix"(): string
}
}

declare module "net.irisshaders.batchedentityrendering.mixin.CompositeStateAccessor" {
import { $RenderStateShard$TransparencyStateShard } from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $CompositeStateAccessor {
"getTransparency"(): $RenderStateShard$TransparencyStateShard
get "transparency"(): $RenderStateShard$TransparencyStateShard
}

export namespace $CompositeStateAccessor {
const probejs$$marker: never
}
export abstract class $CompositeStateAccessor$$Static implements $CompositeStateAccessor {
}
}

declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAnimatedTextureAccessor" {
import { $List } from "java.util.List"
import { $SpriteContents$FrameInfo } from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimatedTextureAccessor {
"getFrames"(): $List<$SpriteContents$FrameInfo>
"invokeUploadFrame"(int0: integer, int1: integer, int2: integer): void
get "frames"(): $List<$SpriteContents$FrameInfo>
}

export namespace $SpriteContentsAnimatedTextureAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsAnimatedTextureAccessor$$Static implements $SpriteContentsAnimatedTextureAccessor {
}
}

declare module "net.irisshaders.iris.mixin.ProgramTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ProgramTypeAccessor {
}

export namespace $ProgramTypeAccessor {
const probejs$$marker: never
}
export abstract class $ProgramTypeAccessor$$Static implements $ProgramTypeAccessor {
}
}

declare module "net.irisshaders.iris.fantastic.PhasedParticleEngine" {
import { $ParticleRenderingPhase$$Type } from "net.irisshaders.iris.fantastic.ParticleRenderingPhase"

export interface $PhasedParticleEngine {
"setParticleRenderingPhase"(particleRenderingPhase0: $ParticleRenderingPhase$$Type): void
set "particleRenderingPhase"(value: $ParticleRenderingPhase$$Type)
}

export namespace $PhasedParticleEngine {
const probejs$$marker: never
}
export abstract class $PhasedParticleEngine$$Static implements $PhasedParticleEngine {
}
}

declare module "net.irisshaders.iris.texture.pbr.PBRDumpable" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Path$$Type } from "java.nio.file.Path"
import { $Dumpable } from "net.minecraft.client.renderer.texture.Dumpable"

export interface $PBRDumpable extends $Dumpable {
"dumpContents"(resourceLocation0: $ResourceLocation$$Type, path1: $Path$$Type): void
"getDefaultDumpLocation"(): $ResourceLocation
get "defaultDumpLocation"(): $ResourceLocation
}

export namespace $PBRDumpable {
const probejs$$marker: never
}
export abstract class $PBRDumpable$$Static implements $PBRDumpable {
}
}

declare module "net.irisshaders.batchedentityrendering.mixin.ChunkBufferBuilderPackAccessor" {
import { $Map } from "java.util.Map"
import { $BufferBuilder } from "com.mojang.blaze3d.vertex.BufferBuilder"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $ChunkBufferBuilderPackAccessor {
"getBuilders"(): $Map<$RenderType, $BufferBuilder>
get "builders"(): $Map<$RenderType, $BufferBuilder>
}

export namespace $ChunkBufferBuilderPackAccessor {
const probejs$$marker: never
}
export abstract class $ChunkBufferBuilderPackAccessor$$Static implements $ChunkBufferBuilderPackAccessor {
}
}

declare module "net.irisshaders.iris.texture.pbr.loader.AtlasPBRLoader$PBRTextureAtlasSprite" {
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $AtlasPBRLoader$PBRTextureAtlasSprite extends $TextureAtlasSprite {
public "getBaseSprite"(): $TextureAtlasSprite
get "baseSprite"(): $TextureAtlasSprite
}
}

declare module "net.irisshaders.iris.api.v0.item.IrisItemLightProvider" {
import { $Vector3f } from "org.joml.Vector3f"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IrisItemLightProvider {
"getLightColor"(player: $Player$$Type, stack: $ItemStack$$Type): $Vector3f
"getLightEmission"(player: $Player$$Type, stack: $ItemStack$$Type): integer
}

export namespace $IrisItemLightProvider {
const DEFAULT_LIGHT_COLOR: $Vector3f
}
export abstract class $IrisItemLightProvider$$Static implements $IrisItemLightProvider {
static readonly "DEFAULT_LIGHT_COLOR": $Vector3f

}
}

declare module "net.irisshaders.iris.vertices.BlockSensitiveBufferBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockSensitiveBufferBuilder {
"beginBlock"(short0: short, short1: short, int2: integer, int3: integer, int4: integer): void
"endBlock"(): void
}

export namespace $BlockSensitiveBufferBuilder {
const probejs$$marker: never
}
export abstract class $BlockSensitiveBufferBuilder$$Static implements $BlockSensitiveBufferBuilder {
}
}

declare module "net.irisshaders.iris.texture.pbr.PBRAtlasHolder" {
import { $PBRAtlasTexture, $PBRAtlasTexture$$Type } from "net.irisshaders.iris.texture.pbr.PBRAtlasTexture"

export class $PBRAtlasHolder {
constructor()

public "cycleAnimationFrames"(): void
public "getNormalAtlas"(): $PBRAtlasTexture
public "getSpecularAtlas"(): $PBRAtlasTexture
public "setNormalAtlas"(atlas: $PBRAtlasTexture$$Type): void
public "setSpecularAtlas"(atlas: $PBRAtlasTexture$$Type): void
get "normalAtlas"(): $PBRAtlasTexture
get "specularAtlas"(): $PBRAtlasTexture
set "normalAtlas"(value: $PBRAtlasTexture$$Type)
set "specularAtlas"(value: $PBRAtlasTexture$$Type)
}
}

declare module "net.irisshaders.iris.compat.sodium.mixin.vertex_format.CommonVertexAttributeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommonVertexAttributeAccessor {
}

export namespace $CommonVertexAttributeAccessor {
const probejs$$marker: never
}
export abstract class $CommonVertexAttributeAccessor$$Static implements $CommonVertexAttributeAccessor {
}
}

declare module "net.irisshaders.iris.texture.pbr.PBRSpriteHolder" {
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $PBRSpriteHolder {
constructor()

public "close"(): void
public "getNormalSprite"(): $TextureAtlasSprite
public "getSpecularSprite"(): $TextureAtlasSprite
public "setNormalSprite"(sprite: $TextureAtlasSprite$$Type): void
public "setSpecularSprite"(sprite: $TextureAtlasSprite$$Type): void
get "normalSprite"(): $TextureAtlasSprite
get "specularSprite"(): $TextureAtlasSprite
set "normalSprite"(value: $TextureAtlasSprite$$Type)
set "specularSprite"(value: $TextureAtlasSprite$$Type)
}
}

declare module "net.irisshaders.batchedentityrendering.impl.TransparencyType" {
import { $Enum } from "java.lang.Enum"

export class $TransparencyType extends $Enum<$TransparencyType> {
static readonly "DECAL": $TransparencyType
static readonly "GENERAL_TRANSPARENT": $TransparencyType
static readonly "LINES": $TransparencyType
static readonly "OPAQUE": $TransparencyType
static readonly "OPAQUE_DECAL": $TransparencyType
static readonly "WATER_MASK": $TransparencyType

public static "valueOf"(name: string): $TransparencyType
public static "values"(): $TransparencyType[]
}
}

declare module "net.irisshaders.iris.mixin.LightTextureAccessor" {
import { $DynamicTexture } from "net.minecraft.client.renderer.texture.DynamicTexture"

export interface $LightTextureAccessor {
"getLightTexture"(): $DynamicTexture
get "lightTexture"(): $DynamicTexture
}

export namespace $LightTextureAccessor {
const probejs$$marker: never
}
export abstract class $LightTextureAccessor$$Static implements $LightTextureAccessor {
}
}

declare module "net.irisshaders.iris.fantastic.ParticleRenderingPhase" {
import { $Enum } from "java.lang.Enum"

export class $ParticleRenderingPhase extends $Enum<$ParticleRenderingPhase> {
static readonly "EVERYTHING": $ParticleRenderingPhase
static readonly "OPAQUE": $ParticleRenderingPhase
static readonly "TRANSLUCENT": $ParticleRenderingPhase

public static "valueOf"(name: string): $ParticleRenderingPhase
public static "values"(): $ParticleRenderingPhase[]
}
}

declare module "net.irisshaders.iris.compat.sodium.impl.block_context.BlockContextHolder" {
import { $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $BlockContextHolder {
constructor()
constructor(idMap: $Object2IntMap$$Type<$BlockState$$Type>)

public "reset"(): void
public "set"(state: $BlockState$$Type, renderType: short, lightValue: byte): void
public "setLocalPos"(localPosX: integer, localPosY: integer, localPosZ: integer): void
get "blockId"(): short
set "blockId"(value: short)
get "ignoreMidBlock"(): boolean
set "ignoreMidBlock"(value: boolean)
get "lightValue"(): byte
set "lightValue"(value: byte)
get "localPosX"(): integer
set "localPosX"(value: integer)
get "localPosY"(): integer
set "localPosY"(value: integer)
get "localPosZ"(): integer
set "localPosZ"(value: integer)
get "renderType"(): short
set "renderType"(value: short)
}
}

declare module "net.irisshaders.batchedentityrendering.impl.DrawCallTrackingRenderBuffers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DrawCallTrackingRenderBuffers {
"getDrawCalls"(): integer
"getRenderTypes"(): integer
"resetDrawCounts"(): void
get "drawCalls"(): integer
get "renderTypes"(): integer
}

export namespace $DrawCallTrackingRenderBuffers {
const probejs$$marker: never
}
export abstract class $DrawCallTrackingRenderBuffers$$Static implements $DrawCallTrackingRenderBuffers {
}
}

declare module "net.irisshaders.batchedentityrendering.impl.RenderBuffersExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderBuffersExt {
"beginLevelRendering"(): void
"endLevelRendering"(): void
}

export namespace $RenderBuffersExt {
const probejs$$marker: never
}
export abstract class $RenderBuffersExt$$Static implements $RenderBuffersExt {
}
}

declare module "net.irisshaders.iris.helpers.VertexBufferHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexBufferHelper {
"restoreBinding"(): void
"saveBinding"(): void
}

export namespace $VertexBufferHelper {
const probejs$$marker: never
}
export abstract class $VertexBufferHelper$$Static implements $VertexBufferHelper {
}
}

declare module "net.irisshaders.iris.texture.SpriteContentsExtension" {
import { $SpriteContents$Ticker } from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"

export interface $SpriteContentsExtension {
"getCreatedTicker"(): $SpriteContents$Ticker
get "createdTicker"(): $SpriteContents$Ticker
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export abstract class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {
}
}

declare module "net.irisshaders.iris.mixin.rendertype.RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {
"getName"(): string
get "name"(): string
}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
export abstract class $RenderStateShardAccessor$$Static implements $RenderStateShardAccessor {
}
}

declare module "net.irisshaders.iris.mixin.texture.SpriteContentsTickerAccessor" {
import { $SpriteContents$AnimatedTexture } from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor {
"getAnimationInfo"(): $SpriteContents$AnimatedTexture
"getFrame"(): integer
"getSubFrame"(): integer
"setFrame"(int0: integer): void
"setSubFrame"(int0: integer): void
get "animationInfo"(): $SpriteContents$AnimatedTexture
get "frame"(): integer
get "subFrame"(): integer
set "frame"(value: integer)
set "subFrame"(value: integer)
}

export namespace $SpriteContentsTickerAccessor {
const probejs$$marker: never
}
export abstract class $SpriteContentsTickerAccessor$$Static implements $SpriteContentsTickerAccessor {
}
}

declare module "net.irisshaders.iris.texture.pbr.TextureAtlasExtension" {
import { $PBRAtlasHolder } from "net.irisshaders.iris.texture.pbr.PBRAtlasHolder"

export interface $TextureAtlasExtension {
"getOrCreatePBRHolder"(): $PBRAtlasHolder
"getPBRHolder"(): $PBRAtlasHolder
get "orCreatePBRHolder"(): $PBRAtlasHolder
get "pBRHolder"(): $PBRAtlasHolder
}

export namespace $TextureAtlasExtension {
const probejs$$marker: never
}
export abstract class $TextureAtlasExtension$$Static implements $TextureAtlasExtension {
}
}

declare module "net.irisshaders.iris.mixin.DimensionTypeAccessor" {
import { $OptionalLong } from "java.util.OptionalLong"

export interface $DimensionTypeAccessor {
"getAmbientLight"(): float
"getFixedTime"(): $OptionalLong
get "ambientLight"(): float
get "fixedTime"(): $OptionalLong
}

export namespace $DimensionTypeAccessor {
const probejs$$marker: never
}
export abstract class $DimensionTypeAccessor$$Static implements $DimensionTypeAccessor {
}
}

declare module "net.irisshaders.iris.mixin.texture.TextureAtlasAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $TextureAtlasAccessor {
"callGetHeight"(): integer
"callGetWidth"(): integer
"getMipLevel"(): integer
"getTexturesByName"(): $Map<$ResourceLocation, $TextureAtlasSprite>
get "mipLevel"(): integer
get "texturesByName"(): $Map<$ResourceLocation, $TextureAtlasSprite>
}

export namespace $TextureAtlasAccessor {
const probejs$$marker: never
}
export abstract class $TextureAtlasAccessor$$Static implements $TextureAtlasAccessor {
}
}

declare module "net.irisshaders.batchedentityrendering.mixin.OutlineBufferSourceAccessor" {
import { $MultiBufferSource$BufferSource } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $OutlineBufferSourceAccessor {
"getOutlineBufferSource"(): $MultiBufferSource$BufferSource
get "outlineBufferSource"(): $MultiBufferSource$BufferSource
}

export namespace $OutlineBufferSourceAccessor {
const probejs$$marker: never
}
export abstract class $OutlineBufferSourceAccessor$$Static implements $OutlineBufferSourceAccessor {
}
}

declare module "net.irisshaders.iris.compat.sodium.impl.block_context.ChunkBuildBuffersExt" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $ChunkBuildBuffersExt {
"iris$ignoreMidBlock"(boolean0: boolean): void
"iris$resetBlockContext"(): void
"iris$setLocalPos"(int0: integer, int1: integer, int2: integer): void
"iris$setMaterialId"(blockState0: $BlockState$$Type, short1: short, byte2: byte): void
}

export namespace $ChunkBuildBuffersExt {
const probejs$$marker: never
}
export abstract class $ChunkBuildBuffersExt$$Static implements $ChunkBuildBuffersExt {
}
}

declare module "net.irisshaders.batchedentityrendering.mixin.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor {
"shouldSortOnUpload"(): boolean
}

export namespace $RenderTypeAccessor {
const probejs$$marker: never
}
export abstract class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {
}
}

declare module "net.irisshaders.iris.mixin.GameRendererAccessor" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $GameRendererAccessor {
"getPanoramicMode"(): boolean
"getRenderHand"(): boolean
"invokeBobHurt"(poseStack0: $PoseStack$$Type, float1: float): void
"invokeBobView"(poseStack0: $PoseStack$$Type, float1: float): void
"invokeGetFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
get "panoramicMode"(): boolean
get "renderHand"(): boolean
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export abstract class $GameRendererAccessor$$Static implements $GameRendererAccessor {
}
}

declare module "net.irisshaders.iris.mixin.LevelRendererAccessor" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $RenderBuffers, $RenderBuffers$$Type } from "net.minecraft.client.renderer.RenderBuffers"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Frustum$$Type } from "net.minecraft.client.renderer.culling.Frustum"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $EntityRenderDispatcher } from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $LevelRendererAccessor {
"getEntityRenderDispatcher"(): $EntityRenderDispatcher
"getLevel"(): $ClientLevel
"getRenderBuffers"(): $RenderBuffers
"invokeRenderChunkLayer"(renderType0: $RenderType$$Type, poseStack1: $PoseStack$$Type, double2: double, double3: double, double4: double, matrix4f5: $Matrix4f$$Type): void
"invokeRenderEntity"(entity0: $Entity$$Type, double1: double, double2: double, double3: double, float4: float, poseStack5: $PoseStack$$Type, multiBufferSource6: $MultiBufferSource$$Type): void
"invokeSetupRender"(camera0: $Camera$$Type, frustum1: $Frustum$$Type, boolean2: boolean, boolean3: boolean): void
"setRenderBuffers"(renderBuffers0: $RenderBuffers$$Type): void
"setShouldRegenerateClouds"(boolean0: boolean): void
"shouldRegenerateClouds"(): boolean
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "level"(): $ClientLevel
get "renderBuffers"(): $RenderBuffers
set "renderBuffers"(value: $RenderBuffers$$Type)
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export abstract class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {
}
}

declare module "net.irisshaders.iris.compat.sodium.mixin.shadow_map.SodiumWorldRendererAccessor" {
import { $RenderBuffers$$Type } from "net.minecraft.client.renderer.RenderBuffers"
import { $MultiBufferSource$BufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import { $SortedSet$$Type } from "java.util.SortedSet"
import { $Long2ObjectMap$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $BlockDestructionProgress$$Type } from "net.minecraft.server.level.BlockDestructionProgress"
import { $BlockEntityRenderDispatcher$$Type } from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"

export interface $SodiumWorldRendererAccessor {
"invokeRenderBlockEntities"(poseStack0: $PoseStack$$Type, renderBuffers1: $RenderBuffers$$Type, long2ObjectMap2: $Long2ObjectMap$$Type<$SortedSet$$Type<$BlockDestructionProgress$$Type>>, float3: float, bufferSource4: $MultiBufferSource$BufferSource$$Type, double5: double, double6: double, double7: double, blockEntityRenderDispatcher8: $BlockEntityRenderDispatcher$$Type): void
"invokeRenderGlobalBlockEntities"(poseStack0: $PoseStack$$Type, renderBuffers1: $RenderBuffers$$Type, long2ObjectMap2: $Long2ObjectMap$$Type<$SortedSet$$Type<$BlockDestructionProgress$$Type>>, float3: float, bufferSource4: $MultiBufferSource$BufferSource$$Type, double5: double, double6: double, double7: double, blockEntityRenderDispatcher8: $BlockEntityRenderDispatcher$$Type): void
}

export namespace $SodiumWorldRendererAccessor {
const probejs$$marker: never
}
export abstract class $SodiumWorldRendererAccessor$$Static implements $SodiumWorldRendererAccessor {
}
}

declare module "net.irisshaders.iris.compat.sodium.impl.block_context.ContextAwareVertexWriter" {
import { $BlockContextHolder$$Type } from "net.irisshaders.iris.compat.sodium.impl.block_context.BlockContextHolder"

export interface $ContextAwareVertexWriter {
"flipUpcomingQuadNormal"(): void
"iris$setContextHolder"(blockContextHolder0: $BlockContextHolder$$Type): void
}

export namespace $ContextAwareVertexWriter {
const probejs$$marker: never
}
export abstract class $ContextAwareVertexWriter$$Static implements $ContextAwareVertexWriter {
}
}

