declare module "net.minecraft.data.loot.LootTableSubProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"

export interface $LootTableSubProvider {
"generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
}

export namespace $LootTableSubProvider {
const probejs$$marker: never
}
export abstract class $LootTableSubProvider$$Static implements $LootTableSubProvider {
}
}

declare module "net.minecraft.data.CachedOutput" {
import { $HashCode$$Type } from "com.google.common.hash.HashCode"
import { $Path$$Type } from "java.nio.file.Path"

export interface $CachedOutput {
"writeIfNeeded"(path0: $Path$$Type, byte1s: byte[], hashCode2: $HashCode$$Type): void
}

export namespace $CachedOutput {
const NO_CACHE: $CachedOutput
}
export abstract class $CachedOutput$$Static implements $CachedOutput {
static readonly "NO_CACHE": $CachedOutput

}
}

declare module "net.minecraft.data.DataProvider$Factory" {
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $DataProvider } from "net.minecraft.data.DataProvider"

export interface $DataProvider$Factory<T extends $DataProvider = $DataProvider> {
"create"(packOutput0: $PackOutput$$Type): T
}

export namespace $DataProvider$Factory {
const probejs$$marker: never
}
export abstract class $DataProvider$Factory$$Static<T extends $DataProvider = $DataProvider> implements $DataProvider$Factory<T> {
}
}

declare module "net.minecraft.data.PackOutput$Target" {
import { $Enum } from "java.lang.Enum"

export class $PackOutput$Target extends $Enum<$PackOutput$Target> {
static readonly "DATA_PACK": $PackOutput$Target
static readonly "REPORTS": $PackOutput$Target
static readonly "RESOURCE_PACK": $PackOutput$Target

public static "valueOf"(string0: string): $PackOutput$Target
public static "values"(): $PackOutput$Target[]
}
}

declare module "net.minecraft.data.DataGenerator$PackGenerator" {
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $DataProvider$Factory$$Type } from "net.minecraft.data.DataProvider$Factory"
import { $DataGenerator$$Type } from "net.minecraft.data.DataGenerator"
import { $DataProvider, $DataProvider$$Type } from "net.minecraft.data.DataProvider"

export class $DataGenerator$PackGenerator {
constructor(dataGenerator0: $DataGenerator$$Type, boolean1: boolean, string2: string, packOutput3: $PackOutput$$Type)

public "addProvider"<T extends $DataProvider>(factory0: $DataProvider$Factory$$Type<T>): T
}
}

declare module "net.minecraft.data.PackOutput$PathProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $PackOutput$Target$$Type } from "net.minecraft.data.PackOutput$Target"
import { $Path } from "java.nio.file.Path"

export class $PackOutput$PathProvider {
readonly "kind": string
readonly "root": $Path

constructor(packOutput0: $PackOutput$$Type, target1: $PackOutput$Target$$Type, string2: string)

public "file"(resourceLocation0: $ResourceLocation$$Type, string1: string): $Path
public "json"(resourceLocation0: $ResourceLocation$$Type): $Path
}
}

declare module "net.minecraft.data.DataProvider" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Logger } from "org.slf4j.Logger"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Comparator } from "java.util.Comparator"
import { $Path$$Type } from "java.nio.file.Path"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"

export interface $DataProvider {
"getName"(): string
"run"(cachedOutput0: $CachedOutput$$Type): $CompletableFuture<any>
get "name"(): string
}

export namespace $DataProvider {
const FIXED_ORDER_FIELDS: $ToIntFunction<string>
const KEY_COMPARATOR: $Comparator<string>
const LOGGER: $Logger
function saveStable(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
export abstract class $DataProvider$$Static implements $DataProvider {
static readonly "FIXED_ORDER_FIELDS": $ToIntFunction<string>
static readonly "KEY_COMPARATOR": $Comparator<string>
static readonly "LOGGER": $Logger

static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "net.minecraft.data.PackOutput" {
import { $PackOutput$PathProvider } from "net.minecraft.data.PackOutput$PathProvider"
import { $PackOutput$Target$$Type } from "net.minecraft.data.PackOutput$Target"
import { $Path, $Path$$Type } from "java.nio.file.Path"

export class $PackOutput {
constructor(path0: $Path$$Type)

public "createPathProvider"(target0: $PackOutput$Target$$Type, string1: string): $PackOutput$PathProvider
public "getOutputFolder"(target0: $PackOutput$Target$$Type): $Path
public "getOutputFolder"(): $Path
get "outputFolder"(): $Path
}
}

declare module "net.minecraft.data.worldgen.BootstapContext" {
import { $Registry } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $Optional } from "java.util.Optional"
import { $Lifecycle$$Type } from "com.mojang.serialization.Lifecycle"
import { $HolderGetter } from "net.minecraft.core.HolderGetter"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $BootstapContext<T = any> {
"lookup"<S>(resourceKey0: $ResourceKey$$Type<$Registry<S>>): $HolderGetter<S>
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T): $Holder$Reference<T>
"register"(resourceKey0: $ResourceKey$$Type<T>, t1: T, lifecycle2: $Lifecycle$$Type): $Holder$Reference<T>
"registryLookup"<S>(resourceKey0: $ResourceKey$$Type<$Registry<S>>): $Optional<$HolderLookup$RegistryLookup<S>>
}

export namespace $BootstapContext {
const probejs$$marker: never
}
export abstract class $BootstapContext$$Static<T = any> implements $BootstapContext<T> {
}
}

declare module "net.minecraft.data.DataGenerator" {
import { $WorldVersion$$Type } from "net.minecraft.WorldVersion"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PackOutput, $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $Map } from "java.util.Map"
import { $DataGeneratorExtension } from "net.fabricmc.fabric.impl.datagen.DataGeneratorExtension"
import { $DataGenerator$PackGenerator } from "net.minecraft.data.DataGenerator$PackGenerator"
import { $IModInfo$$Type } from "net.minecraftforge.forgespi.language.IModInfo"
import { $DataProvider$Factory$$Type } from "net.minecraft.data.DataProvider$Factory"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $DataProvider, $DataProvider$$Type } from "net.minecraft.data.DataProvider"
import { $Pair } from "com.mojang.datafixers.util.Pair"

export class $DataGenerator implements $DataGeneratorExtension {
readonly "rootOutputFolder": $Path

constructor(path0: $Path$$Type, worldVersion1: $WorldVersion$$Type, boolean2: boolean)

public "addProvider"<T extends $DataProvider>(boolean0: boolean, factory1: $DataProvider$Factory$$Type<T>): T
public "addProvider"<T extends $DataProvider>(boolean0: boolean, t1: T): T
public "createBuiltinResourcePack"(shouldRun: boolean, packName: $ResourceLocation$$Type, modInfo: $IModInfo$$Type, strictValidation: boolean): $Pair
public "createPack"(name: string, output: $PackOutput$$Type): $DataGenerator$PackGenerator
public "getBuiltinDatapack"(boolean0: boolean, string1: string): $DataGenerator$PackGenerator
public "getPackOutput"(string0: string): $PackOutput
public "getPackOutput"(): $PackOutput
public "getProvidersView"(): $Map<string, $DataProvider>
public "getVanillaPack"(boolean0: boolean): $DataGenerator$PackGenerator
public "run"(): void
get "vanillaPackOutput"(): $PackOutput
set "vanillaPackOutput"(value: $PackOutput$$Type)
get "packOutput"(): $PackOutput
get "providersView"(): $Map<string, $DataProvider>
}
}

declare module "net.minecraft.data.loot.BlockLootSubProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $LootTable$Builder, $LootTable$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $LootTableSubProvider } from "net.minecraft.data.loot.LootTableSubProvider"
import { $Property$$Type } from "net.minecraft.world.level.block.state.properties.Property"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $ConditionJsonProvider$$Type } from "net.fabricmc.fabric.api.resource.conditions.v1.ConditionJsonProvider"
import { $FabricBlockLootTableGenerator } from "net.fabricmc.fabric.api.datagen.v1.loot.FabricBlockLootTableGenerator"
import { $FunctionUserBuilder, $FunctionUserBuilder$$Type } from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import { $NumberProvider$$Type } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Map } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $LootItemCondition$Builder, $LootItemCondition$Builder$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import { $LootPoolEntryContainer$Builder$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import { $ConditionUserBuilder, $ConditionUserBuilder$$Type } from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"

export class $BlockLootSubProvider implements $LootTableSubProvider, $FabricBlockLootTableGenerator {
static readonly "HAS_NO_SHEARS_OR_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_NO_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_SHEARS": $LootItemCondition$Builder
static readonly "HAS_SHEARS_OR_SILK_TOUCH": $LootItemCondition$Builder
static readonly "HAS_SILK_TOUCH": $LootItemCondition$Builder
static readonly "NORMAL_LEAVES_SAPLING_CHANCES": float[]
static readonly "NORMAL_LEAVES_STICK_CHANCES": float[]
readonly "map": $Map<$ResourceLocation, $LootTable$Builder>

public "add"(block0: $Block$$Type, function1: $Function$$Type<$Block$$Type, $LootTable$Builder>): void
public "add"(block0: $Block$$Type, builder1: $LootTable$Builder$$Type): void
public "addNetherVinesDropTable"(block0: $Block$$Type, block1: $Block$$Type): void
public "applyExplosionCondition"<T extends $ConditionUserBuilder<T>>(itemLike0: $ItemLike$$Type, conditionUserBuilder1: $ConditionUserBuilder$$Type<T>): T
public "applyExplosionDecay"<T extends $FunctionUserBuilder<T>>(itemLike0: $ItemLike$$Type, functionUserBuilder1: $FunctionUserBuilder$$Type<T>): T
public "createAttachedStemDrops"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "createBannerDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeHiveDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createBeeNestDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createCandleCakeDrops"(block0: $Block$$Type): $LootTable$Builder
public "createCandleDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createCaveVinesDrop"(block0: $Block$$Type): $LootTable$Builder
public "createCopperOreDrops"(block0: $Block$$Type): $LootTable$Builder
public "createCropDrops"(block0: $Block$$Type, item1: $Item$$Type, item2: $Item$$Type, builder3: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createDoorTable"(block0: $Block$$Type): $LootTable$Builder
public static "createDoublePlantShearsDrop"(block0: $Block$$Type): $LootTable$Builder
public "createDoublePlantWithSeedDrops"(block0: $Block$$Type, block1: $Block$$Type): $LootTable$Builder
public "createGrassDrops"(block0: $Block$$Type): $LootTable$Builder
public "createLapisOreDrops"(block0: $Block$$Type): $LootTable$Builder
public "createLeavesDrops"(block0: $Block$$Type, block1: $Block$$Type, ...float2s: float[]): $LootTable$Builder
public "createMangroveLeavesDrops"(block0: $Block$$Type): $LootTable$Builder
public "createMultifaceBlockDrops"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createMushroomBlockDrop"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): $LootTable$Builder
public "createNameableBlockEntityTable"(block0: $Block$$Type): $LootTable$Builder
public "createOakLeavesDrops"(block0: $Block$$Type, block1: $Block$$Type, ...float2s: float[]): $LootTable$Builder
public "createOreDrop"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "createPetalsDrops"(block0: $Block$$Type): $LootTable$Builder
public "createPotFlowerItemTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createRedstoneOreDrops"(block0: $Block$$Type): $LootTable$Builder
public static "createSelfDropDispatchTable"(block0: $Block$$Type, builder1: $LootItemCondition$Builder$$Type, builder2: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createShearsOnlyDrop"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createShulkerBoxDrop"(block0: $Block$$Type): $LootTable$Builder
public static "createSilkTouchDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public static "createSilkTouchOnlyTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public static "createSilkTouchOrShearsDispatchTable"(block0: $Block$$Type, builder1: $LootPoolEntryContainer$Builder$$Type<any>): $LootTable$Builder
public "createSingleItemTable"(itemLike0: $ItemLike$$Type): $LootTable$Builder
public "createSingleItemTable"(itemLike0: $ItemLike$$Type, numberProvider1: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(block0: $Block$$Type, itemLike1: $ItemLike$$Type, numberProvider2: $NumberProvider$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): $LootTable$Builder
public "createSinglePropConditionTable"<T extends ($Comparable<T> & $StringRepresentable)>(block0: $Block$$Type, property1: $Property$$Type<T>, t2: T): $LootTable$Builder
public "createSlabItemTable"(block0: $Block$$Type): $LootTable$Builder
public "createStemDrops"(block0: $Block$$Type, item1: $Item$$Type): $LootTable$Builder
public "dropOther"(block0: $Block$$Type, itemLike1: $ItemLike$$Type): void
public "dropPottedContents"(block0: $Block$$Type): void
public "dropSelf"(block0: $Block$$Type): void
public "dropWhenSilkTouch"(block0: $Block$$Type): void
public "generate"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $LootTable$Builder$$Type>): void
public "generate"(): void
public "getKnownBlocks"(): $Iterable<$Block>
public static "noDrop"(): $LootTable$Builder
public "otherWhenSilkTouch"(block0: $Block$$Type, block1: $Block$$Type): void
public "withConditions"(...conditions: $ConditionJsonProvider$$Type[]): $BlockLootSubProvider
get "knownBlocks"(): $Iterable<$Block>
}
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$TriFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PropertyDispatch$TriFunction<P1 = any, P2 = any, P3 = any, R = any> {
"apply"(p10: P1, p21: P2, p32: P3): R
}

export namespace $PropertyDispatch$TriFunction {
const probejs$$marker: never
}
export abstract class $PropertyDispatch$TriFunction$$Static<P1 = any, P2 = any, P3 = any, R = any> implements $PropertyDispatch$TriFunction<P1, P2, P3, R> {
}
}

