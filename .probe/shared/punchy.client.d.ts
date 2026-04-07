declare module "punchy.client.render.BoatLidState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoatLidState {
"punchy$getChestRotX"(): float
"punchy$getChestRotY"(): float
"punchy$getChestRotZ"(): float
"punchy$getChestX"(): float
"punchy$getChestY"(): float
"punchy$getChestZ"(): float
"punchy$getLidLastUpdateNanos"(): long
"punchy$getLidOpen"(): float
"punchy$getLidVel"(): float
"punchy$getLight"(): integer
"punchy$getVy"(): double
"punchy$isChestBoat"(): boolean
"punchy$isChestPoseValid"(): boolean
"punchy$isInHand"(): boolean
"punchy$isLidApplied"(): boolean
"punchy$setChestBoat"(boolean0: boolean): void
"punchy$setChestPose"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float): void
"punchy$setChestPoseValid"(boolean0: boolean): void
"punchy$setInHand"(boolean0: boolean): void
"punchy$setLidApplied"(boolean0: boolean): void
"punchy$setLidLastUpdateNanos"(long0: long): void
"punchy$setLidOpen"(float0: float): void
"punchy$setLidVel"(float0: float): void
"punchy$setLight"(int0: integer): void
"punchy$setVy"(double0: double): void
}

export namespace $BoatLidState {
const probejs$$marker: never
}
export abstract class $BoatLidState$$Static implements $BoatLidState {
}
}

declare module "punchy.client.access.TransformablePart" {
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export interface $TransformablePart {
"punchy$getExplicitTransform"(): $Matrix4f
"punchy$setExplicitTransform"(matrix4f0: $Matrix4f$$Type): void
}

export namespace $TransformablePart {
const probejs$$marker: never
}
export abstract class $TransformablePart$$Static implements $TransformablePart {
}
}

