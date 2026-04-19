declare module "net.minecraft.client.color.block.BlockColor" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $BlockColor {
"getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
}

export namespace $BlockColor {
const probejs$$marker: never
}
export abstract class $BlockColor$$Static implements $BlockColor {
}
}

declare module "net.minecraft.client.color.item.ItemColor" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $ItemColor {
"getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
}

export namespace $ItemColor {
const probejs$$marker: never
}
export abstract class $ItemColor$$Static implements $ItemColor {
}
}

declare module "net.minecraft.client.color.block.BlockTintCache" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"

export class $BlockTintCache {
constructor(toIntFunction0: $ToIntFunction$$Type<$BlockPos$$Type>)

public "getColor"(blockPos0: $BlockPos$$Type): integer
public "invalidateAll"(): void
public "invalidateForChunk"(int0: integer, int1: integer): void
}
}

declare module "net.minecraft.client.color.block.BlockColors" {
import { $BlockColor, $BlockColor$$Type } from "net.minecraft.client.color.block.BlockColor"
import { $Reference2ReferenceMap } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Set } from "java.util.Set"
import { $BlockColorsForgeAccessor } from "fuzs.puzzleslib.mixin.client.accessor.BlockColorsForgeAccessor"
import { $Property } from "net.minecraft.world.level.block.state.properties.Property"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockColorsAccess } from "snownee.kiwi.mixin.forge.BlockColorsAccess"
import { $AccessorBlockColors } from "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorBlockColors"
import { $Map } from "java.util.Map"
import { $BlockColorsExtended } from "me.jellysquid.mods.sodium.client.model.color.interop.BlockColorsExtended"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ReferenceSet } from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "net.fabricmc.fabric.impl.client.rendering.ColorProviderRegistryImpl$ColorMapperHolder"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export class $BlockColors implements $BlockColorsAccess, $ColorProviderRegistryImpl$ColorMapperHolder, $AccessorBlockColors, $BlockColorsForgeAccessor, $BlockColorsExtended {
readonly "blockColors": $Map<$Holder$Reference<$Block>, $BlockColor>

constructor()

public static "createDefault"(): $BlockColors
public "embeddium$getOverridenVanillaBlocks"(): $ReferenceSet
public "get"(block: $Block$$Type): $BlockColor
public "getColor"(blockState0: $BlockState$$Type, blockAndTintGetter1: $BlockAndTintGetter$$Type, blockPos2: $BlockPos$$Type, int3: integer): integer
public "getColor"(blockState0: $BlockState$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type): integer
public "getColoringProperties"(block0: $Block$$Type): $Set<$Property<any>>
public static "getOverridenVanillaBlocks"(blockColors0: $BlockColors$$Type): $ReferenceSet<$Block>
public static "getProviders"(blockColors0: $BlockColors$$Type): $Reference2ReferenceMap<$Block, $BlockColor>
/** @deprecated */
public "register"(blockColor0: $BlockColor$$Type, ...block1s: $Block$$Type[]): void
public "sodium$getProviders"(): $Reference2ReferenceMap
}
}

declare module "net.minecraft.client.color.item.ItemColors" {
import { $ItemColorsForgeAccessor } from "fuzs.puzzleslib.mixin.client.accessor.ItemColorsForgeAccessor"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $ItemColorsAccess } from "snownee.kiwi.mixin.forge.ItemColorsAccess"
import { $BlockColors$$Type } from "net.minecraft.client.color.block.BlockColors"
import { $AccessorItemColors } from "org.violetmoon.zetaimplforge.mixin.mixins.client.AccessorItemColors"
import { $ItemColorsExtended } from "me.jellysquid.mods.sodium.client.model.color.interop.ItemColorsExtended"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ColorProviderRegistryImpl$ColorMapperHolder } from "net.fabricmc.fabric.impl.client.rendering.ColorProviderRegistryImpl$ColorMapperHolder"
import { $ItemColor, $ItemColor$$Type } from "net.minecraft.client.color.item.ItemColor"

export class $ItemColors implements $ItemColorsAccess, $ColorProviderRegistryImpl$ColorMapperHolder, $AccessorItemColors, $ItemColorsForgeAccessor, $ItemColorsExtended {
constructor()

public static "createDefault"(blockColors0: $BlockColors$$Type): $ItemColors
public "get"(item: $ItemLike$$Type): $ItemColor
public "getColor"(itemStack0: $ItemStack$$Type, int1: integer): integer
/** @deprecated */
public "register"(itemColor0: $ItemColor$$Type, ...itemLike1s: $ItemLike$$Type[]): void
public "sodium$getColorProvider"(itemStack0: $ItemStack$$Type): $ItemColor
}
}

