declare module "net.minecraft.client.sounds.SoundBufferLibrary" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundBuffer } from "com.mojang.blaze3d.audio.SoundBuffer"
import { $SoundBufferLibraryAccessor } from "net.lixir.vminus.mixins.client.sounds.SoundBufferLibraryAccessor"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $Collection$$Type } from "java.util.Collection"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $AudioStream } from "net.minecraft.client.sounds.AudioStream"
import { $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $SoundBufferLibrary implements $SoundBufferLibraryAccessor {
constructor(resourceProvider0: $ResourceProvider$$Type)

public "clear"(): void
public "getCompleteBuffer"(resourceLocation0: $ResourceLocation$$Type): $CompletableFuture<$SoundBuffer>
public "getStream"(resourceLocation0: $ResourceLocation$$Type, boolean1: boolean): $CompletableFuture<$AudioStream>
public "handler$cdk000$supportOpus"(resourceLocation0: $ResourceLocation$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "preload"(collection0: $Collection$$Type<$Sound$$Type>): $CompletableFuture<any>
}
}

declare module "net.minecraft.client.sounds.AudioStream" {
import { $Closeable } from "java.io.Closeable"
import { $AudioFormat } from "javax.sound.sampled.AudioFormat"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export interface $AudioStream extends $Closeable {
"close"(): void
"getFormat"(): $AudioFormat
"read"(int0: integer): $ByteBuffer
get "format"(): $AudioFormat
}

export namespace $AudioStream {
const probejs$$marker: never
}
export abstract class $AudioStream$$Static implements $AudioStream {
}
}

declare module "net.minecraft.client.sounds.Weighted" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"

export interface $Weighted<T = any> {
"getSound"(randomSource0: $RandomSource$$Type): T
"getWeight"(): integer
"preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
get "weight"(): integer
}

export namespace $Weighted {
const probejs$$marker: never
}
export abstract class $Weighted$$Static<T = any> implements $Weighted<T> {
}
}

declare module "net.minecraft.client.sounds.SoundEventListener" {
import { $WeighedSoundEvents$$Type } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $SoundEventListener {
"onPlaySound"(soundInstance0: $SoundInstance$$Type, weighedSoundEvents1: $WeighedSoundEvents$$Type): void
}

export namespace $SoundEventListener {
const probejs$$marker: never
}
export abstract class $SoundEventListener$$Static implements $SoundEventListener {
}
}

declare module "net.minecraft.client.sounds.MusicManager" {
import { $Music$$Type } from "net.minecraft.sounds.Music"
import { $Minecraft$$Type } from "net.minecraft.client.Minecraft"

export class $MusicManager {
constructor(minecraft0: $Minecraft$$Type)

public "isPlayingMusic"(music0: $Music$$Type): boolean
public "startPlaying"(music0: $Music$$Type): void
public "stopPlaying"(): void
public "stopPlaying"(music0: $Music$$Type): void
public "tick"(): void
}
}

declare module "net.minecraft.client.sounds.SoundEngine" {
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $SoundEventListener$$Type } from "net.minecraft.client.sounds.SoundEventListener"
import { $SoundInstance, $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $SoundManager, $SoundManager$$Type } from "net.minecraft.client.sounds.SoundManager"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $List } from "java.util.List"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $TickableSoundInstance, $TickableSoundInstance$$Type } from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import { $Map } from "java.util.Map"
import { $ResourceProvider$$Type } from "net.minecraft.server.packs.resources.ResourceProvider"
import { $DuckSoundEngine } from "dynamic_fps.impl.util.duck.DuckSoundEngine"
import { $ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$$Type } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"
import { $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export class $SoundEngine implements $DuckSoundEngine {
static readonly "MISSING_SOUND": string
static readonly "OPEN_AL_SOFT_PREFIX": string
static readonly "OPEN_AL_SOFT_PREFIX_LENGTH": integer
readonly "instanceToChannel": $Map<$SoundInstance, $ChannelAccess$ChannelHandle>
readonly "queuedTickableSounds": $List<$TickableSoundInstance>
readonly "soundDeleteTime": $Map<$SoundInstance, integer>
readonly "soundManager": $SoundManager
readonly "tickingSounds": $List<$TickableSoundInstance>

constructor(soundManager0: $SoundManager$$Type, options1: $Options$$Type, resourceProvider2: $ResourceProvider$$Type)

public "addEventListener"(soundEventListener0: $SoundEventListener$$Type): void
public "dampenSoundsFromNuke"(): void
public "destroy"(): void
public "dynamic_fps$updateVolume"(source: $SoundSource$$Type): void
public "getAvailableSoundDevices"(): $List<string>
public "getDebugString"(): string
public "handler$fbi000$onSoundEngineStop"(callbackInfo0: $CallbackInfo$$Type): void
public "handler$fbi000$play"(soundInstance0: $SoundInstance$$Type, callbackInfo1: $CallbackInfo$$Type, channelHandle2: $ChannelAccess$ChannelHandle$$Type): void
public "isActive"(soundInstance0: $SoundInstance$$Type): boolean
public "pause"(): void
public "play"(soundInstance0: $SoundInstance$$Type): void
public "playDelayed"(soundInstance0: $SoundInstance$$Type, int1: integer): void
public "queueTickingSound"(tickableSoundInstance0: $TickableSoundInstance$$Type): void
public "reload"(): void
public "removeEventListener"(soundEventListener0: $SoundEventListener$$Type): void
public "requestPreload"(sound0: $Sound$$Type): void
public "resume"(): void
public "stop"(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type): void
public "stop"(soundInstance0: $SoundInstance$$Type): void
public "stopAll"(): void
public "tick"(boolean0: boolean): void
public "updateCategoryVolume"(soundSource0: $SoundSource$$Type, float1: float): void
public "updateSource"(camera0: $Camera$$Type): void
get "loaded"(): boolean
set "loaded"(value: boolean)
get "tickCount"(): integer
set "tickCount"(value: integer)
get "availableSoundDevices"(): $List<string>
get "debugString"(): string
}
}

declare module "net.minecraft.client.sounds.SoundManager$Preparations" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Resource, $Resource$$Type } from "net.minecraft.server.packs.resources.Resource"
import { $WeighedSoundEvents$$Type } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $Map, $Map$$Type } from "java.util.Map"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"

export class $SoundManager$Preparations {
public "apply"(map0: $Map$$Type<$ResourceLocation$$Type, $WeighedSoundEvents$$Type>, map1: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>, soundEngine2: $SoundEngine$$Type): void
get "soundCache"(): $Map<$ResourceLocation, $Resource>
set "soundCache"(value: $Map$$Type<$ResourceLocation$$Type, $Resource$$Type>)
}
}

declare module "net.minecraft.client.sounds.WeighedSoundEvents" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Weighted, $Weighted$$Type } from "net.minecraft.client.sounds.Weighted"
import { $Component } from "net.minecraft.network.chat.Component"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $SoundEngine$$Type } from "net.minecraft.client.sounds.SoundEngine"
import { $Sound, $Sound$$Type } from "net.minecraft.client.resources.sounds.Sound"

export class $WeighedSoundEvents implements $Weighted<$Sound> {
constructor(resourceLocation0: $ResourceLocation$$Type, string1: string)

public "addSound"(weighted0: $Weighted$$Type<$Sound$$Type>): void
public "getSound"(randomSource0: $RandomSource$$Type): $Sound
public "getSubtitle"(): $Component
public "getWeight"(): integer
public "preloadIfRequired"(soundEngine0: $SoundEngine$$Type): void
get "subtitle"(): $Component
get "weight"(): integer
}
}

declare module "net.minecraft.client.sounds.ChannelAccess" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Library$$Type } from "com.mojang.blaze3d.audio.Library"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ChannelAccess$ChannelHandle } from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"
import { $Library$Pool$$Type } from "com.mojang.blaze3d.audio.Library$Pool"
import { $CompletableFuture } from "java.util.concurrent.CompletableFuture"
import { $Channel$$Type } from "com.mojang.blaze3d.audio.Channel"

export class $ChannelAccess {
constructor(library0: $Library$$Type, executor1: $Executor$$Type)

public "clear"(): void
public "createHandle"(pool0: $Library$Pool$$Type): $CompletableFuture<$ChannelAccess$ChannelHandle>
public "executeOnChannels"(consumer0: $Consumer$$Type<$Stream$$Type<$Channel$$Type>>): void
public "scheduleTick"(): void
}
}

declare module "net.minecraft.client.sounds.SoundManager" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SoundSource$$Type } from "net.minecraft.sounds.SoundSource"
import { $Camera$$Type } from "net.minecraft.client.Camera"
import { $Resource } from "net.minecraft.server.packs.resources.Resource"
import { $SoundEventListener$$Type } from "net.minecraft.client.sounds.SoundEventListener"
import { $WeighedSoundEvents } from "net.minecraft.client.sounds.WeighedSoundEvents"
import { $ProfilerFiller$$Type } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Collection } from "java.util.Collection"
import { $SoundInstance$$Type } from "net.minecraft.client.resources.sounds.SoundInstance"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $SoundEngine } from "net.minecraft.client.sounds.SoundEngine"
import { $SimplePreparableReloadListener } from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import { $List } from "java.util.List"
import { $Options$$Type } from "net.minecraft.client.Options"
import { $Gson } from "com.google.gson.Gson"
import { $SoundManager$Preparations } from "net.minecraft.client.sounds.SoundManager$Preparations"
import { $TickableSoundInstance$$Type } from "net.minecraft.client.resources.sounds.TickableSoundInstance"
import { $Map } from "java.util.Map"
import { $Sound } from "net.minecraft.client.resources.sounds.Sound"
import { $IdentifiableResourceReloadListener } from "net.fabricmc.fabric.api.resource.IdentifiableResourceReloadListener"

export class $SoundManager extends $SimplePreparableReloadListener<$SoundManager$Preparations> implements $IdentifiableResourceReloadListener {
static readonly "EMPTY_SOUND": $Sound
static readonly "GSON": $Gson
static readonly "INTENTIONALLY_EMPTY_SOUND": $Sound
static readonly "INTENTIONALLY_EMPTY_SOUND_EVENT": $WeighedSoundEvents
static readonly "INTENTIONALLY_EMPTY_SOUND_LOCATION": $ResourceLocation
readonly "soundCache": $Map<$ResourceLocation, $Resource>
readonly "soundEngine": $SoundEngine

constructor(options0: $Options$$Type)

public "addListener"(soundEventListener0: $SoundEventListener$$Type): void
public "destroy"(): void
public "getAvailableSoundDevices"(): $List<string>
public "getAvailableSounds"(): $Collection<$ResourceLocation>
public "getDebugString"(): string
public "getFabricDependencies"(): $Collection
public "getFabricId"(): $ResourceLocation
public "getName"(): string
public "getSoundEvent"(resourceLocation0: $ResourceLocation$$Type): $WeighedSoundEvents
public "isActive"(soundInstance0: $SoundInstance$$Type): boolean
public "pause"(): void
public "play"(soundInstance0: $SoundInstance$$Type): void
public "playDelayed"(soundInstance0: $SoundInstance$$Type, int1: integer): void
public "prepare"(resourceManager0: $ResourceManager$$Type, profilerFiller1: $ProfilerFiller$$Type): $SoundManager$Preparations
public "queueTickingSound"(tickableSoundInstance0: $TickableSoundInstance$$Type): void
public "reload"(): void
public "removeListener"(soundEventListener0: $SoundEventListener$$Type): void
public "resume"(): void
public "stop"(soundInstance0: $SoundInstance$$Type): void
public "stop"(): void
public "stop"(resourceLocation0: $ResourceLocation$$Type, soundSource1: $SoundSource$$Type): void
public "tick"(boolean0: boolean): void
public "updateSource"(camera0: $Camera$$Type): void
public "updateSourceVolume"(soundSource0: $SoundSource$$Type, float1: float): void
get "availableSoundDevices"(): $List<string>
get "availableSounds"(): $Collection<$ResourceLocation>
get "debugString"(): string
get "fabricDependencies"(): $Collection
get "fabricId"(): $ResourceLocation
get "name"(): string
}
}

declare module "net.minecraft.client.sounds.ChannelAccess$ChannelHandle" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $ChannelAccess$$Type } from "net.minecraft.client.sounds.ChannelAccess"
import { $Channel$$Type } from "com.mojang.blaze3d.audio.Channel"

export class $ChannelAccess$ChannelHandle {
constructor(channelAccess0: $ChannelAccess$$Type, channel1: $Channel$$Type)

public "execute"(consumer0: $Consumer$$Type<$Channel$$Type>): void
public "handler$fap000$release"(callbackInfo0: $CallbackInfo$$Type): void
public "isStopped"(): boolean
public "release"(): void
get "stopped"(): boolean
}
}

