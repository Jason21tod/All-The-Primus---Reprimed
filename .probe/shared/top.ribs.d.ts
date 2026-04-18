declare module "top.ribs.scguns.common.Gun$Display$Flash" {
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Gun$Positioned } from "top.ribs.scguns.common.Gun$Positioned"
import { $SimpleParticleType } from "net.minecraft.core.particles.SimpleParticleType"

export class $Gun$Display$Flash extends $Gun$Positioned {
constructor()

public "getAlternatePosition"(): $Vec3
public "getParticleCount"(): integer
public "getParticleRingRadius"(): double
public "getParticleSpread"(): double
public "getParticleType"(): $SimpleParticleType
public "getSize"(): double
public "getTextureLocation"(): string
public "hasAlternateMuzzleFlash"(): boolean
public "shouldSpawnParticles"(): boolean
get "alternatePosition"(): $Vec3
get "particleCount"(): integer
get "particleRingRadius"(): double
get "particleSpread"(): double
get "particleType"(): $SimpleParticleType
get "size"(): double
get "textureLocation"(): string
}
}

declare module "top.ribs.scguns.common.Gun$Positioned$AbstractBuilder" {
import { $SuperBuilder } from "top.ribs.scguns.util.SuperBuilder"
import { $Gun$Positioned } from "top.ribs.scguns.common.Gun$Positioned"

export class $Gun$Positioned$AbstractBuilder<T extends $Gun$Positioned$AbstractBuilder<T> = $Gun$Positioned$AbstractBuilder<T>> extends $SuperBuilder<$Gun$Positioned, T> {
public "build"(): $Gun$Positioned
public "setOffset"(double0: double, double1: double, double2: double): T
public "setXOffset"(double0: double): T
public "setYOffset"(double0: double): T
public "setZOffset"(double0: double): T
set "xOffset"(value: double)
set "yOffset"(value: double)
set "zOffset"(value: double)
}
}

declare module "top.ribs.scguns.common.Gun$Positioned" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Positioned implements $INBTSerializable<$CompoundTag> {
constructor()

public "copy"(): $Gun$Positioned
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getXOffset"(): double
public "getYOffset"(): double
public "getZOffset"(): double
public "toJsonObject"(): $JsonObject
get "xOffset"(): double
get "yOffset"(): double
get "zOffset"(): double
}
}

declare module "top.ribs.scguns.common.ReloadType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $ReloadType extends $Record {
static readonly "MAG_FED": $ReloadType
static readonly "MANUAL": $ReloadType
static readonly "SINGLE_ITEM": $ReloadType

constructor(id: $ResourceLocation$$Type)

public static "getType"(resourceLocation0: $ResourceLocation$$Type): $ReloadType
public "id"(): $ResourceLocation
public static "registerType"(reloadType0: $ReloadType$$Type): void
}
}

declare module "top.ribs.scguns.common.Gun$General" {
import { $FireMode } from "top.ribs.scguns.common.FireMode"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $GripType } from "top.ribs.scguns.common.GripType"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Gun$WeaponType } from "top.ribs.scguns.common.Gun$WeaponType"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$General implements $INBTSerializable<$CompoundTag> {
constructor()

public "allowsAmmoChange"(): boolean
public "canMine"(): boolean
public "copy"(): $Gun$General
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getAvailableAmmoTypes"(): $List<string>
public "getBaseGripType"(): $GripType
public "getBeamAmmoConsumptionDelay"(): integer
public "getBeamColor"(): string
public "getBeamDamageDelay"(): integer
public "getBeamMaxDistance"(): double
public "getBurstAmount"(): integer
public "getBurstCooldown"(): integer
public "getCurrentAmmoTypeIndex"(): integer
public "getEnchantedBeamColor"(): string
public "getEnchantedSecondaryBeamColor"(): string
public "getFireMode"(): $FireMode
public "getFireTimer"(): integer
public "getGripType"(itemStack0: $ItemStack$$Type): $GripType
public "getHotBarrelRate"(): integer
public "getInfiniteAmmo"(): boolean
public "getMeleeCooldownTicks"(): integer
public "getMeleeDamage"(): float
public "getMeleeReach"(): float
public "getMiningSpeed"(): float
public "getRate"(): integer
public "getRecoilAdsReduction"(): float
public "getRecoilDurationOffset"(): float
public "getRestingSpread"(): float
public "getSecondaryBeamColor"(): string
public "getSpeedModifier"(): float
public "getSpreadAdsReduction"(): float
public "getWeaponType"(): $Gun$WeaponType
public "hasCameraShake"(): boolean
public "isAuto"(): boolean
public "isEnableGunLight"(): boolean
public "isRevolver"(): boolean
public "isSilenced"(): boolean
public "setCurrentAmmoTypeIndex"(int0: integer): void
public "setMeleeDamage"(float0: float): void
public "toJsonObject"(): $JsonObject
public "usesCustomMeleeAnimation"(): boolean
get "meleeCooldownTicks"(): integer
set "meleeCooldownTicks"(value: integer)
get "availableAmmoTypes"(): $List<string>
get "baseGripType"(): $GripType
get "beamAmmoConsumptionDelay"(): integer
get "beamColor"(): string
get "beamDamageDelay"(): integer
get "beamMaxDistance"(): double
get "burstAmount"(): integer
get "burstCooldown"(): integer
get "currentAmmoTypeIndex"(): integer
get "enchantedBeamColor"(): string
get "enchantedSecondaryBeamColor"(): string
get "fireMode"(): $FireMode
get "fireTimer"(): integer
get "hotBarrelRate"(): integer
get "infiniteAmmo"(): boolean
get "meleeDamage"(): float
get "meleeReach"(): float
get "miningSpeed"(): float
get "rate"(): integer
get "recoilAdsReduction"(): float
get "recoilDurationOffset"(): float
get "restingSpread"(): float
get "secondaryBeamColor"(): string
get "speedModifier"(): float
get "spreadAdsReduction"(): float
get "weaponType"(): $Gun$WeaponType
get "auto"(): boolean
get "enableGunLight"(): boolean
get "revolver"(): boolean
get "silenced"(): boolean
set "currentAmmoTypeIndex"(value: integer)
set "meleeDamage"(value: float)
}
}

declare module "top.ribs.scguns.common.Gun$ScaledPositioned" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Gun$Positioned } from "top.ribs.scguns.common.Gun$Positioned"

export class $Gun$ScaledPositioned extends $Gun$Positioned {
constructor()
constructor(compoundTag0: $CompoundTag$$Type)

public "copy"(): $Gun$ScaledPositioned
public "getScale"(): double
get "scale"(): double
}
}

declare module "top.ribs.scguns.debug.IDebugWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDebugWidget {
}

export namespace $IDebugWidget {
const probejs$$marker: never
}
export abstract class $IDebugWidget$$Static implements $IDebugWidget {
}
}

declare module "top.ribs.scguns.item.IColored" {
import { $List$$Type } from "java.util.List"
import { $DyeItem$$Type } from "net.minecraft.world.item.DyeItem"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IColored {
"canColor"(itemStack0: $ItemStack$$Type): boolean
"getColor"(itemStack0: $ItemStack$$Type): integer
"hasColor"(itemStack0: $ItemStack$$Type): boolean
"removeColor"(itemStack0: $ItemStack$$Type): void
"setColor"(itemStack0: $ItemStack$$Type, int1: integer): void
}

export namespace $IColored {
function dye(itemStack0: $ItemStack$$Type, list1: $List$$Type<$DyeItem$$Type>): $ItemStack
function isDyeable(itemStack0: $ItemStack$$Type): boolean
}
export abstract class $IColored$$Static implements $IColored {
static "dye"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$DyeItem$$Type>): $ItemStack
static "isDyeable"(itemStack0: $ItemStack$$Type): boolean
}
}

declare module "top.ribs.scguns.debug.IEditorMenu" {
import { $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $IDebugWidget$$Type } from "top.ribs.scguns.debug.IDebugWidget"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $IEditorMenu {
"getEditorLabel"(): $Component
"getEditorWidgets"(list0: $List$$Type<$Pair$$Type<$Component$$Type, $Supplier$$Type<$IDebugWidget$$Type>>>): void
get "editorLabel"(): $Component
}

export namespace $IEditorMenu {
const probejs$$marker: never
}
export abstract class $IEditorMenu$$Static implements $IEditorMenu {
}
}

declare module "top.ribs.scguns.event.GunFireEvent$Pre" {
import { $GunFireEvent } from "top.ribs.scguns.event.GunFireEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GunFireEvent$Pre extends $GunFireEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

}
}

declare module "top.ribs.scguns.interfaces.IGunModifier" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IGunModifier {
"additionalDamage"(): float
"additionalProjectileGravity"(): double
"criticalChance"(): float
"isMeleeOnly"(): boolean
"kickModifier"(itemStack0: $ItemStack$$Type): float
"kickModifier"(): float
"modifyAimDownSightSpeed"(double0: double): double
"modifyAmmoCapacity"(int0: integer): integer
"modifyDamageFalloffEnd"(float0: float): float
"modifyDamageFalloffStart"(float0: float): float
"modifyDrawSpeed"(double0: double): double
"modifyFireRate"(int0: integer): integer
"modifyFireSoundRadius"(double0: double): double
"modifyFireSoundVolume"(float0: float): float
"modifyMouseSensitivity"(double0: double): double
"modifyMuzzleFlashScale"(double0: double): double
"modifyProjectileDamage"(float0: float): float
"modifyProjectileGravity"(double0: double): double
"modifyProjectileLife"(int0: integer): integer
"modifyProjectileSpeed"(double0: double): double
"modifyProjectileSpread"(float0: float): float
"modifyReloadSpeed"(double0: double): double
"modifySensitivity"(double0: double): double
"recoilModifier"(itemStack0: $ItemStack$$Type): float
"recoilModifier"(): float
"silencedFire"(): boolean
get "meleeOnly"(): boolean
}

export namespace $IGunModifier {
const probejs$$marker: never
}
export abstract class $IGunModifier$$Static implements $IGunModifier {
}
}

declare module "top.ribs.scguns.common.Gun$Sounds" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Sounds implements $INBTSerializable<$CompoundTag> {
constructor()

public "copy"(): $Gun$Sounds
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCock"(): $ResourceLocation
public "getEnchantedFire"(): $ResourceLocation
public "getFire"(): $ResourceLocation
public "getFlybySound"(): $ResourceLocation
public "getPreFire"(): $ResourceLocation
public "getPreReload"(): $ResourceLocation
public "getReload"(): $ResourceLocation
public "getSilencedFire"(): $ResourceLocation
public "toJsonObject"(): $JsonObject
get "cock"(): $ResourceLocation
get "enchantedFire"(): $ResourceLocation
get "fire"(): $ResourceLocation
get "flybySound"(): $ResourceLocation
get "preFire"(): $ResourceLocation
get "preReload"(): $ResourceLocation
get "reload"(): $ResourceLocation
get "silencedFire"(): $ResourceLocation
}
}

declare module "top.ribs.scguns.item.GunItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $IMeta } from "top.ribs.scguns.item.IMeta"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $IColored } from "top.ribs.scguns.item.IColored"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $NetworkGunManager$Supplier$$Type } from "top.ribs.scguns.common.NetworkGunManager$Supplier"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Gun } from "top.ribs.scguns.common.Gun"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $IAttachment$Type$$Type } from "top.ribs.scguns.item.attachment.IAttachment$Type"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $DyeItem$$Type } from "net.minecraft.world.item.DyeItem"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GunItem extends $Item implements $IColored, $IMeta {
constructor(properties0: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "allowContinuingBlockBreaking"(player: $Player$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "allowNbtUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canColor"(itemStack0: $ItemStack$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "dragonlib$getCustomEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "dragonlib$tickArmor"(stack: $ItemStack$$Type, player: $Player$$Type): void
public static "dye"(itemStack0: $ItemStack$$Type, list1: $List$$Type<$DyeItem$$Type>): $ItemStack
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttachment"(itemStack0: $ItemStack$$Type, type1: $IAttachment$Type$$Type): $ItemStack
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributeModifiers"(stack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getBayonetAdditionalDamage"(itemStack0: $ItemStack$$Type): float
public "getBayonetBanzaiLevel"(itemStack0: $ItemStack$$Type): integer
public "getColor"(itemStack0: $ItemStack$$Type): integer
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
public "getGun"(): $Gun
public "getGunProperties"(): $Gun
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getModifiedGun"(itemStack0: $ItemStack$$Type): $Gun
public "getRecipeRemainder"(stack: $ItemStack$$Type): $ItemStack
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSweepHitBox"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type): $AABB
public "getTotalMeleeDamage"(itemStack0: $ItemStack$$Type): float
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasBayonet"(itemStack0: $ItemStack$$Type): boolean
public "hasColor"(itemStack0: $ItemStack$$Type): boolean
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "hasExtendedBarrel"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isBuiltInBayonetGun"(itemStack0: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public static "isDyeable"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isOneHandedCarbineActive"(itemStack0: $ItemStack$$Type): boolean
public "isOneHandedCarbineCandidate"(itemStack0: $ItemStack$$Type): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isSuitableFor"(stack: $ItemStack$$Type, state: $BlockState$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "of"(item0: $Item$$Type): $ItemDefinitionDuck
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onAttachmentChanged"(itemStack0: $ItemStack$$Type): void
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
public "removeColor"(itemStack0: $ItemStack$$Type): void
public "setArmorKnockbackResistance"(knockbackResistance: double): void
public "setArmorProtection"(armorProtection: double): void
public "setArmorToughness"(armorToughness: double): void
public "setAttackDamage"(attackDamage: double): void
public "setAttackSpeed"(attackSpeed: double): void
public "setColor"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDamage"(itemStack0: $ItemStack$$Type, int1: integer): void
public "setDigSpeed"(speed: float): void
public "setFoodProperties"(consumer: $Consumer$$Type<$FoodBuilder$$Type>): void
public "setGun"(supplier0: $NetworkGunManager$Supplier$$Type): void
public "setTier"(c: $Consumer$$Type<$MutableToolTier$$Type>): void
public "shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "shouldCauseReequipAnimation"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, boolean2: boolean): boolean
public "vMinus$update"(): void
get "creativeTab"(): string
get "digSpeed"(): float
get "gun"(): $Gun
get "gunProperties"(): $Gun
get "mod"(): string
set "armorKnockbackResistance"(value: double)
set "armorProtection"(value: double)
set "armorToughness"(value: double)
set "attackDamage"(value: double)
set "attackSpeed"(value: double)
set "digSpeed"(value: float)
set "foodProperties"(value: $Consumer$$Type<$FoodBuilder$$Type>)
set "gun"(value: $NetworkGunManager$Supplier$$Type)
set "tier"(value: $Consumer$$Type<$MutableToolTier$$Type>)
}
}

declare module "top.ribs.scguns.common.Gun$Modules$Zoom" {
import { $List$$Type } from "java.util.List"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $Gun$Positioned } from "top.ribs.scguns.common.Gun$Positioned"
import { $IDebugWidget$$Type } from "top.ribs.scguns.debug.IDebugWidget"
import { $IEditorMenu } from "top.ribs.scguns.debug.IEditorMenu"
import { $Gun$Modules$Zoom$Builder } from "top.ribs.scguns.common.Gun$Modules$Zoom$Builder"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $Gun$Modules$Zoom extends $Gun$Positioned implements $IEditorMenu {
constructor()

public static "builder"(): $Gun$Modules$Zoom$Builder
public "copy"(): $Gun$Modules$Zoom
public "getEditorLabel"(): $Component
public "getEditorWidgets"(list0: $List$$Type<$Pair$$Type<$Component$$Type, $Supplier$$Type<$IDebugWidget$$Type>>>): void
public "getFovModifier"(): float
get "editorLabel"(): $Component
get "fovModifier"(): float
}
}

declare module "top.ribs.scguns.event.GunReloadEvent$Pre" {
import { $GunReloadEvent } from "top.ribs.scguns.event.GunReloadEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GunReloadEvent$Pre extends $GunReloadEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

}
}

declare module "top.ribs.scguns.item.IMeta" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMeta {
}

export namespace $IMeta {
const probejs$$marker: never
}
export abstract class $IMeta$$Static implements $IMeta {
}
}

declare module "top.ribs.scguns.client.render.IHeldAnimation" {
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $PlayerModel$$Type } from "net.minecraft.client.model.PlayerModel"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export interface $IHeldAnimation {
/** Client only, do not use in server scripts */
"applyHeldItemTransforms"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type): void
"applyOffhandTransforms"(player0: $Player$$Type, playerModel1: $PlayerModel$$Type, itemStack2: $ItemStack$$Type, poseStack3: $PoseStack$$Type, float4: float): boolean
/** Client only, do not use in server scripts */
"applyPlayerModelRotation"(player0: $Player$$Type, modelPart1: $ModelPart$$Type, modelPart2: $ModelPart$$Type, modelPart3: $ModelPart$$Type, interactionHand4: $InteractionHand$$Type, float5: float): void
/** Client only, do not use in server scripts */
"applyPlayerPreRender"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type, float2: float, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type): void
"canApplySprintingAnimation"(): boolean
"canRenderOffhandItem"(): boolean
"getFallSwayZOffset"(): double
"renderFirstPersonArms"(player0: $Player$$Type, humanoidArm1: $HumanoidArm$$Type, itemStack2: $ItemStack$$Type, poseStack3: $PoseStack$$Type, multiBufferSource4: $MultiBufferSource$$Type, int5: integer, float6: float): void
get "fallSwayZOffset"(): double
}

export namespace $IHeldAnimation {
function copyModelAngles(modelPart0: $ModelPart$$Type, modelPart1: $ModelPart$$Type): void
}
export abstract class $IHeldAnimation$$Static implements $IHeldAnimation {
/** Client only, do not use in server scripts */
static "copyModelAngles"(modelPart0: $ModelPart$$Type, modelPart1: $ModelPart$$Type): void
}
}

declare module "top.ribs.scguns.common.NetworkGunManager$Supplier" {
import { $Gun } from "top.ribs.scguns.common.Gun"

export class $NetworkGunManager$Supplier {
public "getGun"(): $Gun
get "gun"(): $Gun
}
}

declare module "top.ribs.scguns.item.attachment.impl.Attachment" {
import { $ItemTooltipEvent$$Type } from "net.minecraftforge.event.entity.player.ItemTooltipEvent"
import { $IGunModifier } from "top.ribs.scguns.interfaces.IGunModifier"

export class $Attachment {
/** Client only, do not use in server scripts */
public static "addInformationEvent"(itemTooltipEvent0: $ItemTooltipEvent$$Type): void
public "getModifiers"(): $IGunModifier[]
get "modifiers"(): $IGunModifier[]
}
}

declare module "top.ribs.scguns.common.Gun$Display" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Gun$Display$BeamOrigin } from "top.ribs.scguns.common.Gun$Display$BeamOrigin"
import { $Gun$Display$Flash } from "top.ribs.scguns.common.Gun$Display$Flash"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Display implements $INBTSerializable<$CompoundTag> {
constructor()

public "copy"(): $Gun$Display
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBeamOrigin"(): $Gun$Display$BeamOrigin
public "getFlash"(): $Gun$Display$Flash
public "getMuzzleFlashType"(): string
public "serializeNBT"(): $CompoundTag
public "setMuzzleFlashType"(string0: string): void
public "toJsonObject"(): $JsonObject
get "beamOrigin"(): $Gun$Display$BeamOrigin
get "flash"(): $Gun$Display$Flash
get "muzzleFlashType"(): string
set "muzzleFlashType"(value: string)
}
}

declare module "top.ribs.scguns.common.Gun" {
import { $Gun$Display } from "top.ribs.scguns.common.Gun$Display"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $Gun$Modules } from "top.ribs.scguns.common.Gun$Modules"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $IDebugWidget$$Type } from "top.ribs.scguns.debug.IDebugWidget"
import { $IEditorMenu } from "top.ribs.scguns.debug.IEditorMenu"
import { $Gun$ScaledPositioned } from "top.ribs.scguns.common.Gun$ScaledPositioned"
import { $Gun$Reloads } from "top.ribs.scguns.common.Gun$Reloads"
import { $AmmoContext } from "top.ribs.scguns.common.AmmoContext"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Scope } from "top.ribs.scguns.item.attachment.impl.Scope"
import { $List$$Type } from "java.util.List"
import { $Gun$General } from "top.ribs.scguns.common.Gun$General"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $Gun$Sounds } from "top.ribs.scguns.common.Gun$Sounds"
import { $IAttachment$Type$$Type } from "top.ribs.scguns.item.attachment.IAttachment$Type"
import { $GripType } from "top.ribs.scguns.common.GripType"
import { $Gun$Projectile } from "top.ribs.scguns.common.Gun$Projectile"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun implements $INBTSerializable<$CompoundTag>, $IEditorMenu {
constructor()

public "canAimDownSight"(): boolean
public "canAttachType"(type0: $IAttachment$Type$$Type): boolean
public static "canShoot"(itemStack0: $ItemStack$$Type): boolean
public "copy"(): $Gun
public static "create"(compoundTag0: $CompoundTag$$Type): $Gun
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "determineGripType"(itemStack0: $ItemStack$$Type): $GripType
public static "findAmmo"(player0: $Player$$Type, item1: $Item$$Type): $AmmoContext
public static "findAmmoStack"(player0: $Player$$Type, item1: $Item$$Type): $ItemStack[]
public static "getAdditionalDamage"(itemStack0: $ItemStack$$Type): float
public static "getAmmoCount"(itemStack0: $ItemStack$$Type): integer
public static "getAttachment"(type0: $IAttachment$Type$$Type, itemStack1: $ItemStack$$Type): $ItemStack
public "getAttachmentPosition"(type0: $IAttachment$Type$$Type): $Gun$ScaledPositioned
public "getBaseGripType"(): $GripType
public static "getBurstCooldown"(itemStack0: $ItemStack$$Type): integer
public static "getBurstCount"(itemStack0: $ItemStack$$Type): integer
public "getCurrentAmmoItem"(itemStack0: $ItemStack$$Type): $Item
public "getCurrentAmmoItem"(): $Item
public "getDisplay"(): $Gun$Display
public "getEditorLabel"(): $Component
public "getEditorWidgets"(list0: $List$$Type<$Pair$$Type<$Component$$Type, $Supplier$$Type<$IDebugWidget$$Type>>>): void
public static "getFireTimer"(itemStack0: $ItemStack$$Type): integer
public static "getFovModifier"(itemStack0: $ItemStack$$Type, gun1: $Gun$$Type): float
public "getGeneral"(): $Gun$General
public "getIdealAttackRange"(): double
public static "getMaxAmmo"(itemStack0: $ItemStack$$Type): integer
public "getMinAttackRange"(): double
public "getModules"(): $Gun$Modules
public "getProjectile"(): $Gun$Projectile
public "getProjectile"(itemStack0: $ItemStack$$Type): $Gun$Projectile
public "getReloads"(): $Gun$Reloads
public static "getReserveAmmoCount"(player0: $Player$$Type, item1: $Item$$Type): integer
public static "getScope"(itemStack0: $ItemStack$$Type): $Scope
public static "getScopeStack"(itemStack0: $ItemStack$$Type): $ItemStack
public "getSounds"(): $Gun$Sounds
public static "hasAmmo"(itemStack0: $ItemStack$$Type): boolean
public static "hasAttachmentEquipped"(itemStack0: $ItemStack$$Type, type1: $IAttachment$Type$$Type): boolean
public static "hasAttachmentEquipped"(itemStack0: $ItemStack$$Type, gun1: $Gun$$Type, type2: $IAttachment$Type$$Type): boolean
public static "hasBurstFire"(itemStack0: $ItemStack$$Type): boolean
public static "hasCustomAttachment"(itemStack0: $ItemStack$$Type, type1: $IAttachment$Type$$Type, item2: $Item$$Type): boolean
public static "hasExtendedBarrel"(itemStack0: $ItemStack$$Type): boolean
public static "hasLaserSight"(itemStack0: $ItemStack$$Type): boolean
public static "hasStock"(itemStack0: $ItemStack$$Type): boolean
public static "hasUnlimitedReloads"(itemStack0: $ItemStack$$Type): boolean
public static "isAmmo"(itemStack0: $ItemStack$$Type, item1: $Item$$Type): boolean
public "loadAlternateProjectilesFromJson"(jsonObject0: $JsonObject$$Type): void
public static "removeAttachment"(itemStack0: $ItemStack$$Type, string1: string): void
public static "removeBarrelStack"(itemStack0: $ItemStack$$Type): $ItemStack
public static "removeMagazineStack"(itemStack0: $ItemStack$$Type): $ItemStack
public static "removeScopeStack"(itemStack0: $ItemStack$$Type): $ItemStack
public static "removeStockStack"(itemStack0: $ItemStack$$Type): $ItemStack
public static "removeUnderBarrelStack"(itemStack0: $ItemStack$$Type): $ItemStack
public "serializeNBT"(): $CompoundTag
public "toJsonObject"(): $JsonObject
get "baseGripType"(): $GripType
get "currentAmmoItem"(): $Item
get "display"(): $Gun$Display
get "editorLabel"(): $Component
get "general"(): $Gun$General
get "idealAttackRange"(): double
get "minAttackRange"(): double
get "modules"(): $Gun$Modules
get "projectile"(): $Gun$Projectile
get "reloads"(): $Gun$Reloads
get "sounds"(): $Gun$Sounds
}
}

declare module "top.ribs.scguns.entity.projectile.ProjectileEntity" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GunItem$$Type } from "top.ribs.scguns.item.GunItem"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $ProjectileEntity$EntityResult } from "top.ribs.scguns.entity.projectile.ProjectileEntity$EntityResult"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $IEntityAdditionalSpawnData } from "net.minecraftforge.entity.IEntityAdditionalSpawnData"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Gun$$Type } from "top.ribs.scguns.common.Gun"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Gun$Projectile } from "top.ribs.scguns.common.Gun$Projectile"

export class $ProjectileEntity extends $Entity implements $IEntityAdditionalSpawnData {
static readonly "IGNORE_LEAVES": $Predicate<$BlockState>

constructor(entityType0: $EntityType$$Type<$Entity$$Type>, level1: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$Entity$$Type>, level1: $Level$$Type, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type, gunItem4: $GunItem$$Type, gun5: $Gun$$Type)

public "advantageMultiplier"(entity0: $Entity$$Type): float
public "alwaysAccepts"(): boolean
public "applyProjectileProtection"(livingEntity0: $LivingEntity$$Type, float1: float): float
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "createExplosion"(entity0: $Entity$$Type, float1: float, boolean2: boolean): void
public static "createFireExplosion"(entity0: $Entity$$Type, float1: float, boolean2: boolean): void
public static "createRocketExplosion"(entity0: $Entity$$Type, float1: float, float2: float, boolean3: boolean): void
public static "createSoulFireExplosion"(entity0: $Entity$$Type, float1: float, boolean2: boolean): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
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
public "getCriticalDamage"(itemStack0: $ItemStack$$Type, randomSource1: $RandomSource$$Type, float2: float): float
public "getDamage"(): float
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHitResult"(entity0: $Entity$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type): $ProjectileEntity$EntityResult
public "getItem"(): $ItemStack
public "getItem"(): $ItemStack
public "getLevel"(): $Level
public "getModifiedGravity"(): double
public "getModifiedKnockback"(): float
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getOwner"(): $Entity
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getProfile"(): $GameProfile
public "getProjectile"(): $Gun$Projectile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getShooter"(): $LivingEntity
public "getShooterId"(): integer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "getWeapon"(): $ItemStack
public "getaFloat"(): float
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "onHit"(hitResult0: $HitResult$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type): void
public "playSound"(id: $SoundEvent$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setAdditionalDamage"(float0: float): void
public "setArmorBypassAmount"(float0: float): void
public "setItem"(itemStack0: $ItemStack$$Type): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setWeapon"(itemStack0: $ItemStack$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "updateHeading"(): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "damage"(): float
get "displayName"(): $Component
get "facing"(): $Direction
get "item"(): $ItemStack
get "item"(): $ItemStack
get "level"(): $Level
get "modifiedGravity"(): double
get "modifiedKnockback"(): float
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "owner"(): $Entity
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "profile"(): $GameProfile
get "projectile"(): $Gun$Projectile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "shooter"(): $LivingEntity
get "shooterId"(): integer
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "weapon"(): $ItemStack
get "aFloat"(): float
get "ambientCreature"(): boolean
get "animal"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "additionalDamage"(value: float)
set "armorBypassAmount"(value: float)
set "item"(value: $ItemStack$$Type)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "weapon"(value: $ItemStack$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "top.ribs.scguns.item.attachment.impl.Scope$Builder" {
import { $Scope } from "top.ribs.scguns.item.attachment.impl.Scope"
import { $IGunModifier$$Type } from "top.ribs.scguns.interfaces.IGunModifier"

export class $Scope$Builder {
public "aimFovModifier"(float0: float): $Scope$Builder
public "build"(): $Scope
public "modifiers"(...iGunModifier0s: $IGunModifier$$Type[]): $Scope$Builder
}
}

declare module "top.ribs.scguns.common.Gun$Modules$Zoom$AbstractBuilder" {
import { $Gun$Positioned$AbstractBuilder } from "top.ribs.scguns.common.Gun$Positioned$AbstractBuilder"

export class $Gun$Modules$Zoom$AbstractBuilder<T extends $Gun$Modules$Zoom$AbstractBuilder<T> = $Gun$Modules$Zoom$AbstractBuilder<T>> extends $Gun$Positioned$AbstractBuilder<T> {
public "setFovModifier"(float0: float): T
set "fovModifier"(value: float)
}
}

declare module "top.ribs.scguns.common.Gun$WeaponType" {
import { $Enum } from "java.lang.Enum"

export class $Gun$WeaponType extends $Enum<$Gun$WeaponType> {
static readonly "flamethrower": $Gun$WeaponType
static readonly "heavy": $Gun$WeaponType
static readonly "laser": $Gun$WeaponType
static readonly "lmg": $Gun$WeaponType
static readonly "magnum": $Gun$WeaponType
static readonly "pistol": $Gun$WeaponType
static readonly "plasma": $Gun$WeaponType
static readonly "rifle": $Gun$WeaponType
static readonly "shock": $Gun$WeaponType
static readonly "shotgun": $Gun$WeaponType
static readonly "smg": $Gun$WeaponType
static readonly "sniper": $Gun$WeaponType
static readonly "special": $Gun$WeaponType

public static "valueOf"(string0: string): $Gun$WeaponType
public static "values"(): $Gun$WeaponType[]
}
}

declare module "top.ribs.scguns.event.GunFireEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GunFireEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getStack"(): $ItemStack
public "isClient"(): boolean
get "stack"(): $ItemStack
get "client"(): boolean
}
}

declare module "top.ribs.scguns.common.AmmoContext" {
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Record } from "java.lang.Record"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $AmmoContext extends $Record {
static readonly "NONE": $AmmoContext

constructor(stack: $ItemStack$$Type, container: $Container$$Type)

public "container"(): $Container
public "stack"(): $ItemStack
}
}

declare module "top.ribs.scguns.common.GripType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IHeldAnimation, $IHeldAnimation$$Type } from "top.ribs.scguns.client.render.IHeldAnimation"
import { $Record } from "java.lang.Record"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GripType extends $Record {
static readonly "BAZOOKA": $GripType
static readonly "DUAL_WIELD": $GripType
static readonly "MINI_GUN": $GripType
static readonly "MINI_GUN_2": $GripType
static readonly "MINI_GUN_3": $GripType
static readonly "MINI_GUN_4": $GripType
static readonly "MINI_GUN_5": $GripType
static readonly "ONE_HANDED": $GripType
static readonly "ONE_HANDED_2": $GripType
static readonly "TWO_HANDED": $GripType
static readonly "TWO_HANDED_SHOTGUN": $GripType
static readonly "TWO_HANDED_SMG": $GripType

constructor(id: $ResourceLocation$$Type, heldAnimation: $IHeldAnimation$$Type)

public static "applyBackTransforms"(player0: $Player$$Type, poseStack1: $PoseStack$$Type): boolean
public static "getType"(resourceLocation0: $ResourceLocation$$Type): $GripType
public "heldAnimation"(): $IHeldAnimation
public "id"(): $ResourceLocation
public static "registerType"(gripType0: $GripType$$Type): void
}
}

declare module "top.ribs.scguns.event.GunFireEvent$Post" {
import { $GunFireEvent } from "top.ribs.scguns.event.GunFireEvent"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GunFireEvent$Post extends $GunFireEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getShooter"(): $LivingEntity
get "shooter"(): $LivingEntity
}
}

declare module "top.ribs.scguns.entity.projectile.ProjectileEntity$EntityResult" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"

export class $ProjectileEntity$EntityResult {
constructor(entity0: $Entity$$Type, vec31: $Vec3$$Type, boolean2: boolean)

public "getEntity"(): $Entity
public "getHitPos"(): $Vec3
public "isHeadshot"(): boolean
get "entity"(): $Entity
get "hitPos"(): $Vec3
get "headshot"(): boolean
}
}

declare module "top.ribs.scguns.item.attachment.IAttachment$Type" {
import { $Enum } from "java.lang.Enum"

export class $IAttachment$Type extends $Enum<$IAttachment$Type> {
static readonly "BARREL": $IAttachment$Type
static readonly "MAGAZINE": $IAttachment$Type
static readonly "SCOPE": $IAttachment$Type
static readonly "STOCK": $IAttachment$Type
static readonly "UNDER_BARREL": $IAttachment$Type

public static "byTagKey"(string0: string): $IAttachment$Type
public "getName"(): string
public "getSerializeKey"(): string
public "getTagKey"(): string
public "getTranslationKey"(): string
public static "valueOf"(string0: string): $IAttachment$Type
public static "values"(): $IAttachment$Type[]
get "name"(): string
get "serializeKey"(): string
get "tagKey"(): string
get "translationKey"(): string
}
}

declare module "top.ribs.scguns.item.attachment.impl.Scope" {
import { $List$$Type } from "java.util.List"
import { $Scope$Builder } from "top.ribs.scguns.item.attachment.impl.Scope$Builder"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $IDebugWidget$$Type } from "top.ribs.scguns.debug.IDebugWidget"
import { $IEditorMenu } from "top.ribs.scguns.debug.IEditorMenu"
import { $Attachment } from "top.ribs.scguns.item.attachment.impl.Attachment"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $Scope extends $Attachment implements $IEditorMenu {
public static "builder"(): $Scope$Builder
public "copy"(): $Scope
public "getEditorLabel"(): $Component
public "getEditorWidgets"(list0: $List$$Type<$Pair$$Type<$Component$$Type, $Supplier$$Type<$IDebugWidget$$Type>>>): void
public "getFovModifier"(): float
get "editorLabel"(): $Component
get "fovModifier"(): float
}
}

declare module "top.ribs.scguns.event.GunProjectileHitEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $HitResult, $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $ProjectileEntity, $ProjectileEntity$$Type } from "top.ribs.scguns.entity.projectile.ProjectileEntity"

export class $GunProjectileHitEvent extends $Event implements $EventItf {
constructor()
constructor(hitResult0: $HitResult$$Type, projectileEntity1: $ProjectileEntity$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getProjectile"(): $ProjectileEntity
public "getRayTrace"(): $HitResult
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "projectile"(): $ProjectileEntity
get "rayTrace"(): $HitResult
}
}

declare module "top.ribs.scguns.common.Gun$Modules$Zoom$Builder" {
import { $Gun$Modules$Zoom$AbstractBuilder } from "top.ribs.scguns.common.Gun$Modules$Zoom$AbstractBuilder"

export class $Gun$Modules$Zoom$Builder extends $Gun$Modules$Zoom$AbstractBuilder<$Gun$Modules$Zoom$Builder> {
constructor()

}
}

declare module "top.ribs.scguns.event.GunReloadEvent$Post" {
import { $GunReloadEvent } from "top.ribs.scguns.event.GunReloadEvent"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GunReloadEvent$Post extends $GunReloadEvent {
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)
constructor()

}
}

declare module "top.ribs.scguns.common.FireMode" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $FireMode extends $Record {
static readonly "AUTOMATIC": $FireMode
static readonly "AUTOMATIC_BEAM": $FireMode
static readonly "BEAM": $FireMode
static readonly "BEAM_BURST": $FireMode
static readonly "BURST": $FireMode
static readonly "PULSE": $FireMode
static readonly "SEMI_AUTO": $FireMode
static readonly "SEMI_BEAM": $FireMode

constructor(id: $ResourceLocation$$Type)

public static "getType"(resourceLocation0: $ResourceLocation$$Type): $FireMode
public "id"(): $ResourceLocation
public "ordinal"(): integer
public static "registerType"(fireMode0: $FireMode$$Type): void
}
}

declare module "top.ribs.scguns.common.Gun$Projectile" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $Gun$General$$Type } from "top.ribs.scguns.common.Gun$General"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Item } from "net.minecraft.world.item.Item"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Projectile implements $INBTSerializable<$CompoundTag> {
constructor()

public "copy"(): $Gun$Projectile
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "ejectDuringReload"(): boolean
public "ejectsCasing"(): boolean
public "firesArrows"(): boolean
public "getAdvantage"(): $ResourceLocation
public "getArmorPen"(): float
public "getCasingParticle"(): $ResourceLocation
public "getCasingType"(): $ResourceLocation
public "getCritDamageMultiplier"(): float
public "getCriticalChance"(): float
public "getDamage"(): float
public "getDamageFalloffEnd"(): float
public "getDamageFalloffMinMultiplier"(): float
public "getDamageFalloffStart"(): float
public "getDurabilityDamage"(): integer
public "getEnergyUse"(): integer
public "getImpactEffect"(): $ResourceLocation
public "getImpactEffectAmplifier"(): integer
public "getImpactEffectChance"(): float
public "getImpactEffectDuration"(): integer
public "getItem"(general0: $Gun$General$$Type): $Item
public "getItem"(): $Item
public "getKnockbackStrength"(): float
public "getLife"(): integer
public "getPlayerKnockBackStrength"(): float
public "getProjectileAmount"(): integer
public "getRecoilAngle"(): float
public "getRecoilKick"(): float
public "getSize"(): float
public "getSpeed"(): double
public "getSpread"(): float
public "getTrailColor"(): integer
public "getTrailLengthMultiplier"(): double
public "getTrailThickness"(): double
public "hasPlayerKnockBack"(): boolean
public "isAlwaysSpread"(): boolean
public "isDamageReduceOverLife"(): boolean
public "isGravity"(): boolean
public "isSoulFire"(): boolean
public "isVisible"(): boolean
public "serializeNBT"(): $CompoundTag
public "setCasingType"(resourceLocation0: $ResourceLocation$$Type): void
public "setDamage"(float0: float): void
public "setEnergyUse"(int0: integer): void
public "shouldHideProjectile"(): boolean
public "shouldHideTrail"(): boolean
public "toJsonObject"(): $JsonObject
get "casingType"(): $ResourceLocation
set "casingType"(value: $ResourceLocation$$Type)
get "item"(): $ResourceLocation
set "item"(value: $ResourceLocation$$Type)
get "advantage"(): $ResourceLocation
get "armorPen"(): float
get "casingParticle"(): $ResourceLocation
get "critDamageMultiplier"(): float
get "criticalChance"(): float
get "damage"(): float
get "damageFalloffEnd"(): float
get "damageFalloffMinMultiplier"(): float
get "damageFalloffStart"(): float
get "durabilityDamage"(): integer
get "energyUse"(): integer
get "impactEffect"(): $ResourceLocation
get "impactEffectAmplifier"(): integer
get "impactEffectChance"(): float
get "impactEffectDuration"(): integer
get "knockbackStrength"(): float
get "life"(): integer
get "playerKnockBackStrength"(): float
get "projectileAmount"(): integer
get "recoilAngle"(): float
get "recoilKick"(): float
get "size"(): float
get "speed"(): double
get "spread"(): float
get "trailColor"(): integer
get "trailLengthMultiplier"(): double
get "trailThickness"(): double
get "alwaysSpread"(): boolean
get "damageReduceOverLife"(): boolean
get "gravity"(): boolean
get "soulFire"(): boolean
get "visible"(): boolean
set "damage"(value: float)
set "energyUse"(value: integer)
}
}

declare module "top.ribs.scguns.common.Gun$Display$BeamOrigin" {
import { $Gun$Positioned } from "top.ribs.scguns.common.Gun$Positioned"

export class $Gun$Display$BeamOrigin extends $Gun$Positioned {
constructor()

public "copy"(): $Gun$Display$BeamOrigin
public "getAimHorizontalOffset"(): double
public "getForwardOffset"(): double
public "getHorizontalOffset"(): double
public "getVerticalOffset"(): double
get "aimHorizontalOffset"(): double
get "forwardOffset"(): double
get "horizontalOffset"(): double
get "verticalOffset"(): double
}
}

declare module "top.ribs.scguns.common.Gun$Modules$Attachments" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Gun$ScaledPositioned } from "top.ribs.scguns.common.Gun$ScaledPositioned"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Modules$Attachments implements $INBTSerializable<$CompoundTag> {
constructor()

public "copy"(): $Gun$Modules$Attachments
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getBarrel"(): $Gun$ScaledPositioned
public "getMagazine"(): $Gun$ScaledPositioned
public "getScope"(): $Gun$ScaledPositioned
public "getStock"(): $Gun$ScaledPositioned
public "getUnderBarrel"(): $Gun$ScaledPositioned
public "serializeNBT"(): $CompoundTag
public "toJsonObject"(): $JsonObject
get "barrel"(): $Gun$ScaledPositioned
get "magazine"(): $Gun$ScaledPositioned
get "scope"(): $Gun$ScaledPositioned
get "stock"(): $Gun$ScaledPositioned
get "underBarrel"(): $Gun$ScaledPositioned
}
}

declare module "top.ribs.scguns.event.GunReloadEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $GunReloadEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, itemStack1: $ItemStack$$Type)

public "getStack"(): $ItemStack
public "isClient"(): boolean
get "stack"(): $ItemStack
get "client"(): boolean
}
}

declare module "top.ribs.scguns.common.Gun$Reloads" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject } from "com.google.gson.JsonObject"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Item } from "net.minecraft.world.item.Item"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ReloadType } from "top.ribs.scguns.common.ReloadType"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Reloads implements $INBTSerializable<$CompoundTag> {
constructor()

public "copy"(): $Gun$Reloads
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getByproductChance"(): float
public "getEmptyMagTimer"(): integer
public "getInfiniteAmmo"(): boolean
public "getMaxAmmo"(): integer
public "getReloadAmount"(): integer
public "getReloadByproduct"(): $Item
public "getReloadItem"(): $Item
public "getReloadTimer"(): integer
public "getReloadType"(): $ReloadType
public static "hasInfiniteAmmo"(itemStack0: $ItemStack$$Type): boolean
public "setByproductChance"(float0: float): void
public "setReloadByproduct"(resourceLocation0: $ResourceLocation$$Type): void
public "shouldGiveByproduct"(randomSource0: $RandomSource$$Type, itemStack1: $ItemStack$$Type): boolean
public "toJsonObject"(): $JsonObject
get "byproductChance"(): float
get "emptyMagTimer"(): integer
get "infiniteAmmo"(): boolean
get "maxAmmo"(): integer
get "reloadAmount"(): integer
get "reloadByproduct"(): $Item
get "reloadItem"(): $Item
get "reloadTimer"(): integer
get "reloadType"(): $ReloadType
set "byproductChance"(value: float)
set "reloadByproduct"(value: $ResourceLocation$$Type)
}
}

declare module "top.ribs.scguns.util.SuperBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SuperBuilder<R = any, T extends $SuperBuilder<R, T> = $SuperBuilder<R, T>> {
constructor()

public "build"(): R
}
}

declare module "top.ribs.scguns.common.Gun$Modules" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $List$$Type } from "java.util.List"
import { $Gun$Modules$Zoom } from "top.ribs.scguns.common.Gun$Modules$Zoom"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Gun$Modules$Attachments } from "top.ribs.scguns.common.Gun$Modules$Attachments"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Pair$$Type } from "org.apache.commons.lang3.tuple.Pair"
import { $IDebugWidget$$Type } from "top.ribs.scguns.debug.IDebugWidget"
import { $IEditorMenu } from "top.ribs.scguns.debug.IEditorMenu"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $Gun$Modules implements $INBTSerializable<$CompoundTag>, $IEditorMenu {
constructor()

public "copy"(): $Gun$Modules
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getAttachments"(): $Gun$Modules$Attachments
public "getEditorLabel"(): $Component
public "getEditorWidgets"(list0: $List$$Type<$Pair$$Type<$Component$$Type, $Supplier$$Type<$IDebugWidget$$Type>>>): void
public "getZoom"(): $Gun$Modules$Zoom
public "serializeNBT"(): $CompoundTag
public "toJsonObject"(): $JsonObject
get "attachments"(): $Gun$Modules$Attachments
get "editorLabel"(): $Component
get "zoom"(): $Gun$Modules$Zoom
}
}

