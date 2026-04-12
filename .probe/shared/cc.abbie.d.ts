declare module "cc.abbie.emi_ores.mixin.accessor.BlockStateMatchTestAccessor" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockStateMatchTestAccessor {
"getBlockState"(): $BlockState
get "blockState"(): $BlockState
}

export namespace $BlockStateMatchTestAccessor {
const probejs$$marker: never
}
export abstract class $BlockStateMatchTestAccessor$$Static implements $BlockStateMatchTestAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.BlockMatchTestAccessor" {
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $BlockMatchTestAccessor {
"getBlock"(): $Block
get "block"(): $Block
}

export namespace $BlockMatchTestAccessor {
const probejs$$marker: never
}
export abstract class $BlockMatchTestAccessor$$Static implements $BlockMatchTestAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.SimpleStateProviderAccessor" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $SimpleStateProviderAccessor {
"getState"(): $BlockState
get "state"(): $BlockState
}

export namespace $SimpleStateProviderAccessor {
const probejs$$marker: never
}
export abstract class $SimpleStateProviderAccessor$$Static implements $SimpleStateProviderAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.UniformHeightAccessor" {
import { $VerticalAnchor } from "net.minecraft.world.level.levelgen.VerticalAnchor"

export interface $UniformHeightAccessor {
"getMaxInclusive"(): $VerticalAnchor
"getMinInclusive"(): $VerticalAnchor
get "maxInclusive"(): $VerticalAnchor
get "minInclusive"(): $VerticalAnchor
}

export namespace $UniformHeightAccessor {
const probejs$$marker: never
}
export abstract class $UniformHeightAccessor$$Static implements $UniformHeightAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.TagMatchTestAccessor" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $TagMatchTestAccessor {
"getTag"(): $TagKey<$Block>
get "tag"(): $TagKey<$Block>
}

export namespace $TagMatchTestAccessor {
const probejs$$marker: never
}
export abstract class $TagMatchTestAccessor$$Static implements $TagMatchTestAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.NoiseProviderAccessor" {
import { $List } from "java.util.List"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $NoiseProviderAccessor {
"getStates"(): $List<$BlockState>
get "states"(): $List<$BlockState>
}

export namespace $NoiseProviderAccessor {
const probejs$$marker: never
}
export abstract class $NoiseProviderAccessor$$Static implements $NoiseProviderAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.HeightRangePlacementAccessor" {
import { $HeightProvider } from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export interface $HeightRangePlacementAccessor {
"getHeight"(): $HeightProvider
get "height"(): $HeightProvider
}

export namespace $HeightRangePlacementAccessor {
const probejs$$marker: never
}
export abstract class $HeightRangePlacementAccessor$$Static implements $HeightRangePlacementAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.RandomBlockStateMatchTestAccessor" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $RandomBlockStateMatchTestAccessor {
"getBlockState"(): $BlockState
"getProbability"(): float
get "blockState"(): $BlockState
get "probability"(): float
}

export namespace $RandomBlockStateMatchTestAccessor {
const probejs$$marker: never
}
export abstract class $RandomBlockStateMatchTestAccessor$$Static implements $RandomBlockStateMatchTestAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.TrapezoidHeightAccessor" {
import { $VerticalAnchor } from "net.minecraft.world.level.levelgen.VerticalAnchor"

export interface $TrapezoidHeightAccessor {
"getMaxInclusive"(): $VerticalAnchor
"getMinInclusive"(): $VerticalAnchor
"getPlateau"(): integer
get "maxInclusive"(): $VerticalAnchor
get "minInclusive"(): $VerticalAnchor
get "plateau"(): integer
}

export namespace $TrapezoidHeightAccessor {
const probejs$$marker: never
}
export abstract class $TrapezoidHeightAccessor$$Static implements $TrapezoidHeightAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.CountPlacementAccessor" {
import { $IntProvider } from "net.minecraft.util.valueproviders.IntProvider"

export interface $CountPlacementAccessor {
"getCount"(): $IntProvider
get "count"(): $IntProvider
}

export namespace $CountPlacementAccessor {
const probejs$$marker: never
}
export abstract class $CountPlacementAccessor$$Static implements $CountPlacementAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.RandomBlockMatchTestAccessor" {
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $RandomBlockMatchTestAccessor {
"getBlock"(): $Block
"getProbability"(): float
get "block"(): $Block
get "probability"(): float
}

export namespace $RandomBlockMatchTestAccessor {
const probejs$$marker: never
}
export abstract class $RandomBlockMatchTestAccessor$$Static implements $RandomBlockMatchTestAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.RarityFilterAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RarityFilterAccessor {
"getChance"(): integer
get "chance"(): integer
}

export namespace $RarityFilterAccessor {
const probejs$$marker: never
}
export abstract class $RarityFilterAccessor$$Static implements $RarityFilterAccessor {
}
}

declare module "cc.abbie.emi_ores.mixin.accessor.WeightedStateProviderAccessor" {
import { $SimpleWeightedRandomList } from "net.minecraft.util.random.SimpleWeightedRandomList"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $WeightedStateProviderAccessor {
"getWeightedList"(): $SimpleWeightedRandomList<$BlockState>
get "weightedList"(): $SimpleWeightedRandomList<$BlockState>
}

export namespace $WeightedStateProviderAccessor {
const probejs$$marker: never
}
export abstract class $WeightedStateProviderAccessor$$Static implements $WeightedStateProviderAccessor {
}
}

