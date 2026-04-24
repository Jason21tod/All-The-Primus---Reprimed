declare module "com.xiaoyue.celestial_core.events.DamageItemEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $DamageItemEvent extends $Event implements $EventItf {
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getAmount"(): integer
public "getEntity"(): $LivingEntity
public "getRandom"(): $RandomSource
public "getStack"(): $ItemStack
public "setAmount"(int0: integer): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "amount"(): integer
get "entity"(): $LivingEntity
get "random"(): $RandomSource
get "stack"(): $ItemStack
set "amount"(value: integer)
}
}

declare module "com.xiaoyue.celestial_artifacts.mixin.AbstractArrowAccessor" {
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $AbstractArrowAccessor {
"callGetPickupItem"(): $ItemStack
}

export namespace $AbstractArrowAccessor {
const probejs$$marker: never
}
export abstract class $AbstractArrowAccessor$$Static implements $AbstractArrowAccessor {
}
}

declare module "com.xiaoyue.celestial_core.events.LivingJumpEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent$LivingJumpEvent } from "net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $LivingJumpEvent extends $Event implements $EventItf {
constructor(livingEntity0: $LivingEntity$$Type, float1: float)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getEntity"(): $LivingEntity
public "getForgeEvent"(): $LivingEvent$LivingJumpEvent
public "getJumpPower"(): float
public "setJumpPower"(float0: float): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "entity"(): $LivingEntity
get "forgeEvent"(): $LivingEvent$LivingJumpEvent
get "jumpPower"(): float
set "jumpPower"(value: float)
}
}

