declare module "me.fzzyhmstrs.particle_core.interfaces.CachedLightPreparer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CachedLightPreparer$$Type = ($CachedLightPreparer | (() => void));
}

declare module "me.fzzyhmstrs.particle_core.interfaces.ParticleVertexer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleVertexer$$Type = ($ParticleVertexer | ((arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer) => void));
}

declare module "me.fzzyhmstrs.particle_core.interfaces.BlockPosStorer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockPosStorer$$Type = ($BlockPosStorer);
}

declare module "me.fzzyhmstrs.particle_core.interfaces.ParticleCreator" {
import { $ParticleOptions } from "net.minecraft.core.particles.ParticleOptions"
import { $Particle$$Type } from "net.minecraft.client.particle.Particle"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleCreator$$Type = ($ParticleCreator | ((arg0: T, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double) => $Particle$$Type));
}

declare module "me.fzzyhmstrs.particle_core.interfaces.CachedLightProvider" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ConcurrentHashMap$$Type } from "java.util.concurrent.ConcurrentHashMap"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CachedLightProvider$$Type = ($CachedLightProvider | (() => $ConcurrentHashMap$$Type<$BlockPos$$Type, integer>));
}

declare module "me.fzzyhmstrs.particle_core.mixins.ParticleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleAccessor$$Type = ($ParticleAccessor);
}

