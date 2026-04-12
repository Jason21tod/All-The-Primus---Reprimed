declare module "dynamic_fps.impl.util.duck.DuckScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DuckScreen {
"dynamic_fps$rendersBackground"(): boolean
"dynamic_fps$setRendersBackground"(): void
}

export namespace $DuckScreen {
const probejs$$marker: never
}
export abstract class $DuckScreen$$Static implements $DuckScreen {
}
}

declare module "dynamic_fps.impl.util.duck.DuckSoundEngine" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"

export interface $DuckSoundEngine {
"dynamic_fps$updateVolume"(source: $SoundSource$$Type): void
}

export namespace $DuckSoundEngine {
const probejs$$marker: never
}
export abstract class $DuckSoundEngine$$Static implements $DuckSoundEngine {
}
}

