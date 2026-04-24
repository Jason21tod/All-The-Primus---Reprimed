declare module "dev.xkmc.l2library.init.events.FineScrollEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $FineScrollEvent extends $Event implements $EventItf {
constructor(int0: integer)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "diff"(): integer
set "diff"(value: integer)
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "dev.xkmc.l2itemselector.events.GenericKeyEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GenericKeyEvent extends $Event implements $EventItf {
constructor()
constructor(predicate0: $Predicate$$Type<$InputConstants$Key$$Type>, int1: integer)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getAction"(): integer
public "test"(key0: $InputConstants$Key$$Type): boolean
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "action"(): integer
}
}

declare module "dev.xkmc.l2backpack.content.remote.player.EnderTickEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $EnderTickEvent extends $Event implements $EventItf {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, itemStack1: $ItemStack$$Type, int2: integer)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getPlayer"(): $ServerPlayer
public "getSlot"(): integer
public "getStack"(): $ItemStack
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "player"(): $ServerPlayer
get "slot"(): integer
get "stack"(): $ItemStack
}
}

declare module "dev.xkmc.l2complements.events.event.EnderPickupEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $EnderPickupEvent extends $Event implements $EventItf {
constructor()
constructor(serverPlayer0: $ServerPlayer$$Type, itemStack1: $ItemStack$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getPlayer"(): $ServerPlayer
public "getStack"(): $ItemStack
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "player"(): $ServerPlayer
get "stack"(): $ItemStack
}
}

declare module "dev.xkmc.l2complements.mixin.LevelAccessor" {
import { $LevelEntityGetter } from "net.minecraft.world.level.entity.LevelEntityGetter"
import { $Entity } from "net.minecraft.world.entity.Entity"

export interface $LevelAccessor {
"callGetEntities"(): $LevelEntityGetter<$Entity>
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
export abstract class $LevelAccessor$$Static implements $LevelAccessor {
}
}

declare module "dev.xkmc.l2backpack.content.click.VanillaQuickInsert" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $VanillaQuickInsert {
"l2backpack$quickMove"(serverPlayer0: $ServerPlayer$$Type, abstractContainerMenu1: $AbstractContainerMenu$$Type, itemStack2: $ItemStack$$Type, int3: integer): void
}

export namespace $VanillaQuickInsert {
const probejs$$marker: never
}
export abstract class $VanillaQuickInsert$$Static implements $VanillaQuickInsert {
}
}

declare module "dev.xkmc.l2archery.mixin.AbstractArrowAccessor" {
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

declare module "dev.xkmc.l2backpack.events.ArrowBagEvents$ArrowFindEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ProjectileWeaponItem$$Type } from "net.minecraft.world.item.ProjectileWeaponItem"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IntConsumer, $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"

export class $ArrowBagEvents$ArrowFindEvent extends $Event implements $EventItf {
constructor()
constructor(itemStack0: $ItemStack$$Type, projectileWeaponItem1: $ProjectileWeaponItem$$Type, livingEntity2: $LivingEntity$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getArrow"(): $Pair<$ItemStack, $IntConsumer>
public "getEntity"(): $LivingEntity
public "getStack"(): $ItemStack
public "setProjectile"(pair0: $Pair$$Type<$ItemStack$$Type, $IntConsumer$$Type>): boolean
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "arrow"(): $Pair<$ItemStack, $IntConsumer>
get "entity"(): $LivingEntity
get "stack"(): $ItemStack
set "projectile"(value: $Pair$$Type<$ItemStack$$Type, $IntConsumer$$Type>)
}
}

declare module "dev.xkmc.l2library.base.effects.ForceAddEffectEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MobEffectEvent } from "net.minecraftforge.event.entity.living.MobEffectEvent"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $ForceAddEffectEvent extends $MobEffectEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, mobEffectInstance1: $MobEffectInstance$$Type)

}
}

declare module "dev.xkmc.l2backpack.events.ItemStackShrinkProvider" {
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"

export interface $ItemStackShrinkProvider {
"l2backpack$setShrinkListener"(intConsumer0: $IntConsumer$$Type): void
}

export namespace $ItemStackShrinkProvider {
const probejs$$marker: never
}
export abstract class $ItemStackShrinkProvider$$Static implements $ItemStackShrinkProvider {
}
}

