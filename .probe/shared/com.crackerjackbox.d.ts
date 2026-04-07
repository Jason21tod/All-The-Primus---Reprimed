declare module "com.crackerjackbox.mobcontrol.iface.IServerLevel" {
import { $ServerSavedData } from "com.crackerjackbox.mobcontrol.data.ServerSavedData"

export interface $IServerLevel {
"mobControl$savedData"(): $ServerSavedData
}

export namespace $IServerLevel {
const probejs$$marker: never
}
export abstract class $IServerLevel$$Static implements $IServerLevel {
}
}

declare module "com.crackerjackbox.mobcontrol.iface.IMob" {
import { $WeightedItem$$Type } from "com.crackerjackbox.mobcontrol.data.WeightedItem"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $MobSpawn, $MobSpawn$$Type } from "com.crackerjackbox.mobcontrol.data.MobSpawn"
import { $MobExRule, $MobExRule$$Type } from "com.crackerjackbox.mobcontrol.rule.MobExRule"

export interface $IMob {
"mobControl$addDeathLoot"(weightedItem0: $WeightedItem$$Type): void
"mobControl$addMob"(mob0: $Mob$$Type): void
"mobControl$getCancelBossFight"(): boolean
"mobControl$getMobSpawn"(): $MobSpawn
"mobControl$getRule"(): $MobExRule
"mobControl$setCancelBossFight"(boolean0: boolean): void
"mobControl$setMobSpawn"(mobSpawn0: $MobSpawn$$Type): void
"mobControl$setRule"(mobExRule0: $MobExRule$$Type): void
}

export namespace $IMob {
const probejs$$marker: never
}
export abstract class $IMob$$Static implements $IMob {
}
}

declare module "com.crackerjackbox.mobcontrol.rule.MobExSet" {
import { $Serializable } from "java.io.Serializable"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"

export class $MobExSet implements $Serializable {
constructor()

get "allowAttack"(): $ArrayList<string>
set "allowAttack"(value: $ArrayList$$Type<string>)
get "attack"(): $ArrayList<string>
set "attack"(value: $ArrayList$$Type<string>)
get "baby"(): integer
set "baby"(value: integer)
get "breakBlock"(): integer
set "breakBlock"(value: integer)
get "canLead"(): integer
set "canLead"(value: integer)
get "climb"(): integer
set "climb"(value: integer)
get "climbFallTicks"(): integer
set "climbFallTicks"(value: integer)
get "cutGrass"(): integer
set "cutGrass"(value: integer)
get "damageFrom"(): integer
set "damageFrom"(value: integer)
get "damageTo"(): integer
set "damageTo"(value: integer)
get "eatPlants"(): integer
set "eatPlants"(value: integer)
get "eatPlantsHeals"(): integer
set "eatPlantsHeals"(value: integer)
get "flyingSpeedFrom"(): integer
set "flyingSpeedFrom"(value: integer)
get "flyingSpeedTo"(): integer
set "flyingSpeedTo"(value: integer)
get "followRangeFrom"(): integer
set "followRangeFrom"(value: integer)
get "followRangeTo"(): integer
set "followRangeTo"(value: integer)
get "healthFrom"(): integer
set "healthFrom"(value: integer)
get "healthTo"(): integer
set "healthTo"(value: integer)
get "knockbackFrom"(): integer
set "knockbackFrom"(value: integer)
get "knockbackTo"(): integer
set "knockbackTo"(value: integer)
get "movementSpeedFrom"(): integer
set "movementSpeedFrom"(value: integer)
get "movementSpeedTo"(): integer
set "movementSpeedTo"(value: integer)
get "name"(): string
set "name"(value: string)
get "nameAlwaysShown"(): boolean
set "nameAlwaysShown"(value: boolean)
get "onHurt"(): string
set "onHurt"(value: string)
get "placeBlock"(): integer
set "placeBlock"(value: integer)
get "plantFlowers"(): integer
set "plantFlowers"(value: integer)
get "plantTrees"(): integer
set "plantTrees"(value: integer)
get "sizeFrom"(): integer
set "sizeFrom"(value: integer)
get "sizeTo"(): integer
set "sizeTo"(value: integer)
get "spreadFire"(): integer
set "spreadFire"(value: integer)
get "sunburn"(): integer
set "sunburn"(value: integer)
get "xpFrom"(): integer
set "xpFrom"(value: integer)
get "xpTo"(): integer
set "xpTo"(value: integer)
}
}

declare module "com.crackerjackbox.mobcontrol.rule.MobExSpawn" {
import { $Serializable } from "java.io.Serializable"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"

export class $MobExSpawn implements $Serializable {
constructor()

get "additionalChecks"(): boolean
set "additionalChecks"(value: boolean)
get "atYFrom"(): integer
set "atYFrom"(value: integer)
get "atYTo"(): integer
set "atYTo"(value: integer)
get "convert"(): $ArrayList<string>
set "convert"(value: $ArrayList$$Type<string>)
get "countFrom"(): integer
set "countFrom"(value: integer)
get "countTo"(): integer
set "countTo"(value: integer)
get "distanceFrom"(): integer
set "distanceFrom"(value: integer)
get "distanceTo"(): integer
set "distanceTo"(value: integer)
get "distanceXFrom"(): integer
set "distanceXFrom"(value: integer)
get "distanceXTo"(): integer
set "distanceXTo"(value: integer)
get "distanceY"(): integer
set "distanceY"(value: integer)
get "distanceZFrom"(): integer
set "distanceZFrom"(value: integer)
get "distanceZTo"(): integer
set "distanceZTo"(value: integer)
}
}

declare module "com.crackerjackbox.mobcontrol.iface.IPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPlayer {
"mobControl$setDays"(int0: integer): void
"mobControl$ticks"(): long
}

export namespace $IPlayer {
const probejs$$marker: never
}
export abstract class $IPlayer$$Static implements $IPlayer {
}
}

declare module "com.crackerjackbox.mobcontrol.data.ServerSavedData" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SavedData } from "net.minecraft.world.level.saveddata.SavedData"

export class $ServerSavedData extends $SavedData {
public static "create"(): $ServerSavedData
public "getTicks"(): long
public static "init"(minecraftServer0: $MinecraftServer$$Type): $ServerSavedData
public static "load"(compoundTag0: $CompoundTag$$Type): $ServerSavedData
public "setTicks"(long0: long): void
get "ticks"(): long
set "ticks"(value: long)
}
}

declare module "com.crackerjackbox.mobcontrol.data.MobSpawn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MobSpawn {
constructor(string0: string)

get "dayCheck"(): long
set "dayCheck"(value: long)
get "reason"(): string
set "reason"(value: string)
}
}

declare module "com.crackerjackbox.mobcontrol.data.WeightedItem" {
import { $IWeightedGroup } from "com.crackerjackbox.mobcontrol.iface.IWeightedGroup"
import { $Record } from "java.lang.Record"
import { $Serializable } from "java.io.Serializable"

export class $WeightedItem extends $Record implements $Serializable, $IWeightedGroup {
constructor(key: string, group: string, weight: integer, quantityFrom: integer, quantityTo: integer, drop: integer)

public "drop"(): integer
public "group"(): string
public "key"(): string
public "quantityFrom"(): integer
public "quantityTo"(): integer
public "weight"(): integer
}
}

declare module "com.crackerjackbox.mobcontrol.data.Weighted" {
import { $IWeightedGroup, $IWeightedGroup$$Type } from "com.crackerjackbox.mobcontrol.iface.IWeightedGroup"
import { $ArrayList } from "java.util.ArrayList"
import { $Serializable } from "java.io.Serializable"

export class $Weighted<T extends $IWeightedGroup = $IWeightedGroup> implements $Serializable {
constructor()

public "add"(t0: T): boolean
public "any"(): boolean
public "clear"(): void
public "getWeighted"(): T
public "getWeighted"(string0: string): T
public "getWeightedGroupRecords"(): $ArrayList<T>
get "weighted"(): T
get "weightedGroupRecords"(): $ArrayList<T>
}
}

declare module "com.crackerjackbox.mobcontrol.data.WeightedEffect" {
import { $IWeightedGroup } from "com.crackerjackbox.mobcontrol.iface.IWeightedGroup"
import { $Record } from "java.lang.Record"
import { $Serializable } from "java.io.Serializable"

export class $WeightedEffect extends $Record implements $Serializable, $IWeightedGroup {
constructor(key: string, group: string, weight: integer, durationFrom: integer, durationTo: integer, amplifierFrom: integer, amplifierTo: integer, ambient: boolean, particles: boolean)

public "ambient"(): boolean
public "amplifierFrom"(): integer
public "amplifierTo"(): integer
public "durationFrom"(): integer
public "durationTo"(): integer
public "group"(): string
public "key"(): string
public "particles"(): boolean
public "weight"(): integer
}
}

declare module "com.crackerjackbox.mobcontrol.iface.IWeightedGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWeightedGroup {
"group"(): string
"weight"(): integer
}

export namespace $IWeightedGroup {
const probejs$$marker: never
}
export abstract class $IWeightedGroup$$Static implements $IWeightedGroup {
}
}

declare module "com.crackerjackbox.mobcontrol.rule.MobExRule" {
import { $MobExSpawn, $MobExSpawn$$Type } from "com.crackerjackbox.mobcontrol.rule.MobExSpawn"
import { $WeightedItem, $WeightedItem$$Type } from "com.crackerjackbox.mobcontrol.data.WeightedItem"
import { $WeightedEffect, $WeightedEffect$$Type } from "com.crackerjackbox.mobcontrol.data.WeightedEffect"
import { $Weighted, $Weighted$$Type } from "com.crackerjackbox.mobcontrol.data.Weighted"
import { $MobExSet, $MobExSet$$Type } from "com.crackerjackbox.mobcontrol.rule.MobExSet"
import { $Serializable } from "java.io.Serializable"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"

export class $MobExRule implements $Serializable {
constructor()

get "biome"(): $ArrayList<string>
set "biome"(value: $ArrayList$$Type<string>)
get "biomeTag"(): $ArrayList<string>
set "biomeTag"(value: $ArrayList$$Type<string>)
get "canSeeSky"(): boolean
set "canSeeSky"(value: boolean)
get "chest"(): $Weighted<$WeightedItem>
set "chest"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "commandOverride"(): string
set "commandOverride"(value: string)
get "coolDownFrom"(): integer
set "coolDownFrom"(value: integer)
get "coolDownNextSpawnTick"(): long
set "coolDownNextSpawnTick"(value: long)
get "coolDownTo"(): integer
set "coolDownTo"(value: integer)
get "copy"(): string
set "copy"(value: string)
get "currentHealth"(): float
set "currentHealth"(value: float)
get "dayFrom"(): integer
set "dayFrom"(value: integer)
get "dayTo"(): integer
set "dayTo"(value: integer)
get "dimension"(): $ArrayList<string>
set "dimension"(value: $ArrayList$$Type<string>)
get "effect"(): $Weighted<$WeightedEffect>
set "effect"(value: $Weighted$$Type<$WeightedEffect$$Type>)
get "feet"(): $Weighted<$WeightedItem>
set "feet"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "head"(): $Weighted<$WeightedItem>
set "head"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "isBaby"(): boolean
set "isBaby"(value: boolean)
get "legs"(): $Weighted<$WeightedItem>
set "legs"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "lightBlockFrom"(): integer
set "lightBlockFrom"(value: integer)
get "lightBlockTo"(): integer
set "lightBlockTo"(value: integer)
get "lightSkyFrom"(): integer
set "lightSkyFrom"(value: integer)
get "lightSkyTo"(): integer
set "lightSkyTo"(value: integer)
get "loot"(): $Weighted<$WeightedItem>
set "loot"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "mainhand"(): $Weighted<$WeightedItem>
set "mainhand"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "maxHealth"(): float
set "maxHealth"(value: float)
get "maxPerMob"(): integer
set "maxPerMob"(value: integer)
get "maxPerPlayer"(): integer
set "maxPerPlayer"(value: integer)
get "mobExName"(): string
set "mobExName"(value: string)
get "name"(): string
set "name"(value: string)
get "offhand"(): $Weighted<$WeightedItem>
set "offhand"(value: $Weighted$$Type<$WeightedItem$$Type>)
get "repeatFrom"(): integer
set "repeatFrom"(value: integer)
get "repeatTo"(): integer
set "repeatTo"(value: integer)
get "run"(): integer
set "run"(value: integer)
get "set"(): $MobExSet
set "set"(value: $MobExSet$$Type)
get "spawn"(): $MobExSpawn
set "spawn"(value: $MobExSpawn$$Type)
get "structure"(): $ArrayList<string>
set "structure"(value: $ArrayList$$Type<string>)
get "timeOfDayFrom"(): integer
set "timeOfDayFrom"(value: integer)
get "timeOfDayTo"(): integer
set "timeOfDayTo"(value: integer)
get "type"(): $ArrayList<string>
set "type"(value: $ArrayList$$Type<string>)
get "weather"(): $ArrayList<string>
set "weather"(value: $ArrayList$$Type<string>)
}
}

declare module "com.crackerjackbox.mobcontrol.iface.IBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlock {
"mobControl$breakTick"(): long
}

export namespace $IBlock {
const probejs$$marker: never
}
export abstract class $IBlock$$Static implements $IBlock {
}
}

declare module "com.crackerjackbox.mobcontrol.iface.IBat" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"

export interface $IBat {
"mobControl$setTagetPosition"(blockPos0: $BlockPos$$Type): void
}

export namespace $IBat {
const probejs$$marker: never
}
export abstract class $IBat$$Static implements $IBat {
}
}

