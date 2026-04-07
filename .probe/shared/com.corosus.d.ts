declare module "com.corosus.mobtimizations.MobtimizationEntityFields" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobtimizationEntityFields {
"getlastPlayerScanTime"(): long
"getlastWanderTime"(): long
"isplayerInRange"(): boolean
"setlastPlayerScanTime"(long0: long): void
"setlastWanderTime"(long0: long): void
"setplayerInRange"(boolean0: boolean): void
get "lastPlayerScanTime"(): long
get "lastWanderTime"(): long
get "playerInRange"(): boolean
set "lastPlayerScanTime"(value: long)
set "lastWanderTime"(value: long)
set "playerInRange"(value: boolean)
}

export namespace $MobtimizationEntityFields {
const probejs$$marker: never
}
export abstract class $MobtimizationEntityFields$$Static implements $MobtimizationEntityFields {
}
}

