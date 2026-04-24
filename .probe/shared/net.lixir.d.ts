declare module "net.lixir.vminus.vision.values.conditions.VisionContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockBehaviour$BlockStateBase, $BlockBehaviour$BlockStateBase$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$BlockStateBase"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MobEffect$$Type } from "net.minecraft.world.effect.MobEffect"

export class $VisionContext {
constructor(mobEffect0: $MobEffect$$Type)
constructor(entityType0: $EntityType$$Type<any>)
constructor(entity0: $Entity$$Type)
constructor(block0: $Block$$Type)
constructor(blockStateBase0: $BlockBehaviour$BlockStateBase$$Type)
constructor(itemEntity0: $ItemEntity$$Type)
constructor(itemStack0: $ItemStack$$Type)
constructor(item0: $Item$$Type)

public "getBlock"(): $Block
public "getBlockState"(): $BlockState
public "getBlockStateBase"(): $BlockBehaviour$BlockStateBase
public "getEntity"(): $Entity
public "getEntityType"(): $EntityType<any>
public "getItem"(): $Item
public "getItemStack"(): $ItemStack
public "hasEntity"(): boolean
public "hasItem"(): boolean
public "hasItemStack"(): boolean
get "block"(): $Block
get "blockState"(): $BlockState
get "blockStateBase"(): $BlockBehaviour$BlockStateBase
get "entity"(): $Entity
get "entityType"(): $EntityType<any>
get "item"(): $Item
get "itemStack"(): $ItemStack
}
}

declare module "net.lixir.vminus.api.registry.definition.duck.BlockDefinitionDuck" {
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockDefinition, $BlockDefinition$$Type } from "net.lixir.vminus.api.registry.definition.BlockDefinition"
import { $RegistryDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.RegistryDefinitionDuck"

export interface $BlockDefinitionDuck extends $RegistryDefinitionDuck<$BlockDefinition, $Block> {
"vMinus$setDefinition"(blockDefinition0: $BlockDefinition$$Type): void
}

export namespace $BlockDefinitionDuck {
function of(block0: $Block$$Type): $BlockDefinitionDuck
}
export abstract class $BlockDefinitionDuck$$Static implements $BlockDefinitionDuck {
static "of"(block0: $Block$$Type): $BlockDefinitionDuck
}
}

declare module "net.lixir.vminus.vision.util.VisionEntityVariant" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $VisionEntityVariant extends $Record {
constructor(name: $ResourceLocation$$Type, texture: $ResourceLocation$$Type, weight: integer, replace: boolean)

public "name"(): $ResourceLocation
public "replace"(): boolean
public "texture"(): $ResourceLocation
public "weight"(): integer
}
}

declare module "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck" {
import { $ItemDefinition, $ItemDefinition$$Type } from "net.lixir.vminus.api.registry.definition.ItemDefinition"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $RegistryDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.RegistryDefinitionDuck"

export interface $ItemDefinitionDuck extends $RegistryDefinitionDuck<$ItemDefinition, $Item> {
"vMinus$setDefinition"(itemDefinition0: $ItemDefinition$$Type): void
}

export namespace $ItemDefinitionDuck {
function of(item0: $Item$$Type): $ItemDefinitionDuck
}
export abstract class $ItemDefinitionDuck$$Static implements $ItemDefinitionDuck {
static "of"(item0: $Item$$Type): $ItemDefinitionDuck
}
}

declare module "net.lixir.vminus.api.datagen.block.model.BlockModelType" {
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemModelType } from "net.lixir.vminus.api.datagen.item.model.ItemModelType"
import { $VBlockStateProvider, $VBlockStateProvider$$Type } from "net.lixir.vminus.api.datagen.block.model.provider.VBlockStateProvider"
import { $BlockData } from "net.lixir.vminus.api.datagen.block.BlockData"

export interface $BlockModelType {
"apply"(block0: $Block$$Type, vBlockStateProvider1: $VBlockStateProvider$$Type): void
"getConsumer"(): $BiConsumer<$BlockData, $VBlockStateProvider>
"getItemModelType"(): $ItemModelType
"getName"(): string
"isEmpty"(): boolean
"isUnset"(): boolean
get "consumer"(): $BiConsumer<$BlockData, $VBlockStateProvider>
get "itemModelType"(): $ItemModelType
get "name"(): string
get "empty"(): boolean
get "unset"(): boolean
}

export namespace $BlockModelType {
const probejs$$marker: never
}
export abstract class $BlockModelType$$Static implements $BlockModelType {
}
}

declare module "net.lixir.vminus.api.datagen.item.ItemData" {
import { $ItemDefinition, $ItemDefinition$$Type } from "net.lixir.vminus.api.registry.definition.ItemDefinition"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Record } from "java.lang.Record"

export class $ItemData extends $Record {
constructor(item: $Item$$Type, itemDefinition: $ItemDefinition$$Type)

public "item"(): $Item
public "itemDefinition"(): $ItemDefinition
public static "of"(item0: $Item$$Type): $ItemData
}
}

declare module "net.lixir.vminus.mixins.client.ClientPacketListenerAccessor" {
import { $RandomSource } from "net.minecraft.util.RandomSource"

export interface $ClientPacketListenerAccessor {
"getRandom"(): $RandomSource
get "random"(): $RandomSource
}

export namespace $ClientPacketListenerAccessor {
const probejs$$marker: never
}
export abstract class $ClientPacketListenerAccessor$$Static implements $ClientPacketListenerAccessor {
}
}

declare module "net.lixir.vminus.mixins.creative.CreativeTabModeAccessor" {
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $CreativeTabModeAccessor {
"getDisplayItems"(): $Collection<$ItemStack>
"getSearchItems"(): $Set<$ItemStack>
get "displayItems"(): $Collection<$ItemStack>
get "searchItems"(): $Set<$ItemStack>
}

export namespace $CreativeTabModeAccessor {
const probejs$$marker: never
}
export abstract class $CreativeTabModeAccessor$$Static implements $CreativeTabModeAccessor {
}
}

declare module "net.lixir.vminus.mixins.items.ItemAccessor" {
import { $Rarity } from "net.minecraft.world.item.Rarity"

export interface $ItemAccessor {
"getRarity"(): $Rarity
get "rarity"(): $Rarity
}

export namespace $ItemAccessor {
const probejs$$marker: never
}
export abstract class $ItemAccessor$$Static implements $ItemAccessor {
}
}

declare module "net.lixir.vminus.resources.data.RegistryAccessHolder" {
import { $RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"

export interface $RegistryAccessHolder {
"vMinus$getRegistryAccess"(): $RegistryAccess$Frozen
"vMinus$setRegistryAccess"(frozen0: $RegistryAccess$Frozen$$Type): void
}

export namespace $RegistryAccessHolder {
const probejs$$marker: never
}
export abstract class $RegistryAccessHolder$$Static implements $RegistryAccessHolder {
}
}

declare module "net.lixir.vminus.mixins.items.ItemStackAccessor" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Item } from "net.minecraft.world.item.Item"
import { $Collection } from "java.util.Collection"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $ItemStackAccessor {
"getDelegate"(): $Holder$Reference<$Item>
"getExpandBlockState"(string0: string): $Collection<$Component>
"invokeGetHideFlags"(): integer
"invokeSetCount"(int0: integer): void
get "delegate"(): $Holder$Reference<$Item>
}

export namespace $ItemStackAccessor {
const probejs$$marker: never
}
export abstract class $ItemStackAccessor$$Static implements $ItemStackAccessor {
}
}

declare module "net.lixir.vminus.api.datagen.block.loottable.provider.VBlockLootProvider" {
import { $ConditionJsonProvider$$Type } from "net.fabricmc.fabric.api.resource.conditions.v1.ConditionJsonProvider"
import { $DoublePlantBlock$$Type } from "net.minecraft.world.level.block.DoublePlantBlock"
import { $Optional } from "java.util.Optional"
import { $PinkPetalsBlock$$Type } from "net.minecraft.world.level.block.PinkPetalsBlock"
import { $Class$$Type } from "java.lang.Class"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockLootSubProvider } from "net.minecraft.data.loot.BlockLootSubProvider"

export class $VBlockLootProvider extends $BlockLootSubProvider {
constructor(string0: string)

public "as"<T>(class0: $Class$$Type<T>): $Optional<T>
public "doubleFlower"(doublePlantBlock0: $DoublePlantBlock$$Type): void
public "doublePlantShears"(block0: $Block$$Type): void
public "getModId"(): string
public "pinkPetals"(pinkPetalsBlock0: $PinkPetalsBlock$$Type): void
public "pinkPetalsShears"(pinkPetalsBlock0: $PinkPetalsBlock$$Type): void
public "self"(block0: $Block$$Type): void
public "shears"(block0: $Block$$Type): void
public "withConditions"(...conditions: $ConditionJsonProvider$$Type[]): $BlockLootSubProvider
get "modId"(): string
}
}

declare module "net.lixir.vminus.api.registry.definition.duck.RegistryDefinitionDuck" {
import { $RegistryDefinition, $RegistryDefinition$$Type } from "net.lixir.vminus.api.registry.definition.RegistryDefinition"

export interface $RegistryDefinitionDuck<T extends $RegistryDefinition<T, E> = $RegistryDefinition<T, E>, E = any> {
"vMinus$getDefinition"(): T
"vMinus$setDefinition"(t0: T): void
}

export namespace $RegistryDefinitionDuck {
const probejs$$marker: never
}
export abstract class $RegistryDefinitionDuck$$Static<T extends $RegistryDefinition<T, E> = $RegistryDefinition<T, E>, E = any> implements $RegistryDefinitionDuck<T, E> {
}
}

declare module "net.lixir.vminus.world.entity.VariantEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $VisionEntityVariant, $VisionEntityVariant$$Type } from "net.lixir.vminus.vision.util.VisionEntityVariant"
import { $ArrayList } from "java.util.ArrayList"

export interface $VariantEntity {
"vMinus$getVariantName"(): $ResourceLocation
"vMinus$getVariantTexture"(): $ResourceLocation
"vMinus$setVariant"(resourceLocation0: $ResourceLocation$$Type, resourceLocation1: $ResourceLocation$$Type): void
}

export namespace $VariantEntity {
function getWeightedVisionEntityVariants(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
function setFromWeightedList(livingEntity0: $LivingEntity$$Type): $VisionEntityVariant
}
export abstract class $VariantEntity$$Static implements $VariantEntity {
static "getWeightedVisionEntityVariants"(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
static "setFromWeightedList"(livingEntity0: $LivingEntity$$Type): $VisionEntityVariant
}
}

declare module "net.lixir.vminus.vision.VisionProperty" {
import { $VisionCodec, $VisionCodec$$Type } from "net.lixir.vminus.resources.data.vision.codec.VisionCodec"

export class $VisionProperty<T = any> {
constructor(string0: string, visionCodec1: $VisionCodec$$Type<T>, boolean2: boolean)

public static "create"<T>(string0: string, visionCodec1: $VisionCodec$$Type<T>, boolean2: boolean): $VisionProperty<T>
public static "create"<T>(string0: string, visionCodec1: $VisionCodec$$Type<T>): $VisionProperty<T>
public "getCodec"(): $VisionCodec<T>
public "getId"(): string
public "shouldSyncToClient"(): boolean
get "codec"(): $VisionCodec<T>
get "id"(): string
}
}

declare module "net.lixir.vminus.vision.values.conditions.AbstractVisionCondition" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $VisionContext$$Type } from "net.lixir.vminus.vision.values.conditions.VisionContext"

export class $AbstractVisionCondition {
constructor(boolean0: boolean)

public "isInverted"(): boolean
public static "parseVisionConditions"(jsonObject0: $JsonObject$$Type, jsonObject1: $JsonObject$$Type): $List<$List<$AbstractVisionCondition>>
public "test"(visionContext0: $VisionContext$$Type): boolean
get "inverted"(): boolean
}
}

declare module "net.lixir.vminus.mixins.items.BoatItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoatItemAccessor {
"invokeHasChest"(): boolean
}

export namespace $BoatItemAccessor {
const probejs$$marker: never
}
export abstract class $BoatItemAccessor$$Static implements $BoatItemAccessor {
}
}

declare module "net.lixir.vminus.api.tint.BlockTintFunction" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $BlockTintFunction {
"apply"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
}

export namespace $BlockTintFunction {
const probejs$$marker: never
}
export abstract class $BlockTintFunction$$Static implements $BlockTintFunction {
}
}

declare module "net.lixir.vminus.api.registry.definition.BlockDefinition" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BlockModelType, $BlockModelType$$Type } from "net.lixir.vminus.api.datagen.block.model.BlockModelType"
import { $BlockLootTableType, $BlockLootTableType$$Type } from "net.lixir.vminus.api.datagen.block.loottable.BlockLootTableType"
import { $BlockItem$$Type } from "net.minecraft.world.item.BlockItem"
import { $ItemDefinition, $ItemDefinition$$Type } from "net.lixir.vminus.api.registry.definition.ItemDefinition"
import { $TintType, $TintType$$Type } from "net.lixir.vminus.api.tint.TintType"
import { $RegistryDefinition } from "net.lixir.vminus.api.registry.definition.RegistryDefinition"
import { $Set } from "java.util.Set"
import { $RenderTypeKey, $RenderTypeKey$$Type } from "net.lixir.vminus.api.rendertype.RenderTypeKey"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"

export class $BlockDefinition extends $RegistryDefinition<$BlockDefinition, $Block> {
public static "defaults"(): $BlockDefinition
public "getItemDefinition"(): $ItemDefinition
public "getLootTableType"(): $BlockLootTableType
public "getModelTextureOverride"(): $ResourceLocation
public "getModelTextureSuffix"(): string
public "getModelType"(): $BlockModelType
public "getRenderTypeKey"(): $RenderTypeKey
public "getTags"(): $Set<$TagKey<$Block>>
public "getTintType"(): $TintType
public "itemDefinition"(itemDefinition0: $ItemDefinition$$Type): $BlockDefinition
public "lootTableType"(blockLootTableType0: $BlockLootTableType$$Type): $BlockDefinition
public "merge"(blockDefinition0: $BlockDefinition$$Type): $BlockDefinition
public "modelTextureOverride"(resourceLocation0: $ResourceLocation$$Type): $BlockDefinition
public "modelTextureSuffix"(string0: string): $BlockDefinition
public "modelType"(blockModelType0: $BlockModelType$$Type): $BlockDefinition
public static "of"(block0: $Block$$Type): $BlockDefinition
public static "of"(): $BlockDefinition
public static "of"(blockItem0: $BlockItem$$Type): $BlockDefinition
public "renderType"(renderTypeKey0: $RenderTypeKey$$Type): $BlockDefinition
public "setDefault"(block0: $Block$$Type): $BlockDefinition
public "tags"(...tagKey0s: $TagKey$$Type<$Block$$Type>[]): $BlockDefinition
public "tintType"(tintType0: $TintType$$Type): $BlockDefinition
get "renderTypeKey"(): $RenderTypeKey
set "default"(value: $Block$$Type)
}
}

declare module "net.lixir.vminus.api.datagen.block.model.provider.VBlockStateProvider" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $TintType$$Type } from "net.lixir.vminus.api.tint.TintType"
import { $BlockStateProvider } from "net.minecraftforge.client.model.generators.BlockStateProvider"
import { $Optional } from "java.util.Optional"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $Path$$Type } from "java.nio.file.Path"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export class $VBlockStateProvider extends $BlockStateProvider {
readonly "modId": string

constructor(packOutput0: $PackOutput$$Type, existingFileHelper1: $ExistingFileHelper$$Type, string2: string)

public "air"(block0: $Block$$Type): void
public "allSidedCubeWithItem"(block0: $Block$$Type, string1: string): void
public "as"<T>(class0: $Class$$Type<T>): $Optional<T>
public "axis"(block0: $Block$$Type): void
public "blockItem"(block0: $Block$$Type): void
public "button"(block0: $Block$$Type, string1: string): void
public "carpet"(block0: $Block$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "cross"(block0: $Block$$Type, string1: string, tintType2: $TintType$$Type): void
public "cubeBottomTop"(block0: $Block$$Type): void
public "cubeColumn"(block0: $Block$$Type): void
public "door"(block0: $Block$$Type): void
public "doubleCross"(block0: $Block$$Type, string1: string, tintType2: $TintType$$Type): void
public "fenceBlock"(block0: $Block$$Type, string1: string): void
public "fenceGateBlock"(block0: $Block$$Type, string1: string): void
public "getModId"(): string
public "key"(block0: $Block$$Type): $ResourceLocation
public "lantern"(block0: $Block$$Type): void
public "leaves"(block0: $Block$$Type, string1: string): void
public "name"(block0: $Block$$Type): string
public "pinkPetals"(block0: $Block$$Type): void
public "pressurePlate"(block0: $Block$$Type, string1: string): void
public "registerDirtGrassBlock"(block0: $Block$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "registerTemplateGrassBlock"(block0: $Block$$Type, resourceLocation1: $ResourceLocation$$Type, resourceLocation2: $ResourceLocation$$Type, resourceLocation3: $ResourceLocation$$Type, resourceLocation4: $ResourceLocation$$Type): void
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
public "sign"(block0: $Block$$Type, string1: string): void
public "slab"(block0: $Block$$Type, string1: string, string2: string, resourceLocation3: $ResourceLocation$$Type): void
public "slab"(block0: $Block$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "stairs"(block0: $Block$$Type, string1: string, string2: string, resourceLocation3: $ResourceLocation$$Type): void
public "stairs"(block0: $Block$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "textureFromBlock"(block0: $Block$$Type, string1: string, string2: string): $ResourceLocation
public "torch"(registryObject0: $RegistryObject$$Type<$Block$$Type>): void
public "torch"(block0: $Block$$Type): void
public "trapdoor"(block0: $Block$$Type): void
public "veinBlock"(block0: $Block$$Type): void
public "wall"(block0: $Block$$Type, string1: string, resourceLocation2: $ResourceLocation$$Type): void
public "wall"(block0: $Block$$Type, string1: string, string2: string, resourceLocation3: $ResourceLocation$$Type): void
public "wallTorch"(block0: $Block$$Type, string1: string): void
public "woodBlock"(block0: $Block$$Type, string1: string): void
}
}

declare module "net.lixir.vminus.api.tint.TintType" {
import { $ItemTintFunction } from "net.lixir.vminus.api.tint.ItemTintFunction"
import { $BlockTintFunction } from "net.lixir.vminus.api.tint.BlockTintFunction"

export interface $TintType {
"getBlockTint"(): $BlockTintFunction
"getItemTint"(): $ItemTintFunction
"getName"(): string
"isEmpty"(): boolean
"isUnset"(): boolean
get "blockTint"(): $BlockTintFunction
get "itemTint"(): $ItemTintFunction
get "name"(): string
get "empty"(): boolean
get "unset"(): boolean
}

export namespace $TintType {
const probejs$$marker: never
}
export abstract class $TintType$$Static implements $TintType {
}
}

declare module "net.lixir.vminus.api.datagen.item.model.provider.VItemModelProvider" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $ItemModelProvider } from "net.minecraftforge.client.model.generators.ItemModelProvider"
import { $ItemDefinition$$Type } from "net.lixir.vminus.api.registry.definition.ItemDefinition"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Optional } from "java.util.Optional"
import { $Class$$Type } from "java.lang.Class"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ExistingFileHelper$$Type } from "net.minecraftforge.common.data.ExistingFileHelper"
import { $Path$$Type } from "java.nio.file.Path"
import { $CachedOutput$$Type } from "net.minecraft.data.CachedOutput"

export class $VItemModelProvider extends $ItemModelProvider {
constructor(packOutput0: $PackOutput$$Type, existingFileHelper1: $ExistingFileHelper$$Type, string2: string)

public "as"<T>(class0: $Class$$Type<T>): $Optional<T>
public "basic"(item0: $Item$$Type, itemDefinition1: $ItemDefinition$$Type): void
public "basicNotBlock"(item0: $Item$$Type): void
public "doublePane"(item0: $Item$$Type): void
public "fromBlockParent"(item0: $Item$$Type): void
public "handheld"(item0: $Item$$Type): void
public "pane"(item0: $Item$$Type): void
public static "saveStable"(cachedOutput0: $CachedOutput$$Type, jsonElement1: $JsonElement$$Type, path2: $Path$$Type): $CompletableFuture<any>
}
}

declare module "net.lixir.vminus.api.datagen.item.model.ItemModelType" {
import { $VItemModelProvider$$Type } from "net.lixir.vminus.api.datagen.item.model.provider.VItemModelProvider"
import { $ItemData$$Type } from "net.lixir.vminus.api.datagen.item.ItemData"

export interface $ItemModelType {
"apply"(itemData0: $ItemData$$Type, vItemModelProvider1: $VItemModelProvider$$Type): void
"getName"(): string
"isEmpty"(): boolean
"isUnset"(): boolean
get "name"(): string
get "empty"(): boolean
get "unset"(): boolean
}

export namespace $ItemModelType {
const probejs$$marker: never
}
export abstract class $ItemModelType$$Static implements $ItemModelType {
}
}

declare module "net.lixir.vminus.vision.Vision" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ImmutableMap } from "com.google.common.collect.ImmutableMap"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $VisionContext$$Type } from "net.lixir.vminus.vision.values.conditions.VisionContext"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $VisionEntry$$Type } from "net.lixir.vminus.vision.VisionEntry"
import { $VisionValue } from "net.lixir.vminus.vision.values.VisionValue"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $VisionType$$Type } from "net.lixir.vminus.vision.VisionType"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VisionDuck$$Type } from "net.lixir.vminus.vision.VisionDuck"
import { $VisionProperty$$Type } from "net.lixir.vminus.vision.VisionProperty"

export class $Vision {
static readonly "EMPTY": $Vision

public static "decode"(resourceLocation0: $ResourceLocation$$Type, compoundTag1: $CompoundTag$$Type, visionType2: $VisionType$$Type<any>): void
public "encode"<T>(visionType0: $VisionType$$Type<T>): $CompoundTag
public static "fromEntry"<T>(resourceLocation0: $ResourceLocation$$Type, visionEntry1: $VisionEntry$$Type<T>, visionType2: $VisionType$$Type<any>): $Vision
public static "get"(item0: $Item$$Type): $Vision
public static "get"(visionType0: $VisionType$$Type<any>, resourceLocation1: $ResourceLocation$$Type): $Vision
public static "get"(block0: $Block$$Type): $Vision
public static "get"(visionDuck0: $VisionDuck$$Type): $Vision
public static "get"(blockState0: $BlockState$$Type): $Vision
public static "get"(itemStack0: $ItemStack$$Type): $Vision
public static "get"(entity0: $Entity$$Type): $Vision
public static "get"(entityType0: $EntityType$$Type<any>): $Vision
public static "getOrAddVision"(visionType0: $VisionType$$Type<any>, resourceLocation1: $ResourceLocation$$Type, vision2: $Vision$$Type): $Vision
public static "getValue"<T>(entity0: $Entity$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type, t3: T): T
public static "getValue"<T>(entityType0: $EntityType$$Type<any>, visionProperty1: $VisionProperty$$Type<T>): T
public static "getValue"<T>(entityType0: $EntityType$$Type<any>, visionProperty1: $VisionProperty$$Type<T>, t2: T): T
public static "getValue"<T>(blockState0: $BlockState$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type, t3: T): T
public static "getValue"<T>(entity0: $Entity$$Type, visionProperty1: $VisionProperty$$Type<T>): T
public static "getValue"<T>(entity0: $Entity$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): T
public static "getValue"<T>(entity0: $Entity$$Type, visionProperty1: $VisionProperty$$Type<T>, t2: T): T
public "getValue"<T>(visionProperty0: $VisionProperty$$Type<T>): T
public "getValue"<T>(visionProperty0: $VisionProperty$$Type<T>, visionContext1: $VisionContext$$Type): T
public "getValue"<T>(visionProperty0: $VisionProperty$$Type<T>, visionContext1: $VisionContext$$Type, t2: T): T
public "getValue"<T>(string0: string, visionContext1: $VisionContext$$Type, t2: T): T
public "getValue"<T>(vision0: $Vision$$Type, string1: string): T
public "getValue"<T>(string0: string): T
public static "getValue"<T>(entityType0: $EntityType$$Type<any>, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type, t3: T): T
public static "getValue"<T>(item0: $Item$$Type, visionProperty1: $VisionProperty$$Type<T>, t2: T): T
public static "getValue"<T>(item0: $Item$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): T
public static "getValue"<T>(item0: $Item$$Type, visionProperty1: $VisionProperty$$Type<T>): T
public static "getValue"<T>(entityType0: $EntityType$$Type<any>, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): T
public static "getValue"<T>(itemStack0: $ItemStack$$Type, visionProperty1: $VisionProperty$$Type<T>, t2: T): T
public static "getValue"<T>(itemStack0: $ItemStack$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): T
public static "getValue"<T>(itemStack0: $ItemStack$$Type, visionProperty1: $VisionProperty$$Type<T>): T
public static "getValue"<T>(item0: $Item$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type, t3: T): T
public static "getValue"<T>(block0: $Block$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): T
public static "getValue"<T>(block0: $Block$$Type, visionProperty1: $VisionProperty$$Type<T>, t2: T): T
public static "getValue"<T>(block0: $Block$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type, t3: T): T
public static "getValue"<T>(blockState0: $BlockState$$Type, visionProperty1: $VisionProperty$$Type<T>): T
public static "getValue"<T>(blockState0: $BlockState$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): T
public static "getValue"<T>(blockState0: $BlockState$$Type, visionProperty1: $VisionProperty$$Type<T>, t2: T): T
public static "getValue"<T>(block0: $Block$$Type, visionProperty1: $VisionProperty$$Type<T>): T
public static "getValue"<T>(itemStack0: $ItemStack$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type, t3: T): T
public "getValues"<T>(visionProperty0: $VisionProperty$$Type<T>): $List<T>
public "getValues"(): $ImmutableMap<string, $VisionValue<any>[]>
public "getValues"<T>(string0: string): $List<T>
public "getValues"<T>(string0: string, visionContext1: $VisionContext$$Type): $List<T>
public "getValues"<T>(visionProperty0: $VisionProperty$$Type<T>, visionContext1: $VisionContext$$Type): $List<T>
public static "getValues"<T>(blockState0: $BlockState$$Type, visionProperty1: $VisionProperty$$Type<T>): $List<T>
public static "getValues"<T>(block0: $Block$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): $List<T>
public static "getValues"<T>(item0: $Item$$Type, visionProperty1: $VisionProperty$$Type<T>): $List<T>
public static "getValues"<T>(itemStack0: $ItemStack$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): $List<T>
public static "getValues"<T>(itemStack0: $ItemStack$$Type, visionProperty1: $VisionProperty$$Type<T>): $List<T>
public static "getValues"<T>(item0: $Item$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): $List<T>
public static "getValues"<T>(block0: $Block$$Type, visionProperty1: $VisionProperty$$Type<T>): $List<T>
public static "getValues"<T>(entityType0: $EntityType$$Type<any>, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): $List<T>
public static "getValues"<T>(entityType0: $EntityType$$Type<any>, visionProperty1: $VisionProperty$$Type<T>): $List<T>
public static "getValues"<T>(blockState0: $BlockState$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): $List<T>
public static "getValues"<T>(entity0: $Entity$$Type, visionProperty1: $VisionProperty$$Type<T>): $List<T>
public static "getValues"<T>(entity0: $Entity$$Type, visionProperty1: $VisionProperty$$Type<T>, visionContext2: $VisionContext$$Type): $List<T>
public static "resetVisions"(): void
get "values"(): $ImmutableMap<string, $VisionValue<any>[]>
}
}

declare module "net.lixir.vminus.api.registry.definition.duck.EntityDefinitionDuck" {
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $EntityDefinition, $EntityDefinition$$Type } from "net.lixir.vminus.api.registry.definition.EntityDefinition"
import { $RegistryDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.RegistryDefinitionDuck"

export interface $EntityDefinitionDuck extends $RegistryDefinitionDuck<$EntityDefinition, $EntityType<any>> {
"vMinus$setDefinition"(entityDefinition0: $EntityDefinition$$Type): void
}

export namespace $EntityDefinitionDuck {
function of(entityType0: $EntityType$$Type<any>): $EntityDefinitionDuck
}
export abstract class $EntityDefinitionDuck$$Static implements $EntityDefinitionDuck {
static "of"(entityType0: $EntityType$$Type<any>): $EntityDefinitionDuck
}
}

declare module "net.lixir.vminus.mixins.items.DiggerItemAccessor" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $DiggerItemAccessor {
"getBlocks"(): $TagKey<$Block>
"getSpeed"(): float
get "blocks"(): $TagKey<$Block>
get "speed"(): float
}

export namespace $DiggerItemAccessor {
const probejs$$marker: never
}
export abstract class $DiggerItemAccessor$$Static implements $DiggerItemAccessor {
}
}

declare module "net.lixir.vminus.mixins.server.SimpleJsonResourceReloadListenerAccessor" {
import { $Gson } from "com.google.gson.Gson"

export interface $SimpleJsonResourceReloadListenerAccessor {
"getGson"(): $Gson
get "gson"(): $Gson
}

export namespace $SimpleJsonResourceReloadListenerAccessor {
const probejs$$marker: never
}
export abstract class $SimpleJsonResourceReloadListenerAccessor$$Static implements $SimpleJsonResourceReloadListenerAccessor {
}
}

declare module "net.lixir.vminus.api.rendertype.RenderTypeKey" {
import { $Record } from "java.lang.Record"

export class $RenderTypeKey extends $Record {
static readonly "CUTOUT": $RenderTypeKey
static readonly "CUTOUT_MIPPED": $RenderTypeKey
static readonly "SOLID": $RenderTypeKey
static readonly "TRANSLUCENT": $RenderTypeKey
static readonly "UNSET": $RenderTypeKey

constructor(key: string)

public "isUnset"(): boolean
public "key"(): string
get "unset"(): boolean
}
}

declare module "net.lixir.vminus.vision.VisionDuck" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $VisionType } from "net.lixir.vminus.vision.VisionType"

export interface $VisionDuck {
"vMinus$getVisionId"(): $ResourceLocation
"vMinus$getVisionType"(): $VisionType<any>
"vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
"vMinus$update"(): void
}

export namespace $VisionDuck {
const probejs$$marker: never
}
export abstract class $VisionDuck$$Static implements $VisionDuck {
}
}

declare module "net.lixir.vminus.api.registry.definition.EntityDefinition" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $RegistryDefinition } from "net.lixir.vminus.api.registry.definition.RegistryDefinition"
import { $Set } from "java.util.Set"

export class $EntityDefinition extends $RegistryDefinition<$EntityDefinition, $EntityType<any>> {
static readonly "EMPTY": $EntityDefinition

public "getTags"(): $Set<$TagKey<$EntityType<any>>>
public "merge"(entityDefinition0: $EntityDefinition$$Type): $EntityDefinition
public static "of"(): $EntityDefinition
public "tag"(...tagKey0s: $TagKey$$Type<$EntityType$$Type<any>>[]): $EntityDefinition
get "tags"(): $Set<$TagKey<$EntityType<any>>>
}
}

declare module "net.lixir.vminus.mixins.world.inventory.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {
"getSlot"(): integer
get "slot"(): integer
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export abstract class $SlotAccessor$$Static implements $SlotAccessor {
}
}

declare module "net.lixir.vminus.world.item.IMaxDurationGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMaxDurationGetter {
"vminus$getMaxDuration"(): integer
}

export namespace $IMaxDurationGetter {
const probejs$$marker: never
}
export abstract class $IMaxDurationGetter$$Static implements $IMaxDurationGetter {
}
}

declare module "net.lixir.vminus.api.registry.definition.RegistryDefinition" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LangKey, $LangKey$$Type } from "net.lixir.vminus.api.datagen.lang.LangKey"

export class $RegistryDefinition<E extends $RegistryDefinition<E, T> = $RegistryDefinition<E, T>, T = any> {
static readonly "UNSET_RESOURCE_LOCATION": $ResourceLocation

constructor()

public "getLangKey"(): $LangKey
public static "isDatagen"(): boolean
public "isDefaulted"(): boolean
public "isEmpty"(): boolean
public "langKey"(langKey0: $LangKey$$Type): E
public "langKey"(string0: string): E
public "merge"(e0: E): E
public "setDefault"(t0: T): E
get "defaulted"(): boolean
get "empty"(): boolean
set "default"(value: T)
}
}

declare module "net.lixir.vminus.vision.VisionType" {
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $Vision, $Vision$$Type } from "net.lixir.vminus.vision.Vision"

export class $VisionType<T = any> {
constructor(string0: string, registry1: $Registry$$Type<T>)
constructor(string0: string, string1: string, registry2: $Registry$$Type<T>)

public "applyVision"<E>(e0: E, resourceLocation1: $ResourceLocation$$Type): void
public "getDirectory"(): string
public "getId"(): string
public "getMultiList"(): string
public "getRegistry"(): $Registry<T>
public "getVisionSetter"(): $BiConsumer<any, $ResourceLocation>
public "getVisions"(): $Map<$ResourceLocation, $Vision>
public "putVision"(resourceLocation0: $ResourceLocation$$Type, vision1: $Vision$$Type): void
public static "resetAllVisionTypes"(): void
public "resetVisionTypes"(): void
get "directory"(): string
get "id"(): string
get "multiList"(): string
get "registry"(): $Registry<T>
get "visionSetter"(): $BiConsumer<any, $ResourceLocation>
get "visions"(): $Map<$ResourceLocation, $Vision>
}
}

declare module "net.lixir.vminus.api.datagen.lang.LangKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LangKey {
static readonly "NONE": $LangKey
static readonly "UNSET": $LangKey

public "getKey"(): string
public "isEmpty"(): boolean
public "isUnset"(): boolean
public static "of"(string0: string): $LangKey
get "key"(): string
get "empty"(): boolean
get "unset"(): boolean
}
}

declare module "net.lixir.vminus.mixins.client.RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {
"getName"(): string
get "name"(): string
}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
export abstract class $RenderStateShardAccessor$$Static implements $RenderStateShardAccessor {
}
}

declare module "net.lixir.vminus.resources.data.vision.codec.VisionCodec" {
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $Class } from "java.lang.Class"
import { $VisionValue } from "net.lixir.vminus.vision.values.VisionValue"

export class $VisionCodec<V = any> {
public "decode"(jsonObject0: $JsonObject$$Type, string1: string): $List<$VisionValue<V>>
public "encode"(v0: V): $JsonObject
public static "encodeInteger"(integer0: integer): $JsonObject
public "getClassType"(): $Class<V>
get "classType"(): $Class<V>
}
}

declare module "net.lixir.vminus.api.datagen.block.BlockData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $TintType } from "net.lixir.vminus.api.tint.TintType"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Record } from "java.lang.Record"
import { $BlockDefinition, $BlockDefinition$$Type } from "net.lixir.vminus.api.registry.definition.BlockDefinition"

export class $BlockData extends $Record {
constructor(block: $Block$$Type, blockDefinition: $BlockDefinition$$Type)

public "block"(): $Block
public "blockDefinition"(): $BlockDefinition
public "modelTextureOverride"(): $ResourceLocation
public "modelTextureSuffix"(): string
public static "of"(block0: $Block$$Type): $BlockData
public "renderType"(): string
public "tintType"(): $TintType
}
}

declare module "net.lixir.vminus.api.datagen.block.loottable.BlockLootTableType" {
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $BlockData, $BlockData$$Type } from "net.lixir.vminus.api.datagen.block.BlockData"
import { $VBlockLootProvider, $VBlockLootProvider$$Type } from "net.lixir.vminus.api.datagen.block.loottable.provider.VBlockLootProvider"

export interface $BlockLootTableType {
"apply"(blockData0: $BlockData$$Type, vBlockLootProvider1: $VBlockLootProvider$$Type): void
"getConsumer"(): $BiConsumer<$BlockData, $VBlockLootProvider>
"getName"(): string
"isEmpty"(): boolean
"isUnset"(): boolean
get "consumer"(): $BiConsumer<$BlockData, $VBlockLootProvider>
get "name"(): string
get "empty"(): boolean
get "unset"(): boolean
}

export namespace $BlockLootTableType {
const probejs$$marker: never
}
export abstract class $BlockLootTableType$$Static implements $BlockLootTableType {
}
}

declare module "net.lixir.vminus.vision.values.VisionValue" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $List$$Type } from "java.util.List"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $VisionContext$$Type } from "net.lixir.vminus.vision.values.conditions.VisionContext"
import { $AbstractVisionCondition, $AbstractVisionCondition$$Type } from "net.lixir.vminus.vision.values.conditions.AbstractVisionCondition"

export class $VisionValue<T = any> {
static "DEFAULT_PRIORITY": short
static "MAX_PRIORITY": short
static "MIN_PRIORITY": short
static "PRIORITY_TAG": string

constructor(t0: T, list1: $List$$Type<$List$$Type<$AbstractVisionCondition$$Type>>)
constructor(t0: T, list1: $List$$Type<$List$$Type<$AbstractVisionCondition$$Type>>, short2: short)

public static "create"<T>(t0: T, jsonObject1: $JsonObject$$Type, jsonObject2: $JsonObject$$Type, string3: string): $VisionValue<T>
public "getConditions"(): $ImmutableList<$ImmutableList<$AbstractVisionCondition>>
public "getPriority"(): short
public "getValue"(): T
public "isConstant"(): boolean
public "testConditions"(visionContext0: $VisionContext$$Type): boolean
get "conditions"(): $ImmutableList<$ImmutableList<$AbstractVisionCondition>>
get "priority"(): short
get "value"(): T
get "constant"(): boolean
}
}

declare module "net.lixir.vminus.mixins.client.sounds.SoundBufferLibraryAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $SoundBuffer } from "com.mojang.blaze3d.audio.SoundBuffer"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Map } from "java.util.Map"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"

export interface $SoundBufferLibraryAccessor {
"detour$getResourceProvider"(): $ResourceProvider
"getCache"(): $Map<$ResourceLocation, $CompletableFuture<$SoundBuffer>>
get "cache"(): $Map<$ResourceLocation, $CompletableFuture<$SoundBuffer>>
}

export namespace $SoundBufferLibraryAccessor {
const probejs$$marker: never
}
export abstract class $SoundBufferLibraryAccessor$$Static implements $SoundBufferLibraryAccessor {
}
}

declare module "net.lixir.vminus.util.ISpeedGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpeedGetter {
"vMinus$getSpeed"(): double
}

export namespace $ISpeedGetter {
const probejs$$marker: never
}
export abstract class $ISpeedGetter$$Static implements $ISpeedGetter {
}
}

declare module "net.lixir.vminus.api.tint.ItemTintFunction" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemTintFunction {
"apply"(itemStack0: $ItemStack$$Type, integer1: integer): integer
}

export namespace $ItemTintFunction {
const probejs$$marker: never
}
export abstract class $ItemTintFunction$$Static implements $ItemTintFunction {
}
}

declare module "net.lixir.vminus.api.registry.definition.ItemDefinition" {
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $TintType, $TintType$$Type } from "net.lixir.vminus.api.tint.TintType"
import { $RegistryDefinition } from "net.lixir.vminus.api.registry.definition.RegistryDefinition"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set } from "java.util.Set"
import { $ItemModelType, $ItemModelType$$Type } from "net.lixir.vminus.api.datagen.item.model.ItemModelType"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $BlockDefinition$$Type } from "net.lixir.vminus.api.registry.definition.BlockDefinition"

export class $ItemDefinition extends $RegistryDefinition<$ItemDefinition, $Item> {
static readonly "EMPTY": $ItemDefinition

public static "defaults"(): $ItemDefinition
public "getModelType"(): $ItemModelType
public "getTags"(): $Set<$TagKey<$Item>>
public "getTintType"(): $TintType
public "isFromBlock"(): boolean
public "merge"(blockDefinition0: $BlockDefinition$$Type): $ItemDefinition
public "merge"(itemDefinition0: $ItemDefinition$$Type): $ItemDefinition
public "modelType"(itemModelType0: $ItemModelType$$Type): $ItemDefinition
public static "of"(item0: $Item$$Type): $ItemDefinition
public static "of"(): $ItemDefinition
public static "of"(blockDefinition0: $BlockDefinition$$Type): $ItemDefinition
public static "of"(block0: $Block$$Type): $ItemDefinition
public "setDefault"(item0: $Item$$Type): $ItemDefinition
public "tags"(...tagKey0s: $TagKey$$Type<$Item$$Type>[]): $ItemDefinition
public "tint"(tintType0: $TintType$$Type): $ItemDefinition
get "tintType"(): $TintType
get "fromBlock"(): boolean
set "default"(value: $Item$$Type)
}
}

declare module "net.lixir.vminus.vision.VisionEntry" {
import { $List, $List$$Type } from "java.util.List"
import { $HashMap } from "java.util.HashMap"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $VisionValue, $VisionValue$$Type } from "net.lixir.vminus.vision.values.VisionValue"
import { $ArrayList$$Type } from "java.util.ArrayList"

export class $VisionEntry<T = any> {
constructor()

public "addEntries"(arrayList0: $ArrayList$$Type<string>): void
public "addValues"(string0: string, list1: $List$$Type<$VisionValue$$Type<any>>): void
public "getEntries"(): $List<string>
public "getValues"(): $HashMap<string, $List<$VisionValue<any>>>
public "isEmpty"(): boolean
public "merge"(visionEntry0: $VisionEntry$$Type<T>): void
public static "visionApplies"(object0: any, string1: string, list2: $List$$Type<string>, iContext3: $ICondition$IContext$$Type): boolean
get "entries"(): $List<string>
get "values"(): $HashMap<string, $List<$VisionValue<any>>>
get "empty"(): boolean
}
}

declare module "net.lixir.vminus.mixins.data.recipe.RecipeManagerAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Map } from "java.util.Map"
import { $RecipeType, $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor {
"detour$getRecipes"(): $Map<$RecipeType<any>, $Map<$ResourceLocation, $Recipe<any>>>
"vminus$getByType"<C extends $Container, T extends $Recipe<C>>(recipeType0: $RecipeType$$Type<T>): $Map<$ResourceLocation, T>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export abstract class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {
}
}

