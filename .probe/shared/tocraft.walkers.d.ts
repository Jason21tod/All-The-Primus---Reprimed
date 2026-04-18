declare module "tocraft.walkers.mixin.accessor.AllayAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AllayAccessor {
"getHoldingItemAnimationTicks"(): float
"setHoldingItemAnimationTicks"(float0: float): void
"setHoldingItemAnimationTicks0"(float0: float): void
get "holdingItemAnimationTicks"(): float
set "holdingItemAnimationTicks"(value: float)
set "holdingItemAnimationTicks0"(value: float)
}

export namespace $AllayAccessor {
const probejs$$marker: never
}
export abstract class $AllayAccessor$$Static implements $AllayAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.DolphinAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DolphinAccessor {
}

export namespace $DolphinAccessor {
const probejs$$marker: never
}
export abstract class $DolphinAccessor$$Static implements $DolphinAccessor {
}
}

declare module "tocraft.walkers.mixin.ThreadedAnvilChunkStorageAccessor" {
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ThreadedAnvilChunkStorageAccessor {
"getEntityMap"(): $Int2ObjectMap<any>
get "entityMap"(): $Int2ObjectMap<any>
}

export namespace $ThreadedAnvilChunkStorageAccessor {
const probejs$$marker: never
}
export abstract class $ThreadedAnvilChunkStorageAccessor$$Static implements $ThreadedAnvilChunkStorageAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.SquidEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SquidEntityAccessor {
"getRotateSpeed"(): float
"getSpeed"(): float
"setRotateSpeed"(float0: float): void
"setSpeed"(float0: float): void
get "rotateSpeed"(): float
get "speed"(): float
set "rotateSpeed"(value: float)
set "speed"(value: float)
}

export namespace $SquidEntityAccessor {
const probejs$$marker: never
}
export abstract class $SquidEntityAccessor$$Static implements $SquidEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.client.accessor.LivingEntityRendererAccessor" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $LivingEntityRendererAccessor {
"callGetRenderType"(livingEntity0: $LivingEntity$$Type, boolean1: boolean, boolean2: boolean, boolean3: boolean): $RenderType
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityRendererAccessor$$Static implements $LivingEntityRendererAccessor {
}
}

declare module "tocraft.walkers.mixin.EntityTrackerAccessor" {
import { $ServerPlayerConnection } from "net.minecraft.server.network.ServerPlayerConnection"
import { $Set } from "java.util.Set"

export interface $EntityTrackerAccessor {
"getSeenBy"(): $Set<$ServerPlayerConnection>
get "seenBy"(): $Set<$ServerPlayerConnection>
}

export namespace $EntityTrackerAccessor {
const probejs$$marker: never
}
export abstract class $EntityTrackerAccessor$$Static implements $EntityTrackerAccessor {
}
}

declare module "tocraft.walkers.impl.DimensionsRefresher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DimensionsRefresher {
"shape_refreshDimensions"(): void
}

export namespace $DimensionsRefresher {
const probejs$$marker: never
}
export abstract class $DimensionsRefresher$$Static implements $DimensionsRefresher {
}
}

declare module "tocraft.walkers.mixin.accessor.ParrotEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParrotEntityAccessor {
"callCalculateFlapping"(): void
}

export namespace $ParrotEntityAccessor {
const probejs$$marker: never
}
export abstract class $ParrotEntityAccessor$$Static implements $ParrotEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.client.accessor.EntityShadowAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityShadowAccessor {
"getShadowRadius"(): float
get "shadowRadius"(): float
}

export namespace $EntityShadowAccessor {
const probejs$$marker: never
}
export abstract class $EntityShadowAccessor$$Static implements $EntityShadowAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.FoxEntityAccessor" {
import { $Fox$Type$$Type } from "net.minecraft.world.entity.animal.Fox$Type"

export interface $FoxEntityAccessor {
"callSetVariant"(type0: $Fox$Type$$Type): void
}

export namespace $FoxEntityAccessor {
const probejs$$marker: never
}
export abstract class $FoxEntityAccessor$$Static implements $FoxEntityAccessor {
}
}

declare module "tocraft.walkers.api.variant.ShapeType" {
import { $List } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component } from "net.minecraft.network.chat.Component"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ShapeType<T extends $LivingEntity = $LivingEntity> {
constructor(type: $EntityType$$Type<T>, variantData: integer)
constructor(type: $EntityType$$Type<T>)
constructor(entity: T)

public "create"(world: $Level$$Type): T
public "create"(world: $Level$$Type, player: $Player$$Type): T
public static "createTooltipText"<L extends $LivingEntity>(entity: L): $Component
public static "from"<Z extends $LivingEntity>(entityType: $EntityType$$Type<Z>, variant: integer): $ShapeType<Z>
public static "from"<Z extends $LivingEntity>(entityType: $EntityType$$Type<Z>): $ShapeType<Z>
public static "from"<Z extends $LivingEntity>(entity: Z): $ShapeType<Z>
public static "from"(compound: $CompoundTag$$Type): $ShapeType<any>
public static "getAllTypes"<T extends $LivingEntity>(entityType: $EntityType$$Type<T>): $List<$ShapeType<T>>
public static "getAllTypes"(world: $Level$$Type): $List<$ShapeType<any>>
public static "getDefaultVariantData"<Z extends $LivingEntity>(type: $EntityType$$Type<Z>): integer
public "getEntityType"(): $EntityType<$LivingEntity>
public "getVariantData"(): integer
public "writeCompound"(): $CompoundTag
get "entityType"(): $EntityType<$LivingEntity>
get "variantData"(): integer
}
}

declare module "tocraft.walkers.mixin.accessor.AbstractHorseAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractHorseAccessor {
"setEatAnim"(float0: float): void
"setEatAnimO"(float0: float): void
"setMouthAnim"(float0: float): void
"setMouthAnimO"(float0: float): void
"setStandAnim"(float0: float): void
"setStandAnimO"(float0: float): void
set "eatAnim"(value: float)
set "eatAnimO"(value: float)
set "mouthAnim"(value: float)
set "mouthAnimO"(value: float)
set "standAnim"(value: float)
set "standAnimO"(value: float)
}

export namespace $AbstractHorseAccessor {
const probejs$$marker: never
}
export abstract class $AbstractHorseAccessor$$Static implements $AbstractHorseAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.AxolotlEntityAccessor" {
import { $Axolotl$Variant$$Type } from "net.minecraft.world.entity.animal.axolotl.Axolotl$Variant"

export interface $AxolotlEntityAccessor {
"callSetVariant"(variant0: $Axolotl$Variant$$Type): void
}

export namespace $AxolotlEntityAccessor {
const probejs$$marker: never
}
export abstract class $AxolotlEntityAccessor$$Static implements $AxolotlEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.LivingEntityAccessor" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export interface $LivingEntityAccessor {
"callCalculateFallDamage"(float0: float, float1: float): integer
"callGetDeathSound"(): $SoundEvent
"callGetHurtSound"(damageSource0: $DamageSource$$Type): $SoundEvent
"callGetSoundVolume"(): float
"callGetVoicePitch"(): float
"callPlayBlockFallSound"(): void
"callSetLivingEntityFlag"(int0: integer, boolean1: boolean): void
"callUpdatingUsingItem"(): void
"getSwimAmount"(): float
"getSwimAmountO"(): float
"isJumping"(): boolean
"setSwimAmount"(float0: float): void
"setSwimAmountO"(float0: float): void
get "swimAmount"(): float
get "swimAmountO"(): float
get "jumping"(): boolean
set "swimAmount"(value: float)
set "swimAmountO"(value: float)
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.IronGolemEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IronGolemEntityAccessor {
"getAttackTicksLeft"(): integer
"setAttackTicksLeft"(int0: integer): void
get "attackTicksLeft"(): integer
set "attackTicksLeft"(value: integer)
}

export namespace $IronGolemEntityAccessor {
const probejs$$marker: never
}
export abstract class $IronGolemEntityAccessor$$Static implements $IronGolemEntityAccessor {
}
}

declare module "tocraft.walkers.impl.SonicBoomUser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SonicBoomUser {
"shape$ability_startSonicBoom"(): void
}

export namespace $SonicBoomUser {
const probejs$$marker: never
}
export abstract class $SonicBoomUser$$Static implements $SonicBoomUser {
}
}

declare module "tocraft.walkers.mixin.accessor.MobEntityAccessor" {
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"

export interface $MobEntityAccessor {
"callGetAmbientSound"(): $SoundEvent
}

export namespace $MobEntityAccessor {
const probejs$$marker: never
}
export abstract class $MobEntityAccessor$$Static implements $MobEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.client.accessor.LimbAnimatorAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LimbAnimatorAccessor {
"getPrevSpeed"(): float
"setPos"(float0: float): void
"setPrevSpeed"(float0: float): void
get "prevSpeed"(): float
set "pos"(value: float)
set "prevSpeed"(value: float)
}

export namespace $LimbAnimatorAccessor {
const probejs$$marker: never
}
export abstract class $LimbAnimatorAccessor$$Static implements $LimbAnimatorAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.EntityAccessor" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export interface $EntityAccessor {
"callGetEncodeId"(): string
"setPassengers"(immutableList0: $ImmutableList$$Type<$Entity$$Type>): void
"setTouchingWater"(boolean0: boolean): void
"setVehicle"(entity0: $Entity$$Type): void
"shape_callPlayStepSound"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): void
"shape_callSetFlag"(int0: integer, boolean1: boolean): void
set "passengers"(value: $ImmutableList$$Type<$Entity$$Type>)
set "touchingWater"(value: boolean)
set "vehicle"(value: $Entity$$Type)
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.CreeperEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreeperEntityAccessor {
"setSwell"(int0: integer): void
set "swell"(value: integer)
}

export namespace $CreeperEntityAccessor {
const probejs$$marker: never
}
export abstract class $CreeperEntityAccessor$$Static implements $CreeperEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.PufferfishAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PufferfishAccessor {
"getDeflateTimer"(): integer
"getInflateCounter"(): integer
"setDeflateTimer"(int0: integer): void
"setInflateCounter"(int0: integer): void
get "deflateTimer"(): integer
get "inflateCounter"(): integer
set "deflateTimer"(value: integer)
set "inflateCounter"(value: integer)
}

export namespace $PufferfishAccessor {
const probejs$$marker: never
}
export abstract class $PufferfishAccessor$$Static implements $PufferfishAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.RavagerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RavagerEntityAccessor {
"getAttackTick"(): integer
"setAttackTick"(int0: integer): void
get "attackTick"(): integer
set "attackTick"(value: integer)
}

export namespace $RavagerEntityAccessor {
const probejs$$marker: never
}
export abstract class $RavagerEntityAccessor$$Static implements $RavagerEntityAccessor {
}
}

declare module "tocraft.walkers.impl.PlayerDataProvider" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ShapeType, $ShapeType$$Type } from "tocraft.walkers.api.variant.ShapeType"

export interface $PlayerDataProvider {
"walkers$get2ndShape"(): $ShapeType<any>
"walkers$getAbilityCooldown"(): integer
"walkers$getCurrentShape"(): $LivingEntity
"walkers$getRemainingHostilityTime"(): integer
"walkers$set2ndShape"(shapeType0: $ShapeType$$Type<any>): void
"walkers$setAbilityCooldown"(int0: integer): void
"walkers$setCurrentShape"(livingEntity0: $LivingEntity$$Type): void
"walkers$setRemainingHostilityTime"(int0: integer): void
"walkers$updateShapes"(livingEntity0: $LivingEntity$$Type): void
}

export namespace $PlayerDataProvider {
const probejs$$marker: never
}
export abstract class $PlayerDataProvider$$Static implements $PlayerDataProvider {
}
}

declare module "tocraft.walkers.mixin.accessor.ShulkerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShulkerAccessor {
"callGetRawPeekAmount"(): integer
"callOnPeekAmountChange"(): void
"callSetRawPeekAmount"(int0: integer): void
"callUpdatePeekAmount"(): boolean
}

export namespace $ShulkerAccessor {
const probejs$$marker: never
}
export abstract class $ShulkerAccessor$$Static implements $ShulkerAccessor {
}
}

declare module "tocraft.walkers.impl.ShapeDataProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShapeDataProvider {
"walkers$ShapedPlayer"(int0: integer): void
"walkers$shapedPlayer"(): integer
}

export namespace $ShapeDataProvider {
const probejs$$marker: never
}
export abstract class $ShapeDataProvider$$Static implements $ShapeDataProvider {
}
}

declare module "tocraft.walkers.mixin.accessor.SlimeEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlimeEntityAccessor {
"callSetSize"(int0: integer, boolean1: boolean): void
}

export namespace $SlimeEntityAccessor {
const probejs$$marker: never
}
export abstract class $SlimeEntityAccessor$$Static implements $SlimeEntityAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.SheepAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SheepAccessor {
"setEatAnimationTick"(int0: integer): void
set "eatAnimationTick"(value: integer)
}

export namespace $SheepAccessor {
const probejs$$marker: never
}
export abstract class $SheepAccessor$$Static implements $SheepAccessor {
}
}

declare module "tocraft.walkers.impl.NearbySongAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NearbySongAccessor {
"shape_isNearbySongPlaying"(): boolean
}

export namespace $NearbySongAccessor {
const probejs$$marker: never
}
export abstract class $NearbySongAccessor$$Static implements $NearbySongAccessor {
}
}

declare module "tocraft.walkers.mixin.accessor.BiomeAccessor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $BiomeAccessor {
"callGetTemperature"(blockPos0: $BlockPos$$Type): float
}

export namespace $BiomeAccessor {
const probejs$$marker: never
}
export abstract class $BiomeAccessor$$Static implements $BiomeAccessor {
}
}

