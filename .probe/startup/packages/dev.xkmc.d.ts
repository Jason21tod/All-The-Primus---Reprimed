declare module "dev.xkmc.l2library.init.events.FineScrollEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FineScrollEvent$$Type = ($FineScrollEvent);
}

declare module "dev.xkmc.l2itemselector.events.GenericKeyEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenericKeyEvent$$Type = ($GenericKeyEvent);
}

declare module "dev.xkmc.l2backpack.content.remote.player.EnderTickEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnderTickEvent$$Type = ($EnderTickEvent);
}

declare module "dev.xkmc.l2complements.events.event.EnderPickupEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnderPickupEvent$$Type = ($EnderPickupEvent);
}

declare module "dev.xkmc.l2complements.mixin.LevelAccessor" {
import { $LevelEntityGetter$$Type } from "net.minecraft.world.level.entity.LevelEntityGetter"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LevelAccessor$$Type = ($LevelAccessor | (() => $LevelEntityGetter$$Type<$Entity$$Type>));
}

declare module "dev.xkmc.l2backpack.content.click.VanillaQuickInsert" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VanillaQuickInsert$$Type = ($VanillaQuickInsert | ((arg0: $ServerPlayer, arg1: $AbstractContainerMenu, arg2: $ItemStack, arg3: integer) => void));
}

declare module "dev.xkmc.l2archery.mixin.AbstractArrowAccessor" {
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractArrowAccessor$$Type = ($AbstractArrowAccessor | (() => $ItemStack$$Type));
}

declare module "dev.xkmc.l2backpack.events.ArrowBagEvents$ArrowFindEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArrowBagEvents$ArrowFindEvent$$Type = ($ArrowBagEvents$ArrowFindEvent);
}

declare module "dev.xkmc.l2library.base.effects.ForceAddEffectEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ForceAddEffectEvent$$Type = ($ForceAddEffectEvent);
}

declare module "dev.xkmc.l2backpack.events.ItemStackShrinkProvider" {
import { $IntConsumer } from "java.util.function.IntConsumer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemStackShrinkProvider$$Type = ($ItemStackShrinkProvider | ((arg0: $IntConsumer) => void));
}

