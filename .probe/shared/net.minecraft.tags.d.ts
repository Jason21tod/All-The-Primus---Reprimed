declare module "net.minecraft.tags.TagEntry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ExtraCodecs$TagOrElementLocation } from "net.minecraft.util.ExtraCodecs$TagOrElementLocation"
import { $TagEntry$Lookup$$Type } from "net.minecraft.tags.TagEntry$Lookup"

export class $TagEntry {
static "CODEC": $Codec<$TagEntry>
readonly "id": $ResourceLocation
readonly "required": boolean
readonly "tag": boolean

constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)

public "build"<T>(lookup0: $TagEntry$Lookup$$Type<T>, consumer1: $Consumer$$Type<T>): boolean
public static "element"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public "elementOrTag"(): $ExtraCodecs$TagOrElementLocation
public "getId"(): $ResourceLocation
public "isRequired"(): boolean
public "isTag"(): boolean
public static "optionalElement"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public static "optionalTag"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public static "tag"(resourceLocation0: $ResourceLocation$$Type): $TagEntry
public "verifyIfPresent"(predicate0: $Predicate$$Type<$ResourceLocation$$Type>, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): boolean
public "visitOptionalDependencies"(consumer0: $Consumer$$Type<$ResourceLocation$$Type>): void
public "visitRequiredDependencies"(consumer0: $Consumer$$Type<$ResourceLocation$$Type>): void
}
}

declare module "net.minecraft.tags.TagManager" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $RegistryAccess, $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $TagManager$LoadResult } from "net.minecraft.tags.TagManager$LoadResult"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $Registry } from "net.minecraft.core.Registry"
import { $List } from "java.util.List"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $IdentifiableResourceReloadListener } from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"

export class $TagManager implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
readonly "registryAccess": $RegistryAccess

constructor(registryAccess0: $RegistryAccess$$Type)

public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getName"(): string
public "getResult"(): $List<$TagManager$LoadResult<any>>
public static "getTagDir"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "name"(): string
get "result"(): $List<$TagManager$LoadResult<any>>
}
}

declare module "net.minecraft.tags.TagManager$LoadResult" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Record } from "java.lang.Record"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $TagManager$LoadResult<T = any> extends $Record {
constructor(key: $ResourceKey$$Type<$Registry<T>>, tags: $Map$$Type<$ResourceLocation$$Type, $Collection$$Type<$Holder$$Type<T>>>)

public "key"(): $ResourceKey<$Registry<T>>
public "tags"(): $Map<$ResourceLocation, $Collection<$Holder<T>>>
}
}

declare module "net.minecraft.tags.TagNetworkSerialization$NetworkPayload" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $TagNetworkSerialization$NetworkPayload {
public "isEmpty"(): boolean
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $TagNetworkSerialization$NetworkPayload
public "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "empty"(): boolean
}
}

declare module "net.minecraft.tags.TagLoader$EntryWithSource" {
import { $TagEntry, $TagEntry$$Type } from "net.minecraft.tags.TagEntry"
import { $Record } from "java.lang.Record"

export class $TagLoader$EntryWithSource extends $Record {
constructor(tagEntry0: $TagEntry$$Type, string1: string)
constructor(entry: $TagEntry$$Type, source: string, remove: boolean)

public "entry"(): $TagEntry
public "remove"(): boolean
public "source"(): string
}
}

declare module "net.minecraft.tags.ItemTags" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Item } from "net.minecraft.world.item.Item"

export class $ItemTags {
static readonly "ACACIA_LOGS": $TagKey<$Item>
static readonly "ANVIL": $TagKey<$Item>
static readonly "ARROWS": $TagKey<$Item>
static readonly "AXES": $TagKey<$Item>
static readonly "AXOLOTL_TEMPT_ITEMS": $TagKey<$Item>
static readonly "BAMBOO_BLOCKS": $TagKey<$Item>
static readonly "BANNERS": $TagKey<$Item>
static readonly "BEACON_PAYMENT_ITEMS": $TagKey<$Item>
static readonly "BEDS": $TagKey<$Item>
static readonly "BIRCH_LOGS": $TagKey<$Item>
static readonly "BOATS": $TagKey<$Item>
static readonly "BOOKSHELF_BOOKS": $TagKey<$Item>
static readonly "BREAKS_DECORATED_POTS": $TagKey<$Item>
static readonly "BUTTONS": $TagKey<$Item>
static readonly "CANDLES": $TagKey<$Item>
static readonly "CHERRY_LOGS": $TagKey<$Item>
static readonly "CHEST_BOATS": $TagKey<$Item>
static readonly "CLUSTER_MAX_HARVESTABLES": $TagKey<$Item>
static readonly "COALS": $TagKey<$Item>
static readonly "COAL_ORES": $TagKey<$Item>
static readonly "COMPASSES": $TagKey<$Item>
static readonly "COMPLETES_FIND_TREE_TUTORIAL": $TagKey<$Item>
static readonly "COPPER_ORES": $TagKey<$Item>
static readonly "CREEPER_DROP_MUSIC_DISCS": $TagKey<$Item>
static readonly "CREEPER_IGNITERS": $TagKey<$Item>
static readonly "CRIMSON_STEMS": $TagKey<$Item>
static readonly "DAMPENS_VIBRATIONS": $TagKey<$Item>
static readonly "DARK_OAK_LOGS": $TagKey<$Item>
static readonly "DECORATED_POT_INGREDIENTS": $TagKey<$Item>
static readonly "DECORATED_POT_SHERDS": $TagKey<$Item>
static readonly "DIAMOND_ORES": $TagKey<$Item>
static readonly "DIRT": $TagKey<$Item>
static readonly "DOORS": $TagKey<$Item>
static readonly "EMERALD_ORES": $TagKey<$Item>
static readonly "FENCES": $TagKey<$Item>
static readonly "FENCE_GATES": $TagKey<$Item>
static readonly "FISHES": $TagKey<$Item>
static readonly "FLOWERS": $TagKey<$Item>
static readonly "FOX_FOOD": $TagKey<$Item>
static readonly "FREEZE_IMMUNE_WEARABLES": $TagKey<$Item>
static readonly "GOLD_ORES": $TagKey<$Item>
static readonly "HANGING_SIGNS": $TagKey<$Item>
static readonly "HOES": $TagKey<$Item>
static readonly "IGNORED_BY_PIGLIN_BABIES": $TagKey<$Item>
static readonly "IRON_ORES": $TagKey<$Item>
static readonly "JUNGLE_LOGS": $TagKey<$Item>
static readonly "LAPIS_ORES": $TagKey<$Item>
static readonly "LEAVES": $TagKey<$Item>
static readonly "LECTERN_BOOKS": $TagKey<$Item>
static readonly "LOGS": $TagKey<$Item>
static readonly "LOGS_THAT_BURN": $TagKey<$Item>
static readonly "MANGROVE_LOGS": $TagKey<$Item>
static readonly "MUSIC_DISCS": $TagKey<$Item>
static readonly "NON_FLAMMABLE_WOOD": $TagKey<$Item>
static readonly "NOTE_BLOCK_TOP_INSTRUMENTS": $TagKey<$Item>
static readonly "OAK_LOGS": $TagKey<$Item>
static readonly "PICKAXES": $TagKey<$Item>
static readonly "PIGLIN_FOOD": $TagKey<$Item>
static readonly "PIGLIN_LOVED": $TagKey<$Item>
static readonly "PIGLIN_REPELLENTS": $TagKey<$Item>
static readonly "PLANKS": $TagKey<$Item>
static readonly "RAILS": $TagKey<$Item>
static readonly "REDSTONE_ORES": $TagKey<$Item>
static readonly "SAND": $TagKey<$Item>
static readonly "SAPLINGS": $TagKey<$Item>
static readonly "SHOVELS": $TagKey<$Item>
static readonly "SIGNS": $TagKey<$Item>
static readonly "SLABS": $TagKey<$Item>
static readonly "SMALL_FLOWERS": $TagKey<$Item>
static readonly "SMELTS_TO_GLASS": $TagKey<$Item>
static readonly "SNIFFER_FOOD": $TagKey<$Item>
static readonly "SOUL_FIRE_BASE_BLOCKS": $TagKey<$Item>
static readonly "SPRUCE_LOGS": $TagKey<$Item>
static readonly "STAIRS": $TagKey<$Item>
static readonly "STONE_BRICKS": $TagKey<$Item>
static readonly "STONE_BUTTONS": $TagKey<$Item>
static readonly "STONE_CRAFTING_MATERIALS": $TagKey<$Item>
static readonly "STONE_TOOL_MATERIALS": $TagKey<$Item>
static readonly "SWORDS": $TagKey<$Item>
static readonly "TALL_FLOWERS": $TagKey<$Item>
static readonly "TERRACOTTA": $TagKey<$Item>
static readonly "TOOLS": $TagKey<$Item>
static readonly "TRAPDOORS": $TagKey<$Item>
static readonly "TRIMMABLE_ARMOR": $TagKey<$Item>
static readonly "TRIM_MATERIALS": $TagKey<$Item>
static readonly "TRIM_TEMPLATES": $TagKey<$Item>
static readonly "VILLAGER_PLANTABLE_SEEDS": $TagKey<$Item>
static readonly "WALLS": $TagKey<$Item>
static readonly "WARPED_STEMS": $TagKey<$Item>
static readonly "WART_BLOCKS": $TagKey<$Item>
static readonly "WOODEN_BUTTONS": $TagKey<$Item>
static readonly "WOODEN_DOORS": $TagKey<$Item>
static readonly "WOODEN_FENCES": $TagKey<$Item>
static readonly "WOODEN_PRESSURE_PLATES": $TagKey<$Item>
static readonly "WOODEN_SLABS": $TagKey<$Item>
static readonly "WOODEN_STAIRS": $TagKey<$Item>
static readonly "WOODEN_TRAPDOORS": $TagKey<$Item>
static readonly "WOOL": $TagKey<$Item>
static readonly "WOOL_CARPETS": $TagKey<$Item>

public static "create"(resourceLocation0: $ResourceLocation$$Type): $TagKey<$Item>
}
}

declare module "net.minecraft.tags.TagKey" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"

export class $TagKey<T = any> extends $Record {
/** @deprecated */
constructor(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type)

public "cast"<E>(resourceKey0: $ResourceKey$$Type<$Registry<E>>): $Optional<$TagKey<E>>
public static "codec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$TagKey<T>>
public static "create"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>, resourceLocation1: $ResourceLocation$$Type): $TagKey<T>
public static "hashedCodec"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $Codec<$TagKey<T>>
public "isFor"(resourceKey0: $ResourceKey$$Type<$Registry<any>>): boolean
public "location"(): $ResourceLocation
public "registry"(): $ResourceKey<$Registry<T>>
}
}

declare module "net.minecraft.tags.TagEntry$Lookup" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Collection } from "java.util.Collection"

export interface $TagEntry$Lookup<T = any> {
"element"(resourceLocation0: $ResourceLocation$$Type): T
"tag"(resourceLocation0: $ResourceLocation$$Type): $Collection<T>
}

export namespace $TagEntry$Lookup {
const probejs$$marker: never
}
export abstract class $TagEntry$Lookup$$Static<T = any> implements $TagEntry$Lookup<T> {
}
}

