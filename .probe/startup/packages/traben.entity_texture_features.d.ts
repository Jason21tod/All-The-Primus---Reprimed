declare module "traben.entity_texture_features.features.state.ETFEntityRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFEntityRenderState$$Type = ($ETFEntityRenderState);
}

declare module "traben.entity_texture_features.utils.ETFEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFEntity$$Type = ($ETFEntity);
}

declare module "traben.entity_texture_features.config.screens.skin.ETFConfigScreenSkinTool$NoseType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFConfigScreenSkinTool$NoseType$$Type = ($ETFConfigScreenSkinTool$NoseType | ("villager" | "villager_textured" | "villager_remove" | "villager_textured_remove" | "textured_1" | "textured_2" | "textured_3" | "textured_4" | "textured_5" | "none"));
}

declare module "traben.entity_texture_features.features.texture_handlers.ETFTexture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFTexture$$Type = ($ETFTexture);
}

declare module "traben.entity_texture_features.features.player.ETFPlayerSkinHolder" {
import { $ETFPlayerTexture$$Type } from "traben.entity_texture_features.features.player.ETFPlayerTexture"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFPlayerSkinHolder$$Type = ($ETFPlayerSkinHolder | (() => $ETFPlayerTexture$$Type));
}

declare module "traben.entity_texture_features.mixin.mixins.accessor.TooltipAccessor" {
import { $List } from "java.util.List"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TooltipAccessor$$Type = ($TooltipAccessor | ((arg0: $List<$FormattedCharSequence>) => void));
}

declare module "traben.entity_texture_features.utils.ETFVertexConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFVertexConsumer$$Type = ($ETFVertexConsumer);
}

declare module "traben.entity_texture_features.features.texture_handlers.ETFSprite" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFSprite$$Type = ($ETFSprite);
}

declare module "traben.entity_texture_features.config.ETFConfig$EmissiveRenderModes" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFConfig$EmissiveRenderModes$$Type = ($ETFConfig$EmissiveRenderModes | ("dull" | "bright"));
}

declare module "traben.entity_texture_features.features.state.ETFEntityRenderState$ETFRenderStateInit" {
import { $ETFEntity } from "traben.entity_texture_features.utils.ETFEntity"
import { $ETFEntityRenderState$$Type } from "traben.entity_texture_features.features.state.ETFEntityRenderState"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFEntityRenderState$ETFRenderStateInit$$Type = ($ETFEntityRenderState$ETFRenderStateInit | ((arg0: $ETFEntity) => $ETFEntityRenderState$$Type));
}

declare module "traben.entity_texture_features.features.texture_handlers.ETFTexture$TextureReturnState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFTexture$TextureReturnState$$Type = ($ETFTexture$TextureReturnState | ("normal" | "normal_patched" | "blink" | "blink_patched" | "blink2" | "blink2_patched" | "apply_patch" | "apply_blink" | "apply_blink2"));
}

declare module "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction" {
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction$$Type = ($ETFApi$ETFVariantSuffixProvider$EntityRandomSeedFunction | ((arg0: $ETFEntityRenderState) => integer));
}

declare module "traben.entity_texture_features.features.player.ETFPlayerEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFPlayerEntity$$Type = ($ETFPlayerEntity);
}

declare module "traben.entity_texture_features.utils.EntityIntLRU" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EntityIntLRU$$Type = ($EntityIntLRU);
}

declare module "traben.entity_texture_features.ETFApi$ETFVariantSuffixProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFApi$ETFVariantSuffixProvider$$Type = ($ETFApi$ETFVariantSuffixProvider);
}

declare module "traben.entity_texture_features.features.player.ETFPlayerTexture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFPlayerTexture$$Type = ($ETFPlayerTexture);
}

declare module "traben.entity_texture_features.utils.ETFRenderLayerWithTexture" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Optional$$Type } from "java.util.Optional"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ETFRenderLayerWithTexture$$Type = ($ETFRenderLayerWithTexture | (() => $Optional$$Type<$ResourceLocation$$Type>));
}

