declare module "com.ibm.icu.util.ULocale$Category" {
import { $Enum } from "java.lang.Enum"

export class $ULocale$Category extends $Enum<$ULocale$Category> {
static readonly "DISPLAY": $ULocale$Category
static readonly "FORMAT": $ULocale$Category

public static "valueOf"(string0: string): $ULocale$Category
public static "values"(): $ULocale$Category[]
}
}

declare module "com.ibm.icu.impl.TextTrieMap$Output" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextTrieMap$Output {
constructor()

get "matchLength"(): integer
set "matchLength"(value: integer)
get "partialMatch"(): boolean
set "partialMatch"(value: boolean)
}
}

declare module "com.ibm.icu.util.TimeUnit" {
import { $MeasureUnit } from "com.ibm.icu.util.MeasureUnit"

export class $TimeUnit extends $MeasureUnit {
public static "values"(): $TimeUnit[]
}
}

declare module "com.ibm.icu.util.TimeZone$SystemTimeZoneType" {
import { $Enum } from "java.lang.Enum"

export class $TimeZone$SystemTimeZoneType extends $Enum<$TimeZone$SystemTimeZoneType> {
static readonly "ANY": $TimeZone$SystemTimeZoneType
static readonly "CANONICAL": $TimeZone$SystemTimeZoneType
static readonly "CANONICAL_LOCATION": $TimeZone$SystemTimeZoneType

public static "valueOf"(string0: string): $TimeZone$SystemTimeZoneType
public static "values"(): $TimeZone$SystemTimeZoneType[]
}
}

declare module "com.ibm.icu.text.SymbolTable" {
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $UnicodeMatcher } from "com.ibm.icu.text.UnicodeMatcher"

export interface $SymbolTable {
"lookup"(string0: string): character[]
"lookupMatcher"(int0: integer): $UnicodeMatcher
"parseReference"(string0: string, parsePosition1: $ParsePosition$$Type, int2: integer): string
}

export namespace $SymbolTable {
const SYMBOL_REF: character
}
export abstract class $SymbolTable$$Static implements $SymbolTable {
static readonly "SYMBOL_REF": character

}
}

declare module "com.ibm.icu.text.DateFormat$BooleanAttribute" {
import { $Enum } from "java.lang.Enum"

export class $DateFormat$BooleanAttribute extends $Enum<$DateFormat$BooleanAttribute> {
static readonly "PARSE_ALLOW_NUMERIC": $DateFormat$BooleanAttribute
static readonly "PARSE_ALLOW_WHITESPACE": $DateFormat$BooleanAttribute
static readonly "PARSE_MULTIPLE_PATTERNS_FOR_MATCH": $DateFormat$BooleanAttribute
static readonly "PARSE_PARTIAL_LITERAL_MATCH": $DateFormat$BooleanAttribute
/** @deprecated */
static readonly "PARSE_PARTIAL_MATCH": $DateFormat$BooleanAttribute

public static "valueOf"(string0: string): $DateFormat$BooleanAttribute
public static "values"(): $DateFormat$BooleanAttribute[]
}
}

declare module "com.ibm.icu.impl.units.MeasureUnitImpl$MeasureUnitImplWithIndex" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MeasureUnitImpl$MeasureUnitImplWithIndex {
}
}

declare module "com.ibm.icu.util.Currency$CurrencyStringInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** @deprecated */
export class $Currency$CurrencyStringInfo {
/** @deprecated */
constructor(string0: string, string1: string)

/** @deprecated */
public "getCurrencyString"(): string
/** @deprecated */
public "getISOCode"(): string
get "currencyString"(): string
get "iSOCode"(): string
}
}

declare module "com.ibm.icu.util.Calendar$WeekData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Calendar$WeekData {
readonly "firstDayOfWeek": integer
readonly "minimalDaysInFirstWeek": integer
readonly "weekendCease": integer
readonly "weekendCeaseMillis": integer
readonly "weekendOnset": integer
readonly "weekendOnsetMillis": integer

constructor(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer)

}
}

declare module "com.ibm.icu.util.ULocale" {
import { $ULocale$AvailableType$$Type } from "com.ibm.icu.util.ULocale$AvailableType"
import { $Iterator } from "java.util.Iterator"
import { $ULocale$Type } from "com.ibm.icu.util.ULocale$Type"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Comparable } from "java.lang.Comparable"
import { $ULocale$Category$$Type } from "com.ibm.icu.util.ULocale$Category"
import { $ULocale$Minimize$$Type } from "com.ibm.icu.util.ULocale$Minimize"
import { $Serializable } from "java.io.Serializable"

export class $ULocale implements $Serializable, $Comparable<$ULocale> {
static "ACTUAL_LOCALE": $ULocale$Type
static readonly "CANADA": $ULocale
static readonly "CANADA_FRENCH": $ULocale
static readonly "CHINA": $ULocale
static readonly "CHINESE": $ULocale
static readonly "ENGLISH": $ULocale
static readonly "FRANCE": $ULocale
static readonly "FRENCH": $ULocale
static readonly "GERMAN": $ULocale
static readonly "GERMANY": $ULocale
static readonly "ITALIAN": $ULocale
static readonly "ITALY": $ULocale
static readonly "JAPAN": $ULocale
static readonly "JAPANESE": $ULocale
static readonly "KOREA": $ULocale
static readonly "KOREAN": $ULocale
static readonly "PRC": $ULocale
static readonly "PRIVATE_USE_EXTENSION": character
static readonly "ROOT": $ULocale
static readonly "SIMPLIFIED_CHINESE": $ULocale
static readonly "TAIWAN": $ULocale
static readonly "TRADITIONAL_CHINESE": $ULocale
static readonly "UK": $ULocale
static readonly "UNICODE_LOCALE_EXTENSION": character
static readonly "US": $ULocale
static "VALID_LOCALE": $ULocale$Type

constructor(string0: string, string1: string, string2: string)
constructor(string0: string)
constructor(string0: string, string1: string)

public static "acceptLanguage"(string0: string, uLocale1s: $ULocale$$Type[], boolean2s: boolean[]): $ULocale
public static "acceptLanguage"(uLocale0s: $ULocale$$Type[], uLocale1s: $ULocale$$Type[], boolean2s: boolean[]): $ULocale
public static "acceptLanguage"(uLocale0s: $ULocale$$Type[], boolean1s: boolean[]): $ULocale
public static "acceptLanguage"(string0: string, boolean1s: boolean[]): $ULocale
public static "addLikelySubtags"(uLocale0: $ULocale$$Type): $ULocale
public static "canonicalize"(string0: string): string
public "clone"(): any
public "compareTo"(uLocale0: $ULocale$$Type): integer
public static "createCanonical"(string0: string): $ULocale
public static "createCanonical"(uLocale0: $ULocale$$Type): $ULocale
public static "forLanguageTag"(string0: string): $ULocale
public static "forLocale"(locale0: $Locale$$Type): $ULocale
public static "getAvailableLocales"(): $ULocale[]
public static "getAvailableLocalesByType"(availableType0: $ULocale$AvailableType$$Type): $Collection<$ULocale>
public static "getBaseName"(string0: string): string
public "getBaseName"(): string
public "getCharacterOrientation"(): string
public static "getCountry"(string0: string): string
public "getCountry"(): string
public static "getDefault"(): $ULocale
public static "getDefault"(category0: $ULocale$Category$$Type): $ULocale
public static "getDisplayCountry"(string0: string, uLocale1: $ULocale$$Type): string
public "getDisplayCountry"(): string
public static "getDisplayCountry"(string0: string, string1: string): string
public "getDisplayCountry"(uLocale0: $ULocale$$Type): string
public static "getDisplayKeyword"(string0: string, string1: string): string
public static "getDisplayKeyword"(string0: string, uLocale1: $ULocale$$Type): string
public static "getDisplayKeyword"(string0: string): string
public "getDisplayKeywordValue"(string0: string, uLocale1: $ULocale$$Type): string
public static "getDisplayKeywordValue"(string0: string, string1: string, string2: string): string
public "getDisplayKeywordValue"(string0: string): string
public static "getDisplayKeywordValue"(string0: string, string1: string, uLocale2: $ULocale$$Type): string
public static "getDisplayLanguage"(string0: string, string1: string): string
public static "getDisplayLanguage"(string0: string, uLocale1: $ULocale$$Type): string
public "getDisplayLanguage"(uLocale0: $ULocale$$Type): string
public "getDisplayLanguage"(): string
public "getDisplayLanguageWithDialect"(): string
public static "getDisplayLanguageWithDialect"(string0: string, string1: string): string
public "getDisplayLanguageWithDialect"(uLocale0: $ULocale$$Type): string
public static "getDisplayLanguageWithDialect"(string0: string, uLocale1: $ULocale$$Type): string
public "getDisplayName"(uLocale0: $ULocale$$Type): string
public static "getDisplayName"(string0: string, uLocale1: $ULocale$$Type): string
public static "getDisplayName"(string0: string, string1: string): string
public "getDisplayName"(): string
public "getDisplayNameWithDialect"(uLocale0: $ULocale$$Type): string
public "getDisplayNameWithDialect"(): string
public static "getDisplayNameWithDialect"(string0: string, string1: string): string
public static "getDisplayNameWithDialect"(string0: string, uLocale1: $ULocale$$Type): string
public "getDisplayScript"(): string
public "getDisplayScript"(uLocale0: $ULocale$$Type): string
public static "getDisplayScript"(string0: string, string1: string): string
public static "getDisplayScript"(string0: string, uLocale1: $ULocale$$Type): string
/** @deprecated */
public static "getDisplayScriptInContext"(string0: string, uLocale1: $ULocale$$Type): string
/** @deprecated */
public "getDisplayScriptInContext"(): string
/** @deprecated */
public "getDisplayScriptInContext"(uLocale0: $ULocale$$Type): string
/** @deprecated */
public static "getDisplayScriptInContext"(string0: string, string1: string): string
public "getDisplayVariant"(uLocale0: $ULocale$$Type): string
public "getDisplayVariant"(): string
public static "getDisplayVariant"(string0: string, string1: string): string
public static "getDisplayVariant"(string0: string, uLocale1: $ULocale$$Type): string
public "getExtension"(char0: character): string
public "getExtensionKeys"(): $Set<character>
public static "getFallback"(string0: string): string
public "getFallback"(): $ULocale
public static "getISO3Country"(string0: string): string
public "getISO3Country"(): string
public "getISO3Language"(): string
public static "getISO3Language"(string0: string): string
public static "getISOCountries"(): string[]
public static "getISOLanguages"(): string[]
public static "getKeywordValue"(string0: string, string1: string): string
public "getKeywordValue"(string0: string): string
public "getKeywords"(): $Iterator<string>
public static "getKeywords"(string0: string): $Iterator<string>
public "getLanguage"(): string
public static "getLanguage"(string0: string): string
public "getLineOrientation"(): string
public static "getName"(string0: string): string
public "getName"(): string
/** @deprecated */
public static "getRegionForSupplementalData"(uLocale0: $ULocale$$Type, boolean1: boolean): string
public "getScript"(): string
public static "getScript"(string0: string): string
public "getUnicodeLocaleAttributes"(): $Set<string>
public "getUnicodeLocaleKeys"(): $Set<string>
public "getUnicodeLocaleType"(string0: string): string
public "getVariant"(): string
public static "getVariant"(string0: string): string
public "isRightToLeft"(): boolean
public static "minimizeSubtags"(uLocale0: $ULocale$$Type): $ULocale
/** @deprecated */
public static "minimizeSubtags"(uLocale0: $ULocale$$Type, minimize1: $ULocale$Minimize$$Type): $ULocale
public static "setDefault"(category0: $ULocale$Category$$Type, uLocale1: $ULocale$$Type): void
public static "setDefault"(uLocale0: $ULocale$$Type): void
public "setKeywordValue"(string0: string, string1: string): $ULocale
public static "setKeywordValue"(string0: string, string1: string, string2: string): string
public "toLanguageTag"(): string
public static "toLegacyKey"(string0: string): string
public static "toLegacyType"(string0: string, string1: string): string
public "toLocale"(): $Locale
public static "toUnicodeLocaleKey"(string0: string): string
public static "toUnicodeLocaleType"(string0: string, string1: string): string
get "baseName"(): string
get "characterOrientation"(): string
get "country"(): string
get "displayCountry"(): string
get "displayLanguage"(): string
get "displayLanguageWithDialect"(): string
get "displayName"(): string
get "displayNameWithDialect"(): string
get "displayScript"(): string
get "displayScriptInContext"(): string
get "displayVariant"(): string
get "extensionKeys"(): $Set<character>
get "fallback"(): $ULocale
get "iSO3Country"(): string
get "iSO3Language"(): string
get "keywords"(): $Iterator<string>
get "language"(): string
get "lineOrientation"(): string
get "name"(): string
get "script"(): string
get "unicodeLocaleAttributes"(): $Set<string>
get "unicodeLocaleKeys"(): $Set<string>
get "variant"(): string
get "rightToLeft"(): boolean
}
}

declare module "com.ibm.icu.util.ULocale$AvailableType" {
import { $Enum } from "java.lang.Enum"

export class $ULocale$AvailableType extends $Enum<$ULocale$AvailableType> {
static readonly "DEFAULT": $ULocale$AvailableType
static readonly "ONLY_LEGACY_ALIASES": $ULocale$AvailableType
static readonly "WITH_LEGACY_ALIASES": $ULocale$AvailableType

public static "valueOf"(string0: string): $ULocale$AvailableType
public static "values"(): $ULocale$AvailableType[]
}
}

declare module "com.ibm.icu.util.CurrencyAmount" {
import { $Measure } from "com.ibm.icu.util.Measure"
import { $Currency, $Currency$$Type } from "com.ibm.icu.util.Currency"
import { $Currency$$Type as $Currency$0$$Type } from "java.util.Currency"

export class $CurrencyAmount extends $Measure {
constructor(double0: double, currency1: $Currency$0$$Type)
constructor(number0: number, currency1: $Currency$0$$Type)
constructor(double0: double, currency1: $Currency$$Type)
constructor(number0: number, currency1: $Currency$$Type)

public "getCurrency"(): $Currency
get "currency"(): $Currency
}
}

declare module "com.ibm.icu.text.UnicodeSet$EntryRange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UnicodeSet$EntryRange {
get "codepoint"(): integer
set "codepoint"(value: integer)
get "codepointEnd"(): integer
set "codepointEnd"(value: integer)
}
}

declare module "com.ibm.icu.text.UnicodeSet$ComparisonStyle" {
import { $Enum } from "java.lang.Enum"

export class $UnicodeSet$ComparisonStyle extends $Enum<$UnicodeSet$ComparisonStyle> {
static readonly "LEXICOGRAPHIC": $UnicodeSet$ComparisonStyle
static readonly "LONGER_FIRST": $UnicodeSet$ComparisonStyle
static readonly "SHORTER_FIRST": $UnicodeSet$ComparisonStyle

public static "valueOf"(string0: string): $UnicodeSet$ComparisonStyle
public static "values"(): $UnicodeSet$ComparisonStyle[]
}
}

declare module "com.ibm.icu.text.NumberFormat$NumberFormatFactory" {
import { $NumberFormat } from "com.ibm.icu.text.NumberFormat"
import { $ULocale$$Type } from "com.ibm.icu.util.ULocale"
import { $Locale$$Type } from "java.util.Locale"
import { $Set } from "java.util.Set"

export class $NumberFormat$NumberFormatFactory {
static readonly "FORMAT_CURRENCY": integer
static readonly "FORMAT_INTEGER": integer
static readonly "FORMAT_NUMBER": integer
static readonly "FORMAT_PERCENT": integer
static readonly "FORMAT_SCIENTIFIC": integer

public "createFormat"(locale0: $Locale$$Type, int1: integer): $NumberFormat
public "createFormat"(uLocale0: $ULocale$$Type, int1: integer): $NumberFormat
public "getSupportedLocaleNames"(): $Set<string>
public "visible"(): boolean
get "supportedLocaleNames"(): $Set<string>
}
}

declare module "com.ibm.icu.util.MeasureUnit" {
import { $List } from "java.util.List"
import { $MeasureUnitImpl, $MeasureUnitImpl$$Type } from "com.ibm.icu.impl.units.MeasureUnitImpl"
import { $MeasureUnit$MeasurePrefix, $MeasureUnit$MeasurePrefix$$Type } from "com.ibm.icu.util.MeasureUnit$MeasurePrefix"
import { $Set } from "java.util.Set"
import { $TimeUnit } from "com.ibm.icu.util.TimeUnit"
import { $MeasureUnit$Complexity } from "com.ibm.icu.util.MeasureUnit$Complexity"
import { $Serializable } from "java.io.Serializable"

export class $MeasureUnit implements $Serializable {
static readonly "ACRE": $MeasureUnit
static readonly "ACRE_FOOT": $MeasureUnit
static readonly "AMPERE": $MeasureUnit
static readonly "ARC_MINUTE": $MeasureUnit
static readonly "ARC_SECOND": $MeasureUnit
static readonly "ASTRONOMICAL_UNIT": $MeasureUnit
static readonly "ATMOSPHERE": $MeasureUnit
static readonly "BAR": $MeasureUnit
static readonly "BARREL": $MeasureUnit
static readonly "BIT": $MeasureUnit
static readonly "BRITISH_THERMAL_UNIT": $MeasureUnit
static readonly "BUSHEL": $MeasureUnit
static readonly "BYTE": $MeasureUnit
static readonly "CALORIE": $MeasureUnit
static readonly "CANDELA": $MeasureUnit
static readonly "CARAT": $MeasureUnit
static readonly "CELSIUS": $MeasureUnit
static readonly "CENTILITER": $MeasureUnit
static readonly "CENTIMETER": $MeasureUnit
static readonly "CENTURY": $MeasureUnit
static readonly "CUBIC_CENTIMETER": $MeasureUnit
static readonly "CUBIC_FOOT": $MeasureUnit
static readonly "CUBIC_INCH": $MeasureUnit
static readonly "CUBIC_KILOMETER": $MeasureUnit
static readonly "CUBIC_METER": $MeasureUnit
static readonly "CUBIC_MILE": $MeasureUnit
static readonly "CUBIC_YARD": $MeasureUnit
static readonly "CUP": $MeasureUnit
static readonly "CUP_METRIC": $MeasureUnit
static readonly "DALTON": $MeasureUnit
static readonly "DAY": $TimeUnit
static readonly "DAY_PERSON": $MeasureUnit
static readonly "DECADE": $MeasureUnit
static readonly "DECILITER": $MeasureUnit
static readonly "DECIMETER": $MeasureUnit
static readonly "DEGREE": $MeasureUnit
static readonly "DESSERT_SPOON": $MeasureUnit
static readonly "DESSERT_SPOON_IMPERIAL": $MeasureUnit
static readonly "DOT": $MeasureUnit
static readonly "DOT_PER_CENTIMETER": $MeasureUnit
static readonly "DOT_PER_INCH": $MeasureUnit
static readonly "DRAM": $MeasureUnit
static readonly "DROP": $MeasureUnit
static readonly "DUNAM": $MeasureUnit
static readonly "EARTH_MASS": $MeasureUnit
static readonly "EARTH_RADIUS": $MeasureUnit
static readonly "ELECTRONVOLT": $MeasureUnit
static readonly "EM": $MeasureUnit
static readonly "FAHRENHEIT": $MeasureUnit
static readonly "FATHOM": $MeasureUnit
static readonly "FLUID_OUNCE": $MeasureUnit
static readonly "FLUID_OUNCE_IMPERIAL": $MeasureUnit
static readonly "FOODCALORIE": $MeasureUnit
static readonly "FOOT": $MeasureUnit
static readonly "FURLONG": $MeasureUnit
static readonly "GALLON": $MeasureUnit
static readonly "GALLON_IMPERIAL": $MeasureUnit
static readonly "GENERIC_TEMPERATURE": $MeasureUnit
static readonly "GIGABIT": $MeasureUnit
static readonly "GIGABYTE": $MeasureUnit
static readonly "GIGAHERTZ": $MeasureUnit
static readonly "GIGAWATT": $MeasureUnit
static readonly "GRAIN": $MeasureUnit
static readonly "GRAM": $MeasureUnit
static readonly "G_FORCE": $MeasureUnit
static readonly "HECTARE": $MeasureUnit
static readonly "HECTOLITER": $MeasureUnit
static readonly "HECTOPASCAL": $MeasureUnit
static readonly "HERTZ": $MeasureUnit
static readonly "HORSEPOWER": $MeasureUnit
static readonly "HOUR": $TimeUnit
static readonly "INCH": $MeasureUnit
static readonly "INCH_HG": $MeasureUnit
static readonly "ITEM": $MeasureUnit
static readonly "JIGGER": $MeasureUnit
static readonly "JOULE": $MeasureUnit
static readonly "KARAT": $MeasureUnit
static readonly "KELVIN": $MeasureUnit
static readonly "KILOBIT": $MeasureUnit
static readonly "KILOBYTE": $MeasureUnit
static readonly "KILOCALORIE": $MeasureUnit
static readonly "KILOGRAM": $MeasureUnit
static readonly "KILOHERTZ": $MeasureUnit
static readonly "KILOJOULE": $MeasureUnit
static readonly "KILOMETER": $MeasureUnit
static readonly "KILOMETER_PER_HOUR": $MeasureUnit
static readonly "KILOPASCAL": $MeasureUnit
static readonly "KILOWATT": $MeasureUnit
static readonly "KILOWATT_HOUR": $MeasureUnit
static readonly "KILOWATT_HOUR_PER_100_KILOMETER": $MeasureUnit
static readonly "KNOT": $MeasureUnit
static readonly "LIGHT_YEAR": $MeasureUnit
static readonly "LITER": $MeasureUnit
static readonly "LITER_PER_100KILOMETERS": $MeasureUnit
static readonly "LITER_PER_KILOMETER": $MeasureUnit
static readonly "LUMEN": $MeasureUnit
static readonly "LUX": $MeasureUnit
static readonly "MEGABIT": $MeasureUnit
static readonly "MEGABYTE": $MeasureUnit
static readonly "MEGAHERTZ": $MeasureUnit
static readonly "MEGALITER": $MeasureUnit
static readonly "MEGAPASCAL": $MeasureUnit
static readonly "MEGAPIXEL": $MeasureUnit
static readonly "MEGAWATT": $MeasureUnit
static readonly "METER": $MeasureUnit
static readonly "METER_PER_SECOND": $MeasureUnit
static readonly "METER_PER_SECOND_SQUARED": $MeasureUnit
static readonly "METRIC_TON": $MeasureUnit
static readonly "MICROGRAM": $MeasureUnit
static readonly "MICROMETER": $MeasureUnit
static readonly "MICROSECOND": $MeasureUnit
static readonly "MILE": $MeasureUnit
static readonly "MILE_PER_GALLON": $MeasureUnit
static readonly "MILE_PER_GALLON_IMPERIAL": $MeasureUnit
static readonly "MILE_PER_HOUR": $MeasureUnit
static readonly "MILE_SCANDINAVIAN": $MeasureUnit
static readonly "MILLIAMPERE": $MeasureUnit
static readonly "MILLIBAR": $MeasureUnit
static readonly "MILLIGRAM": $MeasureUnit
static readonly "MILLIGRAM_OFGLUCOSE_PER_DECILITER": $MeasureUnit
static readonly "MILLIGRAM_PER_DECILITER": $MeasureUnit
static readonly "MILLILITER": $MeasureUnit
static readonly "MILLIMETER": $MeasureUnit
static readonly "MILLIMETER_OF_MERCURY": $MeasureUnit
static readonly "MILLIMOLE_PER_LITER": $MeasureUnit
static readonly "MILLISECOND": $MeasureUnit
static readonly "MILLIWATT": $MeasureUnit
static readonly "MINUTE": $TimeUnit
static readonly "MOLE": $MeasureUnit
static readonly "MONTH": $TimeUnit
static readonly "MONTH_PERSON": $MeasureUnit
static readonly "NANOMETER": $MeasureUnit
static readonly "NANOSECOND": $MeasureUnit
static readonly "NAUTICAL_MILE": $MeasureUnit
static readonly "NEWTON": $MeasureUnit
static readonly "NEWTON_METER": $MeasureUnit
static readonly "OHM": $MeasureUnit
static readonly "OUNCE": $MeasureUnit
static readonly "OUNCE_TROY": $MeasureUnit
static readonly "PARSEC": $MeasureUnit
static readonly "PART_PER_MILLION": $MeasureUnit
static readonly "PASCAL": $MeasureUnit
static readonly "PERCENT": $MeasureUnit
static readonly "PERMILLE": $MeasureUnit
static readonly "PERMYRIAD": $MeasureUnit
static readonly "PETABYTE": $MeasureUnit
static readonly "PICOMETER": $MeasureUnit
static readonly "PINCH": $MeasureUnit
static readonly "PINT": $MeasureUnit
static readonly "PINT_METRIC": $MeasureUnit
static readonly "PIXEL": $MeasureUnit
static readonly "PIXEL_PER_CENTIMETER": $MeasureUnit
static readonly "PIXEL_PER_INCH": $MeasureUnit
static readonly "POINT": $MeasureUnit
static readonly "POUND": $MeasureUnit
static readonly "POUND_FOOT": $MeasureUnit
static readonly "POUND_FORCE": $MeasureUnit
static readonly "POUND_PER_SQUARE_INCH": $MeasureUnit
static readonly "QUART": $MeasureUnit
static readonly "QUART_IMPERIAL": $MeasureUnit
static readonly "RADIAN": $MeasureUnit
static readonly "REVOLUTION_ANGLE": $MeasureUnit
static readonly "SECOND": $TimeUnit
static readonly "SOLAR_LUMINOSITY": $MeasureUnit
static readonly "SOLAR_MASS": $MeasureUnit
static readonly "SOLAR_RADIUS": $MeasureUnit
static readonly "SQUARE_CENTIMETER": $MeasureUnit
static readonly "SQUARE_FOOT": $MeasureUnit
static readonly "SQUARE_INCH": $MeasureUnit
static readonly "SQUARE_KILOMETER": $MeasureUnit
static readonly "SQUARE_METER": $MeasureUnit
static readonly "SQUARE_MILE": $MeasureUnit
static readonly "SQUARE_YARD": $MeasureUnit
static readonly "STONE": $MeasureUnit
static readonly "TABLESPOON": $MeasureUnit
static readonly "TEASPOON": $MeasureUnit
static readonly "TERABIT": $MeasureUnit
static readonly "TERABYTE": $MeasureUnit
static readonly "THERM_US": $MeasureUnit
static readonly "TON": $MeasureUnit
static readonly "VOLT": $MeasureUnit
static readonly "WATT": $MeasureUnit
static readonly "WEEK": $TimeUnit
static readonly "WEEK_PERSON": $MeasureUnit
static readonly "YARD": $MeasureUnit
static readonly "YEAR": $TimeUnit
static readonly "YEAR_PERSON": $MeasureUnit

/** @deprecated */
public static "findBySubType"(string0: string): $MeasureUnit
public static "forIdentifier"(string0: string): $MeasureUnit
/** @deprecated */
public static "fromMeasureUnitImpl"(measureUnitImpl0: $MeasureUnitImpl$$Type): $MeasureUnit
public static "getAvailable"(): $Set<$MeasureUnit>
public static "getAvailable"(string0: string): $Set<$MeasureUnit>
public static "getAvailableTypes"(): $Set<string>
public "getComplexity"(): $MeasureUnit$Complexity
/** @deprecated */
public "getCopyOfMeasureUnitImpl"(): $MeasureUnitImpl
public "getDimensionality"(): integer
public "getIdentifier"(): string
public "getPrefix"(): $MeasureUnit$MeasurePrefix
public "getSubtype"(): string
public "getType"(): string
/** @deprecated */
public static "internalGetInstance"(string0: string, string1: string): $MeasureUnit
public "product"(measureUnit0: $MeasureUnit$$Type): $MeasureUnit
public "reciprocal"(): $MeasureUnit
public "splitToSingleUnits"(): $List<$MeasureUnit>
public "withDimensionality"(int0: integer): $MeasureUnit
public "withPrefix"(measurePrefix0: $MeasureUnit$MeasurePrefix$$Type): $MeasureUnit
get "complexity"(): $MeasureUnit$Complexity
get "copyOfMeasureUnitImpl"(): $MeasureUnitImpl
get "dimensionality"(): integer
get "identifier"(): string
get "prefix"(): $MeasureUnit$MeasurePrefix
get "subtype"(): string
get "type"(): string
}
}

declare module "com.ibm.icu.text.UFormat" {
import { $ULocale } from "com.ibm.icu.util.ULocale"
import { $Format } from "java.text.Format"
import { $ULocale$Type$$Type } from "com.ibm.icu.util.ULocale$Type"

export class $UFormat extends $Format {
constructor()

public "getLocale"(type0: $ULocale$Type$$Type): $ULocale
}
}

declare module "com.ibm.icu.math.MathContext" {
import { $Serializable } from "java.io.Serializable"

export class $MathContext implements $Serializable {
static readonly "DEFAULT": $MathContext
static readonly "ENGINEERING": integer
static readonly "PLAIN": integer
static readonly "ROUND_CEILING": integer
static readonly "ROUND_DOWN": integer
static readonly "ROUND_FLOOR": integer
static readonly "ROUND_HALF_DOWN": integer
static readonly "ROUND_HALF_EVEN": integer
static readonly "ROUND_HALF_UP": integer
static readonly "ROUND_UNNECESSARY": integer
static readonly "ROUND_UP": integer
static readonly "SCIENTIFIC": integer

constructor(int0: integer, int1: integer, boolean2: boolean, int3: integer)
constructor(int0: integer, int1: integer, boolean2: boolean)
constructor(int0: integer, int1: integer)
constructor(int0: integer)

public "getDigits"(): integer
public "getForm"(): integer
public "getLostDigits"(): boolean
public "getRoundingMode"(): integer
get "digits"(): integer
get "form"(): integer
get "lostDigits"(): boolean
get "roundingMode"(): integer
}
}

declare module "com.ibm.icu.util.MeasureUnit$Complexity" {
import { $Enum } from "java.lang.Enum"

export class $MeasureUnit$Complexity extends $Enum<$MeasureUnit$Complexity> {
static readonly "COMPOUND": $MeasureUnit$Complexity
static readonly "MIXED": $MeasureUnit$Complexity
static readonly "SINGLE": $MeasureUnit$Complexity

public static "valueOf"(string0: string): $MeasureUnit$Complexity
public static "values"(): $MeasureUnit$Complexity[]
}
}

declare module "com.ibm.icu.impl.TextTrieMap$ResultHandler" {
import { $Iterator$$Type } from "java.util.Iterator"

export interface $TextTrieMap$ResultHandler<V = any> {
"handlePrefixMatch"(int0: integer, iterator1: $Iterator$$Type<V>): boolean
}

export namespace $TextTrieMap$ResultHandler {
const probejs$$marker: never
}
export abstract class $TextTrieMap$ResultHandler$$Static<V = any> implements $TextTrieMap$ResultHandler<V> {
}
}

declare module "com.ibm.icu.text.Replaceable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Replaceable {
"char32At"(int0: integer): integer
"charAt"(int0: integer): character
"copy"(int0: integer, int1: integer, int2: integer): void
"getChars"(int0: integer, int1: integer, char2s: character[], int3: integer): void
"hasMetaData"(): boolean
"length"(): integer
"replace"(int0: integer, int1: integer, char2s: character[], int3: integer, int4: integer): void
"replace"(int0: integer, int1: integer, string2: string): void
}

export namespace $Replaceable {
const probejs$$marker: never
}
export abstract class $Replaceable$$Static implements $Replaceable {
}
}

declare module "com.ibm.icu.util.TimeZone" {
import { $Cloneable } from "java.lang.Cloneable"
import { $ULocale$$Type } from "com.ibm.icu.util.ULocale"
import { $Locale$$Type } from "java.util.Locale"
import { $Date$$Type } from "java.util.Date"
import { $Freezable } from "com.ibm.icu.util.Freezable"
import { $Set } from "java.util.Set"
import { $TimeZone$SystemTimeZoneType$$Type } from "com.ibm.icu.util.TimeZone$SystemTimeZoneType"
import { $Serializable } from "java.io.Serializable"

export class $TimeZone implements $Serializable, $Cloneable, $Freezable<$TimeZone> {
static readonly "GENERIC_LOCATION": integer
static readonly "GMT_ZONE": $TimeZone
static readonly "LONG": integer
static readonly "LONG_GENERIC": integer
static readonly "LONG_GMT": integer
static readonly "SHORT": integer
static readonly "SHORT_COMMONLY_USED": integer
static readonly "SHORT_GENERIC": integer
static readonly "SHORT_GMT": integer
static readonly "TIMEZONE_ICU": integer
static readonly "TIMEZONE_JDK": integer
static readonly "UNKNOWN_ZONE": $TimeZone
static readonly "UNKNOWN_ZONE_ID": string

constructor()

public "clone"(): any
public static "countEquivalentIDs"(string0: string): integer
/** @deprecated */
public static "forLocaleOrDefault"(locale0: $Locale$$Type): $TimeZone
/** @deprecated */
public static "forULocaleOrDefault"(uLocale0: $ULocale$$Type): $TimeZone
public "freeze"(): $TimeZone
public static "getAvailableIDs"(systemTimeZoneType0: $TimeZone$SystemTimeZoneType$$Type, string1: string, integer2: integer): $Set<string>
public static "getAvailableIDs"(string0: string): string[]
public static "getAvailableIDs"(int0: integer): string[]
public static "getAvailableIDs"(): string[]
public static "getCanonicalID"(string0: string): string
public static "getCanonicalID"(string0: string, boolean1s: boolean[]): string
public "getDSTSavings"(): integer
public static "getDefault"(): $TimeZone
public static "getDefaultTimeZoneType"(): integer
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public "getDisplayName"(boolean0: boolean, int1: integer): string
public "getDisplayName"(boolean0: boolean, int1: integer, locale2: $Locale$$Type): string
public "getDisplayName"(uLocale0: $ULocale$$Type): string
public "getDisplayName"(boolean0: boolean, int1: integer, uLocale2: $ULocale$$Type): string
public static "getEquivalentID"(string0: string, int1: integer): string
public static "getFrozenTimeZone"(string0: string): $TimeZone
public "getID"(): string
public static "getIDForWindowsID"(string0: string, string1: string): string
public "getOffset"(long0: long): integer
public "getOffset"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): integer
public "getOffset"(long0: long, boolean1: boolean, int2s: integer[]): void
public "getRawOffset"(): integer
public static "getRegion"(string0: string): string
public static "getTZDataVersion"(): string
public static "getTimeZone"(string0: string, int1: integer): $TimeZone
public static "getTimeZone"(string0: string): $TimeZone
public static "getWindowsID"(string0: string): string
public "hasSameRules"(timeZone0: $TimeZone$$Type): boolean
public "inDaylightTime"(date0: $Date$$Type): boolean
public "isFrozen"(): boolean
public "observesDaylightTime"(): boolean
public static "setDefault"(timeZone0: $TimeZone$$Type): void
public static "setDefaultTimeZoneType"(int0: integer): void
/** @deprecated */
public static "setICUDefault"(timeZone0: $TimeZone$$Type): void
public "setID"(string0: string): void
public "setRawOffset"(int0: integer): void
public "useDaylightTime"(): boolean
get "dSTSavings"(): integer
get "displayName"(): string
get "iD"(): string
get "rawOffset"(): integer
get "frozen"(): boolean
set "iD"(value: string)
set "rawOffset"(value: integer)
}
}

declare module "com.ibm.icu.text.UnicodeFilter" {
import { $Replaceable$$Type } from "com.ibm.icu.text.Replaceable"
import { $UnicodeMatcher } from "com.ibm.icu.text.UnicodeMatcher"
import { $UnicodeSet$$Type } from "com.ibm.icu.text.UnicodeSet"

export class $UnicodeFilter implements $UnicodeMatcher {
public "addMatchSetTo"(unicodeSet0: $UnicodeSet$$Type): void
public "contains"(int0: integer): boolean
public "matches"(replaceable0: $Replaceable$$Type, int1s: integer[], int2: integer, boolean3: boolean): integer
public "matchesIndexValue"(int0: integer): boolean
public "toPattern"(boolean0: boolean): string
}
}

declare module "com.ibm.icu.util.MeasureUnit$MeasurePrefix" {
import { $Enum } from "java.lang.Enum"

export class $MeasureUnit$MeasurePrefix extends $Enum<$MeasureUnit$MeasurePrefix> {
static readonly "ATTO": $MeasureUnit$MeasurePrefix
static readonly "CENTI": $MeasureUnit$MeasurePrefix
static readonly "DECI": $MeasureUnit$MeasurePrefix
static readonly "DEKA": $MeasureUnit$MeasurePrefix
static readonly "EXA": $MeasureUnit$MeasurePrefix
static readonly "EXBI": $MeasureUnit$MeasurePrefix
static readonly "FEMTO": $MeasureUnit$MeasurePrefix
static readonly "GIBI": $MeasureUnit$MeasurePrefix
static readonly "GIGA": $MeasureUnit$MeasurePrefix
static readonly "HECTO": $MeasureUnit$MeasurePrefix
static readonly "KIBI": $MeasureUnit$MeasurePrefix
static readonly "KILO": $MeasureUnit$MeasurePrefix
static readonly "MEBI": $MeasureUnit$MeasurePrefix
static readonly "MEGA": $MeasureUnit$MeasurePrefix
static readonly "MICRO": $MeasureUnit$MeasurePrefix
static readonly "MILLI": $MeasureUnit$MeasurePrefix
static readonly "NANO": $MeasureUnit$MeasurePrefix
static readonly "ONE": $MeasureUnit$MeasurePrefix
static readonly "PEBI": $MeasureUnit$MeasurePrefix
static readonly "PETA": $MeasureUnit$MeasurePrefix
static readonly "PICO": $MeasureUnit$MeasurePrefix
static readonly "TEBI": $MeasureUnit$MeasurePrefix
static readonly "TERA": $MeasureUnit$MeasurePrefix
static readonly "YOBI": $MeasureUnit$MeasurePrefix
static readonly "YOCTO": $MeasureUnit$MeasurePrefix
static readonly "YOTTA": $MeasureUnit$MeasurePrefix
static readonly "ZEBI": $MeasureUnit$MeasurePrefix
static readonly "ZEPTO": $MeasureUnit$MeasurePrefix
static readonly "ZETTA": $MeasureUnit$MeasurePrefix

public "getBase"(): integer
/** @deprecated */
public "getIdentifier"(): string
public "getPower"(): integer
public static "valueOf"(string0: string): $MeasureUnit$MeasurePrefix
public static "values"(): $MeasureUnit$MeasurePrefix[]
get "base"(): integer
get "identifier"(): string
get "power"(): integer
}
}

declare module "com.ibm.icu.impl.units.SingleUnitImpl" {
import { $MeasureUnit } from "com.ibm.icu.util.MeasureUnit"
import { $MeasureUnit$MeasurePrefix, $MeasureUnit$MeasurePrefix$$Type } from "com.ibm.icu.util.MeasureUnit$MeasurePrefix"

export class $SingleUnitImpl {
constructor()

public "build"(): $MeasureUnit
public "copy"(): $SingleUnitImpl
public "getDimensionality"(): integer
public "getIndex"(): integer
public "getNeutralIdentifier"(): string
public "getPrefix"(): $MeasureUnit$MeasurePrefix
public "getSimpleUnitID"(): string
public "setDimensionality"(int0: integer): void
public "setPrefix"(measurePrefix0: $MeasureUnit$MeasurePrefix$$Type): void
public "setSimpleUnit"(int0: integer, string1s: string[]): void
get "dimensionality"(): integer
get "index"(): integer
get "neutralIdentifier"(): string
get "prefix"(): $MeasureUnit$MeasurePrefix
get "simpleUnitID"(): string
set "dimensionality"(value: integer)
set "prefix"(value: $MeasureUnit$MeasurePrefix$$Type)
}
}

declare module "com.ibm.icu.util.ULocale$Minimize" {
import { $Enum } from "java.lang.Enum"

/** @deprecated */
export class $ULocale$Minimize extends $Enum<$ULocale$Minimize> {
/** @deprecated */
static readonly "FAVOR_REGION": $ULocale$Minimize
/** @deprecated */
static readonly "FAVOR_SCRIPT": $ULocale$Minimize

public static "valueOf"(string0: string): $ULocale$Minimize
public static "values"(): $ULocale$Minimize[]
}
}

declare module "com.ibm.icu.text.UnicodeSet" {
import { $Iterator, $Iterator$$Type } from "java.util.Iterator"
import { $Collection, $Collection$$Type } from "java.util.Collection"
import { $UnicodeSet$XSymbolTable, $UnicodeSet$XSymbolTable$$Type } from "com.ibm.icu.text.UnicodeSet$XSymbolTable"
import { $Freezable } from "com.ibm.icu.util.Freezable"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $UnicodeSet$EntryRange } from "com.ibm.icu.text.UnicodeSet$EntryRange"
import { $UnicodeSet$ComparisonStyle$$Type } from "com.ibm.icu.text.UnicodeSet$ComparisonStyle"
import { $Iterable, $Iterable$$Type } from "java.lang.Iterable"
import { $SymbolTable$$Type } from "com.ibm.icu.text.SymbolTable"
import { $UnicodeSet$SpanCondition$$Type } from "com.ibm.icu.text.UnicodeSet$SpanCondition"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $UnicodeFilter } from "com.ibm.icu.text.UnicodeFilter"
import { $Comparable, $Comparable$$Type } from "java.lang.Comparable"
import { $Spliterator } from "java.util.Spliterator"
import { $OutputInt$$Type } from "com.ibm.icu.util.OutputInt"

export class $UnicodeSet extends $UnicodeFilter implements $Iterable<string>, $Comparable<$UnicodeSet>, $Freezable<$UnicodeSet> {
static readonly "ADD_CASE_MAPPINGS": integer
static readonly "ALL_CODE_POINTS": $UnicodeSet
static readonly "CASE": integer
static readonly "CASE_INSENSITIVE": integer
static readonly "EMPTY": $UnicodeSet
static readonly "IGNORE_SPACE": integer
static readonly "MAX_VALUE": integer
static readonly "MIN_VALUE": integer

constructor(string0: string)
constructor(string0: string, boolean1: boolean)
constructor(string0: string, int1: integer)
constructor(string0: string, parsePosition1: $ParsePosition$$Type, symbolTable2: $SymbolTable$$Type)
constructor(string0: string, parsePosition1: $ParsePosition$$Type, symbolTable2: $SymbolTable$$Type, int3: integer)
constructor()
constructor(unicodeSet0: $UnicodeSet$$Type)
constructor(int0: integer, int1: integer)
constructor(...int0s: integer[])

public "_generatePattern"(stringBuffer0: $StringBuffer$$Type, boolean1: boolean): $StringBuffer
public "_generatePattern"(stringBuffer0: $StringBuffer$$Type, boolean1: boolean, boolean2: boolean): $StringBuffer
public "add"(iterable0: $Iterable$$Type<any>): $UnicodeSet
public "add"(int0: integer, int1: integer): $UnicodeSet
public "add"(charSequence0: charseq): $UnicodeSet
public "add"(int0: integer): $UnicodeSet
public "addAll"(unicodeSet0: $UnicodeSet$$Type): $UnicodeSet
public "addAll"(int0: integer, int1: integer): $UnicodeSet
public "addAll"<T extends charseq>(...t0s: T[]): $UnicodeSet
public "addAll"(iterable0: $Iterable$$Type<any>): $UnicodeSet
public "addAll"(charSequence0: charseq): $UnicodeSet
public static "addAllTo"<T, U extends $Collection<T>>(iterable0: $Iterable$$Type<T>, u1: U): U
public "addAllTo"<T extends $Collection<string>>(t0: T): T
public static "addAllTo"<T>(iterable0: $Iterable$$Type<T>, t1s: T[]): T[]
public "addAllTo"(string0s: string[]): string[]
/** @deprecated */
public "addBridges"(unicodeSet0: $UnicodeSet$$Type): $UnicodeSet
public "addMatchSetTo"(unicodeSet0: $UnicodeSet$$Type): void
public "applyIntPropertyValue"(int0: integer, int1: integer): $UnicodeSet
public "applyPattern"(string0: string): $UnicodeSet
/** @deprecated */
public "applyPattern"(string0: string, parsePosition1: $ParsePosition$$Type, symbolTable2: $SymbolTable$$Type, int3: integer): $UnicodeSet
public "applyPattern"(string0: string, boolean1: boolean): $UnicodeSet
public "applyPattern"(string0: string, int1: integer): $UnicodeSet
public "applyPropertyAlias"(string0: string, string1: string): $UnicodeSet
public "applyPropertyAlias"(string0: string, string1: string, symbolTable2: $SymbolTable$$Type): $UnicodeSet
public "charAt"(int0: integer): integer
public "clear"(): $UnicodeSet
public "clone"(): any
public "cloneAsThawed"(): $UnicodeSet
public "closeOver"(int0: integer): $UnicodeSet
public "compact"(): $UnicodeSet
public static "compare"<T extends $Comparable<T>>(collection0: $Collection$$Type<T>, collection1: $Collection$$Type<T>, comparisonStyle2: $UnicodeSet$ComparisonStyle$$Type): integer
/** @deprecated */
public static "compare"<T extends $Comparable<T>>(iterator0: $Iterator$$Type<T>, iterator1: $Iterator$$Type<T>): integer
public static "compare"<T extends $Comparable<T>>(iterable0: $Iterable$$Type<T>, iterable1: $Iterable$$Type<T>): integer
public static "compare"(int0: integer, charSequence1: charseq): integer
public static "compare"(charSequence0: charseq, int1: integer): integer
public "compareTo"(unicodeSet0: $UnicodeSet$$Type): integer
public "compareTo"(unicodeSet0: $UnicodeSet$$Type, comparisonStyle1: $UnicodeSet$ComparisonStyle$$Type): integer
public "compareTo"(iterable0: $Iterable$$Type<string>): integer
public "complement"(charSequence0: charseq): $UnicodeSet
public "complement"(int0: integer, int1: integer): $UnicodeSet
public "complement"(int0: integer): $UnicodeSet
public "complement"(): $UnicodeSet
public "complementAll"(charSequence0: charseq): $UnicodeSet
public "complementAll"(unicodeSet0: $UnicodeSet$$Type): $UnicodeSet
public "contains"(charSequence0: charseq): boolean
public "contains"(int0: integer, int1: integer): boolean
public "containsAll"(string0: string): boolean
public "containsAll"<T extends charseq>(iterable0: $Iterable$$Type<T>): boolean
public "containsAll"(unicodeSet0: $UnicodeSet$$Type): boolean
public "containsNone"(charSequence0: charseq): boolean
public "containsNone"<T extends charseq>(iterable0: $Iterable$$Type<T>): boolean
public "containsNone"(unicodeSet0: $UnicodeSet$$Type): boolean
public "containsNone"(int0: integer, int1: integer): boolean
public "containsSome"(int0: integer, int1: integer): boolean
public "containsSome"(unicodeSet0: $UnicodeSet$$Type): boolean
public "containsSome"<T extends charseq>(iterable0: $Iterable$$Type<T>): boolean
public "containsSome"(charSequence0: charseq): boolean
/** @deprecated */
public "findIn"(charSequence0: charseq, int1: integer, boolean2: boolean): integer
/** @deprecated */
public "findLastIn"(charSequence0: charseq, int1: integer, boolean2: boolean): integer
public "forEach"(consumer0: $Consumer$$Type<string>): void
public "freeze"(): $UnicodeSet
public static "from"(charSequence0: charseq): $UnicodeSet
public static "fromAll"(charSequence0: charseq): $UnicodeSet
/** @deprecated */
public static "getDefaultXSymbolTable"(): $UnicodeSet$XSymbolTable
public "getRangeCount"(): integer
public "getRangeEnd"(int0: integer): integer
public "getRangeStart"(int0: integer): integer
/** @deprecated */
public "getRegexEquivalent"(): string
/** @deprecated */
public static "getSingleCodePoint"(charSequence0: charseq): integer
public "hasStrings"(): boolean
public "indexOf"(int0: integer): integer
public "isEmpty"(): boolean
public "isFrozen"(): boolean
public "iterator"(): $Iterator<string>
/** @deprecated */
public "matchesAt"(charSequence0: charseq, int1: integer): integer
public "matchesIndexValue"(int0: integer): boolean
public "ranges"(): $Iterable<$UnicodeSet$EntryRange>
public "remove"(charSequence0: charseq): $UnicodeSet
public "remove"(int0: integer, int1: integer): $UnicodeSet
public "remove"(int0: integer): $UnicodeSet
public "removeAll"(unicodeSet0: $UnicodeSet$$Type): $UnicodeSet
public "removeAll"<T extends charseq>(iterable0: $Iterable$$Type<T>): $UnicodeSet
public "removeAll"(charSequence0: charseq): $UnicodeSet
public "removeAllStrings"(): $UnicodeSet
public static "resemblesPattern"(string0: string, int1: integer): boolean
public "retain"(charSequence0: charseq): $UnicodeSet
public "retain"(int0: integer): $UnicodeSet
public "retain"(int0: integer, int1: integer): $UnicodeSet
public "retainAll"<T extends charseq>(iterable0: $Iterable$$Type<T>): $UnicodeSet
public "retainAll"(charSequence0: charseq): $UnicodeSet
public "retainAll"(unicodeSet0: $UnicodeSet$$Type): $UnicodeSet
public "set"(int0: integer, int1: integer): $UnicodeSet
public "set"(unicodeSet0: $UnicodeSet$$Type): $UnicodeSet
/** @deprecated */
public static "setDefaultXSymbolTable"(xSymbolTable0: $UnicodeSet$XSymbolTable$$Type): void
public "size"(): integer
public "span"(charSequence0: charseq, int1: integer, spanCondition2: $UnicodeSet$SpanCondition$$Type): integer
public "span"(charSequence0: charseq, spanCondition1: $UnicodeSet$SpanCondition$$Type): integer
/** @deprecated */
public "spanAndCount"(charSequence0: charseq, int1: integer, spanCondition2: $UnicodeSet$SpanCondition$$Type, outputInt3: $OutputInt$$Type): integer
public "spanBack"(charSequence0: charseq, spanCondition1: $UnicodeSet$SpanCondition$$Type): integer
public "spanBack"(charSequence0: charseq, int1: integer, spanCondition2: $UnicodeSet$SpanCondition$$Type): integer
public "spliterator"(): $Spliterator<string>
public "strings"(): $Collection<string>
/** @deprecated */
public "stripFrom"(charSequence0: charseq, boolean1: boolean): string
public static "toArray"(unicodeSet0: $UnicodeSet$$Type): string[]
public "toPattern"(boolean0: boolean): string
[Symbol.iterator](): IterableIterator<string>;
get "rangeCount"(): integer
get "regexEquivalent"(): string
get "empty"(): boolean
get "frozen"(): boolean
}
}

declare module "com.ibm.icu.text.UnicodeMatcher" {
import { $Replaceable$$Type } from "com.ibm.icu.text.Replaceable"
import { $UnicodeSet$$Type } from "com.ibm.icu.text.UnicodeSet"

export interface $UnicodeMatcher {
"addMatchSetTo"(unicodeSet0: $UnicodeSet$$Type): void
"matches"(replaceable0: $Replaceable$$Type, int1s: integer[], int2: integer, boolean3: boolean): integer
"matchesIndexValue"(int0: integer): boolean
"toPattern"(boolean0: boolean): string
}

export namespace $UnicodeMatcher {
const ETHER: character
const U_MATCH: integer
const U_MISMATCH: integer
const U_PARTIAL_MATCH: integer
}
export abstract class $UnicodeMatcher$$Static implements $UnicodeMatcher {
static readonly "ETHER": character
static readonly "U_MATCH": integer
static readonly "U_MISMATCH": integer
static readonly "U_PARTIAL_MATCH": integer

}
}

declare module "com.ibm.icu.util.Currency$CurrencyUsage" {
import { $Enum } from "java.lang.Enum"

export class $Currency$CurrencyUsage extends $Enum<$Currency$CurrencyUsage> {
static readonly "CASH": $Currency$CurrencyUsage
static readonly "STANDARD": $Currency$CurrencyUsage

public static "valueOf"(string0: string): $Currency$CurrencyUsage
public static "values"(): $Currency$CurrencyUsage[]
}
}

declare module "com.ibm.icu.text.DisplayContext$Type" {
import { $Enum } from "java.lang.Enum"

export class $DisplayContext$Type extends $Enum<$DisplayContext$Type> {
static readonly "CAPITALIZATION": $DisplayContext$Type
static readonly "DIALECT_HANDLING": $DisplayContext$Type
static readonly "DISPLAY_LENGTH": $DisplayContext$Type
static readonly "SUBSTITUTE_HANDLING": $DisplayContext$Type

public static "valueOf"(string0: string): $DisplayContext$Type
public static "values"(): $DisplayContext$Type[]
}
}

declare module "com.ibm.icu.util.Calendar" {
import { $TimeZone, $TimeZone$$Type } from "com.ibm.icu.util.TimeZone"
import { $Cloneable } from "java.lang.Cloneable"
import { $ULocale, $ULocale$$Type } from "com.ibm.icu.util.ULocale"
import { $ULocale$Type$$Type } from "com.ibm.icu.util.ULocale$Type"
import { $Date, $Date$$Type } from "java.util.Date"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Calendar$WeekData, $Calendar$WeekData$$Type } from "com.ibm.icu.util.Calendar$WeekData"
import { $Comparable } from "java.lang.Comparable"
import { $DateFormat } from "com.ibm.icu.text.DateFormat"
import { $Serializable } from "java.io.Serializable"

export class $Calendar implements $Serializable, $Cloneable, $Comparable<$Calendar> {
static readonly "AM": integer
static readonly "AM_PM": integer
static readonly "APRIL": integer
static readonly "AUGUST": integer
static readonly "DATE": integer
static readonly "DAY_OF_MONTH": integer
static readonly "DAY_OF_WEEK": integer
static readonly "DAY_OF_WEEK_IN_MONTH": integer
static readonly "DAY_OF_YEAR": integer
static readonly "DECEMBER": integer
static readonly "DOW_LOCAL": integer
static readonly "DST_OFFSET": integer
static readonly "ERA": integer
static readonly "EXTENDED_YEAR": integer
static readonly "FEBRUARY": integer
static readonly "FRIDAY": integer
static readonly "HOUR": integer
static readonly "HOUR_OF_DAY": integer
static readonly "IS_LEAP_MONTH": integer
static readonly "JANUARY": integer
static readonly "JULIAN_DAY": integer
static readonly "JULY": integer
static readonly "JUNE": integer
static readonly "MARCH": integer
static readonly "MAY": integer
static readonly "MILLISECOND": integer
static readonly "MILLISECONDS_IN_DAY": integer
static readonly "MINUTE": integer
static readonly "MONDAY": integer
static readonly "MONTH": integer
static readonly "NOVEMBER": integer
static readonly "OCTOBER": integer
static readonly "PM": integer
static readonly "SATURDAY": integer
static readonly "SECOND": integer
static readonly "SEPTEMBER": integer
static readonly "SUNDAY": integer
static readonly "THURSDAY": integer
static readonly "TUESDAY": integer
static readonly "UNDECIMBER": integer
static readonly "WALLTIME_FIRST": integer
static readonly "WALLTIME_LAST": integer
static readonly "WALLTIME_NEXT_VALID": integer
static readonly "WEDNESDAY": integer
/** @deprecated */
static readonly "WEEKDAY": integer
/** @deprecated */
static readonly "WEEKEND": integer
/** @deprecated */
static readonly "WEEKEND_CEASE": integer
/** @deprecated */
static readonly "WEEKEND_ONSET": integer
static readonly "WEEK_OF_MONTH": integer
static readonly "WEEK_OF_YEAR": integer
static readonly "YEAR": integer
static readonly "YEAR_WOY": integer
static readonly "ZONE_OFFSET": integer

public "add"(int0: integer, int1: integer): void
public "after"(object0: any): boolean
public "before"(object0: any): boolean
public "clear"(int0: integer): void
public "clear"(): void
public "clone"(): any
public "compareTo"(calendar0: $Calendar$$Type): integer
public "fieldDifference"(date0: $Date$$Type, int1: integer): integer
public "get"(int0: integer): integer
public "getActualMaximum"(int0: integer): integer
public "getActualMinimum"(int0: integer): integer
public static "getAvailableLocales"(): $Locale[]
public static "getAvailableULocales"(): $ULocale[]
public "getDateTimeFormat"(int0: integer, int1: integer, locale2: $Locale$$Type): $DateFormat
public "getDateTimeFormat"(int0: integer, int1: integer, uLocale2: $ULocale$$Type): $DateFormat
/** @deprecated */
public static "getDateTimePattern"(calendar0: $Calendar$$Type, uLocale1: $ULocale$$Type, int2: integer): string
/** @deprecated */
public "getDayOfWeekType"(int0: integer): integer
public "getDisplayName"(uLocale0: $ULocale$$Type): string
public "getDisplayName"(locale0: $Locale$$Type): string
public "getFieldCount"(): integer
public "getFirstDayOfWeek"(): integer
public "getGreatestMinimum"(int0: integer): integer
public static "getInstance"(locale0: $Locale$$Type): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type, locale1: $Locale$$Type): $Calendar
public static "getInstance"(uLocale0: $ULocale$$Type): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type, uLocale1: $ULocale$$Type): $Calendar
public static "getInstance"(): $Calendar
public static "getInstance"(timeZone0: $TimeZone$$Type): $Calendar
public static "getKeywordValuesForLocale"(string0: string, uLocale1: $ULocale$$Type, boolean2: boolean): string[]
public "getLeastMaximum"(int0: integer): integer
public "getLocale"(type0: $ULocale$Type$$Type): $ULocale
public "getMaximum"(int0: integer): integer
public "getMinimalDaysInFirstWeek"(): integer
public "getMinimum"(int0: integer): integer
/** @deprecated */
public "getRelatedYear"(): integer
public "getRepeatedWallTimeOption"(): integer
public "getSkippedWallTimeOption"(): integer
public "getTime"(): $Date
public "getTimeInMillis"(): long
public "getTimeZone"(): $TimeZone
public "getType"(): string
public "getWeekData"(): $Calendar$WeekData
public static "getWeekDataForRegion"(string0: string): $Calendar$WeekData
/** @deprecated */
public "getWeekendTransition"(int0: integer): integer
/** @deprecated */
public "haveDefaultCentury"(): boolean
public "isEquivalentTo"(calendar0: $Calendar$$Type): boolean
public "isLenient"(): boolean
public "isSet"(int0: integer): boolean
public "isWeekend"(): boolean
public "isWeekend"(date0: $Date$$Type): boolean
public "roll"(int0: integer, boolean1: boolean): void
public "roll"(int0: integer, int1: integer): void
public "set"(int0: integer, int1: integer, int2: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): void
public "set"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer): void
public "set"(int0: integer, int1: integer): void
public "setFirstDayOfWeek"(int0: integer): void
public "setLenient"(boolean0: boolean): void
public "setMinimalDaysInFirstWeek"(int0: integer): void
/** @deprecated */
public "setRelatedYear"(int0: integer): void
public "setRepeatedWallTimeOption"(int0: integer): void
public "setSkippedWallTimeOption"(int0: integer): void
public "setTime"(date0: $Date$$Type): void
public "setTimeInMillis"(long0: long): void
public "setTimeZone"(timeZone0: $TimeZone$$Type): void
public "setWeekData"(weekData0: $Calendar$WeekData$$Type): $Calendar
get "fieldCount"(): integer
get "firstDayOfWeek"(): integer
get "minimalDaysInFirstWeek"(): integer
get "relatedYear"(): integer
get "repeatedWallTimeOption"(): integer
get "skippedWallTimeOption"(): integer
get "time"(): $Date
get "timeInMillis"(): long
get "timeZone"(): $TimeZone
get "type"(): string
get "weekData"(): $Calendar$WeekData
get "lenient"(): boolean
get "weekend"(): boolean
set "firstDayOfWeek"(value: integer)
set "lenient"(value: boolean)
set "minimalDaysInFirstWeek"(value: integer)
set "relatedYear"(value: integer)
set "repeatedWallTimeOption"(value: integer)
set "skippedWallTimeOption"(value: integer)
set "time"(value: $Date$$Type)
set "timeInMillis"(value: long)
set "timeZone"(value: $TimeZone$$Type)
set "weekData"(value: $Calendar$WeekData$$Type)
}
}

declare module "com.ibm.icu.text.DateFormat" {
import { $TimeZone, $TimeZone$$Type } from "com.ibm.icu.util.TimeZone"
import { $Date, $Date$$Type } from "java.util.Date"
import { $DateFormat$BooleanAttribute$$Type } from "com.ibm.icu.text.DateFormat$BooleanAttribute"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $Calendar, $Calendar$$Type } from "com.ibm.icu.util.Calendar"
import { $NumberFormat, $NumberFormat$$Type } from "com.ibm.icu.text.NumberFormat"
import { $List } from "java.util.List"
import { $ULocale, $ULocale$$Type } from "com.ibm.icu.util.ULocale"
import { $FieldPosition$$Type } from "java.text.FieldPosition"
import { $DisplayContext, $DisplayContext$$Type } from "com.ibm.icu.text.DisplayContext"
import { $UFormat } from "com.ibm.icu.text.UFormat"
import { $DisplayContext$Type$$Type } from "com.ibm.icu.text.DisplayContext$Type"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $Locale, $Locale$$Type } from "java.util.Locale"

export class $DateFormat extends $UFormat {
static readonly "ABBR_GENERIC_TZ": string
static readonly "ABBR_MONTH": string
static readonly "ABBR_MONTH_DAY": string
static readonly "ABBR_MONTH_WEEKDAY_DAY": string
static readonly "ABBR_QUARTER": string
static readonly "ABBR_SPECIFIC_TZ": string
/** @deprecated */
static readonly "ABBR_STANDALONE_MONTH": string
static readonly "ABBR_UTC_TZ": string
static readonly "ABBR_WEEKDAY": string
static readonly "AM_PM_FIELD": integer
static readonly "AM_PM_MIDNIGHT_NOON_FIELD": integer
static readonly "DATE_FIELD": integer
/** @deprecated */
static readonly "DATE_SKELETONS": $List<string>
static readonly "DAY": string
static readonly "DAY_OF_WEEK_FIELD": integer
static readonly "DAY_OF_WEEK_IN_MONTH_FIELD": integer
static readonly "DAY_OF_YEAR_FIELD": integer
static readonly "DEFAULT": integer
static readonly "DOW_LOCAL_FIELD": integer
static readonly "ERA_FIELD": integer
static readonly "EXTENDED_YEAR_FIELD": integer
/** @deprecated */
static readonly "FIELD_COUNT": integer
static readonly "FLEXIBLE_DAY_PERIOD_FIELD": integer
static readonly "FRACTIONAL_SECOND_FIELD": integer
static readonly "FULL": integer
static readonly "GENERIC_TZ": string
static readonly "HOUR": string
static readonly "HOUR0_FIELD": integer
static readonly "HOUR1_FIELD": integer
static readonly "HOUR24": string
static readonly "HOUR24_MINUTE": string
static readonly "HOUR24_MINUTE_SECOND": string
/** @deprecated */
static readonly "HOUR_GENERIC_TZ": string
static readonly "HOUR_MINUTE": string
/** @deprecated */
static readonly "HOUR_MINUTE_GENERIC_TZ": string
static readonly "HOUR_MINUTE_SECOND": string
/** @deprecated */
static readonly "HOUR_MINUTE_TZ": string
static readonly "HOUR_OF_DAY0_FIELD": integer
static readonly "HOUR_OF_DAY1_FIELD": integer
/** @deprecated */
static readonly "HOUR_TZ": string
/** @deprecated */
static readonly "JP_ERA_2019_JA": string
/** @deprecated */
static readonly "JP_ERA_2019_NARROW": string
/** @deprecated */
static readonly "JP_ERA_2019_ROOT": string
static readonly "JULIAN_DAY_FIELD": integer
static readonly "LOCATION_TZ": string
static readonly "LONG": integer
static readonly "MEDIUM": integer
static readonly "MILLISECONDS_IN_DAY_FIELD": integer
static readonly "MILLISECOND_FIELD": integer
static readonly "MINUTE": string
static readonly "MINUTE_FIELD": integer
static readonly "MINUTE_SECOND": string
static readonly "MONTH": string
static readonly "MONTH_DAY": string
static readonly "MONTH_FIELD": integer
static readonly "MONTH_WEEKDAY_DAY": string
static readonly "NONE": integer
static readonly "NUM_MONTH": string
static readonly "NUM_MONTH_DAY": string
static readonly "NUM_MONTH_WEEKDAY_DAY": string
static readonly "QUARTER": string
static readonly "QUARTER_FIELD": integer
static readonly "RELATIVE": integer
static readonly "RELATIVE_DEFAULT": integer
static readonly "RELATIVE_FULL": integer
static readonly "RELATIVE_LONG": integer
static readonly "RELATIVE_MEDIUM": integer
static readonly "RELATIVE_SHORT": integer
static readonly "SECOND": string
static readonly "SECOND_FIELD": integer
static readonly "SHORT": integer
static readonly "SPECIFIC_TZ": string
static readonly "STANDALONE_DAY_FIELD": integer
/** @deprecated */
static readonly "STANDALONE_MONTH": string
static readonly "STANDALONE_MONTH_FIELD": integer
static readonly "STANDALONE_QUARTER_FIELD": integer
static readonly "TIMEZONE_FIELD": integer
static readonly "TIMEZONE_GENERIC_FIELD": integer
static readonly "TIMEZONE_ISO_FIELD": integer
static readonly "TIMEZONE_ISO_LOCAL_FIELD": integer
static readonly "TIMEZONE_LOCALIZED_GMT_OFFSET_FIELD": integer
static readonly "TIMEZONE_RFC_FIELD": integer
static readonly "TIMEZONE_SPECIAL_FIELD": integer
/** @deprecated */
static readonly "TIME_SEPARATOR": integer
/** @deprecated */
static readonly "TIME_SKELETONS": $List<string>
static readonly "WEEKDAY": string
static readonly "WEEK_OF_MONTH_FIELD": integer
static readonly "WEEK_OF_YEAR_FIELD": integer
static readonly "YEAR": string
static readonly "YEAR_ABBR_MONTH": string
static readonly "YEAR_ABBR_MONTH_DAY": string
static readonly "YEAR_ABBR_MONTH_WEEKDAY_DAY": string
static readonly "YEAR_ABBR_QUARTER": string
static readonly "YEAR_FIELD": integer
static readonly "YEAR_MONTH": string
static readonly "YEAR_MONTH_DAY": string
static readonly "YEAR_MONTH_WEEKDAY_DAY": string
static readonly "YEAR_NAME_FIELD": integer
static readonly "YEAR_NUM_MONTH": string
static readonly "YEAR_NUM_MONTH_DAY": string
static readonly "YEAR_NUM_MONTH_WEEKDAY_DAY": string
static readonly "YEAR_QUARTER": string
static readonly "YEAR_WOY_FIELD": integer
/** @deprecated */
static readonly "ZONE_SKELETONS": $List<string>

public "format"(date0: $Date$$Type): string
public "format"(calendar0: $Calendar$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(date0: $Date$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public static "getAvailableLocales"(): $Locale[]
public static "getAvailableULocales"(): $ULocale[]
public "getBooleanAttribute"(booleanAttribute0: $DateFormat$BooleanAttribute$$Type): boolean
public "getCalendar"(): $Calendar
public "getContext"(type0: $DisplayContext$Type$$Type): $DisplayContext
public static "getDateInstance"(calendar0: $Calendar$$Type, int1: integer, uLocale2: $ULocale$$Type): $DateFormat
public static "getDateInstance"(calendar0: $Calendar$$Type, int1: integer, locale2: $Locale$$Type): $DateFormat
public static "getDateInstance"(): $DateFormat
public static "getDateInstance"(int0: integer): $DateFormat
public static "getDateInstance"(calendar0: $Calendar$$Type, int1: integer): $DateFormat
public static "getDateInstance"(int0: integer, locale1: $Locale$$Type): $DateFormat
public static "getDateInstance"(int0: integer, uLocale1: $ULocale$$Type): $DateFormat
public static "getDateTimeInstance"(int0: integer, int1: integer): $DateFormat
public static "getDateTimeInstance"(): $DateFormat
public static "getDateTimeInstance"(calendar0: $Calendar$$Type, int1: integer, int2: integer, uLocale3: $ULocale$$Type): $DateFormat
public static "getDateTimeInstance"(calendar0: $Calendar$$Type, int1: integer, int2: integer, locale3: $Locale$$Type): $DateFormat
public static "getDateTimeInstance"(calendar0: $Calendar$$Type, int1: integer, int2: integer): $DateFormat
public static "getDateTimeInstance"(int0: integer, int1: integer, locale2: $Locale$$Type): $DateFormat
public static "getDateTimeInstance"(int0: integer, int1: integer, uLocale2: $ULocale$$Type): $DateFormat
public static "getInstance"(): $DateFormat
public static "getInstance"(calendar0: $Calendar$$Type): $DateFormat
public static "getInstance"(calendar0: $Calendar$$Type, locale1: $Locale$$Type): $DateFormat
public static "getInstance"(calendar0: $Calendar$$Type, uLocale1: $ULocale$$Type): $DateFormat
public static "getInstanceForSkeleton"(string0: string, locale1: $Locale$$Type): $DateFormat
public static "getInstanceForSkeleton"(string0: string, uLocale1: $ULocale$$Type): $DateFormat
public static "getInstanceForSkeleton"(calendar0: $Calendar$$Type, string1: string, locale2: $Locale$$Type): $DateFormat
public static "getInstanceForSkeleton"(calendar0: $Calendar$$Type, string1: string, uLocale2: $ULocale$$Type): $DateFormat
public static "getInstanceForSkeleton"(string0: string): $DateFormat
public "getNumberFormat"(): $NumberFormat
public static "getPatternInstance"(string0: string, locale1: $Locale$$Type): $DateFormat
public static "getPatternInstance"(calendar0: $Calendar$$Type, string1: string, uLocale2: $ULocale$$Type): $DateFormat
public static "getPatternInstance"(calendar0: $Calendar$$Type, string1: string, locale2: $Locale$$Type): $DateFormat
public static "getPatternInstance"(string0: string, uLocale1: $ULocale$$Type): $DateFormat
public static "getPatternInstance"(string0: string): $DateFormat
public static "getTimeInstance"(int0: integer): $DateFormat
public static "getTimeInstance"(int0: integer, locale1: $Locale$$Type): $DateFormat
public static "getTimeInstance"(calendar0: $Calendar$$Type, int1: integer): $DateFormat
public static "getTimeInstance"(): $DateFormat
public static "getTimeInstance"(int0: integer, uLocale1: $ULocale$$Type): $DateFormat
public static "getTimeInstance"(calendar0: $Calendar$$Type, int1: integer, locale2: $Locale$$Type): $DateFormat
public static "getTimeInstance"(calendar0: $Calendar$$Type, int1: integer, uLocale2: $ULocale$$Type): $DateFormat
public "getTimeZone"(): $TimeZone
public "isCalendarLenient"(): boolean
public "isLenient"(): boolean
public "parse"(string0: string, calendar1: $Calendar$$Type, parsePosition2: $ParsePosition$$Type): void
public "parse"(string0: string, parsePosition1: $ParsePosition$$Type): $Date
public "parse"(string0: string): $Date
public "setBooleanAttribute"(booleanAttribute0: $DateFormat$BooleanAttribute$$Type, boolean1: boolean): $DateFormat
public "setCalendar"(calendar0: $Calendar$$Type): void
public "setCalendarLenient"(boolean0: boolean): void
public "setContext"(displayContext0: $DisplayContext$$Type): void
public "setLenient"(boolean0: boolean): void
public "setNumberFormat"(numberFormat0: $NumberFormat$$Type): void
public "setTimeZone"(timeZone0: $TimeZone$$Type): void
get "calendar"(): $Calendar
get "numberFormat"(): $NumberFormat
get "timeZone"(): $TimeZone
get "calendarLenient"(): boolean
get "lenient"(): boolean
set "calendar"(value: $Calendar$$Type)
set "calendarLenient"(value: boolean)
set "context"(value: $DisplayContext$$Type)
set "lenient"(value: boolean)
set "numberFormat"(value: $NumberFormat$$Type)
set "timeZone"(value: $TimeZone$$Type)
}
}

declare module "com.ibm.icu.util.Currency" {
import { $ULocale, $ULocale$$Type } from "com.ibm.icu.util.ULocale"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $Date$$Type } from "java.util.Date"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $MeasureUnit } from "com.ibm.icu.util.MeasureUnit"
import { $Set } from "java.util.Set"
import { $Currency$CurrencyUsage$$Type } from "com.ibm.icu.util.Currency$CurrencyUsage"
import { $Currency$CurrencyStringInfo } from "com.ibm.icu.util.Currency$CurrencyStringInfo"
import { $Currency as $Currency$0, $Currency$$Type as $Currency$0$$Type } from "java.util.Currency"
import { $TextTrieMap } from "com.ibm.icu.impl.TextTrieMap"

export class $Currency extends $MeasureUnit {
static readonly "FORMAL_SYMBOL_NAME": integer
static readonly "LONG_NAME": integer
static readonly "NARROW_SYMBOL_NAME": integer
static readonly "PLURAL_LONG_NAME": integer
static readonly "SYMBOL_NAME": integer
static readonly "VARIANT_SYMBOL_NAME": integer

public static "fromJavaCurrency"(currency0: $Currency$0$$Type): $Currency
public static "getAvailableCurrencies"(): $Set<$Currency>
public static "getAvailableCurrencyCodes"(locale0: $Locale$$Type, date1: $Date$$Type): string[]
public static "getAvailableCurrencyCodes"(uLocale0: $ULocale$$Type, date1: $Date$$Type): string[]
public static "getAvailableLocales"(): $Locale[]
public static "getAvailableULocales"(): $ULocale[]
public "getCurrencyCode"(): string
public "getDefaultFractionDigits"(currencyUsage0: $Currency$CurrencyUsage$$Type): integer
public "getDefaultFractionDigits"(): integer
public "getDisplayName"(locale0: $Locale$$Type): string
public "getDisplayName"(): string
public static "getInstance"(locale0: $Locale$$Type): $Currency
public static "getInstance"(string0: string): $Currency
public static "getInstance"(uLocale0: $ULocale$$Type): $Currency
public static "getKeywordValuesForLocale"(string0: string, uLocale1: $ULocale$$Type, boolean2: boolean): string[]
public "getName"(locale0: $Locale$$Type, int1: integer, boolean2s: boolean[]): string
public "getName"(locale0: $Locale$$Type, int1: integer, string2: string, boolean3s: boolean[]): string
public "getName"(uLocale0: $ULocale$$Type, int1: integer, string2: string, boolean3s: boolean[]): string
public "getName"(uLocale0: $ULocale$$Type, int1: integer, boolean2s: boolean[]): string
public "getNumericCode"(): integer
/** @deprecated */
public static "getParsingTrie"(uLocale0: $ULocale$$Type, int1: integer): $TextTrieMap<$Currency$CurrencyStringInfo>
public "getRoundingIncrement"(currencyUsage0: $Currency$CurrencyUsage$$Type): double
public "getRoundingIncrement"(): double
public "getSymbol"(): string
public "getSymbol"(locale0: $Locale$$Type): string
public "getSymbol"(uLocale0: $ULocale$$Type): string
public static "isAvailable"(string0: string, date1: $Date$$Type, date2: $Date$$Type): boolean
/** @deprecated */
public static "parse"(uLocale0: $ULocale$$Type, string1: string, int2: integer, parsePosition3: $ParsePosition$$Type): string
public static "registerInstance"(currency0: $Currency$$Type, uLocale1: $ULocale$$Type): any
public "toJavaCurrency"(): $Currency$0
public static "unregister"(object0: any): boolean
get "currencyCode"(): string
get "defaultFractionDigits"(): integer
get "displayName"(): string
get "numericCode"(): integer
get "roundingIncrement"(): double
get "symbol"(): string
}
}

declare module "com.ibm.icu.impl.TextTrieMap" {
import { $Iterator } from "java.util.Iterator"
import { $UnicodeSet$$Type } from "com.ibm.icu.text.UnicodeSet"
import { $TextTrieMap$Output$$Type } from "com.ibm.icu.impl.TextTrieMap$Output"
import { $TextTrieMap$ResultHandler$$Type } from "com.ibm.icu.impl.TextTrieMap$ResultHandler"

export class $TextTrieMap<V = any> {
constructor(boolean0: boolean)

public "find"(charSequence0: charseq, int1: integer, resultHandler2: $TextTrieMap$ResultHandler$$Type<V>): void
public "find"(charSequence0: charseq, resultHandler1: $TextTrieMap$ResultHandler$$Type<V>): void
public "get"(charSequence0: charseq, int1: integer, output2: $TextTrieMap$Output$$Type): $Iterator<V>
public "get"(charSequence0: charseq, int1: integer): $Iterator<V>
public "get"(string0: string): $Iterator<V>
public "put"(charSequence0: charseq, v1: V): $TextTrieMap<V>
public "putLeadCodePoints"(unicodeSet0: $UnicodeSet$$Type): void
}
}

declare module "com.ibm.icu.math.BigDecimal" {
import { $BigDecimal as $BigDecimal$0, $BigDecimal$$Type as $BigDecimal$0$$Type } from "java.math.BigDecimal"
import { $BigInteger, $BigInteger$$Type } from "java.math.BigInteger"
import { $Comparable } from "java.lang.Comparable"
import { $Number } from "java.lang.Number"
import { $MathContext$$Type } from "com.ibm.icu.math.MathContext"
import { $Serializable } from "java.io.Serializable"

export class $BigDecimal extends $Number implements $Serializable, $Comparable<$BigDecimal> {
static readonly "ONE": $BigDecimal
static readonly "ROUND_CEILING": integer
static readonly "ROUND_DOWN": integer
static readonly "ROUND_FLOOR": integer
static readonly "ROUND_HALF_DOWN": integer
static readonly "ROUND_HALF_EVEN": integer
static readonly "ROUND_HALF_UP": integer
static readonly "ROUND_UNNECESSARY": integer
static readonly "ROUND_UP": integer
static readonly "TEN": $BigDecimal
static readonly "ZERO": $BigDecimal

constructor(double0: double)
constructor(int0: integer)
constructor(long0: long)
constructor(string0: string)
constructor(bigDecimal0: $BigDecimal$0$$Type)
constructor(bigInteger0: $BigInteger$$Type)
constructor(bigInteger0: $BigInteger$$Type, int1: integer)
constructor(char0s: character[])
constructor(char0s: character[], int1: integer, int2: integer)

public "abs"(): $BigDecimal
public "abs"(mathContext0: $MathContext$$Type): $BigDecimal
public "add"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "add"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "byteValueExact"(): byte
public "compareTo"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): integer
public "compareTo"(bigDecimal0: $BigDecimal$$Type): integer
public "divide"(bigDecimal0: $BigDecimal$$Type, int1: integer): $BigDecimal
public "divide"(bigDecimal0: $BigDecimal$$Type, int1: integer, int2: integer): $BigDecimal
public "divide"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "divide"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "divideInteger"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "divideInteger"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "format"(int0: integer, int1: integer): string
public "format"(int0: integer, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer): string
public "intValueExact"(): integer
public "longValueExact"(): long
public "max"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "max"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "min"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "min"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "movePointLeft"(int0: integer): $BigDecimal
public "movePointRight"(int0: integer): $BigDecimal
public "multiply"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "multiply"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "negate"(mathContext0: $MathContext$$Type): $BigDecimal
public "negate"(): $BigDecimal
public "plus"(): $BigDecimal
public "plus"(mathContext0: $MathContext$$Type): $BigDecimal
public "pow"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "pow"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "remainder"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "remainder"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "scale"(): integer
public "setScale"(int0: integer, int1: integer): $BigDecimal
public "setScale"(int0: integer): $BigDecimal
public "shortValueExact"(): short
public "signum"(): integer
public "subtract"(bigDecimal0: $BigDecimal$$Type, mathContext1: $MathContext$$Type): $BigDecimal
public "subtract"(bigDecimal0: $BigDecimal$$Type): $BigDecimal
public "toBigDecimal"(): $BigDecimal$0
public "toBigInteger"(): $BigInteger
public "toBigIntegerExact"(): $BigInteger
public "toCharArray"(): character[]
public "unscaledValue"(): $BigInteger
public static "valueOf"(long0: long, int1: integer): $BigDecimal
public static "valueOf"(double0: double): $BigDecimal
public static "valueOf"(long0: long): $BigDecimal
}
}

declare module "com.ibm.icu.impl.units.MeasureUnitImpl" {
import { $MeasureUnitImpl$MeasureUnitImplWithIndex } from "com.ibm.icu.impl.units.MeasureUnitImpl$MeasureUnitImplWithIndex"
import { $SingleUnitImpl, $SingleUnitImpl$$Type } from "com.ibm.icu.impl.units.SingleUnitImpl"
import { $MeasureUnit } from "com.ibm.icu.util.MeasureUnit"
import { $MeasureUnit$Complexity, $MeasureUnit$Complexity$$Type } from "com.ibm.icu.util.MeasureUnit$Complexity"
import { $ArrayList } from "java.util.ArrayList"

export class $MeasureUnitImpl {
constructor()
constructor(singleUnitImpl0: $SingleUnitImpl$$Type)

public "appendSingleUnit"(singleUnitImpl0: $SingleUnitImpl$$Type): boolean
public "applyDimensionality"(int0: integer): void
public "build"(): $MeasureUnit
public "copy"(): $MeasureUnitImpl
public "copyAndSimplify"(): $MeasureUnitImpl
public "extractIndividualUnitsWithIndices"(): $ArrayList<$MeasureUnitImpl$MeasureUnitImplWithIndex>
public static "forCurrencyCode"(string0: string): $MeasureUnitImpl
public static "forIdentifier"(string0: string): $MeasureUnitImpl
public "getComplexity"(): $MeasureUnit$Complexity
public "getIdentifier"(): string
public "getSingleUnitImpl"(): $SingleUnitImpl
public "getSingleUnits"(): $ArrayList<$SingleUnitImpl>
public "serialize"(): void
public "setComplexity"(complexity0: $MeasureUnit$Complexity$$Type): void
public "takeReciprocal"(): void
get "complexity"(): $MeasureUnit$Complexity
get "identifier"(): string
get "singleUnitImpl"(): $SingleUnitImpl
get "singleUnits"(): $ArrayList<$SingleUnitImpl>
set "complexity"(value: $MeasureUnit$Complexity$$Type)
}
}

declare module "com.ibm.icu.util.Freezable" {
import { $Cloneable } from "java.lang.Cloneable"

export interface $Freezable<T = any> extends $Cloneable {
"cloneAsThawed"(): T
"freeze"(): T
"isFrozen"(): boolean
get "frozen"(): boolean
}

export namespace $Freezable {
const probejs$$marker: never
}
export abstract class $Freezable$$Static<T = any> implements $Freezable<T> {
}
}

declare module "com.ibm.icu.util.OutputInt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** @deprecated */
export class $OutputInt {
/** @deprecated */
constructor()
/** @deprecated */
constructor(int0: integer)

/** @deprecated */
get "value"(): integer
/** @deprecated */
set "value"(value: integer)
}
}

declare module "com.ibm.icu.text.UnicodeSet$XSymbolTable" {
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $UnicodeMatcher } from "com.ibm.icu.text.UnicodeMatcher"
import { $UnicodeSet$$Type } from "com.ibm.icu.text.UnicodeSet"
import { $SymbolTable } from "com.ibm.icu.text.SymbolTable"

export class $UnicodeSet$XSymbolTable implements $SymbolTable {
constructor()

public "applyPropertyAlias"(string0: string, string1: string, unicodeSet2: $UnicodeSet$$Type): boolean
public "lookup"(string0: string): character[]
public "lookupMatcher"(int0: integer): $UnicodeMatcher
public "parseReference"(string0: string, parsePosition1: $ParsePosition$$Type, int2: integer): string
}
}

declare module "com.ibm.icu.text.UnicodeSet$SpanCondition" {
import { $Enum } from "java.lang.Enum"

export class $UnicodeSet$SpanCondition extends $Enum<$UnicodeSet$SpanCondition> {
static readonly "CONDITION_COUNT": $UnicodeSet$SpanCondition
static readonly "CONTAINED": $UnicodeSet$SpanCondition
static readonly "NOT_CONTAINED": $UnicodeSet$SpanCondition
static readonly "SIMPLE": $UnicodeSet$SpanCondition

public static "valueOf"(string0: string): $UnicodeSet$SpanCondition
public static "values"(): $UnicodeSet$SpanCondition[]
}
}

declare module "com.ibm.icu.text.DisplayContext" {
import { $Enum } from "java.lang.Enum"
import { $DisplayContext$Type } from "com.ibm.icu.text.DisplayContext$Type"

export class $DisplayContext extends $Enum<$DisplayContext> {
static readonly "CAPITALIZATION_FOR_BEGINNING_OF_SENTENCE": $DisplayContext
static readonly "CAPITALIZATION_FOR_MIDDLE_OF_SENTENCE": $DisplayContext
static readonly "CAPITALIZATION_FOR_STANDALONE": $DisplayContext
static readonly "CAPITALIZATION_FOR_UI_LIST_OR_MENU": $DisplayContext
static readonly "CAPITALIZATION_NONE": $DisplayContext
static readonly "DIALECT_NAMES": $DisplayContext
static readonly "LENGTH_FULL": $DisplayContext
static readonly "LENGTH_SHORT": $DisplayContext
static readonly "NO_SUBSTITUTE": $DisplayContext
static readonly "STANDARD_NAMES": $DisplayContext
static readonly "SUBSTITUTE": $DisplayContext

public "type"(): $DisplayContext$Type
public "value"(): integer
public static "valueOf"(string0: string): $DisplayContext
public static "values"(): $DisplayContext[]
}
}

declare module "com.ibm.icu.util.ULocale$Type" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ULocale$Type {
}
}

declare module "com.ibm.icu.util.Measure" {
import { $MeasureUnit, $MeasureUnit$$Type } from "com.ibm.icu.util.MeasureUnit"

export class $Measure {
constructor(number0: number, measureUnit1: $MeasureUnit$$Type)

public "getNumber"(): number
public "getUnit"(): $MeasureUnit
get "number"(): number
get "unit"(): $MeasureUnit
}
}

declare module "com.ibm.icu.text.NumberFormat" {
import { $NumberFormat$NumberFormatFactory$$Type } from "com.ibm.icu.text.NumberFormat$NumberFormatFactory"
import { $Currency, $Currency$$Type } from "com.ibm.icu.util.Currency"
import { $ParsePosition$$Type } from "java.text.ParsePosition"
import { $CurrencyAmount, $CurrencyAmount$$Type } from "com.ibm.icu.util.CurrencyAmount"
import { $BigDecimal$$Type } from "java.math.BigDecimal"
import { $ULocale, $ULocale$$Type } from "com.ibm.icu.util.ULocale"
import { $FieldPosition$$Type } from "java.text.FieldPosition"
import { $DisplayContext, $DisplayContext$$Type } from "com.ibm.icu.text.DisplayContext"
import { $UFormat } from "com.ibm.icu.text.UFormat"
import { $DisplayContext$Type$$Type } from "com.ibm.icu.text.DisplayContext$Type"
import { $StringBuffer, $StringBuffer$$Type } from "java.lang.StringBuffer"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $BigDecimal$$Type as $BigDecimal$0$$Type } from "com.ibm.icu.math.BigDecimal"
import { $BigInteger$$Type } from "java.math.BigInteger"

export class $NumberFormat extends $UFormat {
static readonly "ACCOUNTINGCURRENCYSTYLE": integer
static readonly "CASHCURRENCYSTYLE": integer
static readonly "CURRENCYSTYLE": integer
static readonly "FRACTION_FIELD": integer
static readonly "INTEGERSTYLE": integer
static readonly "INTEGER_FIELD": integer
static readonly "ISOCURRENCYSTYLE": integer
static readonly "NUMBERSTYLE": integer
static readonly "PERCENTSTYLE": integer
static readonly "PLURALCURRENCYSTYLE": integer
static readonly "SCIENTIFICSTYLE": integer
static readonly "STANDARDCURRENCYSTYLE": integer

constructor()

public "format"(bigDecimal0: $BigDecimal$0$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(bigDecimal0: $BigDecimal$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(bigInteger0: $BigInteger$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(currencyAmount0: $CurrencyAmount$$Type, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(long0: long): string
public "format"(bigDecimal0: $BigDecimal$$Type): string
public "format"(double0: double): string
public "format"(bigInteger0: $BigInteger$$Type): string
public "format"(long0: long, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public "format"(bigDecimal0: $BigDecimal$0$$Type): string
public "format"(currencyAmount0: $CurrencyAmount$$Type): string
public "format"(double0: double, stringBuffer1: $StringBuffer$$Type, fieldPosition2: $FieldPosition$$Type): $StringBuffer
public static "getAvailableLocales"(): $Locale[]
public static "getAvailableULocales"(): $ULocale[]
public "getContext"(type0: $DisplayContext$Type$$Type): $DisplayContext
public "getCurrency"(): $Currency
public static "getCurrencyInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getCurrencyInstance"(uLocale0: $ULocale$$Type): $NumberFormat
public static "getCurrencyInstance"(): $NumberFormat
public static "getInstance"(locale0: $Locale$$Type, int1: integer): $NumberFormat
public static "getInstance"(uLocale0: $ULocale$$Type): $NumberFormat
public static "getInstance"(): $NumberFormat
public static "getInstance"(int0: integer): $NumberFormat
public static "getInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getInstance"(uLocale0: $ULocale$$Type, int1: integer): $NumberFormat
public static "getIntegerInstance"(uLocale0: $ULocale$$Type): $NumberFormat
public static "getIntegerInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getIntegerInstance"(): $NumberFormat
public "getMaximumFractionDigits"(): integer
public "getMaximumIntegerDigits"(): integer
public "getMinimumFractionDigits"(): integer
public "getMinimumIntegerDigits"(): integer
public static "getNumberInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getNumberInstance"(): $NumberFormat
public static "getNumberInstance"(uLocale0: $ULocale$$Type): $NumberFormat
/** @deprecated */
public static "getPatternForStyle"(uLocale0: $ULocale$$Type, int1: integer): string
/** @deprecated */
public static "getPatternForStyleAndNumberingSystem"(uLocale0: $ULocale$$Type, string1: string, int2: integer): string
public static "getPercentInstance"(uLocale0: $ULocale$$Type): $NumberFormat
public static "getPercentInstance"(locale0: $Locale$$Type): $NumberFormat
public static "getPercentInstance"(): $NumberFormat
public "getRoundingMode"(): integer
public static "getScientificInstance"(uLocale0: $ULocale$$Type): $NumberFormat
public static "getScientificInstance"(): $NumberFormat
public static "getScientificInstance"(locale0: $Locale$$Type): $NumberFormat
public "isGroupingUsed"(): boolean
public "isParseIntegerOnly"(): boolean
public "isParseStrict"(): boolean
public "parse"(string0: string): number
public "parse"(string0: string, parsePosition1: $ParsePosition$$Type): number
public "parseCurrency"(charSequence0: charseq, parsePosition1: $ParsePosition$$Type): $CurrencyAmount
public static "registerFactory"(numberFormatFactory0: $NumberFormat$NumberFormatFactory$$Type): any
public "setContext"(displayContext0: $DisplayContext$$Type): void
public "setCurrency"(currency0: $Currency$$Type): void
public "setGroupingUsed"(boolean0: boolean): void
public "setMaximumFractionDigits"(int0: integer): void
public "setMaximumIntegerDigits"(int0: integer): void
public "setMinimumFractionDigits"(int0: integer): void
public "setMinimumIntegerDigits"(int0: integer): void
public "setParseIntegerOnly"(boolean0: boolean): void
public "setParseStrict"(boolean0: boolean): void
public "setRoundingMode"(int0: integer): void
public static "unregister"(object0: any): boolean
get "currency"(): $Currency
get "maximumFractionDigits"(): integer
get "maximumIntegerDigits"(): integer
get "minimumFractionDigits"(): integer
get "minimumIntegerDigits"(): integer
get "roundingMode"(): integer
get "groupingUsed"(): boolean
get "parseIntegerOnly"(): boolean
get "parseStrict"(): boolean
set "context"(value: $DisplayContext$$Type)
set "currency"(value: $Currency$$Type)
set "groupingUsed"(value: boolean)
set "maximumFractionDigits"(value: integer)
set "maximumIntegerDigits"(value: integer)
set "minimumFractionDigits"(value: integer)
set "minimumIntegerDigits"(value: integer)
set "parseIntegerOnly"(value: boolean)
set "parseStrict"(value: boolean)
set "roundingMode"(value: integer)
}
}

