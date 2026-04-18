declare module "traben.entity_model_features.models.parts.EMFModelPart$Animator" {
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"

export class $EMFModelPart$Animator implements $Runnable {
public "getAnimation"(): $Runnable
public "hasAnimation"(): boolean
public "run"(): void
public "setAnimation"(animation: $Runnable$$Type): void
get "animation"(): $Runnable
set "animation"(value: $Runnable$$Type)
}
}

declare module "traben.entity_model_features.models.jem_objects.EMFBoxData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EMFBoxData {
constructor()

public "checkAndFixUVLegacyDirections"(): void
public "prepare"(invertX: boolean, invertY: boolean, invertZ: boolean): void
get "coordinates"(): float[]
set "coordinates"(value: float[])
get "sizeAdd"(): float
set "sizeAdd"(value: float)
get "sizeAddX"(): float
set "sizeAddX"(value: float)
get "sizeAddY"(): float
set "sizeAddY"(value: float)
get "sizeAddZ"(): float
set "sizeAddZ"(value: float)
get "sizesAdd"(): float[]
set "sizesAdd"(value: float[])
get "textureOffset"(): float[]
set "textureOffset"(value: float[])
get "uvBack"(): float[]
set "uvBack"(value: float[])
get "uvDown"(): float[]
set "uvDown"(value: float[])
get "uvEast"(): float[]
set "uvEast"(value: float[])
get "uvFront"(): float[]
set "uvFront"(value: float[])
get "uvLeft"(): float[]
set "uvLeft"(value: float[])
get "uvNorth"(): float[]
set "uvNorth"(value: float[])
get "uvRight"(): float[]
set "uvRight"(value: float[])
get "uvSouth"(): float[]
set "uvSouth"(value: float[])
get "uvUp"(): float[]
set "uvUp"(value: float[])
get "uvWest"(): float[]
set "uvWest"(value: float[])
}
}

declare module "traben.entity_model_features.models.IEMFModel" {
import { $EMFModelPartRoot } from "traben.entity_model_features.models.parts.EMFModelPartRoot"

export interface $IEMFModel {
"emf$getEMFRootModel"(): $EMFModelPartRoot
"emf$isEMFModel"(): boolean
}

export namespace $IEMFModel {
const probejs$$marker: never
}
export abstract class $IEMFModel$$Static implements $IEMFModel {
}
}

declare module "traben.entity_model_features.models.parts.EMFModelPartVanilla" {
import { $EMFModelPartWithState } from "traben.entity_model_features.models.parts.EMFModelPartWithState"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $Collection$$Type } from "java.util.Collection"
import { $Map$$Type } from "java.util.Map"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPartVanilla extends $EMFModelPartWithState {
constructor(name: string, vanillaPart: $ModelPart$$Type, optifinePartNames: $Collection$$Type<string>, allVanillaParts: $Map$$Type<string, $EMFModelPartVanilla$$Type>)

public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "getAllEMFCustomChildren"(): $ModelPart[]
public "receiveRootAnimationRunnable"(variant: integer, run: $Runnable$$Type): void
public "setHideInTheseStates"(variant: integer): void
get "allEMFCustomChildren"(): $ModelPart[]
set "hideInTheseStates"(value: integer)
}
}

declare module "traben.entity_model_features.mixin.mixins.accessor.CuboidAccessor" {
import { $ModelPart$Polygon$$Type } from "net.minecraft.client.model.geom.ModelPart$Polygon"

export interface $CuboidAccessor {
"setMaxX"(float0: float): void
"setMaxY"(float0: float): void
"setMaxZ"(float0: float): void
"setMinX"(float0: float): void
"setMinY"(float0: float): void
"setMinZ"(float0: float): void
"setPolygons"(polygon0s: $ModelPart$Polygon$$Type[]): void
set "maxX"(value: float)
set "maxY"(value: float)
set "maxZ"(value: float)
set "minX"(value: float)
set "minY"(value: float)
set "minZ"(value: float)
set "polygons"(value: $ModelPart$Polygon$$Type[])
}

export namespace $CuboidAccessor {
const probejs$$marker: never
}
export abstract class $CuboidAccessor$$Static implements $CuboidAccessor {
}
}

declare module "traben.entity_model_features.models.animation.math.variables.EMFModelOrRenderVariable" {
import { $Enum } from "java.lang.Enum"
import { $EMFModelPart$$Type } from "traben.entity_model_features.models.parts.EMFModelPart"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelOrRenderVariable extends $Enum<$EMFModelOrRenderVariable> {
static readonly "RENDER_LEASH_X": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_Y": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_Z": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_OPACITY": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_X": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_Z": $EMFModelOrRenderVariable
static readonly "RENDER_shadow_size": $EMFModelOrRenderVariable
static readonly "RX": $EMFModelOrRenderVariable
static readonly "RY": $EMFModelOrRenderVariable
static readonly "RZ": $EMFModelOrRenderVariable
static readonly "SX": $EMFModelOrRenderVariable
static readonly "SY": $EMFModelOrRenderVariable
static readonly "SZ": $EMFModelOrRenderVariable
static readonly "TX": $EMFModelOrRenderVariable
static readonly "TY": $EMFModelOrRenderVariable
static readonly "TZ": $EMFModelOrRenderVariable
static readonly "VISIBLE": $EMFModelOrRenderVariable
static readonly "VISIBLE_BOXES": $EMFModelOrRenderVariable

public static "get"(id: string): $EMFModelOrRenderVariable
public static "getRenderVariable"(id: string): $EMFModelOrRenderVariable
public "getValue"(modelPart0: $ModelPart$$Type): float
public "getValue"(): float
public "isBoolean"(): boolean
public "isRenderVariable"(): boolean
public "setValue"(eMFModelPart0: $EMFModelPart$$Type, float1: float): void
public static "valueOf"(name: string): $EMFModelOrRenderVariable
public static "values"(): $EMFModelOrRenderVariable[]
get "value"(): float
get "boolean"(): boolean
get "renderVariable"(): boolean
}
}

declare module "traben.entity_model_features.utils.EMFEntity" {
import { $Component } from "net.minecraft.network.chat.Component"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $UUID } from "java.util.UUID"
import { $Iterable } from "java.lang.Iterable"
import { $Team } from "net.minecraft.world.scores.Team"
import { $Object2FloatOpenHashMap } from "it.unimi.dsi.fastutil.objects.Object2FloatOpenHashMap"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag"
import { $Pose } from "net.minecraft.world.entity.Pose"
import { $ETFEntity } from "traben.entity_texture_features.utils.ETFEntity"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $Level } from "net.minecraft.world.level.Level"

export interface $EMFEntity extends $ETFEntity {
"emf$age"(): float
"emf$getPitch"(): float
"emf$getTypeString"(): string
"emf$getVariableMap"(): $Object2FloatOpenHashMap<string>
"emf$getVelocity"(): $Vec3
"emf$getX"(): double
"emf$getY"(): double
"emf$getYaw"(): float
"emf$getZ"(): double
"emf$hasPassengers"(): boolean
"emf$hasVehicle"(): boolean
"emf$isAlive"(): boolean
"emf$isGlowing"(): boolean
"emf$isInLava"(): boolean
"emf$isInvisible"(): boolean
"emf$isOnFire"(): boolean
"emf$isOnGround"(): boolean
"emf$isSneaking"(): boolean
"emf$isSprinting"(): boolean
"emf$isTouchingWater"(): boolean
"emf$isWet"(): boolean
"emf$prevPitch"(): float
"emf$prevX"(): double
"emf$prevY"(): double
"emf$prevZ"(): double
"etf$canBeBright"(): boolean
"etf$distanceTo"(entity0: $Entity$$Type): float
"etf$getArmorItems"(): $Iterable<$ItemStack>
"etf$getBlockPos"(): $BlockPos
"etf$getBlockY"(): integer
"etf$getCustomName"(): $Component
"etf$getETFRenderState"(): $ETFEntityRenderState
"etf$getEntityKey"(): string
"etf$getHandItems"(): $Iterable<$ItemStack>
"etf$getItemsEquipped"(): $Iterable<$ItemStack>
"etf$getNbt"(): $CompoundTag
"etf$getOptifineId"(): integer
"etf$getOptifineVehicleId"(): integer
/** @deprecated */
"etf$getPose"(): $Pose
"etf$getScoreboardTeam"(): $Team
"etf$getType"(): $EntityType<any>
"etf$getUuid"(): $UUID
"etf$getVelocity"(): $Vec3
"etf$getWorld"(): $Level
"etf$hasCustomName"(): boolean
"etf$isBlockEntity"(): boolean
}

export namespace $EMFEntity {
const probejs$$marker: never
}
export abstract class $EMFEntity$$Static implements $EMFEntity {
}
}

declare module "traben.entity_model_features.models.parts.EMFModelPartWithState$EMFModelState" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List, $List$$Type } from "java.util.List"
import { $PartPose, $PartPose$$Type } from "net.minecraft.client.model.geom.PartPose"
import { $ModelPart$Cube, $ModelPart$Cube$$Type } from "net.minecraft.client.model.geom.ModelPart$Cube"
import { $EMFModelPart$Animator, $EMFModelPart$Animator$$Type } from "traben.entity_model_features.models.parts.EMFModelPart$Animator"
import { $Map, $Map$$Type } from "java.util.Map"
import { $Record } from "java.lang.Record"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPartWithState$EMFModelState extends $Record {
constructor(defaultTransform: $PartPose$$Type, cuboids: $List$$Type<$ModelPart$Cube$$Type>, variantChildren: $Map$$Type<string, $ModelPart$$Type>, xScale: float, yScale: float, zScale: float, visible: boolean, hidden: boolean, texture: $ResourceLocation$$Type, animation: $EMFModelPart$Animator$$Type)

public "animation"(): $EMFModelPart$Animator
public "copy"(): $EMFModelPartWithState$EMFModelState
public "copy"(visibleOverride: boolean): $EMFModelPartWithState$EMFModelState
public "cuboids"(): $List<$ModelPart$Cube>
public "defaultTransform"(): $PartPose
public "hidden"(): boolean
public "texture"(): $ResourceLocation
public "variantChildren"(): $Map<string, $ModelPart>
public "visible"(): boolean
public "xScale"(): float
public "yScale"(): float
public "zScale"(): float
}
}

declare module "traben.entity_model_features.mixin.mixins.accessor.MinecraftClientAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftClientAccessor {
"getPausePartialTick"(): float
get "pausePartialTick"(): float
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
export abstract class $MinecraftClientAccessor$$Static implements $MinecraftClientAccessor {
}
}

declare module "traben.entity_model_features.models.animation.EMFAnimation" {
import { $LinkedHashMap, $LinkedHashMap$$Type } from "java.util.LinkedHashMap"
import { $HashMap, $HashMap$$Type } from "java.util.HashMap"
import { $EMFModelPart, $EMFModelPart$$Type } from "traben.entity_model_features.models.parts.EMFModelPart"
import { $EMFModelOrRenderVariable$$Type } from "traben.entity_model_features.models.animation.math.variables.EMFModelOrRenderVariable"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EMFAnimation {
readonly "animKey": string
readonly "expressionString": string
readonly "modelName": string

constructor(partToApplyTo: $EMFModelPart$$Type, modelOrRenderVariableToChange: $EMFModelOrRenderVariable$$Type, animKey: string, initialExpression: string, modelName: string)

public "calculateAndSet"(): void
public "calculateAndSetIfNotPaused"(paused: $ModelPart$$Type[]): void
public "getLastResultOnly"(): float
public "getResultViaCalculate"(): float
public "initExpression"(emfAnimationVariables: $LinkedHashMap$$Type<string, $EMFAnimation$$Type>, allPartByName: $HashMap$$Type<string, $EMFModelPart$$Type>): void
public "isValid"(): boolean
public "isVar"(): boolean
get "temp_allPartsBySingleAndFullHeirachicalId"(): $HashMap<string, $EMFModelPart>
set "temp_allPartsBySingleAndFullHeirachicalId"(value: $HashMap$$Type<string, $EMFModelPart$$Type>)
get "temp_emfAnimationVariables"(): $LinkedHashMap<string, $EMFAnimation>
set "temp_emfAnimationVariables"(value: $LinkedHashMap$$Type<string, $EMFAnimation$$Type>)
get "lastResultOnly"(): float
get "resultViaCalculate"(): float
get "valid"(): boolean
get "var"(): boolean
}
}

declare module "traben.entity_model_features.utils.IEMFTextureSizeSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEMFTextureSizeSupplier {
"emf$getTextureSize"(): integer[]
"emf$setTextureSize"(int0s: integer[]): void
}

export namespace $IEMFTextureSizeSupplier {
const probejs$$marker: never
}
export abstract class $IEMFTextureSizeSupplier$$Static implements $IEMFTextureSizeSupplier {
}
}

declare module "traben.entity_model_features.models.jem_objects.EMFPartData" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $LinkedHashMap, $LinkedHashMap$$Type } from "java.util.LinkedHashMap"
import { $EMFBoxData, $EMFBoxData$$Type } from "traben.entity_model_features.models.jem_objects.EMFBoxData"
import { $EMFAttachments } from "traben.entity_model_features.models.animation.EMFAttachments"
import { $List } from "java.util.List"
import { $EMFJemData$$Type } from "traben.entity_model_features.models.jem_objects.EMFJemData"
import { $HashMap, $HashMap$$Type } from "java.util.HashMap"
import { $LinkedList, $LinkedList$$Type } from "java.util.LinkedList"

export class $EMFPartData {
constructor()

public "getAttachments"(): $List<$EMFAttachments>
public "getCustomTexture"(): $ResourceLocation
public "prepare"(textureSize: integer[], jem: $EMFJemData$$Type): void
get "animations"(): $LinkedList<$LinkedHashMap<string, string>>
set "animations"(value: $LinkedList$$Type<$LinkedHashMap$$Type<string, string>>)
get "attach"(): boolean
set "attach"(value: boolean)
get "attachments"(): $HashMap<string, float[]>
set "attachments"(value: $HashMap$$Type<string, float[]>)
get "baseId"(): string
set "baseId"(value: string)
get "boxes"(): $EMFBoxData[]
set "boxes"(value: $EMFBoxData$$Type[])
get "id"(): string
set "id"(value: string)
get "invertAxis"(): string
set "invertAxis"(value: string)
get "mirrorTexture"(): string
set "mirrorTexture"(value: string)
get "model"(): string
set "model"(value: string)
get "part"(): string
set "part"(value: string)
get "rotate"(): float[]
set "rotate"(value: float[])
get "scale"(): float
set "scale"(value: float)
get "submodel"(): $EMFPartData
set "submodel"(value: $EMFPartData$$Type)
get "submodels"(): $LinkedList<$EMFPartData>
set "submodels"(value: $LinkedList$$Type<$EMFPartData$$Type>)
get "texture"(): string
set "texture"(value: string)
get "textureSize"(): integer[]
set "textureSize"(value: integer[])
get "translate"(): float[]
set "translate"(value: float[])
get "customTexture"(): $ResourceLocation
}
}

declare module "traben.entity_model_features.models.animation.EMFAttachments" {
import { $PoseStack$Pose, $PoseStack$Pose$$Type } from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EMFAttachments {
readonly "right": boolean

constructor(x: float, y: float, z: float, right: boolean)

public "setAttachment"(entry: $PoseStack$$Type): void
get "pose"(): $PoseStack$Pose
set "pose"(value: $PoseStack$Pose$$Type)
set "attachment"(value: $PoseStack$$Type)
}
}

declare module "traben.entity_model_features.models.IEMFModelNameContainer" {
import { $EMFModel_ID$$Type } from "traben.entity_model_features.models.EMFModel_ID"

export interface $IEMFModelNameContainer {
"emf$insertKnownMappings"(eMFModel_ID0: $EMFModel_ID$$Type): void
}

export namespace $IEMFModelNameContainer {
const probejs$$marker: never
}
export abstract class $IEMFModelNameContainer$$Static implements $IEMFModelNameContainer {
}
}

declare module "traben.entity_model_features.utils.IEMFCuboidDataSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEMFCuboidDataSupplier {
"emf$getSizeAdd"(): float[]
"emf$getTextureUV"(): integer[]
"emf$getTextureXY"(): integer[]
}

export namespace $IEMFCuboidDataSupplier {
const probejs$$marker: never
}
export abstract class $IEMFCuboidDataSupplier$$Static implements $IEMFCuboidDataSupplier {
}
}

declare module "traben.entity_model_features.models.parts.EMFModelPartWithState" {
import { $Int2ObjectOpenHashMap } from "it.unimi.dsi.fastutil.ints.Int2ObjectOpenHashMap"
import { $List$$Type } from "java.util.List"
import { $EMFModelPartWithState$EMFModelState } from "traben.entity_model_features.models.parts.EMFModelPartWithState$EMFModelState"
import { $ModelPart$Cube$$Type } from "net.minecraft.client.model.geom.ModelPart$Cube"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $Map$$Type } from "java.util.Map"
import { $EMFModelPart } from "traben.entity_model_features.models.parts.EMFModelPart"
import { $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"

export class $EMFModelPartWithState extends $EMFModelPart {
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<$EMFModelPartWithState$EMFModelState>

constructor(cuboids: $List$$Type<$ModelPart$Cube$$Type>, children: $Map$$Type<string, $ModelPart$$Type>)

public "copyVariantTo"(from: integer, to: integer): void
public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "setVariantStateTo"(newVariant: integer): void
get "currentModelVariant"(): integer
set "currentModelVariant"(value: integer)
set "variantStateTo"(value: integer)
}
}

declare module "traben.entity_model_features.models.parts.EMFModelPartRoot" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $EMFModelPartVanilla, $EMFModelPartVanilla$$Type } from "traben.entity_model_features.models.parts.EMFModelPartVanilla"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $EMFJemData$$Type } from "traben.entity_model_features.models.jem_objects.EMFJemData"
import { $UUID$$Type } from "java.util.UUID"
import { $EMFAnimation$$Type } from "traben.entity_model_features.models.animation.EMFAnimation"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $EntityIntLRU } from "traben.entity_texture_features.utils.EntityIntLRU"
import { $ETFApi$ETFVariantSuffixProvider, $ETFApi$ETFVariantSuffixProvider$$Type } from "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider"
import { $Map$$Type } from "java.util.Map"
import { $EMFModel_ID, $EMFModel_ID$$Type } from "traben.entity_model_features.models.EMFModel_ID"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"
import { $EMFDirectoryHandler, $EMFDirectoryHandler$$Type } from "traben.entity_model_features.utils.EMFDirectoryHandler"

export class $EMFModelPartRoot extends $EMFModelPartVanilla {
readonly "entitySuffixMap": $EntityIntLRU
readonly "modelName": $EMFModel_ID
readonly "vanillaRoot": $ModelPart

constructor(mobNameForFileAndMap: $EMFModel_ID$$Type, directoryContext: $EMFDirectoryHandler$$Type, vanillaRoot: $ModelPart$$Type, optifinePartNames: $Collection$$Type<string>, mapForCreatedParts: $Map$$Type<string, $EMFModelPartVanilla$$Type>)

public "addVariantOfJem"(jemData: $EMFJemData$$Type, variant: integer): void
public "checkArmOverrides"(pose: $PoseStack$$Type): void
public "checkIfShouldExpireEntity"(id: $UUID$$Type): void
public "discoverAndInitVariants"(fallbackPropertiesName: string): void
public "doVariantCheck"(): void
public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "getAllVanillaPartsEMF"(): $Collection<$EMFModelPartVanilla>
public "getTopLevelJemTexture"(): $ResourceLocation
public "getVanillaFormatRoot"(): $ModelPart
public "hasAnimation"(): boolean
public "receiveAnimations"(variant: integer, animationList: $Collection$$Type<$EMFAnimation$$Type>): void
public "resetVanillaPartsToDefaults"(): void
public "setVariant1ToVanilla0"(): void
public "triggerManualAnimation"(pose: $PoseStack$$Type): void
public "tryRenderVanillaRootNormally"(matrixStack: $PoseStack$$Type, vertexConsumer: $VertexConsumer$$Type, light: integer, overlay: integer): void
get "containsCustomAnims"(): boolean
set "containsCustomAnims"(value: boolean)
get "containsCustomModel"(): boolean
set "containsCustomModel"(value: boolean)
get "directoryContext"(): $EMFDirectoryHandler
set "directoryContext"(value: $EMFDirectoryHandler$$Type)
get "variantTester"(): $ETFApi$ETFVariantSuffixProvider
set "variantTester"(value: $ETFApi$ETFVariantSuffixProvider$$Type)
get "allVanillaPartsEMF"(): $Collection<$EMFModelPartVanilla>
get "topLevelJemTexture"(): $ResourceLocation
get "vanillaFormatRoot"(): $ModelPart
}
}

declare module "traben.entity_model_features.models.jem_objects.EMFJemData" {
import { $LinkedHashMap } from "java.util.LinkedHashMap"
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $EMFPartData, $EMFPartData$$Type } from "traben.entity_model_features.models.jem_objects.EMFPartData"
import { $LinkedList, $LinkedList$$Type } from "java.util.LinkedList"
import { $EMFModel_ID, $EMFModel_ID$$Type } from "traben.entity_model_features.models.EMFModel_ID"
import { $EMFDirectoryHandler$$Type } from "traben.entity_model_features.utils.EMFDirectoryHandler"

export class $EMFJemData {
constructor()

public "getAllTopLevelAnimationsByVanillaPartName"(): $LinkedHashMap<string, $List<$LinkedHashMap<string, string>>>
public "getCustomTexture"(): $ResourceLocation
public "getMobModelIDInfo"(): $EMFModel_ID
public "prepare"(directoryContext: $EMFDirectoryHandler$$Type, mobModelIDInfo: $EMFModel_ID$$Type): void
public "validateJemTexture"(textureIn: string): $ResourceLocation
public "validateJemTexture"(textureIn: string, canRemoveRedundancy: boolean): $ResourceLocation
public "validateResourcePathAndExists"(pathIn: string, fileTypeExtension: string): $ResourceLocation
get "models"(): $LinkedList<$EMFPartData>
set "models"(value: $LinkedList$$Type<$EMFPartData$$Type>)
get "shadow_size"(): double
set "shadow_size"(value: double)
get "texture"(): string
set "texture"(value: string)
get "textureSize"(): integer[]
set "textureSize"(value: integer[])
get "allTopLevelAnimationsByVanillaPartName"(): $LinkedHashMap<string, $List<$LinkedHashMap<string, string>>>
get "customTexture"(): $ResourceLocation
get "mobModelIDInfo"(): $EMFModel_ID
}
}

declare module "traben.entity_model_features.models.EMFModel_ID" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Comparable } from "java.lang.Comparable"

export class $EMFModel_ID implements $Comparable<$EMFModel_ID> {
constructor(both: string, mapId: string)
constructor(both: string)

public "addFallbackModel"(fileName: string): $EMFModel_ID
public "addFallbackModel"(namespace: string, fileName: string): $EMFModel_ID
public "addFallbackModel"(namespace: string, fileName: string, first: boolean): $EMFModel_ID
public "areBothSame"(): boolean
public "compareTo"(o: $EMFModel_ID$$Type): integer
public "finishAndPrepAutomatedFallbacks"(): void
public "forEachFallback"(action: $Consumer$$Type<$EMFModel_ID$$Type>): void
public "getDisplayFileName"(): string
public "getMapId"(): string
public "getNamespace"(): string
public "getNextFallbackModel"(): $EMFModel_ID
public "getfileName"(): string
public "hasFallbackModels"(): boolean
public "pushNewMainModelAddingOldAsFallback"(fileName: string): $EMFModel_ID
public "pushNewMainModelAndMapIdAddingOldAsFallback"(fileName: string, mapId: string): $EMFModel_ID
public "pushNewMainModelAndMapIdAddingOldAsFallback"(both: string): $EMFModel_ID
public "setBoth"(fileName: string, mapId: string): $EMFModel_ID
public "setBoth"(both: string): $EMFModel_ID
public "setFileName"(fileName: string): $EMFModel_ID
public "setMapIdAndAddFallbackModel"(mapId: string, fileName: string): $EMFModel_ID
public "setMapIdAndAddFallbackModel"(both: string): $EMFModel_ID
get "namespace"(): string
set "namespace"(value: string)
get "displayFileName"(): string
get "mapId"(): string
get "nextFallbackModel"(): $EMFModel_ID
get "fileName"(): string
set "both"(value: string)
set "fileName"(value: string)
set "mapIdAndAddFallbackModel"(value: string)
}
}

declare module "traben.entity_model_features.utils.IEMFUnmodifiedLayerRootGetter" {
import { $Map } from "java.util.Map"
import { $LayerDefinition } from "net.minecraft.client.model.geom.builders.LayerDefinition"
import { $ModelLayerLocation } from "net.minecraft.client.model.geom.ModelLayerLocation"

export interface $IEMFUnmodifiedLayerRootGetter {
"emf$getUnmodifiedRoots"(): $Map<$ModelLayerLocation, $LayerDefinition>
}

export namespace $IEMFUnmodifiedLayerRootGetter {
const probejs$$marker: never
}
export abstract class $IEMFUnmodifiedLayerRootGetter$$Static implements $IEMFUnmodifiedLayerRootGetter {
}
}

declare module "traben.entity_model_features.models.parts.EMFModelPart" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List$$Type } from "java.util.List"
import { $ModelPart$Cube$$Type } from "net.minecraft.client.model.geom.ModelPart$Cube"
import { $ModelPartData } from "me.jellysquid.mods.sodium.client.render.immediate.model.ModelPartData"
import { $Map$$Type } from "java.util.Map"
import { $HashMap } from "java.util.HashMap"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $ModelPart, $ModelPart$$Type } from "net.minecraft.client.model.geom.ModelPart"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $EMFModelPart extends $ModelPart {
constructor(cuboids: $List$$Type<$ModelPart$Cube$$Type>, children: $Map$$Type<string, $ModelPart$$Type>)

public static "from"(modelPart0: $ModelPart$$Type): $ModelPartData
public "getAllChildPartsAsAnimationMap"(prefixableParents: string, variantNum: integer, optifinePartNameMap: $Map$$Type<string, string>): $HashMap<string, $EMFModelPart>
public "getVanillaModelPartsOfCurrentState"(): $ModelPart
public "processArmItemOverrides"(matrices: $PoseStack$$Type): void
public "renderBoxes"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type): void
public "renderBoxesNoChildren"(matrices: $PoseStack$$Type, vertices: $VertexConsumer$$Type, alpha: float): void
public "simplePrintChildren"(depth: integer): string
public "toStringShort"(): string
get "isSetByAnimation"(): boolean
set "isSetByAnimation"(value: boolean)
get "textureOverride"(): $ResourceLocation
set "textureOverride"(value: $ResourceLocation$$Type)
get "vanillaModelPartsOfCurrentState"(): $ModelPart
}
}

declare module "traben.entity_model_features.utils.EMFDirectoryHandler" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"

export class $EMFDirectoryHandler {
readonly "isSubFolder": boolean
readonly "namespace": string
readonly "rawFileName": string

public static "basic"(filename: string): $EMFDirectoryHandler
public static "getDirectoryManagerOrNull"(printing: boolean, namespace: string, modelFileName: string, suffixAndFileType: string): $EMFDirectoryHandler
public "getFileNameWithType"(): string
public "getFinalFileLocation"(): string
public "getRelativeDirectoryLocationNoValidation"(fileName: string): string
public "getRelativeFilePossiblyEMFOverridden"(jpmOrVariantFileNameWithSuffixAndFileType: string): $ResourceLocation
public "packIndex"(): integer
public "validForThisBase"(propertiesOrSecond: $EMFDirectoryHandler$$Type): boolean
get "fileNameWithType"(): string
get "finalFileLocation"(): string
}
}

