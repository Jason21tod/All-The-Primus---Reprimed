declare module "org.crimsoncrips.alexscavesexemplified.misc.interfaces.ACExBaseInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ACExBaseInterface {
"addSweets"(int0: integer): void
"getCharge"(): integer
"getProjectionScale"(): integer
"getSelfDestructTime"(): integer
"isMagnetizing"(): boolean
"isPowered"(): boolean
"setCharge"(int0: integer): void
"setProjectionScale"(int0: integer): void
get "charge"(): integer
get "projectionScale"(): integer
get "selfDestructTime"(): integer
get "magnetizing"(): boolean
get "powered"(): boolean
set "charge"(value: integer)
set "projectionScale"(value: integer)
}

export namespace $ACExBaseInterface {
const probejs$$marker: never
}
export abstract class $ACExBaseInterface$$Static implements $ACExBaseInterface {
}
}

