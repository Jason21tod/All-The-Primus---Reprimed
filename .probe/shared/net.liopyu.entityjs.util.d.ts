declare module "net.liopyu.entityjs.util.ContextUtils$ArrowPlayerContext" {
import { $AbstractArrow, $AbstractArrow$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextUtils$ArrowPlayerContext {
/** The abstract arrow entity */
readonly "entity": $AbstractArrow
/** The player */
readonly "player": $Player

constructor(player: $Player$$Type, entity: $AbstractArrow$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RenderContext" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $GeoEntityRenderer, $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$RenderContext<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
/** The buffer source for rendering */
readonly "bufferSource": $MultiBufferSource
/** The animatable entity being rendered */
readonly "entity": T
/** The yaw of the entity */
readonly "entityYaw": float
/** The packed light information */
readonly "packedLight": integer
/** The partial tick */
readonly "partialTick": float
/** The pose stack for transformations */
readonly "poseStack": $PoseStack
/** The entity's renderer */
readonly "renderer": $GeoEntityRenderer<T>

constructor(renderer: $GeoEntityRenderer$$Type<T>, entity: T, entityYaw: float, partialTick: float, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, packedLight: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$MayInteractContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ContextUtils$MayInteractContext {
/** The living entity involved in the interaction */
readonly "entity": $LivingEntity
/** The level where the interaction may occur */
readonly "level": $Level
/** The position where the interaction may occur */
readonly "pos": $BlockPos

constructor(level: $Level$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.implementation.MobAccessor" {
import { $MoveControl$$Type } from "net.minecraft.world.entity.ai.control.MoveControl"
import { $PathNavigation$$Type } from "net.minecraft.world.entity.ai.navigation.PathNavigation"

export interface $MobAccessor {
"setMoveControl"(control: $MoveControl$$Type): void
"setNavigation"(nav: $PathNavigation$$Type): void
set "moveControl"(value: $MoveControl$$Type)
set "navigation"(value: $PathNavigation$$Type)
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ArrowEntityHitContext" {
import { $AbstractArrow, $AbstractArrow$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $EntityHitResult, $EntityHitResult$$Type } from "net.minecraft.world.phys.EntityHitResult"

export class $ContextUtils$ArrowEntityHitContext {
/** The abstract arrow entity */
readonly "entity": $AbstractArrow
/** The result of the hit on the entity */
readonly "result": $EntityHitResult

constructor(result: $EntityHitResult$$Type, entity: $AbstractArrow$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$CollidingEntityContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$CollidingEntityContext {
/** The entity colliding */
readonly "collidingEntity": $Entity
/** The entity getting collided with */
readonly "entity": $LivingEntity

constructor(entity: $LivingEntity$$Type, collidingEntity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PassengerEntityContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$PassengerEntityContext {
readonly "entity": $LivingEntity
readonly "passenger": $Entity

constructor(passenger: $Entity$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.EntityJSUtils" {
import { $WaterBoundPathNavigation } from "net.minecraft.world.entity.ai.navigation.WaterBoundPathNavigation"
import { $JumpControlJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.JumpControlJSBuilder"
import { $LookControlJS } from "net.liopyu.entityjs.util.ai.LookControlJS"
import { $GroundPathNavigation } from "net.minecraft.world.entity.ai.navigation.GroundPathNavigation"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MoveControlJS } from "net.liopyu.entityjs.util.ai.MoveControlJS"
import { $JumpControlJS } from "net.liopyu.entityjs.util.ai.JumpControlJS"
import { $AmphibiousPathNavigation } from "net.minecraft.world.entity.ai.navigation.AmphibiousPathNavigation"
import { $WallClimberNavigation } from "net.minecraft.world.entity.ai.navigation.WallClimberNavigation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MoveControlJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.MoveControlJSBuilder"
import { $FlyingPathNavigation } from "net.minecraft.world.entity.ai.navigation.FlyingPathNavigation"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $LookControlJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.LookControlJSBuilder"
import { $BuilderBase, $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export interface $EntityJSUtils {
}

export namespace $EntityJSUtils {
function createAmphibiousPathNavigation(pMob: $Mob$$Type, pLevel: $Level$$Type): $AmphibiousPathNavigation
function createFlyingPathNavigation(pMob: $Mob$$Type, pLevel: $Level$$Type): $FlyingPathNavigation
function createGroundPathNavigation(pMob: $Mob$$Type, pLevel: $Level$$Type): $GroundPathNavigation
function createJumpControl(pMob: $Mob$$Type, consumer: $Consumer$$Type<$JumpControlJSBuilder$$Type>): $JumpControlJS
function createLookControl(pMob: $Mob$$Type, consumer: $Consumer$$Type<$LookControlJSBuilder$$Type>): $LookControlJS
function createMoveControl(pMob: $Mob$$Type, consumer: $Consumer$$Type<$MoveControlJSBuilder$$Type>): $MoveControlJS
function createWallClimberNavigation(pMob: $Mob$$Type, pLevel: $Level$$Type): $WallClimberNavigation
function createWaterBoundPathNavigation(pMob: $Mob$$Type, pLevel: $Level$$Type): $WaterBoundPathNavigation
function getEntityBuilder<T extends $BuilderBase<any>>(type: $EntityType$$Type<any>): T
}
export abstract class $EntityJSUtils$$Static implements $EntityJSUtils {
/** Amphibious entity path navigation */
static "createAmphibiousPathNavigation"(pMob: $Mob$$Type, pLevel: $Level$$Type): $AmphibiousPathNavigation
/** Flying entity path navigation */
static "createFlyingPathNavigation"(pMob: $Mob$$Type, pLevel: $Level$$Type): $FlyingPathNavigation
/** Ground entity path navigation */
static "createGroundPathNavigation"(pMob: $Mob$$Type, pLevel: $Level$$Type): $GroundPathNavigation
/** Creates a custom Jump Control builder and returns it. */
static "createJumpControl"(pMob: $Mob$$Type, consumer: $Consumer$$Type<$JumpControlJSBuilder$$Type>): $JumpControlJS
/** Creates a custom Look Control builder and returns it. */
static "createLookControl"(pMob: $Mob$$Type, consumer: $Consumer$$Type<$LookControlJSBuilder$$Type>): $LookControlJS
/** Creates a custom Move Control builder and returns it. */
static "createMoveControl"(pMob: $Mob$$Type, consumer: $Consumer$$Type<$MoveControlJSBuilder$$Type>): $MoveControlJS
/** Wall climbing entity path navigation */
static "createWallClimberNavigation"(pMob: $Mob$$Type, pLevel: $Level$$Type): $WallClimberNavigation
/** Water bound entity path navigation */
static "createWaterBoundPathNavigation"(pMob: $Mob$$Type, pLevel: $Level$$Type): $WaterBoundPathNavigation
/** Helper method to get the entity's builder for the type. */
static "getEntityBuilder"<T extends $BuilderBase<any>>(type: $EntityType$$Type<any>): T
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PreRenderContext" {
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$PreRenderContext<T = any> {
/** The baked model */
readonly "bakedModel": $BakedGeoModel
/** The vertex consumer buffer */
readonly "buffer": $VertexConsumer
/** The buffer source */
readonly "bufferSource": $MultiBufferSource
/** The animatable entity */
readonly "entity": T
/** The packed light */
readonly "packedLight": integer
/** The packed overlay */
readonly "packedOverlay": integer
/** The partial tick */
readonly "partialTick": float
/** The PoseStack */
readonly "poseStack": $PoseStack
/** The render type */
readonly "renderType": $RenderType

constructor(poseStack: $PoseStack$$Type, entity: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RotationTowardsContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ContextUtils$RotationTowardsContext {
readonly "from": float
readonly "maxDelta": float
readonly "to": float

constructor(from: float, to: float, maxDelta: float)

}
}

declare module "net.liopyu.entityjs.util.implementation.IAnimationControllerJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAnimationControllerJS {
"getCurrentAnimationTick"(): double
get "currentAnimationTick"(): double
}

export namespace $IAnimationControllerJS {
const probejs$$marker: never
}
export abstract class $IAnimationControllerJS$$Static implements $IAnimationControllerJS {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$CollidingProjectileEntityContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$CollidingProjectileEntityContext {
/** The colliding entity */
readonly "entity": $Entity
/** The the target being collided with */
readonly "target": $Entity

constructor(entity: $Entity$$Type, target: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PassengerVehicleContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$PassengerVehicleContext {
readonly "entity": $LivingEntity
readonly "vehicle": $Entity

constructor(vehicle: $Entity$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$IsWalkableContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ContextUtils$IsWalkableContext {
readonly "pRelativeX": float
readonly "pRelativeZ": float

constructor(pRelativeX: float, pRelativeZ: float)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PartHurtContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $PartEntity, $PartEntity$$Type } from "net.minecraftforge.entity.PartEntity"

export class $ContextUtils$PartHurtContext<T extends $LivingEntity = $LivingEntity> {
/** The source of the damage */
readonly "amount": float
/** The parent of the part entity */
readonly "entity": $LivingEntity
/** The part of the entity that was hurt */
readonly "part": $PartEntity<T>
/** The source of the damage */
readonly "source": $DamageSource

constructor(part: $PartEntity$$Type<T>, source: $DamageSource$$Type, amount: float, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ThunderHitContext" {
import { $LightningBolt, $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ContextUtils$ThunderHitContext {
/** The living entity affected by the lightning strike */
readonly "entity": $LivingEntity
/** The server level where the lightning strike occurred */
readonly "level": $ServerLevel
/** The lightning bolt that struck */
readonly "lightningBolt": $LightningBolt

constructor(level: $ServerLevel$$Type, lightningBolt: $LightningBolt$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ApplyRotationsContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $GeoEntityRenderer, $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$ApplyRotationsContext<T extends $LivingEntity = $LivingEntity> {
readonly "ageInTicks": float
readonly "entity": T
readonly "partialTick": float
readonly "poseStack": $PoseStack
readonly "renderer": $GeoEntityRenderer
readonly "rotationYaw": float

constructor(renderer: $GeoEntityRenderer$$Type, animatable: T, poseStack: $PoseStack$$Type, ageInTicks: float, rotationYaw: float, partialTick: float)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$CanTrampleContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $ContextUtils$CanTrampleContext {
/** The living entity attempting to trample the block */
readonly "entity": $LivingEntity
/** The distance fallen before trampling (if applicable) */
readonly "fallDistance": float
/** The position of the block being considered for trampling */
readonly "pos": $BlockPos
/** The block state at the position */
readonly "state": $BlockState

constructor(state: $BlockState$$Type, pos: $BlockPos$$Type, fallDistance: float, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityFluidStateContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"

export class $ContextUtils$EntityFluidStateContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The fluid state associated with the living entity */
readonly "fluidState": $FluidState

constructor(entity: $LivingEntity$$Type, fluidState: $FluidState$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$LineOfSightContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$LineOfSightContext {
/** The living entity associated with the target entity */
readonly "entity": $Entity
/** The target entity */
readonly "targetEntity": $Entity

constructor(targetEntity: $Entity$$Type, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$CalculateFallDamageContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$CalculateFallDamageContext {
/** The multiplier applied to calculate fall damage */
readonly "damageMultiplier": float
/** The living entity experiencing fall damage calculation */
readonly "entity": $LivingEntity
/** The height from which the entity is falling */
readonly "fallHeight": float

constructor(fallHeight: float, damageMultiplier: float, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$SetWantedPositionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ContextUtils$SetWantedPositionContext {
readonly "speedModifier": double
readonly "wantedX": double
readonly "wantedY": double
readonly "wantedZ": double

constructor(wantedX: double, wantedY: double, wantedZ: double, speedModifier: double)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$LevelAnimalContext" {
import { $Animal, $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ContextUtils$LevelAnimalContext {
/** The main animal entity */
readonly "entity": $Animal
/** The server level where the animals reside */
readonly "level": $ServerLevel
/** The mate animal entity */
readonly "mate": $Animal

constructor(mate: $Animal$$Type, entity: $Animal$$Type, level: $ServerLevel$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$OnEffectContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectInstance, $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $ContextUtils$OnEffectContext {
/** The mob effect instance applied to the living entity */
readonly "effect": $MobEffectInstance
/** The living entity affected by the mob effect */
readonly "entity": $LivingEntity

constructor(effect: $MobEffectInstance$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$MobInteractContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextUtils$MobInteractContext {
/** The living entity being interacted with */
readonly "entity": $LivingEntity
/** The hand used for interaction */
readonly "hand": $InteractionHand
/** The player interacting with the living entity */
readonly "player": $Player

constructor(entity: $LivingEntity$$Type, player: $Player$$Type, hand: $InteractionHand$$Type)

}
}

declare module "net.liopyu.entityjs.util.implementation.EACAccess" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $AttributeSupplier } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier"
import { $Map } from "java.util.Map"

export interface $EACAccess {
"getMap"(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>
get "map"(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>
}

export namespace $EACAccess {
const probejs$$marker: never
}
export abstract class $EACAccess$$Static implements $EACAccess {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$FinalRenderContext" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoEntityRenderer, $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$FinalRenderContext<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
readonly "alpha": float
readonly "blue": float
readonly "buffer": $VertexConsumer
readonly "bufferSource": $MultiBufferSource
readonly "entity": T
readonly "green": float
readonly "model": $BakedGeoModel
readonly "packedLight": integer
readonly "packedOverlay": integer
readonly "partialTick": float
readonly "poseStack": $PoseStack
readonly "red": float
readonly "renderer": $GeoEntityRenderer<T>

constructor(renderer: $GeoEntityRenderer$$Type<T>, poseStack: $PoseStack$$Type, animatable: T, model: $BakedGeoModel$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer, red: float, green: float, blue: float, alpha: float)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ItemBoneRenderContext" {
import { $GeoBone, $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BlockAndItemGeoLayer, $BlockAndItemGeoLayer$$Type } from "software.bernie.geckolib.renderer.layer.BlockAndItemGeoLayer"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$ItemBoneRenderContext<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
readonly "bone": $GeoBone
readonly "bufferSource": $MultiBufferSource
readonly "entity": T
readonly "item": $ItemStack
readonly "layer": $BlockAndItemGeoLayer<T>
readonly "packedLight": integer
readonly "packedOverlay": integer
readonly "partialTick": float
readonly "poseStack": $PoseStack

constructor(layer: $BlockAndItemGeoLayer$$Type<T>, poseStack: $PoseStack$$Type, bone: $GeoBone$$Type, stack: $ItemStack$$Type, animatable: T, bufferSource: $MultiBufferSource$$Type, partialTick: float, packedLight: integer, packedOverlay: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$GoalContext" {
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Goal, $Goal$$Type } from "net.minecraft.world.entity.ai.goal.Goal"

export class $ContextUtils$GoalContext {
/** The mob entity */
readonly "entity": $Mob
/** The goal from the mob's current goal list */
readonly "goal": $Goal

constructor(entity: $Mob$$Type, goal: $Goal$$Type)

}
}

declare module "net.liopyu.entityjs.util.implementation.ILivingEntityJS" {
import { $WrappedAnimatableEntity } from "net.liopyu.entityjs.entities.living.entityjs.WrappedAnimatableEntity"
import { $EntitySerializerType$$Type } from "net.liopyu.entityjs.util.EntitySerializerType"

export interface $ILivingEntityJS {
"addSyncedData"(type: $EntitySerializerType$$Type, key: string, value: any): void
"addSyncedData"(identifier: string, value: any): void
"getAnimatableEntity"(): $WrappedAnimatableEntity
"getSyncedData"<T>(identifier: string): T
"setSyncedData"(key: string, value: any): void
get "animatableEntity"(): $WrappedAnimatableEntity
}

export namespace $ILivingEntityJS {
const probejs$$marker: never
}
export abstract class $ILivingEntityJS$$Static implements $ILivingEntityJS {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityDamageContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$EntityDamageContext {
/** The amount of damage inflicted */
readonly "damageAmount": float
/** The source of the damage */
readonly "damageSource": $DamageSource
/** The living entity receiving the damage */
readonly "entity": $LivingEntity

constructor(damageSource: $DamageSource$$Type, damageAmount: float, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.implementation.IEntityJS" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEntityJS {
"isMoving"(): boolean
get "moving"(): boolean
}

export namespace $IEntityJS {
const probejs$$marker: never
}
export abstract class $IEntityJS$$Static implements $IEntityJS {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$VanillaArmorRenderContext" {
import { $GeoBone, $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemArmorGeoLayer, $ItemArmorGeoLayer$$Type } from "software.bernie.geckolib.renderer.layer.ItemArmorGeoLayer"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$VanillaArmorRenderContext<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
readonly "armorStack": $ItemStack
readonly "bone": $GeoBone
readonly "bufferSource": $MultiBufferSource
readonly "entity": T
readonly "modelPart": $ModelPart
readonly "packedLight": integer
readonly "packedOverlay": integer
readonly "partialTick": float
readonly "poseStack": $PoseStack
readonly "renderer": $ItemArmorGeoLayer<T>
readonly "slot": $EquipmentSlot

constructor(renderer: $ItemArmorGeoLayer$$Type<T>, poseStack: $PoseStack$$Type, animatable: T, bone: $GeoBone$$Type, slot: $EquipmentSlot$$Type, armorStack: $ItemStack$$Type, modelPart: $ModelPart$$Type, bufferSource: $MultiBufferSource$$Type, partialTick: float, packedLight: integer, packedOverlay: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$BreedableEntityContext" {
import { $AgeableMob, $AgeableMob$$Type } from "net.minecraft.world.entity.AgeableMob"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ContextUtils$BreedableEntityContext {
/** The entity who mated. */
readonly "entity": $AgeableMob
/** The Server Level */
readonly "level": $ServerLevel
/** The other parent the entity mated with. */
readonly "mate": $AgeableMob

constructor(entity: $AgeableMob$$Type, mate: $AgeableMob$$Type, level: $ServerLevel$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$HurtContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$HurtContext {
/** The source of the damage */
readonly "damageSource": $DamageSource
/** The living entity that was hurt */
readonly "entity": $LivingEntity

constructor(entity: $LivingEntity$$Type, damageSource: $DamageSource$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityAnimalContext" {
import { $Animal, $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"

export class $ContextUtils$EntityAnimalContext {
/** The main animal entity */
readonly "animal": $Animal
/** The other animal entity */
readonly "otherAnimal": $Animal

constructor(animal: $Animal$$Type, otherAnimal: $Animal$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ECollidingEntityContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$ECollidingEntityContext {
/** The entity colliding */
readonly "collidingEntity": $Entity
/** The entity getting collided with */
readonly "entity": $Entity

constructor(entity: $Entity$$Type, collidingEntity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.implementation.EventBasedSpawnModifier$BiomeSpawn" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List, $List$$Type } from "java.util.List"
import { $Either, $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $MobSpawnSettings$SpawnerData } from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import { $Record } from "java.lang.Record"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $EventBasedSpawnModifier$BiomeSpawn extends $Record {
constructor(biomes: $List$$Type<$Either$$Type<$ResourceLocation$$Type, $TagKey$$Type<$Biome$$Type>>>, spawnerData: $Supplier$$Type<$MobSpawnSettings$SpawnerData>)

public "biomes"(): $List<$Either<$ResourceLocation, $TagKey<$Biome>>>
public "spawnerData"(): $Supplier<$MobSpawnSettings$SpawnerData>
}
}

declare module "net.liopyu.entityjs.util.ai.Behaviors" {
import { $InteractWithDoor } from "net.minecraft.world.entity.ai.behavior.InteractWithDoor"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ForceUnmount } from "net.minecraft.world.entity.ai.behavior.warden.ForceUnmount"
import { $LookAtTargetSink } from "net.minecraft.world.entity.ai.behavior.LookAtTargetSink"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $AgeableMob } from "net.minecraft.world.entity.AgeableMob"
import { $Function$$Type } from "java.util.function.Function"
import { $PrepareRamNearestTarget } from "net.minecraft.world.entity.ai.behavior.PrepareRamNearestTarget"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $TargetingConditions, $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $BlockPosTracker } from "net.minecraft.world.entity.ai.behavior.BlockPosTracker"
import { $Swim } from "net.minecraft.world.entity.ai.behavior.Swim"
import { $Enum } from "java.lang.Enum"
import { $PositionTracker } from "net.minecraft.world.entity.ai.behavior.PositionTracker"
import { $MoveToTargetSink } from "net.minecraft.world.entity.ai.behavior.MoveToTargetSink"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LongJumpToRandomPos } from "net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos"
import { $FollowTemptation } from "net.minecraft.world.entity.ai.behavior.FollowTemptation"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $DoNothing } from "net.minecraft.world.entity.ai.behavior.DoNothing"
import { $EntityTracker } from "net.minecraft.world.entity.ai.behavior.EntityTracker"
import { $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"
import { $PlayTagWithOtherKids } from "net.minecraft.world.entity.ai.behavior.PlayTagWithOtherKids"
import { $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $PoiType$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $SleepInBed } from "net.minecraft.world.entity.ai.behavior.SleepInBed"
import { $BehaviorControl } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $LongJumpToPreferredBlock } from "net.minecraft.world.entity.ai.behavior.LongJumpToPreferredBlock"
import { $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $CountDownCooldownTicks } from "net.minecraft.world.entity.ai.behavior.CountDownCooldownTicks"
import { $JumpOnBed } from "net.minecraft.world.entity.ai.behavior.JumpOnBed"
import { $PathfinderMob, $PathfinderMob$$Type } from "net.minecraft.world.entity.PathfinderMob"
import { $AnimalPanic } from "net.minecraft.world.entity.ai.behavior.AnimalPanic"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $OneShot } from "net.minecraft.world.entity.ai.behavior.OneShot"
import { $LongJumpMidJump } from "net.minecraft.world.entity.ai.behavior.LongJumpMidJump"
import { $AnimalMakeLove } from "net.minecraft.world.entity.ai.behavior.AnimalMakeLove"

export class $Behaviors extends $Enum<$Behaviors> {
static readonly "INSTANCE": $Behaviors

/**
 * Creates an `AcquirePoi` behavior, only applicable to **pathfinder** entities
 * 
 * @param poiType - A predicate for pois the entity will attempt to acquire
 * @param memoryKey - The memory type that may not be present for this behavior to be enabled, villagers use `minecraft:job_site` here
 * @param memoryToAcquire - The memory type to use when a poi is acquired, villagers use `minecraft:potential_job_site` here
 * @param onlyIfAdult - If this behavior should only apply when the entity is an adult
 * @param onPoiAcquisitionEvent - The entity event to be sent to the entity when it acquires the poi, may be null to not send a client bound packet. This value is handled by an entity's implementation of the `handleEntityEvent` method
 */
public "acquirePoi"(poiType: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, memoryKey: $MemoryModuleType$$Type<$GlobalPos$$Type>, memoryToAcquire: $MemoryModuleType$$Type<$GlobalPos$$Type>, onlyIfAdult: boolean, onPoiAcquisitionEvent: byte): $BehaviorControl<$PathfinderMob>
/**
 * Creates an `AnimalMakeLove` behavior, only applicable to **animal** entities
 * 
 * @param partnerType - The entity type the animal can breed with, note: both animals must have the same class unless their `canBreed` methods have been overridden
 * @param speedModifier - The modifier to the animal's speed when this behavior is active
 */
public "animalMakeLove"(partnerType: $EntityType$$Type<$Animal$$Type>, speedModifier: float): $AnimalMakeLove
/**
 * Creates an `AnimalPanic` behavior, only applicable to **pathfinder** entities
 * 
 * @param speedModifier - The modifier to the animal's speed when this behavior is active
 */
public "animalPanic"(speedModifier: float): $AnimalPanic
/**
 * Creates an `BabyFollowAdult` behavior, only applicable to **ageable** mobs
 * 
 * @param minFollowRange - The minimum follow distance of the baby
 * @param maxFollowRange - The maximum follow distance of the baby
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "babyFollowAdult"(minFollowRange: integer, maxFollowRange: integer, speedModifier: $Function$$Type<$LivingEntity$$Type, float>): $OneShot<$AgeableMob>
/**
 * Creates a `BackUpIfTooClose` behavior, only applicable to **mob** entities
 * 
 * @param tooCloseDistance - The distance at which the mob will begin to backup
 * @param strafeSpeed - The speed at which the entity will back away
 */
public "backUpIfTooClose"(tooCloseDistance: integer, strafeSpeed: float): $OneShot<$Mob>
/**
 * Creates a `BecomePassiveIfMemoryPresent` behavior
 * 
 * @param memoryType - The memory type that will pacify the entity
 * @param pacifyDuration - How long the entity will be pacified for
 */
public "becomePassiveIfMemoryPresent"(memoryType: $MemoryModuleType$$Type<any>, pacifyDuration: integer): $BehaviorControl<$LivingEntity>
/**
 * Creates a `BlockPosTracker` for use in `.stayCloseToTarget()`
 * 
 * @param pos - THe position that is to be tracked
 */
public "blockPosTracker"(pos: $BlockPos$$Type): $BlockPosTracker
/**
 * Creates a `CountCooldownTicks` behavior
 * 
 * @param coolDownTicks - The memory type to use to keep track of the cool down
 */
public "countDownCooldownTicks"(coolDownTicks: $MemoryModuleType$$Type<integer>): $CountDownCooldownTicks
/**
 * Creates a `DismountOrSkipMounting` behavior
 * 
 * @param maxWalkDistToRideTarget - The maximum distance the entity is willing to walk to ride an entity
 * @param dontRideIf - The predicate for when the entity should get off its mount
 */
public "dismountOrSkipMounting"<E extends $LivingEntity>(maxWalkDistToRideTarget: integer, dontRideIf: $BiPredicate$$Type<E, $Entity$$Type>): $BehaviorControl<E>
/**
 * Creates a `DoNothing` behavior
 * 
 * @param minTime - The minimum amount of time to do nothing for
 * @param maxTime - The maximum amount of time to do nothing for
 */
public "doNothing"(minTime: integer, maxTime: integer): $DoNothing
/**
 * Creates an `EntityTracker` for use in `.stayCloseToTarget()`
 * 
 * @param entity - The target entity
 * @param trackEyeHeight - If the eye height of the target should be considered
 */
public "entityPosTracker"(entity: $Entity$$Type, trackEyeHeight: boolean): $EntityTracker
/**
 * Creates a `EraseMemoryIf` behavior
 * 
 * @param predicate - When to erase the memory
 * @param memoryType - The memory type to be erased
 */
public "eraseMemoryIf"<E extends $LivingEntity>(predicate: $Predicate$$Type<E>, memoryType: $MemoryModuleType$$Type<any>): $BehaviorControl<E>
/**
 * Creates a `FlyingRandomStroll` behavior, only applicable to **pathfinder** mobs
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "flyingRandomStroll"(speedModifier: float): $BehaviorControl<$PathfinderMob>
/**
 * Creates a `FollowTemptation` behavior, only applicable to **pathfinder** mobs
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "followTemptation"(speedModifier: $Function$$Type<$LivingEntity$$Type, float>): $FollowTemptation
/** Creates a `ForceUnmount` behavior */
public "forceUnmount"(): $ForceUnmount
/**
 * Creates a `GoToWantedItem` behavior
 * 
 * @param predicate - The predicate that is checked to determine if the entity may use this behavior
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param maxDistToWalk - The maximum distance the entity will walk to go to the wanted item
 * @param hasWlkTargetMemoryModuleType - If the entity has the `minecraft:walk_target` memory type
 */
public "goToWantedItem"<E extends $LivingEntity>(predicate: $Predicate$$Type<E>, speedModifier: float, maxDistToWalk: integer, hasWlkTargetMemoryModuleType: boolean): $BehaviorControl<E>
/**
 * Creates a `GoToTargetLocation` behavior, only applicable to **mob** entities
 * 
 * @param locationMemory - The memory type to use to store the target location
 * @param closeEnoughDistance - The distance that is close enough to the location for the entity to consider it 'at' the target location
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "gotoTargetLocation"<E extends $Mob>(locationMemory: $MemoryModuleType$$Type<$BlockPos$$Type>, closeEnoughDistance: integer, speedModifier: float): $OneShot<E>
/**
 * Creates a `InsideBrownianWalk` behavior, only applicable to **pathfinder** entities
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "insideBrownianWalk"(speedModifier: float): $BehaviorControl<$PathfinderMob>
/**
 * Creates an `InteractWith` behavior
 * 
 * @param typeToInteractWith - The entity type to interact with
 * @param interactionRange - The range the entity will interact with the other entity
 * @param selfFilter - A self-predicate which determines when this behavior can be used
 * @param targetFilter - A target-predicate which determines when this behavior can be used
 * @param memory - The memory type to use for this behavior
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param maxDistance - The maximum distance they entity may acquire an interaction target from
 */
public "interactWith"<E extends $LivingEntity, T extends $LivingEntity>(typeToInteractWith: $EntityType$$Type<T>, interactionRange: integer, selfFilter: $Predicate$$Type<E>, targetFilter: $Predicate$$Type<T>, memory: $MemoryModuleType$$Type<T>, speedModifier: float, maxDistance: integer): $BehaviorControl<E>
/** Creates an `InteractWithDoor` behavior */
public "interactWithDoor"(): $InteractWithDoor
/**
 * Creates a `JumpOnBed` behavior, only applicable to **mob** entities
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "jumpOnBed"(speedModifier: float): $JumpOnBed
/**
 * Creates a `LocateHidingPlace` behavior
 * 
 * @param radius - The maximum radius a hiding place will be searched for
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param closeEnoughDistance - The distance at which the entity considers itself close enough to the hiding place
 */
public "locateHidingPlace"(radius: integer, speedModifier: float, closeEnoughDistance: integer): $OneShot<$LivingEntity>
/**
 * Creates a `LongJumpMidJump` behavior, only applicable to **mob** entities
 * 
 * @param minTicksBetweenJumps - The minimum number of ticks that must pass before the entity must jump
 * @param maxTicksBetweenJumps - The maximum number of ticks that must pass before the entity must jump
 * @param landingSound - The sound event that will be broadcast when the entity lands
 */
public "longJumpMidJump"(minTicksBetweenJumps: integer, maxTicksBetweenJumps: integer, landingSound: $SoundEvent$$Type): $LongJumpMidJump
/**
 * Creates a `LongJumpToPreferredBlock` behavior, only applicable to **mob** entities
 * 
 * @param minTimeBetweenJumps - The minimum number of ticks between jumps
 * @param maxTimeBetweenJumps - The maximum number of ticks between jumps
 * @param maxJumpHeight - The maximum vertical distance the mob will attempt to jump between
 * @param maxJumpWidth - the maximum horizontal distance the mob will attempt to jump
 * @param maxJumpVelocity - The maximum velocity the mob may jump at
 * @param jumpSound - The sound that is played when the mob jumps
 * @param preferredBlockTag - A block tag, the blocks which the mob will attempt to jump to
 * @param preferredBlockChance - The chance that the behavior will use its preferred blocks for jumps instead of any block. Range: [0, 1]
 * @param acceptableLandingSpot - A filter for what blocks are acceptable to land on
 */
public "longJumpToPreferredBlock"<E extends $Mob>(minTimeBetweenJumps: integer, maxTimeBetweenJumps: integer, maxJumpHeight: integer, maxJumpWidth: integer, maxJumpVelocity: float, jumpSound: $Function$$Type<E, $SoundEvent>, preferredBlockTag: $ResourceLocation$$Type, preferredBlockChance: float, acceptableLandingSpot: $BiPredicate$$Type<E, $BlockPos$$Type>): $LongJumpToPreferredBlock<E>
/**
 * Creates a `LongJumpToRandomPos` behavior, only applicable to **mob** entities
 * 
 * @param minTimeBetweenJumps - The minimum number of ticks between jumps
 * @param maxTimeBetweenJumps - The maximum number of ticks between jumps
 * @param maxJumpHeight - The maximum vertical distance the mob will attempt to jump between
 * @param maxJumpWidth - the maximum horizontal distance the mob will attempt to jump
 * @param maxJumpVelocity - The maximum velocity the mob may jump at
 * @param jumpSound - The sound that is played when the mob jumps
 * @param acceptableLandingSpot - A filter for what blocks are acceptable to land on
 */
public "longJumpToRandomPos"<E extends $Mob>(minTimeBetweenJumps: integer, maxTimeBetweenJumps: integer, maxJumpHeight: integer, maxJumpWidth: integer, maxJumpVelocity: float, jumpSound: $Function$$Type<E, $SoundEvent>, acceptableLandingSpot: $BiPredicate$$Type<E, $BlockPos$$Type>): $LongJumpToRandomPos<E>
/**
 * Creates a `LookAtTargetSink` behavior, only applicable to **mob** entities
 * 
 * @param minDuration - The minimum duration of the behavior
 * @param maxDuration - The maximum duration of the behavior
 */
public "lookAtTargetSink"(minDuration: integer, maxDuration: integer): $LookAtTargetSink
/**
 * Creates a `MeleeAttack` behavior, only applicable to **mob** entities
 * 
 * @param attackCooldown - The attack cooldown of the entity when this behavior is active
 */
public "meleeAttack"(attackCooldown: integer): $OneShot<$Mob>
/**
 * Creates a `Mount` behavior
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "mount"(speedModifier: float): $BehaviorControl<$LivingEntity>
/**
 * Creates a `MoveToSkySeeingSpot` behavior
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "moveToSkySeeingSpot"(speedModifier: float): $OneShot<$LivingEntity>
/**
 * Creates a `MoveToTargetSink` behavior, only applicable to **mob** entities
 * 
 * @param minDuration - The minimum duration of the behavior
 * @param maxDuration - The maximum duration of the behavior
 */
public "moveToTargetSink"(minDuration: integer, maxDuration: integer): $MoveToTargetSink
/** Creates a `PlayTagWithOtherKids` behavior, only applicable to **pathfinder** mobs */
public "playTagWithOtherKids"(): $PlayTagWithOtherKids
/**
 * Creates a `PrepareRanNearestTarget` behavior, only applicable to **pathfinder** mobs
 * 
 * @param cooldownOnFall - Sets the `minecraft:ram_cooldown_ticks` memory based on the entity when the behavior ends
 * @param minRamDistance - The minimum distance something will be rammed at
 * @param maxRamDistance - The maximum distance something will be rammed at
 * @param walkSpeed - The speed at which the mob will walk at
 * @param targetingConditions - The targeting conditions used by the entity with this behavior
 * @param ramPrepareTime - The amount of ticks the entity will prepare to ram its target
 * @param prepareRamSound - The sound event that will be played based on the entity
 */
public "prepareRamNearestTarget"<E extends $PathfinderMob>(cooldownOnFall: $ToIntFunction$$Type<E>, minRamDistance: integer, maxRamDistance: integer, walkSpeed: float, targetingConditions: $TargetingConditions$$Type, ramPrepareTime: integer, prepareRamSound: $Function$$Type<E, $SoundEvent>): $PrepareRamNearestTarget<E>
/**
 * Creates a `RandomStroll` behavior, only applicable to **pathfinder** mobs
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param maxHorizontalDistance - The maximum horizontal distance the mob will stroll
 * @param maxVerticalDistance - The maximum vertical distance the mob will stroll
 */
public "randomStroll"(speedModifier: float, maxHorizontalDistance: integer, maxVerticalDistance: integer): $BehaviorControl<$PathfinderMob>
/**
 * Creates a `RandomSwim` behavior, only applicable to **pathfinder** mobs
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "randomSwim"(speedModifier: float): $BehaviorControl<$PathfinderMob>
/** Creates a `ReactToBell` behavior */
public "reactToBell"(): $BehaviorControl<$LivingEntity>
/** Creates a `ResetRaidStatus` behavior */
public "resetRaidStatus"(): $BehaviorControl<$LivingEntity>
/** Creates a `RingBell` behavior */
public "ringBell"(): $BehaviorControl<$LivingEntity>
/**
 * Creates a `SetClosestHomeAsWalkTarget` behavior
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "setClosestHomeAsWalkTarget"(speedModifier: float): $BehaviorControl<$PathfinderMob>
/**
 * Creates a `setEntityLookTarget` behavior
 * 
 * @param predicate - A predicate for valid target entities
 * @param maxDist - The maximum distance a target may be
 */
public "setEntityLookTarget"(predicate: $Predicate$$Type<$LivingEntity$$Type>, maxDist: float): $BehaviorControl<$LivingEntity>
/**
 * Creates a `SetHiddenState` behavior
 * 
 * @param stayHiddenSeconds - How long the entity should be hidden for
 * @param closeEnoughDist - The distance that is considered close enough to a hiding place
 */
public "setHiddenState"(stayHiddenSeconds: integer, closeEnoughDist: integer): $BehaviorControl<$LivingEntity>
/**
 * Creates a `SetLookAndInteract` behavior
 * 
 * @param type - The entity type that the entity interacts with
 * @param interactionRange - The range that the entity will interact with the target
 */
public "setLookAndInteract"(type: $EntityType$$Type<any>, interactionRange: integer): $BehaviorControl<$LivingEntity>
/** Creates a `SetRaidStatus` behavior */
public "setRaidStatus"(): $BehaviorControl<$LivingEntity>
/**
 * Creates a `SetWalkTargetAwayFrom` behavior, only applicable to **pathfinder** mobs
 * 
 * @param pWalkTargetAwayFromMemory - The memory type to use as the walk away from target
 * @param pSpeedModifier - The modifier to the mob's speed when this behavior is active
 * @param pDesiredDistance - The desired distance away from the target the entity will attempt to be
 * @param pHasTarget - If the entity needs the `minecraft:walk_target` memory type
 */
public "setWalkTargetAwayFrom"(pWalkTargetAwayFromMemory: $MemoryModuleType$$Type<$Entity$$Type>, pSpeedModifier: float, pDesiredDistance: integer, pHasTarget: boolean): $OneShot<$PathfinderMob>
/**
 * Creates a behavior which sets the entity's attack target to its walk target if the target is out of reach
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "setWalkTargetFromAttackTargetIfTargetOutOfReach"(speedModifier: $Function$$Type<$LivingEntity$$Type, float>): $BehaviorControl<$Mob>
/**
 * Creates a `SetWalkTargetFromLookTarget` behavior
 * 
 * @param predicate - The predicate for setting the walk target
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param closeEnoughDistance - The distance that is close enough to the target to stop walking
 */
public "setWalkTargetFromLookTarget"(predicate: $Predicate$$Type<$LivingEntity$$Type>, speedModifier: $Function$$Type<$LivingEntity$$Type, float>, closeEnoughDistance: integer): $OneShot<$LivingEntity>
/** Creates a `SleepInBed` behavior */
public "sleepInBed"(): $SleepInBed
/** Creates a `SocializeAtBell` behavior */
public "socializeAtBell"(): $OneShot<$LivingEntity>
/**
 * Creates a `StartAttacking` behavior, only applicable to **mob** entities
 * 
 * @param canAttackPredicate - A predicate for if the mob can attack
 * @param targetFinder - A function that finds a target to attack
 */
public "startAttacking"<E extends $Mob>(canAttackPredicate: $Predicate$$Type<E>, targetFinder: $Function$$Type<E, $LivingEntity>): $BehaviorControl<E>
/**
 * Creates a `StartCelebratingIfTargetDead` behavior
 * 
 * @param celebrationDuration - The number of ticks the entity should celebrate for
 * @param dancePredicate - A predicate for if the entity should dance. The first entity provided is the entity that will dance, the second is the target
 */
public "startCelebratingIfTargetDead"(celebrationDuration: integer, dancePredicate: $BiPredicate$$Type<$LivingEntity$$Type, $LivingEntity$$Type>): $BehaviorControl<$LivingEntity>
/**
 * Creates a `StayCloseToTarget` behavior
 * 
 * @param targetPositionTracker - A function that returns the position tracker for the entity, the returned tracker may be null, see `.blockPosTracker()` and `.entityPosTracker()`
 * @param pPredicate - The predicate to use with the living Entity as an argument
 * @param closeEnough - The distance that is close enough to the target
 * @param tooFar - The distance that is too far from the target
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "stayCloseToTarget"(targetPositionTracker: $Function$$Type<$LivingEntity$$Type, $PositionTracker>, pPredicate: $Predicate$$Type<$LivingEntity$$Type>, closeEnough: integer, tooFar: integer, speedModifier: float): $BehaviorControl<$LivingEntity>
/**
 * Creates a `StopAttackingIfTargetInvalid` behavior, only applicable to **mob** entities
 * 
 * @param stopAttackingWhen - A predicate for when the target is no longer valid
 * @param onTargetErased - Actions that should be performed when the attack target is cleared, the first entity is the attacker and the second is the target
 * @param canGetTiredOfTryingToReachTarget - If the attacker can get tired of trying to reach its target
 */
public "stopAttackingIfTargetInvalid"<E extends $Mob>(stopAttackingWhen: $Predicate$$Type<$LivingEntity$$Type>, onTargetErased: $BiConsumer$$Type<E, $LivingEntity$$Type>, canGetTiredOfTryingToReachTarget: boolean): $BehaviorControl<E>
/** Creates a `StopBeingAngryIfTargetDead` behavior, only applicable to **mob** entities */
public "stopBeingAngryIfTargetDead"(): $BehaviorControl<$LivingEntity>
/**
 * Creates a `StrollAroundPoi` behavior, only applicable to **pathfinder** mobs
 * 
 * @param memoryType - The memory that is used for the poi
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param maxDistanceFromPoi - The maximum distance away from the poi that the mob may go while strolling
 */
public "strollAroundPoi"(memoryType: $MemoryModuleType$$Type<$GlobalPos$$Type>, speedModifier: float, maxDistanceFromPoi: integer): $OneShot<$PathfinderMob>
/**
 * Creates a `StrollToPoi` behavior, only applicable to **pathfinder** mobs
 * 
 * @param memoryType - The memory that is used for the poi
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param closeEnoughDist - The distance that is considered close enough to the poi
 * @param maxDistanceFromPoi - The maximum distance away from the poi that this behavior will apply
 */
public "strollToPoi"(memoryType: $MemoryModuleType$$Type<$GlobalPos$$Type>, speedModifier: float, closeEnoughDist: integer, maxDistanceFromPoi: integer): $BehaviorControl<$PathfinderMob>
/**
 * Creates a `Swim` behavior, only applicable to **mob** entities
 * 
 * @param chance - The chance the mob will move upwards during a tick. Range: [0, 1]
 */
public "swim"(chance: float): $Swim
/**
 * Creates a new `TargetingConditions` for use in `.prepareRamNearestTarget()`
 * 
 * @param isForCombat - If the conditions will be used for combat
 * @param range - The range at which the entity will target
 * @param ignoreLineOfSight - If the line of sight requirement should be ignored
 * @param ignoreInvisibilityTesting - If the consideration of the target's invisibility status should be ignored
 * @param selector - Sets the predicate for the target, may be null to accept all entities
 */
public "targetingConditions"(isForCombat: boolean, range: double, ignoreLineOfSight: boolean, ignoreInvisibilityTesting: boolean, selector: $Predicate$$Type<$LivingEntity$$Type>): $TargetingConditions
/**
 * Creates a `TryFindLand` behavior, only applicable to **pathfinder** mobs
 * 
 * @param range - The range, in all directions, at which the mob will search for land
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "tryFindLand"(range: integer, speedModifier: float): $BehaviorControl<$PathfinderMob>
/**
 * Creates a `TryFindLandNearWater` behavior, only applicable to **pathfinder** mobs
 * 
 * @param range - The range, in all directions, at which the mob will search for land
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "tryFindLandNearWater"(range: integer, speedModifier: float): $BehaviorControl<$PathfinderMob>
/**
 * Creates a `TryFindWater` behavior, only applicable to **pathfinder** mobs
 * 
 * @param range - The range, in all directions, at which the mob will search for land
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 */
public "tryFindWater"(range: integer, speedModifier: float): $BehaviorControl<$PathfinderMob>
/** Creates a `UpdateActivityFromSchedule` behavior */
public "updateActivityFromSchedule"(): $BehaviorControl<$LivingEntity>
/**
 * Creates a `ValidateNearbyPoi` behavior
 * 
 * @param poiPredicate - The predicate that is used to validate the poi
 * @param memoryType - The memory that is used for the poi
 */
public "validateNearbyPoi"(poiPredicate: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, memoryType: $MemoryModuleType$$Type<$GlobalPos$$Type>): $BehaviorControl<$LivingEntity>
public static "valueOf"(name: string): $Behaviors
public static "values"(): $Behaviors[]
/**
 * Creates a `VillageBoundRandomStroll` behavior, only applicable to **pathfinder** mobs
 * 
 * @param speedModifier - The modifier to the mob's speed when this behavior is active
 * @param radius - The radius around the village the mob will stroll
 * @param maxyDist - The vertical range the mob will wander in
 */
public "villageBoundRandomStroll"(speedModifier: float, radius: integer, maxyDist: integer): $OneShot<$PathfinderMob>
/** Creates a `WakeUp` behavior */
public "wakeUp"(): $BehaviorControl<$LivingEntity>
set "closestHomeAsWalkTarget"(value: float)
set "walkTargetFromAttackTargetIfTargetOutOfReach"(value: $Function$$Type<$LivingEntity$$Type, float>)
}
}

declare module "net.liopyu.entityjs.util.EntitySerializerType" {
import { $Enum } from "java.lang.Enum"
import { $EntityDataSerializer, $EntityDataSerializer$$Type } from "net.minecraft.network.syncher.EntityDataSerializer"

export class $EntitySerializerType extends $Enum<$EntitySerializerType> {
static readonly "BOOLEAN": $EntitySerializerType
static readonly "BYTE": $EntitySerializerType
static readonly "COMPOUND_TAG": $EntitySerializerType
static readonly "FLOAT": $EntitySerializerType
static readonly "INT": $EntitySerializerType
static readonly "LONG": $EntitySerializerType
static readonly "QUATERNION": $EntitySerializerType
static readonly "STRING": $EntitySerializerType
static readonly "UUID": $EntitySerializerType
static readonly "VECTOR3": $EntitySerializerType

public static "castValue"<T>(value: any, castHint: string): T
public static "fromObject"(value: any): $EntitySerializerType
public static "fromSerializer"(serializer: $EntityDataSerializer$$Type<any>): $EntitySerializerType
public "getSerializer"(): $EntityDataSerializer<any>
public static "valueOf"(name: string): $EntitySerializerType
public static "values"(): $EntitySerializerType[]
get "serializer"(): $EntityDataSerializer<any>
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ArrowLivingEntityContext" {
import { $AbstractArrow, $AbstractArrow$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$ArrowLivingEntityContext {
/** The arrow being fired. */
readonly "arrow": $AbstractArrow
/** The living entity hit by the arrow. */
readonly "entity": $LivingEntity

constructor(arrow: $AbstractArrow$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RotLerpContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ContextUtils$RotLerpContext {
readonly "maximumChange": float
readonly "sourceAngle": float
readonly "targetAngle": float

constructor(sourceAngle: float, targetAngle: float, maximumChange: float)

}
}

declare module "net.liopyu.entityjs.util.implementation.IProjectilsJs" {
import { $EntitySerializerType$$Type } from "net.liopyu.entityjs.util.EntitySerializerType"

export interface $IProjectilsJs {
"addSyncedData"(type: $EntitySerializerType$$Type, key: string, value: any): void
"addSyncedData"(identifier: string, value: any): void
"getSyncedData"<T>(identifier: string): T
"setSyncedData"(key: string, value: any): void
}

export namespace $IProjectilsJs {
const probejs$$marker: never
}
export abstract class $IProjectilsJs$$Static implements $IProjectilsJs {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$LivingEntityContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$LivingEntityContext {
readonly "entity": $LivingEntity
readonly "target": $LivingEntity

constructor(entity: $LivingEntity$$Type, target: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EEntityFallDamageContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$EEntityFallDamageContext {
/** The multiplier applied to calculate fall damage */
readonly "damageMultiplier": float
/** The source of the fall damage */
readonly "damageSource": $DamageSource
/** The distance fallen by the living entity */
readonly "distance": float
/** The entity experiencing fall damage */
readonly "entity": $Entity

constructor(entity: $Entity$$Type, damageMultiplier: float, distance: float, damageSource: $DamageSource$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityBlockPosContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export class $ContextUtils$EntityBlockPosContext {
/** The block position */
readonly "blockPos": $BlockPos
/** The living entity */
readonly "entity": $LivingEntity

constructor(entity: $LivingEntity$$Type, blockPos: $BlockPos$$Type)

}
}

declare module "net.liopyu.entityjs.util.ai.LookControlJS" {
import { $Optional } from "java.util.Optional"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $LookControlJSBuilder, $LookControlJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.LookControlJSBuilder"
import { $LookControl } from "net.minecraft.world.entity.ai.control.LookControl"

export class $LookControlJS extends $LookControl {
constructor(mob: $Mob$$Type, builder: $LookControlJSBuilder$$Type)

public "getBuilder"(): $LookControlJSBuilder
public "getLookAtCooldown"(): integer
public "getMob"(): $Mob
public "getxMaxRotAngle"(): float
public "getyMaxRotSpeed"(): float
public "m_180896_"(): $Optional<float>
public "m_180897_"(): $Optional<float>
public "m_24956_"(pFrom: float, pTo: float, pMaxDelta: float): float
public "setLookAtCooldown"(lookAtCooldown: integer): void
public "setWantedX"(wantedX: double): void
public "setWantedY"(wantedY: double): void
public "setWantedZ"(wantedZ: double): void
public "setxMaxRotAngle"(xMaxRotAngle: float): void
public "setyMaxRotSpeed"(yMaxRotSpeed: float): void
get "builder"(): $LookControlJSBuilder
get "lookAtCooldown"(): integer
get "mob"(): $Mob
get "xMaxRotAngle"(): float
get "yMaxRotSpeed"(): float
set "lookAtCooldown"(value: integer)
set "wantedX"(value: double)
set "wantedY"(value: double)
set "wantedZ"(value: double)
set "xMaxRotAngle"(value: float)
set "yMaxRotSpeed"(value: float)
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ArrowBlockHitContext" {
import { $AbstractArrow, $AbstractArrow$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"

export class $ContextUtils$ArrowBlockHitContext {
/** The abstract arrow entity */
readonly "entity": $AbstractArrow
/** The result of the hit on the block */
readonly "result": $BlockHitResult

constructor(result: $BlockHitResult$$Type, entity: $AbstractArrow$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityItemEntityContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"

export class $ContextUtils$EntityItemEntityContext {
/** The living entity involved */
readonly "entity": $LivingEntity
/** The item entity associated with the living entity */
readonly "itemEntity": $ItemEntity

constructor(entity: $LivingEntity$$Type, itemEntity: $ItemEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EDamageContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$EDamageContext {
/** The source of the damage */
readonly "damageSource": $DamageSource
/** The entity that is the target of the damage */
readonly "entity": $Entity

constructor(entity: $Entity$$Type, damageSource: $DamageSource$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityProjectileWeaponContext" {
import { $ProjectileWeaponItem, $ProjectileWeaponItem$$Type } from "net.minecraft.world.item.ProjectileWeaponItem"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$EntityProjectileWeaponContext {
/** The living entity using the projectile weapon */
readonly "entity": $LivingEntity
/** The projectile weapon being used */
readonly "projectileWeapon": $ProjectileWeaponItem

constructor(projectileWeapon: $ProjectileWeaponItem$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityPlayerContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextUtils$EntityPlayerContext {
/** The entity */
readonly "entity": $Entity
/** The player */
readonly "player": $Player

constructor(player: $Player$$Type, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PositionRiderContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Entity$MoveFunction, $Entity$MoveFunction$$Type } from "net.minecraft.world.entity.Entity$MoveFunction"

export class $ContextUtils$PositionRiderContext {
/** The vehicle entity */
readonly "entity": $Entity
/** The move function */
readonly "moveFunction": $Entity$MoveFunction
/** The passenger */
readonly "passenger": $Entity

constructor(entity: $Entity$$Type, passenger: $Entity$$Type, moveFunction: $Entity$MoveFunction$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$DamageContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$DamageContext {
/** The source of the damage */
readonly "damageSource": $DamageSource
/** The living entity that is the target of the damage */
readonly "entity": $LivingEntity

constructor(entity: $LivingEntity$$Type, damageSource: $DamageSource$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$MovementContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $MoverType, $MoverType$$Type } from "net.minecraft.world.entity.MoverType"

export class $ContextUtils$MovementContext {
/** The entity undergoing movement */
readonly "entity": $Entity
/** The type of mover responsible for the movement */
readonly "moverType": $MoverType
/** The position to which the entity is moving */
readonly "position": $Vec3

constructor(moverType: $MoverType$$Type, position: $Vec3$$Type, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ECanTrampleContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

export class $ContextUtils$ECanTrampleContext {
/** The entity attempting to trample the block */
readonly "entity": $Entity
/** The distance fallen before trampling (if applicable) */
readonly "fallDistance": float
/** The position of the block being considered for trampling */
readonly "pos": $BlockPos
/** The block state at the position */
readonly "state": $BlockState

constructor(state: $BlockState$$Type, pos: $BlockPos$$Type, fallDistance: float, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RotationContext" {
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ContextUtils$RotationContext {
readonly "entity": $Mob
readonly "wantedX": double
readonly "wantedY": double
readonly "wantedZ": double

constructor(wantedX: double, wantedY: double, wantedZ: double, entity: $Mob$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityEquipmentContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ContextUtils$EntityEquipmentContext {
/** The item stack currently in the equipment slot */
readonly "currentStack": $ItemStack
/** The living entity associated with the equipment change */
readonly "entity": $LivingEntity
/** The item stack previously in the equipment slot */
readonly "previousStack": $ItemStack
/** The equipment slot being modified */
readonly "slot": $EquipmentSlot

constructor(slot: $EquipmentSlot$$Type, previousStack: $ItemStack$$Type, currentStack: $ItemStack$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityLootContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$EntityLootContext {
/** The source of the damage causing the loot */
readonly "damageSource": $DamageSource
/** The living entity involved */
readonly "entity": $LivingEntity
/** Whether the entity was hit by a player or not */
readonly "hitByPlayer": boolean
/** The looting multiplier for the loot */
readonly "lootingMultiplier": integer

constructor(damageSource: $DamageSource$$Type, lootingMultiplier: integer, hitByPlayer: boolean, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ItemUseContext" {
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextUtils$ItemUseContext {
/** The hand used for interaction */
readonly "hand": $InteractionHand
/** The level of the entity using the item */
readonly "level": $Level
/** The player interacting with the item */
readonly "player": $Player

constructor(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EThunderHitContext" {
import { $LightningBolt, $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ContextUtils$EThunderHitContext {
/** The entity affected by the lightning strike */
readonly "entity": $Entity
/** The server level where the lightning strike occurred */
readonly "level": $ServerLevel
/** The lightning bolt that struck */
readonly "lightningBolt": $LightningBolt

constructor(level: $ServerLevel$$Type, lightningBolt: $LightningBolt$$Type, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityBlockPosLevelContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelReader, $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"

export class $ContextUtils$EntityBlockPosLevelContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The level reader */
readonly "levelReader": $LevelReader
/** The block position */
readonly "pos": $BlockPos

constructor(pos: $BlockPos$$Type, levelReader: $LevelReader$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityPoseDimensionsContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $EntityDimensions, $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"

export class $ContextUtils$EntityPoseDimensionsContext {
/** The dimensions of the living entity */
readonly "dimensions": $EntityDimensions
/** The living entity associated with the pose and dimensions */
readonly "entity": $LivingEntity
/** The pose of the living entity */
readonly "pose": $Pose

constructor(pose: $Pose$$Type, dimensions: $EntityDimensions$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityLevelContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ContextUtils$EntityLevelContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The level */
readonly "level": $Level

constructor(level: $Level$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$VisualContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$VisualContext {
/** Our entity which is looked at */
readonly "entity": $LivingEntity
/** The looking entity */
readonly "lookingEntity": $Entity

constructor(lookingEntity: $Entity$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntitySqrDistanceContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$EntitySqrDistanceContext {
/** The squared distance to the player */
readonly "distanceToPlayer": double
/** The entity */
readonly "entity": $Entity

constructor(distanceToPlayer: double, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextUtils$PlayerEntityContext {
/** The living entity associated with the player */
readonly "entity": $LivingEntity
/** The player entity */
readonly "player": $Player

constructor(player: $Player$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RenderContextCustom" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$RenderContextCustom<T extends $LivingEntity = $LivingEntity> {
/** The buffer source for rendering */
readonly "bufferSource": $MultiBufferSource
/** The animatable entity being rendered */
readonly "entity": T
/** The yaw of the entity */
readonly "entityYaw": float
/** The packed light information */
readonly "packedLight": integer
/** The partial tick */
readonly "partialTick": float
/** The pose stack for transformations */
readonly "poseStack": $PoseStack

constructor(entity: T, entityYaw: float, partialTick: float, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, packedLight: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityInteractContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContextUtils$EntityInteractContext {
/** The entity being interacted with */
readonly "entity": $Entity
/** The hand used for interaction */
readonly "hand": $InteractionHand
/** The player interacting with the entity */
readonly "player": $Player

constructor(entity: $Entity$$Type, player: $Player$$Type, hand: $InteractionHand$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityItemStackContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ContextUtils$EntityItemStackContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The item stack */
readonly "item": $ItemStack

constructor(item: $ItemStack$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityFallDamageContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$EntityFallDamageContext {
/** The multiplier applied to calculate fall damage */
readonly "damageMultiplier": float
/** The source of the fall damage */
readonly "damageSource": $DamageSource
/** The distance fallen by the living entity */
readonly "distance": float
/** The living entity experiencing fall damage */
readonly "entity": $LivingEntity

constructor(entity: $LivingEntity$$Type, damageMultiplier: float, distance: float, damageSource: $DamageSource$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityTypeEntityContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"

export class $ContextUtils$EntityTypeEntityContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The target entity type */
readonly "targetType": $EntityType<any>

constructor(entity: $LivingEntity$$Type, targetType: $EntityType$$Type<any>)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityServerLevelContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $ContextUtils$EntityServerLevelContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The server level of the entity */
readonly "level": $ServerLevel

constructor(level: $ServerLevel$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$StrafeContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ContextUtils$StrafeContext {
readonly "forward": float
readonly "strafe": float

constructor(forward: float, strafe: float)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$NLRenderContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$NLRenderContext<T extends $Entity = $Entity> {
/** The buffer source for rendering */
readonly "bufferSource": $MultiBufferSource
/** The animatable entity being rendered */
readonly "entity": T
/** The yaw of the entity */
readonly "entityYaw": float
/** The packed light information */
readonly "packedLight": integer
/** The partial tick */
readonly "partialTick": float
/** The pose stack for transformations */
readonly "poseStack": $PoseStack

constructor(entity: T, entityYaw: float, partialTick: float, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, packedLight: integer)

}
}

declare module "net.liopyu.entityjs.util.ai.JumpControlJS" {
import { $JumpControl } from "net.minecraft.world.entity.ai.control.JumpControl"
import { $JumpControlJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.JumpControlJSBuilder"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $JumpControlJS extends $JumpControl {
constructor(mob: $Mob$$Type, builder: $JumpControlJSBuilder$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$TargetChangeContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ContextUtils$TargetChangeContext {
/** The entity whose target is changing */
readonly "entity": $Mob
/** The new target entity */
readonly "target": $LivingEntity

constructor(target: $LivingEntity$$Type, entity: $Mob$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ScaleModelRenderContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoEntityRenderer, $GeoEntityRenderer$$Type } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$ScaleModelRenderContext {
readonly "entity": $LivingEntity
readonly "heightScale": float
readonly "isReRender": boolean
readonly "model": $BakedGeoModel
readonly "packedLight": integer
readonly "packedOverlay": integer
readonly "partialTick": float
readonly "poseStack": $PoseStack
readonly "renderer": $GeoEntityRenderer
readonly "widthScale": float

constructor(renderer: $GeoEntityRenderer$$Type, widthScale: float, heightScale: float, poseStack: $PoseStack$$Type, entity: $LivingEntity$$Type, model: $BakedGeoModel$$Type, isReRender: boolean, partialTick: float, packedLight: integer, packedOverlay: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ProjectileBlockHitContext" {
import { $BlockHitResult, $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $Projectile, $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"

export class $ContextUtils$ProjectileBlockHitContext {
/** The throwable item projectile that hit the block */
readonly "entity": $Projectile
/** The result of the hit on the block */
readonly "result": $BlockHitResult

constructor(result: $BlockHitResult$$Type, entity: $Projectile$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$LerpToContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$LerpToContext {
/** The entity to lerp */
readonly "entity": $Entity
/** The target pitch for lerping */
readonly "pitch": float
/** The number of position rotation increments */
readonly "posRotationIncrements": integer
/** Whether to teleport the entity */
readonly "teleport": boolean
/** The target x-coordinate for lerping */
readonly "x": double
/** The target y-coordinate for lerping */
readonly "y": double
/** The target yaw for lerping */
readonly "yaw": float
/** The target z-coordinate for lerping */
readonly "z": double

constructor(x: double, y: double, z: double, yaw: float, pitch: float, posRotationIncrements: integer, teleport: boolean, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$DeathContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"

export class $ContextUtils$DeathContext {
/** The source of the damage causing the death */
readonly "damageSource": $DamageSource
/** The living entity that has died */
readonly "entity": $LivingEntity

constructor(entity: $LivingEntity$$Type, damageSource: $DamageSource$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ProjectileEntityHitContext" {
import { $EntityHitResult, $EntityHitResult$$Type } from "net.minecraft.world.phys.EntityHitResult"
import { $Projectile, $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"

export class $ContextUtils$ProjectileEntityHitContext {
/** The projectile that was thrown */
readonly "entity": $Projectile
/** The result of the hit */
readonly "result": $EntityHitResult

constructor(result: $EntityHitResult$$Type, entity: $Projectile$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$AutoAttackContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$AutoAttackContext {
/** The attacking entity */
readonly "entity": $LivingEntity
/** The target entity that is being attacked */
readonly "target": $LivingEntity

constructor(target: $LivingEntity$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EPassengerEntityContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export class $ContextUtils$EPassengerEntityContext {
readonly "entity": $Entity
readonly "passenger": $Entity

constructor(passenger: $Entity$$Type, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityHealContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$EntityHealContext {
/** The living entity being healed */
readonly "entity": $LivingEntity
/** The amount of healing applied to the living entity */
readonly "healAmount": float

constructor(entity: $LivingEntity$$Type, healAmount: float)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityItemLevelContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ContextUtils$EntityItemLevelContext {
/** The living entity */
readonly "entity": $LivingEntity
/** The item stack */
readonly "itemStack": $ItemStack
/** The level */
readonly "level": $Level

constructor(entity: $LivingEntity$$Type, itemStack: $ItemStack$$Type, level: $Level$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$Vec3Context" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $ContextUtils$Vec3Context {
/** The entity undergoing movement */
readonly "entity": $LivingEntity
/** The Travel Vector of the entity. */
readonly "vec3": $Vec3

constructor(vec3: $Vec3$$Type, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.implementation.IRegistryJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CustomEntityBuilder } from "net.liopyu.entityjs.builders.misc.CustomEntityBuilder"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Class$$Type } from "java.lang.Class"
import { $ModifyEntityBuilder$$Type } from "net.liopyu.entityjs.builders.modification.ModifyEntityBuilder"

export interface $IRegistryJS {
"createCustom"(id: string, entityClass: $Class$$Type<$LivingEntity$$Type>, consumer: $Consumer$$Type<$ModifyEntityBuilder$$Type>): $CustomEntityBuilder
}

export namespace $IRegistryJS {
const probejs$$marker: never
}
export abstract class $IRegistryJS$$Static implements $IRegistryJS {
}
}

declare module "net.liopyu.entityjs.util.ContextUtils$PartEntityParams" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $PartBuilder, $PartBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.entityjs.PartBuilder"

export class $ContextUtils$PartEntityParams<T extends $LivingEntity = $LivingEntity> {
readonly "builder": $PartBuilder<T>
readonly "height": float
readonly "name": string
readonly "width": float

constructor(name: string, width: float, height: float, builder: $PartBuilder$$Type<T>)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EMayInteractContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $ContextUtils$EMayInteractContext {
/** The entity involved in the interaction */
readonly "entity": $Entity
/** The level where the interaction may occur */
readonly "level": $Level
/** The position where the interaction may occur */
readonly "pos": $BlockPos

constructor(level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RenderBoneContext" {
import { $GeoBone, $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemArmorGeoLayer, $ItemArmorGeoLayer$$Type } from "software.bernie.geckolib.renderer.layer.ItemArmorGeoLayer"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $VertexConsumer, $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $MultiBufferSource, $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$RenderBoneContext<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
readonly "bone": $GeoBone
readonly "buffer": $VertexConsumer
readonly "bufferSource": $MultiBufferSource
readonly "entity": T
readonly "packedLight": integer
readonly "packedOverlay": integer
readonly "partialTick": float
readonly "poseStack": $PoseStack
readonly "renderType": $RenderType
readonly "renderer": $ItemArmorGeoLayer<T>

constructor(renderer: $ItemArmorGeoLayer$$Type<T>, poseStack: $PoseStack$$Type, entity: T, bone: $GeoBone$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$EntityDistanceToPlayerContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $ContextUtils$EntityDistanceToPlayerContext {
/** The distance to the closest player */
readonly "distanceToClosestPlayer": double
/** The living entity */
readonly "entity": $LivingEntity

constructor(distanceToClosestPlayer: double, entity: $LivingEntity$$Type)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$RendererModelContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityModel, $EntityModel$$Type } from "net.minecraft.client.model.EntityModel"
import { $EntityRenderer, $EntityRenderer$$Type } from "net.minecraft.client.renderer.entity.EntityRenderer"

export class $ContextUtils$RendererModelContext {
/** The entity */
readonly "entity": $Entity
/** The entity's model */
readonly "model": $EntityModel<any>
/** The entity's renderer */
readonly "renderer": $EntityRenderer<any>

constructor(entity: $Entity$$Type, renderer: $EntityRenderer$$Type<any>, model: $EntityModel$$Type<any>)

}
}

declare module "net.liopyu.entityjs.util.ContextUtils$ScaleModelRenderContextNL" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BakedGeoModel, $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $PoseStack, $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $ContextUtils$ScaleModelRenderContextNL<T extends $Entity = $Entity> {
readonly "entity": T
readonly "heightScale": float
readonly "isReRender": boolean
readonly "model": $BakedGeoModel
readonly "packedLight": integer
readonly "packedOverlay": integer
readonly "partialTick": float
readonly "poseStack": $PoseStack
readonly "widthScale": float

constructor(widthScale: float, heightScale: float, poseStack: $PoseStack$$Type, entity: T, model: $BakedGeoModel$$Type, isReRender: boolean, partialTick: float, packedLight: integer, packedOverlay: integer)

}
}

declare module "net.liopyu.entityjs.util.ai.MoveControlJS" {
import { $MoveControl$Operation, $MoveControl$Operation$$Type } from "net.minecraft.world.entity.ai.control.MoveControl$Operation"
import { $MoveControl } from "net.minecraft.world.entity.ai.control.MoveControl"
import { $MoveControlJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.MoveControlJSBuilder"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MoveControlJS extends $MoveControl {
constructor(mob: $Mob$$Type, builder: $MoveControlJSBuilder$$Type)

public "getMob"(): $Mob
public "getOperation"(): $MoveControl$Operation
public "getStrafeForwards"(): float
public "getStrafeRight"(): float
public "setOperation"(operation: $MoveControl$Operation$$Type): void
public "setSpeedModifier"(speedModifier: double): void
public "setStrafeForwards"(strafeForwards: float): void
public "setStrafeRight"(strafeRight: float): void
get "mob"(): $Mob
get "operation"(): $MoveControl$Operation
get "strafeForwards"(): float
get "strafeRight"(): float
set "operation"(value: $MoveControl$Operation$$Type)
set "speedModifier"(value: double)
set "strafeForwards"(value: float)
set "strafeRight"(value: float)
}
}

