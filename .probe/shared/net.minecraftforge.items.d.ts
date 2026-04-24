declare module "net.minecraftforge.items.IItemHandlerModifiable" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IItemHandlerModifiable extends $IItemHandler {
"asContainer"(): $Container
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(int0: integer): integer
"getSlotLimit"(i: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(int0: integer): $ItemStack
"getStackInSlot"(i: integer): $ItemStack
"getWidth"(): integer
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"setChanged"(): void
"setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
export abstract class $IItemHandlerModifiable$$Static implements $IItemHandlerModifiable {
}
}

declare module "net.minecraftforge.items.IItemHandler" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $InventoryKJS } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IItemHandler extends $InventoryKJS {
"asContainer"(): $Container
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"count"(): integer
"count"(ingredient: $Ingredient$$Type): integer
"countNonEmpty"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"find"(ingredient: $Ingredient$$Type): integer
"find"(): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getSlotLimit"(int0: integer): integer
"getSlotLimit"(i: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(int0: integer): $ItemStack
"getStackInSlot"(i: integer): $ItemStack
"getWidth"(): integer
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"setChanged"(): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IItemHandler {
const probejs$$marker: never
}
export abstract class $IItemHandler$$Static implements $IItemHandler {
}
}

