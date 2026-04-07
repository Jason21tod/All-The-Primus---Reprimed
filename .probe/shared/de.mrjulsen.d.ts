declare module "de.mrjulsen.mcdragonlib.mixin.FontAccessor" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StringSplitter } from "net.minecraft.client.StringSplitter"
import { $BakedGlyph$$Type } from "net.minecraft.client.gui.font.glyphs.BakedGlyph"
import { $FontSet } from "net.minecraft.client.gui.font.FontSet"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $FontAccessor {
"dragonlib$filterFishyGlyphs"(): boolean
"dragonlib$getSplitter"(): $StringSplitter
"dragonlib$invokeGetFontSet"(resourceLocation0: $ResourceLocation$$Type): $FontSet
"dragonlib$renderChar"(bakedGlyph0: $BakedGlyph$$Type, boolean1: boolean, boolean2: boolean, float3: float, float4: float, float5: float, matrix4f6: $Matrix4f$$Type, vertexConsumer7: $VertexConsumer$$Type, float8: float, float9: float, float10: float, float11: float, int12: integer): void
}

export namespace $FontAccessor {
const probejs$$marker: never
}
export abstract class $FontAccessor$$Static implements $FontAccessor {
}
}

declare module "de.mrjulsen.mcdragonlib.mixin.BakedGlyphAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedGlyphAccessor {
"dragonlib$getU0"(): float
"dragonlib$getU1"(): float
"dragonlib$getV0"(): float
"dragonlib$getV1"(): float
"dragonlib$setU0"(float0: float): void
"dragonlib$setU1"(float0: float): void
"dragonlib$setV0"(float0: float): void
"dragonlib$setV1"(float0: float): void
}

export namespace $BakedGlyphAccessor {
const probejs$$marker: never
}
export abstract class $BakedGlyphAccessor$$Static implements $BakedGlyphAccessor {
}
}

declare module "de.mrjulsen.mcdragonlib.mixin.StringSplitterAccessor" {
import { $StringSplitter$WidthProvider } from "net.minecraft.client.StringSplitter$WidthProvider"

export interface $StringSplitterAccessor {
"dragonlib$getWidthProvider"(): $StringSplitter$WidthProvider
}

export namespace $StringSplitterAccessor {
const probejs$$marker: never
}
export abstract class $StringSplitterAccessor$$Static implements $StringSplitterAccessor {
}
}

declare module "de.mrjulsen.mcdragonlib.mixin.VertexFormatAccessor" {
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"

export interface $VertexFormatAccessor {
"dragonlib$getOffsets"(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
export abstract class $VertexFormatAccessor$$Static implements $VertexFormatAccessor {
}
}

declare module "de.mrjulsen.mcdragonlib.mixin.AbstractWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractWidgetAccessor {
"dragonlib$setHeight"(int0: integer): void
}

export namespace $AbstractWidgetAccessor {
const probejs$$marker: never
}
export abstract class $AbstractWidgetAccessor$$Static implements $AbstractWidgetAccessor {
}
}

declare module "de.mrjulsen.mcdragonlib.item.IItemExtension" {
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IItemExtension {
"dragonlib$getCustomEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
"dragonlib$tickArmor"(stack: $ItemStack$$Type, player: $Player$$Type): void
}

export namespace $IItemExtension {
const probejs$$marker: never
}
export abstract class $IItemExtension$$Static implements $IItemExtension {
}
}

declare module "de.mrjulsen.mcdragonlib.mixin.ScreenAccessor" {
import { $FocusNavigationEvent$ArrowNavigation } from "net.minecraft.client.gui.navigation.FocusNavigationEvent$ArrowNavigation"
import { $FocusNavigationEvent$TabNavigation } from "net.minecraft.client.gui.navigation.FocusNavigationEvent$TabNavigation"
import { $ScreenDirection$$Type } from "net.minecraft.client.gui.navigation.ScreenDirection"

export interface $ScreenAccessor {
"dragonlib$clearFocus"(): void
"dragonlib$createArrowEvent"(screenDirection0: $ScreenDirection$$Type): $FocusNavigationEvent$ArrowNavigation
"dragonlib$createTabEvent"(): $FocusNavigationEvent$TabNavigation
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

