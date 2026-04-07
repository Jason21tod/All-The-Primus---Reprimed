declare module "me.fzzyhmstrs.particle_core.interfaces.CachedLightPreparer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CachedLightPreparer {
"particle_core_tickLightUpdate"(): void
}

export namespace $CachedLightPreparer {
const probejs$$marker: never
}
export abstract class $CachedLightPreparer$$Static implements $CachedLightPreparer {
}
}

declare module "me.fzzyhmstrs.particle_core.interfaces.ParticleVertexer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleVertexer {
"particle_core_particleVertex"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, int9: integer): void
}

export namespace $ParticleVertexer {
const probejs$$marker: never
}
export abstract class $ParticleVertexer$$Static implements $ParticleVertexer {
}
}

declare module "me.fzzyhmstrs.particle_core.interfaces.BlockPosStorer" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockPosStorer {
"particle_core_getCachedEmpty"(): boolean
"particle_core_getCachedPos"(): $BlockPos
"particle_core_getCachedState"(): $BlockState
"particle_core_tickCachedPos"(): void
}

export namespace $BlockPosStorer {
const probejs$$marker: never
}
export abstract class $BlockPosStorer$$Static implements $BlockPosStorer {
}
}

declare module "me.fzzyhmstrs.particle_core.interfaces.ParticleCreator" {
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $Particle } from "net.minecraft.client.particle.Particle"

export interface $ParticleCreator {
"particle_core_createSafe"<T extends $ParticleOptions>(t0: T, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): $Particle
}

export namespace $ParticleCreator {
const probejs$$marker: never
}
export abstract class $ParticleCreator$$Static implements $ParticleCreator {
}
}

declare module "me.fzzyhmstrs.particle_core.interfaces.CachedLightProvider" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ConcurrentHashMap } from "java.util.concurrent.ConcurrentHashMap"

export interface $CachedLightProvider {
"particle_core_getCache"(): $ConcurrentHashMap<$BlockPos, integer>
}

export namespace $CachedLightProvider {
const probejs$$marker: never
}
export abstract class $CachedLightProvider$$Static implements $CachedLightProvider {
}
}

declare module "me.fzzyhmstrs.particle_core.mixins.ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ParticleAccessor {
"getX"(): double
"getY"(): double
"getZ"(): double
get "x"(): double
get "y"(): double
get "z"(): double
}

export namespace $ParticleAccessor {
const probejs$$marker: never
}
export abstract class $ParticleAccessor$$Static implements $ParticleAccessor {
}
}

