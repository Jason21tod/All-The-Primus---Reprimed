declare module "net.minecraftforge.event.enchanting.EnchantmentLevelSetEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $EnchantmentLevelSetEvent extends $Event implements $EventItf {
constructor(level0: $Level$$Type, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, itemStack4: $ItemStack$$Type, int5: integer)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEnchantLevel"(): integer
public "getEnchantRow"(): integer
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getOriginalLevel"(): integer
public "getPos"(): $BlockPos
public "getPower"(): integer
public "setEnchantLevel"(int0: integer): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "enchantLevel"(): integer
get "enchantRow"(): integer
get "item"(): $ItemStack
get "level"(): $Level
get "originalLevel"(): integer
get "pos"(): $BlockPos
get "power"(): integer
set "enchantLevel"(value: integer)
}
}

