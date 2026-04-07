declare module "fzzyhmstrs.emi_loot.mixins.LootPoolEntryAccessor" {
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootPoolEntryAccessor {
"getConditions"(): $LootItemCondition[]
get "conditions"(): $LootItemCondition[]
}

export namespace $LootPoolEntryAccessor {
const probejs$$marker: never
}
export abstract class $LootPoolEntryAccessor$$Static implements $LootPoolEntryAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.util.LootManagerConditionManager" {
import { $Map } from "java.util.Map"
import { $LootDataId } from "net.minecraft.world.level.storage.loot.LootDataId"

export interface $LootManagerConditionManager {
"getKeysToValues"(): $Map<$LootDataId<any>, any>
get "keysToValues"(): $Map<$LootDataId<any>, any>
}

export namespace $LootManagerConditionManager {
const probejs$$marker: never
}
export abstract class $LootManagerConditionManager$$Static implements $LootManagerConditionManager {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.LootPoolAccessor" {
import { $NumberProvider } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootPoolEntryContainer } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

export interface $LootPoolAccessor {
"getConditions"(): $LootItemCondition[]
"getEntries"(): $LootPoolEntryContainer[]
"getFunctions"(): $LootItemFunction[]
"getRolls"(): $NumberProvider
get "conditions"(): $LootItemCondition[]
get "entries"(): $LootPoolEntryContainer[]
get "functions"(): $LootItemFunction[]
get "rolls"(): $NumberProvider
}

export namespace $LootPoolAccessor {
const probejs$$marker: never
}
export abstract class $LootPoolAccessor$$Static implements $LootPoolAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.FluidPredicateAccessor" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"
import { $StatePropertiesPredicate } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export interface $FluidPredicateAccessor {
"getFluid"(): $Fluid
"getState"(): $StatePropertiesPredicate
"getTag"(): $TagKey<$Fluid>
get "fluid"(): $Fluid
get "state"(): $StatePropertiesPredicate
get "tag"(): $TagKey<$Fluid>
}

export namespace $FluidPredicateAccessor {
const probejs$$marker: never
}
export abstract class $FluidPredicateAccessor$$Static implements $FluidPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.NbtPredicateAccessor" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"

export interface $NbtPredicateAccessor {
"getNbt"(): $CompoundTag
get "nbt"(): $CompoundTag
}

export namespace $NbtPredicateAccessor {
const probejs$$marker: never
}
export abstract class $NbtPredicateAccessor$$Static implements $NbtPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.EnchantmentPredicateAccessor" {
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"

export interface $EnchantmentPredicateAccessor {
"getEnchantment"(): $Enchantment
get "enchantment"(): $Enchantment
}

export namespace $EnchantmentPredicateAccessor {
const probejs$$marker: never
}
export abstract class $EnchantmentPredicateAccessor$$Static implements $EnchantmentPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityFlagsPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityFlagsPredicateAccessor {
"getIsBaby"(): boolean
"getIsOnFire"(): boolean
"getIsSneaking"(): boolean
"getIsSprinting"(): boolean
"getIsSwimming"(): boolean
get "isBaby"(): boolean
get "isOnFire"(): boolean
get "isSneaking"(): boolean
get "isSprinting"(): boolean
get "isSwimming"(): boolean
}

export namespace $EntityFlagsPredicateAccessor {
const probejs$$marker: never
}
export abstract class $EntityFlagsPredicateAccessor$$Static implements $EntityFlagsPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.DistancePredicateAccessor" {
import { $MinMaxBounds$Doubles } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"

export interface $DistancePredicateAccessor {
"getAbsolute"(): $MinMaxBounds$Doubles
"getHorizontal"(): $MinMaxBounds$Doubles
"getX"(): $MinMaxBounds$Doubles
"getY"(): $MinMaxBounds$Doubles
"getZ"(): $MinMaxBounds$Doubles
get "absolute"(): $MinMaxBounds$Doubles
get "horizontal"(): $MinMaxBounds$Doubles
get "x"(): $MinMaxBounds$Doubles
get "y"(): $MinMaxBounds$Doubles
get "z"(): $MinMaxBounds$Doubles
}

export namespace $DistancePredicateAccessor {
const probejs$$marker: never
}
export abstract class $DistancePredicateAccessor$$Static implements $DistancePredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityEffectPredicateAccessor" {
import { $Map } from "java.util.Map"
import { $MobEffectsPredicate$MobEffectInstancePredicate } from "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export interface $EntityEffectPredicateAccessor {
"getEffects"(): $Map<$MobEffect, $MobEffectsPredicate$MobEffectInstancePredicate>
get "effects"(): $Map<$MobEffect, $MobEffectsPredicate$MobEffectInstancePredicate>
}

export namespace $EntityEffectPredicateAccessor {
const probejs$$marker: never
}
export abstract class $EntityEffectPredicateAccessor$$Static implements $EntityEffectPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.EffectDataAccessor" {
import { $MinMaxBounds$Ints } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"

export interface $EffectDataAccessor {
"getAmbient"(): boolean
"getAmplifier"(): $MinMaxBounds$Ints
"getDuration"(): $MinMaxBounds$Ints
"getVisible"(): boolean
get "ambient"(): boolean
get "amplifier"(): $MinMaxBounds$Ints
get "duration"(): $MinMaxBounds$Ints
get "visible"(): boolean
}

export namespace $EffectDataAccessor {
const probejs$$marker: never
}
export abstract class $EffectDataAccessor$$Static implements $EffectDataAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.LightPredicateAccessor" {
import { $MinMaxBounds$Ints } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"

export interface $LightPredicateAccessor {
"getRange"(): $MinMaxBounds$Ints
get "range"(): $MinMaxBounds$Ints
}

export namespace $LightPredicateAccessor {
const probejs$$marker: never
}
export abstract class $LightPredicateAccessor$$Static implements $LightPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.BlockPredicateAccessor" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $NbtPredicate } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $Set } from "java.util.Set"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $StatePropertiesPredicate } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export interface $BlockPredicateAccessor {
"getBlocks"(): $Set<$Block>
"getNbt"(): $NbtPredicate
"getState"(): $StatePropertiesPredicate
"getTag"(): $TagKey<$Block>
get "blocks"(): $Set<$Block>
get "nbt"(): $NbtPredicate
get "state"(): $StatePropertiesPredicate
get "tag"(): $TagKey<$Block>
}

export namespace $BlockPredicateAccessor {
const probejs$$marker: never
}
export abstract class $BlockPredicateAccessor$$Static implements $BlockPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.ItemPredicateAccessor" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $MinMaxBounds$Ints } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $EnchantmentPredicate } from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import { $Item } from "net.minecraft.world.item.Item"
import { $Set } from "java.util.Set"

export interface $ItemPredicateAccessor {
"getCount"(): $MinMaxBounds$Ints
"getDurability"(): $MinMaxBounds$Ints
"getEnchantments"(): $EnchantmentPredicate[]
"getItems"(): $Set<$Item>
"getStoredEnchantments"(): $EnchantmentPredicate[]
"getTag"(): $TagKey<$Item>
get "count"(): $MinMaxBounds$Ints
get "durability"(): $MinMaxBounds$Ints
get "enchantments"(): $EnchantmentPredicate[]
get "items"(): $Set<$Item>
get "storedEnchantments"(): $EnchantmentPredicate[]
get "tag"(): $TagKey<$Item>
}

export namespace $ItemPredicateAccessor {
const probejs$$marker: never
}
export abstract class $ItemPredicateAccessor$$Static implements $ItemPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.StatePredicateAccessor" {
import { $List } from "java.util.List"
import { $StatePropertiesPredicate$PropertyMatcher } from "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher"

export interface $StatePredicateAccessor {
"getConditions"(): $List<$StatePropertiesPredicate$PropertyMatcher>
get "conditions"(): $List<$StatePropertiesPredicate$PropertyMatcher>
}

export namespace $StatePredicateAccessor {
const probejs$$marker: never
}
export abstract class $StatePredicateAccessor$$Static implements $StatePredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityPredicateAccessor" {
import { $MobEffectsPredicate } from "net.minecraft.advancements.critereon.MobEffectsPredicate"
import { $EntityEquipmentPredicate } from "net.minecraft.advancements.critereon.EntityEquipmentPredicate"
import { $EntitySubPredicate } from "net.minecraft.advancements.critereon.EntitySubPredicate"
import { $EntityFlagsPredicate } from "net.minecraft.advancements.critereon.EntityFlagsPredicate"
import { $NbtPredicate } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $LocationPredicate } from "net.minecraft.advancements.critereon.LocationPredicate"
import { $EntityTypePredicate } from "net.minecraft.advancements.critereon.EntityTypePredicate"
import { $EntityPredicate } from "net.minecraft.advancements.critereon.EntityPredicate"
import { $DistancePredicate } from "net.minecraft.advancements.critereon.DistancePredicate"

export interface $EntityPredicateAccessor {
"getDistance"(): $DistancePredicate
"getEffects"(): $MobEffectsPredicate
"getEquipment"(): $EntityEquipmentPredicate
"getFlags"(): $EntityFlagsPredicate
"getLocation"(): $LocationPredicate
"getNbt"(): $NbtPredicate
"getPassenger"(): $EntityPredicate
"getSteppingOn"(): $LocationPredicate
"getTargetedEntity"(): $EntityPredicate
"getTeam"(): string
"getType"(): $EntityTypePredicate
"getTypeSpecific"(): $EntitySubPredicate
"getVehicle"(): $EntityPredicate
get "distance"(): $DistancePredicate
get "effects"(): $MobEffectsPredicate
get "equipment"(): $EntityEquipmentPredicate
get "flags"(): $EntityFlagsPredicate
get "location"(): $LocationPredicate
get "nbt"(): $NbtPredicate
get "passenger"(): $EntityPredicate
get "steppingOn"(): $LocationPredicate
get "targetedEntity"(): $EntityPredicate
get "team"(): string
get "type"(): $EntityTypePredicate
get "typeSpecific"(): $EntitySubPredicate
get "vehicle"(): $EntityPredicate
}

export namespace $EntityPredicateAccessor {
const probejs$$marker: never
}
export abstract class $EntityPredicateAccessor$$Static implements $EntityPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.EntityEquipmentPredicateAccessor" {
import { $ItemPredicate } from "net.minecraft.advancements.critereon.ItemPredicate"

export interface $EntityEquipmentPredicateAccessor {
"getChest"(): $ItemPredicate
"getFeet"(): $ItemPredicate
"getHead"(): $ItemPredicate
"getLegs"(): $ItemPredicate
"getMainhand"(): $ItemPredicate
"getOffhand"(): $ItemPredicate
get "chest"(): $ItemPredicate
get "feet"(): $ItemPredicate
get "head"(): $ItemPredicate
get "legs"(): $ItemPredicate
get "mainhand"(): $ItemPredicate
get "offhand"(): $ItemPredicate
}

export namespace $EntityEquipmentPredicateAccessor {
const probejs$$marker: never
}
export abstract class $EntityEquipmentPredicateAccessor$$Static implements $EntityEquipmentPredicateAccessor {
}
}

declare module "fzzyhmstrs.emi_loot.util.LootTablePools" {
import { $LootPool } from "net.minecraft.world.level.storage.loot.LootPool"

export interface $LootTablePools {
"getPools"(): $LootPool[]
get "pools"(): $LootPool[]
}

export namespace $LootTablePools {
const probejs$$marker: never
}
export abstract class $LootTablePools$$Static implements $LootTablePools {
}
}

declare module "fzzyhmstrs.emi_loot.mixins.LocationPredicateAccessor" {
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $LightPredicate } from "net.minecraft.advancements.critereon.LightPredicate"
import { $MinMaxBounds$Doubles } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $BlockPredicate } from "net.minecraft.advancements.critereon.BlockPredicate"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $FluidPredicate } from "net.minecraft.advancements.critereon.FluidPredicate"

export interface $LocationPredicateAccessor {
"getBiome"(): $ResourceKey<$Biome>
"getBlock"(): $BlockPredicate
"getDimension"(): $ResourceKey<$Level>
"getFeature"(): $ResourceKey<$Structure>
"getFluid"(): $FluidPredicate
"getLight"(): $LightPredicate
"getSmokey"(): boolean
"getX"(): $MinMaxBounds$Doubles
"getY"(): $MinMaxBounds$Doubles
"getZ"(): $MinMaxBounds$Doubles
get "biome"(): $ResourceKey<$Biome>
get "block"(): $BlockPredicate
get "dimension"(): $ResourceKey<$Level>
get "feature"(): $ResourceKey<$Structure>
get "fluid"(): $FluidPredicate
get "light"(): $LightPredicate
get "smokey"(): boolean
get "x"(): $MinMaxBounds$Doubles
get "y"(): $MinMaxBounds$Doubles
get "z"(): $MinMaxBounds$Doubles
}

export namespace $LocationPredicateAccessor {
const probejs$$marker: never
}
export abstract class $LocationPredicateAccessor$$Static implements $LocationPredicateAccessor {
}
}

