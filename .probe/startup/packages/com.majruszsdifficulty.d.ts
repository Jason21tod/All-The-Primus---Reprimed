declare module "com.majruszsdifficulty.mixin.IMixinCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinCreeper$$Type = ($IMixinCreeper);
}

declare module "com.majruszsdifficulty.mixin.forge.IMixinLootTable" {
import { $List$$Type } from "java.util.List"
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinLootTable$$Type = ($IMixinLootTable | (() => $List$$Type<$LootPool$$Type>));
}

declare module "com.majruszsdifficulty.mixin.IMixinLootPool" {
import { $LootPoolEntryContainer$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IMixinLootPool$$Type = ($IMixinLootPool | (() => $LootPoolEntryContainer$$Type[]));
}

