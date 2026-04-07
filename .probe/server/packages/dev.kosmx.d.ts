declare module "dev.kosmx.playerAnim.api.TransformType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransformType$$Type = ($TransformType | ("position" | "rotation" | "bend"));
}

declare module "dev.kosmx.playerAnim.api.layered.IAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAnimation$$Type = ($IAnimation);
}

declare module "dev.kosmx.playerAnim.api.layered.modifier.AdjustmentModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AdjustmentModifier$$Type = ($AdjustmentModifier);
}

declare module "dev.kosmx.playerAnim.core.util.Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Pair$$Type<L = any, R = any> = ($Pair<L, R>);
}

declare module "dev.kosmx.playerAnim.core.util.Ease" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Ease$$Type = ($Ease | ("linear" | "constant" | "insine" | "outsine" | "inoutsine" | "incubic" | "outcubic" | "inoutcubic" | "inquad" | "outquad" | "inoutquad" | "inquart" | "outquart" | "inoutquart" | "inquint" | "outquint" | "inoutquint" | "inexpo" | "outexpo" | "inoutexpo" | "incirc" | "outcirc" | "inoutcirc" | "inback" | "outback" | "inoutback" | "inelastic" | "outelastic" | "inoutelastic" | "inbounce" | "outbounce" | "inoutbounce"));
}

declare module "dev.kosmx.playerAnim.api.layered.AnimationStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationStack$$Type = ($AnimationStack);
}

declare module "dev.kosmx.playerAnim.impl.IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IUpperPartHelper$$Type = ($IUpperPartHelper);
}

declare module "dev.kosmx.playerAnim.core.util.Vec3d" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vec3d$$Type = ($Vec3d);
}

declare module "dev.kosmx.playerAnim.core.util.Vec3f" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vec3f$$Type = ($Vec3f);
}

declare module "dev.kosmx.playerAnim.impl.IPlayerModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlayerModel$$Type = ($IPlayerModel | (() => void));
}

declare module "dev.kosmx.playerAnim.api.layered.modifier.AbstractModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractModifier$$Type = ($AbstractModifier);
}

declare module "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CameraAccessor$$Type = ($CameraAccessor | ((arg0: boolean) => void));
}

declare module "dev.kosmx.playerAnim.api.layered.ModifierLayer" {
import { $IAnimation, $IAnimation$$Type } from "dev.kosmx.playerAnim.api.layered.IAnimation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModifierLayer$$Type<T extends $IAnimation = $IAnimation> = ($ModifierLayer<T>);
}

declare module "dev.kosmx.playerAnim.core.util.SetableSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SetableSupplier$$Type<T = any> = ($SetableSupplier<T>);
}

declare module "dev.kosmx.playerAnim.impl.IAnimatedPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IAnimatedPlayer$$Type = ($IAnimatedPlayer);
}

declare module "dev.kosmx.playerAnim.api.layered.modifier.AbstractFadeModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractFadeModifier$$Type = ($AbstractFadeModifier);
}

declare module "dev.kosmx.playerAnim.core.impl.AnimationProcessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationProcessor$$Type = ($AnimationProcessor);
}

declare module "dev.kosmx.playerAnim.api.layered.modifier.AbstractFadeModifier$EasingFunction" {
import { $TransformType } from "dev.kosmx.playerAnim.api.TransformType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractFadeModifier$EasingFunction$$Type = ($AbstractFadeModifier$EasingFunction | ((arg0: string, arg1: $TransformType, arg2: float) => float));
}

declare module "dev.kosmx.playerAnim.api.layered.modifier.AdjustmentModifier$PartModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AdjustmentModifier$PartModifier$$Type = ($AdjustmentModifier$PartModifier);
}

declare module "dev.kosmx.playerAnim.impl.IMutableModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMutableModel$$Type = ($IMutableModel);
}

declare module "dev.kosmx.playerAnim.impl.animation.AnimationApplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationApplier$$Type = ($AnimationApplier);
}

declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FirstPersonConfiguration$$Type = ($FirstPersonConfiguration);
}

declare module "dev.kosmx.playerAnim.api.layered.AnimationContainer" {
import { $IAnimation, $IAnimation$$Type } from "dev.kosmx.playerAnim.api.layered.IAnimation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimationContainer$$Type<T extends $IAnimation = $IAnimation> = ($AnimationContainer<T>);
}

declare module "dev.kosmx.playerAnim.core.util.Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vector3$$Type<N extends number = number> = ($Vector3<N>);
}

declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FirstPersonMode$$Type = ($FirstPersonMode | ("none" | "vanilla" | "third_person_model" | "disabled"));
}

declare module "dev.kosmx.playerAnim.api.IPlayer" {
import { $AnimationStack$$Type } from "dev.kosmx.playerAnim.api.layered.AnimationStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlayer$$Type = ($IPlayer | (() => $AnimationStack$$Type));
}

