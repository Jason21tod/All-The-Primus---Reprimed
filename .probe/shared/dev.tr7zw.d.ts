declare module "dev.tr7zw.trender.gui.impl.mixin.client.ScreenAccessor" {
import { $GuiEventListener } from "net.minecraft.client.gui.components.events.GuiEventListener"
import { $List } from "java.util.List"

export interface $ScreenAccessor {
"libgui$getChildren"(): $List<$GuiEventListener>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "dev.tr7zw.notenoughanimations.mixins.PlayerModelAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerModelAccessor {
"getSlim"(): boolean
get "slim"(): boolean
}

export namespace $PlayerModelAccessor {
const probejs$$marker: never
}
export abstract class $PlayerModelAccessor$$Static implements $PlayerModelAccessor {
}
}

declare module "dev.tr7zw.notenoughanimations.access.PlayerData" {
import { $DataHolder$$Type } from "dev.tr7zw.notenoughanimations.versionless.animations.DataHolder"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $PlayerData {
"getData"<T>(dataHolder0: $DataHolder$$Type<T>, supplier1: $Supplier$$Type<T>): T
"getItemSwapAnimationTimer"(): integer
"getLastAnimationSwapTick"(): integer
"getLastHeldItems"(): $ItemStack[]
"getLastRotations"(): float[]
"getPoseOverwrite"(): $Pose
"getSideSword"(): $ItemStack
"isDisableBodyRotation"(): boolean
"isRotateBodyToHead"(): boolean
"isUpdated"(int0: integer): integer
"setDisableBodyRotation"(boolean0: boolean): void
"setItemSwapAnimationTimer"(int0: integer): void
"setLastAnimationSwapTick"(int0: integer): void
"setPoseOverwrite"(pose0: $Pose$$Type): void
"setRotateBodyToHead"(boolean0: boolean): void
"setSideSword"(itemStack0: $ItemStack$$Type): void
"setUpdated"(int0: integer): void
get "itemSwapAnimationTimer"(): integer
get "lastAnimationSwapTick"(): integer
get "lastHeldItems"(): $ItemStack[]
get "lastRotations"(): float[]
get "poseOverwrite"(): $Pose
get "sideSword"(): $ItemStack
get "disableBodyRotation"(): boolean
get "rotateBodyToHead"(): boolean
set "disableBodyRotation"(value: boolean)
set "itemSwapAnimationTimer"(value: integer)
set "lastAnimationSwapTick"(value: integer)
set "poseOverwrite"(value: $Pose$$Type)
set "rotateBodyToHead"(value: boolean)
set "sideSword"(value: $ItemStack$$Type)
set "updated"(value: integer)
}

export namespace $PlayerData {
const probejs$$marker: never
}
export abstract class $PlayerData$$Static implements $PlayerData {
}
}

declare module "dev.tr7zw.notenoughanimations.mixins.EntityRenderDispatcherAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRenderDispatcherAccessor {
}

export namespace $EntityRenderDispatcherAccessor {
const probejs$$marker: never
}
export abstract class $EntityRenderDispatcherAccessor$$Static implements $EntityRenderDispatcherAccessor {
}
}

declare module "dev.tr7zw.entityculling.versionless.access.Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable {
"isCulled"(): boolean
"isForcedVisible"(): boolean
"isOutOfCamera"(): boolean
"setCulled"(boolean0: boolean): void
"setOutOfCamera"(boolean0: boolean): void
"setTimeout"(): void
get "culled"(): boolean
get "forcedVisible"(): boolean
get "outOfCamera"(): boolean
set "culled"(value: boolean)
set "outOfCamera"(value: boolean)
}

export namespace $Cullable {
const probejs$$marker: never
}
export abstract class $Cullable$$Static implements $Cullable {
}
}

declare module "dev.tr7zw.notenoughanimations.versionless.animations.DataHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DataHolder<T = any> {
}

export namespace $DataHolder {
const probejs$$marker: never
}
export abstract class $DataHolder$$Static<T = any> implements $DataHolder<T> {
}
}

declare module "dev.tr7zw.entityculling.mixin.DisplayAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DisplayAccessor {
"invokeSetHeight"(float0: float): void
"invokeSetWidth"(float0: float): void
}

export namespace $DisplayAccessor {
const probejs$$marker: never
}
export abstract class $DisplayAccessor$$Static implements $DisplayAccessor {
}
}

declare module "dev.tr7zw.transition.mc.extending.ExtensionHolder" {
import { $Class$$Type } from "java.lang.Class"

export interface $ExtensionHolder {
"getExtension"<T>(object0: any, class1: $Class$$Type<T>): T
"setExtension"(object0: any, object1: any): void
}

export namespace $ExtensionHolder {
const probejs$$marker: never
}
export abstract class $ExtensionHolder$$Static implements $ExtensionHolder {
}
}

declare module "dev.tr7zw.trender.gui.impl.mixin.client.DrawContextAccessor" {
import { $MultiBufferSource$BufferSource } from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $DrawContextAccessor {
"libgui$getVertexConsumers"(): $MultiBufferSource$BufferSource
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
export abstract class $DrawContextAccessor$$Static implements $DrawContextAccessor {
}
}

declare module "dev.tr7zw.transition.mixin.EntityAccessor" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export interface $EntityAccessor {
"transition$getRawPosition"(): $Vec3
"transition$setRawPosition"(vec30: $Vec3$$Type): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "dev.tr7zw.entityculling.access.EntityRendererInter" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $EntityRendererInter<T extends $Entity = $Entity> {
"entityCullingGetCullingBox"(t0: T): $AABB
"entityCullingIgnoresCulling"(t0: T): boolean
"shadowRenderNameTag"(t0: T, component1: $Component$$Type, poseStack2: $PoseStack$$Type, multiBufferSource3: $MultiBufferSource$$Type, int4: integer, float5: float): void
"shadowShouldShowName"(t0: T): boolean
}

export namespace $EntityRendererInter {
const probejs$$marker: never
}
export abstract class $EntityRendererInter$$Static<T extends $Entity = $Entity> implements $EntityRendererInter<T> {
}
}

