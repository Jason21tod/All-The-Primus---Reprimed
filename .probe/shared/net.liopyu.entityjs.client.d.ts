declare module "net.liopyu.entityjs.client.living.model.ItemArmorJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $ContextUtils$RenderBoneContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$RenderBoneContext"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ContextUtils$VanillaArmorRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$VanillaArmorRenderContext"
import { $Map, $Map$$Type } from "java.util.Map"
import { $EquipmentSlot, $EquipmentSlot$$Type } from "net.minecraft.world.entity.EquipmentSlot"
import { $Function, $Function$$Type } from "java.util.function.Function"

export class $ItemArmorJSBuilder<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
readonly "entity": T

constructor(entity: T)

/**
 * A Consumer controlling custom rendering logic for a vanilla armor piece on a model bone.
 * 
 * Example usage:
 * ```javascript
 * armorBuilder.renderArmor(context => {
 *     let {
 *         poseStack,
 *         bone,
 *         slot,
 *         armorStack,
 *         modelPart,
 *         entity,
 *         bufferSource,
 *         partialTick,
 *         packedLight,
 *         packedOverlay
 *     } = context
 * 
 *     if (bone.name === "left_leg") {
 *         poseStack.translate(0.1, 0.0, 0.0)
 *         poseStack.scale(1.2, 1.2, 1.2)
 *     }
 * })
 * ```
 */
public "renderArmor"(consumer: $Consumer$$Type<$ContextUtils$VanillaArmorRenderContext$$Type<T>>): $ItemArmorJSBuilder<T>
/**
 * A Consumer determining custom rendering logic for an armor model bone.
 * 
 * This runs during the armor rendering pass, allowing you to manipulate specific armor bones —
 * for example, applying dynamic offsets or transformations per bone before rendering.
 * 
 * Example usage:
 * ```javascript
 * armorBuilder.renderBone(context => {
 *     let {
 *         poseStack,
 *         bone,
 *         entity,
 *         partialTick,
 *         bufferSource,
 *         packedLight,
 *         packedOverlay
 *     } = context
 * 
 *     if (bone.name == "helmet") {
 *         poseStack.translate(0, 0.05, 0)
 *         poseStack.scale(1.1, 1.1, 1.1)
 *     }
 * })
 * ```
 */
public "renderBone"(renderBone: $Consumer$$Type<$ContextUtils$RenderBoneContext$$Type<T>>): $ItemArmorJSBuilder<T>
public "setChestArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setFeetArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setHeadArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setLeftFootArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setLeftLegArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setLeftShoulderArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setLegArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setMainHandArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setOffhandArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setRightFootArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setRightLegArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "setRightShoulderArmorBone"(boneName: $Function$$Type<T, string>): $ItemArmorJSBuilder<T>
public "withArmorBoneMapping"(mapping: $Map$$Type<string, $EquipmentSlot$$Type>): $ItemArmorJSBuilder<T>
public "withArmorItemLayer"(predicate: $Function$$Type<T, boolean>): $ItemArmorJSBuilder<T>
get "addArmorItemLayer"(): $Function<T, boolean>
set "addArmorItemLayer"(value: $Function$$Type<T, boolean>)
get "armorBoneToSlotMap"(): $Map<string, $EquipmentSlot>
set "armorBoneToSlotMap"(value: $Map$$Type<string, $EquipmentSlot$$Type>)
set "chestArmorBone"(value: $Function$$Type<T, string>)
set "feetArmorBone"(value: $Function$$Type<T, string>)
set "headArmorBone"(value: $Function$$Type<T, string>)
set "leftFootArmorBone"(value: $Function$$Type<T, string>)
set "leftLegArmorBone"(value: $Function$$Type<T, string>)
set "leftShoulderArmorBone"(value: $Function$$Type<T, string>)
set "legArmorBone"(value: $Function$$Type<T, string>)
set "mainHandArmorBone"(value: $Function$$Type<T, string>)
set "offhandArmorBone"(value: $Function$$Type<T, string>)
set "rightFootArmorBone"(value: $Function$$Type<T, string>)
set "rightLegArmorBone"(value: $Function$$Type<T, string>)
set "rightShoulderArmorBone"(value: $Function$$Type<T, string>)
}
}

declare module "net.liopyu.entityjs.client.living.KubeJSEntityRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoEntityRenderer } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $BaseLivingEntityBuilder$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $KubeJSEntityRenderer<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $GeoEntityRenderer<T> {
constructor(renderManager: $EntityRendererProvider$Context$$Type, builder: $BaseLivingEntityBuilder$$Type<T>)

public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "entityName"(): string
public "getMotionAnimThreshold"(t0: T): float
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderType"(animatable: T, texture: $ResourceLocation$$Type, bufferSource: $MultiBufferSource$$Type, partialTick: float): $RenderType
public "getScaleHeight"(): float
public "getScaleWidth"(): float
public "getTextureLocation"(entity: T): $ResourceLocation
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "render"(animatable: T, entityYaw: float, partialTick: float, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, packedLight: integer): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderFinal"(poseStack: $PoseStack$$Type, animatable: T, model: $BakedGeoModel$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer, red: float, green: float, blue: float, alpha: float): void
public "scaleModelForRender"(widthScale: float, heightScale: float, poseStack: $PoseStack$$Type, animatable: T, model: $BakedGeoModel$$Type, isReRender: boolean, partialTick: float, packedLight: integer, packedOverlay: integer): void
get "scaleHeight"(): float
get "scaleWidth"(): float
}
}

declare module "net.liopyu.entityjs.client.living.model.ItemModelJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$ItemBoneRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ItemBoneRenderContext"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"

export class $ItemModelJSBuilder<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
constructor()

/**
 * A Consumer determining custom rendering logic for an item on a model bone.
 * 
 * Example usage:
 * ```javascript
 * itemBuilder.render(context => {
 *     let {
 *         poseStack,
 *         bone,
 *         item,
 *         entity,
 *         bufferSource,
 *         partialTick,
 *         packedLight,
 *         packedOverlay
 *     } = context
 * 
 *     if (bone.name == "right_hand") {
 *         poseStack.translate(0.1, 0.2, -0.05)
 *         poseStack.scale(1.5, 1.5, 1.5)
 *     }
 * })
 * ```
 */
public "renderItem"(render: $Consumer$$Type<$ContextUtils$ItemBoneRenderContext$$Type<T>>): $ItemModelJSBuilder<T>
}
}

declare module "net.liopyu.entityjs.client.living.model.CustomGlowingGeoLayerJS" {
import { $CustomKubeJSEntityRenderer, $CustomKubeJSEntityRenderer$$Type } from "net.liopyu.entityjs.client.living.CustomKubeJSEntityRenderer"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $CustomGeoLayerJSBuilder, $CustomGeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.CustomGeoLayerJSBuilder"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $AutoGlowingGeoLayer } from "software.bernie.geckolib.renderer.layer.AutoGlowingGeoLayer"
import { $CustomEntityJSBuilder, $CustomEntityJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $CustomGlowingGeoLayerJS<T extends ($LivingEntity & $IAnimatableJSCustom) = ($LivingEntity & $IAnimatableJSCustom)> extends $AutoGlowingGeoLayer<T> {
readonly "builder": $CustomEntityJSBuilder
readonly "geoBuilder": $CustomGeoLayerJSBuilder<T>
readonly "renderer": $CustomKubeJSEntityRenderer<T>

constructor(entityRendererIn: $CustomKubeJSEntityRenderer$$Type<T>, geoBuilder: $CustomGeoLayerJSBuilder$$Type<T>, builder: $CustomEntityJSBuilder$$Type)

public "entityName"(): string
public "preRender"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer): void
public "render"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTicks: float, packedLightIn: integer, packedOverlay: integer): void
get "entity"(): T
set "entity"(value: T)
}
}

declare module "net.liopyu.entityjs.client.nonliving.model.NLGlowingGeoLayerJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $NLGeoLayerJSBuilder, $NLGeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.nonliving.model.NLGeoLayerJSBuilder"
import { $BaseEntityBuilder, $BaseEntityBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $KubeJSNLEntityRenderer, $KubeJSNLEntityRenderer$$Type } from "net.liopyu.entityjs.client.nonliving.KubeJSNLEntityRenderer"
import { $AutoGlowingGeoLayer } from "software.bernie.geckolib.renderer.layer.AutoGlowingGeoLayer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $NLGlowingGeoLayerJS<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $AutoGlowingGeoLayer<T> {
readonly "builder": $BaseEntityBuilder<T>
readonly "geoBuilder": $NLGeoLayerJSBuilder<T>
readonly "renderer": $KubeJSNLEntityRenderer<T>

constructor(entityRendererIn: $KubeJSNLEntityRenderer$$Type<T>, geoBuilder: $NLGeoLayerJSBuilder$$Type<T>, builder: $BaseEntityBuilder$$Type<T>)

public "entityName"(): string
public "preRender"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderLayer: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer): void
public "render"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderLayer: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTicks: float, packedLightIn: integer, packedOverlay: integer): void
get "entity"(): T
set "entity"(value: T)
}
}

declare module "net.liopyu.entityjs.client.living.model.CustomGeoLayerJS" {
import { $GeoRenderLayer } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $CustomKubeJSEntityRenderer, $CustomKubeJSEntityRenderer$$Type } from "net.liopyu.entityjs.client.living.CustomKubeJSEntityRenderer"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $CustomGeoLayerJSBuilder, $CustomGeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.CustomGeoLayerJSBuilder"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $CustomEntityJSBuilder, $CustomEntityJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $CustomGeoLayerJS<T extends ($LivingEntity & $IAnimatableJSCustom) = ($LivingEntity & $IAnimatableJSCustom)> extends $GeoRenderLayer<T> {
readonly "builder": $CustomEntityJSBuilder
readonly "geoBuilder": $CustomGeoLayerJSBuilder<T>
readonly "renderer": $CustomKubeJSEntityRenderer<T>

constructor(entityRendererIn: $CustomKubeJSEntityRenderer$$Type<T>, geoBuilder: $CustomGeoLayerJSBuilder$$Type<T>, builder: $CustomEntityJSBuilder$$Type)

public "entityName"(): string
public "preRender"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer): void
public "render"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTicks: float, packedLightIn: integer, packedOverlay: integer): void
get "entity"(): T
set "entity"(value: T)
}
}

declare module "net.liopyu.entityjs.client.living.model.CustomGeoLayerJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CustomGeoLayerJS } from "net.liopyu.entityjs.client.living.model.CustomGeoLayerJS"
import { $CustomKubeJSEntityRenderer$$Type } from "net.liopyu.entityjs.client.living.CustomKubeJSEntityRenderer"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ContextUtils$PreRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PreRenderContext"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $CustomGlowingGeoLayerJS } from "net.liopyu.entityjs.client.living.model.CustomGlowingGeoLayerJS"
import { $Function$$Type } from "java.util.function.Function"
import { $CustomEntityJSBuilder, $CustomEntityJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder"

export class $CustomGeoLayerJSBuilder<T extends ($LivingEntity & $IAnimatableJSCustom) = ($LivingEntity & $IAnimatableJSCustom)> {
constructor(builder: $CustomEntityJSBuilder$$Type)

public "build"(entityRendererIn: $CustomKubeJSEntityRenderer$$Type<T>, builder: $CustomEntityJSBuilder$$Type): $CustomGeoLayerJS<T>
public "buildGlowing"(entityRendererIn: $CustomKubeJSEntityRenderer$$Type<T>, builder: $CustomEntityJSBuilder$$Type): $CustomGlowingGeoLayerJS<T>
public "getBuilder"(): $CustomEntityJSBuilder
/**
 * Defines logic to preRender the newGeoLayer.
 * 
 * Example usage:
 * ```javascript
 * geoBuilder.preRender(context => {
 *     // Define logic to render the newGeoLayer
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "preRender"(preRender: $Consumer$$Type<$ContextUtils$PreRenderContext$$Type<T>>): $CustomGeoLayerJSBuilder<T>
/**
 * Defines logic to render the newGeoLayer.
 * By default this will render the flat texture set in textureResource
 * onto the entity as an overlay. This method overrides the render method completely
 * allowing scripters to define their own render logic.
 * 
 * Example usage:
 * ```javascript
 * geoBuilder.render(context => {
 *     // Define logic to render the newGeoLayer
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$PreRenderContext$$Type<T>>): $CustomGeoLayerJSBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureResource"(function_: $Function$$Type<T, any>): $CustomGeoLayerJSBuilder<T>
get "builder"(): $CustomEntityJSBuilder
set "builder"(value: $CustomEntityJSBuilder$$Type)
}
}

declare module "net.liopyu.entityjs.client.nonliving.model.NLGeoLayerJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $ContextUtils$PreRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PreRenderContext"
import { $NLGeoLayerJS } from "net.liopyu.entityjs.client.nonliving.model.NLGeoLayerJS"
import { $BaseEntityBuilder, $BaseEntityBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $KubeJSNLEntityRenderer$$Type } from "net.liopyu.entityjs.client.nonliving.KubeJSNLEntityRenderer"
import { $NLGlowingGeoLayerJS } from "net.liopyu.entityjs.client.nonliving.model.NLGlowingGeoLayerJS"
import { $Function$$Type } from "java.util.function.Function"

export class $NLGeoLayerJSBuilder<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> {
constructor(builder: $BaseEntityBuilder$$Type<T>)

public "build"(entityRendererIn: $KubeJSNLEntityRenderer$$Type<T>, builder: $BaseEntityBuilder$$Type<T>): $NLGeoLayerJS<T>
public "buildGlowing"(entityRendererIn: $KubeJSNLEntityRenderer$$Type<T>, builder: $BaseEntityBuilder$$Type<T>): $NLGlowingGeoLayerJS<T>
public "getBuilder"(): $BaseEntityBuilder<T>
/**
 * Defines logic to preRender the newGeoLayer.
 * 
 * Example usage:
 * ```javascript
 * geoBuilder.preRender(context => {
 *     // Define logic to render the newGeoLayer
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "preRender"(preRender: $Consumer$$Type<$ContextUtils$PreRenderContext$$Type<T>>): $NLGeoLayerJSBuilder<T>
/**
 * Defines logic to render the newGeoLayer.
 * By default this will render the flat texture set in textureResource
 * onto the entity as an overlay. This method overrides the render method completely
 * allowing scripters to define their own render logic.
 * 
 * Example usage:
 * ```javascript
 * geoBuilder.render(context => {
 *     // Define logic to render the newGeoLayer
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$PreRenderContext$$Type<T>>): $NLGeoLayerJSBuilder<T>
/**
 * Sets the render type for the entity's layer via a function.
 * 
 * Example usage:
 * ```javascript
 * builder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
 * ```
 */
public "renderType"(type: $Function$$Type<T, $RenderType>): $NLGeoLayerJSBuilder<T>
/**
 * Sets the render type for the entity's layer.
 * 
 * Example usage:
 * ```javascript
 * builder.setRenderType(RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
 * ```
 */
public "setRenderType"(type: $RenderType$$Type): $NLGeoLayerJSBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureResource"(function_: $Function$$Type<T, any>): $NLGeoLayerJSBuilder<T>
get "builder"(): $BaseEntityBuilder<T>
set "builder"(value: $BaseEntityBuilder$$Type<T>)
}
}

declare module "net.liopyu.entityjs.client.living.CustomKubeJSEntityRenderer" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoEntityRenderer } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $CustomEntityJSBuilder$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $CustomKubeJSEntityRenderer<T extends ($LivingEntity & $IAnimatableJSCustom) = ($LivingEntity & $IAnimatableJSCustom)> extends $GeoEntityRenderer<T> {
constructor(renderManager: $EntityRendererProvider$Context$$Type, builder: $CustomEntityJSBuilder$$Type)

public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "entityName"(): string
public "getMotionAnimThreshold"(t0: T): float
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderType"(animatable: T, texture: $ResourceLocation$$Type, bufferSource: $MultiBufferSource$$Type, partialTick: float): $RenderType
public "getScaleHeight"(): float
public "getScaleWidth"(): float
public "getTextureLocation"(entity: T): $ResourceLocation
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "render"(a: T, entityYaw: float, partialTick: float, poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$$Type, packedLight: integer): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "scaleModelForRender"(widthScale: float, heightScale: float, poseStack: $PoseStack$$Type, a: T, model: $BakedGeoModel$$Type, isReRender: boolean, partialTick: float, packedLight: integer, packedOverlay: integer): void
get "scaleHeight"(): float
get "scaleWidth"(): float
}
}

declare module "net.liopyu.entityjs.client.nonliving.KubeJSNLEntityRenderer" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GeoBone$$Type } from "software.bernie.geckolib.cache.object.GeoBone"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoEntityRenderer } from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"
import { $Color } from "software.bernie.geckolib.core.object.Color"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $GeoCube$$Type } from "software.bernie.geckolib.cache.object.GeoCube"
import { $EntityRendererProvider$Context$$Type } from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import { $Vector3f$$Type } from "org.joml.Vector3f"
import { $BaseEntityBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoQuad$$Type } from "software.bernie.geckolib.cache.object.GeoQuad"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $KubeJSNLEntityRenderer<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $GeoEntityRenderer<T> {
constructor(renderManager: $EntityRendererProvider$Context$$Type, builder: $BaseEntityBuilder$$Type<T>)

public "applyRenderLayersForBone"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "createVerticesOfQuad"(geoQuad0: $GeoQuad$$Type, matrix4f1: $Matrix4f$$Type, vector3f2: $Vector3f$$Type, vertexConsumer3: $VertexConsumer$$Type, int4: integer, int5: integer, float6: float, float7: float, float8: float, float9: float): void
public "defaultRender"(poseStack0: $PoseStack$$Type, t1: T, multiBufferSource2: $MultiBufferSource$$Type, renderType3: $RenderType$$Type, vertexConsumer4: $VertexConsumer$$Type, float5: float, float6: float, int7: integer): void
public "entityName"(): string
public "getMotionAnimThreshold"(t0: T): float
public "getRenderColor"(t0: T, float1: float, int2: integer): $Color
public "getRenderType"(animatable: T, texture: $ResourceLocation$$Type, bufferSource: $MultiBufferSource$$Type, partialTick: float): $RenderType
public "getScaleHeight"(): float
public "getScaleWidth"(): float
public "postRender"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, multiBufferSource3: $MultiBufferSource$$Type, vertexConsumer4: $VertexConsumer$$Type, boolean5: boolean, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "preApplyRenderLayers"(poseStack0: $PoseStack$$Type, t1: T, bakedGeoModel2: $BakedGeoModel$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer): void
public "reRender"(bakedGeoModel0: $BakedGeoModel$$Type, poseStack1: $PoseStack$$Type, multiBufferSource2: $MultiBufferSource$$Type, t3: T, renderType4: $RenderType$$Type, vertexConsumer5: $VertexConsumer$$Type, float6: float, int7: integer, int8: integer, float9: float, float10: float, float11: float, float12: float): void
public "renderChildBones"(poseStack0: $PoseStack$$Type, t1: T, geoBone2: $GeoBone$$Type, renderType3: $RenderType$$Type, multiBufferSource4: $MultiBufferSource$$Type, vertexConsumer5: $VertexConsumer$$Type, boolean6: boolean, float7: float, int8: integer, int9: integer, float10: float, float11: float, float12: float, float13: float): void
public "renderCube"(poseStack0: $PoseStack$$Type, geoCube1: $GeoCube$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "renderCubesOfBone"(poseStack0: $PoseStack$$Type, geoBone1: $GeoBone$$Type, vertexConsumer2: $VertexConsumer$$Type, int3: integer, int4: integer, float5: float, float6: float, float7: float, float8: float): void
public "scaleModelForRender"(widthScale: float, heightScale: float, poseStack: $PoseStack$$Type, animatable: T, model: $BakedGeoModel$$Type, isReRender: boolean, partialTick: float, packedLight: integer, packedOverlay: integer): void
get "scaleHeight"(): float
get "scaleWidth"(): float
}
}

declare module "net.liopyu.entityjs.client.nonliving.model.NLGeoLayerJS" {
import { $GeoRenderLayer } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $NLGeoLayerJSBuilder, $NLGeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.nonliving.model.NLGeoLayerJSBuilder"
import { $BaseEntityBuilder, $BaseEntityBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $KubeJSNLEntityRenderer, $KubeJSNLEntityRenderer$$Type } from "net.liopyu.entityjs.client.nonliving.KubeJSNLEntityRenderer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $NLGeoLayerJS<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $GeoRenderLayer<T> {
readonly "builder": $BaseEntityBuilder<T>
readonly "geoBuilder": $NLGeoLayerJSBuilder<T>
readonly "renderer": $KubeJSNLEntityRenderer<T>

constructor(entityRendererIn: $KubeJSNLEntityRenderer$$Type<T>, geoBuilder: $NLGeoLayerJSBuilder$$Type<T>, builder: $BaseEntityBuilder$$Type<T>)

public "entityName"(): string
public "preRender"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer): void
public "render"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderLayer: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTicks: float, packedLightIn: integer, packedOverlay: integer): void
get "entity"(): T
set "entity"(value: T)
}
}

declare module "net.liopyu.entityjs.client.living.model.GlowingGeoLayerJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder, $BaseLivingEntityBuilder$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoLayerJSBuilder, $GeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.GeoLayerJSBuilder"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $KubeJSEntityRenderer, $KubeJSEntityRenderer$$Type } from "net.liopyu.entityjs.client.living.KubeJSEntityRenderer"
import { $AutoGlowingGeoLayer } from "software.bernie.geckolib.renderer.layer.AutoGlowingGeoLayer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GlowingGeoLayerJS<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $AutoGlowingGeoLayer<T> {
readonly "builder": $BaseLivingEntityBuilder<T>
readonly "geoBuilder": $GeoLayerJSBuilder<T>
readonly "renderer": $KubeJSEntityRenderer<T>

constructor(entityRendererIn: $KubeJSEntityRenderer$$Type<T>, geoBuilder: $GeoLayerJSBuilder$$Type<T>, builder: $BaseLivingEntityBuilder$$Type<T>)

public "entityName"(): string
public "preRender"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer): void
public "render"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTicks: float, packedLightIn: integer, packedOverlay: integer): void
get "entity"(): T
set "entity"(value: T)
}
}

declare module "net.liopyu.entityjs.client.living.model.GeoLayerJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder, $BaseLivingEntityBuilder$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import { $ContextUtils$PreRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PreRenderContext"
import { $GlowingGeoLayerJS } from "net.liopyu.entityjs.client.living.model.GlowingGeoLayerJS"
import { $RenderType, $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $GeoLayerJS } from "net.liopyu.entityjs.client.living.model.GeoLayerJS"
import { $KubeJSEntityRenderer$$Type } from "net.liopyu.entityjs.client.living.KubeJSEntityRenderer"
import { $Function$$Type } from "java.util.function.Function"

export class $GeoLayerJSBuilder<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
constructor(builder: $BaseLivingEntityBuilder$$Type<T>)

public "build"(entityRendererIn: $KubeJSEntityRenderer$$Type<T>, builder: $BaseLivingEntityBuilder$$Type<T>): $GeoLayerJS<T>
public "buildGlowing"(entityRendererIn: $KubeJSEntityRenderer$$Type<T>, builder: $BaseLivingEntityBuilder$$Type<T>): $GlowingGeoLayerJS<T>
public "getBuilder"(): $BaseLivingEntityBuilder<T>
/**
 * Defines logic to preRender the newGeoLayer.
 * 
 * Example usage:
 * ```javascript
 * geoBuilder.preRender(context => {
 *     // Define logic to render the newGeoLayer
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "preRender"(preRender: $Consumer$$Type<$ContextUtils$PreRenderContext$$Type<T>>): $GeoLayerJSBuilder<T>
/**
 * Defines logic to render the newGeoLayer.
 * By default this will render the flat texture set in textureResource
 * onto the entity as an overlay. This method overrides the render method completely
 * allowing scripters to define their own render logic.
 * 
 * Example usage:
 * ```javascript
 * geoBuilder.render(context => {
 *     // Define logic to render the newGeoLayer
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$PreRenderContext$$Type<T>>): $GeoLayerJSBuilder<T>
/**
 * Sets the render type for the entity's layer via a function.
 * 
 * Example usage:
 * ```javascript
 * builder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
 * ```
 */
public "renderType"(type: $Function$$Type<T, $RenderType>): $GeoLayerJSBuilder<T>
/**
 * Sets the render type for the entity's layer.
 * 
 * Example usage:
 * ```javascript
 * builder.setRenderType(RenderType.entityCutoutNoCull("kubejs:path/to/texture", true));
 * ```
 */
public "setRenderType"(type: $RenderType$$Type): $GeoLayerJSBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureResource"(function_: $Function$$Type<T, any>): $GeoLayerJSBuilder<T>
get "builder"(): $BaseLivingEntityBuilder<T>
set "builder"(value: $BaseLivingEntityBuilder$$Type<T>)
}
}

declare module "net.liopyu.entityjs.client.living.model.GeoLayerJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $GeoRenderLayer } from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder, $BaseLivingEntityBuilder$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import { $BakedGeoModel$$Type } from "software.bernie.geckolib.cache.object.BakedGeoModel"
import { $GeoLayerJSBuilder, $GeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.GeoLayerJSBuilder"
import { $RenderType$$Type } from "net.minecraft.client.renderer.RenderType"
import { $KubeJSEntityRenderer, $KubeJSEntityRenderer$$Type } from "net.liopyu.entityjs.client.living.KubeJSEntityRenderer"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export class $GeoLayerJS<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $GeoRenderLayer<T> {
readonly "builder": $BaseLivingEntityBuilder<T>
readonly "geoBuilder": $GeoLayerJSBuilder<T>
readonly "renderer": $KubeJSEntityRenderer<T>

constructor(entityRendererIn: $KubeJSEntityRenderer$$Type<T>, geoBuilder: $GeoLayerJSBuilder$$Type<T>, builder: $BaseLivingEntityBuilder$$Type<T>)

public "entityName"(): string
public "preRender"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTick: float, packedLight: integer, packedOverlay: integer): void
public "render"(poseStack: $PoseStack$$Type, animatable: T, bakedModel: $BakedGeoModel$$Type, renderType: $RenderType$$Type, bufferSource: $MultiBufferSource$$Type, buffer: $VertexConsumer$$Type, partialTicks: float, packedLightIn: integer, packedOverlay: integer): void
get "entity"(): T
set "entity"(value: T)
}
}

