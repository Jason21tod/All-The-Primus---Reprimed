declare module "punchy.compat.iris.IrisItemLightProviderCompat" {
import { $Vector3f } from "org.joml.Vector3f"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export interface $IrisItemLightProviderCompat {
"getLightColor"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): $Vector3f
"getLightEmission"(player0: $Player$$Type, itemStack1: $ItemStack$$Type): integer
}

export namespace $IrisItemLightProviderCompat {
const probejs$$marker: never
}
export abstract class $IrisItemLightProviderCompat$$Static implements $IrisItemLightProviderCompat {
}
}

