declare module "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $SlotContext, $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Collection } from "java.util.Collection"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Multimap, $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $CurioAttributeModifierEvent extends $Event implements $EventItf {
constructor(itemStack0: $ItemStack$$Type, slotContext1: $SlotContext$$Type, uUID2: $UUID$$Type, multimap3: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>)
constructor()

public "addModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getItemStack"(): $ItemStack
public "getModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getOriginalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
public "getSlotContext"(): $SlotContext
public "getUuid"(): $UUID
public "removeAttribute"(attribute0: $Attribute$$Type): $Collection<$AttributeModifier>
public "removeModifier"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type): boolean
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "itemStack"(): $ItemStack
get "modifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "originalModifiers"(): $Multimap<$Attribute, $AttributeModifier>
get "slotContext"(): $SlotContext
get "uuid"(): $UUID
}
}

declare module "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $Logger } from "org.slf4j.Logger"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set } from "java.util.Set"
import { $Tuple$$Type } from "net.minecraft.util.Tuple"
import { $UUID$$Type } from "java.util.UUID"
import { $Multimap, $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $SlotResult } from "top.theillusivec4.curios.api.SlotResult"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $List } from "java.util.List"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ICurioStacksHandler, $ICurioStacksHandler$$Type } from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export interface $ICuriosItemHandler {
"addPermanentSlotModifier"(string0: string, uUID1: $UUID$$Type, string2: string, double3: double, operation4: $AttributeModifier$Operation$$Type): void
"addPermanentSlotModifiers"(multimap0: $Multimap$$Type<string, $AttributeModifier$$Type>): void
"addTransientSlotModifier"(string0: string, uUID1: $UUID$$Type, string2: string, double3: double, operation4: $AttributeModifier$Operation$$Type): void
"addTransientSlotModifiers"(multimap0: $Multimap$$Type<string, $AttributeModifier$$Type>): void
"clearCachedSlotModifiers"(): void
"clearSlotModifiers"(): void
"findCurio"(string0: string, int1: integer): $Optional<$SlotResult>
"findCurios"(...string0s: string[]): $List<$SlotResult>
"findCurios"(item0: $Item$$Type): $List<$SlotResult>
"findCurios"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $List<$SlotResult>
"findFirstCurio"(item0: $Item$$Type): $Optional<$SlotResult>
"findFirstCurio"(predicate0: $Predicate$$Type<$ItemStack$$Type>): $Optional<$SlotResult>
"getCurios"(): $Map<string, $ICurioStacksHandler>
"getEquippedCurios"(): $IItemHandlerModifiable
/** @deprecated */
"getFortuneBonus"(): integer
"getFortuneLevel"(lootContext0: $LootContext$$Type): integer
/** @deprecated */
"getLockedSlots"(): $Set<string>
/** @deprecated */
"getLootingBonus"(): integer
"getLootingLevel"(damageSource0: $DamageSource$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): integer
"getModifiers"(): $Multimap<string, $AttributeModifier>
"getSlots"(): integer
"getStacksHandler"(string0: string): $Optional<$ICurioStacksHandler>
"getUpdatingInventories"(): $Set<$ICurioStacksHandler>
"getVisibleSlots"(): integer
"getWearer"(): $LivingEntity
/** @deprecated */
"growSlotType"(string0: string, int1: integer): void
"handleInvalidStacks"(): void
"isEquipped"(item0: $Item$$Type): boolean
"isEquipped"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"loadInventory"(listTag0: $ListTag$$Type): void
/** @deprecated */
"lockSlotType"(string0: string): void
"loseInvalidStack"(itemStack0: $ItemStack$$Type): void
/** @deprecated */
"processSlots"(): void
"readTag"(tag0: $Tag$$Type): void
"removeSlotModifier"(string0: string, uUID1: $UUID$$Type): void
"removeSlotModifiers"(multimap0: $Multimap$$Type<string, $AttributeModifier$$Type>): void
"reset"(): void
"saveInventory"(boolean0: boolean, biPredicate1: $BiPredicate$$Type<$ItemStack$$Type, $SlotContext$$Type>): $ListTag
"saveInventory"(boolean0: boolean): $ListTag
"saveInventory"(boolean0: boolean, predicate1: $Predicate$$Type<$ItemStack$$Type>): $ListTag
"setCurios"(map0: $Map$$Type<string, $ICurioStacksHandler$$Type>): void
/** @deprecated */
"setEnchantmentBonuses"(tuple0: $Tuple$$Type<integer, integer>): void
"setEquippedCurio"(string0: string, int1: integer, itemStack2: $ItemStack$$Type): void
/** @deprecated */
"shrinkSlotType"(string0: string, int1: integer): void
/** @deprecated */
"unlockSlotType"(string0: string, int1: integer, boolean2: boolean, boolean3: boolean): void
"writeTag"(): $Tag
get "curios"(): $Map<string, $ICurioStacksHandler>
get "equippedCurios"(): $IItemHandlerModifiable
get "fortuneBonus"(): integer
get "lockedSlots"(): $Set<string>
get "lootingBonus"(): integer
get "modifiers"(): $Multimap<string, $AttributeModifier>
get "slots"(): integer
get "updatingInventories"(): $Set<$ICurioStacksHandler>
get "visibleSlots"(): integer
get "wearer"(): $LivingEntity
set "curios"(value: $Map$$Type<string, $ICurioStacksHandler$$Type>)
set "enchantmentBonuses"(value: $Tuple$$Type<integer, integer>)
}

export namespace $ICuriosItemHandler {
const LOGGER: $Logger
}
export abstract class $ICuriosItemHandler$$Static implements $ICuriosItemHandler {
static readonly "LOGGER": $Logger

}
}

declare module "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo" {
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Record } from "java.lang.Record"

export class $ICurio$SoundInfo extends $Record {
constructor(soundEvent: $SoundEvent$$Type, volume: float, pitch: float)

/** @deprecated */
public "getPitch"(): float
/** @deprecated */
public "getSoundEvent"(): $SoundEvent
/** @deprecated */
public "getVolume"(): float
public "pitch"(): float
public "soundEvent"(): $SoundEvent
public "volume"(): float
}
}

declare module "top.theillusivec4.curios.api.event.CurioUnequipEvent" {
import { $SlotContext, $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CurioUnequipEvent extends $LivingEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, slotContext1: $SlotContext$$Type)

public "getSlotContext"(): $SlotContext
public "getStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "stack"(): $ItemStack
}
}

declare module "top.theillusivec4.curios.api.event.CurioChangeEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CurioChangeEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, string1: string, int2: integer, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type)

public "getFrom"(): $ItemStack
public "getIdentifier"(): string
public "getSlotIndex"(): integer
public "getTo"(): $ItemStack
get "from"(): $ItemStack
get "identifier"(): string
get "slotIndex"(): integer
get "to"(): $ItemStack
}
}

declare module "top.theillusivec4.curios.api.type.capability.ICurioItem" {
import { $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ICurio$SoundInfo } from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
import { $UUID$$Type } from "java.util.UUID"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ICurio } from "top.theillusivec4.curios.api.type.capability.ICurio"
import { $ICurio$DropRule } from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ICurioItem {
"canEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
"canEquip"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): boolean
"canEquipFromUse"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
"canRightClickEquip"(itemStack0: $ItemStack$$Type): boolean
/** @deprecated */
"canSync"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): boolean
"canSync"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
"canUnequip"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): boolean
"canUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
"canWalkOnPowderedSnow"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
"curioAnimate"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
"curioBreak"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
"curioBreak"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): void
"curioTick"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
"curioTick"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
"getAttributeModifiers"(slotContext0: $SlotContext$$Type, uUID1: $UUID$$Type, itemStack2: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
/** @deprecated */
"getAttributeModifiers"(string0: string, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
"getAttributesTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
/** @deprecated */
"getDropRule"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): $ICurio$DropRule
"getDropRule"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, int2: integer, boolean3: boolean, itemStack4: $ItemStack$$Type): $ICurio$DropRule
"getEquipSound"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): $ICurio$SoundInfo
/** @deprecated */
"getFortuneBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
"getFortuneLevel"(slotContext0: $SlotContext$$Type, lootContext1: $LootContext$$Type, itemStack2: $ItemStack$$Type): integer
/** @deprecated */
"getLootingBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
"getLootingLevel"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, livingEntity2: $LivingEntity$$Type, int3: integer, itemStack4: $ItemStack$$Type): integer
"getSlotsTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
/** @deprecated */
"getTagsTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
"hasCurioCapability"(itemStack0: $ItemStack$$Type): boolean
"isEnderMask"(slotContext0: $SlotContext$$Type, enderMan1: $EnderMan$$Type, itemStack2: $ItemStack$$Type): boolean
"makesPiglinsNeutral"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
"onEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
"onEquip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
"onEquipFromUse"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
"onUnequip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
"onUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
"playRightClickEquipSound"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
"readSyncData"(slotContext0: $SlotContext$$Type, compoundTag1: $CompoundTag$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
"readSyncData"(compoundTag0: $CompoundTag$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
"showAttributesTooltip"(string0: string, itemStack1: $ItemStack$$Type): boolean
"writeSyncData"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): $CompoundTag
/** @deprecated */
"writeSyncData"(itemStack0: $ItemStack$$Type): $CompoundTag
}

export namespace $ICurioItem {
const defaultInstance: $ICurio
}
export abstract class $ICurioItem$$Static implements $ICurioItem {
static readonly "defaultInstance": $ICurio

}
}

declare module "top.theillusivec4.curios.api.event.SlotModifiersUpdatedEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $Set, $Set$$Type } from "java.util.Set"

export class $SlotModifiersUpdatedEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, set1: $Set$$Type<string>)

public "getTypes"(): $Set<string>
get "types"(): $Set<string>
}
}

declare module "top.theillusivec4.curios.api.SlotContext" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"

export class $SlotContext extends $Record {
constructor(identifier: string, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "cosmetic"(): boolean
public "entity"(): $LivingEntity
/** @deprecated */
public "getIdentifier"(): string
/** @deprecated */
public "getIndex"(): integer
/** @deprecated */
public "getWearer"(): $LivingEntity
public "identifier"(): string
public "index"(): integer
public "visible"(): boolean
get "wearer"(): $LivingEntity
}
}

declare module "top.theillusivec4.curios.mixin.core.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {
"getFirstTick"(): boolean
get "firstTick"(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export abstract class $AccessorEntity$$Static implements $AccessorEntity {
}
}

declare module "top.theillusivec4.curios.api.type.capability.ICurio$DropRule" {
import { $Enum } from "java.lang.Enum"

export class $ICurio$DropRule extends $Enum<$ICurio$DropRule> {
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DEFAULT": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule

public static "valueOf"(string0: string): $ICurio$DropRule
public static "values"(): $ICurio$DropRule[]
}
}

declare module "top.theillusivec4.curios.api.type.capability.ICurio" {
import { $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ICurio$SoundInfo } from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
import { $UUID$$Type } from "java.util.UUID"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ICurio$DropRule } from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ICurio {
"canEquip"(slotContext0: $SlotContext$$Type): boolean
/** @deprecated */
"canEquip"(string0: string, livingEntity1: $LivingEntity$$Type): boolean
"canEquipFromUse"(slotContext0: $SlotContext$$Type): boolean
/** @deprecated */
"canRightClickEquip"(): boolean
/** @deprecated */
"canSync"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type): boolean
"canSync"(slotContext0: $SlotContext$$Type): boolean
"canUnequip"(slotContext0: $SlotContext$$Type): boolean
/** @deprecated */
"canUnequip"(string0: string, livingEntity1: $LivingEntity$$Type): boolean
"canWalkOnPowderedSnow"(slotContext0: $SlotContext$$Type): boolean
/** @deprecated */
"curioAnimate"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type): void
"curioBreak"(slotContext0: $SlotContext$$Type): void
/** @deprecated */
"curioBreak"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): void
/** @deprecated */
"curioTick"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type): void
"curioTick"(slotContext0: $SlotContext$$Type): void
"getAttributeModifiers"(slotContext0: $SlotContext$$Type, uUID1: $UUID$$Type): $Multimap<$Attribute, $AttributeModifier>
/** @deprecated */
"getAttributeModifiers"(string0: string): $Multimap<$Attribute, $AttributeModifier>
"getAttributesTooltip"(list0: $List$$Type<$Component$$Type>): $List<$Component>
"getDropRule"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, int2: integer, boolean3: boolean): $ICurio$DropRule
/** @deprecated */
"getDropRule"(livingEntity0: $LivingEntity$$Type): $ICurio$DropRule
"getEquipSound"(slotContext0: $SlotContext$$Type): $ICurio$SoundInfo
/** @deprecated */
"getFortuneBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
"getFortuneLevel"(slotContext0: $SlotContext$$Type, lootContext1: $LootContext$$Type): integer
/** @deprecated */
"getLootingBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
"getLootingLevel"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, livingEntity2: $LivingEntity$$Type, int3: integer): integer
"getSlotsTooltip"(list0: $List$$Type<$Component$$Type>): $List<$Component>
"getStack"(): $ItemStack
/** @deprecated */
"getTagsTooltip"(list0: $List$$Type<$Component$$Type>): $List<$Component>
"isEnderMask"(slotContext0: $SlotContext$$Type, enderMan1: $EnderMan$$Type): boolean
"makesPiglinsNeutral"(slotContext0: $SlotContext$$Type): boolean
"onEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
"onEquip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type): void
"onEquipFromUse"(slotContext0: $SlotContext$$Type): void
"onUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
"onUnequip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type): void
/** @deprecated */
"playRightClickEquipSound"(livingEntity0: $LivingEntity$$Type): void
/** @deprecated */
"readSyncData"(compoundTag0: $CompoundTag$$Type): void
"readSyncData"(slotContext0: $SlotContext$$Type, compoundTag1: $CompoundTag$$Type): void
/** @deprecated */
"showAttributesTooltip"(string0: string): boolean
/** @deprecated */
"writeSyncData"(): $CompoundTag
"writeSyncData"(slotContext0: $SlotContext$$Type): $CompoundTag
get "stack"(): $ItemStack
}

export namespace $ICurio {
function playBreakAnimation(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): void
}
export abstract class $ICurio$$Static implements $ICurio {
static "playBreakAnimation"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): void
}
}

declare module "top.theillusivec4.curios.api.event.CurioDropsEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ICuriosItemHandler, $ICuriosItemHandler$$Type } from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import { $Collection, $Collection$$Type } from "java.util.Collection"

export class $CurioDropsEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, iCuriosItemHandler1: $ICuriosItemHandler$$Type, damageSource2: $DamageSource$$Type, collection3: $Collection$$Type<$ItemEntity$$Type>, int4: integer, boolean5: boolean)

public "getCurioHandler"(): $ICuriosItemHandler
public "getDrops"(): $Collection<$ItemEntity>
public "getLootingLevel"(): integer
public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "drops"(): $Collection<$ItemEntity>
get "lootingLevel"(): integer
get "source"(): $DamageSource
get "recentlyHit"(): boolean
}
}

declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import { $IDynamicStackHandler } from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ICurio$DropRule } from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import { $Map } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export interface $ICurioStacksHandler {
"addPermanentModifier"(attributeModifier0: $AttributeModifier$$Type): void
"addTransientModifier"(attributeModifier0: $AttributeModifier$$Type): void
"applySyncTag"(compoundTag0: $CompoundTag$$Type): void
"canToggleRendering"(): boolean
"clearCachedModifiers"(): void
"clearModifiers"(): void
"copyModifiers"(iCurioStacksHandler0: $ICurioStacksHandler$$Type): void
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"getCachedModifiers"(): $Set<$AttributeModifier>
"getCosmeticStacks"(): $IDynamicStackHandler
"getDropRule"(): $ICurio$DropRule
"getIdentifier"(): string
"getModifiers"(): $Map<$UUID, $AttributeModifier>
"getModifiersByOperation"(operation0: $AttributeModifier$Operation$$Type): $Collection<$AttributeModifier>
"getPermanentModifiers"(): $Set<$AttributeModifier>
"getRenders"(): $NonNullList<boolean>
/** @deprecated */
"getSizeShift"(): integer
"getSlots"(): integer
"getStacks"(): $IDynamicStackHandler
"getSyncTag"(): $CompoundTag
/** @deprecated */
"grow"(int0: integer): void
"hasCosmetic"(): boolean
"isVisible"(): boolean
"removeModifier"(uUID0: $UUID$$Type): void
"serializeNBT"(): $CompoundTag
/** @deprecated */
"shrink"(int0: integer): void
"update"(): void
get "cachedModifiers"(): $Set<$AttributeModifier>
get "cosmeticStacks"(): $IDynamicStackHandler
get "dropRule"(): $ICurio$DropRule
get "identifier"(): string
get "modifiers"(): $Map<$UUID, $AttributeModifier>
get "permanentModifiers"(): $Set<$AttributeModifier>
get "renders"(): $NonNullList<boolean>
get "sizeShift"(): integer
get "slots"(): integer
get "stacks"(): $IDynamicStackHandler
get "syncTag"(): $CompoundTag
get "visible"(): boolean
}

export namespace $ICurioStacksHandler {
const probejs$$marker: never
}
export abstract class $ICurioStacksHandler$$Static implements $ICurioStacksHandler {
}
}

declare module "top.theillusivec4.caelus.api.RenderCapeEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $RenderCapeEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type)

}
}

declare module "top.theillusivec4.curios.api.event.DropRulesEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $ICuriosItemHandler, $ICuriosItemHandler$$Type } from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import { $ICurio$DropRule, $ICurio$DropRule$$Type } from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import { $Tuple } from "net.minecraft.util.Tuple"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $DropRulesEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, iCuriosItemHandler1: $ICuriosItemHandler$$Type, damageSource2: $DamageSource$$Type, int3: integer, boolean4: boolean)
constructor()

public "addOverride"(predicate0: $Predicate$$Type<$ItemStack$$Type>, dropRule1: $ICurio$DropRule$$Type): void
public "getCurioHandler"(): $ICuriosItemHandler
public "getLootingLevel"(): integer
public "getOverrides"(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>
public "getSource"(): $DamageSource
public "isRecentlyHit"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "lootingLevel"(): integer
get "overrides"(): $ImmutableList<$Tuple<$Predicate<$ItemStack>, $ICurio$DropRule>>
get "source"(): $DamageSource
get "recentlyHit"(): boolean
}
}

declare module "top.theillusivec4.curios.api.event.CurioEquipEvent" {
import { $SlotContext, $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $CurioEquipEvent extends $LivingEvent {
constructor()
constructor(itemStack0: $ItemStack$$Type, slotContext1: $SlotContext$$Type)

public "getSlotContext"(): $SlotContext
public "getStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "stack"(): $ItemStack
}
}

declare module "top.theillusivec4.curios.api.SlotResult" {
import { $SlotContext, $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $Record } from "java.lang.Record"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $SlotResult extends $Record {
constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "slotContext"(): $SlotContext
public "stack"(): $ItemStack
}
}

declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $IItemHandler } from "net.minecraftforge.items.IItemHandler"
import { $List } from "java.util.List"
import { $Container } from "net.minecraft.world.Container"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IItemHandlerModifiable } from "net.minecraftforge.items.IItemHandlerModifiable"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
"asContainer"(): $Container
"clear"(ingredient: $Ingredient$$Type): void
"clear"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countNonEmpty"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
"extractItem"(int0: integer, int1: integer, boolean2: boolean): $ItemStack
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getHeight"(): integer
"getPreviousStackInSlot"(int0: integer): $ItemStack
"getSlotLimit"(i: integer): integer
"getSlotLimit"(int0: integer): integer
"getSlots"(): integer
"getSlots"(): integer
"getStackInSlot"(int0: integer): $ItemStack
"getStackInSlot"(i: integer): $ItemStack
"getWidth"(): integer
"grow"(int0: integer): void
"insertItem"(int0: integer, itemStack1: $ItemStack$$Type, boolean2: boolean): $ItemStack
"insertItem"(i: integer, itemStack: $ItemStack$$Type, b: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isItemValid"(i: integer, itemStack: $ItemStack$$Type): boolean
"isItemValid"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $IItemHandler
"serializeNBT"(): $CompoundTag
"setChanged"(): void
"setPreviousStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"shrink"(int0: integer): void
get "allItems"(): $List<$ItemStack>
get "height"(): integer
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $IDynamicStackHandler {
const probejs$$marker: never
}
export abstract class $IDynamicStackHandler$$Static implements $IDynamicStackHandler {
}
}

