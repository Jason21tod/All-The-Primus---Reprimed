declare module "squeek.appleskin.api.event.HUDOverlayEvent$HungerRestored" {
import { $FoodValues, $FoodValues$$Type } from "squeek.appleskin.api.food.FoodValues"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $HUDOverlayEvent } from "squeek.appleskin.api.event.HUDOverlayEvent"

export class $HUDOverlayEvent$HungerRestored extends $HUDOverlayEvent {
readonly "currentFoodLevel": integer
readonly "foodValues": $FoodValues
readonly "itemStack": $ItemStack

constructor(int0: integer, itemStack1: $ItemStack$$Type, foodValues2: $FoodValues$$Type, int3: integer, int4: integer, guiGraphics5: $GuiGraphics$$Type)
constructor()

}
}

declare module "squeek.appleskin.api.event.TooltipOverlayEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $FoodValues } from "squeek.appleskin.api.food.FoodValues"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $TooltipOverlayEvent extends $Event implements $EventItf {
readonly "defaultFood": $FoodValues
readonly "itemStack": $ItemStack
readonly "modifiedFood": $FoodValues

constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "squeek.appleskin.api.food.FoodValues" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FoodValues {
readonly "hunger": integer
readonly "saturationModifier": float

constructor(int0: integer, float1: float)

public "getSaturationIncrement"(): float
get "saturationIncrement"(): float
}
}

declare module "squeek.appleskin.api.event.TooltipOverlayEvent$Pre" {
import { $FoodValues$$Type } from "squeek.appleskin.api.food.FoodValues"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TooltipOverlayEvent } from "squeek.appleskin.api.event.TooltipOverlayEvent"

export class $TooltipOverlayEvent$Pre extends $TooltipOverlayEvent {
constructor(itemStack0: $ItemStack$$Type, foodValues1: $FoodValues$$Type, foodValues2: $FoodValues$$Type)
constructor()

}
}

declare module "squeek.appleskin.api.event.TooltipOverlayEvent$Render" {
import { $FoodValues$$Type } from "squeek.appleskin.api.food.FoodValues"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $TooltipOverlayEvent } from "squeek.appleskin.api.event.TooltipOverlayEvent"

export class $TooltipOverlayEvent$Render extends $TooltipOverlayEvent {
constructor(itemStack0: $ItemStack$$Type, int1: integer, int2: integer, guiGraphics3: $GuiGraphics$$Type, foodValues4: $FoodValues$$Type, foodValues5: $FoodValues$$Type)
constructor()

get "guiGraphics"(): $GuiGraphics
set "guiGraphics"(value: $GuiGraphics$$Type)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "squeek.appleskin.api.event.FoodValuesEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $FoodValues, $FoodValues$$Type } from "squeek.appleskin.api.food.FoodValues"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $FoodValuesEvent extends $Event implements $EventItf {
readonly "itemStack": $ItemStack
readonly "player": $Player

constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type, foodValues2: $FoodValues$$Type, foodValues3: $FoodValues$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "defaultFoodValues"(): $FoodValues
set "defaultFoodValues"(value: $FoodValues$$Type)
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "modifiedFoodValues"(): $FoodValues
set "modifiedFoodValues"(value: $FoodValues$$Type)
}
}

declare module "squeek.appleskin.api.event.HUDOverlayEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $GuiGraphics, $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $HUDOverlayEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "guiGraphics"(): $GuiGraphics
set "guiGraphics"(value: $GuiGraphics$$Type)
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "squeek.appleskin.api.event.HUDOverlayEvent$HealthRestored" {
import { $FoodValues, $FoodValues$$Type } from "squeek.appleskin.api.food.FoodValues"
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $HUDOverlayEvent } from "squeek.appleskin.api.event.HUDOverlayEvent"

export class $HUDOverlayEvent$HealthRestored extends $HUDOverlayEvent {
readonly "foodValues": $FoodValues
readonly "itemStack": $ItemStack
readonly "modifiedHealth": float

constructor(float0: float, itemStack1: $ItemStack$$Type, foodValues2: $FoodValues$$Type, int3: integer, int4: integer, guiGraphics5: $GuiGraphics$$Type)
constructor()

}
}

declare module "squeek.appleskin.api.event.HUDOverlayEvent$Exhaustion" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $HUDOverlayEvent } from "squeek.appleskin.api.event.HUDOverlayEvent"

export class $HUDOverlayEvent$Exhaustion extends $HUDOverlayEvent {
readonly "exhaustion": float

constructor(float0: float, int1: integer, int2: integer, guiGraphics3: $GuiGraphics$$Type)
constructor()

}
}

declare module "squeek.appleskin.api.event.HUDOverlayEvent$Saturation" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $HUDOverlayEvent } from "squeek.appleskin.api.event.HUDOverlayEvent"

export class $HUDOverlayEvent$Saturation extends $HUDOverlayEvent {
readonly "saturationLevel": float

constructor(float0: float, int1: integer, int2: integer, guiGraphics3: $GuiGraphics$$Type)
constructor()

}
}

