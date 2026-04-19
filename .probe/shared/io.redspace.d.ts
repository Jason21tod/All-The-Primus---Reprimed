declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastResult" {
import { $Enum } from "java.lang.Enum"

export class $RecastResult extends $Enum<$RecastResult> {
static readonly "COMMAND": $RecastResult
static readonly "COUNTERSPELL": $RecastResult
static readonly "DEATH": $RecastResult
static readonly "TIMEOUT": $RecastResult
static readonly "USED_ALL_RECASTS": $RecastResult
static readonly "USER_CANCEL": $RecastResult

public "isFailure"(): boolean
public "isSuccess"(): boolean
public static "valueOf"(string0: string): $RecastResult
public static "values"(): $RecastResult[]
get "failure"(): boolean
get "success"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.item.SpellBook" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $IPresetSpellContainer } from "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer"
import { $ISpellbook } from "io.redspace.ironsspellbooks.api.item.ISpellbook"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $ICurio$DropRule } from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $ILecternPlaceable } from "io.redspace.ironsspellbooks.item.ILecternPlaceable"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MutableToolTier$$Type } from "dev.latvian.mods.kubejs.item.MutableToolTier"
import { $CurioBaseItem } from "io.redspace.ironsspellbooks.item.curios.CurioBaseItem"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $SpellBook extends $CurioBaseItem implements $ISpellbook, $IPresetSpellContainer, $ILecternPlaceable {
constructor(int0: integer, properties1: $Item$Properties$$Type)
constructor(int0: integer)
constructor()

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "allowContinuingBlockBreaking"(player: $Player$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "allowNbtUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
public "canEquip"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): boolean
public "canEquipFromUse"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
/** @deprecated */
public "canRightClickEquip"(itemStack0: $ItemStack$$Type): boolean
/** @deprecated */
public "canSync"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): boolean
public "canSync"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
public "canUnequip"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): boolean
public "canUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
/** @deprecated */
public "curioAnimate"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "curioBreak"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
public "curioBreak"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): void
public "curioTick"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
public "curioTick"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "dragonlib$getCustomEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "dragonlib$tickArmor"(stack: $ItemStack$$Type, player: $Player$$Type): void
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
/** @deprecated */
public "getAttributeModifiers"(string0: string, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributeModifiers"(stack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getAttributesTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
/** @deprecated */
public "getDropRule"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): $ICurio$DropRule
public "getDropRule"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, int2: integer, boolean3: boolean, itemStack4: $ItemStack$$Type): $ICurio$DropRule
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
/** @deprecated */
public "getFortuneBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
public "getFortuneLevel"(slotContext0: $SlotContext$$Type, lootContext1: $LootContext$$Type, itemStack2: $ItemStack$$Type): integer
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
/** @deprecated */
public "getLootingBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
public "getLootingLevel"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, livingEntity2: $LivingEntity$$Type, int3: integer, itemStack4: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxSpellSlots"(): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getPages"(itemStack0: $ItemStack$$Type): $List<$Component>
public "getRecipeRemainder"(stack: $ItemStack$$Type): $ItemStack
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSlotsTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
public "getSweepHitBox"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type): $AABB
/** @deprecated */
public "getTagsTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "handleCustomLecternPosing"(poseStack0: $PoseStack$$Type): void
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCurioCapability"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "initializeSpellContainer"(itemStack0: $ItemStack$$Type): void
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(slotContext0: $SlotContext$$Type, enderMan1: $EnderMan$$Type, itemStack2: $ItemStack$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isSuitableFor"(stack: $ItemStack$$Type, state: $BlockState$$Type): boolean
public "isUnique"(): boolean
public "makesPiglinsNeutral"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "of"(item0: $Item$$Type): $ItemDefinitionDuck
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
public "onEquip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "onEquipFromUse"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
/** @deprecated */
public "onUnequip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "onUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
public "playRightClickEquipSound"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "readSyncData"(slotContext0: $SlotContext$$Type, compoundTag1: $CompoundTag$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
public "readSyncData"(compoundTag0: $CompoundTag$$Type, itemStack1: $ItemStack$$Type): void
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
/** @deprecated */
public "showAttributesTooltip"(string0: string, itemStack1: $ItemStack$$Type): boolean
public "simpleTextureOverride"(itemStack0: $ItemStack$$Type): $Optional<$ResourceLocation>
public "vMinus$update"(): void
public "withAttribute"(holder0: $Holder$$Type<$Attribute$$Type>, double1: double): $SpellBook
public "writeSyncData"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): $CompoundTag
/** @deprecated */
public "writeSyncData"(itemStack0: $ItemStack$$Type): $CompoundTag
get "creativeTab"(): string
get "digSpeed"(): float
get "maxSpellSlots"(): integer
get "mod"(): string
get "unique"(): boolean
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

declare module "io.redspace.ironspatreonlib.mixin.ArmorStandAccessor" {
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ArmorStandAccessor {
"irons_patreon_lib$getArmorItems"(): $NonNullList<$ItemStack>
}

export namespace $ArmorStandAccessor {
const probejs$$marker: never
}
export abstract class $ArmorStandAccessor$$Static implements $ArmorStandAccessor {
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SpinAttackType, $SpinAttackType$$Type } from "io.redspace.ironsspellbooks.player.SpinAttackType"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $SpellSelection, $SpellSelection$$Type } from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SyncedSpellData {
constructor(livingEntity0: $LivingEntity$$Type)
constructor(int0: integer)

public "addHeartstopDamage"(float0: float): void
public "doSync"(): void
public "forgetAllSpells"(): void
public "getCastingEquipmentSlot"(): string
public "getCastingSpellId"(): string
public "getCastingSpellLevel"(): integer
public "getEvasionHitsRemaining"(): integer
public "getHeartstopAccumulatedDamage"(): float
public "getPersistentData"(serverPlayer0: $ServerPlayer$$Type): $SyncedSpellData
public "getServerPlayerId"(): integer
public "getSpellSelection"(): $SpellSelection
public "getSpinAttackType"(): $SpinAttackType
public "isCasting"(): boolean
public "isSpellLearned"(abstractSpell0: $AbstractSpell$$Type): boolean
public "learnSpell"(abstractSpell0: $AbstractSpell$$Type, boolean1: boolean): void
public "learnSpell"(abstractSpell0: $AbstractSpell$$Type): void
public "loadNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public static "read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SyncedSpellData
public "saveNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "setEvasionHitsRemaining"(int0: integer): void
public "setHeartstopAccumulatedDamage"(float0: float): void
public "setIsCasting"(boolean0: boolean, string1: string, int2: integer, string3: string): void
public "setSpellSelection"(spellSelection0: $SpellSelection$$Type): void
public "setSpinAttackType"(spinAttackType0: $SpinAttackType$$Type): void
public "subtractEvasionHit"(): void
public "syncToPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public static "write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, syncedSpellData1: $SyncedSpellData$$Type): void
get "castingEquipmentSlot"(): string
get "castingSpellId"(): string
get "castingSpellLevel"(): integer
get "evasionHitsRemaining"(): integer
get "heartstopAccumulatedDamage"(): float
get "serverPlayerId"(): integer
get "spellSelection"(): $SpellSelection
get "spinAttackType"(): $SpinAttackType
get "casting"(): boolean
set "evasionHitsRemaining"(value: integer)
set "heartstopAccumulatedDamage"(value: float)
set "spellSelection"(value: $SpellSelection$$Type)
set "spinAttackType"(value: $SpinAttackType$$Type)
}
}

declare module "io.redspace.ironsspellbooks.api.util.AnimationHolder" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RawAnimation } from "software.bernie.geckolib.core.animation.RawAnimation"
import { $Optional } from "java.util.Optional"

export class $AnimationHolder {
readonly "animatesLegs": boolean
readonly "isPass": boolean

constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean)
/** @deprecated */
constructor(string0: string, boolean1: boolean)
constructor(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean, boolean2: boolean)
/** @deprecated */
constructor(string0: string, boolean1: boolean, boolean2: boolean)

public "getForMob"(): $Optional<$RawAnimation>
public "getForPlayer"(): $Optional<$ResourceLocation>
public static "none"(): $AnimationHolder
public static "pass"(): $AnimationHolder
get "forMob"(): $Optional<$RawAnimation>
get "forPlayer"(): $Optional<$ResourceLocation>
}
}

declare module "io.redspace.ironsspellbooks.item.weapons.AttributeContainer" {
import { $AttributeModifier$Operation, $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AttributeContainer extends $Record {
constructor(attribute: $Supplier$$Type<$Attribute>, value: double, operation: $AttributeModifier$Operation$$Type)

public "attribute"(): $Supplier<$Attribute>
public "createModifier"(string0: string): $AttributeModifier
public "operation"(): $AttributeModifier$Operation
public "value"(): double
}
}

declare module "io.redspace.ironsspellbooks.item.weapons.StaffTier" {
import { $AttributeContainer, $AttributeContainer$$Type } from "io.redspace.ironsspellbooks.item.weapons.AttributeContainer"
import { $IronsWeaponTier } from "io.redspace.ironsspellbooks.item.weapons.IronsWeaponTier"

export class $StaffTier implements $IronsWeaponTier {
static "ARTIFICER": $StaffTier
static "BLOOD_STAFF": $StaffTier
static "GRAYBEARD": $StaffTier
static "ICE_STAFF": $StaffTier
static "LIGHTNING_ROD": $StaffTier
static "PYRIUM_STAFF": $StaffTier

constructor(float0: float, float1: float, ...attributeContainer2s: $AttributeContainer$$Type[])

public "getAdditionalAttributes"(): $AttributeContainer[]
public "getAttackDamageBonus"(): float
public "getSpeed"(): float
get "additionalAttributes"(): $AttributeContainer[]
get "attackDamageBonus"(): float
get "speed"(): float
}
}

declare module "io.redspace.ironsspellbooks.api.registry.SchoolRegistry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Registry } from "net.minecraft.core.Registry"
import { $List } from "java.util.List"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier } from "java.util.function.Supplier"
import { $IForgeRegistry } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $RegistryObject } from "net.minecraftforge.registries.RegistryObject"

export class $SchoolRegistry {
static readonly "BLOOD": $RegistryObject<$SchoolType>
static readonly "BLOOD_RESOURCE": $ResourceLocation
static readonly "ELDRITCH": $RegistryObject<$SchoolType>
static readonly "ELDRITCH_RESOURCE": $ResourceLocation
static readonly "ENDER": $RegistryObject<$SchoolType>
static readonly "ENDER_RESOURCE": $ResourceLocation
static readonly "EVOCATION": $RegistryObject<$SchoolType>
static readonly "EVOCATION_RESOURCE": $ResourceLocation
static readonly "FIRE": $RegistryObject<$SchoolType>
static readonly "FIRE_RESOURCE": $ResourceLocation
static readonly "HOLY": $RegistryObject<$SchoolType>
static readonly "HOLY_RESOURCE": $ResourceLocation
static readonly "ICE": $RegistryObject<$SchoolType>
static readonly "ICE_RESOURCE": $ResourceLocation
static readonly "LIGHTNING": $RegistryObject<$SchoolType>
static readonly "LIGHTNING_RESOURCE": $ResourceLocation
static readonly "NATURE": $RegistryObject<$SchoolType>
static readonly "NATURE_RESOURCE": $ResourceLocation
static readonly "REGISTRY": $Supplier<$IForgeRegistry<$SchoolType>>
static readonly "SCHOOL_REGISTRY_KEY": $ResourceKey<$Registry<$SchoolType>>

constructor()

public static "getSchool"(resourceLocation0: $ResourceLocation$$Type): $SchoolType
public static "getSchoolFromFocus"(itemStack0: $ItemStack$$Type): $SchoolType
public static "getSchoolsFromFocus"(itemStack0: $ItemStack$$Type): $List<$SchoolType>
public static "register"(iEventBus0: $IEventBus$$Type): void
}
}

declare module "io.redspace.ironsspellbooks.item.armor.IArmorCapeProvider$CapeData" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export class $IArmorCapeProvider$CapeData {
constructor()

public "moveCloak"(livingEntity0: $LivingEntity$$Type): void
get "bob"(): float
set "bob"(value: float)
get "lastTick"(): integer
set "lastTick"(value: integer)
get "oBob"(): float
set "oBob"(value: float)
get "xCloak"(): double
set "xCloak"(value: double)
get "xCloakO"(): double
set "xCloakO"(value: double)
get "yCloak"(): double
set "yCloak"(value: double)
get "yCloakO"(): double
set "yCloakO"(value: double)
get "zCloak"(): double
set "zCloak"(value: double)
get "zCloakO"(): double
set "zCloakO"(value: double)
}
}

declare module "io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder" {
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $RegistryObject$$Type } from "net.minecraftforge.registries.RegistryObject"

export class $SpellDataRegistryHolder {
constructor(registryObject0: $RegistryObject$$Type<$AbstractSpell$$Type>, int1: integer)

public "getSpellData"(): $SpellData
public static "of"(...spellDataRegistryHolder0s: $SpellDataRegistryHolder$$Type[]): $SpellDataRegistryHolder[]
get "spellData"(): $SpellData
}
}

declare module "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk" {
import { $IExtendedNoiseChunk$AquifierNuke, $IExtendedNoiseChunk$AquifierNuke$$Type } from "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk$AquifierNuke"

export interface $IExtendedNoiseChunk {
"irons_spellbooks$getAquifierStatus"(): $IExtendedNoiseChunk$AquifierNuke
"irons_spellbooks$setAquifierStatus"(aquifierNuke0: $IExtendedNoiseChunk$AquifierNuke$$Type): void
}

export namespace $IExtendedNoiseChunk {
const probejs$$marker: never
}
export abstract class $IExtendedNoiseChunk$$Static implements $IExtendedNoiseChunk {
}
}

declare module "io.redspace.ironspatreonlib.patreon.transmog.ITransmogPreview" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITransmogPreview {
"irons_patreon_lib$isTransmogPreview"(): boolean
"irons_patreon_lib$setTransmogPreview"(boolean0: boolean): void
}

export namespace $ITransmogPreview {
const probejs$$marker: never
}
export abstract class $ITransmogPreview$$Static implements $ITransmogPreview {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SchoolType, $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellOnCastEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, string1: string, int2: integer, int3: integer, schoolType4: $SchoolType$$Type, castSource5: $CastSource$$Type)

public "getCastSource"(): $CastSource
public "getManaCost"(): integer
public "getOriginalManaCost"(): integer
public "getOriginalSpellLevel"(): integer
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "setManaCost"(int0: integer): void
public "setSpellLevel"(int0: integer): void
get "castSource"(): $CastSource
get "manaCost"(): integer
get "originalManaCost"(): integer
get "originalSpellLevel"(): integer
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
set "manaCost"(value: integer)
set "spellLevel"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.api.events.ModifySpellLevelEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ModifySpellLevelEvent extends $Event implements $EventItf {
constructor(abstractSpell0: $AbstractSpell$$Type, livingEntity1: $LivingEntity$$Type, int2: integer, int3: integer)
constructor()

public "addLevels"(int0: integer): void
public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getBaseLevel"(): integer
public "getEntity"(): $LivingEntity
public "getLevel"(): integer
public "getSpell"(): $AbstractSpell
public "setLevel"(int0: integer): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "baseLevel"(): integer
get "entity"(): $LivingEntity
get "level"(): integer
get "spell"(): $AbstractSpell
set "level"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.api.item.weapons.ExtendedSwordItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $Tier, $Tier$$Type } from "net.minecraft.world.item.Tier"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map, $Map$$Type } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $SwordItem } from "net.minecraft.world.item.SwordItem"
import { $IronsWeaponTier, $IronsWeaponTier$$Type } from "io.redspace.ironsspellbooks.item.weapons.IronsWeaponTier"
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
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $ExtendedSwordItem extends $SwordItem {
constructor<T extends ($Tier & $IronsWeaponTier)>(t0: T, properties1: $Item$Properties$$Type)
/** @deprecated */
constructor(tier0: $Tier$$Type, double1: double, double2: double, map3: $Map$$Type<$Attribute$$Type, $AttributeModifier$$Type>, properties4: $Item$Properties$$Type)

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

declare module "io.redspace.ironsspellbooks.api.config.ModifyDefaultConfigValuesEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $SpellConfigParameter$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellConfigHolder$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigHolder"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ModifyDefaultConfigValuesEvent extends $Event implements $EventItf {
constructor()
constructor(abstractSpell0: $AbstractSpell$$Type, spellConfigHolder1: $SpellConfigHolder$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getSpell"(): $AbstractSpell
public "setDefaultValue"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>, t1: T): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "spell"(): $AbstractSpell
}
}

declare module "io.redspace.ironsspellbooks.mixin.ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor {
"irons_spellbooks$gravity"(float0: float): void
"irons_spellbooks$stoppedByCollision"(boolean0: boolean): void
"irons_spellbooks$xo"(double0: double): void
"irons_spellbooks$yo"(double0: double): void
"irons_spellbooks$zo"(double0: double): void
}

export namespace $ParticleAccessor {
const probejs$$marker: never
}
export abstract class $ParticleAccessor$$Static implements $ParticleAccessor {
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.GustDefenseGoal" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IMagicEntity$$Type } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $GustDefenseGoal extends $Goal {
constructor(iMagicEntity0: $IMagicEntity$$Type)

public "shouldAreaAttack"(livingEntity0: $LivingEntity$$Type): boolean
}
}

declare module "io.redspace.ironsspellbooks.util.ParticleHelper" {
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"

export class $ParticleHelper {
static readonly "ACID": $ParticleOptions
static readonly "ACID_BUBBLE": $ParticleOptions
static readonly "BLOOD": $ParticleOptions
static readonly "BLOOD_GROUND": $ParticleOptions
static readonly "CLEANSE_PARTICLE": $ParticleOptions
static readonly "COMET_FOG": $ParticleOptions
static readonly "ELECTRICITY": $ParticleOptions
static readonly "ELECTRIC_SPARKS": $ParticleOptions
static readonly "EMBERS": $ParticleOptions
static readonly "ENDER_SPARKS": $ParticleOptions
static readonly "FIERY_SMOKE": $ParticleOptions
static readonly "FIERY_SPARKS": $ParticleOptions
static readonly "FIRE": $ParticleOptions
static readonly "FIREFLY": $ParticleOptions
static readonly "FIRE_EMITTER": $ParticleOptions
static readonly "FOG": $ParticleOptions
static readonly "FOG_CAMPFIRE_SMOKE": $ParticleOptions
static readonly "FOG_THUNDER_DARK": $ParticleOptions
static readonly "FOG_THUNDER_LIGHT": $ParticleOptions
static readonly "ICY_FOG": $ParticleOptions
static readonly "POISON_CLOUD": $ParticleOptions
static readonly "PORTAL_FRAME": $ParticleOptions
static readonly "ROOT_FOG": $ParticleOptions
static readonly "SIPHON": $ParticleOptions
static readonly "SNOWFLAKE": $ParticleOptions
static readonly "SNOW_DUST": $ParticleOptions
static readonly "SUNBEAM": $ParticleOptions
static readonly "UNSTABLE_ENDER": $ParticleOptions
static readonly "VOID_TENTACLE_FOG": $ParticleOptions
static readonly "WISP": $ParticleOptions

constructor()

}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastResult" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CastResult$Type, $CastResult$Type$$Type } from "io.redspace.ironsspellbooks.api.spells.CastResult$Type"

export class $CastResult {
readonly "message": $Component
readonly "type": $CastResult$Type

constructor(type0: $CastResult$Type$$Type)
constructor(type0: $CastResult$Type$$Type, component1: $Component$$Type)

public "isSuccess"(): boolean
get "success"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.item.CastingItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
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
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $CastingItem extends $Item {
constructor(properties0: $Item$Properties$$Type)

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
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
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

declare module "io.redspace.ironsspellbooks.item.curios.CurioBaseItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $AttributeContainer$$Type } from "io.redspace.ironsspellbooks.item.weapons.AttributeContainer"
import { $ICurioItem } from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import { $Holder } from "net.minecraft.core.Holder"
import { $LootContext$$Type } from "net.minecraft.world.level.storage.loot.LootContext"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $ICurio$DropRule } from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $SlotContext$$Type } from "top.theillusivec4.curios.api.SlotContext"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ICurio$SoundInfo } from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
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
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $FoodBuilder$$Type } from "dev.latvian.mods.kubejs.item.FoodBuilder"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $CurioBaseItem extends $Item implements $ICurioItem {
constructor(properties0: $Item$Properties$$Type)

public "addAttribute"(attribute: $Attribute$$Type, uuid: $UUID$$Type, name: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "allowContinuingBlockBreaking"(player: $Player$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "allowNbtUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
public "arch$holder"(): $Holder<$Item>
public "arch$registryName"(): $ResourceLocation
public "canApplyAtEnchantingTable"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): boolean
public "canContinueUsing"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "canDisableShield"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type, livingEntity2: $LivingEntity$$Type, livingEntity3: $LivingEntity$$Type): boolean
public "canElytraFly"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "canEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
public "canEquip"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): boolean
public "canEquipFromUse"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "canGrindstoneRepair"(itemStack0: $ItemStack$$Type): boolean
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
/** @deprecated */
public "canRightClickEquip"(itemStack0: $ItemStack$$Type): boolean
/** @deprecated */
public "canSync"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): boolean
public "canSync"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
/** @deprecated */
public "canUnequip"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type): boolean
public "canUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "canWalkOnPowderedSnow"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "createEntity"(level0: $Level$$Type, entity1: $Entity$$Type, itemStack2: $ItemStack$$Type): $Entity
/** @deprecated */
public "curioAnimate"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "curioBreak"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
public "curioBreak"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): void
public "curioTick"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
/** @deprecated */
public "curioTick"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "damageItem"<T extends $LivingEntity>(itemStack0: $ItemStack$$Type, int1: integer, t2: T, consumer3: $Consumer$$Type<T>): integer
public "doesSneakBypassUse"(itemStack0: $ItemStack$$Type, levelReader1: $LevelReader$$Type, blockPos2: $BlockPos$$Type, player3: $Player$$Type): boolean
public "dragonlib$getCustomEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "dragonlib$tickArmor"(stack: $ItemStack$$Type, player: $Player$$Type): void
public "elytraFlightTick"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): boolean
public "getAllEnchantments"(itemStack0: $ItemStack$$Type): $Map<$Enchantment, integer>
public "getArmorTexture"(itemStack0: $ItemStack$$Type, entity1: $Entity$$Type, equipmentSlot2: $EquipmentSlot$$Type, string3: string): string
public "getAttributeModifiers"(slotContext0: $SlotContext$$Type, uUID1: $UUID$$Type, itemStack2: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
/** @deprecated */
public "getAttributeModifiers"(string0: string, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributeModifiers"(equipmentSlot0: $EquipmentSlot$$Type, itemStack1: $ItemStack$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributeModifiers"(stack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): $Multimap<$Attribute, $AttributeModifier>
public "getAttributes"(attribute: $Attribute$$Type): $List<$AttributeModifier>
public "getAttributesTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
public "getCraftingRemainingItem"(itemStack0: $ItemStack$$Type): $ItemStack
public "getCreativeTab"(): string
public "getCreatorModId"(itemStack0: $ItemStack$$Type): string
public "getDamage"(itemStack0: $ItemStack$$Type): integer
public "getDefaultTooltipHideFlags"(itemStack0: $ItemStack$$Type): integer
public "getDigSpeed"(): float
/** @deprecated */
public "getDropRule"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): $ICurio$DropRule
public "getDropRule"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, int2: integer, boolean3: boolean, itemStack4: $ItemStack$$Type): $ICurio$DropRule
public "getEnchantmentLevel"(itemStack0: $ItemStack$$Type, enchantment1: $Enchantment$$Type): integer
public "getEnchantmentValue"(itemStack0: $ItemStack$$Type): integer
public "getEntityLifespan"(itemStack0: $ItemStack$$Type, level1: $Level$$Type): integer
public "getEquipSound"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): $ICurio$SoundInfo
public "getFoodProperties"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): $FoodProperties
/** @deprecated */
public "getFortuneBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
public "getFortuneLevel"(slotContext0: $SlotContext$$Type, lootContext1: $LootContext$$Type, itemStack2: $ItemStack$$Type): integer
public "getHighlightTip"(itemStack0: $ItemStack$$Type, component1: $Component$$Type): $Component
/** @deprecated */
public "getLootingBonus"(string0: string, livingEntity1: $LivingEntity$$Type, itemStack2: $ItemStack$$Type, int3: integer): integer
public "getLootingLevel"(slotContext0: $SlotContext$$Type, damageSource1: $DamageSource$$Type, livingEntity2: $LivingEntity$$Type, int3: integer, itemStack4: $ItemStack$$Type): integer
public "getMaxDamage"(itemStack0: $ItemStack$$Type): integer
public "getMaxStackSize"(itemStack0: $ItemStack$$Type): integer
public "getMod"(): string
public "getRecipeRemainder"(stack: $ItemStack$$Type): $ItemStack
public "getShareTag"(itemStack0: $ItemStack$$Type): $CompoundTag
public "getSlotsTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
public "getSweepHitBox"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type): $AABB
/** @deprecated */
public "getTagsTooltip"(list0: $List$$Type<$Component$$Type>, itemStack1: $ItemStack$$Type): $List<$Component>
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCurioCapability"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "isBookEnchantable"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public "isCorrectToolForDrops"(itemStack0: $ItemStack$$Type, blockState1: $BlockState$$Type): boolean
public "isDamageable"(itemStack0: $ItemStack$$Type): boolean
public "isDamaged"(itemStack0: $ItemStack$$Type): boolean
public "isEnabled"(featureFlagSet0: $FeatureFlagSet$$Type): boolean
public "isEnderMask"(slotContext0: $SlotContext$$Type, enderMan1: $EnderMan$$Type, itemStack2: $ItemStack$$Type): boolean
public "isEnderMask"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, enderMan2: $EnderMan$$Type): boolean
public "isEquippedBy"(livingEntity0: $LivingEntity$$Type): boolean
public "isNotReplaceableByPickAction"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, int2: integer): boolean
public "isPiglinCurrency"(itemStack0: $ItemStack$$Type): boolean
public "isSuitableFor"(stack: $ItemStack$$Type, state: $BlockState$$Type): boolean
public "makesPiglinsNeutral"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "of"(item0: $Item$$Type): $ItemDefinitionDuck
/** @deprecated */
public "onArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type): void
public "onBlockStartBreak"(itemStack0: $ItemStack$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
public "onDroppedByPlayer"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): boolean
public "onEntityItemUpdate"(itemStack0: $ItemStack$$Type, itemEntity1: $ItemEntity$$Type): boolean
public "onEntitySwing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "onEquip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
public "onEquip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "onEquipFromUse"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): void
public "onHorseArmorTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, mob2: $Mob$$Type): void
public "onInventoryTick"(itemStack0: $ItemStack$$Type, level1: $Level$$Type, player2: $Player$$Type, int3: integer, int4: integer): void
public "onItemUseFirst"(itemStack0: $ItemStack$$Type, useOnContext1: $UseOnContext$$Type): $InteractionResult
public "onLeftClickEntity"(itemStack0: $ItemStack$$Type, player1: $Player$$Type, entity2: $Entity$$Type): boolean
public "onStopUsing"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, int2: integer): void
/** @deprecated */
public "onUnequip"(string0: string, int1: integer, livingEntity2: $LivingEntity$$Type, itemStack3: $ItemStack$$Type): void
public "onUnequip"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
public "playRightClickEquipSound"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type): void
public "readShareTag"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): void
public "readSyncData"(slotContext0: $SlotContext$$Type, compoundTag1: $CompoundTag$$Type, itemStack2: $ItemStack$$Type): void
/** @deprecated */
public "readSyncData"(compoundTag0: $CompoundTag$$Type, itemStack1: $ItemStack$$Type): void
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
/** @deprecated */
public "showAttributesTooltip"(string0: string, itemStack1: $ItemStack$$Type): boolean
public "vMinus$update"(): void
public "withAttributes"(string0: string, ...attributeContainer1s: $AttributeContainer$$Type[]): $CurioBaseItem
public "withSpellbookAttributes"(...attributeContainer0s: $AttributeContainer$$Type[]): $CurioBaseItem
public "writeSyncData"(slotContext0: $SlotContext$$Type, itemStack1: $ItemStack$$Type): $CompoundTag
/** @deprecated */
public "writeSyncData"(itemStack0: $ItemStack$$Type): $CompoundTag
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

declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $SpellSelectionManager, $SpellSelectionManager$$Type } from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"

export class $SpellSelectionManager$SpellSelectionEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, spellSelectionManager1: $SpellSelectionManager$$Type)

public "addSelectionOption"(spellData0: $SpellData$$Type, string1: string, int2: integer, int3: integer): void
public "addSelectionOption"(spellData0: $SpellData$$Type, string1: string, int2: integer): void
public "getManager"(): $SpellSelectionManager
get "manager"(): $SpellSelectionManager
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.TargetEntityCastData" {
import { $ICastData } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $UUID } from "java.util.UUID"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $TargetEntityCastData implements $ICastData {
constructor(livingEntity0: $LivingEntity$$Type)

public "getTarget"(serverLevel0: $ServerLevel$$Type): $LivingEntity
public "getTargetPosition"(serverLevel0: $ServerLevel$$Type): $Vec3
public "getTargetUUID"(): $UUID
public "reset"(): void
get "targetUUID"(): $UUID
}
}

declare module "io.redspace.ironsspellbooks.damage.SpellDamageSource" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellDamageSource extends $DamageSource {
public "get"(): $DamageSource
public "getFireTime"(): integer
public "getFreezeTicks"(): integer
public "getIFrames"(): integer
public "getLifestealPercent"(): float
public "hasPostHitEffects"(): boolean
public "setFireTicks"(int0: integer): $SpellDamageSource
public "setFreezeTicks"(int0: integer): $SpellDamageSource
public "setIFrames"(int0: integer): $SpellDamageSource
public "setLifestealPercent"(float0: float): $SpellDamageSource
public static "source"(entity0: $Entity$$Type, abstractSpell1: $AbstractSpell$$Type): $SpellDamageSource
public static "source"(entity0: $Entity$$Type, entity1: $Entity$$Type, abstractSpell2: $AbstractSpell$$Type): $SpellDamageSource
public "spell"(): $AbstractSpell
get "fireTime"(): integer
get "freezeTicks"(): integer
get "iFrames"(): integer
get "lifestealPercent"(): float
set "fireTicks"(value: integer)
set "freezeTicks"(value: integer)
set "iFrames"(value: integer)
set "lifestealPercent"(value: float)
}
}

declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager" {
import { $List } from "java.util.List"
import { $SpellSelectionManager$SelectionOption } from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $SpellSelection } from "io.redspace.ironsspellbooks.gui.overlays.SpellSelection"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellSelectionManager {
static readonly "MAINHAND": string
static readonly "OFFHAND": string

constructor(player0: $Player$$Type)

public "getAllSpells"(): $List<$SpellSelectionManager$SelectionOption>
public "getCurrentSelection"(): $SpellSelection
public "getGlobalSelectionIndex"(): integer
public "getSelectedSpellData"(): $SpellData
public "getSelection"(): $SpellSelectionManager$SelectionOption
public "getSelectionIndex"(): integer
public "getSpellCount"(): integer
public "getSpellData"(int0: integer): $SpellData
public "getSpellForSlot"(string0: string, int1: integer): $SpellData
public "getSpellSlot"(int0: integer): $SpellSelectionManager$SelectionOption
public "getSpellsForSlot"(string0: string): $List<$SpellSelectionManager$SelectionOption>
/** Client only, do not use in server scripts */
public "makeSelection"(int0: integer): void
get "allSpells"(): $List<$SpellSelectionManager$SelectionOption>
get "currentSelection"(): $SpellSelection
get "globalSelectionIndex"(): integer
get "selectedSpellData"(): $SpellData
get "selection"(): $SpellSelectionManager$SelectionOption
get "selectionIndex"(): integer
get "spellCount"(): integer
}
}

declare module "io.redspace.ironsspellbooks.worldgen.IExtendedNoiseChunk$AquifierNuke" {
import { $BoundingBox, $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Record } from "java.lang.Record"

export class $IExtendedNoiseChunk$AquifierNuke extends $Record {
constructor(boundingBoxes: $BoundingBox$$Type[])

public "boundingBoxes"(): $BoundingBox[]
}
}

declare module "io.redspace.ironspatreonlib.game.client.ICapeDataProvider" {
import { $CapeData } from "io.redspace.ironspatreonlib.game.client.CapeData"

export interface $ICapeDataProvider {
"irons_patreon_lib$getCapeData"(): $CapeData
}

export namespace $ICapeDataProvider {
const probejs$$marker: never
}
export abstract class $ICapeDataProvider$$Static implements $ICapeDataProvider {
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WarlockAttackGoal" {
import { $IMagicEntity$$Type } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $WizardAttackGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardAttackGoal"

export class $WarlockAttackGoal extends $WizardAttackGoal {
/** @deprecated */
constructor(iMagicEntity0: $IMagicEntity$$Type, double1: double, int2: integer, int3: integer, float4: float)
constructor(iMagicEntity0: $IMagicEntity$$Type, double1: double, int2: integer, int3: integer)

public "meleeRange"(): float
public "setIsFlying"(): $WarlockAttackGoal
public "setMeleeAttackInverval"(int0: integer, int1: integer): $WarlockAttackGoal
public "setMeleeBias"(float0: float, float1: float): $WarlockAttackGoal
public "setMeleeMovespeedModifier"(float0: float): $WarlockAttackGoal
set "meleeMovespeedModifier"(value: float)
}
}

declare module "io.redspace.ironsspellbooks.registries.PotionRegistry" {
import { $FMLCommonSetupEvent$$Type } from "net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent"
import { $DeferredRegister } from "net.minecraftforge.registries.DeferredRegister"
import { $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $Potion } from "net.minecraft.world.item.alchemy.Potion"
import { $RegistryObject } from "net.minecraftforge.registries.RegistryObject"

export class $PotionRegistry {
static readonly "INSTANT_MANA_FOUR": $RegistryObject<$Potion>
static readonly "INSTANT_MANA_ONE": $RegistryObject<$Potion>
static readonly "INSTANT_MANA_THREE": $RegistryObject<$Potion>
static readonly "INSTANT_MANA_TWO": $RegistryObject<$Potion>
static readonly "POTIONS": $DeferredRegister<$Potion>

constructor()

public static "addRecipes"(fMLCommonSetupEvent0: $FMLCommonSetupEvent$$Type): void
public static "register"(iEventBus0: $IEventBus$$Type): void
}
}

declare module "io.redspace.ironsspellbooks.api.config.DefaultConfig" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpellRarity, $SpellRarity$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"

export class $DefaultConfig {
constructor(consumer0: $Consumer$$Type<$DefaultConfig$$Type>)
constructor()

public "build"(): $DefaultConfig
public "setAllowCrafting"(boolean0: boolean): $DefaultConfig
public "setCooldownSeconds"(double0: double): $DefaultConfig
public "setDeprecated"(boolean0: boolean): $DefaultConfig
public "setMaxLevel"(int0: integer): $DefaultConfig
public "setMinRarity"(spellRarity0: $SpellRarity$$Type): $DefaultConfig
public "setSchoolResource"(resourceLocation0: $ResourceLocation$$Type): $DefaultConfig
get "allowCrafting"(): boolean
set "allowCrafting"(value: boolean)
get "cooldownInSeconds"(): double
set "cooldownInSeconds"(value: double)
get "enabled"(): boolean
set "enabled"(value: boolean)
get "maxLevel"(): integer
set "maxLevel"(value: integer)
get "minRarity"(): $SpellRarity
set "minRarity"(value: $SpellRarity$$Type)
get "schoolResource"(): $ResourceLocation
set "schoolResource"(value: $ResourceLocation$$Type)
set "cooldownSeconds"(value: double)
set "deprecated"(value: boolean)
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.SupportMob" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

export interface $SupportMob {
"getSupportTarget"(): $LivingEntity
"setSupportTarget"(livingEntity0: $LivingEntity$$Type): void
get "supportTarget"(): $LivingEntity
set "supportTarget"(value: $LivingEntity$$Type)
}

export namespace $SupportMob {
const probejs$$marker: never
}
export abstract class $SupportMob$$Static implements $SupportMob {
}
}

declare module "io.redspace.ironsspellbooks.mixin.EntityAccessor" {
import { $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"

export interface $EntityAccessor {
"setRemovalReason"(removalReason0: $Entity$RemovalReason$$Type): void
set "removalReason"(value: $Entity$RemovalReason$$Type)
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export abstract class $EntityAccessor$$Static implements $EntityAccessor {
}
}

declare module "io.redspace.ironsspellbooks.item.ILecternPlaceable" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Optional } from "java.util.Optional"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ILecternPlaceable {
"getPages"(itemStack0: $ItemStack$$Type): $List<$Component>
"handleCustomLecternPosing"(poseStack0: $PoseStack$$Type): void
"simpleTextureOverride"(itemStack0: $ItemStack$$Type): $Optional<$ResourceLocation>
}

export namespace $ILecternPlaceable {
const probejs$$marker: never
}
export abstract class $ILecternPlaceable$$Static implements $ILecternPlaceable {
}
}

declare module "io.redspace.ironsspellbooks.api.config.SpellConfigHolder" {
import { $JsonObject } from "com.google.gson.JsonObject"
import { $SpellConfigParameter$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import { $Gson$$Type } from "com.google.gson.Gson"
import { $Optional } from "java.util.Optional"

export class $SpellConfigHolder {
constructor()

public "get"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>): T
public "getDefaultValue"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>): $Optional<T>
public "isDefault"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>): boolean
public "set"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>, t1: T): void
public "setDefaultValue"<T>(spellConfigParameter0: $SpellConfigParameter$$Type<T>, t1: T): void
public "toJson"<T>(gson0: $Gson$$Type): $JsonObject
}
}

declare module "io.redspace.ironspatreonlib.mixin.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
export abstract class $PlayerAccessor$$Static implements $PlayerAccessor {
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WizardAttackGoal" {
import { $List$$Type } from "java.util.List"
import { $IMagicEntity$$Type } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $WizardAttackGoal extends $Goal {
constructor(iMagicEntity0: $IMagicEntity$$Type, double1: double, int2: integer, int3: integer)
constructor(iMagicEntity0: $IMagicEntity$$Type, double1: double, int2: integer)

public "getStrafeMultiplier"(): float
public "isActing"(): boolean
/** @deprecated */
public "resetAttackTimer"(double0: double): void
public "setAllowFleeing"(boolean0: boolean): $WizardAttackGoal
public "setDrinksPotions"(): $WizardAttackGoal
public "setIsFlying"(): $WizardAttackGoal
public "setSingleUseSpell"(abstractSpell0: $AbstractSpell$$Type, int1: integer, int2: integer, int3: integer, int4: integer): $WizardAttackGoal
public "setSpellQuality"(float0: float, float1: float): $WizardAttackGoal
public "setSpells"(list0: $List$$Type<$AbstractSpell$$Type>, list1: $List$$Type<$AbstractSpell$$Type>, list2: $List$$Type<$AbstractSpell$$Type>, list3: $List$$Type<$AbstractSpell$$Type>): $WizardAttackGoal
get "strafeMultiplier"(): float
get "acting"(): boolean
set "allowFleeing"(value: boolean)
}
}

declare module "io.redspace.ironsspellbooks.api.spells.SpellData" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component } from "net.minecraft.network.chat.Component"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellRarity } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $Comparable } from "java.lang.Comparable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export class $SpellData implements $Comparable<$SpellData> {
static readonly "CODEC": $Codec<$SpellData>
static readonly "EMPTY": $SpellData
static readonly "SPELL_ID": string
static readonly "SPELL_LEVEL": string
static readonly "SPELL_LOCKED": string

constructor(resourceLocation0: $ResourceLocation$$Type, int1: integer, boolean2: boolean)
constructor(abstractSpell0: $AbstractSpell$$Type, int1: integer)
constructor(abstractSpell0: $AbstractSpell$$Type, int1: integer, boolean2: boolean)

public "canRemove"(): boolean
public "compareTo"(spellData0: $SpellData$$Type): integer
public "getDisplayName"(): $Component
public "getLevel"(): integer
public "getRarity"(): $SpellRarity
public "getSpell"(): $AbstractSpell
public "isLocked"(): boolean
public static "readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): $SpellData
public static "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type, spellData1: $SpellData$$Type): void
get "displayName"(): $Component
get "level"(): integer
get "rarity"(): $SpellRarity
get "spell"(): $AbstractSpell
get "locked"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.events.ChangeManaEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $MagicData, $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ChangeManaEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, magicData1: $MagicData$$Type, float2: float, float3: float)

public "getMagicData"(): $MagicData
public "getNewMana"(): float
public "getOldMana"(): float
public "setNewMana"(float0: float): void
get "magicData"(): $MagicData
get "newMana"(): float
get "oldMana"(): float
set "newMana"(value: float)
}
}

declare module "io.redspace.ironspatreonlib.game.client.ISupportTransmog" {
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $ISupportTransmog {
"irons_patreon_lib$getArmorBySlotRaw"(equipmentSlot0: $EquipmentSlot$$Type): $ItemStack
}

export namespace $ISupportTransmog {
const probejs$$marker: never
}
export abstract class $ISupportTransmog$$Static implements $ISupportTransmog {
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance" {
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ISerializable } from "io.redspace.ironsspellbooks.api.network.ISerializable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $ICastDataSerializable, $ICastDataSerializable$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $RecastInstance implements $ISerializable, $INBTSerializable<$CompoundTag> {
constructor()
constructor(string0: string, int1: integer, int2: integer, int3: integer, castSource4: $CastSource$$Type, iCastDataSerializable5: $ICastDataSerializable$$Type)

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "getCastData"(): $ICastDataSerializable
public "getCastSource"(): $CastSource
public "getRemainingRecasts"(): integer
public "getSpellId"(): string
public "getSpellLevel"(): integer
public "getTicksRemaining"(): integer
public "getTicksToLive"(): integer
public "getTotalRecasts"(): integer
public "readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "castData"(): $ICastDataSerializable
get "castSource"(): $CastSource
get "remainingRecasts"(): integer
get "spellId"(): string
get "spellLevel"(): integer
get "ticksRemaining"(): integer
get "ticksToLive"(): integer
get "totalRecasts"(): integer
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CooldownInstance {
constructor(int0: integer)
constructor(int0: integer, int1: integer)

public "decrement"(): void
public "decrementBy"(int0: integer): void
public "getCooldownPercent"(): float
public "getCooldownRemaining"(): integer
public "getSpellCooldown"(): integer
get "cooldownPercent"(): float
get "cooldownRemaining"(): integer
get "spellCooldown"(): integer
}
}

declare module "io.redspace.ironsspellbooks.player.SpinAttackType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Record } from "java.lang.Record"

export class $SpinAttackType extends $Record {
static readonly "FIRE": $SpinAttackType
static readonly "LIGHTNING": $SpinAttackType
static readonly "RIPTIDE": $SpinAttackType

constructor(textureId: $ResourceLocation$$Type, fullbright: boolean)

public "fullbright"(): boolean
public "textureId"(): $ResourceLocation
}
}

declare module "io.redspace.ironspatreonlib.game.client.CapeData" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"

export class $CapeData {
constructor()

public "calculateRotationsDegrees"(livingEntity0: $LivingEntity$$Type, float1: float): $Vec3
public "renderUpdate"(livingEntity0: $LivingEntity$$Type): void
get "bob"(): float
set "bob"(value: float)
get "lastTick"(): integer
set "lastTick"(value: integer)
get "oBob"(): float
set "oBob"(value: float)
get "xCloak"(): double
set "xCloak"(value: double)
get "xCloakO"(): double
set "xCloakO"(value: double)
get "yCloak"(): double
set "yCloak"(value: double)
get "yCloakO"(): double
set "yCloakO"(value: double)
get "zCloak"(): double
set "zCloak"(value: double)
get "zCloakO"(): double
set "zCloakO"(value: double)
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellSummonEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

/** @deprecated */
export class $SpellSummonEvent<K extends $LivingEntity = $LivingEntity> extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, k1: K, resourceLocation2: $ResourceLocation$$Type, int3: integer)

public "getCaster"(): $LivingEntity
public "getCreature"(): K
public "getSpellId"(): $ResourceLocation
public "getSpellLevel"(): integer
public "setCreature"(k0: K): void
get "caster"(): $LivingEntity
get "creature"(): K
get "spellId"(): $ResourceLocation
get "spellLevel"(): integer
set "creature"(value: K)
}
}

declare module "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SelectionOption" {
import { $CastSource } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SpellData, $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"

export class $SpellSelectionManager$SelectionOption {
constructor(spellData0: $SpellData$$Type, string1: string, int2: integer, int3: integer)

public "getCastSource"(): $CastSource
get "globalIndex"(): integer
set "globalIndex"(value: integer)
get "slot"(): string
set "slot"(value: string)
get "slotIndex"(): integer
set "slotIndex"(value: integer)
get "spellData"(): $SpellData
set "spellData"(value: $SpellData$$Type)
get "castSource"(): $CastSource
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WizardRecoverGoal" {
import { $IMagicEntity$$Type } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $WizardRecoverGoal extends $Goal {
constructor(iMagicEntity0: $IMagicEntity$$Type)
constructor(iMagicEntity0: $IMagicEntity$$Type, int1: integer, int2: integer)

}
}

declare module "io.redspace.ironsspellbooks.mixin.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {
"setLivingEntityFlagInvoker"(int0: integer, boolean1: boolean): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellDamageEvent" {
import { $SpellDamageSource, $SpellDamageSource$$Type } from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $SpellDamageEvent extends $LivingEvent {
constructor(livingEntity0: $LivingEntity$$Type, float1: float, spellDamageSource2: $SpellDamageSource$$Type)
constructor()

public "getAmount"(): float
public "getOriginalAmount"(): float
public "getSpellDamageSource"(): $SpellDamageSource
public "setAmount"(float0: float): void
get "amount"(): float
get "originalAmount"(): float
get "spellDamageSource"(): $SpellDamageSource
set "amount"(value: float)
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Map } from "java.util.Map"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $CooldownInstance, $CooldownInstance$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.CooldownInstance"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $PlayerCooldowns {
static readonly "COOLDOWN_REMAINING": string
static readonly "SPELL_COOLDOWN": string
static readonly "SPELL_ID": string

constructor()

public "addCooldown"(string0: string, int1: integer): void
public "addCooldown"(string0: string, int1: integer, int2: integer): void
public "addCooldown"(abstractSpell0: $AbstractSpell$$Type, int1: integer, int2: integer): void
public "addCooldown"(abstractSpell0: $AbstractSpell$$Type, int1: integer): void
public "clearCooldowns"(): void
public "decrementCooldown"(cooldownInstance0: $CooldownInstance$$Type, int1: integer): boolean
public "getCooldownPercent"(abstractSpell0: $AbstractSpell$$Type): float
public "getSpellCooldowns"(): $Map<string, $CooldownInstance>
public "hasCooldownsActive"(): boolean
public "isOnCooldown"(abstractSpell0: $AbstractSpell$$Type): boolean
public "loadNBTData"(listTag0: $ListTag$$Type): void
public "removeCooldown"(string0: string): boolean
public "saveNBTData"(): $ListTag
public "setTickBuffer"(int0: integer): void
public "syncToPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "tick"(int0: integer): void
get "spellCooldowns"(): $Map<string, $CooldownInstance>
set "tickBuffer"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WizardSupportGoal" {
import { $List$$Type } from "java.util.List"
import { $IMagicEntity, $IMagicEntity$$Type } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $SupportMob, $SupportMob$$Type } from "io.redspace.ironsspellbooks.entity.mobs.SupportMob"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $PathfinderMob, $PathfinderMob$$Type } from "net.minecraft.world.entity.PathfinderMob"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $WizardSupportGoal<T extends ($PathfinderMob & $SupportMob & $IMagicEntity) = ($PathfinderMob & $SupportMob & $IMagicEntity)> extends $Goal {
constructor(t0: T, double1: double, int2: integer)
constructor(t0: T, double1: double, int2: integer, int3: integer)

public "setIsFlying"(): $WizardSupportGoal<T>
public "setSpellQuality"(float0: float, float1: float): $WizardSupportGoal<T>
public "setSpells"(list0: $List$$Type<$AbstractSpell$$Type>, list1: $List$$Type<$AbstractSpell$$Type>): $WizardSupportGoal<T>
}
}

declare module "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $RecastInstance, $RecastInstance$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import { $List } from "java.util.List"
import { $RecastResult$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import { $Map$$Type } from "java.util.Map"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $PlayerRecasts {
/** Client only, do not use in server scripts */
constructor(map0: $Map$$Type<string, $RecastInstance$$Type>)
constructor(serverPlayer0: $ServerPlayer$$Type)
constructor()

public "addRecast"(recastInstance0: $RecastInstance$$Type, magicData1: $MagicData$$Type): boolean
public "decrementRecastCount"(string0: string): void
public "decrementRecastCount"(abstractSpell0: $AbstractSpell$$Type): void
public "forceAddRecast"(recastInstance0: $RecastInstance$$Type): void
public "getActiveRecasts"(): $List<$RecastInstance>
public "getAllRecasts"(): $List<$RecastInstance>
public "getRecastInstance"(string0: string): $RecastInstance
public "getRemainingRecastsForSpell"(string0: string): integer
public "getRemainingRecastsForSpell"(abstractSpell0: $AbstractSpell$$Type): integer
public "hasRecastForSpell"(abstractSpell0: $AbstractSpell$$Type): boolean
public "hasRecastForSpell"(string0: string): boolean
public "hasRecastsActive"(): boolean
public "isRecastActive"(recastInstance0: $RecastInstance$$Type): boolean
public "loadNBTData"(listTag0: $ListTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "removeAll"(recastResult0: $RecastResult$$Type): void
public "removeRecast"(recastInstance0: $RecastInstance$$Type, recastResult1: $RecastResult$$Type): void
/** Client only, do not use in server scripts */
public "removeRecast"(string0: string): void
public "saveNBTData"(provider0: $HolderLookup$Provider$$Type): $ListTag
public "syncAllToPlayer"(): void
public "syncRemoveToPlayer"(string0: string): void
public "syncToPlayer"(recastInstance0: $RecastInstance$$Type): void
public "tick"(int0: integer): void
/** Client only, do not use in server scripts */
public "tickRecasts"(): void
get "activeRecasts"(): $List<$RecastInstance>
get "allRecasts"(): $List<$RecastInstance>
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.WispAttackGoal" {
import { $PathfinderMob$$Type } from "net.minecraft.world.entity.PathfinderMob"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $WispAttackGoal extends $Goal {
constructor(pathfinderMob0: $PathfinderMob$$Type, double1: double)

}
}

declare module "io.redspace.ironsspellbooks.api.spells.AbstractSpell" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DefaultConfig } from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import { $RecastResult$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastResult"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $AnimationHolder } from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Vector3f } from "org.joml.Vector3f"
import { $SpellModificationBuilder } from "com.squoshi.irons_spells_js.spell.SpellModificationBuilder"
import { $RecastInstance$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.RecastInstance"
import { $Component } from "net.minecraft.network.chat.Component"
import { $CastType } from "io.redspace.ironsspellbooks.api.spells.CastType"
import { $ICastDataSerializable, $ICastDataSerializable$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable"
import { $Style } from "net.minecraft.network.chat.Style"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $SpellDamageSource } from "io.redspace.ironsspellbooks.damage.SpellDamageSource"
import { $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $List } from "java.util.List"
import { $ICastData$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ISpellModify } from "com.squoshi.irons_spells_js.util.ISpellModify"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $SpellRarity, $SpellRarity$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $CastResult } from "io.redspace.ironsspellbooks.api.spells.CastResult"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $AbstractSpell implements $ISpellModify {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor()

public "allowCrafting"(): boolean
public "allowLooting"(): boolean
public "attemptInitiateCast"(itemStack0: $ItemStack$$Type, int1: integer, level2: $Level$$Type, player3: $Player$$Type, castSource4: $CastSource$$Type, boolean5: boolean, string6: string): boolean
public "canBeCastedBy"(int0: integer, castSource1: $CastSource$$Type, magicData2: $MagicData$$Type, player3: $Player$$Type): $CastResult
public "canBeCraftedBy"(player0: $Player$$Type): boolean
public "canBeInterrupted"(player0: $Player$$Type): boolean
public "castSpell"(level0: $Level$$Type, int1: integer, serverPlayer2: $ServerPlayer$$Type, castSource3: $CastSource$$Type, boolean4: boolean): void
public "checkPreCastConditions"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type): boolean
public "getCastFinishAnimation"(): $AnimationHolder
public "getCastFinishSound"(): $Optional<$SoundEvent>
public "getCastStartAnimation"(): $AnimationHolder
public "getCastStartSound"(): $Optional<$SoundEvent>
public "getCastTime"(int0: integer): integer
public "getCastType"(): $CastType
public "getComponentId"(): string
public "getDamageSource"(entity0: $Entity$$Type, entity1: $Entity$$Type): $SpellDamageSource
public "getDamageSource"(entity0: $Entity$$Type): $SpellDamageSource
public "getDeathMessageId"(): string
public "getDefaultConfig"(): $DefaultConfig
public "getDisplayName"(player0: $Player$$Type): $MutableComponent
public "getEffectiveCastTime"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public "getEmptyCastData"(): $ICastDataSerializable
public "getEntityPowerMultiplier"(livingEntity0: $LivingEntity$$Type): float
public "getLevelFor"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public "getLockedMessage"(): $Component
public "getManaCost"(int0: integer): integer
public "getMaxLevel"(): integer
public "getMaxRarity"(): integer
public "getMinLevel"(): integer
public "getMinLevelForRarity"(spellRarity0: $SpellRarity$$Type): integer
/** @deprecated */
public "getMinRarity"(): integer
public "getRarity"(int0: integer): $SpellRarity
public "getRecastCount"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public "getSchoolType"(): $SchoolType
public "getSpellCooldown"(): integer
public "getSpellIconResource"(): $ResourceLocation
public "getSpellId"(): string
public "getSpellName"(): string
public "getSpellPower"(int0: integer, entity1: $Entity$$Type): float
public "getSpellResource"(): $ResourceLocation
public "getTargetingColor"(): $Vector3f
public "getUniqueInfo"(int0: integer, livingEntity1: $LivingEntity$$Type): $List<$MutableComponent>
public "irons_spells_js$getBuilder"(): $SpellModificationBuilder
public "irons_spells_js$setBuilder"(resourceLocation: $ResourceLocation$$Type): void
public "isEnabled"(): boolean
public "isLearned"(player0: $Player$$Type): boolean
public "obfuscateStats"(player0: $Player$$Type): boolean
public "onCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, castSource3: $CastSource$$Type, magicData4: $MagicData$$Type): void
public "onClientCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, iCastData3: $ICastData$$Type): void
public "onClientPreCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, interactionHand3: $InteractionHand$$Type, magicData4: $MagicData$$Type): void
public "onRecastFinished"(serverPlayer0: $ServerPlayer$$Type, recastInstance1: $RecastInstance$$Type, recastResult2: $RecastResult$$Type, iCastDataSerializable3: $ICastDataSerializable$$Type): void
public "onServerCastComplete"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type, boolean4: boolean): void
public "onServerCastTick"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type): void
public "onServerPreCast"(level0: $Level$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, magicData3: $MagicData$$Type): void
public "playSound"(optional0: $Optional$$Type<$SoundEvent$$Type>, entity1: $Entity$$Type): void
public "requiresLearning"(): boolean
public "resetRarityWeights"(): void
public "shouldAIStopCasting"(int0: integer, mob1: $Mob$$Type, livingEntity2: $LivingEntity$$Type): boolean
public "stopSoundOnCancel"(): boolean
get "castFinishAnimation"(): $AnimationHolder
get "castFinishSound"(): $Optional<$SoundEvent>
get "castStartAnimation"(): $AnimationHolder
get "castStartSound"(): $Optional<$SoundEvent>
get "castType"(): $CastType
get "componentId"(): string
get "deathMessageId"(): string
get "defaultConfig"(): $DefaultConfig
get "emptyCastData"(): $ICastDataSerializable
get "lockedMessage"(): $Component
get "maxLevel"(): integer
get "maxRarity"(): integer
get "minLevel"(): integer
get "minRarity"(): integer
get "schoolType"(): $SchoolType
get "spellCooldown"(): integer
get "spellIconResource"(): $ResourceLocation
get "spellId"(): string
get "spellName"(): string
get "spellResource"(): $ResourceLocation
get "targetingColor"(): $Vector3f
get "enabled"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.config.SpellConfigParameter" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SchoolType } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $SpellRarity } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $Record } from "java.lang.Record"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $SpellConfigParameter<T = any> extends $Record {
static readonly "ALLOW_CRAFTING": $SpellConfigParameter<boolean>
static readonly "COOLDOWN_IN_SECONDS": $SpellConfigParameter<double>
static readonly "ENABLED": $SpellConfigParameter<boolean>
static readonly "MANA_MULTIPLIER": $SpellConfigParameter<double>
static readonly "MAX_LEVEL": $SpellConfigParameter<integer>
static readonly "MIN_RARITY": $SpellConfigParameter<$SpellRarity>
static readonly "POWER_MULTIPLIER": $SpellConfigParameter<double>
static readonly "SCHOOL": $SpellConfigParameter<$SchoolType>

constructor(resourceLocation0: $ResourceLocation$$Type, codec1: $Codec$$Type<T>, t2: T)
constructor(key: $ResourceLocation$$Type, datatype: $Codec$$Type<T>, defaultValue: $Supplier$$Type<T>)

public "datatype"(): $Codec<T>
public "defaultValue"(): $Supplier<T>
public "key"(): $ResourceLocation
}
}

declare module "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $IPresetSpellContainer {
"initializeSpellContainer"(itemStack0: $ItemStack$$Type): void
}

export namespace $IPresetSpellContainer {
const probejs$$marker: never
}
export abstract class $IPresetSpellContainer$$Static implements $IPresetSpellContainer {
}
}

declare module "io.redspace.ironsspellbooks.api.magic.MagicData" {
import { $SyncedSpellData, $SyncedSpellData$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $HolderLookup$Provider$$Type } from "net.minecraft.core.HolderLookup$Provider"
import { $CastType } from "io.redspace.ironsspellbooks.api.spells.CastType"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ICastData, $ICastData$$Type } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $PlayerRecasts, $PlayerRecasts$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.PlayerRecasts"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $PlayerCooldowns } from "io.redspace.ironsspellbooks.capabilities.magic.PlayerCooldowns"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $MagicData {
static readonly "COOLDOWNS": string
static readonly "MANA": string
static readonly "RECASTS": string

constructor(serverPlayer0: $ServerPlayer$$Type)
constructor()
constructor(boolean0: boolean)

public "addMana"(float0: float): void
public "getAdditionalCastData"(): $ICastData
public "getCastCompletionPercent"(): float
public "getCastDuration"(): integer
public "getCastDurationRemaining"(): integer
public "getCastSource"(): $CastSource
public "getCastType"(): $CastType
public "getCastingEquipmentSlot"(): string
public "getCastingSpell"(): $SpellData
public "getCastingSpellId"(): string
public "getCastingSpellLevel"(): integer
public "getMana"(): float
public "getPlayerCastingItem"(): $ItemStack
public "getPlayerCooldowns"(): $PlayerCooldowns
public static "getPlayerMagicData"(livingEntity0: $LivingEntity$$Type): $MagicData
public "getPlayerRecasts"(): $PlayerRecasts
public "getSyncedData"(): $SyncedSpellData
public "handleCastDuration"(): void
public "initiateCast"(abstractSpell0: $AbstractSpell$$Type, int1: integer, int2: integer, castSource3: $CastSource$$Type, string4: string): void
public "isCasting"(): boolean
public "loadNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "markPoisoned"(): void
public "popMarkedPoison"(): boolean
public "resetAdditionalCastData"(): void
public "resetCastingState"(): void
public "saveNBTData"(compoundTag0: $CompoundTag$$Type, provider1: $HolderLookup$Provider$$Type): void
public "setAdditionalCastData"(iCastData0: $ICastData$$Type): void
public "setMana"(float0: float): void
public "setPlayerCastingItem"(itemStack0: $ItemStack$$Type): void
/** Client only, do not use in server scripts */
public "setPlayerRecasts"(playerRecasts0: $PlayerRecasts$$Type): void
public "setServerPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "setSyncedData"(syncedSpellData0: $SyncedSpellData$$Type): void
get "additionalCastData"(): $ICastData
get "castCompletionPercent"(): float
get "castDuration"(): integer
get "castDurationRemaining"(): integer
get "castSource"(): $CastSource
get "castType"(): $CastType
get "castingEquipmentSlot"(): string
get "castingSpell"(): $SpellData
get "castingSpellId"(): string
get "castingSpellLevel"(): integer
get "mana"(): float
get "playerCastingItem"(): $ItemStack
get "playerCooldowns"(): $PlayerCooldowns
get "playerRecasts"(): $PlayerRecasts
get "syncedData"(): $SyncedSpellData
get "casting"(): boolean
set "additionalCastData"(value: $ICastData$$Type)
set "mana"(value: float)
set "playerCastingItem"(value: $ItemStack$$Type)
set "playerRecasts"(value: $PlayerRecasts$$Type)
set "serverPlayer"(value: $ServerPlayer$$Type)
set "syncedData"(value: $SyncedSpellData$$Type)
}
}

declare module "io.redspace.ironsspellbooks.spells.NoneSpell" {
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $NoneSpell extends $AbstractSpell {
constructor()

}
}

declare module "io.redspace.ironsspellbooks.api.magic.MagicData$IExtendedEntity" {
import { $IArmorCapeProvider$CapeData } from "io.redspace.ironsspellbooks.item.armor.IArmorCapeProvider$CapeData"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $MagicData$IExtendedEntity {
"irons_spellbooks$getCapData"(): $IArmorCapeProvider$CapeData
"irons_spellbooks$getMagicData"(): $MagicData
}

export namespace $MagicData$IExtendedEntity {
const probejs$$marker: never
}
export abstract class $MagicData$IExtendedEntity$$Static implements $MagicData$IExtendedEntity {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellPreCastEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SchoolType, $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellPreCastEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, string1: string, int2: integer, schoolType3: $SchoolType$$Type, castSource4: $CastSource$$Type)

public "getCastSource"(): $CastSource
public "getSchoolType"(): $SchoolType
public "getSpellId"(): string
public "getSpellLevel"(): integer
get "castSource"(): $CastSource
get "schoolType"(): $SchoolType
get "spellId"(): string
get "spellLevel"(): integer
}
}

declare module "io.redspace.ironsspellbooks.api.item.ISpellbook" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISpellbook {
}

export namespace $ISpellbook {
const probejs$$marker: never
}
export abstract class $ISpellbook$$Static implements $ISpellbook {
}
}

declare module "io.redspace.ironsspellbooks.api.events.InscribeSpellEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $SpellData, $SpellData$$Type } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $InscribeSpellEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, spellData1: $SpellData$$Type)

public "getSpellData"(): $SpellData
get "spellData"(): $SpellData
}
}

declare module "io.redspace.ironsspellbooks.item.weapons.IronsWeaponTier" {
import { $AttributeContainer } from "io.redspace.ironsspellbooks.item.weapons.AttributeContainer"

export interface $IronsWeaponTier {
"getAdditionalAttributes"(): $AttributeContainer[]
"getAttackDamageBonus"(): float
"getSpeed"(): float
get "additionalAttributes"(): $AttributeContainer[]
get "attackDamageBonus"(): float
get "speed"(): float
}

export namespace $IronsWeaponTier {
const probejs$$marker: never
}
export abstract class $IronsWeaponTier$$Static implements $IronsWeaponTier {
}
}

declare module "io.redspace.ironsspellbooks.api.spells.ICastData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICastData {
"reset"(): void
}

export namespace $ICastData {
const probejs$$marker: never
}
export abstract class $ICastData$$Static implements $ICastData {
}
}

declare module "io.redspace.ironsspellbooks.api.util.Utils" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $MobType$$Type } from "net.minecraft.world.entity.MobType"
import { $ServerLevelAccessor$$Type } from "net.minecraft.world.level.ServerLevelAccessor"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $ClipContext$Fluid$$Type } from "net.minecraft.world.level.ClipContext$Fluid"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $NonNullList$$Type } from "net.minecraft.core.NonNullList"
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Potion$$Type } from "net.minecraft.world.item.alchemy.Potion"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $HitResult } from "net.minecraft.world.phys.HitResult"
import { $List$$Type } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Vec2, $Vec2$$Type } from "net.minecraft.world.phys.Vec2"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Class$$Type } from "java.lang.Class"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $Utils {
static readonly "NON_BASE_ATTRIBUTES": $Predicate<$Holder<$Attribute>>
static readonly "ONLY_MAGIC_ATTRIBUTES": $Predicate<$Holder<$Attribute>>
static readonly "random": $RandomSource

constructor()

public static "addFreezeTicks"(livingEntity0: $LivingEntity$$Type, int1: integer): void
public static "addFreezeTicks"(livingEntity0: $LivingEntity$$Type, int1: integer, int2: integer): void
public static "applyCooldownReduction"(int0: integer, livingEntity1: $LivingEntity$$Type): integer
public static "canBeUpgraded"(itemStack0: $ItemStack$$Type): boolean
public static "canHitWithRaycast"(entity0: $Entity$$Type): boolean
public static "canImbue"(itemStack0: $ItemStack$$Type): boolean
public static "checkEntityIntersecting"(entity0: $Entity$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, float3: float): $HitResult
public static "checkMonsterSpawnRules"(serverLevelAccessor0: $ServerLevelAccessor$$Type, mobSpawnType1: $MobSpawnType$$Type, blockPos2: $BlockPos$$Type, randomSource3: $RandomSource$$Type): boolean
public static "clampedKnockbackResistanceFactor"(entity0: $Entity$$Type, float1: float, float2: float): float
public static "createTremorBlock"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, float2: float): void
public static "createTremorBlockWithState"(level0: $Level$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, float3: float): void
public static "deconstructRGB"(int0: integer): $Vector3f
public static "doMeleeAttack"(mob0: $Mob$$Type, entity1: $Entity$$Type, damageSource2: $DamageSource$$Type): boolean
public static "doMobBreakSuffocatingBlocks"(livingEntity0: $LivingEntity$$Type, vec31: $Vec3$$Type): void
public static "doMobBreakSuffocatingBlocks"(livingEntity0: $LivingEntity$$Type): void
public static "enchantmentFromKey"(registryAccess0: $RegistryAccess$$Type, resourceKey1: $ResourceKey$$Type<$Enchantment>): $Holder<$Enchantment>
public static "findRelativeGroundLevel"(level0: $Level$$Type, vec31: $Vec3$$Type, int2: integer): float
public static "getAngle"(double0: double, double1: double, double2: double, double3: double): float
public static "getAngle"(vec20: $Vec2$$Type, vec21: $Vec2$$Type): float
public static "getEnchantmentLevel"(level0: $Level$$Type, itemStack1: $ItemStack$$Type, enchantment2: $Enchantment$$Type): integer
public static "getPlayerSpellbookStack"(player0: $Player$$Type): $ItemStack
public static "getPositionFromEntityLookDirection"(entity0: $Entity$$Type, float1: float): $Vec3
public static "getRandomScaled"(double0: double): double
public static "getRandomVec3"(double0: double): $Vec3
public static "getRandomVec3f"(double0: double): $Vector3f
public static "getServerTick"(): long
public static "getStackTraceAsString"(): string
public static "getTargetBlock"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, fluid2: $ClipContext$Fluid$$Type, double3: double): $BlockHitResult
public static "getTargetOld"(level0: $Level$$Type, player1: $Player$$Type, fluid2: $ClipContext$Fluid$$Type, double3: double): $BlockHitResult
public static "getWeaponDamage"(livingEntity0: $LivingEntity$$Type, mobType1: $MobType$$Type): float
public static "getWeaponDamage"(livingEntity0: $LivingEntity$$Type): float
public static "handleShriving"(itemStack0: $ItemStack$$Type): $ItemStack
public static "handleSpellTeleport"(abstractSpell0: $AbstractSpell$$Type, entity1: $Entity$$Type, vec32: $Vec3$$Type): boolean
public static "hasLineOfSight"(level0: $Level$$Type, entity1: $Entity$$Type, entity2: $Entity$$Type, boolean3: boolean): boolean
public static "hasLineOfSight"(level0: $Level$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, boolean3: boolean): boolean
public static "intPow"(double0: double, int1: integer): double
public static "intPow"(float0: float, int1: integer): float
public static "isSameItemSameComponentsIgnoreDurability"(itemStack0: $ItemStack$$Type, itemStack1: $ItemStack$$Type): boolean
public static "lerp"(float0: float, vec31: $Vec3$$Type, vec32: $Vec3$$Type): $Vec3
public static "loadAllItems"(compoundTag0: $CompoundTag$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>, string2: string): void
public static "moveToRelativeGroundLevel"(level0: $Level$$Type, vec31: $Vec3$$Type, int2: integer): $Vec3
public static "moveToRelativeGroundLevel"(level0: $Level$$Type, vec31: $Vec3$$Type, int2: integer, int3: integer): $Vec3
public static "packRGB"(vector3f0: $Vector3f$$Type): integer
public static "particleTrail"(level0: $Level$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, particleOptions3: $ParticleOptions$$Type): void
public static "performTaunt"(livingEntity0: $LivingEntity$$Type, list1: $List$$Type<$Entity$$Type>): void
public static "performTaunt"(livingEntity0: $LivingEntity$$Type, float1: float, predicate2: $Predicate$$Type<$Entity$$Type>): void
public static "preCastTargetHelper"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, magicData2: $MagicData$$Type, abstractSpell3: $AbstractSpell$$Type, int4: integer, float5: float): boolean
public static "preCastTargetHelper"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, magicData2: $MagicData$$Type, abstractSpell3: $AbstractSpell$$Type, int4: integer, float5: float, boolean6: boolean): boolean
public static "preCastTargetHelper"(level0: $Level$$Type, livingEntity1: $LivingEntity$$Type, magicData2: $MagicData$$Type, abstractSpell3: $AbstractSpell$$Type, int4: integer, float5: float, boolean6: boolean, predicate7: $Predicate$$Type<$LivingEntity$$Type>): boolean
public static "raycastForBlock"(level0: $Level$$Type, vec31: $Vec3$$Type, vec32: $Vec3$$Type, fluid3: $ClipContext$Fluid$$Type): $BlockHitResult
/** @deprecated */
public static "raycastForEntity"(level0: $Level$$Type, entity1: $Entity$$Type, float2: float, boolean3: boolean, float4: float): $HitResult
/** @deprecated */
public static "raycastForEntity"(level0: $Level$$Type, entity1: $Entity$$Type, vec32: $Vec3$$Type, vec33: $Vec3$$Type, boolean4: boolean): $HitResult
/** @deprecated */
public static "raycastForEntity"(level0: $Level$$Type, entity1: $Entity$$Type, float2: float, boolean3: boolean): $HitResult
/** @deprecated */
public static "raycastForEntity"(level0: $Level$$Type, entity1: $Entity$$Type, vec32: $Vec3$$Type, vec33: $Vec3$$Type, boolean4: boolean, float5: float, predicate6: $Predicate$$Type<$Entity$$Type>): $HitResult
/** @deprecated */
public static "raycastForEntityOfClass"(level0: $Level$$Type, entity1: $Entity$$Type, vec32: $Vec3$$Type, vec33: $Vec3$$Type, boolean4: boolean, class5: $Class$$Type<$Entity$$Type>): $HitResult
public static "releaseUsingHelper"(livingEntity0: $LivingEntity$$Type, itemStack1: $ItemStack$$Type, int2: integer): void
public static "rotationBetweenVectors"(vector3f0: $Vector3f$$Type, vector3f1: $Vector3f$$Type): $Quaternionf
public static "rotationFromDirection"(vec30: $Vec3$$Type): $Vec2
public static "saveAllItems"(compoundTag0: $CompoundTag$$Type, nonNullList1: $NonNullList$$Type<$ItemStack$$Type>, string2: string): $CompoundTag
public static "sendTargetedNotification"(serverPlayer0: $ServerPlayer$$Type, livingEntity1: $LivingEntity$$Type, abstractSpell2: $AbstractSpell$$Type): void
public static "serverSideCancelCast"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean): void
public static "serverSideCancelCast"(serverPlayer0: $ServerPlayer$$Type): void
public static "serverSideInitiateCast"(serverPlayer0: $ServerPlayer$$Type): boolean
public static "serverSideInitiateQuickCast"(serverPlayer0: $ServerPlayer$$Type, int1: integer): boolean
public static "setPlayerSpellbookStack"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): void
public static "setPotion"(itemStack0: $ItemStack$$Type, holder1: $Holder$$Type<$Potion$$Type>): $ItemStack
public static "setPotion"(itemStack0: $ItemStack$$Type, potion1: $Potion$$Type): $ItemStack
public static "shouldHealEntity"(entity0: $Entity$$Type, entity1: $Entity$$Type): boolean
public static "signedMin"(double0: double, double1: double): double
public static "slerp"(double0: double, vec31: $Vec3$$Type, vec32: $Vec3$$Type): $Vec3
public static "smoothstep"(float0: float, float1: float, float2: float): float
public static "softCapFormula"(double0: double): double
public static "spawnInWorld"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, itemStack2: $ItemStack$$Type): void
public static "stringTruncation"(double0: double, int1: integer): string
public static "timeFromTicks"(float0: float, int1: integer): string
public static "v3d"(vector3f0: $Vector3f$$Type): $Vec3
public static "v3f"(vec30: $Vec3$$Type): $Vector3f
public static "validAntiMagicTarget"(entity0: $Entity$$Type): boolean
}
}

declare module "io.redspace.ironsspellbooks.api.item.weapons.MagicSwordItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $Tier, $Tier$$Type } from "net.minecraft.world.item.Tier"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $IPresetSpellContainer } from "io.redspace.ironsspellbooks.api.spells.IPresetSpellContainer"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map, $Map$$Type } from "java.util.Map"
import { $SpellDataRegistryHolder$$Type } from "io.redspace.ironsspellbooks.api.registry.SpellDataRegistryHolder"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $IronsWeaponTier, $IronsWeaponTier$$Type } from "io.redspace.ironsspellbooks.item.weapons.IronsWeaponTier"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $UUID$$Type } from "java.util.UUID"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
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
import { $ExtendedSwordItem } from "io.redspace.ironsspellbooks.api.item.weapons.ExtendedSwordItem"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MagicSwordItem extends $ExtendedSwordItem implements $IPresetSpellContainer {
constructor<T extends ($Tier & $IronsWeaponTier)>(t0: T, properties1: $Item$Properties$$Type, spellDataRegistryHolder2s: $SpellDataRegistryHolder$$Type[])
/** @deprecated */
constructor(tier0: $Tier$$Type, double1: double, double2: double, spellDataRegistryHolder3s: $SpellDataRegistryHolder$$Type[], map4: $Map$$Type<$Attribute$$Type, $AttributeModifier$$Type>, properties5: $Item$Properties$$Type)

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
public "getSpells"(): $List<$SpellData>
public "getSweepHitBox"(stack: $ItemStack$$Type, player: $Player$$Type, target: $Entity$$Type): $AABB
public "getXpRepairRatio"(itemStack0: $ItemStack$$Type): float
public "hasCraftingRemainingItem"(itemStack0: $ItemStack$$Type): boolean
public "hasCustomEntity"(itemStack0: $ItemStack$$Type): boolean
public "initCapabilities"(itemStack0: $ItemStack$$Type, compoundTag1: $CompoundTag$$Type): $ICapabilityProvider
public "initializeSpellContainer"(itemStack0: $ItemStack$$Type): void
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
get "spells"(): $List<$SpellData>
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

declare module "io.redspace.ironsspellbooks.api.spells.SchoolType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $DamageType } from "net.minecraft.world.damagesource.DamageType"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $LazyOptional$$Type } from "net.minecraftforge.common.util.LazyOptional"
import { $TagKey, $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Vector3f } from "org.joml.Vector3f"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $SchoolType {
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Item$$Type>, component2: $Component$$Type, supplier3: $Supplier$$Type<$Attribute>, supplier4: $Supplier$$Type<$Attribute>, supplier5: $Supplier$$Type<$SoundEvent>, resourceKey6: $ResourceKey$$Type<$DamageType>)
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Item$$Type>, component2: $Component$$Type, supplier3: $Supplier$$Type<$Attribute>, supplier4: $Supplier$$Type<$Attribute>, supplier5: $Supplier$$Type<$SoundEvent>, resourceKey6: $ResourceKey$$Type<$DamageType>, boolean7: boolean, boolean8: boolean)
/** @deprecated */
constructor(resourceLocation0: $ResourceLocation$$Type, tagKey1: $TagKey$$Type<$Item$$Type>, component2: $Component$$Type, lazyOptional3: $LazyOptional$$Type<$Attribute$$Type>, lazyOptional4: $LazyOptional$$Type<$Attribute$$Type>, lazyOptional5: $LazyOptional$$Type<$SoundEvent$$Type>, resourceKey6: $ResourceKey$$Type<$DamageType>)

public "getCastSound"(): $SoundEvent
public "getDamageType"(): $ResourceKey<$DamageType>
public "getDisplayName"(): $Component
public "getFocus"(): $TagKey<$Item>
public "getId"(): $ResourceLocation
public "getPowerFor"(livingEntity0: $LivingEntity$$Type): double
public "getResistanceFor"(livingEntity0: $LivingEntity$$Type): double
public "getTargetingColor"(): $Vector3f
public "isFocus"(itemStack0: $ItemStack$$Type): boolean
get "castSound"(): $SoundEvent
get "damageType"(): $ResourceKey<$DamageType>
get "displayName"(): $Component
get "focus"(): $TagKey<$Item>
get "id"(): $ResourceLocation
get "targetingColor"(): $Vector3f
}
}

declare module "io.redspace.ironsspellbooks.api.registry.SpellRegistry" {
import { $Registry } from "net.minecraft.core.Registry"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $NoneSpell } from "io.redspace.ironsspellbooks.spells.NoneSpell"
import { $List } from "java.util.List"
import { $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $AbstractSpell } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Supplier } from "java.util.function.Supplier"
import { $IForgeRegistry } from "net.minecraftforge.registries.IForgeRegistry"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $RegistryObject } from "net.minecraftforge.registries.RegistryObject"

export class $SpellRegistry {
static readonly "ABYSSAL_SHROUD_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ACID_ORB_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ACUPUNCTURE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ANGEL_WINGS_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ARROW_VOLLEY_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ASCENSION_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BALL_LIGHTNING_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLACK_HOLE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLAZE_STORM_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLESSING_OF_LIFE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLIGHT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLOOD_NEEDLES_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLOOD_SLASH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BLOOD_STEP_SPELL": $RegistryObject<$AbstractSpell>
static readonly "BURNING_DASH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "CHAIN_CREEPER_SPELL": $RegistryObject<$AbstractSpell>
static readonly "CHAIN_LIGHTNING_SPELL": $RegistryObject<$AbstractSpell>
static readonly "CHARGE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "CLEANSE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "CLOUD_OF_REGENERATION_SPELL": $RegistryObject<$AbstractSpell>
static readonly "CONE_OF_COLD_SPELL": $RegistryObject<$AbstractSpell>
static readonly "COUNTERSPELL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "DEVOUR_SPELL": $RegistryObject<$AbstractSpell>
static readonly "DIVINE_SMITE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "DRAGON_BREATH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "EARTHQUAKE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ECHOING_STRIKES_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ELDRITCH_BLAST_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ELECTROCUTE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "EVASION_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FANG_STRIKE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FANG_WARD_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FIREBALL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FIREBOLT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FIRECRACKER_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FIREFLY_SWARM_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FIRE_ARROW_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FIRE_BREATH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FLAMING_BARRAGE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FLAMING_STRIKE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FORTIFY_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FROSTBITE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FROSTWAVE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "FROST_STEP_SPELL": $RegistryObject<$AbstractSpell>
static readonly "GLUTTONY_SPELL": $RegistryObject<$AbstractSpell>
static readonly "GREATER_HEAL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "GUIDING_BOLT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "GUST_SPELL": $RegistryObject<$AbstractSpell>
static readonly "HASTE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "HEALING_CIRCLE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "HEAL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "HEARTSTOP_SPELL": $RegistryObject<$AbstractSpell>
static readonly "HEAT_SURGE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ICE_BLOCK_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ICE_SPIKES_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ICE_TOMB_SPELL": $RegistryObject<$AbstractSpell>
static readonly "ICICLE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "INVISIBILITY_SPELL": $RegistryObject<$AbstractSpell>
static readonly "LIGHTNING_BOLT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "LIGHTNING_LANCE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "LOB_CREEPER_SPELL": $RegistryObject<$AbstractSpell>
static readonly "MAGIC_ARROW_SPELL": $RegistryObject<$AbstractSpell>
static readonly "MAGIC_MISSILE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "MAGMA_BOMB_SPELL": $RegistryObject<$AbstractSpell>
static readonly "OAKSKIN_SPELL": $RegistryObject<$AbstractSpell>
static readonly "PLANAR_SIGHT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "POCKET_DIMENSION_SPELL": $RegistryObject<$AbstractSpell>
static readonly "POISON_ARROW_SPELL": $RegistryObject<$AbstractSpell>
static readonly "POISON_BREATH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "POISON_SPLASH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "PORTAL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "RAISE_DEAD_SPELL": $RegistryObject<$AbstractSpell>
static readonly "RAISE_HELL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "RAY_OF_FROST_SPELL": $RegistryObject<$AbstractSpell>
static readonly "RAY_OF_SIPHONING_SPELL": $RegistryObject<$AbstractSpell>
static readonly "RECALL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "REGISTRY": $Supplier<$IForgeRegistry<$AbstractSpell>>
static readonly "ROOT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SACRIFICE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SCORCH_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SCULK_TENTACLES_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SHADOW_SLASH": $RegistryObject<$AbstractSpell>
static readonly "SHIELD_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SHOCKWAVE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SLOW_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SNOWBALL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SONIC_BOOM_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SPECTRAL_HAMMER_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SPELL_REGISTRY_KEY": $ResourceKey<$Registry<$AbstractSpell>>
static readonly "SPIDER_ASPECT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "STARFALL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "STOMP_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SUMMON_ENDER_CHEST_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SUMMON_HORSE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SUMMON_POLAR_BEAR_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SUMMON_SWORDS": $RegistryObject<$AbstractSpell>
static readonly "SUMMON_VEX_SPELL": $RegistryObject<$AbstractSpell>
static readonly "SUNBEAM_SPELL": $RegistryObject<$AbstractSpell>
static readonly "TELEKINESIS_SPELL": $RegistryObject<$AbstractSpell>
static readonly "TELEPORT_SPELL": $RegistryObject<$AbstractSpell>
static readonly "THROW_SPELL": $RegistryObject<$AbstractSpell>
static readonly "THUNDERSTORM_SPELL": $RegistryObject<$AbstractSpell>
static readonly "TOUCH_DIG": $RegistryObject<$AbstractSpell>
static readonly "VOLT_STRIKE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "WALL_OF_FIRE_SPELL": $RegistryObject<$AbstractSpell>
static readonly "WISP_SPELL": $RegistryObject<$AbstractSpell>
static readonly "WITHER_SKULL_SPELL": $RegistryObject<$AbstractSpell>
static readonly "WOLOLO_SPELL": $RegistryObject<$AbstractSpell>

constructor()

public static "getEnabledSpells"(): $List<$AbstractSpell>
public static "getSpell"(resourceLocation0: $ResourceLocation$$Type): $AbstractSpell
public static "getSpell"(string0: string): $AbstractSpell
public static "getSpellsForSchool"(schoolType0: $SchoolType$$Type): $List<$AbstractSpell>
public static "none"(): $NoneSpell
public static "onConfigReload"(): void
public static "register"(iEventBus0: $IEventBus$$Type): void
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellTeleportEvent" {
import { $EntityTeleportEvent } from "net.minecraftforge.event.entity.EntityTeleportEvent"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $SpellTeleportEvent extends $EntityTeleportEvent {
constructor()
constructor(abstractSpell0: $AbstractSpell$$Type, entity1: $Entity$$Type, double2: double, double3: double, double4: double)

public "getSpell"(): $AbstractSpell
get "spell"(): $AbstractSpell
}
}

declare module "io.redspace.ironsspellbooks.api.entity.IMagicEntity" {
import { $SyncedSpellData$$Type } from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $IMagicEntity {
"cancelCast"(): void
"castComplete"(): void
"getHasUsedSingleAttack"(): boolean
/** @deprecated */
"getItemBySlot"(equipmentSlot0: $EquipmentSlot$$Type): $ItemStack
"getMagicData"(): $MagicData
"initiateCastSpell"(abstractSpell0: $AbstractSpell$$Type, int1: integer): void
"isCasting"(): boolean
"isDrinkingPotion"(): boolean
"notifyDangerousProjectile"(projectile0: $Projectile$$Type): void
"setBurningDashDirectionData"(): void
"setHasUsedSingleAttack"(boolean0: boolean): void
"setSyncedSpellData"(syncedSpellData0: $SyncedSpellData$$Type): void
"setTeleportLocationBehindTarget"(int0: integer): boolean
"startDrinkingPotion"(): void
get "hasUsedSingleAttack"(): boolean
get "magicData"(): $MagicData
get "casting"(): boolean
get "drinkingPotion"(): boolean
set "hasUsedSingleAttack"(value: boolean)
set "syncedSpellData"(value: $SyncedSpellData$$Type)
set "teleportLocationBehindTarget"(value: integer)
}

export namespace $IMagicEntity {
const probejs$$marker: never
}
export abstract class $IMagicEntity$$Static implements $IMagicEntity {
}
}

declare module "io.redspace.ironsspellbooks.api.events.CounterSpellEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $CounterSpellEvent extends $Event implements $EventItf {
readonly "caster": $Entity
readonly "target": $Entity

constructor(entity0: $Entity$$Type, entity1: $Entity$$Type)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "io.redspace.ironsspellbooks.api.network.ISerializable" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ISerializable {
"readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}

export namespace $ISerializable {
const probejs$$marker: never
}
export abstract class $ISerializable$$Static implements $ISerializable {
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Post" {
import { $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SpellCooldownAddedEvent } from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCooldownAddedEvent$Post extends $SpellCooldownAddedEvent {
constructor(int0: integer, abstractSpell1: $AbstractSpell$$Type, player2: $Player$$Type, castSource3: $CastSource$$Type)
constructor()

}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastType" {
import { $Enum } from "java.lang.Enum"

export class $CastType extends $Enum<$CastType> {
static readonly "CONTINUOUS": $CastType
static readonly "INSTANT": $CastType
static readonly "LONG": $CastType
static readonly "NONE": $CastType

public "getValue"(): integer
public "immediatelySuppressRightClicks"(): boolean
public static "valueOf"(string0: string): $CastType
public static "values"(): $CastType[]
get "value"(): integer
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $CastSource, $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $AbstractSpell, $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCooldownAddedEvent extends $Event implements $EventItf {
constructor()
constructor(int0: integer, abstractSpell1: $AbstractSpell$$Type, player2: $Player$$Type, castSource3: $CastSource$$Type)

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getCastSource"(): $CastSource
public "getEffectiveCooldown"(): integer
public "getEntity"(): $Player
public "getSpell"(): $AbstractSpell
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "castSource"(): $CastSource
get "effectiveCooldown"(): integer
get "entity"(): $Player
get "spell"(): $AbstractSpell
}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastResult$Type" {
import { $Enum } from "java.lang.Enum"

export class $CastResult$Type extends $Enum<$CastResult$Type> {
static readonly "FAILURE": $CastResult$Type
static readonly "SUCCESS": $CastResult$Type

public static "valueOf"(string0: string): $CastResult$Type
public static "values"(): $CastResult$Type[]
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.AntiMagicSusceptible" {
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $AntiMagicSusceptible {
"onAntiMagic"(magicData0: $MagicData$$Type): void
}

export namespace $AntiMagicSusceptible {
const probejs$$marker: never
}
export abstract class $AntiMagicSusceptible$$Static implements $AntiMagicSusceptible {
}
}

declare module "io.redspace.ironsspellbooks.gui.overlays.SpellSelection" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ISerializable } from "io.redspace.ironsspellbooks.api.network.ISerializable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export class $SpellSelection implements $ISerializable, $INBTSerializable<$CompoundTag> {
constructor(string0: string, int1: integer, string2: string, int3: integer)
constructor(string0: string, int1: integer)
constructor()

public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "isEmpty"(): boolean
public "makeSelection"(string0: string, int1: integer): void
public "readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "serializeNBT"(): $CompoundTag
public "writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "equipmentSlot"(): string
set "equipmentSlot"(value: string)
get "index"(): integer
set "index"(value: integer)
get "lastEquipmentSlot"(): string
set "lastEquipmentSlot"(value: string)
get "lastIndex"(): integer
set "lastIndex"(value: integer)
get "empty"(): boolean
}
}

declare module "io.redspace.ironsspellbooks.entity.spells.AbstractMagicProjectile" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Projectile, $Projectile$$Type } from "net.minecraft.world.entity.projectile.Projectile"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $MagicData$$Type } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $IEntityAdditionalSpawnData } from "net.minecraftforge.entity.IEntityAdditionalSpawnData"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $AntiMagicSusceptible } from "io.redspace.ironsspellbooks.entity.mobs.AntiMagicSusceptible"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"

export class $AbstractMagicProjectile extends $Projectile implements $AntiMagicSusceptible, $IEntityAdditionalSpawnData {
constructor(entityType0: $EntityType$$Type<$Projectile$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRicochet"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "discardHelper"(hitResult0: $HitResult$$Type): void
public "doRicochet"(hitResult0: $HitResult$$Type): void
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
public "getDamage"(): float
public "getDisplayName"(): $Component
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistance"(x: double, y: double, z: double): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getExplosionRadius"(): float
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHomingTarget"(): $Entity
public "getImpactSound"(): $Optional<$Supplier<$SoundEvent>>
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
public "getPierceLevel"(): integer
public "getProfile"(): $GameProfile
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpeed"(): float
public "getStepHeight"(): float
public "getTeamId"(): string
public "getType"(): string
public "handleHitDetection"(): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "impactParticles"(double0: double, double1: double, double2: double): void
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isCursorHoming"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isLiving"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isWaterCreature"(): boolean
public static "majruszlibrary$getProjectileArrow"(entity0: $Entity$$Type): $ItemStack
public static "majruszlibrary$getProjectileWeapon"(entity0: $Entity$$Type): $ItemStack
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "onAntiMagic"(magicData0: $MagicData$$Type): void
public "pierceOrDiscard"(): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "self"(): $Entity
public "serializeNBT"(): $CompoundTag
public "setCanRicochet"(boolean0: boolean): void
public "setCursorHoming"(boolean0: boolean): void
public "setDamage"(float0: float): void
public "setExplosionRadius"(float0: float): void
public "setHomingTarget"(livingEntity0: $LivingEntity$$Type): void
public "setInfinitePiercing"(): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setPierceLevel"(int0: integer): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shoot"(vec30: $Vec3$$Type): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "spawn"(): void
public "stopEntityHoming"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "trailParticles"(): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "travel"(): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "writeSpawnData"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "deltaMovementOld"(): $Vec3
set "deltaMovementOld"(value: $Vec3$$Type)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "damage"(): float
get "displayName"(): $Component
get "explosionRadius"(): float
get "facing"(): $Direction
get "homingTarget"(): $Entity
get "impactSound"(): $Optional<$Supplier<$SoundEvent>>
get "item"(): $ItemStack
get "level"(): $Level
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "pierceLevel"(): integer
get "profile"(): $GameProfile
get "scriptType"(): $ScriptType
get "server"(): $MinecraftServer
get "speed"(): float
get "stepHeight"(): float
get "teamId"(): string
get "type"(): string
get "ambientCreature"(): boolean
get "animal"(): boolean
get "cursorHoming"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "waterCreature"(): boolean
set "cursorHoming"(value: boolean)
set "damage"(value: float)
set "explosionRadius"(value: float)
set "homingTarget"(value: $LivingEntity$$Type)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "pierceLevel"(value: integer)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent$Pre" {
import { $CastSource$$Type } from "io.redspace.ironsspellbooks.api.spells.CastSource"
import { $SpellCooldownAddedEvent } from "io.redspace.ironsspellbooks.api.events.SpellCooldownAddedEvent"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SpellCooldownAddedEvent$Pre extends $SpellCooldownAddedEvent {
constructor()
constructor(int0: integer, abstractSpell1: $AbstractSpell$$Type, player2: $Player$$Type, castSource3: $CastSource$$Type)

public "setEffectiveCooldown"(int0: integer): void
set "effectiveCooldown"(value: integer)
}
}

declare module "io.redspace.ironsspellbooks.api.config.RegisterConfigParametersEvent" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $SpellConfigParameter$$Type } from "io.redspace.ironsspellbooks.api.config.SpellConfigParameter"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $RegisterConfigParametersEvent extends $Event implements $EventItf {
constructor(consumer0: $Consumer$$Type<$SpellConfigParameter$$Type<any>>)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "register"(spellConfigParameter0: $SpellConfigParameter$$Type<any>): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "io.redspace.ironsspellbooks.api.events.SpellHealEvent" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SchoolType, $SchoolType$$Type } from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import { $LivingEvent } from "net.minecraftforge.event.entity.living.LivingEvent"

export class $SpellHealEvent extends $LivingEvent {
constructor()
constructor(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type, float2: float, schoolType3: $SchoolType$$Type)

public "getHealAmount"(): float
public "getSchoolType"(): $SchoolType
public "getTargetEntity"(): $LivingEntity
get "healAmount"(): float
get "schoolType"(): $SchoolType
get "targetEntity"(): $LivingEntity
}
}

declare module "io.redspace.ironsspellbooks.entity.mobs.goals.SpellBarrageGoal" {
import { $IMagicEntity$$Type } from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import { $AbstractSpell$$Type } from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $SpellBarrageGoal extends $Goal {
constructor(iMagicEntity0: $IMagicEntity$$Type, abstractSpell1: $AbstractSpell$$Type, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer)

}
}

declare module "io.redspace.ironsspellbooks.item.weapons.StaffItem" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ICapabilityProvider } from "net.minecraftforge.common.capabilities.ICapabilityProvider"
import { $Item$Properties$$Type } from "net.minecraft.world.item.Item$Properties"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemDefinitionDuck } from "net.lixir.vminus.api.registry.definition.duck.ItemDefinitionDuck"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Holder } from "net.minecraft.core.Holder"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map, $Map$$Type } from "java.util.Map"
import { $StaffTier$$Type } from "io.redspace.ironsspellbooks.item.weapons.StaffTier"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CastingItem } from "io.redspace.ironsspellbooks.item.CastingItem"
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
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $StaffItem extends $CastingItem {
constructor(properties0: $Item$Properties$$Type, staffTier1: $StaffTier$$Type)
/** @deprecated */
constructor(properties0: $Item$Properties$$Type, double1: double, double2: double, map3: $Map$$Type<$Attribute$$Type, $AttributeModifier$$Type>)

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
public "canPerformAction"(itemStack0: $ItemStack$$Type, toolAction1: $ToolAction$$Type): boolean
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
public "hasCustomRendering"(): boolean
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

declare module "io.redspace.ironsspellbooks.api.spells.ICastDataSerializable" {
import { $ICastData } from "io.redspace.ironsspellbooks.api.spells.ICastData"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ISerializable } from "io.redspace.ironsspellbooks.api.network.ISerializable"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $INBTSerializable } from "net.minecraftforge.common.util.INBTSerializable"

export interface $ICastDataSerializable extends $ICastData, $ISerializable, $INBTSerializable<$CompoundTag> {
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"readFromBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"reset"(): void
"serializeNBT"(): $CompoundTag
"writeToBuffer"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
}

export namespace $ICastDataSerializable {
const probejs$$marker: never
}
export abstract class $ICastDataSerializable$$Static implements $ICastDataSerializable {
}
}

declare module "io.redspace.ironsspellbooks.api.spells.SpellRarity" {
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $ChatFormatting } from "net.minecraft.ChatFormatting"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"

export class $SpellRarity extends $Enum<$SpellRarity> implements $StringRepresentable {
static readonly "CODEC": $Codec<$SpellRarity>
static readonly "COMMON": $SpellRarity
static readonly "EPIC": $SpellRarity
static readonly "LEGENDARY": $SpellRarity
static readonly "RARE": $SpellRarity
static readonly "UNCOMMON": $SpellRarity

public "compareRarity"(spellRarity0: $SpellRarity$$Type): integer
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getChatFormatting"(): $ChatFormatting
public "getDisplayName"(): $MutableComponent
public static "getRarityConfig"(): $List<double>
public static "getRawRarityConfig"(): $List<double>
public "getSerializedName"(): string
public "getValue"(): integer
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "rarityTest"(): void
public static "valueOf"(string0: string): $SpellRarity
public static "values"(): $SpellRarity[]
get "chatFormatting"(): $ChatFormatting
get "displayName"(): $MutableComponent
get "serializedName"(): string
get "value"(): integer
}
}

declare module "io.redspace.ironsspellbooks.api.spells.CastSource" {
import { $Enum } from "java.lang.Enum"

export class $CastSource extends $Enum<$CastSource> {
static readonly "COMMAND": $CastSource
static readonly "MOB": $CastSource
static readonly "NONE": $CastSource
static readonly "SCROLL": $CastSource
static readonly "SPELLBOOK": $CastSource
static readonly "SWORD": $CastSource

public "consumesMana"(): boolean
public "respectsCooldown"(): boolean
public static "valueOf"(string0: string): $CastSource
public static "values"(): $CastSource[]
}
}

