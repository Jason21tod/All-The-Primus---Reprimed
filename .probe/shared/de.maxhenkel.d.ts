declare module "de.maxhenkel.corpse.corelib.death.Death" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $Collection$$Type } from "java.util.Collection"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $UUID } from "java.util.UUID"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $Death {
public static "fromNBT"(compoundTag0: $CompoundTag$$Type): $Death
public static "fromPlayer"(player0: $Player$$Type): $Death
public "getAdditionalItems"(): $NonNullList<$ItemStack>
public "getAllItems"(): $NonNullList<$ItemStack>
public "getArmorInventory"(): $NonNullList<$ItemStack>
public "getBlockPos"(): $BlockPos
public "getDimension"(): string
public "getEquipment"(): $NonNullList<$ItemStack>
public "getExperience"(): integer
public "getId"(): $UUID
public "getMainInventory"(): $NonNullList<$ItemStack>
public "getModel"(): byte
public "getOffHandInventory"(): $NonNullList<$ItemStack>
public "getPlayerName"(): string
public "getPlayerUUID"(): $UUID
public "getPosX"(): double
public "getPosY"(): double
public "getPosZ"(): double
public "getTimestamp"(): long
public "processDrops"(collection0: $Collection$$Type<$ItemEntity$$Type>): void
public "toNBT"(): $CompoundTag
public "toNBT"(boolean0: boolean): $CompoundTag
get "additionalItems"(): $NonNullList<$ItemStack>
get "allItems"(): $NonNullList<$ItemStack>
get "armorInventory"(): $NonNullList<$ItemStack>
get "blockPos"(): $BlockPos
get "dimension"(): string
get "equipment"(): $NonNullList<$ItemStack>
get "experience"(): integer
get "id"(): $UUID
get "mainInventory"(): $NonNullList<$ItemStack>
get "model"(): byte
get "offHandInventory"(): $NonNullList<$ItemStack>
get "playerName"(): string
get "playerUUID"(): $UUID
get "posX"(): double
get "posY"(): double
get "posZ"(): double
get "timestamp"(): long
}
}

declare module "de.maxhenkel.corpse.corelib.death.PlayerDeathEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Death, $Death$$Type } from "de.maxhenkel.corpse.corelib.death.Death"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PlayerDeathEvent extends $Event implements $EventItf {
constructor()
constructor(death0: $Death$$Type, serverPlayer1: $ServerPlayer$$Type, damageSource2: $DamageSource$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getDeath"(): $Death
public "getPlayer"(): $ServerPlayer
public "getSource"(): $DamageSource
public "removeDrops"(): void
public "storeDeath"(): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "death"(): $Death
get "player"(): $ServerPlayer
get "source"(): $DamageSource
}
}

