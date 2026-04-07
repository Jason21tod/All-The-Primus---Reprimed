declare module "net.minecraftforge.event.server.ServerStartedEvent" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerLifecycleEvent } from "net.minecraftforge.event.server.ServerLifecycleEvent"

export class $ServerStartedEvent extends $ServerLifecycleEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.server.ServerLifecycleEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ServerLifecycleEvent extends $Event implements $EventItf {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getServer"(): $MinecraftServer
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "server"(): $MinecraftServer
}
}

declare module "net.minecraftforge.event.server.ServerAboutToStartEvent" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerLifecycleEvent } from "net.minecraftforge.event.server.ServerLifecycleEvent"

export class $ServerAboutToStartEvent extends $ServerLifecycleEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.server.ServerStoppingEvent" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerLifecycleEvent } from "net.minecraftforge.event.server.ServerLifecycleEvent"

export class $ServerStoppingEvent extends $ServerLifecycleEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.server.ServerStoppedEvent" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerLifecycleEvent } from "net.minecraftforge.event.server.ServerLifecycleEvent"

export class $ServerStoppedEvent extends $ServerLifecycleEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

}
}

declare module "net.minecraftforge.event.server.ServerStartingEvent" {
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerLifecycleEvent } from "net.minecraftforge.event.server.ServerLifecycleEvent"

export class $ServerStartingEvent extends $ServerLifecycleEvent {
constructor(minecraftServer0: $MinecraftServer$$Type)
constructor()

}
}

