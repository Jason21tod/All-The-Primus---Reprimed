declare module "net.combatroll.internals.RollManager" {
import { $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $RollManager$CooldownInfo } from "net.combatroll.internals.RollManager$CooldownInfo"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $RollManager {
constructor()

public "getCooldown"(): $RollManager$CooldownInfo
public "isRollAvailable"(player: $Player$$Type): boolean
public "isRolling"(): boolean
public "onRoll"(player: $LocalPlayer$$Type): void
public static "rollDuration"(): integer
public "tick"(player: $LocalPlayer$$Type): void
get "isEnabled"(): boolean
set "isEnabled"(value: boolean)
get "cooldown"(): $RollManager$CooldownInfo
get "rolling"(): boolean
}
}

declare module "net.combatroll.api.RollInvulnerable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RollInvulnerable {
"setRollInvulnerableTicks"(int0: integer): void
set "rollInvulnerableTicks"(value: integer)
}

export namespace $RollInvulnerable {
const probejs$$marker: never
}
export abstract class $RollInvulnerable$$Static implements $RollInvulnerable {
}
}

declare module "net.combatroll.mixin.client.KeybindingAccessor" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeybindingAccessor {
"getBoundKey"(): $InputConstants$Key
get "boundKey"(): $InputConstants$Key
}

export namespace $KeybindingAccessor {
const probejs$$marker: never
}
export abstract class $KeybindingAccessor$$Static implements $KeybindingAccessor {
}
}

declare module "net.combatroll.internals.RollManager$CooldownInfo" {
import { $Record } from "java.lang.Record"

export class $RollManager$CooldownInfo extends $Record {
constructor(elapsed: integer, total: integer, availableRolls: integer, maxRolls: integer)

public "availableRolls"(): integer
public "elapsed"(): integer
public "maxRolls"(): integer
public "total"(): integer
}
}

declare module "net.combatroll.mixin.PlayerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerEntityAccessor {
"invokeIsImmobile_CombatRoll"(): boolean
}

export namespace $PlayerEntityAccessor {
const probejs$$marker: never
}
export abstract class $PlayerEntityAccessor$$Static implements $PlayerEntityAccessor {
}
}

declare module "net.combatroll.internals.RollingEntity" {
import { $RollManager } from "net.combatroll.internals.RollManager"

export interface $RollingEntity {
"getRollManager"(): $RollManager
get "rollManager"(): $RollManager
}

export namespace $RollingEntity {
const probejs$$marker: never
}
export abstract class $RollingEntity$$Static implements $RollingEntity {
}
}

declare module "net.combatroll.client.animation.AnimatablePlayer" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export interface $AnimatablePlayer {
"playRollAnimation"(string0: string, vec31: $Vec3$$Type): void
}

export namespace $AnimatablePlayer {
const probejs$$marker: never
}
export abstract class $AnimatablePlayer$$Static implements $AnimatablePlayer {
}
}

