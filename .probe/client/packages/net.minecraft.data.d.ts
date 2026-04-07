declare module "net.minecraft.data.loot.LootTableSubProvider" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BiConsumer } from "java.util.function.BiConsumer"
import { $LootTable$Builder } from "net.minecraft.world.level.storage.loot.LootTable$Builder"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LootTableSubProvider$$Type = ($LootTableSubProvider | ((arg0: $BiConsumer<$ResourceLocation, $LootTable$Builder>) => void));
}

declare module "net.minecraft.data.CachedOutput" {
import { $HashCode } from "com.google.common.hash.HashCode"
import { $Path } from "java.nio.file.Path"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CachedOutput$$Type = ($CachedOutput | ((arg0: $Path, arg1: byte[], arg2: $HashCode) => void));
}

declare module "net.minecraft.data.DataProvider$Factory" {
import { $PackOutput } from "net.minecraft.data.PackOutput"
import { $DataProvider, $DataProvider$$Type } from "net.minecraft.data.DataProvider"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataProvider$Factory$$Type<T extends $DataProvider = $DataProvider> = ($DataProvider$Factory<T> | ((arg0: $PackOutput) => T));
}

declare module "net.minecraft.data.PackOutput$Target" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PackOutput$Target$$Type = ($PackOutput$Target | ("data_pack" | "resource_pack" | "reports"));
}

declare module "net.minecraft.data.DataGenerator$PackGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataGenerator$PackGenerator$$Type = ($DataGenerator$PackGenerator);
}

declare module "net.minecraft.data.PackOutput$PathProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PackOutput$PathProvider$$Type = ($PackOutput$PathProvider);
}

declare module "net.minecraft.data.DataProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataProvider$$Type = ($DataProvider);
}

declare module "net.minecraft.data.PackOutput" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PackOutput$$Type = ($PackOutput);
}

declare module "net.minecraft.data.worldgen.BootstapContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BootstapContext$$Type<T = any> = ($BootstapContext<T>);
}

declare module "net.minecraft.data.DataGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DataGenerator$$Type = ($DataGenerator);
}

declare module "net.minecraft.data.loot.BlockLootSubProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlockLootSubProvider$$Type = ($BlockLootSubProvider);
}

declare module "net.minecraft.data.models.blockstates.PropertyDispatch$TriFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PropertyDispatch$TriFunction$$Type<P1 = any, P2 = any, P3 = any, R = any> = ($PropertyDispatch$TriFunction<P1, P2, P3, R> | ((arg0: P1, arg1: P2, arg2: P3) => R));
}

