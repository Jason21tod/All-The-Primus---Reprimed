declare module "net.minecraft.client.resources.DownloadedPackSource" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $URL$$Type } from "java.net.URL"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RepositorySource } from "net.minecraft.server.packs.repository.RepositorySource"
import { $PackSource$$Type } from "net.minecraft.server.packs.repository.PackSource"
import { $Pack$$Type } from "net.minecraft.server.packs.repository.Pack"
import { $File$$Type } from "java.io.File"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export class $DownloadedPackSource implements $RepositorySource {
constructor(file0: $File$$Type)

public "clearServerPack"(): $CompletableFuture<void>
public "downloadAndSelectResourcePack"(uRL0: $URL$$Type, string1: string, boolean2: boolean): $CompletableFuture<any>
public "loadBundledResourcePack"(levelStorageAccess0: $LevelStorageSource$LevelStorageAccess$$Type): $CompletableFuture<void>
public "loadPacks"(consumer0: $Consumer$$Type<$Pack$$Type>): void
public "setServerPack"(file0: $File$$Type, packSource1: $PackSource$$Type): $CompletableFuture<void>
}
}

declare module "net.minecraft.client.resources.language.LanguageManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LanguageInfo } from "net.minecraft.client.resources.language.LanguageInfo"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Collection } from "java.util.Collection"
import { $ResourceManagerReloadListener } from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $Locale } from "java.util.Locale"
import { $IdentifiableResourceReloadListener } from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import { $SortedMap } from "java.util.SortedMap"

export class $LanguageManager implements $ResourceManagerReloadListener, $IdentifiableResourceReloadListener {
static readonly "DEFAULT_LANGUAGE_CODE": string

constructor(string0: string)

public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getJavaLocale"(): $Locale
public "getLanguage"(string0: string): $LanguageInfo
public "getLanguages"(): $SortedMap<string, $LanguageInfo>
public "getName"(): string
public "getSelected"(): string
public "onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "setSelected"(string0: string): void
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "javaLocale"(): $Locale
get "languages"(): $SortedMap<string, $LanguageInfo>
get "name"(): string
get "selected"(): string
set "selected"(value: string)
}
}

declare module "net.minecraft.client.resources.metadata.animation.AnimationMetadataSectionSerializer" {
import { $AnimationMetadataSection } from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection"
import { $MetadataSectionSerializer } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"

export class $AnimationMetadataSectionSerializer implements $MetadataSectionSerializer<$AnimationMetadataSection> {
constructor()

public "getMetadataSectionName"(): string
get "metadataSectionName"(): string
}
}

declare module "net.minecraft.client.resources.model.UnbakedModel" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Collection } from "java.util.Collection"
import { $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $Function$$Type } from "java.util.function.Function"
import { $ModelBaker$$Type } from "net.minecraft.client.resources.model.ModelBaker"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ModelState$$Type } from "net.minecraft.client.resources.model.ModelState"

export interface $UnbakedModel {
"bake"(modelBaker0: $ModelBaker$$Type, function1: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, modelState2: $ModelState$$Type, resourceLocation3: $ResourceLocation$$Type): $BakedModel
"getDependencies"(): $Collection<$ResourceLocation>
"resolveParents"(function0: $Function$$Type<$ResourceLocation$$Type, $UnbakedModel>): void
get "dependencies"(): $Collection<$ResourceLocation>
}

export namespace $UnbakedModel {
const probejs$$marker: never
}
export abstract class $UnbakedModel$$Static implements $UnbakedModel {
}
}

declare module "net.minecraft.client.resources.sounds.SoundInstance" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource } from "net.minecraft.sounds.SoundSource"
import { $SoundBufferLibrary$$Type } from "net.minecraft.client.sounds.SoundBufferLibrary"
import { $SoundInstance$Attenuation } from "net.minecraft.client.resources.sounds.SoundInstance$Attenuation"
import { $WeighedSoundEvents } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $SoundManager$$Type } from "net.minecraft.client.sounds.SoundManager"
import { $FabricSoundInstance } from "net.fabricmc.fabric.api.client.sound.v1.FabricSoundInstance"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"
import { $Sound, $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export interface $SoundInstance extends $FabricSoundInstance {
"canPlaySound"(): boolean
"canStartSilent"(): boolean
"getAttenuation"(): $SoundInstance$Attenuation
"getAudioStream"(loader: $SoundBufferLibrary$$Type, id: $ResourceLocation$$Type, repeatInstantly: boolean): $CompletableFuture<$AudioStream>
"getDelay"(): integer
"getLocation"(): $ResourceLocation
"getPitch"(): float
"getSound"(): $Sound
"getSource"(): $SoundSource
"getStream"(soundBuffers: $SoundBufferLibrary$$Type, sound: $Sound$$Type, looping: boolean): $CompletableFuture
"getVolume"(): float
"getX"(): double
"getY"(): double
"getZ"(): double
"isLooping"(): boolean
"isRelative"(): boolean
"resolve"(soundManager0: $SoundManager$$Type): $WeighedSoundEvents
get "attenuation"(): $SoundInstance$Attenuation
get "delay"(): integer
get "location"(): $ResourceLocation
get "pitch"(): float
get "sound"(): $Sound
get "source"(): $SoundSource
get "volume"(): float
get "x"(): double
get "y"(): double
get "z"(): double
get "looping"(): boolean
get "relative"(): boolean
}

export namespace $SoundInstance {
function createUnseededRandom(): $RandomSource
}
export abstract class $SoundInstance$$Static implements $SoundInstance {
static "createUnseededRandom"(): $RandomSource
}
}

declare module "net.minecraft.client.resources.SkinManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $MinecraftSessionService$$Type } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $SkinManager$SkinTextureCallback$$Type } from "net.minecraft.client.resources.SkinManager$SkinTextureCallback"
import { $Map } from "java.util.Map"
import { $MinecraftProfileTexture$Type, $MinecraftProfileTexture$Type$$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type"
import { $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $MinecraftProfileTexture, $MinecraftProfileTexture$$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture"
import { $TextureManager, $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $File$$Type } from "java.io.File"

export class $SkinManager {
static readonly "PROPERTY_TEXTURES": string
readonly "textureManager": $TextureManager

constructor(textureManager0: $TextureManager$$Type, file1: $File$$Type, minecraftSessionService2: $MinecraftSessionService$$Type)

public "getInsecureSkinInformation"(gameProfile0: $GameProfile$$Type): $Map<$MinecraftProfileTexture$Type, $MinecraftProfileTexture>
public "getInsecureSkinLocation"(gameProfile0: $GameProfile$$Type): $ResourceLocation
public "registerSkins"(gameProfile0: $GameProfile$$Type, skinTextureCallback1: $SkinManager$SkinTextureCallback$$Type, boolean2: boolean): void
public "registerTexture"(minecraftProfileTexture0: $MinecraftProfileTexture$$Type, type1: $MinecraftProfileTexture$Type$$Type): $ResourceLocation
}
}

declare module "net.minecraft.client.resources.MobEffectTextureManager" {
import { $TextureAtlasHolder } from "net.minecraft.client.resources.TextureAtlasHolder"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $MobEffectTextureManager extends $TextureAtlasHolder {
constructor(textureManager0: $TextureManager$$Type)

public "get"(mobEffect0: $MobEffect$$Type): $TextureAtlasSprite
public "getName"(): string
get "name"(): string
}
}

declare module "net.minecraft.client.resources.sounds.Sound$Type" {
import { $Enum } from "java.lang.Enum"

export class $Sound$Type extends $Enum<$Sound$Type> {
static readonly "FILE": $Sound$Type
static readonly "SOUND_EVENT": $Sound$Type

public static "getByName"(string0: string): $Sound$Type
public static "valueOf"(string0: string): $Sound$Type
public static "values"(): $Sound$Type[]
}
}

declare module "net.minecraft.client.resources.TextureAtlasHolder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"

export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable {
constructor(textureManager0: $TextureManager$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type)

public "close"(): void
public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "net.minecraft.client.resources.sounds.Sound" {
import { $FileToIdConverter } from "net.minecraft.resources.FileToIdConverter"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Weighted } from "net.minecraft.client.sounds.Weighted"
import { $Sound$Type, $Sound$Type$$Type } from "net.minecraft.client.resources.sounds.Sound$Type"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"
import { $SampledFloat, $SampledFloat$$Type } from "net.minecraft.util.valueproviders.SampledFloat"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $Sound implements $Weighted<$Sound> {
static readonly "SOUND_LISTER": $FileToIdConverter

constructor(string0: string, sampledFloat1: $SampledFloat$$Type, sampledFloat2: $SampledFloat$$Type, int3: integer, type4: $Sound$Type$$Type, boolean5: boolean, boolean6: boolean, int7: integer)

public "getAttenuationDistance"(): integer
public "getLocation"(): $ResourceLocation
public "getPath"(): $ResourceLocation
public "getPitch"(): $SampledFloat
public "getType"(): $Sound$Type
public "getVolume"(): $SampledFloat
public "getWeight"(): integer
public "handler$cck000$detour$fixOpusPath"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
public "shouldPreload"(): boolean
public "shouldStream"(): boolean
get "attenuationDistance"(): integer
get "location"(): $ResourceLocation
get "path"(): $ResourceLocation
get "pitch"(): $SampledFloat
get "type"(): $Sound$Type
get "volume"(): $SampledFloat
get "weight"(): integer
}
}

declare module "net.minecraft.client.resources.model.ModelManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $AccessorModelManager } from "org.violetmoon.quark.mixin.mixins.client.accessor.AccessorModelManager"
import { $TextureAtlas } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $ModelBakery } from "net.minecraft.client.resources.model.ModelBakery"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $BlockModelShaper } from "net.minecraft.client.renderer.block.BlockModelShaper"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $BakedModelManagerAccessor } from "dev.emi.emi.mixin.accessor.BakedModelManagerAccessor"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $ModelResourceLocation$$Type } from "net.minecraft.client.resources.model.ModelResourceLocation"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $IdentifiableResourceReloadListener } from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"
import { $FabricBakedModelManager } from "net.fabricmc.fabric.api.client.model.loading.v1.FabricBakedModelManager"

export class $ModelManager implements $PreparableReloadListener, $AutoCloseable, $FabricBakedModelManager, $BakedModelManagerAccessor, $IdentifiableResourceReloadListener, $AccessorModelManager {
constructor(textureManager0: $TextureManager$$Type, blockColors1: $BlockColors$$Type, int2: integer)

public "close"(): void
public "getAtlas"(resourceLocation0: $ResourceLocation$$Type): $TextureAtlas
public "getBlockModelShaper"(): $BlockModelShaper
public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getMissingModel"(): $BakedModel
public "getModel"(resourceLocation0: $ResourceLocation$$Type): $BakedModel
public "getModel"(modelResourceLocation0: $ModelResourceLocation$$Type): $BakedModel
public "getModelBakery"(): $ModelBakery
public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
public "requiresRender"(blockState0: $BlockState$$Type, blockState1: $BlockState$$Type): boolean
public "updateMaxMipLevel"(int0: integer): void
get "blockModelShaper"(): $BlockModelShaper
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "missingModel"(): $BakedModel
get "modelBakery"(): $ModelBakery
get "name"(): string
}
}

declare module "net.minecraft.client.resources.metadata.animation.FrameSize" {
import { $Record } from "java.lang.Record"

export class $FrameSize extends $Record {
constructor(int0: integer, int1: integer)

public "height"(): integer
public "width"(): integer
}
}

declare module "net.minecraft.client.resources.model.ModelBakery$BakedCacheKey" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Transformation, $Transformation$$Type } from "com.mojang.math.Transformation"
import { $Record } from "java.lang.Record"

export class $ModelBakery$BakedCacheKey extends $Record {
constructor(id: $ResourceLocation$$Type, transformation: $Transformation$$Type, isUvLocked: boolean)

public "id"(): $ResourceLocation
public "isUvLocked"(): boolean
public "transformation"(): $Transformation
get "uvLocked"(): boolean
}
}

declare module "net.minecraft.client.resources.SplashManager" {
import { $User$$Type } from "net.minecraft.client.User"
import { $SplashRenderer } from "net.minecraft.client.gui.components.SplashRenderer"
import { $List } from "java.util.List"
import { $SimplePreparableReloadListener } from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"

export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
constructor(user0: $User$$Type)

public "getName"(): string
public "getSplash"(): $SplashRenderer
get "name"(): string
get "splash"(): $SplashRenderer
}
}

declare module "net.minecraft.client.resources.PaintingTextureManager" {
import { $PaintingVariant$$Type } from "net.minecraft.world.entity.decoration.PaintingVariant"
import { $TextureAtlasHolder } from "net.minecraft.client.resources.TextureAtlasHolder"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $PaintingTextureManager extends $TextureAtlasHolder {
constructor(textureManager0: $TextureManager$$Type)

public "get"(paintingVariant0: $PaintingVariant$$Type): $TextureAtlasSprite
public "getBackSprite"(): $TextureAtlasSprite
public "getName"(): string
get "backSprite"(): $TextureAtlasSprite
get "name"(): string
}
}

declare module "net.minecraft.client.resources.model.Material" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $Comparator } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $Material {
static readonly "COMPARATOR": $Comparator<$Material>

constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type)

public "atlasLocation"(): $ResourceLocation
public "buffer"(multiBufferSource0: $MultiBufferSource$$Type, function1: $Function$$Type<$ResourceLocation$$Type, $RenderType>): $VertexConsumer
public "buffer"(multiBufferSource0: $MultiBufferSource$$Type, function1: $Function$$Type<$ResourceLocation$$Type, $RenderType>, boolean2: boolean): $VertexConsumer
public "renderType"(function0: $Function$$Type<$ResourceLocation$$Type, $RenderType>): $RenderType
public "sprite"(): $TextureAtlasSprite
public "texture"(): $ResourceLocation
}
}

declare module "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection" {
import { $List, $List$$Type } from "java.util.List"
import { $AnimationFrame, $AnimationFrame$$Type } from "net.minecraft.client.resources.metadata.animation.AnimationFrame"
import { $AnimationMetadataSectionAccessor } from "net.irisshaders.iris.mixin.texture.AnimationMetadataSectionAccessor"
import { $FrameSize } from "net.minecraft.client.resources.metadata.animation.FrameSize"
import { $AnimationMetadataSection$FrameOutput$$Type } from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection$FrameOutput"
import { $AnimationMetadataSectionSerializer } from "net.minecraft.client.resources.metadata.animation.AnimationMetadataSectionSerializer"

export class $AnimationMetadataSection implements $AnimationMetadataSectionAccessor {
static readonly "DEFAULT_FRAME_TIME": integer
static readonly "EMPTY": $AnimationMetadataSection
static readonly "SECTION_NAME": string
static readonly "SERIALIZER": $AnimationMetadataSectionSerializer
static readonly "UNKNOWN_SIZE": integer
readonly "frames": $List<$AnimationFrame>

constructor(list0: $List$$Type<$AnimationFrame$$Type>, int1: integer, int2: integer, int3: integer, boolean4: boolean)

public "calculateFrameSize"(int0: integer, int1: integer): $FrameSize
public "forEachFrame"(frameOutput0: $AnimationMetadataSection$FrameOutput$$Type): void
public "getDefaultFrameTime"(): integer
public "isInterpolatedFrames"(): boolean
get "frameHeight"(): integer
set "frameHeight"(value: integer)
get "frameWidth"(): integer
set "frameWidth"(value: integer)
get "defaultFrameTime"(): integer
get "interpolatedFrames"(): boolean
}
}

declare module "net.minecraft.client.resources.metadata.animation.AnimationFrame" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AnimationFrame {
static readonly "UNKNOWN_FRAME_TIME": integer

constructor(int0: integer)
constructor(int0: integer, int1: integer)

public "getIndex"(): integer
public "getTime"(int0: integer): integer
get "index"(): integer
}
}

declare module "net.minecraft.client.resources.model.ModelBakery$LoadedJson" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Record } from "java.lang.Record"

export class $ModelBakery$LoadedJson extends $Record {
constructor(source: string, data: $JsonElement$$Type)

public "data"(): $JsonElement
public "source"(): string
}
}

declare module "net.minecraft.client.resources.model.BakedModel" {
import { $ChunkRenderTypeSet } from "net.minecraftforge.client.ChunkRenderTypeSet"
import { $FabricBakedModel } from "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel"
import { $ItemTransforms } from "net.minecraft.client.renderer.block.model.ItemTransforms"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IForgeBakedModel } from "net.minecraftforge.client.extensions.IForgeBakedModel"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ModelData, $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemOverrides } from "net.minecraft.client.renderer.block.model.ItemOverrides"
import { $List } from "java.util.List"
import { $EmbeddiumBakedModelExtension } from "org.embeddedt.embeddium.api.model.EmbeddiumBakedModelExtension"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RenderContext$$Type } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import { $BakedModelMixin } from "me.jellysquid.mods.sodium.mixin.core.model.BakedModelMixin"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $BakedModelMixin as $BakedModelMixin$0 } from "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $BakedModel extends $IForgeBakedModel, $FabricBakedModel, $BakedModelMixin$0, $BakedModelMixin, $EmbeddiumBakedModelExtension {
"applyTransform"(itemDisplayContext0: $ItemDisplayContext$$Type, poseStack1: $PoseStack$$Type, boolean2: boolean): $BakedModel
"emitBlockQuads"(blockView: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, randomSupplier: $Supplier$$Type, context: $RenderContext$$Type): void
"emitItemQuads"(stack: $ItemStack$$Type, randomSupplier: $Supplier$$Type<$RandomSource>, context: $RenderContext$$Type): void
"getModelData"(blockAndTintGetter0: $BlockAndTintGetter$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, modelData3: $ModelData$$Type): $ModelData
"getOverrides"(): $ItemOverrides
/** @deprecated */
"getParticleIcon"(): $TextureAtlasSprite
"getParticleIcon"(modelData0: $ModelData$$Type): $TextureAtlasSprite
/** @deprecated */
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type): $List<$BakedQuad>
"getQuads"(blockState0: $BlockState$$Type, direction1: $Direction$$Type, randomSource2: $RandomSource$$Type, modelData3: $ModelData$$Type, renderType4: $RenderType$$Type): $List<$BakedQuad>
"getRenderPasses"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$BakedModel>
"getRenderTypes"(blockState0: $BlockState$$Type, randomSource1: $RandomSource$$Type, modelData2: $ModelData$$Type): $ChunkRenderTypeSet
"getRenderTypes"(itemStack0: $ItemStack$$Type, boolean1: boolean): $List<$RenderType>
/** @deprecated */
"getTransforms"(): $ItemTransforms
"isCustomRenderer"(): boolean
"isGui3d"(): boolean
"isVanillaAdapter"(): boolean
"useAmbientOcclusion"(): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"useAmbientOcclusion"(blockState0: $BlockState$$Type): boolean
"useAmbientOcclusionWithLightEmission"(blockState0: $BlockState$$Type, renderType1: $RenderType$$Type): boolean
"usesBlockLight"(): boolean
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "transforms"(): $ItemTransforms
get "customRenderer"(): boolean
get "gui3d"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $BakedModel {
const probejs$$marker: never
}
export abstract class $BakedModel$$Static implements $BakedModel {
}
}

declare module "net.minecraft.client.resources.sounds.SoundInstance$Attenuation" {
import { $Enum } from "java.lang.Enum"

export class $SoundInstance$Attenuation extends $Enum<$SoundInstance$Attenuation> {
static readonly "LINEAR": $SoundInstance$Attenuation
static readonly "NONE": $SoundInstance$Attenuation

public static "valueOf"(string0: string): $SoundInstance$Attenuation
public static "values"(): $SoundInstance$Attenuation[]
}
}

declare module "net.minecraft.client.resources.language.LanguageInfo" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"

export class $LanguageInfo extends $Record {
static readonly "CODEC": $Codec<$LanguageInfo>

constructor(string0: string, string1: string, boolean2: boolean)

public "bidirectional"(): boolean
public "name"(): string
public "region"(): string
public "toComponent"(): $Component
}
}

declare module "net.minecraft.client.resources.model.ModelState" {
import { $Transformation } from "com.mojang.math.Transformation"

export interface $ModelState {
"getRotation"(): $Transformation
"isUvLocked"(): boolean
get "rotation"(): $Transformation
get "uvLocked"(): boolean
}

export namespace $ModelState {
const probejs$$marker: never
}
export abstract class $ModelState$$Static implements $ModelState {
}
}

declare module "net.minecraft.client.resources.model.ModelResourceLocation" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $ModelResourceLocation extends $ResourceLocation {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)
constructor(string0: string, string1: string, string2: string)

public static "checkSpecialEquality"(o: any, o1: any, shallow: boolean): boolean
public "getVariant"(): string
public static "vanilla"(string0: string, string1: string): $ModelResourceLocation
get "variant"(): string
}
}

declare module "net.minecraft.client.resources.SkinManager$SkinTextureCallback" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MinecraftProfileTexture$Type$$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture$Type"
import { $MinecraftProfileTexture$$Type } from "com.mojang.authlib.minecraft.MinecraftProfileTexture"

export interface $SkinManager$SkinTextureCallback {
"onSkinTextureAvailable"(type0: $MinecraftProfileTexture$Type$$Type, resourceLocation1: $ResourceLocation$$Type, minecraftProfileTexture2: $MinecraftProfileTexture$$Type): void
}

export namespace $SkinManager$SkinTextureCallback {
const probejs$$marker: never
}
export abstract class $SkinManager$SkinTextureCallback$$Static implements $SkinManager$SkinTextureCallback {
}
}

declare module "net.minecraft.client.resources.model.ModelBakery" {
import { $FileToIdConverter } from "net.minecraft.resources.FileToIdConverter"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ModelBakeryAccessor } from "fuzs.puzzleslib.mixin.client.accessor.ModelBakeryAccessor"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $ModelLoaderHooks } from "net.fabricmc.fabric.impl.client.model.loading.ModelLoaderHooks"
import { $ModelBakery$BakedCacheKey } from "net.minecraft.client.resources.model.ModelBakery$BakedCacheKey"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ModelLoadingEventDispatcher } from "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher"
import { $ModelResourceLocation, $ModelResourceLocation$$Type } from "net.minecraft.client.resources.model.ModelResourceLocation"
import { $BlockModel, $BlockModel$$Type } from "net.minecraft.client.renderer.block.model.BlockModel"
import { $List, $List$$Type } from "java.util.List"
import { $ModelBakery$LoadedJson$$Type } from "net.minecraft.client.resources.model.ModelBakery$LoadedJson"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $ItemModelGenerator } from "net.minecraft.client.renderer.block.model.ItemModelGenerator"
import { $Material, $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $ModelBakery implements $ModelBakeryAccessor, $ModelLoaderHooks {
static readonly "BANNER_BASE": $Material
static readonly "BLOCKSTATE_LISTER": $FileToIdConverter
static readonly "BLOCK_ENTITY_MARKER": $BlockModel
static readonly "BREAKING_LOCATIONS": $List<$ResourceLocation>
static readonly "DESTROY_STAGES": $List<$ResourceLocation>
static readonly "DESTROY_STAGE_COUNT": integer
static readonly "DESTROY_TYPES": $List<$RenderType>
static readonly "FIRE_0": $Material
static readonly "FIRE_1": $Material
static readonly "GENERATION_MARKER": $BlockModel
static readonly "ITEM_MODEL_GENERATOR": $ItemModelGenerator
static readonly "LAVA_FLOW": $Material
static readonly "MISSING_MODEL_LOCATION": $ModelResourceLocation
static readonly "MISSING_MODEL_MESH": string
static readonly "MODEL_LISTER": $FileToIdConverter
static readonly "NO_PATTERN_SHIELD": $Material
static readonly "SHIELD_BASE": $Material
static readonly "WATER_FLOW": $Material
static readonly "WATER_OVERLAY": $Material
readonly "bakedCache": $Map<$ModelBakery$BakedCacheKey, $BakedModel>
readonly "topLevelModels": $Map<$ResourceLocation, $UnbakedModel>
readonly "unbakedCache": $Map<$ResourceLocation, $UnbakedModel>

constructor(blockColors0: $BlockColors$$Type, profilerFiller1: $ProfilerFiller$$Type, map2: $Map$$Type<$ResourceLocation$$Type, $BlockModel$$Type>, map3: $Map$$Type<$ResourceLocation$$Type, $List$$Type<$ModelBakery$LoadedJson$$Type>>)

public "bakeModels"(biFunction0: $BiFunction$$Type<$ResourceLocation$$Type, $Material$$Type, $TextureAtlasSprite>): void
public "fabric_getDispatcher"(): $ModelLoadingEventDispatcher
public "fabric_getMissingModel"(): $UnbakedModel
public "fabric_getOrLoadModel"(id: $ResourceLocation$$Type): $UnbakedModel
public "fabric_loadModelFromJson"(id: $ResourceLocation$$Type): $BlockModel
public "fabric_putModel"(id: $ResourceLocation$$Type, model: $UnbakedModel$$Type): void
public "fabric_putModelDirectly"(id: $ResourceLocation$$Type, model: $UnbakedModel$$Type): void
public "fabric_queueModelDependencies"(model: $UnbakedModel$$Type): void
public "getBakedTopLevelModels"(): $Map<$ResourceLocation, $BakedModel>
public "getModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
public "getModelGroups"(): $Object2IntMap<$BlockState>
public "loadTopLevel"(modelResourceLocation0: $ModelResourceLocation$$Type): void
get "bakedTopLevelModels"(): $Map<$ResourceLocation, $BakedModel>
get "modelGroups"(): $Object2IntMap<$BlockState>
}
}

declare module "net.minecraft.client.resources.metadata.animation.AnimationMetadataSection$FrameOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AnimationMetadataSection$FrameOutput {
"accept"(int0: integer, int1: integer): void
}

export namespace $AnimationMetadataSection$FrameOutput {
const probejs$$marker: never
}
export abstract class $AnimationMetadataSection$FrameOutput$$Static implements $AnimationMetadataSection$FrameOutput {
}
}

declare module "net.minecraft.client.resources.sounds.TickableSoundInstance" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource } from "net.minecraft.sounds.SoundSource"
import { $SoundBufferLibrary$$Type } from "net.minecraft.client.sounds.SoundBufferLibrary"
import { $SoundInstance$Attenuation } from "net.minecraft.client.resources.sounds.SoundInstance$Attenuation"
import { $WeighedSoundEvents } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $SoundManager$$Type } from "net.minecraft.client.sounds.SoundManager"
import { $SoundInstance } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"
import { $Sound, $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export interface $TickableSoundInstance extends $SoundInstance {
"canPlaySound"(): boolean
"canStartSilent"(): boolean
"getAttenuation"(): $SoundInstance$Attenuation
"getAudioStream"(loader: $SoundBufferLibrary$$Type, id: $ResourceLocation$$Type, repeatInstantly: boolean): $CompletableFuture<$AudioStream>
"getDelay"(): integer
"getLocation"(): $ResourceLocation
"getPitch"(): float
"getSound"(): $Sound
"getSource"(): $SoundSource
"getStream"(soundBuffers: $SoundBufferLibrary$$Type, sound: $Sound$$Type, looping: boolean): $CompletableFuture
"getVolume"(): float
"getX"(): double
"getY"(): double
"getZ"(): double
"isLooping"(): boolean
"isRelative"(): boolean
"isStopped"(): boolean
"resolve"(soundManager0: $SoundManager$$Type): $WeighedSoundEvents
"tick"(): void
get "attenuation"(): $SoundInstance$Attenuation
get "delay"(): integer
get "location"(): $ResourceLocation
get "pitch"(): float
get "sound"(): $Sound
get "source"(): $SoundSource
get "volume"(): float
get "x"(): double
get "y"(): double
get "z"(): double
get "looping"(): boolean
get "relative"(): boolean
get "stopped"(): boolean
}

export namespace $TickableSoundInstance {
function createUnseededRandom(): $RandomSource
}
export abstract class $TickableSoundInstance$$Static implements $TickableSoundInstance {
static "createUnseededRandom"(): $RandomSource
}
}

declare module "net.minecraft.client.resources.model.ModelBaker" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"
import { $IForgeModelBaker } from "net.minecraftforge.client.extensions.IForgeModelBaker"
import { $Material, $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $ModelState$$Type } from "net.minecraft.client.resources.model.ModelState"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $ModelBaker extends $IForgeModelBaker {
/** @deprecated */
"bake"(resourceLocation0: $ResourceLocation$$Type, modelState1: $ModelState$$Type): $BakedModel
"bake"(resourceLocation0: $ResourceLocation$$Type, modelState1: $ModelState$$Type, function2: $Function$$Type<$Material$$Type, $TextureAtlasSprite>): $BakedModel
"getModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
"getModelTextureGetter"(): $Function<$Material, $TextureAtlasSprite>
get "modelTextureGetter"(): $Function<$Material, $TextureAtlasSprite>
}

export namespace $ModelBaker {
const probejs$$marker: never
}
export abstract class $ModelBaker$$Static implements $ModelBaker {
}
}

