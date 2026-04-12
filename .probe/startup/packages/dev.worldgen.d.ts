declare module "dev.worldgen.lithostitched.mixin.common.StructureTemplatePoolAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureTemplatePoolAccessor$$Type = ($StructureTemplatePoolAccessor);
}

declare module "dev.worldgen.lithostitched.mixin.common.StructureProcessorListAccessor" {
import { $List } from "java.util.List"
import { $StructureProcessor } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureProcessorListAccessor$$Type = ($StructureProcessorListAccessor | ((arg0: $List<$StructureProcessor>) => void));
}

declare module "dev.worldgen.lithostitched.mixin.common.NoiseGeneratorSettingsAccessor" {
import { $NoiseRouter } from "net.minecraft.world.level.levelgen.NoiseRouter"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $NoiseGeneratorSettingsAccessor$$Type = ($NoiseGeneratorSettingsAccessor | ((arg0: $NoiseRouter) => void));
}

declare module "dev.worldgen.lithostitched.mixin.common.PlacedFeatureAccessor" {
import { $ConfiguredFeature } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Holder } from "net.minecraft.core.Holder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PlacedFeatureAccessor$$Type = ($PlacedFeatureAccessor | ((arg0: $Holder<$ConfiguredFeature<any, any>>) => void));
}

declare module "dev.worldgen.lithostitched.mixin.common.RandomStateAccessor" {
import { $PositionalRandomFactory$$Type } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RandomStateAccessor$$Type = ($RandomStateAccessor | (() => $PositionalRandomFactory$$Type));
}

declare module "dev.worldgen.lithostitched.access.StructurePoolAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructurePoolAccess$$Type = ($StructurePoolAccess);
}

declare module "dev.worldgen.lithostitched.mixin.common.MappedRegistryAccessor" {
import { $Map$$Type } from "java.util.Map"
import { $Holder$Reference$$Type } from "net.minecraft.core.Holder$Reference"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MappedRegistryAccessor$$Type<T = any> = ($MappedRegistryAccessor<T> | (() => $Map$$Type<T, $Holder$Reference$$Type<T>>));
}

declare module "dev.worldgen.lithostitched.mixin.common.StructureSetAccessor" {
import { $List } from "java.util.List"
import { $StructureSet$StructureSelectionEntry } from "net.minecraft.world.level.levelgen.structure.StructureSet$StructureSelectionEntry"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $StructureSetAccessor$$Type = ($StructureSetAccessor | ((arg0: $List<$StructureSet$StructureSelectionEntry>) => void));
}

declare module "dev.worldgen.lithostitched.mixin.common.HolderReferenceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HolderReferenceAccessor$$Type<T = any> = ($HolderReferenceAccessor<T> | ((arg0: T) => void));
}

declare module "dev.worldgen.lithostitched.worldgen.structure.LithostitchedTemplates" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LithostitchedTemplates$$Type = ($LithostitchedTemplates);
}

declare module "dev.worldgen.lithostitched.mixin.common.SinglePoolElementAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SinglePoolElementAccessor$$Type = ($SinglePoolElementAccessor);
}

