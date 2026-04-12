declare module "snownee.kiwi.mixin.FireBlockAccess" {
import { $Block } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireBlockAccess$$Type = ($FireBlockAccess | ((arg0: $Block, arg1: integer, arg2: integer) => void));
}

declare module "snownee.kiwi.mixin.AxeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AxeItemAccess$$Type = ($AxeItemAccess);
}

declare module "snownee.kiwi.mixin.VillagerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillagerAccess$$Type = ($VillagerAccess);
}

declare module "snownee.kiwi.mixin.ShapedRecipeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShapedRecipeAccess$$Type = ($ShapedRecipeAccess);
}

declare module "snownee.kiwi.mixin.forge.ItemColorsAccess" {
import { $Map$$Type } from "java.util.Map"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemColor$$Type } from "net.minecraft.client.color.item.ItemColor"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemColorsAccess$$Type = ($ItemColorsAccess | (() => $Map$$Type<$Holder$Reference$$Type<$Item$$Type>, $ItemColor$$Type>));
}

declare module "snownee.kiwi.mixin.RecipeManagerAccess" {
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RecipeManagerAccess$$Type = ($RecipeManagerAccess | (() => $ICondition$IContext$$Type));
}

declare module "snownee.kiwi.mixin.HoeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HoeItemAccess$$Type = ($HoeItemAccess);
}

declare module "snownee.kiwi.mixin.ShovelItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShovelItemAccess$$Type = ($ShovelItemAccess);
}

declare module "snownee.kiwi.mixin.forge.BlockColorsAccess" {
import { $BlockColor$$Type } from "net.minecraft.client.color.block.BlockColor"
import { $Map$$Type } from "java.util.Map"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockColorsAccess$$Type = ($BlockColorsAccess | (() => $Map$$Type<$Holder$Reference$$Type<$Block$$Type>, $BlockColor$$Type>));
}

