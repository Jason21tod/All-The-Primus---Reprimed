declare module "virtuoel.pehkui.api.ScaleModifier" {
import { $ScaleData$$Type } from "virtuoel.pehkui.api.ScaleData"
import { $Comparable } from "java.lang.Comparable"

export class $ScaleModifier implements $Comparable<$ScaleModifier> {
constructor()
constructor(priority: float)

public "compareTo"(o: $ScaleModifier$$Type): integer
public "getPriority"(): float
public "modifyPrevScale"(scaleData: $ScaleData$$Type, modifiedScale: float): float
public "modifyScale"(scaleData: $ScaleData$$Type, modifiedScale: float, delta: float): float
get "priority"(): float
}
}

declare module "virtuoel.pehkui.util.PehkuiEntityExtensions" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ScaleData, $ScaleData$$Type } from "virtuoel.pehkui.api.ScaleData"
import { $Map } from "java.util.Map"
import { $ScaleType, $ScaleType$$Type } from "virtuoel.pehkui.api.ScaleType"

export interface $PehkuiEntityExtensions {
"pehkui_constructScaleData"(scaleType0: $ScaleType$$Type): $ScaleData
"pehkui_getOnGround"(): boolean
"pehkui_getScaleCache"(): $ScaleData[]
"pehkui_getScaleData"(scaleType0: $ScaleType$$Type): $ScaleData
"pehkui_getScales"(): $Map<$ScaleType, $ScaleData>
"pehkui_isFirstUpdate"(): boolean
"pehkui_readScaleNbt"(compoundTag0: $CompoundTag$$Type): void
"pehkui_setOnGround"(boolean0: boolean): void
"pehkui_setScaleCache"(scaleData0s: $ScaleData$$Type[]): void
"pehkui_setShouldIgnoreScaleNbt"(boolean0: boolean): void
"pehkui_setShouldSyncScales"(boolean0: boolean): void
"pehkui_shouldIgnoreScaleNbt"(): boolean
"pehkui_shouldSyncScales"(): boolean
"pehkui_writeScaleNbt"(compoundTag0: $CompoundTag$$Type): $CompoundTag
}

export namespace $PehkuiEntityExtensions {
const probejs$$marker: never
}
export abstract class $PehkuiEntityExtensions$$Static implements $PehkuiEntityExtensions {
}
}

declare module "virtuoel.pehkui.api.ScaleEventCallback" {
import { $ScaleData$$Type } from "virtuoel.pehkui.api.ScaleData"

export interface $ScaleEventCallback {
"onEvent"(scaleData0: $ScaleData$$Type): void
}

export namespace $ScaleEventCallback {
const probejs$$marker: never
}
export abstract class $ScaleEventCallback$$Static implements $ScaleEventCallback {
}
}

declare module "virtuoel.pehkui.api.ScaleData" {
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SortedSet } from "java.util.SortedSet"
import { $ScaleModifier } from "virtuoel.pehkui.api.ScaleModifier"
import { $FriendlyByteBuf, $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ScaleType } from "virtuoel.pehkui.api.ScaleType"

export class $ScaleData {
public "averagedFromScales"(scaleData: $ScaleData$$Type, ...scales: $ScaleData$$Type[]): $ScaleData
public "equals"(other: $ScaleData$$Type): boolean
public "fromScale"(scaleData: $ScaleData$$Type, notifyListener: boolean): $ScaleData
public "fromScale"(scaleData: $ScaleData$$Type): $ScaleData
public "getBaseScale"(): float
public "getBaseScale"(delta: float): float
public "getBaseValueModifiers"(): $SortedSet<$ScaleModifier>
public "getEasing"(): $Float2FloatFunction
public "getEntity"(): $Entity
public "getInitialScale"(): float
public "getPersistence"(): boolean
public "getPrevBaseScale"(): float
public "getPrevScale"(): float
public "getScale"(delta: float): float
public "getScale"(): float
public "getScaleTickDelay"(): integer
public "getScaleType"(): $ScaleType
public "getTargetScale"(): float
public "hasDefaultValues"(): boolean
public "isReset"(): boolean
public "markForSync"(sync: boolean): void
public "onUpdate"(): void
public "readNbt"(tag: $CompoundTag$$Type): void
public "resetScale"(): $ScaleData
public "resetScale"(notifyListener: boolean): $ScaleData
public "setBaseScale"(scale: float): void
public "setEasing"(easing: $Float2FloatFunction$$Type): void
public "setPersistence"(persistent: boolean): void
public "setScale"(scale: float): void
public "setScaleTickDelay"(ticks: integer): void
public "setTargetScale"(targetScale: float): void
public "shouldPersist"(): boolean
public "shouldSync"(): boolean
public "tick"(): void
public "toPacket"(buffer: $FriendlyByteBuf$$Type): $FriendlyByteBuf
public "writeNbt"(tag: $CompoundTag$$Type): $CompoundTag
get "baseScale"(): float
get "baseValueModifiers"(): $SortedSet<$ScaleModifier>
get "easing"(): $Float2FloatFunction
get "entity"(): $Entity
get "initialScale"(): float
get "persistence"(): boolean
get "prevBaseScale"(): float
get "prevScale"(): float
get "scale"(): float
get "scaleTickDelay"(): integer
get "scaleType"(): $ScaleType
get "targetScale"(): float
get "reset"(): boolean
set "baseScale"(value: float)
set "easing"(value: $Float2FloatFunction$$Type)
set "persistence"(value: boolean)
set "scale"(value: float)
set "scaleTickDelay"(value: integer)
set "targetScale"(value: float)
}
}

declare module "virtuoel.pehkui.util.PehkuiBlockStateExtensions" {
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block } from "net.minecraft.world.level.block.Block"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $PehkuiBlockStateExtensions {
"pehkui_getBlock"(): $Block
"pehkui_getOutlineShape"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): $VoxelShape
}

export namespace $PehkuiBlockStateExtensions {
const probejs$$marker: never
}
export abstract class $PehkuiBlockStateExtensions$$Static implements $PehkuiBlockStateExtensions {
}
}

declare module "virtuoel.pehkui.api.ScaleType" {
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ScaleData, $ScaleData$$Type } from "virtuoel.pehkui.api.ScaleData"
import { $ScaleModifier } from "virtuoel.pehkui.api.ScaleModifier"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $ScaleEventCallback } from "virtuoel.pehkui.api.ScaleEventCallback"

export class $ScaleType {
public "clampBaseScale"(data: $ScaleData$$Type, newScale: double): double
public "clampTargetScale"(data: $ScaleData$$Type, newScale: double): double
public "getAffectsDimensions"(): boolean
public "getDefaultBaseScale"(): float
public "getDefaultBaseValueModifiers"(): $Set<$ScaleModifier>
public "getDefaultEasing"(): $Float2FloatFunction
public "getDefaultPersistence"(): boolean
public "getDefaultTickDelay"(): integer
public "getPostTickEvent"(): $Collection<$ScaleEventCallback>
public "getPreTickEvent"(): $Collection<$ScaleEventCallback>
public "getScaleChangedEvent"(): $Collection<$ScaleEventCallback>
public "getScaleData"(entity: $Entity$$Type): $ScaleData
public "setDefaultEasing"(defaultEasing: $Float2FloatFunction$$Type): void
public "setDefaultPersistence"(persistent: boolean): void
get "affectsDimensions"(): boolean
get "defaultBaseScale"(): float
get "defaultBaseValueModifiers"(): $Set<$ScaleModifier>
get "defaultEasing"(): $Float2FloatFunction
get "defaultPersistence"(): boolean
get "defaultTickDelay"(): integer
get "postTickEvent"(): $Collection<$ScaleEventCallback>
get "preTickEvent"(): $Collection<$ScaleEventCallback>
get "scaleChangedEvent"(): $Collection<$ScaleEventCallback>
set "defaultEasing"(value: $Float2FloatFunction$$Type)
set "defaultPersistence"(value: boolean)
}
}

declare module "virtuoel.pehkui.util.NbtCompoundExtensions" {
import { $UUID } from "java.util.UUID"

export interface $NbtCompoundExtensions {
"pehkui_containsUuid"(string0: string): boolean
"pehkui_getUuid"(string0: string): $UUID
}

export namespace $NbtCompoundExtensions {
const probejs$$marker: never
}
export abstract class $NbtCompoundExtensions$$Static implements $NbtCompoundExtensions {
}
}

declare module "virtuoel.pehkui.mixin.compat1201minus.compat116plus.ChunkHolderAccessor" {
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"

export interface $ChunkHolderAccessor {
"pehkui$getCurrentlyLoading"(): $LevelChunk
"pehkui$setCurrentlyLoading"(levelChunk0: $LevelChunk$$Type): void
}

export namespace $ChunkHolderAccessor {
const probejs$$marker: never
}
export abstract class $ChunkHolderAccessor$$Static implements $ChunkHolderAccessor {
}
}

