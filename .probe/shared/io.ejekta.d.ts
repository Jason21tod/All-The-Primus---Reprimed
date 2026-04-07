declare module "io.ejekta.kambrik.internal.mixins.StructurePoolAccessor" {
import { $List, $List$$Type } from "java.util.List"
import { $ObjectArrayList } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructurePoolAccessor {
"getElementCounts"(): $List<$Pair<$StructurePoolElement, integer>>
"getElements"(): $ObjectArrayList<$StructurePoolElement>
"setElementCounts"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
get "elementCounts"(): $List<$Pair<$StructurePoolElement, integer>>
get "elements"(): $ObjectArrayList<$StructurePoolElement>
set "elementCounts"(value: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>)
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructurePoolAccessor$$Static implements $StructurePoolAccessor {
}
}

