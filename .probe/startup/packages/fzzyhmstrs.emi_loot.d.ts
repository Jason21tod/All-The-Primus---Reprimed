declare module "fzzyhmstrs.emi_loot.mixins.LootPoolEntryAccessor" {
import { $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootPoolEntryAccessor$$Type = ($LootPoolEntryAccessor | (() => $LootItemCondition$$Type[]));
}

declare module "fzzyhmstrs.emi_loot.util.LootManagerConditionManager" {
import { $Map$$Type } from "java.util.Map"
import { $LootDataId$$Type } from "net.minecraft.world.level.storage.loot.LootDataId"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootManagerConditionManager$$Type = ($LootManagerConditionManager | (() => $Map$$Type<$LootDataId$$Type<any>, any>));
}

declare module "fzzyhmstrs.emi_loot.mixins.LootPoolAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.FluidPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidPredicateAccessor$$Type = ($FluidPredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.NbtPredicateAccessor" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NbtPredicateAccessor$$Type = ($NbtPredicateAccessor | (() => $CompoundTag$$Type));
}

declare module "fzzyhmstrs.emi_loot.mixins.EnchantmentPredicateAccessor" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnchantmentPredicateAccessor$$Type = ($EnchantmentPredicateAccessor | (() => $Enchantment$$Type));
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityFlagsPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityFlagsPredicateAccessor$$Type = ($EntityFlagsPredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.DistancePredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DistancePredicateAccessor$$Type = ($DistancePredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityEffectPredicateAccessor" {
import { $Map$$Type } from "java.util.Map"
import { $MobEffectsPredicate$MobEffectInstancePredicate$$Type } from "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityEffectPredicateAccessor$$Type = ($EntityEffectPredicateAccessor | (() => $Map$$Type<$MobEffect$$Type, $MobEffectsPredicate$MobEffectInstancePredicate$$Type>));
}

declare module "fzzyhmstrs.emi_loot.mixins.EffectDataAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EffectDataAccessor$$Type = ($EffectDataAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.LightPredicateAccessor" {
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LightPredicateAccessor$$Type = ($LightPredicateAccessor | (() => $MinMaxBounds$Ints$$Type));
}

declare module "fzzyhmstrs.emi_loot.mixins.BlockPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPredicateAccessor$$Type = ($BlockPredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.ItemPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemPredicateAccessor$$Type = ($ItemPredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.StatePredicateAccessor" {
import { $List$$Type } from "java.util.List"
import { $StatePropertiesPredicate$PropertyMatcher$$Type } from "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StatePredicateAccessor$$Type = ($StatePredicateAccessor | (() => $List$$Type<$StatePropertiesPredicate$PropertyMatcher$$Type>));
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityPredicateAccessor$$Type = ($EntityPredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityEquipmentPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityEquipmentPredicateAccessor$$Type = ($EntityEquipmentPredicateAccessor);
}

declare module "fzzyhmstrs.emi_loot.util.LootTablePools" {
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootTablePools$$Type = ($LootTablePools | (() => $LootPool$$Type[]));
}

declare module "fzzyhmstrs.emi_loot.mixins.LocationPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LocationPredicateAccessor$$Type = ($LocationPredicateAccessor);
}

