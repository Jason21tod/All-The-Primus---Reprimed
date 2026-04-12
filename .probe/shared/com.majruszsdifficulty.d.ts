declare module "com.majruszsdifficulty.mixin.IMixinCreeper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinCreeper {
"getExplosionRadius"(): integer
"setExplosionRadius"(int0: integer): void
get "explosionRadius"(): integer
set "explosionRadius"(value: integer)
}

export namespace $IMixinCreeper {
const probejs$$marker: never
}
export abstract class $IMixinCreeper$$Static implements $IMixinCreeper {
}
}

declare module "com.majruszsdifficulty.mixin.forge.IMixinLootTable" {
import { $List } from "java.util.List"
import { $LootPool } from "net.minecraft.world.level.storage.loot.LootPool"

export interface $IMixinLootTable {
"getPools"(): $List<$LootPool>
get "pools"(): $List<$LootPool>
}

export namespace $IMixinLootTable {
const probejs$$marker: never
}
export abstract class $IMixinLootTable$$Static implements $IMixinLootTable {
}
}

declare module "com.majruszsdifficulty.mixin.IMixinLootPool" {
import { $LootPoolEntryContainer } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

export interface $IMixinLootPool {
"getEntries"(): $LootPoolEntryContainer[]
get "entries"(): $LootPoolEntryContainer[]
}

export namespace $IMixinLootPool {
const probejs$$marker: never
}
export abstract class $IMixinLootPool$$Static implements $IMixinLootPool {
}
}

