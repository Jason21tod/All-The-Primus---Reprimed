declare module "xyz.apex.forge.apexcore.core.client.BlockVisualizer$Context" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ClientLevel, $ClientLevel$$Type } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Record } from "java.lang.Record"
import { $LocalPlayer, $LocalPlayer$$Type } from "net.minecraft.client.player.LocalPlayer"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $BlockVisualizer$Context extends $Record {
constructor(blockState: $BlockState$$Type, level: $ClientLevel$$Type, pos: $BlockPos$$Type, player: $LocalPlayer$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type, face: $Direction$$Type, tintIndex: integer)

public "blockState"(): $BlockState
public "face"(): $Direction
public "hand"(): $InteractionHand
public "level"(): $ClientLevel
public "player"(): $LocalPlayer
public "pos"(): $BlockPos
public "stack"(): $ItemStack
public "tintIndex"(): integer
public "with"(localPlayer0: $LocalPlayer$$Type): $BlockVisualizer$Context
public "with"(blockPos0: $BlockPos$$Type): $BlockVisualizer$Context
public "with"(clientLevel0: $ClientLevel$$Type): $BlockVisualizer$Context
public "with"(blockState0: $BlockState$$Type): $BlockVisualizer$Context
public "with"(interactionHand0: $InteractionHand$$Type): $BlockVisualizer$Context
public "with"(itemStack0: $ItemStack$$Type): $BlockVisualizer$Context
public "with"(direction0: $Direction$$Type): $BlockVisualizer$Context
public "with"(int0: integer): $BlockVisualizer$Context
}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$ModifyContext" {
import { $BlockVisualizer$Context$$Type } from "xyz.apex.forge.apexcore.core.client.BlockVisualizer$Context"
import { $BlockVisualizerEvent$ModifyContext$Reason, $BlockVisualizerEvent$ModifyContext$Reason$$Type } from "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$ModifyContext$Reason"
import { $BlockVisualizerEvent } from "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent"

export class $BlockVisualizerEvent$ModifyContext extends $BlockVisualizerEvent {
readonly "reason": $BlockVisualizerEvent$ModifyContext$Reason

constructor()
constructor(context0: $BlockVisualizer$Context$$Type, reason1: $BlockVisualizerEvent$ModifyContext$Reason$$Type)

public "setContext"(context0: $BlockVisualizer$Context$$Type): void
set "context"(value: $BlockVisualizer$Context$$Type)
}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render" {
import { $BlockVisualizerEvent$Render$Stage } from "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render$Stage"
import { $BlockVisualizerEvent } from "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent"

export class $BlockVisualizerEvent$Render extends $BlockVisualizerEvent {
readonly "stage": $BlockVisualizerEvent$Render$Stage

constructor()

}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$ModifyContext$Reason" {
import { $Enum } from "java.lang.Enum"

export class $BlockVisualizerEvent$ModifyContext$Reason extends $Enum<$BlockVisualizerEvent$ModifyContext$Reason> {
static readonly "DEFAULT_BLOCKSTATE": $BlockVisualizerEvent$ModifyContext$Reason
static readonly "EXISTING_BLOCKSTATE": $BlockVisualizerEvent$ModifyContext$Reason

public static "valueOf"(string0: string): $BlockVisualizerEvent$ModifyContext$Reason
public static "values"(): $BlockVisualizerEvent$ModifyContext$Reason[]
}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render$Stage" {
import { $Enum } from "java.lang.Enum"

export class $BlockVisualizerEvent$Render$Stage extends $Enum<$BlockVisualizerEvent$Render$Stage> {
static readonly "POST": $BlockVisualizerEvent$Render$Stage
static readonly "PRE": $BlockVisualizerEvent$Render$Stage

public static "valueOf"(string0: string): $BlockVisualizerEvent$Render$Stage
public static "values"(): $BlockVisualizerEvent$Render$Stage[]
}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render$Pre" {
import { $BlockVisualizer$Context$$Type } from "xyz.apex.forge.apexcore.core.client.BlockVisualizer$Context"
import { $BlockVisualizerEvent$Render } from "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render"

export class $BlockVisualizerEvent$Render$Pre extends $BlockVisualizerEvent$Render {
constructor(context0: $BlockVisualizer$Context$$Type)
constructor()

}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render$Post" {
import { $BlockVisualizer$Context$$Type } from "xyz.apex.forge.apexcore.core.client.BlockVisualizer$Context"
import { $BlockVisualizerEvent$Render } from "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent$Render"

export class $BlockVisualizerEvent$Render$Post extends $BlockVisualizerEvent$Render {
constructor(context0: $BlockVisualizer$Context$$Type)
constructor()

}
}

declare module "xyz.apex.forge.apexcore.lib.event.client.BlockVisualizerEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $BlockVisualizer$Context } from "xyz.apex.forge.apexcore.core.client.BlockVisualizer$Context"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $BlockVisualizerEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getContext"(): $BlockVisualizer$Context
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "context"(): $BlockVisualizer$Context
}
}

