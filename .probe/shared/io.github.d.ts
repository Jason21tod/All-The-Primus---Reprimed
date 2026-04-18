declare module "io.github.apace100.apoli.access.ModifiableFoodEntity" {
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List, $List$$Type } from "java.util.List"
import { $ModifyFoodConfiguration, $ModifyFoodConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyFoodConfiguration"
import { $ModifyFoodPower, $ModifyFoodPower$$Type } from "io.github.edwinmindcraft.apoli.common.power.ModifyFoodPower"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ModifiableFoodEntity {
"enforceFoodSync"(): void
"getCurrentModifyFoodPowers"(): $List<$ConfiguredPower<$ModifyFoodConfiguration, $ModifyFoodPower>>
"getOriginalFoodStack"(): $ItemStack
"resetFoodSync"(): void
"setCurrentModifyFoodPowers"(list0: $List$$Type<$ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, $ModifyFoodPower$$Type>>): void
"setOriginalFoodStack"(itemStack0: $ItemStack$$Type): void
"shouldSyncFood"(): boolean
get "currentModifyFoodPowers"(): $List<$ConfiguredPower<$ModifyFoodConfiguration, $ModifyFoodPower>>
get "originalFoodStack"(): $ItemStack
set "currentModifyFoodPowers"(value: $List$$Type<$ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, $ModifyFoodPower$$Type>>)
set "originalFoodStack"(value: $ItemStack$$Type)
}

export namespace $ModifiableFoodEntity {
const probejs$$marker: never
}
export abstract class $ModifiableFoodEntity$$Static implements $ModifiableFoodEntity {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IActivePower$Key" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"

export class $IActivePower$Key extends $Record {
static readonly "BACKWARD_COMPATIBLE_CODEC": $Codec<$IActivePower$Key>
static readonly "CODEC": $Codec<$IActivePower$Key>
static readonly "PRIMARY": $IActivePower$Key
static readonly "SECONDARY": $IActivePower$Key

constructor(key: string, continuous: boolean)

public "continuous"(): boolean
public "key"(): string
}
}

declare module "io.github.edwinmindcraft.calio.api.registry.DynamicEntryValidator" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $DataResult } from "com.mojang.serialization.DataResult"

export interface $DynamicEntryValidator<T = any> {
"validate"(resourceLocation0: $ResourceLocation$$Type, t1: T, iCalioDynamicRegistryManager2: $ICalioDynamicRegistryManager$$Type): $DataResult<T>
}

export namespace $DynamicEntryValidator {
const probejs$$marker: never
}
export abstract class $DynamicEntryValidator$$Static<T = any> implements $DynamicEntryValidator<T> {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredDamageCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $DamageCondition } from "io.github.edwinmindcraft.apoli.api.power.factory.DamageCondition"
import { $ConfiguredCondition } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"

export class $ConfiguredDamageCondition<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $DamageCondition<C> = $DamageCondition<C>> extends $ConfiguredCondition<C, F, $ConfiguredDamageCondition<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredDamageCondition<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredDamageCondition<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredDamageCondition<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C, conditionData2: $ConditionData$$Type)

public "check"(damageSource0: $DamageSource$$Type, float1: float): boolean
public static "check"(holder0: $Holder$$Type<$ConfiguredDamageCondition$$Type<any, any>>, damageSource1: $DamageSource$$Type, float2: float): boolean
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredDamageCondition<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredDamageCondition<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.edwinmindcraft.apoli.common.util.LivingDamageCache" {
import { $ModifyDamageDealtPower, $ModifyDamageDealtPower$$Type } from "io.github.edwinmindcraft.apoli.common.power.ModifyDamageDealtPower"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $ModifyDamageDealtConfiguration, $ModifyDamageDealtConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyDamageDealtConfiguration"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ModifyDamageTakenPower, $ModifyDamageTakenPower$$Type } from "io.github.edwinmindcraft.apoli.common.power.ModifyDamageTakenPower"
import { $ModifyDamageTakenConfiguration, $ModifyDamageTakenConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyDamageTakenConfiguration"

export interface $LivingDamageCache {
"bypassDamageCheck"(boolean0: boolean): void
"bypassesDamageCheck"(): boolean
"gatherDamagePowers"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): void
"getModifyDamageDealtPowers"(): $List<$Holder<$ConfiguredPower<$ModifyDamageDealtConfiguration, $ModifyDamageDealtPower>>>
"getModifyDamageTakenPowers"(): $List<$Holder<$ConfiguredPower<$ModifyDamageTakenConfiguration, $ModifyDamageTakenPower>>>
"setArmorValues"(int0: integer, int1: integer): void
"setModifyDamageDealtPowers"(list0: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyDamageDealtConfiguration$$Type, $ModifyDamageDealtPower$$Type>>>): void
"setModifyDamageTakenPowers"(list0: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, $ModifyDamageTakenPower$$Type>>>): void
get "modifyDamageDealtPowers"(): $List<$Holder<$ConfiguredPower<$ModifyDamageDealtConfiguration, $ModifyDamageDealtPower>>>
get "modifyDamageTakenPowers"(): $List<$Holder<$ConfiguredPower<$ModifyDamageTakenConfiguration, $ModifyDamageTakenPower>>>
set "modifyDamageDealtPowers"(value: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyDamageDealtConfiguration$$Type, $ModifyDamageDealtPower$$Type>>>)
set "modifyDamageTakenPowers"(value: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, $ModifyDamageTakenPower$$Type>>>)
}

export namespace $LivingDamageCache {
const probejs$$marker: never
}
export abstract class $LivingDamageCache$$Static implements $LivingDamageCache {
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyDamageDealtConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredEntityAction, $ConfiguredEntityAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityAction"
import { $ListConfiguration, $ListConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.configuration.ListConfiguration"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ConfiguredBiEntityAction, $ConfiguredBiEntityAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityAction"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $ConfiguredEntityCondition, $ConfiguredEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ConfiguredDamageCondition, $ConfiguredDamageCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredDamageCondition"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ConfiguredBiEntityCondition, $ConfiguredBiEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityCondition"
import { $IValueModifyingPowerConfiguration } from "io.github.edwinmindcraft.apoli.api.power.configuration.power.IValueModifyingPowerConfiguration"

export class $ModifyDamageDealtConfiguration extends $Record implements $IValueModifyingPowerConfiguration {
static readonly "CODEC": $Codec<$ModifyDamageDealtConfiguration>

constructor(...configuredModifier0s: $ConfiguredModifier$$Type<any>[])
constructor(modifiers: $ListConfiguration$$Type<$ConfiguredModifier$$Type<any>>, damageCondition: $Holder$$Type<$ConfiguredDamageCondition$$Type<any, any>>, targetCondition: $Holder$$Type<$ConfiguredEntityCondition$$Type<any, any>>, biEntityCondition: $Holder$$Type<$ConfiguredBiEntityCondition$$Type<any, any>>, selfAction: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, targetAction: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, biEntityAction: $Holder$$Type<$ConfiguredBiEntityAction$$Type<any, any>>)

public "biEntityAction"(): $Holder<$ConfiguredBiEntityAction<any, any>>
public "biEntityCondition"(): $Holder<$ConfiguredBiEntityCondition<any, any>>
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "damageCondition"(): $Holder<$ConfiguredDamageCondition<any, any>>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public "modifiers"(): $ListConfiguration<$ConfiguredModifier<any>>
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public "selfAction"(): $Holder<$ConfiguredEntityAction<any, any>>
public "targetAction"(): $Holder<$ConfiguredEntityAction<any, any>>
public "targetCondition"(): $Holder<$ConfiguredEntityCondition<any, any>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.apace100.calio.util.TagLike" {
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $TagLike<T = any> {
constructor(registry0: $Registry$$Type<T>)

public "add"(t0: T): void
public "add"(resourceLocation0: $ResourceLocation$$Type): void
public "addTag"(tagKey0: $TagKey$$Type<T>): void
public "addTag"(resourceLocation0: $ResourceLocation$$Type): void
public "contains"(t0: T): boolean
public "forEach"(consumer0: $Consumer$$Type<$Either$$Type<$TagKey$$Type<T>, T>>): void
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}
}

declare module "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ICalioDynamicRegistryManager, $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CalioDynamicRegistryEvent extends $Event implements $EventItf {
constructor(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getRegistryManager"(): $ICalioDynamicRegistryManager
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "registryManager"(): $ICalioDynamicRegistryManager
}
}

declare module "io.github.edwinmindcraft.origins.api.event.AutoBadgeEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List, $List$$Type } from "java.util.List"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Badge, $Badge$$Type } from "io.github.apace100.origins.badge.Badge"

export class $AutoBadgeEvent extends $Event implements $EventItf {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, configuredPower1: $ConfiguredPower$$Type<any, any>, list2: $List$$Type<$Badge$$Type>)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBadges"(): $List<$Badge>
public "getPower"(): $ConfiguredPower<any, any>
public "getRegistryName"(): $ResourceLocation
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "badges"(): $List<$Badge>
get "power"(): $ConfiguredPower<any, any>
get "registryName"(): $ResourceLocation
}
}

declare module "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent$Reload" {
import { $CalioDynamicRegistryEvent } from "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"

export class $CalioDynamicRegistryEvent$Reload extends $CalioDynamicRegistryEvent {
constructor(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type)
constructor()

}
}

declare module "io.github.apace100.apoli.access.SubmergableEntity" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"

export interface $SubmergableEntity {
"getFluidHeightLoosely"(tagKey0: $TagKey$$Type<$Fluid$$Type>): double
"isSubmergedInLoosely"(tagKey0: $TagKey$$Type<$Fluid$$Type>): boolean
}

export namespace $SubmergableEntity {
const probejs$$marker: never
}
export abstract class $SubmergableEntity$$Static implements $SubmergableEntity {
}
}

declare module "io.github.edwinmindcraft.apoli.api.component.IPowerContainer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $NonNullSupplier$$Type } from "net.minecraftforge.common.util.NonNullSupplier"
import { $Set } from "java.util.Set"
import { $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IValueModifyingPower, $IValueModifyingPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.IValueModifyingPower"
import { $Map$$Type } from "java.util.Map"
import { $PowerFactory, $PowerFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export interface $IPowerContainer {
"addPower"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): boolean
"addPower"(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>, resourceLocation1: $ResourceLocation$$Type): boolean
"getOwner"(): $Entity
"getPower"<C extends $IDynamicFeatureConfiguration, F extends $PowerFactory<C>>(resourceLocation0: $ResourceLocation$$Type): $Holder<$ConfiguredPower<C, F>>
"getPower"<C extends $IDynamicFeatureConfiguration, F extends $PowerFactory<C>>(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>): $Holder<$ConfiguredPower<C, F>>
"getPowerData"<T>(holder0: $Holder$$Type<$ConfiguredPower$$Type<any, any>>, nonNullSupplier1: $NonNullSupplier$$Type<T>): T
"getPowerData"<T>(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>, nonNullSupplier1: $NonNullSupplier$$Type<T>): T
"getPowerNames"(): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
"getPowerTypes"(boolean0: boolean): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
"getPowers"<C extends $IDynamicFeatureConfiguration, F extends $PowerFactory<C>>(f0: F, predicate1: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<C, F>>>): $List<$Holder<$ConfiguredPower<C, F>>>
"getPowers"<C extends $IDynamicFeatureConfiguration, F extends $PowerFactory<C>>(f0: F): $List<$Holder<$ConfiguredPower<C, F>>>
"getPowers"<C extends $IDynamicFeatureConfiguration, F extends $PowerFactory<C>>(f0: F, boolean1: boolean): $List<$Holder<$ConfiguredPower<C, F>>>
"getPowers"(): $List<$Holder<$ConfiguredPower<any, any>>>
"getPowersFromSource"(resourceLocation0: $ResourceLocation$$Type): $List<$ResourceKey<$ConfiguredPower<any, any>>>
"getSources"(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>): $List<$ResourceLocation>
"getSources"(resourceLocation0: $ResourceLocation$$Type): $List<$ResourceLocation>
"handle"(multimap0: $Multimap$$Type<$ResourceLocation$$Type, $ResourceLocation$$Type>, map1: $Map$$Type<$ResourceLocation$$Type, $CompoundTag$$Type>): void
"hasPower"(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>): boolean
"hasPower"(powerFactory0: $PowerFactory$$Type<any>): boolean
"hasPower"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): boolean
"hasPower"(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>, resourceLocation1: $ResourceLocation$$Type): boolean
"hasPower"(resourceLocation0: $ResourceLocation$$Type): boolean
"readFromNbt"(compoundTag0: $CompoundTag$$Type): void
"readNbt"(compoundTag0: $CompoundTag$$Type, boolean1: boolean): void
"rebuildCache"(): void
"removeAllPowersFromSource"(resourceLocation0: $ResourceLocation$$Type): integer
"removePower"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
"removePower"(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>, resourceLocation1: $ResourceLocation$$Type): void
"serverTick"(): void
"sync"(): void
"writeToNbt"(compoundTag0: $CompoundTag$$Type): $CompoundTag
get "owner"(): $Entity
get "powerNames"(): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
get "powers"(): $List<$Holder<$ConfiguredPower<any, any>>>
}

export namespace $IPowerContainer {
const KEY: $ResourceLocation
function get(entity0: $Entity$$Type): $LazyOptional<$IPowerContainer>
function getPowers<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F, predicate2: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): $List<$Holder<$ConfiguredPower<T, F>>>
function getPowers<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F): $List<$Holder<$ConfiguredPower<T, F>>>
function hasPower<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F): boolean
function modify<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, float2: float, predicate3: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): float
function modify<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, float2: float): float
function modify<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, iterable2: $Iterable$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, double3: double, consumer4: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): double
function modify<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, double2: double, predicate3: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, consumer4: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): double
function modify<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, double2: double): double
function modify<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, float2: float, predicate3: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, consumer4: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): float
function sync(entity0: $Entity$$Type): void
function sync(entity0: $Entity$$Type, serverPlayer1: $ServerPlayer$$Type): void
function withPower<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F, predicate2: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, consumer3: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): void
}
export abstract class $IPowerContainer$$Static implements $IPowerContainer {
static readonly "KEY": $ResourceLocation

static "get"(entity0: $Entity$$Type): $LazyOptional<$IPowerContainer>
static "getPowers"<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F, predicate2: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): $List<$Holder<$ConfiguredPower<T, F>>>
static "getPowers"<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F): $List<$Holder<$ConfiguredPower<T, F>>>
static "hasPower"<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F): boolean
static "modify"<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, float2: float, predicate3: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): float
static "modify"<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, float2: float): float
static "modify"<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, iterable2: $Iterable$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, double3: double, consumer4: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): double
static "modify"<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, double2: double, predicate3: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, consumer4: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): double
static "modify"<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, double2: double): double
static "modify"<T extends $IDynamicFeatureConfiguration, F extends ($PowerFactory<T> & $IValueModifyingPower<T>)>(entity0: $Entity$$Type, f1: F, float2: float, predicate3: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, consumer4: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): float
static "sync"(entity0: $Entity$$Type): void
static "sync"(entity0: $Entity$$Type, serverPlayer1: $ServerPlayer$$Type): void
static "withPower"<T extends $IDynamicFeatureConfiguration, F extends $PowerFactory<T>>(entity0: $Entity$$Type, f1: F, predicate2: $Predicate$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>, consumer3: $Consumer$$Type<$Holder$$Type<$ConfiguredPower$$Type<T, F>>>): void
}
}

declare module "io.github.apace100.calio.data.SerializableData$Instance" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $SerializableData$$Type } from "io.github.apace100.calio.data.SerializableData"

export class $SerializableData$Instance {
constructor(serializableData0: $SerializableData$$Type)

public "get"<T>(string0: string): T
public "getBoolean"(string0: string): boolean
public "getDouble"(string0: string): double
public "getFloat"(string0: string): float
public "getId"(string0: string): $ResourceLocation
public "getInt"(string0: string): integer
public "getModifier"(string0: string): $AttributeModifier
public "getString"(string0: string): string
public "ifPresent"<T>(string0: string, consumer1: $Consumer$$Type<T>): void
public "isPresent"(string0: string): boolean
public "set"(string0: string, object1: any): void
}
}

declare module "io.github.apace100.apoli.access.PowerModifiedGrindstone" {
import { $ModifyGrindstonePower } from "io.github.edwinmindcraft.apoli.common.power.ModifyGrindstonePower"
import { $ConfiguredPower } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List } from "java.util.List"
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ModifyGrindstoneConfiguration } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyGrindstoneConfiguration"
import { $Optional } from "java.util.Optional"
import { $Player } from "net.minecraft.world.entity.player.Player"

export interface $PowerModifiedGrindstone {
"getAppliedPowers"(): $List<$Holder<$ConfiguredPower<$ModifyGrindstoneConfiguration, $ModifyGrindstonePower>>>
"getPlayer"(): $Player
"getPos"(): $Optional<$BlockPos>
get "appliedPowers"(): $List<$Holder<$ConfiguredPower<$ModifyGrindstoneConfiguration, $ModifyGrindstonePower>>>
get "player"(): $Player
get "pos"(): $Optional<$BlockPos>
}

export namespace $PowerModifiedGrindstone {
const probejs$$marker: never
}
export abstract class $PowerModifiedGrindstone$$Static implements $PowerModifiedGrindstone {
}
}

declare module "io.github.apace100.apoli.access.BiomeWeatherAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeWeatherAccess {
"getDownfall"(): float
"setDownfall"(float0: float): void
get "downfall"(): float
set "downfall"(value: float)
}

export namespace $BiomeWeatherAccess {
const probejs$$marker: never
}
export abstract class $BiomeWeatherAccess$$Static implements $BiomeWeatherAccess {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.BlockCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $NonNullSupplier$$Type } from "net.minecraftforge.common.util.NonNullSupplier"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $IConditionFactory, $IConditionFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.IConditionFactory"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Function$$Type } from "java.util.function.Function"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ConfiguredBlockCondition, $ConfiguredBlockCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBlockCondition"
import { $ConfiguredCondition, $ConfiguredCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"

export class $BlockCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IConditionFactory<T, $ConfiguredBlockCondition<T, any>, $BlockCondition<T>> {
static readonly "CODEC": $Codec<$BlockCondition<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "check"(configuredBlockCondition0: $ConfiguredBlockCondition$$Type<T, any>, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$BlockState>): boolean
public static "conditionCodec"<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
public "configure"(t0: T, conditionData1: $ConditionData$$Type): $ConfiguredBlockCondition<T, any>
public "getConditionCodec"(): $Codec<$ConfiguredBlockCondition<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.apace100.apoli.access.NameMutableDamageSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NameMutableDamageSource {
"setName"(string0: string): void
set "name"(value: string)
}

export namespace $NameMutableDamageSource {
const probejs$$marker: never
}
export abstract class $NameMutableDamageSource$$Static implements $NameMutableDamageSource {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityAction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityAction } from "io.github.edwinmindcraft.apoli.api.power.factory.EntityAction"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredFactory } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"

export class $ConfiguredEntityAction<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $EntityAction<C> = $EntityAction<C>> extends $ConfiguredFactory<C, F, $ConfiguredEntityAction<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredEntityAction<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredEntityAction<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredEntityAction<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C)

public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "execute"(entity0: $Entity$$Type): void
public static "execute"(holder0: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, entity1: $Entity$$Type): void
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredEntityAction<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredEntityAction<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBlockAction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredFactory } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockAction } from "io.github.edwinmindcraft.apoli.api.power.factory.BlockAction"

export class $ConfiguredBlockAction<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $BlockAction<C> = $BlockAction<C>> extends $ConfiguredFactory<C, F, $ConfiguredBlockAction<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredBlockAction<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredBlockAction<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredBlockAction<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C)

public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "execute"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, direction2: $Direction$$Type): void
public static "execute"(holder0: $Holder$$Type<$ConfiguredBlockAction$$Type<any, any>>, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): void
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredBlockAction<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredBlockAction<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Iterable$$Type } from "java.lang.Iterable"

export interface $IDynamicFeatureConfiguration {
"checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
"copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
"copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
"fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
"forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
"getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
"getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
"getMissingBinds"(): $List<string>
"getUnbound"(): $List<string>
"getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
"isConfigurationValid"(): boolean
"name"(): string
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}

export namespace $IDynamicFeatureConfiguration {
function holderAsString(string0: string, holder1: $Holder$$Type<any>): string
function populate(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
function populate(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
}
export abstract class $IDynamicFeatureConfiguration$$Static implements $IDynamicFeatureConfiguration {
static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
}
}

declare module "io.github.apace100.apoli.access.ReplacingLootContext" {
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"
import { $LootContextParamSet, $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export interface $ReplacingLootContext {
"getType"(): $LootContextParamSet
"isReplaced"(lootTable0: $LootTable$$Type): boolean
"setReplaced"(lootTable0: $LootTable$$Type): void
"setType"(lootContextParamSet0: $LootContextParamSet$$Type): void
get "type"(): $LootContextParamSet
set "replaced"(value: $LootTable$$Type)
set "type"(value: $LootContextParamSet$$Type)
}

export namespace $ReplacingLootContext {
const probejs$$marker: never
}
export abstract class $ReplacingLootContext$$Static implements $ReplacingLootContext {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.power.ValueModifyingPowerFactory" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IValueModifyingPower } from "io.github.edwinmindcraft.apoli.api.power.IValueModifyingPower"
import { $ConfiguredModifier } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $IValueModifyingPowerConfiguration } from "io.github.edwinmindcraft.apoli.api.power.configuration.power.IValueModifyingPowerConfiguration"
import { $PowerFactory } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export class $ValueModifyingPowerFactory<T extends $IValueModifyingPowerConfiguration = $IValueModifyingPowerConfiguration> extends $PowerFactory<T> implements $IValueModifyingPower<T> {
public "getModifiers"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): $List<$ConfiguredModifier<any>>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $ConfiguredFactory<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F = any, CF extends $ConfiguredFactory<any, any, CF> = $ConfiguredFactory<any, any, CF>> implements $IDynamicFeatureConfiguration {
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getConfiguration"(): T
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getFactory"(): F
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "configuration"(): T
get "factory"(): F
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IActivePower" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IDynamicFeatureConfiguration } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $IActivePower$Key } from "io.github.edwinmindcraft.apoli.api.power.IActivePower$Key"

export interface $IActivePower<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> {
"activate"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
"getKey"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): $IActivePower$Key
}

export namespace $IActivePower {
const probejs$$marker: never
}
export abstract class $IActivePower$$Static<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IActivePower<T> {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemAction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ItemAction } from "io.github.edwinmindcraft.apoli.api.power.factory.ItemAction"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredFactory } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $Mutable$$Type } from "org.apache.commons.lang3.mutable.Mutable"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ConfiguredItemAction<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $ItemAction<C> = $ItemAction<C>> extends $ConfiguredFactory<C, F, $ConfiguredItemAction<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredItemAction<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredItemAction<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredItemAction<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C)

public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "execute"(level0: $Level$$Type, mutable1: $Mutable$$Type<$ItemStack$$Type>): void
public static "execute"(holder0: $Holder$$Type<$ConfiguredItemAction$$Type<any, any>>, level1: $Level$$Type, mutable2: $Mutable$$Type<$ItemStack$$Type>): void
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredItemAction<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredItemAction<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.apace100.apoli.power.factory.PowerFactory" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $PowerFactory$Instance } from "io.github.apace100.apoli.power.factory.PowerFactory$Instance"
import { $BiFunction } from "java.util.function.BiFunction"
import { $SerializableData$$Type } from "io.github.apace100.calio.data.SerializableData"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $Power } from "io.github.apace100.apoli.power.Power"
import { $PowerType } from "io.github.apace100.apoli.power.PowerType"
import { $PowerFactory as $PowerFactory$0, $PowerFactory$$Type as $PowerFactory$0$$Type } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export class $PowerFactory<P extends $Power = $Power> {
constructor(resourceLocation0: $ResourceLocation$$Type, serializableData1: $SerializableData$$Type, function2: $Function$$Type<$SerializableData$Instance$$Type, $BiFunction<$PowerType<P>, $LivingEntity, P>>)
constructor(resourceLocation0: $ResourceLocation$$Type, powerFactory1: $PowerFactory$0$$Type<any>)

public "allowCondition"(): $PowerFactory<P>
public "getSerializerId"(): $ResourceLocation
public "getWrapped"(): $PowerFactory$0<any>
public "read"(jsonObject0: $JsonObject$$Type): $PowerFactory$Instance<>
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $PowerFactory$Instance<>
get "serializerId"(): $ResourceLocation
get "wrapped"(): $PowerFactory$0<any>
}
}

declare module "io.github.apace100.calio.registry.DataObject" {
import { $DataObjectFactory } from "io.github.apace100.calio.registry.DataObjectFactory"

export interface $DataObject<T extends $DataObject<T> = $DataObject<T>> {
"getFactory"(): $DataObjectFactory<T>
get "factory"(): $DataObjectFactory<T>
}

export namespace $DataObject {
const probejs$$marker: never
}
export abstract class $DataObject$$Static<T extends $DataObject<T> = $DataObject<T>> implements $DataObject<T> {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBlockCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $NonNullSupplier$$Type } from "net.minecraftforge.common.util.NonNullSupplier"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BlockCondition } from "io.github.edwinmindcraft.apoli.api.power.factory.BlockCondition"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"
import { $ConfiguredCondition } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"

export class $ConfiguredBlockCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $BlockCondition<T> = $BlockCondition<T>> extends $ConfiguredCondition<T, F, $ConfiguredBlockCondition<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredBlockCondition<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredBlockCondition<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredBlockCondition<any, any>>>
static readonly "OPTIONAL_FIELD": $MapCodec<$Optional<$ConfiguredBlockCondition<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, t1: T, conditionData2: $ConditionData$$Type)

public static "check"(holder0: $Holder$$Type<$ConfiguredBlockCondition$$Type<any, any>>, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type): boolean
public "check"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, nonNullSupplier2: $NonNullSupplier$$Type<$BlockState>): boolean
public static "check"(holder0: $Holder$$Type<$ConfiguredBlockCondition$$Type<any, any>>, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, nonNullSupplier3: $NonNullSupplier$$Type<$BlockState>): boolean
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredBlockCondition<any, any>>>
public static "optional"(string0: string, resourceKey1: $ResourceKey$$Type<$ConfiguredBlockCondition<any, any>>): $MapCodec<$Holder<$ConfiguredBlockCondition<any, any>>>
public static "optional"(string0: string, resourceLocation1: $ResourceLocation$$Type): $MapCodec<$Holder<$ConfiguredBlockCondition<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredBlockCondition<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.apace100.calio.data.SerializableData$Field" {
import { $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $SerializableDataType, $SerializableDataType$$Type } from "io.github.apace100.calio.data.SerializableDataType"
import { $Function$$Type } from "java.util.function.Function"

export class $SerializableData$Field<T = any> {
constructor(serializableDataType0: $SerializableDataType$$Type<T>, function1: $Function$$Type<$SerializableData$Instance$$Type, T>)
constructor(serializableDataType0: $SerializableDataType$$Type<T>, t1: T)
constructor(serializableDataType0: $SerializableDataType$$Type<T>)

public "getDataType"(): $SerializableDataType<T>
public "getDefault"(instance0: $SerializableData$Instance$$Type): T
public "hasDefault"(): boolean
get "dataType"(): $SerializableDataType<T>
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyGrindstoneConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ModifyGrindstonePower$$Type } from "io.github.edwinmindcraft.apoli.common.power.ModifyGrindstonePower"
import { $ConfiguredItemCondition, $ConfiguredItemCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemCondition"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredItemAction, $ConfiguredItemAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemAction"
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ConfiguredBlockCondition, $ConfiguredBlockCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBlockCondition"
import { $ConfiguredBlockAction, $ConfiguredBlockAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBlockAction"
import { $ConfiguredEntityAction, $ConfiguredEntityAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityAction"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ModifyGrindstonePower$ResultType, $ModifyGrindstonePower$ResultType$$Type } from "io.github.edwinmindcraft.apoli.common.power.ModifyGrindstonePower$ResultType"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Mutable$$Type } from "org.apache.commons.lang3.mutable.Mutable"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ModifyGrindstoneConfiguration extends $Record implements $IDynamicFeatureConfiguration {
static readonly "CODEC": $Codec<$ModifyGrindstoneConfiguration>

constructor(topItemCondition: $Holder$$Type<$ConfiguredItemCondition$$Type<any, any>>, bottomItemCondition: $Holder$$Type<$ConfiguredItemCondition$$Type<any, any>>, outputItemCondition: $Holder$$Type<$ConfiguredItemCondition$$Type<any, any>>, blockCondition: $Holder$$Type<$ConfiguredBlockCondition$$Type<any, any>>, resultStack: $Optional$$Type<$ItemStack$$Type>, resultItemAction: $Holder$$Type<$ConfiguredItemAction$$Type<any, any>>, lateItemAction: $Holder$$Type<$ConfiguredItemAction$$Type<any, any>>, entityAction: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, blockAction: $Holder$$Type<$ConfiguredBlockAction$$Type<any, any>>, resultType: $ModifyGrindstonePower$ResultType$$Type, experienceModifier: $Optional$$Type<$ConfiguredModifier$$Type<any>>)

public "blockAction"(): $Holder<$ConfiguredBlockAction<any, any>>
public "blockCondition"(): $Holder<$ConfiguredBlockCondition<any, any>>
public "bottomItemCondition"(): $Holder<$ConfiguredItemCondition<any, any>>
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "doesApply"(configuredPower0: $ConfiguredPower$$Type<$ModifyGrindstoneConfiguration$$Type, $ModifyGrindstonePower$$Type>, level1: $Level$$Type, itemStack2: $ItemStack$$Type, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type, optional5: $Optional$$Type<$BlockPos$$Type>): boolean
public "entityAction"(): $Holder<$ConfiguredEntityAction<any, any>>
public "experienceModifier"(): $Optional<$ConfiguredModifier<any>>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public "lateItemAction"(): $Holder<$ConfiguredItemAction<any, any>>
public "name"(): string
public "outputItemCondition"(): $Holder<$ConfiguredItemCondition<any, any>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public "resultItemAction"(): $Holder<$ConfiguredItemAction<any, any>>
public "resultStack"(): $Optional<$ItemStack>
public "resultType"(): $ModifyGrindstonePower$ResultType
public "topItemCondition"(): $Holder<$ConfiguredItemCondition<any, any>>
public "tryExecute"(configuredPower0: $ConfiguredPower$$Type<$ModifyGrindstoneConfiguration$$Type, $ModifyGrindstonePower$$Type>, entity1: $Entity$$Type, mutable2: $Mutable$$Type<$ItemStack$$Type>, optional3: $Optional$$Type<$BlockPos$$Type>): void
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.apace100.apoli.access.MovingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MovingEntity {
"isMoving"(): boolean
get "moving"(): boolean
}

export namespace $MovingEntity {
const probejs$$marker: never
}
export abstract class $MovingEntity$$Static implements $MovingEntity {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IHudRenderedPower" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $HudRender } from "io.github.apace100.apoli.util.HudRender"
import { $IDynamicFeatureConfiguration } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"

export interface $IHudRenderedPower<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> {
"getFill"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): float
"getRenderSettings"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): $HudRender
"shouldRender"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): boolean
}

export namespace $IHudRenderedPower {
const probejs$$marker: never
}
export abstract class $IHudRenderedPower$$Static<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IHudRenderedPower<T> {
}
}

declare module "io.github.apace100.apoli.integration.PowerLoadEvent$Post" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $PowerLoadEvent } from "io.github.apace100.apoli.integration.PowerLoadEvent"

export class $PowerLoadEvent$Post extends $PowerLoadEvent {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, jsonElement1: $JsonElement$$Type, configuredPower2: $ConfiguredPower$$Type<any, any>)

public "getAdditionalData"(string0: string): $JsonElement
public "getPower"(): $ConfiguredPower<any, any>
get "power"(): $ConfiguredPower<any, any>
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.ModifyGrindstonePower$ResultType" {
import { $Enum } from "java.lang.Enum"

export class $ModifyGrindstonePower$ResultType extends $Enum<$ModifyGrindstonePower$ResultType> {
static readonly "FROM_BOTTOM": $ModifyGrindstonePower$ResultType
static readonly "FROM_TOP": $ModifyGrindstonePower$ResultType
static readonly "SPECIFIED": $ModifyGrindstonePower$ResultType
static readonly "UNCHANGED": $ModifyGrindstonePower$ResultType

public static "valueOf"(string0: string): $ModifyGrindstonePower$ResultType
public static "values"(): $ModifyGrindstonePower$ResultType[]
}
}

declare module "io.github.apace100.apoli.integration.PowerLoadEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PowerLoadEvent extends $Event implements $EventItf {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, jsonElement1: $JsonElement$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getId"(): $ResourceLocation
public "getOriginal"(): $JsonElement
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "id"(): $ResourceLocation
get "original"(): $JsonElement
}
}

declare module "io.github.apace100.apoli.mixin.EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccessor {
"callIsBeingRainedOn"(): boolean
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $Set } from "java.util.Set"
import { $PowerFactory as $PowerFactory$0 } from "io.github.apace100.apoli.power.factory.PowerFactory"
import { $IPowerContainer$$Type } from "io.github.edwinmindcraft.apoli.api.component.IPowerContainer"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $PowerData$$Type } from "io.github.edwinmindcraft.apoli.api.power.PowerData"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Holder } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"

export class $PowerFactory<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> {
static readonly "CODEC": $Codec<$PowerFactory<any>>
static readonly "IGNORE_NAMESPACE_CODEC": $Codec<$PowerFactory<any>>

public "canTick"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): boolean
public "complete"(resourceLocation0: $ResourceLocation$$Type, t1: T): T
public "configure"(t0: T, powerData1: $PowerData$$Type): $ConfiguredPower<T, any>
public "deserialize"(configuredPower0: $ConfiguredPower$$Type<T, any>, iPowerContainer1: $IPowerContainer$$Type, compoundTag2: $CompoundTag$$Type): void
public "getCodec"(): $Codec<$ConfiguredPower<T, any>>
public "getContainedPowerKeys"(configuredPower0: $ConfiguredPower$$Type<T, any>): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
public "getContainedPowers"(configuredPower0: $ConfiguredPower$$Type<T, any>): $Map<string, $Holder<$ConfiguredPower<any, any>>>
public "getLegacyFactory"(): $PowerFactory$0<any>
public "initCapabilities"(): $ICapabilityProvider
public "isActive"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): boolean
public "onAdded"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
public "onGained"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
public "onLost"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
public "onRemoved"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
public "onRespawn"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
public "serialize"(configuredPower0: $ConfiguredPower$$Type<T, any>, iPowerContainer1: $IPowerContainer$$Type, compoundTag2: $CompoundTag$$Type): void
public "tick"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): void
public "tickInterval"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): integer
get "codec"(): $Codec<$ConfiguredPower<T, any>>
get "legacyFactory"(): $PowerFactory$0<any>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConditionData } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $ConfiguredFactory } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory"
import { $List } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Iterable$$Type } from "java.lang.Iterable"

export class $ConfiguredCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F = any, CF extends $ConfiguredCondition<any, any, CF> = $ConfiguredCondition<any, any, CF>> extends $ConfiguredFactory<T, F, CF> {
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getData"(): $ConditionData
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "data"(): $ConditionData
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.ModifierOperation$Phase" {
import { $Enum } from "java.lang.Enum"

export class $ModifierOperation$Phase extends $Enum<$ModifierOperation$Phase> {
static readonly "BASE": $ModifierOperation$Phase
static readonly "TOTAL": $ModifierOperation$Phase

public static "valueOf"(string0: string): $ModifierOperation$Phase
public static "values"(): $ModifierOperation$Phase[]
}
}

declare module "io.github.edwinmindcraft.apoli.api.configuration.ListConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $ConfiguredModifier } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional$$Type } from "java.util.Optional"
import { $IStreamConfiguration } from "io.github.edwinmindcraft.apoli.api.configuration.IStreamConfiguration"

export class $ListConfiguration<T = any> implements $IDynamicFeatureConfiguration, $IStreamConfiguration<T> {
static readonly "ATTRIBUTE_CODEC": $MapCodec<$ListConfiguration<$AttributeModifier>>
static readonly "MODIFIER_CODEC": $MapCodec<$ListConfiguration<$ConfiguredModifier<any>>>

constructor(iterable0: $Iterable$$Type<T>)
constructor(...t0s: T[])

public static "attributeCodec"(string0: string): $MapCodec<$ListConfiguration<$AttributeModifier>>
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public static "codec"<T>(codec0: $Codec$$Type<T>, string1: string, string2: string): $Codec<$ListConfiguration<T>>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "entries"(): $List<T>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getContent"(): $List<T>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public static "mapCodec"<T>(codec0: $Codec$$Type<T>, string1: string, string2: string): $MapCodec<$ListConfiguration<T>>
public static "modifierCodec"(string0: string): $MapCodec<$ListConfiguration<$ConfiguredModifier<any>>>
public "name"(): string
public static "of"<T>(...t0s: T[]): $ListConfiguration<T>
public static "optionalCodec"<T>(codec0: $Codec$$Type<$Optional$$Type<T>>, string1: string, string2: string): $Codec<$ListConfiguration<T>>
public static "optionalMapCodec"<T>(codec0: $Codec$$Type<$Optional$$Type<T>>, string1: string, string2: string): $MapCodec<$ListConfiguration<T>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "content"(): $List<T>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IConditionFactory" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $IFactory } from "io.github.edwinmindcraft.apoli.api.power.IFactory"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ConfiguredCondition, $ConfiguredCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"
import { $Function$$Type } from "java.util.function.Function"

export interface $IConditionFactory<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any> = $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F> = $IConditionFactory<T, C, F>> extends $IFactory<T, C, F> {
"configure"(t0: T, conditionData1: $ConditionData$$Type): C
"getConditionCodec"(): $Codec<C>
}

export namespace $IConditionFactory {
function asMap<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
function conditionCodec<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
function singleCodec<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
function unionCodec<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
export abstract class $IConditionFactory$$Static<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any> = $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F> = $IConditionFactory<T, C, F>> implements $IConditionFactory<T, C, F> {
static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
static "conditionCodec"<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyFoodConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredItemCondition, $ConfiguredItemCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemCondition"
import { $ConfiguredEntityAction, $ConfiguredEntityAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityAction"
import { $ListConfiguration, $ListConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.configuration.ListConfiguration"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredItemAction, $ConfiguredItemAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemAction"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $ModifyFoodConfiguration extends $Record implements $IDynamicFeatureConfiguration {
static readonly "CODEC": $Codec<$ModifyFoodConfiguration>

constructor(foodModifiers: $ListConfiguration$$Type<$ConfiguredModifier$$Type<any>>, saturationModifiers: $ListConfiguration$$Type<$ConfiguredModifier$$Type<any>>, itemCondition: $Holder$$Type<$ConfiguredItemCondition$$Type<any, any>>, entityAction: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, replaceStack: $ItemStack$$Type, itemAction: $Holder$$Type<$ConfiguredItemAction$$Type<any, any>>, alwaysEdible: boolean, preventEffects: boolean)

public "alwaysEdible"(): boolean
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "entityAction"(): $Holder<$ConfiguredEntityAction<any, any>>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "foodModifiers"(): $ListConfiguration<$ConfiguredModifier<any>>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public "itemAction"(): $Holder<$ConfiguredItemAction<any, any>>
public "itemCondition"(): $Holder<$ConfiguredItemCondition<any, any>>
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public "preventEffects"(): boolean
public "replaceStack"(): $ItemStack
public "saturationModifiers"(): $ListConfiguration<$ConfiguredModifier<any>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.apace100.apoli.access.WaterMovingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WaterMovingEntity {
"isInMovementPhase"(): boolean
get "inMovementPhase"(): boolean
}

export namespace $WaterMovingEntity {
const probejs$$marker: never
}
export abstract class $WaterMovingEntity$$Static implements $WaterMovingEntity {
}
}

declare module "io.github.apace100.calio.data.SerializableData" {
import { $MapLike$$Type } from "com.mojang.serialization.MapLike"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $SerializableData$Instance, $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $RecordBuilder, $RecordBuilder$$Type } from "com.mojang.serialization.RecordBuilder"
import { $SerializableDataType$$Type } from "io.github.apace100.calio.data.SerializableDataType"
import { $Decoder } from "com.mojang.serialization.Decoder"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $MapDecoder, $MapDecoder$$Type } from "com.mojang.serialization.MapDecoder"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $SerializableData$Field } from "io.github.apace100.calio.data.SerializableData$Field"
import { $Encoder } from "com.mojang.serialization.Encoder"
import { $Stream } from "java.util.stream.Stream"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MapEncoder } from "com.mojang.serialization.MapEncoder"
import { $KeyCompressor, $KeyCompressor$$Type } from "com.mojang.serialization.KeyCompressor"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $DataResult } from "com.mojang.serialization.DataResult"

export class $SerializableData extends $MapCodec<$SerializableData$Instance> {
static "CURRENT_NAMESPACE": string
static "CURRENT_PATH": string

constructor()

public "add"<T>(string0: string, serializableDataType1: $SerializableDataType$$Type<T>, t2: T): $SerializableData
public "add"(string0: string, serializableDataType1: $SerializableDataType$$Type<any>): $SerializableData
public "addFunctionedDefault"<T>(string0: string, serializableDataType1: $SerializableDataType$$Type<T>, function2: $Function$$Type<$SerializableData$Instance$$Type, T>): $SerializableData
public "ap"<E>(mapDecoder0: $MapDecoder$$Type<$Function$$Type<$SerializableData$Instance$$Type, E>>): $MapDecoder<E>
public "comap"<B>(function0: $Function$$Type<B, $SerializableData$Instance>): $MapEncoder<B>
public "compressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>): $RecordBuilder<T>
public "compressedDecode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$SerializableData$Instance>
public "compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
public "copy"(): $SerializableData
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<$SerializableData$Instance>
public "decoder"(): $Decoder<$SerializableData$Instance>
public "encode"<T>(instance0: $SerializableData$Instance$$Type, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
public "encoder"(): $Encoder<$SerializableData$Instance>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<$SerializableData$Instance>>): $MapEncoder<B>
public "flatMap"<B>(function0: $Function$$Type<$SerializableData$Instance$$Type, $DataResult<B>>): $MapDecoder<B>
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "getField"(string0: string): $SerializableData$Field<any>
public "getFieldNames"(): $Iterable<string>
public "keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
public static "makeCompressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
public "map"<B>(function0: $Function$$Type<$SerializableData$Instance$$Type, B>): $MapDecoder<B>
public "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SerializableData$Instance
public "read"(jsonObject0: $JsonObject$$Type): $SerializableData$Instance
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, instance1: $SerializableData$Instance$$Type): void
get "fieldNames"(): $Iterable<string>
}
}

declare module "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent$LoadComplete" {
import { $CalioDynamicRegistryEvent } from "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"

export class $CalioDynamicRegistryEvent$LoadComplete extends $CalioDynamicRegistryEvent {
constructor(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type)
constructor()

}
}

declare module "io.github.apace100.apoli.integration.ModifyValueEvent" {
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityEvent } from "net.minecraftforge.event.entity.EntityEvent"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $PowerFactory, $PowerFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export class $ModifyValueEvent extends $EntityEvent {
constructor()
constructor(entity0: $Entity$$Type, powerFactory1: $PowerFactory$$Type<any>, double2: double, list3: $List$$Type<$ConfiguredModifier$$Type<any>>)

public "addModifier"(configuredModifier0: $ConfiguredModifier$$Type<any>): void
public "getBaseValue"(): double
public "getModifiers"(): $List<$ConfiguredModifier<any>>
public "getPower"(): $PowerFactory<any>
get "baseValue"(): double
get "modifiers"(): $List<$ConfiguredModifier<any>>
get "power"(): $PowerFactory<any>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.ModifierData" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List, $List$$Type } from "java.util.List"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional, $Optional$$Type } from "java.util.Optional"

export class $ModifierData extends $Record implements $IDynamicFeatureConfiguration {
static readonly "CODEC": $MapCodec<$ModifierData>
static readonly "DEFAULT": $ModifierData

constructor(value: double, resource: $Optional$$Type<$Holder$$Type<$ConfiguredPower$$Type<any, any>>>, modifiers: $List$$Type<$ConfiguredModifier$$Type<any>>)

public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public "modifiers"(): $List<$ConfiguredModifier<any>>
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public "resource"(): $Optional<$Holder<$ConfiguredPower<any, any>>>
public "value"(): double
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.edwinmindcraft.calio.api.network.CodecSet" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $List, $List$$Type } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $HolderSet, $HolderSet$$Type } from "net.minecraft.core.HolderSet"
import { $Record } from "java.lang.Record"

export class $CodecSet<T = any> extends $Record {
constructor(holder: $Codec$$Type<$Holder$$Type<T>>, holderRef: $Codec$$Type<$Holder$$Type<T>>, directTag: $Codec$$Type<$TagKey$$Type<T>>, hashedTag: $Codec$$Type<$TagKey$$Type<T>>, directSet: $Codec$$Type<$HolderSet$$Type<T>>, hashedSet: $Codec$$Type<$HolderSet$$Type<T>>, set: $Codec$$Type<$List$$Type<$HolderSet$$Type<T>>>)

public "directSet"(): $Codec<$HolderSet<T>>
public "directTag"(): $Codec<$TagKey<T>>
public "hashedSet"(): $Codec<$HolderSet<T>>
public "hashedTag"(): $Codec<$TagKey<T>>
public "holder"(): $Codec<$Holder<T>>
public "holderRef"(): $Codec<$Holder<T>>
public "set"(): $Codec<$List<$HolderSet<T>>>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.BiEntityAction" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IFactory } from "io.github.edwinmindcraft.apoli.api.power.IFactory"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ConfiguredBiEntityAction } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityAction"
import { $Function$$Type } from "java.util.function.Function"

export class $BiEntityAction<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IFactory<T, $ConfiguredBiEntityAction<T, any>, $BiEntityAction<T>> {
static readonly "CODEC": $Codec<$BiEntityAction<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "execute"(t0: T, entity1: $Entity$$Type, entity2: $Entity$$Type): void
public "getCodec"(): $Codec<$ConfiguredBiEntityAction<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
get "codec"(): $Codec<$ConfiguredBiEntityAction<T, any>>
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.ModifyGrindstonePower" {
import { $ConfiguredModifier } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List, $List$$Type } from "java.util.List"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ModifyGrindstoneConfiguration, $ModifyGrindstoneConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyGrindstoneConfiguration"
import { $Mutable$$Type } from "org.apache.commons.lang3.mutable.Mutable"
import { $Optional$$Type } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PowerFactory } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export class $ModifyGrindstonePower extends $PowerFactory<$ModifyGrindstoneConfiguration> {
constructor()

public static "tryCreateOutput"(list0: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyGrindstoneConfiguration$$Type, $ModifyGrindstonePower$$Type>>>, level1: $Level$$Type, itemStack2: $ItemStack$$Type, itemStack3: $ItemStack$$Type, itemStack4: $ItemStack$$Type): $ItemStack
public static "tryGetApplyingPowers"(entity0: $Entity$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, itemStack3: $ItemStack$$Type, optional4: $Optional$$Type<$BlockPos$$Type>): $List<$Holder<$ConfiguredPower<$ModifyGrindstoneConfiguration, $ModifyGrindstonePower>>>
public static "tryGetExperienceModifiers"(list0: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyGrindstoneConfiguration$$Type, $ModifyGrindstonePower$$Type>>>): $List<$ConfiguredModifier<any>>
public static "tryLateExecute"(list0: $List$$Type<$Holder$$Type<$ConfiguredPower$$Type<$ModifyGrindstoneConfiguration$$Type, $ModifyGrindstonePower$$Type>>>, entity1: $Entity$$Type, mutable2: $Mutable$$Type<$ItemStack$$Type>, optional3: $Optional$$Type<$BlockPos$$Type>): void
}
}

declare module "io.github.edwinmindcraft.calio.api.registry.DynamicRegistryListener" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"

export interface $DynamicRegistryListener {
"whenAvailable"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): void
"whenNamed"(resourceLocation0: $ResourceLocation$$Type): void
}

export namespace $DynamicRegistryListener {
const probejs$$marker: never
}
export abstract class $DynamicRegistryListener$$Static implements $DynamicRegistryListener {
}
}

declare module "io.github.apace100.apoli.access.ReplacingLootContextParameterSet" {
import { $LootContextParamSet, $LootContextParamSet$$Type } from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export interface $ReplacingLootContextParameterSet {
"getType"(): $LootContextParamSet
"setType"(lootContextParamSet0: $LootContextParamSet$$Type): void
get "type"(): $LootContextParamSet
set "type"(value: $LootContextParamSet$$Type)
}

export namespace $ReplacingLootContextParameterSet {
const probejs$$marker: never
}
export abstract class $ReplacingLootContextParameterSet$$Static implements $ReplacingLootContextParameterSet {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $PropagatingOptionalFieldCodec } from "io.github.edwinmindcraft.calio.api.network.PropagatingOptionalFieldCodec"
import { $ModifierData, $ModifierData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ModifierData"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $ModifierOperation } from "io.github.edwinmindcraft.apoli.api.power.factory.ModifierOperation"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $PropagatingDefaultedOptionalFieldCodec } from "io.github.edwinmindcraft.calio.api.network.PropagatingDefaultedOptionalFieldCodec"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"

export class $ConfiguredModifier<F extends $ModifierOperation = $ModifierOperation> {
static readonly "CODEC": $Codec<$ConfiguredModifier<any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredModifier<any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredModifier<any>>>

constructor(supplier0: $Supplier$$Type<F>, modifierData1: $ModifierData$$Type)

public static "apply"(holder0: $Holder$$Type<$ConfiguredModifier$$Type<any>>, entity1: $Entity$$Type, double2: double): double
public "apply"(entity0: $Entity$$Type, double1: double, double2: double): double
public "getData"(): $ModifierData
public "getFactory"(): F
public static "optional"(string0: string): $PropagatingOptionalFieldCodec<$Holder<$ConfiguredModifier<any>>>
public static "optional"(string0: string, holder1: $Holder$$Type<$ConfiguredModifier$$Type<any>>): $PropagatingDefaultedOptionalFieldCodec<$Holder<$ConfiguredModifier<any>>>
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredModifier<any>>>
get "data"(): $ModifierData
get "factory"(): F
}
}

declare module "io.github.apace100.apoli.power.factory.PowerFactory$Instance" {
import { $ConfiguredPower } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $PowerType, $PowerType$$Type } from "io.github.apace100.apoli.power.PowerType"
import { $BiFunction } from "java.util.function.BiFunction"
import { $PowerFactory } from "io.github.apace100.apoli.power.factory.PowerFactory"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"
import { $Power, $Power$$Type } from "io.github.apace100.apoli.power.Power"

export class $PowerFactory$Instance implements $BiFunction<$PowerType<P>, $LivingEntity, P> {
readonly "power": $ConfiguredPower<any, any>

public "andThen"<V>(function0: $Function$$Type<P, V>): $BiFunction<$PowerType<P>, $LivingEntity, V>
public "apply"(powerType0: $PowerType$$Type<P>, livingEntity1: $LivingEntity$$Type): P
public "getFactory"(): $PowerFactory<any>
public "getPower"(): $ConfiguredPower<any, any>
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "factory"(): $PowerFactory<any>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $EntityCondition } from "io.github.edwinmindcraft.apoli.api.power.factory.EntityCondition"
import { $ConfiguredCondition } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"

export class $ConfiguredEntityCondition<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $EntityCondition<C> = $EntityCondition<C>> extends $ConfiguredCondition<C, F, $ConfiguredEntityCondition<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredEntityCondition<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredEntityCondition<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredEntityCondition<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C, conditionData2: $ConditionData$$Type)

public "check"(entity0: $Entity$$Type): boolean
public static "check"(holder0: $Holder$$Type<$ConfiguredEntityCondition$$Type<any, any>>, entity1: $Entity$$Type): boolean
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredEntityCondition<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredEntityCondition<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.ModifyDamageDealtPower" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ModifyDamageDealtConfiguration, $ModifyDamageDealtConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyDamageDealtConfiguration"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ValueModifyingPowerFactory } from "io.github.edwinmindcraft.apoli.api.power.factory.power.ValueModifyingPowerFactory"

export class $ModifyDamageDealtPower extends $ValueModifyingPowerFactory<$ModifyDamageDealtConfiguration> {
constructor()

public "check"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageDealtConfiguration$$Type, any>, entity1: $Entity$$Type, entity2: $Entity$$Type, damageSource3: $DamageSource$$Type, float4: float): boolean
public "execute"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageDealtConfiguration$$Type, any>, entity1: $Entity$$Type, entity2: $Entity$$Type): void
public static "modifyMelee"(entity0: $Entity$$Type, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type, float3: float): float
public static "modifyMeleeNoExec"(entity0: $Entity$$Type, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type, float3: float): float
public static "modifyProjectile"(entity0: $Entity$$Type, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type, float3: float): float
public static "modifyProjectileNoExec"(entity0: $Entity$$Type, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type, float3: float): float
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IFactory" {
import { $ConfiguredFactory } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $Function$$Type } from "java.util.function.Function"

export interface $IFactory<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, C extends $ConfiguredFactory<T, F, any> = $ConfiguredFactory<T, F, any>, F extends $IFactory<T, C, F> = $IFactory<T, C, F>> {
"configure"(t0: T): C
}

export namespace $IFactory {
function asMap<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
function singleCodec<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
function unionCodec<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
export abstract class $IFactory$$Static<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, C extends $ConfiguredFactory<T, F, any> = $ConfiguredFactory<T, F, any>, F extends $IFactory<T, C, F> = $IFactory<T, C, F>> implements $IFactory<T, C, F> {
static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IValueModifyingPower" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IDynamicFeatureConfiguration } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ConfiguredModifier } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"

export interface $IValueModifyingPower<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> {
"getModifiers"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): $List<$ConfiguredModifier<any>>
}

export namespace $IValueModifyingPower {
const probejs$$marker: never
}
export abstract class $IValueModifyingPower$$Static<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IValueModifyingPower<T> {
}
}

declare module "io.github.apace100.apoli.access.EntityAttributeInstanceAccess" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

export interface $EntityAttributeInstanceAccess {
"getEntity"(): $Entity
"setEntity"(entity0: $Entity$$Type): void
get "entity"(): $Entity
set "entity"(value: $Entity$$Type)
}

export namespace $EntityAttributeInstanceAccess {
const probejs$$marker: never
}
export abstract class $EntityAttributeInstanceAccess$$Static implements $EntityAttributeInstanceAccess {
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyDamageTakenConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredEntityAction, $ConfiguredEntityAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityAction"
import { $ListConfiguration, $ListConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.configuration.ListConfiguration"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ConfiguredBiEntityAction, $ConfiguredBiEntityAction$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityAction"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $ConfiguredEntityCondition, $ConfiguredEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ConfiguredDamageCondition, $ConfiguredDamageCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredDamageCondition"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ConfiguredBiEntityCondition, $ConfiguredBiEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityCondition"
import { $IValueModifyingPowerConfiguration } from "io.github.edwinmindcraft.apoli.api.power.configuration.power.IValueModifyingPowerConfiguration"

export class $ModifyDamageTakenConfiguration extends $Record implements $IValueModifyingPowerConfiguration {
static readonly "CODEC": $Codec<$ModifyDamageTakenConfiguration>

constructor(...configuredModifier0s: $ConfiguredModifier$$Type<any>[])
constructor(modifiers: $ListConfiguration$$Type<$ConfiguredModifier$$Type<any>>, damageCondition: $Holder$$Type<$ConfiguredDamageCondition$$Type<any, any>>, biEntityCondition: $Holder$$Type<$ConfiguredBiEntityCondition$$Type<any, any>>, selfAction: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, targetAction: $Holder$$Type<$ConfiguredEntityAction$$Type<any, any>>, biEntityAction: $Holder$$Type<$ConfiguredBiEntityAction$$Type<any, any>>, applyArmorCondition: $Holder$$Type<$ConfiguredEntityCondition$$Type<any, any>>, damageArmorCondition: $Holder$$Type<$ConfiguredEntityCondition$$Type<any, any>>)

public "applyArmorCondition"(): $Holder<$ConfiguredEntityCondition<any, any>>
public "biEntityAction"(): $Holder<$ConfiguredBiEntityAction<any, any>>
public "biEntityCondition"(): $Holder<$ConfiguredBiEntityCondition<any, any>>
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "damageArmorCondition"(): $Holder<$ConfiguredEntityCondition<any, any>>
public "damageCondition"(): $Holder<$ConfiguredDamageCondition<any, any>>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "isConfigurationValid"(): boolean
public "modifiers"(): $ListConfiguration<$ConfiguredModifier<any>>
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public "selfAction"(): $Holder<$ConfiguredEntityAction<any, any>>
public "targetAction"(): $Holder<$ConfiguredEntityAction<any, any>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.apace100.calio.FilterableWeightedList" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ShufflingList } from "net.minecraft.world.entity.ai.behavior.ShufflingList"
import { $Random$$Type } from "java.util.Random"
import { $Spliterator } from "java.util.Spliterator"
import { $ShufflingList$WeightedEntry } from "net.minecraft.world.entity.ai.behavior.ShufflingList$WeightedEntry"

export class $FilterableWeightedList<U = any> extends $ShufflingList<U> {
constructor()

public "addAll"(filterableWeightedList0: $FilterableWeightedList$$Type<U>): void
public "addFilter"(predicate0: $Predicate$$Type<U>): void
public "copy"(): $FilterableWeightedList<U>
public "entryStream"(): $Stream<$ShufflingList$WeightedEntry<U>>
public "forEach"(consumer0: $Consumer$$Type<U>): void
public "hasFilter"(): boolean
public "pickRandom"(): U
public "pickRandom"(random0: $Random$$Type): U
public "removeFilter"(): void
public "setFilter"(predicate0: $Predicate$$Type<U>): void
public "size"(): integer
public "spliterator"(): $Spliterator<U>
public "stream"(): $Stream<U>
set "filter"(value: $Predicate$$Type<U>)
}
}

declare module "io.github.apace100.origins.badge.Badge" {
import { $DataObjectFactory } from "io.github.apace100.calio.registry.DataObjectFactory"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $BadgeFactory } from "io.github.apace100.origins.badge.BadgeFactory"
import { $List } from "java.util.List"
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $SerializableData$Instance, $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $ClientTooltipComponent } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $DataObject } from "io.github.apace100.calio.registry.DataObject"

export interface $Badge extends $DataObject<$Badge> {
"getBadgeFactory"(): $BadgeFactory
"getFactory"(): $DataObjectFactory<$Badge>
/** Client only, do not use in server scripts */
"getTooltipComponents"(configuredPower0: $ConfiguredPower$$Type<any, any>, int1: integer, float2: float, font3: $Font$$Type): $List<$ClientTooltipComponent>
"hasTooltip"(): boolean
"spriteId"(): $ResourceLocation
"toData"(instance0: $SerializableData$Instance$$Type): $SerializableData$Instance
"writeBuf"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "badgeFactory"(): $BadgeFactory
get "factory"(): $DataObjectFactory<$Badge>
}

export namespace $Badge {
const probejs$$marker: never
}
export abstract class $Badge$$Static implements $Badge {
}
}

declare module "io.github.apace100.apoli.integration.PowerDeserializationEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $PowerDeserializationEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "io.github.apace100.apoli.power.PowerType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Component } from "net.minecraft.network.chat.Component"
import { $PowerFactory$Instance, $PowerFactory$Instance$$Type } from "io.github.apace100.apoli.power.factory.PowerFactory$Instance"
import { $Power } from "io.github.apace100.apoli.power.Power"

export class $PowerType<T extends $Power = $Power> {
constructor(resourceLocation0: $ResourceLocation$$Type, instance1: $PowerFactory$Instance$$Type<>)
constructor(configuredPower0: $ConfiguredPower$$Type<any, any>)

public "create"(livingEntity0: $LivingEntity$$Type): T
public "get"(entity0: $Entity$$Type): T
public "getConfiguredPower"(): $ConfiguredPower<any, any>
public "getDescription"(): $Component
public "getFactory"(): $PowerFactory$Instance<>
public "getIdentifier"(): $ResourceLocation
public "getName"(): $Component
public "getOrCreateDescriptionTranslationKey"(): string
public "getOrCreateNameTranslationKey"(): string
public "isActive"(entity0: $Entity$$Type): boolean
public "isHidden"(): boolean
public "setHidden"(): $PowerType<T>
public "setTranslationKeys"(string0: string, string1: string): void
get "configuredPower"(): $ConfiguredPower<any, any>
get "description"(): $Component
get "factory"(): $PowerFactory$Instance<>
get "identifier"(): $ResourceLocation
get "name"(): $Component
get "orCreateDescriptionTranslationKey"(): string
get "orCreateNameTranslationKey"(): string
get "hidden"(): boolean
}
}

declare module "io.github.edwinmindcraft.apoli.api.configuration.IStreamConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Iterable$$Type } from "java.lang.Iterable"

export interface $IStreamConfiguration<T = any> extends $IDynamicFeatureConfiguration {
"checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
"copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
"copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
"entries"(): $List<T>
"fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
"forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
"getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
"getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
"getMissingBinds"(): $List<string>
"getUnbound"(): $List<string>
"getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
"isConfigurationValid"(): boolean
"name"(): string
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}

export namespace $IStreamConfiguration {
function holderAsString(string0: string, holder1: $Holder$$Type<any>): string
function populate(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
function populate(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
}
export abstract class $IStreamConfiguration$$Static<T = any> implements $IStreamConfiguration<T> {
static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.EntityAction" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ConfiguredEntityAction } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityAction"
import { $IFactory } from "io.github.edwinmindcraft.apoli.api.power.IFactory"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $Function$$Type } from "java.util.function.Function"

export class $EntityAction<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IFactory<T, $ConfiguredEntityAction<T, any>, $EntityAction<T>> {
static readonly "CODEC": $Codec<$EntityAction<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "execute"(t0: T, entity1: $Entity$$Type): void
public "getCodec"(): $Codec<$ConfiguredEntityAction<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
get "codec"(): $Codec<$ConfiguredEntityAction<T, any>>
}
}

declare module "io.github.apace100.apoli.integration.PowerLoadEvent$Pre" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PowerLoadEvent } from "io.github.apace100.apoli.integration.PowerLoadEvent"

export class $PowerLoadEvent$Pre extends $PowerLoadEvent {
constructor()
constructor(resourceLocation0: $ResourceLocation$$Type, jsonElement1: $JsonElement$$Type)

public "getJson"(): $JsonElement
public "setJson"(jsonElement0: $JsonElement$$Type): void
get "json"(): $JsonElement
set "json"(value: $JsonElement$$Type)
}
}

declare module "io.github.edwinmindcraft.calio.common.access.MappedRegistryAccess" {
import { $Holder } from "net.minecraft.core.Holder"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $MappedRegistryAccess<T = any> {
"calio$getOrCreateHolderOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder<T>
}

export namespace $MappedRegistryAccess {
const probejs$$marker: never
}
export abstract class $MappedRegistryAccess$$Static<T = any> implements $MappedRegistryAccess<T> {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.ModifierOperation" {
import { $ModifierOperation$Phase, $ModifierOperation$Phase$$Type } from "io.github.edwinmindcraft.apoli.api.power.factory.ModifierOperation$Phase"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $PropertyDispatch$TriFunction$$Type } from "net.minecraft.data.models.blockstates.PropertyDispatch$TriFunction"
import { $ConfiguredModifier, $ConfiguredModifier$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"

export class $ModifierOperation {
static readonly "CODEC": $Codec<$ModifierOperation>
static readonly "STRICT_CODEC": $Codec<$ModifierOperation>

constructor(phase0: $ModifierOperation$Phase$$Type, int1: integer, triFunction2: $PropertyDispatch$TriFunction$$Type<$List$$Type<double>, double, double, double>)

public "apply"(list0: $List$$Type<$ConfiguredModifier$$Type<any>>, entity1: $Entity$$Type, double2: double, double3: double): double
public "getCodec"(): $Codec<$ConfiguredModifier<any>>
public "getOrder"(): integer
public "getPhase"(): $ModifierOperation$Phase
get "codec"(): $Codec<$ConfiguredModifier<any>>
get "order"(): integer
get "phase"(): $ModifierOperation$Phase
}
}

declare module "io.github.apace100.calio.data.SerializableDataType" {
import { $SerializableData$Instance, $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $SerializableData$$Type } from "io.github.apace100.calio.data.SerializableData"
import { $HashMap$$Type } from "java.util.HashMap"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $SimpleMapCodec } from "com.mojang.serialization.codecs.SimpleMapCodec"
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Encoder, $Encoder$$Type } from "com.mojang.serialization.Encoder"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MapEncoder, $MapEncoder$$Type } from "com.mojang.serialization.MapEncoder"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $EnumSet } from "java.util.EnumSet"
import { $FilterableWeightedList } from "io.github.apace100.calio.FilterableWeightedList"
import { $UnboundedMapCodec } from "com.mojang.serialization.codecs.UnboundedMapCodec"
import { $BiMap$$Type } from "com.google.common.collect.BiMap"
import { $Decoder$Terminal, $Decoder$Terminal$$Type } from "com.mojang.serialization.Decoder$Terminal"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $Decoder$Boxed, $Decoder$Boxed$$Type } from "com.mojang.serialization.Decoder$Boxed"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Codec$ResultFunction$$Type } from "com.mojang.serialization.Codec$ResultFunction"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $Decoder, $Decoder$$Type } from "com.mojang.serialization.Decoder"
import { $ArgumentType, $ArgumentType$$Type } from "com.mojang.brigadier.arguments.ArgumentType"
import { $MapDecoder$$Type } from "com.mojang.serialization.MapDecoder"
import { $IForgeRegistry$$Type } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $TagLike } from "io.github.apace100.calio.util.TagLike"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Decoder$Simple, $Decoder$Simple$$Type } from "com.mojang.serialization.Decoder$Simple"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Keyable$$Type } from "com.mojang.serialization.Keyable"
import { $ArgumentWrapper } from "io.github.apace100.calio.util.ArgumentWrapper"

export class $SerializableDataType<T = any> implements $Codec<T> {
constructor(class0: $Class$$Type<T>, codec1: $Codec$$Type<T>)
constructor(class0: $Class$$Type<T>, biConsumer1: $BiConsumer$$Type<$FriendlyByteBuf$$Type, T>, function2: $Function$$Type<$FriendlyByteBuf$$Type, T>, function3: $Function$$Type<$JsonElement$$Type, T>, function4: $Function$$Type<T, $JsonElement>)
constructor(class0: $Class$$Type<T>, biConsumer1: $BiConsumer$$Type<$FriendlyByteBuf$$Type, T>, function2: $Function$$Type<$FriendlyByteBuf$$Type, T>, function3: $Function$$Type<$JsonElement$$Type, T>)

public static "argumentType"<T, U extends $ArgumentType<T>>(u0: U): $SerializableDataType<$ArgumentWrapper<T>>
public "boxed"(): $Decoder$Boxed<T>
public "cast"(object0: any): T
public static "checkRange"<N extends (number & $Comparable<N>)>(n0: N, n1: N): $Function<N, $DataResult<N>>
public "codec"(): $Optional<$Codec<T>>
public "comap"<B>(function0: $Function$$Type<B, T>): $Encoder<B>
public "comapFlatMap"<S>(function0: $Function$$Type<T, $DataResult<S>>, function1: $Function$$Type<S, T>): $Codec<S>
public static "compound"<T>(class0: $Class$$Type<T>, serializableData1: $SerializableData$$Type, function2: $Function$$Type<$SerializableData$Instance$$Type, T>, biFunction3: $BiFunction$$Type<$SerializableData$$Type, T, $SerializableData$Instance>): $SerializableDataType<T>
public static "compoundList"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $Codec<$List<$Pair<K, V>>>
public "decode"<T1>(dynamicOps0: $DynamicOps$$Type<T1>, t11: T1): $DataResult<$Pair<T, T1>>
public "decode"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<$Pair<T, T>>
public "deprecated"(int0: integer): $Codec<T>
public "dispatch"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $Codec<E>
public "dispatch"<E>(string0: string, function1: $Function$$Type<E, T>, function2: $Function$$Type<T, $Codec<E>>): $Codec<E>
public "dispatchMap"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $MapCodec<E>
public "dispatchMap"<E>(string0: string, function1: $Function$$Type<E, T>, function2: $Function$$Type<T, $Codec<E>>): $MapCodec<E>
public "dispatchStable"<E>(function0: $Function$$Type<E, T>, function1: $Function$$Type<T, $Codec<E>>): $Codec<E>
public static "doubleRange"(double0: double, double1: double): $Codec<double>
public static "either"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Either<F, S>>
public static "empty"<A>(): $MapEncoder<A>
public "encode"<T1>(t0: T, dynamicOps1: $DynamicOps$$Type<T1>, t12: T1): $DataResult<T1>
public "encodeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
public static "enumSet"<T extends $Enum<T>>(class0: $Class$$Type<T>, serializableDataType1: $SerializableDataType$$Type<T>): $SerializableDataType<$EnumSet<T>>
public static "enumValue"<T extends $Enum<T>>(class0: $Class$$Type<T>): $SerializableDataType<T>
public static "enumValue"<T extends $Enum<T>>(class0: $Class$$Type<T>, hashMap1: $HashMap$$Type<string, T>): $SerializableDataType<T>
public static "enumValue"<T extends $Enum<T>>(class0: $Class$$Type<T>, function1: $Function$$Type<T, string>): $SerializableDataType<T>
public static "error"<A>(string0: string): $Encoder<A>
public "fieldOf"(string0: string): $MapCodec<T>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<T>>): $Encoder<B>
public "flatComapMap"<S>(function0: $Function$$Type<T, S>, function1: $Function$$Type<S, $DataResult<T>>): $Codec<S>
public "flatMap"<B>(function0: $Function$$Type<T, $DataResult<B>>): $Decoder<B>
public "flatXmap"<S>(function0: $Function$$Type<T, $DataResult<S>>, function1: $Function$$Type<S, $DataResult<T>>): $Codec<S>
public static "floatRange"(float0: float, float1: float): $Codec<float>
public static "intRange"(int0: integer, int1: integer): $Codec<integer>
public static "isDataContext"<T>(dynamicOps0: $DynamicOps$$Type<T>): boolean
public static "list"<T>(serializableDataType0: $SerializableDataType$$Type<T>): $SerializableDataType<$List<T>>
public static "list"<E>(codec0: $Codec$$Type<E>): $Codec<$List<E>>
public "listOf"(): $Codec<$List<T>>
public "map"<B>(function0: $Function$$Type<T, B>): $Decoder<B>
public static "mapEither"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Either<F, S>>
public static "mapPair"<F, S>(mapCodec0: $MapCodec$$Type<F>, mapCodec1: $MapCodec$$Type<S>): $MapCodec<$Pair<F, S>>
public "mapResult"(resultFunction0: $Codec$ResultFunction$$Type<T>): $Codec<T>
public static "mapped"<T>(class0: $Class$$Type<T>, biMap1: $BiMap$$Type<string, T>): $SerializableDataType<T>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>, supplier2: $Supplier$$Type<string>): $MapCodec<A>
public static "of"<A>(mapEncoder0: $MapEncoder$$Type<A>, mapDecoder1: $MapDecoder$$Type<A>): $MapCodec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>, string2: string): $Codec<A>
public static "of"<A>(encoder0: $Encoder$$Type<A>, decoder1: $Decoder$$Type<A>): $Codec<A>
public static "ofBoxed"<A>(boxed0: $Decoder$Boxed$$Type<A>): $Decoder<A>
public static "ofSimple"<A>(simple0: $Decoder$Simple$$Type<A>): $Decoder<A>
public static "ofTerminal"<A>(terminal0: $Decoder$Terminal$$Type<A>): $Decoder<A>
public static "optionalField"<F>(string0: string, codec1: $Codec$$Type<F>): $MapCodec<$Optional<F>>
public "optionalFieldOf"(string0: string): $MapCodec<$Optional<T>>
public "optionalFieldOf"(string0: string, t1: T, lifecycle2: $Lifecycle$$Type): $MapCodec<T>
public "optionalFieldOf"(string0: string, t1: T): $MapCodec<T>
public "optionalFieldOf"(string0: string, lifecycle1: $Lifecycle$$Type, t2: T, lifecycle3: $Lifecycle$$Type): $MapCodec<T>
public "orElse"(t0: T): $Codec<T>
public "orElse"(consumer0: $Consumer$$Type<string>, t1: T): $Codec<T>
public "orElse"(unaryOperator0: $UnaryOperator$$Type<string>, t1: T): $Codec<T>
public "orElseGet"(unaryOperator0: $UnaryOperator$$Type<string>, supplier1: $Supplier$$Type<T>): $Codec<T>
public "orElseGet"(supplier0: $Supplier$$Type<T>): $Codec<T>
public "orElseGet"(consumer0: $Consumer$$Type<string>, supplier1: $Supplier$$Type<T>): $Codec<T>
public static "pair"<F, S>(codec0: $Codec$$Type<F>, codec1: $Codec$$Type<S>): $Codec<$Pair<F, S>>
public "parse"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<T>
public "parse"<T>(dynamic0: $Dynamic$$Type<T>): $DataResult<T>
public "partialDispatch"<E>(string0: string, function1: $Function$$Type<E, $DataResult<T>>, function2: $Function$$Type<T, $DataResult<$Codec<E>>>): $Codec<E>
public "read"(jsonElement0: $JsonElement$$Type): T
public "receive"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
public static "registry"<T>(class0: $Class$$Type<T>, registry1: $Registry$$Type<T>): $SerializableDataType<T>
public static "registry"<T>(class0: $Class$$Type<T>, iForgeRegistry1: $IForgeRegistry$$Type<T>): $SerializableDataType<T>
public static "registryKey"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $SerializableDataType<$ResourceKey<T>>
public "send"(friendlyByteBuf0: $FriendlyByteBuf$$Type, object1: any): void
public "simple"(): $Decoder$Simple<T>
public static "simpleMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>, keyable2: $Keyable$$Type): $SimpleMapCodec<K, V>
public "stable"(): $Codec<T>
public static "tag"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $SerializableDataType<$TagKey<T>>
public static "tagLike"<T>(registry0: $Registry$$Type<T>): $SerializableDataType<$TagLike<T>>
public "terminal"(): $Decoder$Terminal<T>
public static "unboundedMap"<K, V>(codec0: $Codec$$Type<K>, codec1: $Codec$$Type<V>): $UnboundedMapCodec<K, V>
public static "unit"<A>(a0: A): $Codec<A>
public static "unit"<A>(supplier0: $Supplier$$Type<A>): $Codec<A>
public static "weightedList"<T>(serializableDataType0: $SerializableDataType$$Type<T>): $SerializableDataType<$FilterableWeightedList<T>>
public static "wrap"<T, U>(class0: $Class$$Type<T>, serializableDataType1: $SerializableDataType$$Type<U>, function2: $Function$$Type<T, U>, function3: $Function$$Type<U, T>): $SerializableDataType<T>
public "write"(t0: T): $JsonElement
public "xmap"<S>(function0: $Function$$Type<T, S>, function1: $Function$$Type<S, T>): $Codec<S>
}
}

declare module "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $IForgeRegistry } from "net.minecraftforge.registries.IForgeRegistry"
import { $DynamicEntryValidator$$Type } from "io.github.edwinmindcraft.calio.api.registry.DynamicEntryValidator"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $Registry } from "net.minecraft.core.Registry"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $MappedRegistry } from "net.minecraft.core.MappedRegistry"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $Class$$Type } from "java.lang.Class"
import { $DynamicEntryFactory$$Type } from "io.github.edwinmindcraft.calio.api.registry.DynamicEntryFactory"

export interface $ICalioDynamicRegistryManager extends $PreparableReloadListener {
"add"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, codec1: $Codec$$Type<T>): void
"add"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, consumer1: $Consumer$$Type<$BiConsumer$$Type<$ResourceKey$$Type<T>, T>>, codec2: $Codec$$Type<T>): void
"add"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, consumer1: $Consumer$$Type<$BiConsumer$$Type<$ResourceKey$$Type<T>, T>>, codec2: $Codec$$Type<T>, supplier3: $Supplier$$Type<$ResourceLocation>): void
"addForge"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, supplier1: $Supplier$$Type<$IForgeRegistry<T>>, codec2: $Codec$$Type<T>): void
"addReload"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, string1: string, dynamicEntryFactory2: $DynamicEntryFactory$$Type<T>): void
"addValidation"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, dynamicEntryValidator1: $DynamicEntryValidator$$Type<T>, ...resourceKey2s: $ResourceKey$$Type<any>[]): void
"addValidation"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, dynamicEntryValidator1: $DynamicEntryValidator$$Type<T>, class2: $Class$$Type<T>, ...resourceKey3s: $ResourceKey$$Type<any>[]): void
"addVanilla"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, supplier1: $Supplier$$Type<$Registry<T>>, codec2: $Codec$$Type<T>): void
"get"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $MappedRegistry<T>
"getName"(): string
"getOrCreate"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $MappedRegistry<T>
"getOrEmpty"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Optional<$MappedRegistry<T>>
"register"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceKey1: $ResourceKey$$Type<T>, t2: T): T
"reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
"reset"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $MappedRegistry<T>
get "name"(): string
}

export namespace $ICalioDynamicRegistryManager {
const probejs$$marker: never
}
export abstract class $ICalioDynamicRegistryManager$$Static implements $ICalioDynamicRegistryManager {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.EntityCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $IConditionFactory, $IConditionFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.IConditionFactory"
import { $ConfiguredEntityCondition } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition"
import { $ConfiguredCondition, $ConfiguredCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"
import { $Function$$Type } from "java.util.function.Function"

export class $EntityCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IConditionFactory<T, $ConfiguredEntityCondition<T, any>, $EntityCondition<T>> {
static readonly "CODEC": $Codec<$EntityCondition<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "check"(t0: T, conditionData1: $ConditionData$$Type, entity2: $Entity$$Type): boolean
public static "conditionCodec"<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
public "configure"(t0: T, conditionData1: $ConditionData$$Type): $ConfiguredEntityCondition<T, any>
public "getConditionCodec"(): $Codec<$ConfiguredEntityCondition<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.edwinmindcraft.calio.api.registry.DynamicEntryFactory" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $List$$Type } from "java.util.List"
import { $Map } from "java.util.Map"

export interface $DynamicEntryFactory<T = any> {
"accept"(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$JsonElement$$Type>): T
"create"(resourceLocation0: $ResourceLocation$$Type, list1: $List$$Type<$JsonElement$$Type>): $Map<$ResourceLocation, T>
}

export namespace $DynamicEntryFactory {
const probejs$$marker: never
}
export abstract class $DynamicEntryFactory$$Static<T = any> implements $DynamicEntryFactory<T> {
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.ModifyFoodPower" {
import { $ListConfiguration } from "io.github.edwinmindcraft.apoli.api.configuration.ListConfiguration"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredPower, $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $List, $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ModifyFoodConfiguration, $ModifyFoodConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyFoodConfiguration"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Mutable$$Type } from "org.apache.commons.lang3.mutable.Mutable"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $PowerFactory } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export class $ModifyFoodPower extends $PowerFactory<$ModifyFoodConfiguration> {
constructor()

public static "apply"(list0: $List$$Type<$ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, $ModifyFoodPower$$Type>>, level1: $Level$$Type, itemStack2: $ItemStack$$Type, double3: double, function4: $Function$$Type<$ModifyFoodConfiguration$$Type, $ListConfiguration<$AttributeModifier>>): double
public "check"(configuredPower0: $ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, any>, level1: $Level$$Type, itemStack2: $ItemStack$$Type): boolean
public "execute"(configuredPower0: $ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, any>, entity1: $Entity$$Type): void
public static "execute"(list0: $List$$Type<$ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, $ModifyFoodPower$$Type>>, entity1: $Entity$$Type, level2: $Level$$Type, itemStack3: $ItemStack$$Type): void
public static "getValidPowers"(entity0: $Entity$$Type, itemStack1: $ItemStack$$Type): $List<$ConfiguredPower<$ModifyFoodConfiguration, $ModifyFoodPower>>
public static "getValidPowers"(entity0: $Entity$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type): $List<$ConfiguredPower<$ModifyFoodConfiguration, $ModifyFoodPower>>
public static "isAlwaysEdible"(entity0: $Entity$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type): boolean
public static "modifyStack"(iterable0: $Iterable$$Type<$ConfiguredPower$$Type<$ModifyFoodConfiguration$$Type, $ModifyFoodPower$$Type>>, level1: $Level$$Type, mutable2: $Mutable$$Type<$ItemStack$$Type>): void
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.DamageCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $ConfiguredDamageCondition } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredDamageCondition"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $IConditionFactory, $IConditionFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.IConditionFactory"
import { $ConfiguredCondition, $ConfiguredCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"
import { $Function$$Type } from "java.util.function.Function"

export class $DamageCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IConditionFactory<T, $ConfiguredDamageCondition<T, any>, $DamageCondition<T>> {
static readonly "CODEC": $Codec<$DamageCondition<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "check"(t0: T, conditionData1: $ConditionData$$Type, damageSource2: $DamageSource$$Type, float3: float): boolean
public static "conditionCodec"<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
public "configure"(t0: T, conditionData1: $ConditionData$$Type): $ConfiguredDamageCondition<T, any>
public "getConditionCodec"(): $Codec<$ConfiguredDamageCondition<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.apace100.origins.mixin.DrawContextAccessor" {
import { $Font$$Type } from "net.minecraft.client.gui.Font"
import { $List$$Type } from "java.util.List"
import { $ClientTooltipPositioner$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import { $ClientTooltipComponent$$Type } from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $DrawContextAccessor {
"invokeDrawTooltip"(font0: $Font$$Type, list1: $List$$Type<$ClientTooltipComponent$$Type>, int2: integer, int3: integer, clientTooltipPositioner4: $ClientTooltipPositioner$$Type): void
}

export namespace $DrawContextAccessor {
const probejs$$marker: never
}
export abstract class $DrawContextAccessor$$Static implements $DrawContextAccessor {
}
}

declare module "io.github.apace100.calio.registry.DataObjectFactory" {
import { $SerializableData$Instance, $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $SerializableData } from "io.github.apace100.calio.data.SerializableData"

export interface $DataObjectFactory<T = any> {
"fromData"(instance0: $SerializableData$Instance$$Type): T
"getData"(): $SerializableData
"toData"(t0: T): $SerializableData$Instance
get "data"(): $SerializableData
}

export namespace $DataObjectFactory {
const probejs$$marker: never
}
export abstract class $DataObjectFactory$$Static<T = any> implements $DataObjectFactory<T> {
}
}

declare module "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent$Initialize" {
import { $CalioDynamicRegistryEvent } from "io.github.edwinmindcraft.calio.api.event.CalioDynamicRegistryEvent"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"

export class $CalioDynamicRegistryEvent$Initialize extends $CalioDynamicRegistryEvent implements $IModBusEvent {
constructor(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type)
constructor()

}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.ItemAction" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $IFactory } from "io.github.edwinmindcraft.apoli.api.power.IFactory"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $Mutable$$Type } from "org.apache.commons.lang3.mutable.Mutable"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Function$$Type } from "java.util.function.Function"
import { $ConfiguredItemAction } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemAction"

export class $ItemAction<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IFactory<T, $ConfiguredItemAction<T, any>, $ItemAction<T>> {
static readonly "CODEC": $Codec<$ItemAction<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "execute"(t0: T, level1: $Level$$Type, mutable2: $Mutable$$Type<$ItemStack$$Type>): void
public "getCodec"(): $Codec<$ConfiguredItemAction<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
get "codec"(): $Codec<$ConfiguredItemAction<T, any>>
}
}

declare module "io.github.edwinmindcraft.apoli.common.power.ModifyDamageTakenPower" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ValueModifyingPowerFactory } from "io.github.edwinmindcraft.apoli.api.power.factory.power.ValueModifyingPowerFactory"
import { $ModifyDamageTakenConfiguration, $ModifyDamageTakenConfiguration$$Type } from "io.github.edwinmindcraft.apoli.common.power.configuration.ModifyDamageTakenConfiguration"

export class $ModifyDamageTakenPower extends $ValueModifyingPowerFactory<$ModifyDamageTakenConfiguration> {
constructor()

public "check"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, any>, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type, float3: float): boolean
public "checkArmorApplicance"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, any>, entity1: $Entity$$Type): boolean
public "checkArmorDamaging"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, any>, entity1: $Entity$$Type): boolean
public "execute"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, any>, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type): void
public "modifiesArmorApplicance"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, any>): boolean
public "modifiesArmorDamaging"(configuredPower0: $ConfiguredPower$$Type<$ModifyDamageTakenConfiguration$$Type, any>): boolean
public static "modify"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): float
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.IVariableIntPower" {
import { $ConfiguredPower$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IDynamicFeatureConfiguration } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"

export interface $IVariableIntPower<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> {
"assign"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type, int2: integer): integer
"change"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type, int2: integer): integer
"decrement"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): integer
"getMaximum"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): integer
"getMinimum"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): integer
"getProgress"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): float
"getValue"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): integer
"increment"(configuredPower0: $ConfiguredPower$$Type<T, any>, entity1: $Entity$$Type): integer
}

export namespace $IVariableIntPower {
const probejs$$marker: never
}
export abstract class $IVariableIntPower$$Static<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IVariableIntPower<T> {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.ItemCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $ConfiguredItemCondition } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemCondition"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $IConditionFactory, $IConditionFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.IConditionFactory"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ConfiguredCondition, $ConfiguredCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"
import { $Function$$Type } from "java.util.function.Function"

export class $ItemCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IConditionFactory<T, $ConfiguredItemCondition<T, any>, $ItemCondition<T>> {
static readonly "CODEC": $Codec<$ItemCondition<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "check"(t0: T, conditionData1: $ConditionData$$Type, level2: $Level$$Type, itemStack3: $ItemStack$$Type): boolean
public static "conditionCodec"<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
public "configure"(t0: T, conditionData1: $ConditionData$$Type): $ConfiguredItemCondition<T, any>
public "getConditionCodec"(): $Codec<$ConfiguredItemCondition<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.apace100.origins.badge.BadgeFactory" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DataObjectFactory } from "io.github.apace100.calio.registry.DataObjectFactory"
import { $SerializableData$Instance, $SerializableData$Instance$$Type } from "io.github.apace100.calio.data.SerializableData$Instance"
import { $Codec } from "com.mojang.serialization.Codec"
import { $SerializableData, $SerializableData$$Type } from "io.github.apace100.calio.data.SerializableData"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Badge, $Badge$$Type } from "io.github.apace100.origins.badge.Badge"

export class $BadgeFactory implements $DataObjectFactory<$Badge> {
constructor(resourceLocation0: $ResourceLocation$$Type, serializableData1: $SerializableData$$Type, function2: $Function$$Type<$SerializableData$Instance$$Type, $Badge>)

public "data"(): $SerializableData
public "factory"(): $Function<$SerializableData$Instance, $Badge>
public "getCodec"(): $Codec<$Badge>
public "getData"(): $SerializableData
public "id"(): $ResourceLocation
public "toData"(badge0: $Badge$$Type): $SerializableData$Instance
get "codec"(): $Codec<$Badge>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.BiEntityCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $IConditionFactory, $IConditionFactory$$Type } from "io.github.edwinmindcraft.apoli.api.power.IConditionFactory"
import { $ConfiguredBiEntityCondition } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityCondition"
import { $ConfiguredCondition, $ConfiguredCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"
import { $Function$$Type } from "java.util.function.Function"

export class $BiEntityCondition<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IConditionFactory<T, $ConfiguredBiEntityCondition<T, any>, $BiEntityCondition<T>> {
static readonly "CODEC": $Codec<$BiEntityCondition<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "check"(t0: T, conditionData1: $ConditionData$$Type, entity2: $Entity$$Type, entity3: $Entity$$Type): boolean
public static "conditionCodec"<T extends $IDynamicFeatureConfiguration, C extends $ConfiguredCondition<T, F, any>, F extends $IConditionFactory<T, C, F>>(codec0: $Codec$$Type<T>, f1: F): $Codec<C>
public "configure"(t0: T, conditionData1: $ConditionData$$Type): $ConfiguredBiEntityCondition<T, any>
public "getConditionCodec"(): $Codec<$ConfiguredBiEntityCondition<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
}
}

declare module "io.github.edwinmindcraft.apoli.common.util.ModifyPlayerSpawnCache" {
import { $ConfiguredPower } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export interface $ModifyPlayerSpawnCache {
"getActiveSpawnPower"(): $ResourceKey<$ConfiguredPower<any, any>>
"removeActiveSpawnPower"(): void
"setActiveSpawnPower"(resourceKey0: $ResourceKey$$Type<$ConfiguredPower<any, any>>): void
get "activeSpawnPower"(): $ResourceKey<$ConfiguredPower<any, any>>
set "activeSpawnPower"(value: $ResourceKey$$Type<$ConfiguredPower<any, any>>)
}

export namespace $ModifyPlayerSpawnCache {
const probejs$$marker: never
}
export abstract class $ModifyPlayerSpawnCache$$Static implements $ModifyPlayerSpawnCache {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $NonNullSupplier$$Type } from "net.minecraftforge.common.util.NonNullSupplier"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $IActivePower$Key } from "io.github.edwinmindcraft.apoli.api.power.IActivePower$Key"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $OptionalInt } from "java.util.OptionalInt"
import { $IPowerContainer$$Type } from "io.github.edwinmindcraft.apoli.api.component.IPowerContainer"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $PowerType } from "io.github.apace100.apoli.power.PowerType"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $HudRender } from "io.github.apace100.apoli.util.HudRender"
import { $CapabilityProvider } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $IActivePower } from "io.github.edwinmindcraft.apoli.api.power.IActivePower"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $Set } from "java.util.Set"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $PowerData, $PowerData$$Type } from "io.github.edwinmindcraft.apoli.api.power.PowerData"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $IHudRenderedPower } from "io.github.edwinmindcraft.apoli.api.power.IHudRenderedPower"
import { $Optional } from "java.util.Optional"
import { $IVariableIntPower } from "io.github.edwinmindcraft.apoli.api.power.IVariableIntPower"
import { $DynamicRegistryListener } from "io.github.edwinmindcraft.calio.api.registry.DynamicRegistryListener"
import { $PowerFactory } from "io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory"

export class $ConfiguredPower<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $PowerFactory<C> = $PowerFactory<C>> extends $CapabilityProvider<$ConfiguredPower<any, any>> implements $IDynamicFeatureConfiguration, $DynamicRegistryListener {
static readonly "CODEC": $Codec<$ConfiguredPower<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredPower<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredPower<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C, powerData2: $PowerData$$Type)

public "activate"(entity0: $Entity$$Type): boolean
public "asActive"(): $Optional<$IActivePower<C>>
public "asHudRendered"(): $Optional<$IHudRenderedPower<C>>
public "asVariableIntPower"(): $Optional<$IVariableIntPower<C>>
public "assign"(entity0: $Entity$$Type, int1: integer): $OptionalInt
public "change"(entity0: $Entity$$Type, int1: integer): $OptionalInt
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "complete"(resourceLocation0: $ResourceLocation$$Type): $ConfiguredPower<C, F>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "decrement"(entity0: $Entity$$Type): $OptionalInt
public "deserialize"(iPowerContainer0: $IPowerContainer$$Type, compoundTag1: $CompoundTag$$Type): void
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChildren"(): $Set<$Holder<$ConfiguredPower<any, any>>>
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getChildrenKeys"(): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
public "getConfiguration"(): C
public "getContainedPowerKeys"(): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
public "getContainedPowers"(): $Map<string, $Holder<$ConfiguredPower<any, any>>>
public "getData"(): $PowerData
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getFactory"(): F
public "getFill"(entity0: $Entity$$Type): $Optional<float>
public "getKey"(entity0: $Entity$$Type): $Optional<$IActivePower$Key>
public "getMaximum"(entity0: $Entity$$Type): $OptionalInt
public "getMinimum"(entity0: $Entity$$Type): $OptionalInt
public "getMissingBinds"(): $List<string>
public "getPowerData"<T>(iPowerContainer0: $IPowerContainer$$Type, nonNullSupplier1: $NonNullSupplier$$Type<T>): T
public "getPowerData"<T>(entity0: $Entity$$Type, nonNullSupplier1: $NonNullSupplier$$Type<T>): T
public "getPowerType"(): $PowerType<any>
public "getRegistryName"(): $ResourceLocation
public "getRenderSettings"(entity0: $Entity$$Type): $Optional<$HudRender>
public "getUnbound"(): $List<string>
public "getValue"(entity0: $Entity$$Type): $OptionalInt
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "increment"(entity0: $Entity$$Type): $OptionalInt
public "isActive"(entity0: $Entity$$Type): boolean
public "isConfigurationValid"(): boolean
public "name"(): string
public "onAdded"(entity0: $Entity$$Type): void
public "onGained"(entity0: $Entity$$Type): void
public "onLost"(entity0: $Entity$$Type): void
public "onRemoved"(entity0: $Entity$$Type): void
public "onRespawn"(entity0: $Entity$$Type): void
public static "optional"(string0: string): $MapCodec<$Optional<$Holder<$ConfiguredPower<any, any>>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredPower<any, any>>>
public "serialize"(iPowerContainer0: $IPowerContainer$$Type): $CompoundTag
public "shouldRender"(entity0: $Entity$$Type): $Optional<boolean>
public "tick"(entity0: $Entity$$Type, boolean1: boolean): void
public "tick"(entity0: $Entity$$Type): void
public "whenAvailable"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): void
public "whenNamed"(resourceLocation0: $ResourceLocation$$Type): void
get "children"(): $Set<$Holder<$ConfiguredPower<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "childrenKeys"(): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
get "configuration"(): C
get "containedPowerKeys"(): $Set<$ResourceKey<$ConfiguredPower<any, any>>>
get "containedPowers"(): $Map<string, $Holder<$ConfiguredPower<any, any>>>
get "data"(): $PowerData
get "factory"(): F
get "missingBinds"(): $List<string>
get "powerType"(): $PowerType<any>
get "registryName"(): $ResourceLocation
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.PowerData$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PowerData } from "io.github.edwinmindcraft.apoli.api.power.PowerData"
import { $List } from "java.util.List"
import { $ICondition$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition"
import { $ConfiguredEntityCondition, $ConfiguredEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition"

export class $PowerData$Builder {
constructor()

public "addCondition"(configuredEntityCondition0: $ConfiguredEntityCondition$$Type<any, any>): $PowerData$Builder
public "build"(): $PowerData
public "getConditions"(): $List<$ConfiguredEntityCondition<any, any>>
public "hidden"(): $PowerData$Builder
public "hidden"(boolean0: boolean): $PowerData$Builder
public "withDescription"(string0: string): $PowerData$Builder
public "withForgeCondition"(iCondition0: $ICondition$$Type): $PowerData$Builder
public "withIdentifier"(resourceLocation0: $ResourceLocation$$Type): $PowerData$Builder
public "withName"(string0: string): $PowerData$Builder
public "withPriority"(int0: integer): $PowerData$Builder
get "conditions"(): $List<$ConfiguredEntityCondition<any, any>>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.ConditionData" {
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Record } from "java.lang.Record"

export class $ConditionData extends $Record {
static readonly "CODEC": $MapCodec<$ConditionData>
static readonly "DEFAULT": $ConditionData

constructor(inverted: boolean)

public "inverted"(): boolean
}
}

declare module "io.github.apace100.apoli.power.Power" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $PowerType, $PowerType$$Type } from "io.github.apace100.apoli.power.PowerType"
import { $Predicate$$Type } from "java.util.function.Predicate"

export class $Power {
constructor(powerType0: $PowerType$$Type<any>, livingEntity1: $LivingEntity$$Type)

public "addCondition"(predicate0: $Predicate$$Type<$Entity$$Type>): $Power
public "fromTag"(tag0: $Tag$$Type): void
public "getType"(): $PowerType<any>
public "isActive"(): boolean
public "onAdded"(): void
public "onGained"(): void
public "onLost"(): void
public "onRemoved"(): void
public "onRespawn"(): void
public "shouldTick"(): boolean
public "shouldTickWhenInactive"(): boolean
public "tick"(): void
public "toTag"(): $Tag
get "type"(): $PowerType<any>
get "active"(): boolean
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $BiEntityCondition } from "io.github.edwinmindcraft.apoli.api.power.factory.BiEntityCondition"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ConfiguredCondition } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"

export class $ConfiguredBiEntityCondition<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $BiEntityCondition<C> = $BiEntityCondition<C>> extends $ConfiguredCondition<C, F, $ConfiguredBiEntityCondition<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredBiEntityCondition<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredBiEntityCondition<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredBiEntityCondition<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C, conditionData2: $ConditionData$$Type)

public "check"(entity0: $Entity$$Type, entity1: $Entity$$Type): boolean
public static "check"(holder0: $Holder$$Type<$ConfiguredBiEntityCondition$$Type<any, any>>, entity1: $Entity$$Type, entity2: $Entity$$Type): boolean
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredBiEntityCondition<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredBiEntityCondition<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.apace100.calio.util.ArgumentWrapper" {
import { $Record } from "java.lang.Record"

export class $ArgumentWrapper<T = any> extends $Record {
constructor(get: T, rawArgument: string)

public "get"(): T
public "rawArgument"(): string
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredItemCondition" {
import { $ConditionData$$Type } from "io.github.edwinmindcraft.apoli.api.power.ConditionData"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemCondition } from "io.github.edwinmindcraft.apoli.api.power.factory.ItemCondition"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ConfiguredCondition } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredCondition"

export class $ConfiguredItemCondition<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $ItemCondition<C> = $ItemCondition<C>> extends $ConfiguredCondition<C, F, $ConfiguredItemCondition<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredItemCondition<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredItemCondition<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredItemCondition<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C, conditionData2: $ConditionData$$Type)

public static "check"(holder0: $Holder$$Type<$ConfiguredItemCondition$$Type<any, any>>, level1: $Level$$Type, itemStack2: $ItemStack$$Type): boolean
public "check"(level0: $Level$$Type, itemStack1: $ItemStack$$Type): boolean
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredItemCondition<any, any>>>
public static "optional"(string0: string, resourceKey1: $ResourceKey$$Type<$ConfiguredItemCondition<any, any>>): $MapCodec<$Holder<$ConfiguredItemCondition<any, any>>>
public static "optional"(string0: string, resourceLocation1: $ResourceLocation$$Type): $MapCodec<$Holder<$ConfiguredItemCondition<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredItemCondition<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

declare module "io.github.edwinmindcraft.calio.api.network.PropagatingDefaultedOptionalFieldCodec" {
import { $MapLike$$Type } from "com.mojang.serialization.MapLike"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $RecordBuilder, $RecordBuilder$$Type } from "com.mojang.serialization.RecordBuilder"
import { $Decoder } from "com.mojang.serialization.Decoder"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $MapDecoder, $MapDecoder$$Type } from "com.mojang.serialization.MapDecoder"
import { $Function$$Type } from "java.util.function.Function"
import { $Encoder } from "com.mojang.serialization.Encoder"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MapEncoder } from "com.mojang.serialization.MapEncoder"
import { $KeyCompressor, $KeyCompressor$$Type } from "com.mojang.serialization.KeyCompressor"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $DataResult } from "com.mojang.serialization.DataResult"

export class $PropagatingDefaultedOptionalFieldCodec<A = any> extends $MapCodec<A> {
constructor(string0: string, codec1: $Codec$$Type<A>, supplier2: $Supplier$$Type<A>)

public "ap"<E>(mapDecoder0: $MapDecoder$$Type<$Function$$Type<A, E>>): $MapDecoder<E>
public "comap"<B>(function0: $Function$$Type<B, A>): $MapEncoder<B>
public "compressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>): $RecordBuilder<T>
public "compressedDecode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<A>
public "compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<A>
public "decoder"(): $Decoder<A>
public "encode"<T>(a0: A, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
public "encoder"(): $Encoder<A>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<A>>): $MapEncoder<B>
public "flatMap"<B>(function0: $Function$$Type<A, $DataResult<B>>): $MapDecoder<B>
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
public static "makeCompressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
public "map"<B>(function0: $Function$$Type<A, B>): $MapDecoder<B>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.PowerData" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $ICondition, $ICondition$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition"
import { $Record } from "java.lang.Record"
import { $ConfiguredEntityCondition, $ConfiguredEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $PowerData$Builder } from "io.github.edwinmindcraft.apoli.api.power.PowerData$Builder"

export class $PowerData extends $Record {
static readonly "CODEC": $MapCodec<$PowerData>
static readonly "DEFAULT": $PowerData

constructor(conditions: $List$$Type<$ConfiguredEntityCondition$$Type<any, any>>, hidden: boolean, loadingPriority: integer, forgeCondition: $Optional$$Type<$ICondition$$Type>, name: string, description: string)

public static "builder"(): $PowerData$Builder
public "complete"(resourceLocation0: $ResourceLocation$$Type): $PowerData
public "conditions"(): $List<$ConfiguredEntityCondition<any, any>>
public "copyOf"(): $PowerData$Builder
public "description"(): string
public "forgeCondition"(): $Optional<$ICondition>
public "getDescription"(): $MutableComponent
public "getName"(): $MutableComponent
public "hidden"(): boolean
public "loadingPriority"(): integer
public "name"(): string
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.power.IValueModifyingPowerConfiguration" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $ListConfiguration } from "io.github.edwinmindcraft.apoli.api.configuration.ListConfiguration"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $ConfiguredModifier } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredModifier"
import { $Iterable$$Type } from "java.lang.Iterable"

export interface $IValueModifyingPowerConfiguration extends $IDynamicFeatureConfiguration {
"checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
"copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
"copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
"fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
"forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
"getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
"getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
"getMissingBinds"(): $List<string>
"getUnbound"(): $List<string>
"getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
"isConfigurationValid"(): boolean
"modifiers"(): $ListConfiguration<$ConfiguredModifier<any>>
"name"(): string
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}

export namespace $IValueModifyingPowerConfiguration {
function holderAsString(string0: string, holder1: $Holder$$Type<any>): string
function populate(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
function populate(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
}
export abstract class $IValueModifyingPowerConfiguration$$Static implements $IValueModifyingPowerConfiguration {
static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
}
}

declare module "io.github.apace100.apoli.util.HudRender" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Record } from "java.lang.Record"
import { $ConfiguredEntityCondition, $ConfiguredEntityCondition$$Type } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredEntityCondition"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"

export class $HudRender extends $Record implements $IDynamicFeatureConfiguration {
static readonly "CODEC": $Codec<$HudRender>
static readonly "DONT_RENDER": $HudRender
static readonly "MAP_CODEC": $MapCodec<$HudRender>

constructor(shouldRender: boolean, barIndex: integer, spriteLocation: $ResourceLocation$$Type, condition: $Holder$$Type<$ConfiguredEntityCondition$$Type<any, any>>, inverted: boolean)

public "barIndex"(): integer
public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "condition"(): $Holder<$ConfiguredEntityCondition<any, any>>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getBarIndex"(): integer
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getCondition"(): $Holder<$ConfiguredEntityCondition<any, any>>
public "getErrors"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public "getMissingBinds"(): $List<string>
public "getSpriteLocation"(): $ResourceLocation
public "getUnbound"(): $List<string>
public "getWarnings"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "inverted"(): boolean
public "isConfigurationValid"(): boolean
public "isInverted"(): boolean
public "name"(): string
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public "shouldRender"(player0: $Player$$Type): boolean
public "shouldRender"(): boolean
public "shouldRender"(entity0: $Entity$$Type): boolean
public "spriteLocation"(): $ResourceLocation
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
get "configurationValid"(): boolean
}
}

declare module "io.github.edwinmindcraft.calio.api.network.PropagatingOptionalFieldCodec" {
import { $MapLike$$Type } from "com.mojang.serialization.MapLike"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $RecordBuilder, $RecordBuilder$$Type } from "com.mojang.serialization.RecordBuilder"
import { $Decoder } from "com.mojang.serialization.Decoder"
import { $MapDecoder, $MapDecoder$$Type } from "com.mojang.serialization.MapDecoder"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Encoder } from "com.mojang.serialization.Encoder"
import { $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $MapEncoder } from "com.mojang.serialization.MapEncoder"
import { $KeyCompressor, $KeyCompressor$$Type } from "com.mojang.serialization.KeyCompressor"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $DataResult } from "com.mojang.serialization.DataResult"

export class $PropagatingOptionalFieldCodec<A = any> extends $MapCodec<$Optional<A>> {
constructor(string0: string, codec1: $Codec$$Type<A>)

public "ap"<E>(mapDecoder0: $MapDecoder$$Type<$Function$$Type<$Optional$$Type<A>, E>>): $MapDecoder<E>
public "comap"<B>(function0: $Function$$Type<B, $Optional<A>>): $MapEncoder<B>
public "compressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>): $RecordBuilder<T>
public "compressedDecode"<T>(dynamicOps0: $DynamicOps$$Type<T>, t1: T): $DataResult<$Optional<A>>
public "compressor"<T>(dynamicOps0: $DynamicOps$$Type<T>): $KeyCompressor<T>
public "decode"<T>(dynamicOps0: $DynamicOps$$Type<T>, mapLike1: $MapLike$$Type<T>): $DataResult<$Optional<A>>
public "decoder"(): $Decoder<$Optional<A>>
public "encode"<T>(optional0: $Optional$$Type<A>, dynamicOps1: $DynamicOps$$Type<T>, recordBuilder2: $RecordBuilder$$Type<T>): $RecordBuilder<T>
public "encoder"(): $Encoder<$Optional<A>>
public "flatComap"<B>(function0: $Function$$Type<B, $DataResult<$Optional<A>>>): $MapEncoder<B>
public "flatMap"<B>(function0: $Function$$Type<$Optional$$Type<A>, $DataResult<B>>): $MapDecoder<B>
public static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
public "keys"<T>(dynamicOps0: $DynamicOps$$Type<T>): $Stream<T>
public static "makeCompressedBuilder"<T>(dynamicOps0: $DynamicOps$$Type<T>, keyCompressor1: $KeyCompressor$$Type<T>): $RecordBuilder<T>
public "map"<B>(function0: $Function$$Type<$Optional$$Type<A>, B>): $MapDecoder<B>
}
}

declare module "io.github.apace100.apoli.access.HiddenEffectStatus" {
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"

export interface $HiddenEffectStatus {
"getHiddenEffect"(): $MobEffectInstance
get "hiddenEffect"(): $MobEffectInstance
}

export namespace $HiddenEffectStatus {
const probejs$$marker: never
}
export abstract class $HiddenEffectStatus$$Static implements $HiddenEffectStatus {
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.factory.BlockAction" {
import { $ConfiguredBlockAction } from "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBlockAction"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $IFactory } from "io.github.edwinmindcraft.apoli.api.power.IFactory"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $MapCodec, $MapCodec$$Type } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Function$$Type } from "java.util.function.Function"

export class $BlockAction<T extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration> implements $IFactory<T, $ConfiguredBlockAction<T, any>, $BlockAction<T>> {
static readonly "CODEC": $Codec<$BlockAction<any>>

public static "asMap"<T>(codec0: $Codec$$Type<T>): $MapCodec<T>
public "execute"(t0: T, level1: $Level$$Type, blockPos2: $BlockPos$$Type, direction3: $Direction$$Type): void
public "getCodec"(): $Codec<$ConfiguredBlockAction<T, any>>
public static "singleCodec"<T, R>(mapCodec0: $MapCodec$$Type<T>, function1: $Function$$Type<T, R>, function2: $Function$$Type<R, T>): $Codec<R>
public static "unionCodec"<T, V, R>(mapCodec0: $MapCodec$$Type<T>, mapCodec1: $MapCodec$$Type<V>, biFunction2: $BiFunction$$Type<T, V, R>, function3: $Function$$Type<R, T>, function4: $Function$$Type<R, V>): $Codec<R>
get "codec"(): $Codec<$ConfiguredBlockAction<T, any>>
}
}

declare module "io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredBiEntityAction" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiEntityAction } from "io.github.edwinmindcraft.apoli.api.power.factory.BiEntityAction"
import { $MapCodec } from "com.mojang.serialization.MapCodec"
import { $IDynamicFeatureConfiguration, $IDynamicFeatureConfiguration$$Type } from "io.github.edwinmindcraft.apoli.api.IDynamicFeatureConfiguration"
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $CodecSet } from "io.github.edwinmindcraft.calio.api.network.CodecSet"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $ConfiguredFactory } from "io.github.edwinmindcraft.apoli.api.power.ConfiguredFactory"
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ICalioDynamicRegistryManager$$Type } from "io.github.edwinmindcraft.calio.api.registry.ICalioDynamicRegistryManager"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"

export class $ConfiguredBiEntityAction<C extends $IDynamicFeatureConfiguration = $IDynamicFeatureConfiguration, F extends $BiEntityAction<C> = $BiEntityAction<C>> extends $ConfiguredFactory<C, F, $ConfiguredBiEntityAction<any, any>> {
static readonly "CODEC": $Codec<$ConfiguredBiEntityAction<any, any>>
static readonly "CODEC_SET": $CodecSet<$ConfiguredBiEntityAction<any, any>>
static readonly "HOLDER": $Codec<$Holder<$ConfiguredBiEntityAction<any, any>>>

constructor(supplier0: $Supplier$$Type<F>, c1: C)

public "checkPower"(iCalioDynamicRegistryManager0: $ICalioDynamicRegistryManager$$Type, ...resourceLocation1s: $ResourceLocation$$Type[]): $List<$ResourceLocation>
public "copyErrorsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "copyWarningsFrom"(iDynamicFeatureConfiguration0: $IDynamicFeatureConfiguration$$Type, iCalioDynamicRegistryManager1: $ICalioDynamicRegistryManager$$Type, string2: string, ...string3s: string[]): $List<string>
public "execute"(entity0: $Entity$$Type, entity1: $Entity$$Type): void
public static "execute"(holder0: $Holder$$Type<$ConfiguredBiEntityAction$$Type<any, any>>, entity1: $Entity$$Type, entity2: $Entity$$Type): void
public "fieldName"(string0: string, ...string1s: string[]): $UnaryOperator<string>
public "forChildren"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>): void
public "getChildrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
public "getMissingBinds"(): $List<string>
public "getUnbound"(): $List<string>
public static "holderAsString"(string0: string, holder1: $Holder$$Type<any>): string
public "name"(): string
public static "optional"(string0: string): $MapCodec<$Holder<$ConfiguredBiEntityAction<any, any>>>
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, iterable1: $Iterable$$Type<any>, string2: string): void
public static "populate"(biConsumer0: $BiConsumer$$Type<string, $IDynamicFeatureConfiguration$$Type>, map1: $Map$$Type<any, any>, string2: string): void
public static "required"(string0: string): $MapCodec<$Holder<$ConfiguredBiEntityAction<any, any>>>
get "childrenComponent"(): $Map<string, $IDynamicFeatureConfiguration>
get "missingBinds"(): $List<string>
get "unbound"(): $List<string>
}
}

