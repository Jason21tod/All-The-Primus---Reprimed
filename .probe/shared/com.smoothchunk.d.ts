declare module "com.smoothchunk.world.IChunkTimeSave" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChunkTimeSave {
"smoothchunk$getNextSaveTime"(): long
"smoothchunk$setSaveTimePoint"(long0: long): void
}

export namespace $IChunkTimeSave {
const probejs$$marker: never
}
export abstract class $IChunkTimeSave$$Static implements $IChunkTimeSave {
}
}

