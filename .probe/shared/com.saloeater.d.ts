declare module "com.saloeater.emiloot_integrates_lootjs.mixin.CompositeLootActionAccessor" {
import { $Collection } from "java.util.Collection"
import { $ILootHandler } from "com.almostreliable.lootjs.core.ILootHandler"

export interface $CompositeLootActionAccessor {
"getHandlers"(): $Collection<$ILootHandler>
get "handlers"(): $Collection<$ILootHandler>
}

export namespace $CompositeLootActionAccessor {
const probejs$$marker: never
}
export abstract class $CompositeLootActionAccessor$$Static implements $CompositeLootActionAccessor {
}
}

declare module "com.saloeater.emiloot_integrates_lootjs.mixin.LootEntryAccessor" {
import { $List } from "java.util.List"
import { $ILootCondition } from "com.almostreliable.lootjs.core.ILootCondition"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootEntry$Generator } from "com.almostreliable.lootjs.core.LootEntry$Generator"

export interface $LootEntryAccessor {
"getConditions"(): $List<$ILootCondition>
"getGenerator"(): $LootEntry$Generator
"getPostModifications"(): $List<$LootItemFunction>
"getWeight"(): integer
get "conditions"(): $List<$ILootCondition>
get "generator"(): $LootEntry$Generator
get "postModifications"(): $List<$LootItemFunction>
get "weight"(): integer
}

export namespace $LootEntryAccessor {
const probejs$$marker: never
}
export abstract class $LootEntryAccessor$$Static implements $LootEntryAccessor {
}
}

