declare module "net.liopyu.entityjs.mixin.LivingEntityAccessor" {
import { $Brain$Provider } from "net.minecraft.world.entity.ai.Brain$Provider"

export interface $LivingEntityAccessor {
"brainProvider"(): $Brain$Provider<any>
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {
}
}

