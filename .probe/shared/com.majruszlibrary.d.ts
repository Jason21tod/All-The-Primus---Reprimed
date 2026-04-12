declare module "com.majruszlibrary.mixin.IMixinMob" {
import { $GoalSelector } from "net.minecraft.world.entity.ai.goal.GoalSelector"

export interface $IMixinMob {
"getGoalSelector"(): $GoalSelector
"getTargetSelector"(): $GoalSelector
get "goalSelector"(): $GoalSelector
get "targetSelector"(): $GoalSelector
}

export namespace $IMixinMob {
const probejs$$marker: never
}
export abstract class $IMixinMob$$Static implements $IMixinMob {
}
}

declare module "com.majruszlibrary.mixin.IMixinEnchantment" {
import { $EnchantmentCategory$$Type } from "net.minecraft.world.item.enchantment.EnchantmentCategory"
import { $Enchantment$Rarity$$Type } from "net.minecraft.world.item.enchantment.Enchantment$Rarity"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"

export interface $IMixinEnchantment {
"setCategory"(enchantmentCategory0: $EnchantmentCategory$$Type): void
"setRarity"(rarity0: $Enchantment$Rarity$$Type): void
"setSlots"(equipmentSlot0s: $EquipmentSlot$$Type[]): void
set "category"(value: $EnchantmentCategory$$Type)
set "rarity"(value: $Enchantment$Rarity$$Type)
set "slots"(value: $EquipmentSlot$$Type[])
}

export namespace $IMixinEnchantment {
const probejs$$marker: never
}
export abstract class $IMixinEnchantment$$Static implements $IMixinEnchantment {
}
}

declare module "com.majruszlibrary.mixin.IMixinServerLevel" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $PersistentEntitySectionManager } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $IMixinServerLevel {
"getEntityManager"(): $PersistentEntitySectionManager<$Entity>
get "entityManager"(): $PersistentEntitySectionManager<$Entity>
}

export namespace $IMixinServerLevel {
const probejs$$marker: never
}
export abstract class $IMixinServerLevel$$Static implements $IMixinServerLevel {
}
}

declare module "com.majruszlibrary.mixininterfaces.IMixinEntity" {
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"

export interface $IMixinEntity {
"majruszlibrary$addGlowTicks"(int0: integer): void
"majruszlibrary$addInvisibleTicks"(int0: integer): void
"majruszlibrary$getExtraTag"(): $CompoundTag
"majruszlibrary$getInvisibleTicks"(): integer
"majruszlibrary$getOrCreateExtraTag"(): $CompoundTag
}

export namespace $IMixinEntity {
const probejs$$marker: never
}
export abstract class $IMixinEntity$$Static implements $IMixinEntity {
}
}

declare module "com.majruszlibrary.mixininterfaces.IMixinClientLevel" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Class$$Type } from "java.lang.Class"

export interface $IMixinClientLevel {
"majruszlibrary$delayExecution"<Type>(int0: integer, class1: $Class$$Type<Type>, consumer2: $Consumer$$Type<Type>): void
}

export namespace $IMixinClientLevel {
const probejs$$marker: never
}
export abstract class $IMixinClientLevel$$Static implements $IMixinClientLevel {
}
}

declare module "com.majruszlibrary.mixininterfaces.IMixinMob" {
import { $MobSpawnType } from "net.minecraft.world.entity.MobSpawnType"

export interface $IMixinMob {
"getMobSpawnType"(): $MobSpawnType
get "mobSpawnType"(): $MobSpawnType
}

export namespace $IMixinMob {
const probejs$$marker: never
}
export abstract class $IMixinMob$$Static implements $IMixinMob {
}
}

declare module "com.majruszlibrary.mixininterfaces.IMixinLivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinLivingEntity {
"majruszlibrary$getSwimSpeedMultiplier"(): float
}

export namespace $IMixinLivingEntity {
const probejs$$marker: never
}
export abstract class $IMixinLivingEntity$$Static implements $IMixinLivingEntity {
}
}

declare module "com.majruszlibrary.mixininterfaces.IMixinProjectile" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $IMixinProjectile {
"majruszlibrary$getArrow"(): $ItemStack
"majruszlibrary$getWeapon"(): $ItemStack
}

export namespace $IMixinProjectile {
function majruszlibrary$getProjectileArrow(entity0: $Entity$$Type): $ItemStack
function majruszlibrary$getProjectileWeapon(entity0: $Entity$$Type): $ItemStack
}
export abstract class $IMixinProjectile$$Static implements $IMixinProjectile {
static "majruszlibrary$getProjectileArrow"(entity0: $Entity$$Type): $ItemStack
static "majruszlibrary$getProjectileWeapon"(entity0: $Entity$$Type): $ItemStack
}
}

declare module "com.majruszlibrary.mixininterfaces.IMixinExplosion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinExplosion {
"majruszlibrary$getRadius"(): float
"majruszlibrary$getSpawnsFire"(): boolean
"majruszlibrary$isExplosionCancelled"(): boolean
}

export namespace $IMixinExplosion {
const probejs$$marker: never
}
export abstract class $IMixinExplosion$$Static implements $IMixinExplosion {
}
}

