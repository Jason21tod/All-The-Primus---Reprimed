declare module "com.recipeessentials.nbt.IParentAwareTag" {
import { $IParentTag, $IParentTag$$Type } from "com.recipeessentials.nbt.IParentTag"

export interface $IParentAwareTag {
"parent"(): $IParentTag
"setParent"(iParentTag0: $IParentTag$$Type): void
}

export namespace $IParentAwareTag {
const probejs$$marker: never
}
export abstract class $IParentAwareTag$$Static implements $IParentAwareTag {
}
}

declare module "com.recipeessentials.nbt.IEqualTag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEqualTag {
"getLastEqual"(): $IEqualTag
"setLastEqual"(iEqualTag0: $IEqualTag$$Type): void
get "lastEqual"(): $IEqualTag
set "lastEqual"(value: $IEqualTag$$Type)
}

export namespace $IEqualTag {
const probejs$$marker: never
}
export abstract class $IEqualTag$$Static implements $IEqualTag {
}
}

declare module "com.recipeessentials.nbt.IParentTag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IParentTag {
"markDirty"(): void
}

export namespace $IParentTag {
const probejs$$marker: never
}
export abstract class $IParentTag$$Static implements $IParentTag {
}
}

