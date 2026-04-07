declare module "snownee.kiwi.mixin.FireBlockAccess" {
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $FireBlockAccess {
"callSetFlammable"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockAccess {
const probejs$$marker: never
}
export abstract class $FireBlockAccess$$Static implements $FireBlockAccess {
}
}

declare module "snownee.kiwi.mixin.AxeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccess {
}

export namespace $AxeItemAccess {
const probejs$$marker: never
}
export abstract class $AxeItemAccess$$Static implements $AxeItemAccess {
}
}

declare module "snownee.kiwi.mixin.VillagerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerAccess {
}

export namespace $VillagerAccess {
const probejs$$marker: never
}
export abstract class $VillagerAccess$$Static implements $VillagerAccess {
}
}

declare module "snownee.kiwi.mixin.ShapedRecipeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShapedRecipeAccess {
}

export namespace $ShapedRecipeAccess {
const probejs$$marker: never
}
export abstract class $ShapedRecipeAccess$$Static implements $ShapedRecipeAccess {
}
}

declare module "snownee.kiwi.mixin.forge.ItemColorsAccess" {
import { $Map } from "java.util.Map"
import { $Item } from "net.minecraft.world.item.Item"
import { $ItemColor } from "net.minecraft.client.color.item.ItemColor"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $ItemColorsAccess {
"getItemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
get "itemColors"(): $Map<$Holder$Reference<$Item>, $ItemColor>
}

export namespace $ItemColorsAccess {
const probejs$$marker: never
}
export abstract class $ItemColorsAccess$$Static implements $ItemColorsAccess {
}
}

declare module "snownee.kiwi.mixin.RecipeManagerAccess" {
import { $ICondition$IContext } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

export interface $RecipeManagerAccess {
"getContext"(): $ICondition$IContext
get "context"(): $ICondition$IContext
}

export namespace $RecipeManagerAccess {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccess$$Static implements $RecipeManagerAccess {
}
}

declare module "snownee.kiwi.mixin.HoeItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HoeItemAccess {
}

export namespace $HoeItemAccess {
const probejs$$marker: never
}
export abstract class $HoeItemAccess$$Static implements $HoeItemAccess {
}
}

declare module "snownee.kiwi.mixin.ShovelItemAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccess {
}

export namespace $ShovelItemAccess {
const probejs$$marker: never
}
export abstract class $ShovelItemAccess$$Static implements $ShovelItemAccess {
}
}

declare module "snownee.kiwi.mixin.forge.BlockColorsAccess" {
import { $BlockColor } from "net.minecraft.client.color.block.BlockColor"
import { $Map } from "java.util.Map"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $BlockColorsAccess {
"getBlockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
get "blockColors"(): $Map<$Holder$Reference<$Block>, $BlockColor>
}

export namespace $BlockColorsAccess {
const probejs$$marker: never
}
export abstract class $BlockColorsAccess$$Static implements $BlockColorsAccess {
}
}

