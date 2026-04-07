declare module "com.dinzeer.legendreliclib.lib.key.SpecialKeyType" {
import { $Enum } from "java.lang.Enum"

export class $SpecialKeyType extends $Enum<$SpecialKeyType> {
static readonly "KEY_1": $SpecialKeyType
static readonly "KEY_2": $SpecialKeyType
static readonly "KEY_3": $SpecialKeyType
static readonly "KEY_4": $SpecialKeyType
static readonly "KEY_5": $SpecialKeyType

public static "fromIndex"(int0: integer): $SpecialKeyType
public "getIndex"(): integer
public "getName"(): string
public static "valueOf"(string0: string): $SpecialKeyType
public static "values"(): $SpecialKeyType[]
get "index"(): integer
get "name"(): string
}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey4PressedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey4PressedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey5ReleasedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey5ReleasedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey3ReleasedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey3ReleasedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey2PressedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey2PressedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey1PressedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey1PressedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.event.TypeMakerUpEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TypeMakerUpEvent extends $PlayerEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey4ReleasedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey4ReleasedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey1ReleasedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey1ReleasedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $SpecialKeyType, $SpecialKeyType$$Type } from "com.dinzeer.legendreliclib.lib.key.SpecialKeyType"

export class $SpecialTypeKeyEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, specialKeyType1: $SpecialKeyType$$Type)

public "getKeyIndex"(): integer
public "getKeyName"(): string
public "getKeyType"(): $SpecialKeyType
get "keyIndex"(): integer
get "keyName"(): string
get "keyType"(): $SpecialKeyType
}
}

declare module "com.dinzeer.legendreliclib.lib.util.impl.RegisteredStackManager" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IStackManager } from "com.dinzeer.legendreliclib.lib.util.impl.IStackManager"

export class $RegisteredStackManager implements $IStackManager {
public "addStacks"(livingEntity0: $LivingEntity$$Type, int1: integer): void
public "getCurrentStacks"(livingEntity0: $LivingEntity$$Type): integer
public "getCurrentStacksoffhand"(livingEntity0: $LivingEntity$$Type): integer
public "getDescriptionKey"(): string
public "getEffectKey"(): string
public "getMaxStacks"(): integer
public "resetStacks"(livingEntity0: $LivingEntity$$Type): void
get "descriptionKey"(): string
get "effectKey"(): string
get "maxStacks"(): integer
}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey5PressedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey5PressedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey2ReleasedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey2ReleasedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.event.TypeMakerPressedEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $TypeMakerPressedEvent extends $PlayerEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.event.StackChargeEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $RegisteredStackManager, $RegisteredStackManager$$Type } from "com.dinzeer.legendreliclib.lib.util.impl.RegisteredStackManager"

export class $StackChargeEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, registeredStackManager1: $RegisteredStackManager$$Type, int2: integer)
constructor()

get "amount"(): integer
set "amount"(value: integer)
get "stackManager"(): $RegisteredStackManager
set "stackManager"(value: $RegisteredStackManager$$Type)
}
}

declare module "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent$SpecialTypeKey3PressedEvent" {
import { $SpecialTypeKeyEvent } from "com.dinzeer.legendreliclib.lib.key.SpecialTypeKeyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpecialTypeKeyEvent$SpecialTypeKey3PressedEvent extends $SpecialTypeKeyEvent {
constructor(player0: $Player$$Type)
constructor()

}
}

declare module "com.dinzeer.legendreliclib.lib.util.impl.IStackManager" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $IStackManager {
"addStacks"(livingEntity0: $LivingEntity$$Type, int1: integer): void
"getCurrentStacks"(livingEntity0: $LivingEntity$$Type): integer
"getCurrentStacksoffhand"(livingEntity0: $LivingEntity$$Type): integer
"getDescriptionKey"(): string
"getEffectKey"(): string
"getMaxStacks"(): integer
"resetStacks"(livingEntity0: $LivingEntity$$Type): void
get "descriptionKey"(): string
get "effectKey"(): string
get "maxStacks"(): integer
}

export namespace $IStackManager {
const probejs$$marker: never
}
export abstract class $IStackManager$$Static implements $IStackManager {
}
}

