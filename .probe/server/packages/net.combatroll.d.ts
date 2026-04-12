declare module "net.combatroll.internals.RollManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RollManager$$Type = ($RollManager);
}

declare module "net.combatroll.api.RollInvulnerable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RollInvulnerable$$Type = ($RollInvulnerable | ((arg0: integer) => void));
}

declare module "net.combatroll.mixin.client.KeybindingAccessor" {
import { $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $KeybindingAccessor$$Type = ($KeybindingAccessor | (() => $InputConstants$Key$$Type));
}

declare module "net.combatroll.internals.RollManager$CooldownInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RollManager$CooldownInfo$$Type = ($RollManager$CooldownInfo);
}

declare module "net.combatroll.mixin.PlayerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlayerEntityAccessor$$Type = ($PlayerEntityAccessor | (() => boolean));
}

declare module "net.combatroll.internals.RollingEntity" {
import { $RollManager$$Type } from "net.combatroll.internals.RollManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RollingEntity$$Type = ($RollingEntity | (() => $RollManager$$Type));
}

declare module "net.combatroll.client.animation.AnimatablePlayer" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimatablePlayer$$Type = ($AnimatablePlayer | ((arg0: string, arg1: $Vec3) => void));
}

