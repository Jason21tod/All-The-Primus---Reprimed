declare module "com.github.alexthe666.citadel.client.event.EventPosePlayerHand" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"

export class $EventPosePlayerHand extends $Event implements $EventItf {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, humanoidModel1: $HumanoidModel$$Type, boolean2: boolean)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEntityIn"(): $Entity
public "getModel"(): $HumanoidModel
public "isLeftHand"(): boolean
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "entityIn"(): $Entity
get "model"(): $HumanoidModel
get "leftHand"(): boolean
}
}

declare module "com.github.alexthe666.citadel.client.event.EventRenderSplashText" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EventRenderSplashText extends $Event implements $EventItf {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getGuiGraphics"(): $GuiGraphics
public "getPartialTicks"(): float
public "getSplashText"(): string
public "setSplashText"(string0: string): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "guiGraphics"(): $GuiGraphics
get "partialTicks"(): float
get "splashText"(): string
set "splashText"(value: string)
}
}

declare module "com.github.alexthe666.citadel.server.tick.modifier.TickRateModifierType" {
import { $Enum } from "java.lang.Enum"
import { $TickRateModifier } from "com.github.alexthe666.citadel.server.tick.modifier.TickRateModifier"
import { $Class } from "java.lang.Class"

export class $TickRateModifierType extends $Enum<$TickRateModifierType> {
static readonly "CELESTIAL": $TickRateModifierType
static readonly "GLOBAL": $TickRateModifierType
static readonly "LOCAL_ENTITY": $TickRateModifierType
static readonly "LOCAL_POSITION": $TickRateModifierType

public static "fromId"(int0: integer): $TickRateModifierType
public "getTickRateClass"(): $Class<$TickRateModifier>
public "isLocal"(): boolean
public "toId"(): integer
public static "valueOf"(string0: string): $TickRateModifierType
public static "values"(): $TickRateModifierType[]
get "tickRateClass"(): $Class<$TickRateModifier>
get "local"(): boolean
}
}

declare module "com.github.alexthe666.citadel.server.world.ModifiableTickRateServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModifiableTickRateServer {
"getMasterMs"(): long
"resetGlobalTickLengthMs"(): void
"setGlobalTickLengthMs"(long0: long): void
get "masterMs"(): long
set "globalTickLengthMs"(value: long)
}

export namespace $ModifiableTickRateServer {
const probejs$$marker: never
}
export abstract class $ModifiableTickRateServer$$Static implements $ModifiableTickRateServer {
}
}

declare module "com.github.alexthe666.citadel.animation.AnimationEvent$Start" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.alexthe666.citadel.animation.IAnimatedEntity"
import { $Animation$$Type } from "com.github.alexthe666.citadel.animation.Animation"
import { $AnimationEvent } from "com.github.alexthe666.citadel.animation.AnimationEvent"

export class $AnimationEvent$Start<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor()
constructor(t0: T, animation1: $Animation$$Type)

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "com.github.L_Ender.lionfishapi.server.event.AnimationEvent$Start" {
import { $Animation$$Type } from "com.github.L_Ender.lionfishapi.server.animation.Animation"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.github.L_Ender.lionfishapi.server.event.AnimationEvent"

export class $AnimationEvent$Start<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor()
constructor(t0: T, animation1: $Animation$$Type)

public "setAnimation"(animation0: $Animation$$Type): void
set "animation"(value: $Animation$$Type)
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.WorldGenRegionAccessor" {
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $List } from "java.util.List"
import { $StructureManager } from "net.minecraft.world.level.StructureManager"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $WorldGenRegionAccessor {
"getCache"(): $List<$ChunkAccess>
"getFirstPos"(): $ChunkPos
"getLastPos"(): $ChunkPos
"getSize"(): integer
"getStructureManager"(): $StructureManager
get "cache"(): $List<$ChunkAccess>
get "firstPos"(): $ChunkPos
get "lastPos"(): $ChunkPos
get "size"(): integer
get "structureManager"(): $StructureManager
}

export namespace $WorldGenRegionAccessor {
const probejs$$marker: never
}
export abstract class $WorldGenRegionAccessor$$Static implements $WorldGenRegionAccessor {
}
}

declare module "com.github.L_Ender.lionfishapi.client.event.EventGetFluidRenderType" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $EventGetFluidRenderType extends $Event implements $EventItf {
constructor()
constructor(fluidState0: $FluidState$$Type, renderType1: $RenderType$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getFluidState"(): $FluidState
public "getRenderType"(): $RenderType
public "setRenderType"(renderType0: $RenderType$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "fluidState"(): $FluidState
get "renderType"(): $RenderType
set "renderType"(value: $RenderType$$Type)
}
}

declare module "com.github.alexthe666.citadel.server.generation.NoiseGeneratorSettingsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NoiseGeneratorSettingsAccessor {
"onSaveData"(boolean0: boolean): void
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export abstract class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$PostSetupAnimations" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer$AccessToBufferSource } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$PostSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "com.github.alexthe666.citadel.animation.AnimationEvent" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatedEntity } from "com.github.alexthe666.citadel.animation.IAnimatedEntity"
import { $Animation } from "com.github.alexthe666.citadel.animation.Animation"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $AnimationEvent<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $Event {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getAnimation"(): $Animation
public "getEntity"(): T
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.MinecartAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecartAccessor {
"isOnMagLevRail"(): boolean
get "onMagLevRail"(): boolean
}

export namespace $MinecartAccessor {
const probejs$$marker: never
}
export abstract class $MinecartAccessor$$Static implements $MinecartAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.StructureManagerAccessor" {
import { $LevelAccessor } from "net.minecraft.world.level.LevelAccessor"

export interface $StructureManagerAccessor {
"getLevel"(): $LevelAccessor
get "level"(): $LevelAccessor
}

export namespace $StructureManagerAccessor {
const probejs$$marker: never
}
export abstract class $StructureManagerAccessor$$Static implements $StructureManagerAccessor {
}
}

declare module "com.github.alexthe666.citadel.animation.IAnimatedEntity" {
import { $Animation, $Animation$$Type } from "com.github.alexthe666.citadel.animation.Animation"

export interface $IAnimatedEntity {
"getAnimation"(): $Animation
"getAnimationTick"(): integer
"getAnimations"(): $Animation[]
"setAnimation"(animation0: $Animation$$Type): void
"setAnimationTick"(int0: integer): void
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
}

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $IAnimatedEntity$$Static implements $IAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

declare module "com.github.alexthe666.citadel.server.entity.ICitadelDataEntity" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

export interface $ICitadelDataEntity {
"getCitadelEntityData"(): $CompoundTag
"setCitadelEntityData"(compoundTag0: $CompoundTag$$Type): void
get "citadelEntityData"(): $CompoundTag
set "citadelEntityData"(value: $CompoundTag$$Type)
}

export namespace $ICitadelDataEntity {
const probejs$$marker: never
}
export abstract class $ICitadelDataEntity$$Static implements $ICitadelDataEntity {
}
}

declare module "com.github.exopandora.shouldersurfing.mixins.GuiAccessor" {
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"

export interface $GuiAccessor {
"invokeCanRenderCrosshairForSpectator"(hitResult0: $HitResult$$Type): boolean
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export abstract class $GuiAccessor$$Static implements $GuiAccessor {
}
}

declare module "com.github.raverbury.aggroindicator.event.EntityPostTickEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EntityPostTickEvent extends $Event implements $EventItf {
constructor(entity0: $Entity$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEntity"(): $Entity
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "entity"(): $Entity
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$PostRenderModel" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer$AccessToBufferSource } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$PostRenderModel extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "com.github.L_Ender.lionfishapi.server.event.AnimationEvent$Tick" {
import { $Animation$$Type } from "com.github.L_Ender.lionfishapi.server.animation.Animation"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AnimationEvent } from "com.github.L_Ender.lionfishapi.server.event.AnimationEvent"

export class $AnimationEvent$Tick<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor()
constructor(t0: T, animation1: $Animation$$Type, int2: integer)

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "com.github.alexthe666.citadel.server.world.ExpandedBiomeSource" {
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set$$Type } from "java.util.Set"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

/** @deprecated */
export interface $ExpandedBiomeSource {
"expandBiomesWith"(set0: $Set$$Type<$Holder$$Type<$Biome$$Type>>): void
"getResourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
"setResourceKeyMap"(map0: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>): void
get "resourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
set "resourceKeyMap"(value: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>)
}

export namespace $ExpandedBiomeSource {
const probejs$$marker: never
}
export abstract class $ExpandedBiomeSource$$Static implements $ExpandedBiomeSource {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventGetOutlineColor" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EventGetOutlineColor extends $Event implements $EventItf {
constructor()
constructor(entity0: $Entity$$Type, int1: integer)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getColor"(): integer
public "getEntityIn"(): $Entity
public "setColor"(int0: integer): void
public "setEntityIn"(entity0: $Entity$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "color"(): integer
get "entityIn"(): $Entity
set "color"(value: integer)
set "entityIn"(value: $Entity$$Type)
}
}

declare module "com.github.raverbury.aggroindicator.event.CustomLivingChangeTargetEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $CustomLivingChangeTargetEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type)

public "getTarget"(): $LivingEntity
get "target"(): $LivingEntity
}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.DarknessIncarnateUserAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DarknessIncarnateUserAccessor {
"hasSlowFallingFlag"(): boolean
"setSlowFallingFlag"(boolean0: boolean): void
set "slowFallingFlag"(value: boolean)
}

export namespace $DarknessIncarnateUserAccessor {
const probejs$$marker: never
}
export abstract class $DarknessIncarnateUserAccessor$$Static implements $DarknessIncarnateUserAccessor {
}
}

declare module "com.github.exopandora.shouldersurfing.mixins.ResourceLocationAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ResourceLocationAccessor {
}

export namespace $ResourceLocationAccessor {
const probejs$$marker: never
}
export abstract class $ResourceLocationAccessor$$Static implements $ResourceLocationAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventGetFluidRenderType" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $EventGetFluidRenderType extends $Event implements $EventItf {
constructor()
constructor(fluidState0: $FluidState$$Type, renderType1: $RenderType$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getFluidState"(): $FluidState
public "getRenderType"(): $RenderType
public "setRenderType"(renderType0: $RenderType$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "fluidState"(): $FluidState
get "renderType"(): $RenderType
set "renderType"(value: $RenderType$$Type)
}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.FallingBlockEntityAccessor" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $FallingBlockEntityAccessor {
"hasFallBlocking"(): boolean
"setBlockState"(blockState0: $BlockState$$Type): void
"setFallBlockingTime"(): void
set "blockState"(value: $BlockState$$Type)
}

export namespace $FallingBlockEntityAccessor {
const probejs$$marker: never
}
export abstract class $FallingBlockEntityAccessor$$Static implements $FallingBlockEntityAccessor {
}
}

declare module "com.github.alexthe666.citadel.server.event.EventChangeEntityTickRate" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EventChangeEntityTickRate extends $Event implements $EventItf {
constructor()
constructor(entity0: $Entity$$Type, float1: float)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEntity"(): $Entity
public "getTargetTickRate"(): float
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "entity"(): $Entity
get "targetTickRate"(): float
}
}

declare module "com.github.alexthe666.citadel.server.entity.IModifiesTime" {
import { $TickRateModifier$$Type } from "com.github.alexthe666.citadel.server.tick.modifier.TickRateModifier"

export interface $IModifiesTime {
"isTimeModificationValid"(tickRateModifier0: $TickRateModifier$$Type): boolean
}

export namespace $IModifiesTime {
const probejs$$marker: never
}
export abstract class $IModifiesTime$$Static implements $IModifiesTime {
}
}

declare module "com.github.L_Ender.lionfishapi.server.event.StandOnFluidEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"

export class $StandOnFluidEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, fluidState1: $FluidState$$Type)

public "getFluidState"(): $FluidState
get "fluidState"(): $FluidState
}
}

declare module "com.github.alexthe666.citadel.client.event.EventGetStarBrightness" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"

export class $EventGetStarBrightness extends $Event implements $EventItf {
constructor(clientLevel0: $ClientLevel$$Type, float1: float, float2: float)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBrightness"(): float
public "getLevel"(): $ClientLevel
public "getPartialTicks"(): float
public "setBrightness"(float0: float): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "brightness"(): float
get "level"(): $ClientLevel
get "partialTicks"(): float
set "brightness"(value: float)
}
}

declare module "com.github.raverbury.aggroindicator.mixin.LivingEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccess {
"getDead"(): boolean
get "dead"(): boolean
}

export namespace $LivingEntityAccess {
const probejs$$marker: never
}
export abstract class $LivingEntityAccess$$Static implements $LivingEntityAccess {
}
}

declare module "com.github.exopandora.shouldersurfing.mixinducks.OptionsDuck" {
import { $CameraType$$Type } from "net.minecraft.client.CameraType"

export interface $OptionsDuck {
"shouldersurfing$setCameraTypeDirect"(cameraType0: $CameraType$$Type): void
}

export namespace $OptionsDuck {
const probejs$$marker: never
}
export abstract class $OptionsDuck$$Static implements $OptionsDuck {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.StructureProcessorAccessor" {
import { $StructureProcessorType } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {
"callGetType"(): $StructureProcessorType<any>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export abstract class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.SinglePoolElementAccessor" {
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $SinglePoolElementAccessor {
"callGetTemplate"(structureTemplateManager0: $StructureTemplateManager$$Type): $StructureTemplate
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {
}
}

declare module "com.github.exopandora.shouldersurfing.mixins.GameRendererAccessor" {
import { $Camera } from "net.minecraft.client.Camera"

export interface $GameRendererAccessor {
"getMainCamera"(): $Camera
get "mainCamera"(): $Camera
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export abstract class $GameRendererAccessor$$Static implements $GameRendererAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$PreSetupAnimations" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer$AccessToBufferSource } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$PreSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)
constructor()

}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.HeadRotationEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HeadRotationEntityAccessor {
"resetMagnetHeadRotation"(): void
"setMagnetHeadRotation"(): void
}

export namespace $HeadRotationEntityAccessor {
const probejs$$marker: never
}
export abstract class $HeadRotationEntityAccessor$$Static implements $HeadRotationEntityAccessor {
}
}

declare module "com.github.alexthe666.citadel.server.event.EventMergeStructureSpawns" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $MobCategory, $MobCategory$$Type } from "net.minecraft.world.entity.MobCategory"
import { $WeightedRandomList, $WeightedRandomList$$Type } from "net.minecraft.util.random.WeightedRandomList"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $StructureManager, $StructureManager$$Type } from "net.minecraft.world.level.StructureManager"

export class $EventMergeStructureSpawns extends $Event implements $EventItf {
constructor()
constructor(structureManager0: $StructureManager$$Type, blockPos1: $BlockPos$$Type, mobCategory2: $MobCategory$$Type, weightedRandomList3: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>, weightedRandomList4: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBiomeSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "getCategory"(): $MobCategory
public "getPos"(): $BlockPos
public "getStructureManager"(): $StructureManager
public "getStructureSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
public "isStructureTagged"(tagKey0: $TagKey$$Type<$Structure$$Type>): boolean
public "mergeSpawns"(): void
public "setStructureSpawns"(weightedRandomList0: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "biomeSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
get "category"(): $MobCategory
get "pos"(): $BlockPos
get "structureManager"(): $StructureManager
get "structureSpawns"(): $WeightedRandomList<$MobSpawnSettings$SpawnerData>
set "structureSpawns"(value: $WeightedRandomList$$Type<$MobSpawnSettings$SpawnerData$$Type>)
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $EntityModel, $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer extends $Event implements $EventItf {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEntity"(): $LivingEntity
public "getModel"(): $EntityModel
public "getPartialTicks"(): float
public "getPoseStack"(): $PoseStack
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "entity"(): $LivingEntity
get "model"(): $EntityModel
get "partialTicks"(): float
get "poseStack"(): $PoseStack
}
}

declare module "com.github.L_Ender.cataclysm.client.event.EventPosePlayerHand" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $HumanoidModel, $HumanoidModel$$Type } from "net.minecraft.client.model.HumanoidModel"

export class $EventPosePlayerHand extends $Event implements $EventItf {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, humanoidModel1: $HumanoidModel$$Type, boolean2: boolean)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEntityIn"(): $Entity
public "getModel"(): $HumanoidModel
public "isLeftHand"(): boolean
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "entityIn"(): $Entity
get "model"(): $HumanoidModel
get "leftHand"(): boolean
}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.FrostmintFreezableAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FrostmintFreezableAccessor {
"isFreezingFromFrostmint"(): boolean
"setFrostmintFreezing"(boolean0: boolean): void
get "freezingFromFrostmint"(): boolean
set "frostmintFreezing"(value: boolean)
}

export namespace $FrostmintFreezableAccessor {
const probejs$$marker: never
}
export abstract class $FrostmintFreezableAccessor$$Static implements $FrostmintFreezableAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$SetupRotations" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$SetupRotations extends $EventLivingRenderer {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float)

public "getBodyYRot"(): float
get "bodyYRot"(): float
}
}

declare module "com.github.alexmodguy.alexscaves.server.level.biome.BiomeSourceAccessor" {
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Set$$Type } from "java.util.Set"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $BiomeSourceAccessor {
"expandBiomesWith"(set0: $Set$$Type<$Holder$$Type<$Biome$$Type>>): void
"getResourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
"setResourceKeyMap"(map0: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>): void
get "resourceKeyMap"(): $Map<$ResourceKey<$Biome>, $Holder<$Biome>>
set "resourceKeyMap"(value: $Map$$Type<$ResourceKey$$Type<$Biome$$Type>, $Holder$$Type<$Biome$$Type>>)
}

export namespace $BiomeSourceAccessor {
const probejs$$marker: never
}
export abstract class $BiomeSourceAccessor$$Static implements $BiomeSourceAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.BoundingBoxAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoundingBoxAccessor {
"setMaxX"(int0: integer): void
"setMaxY"(int0: integer): void
"setMaxZ"(int0: integer): void
"setMinX"(int0: integer): void
"setMinY"(int0: integer): void
"setMinZ"(int0: integer): void
set "maxX"(value: integer)
set "maxY"(value: integer)
set "maxZ"(value: integer)
set "minX"(value: integer)
set "minY"(value: integer)
set "minZ"(value: integer)
}

export namespace $BoundingBoxAccessor {
const probejs$$marker: never
}
export abstract class $BoundingBoxAccessor$$Static implements $BoundingBoxAccessor {
}
}

declare module "com.github.alexthe666.citadel.server.event.EventReplaceBiome" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Climate$Sampler, $Climate$Sampler$$Type } from "net.minecraft.world.level.biome.Climate$Sampler"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ExpandedBiomeSource, $ExpandedBiomeSource$$Type } from "com.github.alexthe666.citadel.server.world.ExpandedBiomeSource"
import { $Level } from "net.minecraft.world.level.Level"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

/** @deprecated */
export class $EventReplaceBiome extends $Event implements $EventItf {
constructor()
constructor(expandedBiomeSource0: $ExpandedBiomeSource$$Type, holder1: $Holder$$Type<$Biome$$Type>, int2: integer, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float, float9: float, float10: float, long11: long, resourceKey12: $ResourceKey$$Type<$Level>, sampler13: $Climate$Sampler$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBiomeSource"(): $ExpandedBiomeSource
public "getBiomeToGenerate"(): $Holder<$Biome>
public "getClimateSampler"(): $Climate$Sampler
public "getContinentalness"(): float
public "getDepth"(): float
public "getErosion"(): float
public "getHumidity"(): float
public "getTemperature"(): float
public "getWeirdness"(): float
public "getWorldDimension"(): $ResourceKey<$Level>
public "getWorldSeed"(): long
public "getX"(): integer
public "getY"(): integer
public "getZ"(): integer
public "setBiomeToGenerate"(holder0: $Holder$$Type<$Biome$$Type>): void
public "testContinentalness"(float0: float, float1: float): boolean
public "testDepth"(float0: float, float1: float): boolean
public "testErosion"(float0: float, float1: float): boolean
public "testHumidity"(float0: float, float1: float): boolean
public "testTemperature"(float0: float, float1: float): boolean
public "testWeirdness"(float0: float, float1: float): boolean
get "biomeSource"(): $ExpandedBiomeSource
set "biomeSource"(value: $ExpandedBiomeSource$$Type)
get "biomeToGenerate"(): $Holder<$Biome>
set "biomeToGenerate"(value: $Holder$$Type<$Biome$$Type>)
get "continentalness"(): float
set "continentalness"(value: float)
get "depth"(): float
set "depth"(value: float)
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "erosion"(): float
set "erosion"(value: float)
get "humidity"(): float
set "humidity"(value: float)
get "temperature"(): float
set "temperature"(value: float)
get "weirdness"(): float
set "weirdness"(value: float)
get "climateSampler"(): $Climate$Sampler
get "worldDimension"(): $ResourceKey<$Level>
get "worldSeed"(): long
get "x"(): integer
get "y"(): integer
get "z"(): integer
}
}

declare module "com.github.L_Ender.lionfishapi.server.event.AnimationEvent" {
import { $Animation } from "com.github.L_Ender.lionfishapi.server.animation.Animation"
import { $IAnimatedEntity } from "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $AnimationEvent<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $Event {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getAnimation"(): $Animation
public "getEntity"(): T
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "animation"(): $Animation
get "entity"(): T
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.FeaturePoolElementAccessor" {
import { $Holder } from "net.minecraft.core.Holder"
import { $PlacedFeature } from "net.minecraft.world.level.levelgen.placement.PlacedFeature"

export interface $FeaturePoolElementAccessor {
"getFeature"(): $Holder<$PlacedFeature>
get "feature"(): $Holder<$PlacedFeature>
}

export namespace $FeaturePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $FeaturePoolElementAccessor$$Static implements $FeaturePoolElementAccessor {
}
}

declare module "com.github.alexthe666.citadel.animation.AnimationEvent$Tick" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatedEntity, $IAnimatedEntity$$Type } from "com.github.alexthe666.citadel.animation.IAnimatedEntity"
import { $Animation$$Type } from "com.github.alexthe666.citadel.animation.Animation"
import { $AnimationEvent } from "com.github.alexthe666.citadel.animation.AnimationEvent"

export class $AnimationEvent$Tick<T extends ($Entity & $IAnimatedEntity) = ($Entity & $IAnimatedEntity)> extends $AnimationEvent<T> {
constructor()
constructor(t0: T, animation1: $Animation$$Type, int2: integer)

public "getTick"(): integer
get "tick"(): integer
}
}

declare module "com.github.raverbury.aggroindicator.util.BrainAccess" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $BrainAccess {
"aggroIndicator$setBrainOwner"(livingEntity0: $LivingEntity$$Type): void
}

export namespace $BrainAccess {
const probejs$$marker: never
}
export abstract class $BrainAccess$$Static implements $BrainAccess {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventRenderSplashText$Post" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $EventRenderSplashText } from "com.github.alexthe666.citadel.client.event.EventRenderSplashText"

export class $EventRenderSplashText$Post extends $EventRenderSplashText {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float)

}
}

declare module "com.github.alexthe666.citadel.server.tick.modifier.TickRateModifier" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TickRateModifierType, $TickRateModifierType$$Type } from "com.github.alexthe666.citadel.server.tick.modifier.TickRateModifierType"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $TickRateModifier {
constructor(tickRateModifierType0: $TickRateModifierType$$Type, int1: integer, float2: float)
constructor(compoundTag0: $CompoundTag$$Type)

public "appliesTo"(level0: $Level$$Type, double1: double, double2: double, double3: double): boolean
public "doRemove"(): boolean
public static "fromTag"(compoundTag0: $CompoundTag$$Type): $TickRateModifier
public "getMaxDuration"(): float
public "getTickRateMultiplier"(): float
public "getType"(): $TickRateModifierType
public "isGlobal"(): boolean
public "masterTick"(): void
public "setMaxDuration"(float0: float): void
public "setTickRateMultiplier"(float0: float): void
public "toTag"(): $CompoundTag
get "maxDuration"(): float
get "tickRateMultiplier"(): float
get "type"(): $TickRateModifierType
get "global"(): boolean
set "maxDuration"(value: float)
set "tickRateMultiplier"(value: float)
}
}

declare module "com.github.alexthe666.citadel.animation.Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {
public static "create"(int0: integer): $Animation
/** @deprecated */
public static "create"(int0: integer, int1: integer): $Animation
public "getDuration"(): integer
/** @deprecated */
public "getID"(): integer
get "duration"(): integer
get "iD"(): integer
}
}

declare module "com.github.L_Ender.lionfishapi.server.animation.IAnimatedEntity" {
import { $Animation, $Animation$$Type } from "com.github.L_Ender.lionfishapi.server.animation.Animation"

export interface $IAnimatedEntity {
"getAnimation"(): $Animation
"getAnimationTick"(): integer
"getAnimations"(): $Animation[]
"setAnimation"(animation0: $Animation$$Type): void
"setAnimationTick"(int0: integer): void
get "animation"(): $Animation
get "animationTick"(): integer
get "animations"(): $Animation[]
set "animation"(value: $Animation$$Type)
set "animationTick"(value: integer)
}

export namespace $IAnimatedEntity {
const NO_ANIMATION: $Animation
}
export abstract class $IAnimatedEntity$$Static implements $IAnimatedEntity {
static readonly "NO_ANIMATION": $Animation

}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.EntityDropChanceAccessor" {
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"

export interface $EntityDropChanceAccessor {
"ac_dropCustomDeathLoot"(damageSource0: $DamageSource$$Type, int1: integer, boolean2: boolean): void
"ac_getEquipmentDropChance"(equipmentSlot0: $EquipmentSlot$$Type): float
"ac_setDropChance"(equipmentSlot0: $EquipmentSlot$$Type, float1: float): void
}

export namespace $EntityDropChanceAccessor {
const probejs$$marker: never
}
export abstract class $EntityDropChanceAccessor$$Static implements $EntityDropChanceAccessor {
}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.WatcherPossessionAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WatcherPossessionAccessor {
"isPossessedByWatcher"(): boolean
"setPossessedByWatcher"(boolean0: boolean): void
get "possessedByWatcher"(): boolean
set "possessedByWatcher"(value: boolean)
}

export namespace $WatcherPossessionAccessor {
const probejs$$marker: never
}
export abstract class $WatcherPossessionAccessor$$Static implements $WatcherPossessionAccessor {
}
}

declare module "com.github.alexmodguy.alexscaves.client.render.entity.LivingEntityRendererAccessor" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $LivingEntityRendererAccessor {
"scaleForHologram"(livingEntity0: $LivingEntity$$Type, poseStack1: $PoseStack$$Type, float2: float): void
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityRendererAccessor$$Static implements $LivingEntityRendererAccessor {
}
}

declare module "com.github.alexthe666.citadel.client.event.EventRenderSplashText$Pre" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $EventRenderSplashText } from "com.github.alexthe666.citadel.client.event.EventRenderSplashText"

export class $EventRenderSplashText$Pre extends $EventRenderSplashText {
constructor()
constructor(string0: string, guiGraphics1: $GuiGraphics$$Type, float2: float, int3: integer)

public "getSplashTextColor"(): integer
public "setSplashTextColor"(int0: integer): void
get "splashTextColor"(): integer
set "splashTextColor"(value: integer)
}
}

declare module "com.github.exopandora.shouldersurfing.mixinducks.CameraDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraDuck {
"shouldersurfing$getZRot"(): float
"shouldersurfing$setZRot"(float0: float): void
}

export namespace $CameraDuck {
const probejs$$marker: never
}
export abstract class $CameraDuck$$Static implements $CameraDuck {
}
}

declare module "com.github.L_Ender.lionfishapi.server.animation.Animation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Animation {
public static "create"(int0: integer): $Animation
/** @deprecated */
public static "create"(int0: integer, int1: integer): $Animation
public "doesLoop"(): boolean
public "getDuration"(): integer
/** @deprecated */
public "getID"(): integer
public "setLooping"(boolean0: boolean): $Animation
get "duration"(): integer
get "iD"(): integer
set "looping"(value: boolean)
}
}

declare module "com.github.alexthe666.citadel.client.event.EventLivingRenderer$AccessToBufferSource" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EventLivingRenderer } from "com.github.alexthe666.citadel.client.event.EventLivingRenderer"
import { $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EventLivingRenderer$AccessToBufferSource extends $EventLivingRenderer {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, entityModel1: $EntityModel$$Type, poseStack2: $PoseStack$$Type, float3: float, float4: float, multiBufferSource5: $MultiBufferSource$$Type, int6: integer)

public "getBodyYRot"(): float
public "getBufferSource"(): $MultiBufferSource
public "getPackedLight"(): integer
get "bodyYRot"(): float
get "bufferSource"(): $MultiBufferSource
get "packedLight"(): integer
}
}

declare module "com.github.alexmodguy.alexscaves.server.entity.util.MagneticEntityAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"

export interface $MagneticEntityAccessor {
"canChangeDirection"(): boolean
"getAttachmentProgress"(float0: float): float
"getMagneticAttachmentFace"(): $Direction
"getMagneticDeltaX"(): float
"getMagneticDeltaY"(): float
"getMagneticDeltaZ"(): float
"getPrevMagneticAttachmentFace"(): $Direction
"postMagnetJump"(): void
"setMagneticAttachmentFace"(direction0: $Direction$$Type): void
"setMagneticDeltaX"(float0: float): void
"setMagneticDeltaY"(float0: float): void
"setMagneticDeltaZ"(float0: float): void
"stepOnMagnetBlock"(blockPos0: $BlockPos$$Type): void
get "magneticAttachmentFace"(): $Direction
get "magneticDeltaX"(): float
get "magneticDeltaY"(): float
get "magneticDeltaZ"(): float
get "prevMagneticAttachmentFace"(): $Direction
set "magneticAttachmentFace"(value: $Direction$$Type)
set "magneticDeltaX"(value: float)
set "magneticDeltaY"(value: float)
set "magneticDeltaZ"(value: float)
}

export namespace $MagneticEntityAccessor {
const probejs$$marker: never
}
export abstract class $MagneticEntityAccessor$$Static implements $MagneticEntityAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.StructureTemplatePoolAccessor" {
import { $List } from "java.util.List"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor {
"getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
get "rawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {
}
}

declare module "com.github.L_Ender.cataclysm.mixin.accessor.ListPoolElementAccessor" {
import { $List } from "java.util.List"
import { $StructurePoolElement } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $ListPoolElementAccessor {
"getElements"(): $List<$StructurePoolElement>
get "elements"(): $List<$StructurePoolElement>
}

export namespace $ListPoolElementAccessor {
const probejs$$marker: never
}
export abstract class $ListPoolElementAccessor$$Static implements $ListPoolElementAccessor {
}
}

