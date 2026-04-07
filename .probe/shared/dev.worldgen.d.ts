declare module "dev.worldgen.lithostitched.mixin.common.StructureTemplatePoolAccessor" {
import { $List, $List$$Type } from "java.util.List"
import { $ObjectArrayList, $ObjectArrayList$$Type } from "it.unimi.dsi.fastutil.objects.ObjectArrayList"
import { $Pair, $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor {
"getRawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
"getVanillaTemplates"(): $ObjectArrayList<$StructurePoolElement>
"setRawTemplates"(list0: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>): void
"setVanillaTemplates"(objectArrayList0: $ObjectArrayList$$Type<$StructurePoolElement$$Type>): void
get "rawTemplates"(): $List<$Pair<$StructurePoolElement, integer>>
get "vanillaTemplates"(): $ObjectArrayList<$StructurePoolElement>
set "rawTemplates"(value: $List$$Type<$Pair$$Type<$StructurePoolElement$$Type, integer>>)
set "vanillaTemplates"(value: $ObjectArrayList$$Type<$StructurePoolElement$$Type>)
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export abstract class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.StructureProcessorListAccessor" {
import { $List$$Type } from "java.util.List"
import { $StructureProcessor$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"

export interface $StructureProcessorListAccessor {
"setProcessors"(list0: $List$$Type<$StructureProcessor$$Type>): void
set "processors"(value: $List$$Type<$StructureProcessor$$Type>)
}

export namespace $StructureProcessorListAccessor {
const probejs$$marker: never
}
export abstract class $StructureProcessorListAccessor$$Static implements $StructureProcessorListAccessor {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.NoiseGeneratorSettingsAccessor" {
import { $NoiseRouter$$Type } from "net.minecraft.world.level.levelgen.NoiseRouter"

export interface $NoiseGeneratorSettingsAccessor {
"setNoiseRouter"(noiseRouter0: $NoiseRouter$$Type): void
set "noiseRouter"(value: $NoiseRouter$$Type)
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export abstract class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.PlacedFeatureAccessor" {
import { $ConfiguredFeature$$Type } from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import { $Holder$$Type } from "net.minecraft.core.Holder"

export interface $PlacedFeatureAccessor {
"setFeature"(holder0: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>): void
set "feature"(value: $Holder$$Type<$ConfiguredFeature$$Type<any, any>>)
}

export namespace $PlacedFeatureAccessor {
const probejs$$marker: never
}
export abstract class $PlacedFeatureAccessor$$Static implements $PlacedFeatureAccessor {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.RandomStateAccessor" {
import { $PositionalRandomFactory } from "net.minecraft.world.level.levelgen.PositionalRandomFactory"

export interface $RandomStateAccessor {
"getRandom"(): $PositionalRandomFactory
get "random"(): $PositionalRandomFactory
}

export namespace $RandomStateAccessor {
const probejs$$marker: never
}
export abstract class $RandomStateAccessor$$Static implements $RandomStateAccessor {
}
}

declare module "dev.worldgen.lithostitched.access.StructurePoolAccess" {
import { $LithostitchedTemplates } from "dev.worldgen.lithostitched.worldgen.structure.LithostitchedTemplates"

export interface $StructurePoolAccess {
"compileRawTemplates"(): void
"getLithostitchedTemplates"(): $LithostitchedTemplates
get "lithostitchedTemplates"(): $LithostitchedTemplates
}

export namespace $StructurePoolAccess {
const probejs$$marker: never
}
export abstract class $StructurePoolAccess$$Static implements $StructurePoolAccess {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.MappedRegistryAccessor" {
import { $Map } from "java.util.Map"
import { $Holder$Reference } from "net.minecraft.core.Holder$Reference"

export interface $MappedRegistryAccessor<T = any> {
"getByValue"(): $Map<T, $Holder$Reference<T>>
get "byValue"(): $Map<T, $Holder$Reference<T>>
}

export namespace $MappedRegistryAccessor {
const probejs$$marker: never
}
export abstract class $MappedRegistryAccessor$$Static<T = any> implements $MappedRegistryAccessor<T> {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.StructureSetAccessor" {
import { $List$$Type } from "java.util.List"
import { $StructureSet$StructureSelectionEntry$$Type } from "net.minecraft.world.level.levelgen.structure.StructureSet$StructureSelectionEntry"

export interface $StructureSetAccessor {
"setStructures"(list0: $List$$Type<$StructureSet$StructureSelectionEntry$$Type>): void
set "structures"(value: $List$$Type<$StructureSet$StructureSelectionEntry$$Type>)
}

export namespace $StructureSetAccessor {
const probejs$$marker: never
}
export abstract class $StructureSetAccessor$$Static implements $StructureSetAccessor {
}
}

declare module "dev.worldgen.lithostitched.mixin.common.HolderReferenceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HolderReferenceAccessor<T = any> {
"setValue"(t0: T): void
set "value"(value: T)
}

export namespace $HolderReferenceAccessor {
const probejs$$marker: never
}
export abstract class $HolderReferenceAccessor$$Static<T = any> implements $HolderReferenceAccessor<T> {
}
}

declare module "dev.worldgen.lithostitched.worldgen.structure.LithostitchedTemplates" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $Spliterator } from "java.util.Spliterator"
import { $StructurePoolElement, $StructurePoolElement$$Type } from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import { $Iterable } from "java.lang.Iterable"

export class $LithostitchedTemplates implements $Iterable<$StructurePoolElement> {
constructor()

public "add"(structurePoolElement0: $StructurePoolElement$$Type, int1: integer): $LithostitchedTemplates
public "forEach"(consumer0: $Consumer$$Type<$StructurePoolElement$$Type>): void
public "iterator"(): $Iterator<$StructurePoolElement>
public "shuffle"(randomSource0: $RandomSource$$Type): $List<$StructurePoolElement>
public "spliterator"(): $Spliterator<$StructurePoolElement>
public "stream"(): $Stream<$StructurePoolElement>
[Symbol.iterator](): IterableIterator<$StructurePoolElement>;
}
}

declare module "dev.worldgen.lithostitched.mixin.common.SinglePoolElementAccessor" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Either } from "com.mojang.datafixers.util.Either"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $StructureTemplate } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $StructureProcessorList, $StructureProcessorList$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"

export interface $SinglePoolElementAccessor {
"getProcessors"(): $Holder<$StructureProcessorList>
"getTemplate"(): $Either<$ResourceLocation, $StructureTemplate>
"setProcessors"(holder0: $Holder$$Type<$StructureProcessorList$$Type>): void
get "processors"(): $Holder<$StructureProcessorList>
get "template"(): $Either<$ResourceLocation, $StructureTemplate>
set "processors"(value: $Holder$$Type<$StructureProcessorList$$Type>)
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export abstract class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {
}
}

