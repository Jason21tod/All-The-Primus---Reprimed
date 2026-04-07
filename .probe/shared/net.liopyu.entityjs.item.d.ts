declare module "net.liopyu.entityjs.item.EyeOfEnderItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $EyeOfEnderJSBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.vanilla.EyeOfEnderJSBuilder"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Item } from "net.minecraft.world.item.Item"
import { $Function$$Type } from "java.util.function.Function"
import { $ContextUtils$ItemUseContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ItemUseContext"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $EyeOfEnderItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type, parent: $EyeOfEnderJSBuilder$$Type)

public "createObject"(): $Item
/**
 * Sets the sound to play when the eye item is thrown at the coordinates of the player
 * 
 * @param sPlayer The player to play the sound to, can be null.
 * @param soundEvent The sound to play when the eye item is thrown
 * @param soundSource The source of the sound in the mixer.
 * @param soundVolume The volume of the sound.
 * @param soundPitch The pitch of the sound.
 * 
 * ```javascript
 * item.playSoundOverride(null,"ambient.basalt_deltas.additions","ambient",1,1)
 * ```
 */
public "playSoundOverride"(player: $Player$$Type, soundEvent: $SoundEvent$$Type, soundSource: $SoundSource$$Type, volume: float, pitch: float): $EyeOfEnderItemBuilder
/**
 * A function to determine where the thrown ender eye item will head towards.
 * 
 * Example usage:
 * ```javascript
 * builder.signalTo(context => {
 *     const { level, player, hand } = context
 *     return // Some BlockPos for the eye to navigate to when thrown
 * });
 * ```
 */
public "signalTo"(f: $Function$$Type<$ContextUtils$ItemUseContext$$Type, any>): $EyeOfEnderItemBuilder
/**
 * A function to determine structure the thrown ender eye item will head towards in a 100 chunk radius.
 * 
 * Example usage:
 * ```javascript
 * builder.signalToStructure("minecraft:village_plains");
 * ```
 */
public "signalToStructure"(resourceLocation: $ResourceLocation$$Type): $EyeOfEnderItemBuilder
/**
 * A function to determine structure the thrown ender eye item will head towards in a certain chunk radius.
 * 
 * Example usage:
 * ```javascript
 * builder.signalToStructure("minecraft:village_plains", 100);
 * ```
 */
public "signalToStructure"(resourceLocation: $ResourceLocation$$Type, chunkRadius: integer): $EyeOfEnderItemBuilder
/**
 * A function to determine which structure tag the thrown ender eye item will head towards in a certain chunk radius.
 * 
 * Example usage:
 * ```javascript
 * builder.signalToStructureTag("minecraft:village", 100);
 * ```
 */
public "signalToStructureTag"(resourceLocation: $ResourceLocation$$Type, chunkRadius: integer): $EyeOfEnderItemBuilder
/**
 * A function to determine which structure tag the thrown ender eye item will head towards in a 100 chunk radius.
 * 
 * Example usage:
 * ```javascript
 * builder.signalToStructureTag("minecraft:village");
 * ```
 */
public "signalToStructureTag"(resourceLocation: $ResourceLocation$$Type): $EyeOfEnderItemBuilder
/** Sets if the eye of ender triggers the USED_ENDER_EYE Criteria */
public "triggersCriteria"(triggersCriteria: boolean): $EyeOfEnderItemBuilder
}
}

declare module "net.liopyu.entityjs.item.SpawnEggItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"
import { $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $SpawnEggItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type, parent: $BuilderBase$$Type<any>)

/** Sets the background color of the egg item */
public "backgroundColor"(i: integer): $SpawnEggItemBuilder
/** Sets the highlight color of the egg item */
public "highlightColor"(i: integer): $SpawnEggItemBuilder
}
}

declare module "net.liopyu.entityjs.item.ArrowItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ArrowEntityJSBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.entityjs.ArrowEntityJSBuilder"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $ArrowItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type, parent: $ArrowEntityJSBuilder$$Type)

/** Sets if the arrow can be picked up */
public "canBePickedup"(canBePickedUp: boolean): $ArrowItemBuilder
}
}

declare module "net.liopyu.entityjs.item.TridentItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ProjectileItemBuilder } from "net.liopyu.entityjs.item.ProjectileItemBuilder"
import { $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $TridentItemBuilder extends $ProjectileItemBuilder {
constructor(i: $ResourceLocation$$Type, parent: $BuilderBase$$Type<any>)

/** Sets the sound event for the riptide level 1 */
public "setRiptide1Sound"(riptide1Sound: $SoundEvent$$Type): void
/** Sets the sound event for the riptide level 2 */
public "setRiptide2Sound"(riptide2Sound: $SoundEvent$$Type): void
/** Sets the sound event for the riptide level 3 */
public "setRiptide3Sound"(riptide3Sound: $SoundEvent$$Type): void
/** Sets the sound event for throwing the item */
public "setThrowSound"(throwSound: $SoundEvent$$Type): void
set "riptide1Sound"(value: $SoundEvent$$Type)
set "riptide2Sound"(value: $SoundEvent$$Type)
set "riptide3Sound"(value: $SoundEvent$$Type)
set "throwSound"(value: $SoundEvent$$Type)
}
}

declare module "net.liopyu.entityjs.item.ProjectileItemBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"
import { $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $ProjectileItemBuilder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type, parent: $BuilderBase$$Type<any>)

/**
 * Sets whether the item can be thrown.
 * 
 * @param canThrow True if the item can be thrown, false otherwise.
 * 
 * Example usage:
 * ```javascript
 * itemBuilder.canThrow(true);
 * ```
 */
public "canThrow"(canThrow: boolean): $ItemBuilder
/**
 * Sets the inaccuracy of the projectile.
 * 
 * @param projectileInaccuracy The inaccuracy of the projectile.
 * 
 * Example usage:
 * ```javascript
 * itemBuilder.projectileInaccuracy(0.1f);
 * ```
 */
public "projectileInaccuracy"(projectileInaccuracy: float): $ItemBuilder
/**
 * Sets the velocity of the projectile.
 * 
 * @param projectileVelocity The velocity of the projectile.
 * 
 * Example usage:
 * ```javascript
 * itemBuilder.projectileVelocity(1.5f);
 * ```
 */
public "projectileVelocity"(projectileVelocity: float): $ItemBuilder
/**
 * Sets the Z offset for the projectile.
 * 
 * @param projectileZ The Z offset for the projectile.
 * 
 * Example usage:
 * ```javascript
 * itemBuilder.projectileZ(0.5f);
 * ```
 */
public "projectileZ"(projectileZ: float): $ItemBuilder
}
}

