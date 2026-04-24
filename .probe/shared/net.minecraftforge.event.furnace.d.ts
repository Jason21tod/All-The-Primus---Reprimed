declare module "net.minecraftforge.event.furnace.FurnaceFuelBurnTimeEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export class $FurnaceFuelBurnTimeEvent extends $Event implements $EventItf {
constructor(itemStack0: $ItemStack$$Type, int1: integer, recipeType2: $RecipeType$$Type<any>)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBurnTime"(): integer
public "getItemStack"(): $ItemStack
public "getRecipeType"(): $RecipeType<any>
public "setBurnTime"(int0: integer): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "burnTime"(): integer
get "itemStack"(): $ItemStack
get "recipeType"(): $RecipeType<any>
set "burnTime"(value: integer)
}
}

