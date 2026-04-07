declare module "dev.latvian.mods.kubejs.registry.RegistryInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryInfo$$Type<T = any> = ($RegistryInfo<T>);
}

declare module "dev.latvian.mods.kubejs.registry.BuilderType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuilderType$$Type<T = any> = ($BuilderType<T>);
}

declare module "dev.latvian.mods.kubejs.registry.BuilderBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuilderBase$$Type<T = any> = ($BuilderBase<T>);
}

declare module "dev.latvian.mods.kubejs.registry.BuilderFactory" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $BuilderBase$$Type } from "dev.latvian.mods.kubejs.registry.BuilderBase"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BuilderFactory$$Type = ($BuilderFactory | ((arg0: $ResourceLocation) => $BuilderBase$$Type));
}

declare module "dev.latvian.mods.kubejs.registry.CustomBuilderObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomBuilderObject$$Type = ($CustomBuilderObject);
}

declare module "dev.latvian.mods.kubejs.registry.RegistryCallback" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Supplier } from "java.util.function.Supplier"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryCallback$$Type<T = any> = ($RegistryCallback<T> | ((arg0: $ResourceLocation, arg1: $Supplier<T>) => void));
}

declare module "dev.latvian.mods.kubejs.registry.RegistryEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CustomEntityBuilder } from "net.liopyu.entityjs.builders.misc.CustomEntityBuilder"
import { $CustomBuilderObject } from "dev.latvian.mods.kubejs.registry.CustomBuilderObject"
import { $RegistryInfo$$Type } from "dev.latvian.mods.kubejs.registry.RegistryInfo"
import { $IRegistryJS } from "net.liopyu.entityjs.util.implementation.IRegistryJS"
import { $Class$$Type } from "java.lang.Class"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $StartupEventJS } from "dev.latvian.mods.kubejs.event.StartupEventJS"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $RegistryEventJS<T = any> extends $StartupEventJS implements $IRegistryJS {
readonly "created": $List<$BuilderBase<T>>

constructor(r: $RegistryInfo$$Type<T>)

public "create"(id: string): $BuilderBase<T>
public "create"(id: string, type: string): $BuilderBase<T>
public "createCustom"(id: string, object: (() => T)): $CustomBuilderObject
/**
 * Creates a new custom entity based on an existing living entity class.
 * This allows extending or modifying behavior of vanilla or modded entities dynamically.
 * 
 * The builder provided in the callback can be used to directly access the respective entity's modification builder.
 * 
 * Example usage:
 * ```javascript
 * let Villager = Java.loadClass("net.minecraft.world.entity.npc.Villager")
 * event.createCustom('wyrm', Villager, modifyBuilder => {
 *     modifyBuilder.tick(entity => {
 *         console.log(entity.type)
 *     })
 * })
 * ```
 */
public "createCustom"(id: string, entityClass: $Class$$Type, consumer: $Consumer$$Type): $CustomEntityBuilder
/** @deprecated */
public "custom"(id: string, object: any): $CustomBuilderObject
}
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $RegistryEventJS$$Type<T = any> = ($RegistryEventJS<T>);
}

