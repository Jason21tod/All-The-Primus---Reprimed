declare module "com.leclowndu93150.particular.mixin.AccessorParticle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorParticle {
"setStopped"(boolean0: boolean): void
set "stopped"(value: boolean)
}

export namespace $AccessorParticle {
const probejs$$marker: never
}
export abstract class $AccessorParticle$$Static implements $AccessorParticle {
}
}

declare module "com.leclowndu93150.particular.mixin.AccessorChestBlockEntity" {
import { $ChestLidController } from "net.minecraft.world.level.block.entity.ChestLidController"
import { $ContainerOpenersCounter } from "net.minecraft.world.level.block.entity.ContainerOpenersCounter"

export interface $AccessorChestBlockEntity {
"getLidAnimator"(): $ChestLidController
"getStateManager"(): $ContainerOpenersCounter
get "lidAnimator"(): $ChestLidController
get "stateManager"(): $ContainerOpenersCounter
}

export namespace $AccessorChestBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorChestBlockEntity$$Static implements $AccessorChestBlockEntity {
}
}

declare module "com.leclowndu93150.particular.mixin.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {
"getPixels"(): long
get "pixels"(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
export abstract class $NativeImageAccessor$$Static implements $NativeImageAccessor {
}
}

declare module "com.leclowndu93150.particular.mixin.AccessorBillboardParticle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorBillboardParticle {
"setQuadSize"(float0: float): void
set "quadSize"(value: float)
}

export namespace $AccessorBillboardParticle {
const probejs$$marker: never
}
export abstract class $AccessorBillboardParticle$$Static implements $AccessorBillboardParticle {
}
}

declare module "com.leclowndu93150.particular.mixin.InvokerLivingEntity" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $InvokerLivingEntity {
"spawnParticles"(itemStack0: $ItemStack$$Type, int1: integer): void
}

export namespace $InvokerLivingEntity {
const probejs$$marker: never
}
export abstract class $InvokerLivingEntity$$Static implements $InvokerLivingEntity {
}
}

declare module "com.leclowndu93150.particular.mixin.AccessorBiome" {
import { $Biome$ClimateSettings } from "net.minecraft.world.level.biome.Biome$ClimateSettings"

export interface $AccessorBiome {
"getWeather"(): $Biome$ClimateSettings
get "weather"(): $Biome$ClimateSettings
}

export namespace $AccessorBiome {
const probejs$$marker: never
}
export abstract class $AccessorBiome$$Static implements $AccessorBiome {
}
}

declare module "com.leclowndu93150.particular.mixin.InvokerViewerCountManager" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $InvokerViewerCountManager {
"invokeOnContainerClose"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
"invokeOnContainerOpen"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
}

export namespace $InvokerViewerCountManager {
const probejs$$marker: never
}
export abstract class $InvokerViewerCountManager$$Static implements $InvokerViewerCountManager {
}
}

declare module "com.leclowndu93150.particular.mixin.AccessorEnderChestBlockEntity" {
import { $ChestLidController } from "net.minecraft.world.level.block.entity.ChestLidController"
import { $ContainerOpenersCounter } from "net.minecraft.world.level.block.entity.ContainerOpenersCounter"

export interface $AccessorEnderChestBlockEntity {
"getLidAnimator"(): $ChestLidController
"getStateManager"(): $ContainerOpenersCounter
get "lidAnimator"(): $ChestLidController
get "stateManager"(): $ContainerOpenersCounter
}

export namespace $AccessorEnderChestBlockEntity {
const probejs$$marker: never
}
export abstract class $AccessorEnderChestBlockEntity$$Static implements $AccessorEnderChestBlockEntity {
}
}

