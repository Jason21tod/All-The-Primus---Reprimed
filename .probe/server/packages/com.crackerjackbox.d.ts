declare module "com.crackerjackbox.mobcontrol.iface.IServerLevel" {
import { $ServerSavedData$$Type } from "com.crackerjackbox.mobcontrol.data.ServerSavedData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IServerLevel$$Type = ($IServerLevel | (() => $ServerSavedData$$Type));
}

declare module "com.crackerjackbox.mobcontrol.iface.IMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMob$$Type = ($IMob);
}

declare module "com.crackerjackbox.mobcontrol.rule.MobExSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobExSet$$Type = ($MobExSet);
}

declare module "com.crackerjackbox.mobcontrol.rule.MobExSpawn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobExSpawn$$Type = ($MobExSpawn);
}

declare module "com.crackerjackbox.mobcontrol.iface.IPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IPlayer$$Type = ($IPlayer);
}

declare module "com.crackerjackbox.mobcontrol.data.ServerSavedData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerSavedData$$Type = ($ServerSavedData);
}

declare module "com.crackerjackbox.mobcontrol.data.MobSpawn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobSpawn$$Type = ($MobSpawn);
}

declare module "com.crackerjackbox.mobcontrol.data.WeightedItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeightedItem$$Type = ($WeightedItem);
}

declare module "com.crackerjackbox.mobcontrol.data.Weighted" {
import { $IWeightedGroup, $IWeightedGroup$$Type } from "com.crackerjackbox.mobcontrol.iface.IWeightedGroup"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Weighted$$Type<T extends $IWeightedGroup = $IWeightedGroup> = ($Weighted<T>);
}

declare module "com.crackerjackbox.mobcontrol.data.WeightedEffect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WeightedEffect$$Type = ($WeightedEffect);
}

declare module "com.crackerjackbox.mobcontrol.iface.IWeightedGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IWeightedGroup$$Type = ($IWeightedGroup);
}

declare module "com.crackerjackbox.mobcontrol.rule.MobExRule" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobExRule$$Type = ($MobExRule);
}

declare module "com.crackerjackbox.mobcontrol.iface.IBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBlock$$Type = ($IBlock | (() => long));
}

declare module "com.crackerjackbox.mobcontrol.iface.IBat" {
import { $BlockPos } from "net.minecraft.core.BlockPos"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IBat$$Type = ($IBat | ((arg0: $BlockPos) => void));
}

