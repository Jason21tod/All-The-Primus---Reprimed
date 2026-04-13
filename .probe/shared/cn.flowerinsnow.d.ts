declare module "cn.flowerinsnow.greatscrollabletooltips.event.RenderTooltipEvent$Miss" {
import { $AbstractContainerScreen$$Type } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import { $RenderTooltipEvent } from "cn.flowerinsnow.greatscrollabletooltips.event.RenderTooltipEvent"

export class $RenderTooltipEvent$Miss extends $RenderTooltipEvent {
constructor()
constructor(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>)

}
}

declare module "cn.flowerinsnow.greatscrollabletooltips.event.RenderTooltipEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $AbstractContainerScreen } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"

export class $RenderTooltipEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getScreen"(): $AbstractContainerScreen<any>
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "screen"(): $AbstractContainerScreen<any>
}
}

declare module "cn.flowerinsnow.greatscrollabletooltips.event.ClientTickEndEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ClientTickEndEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "cn.flowerinsnow.greatscrollabletooltips.event.RenderTooltipEvent$Pre" {
import { $Slot, $Slot$$Type } from "net.minecraft.world.inventory.Slot"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $AbstractContainerScreen$$Type } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import { $RenderTooltipEvent } from "cn.flowerinsnow.greatscrollabletooltips.event.RenderTooltipEvent"

export class $RenderTooltipEvent$Pre extends $RenderTooltipEvent {
constructor()
constructor(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, abstractContainerMenu4: $AbstractContainerMenu$$Type, slot5: $Slot$$Type)

public "getGraphics"(): $GuiGraphics
public "getMenu"(): $AbstractContainerMenu
public "getSlot"(): $Slot
public "getX"(): integer
public "getY"(): integer
get "graphics"(): $GuiGraphics
get "menu"(): $AbstractContainerMenu
get "slot"(): $Slot
get "x"(): integer
get "y"(): integer
}
}

declare module "cn.flowerinsnow.greatscrollabletooltips.event.ScreenCloseEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Screen, $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenCloseEvent extends $Event implements $EventItf {
readonly "oldScreen": $Screen

constructor()
constructor(screen0: $Screen$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "cn.flowerinsnow.greatscrollabletooltips.event.PreScreenKeyPressedEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $AbstractContainerScreen, $AbstractContainerScreen$$Type } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"

export class $PreScreenKeyPressedEvent extends $Event implements $EventItf {
constructor()
constructor(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, int1: integer, int2: integer, int3: integer)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getKeyCode"(): integer
public "getModifiers"(): integer
public "getScanCode"(): integer
public "getScreen"(): $AbstractContainerScreen<any>
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "keyCode"(): integer
get "modifiers"(): integer
get "scanCode"(): integer
get "screen"(): $AbstractContainerScreen<any>
}
}

declare module "cn.flowerinsnow.greatscrollabletooltips.event.PreScreenMouseScrollEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $AbstractContainerScreen, $AbstractContainerScreen$$Type } from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"

export class $PreScreenMouseScrollEvent extends $Event implements $EventItf {
constructor(abstractContainerScreen0: $AbstractContainerScreen$$Type<any>, double1: double, double2: double, double3: double)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getAmount"(): double
public "getMouseX"(): double
public "getMouseY"(): double
public "getScreen"(): $AbstractContainerScreen<any>
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "amount"(): double
get "mouseX"(): double
get "mouseY"(): double
get "screen"(): $AbstractContainerScreen<any>
}
}

