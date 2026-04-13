declare module "net.minecraft.advancements.critereon.ContextAwarePredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $SerializationContext$$Type } from "net.minecraft.advancements.critereon.SerializationContext"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $LootContext, $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $ContextAwarePredicate {
static readonly "ANY": $ContextAwarePredicate

public static "create"(...lootItemCondition0s: $LootItemCondition$$Type[]): $ContextAwarePredicate
public static "fromElement"(string0: string, deserializationContext1: $DeserializationContext$$Type, jsonElement2: $JsonElement$$Type, lootContextParamSet3: $LootContextParamSet$$Type): $ContextAwarePredicate
public "matches"(lootContext0: $LootContext$$Type): boolean
public static "toJson"(contextAwarePredicate0s: $ContextAwarePredicate$$Type[], serializationContext1: $SerializationContext$$Type): $JsonElement
public "toJson"(serializationContext0: $SerializationContext$$Type): $JsonElement
get "compositePredicates"(): $Predicate<$LootContext>
set "compositePredicates"(value: $Predicate$$Type<$LootContext$$Type>)
}
}

declare module "net.minecraft.advancements.CriterionTriggerInstance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $SerializationContext$$Type } from "net.minecraft.advancements.critereon.SerializationContext"
import { $JsonObject } from "com.google.gson.JsonObject"

export interface $CriterionTriggerInstance {
"getCriterion"(): $ResourceLocation
"serializeToJson"(serializationContext0: $SerializationContext$$Type): $JsonObject
get "criterion"(): $ResourceLocation
}

export namespace $CriterionTriggerInstance {
const probejs$$marker: never
}
export abstract class $CriterionTriggerInstance$$Static implements $CriterionTriggerInstance {
}
}

declare module "net.minecraft.advancements.CriterionTrigger$Listener" {
import { $CriterionTriggerInstance, $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $PlayerAdvancements$$Type } from "net.minecraft.server.PlayerAdvancements"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"

export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance = $CriterionTriggerInstance> {
constructor(t0: T, advancement1: $Advancement$$Type, string2: string)

public "getTriggerInstance"(): T
public "run"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "triggerInstance"(): T
}
}

declare module "net.minecraft.advancements.DisplayInfo" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FrameType, $FrameType$$Type } from "net.minecraft.advancements.FrameType"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $DisplayInfoFTBL } from "dev.ftb.mods.ftblibrary.core.DisplayInfoFTBL"

export class $DisplayInfo implements $DisplayInfoFTBL {
constructor(itemStack0: $ItemStack$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean)

public static "fromJson"(jsonObject0: $JsonObject$$Type): $DisplayInfo
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $DisplayInfo
public "getBackground"(): $ResourceLocation
public "getDescription"(): $Component
public "getFrame"(): $FrameType
public "getIcon"(): $ItemStack
public "getTitle"(): $Component
public "getX"(): float
public "getY"(): float
public "isHidden"(): boolean
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "setLocation"(float0: float, float1: float): void
public "shouldAnnounceChat"(): boolean
public "shouldShowToast"(): boolean
get "background"(): $ResourceLocation
get "description"(): $Component
get "frame"(): $FrameType
get "icon"(): $ItemStack
get "title"(): $Component
get "x"(): float
get "y"(): float
get "hidden"(): boolean
}
}

declare module "net.minecraft.advancements.critereon.SerializationContext" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $SerializationContext {
static readonly "INSTANCE": $SerializationContext

constructor()

public "serializeConditions"(lootItemCondition0s: $LootItemCondition$$Type[]): $JsonElement
}
}

declare module "net.minecraft.advancements.AdvancementList$Listener" {
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"

export interface $AdvancementList$Listener {
"onAddAdvancementRoot"(advancement0: $Advancement$$Type): void
"onAddAdvancementTask"(advancement0: $Advancement$$Type): void
"onAdvancementsCleared"(): void
"onRemoveAdvancementRoot"(advancement0: $Advancement$$Type): void
"onRemoveAdvancementTask"(advancement0: $Advancement$$Type): void
}

export namespace $AdvancementList$Listener {
const probejs$$marker: never
}
export abstract class $AdvancementList$Listener$$Static implements $AdvancementList$Listener {
}
}

declare module "net.minecraft.advancements.critereon.ItemPredicate" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $NbtPredicate$$Type } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set, $Set$$Type } from "java.util.Set"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $EnchantmentPredicate$$Type } from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import { $Map } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ItemPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.ItemPredicateAccessor"

export class $ItemPredicate implements $ItemPredicateAccessor {
static readonly "ANY": $ItemPredicate

constructor()
constructor(tagKey0: $TagKey$$Type<$Item$$Type>, set1: $Set$$Type<$Item$$Type>, ints2: $MinMaxBounds$Ints$$Type, ints3: $MinMaxBounds$Ints$$Type, enchantmentPredicate4s: $EnchantmentPredicate$$Type[], enchantmentPredicate5s: $EnchantmentPredicate$$Type[], potion6: $Potion$$Type, nbtPredicate7: $NbtPredicate$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $ItemPredicate
public static "fromJsonArray"(jsonElement0: $JsonElement$$Type): $ItemPredicate[]
public static "getPredicates"(): $Map<$ResourceLocation, $Function<$JsonObject, $ItemPredicate>>
public "matches"(itemStack0: $ItemStack$$Type): boolean
public static "register"(resourceLocation0: $ResourceLocation$$Type, function1: $Function$$Type<$JsonObject$$Type, $ItemPredicate>): void
public "serializeToJson"(): $JsonElement
get "items"(): $Set<$Item>
set "items"(value: $Set$$Type<$Item$$Type>)
}
}

declare module "net.minecraft.advancements.AdvancementProgress" {
import { $Date } from "java.util.Date"
import { $Map$$Type } from "java.util.Map"
import { $CriterionProgress } from "net.minecraft.advancements.CriterionProgress"
import { $Criterion$$Type } from "net.minecraft.advancements.Criterion"
import { $Comparable } from "java.lang.Comparable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Iterable } from "java.lang.Iterable"

export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
constructor()

public "compareTo"(advancementProgress0: $AdvancementProgress$$Type): integer
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $AdvancementProgress
public "getCompletedCriteria"(): $Iterable<string>
public "getCriterion"(string0: string): $CriterionProgress
public "getFirstProgressDate"(): $Date
public "getPercent"(): float
public "getProgressText"(): string
public "getRemainingCriteria"(): $Iterable<string>
public "grantProgress"(string0: string): boolean
public "hasProgress"(): boolean
public "isDone"(): boolean
public "revokeProgress"(string0: string): boolean
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "update"(map0: $Map$$Type<string, $Criterion$$Type>, string1ss: string[][]): void
get "completedCriteria"(): $Iterable<string>
get "firstProgressDate"(): $Date
get "percent"(): float
get "progressText"(): string
get "remainingCriteria"(): $Iterable<string>
get "done"(): boolean
}
}

declare module "net.minecraft.advancements.FrameType" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"

export class $FrameType extends $Enum<$FrameType> {
static readonly "CHALLENGE": $FrameType
static readonly "GOAL": $FrameType
static readonly "TASK": $FrameType

public static "byName"(string0: string): $FrameType
public "getChatColor"(): $ChatFormatting
public "getDisplayName"(): $Component
public "getName"(): string
public "getTexture"(): integer
public static "valueOf"(string0: string): $FrameType
public static "values"(): $FrameType[]
get "chatColor"(): $ChatFormatting
get "displayName"(): $Component
get "name"(): string
get "texture"(): integer
}
}

declare module "net.minecraft.advancements.critereon.LocationPredicate$Builder" {
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $LightPredicate$$Type } from "net.minecraft.advancements.critereon.LightPredicate"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $LocationPredicate } from "net.minecraft.advancements.critereon.LocationPredicate"
import { $BlockPredicate$$Type } from "net.minecraft.advancements.critereon.BlockPredicate"
import { $Level } from "net.minecraft.world.level.Level"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $FluidPredicate$$Type } from "net.minecraft.advancements.critereon.FluidPredicate"

export class $LocationPredicate$Builder {
constructor()

public "build"(): $LocationPredicate
public static "location"(): $LocationPredicate$Builder
public "setBiome"(resourceKey0: $ResourceKey$$Type<$Biome>): $LocationPredicate$Builder
public "setBlock"(blockPredicate0: $BlockPredicate$$Type): $LocationPredicate$Builder
public "setDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $LocationPredicate$Builder
public "setFluid"(fluidPredicate0: $FluidPredicate$$Type): $LocationPredicate$Builder
public "setLight"(lightPredicate0: $LightPredicate$$Type): $LocationPredicate$Builder
public "setSmokey"(boolean0: boolean): $LocationPredicate$Builder
public "setStructure"(resourceKey0: $ResourceKey$$Type<$Structure>): $LocationPredicate$Builder
public "setX"(doubles0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
public "setY"(doubles0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
public "setZ"(doubles0: $MinMaxBounds$Doubles$$Type): $LocationPredicate$Builder
set "biome"(value: $ResourceKey$$Type<$Biome>)
set "block"(value: $BlockPredicate$$Type)
set "dimension"(value: $ResourceKey$$Type<$Level>)
set "fluid"(value: $FluidPredicate$$Type)
set "light"(value: $LightPredicate$$Type)
set "smokey"(value: boolean)
set "structure"(value: $ResourceKey$$Type<$Structure>)
set "x"(value: $MinMaxBounds$Doubles$$Type)
set "y"(value: $MinMaxBounds$Doubles$$Type)
set "z"(value: $MinMaxBounds$Doubles$$Type)
}
}

declare module "net.minecraft.advancements.AdvancementList" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementList$Listener$$Type } from "net.minecraft.advancements.AdvancementList$Listener"
import { $Advancement$Builder$$Type } from "net.minecraft.advancements.Advancement$Builder"
import { $Map$$Type } from "java.util.Map"
import { $Collection } from "java.util.Collection"
import { $Advancement } from "net.minecraft.advancements.Advancement"
import { $Set$$Type } from "java.util.Set"
import { $Iterable } from "java.lang.Iterable"

export class $AdvancementList {
constructor()

public "add"(map0: $Map$$Type<$ResourceLocation$$Type, $Advancement$Builder$$Type>): void
public "clear"(): void
public "get"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllAdvancements"(): $Collection<$Advancement>
public "getRoots"(): $Iterable<$Advancement>
public "remove"(set0: $Set$$Type<$ResourceLocation$$Type>): void
public "setListener"(listener0: $AdvancementList$Listener$$Type): void
get "allAdvancements"(): $Collection<$Advancement>
get "roots"(): $Iterable<$Advancement>
set "listener"(value: $AdvancementList$Listener$$Type)
}
}

declare module "net.minecraft.advancements.critereon.EntityTypePredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"

export class $EntityTypePredicate {
static readonly "ANY": $EntityTypePredicate

constructor()

public static "fromJson"(jsonElement0: $JsonElement$$Type): $EntityTypePredicate
public "matches"(entityType0: $EntityType$$Type<any>): boolean
public static "of"(entityType0: $EntityType$$Type<any>): $EntityTypePredicate
public static "of"(tagKey0: $TagKey$$Type<$EntityType$$Type<any>>): $EntityTypePredicate
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.Advancement$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementRewards$$Type } from "net.minecraft.advancements.AdvancementRewards"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $RequirementsStrategy$$Type } from "net.minecraft.advancements.RequirementsStrategy"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Advancement, $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $Criterion, $Criterion$$Type } from "net.minecraft.advancements.Criterion"
import { $AdvancementRewards$Builder$$Type } from "net.minecraft.advancements.AdvancementRewards$Builder"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $FrameType$$Type } from "net.minecraft.advancements.FrameType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $DisplayInfo$$Type } from "net.minecraft.advancements.DisplayInfo"
import { $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $IForgeAdvancementBuilder } from "net.minecraftforge.common.extensions.IForgeAdvancementBuilder"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"

export class $Advancement$Builder implements $IForgeAdvancementBuilder {
constructor(resourceLocation0: $ResourceLocation$$Type, displayInfo1: $DisplayInfo$$Type, advancementRewards2: $AdvancementRewards$$Type, map3: $Map$$Type<string, $Criterion$$Type>, string4ss: string[][], boolean5: boolean)
constructor(boolean0: boolean)

public "addCriterion"(string0: string, criterionTriggerInstance1: $CriterionTriggerInstance$$Type): $Advancement$Builder
public "addCriterion"(string0: string, criterion1: $Criterion$$Type): $Advancement$Builder
public static "advancement"(): $Advancement$Builder
public "build"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "canBuild"(function0: $Function$$Type<$ResourceLocation$$Type, $Advancement>): boolean
public "display"(displayInfo0: $DisplayInfo$$Type): $Advancement$Builder
public "display"(itemStack0: $ItemStack$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): $Advancement$Builder
public "display"(itemLike0: $ItemLike$$Type, component1: $Component$$Type, component2: $Component$$Type, resourceLocation3: $ResourceLocation$$Type, frameType4: $FrameType$$Type, boolean5: boolean, boolean6: boolean, boolean7: boolean): $Advancement$Builder
public static "fromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type, iContext2: $ICondition$IContext$$Type): $Advancement$Builder
/** @deprecated */
public static "fromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Advancement$Builder
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Advancement$Builder
public "getCriteria"(): $Map<string, $Criterion>
public "parent"(resourceLocation0: $ResourceLocation$$Type): $Advancement$Builder
public "parent"(advancement0: $Advancement$$Type): $Advancement$Builder
public static "recipeAdvancement"(): $Advancement$Builder
public "requirements"(requirementsStrategy0: $RequirementsStrategy$$Type): $Advancement$Builder
public "requirements"(string0ss: string[][]): $Advancement$Builder
public "rewards"(builder0: $AdvancementRewards$Builder$$Type): $Advancement$Builder
public "rewards"(advancementRewards0: $AdvancementRewards$$Type): $Advancement$Builder
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>, string1: string): $Advancement
public "save"(consumer0: $Consumer$$Type<$Advancement$$Type>, resourceLocation1: $ResourceLocation$$Type, existingFileHelper2: $ExistingFileHelper$$Type): $Advancement
public "serializeToJson"(): $JsonObject
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "criteria"(): $Map<string, $Criterion>
}
}

declare module "net.minecraft.advancements.critereon.DeserializationContext" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonArray$$Type } from "com.google.gson.JsonArray"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import { $LootDataManager$$Type } from "net.minecraft.world.level.storage.loot.LootDataManager"

export class $DeserializationContext {
constructor(resourceLocation0: $ResourceLocation$$Type, lootDataManager1: $LootDataManager$$Type)

public "deserializeConditions"(jsonArray0: $JsonArray$$Type, string1: string, lootContextParamSet2: $LootContextParamSet$$Type): $LootItemCondition[]
public "getAdvancementId"(): $ResourceLocation
get "advancementId"(): $ResourceLocation
}
}

declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $StateHolder, $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"
import { $StatePropertiesPredicateAccess } from "snownee.lychee.mixin.StatePropertiesPredicateAccess"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $StatePredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.StatePredicateAccessor"

export class $StatePropertiesPredicate implements $StatePredicateAccessor, $StatePropertiesPredicateAccess {
static readonly "ANY": $StatePropertiesPredicate

public "checkState"(stateDefinition0: $StateDefinition$$Type<any, any>, consumer1: $Consumer$$Type<string>): void
public static "fromJson"(jsonElement0: $JsonElement$$Type): $StatePropertiesPredicate
public "matches"(blockState0: $BlockState$$Type): boolean
public "matches"(fluidState0: $FluidState$$Type): boolean
public "matches"<S extends $StateHolder<any, S>>(stateDefinition0: $StateDefinition$$Type<any, S>, s1: S): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.EntityEquipmentPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ItemPredicate$$Type } from "net.minecraft.advancements.critereon.ItemPredicate"
import { $EntityEquipmentPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.EntityEquipmentPredicateAccessor"

export class $EntityEquipmentPredicate implements $EntityEquipmentPredicateAccessor {
static readonly "ANY": $EntityEquipmentPredicate
static readonly "CAPTAIN": $EntityEquipmentPredicate

constructor(itemPredicate0: $ItemPredicate$$Type, itemPredicate1: $ItemPredicate$$Type, itemPredicate2: $ItemPredicate$$Type, itemPredicate3: $ItemPredicate$$Type, itemPredicate4: $ItemPredicate$$Type, itemPredicate5: $ItemPredicate$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $EntityEquipmentPredicate
public "matches"(entity0: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.SimpleCriterionTrigger" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $PlayerAdvancements$$Type } from "net.minecraft.server.PlayerAdvancements"
import { $CriterionTrigger$Listener$$Type } from "net.minecraft.advancements.CriterionTrigger$Listener"
import { $AbstractCriterionTriggerInstance } from "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance"
import { $CriterionTrigger } from "net.minecraft.advancements.CriterionTrigger"

export class $SimpleCriterionTrigger<T extends $AbstractCriterionTriggerInstance = $AbstractCriterionTriggerInstance> implements $CriterionTrigger<T> {
constructor()

public "addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "getId"(): $ResourceLocation
public "removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
public "removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}
}

declare module "net.minecraft.advancements.critereon.EnchantmentPredicate" {
import { $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $EnchantmentPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.EnchantmentPredicateAccessor"
import { $Map$$Type } from "java.util.Map"

export class $EnchantmentPredicate implements $EnchantmentPredicateAccessor {
static readonly "ANY": $EnchantmentPredicate
static readonly "NONE": $EnchantmentPredicate[]

constructor()
constructor(enchantment0: $Enchantment$$Type, ints1: $MinMaxBounds$Ints$$Type)

public "containedIn"(map0: $Map$$Type<$Enchantment$$Type, integer>): boolean
public static "fromJson"(jsonElement0: $JsonElement$$Type): $EnchantmentPredicate
public static "fromJsonArray"(jsonElement0: $JsonElement$$Type): $EnchantmentPredicate[]
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.CriterionTrigger" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $CriterionTriggerInstance } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $PlayerAdvancements$$Type } from "net.minecraft.server.PlayerAdvancements"
import { $CriterionTrigger$Listener$$Type } from "net.minecraft.advancements.CriterionTrigger$Listener"

export interface $CriterionTrigger<T extends $CriterionTriggerInstance = $CriterionTriggerInstance> {
"addPlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
"createInstance"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): T
"getId"(): $ResourceLocation
"removePlayerListener"(playerAdvancements0: $PlayerAdvancements$$Type, listener1: $CriterionTrigger$Listener$$Type<T>): void
"removePlayerListeners"(playerAdvancements0: $PlayerAdvancements$$Type): void
get "id"(): $ResourceLocation
}

export namespace $CriterionTrigger {
const probejs$$marker: never
}
export abstract class $CriterionTrigger$$Static<T extends $CriterionTriggerInstance = $CriterionTriggerInstance> implements $CriterionTrigger<T> {
}
}

declare module "net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SerializationContext$$Type } from "net.minecraft.advancements.critereon.SerializationContext"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CriterionTriggerInstance } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $ContextAwarePredicate$$Type } from "net.minecraft.advancements.critereon.ContextAwarePredicate"

export class $AbstractCriterionTriggerInstance implements $CriterionTriggerInstance {
constructor(resourceLocation0: $ResourceLocation$$Type, contextAwarePredicate1: $ContextAwarePredicate$$Type)

public "getCriterion"(): $ResourceLocation
public "serializeToJson"(serializationContext0: $SerializationContext$$Type): $JsonObject
get "criterion"(): $ResourceLocation
}
}

declare module "net.minecraft.advancements.critereon.EntityFlagsPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityFlagsPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.EntityFlagsPredicateAccessor"

export class $EntityFlagsPredicate implements $EntityFlagsPredicateAccessor {
static readonly "ANY": $EntityFlagsPredicate

constructor(boolean0: boolean, boolean1: boolean, boolean2: boolean, boolean3: boolean, boolean4: boolean)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $EntityFlagsPredicate
public "matches"(entity0: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.Advancement" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementRewards, $AdvancementRewards$$Type } from "net.minecraft.advancements.AdvancementRewards"
import { $Advancement$Builder } from "net.minecraft.advancements.Advancement$Builder"
import { $DisplayInfo, $DisplayInfo$$Type } from "net.minecraft.advancements.DisplayInfo"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Criterion, $Criterion$$Type } from "net.minecraft.advancements.Criterion"
import { $Iterable } from "java.lang.Iterable"

export class $Advancement {
constructor(resourceLocation0: $ResourceLocation$$Type, advancement1: $Advancement$$Type, displayInfo2: $DisplayInfo$$Type, advancementRewards3: $AdvancementRewards$$Type, map4: $Map$$Type<string, $Criterion$$Type>, string5ss: string[][], boolean6: boolean)

public "addChild"(advancement0: $Advancement$$Type): void
public "deconstruct"(): $Advancement$Builder
public "getChatComponent"(): $Component
public "getChildren"(): $Iterable<$Advancement>
public "getCriteria"(): $Map<string, $Criterion>
public "getDisplay"(): $DisplayInfo
public "getId"(): $ResourceLocation
public "getMaxCriteraRequired"(): integer
public "getParent"(): $Advancement
public "getRequirements"(): string[][]
public "getRewards"(): $AdvancementRewards
public static "getRoot"(advancement0: $Advancement$$Type): $Advancement
public "getRoot"(): $Advancement
public "sendsTelemetryEvent"(): boolean
get "criteria"(): $Map<string, $Criterion>
set "criteria"(value: $Map$$Type<string, $Criterion$$Type>)
get "requirements"(): string[][]
set "requirements"(value: string[][])
get "chatComponent"(): $Component
get "children"(): $Iterable<$Advancement>
get "display"(): $DisplayInfo
get "id"(): $ResourceLocation
get "maxCriteraRequired"(): integer
get "parent"(): $Advancement
get "rewards"(): $AdvancementRewards
get "root"(): $Advancement
}
}

declare module "net.minecraft.advancements.AdvancementRewards" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CommandFunction$CacheableFunction$$Type } from "net.minecraft.commands.CommandFunction$CacheableFunction"

export class $AdvancementRewards {
static readonly "EMPTY": $AdvancementRewards

constructor(int0: integer, resourceLocation1s: $ResourceLocation$$Type[], resourceLocation2s: $ResourceLocation$$Type[], cacheableFunction3: $CommandFunction$CacheableFunction$$Type)

public static "deserialize"(jsonObject0: $JsonObject$$Type): $AdvancementRewards
public "getRecipes"(): $ResourceLocation[]
public "grant"(serverPlayer0: $ServerPlayer$$Type): void
public "serializeToJson"(): $JsonElement
get "recipes"(): $ResourceLocation[]
}
}

declare module "net.minecraft.advancements.critereon.EntitySubPredicate$Type" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $EntitySubPredicate } from "net.minecraft.advancements.critereon.EntitySubPredicate"

export interface $EntitySubPredicate$Type {
"deserialize"(jsonObject0: $JsonObject$$Type): $EntitySubPredicate
}

export namespace $EntitySubPredicate$Type {
const probejs$$marker: never
}
export abstract class $EntitySubPredicate$Type$$Static implements $EntitySubPredicate$Type {
}
}

declare module "net.minecraft.advancements.critereon.EntitySubPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $FrogVariant$$Type } from "net.minecraft.world.entity.animal.FrogVariant"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $EntitySubPredicate$Type } from "net.minecraft.advancements.critereon.EntitySubPredicate$Type"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CatVariant$$Type } from "net.minecraft.world.entity.animal.CatVariant"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export interface $EntitySubPredicate {
"matches"(entity0: $Entity$$Type, serverLevel1: $ServerLevel$$Type, vec32: $Vec3$$Type): boolean
"serialize"(): $JsonElement
"serializeCustomData"(): $JsonObject
"type"(): $EntitySubPredicate$Type
}

export namespace $EntitySubPredicate {
const ANY: $EntitySubPredicate
function fromJson(jsonElement0: $JsonElement$$Type): $EntitySubPredicate
function variant(catVariant0: $CatVariant$$Type): $EntitySubPredicate
function variant(frogVariant0: $FrogVariant$$Type): $EntitySubPredicate
}
export abstract class $EntitySubPredicate$$Static implements $EntitySubPredicate {
static readonly "ANY": $EntitySubPredicate

static "fromJson"(jsonElement0: $JsonElement$$Type): $EntitySubPredicate
static "variant"(catVariant0: $CatVariant$$Type): $EntitySubPredicate
static "variant"(frogVariant0: $FrogVariant$$Type): $EntitySubPredicate
}
}

declare module "net.minecraft.advancements.critereon.EntityPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $LootContext } from "net.minecraft.world.level.storage.loot.LootContext"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $EntityPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.EntityPredicateAccessor"
import { $ContextAwarePredicate } from "net.minecraft.advancements.critereon.ContextAwarePredicate"

export class $EntityPredicate implements $EntityPredicateAccessor {
static readonly "ANY": $EntityPredicate

public static "createContext"(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type): $LootContext
public static "fromJson"(jsonElement0: $JsonElement$$Type): $EntityPredicate
public static "fromJson"(jsonObject0: $JsonObject$$Type, string1: string, deserializationContext2: $DeserializationContext$$Type): $ContextAwarePredicate
public static "fromJsonArray"(jsonObject0: $JsonObject$$Type, string1: string, deserializationContext2: $DeserializationContext$$Type): $ContextAwarePredicate[]
public "matches"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type, entity2: $Entity$$Type): boolean
public "matches"(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type): boolean
public "serializeToJson"(): $JsonElement
public static "wrap"(entityPredicate0: $EntityPredicate$$Type): $ContextAwarePredicate
}
}

declare module "net.minecraft.advancements.Criterion" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $DeserializationContext$$Type } from "net.minecraft.advancements.critereon.DeserializationContext"
import { $CriterionTriggerInstance, $CriterionTriggerInstance$$Type } from "net.minecraft.advancements.CriterionTriggerInstance"
import { $Map, $Map$$Type } from "java.util.Map"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $Criterion {
constructor(criterionTriggerInstance0: $CriterionTriggerInstance$$Type)
constructor()

public static "criteriaFromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Map<string, $Criterion>
public static "criteriaFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Map<string, $Criterion>
public static "criterionFromJson"(jsonObject0: $JsonObject$$Type, deserializationContext1: $DeserializationContext$$Type): $Criterion
public static "criterionFromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $Criterion
public "getTrigger"(): $CriterionTriggerInstance
public "serializeToJson"(): $JsonElement
public static "serializeToNetwork"(map0: $Map$$Type<string, $Criterion$$Type>, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "trigger"(): $CriterionTriggerInstance
}
}

declare module "net.minecraft.advancements.critereon.DistancePredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $DistancePredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.DistancePredicateAccessor"

export class $DistancePredicate implements $DistancePredicateAccessor {
static readonly "ANY": $DistancePredicate

constructor(doubles0: $MinMaxBounds$Doubles$$Type, doubles1: $MinMaxBounds$Doubles$$Type, doubles2: $MinMaxBounds$Doubles$$Type, doubles3: $MinMaxBounds$Doubles$$Type, doubles4: $MinMaxBounds$Doubles$$Type)

public static "absolute"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public static "fromJson"(jsonElement0: $JsonElement$$Type): $DistancePredicate
public static "horizontal"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
public "matches"(double0: double, double1: double, double2: double, double3: double, double4: double, double5: double): boolean
public "serializeToJson"(): $JsonElement
public static "vertical"(doubles0: $MinMaxBounds$Doubles$$Type): $DistancePredicate
}
}

declare module "net.minecraft.advancements.CriterionProgress" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $Date } from "java.util.Date"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $CriterionProgress {
constructor()

public static "fromJson"(string0: string): $CriterionProgress
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $CriterionProgress
public "getObtained"(): $Date
public "grant"(): void
public "isDone"(): boolean
public "revoke"(): void
public "serializeToJson"(): $JsonElement
public "serializeToNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "obtained"(): $Date
get "done"(): boolean
}
}

declare module "net.minecraft.advancements.critereon.BlockPredicate" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $NbtPredicate, $NbtPredicate$$Type } from "net.minecraft.advancements.critereon.NbtPredicate"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Set, $Set$$Type } from "java.util.Set"
import { $BlockPredicateAccess } from "snownee.lychee.mixin.BlockPredicateAccess"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.BlockPredicateAccessor"
import { $StatePropertiesPredicate, $StatePropertiesPredicate$$Type } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export class $BlockPredicate implements $BlockPredicateAccessor, $BlockPredicateAccess {
static readonly "ANY": $BlockPredicate
readonly "blocks": $Set<$Block>
readonly "nbt": $NbtPredicate
readonly "properties": $StatePropertiesPredicate
readonly "tag": $TagKey<$Block>

constructor(tagKey0: $TagKey$$Type<$Block$$Type>, set1: $Set$$Type<$Block$$Type>, statePropertiesPredicate2: $StatePropertiesPredicate$$Type, nbtPredicate3: $NbtPredicate$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $BlockPredicate
public "matches"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.MinMaxBounds" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $SimpleCommandExceptionType } from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"

export class $MinMaxBounds<T extends number = number> {
static readonly "ERROR_EMPTY": $SimpleCommandExceptionType
static readonly "ERROR_SWAPPED": $SimpleCommandExceptionType

public "getMax"(): T
public "getMin"(): T
public "isAny"(): boolean
public "serializeToJson"(): $JsonElement
get "max"(): T
get "min"(): T
get "any"(): boolean
}
}

declare module "net.minecraft.advancements.critereon.LightPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LightPredicateAccess } from "snownee.lychee.mixin.LightPredicateAccess"
import { $LightPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.LightPredicateAccessor"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $LightPredicate implements $LightPredicateAccessor, $LightPredicateAccess {
static readonly "ANY": $LightPredicate

public static "fromJson"(jsonElement0: $JsonElement$$Type): $LightPredicate
public "matches"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.RequirementsStrategy" {
import { $Collection$$Type } from "java.util.Collection"

export interface $RequirementsStrategy {
"createRequirements"(collection0: $Collection$$Type<string>): string[][]
}

export namespace $RequirementsStrategy {
const AND: $RequirementsStrategy
const OR: $RequirementsStrategy
}
export abstract class $RequirementsStrategy$$Static implements $RequirementsStrategy {
static readonly "AND": $RequirementsStrategy
static readonly "OR": $RequirementsStrategy

}
}

declare module "net.minecraft.advancements.critereon.NbtPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $NbtPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.NbtPredicateAccessor"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $NbtPredicateAccess } from "snownee.lychee.mixin.NbtPredicateAccess"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $NbtPredicate implements $NbtPredicateAccessor, $NbtPredicateAccess {
static readonly "ANY": $NbtPredicate

constructor(compoundTag0: $CompoundTag$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $NbtPredicate
public static "getEntityTagToCompare"(entity0: $Entity$$Type): $CompoundTag
public "matches"(itemStack0: $ItemStack$$Type): boolean
public "matches"(entity0: $Entity$$Type): boolean
public "matches"(tag0: $Tag$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.AdvancementRewards$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AdvancementRewards } from "net.minecraft.advancements.AdvancementRewards"

export class $AdvancementRewards$Builder {
constructor()

public "addExperience"(int0: integer): $AdvancementRewards$Builder
public "addLootTable"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "addRecipe"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "build"(): $AdvancementRewards
public static "experience"(int0: integer): $AdvancementRewards$Builder
public static "function"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public static "loot"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public static "recipe"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
public "runs"(resourceLocation0: $ResourceLocation$$Type): $AdvancementRewards$Builder
}
}

declare module "net.minecraft.advancements.critereon.StatePropertiesPredicate$PropertyMatcher" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $JsonElement } from "com.google.gson.JsonElement"
import { $StateDefinition$$Type } from "net.minecraft.world.level.block.state.StateDefinition"
import { $StateHolder, $StateHolder$$Type } from "net.minecraft.world.level.block.state.StateHolder"

export class $StatePropertiesPredicate$PropertyMatcher {
readonly "name": string

constructor(string0: string)

public "checkState"(stateDefinition0: $StateDefinition$$Type<any, any>, consumer1: $Consumer$$Type<string>): void
public "getName"(): string
public "match"<S extends $StateHolder<any, S>>(stateDefinition0: $StateDefinition$$Type<any, S>, s1: S): boolean
public "toJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.FluidPredicate" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FluidPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.FluidPredicateAccessor"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $StatePropertiesPredicate$$Type } from "net.minecraft.advancements.critereon.StatePropertiesPredicate"

export class $FluidPredicate implements $FluidPredicateAccessor {
static readonly "ANY": $FluidPredicate

constructor(tagKey0: $TagKey$$Type<$Fluid$$Type>, fluid1: $Fluid$$Type, statePropertiesPredicate2: $StatePropertiesPredicate$$Type)

public static "fromJson"(jsonElement0: $JsonElement$$Type): $FluidPredicate
public "matches"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.LocationPredicate" {
import { $LocationPredicateAccess } from "snownee.lychee.mixin.LocationPredicateAccess"
import { $BlockPredicate$$Type } from "net.minecraft.advancements.critereon.BlockPredicate"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $FluidPredicate$$Type } from "net.minecraft.advancements.critereon.FluidPredicate"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Structure } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $LocationPredicate$Builder } from "net.minecraft.advancements.critereon.LocationPredicate$Builder"
import { $MinMaxBounds$Doubles$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import { $LightPredicate$$Type } from "net.minecraft.advancements.critereon.LightPredicate"
import { $LocationPredicateHelper } from "snownee.lychee.core.def.LocationPredicateHelper"
import { $LocationPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.LocationPredicateAccessor"
import { $Level } from "net.minecraft.world.level.Level"

export class $LocationPredicate implements $LocationPredicateAccessor, $LocationPredicateAccess, $LocationPredicateHelper {
static readonly "ANY": $LocationPredicate

constructor(doubles0: $MinMaxBounds$Doubles$$Type, doubles1: $MinMaxBounds$Doubles$$Type, doubles2: $MinMaxBounds$Doubles$$Type, resourceKey3: $ResourceKey$$Type<$Biome>, resourceKey4: $ResourceKey$$Type<$Structure>, resourceKey5: $ResourceKey$$Type<$Level>, boolean6: boolean, lightPredicate7: $LightPredicate$$Type, blockPredicate8: $BlockPredicate$$Type, fluidPredicate9: $FluidPredicate$$Type)

public static "atYLocation"(doubles0: $MinMaxBounds$Doubles$$Type): $LocationPredicate
public static "fromJson"(jsonElement0: $JsonElement$$Type): $LocationPredicate
public static "fromNetwork"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $LocationPredicate$Builder
public static "inBiome"(resourceKey0: $ResourceKey$$Type<$Biome>): $LocationPredicate
public static "inDimension"(resourceKey0: $ResourceKey$$Type<$Level>): $LocationPredicate
public static "inStructure"(resourceKey0: $ResourceKey$$Type<$Structure>): $LocationPredicate
public "lychee$getBiomeTag"(): $TagKey
public "lychee$setBiomeTag"(tagKey0: $TagKey$$Type): void
public "matches"(serverLevel0: $ServerLevel$$Type, double1: double, double2: double, double3: double): boolean
public "serializeToJson"(): $JsonElement
public static "toNetwork"(locationPredicate0: $LocationPredicate$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): void
}
}

declare module "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate" {
import { $JsonElement } from "com.google.gson.JsonElement"
import { $EffectDataAccessor } from "fzzyhmstrs.emi_loot.mixins.EffectDataAccessor"
import { $MinMaxBounds$Ints$$Type } from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"

export class $MobEffectsPredicate$MobEffectInstancePredicate implements $EffectDataAccessor {
constructor(ints0: $MinMaxBounds$Ints$$Type, ints1: $MinMaxBounds$Ints$$Type, boolean2: boolean, boolean3: boolean)
constructor()

public static "fromJson"(jsonObject0: $JsonObject$$Type): $MobEffectsPredicate$MobEffectInstancePredicate
public "matches"(mobEffectInstance0: $MobEffectInstance$$Type): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.MobEffectsPredicate" {
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map$$Type } from "java.util.Map"
import { $MobEffectsPredicate$MobEffectInstancePredicate$$Type } from "net.minecraft.advancements.critereon.MobEffectsPredicate$MobEffectInstancePredicate"
import { $MobEffectInstance$$Type } from "net.minecraft.world.effect.MobEffectInstance"
import { $EntityEffectPredicateAccessor } from "fzzyhmstrs.emi_loot.mixins.EntityEffectPredicateAccessor"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $MobEffectsPredicate implements $EntityEffectPredicateAccessor {
static readonly "ANY": $MobEffectsPredicate

constructor(map0: $Map$$Type<$MobEffect$$Type, $MobEffectsPredicate$MobEffectInstancePredicate$$Type>)

public "and"(mobEffect0: $MobEffect$$Type): $MobEffectsPredicate
public "and"(mobEffect0: $MobEffect$$Type, mobEffectInstancePredicate1: $MobEffectsPredicate$MobEffectInstancePredicate$$Type): $MobEffectsPredicate
public static "effects"(): $MobEffectsPredicate
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MobEffectsPredicate
public "matches"(livingEntity0: $LivingEntity$$Type): boolean
public "matches"(entity0: $Entity$$Type): boolean
public "matches"(map0: $Map$$Type<$MobEffect$$Type, $MobEffectInstance$$Type>): boolean
public "serializeToJson"(): $JsonElement
}
}

declare module "net.minecraft.advancements.critereon.MinMaxBounds$Ints" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $MinMaxBounds } from "net.minecraft.advancements.critereon.MinMaxBounds"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $IntsAccess } from "snownee.lychee.mixin.IntsAccess"
import { $Function$$Type } from "java.util.function.Function"

export class $MinMaxBounds$Ints extends $MinMaxBounds<integer> implements $IntsAccess {
static readonly "ANY": $MinMaxBounds$Ints

constructor(integer0: integer, integer1: integer)

public static "atLeast"(int0: integer): $MinMaxBounds$Ints
public static "atMost"(int0: integer): $MinMaxBounds$Ints
public static "between"(int0: integer, int1: integer): $MinMaxBounds$Ints
public static "exactly"(int0: integer): $MinMaxBounds$Ints
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MinMaxBounds$Ints
public static "fromReader"(stringReader0: $StringReader$$Type): $MinMaxBounds$Ints
public static "fromReader"(stringReader0: $StringReader$$Type, function1: $Function$$Type<integer, integer>): $MinMaxBounds$Ints
public "matches"(int0: integer): boolean
public "matchesSqr"(long0: long): boolean
}
}

declare module "net.minecraft.advancements.critereon.MinMaxBounds$Doubles" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $DoublesAccess } from "snownee.lychee.mixin.DoublesAccess"
import { $MinMaxBounds } from "net.minecraft.advancements.critereon.MinMaxBounds"
import { $StringReader$$Type } from "com.mojang.brigadier.StringReader"
import { $Function$$Type } from "java.util.function.Function"

export class $MinMaxBounds$Doubles extends $MinMaxBounds<double> implements $DoublesAccess {
static readonly "ANY": $MinMaxBounds$Doubles

constructor(double0: double, double1: double)

public static "atLeast"(double0: double): $MinMaxBounds$Doubles
public static "atMost"(double0: double): $MinMaxBounds$Doubles
public static "between"(double0: double, double1: double): $MinMaxBounds$Doubles
public static "exactly"(double0: double): $MinMaxBounds$Doubles
public static "fromJson"(jsonElement0: $JsonElement$$Type): $MinMaxBounds$Doubles
public static "fromReader"(stringReader0: $StringReader$$Type): $MinMaxBounds$Doubles
public static "fromReader"(stringReader0: $StringReader$$Type, function1: $Function$$Type<double, double>): $MinMaxBounds$Doubles
public "matches"(double0: double): boolean
public "matchesSqr"(double0: double): boolean
}
}

