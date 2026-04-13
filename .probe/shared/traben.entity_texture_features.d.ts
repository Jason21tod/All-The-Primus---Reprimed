declare module "traben.entity_texture_features.features.state.ETFEntityRenderState" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $UUID } from "java.util.UUID"
import { $Iterable } from "java.lang.Iterable"
import { $Team } from "net.minecraft.world.scores.Team"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Pose } from "net.minecraft.world.entity.Pose"
import { $ETFEntity, $ETFEntity$$Type } from "traben.entity_texture_features.utils.ETFEntity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $ETFEntityRenderState$ETFRenderStateInit$$Type } from "traben.entity_texture_features.features.state.ETFEntityRenderState$ETFRenderStateInit"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ETFEntityRenderState {
"armorItems"(): $Iterable<$ItemStack>
"blockPos"(): $BlockPos
"blockY"(): integer
"canRenderBright"(): boolean
"customName"(): $Component
"distanceTo"(entity0: $Entity$$Type): float
/** @deprecated */
"entity"(): $ETFEntity
"entityKey"(): string
"entityType"(): $EntityType<any>
"handItems"(): $Iterable<$ItemStack>
"hasCustomName"(): boolean
"isBlockEntity"(): boolean
"itemsEquipped"(): $Iterable<$ItemStack>
"nbt"(): $CompoundTag
"optifineId"(): integer
"optifineVehicleId"(): integer
/** @deprecated */
"pose"(): $Pose
"scoreboardTeam"(): $Team
"uuid"(): $UUID
"velocity"(): $Vec3
"world"(): $Level
get "blockEntity"(): boolean
}

export namespace $ETFEntityRenderState {
function forEntity(entity: $ETFEntity$$Type): $ETFEntityRenderState
function setEtfRenderStateConstructor(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit$$Type): void
}
export abstract class $ETFEntityRenderState$$Static implements $ETFEntityRenderState {
static "forEntity"(entity: $ETFEntity$$Type): $ETFEntityRenderState
static "setEtfRenderStateConstructor"(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit$$Type): void
}
}

declare module "traben.entity_texture_features.utils.ETFEntity" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $UUID } from "java.util.UUID"
import { $Iterable } from "java.lang.Iterable"
import { $Team } from "net.minecraft.world.scores.Team"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Pose } from "net.minecraft.world.entity.Pose"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ETFEntity {
"etf$canBeBright"(): boolean
"etf$distanceTo"(entity0: $Entity$$Type): float
"etf$getArmorItems"(): $Iterable<$ItemStack>
"etf$getBlockPos"(): $BlockPos
"etf$getBlockY"(): integer
"etf$getCustomName"(): $Component
"etf$getETFRenderState"(): $ETFEntityRenderState
"etf$getEntityKey"(): string
"etf$getHandItems"(): $Iterable<$ItemStack>
"etf$getItemsEquipped"(): $Iterable<$ItemStack>
"etf$getNbt"(): $CompoundTag
"etf$getOptifineId"(): integer
"etf$getOptifineVehicleId"(): integer
/** @deprecated */
"etf$getPose"(): $Pose
"etf$getScoreboardTeam"(): $Team
"etf$getType"(): $EntityType<any>
"etf$getUuid"(): $UUID
"etf$getVelocity"(): $Vec3
"etf$getWorld"(): $Level
"etf$hasCustomName"(): boolean
"etf$isBlockEntity"(): boolean
}

export namespace $ETFEntity {
const probejs$$marker: never
}
export abstract class $ETFEntity$$Static implements $ETFEntity {
}
}

declare module "traben.entity_texture_features.config.screens.skin.ETFConfigScreenSkinTool$NoseType" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"

export class $ETFConfigScreenSkinTool$NoseType extends $Enum<$ETFConfigScreenSkinTool$NoseType> {
static readonly "NONE": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_1": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_2": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_3": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_4": $ETFConfigScreenSkinTool$NoseType
static readonly "TEXTURED_5": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_REMOVE": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_TEXTURED": $ETFConfigScreenSkinTool$NoseType
static readonly "VILLAGER_TEXTURED_REMOVE": $ETFConfigScreenSkinTool$NoseType
readonly "id": integer

public "appliesTextureOverlay"(): boolean
public "getButtonText"(): $Component
public "getByColorId"(id: integer): $ETFConfigScreenSkinTool$NoseType
public "getNosePixelColour"(): integer
public "next"(): $ETFConfigScreenSkinTool$NoseType
public static "valueOf"(name: string): $ETFConfigScreenSkinTool$NoseType
public static "values"(): $ETFConfigScreenSkinTool$NoseType[]
get "buttonText"(): $Component
get "nosePixelColour"(): integer
}
}

declare module "traben.entity_texture_features.features.texture_handlers.ETFTexture" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ETFConfig$EmissiveRenderModes$$Type } from "traben.entity_texture_features.config.ETFConfig$EmissiveRenderModes"
import { $ETFEntityRenderState$$Type } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ETFSprite } from "traben.entity_texture_features.features.texture_handlers.ETFSprite"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Model$$Type } from "net.minecraft.client.model.Model"
import { $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $ETFTexture$TextureReturnState, $ETFTexture$TextureReturnState$$Type } from "traben.entity_texture_features.features.texture_handlers.ETFTexture$TextureReturnState"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $ETFTexture {
static readonly "PATCH_NAMESPACE_PREFIX": string
readonly "thisIdentifier": $ResourceLocation

constructor(variantIdentifier: $ResourceLocation$$Type)

public "assertPatchedTextures"(): void
public "canPatch"(): boolean
public "doesBlink"(): boolean
public "doesBlink2"(): boolean
public "exists"(): boolean
public "getEmissiveIdentifierOfCurrentState"(): $ResourceLocation
public "getEmissiveRenderLayer"(model: $Model$$Type): $RenderType
public "getEmissiveRenderLayer"(model: $Model$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): $RenderType
public "getEmissiveVertexConsumer"(vertexConsumerProvider: $MultiBufferSource$$Type, model: $Model$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): $VertexConsumer
public "getEnchantIdentifierOfCurrentState"(): $ResourceLocation
public "getPaintingSprite"(originalSprite: $TextureAtlasSprite$$Type, originalID: $ResourceLocation$$Type): $ETFSprite
public "getTextureIdentifier"(entity: $ETFEntityRenderState$$Type): $ResourceLocation
public "isEmissive"(): boolean
public "isEnchanted"(): boolean
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$$Type, emissiveIdentifier: $ResourceLocation$$Type, enchantIdentifier: $ResourceLocation$$Type): $ETFTexture
public static "manual"(modifiedSkinIdentifier: $ResourceLocation$$Type, blinkIdentifier: $ResourceLocation$$Type, blink2Identifier: $ResourceLocation$$Type, emissiveIdentifier: $ResourceLocation$$Type, blinkEmissiveIdentifier: $ResourceLocation$$Type, blink2EmissiveIdentifier: $ResourceLocation$$Type, enchantIdentifier: $ResourceLocation$$Type, blinkenchantIdentifier: $ResourceLocation$$Type, blink2enchantIdentifier: $ResourceLocation$$Type, patchIdentifier: $ResourceLocation$$Type, blinkpatchIdentifier: $ResourceLocation$$Type, blink2patchIdentifier: $ResourceLocation$$Type): $ETFTexture
public static "ofUnmodifiable"(identifier: $ResourceLocation$$Type, emissiveIdentifier: $ResourceLocation$$Type): $ETFTexture
public static "patchTextureToRemoveZFightingWithOtherTexture"(baseImage: $NativeImage$$Type, otherImage: $NativeImage$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, model: $Model$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, model: $Model$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, modelPart: $ModelPart$$Type, modeToUsePossiblyManuallyChosen: $ETFConfig$EmissiveRenderModes$$Type): void
public "renderEmissive"(matrixStack: $PoseStack$$Type, vertexConsumerProvider: $MultiBufferSource$$Type, modelPart: $ModelPart$$Type): void
public "setGUIBlink"(): void
get "currentTextureState"(): $ETFTexture$TextureReturnState
set "currentTextureState"(value: $ETFTexture$TextureReturnState$$Type)
get "eSuffix"(): string
set "eSuffix"(value: string)
get "emissiveIdentifierOfCurrentState"(): $ResourceLocation
get "enchantIdentifierOfCurrentState"(): $ResourceLocation
get "emissive"(): boolean
get "enchanted"(): boolean
}
}

declare module "traben.entity_texture_features.features.player.ETFPlayerSkinHolder" {
import { $ETFPlayerTexture } from "traben.entity_texture_features.features.player.ETFPlayerTexture"

export interface $ETFPlayerSkinHolder {
"etf$getETFPlayerTexture"(): $ETFPlayerTexture
}

export namespace $ETFPlayerSkinHolder {
const probejs$$marker: never
}
export abstract class $ETFPlayerSkinHolder$$Static implements $ETFPlayerSkinHolder {
}
}

declare module "traben.entity_texture_features.mixin.mixins.accessor.TooltipAccessor" {
import { $List$$Type } from "java.util.List"
import { $FormattedCharSequence$$Type } from "net.minecraft.util.FormattedCharSequence"

export interface $TooltipAccessor {
"setCachedTooltip"(list0: $List$$Type<$FormattedCharSequence$$Type>): void
set "cachedTooltip"(value: $List$$Type<$FormattedCharSequence$$Type>)
}

export namespace $TooltipAccessor {
const probejs$$marker: never
}
export abstract class $TooltipAccessor$$Static implements $TooltipAccessor {
}
}

declare module "traben.entity_texture_features.utils.ETFVertexConsumer" {
import { $ETFTexture } from "traben.entity_texture_features.features.texture_handlers.ETFTexture"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"

export interface $ETFVertexConsumer {
"etf$getETFTexture"(): $ETFTexture
"etf$getProvider"(): $MultiBufferSource
"etf$getRenderLayer"(): $RenderType
"etf$initETFVertexConsumer"(multiBufferSource0: $MultiBufferSource$$Type, renderType1: $RenderType$$Type): void
}

export namespace $ETFVertexConsumer {
const probejs$$marker: never
}
export abstract class $ETFVertexConsumer$$Static implements $ETFVertexConsumer {
}
}

declare module "traben.entity_texture_features.features.texture_handlers.ETFSprite" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $ETFTexture$$Type } from "traben.entity_texture_features.features.texture_handlers.ETFTexture"
import { $SpriteContents } from "net.minecraft.client.renderer.texture.SpriteContents"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $ETFSprite {
readonly "isETFAltered": boolean

constructor(originalSprite: $TextureAtlasSprite$$Type, etfTexture: $ETFTexture$$Type, isNotVariant: boolean)

public "getEmissive"(): $TextureAtlasSprite
public "getSpriteVariant"(): $TextureAtlasSprite
public "isEmissive"(): boolean
public static "load"(id: $ResourceLocation$$Type, resource: $Resource$$Type): $SpriteContents
get "emissive"(): $TextureAtlasSprite
get "spriteVariant"(): $TextureAtlasSprite
get "emissive"(): boolean
}
}

declare module "traben.entity_texture_features.config.ETFConfig$EmissiveRenderModes" {
import { $Enum } from "java.lang.Enum"

export class $ETFConfig$EmissiveRenderModes extends $Enum<$ETFConfig$EmissiveRenderModes> {
static readonly "BRIGHT": $ETFConfig$EmissiveRenderModes
static readonly "DULL": $ETFConfig$EmissiveRenderModes

public static "valueOf"(name: string): $ETFConfig$EmissiveRenderModes
public static "values"(): $ETFConfig$EmissiveRenderModes[]
}
}

declare module "traben.entity_texture_features.features.state.ETFEntityRenderState$ETFRenderStateInit" {
import { $ETFEntity$$Type } from "traben.entity_texture_features.utils.ETFEntity"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"

export interface $ETFEntityRenderState$ETFRenderStateInit {
"make"(eTFEntity0: $ETFEntity$$Type): $ETFEntityRenderState
}

export namespace $ETFEntityRenderState$ETFRenderStateInit {
const probejs$$marker: never
}
export abstract class $ETFEntityRenderState$ETFRenderStateInit$$Static implements $ETFEntityRenderState$ETFRenderStateInit {
}
}

declare module "traben.entity_texture_features.features.texture_handlers.ETFTexture$TextureReturnState" {
import { $Enum } from "java.lang.Enum"

export class $ETFTexture$TextureReturnState extends $Enum<$ETFTexture$TextureReturnState> {
static readonly "APPLY_BLINK": $ETFTexture$TextureReturnState
static readonly "APPLY_BLINK2": $ETFTexture$TextureReturnState
static readonly "APPLY_PATCH": $ETFTexture$TextureReturnState
static readonly "BLINK": $ETFTexture$TextureReturnState
static readonly "BLINK2": $ETFTexture$TextureReturnState
static readonly "BLINK2_PATCHED": $ETFTexture$TextureReturnState
static readonly "BLINK_PATCHED": $ETFTexture$TextureReturnState
static readonly "NORMAL": $ETFTexture$TextureReturnState
static readonly "NORMAL_PATCHED": $ETFTexture$TextureReturnState

public static "valueOf"(name: string): $ETFTexture$TextureReturnState
public static "values"(): $ETFTexture$TextureReturnState[]
}
}

declare module "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction" {
import { $ETFEntityRenderState$$Type } from "traben.entity_texture_features.features.state.ETFEntityRenderState"

/** @deprecated */
export interface $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
"toInt"(eTFEntityRenderState0: $ETFEntityRenderState$$Type): integer
}

export namespace $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
const probejs$$marker: never
}
export abstract class $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Static implements $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction {
}
}

declare module "traben.entity_texture_features.features.player.ETFPlayerEntity" {
import { $PlayerModelPart$$Type } from "net.minecraft.world.entity.player.PlayerModelPart"
import { $Component } from "net.minecraft.network.chat.Component"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $UUID } from "java.util.UUID"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $Iterable } from "java.lang.Iterable"
import { $Team } from "net.minecraft.world.scores.Team"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Pose } from "net.minecraft.world.entity.Pose"
import { $ETFEntity } from "traben.entity_texture_features.utils.ETFEntity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export interface $ETFPlayerEntity extends $ETFEntity {
"etf$canBeBright"(): boolean
"etf$distanceTo"(entity0: $Entity$$Type): float
"etf$getArmorItems"(): $Iterable<$ItemStack>
"etf$getBlockPos"(): $BlockPos
"etf$getBlockY"(): integer
"etf$getCustomName"(): $Component
"etf$getETFRenderState"(): $ETFEntityRenderState
"etf$getEntity"(): $Entity
"etf$getEntityKey"(): string
"etf$getHandItems"(): $Iterable<$ItemStack>
"etf$getInventory"(): $Inventory
"etf$getItemsEquipped"(): $Iterable<$ItemStack>
"etf$getName"(): $Component
"etf$getNbt"(): $CompoundTag
"etf$getOptifineId"(): integer
"etf$getOptifineVehicleId"(): integer
/** @deprecated */
"etf$getPose"(): $Pose
"etf$getScoreboardTeam"(): $Team
"etf$getType"(): $EntityType<any>
"etf$getUuid"(): $UUID
"etf$getUuidAsString"(): string
"etf$getVelocity"(): $Vec3
"etf$getWorld"(): $Level
"etf$hasCustomName"(): boolean
"etf$isBlockEntity"(): boolean
/** @deprecated */
"etf$isPartVisible"(playerModelPart0: $PlayerModelPart$$Type): boolean
"etf$isTeammate"(player0: $Player$$Type): boolean
}

export namespace $ETFPlayerEntity {
const probejs$$marker: never
}
export abstract class $ETFPlayerEntity$$Static implements $ETFPlayerEntity {
}
}

declare module "traben.entity_texture_features.utils.EntityIntLRU" {
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $IntBinaryOperator$$Type } from "java.util.function.IntBinaryOperator"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntLinkedOpenHashMap } from "it.unimi.dsi.fastutil.objects.Object2IntLinkedOpenHashMap"
import { $Object2IntFunction, $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $SequencedSet } from "java.util.SequencedSet"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $SortedMap } from "java.util.SortedMap"
import { $SequencedCollection } from "java.util.SequencedCollection"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export class $EntityIntLRU extends $Object2IntLinkedOpenHashMap<$UUID> {
constructor(capacity: integer)
constructor()

/** @deprecated */
public "andThen"<T>(function0: $Function$$Type<integer, T>): $Function<$UUID, T>
public "andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Object2ByteFunction<$UUID>
public "andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Object2CharFunction<$UUID>
public "andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Object2DoubleFunction<$UUID>
public "andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Object2FloatFunction<$UUID>
public "andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Object2IntFunction<$UUID>
public "andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Object2LongFunction<$UUID>
public "andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Object2ObjectFunction<$UUID, T>
public "andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Object2ReferenceFunction<$UUID, T>
public "andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Object2ShortFunction<$UUID>
public "apply"(uUID0: $UUID$$Type): integer
public "applyAsInt"(uUID0: $UUID$$Type): integer
public "compose"<V>(function0: $Function$$Type<V, $UUID>): $Function<V, integer>
public "composeByte"(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<$UUID>): $Byte2IntFunction
public "composeChar"(char2ObjectFunction0: $Char2ObjectFunction$$Type<$UUID>): $Char2IntFunction
public "composeDouble"(double2ObjectFunction0: $Double2ObjectFunction$$Type<$UUID>): $Double2IntFunction
public "composeFloat"(float2ObjectFunction0: $Float2ObjectFunction$$Type<$UUID>): $Float2IntFunction
public "composeInt"(int2ObjectFunction0: $Int2ObjectFunction$$Type<$UUID>): $Int2IntFunction
public "composeLong"(long2ObjectFunction0: $Long2ObjectFunction$$Type<$UUID>): $Long2IntFunction
public "composeObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<T, $UUID>): $Object2IntFunction<T>
public "composeReference"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<T, $UUID>): $Reference2IntFunction<T>
public "composeShort"(short2ObjectFunction0: $Short2ObjectFunction$$Type<$UUID>): $Short2IntFunction
public "compute"(uUID0: $UUID$$Type, biFunction1: $BiFunction$$Type<$UUID$$Type, integer, integer>): integer
public "computeIfAbsent"(uUID0: $UUID$$Type, function1: $Function$$Type<$UUID$$Type, integer>): integer
public "computeIfPresent"(uUID0: $UUID$$Type, biFunction1: $BiFunction$$Type<$UUID$$Type, integer, integer>): integer
/** @deprecated */
public "computeIntIfAbsent"(uUID0: $UUID$$Type, toIntFunction1: $ToIntFunction$$Type<$UUID$$Type>): integer
/** @deprecated */
public "computeIntIfAbsentPartial"(uUID0: $UUID$$Type, object2IntFunction1: $Object2IntFunction$$Type<$UUID$$Type>): integer
/** @deprecated */
public "containsValue"(object0: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public "defaultReturnValue"(): integer
public "defaultReturnValue"(int0: integer): void
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "firstEntry"(): $Map$Entry<$UUID, integer>
public "forEach"(biConsumer0: $BiConsumer$$Type<$UUID$$Type, integer>): void
/** @deprecated */
public "get"(object0: any): integer
/** @deprecated */
public "getOrDefault"(object0: any, integer1: integer): integer
public static "identity"<T>(): $Function<T, T>
public "lastEntry"(): $Map$Entry<$UUID, integer>
/** @deprecated */
public "merge"(uUID0: $UUID$$Type, integer1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
/** @deprecated */
public "mergeInt"(uUID0: $UUID$$Type, int1: integer, biFunction2: $BiFunction$$Type<integer, integer, integer>): integer
public "mergeInt"(uUID0: $UUID$$Type, int1: integer, intBinaryOperator2: $IntBinaryOperator$$Type): integer
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "pollFirstEntry"(): $Map$Entry<$UUID, integer>
public "pollLastEntry"(): $Map$Entry<$UUID, integer>
public "put"(uuid: $UUID$$Type, v: integer): integer
/** @deprecated */
public "put"(uUID0: $UUID$$Type, integer1: integer): integer
public "putFirst"(uUID0: $UUID$$Type, integer1: integer): integer
/** @deprecated */
public "putIfAbsent"(uUID0: $UUID$$Type, integer1: integer): integer
public "putLast"(uUID0: $UUID$$Type, integer1: integer): integer
/** @deprecated */
public "remove"(object0: any, object1: any): boolean
/** @deprecated */
public "replace"(uUID0: $UUID$$Type, integer1: integer): integer
/** @deprecated */
public "replace"(uUID0: $UUID$$Type, integer1: integer, integer2: integer): boolean
public "replaceAll"(biFunction0: $BiFunction$$Type<$UUID$$Type, integer, integer>): void
public "reversed"(): $SortedMap<$UUID, integer>
public "sequencedEntrySet"(): $SequencedSet<$Map$Entry<$UUID, integer>>
public "sequencedKeySet"(): $SequencedSet<$UUID>
public "sequencedValues"(): $SequencedCollection<integer>
}
}

declare module "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type } from "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IntOpenHashSet } from "it.unimi.dsi.fastutil.ints.IntOpenHashSet"
import { $ETFEntityRenderState$$Type } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ETFApi$ETFVariantSuffixProvider {
"entityCanUpdate"(uUID0: $UUID$$Type): boolean
"getAllSuffixes"(): $IntOpenHashSet
"getSuffixForBlockEntity"(entityToBeTested: $BlockEntity$$Type): integer
"getSuffixForETFEntity"(eTFEntityRenderState0: $ETFEntityRenderState$$Type): integer
"getSuffixForEntity"(entityToBeTested: $Entity$$Type): integer
/** @deprecated */
"setRandomSupplier"(entityRandomSeedFunction: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type): void
"size"(): integer
get "allSuffixes"(): $IntOpenHashSet
set "randomSupplier"(value: $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type)
}

export namespace $ETFApi$ETFVariantSuffixProvider {
function getVariantProviderOrNull(propertiesFileIdentifier: $ResourceLocation$$Type, vanillaIdentifier: $ResourceLocation$$Type, ...suffixKeyName: string[]): $ETFApi$ETFVariantSuffixProvider
}
export abstract class $ETFApi$ETFVariantSuffixProvider$$Static implements $ETFApi$ETFVariantSuffixProvider {
static "getVariantProviderOrNull"(propertiesFileIdentifier: $ResourceLocation$$Type, vanillaIdentifier: $ResourceLocation$$Type, ...suffixKeyName: string[]): $ETFApi$ETFVariantSuffixProvider
}
}

declare module "traben.entity_texture_features.features.player.ETFPlayerTexture" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ETFTexture, $ETFTexture$$Type } from "traben.entity_texture_features.features.texture_handlers.ETFTexture"
import { $ETFPlayerEntity, $ETFPlayerEntity$$Type } from "traben.entity_texture_features.features.player.ETFPlayerEntity"
import { $ETFEntityRenderState$$Type } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ETFConfigScreenSkinTool$NoseType, $ETFConfigScreenSkinTool$NoseType$$Type } from "traben.entity_texture_features.config.screens.skin.ETFConfigScreenSkinTool$NoseType"
import { $NativeImage, $NativeImage$$Type } from "com.mojang.blaze3d.platform.NativeImage"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ETFPlayerTexture {
static readonly "SKIN_NAMESPACE": string
static "clientPlayerOriginalSkinImageForTool": $NativeImage
static "remappingETFSkin": boolean

constructor(player: $ETFPlayerEntity$$Type, rendererGivenSkin: $ResourceLocation$$Type)
constructor()

public "canUseFeaturesForThisPlayer"(): boolean
public "changeSkinToThisForTool"(image: $NativeImage$$Type): void
public "checkTexture"(skipSkinLoad: boolean): void
public "getBaseHeadTextureIdentifierOrNullForVanilla"(): $ResourceLocation
public "getBaseTextureEmissiveIdentifierOrNullForNone"(): $ResourceLocation
public "getBaseTextureIdentifierOrNullForVanilla"(player: $ETFEntityRenderState$$Type): $ResourceLocation
public "getBaseTextureIdentifierOrNullForVanilla"(player: $Player$$Type): $ResourceLocation
public "getOriginal"(): $ResourceLocation
public static "getSkinNumberToPixelColour"(color: integer): integer
public static "getSkinPixelColourToNumber"(color: integer): integer
public "isCorrectObjectForThisSkin"(check: $ResourceLocation$$Type): boolean
get "baseEnchantBlink2Identifier"(): $ResourceLocation
set "baseEnchantBlink2Identifier"(value: $ResourceLocation$$Type)
get "baseEnchantBlinkIdentifier"(): $ResourceLocation
set "baseEnchantBlinkIdentifier"(value: $ResourceLocation$$Type)
get "baseEnchantIdentifier"(): $ResourceLocation
set "baseEnchantIdentifier"(value: $ResourceLocation$$Type)
get "blinkHeight"(): integer
set "blinkHeight"(value: integer)
get "blinkType"(): integer
set "blinkType"(value: integer)
get "coatLength"(): integer
set "coatLength"(value: integer)
get "coatStyle"(): integer
set "coatStyle"(value: integer)
get "etfTextureOfFinalBaseSkin"(): $ETFTexture
set "etfTextureOfFinalBaseSkin"(value: $ETFTexture$$Type)
get "hasEmissives"(): boolean
set "hasEmissives"(value: boolean)
get "hasEnchant"(): boolean
set "hasEnchant"(value: boolean)
get "hasFeatures"(): boolean
set "hasFeatures"(value: boolean)
get "hasVillagerNose"(): boolean
set "hasVillagerNose"(value: boolean)
get "noseType"(): $ETFConfigScreenSkinTool$NoseType
set "noseType"(value: $ETFConfigScreenSkinTool$NoseType$$Type)
get "player"(): $ETFPlayerEntity
set "player"(value: $ETFPlayerEntity$$Type)
get "shouldRetryOnFail"(): boolean
set "shouldRetryOnFail"(value: boolean)
get "texturedNoseIdentifier"(): $ResourceLocation
set "texturedNoseIdentifier"(value: $ResourceLocation$$Type)
get "texturedNoseIdentifierEmissive"(): $ResourceLocation
set "texturedNoseIdentifierEmissive"(value: $ResourceLocation$$Type)
get "texturedNoseIdentifierEnchanted"(): $ResourceLocation
set "texturedNoseIdentifierEnchanted"(value: $ResourceLocation$$Type)
get "wasForcedSolid"(): boolean
set "wasForcedSolid"(value: boolean)
get "baseHeadTextureIdentifierOrNullForVanilla"(): $ResourceLocation
get "baseTextureEmissiveIdentifierOrNullForNone"(): $ResourceLocation
get "original"(): $ResourceLocation
}
}

declare module "traben.entity_texture_features.utils.ETFRenderLayerWithTexture" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Optional } from "java.util.Optional"

export interface $ETFRenderLayerWithTexture {
"etf$getId"(): $Optional<$ResourceLocation>
}

export namespace $ETFRenderLayerWithTexture {
const probejs$$marker: never
}
export abstract class $ETFRenderLayerWithTexture$$Static implements $ETFRenderLayerWithTexture {
}
}

