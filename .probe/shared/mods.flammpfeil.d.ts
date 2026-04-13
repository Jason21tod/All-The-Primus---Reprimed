declare module "mods.flammpfeil.slashblade.capability.inputstate.IInputState" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EnumMap } from "java.util.EnumMap"
import { $EnumSet } from "java.util.EnumSet"
import { $InputCommand, $InputCommand$$Type } from "mods.flammpfeil.slashblade.util.InputCommand"
import { $Scheduler } from "mods.flammpfeil.slashblade.event.Scheduler"

export interface $IInputState {
"getCommands"(livingEntity0: $LivingEntity$$Type): $EnumSet<$InputCommand>
"getCommands"(): $EnumSet<$InputCommand>
"getLastPressTime"(inputCommand0: $InputCommand$$Type): long
"getLastPressTimes"(): $EnumMap<$InputCommand, long>
"getScheduler"(): $Scheduler
get "commands"(): $EnumSet<$InputCommand>
get "lastPressTimes"(): $EnumMap<$InputCommand, long>
get "scheduler"(): $Scheduler
}

export namespace $IInputState {
const probejs$$marker: never
}
export abstract class $IInputState$$Static implements $IInputState {
}
}

declare module "mods.flammpfeil.slashblade.registry.slashblade.PropertiesDefinition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $SwordType } from "mods.flammpfeil.slashblade.item.SwordType"

export class $PropertiesDefinition {
static readonly "CODEC": $Codec<$PropertiesDefinition>

public "getBaseAttackModifier"(): float
public "getComboRoot"(): $ResourceLocation
public "getDefaultType"(): $List<$SwordType>
public "getMaxDamage"(): integer
public "getSpecialAttackType"(): $ResourceLocation
public "getSpecialEffects"(): $List<$ResourceLocation>
public "isUnbreakable"(): boolean
get "baseAttackModifier"(): float
get "comboRoot"(): $ResourceLocation
get "defaultType"(): $List<$SwordType>
get "maxDamage"(): integer
get "specialAttackType"(): $ResourceLocation
get "specialEffects"(): $List<$ResourceLocation>
get "unbreakable"(): boolean
}
}

declare module "mods.flammpfeil.slashblade.entity.IShootable" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $IShootable {
"getDamage"(): double
"getShooter"(): $Entity
"m_6686_"(double0: double, double1: double, double2: double, float3: float, float4: float): void
"setShooter"(entity0: $Entity$$Type): void
get "damage"(): double
get "shooter"(): $Entity
set "shooter"(value: $Entity$$Type)
}

export namespace $IShootable {
const probejs$$marker: never
}
export abstract class $IShootable$$Static implements $IShootable {
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeRegistryEvent$Pre" {
import { $SlashBladeDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition"
import { $SlashBladeRegistryEvent } from "mods.flammpfeil.slashblade.event.SlashBladeRegistryEvent"

export class $SlashBladeRegistryEvent$Pre extends $SlashBladeRegistryEvent {
constructor()
constructor(slashBladeDefinition0: $SlashBladeDefinition$$Type)

}
}

declare module "mods.flammpfeil.slashblade.event.client.RenderOverrideEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $WavefrontObject, $WavefrontObject$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.WavefrontObject"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $RenderOverrideEvent extends $Event implements $EventItf {
constructor(itemStack0: $ItemStack$$Type, wavefrontObject1: $WavefrontObject$$Type, string2: string, resourceLocation3: $ResourceLocation$$Type, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, int6: integer, function7: $Function$$Type<$ResourceLocation$$Type, $RenderType>, boolean8: boolean)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBuffer"(): $MultiBufferSource
public "getGetRenderType"(): $Function<$ResourceLocation, $RenderType>
public "getModel"(): $WavefrontObject
public "getOriginalModel"(): $WavefrontObject
public "getOriginalTarget"(): string
public "getOriginalTexture"(): $ResourceLocation
public "getPackedLightIn"(): integer
public "getPoseStack"(): $PoseStack
public "getStack"(): $ItemStack
public "getTarget"(): string
public "getTexture"(): $ResourceLocation
public "isEnableEffect"(): boolean
public static "onRenderOverride"(itemStack0: $ItemStack$$Type, wavefrontObject1: $WavefrontObject$$Type, string2: string, resourceLocation3: $ResourceLocation$$Type, poseStack4: $PoseStack$$Type, multiBufferSource5: $MultiBufferSource$$Type, int6: integer, function7: $Function$$Type<$ResourceLocation$$Type, $RenderType>, boolean8: boolean): $RenderOverrideEvent
public "setEnableEffect"(boolean0: boolean): void
public "setGetRenderType"(function0: $Function$$Type<$ResourceLocation$$Type, $RenderType>): void
public "setModel"(wavefrontObject0: $WavefrontObject$$Type): void
public "setPackedLightIn"(int0: integer): void
public "setTarget"(string0: string): void
public "setTexture"(resourceLocation0: $ResourceLocation$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "buffer"(): $MultiBufferSource
get "getRenderType"(): $Function<$ResourceLocation, $RenderType>
get "model"(): $WavefrontObject
get "originalModel"(): $WavefrontObject
get "originalTarget"(): string
get "originalTexture"(): $ResourceLocation
get "packedLightIn"(): integer
get "poseStack"(): $PoseStack
get "stack"(): $ItemStack
get "target"(): string
get "texture"(): $ResourceLocation
get "enableEffect"(): boolean
set "enableEffect"(value: boolean)
set "getRenderType"(value: $Function$$Type<$ResourceLocation$$Type, $RenderType>)
set "model"(value: $WavefrontObject$$Type)
set "packedLightIn"(value: integer)
set "target"(value: string)
set "texture"(value: $ResourceLocation$$Type)
}
}

declare module "mods.flammpfeil.slashblade.item.SwordType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum } from "java.lang.Enum"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $EnumSet } from "java.util.EnumSet"

export class $SwordType extends $Enum<$SwordType> {
static readonly "BEWITCHED": $SwordType
static readonly "BROKEN": $SwordType
static readonly "CODEC": $Codec<$SwordType>
static readonly "EDGEFRAGMENT": $SwordType
static readonly "ENCHANTED": $SwordType
static readonly "FIERCEREDGE": $SwordType
static readonly "NONE": $SwordType
static readonly "NOSCABBARD": $SwordType
static readonly "SEALED": $SwordType
static readonly "SOULEATER": $SwordType
static readonly "UNBREAKABLE": $SwordType

public static "from"(itemStack0: $ItemStack$$Type): $EnumSet<$SwordType>
public static "valueOf"(string0: string): $SwordType
public static "values"(): $SwordType[]
}
}

declare module "mods.flammpfeil.slashblade.util.KnockBacks" {
import { $Consumer } from "java.util.function.Consumer"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Enum } from "java.lang.Enum"

export class $KnockBacks extends $Enum<$KnockBacks> {
readonly "action": $Consumer<$LivingEntity>
static readonly "cancel": $KnockBacks
static readonly "meteor": $KnockBacks
static readonly "smash": $KnockBacks
static readonly "toss": $KnockBacks

public static "valueOf"(string0: string): $KnockBacks
public static "values"(): $KnockBacks[]
}
}

declare module "mods.flammpfeil.slashblade.entity.Projectile" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Projectile as $Projectile$0 } from "net.minecraft.world.entity.projectile.Projectile"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export class $Projectile extends $Projectile$0 {
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "majruszlibrary$getProjectileArrow"(entity0: $Entity$$Type): $ItemStack
public static "majruszlibrary$getProjectileWeapon"(entity0: $Entity$$Type): $ItemStack
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "mods.flammpfeil.slashblade.entity.EntityAbstractSummonedSword" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional, $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $PlayMessages$SpawnEntity$$Type } from "net.minecraftforge.network.PlayMessages$SpawnEntity"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Projectile, $Projectile$$Type } from "mods.flammpfeil.slashblade.entity.Projectile"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $List, $List$$Type } from "java.util.List"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $IShootable } from "mods.flammpfeil.slashblade.entity.IShootable"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EntityAbstractSummonedSword extends $Projectile implements $IShootable {
constructor(entityType0: $EntityType$$Type<$Projectile$$Type>, level1: $Level$$Type)

public "affectEntity"(livingEntity0: $LivingEntity$$Type, list1: $List$$Type<$MobEffectInstance$$Type>, double2: double): void
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "burst"(list0: $List$$Type<$MobEffectInstance$$Type>, entity1: $Entity$$Type): void
public "burst"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "createInstance"(spawnEntity0: $PlayMessages$SpawnEntity$$Type, level1: $Level$$Type): $EntityAbstractSummonedSword
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "doForceHitEntity"(entity0: $Entity$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getColor"(): integer
public "getDamage"(): double
public "getDelay"(): integer
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHitEntity"(): $Entity
public "getIsCritical"(): boolean
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getModelLoc"(): $ResourceLocation
public "getModelName"(): string
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffsetYaw"(): float
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPierce"(): byte
public "getPotionEffects"(): $List<$MobEffectInstance>
public "getProfile"(): $GameProfile
public "getRoll"(): float
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getShooter"(): $Entity
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTextureLoc"(): $ResourceLocation
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isNoClip"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "m_7378_"(compoundTag0: $CompoundTag$$Type): void
public "m_7380_"(compoundTag0: $CompoundTag$$Type): void
public static "majruszlibrary$getProjectileArrow"(entity0: $Entity$$Type): $ItemStack
public static "majruszlibrary$getProjectileWeapon"(entity0: $Entity$$Type): $ItemStack
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "resetAlreadyHits"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setColor"(int0: integer): void
public "setDamage"(double0: double): void
public "setDelay"(int0: integer): void
public "setHitEntity"(entity0: $Entity$$Type): void
public "setIsCritical"(boolean0: boolean): void
public "setModelName"(string0: string): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setNoClip"(boolean0: boolean): void
public "setPierce"(byte0: byte): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRoll"(float0: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setShooter"(entity0: $Entity$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
get "modelLoc"(): $LazyOptional<$ResourceLocation>
set "modelLoc"(value: $LazyOptional$$Type<$ResourceLocation$$Type>)
get "textureLoc"(): $LazyOptional<$ResourceLocation>
set "textureLoc"(value: $LazyOptional$$Type<$ResourceLocation$$Type>)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "color"(): integer
get "damage"(): double
get "delay"(): integer
get "displayName"(): $Component
get "facing"(): $Direction
get "hitEntity"(): $Entity
get "isCritical"(): boolean
get "item"(): $ItemStack
get "level"(): $Level
get "modelName"(): string
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offsetYaw"(): float
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "pierce"(): byte
get "potionEffects"(): $List<$MobEffectInstance>
get "profile"(): $GameProfile
get "roll"(): float
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "shooter"(): $Entity
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "noClip"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "color"(value: integer)
set "damage"(value: double)
set "delay"(value: integer)
set "hitEntity"(value: $Entity$$Type)
set "isCritical"(value: boolean)
set "modelName"(value: string)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "noClip"(value: boolean)
set "pierce"(value: byte)
set "position"(value: $BlockContainerJS$$Type)
set "roll"(value: float)
set "shooter"(value: $Entity$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.BladeChangeSpecialAttackEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $BladeChangeSpecialAttackEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, resourceLocation2: $ResourceLocation$$Type, bladeStandAttackEvent3: $SlashBladeEvent$BladeStandAttackEvent$$Type)

public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getSAKey"(): $ResourceLocation
public "getShrinkCount"(): integer
public "setSAKey"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "setShrinkCount"(int0: integer): integer
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "sAKey"(): $ResourceLocation
get "shrinkCount"(): integer
set "sAKey"(value: $ResourceLocation$$Type)
set "shrinkCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.registry.slashblade.EnchantmentDefinition" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"

export class $EnchantmentDefinition {
static readonly "CODEC": $Codec<$EnchantmentDefinition>

constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer)

public "getEnchantmentID"(): $ResourceLocation
public "getEnchantmentLevel"(): integer
get "enchantmentID"(): $ResourceLocation
get "enchantmentLevel"(): integer
}
}

declare module "mods.flammpfeil.slashblade.client.renderer.model.obj.WavefrontObject" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TextureCoordinate, $TextureCoordinate$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.TextureCoordinate"
import { $GroupObject, $GroupObject$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.GroupObject"
import { $Vertex, $Vertex$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.Vertex"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $InputStream$$Type } from "java.io.InputStream"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"

export class $WavefrontObject {
constructor(resourceLocation0: $ResourceLocation$$Type)
constructor(string0: string, inputStream1: $InputStream$$Type)

public "getType"(): string
/** Client only, do not use in server scripts */
public "tessellateAll"(vertexConsumer0: $VertexConsumer$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer): void
/** Client only, do not use in server scripts */
public "tessellateAllExcept"(vertexConsumer0: $VertexConsumer$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer, ...string4s: string[]): void
/** Client only, do not use in server scripts */
public "tessellateOnly"(vertexConsumer0: $VertexConsumer$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer, ...string4s: string[]): void
/** Client only, do not use in server scripts */
public "tessellatePart"(vertexConsumer0: $VertexConsumer$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer, string4: string): void
get "groupObjects"(): $ArrayList<$GroupObject>
set "groupObjects"(value: $ArrayList$$Type<$GroupObject$$Type>)
get "textureCoordinates"(): $ArrayList<$TextureCoordinate>
set "textureCoordinates"(value: $ArrayList$$Type<$TextureCoordinate$$Type>)
get "vertexNormals"(): $ArrayList<$Vertex>
set "vertexNormals"(value: $ArrayList$$Type<$Vertex$$Type>)
get "vertices"(): $ArrayList<$Vertex>
set "vertices"(value: $ArrayList$$Type<$Vertex$$Type>)
get "type"(): string
}
}

declare module "mods.flammpfeil.slashblade.event.RefineSettlementEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $AnvilUpdateEvent, $AnvilUpdateEvent$$Type } from "net.minecraftforge.event.AnvilUpdateEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $RefineSettlementEvent extends $SlashBladeEvent {
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, int2: integer, int3: integer, int4: integer, anvilUpdateEvent5: $AnvilUpdateEvent$$Type)
constructor()

public "getCostResult"(): integer
public "getMaterialCost"(): integer
public "getOriginalEvent"(): $AnvilUpdateEvent
public "getRefineResult"(): integer
public "setCostResult"(int0: integer): integer
public "setMaterialCost"(int0: integer): integer
public "setRefineResult"(int0: integer): integer
get "costResult"(): integer
get "materialCost"(): integer
get "originalEvent"(): $AnvilUpdateEvent
get "refineResult"(): integer
set "costResult"(value: integer)
set "materialCost"(value: integer)
set "refineResult"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.PreCopySpecialEffectFromBladeEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $PreCopySpecialEffectFromBladeEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, resourceLocation2: $ResourceLocation$$Type, bladeStandAttackEvent3: $SlashBladeEvent$BladeStandAttackEvent$$Type, boolean4: boolean, boolean5: boolean)

public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getSEKey"(): $ResourceLocation
public "getShrinkCount"(): integer
public "isCopiable"(): boolean
public "isRemovable"(): boolean
public "setCopiable"(boolean0: boolean): boolean
public "setRemovable"(boolean0: boolean): boolean
public "setSEKey"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "setShrinkCount"(int0: integer): integer
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "sEKey"(): $ResourceLocation
get "shrinkCount"(): integer
get "copiable"(): boolean
get "removable"(): boolean
set "copiable"(value: boolean)
set "removable"(value: boolean)
set "sEKey"(value: $ResourceLocation$$Type)
set "shrinkCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeRegistryEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $SlashBladeDefinition, $SlashBladeDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $SlashBladeRegistryEvent extends $Event implements $EventItf {
constructor(slashBladeDefinition0: $SlashBladeDefinition$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getSlashBladeDefinition"(): $SlashBladeDefinition
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "slashBladeDefinition"(): $SlashBladeDefinition
}
}

declare module "mods.flammpfeil.slashblade.slasharts.SlashArts$ArtsType" {
import { $Enum } from "java.lang.Enum"

export class $SlashArts$ArtsType extends $Enum<$SlashArts$ArtsType> {
static readonly "Fail": $SlashArts$ArtsType
static readonly "Jackpot": $SlashArts$ArtsType
static readonly "Success": $SlashArts$ArtsType
static readonly "Super": $SlashArts$ArtsType

public static "valueOf"(string0: string): $SlashArts$ArtsType
public static "values"(): $SlashArts$ArtsType[]
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$PowerBladeEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$PowerBladeEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, livingEntity2: $LivingEntity$$Type, boolean3: boolean)

public "getUser"(): $LivingEntity
public "isPowered"(): boolean
public "setPowered"(boolean0: boolean): void
get "user"(): $LivingEntity
get "powered"(): boolean
set "powered"(value: boolean)
}
}

declare module "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition$BladeComparator" {
import { $SlashBladeDefinition, $SlashBladeDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition"
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $Function$$Type } from "java.util.function.Function"
import { $Holder$Reference, $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

export class $SlashBladeDefinition$BladeComparator implements $Comparator<$Holder$Reference<$SlashBladeDefinition>> {
constructor()

public "compare"(reference0: $Holder$Reference$$Type<$SlashBladeDefinition$$Type>, reference1: $Holder$Reference$$Type<$SlashBladeDefinition$$Type>): integer
public static "comparing"<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
public static "comparing"<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
public static "comparingDouble"<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
public static "comparingInt"<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
public static "comparingLong"<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
public "equals"(object0: any): boolean
public static "naturalOrder"<T extends $Comparable<T>>(): $Comparator<T>
public static "nullsFirst"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
public static "nullsLast"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
public static "reverseOrder"<T extends $Comparable<T>>(): $Comparator<T>
public "reversed"(): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
public "thenComparing"<U>(function0: $Function$$Type<$Holder$Reference$$Type<$SlashBladeDefinition$$Type>, U>, comparator1: $Comparator$$Type<U>): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
public "thenComparing"(comparator0: $Comparator$$Type<$Holder$Reference$$Type<$SlashBladeDefinition$$Type>>): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
public "thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<$Holder$Reference$$Type<$SlashBladeDefinition$$Type>, U>): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
public "thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<$Holder$Reference$$Type<$SlashBladeDefinition$$Type>>): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
public "thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<$Holder$Reference$$Type<$SlashBladeDefinition$$Type>>): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
public "thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<$Holder$Reference$$Type<$SlashBladeDefinition$$Type>>): $Comparator<$Holder$Reference<$SlashBladeDefinition>>
}
}

declare module "mods.flammpfeil.slashblade.client.renderer.model.obj.TextureCoordinate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureCoordinate {
constructor(float0: float, float1: float)
constructor(float0: float, float1: float, float2: float)

get "u"(): float
set "u"(value: float)
get "v"(): float
set "v"(value: float)
get "w"(): float
set "w"(value: float)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$DoSlashEvent" {
import { $KnockBacks, $KnockBacks$$Type } from "mods.flammpfeil.slashblade.util.KnockBacks"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$DoSlashEvent extends $SlashBladeEvent {
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, livingEntity2: $LivingEntity$$Type, float3: float, boolean4: boolean, double5: double, knockBacks6: $KnockBacks$$Type)
constructor()

public "getDamage"(): double
public "getKnockback"(): $KnockBacks
public "getRoll"(): float
public "getUser"(): $LivingEntity
public "getYRot"(): float
public "isCritical"(): boolean
public "setCritical"(boolean0: boolean): void
public "setDamage"(double0: double): void
public "setKnockback"(knockBacks0: $KnockBacks$$Type): void
public "setRoll"(float0: float): void
public "setYRot"(float0: float): void
get "damage"(): double
get "knockback"(): $KnockBacks
get "roll"(): float
get "user"(): $LivingEntity
get "yRot"(): float
get "critical"(): boolean
set "critical"(value: boolean)
set "damage"(value: double)
set "knockback"(value: $KnockBacks$$Type)
set "roll"(value: float)
set "yRot"(value: float)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$BreakEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$BreakEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type)

}
}

declare module "mods.flammpfeil.slashblade.client.renderer.model.obj.Face" {
import { $TextureCoordinate, $TextureCoordinate$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.TextureCoordinate"
import { $BiFunction, $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Vertex, $Vertex$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.Vertex"
import { $Vector4f, $Vector4f$$Type } from "org.joml.Vector4f"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $Face {
static readonly "alphaNoOverride": $BiFunction<$Vector4f, integer, integer>
static "alphaOverride": $BiFunction<$Vector4f, integer, integer>
static readonly "alphaOverrideYZZ": $BiFunction<$Vector4f, integer, integer>
static readonly "uvDefaultOperator": $Vector4f
static "uvOperator": $Vector4f

constructor()

/** Client only, do not use in server scripts */
public "addFaceForRender"(vertexConsumer0: $VertexConsumer$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer): void
/** Client only, do not use in server scripts */
public "addFaceForRender"(vertexConsumer0: $VertexConsumer$$Type, float1: float, matrix4f2: $Matrix4f$$Type, int3: integer, int4: integer): void
public "calculateFaceNormal"(): $Vertex
public static "resetAlphaOverride"(): void
public static "resetUvOperator"(): void
public static "setAlphaOverride"(biFunction0: $BiFunction$$Type<$Vector4f$$Type, integer, integer>): void
public static "setUvOperator"(float0: float, float1: float, float2: float, float3: float): void
get "faceNormal"(): $Vertex
set "faceNormal"(value: $Vertex$$Type)
get "textureCoordinates"(): $TextureCoordinate[]
set "textureCoordinates"(value: $TextureCoordinate$$Type[])
get "vertexNormals"(): $Vertex[]
set "vertexNormals"(value: $Vertex$$Type[])
get "vertices"(): $Vertex[]
set "vertices"(value: $Vertex$$Type[])
}
}

declare module "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $SlashBladeDefinition$BladeComparator } from "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition$BladeComparator"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $PropertiesDefinition, $PropertiesDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.PropertiesDefinition"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $RenderDefinition, $RenderDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.RenderDefinition"
import { $EnchantmentDefinition, $EnchantmentDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.EnchantmentDefinition"

export class $SlashBladeDefinition {
static readonly "CODEC": $Codec<$SlashBladeDefinition>
static readonly "COMPARATOR": $SlashBladeDefinition$BladeComparator
static readonly "REGISTRY_KEY": $ResourceKey<$Registry<$SlashBladeDefinition>>

constructor(resourceLocation0: $ResourceLocation$$Type, renderDefinition1: $RenderDefinition$$Type, propertiesDefinition2: $PropertiesDefinition$$Type, list3: $List$$Type<$EnchantmentDefinition$$Type>)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, renderDefinition2: $RenderDefinition$$Type, propertiesDefinition3: $PropertiesDefinition$$Type, list4: $List$$Type<$EnchantmentDefinition$$Type>, resourceLocation5: $ResourceLocation$$Type)
constructor(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type, renderDefinition2: $RenderDefinition$$Type, propertiesDefinition3: $PropertiesDefinition$$Type, list4: $List$$Type<$EnchantmentDefinition$$Type>)
constructor(resourceLocation0: $ResourceLocation$$Type, renderDefinition1: $RenderDefinition$$Type, propertiesDefinition2: $PropertiesDefinition$$Type, list3: $List$$Type<$EnchantmentDefinition$$Type>, resourceLocation4: $ResourceLocation$$Type)

public "getBlade"(item0: $Item$$Type): $ItemStack
public "getBlade"(): $ItemStack
public "getCreativeGroup"(): $ResourceLocation
public "getEnchantments"(): $List<$EnchantmentDefinition>
public "getItem"(): $Item
public "getItemName"(): $ResourceLocation
public "getName"(): $ResourceLocation
public "getRenderDefinition"(): $RenderDefinition
public "getStateDefinition"(): $PropertiesDefinition
public "getTranslationKey"(): string
get "blade"(): $ItemStack
get "creativeGroup"(): $ResourceLocation
get "enchantments"(): $List<$EnchantmentDefinition>
get "item"(): $Item
get "itemName"(): $ResourceLocation
get "name"(): $ResourceLocation
get "renderDefinition"(): $RenderDefinition
get "stateDefinition"(): $PropertiesDefinition
get "translationKey"(): string
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$HitEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$HitEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type)

public "getTarget"(): $LivingEntity
public "getUser"(): $LivingEntity
get "target"(): $LivingEntity
get "user"(): $LivingEntity
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.CopySpecialAttackFromBladeEvent" {
import { $PreCopySpecialAttackFromBladeEvent$$Type } from "mods.flammpfeil.slashblade.event.bladestand.PreCopySpecialAttackFromBladeEvent"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $CopySpecialAttackFromBladeEvent extends $SlashBladeEvent {
constructor()
constructor(preCopySpecialAttackFromBladeEvent0: $PreCopySpecialAttackFromBladeEvent$$Type, itemStack1: $ItemStack$$Type, itemEntity2: $ItemEntity$$Type)
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, resourceLocation2: $ResourceLocation$$Type, bladeStandAttackEvent3: $SlashBladeEvent$BladeStandAttackEvent$$Type, itemStack4: $ItemStack$$Type, itemEntity5: $ItemEntity$$Type)

public "getItemEntity"(): $ItemEntity
public "getOrb"(): $ItemStack
public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getSAKey"(): $ResourceLocation
get "itemEntity"(): $ItemEntity
get "orb"(): $ItemStack
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "sAKey"(): $ResourceLocation
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$ChargeActionEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $SlashArts$ArtsType, $SlashArts$ArtsType$$Type } from "mods.flammpfeil.slashblade.slasharts.SlashArts$ArtsType"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ISlashBladeState, $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$ChargeActionEvent extends $Event implements $EventItf {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, int1: integer, iSlashBladeState2: $ISlashBladeState$$Type, resourceLocation3: $ResourceLocation$$Type, artsType4: $SlashArts$ArtsType$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getComboState"(): $ResourceLocation
public "getElapsed"(): integer
public "getEntityLiving"(): $LivingEntity
public "getSlashBladeState"(): $ISlashBladeState
public "getType"(): $SlashArts$ArtsType
public "setComboState"(resourceLocation0: $ResourceLocation$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "comboState"(): $ResourceLocation
get "elapsed"(): integer
get "entityLiving"(): $LivingEntity
get "slashBladeState"(): $ISlashBladeState
get "type"(): $SlashArts$ArtsType
set "comboState"(value: $ResourceLocation$$Type)
}
}

declare module "mods.flammpfeil.slashblade.util.InputCommand" {
import { $Enum } from "java.lang.Enum"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"

export class $InputCommand extends $Enum<$InputCommand> {
static readonly "BACK": $InputCommand
static readonly "FORWARD": $InputCommand
static readonly "JUMP": $InputCommand
static readonly "LEFT": $InputCommand
static readonly "L_CLICK": $InputCommand
static readonly "L_DOWN": $InputCommand
static readonly "M_DOWN": $InputCommand
static readonly "ON_AIR": $InputCommand
static readonly "ON_GROUND": $InputCommand
static readonly "RIGHT": $InputCommand
static readonly "R_CLICK": $InputCommand
static readonly "R_DOWN": $InputCommand
static readonly "SNEAK": $InputCommand
static readonly "SPRINT": $InputCommand
static readonly "move": $EnumSet<$InputCommand>

public static "anyMatch"(enumSet0: $EnumSet$$Type<$InputCommand$$Type>, enumSet1: $EnumSet$$Type<$InputCommand$$Type>): boolean
public static "valueOf"(string0: string): $InputCommand
public static "values"(): $InputCommand[]
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.ProudSoulEnchantmentEvent" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $ProudSoulEnchantmentEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, enchantment2: $Enchantment$$Type, int3: integer, boolean4: boolean, float5: float, int6: integer, bladeStandAttackEvent7: $SlashBladeEvent$BladeStandAttackEvent$$Type)

public "getEnchantLevel"(): integer
public "getEnchantment"(): $Enchantment
public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getProbability"(): float
public "getTotalShrinkCount"(): integer
public "setEnchantLevel"(int0: integer): integer
public "setEnchantment"(enchantment0: $Enchantment$$Type): $Enchantment
public "setProbability"(float0: float): float
public "setTotalShrinkCount"(int0: integer): integer
public "setWillTryNextEnchant"(boolean0: boolean): boolean
public "willTryNextEnchant"(): boolean
get "enchantLevel"(): integer
get "enchantment"(): $Enchantment
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "probability"(): float
get "totalShrinkCount"(): integer
set "enchantLevel"(value: integer)
set "enchantment"(value: $Enchantment$$Type)
set "probability"(value: float)
set "totalShrinkCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.PreCopySpecialAttackFromBladeEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $PreCopySpecialAttackFromBladeEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, resourceLocation2: $ResourceLocation$$Type, bladeStandAttackEvent3: $SlashBladeEvent$BladeStandAttackEvent$$Type)

public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getSAKey"(): $ResourceLocation
public "getShrinkCount"(): integer
public "setSAKey"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "setShrinkCount"(int0: integer): integer
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "sAKey"(): $ResourceLocation
get "shrinkCount"(): integer
set "sAKey"(value: $ResourceLocation$$Type)
set "shrinkCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$AddKillCountEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$AddKillCountEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, int2: integer)

public "getNewCount"(): integer
public "getOriginCount"(): integer
public "setNewCount"(int0: integer): void
get "newCount"(): integer
get "originCount"(): integer
set "newCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.BladeChangeSpecialEffectEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $BladeChangeSpecialEffectEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, resourceLocation2: $ResourceLocation$$Type, bladeStandAttackEvent3: $SlashBladeEvent$BladeStandAttackEvent$$Type)

public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getSEKey"(): $ResourceLocation
public "getShrinkCount"(): integer
public "setSEKey"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "setShrinkCount"(int0: integer): integer
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "sEKey"(): $ResourceLocation
get "shrinkCount"(): integer
set "sEKey"(value: $ResourceLocation$$Type)
set "shrinkCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.slasharts.SlashArts" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $SlashArts$ArtsType$$Type } from "mods.flammpfeil.slashblade.slasharts.SlashArts$ArtsType"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Function, $Function$$Type } from "java.util.function.Function"

export class $SlashArts {
static readonly "ChargeJustTicks": integer
static readonly "ChargeJustTicksMax": integer
static readonly "ChargeTicks": integer
static readonly "REGISTRY_KEY": $ResourceKey<$Registry<$SlashArts>>

constructor(function0: $Function$$Type<$LivingEntity$$Type, $ResourceLocation>)

public "doArts"(artsType0: $SlashArts$ArtsType$$Type, livingEntity1: $LivingEntity$$Type): $ResourceLocation
public "getComboState"(livingEntity0: $LivingEntity$$Type): $ResourceLocation
public "getComboStateJust"(livingEntity0: $LivingEntity$$Type): $ResourceLocation
public "getComboStateSuper"(): $Function<$LivingEntity, $ResourceLocation>
public "getDescription"(): $Component
public "getDescriptionId"(): string
public static "getJustReceptionSpan"(livingEntity0: $LivingEntity$$Type): integer
public "getProudSoulCost"(): integer
public static "getRegistryKey"(slashArts0: $SlashArts$$Type): $ResourceLocation
public "setComboStateJust"(function0: $Function$$Type<$LivingEntity$$Type, $ResourceLocation>): $SlashArts
public "setComboStateSuper"(function0: $Function$$Type<$LivingEntity$$Type, $ResourceLocation>): $SlashArts
public "setProudSoulCost"(int0: integer): $SlashArts
get "comboStateSuper"(): $Function<$LivingEntity, $ResourceLocation>
get "description"(): $Component
get "descriptionId"(): string
get "proudSoulCost"(): integer
set "comboStateJust"(value: $Function$$Type<$LivingEntity$$Type, $ResourceLocation>)
set "comboStateSuper"(value: $Function$$Type<$LivingEntity$$Type, $ResourceLocation>)
set "proudSoulCost"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$SummonedSwordOnHitEntityEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityAbstractSummonedSword, $EntityAbstractSummonedSword$$Type } from "mods.flammpfeil.slashblade.entity.EntityAbstractSummonedSword"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $SlashBladeEvent$SummonedSwordOnHitEntityEvent extends $Event implements $EventItf {
constructor()
constructor(entityAbstractSummonedSword0: $EntityAbstractSummonedSword$$Type, entity1: $Entity$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getSummonedSword"(): $EntityAbstractSummonedSword
public "getTarget"(): $Entity
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "summonedSword"(): $EntityAbstractSummonedSword
get "target"(): $Entity
}
}

declare module "mods.flammpfeil.slashblade.client.renderer.model.obj.GroupObject" {
import { $List, $List$$Type } from "java.util.List"
import { $Face, $Face$$Type } from "mods.flammpfeil.slashblade.client.renderer.model.obj.Face"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GroupObject {
constructor(string0: string)
constructor(string0: string, int1: integer)

/** Client only, do not use in server scripts */
public "render"(vertexConsumer0: $VertexConsumer$$Type, poseStack1: $PoseStack$$Type, int2: integer, int3: integer): void
get "faces"(): $List<$Face>
set "faces"(value: $List$$Type<$Face$$Type>)
get "glDrawingMode"(): integer
set "glDrawingMode"(value: integer)
get "name"(): string
set "name"(value: string)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $BladeStandEntity, $BladeStandEntity$$Type } from "mods.flammpfeil.slashblade.entity.BladeStandEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$BladeStandAttackEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, bladeStandEntity2: $BladeStandEntity$$Type, damageSource3: $DamageSource$$Type)

public "getBladeStand"(): $BladeStandEntity
public "getDamageSource"(): $DamageSource
get "bladeStand"(): $BladeStandEntity
get "damageSource"(): $DamageSource
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState, $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent extends $Event implements $EventItf {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBlade"(): $ItemStack
public "getSlashBladeState"(): $ISlashBladeState
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "blade"(): $ItemStack
get "slashBladeState"(): $ISlashBladeState
}
}

declare module "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Color, $Color$$Type } from "java.awt.Color"
import { $Map$Entry } from "java.util.Map$Entry"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Collection } from "java.util.Collection"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CarryType, $CarryType$$Type } from "mods.flammpfeil.slashblade.client.renderer.CarryType"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Optional } from "java.util.Optional"
import { $SlashArts } from "mods.flammpfeil.slashblade.slasharts.SlashArts"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ListTag$$Type } from "net.minecraft.nbt.ListTag"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export interface $ISlashBladeState extends $INBTSerializable<$CompoundTag> {
"addSpecialEffect"(resourceLocation0: $ResourceLocation$$Type): boolean
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"doChargeAction"(livingEntity0: $LivingEntity$$Type, int1: integer): $ResourceLocation
"getAdjust"(): $Vec3
"getAttackAmplifier"(): float
"getBaseAttackModifier"(): float
"getCarryType"(): $CarryType
"getColorCode"(): integer
"getComboRoot"(): $ResourceLocation
"getComboSeq"(): $ResourceLocation
"getDamage"(): integer
"getEffectColor"(): $Color
"getElapsedTime"(livingEntity0: $LivingEntity$$Type): long
"getFallDecreaseRate"(): float
"getFullChargeTicks"(livingEntity0: $LivingEntity$$Type): integer
"getKillCount"(): integer
"getLastActionTime"(): long
"getMaxDamage"(): integer
"getModel"(): $Optional<$ResourceLocation>
"getProudSoulCount"(): integer
"getRefine"(): integer
"getSlashArts"(): $SlashArts
"getSlashArtsKey"(): $ResourceLocation
"getSpecialEffects"(): $Collection<$ResourceLocation>
"getTargetEntity"(level0: $Level$$Type): $Entity
"getTargetEntityId"(): integer
"getTexture"(): $Optional<$ResourceLocation>
"getTranslationKey"(): string
"hasSpecialEffect"(resourceLocation0: $ResourceLocation$$Type): boolean
"isBroken"(): boolean
"isCharged"(livingEntity0: $LivingEntity$$Type): boolean
"isDefaultBewitched"(): boolean
"isEffectColorInverse"(): boolean
"isEmpty"(): boolean
"isSealed"(): boolean
"onClick"(): boolean
"progressCombo"(livingEntity0: $LivingEntity$$Type): $ResourceLocation
"progressCombo"(livingEntity0: $LivingEntity$$Type, boolean1: boolean): $ResourceLocation
"removeSpecialEffect"(resourceLocation0: $ResourceLocation$$Type): boolean
"resolvCurrentComboState"(livingEntity0: $LivingEntity$$Type): $ResourceLocation
"resolvCurrentComboStateTicks"(livingEntity0: $LivingEntity$$Type): $Map$Entry<integer, $ResourceLocation>
"setAdjust"(vec30: $Vec3$$Type): void
"setAttackAmplifier"(float0: float): void
"setBaseAttackModifier"(float0: float): void
"setBroken"(boolean0: boolean): void
"setCarryType"(carryType0: $CarryType$$Type): void
"setColorCode"(int0: integer): void
"setComboRoot"(resourceLocation0: $ResourceLocation$$Type): void
"setComboSeq"(resourceLocation0: $ResourceLocation$$Type): void
"setDamage"(int0: integer): void
"setDefaultBewitched"(boolean0: boolean): void
"setEffectColor"(color0: $Color$$Type): void
"setEffectColorInverse"(boolean0: boolean): void
"setFallDecreaseRate"(float0: float): void
"setKillCount"(int0: integer): void
"setLastActionTime"(long0: long): void
"setMaxDamage"(int0: integer): void
"setModel"(resourceLocation0: $ResourceLocation$$Type): void
"setNonEmpty"(): void
"setOnClick"(boolean0: boolean): void
"setProudSoulCount"(int0: integer): void
"setRefine"(int0: integer): void
"setSealed"(boolean0: boolean): void
"setSlashArtsKey"(resourceLocation0: $ResourceLocation$$Type): void
"setSpecialEffects"(listTag0: $ListTag$$Type): void
"setTargetEntityId"(int0: integer): void
"setTargetEntityId"(entity0: $Entity$$Type): void
"setTexture"(resourceLocation0: $ResourceLocation$$Type): void
"setTranslationKey"(string0: string): void
"updateComboSeq"(livingEntity0: $LivingEntity$$Type, resourceLocation1: $ResourceLocation$$Type): void
get "adjust"(): $Vec3
get "attackAmplifier"(): float
get "baseAttackModifier"(): float
get "carryType"(): $CarryType
get "colorCode"(): integer
get "comboRoot"(): $ResourceLocation
get "comboSeq"(): $ResourceLocation
get "damage"(): integer
get "effectColor"(): $Color
get "fallDecreaseRate"(): float
get "killCount"(): integer
get "lastActionTime"(): long
get "maxDamage"(): integer
get "model"(): $Optional<$ResourceLocation>
get "proudSoulCount"(): integer
get "refine"(): integer
get "slashArts"(): $SlashArts
get "slashArtsKey"(): $ResourceLocation
get "specialEffects"(): $Collection<$ResourceLocation>
get "targetEntityId"(): integer
get "texture"(): $Optional<$ResourceLocation>
get "translationKey"(): string
get "broken"(): boolean
get "defaultBewitched"(): boolean
get "effectColorInverse"(): boolean
get "empty"(): boolean
get "sealed"(): boolean
set "adjust"(value: $Vec3$$Type)
set "attackAmplifier"(value: float)
set "baseAttackModifier"(value: float)
set "broken"(value: boolean)
set "carryType"(value: $CarryType$$Type)
set "colorCode"(value: integer)
set "comboRoot"(value: $ResourceLocation$$Type)
set "comboSeq"(value: $ResourceLocation$$Type)
set "damage"(value: integer)
set "defaultBewitched"(value: boolean)
set "effectColor"(value: $Color$$Type)
set "effectColorInverse"(value: boolean)
set "fallDecreaseRate"(value: float)
set "killCount"(value: integer)
set "lastActionTime"(value: long)
set "maxDamage"(value: integer)
set "model"(value: $ResourceLocation$$Type)
set "proudSoulCount"(value: integer)
set "refine"(value: integer)
set "sealed"(value: boolean)
set "slashArtsKey"(value: $ResourceLocation$$Type)
set "specialEffects"(value: $ListTag$$Type)
set "targetEntityId"(value: integer)
set "targetEntityId"(value: $Entity$$Type)
set "texture"(value: $ResourceLocation$$Type)
set "translationKey"(value: string)
}

export namespace $ISlashBladeState {
const probejs$$marker: never
}
export abstract class $ISlashBladeState$$Static implements $ISlashBladeState {
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$UpdateAttackEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$UpdateAttackEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, double2: double)

public "getNewDamage"(): double
public "getOriginDamage"(): double
public "setNewDamage"(double0: double): void
get "newDamage"(): double
get "originDamage"(): double
set "newDamage"(value: double)
}
}

declare module "mods.flammpfeil.slashblade.entity.BladeStandEntity" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $ItemFrame } from "net.minecraft.world.entity.decoration.ItemFrame"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $IEntityAdditionalSpawnData } from "net.minecraftforge.entity.IEntityAdditionalSpawnData"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $PlayMessages$SpawnEntity$$Type } from "net.minecraftforge.network.PlayMessages$SpawnEntity"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $BladeStandEntity extends $ItemFrame implements $IEntityAdditionalSpawnData {
constructor(entityType0: $EntityType$$Type<$BladeStandEntity$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "createInstance"(spawnEntity0: $PlayMessages$SpawnEntity$$Type, level1: $Level$$Type): $BladeStandEntity
public static "createInstanceFromPos"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type, item3: $Item$$Type): $BladeStandEntity
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$dynamicLightTick"(): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getLuminance"(): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "currentType"(): $Item
set "currentType"(value: $Item$$Type)
get "currentTypeStack"(): $ItemStack
set "currentTypeStack"(value: $ItemStack$$Type)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeRegistryEvent$Post" {
import { $SlashBladeDefinition$$Type } from "mods.flammpfeil.slashblade.registry.slashblade.SlashBladeDefinition"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $SlashBladeRegistryEvent } from "mods.flammpfeil.slashblade.event.SlashBladeRegistryEvent"

export class $SlashBladeRegistryEvent$Post extends $SlashBladeRegistryEvent {
constructor()
constructor(slashBladeDefinition0: $SlashBladeDefinition$$Type, itemStack1: $ItemStack$$Type)

public "getBlade"(): $ItemStack
get "blade"(): $ItemStack
}
}

declare module "mods.flammpfeil.slashblade.event.handler.InputCommandEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $IInputState, $IInputState$$Type } from "mods.flammpfeil.slashblade.capability.inputstate.IInputState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"
import { $InputCommand, $InputCommand$$Type } from "mods.flammpfeil.slashblade.util.InputCommand"

export class $InputCommandEvent extends $Event implements $EventItf {
constructor(serverPlayer0: $ServerPlayer$$Type, iInputState1: $IInputState$$Type, enumSet2: $EnumSet$$Type<$InputCommand$$Type>, enumSet3: $EnumSet$$Type<$InputCommand$$Type>)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getCurrent"(): $EnumSet<$InputCommand>
public "getEntity"(): $ServerPlayer
public "getOld"(): $EnumSet<$InputCommand>
public "getState"(): $IInputState
public static "onInputChange"(serverPlayer0: $ServerPlayer$$Type, iInputState1: $IInputState$$Type, enumSet2: $EnumSet$$Type<$InputCommand$$Type>, enumSet3: $EnumSet$$Type<$InputCommand$$Type>): $InputCommandEvent
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "current"(): $EnumSet<$InputCommand>
get "entity"(): $ServerPlayer
get "old"(): $EnumSet<$InputCommand>
get "state"(): $IInputState
}
}

declare module "mods.flammpfeil.slashblade.event.bladestand.CopySpecialEffectFromBladeEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent$BladeStandAttackEvent, $SlashBladeEvent$BladeStandAttackEvent$$Type } from "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandAttackEvent"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $PreCopySpecialEffectFromBladeEvent$$Type } from "mods.flammpfeil.slashblade.event.bladestand.PreCopySpecialEffectFromBladeEvent"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $CopySpecialEffectFromBladeEvent extends $SlashBladeEvent {
constructor()
constructor(preCopySpecialEffectFromBladeEvent0: $PreCopySpecialEffectFromBladeEvent$$Type, itemStack1: $ItemStack$$Type, itemEntity2: $ItemEntity$$Type)
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, resourceLocation2: $ResourceLocation$$Type, bladeStandAttackEvent3: $SlashBladeEvent$BladeStandAttackEvent$$Type, boolean4: boolean, boolean5: boolean, itemStack6: $ItemStack$$Type, itemEntity7: $ItemEntity$$Type)

public "getItemEntity"(): $ItemEntity
public "getOrb"(): $ItemStack
public "getOriginalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
public "getSEKey"(): $ResourceLocation
public "isCopiable"(): boolean
public "isRemovable"(): boolean
get "itemEntity"(): $ItemEntity
get "orb"(): $ItemStack
get "originalEvent"(): $SlashBladeEvent$BladeStandAttackEvent
get "sEKey"(): $ResourceLocation
get "copiable"(): boolean
get "removable"(): boolean
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$UpdateEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$UpdateEvent extends $SlashBladeEvent {
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, level2: $Level$$Type, entity3: $Entity$$Type, int4: integer, boolean5: boolean)
constructor()

public "getEntity"(): $Entity
public "getItemSlot"(): integer
public "getLevel"(): $Level
public "isSelected"(): boolean
get "entity"(): $Entity
get "itemSlot"(): integer
get "level"(): $Level
get "selected"(): boolean
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$BladeStandTickEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $BladeStandEntity, $BladeStandEntity$$Type } from "mods.flammpfeil.slashblade.entity.BladeStandEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$BladeStandTickEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, bladeStandEntity2: $BladeStandEntity$$Type)

public "getBladeStand"(): $BladeStandEntity
get "bladeStand"(): $BladeStandEntity
}
}

declare module "mods.flammpfeil.slashblade.client.renderer.model.obj.Vertex" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vertex {
constructor(float0: float, float1: float)
constructor(float0: float, float1: float, float2: float)

get "x"(): float
set "x"(value: float)
get "y"(): float
set "y"(value: float)
get "z"(): float
set "z"(value: float)
}
}

declare module "mods.flammpfeil.slashblade.event.RefineProgressEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $AnvilUpdateEvent, $AnvilUpdateEvent$$Type } from "net.minecraftforge.event.AnvilUpdateEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $RefineProgressEvent extends $SlashBladeEvent {
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, int2: integer, int3: integer, int4: integer, int5: integer, anvilUpdateEvent6: $AnvilUpdateEvent$$Type)
constructor()

public "getCostResult"(): integer
public "getLevelCost"(): integer
public "getMaterialCost"(): integer
public "getOriginalEvent"(): $AnvilUpdateEvent
public "getRefineResult"(): integer
public "setLevelCost"(int0: integer): integer
public "setMaterialCost"(int0: integer): integer
public "setRefineResult"(int0: integer): integer
get "costResult"(): integer
get "levelCost"(): integer
get "materialCost"(): integer
get "originalEvent"(): $AnvilUpdateEvent
get "refineResult"(): integer
set "levelCost"(value: integer)
set "materialCost"(value: integer)
set "refineResult"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.registry.slashblade.RenderDefinition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $CarryType } from "mods.flammpfeil.slashblade.client.renderer.CarryType"

export class $RenderDefinition {
static readonly "CODEC": $Codec<$RenderDefinition>

public "getModelName"(): $ResourceLocation
public "getStandbyRenderType"(): $CarryType
public "getSummonedSwordColor"(): integer
public "getTextureName"(): $ResourceLocation
public "isSummonedSwordColorInverse"(): boolean
get "modelName"(): $ResourceLocation
get "standbyRenderType"(): $CarryType
get "summonedSwordColor"(): integer
get "textureName"(): $ResourceLocation
get "summonedSwordColorInverse"(): boolean
}
}

declare module "mods.flammpfeil.slashblade.event.BladeMotionEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BladeMotionEvent extends $Event implements $EventItf {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, resourceLocation1: $ResourceLocation$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getCombo"(): $ResourceLocation
public "getEntity"(): $LivingEntity
public "setCombo"(resourceLocation0: $ResourceLocation$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "combo"(): $ResourceLocation
get "entity"(): $LivingEntity
set "combo"(value: $ResourceLocation$$Type)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$AddProudSoulEvent" {
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$AddProudSoulEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, int2: integer)

public "getNewCount"(): integer
public "getOriginCount"(): integer
public "setNewCount"(int0: integer): void
get "newCount"(): integer
get "originCount"(): integer
set "newCount"(value: integer)
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$NextComboEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$NextComboEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, livingEntity2: $LivingEntity$$Type, resourceLocation3: $ResourceLocation$$Type)

public "getNextCombo"(): $ResourceLocation
public "getUser"(): $LivingEntity
public "setNextCombo"(resourceLocation0: $ResourceLocation$$Type): void
get "nextCombo"(): $ResourceLocation
get "user"(): $LivingEntity
set "nextCombo"(value: $ResourceLocation$$Type)
}
}

declare module "mods.flammpfeil.slashblade.client.renderer.CarryType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum } from "java.lang.Enum"

export class $CarryType extends $Enum<$CarryType> {
static readonly "CODEC": $Codec<$CarryType>
static readonly "DEFAULT": $CarryType
static readonly "KATANA": $CarryType
static readonly "NINJA": $CarryType
static readonly "NONE": $CarryType
static readonly "PSO2": $CarryType
static readonly "RNINJA": $CarryType

public static "valueOf"(string0: string): $CarryType
public static "values"(): $CarryType[]
}
}

declare module "mods.flammpfeil.slashblade.event.Scheduler" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $TimerCallback$$Type } from "net.minecraft.world.level.timers.TimerCallback"
import { $TimerCallbacks } from "net.minecraft.world.level.timers.TimerCallbacks"

export class $Scheduler {
static readonly "SB_CALLBACKS": $TimerCallbacks<$LivingEntity>

constructor()

public "onTick"(livingEntity0: $LivingEntity$$Type): void
public "schedule"(string0: string, long1: long, timerCallback2: $TimerCallback$$Type<$LivingEntity$$Type>): void
}
}

declare module "mods.flammpfeil.slashblade.event.SlashBladeEvent$NextOfTimeOutComboEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SlashBladeEvent } from "mods.flammpfeil.slashblade.event.SlashBladeEvent"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISlashBladeState$$Type } from "mods.flammpfeil.slashblade.capability.slashblade.ISlashBladeState"

export class $SlashBladeEvent$NextOfTimeOutComboEvent extends $SlashBladeEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, iSlashBladeState1: $ISlashBladeState$$Type, livingEntity2: $LivingEntity$$Type, resourceLocation3: $ResourceLocation$$Type)

public "getNextCombo"(): $ResourceLocation
public "getUser"(): $LivingEntity
public "setNextCombo"(resourceLocation0: $ResourceLocation$$Type): void
get "nextCombo"(): $ResourceLocation
get "user"(): $LivingEntity
set "nextCombo"(value: $ResourceLocation$$Type)
}
}

