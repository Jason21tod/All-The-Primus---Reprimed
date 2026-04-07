declare module "net.fabricmc.fabric.mixin.lookup.BlockEntityTypeAccessor" {
import { $Set$$Type } from "java.util.Set"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockEntityTypeAccessor$$Type = ($BlockEntityTypeAccessor | (() => $Set$$Type<$Block$$Type>));
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.ThreadedAnvilChunkStorageAccessor" {
import { $Int2ObjectMap$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $EntityTrackerAccessor$$Type } from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ThreadedAnvilChunkStorageAccessor$$Type = ($ThreadedAnvilChunkStorageAccessor | (() => $Int2ObjectMap$$Type<$EntityTrackerAccessor$$Type>));
}

declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpriteFinderImpl$$Type = ($SpriteFinderImpl);
}

declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderContext$$Type = ($RenderContext);
}

declare module "net.fabricmc.fabric.api.blockview.v2.FabricBlockView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricBlockView$$Type = ($FabricBlockView);
}

declare module "net.fabricmc.fabric.api.loot.v2.FabricLootPoolBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricLootPoolBuilder$$Type = ($FabricLootPoolBuilder);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenKeyboardEvents$AfterKeyPress$$Type = ($ScreenKeyboardEvents$AfterKeyPress | ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttachmentTarget$$Type = ($AttachmentTarget);
}

declare module "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderMaterial$$Type = ($RenderMaterial);
}

declare module "net.fabricmc.fabric.api.client.sound.v1.FabricSoundInstance" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricSoundInstance$$Type = ($FabricSoundInstance);
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider" {
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $Level } from "net.minecraft.world.level.Level"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockApiLookup$BlockApiProvider$$Type<A = any, C = any> = ($BlockApiLookup$BlockApiProvider<A, C> | ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockEntity, arg4: C) => A));
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransactionContext$$Type = ($TransactionContext);
}

declare module "net.fabricmc.fabric.impl.event.lifecycle.LoadedChunksCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LoadedChunksCache$$Type = ($LoadedChunksCache);
}

declare module "net.fabricmc.fabric.impl.client.rendering.ColorProviderRegistryImpl$ColorMapperHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ColorProviderRegistryImpl$ColorMapperHolder$$Type<T = any, Provider = any> = ($ColorProviderRegistryImpl$ColorMapperHolder<T, Provider> | ((arg0: T) => Provider));
}

declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer" {
import { $CustomIngredient, $CustomIngredient$$Type } from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomIngredientSerializer$$Type<T extends $CustomIngredient = $CustomIngredient> = ($CustomIngredientSerializer<T>);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake" {
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelModifier$BeforeBake$Context } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelModifier$BeforeBake$$Type = ($ModelModifier$BeforeBake | ((arg0: $UnbakedModel, arg1: $ModelModifier$BeforeBake$Context) => $UnbakedModel$$Type));
}

declare module "net.fabricmc.fabric.impl.item.ItemExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemExtensions$$Type = ($ItemExtensions);
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback$RemapState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryIdRemapCallback$RemapState$$Type<T = any> = ($RegistryIdRemapCallback$RemapState<T>);
}

declare module "net.fabricmc.fabric.api.util.BooleanFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BooleanFunction$$Type<R = any> = ($BooleanFunction<R> | ((arg0: boolean) => R));
}

declare module "net.fabricmc.fabric.impl.networking.NetworkHandlerExtensions" {
import { $AbstractNetworkAddon$$Type } from "net.fabricmc.fabric.impl.networking.AbstractNetworkAddon"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NetworkHandlerExtensions$$Type = ($NetworkHandlerExtensions | (() => $AbstractNetworkAddon$$Type<any>));
}

declare module "net.fabricmc.fabric.impl.networking.AbstractNetworkAddon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractNetworkAddon$$Type<H = any> = ($AbstractNetworkAddon<H>);
}

declare module "net.fabricmc.fabric.mixin.screen.ScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransactionContext$Result$$Type = ($TransactionContext$Result | ("aborted" | "committed"));
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback" {
import { $TransactionContext$Result } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"
import { $TransactionContext } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransactionContext$CloseCallback$$Type = ($TransactionContext$CloseCallback | ((arg0: $TransactionContext, arg1: $TransactionContext$Result) => void));
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.CustomPayloadC2SPacketAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomPayloadC2SPacketAccessor$$Type = ($CustomPayloadC2SPacketAccessor);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenEvents$BeforeTick$$Type = ($ScreenEvents$BeforeTick | ((arg0: $Screen) => void));
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractRenderContext$$Type = ($AbstractRenderContext);
}

declare module "net.fabricmc.fabric.impl.resource.loader.FabricLifecycledResourceManager" {
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricLifecycledResourceManager$$Type = ($FabricLifecycledResourceManager | (() => $PackType$$Type));
}

declare module "net.fabricmc.fabric.api.networking.v1.PacketSender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PacketSender$$Type = ($PacketSender);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver" {
import { $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelResolver$Context } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelResolver$$Type = ($ModelResolver | ((arg0: $ModelResolver$Context) => $UnbakedModel$$Type));
}

declare module "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider" {
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EquipmentSlotProvider$$Type = ($EquipmentSlotProvider | ((arg0: $ItemStack) => $EquipmentSlot$$Type));
}

declare module "net.fabricmc.fabric.impl.client.screen.ScreenExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenExtensions$$Type = ($ScreenExtensions);
}

declare module "net.fabricmc.fabric.api.datagen.v1.loot.FabricBlockLootTableGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricBlockLootTableGenerator$$Type = ($FabricBlockLootTableGenerator);
}

declare module "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IdentifiableResourceReloadListener$$Type = ($IdentifiableResourceReloadListener);
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractBlockRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractBlockRenderContext$$Type = ($AbstractBlockRenderContext);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$AfterMouseRelease$$Type = ($ScreenMouseEvents$AfterMouseRelease | ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$AllowMouseRelease$$Type = ($ScreenMouseEvents$AllowMouseRelease | ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => boolean));
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelLoadingPlugin$Context$$Type = ($ModelLoadingPlugin$Context);
}

declare module "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricBakedModel$$Type = ($FabricBakedModel);
}

declare module "net.fabricmc.fabric.api.registry.FlammableBlockRegistry$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FlammableBlockRegistry$Entry$$Type = ($FlammableBlockRegistry$Entry);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$AfterMouseClick$$Type = ($ScreenMouseEvents$AfterMouseClick | ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider" {
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockApiLookup$BlockEntityApiProvider$$Type<A = any, C = any> = ($BlockApiLookup$BlockEntityApiProvider<A, C> | ((arg0: $BlockEntity, arg1: C) => A));
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Transaction$$Type = ($Transaction);
}

declare module "net.fabricmc.fabric.api.networking.v1.FabricPacket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricPacket$$Type = ($FabricPacket);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenKeyboardEvents$AllowKeyRelease$$Type = ($ScreenKeyboardEvents$AllowKeyRelease | ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => boolean));
}

declare module "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpecialLogicInventory$$Type = ($SpecialLogicInventory);
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback" {
import { $RegistryIdRemapCallback$RemapState } from "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback$RemapState"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryIdRemapCallback$$Type<T = any> = ($RegistryIdRemapCallback<T> | ((arg0: $RegistryIdRemapCallback$RemapState<T>) => void));
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.accessor.AccessChunkRendererRegion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AccessChunkRendererRegion$$Type = ($AccessChunkRendererRegion);
}

declare module "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor" {
import { $Connection$$Type } from "net.minecraft.network.Connection"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MinecraftClientAccessor$$Type = ($MinecraftClientAccessor | (() => $Connection$$Type));
}

declare module "net.fabricmc.fabric.mixin.client.particle.ParticleManagerAccessor" {
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleManagerAccessor$$Type = ($ParticleManagerAccessor | (() => $TextureAtlas$$Type));
}

declare module "net.fabricmc.fabric.impl.networking.server.ServerPlayNetworkAddon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerPlayNetworkAddon$$Type = ($ServerPlayNetworkAddon);
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockApiLookup$$Type<A = any, C = any> = ($BlockApiLookup<A, C>);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.FabricBakedModelManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricBakedModelManager$$Type = ($FabricBakedModelManager);
}

declare module "net.fabricmc.fabric.mixin.content.registry.ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ShovelItemAccessor$$Type = ($ShovelItemAccessor);
}

declare module "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransferVariant$$Type<O = any> = ($TransferVariant<O>);
}

declare module "net.fabricmc.fabric.mixin.blockview.BlockViewMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockViewMixin$$Type = ($BlockViewMixin);
}

declare module "net.fabricmc.fabric.mixin.loot.LootTableAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootTableAccessor$$Type = ($LootTableAccessor);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender" {
import { $GuiGraphics } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenEvents$BeforeRender$$Type = ($ScreenEvents$BeforeRender | ((arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float) => void));
}

declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockAccessor" {
import { $BlockBehaviour$Properties$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractBlockAccessor$$Type = ($AbstractBlockAccessor | (() => $BlockBehaviour$Properties$$Type));
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.TerrainRenderContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TerrainRenderContext$$Type = ($TerrainRenderContext);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelModifier$OnLoad$Context$$Type = ($ModelModifier$OnLoad$Context);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ModelModifier$AfterBake$Context } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelModifier$AfterBake$$Type = ($ModelModifier$AfterBake | ((arg0: $BakedModel, arg1: $ModelModifier$AfterBake$Context) => $BakedModel$$Type));
}

declare module "net.fabricmc.fabric.api.client.networking.v1.ClientPlayNetworking$PlayChannelHandler" {
import { $PacketSender } from "net.fabricmc.fabric.api.networking.v1.PacketSender"
import { $Minecraft } from "net.minecraft.client.Minecraft"
import { $ClientPacketListener } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClientPlayNetworking$PlayChannelHandler$$Type = ($ClientPlayNetworking$PlayChannelHandler | ((arg0: $Minecraft, arg1: $ClientPacketListener, arg2: $FriendlyByteBuf, arg3: $PacketSender) => void));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$BeforeMouseRelease$$Type = ($ScreenMouseEvents$BeforeMouseRelease | ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.mixin.loot.LootPoolAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootPoolAccessor$$Type = ($LootPoolAccessor);
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockApiCache$$Type<A = any, C = any> = ($BlockApiCache<A, C>);
}

declare module "net.fabricmc.fabric.impl.transfer.fluid.FluidVariantCache" {
import { $FluidVariant$$Type } from "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidVariantCache$$Type = ($FluidVariantCache | (() => $FluidVariant$$Type));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenKeyboardEvents$BeforeKeyRelease$$Type = ($ScreenKeyboardEvents$BeforeKeyRelease | ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver" {
import { $BlockStateResolver$Context } from "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockStateResolver$$Type = ($BlockStateResolver | ((arg0: $BlockStateResolver$Context) => void));
}

declare module "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer" {
import { $Long2ObjectMap } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderDataMapConsumer$$Type = ($RenderDataMapConsumer | ((arg0: $Long2ObjectMap<any>) => void));
}

declare module "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor" {
import { $InputConstants$Key$$Type } from "com.mojang.blaze3d.platform.InputConstants$Key"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $KeyBindingAccessor$$Type = ($KeyBindingAccessor | (() => $InputConstants$Key$$Type));
}

declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess" {
import { $SpriteFinderImpl$$Type } from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpriteFinderImpl$SpriteFinderAccess$$Type = ($SpriteFinderImpl$SpriteFinderAccess | (() => $SpriteFinderImpl$$Type));
}

declare module "net.fabricmc.fabric.api.util.TriState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TriState$$Type = ($TriState | ("false" | "default" | "true"));
}

declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderAttachmentBlockEntity$$Type = ($RenderAttachmentBlockEntity | (() => any));
}

declare module "net.fabricmc.fabric.api.block.v1.FabricBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricBlockState$$Type = ($FabricBlockState);
}

declare module "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderDataBlockEntity$$Type = ($RenderDataBlockEntity);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenKeyboardEvents$BeforeKeyPress$$Type = ($ScreenKeyboardEvents$BeforeKeyPress | ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.item.v1.FabricItem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricItem$$Type = ($FabricItem);
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $QuadView$$Type = ($QuadView);
}

declare module "net.fabricmc.fabric.api.resource.conditions.v1.ConditionJsonProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConditionJsonProvider$$Type = ($ConditionJsonProvider);
}

declare module "net.fabricmc.fabric.mixin.client.rendering.DimensionEffectsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DimensionEffectsAccessor$$Type = ($DimensionEffectsAccessor);
}

declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform" {
import { $MutableQuadView } from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderContext$QuadTransform$$Type = ($RenderContext$QuadTransform | ((arg0: $MutableQuadView) => boolean));
}

declare module "net.fabricmc.fabric.api.loot.v2.FabricLootTableBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricLootTableBuilder$$Type = ($FabricLootTableBuilder);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenKeyboardEvents$AfterKeyRelease$$Type = ($ScreenKeyboardEvents$AfterKeyRelease | ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.renderer.v1.material.MaterialView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MaterialView$$Type = ($MaterialView);
}

declare module "net.fabricmc.fabric.impl.datagen.DataGeneratorExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataGeneratorExtension$$Type = ($DataGeneratorExtension);
}

declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelLoadingEventDispatcher$$Type = ($ModelLoadingEventDispatcher);
}

declare module "net.fabricmc.fabric.impl.blockrenderlayer.ExtendedChunkRenderTypeSet" {
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ExtendedChunkRenderTypeSet$$Type = ($ExtendedChunkRenderTypeSet | (() => $RenderType$$Type));
}

declare module "net.fabricmc.fabric.impl.lookup.block.ServerWorldCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerWorldCache$$Type = ($ServerWorldCache);
}

declare module "net.fabricmc.fabric.impl.networking.client.ClientPlayNetworkAddon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ClientPlayNetworkAddon$$Type = ($ClientPlayNetworkAddon);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin" {
import { $ModelLoadingPlugin$Context } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelLoadingPlugin$$Type = ($ModelLoadingPlugin | ((arg0: $ModelLoadingPlugin$Context) => void));
}

declare module "net.fabricmc.fabric.api.renderer.v1.material.BlendMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlendMode$$Type = ($BlendMode | ("default" | "solid" | "cutout_mipped" | "cutout" | "translucent"));
}

declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderAttachedBlockView$$Type = ($RenderAttachedBlockView);
}

declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockApiCacheImpl$$Type<A = any, C = any> = ($BlockApiCacheImpl<A, C>);
}

declare module "net.fabricmc.fabric.api.event.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Event$$Type<T = any> = ($Event<T>);
}

declare module "net.fabricmc.fabric.impl.registry.sync.RemappableRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RemappableRegistry$$Type = ($RemappableRegistry);
}

declare module "net.fabricmc.fabric.impl.gamerule.RuleKeyExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RuleKeyExtensions$$Type = ($RuleKeyExtensions);
}

declare module "net.fabricmc.fabric.impl.networking.AbstractChanneledNetworkAddon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractChanneledNetworkAddon$$Type<H = any> = ($AbstractChanneledNetworkAddon<H>);
}

declare module "net.fabricmc.fabric.impl.registry.sync.RemappableRegistry$RemapMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RemappableRegistry$RemapMode$$Type = ($RemappableRegistry$RemapMode | ("authoritative" | "remote" | "exact"));
}

declare module "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BakedModelMixin$$Type = ($BakedModelMixin);
}

declare module "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $KeyBindingAccessor$$Type = ($KeyBindingAccessor | (() => integer));
}

declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRulesAccessor$$Type = ($GameRulesAccessor);
}

declare module "net.fabricmc.fabric.impl.networking.DisconnectPacketSource" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DisconnectPacketSource$$Type = ($DisconnectPacketSource | ((arg0: $Component) => $Packet$$Type<any>));
}

declare module "net.fabricmc.fabric.api.networking.v1.ServerPlayNetworking$PlayChannelHandler" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $ServerGamePacketListenerImpl } from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import { $PacketSender } from "net.fabricmc.fabric.api.networking.v1.PacketSender"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerPlayNetworking$PlayChannelHandler$$Type = ($ServerPlayNetworking$PlayChannelHandler | ((arg0: $MinecraftServer, arg1: $ServerPlayer, arg2: $ServerGamePacketListenerImpl, arg3: $FriendlyByteBuf, arg4: $PacketSender) => void));
}

declare module "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpriteFinder$$Type = ($SpriteFinder);
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.ServerPlayNetworkHandlerAccessor" {
import { $Connection$$Type } from "net.minecraft.network.Connection"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ServerPlayNetworkHandlerAccessor$$Type = ($ServerPlayNetworkHandlerAccessor | (() => $Connection$$Type));
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelModifier$AfterBake$Context$$Type = ($ModelModifier$AfterBake$Context);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$BeforeMouseClick$$Type = ($ScreenMouseEvents$BeforeMouseClick | ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => void));
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryEntryRemovedCallback" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryEntryRemovedCallback$$Type<T = any> = ($RegistryEntryRemovedCallback<T> | ((arg0: integer, arg1: $ResourceLocation, arg2: T) => void));
}

declare module "net.fabricmc.fabric.impl.registry.sync.ListenableRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ListenableRegistry$$Type<T = any> = ($ListenableRegistry<T>);
}

declare module "net.fabricmc.fabric.impl.transfer.item.ItemVariantCache" {
import { $ItemVariant$$Type } from "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemVariantCache$$Type = ($ItemVariantCache | (() => $ItemVariant$$Type));
}

declare module "net.fabricmc.fabric.api.screenhandler.v1.FabricScreenHandlerFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricScreenHandlerFactory$$Type = ($FabricScreenHandlerFactory);
}

declare module "net.fabricmc.fabric.impl.itemgroup.FabricItemGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricItemGroup$$Type = ($FabricItemGroup);
}

declare module "net.fabricmc.fabric.impl.networking.ChannelInfoHolder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Collection$$Type } from "java.util.Collection"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChannelInfoHolder$$Type = ($ChannelInfoHolder | (() => $Collection$$Type<$ResourceLocation$$Type>));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$AfterMouseScroll$$Type = ($ScreenMouseEvents$AfterMouseScroll | ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => void));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenEvents$Remove$$Type = ($ScreenEvents$Remove | ((arg0: $Screen) => void));
}

declare module "net.fabricmc.fabric.api.item.v1.FabricItemStack" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricItemStack$$Type = ($FabricItemStack);
}

declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesIntRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRulesIntRuleAccessor$$Type = ($GameRulesIntRuleAccessor);
}

declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesBooleanRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRulesBooleanRuleAccessor$$Type = ($GameRulesBooleanRuleAccessor);
}

declare module "net.fabricmc.fabric.api.networking.v1.PacketType" {
import { $FabricPacket, $FabricPacket$$Type } from "net.fabricmc.fabric.api.networking.v1.FabricPacket"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PacketType$$Type<T extends $FabricPacket = $FabricPacket> = ($PacketType<T>);
}

declare module "net.fabricmc.fabric.impl.content.registry.FireBlockHooks" {
import { $BlockState } from "net.minecraft.world.level.block.state.BlockState"
import { $FlammableBlockRegistry$Entry$$Type } from "net.fabricmc.fabric.api.registry.FlammableBlockRegistry$Entry"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FireBlockHooks$$Type = ($FireBlockHooks | ((arg0: $BlockState) => $FlammableBlockRegistry$Entry$$Type));
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelModifier$BeforeBake$Context$$Type = ($ModelModifier$BeforeBake$Context);
}

declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomIngredient$$Type = ($CustomIngredient);
}

declare module "net.fabricmc.fabric.mixin.rendering.data.WorldViewMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldViewMixin$$Type = ($WorldViewMixin);
}

declare module "net.fabricmc.fabric.api.client.command.v2.FabricClientCommandSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricClientCommandSource$$Type = ($FabricClientCommandSource);
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $QuadEmitter$$Type = ($QuadEmitter);
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh" {
import { $Consumer } from "java.util.function.Consumer"
import { $QuadView } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Mesh$$Type = ($Mesh | ((arg0: $Consumer<$QuadView>) => void));
}

declare module "net.fabricmc.fabric.api.block.v1.FabricBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricBlock$$Type = ($FabricBlock);
}

declare module "net.fabricmc.fabric.mixin.content.registry.AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AxeItemAccessor$$Type = ($AxeItemAccessor);
}

declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.FabricIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FabricIngredient$$Type = ($FabricIngredient);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelResolver$Context$$Type = ($ModelResolver$Context);
}

declare module "net.fabricmc.fabric.impl.biome.MultiNoiseSamplerHooks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MultiNoiseSamplerHooks$$Type = ($MultiNoiseSamplerHooks);
}

declare module "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttachmentTargetImpl$$Type = ($AttachmentTargetImpl);
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Transaction$Lifecycle$$Type = ($Transaction$Lifecycle | ("none" | "open" | "closing" | "outer_closing"));
}

declare module "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomGameRuleCategory$$Type = ($CustomGameRuleCategory);
}

declare module "net.fabricmc.fabric.impl.client.screen.MouseExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MouseExtensions$$Type = ($MouseExtensions | (() => double));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender" {
import { $GuiGraphics } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenEvents$AfterRender$$Type = ($ScreenEvents$AfterRender | ((arg0: $Screen, arg1: $GuiGraphics, arg2: integer, arg3: integer, arg4: float) => void));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$AllowMouseClick$$Type = ($ScreenMouseEvents$AllowMouseClick | ((arg0: $Screen, arg1: double, arg2: double, arg3: integer) => boolean));
}

declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoaderHooks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelLoaderHooks$$Type = ($ModelLoaderHooks);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenKeyboardEvents$AllowKeyPress$$Type = ($ScreenKeyboardEvents$AllowKeyPress | ((arg0: $Screen, arg1: integer, arg2: integer, arg3: integer) => boolean));
}

declare module "net.fabricmc.fabric.mixin.screenhandler.NamedScreenHandlerFactoryMixin" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NamedScreenHandlerFactoryMixin$$Type = ($NamedScreenHandlerFactoryMixin);
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$BeforeMouseScroll$$Type = ($ScreenMouseEvents$BeforeMouseScroll | ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => void));
}

declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AttachmentType$$Type<A = any> = ($AttachmentType<A>);
}

declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderContext$BakedModelConsumer$$Type = ($RenderContext$BakedModelConsumer);
}

declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockApiLookupImpl$$Type<A = any, C = any> = ($BlockApiLookupImpl<A, C>);
}

declare module "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemVariant$$Type = ($ItemVariant);
}

declare module "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $FluidVariant$$Type = ($FluidVariant);
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MutableQuadView$$Type = ($MutableQuadView);
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad" {
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelModifier$OnLoad$Context } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad$Context"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelModifier$OnLoad$$Type = ($ModelModifier$OnLoad | ((arg0: $UnbakedModel, arg1: $ModelModifier$OnLoad$Context) => $UnbakedModel$$Type));
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockStateResolver$Context$$Type = ($BlockStateResolver$Context);
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryEntryAddedCallback" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryEntryAddedCallback$$Type<T = any> = ($RegistryEntryAddedCallback<T> | ((arg0: integer, arg1: $ResourceLocation, arg2: T) => void));
}

declare module "net.fabricmc.fabric.mixin.content.registry.VillagerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $VillagerEntityAccessor$$Type = ($VillagerEntityAccessor);
}

declare module "net.fabricmc.fabric.mixin.biome.SpawnSettingsBuilderAccessor" {
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Map$$Type } from "java.util.Map"
import { $MobSpawnSettings$MobSpawnCost$$Type } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SpawnSettingsBuilderAccessor$$Type = ($SpawnSettingsBuilderAccessor | (() => $Map$$Type<$EntityType$$Type<any>, $MobSpawnSettings$MobSpawnCost$$Type>));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenMouseEvents$AllowMouseScroll$$Type = ($ScreenMouseEvents$AllowMouseScroll | ((arg0: $Screen, arg1: double, arg2: double, arg3: double, arg4: double) => boolean));
}

declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockSettingsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AbstractBlockSettingsAccessor$$Type = ($AbstractBlockSettingsAccessor);
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor" {
import { $ServerPlayerConnection$$Type } from "net.minecraft.server.network.ServerPlayerConnection"
import { $Set$$Type } from "java.util.Set"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityTrackerAccessor$$Type = ($EntityTrackerAccessor | (() => $Set$$Type<$ServerPlayerConnection$$Type>));
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick" {
import { $Screen } from "net.minecraft.client.gui.screens.Screen"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ScreenEvents$AfterTick$$Type = ($ScreenEvents$AfterTick | ((arg0: $Screen) => void));
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback" {
import { $TransactionContext$Result } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TransactionContext$OuterCloseCallback$$Type = ($TransactionContext$OuterCloseCallback | ((arg0: $TransactionContext$Result) => void));
}

declare module "net.fabricmc.fabric.api.item.v1.CustomDamageHandler" {
import { $Consumer } from "java.util.function.Consumer"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomDamageHandler$$Type = ($CustomDamageHandler | ((arg0: $ItemStack, arg1: integer, arg2: $LivingEntity, arg3: $Consumer<$LivingEntity>) => integer));
}

