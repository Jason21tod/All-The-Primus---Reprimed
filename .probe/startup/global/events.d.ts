import { $ItemModelPropertiesEventJS } from "dev.latvian.mods.kubejs.item.ItemModelPropertiesEventJS"
import { $EntityModificationEventJS } from "net.liopyu.entityjs.events.EntityModificationEventJS"
import { $ItemArmorTierRegistryEventJS } from "dev.latvian.mods.kubejs.item.custom.ItemArmorTierRegistryEventJS"
import { $ClientInitEventJS } from "dev.latvian.mods.kubejs.client.ClientInitEventJS"
import { $AttributeCreationEventJS } from "net.liopyu.entityjs.events.AttributeCreationEventJS"
import { $CustomConditionEventJS } from "snownee.lychee.compat.kubejs.CustomConditionEventJS"
import { $RemoveWorldgenEventJS } from "dev.latvian.mods.kubejs.level.gen.RemoveWorldgenEventJS"
import { $RegisterSpawnPlacementsEventJS } from "net.liopyu.entityjs.events.RegisterSpawnPlacementsEventJS"
import { $CreativeTabEvent } from "dev.latvian.mods.kubejs.item.creativetab.CreativeTabEvent"
import { $ItemModificationEventJS } from "dev.latvian.mods.kubejs.item.ItemModificationEventJS"
import { $BlockModificationEventJS } from "dev.latvian.mods.kubejs.block.BlockModificationEventJS"
import { $RecipeSchemaRegistryEventJS } from "dev.latvian.mods.kubejs.recipe.RecipeSchemaRegistryEventJS"
import { $SpellModificationEventJS } from "com.squoshi.irons_spells_js.events.SpellModificationEventJS"
import { $ItemToolTierRegistryEventJS } from "dev.latvian.mods.kubejs.item.custom.ItemToolTierRegistryEventJS"
import { $ModifyAttributeEventJS } from "net.liopyu.entityjs.events.ModifyAttributeEventJS"
import { $RegistryEventJS } from "dev.latvian.mods.kubejs.registry.RegistryEventJS"
import { $CustomActionEventJS } from "snownee.lychee.compat.kubejs.CustomActionEventJS"
import { $SpellSelectionEventJS } from "com.squoshi.irons_spells_js.events.SpellSelectionEventJS"
import { $AddWorldgenEventJS } from "dev.latvian.mods.kubejs.level.gen.AddWorldgenEventJS"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"

declare global {
export namespace WorldgenEvents {
function add(handler: ((event: $AddWorldgenEventJS) => void)): void
function remove(handler: ((event: $RemoveWorldgenEventJS) => void)): void
}
export namespace LycheeEvents {
function customAction(extra: string, handler: ((event: $CustomActionEventJS) => void)): void
function customAction(handler: ((event: $CustomActionEventJS) => void)): void
function customCondition(extra: string, handler: ((event: $CustomConditionEventJS) => void)): void
function customCondition(handler: ((event: $CustomConditionEventJS) => void)): void
}
export namespace EntityJSEvents {
function modifyEntity(handler: ((event: $EntityModificationEventJS) => void)): void
function attributes(handler: ((event: $ModifyAttributeEventJS) => void)): void
function spawnPlacement(handler: ((event: $RegisterSpawnPlacementsEventJS) => void)): void
function createAttributes(handler: ((event: $AttributeCreationEventJS) => void)): void
}
export namespace PlayerEvents {
function spellSelection(handler: ((event: $SpellSelectionEventJS) => void)): void
}
export namespace ItemEvents {
function modelProperties(handler: ((event: $ItemModelPropertiesEventJS) => void)): void
function modification(handler: ((event: $ItemModificationEventJS) => void)): void
function toolTierRegistry(handler: ((event: $ItemToolTierRegistryEventJS) => void)): void
function armorTierRegistry(handler: ((event: $ItemArmorTierRegistryEventJS) => void)): void
}
export namespace ISSEvents {
function modifySpell(handler: ((event: $SpellModificationEventJS) => void)): void
function spellSelection(handler: ((event: $SpellSelectionEventJS) => void)): void
}
export namespace ClientEvents {
function init(handler: ((event: $ClientInitEventJS) => void)): void
}
export namespace StartupEvents {
function init(handler: ((event: $StartupEventJS) => void)): void
function registry(extra: string, handler: ((event: $RegistryEventJS) => void)): void
function modifyCreativeTab(extra: string, handler: ((event: $CreativeTabEvent) => void)): void
function recipeSchemaRegistry(handler: ((event: $RecipeSchemaRegistryEventJS) => void)): void
function postInit(handler: ((event: $StartupEventJS) => void)): void
}
export namespace BlockEvents {
function modification(handler: ((event: $BlockModificationEventJS) => void)): void
}
}
