declare module "net.minecraft.world.entity.npc.InventoryCarrier" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $SimpleContainer } from "net.minecraft.world.SimpleContainer"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $InventoryCarrier {
"getInventory"(): $SimpleContainer
"readInventoryFromTag"(compoundTag0: $CompoundTag$$Type): void
"writeInventoryToTag"(compoundTag0: $CompoundTag$$Type): void
get "inventory"(): $SimpleContainer
}

export namespace $InventoryCarrier {
const TAG_INVENTORY: string
function pickUpItem(mob0: $Mob$$Type, inventoryCarrier1: $InventoryCarrier$$Type, itemEntity2: $ItemEntity$$Type): void
}
export abstract class $InventoryCarrier$$Static implements $InventoryCarrier {
static readonly "TAG_INVENTORY": string

static "pickUpItem"(mob0: $Mob$$Type, inventoryCarrier1: $InventoryCarrier$$Type, itemEntity2: $ItemEntity$$Type): void
}
}

declare module "net.minecraft.world.entity.npc.AbstractVillager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MerchantOffers, $MerchantOffers$$Type } from "net.minecraft.world.item.trading.MerchantOffers"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $SimpleContainer } from "net.minecraft.world.SimpleContainer"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $LocalRef$$Type } from "com.llamalad7.mixinextras.sugar.ref.LocalRef"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $MerchantOffer, $MerchantOffer$$Type } from "net.minecraft.world.item.trading.MerchantOffer"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ExtraLivingEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntity"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $Merchant } from "net.minecraft.world.item.trading.Merchant"
import { $RandomSource, $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $InventoryCarrier, $InventoryCarrier$$Type } from "net.minecraft.world.entity.npc.InventoryCarrier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $VillagerTrades$ItemListing$$Type } from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $AgeableMob } from "net.minecraft.world.entity.AgeableMob"
import { $WeaponAttributes$$Type } from "net.bettercombat.api.WeaponAttributes"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $ArrayList } from "java.util.ArrayList"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $VisionEntityVariant, $VisionEntityVariant$$Type } from "net.lixir.vminus.vision.util.VisionEntityVariant"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $Npc } from "net.minecraft.world.entity.npc.Npc"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $AbstractVillager extends $AgeableMob implements $InventoryCarrier, $Npc, $Merchant {
static readonly "VILLAGER_SLOT_OFFSET": integer

constructor(entityType0: $EntityType$$Type<$AbstractVillager$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "bettermobcombat$isCombatAnimationActive"(): boolean
public "bettermobcombat$startUpswing"(weaponAttributes0: $WeaponAttributes$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRestock"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "foodEaten"(is: $ItemStack$$Type): void
public "gatherDamagePowers"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getInventory"(): $SimpleContainer
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
public "getNotifyTradeSound"(): $SoundEvent
public "getOffHandItem"(): $ItemStack
public "getOffers"(): $MerchantOffers
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
public "getTotalMovementSpeed"(): double
public "getTradingPlayer"(): $Player
public "getType"(): string
public "getUnhappyCounter"(): integer
public "getVillagerXp"(): integer
public static "getWeightedVisionEntityVariants"(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
public "handler$hop000$replaceRandom"(merchantOffers0: $MerchantOffers$$Type, itemListing1s: $VillagerTrades$ItemListing$$Type[], int2: integer, callbackInfo3: $CallbackInfo$$Type, localRef4: $LocalRef$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isClientSide"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isTrading"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWeaponSwingInProgress"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "modifyExpressionValue$hop000$replaceRandom"(randomSource0: $RandomSource$$Type, merchantOffers1: $MerchantOffers$$Type, localRef2: $LocalRef$$Type): $RandomSource
public "modifyExpressionValue$hop000$setTierForOffer"(merchantOffer0: $MerchantOffer$$Type): $MerchantOffer
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "notifyTrade"(merchantOffer0: $MerchantOffer$$Type): void
public "notifyTradeUpdated"(itemStack0: $ItemStack$$Type): void
public static "of"(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "openTradingScreen"(player0: $Player$$Type, component1: $Component$$Type, int2: integer): void
public "overrideOffers"(merchantOffers0: $MerchantOffers$$Type): void
public "overrideXp"(int0: integer): void
public static "pickUpItem"(mob0: $Mob$$Type, inventoryCarrier1: $InventoryCarrier$$Type, itemEntity2: $ItemEntity$$Type): void
public "playCelebrateSound"(): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readInventoryFromTag"(compoundTag0: $CompoundTag$$Type): void
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
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setTradingPlayer"(player0: $Player$$Type): void
public "setUnhappyCounter"(int0: integer): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "showProgressBar"(): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "swing"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "writeInventoryToTag"(compoundTag0: $CompoundTag$$Type): void
get "animation"(): $AnimationApplier
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "headArmorItem"(): $ItemStack
get "inventory"(): $SimpleContainer
get "item"(): $ItemStack
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "name"(): $Component
get "nbt"(): $CompoundTag
get "notifyTradeSound"(): $SoundEvent
get "offHandItem"(): $ItemStack
get "offers"(): $MerchantOffers
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
get "tradingPlayer"(): $Player
get "type"(): string
get "unhappyCounter"(): integer
get "villagerXp"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "clientSide"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "trading"(): boolean
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
set "totalMovementSpeedMultiplier"(value: double)
set "tradingPlayer"(value: $Player$$Type)
set "unhappyCounter"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.npc.Villager" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $VillagerDataHolder } from "net.minecraft.world.entity.npc.VillagerDataHolder"
import { $ReputationEventType$$Type } from "net.minecraft.world.entity.ai.village.ReputationEventType"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MerchantOffers$$Type } from "net.minecraft.world.item.trading.MerchantOffers"
import { $Direction } from "net.minecraft.core.Direction"
import { $Item } from "net.minecraft.world.item.Item"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AbstractVillager } from "net.minecraft.world.entity.npc.AbstractVillager"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder } from "net.minecraft.core.Holder"
import { $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Map } from "java.util.Map"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ExtraLivingEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntity"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $MemoryModuleType, $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $InventoryCarrier$$Type } from "net.minecraft.world.entity.npc.InventoryCarrier"
import { $MixinVillagerEntityInvoker } from "forge.net.mca.mixin.MixinVillagerEntityInvoker"
import { $PoiType } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $GossipContainer } from "net.minecraft.world.entity.ai.gossip.GossipContainer"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VillagerAccess } from "snownee.kiwi.mixin.VillagerAccess"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $IVillagerEntity } from "forge.net.mca.ducks.IVillagerEntity"
import { $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $MobSpawnType } from "net.minecraft.world.entity.MobSpawnType"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $AgeableMob$$Type } from "net.minecraft.world.entity.AgeableMob"
import { $WeaponAttributes$$Type } from "net.bettercombat.api.WeaponAttributes"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $ArrayList } from "java.util.ArrayList"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BiPredicate, $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $ImmutableList } from "com.google.common.collect.ImmutableList"
import { $ReputationEventHandler } from "net.minecraft.world.entity.ReputationEventHandler"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $VillagerType$$Type } from "net.minecraft.world.entity.npc.VillagerType"
import { $VisionEntityVariant, $VisionEntityVariant$$Type } from "net.lixir.vminus.vision.util.VisionEntityVariant"
import { $LightningBolt$$Type } from "net.minecraft.world.entity.LightningBolt"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $VillagerEntityAccessor } from "net.fabricmc.fabric.mixin.content.registry.VillagerEntityAccessor"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $GlobalPos, $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $VillagerData, $VillagerData$$Type } from "net.minecraft.world.entity.npc.VillagerData"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Brain } from "net.minecraft.world.entity.ai.Brain"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $Villager extends $AbstractVillager implements $ReputationEventHandler, $VillagerDataHolder, $VillagerAccess, $VillagerEntityAccessor, $IVillagerEntity, $MixinVillagerEntityInvoker {
static readonly "BREEDING_FOOD_THRESHOLD": integer
static "FOOD_POINTS": $Map<$Item, integer>
static "MEMORY_TYPES": $ImmutableList<$MemoryModuleType<any>>
static readonly "POI_MEMORIES": $Map<$MemoryModuleType<$GlobalPos>, $BiPredicate<$Villager, $Holder<$PoiType>>>
static readonly "SPEED_MODIFIER": float

constructor(entityType0: $EntityType$$Type<$Villager$$Type>, level1: $Level$$Type)
constructor(entityType0: $EntityType$$Type<$Villager$$Type>, level1: $Level$$Type, villagerType2: $VillagerType$$Type)

public "alwaysAccepts"(): boolean
public "assignProfessionWhenSpawned"(): boolean
public "attack"(hp: float): void
public "bettermobcombat$isCombatAnimationActive"(): boolean
public "bettermobcombat$startUpswing"(weaponAttributes0: $WeaponAttributes$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRestock"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "createAttributes"(): $AttributeSupplier$Builder
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "eatAndDigestFood"(): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "foodEaten"(is: $ItemStack$$Type): void
public "gatherDamagePowers"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBrain"(): $Brain<$Villager>
public "getBreedOffspring"(serverLevel0: $ServerLevel$$Type, ageableMob1: $AgeableMob$$Type): $Villager
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getGossips"(): $GossipContainer
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
public "getPlayerReputation"(player0: $Player$$Type): integer
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getReachDistance"(): double
public "getScriptType"(): $ScriptType
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnReason"(): $MobSpawnType
public "getStepHeight"(): float
public "getTeamId"(): string
public "getTotalMovementSpeed"(): double
public "getType"(): string
public "getVillagerData"(): $VillagerData
public static "getWeightedVisionEntityVariants"(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
public "gossip"(serverLevel0: $ServerLevel$$Type, villager1: $Villager$$Type, long2: long): void
public "handler$icn000$resetRestocks"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$icn000$restock"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$znl000$goetyThunderHit"(serverLevel0: $ServerLevel$$Type, lightningBolt1: $LightningBolt$$Type, callbackInfo2: $CallbackInfo$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasExcessFood"(): boolean
public "hasFarmSeeds"(): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChasing"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWeaponSwingInProgress"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "mobInteract"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public static "of"(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "onReputationEventFrom"(reputationEventType0: $ReputationEventType$$Type, entity1: $Entity$$Type): void
public "openTradingScreen"(player0: $Player$$Type, component1: $Component$$Type, int2: integer): void
public static "pickUpItem"(mob0: $Mob$$Type, inventoryCarrier1: $InventoryCarrier$$Type, itemEntity2: $ItemEntity$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "playWorkSound"(): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readInventoryFromTag"(compoundTag0: $CompoundTag$$Type): void
public "refreshBrain"(serverLevel0: $ServerLevel$$Type): void
public "releasePoi"(memoryModuleType0: $MemoryModuleType$$Type<$GlobalPos$$Type>): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "restock"(): void
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
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChasing"(boolean0: boolean): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public static "setFromWeightedList"(livingEntity0: $LivingEntity$$Type): $VisionEntityVariant
public "setGossips"(tag0: $Tag$$Type): void
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
public "setOffers"(merchantOffers0: $MerchantOffers$$Type): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setRotation"(yaw: float, pitch: float): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setVariant"(villagerType0: $VillagerType$$Type): void
public "setVillagerData"(villagerData0: $VillagerData$$Type): void
public "setVillagerXp"(int0: integer): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRestock"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "spawnGolemIfNeeded"(serverLevel0: $ServerLevel$$Type, long1: long, int2: integer): void
public "swing"(hand: $InteractionHand$$Type): void
public "swing"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "wantsMoreFood"(): boolean
public "wantsToSpawnGolem"(long0: long): boolean
public "writeInventoryToTag"(compoundTag0: $CompoundTag$$Type): void
get "animation"(): $AnimationApplier
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "brain"(): $Brain<$Villager>
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "gossips"(): $GossipContainer
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
get "spawnReason"(): $MobSpawnType
get "stepHeight"(): float
get "teamId"(): string
get "totalMovementSpeed"(): double
get "type"(): string
get "villagerData"(): $VillagerData
get "ambientCreature"(): boolean
get "animal"(): boolean
get "chasing"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
get "weaponSwingInProgress"(): boolean
set "chasing"(value: boolean)
set "chestArmorItem"(value: $ItemStack$$Type)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "feetArmorItem"(value: $ItemStack$$Type)
set "gossips"(value: $Tag$$Type)
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
set "offers"(value: $MerchantOffers$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "variant"(value: $VillagerType$$Type)
set "villagerData"(value: $VillagerData$$Type)
set "villagerXp"(value: integer)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.world.entity.npc.VillagerDataHolder" {
import { $VillagerData, $VillagerData$$Type } from "net.minecraft.world.entity.npc.VillagerData"
import { $VariantHolder } from "net.minecraft.world.entity.VariantHolder"
import { $VillagerType, $VillagerType$$Type } from "net.minecraft.world.entity.npc.VillagerType"

export interface $VillagerDataHolder extends $VariantHolder<$VillagerType> {
"getVillagerData"(): $VillagerData
"setVariant"(villagerType0: $VillagerType$$Type): void
"setVillagerData"(villagerData0: $VillagerData$$Type): void
get "villagerData"(): $VillagerData
set "variant"(value: $VillagerType$$Type)
set "villagerData"(value: $VillagerData$$Type)
}

export namespace $VillagerDataHolder {
const probejs$$marker: never
}
export abstract class $VillagerDataHolder$$Static implements $VillagerDataHolder {
}
}

declare module "net.minecraft.world.entity.npc.VillagerTrades$ItemListing" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $MerchantOffer } from "net.minecraft.world.item.trading.MerchantOffer"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export interface $VillagerTrades$ItemListing {
"getOffer"(entity0: $Entity$$Type, randomSource1: $RandomSource$$Type): $MerchantOffer
}

export namespace $VillagerTrades$ItemListing {
const probejs$$marker: never
}
export abstract class $VillagerTrades$ItemListing$$Static implements $VillagerTrades$ItemListing {
}
}

declare module "net.minecraft.world.entity.npc.Npc" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Npc {
}

export namespace $Npc {
const probejs$$marker: never
}
export abstract class $Npc$$Static implements $Npc {
}
}

declare module "net.minecraft.world.entity.npc.VillagerData" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $VillagerProfession, $VillagerProfession$$Type } from "net.minecraft.world.entity.npc.VillagerProfession"
import { $VillagerType, $VillagerType$$Type } from "net.minecraft.world.entity.npc.VillagerType"

export class $VillagerData {
static readonly "CODEC": $Codec<$VillagerData>
static readonly "MAX_VILLAGER_LEVEL": integer
static readonly "MIN_VILLAGER_LEVEL": integer

constructor(villagerType0: $VillagerType$$Type, villagerProfession1: $VillagerProfession$$Type, int2: integer)

public static "canLevelUp"(int0: integer): boolean
public "getLevel"(): integer
public static "getMaxXpPerLevel"(int0: integer): integer
public static "getMinXpPerLevel"(int0: integer): integer
public "getProfession"(): $VillagerProfession
public "getType"(): $VillagerType
public "setLevel"(int0: integer): $VillagerData
public "setProfession"(villagerProfession0: $VillagerProfession$$Type): $VillagerData
public "setType"(villagerType0: $VillagerType$$Type): $VillagerData
get "level"(): integer
get "profession"(): $VillagerProfession
get "type"(): $VillagerType
set "level"(value: integer)
set "profession"(value: $VillagerProfession$$Type)
set "type"(value: $VillagerType$$Type)
}
}

declare module "net.minecraft.world.entity.npc.WanderingTrader" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction } from "net.minecraft.core.Direction"
import { $GameProfile } from "com.mojang.authlib.GameProfile"
import { $AbstractVillager } from "net.minecraft.world.entity.npc.AbstractVillager"
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
import { $InventoryCarrier$$Type } from "net.minecraft.world.entity.npc.InventoryCarrier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
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
import { $VisionEntityVariant, $VisionEntityVariant$$Type } from "net.lixir.vminus.vision.util.VisionEntityVariant"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ConsumableComponent$ConsumableSoundProvider } from "com.mega.endinglib.api.item.component.type.ConsumableComponent$ConsumableSoundProvider"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $WanderingTrader extends $AbstractVillager implements $ConsumableComponent$ConsumableSoundProvider {
constructor(entityType0: $EntityType$$Type<$WanderingTrader$$Type>, level1: $Level$$Type)

public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "bettermobcombat$isCombatAnimationActive"(): boolean
public "bettermobcombat$startUpswing"(weaponAttributes0: $WeaponAttributes$$Type): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canRestock"(): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "damageHeldItem"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "foodEaten"(is: $ItemStack$$Type): void
public "gatherDamagePowers"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getConsumeSound"(itemStack0: $ItemStack$$Type): $SoundEvent
public "getDefaultMovementSpeed"(): double
public "getDespawnDelay"(): integer
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
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
public "getTotalMovementSpeed"(): double
public "getType"(): string
public static "getWeightedVisionEntityVariants"(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
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
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "isWeaponSwingInProgress"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "mobInteract"(player0: $Player$$Type, interactionHand1: $InteractionHand$$Type): $InteractionResult
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public static "of"(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "openTradingScreen"(player0: $Player$$Type, component1: $Component$$Type, int2: integer): void
public static "pickUpItem"(mob0: $Mob$$Type, inventoryCarrier1: $InventoryCarrier$$Type, itemEntity2: $ItemEntity$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "readInventoryFromTag"(compoundTag0: $CompoundTag$$Type): void
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
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setDespawnDelay"(int0: integer): void
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
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setWanderTarget"(blockPos0: $BlockPos$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "swing"(hand: $InteractionHand$$Type): void
public "swing"(): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "writeInventoryToTag"(compoundTag0: $CompoundTag$$Type): void
get "animation"(): $AnimationApplier
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "chestArmorItem"(): $ItemStack
get "defaultMovementSpeed"(): double
get "despawnDelay"(): integer
get "displayName"(): $Component
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
set "despawnDelay"(value: integer)
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
set "totalMovementSpeedMultiplier"(value: double)
set "wanderTarget"(value: $BlockPos$$Type)
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
}
}

