declare module "net.fabricmc.fabric.mixin.lookup.BlockEntityTypeAccessor" {
import { $Set } from "java.util.Set"
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $BlockEntityTypeAccessor {
"getBlocks"(): $Set<$Block>
get "blocks"(): $Set<$Block>
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
export abstract class $BlockEntityTypeAccessor$$Static implements $BlockEntityTypeAccessor {
}
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.ThreadedAnvilChunkStorageAccessor" {
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $EntityTrackerAccessor } from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"

export interface $ThreadedAnvilChunkStorageAccessor {
"getEntityTrackers"(): $Int2ObjectMap<$EntityTrackerAccessor>
get "entityTrackers"(): $Int2ObjectMap<$EntityTrackerAccessor>
}

export namespace $ThreadedAnvilChunkStorageAccessor {
const probejs$$marker: never
}
export abstract class $ThreadedAnvilChunkStorageAccessor$$Static implements $ThreadedAnvilChunkStorageAccessor {
}
}

declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $Map$$Type } from "java.util.Map"
import { $QuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import { $SpriteFinder } from "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder"
import { $TextureAtlasSprite, $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export class $SpriteFinderImpl implements $SpriteFinder {
constructor(sprites: $Map$$Type<$ResourceLocation$$Type, $TextureAtlasSprite$$Type>, spriteAtlasTexture: $TextureAtlas$$Type)

public "find"(quad: $QuadView$$Type): $TextureAtlasSprite
public "find"(u: float, v: float): $TextureAtlasSprite
/** @deprecated */
public "find"(quad: $QuadView$$Type, textureIndex: integer): $TextureAtlasSprite
public static "get"(atlas: $TextureAtlas$$Type): $SpriteFinderImpl
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext" {
import { $Consumer } from "java.util.function.Consumer"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $QuadEmitter } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import { $RenderContext$BakedModelConsumer } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RenderContext$QuadTransform$$Type } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Mesh } from "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh"
import { $ItemDisplayContext } from "net.minecraft.world.item.ItemDisplayContext"

export interface $RenderContext {
/** @deprecated */
"bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/** @deprecated */
"fallbackConsumer"(): $Consumer<$BakedModel>
"getEmitter"(): $QuadEmitter
"getModelData"(): $ModelData
"getRenderLayer"(): $RenderType
"hasTransform"(): boolean
"isFaceCulled"(face: $Direction$$Type): boolean
"itemTransformationMode"(): $ItemDisplayContext
/** @deprecated */
"meshConsumer"(): $Consumer<$Mesh>
"popTransform"(): void
"pushTransform"(quadTransform0: $RenderContext$QuadTransform$$Type): void
get "emitter"(): $QuadEmitter
get "modelData"(): $ModelData
get "renderLayer"(): $RenderType
}

export namespace $RenderContext {
const probejs$$marker: never
}
export abstract class $RenderContext$$Static implements $RenderContext {
}
}

declare module "net.fabricmc.fabric.api.blockview.v2.FabricBlockView" {
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

export interface $FabricBlockView {
"getBiomeFabric"(pos: $BlockPos$$Type): $Holder<$Biome>
"getBlockEntityRenderData"(pos: $BlockPos$$Type): any
"hasBiomes"(): boolean
}

export namespace $FabricBlockView {
const probejs$$marker: never
}
export abstract class $FabricBlockView$$Static implements $FabricBlockView {
}
}

declare module "net.fabricmc.fabric.api.loot.v2.FabricLootPoolBuilder" {
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"
import { $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootPool$Builder } from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import { $Collection$$Type } from "java.util.Collection"
import { $LootItemCondition$$Type } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootPoolEntryContainer$$Type } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

export interface $FabricLootPoolBuilder {
"apply"(function_: $LootItemFunction$$Type): $LootPool$Builder
"apply"(functions: $Collection$$Type<$LootItemFunction$$Type>): $LootPool$Builder
"conditionally"(condition: $LootItemCondition$$Type): $LootPool$Builder
"conditionally"(conditions: $Collection$$Type<$LootItemCondition$$Type>): $LootPool$Builder
"with"(entry: $LootPoolEntryContainer$$Type): $LootPool$Builder
"with"(entries: $Collection$$Type<$LootPoolEntryContainer$$Type>): $LootPool$Builder
}

export namespace $FabricLootPoolBuilder {
function copyOf(pool: $LootPool$$Type): $LootPool$Builder
}
export abstract class $FabricLootPoolBuilder$$Static implements $FabricLootPoolBuilder {
static "copyOf"(pool: $LootPool$$Type): $LootPool$Builder
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AfterKeyPress {
"afterKeyPress"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer): void
}

export namespace $ScreenKeyboardEvents$AfterKeyPress {
const probejs$$marker: never
}
export abstract class $ScreenKeyboardEvents$AfterKeyPress$$Static implements $ScreenKeyboardEvents$AfterKeyPress {
}
}

declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget" {
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $AttachmentTarget {
"getAttached"<A>(type: $AttachmentType$$Type<A>): A
"getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
"getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
"getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
"getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
"getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
"getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
"hasAttached"(type: $AttachmentType$$Type<any>): boolean
"modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
"removeAttached"<A>(type: $AttachmentType$$Type<A>): A
"setAttached"<A>(type: $AttachmentType$$Type<A>, value: A): A
}

export namespace $AttachmentTarget {
const NBT_ATTACHMENT_KEY: string
}
export abstract class $AttachmentTarget$$Static implements $AttachmentTarget {
static readonly "NBT_ATTACHMENT_KEY": string

}
}

declare module "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BlendMode } from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"
import { $MaterialView } from "net.fabricmc.fabric.api.renderer.v1.material.MaterialView"
import { $TriState } from "net.fabricmc.fabric.api.util.TriState"

export interface $RenderMaterial extends $MaterialView {
"ambientOcclusion"(): $TriState
"blendMode"(): $BlendMode
"disableColorIndex"(): boolean
"disableDiffuse"(): boolean
"emissive"(): boolean
"glint"(): $TriState
/** @deprecated */
"spriteDepth"(): integer
}

export namespace $RenderMaterial {
const MATERIAL_STANDARD: $ResourceLocation
}
export abstract class $RenderMaterial$$Static implements $RenderMaterial {
static readonly "MATERIAL_STANDARD": $ResourceLocation

}
}

declare module "net.fabricmc.fabric.api.client.sound.v1.FabricSoundInstance" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundBufferLibrary$$Type } from "net.minecraft.client.sounds.SoundBufferLibrary"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"

export interface $FabricSoundInstance {
"getAudioStream"(loader: $SoundBufferLibrary$$Type, id: $ResourceLocation$$Type, repeatInstantly: boolean): $CompletableFuture<$AudioStream>
}

export namespace $FabricSoundInstance {
const EMPTY_SOUND: $ResourceLocation
}
export abstract class $FabricSoundInstance$$Static implements $FabricSoundInstance {
static readonly "EMPTY_SOUND": $ResourceLocation

}
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockApiLookup$BlockApiProvider<A = any, C = any> {
"find"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockEntity3: $BlockEntity$$Type, c4: C): A
}

export namespace $BlockApiLookup$BlockApiProvider {
const probejs$$marker: never
}
export abstract class $BlockApiLookup$BlockApiProvider$$Static<A = any, C = any> implements $BlockApiLookup$BlockApiProvider<A, C> {
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext" {
import { $TransactionContext$CloseCallback$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback"
import { $Transaction } from "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction"
import { $TransactionContext$OuterCloseCallback$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback"

export interface $TransactionContext {
"addCloseCallback"(closeCallback0: $TransactionContext$CloseCallback$$Type): void
"addOuterCloseCallback"(outerCloseCallback0: $TransactionContext$OuterCloseCallback$$Type): void
"getOpenTransaction"(int0: integer): $Transaction
"nestingDepth"(): integer
"openNested"(): $Transaction
}

export namespace $TransactionContext {
const probejs$$marker: never
}
export abstract class $TransactionContext$$Static implements $TransactionContext {
}
}

declare module "net.fabricmc.fabric.impl.event.lifecycle.LoadedChunksCache" {
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $Set } from "java.util.Set"

export interface $LoadedChunksCache {
"fabric_getLoadedChunks"(): $Set<$LevelChunk>
"fabric_markLoaded"(levelChunk0: $LevelChunk$$Type): void
"fabric_markUnloaded"(levelChunk0: $LevelChunk$$Type): void
}

export namespace $LoadedChunksCache {
const probejs$$marker: never
}
export abstract class $LoadedChunksCache$$Static implements $LoadedChunksCache {
}
}

declare module "net.fabricmc.fabric.impl.client.rendering.ColorProviderRegistryImpl$ColorMapperHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ColorProviderRegistryImpl$ColorMapperHolder<T = any, Provider = any> {
"get"(t0: T): Provider
}

export namespace $ColorProviderRegistryImpl$ColorMapperHolder {
const probejs$$marker: never
}
export abstract class $ColorProviderRegistryImpl$ColorMapperHolder$$Static<T = any, Provider = any> implements $ColorProviderRegistryImpl$ColorMapperHolder<T, Provider> {
}
}

declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $CustomIngredient, $CustomIngredient$$Type } from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $CustomIngredientSerializer<T extends $CustomIngredient = $CustomIngredient> {
"getIdentifier"(): $ResourceLocation
"read"(friendlyByteBuf0: $FriendlyByteBuf$$Type): T
"read"(jsonObject0: $JsonObject$$Type): T
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type, t1: T): void
"write"(jsonObject0: $JsonObject$$Type, t1: T): void
get "identifier"(): $ResourceLocation
}

export namespace $CustomIngredientSerializer {
function get(identifier: $ResourceLocation$$Type): $CustomIngredientSerializer<any>
function register(serializer: $CustomIngredientSerializer$$Type<any>): void
}
export abstract class $CustomIngredientSerializer$$Static<T extends $CustomIngredient = $CustomIngredient> implements $CustomIngredientSerializer<T> {
static "get"(identifier: $ResourceLocation$$Type): $CustomIngredientSerializer<any>
static "register"(serializer: $CustomIngredientSerializer$$Type<any>): void
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake" {
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelModifier$BeforeBake$Context$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake$Context"

export interface $ModelModifier$BeforeBake {
"modifyModelBeforeBake"(unbakedModel0: $UnbakedModel$$Type, context1: $ModelModifier$BeforeBake$Context$$Type): $UnbakedModel
}

export namespace $ModelModifier$BeforeBake {
const probejs$$marker: never
}
export abstract class $ModelModifier$BeforeBake$$Static implements $ModelModifier$BeforeBake {
}
}

declare module "net.fabricmc.fabric.impl.item.ItemExtensions" {
import { $EquipmentSlotProvider, $EquipmentSlotProvider$$Type } from "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider"
import { $CustomDamageHandler, $CustomDamageHandler$$Type } from "net.fabricmc.fabric.api.item.v1.CustomDamageHandler"

export interface $ItemExtensions {
"fabric_getCustomDamageHandler"(): $CustomDamageHandler
"fabric_getEquipmentSlotProvider"(): $EquipmentSlotProvider
"fabric_setCustomDamageHandler"(customDamageHandler0: $CustomDamageHandler$$Type): void
"fabric_setEquipmentSlotProvider"(equipmentSlotProvider0: $EquipmentSlotProvider$$Type): void
}

export namespace $ItemExtensions {
const probejs$$marker: never
}
export abstract class $ItemExtensions$$Static implements $ItemExtensions {
}
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback$RemapState" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Int2IntMap } from "it.unimi.dsi.fastutil.ints.Int2IntMap"

export interface $RegistryIdRemapCallback$RemapState<T = any> {
"getIdFromNew"(int0: integer): $ResourceLocation
"getIdFromOld"(int0: integer): $ResourceLocation
"getRawIdChangeMap"(): $Int2IntMap
get "rawIdChangeMap"(): $Int2IntMap
}

export namespace $RegistryIdRemapCallback$RemapState {
const probejs$$marker: never
}
export abstract class $RegistryIdRemapCallback$RemapState$$Static<T = any> implements $RegistryIdRemapCallback$RemapState<T> {
}
}

declare module "net.fabricmc.fabric.api.util.BooleanFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanFunction<R = any> {
"apply"(boolean0: boolean): R
}

export namespace $BooleanFunction {
const probejs$$marker: never
}
export abstract class $BooleanFunction$$Static<R = any> implements $BooleanFunction<R> {
}
}

declare module "net.fabricmc.fabric.impl.networking.NetworkHandlerExtensions" {
import { $AbstractNetworkAddon } from "net.fabricmc.fabric.impl.networking.AbstractNetworkAddon"

export interface $NetworkHandlerExtensions {
"getAddon"(): $AbstractNetworkAddon<any>
get "addon"(): $AbstractNetworkAddon<any>
}

export namespace $NetworkHandlerExtensions {
const probejs$$marker: never
}
export abstract class $NetworkHandlerExtensions$$Static implements $NetworkHandlerExtensions {
}
}

declare module "net.fabricmc.fabric.impl.networking.AbstractNetworkAddon" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Set } from "java.util.Set"

export class $AbstractNetworkAddon<H = any> {
public "getHandler"(channel: $ResourceLocation$$Type): H
public "getReceivableChannels"(): $Set<$ResourceLocation>
public "handleDisconnect"(): void
public "registerChannel"(channelName: $ResourceLocation$$Type, handler: H): boolean
public "unregisterChannel"(channelName: $ResourceLocation$$Type): H
get "receivableChannels"(): $Set<$ResourceLocation>
}
}

declare module "net.fabricmc.fabric.mixin.screen.ScreenAccessor" {
import { $Font } from "net.minecraft.client.gui.Font"
import { $Minecraft } from "net.minecraft.client.Minecraft"

export interface $ScreenAccessor {
"getClient"(): $Minecraft
"getTextRenderer"(): $Font
get "client"(): $Minecraft
get "textRenderer"(): $Font
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export abstract class $ScreenAccessor$$Static implements $ScreenAccessor {
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result" {
import { $Enum } from "java.lang.Enum"

export class $TransactionContext$Result extends $Enum<$TransactionContext$Result> {
static readonly "ABORTED": $TransactionContext$Result
static readonly "COMMITTED": $TransactionContext$Result

public static "valueOf"(name: string): $TransactionContext$Result
public static "values"(): $TransactionContext$Result[]
public "wasAborted"(): boolean
public "wasCommitted"(): boolean
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback" {
import { $TransactionContext$Result$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"

export interface $TransactionContext$CloseCallback {
"onClose"(transactionContext0: $TransactionContext$$Type, result1: $TransactionContext$Result$$Type): void
}

export namespace $TransactionContext$CloseCallback {
const probejs$$marker: never
}
export abstract class $TransactionContext$CloseCallback$$Static implements $TransactionContext$CloseCallback {
}
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.CustomPayloadC2SPacketAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"

export interface $CustomPayloadC2SPacketAccessor {
"getChannel"(): $ResourceLocation
"getData"(): $FriendlyByteBuf
get "channel"(): $ResourceLocation
get "data"(): $FriendlyByteBuf
}

export namespace $CustomPayloadC2SPacketAccessor {
const probejs$$marker: never
}
export abstract class $CustomPayloadC2SPacketAccessor$$Static implements $CustomPayloadC2SPacketAccessor {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$BeforeTick {
"beforeTick"(screen0: $Screen$$Type): void
}

export namespace $ScreenEvents$BeforeTick {
const probejs$$marker: never
}
export abstract class $ScreenEvents$BeforeTick$$Static implements $ScreenEvents$BeforeTick {
}
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractRenderContext" {
import { $Consumer } from "java.util.function.Consumer"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $QuadEmitter } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import { $RenderContext$BakedModelConsumer } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RenderContext$QuadTransform$$Type } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform"
import { $RenderContext } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Mesh } from "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh"
import { $ItemDisplayContext } from "net.minecraft.world.item.ItemDisplayContext"

export class $AbstractRenderContext implements $RenderContext {
/** @deprecated */
public "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/** @deprecated */
public "fallbackConsumer"(): $Consumer<$BakedModel>
public "getEmitter"(): $QuadEmitter
public "getModelData"(): $ModelData
public "getRenderLayer"(): $RenderType
public "hasTransform"(): boolean
public "isFaceCulled"(face: $Direction$$Type): boolean
public "itemTransformationMode"(): $ItemDisplayContext
/** @deprecated */
public "meshConsumer"(): $Consumer<$Mesh>
public "popTransform"(): void
public "pushTransform"(transform: $RenderContext$QuadTransform$$Type): void
get "emitter"(): $QuadEmitter
get "modelData"(): $ModelData
get "renderLayer"(): $RenderType
}
}

declare module "net.fabricmc.fabric.impl.resource.loader.FabricLifecycledResourceManager" {
import { $PackType } from "net.minecraft.server.packs.PackType"

export interface $FabricLifecycledResourceManager {
"fabric_getResourceType"(): $PackType
}

export namespace $FabricLifecycledResourceManager {
const probejs$$marker: never
}
export abstract class $FabricLifecycledResourceManager$$Static implements $FabricLifecycledResourceManager {
}
}

declare module "net.fabricmc.fabric.api.networking.v1.PacketSender" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FabricPacket, $FabricPacket$$Type } from "net.fabricmc.fabric.api.networking.v1.FabricPacket"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Future$$Type } from "io.netty.util.concurrent.Future"
import { $PacketSendListener$$Type } from "net.minecraft.network.PacketSendListener"

export interface $PacketSender {
"createPacket"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $Packet<any>
"sendPacket"<T extends $FabricPacket>(packet: T, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
"sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $PacketSendListener$$Type): void
"sendPacket"<T extends $FabricPacket>(packet: T, callback: $PacketSendListener$$Type): void
"sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type): void
"sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
"sendPacket"(packet0: $Packet$$Type<any>, packetSendListener1: $PacketSendListener$$Type): void
"sendPacket"(packet0: $Packet$$Type<any>): void
"sendPacket"<T extends $FabricPacket>(packet: T): void
"sendPacket"(packet0: $Packet$$Type<any>, genericFutureListener1: $GenericFutureListener$$Type<$Future$$Type<void>>): void
}

export namespace $PacketSender {
const probejs$$marker: never
}
export abstract class $PacketSender$$Static implements $PacketSender {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver" {
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelResolver$Context$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver$Context"

export interface $ModelResolver {
"resolveModel"(context0: $ModelResolver$Context$$Type): $UnbakedModel
}

export namespace $ModelResolver {
const probejs$$marker: never
}
export abstract class $ModelResolver$$Static implements $ModelResolver {
}
}

declare module "net.fabricmc.fabric.api.item.v1.EquipmentSlotProvider" {
import { $EquipmentSlot } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $EquipmentSlotProvider {
"getPreferredEquipmentSlot"(itemStack0: $ItemStack$$Type): $EquipmentSlot
}

export namespace $EquipmentSlotProvider {
const probejs$$marker: never
}
export abstract class $EquipmentSlotProvider$$Static implements $EquipmentSlotProvider {
}
}

declare module "net.fabricmc.fabric.impl.client.screen.ScreenExtensions" {
import { $ScreenKeyboardEvents$BeforeKeyRelease } from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease"
import { $ScreenKeyboardEvents$AllowKeyPress } from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress"
import { $ScreenMouseEvents$BeforeMouseRelease } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease"
import { $ScreenEvents$AfterRender } from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender"
import { $ScreenMouseEvents$AllowMouseRelease } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease"
import { $ScreenMouseEvents$BeforeMouseScroll } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll"
import { $ScreenKeyboardEvents$AllowKeyRelease } from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease"
import { $ScreenMouseEvents$AfterMouseClick } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick"
import { $ScreenMouseEvents$AfterMouseScroll } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll"
import { $ScreenMouseEvents$BeforeMouseClick } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick"
import { $Event } from "net.fabricmc.fabric.api.event.Event"
import { $ScreenEvents$AfterTick } from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick"
import { $ScreenEvents$BeforeTick } from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeTick"
import { $ScreenMouseEvents$AllowMouseClick } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"
import { $ScreenMouseEvents$AfterMouseRelease } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease"
import { $ScreenEvents$Remove } from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove"
import { $ScreenMouseEvents$AllowMouseScroll } from "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll"
import { $ScreenEvents$BeforeRender } from "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender"
import { $ScreenKeyboardEvents$AfterKeyRelease } from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease"
import { $List } from "java.util.List"
import { $ScreenKeyboardEvents$BeforeKeyPress } from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress"
import { $ScreenKeyboardEvents$AfterKeyPress } from "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyPress"
import { $AbstractWidget } from "net.minecraft.client.gui.components.AbstractWidget"

export interface $ScreenExtensions {
"fabric_getAfterKeyPressEvent"(): $Event<$ScreenKeyboardEvents$AfterKeyPress>
"fabric_getAfterKeyReleaseEvent"(): $Event<$ScreenKeyboardEvents$AfterKeyRelease>
"fabric_getAfterMouseClickEvent"(): $Event<$ScreenMouseEvents$AfterMouseClick>
"fabric_getAfterMouseReleaseEvent"(): $Event<$ScreenMouseEvents$AfterMouseRelease>
"fabric_getAfterMouseScrollEvent"(): $Event<$ScreenMouseEvents$AfterMouseScroll>
"fabric_getAfterRenderEvent"(): $Event<$ScreenEvents$AfterRender>
"fabric_getAfterTickEvent"(): $Event<$ScreenEvents$AfterTick>
"fabric_getAllowKeyPressEvent"(): $Event<$ScreenKeyboardEvents$AllowKeyPress>
"fabric_getAllowKeyReleaseEvent"(): $Event<$ScreenKeyboardEvents$AllowKeyRelease>
"fabric_getAllowMouseClickEvent"(): $Event<$ScreenMouseEvents$AllowMouseClick>
"fabric_getAllowMouseReleaseEvent"(): $Event<$ScreenMouseEvents$AllowMouseRelease>
"fabric_getAllowMouseScrollEvent"(): $Event<$ScreenMouseEvents$AllowMouseScroll>
"fabric_getBeforeKeyPressEvent"(): $Event<$ScreenKeyboardEvents$BeforeKeyPress>
"fabric_getBeforeKeyReleaseEvent"(): $Event<$ScreenKeyboardEvents$BeforeKeyRelease>
"fabric_getBeforeMouseClickEvent"(): $Event<$ScreenMouseEvents$BeforeMouseClick>
"fabric_getBeforeMouseReleaseEvent"(): $Event<$ScreenMouseEvents$BeforeMouseRelease>
"fabric_getBeforeMouseScrollEvent"(): $Event<$ScreenMouseEvents$BeforeMouseScroll>
"fabric_getBeforeRenderEvent"(): $Event<$ScreenEvents$BeforeRender>
"fabric_getBeforeTickEvent"(): $Event<$ScreenEvents$BeforeTick>
"fabric_getButtons"(): $List<$AbstractWidget>
"fabric_getRemoveEvent"(): $Event<$ScreenEvents$Remove>
}

export namespace $ScreenExtensions {
function getExtensions(screen: $Screen$$Type): $ScreenExtensions
}
export abstract class $ScreenExtensions$$Static implements $ScreenExtensions {
static "getExtensions"(screen: $Screen$$Type): $ScreenExtensions
}
}

declare module "net.fabricmc.fabric.api.datagen.v1.loot.FabricBlockLootTableGenerator" {
import { $ConditionJsonProvider$$Type } from "net.fabricmc.fabric.api.resource.conditions.v1.ConditionJsonProvider"
import { $BlockLootSubProvider } from "net.minecraft.data.loot.BlockLootSubProvider"

export interface $FabricBlockLootTableGenerator {
"withConditions"(...conditions: $ConditionJsonProvider$$Type[]): $BlockLootSubProvider
}

export namespace $FabricBlockLootTableGenerator {
const probejs$$marker: never
}
export abstract class $FabricBlockLootTableGenerator$$Static implements $FabricBlockLootTableGenerator {
}
}

declare module "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"

export interface $IdentifiableResourceReloadListener extends $PreparableReloadListener {
"getFabricDependencies"(): $Collection<$ResourceLocation>
"getFabricId"(): $ResourceLocation
"getName"(): string
"reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "fabricDependencies"(): $Collection<$ResourceLocation>
get "fabricId"(): $ResourceLocation
get "name"(): string
}

export namespace $IdentifiableResourceReloadListener {
const probejs$$marker: never
}
export abstract class $IdentifiableResourceReloadListener$$Static implements $IdentifiableResourceReloadListener {
}
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractBlockRenderContext" {
import { $Consumer } from "java.util.function.Consumer"
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $AbstractRenderContext } from "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractRenderContext"
import { $QuadEmitter } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import { $RenderContext$BakedModelConsumer } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $ItemDisplayContext } from "net.minecraft.world.item.ItemDisplayContext"

export class $AbstractBlockRenderContext extends $AbstractRenderContext {
public "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/** @deprecated */
public "fallbackConsumer"(): $Consumer<$BakedModel>
public "getEmitter"(): $QuadEmitter
public "getModelData"(): $ModelData
public "getRenderLayer"(): $RenderType
public "getVanillaModelEmitter"(): $QuadEmitter
public "isFaceCulled"(face: $Direction$$Type): boolean
public "itemTransformationMode"(): $ItemDisplayContext
get "emitter"(): $QuadEmitter
get "modelData"(): $ModelData
get "renderLayer"(): $RenderType
get "vanillaModelEmitter"(): $QuadEmitter
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseRelease" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseRelease {
"afterMouseRelease"(screen0: $Screen$$Type, double1: double, double2: double, int3: integer): void
}

export namespace $ScreenMouseEvents$AfterMouseRelease {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$AfterMouseRelease$$Static implements $ScreenMouseEvents$AfterMouseRelease {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseRelease" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseRelease {
"allowMouseRelease"(screen0: $Screen$$Type, double1: double, double2: double, int3: integer): boolean
}

export namespace $ScreenMouseEvents$AllowMouseRelease {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$AllowMouseRelease$$Static implements $ScreenMouseEvents$AllowMouseRelease {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Event } from "net.fabricmc.fabric.api.event.Event"
import { $ModelModifier$AfterBake } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake"
import { $BlockStateResolver$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver"
import { $Collection$$Type } from "java.util.Collection"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $ModelModifier$BeforeBake } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake"
import { $ModelResolver } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver"
import { $ModelModifier$OnLoad } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad"

export interface $ModelLoadingPlugin$Context {
"addModels"(...resourceLocation0s: $ResourceLocation$$Type[]): void
"addModels"(collection0: $Collection$$Type<$ResourceLocation$$Type>): void
"modifyModelAfterBake"(): $Event<$ModelModifier$AfterBake>
"modifyModelBeforeBake"(): $Event<$ModelModifier$BeforeBake>
"modifyModelOnLoad"(): $Event<$ModelModifier$OnLoad>
"registerBlockStateResolver"(block0: $Block$$Type, blockStateResolver1: $BlockStateResolver$$Type): void
"resolveModel"(): $Event<$ModelResolver>
}

export namespace $ModelLoadingPlugin$Context {
const probejs$$marker: never
}
export abstract class $ModelLoadingPlugin$Context$$Static implements $ModelLoadingPlugin$Context {
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RenderContext$$Type } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $FabricBakedModel {
"emitBlockQuads"(blockView: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, randomSupplier: $Supplier$$Type<$RandomSource>, context: $RenderContext$$Type): void
"emitItemQuads"(stack: $ItemStack$$Type, randomSupplier: $Supplier$$Type<$RandomSource>, context: $RenderContext$$Type): void
"isVanillaAdapter"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $FabricBakedModel {
const probejs$$marker: never
}
export abstract class $FabricBakedModel$$Static implements $FabricBakedModel {
}
}

declare module "net.fabricmc.fabric.api.registry.FlammableBlockRegistry$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FlammableBlockRegistry$Entry {
constructor(burn: integer, spread: integer)

public "getBurnChance"(): integer
public "getSpreadChance"(): integer
get "burnChance"(): integer
get "spreadChance"(): integer
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseClick" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseClick {
"afterMouseClick"(screen0: $Screen$$Type, double1: double, double2: double, int3: integer): void
}

export namespace $ScreenMouseEvents$AfterMouseClick {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$AfterMouseClick$$Static implements $ScreenMouseEvents$AfterMouseClick {
}
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider" {
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockApiLookup$BlockEntityApiProvider<A = any, C = any> {
"find"(blockEntity0: $BlockEntity$$Type, c1: C): A
}

export namespace $BlockApiLookup$BlockEntityApiProvider {
const probejs$$marker: never
}
export abstract class $BlockApiLookup$BlockEntityApiProvider$$Static<A = any, C = any> implements $BlockApiLookup$BlockEntityApiProvider<A, C> {
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction" {
import { $TransactionContext$CloseCallback$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$CloseCallback"
import { $TransactionContext, $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $TransactionContext$OuterCloseCallback$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $Transaction$Lifecycle } from "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle"

export interface $Transaction extends $AutoCloseable, $TransactionContext {
"abort"(): void
"addCloseCallback"(closeCallback0: $TransactionContext$CloseCallback$$Type): void
"addOuterCloseCallback"(outerCloseCallback0: $TransactionContext$OuterCloseCallback$$Type): void
"close"(): void
"commit"(): void
"getOpenTransaction"(int0: integer): $Transaction
"nestingDepth"(): integer
"openNested"(): $Transaction
}

export namespace $Transaction {
function getCurrentUnsafe(): $TransactionContext
function getLifecycle(): $Transaction$Lifecycle
function isOpen(): boolean
function openNested(maybeParent: $TransactionContext$$Type): $Transaction
function openOuter(): $Transaction
}
export abstract class $Transaction$$Static implements $Transaction {
/** @deprecated */
static "getCurrentUnsafe"(): $TransactionContext
static "getLifecycle"(): $Transaction$Lifecycle
static "isOpen"(): boolean
static "openNested"(maybeParent: $TransactionContext$$Type): $Transaction
static "openOuter"(): $Transaction
}
}

declare module "net.fabricmc.fabric.api.networking.v1.FabricPacket" {
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PacketType } from "net.fabricmc.fabric.api.networking.v1.PacketType"

export interface $FabricPacket {
"getType"(): $PacketType<any>
"write"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "type"(): $PacketType<any>
}

export namespace $FabricPacket {
const probejs$$marker: never
}
export abstract class $FabricPacket$$Static implements $FabricPacket {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyRelease" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AllowKeyRelease {
"allowKeyRelease"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer): boolean
}

export namespace $ScreenKeyboardEvents$AllowKeyRelease {
const probejs$$marker: never
}
export abstract class $ScreenKeyboardEvents$AllowKeyRelease$$Static implements $ScreenKeyboardEvents$AllowKeyRelease {
}
}

declare module "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory" {
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $SpecialLogicInventory {
"fabric_onFinalCommit"(int0: integer, itemStack1: $ItemStack$$Type, itemStack2: $ItemStack$$Type): void
"fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
"fabric_setSuppress"(boolean0: boolean): void
}

export namespace $SpecialLogicInventory {
const probejs$$marker: never
}
export abstract class $SpecialLogicInventory$$Static implements $SpecialLogicInventory {
}
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback" {
import { $Event } from "net.fabricmc.fabric.api.event.Event"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $RegistryIdRemapCallback$RemapState$$Type } from "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback$RemapState"

export interface $RegistryIdRemapCallback<T = any> {
"onRemap"(remapState0: $RegistryIdRemapCallback$RemapState$$Type<T>): void
}

export namespace $RegistryIdRemapCallback {
function event<T>(registry: $Registry$$Type<T>): $Event<$RegistryIdRemapCallback<T>>
}
export abstract class $RegistryIdRemapCallback$$Static<T = any> implements $RegistryIdRemapCallback<T> {
static "event"<T>(registry: $Registry$$Type<T>): $Event<$RegistryIdRemapCallback<T>>
}
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.accessor.AccessChunkRendererRegion" {
import { $TerrainRenderContext, $TerrainRenderContext$$Type } from "net.fabricmc.fabric.impl.client.indigo.renderer.render.TerrainRenderContext"

export interface $AccessChunkRendererRegion {
"fabric_getRenderer"(): $TerrainRenderContext
"fabric_setRenderer"(terrainRenderContext0: $TerrainRenderContext$$Type): void
}

export namespace $AccessChunkRendererRegion {
const probejs$$marker: never
}
export abstract class $AccessChunkRendererRegion$$Static implements $AccessChunkRendererRegion {
}
}

declare module "net.fabricmc.fabric.mixin.networking.client.accessor.MinecraftClientAccessor" {
import { $Connection } from "net.minecraft.network.Connection"

export interface $MinecraftClientAccessor {
"getConnection"(): $Connection
get "connection"(): $Connection
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftClientAccessor$$Static implements $MinecraftClientAccessor {
}
}

declare module "net.fabricmc.fabric.mixin.client.particle.ParticleManagerAccessor" {
import { $TextureAtlas } from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $ParticleManagerAccessor {
"getParticleAtlasTexture"(): $TextureAtlas
get "particleAtlasTexture"(): $TextureAtlas
}

export namespace $ParticleManagerAccessor {
const probejs$$marker: never
}
export abstract class $ParticleManagerAccessor$$Static implements $ParticleManagerAccessor {
}
}

declare module "net.fabricmc.fabric.impl.networking.server.ServerPlayNetworkAddon" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractChanneledNetworkAddon } from "net.fabricmc.fabric.impl.networking.AbstractChanneledNetworkAddon"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PacketSendListener$$Type } from "net.minecraft.network.PacketSendListener"
import { $ServerGamePacketListenerImpl$$Type } from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerPlayNetworking$PlayChannelHandler } from "net.fabricmc.fabric.api.networking.v1.ServerPlayNetworking$PlayChannelHandler"
import { $ServerboundCustomPayloadPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundCustomPayloadPacket"
import { $FabricPacket, $FabricPacket$$Type } from "net.fabricmc.fabric.api.networking.v1.FabricPacket"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Future$$Type } from "io.netty.util.concurrent.Future"

export class $ServerPlayNetworkAddon extends $AbstractChanneledNetworkAddon<$ServerPlayNetworking$PlayChannelHandler> {
constructor(handler: $ServerGamePacketListenerImpl$$Type, server: $MinecraftServer$$Type)

public "createPacket"(channelName: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type): $Packet<any>
public "handle"(packet: $ServerboundCustomPayloadPacket$$Type): boolean
public "onClientReady"(): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $PacketSendListener$$Type): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $PacketSendListener$$Type): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"<T extends $FabricPacket>(packet: T): void
}
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$$Type } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockApiLookup$BlockEntityApiProvider$$Type } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockApiLookup<A = any, C = any> {
"apiClass"(): $Class<A>
"contextClass"(): $Class<C>
"find"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, blockEntity3: $BlockEntity$$Type, c4: C): A
"find"(world: $Level$$Type, pos: $BlockPos$$Type, context: C): A
"getId"(): $ResourceLocation
"getProvider"(block0: $Block$$Type): $BlockApiLookup$BlockApiProvider<A, C>
"registerFallback"(blockApiProvider0: $BlockApiLookup$BlockApiProvider$$Type<A, C>): void
"registerForBlockEntities"(blockEntityApiProvider0: $BlockApiLookup$BlockEntityApiProvider$$Type<A, C>, ...blockEntityType1s: $BlockEntityType$$Type<any>[]): void
"registerForBlockEntity"<T extends $BlockEntity>(provider: $BiFunction$$Type<T, C, A>, blockEntityType: $BlockEntityType$$Type<T>): void
"registerForBlocks"(blockApiProvider0: $BlockApiLookup$BlockApiProvider$$Type<A, C>, ...block1s: $Block$$Type[]): void
"registerSelf"(...blockEntityType0s: $BlockEntityType$$Type<any>[]): void
get "id"(): $ResourceLocation
}

export namespace $BlockApiLookup {
function get<A, C>(lookupId: $ResourceLocation$$Type, apiClass: $Class$$Type<A>, contextClass: $Class$$Type<C>): $BlockApiLookup<A, C>
}
export abstract class $BlockApiLookup$$Static<A = any, C = any> implements $BlockApiLookup<A, C> {
static "get"<A, C>(lookupId: $ResourceLocation$$Type, apiClass: $Class$$Type<A>, contextClass: $Class$$Type<C>): $BlockApiLookup<A, C>
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.FabricBakedModelManager" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $FabricBakedModelManager {
"getModel"(id: $ResourceLocation$$Type): $BakedModel
}

export namespace $FabricBakedModelManager {
const probejs$$marker: never
}
export abstract class $FabricBakedModelManager$$Static implements $FabricBakedModelManager {
}
}

declare module "net.fabricmc.fabric.mixin.content.registry.ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccessor {
}

export namespace $ShovelItemAccessor {
const probejs$$marker: never
}
export abstract class $ShovelItemAccessor$$Static implements $ShovelItemAccessor {
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $TransferVariant<O = any> {
"copyNbt"(): $CompoundTag
"copyOrCreateNbt"(): $CompoundTag
"getNbt"(): $CompoundTag
"getObject"(): O
"hasNbt"(): boolean
"isBlank"(): boolean
"isOf"(object: O): boolean
"nbtMatches"(other: $CompoundTag$$Type): boolean
"toNbt"(): $CompoundTag
"toPacket"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "nbt"(): $CompoundTag
get "object"(): O
get "blank"(): boolean
}

export namespace $TransferVariant {
const probejs$$marker: never
}
export abstract class $TransferVariant$$Static<O = any> implements $TransferVariant<O> {
}
}

declare module "net.fabricmc.fabric.mixin.blockview.BlockViewMixin" {
import { $Holder } from "net.minecraft.core.Holder"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $FabricBlockView } from "net.fabricmc.fabric.api.blockview.v2.FabricBlockView"
import { $Biome } from "net.minecraft.world.level.biome.Biome"

export interface $BlockViewMixin extends $FabricBlockView {
"getBiomeFabric"(pos: $BlockPos$$Type): $Holder<$Biome>
"getBlockEntityRenderData"(pos: $BlockPos$$Type): any
"hasBiomes"(): boolean
}

export namespace $BlockViewMixin {
const probejs$$marker: never
}
export abstract class $BlockViewMixin$$Static implements $BlockViewMixin {
}
}

declare module "net.fabricmc.fabric.mixin.loot.LootTableAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $LootPool } from "net.minecraft.world.level.storage.loot.LootPool"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"

export interface $LootTableAccessor {
"fabric_getFunctions"(): $LootItemFunction[]
"fabric_getPools"(): $List<$LootPool>
"fabric_getRandomSequenceId"(): $ResourceLocation
}

export namespace $LootTableAccessor {
const probejs$$marker: never
}
export abstract class $LootTableAccessor$$Static implements $LootTableAccessor {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$BeforeRender" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$BeforeRender {
"beforeRender"(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float): void
}

export namespace $ScreenEvents$BeforeRender {
const probejs$$marker: never
}
export abstract class $ScreenEvents$BeforeRender$$Static implements $ScreenEvents$BeforeRender {
}
}

declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockAccessor" {
import { $BlockBehaviour$Properties } from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"

export interface $AbstractBlockAccessor {
"getSettings"(): $BlockBehaviour$Properties
get "settings"(): $BlockBehaviour$Properties
}

export namespace $AbstractBlockAccessor {
const probejs$$marker: never
}
export abstract class $AbstractBlockAccessor$$Static implements $AbstractBlockAccessor {
}
}

declare module "net.fabricmc.fabric.impl.client.indigo.renderer.render.TerrainRenderContext" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ChunkRenderDispatcher$RenderChunk$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk"
import { $ThreadLocal } from "java.lang.ThreadLocal"
import { $ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults$$Type } from "net.minecraft.client.renderer.chunk.ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults"
import { $Set$$Type } from "java.util.Set"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $ChunkBufferBuilderPack$$Type } from "net.minecraft.client.renderer.ChunkBufferBuilderPack"
import { $ModelData$$Type } from "net.minecraftforge.client.model.data.ModelData"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Consumer } from "java.util.function.Consumer"
import { $RenderChunkRegion$$Type } from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $AbstractBlockRenderContext } from "net.fabricmc.fabric.impl.client.indigo.renderer.render.AbstractBlockRenderContext"

export class $TerrainRenderContext extends $AbstractBlockRenderContext {
static readonly "POOL": $ThreadLocal<$TerrainRenderContext>

constructor()

/** @deprecated */
public "fallbackConsumer"(): $Consumer<$BakedModel>
public "prepare"(blockView: $RenderChunkRegion$$Type, chunkRenderer: $ChunkRenderDispatcher$RenderChunk$$Type, renderData: $ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults$$Type, builders: $ChunkBufferBuilderPack$$Type, initializedLayers: $Set$$Type<$RenderType$$Type>): void
public "release"(): void
public "tessellateBlock"(blockState: $BlockState$$Type, blockPos: $BlockPos$$Type, model: $BakedModel$$Type, matrixStack: $PoseStack$$Type, modelData: $ModelData$$Type, renderLayer: $RenderType$$Type): void
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad$Context" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ModelBakery } from "net.minecraft.client.resources.model.ModelBakery"
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelModifier$OnLoad$Context {
"getOrLoadModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
"id"(): $ResourceLocation
"loader"(): $ModelBakery
}

export namespace $ModelModifier$OnLoad$Context {
const probejs$$marker: never
}
export abstract class $ModelModifier$OnLoad$Context$$Static implements $ModelModifier$OnLoad$Context {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ModelModifier$AfterBake$Context$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake$Context"

export interface $ModelModifier$AfterBake {
"modifyModelAfterBake"(bakedModel0: $BakedModel$$Type, context1: $ModelModifier$AfterBake$Context$$Type): $BakedModel
}

export namespace $ModelModifier$AfterBake {
const probejs$$marker: never
}
export abstract class $ModelModifier$AfterBake$$Static implements $ModelModifier$AfterBake {
}
}

declare module "net.fabricmc.fabric.api.client.networking.v1.ClientPlayNetworking$PlayChannelHandler" {
import { $PacketSender$$Type } from "net.fabricmc.fabric.api.networking.v1.PacketSender"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ClientPlayNetworking$PlayChannelHandler {
"receive"(minecraft0: $Minecraft$$Type, clientPacketListener1: $ClientPacketListener$$Type, friendlyByteBuf2: $FriendlyByteBuf$$Type, packetSender3: $PacketSender$$Type): void
}

export namespace $ClientPlayNetworking$PlayChannelHandler {
const probejs$$marker: never
}
export abstract class $ClientPlayNetworking$PlayChannelHandler$$Static implements $ClientPlayNetworking$PlayChannelHandler {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseRelease" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseRelease {
"beforeMouseRelease"(screen0: $Screen$$Type, double1: double, double2: double, int3: integer): void
}

export namespace $ScreenMouseEvents$BeforeMouseRelease {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$BeforeMouseRelease$$Static implements $ScreenMouseEvents$BeforeMouseRelease {
}
}

declare module "net.fabricmc.fabric.mixin.loot.LootPoolAccessor" {
import { $NumberProvider } from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import { $LootItemFunction } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $LootItemCondition } from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import { $LootPoolEntryContainer } from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"

export interface $LootPoolAccessor {
"fabric_getBonusRolls"(): $NumberProvider
"fabric_getConditions"(): $LootItemCondition[]
"fabric_getEntries"(): $LootPoolEntryContainer[]
"fabric_getFunctions"(): $LootItemFunction[]
"fabric_getRolls"(): $NumberProvider
}

export namespace $LootPoolAccessor {
const probejs$$marker: never
}
export abstract class $LootPoolAccessor$$Static implements $LootPoolAccessor {
}
}

declare module "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockApiLookup, $BlockApiLookup$$Type } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"

export interface $BlockApiCache<A = any, C = any> {
"find"(context: C): A
"find"(blockState0: $BlockState$$Type, c1: C): A
"getBlockEntity"(): $BlockEntity
"getLookup"(): $BlockApiLookup<A, C>
"getPos"(): $BlockPos
"getWorld"(): $ServerLevel
get "blockEntity"(): $BlockEntity
get "lookup"(): $BlockApiLookup<A, C>
get "pos"(): $BlockPos
get "world"(): $ServerLevel
}

export namespace $BlockApiCache {
function create<A, C>(lookup: $BlockApiLookup$$Type<A, C>, world: $ServerLevel$$Type, pos: $BlockPos$$Type): $BlockApiCache<A, C>
}
export abstract class $BlockApiCache$$Static<A = any, C = any> implements $BlockApiCache<A, C> {
static "create"<A, C>(lookup: $BlockApiLookup$$Type<A, C>, world: $ServerLevel$$Type, pos: $BlockPos$$Type): $BlockApiCache<A, C>
}
}

declare module "net.fabricmc.fabric.impl.transfer.fluid.FluidVariantCache" {
import { $FluidVariant } from "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant"

export interface $FluidVariantCache {
"fabric_getCachedFluidVariant"(): $FluidVariant
}

export namespace $FluidVariantCache {
const probejs$$marker: never
}
export abstract class $FluidVariantCache$$Static implements $FluidVariantCache {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyRelease" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$BeforeKeyRelease {
"beforeKeyRelease"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer): void
}

export namespace $ScreenKeyboardEvents$BeforeKeyRelease {
const probejs$$marker: never
}
export abstract class $ScreenKeyboardEvents$BeforeKeyRelease$$Static implements $ScreenKeyboardEvents$BeforeKeyRelease {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver" {
import { $BlockStateResolver$Context$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver$Context"

export interface $BlockStateResolver {
"resolveBlockStates"(context0: $BlockStateResolver$Context$$Type): void
}

export namespace $BlockStateResolver {
const probejs$$marker: never
}
export abstract class $BlockStateResolver$$Static implements $BlockStateResolver {
}
}

declare module "net.fabricmc.fabric.impl.blockview.client.RenderDataMapConsumer" {
import { $Long2ObjectMap$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"

export interface $RenderDataMapConsumer {
"fabric_acceptRenderDataMap"(long2ObjectMap0: $Long2ObjectMap$$Type<any>): void
}

export namespace $RenderDataMapConsumer {
const probejs$$marker: never
}
export abstract class $RenderDataMapConsumer$$Static implements $RenderDataMapConsumer {
}
}

declare module "net.fabricmc.fabric.mixin.client.keybinding.KeyBindingAccessor" {
import { $InputConstants$Key } from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyBindingAccessor {
"fabric_getBoundKey"(): $InputConstants$Key
}

export namespace $KeyBindingAccessor {
const probejs$$marker: never
}
export abstract class $KeyBindingAccessor$$Static implements $KeyBindingAccessor {
}
}

declare module "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl$SpriteFinderAccess" {
import { $SpriteFinderImpl } from "net.fabricmc.fabric.impl.renderer.SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess {
"fabric_spriteFinder"(): $SpriteFinderImpl
}

export namespace $SpriteFinderImpl$SpriteFinderAccess {
const probejs$$marker: never
}
export abstract class $SpriteFinderImpl$SpriteFinderAccess$$Static implements $SpriteFinderImpl$SpriteFinderAccess {
}
}

declare module "net.fabricmc.fabric.api.util.TriState" {
import { $BooleanFunction$$Type } from "net.fabricmc.fabric.api.util.BooleanFunction"
import { $Throwable, $Throwable$$Type } from "java.lang.Throwable"
import { $Enum } from "java.lang.Enum"
import { $Optional } from "java.util.Optional"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"

export class $TriState extends $Enum<$TriState> {
static readonly "DEFAULT": $TriState
static readonly "FALSE": $TriState
static readonly "TRUE": $TriState

public "get"(): boolean
public "getBoxed"(): boolean
public "map"<T>(mapper: $BooleanFunction$$Type<T>): $Optional<T>
public static "of"(bool: boolean): $TriState
public static "of"(bool: boolean): $TriState
public "orElse"(value: boolean): boolean
public "orElseGet"(supplier: $BooleanSupplier$$Type): boolean
public "orElseThrow"<X extends $Throwable>(exceptionSupplier: $Supplier$$Type<X>): boolean
public static "valueOf"(name: string): $TriState
public static "values"(): $TriState[]
get "boxed"(): boolean
}
}

declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** @deprecated */
export interface $RenderAttachmentBlockEntity {
/** @deprecated */
"getRenderAttachmentData"(): any
get "renderAttachmentData"(): any
}

export namespace $RenderAttachmentBlockEntity {
const probejs$$marker: never
}
export abstract class $RenderAttachmentBlockEntity$$Static implements $RenderAttachmentBlockEntity {
}
}

declare module "net.fabricmc.fabric.api.block.v1.FabricBlockState" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $FabricBlockState {
"getAppearance"(renderView: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, sourceState: $BlockState$$Type, sourcePos: $BlockPos$$Type): $BlockState
}

export namespace $FabricBlockState {
const probejs$$marker: never
}
export abstract class $FabricBlockState$$Static implements $FabricBlockState {
}
}

declare module "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderDataBlockEntity {
"getRenderData"(): any
get "renderData"(): any
}

export namespace $RenderDataBlockEntity {
const probejs$$marker: never
}
export abstract class $RenderDataBlockEntity$$Static implements $RenderDataBlockEntity {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$BeforeKeyPress" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$BeforeKeyPress {
"beforeKeyPress"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer): void
}

export namespace $ScreenKeyboardEvents$BeforeKeyPress {
const probejs$$marker: never
}
export abstract class $ScreenKeyboardEvents$BeforeKeyPress$$Static implements $ScreenKeyboardEvents$BeforeKeyPress {
}
}

declare module "net.fabricmc.fabric.api.item.v1.FabricItem" {
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $Multimap } from "com.google.common.collect.Multimap"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"

export interface $FabricItem {
"allowContinuingBlockBreaking"(player: $Player$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
"allowNbtUpdateAnimation"(player: $Player$$Type, hand: $InteractionHand$$Type, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): boolean
"getAttributeModifiers"(stack: $ItemStack$$Type, slot: $EquipmentSlot$$Type): $Multimap<$Attribute, $AttributeModifier>
"getRecipeRemainder"(stack: $ItemStack$$Type): $ItemStack
"isSuitableFor"(stack: $ItemStack$$Type, state: $BlockState$$Type): boolean
}

export namespace $FabricItem {
const probejs$$marker: never
}
export abstract class $FabricItem$$Static implements $FabricItem {
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView" {
import { $RenderMaterial } from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import { $MutableQuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import { $Direction } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $QuadView {
"color"(int0: integer): integer
"colorIndex"(): integer
"copyNormal"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyPos"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
/** @deprecated */
"copyTo"(target: $MutableQuadView$$Type): void
"copyUv"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"cullFace"(): $Direction
"faceNormal"(): $Vector3f
"hasNormal"(int0: integer): boolean
"lightFace"(): $Direction
"lightmap"(int0: integer): integer
"material"(): $RenderMaterial
"nominalFace"(): $Direction
"normalX"(int0: integer): float
"normalY"(int0: integer): float
"normalZ"(int0: integer): float
"posByIndex"(int0: integer, int1: integer): float
/** @deprecated */
"spriteColor"(vertexIndex: integer, spriteIndex: integer): integer
/** @deprecated */
"spriteU"(vertexIndex: integer, spriteIndex: integer): float
/** @deprecated */
"spriteV"(vertexIndex: integer, spriteIndex: integer): float
"tag"(): integer
"toBakedQuad"(sprite: $TextureAtlasSprite$$Type): $BakedQuad
/** @deprecated */
"toBakedQuad"(spriteIndex: integer, sprite: $TextureAtlasSprite$$Type, isItem: boolean): $BakedQuad
/** @deprecated */
"toVanilla"(spriteIndex: integer, target: integer[], targetIndex: integer, isItem: boolean): void
"toVanilla"(int0s: integer[], int1: integer): void
"u"(int0: integer): float
"v"(int0: integer): float
"x"(int0: integer): float
"y"(int0: integer): float
"z"(int0: integer): float
}

export namespace $QuadView {
const VANILLA_QUAD_STRIDE: integer
const VANILLA_VERTEX_STRIDE: integer
}
export abstract class $QuadView$$Static implements $QuadView {
static readonly "VANILLA_QUAD_STRIDE": integer
static readonly "VANILLA_VERTEX_STRIDE": integer

}
}

declare module "net.fabricmc.fabric.api.resource.conditions.v1.ConditionJsonProvider" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $JsonObject, $JsonObject$$Type } from "com.google.gson.JsonObject"

export interface $ConditionJsonProvider {
"getConditionId"(): $ResourceLocation
"toJson"(): $JsonObject
"writeParameters"(jsonObject0: $JsonObject$$Type): void
get "conditionId"(): $ResourceLocation
}

export namespace $ConditionJsonProvider {
function write(conditionalObject: $JsonObject$$Type, ...conditions: $ConditionJsonProvider$$Type[]): void
}
export abstract class $ConditionJsonProvider$$Static implements $ConditionJsonProvider {
static "write"(conditionalObject: $JsonObject$$Type, ...conditions: $ConditionJsonProvider$$Type[]): void
}
}

declare module "net.fabricmc.fabric.mixin.client.rendering.DimensionEffectsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DimensionEffectsAccessor {
}

export namespace $DimensionEffectsAccessor {
const probejs$$marker: never
}
export abstract class $DimensionEffectsAccessor$$Static implements $DimensionEffectsAccessor {
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$QuadTransform" {
import { $MutableQuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"

export interface $RenderContext$QuadTransform {
"transform"(mutableQuadView0: $MutableQuadView$$Type): boolean
}

export namespace $RenderContext$QuadTransform {
const probejs$$marker: never
}
export abstract class $RenderContext$QuadTransform$$Static implements $RenderContext$QuadTransform {
}
}

declare module "net.fabricmc.fabric.api.loot.v2.FabricLootTableBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LootPool$$Type } from "net.minecraft.world.level.storage.loot.LootPool"
import { $LootItemFunction$$Type } from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import { $Collection$$Type } from "java.util.Collection"
import { $LootPool$Builder$$Type } from "net.minecraft.world.level.storage.loot.LootPool$Builder"
import { $LootTable$Builder } from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import { $LootTable$$Type } from "net.minecraft.world.level.storage.loot.LootTable"

export interface $FabricLootTableBuilder {
"apply"(functions: $Collection$$Type<$LootItemFunction$$Type>): $LootTable$Builder
"apply"(function_: $LootItemFunction$$Type): $LootTable$Builder
"modifyPools"(modifier: $Consumer$$Type<$LootPool$Builder$$Type>): $LootTable$Builder
"pool"(pool: $LootPool$$Type): $LootTable$Builder
"pools"(pools: $Collection$$Type<$LootPool$$Type>): $LootTable$Builder
}

export namespace $FabricLootTableBuilder {
function copyOf(table: $LootTable$$Type): $LootTable$Builder
}
export abstract class $FabricLootTableBuilder$$Static implements $FabricLootTableBuilder {
static "copyOf"(table: $LootTable$$Type): $LootTable$Builder
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AfterKeyRelease" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AfterKeyRelease {
"afterKeyRelease"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer): void
}

export namespace $ScreenKeyboardEvents$AfterKeyRelease {
const probejs$$marker: never
}
export abstract class $ScreenKeyboardEvents$AfterKeyRelease$$Static implements $ScreenKeyboardEvents$AfterKeyRelease {
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.material.MaterialView" {
import { $BlendMode } from "net.fabricmc.fabric.api.renderer.v1.material.BlendMode"
import { $TriState } from "net.fabricmc.fabric.api.util.TriState"

export interface $MaterialView {
"ambientOcclusion"(): $TriState
"blendMode"(): $BlendMode
"disableColorIndex"(): boolean
"disableDiffuse"(): boolean
"emissive"(): boolean
"glint"(): $TriState
}

export namespace $MaterialView {
const probejs$$marker: never
}
export abstract class $MaterialView$$Static implements $MaterialView {
}
}

declare module "net.fabricmc.fabric.impl.datagen.DataGeneratorExtension" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PackOutput$$Type } from "net.minecraft.data.PackOutput"
import { $DataGenerator$PackGenerator } from "net.minecraft.data.DataGenerator$PackGenerator"
import { $IModInfo$$Type } from "net.minecraftforge.forgespi.language.IModInfo"
import { $Path } from "java.nio.file.Path"
import { $Pair } from "com.mojang.datafixers.util.Pair"

export interface $DataGeneratorExtension {
"createBuiltinResourcePack"(boolean0: boolean, resourceLocation1: $ResourceLocation$$Type, iModInfo2: $IModInfo$$Type, boolean3: boolean): $Pair<$DataGenerator$PackGenerator, $Path>
"createPack"(string0: string, packOutput1: $PackOutput$$Type): $DataGenerator$PackGenerator
}

export namespace $DataGeneratorExtension {
const probejs$$marker: never
}
export abstract class $DataGeneratorExtension$$Static implements $DataGeneratorExtension {
}
}

declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ModelBakery$$Type } from "net.minecraft.client.resources.model.ModelBakery"
import { $Function$$Type } from "java.util.function.Function"
import { $ModelBaker$$Type } from "net.minecraft.client.resources.model.ModelBaker"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List$$Type } from "java.util.List"
import { $ModelLoadingPlugin$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin"
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $Material$$Type } from "net.minecraft.client.resources.model.Material"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import { $ModelState$$Type } from "net.minecraft.client.resources.model.ModelState"

export class $ModelLoadingEventDispatcher {
constructor(loader: $ModelBakery$$Type, plugins: $List$$Type<$ModelLoadingPlugin$$Type>)

public "addExtraModels"(extraModelConsumer: $Consumer$$Type<$ResourceLocation$$Type>): void
public "loadModel"(id: $ResourceLocation$$Type): boolean
public "modifyModelAfterBake"(model: $BakedModel$$Type, id: $ResourceLocation$$Type, sourceModel: $UnbakedModel$$Type, textureGetter: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, settings: $ModelState$$Type, baker: $ModelBaker$$Type): $BakedModel
public "modifyModelBeforeBake"(model: $UnbakedModel$$Type, id: $ResourceLocation$$Type, textureGetter: $Function$$Type<$Material$$Type, $TextureAtlasSprite>, settings: $ModelState$$Type, baker: $ModelBaker$$Type): $UnbakedModel
public "modifyModelOnLoad"(id: $ResourceLocation$$Type, model: $UnbakedModel$$Type): $UnbakedModel
}
}

declare module "net.fabricmc.fabric.impl.blockrenderlayer.ExtendedChunkRenderTypeSet" {
import { $RenderType } from "net.minecraft.client.renderer.RenderType"

export interface $ExtendedChunkRenderTypeSet {
"sinytra$firstLayer"(): $RenderType
}

export namespace $ExtendedChunkRenderTypeSet {
const probejs$$marker: never
}
export abstract class $ExtendedChunkRenderTypeSet$$Static implements $ExtendedChunkRenderTypeSet {
}
}

declare module "net.fabricmc.fabric.impl.lookup.block.ServerWorldCache" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockApiCacheImpl$$Type } from "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl"

export interface $ServerWorldCache {
"fabric_invalidateCache"(blockPos0: $BlockPos$$Type): void
"fabric_registerCache"(blockPos0: $BlockPos$$Type, blockApiCacheImpl1: $BlockApiCacheImpl$$Type<any, any>): void
}

export namespace $ServerWorldCache {
const probejs$$marker: never
}
export abstract class $ServerWorldCache$$Static implements $ServerWorldCache {
}
}

declare module "net.fabricmc.fabric.impl.networking.client.ClientPlayNetworkAddon" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AbstractChanneledNetworkAddon } from "net.fabricmc.fabric.impl.networking.AbstractChanneledNetworkAddon"
import { $ClientboundCustomPayloadPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundCustomPayloadPacket"
import { $ClientPlayNetworking$PlayChannelHandler } from "net.fabricmc.fabric.api.client.networking.v1.ClientPlayNetworking$PlayChannelHandler"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $ClientPacketListener$$Type } from "net.minecraft.client.multiplayer.ClientPacketListener"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $PacketSendListener$$Type } from "net.minecraft.network.PacketSendListener"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"
import { $FabricPacket, $FabricPacket$$Type } from "net.fabricmc.fabric.api.networking.v1.FabricPacket"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Future$$Type } from "io.netty.util.concurrent.Future"

export class $ClientPlayNetworkAddon extends $AbstractChanneledNetworkAddon<$ClientPlayNetworking$PlayChannelHandler> {
constructor(handler: $ClientPacketListener$$Type, client: $Minecraft$$Type)

public "createPacket"(channelName: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type): $Packet<any>
public "handle"(packet: $ClientboundCustomPayloadPacket$$Type): boolean
public "onServerReady"(): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $PacketSendListener$$Type): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $PacketSendListener$$Type): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"<T extends $FabricPacket>(packet: T): void
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin" {
import { $ModelLoadingPlugin$Context$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelLoadingPlugin$Context"

export interface $ModelLoadingPlugin {
"onInitializeModelLoader"(context0: $ModelLoadingPlugin$Context$$Type): void
}

export namespace $ModelLoadingPlugin {
function register(plugin: $ModelLoadingPlugin$$Type): void
}
export abstract class $ModelLoadingPlugin$$Static implements $ModelLoadingPlugin {
static "register"(plugin: $ModelLoadingPlugin$$Type): void
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.material.BlendMode" {
import { $Enum } from "java.lang.Enum"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"

export class $BlendMode extends $Enum<$BlendMode> {
static readonly "CUTOUT": $BlendMode
static readonly "CUTOUT_MIPPED": $BlendMode
static readonly "DEFAULT": $BlendMode
static readonly "SOLID": $BlendMode
static readonly "TRANSLUCENT": $BlendMode
readonly "blockRenderLayer": $RenderType

public static "fromRenderLayer"(renderLayer: $RenderType$$Type): $BlendMode
public static "valueOf"(name: string): $BlendMode
public static "values"(): $BlendMode[]
}
}

declare module "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $Holder } from "net.minecraft.core.Holder"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $BlockAndTintGetter } from "net.minecraft.world.level.BlockAndTintGetter"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

/** @deprecated */
export interface $RenderAttachedBlockView extends $BlockAndTintGetter {
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"getBiomeFabric"(pos: $BlockPos$$Type): $Holder<$Biome>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
/** @deprecated */
"getBlockEntityRenderAttachment"(pos: $BlockPos$$Type): any
"getBlockEntityRenderData"(pos: $BlockPos$$Type): any
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"hasBiomes"(): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}

export namespace $RenderAttachedBlockView {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $RenderAttachedBlockView$$Static implements $RenderAttachedBlockView {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl" {
import { $BlockApiLookupImpl$$Type } from "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockApiCache } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiCache"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BlockApiLookup$$Type } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"

export class $BlockApiCacheImpl<A = any, C = any> implements $BlockApiCache<A, C> {
constructor(lookup: $BlockApiLookupImpl$$Type<A, C>, world: $ServerLevel$$Type, pos: $BlockPos$$Type)

public static "create"<A, C>(lookup: $BlockApiLookup$$Type<A, C>, world: $ServerLevel$$Type, pos: $BlockPos$$Type): $BlockApiCache<A, C>
public "find"(state: $BlockState$$Type, context: C): A
public "find"(context: C): A
public "getBlockEntity"(): $BlockEntity
public "getPos"(): $BlockPos
public "getWorld"(): $ServerLevel
public "invalidate"(): void
get "blockEntity"(): $BlockEntity
get "pos"(): $BlockPos
get "world"(): $ServerLevel
}
}

declare module "net.fabricmc.fabric.api.event.Event" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export class $Event<T = any> {
static readonly "DEFAULT_PHASE": $ResourceLocation

constructor()

public "addPhaseOrdering"(firstPhase: $ResourceLocation$$Type, secondPhase: $ResourceLocation$$Type): void
public "invoker"(): T
public "register"(phase: $ResourceLocation$$Type, listener: T): void
public "register"(t0: T): void
}
}

declare module "net.fabricmc.fabric.impl.registry.sync.RemappableRegistry" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $RemappableRegistry$RemapMode$$Type } from "net.fabricmc.fabric.impl.registry.sync.RemappableRegistry$RemapMode"
import { $Object2IntMap$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntMap"

export interface $RemappableRegistry {
"remap"(string0: string, object2IntMap1: $Object2IntMap$$Type<$ResourceLocation$$Type>, remapMode2: $RemappableRegistry$RemapMode$$Type): void
"unmap"(string0: string): void
}

export namespace $RemappableRegistry {
const probejs$$marker: never
}
export abstract class $RemappableRegistry$$Static implements $RemappableRegistry {
}
}

declare module "net.fabricmc.fabric.impl.gamerule.RuleKeyExtensions" {
import { $CustomGameRuleCategory, $CustomGameRuleCategory$$Type } from "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory"

export interface $RuleKeyExtensions {
"fabric_getCustomCategory"(): $CustomGameRuleCategory
"fabric_setCustomCategory"(customGameRuleCategory0: $CustomGameRuleCategory$$Type): void
}

export namespace $RuleKeyExtensions {
const probejs$$marker: never
}
export abstract class $RuleKeyExtensions$$Static implements $RuleKeyExtensions {
}
}

declare module "net.fabricmc.fabric.impl.networking.AbstractChanneledNetworkAddon" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PacketSender } from "net.fabricmc.fabric.api.networking.v1.PacketSender"
import { $FabricPacket, $FabricPacket$$Type } from "net.fabricmc.fabric.api.networking.v1.FabricPacket"
import { $AbstractNetworkAddon } from "net.fabricmc.fabric.impl.networking.AbstractNetworkAddon"
import { $Set } from "java.util.Set"
import { $GenericFutureListener$$Type } from "io.netty.util.concurrent.GenericFutureListener"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Future$$Type } from "io.netty.util.concurrent.Future"
import { $PacketSendListener$$Type } from "net.minecraft.network.PacketSendListener"

export class $AbstractChanneledNetworkAddon<H = any> extends $AbstractNetworkAddon<H> implements $PacketSender {
public "createPacket"(resourceLocation0: $ResourceLocation$$Type, friendlyByteBuf1: $FriendlyByteBuf$$Type): $Packet<any>
public "getSendableChannels"(): $Set<$ResourceLocation>
public "lateInit"(): void
public "sendPacket"(packet: $Packet$$Type<any>): void
public "sendPacket"(packet: $Packet$$Type<any>, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"(packet: $Packet$$Type<any>, callback: $PacketSendListener$$Type): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $PacketSendListener$$Type): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $PacketSendListener$$Type): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type): void
public "sendPacket"(channel: $ResourceLocation$$Type, buf: $FriendlyByteBuf$$Type, callback: $GenericFutureListener$$Type<$Future$$Type<void>>): void
public "sendPacket"<T extends $FabricPacket>(packet: T): void
get "sendableChannels"(): $Set<$ResourceLocation>
}
}

declare module "net.fabricmc.fabric.impl.registry.sync.RemappableRegistry$RemapMode" {
import { $Enum } from "java.lang.Enum"

export class $RemappableRegistry$RemapMode extends $Enum<$RemappableRegistry$RemapMode> {
static readonly "AUTHORITATIVE": $RemappableRegistry$RemapMode
static readonly "EXACT": $RemappableRegistry$RemapMode
static readonly "REMOTE": $RemappableRegistry$RemapMode

public static "valueOf"(name: string): $RemappableRegistry$RemapMode
public static "values"(): $RemappableRegistry$RemapMode[]
}
}

declare module "net.fabricmc.fabric.mixin.renderer.client.BakedModelMixin" {
import { $FabricBakedModel } from "net.fabricmc.fabric.api.renderer.v1.model.FabricBakedModel"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RenderContext$$Type } from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $BakedModelMixin extends $FabricBakedModel {
"emitBlockQuads"(blockView: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, randomSupplier: $Supplier$$Type<$RandomSource>, context: $RenderContext$$Type): void
"emitItemQuads"(stack: $ItemStack$$Type, randomSupplier: $Supplier$$Type<$RandomSource>, context: $RenderContext$$Type): void
"isVanillaAdapter"(): boolean
get "vanillaAdapter"(): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
export abstract class $BakedModelMixin$$Static implements $BakedModelMixin {
}
}

declare module "net.fabricmc.fabric.mixin.event.interaction.client.KeyBindingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KeyBindingAccessor {
"fabric_getTimesPressed"(): integer
}

export namespace $KeyBindingAccessor {
const probejs$$marker: never
}
export abstract class $KeyBindingAccessor$$Static implements $KeyBindingAccessor {
}
}

declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesAccessor {
}

export namespace $GameRulesAccessor {
const probejs$$marker: never
}
export abstract class $GameRulesAccessor$$Static implements $GameRulesAccessor {
}
}

declare module "net.fabricmc.fabric.impl.networking.DisconnectPacketSource" {
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Packet } from "net.minecraft.network.protocol.Packet"

export interface $DisconnectPacketSource {
"createDisconnectPacket"(component0: $Component$$Type): $Packet<any>
}

export namespace $DisconnectPacketSource {
const probejs$$marker: never
}
export abstract class $DisconnectPacketSource$$Static implements $DisconnectPacketSource {
}
}

declare module "net.fabricmc.fabric.api.networking.v1.ServerPlayNetworking$PlayChannelHandler" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerGamePacketListenerImpl$$Type } from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import { $PacketSender$$Type } from "net.fabricmc.fabric.api.networking.v1.PacketSender"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"

export interface $ServerPlayNetworking$PlayChannelHandler {
"receive"(minecraftServer0: $MinecraftServer$$Type, serverPlayer1: $ServerPlayer$$Type, serverGamePacketListenerImpl2: $ServerGamePacketListenerImpl$$Type, friendlyByteBuf3: $FriendlyByteBuf$$Type, packetSender4: $PacketSender$$Type): void
}

export namespace $ServerPlayNetworking$PlayChannelHandler {
const probejs$$marker: never
}
export abstract class $ServerPlayNetworking$PlayChannelHandler$$Static implements $ServerPlayNetworking$PlayChannelHandler {
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.model.SpriteFinder" {
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"
import { $QuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $SpriteFinder {
/** @deprecated */
"find"(quad: $QuadView$$Type, textureIndex: integer): $TextureAtlasSprite
"find"(float0: float, float1: float): $TextureAtlasSprite
"find"(quadView0: $QuadView$$Type): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(atlas: $TextureAtlas$$Type): $SpriteFinder
}
export abstract class $SpriteFinder$$Static implements $SpriteFinder {
static "get"(atlas: $TextureAtlas$$Type): $SpriteFinder
}
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.ServerPlayNetworkHandlerAccessor" {
import { $Connection } from "net.minecraft.network.Connection"

export interface $ServerPlayNetworkHandlerAccessor {
"getConnection"(): $Connection
get "connection"(): $Connection
}

export namespace $ServerPlayNetworkHandlerAccessor {
const probejs$$marker: never
}
export abstract class $ServerPlayNetworkHandlerAccessor$$Static implements $ServerPlayNetworkHandlerAccessor {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$AfterBake$Context" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ModelBakery } from "net.minecraft.client.resources.model.ModelBakery"
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"
import { $Material } from "net.minecraft.client.resources.model.Material"
import { $Function } from "java.util.function.Function"
import { $ModelBaker } from "net.minecraft.client.resources.model.ModelBaker"
import { $ModelState } from "net.minecraft.client.resources.model.ModelState"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $ModelModifier$AfterBake$Context {
"baker"(): $ModelBaker
"id"(): $ResourceLocation
"loader"(): $ModelBakery
"settings"(): $ModelState
"sourceModel"(): $UnbakedModel
"textureGetter"(): $Function<$Material, $TextureAtlasSprite>
}

export namespace $ModelModifier$AfterBake$Context {
const probejs$$marker: never
}
export abstract class $ModelModifier$AfterBake$Context$$Static implements $ModelModifier$AfterBake$Context {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseClick" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseClick {
"beforeMouseClick"(screen0: $Screen$$Type, double1: double, double2: double, int3: integer): void
}

export namespace $ScreenMouseEvents$BeforeMouseClick {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$BeforeMouseClick$$Static implements $ScreenMouseEvents$BeforeMouseClick {
}
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryEntryRemovedCallback" {
import { $Event } from "net.fabricmc.fabric.api.event.Event"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $RegistryEntryRemovedCallback<T = any> {
"onEntryRemoved"(int0: integer, resourceLocation1: $ResourceLocation$$Type, t2: T): void
}

export namespace $RegistryEntryRemovedCallback {
function event<T>(registry: $Registry$$Type<T>): $Event<$RegistryEntryRemovedCallback<T>>
}
export abstract class $RegistryEntryRemovedCallback$$Static<T = any> implements $RegistryEntryRemovedCallback<T> {
static "event"<T>(registry: $Registry$$Type<T>): $Event<$RegistryEntryRemovedCallback<T>>
}
}

declare module "net.fabricmc.fabric.impl.registry.sync.ListenableRegistry" {
import { $Event } from "net.fabricmc.fabric.api.event.Event"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $RegistryEntryRemovedCallback } from "net.fabricmc.fabric.api.event.registry.RegistryEntryRemovedCallback"
import { $RegistryEntryAddedCallback } from "net.fabricmc.fabric.api.event.registry.RegistryEntryAddedCallback"
import { $RegistryIdRemapCallback } from "net.fabricmc.fabric.api.event.registry.RegistryIdRemapCallback"

export interface $ListenableRegistry<T = any> {
"fabric_getAddObjectEvent"(): $Event<$RegistryEntryAddedCallback<T>>
"fabric_getRemapEvent"(): $Event<$RegistryIdRemapCallback<T>>
"fabric_getRemoveObjectEvent"(): $Event<$RegistryEntryRemovedCallback<T>>
}

export namespace $ListenableRegistry {
function get<T>(registry: $Registry$$Type<T>): $ListenableRegistry<T>
}
export abstract class $ListenableRegistry$$Static<T = any> implements $ListenableRegistry<T> {
static "get"<T>(registry: $Registry$$Type<T>): $ListenableRegistry<T>
}
}

declare module "net.fabricmc.fabric.impl.transfer.item.ItemVariantCache" {
import { $ItemVariant } from "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant"

export interface $ItemVariantCache {
"fabric_getCachedItemVariant"(): $ItemVariant
}

export namespace $ItemVariantCache {
const probejs$$marker: never
}
export abstract class $ItemVariantCache$$Static implements $ItemVariantCache {
}
}

declare module "net.fabricmc.fabric.api.screenhandler.v1.FabricScreenHandlerFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricScreenHandlerFactory {
"shouldCloseCurrentScreen"(): boolean
}

export namespace $FabricScreenHandlerFactory {
const probejs$$marker: never
}
export abstract class $FabricScreenHandlerFactory$$Static implements $FabricScreenHandlerFactory {
}
}

declare module "net.fabricmc.fabric.impl.itemgroup.FabricItemGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricItemGroup {
"getPage"(): integer
"setPage"(int0: integer): void
get "page"(): integer
set "page"(value: integer)
}

export namespace $FabricItemGroup {
const probejs$$marker: never
}
export abstract class $FabricItemGroup$$Static implements $FabricItemGroup {
}
}

declare module "net.fabricmc.fabric.impl.networking.ChannelInfoHolder" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Collection } from "java.util.Collection"

export interface $ChannelInfoHolder {
"getPendingChannelsNames"(): $Collection<$ResourceLocation>
get "pendingChannelsNames"(): $Collection<$ResourceLocation>
}

export namespace $ChannelInfoHolder {
const probejs$$marker: never
}
export abstract class $ChannelInfoHolder$$Static implements $ChannelInfoHolder {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AfterMouseScroll" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AfterMouseScroll {
"afterMouseScroll"(screen0: $Screen$$Type, double1: double, double2: double, double3: double, double4: double): void
}

export namespace $ScreenMouseEvents$AfterMouseScroll {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$AfterMouseScroll$$Static implements $ScreenMouseEvents$AfterMouseScroll {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$Remove" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$Remove {
"onRemove"(screen0: $Screen$$Type): void
}

export namespace $ScreenEvents$Remove {
const probejs$$marker: never
}
export abstract class $ScreenEvents$Remove$$Static implements $ScreenEvents$Remove {
}
}

declare module "net.fabricmc.fabric.api.item.v1.FabricItemStack" {
import { $Enchantment, $Enchantment$$Type } from "net.minecraft.world.item.enchantment.Enchantment"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $ToolAction$$Type } from "net.minecraftforge.common.ToolAction"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $Map } from "java.util.Map"
import { $UseOnContext$$Type } from "net.minecraft.world.item.context.UseOnContext"
import { $RecipeType$$Type } from "net.minecraft.world.item.crafting.RecipeType"
import { $FoodProperties } from "net.minecraft.world.food.FoodProperties"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $IForgeItemStack } from "net.minecraftforge.common.extensions.IForgeItemStack"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $EnderMan$$Type } from "net.minecraft.world.entity.monster.EnderMan"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export interface $FabricItemStack extends $IForgeItemStack {
"areShareTagsEqual"(itemStack0: $ItemStack$$Type): boolean
"canApplyAtEnchantingTable"(enchantment0: $Enchantment$$Type): boolean
"canDisableShield"(itemStack0: $ItemStack$$Type, livingEntity1: $LivingEntity$$Type, livingEntity2: $LivingEntity$$Type): boolean
"canElytraFly"(livingEntity0: $LivingEntity$$Type): boolean
"canEquip"(equipmentSlot0: $EquipmentSlot$$Type, entity1: $Entity$$Type): boolean
"canGrindstoneRepair"(): boolean
"canPerformAction"(toolAction0: $ToolAction$$Type): boolean
"canWalkOnPowderedSnow"(livingEntity0: $LivingEntity$$Type): boolean
"deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
"doesSneakBypassUse"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
"elytraFlightTick"(livingEntity0: $LivingEntity$$Type, int1: integer): boolean
"equals"(itemStack0: $ItemStack$$Type, boolean1: boolean): boolean
"getAllEnchantments"(): $Map<$Enchantment, integer>
"getBurnTime"(recipeType0: $RecipeType$$Type<any>): integer
"getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
"getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
"getCraftingRemainingItem"(): $ItemStack
"getEnchantmentLevel"(enchantment0: $Enchantment$$Type): integer
"getEnchantmentValue"(): integer
"getEntityLifespan"(level0: $Level$$Type): integer
"getEquipmentSlot"(): $EquipmentSlot
"getFoodProperties"(livingEntity0: $LivingEntity$$Type): $FoodProperties
"getHighlightTip"(component0: $Component$$Type): $Component
"getRecipeRemainder"(): $ItemStack
"getShareTag"(): $CompoundTag
"getSweepHitBox"(player0: $Player$$Type, entity1: $Entity$$Type): $AABB
"getXpRepairRatio"(): float
"hasCraftingRemainingItem"(): boolean
"isBookEnchantable"(itemStack0: $ItemStack$$Type): boolean
"isEnderMask"(player0: $Player$$Type, enderMan1: $EnderMan$$Type): boolean
"isNotReplaceableByPickAction"(player0: $Player$$Type, int1: integer): boolean
"isPiglinCurrency"(): boolean
"isRepairable"(): boolean
"makesPiglinsNeutral"(livingEntity0: $LivingEntity$$Type): boolean
/** @deprecated */
"onArmorTick"(level0: $Level$$Type, player1: $Player$$Type): void
"onBlockStartBreak"(blockPos0: $BlockPos$$Type, player1: $Player$$Type): boolean
"onDestroyed"(itemEntity0: $ItemEntity$$Type, damageSource1: $DamageSource$$Type): void
"onDroppedByPlayer"(player0: $Player$$Type): boolean
"onEntityItemUpdate"(itemEntity0: $ItemEntity$$Type): boolean
"onEntitySwing"(livingEntity0: $LivingEntity$$Type): boolean
"onHorseArmorTick"(level0: $Level$$Type, mob1: $Mob$$Type): void
"onInventoryTick"(level0: $Level$$Type, player1: $Player$$Type, int2: integer, int3: integer): void
"onItemUseFirst"(useOnContext0: $UseOnContext$$Type): $InteractionResult
"onStopUsing"(livingEntity0: $LivingEntity$$Type, int1: integer): void
"readShareTag"(compoundTag0: $CompoundTag$$Type): void
"shouldCauseBlockBreakReset"(itemStack0: $ItemStack$$Type): boolean
get "allEnchantments"(): $Map<$Enchantment, integer>
get "craftingRemainingItem"(): $ItemStack
get "enchantmentValue"(): integer
get "equipmentSlot"(): $EquipmentSlot
get "recipeRemainder"(): $ItemStack
get "shareTag"(): $CompoundTag
get "xpRepairRatio"(): float
get "piglinCurrency"(): boolean
get "repairable"(): boolean
}

export namespace $FabricItemStack {
const probejs$$marker: never
}
export abstract class $FabricItemStack$$Static implements $FabricItemStack {
}
}

declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesIntRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesIntRuleAccessor {
"getValue"(): integer
"setValue"(int0: integer): void
get "value"(): integer
set "value"(value: integer)
}

export namespace $GameRulesIntRuleAccessor {
const probejs$$marker: never
}
export abstract class $GameRulesIntRuleAccessor$$Static implements $GameRulesIntRuleAccessor {
}
}

declare module "net.fabricmc.fabric.mixin.gamerule.GameRulesBooleanRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesBooleanRuleAccessor {
}

export namespace $GameRulesBooleanRuleAccessor {
const probejs$$marker: never
}
export abstract class $GameRulesBooleanRuleAccessor$$Static implements $GameRulesBooleanRuleAccessor {
}
}

declare module "net.fabricmc.fabric.api.networking.v1.PacketType" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FabricPacket, $FabricPacket$$Type } from "net.fabricmc.fabric.api.networking.v1.FabricPacket"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $Function$$Type } from "java.util.function.Function"

export class $PacketType<T extends $FabricPacket = $FabricPacket> {
public static "create"<P extends $FabricPacket>(id: $ResourceLocation$$Type, constructor_: $Function$$Type<$FriendlyByteBuf$$Type, P>): $PacketType<P>
public "getId"(): $ResourceLocation
public "read"(buf: $FriendlyByteBuf$$Type): T
get "id"(): $ResourceLocation
}
}

declare module "net.fabricmc.fabric.impl.content.registry.FireBlockHooks" {
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $FlammableBlockRegistry$Entry } from "net.fabricmc.fabric.api.registry.FlammableBlockRegistry$Entry"

export interface $FireBlockHooks {
"fabric_getVanillaEntry"(blockState0: $BlockState$$Type): $FlammableBlockRegistry$Entry
}

export namespace $FireBlockHooks {
const probejs$$marker: never
}
export abstract class $FireBlockHooks$$Static implements $FireBlockHooks {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$BeforeBake$Context" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $ModelBakery } from "net.minecraft.client.resources.model.ModelBakery"
import { $Material } from "net.minecraft.client.resources.model.Material"
import { $Function } from "java.util.function.Function"
import { $ModelBaker } from "net.minecraft.client.resources.model.ModelBaker"
import { $ModelState } from "net.minecraft.client.resources.model.ModelState"
import { $TextureAtlasSprite } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $ModelModifier$BeforeBake$Context {
"baker"(): $ModelBaker
"id"(): $ResourceLocation
"loader"(): $ModelBakery
"settings"(): $ModelState
"textureGetter"(): $Function<$Material, $TextureAtlasSprite>
}

export namespace $ModelModifier$BeforeBake$Context {
const probejs$$marker: never
}
export abstract class $ModelModifier$BeforeBake$Context$$Static implements $ModelModifier$BeforeBake$Context {
}
}

declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient" {
import { $List } from "java.util.List"
import { $CustomIngredientSerializer } from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredientSerializer"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Ingredient } from "net.minecraft.world.item.crafting.Ingredient"

export interface $CustomIngredient {
"getMatchingStacks"(): $List<$ItemStack>
"getSerializer"(): $CustomIngredientSerializer<any>
"requiresTesting"(): boolean
"test"(itemStack0: $ItemStack$$Type): boolean
"toVanilla"(): $Ingredient
get "matchingStacks"(): $List<$ItemStack>
get "serializer"(): $CustomIngredientSerializer<any>
}

export namespace $CustomIngredient {
const probejs$$marker: never
}
export abstract class $CustomIngredient$$Static implements $CustomIngredient {
}
}

declare module "net.fabricmc.fabric.mixin.rendering.data.WorldViewMixin" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $Holder } from "net.minecraft.core.Holder"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $RenderAttachedBlockView } from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachedBlockView"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $FluidState } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $WorldViewMixin extends $RenderAttachedBlockView {
"canSeeSky"(blockPos0: $BlockPos$$Type): boolean
"clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
"clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
"getBiomeFabric"(pos: $BlockPos$$Type): $Holder<$Biome>
"getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
/** @deprecated */
"getBlockEntityRenderAttachment"(pos: $BlockPos$$Type): any
"getBlockEntityRenderData"(pos: $BlockPos$$Type): any
"getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
"getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
"getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
"getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
"getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
"getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
"getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
"getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
"getHeight"(): integer
"getLightEmission"(blockPos0: $BlockPos$$Type): integer
"getLightEngine"(): $LevelLightEngine
"getMaxBuildHeight"(): integer
"getMaxLightLevel"(): integer
"getMaxSection"(): integer
"getMinBuildHeight"(): integer
"getMinSection"(): integer
"getModelDataManager"(): $ModelDataManager
"getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
"getSectionIndex"(int0: integer): integer
"getSectionIndexFromSectionY"(int0: integer): integer
"getSectionYFromSectionIndex"(int0: integer): integer
"getSectionsCount"(): integer
"getShade"(direction0: $Direction$$Type, boolean1: boolean): float
"getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
"hasBiomes"(): boolean
"isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
"isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
"isOutsideBuildHeight"(int0: integer): boolean
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "sectionsCount"(): integer
}

export namespace $WorldViewMixin {
function create(int0: integer, int1: integer): $LevelHeightAccessor
function traverseBlocks<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
export abstract class $WorldViewMixin$$Static implements $WorldViewMixin {
static "create"(int0: integer, int1: integer): $LevelHeightAccessor
static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
}
}

declare module "net.fabricmc.fabric.api.client.command.v2.FabricClientCommandSource" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SharedSuggestionProvider } from "net.minecraft.commands.SharedSuggestionProvider"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ClientLevel } from "net.minecraft.client.multiplayer.ClientLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable$$Type } from "java.lang.Iterable"
import { $Registry, $Registry$$Type } from "net.minecraft.core.Registry"
import { $Minecraft } from "net.minecraft.client.Minecraft"
import { $Message } from "com.mojang.brigadier.Message"
import { $SuggestionsBuilder$$Type } from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import { $Suggestions } from "com.mojang.brigadier.suggestion.Suggestions"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $CommandContext$$Type } from "com.mojang.brigadier.context.CommandContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $SharedSuggestionProvider$ElementSuggestionType$$Type } from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $LocalPlayer } from "net.minecraft.client.player.LocalPlayer"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type } from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $Vec2 } from "net.minecraft.world.phys.Vec2"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Level } from "net.minecraft.world.level.Level"

export interface $FabricClientCommandSource extends $SharedSuggestionProvider {
"customSuggestion"(commandContext0: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
"enabledFeatures"(): $FeatureFlagSet
"getAbsoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
"getAllTeams"(): $Collection<string>
"getAvailableSounds"(): $Stream<$ResourceLocation>
"getClient"(): $Minecraft
"getCustomTabSugggestions"(): $Collection<string>
"getEntity"(): $Entity
"getMeta"(key: string): any
"getOnlinePlayerNames"(): $Collection<string>
"getPlayer"(): $LocalPlayer
"getPosition"(): $Vec3
"getRecipeNames"(): $Stream<$ResourceLocation>
"getRelevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
"getRotation"(): $Vec2
"getSelectedEntities"(): $Collection<string>
"getWorld"(): $ClientLevel
"hasPermission"(int0: integer): boolean
"levels"(): $Set<$ResourceKey<$Level>>
"registryAccess"(): $RegistryAccess
"sendError"(component0: $Component$$Type): void
"sendFeedback"(component0: $Component$$Type): void
"suggestRegistryElements"(resourceKey0: $ResourceKey$$Type<$Registry<any>>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type, commandContext3: $CommandContext$$Type<any>): $CompletableFuture<$Suggestions>
"suggestRegistryElements"(registry0: $Registry$$Type<any>, elementSuggestionType1: $SharedSuggestionProvider$ElementSuggestionType$$Type, suggestionsBuilder2: $SuggestionsBuilder$$Type): void
get "absoluteCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "allTeams"(): $Collection<string>
get "availableSounds"(): $Stream<$ResourceLocation>
get "client"(): $Minecraft
get "customTabSugggestions"(): $Collection<string>
get "entity"(): $Entity
get "onlinePlayerNames"(): $Collection<string>
get "player"(): $LocalPlayer
get "position"(): $Vec3
get "recipeNames"(): $Stream<$ResourceLocation>
get "relevantCoordinates"(): $Collection<$SharedSuggestionProvider$TextCoordinates>
get "rotation"(): $Vec2
get "selectedEntities"(): $Collection<string>
get "world"(): $ClientLevel
}

export namespace $FabricClientCommandSource {
function filterResources<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
function filterResources(iterable0: $Iterable$$Type, string1: string, function2: $Function$$Type, consumer3: $Consumer$$Type): void
function matchesSubStr(string0: string, string1: string): boolean
function suggest(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggest<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggest2DCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestCoordinates(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggestResource(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
function suggestResource(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
function suggestResource<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
function suggestResource<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
}
export abstract class $FabricClientCommandSource$$Static implements $FabricClientCommandSource {
static "filterResources"<T>(iterable0: $Iterable$$Type<T>, string1: string, string2: string, function3: $Function$$Type<T, $ResourceLocation>, consumer4: $Consumer$$Type<T>): void
static "filterResources"(iterable0: $Iterable$$Type, string1: string, function2: $Function$$Type, consumer3: $Consumer$$Type): void
static "matchesSubStr"(string0: string, string1: string): boolean
static "suggest"(iterable0: $Iterable$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(string0s: string[], suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"(stream0: $Stream$$Type<string>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggest"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, string>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggest2DCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestCoordinates"(string0: string, collection1: $Collection$$Type<$SharedSuggestionProvider$TextCoordinates$$Type>, suggestionsBuilder2: $SuggestionsBuilder$$Type, predicate3: $Predicate$$Type<string>): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggestResource"(iterable0: $Iterable$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type, string2: string): $CompletableFuture<$Suggestions>
static "suggestResource"(stream0: $Stream$$Type<$ResourceLocation$$Type>, suggestionsBuilder1: $SuggestionsBuilder$$Type): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(stream0: $Stream$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
static "suggestResource"<T>(iterable0: $Iterable$$Type<T>, suggestionsBuilder1: $SuggestionsBuilder$$Type, function2: $Function$$Type<T, $ResourceLocation>, function3: $Function$$Type<T, $Message>): $CompletableFuture<$Suggestions>
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter" {
import { $RenderMaterial } from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import { $MutableQuadView, $MutableQuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $BakedQuad } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $QuadEmitter extends $MutableQuadView {
"color"(int0: integer): integer
"colorIndex"(): integer
"copyNormal"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyPos"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
/** @deprecated */
"copyTo"(target: $MutableQuadView$$Type): void
"copyUv"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"cullFace"(): $Direction
"emit"(): $QuadEmitter
"faceNormal"(): $Vector3f
/** @deprecated */
"fromVanilla"(quadData: integer[], startIndex: integer, isItem: boolean): $QuadEmitter
"hasNormal"(int0: integer): boolean
"lightFace"(): $Direction
"lightmap"(b0: integer, b1: integer, b2: integer, b3: integer): $QuadEmitter
"lightmap"(int0: integer): integer
"material"(): $RenderMaterial
"nominalFace"(direction0: $Direction$$Type): $QuadEmitter
"nominalFace"(): $Direction
"normal"(int0: integer, float1: float, float2: float, float3: float): $QuadEmitter
"normal"(vertexIndex: integer, normal: $Vector3f$$Type): $QuadEmitter
"normalX"(int0: integer): float
"normalY"(int0: integer): float
"normalZ"(int0: integer): float
"posByIndex"(int0: integer, int1: integer): float
/** @deprecated */
"sprite"(vertexIndex: integer, spriteIndex: integer, u: float, v: float): $QuadEmitter
/** @deprecated */
"spriteColor"(vertexIndex: integer, spriteIndex: integer): integer
/** @deprecated */
"spriteU"(vertexIndex: integer, spriteIndex: integer): float
/** @deprecated */
"spriteUnitSquare"(spriteIndex: integer): $QuadEmitter
/** @deprecated */
"spriteV"(vertexIndex: integer, spriteIndex: integer): float
"square"(nominalFace: $Direction$$Type, left: float, bottom: float, right: float, top: float, depth: float): $QuadEmitter
"tag"(int0: integer): $QuadEmitter
"tag"(): integer
"toBakedQuad"(sprite: $TextureAtlasSprite$$Type): $BakedQuad
/** @deprecated */
"toBakedQuad"(spriteIndex: integer, sprite: $TextureAtlasSprite$$Type, isItem: boolean): $BakedQuad
/** @deprecated */
"toVanilla"(spriteIndex: integer, target: integer[], targetIndex: integer, isItem: boolean): void
"toVanilla"(int0s: integer[], int1: integer): void
"u"(int0: integer): float
"uv"(int0: integer, float1: float, float2: float): $QuadEmitter
"uvUnitSquare"(): $QuadEmitter
"v"(int0: integer): float
"x"(int0: integer): float
"y"(int0: integer): float
"z"(int0: integer): float
}

export namespace $QuadEmitter {
const CULL_FACE_EPSILON: float
}
export abstract class $QuadEmitter$$Static implements $QuadEmitter {
static readonly "CULL_FACE_EPSILON": float

}
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.Mesh" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $QuadEmitter$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadEmitter"
import { $QuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"

export interface $Mesh {
"forEach"(consumer0: $Consumer$$Type<$QuadView$$Type>): void
"outputTo"(emitter: $QuadEmitter$$Type): void
}

export namespace $Mesh {
const probejs$$marker: never
}
export abstract class $Mesh$$Static implements $Mesh {
}
}

declare module "net.fabricmc.fabric.api.block.v1.FabricBlock" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockAndTintGetter$$Type } from "net.minecraft.world.level.BlockAndTintGetter"

export interface $FabricBlock {
"getAppearance"(state: $BlockState$$Type, renderView: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, sourceState: $BlockState$$Type, sourcePos: $BlockPos$$Type): $BlockState
}

export namespace $FabricBlock {
const probejs$$marker: never
}
export abstract class $FabricBlock$$Static implements $FabricBlock {
}
}

declare module "net.fabricmc.fabric.mixin.content.registry.AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccessor {
}

export namespace $AxeItemAccessor {
const probejs$$marker: never
}
export abstract class $AxeItemAccessor$$Static implements $AxeItemAccessor {
}
}

declare module "net.fabricmc.fabric.api.recipe.v1.ingredient.FabricIngredient" {
import { $CustomIngredient } from "net.fabricmc.fabric.api.recipe.v1.ingredient.CustomIngredient"

export interface $FabricIngredient {
"getCustomIngredient"(): $CustomIngredient
"requiresTesting"(): boolean
get "customIngredient"(): $CustomIngredient
}

export namespace $FabricIngredient {
const probejs$$marker: never
}
export abstract class $FabricIngredient$$Static implements $FabricIngredient {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelResolver$Context" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ModelBakery } from "net.minecraft.client.resources.model.ModelBakery"
import { $UnbakedModel } from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelResolver$Context {
"getOrLoadModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
"id"(): $ResourceLocation
"loader"(): $ModelBakery
}

export namespace $ModelResolver$Context {
const probejs$$marker: never
}
export abstract class $ModelResolver$Context$$Static implements $ModelResolver$Context {
}
}

declare module "net.fabricmc.fabric.impl.biome.MultiNoiseSamplerHooks" {
import { $ImprovedNoise } from "net.minecraft.world.level.levelgen.synth.ImprovedNoise"

export interface $MultiNoiseSamplerHooks {
"fabric_getEndBiomesSampler"(): $ImprovedNoise
"fabric_getSeed"(): long
"fabric_setSeed"(long0: long): void
}

export namespace $MultiNoiseSamplerHooks {
const probejs$$marker: never
}
export abstract class $MultiNoiseSamplerHooks$$Static implements $MultiNoiseSamplerHooks {
}
}

declare module "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl" {
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Map } from "java.util.Map"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget, $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType, $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $Supplier$$Type } from "java.util.function.Supplier"

export interface $AttachmentTargetImpl extends $AttachmentTarget {
"fabric_getAttachments"(): $Map<$AttachmentType<any>, any>
"fabric_hasPersistentAttachments"(): boolean
"fabric_readAttachmentsFromNbt"(nbt: $CompoundTag$$Type): void
"fabric_writeAttachmentsToNbt"(nbt: $CompoundTag$$Type): void
"getAttached"<A>(type: $AttachmentType$$Type<A>): A
"getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
"getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
"getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
"getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
"getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
"getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
"hasAttached"(type: $AttachmentType$$Type<any>): boolean
"modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
"removeAttached"<A>(type: $AttachmentType$$Type<A>): A
"setAttached"<A>(type: $AttachmentType$$Type<A>, value: A): A
}

export namespace $AttachmentTargetImpl {
function transfer(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
}
export abstract class $AttachmentTargetImpl$$Static implements $AttachmentTargetImpl {
static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.Transaction$Lifecycle" {
import { $Enum } from "java.lang.Enum"

export class $Transaction$Lifecycle extends $Enum<$Transaction$Lifecycle> {
static readonly "CLOSING": $Transaction$Lifecycle
static readonly "NONE": $Transaction$Lifecycle
static readonly "OPEN": $Transaction$Lifecycle
static readonly "OUTER_CLOSING": $Transaction$Lifecycle

public static "valueOf"(name: string): $Transaction$Lifecycle
public static "values"(): $Transaction$Lifecycle[]
}
}

declare module "net.fabricmc.fabric.api.gamerule.v1.CustomGameRuleCategory" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GameRules$Value, $GameRules$Value$$Type } from "net.minecraft.world.level.GameRules$Value"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Optional } from "java.util.Optional"
import { $GameRules$Key$$Type } from "net.minecraft.world.level.GameRules$Key"

export class $CustomGameRuleCategory {
constructor(id: $ResourceLocation$$Type, name: $Component$$Type)

public static "getCategory"<T extends $GameRules$Value<T>>(key: $GameRules$Key$$Type<T>): $Optional<$CustomGameRuleCategory>
public "getId"(): $ResourceLocation
public "getName"(): $Component
get "id"(): $ResourceLocation
get "name"(): $Component
}
}

declare module "net.fabricmc.fabric.impl.client.screen.MouseExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseExtensions {
"getHorizontalScroll"(): double
get "horizontalScroll"(): double
}

export namespace $MouseExtensions {
const probejs$$marker: never
}
export abstract class $MouseExtensions$$Static implements $MouseExtensions {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterRender" {
import { $GuiGraphics$$Type } from "net.minecraft.client.gui.GuiGraphics"
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$AfterRender {
"afterRender"(screen0: $Screen$$Type, guiGraphics1: $GuiGraphics$$Type, int2: integer, int3: integer, float4: float): void
}

export namespace $ScreenEvents$AfterRender {
const probejs$$marker: never
}
export abstract class $ScreenEvents$AfterRender$$Static implements $ScreenEvents$AfterRender {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseClick" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseClick {
"allowMouseClick"(screen0: $Screen$$Type, double1: double, double2: double, int3: integer): boolean
}

export namespace $ScreenMouseEvents$AllowMouseClick {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$AllowMouseClick$$Static implements $ScreenMouseEvents$AllowMouseClick {
}
}

declare module "net.fabricmc.fabric.impl.client.model.loading.ModelLoaderHooks" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockModel } from "net.minecraft.client.renderer.block.model.BlockModel"
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelLoadingEventDispatcher } from "net.fabricmc.fabric.impl.client.model.loading.ModelLoadingEventDispatcher"

export interface $ModelLoaderHooks {
"fabric_getDispatcher"(): $ModelLoadingEventDispatcher
"fabric_getMissingModel"(): $UnbakedModel
"fabric_getOrLoadModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
"fabric_loadModelFromJson"(resourceLocation0: $ResourceLocation$$Type): $BlockModel
"fabric_putModel"(resourceLocation0: $ResourceLocation$$Type, unbakedModel1: $UnbakedModel$$Type): void
"fabric_putModelDirectly"(resourceLocation0: $ResourceLocation$$Type, unbakedModel1: $UnbakedModel$$Type): void
"fabric_queueModelDependencies"(unbakedModel0: $UnbakedModel$$Type): void
}

export namespace $ModelLoaderHooks {
const probejs$$marker: never
}
export abstract class $ModelLoaderHooks$$Static implements $ModelLoaderHooks {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenKeyboardEvents$AllowKeyPress" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenKeyboardEvents$AllowKeyPress {
"allowKeyPress"(screen0: $Screen$$Type, int1: integer, int2: integer, int3: integer): boolean
}

export namespace $ScreenKeyboardEvents$AllowKeyPress {
const probejs$$marker: never
}
export abstract class $ScreenKeyboardEvents$AllowKeyPress$$Static implements $ScreenKeyboardEvents$AllowKeyPress {
}
}

declare module "net.fabricmc.fabric.mixin.screenhandler.NamedScreenHandlerFactoryMixin" {
import { $FabricScreenHandlerFactory } from "net.fabricmc.fabric.api.screenhandler.v1.FabricScreenHandlerFactory"

export interface $NamedScreenHandlerFactoryMixin extends $FabricScreenHandlerFactory {
"shouldCloseCurrentScreen"(): boolean
}

export namespace $NamedScreenHandlerFactoryMixin {
const probejs$$marker: never
}
export abstract class $NamedScreenHandlerFactoryMixin$$Static implements $NamedScreenHandlerFactoryMixin {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$BeforeMouseScroll" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$BeforeMouseScroll {
"beforeMouseScroll"(screen0: $Screen$$Type, double1: double, double2: double, double3: double, double4: double): void
}

export namespace $ScreenMouseEvents$BeforeMouseScroll {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$BeforeMouseScroll$$Static implements $ScreenMouseEvents$BeforeMouseScroll {
}
}

declare module "net.fabricmc.fabric.api.attachment.v1.AttachmentType" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Supplier } from "java.util.function.Supplier"

export interface $AttachmentType<A = any> {
"copyOnDeath"(): boolean
"identifier"(): $ResourceLocation
"initializer"(): $Supplier<A>
"isPersistent"(): boolean
"persistenceCodec"(): $Codec<A>
get "persistent"(): boolean
}

export namespace $AttachmentType {
const probejs$$marker: never
}
export abstract class $AttachmentType$$Static<A = any> implements $AttachmentType<A> {
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.render.RenderContext$BakedModelConsumer" {
import { $BakedModel, $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"

/** @deprecated */
export interface $RenderContext$BakedModelConsumer extends $Consumer<$BakedModel> {
"accept"(bakedModel0: $BakedModel$$Type): void
"accept"(bakedModel0: $BakedModel$$Type, blockState1: $BlockState$$Type): void
"andThen"(consumer0: $Consumer$$Type<$BakedModel$$Type>): $Consumer<$BakedModel>
}

export namespace $RenderContext$BakedModelConsumer {
const probejs$$marker: never
}
export abstract class $RenderContext$BakedModelConsumer$$Static implements $RenderContext$BakedModelConsumer {
}
}

declare module "net.fabricmc.fabric.impl.lookup.block.BlockApiLookupImpl" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlockApiLookup$BlockEntityApiProvider$$Type } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockEntityApiProvider"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $BlockApiLookup } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup"
import { $List } from "java.util.List"
import { $BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$$Type } from "net.fabricmc.fabric.api.lookup.v1.block.BlockApiLookup$BlockApiProvider"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlockApiLookupImpl<A = any, C = any> implements $BlockApiLookup<A, C> {
public "apiClass"(): $Class<A>
public "contextClass"(): $Class<C>
public "find"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, blockEntity: $BlockEntity$$Type, context: C): A
public "find"(world: $Level$$Type, pos: $BlockPos$$Type, context: C): A
public static "get"<A, C>(lookupId: $ResourceLocation$$Type, apiClass: $Class$$Type<A>, contextClass: $Class$$Type<C>): $BlockApiLookup<A, C>
public "getFallbackProviders"(): $List<$BlockApiLookup$BlockApiProvider<A, C>>
public "getId"(): $ResourceLocation
public "getProvider"(block: $Block$$Type): $BlockApiLookup$BlockApiProvider<A, C>
public "registerFallback"(fallbackProvider: $BlockApiLookup$BlockApiProvider$$Type<A, C>): void
public "registerForBlockEntities"(provider: $BlockApiLookup$BlockEntityApiProvider$$Type<A, C>, ...blockEntityTypes: $BlockEntityType$$Type<any>[]): void
public "registerForBlockEntity"<T extends $BlockEntity>(provider: $BiFunction$$Type<T, C, A>, blockEntityType: $BlockEntityType$$Type<T>): void
public "registerForBlocks"(provider: $BlockApiLookup$BlockApiProvider$$Type<A, C>, ...blocks: $Block$$Type[]): void
public "registerSelf"(...blockEntityTypes: $BlockEntityType$$Type<any>[]): void
get "fallbackProviders"(): $List<$BlockApiLookup$BlockApiProvider<A, C>>
get "id"(): $ResourceLocation
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.item.ItemVariant" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $TransferVariant } from "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant"

export interface $ItemVariant extends $TransferVariant<$Item> {
"copyNbt"(): $CompoundTag
"copyOrCreateNbt"(): $CompoundTag
"getItem"(): $Item
"getNbt"(): $CompoundTag
"getObject"(): $Item
"hasNbt"(): boolean
"isBlank"(): boolean
"isOf"(object: $Item$$Type): boolean
"matches"(stack: $ItemStack$$Type): boolean
"nbtMatches"(other: $CompoundTag$$Type): boolean
"toNbt"(): $CompoundTag
"toPacket"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
"toStack"(count: integer): $ItemStack
"toStack"(): $ItemStack
get "item"(): $Item
get "nbt"(): $CompoundTag
get "object"(): $Item
}

export namespace $ItemVariant {
function blank(): $ItemVariant
function fromNbt(nbt: $CompoundTag$$Type): $ItemVariant
function fromPacket(buf: $FriendlyByteBuf$$Type): $ItemVariant
function of(item: $ItemLike$$Type): $ItemVariant
function of(stack: $ItemStack$$Type): $ItemVariant
function of(item: $ItemLike$$Type, tag: $CompoundTag$$Type): $ItemVariant
}
export abstract class $ItemVariant$$Static implements $ItemVariant {
static "blank"(): $ItemVariant
static "fromNbt"(nbt: $CompoundTag$$Type): $ItemVariant
static "fromPacket"(buf: $FriendlyByteBuf$$Type): $ItemVariant
static "of"(item: $ItemLike$$Type): $ItemVariant
static "of"(stack: $ItemStack$$Type): $ItemVariant
static "of"(item: $ItemLike$$Type, tag: $CompoundTag$$Type): $ItemVariant
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.fluid.FluidVariant" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $FriendlyByteBuf$$Type } from "net.minecraft.network.FriendlyByteBuf"
import { $TransferVariant } from "net.fabricmc.fabric.api.transfer.v1.storage.TransferVariant"

export interface $FluidVariant extends $TransferVariant<$Fluid> {
"copyNbt"(): $CompoundTag
"copyOrCreateNbt"(): $CompoundTag
"getFluid"(): $Fluid
"getNbt"(): $CompoundTag
"getObject"(): $Fluid
"hasNbt"(): boolean
"isBlank"(): boolean
"isOf"(object: $Fluid$$Type): boolean
"nbtMatches"(other: $CompoundTag$$Type): boolean
"toNbt"(): $CompoundTag
"toPacket"(friendlyByteBuf0: $FriendlyByteBuf$$Type): void
get "fluid"(): $Fluid
get "nbt"(): $CompoundTag
get "object"(): $Fluid
}

export namespace $FluidVariant {
function blank(): $FluidVariant
function fromNbt(nbt: $CompoundTag$$Type): $FluidVariant
function fromPacket(buf: $FriendlyByteBuf$$Type): $FluidVariant
function of(fluid: $Fluid$$Type, nbt: $CompoundTag$$Type): $FluidVariant
function of(fluid: $Fluid$$Type): $FluidVariant
}
export abstract class $FluidVariant$$Static implements $FluidVariant {
static "blank"(): $FluidVariant
static "fromNbt"(nbt: $CompoundTag$$Type): $FluidVariant
static "fromPacket"(buf: $FriendlyByteBuf$$Type): $FluidVariant
static "of"(fluid: $Fluid$$Type, nbt: $CompoundTag$$Type): $FluidVariant
static "of"(fluid: $Fluid$$Type): $FluidVariant
}
}

declare module "net.fabricmc.fabric.api.renderer.v1.mesh.MutableQuadView" {
import { $RenderMaterial, $RenderMaterial$$Type } from "net.fabricmc.fabric.api.renderer.v1.material.RenderMaterial"
import { $Vec2$$Type } from "net.minecraft.world.phys.Vec2"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Vector2f, $Vector2f$$Type } from "org.joml.Vector2f"
import { $QuadView, $QuadView$$Type } from "net.fabricmc.fabric.api.renderer.v1.mesh.QuadView"
import { $BakedQuad, $BakedQuad$$Type } from "net.minecraft.client.renderer.block.model.BakedQuad"
import { $TextureAtlasSprite$$Type } from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $MutableQuadView extends $QuadView {
"color"(c0: integer, c1: integer, c2: integer, c3: integer): $MutableQuadView
"color"(int0: integer, int1: integer): $MutableQuadView
"color"(int0: integer): integer
"colorIndex"(int0: integer): $MutableQuadView
"colorIndex"(): integer
"copyFrom"(quadView0: $QuadView$$Type): $MutableQuadView
"copyNormal"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
"copyPos"(int0: integer, vector3f1: $Vector3f$$Type): $Vector3f
/** @deprecated */
"copyTo"(target: $MutableQuadView$$Type): void
"copyUv"(int0: integer, vector2f1: $Vector2f$$Type): $Vector2f
"cullFace"(direction0: $Direction$$Type): $MutableQuadView
"cullFace"(): $Direction
"faceNormal"(): $Vector3f
"fromVanilla"(bakedQuad0: $BakedQuad$$Type, renderMaterial1: $RenderMaterial$$Type, direction2: $Direction$$Type): $MutableQuadView
"fromVanilla"(int0s: integer[], int1: integer): $MutableQuadView
/** @deprecated */
"fromVanilla"(quadData: integer[], startIndex: integer, isItem: boolean): $MutableQuadView
"hasNormal"(int0: integer): boolean
"lightFace"(): $Direction
"lightmap"(b0: integer, b1: integer, b2: integer, b3: integer): $MutableQuadView
"lightmap"(int0: integer, int1: integer): $MutableQuadView
"lightmap"(int0: integer): integer
"material"(renderMaterial0: $RenderMaterial$$Type): $MutableQuadView
"material"(): $RenderMaterial
"nominalFace"(direction0: $Direction$$Type): $MutableQuadView
"nominalFace"(): $Direction
"normal"(int0: integer, float1: float, float2: float, float3: float): $MutableQuadView
"normal"(vertexIndex: integer, normal: $Vector3f$$Type): $MutableQuadView
"normalX"(int0: integer): float
"normalY"(int0: integer): float
"normalZ"(int0: integer): float
"pos"(int0: integer, float1: float, float2: float, float3: float): $MutableQuadView
"pos"(vertexIndex: integer, pos: $Vector3f$$Type): $MutableQuadView
"posByIndex"(int0: integer, int1: integer): float
/** @deprecated */
"sprite"(vertexIndex: integer, spriteIndex: integer, u: float, v: float): $MutableQuadView
/** @deprecated */
"sprite"(vertexIndex: integer, spriteIndex: integer, uv: $Vec2$$Type): $MutableQuadView
"spriteBake"(textureAtlasSprite0: $TextureAtlasSprite$$Type, int1: integer): $MutableQuadView
/** @deprecated */
"spriteBake"(spriteIndex: integer, sprite: $TextureAtlasSprite$$Type, bakeFlags: integer): $MutableQuadView
/** @deprecated */
"spriteColor"(spriteIndex: integer, c0: integer, c1: integer, c2: integer, c3: integer): $MutableQuadView
/** @deprecated */
"spriteColor"(vertexIndex: integer, spriteIndex: integer, color: integer): $MutableQuadView
/** @deprecated */
"spriteColor"(vertexIndex: integer, spriteIndex: integer): integer
/** @deprecated */
"spriteU"(vertexIndex: integer, spriteIndex: integer): float
/** @deprecated */
"spriteV"(vertexIndex: integer, spriteIndex: integer): float
"tag"(int0: integer): $MutableQuadView
"tag"(): integer
"toBakedQuad"(sprite: $TextureAtlasSprite$$Type): $BakedQuad
/** @deprecated */
"toBakedQuad"(spriteIndex: integer, sprite: $TextureAtlasSprite$$Type, isItem: boolean): $BakedQuad
/** @deprecated */
"toVanilla"(spriteIndex: integer, target: integer[], targetIndex: integer, isItem: boolean): void
"toVanilla"(int0s: integer[], int1: integer): void
"u"(int0: integer): float
"uv"(vertexIndex: integer, uv: $Vector2f$$Type): $MutableQuadView
"uv"(int0: integer, float1: float, float2: float): $MutableQuadView
"v"(int0: integer): float
"x"(int0: integer): float
"y"(int0: integer): float
"z"(int0: integer): float
}

export namespace $MutableQuadView {
const BAKE_FLIP_U: integer
const BAKE_FLIP_V: integer
const BAKE_LOCK_UV: integer
const BAKE_NORMALIZED: integer
const BAKE_ROTATE_180: integer
const BAKE_ROTATE_270: integer
const BAKE_ROTATE_90: integer
const BAKE_ROTATE_NONE: integer
}
export abstract class $MutableQuadView$$Static implements $MutableQuadView {
static readonly "BAKE_FLIP_U": integer
static readonly "BAKE_FLIP_V": integer
static readonly "BAKE_LOCK_UV": integer
static readonly "BAKE_NORMALIZED": integer
static readonly "BAKE_ROTATE_180": integer
static readonly "BAKE_ROTATE_270": integer
static readonly "BAKE_ROTATE_90": integer
static readonly "BAKE_ROTATE_NONE": integer

}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad" {
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $ModelModifier$OnLoad$Context$$Type } from "net.fabricmc.fabric.api.client.model.loading.v1.ModelModifier$OnLoad$Context"

export interface $ModelModifier$OnLoad {
"modifyModelOnLoad"(unbakedModel0: $UnbakedModel$$Type, context1: $ModelModifier$OnLoad$Context$$Type): $UnbakedModel
}

export namespace $ModelModifier$OnLoad {
const probejs$$marker: never
}
export abstract class $ModelModifier$OnLoad$$Static implements $ModelModifier$OnLoad {
}
}

declare module "net.fabricmc.fabric.api.client.model.loading.v1.BlockStateResolver$Context" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ModelBakery } from "net.minecraft.client.resources.model.ModelBakery"
import { $UnbakedModel, $UnbakedModel$$Type } from "net.minecraft.client.resources.model.UnbakedModel"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Block } from "net.minecraft.world.level.block.Block"

export interface $BlockStateResolver$Context {
"block"(): $Block
"getOrLoadModel"(resourceLocation0: $ResourceLocation$$Type): $UnbakedModel
"loader"(): $ModelBakery
"setModel"(blockState0: $BlockState$$Type, unbakedModel1: $UnbakedModel$$Type): void
}

export namespace $BlockStateResolver$Context {
const probejs$$marker: never
}
export abstract class $BlockStateResolver$Context$$Static implements $BlockStateResolver$Context {
}
}

declare module "net.fabricmc.fabric.api.event.registry.RegistryEntryAddedCallback" {
import { $Event } from "net.fabricmc.fabric.api.event.Event"
import { $Registry$$Type } from "net.minecraft.core.Registry"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $RegistryEntryAddedCallback<T = any> {
"onEntryAdded"(int0: integer, resourceLocation1: $ResourceLocation$$Type, t2: T): void
}

export namespace $RegistryEntryAddedCallback {
function event<T>(registry: $Registry$$Type<T>): $Event<$RegistryEntryAddedCallback<T>>
}
export abstract class $RegistryEntryAddedCallback$$Static<T = any> implements $RegistryEntryAddedCallback<T> {
static "event"<T>(registry: $Registry$$Type<T>): $Event<$RegistryEntryAddedCallback<T>>
}
}

declare module "net.fabricmc.fabric.mixin.content.registry.VillagerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerEntityAccessor {
}

export namespace $VillagerEntityAccessor {
const probejs$$marker: never
}
export abstract class $VillagerEntityAccessor$$Static implements $VillagerEntityAccessor {
}
}

declare module "net.fabricmc.fabric.mixin.biome.SpawnSettingsBuilderAccessor" {
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $Map } from "java.util.Map"
import { $MobSpawnSettings$MobSpawnCost } from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"

export interface $SpawnSettingsBuilderAccessor {
"getSpawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
get "spawnCosts"(): $Map<$EntityType<any>, $MobSpawnSettings$MobSpawnCost>
}

export namespace $SpawnSettingsBuilderAccessor {
const probejs$$marker: never
}
export abstract class $SpawnSettingsBuilderAccessor$$Static implements $SpawnSettingsBuilderAccessor {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenMouseEvents$AllowMouseScroll" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenMouseEvents$AllowMouseScroll {
"allowMouseScroll"(screen0: $Screen$$Type, double1: double, double2: double, double3: double, double4: double): boolean
}

export namespace $ScreenMouseEvents$AllowMouseScroll {
const probejs$$marker: never
}
export abstract class $ScreenMouseEvents$AllowMouseScroll$$Static implements $ScreenMouseEvents$AllowMouseScroll {
}
}

declare module "net.fabricmc.fabric.mixin.object.builder.AbstractBlockSettingsAccessor" {
import { $BlockBehaviour$StateArgumentPredicate } from "net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ToIntFunction } from "java.util.function.ToIntFunction"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $SoundType } from "net.minecraft.world.level.block.SoundType"
import { $BlockBehaviour$StatePredicate } from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $MapColor } from "net.minecraft.world.level.material.MapColor"
import { $PushReaction } from "net.minecraft.world.level.material.PushReaction"
import { $BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction$$Type } from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetFunction"
import { $NoteBlockInstrument } from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import { $Optional, $Optional$$Type } from "java.util.Optional"

export interface $AbstractBlockSettingsAccessor {
"getAllowsSpawningPredicate"(): $BlockBehaviour$StateArgumentPredicate<$EntityType<any>>
"getBlockBreakParticles"(): boolean
"getBlockVisionPredicate"(): $BlockBehaviour$StatePredicate
"getBurnable"(): boolean
"getCollidable"(): boolean
"getDynamicBounds"(): boolean
"getEmissiveLightingPredicate"(): $BlockBehaviour$StatePredicate
"getForceNotSolid"(): boolean
"getForceSolid"(): boolean
"getHardness"(): float
"getInstrument"(): $NoteBlockInstrument
"getIsAir"(): boolean
"getJumpVelocityMultiplier"(): float
"getLiquid"(): boolean
"getLootTableId"(): $ResourceLocation
"getLuminance"(): $ToIntFunction<$BlockState>
"getMapColorProvider"(): $Function<$BlockState, $MapColor>
"getOffsetter"(): $Optional<$BlockBehaviour$OffsetFunction>
"getOpaque"(): boolean
"getPistonBehavior"(): $PushReaction
"getPostProcessPredicate"(): $BlockBehaviour$StatePredicate
"getRandomTicks"(): boolean
"getReplaceable"(): boolean
"getRequiredFeatures"(): $FeatureFlagSet
"getResistance"(): float
"getSlipperiness"(): float
"getSolidBlockPredicate"(): $BlockBehaviour$StatePredicate
"getSoundGroup"(): $SoundType
"getSuffocationPredicate"(): $BlockBehaviour$StatePredicate
"getVelocityMultiplier"(): float
"isToolRequired"(): boolean
"setBlockBreakParticles"(boolean0: boolean): void
"setBurnable"(boolean0: boolean): void
"setCollidable"(boolean0: boolean): void
"setDynamicBounds"(boolean0: boolean): void
"setForceNotSolid"(boolean0: boolean): void
"setForceSolid"(boolean0: boolean): void
"setIsAir"(boolean0: boolean): void
"setLiquid"(boolean0: boolean): void
"setLootTableId"(resourceLocation0: $ResourceLocation$$Type): void
"setMapColorProvider"(function0: $Function$$Type<$BlockState$$Type, $MapColor>): void
"setOffsetter"(optional0: $Optional$$Type<$BlockBehaviour$OffsetFunction$$Type>): void
"setOpaque"(boolean0: boolean): void
"setRandomTicks"(boolean0: boolean): void
"setReplaceable"(boolean0: boolean): void
"setRequiredFeatures"(featureFlagSet0: $FeatureFlagSet$$Type): void
"setToolRequired"(boolean0: boolean): void
get "allowsSpawningPredicate"(): $BlockBehaviour$StateArgumentPredicate<$EntityType<any>>
get "blockBreakParticles"(): boolean
get "blockVisionPredicate"(): $BlockBehaviour$StatePredicate
get "burnable"(): boolean
get "collidable"(): boolean
get "dynamicBounds"(): boolean
get "emissiveLightingPredicate"(): $BlockBehaviour$StatePredicate
get "forceNotSolid"(): boolean
get "forceSolid"(): boolean
get "hardness"(): float
get "instrument"(): $NoteBlockInstrument
get "isAir"(): boolean
get "jumpVelocityMultiplier"(): float
get "liquid"(): boolean
get "lootTableId"(): $ResourceLocation
get "luminance"(): $ToIntFunction<$BlockState>
get "mapColorProvider"(): $Function<$BlockState, $MapColor>
get "offsetter"(): $Optional<$BlockBehaviour$OffsetFunction>
get "opaque"(): boolean
get "pistonBehavior"(): $PushReaction
get "postProcessPredicate"(): $BlockBehaviour$StatePredicate
get "randomTicks"(): boolean
get "replaceable"(): boolean
get "requiredFeatures"(): $FeatureFlagSet
get "resistance"(): float
get "slipperiness"(): float
get "solidBlockPredicate"(): $BlockBehaviour$StatePredicate
get "soundGroup"(): $SoundType
get "suffocationPredicate"(): $BlockBehaviour$StatePredicate
get "velocityMultiplier"(): float
get "toolRequired"(): boolean
set "blockBreakParticles"(value: boolean)
set "burnable"(value: boolean)
set "collidable"(value: boolean)
set "dynamicBounds"(value: boolean)
set "forceNotSolid"(value: boolean)
set "forceSolid"(value: boolean)
set "isAir"(value: boolean)
set "liquid"(value: boolean)
set "lootTableId"(value: $ResourceLocation$$Type)
set "mapColorProvider"(value: $Function$$Type<$BlockState$$Type, $MapColor>)
set "offsetter"(value: $Optional$$Type<$BlockBehaviour$OffsetFunction$$Type>)
set "opaque"(value: boolean)
set "randomTicks"(value: boolean)
set "replaceable"(value: boolean)
set "requiredFeatures"(value: $FeatureFlagSet$$Type)
set "toolRequired"(value: boolean)
}

export namespace $AbstractBlockSettingsAccessor {
const probejs$$marker: never
}
export abstract class $AbstractBlockSettingsAccessor$$Static implements $AbstractBlockSettingsAccessor {
}
}

declare module "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor" {
import { $ServerPlayerConnection } from "net.minecraft.server.network.ServerPlayerConnection"
import { $Set } from "java.util.Set"

export interface $EntityTrackerAccessor {
"getPlayersTracking"(): $Set<$ServerPlayerConnection>
get "playersTracking"(): $Set<$ServerPlayerConnection>
}

export namespace $EntityTrackerAccessor {
const probejs$$marker: never
}
export abstract class $EntityTrackerAccessor$$Static implements $EntityTrackerAccessor {
}
}

declare module "net.fabricmc.fabric.api.client.screen.v1.ScreenEvents$AfterTick" {
import { $Screen$$Type } from "net.minecraft.client.gui.screens.Screen"

export interface $ScreenEvents$AfterTick {
"afterTick"(screen0: $Screen$$Type): void
}

export namespace $ScreenEvents$AfterTick {
const probejs$$marker: never
}
export abstract class $ScreenEvents$AfterTick$$Static implements $ScreenEvents$AfterTick {
}
}

declare module "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$OuterCloseCallback" {
import { $TransactionContext$Result$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext$Result"

export interface $TransactionContext$OuterCloseCallback {
"afterOuterClose"(result0: $TransactionContext$Result$$Type): void
}

export namespace $TransactionContext$OuterCloseCallback {
const probejs$$marker: never
}
export abstract class $TransactionContext$OuterCloseCallback$$Static implements $TransactionContext$OuterCloseCallback {
}
}

declare module "net.fabricmc.fabric.api.item.v1.CustomDamageHandler" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export interface $CustomDamageHandler {
"damage"(itemStack0: $ItemStack$$Type, int1: integer, livingEntity2: $LivingEntity$$Type, consumer3: $Consumer$$Type<$LivingEntity$$Type>): integer
}

export namespace $CustomDamageHandler {
const probejs$$marker: never
}
export abstract class $CustomDamageHandler$$Static implements $CustomDamageHandler {
}
}

