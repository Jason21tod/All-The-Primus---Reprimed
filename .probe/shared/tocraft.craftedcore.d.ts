declare module "tocraft.craftedcore.data.PlayerDataProvider" {
import { $Tag, $Tag$$Type } from "net.minecraft.nbt.Tag"
import { $Set } from "java.util.Set"

export interface $PlayerDataProvider {
"craftedcore$keySet"(): $Set<string>
"craftedcore$readTag"(string0: string): $Tag
"craftedcore$writeTag"(string0: string, tag1: $Tag$$Type): void
}

export namespace $PlayerDataProvider {
const probejs$$marker: never
}
export abstract class $PlayerDataProvider$$Static implements $PlayerDataProvider {
}
}

