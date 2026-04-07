declare module "net.puffish.skillsmod.api.json.JsonElement" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JsonElement$$Type = ($JsonElement);
}

declare module "net.puffish.skillsmod.api.json.JsonObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JsonObject$$Type = ($JsonObject);
}

declare module "net.puffish.skillsmod.api.config.ConfigContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ConfigContext$$Type = ($ConfigContext);
}

declare module "net.puffish.skillsmod.mixin.BooleanRuleInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BooleanRuleInvoker$$Type = ($BooleanRuleInvoker);
}

declare module "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AntiFarmingPerChunk$$Type = ($AntiFarmingPerChunk);
}

declare module "net.puffish.skillsmod.api.util.Problem" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Problem$$Type = ($Problem | (() => string));
}

declare module "net.puffish.skillsmod.access.BuiltBufferAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuiltBufferAccess$$Type = ($BuiltBufferAccess);
}

declare module "net.puffish.attributesmod.mixin.RegistryEntryReferenceInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryEntryReferenceInvoker$$Type<T = any> = ($RegistryEntryReferenceInvoker<T> | ((arg0: T) => void));
}

declare module "net.puffish.attributesmod.mixin.SimpleRegistryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SimpleRegistryAccessor$$Type<T = any> = ($SimpleRegistryAccessor<T>);
}

declare module "net.puffish.skillsmod.access.DamageSourceAccess" {
import { $Optional$$Type } from "java.util.Optional"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DamageSourceAccess$$Type = ($DamageSourceAccess | (() => $Optional$$Type<$ItemStack$$Type>));
}

declare module "net.puffish.skillsmod.api.json.JsonArray" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JsonArray$$Type = ($JsonArray);
}

declare module "net.puffish.skillsmod.api.json.JsonPath" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JsonPath$$Type = ($JsonPath);
}

declare module "net.puffish.skillsmod.access.RenderLayerAccess" {
import { $List } from "java.util.List"
import { $Matrix4f } from "org.joml.Matrix4f"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RenderLayerAccess$$Type = ($RenderLayerAccess | ((arg0: $List<$Matrix4f>) => void));
}

declare module "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk$State" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AntiFarmingPerChunk$State$$Type = ($AntiFarmingPerChunk$State);
}

declare module "net.puffish.skillsmod.access.MinecraftClientAccess" {
import { $RenderBuffers$$Type } from "net.minecraft.client.renderer.RenderBuffers"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MinecraftClientAccess$$Type = ($MinecraftClientAccess | (() => $RenderBuffers$$Type));
}

declare module "net.puffish.skillsmod.mixin.GameRulesInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GameRulesInvoker$$Type = ($GameRulesInvoker);
}

declare module "net.puffish.skillsmod.api.util.Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Result$$Type<S = any, F = any> = ($Result<S, F>);
}

declare module "net.puffish.skillsmod.access.WorldChunkAccess" {
import { $AntiFarmingPerChunk$State$$Type } from "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk$State"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WorldChunkAccess$$Type = ($WorldChunkAccess | (() => $AntiFarmingPerChunk$State$$Type));
}

declare module "net.puffish.attributesmod.mixin.EntityAttributeInstanceInvoker" {
import { $AttributeModifier$Operation } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Collection$$Type } from "java.util.Collection"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityAttributeInstanceInvoker$$Type = ($EntityAttributeInstanceInvoker | ((arg0: $AttributeModifier$Operation) => $Collection$$Type<$AttributeModifier$$Type>));
}

