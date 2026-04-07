declare module "org.aqutheseal.blessfulled.util.mixinhelper.CritTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CritTracker {
"blessfulled$disableHasCritted"(): void
"blessfulled$enableHasCritted"(): void
"blessfulled$hasCritted"(): boolean
}

export namespace $CritTracker {
const probejs$$marker: never
}
export abstract class $CritTracker$$Static implements $CritTracker {
}
}

