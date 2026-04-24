declare module "com.squoshi.irons_spells_js.events.EntitySpellCastEventJS" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

export class $EntitySpellCastEventJS extends $EntityEventJS {
constructor(entity: $LivingEntity$$Type, spell: $AbstractSpell$$Type, spellLevel: integer, playerMagicData: $MagicData$$Type)

public "getMagicData"(): $MagicData
public "getSpell"(): $AbstractSpell
public "getSpellLevel"(): integer
get "magicData"(): $MagicData
get "spell"(): $AbstractSpell
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.util.ISSKJSUtils$ResourceHolder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Function$$Type } from "java.util.function.Function"

export interface $ISSKJSUtils$ResourceHolder<T extends $ISSKJSUtils$ResourceHolder<T> = $ISSKJSUtils$ResourceHolder<T>> {
"getLocation"(): $ResourceLocation
get "location"(): $ResourceLocation
}

export namespace $ISSKJSUtils$ResourceHolder {
function of<T extends $ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: $Function$$Type<$ResourceLocation$$Type, T>): T
}
export abstract class $ISSKJSUtils$ResourceHolder$$Static<T extends $ISSKJSUtils$ResourceHolder<T> = $ISSKJSUtils$ResourceHolder<T>> implements $ISSKJSUtils$ResourceHolder<T> {
static "of"<T extends $ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: $Function$$Type<$ResourceLocation$$Type, T>): T
}
}

declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type } from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export class $CustomMagicSwordItem$TierBuilder {
constructor()

public "addAttribute"(attribute: string, value: double, operation: $AttributeModifier$Operation$$Type): $CustomMagicSwordItem$TierBuilder
public "setDamage"(damage: float): $CustomMagicSwordItem$TierBuilder
public "setEnchantmentValue"(enchantmentValue: integer): $CustomMagicSwordItem$TierBuilder
public "setRepairIngredient"(repairIngredient: $Supplier$$Type<$Ingredient>): $CustomMagicSwordItem$TierBuilder
public "setSpeed"(speed: float): $CustomMagicSwordItem$TierBuilder
public "setUses"(uses: integer): $CustomMagicSwordItem$TierBuilder
public "useBaseTier"(tier: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type, mergeAttributes: boolean): $CustomMagicSwordItem$TierBuilder
set "damage"(value: float)
set "enchantmentValue"(value: integer)
set "repairIngredient"(value: $Supplier$$Type<$Ingredient>)
set "speed"(value: float)
set "uses"(value: integer)
}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell$CastContext" {
import { $CastSource } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level } from "net.minecraft.world.level.Level"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $CustomSpell$CastContext extends $Record {
public "getCastSource"(): $CastSource
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "castSource"(): $CastSource
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper$SpellStatus" {
import { $Enum } from "java.lang.Enum"

export class $AbstractSpellWrapper$SpellStatus extends $Enum<$AbstractSpellWrapper$SpellStatus> {
static readonly "DISABLED": $AbstractSpellWrapper$SpellStatus
static readonly "ENABLED": $AbstractSpellWrapper$SpellStatus
static readonly "REGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "UNREGISTERED": $AbstractSpellWrapper$SpellStatus

public static "valueOf"(name: string): $AbstractSpellWrapper$SpellStatus
public static "values"(): $AbstractSpellWrapper$SpellStatus[]
}
}

declare module "com.squoshi.irons_spells_js.util.ISSKJSUtils$SpellHolder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"
import { $ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$ResourceHolder"
import { $Function$$Type } from "java.util.function.Function"

export class $ISSKJSUtils$SpellHolder extends $Record implements $ISSKJSUtils$ResourceHolder<$ISSKJSUtils$SpellHolder> {
constructor(getLocation: $ResourceLocation$$Type)

public "getLocation"(): $ResourceLocation
public static "of"(o: any): $ISSKJSUtils$SpellHolder
public static "of"<T extends $ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: $Function$$Type<$ResourceLocation$$Type, T>): T
get "location"(): $ResourceLocation
}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import { $Function$$Type } from "java.util.function.Function"

export class $SpellCastingMobBuilder<T extends ($PathfinderMob & $IAnimatableJS) = ($PathfinderMob & $IAnimatableJS)> extends $PathfinderMobBuilder<T> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets a callback function to determine whether the entity is currently casting.
 * 
 * Example usage:
 * ```javascript
 * spellEntityBuilder.isCasting(entity => {
 *     return true;
 * });
 * ```
 */
public "isCasting"(isCasting: $Function$$Type<$LivingEntity$$Type, any>): $SpellCastingMobBuilder<T>
/**
 * Sets a callback function to be executed when the entity stops casting a spell.
 * 
 * Example usage:
 * ```javascript
 * spellEntityBuilder.onCancelledCast(entity => {
 *     // Custom logic to handle the entity cancelling their spell casts
 * });
 * ```
 */
public "onCancelledCast"(onCancelledCast: $Consumer$$Type<$LivingEntity$$Type>): $SpellCastingMobBuilder<T>
}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$OnAntiMagicContext" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Record } from "java.lang.Record"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $SpellProjectileJS$OnAntiMagicContext extends $Record {
constructor(getMagicData: $MagicData$$Type, getEntity: $Entity$$Type)

public "getEntity"(): $Entity
public "getMagicData"(): $MagicData
get "entity"(): $Entity
get "magicData"(): $MagicData
}
}

declare module "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper" {
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $ISSKJSUtils$SpellHolder, $ISSKJSUtils$SpellHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$SpellHolder"
import { $AbstractSpellWrapper$SpellStatus } from "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper$SpellStatus"

export interface $AbstractSpellWrapper {
}

export namespace $AbstractSpellWrapper {
function checkStatus(spellHolder: $ISSKJSUtils$SpellHolder$$Type): $AbstractSpellWrapper$SpellStatus
function exists(spellHolder: $ISSKJSUtils$SpellHolder$$Type): boolean
function isEnabled(spellHolder: $ISSKJSUtils$SpellHolder$$Type): boolean
function isSpell(o: any): boolean
function of(spellHolder: $ISSKJSUtils$SpellHolder$$Type): $AbstractSpell
function ofHolder(o: any): $ISSKJSUtils$SpellHolder
}
export abstract class $AbstractSpellWrapper$$Static implements $AbstractSpellWrapper {
/**     Returns either `ENABLED`, `DISABLED`, or `UNREGISTERED`, based on the spell inputted. */
static "checkStatus"(spellHolder: $ISSKJSUtils$SpellHolder$$Type): $AbstractSpellWrapper$SpellStatus
/**     Returns whether a spell is registered or not. */
static "exists"(spellHolder: $ISSKJSUtils$SpellHolder$$Type): boolean
/**     Returns whether a spell is enabled in the config or not. */
static "isEnabled"(spellHolder: $ISSKJSUtils$SpellHolder$$Type): boolean
/**     Returns whether an object is a spell or not. */
static "isSpell"(o: any): boolean
/**     Returns a spell registry object by its ResourceLocation. */
static "of"(spellHolder: $ISSKJSUtils$SpellHolder$$Type): $AbstractSpell
/**
 *     Returns a SpellHolder reference for the given spell. Can be passed back into Spell.of().
 *     Useful for passing spell references around without resolving the registry immediately.
 */
static "ofHolder"(o: any): $ISSKJSUtils$SpellHolder
}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellCastingMobBuilder } from "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobBuilder"
import { $SpellCastingMobJS } from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellCastingMobJS"

export class $SpellCastingMobJSBuilder extends $SpellCastingMobBuilder<$SpellCastingMobJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $StaffItem } from "io.redspace.ironsspellbooks.item.weapons.StaffItem"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CustomStaff$Builder$StaffTierBuilder$$Type } from "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierBuilder"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $CustomStaff$Builder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $StaffItem
public "setEnchantmentValue"(enchantmentValue: integer): $CustomStaff$Builder
public "setTier"(tier: $Consumer$$Type<$CustomStaff$Builder$StaffTierBuilder$$Type>): $CustomStaff$Builder
set "enchantmentValue"(value: integer)
set "tier"(value: $Consumer$$Type<$CustomStaff$Builder$StaffTierBuilder$$Type>)
}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CustomSpell$CastClientContext$$Type } from "com.squoshi.irons_spells_js.spell.CustomSpell$CastClientContext"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $RegistryInfo } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $CustomSpell$PreCastConditionsContext$$Type } from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastConditionsContext"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $CastType$$Type } from "io.redspace.ironsspellbooks.api.spells.CastType"
import { $CustomSpell$PreCastClientContext$$Type } from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastClientContext"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CustomSpell } from "com.squoshi.irons_spells_js.spell.CustomSpell"
import { $ISSKJSUtils$SchoolHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$SchoolHolder"
import { $SpellRarity$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $CustomSpell$CastContext$$Type } from "com.squoshi.irons_spells_js.spell.CustomSpell$CastContext"
import { $ISSKJSUtils$SoundEventHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$SoundEventHolder"
import { $CustomSpell$PreCastContext$$Type } from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastContext"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $CustomSpell$Builder extends $BuilderBase<$CustomSpell> {
constructor(i: $ResourceLocation$$Type)

/**     Sets the predicate for whether or not the spell can be crafted by a player. */
public "canBeCraftedBy"(predicate: $Predicate$$Type<$Player$$Type>): $CustomSpell$Builder
/**
 *     Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
 * 
 *     Example: ```js
 *     .checkPreCastConditions(ctx => {
 *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
 *     })
 *     ```
 */
public "checkPreCastConditions"(predicate: $Predicate$$Type<$CustomSpell$PreCastConditionsContext$$Type>): $CustomSpell$Builder
public "createObject"(): $CustomSpell
public "getRegistryType"(): $RegistryInfo<$AbstractSpell>
/**     Sets whether or not the spell needs to be learned before it can be casted. */
public "needsLearning"(needs: boolean): $CustomSpell$Builder
/**     Sets the callback for when the spell is cast. This is what the spell does when it is casted. */
public "onCast"(consumer: $Consumer$$Type<$CustomSpell$CastContext$$Type>): $CustomSpell$Builder
/**     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted. */
public "onClientCast"(consumer: $Consumer$$Type<$CustomSpell$CastClientContext$$Type>): $CustomSpell$Builder
/**     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted. */
public "onPreCast"(consumer: $Consumer$$Type<$CustomSpell$PreCastContext$$Type>): $CustomSpell$Builder
/**     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted. */
public "onPreClientCast"(consumer: $Consumer$$Type<$CustomSpell$PreCastClientContext$$Type>): $CustomSpell$Builder
/**     Sets whether or not the spell can be looted from a loot table. */
public "setAllowLooting"(allow: boolean): $CustomSpell$Builder
/**     Sets the base mana cost. The mana cost per level adds on to this. */
public "setBaseManaCost"(cost: integer): $CustomSpell$Builder
/**     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this. */
public "setBaseSpellPower"(power: integer): $CustomSpell$Builder
/**     Sets the cast finish animation for the spell. */
public "setCastFinishAnimation"(path: string, playOnce: boolean, animatesLegs: boolean): $CustomSpell$Builder
/**     Sets the cast start animation for the spell. */
public "setCastStartAnimation"(path: string, playOnce: boolean, animatesLegs: boolean): $CustomSpell$Builder
/**     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types. */
public "setCastTime"(time: integer): $CustomSpell$Builder
/**     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`. */
public "setCastType"(type: $CastType$$Type): $CustomSpell$Builder
/**     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason. */
public "setCooldownSeconds"(seconds: integer): $CustomSpell$Builder
/**     Sets the sound that the spell will play after it is done casting. */
public "setFinishSound"(soundEvent: $ISSKJSUtils$SoundEventHolder$$Type): $CustomSpell$Builder
/**     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level. */
public "setManaCostPerLevel"(cost: integer): $CustomSpell$Builder
/**     Sets the max level of the spell. Goes up to `10` from `1`. */
public "setMaxLevel"(level: integer): $CustomSpell$Builder
/**     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`. */
public "setMinRarity"(rarity: $SpellRarity$$Type): $CustomSpell$Builder
/**
 *     Sets the school of the spell. The different schools each are a resource location.
 * 
 *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
 *     Another example: `setSchool('irons_spellbooks:blood')`
 */
public "setSchool"(schoolHolder: $ISSKJSUtils$SchoolHolder$$Type): $CustomSpell$Builder
/**     Sets the spell power per level. */
public "setSpellPowerPerLevel"(power: integer): $CustomSpell$Builder
/**     Sets the sound that the spell will play when it starts casting. */
public "setStartSound"(soundEvent: $ISSKJSUtils$SoundEventHolder$$Type): $CustomSpell$Builder
/**     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed. */
public "setUniqueInfo"(info: $BiFunction$$Type<integer, $LivingEntity$$Type, $List<$MutableComponent>>): $CustomSpell$Builder
get "registryType"(): $RegistryInfo<$AbstractSpell>
set "allowLooting"(value: boolean)
set "baseManaCost"(value: integer)
set "baseSpellPower"(value: integer)
set "castTime"(value: integer)
set "castType"(value: $CastType$$Type)
set "cooldownSeconds"(value: integer)
set "finishSound"(value: $ISSKJSUtils$SoundEventHolder$$Type)
set "manaCostPerLevel"(value: integer)
set "maxLevel"(value: integer)
set "minRarity"(value: $SpellRarity$$Type)
set "school"(value: $ISSKJSUtils$SchoolHolder$$Type)
set "spellPowerPerLevel"(value: integer)
set "startSound"(value: $ISSKJSUtils$SoundEventHolder$$Type)
set "uniqueInfo"(value: $BiFunction$$Type<integer, $LivingEntity$$Type, $List<$MutableComponent>>)
}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastConditionsContext" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Record } from "java.lang.Record"
import { $Level } from "net.minecraft.world.level.Level"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $CustomSpell$PreCastConditionsContext extends $Record {
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpell"(): $AbstractSpell
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spell"(): $AbstractSpell
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedServerCastCompleteCallback" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $SpellModificationBuilder$ModifiedServerCastCompleteCallback extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type, getCancelled: boolean)

public "getCancelled"(): boolean
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "cancelled"(): boolean
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.util.ForgeFluidRecipeJS" {
import { $RecipeJS } from "dev.latvian.mods.kubejs.recipe.RecipeJS"

export class $ForgeFluidRecipeJS extends $RecipeJS {
constructor()

public "getMod"(): string
get "mod"(): string
}
}

declare module "com.squoshi.irons_spells_js.entity.attribute.SpellAttributeBuilderJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RegistryInfo } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $SpellAttributeBuilderJS extends $BuilderBase<$Attribute> {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $Attribute
public "getRegistryType"(): $RegistryInfo<$Attribute>
/**         Sets defaultValue, minimumValue, and maximumValue in one call. */
public "range"(defaultValue: double, min: double, max: double): $SpellAttributeBuilderJS
/**         Sets the default value for the attribute. */
public "setDefaultValue"(defaultValue: double): $SpellAttributeBuilderJS
/**         Sets the maximum value for the attribute. */
public "setMaximumValue"(maximumValue: double): $SpellAttributeBuilderJS
/**         Sets the minimum value for the attribute. */
public "setMinimumValue"(minimumValue: double): $SpellAttributeBuilderJS
get "registryType"(): $RegistryInfo<$Attribute>
set "defaultValue"(value: double)
set "maximumValue"(value: double)
set "minimumValue"(value: double)
}
}

declare module "com.squoshi.irons_spells_js.util.ISSKJSUtils$SoundEventHolder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"
import { $ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$ResourceHolder"
import { $Function$$Type } from "java.util.function.Function"

export class $ISSKJSUtils$SoundEventHolder extends $Record implements $ISSKJSUtils$ResourceHolder<$ISSKJSUtils$SoundEventHolder> {
constructor(getLocation: $ResourceLocation$$Type)

public "getLocation"(): $ResourceLocation
public static "of"(o: any): $ISSKJSUtils$SoundEventHolder
public static "of"<T extends $ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: $Function$$Type<$ResourceLocation$$Type, T>): T
get "location"(): $ResourceLocation
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedPreCastConditionsCallback" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $SpellModificationBuilder$ModifiedPreCastConditionsCallback extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type)

public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CustomMagicSwordItem$TierBuilder$$Type } from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder"
import { $CustomMagicSwordItem } from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem"
import { $ISSKJSUtils$SpellHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$SpellHolder"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $CustomMagicSwordItem$Builder extends $ItemBuilder {
constructor(id: $ResourceLocation$$Type)

public "addSpell"(spell: $ISSKJSUtils$SpellHolder$$Type, level: integer): $CustomMagicSwordItem$Builder
public "createObject"(): $CustomMagicSwordItem
public "setTier"(callback: $Consumer$$Type<$CustomMagicSwordItem$TierBuilder$$Type>): $CustomMagicSwordItem$Builder
set "tier"(value: $Consumer$$Type<$CustomMagicSwordItem$TierBuilder$$Type>)
}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastClientContext" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $InteractionHand } from "net.minecraft.world.InteractionHand"
import { $Level } from "net.minecraft.world.level.Level"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $CustomSpell$PreCastClientContext extends $Record {
public "getEntity"(): $LivingEntity
public "getHand"(): $InteractionHand
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "hand"(): $InteractionHand
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellCastingMobJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $AnimatableManager$ControllerRegistrar$$Type } from "software.bernie.geckolib.core.animation.AnimatableManager$ControllerRegistrar"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $SpellCastingMobJSBuilder$$Type } from "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobJSBuilder"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ExtraLivingEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntity"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $WeaponAttributes$$Type } from "net.bettercombat.api.WeaponAttributes"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $ArrayList } from "java.util.ArrayList"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $AnimatableInstanceCache } from "software.bernie.geckolib.core.animatable.instance.AnimatableInstanceCache"
import { $VisionEntityVariant, $VisionEntityVariant$$Type } from "net.lixir.vminus.vision.util.VisionEntityVariant"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.PartEntityJS"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ProjectileWeaponItem$$Type } from "net.minecraft.world.item.ProjectileWeaponItem"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BaseLivingEntityBuilder } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $IMagicEntity } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $SerializableDataTicket$$Type } from "software.bernie.geckolib.network.SerializableDataTicket"

export class $SpellCastingMobJS extends $PathfinderMob implements $IAnimatableJS, $IMagicEntity {
readonly "partEntities": $PartEntityJS<any>[]

constructor(builder: $SpellCastingMobJSBuilder$$Type, pEntityType: $EntityType$$Type<$SpellCastingMobJS$$Type>, pLevel: $Level$$Type)

public "ableToJump"(): boolean
public "alwaysAccepts"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "attack"(hp: float): void
public "bettermobcombat$isCombatAnimationActive"(): boolean
public "bettermobcombat$startUpswing"(weaponAttributes0: $WeaponAttributes$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFireProjectileWeaponPredicate"(projectileWeapon: $ProjectileWeaponItem$$Type): boolean
public "canFireProjectileWeapons"(projectileWeapon: $ProjectileWeaponItem$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canJump"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "entityName"(): string
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "foodEaten"(is: $ItemStack$$Type): void
public "gatherDamagePowers"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimData"<D>(serializableDataTicket0: $SerializableDataTicket$$Type<D>): D
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBoneResetTime"(): double
public "getBuilder"(): $BaseLivingEntityBuilder<any>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityType"(): $EntityType<any>
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getItem"(): $ItemStack
/** @deprecated */
public "getItemBySlot"(equipmentSlot0: $EquipmentSlot$$Type): $ItemStack
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTick"(entity: any): double
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getTypeId"(): string
public static "getWeightedVisionEntityVariants"(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWeaponSwingInProgress"(): boolean
public "jump"(): void
public "m_5639_"(fallDistance: float, pDamageMultiplier: float): integer
public "m_6071_"(pPlayer: $Player$$Type, pHand: $InteractionHand$$Type): $InteractionResult
public "m_6475_"(pDamageSource: $DamageSource$$Type, pDamageAmount: float): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public static "of"(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "onJump"(): void
public "performRangedAttack"(pTarget: $LivingEntity$$Type, pDistanceFactor: float): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "registerControllers"(data: $AnimatableManager$ControllerRegistrar$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "setAnimData"<D>(serializableDataTicket0: $SerializableDataTicket$$Type<D>, d1: D): void
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public static "setFromWeightedList"(livingEntity0: $LivingEntity$$Type): $VisionEntityVariant
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setThisJumping"(value: boolean): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldJump"(): boolean
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startAutoSpinAttack"(pAttackTicks: integer): void
public "stopTriggeredAnimation"(string0: string, string1: string): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "tickPart"(partName: string, offsetX: double, offsetY: double, offsetZ: double): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "triggerAnim"(controllerName: string, animName: string): void
public "triggerAnim"<D>(relatedEntity: $Entity$$Type, instanceId: long, controllerName: string, animName: string): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
get "hasUsedSingleAttack"(): boolean
set "hasUsedSingleAttack"(value: boolean)
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "animation"(): $AnimationApplier
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "boneResetTime"(): double
get "builder"(): $BaseLivingEntityBuilder<any>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityType"(): $EntityType<any>
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "reachDistance"(): double
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "typeId"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
get "weaponSwingInProgress"(): boolean
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "headArmorItem"(value: $ItemStack$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "thisJumping"(value: boolean)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellModificationBuilder$ModifiedPreCastConditionsCallback$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedPreCastConditionsCallback"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellModificationBuilder$ModifiedServerCastCallback$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedServerCastCallback"
import { $SpellModificationBuilder$ModifiedServerPreCastCallback$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedServerPreCastCallback"
import { $AnimationHolder$$Type } from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import { $Function$$Type } from "java.util.function.Function"
import { $SpellModificationBuilder$ModifiedClientPreCastCallback$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedClientPreCastCallback"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $SpellModificationBuilder$ModifiedClientCastCallback$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedClientCastCallback"
import { $ISSKJSUtils$SoundEventHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$SoundEventHolder"
import { $SpellModificationBuilder$ModifiedServerCastCompleteCallback$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedServerCastCompleteCallback"

export class $SpellModificationBuilder extends $EventJS {
constructor(spellResource: $ResourceLocation$$Type)

public "getSpell"(): $AbstractSpell
public "setCastFinishAnimation"(animationHolder: $AnimationHolder$$Type): $SpellModificationBuilder
public "setCastStartAnimation"(animationHolder: $AnimationHolder$$Type): $SpellModificationBuilder
public "setCastTimeCallback"(callback: $Function$$Type<integer, any>): $SpellModificationBuilder
public "setClientCastCallback"(cancelOriginal: boolean, setClientCastCallback: $Consumer$$Type<$SpellModificationBuilder$ModifiedClientCastCallback$$Type>): $SpellModificationBuilder
public "setClientPreCastCallback"(cancelOriginal: boolean, setClientPreCastCallback: $Consumer$$Type<$SpellModificationBuilder$ModifiedClientPreCastCallback$$Type>): $SpellModificationBuilder
public "setFinishSound"(finishSound: $ISSKJSUtils$SoundEventHolder$$Type): $SpellModificationBuilder
public "setPreCastConditionsCallback"(setPreCastConditionsCallback: $Predicate$$Type<$SpellModificationBuilder$ModifiedPreCastConditionsCallback$$Type>): $SpellModificationBuilder
public "setRecastCount"(recastCount: integer): $SpellModificationBuilder
public "setServerCastCallback"(cancelOriginal: boolean, setServerCastCallback: $Consumer$$Type<$SpellModificationBuilder$ModifiedServerCastCallback$$Type>): $SpellModificationBuilder
public "setServerCastCompleteCallback"(cancelOriginal: boolean, setServerCastCompleteCallback: $Consumer$$Type<$SpellModificationBuilder$ModifiedServerCastCompleteCallback$$Type>): $SpellModificationBuilder
public "setServerPreCastCallback"(cancelOriginal: boolean, setServerPreCastCallback: $Consumer$$Type<$SpellModificationBuilder$ModifiedServerPreCastCallback$$Type>): $SpellModificationBuilder
public "setStartSound"(startSound: $ISSKJSUtils$SoundEventHolder$$Type): $SpellModificationBuilder
get "spell"(): $AbstractSpell
set "castFinishAnimation"(value: $AnimationHolder$$Type)
set "castStartAnimation"(value: $AnimationHolder$$Type)
set "castTimeCallback"(value: $Function$$Type<integer, any>)
set "finishSound"(value: $ISSKJSUtils$SoundEventHolder$$Type)
set "preCastConditionsCallback"(value: $Predicate$$Type<$SpellModificationBuilder$ModifiedPreCastConditionsCallback$$Type>)
set "recastCount"(value: integer)
set "startSound"(value: $ISSKJSUtils$SoundEventHolder$$Type)
}
}

declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierEnum" {
import { $Enum } from "java.lang.Enum"
import { $StaffTier } from "io.redspace.ironsspellbooks.item.weapons.StaffTier"

export class $CustomStaff$Builder$StaffTierEnum extends $Enum<$CustomStaff$Builder$StaffTierEnum> {
static readonly "ARTIFICER": $CustomStaff$Builder$StaffTierEnum
static readonly "BLOOD_STAFF": $CustomStaff$Builder$StaffTierEnum
static readonly "GRAYBEARD": $CustomStaff$Builder$StaffTierEnum
static readonly "ICE_STAFF": $CustomStaff$Builder$StaffTierEnum
static readonly "LIGHTNING_ROD": $CustomStaff$Builder$StaffTierEnum

public "getTier"(): $StaffTier
public static "valueOf"(name: string): $CustomStaff$Builder$StaffTierEnum
public static "values"(): $CustomStaff$Builder$StaffTierEnum[]
get "tier"(): $StaffTier
}
}

declare module "com.squoshi.irons_spells_js.util.ServerPlayerISSKJS" {
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $ServerPlayerISSKJS {
/**
 *     Returns the player's magic data. Useful for changing the player's mana, or checking if the player is casting a spell.
 *     Changing the player's mana directly will not sync with the client. Use `syncMana()` on the player to sync the mana with the client.
 */
"getMagicData"(): $MagicData
/**     Synchronizes the player's mana with the client. Call this whenever you change a player's mana in a non-traditional way. */
"syncMana"(): void
get "magicData"(): $MagicData
}

export namespace $ServerPlayerISSKJS {
const probejs$$marker: never
}
export abstract class $ServerPlayerISSKJS$$Static implements $ServerPlayerISSKJS {
}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellProjectileJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $SpellProjectileJS$OnAntiMagicContext$$Type } from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$OnAntiMagicContext"
import { $SpellProjectileJS$ImpactParticleContext$$Type } from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$ImpactParticleContext"
import { $SpellProjectileJS, $SpellProjectileJS$$Type } from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS"
import { $ProjectileEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityBuilder"

export class $SpellProjectileJSBuilder extends $ProjectileEntityBuilder<$SpellProjectileJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * A consumer determining the impact particles for the spell.
 * 
 * Example usage:
 * ```javascript
 * builder.impactParticles(context => {
 *     const {x, y, z, entity} = context
 *     // Logic for spawning impact particles
 * });
 * ```
 */
public "impactParticles"(impactParticles: $Consumer$$Type<$SpellProjectileJS$ImpactParticleContext$$Type>): $SpellProjectileJSBuilder
public "onAntiMagic"(onAntiMagic: $Consumer$$Type<$SpellProjectileJS$OnAntiMagicContext$$Type>): $SpellProjectileJSBuilder
/**
 * Sets the impact sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * builder.setImpactSound("minecraft:entity.generic.swim");
 * ```
 */
public "setImpactSound"(sound: any): $SpellProjectileJSBuilder
/**
 * A consumer determining the trailing particles behind the spell.
 * 
 * Example usage:
 * ```javascript
 * builder.trailParticles(entity => {
 *     // Logic for spawning trailing particles
 * });
 * ```
 */
public "trailParticles"(trailParticles: $Consumer$$Type<$SpellProjectileJS$$Type>): $SpellProjectileJSBuilder
set "impactSound"(value: any)
}
}

declare module "com.squoshi.irons_spells_js.events.SpellPreCastEventJS" {
import { $CastSource } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $SpellPreCastEvent$$Type } from "io.redspace.ironsspellbooks.api.events.SpellPreCastEvent"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

export class $SpellPreCastEventJS extends $PlayerEventJS {
constructor(event: $SpellPreCastEvent$$Type)

/**     Returns the cast source. */
public "getCastSource"(): $CastSource
/**     Returns the school type of the spell that was cast. */
public "getSchoolType"(): $SchoolType
/**     Returns the spell ID of the spell that was cast. */
public "getSpellId"(): string
/**     Returns the new spell level of the spell that was cast. */
public "getSpellLevel"(): integer
/**     Returns if the event is cancelable. */
public "isCancelable"(): boolean
get "castSource"(): $CastSource
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
get "cancelable"(): boolean
}
}

declare module "com.squoshi.irons_spells_js.events.SpellOnCastEventJS" {
import { $CastSource } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $SpellOnCastEvent$$Type } from "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"

export class $SpellOnCastEventJS extends $PlayerEventJS {
constructor(event: $SpellOnCastEvent$$Type)

/**     Returns the cast source. */
public "getCastSource"(): $CastSource
/**     Returns the new mana cost. */
public "getManaCost"(): integer
/**     Returns the original mana cost. */
public "getOriginalManaCost"(): integer
/**     Returns the original spell level of the spell that was cast. */
public "getOriginalSpellLevel"(): integer
/**     Returns the school type of the spell that was cast. */
public "getSchoolType"(): $SchoolType
/**     Returns the spell ID of the spell that was cast. */
public "getSpellId"(): string
/**     Returns the new spell level of the spell that was cast. */
public "getSpellLevel"(): integer
/**     Returns if the event is cancelable. */
public "isCancelable"(): boolean
/**     Sets the new mana cost. */
public "setManaCost"(manaCost: integer): void
/**     Sets the new spell level of the spell that was cast. */
public "setSpellLevel"(spellLevel: integer): void
get "castSource"(): $CastSource
get "manaCost"(): integer
get "originalManaCost"(): integer
get "originalSpellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
get "cancelable"(): boolean
set "manaCost"(value: integer)
set "spellLevel"(value: integer)
}
}

declare module "com.squoshi.irons_spells_js.util.ISpellModify" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellModificationBuilder } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder"

export interface $ISpellModify {
"irons_spells_js$getBuilder"(): $SpellModificationBuilder
"irons_spells_js$setBuilder"(resourceLocation: $ResourceLocation$$Type): void
}

export namespace $ISpellModify {
const probejs$$marker: never
}
export abstract class $ISpellModify$$Static implements $ISpellModify {
}
}

declare module "com.squoshi.irons_spells_js.events.EntitySpellPreCastEventJS" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $EntityEventJS } from "dev.latvian.mods.kubejs.entity.EntityEventJS"

export class $EntitySpellPreCastEventJS extends $EntityEventJS {
constructor(entity: $LivingEntity$$Type, spell: $AbstractSpell$$Type, spellLevel: integer, playerMagicData: $MagicData$$Type)

public "getMagicData"(): $MagicData
public "getSpell"(): $AbstractSpell
public "getSpellLevel"(): integer
get "magicData"(): $MagicData
get "spell"(): $AbstractSpell
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.events.SpellSelectionEventJS" {
import { $SpellSelectionManager$SpellSelectionEvent$$Type } from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent"
import { $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $SpellSelectionManager } from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"

export class $SpellSelectionEventJS extends $PlayerEventJS {
constructor(event: $SpellSelectionManager$SpellSelectionEvent$$Type)

/**     Adds spell option to the end of a player's spell bar. */
public "addSelectionOption"(spellData: $SpellData$$Type, slotId: string, localSlotIndex: integer): void
/**     Adds spell option to the end of a player's spell bar. */
public "addSelectionOption"(spellData: $SpellData$$Type, slotId: string, localSlotIndex: integer, globalIndex: integer): void
public "getManager"(): $SpellSelectionManager
/**     Returns if the event is cancelable. */
public "isCancelable"(): boolean
get "manager"(): $SpellSelectionManager
get "cancelable"(): boolean
}
}

declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $CustomMagicSwordItem$Builder$$Type } from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$Builder"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $MagicSwordItem } from "io.redspace.ironsspellbooks.api.item.weapons.MagicSwordItem"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $CustomMagicSwordItem extends $MagicSwordItem {
constructor(b: $CustomMagicSwordItem$Builder$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "allowContinuingBlockBreaking"(player: $Player$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "allowNbtUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "dragonlib$getCustomEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "dragonlib$tickArmor"(stack: $ItemStack$$Type, player: $Player$$Type): void
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributeModifiers"(stack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getRecipeRemainder"(stack: $ItemStack$$Type): $ItemStack
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isSuitableFor"(stack: $ItemStack$$Type, state: $BlockState$$Type): boolean
public "kjs$getMutableAttributeMap"(): $Multimap<$Attribute, $AttributeModifier>
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "of"(item0: $Item$$Type): $ItemDefinitionDuck
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "removeAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "vMinus$update"(): void
get "creativeTab"(): string
get "digSpeed"(): float
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "com.squoshi.irons_spells_js.util.ISSKJSUtils$SchoolHolder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"
import { $ISSKJSUtils$ResourceHolder, $ISSKJSUtils$ResourceHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$ResourceHolder"
import { $Function$$Type } from "java.util.function.Function"

export class $ISSKJSUtils$SchoolHolder extends $Record implements $ISSKJSUtils$ResourceHolder<$ISSKJSUtils$SchoolHolder> {
constructor(getLocation: $ResourceLocation$$Type)

public "getLocation"(): $ResourceLocation
public static "of"(o: any): $ISSKJSUtils$SchoolHolder
public static "of"<T extends $ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: $Function$$Type<$ResourceLocation$$Type, T>): T
get "location"(): $ResourceLocation
}
}

declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum" {
import { $Enum } from "java.lang.Enum"

export class $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum extends $Enum<$CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum> {
static readonly "AMETHYST_RAPIER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "CLAYMORE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "CRYSTAL_MAGEHUNTER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DECREPIT_FLAMBERGE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DECREPIT_SCYTHE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DREADSWORD": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "HELLRAZOR": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "LEGIONNAIRE_FLAMBERGE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "METAL_MAGEHUNTER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "MISERY": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "SPELLBREAKER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "TRUTHSEEKER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum

public static "valueOf"(name: string): $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
public static "values"(): $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum[]
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedClientPreCastCallback" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $InteractionHand, $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $SpellModificationBuilder$ModifiedClientPreCastCallback extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getHand: $InteractionHand$$Type, getPlayerMagicData: $MagicData$$Type)

public "getEntity"(): $LivingEntity
public "getHand"(): $InteractionHand
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "hand"(): $InteractionHand
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedServerCastCallback" {
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $SpellModificationBuilder$ModifiedServerCastCallback extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getCastSource: $CastSource$$Type, getPlayerMagicData: $MagicData$$Type)

public "getCastSource"(): $CastSource
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "castSource"(): $CastSource
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$ImpactParticleContext" {
import { $SpellProjectileJS, $SpellProjectileJS$$Type } from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS"

export class $SpellProjectileJS$ImpactParticleContext {
readonly "entity": $SpellProjectileJS
readonly "x": double
readonly "y": double
readonly "z": double

constructor(entity: $SpellProjectileJS$$Type, x: double, y: double, z: double)

}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell" {
import { $CustomSpell$Builder$$Type } from "com.squoshi.irons_spells_js.spell.CustomSpell$Builder"
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $CustomSpell extends $AbstractSpell {
constructor(b: $CustomSpell$Builder$$Type)

}
}

declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellProjectileJSBuilder, $SpellProjectileJSBuilder$$Type } from "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellProjectileJSBuilder"
import { $AbstractMagicProjectile, $AbstractMagicProjectile$$Type } from "io.redspace.ironsspellbooks.entity.spells.AbstractMagicProjectile"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Direction } from "net.minecraft.core.Direction"
import { $IProjectileEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.IProjectileEntityJS"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AntiMagicSusceptible } from "io.redspace.ironsspellbooks.entity.mobs.AntiMagicSusceptible"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $SpellProjectileJS extends $AbstractMagicProjectile implements $IProjectileEntityJS, $AntiMagicSusceptible {
constructor(builder: $SpellProjectileJSBuilder$$Type, pEntityType: $EntityType$$Type<$AbstractMagicProjectile$$Type>, pLevel: $Level$$Type)
constructor(entityType: $EntityType$$Type<$AbstractMagicProjectile$$Type>, levelIn: $Level$$Type, shooter: $LivingEntity$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "entityName"(): string
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getClassification"(boolean0: boolean): $MobCategory
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public "m_7378_"(pCompound: $CompoundTag$$Type): void
public "m_7380_"(pCompound: $CompoundTag$$Type): void
public static "majruszlibrary$getProjectileArrow"(entity0: $Entity$$Type): $ItemStack
public static "majruszlibrary$getProjectileWeapon"(entity0: $Entity$$Type): $ItemStack
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setSpeed"(speed: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
get "builder"(): $SpellProjectileJSBuilder
set "builder"(value: $SpellProjectileJSBuilder$$Type)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "speed"(value: float)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "com.squoshi.irons_spells_js.util.ClientInitISSKJS" {
import { $Item$$Type } from "net.minecraft.world.item.Item"

export interface $ClientInitISSKJS {
/**     When added, holding the item will show your mana bar. */
"addManaBarShowingItem"(item: $Item$$Type): void
}

export namespace $ClientInitISSKJS {
const probejs$$marker: never
}
export abstract class $ClientInitISSKJS$$Static implements $ClientInitISSKJS {
}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell$CastClientContext" {
import { $ICastData } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level } from "net.minecraft.world.level.Level"

export class $CustomSpell$CastClientContext extends $Record {
public "getCastData"(): $ICastData
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getSpellLevel"(): integer
get "castData"(): $ICastData
get "entity"(): $LivingEntity
get "level"(): $Level
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedServerPreCastCallback" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $SpellModificationBuilder$ModifiedServerPreCastCallback extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type)

public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.spell.school.SchoolTypeJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $RegistryInfo } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $SchoolTypeJSBuilder extends $BuilderBase<$SchoolType> {
constructor(i: $ResourceLocation$$Type)

/**     Sets the focus item tags for this school. */
public "addFocusItemTags"(...focusTags: string[]): $SchoolTypeJSBuilder
/**         Adds specific items to the focus item list for this school. */
public "addFocusItems"(...items: $Item$$Type[]): $SchoolTypeJSBuilder
/**         Disables looting. */
public "disableLooting"(): $SchoolTypeJSBuilder
public "getRegistryType"(): $RegistryInfo<$SchoolType>
/**         Sets require learning to true. */
public "requiresLearning"(): $SchoolTypeJSBuilder
/**
 *         Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
 *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
 */
public "setDamageType"(damageType: $ResourceLocation$$Type): $SchoolTypeJSBuilder
/**         Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent. */
public "setDefaultCastSound"(defaultCastSound: string): $SchoolTypeJSBuilder
/**
 *     Sets the ID of the item tag used for the focus item.
 *     Default tag is `${mod_id}:${school_name}_focus`
 */
public "setDefaultFocusTag"(tag: string): $SchoolTypeJSBuilder
/**
 *         Sets the ID of the item tag used for the focus item.
 *         Focus items need the `"irons_spellbooks:school_focus"` tag, as well as the tag specified here.
 *         Deprecated: Use `setDefaultFocusTag` instead.
 * 
 * @deprecated
 */
public "setFocus"(focus: $ResourceLocation$$Type): $SchoolTypeJSBuilder
/**         Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`. */
public "setName"(name: $Component$$Type): $SchoolTypeJSBuilder
/**         Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute. */
public "setPowerAttribute"(powerAttribute: string): $SchoolTypeJSBuilder
/**         Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute. */
public "setResistanceAttribute"(resistanceAttribute: string): $SchoolTypeJSBuilder
get "registryType"(): $RegistryInfo<$SchoolType>
set "damageType"(value: $ResourceLocation$$Type)
set "defaultCastSound"(value: string)
set "defaultFocusTag"(value: string)
set "focus"(value: $ResourceLocation$$Type)
set "name"(value: $Component$$Type)
set "powerAttribute"(value: string)
set "resistanceAttribute"(value: string)
}
}

declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierBuilder" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $CustomStaff$Builder$StaffTierEnum$$Type } from "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierEnum"

export class $CustomStaff$Builder$StaffTierBuilder {
constructor()

public "addAttribute"(attribute: string, value: double, operation: $AttributeModifier$Operation$$Type): $CustomStaff$Builder$StaffTierBuilder
public "setDamage"(damage: float): $CustomStaff$Builder$StaffTierBuilder
public "setSpeed"(speed: float): $CustomStaff$Builder$StaffTierBuilder
public "useBaseTier"(tier: $CustomStaff$Builder$StaffTierEnum$$Type, mergeAttributes: boolean): $CustomStaff$Builder$StaffTierBuilder
set "damage"(value: float)
set "speed"(value: float)
}
}

declare module "com.squoshi.irons_spells_js.events.ManaRegenEventJS" {
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ManaRegenEventJS extends $PlayerEventJS {
constructor(player: $Player$$Type, mana: float)

public "getAmount"(): float
public "setAmount"(mana: float): void
get "amount"(): float
set "amount"(value: float)
}
}

declare module "com.squoshi.irons_spells_js.item.CustomSpellBook$Builder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SpellBook } from "io.redspace.ironsspellbooks.item.SpellBook"
import { $ISSKJSUtils$SpellHolder$$Type } from "com.squoshi.irons_spells_js.util.ISSKJSUtils$SpellHolder"
import { $ItemBuilder } from "dev.latvian.mods.kubejs.item.ItemBuilder"

export class $CustomSpellBook$Builder extends $ItemBuilder {
constructor(i: $ResourceLocation$$Type)

/**
 * Adds a default attribute to the item. Can be used multiple times.
 * The modifier operation can be either `ADDITION`, `MULTIPLY_BASE` or `MULTIPLY_TOTAL`.
 */
public "addAttribute"(attribute: string, value: double, operation: $AttributeModifier$Operation$$Type): $CustomSpellBook$Builder
/**
 * Adds a default spell to the item. Can be used multiple times. It takes a spell ID (or a spell object) and the spell level.
 * This will turn into Unique Spellbook.
 */
public "addSpell"(spell: $ISSKJSUtils$SpellHolder$$Type, spellLevel: integer): $CustomSpellBook$Builder
public "createObject"(): $SpellBook
/** Sets an affinity that will make this spell a +1 level boost. */
public "setAffinitySpell"(affinitySpell: string): $CustomSpellBook$Builder
/** Sets the maximum amount of spell slots the spell book can have. */
public "setMaxSpellSlots"(maxSpellSlots: integer): $CustomSpellBook$Builder
set "affinitySpell"(value: string)
set "maxSpellSlots"(value: integer)
}
}

declare module "com.squoshi.irons_spells_js.events.ChangeManaEventJS" {
import { $PlayerEventJS } from "dev.latvian.mods.kubejs.player.PlayerEventJS"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $ChangeManaEvent$$Type } from "io.redspace.ironsspellbooks.api.events.ChangeManaEvent"

export class $ChangeManaEventJS extends $PlayerEventJS {
constructor(event: $ChangeManaEvent$$Type)

/**     Returns the player's current MagicData. */
public "getMagicData"(): $MagicData
/**     Returns the float mana value that the value changed to after it was changed. */
public "getNewMana"(): float
/**     Returns the float mana value that the value was before it was changed. */
public "getOldMana"(): float
/**     Changes the value that the mana will change to during the event. */
public "setNewMana"(newMana: float): void
get "magicData"(): $MagicData
get "newMana"(): float
get "oldMana"(): float
set "newMana"(value: float)
}
}

declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastContext" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level } from "net.minecraft.world.level.Level"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export class $CustomSpell$PreCastContext extends $Record {
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getPlayerMagicData"(): $MagicData
public "getSpellLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): $Level
get "playerMagicData"(): $MagicData
get "spellLevel"(): integer
}
}

declare module "com.squoshi.irons_spells_js.events.SpellModificationEventJS" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $SpellModificationBuilder$$Type } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder"
import { $Map } from "java.util.Map"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $SpellModificationEventJS extends $EventJS {
static readonly "eventMap": $Map<$ResourceLocation, $SpellModificationEventJS>

constructor(spellResource: $ResourceLocation$$Type)

public static "getOrCreate"(spellResource: $ResourceLocation$$Type): $SpellModificationEventJS
public "modify"(spell: $AbstractSpell$$Type, modifyBuilder: $Consumer$$Type<$SpellModificationBuilder$$Type>): void
}
}

declare module "com.squoshi.irons_spells_js.spell.SpellModificationBuilder$ModifiedClientCastCallback" {
import { $ICastData, $ICastData$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Record } from "java.lang.Record"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"

export class $SpellModificationBuilder$ModifiedClientCastCallback extends $Record {
constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getCastData: $ICastData$$Type)

public "getCastData"(): $ICastData
public "getEntity"(): $LivingEntity
public "getLevel"(): $Level
public "getSpellLevel"(): integer
get "castData"(): $ICastData
get "entity"(): $LivingEntity
get "level"(): $Level
get "spellLevel"(): integer
}
}

