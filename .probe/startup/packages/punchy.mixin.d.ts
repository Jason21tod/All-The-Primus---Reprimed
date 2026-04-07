declare module "punchy.mixin.client.accessor.MinecartItemAccessor" {
import { $AbstractMinecart$Type$$Type } from "net.minecraft.world.entity.vehicle.AbstractMinecart$Type"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MinecartItemAccessor$$Type = ($MinecartItemAccessor | (() => $AbstractMinecart$Type$$Type));
}

declare module "punchy.mixin.client.accessor.BoatItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BoatItemAccessor$$Type = ($BoatItemAccessor);
}

declare module "punchy.mixin.client.accessor.ItemInHandRendererInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemInHandRendererInvoker$$Type = ($ItemInHandRendererInvoker);
}

declare module "punchy.mixin.client.accessor.ParticleEngineAccessor" {
import { $TextureAtlas$$Type } from "net.minecraft.client.renderer.texture.TextureAtlas"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParticleEngineAccessor$$Type = ($ParticleEngineAccessor | (() => $TextureAtlas$$Type));
}

declare module "punchy.mixin.client.accessor.ItemRendererInvoker" {
import { $BakedModel } from "net.minecraft.client.resources.model.BakedModel"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"
import { $VertexConsumer } from "com.mojang.blaze3d.vertex.VertexConsumer"
import { $PoseStack } from "com.mojang.blaze3d.vertex.PoseStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ItemRendererInvoker$$Type = ($ItemRendererInvoker | ((arg0: $BakedModel, arg1: $ItemStack, arg2: integer, arg3: integer, arg4: $PoseStack, arg5: $VertexConsumer) => void));
}

declare module "punchy.mixin.client.accessor.ModelPartAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
}

declare module "punchy.mixin.client.accessor.LivingEntityRendererAccessor" {
import { $List$$Type } from "java.util.List"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LivingEntityRendererAccessor$$Type = ($LivingEntityRendererAccessor | (() => $List$$Type<any>));
}

