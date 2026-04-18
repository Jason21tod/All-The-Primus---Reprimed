declare module "icyllis.arc3d.compiler.tree.Type" {
import { $List, $List$$Type } from "java.util.List"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $Type$Field, $Type$Field$$Type } from "icyllis.arc3d.compiler.tree.Type$Field"
import { $Expression, $Expression$$Type } from "icyllis.arc3d.compiler.tree.Expression"
import { $Symbol } from "icyllis.arc3d.compiler.tree.Symbol"

export class $Type extends $Symbol {
static readonly "kArray_TypeKind": byte
static readonly "kBoolean_ScalarKind": byte
static readonly "kFloat_ScalarKind": byte
static readonly "kGeneric_TypeKind": byte
static readonly "kMatrix_TypeKind": byte
static readonly "kMaxNestingDepth": integer
static readonly "kNonScalar_ScalarKind": byte
static readonly "kOther_TypeKind": byte
static readonly "kSampler_TypeKind": byte
static readonly "kScalar_TypeKind": byte
static readonly "kSigned_ScalarKind": byte
static readonly "kStruct_TypeKind": byte
static readonly "kUnsigned_ScalarKind": byte
static readonly "kUnsizedArray": integer
static readonly "kVector_TypeKind": byte
static readonly "kVoid_TypeKind": byte

public "canCoerceTo"(other: $Type$$Type, allowNarrowing: boolean): boolean
public "checkLiteralOutOfRange"(context: $Context$$Type, pos: integer, value: double): boolean
public "coerceExpression"(context: $Context$$Type, expr: $Expression$$Type): $Expression
public "convertArraySize"(context: $Context$$Type, position: integer, sizePosition: integer, size: long): integer
public "convertArraySize"(context: $Context$$Type, position: integer, size: $Expression$$Type): integer
public "getArrayName"(size: integer): string
public static "getArrayName"(baseName: string, size: integer): string
public "getArraySize"(): integer
public "getCoercibleTypes"(): $List<$Type>
public "getCoercionCost"(other: $Type$$Type): long
public "getCols"(): integer
public "getComponentType"(): $Type
public "getComponents"(): integer
public "getDesc"(): string
public "getDimensions"(): integer
public "getElementType"(): $Type
public "getFields"(): $List<$Type$Field>
public "getMaxValue"(): double
public "getMinValue"(): double
public "getMinWidth"(): integer
public "getNestingDepth"(): integer
public "getRank"(): integer
public "getRows"(): integer
public "getScalarKind"(): byte
public "getTypeKind"(): byte
public "getWidth"(): integer
public "isArray"(): boolean
public "isArrayed"(): boolean
public "isBoolean"(): boolean
public "isBooleanOrCompound"(): boolean
public "isCombinedSampler"(): boolean
public "isFloat"(): boolean
public "isFloatOrCompound"(): boolean
public "isGeneric"(): boolean
public "isInBuiltinTypes"(): boolean
public "isInteger"(): boolean
public "isInterfaceBlock"(): boolean
public "isMatrix"(): boolean
public "isMultiSampled"(): boolean
public "isNumeric"(): boolean
public "isOpaque"(): boolean
public "isRelaxedPrecision"(): boolean
public "isSampled"(): boolean
public "isScalar"(): boolean
public "isSeparateSampler"(): boolean
public "isShadow"(): boolean
public "isSigned"(): boolean
public "isSignedOrCompound"(): boolean
public "isStorageImage"(): boolean
public "isStruct"(): boolean
public "isUnsigned"(): boolean
public "isUnsignedOrCompound"(): boolean
public "isUnsizedArray"(): boolean
public "isUsableInArray"(context: $Context$$Type, position: integer): boolean
public "isVector"(): boolean
public "isVoid"(): boolean
public static "makeAliasType"(position: integer, name: string, type: $Type$$Type): $Type
public static "makeAliasType"(name: string, type: $Type$$Type): $Type
public static "makeArrayType"(name: string, type: $Type$$Type, size: integer): $Type
public static "makeCombinedType"(name: string, abbr: string, component: $Type$$Type, dimensions: integer, isShadow: boolean, isArrayed: boolean, isMultiSampled: boolean): $Type
public static "makeGenericType"(name: string, ...types: $Type$$Type[]): $Type
public static "makeImageType"(name: string, abbr: string, component: $Type$$Type, dimensions: integer, isArrayed: boolean, isMultiSampled: boolean): $Type
public static "makeMatrixType"(name: string, desc: string, columnType: $Type$$Type, cols: integer): $Type
public static "makeSamplerType"(name: string, abbr: string, component: $Type$$Type, dimensions: integer, isShadow: boolean, isArrayed: boolean, isMultiSampled: boolean, isSampled: boolean, isSampler: boolean): $Type
public static "makeScalarType"(name: string, desc: string, kind: byte, rank: integer, minWidth: integer, width: integer): $Type
public static "makeScalarType"(name: string, desc: string, kind: byte, rank: integer, width: integer): $Type
public static "makeSeparateType"(name: string, abbr: string, component: $Type$$Type, isShadow: boolean): $Type
public static "makeSpecialType"(name: string, abbr: string, kind: byte): $Type
public static "makeStructType"(context: $Context$$Type, position: integer, name: string, fields: $List$$Type<$Type$Field$$Type>, interfaceBlock: boolean): $Type
public static "makeTextureType"(name: string, abbr: string, component: $Type$$Type, dimensions: integer, isArrayed: boolean, isMultiSampled: boolean): $Type
public static "makeVectorType"(name: string, desc: string, componentType: $Type$$Type, rows: integer): $Type
public "matches"(other: $Type$$Type): boolean
public "resolve"(): $Type
public "toCompound"(context: $Context$$Type, cols: integer, rows: integer): $Type
public "toVector"(context: $Context$$Type, rows: integer): $Type
get "arraySize"(): integer
get "coercibleTypes"(): $List<$Type>
get "cols"(): integer
get "componentType"(): $Type
get "components"(): integer
get "desc"(): string
get "dimensions"(): integer
get "elementType"(): $Type
get "fields"(): $List<$Type$Field>
get "maxValue"(): double
get "minValue"(): double
get "minWidth"(): integer
get "nestingDepth"(): integer
get "rank"(): integer
get "rows"(): integer
get "scalarKind"(): byte
get "typeKind"(): byte
get "width"(): integer
get "array"(): boolean
get "arrayed"(): boolean
get "boolean"(): boolean
get "booleanOrCompound"(): boolean
get "combinedSampler"(): boolean
get "float"(): boolean
get "floatOrCompound"(): boolean
get "generic"(): boolean
get "inBuiltinTypes"(): boolean
get "integer"(): boolean
get "interfaceBlock"(): boolean
get "matrix"(): boolean
get "multiSampled"(): boolean
get "numeric"(): boolean
get "opaque"(): boolean
get "relaxedPrecision"(): boolean
get "sampled"(): boolean
get "scalar"(): boolean
get "separateSampler"(): boolean
get "shadow"(): boolean
get "signed"(): boolean
get "signedOrCompound"(): boolean
get "storageImage"(): boolean
get "struct"(): boolean
get "unsigned"(): boolean
get "unsignedOrCompound"(): boolean
get "unsizedArray"(): boolean
get "vector"(): boolean
get "void"(): boolean
}
}

declare module "icyllis.arc3d.compiler.ModuleUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleUnit {
}
}

declare module "icyllis.arc3d.compiler.tree.Symbol" {
import { $Node$SymbolKind } from "icyllis.arc3d.compiler.tree.Node$SymbolKind"
import { $Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Node } from "icyllis.arc3d.compiler.tree.Node"

export class $Symbol extends $Node {
public "getKind"(): $Node$SymbolKind
public "getName"(): string
public "getType"(): $Type
public "setName"(name: string): void
get "kind"(): $Node$SymbolKind
get "name"(): string
get "type"(): $Type
set "name"(value: string)
}
}

declare module "icyllis.arc3d.compiler.tree.FunctionDeclaration" {
import { $List, $List$$Type } from "java.util.List"
import { $Modifiers, $Modifiers$$Type } from "icyllis.arc3d.compiler.tree.Modifiers"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $Expression$$Type } from "icyllis.arc3d.compiler.tree.Expression"
import { $Type, $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Variable, $Variable$$Type } from "icyllis.arc3d.compiler.tree.Variable"
import { $FunctionDefinition, $FunctionDefinition$$Type } from "icyllis.arc3d.compiler.tree.FunctionDefinition"
import { $Symbol } from "icyllis.arc3d.compiler.tree.Symbol"

export class $FunctionDeclaration extends $Symbol {
constructor(position: integer, modifiers: $Modifiers$$Type, name: string, parameters: $List$$Type<$Variable$$Type>, returnType: $Type$$Type, builtin: boolean, entryPoint: boolean, intrinsicKind: integer)

public static "convert"(context: $Context$$Type, pos: integer, modifiers: $Modifiers$$Type, name: string, parameters: $List$$Type<$Variable$$Type>, returnType: $Type$$Type): $FunctionDeclaration
public "getDefinition"(): $FunctionDefinition
public "getIntrinsicKind"(): integer
public "getMangledName"(): string
public "getModifiers"(): $Modifiers
public "getNextOverload"(): $FunctionDeclaration
public "getParameters"(): $List<$Variable>
public "getReturnType"(): $Type
public "isBuiltin"(): boolean
public "isEntryPoint"(): boolean
public "isIntrinsic"(): boolean
public "resolveParameterTypes"(arguments_: $List$$Type<$Expression$$Type>, outParameterTypes: $List$$Type<$Type$$Type>): $Type
public "setDefinition"(definition: $FunctionDefinition$$Type): void
public "setNextOverload"(overload: $FunctionDeclaration$$Type): void
get "definition"(): $FunctionDefinition
get "intrinsicKind"(): integer
get "mangledName"(): string
get "modifiers"(): $Modifiers
get "nextOverload"(): $FunctionDeclaration
get "parameters"(): $List<$Variable>
get "returnType"(): $Type
get "builtin"(): boolean
get "entryPoint"(): boolean
get "intrinsic"(): boolean
set "definition"(value: $FunctionDefinition$$Type)
set "nextOverload"(value: $FunctionDeclaration$$Type)
}
}

declare module "icyllis.arc3d.compiler.tree.Modifiers" {
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $Node } from "icyllis.arc3d.compiler.tree.Node"
import { $Layout } from "icyllis.arc3d.compiler.tree.Layout"

export class $Modifiers extends $Node {
static readonly "kBuffer_Flag": integer
static readonly "kCoherent_Flag": integer
static readonly "kConst_Flag": integer
static readonly "kCount_Flag": integer
static readonly "kFlat_Flag": integer
static readonly "kIn_Flag": integer
static readonly "kInline_Flag": integer
static readonly "kInterpolation_Flags": integer
static readonly "kMemory_Flags": integer
static readonly "kNoInline_Flag": integer
static readonly "kNoPerspective_Flag": integer
static readonly "kOut_Flag": integer
static readonly "kPure_Flag": integer
static readonly "kReadOnly_Flag": integer
static readonly "kRestrict_Flag": integer
static readonly "kSmooth_Flag": integer
static readonly "kStorage_Flags": integer
static readonly "kSubroutine_Flag": integer
static readonly "kUniform_Flag": integer
static readonly "kVolatile_Flag": integer
static readonly "kWorkgroup_Flag": integer
static readonly "kWriteOnly_Flag": integer

constructor(position: integer)

public "checkFlags"(context: $Context$$Type, permittedFlags: integer): boolean
public "checkLayoutFlags"(context: $Context$$Type, permittedLayoutFlags: integer): boolean
public "clearFlag"(mask: integer): void
public "clearLayoutFlag"(mask: integer): void
public static "describeFlag"(flag: integer): string
public static "describeFlags"(flags: integer, padded: boolean): string
public static "describeFlags"(flags: integer): string
public "flags"(): integer
public "isBuffer"(): boolean
public "isConst"(): boolean
public "isUniform"(): boolean
public "layout"(): $Layout
public "layoutBuiltin"(): integer
public "layoutFlags"(): integer
public "layoutOffset"(): integer
public "setFlag"(context: $Context$$Type, mask: integer, pos: integer): void
public "setLayoutFlag"(context: $Context$$Type, mask: integer, name: string, pos: integer): void
get "buffer"(): boolean
get "const"(): boolean
get "uniform"(): boolean
}
}

declare module "icyllis.arc3d.compiler.tree.TopLevelElement" {
import { $Node$ElementKind } from "icyllis.arc3d.compiler.tree.Node$ElementKind"
import { $Node } from "icyllis.arc3d.compiler.tree.Node"

export class $TopLevelElement extends $Node {
public "getKind"(): $Node$ElementKind
get "kind"(): $Node$ElementKind
}
}

declare module "icyllis.arc3d.compiler.tree.Node$ElementKind" {
import { $TopLevelElement } from "icyllis.arc3d.compiler.tree.TopLevelElement"
import { $Enum } from "java.lang.Enum"
import { $Class } from "java.lang.Class"

export class $Node$ElementKind extends $Enum<$Node$ElementKind> {
static readonly "EXTENSION": $Node$ElementKind
static readonly "FUNCTION_DEFINITION": $Node$ElementKind
static readonly "FUNCTION_PROTOTYPE": $Node$ElementKind
static readonly "GLOBAL_VARIABLE": $Node$ElementKind
static readonly "INTERFACE_BLOCK": $Node$ElementKind
static readonly "MODIFIERS": $Node$ElementKind
static readonly "STRUCT_DEFINITION": $Node$ElementKind

public "getType"(): $Class<$TopLevelElement>
public static "valueOf"(name: string): $Node$ElementKind
public static "values"(): $Node$ElementKind[]
get "type"(): $Class<$TopLevelElement>
}
}

declare module "icyllis.arc3d.compiler.ErrorHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ErrorHandler {
constructor()

public "error"(pos: integer, msg: string): void
public "error"(start: integer, end: integer, msg: string): void
public "errorCount"(): integer
public "getSource"(): string
public "reset"(): void
public "setSource"(source: string): void
public "warning"(start: integer, end: integer, msg: string): void
public "warning"(pos: integer, msg: string): void
public "warningCount"(): integer
get "source"(): string
set "source"(value: string)
}
}

declare module "icyllis.arc3d.compiler.BuiltinTypes" {
import { $Type } from "icyllis.arc3d.compiler.tree.Type"

export class $BuiltinTypes {
readonly "mBVec": $Type
readonly "mBVec2": $Type
readonly "mBVec3": $Type
readonly "mBVec4": $Type
readonly "mBool": $Type
readonly "mBool2": $Type
readonly "mBool3": $Type
readonly "mBool4": $Type
readonly "mF32Mat2": $Type
readonly "mF32Mat2x2": $Type
readonly "mF32Mat2x3": $Type
readonly "mF32Mat2x4": $Type
readonly "mF32Mat3": $Type
readonly "mF32Mat3x2": $Type
readonly "mF32Mat3x3": $Type
readonly "mF32Mat3x4": $Type
readonly "mF32Mat4": $Type
readonly "mF32Mat4x2": $Type
readonly "mF32Mat4x3": $Type
readonly "mF32Mat4x4": $Type
readonly "mF32Vec2": $Type
readonly "mF32Vec3": $Type
readonly "mF32Vec4": $Type
readonly "mFloat": $Type
readonly "mFloat2": $Type
readonly "mFloat2x2": $Type
readonly "mFloat2x3": $Type
readonly "mFloat2x4": $Type
readonly "mFloat3": $Type
readonly "mFloat32": $Type
readonly "mFloat3x2": $Type
readonly "mFloat3x3": $Type
readonly "mFloat3x4": $Type
readonly "mFloat4": $Type
readonly "mFloat4x2": $Type
readonly "mFloat4x3": $Type
readonly "mFloat4x4": $Type
readonly "mGenBType": $Type
readonly "mGenFType": $Type
readonly "mGenHType": $Type
readonly "mGenIType": $Type
readonly "mGenSType": $Type
readonly "mGenUSType": $Type
readonly "mGenUType": $Type
readonly "mHMat": $Type
readonly "mHVec": $Type
readonly "mHalf": $Type
readonly "mHalf2": $Type
readonly "mHalf2x2": $Type
readonly "mHalf2x3": $Type
readonly "mHalf2x4": $Type
readonly "mHalf3": $Type
readonly "mHalf3x2": $Type
readonly "mHalf3x3": $Type
readonly "mHalf3x4": $Type
readonly "mHalf4": $Type
readonly "mHalf4x2": $Type
readonly "mHalf4x3": $Type
readonly "mHalf4x4": $Type
readonly "mI32Vec2": $Type
readonly "mI32Vec3": $Type
readonly "mI32Vec4": $Type
readonly "mIVec": $Type
readonly "mIVec2": $Type
readonly "mIVec3": $Type
readonly "mIVec4": $Type
readonly "mImage1D": $Type
readonly "mImage1DArray": $Type
readonly "mImage2D": $Type
readonly "mImage2DArray": $Type
readonly "mImage2DMS": $Type
readonly "mImage2DMSArray": $Type
readonly "mImage3D": $Type
readonly "mImageBuffer": $Type
readonly "mImageCube": $Type
readonly "mImageCubeArray": $Type
readonly "mInt": $Type
readonly "mInt2": $Type
readonly "mInt3": $Type
readonly "mInt32": $Type
readonly "mInt4": $Type
readonly "mInvalid": $Type
readonly "mMat": $Type
readonly "mMat2": $Type
readonly "mMat2x2": $Type
readonly "mMat2x3": $Type
readonly "mMat2x4": $Type
readonly "mMat3": $Type
readonly "mMat3x2": $Type
readonly "mMat3x3": $Type
readonly "mMat3x4": $Type
readonly "mMat4": $Type
readonly "mMat4x2": $Type
readonly "mMat4x3": $Type
readonly "mMat4x4": $Type
readonly "mMin16Float": $Type
readonly "mMin16Float2": $Type
readonly "mMin16Float2x2": $Type
readonly "mMin16Float2x3": $Type
readonly "mMin16Float2x4": $Type
readonly "mMin16Float3": $Type
readonly "mMin16Float3x2": $Type
readonly "mMin16Float3x3": $Type
readonly "mMin16Float3x4": $Type
readonly "mMin16Float4": $Type
readonly "mMin16Float4x2": $Type
readonly "mMin16Float4x3": $Type
readonly "mMin16Float4x4": $Type
readonly "mMin16Int": $Type
readonly "mMin16Int2": $Type
readonly "mMin16Int3": $Type
readonly "mMin16Int4": $Type
readonly "mMin16UInt": $Type
readonly "mMin16UInt2": $Type
readonly "mMin16UInt3": $Type
readonly "mMin16UInt4": $Type
readonly "mPoison": $Type
readonly "mSVec": $Type
readonly "mSampler": $Type
readonly "mSampler1D": $Type
readonly "mSampler1DArray": $Type
readonly "mSampler1DArrayShadow": $Type
readonly "mSampler1DShadow": $Type
readonly "mSampler2D": $Type
readonly "mSampler2DArray": $Type
readonly "mSampler2DArrayShadow": $Type
readonly "mSampler2DMS": $Type
readonly "mSampler2DMSArray": $Type
readonly "mSampler2DShadow": $Type
readonly "mSampler3D": $Type
readonly "mSamplerBuffer": $Type
readonly "mSamplerCube": $Type
readonly "mSamplerCubeArray": $Type
readonly "mSamplerCubeArrayShadow": $Type
readonly "mSamplerCubeShadow": $Type
readonly "mSamplerShadow": $Type
readonly "mSubpassInput": $Type
readonly "mSubpassInputMS": $Type
readonly "mTexture1D": $Type
readonly "mTexture1DArray": $Type
readonly "mTexture2D": $Type
readonly "mTexture2DArray": $Type
readonly "mTexture2DMS": $Type
readonly "mTexture2DMSArray": $Type
readonly "mTexture3D": $Type
readonly "mTextureBuffer": $Type
readonly "mTextureCube": $Type
readonly "mTextureCubeArray": $Type
readonly "mU32Vec2": $Type
readonly "mU32Vec3": $Type
readonly "mU32Vec4": $Type
readonly "mUInt": $Type
readonly "mUInt2": $Type
readonly "mUInt3": $Type
readonly "mUInt32": $Type
readonly "mUInt4": $Type
readonly "mUSVec": $Type
readonly "mUVec": $Type
readonly "mUVec2": $Type
readonly "mUVec3": $Type
readonly "mUVec4": $Type
readonly "mVec": $Type
readonly "mVec2": $Type
readonly "mVec3": $Type
readonly "mVec4": $Type
readonly "mVoid": $Type

constructor()

}
}

declare module "icyllis.arc3d.compiler.analysis.TreeVisitor" {
import { $Statement$$Type } from "icyllis.arc3d.compiler.tree.Statement"
import { $TopLevelElement$$Type } from "icyllis.arc3d.compiler.tree.TopLevelElement"
import { $Expression$$Type } from "icyllis.arc3d.compiler.tree.Expression"

export class $TreeVisitor {
constructor()

public "visitExpression"(expr: $Expression$$Type): boolean
public "visitStatement"(stmt: $Statement$$Type): boolean
public "visitTopLevelElement"(e: $TopLevelElement$$Type): boolean
}
}

declare module "icyllis.arc3d.compiler.tree.Layout" {
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"

export class $Layout {
static readonly "kBinding_LayoutFlag": integer
static readonly "kBlendSupportAllEquations_LayoutFlag": integer
static readonly "kBuiltin_LayoutFlag": integer
static readonly "kComponent_LayoutFlag": integer
static readonly "kCount_LayoutFlag": integer
static readonly "kEarlyFragmentTests_LayoutFlag": integer
static readonly "kIndex_LayoutFlag": integer
static readonly "kInputAttachmentIndex_LayoutFlag": integer
static readonly "kLocation_LayoutFlag": integer
static readonly "kOffset_LayoutFlag": integer
static readonly "kOriginUpperLeft_LayoutFlag": integer
static readonly "kPixelCenterInteger_LayoutFlag": integer
static readonly "kPushConstant_LayoutFlag": integer
static readonly "kSet_LayoutFlag": integer
static readonly "kStd140_LayoutFlag": integer
static readonly "kStd430_LayoutFlag": integer

constructor()

public "checkLayoutFlags"(context: $Context$$Type, pos: integer, permittedLayoutFlags: integer): boolean
public "clearLayoutFlag"(mask: integer): void
public static "describeLayoutFlag"(flag: integer): string
public "layoutFlags"(): integer
public "setLayoutFlag"(context: $Context$$Type, mask: integer, name: string, pos: integer): void
public "toString"(pretty: boolean): string
get "mBinding"(): integer
set "mBinding"(value: integer)
get "mBuiltin"(): integer
set "mBuiltin"(value: integer)
get "mComponent"(): integer
set "mComponent"(value: integer)
get "mIndex"(): integer
set "mIndex"(value: integer)
get "mInputAttachmentIndex"(): integer
set "mInputAttachmentIndex"(value: integer)
get "mLocation"(): integer
set "mLocation"(value: integer)
get "mOffset"(): integer
set "mOffset"(value: integer)
get "mSet"(): integer
set "mSet"(value: integer)
}
}

declare module "icyllis.arc3d.compiler.tree.VariableDeclaration" {
import { $Statement } from "icyllis.arc3d.compiler.tree.Statement"
import { $Modifiers$$Type } from "icyllis.arc3d.compiler.tree.Modifiers"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $Expression, $Expression$$Type } from "icyllis.arc3d.compiler.tree.Expression"
import { $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Variable, $Variable$$Type } from "icyllis.arc3d.compiler.tree.Variable"

export class $VariableDeclaration extends $Statement {
constructor(variable: $Variable$$Type, init: $Expression$$Type)

public static "checkError"(pos: integer, modifiers: $Modifiers$$Type, type: $Type$$Type, baseType: $Type$$Type, storage: byte): void
public static "convert"(context: $Context$$Type, pos: integer, modifiers: $Modifiers$$Type, type: $Type$$Type, name: string, storage: byte, init: $Expression$$Type): $VariableDeclaration
public static "convert"(context: $Context$$Type, variable: $Variable$$Type, init: $Expression$$Type): $VariableDeclaration
public "getInit"(): $Expression
public "getVariable"(): $Variable
public static "make"(variable: $Variable$$Type, init: $Expression$$Type): $VariableDeclaration
public "setInit"(init: $Expression$$Type): void
public "setVariable"(variable: $Variable$$Type): void
get "init"(): $Expression
get "variable"(): $Variable
set "init"(value: $Expression$$Type)
set "variable"(value: $Variable$$Type)
}
}

declare module "icyllis.arc3d.compiler.Context" {
import { $CompileOptions, $CompileOptions$$Type } from "icyllis.arc3d.compiler.CompileOptions"
import { $Expression } from "icyllis.arc3d.compiler.tree.Expression"
import { $ErrorHandler, $ErrorHandler$$Type } from "icyllis.arc3d.compiler.ErrorHandler"
import { $ShaderKind, $ShaderKind$$Type } from "icyllis.arc3d.compiler.ShaderKind"
import { $ModuleUnit$$Type } from "icyllis.arc3d.compiler.ModuleUnit"
import { $SymbolTable } from "icyllis.arc3d.compiler.SymbolTable"
import { $BuiltinTypes } from "icyllis.arc3d.compiler.BuiltinTypes"

export class $Context {
constructor(errorHandler: $ErrorHandler$$Type)

public "convertIdentifier"(position: integer, name: string): $Expression
public "end"(): void
public "enterScope"(): void
public "error"(start: integer, end: integer, msg: string): void
public "error"(position: integer, msg: string): void
public "getErrorHandler"(): $ErrorHandler
public "getKind"(): $ShaderKind
public "getOptions"(): $CompileOptions
public "getSymbolTable"(): $SymbolTable
public "getTypes"(): $BuiltinTypes
public "isActive"(): boolean
public "isBuiltin"(): boolean
public "isModule"(): boolean
public "leaveScope"(): void
public "setErrorHandler"(errorHandler: $ErrorHandler$$Type): void
public "start"(kind: $ShaderKind$$Type, options: $CompileOptions$$Type, parent: $ModuleUnit$$Type, isBuiltin: boolean, isModule: boolean): void
public "warning"(position: integer, msg: string): void
public "warning"(start: integer, end: integer, msg: string): void
get "errorHandler"(): $ErrorHandler
get "kind"(): $ShaderKind
get "options"(): $CompileOptions
get "symbolTable"(): $SymbolTable
get "types"(): $BuiltinTypes
get "active"(): boolean
get "builtin"(): boolean
get "module"(): boolean
set "errorHandler"(value: $ErrorHandler$$Type)
}
}

declare module "icyllis.arc3d.compiler.ShaderCompiler" {
import { $CompileOptions$$Type } from "icyllis.arc3d.compiler.CompileOptions"
import { $List$$Type } from "java.util.List"
import { $Context } from "icyllis.arc3d.compiler.Context"
import { $ShaderCaps$$Type } from "icyllis.arc3d.compiler.ShaderCaps"
import { $ErrorHandler } from "icyllis.arc3d.compiler.ErrorHandler"
import { $ShaderKind$$Type } from "icyllis.arc3d.compiler.ShaderKind"
import { $ModuleUnit, $ModuleUnit$$Type } from "icyllis.arc3d.compiler.ModuleUnit"
import { $TranslationUnit, $TranslationUnit$$Type } from "icyllis.arc3d.compiler.TranslationUnit"
import { $ByteBuffer } from "java.nio.ByteBuffer"

export class $ShaderCompiler {
static readonly "INVALID_TAG": string
static readonly "POISON_TAG": string

constructor()

public "compileIntoSPIRV"(source: charseq, kind: $ShaderKind$$Type, shaderCaps: $ShaderCaps$$Type, options: $CompileOptions$$Type, parent: $ModuleUnit$$Type): $ByteBuffer
public "compileIntoSPIRV"(source: string, kind: $ShaderKind$$Type, shaderCaps: $ShaderCaps$$Type, options: $CompileOptions$$Type, parent: $ModuleUnit$$Type): $ByteBuffer
public "endContext"(): void
public "errorCount"(): integer
public "generateGLSL"(translationUnit: $TranslationUnit$$Type, shaderCaps: $ShaderCaps$$Type): $ByteBuffer
public "generateSPIRV"(translationUnit: $TranslationUnit$$Type, shaderCaps: $ShaderCaps$$Type): $ByteBuffer
public "getContext"(): $Context
public "getErrorHandler"(): $ErrorHandler
public "getErrorMessage"(showCount: boolean): string
public "getErrorMessage"(): string
public "parse"(source: charseq, kind: $ShaderKind$$Type, options: $CompileOptions$$Type, parent: $ModuleUnit$$Type): $TranslationUnit
public "parse"(source: string, kind: $ShaderKind$$Type, options: $CompileOptions$$Type, parent: $ModuleUnit$$Type): $TranslationUnit
public "parseModule"(source: charseq, kind: $ShaderKind$$Type, parent: $ModuleUnit$$Type, builtin: boolean): $ModuleUnit
public "parseModule"(source: string, kind: $ShaderKind$$Type, parent: $ModuleUnit$$Type, builtin: boolean): $ModuleUnit
public "startContext"(kind: $ShaderKind$$Type, options: $CompileOptions$$Type, parent: $ModuleUnit$$Type, isBuiltin: boolean, isModule: boolean, source: string): void
public static "toChars"(s: charseq): character[]
public static "toChars"(elements: charseq[], start: integer, end: integer): character[]
public static "toChars"(elements: $List$$Type<charseq>): character[]
public static "toChars"(...elements: charseq[]): character[]
public "warningCount"(): integer
get "context"(): $Context
get "errorHandler"(): $ErrorHandler
get "errorMessage"(): string
}
}

declare module "icyllis.arc3d.compiler.tree.Expression" {
import { $Node$ExpressionKind } from "icyllis.arc3d.compiler.tree.Node$ExpressionKind"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $OptionalDouble } from "java.util.OptionalDouble"
import { $Type, $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Node } from "icyllis.arc3d.compiler.tree.Node"

export class $Expression extends $Node {
public "copy"(): $Expression
public "copy"(int0: integer): $Expression
public "getCoercionCost"(other: $Type$$Type): long
public "getConstantValue"(i: integer): $OptionalDouble
public "getKind"(): $Node$ExpressionKind
public "getType"(): $Type
public "isBooleanLiteral"(): boolean
public "isConstructorCall"(): boolean
public "isFloatLiteral"(): boolean
public "isIncomplete"(context: $Context$$Type): boolean
public "isIntLiteral"(): boolean
public "isLiteral"(): boolean
public "toString"(int0: integer): string
get "kind"(): $Node$ExpressionKind
get "type"(): $Type
get "booleanLiteral"(): boolean
get "constructorCall"(): boolean
get "floatLiteral"(): boolean
get "intLiteral"(): boolean
get "literal"(): boolean
}
}

declare module "icyllis.arc3d.compiler.tree.Node$ExpressionKind" {
import { $Enum } from "java.lang.Enum"
import { $Expression } from "icyllis.arc3d.compiler.tree.Expression"
import { $Class } from "java.lang.Class"

export class $Node$ExpressionKind extends $Enum<$Node$ExpressionKind> {
static readonly "BINARY": $Node$ExpressionKind
static readonly "CONDITIONAL": $Node$ExpressionKind
static readonly "CONSTRUCTOR_ARRAY": $Node$ExpressionKind
static readonly "CONSTRUCTOR_ARRAY_CAST": $Node$ExpressionKind
static readonly "CONSTRUCTOR_COMPOUND": $Node$ExpressionKind
static readonly "CONSTRUCTOR_COMPOUND_CAST": $Node$ExpressionKind
static readonly "CONSTRUCTOR_DIAGONAL": $Node$ExpressionKind
static readonly "CONSTRUCTOR_MATRIX_RESIZE": $Node$ExpressionKind
static readonly "CONSTRUCTOR_SCALAR_CAST": $Node$ExpressionKind
static readonly "CONSTRUCTOR_SPLAT": $Node$ExpressionKind
static readonly "CONSTRUCTOR_STRUCT": $Node$ExpressionKind
static readonly "FIELD_ACCESS": $Node$ExpressionKind
static readonly "FUNCTION_CALL": $Node$ExpressionKind
static readonly "FUNCTION_REFERENCE": $Node$ExpressionKind
static readonly "INDEX": $Node$ExpressionKind
static readonly "LITERAL": $Node$ExpressionKind
static readonly "POISON": $Node$ExpressionKind
static readonly "POSTFIX": $Node$ExpressionKind
static readonly "PREFIX": $Node$ExpressionKind
static readonly "SWIZZLE": $Node$ExpressionKind
static readonly "TYPE_REFERENCE": $Node$ExpressionKind
static readonly "VARIABLE_REFERENCE": $Node$ExpressionKind

public "getType"(): $Class<$Expression>
public static "valueOf"(name: string): $Node$ExpressionKind
public static "values"(): $Node$ExpressionKind[]
get "type"(): $Class<$Expression>
}
}

declare module "icyllis.arc3d.compiler.tree.Statement" {
import { $Node$StatementKind } from "icyllis.arc3d.compiler.tree.Node$StatementKind"
import { $Node } from "icyllis.arc3d.compiler.tree.Node"

export class $Statement extends $Node {
public "getKind"(): $Node$StatementKind
public "isEmpty"(): boolean
get "kind"(): $Node$StatementKind
get "empty"(): boolean
}
}

declare module "icyllis.arc3d.compiler.GLSLVersion" {
import { $Enum } from "java.lang.Enum"

export class $GLSLVersion extends $Enum<$GLSLVersion> {
static readonly "GLSL_300_ES": $GLSLVersion
static readonly "GLSL_310_ES": $GLSLVersion
static readonly "GLSL_320_ES": $GLSLVersion
static readonly "GLSL_330": $GLSLVersion
static readonly "GLSL_400": $GLSLVersion
static readonly "GLSL_420": $GLSLVersion
static readonly "GLSL_430": $GLSLVersion
static readonly "GLSL_440": $GLSLVersion
static readonly "GLSL_450": $GLSLVersion
readonly "mVersionDecl": string

public "isAtLeast"(other: $GLSLVersion$$Type): boolean
public "isCoreProfile"(): boolean
public "isESProfile"(): boolean
public static "valueOf"(name: string): $GLSLVersion
public static "values"(): $GLSLVersion[]
get "coreProfile"(): boolean
get "eSProfile"(): boolean
}
}

declare module "icyllis.arc3d.compiler.analysis.SymbolUsage$Count" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SymbolUsage$Count {
constructor()

}
}

declare module "icyllis.arc3d.compiler.tree.GlobalVariable" {
import { $Statement$$Type } from "icyllis.arc3d.compiler.tree.Statement"
import { $VariableDeclaration, $VariableDeclaration$$Type } from "icyllis.arc3d.compiler.tree.VariableDeclaration"
import { $TopLevelElement } from "icyllis.arc3d.compiler.tree.TopLevelElement"

export class $GlobalVariable extends $TopLevelElement {
constructor(decl: $VariableDeclaration$$Type)

public "getDeclaration"(): $VariableDeclaration
public "setDeclaration"(decl: $Statement$$Type): void
get "declaration"(): $VariableDeclaration
set "declaration"(value: $Statement$$Type)
}
}

declare module "icyllis.arc3d.compiler.tree.Node" {
import { $TreeVisitor$$Type } from "icyllis.arc3d.compiler.analysis.TreeVisitor"

export class $Node {
public "accept"(treeVisitor0: $TreeVisitor$$Type): boolean
public "getEndOffset"(): integer
public "getStartOffset"(): integer
get "mPosition"(): integer
set "mPosition"(value: integer)
get "endOffset"(): integer
get "startOffset"(): integer
}
}

declare module "icyllis.arc3d.compiler.tree.Type$Field" {
import { $Modifiers, $Modifiers$$Type } from "icyllis.arc3d.compiler.tree.Modifiers"
import { $Type, $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Record } from "java.lang.Record"

export class $Type$Field extends $Record {
constructor(position: integer, modifiers: $Modifiers$$Type, type: $Type$$Type, name: string)

public "modifiers"(): $Modifiers
public "name"(): string
public "position"(): integer
public "type"(): $Type
}
}

declare module "icyllis.arc3d.compiler.tree.Node$SymbolKind" {
import { $Enum } from "java.lang.Enum"
import { $Class } from "java.lang.Class"
import { $Symbol } from "icyllis.arc3d.compiler.tree.Symbol"

export class $Node$SymbolKind extends $Enum<$Node$SymbolKind> {
static readonly "ANONYMOUS_FIELD": $Node$SymbolKind
static readonly "FUNCTION_DECLARATION": $Node$SymbolKind
static readonly "TYPE": $Node$SymbolKind
static readonly "VARIABLE": $Node$SymbolKind

public "getType"(): $Class<$Symbol>
public static "valueOf"(name: string): $Node$SymbolKind
public static "values"(): $Node$SymbolKind[]
get "type"(): $Class<$Symbol>
}
}

declare module "icyllis.arc3d.compiler.ShaderKind" {
import { $Enum } from "java.lang.Enum"

export class $ShaderKind extends $Enum<$ShaderKind> {
static readonly "BASE": $ShaderKind
static readonly "COMPUTE": $ShaderKind
static readonly "FRAGMENT": $ShaderKind
static readonly "PRIVATE_SUBROUTINE_BLENDER": $ShaderKind
static readonly "PRIVATE_SUBROUTINE_COLOR_FILTER": $ShaderKind
static readonly "PRIVATE_SUBROUTINE_SHADER": $ShaderKind
static readonly "SUBROUTINE": $ShaderKind
static readonly "SUBROUTINE_BLENDER": $ShaderKind
static readonly "SUBROUTINE_COLOR_FILTER": $ShaderKind
static readonly "SUBROUTINE_SHADER": $ShaderKind
static readonly "VERTEX": $ShaderKind

public "isAnySubroutine"(): boolean
public "isCompute"(): boolean
public "isFragment"(): boolean
public "isVertex"(): boolean
public static "valueOf"(name: string): $ShaderKind
public static "values"(): $ShaderKind[]
get "anySubroutine"(): boolean
get "compute"(): boolean
get "fragment"(): boolean
get "vertex"(): boolean
}
}

declare module "icyllis.arc3d.compiler.ShaderCaps" {
import { $SPIRVVersion, $SPIRVVersion$$Type } from "icyllis.arc3d.compiler.SPIRVVersion"
import { $GLSLVersion, $GLSLVersion$$Type } from "icyllis.arc3d.compiler.GLSLVersion"
import { $StringBuilder$$Type } from "java.lang.StringBuilder"
import { $TargetApi, $TargetApi$$Type } from "icyllis.arc3d.compiler.TargetApi"

export class $ShaderCaps {
constructor()

public "dump"(prefix: string, out: $StringBuilder$$Type): void
get "mFMASupport"(): boolean
set "mFMASupport"(value: boolean)
get "mGLSLVersion"(): $GLSLVersion
set "mGLSLVersion"(value: $GLSLVersion$$Type)
get "mSPIRVVersion"(): $SPIRVVersion
set "mSPIRVVersion"(value: $SPIRVVersion$$Type)
get "mTargetApi"(): $TargetApi
set "mTargetApi"(value: $TargetApi$$Type)
}
}

declare module "icyllis.arc3d.compiler.tree.Block" {
import { $Statement, $Statement$$Type } from "icyllis.arc3d.compiler.tree.Statement"
import { $List, $List$$Type } from "java.util.List"

export class $Block extends $Statement {
constructor(position: integer, statements: $List$$Type<$Statement$$Type>, scoped: boolean)

public "getStatements"(): $List<$Statement>
public "isScoped"(): boolean
public static "make"(pos: integer, statements: $List$$Type<$Statement$$Type>, scoped: boolean): $Statement
public static "makeBlock"(pos: integer, statements: $List$$Type<$Statement$$Type>): $Block
public static "makeCompound"(before: $Statement$$Type, after: $Statement$$Type): $Statement
public "setScoped"(scoped: boolean): void
get "statements"(): $List<$Statement>
get "scoped"(): boolean
set "scoped"(value: boolean)
}
}

declare module "icyllis.arc3d.compiler.tree.Node$StatementKind" {
import { $Statement } from "icyllis.arc3d.compiler.tree.Statement"
import { $Enum } from "java.lang.Enum"
import { $Class } from "java.lang.Class"

export class $Node$StatementKind extends $Enum<$Node$StatementKind> {
static readonly "BLOCK": $Node$StatementKind
static readonly "BREAK": $Node$StatementKind
static readonly "CONTINUE": $Node$StatementKind
static readonly "DISCARD": $Node$StatementKind
static readonly "DO": $Node$StatementKind
static readonly "EMPTY": $Node$StatementKind
static readonly "EXPRESSION": $Node$StatementKind
static readonly "FOR": $Node$StatementKind
static readonly "IF": $Node$StatementKind
static readonly "RETURN": $Node$StatementKind
static readonly "SWITCH": $Node$StatementKind
static readonly "SWITCH_CASE": $Node$StatementKind
static readonly "VARIABLE_DECLARATION": $Node$StatementKind

public "getType"(): $Class<$Statement>
public static "valueOf"(name: string): $Node$StatementKind
public static "values"(): $Node$StatementKind[]
get "type"(): $Class<$Statement>
}
}

declare module "icyllis.arc3d.compiler.TargetApi" {
import { $Enum } from "java.lang.Enum"

export class $TargetApi extends $Enum<$TargetApi> {
static readonly "OPENGL_3_3": $TargetApi
static readonly "OPENGL_4_3": $TargetApi
static readonly "OPENGL_4_5": $TargetApi
static readonly "OPENGL_ES_3_0": $TargetApi
static readonly "OPENGL_ES_3_1": $TargetApi
static readonly "VULKAN_1_0": $TargetApi

public "isOpenGL"(): boolean
public "isOpenGLES"(): boolean
public "isVulkan"(): boolean
public static "valueOf"(name: string): $TargetApi
public static "values"(): $TargetApi[]
get "openGL"(): boolean
get "openGLES"(): boolean
get "vulkan"(): boolean
}
}

declare module "icyllis.arc3d.compiler.analysis.SymbolUsage$VariableCounts" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SymbolUsage$VariableCounts {
constructor()

get "decl"(): integer
set "decl"(value: integer)
get "read"(): integer
set "read"(value: integer)
get "write"(): integer
set "write"(value: integer)
}
}

declare module "icyllis.arc3d.compiler.tree.FunctionDefinition" {
import { $Statement$$Type } from "icyllis.arc3d.compiler.tree.Statement"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $TopLevelElement } from "icyllis.arc3d.compiler.tree.TopLevelElement"
import { $FunctionDeclaration, $FunctionDeclaration$$Type } from "icyllis.arc3d.compiler.tree.FunctionDeclaration"
import { $Block, $Block$$Type } from "icyllis.arc3d.compiler.tree.Block"

export class $FunctionDefinition extends $TopLevelElement {
public static "convert"(context: $Context$$Type, pos: integer, functionDeclaration: $FunctionDeclaration$$Type, builtin: boolean, body: $Statement$$Type): $FunctionDefinition
public "getBody"(): $Block
public "getDeclaration"(): $FunctionDeclaration
public "isBuiltin"(): boolean
public static "make"(pos: integer, functionDeclaration: $FunctionDeclaration$$Type, builtin: boolean, body: $Block$$Type): $FunctionDefinition
public "setBody"(body: $Statement$$Type): void
get "body"(): $Block
get "declaration"(): $FunctionDeclaration
get "builtin"(): boolean
set "body"(value: $Statement$$Type)
}
}

declare module "icyllis.arc3d.compiler.analysis.SymbolUsage" {
import { $SymbolUsage$VariableCounts } from "icyllis.arc3d.compiler.analysis.SymbolUsage$VariableCounts"
import { $IdentityHashMap } from "java.util.IdentityHashMap"
import { $SymbolUsage$Count } from "icyllis.arc3d.compiler.analysis.SymbolUsage$Count"
import { $Type, $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Variable, $Variable$$Type } from "icyllis.arc3d.compiler.tree.Variable"
import { $FunctionDeclaration, $FunctionDeclaration$$Type } from "icyllis.arc3d.compiler.tree.FunctionDeclaration"
import { $Node$$Type } from "icyllis.arc3d.compiler.tree.Node"

export class $SymbolUsage {
readonly "mFunctionCounts": $IdentityHashMap<$FunctionDeclaration, $SymbolUsage$Count>
readonly "mStructCounts": $IdentityHashMap<$Type, $SymbolUsage$Count>
readonly "mVariableCounts": $IdentityHashMap<$Variable, $SymbolUsage$VariableCounts>

constructor()

public "add"(node: $Node$$Type): void
public "computeFunctionCount"(functionSymbol: $FunctionDeclaration$$Type): $SymbolUsage$Count
public "computeStructCount"(typeSymbol: $Type$$Type): $SymbolUsage$Count
public "computeVariableCounts"(varSymbol: $Variable$$Type): $SymbolUsage$VariableCounts
public "findFunctionCount"(functionSymbol: $FunctionDeclaration$$Type): $SymbolUsage$Count
public "findStructCount"(typeSymbol: $Type$$Type): $SymbolUsage$Count
public "findVariableCounts"(varSymbol: $Variable$$Type): $SymbolUsage$VariableCounts
public "getFunctionCount"(functionSymbol: $FunctionDeclaration$$Type): integer
public "getStructCount"(typeSymbol: $Type$$Type): integer
public "remove"(node: $Node$$Type): void
}
}

declare module "icyllis.arc3d.compiler.SymbolTable" {
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $Type, $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Symbol, $Symbol$$Type } from "icyllis.arc3d.compiler.tree.Symbol"

export class $SymbolTable {
public "find"(name: string): $Symbol
public "findBuiltinSymbol"(name: string): $Symbol
public "getArrayType"(type: $Type$$Type, size: integer): $Type
public "getParent"(): $SymbolTable
public "insert"<T extends $Symbol>(context: $Context$$Type, symbol: T): T
public "isBuiltin"(): boolean
public "isBuiltinType"(name: string): boolean
public "isType"(name: string): boolean
get "parent"(): $SymbolTable
get "builtin"(): boolean
}
}

declare module "icyllis.arc3d.compiler.TranslationUnit" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $TopLevelElement, $TopLevelElement$$Type } from "icyllis.arc3d.compiler.tree.TopLevelElement"
import { $Iterator } from "java.util.Iterator"
import { $ShaderKind, $ShaderKind$$Type } from "icyllis.arc3d.compiler.ShaderKind"
import { $Node } from "icyllis.arc3d.compiler.tree.Node"
import { $Iterable } from "java.lang.Iterable"
import { $BuiltinTypes, $BuiltinTypes$$Type } from "icyllis.arc3d.compiler.BuiltinTypes"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompileOptions, $CompileOptions$$Type } from "icyllis.arc3d.compiler.CompileOptions"
import { $List, $List$$Type } from "java.util.List"
import { $SymbolUsage } from "icyllis.arc3d.compiler.analysis.SymbolUsage"
import { $Spliterator } from "java.util.Spliterator"
import { $SymbolTable, $SymbolTable$$Type } from "icyllis.arc3d.compiler.SymbolTable"

export class $TranslationUnit extends $Node implements $Iterable<$TopLevelElement> {
constructor(source: string, kind: $ShaderKind$$Type, options: $CompileOptions$$Type, types: $BuiltinTypes$$Type, symbolTable: $SymbolTable$$Type, uniqueElements: $ArrayList$$Type<$TopLevelElement$$Type>, extensions: $List$$Type<$Map$Entry$$Type<string, string>>)

public "forEach"(consumer0: $Consumer$$Type<$TopLevelElement$$Type>): void
public "getExtensions"(): $List<$Map$Entry<string, string>>
public "getKind"(): $ShaderKind
public "getOptions"(): $CompileOptions
public "getSharedElements"(): $ArrayList<$TopLevelElement>
public "getSource"(): string
public "getSymbolTable"(): $SymbolTable
public "getTypes"(): $BuiltinTypes
public "getUniqueElements"(): $ArrayList<$TopLevelElement>
public "getUsage"(): $SymbolUsage
public "iterator"(): $Iterator<$TopLevelElement>
public "spliterator"(): $Spliterator<$TopLevelElement>
[Symbol.iterator](): IterableIterator<$TopLevelElement>;
get "extensions"(): $List<$Map$Entry<string, string>>
get "kind"(): $ShaderKind
get "options"(): $CompileOptions
get "sharedElements"(): $ArrayList<$TopLevelElement>
get "source"(): string
get "symbolTable"(): $SymbolTable
get "types"(): $BuiltinTypes
get "uniqueElements"(): $ArrayList<$TopLevelElement>
get "usage"(): $SymbolUsage
}
}

declare module "icyllis.arc3d.compiler.SPIRVVersion" {
import { $Enum } from "java.lang.Enum"

export class $SPIRVVersion extends $Enum<$SPIRVVersion> {
static readonly "SPIRV_1_0": $SPIRVVersion
static readonly "SPIRV_1_3": $SPIRVVersion
static readonly "SPIRV_1_4": $SPIRVVersion
static readonly "SPIRV_1_5": $SPIRVVersion
static readonly "SPIRV_1_6": $SPIRVVersion
readonly "mVersionNumber": integer

public "isAtLeast"(other: $SPIRVVersion$$Type): boolean
public "isBefore"(other: $SPIRVVersion$$Type): boolean
public static "valueOf"(name: string): $SPIRVVersion
public static "values"(): $SPIRVVersion[]
}
}

declare module "icyllis.arc3d.compiler.CompileOptions" {
import { $Map, $Map$$Type } from "java.util.Map"

export class $CompileOptions {
constructor()

get "mEntryPointName"(): string
set "mEntryPointName"(value: string)
get "mExtensions"(): $Map<string, string>
set "mExtensions"(value: $Map$$Type<string, string>)
get "mForceHighPrecision"(): boolean
set "mForceHighPrecision"(value: boolean)
get "mMinifyCode"(): boolean
set "mMinifyCode"(value: boolean)
get "mMinifyNames"(): boolean
set "mMinifyNames"(value: boolean)
get "mNoShortCircuit"(): boolean
set "mNoShortCircuit"(value: boolean)
get "mOptimizationLevel"(): integer
set "mOptimizationLevel"(value: integer)
get "mPreprocess"(): boolean
set "mPreprocess"(value: boolean)
get "mUsePrecisionQualifiers"(): boolean
set "mUsePrecisionQualifiers"(value: boolean)
}
}

declare module "icyllis.arc3d.compiler.tree.InterfaceBlock" {
import { $Modifiers$$Type } from "icyllis.arc3d.compiler.tree.Modifiers"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $TopLevelElement } from "icyllis.arc3d.compiler.tree.TopLevelElement"
import { $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Variable, $Variable$$Type } from "icyllis.arc3d.compiler.tree.Variable"

export class $InterfaceBlock extends $TopLevelElement {
constructor(position: integer, variable: $Variable$$Type)

public static "convert"(context: $Context$$Type, pos: integer, modifiers: $Modifiers$$Type, blockType: $Type$$Type, instanceName: string): $InterfaceBlock
public "getArraySize"(): integer
public "getBlockName"(): string
public "getInstanceName"(): string
public "getVariable"(): $Variable
public static "make"(context: $Context$$Type, pos: integer, variable: $Variable$$Type): $InterfaceBlock
get "arraySize"(): integer
get "blockName"(): string
get "instanceName"(): string
get "variable"(): $Variable
}
}

declare module "icyllis.arc3d.compiler.tree.Variable" {
import { $VariableDeclaration, $VariableDeclaration$$Type } from "icyllis.arc3d.compiler.tree.VariableDeclaration"
import { $InterfaceBlock, $InterfaceBlock$$Type } from "icyllis.arc3d.compiler.tree.InterfaceBlock"
import { $Modifiers, $Modifiers$$Type } from "icyllis.arc3d.compiler.tree.Modifiers"
import { $Context$$Type } from "icyllis.arc3d.compiler.Context"
import { $Expression } from "icyllis.arc3d.compiler.tree.Expression"
import { $Type, $Type$$Type } from "icyllis.arc3d.compiler.tree.Type"
import { $Symbol } from "icyllis.arc3d.compiler.tree.Symbol"
import { $GlobalVariable, $GlobalVariable$$Type } from "icyllis.arc3d.compiler.tree.GlobalVariable"

export class $Variable extends $Symbol {
static readonly "kGlobal_Storage": byte
static readonly "kLocal_Storage": byte
static readonly "kParameter_Storage": byte

constructor(position: integer, modifiers: $Modifiers$$Type, type: $Type$$Type, name: string, storage: byte, builtin: boolean)

public static "convert"(context: $Context$$Type, pos: integer, modifiers: $Modifiers$$Type, type: $Type$$Type, name: string, storage: byte): $Variable
public "getArraySize"(): integer
public "getBaseType"(): $Type
public "getDeclaration"(): $VariableDeclaration
public "getGlobalVariable"(): $GlobalVariable
public "getInterfaceBlock"(): $InterfaceBlock
public "getModifiers"(): $Modifiers
public "getStorage"(): byte
public "initialValue"(): $Expression
public "isBuiltin"(): boolean
public static "make"(pos: integer, modifiers: $Modifiers$$Type, type: $Type$$Type, name: string, storage: byte, builtin: boolean): $Variable
public "setDeclaration"(decl: $VariableDeclaration$$Type): void
public "setGlobalVariable"(global: $GlobalVariable$$Type): void
public "setInterfaceBlock"(interfaceBlock: $InterfaceBlock$$Type): void
get "arraySize"(): integer
get "baseType"(): $Type
get "declaration"(): $VariableDeclaration
get "globalVariable"(): $GlobalVariable
get "interfaceBlock"(): $InterfaceBlock
get "modifiers"(): $Modifiers
get "storage"(): byte
get "builtin"(): boolean
set "declaration"(value: $VariableDeclaration$$Type)
set "globalVariable"(value: $GlobalVariable$$Type)
set "interfaceBlock"(value: $InterfaceBlock$$Type)
}
}

