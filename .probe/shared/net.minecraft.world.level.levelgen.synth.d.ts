declare module "net.minecraft.world.level.levelgen.synth.ImprovedNoise" {
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"

export class $ImprovedNoise {
readonly "xo": double
readonly "yo": double
readonly "zo": double

constructor(randomSource0: $RandomSource$$Type)

/** @deprecated */
public "noise"(double0: double, double1: double, double2: double, double3: double, double4: double): double
public "noise"(double0: double, double1: double, double2: double): double
public "noiseWithDerivative"(double0: double, double1: double, double2: double, double3s: double[]): double
public "parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
}
}

declare module "net.minecraft.world.level.levelgen.synth.NormalNoise" {
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters$$Type } from "net.minecraft.world.level.levelgen.synth.NormalNoise$NoiseParameters"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"

export class $NormalNoise {
public static "create"(randomSource0: $RandomSource$$Type, int1: integer, ...double2s: double[]): $NormalNoise
public static "create"(randomSource0: $RandomSource$$Type, noiseParameters1: $NormalNoise$NoiseParameters$$Type): $NormalNoise
/** @deprecated */
public static "createLegacyNetherBiome"(randomSource0: $RandomSource$$Type, noiseParameters1: $NormalNoise$NoiseParameters$$Type): $NormalNoise
public "getValue"(double0: double, double1: double, double2: double): double
public "maxValue"(): double
public "parameters"(): $NormalNoise$NoiseParameters
public "parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
}
}

declare module "net.minecraft.world.level.levelgen.synth.BlendedNoise" {
import { $DensityFunction$ContextProvider$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import { $KeyDispatchDataCodec } from "net.minecraft.util.KeyDispatchDataCodec"
import { $DensityFunction$SimpleFunction } from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import { $DensityFunction } from "net.minecraft.world.level.levelgen.DensityFunction"
import { $DensityFunction$FunctionContext$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $DensityFunction$Visitor$$Type } from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"

export class $BlendedNoise implements $DensityFunction$SimpleFunction {
static readonly "CODEC": $KeyDispatchDataCodec<$BlendedNoise>

constructor(randomSource0: $RandomSource$$Type, double1: double, double2: double, double3: double, double4: double, double5: double)

public "abs"(): $DensityFunction
public "clamp"(double0: double, double1: double): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<$DensityFunction>
public "compute"(functionContext0: $DensityFunction$FunctionContext$$Type): double
public static "createUnseeded"(double0: double, double1: double, double2: double, double3: double, double4: double): $BlendedNoise
public "cube"(): $DensityFunction
public "fillArray"(double0s: double[], contextProvider1: $DensityFunction$ContextProvider$$Type): void
public "halfNegative"(): $DensityFunction
public "mapAll"(visitor0: $DensityFunction$Visitor$$Type): $DensityFunction
public "maxValue"(): double
public "minValue"(): double
public "parityConfigString"(stringBuilder0: $StringBuilder$$Type): void
public "quarterNegative"(): $DensityFunction
public "square"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "withNewRandom"(randomSource0: $RandomSource$$Type): $BlendedNoise
}
}

declare module "net.minecraft.world.level.levelgen.synth.PerlinSimplexNoise" {
import { $List$$Type } from "java.util.List"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"

export class $PerlinSimplexNoise {
constructor(randomSource0: $RandomSource$$Type, list1: $List$$Type<integer>)

public "getValue"(double0: double, double1: double, boolean2: boolean): double
}
}

