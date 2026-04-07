declare module "com.zoma1101.swordskill.event.SkillTryUseEvent" {
import { $PlayerEvent } from "net.minecraftforge.event.entity.player.PlayerEvent"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SkillTryUseEvent extends $PlayerEvent {
constructor()
constructor(player0: $Player$$Type, string1: string)

public "getSkillName"(): string
get "skillName"(): string
}
}

