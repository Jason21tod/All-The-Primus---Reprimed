declare module "mod.azure.azurelib.animation.controller.keyframe.handler.AzSoundKeyframeHandler" {
import { $AzSoundKeyframeEvent$$Type } from "mod.azure.azurelib.animation.event.AzSoundKeyframeEvent"

export interface $AzSoundKeyframeHandler<A = any> {
"handle"(azSoundKeyframeEvent0: $AzSoundKeyframeEvent$$Type<A>): void
}

export namespace $AzSoundKeyframeHandler {
const probejs$$marker: never
}
export abstract class $AzSoundKeyframeHandler$$Static<A = any> implements $AzSoundKeyframeHandler<A> {
}
}

declare module "mod.azure.azurelib.animation.controller.AzBoneAnimationQueueCache" {
import { $Collection } from "java.util.Collection"
import { $AzBoneCache$$Type } from "mod.azure.azurelib.animation.cache.AzBoneCache"
import { $AzEasingType$$Type } from "mod.azure.azurelib.animation.easing.AzEasingType"
import { $AzBoneAnimationQueue } from "mod.azure.azurelib.animation.controller.keyframe.AzBoneAnimationQueue"

export class $AzBoneAnimationQueueCache<T = any> {
constructor(azBoneCache0: $AzBoneCache$$Type)

public "clear"(): void
public "getOrNull"(string0: string): $AzBoneAnimationQueue
public "update"(azEasingType0: $AzEasingType$$Type): void
public "values"(): $Collection<$AzBoneAnimationQueue>
}
}

declare module "mod.azure.azurelib.animation.controller.state.impl.AzAnimationStopState" {
import { $AzAnimationState } from "mod.azure.azurelib.animation.controller.state.AzAnimationState"
import { $AzAnimationControllerStateMachine$Context$$Type } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context"

export class $AzAnimationStopState<T = any> extends $AzAnimationState<T> {
constructor()

public "onUpdate"(context0: $AzAnimationControllerStateMachine$Context$$Type<T>): void
}
}

declare module "mod.azure.azurelib.loading.json.raw.PolysUnion" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"
import { $PolysUnion$Type, $PolysUnion$Type$$Type } from "mod.azure.azurelib.loading.json.raw.PolysUnion$Type"

export class $PolysUnion extends $Record {
constructor(union: double[][][], type: $PolysUnion$Type$$Type)

public static "deserializer"(): $JsonDeserializer<$PolysUnion>
public "type"(): $PolysUnion$Type
public "union"(): double[][][]
}
}

declare module "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine" {
import { $AzAnimationContext$$Type } from "mod.azure.azurelib.animation.AzAnimationContext"
import { $StateMachine } from "mod.azure.azurelib.util.state.StateMachine"
import { $AzAnimationControllerStateMachine$StateHolder$$Type } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$StateHolder"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $AzAnimationState } from "mod.azure.azurelib.animation.controller.state.AzAnimationState"
import { $AzAnimationControllerStateMachine$Context } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context"

export class $AzAnimationControllerStateMachine<T = any> extends $StateMachine<$AzAnimationControllerStateMachine$Context<T>, $AzAnimationState<T>> {
constructor(stateHolder0: $AzAnimationControllerStateMachine$StateHolder$$Type<T>, azAnimationController1: $AzAnimationController$$Type<T>, azAnimationContext2: $AzAnimationContext$$Type<T>)

public "createContext"(): $AzAnimationControllerStateMachine$Context<T>
public "initializeContext"(azAnimationController0: $AzAnimationController$$Type<T>, azAnimationContext1: $AzAnimationContext$$Type<T>): void
public "isPaused"(): boolean
public "isPlaying"(): boolean
public "isStopped"(): boolean
public "isTransitioning"(): boolean
public "pause"(): void
public "play"(): void
public "stop"(): void
public "transition"(): void
public "update"(): void
get "paused"(): boolean
get "playing"(): boolean
get "stopped"(): boolean
get "transitioning"(): boolean
}
}

declare module "mod.azure.azurelib.cache.object.GeoVertex" {
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Record } from "java.lang.Record"

export class $GeoVertex extends $Record {
constructor(double0: double, double1: double, double2: double)
constructor(position: $Vector3f$$Type, texU: float, texV: float)

public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(float0: float, float1: float): $GeoVertex
}
}

declare module "mod.azure.azurelib.util.state.StateMachine" {
import { $State, $State$$Type } from "mod.azure.azurelib.util.state.State"
import { $StateMachineContext, $StateMachineContext$$Type } from "mod.azure.azurelib.util.state.StateMachineContext"

export class $StateMachine<C extends $StateMachineContext = $StateMachineContext, T extends $State<C> = $State<C>> {
constructor(t0: T)

public "getContext"(): C
public "getState"(): T
public "setState"(t0: T): void
public "update"(c0: C): void
get "context"(): C
get "state"(): T
set "state"(value: T)
}
}

declare module "mod.azure.azurelib.animation.controller.state.AzAnimationState" {
import { $AzAnimationControllerStateMachine$Context, $AzAnimationControllerStateMachine$Context$$Type } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context"
import { $State } from "mod.azure.azurelib.util.state.State"

export class $AzAnimationState<T = any> implements $State<$AzAnimationControllerStateMachine$Context<T>> {
public "isActive"(): boolean
public "onEnter"(context0: $AzAnimationControllerStateMachine$Context$$Type<T>): void
public "onExit"(context0: $AzAnimationControllerStateMachine$Context$$Type<T>): void
public "onUpdate"(context0: $AzAnimationControllerStateMachine$Context$$Type<T>): void
get "active"(): boolean
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks$Builder" {
import { $AzSoundKeyframeHandler$$Type } from "mod.azure.azurelib.animation.controller.keyframe.handler.AzSoundKeyframeHandler"
import { $AzKeyframeCallbacks } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks"
import { $AzCustomKeyframeHandler$$Type } from "mod.azure.azurelib.animation.controller.keyframe.handler.AzCustomKeyframeHandler"
import { $AzParticleKeyframeHandler$$Type } from "mod.azure.azurelib.animation.controller.keyframe.handler.AzParticleKeyframeHandler"

export class $AzKeyframeCallbacks$Builder<T = any> {
public "build"(): $AzKeyframeCallbacks<T>
public "setCustomInstructionKeyframeHandler"(azCustomKeyframeHandler0: $AzCustomKeyframeHandler$$Type<T>): $AzKeyframeCallbacks$Builder<T>
public "setParticleKeyframeHandler"(azParticleKeyframeHandler0: $AzParticleKeyframeHandler$$Type<T>): $AzKeyframeCallbacks$Builder<T>
public "setSoundKeyframeHandler"(azSoundKeyframeHandler0: $AzSoundKeyframeHandler$$Type<T>): $AzKeyframeCallbacks$Builder<T>
set "customInstructionKeyframeHandler"(value: $AzCustomKeyframeHandler$$Type<T>)
set "particleKeyframeHandler"(value: $AzParticleKeyframeHandler$$Type<T>)
set "soundKeyframeHandler"(value: $AzSoundKeyframeHandler$$Type<T>)
}
}

declare module "mod.azure.azurelib.loading.json.raw.LocatorClass" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"

export class $LocatorClass extends $Record {
constructor(ignoreInheritedScale: boolean, offset: double[], rotation: double[])

public static "deserializer"(): $JsonDeserializer<$LocatorClass>
public "ignoreInheritedScale"(): boolean
public "offset"(): double[]
public "rotation"(): double[]
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzBoneAnimation" {
import { $AzKeyframe, $AzKeyframe$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframe"
import { $IValue, $IValue$$Type } from "mod.azure.azurelib.core.math.IValue"
import { $AzKeyframeStack, $AzKeyframeStack$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeStack"
import { $Record } from "java.lang.Record"

export class $AzBoneAnimation extends $Record {
constructor(boneName: string, rotationKeyframes: $AzKeyframeStack$$Type<$AzKeyframe$$Type<$IValue$$Type>>, positionKeyframes: $AzKeyframeStack$$Type<$AzKeyframe$$Type<$IValue$$Type>>, scaleKeyframes: $AzKeyframeStack$$Type<$AzKeyframe$$Type<$IValue$$Type>>)

public "boneName"(): string
public "positionKeyframes"(): $AzKeyframeStack<$AzKeyframe<$IValue>>
public "rotationKeyframes"(): $AzKeyframeStack<$AzKeyframe<$IValue>>
public "scaleKeyframes"(): $AzKeyframeStack<$AzKeyframe<$IValue>>
}
}

declare module "mod.azure.azurelib.model.AzBoneSnapshot" {
import { $AzBone, $AzBone$$Type } from "mod.azure.azurelib.model.AzBone"

export class $AzBoneSnapshot {
constructor(azBone0: $AzBone$$Type)

public static "copy"(azBoneSnapshot0: $AzBoneSnapshot$$Type): $AzBoneSnapshot
public "getBone"(): $AzBone
public "getLastResetPositionTick"(): double
public "getLastResetRotationTick"(): double
public "getLastResetScaleTick"(): double
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "getRotX"(): float
public "getRotY"(): float
public "getRotZ"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "isPosAnimInProgress"(): boolean
public "isRotAnimInProgress"(): boolean
public "isScaleAnimInProgress"(): boolean
public "startPosAnim"(): void
public "startRotAnim"(): void
public "startScaleAnim"(): void
public "stopPosAnim"(double0: double): void
public "stopRotAnim"(double0: double): void
public "stopScaleAnim"(double0: double): void
public "updateOffset"(float0: float, float1: float, float2: float): void
public "updateRotation"(float0: float, float1: float, float2: float): void
public "updateScale"(float0: float, float1: float, float2: float): void
get "bone"(): $AzBone
get "lastResetPositionTick"(): double
get "lastResetRotationTick"(): double
get "lastResetScaleTick"(): double
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
get "rotX"(): float
get "rotY"(): float
get "rotZ"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "posAnimInProgress"(): boolean
get "rotAnimInProgress"(): boolean
get "scaleAnimInProgress"(): boolean
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.handler.AzParticleKeyframeHandler" {
import { $AzParticleKeyframeEvent$$Type } from "mod.azure.azurelib.animation.event.AzParticleKeyframeEvent"

export interface $AzParticleKeyframeHandler<A = any> {
"handle"(azParticleKeyframeEvent0: $AzParticleKeyframeEvent$$Type<A>): void
}

export namespace $AzParticleKeyframeHandler {
const probejs$$marker: never
}
export abstract class $AzParticleKeyframeHandler$$Static<A = any> implements $AzParticleKeyframeHandler<A> {
}
}

declare module "mod.azure.azurelib.core.keyframe.event.data.CustomInstructionKeyframeData" {
import { $KeyFrameData } from "mod.azure.azurelib.core.keyframe.event.data.KeyFrameData"

export class $CustomInstructionKeyframeData extends $KeyFrameData {
constructor(double0: double, string1: string)

public "getInstructions"(): string
get "instructions"(): string
}
}

declare module "mod.azure.azurelib.animation.event.AzParticleKeyframeEvent" {
import { $ParticleKeyframeData, $ParticleKeyframeData$$Type } from "mod.azure.azurelib.core.keyframe.event.data.ParticleKeyframeData"
import { $AzKeyframeEvent } from "mod.azure.azurelib.animation.event.AzKeyframeEvent"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"

export class $AzParticleKeyframeEvent<T = any> extends $AzKeyframeEvent<T, $ParticleKeyframeData> {
constructor(t0: T, double1: double, azAnimationController2: $AzAnimationController$$Type<T>, particleKeyframeData3: $ParticleKeyframeData$$Type)

public "getKeyframeData"(): $ParticleKeyframeData
get "keyframeData"(): $ParticleKeyframeData
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbackHandler" {
import { $AzKeyframeCallbacks$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"

export class $AzKeyframeCallbackHandler<T = any> {
constructor(azAnimationController0: $AzAnimationController$$Type<T>, azKeyframeCallbacks1: $AzKeyframeCallbacks$$Type<T>)

public "handle"(t0: T, double1: double): void
public "reset"(): void
}
}

declare module "mod.azure.azurelib.animation.controller.state.impl.AzAnimationPlayState" {
import { $AzAnimationState } from "mod.azure.azurelib.animation.controller.state.AzAnimationState"
import { $AzAnimationControllerStateMachine$Context$$Type } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context"

export class $AzAnimationPlayState<T = any> extends $AzAnimationState<T> {
constructor()

public "onUpdate"(context0: $AzAnimationControllerStateMachine$Context$$Type<T>): void
}
}

declare module "mod.azure.azurelib.loading.json.raw.TextureMesh" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"

export class $TextureMesh extends $Record {
constructor(localPivot: double[], position: double[], rotation: double[], scale: double[], texture: string)

public static "deserializer"(): $JsonDeserializer<$TextureMesh>
public "localPivot"(): double[]
public "position"(): double[]
public "rotation"(): double[]
public "scale"(): double[]
public "texture"(): string
}
}

declare module "mod.azure.azurelib.util.state.StateMachineContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateMachineContext {
}

export namespace $StateMachineContext {
const probejs$$marker: never
}
export abstract class $StateMachineContext$$Static implements $StateMachineContext {
}
}

declare module "mod.azure.azurelib.animation.controller.AzAnimationControllerBuilder" {
import { $AzKeyframeCallbacks$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks"
import { $AzAnimationController } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $AzAnimator$$Type } from "mod.azure.azurelib.animation.AzAnimator"
import { $AzEasingType$$Type } from "mod.azure.azurelib.animation.easing.AzEasingType"

export class $AzAnimationControllerBuilder<T = any> {
constructor(azAnimator0: $AzAnimator$$Type<any, T>, string1: string)

public "build"(): $AzAnimationController<T>
public "setAnimationSpeed"(double0: double): $AzAnimationControllerBuilder<T>
public "setEasingType"(azEasingType0: $AzEasingType$$Type): $AzAnimationControllerBuilder<T>
public "setKeyframeCallbacks"(azKeyframeCallbacks0: $AzKeyframeCallbacks$$Type<T>): $AzAnimationControllerBuilder<T>
public "setStartTickOffset"(double0: double): $AzAnimationControllerBuilder<T>
public "setTransitionLength"(int0: integer): $AzAnimationControllerBuilder<T>
set "animationSpeed"(value: double)
set "easingType"(value: $AzEasingType$$Type)
set "keyframeCallbacks"(value: $AzKeyframeCallbacks$$Type<T>)
set "startTickOffset"(value: double)
set "transitionLength"(value: integer)
}
}

declare module "mod.azure.azurelib.animation.dispatch.command.stage.AzAnimationStage" {
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Function } from "java.util.function.Function"
import { $AzAnimationStageProperties, $AzAnimationStageProperties$$Type } from "mod.azure.azurelib.animation.property.AzAnimationStageProperties"

export class $AzAnimationStage extends $Record {
static readonly "DECODER": $Function<$FriendlyByteBuf, $AzAnimationStage>
static readonly "ENCODER": $BiConsumer<$FriendlyByteBuf, $AzAnimationStage>

constructor(name: string, properties: $AzAnimationStageProperties$$Type)

public "name"(): string
public "properties"(): $AzAnimationStageProperties
}
}

declare module "mod.azure.azurelib.loading.json.raw.LocatorValue" {
import { $LocatorClass, $LocatorClass$$Type } from "mod.azure.azurelib.loading.json.raw.LocatorClass"
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"

export class $LocatorValue extends $Record {
constructor(locatorClass: $LocatorClass$$Type, values: double[])

public static "deserializer"(): $JsonDeserializer<$LocatorValue>
public "locatorClass"(): $LocatorClass
public "values"(): double[]
}
}

declare module "mod.azure.azurelib.loading.json.raw.Cube" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $UVUnion, $UVUnion$$Type } from "mod.azure.azurelib.loading.json.raw.UVUnion"
import { $Record } from "java.lang.Record"

export class $Cube extends $Record {
constructor(inflate: double, mirror: boolean, origin: double[], pivot: double[], rotation: double[], size: double[], uv: $UVUnion$$Type)

public static "deserializer"(): $JsonDeserializer<$Cube>
public "inflate"(): double
public "mirror"(): boolean
public "origin"(): double[]
public "pivot"(): double[]
public "rotation"(): double[]
public "size"(): double[]
public "uv"(): $UVUnion
}
}

declare module "mod.azure.azurelib.animation.primitive.AzKeyframes" {
import { $ParticleKeyframeData, $ParticleKeyframeData$$Type } from "mod.azure.azurelib.core.keyframe.event.data.ParticleKeyframeData"
import { $CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type } from "mod.azure.azurelib.core.keyframe.event.data.CustomInstructionKeyframeData"
import { $SoundKeyframeData, $SoundKeyframeData$$Type } from "mod.azure.azurelib.core.keyframe.event.data.SoundKeyframeData"
import { $Record } from "java.lang.Record"

export class $AzKeyframes extends $Record {
constructor(sounds: $SoundKeyframeData$$Type[], particles: $ParticleKeyframeData$$Type[], customInstructions: $CustomInstructionKeyframeData$$Type[])

public "customInstructions"(): $CustomInstructionKeyframeData[]
public "particles"(): $ParticleKeyframeData[]
public "sounds"(): $SoundKeyframeData[]
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeStack" {
import { $AzKeyframe, $AzKeyframe$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframe"
import { $List, $List$$Type } from "java.util.List"
import { $Record } from "java.lang.Record"

export class $AzKeyframeStack<T extends $AzKeyframe<any> = $AzKeyframe<any>> extends $Record {
constructor()
constructor(xKeyframes: $List$$Type<T>, yKeyframes: $List$$Type<T>, zKeyframes: $List$$Type<T>)

public static "from"<F extends $AzKeyframe<any>>(azKeyframeStack0: $AzKeyframeStack$$Type<F>): $AzKeyframeStack<F>
public "getLastKeyframeTime"(): double
public "xKeyframes"(): $List<T>
public "yKeyframes"(): $List<T>
public "zKeyframes"(): $List<T>
get "lastKeyframeTime"(): double
}
}

declare module "mod.azure.azurelib.animation.controller.AzAnimationControllerContainer" {
import { $AzAnimationController, $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $Collection } from "java.util.Collection"

export class $AzAnimationControllerContainer<T = any> {
constructor()

public "add"(azAnimationController0: $AzAnimationController$$Type<T>, ...azAnimationController1s: $AzAnimationController$$Type<T>[]): void
public "getAll"(): $Collection<$AzAnimationController<T>>
public "getOrNull"(string0: string): $AzAnimationController<T>
get "all"(): $Collection<$AzAnimationController<T>>
}
}

declare module "mod.azure.azurelib.animation.AzAnimationTimer" {
import { $AzAnimatorConfig$$Type } from "mod.azure.azurelib.animation.AzAnimatorConfig"

export class $AzAnimationTimer {
constructor(azAnimatorConfig0: $AzAnimatorConfig$$Type)

public "getAnimTime"(): double
public "tick"(): void
get "animTime"(): double
}
}

declare module "mod.azure.azurelib.animation.property.AzAnimationStageProperties" {
import { $AzPlayBehavior, $AzPlayBehavior$$Type } from "mod.azure.azurelib.animation.play_behavior.AzPlayBehavior"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $AzEasingType$$Type } from "mod.azure.azurelib.animation.easing.AzEasingType"
import { $Function } from "java.util.function.Function"
import { $AzAnimationProperties } from "mod.azure.azurelib.animation.property.AzAnimationProperties"

export class $AzAnimationStageProperties extends $AzAnimationProperties {
static readonly "DECODER": $Function<$FriendlyByteBuf, $AzAnimationStageProperties>
static readonly "DEFAULT": $AzAnimationStageProperties
static readonly "EMPTY": $AzAnimationStageProperties
static readonly "ENCODER": $BiConsumer<$FriendlyByteBuf, $AzAnimationStageProperties>

constructor(double0: double, azEasingType1: $AzEasingType$$Type, azPlayBehavior2: $AzPlayBehavior$$Type, float3: float, double4: double, double5: double, double6: double, boolean7: boolean)

public "hasPlayBehavior"(): boolean
public "playBehavior"(): $AzPlayBehavior
public "withAnimationSpeed"(double0: double): $AzAnimationStageProperties
public "withPlayBehavior"(azPlayBehavior0: $AzPlayBehavior$$Type): $AzAnimationStageProperties
public "withRepeatXTimes"(double0: double): $AzAnimationStageProperties
public "withTransitionLength"(float0: float): $AzAnimationStageProperties
}
}

declare module "mod.azure.azurelib.loading.json.raw.Bone" {
import { $TextureMesh, $TextureMesh$$Type } from "mod.azure.azurelib.loading.json.raw.TextureMesh"
import { $Map, $Map$$Type } from "java.util.Map"
import { $PolyMesh, $PolyMesh$$Type } from "mod.azure.azurelib.loading.json.raw.PolyMesh"
import { $Cube, $Cube$$Type } from "mod.azure.azurelib.loading.json.raw.Cube"
import { $LocatorValue, $LocatorValue$$Type } from "mod.azure.azurelib.loading.json.raw.LocatorValue"
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"

export class $Bone extends $Record {
constructor(bindPoseRotation: double[], cubes: $Cube$$Type[], debug: boolean, inflate: double, locators: $Map$$Type<string, $LocatorValue$$Type>, mirror: boolean, name: string, neverRender: boolean, parent: string, pivot: double[], polyMesh: $PolyMesh$$Type, renderGroupId: long, reset: boolean, rotation: double[], textureMeshes: $TextureMesh$$Type[])

public "bindPoseRotation"(): double[]
public "cubes"(): $Cube[]
public "debug"(): boolean
public static "deserializer"(): $JsonDeserializer<$Bone>
public "inflate"(): double
public "locators"(): $Map<string, $LocatorValue>
public "mirror"(): boolean
public "name"(): string
public "neverRender"(): boolean
public "parent"(): string
public "pivot"(): double[]
public "polyMesh"(): $PolyMesh
public "renderGroupId"(): long
public "reset"(): boolean
public "rotation"(): double[]
public "textureMeshes"(): $TextureMesh[]
}
}

declare module "mod.azure.azurelib.loading.json.raw.UVUnion" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $UVFaces, $UVFaces$$Type } from "mod.azure.azurelib.loading.json.raw.UVFaces"
import { $Record } from "java.lang.Record"

export class $UVUnion extends $Record {
constructor(boxUVCoords: double[], faceUV: $UVFaces$$Type, isBoxUV: boolean)

public "boxUVCoords"(): double[]
public static "deserializer"(): $JsonDeserializer<$UVUnion>
public "faceUV"(): $UVFaces
public "isBoxUV"(): boolean
get "boxUV"(): boolean
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.handler.AzCustomKeyframeHandler" {
import { $AzCustomInstructionKeyframeEvent$$Type } from "mod.azure.azurelib.animation.event.AzCustomInstructionKeyframeEvent"

export interface $AzCustomKeyframeHandler<A = any> {
"handle"(azCustomInstructionKeyframeEvent0: $AzCustomInstructionKeyframeEvent$$Type<A>): void
}

export namespace $AzCustomKeyframeHandler {
const probejs$$marker: never
}
export abstract class $AzCustomKeyframeHandler$$Static<A = any> implements $AzCustomKeyframeHandler<A> {
}
}

declare module "mod.azure.azurelib.animation.controller.AzAbstractAnimationController" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AzAbstractAnimationController {
public "hasAnimationFinished"(): boolean
public "name"(): string
}
}

declare module "mod.azure.azurelib.core.keyframe.event.data.ParticleKeyframeData" {
import { $KeyFrameData } from "mod.azure.azurelib.core.keyframe.event.data.KeyFrameData"

export class $ParticleKeyframeData extends $KeyFrameData {
constructor(double0: double, string1: string, string2: string, string3: string)

public "getEffect"(): string
public "getLocator"(): string
public "script"(): string
get "effect"(): string
get "locator"(): string
}
}

declare module "mod.azure.azurelib.animation.property.AzAnimationProperties" {
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $AzEasingType, $AzEasingType$$Type } from "mod.azure.azurelib.animation.easing.AzEasingType"
import { $Function } from "java.util.function.Function"

export class $AzAnimationProperties {
static readonly "DECODER": $Function<$FriendlyByteBuf, $AzAnimationProperties>
static readonly "DEFAULT": $AzAnimationProperties
static readonly "EMPTY": $AzAnimationProperties
static readonly "ENCODER": $BiConsumer<$FriendlyByteBuf, $AzAnimationProperties>

constructor(double0: double, azEasingType1: $AzEasingType$$Type, float2: float, double3: double, double4: double, double5: double, boolean6: boolean)

public "animationSpeed"(): double
public "easingType"(): $AzEasingType
public "freezeTickOffset"(): double
public "hasAnimationSpeed"(): boolean
public "hasEasingType"(): boolean
public "hasFreezeTickOffset"(): boolean
public "hasRepeatXTimes"(): boolean
public "hasReversing"(): boolean
public "hasStartTickOffset"(): boolean
public "hasTransitionLength"(): boolean
public "isReversing"(): boolean
public "repeatXTimes"(): double
public "startTickOffset"(): double
public "transitionLength"(): float
public "withAnimationSpeed"(double0: double): $AzAnimationProperties
public "withEasingType"(azEasingType0: $AzEasingType$$Type): $AzAnimationProperties
public "withFreezeTickOffset"(double0: double): $AzAnimationProperties
public "withRepeatXTimes"(double0: double): $AzAnimationProperties
public "withShouldReverse"(boolean0: boolean): $AzAnimationProperties
public "withStartTickOffset"(double0: double): $AzAnimationProperties
public "withTransitionLength"(float0: float): $AzAnimationProperties
get "reversing"(): boolean
}
}

declare module "mod.azure.azurelib.animation.primitive.AzQueuedAnimation" {
import { $AzPlayBehavior, $AzPlayBehavior$$Type } from "mod.azure.azurelib.animation.play_behavior.AzPlayBehavior"
import { $Record } from "java.lang.Record"
import { $AzBakedAnimation, $AzBakedAnimation$$Type } from "mod.azure.azurelib.animation.primitive.AzBakedAnimation"

export class $AzQueuedAnimation extends $Record {
constructor(animation: $AzBakedAnimation$$Type, playBehavior: $AzPlayBehavior$$Type)

public "animation"(): $AzBakedAnimation
public "playBehavior"(): $AzPlayBehavior
}
}

declare module "mod.azure.azurelib.loading.json.raw.FaceUV" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"
import { $FaceUV$Rotation, $FaceUV$Rotation$$Type } from "mod.azure.azurelib.loading.json.raw.FaceUV$Rotation"

export class $FaceUV extends $Record {
constructor(materialInstance: string, uv: double[], uvSize: double[], uvRotation: $FaceUV$Rotation$$Type)

public static "deserializer"(): $JsonDeserializer<$FaceUV>
public "materialInstance"(): string
public "uv"(): double[]
public "uvRotation"(): $FaceUV$Rotation
public "uvSize"(): double[]
}
}

declare module "mod.azure.azurelib.cache.object.GeoQuad" {
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Vector3f, $Vector3f$$Type } from "org.joml.Vector3f"
import { $Record } from "java.lang.Record"
import { $GeoVertex, $GeoVertex$$Type } from "mod.azure.azurelib.cache.object.GeoVertex"
import { $FaceUV$Rotation$$Type } from "mod.azure.azurelib.loading.json.raw.FaceUV$Rotation"

export class $GeoQuad extends $Record {
constructor(vertices: $GeoVertex$$Type[], normal: $Vector3f$$Type, direction: $Direction$$Type)

public static "build"(geoVertex0s: $GeoVertex$$Type[], float1: float, float2: float, float3: float, float4: float, rotation5: $FaceUV$Rotation$$Type, float6: float, float7: float, boolean8: boolean, direction9: $Direction$$Type): $GeoQuad
public static "build"(geoVertex0s: $GeoVertex$$Type[], double1s: double[], double2s: double[], rotation3: $FaceUV$Rotation$$Type, float4: float, float5: float, boolean6: boolean, direction7: $Direction$$Type): $GeoQuad
public "direction"(): $Direction
public "normal"(): $Vector3f
public "vertices"(): $GeoVertex[]
}
}

declare module "mod.azure.azurelib.loading.json.raw.PolyMesh" {
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"
import { $PolysUnion, $PolysUnion$$Type } from "mod.azure.azurelib.loading.json.raw.PolysUnion"

export class $PolyMesh extends $Record {
constructor(normalizedUVs: boolean, normals: double[], polysUnion: $PolysUnion$$Type, positions: double[], uvs: double[])

public static "deserializer"(): $JsonDeserializer<$PolyMesh>
public "normalizedUVs"(): boolean
public "normals"(): double[]
public "polysUnion"(): $PolysUnion
public "positions"(): double[]
public "uvs"(): double[]
}
}

declare module "mod.azure.azurelib.animation.event.AzKeyframeEvent" {
import { $KeyFrameData } from "mod.azure.azurelib.core.keyframe.event.data.KeyFrameData"
import { $AzAnimationController } from "mod.azure.azurelib.animation.controller.AzAnimationController"

export class $AzKeyframeEvent<T = any, E extends $KeyFrameData = $KeyFrameData> {
public "getAnimatable"(): T
public "getAnimationTick"(): double
public "getController"(): $AzAnimationController<T>
public "getKeyframeData"(): E
get "animatable"(): T
get "animationTick"(): double
get "controller"(): $AzAnimationController<T>
get "keyframeData"(): E
}
}

declare module "mod.azure.azurelib.core.math.IValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IValue {
"get"(): double
}

export namespace $IValue {
const probejs$$marker: never
}
export abstract class $IValue$$Static implements $IValue {
}
}

declare module "mod.azure.azurelib.animation.event.AzCustomInstructionKeyframeEvent" {
import { $AzKeyframeEvent } from "mod.azure.azurelib.animation.event.AzKeyframeEvent"
import { $CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type } from "mod.azure.azurelib.core.keyframe.event.data.CustomInstructionKeyframeData"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"

export class $AzCustomInstructionKeyframeEvent<T = any> extends $AzKeyframeEvent<T, $CustomInstructionKeyframeData> {
constructor(t0: T, double1: double, azAnimationController2: $AzAnimationController$$Type<T>, customInstructionKeyframeData3: $CustomInstructionKeyframeData$$Type)

public "getKeyframeData"(): $CustomInstructionKeyframeData
get "keyframeData"(): $CustomInstructionKeyframeData
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframe" {
import { $List, $List$$Type } from "java.util.List"
import { $IValue, $IValue$$Type } from "mod.azure.azurelib.core.math.IValue"
import { $Record } from "java.lang.Record"
import { $AzEasingType, $AzEasingType$$Type } from "mod.azure.azurelib.animation.easing.AzEasingType"

export class $AzKeyframe<T extends $IValue = $IValue> extends $Record {
constructor(length: double, startValue: T, endValue: T, easingType: $AzEasingType$$Type, easingArgs: $List$$Type<T>)
constructor(double0: double, t1: T, t2: T, azEasingType3: $AzEasingType$$Type)
constructor(double0: double, t1: T, t2: T)

public "easingArgs"(): $List<T>
public "easingType"(): $AzEasingType
public "endValue"(): T
public "length"(): double
public "startValue"(): T
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeManager" {
import { $AzKeyframeCallbacks$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $AzKeyframeCallbackHandler } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbackHandler"
import { $AzBoneAnimationQueueCache$$Type } from "mod.azure.azurelib.animation.controller.AzBoneAnimationQueueCache"
import { $AzKeyframeTransitioner } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeTransitioner"
import { $AzKeyframeExecutor } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeExecutor"
import { $AzBoneSnapshotCache$$Type } from "mod.azure.azurelib.animation.controller.AzBoneSnapshotCache"

export class $AzKeyframeManager<T = any> {
constructor(azAnimationController0: $AzAnimationController$$Type<T>, azBoneAnimationQueueCache1: $AzBoneAnimationQueueCache$$Type<T>, azBoneSnapshotCache2: $AzBoneSnapshotCache$$Type, azKeyframeCallbacks3: $AzKeyframeCallbacks$$Type<T>)

public "keyframeCallbackHandler"(): $AzKeyframeCallbackHandler<T>
public "keyframeExecutor"(): $AzKeyframeExecutor<T>
public "keyframeTransitioner"(): $AzKeyframeTransitioner<T>
}
}

declare module "mod.azure.azurelib.animation.primitive.AzLoopType" {
import { $JsonElement$$Type } from "com.google.gson.JsonElement"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $Map } from "java.util.Map"
import { $TriFunction$$Type } from "org.apache.commons.lang3.function.TriFunction"
import { $AzBakedAnimation$$Type } from "mod.azure.azurelib.animation.primitive.AzBakedAnimation"

export interface $AzLoopType {
"name"(): string
"shouldPlayAgain"(object0: any, azAnimationController1: $AzAnimationController$$Type<any>, azBakedAnimation2: $AzBakedAnimation$$Type): boolean
}

export namespace $AzLoopType {
const FALSE: $AzLoopType
const HOLD_ON_LAST_FRAME: $AzLoopType
const LOOP: $AzLoopType
const LOOP_TYPES: $Map<string, $AzLoopType>
const PLAY_ONCE: $AzLoopType
const TRUE: $AzLoopType
function fromJson(jsonElement0: $JsonElement$$Type): $AzLoopType
function fromString(string0: string): $AzLoopType
function register(string0: string, triFunction1: $TriFunction$$Type<any, $AzAnimationController$$Type<any>, $AzBakedAnimation$$Type, boolean>): $AzLoopType
function register(string0: string, azLoopType1: $AzLoopType$$Type): $AzLoopType
}
export abstract class $AzLoopType$$Static implements $AzLoopType {
static readonly "FALSE": $AzLoopType
static readonly "HOLD_ON_LAST_FRAME": $AzLoopType
static readonly "LOOP": $AzLoopType
static readonly "LOOP_TYPES": $Map<string, $AzLoopType>
static readonly "PLAY_ONCE": $AzLoopType
static readonly "TRUE": $AzLoopType

static "fromJson"(jsonElement0: $JsonElement$$Type): $AzLoopType
static "fromString"(string0: string): $AzLoopType
static "register"(string0: string, triFunction1: $TriFunction$$Type<any, $AzAnimationController$$Type<any>, $AzBakedAnimation$$Type, boolean>): $AzLoopType
static "register"(string0: string, azLoopType1: $AzLoopType$$Type): $AzLoopType
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzAnimationPoint" {
import { $AzKeyframe, $AzKeyframe$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframe"
import { $Record } from "java.lang.Record"

export class $AzAnimationPoint extends $Record {
constructor(keyframe: $AzKeyframe$$Type<any>, currentTick: double, transitionLength: double, animationStartValue: double, animationEndValue: double)

public "animationEndValue"(): double
public "animationStartValue"(): double
public "currentTick"(): double
public "keyframe"(): $AzKeyframe<any>
public "transitionLength"(): double
}
}

declare module "mod.azure.azurelib.animation.controller.state.impl.AzAnimationTransitionState" {
import { $AzAnimationState } from "mod.azure.azurelib.animation.controller.state.AzAnimationState"
import { $AzAnimationControllerStateMachine$Context$$Type } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context"

export class $AzAnimationTransitionState<T = any> extends $AzAnimationState<T> {
constructor()

public "onUpdate"(context0: $AzAnimationControllerStateMachine$Context$$Type<T>): void
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks" {
import { $AzSoundKeyframeHandler } from "mod.azure.azurelib.animation.controller.keyframe.handler.AzSoundKeyframeHandler"
import { $AzKeyframeCallbacks$Builder } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeCallbacks$Builder"
import { $AzCustomKeyframeHandler } from "mod.azure.azurelib.animation.controller.keyframe.handler.AzCustomKeyframeHandler"
import { $AzParticleKeyframeHandler } from "mod.azure.azurelib.animation.controller.keyframe.handler.AzParticleKeyframeHandler"

export class $AzKeyframeCallbacks<T = any> {
public static "builder"<T>(): $AzKeyframeCallbacks$Builder<T>
public "customKeyframeHandler"(): $AzCustomKeyframeHandler<T>
public static "noop"<T>(): $AzKeyframeCallbacks<T>
public "particleKeyframeHandler"(): $AzParticleKeyframeHandler<T>
public "soundKeyframeHandler"(): $AzSoundKeyframeHandler<T>
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzAbstractKeyframeExecutor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AzAbstractKeyframeExecutor {
}
}

declare module "mod.azure.azurelib.core.keyframe.event.data.KeyFrameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyFrameData {
public "getStartTick"(): double
get "startTick"(): double
}
}

declare module "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context" {
import { $AzAnimationContext } from "mod.azure.azurelib.animation.AzAnimationContext"
import { $AzAnimationController } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $AzAnimationControllerStateMachine } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine"
import { $StateMachineContext } from "mod.azure.azurelib.util.state.StateMachineContext"

export class $AzAnimationControllerStateMachine$Context<T = any> implements $StateMachineContext {
public "animationContext"(): $AzAnimationContext<T>
public "animationController"(): $AzAnimationController<T>
public "stateMachine"(): $AzAnimationControllerStateMachine<T>
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeExecutor" {
import { $AzAbstractKeyframeExecutor } from "mod.azure.azurelib.animation.controller.keyframe.AzAbstractKeyframeExecutor"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $AzBoneAnimationQueueCache$$Type } from "mod.azure.azurelib.animation.controller.AzBoneAnimationQueueCache"
import { $AzQueuedAnimation$$Type } from "mod.azure.azurelib.animation.primitive.AzQueuedAnimation"

export class $AzKeyframeExecutor<T = any> extends $AzAbstractKeyframeExecutor {
constructor(azAnimationController0: $AzAnimationController$$Type<T>, azBoneAnimationQueueCache1: $AzBoneAnimationQueueCache$$Type<T>)

public "execute"(azQueuedAnimation0: $AzQueuedAnimation$$Type, t1: T, boolean2: boolean): void
}
}

declare module "mod.azure.azurelib.model.AzBoneMetadata" {
import { $AzBone, $AzBone$$Type } from "mod.azure.azurelib.model.AzBone"
import { $Record } from "java.lang.Record"
import { $Bone$$Type } from "mod.azure.azurelib.loading.json.raw.Bone"

export class $AzBoneMetadata extends $Record {
constructor(bone0: $Bone$$Type, azBone1: $AzBone$$Type)
constructor(dontRender: boolean, inflate: double, mirror: boolean, name: string, parent: $AzBone$$Type, reset: boolean)

public "dontRender"(): boolean
public "inflate"(): double
public "mirror"(): boolean
public "name"(): string
public "parent"(): $AzBone
public "reset"(): boolean
}
}

declare module "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$StateHolder" {
import { $AzAnimationStopState, $AzAnimationStopState$$Type } from "mod.azure.azurelib.animation.controller.state.impl.AzAnimationStopState"
import { $AzAnimationPauseState, $AzAnimationPauseState$$Type } from "mod.azure.azurelib.animation.controller.state.impl.AzAnimationPauseState"
import { $AzAnimationTransitionState, $AzAnimationTransitionState$$Type } from "mod.azure.azurelib.animation.controller.state.impl.AzAnimationTransitionState"
import { $Record } from "java.lang.Record"
import { $AzAnimationPlayState, $AzAnimationPlayState$$Type } from "mod.azure.azurelib.animation.controller.state.impl.AzAnimationPlayState"

export class $AzAnimationControllerStateMachine$StateHolder<T = any> extends $Record {
constructor(playState: $AzAnimationPlayState$$Type<T>, pauseState: $AzAnimationPauseState$$Type<T>, stopState: $AzAnimationStopState$$Type<T>, transitionState: $AzAnimationTransitionState$$Type<T>)

public "pauseState"(): $AzAnimationPauseState<T>
public "playState"(): $AzAnimationPlayState<T>
public "stopState"(): $AzAnimationStopState<T>
public "transitionState"(): $AzAnimationTransitionState<T>
}
}

declare module "mod.azure.azurelib.animation.controller.AzAnimationQueue" {
import { $Collection$$Type } from "java.util.Collection"
import { $AzQueuedAnimation, $AzQueuedAnimation$$Type } from "mod.azure.azurelib.animation.primitive.AzQueuedAnimation"

export class $AzAnimationQueue {
constructor()

public "add"(azQueuedAnimation0: $AzQueuedAnimation$$Type): void
public "addAll"(collection0: $Collection$$Type<$AzQueuedAnimation$$Type>): void
public "clear"(): void
public "isEmpty"(): boolean
public "next"(): $AzQueuedAnimation
public "peek"(): $AzQueuedAnimation
get "empty"(): boolean
}
}

declare module "mod.azure.azurelib.animation.dispatch.AzDispatchSide" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"

export class $AzDispatchSide extends $Enum<$AzDispatchSide> implements $StringRepresentable {
static readonly "CLIENT": $AzDispatchSide
static readonly "DECODER": $Function<$FriendlyByteBuf, $AzDispatchSide>
static readonly "ENCODER": $BiConsumer<$FriendlyByteBuf, $AzDispatchSide>
static readonly "SERVER": $AzDispatchSide

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $AzDispatchSide
public static "values"(): $AzDispatchSide[]
get "serializedName"(): string
}
}

declare module "mod.azure.azurelib.core.keyframe.event.data.SoundKeyframeData" {
import { $KeyFrameData } from "mod.azure.azurelib.core.keyframe.event.data.KeyFrameData"

export class $SoundKeyframeData extends $KeyFrameData {
constructor(double0: double, string1: string)

public "getSound"(): string
get "sound"(): string
}
}

declare module "mod.azure.azurelib.animation.easing.AzEasingType" {
import { $AzAnimationPoint$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzAnimationPoint"
import { $Double2DoubleFunction } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Function } from "java.util.function.Function"

export interface $AzEasingType {
"apply"(azAnimationPoint0: $AzAnimationPoint$$Type, double1: double, double2: double): double
"apply"(azAnimationPoint0: $AzAnimationPoint$$Type): double
"buildTransformer"(double0: double): $Double2DoubleFunction
"name"(): string
}

export namespace $AzEasingType {
const DECODER: $Function<$FriendlyByteBuf, $AzEasingType>
const ENCODER: $BiConsumer<$FriendlyByteBuf, $AzEasingType>
}
export abstract class $AzEasingType$$Static implements $AzEasingType {
static readonly "DECODER": $Function<$FriendlyByteBuf, $AzEasingType>
static readonly "ENCODER": $BiConsumer<$FriendlyByteBuf, $AzEasingType>

}
}

declare module "mod.azure.azurelib.util.state.State" {
import { $StateMachineContext, $StateMachineContext$$Type } from "mod.azure.azurelib.util.state.StateMachineContext"

export interface $State<C extends $StateMachineContext = $StateMachineContext> {
"onEnter"(c0: C): void
"onExit"(c0: C): void
"onUpdate"(c0: C): void
}

export namespace $State {
const probejs$$marker: never
}
export abstract class $State$$Static<C extends $StateMachineContext = $StateMachineContext> implements $State<C> {
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeTransitioner" {
import { $AzAbstractKeyframeExecutor } from "mod.azure.azurelib.animation.controller.keyframe.AzAbstractKeyframeExecutor"
import { $AzBone$$Type } from "mod.azure.azurelib.model.AzBone"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $Map$$Type } from "java.util.Map"
import { $AzBoneAnimationQueueCache$$Type } from "mod.azure.azurelib.animation.controller.AzBoneAnimationQueueCache"
import { $AzBoneSnapshotCache$$Type } from "mod.azure.azurelib.animation.controller.AzBoneSnapshotCache"

export class $AzKeyframeTransitioner<T = any> extends $AzAbstractKeyframeExecutor {
constructor(azAnimationController0: $AzAnimationController$$Type<T>, azBoneAnimationQueueCache1: $AzBoneAnimationQueueCache$$Type<T>, azBoneSnapshotCache2: $AzBoneSnapshotCache$$Type)

public "transition"(map0: $Map$$Type<string, $AzBone$$Type>, boolean1: boolean, double2: double): void
}
}

declare module "mod.azure.azurelib.animation.AzAnimatorConfig" {
import { $AzAnimatorConfig$Builder } from "mod.azure.azurelib.animation.AzAnimatorConfig$Builder"
import { $Record } from "java.lang.Record"

export class $AzAnimatorConfig extends $Record {
constructor(boneResetTime: double, crashIfBoneMissing: boolean, shouldPlayAnimationsWhileGamePaused: boolean)

public "boneResetTime"(): double
public static "builder"(): $AzAnimatorConfig$Builder
public "crashIfBoneMissing"(): boolean
public static "defaultConfig"(): $AzAnimatorConfig
public "shouldPlayAnimationsWhileGamePaused"(): boolean
}
}

declare module "mod.azure.azurelib.loading.json.raw.FaceUV$Rotation" {
import { $Enum } from "java.lang.Enum"

export class $FaceUV$Rotation extends $Enum<$FaceUV$Rotation> {
static readonly "CLOCKWISE_180": $FaceUV$Rotation
static readonly "CLOCKWISE_270": $FaceUV$Rotation
static readonly "CLOCKWISE_90": $FaceUV$Rotation
static readonly "NONE": $FaceUV$Rotation

public static "fromValue"(int0: integer): $FaceUV$Rotation
public "rotateUvs"(float0: float, float1: float, float2: float, float3: float): float[]
public static "valueOf"(string0: string): $FaceUV$Rotation
public static "values"(): $FaceUV$Rotation[]
}
}

declare module "mod.azure.azurelib.animation.AzAnimator" {
import { $AzAnimationContext } from "mod.azure.azurelib.animation.AzAnimationContext"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AzAnimationTimer } from "mod.azure.azurelib.animation.AzAnimationTimer"
import { $AzAnimatorConfig$$Type } from "mod.azure.azurelib.animation.AzAnimatorConfig"
import { $AzBoneCache } from "mod.azure.azurelib.animation.cache.AzBoneCache"
import { $AzAnimationControllerContainer, $AzAnimationControllerContainer$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationControllerContainer"
import { $AzBakedAnimation } from "mod.azure.azurelib.animation.primitive.AzBakedAnimation"

export class $AzAnimator<K = any, T = any> {
public "animate"(t0: T, float1: float): void
public "animate"(t0: T, float1: float, boolean2: boolean): void
public "context"(): $AzAnimationContext<T>
public "createAzAnimationTimer"(azAnimatorConfig0: $AzAnimatorConfig$$Type): $AzAnimationTimer
public "createBoneCache"(): $AzBoneCache
public "getAnimation"(t0: T, string1: string): $AzBakedAnimation
public "getAnimationControllerContainer"(): $AzAnimationControllerContainer<T>
public "getAnimationLocation"(t0: T): $ResourceLocation
public "getOrCreateContext"(k0: K): $AzAnimationContext<T>
public "registerControllers"(azAnimationControllerContainer0: $AzAnimationControllerContainer$$Type<T>): void
public "setCustomAnimations"(t0: T, float1: float): void
get "reloadAnimations"(): boolean
set "reloadAnimations"(value: boolean)
get "animationControllerContainer"(): $AzAnimationControllerContainer<T>
}
}

declare module "mod.azure.azurelib.animation.controller.keyframe.AzBoneAnimationQueue" {
import { $AzKeyframe$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframe"
import { $AzAnimationPoint, $AzAnimationPoint$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzAnimationPoint"
import { $AzBone, $AzBone$$Type } from "mod.azure.azurelib.model.AzBone"
import { $AzBoneSnapshot$$Type } from "mod.azure.azurelib.model.AzBoneSnapshot"
import { $Record } from "java.lang.Record"
import { $Queue, $Queue$$Type } from "java.util.Queue"

export class $AzBoneAnimationQueue extends $Record {
constructor(azBone0: $AzBone$$Type)
constructor(bone: $AzBone$$Type, rotationXQueue: $Queue$$Type<$AzAnimationPoint$$Type>, rotationYQueue: $Queue$$Type<$AzAnimationPoint$$Type>, rotationZQueue: $Queue$$Type<$AzAnimationPoint$$Type>, positionXQueue: $Queue$$Type<$AzAnimationPoint$$Type>, positionYQueue: $Queue$$Type<$AzAnimationPoint$$Type>, positionZQueue: $Queue$$Type<$AzAnimationPoint$$Type>, scaleXQueue: $Queue$$Type<$AzAnimationPoint$$Type>, scaleYQueue: $Queue$$Type<$AzAnimationPoint$$Type>, scaleZQueue: $Queue$$Type<$AzAnimationPoint$$Type>)

public "addNextPosition"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, azBoneSnapshot3: $AzBoneSnapshot$$Type, azAnimationPoint4: $AzAnimationPoint$$Type, azAnimationPoint5: $AzAnimationPoint$$Type, azAnimationPoint6: $AzAnimationPoint$$Type): void
public "addNextRotation"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, azBoneSnapshot3: $AzBoneSnapshot$$Type, azBoneSnapshot4: $AzBoneSnapshot$$Type, azAnimationPoint5: $AzAnimationPoint$$Type, azAnimationPoint6: $AzAnimationPoint$$Type, azAnimationPoint7: $AzAnimationPoint$$Type): void
public "addNextScale"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, azBoneSnapshot3: $AzBoneSnapshot$$Type, azAnimationPoint4: $AzAnimationPoint$$Type, azAnimationPoint5: $AzAnimationPoint$$Type, azAnimationPoint6: $AzAnimationPoint$$Type): void
public "addPosXPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addPosYPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addPosZPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addPositions"(azAnimationPoint0: $AzAnimationPoint$$Type, azAnimationPoint1: $AzAnimationPoint$$Type, azAnimationPoint2: $AzAnimationPoint$$Type): void
public "addRotationXPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addRotationYPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addRotationZPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addRotations"(azAnimationPoint0: $AzAnimationPoint$$Type, azAnimationPoint1: $AzAnimationPoint$$Type, azAnimationPoint2: $AzAnimationPoint$$Type): void
public "addScaleXPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addScaleYPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addScaleZPoint"(azKeyframe0: $AzKeyframe$$Type<any>, double1: double, double2: double, double3: double, double4: double): void
public "addScales"(azAnimationPoint0: $AzAnimationPoint$$Type, azAnimationPoint1: $AzAnimationPoint$$Type, azAnimationPoint2: $AzAnimationPoint$$Type): void
public "bone"(): $AzBone
public "positionXQueue"(): $Queue<$AzAnimationPoint>
public "positionYQueue"(): $Queue<$AzAnimationPoint>
public "positionZQueue"(): $Queue<$AzAnimationPoint>
public "rotationXQueue"(): $Queue<$AzAnimationPoint>
public "rotationYQueue"(): $Queue<$AzAnimationPoint>
public "rotationZQueue"(): $Queue<$AzAnimationPoint>
public "scaleXQueue"(): $Queue<$AzAnimationPoint>
public "scaleYQueue"(): $Queue<$AzAnimationPoint>
public "scaleZQueue"(): $Queue<$AzAnimationPoint>
}
}

declare module "mod.azure.azurelib.animation.AzAnimatorAccessor" {
import { $Optional } from "java.util.Optional"
import { $AzAnimator, $AzAnimator$$Type } from "mod.azure.azurelib.animation.AzAnimator"

export interface $AzAnimatorAccessor<K = any, T = any> {
"getAnimator"(): $Optional<$AzAnimator<K, T>>
"getAnimatorOrNull"(): $AzAnimator<K, T>
"setAnimator"(azAnimator0: $AzAnimator$$Type<K, T>): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "animatorOrNull"(): $AzAnimator<K, T>
set "animator"(value: $AzAnimator$$Type<K, T>)
}

export namespace $AzAnimatorAccessor {
function cast<K, T>(t0: T): $AzAnimatorAccessor<K, T>
function get<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
function getOrNull<K, T>(t0: T): $AzAnimator<K, T>
}
export abstract class $AzAnimatorAccessor$$Static<K = any, T = any> implements $AzAnimatorAccessor<K, T> {
static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
}
}

declare module "mod.azure.azurelib.animation.AzAnimationContext" {
import { $AzAnimatorConfig, $AzAnimatorConfig$$Type } from "mod.azure.azurelib.animation.AzAnimatorConfig"
import { $AzAnimationTimer, $AzAnimationTimer$$Type } from "mod.azure.azurelib.animation.AzAnimationTimer"
import { $AzBoneCache, $AzBoneCache$$Type } from "mod.azure.azurelib.animation.cache.AzBoneCache"

export class $AzAnimationContext<T = any> {
constructor(azBoneCache0: $AzBoneCache$$Type, azAnimatorConfig1: $AzAnimatorConfig$$Type, azAnimationTimer2: $AzAnimationTimer$$Type)

public "animatable"(): T
public "boneCache"(): $AzBoneCache
public "config"(): $AzAnimatorConfig
public "timer"(): $AzAnimationTimer
}
}

declare module "mod.azure.azurelib.animation.controller.AzAnimationController" {
import { $AzAnimationQueue } from "mod.azure.azurelib.animation.controller.AzAnimationQueue"
import { $AzAnimationControllerTimer } from "mod.azure.azurelib.animation.controller.AzAnimationControllerTimer"
import { $AzAnimationControllerBuilder } from "mod.azure.azurelib.animation.controller.AzAnimationControllerBuilder"
import { $AzAnimator$$Type } from "mod.azure.azurelib.animation.AzAnimator"
import { $AzQueuedAnimation, $AzQueuedAnimation$$Type } from "mod.azure.azurelib.animation.primitive.AzQueuedAnimation"
import { $AzAbstractAnimationController } from "mod.azure.azurelib.animation.controller.AzAbstractAnimationController"
import { $AzAnimationProperties, $AzAnimationProperties$$Type } from "mod.azure.azurelib.animation.property.AzAnimationProperties"
import { $AzKeyframeManager } from "mod.azure.azurelib.animation.controller.keyframe.AzKeyframeManager"
import { $List } from "java.util.List"
import { $AzAnimationSequence$$Type } from "mod.azure.azurelib.animation.dispatch.command.sequence.AzAnimationSequence"
import { $AzBoneAnimationQueueCache } from "mod.azure.azurelib.animation.controller.AzBoneAnimationQueueCache"
import { $AzBoneSnapshotCache } from "mod.azure.azurelib.animation.controller.AzBoneSnapshotCache"
import { $AzAnimationControllerStateMachine } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine"
import { $AzDispatchSide$$Type } from "mod.azure.azurelib.animation.dispatch.AzDispatchSide"

export class $AzAnimationController<T = any> extends $AzAbstractAnimationController {
public "animationProperties"(): $AzAnimationProperties
public "animationQueue"(): $AzAnimationQueue
public "boneAnimationQueueCache"(): $AzBoneAnimationQueueCache<T>
public "boneSnapshotCache"(): $AzBoneSnapshotCache
public static "builder"<T>(azAnimator0: $AzAnimator$$Type<any, T>, string1: string): $AzAnimationControllerBuilder<T>
public "controllerTimer"(): $AzAnimationControllerTimer<T>
public "currentAnimation"(): $AzQueuedAnimation
public "keyframeManager"(): $AzKeyframeManager<T>
public "run"(azDispatchSide0: $AzDispatchSide$$Type, azAnimationSequence1: $AzAnimationSequence$$Type): void
public "setAnimationProperties"(azAnimationProperties0: $AzAnimationProperties$$Type): void
public "setCurrentAnimation"(azQueuedAnimation0: $AzQueuedAnimation$$Type): void
public "stateMachine"(): $AzAnimationControllerStateMachine<T>
public "tryCreateAnimationQueue"(t0: T, azAnimationSequence1: $AzAnimationSequence$$Type): $List<$AzQueuedAnimation>
public "update"(): void
}
}

declare module "mod.azure.azurelib.animation.controller.state.impl.AzAnimationPauseState" {
import { $AzAnimationPlayState } from "mod.azure.azurelib.animation.controller.state.impl.AzAnimationPlayState"

export class $AzAnimationPauseState<T = any> extends $AzAnimationPlayState<T> {
constructor()

}
}

declare module "mod.azure.azurelib.animation.AzAnimatorConfig$Builder" {
import { $AzAnimatorConfig } from "mod.azure.azurelib.animation.AzAnimatorConfig"

export class $AzAnimatorConfig$Builder {
public "build"(): $AzAnimatorConfig
public "crashIfBoneMissing"(): $AzAnimatorConfig$Builder
public "shouldPlayAnimationsWhileGamePaused"(): $AzAnimatorConfig$Builder
public "withBoneResetTime"(double0: double): $AzAnimatorConfig$Builder
}
}

declare module "mod.azure.azurelib.animation.controller.AzBoneSnapshotCache" {
import { $Collection$$Type } from "java.util.Collection"
import { $AzBoneSnapshot, $AzBoneSnapshot$$Type } from "mod.azure.azurelib.model.AzBoneSnapshot"
import { $AzQueuedAnimation$$Type } from "mod.azure.azurelib.animation.primitive.AzQueuedAnimation"

export class $AzBoneSnapshotCache {
constructor()

public "getOrNull"(string0: string): $AzBoneSnapshot
public "put"(azQueuedAnimation0: $AzQueuedAnimation$$Type, collection1: $Collection$$Type<$AzBoneSnapshot$$Type>): void
}
}

declare module "mod.azure.azurelib.animation.primitive.AzBakedAnimation" {
import { $AzLoopType, $AzLoopType$$Type } from "mod.azure.azurelib.animation.primitive.AzLoopType"
import { $AzBoneAnimation, $AzBoneAnimation$$Type } from "mod.azure.azurelib.animation.controller.keyframe.AzBoneAnimation"
import { $Record } from "java.lang.Record"
import { $AzKeyframes, $AzKeyframes$$Type } from "mod.azure.azurelib.animation.primitive.AzKeyframes"

export class $AzBakedAnimation extends $Record {
constructor(name: string, length: double, loopType: $AzLoopType$$Type, boneAnimations: $AzBoneAnimation$$Type[], keyframes: $AzKeyframes$$Type)

public "boneAnimations"(): $AzBoneAnimation[]
public "keyframes"(): $AzKeyframes
public "length"(): double
public "loopType"(): $AzLoopType
public "name"(): string
}
}

declare module "mod.azure.azurelib.animation.play_behavior.AzPlayBehavior" {
import { $AzAnimationControllerStateMachine$Context$$Type } from "mod.azure.azurelib.animation.controller.state.machine.AzAnimationControllerStateMachine$Context"

export class $AzPlayBehavior {
public "name"(): string
public "onFinish"(context0: $AzAnimationControllerStateMachine$Context$$Type<any>): void
public "onUpdate"(context0: $AzAnimationControllerStateMachine$Context$$Type<any>): void
}
}

declare module "mod.azure.azurelib.animation.event.AzSoundKeyframeEvent" {
import { $AzKeyframeEvent } from "mod.azure.azurelib.animation.event.AzKeyframeEvent"
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"
import { $SoundKeyframeData, $SoundKeyframeData$$Type } from "mod.azure.azurelib.core.keyframe.event.data.SoundKeyframeData"

export class $AzSoundKeyframeEvent<T = any> extends $AzKeyframeEvent<T, $SoundKeyframeData> {
constructor(t0: T, double1: double, azAnimationController2: $AzAnimationController$$Type<T>, soundKeyframeData3: $SoundKeyframeData$$Type)

}
}

declare module "mod.azure.azurelib.animation.cache.AzBoneCache" {
import { $AzAnimationContext$$Type } from "mod.azure.azurelib.animation.AzAnimationContext"
import { $AzBakedModel, $AzBakedModel$$Type } from "mod.azure.azurelib.model.AzBakedModel"
import { $Map } from "java.util.Map"
import { $AzBoneSnapshot } from "mod.azure.azurelib.model.AzBoneSnapshot"

export class $AzBoneCache {
constructor()

public "getBakedModel"(): $AzBakedModel
public "getBoneSnapshotsByName"(): $Map<string, $AzBoneSnapshot>
public "isEmpty"(): boolean
public "setActiveModel"(azBakedModel0: $AzBakedModel$$Type): boolean
public "setBakedModel"(azBakedModel0: $AzBakedModel$$Type): void
public "update"(azAnimationContext0: $AzAnimationContext$$Type<any>): void
get "bakedModel"(): $AzBakedModel
get "boneSnapshotsByName"(): $Map<string, $AzBoneSnapshot>
get "empty"(): boolean
set "activeModel"(value: $AzBakedModel$$Type)
set "bakedModel"(value: $AzBakedModel$$Type)
}
}

declare module "mod.azure.azurelib.animation.dispatch.command.sequence.AzAnimationSequence" {
import { $List, $List$$Type } from "java.util.List"
import { $AzAnimationStage, $AzAnimationStage$$Type } from "mod.azure.azurelib.animation.dispatch.command.stage.AzAnimationStage"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $Record } from "java.lang.Record"
import { $FriendlyByteBuf } from "net.minecraft.network.FriendlyByteBuf"
import { $Function } from "java.util.function.Function"

export class $AzAnimationSequence extends $Record {
static readonly "DECODER": $Function<$FriendlyByteBuf, $AzAnimationSequence>
static readonly "ENCODER": $BiConsumer<$FriendlyByteBuf, $AzAnimationSequence>

constructor(stages: $List$$Type<$AzAnimationStage$$Type>)

public "stages"(): $List<$AzAnimationStage>
}
}

declare module "mod.azure.azurelib.cache.object.GeoCube" {
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Record } from "java.lang.Record"
import { $GeoQuad, $GeoQuad$$Type } from "mod.azure.azurelib.cache.object.GeoQuad"

export class $GeoCube extends $Record {
constructor(quads: $GeoQuad$$Type[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "inflate"(): double
public "mirror"(): boolean
public "pivot"(): $Vec3
public "quads"(): $GeoQuad[]
public "rotation"(): $Vec3
public "size"(): $Vec3
}
}

declare module "mod.azure.azurelib.model.AzBone" {
import { $AzBoneMetadata$$Type } from "mod.azure.azurelib.model.AzBoneMetadata"
import { $List } from "java.util.List"
import { $GeoCube } from "mod.azure.azurelib.cache.object.GeoCube"
import { $AzBoneSnapshot } from "mod.azure.azurelib.model.AzBoneSnapshot"
import { $Vector3d, $Vector3d$$Type } from "org.joml.Vector3d"
import { $Matrix3f, $Matrix3f$$Type } from "org.joml.Matrix3f"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export class $AzBone {
constructor(azBoneMetadata0: $AzBoneMetadata$$Type)

public "addRotationOffsetFromBone"(azBone0: $AzBone$$Type): void
public "deepCopy"(): $AzBone
public "getChildBones"(): $List<$AzBone>
public "getCubes"(): $List<$GeoCube>
public "getInflate"(): double
public "getInitialAzSnapshot"(): $AzBoneSnapshot
public "getLocalPosition"(): $Vector3d
public "getLocalSpaceMatrix"(): $Matrix4f
public "getMirror"(): boolean
public "getModelPosition"(): $Vector3d
public "getModelRotationMatrix"(): $Matrix4f
public "getModelSpaceMatrix"(): $Matrix4f
public "getName"(): string
public "getParent"(): $AzBone
public "getPivotX"(): float
public "getPivotY"(): float
public "getPivotZ"(): float
public "getPosX"(): float
public "getPosY"(): float
public "getPosZ"(): float
public "getPositionVector"(): $Vector3d
public "getReset"(): boolean
public "getRotX"(): float
public "getRotY"(): float
public "getRotZ"(): float
public "getRotationVector"(): $Vector3d
public "getScaleVector"(): $Vector3d
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "getWorldPosition"(): $Vector3d
public "getWorldSpaceMatrix"(): $Matrix4f
public "getWorldSpaceNormal"(): $Matrix3f
public "hasPositionChanged"(): boolean
public "hasRotationChanged"(): boolean
public "hasScaleChanged"(): boolean
public "isHidden"(): boolean
public "isHidingChildren"(): boolean
public "isTrackingMatrices"(): boolean
public "markPositionAsChanged"(): void
public "markRotationAsChanged"(): void
public "markScaleAsChanged"(): void
public "resetStateChanges"(): void
public "saveInitialSnapshot"(): void
public "setChildrenHidden"(boolean0: boolean): void
public "setHidden"(boolean0: boolean): void
public "setLocalSpaceMatrix"(matrix4f0: $Matrix4f$$Type): void
public "setModelPosition"(vector3d0: $Vector3d$$Type): void
public "setModelSpaceMatrix"(matrix4f0: $Matrix4f$$Type): void
public "setPivotX"(float0: float): void
public "setPivotY"(float0: float): void
public "setPivotZ"(float0: float): void
public "setPosX"(float0: float): void
public "setPosY"(float0: float): void
public "setPosZ"(float0: float): void
public "setRotX"(float0: float): void
public "setRotY"(float0: float): void
public "setRotZ"(float0: float): void
public "setScaleX"(float0: float): void
public "setScaleY"(float0: float): void
public "setScaleZ"(float0: float): void
public "setTrackingMatrices"(boolean0: boolean): void
public "setWorldSpaceMatrix"(matrix4f0: $Matrix4f$$Type): void
public "setWorldSpaceNormal"(matrix3f0: $Matrix3f$$Type): void
public "shouldNeverRender"(): boolean
public "updatePivot"(float0: float, float1: float, float2: float): void
public "updatePosition"(float0: float, float1: float, float2: float): void
public "updateRotation"(float0: float, float1: float, float2: float): void
public "updateScale"(float0: float, float1: float, float2: float): void
get "childBones"(): $List<$AzBone>
get "cubes"(): $List<$GeoCube>
get "inflate"(): double
get "initialAzSnapshot"(): $AzBoneSnapshot
get "localPosition"(): $Vector3d
get "localSpaceMatrix"(): $Matrix4f
get "mirror"(): boolean
get "modelPosition"(): $Vector3d
get "modelRotationMatrix"(): $Matrix4f
get "modelSpaceMatrix"(): $Matrix4f
get "name"(): string
get "parent"(): $AzBone
get "pivotX"(): float
get "pivotY"(): float
get "pivotZ"(): float
get "posX"(): float
get "posY"(): float
get "posZ"(): float
get "positionVector"(): $Vector3d
get "reset"(): boolean
get "rotX"(): float
get "rotY"(): float
get "rotZ"(): float
get "rotationVector"(): $Vector3d
get "scaleVector"(): $Vector3d
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "worldPosition"(): $Vector3d
get "worldSpaceMatrix"(): $Matrix4f
get "worldSpaceNormal"(): $Matrix3f
get "hidden"(): boolean
get "hidingChildren"(): boolean
get "trackingMatrices"(): boolean
set "childrenHidden"(value: boolean)
set "hidden"(value: boolean)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "modelPosition"(value: $Vector3d$$Type)
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "pivotX"(value: float)
set "pivotY"(value: float)
set "pivotZ"(value: float)
set "posX"(value: float)
set "posY"(value: float)
set "posZ"(value: float)
set "rotX"(value: float)
set "rotY"(value: float)
set "rotZ"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
set "trackingMatrices"(value: boolean)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceNormal"(value: $Matrix3f$$Type)
}
}

declare module "mod.azure.azurelib.animation.controller.AzAnimationControllerTimer" {
import { $AzAnimationController$$Type } from "mod.azure.azurelib.animation.controller.AzAnimationController"

export class $AzAnimationControllerTimer<T = any> {
constructor(azAnimationController0: $AzAnimationController$$Type<T>)

public "addToAdjustedTick"(double0: double): void
public "getAdjustedTick"(): double
public "reset"(): void
public "update"(): void
get "adjustedTick"(): double
}
}

declare module "mod.azure.azurelib.loading.json.raw.PolysUnion$Type" {
import { $Enum } from "java.lang.Enum"

export class $PolysUnion$Type extends $Enum<$PolysUnion$Type> {
static readonly "QUAD": $PolysUnion$Type
static readonly "TRI": $PolysUnion$Type

public static "valueOf"(string0: string): $PolysUnion$Type
public static "values"(): $PolysUnion$Type[]
}
}

declare module "mod.azure.azurelib.loading.json.raw.UVFaces" {
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $FaceUV, $FaceUV$$Type } from "mod.azure.azurelib.loading.json.raw.FaceUV"
import { $JsonDeserializer } from "com.google.gson.JsonDeserializer"
import { $Record } from "java.lang.Record"

export class $UVFaces extends $Record {
constructor(north: $FaceUV$$Type, south: $FaceUV$$Type, east: $FaceUV$$Type, west: $FaceUV$$Type, up: $FaceUV$$Type, down: $FaceUV$$Type)

public static "deserializer"(): $JsonDeserializer<$UVFaces>
public "down"(): $FaceUV
public "east"(): $FaceUV
public "fromDirection"(direction0: $Direction$$Type): $FaceUV
public "north"(): $FaceUV
public "south"(): $FaceUV
public "up"(): $FaceUV
public "west"(): $FaceUV
}
}

declare module "mod.azure.azurelib.model.AzBakedModel" {
import { $List, $List$$Type } from "java.util.List"
import { $AzBone, $AzBone$$Type } from "mod.azure.azurelib.model.AzBone"
import { $Map } from "java.util.Map"
import { $Optional } from "java.util.Optional"
import { $UUID, $UUID$$Type } from "java.util.UUID"

export class $AzBakedModel {
constructor(list0: $List$$Type<$AzBone$$Type>)
constructor(list0: $List$$Type<$AzBone$$Type>, uUID1: $UUID$$Type)

public "deepCopy"(): $AzBakedModel
public "getBone"(string0: string): $Optional<$AzBone>
public "getBoneOrNull"(string0: string): $AzBone
public "getBonesByName"(): $Map<string, $AzBone>
public static "getDefault"(): $AzBakedModel
public "getModelUUID"(): $UUID
public "getTopLevelBones"(): $List<$AzBone>
public static "setDefault"(azBakedModel0: $AzBakedModel$$Type): void
get "bonesByName"(): $Map<string, $AzBone>
get "modelUUID"(): $UUID
get "topLevelBones"(): $List<$AzBone>
}
}

