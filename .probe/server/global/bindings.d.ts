import { $IngredientWrapper$$Static } from "dev.latvian.mods.kubejs.bindings.IngredientWrapper"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $KMath } from "dev.latvian.mods.kubejs.bindings.KMath"
import { $Items } from "net.minecraft.world.item.Items"
import { $LootEntryWrapper } from "com.almostreliable.lootjs.kube.LootEntryWrapper"
import { $AbstractSpellWrapper$$Static } from "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper"
import { $Quaternionf } from "org.joml.Quaternionf"
import { $ColorWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.ColorWrapper"
import { $DirectionWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.DirectionWrapper"
import { $AnimationHolder } from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import { $ItemFilter$$Static } from "com.almostreliable.lootjs.filters.ItemFilter"
import { $BlockWrapper } from "dev.latvian.mods.kubejs.bindings.BlockWrapper"
import { $GustDefenseGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.GustDefenseGoal"
import { $ConsoleJS } from "dev.latvian.mods.kubejs.util.ConsoleJS"
import { $ParticleHelper } from "io.redspace.ironsspellbooks.util.ParticleHelper"
import { $UUIDWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.UUIDWrapper"
import { $Duration } from "java.time.Duration"
import { $SpellBarrageGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.SpellBarrageGoal"
import { $ForgeItemFilter$$Static } from "com.almostreliable.lootjs.forge.filters.ForgeItemFilter"
import { $Vector3f } from "org.joml.Vector3f"
import { $Math } from "java.lang.Math"
import { $NBTIOWrapper$$Static } from "dev.latvian.mods.kubejs.util.NBTIOWrapper"
import { $WizardAttackGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardAttackGoal"
import { $NotificationBuilder } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $AlmostKube } from "com.almostreliable.unified.compat.AlmostKube"
import { $BlockStateProperties } from "net.minecraft.world.level.block.state.properties.BlockStateProperties"
import { $AABBWrapper$$Static } from "dev.latvian.mods.rhino.mod.wrapper.AABBWrapper"
import { $ItemTags } from "net.minecraft.tags.ItemTags"
import { $WizardRecoverGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardRecoverGoal"
import { $RotationAxis } from "dev.latvian.mods.kubejs.util.RotationAxis"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $CastType } from "io.redspace.ironsspellbooks.api.spells.CastType"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $Blocks } from "net.minecraft.world.level.block.Blocks"
import { $Player } from "net.minecraft.world.entity.player.Player"
import { $EntityJSUtils$$Static } from "net.liopyu.entityjs.util.EntityJSUtils"
import { $LycheeLootContextParams } from "snownee.lychee.LycheeLootContextParams"
import { $IntervalJS } from "com.almostreliable.lootjs.kube.wrapper.IntervalJS"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $SpellRarity } from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import { $SpellRegistry } from "io.redspace.ironsspellbooks.api.registry.SpellRegistry"
import { $Matrix3f } from "org.joml.Matrix3f"
import { $TextWrapper } from "dev.latvian.mods.kubejs.bindings.TextWrapper"
import { $WarlockAttackGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.WarlockAttackGoal"
import { $BlockStatePredicate$$Static } from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import { $PotionRegistry } from "io.redspace.ironsspellbooks.registries.PotionRegistry"
import { $LootContextParams } from "net.minecraft.world.level.storage.loot.parameters.LootContextParams"
import { $JsonIO } from "dev.latvian.mods.kubejs.util.JsonIO"
import { $UtilsWrapper$$Static } from "dev.latvian.mods.kubejs.bindings.UtilsWrapper"
import { $WispAttackGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.WispAttackGoal"
import { $FluidWrapper } from "dev.latvian.mods.kubejs.fluid.FluidWrapper"
import { $FluidAmounts$$Static } from "dev.latvian.mods.kubejs.util.FluidAmounts"
import { $Potions } from "net.minecraft.world.item.alchemy.Potions"
import { $HashMap } from "java.util.HashMap"
import { $IngredientForgeHelper } from "dev.latvian.mods.kubejs.platform.forge.IngredientForgeHelper"
import { $ItemWrapper$$Static } from "dev.latvian.mods.kubejs.bindings.ItemWrapper"
import { $Minecraft } from "net.minecraft.client.Minecraft"
import { $JavaWrapper } from "dev.latvian.mods.kubejs.bindings.JavaWrapper"
import { $DamageSource } from "net.minecraft.world.damagesource.DamageSource"
import { $NBTUtils$$Static } from "dev.latvian.mods.rhino.mod.util.NBTUtils"
import { $Vec3i } from "net.minecraft.core.Vec3i"
import { $WizardSupportGoal } from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardSupportGoal"
import { $Stats } from "net.minecraft.stats.Stats"
import { $Reference } from "snownee.lychee.core.Reference"
import { $Matrix4f } from "org.joml.Matrix4f"
import { $Painter } from "dev.latvian.mods.kubejs.client.painter.Painter"
import { $SchoolRegistry } from "io.redspace.ironsspellbooks.api.registry.SchoolRegistry"
import { $PlatformWrapper } from "dev.latvian.mods.kubejs.script.PlatformWrapper"
import { $Utils } from "io.redspace.ironsspellbooks.api.util.Utils"
import { $InputItem } from "dev.latvian.mods.kubejs.item.InputItem"
import { $SpellData } from "io.redspace.ironsspellbooks.api.spells.SpellData"
import { $TargetEntityCastData } from "io.redspace.ironsspellbooks.capabilities.magic.TargetEntityCastData"
import { $OutputItem } from "dev.latvian.mods.kubejs.item.OutputItem"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $LootContextType } from "com.almostreliable.lootjs.core.LootContextType"
import { $FTBQuestsKubeJSWrapper } from "dev.ftb.mods.ftbxmodcompat.ftbquests.kubejs.FTBQuestsKubeJSWrapper"
import { $Vector4f } from "org.joml.Vector4f"

declare global {
const AABB: (typeof $AABBWrapper$$Static)
const AlmostUnified: (typeof $AlmostKube)
const Block: (typeof $BlockWrapper)
const BlockPos: (typeof $BlockPos)
const BlockProperties: (typeof $BlockStateProperties)
const BlockStatePredicate: (typeof $BlockStatePredicate$$Static)
const Blocks: (typeof $Blocks)
const CastType: (typeof $CastType)
const Client: $Minecraft
const Color: (typeof $ColorWrapper$$Static)
const Component: (typeof $TextWrapper)
const DamageSource: (typeof $DamageSource)
const Direction: (typeof $DirectionWrapper$$Static)
const Duration: (typeof $Duration)
const EntityJSUtils: (typeof $EntityJSUtils$$Static)
const FTBQuests: $FTBQuestsKubeJSWrapper
const Facing: (typeof $DirectionWrapper$$Static)
const Fluid: (typeof $FluidWrapper)
const FluidAmounts: (typeof $FluidAmounts$$Static)
const ForgeItemFilter: (typeof $ForgeItemFilter$$Static)
const GustDefenseGoal: (typeof $GustDefenseGoal)
const HOUR: double
const ISSAnimationHolder: (typeof $AnimationHolder)
const ISSPotionRegistry: (typeof $PotionRegistry)
const ISSUtils: (typeof $Utils)
const Ingredient: (typeof $IngredientWrapper$$Static)
const IngredientHelper: $IngredientForgeHelper
const InputItem: (typeof $InputItem)
const InteractionResult: (typeof $InteractionResult)
const Interval: $IntervalJS
const IronsSpellsParticleHelper: (typeof $ParticleHelper)
const Item: (typeof $ItemWrapper$$Static)
const ItemFilter: (typeof $ItemFilter$$Static)
const ItemTags: (typeof $ItemTags)
const Items: (typeof $Items)
const Java: $JavaWrapper
const JavaMath: (typeof $Math)
const JsonIO: (typeof $JsonIO)
const KMath: (typeof $KMath)
const LootContextParams: (typeof $LootContextParams)
const LootEntry: (typeof $LootEntryWrapper)
const LootType: (typeof $LootContextType)
const LycheeLootContextParams: (typeof $LycheeLootContextParams)
const LycheeReference: (typeof $Reference)
const MINUTE: double
const Matrix3f: (typeof $Matrix3f)
const Matrix4f: (typeof $Matrix4f)
const NBT: (typeof $NBTUtils$$Static)
const NBTIO: (typeof $NBTIOWrapper$$Static)
const Notification: (typeof $NotificationBuilder)
const OutputItem: (typeof $OutputItem)
const Painter: $Painter
const Platform: (typeof $PlatformWrapper)
const Player: (typeof $Player)
const Potions: (typeof $Potions)
const Quaternionf: (typeof $Quaternionf)
const ResourceLocation: (typeof $ResourceLocation)
const RotationAxis: (typeof $RotationAxis)
const SECOND: double
const SchoolRegistry: (typeof $SchoolRegistry)
const SoundType: (typeof $SoundType)
const Spell: (typeof $AbstractSpellWrapper$$Static)
const SpellBarrageGoal: (typeof $SpellBarrageGoal)
const SpellData: (typeof $SpellData)
const SpellRarity: (typeof $SpellRarity)
const SpellRegistry: (typeof $SpellRegistry)
const Stats: (typeof $Stats)
const TargetEntityCastData: (typeof $TargetEntityCastData)
const Text: (typeof $TextWrapper)
const UUID: (typeof $UUIDWrapper$$Static)
const Utils: (typeof $UtilsWrapper$$Static)
const Vec3d: (typeof $Vec3)
const Vec3f: (typeof $Vector3f)
const Vec3i: (typeof $Vec3i)
const Vec4f: (typeof $Vector4f)
const WarlockAttackGoal: (typeof $WarlockAttackGoal)
const WispAttackGoal: (typeof $WispAttackGoal)
const WizardAttackGoal: (typeof $WizardAttackGoal)
const WizardRecoverGoal: (typeof $WizardRecoverGoal)
const WizardSupportGoal: (typeof $WizardSupportGoal)
const console: $ConsoleJS
const global: ($HashMap & ProbeJS$$ResolvedGlobal)
const onEvent: ((...args: any[]) => any)
const settings: ((...args: any[]) => any)
}
