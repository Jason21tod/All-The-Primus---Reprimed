declare module "com.saloeater.emiloot_integrates_lootjs.mixin.CompositeLootActionAccessor" {
import { $Collection$$Type } from "java.util.Collection"
import { $ILootHandler$$Type } from "com.almostreliable.lootjs.core.ILootHandler"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CompositeLootActionAccessor$$Type = ($CompositeLootActionAccessor | (() => $Collection$$Type<$ILootHandler$$Type>));
}

declare module "com.saloeater.emiloot_integrates_lootjs.mixin.LootEntryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootEntryAccessor$$Type = ($LootEntryAccessor);
}

