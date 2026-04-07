declare module "it.unimi.dsi.fastutil.floats.FloatArrayList" {
import { $FloatList, $FloatList$$Type } from "it.unimi.dsi.fastutil.floats.FloatList"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $FloatComparator$$Type } from "it.unimi.dsi.fastutil.floats.FloatComparator"
import { $RandomAccess } from "java.util.RandomAccess"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $FloatUnaryOperator$$Type } from "it.unimi.dsi.fastutil.floats.FloatUnaryOperator"
import { $FloatSpliterator } from "it.unimi.dsi.fastutil.floats.FloatSpliterator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"
import { $Cloneable } from "java.lang.Cloneable"
import { $Iterator$$Type } from "java.util.Iterator"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $AbstractFloatList } from "it.unimi.dsi.fastutil.floats.AbstractFloatList"
import { $FloatIterator$$Type } from "it.unimi.dsi.fastutil.floats.FloatIterator"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $Serializable } from "java.io.Serializable"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatCollection$$Type } from "it.unimi.dsi.fastutil.floats.FloatCollection"
import { $List } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $FloatPredicate$$Type } from "it.unimi.dsi.fastutil.floats.FloatPredicate"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $Comparator$$Type } from "java.util.Comparator"

export class $FloatArrayList extends $AbstractFloatList implements $RandomAccess, $Cloneable, $Serializable {
static readonly "DEFAULT_INITIAL_CAPACITY": integer

constructor(floatList0: $FloatList$$Type)
constructor(floatCollection0: $FloatCollection$$Type)
constructor(collection0: $Collection$$Type<float>)
constructor(float0s: float[])
constructor(float0s: float[], int1: integer, int2: integer)
constructor(iterator0: $Iterator$$Type<float>)
constructor(floatIterator0: $FloatIterator$$Type)
constructor(int0: integer)
constructor()

/** @deprecated */
public "add"(int0: integer, float1: float): void
/** @deprecated */
public "add"(float0: float): boolean
public "addAll"(int0: integer, floatList1: $FloatList$$Type): boolean
public "addAll"(floatList0: $FloatList$$Type): boolean
public "clone"(): $FloatArrayList
public "compareTo"(floatArrayList0: $FloatArrayList$$Type): integer
/** @deprecated */
public "contains"(object0: any): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "doubleIterator"(): $DoubleIterator
public "doubleParallelStream"(): $DoubleStream
public "doubleSpliterator"(): $DoubleSpliterator
public "doubleStream"(): $DoubleStream
public "elements"(): float[]
public "ensureCapacity"(int0: integer): void
public "equals"(floatArrayList0: $FloatArrayList$$Type): boolean
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<float>): void
public "forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
public "getFloat"(int0: integer): float
/** @deprecated */
public "indexOf"(object0: any): integer
/** @deprecated */
public "lastIndexOf"(object0: any): integer
public static "of"(...float0s: float[]): $FloatArrayList
public static "of"(): $FloatArrayList
public static "of"(float0: float): $FloatList
public static "of"(float0: float, float1: float): $FloatList
public static "of"(float0: float, float1: float, float2: float): $FloatList
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
/** @deprecated */
public "parallelStream"(): $Stream<float>
/** @deprecated */
public "push"(float0: float): void
/** @deprecated */
public "remove"(object0: any): boolean
public "removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<float>): boolean
public "removeIf"(floatPredicate0: $FloatPredicate$$Type): boolean
public "replaceAll"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): void
/** @deprecated */
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<float>): void
public "replaceAll"(floatUnaryOperator0: $FloatUnaryOperator$$Type): void
/** @deprecated */
public "set"(int0: integer, float1: float): float
public "setElements"(float0s: float[]): void
public "setElements"(int0: integer, float1s: float[]): void
public "sort"(floatComparator0: $FloatComparator$$Type): void
/** @deprecated */
public "sort"(comparator0: $Comparator$$Type<float>): void
public "spliterator"(): $FloatSpliterator
/** @deprecated */
public "stream"(): $Stream<float>
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "trim"(int0: integer): void
public "trim"(): void
public "unstableSort"(floatComparator0: $FloatComparator$$Type): void
/** @deprecated */
public "unstableSort"(comparator0: $Comparator$$Type<float>): void
public static "wrap"(float0s: float[], int1: integer): $FloatArrayList
public static "wrap"(float0s: float[]): $FloatArrayList
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2FloatFunction" {
import { $Long2FloatFunction, $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Float2CharFunction, $Float2CharFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2FloatFunction, $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction, $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction, $Float2LongFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2FloatFunction, $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction, $Float2ByteFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction, $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function as $Function$0, $Function$$Type as $Function$0$$Type } from "java.util.function.Function"
import { $DoubleUnaryOperator, $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $Float2ShortFunction, $Float2ShortFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Reference2FloatFunction, $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Short2FloatFunction, $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction, $Float2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Float2IntFunction, $Float2IntFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction, $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Float2DoubleFunction, $Float2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction, $Float2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Float2FloatFunction extends $Function<float, float>, $DoubleUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$0$$Type<float, T>): $Function$0<float, T>
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"andThenByte"(float2ByteFunction0: $Float2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(float2CharFunction0: $Float2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(float2DoubleFunction0: $Float2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(float2IntFunction0: $Float2IntFunction$$Type): $Float2IntFunction
"andThenLong"(float2LongFunction0: $Float2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(float2ObjectFunction0: $Float2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(float2ReferenceFunction0: $Float2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(float2ShortFunction0: $Float2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): float
/** @deprecated */
"applyAsDouble"(double0: double): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$0$$Type<T, float>): $Function$0<T, float>
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2FloatFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2FloatFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2FloatFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2FloatFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2FloatFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2FloatFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2FloatFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2FloatFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2FloatFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(): float
"defaultReturnValue"(float0: float): void
"get"(float0: float): float
/** @deprecated */
"getOrDefault"(object0: any, float1: float): float
"getOrDefault"(float0: float, float1: float): float
"put"(float0: float, float1: float): float
/** @deprecated */
"put"(float0: float, float1: float): float
"remove"(float0: float): float
/** @deprecated */
"remove"(object0: any): float
"size"(): integer
}

export namespace $Float2FloatFunction {
function identity(): $Float2FloatFunction
}
export abstract class $Float2FloatFunction$$Static implements $Float2FloatFunction {
static "identity"(): $Float2FloatFunction
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2ObjectFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $DoubleFunction } from "java.util.function.DoubleFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Double2ObjectFunction } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Object2ObjectFunction, $Object2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Object2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Reference2ObjectFunction } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Byte2ObjectFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Short2ObjectFunction } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Object2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Long2ObjectFunction } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Object2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Char2ObjectFunction } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"
import { $Object2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Float2ObjectFunction<V = any> extends $Function$0<float, V>, $DoubleFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<float, V>
"andThenByte"(object2ByteFunction0: $Object2ByteFunction$$Type<V>): $Float2ByteFunction
"andThenChar"(object2CharFunction0: $Object2CharFunction$$Type<V>): $Float2CharFunction
"andThenDouble"(object2DoubleFunction0: $Object2DoubleFunction$$Type<V>): $Float2DoubleFunction
"andThenFloat"(object2FloatFunction0: $Object2FloatFunction$$Type<V>): $Float2FloatFunction
"andThenInt"(object2IntFunction0: $Object2IntFunction$$Type<V>): $Float2IntFunction
"andThenLong"(object2LongFunction0: $Object2LongFunction$$Type<V>): $Float2LongFunction
"andThenObject"<T>(object2ObjectFunction0: $Object2ObjectFunction$$Type<V, T>): $Float2ObjectFunction<T>
"andThenReference"<T>(object2ReferenceFunction0: $Object2ReferenceFunction$$Type<V, T>): $Float2ReferenceFunction<T>
"andThenShort"(object2ShortFunction0: $Object2ShortFunction$$Type<V>): $Float2ShortFunction
/** @deprecated */
"apply"(double0: double): V
"apply"(float0: float): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, V>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2ObjectFunction<V>
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2ObjectFunction<V>
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2ObjectFunction<V>
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2ObjectFunction<V>
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2ObjectFunction<V>
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2ObjectFunction<V>
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2ObjectFunction<T, V>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2ObjectFunction<T, V>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2ObjectFunction<V>
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
/** @deprecated */
"get"(object0: any): V
"get"(float0: float): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(float0: float, v1: V): V
/** @deprecated */
"put"(float0: float, v1: V): V
"put"(float0: float, v1: V): V
"remove"(float0: float): V
/** @deprecated */
"remove"(object0: any): V
"size"(): integer
}

export namespace $Float2ObjectFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2ObjectFunction$$Static<V = any> implements $Float2ObjectFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatUnaryOperator" {
import { $UnaryOperator } from "java.util.function.UnaryOperator"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $DoubleUnaryOperator, $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"

export interface $FloatUnaryOperator extends $UnaryOperator<float>, $DoubleUnaryOperator {
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"andThen"<V>(function0: $Function$$Type<float, V>): $Function<float, V>
/** @deprecated */
"apply"(float0: float): float
"apply"(float0: float): float
/** @deprecated */
"applyAsDouble"(double0: double): double
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"compose"<V>(function0: $Function$$Type<V, float>): $Function<V, float>
}

export namespace $FloatUnaryOperator {
function identity(): $FloatUnaryOperator
function negation(): $FloatUnaryOperator
}
export abstract class $FloatUnaryOperator$$Static implements $FloatUnaryOperator {
static "identity"(): $FloatUnaryOperator
static "negation"(): $FloatUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatList" {
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $FloatComparator$$Type } from "it.unimi.dsi.fastutil.floats.FloatComparator"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatCollection, $FloatCollection$$Type } from "it.unimi.dsi.fastutil.floats.FloatCollection"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $FloatUnaryOperator$$Type } from "it.unimi.dsi.fastutil.floats.FloatUnaryOperator"
import { $FloatPredicate$$Type } from "it.unimi.dsi.fastutil.floats.FloatPredicate"
import { $Comparable } from "java.lang.Comparable"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $Comparator$$Type } from "java.util.Comparator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $FloatList extends $List<float>, $Comparable<$List<float>>, $FloatCollection {
/** @deprecated */
"add"(int0: integer, float1: float): void
"add"(float0: float): boolean
"add"(int0: integer, float1: float): void
/** @deprecated */
"add"(float0: float): boolean
"addAll"(floatList0: $FloatList$$Type): boolean
"addAll"(int0: integer, floatCollection1: $FloatCollection$$Type): boolean
"addAll"(int0: integer, floatList1: $FloatList$$Type): boolean
"addAll"(int0: integer, collection1: $Collection$$Type<float>): boolean
"addAll"(collection0: $Collection$$Type<float>): boolean
"addAll"(floatCollection0: $FloatCollection$$Type): boolean
"addElements"(int0: integer, float1s: float[], int2: integer, int3: integer): void
"addElements"(int0: integer, float1s: float[]): void
"clear"(): void
"compareTo"(list0: $List$$Type<float>): integer
/** @deprecated */
"contains"(object0: any): boolean
"contains"(float0: float): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"containsAll"(floatCollection0: $FloatCollection$$Type): boolean
"doubleIterator"(): $DoubleIterator
"doubleParallelStream"(): $DoubleStream
"doubleSpliterator"(): $DoubleSpliterator
"doubleStream"(): $DoubleStream
"equals"(object0: any): boolean
"forEach"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<float>): void
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
"getElements"(int0: integer, float1s: float[], int2: integer, int3: integer): void
"getFloat"(int0: integer): float
"hashCode"(): integer
"indexOf"(float0: float): integer
/** @deprecated */
"indexOf"(object0: any): integer
"isEmpty"(): boolean
/** @deprecated */
"lastIndexOf"(object0: any): integer
"lastIndexOf"(float0: float): integer
/** @deprecated */
"parallelStream"(): $Stream<float>
"rem"(float0: float): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeAll"(floatCollection0: $FloatCollection$$Type): boolean
"removeElements"(int0: integer, int1: integer): void
"removeFloat"(int0: integer): float
"removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<float>): boolean
"removeIf"(floatPredicate0: $FloatPredicate$$Type): boolean
"replaceAll"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): void
/** @deprecated */
"replaceAll"(unaryOperator0: $UnaryOperator$$Type<float>): void
"replaceAll"(floatUnaryOperator0: $FloatUnaryOperator$$Type): void
"retainAll"(collection0: $Collection$$Type<any>): boolean
"retainAll"(floatCollection0: $FloatCollection$$Type): boolean
/** @deprecated */
"set"(int0: integer, float1: float): float
"set"(int0: integer, float1: float): float
"setElements"(int0: integer, float1s: float[], int2: integer, int3: integer): void
"setElements"(float0s: float[]): void
"setElements"(int0: integer, float1s: float[]): void
"size"(int0: integer): void
"size"(): integer
"sort"(floatComparator0: $FloatComparator$$Type): void
/** @deprecated */
"sort"(comparator0: $Comparator$$Type<float>): void
/** @deprecated */
"stream"(): $Stream<float>
"subList"(int0: integer, int1: integer): $FloatList
"toArray"(): any[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(float0s: float[]): float[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toFloatArray"(): float[]
/** @deprecated */
"toFloatArray"(float0s: float[]): float[]
"unstableSort"(floatComparator0: $FloatComparator$$Type): void
/** @deprecated */
"unstableSort"(comparator0: $Comparator$$Type<float>): void
get "empty"(): boolean
set "elements"(value: float[])
}

export namespace $FloatList {
function copyOf<E>(collection0: $Collection$$Type<E>): $List<E>
function of(...float0s: float[]): $FloatList
function of(float0: float): $FloatList
function of(float0: float, float1: float): $FloatList
function of(): $FloatList
function of(float0: float, float1: float, float2: float): $FloatList
function of<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
function of<E>(e0: E, e1: E, e2: E): $List<E>
function of<E>(e0: E, e1: E): $List<E>
function of<E>(e0: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
function of<E>(...e0s: E[]): $List<E>
function of<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
}
export abstract class $FloatList$$Static implements $FloatList {
static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
static "of"(...float0s: float[]): $FloatList
static "of"(float0: float): $FloatList
static "of"(float0: float, float1: float): $FloatList
static "of"(): $FloatList
static "of"(float0: float, float1: float, float2: float): $FloatList
static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E): $List<E>
static "of"<E>(e0: E, e1: E): $List<E>
static "of"<E>(e0: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
static "of"<E>(...e0s: E[]): $List<E>
static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatListIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $ListIterator } from "java.util.ListIterator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $FloatBidirectionalIterator } from "it.unimi.dsi.fastutil.floats.FloatBidirectionalIterator"

export interface $FloatListIterator extends $FloatBidirectionalIterator, $ListIterator<float> {
/** @deprecated */
"add"(float0: float): void
"add"(float0: float): void
"back"(int0: integer): integer
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<float>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"nextFloat"(): float
"nextIndex"(): integer
"previousFloat"(): float
"previousIndex"(): integer
"remove"(): void
/** @deprecated */
"set"(float0: float): void
"set"(float0: float): void
"skip"(int0: integer): integer
}

export namespace $FloatListIterator {
const probejs$$marker: never
}
export abstract class $FloatListIterator$$Static implements $FloatListIterator {
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction" {
import { $Double2ReferenceFunction } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Int2ReferenceFunction } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Short2ReferenceFunction } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $DoubleFunction } from "java.util.function.DoubleFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Reference2ByteFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Reference2LongFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Reference2IntFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Reference2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ObjectFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ReferenceFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Reference2ShortFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Reference2ReferenceFunction, $Reference2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2ReferenceFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Object2ReferenceFunction } from "it.unimi.dsi.fastutil.objects.Object2ReferenceFunction"
import { $Long2ReferenceFunction } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $Reference2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Reference2CharFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"

export interface $Float2ReferenceFunction<V = any> extends $Function$0<float, V>, $DoubleFunction<V> {
"andThen"<V>(function0: $Function$$Type<V, V>): $Function<float, V>
"andThenByte"(reference2ByteFunction0: $Reference2ByteFunction$$Type<V>): $Float2ByteFunction
"andThenChar"(reference2CharFunction0: $Reference2CharFunction$$Type<V>): $Float2CharFunction
"andThenDouble"(reference2DoubleFunction0: $Reference2DoubleFunction$$Type<V>): $Float2DoubleFunction
"andThenFloat"(reference2FloatFunction0: $Reference2FloatFunction$$Type<V>): $Float2FloatFunction
"andThenInt"(reference2IntFunction0: $Reference2IntFunction$$Type<V>): $Float2IntFunction
"andThenLong"(reference2LongFunction0: $Reference2LongFunction$$Type<V>): $Float2LongFunction
"andThenObject"<T>(reference2ObjectFunction0: $Reference2ObjectFunction$$Type<V, T>): $Float2ObjectFunction<T>
"andThenReference"<T>(reference2ReferenceFunction0: $Reference2ReferenceFunction$$Type<V, T>): $Float2ReferenceFunction<T>
"andThenShort"(reference2ShortFunction0: $Reference2ShortFunction$$Type<V>): $Float2ShortFunction
/** @deprecated */
"apply"(double0: double): V
"apply"(float0: float): V
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, V>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2ReferenceFunction<V>
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2ReferenceFunction<V>
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2ReferenceFunction<V>
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2ReferenceFunction<V>
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2ReferenceFunction<V>
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2ReferenceFunction<V>
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2ReferenceFunction<T, V>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2ReferenceFunction<T, V>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2ReferenceFunction<V>
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(): V
"defaultReturnValue"(v0: V): void
/** @deprecated */
"get"(object0: any): V
"get"(float0: float): V
/** @deprecated */
"getOrDefault"(object0: any, v1: V): V
"getOrDefault"(float0: float, v1: V): V
/** @deprecated */
"put"(float0: float, v1: V): V
"put"(float0: float, v1: V): V
"remove"(float0: float): V
/** @deprecated */
"remove"(object0: any): V
"size"(): integer
}

export namespace $Float2ReferenceFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2ReferenceFunction$$Static<V = any> implements $Float2ReferenceFunction<V> {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatSpliterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatConsumer, $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $Spliterator$OfPrimitive } from "java.util.Spliterator$OfPrimitive"

export interface $FloatSpliterator extends $Spliterator$OfPrimitive<float, $FloatConsumer, $FloatSpliterator> {
"characteristics"(): integer
"estimateSize"(): long
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<float>): void
"forEachRemaining"(floatConsumer0: $FloatConsumer$$Type): void
"getExactSizeIfKnown"(): long
"hasCharacteristics"(int0: integer): boolean
"skip"(long0: long): long
/** @deprecated */
"tryAdvance"(consumer0: $Consumer$$Type<float>): boolean
"tryAdvance"(floatConsumer0: $FloatConsumer$$Type): boolean
get "exactSizeIfKnown"(): long
}

export namespace $FloatSpliterator {
const probejs$$marker: never
}
export abstract class $FloatSpliterator$$Static implements $FloatSpliterator {
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2IntFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Int2ByteFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Int2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ReferenceFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Int2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Int2IntFunction, $Int2IntFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Object2IntFunction } from "it.unimi.dsi.fastutil.objects.Object2IntFunction"
import { $Reference2IntFunction } from "it.unimi.dsi.fastutil.objects.Reference2IntFunction"
import { $Long2IntFunction } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Short2IntFunction } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Int2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2ObjectFunction"
import { $Char2IntFunction } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Int2LongFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"
import { $Int2CharFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Byte2IntFunction } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Float2IntFunction extends $Function$0<float, integer>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<integer, T>): $Function<float, T>
"andThenByte"(int2ByteFunction0: $Int2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(int2CharFunction0: $Int2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(int2DoubleFunction0: $Int2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(int2FloatFunction0: $Int2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(int2IntFunction0: $Int2IntFunction$$Type): $Float2IntFunction
"andThenLong"(int2LongFunction0: $Int2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(int2ObjectFunction0: $Int2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(int2ReferenceFunction0: $Int2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(int2ShortFunction0: $Int2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): integer
/** @deprecated */
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, integer>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2IntFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2IntFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2IntFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2IntFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2IntFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2IntFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2IntFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2IntFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2IntFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(int0: integer): void
"defaultReturnValue"(): integer
/** @deprecated */
"get"(object0: any): integer
"get"(float0: float): integer
/** @deprecated */
"getOrDefault"(object0: any, integer1: integer): integer
"getOrDefault"(float0: float, int1: integer): integer
"put"(float0: float, int1: integer): integer
/** @deprecated */
"put"(float0: float, integer1: integer): integer
"remove"(float0: float): integer
/** @deprecated */
"remove"(object0: any): integer
"size"(): integer
}

export namespace $Float2IntFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2IntFunction$$Static implements $Float2IntFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatPredicate" {
import { $Predicate, $Predicate$$Type } from "java.util.function.Predicate"
import { $DoublePredicate, $DoublePredicate$$Type } from "java.util.function.DoublePredicate"

export interface $FloatPredicate extends $Predicate<float>, $DoublePredicate {
"and"(floatPredicate0: $FloatPredicate$$Type): $FloatPredicate
/** @deprecated */
"and"(predicate0: $Predicate$$Type<float>): $Predicate<float>
"negate"(): $FloatPredicate
"or"(floatPredicate0: $FloatPredicate$$Type): $FloatPredicate
"or"(doublePredicate0: $DoublePredicate$$Type): $FloatPredicate
/** @deprecated */
"or"(predicate0: $Predicate$$Type<float>): $Predicate<float>
/** @deprecated */
"test"(float0: float): boolean
"test"(float0: float): boolean
/** @deprecated */
"test"(double0: double): boolean
}

export namespace $FloatPredicate {
function isEqual<T>(object0: any): $Predicate<T>
function not<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
export abstract class $FloatPredicate$$Static implements $FloatPredicate {
static "isEqual"<T>(object0: any): $Predicate<T>
static "not"<T>(predicate0: $Predicate$$Type<T>): $Predicate<T>
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2ByteFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Byte2LongFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Int2ByteFunction } from "it.unimi.dsi.fastutil.ints.Int2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Double2ByteFunction } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Reference2ByteFunction } from "it.unimi.dsi.fastutil.objects.Reference2ByteFunction"
import { $Byte2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Byte2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ObjectFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ReferenceFunction"
import { $Char2ByteFunction } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Object2ByteFunction } from "it.unimi.dsi.fastutil.objects.Object2ByteFunction"
import { $Byte2ShortFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Byte2CharFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Byte2ByteFunction, $Byte2ByteFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2ByteFunction"
import { $Byte2IntFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2IntFunction"

export interface $Float2ByteFunction extends $Function$0<float, byte>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<byte, T>): $Function<float, T>
"andThenByte"(byte2ByteFunction0: $Byte2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(byte2CharFunction0: $Byte2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(byte2DoubleFunction0: $Byte2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(byte2IntFunction0: $Byte2IntFunction$$Type): $Float2IntFunction
"andThenLong"(byte2LongFunction0: $Byte2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(byte2ObjectFunction0: $Byte2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(byte2ReferenceFunction0: $Byte2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(byte2ShortFunction0: $Byte2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): byte
/** @deprecated */
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, byte>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2ByteFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2ByteFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2ByteFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2ByteFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2ByteFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2ByteFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2ByteFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2ByteFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2ByteFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(byte0: byte): void
"defaultReturnValue"(): byte
/** @deprecated */
"get"(object0: any): byte
"get"(float0: float): byte
/** @deprecated */
"getOrDefault"(object0: any, byte1: byte): byte
"getOrDefault"(float0: float, byte1: byte): byte
"put"(float0: float, byte1: byte): byte
/** @deprecated */
"put"(float0: float, byte1: byte): byte
"remove"(float0: float): byte
/** @deprecated */
"remove"(object0: any): byte
"size"(): integer
}

export namespace $Float2ByteFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2ByteFunction$$Static implements $Float2ByteFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatStack" {
import { $Stack } from "it.unimi.dsi.fastutil.Stack"

export interface $FloatStack extends $Stack<float> {
"isEmpty"(): boolean
"peekFloat"(int0: integer): float
"popFloat"(): float
/** @deprecated */
"push"(float0: float): void
"push"(float0: float): void
"topFloat"(): float
get "empty"(): boolean
}

export namespace $FloatStack {
const probejs$$marker: never
}
export abstract class $FloatStack$$Static implements $FloatStack {
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2LongFunction" {
import { $Long2ShortFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2LongFunction } from "it.unimi.dsi.fastutil.bytes.Byte2LongFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Object2LongFunction } from "it.unimi.dsi.fastutil.objects.Object2LongFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Long2CharFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Reference2LongFunction } from "it.unimi.dsi.fastutil.objects.Reference2LongFunction"
import { $Short2LongFunction } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Long2IntFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Long2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ObjectFunction"
import { $Long2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Int2LongFunction } from "it.unimi.dsi.fastutil.ints.Int2LongFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Long2LongFunction, $Long2LongFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2LongFunction"
import { $Double2LongFunction } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Long2ByteFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ByteFunction"
import { $Long2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2ReferenceFunction"
import { $DoubleToLongFunction } from "java.util.function.DoubleToLongFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"

export interface $Float2LongFunction extends $Function$0<float, long>, $DoubleToLongFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<long, T>): $Function<float, T>
"andThenByte"(long2ByteFunction0: $Long2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(long2CharFunction0: $Long2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(long2DoubleFunction0: $Long2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(long2FloatFunction0: $Long2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(long2IntFunction0: $Long2IntFunction$$Type): $Float2IntFunction
"andThenLong"(long2LongFunction0: $Long2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(long2ObjectFunction0: $Long2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(long2ReferenceFunction0: $Long2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(long2ShortFunction0: $Long2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): long
/** @deprecated */
"applyAsLong"(double0: double): long
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, long>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2LongFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2LongFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2LongFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2LongFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2LongFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2LongFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2LongFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2LongFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2LongFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(long0: long): void
"defaultReturnValue"(): long
/** @deprecated */
"get"(object0: any): long
"get"(float0: float): long
/** @deprecated */
"getOrDefault"(object0: any, long1: long): long
"getOrDefault"(float0: float, long1: long): long
"put"(float0: float, long1: long): long
/** @deprecated */
"put"(float0: float, long1: long): long
"remove"(float0: float): long
/** @deprecated */
"remove"(object0: any): long
"size"(): integer
}

export namespace $Float2LongFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2LongFunction$$Static implements $Float2LongFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatBidirectionalIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $FloatIterator } from "it.unimi.dsi.fastutil.floats.FloatIterator"
import { $ObjectBidirectionalIterator } from "it.unimi.dsi.fastutil.objects.ObjectBidirectionalIterator"

export interface $FloatBidirectionalIterator extends $FloatIterator, $ObjectBidirectionalIterator<float> {
"back"(int0: integer): integer
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<float>): void
"hasNext"(): boolean
"hasPrevious"(): boolean
"nextFloat"(): float
/** @deprecated */
"previous"(): float
"previousFloat"(): float
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $FloatBidirectionalIterator {
const probejs$$marker: never
}
export abstract class $FloatBidirectionalIterator$$Static implements $FloatBidirectionalIterator {
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatCollection" {
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $FloatIterable } from "it.unimi.dsi.fastutil.floats.FloatIterable"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $FloatIterator } from "it.unimi.dsi.fastutil.floats.FloatIterator"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $FloatSpliterator } from "it.unimi.dsi.fastutil.floats.FloatSpliterator"
import { $FloatPredicate$$Type } from "it.unimi.dsi.fastutil.floats.FloatPredicate"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export interface $FloatCollection extends $Collection<float>, $FloatIterable {
/** @deprecated */
"add"(float0: float): boolean
"add"(float0: float): boolean
"addAll"(floatCollection0: $FloatCollection$$Type): boolean
"addAll"(collection0: $Collection$$Type<float>): boolean
"clear"(): void
/** @deprecated */
"contains"(object0: any): boolean
"contains"(float0: float): boolean
"containsAll"(floatCollection0: $FloatCollection$$Type): boolean
"containsAll"(collection0: $Collection$$Type<any>): boolean
"doubleIterator"(): $DoubleIterator
"doubleParallelStream"(): $DoubleStream
"doubleSpliterator"(): $DoubleSpliterator
"doubleStream"(): $DoubleStream
"equals"(object0: any): boolean
"forEach"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<float>): void
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
"hashCode"(): integer
"isEmpty"(): boolean
"iterator"(): $FloatIterator
/** @deprecated */
"parallelStream"(): $Stream<float>
"rem"(float0: float): boolean
/** @deprecated */
"remove"(object0: any): boolean
"removeAll"(floatCollection0: $FloatCollection$$Type): boolean
"removeAll"(collection0: $Collection$$Type<any>): boolean
"removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
"removeIf"(predicate0: $Predicate$$Type<float>): boolean
"removeIf"(floatPredicate0: $FloatPredicate$$Type): boolean
"retainAll"(floatCollection0: $FloatCollection$$Type): boolean
"retainAll"(collection0: $Collection$$Type<any>): boolean
"size"(): integer
"spliterator"(): $FloatSpliterator
/** @deprecated */
"stream"(): $Stream<float>
"toArray"(float0s: float[]): float[]
"toArray"<T>(t0s: T[]): T[]
"toArray"(): any[]
"toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
"toFloatArray"(): float[]
/** @deprecated */
"toFloatArray"(float0s: float[]): float[]
get "empty"(): boolean
}

export namespace $FloatCollection {
const probejs$$marker: never
}
export abstract class $FloatCollection$$Static implements $FloatCollection {
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatConsumer" {
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $DoubleConsumer } from "java.util.function.DoubleConsumer"

export interface $FloatConsumer extends $Consumer<float>, $DoubleConsumer {
/** @deprecated */
"accept"(float0: float): void
/** @deprecated */
"accept"(double0: double): void
"accept"(float0: float): void
/** @deprecated */
"andThen"(consumer0: $Consumer$$Type<float>): $Consumer<float>
"andThen"(floatConsumer0: $FloatConsumer$$Type): $FloatConsumer
}

export namespace $FloatConsumer {
const probejs$$marker: never
}
export abstract class $FloatConsumer$$Static implements $FloatConsumer {
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2BooleanFunction" {
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Double2BooleanFunction } from "it.unimi.dsi.fastutil.doubles.Double2BooleanFunction"
import { $Byte2BooleanFunction } from "it.unimi.dsi.fastutil.bytes.Byte2BooleanFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Boolean2LongFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2LongFunction"
import { $Boolean2IntFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2IntFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Boolean2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ObjectFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Short2BooleanFunction } from "it.unimi.dsi.fastutil.shorts.Short2BooleanFunction"
import { $Boolean2CharFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2CharFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Int2BooleanFunction } from "it.unimi.dsi.fastutil.ints.Int2BooleanFunction"
import { $Boolean2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2DoubleFunction"
import { $Boolean2ShortFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ShortFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2BooleanFunction } from "it.unimi.dsi.fastutil.longs.Long2BooleanFunction"
import { $Boolean2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ReferenceFunction"
import { $Char2BooleanFunction } from "it.unimi.dsi.fastutil.chars.Char2BooleanFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Reference2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Reference2BooleanFunction"
import { $Boolean2ByteFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2ByteFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $DoublePredicate, $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2BooleanFunction } from "it.unimi.dsi.fastutil.objects.Object2BooleanFunction"
import { $Boolean2FloatFunction$$Type } from "it.unimi.dsi.fastutil.booleans.Boolean2FloatFunction"

export interface $Float2BooleanFunction extends $Function$0<float, boolean>, $DoublePredicate {
"and"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<boolean, T>): $Function<float, T>
"andThenByte"(boolean2ByteFunction0: $Boolean2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(boolean2CharFunction0: $Boolean2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(boolean2DoubleFunction0: $Boolean2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(boolean2FloatFunction0: $Boolean2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(boolean2IntFunction0: $Boolean2IntFunction$$Type): $Float2IntFunction
"andThenLong"(boolean2LongFunction0: $Boolean2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(boolean2ObjectFunction0: $Boolean2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(boolean2ReferenceFunction0: $Boolean2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(boolean2ShortFunction0: $Boolean2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): boolean
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, boolean>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2BooleanFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2BooleanFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2BooleanFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2BooleanFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2BooleanFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2BooleanFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2BooleanFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2BooleanFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2BooleanFunction
"containsKey"(float0: float): boolean
/** @deprecated */
"containsKey"(object0: any): boolean
"defaultReturnValue"(boolean0: boolean): void
"defaultReturnValue"(): boolean
/** @deprecated */
"get"(object0: any): boolean
"get"(float0: float): boolean
/** @deprecated */
"getOrDefault"(object0: any, boolean1: boolean): boolean
"getOrDefault"(float0: float, boolean1: boolean): boolean
"negate"(): $DoublePredicate
"or"(doublePredicate0: $DoublePredicate$$Type): $DoublePredicate
/** @deprecated */
"put"(float0: float, boolean1: boolean): boolean
"put"(float0: float, boolean1: boolean): boolean
"remove"(float0: float): boolean
"size"(): integer
/** @deprecated */
"test"(double0: double): boolean
}

export namespace $Float2BooleanFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2BooleanFunction$$Static implements $Float2BooleanFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatIterable" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $Iterable } from "java.lang.Iterable"

export interface $FloatIterable extends $Iterable<float> {
"doubleIterator"(): $DoubleIterator
"doubleSpliterator"(): $DoubleSpliterator
"forEach"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
"forEach"(consumer0: $Consumer$$Type<float>): void
"forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
}

export namespace $FloatIterable {
const probejs$$marker: never
}
export abstract class $FloatIterable$$Static implements $FloatIterable {
}
}

declare module "it.unimi.dsi.fastutil.floats.AbstractFloatList" {
import { $FloatList, $FloatList$$Type } from "it.unimi.dsi.fastutil.floats.FloatList"
import { $AbstractFloatCollection } from "it.unimi.dsi.fastutil.floats.AbstractFloatCollection"
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Collection$$Type } from "java.util.Collection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $FloatComparator$$Type } from "it.unimi.dsi.fastutil.floats.FloatComparator"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatCollection$$Type } from "it.unimi.dsi.fastutil.floats.FloatCollection"
import { $List, $List$$Type } from "java.util.List"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $FloatListIterator } from "it.unimi.dsi.fastutil.floats.FloatListIterator"
import { $FloatUnaryOperator$$Type } from "it.unimi.dsi.fastutil.floats.FloatUnaryOperator"
import { $FloatPredicate$$Type } from "it.unimi.dsi.fastutil.floats.FloatPredicate"
import { $FloatStack } from "it.unimi.dsi.fastutil.floats.FloatStack"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $Comparator$$Type } from "java.util.Comparator"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractFloatList extends $AbstractFloatCollection implements $FloatList, $FloatStack {
public "add"(int0: integer, float1: float): void
/** @deprecated */
public "add"(int0: integer, float1: float): void
/** @deprecated */
public "add"(float0: float): boolean
public "addAll"(int0: integer, floatCollection1: $FloatCollection$$Type): boolean
public "addAll"(int0: integer, collection1: $Collection$$Type<float>): boolean
public "addAll"(floatList0: $FloatList$$Type): boolean
public "addAll"(int0: integer, floatList1: $FloatList$$Type): boolean
public "addElements"(int0: integer, float1s: float[], int2: integer, int3: integer): void
public "addElements"(int0: integer, float1s: float[]): void
public "compareTo"(list0: $List$$Type<float>): integer
/** @deprecated */
public "contains"(object0: any): boolean
public static "copyOf"<E>(collection0: $Collection$$Type<E>): $List<E>
public "doubleIterator"(): $DoubleIterator
public "doubleParallelStream"(): $DoubleStream
public "doubleSpliterator"(): $DoubleSpliterator
public "doubleStream"(): $DoubleStream
public "forEach"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<float>): void
public "forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
public "getElements"(int0: integer, float1s: float[], int2: integer, int3: integer): void
public "getFloat"(int0: integer): float
public "indexOf"(float0: float): integer
/** @deprecated */
public "indexOf"(object0: any): integer
public "isEmpty"(): boolean
public "lastIndexOf"(float0: float): integer
/** @deprecated */
public "lastIndexOf"(object0: any): integer
public "listIterator"(): $FloatListIterator
public static "of"(...float0s: float[]): $FloatList
public static "of"(float0: float): $FloatList
public static "of"(float0: float, float1: float): $FloatList
public static "of"(): $FloatList
public static "of"(float0: float, float1: float, float2: float): $FloatList
public static "of"<E>(e0: E, e1: E, e2: E, e3: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E): $List<E>
public static "of"<E>(e0: E, e1: E): $List<E>
public static "of"<E>(e0: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E): $List<E>
public static "of"<E>(...e0s: E[]): $List<E>
public static "of"<E>(e0: E, e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, e7: E, e8: E, e9: E): $List<E>
/** @deprecated */
public "parallelStream"(): $Stream<float>
public "peekFloat"(int0: integer): float
public "popFloat"(): float
public "push"(float0: float): void
/** @deprecated */
public "push"(float0: float): void
/** @deprecated */
public "remove"(object0: any): boolean
public "removeElements"(int0: integer, int1: integer): void
public "removeFloat"(int0: integer): float
public "removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<float>): boolean
public "removeIf"(floatPredicate0: $FloatPredicate$$Type): boolean
public "replaceAll"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): void
/** @deprecated */
public "replaceAll"(unaryOperator0: $UnaryOperator$$Type<float>): void
public "replaceAll"(floatUnaryOperator0: $FloatUnaryOperator$$Type): void
public "set"(int0: integer, float1: float): float
/** @deprecated */
public "set"(int0: integer, float1: float): float
public "setElements"(int0: integer, float1s: float[], int2: integer, int3: integer): void
public "setElements"(float0s: float[]): void
public "setElements"(int0: integer, float1s: float[]): void
public "size"(int0: integer): void
public "size"(): integer
public "sort"(floatComparator0: $FloatComparator$$Type): void
/** @deprecated */
public "sort"(comparator0: $Comparator$$Type<float>): void
/** @deprecated */
public "stream"(): $Stream<float>
public "subList"(int0: integer, int1: integer): $FloatList
public "toArray"(): any[]
public "toArray"<T>(t0s: T[]): T[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
public "topFloat"(): float
public "unstableSort"(floatComparator0: $FloatComparator$$Type): void
/** @deprecated */
public "unstableSort"(comparator0: $Comparator$$Type<float>): void
get "empty"(): boolean
set "elements"(value: float[])
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatIterator" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PrimitiveIterator } from "java.util.PrimitiveIterator"
import { $FloatConsumer, $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"

export interface $FloatIterator extends $PrimitiveIterator<float, $FloatConsumer> {
"forEachRemaining"(doubleConsumer0: $DoubleConsumer$$Type): void
"forEachRemaining"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
"forEachRemaining"(consumer0: $Consumer$$Type<float>): void
"hasNext"(): boolean
"nextFloat"(): float
"remove"(): void
"skip"(int0: integer): integer
}

export namespace $FloatIterator {
const probejs$$marker: never
}
export abstract class $FloatIterator$$Static implements $FloatIterator {
}
}

declare module "it.unimi.dsi.fastutil.floats.AbstractFloatCollection" {
import { $FloatConsumer$$Type } from "it.unimi.dsi.fastutil.floats.FloatConsumer"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $DoubleSpliterator } from "it.unimi.dsi.fastutil.doubles.DoubleSpliterator"
import { $DoubleConsumer$$Type } from "java.util.function.DoubleConsumer"
import { $DoubleStream } from "java.util.stream.DoubleStream"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $FloatCollection, $FloatCollection$$Type } from "it.unimi.dsi.fastutil.floats.FloatCollection"
import { $AbstractCollection } from "java.util.AbstractCollection"
import { $Stream } from "java.util.stream.Stream"
import { $DoubleIterator } from "it.unimi.dsi.fastutil.doubles.DoubleIterator"
import { $FloatSpliterator } from "it.unimi.dsi.fastutil.floats.FloatSpliterator"
import { $FloatPredicate$$Type } from "it.unimi.dsi.fastutil.floats.FloatPredicate"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $IntFunction$$Type } from "java.util.function.IntFunction"

export class $AbstractFloatCollection extends $AbstractCollection<float> implements $FloatCollection {
/** @deprecated */
public "add"(float0: float): boolean
public "add"(float0: float): boolean
public "addAll"(floatCollection0: $FloatCollection$$Type): boolean
public "contains"(float0: float): boolean
public "containsAll"(floatCollection0: $FloatCollection$$Type): boolean
public "doubleIterator"(): $DoubleIterator
public "doubleParallelStream"(): $DoubleStream
public "doubleSpliterator"(): $DoubleSpliterator
public "doubleStream"(): $DoubleStream
public "equals"(object0: any): boolean
public "forEach"(floatConsumer0: $FloatConsumer$$Type): void
/** @deprecated */
public "forEach"(consumer0: $Consumer$$Type<float>): void
public "forEach"(doubleConsumer0: $DoubleConsumer$$Type): void
public "hashCode"(): integer
/** @deprecated */
public "parallelStream"(): $Stream<float>
public "rem"(float0: float): boolean
public "removeAll"(floatCollection0: $FloatCollection$$Type): boolean
public "removeIf"(doublePredicate0: $DoublePredicate$$Type): boolean
/** @deprecated */
public "removeIf"(predicate0: $Predicate$$Type<float>): boolean
public "removeIf"(floatPredicate0: $FloatPredicate$$Type): boolean
public "retainAll"(floatCollection0: $FloatCollection$$Type): boolean
public "spliterator"(): $FloatSpliterator
/** @deprecated */
public "stream"(): $Stream<float>
public "toArray"(float0s: float[]): float[]
public "toArray"<T>(intFunction0: $IntFunction$$Type<T[]>): T[]
/** @deprecated */
public "toFloatArray"(float0s: float[]): float[]
public "toFloatArray"(): float[]
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatComparator" {
import { $ToDoubleFunction$$Type } from "java.util.function.ToDoubleFunction"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Comparator, $Comparator$$Type } from "java.util.Comparator"
import { $ToLongFunction$$Type } from "java.util.function.ToLongFunction"
import { $Function$$Type } from "java.util.function.Function"

export interface $FloatComparator extends $Comparator<float> {
/** @deprecated */
"compare"(float0: float, float1: float): integer
"compare"(float0: float, float1: float): integer
"equals"(object0: any): boolean
"reversed"(): $FloatComparator
"thenComparing"(comparator0: $Comparator$$Type<float>): $Comparator<float>
"thenComparing"(floatComparator0: $FloatComparator$$Type): $FloatComparator
"thenComparing"<U>(function0: $Function$$Type<float, U>, comparator1: $Comparator$$Type<U>): $Comparator<float>
"thenComparing"<U extends $Comparable<U>>(function0: $Function$$Type<float, U>): $Comparator<float>
"thenComparingDouble"(toDoubleFunction0: $ToDoubleFunction$$Type<float>): $Comparator<float>
"thenComparingInt"(toIntFunction0: $ToIntFunction$$Type<float>): $Comparator<float>
"thenComparingLong"(toLongFunction0: $ToLongFunction$$Type<float>): $Comparator<float>
}

export namespace $FloatComparator {
function comparing<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
function comparing<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
function comparingDouble<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
function comparingInt<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
function comparingLong<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
function naturalOrder<T extends $Comparable<T>>(): $Comparator<T>
function nullsFirst<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function nullsLast<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
function reverseOrder<T extends $Comparable<T>>(): $Comparator<T>
}
export abstract class $FloatComparator$$Static implements $FloatComparator {
static "comparing"<T, U extends $Comparable<U>>(function0: $Function$$Type<T, U>): $Comparator<T>
static "comparing"<T, U>(function0: $Function$$Type<T, U>, comparator1: $Comparator$$Type<U>): $Comparator<T>
static "comparingDouble"<T>(toDoubleFunction0: $ToDoubleFunction$$Type<T>): $Comparator<T>
static "comparingInt"<T>(toIntFunction0: $ToIntFunction$$Type<T>): $Comparator<T>
static "comparingLong"<T>(toLongFunction0: $ToLongFunction$$Type<T>): $Comparator<T>
static "naturalOrder"<T extends $Comparable<T>>(): $Comparator<T>
static "nullsFirst"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "nullsLast"<T>(comparator0: $Comparator$$Type<T>): $Comparator<T>
static "reverseOrder"<T extends $Comparable<T>>(): $Comparator<T>
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2DoubleFunction" {
import { $Double2ShortFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Double2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ReferenceFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Double2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ObjectFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $DoubleUnaryOperator, $DoubleUnaryOperator$$Type } from "java.util.function.DoubleUnaryOperator"
import { $Int2DoubleFunction } from "it.unimi.dsi.fastutil.ints.Int2DoubleFunction"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Double2ByteFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2ByteFunction"
import { $Object2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Object2DoubleFunction"
import { $Short2DoubleFunction } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Byte2DoubleFunction } from "it.unimi.dsi.fastutil.bytes.Byte2DoubleFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2DoubleFunction, $Double2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Long2DoubleFunction } from "it.unimi.dsi.fastutil.longs.Long2DoubleFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Double2LongFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2LongFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Reference2DoubleFunction } from "it.unimi.dsi.fastutil.objects.Reference2DoubleFunction"
import { $Char2DoubleFunction } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Double2IntFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2IntFunction"

export interface $Float2DoubleFunction extends $Function$0<float, double>, $DoubleUnaryOperator {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<double, T>): $Function<float, T>
"andThen"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"andThenByte"(double2ByteFunction0: $Double2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(double2CharFunction0: $Double2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(double2DoubleFunction0: $Double2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(double2FloatFunction0: $Double2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(double2IntFunction0: $Double2IntFunction$$Type): $Float2IntFunction
"andThenLong"(double2LongFunction0: $Double2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(double2ObjectFunction0: $Double2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(double2ReferenceFunction0: $Double2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(double2ShortFunction0: $Double2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): double
/** @deprecated */
"applyAsDouble"(double0: double): double
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, double>
"compose"(doubleUnaryOperator0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2DoubleFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2DoubleFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2DoubleFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2DoubleFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2DoubleFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2DoubleFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2DoubleFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2DoubleFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2DoubleFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(double0: double): void
"defaultReturnValue"(): double
/** @deprecated */
"get"(object0: any): double
"get"(float0: float): double
/** @deprecated */
"getOrDefault"(object0: any, double1: double): double
"getOrDefault"(float0: float, double1: double): double
"put"(float0: float, double1: double): double
/** @deprecated */
"put"(float0: float, double1: double): double
"remove"(float0: float): double
/** @deprecated */
"remove"(object0: any): double
"size"(): integer
}

export namespace $Float2DoubleFunction {
function identity(): $DoubleUnaryOperator
}
export abstract class $Float2DoubleFunction$$Static implements $Float2DoubleFunction {
static "identity"(): $DoubleUnaryOperator
}
}

declare module "it.unimi.dsi.fastutil.floats.FloatBinaryOperator" {
import { $DoubleBinaryOperator } from "java.util.function.DoubleBinaryOperator"
import { $BiFunction } from "java.util.function.BiFunction"
import { $Comparator$$Type } from "java.util.Comparator"
import { $Function$$Type } from "java.util.function.Function"
import { $BinaryOperator } from "java.util.function.BinaryOperator"

export interface $FloatBinaryOperator extends $BinaryOperator<float>, $DoubleBinaryOperator {
"andThen"<V>(function0: $Function$$Type<float, V>): $BiFunction<float, float, V>
/** @deprecated */
"apply"(float0: float, float1: float): float
"apply"(float0: float, float1: float): float
/** @deprecated */
"applyAsDouble"(double0: double, double1: double): double
}

export namespace $FloatBinaryOperator {
function maxBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
function minBy<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
export abstract class $FloatBinaryOperator$$Static implements $FloatBinaryOperator {
static "maxBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
static "minBy"<T>(comparator0: $Comparator$$Type<T>): $BinaryOperator<T>
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2CharFunction" {
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Char2LongFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2LongFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Char2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ReferenceFunction"
import { $Long2CharFunction } from "it.unimi.dsi.fastutil.longs.Long2CharFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Char2CharFunction, $Char2CharFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2CharFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Char2ByteFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ByteFunction"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Char2IntFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2IntFunction"
import { $Byte2CharFunction } from "it.unimi.dsi.fastutil.bytes.Byte2CharFunction"
import { $Char2ShortFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Float2ShortFunction } from "it.unimi.dsi.fastutil.floats.Float2ShortFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Double2CharFunction } from "it.unimi.dsi.fastutil.doubles.Double2CharFunction"
import { $Char2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2ObjectFunction"
import { $Reference2CharFunction } from "it.unimi.dsi.fastutil.objects.Reference2CharFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Char2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Int2CharFunction } from "it.unimi.dsi.fastutil.ints.Int2CharFunction"
import { $Object2CharFunction } from "it.unimi.dsi.fastutil.objects.Object2CharFunction"

export interface $Float2CharFunction extends $Function$0<float, character>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<character, T>): $Function<float, T>
"andThenByte"(char2ByteFunction0: $Char2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(char2CharFunction0: $Char2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(char2DoubleFunction0: $Char2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(char2FloatFunction0: $Char2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(char2IntFunction0: $Char2IntFunction$$Type): $Float2IntFunction
"andThenLong"(char2LongFunction0: $Char2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(char2ObjectFunction0: $Char2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(char2ReferenceFunction0: $Char2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(char2ShortFunction0: $Char2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): character
/** @deprecated */
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, character>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2CharFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2CharFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2CharFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2CharFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2CharFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2CharFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2CharFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2CharFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2CharFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(char0: character): void
"defaultReturnValue"(): character
/** @deprecated */
"get"(object0: any): character
"get"(float0: float): character
/** @deprecated */
"getOrDefault"(object0: any, character1: character): character
"getOrDefault"(float0: float, char1: character): character
"put"(float0: float, char1: character): character
/** @deprecated */
"put"(float0: float, character1: character): character
"remove"(float0: float): character
/** @deprecated */
"remove"(object0: any): character
"size"(): integer
}

export namespace $Float2CharFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2CharFunction$$Static implements $Float2CharFunction {
static "identity"<T>(): $Function<T, T>
}
}

declare module "it.unimi.dsi.fastutil.floats.Float2ShortFunction" {
import { $Double2ShortFunction } from "it.unimi.dsi.fastutil.doubles.Double2ShortFunction"
import { $Long2ShortFunction } from "it.unimi.dsi.fastutil.longs.Long2ShortFunction"
import { $Float2CharFunction } from "it.unimi.dsi.fastutil.floats.Float2CharFunction"
import { $Int2ShortFunction } from "it.unimi.dsi.fastutil.ints.Int2ShortFunction"
import { $Byte2FloatFunction$$Type } from "it.unimi.dsi.fastutil.bytes.Byte2FloatFunction"
import { $Short2ReferenceFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ReferenceFunction"
import { $Float2ByteFunction } from "it.unimi.dsi.fastutil.floats.Float2ByteFunction"
import { $Char2FloatFunction$$Type } from "it.unimi.dsi.fastutil.chars.Char2FloatFunction"
import { $Function, $Function$$Type } from "java.util.function.Function"
import { $Short2ShortFunction, $Short2ShortFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ShortFunction"
import { $Reference2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Reference2FloatFunction"
import { $Short2DoubleFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2DoubleFunction"
import { $Float2FloatFunction, $Float2FloatFunction$$Type } from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import { $Float2IntFunction } from "it.unimi.dsi.fastutil.floats.Float2IntFunction"
import { $Object2FloatFunction$$Type } from "it.unimi.dsi.fastutil.objects.Object2FloatFunction"
import { $Short2ByteFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ByteFunction"
import { $Short2LongFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2LongFunction"
import { $Short2IntFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2IntFunction"
import { $Long2FloatFunction$$Type } from "it.unimi.dsi.fastutil.longs.Long2FloatFunction"
import { $Int2FloatFunction$$Type } from "it.unimi.dsi.fastutil.ints.Int2FloatFunction"
import { $Double2FloatFunction$$Type } from "it.unimi.dsi.fastutil.doubles.Double2FloatFunction"
import { $Short2ObjectFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2ObjectFunction"
import { $Function as $Function$0 } from "it.unimi.dsi.fastutil.Function"
import { $Float2LongFunction } from "it.unimi.dsi.fastutil.floats.Float2LongFunction"
import { $Byte2ShortFunction } from "it.unimi.dsi.fastutil.bytes.Byte2ShortFunction"
import { $Reference2ShortFunction } from "it.unimi.dsi.fastutil.objects.Reference2ShortFunction"
import { $Char2ShortFunction } from "it.unimi.dsi.fastutil.chars.Char2ShortFunction"
import { $Short2CharFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2CharFunction"
import { $DoubleToIntFunction } from "java.util.function.DoubleToIntFunction"
import { $Short2FloatFunction$$Type } from "it.unimi.dsi.fastutil.shorts.Short2FloatFunction"
import { $Float2ObjectFunction } from "it.unimi.dsi.fastutil.floats.Float2ObjectFunction"
import { $Float2DoubleFunction } from "it.unimi.dsi.fastutil.floats.Float2DoubleFunction"
import { $Float2ReferenceFunction } from "it.unimi.dsi.fastutil.floats.Float2ReferenceFunction"
import { $Object2ShortFunction } from "it.unimi.dsi.fastutil.objects.Object2ShortFunction"

export interface $Float2ShortFunction extends $Function$0<float, short>, $DoubleToIntFunction {
/** @deprecated */
"andThen"<T>(function0: $Function$$Type<short, T>): $Function<float, T>
"andThenByte"(short2ByteFunction0: $Short2ByteFunction$$Type): $Float2ByteFunction
"andThenChar"(short2CharFunction0: $Short2CharFunction$$Type): $Float2CharFunction
"andThenDouble"(short2DoubleFunction0: $Short2DoubleFunction$$Type): $Float2DoubleFunction
"andThenFloat"(short2FloatFunction0: $Short2FloatFunction$$Type): $Float2FloatFunction
"andThenInt"(short2IntFunction0: $Short2IntFunction$$Type): $Float2IntFunction
"andThenLong"(short2LongFunction0: $Short2LongFunction$$Type): $Float2LongFunction
"andThenObject"<T>(short2ObjectFunction0: $Short2ObjectFunction$$Type<T>): $Float2ObjectFunction<T>
"andThenReference"<T>(short2ReferenceFunction0: $Short2ReferenceFunction$$Type<T>): $Float2ReferenceFunction<T>
"andThenShort"(short2ShortFunction0: $Short2ShortFunction$$Type): $Float2ShortFunction
"apply"(float0: float): short
/** @deprecated */
"applyAsInt"(double0: double): integer
"clear"(): void
/** @deprecated */
"compose"<T>(function0: $Function$$Type<T, float>): $Function<T, short>
"composeByte"(byte2FloatFunction0: $Byte2FloatFunction$$Type): $Byte2ShortFunction
"composeChar"(char2FloatFunction0: $Char2FloatFunction$$Type): $Char2ShortFunction
"composeDouble"(double2FloatFunction0: $Double2FloatFunction$$Type): $Double2ShortFunction
"composeFloat"(float2FloatFunction0: $Float2FloatFunction$$Type): $Float2ShortFunction
"composeInt"(int2FloatFunction0: $Int2FloatFunction$$Type): $Int2ShortFunction
"composeLong"(long2FloatFunction0: $Long2FloatFunction$$Type): $Long2ShortFunction
"composeObject"<T>(object2FloatFunction0: $Object2FloatFunction$$Type<T>): $Object2ShortFunction<T>
"composeReference"<T>(reference2FloatFunction0: $Reference2FloatFunction$$Type<T>): $Reference2ShortFunction<T>
"composeShort"(short2FloatFunction0: $Short2FloatFunction$$Type): $Short2ShortFunction
/** @deprecated */
"containsKey"(object0: any): boolean
"containsKey"(float0: float): boolean
"defaultReturnValue"(short0: short): void
"defaultReturnValue"(): short
/** @deprecated */
"get"(object0: any): short
"get"(float0: float): short
/** @deprecated */
"getOrDefault"(object0: any, short1: short): short
"getOrDefault"(float0: float, short1: short): short
"put"(float0: float, short1: short): short
/** @deprecated */
"put"(float0: float, short1: short): short
"remove"(float0: float): short
/** @deprecated */
"remove"(object0: any): short
"size"(): integer
}

export namespace $Float2ShortFunction {
function identity<T>(): $Function<T, T>
}
export abstract class $Float2ShortFunction$$Static implements $Float2ShortFunction {
static "identity"<T>(): $Function<T, T>
}
}

