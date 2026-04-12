declare module "de.cristelknight.doapi.forge.terraform.sign.BlockSettingsLock" {
import { $BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $BlockSettingsLock {
"lock"(): void
}

export namespace $BlockSettingsLock {
function lock(settings: $BlockBehaviour$Properties$$Type): $BlockBehaviour$Properties
}
export abstract class $BlockSettingsLock$$Static implements $BlockSettingsLock {
static "lock"(settings: $BlockBehaviour$Properties$$Type): $BlockBehaviour$Properties
}
}

