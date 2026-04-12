declare module "tschipp.carryon.events.EntityPickupEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $EntityPickupEvent extends $Event implements $EventItf {
readonly "player": $ServerPlayer
readonly "target": $Entity

constructor(serverPlayer0: $ServerPlayer$$Type, entity1: $Entity$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

