declare module "com.Polarice3.Goety.common.events.spell.StopMagicEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISpell, $ISpell$$Type } from "com.Polarice3.Goety.api.magic.ISpell"

export class $StopMagicEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, iSpell2: $ISpell$$Type, int3: integer, int4: integer)

public "castingTime"(): integer
public "getSpell"(): $ISpell
public "getTimeRemaining"(): integer
public "getUseItem"(): $ItemStack
get "spell"(): $ISpell
get "timeRemaining"(): integer
get "useItem"(): $ItemStack
}
}

declare module "com.Polarice3.Goety.common.events.spell.ChangeSoulEnergyEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ChangeSoulEnergyEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

public "getSoulChange"(): integer
public "setSoulChange"(int0: integer): void
get "soulChange"(): integer
set "soulChange"(value: integer)
}
}

declare module "com.Polarice3.Goety.api.magic.ISpell" {
import { $SpellStat, $SpellStat$$Type } from "com.Polarice3.Goety.common.magic.SpellStat"
import { $Enchantment } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $EntityHitResult } from "net.minecraft.world.phys.EntityHitResult"
import { $MobEffectInstance } from "net.minecraft.world.effect.MobEffectInstance"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $ColorUtil } from "com.Polarice3.Goety.utils.ColorUtil"
import { $HitResult } from "net.minecraft.world.phys.HitResult"
import { $List } from "java.util.List"
import { $HumanoidModel$ArmPose } from "net.minecraft.client.model.HumanoidModel$ArmPose"
import { $SpellType, $SpellType$$Type } from "com.Polarice3.Goety.api.magic.SpellType"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export interface $ISpell {
"AbyssSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"CastingSound"(livingEntity0: $LivingEntity$$Type): $SoundEvent
"CastingSound"(): $SoundEvent
"FrostSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"GeoSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"NecroSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"NetherSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"ReduceCastTime"(livingEntity0: $LivingEntity$$Type): boolean
"SoulCalculation"(livingEntity0: $LivingEntity$$Type): integer
"SoulCostUp"(livingEntity0: $LivingEntity$$Type): integer
"SoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"SpellResult"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, spellStat3: $SpellStat$$Type): void
"StormSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"VoidSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"WildSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"WindSoulDiscount"(livingEntity0: $LivingEntity$$Type): boolean
"acceptedEnchantments"(): $List<$Enchantment>
"blockResult"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, double2: double): $BlockHitResult
"castDuration"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): integer
"castingPitch"(): float
"castingVolume"(): float
"conditionsMet"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, spellStat2: $SpellStat$$Type): boolean
"conditionsMet"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type): boolean
"defaultCastDuration"(): integer
"defaultSoulCost"(): integer
"defaultSpellCooldown"(): integer
"defaultStats"(): $SpellStat
"entityResult"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, int2: integer, double3: double): $EntityHitResult
"getParticle"(livingEntity0: $LivingEntity$$Type): $ParticleOptions
/** Client only, do not use in server scripts */
"getPose"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, spellStat2: $SpellStat$$Type): $HumanoidModel$ArmPose
"getSpellType"(): $SpellType
"getTarget"(livingEntity0: $LivingEntity$$Type): $LivingEntity
"hasCustomCooldown"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type, int3: integer): boolean
"loopSound"(livingEntity0: $LivingEntity$$Type): $SoundEvent
"particleColors"(livingEntity0: $LivingEntity$$Type): $ColorUtil
"rayTrace"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, int2: integer, double3: double): $HitResult
"soulCost"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): integer
"spellCooldown"(livingEntity0: $LivingEntity$$Type): integer
/** @deprecated */
"spellCooldown"(): integer
"startSpell"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, spellStat3: $SpellStat$$Type): void
"stopSpell"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, itemStack3: $ItemStack$$Type, int4: integer, spellStat5: $SpellStat$$Type): void
"summonDownEffect"(livingEntity0: $LivingEntity$$Type): $MobEffectInstance
"typeStaff"(itemStack0: $ItemStack$$Type, spellType1: $SpellType$$Type): boolean
"useParticle"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): void
"useSpell"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer, spellStat4: $SpellStat$$Type): void
get "spellType"(): $SpellType
}

export namespace $ISpell {
const probejs$$marker: never
}
export abstract class $ISpell$$Static implements $ISpell {
}
}

declare module "com.Polarice3.Goety.common.events.spell.ChangeSoulEnergyEvent$Loss" {
import { $ChangeSoulEnergyEvent } from "com.Polarice3.Goety.common.events.spell.ChangeSoulEnergyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ChangeSoulEnergyEvent$Loss extends $ChangeSoulEnergyEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

}
}

declare module "com.Polarice3.Goety.utils.ColorUtil" {
import { $MapColor$$Type } from "net.minecraft.world.level.material.MapColor"
import { $ChatFormatting$$Type } from "net.minecraft.ChatFormatting"

export class $ColorUtil {
static "BLACK": $ColorUtil
static "WHITE": $ColorUtil
"alpha": float
"blue": float
"green": float
"red": float

constructor(chatFormatting0: $ChatFormatting$$Type)
constructor(mapColor0: $MapColor$$Type)
constructor(int0: integer)
constructor(float0: float, float1: float, float2: float, float3: float)
constructor(float0: float, float1: float, float2: float)
constructor(int0: integer, int1: integer, int2: integer, float3: float)

public "alpha"(): float
public "blue"(): float
public "colorCode"(float0: float): integer
public "green"(): float
public "red"(): float
}
}

declare module "com.Polarice3.Goety.common.events.spell.CastMagicEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ISpell, $ISpell$$Type } from "com.Polarice3.Goety.api.magic.ISpell"

export class $CastMagicEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, iSpell1: $ISpell$$Type)

public "getSpell"(): $ISpell
public "setSpell"(iSpell0: $ISpell$$Type): void
get "spell"(): $ISpell
set "spell"(value: $ISpell$$Type)
}
}

declare module "com.Polarice3.Goety.common.events.spell.StartMagicEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISpell, $ISpell$$Type } from "com.Polarice3.Goety.api.magic.ISpell"

export class $StartMagicEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, iSpell2: $ISpell$$Type)

public "getSpell"(): $ISpell
public "getUseItem"(): $ItemStack
public "setSpell"(iSpell0: $ISpell$$Type): void
get "spell"(): $ISpell
get "useItem"(): $ItemStack
set "spell"(value: $ISpell$$Type)
}
}

declare module "com.Polarice3.Goety.common.events.spell.ChangeSoulEnergyEvent$Gain" {
import { $ChangeSoulEnergyEvent } from "com.Polarice3.Goety.common.events.spell.ChangeSoulEnergyEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ChangeSoulEnergyEvent$Gain extends $ChangeSoulEnergyEvent {
constructor()
constructor(player0: $Player$$Type, int1: integer)

}
}

declare module "com.Polarice3.Goety.api.magic.SpellType" {
import { $IExtensibleEnum } from "net.minecraftforge.common.IExtensibleEnum"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $SpellType extends $Enum<$SpellType> implements $IExtensibleEnum {
static readonly "ABYSS": $SpellType
static readonly "FROST": $SpellType
static readonly "GEOMANCY": $SpellType
static readonly "ILL": $SpellType
static readonly "NECROMANCY": $SpellType
static readonly "NETHER": $SpellType
static readonly "NONE": $SpellType
static readonly "STORM": $SpellType
static readonly "VOID": $SpellType
static readonly "WILD": $SpellType
static readonly "WIND": $SpellType

public static "create"(string0: string, string1: string): $SpellType
public static "createCodecForExtensibleEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, E>): $Codec<E>
public "getBaseName"(): string
public "getName"(): $Component
/** @deprecated */
public "init"(): void
public static "valueOf"(string0: string): $SpellType
public static "values"(): $SpellType[]
get "baseName"(): string
get "name"(): $Component
}
}

declare module "com.Polarice3.Goety.mixin.MobAccessor" {
import { $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"

export interface $MobAccessor {
"setSpawnType"(mobSpawnType0: $MobSpawnType$$Type): void
set "spawnType"(value: $MobSpawnType$$Type)
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export abstract class $MobAccessor$$Static implements $MobAccessor {
}
}

declare module "com.Polarice3.Goety.mixin.FireBlockAccessor" {
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

export interface $FireBlockAccessor {
"callSetFlammable"(block0: $Block$$Type, int1: integer, int2: integer): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
export abstract class $FireBlockAccessor$$Static implements $FireBlockAccessor {
}
}

declare module "com.Polarice3.Goety.common.events.spell.CastingMagicEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISpell, $ISpell$$Type } from "com.Polarice3.Goety.api.magic.ISpell"

export class $CastingMagicEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, iSpell2: $ISpell$$Type, int3: integer)

public "castingTime"(): integer
public "getSpell"(): $ISpell
public "getUseItem"(): $ItemStack
public "setSpell"(iSpell0: $ISpell$$Type): void
get "spell"(): $ISpell
get "useItem"(): $ItemStack
set "spell"(value: $ISpell$$Type)
}
}

declare module "com.Polarice3.Goety.mixin.StructureProcessorAccessor" {
import { $StructureProcessorType } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {
"callGetType"(): $StructureProcessorType<any>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export abstract class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {
}
}

declare module "com.Polarice3.Goety.common.events.spell.TouchMagicEvent" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ISpell, $ISpell$$Type } from "com.Polarice3.Goety.api.magic.ISpell"

export class $TouchMagicEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, iSpell2: $ISpell$$Type)

public "getSpell"(): $ISpell
public "getUseItem"(): $ItemStack
public "setSpell"(iSpell0: $ISpell$$Type): void
get "spell"(): $ISpell
get "useItem"(): $ItemStack
set "spell"(value: $ISpell$$Type)
}
}

declare module "com.Polarice3.Goety.common.magic.SpellStat" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SpellStat {
constructor(int0: integer, int1: integer, int2: integer, double3: double, int4: integer, float5: float)

public "getBurning"(): integer
public "getDuration"(): integer
public "getPotency"(): integer
public "getRadius"(): double
public "getRange"(): integer
public "getVelocity"(): float
public "increaseBurning"(int0: integer): $SpellStat
public "increaseDuration"(int0: integer): $SpellStat
public "increasePotency"(int0: integer): $SpellStat
public "increaseRadius"(double0: double): $SpellStat
public "increaseRange"(int0: integer): $SpellStat
public "increaseVelocity"(float0: float): $SpellStat
public "setBurning"(int0: integer): $SpellStat
public "setDuration"(int0: integer): $SpellStat
public "setPotency"(int0: integer): $SpellStat
public "setRadius"(double0: double): $SpellStat
public "setRange"(int0: integer): $SpellStat
public "setVelocity"(float0: float): $SpellStat
get "burning"(): integer
set "burning"(value: integer)
get "duration"(): integer
set "duration"(value: integer)
get "potency"(): integer
set "potency"(value: integer)
get "radius"(): double
set "radius"(value: double)
get "range"(): integer
set "range"(value: integer)
get "velocity"(): float
set "velocity"(value: float)
}
}

declare module "com.Polarice3.Goety.mixin.PlayerRendererAccessor" {
import { $AbstractClientPlayer$$Type } from "net.minecraft.client.player.AbstractClientPlayer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $PlayerRendererAccessor {
"limbs_setupRotations"(abstractClientPlayer0: $AbstractClientPlayer$$Type, poseStack1: $PoseStack$$Type, float2: float, float3: float, float4: float): void
}

export namespace $PlayerRendererAccessor {
const probejs$$marker: never
}
export abstract class $PlayerRendererAccessor$$Static implements $PlayerRendererAccessor {
}
}

declare module "com.Polarice3.Goety.common.events.spell.BlockMagicEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockEvent } from "net.minecraftforge.event.level.BlockEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $LevelAccessor$$Type } from "net.minecraft.world.level.LevelAccessor"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ISpell, $ISpell$$Type } from "com.Polarice3.Goety.api.magic.ISpell"

export class $BlockMagicEvent extends $BlockEvent {
constructor()
constructor(levelAccessor0: $LevelAccessor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, iSpell3: $ISpell$$Type, direction4: $Direction$$Type, livingEntity5: $LivingEntity$$Type)

public "getCaster"(): $LivingEntity
public "getDirection"(): $Direction
public "getSpell"(): $ISpell
public "setSpell"(iSpell0: $ISpell$$Type): void
get "caster"(): $LivingEntity
get "direction"(): $Direction
get "spell"(): $ISpell
set "spell"(value: $ISpell$$Type)
}
}

