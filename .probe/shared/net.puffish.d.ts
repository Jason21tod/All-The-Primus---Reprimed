declare module "net.puffish.skillsmod.api.json.JsonElement" {
import { $JsonElement as $JsonElement$0 } from "com.google.gson.JsonElement"
import { $Result } from "net.puffish.skillsmod.api.util.Result"
import { $JsonArray } from "net.puffish.skillsmod.api.json.JsonArray"
import { $JsonPath, $JsonPath$$Type } from "net.puffish.skillsmod.api.json.JsonPath"
import { $JsonObject } from "net.puffish.skillsmod.api.json.JsonObject"
import { $Reader$$Type } from "java.io.Reader"
import { $Problem } from "net.puffish.skillsmod.api.util.Problem"
import { $Path$$Type } from "java.nio.file.Path"

export interface $JsonElement {
"getAsArray"(): $Result<$JsonArray, $Problem>
"getAsBoolean"(): $Result<boolean, $Problem>
"getAsDouble"(): $Result<double, $Problem>
"getAsFloat"(): $Result<float, $Problem>
"getAsInt"(): $Result<integer, $Problem>
"getAsObject"(): $Result<$JsonObject, $Problem>
"getAsString"(): $Result<string, $Problem>
"getJson"(): $JsonElement$0
"getPath"(): $JsonPath
get "asArray"(): $Result<$JsonArray, $Problem>
get "asBoolean"(): $Result<boolean, $Problem>
get "asDouble"(): $Result<double, $Problem>
get "asFloat"(): $Result<float, $Problem>
get "asInt"(): $Result<integer, $Problem>
get "asObject"(): $Result<$JsonObject, $Problem>
get "asString"(): $Result<string, $Problem>
get "json"(): $JsonElement$0
get "path"(): $JsonPath
}

export namespace $JsonElement {
function parseFile(filePath: $Path$$Type, jsonPath: $JsonPath$$Type): $Result<$JsonElement, $Problem>
function parseReader(reader: $Reader$$Type, jsonPath: $JsonPath$$Type): $Result<$JsonElement, $Problem>
function parseString(jsonData: string, jsonPath: $JsonPath$$Type): $Result<$JsonElement, $Problem>
}
export abstract class $JsonElement$$Static implements $JsonElement {
static "parseFile"(filePath: $Path$$Type, jsonPath: $JsonPath$$Type): $Result<$JsonElement, $Problem>
static "parseReader"(reader: $Reader$$Type, jsonPath: $JsonPath$$Type): $Result<$JsonElement, $Problem>
static "parseString"(jsonData: string, jsonPath: $JsonPath$$Type): $Result<$JsonElement, $Problem>
}
}

declare module "net.puffish.skillsmod.api.json.JsonObject" {
import { $JsonObject as $JsonObject$0 } from "com.google.gson.JsonObject"
import { $Map$Entry } from "java.util.Map$Entry"
import { $Stream } from "java.util.stream.Stream"
import { $Result } from "net.puffish.skillsmod.api.util.Result"
import { $JsonArray } from "net.puffish.skillsmod.api.json.JsonArray"
import { $Map } from "java.util.Map"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $JsonElement, $JsonElement$$Type } from "net.puffish.skillsmod.api.json.JsonElement"
import { $JsonPath } from "net.puffish.skillsmod.api.json.JsonPath"
import { $Problem } from "net.puffish.skillsmod.api.util.Problem"
import { $Function$$Type } from "java.util.function.Function"

export interface $JsonObject {
"get"(string0: string): $Result<$JsonElement, $Problem>
"getArray"(string0: string): $Result<$JsonArray, $Problem>
"getAsElement"(): $JsonElement
"getAsMap"<S, F>(biFunction0: $BiFunction$$Type<string, $JsonElement$$Type, $Result<S, F>>): $Result<$Map<string, S>, $Map<string, F>>
"getBoolean"(string0: string): $Result<boolean, $Problem>
"getDouble"(string0: string): $Result<double, $Problem>
"getFloat"(string0: string): $Result<float, $Problem>
"getInt"(string0: string): $Result<integer, $Problem>
"getJson"(): $JsonObject$0
"getObject"(string0: string): $Result<$JsonObject, $Problem>
"getPath"(): $JsonPath
"getString"(string0: string): $Result<string, $Problem>
"noUnused"<S>(function0: $Function$$Type<$JsonObject$$Type, $Result<S, $Problem>>): $Result<S, $Problem>
"stream"(): $Stream<$Map$Entry<string, $JsonElement>>
get "asElement"(): $JsonElement
get "json"(): $JsonObject$0
get "path"(): $JsonPath
}

export namespace $JsonObject {
const probejs$$marker: never
}
export abstract class $JsonObject$$Static implements $JsonObject {
}
}

declare module "net.puffish.skillsmod.api.config.ConfigContext" {
import { $MinecraftServer } from "net.minecraft.server.MinecraftServer"

export interface $ConfigContext {
"emitWarning"(string0: string): void
"getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}

export namespace $ConfigContext {
const probejs$$marker: never
}
export abstract class $ConfigContext$$Static implements $ConfigContext {
}
}

declare module "net.puffish.skillsmod.mixin.BooleanRuleInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanRuleInvoker {
}

export namespace $BooleanRuleInvoker {
const probejs$$marker: never
}
export abstract class $BooleanRuleInvoker$$Static implements $BooleanRuleInvoker {
}
}

declare module "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk" {
import { $Result } from "net.puffish.skillsmod.api.util.Result"
import { $JsonElement$$Type } from "net.puffish.skillsmod.api.json.JsonElement"
import { $ConfigContext$$Type } from "net.puffish.skillsmod.api.config.ConfigContext"
import { $Optional } from "java.util.Optional"
import { $Record } from "java.lang.Record"
import { $Problem } from "net.puffish.skillsmod.api.util.Problem"

export class $AntiFarmingPerChunk extends $Record {
constructor(limitPerChunk: integer, resetAfterSeconds: integer)

public "limitPerChunk"(): integer
public static "parse"(rootElement: $JsonElement$$Type, context: $ConfigContext$$Type): $Result<$Optional<$AntiFarmingPerChunk>, $Problem>
public "resetAfterSeconds"(): integer
}
}

declare module "net.puffish.skillsmod.api.util.Problem" {
import { $Collection$$Type } from "java.util.Collection"

export interface $Problem {
"toString"(): string
}

export namespace $Problem {
function combine(...problems: $Problem$$Type[]): $Problem
function combine(problems: $Collection$$Type<$Problem$$Type>): $Problem
function message(message: string): $Problem
}
export abstract class $Problem$$Static implements $Problem {
static "combine"(...problems: $Problem$$Type[]): $Problem
static "combine"(problems: $Collection$$Type<$Problem$$Type>): $Problem
static "message"(message: string): $Problem
}
}

declare module "net.puffish.skillsmod.access.BuiltBufferAccess" {
import { $List, $List$$Type } from "java.util.List"
import { $Matrix4f, $Matrix4f$$Type } from "org.joml.Matrix4f"

export interface $BuiltBufferAccess {
"getEmits"(): $List<$Matrix4f>
"setEmits"(list0: $List$$Type<$Matrix4f$$Type>): void
get "emits"(): $List<$Matrix4f>
set "emits"(value: $List$$Type<$Matrix4f$$Type>)
}

export namespace $BuiltBufferAccess {
const probejs$$marker: never
}
export abstract class $BuiltBufferAccess$$Static implements $BuiltBufferAccess {
}
}

declare module "net.puffish.attributesmod.mixin.RegistryEntryReferenceInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistryEntryReferenceInvoker<T = any> {
"invokeSetValue"(t0: T): void
}

export namespace $RegistryEntryReferenceInvoker {
const probejs$$marker: never
}
export abstract class $RegistryEntryReferenceInvoker$$Static<T = any> implements $RegistryEntryReferenceInvoker<T> {
}
}

declare module "net.puffish.attributesmod.mixin.SimpleRegistryAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Map } from "java.util.Map"
import { $ResourceKey } from "net.minecraft.resources.ResourceKey"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $SimpleRegistryAccessor<T = any> {
"getIdToEntry"(): $Map<$ResourceLocation, $Holder$Reference<T>>
"getKeyToEntry"(): $Map<$ResourceKey<T>, $Holder$Reference<T>>
get "idToEntry"(): $Map<$ResourceLocation, $Holder$Reference<T>>
get "keyToEntry"(): $Map<$ResourceKey<T>, $Holder$Reference<T>>
}

export namespace $SimpleRegistryAccessor {
const probejs$$marker: never
}
export abstract class $SimpleRegistryAccessor$$Static<T = any> implements $SimpleRegistryAccessor<T> {
}
}

declare module "net.puffish.skillsmod.access.DamageSourceAccess" {
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export interface $DamageSourceAccess {
"getWeapon"(): $Optional<$ItemStack>
get "weapon"(): $Optional<$ItemStack>
}

export namespace $DamageSourceAccess {
const probejs$$marker: never
}
export abstract class $DamageSourceAccess$$Static implements $DamageSourceAccess {
}
}

declare module "net.puffish.skillsmod.api.json.JsonArray" {
import { $List } from "java.util.List"
import { $JsonArray as $JsonArray$0 } from "com.google.gson.JsonArray"
import { $Stream } from "java.util.stream.Stream"
import { $Result } from "net.puffish.skillsmod.api.util.Result"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $JsonElement, $JsonElement$$Type } from "net.puffish.skillsmod.api.json.JsonElement"
import { $JsonPath } from "net.puffish.skillsmod.api.json.JsonPath"

export interface $JsonArray {
"getAsElement"(): $JsonElement
"getAsList"<S, F>(biFunction0: $BiFunction$$Type<integer, $JsonElement$$Type, $Result<S, F>>): $Result<$List<S>, $List<F>>
"getJson"(): $JsonArray$0
"getPath"(): $JsonPath
"getSize"(): integer
"stream"(): $Stream<$JsonElement>
get "asElement"(): $JsonElement
get "json"(): $JsonArray$0
get "path"(): $JsonPath
get "size"(): integer
}

export namespace $JsonArray {
const probejs$$marker: never
}
export abstract class $JsonArray$$Static implements $JsonArray {
}
}

declare module "net.puffish.skillsmod.api.json.JsonPath" {
import { $Optional } from "java.util.Optional"
import { $Problem } from "net.puffish.skillsmod.api.util.Problem"

export interface $JsonPath {
"createProblem"(string0: string): $Problem
"getArray"(long0: long): $JsonPath
"getObject"(string0: string): $JsonPath
"getParent"(): $Optional<$JsonPath>
"toString"(): string
get "parent"(): $Optional<$JsonPath>
}

export namespace $JsonPath {
function create(name: string): $JsonPath
}
export abstract class $JsonPath$$Static implements $JsonPath {
static "create"(name: string): $JsonPath
}
}

declare module "net.puffish.skillsmod.access.RenderLayerAccess" {
import { $List$$Type } from "java.util.List"
import { $Matrix4f$$Type } from "org.joml.Matrix4f"

export interface $RenderLayerAccess {
"setEmits"(list0: $List$$Type<$Matrix4f$$Type>): void
set "emits"(value: $List$$Type<$Matrix4f$$Type>)
}

export namespace $RenderLayerAccess {
const probejs$$marker: never
}
export abstract class $RenderLayerAccess$$Static implements $RenderLayerAccess {
}
}

declare module "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk$State" {
import { $AntiFarmingPerChunk$$Type } from "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk"

export class $AntiFarmingPerChunk$State {
constructor()

public "removeOutdated"(): void
public "tryIncrement"(antiFarming: $AntiFarmingPerChunk$$Type): boolean
}
}

declare module "net.puffish.skillsmod.access.MinecraftClientAccess" {
import { $RenderBuffers } from "net.minecraft.client.renderer.RenderBuffers"

export interface $MinecraftClientAccess {
"getBufferBuilders"(): $RenderBuffers
get "bufferBuilders"(): $RenderBuffers
}

export namespace $MinecraftClientAccess {
const probejs$$marker: never
}
export abstract class $MinecraftClientAccess$$Static implements $MinecraftClientAccess {
}
}

declare module "net.puffish.skillsmod.mixin.GameRulesInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesInvoker {
}

export namespace $GameRulesInvoker {
const probejs$$marker: never
}
export abstract class $GameRulesInvoker$$Static implements $GameRulesInvoker {
}
}

declare module "net.puffish.skillsmod.api.util.Result" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Optional } from "java.util.Optional"
import { $Function$$Type } from "java.util.function.Function"

export interface $Result<S = any, F = any> {
"andThen"<S2>(function0: $Function$$Type<S, $Result<S2, F>>): $Result<S2, F>
"flatMap"<S2, F2>(function0: $Function$$Type<S, $Result<S2, F2>>, function1: $Function$$Type<F, $Result<S2, F2>>): $Result<S2, F2>
"getFailure"(): $Optional<F>
"getFailureOrElse"(function0: $Function$$Type<S, F>): F
"getSuccess"(): $Optional<S>
"getSuccessOrElse"(function0: $Function$$Type<F, S>): S
"ifFailure"(consumer0: $Consumer$$Type<F>): $Result<S, F>
"ifSuccess"(consumer0: $Consumer$$Type<S>): $Result<S, F>
"mapFailure"<F2>(function0: $Function$$Type<F, F2>): $Result<S, F2>
"mapSuccess"<L2>(function0: $Function$$Type<S, L2>): $Result<L2, F>
"orElse"<F2>(function0: $Function$$Type<F, $Result<S, F2>>): $Result<S, F2>
}

export namespace $Result {
function failure<L, F>(f: F): $Result<L, F>
function success<S, R>(s: S): $Result<S, R>
}
export abstract class $Result$$Static<S = any, F = any> implements $Result<S, F> {
static "failure"<L, F>(f: F): $Result<L, F>
static "success"<S, R>(s: S): $Result<S, R>
}
}

declare module "net.puffish.skillsmod.access.WorldChunkAccess" {
import { $AntiFarmingPerChunk$State } from "net.puffish.skillsmod.experience.source.builtin.util.AntiFarmingPerChunk$State"

export interface $WorldChunkAccess {
"getAntiFarmingPerChunkState"(): $AntiFarmingPerChunk$State
get "antiFarmingPerChunkState"(): $AntiFarmingPerChunk$State
}

export namespace $WorldChunkAccess {
const probejs$$marker: never
}
export abstract class $WorldChunkAccess$$Static implements $WorldChunkAccess {
}
}

declare module "net.puffish.attributesmod.mixin.EntityAttributeInstanceInvoker" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $AttributeModifier } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $Collection } from "java.util.Collection"

export interface $EntityAttributeInstanceInvoker {
"invokeGetModifiersByOperation"(operation0: $AttributeModifier$Operation$$Type): $Collection<$AttributeModifier>
}

export namespace $EntityAttributeInstanceInvoker {
const probejs$$marker: never
}
export abstract class $EntityAttributeInstanceInvoker$$Static implements $EntityAttributeInstanceInvoker {
}
}

