declare module "com.finderfeed.fdlib.systems.screen.screen_particles.ScreenParticlesRenderEvent$Screen" {
import { $ScreenParticlesRenderEvent } from "com.finderfeed.fdlib.systems.screen.screen_particles.ScreenParticlesRenderEvent"

export class $ScreenParticlesRenderEvent$Screen extends $ScreenParticlesRenderEvent {
constructor()

}
}

declare module "com.finderfeed.fdlib.systems.screen.screen_particles.ScreenParticlesRenderEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $ScreenParticlesRenderEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "com.finderfeed.fdlib.systems.post_shaders.FDPostShaderInitializeEvent" {
import { $PostChainLoad$$Type } from "com.finderfeed.fdlib.systems.post_shaders.PostChainLoad"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $List } from "java.util.List"
import { $FDPostShaderInitializeEvent$PostChainShaderLoadInstance } from "com.finderfeed.fdlib.systems.post_shaders.FDPostShaderInitializeEvent$PostChainShaderLoadInstance"
import { $PostChain$$Type } from "net.minecraft.client.renderer.PostChain"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $FDPostShaderInitializeEvent extends $Event implements $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getPostChainRegistry"(): $List<$FDPostShaderInitializeEvent$PostChainShaderLoadInstance>
public "registerPostChain"(postChainLoad0: $PostChainLoad$$Type, consumer1: $Consumer$$Type<$PostChain$$Type>): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "postChainRegistry"(): $List<$FDPostShaderInitializeEvent$PostChainShaderLoadInstance>
}
}

declare module "com.finderfeed.fdlib.systems.post_shaders.PostChainLoad" {
import { $PostChain } from "net.minecraft.client.renderer.PostChain"
import { $RenderTarget$$Type } from "com.mojang.blaze3d.pipeline.RenderTarget"
import { $ResourceManager$$Type } from "net.minecraft.server.packs.resources.ResourceManager"
import { $TextureManager$$Type } from "net.minecraft.client.renderer.texture.TextureManager"

export interface $PostChainLoad {
"loadPostChain"(textureManager0: $TextureManager$$Type, resourceManager1: $ResourceManager$$Type, renderTarget2: $RenderTarget$$Type): $PostChain
}

export namespace $PostChainLoad {
const probejs$$marker: never
}
export abstract class $PostChainLoad$$Static implements $PostChainLoad {
}
}

declare module "com.finderfeed.fdlib.systems.post_shaders.FDRenderPostShaderEvent$Level" {
import { $FDRenderPostShaderEvent } from "com.finderfeed.fdlib.systems.post_shaders.FDRenderPostShaderEvent"

export class $FDRenderPostShaderEvent$Level extends $FDRenderPostShaderEvent {
constructor(float0: float)
constructor()

}
}

declare module "com.finderfeed.fdlib.systems.post_shaders.FDPostShaderInitializeEvent$PostChainShaderLoadInstance" {
import { $PostChainLoad, $PostChainLoad$$Type } from "com.finderfeed.fdlib.systems.post_shaders.PostChainLoad"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $PostChain, $PostChain$$Type } from "net.minecraft.client.renderer.PostChain"
import { $Record } from "java.lang.Record"

export class $FDPostShaderInitializeEvent$PostChainShaderLoadInstance extends $Record {
constructor(postChainLoad: $PostChainLoad$$Type, onLoad: $Consumer$$Type<$PostChain$$Type>)

public "onLoad"(): $Consumer<$PostChain>
public "postChainLoad"(): $PostChainLoad
}
}

declare module "com.finderfeed.fdlib.systems.post_shaders.FDRenderPostShaderEvent$Screen" {
import { $FDRenderPostShaderEvent } from "com.finderfeed.fdlib.systems.post_shaders.FDRenderPostShaderEvent"

export class $FDRenderPostShaderEvent$Screen extends $FDRenderPostShaderEvent {
constructor(float0: float)
constructor()

}
}

declare module "com.finderfeed.fdlib.systems.post_shaders.FDRenderPostShaderEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $FDRenderPostShaderEvent extends $Event implements $EventItf {
constructor()
constructor(float0: float)

public "doDefaultShaderBeforeShaderStuff"(): void
public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getPartialTicks"(): float
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "partialTicks"(): float
}
}

declare module "com.finderfeed.fdlib.systems.screen.screen_particles.ScreenParticlesRenderEvent$Gui" {
import { $ScreenParticlesRenderEvent } from "com.finderfeed.fdlib.systems.screen.screen_particles.ScreenParticlesRenderEvent"

export class $ScreenParticlesRenderEvent$Gui extends $ScreenParticlesRenderEvent {
constructor()

}
}

