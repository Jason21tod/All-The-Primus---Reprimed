declare module "team.creative.playerrevive.api.CombatTrackerClone" {
import { $CombatTracker$$Type } from "net.minecraft.world.damagesource.CombatTracker"

export class $CombatTrackerClone {
constructor(combatTracker0: $CombatTracker$$Type)

public "overwriteTracker"(combatTracker0: $CombatTracker$$Type): void
}
}

declare module "team.creative.creativecore.mixin.VanillaPackResourcesAccessor" {
import { $List } from "java.util.List"
import { $Map } from "java.util.Map"
import { $PackType } from "net.minecraft.server.packs.PackType"
import { $Path } from "java.nio.file.Path"

export interface $VanillaPackResourcesAccessor {
"getPathsForType"(): $Map<$PackType, $List<$Path>>
get "pathsForType"(): $Map<$PackType, $List<$Path>>
}

export namespace $VanillaPackResourcesAccessor {
const probejs$$marker: never
}
export abstract class $VanillaPackResourcesAccessor$$Static implements $VanillaPackResourcesAccessor {
}
}

declare module "team.creative.playerrevive.api.event.PlayerRevivedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $IBleeding, $IBleeding$$Type } from "team.creative.playerrevive.api.IBleeding"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerRevivedEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, iBleeding1: $IBleeding$$Type)

public "getBleeding"(): $IBleeding
get "bleeding"(): $IBleeding
}
}

declare module "team.creative.itemphysic.server.ItemEntityExtender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityExtender {
"canBurn"(): boolean
"canSwim"(): boolean
}

export namespace $ItemEntityExtender {
const probejs$$marker: never
}
export abstract class $ItemEntityExtender$$Static implements $ItemEntityExtender {
}
}

declare module "team.creative.creativecore.mixin.StringSplitterAccessor" {
import { $StringSplitter$WidthProvider } from "net.minecraft.client.StringSplitter$WidthProvider"

export interface $StringSplitterAccessor {
"getWidthProvider"(): $StringSplitter$WidthProvider
get "widthProvider"(): $StringSplitter$WidthProvider
}

export namespace $StringSplitterAccessor {
const probejs$$marker: never
}
export abstract class $StringSplitterAccessor$$Static implements $StringSplitterAccessor {
}
}

declare module "team.creative.itemphysic.client.ItemEntityRendering" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityRendering {
"skipRendering"(): boolean
}

export namespace $ItemEntityRendering {
const probejs$$marker: never
}
export abstract class $ItemEntityRendering$$Static implements $ItemEntityRendering {
}
}

declare module "team.creative.creativecore.mixin.VoxelShapeAccessor" {
import { $DiscreteVoxelShape$$Type } from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccessor {
"setShape"(discreteVoxelShape0: $DiscreteVoxelShape$$Type): void
set "shape"(value: $DiscreteVoxelShape$$Type)
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
export abstract class $VoxelShapeAccessor$$Static implements $VoxelShapeAccessor {
}
}

declare module "team.creative.creativecore.mixin.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {
"getLastMouseEventTime"(): double
get "lastMouseEventTime"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export abstract class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {
}
}

declare module "team.creative.itemphysic.mixin.ItemEntityAccessor" {
import { $UUID } from "java.util.UUID"

export interface $ItemEntityAccessor {
"getTarget"(): $UUID
get "target"(): $UUID
}

export namespace $ItemEntityAccessor {
const probejs$$marker: never
}
export abstract class $ItemEntityAccessor$$Static implements $ItemEntityAccessor {
}
}

declare module "team.creative.playerrevive.api.event.PlayerBleedOutEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $IBleeding, $IBleeding$$Type } from "team.creative.playerrevive.api.IBleeding"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $PlayerBleedOutEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, iBleeding1: $IBleeding$$Type)

public "getBleeding"(): $IBleeding
get "bleeding"(): $IBleeding
}
}

declare module "team.creative.playerrevive.api.IBleeding" {
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $DamageSource, $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $CombatTrackerClone } from "team.creative.playerrevive.api.CombatTrackerClone"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IBleeding extends $INBTSerializable<$CompoundTag> {
"bledOut"(): boolean
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"downedTime"(): integer
"forceBledOut"(): void
"getProgress"(): float
"getSource"(registryAccess0: $RegistryAccess$$Type): $DamageSource
"getTrackerClone"(): $CombatTrackerClone
"isBleeding"(): boolean
"isItemConsumed"(): boolean
"knockOut"(player0: $Player$$Type, damageSource1: $DamageSource$$Type): void
"revive"(): void
"revived"(): boolean
"revivingPlayers"(): $List<$Player>
"serializeNBT"(): $CompoundTag
"setItemConsumed"(): void
"tick"(player0: $Player$$Type): void
"timeLeft"(): integer
get "progress"(): float
get "trackerClone"(): $CombatTrackerClone
get "bleeding"(): boolean
get "itemConsumed"(): boolean
}

export namespace $IBleeding {
const probejs$$marker: never
}
export abstract class $IBleeding$$Static implements $IBleeding {
}
}

declare module "team.creative.itemphysic.mixin.EntityAccessor" {
import { $TagKey } from "net.minecraft.tags.TagKey"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Set } from "java.util.Set"
import { $Fluid } from "net.minecraft.world.level.material.Fluid"

export interface $EntityAccessor {
"getFluidOnEyes"(): $Set<$TagKey<$Fluid>>
"getStuckSpeedMultiplier"(): $Vec3
get "fluidOnEyes"(): $Set<$TagKey<$Fluid>>
get "stuckSpeedMultiplier"(): $Vec3
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "team.creative.playerrevive.mixin.CombatTrackerAccessor" {
import { $List } from "java.util.List"
import { $CombatEntry } from "net.minecraft.world.damagesource.CombatEntry"

export interface $CombatTrackerAccessor {
"getCombatEndTime"(): integer
"getCombatStartTime"(): integer
"getEntries"(): $List<$CombatEntry>
"getInCombat"(): boolean
"getLastDamageTime"(): integer
"getTakingDamage"(): boolean
"setCombatEndTime"(int0: integer): void
"setCombatStartTime"(int0: integer): void
"setInCombat"(boolean0: boolean): void
"setLastDamageTime"(int0: integer): void
"setTakingDamage"(boolean0: boolean): void
get "combatEndTime"(): integer
get "combatStartTime"(): integer
get "entries"(): $List<$CombatEntry>
get "inCombat"(): boolean
get "lastDamageTime"(): integer
get "takingDamage"(): boolean
set "combatEndTime"(value: integer)
set "combatStartTime"(value: integer)
set "inCombat"(value: boolean)
set "lastDamageTime"(value: integer)
set "takingDamage"(value: boolean)
}

export namespace $CombatTrackerAccessor {
const probejs$$marker: never
}
export abstract class $CombatTrackerAccessor$$Static implements $CombatTrackerAccessor {
}
}

declare module "team.creative.playerrevive.mixin.LocalPlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LocalPlayerAccessor {
"getHandsBusy"(): boolean
"setHandsBusy"(boolean0: boolean): void
get "handsBusy"(): boolean
set "handsBusy"(value: boolean)
}

export namespace $LocalPlayerAccessor {
const probejs$$marker: never
}
export abstract class $LocalPlayerAccessor$$Static implements $LocalPlayerAccessor {
}
}

declare module "team.creative.playerrevive.mixin.MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor {
"setMissTime"(int0: integer): void
set "missTime"(value: integer)
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftAccessor$$Static implements $MinecraftAccessor {
}
}

declare module "team.creative.creativecore.mixin.BufferBuilderAccessor" {
import { $ByteBuffer } from "java.nio.ByteBuffer"

export interface $BufferBuilderAccessor {
"getBuffer"(): $ByteBuffer
"getNextElementByte"(): integer
"getVertices"(): integer
get "buffer"(): $ByteBuffer
get "nextElementByte"(): integer
get "vertices"(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
export abstract class $BufferBuilderAccessor$$Static implements $BufferBuilderAccessor {
}
}

