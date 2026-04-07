declare module "dev.isxander.yacl3.mixin.OptionInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OptionInstanceAccessor<T = any> {
"getInitialValue"(): T
get "initialValue"(): T
}

export namespace $OptionInstanceAccessor {
const probejs$$marker: never
}
export abstract class $OptionInstanceAccessor$$Static<T = any> implements $OptionInstanceAccessor<T> {
}
}

