declare module "com.mega.endinglib.mixin.accessor.AccessorUniform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorUniform {
"invokeMarkDirty"(): void
}

export namespace $AccessorUniform {
const probejs$$marker: never
}
export abstract class $AccessorUniform$$Static implements $AccessorUniform {
}
}

declare module "com.mega.endinglib.api.item.component.parser.ItemComponentParser" {
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Tag } from "net.minecraft.nbt.Tag"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $BiFunction } from "java.util.function.BiFunction"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ItemComponentType } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $SimpleCommandExceptionType } from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Dynamic2CommandExceptionType } from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $DynamicCommandExceptionType } from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import { $StringReader, $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $SuggestionsBuilder, $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $ItemComponentParser {
static readonly "COMPONENT_EXPECTED_EXCEPTION": $SimpleCommandExceptionType
static readonly "ELEMENT_SEPARATOR": character
static readonly "ERROR_EXPECTED_END_OF_OPTIONS": $SimpleCommandExceptionType
static readonly "ERROR_EXPECTED_KEY": $SimpleCommandExceptionType
static readonly "ERROR_EXPECTED_OPTION_VALUE": $DynamicCommandExceptionType
static readonly "ERROR_EXPECTED_VALUE": $SimpleCommandExceptionType
static readonly "ERROR_INSERT_MIXED_ARRAY": $Dynamic2CommandExceptionType
static readonly "ERROR_INSERT_MIXED_LIST": $Dynamic2CommandExceptionType
static readonly "ERROR_INVALID_ARRAY": $DynamicCommandExceptionType
static readonly "ERROR_TRAILING_DATA": $SimpleCommandExceptionType
static readonly "MALFORMED_COMPONENT_EXCEPTION": $Dynamic2CommandExceptionType
static readonly "NAME_VALUE_SEPARATOR": character
static readonly "REPEATED_COMPONENT_EXCEPTION": $DynamicCommandExceptionType
static readonly "SUGGEST_NOTHING": $BiFunction<$SuggestionsBuilder, $Consumer<$SuggestionsBuilder>, $CompletableFuture<$Suggestions>>
static readonly "TAG_SUGGEST_NOTHING": $Function<$ItemComponentParser, $BiFunction<$SuggestionsBuilder, $Consumer<$SuggestionsBuilder>, $CompletableFuture<$Suggestions>>>
static readonly "UNKNOWN_COMPONENT_EXCEPTION": $DynamicCommandExceptionType

constructor(stringReader0: $StringReader$$Type)

public "fillSuggestions"(suggestionsBuilder0: $SuggestionsBuilder$$Type, consumer1: $Consumer$$Type<$SuggestionsBuilder$$Type>): $CompletableFuture<$Suggestions>
public static "get"(itemComponentParser0: $ItemComponentParser$$Type, string1: string, int2: integer): $ItemComponentType<any>
public "getReader"(): $StringReader
public "parse"(): $CompoundTag
public "readComponentType"(stringReader0: $StringReader$$Type): $ItemComponentType<any>
public "readStruct"(): $CompoundTag
public "readValue"(): $Tag
public static "suggestNames"(itemComponentParser0: $ItemComponentParser$$Type, suggestionsBuilder1: $SuggestionsBuilder$$Type): void
get "reader"(): $StringReader
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorLevelRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorLevelRenderer {
"getRainSizeX"(): float[]
"getRainSizeZ"(): float[]
"getTicks"(): integer
get "rainSizeX"(): float[]
get "rainSizeZ"(): float[]
get "ticks"(): integer
}

export namespace $AccessorLevelRenderer {
const probejs$$marker: never
}
export abstract class $AccessorLevelRenderer$$Static implements $AccessorLevelRenderer {
}
}

declare module "com.mega.endinglib.api.capability.EntitySyncCapabilityBase" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $CapabilitySyncType, $CapabilitySyncType$$Type } from "com.mega.endinglib.api.capability.CapabilitySyncType"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Set } from "java.util.Set"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Dist$$Type } from "net.minecraftforge.api.distmarker.Dist"
import { $ICapabilitySerializable } from "net.minecraftforge.common.capabilities.ICapabilitySerializable"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $CapabilityEntityData$$Type } from "com.mega.endinglib.api.capability.CapabilityEntityData"
import { $SynchedCapabilityData } from "com.mega.endinglib.api.capability.SynchedCapabilityData"

export class $EntitySyncCapabilityBase implements $ICapabilitySerializable<$CompoundTag> {
readonly "holder": $LazyOptional<$EntitySyncCapabilityBase>

constructor()

public "canSyncWhenTick"(entity0: $Entity$$Type, level1: $Level$$Type): boolean
public "createPacket"(string0: string, compoundTag1: $CompoundTag$$Type, dist2: $Dist$$Type, capabilitySyncType3: $CapabilitySyncType$$Type, int4: integer): any
public "customDeserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "customSerializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDataManager"(): $SynchedCapabilityData
public "getEnabledSyncTypes"(): $Set<$CapabilitySyncType>
public "getEntity"(): $Entity
public "getRegistryName"(): $ResourceLocation
public "onSyncedDataUpdated"(capabilityEntityData0: $CapabilityEntityData$$Type<any>): void
public "readSyncData"(compoundTag0: $CompoundTag$$Type, dist1: $Dist$$Type, capabilitySyncType2: $CapabilitySyncType$$Type, entity3: $Entity$$Type): void
public "serializeNBT"(): $CompoundTag
public "shouldAttachTo"(entity0: $Entity$$Type): boolean
public "sync"(compoundTag0: $CompoundTag$$Type, dist1: $Dist$$Type, capabilitySyncType2: $CapabilitySyncType$$Type, entity3: $Entity$$Type): void
public "sync"(compoundTag0: $CompoundTag$$Type, dist1: $Dist$$Type, capabilitySyncType2: $CapabilitySyncType$$Type, entity3: $Entity$$Type, level4: $Level$$Type): void
public "syncData"(compoundTag0: $CompoundTag$$Type, dist1: $Dist$$Type, capabilitySyncType2: $CapabilitySyncType$$Type, entity3: $Entity$$Type): void
public "update"(entity0: $Entity$$Type): void
get "dataManager"(): $SynchedCapabilityData
get "enabledSyncTypes"(): $Set<$CapabilitySyncType>
get "entity"(): $Entity
get "registryName"(): $ResourceLocation
}
}

declare module "com.mega.endinglib.util.java.funtion.TeConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TeConsumer<T = any, U = any, M = any> {
"accept"(t0: T, u1: U, m2: M): void
}

export namespace $TeConsumer {
const probejs$$marker: never
}
export abstract class $TeConsumer$$Static<T = any, U = any, M = any> implements $TeConsumer<T, U, M> {
}
}

declare module "com.mega.endinglib.api.item.component.type.ConsumableComponent$ConsumableSoundProvider" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ConsumableComponent$ConsumableSoundProvider {
"getConsumeSound"(itemStack0: $ItemStack$$Type): $SoundEvent
}

export namespace $ConsumableComponent$ConsumableSoundProvider {
const probejs$$marker: never
}
export abstract class $ConsumableComponent$ConsumableSoundProvider$$Static implements $ConsumableComponent$ConsumableSoundProvider {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorCamera" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorCamera {
"invokeMove"(double0: double, double1: double, double2: double): void
"invokeSetPosition"(double0: double, double1: double, double2: double): void
"invokeSetRotation"(float0: float, float1: float): void
}

export namespace $AccessorCamera {
const probejs$$marker: never
}
export abstract class $AccessorCamera$$Static implements $AccessorCamera {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorEntitySelector" {
import { $List } from "java.util.List"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $MinMaxBounds$Doubles } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Predicate } from "java.util.function.Predicate"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $EntityTypeTest } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $UUID } from "java.util.UUID"
import { $Function } from "java.util.function.Function"

export interface $AccessorEntitySelector {
"getAabb"(): $AABB
"getEntityUUID"(): $UUID
"getOrder"(): $BiConsumer<$Vec3, $List<$Entity>>
"getPlayerName"(): string
"getPosition"(): $Function<$Vec3, $Vec3>
"getPredicate"(): $Predicate<$Entity>
"getRange"(): $MinMaxBounds$Doubles
"getType"(): $EntityTypeTest<$Entity, any>
get "aabb"(): $AABB
get "entityUUID"(): $UUID
get "order"(): $BiConsumer<$Vec3, $List<$Entity>>
get "playerName"(): string
get "position"(): $Function<$Vec3, $Vec3>
get "predicate"(): $Predicate<$Entity>
get "range"(): $MinMaxBounds$Doubles
get "type"(): $EntityTypeTest<$Entity, any>
}

export namespace $AccessorEntitySelector {
const probejs$$marker: never
}
export abstract class $AccessorEntitySelector$$Static implements $AccessorEntitySelector {
}
}

declare module "com.mega.endinglib.api.item.component.ItemComponentType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Component } from "net.minecraft.network.chat.Component"
import { $BiFunction } from "java.util.function.BiFunction"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Function } from "java.util.function.Function"
import { $Consumer } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $TagEnum } from "com.mega.endinglib.api.data.TagEnum"
import { $Optional } from "java.util.Optional"
import { $ItemComponentParser } from "com.mega.endinglib.api.item.component.parser.ItemComponentParser"
import { $SuggestionsBuilder } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export interface $ItemComponentType<T = any> {
"codec"(): $Codec<T>
"getRootTagType"(): $TagEnum
"registryName"(): $ResourceLocation
"suggestionComponentValue"(): $Function<$ItemComponentParser, $BiFunction<$SuggestionsBuilder, $Consumer<$SuggestionsBuilder>, $CompletableFuture<$Suggestions>>>
"translation"(): $Component
"translationSuffix"(): $Optional<$Component>
get "rootTagType"(): $TagEnum
}

export namespace $ItemComponentType {
const CODEC: $Codec<$ItemComponentType<any>>
}
export abstract class $ItemComponentType$$Static<T = any> implements $ItemComponentType<T> {
static readonly "CODEC": $Codec<$ItemComponentType<any>>

}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraItemStackItf" {
import { $ItemComponentManager, $ItemComponentManager$$Type } from "com.mega.endinglib.api.item.component.ItemComponentManager"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ExtraItemStackItf {
"endingLibrary$getComponentManager"(): $ItemComponentManager
"endingLibrary$setComponentManager"(itemComponentManager0: $ItemComponentManager$$Type): void
"isDecodedFailed"(): boolean
"setDecodeFailed"(boolean0: boolean): void
get "decodedFailed"(): boolean
set "decodeFailed"(value: boolean)
}

export namespace $ExtraItemStackItf {
function of(itemStack0: $ItemStack$$Type): $ExtraItemStackItf
}
export abstract class $ExtraItemStackItf$$Static implements $ExtraItemStackItf {
static "of"(itemStack0: $ItemStack$$Type): $ExtraItemStackItf
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorItemEntity" {
import { $UUID } from "java.util.UUID"

export interface $AccessorItemEntity {
"getPickupDelay"(): integer
"getTarget"(): $UUID
"setPickupDelay"(int0: integer): void
get "pickupDelay"(): integer
get "target"(): $UUID
set "pickupDelay"(value: integer)
}

export namespace $AccessorItemEntity {
const probejs$$marker: never
}
export abstract class $AccessorItemEntity$$Static implements $AccessorItemEntity {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorTrackedEntity" {
import { $ServerPlayerConnection } from "net.minecraft.server.network.ServerPlayerConnection"
import { $Set } from "java.util.Set"

export interface $AccessorTrackedEntity {
"getSeenBy"(): $Set<$ServerPlayerConnection>
get "seenBy"(): $Set<$ServerPlayerConnection>
}

export namespace $AccessorTrackedEntity {
const probejs$$marker: never
}
export abstract class $AccessorTrackedEntity$$Static implements $AccessorTrackedEntity {
}
}

declare module "com.mega.endinglib.api.item.component.ComponentChanges$AddedRemovedPair" {
import { $Set, $Set$$Type } from "java.util.Set"
import { $ItemComponentType, $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $Record } from "java.lang.Record"
import { $ComponentMap, $ComponentMap$$Type } from "com.mega.endinglib.api.item.component.ComponentMap"

export class $ComponentChanges$AddedRemovedPair extends $Record {
static readonly "EMPTY": $ComponentChanges$AddedRemovedPair

constructor(added: $ComponentMap$$Type, removed: $Set$$Type<$ItemComponentType$$Type<any>>)

public "added"(): $ComponentMap
public "removed"(): $Set<$ItemComponentType<any>>
}
}

declare module "com.mega.endinglib.api.client.camera.ModifierType" {
import { $CameraValueInstance } from "com.mega.endinglib.api.client.camera.CameraValueInstance"
import { $Enum } from "java.lang.Enum"
import { $Function } from "java.util.function.Function"
import { $ICameraManager } from "com.mega.endinglib.api.client.camera.ICameraManager"

export class $ModifierType extends $Enum<$ModifierType> {
static readonly "FOV": $ModifierType
static readonly "RAYCAST": $ModifierType
static readonly "RELATIVE_X": $ModifierType
static readonly "RELATIVE_Y": $ModifierType
static readonly "RELATIVE_Z": $ModifierType
static readonly "ROTATION_X": $ModifierType
static readonly "ROTATION_Y": $ModifierType
static readonly "ROTATION_Z": $ModifierType
static readonly "TRANSLATION_X": $ModifierType
static readonly "TRANSLATION_Y": $ModifierType
static readonly "TRANSLATION_Z": $ModifierType
static readonly "X": $ModifierType
static readonly "Y": $ModifierType
static readonly "Z": $ModifierType
static readonly "ZOOM": $ModifierType

public "getFieldGetter"(): $Function<$ICameraManager, $CameraValueInstance>
public static "valueOf"(string0: string): $ModifierType
public static "values"(): $ModifierType[]
get "fieldGetter"(): $Function<$ICameraManager, $CameraValueInstance>
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorLivingEntity" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map$$Type } from "java.util.Map"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export interface $AccessorLivingEntity {
"callCheckTotemDeathProtection"(damageSource0: $DamageSource$$Type): boolean
"callCreateWitherRose"(livingEntity0: $LivingEntity$$Type): void
"callDropAllDeathLoot"(damageSource0: $DamageSource$$Type): void
"callHurtArmor"(damageSource0: $DamageSource$$Type, float1: float): void
"callHurtCurrentlyUsedShield"(float0: float): void
"callHurtHelmet"(damageSource0: $DamageSource$$Type, float1: float): void
"callOnEffectAdded"(mobEffectInstance0: $MobEffectInstance$$Type, entity1: $Entity$$Type): void
"callOnEffectRemoved"(mobEffectInstance0: $MobEffectInstance$$Type): void
"callOnEffectUpdated"(mobEffectInstance0: $MobEffectInstance$$Type, boolean1: boolean, entity2: $Entity$$Type): void
"callSpawnItemParticles"(itemStack0: $ItemStack$$Type, int1: integer): void
"getDeathScore"(): integer
"getLastDamageSource"(): $DamageSource
"getLastHurtByPlayerTime"(): integer
"invokeGetDeathSound"(): $SoundEvent
"invokeGetSoundVolume"(): float
"invokePlayHurtSound"(damageSource0: $DamageSource$$Type): void
"isDead"(): boolean
"isSkipDropExperience"(): boolean
"setActiveEffects"(map0: $Map$$Type<$MobEffect$$Type, $MobEffectInstance$$Type>): void
"setAttackStrengthTicker"(int0: integer): void
"setDead"(boolean0: boolean): void
"setLastDamageSource"(damageSource0: $DamageSource$$Type): void
"setLastDamageStamp"(long0: long): void
"setLastHurt"(float0: float): void
"setLastHurtByPlayerTime"(int0: integer): void
"setNoActionTime"(int0: integer): void
"setSkipDropExperience"(boolean0: boolean): void
get "deathScore"(): integer
get "lastDamageSource"(): $DamageSource
get "lastHurtByPlayerTime"(): integer
get "dead"(): boolean
get "skipDropExperience"(): boolean
set "activeEffects"(value: $Map$$Type<$MobEffect$$Type, $MobEffectInstance$$Type>)
set "attackStrengthTicker"(value: integer)
set "dead"(value: boolean)
set "lastDamageSource"(value: $DamageSource$$Type)
set "lastDamageStamp"(value: long)
set "lastHurt"(value: float)
set "lastHurtByPlayerTime"(value: integer)
set "noActionTime"(value: integer)
set "skipDropExperience"(value: boolean)
}

export namespace $AccessorLivingEntity {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntity$$Static implements $AccessorLivingEntity {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraDisplayEntity" {
import { $Easing, $Easing$$Type } from "com.mega.endinglib.api.client.Easing"

export interface $ExtraDisplayEntity {
"getInterpolationEasing"(): $Easing
"setInterpolationEasing"(easing0: $Easing$$Type): void
get "interpolationEasing"(): $Easing
set "interpolationEasing"(value: $Easing$$Type)
}

export namespace $ExtraDisplayEntity {
const probejs$$marker: never
}
export abstract class $ExtraDisplayEntity$$Static implements $ExtraDisplayEntity {
}
}

declare module "com.mega.endinglib.api.event.client.TimeStoppedClientTickEvent" {
import { $TickEvent$Phase$$Type } from "net.minecraftforge.event.TickEvent$Phase"
import { $TickEvent$ClientTickEvent } from "net.minecraftforge.event.TickEvent$ClientTickEvent"

export class $TimeStoppedClientTickEvent extends $TickEvent$ClientTickEvent {
constructor(phase0: $TickEvent$Phase$$Type)
constructor()

}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorMobEffectInstance" {
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"

export interface $AccessorMobEffectInstance {
"getHiddenEffect"(): $MobEffectInstance
get "hiddenEffect"(): $MobEffectInstance
}

export namespace $AccessorMobEffectInstance {
const probejs$$marker: never
}
export abstract class $AccessorMobEffectInstance$$Static implements $AccessorMobEffectInstance {
}
}

declare module "com.mega.endinglib.api.capability.CapabilityEntityData" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CapabilityDataSerializer, $CapabilityDataSerializer$$Type } from "com.mega.endinglib.api.capability.syncher.CapabilityDataSerializer"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $SynchedCapabilityData$$Type } from "com.mega.endinglib.api.capability.SynchedCapabilityData"

export class $CapabilityEntityData<T = any> {
constructor(t0: T, int1: integer, capabilityDataSerializer2: $CapabilityDataSerializer$$Type<T>)
constructor(t0: T, int1: integer, capabilityDataSerializer2: $CapabilityDataSerializer$$Type<T>, string3: string)
constructor(t0: T, int1: integer, capabilityDataSerializer2: $CapabilityDataSerializer$$Type<T>, string3: string, boolean4: boolean)

public "getId"(): integer
public "getInitValue"(): T
public "getSerializer"(): $CapabilityDataSerializer<T>
public "isDirty"(): boolean
public "isInitValue"(): boolean
public "read"(compoundTag0: $CompoundTag$$Type): void
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setDataManager"(synchedCapabilityData0: $SynchedCapabilityData$$Type): void
public "setDirty"(boolean0: boolean): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(compoundTag0: $CompoundTag$$Type): void
get "id"(): integer
get "initValue"(): T
get "serializer"(): $CapabilityDataSerializer<T>
get "dirty"(): boolean
get "initValue"(): boolean
set "dataManager"(value: $SynchedCapabilityData$$Type)
set "dirty"(value: boolean)
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorDamageSources" {
import { $Registry } from "net.minecraft.core.Registry"
import { $DamageType } from "net.minecraft.world.damagesource.DamageType"

export interface $AccessorDamageSources {
"getDamageTypes"(): $Registry<$DamageType>
get "damageTypes"(): $Registry<$DamageType>
}

export namespace $AccessorDamageSources {
const probejs$$marker: never
}
export abstract class $AccessorDamageSources$$Static implements $AccessorDamageSources {
}
}

declare module "com.mega.endinglib.api.event.EventItf" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EventItf {
"el_isEventUnCancelable"(): boolean
"el_setEventUnCancelable"(boolean0: boolean): void
}

export namespace $EventItf {
const probejs$$marker: never
}
export abstract class $EventItf$$Static implements $EventItf {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorShaderInstance" {
import { $List } from "java.util.List"
import { $BlendMode } from "com.mojang.blaze3d.shaders.BlendMode"
import { $Uniform } from "com.mojang.blaze3d.shaders.Uniform"

export interface $AccessorShaderInstance {
"getBlend"(): $BlendMode
"getUniforms"(): $List<$Uniform>
get "blend"(): $BlendMode
get "uniforms"(): $List<$Uniform>
}

export namespace $AccessorShaderInstance {
const probejs$$marker: never
}
export abstract class $AccessorShaderInstance$$Static implements $AccessorShaderInstance {
}
}

declare module "com.mega.endinglib.client.advanced.ELCameraManager" {
import { $Camera, $Camera$$Type } from "net.minecraft.client.Camera"
import { $GameRenderer, $GameRenderer$$Type } from "net.minecraft.client.renderer.GameRenderer"
import { $ViewportEvent$ComputeCameraAngles$$Type } from "net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles"
import { $CameraValueInstance } from "com.mega.endinglib.api.client.camera.CameraValueInstance"
import { $Minecraft, $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $CameraType, $CameraType$$Type } from "net.minecraft.client.CameraType"
import { $CameraModifier$$Type } from "com.mega.endinglib.api.client.camera.CameraModifier"
import { $EndingLibraryPlayerCapability$$Type } from "com.mega.endinglib.common.capability.EndingLibraryPlayerCapability"
import { $ViewportEvent$ComputeFov$$Type } from "net.minecraftforge.client.event.ViewportEvent$ComputeFov"
import { $ICameraManager } from "com.mega.endinglib.api.client.camera.ICameraManager"

export class $ELCameraManager implements $ICameraManager {
static readonly "DEFAULT_ORIGIN_ROT": float
readonly "fovOffset": $CameraValueInstance
readonly "raycastOffset": $CameraValueInstance
"shouldStoreOriginPos": boolean
readonly "x": $CameraValueInstance
readonly "xOffset": $CameraValueInstance
readonly "xRelative": $CameraValueInstance
readonly "xRot": $CameraValueInstance
readonly "y": $CameraValueInstance
readonly "yOffset": $CameraValueInstance
readonly "yRelative": $CameraValueInstance
readonly "yRot": $CameraValueInstance
readonly "z": $CameraValueInstance
readonly "zOffset": $CameraValueInstance
readonly "zRelative": $CameraValueInstance
readonly "zRot": $CameraValueInstance
readonly "zoomOffset": $CameraValueInstance

constructor(minecraft0: $Minecraft$$Type, gameRenderer1: $GameRenderer$$Type, camera2: $Camera$$Type)

public "addFovModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentFovModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
public "close"(): void
public "freeze"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
public "getFovOffset"(float0: float): double
public "getFovOffset0"(): $CameraValueInstance
public "getGameRenderer"(): $GameRenderer
public "getMainCamera"(): $Camera
public "getMinecraft"(): $Minecraft
public "getOriginX"(): double
public "getOriginXRot"(): double
public "getOriginY"(): double
public "getOriginYRot"(): double
public "getOriginZ"(): double
public "getOriginZRot"(): double
public "getOriginZoom"(): float
public "getRaycastOffset"(float0: float): double
public "getRaycastOffset0"(): $CameraValueInstance
public "getX"(): $CameraValueInstance
public "getX"(float0: float): double
public "getXOffset"(float0: float): double
public "getXOffset0"(): $CameraValueInstance
public "getXRelative"(float0: float): double
public "getXRelative0"(): $CameraValueInstance
public "getXRot0"(): $CameraValueInstance
public "getXRotation"(float0: float): double
public "getY"(): $CameraValueInstance
public "getY"(float0: float): double
public "getYOffset"(float0: float): double
public "getYOffset0"(): $CameraValueInstance
public "getYRelative"(float0: float): double
public "getYRelative0"(): $CameraValueInstance
public "getYRot0"(): $CameraValueInstance
public "getYRotation"(float0: float): double
public "getZ"(): $CameraValueInstance
public "getZ"(float0: float): double
public "getZOffset"(float0: float): double
public "getZOffset0"(): $CameraValueInstance
public "getZRelative"(float0: float): double
public "getZRelative0"(): $CameraValueInstance
public "getZRot0"(): $CameraValueInstance
public "getZRotation"(float0: float): double
public "getZoomOffset"(float0: float): double
public "getZoomOffset0"(): $CameraValueInstance
public "lockOriginXRot"(float0: float): void
public "lockOriginYRot"(float0: float): void
public "lockOriginZRot"(float0: float): void
public "oldUpdate"(): void
public "onAngels"(computeCameraAngles0: $ViewportEvent$ComputeCameraAngles$$Type): void
public "onDisconnect"(): void
public "onFov"(computeFov0: $ViewportEvent$ComputeFov$$Type): void
public "onFreezingMode"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
public "removeFovModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
public "setOriginX"(double0: double): void
public "setOriginXRot"(double0: double): void
public "setOriginY"(double0: double): void
public "setOriginYRot"(double0: double): void
public "setOriginZ"(double0: double): void
public "setOriginZRot"(double0: double): void
public "setOriginZoom"(float0: float): void
public "shouldStoreOriginPos"(): boolean
public "storeOriginPos"(double0: double, double1: double, double2: double): void
public "tick"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
public "unlockOriginXRot"(): void
public "unlockOriginYRot"(): void
public "unlockOriginZRot"(): void
public "updateModifier"(): void
get "cameraType"(): $CameraType
set "cameraType"(value: $CameraType$$Type)
get "vanillaAngelsNeedsToFreeze"(): boolean
set "vanillaAngelsNeedsToFreeze"(value: boolean)
get "vanillaFovNeedsToFreeze"(): boolean
set "vanillaFovNeedsToFreeze"(value: boolean)
get "vanillaZoomNeedsToFreeze"(): boolean
set "vanillaZoomNeedsToFreeze"(value: boolean)
get "fovOffset0"(): $CameraValueInstance
get "gameRenderer"(): $GameRenderer
get "mainCamera"(): $Camera
get "minecraft"(): $Minecraft
get "originX"(): double
get "originXRot"(): double
get "originY"(): double
get "originYRot"(): double
get "originZ"(): double
get "originZRot"(): double
get "originZoom"(): float
get "raycastOffset0"(): $CameraValueInstance
get "xOffset0"(): $CameraValueInstance
get "xRelative0"(): $CameraValueInstance
get "xRot0"(): $CameraValueInstance
get "yOffset0"(): $CameraValueInstance
get "yRelative0"(): $CameraValueInstance
get "yRot0"(): $CameraValueInstance
get "zOffset0"(): $CameraValueInstance
get "zRelative0"(): $CameraValueInstance
get "zRot0"(): $CameraValueInstance
get "zoomOffset0"(): $CameraValueInstance
set "originX"(value: double)
set "originXRot"(value: double)
set "originY"(value: double)
set "originYRot"(value: double)
set "originZ"(value: double)
set "originZRot"(value: double)
set "originZoom"(value: float)
}
}

declare module "com.mega.endinglib.util.mc.codec.impl.MobEffectInstanceParameters" {
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"
import { $Record } from "java.lang.Record"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $MobEffectInstanceParameters extends $Record {
static readonly "CODEC": $MapCodec<$MobEffectInstanceParameters>

constructor(amplifier: integer, duration: integer, ambient: boolean, showParticles: boolean, showIcon: boolean, hiddenEffect: $Optional$$Type<$MobEffectInstanceParameters$$Type>)

public "ambient"(): boolean
public "amplifier"(): integer
public "duration"(): integer
public static "fromParameters"(mobEffect0: $MobEffect$$Type, mobEffectInstanceParameters1: $MobEffectInstanceParameters$$Type): $MobEffectInstance
public "hiddenEffect"(): $Optional<$MobEffectInstanceParameters>
public "showIcon"(): boolean
public "showParticles"(): boolean
}
}

declare module "com.mega.endinglib.api.item.component.ComponentMap$Builder" {
import { $List } from "java.util.List"
import { $ComponentMapBuilder } from "com.mega.endinglib.api.item.component.ComponentMapBuilder"
import { $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ComponentMap, $ComponentMap$$Type } from "com.mega.endinglib.api.item.component.ComponentMap"

export class $ComponentMap$Builder implements $ComponentMapBuilder {
public "add"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): $ComponentMap$Builder
public "addAll"(componentMap0: $ComponentMap$$Type): $ComponentMap$Builder
public "build"(): $ComponentMap
public "contains"(itemComponentType0: $ItemComponentType$$Type): boolean
public "getOrCreate"(itemComponentType0: $ItemComponentType$$Type, supplier1: $Supplier$$Type): any
public "getOrDefault"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): T
public "getOrEmpty"(itemComponentType0: $ItemComponentType$$Type): $List
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraEntityDimensions" {
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $ExtraEntityDimensions {
"getScaleByCoremod"(): float
"isBeScaledByCoremod"(): boolean
"scaleByCoremod"(double0: double, runnable1: $Runnable$$Type): $EntityDimensions
"setIsBeScaledByCoremod"(boolean0: boolean): void
"setScaleByCoremod"(float0: float): void
get "beScaledByCoremod"(): boolean
}

export namespace $ExtraEntityDimensions {
function of(entityDimensions0: $EntityDimensions$$Type): $ExtraEntityDimensions
}
export abstract class $ExtraEntityDimensions$$Static implements $ExtraEntityDimensions {
static "of"(entityDimensions0: $EntityDimensions$$Type): $ExtraEntityDimensions
}
}

declare module "com.mega.endinglib.util.mixin.bettercombat.BetterCombatTicker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BetterCombatTicker {
"tickHead"(): void
"tickTail"(): void
}

export namespace $BetterCombatTicker {
const probejs$$marker: never
}
export abstract class $BetterCombatTicker$$Static implements $BetterCombatTicker {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorGuiGraphics" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $List$$Type } from "java.util.List"
import { $ClientTooltipPositioner$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $AccessorGuiGraphics {
"callFlushIfManaged"(): void
"callFlushIfUnmanaged"(): void
"invokeRenderTooltipInternal"(font0: $Font$$Type, list1: $List$$Type<$ClientTooltipComponent$$Type>, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type): void
}

export namespace $AccessorGuiGraphics {
const probejs$$marker: never
}
export abstract class $AccessorGuiGraphics$$Static implements $AccessorGuiGraphics {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorChunkMap" {
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ChunkMap$TrackedEntity } from "net.minecraft.server.level.ChunkMap$TrackedEntity"

export interface $AccessorChunkMap {
"getEntityMap"(): $Int2ObjectMap<$ChunkMap$TrackedEntity>
get "entityMap"(): $Int2ObjectMap<$ChunkMap$TrackedEntity>
}

export namespace $AccessorChunkMap {
const probejs$$marker: never
}
export abstract class $AccessorChunkMap$$Static implements $AccessorChunkMap {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraEntityData" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Easing$$Type } from "com.mega.endinglib.api.client.Easing"

export class $ExtraEntityData {
constructor(entity0: $Entity$$Type)

public "calculateInterpolationProgress"(float0: float): float
public "forceTick"(): void
public "getScaleX"(float0: float, float1: float): float
public "getScaleY"(float0: float, float1: float): float
public "getScaleZ"(float0: float, float1: float): float
public "onRenderScaleUpdate"(): void
public "setInterpolationDuration"(int0: integer): void
public "setInterpolationType"(easing0: $Easing$$Type): void
public "tick"(): void
get "canBeCollideWith"(): byte
set "canBeCollideWith"(value: byte)
get "customModelTexture"(): $ResourceLocation
set "customModelTexture"(value: $ResourceLocation$$Type)
get "hasCustomRenderScale"(): boolean
set "hasCustomRenderScale"(value: boolean)
get "isFrozen"(): boolean
set "isFrozen"(value: boolean)
get "lockedXRot"(): boolean
set "lockedXRot"(value: boolean)
get "lockedYRot"(): boolean
set "lockedYRot"(value: boolean)
get "pickable"(): byte
set "pickable"(value: byte)
get "pushable"(): byte
set "pushable"(value: byte)
get "tickCount"(): integer
set "tickCount"(value: integer)
set "interpolationDuration"(value: integer)
set "interpolationType"(value: $Easing$$Type)
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorCooldownsInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorCooldownsInstance {
"getEndTime"(): integer
"getStartTime"(): integer
get "endTime"(): integer
get "startTime"(): integer
}

export namespace $AccessorCooldownsInstance {
const probejs$$marker: never
}
export abstract class $AccessorCooldownsInstance$$Static implements $AccessorCooldownsInstance {
}
}

declare module "com.mega.endinglib.api.client.camera.ICameraManager" {
import { $CameraValueInstance } from "com.mega.endinglib.api.client.camera.CameraValueInstance"
import { $CameraModifier$$Type } from "com.mega.endinglib.api.client.camera.CameraModifier"
import { $EndingLibraryPlayerCapability$$Type } from "com.mega.endinglib.common.capability.EndingLibraryPlayerCapability"

export interface $ICameraManager {
"addFovModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentFovModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addPermanentZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addXModifier"(cameraModifier0: $CameraModifier$$Type): void
"addYModifier"(cameraModifier0: $CameraModifier$$Type): void
"addZModifier"(cameraModifier0: $CameraModifier$$Type): void
"addZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
"getFovOffset"(float0: float): double
"getFovOffset0"(): $CameraValueInstance
"getOriginX"(): double
"getOriginXRot"(): double
"getOriginY"(): double
"getOriginYRot"(): double
"getOriginZ"(): double
"getOriginZRot"(): double
"getOriginZoom"(): float
"getRaycastOffset"(float0: float): double
"getRaycastOffset0"(): $CameraValueInstance
"getX"(): $CameraValueInstance
"getX"(float0: float): double
"getXOffset"(float0: float): double
"getXOffset0"(): $CameraValueInstance
"getXRelative"(float0: float): double
"getXRelative0"(): $CameraValueInstance
"getXRot0"(): $CameraValueInstance
"getXRotation"(float0: float): double
"getY"(): $CameraValueInstance
"getY"(float0: float): double
"getYOffset"(float0: float): double
"getYOffset0"(): $CameraValueInstance
"getYRelative"(float0: float): double
"getYRelative0"(): $CameraValueInstance
"getYRot0"(): $CameraValueInstance
"getYRotation"(float0: float): double
"getZ"(float0: float): double
"getZ"(): $CameraValueInstance
"getZOffset"(float0: float): double
"getZOffset0"(): $CameraValueInstance
"getZRelative"(float0: float): double
"getZRelative0"(): $CameraValueInstance
"getZRot0"(): $CameraValueInstance
"getZRotation"(float0: float): double
"getZoomOffset"(float0: float): double
"getZoomOffset0"(): $CameraValueInstance
"lockOriginXRot"(float0: float): void
"lockOriginYRot"(float0: float): void
"lockOriginZRot"(float0: float): void
"oldUpdate"(): void
"onFreezingMode"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
"removeFovModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeXModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeYModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeZModifier"(cameraModifier0: $CameraModifier$$Type): void
"removeZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
"setOriginX"(double0: double): void
"setOriginXRot"(double0: double): void
"setOriginY"(double0: double): void
"setOriginYRot"(double0: double): void
"setOriginZ"(double0: double): void
"setOriginZRot"(double0: double): void
"setOriginZoom"(float0: float): void
"shouldStoreOriginPos"(): boolean
"storeOriginPos"(double0: double, double1: double, double2: double): void
"tick"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
"unlockOriginXRot"(): void
"unlockOriginYRot"(): void
"unlockOriginZRot"(): void
"updateModifier"(): void
get "fovOffset0"(): $CameraValueInstance
get "originX"(): double
get "originXRot"(): double
get "originY"(): double
get "originYRot"(): double
get "originZ"(): double
get "originZRot"(): double
get "originZoom"(): float
get "raycastOffset0"(): $CameraValueInstance
get "x"(): $CameraValueInstance
get "xOffset0"(): $CameraValueInstance
get "xRelative0"(): $CameraValueInstance
get "xRot0"(): $CameraValueInstance
get "y"(): $CameraValueInstance
get "yOffset0"(): $CameraValueInstance
get "yRelative0"(): $CameraValueInstance
get "yRot0"(): $CameraValueInstance
get "z"(): $CameraValueInstance
get "zOffset0"(): $CameraValueInstance
get "zRelative0"(): $CameraValueInstance
get "zRot0"(): $CameraValueInstance
get "zoomOffset0"(): $CameraValueInstance
set "originX"(value: double)
set "originXRot"(value: double)
set "originY"(value: double)
set "originYRot"(value: double)
set "originZ"(value: double)
set "originZRot"(value: double)
set "originZoom"(value: float)
}

export namespace $ICameraManager {
const probejs$$marker: never
}
export abstract class $ICameraManager$$Static implements $ICameraManager {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorServerLevel" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ServerChunkCache } from "net.minecraft.server.level.ServerChunkCache"
import { $PersistentEntitySectionManager } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"
import { $EntityTickList } from "net.minecraft.world.level.entity.EntityTickList"

export interface $AccessorServerLevel {
"getChunkSource"(): $ServerChunkCache
"getEntityManager"(): $PersistentEntitySectionManager<$Entity>
"getEntityTickList"(): $EntityTickList
"shouldDiscardEntity$el"(entity0: $Entity$$Type): boolean
get "chunkSource"(): $ServerChunkCache
get "entityManager"(): $PersistentEntitySectionManager<$Entity>
get "entityTickList"(): $EntityTickList
}

export namespace $AccessorServerLevel {
const probejs$$marker: never
}
export abstract class $AccessorServerLevel$$Static implements $AccessorServerLevel {
}
}

declare module "com.mega.endinglib.util.mixin.level.ServerExpandedContext" {
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Set } from "java.util.Set"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

export class $ServerExpandedContext {
readonly "server": $MinecraftServer
readonly "timeStopDimensions": $Set<$ResourceKey<$Level>>

constructor(minecraftServer0: $MinecraftServer$$Type)

public "update"(): void
}
}

declare module "com.mega.endinglib.api.item.component.ComponentChanges" {
import { $ComponentChanges$AddedRemovedPair } from "com.mega.endinglib.api.item.component.ComponentChanges$AddedRemovedPair"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set } from "java.util.Set"
import { $Optional } from "java.util.Optional"
import { $ItemComponentType, $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $ComponentChanges$Builder } from "com.mega.endinglib.api.item.component.ComponentChanges$Builder"

export class $ComponentChanges {
static readonly "CODEC": $Codec<$ComponentChanges>
static readonly "EMPTY": $ComponentChanges

public static "builder"(item0: $Item$$Type): $ComponentChanges$Builder
public "entrySet"(): $Set<$Map$Entry<$ItemComponentType<any>, $Optional<any>>>
public "get"<T>(itemComponentType0: $ItemComponentType$$Type<T>): $Optional<T>
public "isEmpty"(): boolean
public "size"(): integer
public "toAddedRemovedPair"(): $ComponentChanges$AddedRemovedPair
public "withRemovedIf"(predicate0: $Predicate$$Type<$ItemComponentType$$Type<any>>): $ComponentChanges
get "empty"(): boolean
}
}

declare module "com.mega.endinglib.common.capability.EndingLibraryPlayerCapability" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $EntitySyncCapabilityBase } from "com.mega.endinglib.api.capability.EntitySyncCapabilityBase"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ModifierType } from "com.mega.endinglib.api.client.camera.ModifierType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Abilities$$Type } from "net.minecraft.world.entity.player.Abilities"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Class } from "java.lang.Class"
import { $ELServerCameraManager, $ELServerCameraManager$$Type } from "com.mega.endinglib.client.advanced.ELServerCameraManager"
import { $CapabilityProvider } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $CapabilityEntityData } from "com.mega.endinglib.api.capability.CapabilityEntityData"
import { $InputCooldowns } from "com.mega.endinglib.common.data.InputCooldowns"

export class $EndingLibraryPlayerCapability extends $EntitySyncCapabilityBase {
readonly "CAMERA_AVAILABLE_AREA": $CapabilityEntityData<$Optional<$AABB>>
readonly "CUSTOM_SKIN": $CapabilityEntityData<string>
readonly "DISPLAY_NAME": $CapabilityEntityData<$Optional<$Component>>
readonly "HIDE_SCOREBOARD_NUM": $CapabilityEntityData<boolean>
readonly "HURT_VIEW_MULTIPLIER": $CapabilityEntityData<float>
readonly "LOCKED_CAMERA_ORIGIN_X_ROT": $CapabilityEntityData<$Optional<float>>
readonly "LOCKED_CAMERA_ORIGIN_Y_ROT": $CapabilityEntityData<$Optional<float>>
readonly "LOCKED_GAME_MODE": $CapabilityEntityData<boolean>
readonly "LOCKED_HOTBAR": $CapabilityEntityData<byte>
readonly "LOCKED_POSE": $CapabilityEntityData<$Optional<$Pose>>
static readonly "MODIFIER_TYPES": $ModifierType[]
static readonly "NAME": $ResourceLocation
readonly "ORIGIN_POS": $CapabilityEntityData<$Optional<$Vector3f>>
readonly "OTHER_PLAYERS_RENDERING": $CapabilityEntityData<boolean>
readonly "OTHER_PLAYER_NAMES_RENDERER": $CapabilityEntityData<boolean>
readonly "OTHER_SPECTOR_RENDERING": $CapabilityEntityData<boolean>
readonly "OVERRIDE_ABILITIES": $CapabilityEntityData<integer>
readonly "USING_CAMERA_MODE": $CapabilityEntityData<integer>
readonly "WALKING_VIEW_MULTIPLIER": $CapabilityEntityData<float>

constructor()

public "getAbilityFlags"(): integer
public "getAbilityFlying"(): integer
public "getAbilityInstabuild"(): integer
public "getAbilityInvulnerable"(): integer
public "getAbilityMayBuild"(): integer
public "getAbilityMayfly"(): integer
public "getCameraAvailableArea"(): $Optional<$AABB>
public "getCameraDataManager"(): $ELServerCameraManager
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomSkin"(): string
public "getDisplayNameOpt"(): $Optional<$Component>
public "getEnableClass"(): $Class<$CapabilityProvider<$Entity>>
public "getFlags"(): integer
public "getHurtViewMultiplier"(): float
public "getInputCooldowns"(): $InputCooldowns
public "getLockedCameraOriginXRot"(): $Optional<float>
public "getLockedCameraOriginYRot"(): $Optional<float>
public "getLockedHotbar"(): integer
public "getLockedPose"(): $Optional<$Pose>
public "getOriginPos"(): $Optional<$Vector3f>
public "getWalkingViewMultiplier"(): float
public "isCameraPersonLocked"(): boolean
public "isFollowPosition"(): boolean
public "isForcedControlledCamera"(): boolean
public "isFovLocked"(): boolean
public "isGameModeLocked"(): boolean
public "isMouseControlled"(): boolean
public "isScoreboardNumDisplay"(): boolean
public "isUsingCustomCamera"(): boolean
public "isVanillaCameraFreezing"(): boolean
public "lockCameraOriginXRot"(float0: float): void
public "lockCameraOriginYRot"(float0: float): void
public "lockedPose"(pose0: $Pose$$Type, int1: integer, serverPlayer2: $ServerPlayer$$Type): void
public "modifyAbilities"(abilities0: $Abilities$$Type): void
public "otherPlayerNamesRendering"(): boolean
public "otherPlayerRendering"(): boolean
public "otherSpectorRendering"(): boolean
public "setAbilityFlying"(int0: integer): void
public "setAbilityInstabuild"(int0: integer): void
public "setAbilityInvulnerable"(int0: integer): void
public "setAbilityMayBuild"(int0: integer): void
public "setAbilityMayfly"(int0: integer): void
public "setCameraAvailableArea"(aABB0: $AABB$$Type): void
public "setCustomSkin"(string0: string): void
public "setDisplayNameOpt"(optional0: $Optional$$Type<$Component$$Type>): void
public "setFollowPosition"(boolean0: boolean): void
public "setForcedControlledCamera"(boolean0: boolean): void
public "setHurtViewMultiplier"(float0: float): void
public "setLockedCameraPerson"(boolean0: boolean): void
public "setLockedFov"(boolean0: boolean): void
public "setLockedGameMode"(boolean0: boolean): void
public "setLockedHotbar"(int0: integer): void
public "setLockedPose"(pose0: $Pose$$Type): void
public "setMouseControlled"(boolean0: boolean): void
public "setOriginPos"(vector3f0: $Vector3f$$Type): void
public "setOtherPlayerNamesRendering"(boolean0: boolean): void
public "setOtherPlayerRendering"(boolean0: boolean): void
public "setOtherSpectorRendering"(boolean0: boolean): void
public "setScoreboardNumDisplay"(boolean0: boolean): void
public "setUsingCustomCamera"(boolean0: boolean): void
public "setVanillaCameraFreezing"(boolean0: boolean): void
public "setWalkingViewMultiplier"(float0: float): void
public "tick"(entity0: $Entity$$Type): void
public "unlockCameraOriginXRot"(): void
public "unlockCameraOriginYRot"(): void
public "unlockPose"(serverPlayer0: $ServerPlayer$$Type): void
get "cameraDataManager"(): $ELServerCameraManager
set "cameraDataManager"(value: $ELServerCameraManager$$Type)
get "cameraType"(): short
set "cameraType"(value: short)
get "poseLockingTime"(): integer
set "poseLockingTime"(value: integer)
get "abilityFlags"(): integer
get "abilityFlying"(): integer
get "abilityInstabuild"(): integer
get "abilityInvulnerable"(): integer
get "abilityMayBuild"(): integer
get "abilityMayfly"(): integer
get "cameraAvailableArea"(): $Optional<$AABB>
get "customSkin"(): string
get "displayNameOpt"(): $Optional<$Component>
get "enableClass"(): $Class<$CapabilityProvider<$Entity>>
get "flags"(): integer
get "hurtViewMultiplier"(): float
get "inputCooldowns"(): $InputCooldowns
get "lockedCameraOriginXRot"(): $Optional<float>
get "lockedCameraOriginYRot"(): $Optional<float>
get "lockedHotbar"(): integer
get "originPos"(): $Optional<$Vector3f>
get "walkingViewMultiplier"(): float
get "cameraPersonLocked"(): boolean
get "followPosition"(): boolean
get "forcedControlledCamera"(): boolean
get "fovLocked"(): boolean
get "gameModeLocked"(): boolean
get "mouseControlled"(): boolean
get "scoreboardNumDisplay"(): boolean
get "usingCustomCamera"(): boolean
get "vanillaCameraFreezing"(): boolean
set "abilityFlying"(value: integer)
set "abilityInstabuild"(value: integer)
set "abilityInvulnerable"(value: integer)
set "abilityMayBuild"(value: integer)
set "abilityMayfly"(value: integer)
set "cameraAvailableArea"(value: $AABB$$Type)
set "customSkin"(value: string)
set "displayNameOpt"(value: $Optional$$Type<$Component$$Type>)
set "followPosition"(value: boolean)
set "forcedControlledCamera"(value: boolean)
set "hurtViewMultiplier"(value: float)
set "lockedCameraPerson"(value: boolean)
set "lockedFov"(value: boolean)
set "lockedGameMode"(value: boolean)
set "lockedHotbar"(value: integer)
set "mouseControlled"(value: boolean)
set "originPos"(value: $Vector3f$$Type)
set "scoreboardNumDisplay"(value: boolean)
set "usingCustomCamera"(value: boolean)
set "vanillaCameraFreezing"(value: boolean)
set "walkingViewMultiplier"(value: float)
}
}

declare module "com.mega.endinglib.api.capability.CapabilitySyncType" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $CapabilitySyncType extends $Enum<$CapabilitySyncType> implements $IExtensibleEnum {
static readonly "CLIENT_OPTIONS": $CapabilitySyncType
static readonly "COMPLETELY": $CapabilitySyncType
static readonly "DEATH": $CapabilitySyncType
static readonly "DIMENSION_CHANGE": $CapabilitySyncType
static readonly "PLAYER_CLONE": $CapabilitySyncType
static readonly "PLAYER_LOGGED_IN": $CapabilitySyncType
static readonly "PLAYER_LOGGED_OUT": $CapabilitySyncType
static readonly "PLAYER_RESPAWN": $CapabilitySyncType
static readonly "REMOVE": $CapabilitySyncType
static readonly "TICK": $CapabilitySyncType

public static "create"(string0: string): $CapabilitySyncType
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $CapabilitySyncType
public static "values"(): $CapabilitySyncType[]
}
}

declare module "com.mega.endinglib.api.data.CompoundTagWriter" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Optional } from "java.util.Optional"
import { $TeConsumer } from "com.mega.endinglib.util.java.funtion.TeConsumer"

export interface $CompoundTagWriter<T = any> extends $TeConsumer<$CompoundTag, string, T> {
"accept"(compoundTag0: $CompoundTag$$Type, string1: string, t2: T): void
"asOptional"(): $CompoundTagWriter<$Optional<T>>
}

export namespace $CompoundTagWriter {
const probejs$$marker: never
}
export abstract class $CompoundTagWriter$$Static<T = any> implements $CompoundTagWriter<T> {
}
}

declare module "com.mega.endinglib.api.data.TagEnum" {
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Enum } from "java.lang.Enum"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $TagEnum extends $Enum<$TagEnum> {
static readonly "BOOLEAN": $TagEnum
static readonly "BYTE": $TagEnum
static readonly "BYTE_ARRAY": $TagEnum
static readonly "DOUBLE": $TagEnum
static readonly "FLOAT": $TagEnum
static readonly "INT": $TagEnum
static readonly "INT_ARRAY": $TagEnum
static readonly "LIST": $TagEnum
static readonly "LONG": $TagEnum
static readonly "LONG_ARRAY": $TagEnum
static readonly "NONE": $TagEnum
static readonly "SHORT": $TagEnum
static readonly "SNBT": $TagEnum
static readonly "STRING": $TagEnum

public "canUse"(tag0: $Tag$$Type): boolean
public "toComponent"(): $MutableComponent
public static "valueOf"(string0: string): $TagEnum
public static "values"(): $TagEnum[]
}
}

declare module "com.mega.endinglib.api.item.component.Component" {
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MergedComponentMap$$Type } from "com.mega.endinglib.api.item.component.MergedComponentMap"
import { $ItemComponentType, $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $Record } from "java.lang.Record"
import { $DataResult } from "com.mojang.serialization.DataResult"

export class $Component<T = any> extends $Record {
constructor(type: $ItemComponentType$$Type<T>, value: T)

public "apply"(mergedComponentMap0: $MergedComponentMap$$Type): void
public "encode"<D>(dynamicOps0: $DynamicOps$$Type<D>): $DataResult<D>
public static "of"<T>(itemComponentType0: $ItemComponentType$$Type<T>, object1: any): $Component<T>
public "type"(): $ItemComponentType<T>
public "value"(): T
}
}

declare module "com.mega.endinglib.api.event.client.RenderShadowEvent" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $RenderShadowEvent extends $EntityEvent {
constructor()
constructor(entity0: $Entity$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, float3: float, float4: float, float5: float)

public "getBufferSource"(): $MultiBufferSource
public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
public "getShadowRadius"(): float
public "getShadowStrength"(): float
public "setShadowRadius"(float0: float): void
public "setShadowStrength"(float0: float): void
get "bufferSource"(): $MultiBufferSource
get "partialTicks"(): float
get "poseStack"(): $PoseStack
get "shadowRadius"(): float
get "shadowStrength"(): float
set "shadowRadius"(value: float)
set "shadowStrength"(value: float)
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorPlayerModel" {
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $AccessorPlayerModel {
"getCloak"(): $ModelPart
"getEar"(): $ModelPart
get "cloak"(): $ModelPart
get "ear"(): $ModelPart
}

export namespace $AccessorPlayerModel {
const probejs$$marker: never
}
export abstract class $AccessorPlayerModel$$Static implements $AccessorPlayerModel {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorAbstractArrow" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAbstractArrow {
"callSetFlag"(int0: integer, boolean1: boolean): void
}

export namespace $AccessorAbstractArrow {
const probejs$$marker: never
}
export abstract class $AccessorAbstractArrow$$Static implements $AccessorAbstractArrow {
}
}

declare module "com.mega.endinglib.api.item.component.ComponentChanges$Builder" {
import { $ComponentChanges } from "com.mega.endinglib.api.item.component.ComponentChanges"
import { $Component$$Type } from "com.mega.endinglib.api.item.component.Component"
import { $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"

export class $ComponentChanges$Builder {
public "add"<T>(itemComponentType0: $ItemComponentType$$Type<T>, object1: any): $ComponentChanges$Builder
public "add"<T>(component0: $Component$$Type<T>): $ComponentChanges$Builder
public "build"(): $ComponentChanges
public "remove"<T>(itemComponentType0: $ItemComponentType$$Type<T>): $ComponentChanges$Builder
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntity" {
import { $ExtraLivingEntityData } from "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntityData"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $ExtraLivingEntity {
"endinglib$getExtraLivingData"(): $ExtraLivingEntityData
}

export namespace $ExtraLivingEntity {
function of(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
}
export abstract class $ExtraLivingEntity$$Static implements $ExtraLivingEntity {
static "of"(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
}
}

declare module "com.mega.endinglib.api.event.render.CameraPosEvent$Post" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $CameraPosEvent } from "com.mega.endinglib.api.event.render.CameraPosEvent"
import { $GameRenderer$$Type } from "net.minecraft.client.renderer.GameRenderer"

export class $CameraPosEvent$Post extends $CameraPosEvent {
constructor()
constructor(gameRenderer0: $GameRenderer$$Type, camera1: $Camera$$Type, double2: double, double3: double, double4: double, double5: double)

public "move"(double0: double, double1: double, double2: double): void
}
}

declare module "com.mega.endinglib.api.client.MinecraftExtra" {
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ELCameraManager, $ELCameraManager$$Type } from "com.mega.endinglib.client.advanced.ELCameraManager"

export interface $MinecraftExtra {
"getELCameraManager"(): $ELCameraManager
"setELCameraManager"(eLCameraManager0: $ELCameraManager$$Type): void
get "eLCameraManager"(): $ELCameraManager
set "eLCameraManager"(value: $ELCameraManager$$Type)
}

export namespace $MinecraftExtra {
function of(minecraft0: $Minecraft$$Type): $MinecraftExtra
}
export abstract class $MinecraftExtra$$Static implements $MinecraftExtra {
static "of"(minecraft0: $Minecraft$$Type): $MinecraftExtra
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraPlayerRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtraPlayerRenderer {
"endinglib$isSlim"(): boolean
"endinglib$setSlim"(boolean0: boolean): void
}

export namespace $ExtraPlayerRenderer {
const probejs$$marker: never
}
export abstract class $ExtraPlayerRenderer$$Static implements $ExtraPlayerRenderer {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorItemInHandRenderer" {
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $AccessorItemInHandRenderer {
"invokeApplyItemArmTransform"(poseStack0: $PoseStack$$Type, humanoidArm1: $HumanoidArm$$Type, float2: float): void
}

export namespace $AccessorItemInHandRenderer {
const probejs$$marker: never
}
export abstract class $AccessorItemInHandRenderer$$Static implements $AccessorItemInHandRenderer {
}
}

declare module "com.mega.endinglib.api.item.component.type.BlocksAttacksComponent$ItemDamage" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $BlocksAttacksComponent$ItemDamage extends $Record {
static readonly "CODEC": $Codec<$BlocksAttacksComponent$ItemDamage>
static readonly "DEFAULT": $BlocksAttacksComponent$ItemDamage

constructor(threshold: float, base: float, factor: float)

public "base"(): float
public "calculate"(float0: float): integer
public "factor"(): float
public "threshold"(): float
}
}

declare module "com.mega.endinglib.api.item.component.type.BlocksAttacksComponent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlocksAttacksComponent$ItemDamage, $BlocksAttacksComponent$ItemDamage$$Type } from "com.mega.endinglib.api.item.component.type.BlocksAttacksComponent$ItemDamage"
import { $Record } from "java.lang.Record"
import { $DamageType, $DamageType$$Type } from "net.minecraft.world.damagesource.DamageType"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlocksAttacksComponent$DamageReduction, $BlocksAttacksComponent$DamageReduction$$Type } from "com.mega.endinglib.api.item.component.type.BlocksAttacksComponent$DamageReduction"

export class $BlocksAttacksComponent extends $Record {
static readonly "CODEC": $Codec<$BlocksAttacksComponent>

constructor(blockDelaySeconds: float, disableCooldownScale: float, damageReductions: $List$$Type<$BlocksAttacksComponent$DamageReduction$$Type>, itemDamage: $BlocksAttacksComponent$ItemDamage$$Type, bypassedBy: $Optional$$Type<$TagKey$$Type<$DamageType$$Type>>, blockSound: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>, disableSound: $Optional$$Type<$Holder$$Type<$SoundEvent$$Type>>)

public "applyShieldCooldown"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, float2: float, itemStack3: $ItemStack$$Type): void
public "blockDelaySeconds"(): float
public "blockSound"(): $Optional<$Holder<$SoundEvent>>
public "bypassedBy"(): $Optional<$TagKey<$DamageType>>
public "damageReductions"(): $List<$BlocksAttacksComponent$DamageReduction>
public "disableCooldownScale"(): float
public "disableSound"(): $Optional<$Holder<$SoundEvent>>
public "getBlockDelayTicks"(): integer
public "getDamageReductionAmount"(damageSource0: $DamageSource$$Type, float1: float, double2: double): float
public "itemDamage"(): $BlocksAttacksComponent$ItemDamage
public "onShieldHit"(level0: $Level$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, interactionHand3: $InteractionHand$$Type, float4: float): void
public "playBlockSound"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type): void
get "blockDelayTicks"(): integer
}
}

declare module "com.mega.endinglib.api.capability.syncher.CapabilityDataSerializer" {
import { $FriendlyByteBuf$Writer$$Type } from "net.minecraft.network.FriendlyByteBuf$Writer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $CompoundTagReader$$Type } from "com.mega.endinglib.api.data.CompoundTagReader"
import { $Optional } from "java.util.Optional"
import { $CompoundTagWriter$$Type } from "com.mega.endinglib.api.data.CompoundTagWriter"
import { $Class$$Type } from "java.lang.Class"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $FriendlyByteBuf$Reader$$Type } from "net.minecraft.network.FriendlyByteBuf$Reader"

export interface $CapabilityDataSerializer<T = any> {
"copy"(t0: T): T
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"read"(compoundTag0: $CompoundTag$$Type, string1: string): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"write"(compoundTag0: $CompoundTag$$Type, string1: string, t2: T): void
}

export namespace $CapabilityDataSerializer {
function optional<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>, compoundTagWriter2: $CompoundTagWriter$$Type<T>, compoundTagReader3: $CompoundTagReader$$Type<T>): $CapabilityDataSerializer<$Optional<T>>
function simple<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>, compoundTagWriter2: $CompoundTagWriter$$Type<T>, compoundTagReader3: $CompoundTagReader$$Type<T>): $CapabilityDataSerializer<T>
function simpleEnum<T extends $Enum<T>>(class0: $Class$$Type<T>): $CapabilityDataSerializer<T>
}
export abstract class $CapabilityDataSerializer$$Static<T = any> implements $CapabilityDataSerializer<T> {
static "optional"<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>, compoundTagWriter2: $CompoundTagWriter$$Type<T>, compoundTagReader3: $CompoundTagReader$$Type<T>): $CapabilityDataSerializer<$Optional<T>>
static "simple"<T>(writer0: $FriendlyByteBuf$Writer$$Type<T>, reader1: $FriendlyByteBuf$Reader$$Type<T>, compoundTagWriter2: $CompoundTagWriter$$Type<T>, compoundTagReader3: $CompoundTagReader$$Type<T>): $CapabilityDataSerializer<T>
static "simpleEnum"<T extends $Enum<T>>(class0: $Class$$Type<T>): $CapabilityDataSerializer<T>
}
}

declare module "com.mega.endinglib.api.client.camera.CameraKeyframeAnimation$AnimType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum } from "java.lang.Enum"

export class $CameraKeyframeAnimation$AnimType extends $Enum<$CameraKeyframeAnimation$AnimType> {
static readonly "CODEC": $Codec<$CameraKeyframeAnimation$AnimType>
static readonly "FOREVER": $CameraKeyframeAnimation$AnimType
static readonly "LOOP": $CameraKeyframeAnimation$AnimType
static readonly "STOP": $CameraKeyframeAnimation$AnimType
static readonly "STOP_BACK_TO_ZERO": $CameraKeyframeAnimation$AnimType

public static "valueOf"(string0: string): $CameraKeyframeAnimation$AnimType
public static "values"(): $CameraKeyframeAnimation$AnimType[]
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorSynchedEntityData" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $SynchedEntityData$DataItem } from "net.minecraft.network.syncher.SynchedEntityData$DataItem"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ReadWriteLock } from "java.util.concurrent.locks.ReadWriteLock"

export interface $AccessorSynchedEntityData {
"getEntity"(): $Entity
"getItemsById"(): $Int2ObjectMap<$SynchedEntityData$DataItem<any>>
"getLock"(): $ReadWriteLock
"isDirtyNow"(): boolean
"setIsDirty"(boolean0: boolean): void
get "entity"(): $Entity
get "itemsById"(): $Int2ObjectMap<$SynchedEntityData$DataItem<any>>
get "lock"(): $ReadWriteLock
get "dirtyNow"(): boolean
set "isDirty"(value: boolean)
}

export namespace $AccessorSynchedEntityData {
const probejs$$marker: never
}
export abstract class $AccessorSynchedEntityData$$Static implements $AccessorSynchedEntityData {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorItemCooldowns" {
import { $Map } from "java.util.Map"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemCooldowns$CooldownInstance } from "net.minecraft.world.item.ItemCooldowns$CooldownInstance"

export interface $AccessorItemCooldowns {
"getCooldowns"(): $Map<$Item, $ItemCooldowns$CooldownInstance>
"getTickCount"(): integer
"invokeOnCooldownEnded"(item0: $Item$$Type): void
"invokeOnCooldownStarted"(item0: $Item$$Type, int1: integer): void
get "cooldowns"(): $Map<$Item, $ItemCooldowns$CooldownInstance>
get "tickCount"(): integer
}

export namespace $AccessorItemCooldowns {
const probejs$$marker: never
}
export abstract class $AccessorItemCooldowns$$Static implements $AccessorItemCooldowns {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorParticleEngine" {
import { $ParticleRenderType } from "net.minecraft.client.particle.ParticleRenderType"
import { $Map } from "java.util.Map"
import { $Queue } from "java.util.Queue"
import { $Particle } from "net.minecraft.client.particle.Particle"

export interface $AccessorParticleEngine {
"getParticles"(): $Map<$ParticleRenderType, $Queue<$Particle>>
get "particles"(): $Map<$ParticleRenderType, $Queue<$Particle>>
}

export namespace $AccessorParticleEngine {
const probejs$$marker: never
}
export abstract class $AccessorParticleEngine$$Static implements $AccessorParticleEngine {
}
}

declare module "com.mega.endinglib.api.capability.SynchedCapabilityData" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List, $List$$Type } from "java.util.List"
import { $EntitySyncCapabilityBase, $EntitySyncCapabilityBase$$Type } from "com.mega.endinglib.api.capability.EntitySyncCapabilityBase"
import { $CapabilityDataSerializer$$Type } from "com.mega.endinglib.api.capability.syncher.CapabilityDataSerializer"
import { $CapabilityEntityData, $CapabilityEntityData$$Type } from "com.mega.endinglib.api.capability.CapabilityEntityData"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SynchedCapabilityData {
constructor(entitySyncCapabilityBase0: $EntitySyncCapabilityBase$$Type)

public "assignValue"<T>(capabilityEntityData0: $CapabilityEntityData$$Type<T>, object1: any): void
public "assignValues"(list0: $List$$Type<$CapabilityEntityData$$Type<any>>): void
public "define"<T>(int0: integer, string1: string, t2: T, capabilityDataSerializer3: $CapabilityDataSerializer$$Type<T>): $CapabilityEntityData<T>
public "defineWithoutSerialization"<T>(int0: integer, t1: T, capabilityDataSerializer2: $CapabilityDataSerializer$$Type<T>): $CapabilityEntityData<T>
/** @deprecated */
public "dirtyAll"(): void
public "dirtyAllNotInitValue"(): void
public "dirtySingle"(capabilityEntityData0: $CapabilityEntityData$$Type<any>): void
public "forEachRead"(consumer0: $Consumer$$Type<$CapabilityEntityData$$Type<any>>): void
public "forEachWrite"(consumer0: $Consumer$$Type<$CapabilityEntityData$$Type<any>>): void
public "getCapability"(): $EntitySyncCapabilityBase
public "getCapabilityDataByID"(int0: integer): $CapabilityEntityData<any>
public "getNonDefaultValues"(): $List<$CapabilityEntityData<any>>
public "getValue"<T>(capabilityEntityData0: $CapabilityEntityData$$Type<T>): T
public "isDirty"(): boolean
public "packData"(): $List<$CapabilityEntityData<any>>
public static "readCapabilityDataValue"<T>(friendlyByteBuf0: $FriendlyByteBuf$$Type): $CapabilityEntityData<T>
public "setValue"<T>(capabilityEntityData0: $CapabilityEntityData$$Type<T>, t1: T, boolean2: boolean): void
public "setValue"<T>(capabilityEntityData0: $CapabilityEntityData$$Type<T>, t1: T): void
public static "unpackCapabilityDataList"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $List<$CapabilityEntityData<any>>
public static "writeCapabilityData"(friendlyByteBuf0: $FriendlyByteBuf$$Type, capabilityEntityData1: $CapabilityEntityData$$Type<any>): void
public static "writeCapabilityDataList"(friendlyByteBuf0: $FriendlyByteBuf$$Type, list1: $List$$Type<$CapabilityEntityData$$Type<any>>): void
get "capability"(): $EntitySyncCapabilityBase
get "nonDefaultValues"(): $List<$CapabilityEntityData<any>>
get "dirty"(): boolean
}
}

declare module "com.mega.endinglib.api.client.camera.CameraValueInstance" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CameraType$$Type } from "net.minecraft.client.CameraType"
import { $CameraModifier, $CameraModifier$$Type } from "com.mega.endinglib.api.client.camera.CameraModifier"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $CameraKeyframeAnimation, $CameraKeyframeAnimation$$Type } from "com.mega.endinglib.api.client.camera.CameraKeyframeAnimation"
import { $UUID$$Type } from "java.util.UUID"
import { $CameraModifier$Operation$$Type } from "com.mega.endinglib.api.client.camera.CameraModifier$Operation"

export class $CameraValueInstance {
constructor(double0: double, consumer1: $Consumer$$Type<$CameraValueInstance$$Type>)
constructor(double0: double)
constructor()

public "addKeyframeAnimation"(cameraKeyframeAnimation0: $CameraKeyframeAnimation$$Type): void
public "addPermanentModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentModifierWithoutDirty"(cameraModifier0: $CameraModifier$$Type): void
public "addTransientModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTransientModifierWithoutDirty"(cameraModifier0: $CameraModifier$$Type): void
public "animationMap"(): $Map<string, $CameraKeyframeAnimation>
public "getAnimationValue"(float0: float, cameraType1: $CameraType$$Type): float
public "getBaseValue"(): double
public "getKeyframeAnimation"(string0: string): $CameraKeyframeAnimation
public "getKeyframeAnimations"(): $Collection<$CameraKeyframeAnimation>
public "getModifier"(uUID0: $UUID$$Type): $CameraModifier
public "getModifiers"(operation0: $CameraModifier$Operation$$Type): $Set<$CameraModifier>
public "getModifiers"(): $Set<$CameraModifier>
public "getValue"(): double
public "hasModifier"(cameraModifier0: $CameraModifier$$Type): boolean
public "isAnimDirty"(): boolean
public "isDirty"(): boolean
public "isEmpty"(): boolean
public "load"(compoundTag0: $CompoundTag$$Type): void
public "packData"(): $Collection<$CameraKeyframeAnimation>
public "removeDynamicKeyframeAnimations"(): void
public "removeKeyframeAnimation"(string0: string): void
public "removeKeyframeAnimation"(cameraKeyframeAnimation0: $CameraKeyframeAnimation$$Type): void
public "removeKeyframeAnimations"(): void
public "removeModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeModifier"(uUID0: $UUID$$Type): void
public "removeModifierWithoutDirty"(cameraModifier0: $CameraModifier$$Type): void
public "removeModifierWithoutDirty"(uUID0: $UUID$$Type): void
public "removeModifiers"(): void
public "removeModifiersWithoutDirty"(): void
public "removePermanentModifier"(uUID0: $UUID$$Type): boolean
public "removePermanentModifierWithoutDirty"(uUID0: $UUID$$Type): boolean
public "removeStaticKeyframeAnimations"(): void
public "replaceFrom"(cameraValueInstance0: $CameraValueInstance$$Type): void
public "save"(): $CompoundTag
public "setAnimDirty"(): void
public "setAnimDirty"(boolean0: boolean): void
public "setBaseValue"(double0: double): void
public "setDirty"(): void
public "setDirty"(boolean0: boolean): void
public "tickAnimations"(): void
get "baseValue"(): double
get "keyframeAnimations"(): $Collection<$CameraKeyframeAnimation>
get "modifiers"(): $Set<$CameraModifier>
get "value"(): double
get "animDirty"(): boolean
get "dirty"(): boolean
get "empty"(): boolean
set "animDirty"(value: boolean)
set "baseValue"(value: double)
set "dirty"(value: boolean)
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraDamageSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtraDamageSource {
"addTypeTag"(byte0: byte): void
"hasTypeTag"(byte0: byte): boolean
"removeTypeTag"(byte0: byte): void
}

export namespace $ExtraDamageSource {
const probejs$$marker: never
}
export abstract class $ExtraDamageSource$$Static implements $ExtraDamageSource {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorClientLevel" {
import { $TransientEntitySectionManager } from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import { $LevelEntityGetter } from "net.minecraft.world.level.entity.LevelEntityGetter"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $EntityTickList } from "net.minecraft.world.level.entity.EntityTickList"

export interface $AccessorClientLevel {
"getEntityStorage"(): $TransientEntitySectionManager<$Entity>
"getTickingEntities"(): $EntityTickList
"invokeGetEntities"(): $LevelEntityGetter<$Entity>
get "entityStorage"(): $TransientEntitySectionManager<$Entity>
get "tickingEntities"(): $EntityTickList
}

export namespace $AccessorClientLevel {
const probejs$$marker: never
}
export abstract class $AccessorClientLevel$$Static implements $AccessorClientLevel {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraMobEffectInstanceItf" {
import { $MobEffectInstanceParameters } from "com.mega.endinglib.util.mc.codec.impl.MobEffectInstanceParameters"

export interface $ExtraMobEffectInstanceItf {
"asParameters"(): $MobEffectInstanceParameters
}

export namespace $ExtraMobEffectInstanceItf {
const probejs$$marker: never
}
export abstract class $ExtraMobEffectInstanceItf$$Static implements $ExtraMobEffectInstanceItf {
}
}

declare module "com.mega.endinglib.api.client.GuiGraphicsItf" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $GuiGraphicsItf {
"endingLibrary$innerBlit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
"endingLibrary$innerBlit"(resourceLocation0: $ResourceLocation$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float, float10: float, float11: float, float12: float, float13: float): void
}

export namespace $GuiGraphicsItf {
const probejs$$marker: never
}
export abstract class $GuiGraphicsItf$$Static implements $GuiGraphicsItf {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntityData" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ExtraLivingEntityData {
constructor(livingEntity0: $LivingEntity$$Type)

}
}

declare module "com.mega.endinglib.api.item.component.ItemComponentManager$ItemUseCondition" {
import { $Enum } from "java.lang.Enum"

export class $ItemComponentManager$ItemUseCondition extends $Enum<$ItemComponentManager$ItemUseCondition> {
static readonly "FINISHED": $ItemComponentManager$ItemUseCondition
static readonly "RELEASE": $ItemComponentManager$ItemUseCondition
static readonly "USE": $ItemComponentManager$ItemUseCondition

public static "valueOf"(string0: string): $ItemComponentManager$ItemUseCondition
public static "values"(): $ItemComponentManager$ItemUseCondition[]
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorGui" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"

export interface $AccessorGui {
"invokeRenderPlayerHealth"(guiGraphics0: $GuiGraphics$$Type): void
}

export namespace $AccessorGui {
const probejs$$marker: never
}
export abstract class $AccessorGui$$Static implements $AccessorGui {
}
}

declare module "com.mega.endinglib.api.entity.MobEffectInstanceItf" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $MobEffectInstanceItf {
"getOwner"(): $Entity
"setOwnerEntity"(entity0: $Entity$$Type): void
get "owner"(): $Entity
set "ownerEntity"(value: $Entity$$Type)
}

export namespace $MobEffectInstanceItf {
const probejs$$marker: never
}
export abstract class $MobEffectInstanceItf$$Static implements $MobEffectInstanceItf {
}
}

declare module "com.mega.endinglib.api.item.component.ComponentMapBuilder" {
import { $List, $List$$Type } from "java.util.List"
import { $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $ComponentMapBuilder {
"contains"(itemComponentType0: $ItemComponentType$$Type<any>): boolean
"getOrCreate"<T>(itemComponentType0: $ItemComponentType$$Type<T>, supplier1: $Supplier$$Type<T>): T
"getOrDefault"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): T
"getOrEmpty"<T>(itemComponentType0: $ItemComponentType$$Type<$List$$Type<T>>): $List<T>
}

export namespace $ComponentMapBuilder {
const probejs$$marker: never
}
export abstract class $ComponentMapBuilder$$Static implements $ComponentMapBuilder {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorKeyMapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorKeyMapping {
"setClickCount"(int0: integer): void
set "clickCount"(value: integer)
}

export namespace $AccessorKeyMapping {
const probejs$$marker: never
}
export abstract class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {
}
}

declare module "com.mega.endinglib.api.item.component.ComponentMap" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ComponentsAccess } from "com.mega.endinglib.api.item.component.ComponentsAccess"
import { $Stream } from "java.util.stream.Stream"
import { $Component, $Component$$Type } from "com.mega.endinglib.api.item.component.Component"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ComponentMap$Builder } from "com.mega.endinglib.api.item.component.ComponentMap$Builder"
import { $Set } from "java.util.Set"
import { $ItemComponentType, $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export interface $ComponentMap extends $Iterable<$Component<any>>, $ComponentsAccess {
"contains"(itemComponentType0: $ItemComponentType$$Type<any>): boolean
"filtered"(predicate0: $Predicate$$Type<$ItemComponentType$$Type<any>>): $ComponentMap
"forEach"(consumer0: $Consumer$$Type<$Component$$Type<any>>): void
"get"<T>(itemComponentType0: $ItemComponentType$$Type<T>): T
"getOrDefault"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): T
"getTyped"<T>(itemComponentType0: $ItemComponentType$$Type<T>): $Component<T>
"getTypes"(): $Set<$ItemComponentType<any>>
"isEmpty"(): boolean
"iterator"(): $Iterator<$Component<any>>
"size"(): integer
"spliterator"(): $Spliterator<$Component<any>>
"stream"(): $Stream<$Component<any>>
[Symbol.iterator](): IterableIterator<$Component<any>>;
get "types"(): $Set<$ItemComponentType<any>>
get "empty"(): boolean
}

export namespace $ComponentMap {
const EMPTY: $ComponentMap
function builder(): $ComponentMap$Builder
}
export abstract class $ComponentMap$$Static implements $ComponentMap {
static readonly "EMPTY": $ComponentMap

static "builder"(): $ComponentMap$Builder
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorAbstractWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAbstractWidget {
"getHoverOrFocusedStartTime"(): long
get "hoverOrFocusedStartTime"(): long
}

export namespace $AccessorAbstractWidget {
const probejs$$marker: never
}
export abstract class $AccessorAbstractWidget$$Static implements $AccessorAbstractWidget {
}
}

declare module "com.mega.endinglib.common.data.InputCooldowns" {
import { $InputOperations$$Type } from "com.mega.endinglib.common.data.InputOperations"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $InputCooldowns {
constructor()

public "addCooldown"(player0: $Player$$Type, inputOperations1: $InputOperations$$Type, int2: integer): void
public "getCooldown"(inputOperations0: $InputOperations$$Type): integer
public "isOnCooldown"(inputOperations0: $InputOperations$$Type): boolean
public "onCooldownEnded"(player0: $Player$$Type, inputOperations1: $InputOperations$$Type): void
public "onCooldownStarted"(player0: $Player$$Type, inputOperations1: $InputOperations$$Type, int2: integer): void
public "removeCooldown"(player0: $Player$$Type, inputOperations1: $InputOperations$$Type): void
public "tick"(player0: $Player$$Type): void
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorEntity" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $MoverType$$Type } from "net.minecraft.world.entity.MoverType"

export interface $AccessorEntity {
"callGetPermissionLevel"(): integer
"callMarkHurt"(): void
"getDimensions"(): $EntityDimensions
"getVehicle"(): $Entity
"invokeCalculateViewVector"(float0: float, float1: float): $Vec3
"invokeCollide"(vec30: $Vec3$$Type): $Vec3
"invokeMakeBoundingBox"(): $AABB
"invokeMaybeBackOffFromEdge"(vec30: $Vec3$$Type, moverType1: $MoverType$$Type): $Vec3
"invokeTeleportPassengers"(): void
"setAddedToWorldField"(boolean0: boolean): void
"setBb"(aABB0: $AABB$$Type): void
"setBlockPositionField"(blockPos0: $BlockPos$$Type): void
"setDimensions"(entityDimensions0: $EntityDimensions$$Type): void
"setPositionField"(vec30: $Vec3$$Type): void
"setVehicle"(entity0: $Entity$$Type): void
get "dimensions"(): $EntityDimensions
get "vehicle"(): $Entity
set "addedToWorldField"(value: boolean)
set "bb"(value: $AABB$$Type)
set "blockPositionField"(value: $BlockPos$$Type)
set "dimensions"(value: $EntityDimensions$$Type)
set "positionField"(value: $Vec3$$Type)
set "vehicle"(value: $Entity$$Type)
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "com.mega.endinglib.client.advanced.ELServerCameraManager" {
import { $CameraValueInstance } from "com.mega.endinglib.api.client.camera.CameraValueInstance"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CameraModifier, $CameraModifier$$Type } from "com.mega.endinglib.api.client.camera.CameraModifier"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $EndingLibraryPlayerCapability$$Type } from "com.mega.endinglib.common.capability.EndingLibraryPlayerCapability"
import { $Set } from "java.util.Set"
import { $CameraKeyframeAnimation } from "com.mega.endinglib.api.client.camera.CameraKeyframeAnimation"
import { $ModifierType } from "com.mega.endinglib.api.client.camera.ModifierType"
import { $ICameraManager } from "com.mega.endinglib.api.client.camera.ICameraManager"

export class $ELServerCameraManager implements $ICameraManager {
readonly "fovOffset": $CameraValueInstance
readonly "raycastOffset": $CameraValueInstance
readonly "x": $CameraValueInstance
readonly "xOffset": $CameraValueInstance
readonly "xRelative": $CameraValueInstance
readonly "xRot": $CameraValueInstance
readonly "y": $CameraValueInstance
readonly "yOffset": $CameraValueInstance
readonly "yRelative": $CameraValueInstance
readonly "yRot": $CameraValueInstance
readonly "z": $CameraValueInstance
readonly "zOffset": $CameraValueInstance
readonly "zRelative": $CameraValueInstance
readonly "zRot": $CameraValueInstance
readonly "zoomOffset": $CameraValueInstance

constructor()

public "addFovModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentFovModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addPermanentZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "addZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
public "createAllAnimMap"(): $Map<$ModifierType, $Collection<$CameraKeyframeAnimation>>
public "createDirtyAnimMap"(): $Map<$ModifierType, $Collection<$CameraKeyframeAnimation>>
public "createDirtyMap"(): $Map<$ModifierType, $Set<$CameraModifier>>
public "customDeserializeNBT"(compoundTag0: $CompoundTag$$Type, endingLibraryPlayerCapability1: $EndingLibraryPlayerCapability$$Type): void
public "customSerializeNBT"(compoundTag0: $CompoundTag$$Type, endingLibraryPlayerCapability1: $EndingLibraryPlayerCapability$$Type): void
public "getFovOffset"(float0: float): double
public "getFovOffset0"(): $CameraValueInstance
public "getOriginX"(): double
public "getOriginXRot"(): double
public "getOriginY"(): double
public "getOriginYRot"(): double
public "getOriginZ"(): double
public "getOriginZRot"(): double
public "getOriginZoom"(): float
public "getRaycastOffset"(float0: float): double
public "getRaycastOffset0"(): $CameraValueInstance
public "getX"(float0: float): double
public "getX"(): $CameraValueInstance
public "getXOffset"(float0: float): double
public "getXOffset0"(): $CameraValueInstance
public "getXRelative"(float0: float): double
public "getXRelative0"(): $CameraValueInstance
public "getXRot0"(): $CameraValueInstance
public "getXRotation"(float0: float): double
public "getY"(): $CameraValueInstance
public "getY"(float0: float): double
public "getYOffset"(float0: float): double
public "getYOffset0"(): $CameraValueInstance
public "getYRelative"(float0: float): double
public "getYRelative0"(): $CameraValueInstance
public "getYRot0"(): $CameraValueInstance
public "getYRotation"(float0: float): double
public "getZ"(): $CameraValueInstance
public "getZ"(float0: float): double
public "getZOffset"(float0: float): double
public "getZOffset0"(): $CameraValueInstance
public "getZRelative"(float0: float): double
public "getZRelative0"(): $CameraValueInstance
public "getZRot0"(): $CameraValueInstance
public "getZRotation"(float0: float): double
public "getZoomOffset"(float0: float): double
public "getZoomOffset0"(): $CameraValueInstance
public "lockOriginXRot"(float0: float): void
public "lockOriginYRot"(float0: float): void
public "lockOriginZRot"(float0: float): void
public "oldUpdate"(): void
public "onFreezingMode"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
public "removeFovModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRaycastModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRelativeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRelativeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRelativeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRotationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRotationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeRotationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeTranslationXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeTranslationYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeTranslationZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeXModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeYModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeZModifier"(cameraModifier0: $CameraModifier$$Type): void
public "removeZoomModifier"(cameraModifier0: $CameraModifier$$Type): void
public "setOriginX"(double0: double): void
public "setOriginXRot"(double0: double): void
public "setOriginY"(double0: double): void
public "setOriginYRot"(double0: double): void
public "setOriginZ"(double0: double): void
public "setOriginZRot"(double0: double): void
public "setOriginZoom"(float0: float): void
public "shouldStoreOriginPos"(): boolean
public "storeOriginPos"(double0: double, double1: double, double2: double): void
public "tick"(endingLibraryPlayerCapability0: $EndingLibraryPlayerCapability$$Type): void
public "unlockOriginXRot"(): void
public "unlockOriginYRot"(): void
public "unlockOriginZRot"(): void
public "updateModifier"(): void
get "vanillaAngelsNeedsToFreeze"(): boolean
set "vanillaAngelsNeedsToFreeze"(value: boolean)
get "vanillaFovNeedsToFreeze"(): boolean
set "vanillaFovNeedsToFreeze"(value: boolean)
get "vanillaZoomNeedsToFreeze"(): boolean
set "vanillaZoomNeedsToFreeze"(value: boolean)
get "fovOffset0"(): $CameraValueInstance
get "originX"(): double
get "originXRot"(): double
get "originY"(): double
get "originYRot"(): double
get "originZ"(): double
get "originZRot"(): double
get "originZoom"(): float
get "raycastOffset0"(): $CameraValueInstance
get "xOffset0"(): $CameraValueInstance
get "xRelative0"(): $CameraValueInstance
get "xRot0"(): $CameraValueInstance
get "yOffset0"(): $CameraValueInstance
get "yRelative0"(): $CameraValueInstance
get "yRot0"(): $CameraValueInstance
get "zOffset0"(): $CameraValueInstance
get "zRelative0"(): $CameraValueInstance
get "zRot0"(): $CameraValueInstance
get "zoomOffset0"(): $CameraValueInstance
set "originX"(value: double)
set "originXRot"(value: double)
set "originY"(value: double)
set "originYRot"(value: double)
set "originZ"(value: double)
set "originZRot"(value: double)
set "originZoom"(value: float)
}
}

declare module "com.mega.endinglib.api.client.camera.CameraModifier" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $CameraModifier$Operation, $CameraModifier$Operation$$Type } from "com.mega.endinglib.api.client.camera.CameraModifier$Operation"

export class $CameraModifier {
constructor(string0: string, double1: double, operation2: $CameraModifier$Operation$$Type)
constructor(uUID0: $UUID$$Type, supplier1: $Supplier$$Type<string>, double2: double, operation3: $CameraModifier$Operation$$Type)
constructor(uUID0: $UUID$$Type, string1: string, double2: double, operation3: $CameraModifier$Operation$$Type)

public "getAmount"(): double
public "getId"(): $UUID
public "getName"(): string
public "getOperation"(): $CameraModifier$Operation
public static "load"(compoundTag0: $CompoundTag$$Type): $CameraModifier
public "save"(): $CompoundTag
public "toComponent"(): $MutableComponent
get "amount"(): double
get "id"(): $UUID
get "name"(): string
get "operation"(): $CameraModifier$Operation
}
}

declare module "com.mega.endinglib.common.data.InputOperations" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Enum } from "java.lang.Enum"
import { $Map } from "java.util.Map"

export class $InputOperations extends $Enum<$InputOperations> {
static readonly "ADVANCEMENT": $InputOperations
static readonly "ALL": $InputOperations
static readonly "CHAT": $InputOperations
static readonly "DROP_ITEM": $InputOperations
static readonly "HOTBAR": $InputOperations
static readonly "HOTBAR_1": $InputOperations
static readonly "HOTBAR_2": $InputOperations
static readonly "HOTBAR_3": $InputOperations
static readonly "HOTBAR_4": $InputOperations
static readonly "HOTBAR_5": $InputOperations
static readonly "HOTBAR_6": $InputOperations
static readonly "HOTBAR_7": $InputOperations
static readonly "HOTBAR_8": $InputOperations
static readonly "HOTBAR_9": $InputOperations
static readonly "INVENTORY": $InputOperations
static readonly "JUMP": $InputOperations
static readonly "LATERAL_MOVE": $InputOperations
static readonly "MOUSE": $InputOperations
static readonly "MOUSE_ATTACK": $InputOperations
static readonly "MOUSE_PICK_ITEM": $InputOperations
static readonly "MOUSE_USE": $InputOperations
static readonly "MOVEMENT": $InputOperations
static readonly "MOVE_BACKWARD": $InputOperations
static readonly "MOVE_FORWARD": $InputOperations
static readonly "MOVE_LEFT": $InputOperations
static readonly "MOVE_RIGHT": $InputOperations
static readonly "NAME_2_OPERATIONS": $Map<$ResourceLocation, $InputOperations>
static readonly "ROTATION": $InputOperations
static readonly "ROTATION_HORIZONTAL": $InputOperations
static readonly "ROTATION_VERTICAL": $InputOperations
static readonly "SMOOTH_CAMERA": $InputOperations
static readonly "SNEAK": $InputOperations
static readonly "SOCIAL_INTERACTION": $InputOperations
static readonly "SWAP_HAND": $InputOperations
static readonly "UNDEFINED": $InputOperations

public "getName"(): $ResourceLocation
public "getParent"(): $InputOperations
public static "of"(resourceLocation0: $ResourceLocation$$Type): $InputOperations
public "operate"(): void
public static "valueOf"(string0: string): $InputOperations
public static "values"(): $InputOperations[]
get "name"(): $ResourceLocation
get "parent"(): $InputOperations
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorArrow" {
import { $Set } from "java.util.Set"
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"
import { $Potion } from "net.minecraft.world.item.alchemy.Potion"

export interface $AccessorArrow {
"getEffects"(): $Set<$MobEffectInstance>
"getPotion"(): $Potion
get "effects"(): $Set<$MobEffectInstance>
get "potion"(): $Potion
}

export namespace $AccessorArrow {
const probejs$$marker: never
}
export abstract class $AccessorArrow$$Static implements $AccessorArrow {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorOptions" {
import { $CameraType$$Type } from "net.minecraft.client.CameraType"

export interface $AccessorOptions {
"endinglib$setCameraType"(cameraType0: $CameraType$$Type): void
}

export namespace $AccessorOptions {
const probejs$$marker: never
}
export abstract class $AccessorOptions$$Static implements $AccessorOptions {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorDamageSource" {
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $DamageType$$Type } from "net.minecraft.world.damagesource.DamageType"

export interface $AccessorDamageSource {
"setType"(holder0: $Holder$$Type<$DamageType$$Type>): void
set "type"(value: $Holder$$Type<$DamageType$$Type>)
}

export namespace $AccessorDamageSource {
const probejs$$marker: never
}
export abstract class $AccessorDamageSource$$Static implements $AccessorDamageSource {
}
}

declare module "com.mega.endinglib.util.mixin.level.LevelEC" {
import { $LevelExpandedContext, $LevelExpandedContext$$Type } from "com.mega.endinglib.util.mixin.level.LevelExpandedContext"

export interface $LevelEC {
"endinglib$levelECData"(): $LevelExpandedContext
"endinglib$setECData"(levelExpandedContext0: $LevelExpandedContext$$Type): void
}

export namespace $LevelEC {
const probejs$$marker: never
}
export abstract class $LevelEC$$Static implements $LevelEC {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorAttributeInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorAttributeInstance {
"invokeSetDirty"(): void
}

export namespace $AccessorAttributeInstance {
const probejs$$marker: never
}
export abstract class $AccessorAttributeInstance$$Static implements $AccessorAttributeInstance {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraAbstractArrowItf" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtraAbstractArrowItf {
"isIntangibleProjectile"(): boolean
"setIntangibleProjectile"(boolean0: boolean): void
get "intangibleProjectile"(): boolean
set "intangibleProjectile"(value: boolean)
}

export namespace $ExtraAbstractArrowItf {
const probejs$$marker: never
}
export abstract class $ExtraAbstractArrowItf$$Static implements $ExtraAbstractArrowItf {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorCommandSourceStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorCommandSourceStack {
"getPermissionLevel"(): integer
"isSilent"(): boolean
"setSilent"(boolean0: boolean): void
get "permissionLevel"(): integer
get "silent"(): boolean
set "silent"(value: boolean)
}

export namespace $AccessorCommandSourceStack {
const probejs$$marker: never
}
export abstract class $AccessorCommandSourceStack$$Static implements $AccessorCommandSourceStack {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorGameRenderer" {
import { $Camera$$Type } from "net.minecraft.client.Camera"

export interface $AccessorGameRenderer {
"callGetFov"(camera0: $Camera$$Type, float1: float, boolean2: boolean): double
}

export namespace $AccessorGameRenderer {
const probejs$$marker: never
}
export abstract class $AccessorGameRenderer$$Static implements $AccessorGameRenderer {
}
}

declare module "com.mega.endinglib.api.client.text.StyleItf" {
import { $Style$$Type } from "net.minecraft.network.chat.Style"

export interface $StyleItf {
"endingLibrary$isCentered"(): boolean
"endingLibrary$withCentered"(boolean0: boolean): void
}

export namespace $StyleItf {
function of(style0: $Style$$Type): $StyleItf
}
export abstract class $StyleItf$$Static implements $StyleItf {
static "of"(style0: $Style$$Type): $StyleItf
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorEffectInstance" {
import { $Map } from "java.util.Map"
import { $Uniform } from "com.mojang.blaze3d.shaders.Uniform"

export interface $AccessorEffectInstance {
"getUniformMap"(): $Map<string, $Uniform>
get "uniformMap"(): $Map<string, $Uniform>
}

export namespace $AccessorEffectInstance {
const probejs$$marker: never
}
export abstract class $AccessorEffectInstance$$Static implements $AccessorEffectInstance {
}
}

declare module "com.mega.endinglib.api.event.render.CameraPosEvent$Pre" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $CameraPosEvent } from "com.mega.endinglib.api.event.render.CameraPosEvent"
import { $GameRenderer$$Type } from "net.minecraft.client.renderer.GameRenderer"

export class $CameraPosEvent$Pre extends $CameraPosEvent {
constructor()
constructor(gameRenderer0: $GameRenderer$$Type, camera1: $Camera$$Type, double2: double, double3: double, double4: double, double5: double)

public "setX"(double0: double): void
public "setY"(double0: double): void
public "setZ"(double0: double): void
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.mega.endinglib.api.client.camera.CameraModifier$Operation" {
import { $Enum } from "java.lang.Enum"

export class $CameraModifier$Operation extends $Enum<$CameraModifier$Operation> {
static readonly "ADDITION": $CameraModifier$Operation
static readonly "MULTIPLY_BASE": $CameraModifier$Operation
static readonly "MULTIPLY_TOTAL": $CameraModifier$Operation

public static "fromValue"(int0: integer): $CameraModifier$Operation
public "toValue"(): integer
public static "valueOf"(string0: string): $CameraModifier$Operation
public static "values"(): $CameraModifier$Operation[]
}
}

declare module "com.mega.endinglib.api.event.render.ItemRendererEvent$RenderModelListEvent" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemRendererEvent } from "com.mega.endinglib.api.event.render.ItemRendererEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ItemDisplayContext, $ItemDisplayContext$$Type } from "net.minecraft.world.item.ItemDisplayContext"

export class $ItemRendererEvent$RenderModelListEvent extends $ItemRendererEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, poseStack1: $PoseStack$$Type, float2: float, itemDisplayContext3: $ItemDisplayContext$$Type, vertexConsumer4: $VertexConsumer$$Type, bakedModel5: $BakedModel$$Type, int6: integer, int7: integer)

public "getBakedModel"(): $BakedModel
public "getItemDisplayContext"(): $ItemDisplayContext
public "getOverlay"(): integer
public "getPackedLight"(): integer
public "getVertexConsumer"(): $VertexConsumer
get "bakedModel"(): $BakedModel
get "itemDisplayContext"(): $ItemDisplayContext
get "overlay"(): integer
get "packedLight"(): integer
get "vertexConsumer"(): $VertexConsumer
}
}

declare module "com.mega.endinglib.api.client.camera.CameraKeyframe" {
import { $FriendlyByteBuf$Writer } from "net.minecraft.network.FriendlyByteBuf$Writer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Easing, $Easing$$Type } from "com.mega.endinglib.api.client.Easing"
import { $Record } from "java.lang.Record"
import { $Function } from "java.util.function.Function"
import { $FriendlyByteBuf$Reader } from "net.minecraft.network.FriendlyByteBuf$Reader"

export class $CameraKeyframe extends $Record {
static "CODEC": $Codec<$CameraKeyframe>
static readonly "READER": $Function<$CompoundTag, $CameraKeyframe>
static readonly "READER_F": $FriendlyByteBuf$Reader<$CameraKeyframe>
static readonly "WRITER": $Function<$CameraKeyframe, $CompoundTag>
static readonly "WRITER_F": $FriendlyByteBuf$Writer<$CameraKeyframe>

constructor(timestamp: float, endPoint: float, easing: $Easing$$Type)

public "easing"(): $Easing
public "endPoint"(): float
public static "load"(compoundTag0: $CompoundTag$$Type): $CameraKeyframe
public "serialize"(): $CompoundTag
public "timestamp"(): float
public "toComponent"(): $Component
}
}

declare module "com.mega.endinglib.api.item.component.type.BlocksAttacksComponent$DamageReduction" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $DamageType, $DamageType$$Type } from "net.minecraft.world.damagesource.DamageType"

export class $BlocksAttacksComponent$DamageReduction extends $Record {
static readonly "CODEC": $Codec<$BlocksAttacksComponent$DamageReduction>

constructor(horizontalBlockingAngle: float, type: $Optional$$Type<$HolderSet$$Type<$DamageType$$Type>>, base: float, factor: float)

public "base"(): float
public "factor"(): float
public "getReductionAmount"(damageSource0: $DamageSource$$Type, float1: float, double2: double): float
public "horizontalBlockingAngle"(): float
public "type"(): $Optional<$HolderSet<$DamageType>>
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraServerFunctionManager" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CommandFunction$$Type } from "net.minecraft.commands.CommandFunction"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ServerFunctionManager$$Type } from "net.minecraft.server.ServerFunctionManager"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "net.minecraft.server.ServerFunctionManager$TraceCallbacks"

export interface $ExtraServerFunctionManager {
"execute"(commandFunction0: $CommandFunction$$Type, commandSourceStack1: $CommandSourceStack$$Type, traceCallbacks2: $ServerFunctionManager$TraceCallbacks$$Type, compoundTag3: $CompoundTag$$Type): integer
}

export namespace $ExtraServerFunctionManager {
function of(serverFunctionManager0: $ServerFunctionManager$$Type): $ExtraServerFunctionManager
}
export abstract class $ExtraServerFunctionManager$$Static implements $ExtraServerFunctionManager {
static "of"(serverFunctionManager0: $ServerFunctionManager$$Type): $ExtraServerFunctionManager
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorRenderStateShared" {
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export interface $AccessorRenderStateShared {
"getClearState"(): $Runnable
"getName"(): string
"getSetupState"(): $Runnable
"setClearState"(runnable0: $Runnable$$Type): void
"setSetupState"(runnable0: $Runnable$$Type): void
get "clearState"(): $Runnable
get "name"(): string
get "setupState"(): $Runnable
set "clearState"(value: $Runnable$$Type)
set "setupState"(value: $Runnable$$Type)
}

export namespace $AccessorRenderStateShared {
const probejs$$marker: never
}
export abstract class $AccessorRenderStateShared$$Static implements $AccessorRenderStateShared {
}
}

declare module "com.mega.endinglib.api.client.text.TextColorInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextColorInterface {
"endinglib$getCode"(): character
"endinglib$setCode"(char0: character): void
}

export namespace $TextColorInterface {
const probejs$$marker: never
}
export abstract class $TextColorInterface$$Static implements $TextColorInterface {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraShaderInstance" {
import { $ShaderInstance$$Type } from "net.minecraft.client.renderer.ShaderInstance"
import { $Uniform } from "com.mojang.blaze3d.shaders.Uniform"

export interface $ExtraShaderInstance {
"getUniformCameraPos"(): $Uniform
"getUniformLevelModelViewMat"(): $Uniform
"getUniformLevelProjMat"(): $Uniform
"getUniformProgramTime"(): $Uniform
get "uniformCameraPos"(): $Uniform
get "uniformLevelModelViewMat"(): $Uniform
get "uniformLevelProjMat"(): $Uniform
get "uniformProgramTime"(): $Uniform
}

export namespace $ExtraShaderInstance {
function of(shaderInstance0: $ShaderInstance$$Type): $ExtraShaderInstance
}
export abstract class $ExtraShaderInstance$$Static implements $ExtraShaderInstance {
static "of"(shaderInstance0: $ShaderInstance$$Type): $ExtraShaderInstance
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorMC" {
import { $FontManager } from "net.minecraft.client.gui.font.FontManager"

export interface $AccessorMC {
"getFontManager"(): $FontManager
"setRightClickDelay"(int0: integer): void
get "fontManager"(): $FontManager
set "rightClickDelay"(value: integer)
}

export namespace $AccessorMC {
const probejs$$marker: never
}
export abstract class $AccessorMC$$Static implements $AccessorMC {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorEntityRenderer" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $AccessorEntityRenderer {
"callGetBlockLightLevel"<T extends $Entity>(t0: T, blockPos1: $BlockPos$$Type): integer
"callGetSkyLightLevel"<T extends $Entity>(t0: T, blockPos1: $BlockPos$$Type): integer
}

export namespace $AccessorEntityRenderer {
const probejs$$marker: never
}
export abstract class $AccessorEntityRenderer$$Static implements $AccessorEntityRenderer {
}
}

declare module "com.mega.endinglib.api.item.component.ComponentsAccess" {
import { $Component } from "com.mega.endinglib.api.item.component.Component"
import { $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"

export interface $ComponentsAccess {
"get"<T>(itemComponentType0: $ItemComponentType$$Type<T>): T
"getOrDefault"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): T
"getTyped"<T>(itemComponentType0: $ItemComponentType$$Type<T>): $Component<T>
}

export namespace $ComponentsAccess {
const probejs$$marker: never
}
export abstract class $ComponentsAccess$$Static implements $ComponentsAccess {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorFontManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $GlyphProvider } from "com.mojang.blaze3d.font.GlyphProvider"
import { $Map } from "java.util.Map"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"

export interface $AccessorFontManager {
"getFontSets"(): $Map<$ResourceLocation, $FontSet>
"getMissingFontSet"(): $FontSet
"getProvidersToClose"(): $List<$GlyphProvider>
"getRenames"(): $Map<$ResourceLocation, $ResourceLocation>
get "fontSets"(): $Map<$ResourceLocation, $FontSet>
get "missingFontSet"(): $FontSet
get "providersToClose"(): $List<$GlyphProvider>
get "renames"(): $Map<$ResourceLocation, $ResourceLocation>
}

export namespace $AccessorFontManager {
const probejs$$marker: never
}
export abstract class $AccessorFontManager$$Static implements $AccessorFontManager {
}
}

declare module "com.mega.endinglib.util.mixin.level.LevelExpandedContext" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $LevelExpandedContext {
readonly "level": $Level

constructor(level0: $Level$$Type)

public "isClient"(): boolean
public "tickHead"(booleanSupplier0: $BooleanSupplier$$Type, callbackInfo1: $CallbackInfo$$Type): void
get "client"(): boolean
}
}

declare module "com.mega.endinglib.api.client.camera.CameraKeyframeAnimation" {
import { $FriendlyByteBuf$Writer } from "net.minecraft.network.FriendlyByteBuf$Writer"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $CameraType$$Type } from "net.minecraft.client.CameraType"
import { $Map } from "java.util.Map"
import { $CameraKeyframeAnimation$AnimType, $CameraKeyframeAnimation$AnimType$$Type } from "com.mega.endinglib.api.client.camera.CameraKeyframeAnimation$AnimType"
import { $Function } from "java.util.function.Function"
import { $FriendlyByteBuf$Reader } from "net.minecraft.network.FriendlyByteBuf$Reader"
import { $CameraKeyframe, $CameraKeyframe$$Type } from "com.mega.endinglib.api.client.camera.CameraKeyframe"

export class $CameraKeyframeAnimation {
static "DEFAULT_KEY": string
static "JSON_CODEC": $Codec<$CameraKeyframeAnimation>
static readonly "READER": $Function<$CompoundTag, $CameraKeyframeAnimation>
static readonly "READER_F": $FriendlyByteBuf$Reader<$CameraKeyframeAnimation>
static readonly "WRITER_F": $FriendlyByteBuf$Writer<$CameraKeyframeAnimation>

constructor(string0: string, animType1: $CameraKeyframeAnimation$AnimType$$Type)
constructor(string0: string, animType1: $CameraKeyframeAnimation$AnimType$$Type, float2: float)

public "addKeyframe"(string0: string, cameraKeyframe1: $CameraKeyframe$$Type): void
public "addKeyframes"(string0: string, list1: $List$$Type<$CameraKeyframe$$Type>): void
public "anim"(float0: float, cameraType1: $CameraType$$Type): float
public "getAnimTime"(float0: float): float
public "getAnimType"(): $CameraKeyframeAnimation$AnimType
public "getDuration"(): float
public "getKeyframes"(): $Map<string, $List<$CameraKeyframe>>
public "getKeyframesComponent"(): $Component
public "getName"(): string
public "insertBefore"(string0: string, int1: integer, cameraKeyframe2: $CameraKeyframe$$Type): boolean
public "isDirty"(): boolean
public "isForever"(): boolean
public "isStopped"(): boolean
public static "load"(compoundTag0: $CompoundTag$$Type): $CameraKeyframeAnimation
public "removeIndex"(string0: string, int1: integer): boolean
public "replaceIndex"(string0: string, int1: integer, cameraKeyframe2: $CameraKeyframe$$Type): boolean
public "reset"(): void
public "serializeNBT"(): $CompoundTag
public "setDirty"(boolean0: boolean): void
public "setDirty"(): void
public "setDynamic"(boolean0: boolean): void
public "setStopped"(boolean0: boolean): void
public "tick"(): void
public "toComponent"(): $Component
get "isDynamic"(): boolean
set "isDynamic"(value: boolean)
get "animType"(): $CameraKeyframeAnimation$AnimType
get "duration"(): float
get "keyframes"(): $Map<string, $List<$CameraKeyframe>>
get "keyframesComponent"(): $Component
get "name"(): string
get "dirty"(): boolean
get "forever"(): boolean
get "stopped"(): boolean
set "dirty"(value: boolean)
set "dynamic"(value: boolean)
set "stopped"(value: boolean)
}
}

declare module "com.mega.endinglib.api.data.CompoundTagReader" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Optional } from "java.util.Optional"
import { $Function$$Type } from "java.util.function.Function"

export interface $CompoundTagReader<T = any> extends $BiFunction<$CompoundTag, string, T> {
"andThen"<V>(function0: $Function$$Type<T, V>): $BiFunction<$CompoundTag, string, V>
"apply"(compoundTag0: $CompoundTag$$Type, string1: string): T
"asOptional"(): $CompoundTagReader<$Optional<T>>
}

export namespace $CompoundTagReader {
const probejs$$marker: never
}
export abstract class $CompoundTagReader$$Static<T = any> implements $CompoundTagReader<T> {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorPostChain" {
import { $List } from "java.util.List"
import { $PostPass } from "net.minecraft.client.renderer.PostPass"

export interface $AccessorPostChain {
"getPasses"(): $List<$PostPass>
get "passes"(): $List<$PostPass>
}

export namespace $AccessorPostChain {
const probejs$$marker: never
}
export abstract class $AccessorPostChain$$Static implements $AccessorPostChain {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorFont" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedGlyph$$Type } from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $AccessorFont {
"callRenderChar"(bakedGlyph0: $BakedGlyph$$Type, boolean1: boolean, boolean2: boolean, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type, vertexConsumer7: $VertexConsumer$$Type, float8: float, float9: float, float10: float, float11: float, int12: integer): void
"invokeGetFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
"isFilterFishyGlyphs"(): boolean
get "filterFishyGlyphs"(): boolean
}

export namespace $AccessorFont {
const probejs$$marker: never
}
export abstract class $AccessorFont$$Static implements $AccessorFont {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorHumanoidModel" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $HumanoidArm } from "net.minecraft.world.entity.HumanoidArm"

export interface $AccessorHumanoidModel {
"callGetAttackArm"<T extends $LivingEntity>(t0: T): $HumanoidArm
"callQuadraticArmUpdate"(float0: float): float
"invokePoseLeftArm"<T extends $LivingEntity>(t0: T): void
"invokePoseRightArm"<T extends $LivingEntity>(t0: T): void
}

export namespace $AccessorHumanoidModel {
const probejs$$marker: never
}
export abstract class $AccessorHumanoidModel$$Static implements $AccessorHumanoidModel {
}
}

declare module "com.mega.endinglib.api.event.render.ItemRendererEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ItemRendererEvent extends $Event implements $EventItf {
constructor()
constructor(itemStack0: $ItemStack$$Type, poseStack1: $PoseStack$$Type, float2: float)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getItemStack"(): $ItemStack
public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "itemStack"(): $ItemStack
get "partialTicks"(): float
get "poseStack"(): $PoseStack
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorMob" {
import { $JumpControl, $JumpControl$$Type } from "net.minecraft.world.entity.ai.control.JumpControl"
import { $MoveControl, $MoveControl$$Type } from "net.minecraft.world.entity.ai.control.MoveControl"
import { $LookControl, $LookControl$$Type } from "net.minecraft.world.entity.ai.control.LookControl"
import { $BodyRotationControl } from "net.minecraft.world.entity.ai.control.BodyRotationControl"

export interface $AccessorMob {
"getBodyRotationControl"(): $BodyRotationControl
"getJumpControl"(): $JumpControl
"getLookControl"(): $LookControl
"getMoveControl"(): $MoveControl
"setJumpControl"(jumpControl0: $JumpControl$$Type): void
"setLookControl"(lookControl0: $LookControl$$Type): void
"setMoveControl"(moveControl0: $MoveControl$$Type): void
get "bodyRotationControl"(): $BodyRotationControl
get "jumpControl"(): $JumpControl
get "lookControl"(): $LookControl
get "moveControl"(): $MoveControl
set "jumpControl"(value: $JumpControl$$Type)
set "lookControl"(value: $LookControl$$Type)
set "moveControl"(value: $MoveControl$$Type)
}

export namespace $AccessorMob {
const probejs$$marker: never
}
export abstract class $AccessorMob$$Static implements $AccessorMob {
}
}

declare module "com.mega.endinglib.util.mixin.data_expand.ExtraEntity" {
import { $AABB, $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $EntitySyncCapabilityBase, $EntitySyncCapabilityBase$$Type } from "com.mega.endinglib.api.capability.EntitySyncCapabilityBase"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $ObjectSet, $ObjectSet$$Type } from "it.unimi.dsi.fastutil.objects.ObjectSet"
import { $ExtraEntityData } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntityData"

export interface $ExtraEntity {
"endingLibrary$getCapCullingBox"(): $AABB
"endingLibrary$getCapEntityDimensions"(): $EntityDimensions
"endingLibrary$getCapHitbox"(): $AABB
"endingLibrary$setCapCullingBox"(aABB0: $AABB$$Type): void
"endingLibrary$setCapEntityDimensions"(entityDimensions0: $EntityDimensions$$Type): void
"endingLibrary$setCapHitbox"(aABB0: $AABB$$Type): void
"endinglib$Caps"(): $ObjectSet<$EntitySyncCapabilityBase>
"endinglib$getExtraEntityData"(): $ExtraEntityData
"makeEndinglibCaps"(objectSet0: $ObjectSet$$Type<$EntitySyncCapabilityBase$$Type>): void
}

export namespace $ExtraEntity {
function of(entity0: $Entity$$Type): $ExtraEntity
}
export abstract class $ExtraEntity$$Static implements $ExtraEntity {
static "of"(entity0: $Entity$$Type): $ExtraEntity
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorModelPart" {
import { $List } from "java.util.List"
import { $ModelPart$Cube } from "net.minecraft.client.model.geom.ModelPart$Cube"
import { $Map } from "java.util.Map"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $AccessorModelPart {
"getChildren"(): $Map<string, $ModelPart>
"getCubes"(): $List<$ModelPart$Cube>
get "children"(): $Map<string, $ModelPart>
get "cubes"(): $List<$ModelPart$Cube>
}

export namespace $AccessorModelPart {
const probejs$$marker: never
}
export abstract class $AccessorModelPart$$Static implements $AccessorModelPart {
}
}

declare module "com.mega.endinglib.util.mixin.level.ServerEC" {
import { $ServerExpandedContext, $ServerExpandedContext$$Type } from "com.mega.endinglib.util.mixin.level.ServerExpandedContext"

export interface $ServerEC {
"endinglib$serverECData"(): $ServerExpandedContext
"endinglib$setECData"(serverExpandedContext0: $ServerExpandedContext$$Type): void
}

export namespace $ServerEC {
const probejs$$marker: never
}
export abstract class $ServerEC$$Static implements $ServerEC {
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorToolAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorToolAction {
}

export namespace $AccessorToolAction {
const probejs$$marker: never
}
export abstract class $AccessorToolAction$$Static implements $AccessorToolAction {
}
}

declare module "com.mega.endinglib.api.item.component.MergedComponentMap" {
import { $ComponentChanges, $ComponentChanges$$Type } from "com.mega.endinglib.api.item.component.ComponentChanges"
import { $Iterator } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ComponentMap$Builder } from "com.mega.endinglib.api.item.component.ComponentMap$Builder"
import { $Set } from "java.util.Set"
import { $ItemComponentType, $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $ComponentMap, $ComponentMap$$Type } from "com.mega.endinglib.api.item.component.ComponentMap"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Component, $Component$$Type } from "com.mega.endinglib.api.item.component.Component"
import { $Map } from "java.util.Map"
import { $Class$$Type } from "java.lang.Class"
import { $Spliterator } from "java.util.Spliterator"

export class $MergedComponentMap implements $ComponentMap {
static readonly "COMPONENT_TYPE_CODEC": $Codec<$ItemComponentType<any>>
static readonly "PERSISTENT_COMPONENT_TYPE_CODEC": $Codec<$ItemComponentType<any>>
static readonly "TYPE_TO_VALUE_MAP_CODEC": $Codec<$Map<$ItemComponentType<any>, any>>

constructor(componentMap0: $ComponentMap$$Type)

public "applyChanges"(componentChanges0: $ComponentChanges$$Type): void
public static "builder"(): $ComponentMap$Builder
public "clearChanges"(): void
public "contains"(itemComponentType0: $ItemComponentType$$Type<any>): boolean
public "copy"(): $MergedComponentMap
public static "create"(componentMap0: $ComponentMap$$Type, componentChanges1: $ComponentChanges$$Type): $MergedComponentMap
public "filtered"(predicate0: $Predicate$$Type<$ItemComponentType$$Type<any>>): $ComponentMap
public "forEach"(consumer0: $Consumer$$Type<$Component$$Type<any>>): void
public "get"<T>(itemComponentType0: $ItemComponentType$$Type<T>): T
public "getChanges"(): $ComponentChanges
public "getOrDefault"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): T
public "getTyped"<T>(itemComponentType0: $ItemComponentType$$Type<T>): $Component<T>
public "getTypes"(): $Set<$ItemComponentType<any>>
public "immutableCopy"(): $ComponentMap
public "isEmpty"(): boolean
public "iterator"(): $Iterator<$Component<any>>
public "remove"<T>(itemComponentType0: $ItemComponentType$$Type<T>): T
public "set"<T>(itemComponentType0: $ItemComponentType$$Type<T>, t1: T): T
public "setAll"(componentMap0: $ComponentMap$$Type): void
public "setChanges"(componentChanges0: $ComponentChanges$$Type): void
public "size"(): integer
public "spliterator"(): $Spliterator<$Component<any>>
public "stream"(): $Stream<$Component<any>>
public "streamAll"<T>(class0: $Class$$Type<T>): $Stream<T>
[Symbol.iterator](): IterableIterator<$Component<any>>;
get "changes"(): $ComponentChanges
get "types"(): $Set<$ItemComponentType<any>>
get "empty"(): boolean
set "all"(value: $ComponentMap$$Type)
set "changes"(value: $ComponentChanges$$Type)
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorMcTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorMcTimer {
"getMsPerTick"(): float
"setMsPerTick"(float0: float): void
get "msPerTick"(): float
set "msPerTick"(value: float)
}

export namespace $AccessorMcTimer {
const probejs$$marker: never
}
export abstract class $AccessorMcTimer$$Static implements $AccessorMcTimer {
}
}

declare module "com.mega.endinglib.api.client.Easing" {
import { $Enum } from "java.lang.Enum"

export class $Easing extends $Enum<$Easing> {
static readonly "CONSTANT": $Easing
static readonly "INVERSE_OUT_CUBIC": $Easing
static readonly "IN_BACK": $Easing
static readonly "IN_BOUNCE": $Easing
static readonly "IN_CIRC": $Easing
static readonly "IN_CUBIC": $Easing
static readonly "IN_ELASTIC": $Easing
static readonly "IN_EXPO": $Easing
static readonly "IN_OUT_BACK": $Easing
static readonly "IN_OUT_BOUNCE": $Easing
static readonly "IN_OUT_CIRC": $Easing
static readonly "IN_OUT_CUBIC": $Easing
static readonly "IN_OUT_ELASTIC": $Easing
static readonly "IN_OUT_EXPO": $Easing
static readonly "IN_OUT_QUAD": $Easing
static readonly "IN_OUT_QUART": $Easing
static readonly "IN_OUT_QUINT": $Easing
static readonly "IN_OUT_SINE": $Easing
static readonly "IN_QUAD": $Easing
static readonly "IN_QUART": $Easing
static readonly "IN_QUINT": $Easing
static readonly "IN_SINE": $Easing
static readonly "LINEAR": $Easing
static readonly "OUT_BACK": $Easing
static readonly "OUT_BOUNCE": $Easing
static readonly "OUT_CIRC": $Easing
static readonly "OUT_CUBIC": $Easing
static readonly "OUT_ELASTIC": $Easing
static readonly "OUT_EXPO": $Easing
static readonly "OUT_QUAD": $Easing
static readonly "OUT_QUART": $Easing
static readonly "OUT_QUINT": $Easing
static readonly "OUT_SINE": $Easing
static readonly "QUADRATIC": $Easing

public "calculate"(float0: float): float
public "interpolate"(float0: float, float1: float, float2: float): float
public static "valueOf"(string0: string): $Easing
public static "values"(): $Easing[]
}
}

declare module "com.mega.endinglib.mixin.accessor.AccessorLivingEntityRenderer" {
import { $List } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $RenderLayer } from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import { $EntityModel, $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $AccessorLivingEntityRenderer {
"callGetAttackAnim"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T, float1: float): float
"callGetBob"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T, float1: float): float
"callGetFlipDegrees"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T): float
"callGetRenderType"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T, boolean1: boolean, boolean2: boolean, boolean3: boolean): $RenderType
"callGetWhiteOverlayProgress"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T, float1: float): float
"callIsBodyVisible"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T): boolean
"callIsShaking"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T): boolean
"callScale"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T, poseStack1: $PoseStack$$Type, float2: float): void
"callSetupRotations"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T, poseStack1: $PoseStack$$Type, float2: float, float3: float, float4: float): void
"callShouldShowName"<T extends $LivingEntity, M extends $EntityModel<T>>(t0: T): boolean
"getLayers"<T extends $LivingEntity, M extends $EntityModel<T>>(): $List<$RenderLayer<T, M>>
get "layers"(): $List<$RenderLayer<T, M>>
}

export namespace $AccessorLivingEntityRenderer {
const probejs$$marker: never
}
export abstract class $AccessorLivingEntityRenderer$$Static implements $AccessorLivingEntityRenderer {
}
}

declare module "com.mega.endinglib.api.item.component.ItemComponentManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlocksAttacksComponent$$Type } from "com.mega.endinglib.api.item.component.type.BlocksAttacksComponent"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ComponentChanges$$Type } from "com.mega.endinglib.api.item.component.ComponentChanges"
import { $ItemComponentType, $ItemComponentType$$Type } from "com.mega.endinglib.api.item.component.ItemComponentType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $MergedComponentMap, $MergedComponentMap$$Type } from "com.mega.endinglib.api.item.component.MergedComponentMap"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $ItemComponentManager$ItemUseCondition$$Type } from "com.mega.endinglib.api.item.component.ItemComponentManager$ItemUseCondition"
import { $Optional$$Type } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ItemComponentManager {
static readonly "HEAD": string
static readonly "ITEM_STACK_CODEC": $Codec<$ItemStack>

constructor(itemStack0: $ItemStack$$Type, mergedComponentMap1: $MergedComponentMap$$Type)

public "applyAfterUseComponentSideEffects"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemUseCondition2: $ItemComponentManager$ItemUseCondition$$Type): $ItemStack
public "canApplyAfterUseEffects"(): boolean
public "componentsSize"(): integer
public static "get"(itemStack0: $ItemStack$$Type): $ItemComponentManager
public static "get"<T>(itemStack0: $ItemStack$$Type, itemComponentType1: $ItemComponentType$$Type<T>): T
public "get"<T>(itemComponentType0: $ItemComponentType$$Type<T>): T
public static "getBlockingItem"(livingEntity0: $LivingEntity$$Type): $ItemStack
public static "getComponentType"(resourceLocation0: $ResourceLocation$$Type): $ItemComponentType<any>
public "getComponents"(): $MergedComponentMap
public static "getDamageBlockedAmount"(livingEntity0: $LivingEntity$$Type, damageSource1: $DamageSource$$Type, float2: float, itemStack3: $ItemStack$$Type, blocksAttacksComponent4: $BlocksAttacksComponent$$Type): float
public "getItemStack"(): $ItemStack
public static "getRegistryMap"(): $Map<$ResourceLocation, $ItemComponentType<any>>
public static "getWeaponDisableBlockingForSeconds"(livingEntity0: $LivingEntity$$Type): float
public static "has"<T>(itemStack0: $ItemStack$$Type, itemComponentType1: $ItemComponentType$$Type<T>): boolean
public static "ifPresent"<T>(itemStack0: $ItemStack$$Type, itemComponentType1: $ItemComponentType$$Type<T>, consumer2: $Consumer$$Type<T>): void
public "ifPresent"<T>(itemComponentType0: $ItemComponentType$$Type<T>, consumer1: $Consumer$$Type<T>): void
public static "init"(): void
public static "itemStackCodec"(itemLike0: $ItemLike$$Type, int1: integer, optional2: $Optional$$Type<$CompoundTag$$Type>, componentChanges3: $ComponentChanges$$Type): $ItemStack
public "mergeChangedToNBTAndUpdate"(componentChanges0: $ComponentChanges$$Type): void
public static "register"<T>(resourceLocation0: $ResourceLocation$$Type, itemComponentType1: $ItemComponentType$$Type<T>): $ItemComponentType<T>
public "setChangesToNBTAndUpdate"(componentChanges0: $ComponentChanges$$Type): void
public static "setComponentManager"(itemStack0: $ItemStack$$Type, itemComponentManager1: $ItemComponentManager$$Type): void
get "components"(): $MergedComponentMap
get "itemStack"(): $ItemStack
set "changesToNBTAndUpdate"(value: $ComponentChanges$$Type)
}
}

declare module "com.mega.endinglib.api.event.render.CameraPosEvent" {
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $GameRenderer$$Type } from "net.minecraft.client.renderer.GameRenderer"
import { $ViewportEvent } from "net.minecraftforge.client.event.ViewportEvent"

export class $CameraPosEvent extends $ViewportEvent {
constructor()
constructor(gameRenderer0: $GameRenderer$$Type, camera1: $Camera$$Type, double2: double, double3: double, double4: double, double5: double)

public "getX"(): double
public "getY"(): double
public "getZ"(): double
get "x"(): double
get "y"(): double
get "z"(): double
}
}

