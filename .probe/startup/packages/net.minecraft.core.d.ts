declare module "net.minecraft.core.Holder$Kind" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Holder$Kind$$Type = ($Holder$Kind | ("reference" | "direct"));
}

declare module "net.minecraft.core.Direction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Direction$$Type = ($Direction | ("down" | "up" | "north" | "south" | "west" | "east"));
}

declare module "net.minecraft.core.HolderSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderSet$$Type<T = any> = ($HolderSet<T>);
}

declare module "net.minecraft.core.BlockPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPos$$Type = ($BlockPos | [x: integer, y: integer, z: integer]);
}

declare module "net.minecraft.core.AxisCycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AxisCycle$$Type = ($AxisCycle | ("none" | "forward" | "backward"));
}

declare module "net.minecraft.core.HolderGetter$Provider" {
import { $Registry } from "net.minecraft.core.Registry"
import { $Optional$$Type } from "java.util.Optional"
import { $HolderGetter$$Type } from "net.minecraft.core.HolderGetter"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderGetter$Provider$$Type = ($HolderGetter$Provider | ((arg0: $ResourceKey<$Registry<T>>) => $Optional$$Type<$HolderGetter$$Type<T>>));
}

declare module "net.minecraft.core.particles.DustParticleOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DustParticleOptions$$Type = ($DustParticleOptions);
}

declare module "net.minecraft.core.HolderSet$Direct" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderSet$Direct$$Type<T = any> = ($HolderSet$Direct<T>);
}

declare module "net.minecraft.core.Holder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Holder$$Type<T = any> = ($Holder<T> | Special.LiteralOf<T>);
}

declare module "net.minecraft.core.RegistryAccess$Frozen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryAccess$Frozen$$Type = ($RegistryAccess$Frozen);
}

declare module "net.minecraft.core.MappedRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MappedRegistry$$Type<T = any> = ($MappedRegistry<T>);
}

declare module "net.minecraft.core.cauldron.CauldronInteraction" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $InteractionResult$$Type } from "net.minecraft.world.InteractionResult"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"
import { $Player } from "net.minecraft.world.entity.player.Player"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CauldronInteraction$$Type = ($CauldronInteraction | ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $ItemStack) => $InteractionResult$$Type));
}

declare module "net.minecraft.core.RegistryAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryAccess$$Type = ($RegistryAccess);
}

declare module "net.minecraft.core.Direction$Axis" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Direction$Axis$$Type = ($Direction$Axis | ("x" | "y" | "z"));
}

declare module "net.minecraft.core.HolderLookup$RegistryLookup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderLookup$RegistryLookup$$Type<T = any> = ($HolderLookup$RegistryLookup<T>);
}

declare module "net.minecraft.core.IdMap" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IdMap$$Type<T = any> = ($IdMap<T>);
}

declare module "net.minecraft.core.particles.DustParticleOptionsBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DustParticleOptionsBase$$Type = ($DustParticleOptionsBase);
}

declare module "net.minecraft.core.particles.SimpleParticleType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleParticleType$$Type = ($SimpleParticleType);
}

declare module "net.minecraft.core.Vec3i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Vec3i$$Type = ($Vec3i | [x: integer, y: integer, z: integer]);
}

declare module "net.minecraft.core.BlockPos$MutableBlockPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPos$MutableBlockPos$$Type = ($BlockPos$MutableBlockPos);
}

declare module "net.minecraft.core.HolderOwner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderOwner$$Type<T = any> = ($HolderOwner<T>);
}

declare module "net.minecraft.core.HolderGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderGetter$$Type<T = any> = ($HolderGetter<T>);
}

declare module "net.minecraft.core.Registry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $HolderSet$Named } from "net.minecraft.core.HolderSet$Named"
import { $IdMap } from "net.minecraft.core.IdMap"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $HolderLookup$RegistryLookup } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $HolderOwner } from "net.minecraft.core.HolderOwner"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Map$$Type } from "java.util.Map"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Iterator } from "java.util.Iterator"
import { $Set } from "java.util.Set"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Lifecycle } from "com.mojang.serialization.Lifecycle"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Optional } from "java.util.Optional"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Spliterator } from "java.util.Spliterator"

export interface $Registry<T = any> extends $Keyable, $IdMap<T> {
"asHolderIdMap"(): $IdMap<$Holder<T>>
"asLookup"(): $HolderLookup$RegistryLookup<T>
"asTagAddingLookup"(): $HolderLookup$RegistryLookup<T>
"bindTags"(map0: $Map$$Type<$TagKey$$Type<T>, $List$$Type<$Holder$$Type<T>>>): void
"byId"(int0: integer): T
"byIdOrThrow"(int0: integer): T
"byNameCodec"(): $Codec<T>
"containsKey"(resourceLocation0: $ResourceLocation$$Type): boolean
"containsKey"(resourceKey0: $ResourceKey$$Type<T>): boolean
"createIntrusiveHolder"(t0: T): $Holder$Reference<T>
"entrySet"(): $Set<$Map$Entry<$ResourceKey<T>, T>>
"forEach"(consumer0: $Consumer$$Type<T>): void
"freeze"(): $Registry<T>
"get"(resourceLocation0: $ResourceLocation$$Type): T
"get"(resourceKey0: $ResourceKey$$Type<T>): T
"getHolder"(int0: integer): $Optional<$Holder$Reference<T>>
"getHolder"(resourceKey0: $ResourceKey$$Type<T>): $Optional<$Holder$Reference<T>>
"getHolderOrThrow"(resourceKey0: $ResourceKey$$Type<T>): $Holder$Reference<T>
"getId"(t0: T): integer
"getKey"(t0: T): $ResourceLocation
"getOptional"(resourceLocation0: $ResourceLocation$$Type): $Optional<T>
"getOptional"(resourceKey0: $ResourceKey$$Type<T>): $Optional<T>
"getOrCreateTag"(tagKey0: $TagKey$$Type<T>): $HolderSet$Named<T>
"getOrThrow"(resourceKey0: $ResourceKey$$Type<T>): T
"getRandom"(randomSource0: $RandomSource$$Type): $Optional<$Holder$Reference<T>>
"getResourceKey"(t0: T): $Optional<$ResourceKey<T>>
"getTag"(tagKey0: $TagKey$$Type<T>): $Optional<$HolderSet$Named<T>>
"getTagNames"(): $Stream<$TagKey<T>>
"getTagOrEmpty"(tagKey0: $TagKey$$Type<T>): $Iterable<$Holder<T>>
"getTags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
"holderByNameCodec"(): $Codec<$Holder<T>>
"holderOwner"(): $HolderOwner<T>
"holders"(): $Stream<$Holder$Reference<T>>
"iterator"(): $Iterator<T>
"key"(): $ResourceKey<$Registry<T>>
"keySet"(): $Set<$ResourceLocation>
"keys"<U>(dynamicOps0: $DynamicOps$$Type<U>): $Stream<U>
"lifecycle"(t0: T): $Lifecycle
"registryKeySet"(): $Set<$ResourceKey<T>>
"registryLifecycle"(): $Lifecycle
"resetTags"(): void
"size"(): integer
"spliterator"(): $Spliterator<T>
"stream"(): $Stream<T>
"wrapAsHolder"(t0: T): $Holder<T>
[Symbol.iterator](): IterableIterator<T>;
get "tagNames"(): $Stream<$TagKey<T>>
get "tags"(): $Stream<$Pair<$TagKey<T>, $HolderSet$Named<T>>>
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.Root
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.RootTag
}

export namespace $Registry {
function forStrings(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
function register<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
function register<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
function registerForHolder<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
function registerMapping<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
export abstract class $Registry$$Static<T = any> implements $Registry<T> {
static "forStrings"(supplier0: $Supplier$$Type<$Stream<string>>): $Keyable
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceLocation1: $ResourceLocation$$Type, t2: T): T
static "register"<V, T extends V>(registry0: $Registry$$Type<V>, resourceKey1: $ResourceKey$$Type<V>, t2: T): T
static "register"<T>(registry0: $Registry$$Type<T>, string1: string, t2: T): T
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceKey1: $ResourceKey$$Type<T>, t2: T): $Holder$Reference<T>
static "registerForHolder"<T>(registry0: $Registry$$Type<T>, resourceLocation1: $ResourceLocation$$Type, t2: T): $Holder$Reference<T>
static "registerMapping"<V, T extends V>(registry0: $Registry$$Type<V>, int1: integer, string2: string, t3: T): T
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Registry$$Type<T = any> = ($Registry<T> | ("minecraft:worldgen/template_pool" | "minecraft:custom_stat" | "apoli:fluid_condition" | "minecraft:worldgen/structure" | "minecraft:worldgen/material_rule" | "forge:biome_modifier" | "minecraft:worldgen/structure_type" | "lithostitched:processor_condition_type" | "minecraft:position_source_type" | "minecraft:height_provider_type" | "corgilib:condition" | "forge:global_loot_modifier_serializers" | "apoli:configured_biome_condition" | "minecraft:loot_condition_type" | "minecraft:recipe_serializer" | "minecraft:banner_pattern" | "minecraft:frog_variant" | "minecraft:worldgen/feature_size_type" | "apoli:configured_damage_condition" | "minecraft:point_of_interest_type" | "minecraft:loot_pool_entry_type" | "minecraft:worldgen/block_state_provider_type" | "minecraft:worldgen/chunk_generator" | "corgilib:blending_function" | "minecraft:trim_pattern" | "minecraft:worldgen/density_function" | "minecraft:loot_function_type" | "minecraft:loot_score_provider_type" | "minecraft:worldgen/tree_decorator_type" | "minecraft:schedule" | "minecraft:worldgen/material_condition" | "minecraft:villager_profession" | "minecraft:potion" | "apoli:configured_block_action" | "apoli:block_action" | "apoli:configured_modifier" | "minecraft:recipe_type" | "minecraft:worldgen/feature" | "corgilib:villager_trades_item_listing" | "minecraft:cat_variant" | "minecraft:pos_rule_test" | "apoli:configured_bientity_action" | "apoli:biome_condition" | "minecraft:loot_nbt_provider_type" | "minecraft:worldgen/world_preset" | "minecraft:dimension" | "minecraft:chat_type" | "lionfishapi:modded_biome_slices" | "minecraft:dimension_type" | "minecraft:worldgen/placement_modifier_type" | "minecraft:worldgen/biome" | "minecraft:worldgen/structure_piece" | "minecraft:particle_type" | "minecraft:game_event" | "forge:structure_modifier" | "minecraft:worldgen/root_placer_type" | "apoli:global_power_set" | "minecraft:painting_variant" | "minecraft:worldgen/placed_feature" | "minecraft:block" | "apoli:item_condition" | "apoli:configured_entity_condition" | "minecraft:worldgen/flat_level_generator_preset" | "minecraft:rule_test" | "slashblade:named_blades" | "apoli:configured_fluid_condition" | "lithostitched:modifier_type" | "lithostitched:modifier_predicate_type" | "apoli:configured_item_action" | "minecraft:worldgen/configured_carver" | "slashblade:entity_drop" | "minecraft:worldgen/noise" | "minecraft:command_argument_type" | "minecraft:trim_material" | "minecraft:item" | "minecraft:block_entity_type" | "minecraft:worldgen/foliage_placer_type" | "minecraft:stat_type" | "minecraft:worldgen/configured_feature" | "apoli:block_condition" | "minecraft:worldgen/multi_noise_biome_source_parameter_list" | "minecraft:attribute" | "minecraft:rule_block_entity_modifier" | "minecraft:worldgen/density_function_type" | "minecraft:fluid" | "apoli:item_action" | "minecraft:worldgen/structure_pool_element" | "minecraft:activity" | "apoli:bientity_action" | "minecraft:damage_type" | "minecraft:instrument" | "minecraft:decorated_pot_patterns" | "apoli:power_factory" | "apoli:entity_action" | "minecraft:mob_effect" | "lithostitched:worldgen_modifier" | "apoli:entity_condition" | "minecraft:worldgen/processor_list" | "minecraft:float_provider_type" | "minecraft:chunk_status" | "minecraft:enchantment" | "lithostitched:placement_condition_type" | "minecraft:worldgen/structure_processor" | "apoli:configured_item_condition" | "minecraft:entity_type" | "apoli:configured_block_condition" | "moonlight:soft_fluids" | "minecraft:int_provider_type" | "apoli:configured_bientity_condition" | "minecraft:worldgen/structure_placement" | "minecraft:worldgen/trunk_placer_type" | "minecraft:menu" | "minecraft:creative_mode_tab" | "minecraft:worldgen/structure_set" | "apoli:configured_entity_action" | "apoli:configured_power" | "minecraft:worldgen/carver" | "minecraft:worldgen/noise_settings" | "minecraft:loot_number_provider_type" | "minecraft:sound_event" | "minecraft:worldgen/biome_source" | "minecraft:villager_type" | "forge:fluid_type" | "minecraft:block_predicate_type" | "forge:entity_data_serializers" | "apoli:modifier" | "minecraft:sensor_type" | "apoli:bientity_condition" | "minecraft:memory_module_type" | "apoli:damage_condition" | "irons_spellbooks:upgrade_orb_type" | "moonlight:map_markers"));
}

declare module "net.minecraft.core.Direction$Plane" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Direction$Plane$$Type = ($Direction$Plane | ("horizontal" | "vertical"));
}

declare module "net.minecraft.core.particles.ParticleType" {
import { $ParticleOptions$Deserializer, $ParticleOptions$Deserializer$$Type } from "net.minecraft.core.particles.ParticleOptions$Deserializer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"

export class $ParticleType<T extends $ParticleOptions = $ParticleOptions> {
constructor(boolean0: boolean, deserializer1: $ParticleOptions$Deserializer$$Type<T>)

public "codec"(): $Codec<T>
public "getDeserializer"(): $ParticleOptions$Deserializer<T>
public "getOverrideLimiter"(): boolean
get "deserializer"(): $ParticleOptions$Deserializer<T>
get "overrideLimiter"(): boolean
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Literal": Special.ParticleType
/** This field is a type stub generated by ProbeJS and shall not be used in any sense. */
"probejsInternal$$Tag": Special.ParticleTypeTag
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleType$$Type<T extends $ParticleOptions = $ParticleOptions> = ($ParticleType<T> | Special.ParticleType);
}

declare module "net.minecraft.core.Holder$Reference$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Holder$Reference$Type$$Type = ($Holder$Reference$Type | ("stand_alone" | "intrusive"));
}

declare module "net.minecraft.core.HolderSet$ListBacked" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderSet$ListBacked$$Type<T = any> = ($HolderSet$ListBacked<T>);
}

declare module "net.minecraft.core.dispenser.DispenseItemBehavior" {
import { $BlockSource } from "net.minecraft.core.BlockSource"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DispenseItemBehavior$$Type = ($DispenseItemBehavior | ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack$$Type));
}

declare module "net.minecraft.core.HolderLookup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderLookup$$Type<T = any> = ($HolderLookup<T>);
}

declare module "net.minecraft.core.Rotations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Rotations$$Type = ($Rotations);
}

declare module "net.minecraft.core.Direction8" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Direction8$$Type = ($Direction8 | ("north" | "north_east" | "east" | "south_east" | "south" | "south_west" | "west" | "north_west"));
}

declare module "net.minecraft.core.Direction$AxisDirection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Direction$AxisDirection$$Type = ($Direction$AxisDirection | ("positive" | "negative"));
}

declare module "net.minecraft.core.IdMapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IdMapper$$Type<T = any> = ($IdMapper<T>);
}

declare module "net.minecraft.core.FrontAndTop" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FrontAndTop$$Type = ($FrontAndTop | ("down_east" | "down_north" | "down_south" | "down_west" | "up_east" | "up_north" | "up_south" | "up_west" | "west_up" | "east_up" | "north_up" | "south_up"));
}

declare module "net.minecraft.core.Position" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Position$$Type = ($Position);
}

declare module "net.minecraft.core.particles.ParticleOptions$Deserializer" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleOptions$Deserializer$$Type<T extends $ParticleOptions = $ParticleOptions> = ($ParticleOptions$Deserializer<T>);
}

declare module "net.minecraft.core.HolderSet$Named" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderSet$Named$$Type<T = any> = ($HolderSet$Named<T>);
}

declare module "net.minecraft.core.particles.ParticleGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleGroup$$Type = ($ParticleGroup);
}

declare module "net.minecraft.core.LayeredRegistryAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LayeredRegistryAccess$$Type<T = any> = ($LayeredRegistryAccess<T>);
}

declare module "net.minecraft.core.SectionPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SectionPos$$Type = ($SectionPos);
}

declare module "net.minecraft.core.RegistryAccess$RegistryEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryAccess$RegistryEntry$$Type<T = any> = ($RegistryAccess$RegistryEntry<T>);
}

declare module "net.minecraft.core.BlockSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockSource$$Type = ($BlockSource);
}

declare module "net.minecraft.core.Holder$Reference" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Holder$Reference$$Type<T = any> = ($Holder$Reference<T>);
}

declare module "net.minecraft.core.GlobalPos" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GlobalPos$$Type = ($GlobalPos);
}

declare module "net.minecraft.core.Holder$Direct" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Holder$Direct$$Type<T = any> = ($Holder$Direct<T>);
}

declare module "net.minecraft.core.HolderLookup$Provider" {
import { $Registry } from "net.minecraft.core.Registry"
import { $HolderLookup$RegistryLookup$$Type } from "net.minecraft.core.HolderLookup$RegistryLookup"
import { $Optional$$Type } from "java.util.Optional"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderLookup$Provider$$Type = ($HolderLookup$Provider | ((arg0: $ResourceKey<$Registry<T>>) => $Optional$$Type<$HolderLookup$RegistryLookup$$Type<T>>));
}

declare module "net.minecraft.core.NonNullList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NonNullList$$Type<E = any> = ($NonNullList<E>);
}

declare module "net.minecraft.core.WritableRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WritableRegistry$$Type<T = any> = ($WritableRegistry<T>);
}

declare module "net.minecraft.core.particles.ParticleOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleOptions$$Type = ($ParticleOptions | string);
}

