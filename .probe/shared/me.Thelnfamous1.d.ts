declare module "me.Thelnfamous1.mobplayeranimator.mixin.client.ModelPartAccessor" {
import { $Map } from "java.util.Map"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor {
"mobplayeranimator$getChildren"(): $Map<string, $ModelPart>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
export abstract class $ModelPartAccessor$$Static implements $ModelPartAccessor {
}
}

declare module "me.Thelnfamous1.mobplayeranimator.mixin.AnimationStackAccessor" {
import { $IAnimation } from "dev.kosmx.playerAnim.api.layered.IAnimation"
import { $ArrayList } from "java.util.ArrayList"
import { $Pair } from "dev.kosmx.playerAnim.core.util.Pair"

export interface $AnimationStackAccessor {
"mobplayeranimator$getLayers"(): $ArrayList<$Pair<integer, $IAnimation>>
}

export namespace $AnimationStackAccessor {
const probejs$$marker: never
}
export abstract class $AnimationStackAccessor$$Static implements $AnimationStackAccessor {
}
}

declare module "me.Thelnfamous1.bettermobcombat.api.MobAttackWindup" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $WeaponAttributes$$Type } from "net.bettercombat.api.WeaponAttributes"

export interface $MobAttackWindup {
"bettermobcombat$cancelUpswing"(): void
"bettermobcombat$getAttackCooldown"(): integer
"bettermobcombat$getSwingProgress"(): float
"bettermobcombat$getUpswingTicks"(): integer
"bettermobcombat$hasDelayedUpswing"(): boolean
"bettermobcombat$setDelayedUpswing"(runnable0: $Runnable$$Type): void
"bettermobcombat$startUpswing"(weaponAttributes0: $WeaponAttributes$$Type, biConsumer1: $BiConsumer$$Type<$Mob$$Type, $Entity$$Type>): void
"bettermobcombat$startUpswing"(weaponAttributes0: $WeaponAttributes$$Type): void
"isWeaponSwingInProgress"(): boolean
get "weaponSwingInProgress"(): boolean
}

export namespace $MobAttackWindup {
const probejs$$marker: never
}
export abstract class $MobAttackWindup$$Static implements $MobAttackWindup {
}
}

declare module "me.Thelnfamous1.bettermobcombat.mixin.MobAccessor" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $MobAccessor {
"bettermobcombat$getHandItems"(): $NonNullList<$ItemStack>
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "me.Thelnfamous1.bettermobcombat.api.MobAttackStrength" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobAttackStrength {
"bettercombat$getAttackStrengthScale"(float0: float): double
"bettercombat$resetAttackStrengthTicker"(): void
"bettermobcombat$getCurrentItemAttackStrengthDelay"(): float
}

export namespace $MobAttackStrength {
const probejs$$marker: never
}
export abstract class $MobAttackStrength$$Static implements $MobAttackStrength {
}
}

declare module "me.Thelnfamous1.mobplayeranimator.api.part.HumanoidBodyPose" {
import { $PartPose$$Type } from "net.minecraft.client.model.geom.PartPose"
import { $HumanoidModelAccess$$Type } from "me.Thelnfamous1.mobplayeranimator.api.HumanoidModelAccess"

export class $HumanoidBodyPose {
constructor(partPose0: $PartPose$$Type, partPose1: $PartPose$$Type, partPose2: $PartPose$$Type, partPose3: $PartPose$$Type, partPose4: $PartPose$$Type, partPose5: $PartPose$$Type)

public "pose"(humanoidModelAccess0: $HumanoidModelAccess$$Type): void
}
}

declare module "me.Thelnfamous1.bettermobcombat.api.MobAttackAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobAttackAnimation {
"bettermobcombat$hasActiveAttackAnimation"(): boolean
"bettermobcombat$hasActiveMainHandBodyPose"(): boolean
"bettermobcombat$hasActiveMainHandItemPose"(): boolean
"bettermobcombat$hasActiveOffHandBodyPose"(): boolean
"bettermobcombat$hasActiveOffHandItemPose"(): boolean
"bettermobcombat$isCombatAnimationActive"(): boolean
}

export namespace $MobAttackAnimation {
const probejs$$marker: never
}
export abstract class $MobAttackAnimation$$Static implements $MobAttackAnimation {
}
}

declare module "me.Thelnfamous1.mobplayeranimator.api.HumanoidModelAccess" {
import { $HumanoidBodyPose } from "me.Thelnfamous1.mobplayeranimator.api.part.HumanoidBodyPose"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $HumanoidModelAccess {
"mobplayeranimator$getBody"(): $ModelPart
"mobplayeranimator$getHat"(): $ModelPart
"mobplayeranimator$getHead"(): $ModelPart
"mobplayeranimator$getInitialBodyPose"(): $HumanoidBodyPose
"mobplayeranimator$getLeftArm"(): $ModelPart
"mobplayeranimator$getLeftLeg"(): $ModelPart
"mobplayeranimator$getRightArm"(): $ModelPart
"mobplayeranimator$getRightLeg"(): $ModelPart
}

export namespace $HumanoidModelAccess {
const probejs$$marker: never
}
export abstract class $HumanoidModelAccess$$Static implements $HumanoidModelAccess {
}
}

declare module "me.Thelnfamous1.mobplayeranimator.api.FirstPersonTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FirstPersonTracker {
"mobplayeranimator$isFirstPersonNext"(): boolean
"mobplayeranimator$setFirstPersonNext"(boolean0: boolean): void
}

export namespace $FirstPersonTracker {
const probejs$$marker: never
}
export abstract class $FirstPersonTracker$$Static implements $FirstPersonTracker {
}
}

