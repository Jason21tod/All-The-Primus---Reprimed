declare module "punchy.mixin.client.accessor.MinecartItemAccessor" {
import { $AbstractMinecart$Type } from "net.minecraft.world.entity.vehicle.AbstractMinecart$Type"

export interface $MinecartItemAccessor {
"punchy$getType"(): $AbstractMinecart$Type
}

export namespace $MinecartItemAccessor {
const probejs$$marker: never
}
export abstract class $MinecartItemAccessor$$Static implements $MinecartItemAccessor {
}
}

declare module "punchy.mixin.client.accessor.BoatItemAccessor" {
import { $Boat$Type } from "net.minecraft.world.entity.vehicle.Boat$Type"

export interface $BoatItemAccessor {
"punchy$getType"(): $Boat$Type
"punchy$hasChest"(): boolean
}

export namespace $BoatItemAccessor {
const probejs$$marker: never
}
export abstract class $BoatItemAccessor$$Static implements $BoatItemAccessor {
}
}

declare module "punchy.mixin.client.accessor.ItemInHandRendererInvoker" {
import { $HumanoidArm$$Type } from "net.minecraft.world.entity.HumanoidArm"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $MultiBufferSource$$Type } from "net.minecraft.client.renderer.MultiBufferSource"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ItemInHandRendererInvoker {
"punchy$renderMap"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, itemStack3: $ItemStack$$Type): void
"punchy$renderPlayerArm"(poseStack0: $PoseStack$$Type, multiBufferSource1: $MultiBufferSource$$Type, int2: integer, float3: float, float4: float, humanoidArm5: $HumanoidArm$$Type): void
}

export namespace $ItemInHandRendererInvoker {
const probejs$$marker: never
}
export abstract class $ItemInHandRendererInvoker$$Static implements $ItemInHandRendererInvoker {
}
}

declare module "punchy.mixin.client.accessor.ParticleEngineAccessor" {
import { $TextureAtlas } from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $ParticleEngineAccessor {
"punchy$getTextureAtlas"(): $TextureAtlas
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
export abstract class $ParticleEngineAccessor$$Static implements $ParticleEngineAccessor {
}
}

declare module "punchy.mixin.client.accessor.ItemRendererInvoker" {
import { $BakedModel$$Type } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer$$Type } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack$$Type } from "com.mojang.blaze3d.vertex.PoseStack"

export interface $ItemRendererInvoker {
"punchy$renderModelLists"(bakedModel0: $BakedModel$$Type, itemStack1: $ItemStack$$Type, int2: integer, int3: integer, poseStack4: $PoseStack$$Type, vertexConsumer5: $VertexConsumer$$Type): void
}

export namespace $ItemRendererInvoker {
const probejs$$marker: never
}
export abstract class $ItemRendererInvoker$$Static implements $ItemRendererInvoker {
}
}

declare module "punchy.mixin.client.accessor.ModelPartAccessor" {
import { $List } from "java.util.List"
import { $ModelPart$Cube } from "net.minecraft.client.model.geom.ModelPart$Cube"
import { $Map } from "java.util.Map"
import { $ModelPart } from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor {
"punchy$getChildren"(): $Map<string, $ModelPart>
"punchy$getCubes"(): $List<$ModelPart$Cube>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
export abstract class $ModelPartAccessor$$Static implements $ModelPartAccessor {
}
}

declare module "punchy.mixin.client.accessor.LivingEntityRendererAccessor" {
import { $List } from "java.util.List"

export interface $LivingEntityRendererAccessor {
"punchy$getLayers"(): $List<any>
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
export abstract class $LivingEntityRendererAccessor$$Static implements $LivingEntityRendererAccessor {
}
}

