declare module "dev.utherhel.mobbility.addon.combatroll.api.MobRollAccess" {
import { $ModifierLayer } from "dev.kosmx.playerAnim.api.layered.ModifierLayer"
import { $IAnimation } from "dev.kosmx.playerAnim.api.layered.IAnimation"
import { $AdjustmentModifier } from "dev.kosmx.playerAnim.api.layered.modifier.AdjustmentModifier"

export interface $MobRollAccess {
"mobbility$getRollAdjustmentModifier"(): $AdjustmentModifier
"mobbility$getRollAnimationLayer"(): $ModifierLayer<$IAnimation>
}

export namespace $MobRollAccess {
const probejs$$marker: never
}
export abstract class $MobRollAccess$$Static implements $MobRollAccess {
}
}

declare module "dev.utherhel.itemcoating.mixin.HandledScreenAccessor" {
import { $Slot } from "net.minecraft.world.inventory.Slot"

export interface $HandledScreenAccessor {
"getFocusedSlot"(): $Slot
get "focusedSlot"(): $Slot
}

export namespace $HandledScreenAccessor {
const probejs$$marker: never
}
export abstract class $HandledScreenAccessor$$Static implements $HandledScreenAccessor {
}
}

declare module "dev.utherhel.mobbility.addon.combatroll.api.RollingMob" {
import { $MobRollManager } from "dev.utherhel.mobbility.addon.combatroll.roll.MobRollManager"

export interface $RollingMob {
"mobbility$getRollManager"(): $MobRollManager
}

export namespace $RollingMob {
const probejs$$marker: never
}
export abstract class $RollingMob$$Static implements $RollingMob {
}
}

declare module "dev.utherhel.mobbility.addon.combatroll.roll.MobRollManager" {
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $MobRollManager$CooldownInfo } from "dev.utherhel.mobbility.addon.combatroll.roll.MobRollManager$CooldownInfo"

export class $MobRollManager {
constructor()

public "disable"(): void
public "enable"(mob: $Mob$$Type): void
public "getAvailableRolls"(): integer
public "getCooldown"(): $MobRollManager$CooldownInfo
public "getCooldownProgress"(): integer
public "getMaxRolls"(): integer
public static "getRollDistance"(mob: $Mob$$Type): double
public static "getRollDuration"(): integer
public "isEnabled"(): boolean
public "isRollAvailable"(mob: $Mob$$Type): boolean
public "isRolling"(): boolean
public "performRoll"(mob: $Mob$$Type): void
public "tick"(mob: $Mob$$Type): void
get "availableRolls"(): integer
get "cooldown"(): $MobRollManager$CooldownInfo
get "cooldownProgress"(): integer
get "maxRolls"(): integer
get "enabled"(): boolean
get "rolling"(): boolean
}
}

declare module "dev.utherhel.mobbility.api.spell.IMobbilitySpellCaster" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMobbilitySpellCaster {
"mobbility$isAnyCasting"(): boolean
}

export namespace $IMobbilitySpellCaster {
const probejs$$marker: never
}
export abstract class $IMobbilitySpellCaster$$Static implements $IMobbilitySpellCaster {
}
}

declare module "dev.utherhel.mobbility.addon.combatroll.roll.MobRollManager$CooldownInfo" {
import { $Record } from "java.lang.Record"

export class $MobRollManager$CooldownInfo extends $Record {
constructor(elapsed: integer, total: integer, availableRolls: integer, maxRolls: integer)

public "availableRolls"(): integer
public "elapsed"(): integer
public "maxRolls"(): integer
public "total"(): integer
}
}

declare module "dev.utherhel.mobbility.api.spell.IAlternatingSpellCaster" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAlternatingSpellCaster {
"mobbility$getLastSpellSystem"(): string
"mobbility$getPrioritySystem"(): string
"mobbility$getPriorityUpdateTick"(): integer
"mobbility$hasBothSpellSystems"(): boolean
"mobbility$setHasBothSpellSystems"(boolean0: boolean): void
"mobbility$setLastSpellSystem"(string0: string): void
"mobbility$setPrioritySystem"(string0: string): void
"mobbility$setPriorityUpdateTick"(int0: integer): void
}

export namespace $IAlternatingSpellCaster {
const probejs$$marker: never
}
export abstract class $IAlternatingSpellCaster$$Static implements $IAlternatingSpellCaster {
}
}

