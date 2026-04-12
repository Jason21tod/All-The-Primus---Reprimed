declare module "com.majruszlibrary.mixin.IMixinMob" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinMob$$Type = ($IMixinMob);
}

declare module "com.majruszlibrary.mixin.IMixinEnchantment" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinEnchantment$$Type = ($IMixinEnchantment);
}

declare module "com.majruszlibrary.mixin.IMixinServerLevel" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $PersistentEntitySectionManager$$Type } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinServerLevel$$Type = ($IMixinServerLevel | (() => $PersistentEntitySectionManager$$Type<$Entity$$Type>));
}

declare module "com.majruszlibrary.mixininterfaces.IMixinEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinEntity$$Type = ($IMixinEntity);
}

declare module "com.majruszlibrary.mixininterfaces.IMixinClientLevel" {
import { $Consumer } from "java.util.function.Consumer"
import { $Class } from "java.lang.Class"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinClientLevel$$Type = ($IMixinClientLevel | ((arg0: integer, arg1: $Class<Type>, arg2: $Consumer<Type>) => void));
}

declare module "com.majruszlibrary.mixininterfaces.IMixinMob" {
import { $MobSpawnType$$Type } from "net.minecraft.world.entity.MobSpawnType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinMob$$Type = ($IMixinMob | (() => $MobSpawnType$$Type));
}

declare module "com.majruszlibrary.mixininterfaces.IMixinLivingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinLivingEntity$$Type = ($IMixinLivingEntity | (() => float));
}

declare module "com.majruszlibrary.mixininterfaces.IMixinProjectile" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinProjectile$$Type = ($IMixinProjectile);
}

declare module "com.majruszlibrary.mixininterfaces.IMixinExplosion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinExplosion$$Type = ($IMixinExplosion);
}

