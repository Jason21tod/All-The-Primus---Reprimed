declare module "net.minecraft.server.ServerScoreboard$Method" {
import { $Enum } from "java.lang.Enum"

export class $ServerScoreboard$Method extends $Enum<$ServerScoreboard$Method> {
static readonly "CHANGE": $ServerScoreboard$Method
static readonly "REMOVE": $ServerScoreboard$Method

public static "valueOf"(string0: string): $ServerScoreboard$Method
public static "values"(): $ServerScoreboard$Method[]
}
}

declare module "net.minecraft.server.players.IpBanList" {
import { $SocketAddress$$Type } from "java.net.SocketAddress"
import { $File$$Type } from "java.io.File"
import { $IpBanListEntry } from "net.minecraft.server.players.IpBanListEntry"
import { $StoredUserList } from "net.minecraft.server.players.StoredUserList"

export class $IpBanList extends $StoredUserList<string, $IpBanListEntry> {
constructor(file0: $File$$Type)

public "get"(socketAddress0: $SocketAddress$$Type): $IpBanListEntry
public "isBanned"(socketAddress0: $SocketAddress$$Type): boolean
public "isBanned"(string0: string): boolean
}
}

declare module "net.minecraft.server.players.UserBanList" {
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $UserBanListEntry } from "net.minecraft.server.players.UserBanListEntry"
import { $File$$Type } from "java.io.File"
import { $StoredUserList } from "net.minecraft.server.players.StoredUserList"

export class $UserBanList extends $StoredUserList<$GameProfile, $UserBanListEntry> {
constructor(file0: $File$$Type)

public "isBanned"(gameProfile0: $GameProfile$$Type): boolean
}
}

declare module "net.minecraft.server.network.ServerGamePacketListenerImpl" {
import { $SocketAddress } from "java.net.SocketAddress"
import { $ServerPlayerConnection } from "net.minecraft.server.network.ServerPlayerConnection"
import { $ServerboundSwingPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSwingPacket"
import { $Connection, $Connection$$Type } from "net.minecraft.network.Connection"
import { $ServerboundCommandSuggestionPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket"
import { $ServerboundAcceptTeleportationPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket"
import { $ServerboundContainerClickPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundContainerClickPacket"
import { $ServerboundPlayerInputPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket"
import { $ServerboundRecipeBookSeenRecipePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket"
import { $ServerboundResourcePackPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundResourcePackPacket"
import { $PacketSendListener$$Type } from "net.minecraft.network.PacketSendListener"
import { $RelativeMovement$$Type } from "net.minecraft.world.entity.RelativeMovement"
import { $ServerboundSignUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $ServerboundPickItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPickItemPacket"
import { $ServerboundChatSessionUpdatePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket"
import { $AccessorServerGamePacketListener } from "org.violetmoon.quark.mixin.mixins.accessor.AccessorServerGamePacketListener"
import { $ServerboundClientInformationPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundClientInformationPacket"
import { $ServerboundCustomPayloadPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundCustomPayloadPacket"
import { $ServerboundJigsawGeneratePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket"
import { $ServerboundPlayerCommandPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket"
import { $ServerboundTeleportToEntityPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket"
import { $ServerboundEntityTagQuery$$Type } from "net.minecraft.network.protocol.game.ServerboundEntityTagQuery"
import { $ServerboundMovePlayerPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket"
import { $ServerGamePacketListener } from "net.minecraft.network.protocol.game.ServerGamePacketListener"
import { $ServerboundChatAckPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatAckPacket"
import { $ServerPlayNetworkAddon } from "net.fabricmc.fabric.impl.networking.server.ServerPlayNetworkAddon"
import { $ServerboundClientCommandPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundClientCommandPacket"
import { $ServerboundPlayerActionPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket"
import { $Set$$Type } from "java.util.Set"
import { $ServerboundKeepAlivePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundKeepAlivePacket"
import { $ServerboundPaddleBoatPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket"
import { $ServerboundSetCommandBlockPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket"
import { $ServerboundBlockEntityTagQuery$$Type } from "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQuery"
import { $ServerboundSelectTradePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSelectTradePacket"
import { $ServerboundSeenAdvancementsPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket"
import { $ServerboundInteractPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundInteractPacket"
import { $ServerboundSetCreativeModeSlotPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket"
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $NetworkHandlerExtensions } from "net.fabricmc.fabric.impl.networking.NetworkHandlerExtensions"
import { $Packet, $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $DisconnectPacketSource } from "net.fabricmc.fabric.impl.networking.DisconnectPacketSource"
import { $ServerboundRecipeBookChangeSettingsPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $ServerboundSetStructureBlockPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket"
import { $TickablePacketListener } from "net.minecraft.network.TickablePacketListener"
import { $ServerPlayNetworkHandlerAccessor } from "net.fabricmc.fabric.mixin.networking.accessor.ServerPlayNetworkHandlerAccessor"
import { $ServerboundPlaceRecipePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket"
import { $ServerboundUseItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundUseItemPacket"
import { $ServerboundChangeDifficultyPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket"
import { $ServerboundSetJigsawBlockPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket"
import { $ServerboundSetCarriedItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket"
import { $ServerboundUseItemOnPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket"
import { $ServerboundContainerButtonClickPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket"
import { $ServerboundEditBookPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundEditBookPacket"
import { $ServerboundRenameItemPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundRenameItemPacket"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ServerboundPlayerAbilitiesPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket"
import { $ServerboundSetBeaconPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket"
import { $ServerboundSetCommandMinecartPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket"
import { $ServerboundMoveVehiclePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ServerboundChatCommandPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatCommandPacket"
import { $ServerboundContainerClosePacket$$Type } from "net.minecraft.network.protocol.game.ServerboundContainerClosePacket"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $ServerboundPongPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundPongPacket"
import { $ServerboundLockDifficultyPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket"
import { $ServerboundChatPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundChatPacket"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"

export class $ServerGamePacketListenerImpl implements $ServerPlayerConnection, $TickablePacketListener, $ServerGamePacketListener, $DisconnectPacketSource, $NetworkHandlerExtensions, $ServerPlayNetworkHandlerAccessor, $AccessorServerGamePacketListener {
/** @deprecated */
static readonly "MAX_INTERACTION_DISTANCE": double
readonly "connection": $Connection

constructor(minecraftServer0: $MinecraftServer$$Type, connection1: $Connection$$Type, serverPlayer2: $ServerPlayer$$Type)

public "ackBlockChangesUpTo"(int0: integer): void
public "addPendingMessage"(playerChatMessage0: $PlayerChatMessage$$Type): void
public "constant$zzp000$playTimeout"(long0: long): long
public "createDisconnectPacket"(message: $Component$$Type): $Packet
public "disconnect"(component0: $Component$$Type): void
public "getAddon"(): $ServerPlayNetworkAddon
public "getPlayer"(): $ServerPlayer
public "getRemoteAddress"(): $SocketAddress
public "handleAcceptTeleportPacket"(serverboundAcceptTeleportationPacket0: $ServerboundAcceptTeleportationPacket$$Type): void
public "handleAnimate"(serverboundSwingPacket0: $ServerboundSwingPacket$$Type): void
public "handleBlockEntityTagQuery"(serverboundBlockEntityTagQuery0: $ServerboundBlockEntityTagQuery$$Type): void
public "handleChangeDifficulty"(serverboundChangeDifficultyPacket0: $ServerboundChangeDifficultyPacket$$Type): void
public "handleChat"(serverboundChatPacket0: $ServerboundChatPacket$$Type): void
public "handleChatAck"(serverboundChatAckPacket0: $ServerboundChatAckPacket$$Type): void
public "handleChatCommand"(serverboundChatCommandPacket0: $ServerboundChatCommandPacket$$Type): void
public "handleChatSessionUpdate"(serverboundChatSessionUpdatePacket0: $ServerboundChatSessionUpdatePacket$$Type): void
public "handleClientCommand"(serverboundClientCommandPacket0: $ServerboundClientCommandPacket$$Type): void
public "handleClientInformation"(serverboundClientInformationPacket0: $ServerboundClientInformationPacket$$Type): void
public "handleContainerButtonClick"(serverboundContainerButtonClickPacket0: $ServerboundContainerButtonClickPacket$$Type): void
public "handleContainerClick"(serverboundContainerClickPacket0: $ServerboundContainerClickPacket$$Type): void
public "handleContainerClose"(serverboundContainerClosePacket0: $ServerboundContainerClosePacket$$Type): void
public "handleCustomCommandSuggestions"(serverboundCommandSuggestionPacket0: $ServerboundCommandSuggestionPacket$$Type): void
public "handleCustomPayload"(serverboundCustomPayloadPacket0: $ServerboundCustomPayloadPacket$$Type): void
public "handleEditBook"(serverboundEditBookPacket0: $ServerboundEditBookPacket$$Type): void
public "handleEntityTagQuery"(serverboundEntityTagQuery0: $ServerboundEntityTagQuery$$Type): void
public "handleInteract"(serverboundInteractPacket0: $ServerboundInteractPacket$$Type): void
public "handleJigsawGenerate"(serverboundJigsawGeneratePacket0: $ServerboundJigsawGeneratePacket$$Type): void
public "handleKeepAlive"(serverboundKeepAlivePacket0: $ServerboundKeepAlivePacket$$Type): void
public "handleLockDifficulty"(serverboundLockDifficultyPacket0: $ServerboundLockDifficultyPacket$$Type): void
public "handleMovePlayer"(serverboundMovePlayerPacket0: $ServerboundMovePlayerPacket$$Type): void
public "handleMoveVehicle"(serverboundMoveVehiclePacket0: $ServerboundMoveVehiclePacket$$Type): void
public "handlePaddleBoat"(serverboundPaddleBoatPacket0: $ServerboundPaddleBoatPacket$$Type): void
public "handlePickItem"(serverboundPickItemPacket0: $ServerboundPickItemPacket$$Type): void
public "handlePlaceRecipe"(serverboundPlaceRecipePacket0: $ServerboundPlaceRecipePacket$$Type): void
public "handlePlayerAbilities"(serverboundPlayerAbilitiesPacket0: $ServerboundPlayerAbilitiesPacket$$Type): void
public "handlePlayerAction"(serverboundPlayerActionPacket0: $ServerboundPlayerActionPacket$$Type): void
public "handlePlayerCommand"(serverboundPlayerCommandPacket0: $ServerboundPlayerCommandPacket$$Type): void
public "handlePlayerInput"(serverboundPlayerInputPacket0: $ServerboundPlayerInputPacket$$Type): void
public "handlePong"(serverboundPongPacket0: $ServerboundPongPacket$$Type): void
public "handleRecipeBookChangeSettingsPacket"(serverboundRecipeBookChangeSettingsPacket0: $ServerboundRecipeBookChangeSettingsPacket$$Type): void
public "handleRecipeBookSeenRecipePacket"(serverboundRecipeBookSeenRecipePacket0: $ServerboundRecipeBookSeenRecipePacket$$Type): void
public "handleRenameItem"(serverboundRenameItemPacket0: $ServerboundRenameItemPacket$$Type): void
public "handleResourcePackResponse"(serverboundResourcePackPacket0: $ServerboundResourcePackPacket$$Type): void
public "handleSeenAdvancements"(serverboundSeenAdvancementsPacket0: $ServerboundSeenAdvancementsPacket$$Type): void
public "handleSelectTrade"(serverboundSelectTradePacket0: $ServerboundSelectTradePacket$$Type): void
public "handleSetBeaconPacket"(serverboundSetBeaconPacket0: $ServerboundSetBeaconPacket$$Type): void
public "handleSetCarriedItem"(serverboundSetCarriedItemPacket0: $ServerboundSetCarriedItemPacket$$Type): void
public "handleSetCommandBlock"(serverboundSetCommandBlockPacket0: $ServerboundSetCommandBlockPacket$$Type): void
public "handleSetCommandMinecart"(serverboundSetCommandMinecartPacket0: $ServerboundSetCommandMinecartPacket$$Type): void
public "handleSetCreativeModeSlot"(serverboundSetCreativeModeSlotPacket0: $ServerboundSetCreativeModeSlotPacket$$Type): void
public "handleSetJigsawBlock"(serverboundSetJigsawBlockPacket0: $ServerboundSetJigsawBlockPacket$$Type): void
public "handleSetStructureBlock"(serverboundSetStructureBlockPacket0: $ServerboundSetStructureBlockPacket$$Type): void
public "handleSignUpdate"(serverboundSignUpdatePacket0: $ServerboundSignUpdatePacket$$Type): void
public "handleTeleportToEntityPacket"(serverboundTeleportToEntityPacket0: $ServerboundTeleportToEntityPacket$$Type): void
public "handleUseItem"(serverboundUseItemPacket0: $ServerboundUseItemPacket$$Type): void
public "handleUseItemOn"(serverboundUseItemOnPacket0: $ServerboundUseItemOnPacket$$Type): void
public "handler$hhe000$sendMessage"(message: $ServerboundChatPacket$$Type, ci: $CallbackInfo$$Type): void
public "isAcceptingMessages"(): boolean
public "onDisconnect"(component0: $Component$$Type): void
public "redirect$ene000$getStackInHand"(instance: $ServerPlayer$$Type, hand: $InteractionHand$$Type): $ItemStack
public "resetPosition"(): void
public "send"(packet0: $Packet$$Type<any>, packetSendListener1: $PacketSendListener$$Type): void
public "send"(packet0: $Packet$$Type<any>): void
public "sendDisguisedChatMessage"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type): void
public "sendPlayerChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, bound1: $ChatType$Bound$$Type): void
public "shouldPropagateHandlingExceptions"(): boolean
public "teleport"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "teleport"(double0: double, double1: double, double2: double, float3: float, float4: float, set5: $Set$$Type<$RelativeMovement$$Type>): void
public "tick"(): void
get "player"(): $ServerPlayer
set "player"(value: $ServerPlayer$$Type)
get "addon"(): $ServerPlayNetworkAddon
get "remoteAddress"(): $SocketAddress
get "acceptingMessages"(): boolean
}
}

declare module "net.minecraft.server.level.ChunkHolder" {
import { $LevelChunk, $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $ChunkHolder$LevelChangeListener$$Type } from "net.minecraft.server.level.ChunkHolder$LevelChangeListener"
import { $ChunkHolderAccessor } from "virtuoel.pehkui.mixin.compat1201minus.compat116plus.ChunkHolderAccessor"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ChunkMap$$Type } from "net.minecraft.server.level.ChunkMap"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkHolder$PlayerProvider$$Type } from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import { $IClearableChunkHolder } from "org.embeddedt.modernfix.duck.release_protochunks.IClearableChunkHolder"
import { $List } from "java.util.List"
import { $LevelLightEngine$$Type } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $AtomicInteger } from "java.util.concurrent.atomic.AtomicInteger"
import { $ChunkStatus, $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $FullChunkStatus } from "net.minecraft.server.level.FullChunkStatus"
import { $ImposterProtoChunk$$Type } from "net.minecraft.world.level.chunk.ImposterProtoChunk"
import { $ChunkHolder$ChunkLoadingFailure } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"

export class $ChunkHolder implements $IClearableChunkHolder, $ChunkHolderAccessor {
static readonly "UNLOADED_CHUNK": $Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
static readonly "UNLOADED_LEVEL_CHUNK": $Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>

constructor(chunkPos0: $ChunkPos$$Type, int1: integer, levelHeightAccessor2: $LevelHeightAccessor$$Type, levelLightEngine3: $LevelLightEngine$$Type, levelChangeListener4: $ChunkHolder$LevelChangeListener$$Type, playerProvider5: $ChunkHolder$PlayerProvider$$Type)

public "blockChanged"(blockPos0: $BlockPos$$Type): void
public "broadcastChanges"(levelChunk0: $LevelChunk$$Type): void
public "getAllFutures"(): $List<$Pair<$ChunkStatus, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>>
public "getChunkToSave"(): $CompletableFuture<$ChunkAccess>
public "getEntityTickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "getFullChunk"(): $LevelChunk
public "getFullChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "getFullStatus"(): $FullChunkStatus
public "getFutureIfPresent"(chunkStatus0: $ChunkStatus$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getFutureIfPresentUnchecked"(chunkStatus0: $ChunkStatus$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getLastAvailable"(): $ChunkAccess
public "getLastAvailableStatus"(): $ChunkStatus
public "getOrScheduleFuture"(chunkStatus0: $ChunkStatus$$Type, chunkMap1: $ChunkMap$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getPos"(): $ChunkPos
public "getQueueLevel"(): integer
public "getTicketLevel"(): integer
public "getTickingChunk"(): $LevelChunk
public "getTickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "mfix$getGenerationRefCount"(): $AtomicInteger
public "mfix$resetProtoChunkFutures"(): void
public "refreshAccessibility"(): void
public "replaceProtoChunk"(imposterProtoChunk0: $ImposterProtoChunk$$Type): void
public "sectionLightChanged"(lightLayer0: $LightLayer$$Type, int1: integer): void
public "setTicketLevel"(int0: integer): void
public "wasAccessibleSinceLastSave"(): boolean
get "allFutures"(): $List<$Pair<$ChunkStatus, $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>>>
get "chunkToSave"(): $CompletableFuture<$ChunkAccess>
get "entityTickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
get "fullChunk"(): $LevelChunk
get "fullChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
get "fullStatus"(): $FullChunkStatus
get "lastAvailable"(): $ChunkAccess
get "lastAvailableStatus"(): $ChunkStatus
get "pos"(): $ChunkPos
get "queueLevel"(): integer
get "ticketLevel"(): integer
get "tickingChunk"(): $LevelChunk
get "tickingChunkFuture"(): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
set "ticketLevel"(value: integer)
}
}

declare module "net.minecraft.server.level.progress.ChunkProgressListener" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export interface $ChunkProgressListener {
"onStatusChange"(chunkPos0: $ChunkPos$$Type, chunkStatus1: $ChunkStatus$$Type): void
"start"(): void
"stop"(): void
"updateSpawnPos"(chunkPos0: $ChunkPos$$Type): void
}

export namespace $ChunkProgressListener {
const probejs$$marker: never
}
export abstract class $ChunkProgressListener$$Static implements $ChunkProgressListener {
}
}

declare module "net.minecraft.server.players.BanListEntry" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Date, $Date$$Type } from "java.util.Date"
import { $StoredUserEntry } from "net.minecraft.server.players.StoredUserEntry"
import { $SimpleDateFormat } from "java.text.SimpleDateFormat"

export class $BanListEntry<T = any> extends $StoredUserEntry<T> {
static readonly "DATE_FORMAT": $SimpleDateFormat
static readonly "EXPIRES_NEVER": string

constructor(t0: T, date1: $Date$$Type, string2: string, date3: $Date$$Type, string4: string)

public "getCreated"(): $Date
public "getDisplayName"(): $Component
public "getExpires"(): $Date
public "getReason"(): string
public "getSource"(): string
get "created"(): $Date
get "displayName"(): $Component
get "expires"(): $Date
get "reason"(): string
get "source"(): string
}
}

declare module "net.minecraft.server.level.progress.StoringChunkProgressListener" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkProgressListener } from "net.minecraft.server.level.progress.ChunkProgressListener"
import { $ChunkStatus, $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export class $StoringChunkProgressListener implements $ChunkProgressListener {
constructor(int0: integer)

public "getDiameter"(): integer
public "getFullDiameter"(): integer
public "getProgress"(): integer
public "getStatus"(int0: integer, int1: integer): $ChunkStatus
public "onStatusChange"(chunkPos0: $ChunkPos$$Type, chunkStatus1: $ChunkStatus$$Type): void
public "start"(): void
public "stop"(): void
public "updateSpawnPos"(chunkPos0: $ChunkPos$$Type): void
get "diameter"(): integer
get "fullDiameter"(): integer
get "progress"(): integer
}
}

declare module "net.minecraft.server.packs.resources.FallbackResourceManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Set } from "java.util.Set"
import { $PackType, $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $IoSupplier$$Type } from "net.minecraft.server.packs.resources.IoSupplier"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Map, $Map$$Type } from "java.util.Map"
import { $FallbackResourceManager$PackEntry } from "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry"
import { $Optional } from "java.util.Optional"
import { $BufferedReader } from "java.io.BufferedReader"
import { $PackResources, $PackResources$$Type } from "net.minecraft.server.packs.PackResources"
import { $InputStream } from "java.io.InputStream"
import { $ResourceMetadata } from "net.minecraft.server.packs.resources.ResourceMetadata"

export class $FallbackResourceManager implements $ResourceManager {
readonly "fallbacks": $List<$FallbackResourceManager$PackEntry>
readonly "type": $PackType

constructor(packType0: $PackType$$Type, string1: string)

public static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
public static "getMetadataLocation"(resourceLocation0: $ResourceLocation$$Type): $ResourceLocation
public "getNamespaces"(): $Set<string>
public "getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
public "getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
public "listPacks"(): $Stream<$PackResources>
public "listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
public "listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
public "open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
public "openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
public static "parseMetadata"(ioSupplier0: $IoSupplier$$Type<$InputStream>): $ResourceMetadata
public "push"(packResources0: $PackResources$$Type, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): void
public "push"(packResources0: $PackResources$$Type): void
public "pushFilterOnly"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): void
get "namespaces"(): $Set<string>
}
}

declare module "net.minecraft.server.ReloadableServerResources" {
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Commands } from "net.minecraft.commands.Commands"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $LootDataManager } from "net.minecraft.world.level.storage.loot.LootDataManager"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $TagManager } from "net.minecraft.tags.TagManager"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $RegistryAccess$Frozen$$Type } from "net.minecraft.core.RegistryAccess$Frozen"
import { $ServerFunctionLibrary } from "net.minecraft.server.ServerFunctionLibrary"
import { $Commands$CommandSelection$$Type } from "net.minecraft.commands.Commands$CommandSelection"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $ICondition$IContext } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $ServerAdvancementManager } from "net.minecraft.server.ServerAdvancementManager"

/** @deprecated */
export class $ReloadableServerResources {
readonly "tagManager": $TagManager

constructor(frozen0: $RegistryAccess$Frozen$$Type, featureFlagSet1: $FeatureFlagSet$$Type, commandSelection2: $Commands$CommandSelection$$Type, int3: integer)

public "getAdvancements"(): $ServerAdvancementManager
public "getCommands"(): $Commands
public "getConditionContext"(): $ICondition$IContext
public "getFunctionLibrary"(): $ServerFunctionLibrary
public "getLootData"(): $LootDataManager
public "getRecipeManager"(): $RecipeManager
public "handler$fdh000$hookRefresh"(dynamicRegistryManager: $RegistryAccess$$Type, ci: $CallbackInfo$$Type): void
public "handler$fob000$placebo_listeners"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$hdl000$updateRegistryTags"(registryAccess: $RegistryAccess$$Type, ci: $CallbackInfo$$Type): void
public "listeners"(): $List<$PreparableReloadListener>
public static "loadResources"(resourceManager0: $ResourceManager$$Type, frozen1: $RegistryAccess$Frozen$$Type, featureFlagSet2: $FeatureFlagSet$$Type, commandSelection3: $Commands$CommandSelection$$Type, int4: integer, executor5: $Executor$$Type, executor6: $Executor$$Type): $CompletableFuture<$ReloadableServerResources>
public "updateRegistryTags"(registryAccess0: $RegistryAccess$$Type): void
get "advancements"(): $ServerAdvancementManager
get "commands"(): $Commands
get "conditionContext"(): $ICondition$IContext
get "functionLibrary"(): $ServerFunctionLibrary
get "lootData"(): $LootDataManager
get "recipeManager"(): $RecipeManager
}
}

declare module "net.minecraft.server.level.BlockDestructionProgress" {
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Comparable } from "java.lang.Comparable"

export class $BlockDestructionProgress implements $Comparable<$BlockDestructionProgress> {
constructor(int0: integer, blockPos1: $BlockPos$$Type)

public "compareTo"(blockDestructionProgress0: $BlockDestructionProgress$$Type): integer
public "getId"(): integer
public "getPos"(): $BlockPos
public "getProgress"(): integer
public "getUpdatedRenderTick"(): integer
public "setProgress"(int0: integer): void
public "updateTick"(int0: integer): void
get "id"(): integer
get "pos"(): $BlockPos
get "progress"(): integer
get "updatedRenderTick"(): integer
set "progress"(value: integer)
}
}

declare module "net.minecraft.server.players.GameProfileCache" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Optional, $Optional$$Type } from "java.util.Optional"
import { $UUID$$Type } from "java.util.UUID"
import { $GameProfileCache$GameProfileInfo } from "net.minecraft.server.players.GameProfileCache$GameProfileInfo"
import { $GameProfileRepository$$Type } from "com.mojang.authlib.GameProfileRepository"
import { $File$$Type } from "java.io.File"

export class $GameProfileCache {
constructor(gameProfileRepository0: $GameProfileRepository$$Type, file1: $File$$Type)

public "add"(gameProfile0: $GameProfile$$Type): void
public "clearExecutor"(): void
public "get"(string0: string): $Optional<$GameProfile>
public "get"(uUID0: $UUID$$Type): $Optional<$GameProfile>
public "getAsync"(string0: string, consumer1: $Consumer$$Type<$Optional$$Type<$GameProfile$$Type>>): void
public "load"(): $List<$GameProfileCache$GameProfileInfo>
public "save"(): void
public "setExecutor"(executor0: $Executor$$Type): void
public static "setUsesAuthentication"(boolean0: boolean): void
set "executor"(value: $Executor$$Type)
}
}

declare module "net.minecraft.server.network.ServerPlayerConnection" {
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"

export interface $ServerPlayerConnection {
"getPlayer"(): $ServerPlayer
"send"(packet0: $Packet$$Type<any>): void
get "player"(): $ServerPlayer
}

export namespace $ServerPlayerConnection {
const probejs$$marker: never
}
export abstract class $ServerPlayerConnection$$Static implements $ServerPlayerConnection {
}
}

declare module "net.minecraft.server.level.ServerPlayerGameMode" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BlockHitResult$$Type } from "net.minecraft.world.phys.BlockHitResult"
import { $InteractionResult } from "net.minecraft.world.InteractionResult"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ServerboundPlayerActionPacket$Action$$Type } from "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ServerPlayerGameMode {
constructor(serverPlayer0: $ServerPlayer$$Type)

public "changeGameModeForPlayer"(gameType0: $GameType$$Type): boolean
public "destroyAndAck"(blockPos0: $BlockPos$$Type, int1: integer, string2: string): void
public "destroyBlock"(blockPos0: $BlockPos$$Type): boolean
public "getGameModeForPlayer"(): $GameType
public "getPreviousGameModeForPlayer"(): $GameType
public "handleBlockBreakAction"(blockPos0: $BlockPos$$Type, action1: $ServerboundPlayerActionPacket$Action$$Type, direction2: $Direction$$Type, int3: integer, int4: integer): void
public "handler$gpg000$l2complements_destroyBlock_markPlayerBeginBreak"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$gpg000$l2complements_destroyBlock_markPlayerEndBreak"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$imn000$onSetGameModeForPlayerHead"(gameModeForPlayer: $GameType$$Type, previousGameModeForPlayer: $GameType$$Type, ci: $CallbackInfo$$Type): void
public "handler$imn000$onSetGameModeForPlayerReturn"(gameModeForPlayer: $GameType$$Type, previousGameModeForPlayer: $GameType$$Type, ci: $CallbackInfo$$Type): void
public "handler$ioi000$startBlockBreak"(pos: $BlockPos$$Type, playerAction: $ServerboundPlayerActionPacket$Action$$Type, direction: $Direction$$Type, worldHeight: integer, i: integer, info: $CallbackInfo$$Type): void
public "isCreative"(): boolean
public "isSurvival"(): boolean
public "setLevel"(serverLevel0: $ServerLevel$$Type): void
public "tick"(): void
public "useItem"(serverPlayer0: $ServerPlayer$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type, interactionHand3: $InteractionHand$$Type): $InteractionResult
public "useItemOn"(serverPlayer0: $ServerPlayer$$Type, level1: $Level$$Type, itemStack2: $ItemStack$$Type, interactionHand3: $InteractionHand$$Type, blockHitResult4: $BlockHitResult$$Type): $InteractionResult
get "destroyPos"(): $BlockPos
set "destroyPos"(value: $BlockPos$$Type)
get "isDestroyingBlock"(): boolean
set "isDestroyingBlock"(value: boolean)
get "gameModeForPlayer"(): $GameType
get "previousGameModeForPlayer"(): $GameType
get "creative"(): boolean
get "survival"(): boolean
set "level"(value: $ServerLevel$$Type)
}
}

declare module "net.minecraft.server.players.UserBanListEntry" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $BanListEntry } from "net.minecraft.server.players.BanListEntry"
import { $Date$$Type } from "java.util.Date"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"

export class $UserBanListEntry extends $BanListEntry<$GameProfile> {
constructor(jsonObject0: $JsonObject$$Type)
constructor(gameProfile0: $GameProfile$$Type, date1: $Date$$Type, string2: string, date3: $Date$$Type, string4: string)
constructor(gameProfile0: $GameProfile$$Type)

}
}

declare module "net.minecraft.server.MinecraftServer$ReloadableResources" {
import { $Record } from "java.lang.Record"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "net.minecraft.server.ReloadableServerResources"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "net.minecraft.server.packs.resources.CloseableResourceManager"

export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable {
constructor(resourceManager: $CloseableResourceManager$$Type, managers: $ReloadableServerResources$$Type)

public "close"(): void
public "managers"(): $ReloadableServerResources
public "resourceManager"(): $CloseableResourceManager
}
}

declare module "net.minecraft.server.level.progress.ChunkProgressListenerFactory" {
import { $ChunkProgressListener } from "net.minecraft.server.level.progress.ChunkProgressListener"

export interface $ChunkProgressListenerFactory {
"create"(int0: integer): $ChunkProgressListener
}

export namespace $ChunkProgressListenerFactory {
const probejs$$marker: never
}
export abstract class $ChunkProgressListenerFactory$$Static implements $ChunkProgressListenerFactory {
}
}

declare module "net.minecraft.server.MinecraftServer" {
import { $KeyPair } from "java.security.KeyPair"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $GameProfileRepository } from "com.mojang.authlib.GameProfileRepository"
import { $PlayerList, $PlayerList$$Type } from "net.minecraft.server.players.PlayerList"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $Proxy, $Proxy$$Type } from "java.net.Proxy"
import { $Map } from "java.util.Map"
import { $Thread, $Thread$$Type } from "java.lang.Thread"
import { $ServerExpandedContext, $ServerExpandedContext$$Type } from "com.mega.endinglib.util.mixin.level.ServerExpandedContext"
import { $Path, $Path$$Type } from "java.nio.file.Path"
import { $TickTask, $TickTask$$Type } from "net.minecraft.server.TickTask"
import { $ServerAdvancementManager } from "net.minecraft.server.ServerAdvancementManager"
import { $ServerConnectionListener } from "net.minecraft.server.network.ServerConnectionListener"
import { $ReentrantBlockableEventLoop } from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"
import { $ScheduledEvents } from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import { $Set } from "java.util.Set"
import { $Exception$$Type } from "java.lang.Exception"
import { $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $ModifiableTickRateServer } from "com.github.alexthe666.citadel.server.world.ModifiableTickRateServer"
import { $GameType, $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $CrashReport$$Type } from "net.minecraft.CrashReport"
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "net.minecraft.server.packs.resources.CloseableResourceManager"
import { $ProfileResults, $ProfileResults$$Type } from "net.minecraft.util.profiling.ProfileResults"
import { $ChunkProgressListenerFactory$$Type } from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $TextFilter } from "net.minecraft.server.network.TextFilter"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ServerScoreboard } from "net.minecraft.server.ServerScoreboard"
import { $TemporalAmount$$Type } from "java.time.temporal.TemporalAmount"
import { $WorldDataConfiguration } from "net.minecraft.world.level.WorldDataConfiguration"
import { $Difficulty$$Type } from "net.minecraft.world.Difficulty"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $DataFixer, $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $File } from "java.io.File"
import { $ScheduledEvents$ScheduledEvent } from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import { $PackRepository, $PackRepository$$Type } from "net.minecraft.server.packs.repository.PackRepository"
import { $RegistryAccess$Frozen } from "net.minecraft.core.RegistryAccess$Frozen"
import { $SignatureValidator } from "net.minecraft.util.SignatureValidator"
import { $GameProfileCache } from "net.minecraft.server.players.GameProfileCache"
import { $LevelResource$$Type } from "net.minecraft.world.level.storage.LevelResource"
import { $WorldStem$$Type } from "net.minecraft.server.WorldStem"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $FrameTimer } from "net.minecraft.util.FrameTimer"
import { $Either$$Type } from "com.mojang.datafixers.util.Either"
import { $ITimeTrackingServer } from "org.embeddedt.modernfix.duck.ITimeTrackingServer"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $MinecraftServerKJS } from "dev.latvian.mods.kubejs.core.MinecraftServerKJS"
import { $ModCheck } from "net.minecraft.util.ModCheck"
import { $PlayerDataStorage, $PlayerDataStorage$$Type } from "net.minecraft.world.level.storage.PlayerDataStorage"
import { $ServerStatus } from "net.minecraft.network.protocol.status.ServerStatus"
import { $WorldData } from "net.minecraft.world.level.storage.WorldData"
import { $Commands } from "net.minecraft.commands.Commands"
import { $Collection$$Type } from "java.util.Collection"
import { $GameRules } from "net.minecraft.world.level.GameRules"
import { $ServerFunctionManager } from "net.minecraft.server.ServerFunctionManager"
import { $PlayerSelector$$Type } from "dev.latvian.mods.kubejs.core.PlayerSelector"
import { $ServerEC } from "com.mega.endinglib.util.mixin.level.ServerEC"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CommandStorage } from "net.minecraft.world.level.storage.CommandStorage"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $StructureTemplateManager } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $RecipeManager } from "net.minecraft.world.item.crafting.RecipeManager"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ProcessorHandle, $ProcessorHandle$$Type } from "net.minecraft.util.thread.ProcessorHandle"
import { $Optional } from "java.util.Optional"
import { $CommandSource } from "net.minecraft.commands.CommandSource"
import { $Level } from "net.minecraft.world.level.Level"
import { $RegistryLayer } from "net.minecraft.server.RegistryLayer"
import { $MinecraftServer$ServerResourcePackInfo } from "net.minecraft.server.MinecraftServer$ServerResourcePackInfo"
import { $ChatDecorator } from "net.minecraft.network.chat.ChatDecorator"
import { $ScheduledEvents$Callback$$Type } from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import { $AdvancementJS } from "dev.latvian.mods.kubejs.player.AdvancementJS"
import { $CustomBossEvents } from "net.minecraft.server.bossevents.CustomBossEvents"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $MinecraftSessionService } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $LayeredRegistryAccess } from "net.minecraft.core.LayeredRegistryAccess"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $AttachedData } from "dev.latvian.mods.kubejs.util.AttachedData"
import { $DataPackConfig$$Type } from "net.minecraft.world.level.DataPackConfig"
import { $LootDataManager } from "net.minecraft.world.level.storage.loot.LootDataManager"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LevelSettings } from "net.minecraft.world.level.LevelSettings"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $ServerPlayerGameMode } from "net.minecraft.server.level.ServerPlayerGameMode"
import { $MinecraftServer$ReloadableResources, $MinecraftServer$ReloadableResources$$Type } from "net.minecraft.server.MinecraftServer$ReloadableResources"
import { $Class } from "java.lang.Class"
import { $SystemReport, $SystemReport$$Type } from "net.minecraft.SystemReport"
import { $Services$$Type } from "net.minecraft.server.Services"

export class $MinecraftServer extends $ReentrantBlockableEventLoop<$TickTask> implements $CommandSource, $AutoCloseable, $ITimeTrackingServer, $ServerEC, $Trackable, $ModifiableTickRateServer, $MinecraftServerKJS {
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
static readonly "DEMO_SETTINGS": $LevelSettings
static readonly "MS_PER_TICK": integer
static readonly "START_CHUNK_RADIUS": integer
static readonly "VANILLA_BRAND": string
readonly "levels": $Map<$ResourceKey<$Level>, $ServerLevel>
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
readonly "tickTimes": long[]

constructor(thread0: $Thread$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, packRepository2: $PackRepository$$Type, worldStem3: $WorldStem$$Type, proxy4: $Proxy$$Type, dataFixer5: $DataFixer$$Type, services6: $Services$$Type, chunkProgressListenerFactory7: $ChunkProgressListenerFactory$$Type)

public "acceptsFailure"(): boolean
public "acceptsSuccess"(): boolean
public "addTickable"(runnable0: $Runnable$$Type): void
public "alwaysAccepts"(): boolean
public "areNpcsEnabled"(): boolean
public "ask"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<Source>, $TickTask>): $CompletableFuture<Source>
public "askEither"<Source>(function0: $Function$$Type<$ProcessorHandle$$Type<$Either$$Type<Source, $Exception$$Type>>, $TickTask>): $CompletableFuture<Source>
public "atl$getBaseClass"(): $Class
public "cancelRecordingMetrics"(): void
public static "clearNullReferences"(): void
public "close"(): void
public static "configurePackRepository"(packRepository0: $PackRepository$$Type, dataPackConfig1: $DataPackConfig$$Type, boolean2: boolean, featureFlagSet3: $FeatureFlagSet$$Type): $WorldDataConfiguration
public "createCommandSourceStack"(): $CommandSourceStack
public "createGameModeForPlayer"(serverPlayer0: $ServerPlayer$$Type): $ServerPlayerGameMode
public "createTextFilterForPlayer"(serverPlayer0: $ServerPlayer$$Type): $TextFilter
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "doRunTask"(tickTask0: $TickTask$$Type): void
public "dumpServerProperties"(path0: $Path$$Type): void
public "endinglib$serverECData"(): $ServerExpandedContext
public "endinglib$setECData"(serverExpandedContext0: $ServerExpandedContext$$Type): void
public "enforceSecureProfile"(): boolean
public "fillServerSystemReport"(systemReport0: $SystemReport$$Type): $SystemReport
public "fillSystemReport"(systemReport0: $SystemReport$$Type): $SystemReport
public "finishRecordingMetrics"(): void
public "forceSynchronousWrites"(): boolean
public "forceTimeSynchronization"(): void
/** @deprecated */
public "forgeGetWorldMap"(): $Map<$ResourceKey<$Level>, $ServerLevel>
public "getAbsoluteMaxWorldSize"(): integer
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementJS
public "getAdvancements"(): $ServerAdvancementManager
public "getAllLevels"(): $Iterable<$ServerLevel>
public "getAverageTickTime"(): float
public "getChatDecorator"(): $ChatDecorator
public "getCommandStorage"(): $CommandStorage
public "getCommands"(): $Commands
public "getCompressionThreshold"(): integer
public "getConnection"(): $ServerConnectionListener
public "getCustomBossEvents"(): $CustomBossEvents
public "getData"(): $AttachedData
public "getDefaultGameType"(): $GameType
public "getDisplayName"(): $Component
public "getEntities"(): $EntityArrayList
public "getFile"(string0: string): $File
public "getFixerUpper"(): $DataFixer
public "getForcedGameType"(): $GameType
public "getFrameTimer"(): $FrameTimer
public "getFunctionCompilationLevel"(): integer
public "getFunctions"(): $ServerFunctionManager
public "getGameRules"(): $GameRules
public "getKeyPair"(): $KeyPair
public "getLevel"(resourceKey0: $ResourceKey$$Type<$Level>): $ServerLevel
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "getLocalIp"(): string
public "getLootData"(): $LootDataManager
public "getMasterMs"(): long
public "getMaxChainedNeighborUpdates"(): integer
public "getMaxPlayers"(): integer
public "getModdedStatus"(): $ModCheck
public "getMotd"(): string
public "getName"(): $Component
public "getNextTickTime"(): long
public "getOperatorUserPermissionLevel"(): integer
public "getOverworld"(): $ServerLevel
public "getPackRepository"(): $PackRepository
public "getPersistentData"(): $CompoundTag
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "getPlayerCount"(): integer
public "getPlayerIdleTimeout"(): integer
public "getPlayerList"(): $PlayerList
public "getPlayerNames"(): string[]
public "getPlayers"(): $EntityArrayList
public "getPort"(): integer
public "getPreventProxyConnections"(): boolean
public "getProfileCache"(): $GameProfileCache
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getProfilePermissions"(gameProfile0: $GameProfile$$Type): integer
public "getProfileRepository"(): $GameProfileRepository
public "getProfiler"(): $ProfilerFiller
public "getProxy"(): $Proxy
public "getRateLimitPacketsPerSecond"(): integer
public "getRecipeManager"(): $RecipeManager
public "getResourceManager"(): $ResourceManager
public "getRunningThread"(): $Thread
public "getScaledTrackingDistance"(int0: integer): integer
public "getScheduledEvents"(): $ScheduledEvents
public "getScoreboard"(): $ServerScoreboard
public "getServerDirectory"(): $File
public "getServerModName"(): string
public "getServerResourcePack"(): $Optional<$MinecraftServer$ServerResourcePackInfo>
public "getServerResources"(): $MinecraftServer$ReloadableResources
public "getServerVersion"(): string
public "getSessionService"(): $MinecraftSessionService
public "getSingleplayerProfile"(): $GameProfile
public "getSpawnProtectionRadius"(): integer
public "getSpawnRadius"(serverLevel0: $ServerLevel$$Type): integer
public "getStatus"(): $ServerStatus
public "getStatusJson"(): string
public "getStructureManager"(): $StructureTemplateManager
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTickCount"(): integer
public "getTickTime"(resourceKey0: $ResourceKey$$Type<$Level>): long[]
public "getWorldData"(): $WorldData
public "getWorldPath"(levelResource0: $LevelResource$$Type): $Path
public "getWorldScreenshotFile"(): $Optional<$Path>
public "halt"(boolean0: boolean): void
public "hasGui"(): boolean
public "hidesOnlinePlayers"(): boolean
public "invalidateStatus"(): void
public "isCommandBlockEnabled"(): boolean
public "isCurrentlySaving"(): boolean
public "isDedicated"(): boolean
public "isDemo"(): boolean
public "isEnforceWhitelist"(): boolean
public "isEpollEnabled"(): boolean
public "isFlightAllowed"(): boolean
public "isHardcore"(): boolean
public "isNetherEnabled"(): boolean
public "isPublished"(): boolean
public "isPvpAllowed"(): boolean
public "isReady"(): boolean
public "isRecordingMetrics"(): boolean
public "isResourcePackRequired"(): boolean
public "isRunning"(): boolean
public "isShutdown"(): boolean
public "isSingleplayer"(): boolean
public "isSingleplayerOwner"(gameProfile0: $GameProfile$$Type): boolean
public "isSpawningAnimals"(): boolean
public "isSpawningMonsters"(): boolean
public "isStopped"(): boolean
public "isTimeProfilerRunning"(): boolean
public "isUnderSpawnProtection"(serverLevel0: $ServerLevel$$Type, blockPos1: $BlockPos$$Type, player2: $Player$$Type): boolean
public "kickUnlistedPlayers"(commandSourceStack0: $CommandSourceStack$$Type): void
public "levelKeys"(): $Set<$ResourceKey<$Level>>
public "localvar$hdp000$wrapResourceManager"(original: $CloseableResourceManager$$Type): $CloseableResourceManager
public "logChatMessage"(component0: $Component$$Type, bound1: $ChatType$Bound$$Type, string2: string): void
/** @deprecated */
public "markWorldsDirty"(): void
public "mfix$getLastTickStartTime"(): long
public static "of"<Msg>(string0: string, consumer1: $Consumer$$Type<Msg>): $ProcessorHandle<Msg>
public "onServerCrash"(crashReport0: $CrashReport$$Type): void
public "onServerExit"(): void
public "overworld"(): $ServerLevel
public "publishServer"(gameType0: $GameType$$Type, boolean1: boolean, int2: integer): boolean
public "registries"(): $LayeredRegistryAccess<$RegistryLayer>
public "registryAccess"(): $RegistryAccess$Frozen
public "reloadResources"(collection0: $Collection$$Type<string>): $CompletableFuture<void>
public "repliesToStatus"(): boolean
public "resetGlobalTickLengthMs"(): void
public "restoreInventories"(): $Map
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "saveAllChunks"(boolean0: boolean, boolean1: boolean, boolean2: boolean): boolean
public "saveEverything"(boolean0: boolean, boolean1: boolean, boolean2: boolean): boolean
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: long, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "self"(): $MinecraftServer
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendSystemMessage"(component0: $Component$$Type): void
public "setDefaultGameType"(gameType0: $GameType$$Type): void
public "setDemo"(boolean0: boolean): void
public "setDifficulty"(difficulty0: $Difficulty$$Type, boolean1: boolean): void
public "setDifficultyLocked"(boolean0: boolean): void
public "setEnforceWhitelist"(boolean0: boolean): void
public "setFlightAllowed"(boolean0: boolean): void
public "setGlobalTickLengthMs"(long0: long): void
public "setLocalIp"(string0: string): void
public "setMotd"(string0: string): void
public "setPlayerIdleTimeout"(int0: integer): void
public "setPlayerList"(playerList0: $PlayerList$$Type): void
public "setPort"(int0: integer): void
public "setPreventProxyConnections"(boolean0: boolean): void
public "setPvpAllowed"(boolean0: boolean): void
public "setSingleplayerProfile"(gameProfile0: $GameProfile$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setUsesAuthentication"(boolean0: boolean): void
public "shouldInformAdmins"(): boolean
public "shouldRconBroadcast"(): boolean
public static "spin"<S extends $MinecraftServer>(function0: $Function$$Type<$Thread$$Type, S>): S
public "startRecordingMetrics"(consumer0: $Consumer$$Type<$ProfileResults$$Type>, consumer1: $Consumer$$Type<$Path$$Type>): void
public "startTimeProfiler"(): void
public "startTracking"(): void
public static "startTracking"(object0: any): void
public "stop"(): void
public "stopRecordingMetrics"(): void
public "stopTimeProfiler"(): $ProfileResults
public "tell"(message: $Component$$Type): void
public "tickChildren"(booleanSupplier0: $BooleanSupplier$$Type): void
public "tickServer"(booleanSupplier0: $BooleanSupplier$$Type): void
public "usesAuthentication"(): boolean
public "wrap"(): $WeakReference<$Trackable>
get "playerDataStorage"(): $PlayerDataStorage
set "playerDataStorage"(value: $PlayerDataStorage$$Type)
get "resources"(): $MinecraftServer$ReloadableResources
set "resources"(value: $MinecraftServer$ReloadableResources$$Type)
get "absoluteMaxWorldSize"(): integer
get "advancements"(): $ServerAdvancementManager
get "allLevels"(): $Iterable<$ServerLevel>
get "averageTickTime"(): float
get "chatDecorator"(): $ChatDecorator
get "commandStorage"(): $CommandStorage
get "commands"(): $Commands
get "compressionThreshold"(): integer
get "connection"(): $ServerConnectionListener
get "customBossEvents"(): $CustomBossEvents
get "data"(): $AttachedData
get "defaultGameType"(): $GameType
get "displayName"(): $Component
get "entities"(): $EntityArrayList
get "fixerUpper"(): $DataFixer
get "forcedGameType"(): $GameType
get "frameTimer"(): $FrameTimer
get "functionCompilationLevel"(): integer
get "functions"(): $ServerFunctionManager
get "gameRules"(): $GameRules
get "keyPair"(): $KeyPair
get "localIp"(): string
get "lootData"(): $LootDataManager
get "masterMs"(): long
get "maxChainedNeighborUpdates"(): integer
get "maxPlayers"(): integer
get "moddedStatus"(): $ModCheck
get "motd"(): string
get "name"(): $Component
get "nextTickTime"(): long
get "operatorUserPermissionLevel"(): integer
get "packRepository"(): $PackRepository
get "persistentData"(): $CompoundTag
get "playerCount"(): integer
get "playerIdleTimeout"(): integer
get "playerList"(): $PlayerList
get "playerNames"(): string[]
get "players"(): $EntityArrayList
get "port"(): integer
get "preventProxyConnections"(): boolean
get "profileCache"(): $GameProfileCache
get "profileKeySignatureValidator"(): $SignatureValidator
get "profileRepository"(): $GameProfileRepository
get "profiler"(): $ProfilerFiller
get "proxy"(): $Proxy
get "rateLimitPacketsPerSecond"(): integer
get "recipeManager"(): $RecipeManager
get "resourceManager"(): $ResourceManager
get "runningThread"(): $Thread
get "scheduledEvents"(): $ScheduledEvents
get "scoreboard"(): $ServerScoreboard
get "serverDirectory"(): $File
get "serverModName"(): string
get "serverResourcePack"(): $Optional<$MinecraftServer$ServerResourcePackInfo>
get "serverResources"(): $MinecraftServer$ReloadableResources
get "serverVersion"(): string
get "sessionService"(): $MinecraftSessionService
get "singleplayerProfile"(): $GameProfile
get "spawnProtectionRadius"(): integer
get "status"(): $ServerStatus
get "statusJson"(): string
get "structureManager"(): $StructureTemplateManager
get "tickCount"(): integer
get "worldData"(): $WorldData
get "worldScreenshotFile"(): $Optional<$Path>
get "commandBlockEnabled"(): boolean
get "currentlySaving"(): boolean
get "dedicated"(): boolean
get "demo"(): boolean
get "enforceWhitelist"(): boolean
get "epollEnabled"(): boolean
get "flightAllowed"(): boolean
get "hardcore"(): boolean
get "netherEnabled"(): boolean
get "published"(): boolean
get "pvpAllowed"(): boolean
get "ready"(): boolean
get "recordingMetrics"(): boolean
get "resourcePackRequired"(): boolean
get "running"(): boolean
get "shutdown"(): boolean
get "singleplayer"(): boolean
get "spawningAnimals"(): boolean
get "spawningMonsters"(): boolean
get "stopped"(): boolean
get "timeProfilerRunning"(): boolean
set "defaultGameType"(value: $GameType$$Type)
set "demo"(value: boolean)
set "difficultyLocked"(value: boolean)
set "enforceWhitelist"(value: boolean)
set "flightAllowed"(value: boolean)
set "globalTickLengthMs"(value: long)
set "localIp"(value: string)
set "motd"(value: string)
set "playerIdleTimeout"(value: integer)
set "playerList"(value: $PlayerList$$Type)
set "port"(value: integer)
set "preventProxyConnections"(value: boolean)
set "pvpAllowed"(value: boolean)
set "singleplayerProfile"(value: $GameProfile$$Type)
set "statusMessage"(value: $Component$$Type)
}
}

declare module "net.minecraft.server.packs.resources.ResourceManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Set } from "java.util.Set"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $BufferedReader } from "java.io.BufferedReader"
import { $PackResources } from "net.minecraft.server.packs.PackResources"
import { $InputStream } from "java.io.InputStream"

export interface $ResourceManager extends $ResourceProvider {
"getNamespaces"(): $Set<string>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
"listPacks"(): $Stream<$PackResources>
"listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
"listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
get "namespaces"(): $Set<string>
}

export namespace $ResourceManager {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $ResourceManager$$Static implements $ResourceManager {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "net.minecraft.server.level.ChunkHolder$PlayerProvider" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"
import { $List } from "java.util.List"

export interface $ChunkHolder$PlayerProvider {
"getPlayers"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): $List<$ServerPlayer>
}

export namespace $ChunkHolder$PlayerProvider {
const probejs$$marker: never
}
export abstract class $ChunkHolder$PlayerProvider$$Static implements $ChunkHolder$PlayerProvider {
}
}

declare module "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $JsonElement, $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $Gson$$Type } from "com.google.gson.Gson"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $SimpleJsonResourceReloadListenerAccessor } from "net.lixir.vminus.mixins.server.SimpleJsonResourceReloadListenerAccessor"
import { $SimplePreparableReloadListener } from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"

export class $SimpleJsonResourceReloadListener extends $SimplePreparableReloadListener<$Map<$ResourceLocation, $JsonElement>> implements $SimpleJsonResourceReloadListenerAccessor {
constructor(gson0: $Gson$$Type, string1: string)

public "getName"(): string
public static "scanDirectory"(resourceManager0: $ResourceManager$$Type, string1: string, gson2: $Gson$$Type, map3: $Map$$Type<$ResourceLocation$$Type, $JsonElement$$Type>): void
get "name"(): string
}
}

declare module "net.minecraft.server.packs.resources.ReloadableResourceManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Unit$$Type } from "net.minecraft.util.Unit"
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Set } from "java.util.Set"
import { $CompletableFuture$$Type } from "java.util.concurrent.CompletableFuture"
import { $PackType, $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Map, $Map$$Type } from "java.util.Map"
import { $PreparableReloadListener, $PreparableReloadListener$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $Optional } from "java.util.Optional"
import { $ReloadInstance } from "net.minecraft.server.packs.resources.ReloadInstance"
import { $BufferedReader } from "java.io.BufferedReader"
import { $PackResources, $PackResources$$Type } from "net.minecraft.server.packs.PackResources"
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "net.minecraft.server.packs.resources.CloseableResourceManager"
import { $InputStream } from "java.io.InputStream"

export class $ReloadableResourceManager implements $ResourceManager, $AutoCloseable {
readonly "listeners": $List<$PreparableReloadListener>
readonly "type": $PackType

constructor(packType0: $PackType$$Type)

public "close"(): void
public "createReload"(executor0: $Executor$$Type, executor1: $Executor$$Type, completableFuture2: $CompletableFuture$$Type<$Unit$$Type>, list3: $List$$Type<$PackResources$$Type>): $ReloadInstance
public static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
public "getNamespaces"(): $Set<string>
public "getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
public "getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
public "listPacks"(): $Stream<$PackResources>
public "listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
public "listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
public "open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
public "openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
public "registerReloadListener"(preparableReloadListener0: $PreparableReloadListener$$Type): void
public "registerReloadListenerIfNotPresent"(preparableReloadListener0: $PreparableReloadListener$$Type): void
get "resources"(): $CloseableResourceManager
set "resources"(value: $CloseableResourceManager$$Type)
get "namespaces"(): $Set<string>
}
}

declare module "net.minecraft.server.level.ChunkHolder$LevelChangeListener" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $IntConsumer$$Type } from "java.util.function.IntConsumer"
import { $IntSupplier$$Type } from "java.util.function.IntSupplier"

export interface $ChunkHolder$LevelChangeListener {
"onLevelChange"(chunkPos0: $ChunkPos$$Type, intSupplier1: $IntSupplier$$Type, int2: integer, intConsumer3: $IntConsumer$$Type): void
}

export namespace $ChunkHolder$LevelChangeListener {
const probejs$$marker: never
}
export abstract class $ChunkHolder$LevelChangeListener$$Static implements $ChunkHolder$LevelChangeListener {
}
}

declare module "net.minecraft.server.players.StoredUserList" {
import { $StoredUserEntry, $StoredUserEntry$$Type } from "net.minecraft.server.players.StoredUserEntry"
import { $Collection } from "java.util.Collection"
import { $File, $File$$Type } from "java.io.File"

export class $StoredUserList<K = any, V extends $StoredUserEntry<K> = $StoredUserEntry<K>> {
constructor(file0: $File$$Type)

public "add"(v0: V): void
public "get"(k0: K): V
public "getEntries"(): $Collection<V>
public "getFile"(): $File
public "getUserList"(): string[]
public "isEmpty"(): boolean
public "load"(): void
public "remove"(k0: K): void
public "remove"(storedUserEntry0: $StoredUserEntry$$Type<K>): void
public "save"(): void
get "entries"(): $Collection<V>
get "file"(): $File
get "userList"(): string[]
get "empty"(): boolean
}
}

declare module "net.minecraft.server.level.TicketType" {
import { $ChunkPos } from "net.minecraft.world.level.ChunkPos"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Unit } from "net.minecraft.util.Unit"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"

export class $TicketType<T = any> {
static readonly "DRAGON": $TicketType<$Unit>
static readonly "FORCED": $TicketType<$ChunkPos>
static readonly "LIGHT": $TicketType<$ChunkPos>
static readonly "PLAYER": $TicketType<$ChunkPos>
static readonly "PORTAL": $TicketType<$BlockPos>
static readonly "POST_TELEPORT": $TicketType<integer>
static readonly "START": $TicketType<$Unit>
static readonly "UNKNOWN": $TicketType<$ChunkPos>

public static "create"<T>(string0: string, comparator1: $Comparator$$Type<T>, int2: integer): $TicketType<T>
public static "create"<T>(string0: string, comparator1: $Comparator$$Type<T>): $TicketType<T>
public "getComparator"(): $Comparator<T>
public "timeout"(): long
get "comparator"(): $Comparator<T>
}
}

declare module "net.minecraft.server.packs.repository.Pack" {
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $PackCompatibility } from "net.minecraft.server.packs.repository.PackCompatibility"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Pack$ResourcesSupplier$$Type } from "net.minecraft.server.packs.repository.Pack$ResourcesSupplier"
import { $FusionPackMetadata } from "com.supermartijn642.fusion.resources.FusionPackMetadata"
import { $Pack$Position, $Pack$Position$$Type } from "net.minecraft.server.packs.repository.Pack$Position"
import { $PackExtension } from "com.supermartijn642.fusion.extensions.PackExtension"
import { $PackSource, $PackSource$$Type } from "net.minecraft.server.packs.repository.PackSource"
import { $Pack$Info, $Pack$Info$$Type } from "net.minecraft.server.packs.repository.Pack$Info"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $PackResources } from "net.minecraft.server.packs.PackResources"

export class $Pack implements $PackExtension {
public static "create"(string0: string, component1: $Component$$Type, boolean2: boolean, resourcesSupplier3: $Pack$ResourcesSupplier$$Type, info4: $Pack$Info$$Type, packType5: $PackType$$Type, position6: $Pack$Position$$Type, boolean7: boolean, packSource8: $PackSource$$Type): $Pack
public "getChatLink"(boolean0: boolean): $Component
public "getCompatibility"(): $PackCompatibility
public "getDefaultPosition"(): $Pack$Position
public "getDescription"(): $Component
public "getFusionMetadata"(): $FusionPackMetadata
public "getId"(): string
public "getPackSource"(): $PackSource
public "getRequestedFeatures"(): $FeatureFlagSet
public "getTitle"(): $Component
public "isFixedPosition"(): boolean
public "isHidden"(): boolean
public "isRequired"(): boolean
public "open"(): $PackResources
public static "readMetaAndCreate"(string0: string, component1: $Component$$Type, boolean2: boolean, resourcesSupplier3: $Pack$ResourcesSupplier$$Type, packType4: $PackType$$Type, position5: $Pack$Position$$Type, packSource6: $PackSource$$Type): $Pack
public static "readPackInfo"(string0: string, resourcesSupplier1: $Pack$ResourcesSupplier$$Type): $Pack$Info
get "compatibility"(): $PackCompatibility
get "defaultPosition"(): $Pack$Position
get "description"(): $Component
get "fusionMetadata"(): $FusionPackMetadata
get "id"(): string
get "packSource"(): $PackSource
get "requestedFeatures"(): $FeatureFlagSet
get "title"(): $Component
get "fixedPosition"(): boolean
get "hidden"(): boolean
get "required"(): boolean
}
}

declare module "net.minecraft.server.level.ServerLevel" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $ReputationEventType$$Type } from "net.minecraft.world.entity.ai.village.ReputationEventType"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $ParticleOptions, $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $LevelEC } from "com.mega.endinglib.util.mixin.level.LevelEC"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $ServerLevelAccessor } from "net.conczin.immersive_optimization.mixin.ServerLevelAccessor"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Map } from "java.util.Map"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $Path$$Type } from "java.nio.file.Path"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $LongSet } from "it.unimi.dsi.fastutil.longs.LongSet"
import { $RandomSequences, $RandomSequences$$Type } from "net.minecraft.world.RandomSequences"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $DimensionDataStorage } from "net.minecraft.world.level.storage.DimensionDataStorage"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $Stream, $Stream$$Type } from "java.util.stream.Stream"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $IMixinServerLevel } from "com.majruszlibrary.mixin.IMixinServerLevel"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $CustomSpawner$$Type } from "net.minecraft.world.level.CustomSpawner"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $LevelChunk$$Type } from "net.minecraft.world.level.chunk.LevelChunk"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Biome, $Biome$$Type } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $EndDragonFight, $EndDragonFight$$Type } from "net.minecraft.world.level.dimension.end.EndDragonFight"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ServerScoreboard } from "net.minecraft.server.ServerScoreboard"
import { $ReputationEventHandler$$Type } from "net.minecraft.world.entity.ReputationEventHandler"
import { $IServerLevel } from "com.crackerjackbox.mobcontrol.iface.IServerLevel"
import { $ProgressListener$$Type } from "net.minecraft.util.ProgressListener"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $ServerSavedData } from "com.crackerjackbox.mobcontrol.data.ServerSavedData"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $BlockApiCacheImpl$$Type } from "net.fabricmc.fabric.impl.lookup.block.BlockApiCacheImpl"
import { $FireworksJS$$Type } from "dev.latvian.mods.kubejs.level.FireworksJS"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $ServerLevelKJS } from "dev.latvian.mods.kubejs.core.ServerLevelKJS"
import { $PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type } from "net.minecraft.world.level.entity.PersistentEntitySectionManager"
import { $AccessorServerLevel } from "com.mega.endinglib.mixin.accessor.AccessorServerLevel"
import { $LevelStem$$Type } from "net.minecraft.world.level.dimension.LevelStem"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $PoiManager } from "net.minecraft.world.entity.ai.village.poi.PoiManager"
import { $ExplosionJS } from "dev.latvian.mods.kubejs.level.ExplosionJS"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $IntProvider } from "net.minecraft.util.valueproviders.IntProvider"
import { $EnderDragon } from "net.minecraft.world.entity.boss.enderdragon.EnderDragon"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $Raid } from "net.minecraft.world.entity.raid.Raid"
import { $ChunkProgressListener$$Type } from "net.minecraft.server.level.progress.ChunkProgressListener"
import { $PortalForcer } from "net.minecraft.world.level.portal.PortalForcer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Entity$RemovalReason$$Type } from "net.minecraft.world.entity.Entity$RemovalReason"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $StructureTemplateManager } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $BoundingBox$$Type } from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import { $Optional } from "java.util.Optional"
import { $Level } from "net.minecraft.world.level.Level"
import { $StructureManager } from "net.minecraft.world.level.StructureManager"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $ServerLevelData, $ServerLevelData$$Type } from "net.minecraft.world.level.storage.ServerLevelData"
import { $Function$$Type } from "java.util.function.Function"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $Structure$$Type } from "net.minecraft.world.level.levelgen.structure.Structure"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldGenLevel } from "net.minecraft.world.level.WorldGenLevel"
import { $ServerWorldCache } from "net.fabricmc.fabric.impl.lookup.block.ServerWorldCache"
import { $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Raids } from "net.minecraft.world.entity.raid.Raids"
import { $LevelTicks } from "net.minecraft.world.ticks.LevelTicks"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class, $Class$$Type } from "java.lang.Class"

export class $ServerLevel extends $Level implements $WorldGenLevel, $AccessorServerLevel, $LevelEC, $IMixinServerLevel, $ServerLevelAccessor, $ServerWorldCache, $IServerLevel, $ServerLevelKJS {
static readonly "END_SPAWN_POINT": $BlockPos
static readonly "RAIN_DELAY": $IntProvider
static readonly "RAIN_DURATION": $IntProvider
static readonly "THUNDER_DURATION": $IntProvider
readonly "serverLevelData": $ServerLevelData

constructor(minecraftServer0: $MinecraftServer$$Type, executor1: $Executor$$Type, levelStorageAccess2: $LevelStorageSource$LevelStorageAccess$$Type, serverLevelData3: $ServerLevelData$$Type, resourceKey4: $ResourceKey$$Type<$Level>, levelStem5: $LevelStem$$Type, chunkProgressListener6: $ChunkProgressListener$$Type, boolean7: boolean, long8: long, list9: $List$$Type<$CustomSpawner$$Type>, boolean10: boolean, randomSequences11: $RandomSequences$$Type)

public "addDuringCommandTeleport"(serverPlayer0: $ServerPlayer$$Type): void
public "addDuringPortalTeleport"(serverPlayer0: $ServerPlayer$$Type): void
public "addDuringTeleport"(entity0: $Entity$$Type): void
public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "addFreshEntityWithPassengers"(entity0: $Entity$$Type): void
public "addLegacyChunkEntities"(stream0: $Stream$$Type<$Entity$$Type>): void
public "addNewPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "addRespawnedPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "addWithUUID"(entity0: $Entity$$Type): boolean
public "addWorldGenChunkEntities"(stream0: $Stream$$Type<$Entity$$Type>): void
public "areEntitiesLoaded"(long0: long): boolean
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "canSleepThroughNights"(): boolean
public "clearBlockEvents"(boundingBox0: $BoundingBox$$Type): void
public static "clearNullReferences"(): void
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "createEntity"(type: $EntityType$$Type<any>): $Entity
public "createEntityList"(entities: $Collection$$Type<$Entity$$Type>): $EntityArrayList
public "createExplosion"(x: double, y: double, z: double): $ExplosionJS
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "enabledFeatures"(): $FeatureFlagSet
public "ensureCanWrite"(blockPos0: $BlockPos$$Type): boolean
public "fabric_invalidateCache"(pos: $BlockPos$$Type): void
public "fabric_registerCache"(pos: $BlockPos$$Type, cache: $BlockApiCacheImpl$$Type): void
public "findClosestBiome3d"(predicate0: $Predicate$$Type<$Holder$$Type<$Biome$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, int3: integer, int4: integer): $Pair<$BlockPos, $Holder<$Biome>>
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findNearestMapStructure"(tagKey0: $TagKey$$Type<$Structure$$Type>, blockPos1: $BlockPos$$Type, int2: integer, boolean3: boolean): $BlockPos
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "getAllEntities"(): $Iterable<$Entity>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBiomeFabric"(pos: $BlockPos$$Type): $Holder<$Biome>
public "getBlock"(blockEntity: $BlockEntity$$Type): $BlockContainerJS
public "getBlock"(x: integer, y: integer, z: integer): $BlockContainerJS
public "getBlock"(pos: $BlockPos$$Type): $BlockContainerJS
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
/** @deprecated */
public "getBlockEntityRenderAttachment"(pos: $BlockPos$$Type): any
public "getBlockEntityRenderData"(pos: $BlockPos$$Type): any
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTicks<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getDataStorage"(): $DimensionDataStorage
public "getDifficulty"(): $Difficulty
public "getDimension"(): $ResourceLocation
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getDisplayName"(): $Component
public "getDragonFight"(): $EndDragonFight
public "getDragons"(): $List<$EnderDragon>
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, predicate1: $Predicate$$Type<T>): $List<T>
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, predicate1: $Predicate$$Type<T>, list2: $List$$Type<T>): void
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, predicate1: $Predicate$$Type<T>, list2: $List$$Type<T>, int3: integer): void
public "getEntities"(): $EntityArrayList
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntity"(uUID0: $UUID$$Type): $Entity
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
/** @deprecated */
public "getEntityOrPart"(int0: integer): $Entity
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getForcedChunks"(): $LongSet
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
public "getLevel"(): $ServerLevel
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getLogicalHeight"(): integer
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getName"(): $Component
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPartEntities"(): $Collection<$PartEntity<any>>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPersistentData"(): $CompoundTag
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getPlayers"(predicate0: $Predicate$$Type<$ServerPlayer$$Type>, int1: integer): $List<$ServerPlayer>
public "getPlayers"(predicate0: $Predicate$$Type<$ServerPlayer$$Type>): $List<$ServerPlayer>
public "getPlayers"(): $EntityArrayList
public "getPoiManager"(): $PoiManager
public "getPortalForcer"(): $PortalForcer
public "getRaidAt"(blockPos0: $BlockPos$$Type): $Raid
public "getRaids"(): $Raids
public "getRandomPlayer"(): $ServerPlayer
public "getRandomSequence"(resourceLocation0: $ResourceLocation$$Type): $RandomSource
public "getRandomSequences"(): $RandomSequences
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getScoreboard"(): $ServerScoreboard
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getSeed"(): long
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSide"(): $ScriptType
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getStructureManager"(): $StructureTemplateManager
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getWatchdogStats"(): string
public "hasBiomes"(): boolean
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isCloseToVillage"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isFlat"(): boolean
public "isHandlingTick"(): boolean
public "isNaturalSpawningAllowed"(blockPos0: $BlockPos$$Type): boolean
public "isNaturalSpawningAllowed"(chunkPos0: $ChunkPos$$Type): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isOverworld"(): boolean
public "isPositionEntityTicking"(blockPos0: $BlockPos$$Type): boolean
public "isRaided"(blockPos0: $BlockPos$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isVillage"(blockPos0: $BlockPos$$Type): boolean
public "isVillage"(sectionPos0: $SectionPos$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public static "makeObsidianPlatform"(serverLevel0: $ServerLevel$$Type): void
public "mobControl$savedData"(): $ServerSavedData
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "onReputationEvent"(reputationEventType0: $ReputationEventType$$Type, entity1: $Entity$$Type, reputationEventHandler2: $ReputationEventHandler$$Type): void
public "onStructureStartsAvailable"(chunkAccess0: $ChunkAccess$$Type): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removePlayerImmediately"(serverPlayer0: $ServerPlayer$$Type, removalReason1: $Entity$RemovalReason$$Type): void
public "resetEmptyTime"(): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "save"(progressListener0: $ProgressListener$$Type, boolean1: boolean, boolean2: boolean): void
public "saveDebugReport"(path0: $Path$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "sectionsToVillage"(sectionPos0: $SectionPos$$Type): integer
public "sendParticles"<T extends $ParticleOptions>(t0: T, double1: double, double2: double, double3: double, int4: integer, double5: double, double6: double, double7: double, double8: double): integer
public "sendParticles"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean, double2: double, double3: double, double4: double, packet5: $Packet$$Type<any>): boolean
public "sendParticles"<T extends $ParticleOptions>(serverPlayer0: $ServerPlayer$$Type, t1: T, boolean2: boolean, double3: double, double4: double, double5: double, int6: integer, double7: double, double8: double, double9: double, double10: double): boolean
public "setChunkForced"(int0: integer, int1: integer, boolean2: boolean): boolean
public "setCurrentlyGenerating"(supplier0: $Supplier$$Type<string>): void
public "setDayTime"(long0: long): void
public "setDefaultSpawnPos"(blockPos0: $BlockPos$$Type, float1: float): void
/** @deprecated */
public "setDragonFight"(endDragonFight0: $EndDragonFight$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTime"(time: long): void
public "setWeatherParameters"(int0: integer, int1: integer, boolean2: boolean, boolean3: boolean): void
public "spawnFireworks"(x: double, y: double, z: double, f: $FireworksJS$$Type): void
public "spawnLightning"(x: double, y: double, z: double, effectOnly: boolean, player: $ServerPlayer$$Type): void
public "spawnLightning"(x: double, y: double, z: double, effectOnly: boolean): void
public "spawnParticles"(options: $ParticleOptions$$Type, overrideLimiter: boolean, x: double, y: double, z: double, vx: double, vy: double, vz: double, count: integer, speed: double): void
public "startTickingChunk"(levelChunk0: $LevelChunk$$Type): void
public "startTracking"(): void
public static "startTracking"(object0: any): void
public "structureManager"(): $StructureManager
public "tell"(message: $Component$$Type): void
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
public "tickChunk"(levelChunk0: $LevelChunk$$Type, int1: integer): void
public "tickCustomSpawners"(boolean0: boolean, boolean1: boolean): void
public "tickNonPassenger"(entity0: $Entity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
public "tryAddFreshEntityWithPassengers"(entity0: $Entity$$Type): boolean
public "unload"(levelChunk0: $LevelChunk$$Type): void
public "updateSleepingPlayerList"(): void
public "wrap"(): $WeakReference<$Trackable>
get "entityManager"(): $PersistentEntitySectionManager<$Entity>
set "entityManager"(value: $PersistentEntitySectionManager$$Type<$Entity$$Type>)
get "noSave"(): boolean
set "noSave"(value: boolean)
get "allEntities"(): $Iterable<$Entity>
get "blockTicks"(): $LevelTicks<$Block>
get "dataStorage"(): $DimensionDataStorage
get "difficulty"(): $Difficulty
get "dimension"(): $ResourceLocation
get "displayName"(): $Component
get "dragonFight"(): $EndDragonFight
get "dragons"(): $List<$EnderDragon>
get "entities"(): $EntityArrayList
get "forcedChunks"(): $LongSet
get "height"(): integer
get "level"(): $ServerLevel
get "logicalHeight"(): integer
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "name"(): $Component
get "partEntities"(): $Collection<$PartEntity<any>>
get "persistentData"(): $CompoundTag
get "players"(): $EntityArrayList
get "poiManager"(): $PoiManager
get "portalForcer"(): $PortalForcer
get "raids"(): $Raids
get "randomPlayer"(): $ServerPlayer
get "randomSequences"(): $RandomSequences
get "scoreboard"(): $ServerScoreboard
get "sectionsCount"(): integer
get "seed"(): long
get "side"(): $ScriptType
get "watchdogStats"(): string
get "flat"(): boolean
get "handlingTick"(): boolean
get "overworld"(): boolean
set "currentlyGenerating"(value: $Supplier$$Type<string>)
set "dragonFight"(value: $EndDragonFight$$Type)
set "statusMessage"(value: $Component$$Type)
set "time"(value: long)
}
}

declare module "net.minecraft.server.packs.repository.PackRepository" {
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List } from "java.util.List"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $Set, $Set$$Type } from "java.util.Set"
import { $RepositorySource, $RepositorySource$$Type } from "net.minecraft.server.packs.repository.RepositorySource"
import { $Pack } from "net.minecraft.server.packs.repository.Pack"
import { $PackResources } from "net.minecraft.server.packs.PackResources"

export class $PackRepository {
constructor(...repositorySource0s: $RepositorySource$$Type[])

public "addPack"(string0: string): boolean
public "addPackFinder"(repositorySource0: $RepositorySource$$Type): void
public "getAvailableIds"(): $Collection<string>
public "getAvailablePacks"(): $Collection<$Pack>
public "getPack"(string0: string): $Pack
public "getRequestedFeatureFlags"(): $FeatureFlagSet
public "getSelectedIds"(): $Collection<string>
public "getSelectedPacks"(): $Collection<$Pack>
public "isAvailable"(string0: string): boolean
public "openAllSelected"(): $List<$PackResources>
public "reload"(): void
public "removePack"(string0: string): boolean
public "setSelected"(collection0: $Collection$$Type<string>): void
get "sources"(): $Set<$RepositorySource>
set "sources"(value: $Set$$Type<$RepositorySource$$Type>)
get "availableIds"(): $Collection<string>
get "availablePacks"(): $Collection<$Pack>
get "requestedFeatureFlags"(): $FeatureFlagSet
get "selectedIds"(): $Collection<string>
get "selectedPacks"(): $Collection<$Pack>
set "selected"(value: $Collection$$Type<string>)
}
}

declare module "net.minecraft.server.level.ServerBossEvent" {
import { $BossEvent$BossBarOverlay$$Type } from "net.minecraft.world.BossEvent$BossBarOverlay"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $BossEvent$BossBarColor$$Type } from "net.minecraft.world.BossEvent$BossBarColor"
import { $Collection } from "java.util.Collection"
import { $BossEvent } from "net.minecraft.world.BossEvent"

export class $ServerBossEvent extends $BossEvent {
constructor(component0: $Component$$Type, bossBarColor1: $BossEvent$BossBarColor$$Type, bossBarOverlay2: $BossEvent$BossBarOverlay$$Type)

public "addPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "getPlayers"(): $Collection<$ServerPlayer>
public "isVisible"(): boolean
public "removeAllPlayers"(): void
public "removePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "setVisible"(boolean0: boolean): void
get "players"(): $Collection<$ServerPlayer>
get "visible"(): boolean
set "visible"(value: boolean)
}
}

declare module "net.minecraft.server.packs.AbstractPackResources" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PackResources$ResourceOutput$$Type } from "net.minecraft.server.packs.PackResources$ResourceOutput"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $MetadataSectionSerializer$$Type } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $PackResources } from "net.minecraft.server.packs.PackResources"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export class $AbstractPackResources implements $PackResources {
public "close"(): void
public "getChildren"(): $Collection<$PackResources>
public static "getMetadataFromStream"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>, inputStream1: $InputStream$$Type): T
public "getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
public "getNamespaces"(packType0: $PackType$$Type): $Set<string>
public "getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
public "getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
public "isBuiltin"(): boolean
public "isHidden"(): boolean
public "listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
public "packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}
}

declare module "net.minecraft.server.packs.PackResources" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PackResources$ResourceOutput$$Type } from "net.minecraft.server.packs.PackResources$ResourceOutput"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $MetadataSectionSerializer$$Type } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream } from "java.io.InputStream"
import { $IForgePackResources } from "net.minecraftforge.common.extensions.IForgePackResources"

export interface $PackResources extends $AutoCloseable, $IForgePackResources {
"close"(): void
"getChildren"(): $Collection<$PackResources>
"getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
"getNamespaces"(packType0: $PackType$$Type): $Set<string>
"getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
"getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
"isBuiltin"(): boolean
"isHidden"(): boolean
"listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
"packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}

export namespace $PackResources {
const METADATA_EXTENSION: string
const PACK_META: string
}
export abstract class $PackResources$$Static implements $PackResources {
static readonly "METADATA_EXTENSION": string
static readonly "PACK_META": string

}
}

declare module "net.minecraft.server.packs.resources.PreparableReloadListener" {
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"

export interface $PreparableReloadListener {
"getName"(): string
"reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}

export namespace $PreparableReloadListener {
const probejs$$marker: never
}
export abstract class $PreparableReloadListener$$Static implements $PreparableReloadListener {
}
}

declare module "net.minecraft.server.packs.VanillaPackResources" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $MetadataSectionSerializer$$Type } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $VanillaPackResourcesAccessor } from "team.creative.creativecore.mixin.VanillaPackResourcesAccessor"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PackResources$ResourceOutput$$Type } from "net.minecraft.server.packs.PackResources$ResourceOutput"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Path$$Type } from "java.nio.file.Path"
import { $PackResources } from "net.minecraft.server.packs.PackResources"
import { $InputStream } from "java.io.InputStream"

export class $VanillaPackResources implements $PackResources, $VanillaPackResourcesAccessor {
public "asProvider"(): $ResourceProvider
public "close"(): void
public "getChildren"(): $Collection<$PackResources>
public "getMetadataSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): T
public "getNamespaces"(packType0: $PackType$$Type): $Set<string>
public "getResource"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type): $IoSupplier<$InputStream>
public "getRootResource"(...string0s: string[]): $IoSupplier<$InputStream>
public "isBuiltin"(): boolean
public "isHidden"(): boolean
public "listRawPaths"(packType0: $PackType$$Type, resourceLocation1: $ResourceLocation$$Type, consumer2: $Consumer$$Type<$Path$$Type>): void
public "listResources"(packType0: $PackType$$Type, string1: string, string2: string, resourceOutput3: $PackResources$ResourceOutput$$Type): void
public "packId"(): string
get "children"(): $Collection<$PackResources>
get "builtin"(): boolean
get "hidden"(): boolean
}
}

declare module "net.minecraft.server.packs.PackResources$ResourceOutput" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BiConsumer, $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $IoSupplier, $IoSupplier$$Type } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream, $InputStream$$Type } from "java.io.InputStream"

export interface $PackResources$ResourceOutput extends $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>> {
"accept"(resourceLocation0: $ResourceLocation$$Type, ioSupplier1: $IoSupplier$$Type<$InputStream>): void
"andThen"(biConsumer0: $BiConsumer$$Type<$ResourceLocation$$Type, $IoSupplier$$Type<$InputStream$$Type>>): $BiConsumer<$ResourceLocation, $IoSupplier<$InputStream>>
}

export namespace $PackResources$ResourceOutput {
const probejs$$marker: never
}
export abstract class $PackResources$ResourceOutput$$Static implements $PackResources$ResourceOutput {
}
}

declare module "net.minecraft.server.packs.resources.ResourceMetadata" {
import { $Optional } from "java.util.Optional"
import { $MetadataSectionSerializer$$Type } from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import { $IoSupplier } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream$$Type } from "java.io.InputStream"

export interface $ResourceMetadata {
"getSection"<T>(metadataSectionSerializer0: $MetadataSectionSerializer$$Type<T>): $Optional<T>
}

export namespace $ResourceMetadata {
const EMPTY: $ResourceMetadata
const EMPTY_SUPPLIER: $IoSupplier<$ResourceMetadata>
function fromJsonStream(inputStream0: $InputStream$$Type): $ResourceMetadata
}
export abstract class $ResourceMetadata$$Static implements $ResourceMetadata {
static readonly "EMPTY": $ResourceMetadata
static readonly "EMPTY_SUPPLIER": $IoSupplier<$ResourceMetadata>

static "fromJsonStream"(inputStream0: $InputStream$$Type): $ResourceMetadata
}
}

declare module "net.minecraft.server.packs.resources.ReloadInstance" {
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"

export interface $ReloadInstance {
"checkExceptions"(): void
"done"(): $CompletableFuture<any>
"getActualProgress"(): float
"isDone"(): boolean
get "actualProgress"(): float
}

export namespace $ReloadInstance {
const probejs$$marker: never
}
export abstract class $ReloadInstance$$Static implements $ReloadInstance {
}
}

declare module "net.minecraft.server.RegistryLayer" {
import { $Enum } from "java.lang.Enum"
import { $LayeredRegistryAccess } from "net.minecraft.core.LayeredRegistryAccess"

export class $RegistryLayer extends $Enum<$RegistryLayer> {
static readonly "DIMENSIONS": $RegistryLayer
static readonly "RELOADABLE": $RegistryLayer
static readonly "STATIC": $RegistryLayer
static readonly "WORLDGEN": $RegistryLayer

public static "createRegistryAccess"(): $LayeredRegistryAccess<$RegistryLayer>
public static "valueOf"(string0: string): $RegistryLayer
public static "values"(): $RegistryLayer[]
}
}

declare module "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkTaskPriorityQueueSorter$Message<T = any> {
}
}

declare module "net.minecraft.server.packs.resources.FallbackResourceManager$PackEntry" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Predicate } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $Record } from "java.lang.Record"
import { $PackResources } from "net.minecraft.server.packs.PackResources"

export class $FallbackResourceManager$PackEntry extends $Record {
public "filter"(): $Predicate<$ResourceLocation>
public "filterAll"(collection0: $Collection$$Type<$ResourceLocation$$Type>): void
public "isFiltered"(resourceLocation0: $ResourceLocation$$Type): boolean
public "name"(): string
public "resources"(): $PackResources
}
}

declare module "net.minecraft.server.TickTask" {
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export class $TickTask implements $Runnable {
constructor(int0: integer, runnable1: $Runnable$$Type)

public "getTick"(): integer
public "run"(): void
get "tick"(): integer
}
}

declare module "net.minecraft.server.level.ServerChunkCache" {
import { $Either } from "com.mojang.datafixers.util.Either"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ChunkMap } from "net.minecraft.server.level.ChunkMap"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $ChunkHolder$ChunkLoadingFailure } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $ChunkProgressListener$$Type } from "net.minecraft.server.level.progress.ChunkProgressListener"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $DimensionDataStorage } from "net.minecraft.world.level.storage.DimensionDataStorage"
import { $ChunkAccess } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkGenerator, $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkStatusUpdateListener$$Type } from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TicketType$$Type } from "net.minecraft.server.level.TicketType"
import { $ChunkScanAccess } from "net.minecraft.world.level.chunk.storage.ChunkScanAccess"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $RandomState } from "net.minecraft.world.level.levelgen.RandomState"
import { $NaturalSpawner$SpawnState } from "net.minecraft.world.level.NaturalSpawner$SpawnState"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"
import { $ChunkGeneratorStructureState } from "net.minecraft.world.level.chunk.ChunkGeneratorStructureState"
import { $PoiManager } from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export class $ServerChunkCache extends $ChunkSource {
readonly "chunkMap": $ChunkMap
readonly "level": $ServerLevel

constructor(serverLevel0: $ServerLevel$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer2: $DataFixer$$Type, structureTemplateManager3: $StructureTemplateManager$$Type, executor4: $Executor$$Type, chunkGenerator5: $ChunkGenerator$$Type, int6: integer, int7: integer, boolean8: boolean, chunkProgressListener9: $ChunkProgressListener$$Type, chunkStatusUpdateListener10: $ChunkStatusUpdateListener$$Type, supplier11: $Supplier$$Type<$DimensionDataStorage>)

public "addEntity"(entity0: $Entity$$Type): void
public "addRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T, boolean4: boolean): void
public "addRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "blockChanged"(blockPos0: $BlockPos$$Type): void
public "broadcast"(entity0: $Entity$$Type, packet1: $Packet$$Type<any>): void
public "broadcastAndSend"(entity0: $Entity$$Type, packet1: $Packet$$Type<any>): void
public "chunkScanner"(): $ChunkScanAccess
public "getChunkDebugData"(chunkPos0: $ChunkPos$$Type): string
public "getChunkFuture"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "getDataStorage"(): $DimensionDataStorage
public "getGenerator"(): $ChunkGenerator
public "getGeneratorState"(): $ChunkGeneratorStructureState
public "getLastSpawnState"(): $NaturalSpawner$SpawnState
public "getPendingTasksCount"(): integer
public "getPoiManager"(): $PoiManager
public "getTickingGenerated"(): integer
public "handler$emj000$onSaveALlChunks"(boolean0: boolean, callbackInfo1: $CallbackInfo$$Type): void
public "isPositionTicking"(long0: long): boolean
public "move"(serverPlayer0: $ServerPlayer$$Type): void
public "onLightUpdate"(lightLayer0: $LightLayer$$Type, sectionPos1: $SectionPos$$Type): void
public "pollTask"(): boolean
public "randomState"(): $RandomState
public "removeEntity"(entity0: $Entity$$Type): void
public "removeRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T, boolean4: boolean): void
public "removeRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "removeTicketsOnClosing"(): void
public "runDistanceManagerUpdates"(): boolean
public "save"(boolean0: boolean): void
public "setSimulationDistance"(int0: integer): void
public "setViewDistance"(int0: integer): void
get "dataStorage"(): $DimensionDataStorage
get "generator"(): $ChunkGenerator
get "generatorState"(): $ChunkGeneratorStructureState
get "lastSpawnState"(): $NaturalSpawner$SpawnState
get "pendingTasksCount"(): integer
get "poiManager"(): $PoiManager
get "tickingGenerated"(): integer
set "simulationDistance"(value: integer)
set "viewDistance"(value: integer)
}
}

declare module "net.minecraft.server.packs.repository.PackSource" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $UnaryOperator, $UnaryOperator$$Type } from "java.util.function.UnaryOperator"

export interface $PackSource {
"decorate"(component0: $Component$$Type): $Component
"shouldAddAutomatically"(): boolean
}

export namespace $PackSource {
const BUILT_IN: $PackSource
const DEFAULT: $PackSource
const FEATURE: $PackSource
const NO_DECORATION: $UnaryOperator<$Component>
const SERVER: $PackSource
const WORLD: $PackSource
function create(unaryOperator0: $UnaryOperator$$Type<$Component$$Type>, boolean1: boolean): $PackSource
}
export abstract class $PackSource$$Static implements $PackSource {
static readonly "BUILT_IN": $PackSource
static readonly "DEFAULT": $PackSource
static readonly "FEATURE": $PackSource
static readonly "NO_DECORATION": $UnaryOperator<$Component>
static readonly "SERVER": $PackSource
static readonly "WORLD": $PackSource

static "create"(unaryOperator0: $UnaryOperator$$Type<$Component$$Type>, boolean1: boolean): $PackSource
}
}

declare module "net.minecraft.server.players.GameProfileCache$GameProfileInfo" {
import { $Date } from "java.util.Date"
import { $GameProfile } from "com.mojang.authlib.GameProfile"

export class $GameProfileCache$GameProfileInfo {
public "getExpirationDate"(): $Date
public "getLastAccess"(): long
public "getProfile"(): $GameProfile
public "setLastAccess"(long0: long): void
get "expirationDate"(): $Date
get "lastAccess"(): long
get "profile"(): $GameProfile
set "lastAccess"(value: long)
}
}

declare module "net.minecraft.server.ServerFunctionManager$QueuedCommand" {
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ServerFunctionManager$$Type } from "net.minecraft.server.ServerFunctionManager"
import { $Deque$$Type } from "java.util.Deque"
import { $CommandFunction$Entry$$Type } from "net.minecraft.commands.CommandFunction$Entry"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "net.minecraft.server.ServerFunctionManager$TraceCallbacks"

export class $ServerFunctionManager$QueuedCommand {
constructor(commandSourceStack0: $CommandSourceStack$$Type, int1: integer, entry2: $CommandFunction$Entry$$Type)

public "execute"(serverFunctionManager0: $ServerFunctionManager$$Type, deque1: $Deque$$Type<$ServerFunctionManager$QueuedCommand$$Type>, int2: integer, traceCallbacks3: $ServerFunctionManager$TraceCallbacks$$Type): void
}
}

declare module "net.minecraft.server.ServerFunctionManager$TraceCallbacks" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"

export interface $ServerFunctionManager$TraceCallbacks {
"onCall"(int0: integer, resourceLocation1: $ResourceLocation$$Type, int2: integer): void
"onCommand"(int0: integer, string1: string): void
"onError"(int0: integer, string1: string): void
"onReturn"(int0: integer, string1: string, int2: integer): void
}

export namespace $ServerFunctionManager$TraceCallbacks {
const probejs$$marker: never
}
export abstract class $ServerFunctionManager$TraceCallbacks$$Static implements $ServerFunctionManager$TraceCallbacks {
}
}

declare module "net.minecraft.server.packs.metadata.MetadataSectionSerializer" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"

export interface $MetadataSectionSerializer<T = any> {
"fromJson"(jsonObject0: $JsonObject$$Type): T
"getMetadataSectionName"(): string
get "metadataSectionName"(): string
}

export namespace $MetadataSectionSerializer {
const probejs$$marker: never
}
export abstract class $MetadataSectionSerializer$$Static<T = any> implements $MetadataSectionSerializer<T> {
}
}

declare module "net.minecraft.server.packs.resources.MultiPackResourceManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $FabricLifecycledResourceManager } from "net.fabricmc.fabric.impl.resource.loader.FabricLifecycledResourceManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Set } from "java.util.Set"
import { $PackType, $PackType$$Type } from "net.minecraft.server.packs.PackType"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Map, $Map$$Type } from "java.util.Map"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Optional } from "java.util.Optional"
import { $BufferedReader } from "java.io.BufferedReader"
import { $FallbackResourceManager } from "net.minecraft.server.packs.resources.FallbackResourceManager"
import { $PackResources, $PackResources$$Type } from "net.minecraft.server.packs.PackResources"
import { $CloseableResourceManager } from "net.minecraft.server.packs.resources.CloseableResourceManager"
import { $InputStream } from "java.io.InputStream"

export class $MultiPackResourceManager implements $CloseableResourceManager, $FabricLifecycledResourceManager {
readonly "namespacedManagers": $Map<string, $FallbackResourceManager>
readonly "packs": $List<$PackResources>

constructor(packType0: $PackType$$Type, list1: $List$$Type<$PackResources$$Type>)

public "close"(): void
public "fabric_getResourceType"(): $PackType
public static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
public "getNamespaces"(): $Set<string>
public "getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
public "getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
public "getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
public "listPacks"(): $Stream<$PackResources>
public "listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
public "listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
public "open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
public "openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
get "namespaces"(): $Set<string>
}
}

declare module "net.minecraft.server.ServerAdvancementManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Advancement } from "net.minecraft.advancements.Advancement"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $LootDataManager$$Type } from "net.minecraft.world.level.storage.loot.LootDataManager"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $SimpleJsonResourceReloadListener } from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"
import { $ICondition$IContext$$Type } from "net.minecraftforge.common.crafting.conditions.ICondition$IContext"
import { $IdentifiableResourceReloadListener } from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"

export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener implements $IdentifiableResourceReloadListener {
/** @deprecated */
constructor(lootDataManager0: $LootDataManager$$Type)
constructor(lootDataManager0: $LootDataManager$$Type, iContext1: $ICondition$IContext$$Type)

public "getAdvancement"(resourceLocation0: $ResourceLocation$$Type): $Advancement
public "getAllAdvancements"(): $Collection<$Advancement>
public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "allAdvancements"(): $Collection<$Advancement>
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "name"(): string
}
}

declare module "net.minecraft.server.packs.resources.CloseableResourceManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ResourceManager } from "net.minecraft.server.packs.resources.ResourceManager"
import { $Set } from "java.util.Set"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $ResourceProvider } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $BufferedReader } from "java.io.BufferedReader"
import { $PackResources } from "net.minecraft.server.packs.PackResources"
import { $InputStream } from "java.io.InputStream"

export interface $CloseableResourceManager extends $ResourceManager, $AutoCloseable {
"close"(): void
"getNamespaces"(): $Set<string>
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"getResourceStack"(resourceLocation0: $ResourceLocation$$Type): $List<$Resource>
"listPacks"(): $Stream<$PackResources>
"listResourceStacks"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $List<$Resource>>
"listResources"(string0: string, predicate1: $Predicate$$Type<$ResourceLocation$$Type>): $Map<$ResourceLocation, $Resource>
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
get "namespaces"(): $Set<string>
}

export namespace $CloseableResourceManager {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $CloseableResourceManager$$Static implements $CloseableResourceManager {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "net.minecraft.server.packs.repository.Pack$Info" {
import { $FeatureFlagSet, $FeatureFlagSet$$Type } from "net.minecraft.world.flag.FeatureFlagSet"
import { $PackCompatibility } from "net.minecraft.server.packs.repository.PackCompatibility"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"

export class $Pack$Info extends $Record {
constructor(component0: $Component$$Type, int1: integer, featureFlagSet2: $FeatureFlagSet$$Type)
constructor(description: $Component$$Type, dataFormat: integer, resourceFormat: integer, requestedFeatures: $FeatureFlagSet$$Type, hidden: boolean)

public "compatibility"(packType0: $PackType$$Type): $PackCompatibility
public "dataFormat"(): integer
public "description"(): $Component
public "getFormat"(packType0: $PackType$$Type): integer
public "hidden"(): boolean
public "requestedFeatures"(): $FeatureFlagSet
public "resourceFormat"(): integer
}
}

declare module "net.minecraft.server.bossevents.CustomBossEvent" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Collection$$Type } from "java.util.Collection"
import { $UUID$$Type } from "java.util.UUID"
import { $ServerBossEvent } from "net.minecraft.server.level.ServerBossEvent"

export class $CustomBossEvent extends $ServerBossEvent {
constructor(resourceLocation0: $ResourceLocation$$Type, component1: $Component$$Type)

public "addOfflinePlayer"(uUID0: $UUID$$Type): void
public "getDisplayName"(): $Component
public "getMax"(): integer
public "getTextId"(): $ResourceLocation
public "getValue"(): integer
public static "load"(compoundTag0: $CompoundTag$$Type, resourceLocation1: $ResourceLocation$$Type): $CustomBossEvent
public "onPlayerConnect"(serverPlayer0: $ServerPlayer$$Type): void
public "onPlayerDisconnect"(serverPlayer0: $ServerPlayer$$Type): void
public "save"(): $CompoundTag
public "setMax"(int0: integer): void
public "setPlayers"(collection0: $Collection$$Type<$ServerPlayer$$Type>): boolean
public "setValue"(int0: integer): void
get "displayName"(): $Component
get "max"(): integer
get "textId"(): $ResourceLocation
get "value"(): integer
set "max"(value: integer)
set "players"(value: $Collection$$Type<$ServerPlayer$$Type>)
set "value"(value: integer)
}
}

declare module "net.minecraft.server.level.FullChunkStatus" {
import { $Enum } from "java.lang.Enum"

export class $FullChunkStatus extends $Enum<$FullChunkStatus> {
static readonly "BLOCK_TICKING": $FullChunkStatus
static readonly "ENTITY_TICKING": $FullChunkStatus
static readonly "FULL": $FullChunkStatus
static readonly "INACCESSIBLE": $FullChunkStatus

public "isOrAfter"(fullChunkStatus0: $FullChunkStatus$$Type): boolean
public static "valueOf"(string0: string): $FullChunkStatus
public static "values"(): $FullChunkStatus[]
}
}

declare module "net.minecraft.server.packs.resources.IoSupplier" {
import { $ZipFile$$Type } from "java.util.zip.ZipFile"
import { $Path$$Type } from "java.nio.file.Path"
import { $ZipEntry$$Type } from "java.util.zip.ZipEntry"
import { $InputStream } from "java.io.InputStream"

export interface $IoSupplier<T = any> {
"get"(): T
}

export namespace $IoSupplier {
function create(path0: $Path$$Type): $IoSupplier<$InputStream>
function create(zipFile0: $ZipFile$$Type, zipEntry1: $ZipEntry$$Type): $IoSupplier<$InputStream>
}
export abstract class $IoSupplier$$Static<T = any> implements $IoSupplier<T> {
static "create"(path0: $Path$$Type): $IoSupplier<$InputStream>
static "create"(zipFile0: $ZipFile$$Type, zipEntry1: $ZipEntry$$Type): $IoSupplier<$InputStream>
}
}

declare module "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkHolder$ChunkLoadingFailure {
}

export namespace $ChunkHolder$ChunkLoadingFailure {
const UNLOADED: $ChunkHolder$ChunkLoadingFailure
}
export abstract class $ChunkHolder$ChunkLoadingFailure$$Static implements $ChunkHolder$ChunkLoadingFailure {
static readonly "UNLOADED": $ChunkHolder$ChunkLoadingFailure

}
}

declare module "net.minecraft.server.level.ChunkMap" {
import { $IllegalStateException$$Type } from "java.lang.IllegalStateException"
import { $LevelChunk } from "net.minecraft.world.level.chunk.LevelChunk"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $ChunkHolder, $ChunkHolder$$Type } from "net.minecraft.server.level.ChunkHolder"
import { $AccessorChunkMap } from "com.mega.endinglib.mixin.accessor.AccessorChunkMap"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $LightChunkGetter$$Type } from "net.minecraft.world.level.chunk.LightChunkGetter"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $ChunkHolder$PlayerProvider } from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import { $ObjectIterator } from "it.unimi.dsi.fastutil.objects.ObjectIterator"
import { $ThreadedAnvilChunkStorageAccessor } from "tocraft.walkers.mixin.ThreadedAnvilChunkStorageAccessor"
import { $ChunkHolder$ChunkLoadingFailure } from "net.minecraft.server.level.ChunkHolder$ChunkLoadingFailure"
import { $LevelStorageSource$LevelStorageAccess$$Type } from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import { $ReportedException } from "net.minecraft.ReportedException"
import { $DistanceManager } from "net.minecraft.server.level.DistanceManager"
import { $ChunkProgressListener$$Type } from "net.minecraft.server.level.progress.ChunkProgressListener"
import { $Executor, $Executor$$Type } from "java.util.concurrent.Executor"
import { $ThreadedAnvilChunkStorageAccessor as $ThreadedAnvilChunkStorageAccessor$0 } from "net.fabricmc.fabric.mixin.networking.accessor.ThreadedAnvilChunkStorageAccessor"
import { $ChunkMapAccess } from "snownee.lychee.mixin.ChunkMapAccess"
import { $BlockableEventLoop$$Type } from "net.minecraft.util.thread.BlockableEventLoop"
import { $ISuspendedHolderTrackingChunkMap } from "org.embeddedt.modernfix.duck.release_protochunks.ISuspendedHolderTrackingChunkMap"
import { $ChunkMap$TrackedEntity } from "net.minecraft.server.level.ChunkMap$TrackedEntity"
import { $Long2ObjectLinkedOpenHashMap, $Long2ObjectLinkedOpenHashMap$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $DimensionDataStorage } from "net.minecraft.world.level.storage.DimensionDataStorage"
import { $ObjectCollection$$Type } from "it.unimi.dsi.fastutil.objects.ObjectCollection"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $ChunkGenerator$$Type } from "net.minecraft.world.level.chunk.ChunkGenerator"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ChunkStatusUpdateListener$$Type } from "net.minecraft.world.level.entity.ChunkStatusUpdateListener"
import { $List, $List$$Type } from "java.util.List"
import { $StructureTemplateManager$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $RandomState } from "net.minecraft.world.level.levelgen.RandomState"
import { $Int2ObjectMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import { $ChunkStorage } from "net.minecraft.world.level.chunk.storage.ChunkStorage"
import { $Optional } from "java.util.Optional"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export class $ChunkMap extends $ChunkStorage implements $ChunkHolder$PlayerProvider, $ISuspendedHolderTrackingChunkMap, $AccessorChunkMap, $ThreadedAnvilChunkStorageAccessor$0, $ChunkMapAccess, $ThreadedAnvilChunkStorageAccessor {
static readonly "FORCED_TICKET_LEVEL": integer
static readonly "MAX_VIEW_DISTANCE": integer
readonly "entityMap": $Int2ObjectMap<$ChunkMap$TrackedEntity>
readonly "pendingUnloads": $Long2ObjectLinkedOpenHashMap<$ChunkHolder>
readonly "updatingChunkMap": $Long2ObjectLinkedOpenHashMap<$ChunkHolder>

constructor(serverLevel0: $ServerLevel$$Type, levelStorageAccess1: $LevelStorageSource$LevelStorageAccess$$Type, dataFixer2: $DataFixer$$Type, structureTemplateManager3: $StructureTemplateManager$$Type, executor4: $Executor$$Type, blockableEventLoop5: $BlockableEventLoop$$Type<$Runnable$$Type>, lightChunkGetter6: $LightChunkGetter$$Type, chunkGenerator7: $ChunkGenerator$$Type, chunkProgressListener8: $ChunkProgressListener$$Type, chunkStatusUpdateListener9: $ChunkStatusUpdateListener$$Type, supplier10: $Supplier$$Type<$DimensionDataStorage>, int11: integer, boolean12: boolean)

public "broadcast"(entity0: $Entity$$Type, packet1: $Packet$$Type<any>): void
public "debugFuturesAndCreateReportedException"(illegalStateException0: $IllegalStateException$$Type, string1: string): $ReportedException
public "debugReloadGenerator"(): void
public "getChunkDebugData"(chunkPos0: $ChunkPos$$Type): string
public "getChunks"(): $Iterable<$ChunkHolder>
public "getDistanceManager"(): $DistanceManager
public "getPlayers"(chunkPos0: $ChunkPos$$Type, boolean1: boolean): $List<$ServerPlayer>
public "getPlayersCloseForSpawning"(chunkPos0: $ChunkPos$$Type): $List<$ServerPlayer>
public "getStorageName"(): string
public "getTickingGenerated"(): integer
public "getVisibleChunkIfPresent"(long0: long): $ChunkHolder
public "hasWork"(): boolean
public static "isChunkInRange"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): boolean
public "mfix$getMainThreadExecutor"(): $Executor
public "mfix$markForSuspensionCheck"(chunkPos0: $ChunkPos$$Type): void
public "move"(serverPlayer0: $ServerPlayer$$Type): void
public "prepareAccessibleChunk"(chunkHolder0: $ChunkHolder$$Type): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "prepareEntityTickingChunk"(chunkHolder0: $ChunkHolder$$Type): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "prepareTickingChunk"(chunkHolder0: $ChunkHolder$$Type): $CompletableFuture<$Either<$LevelChunk, $ChunkHolder$ChunkLoadingFailure>>
public "randomState"(): $RandomState
public "readChunk"(chunkPos0: $ChunkPos$$Type): $CompletableFuture<$Optional<$CompoundTag>>
public "redirect$emg000$smoothChunksaveChunks"(objectCollection0: $ObjectCollection$$Type): $ObjectIterator
public "resendBiomesForChunks"(list0: $List$$Type<$ChunkAccess$$Type>): void
public "schedule"(chunkHolder0: $ChunkHolder$$Type, chunkStatus1: $ChunkStatus$$Type): $CompletableFuture<$Either<$ChunkAccess, $ChunkHolder$ChunkLoadingFailure>>
public "size"(): integer
get "visibleChunkMap"(): $Long2ObjectLinkedOpenHashMap<$ChunkHolder>
set "visibleChunkMap"(value: $Long2ObjectLinkedOpenHashMap$$Type<$ChunkHolder$$Type>)
get "chunks"(): $Iterable<$ChunkHolder>
get "distanceManager"(): $DistanceManager
get "storageName"(): string
get "tickingGenerated"(): integer
}
}

declare module "net.minecraft.server.level.WorldGenRegion" {
import { $LevelHeightAccessor } from "net.minecraft.world.level.LevelHeightAccessor"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ParticleOptions$$Type } from "net.minecraft.core.particles.ParticleOptions"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $EntityTypeTest$$Type } from "net.minecraft.world.level.entity.EntityTypeTest"
import { $ChunkSource } from "net.minecraft.world.level.chunk.ChunkSource"
import { $Registry } from "net.minecraft.core.Registry"
import { $ClipBlockStateContext$$Type } from "net.minecraft.world.level.ClipBlockStateContext"
import { $BlockGetter } from "net.minecraft.world.level.BlockGetter"
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"
import { $Holder } from "net.minecraft.core.Holder"
import { $LightLayer$$Type } from "net.minecraft.world.level.LightLayer"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $DifficultyInstance } from "net.minecraft.world.DifficultyInstance"
import { $BiomeManager } from "net.minecraft.world.level.biome.BiomeManager"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $BlockHitResult } from "net.minecraft.world.phys.BlockHitResult"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $UUID$$Type } from "java.util.UUID"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $RegistryAccess } from "net.minecraft.core.RegistryAccess"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $FeatureFlagSet } from "net.minecraft.world.flag.FeatureFlagSet"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $FluidState, $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $Optional } from "java.util.Optional"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $VoxelShape, $VoxelShape$$Type } from "net.minecraft.world.phys.shapes.VoxelShape"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $CollisionContext$$Type } from "net.minecraft.world.phys.shapes.CollisionContext"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $DimensionType } from "net.minecraft.world.level.dimension.DimensionType"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Biome } from "net.minecraft.world.level.biome.Biome"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"
import { $Iterable } from "java.lang.Iterable"
import { $LevelData } from "net.minecraft.world.level.storage.LevelData"
import { $ColorResolver$$Type } from "net.minecraft.world.level.ColorResolver"
import { $ClipContext$$Type } from "net.minecraft.world.level.ClipContext"
import { $WorldGenLevel } from "net.minecraft.world.level.WorldGenLevel"
import { $WorldBorder } from "net.minecraft.world.level.border.WorldBorder"
import { $Fluid, $Fluid$$Type } from "net.minecraft.world.level.material.Fluid"
import { $Difficulty } from "net.minecraft.world.Difficulty"
import { $WorldGenRegionAccessor } from "com.github.L_Ender.cataclysm.mixin.accessor.WorldGenRegionAccessor"
import { $HolderLookup } from "net.minecraft.core.HolderLookup"
import { $ModelDataManager } from "net.minecraftforge.client.model.data.ModelDataManager"
import { $LevelTickAccess } from "net.minecraft.world.ticks.LevelTickAccess"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $ChunkPos, $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $TickPriority$$Type } from "net.minecraft.world.ticks.TickPriority"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Block, $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $Class$$Type } from "java.lang.Class"
import { $ChunkStatus$$Type } from "net.minecraft.world.level.chunk.ChunkStatus"

export class $WorldGenRegion implements $WorldGenLevel, $WorldGenRegionAccessor {
constructor(serverLevel0: $ServerLevel$$Type, list1: $List$$Type<$ChunkAccess$$Type>, chunkStatus2: $ChunkStatus$$Type, int3: integer)

public "addFreshEntity"(entity0: $Entity$$Type): boolean
public "addFreshEntityWithPassengers"(entity0: $Entity$$Type): void
public "addParticle"(particleOptions0: $ParticleOptions$$Type, double1: double, double2: double, double3: double, double4: double, double5: double, double6: double): void
public "blockUpdated"(blockPos0: $BlockPos$$Type, block1: $Block$$Type): void
public "canSeeSky"(blockPos0: $BlockPos$$Type): boolean
public "canSeeSkyFromBelowWater"(blockPos0: $BlockPos$$Type): boolean
public "clip"(clipContext0: $ClipContext$$Type): $BlockHitResult
public "clipWithInteractionOverride"(vec30: $Vec3$$Type, vec31: $Vec3$$Type, blockPos2: $BlockPos$$Type, voxelShape3: $VoxelShape$$Type, blockState4: $BlockState$$Type): $BlockHitResult
public "collidesWithSuffocatingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "containsAnyLiquid"(aABB0: $AABB$$Type): boolean
public static "create"(int0: integer, int1: integer): $LevelHeightAccessor
public "dayTime"(): long
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type, int3: integer): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean, entity2: $Entity$$Type): boolean
public "destroyBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "dimensionType"(): $DimensionType
public "enabledFeatures"(): $FeatureFlagSet
public "ensureCanWrite"(blockPos0: $BlockPos$$Type): boolean
public "findFreePosition"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type, vec32: $Vec3$$Type, double3: double, double4: double, double5: double): $Optional<$Vec3>
public "findSupportingBlock"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Optional<$BlockPos>
public "gameEvent"(gameEvent0: $GameEvent$$Type, vec31: $Vec3$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(gameEvent0: $GameEvent$$Type, blockPos1: $BlockPos$$Type, context2: $GameEvent$Context$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, blockPos2: $BlockPos$$Type): void
public "gameEvent"(entity0: $Entity$$Type, gameEvent1: $GameEvent$$Type, vec32: $Vec3$$Type): void
public "getBestNeighborSignal"(blockPos0: $BlockPos$$Type): integer
public "getBiome"(blockPos0: $BlockPos$$Type): $Holder<$Biome>
public "getBiomeFabric"(pos: $BlockPos$$Type): $Holder<$Biome>
public "getBiomeManager"(): $BiomeManager
public "getBlockCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getBlockEntity"<T extends $BlockEntity>(blockPos0: $BlockPos$$Type, blockEntityType1: $BlockEntityType$$Type<T>): $Optional<T>
/** @deprecated */
public "getBlockEntityRenderAttachment"(pos: $BlockPos$$Type): any
public "getBlockEntityRenderData"(pos: $BlockPos$$Type): any
public "getBlockFloorHeight"(blockPos0: $BlockPos$$Type): double
public "getBlockFloorHeight"(voxelShape0: $VoxelShape$$Type, supplier1: $Supplier$$Type<$VoxelShape>): double
public "getBlockState"(blockPos0: $BlockPos$$Type): $BlockState
public "getBlockStates"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockStatesIfLoaded"(aABB0: $AABB$$Type): $Stream<$BlockState>
public "getBlockTicks"(): $LevelTickAccess<$Block>
public "getBlockTint"(blockPos0: $BlockPos$$Type, colorResolver1: $ColorResolver$$Type): integer
public "getBrightness"(lightLayer0: $LightLayer$$Type, blockPos1: $BlockPos$$Type): integer
public "getCenter"(): $ChunkPos
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type, boolean3: boolean): $ChunkAccess
public "getChunk"(int0: integer, int1: integer): $ChunkAccess
public "getChunk"(int0: integer, int1: integer, chunkStatus2: $ChunkStatus$$Type): $ChunkAccess
public "getChunk"(blockPos0: $BlockPos$$Type): $ChunkAccess
public "getChunkForCollisions"(int0: integer, int1: integer): $BlockGetter
public "getChunkSource"(): $ChunkSource
public "getCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $Iterable<$VoxelShape>
public "getControlInputSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type, boolean2: boolean): integer
public "getCurrentDifficultyAt"(blockPos0: $BlockPos$$Type): $DifficultyInstance
public "getDifficulty"(): $Difficulty
public "getDirectSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getDirectSignalTo"(blockPos0: $BlockPos$$Type): integer
public "getEntities"<T extends $Entity>(entityTypeTest0: $EntityTypeTest$$Type<$Entity$$Type, T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<$Entity$$Type>): $List<$Entity>
public "getEntities"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$Entity>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type): $List<T>
public "getEntitiesOfClass"<T extends $Entity>(class0: $Class$$Type<T>, aABB1: $AABB$$Type, predicate2: $Predicate$$Type<T>): $List<T>
public "getEntityCollisions"(entity0: $Entity$$Type, aABB1: $AABB$$Type): $List<$VoxelShape>
public "getExistingBlockEntity"(blockPos0: $BlockPos$$Type): $BlockEntity
public "getFluidState"(blockPos0: $BlockPos$$Type): $FluidState
public "getFluidTicks"(): $LevelTickAccess<$Fluid>
public "getHeight"(types0: $Heightmap$Types$$Type, int1: integer, int2: integer): integer
public "getHeight"(): integer
public "getHeightmapPos"(types0: $Heightmap$Types$$Type, blockPos1: $BlockPos$$Type): $BlockPos
/** @deprecated */
public "getLevel"(): $ServerLevel
public "getLevelData"(): $LevelData
public "getLightEmission"(blockPos0: $BlockPos$$Type): integer
public "getLightEngine"(): $LevelLightEngine
/** @deprecated */
public "getLightLevelDependentMagicValue"(blockPos0: $BlockPos$$Type): float
public "getMaxBuildHeight"(): integer
public "getMaxLightLevel"(): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type): integer
public "getMaxLocalRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getMaxSection"(): integer
public "getMinBuildHeight"(): integer
public "getMinSection"(): integer
public "getModelDataManager"(): $ModelDataManager
public "getMoonBrightness"(): float
public "getMoonPhase"(): integer
public "getNearbyEntities"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, aABB3: $AABB$$Type): $List<T>
public "getNearbyPlayers"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, aABB2: $AABB$$Type): $List<$Player>
public "getNearestEntity"<T extends $LivingEntity>(list0: $List$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double): T
public "getNearestEntity"<T extends $LivingEntity>(class0: $Class$$Type<T>, targetingConditions1: $TargetingConditions$$Type, livingEntity2: $LivingEntity$$Type, double3: double, double4: double, double5: double, aABB6: $AABB$$Type): T
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, predicate4: $Predicate$$Type<$Entity$$Type>): $Player
public "getNearestPlayer"(entity0: $Entity$$Type, double1: double): $Player
public "getNearestPlayer"(double0: double, double1: double, double2: double, double3: double, boolean4: boolean): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, double1: double, double2: double, double3: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type, double2: double, double3: double, double4: double): $Player
public "getNearestPlayer"(targetingConditions0: $TargetingConditions$$Type, livingEntity1: $LivingEntity$$Type): $Player
public "getNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getPathfindingCostFromLightLevels"(blockPos0: $BlockPos$$Type): float
public "getPlayerByUUID"(uUID0: $UUID$$Type): $Player
public "getRandom"(): $RandomSource
public "getRawBrightness"(blockPos0: $BlockPos$$Type, int1: integer): integer
public "getSeaLevel"(): integer
public "getSectionIndex"(int0: integer): integer
public "getSectionIndexFromSectionY"(int0: integer): integer
public "getSectionYFromSectionIndex"(int0: integer): integer
public "getSectionsCount"(): integer
public "getSeed"(): long
public "getServer"(): $MinecraftServer
public "getShade"(direction0: $Direction$$Type, boolean1: boolean): float
public "getShade"(float0: float, float1: float, float2: float, boolean3: boolean): float
public "getSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): integer
public "getSkyDarken"(): integer
public "getTimeOfDay"(float0: float): float
public "getUncachedNoiseBiome"(int0: integer, int1: integer, int2: integer): $Holder<$Biome>
public "getWorldBorder"(): $WorldBorder
public "hasBiomes"(): boolean
public "hasChunk"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunkAt"(blockPos0: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunkAt"(int0: integer, int1: integer): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): boolean
/** @deprecated */
public "hasChunksAt"(blockPos0: $BlockPos$$Type, blockPos1: $BlockPos$$Type): boolean
/** @deprecated */
public "hasChunksAt"(int0: integer, int1: integer, int2: integer, int3: integer): boolean
public "hasNearbyAlivePlayer"(double0: double, double1: double, double2: double, double3: double): boolean
public "hasNeighborSignal"(blockPos0: $BlockPos$$Type): boolean
public "hasSignal"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "holderLookup"<T>(resourceKey0: $ResourceKey$$Type<$Registry<T>>): $HolderLookup<T>
public "isAreaLoaded"(blockPos0: $BlockPos$$Type, int1: integer): boolean
public "isBlockInLine"(clipBlockStateContext0: $ClipBlockStateContext$$Type): $BlockHitResult
public "isClientSide"(): boolean
public "isEmptyBlock"(blockPos0: $BlockPos$$Type): boolean
public "isFluidAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$FluidState$$Type>): boolean
public "isOldChunkAround"(chunkPos0: $ChunkPos$$Type, int1: integer): boolean
public "isOutsideBuildHeight"(blockPos0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(int0: integer): boolean
public "isStateAtPosition"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$BlockState$$Type>): boolean
public "isUnobstructed"(entity0: $Entity$$Type, voxelShape1: $VoxelShape$$Type): boolean
public "isUnobstructed"(entity0: $Entity$$Type): boolean
public "isUnobstructed"(blockState0: $BlockState$$Type, blockPos1: $BlockPos$$Type, collisionContext2: $CollisionContext$$Type): boolean
public "isWaterAt"(blockPos0: $BlockPos$$Type): boolean
public "levelEvent"(player0: $Player$$Type, int1: integer, blockPos2: $BlockPos$$Type, int3: integer): void
public "levelEvent"(int0: integer, blockPos1: $BlockPos$$Type, int2: integer): void
public "neighborShapeChanged"(direction0: $Direction$$Type, blockState1: $BlockState$$Type, blockPos2: $BlockPos$$Type, blockPos3: $BlockPos$$Type, int4: integer, int5: integer): void
public "nextSubTickCount"(): long
public "noCollision"(entity0: $Entity$$Type, aABB1: $AABB$$Type): boolean
public "noCollision"(entity0: $Entity$$Type): boolean
public "noCollision"(aABB0: $AABB$$Type): boolean
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type, float4: float, float5: float): void
public "playSound"(player0: $Player$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type, soundSource3: $SoundSource$$Type): void
public "players"(): $List<$Player>
public "registryAccess"(): $RegistryAccess
public "removeBlock"(blockPos0: $BlockPos$$Type, boolean1: boolean): boolean
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, fluid1: $Fluid$$Type, int2: integer): void
public "scheduleTick"(blockPos0: $BlockPos$$Type, block1: $Block$$Type, int2: integer, tickPriority3: $TickPriority$$Type): void
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer, int3: integer): boolean
public "setBlock"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, int2: integer): boolean
public "setCurrentlyGenerating"(supplier0: $Supplier$$Type<string>): void
public static "traverseBlocks"<T, C>(vec30: $Vec3$$Type, vec31: $Vec3$$Type, c2: C, biFunction3: $BiFunction$$Type<C, $BlockPos$$Type, T>, function4: $Function$$Type<C, T>): T
get "biomeManager"(): $BiomeManager
get "blockTicks"(): $LevelTickAccess<$Block>
get "center"(): $ChunkPos
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "fluidTicks"(): $LevelTickAccess<$Fluid>
get "height"(): integer
get "level"(): $ServerLevel
get "levelData"(): $LevelData
get "lightEngine"(): $LevelLightEngine
get "maxBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minBuildHeight"(): integer
get "minSection"(): integer
get "modelDataManager"(): $ModelDataManager
get "moonBrightness"(): float
get "moonPhase"(): integer
get "random"(): $RandomSource
get "seaLevel"(): integer
get "sectionsCount"(): integer
get "seed"(): long
get "server"(): $MinecraftServer
get "skyDarken"(): integer
get "worldBorder"(): $WorldBorder
get "clientSide"(): boolean
set "currentlyGenerating"(value: $Supplier$$Type<string>)
}
}

declare module "net.minecraft.server.packs.resources.ResourceManagerReloadListener" {
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"

export interface $ResourceManagerReloadListener extends $PreparableReloadListener {
"getName"(): string
"onResourceManagerReload"(resourceManager0: $ResourceManager$$Type): void
"reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}

export namespace $ResourceManagerReloadListener {
const probejs$$marker: never
}
export abstract class $ResourceManagerReloadListener$$Static implements $ResourceManagerReloadListener {
}
}

declare module "net.minecraft.server.packs.repository.RepositorySource" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Pack$$Type } from "net.minecraft.server.packs.repository.Pack"

export interface $RepositorySource {
"loadPacks"(consumer0: $Consumer$$Type<$Pack$$Type>): void
}

export namespace $RepositorySource {
const probejs$$marker: never
}
export abstract class $RepositorySource$$Static implements $RepositorySource {
}
}

declare module "net.minecraft.server.level.DistanceManager" {
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $TicketType$$Type } from "net.minecraft.server.level.TicketType"
import { $ChunkMap$$Type } from "net.minecraft.server.level.ChunkMap"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"

export class $DistanceManager {
public "addPlayer"(sectionPos0: $SectionPos$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "addRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T, boolean4: boolean): void
public "addRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "addTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "getDebugStatus"(): string
public "getNaturalSpawnChunkCount"(): integer
public "hasPlayersNearby"(long0: long): boolean
public "hasTickets"(): boolean
public "inBlockTickingRange"(long0: long): boolean
public "inEntityTickingRange"(long0: long): boolean
public "removePlayer"(sectionPos0: $SectionPos$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "removeRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T, boolean4: boolean): void
public "removeRegionTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "removeTicket"<T>(ticketType0: $TicketType$$Type<T>, chunkPos1: $ChunkPos$$Type, int2: integer, t3: T): void
public "removeTicketsOnClosing"(): void
public "runAllUpdates"(chunkMap0: $ChunkMap$$Type): boolean
public "shouldForceTicks"(long0: long): boolean
public "updateSimulationDistance"(int0: integer): void
get "debugStatus"(): string
get "naturalSpawnChunkCount"(): integer
}
}

declare module "net.minecraft.server.Services" {
import { $ServicesKeySet, $ServicesKeySet$$Type } from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import { $MinecraftSessionService, $MinecraftSessionService$$Type } from "com.mojang.authlib.minecraft.MinecraftSessionService"
import { $YggdrasilAuthenticationService$$Type } from "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService"
import { $SignatureValidator } from "net.minecraft.util.SignatureValidator"
import { $Record } from "java.lang.Record"
import { $GameProfileCache, $GameProfileCache$$Type } from "net.minecraft.server.players.GameProfileCache"
import { $GameProfileRepository, $GameProfileRepository$$Type } from "com.mojang.authlib.GameProfileRepository"
import { $File$$Type } from "java.io.File"

export class $Services extends $Record {
constructor(minecraftSessionService0: $MinecraftSessionService$$Type, servicesKeySet1: $ServicesKeySet$$Type, gameProfileRepository2: $GameProfileRepository$$Type, gameProfileCache3: $GameProfileCache$$Type)

public static "create"(yggdrasilAuthenticationService0: $YggdrasilAuthenticationService$$Type, file1: $File$$Type): $Services
public "profileCache"(): $GameProfileCache
public "profileKeySignatureValidator"(): $SignatureValidator
public "profileRepository"(): $GameProfileRepository
public "servicesKeySet"(): $ServicesKeySet
public "sessionService"(): $MinecraftSessionService
}
}

declare module "net.minecraft.server.packs.PackType" {
import { $Enum } from "java.lang.Enum"

export class $PackType extends $Enum<$PackType> {
static readonly "CLIENT_RESOURCES": $PackType
static readonly "SERVER_DATA": $PackType

public "getDirectory"(): string
public static "valueOf"(string0: string): $PackType
public static "values"(): $PackType[]
get "directory"(): string
}
}

declare module "net.minecraft.server.ServerScoreboard" {
import { $Objective$$Type } from "net.minecraft.world.scores.Objective"
import { $Scoreboard } from "net.minecraft.world.scores.Scoreboard"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ScoreboardSaveData } from "net.minecraft.world.scores.ScoreboardSaveData"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $ServerScoreboard extends $Scoreboard {
constructor(minecraftServer0: $MinecraftServer$$Type)

public "addDirtyListener"(runnable0: $Runnable$$Type): void
public "createData"(compoundTag0: $CompoundTag$$Type): $ScoreboardSaveData
public "createData"(): $ScoreboardSaveData
public "getObjectiveDisplaySlotCount"(objective0: $Objective$$Type): integer
public "getStartTrackingPackets"(objective0: $Objective$$Type): $List<$Packet<any>>
public "getStopTrackingPackets"(objective0: $Objective$$Type): $List<$Packet<any>>
public "startTrackingObjective"(objective0: $Objective$$Type): void
public "stopTrackingObjective"(objective0: $Objective$$Type): void
}
}

declare module "net.minecraft.server.level.ServerPlayer" {
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $ServerStatsCounter } from "net.minecraft.stats.ServerStatsCounter"
import { $FluidType$$Type } from "net.minecraftforge.fluids.FluidType"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $Team } from "net.minecraft.world.scores.Team"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $Pose, $Pose$$Type } from "net.minecraft.world.entity.Pose"
import { $Map } from "java.util.Map"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $NotificationBuilder$$Type } from "dev.latvian.mods.kubejs.util.NotificationBuilder"
import { $SoundAction$$Type } from "net.minecraftforge.common.SoundAction"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $ServerRecipeBook, $ServerRecipeBook$$Type } from "net.minecraft.stats.ServerRecipeBook"
import { $ChestMenuData$$Type } from "dev.latvian.mods.kubejs.gui.chest.ChestMenuData"
import { $ObjectOpenCustomHashSet } from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $FluidState$$Type } from "net.minecraft.world.level.material.FluidState"
import { $MenuProvider$$Type } from "net.minecraft.world.MenuProvider"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $GameType$$Type } from "net.minecraft.world.level.GameType"
import { $ChatVisiblity } from "net.minecraft.world.entity.player.ChatVisiblity"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $AbstractContainerMenu, $AbstractContainerMenu$$Type } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $TextFilter } from "net.minecraft.server.network.TextFilter"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $ArrayList } from "java.util.ArrayList"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Container } from "net.minecraft.world.Container"
import { $VisionEntityVariant, $VisionEntityVariant$$Type } from "net.lixir.vminus.vision.util.VisionEntityVariant"
import { $ServerPlayerISSKJS } from "com.squoshi.irons_spells_js.util.ServerPlayerISSKJS"
import { $EntityPotionEffectsJS } from "dev.latvian.mods.kubejs.entity.EntityPotionEffectsJS"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $EntityAnchorArgument$Anchor$$Type } from "net.minecraft.commands.arguments.EntityAnchorArgument$Anchor"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $RayTraceResultJS } from "dev.latvian.mods.kubejs.entity.RayTraceResultJS"
import { $ScriptType } from "dev.latvian.mods.kubejs.script.ScriptType"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $IPlayer } from "com.crackerjackbox.mobcontrol.iface.IPlayer"
import { $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $EntityDimensions$$Type } from "net.minecraft.world.entity.EntityDimensions"
import { $InteractionHand$$Type } from "net.minecraft.world.InteractionHand"
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $PlayerAdvancements } from "net.minecraft.server.PlayerAdvancements"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $BlockContainerJS, $BlockContainerJS$$Type } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ServerPlayerKJS } from "dev.latvian.mods.kubejs.core.ServerPlayerKJS"
import { $ServerStatus$$Type } from "net.minecraft.network.protocol.status.ServerStatus"
import { $ServerboundClientInformationPacket$$Type } from "net.minecraft.network.protocol.game.ServerboundClientInformationPacket"
import { $AnimationApplier } from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import { $SectionPos, $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $ExtraEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraEntity"
import { $ExtraLivingEntity } from "com.mega.endinglib.util.mixin.data_expand.ExtraLivingEntity"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Collection$$Type } from "java.util.Collection"
import { $InventoryKJS$$Type } from "dev.latvian.mods.kubejs.core.InventoryKJS"
import { $KubeJSGUI$$Type } from "dev.latvian.mods.kubejs.gui.KubeJSGUI"
import { $UUID } from "java.util.UUID"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player, $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $VisionType } from "net.lixir.vminus.vision.VisionType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent, $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $PlayerStatsJS } from "dev.latvian.mods.kubejs.player.PlayerStatsJS"
import { $Optional } from "java.util.Optional"
import { $Level } from "net.minecraft.world.level.Level"
import { $MagicData } from "io.redspace.ironsspellbooks.api.magic.MagicData"
import { $ServerLevel, $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Trackable } from "dev.uncandango.alltheleaks.mixin.Trackable"
import { $Iterable } from "java.lang.Iterable"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $RemoteChatSession, $RemoteChatSession$$Type } from "net.minecraft.network.chat.RemoteChatSession"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $MobCategory } from "net.minecraft.world.entity.MobCategory"
import { $WeakReference } from "java.lang.ref.WeakReference"
import { $PartEntity } from "net.minecraftforge.entity.PartEntity"
import { $OutgoingChatMessage$$Type } from "net.minecraft.network.chat.OutgoingChatMessage"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $HitResult$$Type } from "net.minecraft.world.phys.HitResult"
import { $EntityArrayList } from "dev.latvian.mods.kubejs.player.EntityArrayList"
import { $ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$$Type } from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import { $ServerPlayerGameMode } from "net.minecraft.server.level.ServerPlayerGameMode"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Class } from "java.lang.Class"

export class $ServerPlayer extends $Player implements $ServerPlayerISSKJS, $IPlayer, $ServerPlayerKJS {
readonly "gameMode": $ServerPlayerGameMode
"isChangingDimension": boolean
readonly "server": $MinecraftServer

constructor(minecraftServer0: $MinecraftServer$$Type, serverLevel1: $ServerLevel$$Type, gameProfile2: $GameProfile$$Type)

public "ac_dropCustomDeathLoot"(damageSource0: $DamageSource$$Type, int1: integer, boolean2: boolean): void
public "ac_getEquipmentDropChance"(equipmentSlot0: $EquipmentSlot$$Type): float
public "ac_setDropChance"(equipmentSlot0: $EquipmentSlot$$Type, float1: float): void
public "acceptsFailure"(): boolean
public "acceptsSuccess"(): boolean
public "addExhaustion"(exhaustion: float): void
public "addFood"(f: integer, m: float): void
public "addItemCooldown"(item: $Item$$Type, ticks: integer): void
public "addXP"(xp: integer): void
public "addXPLevels"(l: integer): void
public "allowsListing"(): boolean
public "alwaysAccepts"(): boolean
public "attack"(hp: float): void
public "ban"(banner: string, reason: string, expiresInMillis: long): void
public "bedInRange"(blockPos0: $BlockPos$$Type, direction1: $Direction$$Type): boolean
public "boostElytraFlight"(): void
public "canBeRiddenUnderFluidType"(fluidType0: $FluidType$$Type, entity1: $Entity$$Type): boolean
public "canChatInColor"(): boolean
public "canDrownInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canEntityBeSeen"(entity: $LivingEntity$$Type): boolean
public "canFluidExtinguish"(fluidType0: $FluidType$$Type): boolean
public "canHydrateInFluidType"(fluidType0: $FluidType$$Type): boolean
public "canReach"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReach"(entity0: $Entity$$Type, double1: double): boolean
public "canReach"(vec30: $Vec3$$Type, double1: double): boolean
public "canReachRaw"(blockPos0: $BlockPos$$Type, double1: double): boolean
public "canReachRaw"(entity0: $Entity$$Type, double1: double): boolean
public "canRiderInteract"(): boolean
public "canStartSwimming"(): boolean
public "canSwimInFluidType"(fluidType0: $FluidType$$Type): boolean
public "captureInventory"(autoRestore: boolean): $Container
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "clearNullReferences"(): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<$WeakReference<$Trackable>>
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer): void
public "damageEquipment"(slot: $EquipmentSlot$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageEquipment"(slot: $EquipmentSlot$$Type): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer, onBroken: $Consumer$$Type<$ItemStack$$Type>): void
public "damageHeldItem"(): void
public "damageHeldItem"(hand: $InteractionHand$$Type, amount: integer): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "disconnect"(): void
public "doCheckFallDamage"(double0: double, double1: double, double2: double, boolean3: boolean): void
public "doCloseContainer"(): void
public "doTick"(): void
public "drop"(boolean0: boolean): boolean
public "etf$canBeBright"(): boolean
public "etf$distanceTo"(entity0: $Entity$$Type): float
public "etf$getArmorItems"(): $Iterable<$ItemStack>
public "etf$getBlockPos"(): $BlockPos
public "etf$getBlockY"(): integer
public "etf$getCustomName"(): $Component
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "etf$getEntityKey"(): string
public "etf$getHandItems"(): $Iterable<$ItemStack>
public "etf$getItemsEquipped"(): $Iterable<$ItemStack>
public "etf$getNbt"(): $CompoundTag
public "etf$getOptifineId"(): integer
public "etf$getOptifineVehicleId"(): integer
/** @deprecated */
public "etf$getPose"(): $Pose
public "etf$getScoreboardTeam"(): $Team
public "etf$getType"(): $EntityType<any>
public "etf$getUuid"(): $UUID
public "etf$getVelocity"(): $Vec3
public "etf$getWorld"(): $Level
public "etf$hasCustomName"(): boolean
public "etf$isBlockEntity"(): boolean
public "foodEaten"(is: $ItemStack$$Type): void
public "gatherDamagePowers"(entity0: $Entity$$Type, damageSource1: $DamageSource$$Type, float2: float): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAdvancements"(): $PlayerAdvancements
/** @deprecated */
public "getAnimation"(): $AnimationApplier
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getAttributeBaseValue"(attribute: $Attribute$$Type): double
public "getAttributeTotalValue"(attribute: $Attribute$$Type): double
public "getBlock"(): $BlockContainerJS
public "getBlockReach"(): double
public "getCamera"(): $Entity
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCharge"(): integer
public "getChatSession"(): $RemoteChatSession
public "getChatVisibility"(): $ChatVisiblity
public "getChestArmorItem"(): $ItemStack
public "getClassification"(boolean0: boolean): $MobCategory
public "getCustomName"(): $Component
public "getDefaultMovementSpeed"(): double
public "getDisplayName"(): $Component
public "getDistance"(x: double, y: double, z: double): double
public "getDistance"(pos: $BlockPos$$Type): double
public "getDistanceSq"(pos: $BlockPos$$Type): double
public "getEntityReach"(): double
public "getEquipment"(slot: $EquipmentSlot$$Type): $ItemStack
/** @deprecated */
public "getEyeHeightForge"(pose0: $Pose$$Type, entityDimensions1: $EntityDimensions$$Type): float
public "getFacing"(): $Direction
public "getFeetArmorItem"(): $ItemStack
public "getFluidFallDistanceModifier"(fluidType0: $FluidType$$Type): float
public "getFluidMotionScale"(fluidType0: $FluidType$$Type): double
public "getFoodLevel"(): integer
public "getHeadArmorItem"(): $ItemStack
public "getHeldItem"(hand: $InteractionHand$$Type): $ItemStack
public "getIpAddress"(): string
public "getItem"(): $ItemStack
public "getLanguage"(): string
public "getLastActionTime"(): long
public "getLastSectionPos"(): $SectionPos
public "getLegsArmorItem"(): $ItemStack
public "getLevel"(): $Level
/**
 *     Returns the player's magic data. Useful for changing the player's mana, or checking if the player is casting a spell.
 *     Changing the player's mana directly will not sync with the client. Use `syncMana()` on the player to sync the mana with the client.
 */
public "getMagicData"(): $MagicData
public "getMainHandItem"(): $ItemStack
public "getMotionX"(): double
public "getMotionY"(): double
public "getMotionZ"(): double
public "getMouseItem"(): $ItemStack
public "getName"(): $Component
public "getNbt"(): $CompoundTag
public "getOffHandItem"(): $ItemStack
public "getOpenInventory"(): $AbstractContainerMenu
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParts"(): $PartEntity<any>[]
public "getPassengers"(): $EntityArrayList
public "getPickedResult"(hitResult0: $HitResult$$Type): $ItemStack
public "getPotionEffects"(): $EntityPotionEffectsJS
public "getProfile"(): $GameProfile
public "getProjectionScale"(): integer
public "getReachDistance"(): double
public "getRecipeBook"(): $ServerRecipeBook
public "getRespawnAngle"(): float
public "getRespawnDimension"(): $ResourceKey<$Level>
public "getRespawnPosition"(): $BlockPos
public "getSaturation"(): float
public "getScriptType"(): $ScriptType
public "getSelectedSlot"(): integer
public "getSelfDestructTime"(): integer
public "getServer"(): $MinecraftServer
public "getSoundFromFluidType"(fluidType0: $FluidType$$Type, soundAction1: $SoundAction$$Type): $SoundEvent
public "getSpawnLocation"(): $BlockContainerJS
public "getStats"(): $PlayerStatsJS
public "getStatsCounter"(): $ServerStatsCounter
public "getStepHeight"(): float
public static "getSummary"(): $Map<$Class<any>, $Map<$Class<any>, long>>
public "getTabListDisplayName"(): $Component
public "getTabListFooter"(): $Component
public "getTabListHeader"(): $Component
public "getTeamId"(): string
public "getTextFilter"(): $TextFilter
public "getTotalMovementSpeed"(): double
public "getType"(): string
public static "getWeightedVisionEntityVariants"(list0: $List$$Type<$VisionEntityVariant$$Type>): $ArrayList<$VisionEntityVariant>
public "getXp"(): integer
public "getXpLevel"(): integer
public "give"(item: $ItemStack$$Type): void
public "giveInHand"(item: $ItemStack$$Type): void
public "handler$dgi000$celestisynth$drop"(boolean0: boolean, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$dig000$getPermissionLevel"(callbackInfoReturnable0: $CallbackInfoReturnable$$Type): void
public "handler$ekh000$l2library_openMenu_recordTitle"(menuProvider0: $MenuProvider$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$emd000$_OnRestoreFrom"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean, callbackInfo2: $CallbackInfo$$Type): void
public "handler$heh000$onAwardRecipes"(recipes: $Collection$$Type, cir: $CallbackInfoReturnable$$Type): void
public "handler$heh000$onAwardRecipesByKey"(resourceLocations: $ResourceLocation$$Type[], ci: $CallbackInfo$$Type): void
public "hasChangedDimension"(): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasDisconnected"(): boolean
public "initInventoryMenu"(): void
public "initMenu"(abstractContainerMenu0: $AbstractContainerMenu$$Type): void
public "isAdvancementDone"(id: $ResourceLocation$$Type): boolean
public "isAmbientCreature"(): boolean
public "isAnimal"(): boolean
public "isChangingDimension"(): boolean
public "isCloseEnough"(entity0: $Entity$$Type, double1: double): boolean
public "isEyeInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isFake"(): boolean
public "isFrame"(): boolean
public "isHoldingInAnyHand"(i: $Ingredient$$Type): boolean
public "isInFluidType"(fluidState0: $FluidState$$Type): boolean
public "isInFluidType"(fluidType0: $FluidType$$Type): boolean
public "isInFluidType"(biPredicate0: $BiPredicate$$Type<$FluidType$$Type, double>): boolean
public "isLiving"(): boolean
public "isMagnetizing"(): boolean
public "isMiningBlock"(): boolean
public "isMonster"(): boolean
public "isMultipartEntity"(): boolean
public "isOnScoreboardTeam"(teamId: string): boolean
public "isOp"(): boolean
public "isPeacefulCreature"(): boolean
public "isPlayer"(): boolean
public "isPowered"(): boolean
public "isPushedByFluid"(fluidType0: $FluidType$$Type): boolean
public "isRespawnForced"(): boolean
public "isUndead"(): boolean
public "isWaterCreature"(): boolean
public "jumpInFluid"(fluidType0: $FluidType$$Type): void
public "kick"(): void
public "kick"(reason: $Component$$Type): void
public "loadGameTypes"(compoundTag0: $CompoundTag$$Type): void
public "lookAt"(anchor0: $EntityAnchorArgument$Anchor$$Type, entity1: $Entity$$Type, anchor2: $EntityAnchorArgument$Anchor$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "mergeNbt"(tag: $CompoundTag$$Type): $Entity
public "mobControl$setDays"(int0: integer): void
public "mobControl$ticks"(): long
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "modifyAttribute"(attribute: $Attribute$$Type, identifier: string, d: double, operation: $AttributeModifier$Operation$$Type): void
public "moveInFluid"(fluidState0: $FluidState$$Type, vec31: $Vec3$$Type, double2: double): boolean
public "nextContainerCounter"(): void
public "notify"(builder: $NotificationBuilder$$Type): void
public "notify"(title: $Component$$Type, text: $Component$$Type): void
public static "of"(livingEntity0: $LivingEntity$$Type): $ExtraLivingEntity
public static "of"(entity0: $Entity$$Type): $ExtraEntity
public "openChestGUI"(title: $Component$$Type, rows: integer, gui: $Consumer$$Type<$ChestMenuData$$Type>): void
public "openGUI"(gui: $Consumer$$Type<$KubeJSGUI$$Type>): void
public "openInventoryGUI"(inventory: $InventoryKJS$$Type, title: $Component$$Type): void
public "paint"(renderer: $CompoundTag$$Type): void
public "playSound"(id: $SoundEvent$$Type, volume: float, pitch: float): void
public "playSound"(id: $SoundEvent$$Type): void
public "rayTrace"(): $RayTraceResultJS
public "rayTrace"(distance: double): $RayTraceResultJS
public "rayTrace"(distance: double, fluids: boolean): $RayTraceResultJS
public "refreshTabListName"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeAttribute"(attribute: $Attribute$$Type, identifier: string): void
public "resetLastActionTime"(): void
public "resetSentInfo"(): void
public "restoreFrom"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean): void
public "revokeAdvancement"(id: $ResourceLocation$$Type): void
public "runCommand"(command: string): integer
public "runCommandSilent"(command: string): integer
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "self"(): $LivingEntity
public "sendChatMessage"(outgoingChatMessage0: $OutgoingChatMessage$$Type, boolean1: boolean, bound2: $ChatType$Bound$$Type): void
public "sendData"(channel: string, data: $CompoundTag$$Type): void
public "sendData"(channel: string): void
public "sendInventoryUpdate"(): void
public "sendServerStatus"(serverStatus0: $ServerStatus$$Type): void
public "sendSystemMessage"(component0: $Component$$Type, boolean1: boolean): void
public "sendTexturePack"(string0: string, string1: string, boolean2: boolean, component3: $Component$$Type): void
public "serverLevel"(): $ServerLevel
public "setAttributeBaseValue"(attribute: $Attribute$$Type, value: double): void
public "setCamera"(entity0: $Entity$$Type): void
public "setCharge"(int0: integer): void
public "setChatSession"(remoteChatSession0: $RemoteChatSession$$Type): void
public "setChestArmorItem"(item: $ItemStack$$Type): void
public "setCreativeMode"(mode: boolean): void
public "setDefaultMovementSpeed"(speed: double): void
public "setDefaultMovementSpeedMultiplier"(speed: double): void
public "setEquipment"(slot: $EquipmentSlot$$Type, item: $ItemStack$$Type): void
public "setExperienceLevels"(int0: integer): void
public "setExperiencePoints"(int0: integer): void
public "setFeetArmorItem"(item: $ItemStack$$Type): void
public "setFoodLevel"(foodLevel: integer): void
public static "setFromWeightedList"(livingEntity0: $LivingEntity$$Type): $VisionEntityVariant
public "setGameMode"(gameType0: $GameType$$Type): boolean
public "setHeadArmorItem"(item: $ItemStack$$Type): void
public "setHeldItem"(hand: $InteractionHand$$Type, item: $ItemStack$$Type): void
public "setLastSectionPos"(sectionPos0: $SectionPos$$Type): void
public "setLegsArmorItem"(item: $ItemStack$$Type): void
public "setMainHandItem"(item: $ItemStack$$Type): void
public "setMaxHealth"(hp: float): void
public "setMotionX"(x: double): void
public "setMotionY"(y: double): void
public "setMotionZ"(z: double): void
public "setMouseItem"(item: $ItemStack$$Type): void
public "setMovementSpeedAddition"(speed: double): void
public "setNbt"(nbt: $CompoundTag$$Type): void
public "setOffHandItem"(item: $ItemStack$$Type): void
public "setPlayerInput"(float0: float, float1: float, boolean2: boolean, boolean3: boolean): void
public "setPosition"(x: double, y: double, z: double): void
public "setPosition"(block: $BlockContainerJS$$Type): void
public "setPositionAndRotation"(x: double, y: double, z: double, yaw: float, pitch: float): void
public "setProjectionScale"(int0: integer): void
public "setRespawnPosition"(resourceKey0: $ResourceKey$$Type<$Level>, blockPos1: $BlockPos$$Type, float2: float, boolean3: boolean, boolean4: boolean): void
public "setRotation"(yaw: float, pitch: float): void
public "setSaturation"(saturation: float): void
public "setSelectedSlot"(index: integer): void
public "setServerLevel"(serverLevel0: $ServerLevel$$Type): void
public "setSpawnLocation"(c: $BlockContainerJS$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "setTabListFooter"(component0: $Component$$Type): void
public "setTabListHeader"(component0: $Component$$Type): void
public "setTabListHeaderFooter"(component0: $Component$$Type, component1: $Component$$Type): void
public "setTotalMovementSpeedMultiplier"(speed: double): void
public "setX"(x: double): void
public "setXp"(xp: integer): void
public "setXpLevel"(l: integer): void
public "setY"(y: double): void
public "setZ"(z: double): void
public "shouldFilterMessageTo"(serverPlayer0: $ServerPlayer$$Type): boolean
public "shouldInformAdmins"(): boolean
public "shouldRiderSit"(): boolean
public "shouldUpdateFluidWhileBoating"(fluidState0: $FluidState$$Type, boat1: $Boat$$Type): boolean
public "sinkInFluid"(fluidType0: $FluidType$$Type): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(levelRenderer0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(levelRenderer0: $LevelRenderer$$Type): boolean
public "spawn"(): void
public "startTracking"(): void
public static "startTracking"(object0: any): void
public "swing"(): void
public "swing"(hand: $InteractionHand$$Type): void
/**     Synchronizes the player's mana with the client. Call this whenever you change a player's mana in a non-traditional way. */
public "syncMana"(): void
public "teleportTo"(serverLevel0: $ServerLevel$$Type, double1: double, double2: double, double3: double, float4: float, float5: float): void
public "teleportTo"(dimension: $ResourceLocation$$Type, x: double, y: double, z: double, yaw: float, pitch: float): void
public "tell"(message: $Component$$Type): void
public "trackChunk"(chunkPos0: $ChunkPos$$Type, packet1: $Packet$$Type<any>): void
public "trackEnteredOrExitedLavaOnVehicle"(): void
public "trackStartFallingPosition"(): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "unlockAdvancement"(id: $ResourceLocation$$Type): void
public "untrackChunk"(chunkPos0: $ChunkPos$$Type): void
public "updateOptions"(serverboundClientInformationPacket0: $ServerboundClientInformationPacket$$Type): void
public "vMinus$getVisionId"(): $ResourceLocation
public "vMinus$getVisionType"(): $VisionType<any>
public "vMinus$setVisionId"(resourceLocation0: $ResourceLocation$$Type): void
public "vMinus$update"(): void
public "wrap"(): $WeakReference<$Trackable>
get "connection"(): $ServerGamePacketListenerImpl
set "connection"(value: $ServerGamePacketListenerImpl$$Type)
get "containerCounter"(): integer
set "containerCounter"(value: integer)
get "latency"(): integer
set "latency"(value: integer)
get "recipeBook"(): $ServerRecipeBook
set "recipeBook"(value: $ServerRecipeBook$$Type)
get "wonGame"(): boolean
set "wonGame"(value: boolean)
get "advancements"(): $PlayerAdvancements
get "animation"(): $AnimationApplier
get "animator"(): $Optional<$AzAnimator<K, T>>
get "block"(): $BlockContainerJS
get "blockReach"(): double
get "camera"(): $Entity
get "charge"(): integer
get "chatSession"(): $RemoteChatSession
get "chatVisibility"(): $ChatVisiblity
get "chestArmorItem"(): $ItemStack
get "customName"(): $Component
get "defaultMovementSpeed"(): double
get "displayName"(): $Component
get "entityReach"(): double
get "facing"(): $Direction
get "feetArmorItem"(): $ItemStack
get "foodLevel"(): integer
get "headArmorItem"(): $ItemStack
get "ipAddress"(): string
get "item"(): $ItemStack
get "language"(): string
get "lastActionTime"(): long
get "lastSectionPos"(): $SectionPos
get "legsArmorItem"(): $ItemStack
get "level"(): $Level
get "magicData"(): $MagicData
get "mainHandItem"(): $ItemStack
get "motionX"(): double
get "motionY"(): double
get "motionZ"(): double
get "mouseItem"(): $ItemStack
get "name"(): $Component
get "nbt"(): $CompoundTag
get "offHandItem"(): $ItemStack
get "openInventory"(): $AbstractContainerMenu
get "parts"(): $PartEntity<any>[]
get "passengers"(): $EntityArrayList
get "potionEffects"(): $EntityPotionEffectsJS
get "profile"(): $GameProfile
get "projectionScale"(): integer
get "reachDistance"(): double
get "respawnAngle"(): float
get "respawnDimension"(): $ResourceKey<$Level>
get "respawnPosition"(): $BlockPos
get "saturation"(): float
get "scriptType"(): $ScriptType
get "selectedSlot"(): integer
get "selfDestructTime"(): integer
get "spawnLocation"(): $BlockContainerJS
get "stats"(): $PlayerStatsJS
get "statsCounter"(): $ServerStatsCounter
get "stepHeight"(): float
get "tabListDisplayName"(): $Component
get "tabListFooter"(): $Component
get "tabListHeader"(): $Component
get "teamId"(): string
get "textFilter"(): $TextFilter
get "totalMovementSpeed"(): double
get "type"(): string
get "xp"(): integer
get "xpLevel"(): integer
get "ambientCreature"(): boolean
get "animal"(): boolean
get "changingDimension"(): boolean
get "fake"(): boolean
get "frame"(): boolean
get "living"(): boolean
get "magnetizing"(): boolean
get "miningBlock"(): boolean
get "monster"(): boolean
get "multipartEntity"(): boolean
get "op"(): boolean
get "peacefulCreature"(): boolean
get "player"(): boolean
get "powered"(): boolean
get "respawnForced"(): boolean
get "undead"(): boolean
get "waterCreature"(): boolean
set "camera"(value: $Entity$$Type)
set "charge"(value: integer)
set "chatSession"(value: $RemoteChatSession$$Type)
set "chestArmorItem"(value: $ItemStack$$Type)
set "creativeMode"(value: boolean)
set "defaultMovementSpeed"(value: double)
set "defaultMovementSpeedMultiplier"(value: double)
set "experienceLevels"(value: integer)
set "experiencePoints"(value: integer)
set "feetArmorItem"(value: $ItemStack$$Type)
set "foodLevel"(value: integer)
set "headArmorItem"(value: $ItemStack$$Type)
set "lastSectionPos"(value: $SectionPos$$Type)
set "legsArmorItem"(value: $ItemStack$$Type)
set "mainHandItem"(value: $ItemStack$$Type)
set "maxHealth"(value: float)
set "motionX"(value: double)
set "motionY"(value: double)
set "motionZ"(value: double)
set "mouseItem"(value: $ItemStack$$Type)
set "movementSpeedAddition"(value: double)
set "nbt"(value: $CompoundTag$$Type)
set "offHandItem"(value: $ItemStack$$Type)
set "position"(value: $BlockContainerJS$$Type)
set "projectionScale"(value: integer)
set "saturation"(value: float)
set "selectedSlot"(value: integer)
set "spawnLocation"(value: $BlockContainerJS$$Type)
set "statusMessage"(value: $Component$$Type)
set "tabListFooter"(value: $Component$$Type)
set "tabListHeader"(value: $Component$$Type)
set "totalMovementSpeedMultiplier"(value: double)
set "x"(value: double)
set "xp"(value: integer)
set "xpLevel"(value: integer)
set "y"(value: double)
set "z"(value: double)
}
}

declare module "net.minecraft.server.ServerFunctionLibrary" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CommandDispatcher$$Type } from "com.mojang.brigadier.CommandDispatcher"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $Collection } from "java.util.Collection"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Iterable } from "java.lang.Iterable"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import { $CommandFunction } from "net.minecraft.commands.CommandFunction"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $IdentifiableResourceReloadListener } from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"

export class $ServerFunctionLibrary implements $PreparableReloadListener, $IdentifiableResourceReloadListener {
constructor(int0: integer, commandDispatcher1: $CommandDispatcher$$Type<$CommandSourceStack$$Type>)

public "getAvailableTags"(): $Iterable<$ResourceLocation>
public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getFunction"(resourceLocation0: $ResourceLocation$$Type): $Optional<$CommandFunction>
public "getFunctions"(): $Map<$ResourceLocation, $CommandFunction>
public "getName"(): string
public "getTag"(resourceLocation0: $ResourceLocation$$Type): $Collection<$CommandFunction>
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "availableTags"(): $Iterable<$ResourceLocation>
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "functions"(): $Map<$ResourceLocation, $CommandFunction>
get "name"(): string
}
}

declare module "net.minecraft.server.players.ServerOpListEntry" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $StoredUserEntry } from "net.minecraft.server.players.StoredUserEntry"

export class $ServerOpListEntry extends $StoredUserEntry<$GameProfile> {
constructor(gameProfile0: $GameProfile$$Type, int1: integer, boolean2: boolean)
constructor(jsonObject0: $JsonObject$$Type)

public "getBypassesPlayerLimit"(): boolean
public "getLevel"(): integer
get "bypassesPlayerLimit"(): boolean
get "level"(): integer
}
}

declare module "net.minecraft.server.players.PlayerList" {
import { $UserWhiteList } from "net.minecraft.server.players.UserWhiteList"
import { $SocketAddress$$Type } from "java.net.SocketAddress"
import { $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $PlayerAdvancements } from "net.minecraft.server.PlayerAdvancements"
import { $ServerStatsCounter } from "net.minecraft.stats.ServerStatsCounter"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $ServerOpList } from "net.minecraft.server.players.ServerOpList"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Function$$Type } from "java.util.function.Function"
import { $UserBanList } from "net.minecraft.server.players.UserBanList"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $PlayerDataStorage$$Type } from "net.minecraft.world.level.storage.PlayerDataStorage"
import { $LayeredRegistryAccess$$Type } from "net.minecraft.core.LayeredRegistryAccess"
import { $IpBanList } from "net.minecraft.server.players.IpBanList"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ChatType$Bound$$Type } from "net.minecraft.network.chat.ChatType$Bound"
import { $UUID$$Type } from "java.util.UUID"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $File } from "java.io.File"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $PlayerChatMessage$$Type } from "net.minecraft.network.chat.PlayerChatMessage"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $RegistryLayer$$Type } from "net.minecraft.server.RegistryLayer"
import { $Level } from "net.minecraft.world.level.Level"

export class $PlayerList {
static readonly "CHAT_FILTERED_FULL": $Component
static readonly "IPBANLIST_FILE": $File
static readonly "OPLIST_FILE": $File
static readonly "USERBANLIST_FILE": $File
static readonly "WHITELIST_FILE": $File

constructor(minecraftServer0: $MinecraftServer$$Type, layeredRegistryAccess1: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, playerDataStorage2: $PlayerDataStorage$$Type, int3: integer)

public "addWorldborderListener"(serverLevel0: $ServerLevel$$Type): void
public "broadcast"(player0: $Player$$Type, double1: double, double2: double, double3: double, double4: double, resourceKey5: $ResourceKey$$Type<$Level>, packet6: $Packet$$Type<any>): void
public "broadcastAll"(packet0: $Packet$$Type<any>, resourceKey1: $ResourceKey$$Type<$Level>): void
public "broadcastAll"(packet0: $Packet$$Type<any>): void
public "broadcastChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, serverPlayer1: $ServerPlayer$$Type, bound2: $ChatType$Bound$$Type): void
public "broadcastChatMessage"(playerChatMessage0: $PlayerChatMessage$$Type, commandSourceStack1: $CommandSourceStack$$Type, bound2: $ChatType$Bound$$Type): void
public "broadcastSystemMessage"(component0: $Component$$Type, boolean1: boolean): void
public "broadcastSystemMessage"(component0: $Component$$Type, function1: $Function$$Type<$ServerPlayer$$Type, $Component>, boolean2: boolean): void
public "broadcastSystemToAllExceptTeam"(player0: $Player$$Type, component1: $Component$$Type): void
public "broadcastSystemToTeam"(player0: $Player$$Type, component1: $Component$$Type): void
public "canBypassPlayerLimit"(gameProfile0: $GameProfile$$Type): boolean
public "canPlayerLogin"(socketAddress0: $SocketAddress$$Type, gameProfile1: $GameProfile$$Type): $Component
public "deop"(gameProfile0: $GameProfile$$Type): void
public "getBans"(): $UserBanList
public "getIpBans"(): $IpBanList
public "getMaxPlayers"(): integer
public "getOpNames"(): string[]
public "getOps"(): $ServerOpList
public "getPlayer"(uUID0: $UUID$$Type): $ServerPlayer
public "getPlayerAdvancements"(serverPlayer0: $ServerPlayer$$Type): $PlayerAdvancements
public "getPlayerByName"(string0: string): $ServerPlayer
public "getPlayerCount"(): integer
public "getPlayerForLogin"(gameProfile0: $GameProfile$$Type): $ServerPlayer
public "getPlayerNamesArray"(): string[]
public "getPlayerStats"(player0: $Player$$Type): $ServerStatsCounter
public "getPlayers"(): $List<$ServerPlayer>
public "getPlayersWithAddress"(string0: string): $List<$ServerPlayer>
public "getServer"(): $MinecraftServer
public "getSimulationDistance"(): integer
public "getSingleplayerData"(): $CompoundTag
public "getViewDistance"(): integer
public "getWhiteList"(): $UserWhiteList
public "getWhiteListNames"(): string[]
public "handler$dnb000$reloadResources"(ci: $CallbackInfo$$Type): void
public "handler$dnb001$placeNewPlayer"(connection: $Connection$$Type, player: $ServerPlayer$$Type, ci: $CallbackInfo$$Type): void
public "isAllowCheatsForAllPlayers"(): boolean
public "isOp"(gameProfile0: $GameProfile$$Type): boolean
public "isUsingWhitelist"(): boolean
public "isWhiteListed"(gameProfile0: $GameProfile$$Type): boolean
public "load"(serverPlayer0: $ServerPlayer$$Type): $CompoundTag
public "op"(gameProfile0: $GameProfile$$Type): void
public "placeNewPlayer"(connection0: $Connection$$Type, serverPlayer1: $ServerPlayer$$Type): void
public "reloadResources"(): void
public "reloadWhiteList"(): void
public "remove"(serverPlayer0: $ServerPlayer$$Type): void
public "removeAll"(): void
public "respawn"(serverPlayer0: $ServerPlayer$$Type, boolean1: boolean): $ServerPlayer
public "saveAll"(): void
public "sendAllPlayerInfo"(serverPlayer0: $ServerPlayer$$Type): void
public "sendLevelInfo"(serverPlayer0: $ServerPlayer$$Type, serverLevel1: $ServerLevel$$Type): void
public "sendPlayerPermissionLevel"(serverPlayer0: $ServerPlayer$$Type): void
public "setAllowCheatsForAllPlayers"(boolean0: boolean): void
public "setSimulationDistance"(int0: integer): void
public "setUsingWhiteList"(boolean0: boolean): void
public "setViewDistance"(int0: integer): void
public "tick"(): void
get "bans"(): $UserBanList
get "ipBans"(): $IpBanList
get "maxPlayers"(): integer
get "opNames"(): string[]
get "ops"(): $ServerOpList
get "playerCount"(): integer
get "playerNamesArray"(): string[]
get "players"(): $List<$ServerPlayer>
get "server"(): $MinecraftServer
get "simulationDistance"(): integer
get "singleplayerData"(): $CompoundTag
get "viewDistance"(): integer
get "whiteList"(): $UserWhiteList
get "whiteListNames"(): string[]
get "allowCheatsForAllPlayers"(): boolean
get "usingWhitelist"(): boolean
set "allowCheatsForAllPlayers"(value: boolean)
set "simulationDistance"(value: integer)
set "usingWhiteList"(value: boolean)
set "viewDistance"(value: integer)
}
}

declare module "net.minecraft.server.packs.resources.Resource" {
import { $BufferedReader } from "java.io.BufferedReader"
import { $PackResources, $PackResources$$Type } from "net.minecraft.server.packs.PackResources"
import { $IoSupplier$$Type } from "net.minecraft.server.packs.resources.IoSupplier"
import { $InputStream } from "java.io.InputStream"
import { $ResourceMetadata } from "net.minecraft.server.packs.resources.ResourceMetadata"

export class $Resource {
constructor(packResources0: $PackResources$$Type, ioSupplier1: $IoSupplier$$Type<$InputStream>, ioSupplier2: $IoSupplier$$Type<$ResourceMetadata>)
constructor(packResources0: $PackResources$$Type, ioSupplier1: $IoSupplier$$Type<$InputStream>)

public "isBuiltin"(): boolean
public "metadata"(): $ResourceMetadata
public "open"(): $InputStream
public "openAsReader"(): $BufferedReader
public "source"(): $PackResources
public "sourcePackId"(): string
get "builtin"(): boolean
}
}

declare module "net.minecraft.server.PlayerAdvancements" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $AdvancementProgress } from "net.minecraft.advancements.AdvancementProgress"
import { $Advancement$$Type } from "net.minecraft.advancements.Advancement"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $Path$$Type } from "java.nio.file.Path"
import { $PlayerAdvancementsAccessor } from "dev.uncandango.alltheleaks.mixin.core.accessor.PlayerAdvancementsAccessor"
import { $PlayerList$$Type } from "net.minecraft.server.players.PlayerList"
import { $ServerAdvancementManager$$Type } from "net.minecraft.server.ServerAdvancementManager"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $PlayerAdvancements implements $PlayerAdvancementsAccessor {
constructor(dataFixer0: $DataFixer$$Type, playerList1: $PlayerList$$Type, serverAdvancementManager2: $ServerAdvancementManager$$Type, path3: $Path$$Type, serverPlayer4: $ServerPlayer$$Type)

public "award"(advancement0: $Advancement$$Type, string1: string): boolean
public "flushDirty"(serverPlayer0: $ServerPlayer$$Type): void
public "getOrStartProgress"(advancement0: $Advancement$$Type): $AdvancementProgress
public "handler$hok000$onAward"(advancement0: $Advancement$$Type, string1: string, callbackInfoReturnable2: $CallbackInfoReturnable$$Type, boolean3: boolean): void
public "reload"(serverAdvancementManager0: $ServerAdvancementManager$$Type): void
public "revoke"(advancement0: $Advancement$$Type, string1: string): boolean
public "save"(): void
public "setPlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "setSelectedTab"(advancement0: $Advancement$$Type): void
public "stopListening"(): void
set "player"(value: $ServerPlayer$$Type)
set "selectedTab"(value: $Advancement$$Type)
}
}

declare module "net.minecraft.server.packs.resources.SimplePreparableReloadListener" {
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $PreparableReloadListener } from "net.minecraft.server.packs.resources.PreparableReloadListener"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $PreparableReloadListener$PreparationBarrier$$Type } from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"

export class $SimplePreparableReloadListener<T = any> implements $PreparableReloadListener {
constructor()

public "getName"(): string
public "reload"(preparationBarrier0: $PreparableReloadListener$PreparationBarrier$$Type, resourceManager1: $ResourceManager$$Type, profilerFiller2: $ProfilerFiller$$Type, profilerFiller3: $ProfilerFiller$$Type, executor4: $Executor$$Type, executor5: $Executor$$Type): $CompletableFuture<void>
get "name"(): string
}
}

declare module "net.minecraft.server.players.UserWhiteList" {
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $UserWhiteListEntry } from "net.minecraft.server.players.UserWhiteListEntry"
import { $File$$Type } from "java.io.File"
import { $StoredUserList } from "net.minecraft.server.players.StoredUserList"

export class $UserWhiteList extends $StoredUserList<$GameProfile, $UserWhiteListEntry> {
constructor(file0: $File$$Type)

public "isWhiteListed"(gameProfile0: $GameProfile$$Type): boolean
}
}

declare module "net.minecraft.server.packs.resources.ResourceProvider" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $Map$$Type } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $BufferedReader } from "java.io.BufferedReader"
import { $InputStream } from "java.io.InputStream"

export interface $ResourceProvider {
"getResource"(resourceLocation0: $ResourceLocation$$Type): $Optional<$Resource>
"getResourceOrThrow"(resourceLocation0: $ResourceLocation$$Type): $Resource
"open"(resourceLocation0: $ResourceLocation$$Type): $InputStream
"openAsReader"(resourceLocation0: $ResourceLocation$$Type): $BufferedReader
}

export namespace $ResourceProvider {
function fromMap(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
export abstract class $ResourceProvider$$Static implements $ResourceProvider {
static "fromMap"(map0: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>): $ResourceProvider
}
}

declare module "net.minecraft.server.players.UserWhiteListEntry" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $StoredUserEntry } from "net.minecraft.server.players.StoredUserEntry"

export class $UserWhiteListEntry extends $StoredUserEntry<$GameProfile> {
constructor(gameProfile0: $GameProfile$$Type)
constructor(jsonObject0: $JsonObject$$Type)

}
}

declare module "net.minecraft.server.packs.repository.PackCompatibility" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $Enum } from "java.lang.Enum"
import { $PackType$$Type } from "net.minecraft.server.packs.PackType"

export class $PackCompatibility extends $Enum<$PackCompatibility> {
static readonly "COMPATIBLE": $PackCompatibility
static readonly "TOO_NEW": $PackCompatibility
static readonly "TOO_OLD": $PackCompatibility

public static "forFormat"(int0: integer, packType1: $PackType$$Type): $PackCompatibility
public "getConfirmation"(): $Component
public "getDescription"(): $Component
public "isCompatible"(): boolean
public static "valueOf"(string0: string): $PackCompatibility
public static "values"(): $PackCompatibility[]
get "confirmation"(): $Component
get "description"(): $Component
get "compatible"(): boolean
}
}

declare module "net.minecraft.server.network.TextFilter" {
import { $List, $List$$Type } from "java.util.List"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $FilteredText } from "net.minecraft.server.network.FilteredText"

export interface $TextFilter {
"join"(): void
"leave"(): void
"processMessageBundle"(list0: $List$$Type<string>): $CompletableFuture<$List<$FilteredText>>
"processStreamMessage"(string0: string): $CompletableFuture<$FilteredText>
}

export namespace $TextFilter {
const DUMMY: $TextFilter
}
export abstract class $TextFilter$$Static implements $TextFilter {
static readonly "DUMMY": $TextFilter

}
}

declare module "net.minecraft.server.MinecraftServer$ServerResourcePackInfo" {
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Record } from "java.lang.Record"

export class $MinecraftServer$ServerResourcePackInfo extends $Record {
constructor(url: string, hash: string, isRequired: boolean, prompt: $Component$$Type)

public "hash"(): string
public "isRequired"(): boolean
public "prompt"(): $Component
public "url"(): string
get "required"(): boolean
}
}

declare module "net.minecraft.server.bossevents.CustomBossEvents" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $CustomBossEvent, $CustomBossEvent$$Type } from "net.minecraft.server.bossevents.CustomBossEvent"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Component$$Type } from "net.minecraft.network.chat.Component"
import { $Collection } from "java.util.Collection"

export class $CustomBossEvents {
constructor()

public "create"(resourceLocation0: $ResourceLocation$$Type, component1: $Component$$Type): $CustomBossEvent
public "get"(resourceLocation0: $ResourceLocation$$Type): $CustomBossEvent
public "getEvents"(): $Collection<$CustomBossEvent>
public "getIds"(): $Collection<$ResourceLocation>
public "load"(compoundTag0: $CompoundTag$$Type): void
public "onPlayerConnect"(serverPlayer0: $ServerPlayer$$Type): void
public "onPlayerDisconnect"(serverPlayer0: $ServerPlayer$$Type): void
public "remove"(customBossEvent0: $CustomBossEvent$$Type): void
public "save"(): $CompoundTag
get "events"(): $Collection<$CustomBossEvent>
get "ids"(): $Collection<$ResourceLocation>
}
}

declare module "net.minecraft.server.packs.repository.Pack$ResourcesSupplier" {
import { $PackResources } from "net.minecraft.server.packs.PackResources"

export interface $Pack$ResourcesSupplier {
"open"(string0: string): $PackResources
}

export namespace $Pack$ResourcesSupplier {
const probejs$$marker: never
}
export abstract class $Pack$ResourcesSupplier$$Static implements $Pack$ResourcesSupplier {
}
}

declare module "net.minecraft.server.players.ServerOpList" {
import { $ServerOpListEntry } from "net.minecraft.server.players.ServerOpListEntry"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $File$$Type } from "java.io.File"
import { $StoredUserList } from "net.minecraft.server.players.StoredUserList"

export class $ServerOpList extends $StoredUserList<$GameProfile, $ServerOpListEntry> {
constructor(file0: $File$$Type)

public "canBypassPlayerLimit"(gameProfile0: $GameProfile$$Type): boolean
}
}

declare module "net.minecraft.server.ServerFunctionManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CommandDispatcher } from "com.mojang.brigadier.CommandDispatcher"
import { $ExtraServerFunctionManager } from "com.mega.endinglib.util.mixin.data_expand.ExtraServerFunctionManager"
import { $CommandSourceStack, $CommandSourceStack$$Type } from "net.minecraft.commands.CommandSourceStack"
import { $Collection } from "java.util.Collection"
import { $Iterable } from "java.lang.Iterable"
import { $IProfilingServerFunctionManager } from "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager"
import { $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $CommandFunction, $CommandFunction$$Type } from "net.minecraft.commands.CommandFunction"
import { $ServerFunctionLibrary$$Type } from "net.minecraft.server.ServerFunctionLibrary"
import { $Optional } from "java.util.Optional"
import { $ServerFunctionManager$TraceCallbacks$$Type } from "net.minecraft.server.ServerFunctionManager$TraceCallbacks"

export class $ServerFunctionManager implements $IProfilingServerFunctionManager, $ExtraServerFunctionManager {
constructor(minecraftServer0: $MinecraftServer$$Type, serverFunctionLibrary1: $ServerFunctionLibrary$$Type)

public "execute"(commandFunction0: $CommandFunction$$Type, commandSourceStack1: $CommandSourceStack$$Type, traceCallbacks2: $ServerFunctionManager$TraceCallbacks$$Type, compoundTag3: $CompoundTag$$Type): integer
public "execute"(commandFunction0: $CommandFunction$$Type, commandSourceStack1: $CommandSourceStack$$Type): integer
public "execute"(commandFunction0: $CommandFunction$$Type, commandSourceStack1: $CommandSourceStack$$Type, traceCallbacks2: $ServerFunctionManager$TraceCallbacks$$Type): integer
public "get"(resourceLocation0: $ResourceLocation$$Type): $Optional<$CommandFunction>
public "getCommandLimit"(): integer
public "getDispatcher"(): $CommandDispatcher<$CommandSourceStack>
public "getFunctionNames"(): $Iterable<$ResourceLocation>
public "getGameLoopSender"(): $CommandSourceStack
public "getTag"(resourceLocation0: $ResourceLocation$$Type): $Collection<$CommandFunction>
public "getTagNames"(): $Iterable<$ResourceLocation>
public "mfix$getProfilingResults"(): string
public static "of"(serverFunctionManager0: $ServerFunctionManager$$Type): $ExtraServerFunctionManager
public "replaceLibrary"(serverFunctionLibrary0: $ServerFunctionLibrary$$Type): void
public "tick"(): void
get "commandLimit"(): integer
get "dispatcher"(): $CommandDispatcher<$CommandSourceStack>
get "functionNames"(): $Iterable<$ResourceLocation>
get "gameLoopSender"(): $CommandSourceStack
get "tagNames"(): $Iterable<$ResourceLocation>
}
}

declare module "net.minecraft.server.players.StoredUserEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $StoredUserEntry<T = any> {
constructor(t0: T)

}
}

declare module "net.minecraft.server.players.IpBanListEntry" {
import { $JsonObject$$Type } from "com.google.gson.JsonObject"
import { $BanListEntry } from "net.minecraft.server.players.BanListEntry"
import { $Date$$Type } from "java.util.Date"

export class $IpBanListEntry extends $BanListEntry<string> {
constructor(jsonObject0: $JsonObject$$Type)
constructor(string0: string, date1: $Date$$Type, string2: string, date3: $Date$$Type, string4: string)
constructor(string0: string)

}
}

declare module "net.minecraft.server.level.ThreadedLevelLightEngine" {
import { $ProcessorMailbox$$Type } from "net.minecraft.util.thread.ProcessorMailbox"
import { $ChunkTaskPriorityQueueSorter$Message$$Type } from "net.minecraft.server.level.ChunkTaskPriorityQueueSorter$Message"
import { $LevelLightEngine } from "net.minecraft.world.level.lighting.LevelLightEngine"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ProcessorHandle$$Type } from "net.minecraft.util.thread.ProcessorHandle"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $ChunkMap$$Type } from "net.minecraft.server.level.ChunkMap"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $LightChunkGetter$$Type } from "net.minecraft.world.level.chunk.LightChunkGetter"
import { $ChunkAccess, $ChunkAccess$$Type } from "net.minecraft.world.level.chunk.ChunkAccess"

export class $ThreadedLevelLightEngine extends $LevelLightEngine implements $AutoCloseable {
static readonly "DEFAULT_BATCH_SIZE": integer

constructor(lightChunkGetter0: $LightChunkGetter$$Type, chunkMap1: $ChunkMap$$Type, boolean2: boolean, processorMailbox3: $ProcessorMailbox$$Type<$Runnable$$Type>, processorHandle4: $ProcessorHandle$$Type<$ChunkTaskPriorityQueueSorter$Message$$Type<$Runnable$$Type>>)

public "close"(): void
public "initializeLight"(chunkAccess0: $ChunkAccess$$Type, boolean1: boolean): $CompletableFuture<$ChunkAccess>
public "lightChunk"(chunkAccess0: $ChunkAccess$$Type, boolean1: boolean): $CompletableFuture<$ChunkAccess>
public "tryScheduleUpdate"(): void
public "updateSectionStatus"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
}
}

declare module "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier" {
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"

export interface $PreparableReloadListener$PreparationBarrier {
"wait"<T>(t0: T): $CompletableFuture<T>
}

export namespace $PreparableReloadListener$PreparationBarrier {
const probejs$$marker: never
}
export abstract class $PreparableReloadListener$PreparationBarrier$$Static implements $PreparableReloadListener$PreparationBarrier {
}
}

declare module "net.minecraft.server.WorldStem" {
import { $WorldData, $WorldData$$Type } from "net.minecraft.world.level.storage.WorldData"
import { $LayeredRegistryAccess, $LayeredRegistryAccess$$Type } from "net.minecraft.core.LayeredRegistryAccess"
import { $Record } from "java.lang.Record"
import { $ReloadableServerResources, $ReloadableServerResources$$Type } from "net.minecraft.server.ReloadableServerResources"
import { $RegistryLayer, $RegistryLayer$$Type } from "net.minecraft.server.RegistryLayer"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $CloseableResourceManager, $CloseableResourceManager$$Type } from "net.minecraft.server.packs.resources.CloseableResourceManager"

export class $WorldStem extends $Record implements $AutoCloseable {
constructor(closeableResourceManager0: $CloseableResourceManager$$Type, reloadableServerResources1: $ReloadableServerResources$$Type, layeredRegistryAccess2: $LayeredRegistryAccess$$Type<$RegistryLayer$$Type>, worldData3: $WorldData$$Type)

public "close"(): void
public "dataPackResources"(): $ReloadableServerResources
public "registries"(): $LayeredRegistryAccess<$RegistryLayer>
public "resourceManager"(): $CloseableResourceManager
public "worldData"(): $WorldData
}
}

declare module "net.minecraft.server.network.ServerConnectionListener" {
import { $InetAddress$$Type } from "java.net.InetAddress"
import { $MinecraftServer, $MinecraftServer$$Type } from "net.minecraft.server.MinecraftServer"
import { $List } from "java.util.List"
import { $SocketAddress } from "java.net.SocketAddress"
import { $EpollEventLoopGroup } from "io.netty.channel.epoll.EpollEventLoopGroup"
import { $Connection } from "net.minecraft.network.Connection"
import { $NioEventLoopGroup } from "io.netty.channel.nio.NioEventLoopGroup"
import { $LazyLoadedValue } from "net.minecraft.util.LazyLoadedValue"

export class $ServerConnectionListener {
static readonly "SERVER_EPOLL_EVENT_GROUP": $LazyLoadedValue<$EpollEventLoopGroup>
static readonly "SERVER_EVENT_GROUP": $LazyLoadedValue<$NioEventLoopGroup>

constructor(minecraftServer0: $MinecraftServer$$Type)

public "getConnections"(): $List<$Connection>
public "getServer"(): $MinecraftServer
public "startMemoryChannel"(): $SocketAddress
public "startTcpServerListener"(inetAddress0: $InetAddress$$Type, int1: integer): void
public "stop"(): void
public "tick"(): void
get "running"(): boolean
set "running"(value: boolean)
get "connections"(): $List<$Connection>
get "server"(): $MinecraftServer
}
}

declare module "net.minecraft.server.network.FilteredText" {
import { $FilterMask, $FilterMask$$Type } from "net.minecraft.network.chat.FilterMask"
import { $Record } from "java.lang.Record"

export class $FilteredText extends $Record {
static readonly "EMPTY": $FilteredText

constructor(string0: string, filterMask1: $FilterMask$$Type)

public "filtered"(): string
public "filteredOrEmpty"(): string
public static "fullyFiltered"(string0: string): $FilteredText
public "isFiltered"(): boolean
public "mask"(): $FilterMask
public static "passThrough"(string0: string): $FilteredText
public "raw"(): string
}
}

declare module "net.minecraft.server.level.ChunkMap$TrackedEntity" {
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $List$$Type } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ServerPlayerConnection } from "net.minecraft.server.network.ServerPlayerConnection"
import { $EntityTrackerAccessor } from "tocraft.walkers.mixin.EntityTrackerAccessor"
import { $Set } from "java.util.Set"
import { $Packet$$Type } from "net.minecraft.network.protocol.Packet"
import { $ChunkMap$$Type } from "net.minecraft.server.level.ChunkMap"
import { $AccessorTrackedEntity } from "com.mega.endinglib.mixin.accessor.AccessorTrackedEntity"
import { $EntityTrackerAccessor as $EntityTrackerAccessor$0 } from "net.fabricmc.fabric.mixin.networking.accessor.EntityTrackerAccessor"

export class $ChunkMap$TrackedEntity implements $AccessorTrackedEntity, $EntityTrackerAccessor$0, $EntityTrackerAccessor {
readonly "entity": $Entity
readonly "seenBy": $Set<$ServerPlayerConnection>

constructor(chunkMap0: $ChunkMap$$Type, entity1: $Entity$$Type, int2: integer, int3: integer, boolean4: boolean)

public "broadcast"(packet0: $Packet$$Type<any>): void
public "broadcastAndSend"(packet0: $Packet$$Type<any>): void
public "broadcastRemoved"(): void
public "removePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "updatePlayer"(serverPlayer0: $ServerPlayer$$Type): void
public "updatePlayers"(list0: $List$$Type<$ServerPlayer$$Type>): void
}
}

declare module "net.minecraft.server.packs.repository.Pack$Position" {
import { $List$$Type } from "java.util.List"
import { $Enum } from "java.lang.Enum"
import { $Pack } from "net.minecraft.server.packs.repository.Pack"
import { $Function$$Type } from "java.util.function.Function"

export class $Pack$Position extends $Enum<$Pack$Position> {
static readonly "BOTTOM": $Pack$Position
static readonly "TOP": $Pack$Position

public "insert"<T>(list0: $List$$Type<T>, t1: T, function2: $Function$$Type<T, $Pack>, boolean3: boolean): integer
public "opposite"(): $Pack$Position
public static "valueOf"(string0: string): $Pack$Position
public static "values"(): $Pack$Position[]
}
}

