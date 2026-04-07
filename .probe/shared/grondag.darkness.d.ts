declare module "grondag.darkness.TextureAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextureAccess {
"darkness_enableUploadHook"(): void
}

export namespace $TextureAccess {
const probejs$$marker: never
}
export abstract class $TextureAccess$$Static implements $TextureAccess {
}
}

declare module "grondag.darkness.LightmapAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LightmapAccess {
"darkness_isDirty"(): boolean
"darkness_prevFlicker"(): float
}

export namespace $LightmapAccess {
const probejs$$marker: never
}
export abstract class $LightmapAccess$$Static implements $LightmapAccess {
}
}

