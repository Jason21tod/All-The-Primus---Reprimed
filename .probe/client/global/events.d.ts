import { $ItemSmeltedEventJS } from "dev.latvian.mods.kubejs.item.ItemSmeltedEventJS"
import { $ItemCraftedEventJS } from "dev.latvian.mods.kubejs.item.ItemCraftedEventJS"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $LangEventJS } from "dev.latvian.mods.kubejs.client.LangEventJS"
import { $ItemDroppedEventJS } from "dev.latvian.mods.kubejs.item.ItemDroppedEventJS"
import { $InventoryChangedEventJS } from "dev.latvian.mods.kubejs.player.InventoryChangedEventJS"
import { $HideJEIEventJS } from "dev.latvian.mods.kubejs.integration.forge.jei.HideJEIEventJS"
import { $GenerateClientAssetsEventJS } from "dev.latvian.mods.kubejs.client.GenerateClientAssetsEventJS"
import { $MenuType$$Type } from "net.minecraft.world.inventory.MenuType"
import { $BlockPlacedEventJS } from "dev.latvian.mods.kubejs.block.BlockPlacedEventJS"
import { $ClientEventJS } from "dev.latvian.mods.kubejs.client.ClientEventJS"
import { $ItemPickedUpEventJS } from "dev.latvian.mods.kubejs.item.ItemPickedUpEventJS"
import { $SimpleLevelEventJS } from "dev.latvian.mods.kubejs.level.SimpleLevelEventJS"
import { $FarmlandTrampledEventJS } from "dev.latvian.mods.kubejs.block.FarmlandTrampledEventJS"
import { $AddGlobalEventJS } from "zzzank.probejs.events.AddGlobalEventJS"
import { $RemoveJEIRecipesEvent } from "dev.latvian.mods.kubejs.integration.forge.jei.RemoveJEIRecipesEvent"
import { $TypingModificationEventJS } from "zzzank.probejs.events.TypingModificationEventJS"
import { $ItemTooltipEventJS } from "dev.latvian.mods.kubejs.item.ItemTooltipEventJS"
import { $SnippetGenerationEventJS } from "zzzank.probejs.events.SnippetGenerationEventJS"
import { $ChestEventJS } from "dev.latvian.mods.kubejs.player.ChestEventJS"
import { $ItemDestroyedEventJS } from "dev.latvian.mods.kubejs.item.forge.ItemDestroyedEventJS"
import { $SimplePlayerEventJS } from "dev.latvian.mods.kubejs.player.SimplePlayerEventJS"
import { $NetworkEventJS } from "dev.latvian.mods.kubejs.net.NetworkEventJS"
import { $ExplosionEventJS$Before } from "dev.latvian.mods.kubejs.level.ExplosionEventJS$Before"
import { $ExplosionEventJS$After } from "dev.latvian.mods.kubejs.level.ExplosionEventJS$After"
import { $BlockLeftClickedEventJS } from "dev.latvian.mods.kubejs.block.BlockLeftClickedEventJS"
import { $RegisterStackGroupsEventJS } from "concerrox.emixx.integration.kubejs.RegisterStackGroupsEventJS"
import { $LivingEntityHurtEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityHurtEventJS"
import { $EntitySpawnedEventJS } from "dev.latvian.mods.kubejs.entity.EntitySpawnedEventJS"
import { $HideCustomJEIEventJS } from "dev.latvian.mods.kubejs.integration.forge.jei.HideCustomJEIEventJS"
import { $TypeAssignmentEventJS } from "zzzank.probejs.events.TypeAssignmentEventJS"
import { $BlockRightClickedEventJS } from "dev.latvian.mods.kubejs.block.BlockRightClickedEventJS"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $ClickedInfoBadgeEventJS } from "snownee.lychee.compat.kubejs.ClickedInfoBadgeEventJS"
import { $JEISubtypesEventJS } from "dev.latvian.mods.kubejs.integration.forge.jei.JEISubtypesEventJS"
import { $CheckLivingEntitySpawnEventJS } from "dev.latvian.mods.kubejs.entity.CheckLivingEntitySpawnEventJS"
import { $AtlasSpriteRegistryEventJS } from "dev.latvian.mods.kubejs.client.AtlasSpriteRegistryEventJS"
import { $FoodEatenEventJS } from "dev.latvian.mods.kubejs.item.FoodEatenEventJS"
import { $RemoveJEICategoriesEvent } from "dev.latvian.mods.kubejs.integration.forge.jei.RemoveJEICategoriesEvent"
import { $DebugInfoEventJS } from "dev.latvian.mods.kubejs.client.DebugInfoEventJS"
import { $InformationJEIEventJS } from "dev.latvian.mods.kubejs.integration.forge.jei.InformationJEIEventJS"
import { $ItemClickedEventJS } from "dev.latvian.mods.kubejs.item.ItemClickedEventJS"
import { $AddJEIEventJS } from "dev.latvian.mods.kubejs.integration.forge.jei.AddJEIEventJS"
import { $ItemEntityInteractedEventJS } from "dev.latvian.mods.kubejs.item.ItemEntityInteractedEventJS"
import { $LivingEntityDeathEventJS } from "dev.latvian.mods.kubejs.entity.LivingEntityDeathEventJS"
import { $LivingEntityDropsEventJS } from "dev.latvian.mods.kubejs.entity.forge.LivingEntityDropsEventJS"
import { $BlockBrokenEventJS } from "dev.latvian.mods.kubejs.block.BlockBrokenEventJS"
import { $CustomFilterItemEventJS } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.CustomFilterItemEventJS"
import { $InventoryEventJS } from "dev.latvian.mods.kubejs.player.InventoryEventJS"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $DetectorBlockEventJS } from "dev.latvian.mods.kubejs.block.DetectorBlockEventJS"
import { $PaintScreenEventJS } from "dev.latvian.mods.kubejs.client.painter.screen.PaintScreenEventJS"

declare global {
export namespace ProbeEvents {
function addGlobal(handler: ((event: $AddGlobalEventJS) => void)): void
function snippets(handler: ((event: $SnippetGenerationEventJS) => void)): void
function assignType(handler: ((event: $TypeAssignmentEventJS) => void)): void
function modifyClass(handler: ((event: $TypingModificationEventJS) => void)): void
}
export namespace NetworkEvents {
function dataReceived(extra: string, handler: ((event: $NetworkEventJS) => void)): void
}
export namespace LycheeEvents {
function clickedInfoBadge(extra: string, handler: ((event: $ClickedInfoBadgeEventJS) => void)): void
function clickedInfoBadge(handler: ((event: $ClickedInfoBadgeEventJS) => void)): void
}
export namespace JEIEvents {
function hideItems(handler: ((event: $HideJEIEventJS) => void)): void
function addFluids(handler: ((event: $AddJEIEventJS) => void)): void
function hideFluids(handler: ((event: $HideJEIEventJS) => void)): void
function removeRecipes(handler: ((event: $RemoveJEIRecipesEvent) => void)): void
function removeCategories(handler: ((event: $RemoveJEICategoriesEvent) => void)): void
function information(handler: ((event: $InformationJEIEventJS) => void)): void
function hideCustom(handler: ((event: $HideCustomJEIEventJS) => void)): void
function subtypes(handler: ((event: $JEISubtypesEventJS) => void)): void
function addItems(handler: ((event: $AddJEIEventJS) => void)): void
}
export namespace PlayerEvents {
function chestOpened(extra: $MenuType$$Type, handler: ((event: $ChestEventJS) => void)): void
function chestOpened(handler: ((event: $ChestEventJS) => void)): void
function tick(handler: ((event: $SimplePlayerEventJS) => void)): void
function chestClosed(extra: $MenuType$$Type, handler: ((event: $ChestEventJS) => void)): void
function chestClosed(handler: ((event: $ChestEventJS) => void)): void
function inventoryClosed(extra: $MenuType$$Type, handler: ((event: $InventoryEventJS) => void)): void
function inventoryClosed(handler: ((event: $InventoryEventJS) => void)): void
function inventoryChanged(extra: $Item$$Type, handler: ((event: $InventoryChangedEventJS) => void)): void
function inventoryChanged(handler: ((event: $InventoryChangedEventJS) => void)): void
function inventoryOpened(extra: $MenuType$$Type, handler: ((event: $InventoryEventJS) => void)): void
function inventoryOpened(handler: ((event: $InventoryEventJS) => void)): void
}
export namespace ItemEvents {
function rightClicked(extra: $Item$$Type, handler: ((event: $ItemClickedEventJS) => void)): void
function rightClicked(handler: ((event: $ItemClickedEventJS) => void)): void
function crafted(extra: $Item$$Type, handler: ((event: $ItemCraftedEventJS) => void)): void
function crafted(handler: ((event: $ItemCraftedEventJS) => void)): void
function dropped(extra: $Item$$Type, handler: ((event: $ItemDroppedEventJS) => void)): void
function dropped(handler: ((event: $ItemDroppedEventJS) => void)): void
function tooltip(handler: ((event: $ItemTooltipEventJS) => void)): void
function firstRightClicked(extra: $Item$$Type, handler: ((event: $ItemClickedEventJS) => void)): void
function firstRightClicked(handler: ((event: $ItemClickedEventJS) => void)): void
function pickedUp(extra: $Item$$Type, handler: ((event: $ItemPickedUpEventJS) => void)): void
function pickedUp(handler: ((event: $ItemPickedUpEventJS) => void)): void
function destroyed(extra: $Item$$Type, handler: ((event: $ItemDestroyedEventJS) => void)): void
function destroyed(handler: ((event: $ItemDestroyedEventJS) => void)): void
function entityInteracted(extra: $Item$$Type, handler: ((event: $ItemEntityInteractedEventJS) => void)): void
function entityInteracted(handler: ((event: $ItemEntityInteractedEventJS) => void)): void
function foodEaten(extra: $Item$$Type, handler: ((event: $FoodEatenEventJS) => void)): void
function foodEaten(handler: ((event: $FoodEatenEventJS) => void)): void
function firstLeftClicked(extra: $Item$$Type, handler: ((event: $ItemClickedEventJS) => void)): void
function firstLeftClicked(handler: ((event: $ItemClickedEventJS) => void)): void
function canPickUp(extra: $Item$$Type, handler: ((event: $ItemPickedUpEventJS) => void)): void
function canPickUp(handler: ((event: $ItemPickedUpEventJS) => void)): void
function smelted(extra: $Item$$Type, handler: ((event: $ItemSmeltedEventJS) => void)): void
function smelted(handler: ((event: $ItemSmeltedEventJS) => void)): void
}
export namespace LevelEvents {
function beforeExplosion(handler: ((event: $ExplosionEventJS$Before) => void)): void
function tick(extra: string, handler: ((event: $SimpleLevelEventJS) => void)): void
function tick(handler: ((event: $SimpleLevelEventJS) => void)): void
function afterExplosion(handler: ((event: $ExplosionEventJS$After) => void)): void
}
export namespace EmiPlusPlusEvents {
function registerGroups(handler: ((event: $RegisterStackGroupsEventJS) => void)): void
}
export namespace EntityEvents {
function spawned(extra: $EntityType$$Type, handler: ((event: $EntitySpawnedEventJS) => void)): void
function spawned(handler: ((event: $EntitySpawnedEventJS) => void)): void
function drops(extra: $EntityType$$Type, handler: ((event: $LivingEntityDropsEventJS) => void)): void
function drops(handler: ((event: $LivingEntityDropsEventJS) => void)): void
function checkSpawn(extra: $EntityType$$Type, handler: ((event: $CheckLivingEntitySpawnEventJS) => void)): void
function checkSpawn(handler: ((event: $CheckLivingEntitySpawnEventJS) => void)): void
function death(extra: $EntityType$$Type, handler: ((event: $LivingEntityDeathEventJS) => void)): void
function death(handler: ((event: $LivingEntityDeathEventJS) => void)): void
function hurt(extra: $EntityType$$Type, handler: ((event: $LivingEntityHurtEventJS) => void)): void
function hurt(handler: ((event: $LivingEntityHurtEventJS) => void)): void
}
export namespace ClientEvents {
function rightDebugInfo(handler: ((event: $DebugInfoEventJS) => void)): void
function leftDebugInfo(handler: ((event: $DebugInfoEventJS) => void)): void
function loggedIn(handler: ((event: $ClientEventJS) => void)): void
function atlasSpriteRegistry(extra: string, handler: ((event: $AtlasSpriteRegistryEventJS) => void)): void
function loggedOut(handler: ((event: $ClientEventJS) => void)): void
function paintScreen(handler: ((event: $PaintScreenEventJS) => void)): void
function tick(handler: ((event: $ClientEventJS) => void)): void
function painterUpdated(handler: ((event: $ClientEventJS) => void)): void
function lang(extra: string, handler: ((event: $LangEventJS) => void)): void
function highPriorityAssets(handler: ((event: $GenerateClientAssetsEventJS) => void)): void
}
export namespace BlockEvents {
function broken(extra: $Block$$Type, handler: ((event: $BlockBrokenEventJS) => void)): void
function broken(handler: ((event: $BlockBrokenEventJS) => void)): void
function detectorPowered(extra: string, handler: ((event: $DetectorBlockEventJS) => void)): void
function detectorPowered(handler: ((event: $DetectorBlockEventJS) => void)): void
function farmlandTrampled(extra: $Block$$Type, handler: ((event: $FarmlandTrampledEventJS) => void)): void
function farmlandTrampled(handler: ((event: $FarmlandTrampledEventJS) => void)): void
function placed(extra: $Block$$Type, handler: ((event: $BlockPlacedEventJS) => void)): void
function placed(handler: ((event: $BlockPlacedEventJS) => void)): void
function detectorUnpowered(extra: string, handler: ((event: $DetectorBlockEventJS) => void)): void
function detectorUnpowered(handler: ((event: $DetectorBlockEventJS) => void)): void
function leftClicked(extra: $Block$$Type, handler: ((event: $BlockLeftClickedEventJS) => void)): void
function leftClicked(handler: ((event: $BlockLeftClickedEventJS) => void)): void
function rightClicked(extra: $Block$$Type, handler: ((event: $BlockRightClickedEventJS) => void)): void
function rightClicked(handler: ((event: $BlockRightClickedEventJS) => void)): void
function detectorChanged(extra: string, handler: ((event: $DetectorBlockEventJS) => void)): void
function detectorChanged(handler: ((event: $DetectorBlockEventJS) => void)): void
}
export namespace FTBQuestsEvents {
function customFilterItem(handler: ((event: $CustomFilterItemEventJS) => void)): void
}
}
