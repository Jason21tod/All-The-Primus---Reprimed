declare module "icyllis.modernui.core.Context" {
import { $Resources$Theme } from "icyllis.modernui.resources.Resources$Theme"
import { $TypedArray } from "icyllis.modernui.resources.TypedArray"
import { $Resources } from "icyllis.modernui.resources.Resources"
import { $AttributeSet$$Type } from "icyllis.modernui.util.AttributeSet"
import { $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"

export class $Context {
static readonly "WINDOW_SERVICE": string

constructor()

public "getResources"(): $Resources
public "getSystemService"(string0: string): any
public "getTheme"(): $Resources$Theme
public "obtainStyledAttributes"(set: $AttributeSet$$Type, defStyleAttr: $ResourceId$$Type, defStyleRes: $ResourceId$$Type, attrs: string[]): $TypedArray
public "obtainStyledAttributes"(attrs: string[]): $TypedArray
public "obtainStyledAttributes"(resId: $ResourceId$$Type, attrs: string[]): $TypedArray
public "obtainStyledAttributes"(set: $AttributeSet$$Type, attrs: string[]): $TypedArray
public "setTheme"(resourceId0: $ResourceId$$Type): void
get "resources"(): $Resources
get "theme"(): $Resources$Theme
set "theme"(value: $ResourceId$$Type)
}
}

declare module "icyllis.modernui.fragment.FragmentManager$OnBackStackChangedListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FragmentManager$OnBackStackChangedListener {
"onBackStackChanged"(): void
}

export namespace $FragmentManager$OnBackStackChangedListener {
const probejs$$marker: never
}
export abstract class $FragmentManager$OnBackStackChangedListener$$Static implements $FragmentManager$OnBackStackChangedListener {
}
}

declare module "icyllis.modernui.graphics.Outline" {
import { $Rect, $Rect$$Type } from "icyllis.modernui.graphics.Rect"

export class $Outline {
static readonly "TYPE_EMPTY": integer
static readonly "TYPE_NONE": integer
static readonly "TYPE_ROUND_RECT": integer

constructor()

public "getAlpha"(): float
public "getBounds"(): $Rect
public "getRadius"(): float
public "getRect"(outRect: $Rect$$Type): boolean
public "getShouldClip"(): boolean
public "getType"(): integer
public "isEmpty"(): boolean
public "setAlpha"(alpha: float): void
public "setEmpty"(): void
public "setNone"(): void
public "setRect"(left: integer, top: integer, right: integer, bottom: integer): void
public "setRect"(rect: $Rect$$Type): void
public "setRoundRect"(rect: $Rect$$Type, radius: float): void
public "setRoundRect"(left: integer, top: integer, right: integer, bottom: integer, radius: float): void
public "setShouldClip"(clip: boolean): void
get "alpha"(): float
get "bounds"(): $Rect
get "radius"(): float
get "shouldClip"(): boolean
get "type"(): integer
get "empty"(): boolean
set "alpha"(value: float)
set "rect"(value: $Rect$$Type)
set "shouldClip"(value: boolean)
}
}

declare module "icyllis.modernui.transition.TransitionValues" {
import { $Map } from "java.util.Map"
import { $View, $View$$Type } from "icyllis.modernui.view.View"

export class $TransitionValues {
readonly "values": $Map<string, any>
readonly "view": $View

constructor(view: $View$$Type)

}
}

declare module "icyllis.modernui.view.MenuItem$OnActionExpandListener" {
import { $MenuItem$$Type } from "icyllis.modernui.view.MenuItem"

export interface $MenuItem$OnActionExpandListener {
"onMenuItemActionCollapse"(menuItem0: $MenuItem$$Type): boolean
"onMenuItemActionExpand"(menuItem0: $MenuItem$$Type): boolean
}

export namespace $MenuItem$OnActionExpandListener {
const probejs$$marker: never
}
export abstract class $MenuItem$OnActionExpandListener$$Static implements $MenuItem$OnActionExpandListener {
}
}

declare module "icyllis.modernui.fragment.FragmentManager" {
import { $PrintWriter$$Type } from "java.io.PrintWriter"
import { $FragmentResultListener$$Type } from "icyllis.modernui.fragment.FragmentResultListener"
import { $FragmentFactory, $FragmentFactory$$Type } from "icyllis.modernui.fragment.FragmentFactory"
import { $FragmentOnAttachListener$$Type } from "icyllis.modernui.fragment.FragmentOnAttachListener"
import { $FragmentManager$BackStackEntry } from "icyllis.modernui.fragment.FragmentManager$BackStackEntry"
import { $FragmentTransaction } from "icyllis.modernui.fragment.FragmentTransaction"
import { $List } from "java.util.List"
import { $DataSet$$Type } from "icyllis.modernui.util.DataSet"
import { $FileDescriptor$$Type } from "java.io.FileDescriptor"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $FragmentResultOwner } from "icyllis.modernui.fragment.FragmentResultOwner"
import { $FragmentManager$OnBackStackChangedListener$$Type } from "icyllis.modernui.fragment.FragmentManager$OnBackStackChangedListener"
import { $Fragment, $Fragment$$Type } from "icyllis.modernui.fragment.Fragment"
import { $FragmentLifecycleCallbacks$$Type } from "icyllis.modernui.fragment.FragmentLifecycleCallbacks"
import { $LifecycleOwner$$Type } from "icyllis.modernui.lifecycle.LifecycleOwner"

export class $FragmentManager implements $FragmentResultOwner {
static readonly "POP_BACK_STACK_INCLUSIVE": integer

public "addFragmentOnAttachListener"(listener: $FragmentOnAttachListener$$Type): void
public "addOnBackStackChangedListener"(listener: $FragmentManager$OnBackStackChangedListener$$Type): void
public "beginTransaction"(): $FragmentTransaction
public "clearFragmentResult"(requestKey: string): void
public "clearFragmentResultListener"(requestKey: string): void
public "dump"(prefix: string, fd: $FileDescriptor$$Type, writer: $PrintWriter$$Type, ...args: string[]): void
public "executePendingTransactions"(): boolean
public static "findFragment"<F extends $Fragment>(view: $View$$Type): F
public "findFragmentById"(id: integer): $Fragment
public "findFragmentByTag"(tag: string): $Fragment
public "getBackStackEntryAt"(index: integer): $FragmentManager$BackStackEntry
public "getBackStackEntryCount"(): integer
public "getFragment"(bundle: $DataSet$$Type, key: string): $Fragment
public "getFragmentFactory"(): $FragmentFactory
public "getFragments"(): $List<$Fragment>
public "getPrimaryNavigationFragment"(): $Fragment
public "isDestroyed"(): boolean
public "isStateSaved"(): boolean
public "popBackStack"(): void
public "popBackStack"(id: integer, flags: integer): void
public "popBackStack"(name: string, flags: integer): void
public "popBackStackImmediate"(): boolean
public "popBackStackImmediate"(name: string, flags: integer): boolean
public "popBackStackImmediate"(id: integer, flags: integer): boolean
public "putFragment"(bundle: $DataSet$$Type, key: string, fragment: $Fragment$$Type): void
public "registerFragmentLifecycleCallbacks"(cb: $FragmentLifecycleCallbacks$$Type, recursive: boolean): void
public "removeFragmentOnAttachListener"(listener: $FragmentOnAttachListener$$Type): void
public "removeOnBackStackChangedListener"(listener: $FragmentManager$OnBackStackChangedListener$$Type): void
public "setFragmentFactory"(fragmentFactory: $FragmentFactory$$Type): void
public "setFragmentResult"(requestKey: string, result: $DataSet$$Type): void
public "setFragmentResultListener"(requestKey: string, lifecycleOwner: $LifecycleOwner$$Type, listener: $FragmentResultListener$$Type): void
public "unregisterFragmentLifecycleCallbacks"(cb: $FragmentLifecycleCallbacks$$Type): void
get "backStackEntryCount"(): integer
get "fragmentFactory"(): $FragmentFactory
get "fragments"(): $List<$Fragment>
get "primaryNavigationFragment"(): $Fragment
get "destroyed"(): boolean
get "stateSaved"(): boolean
set "fragmentFactory"(value: $FragmentFactory$$Type)
}
}

declare module "icyllis.modernui.animation.Animator" {
import { $List } from "java.util.List"
import { $Cloneable } from "java.lang.Cloneable"
import { $Marker } from "org.slf4j.Marker"
import { $AnimatorListener, $AnimatorListener$$Type } from "icyllis.modernui.animation.AnimatorListener"
import { $TimeInterpolator, $TimeInterpolator$$Type } from "icyllis.modernui.animation.TimeInterpolator"

export class $Animator implements $Cloneable {
static readonly "DURATION_INFINITE": long
static readonly "MARKER": $Marker

constructor()

public "addListener"(listener: $AnimatorListener$$Type): void
public "canReverse"(): boolean
public "cancel"(): void
public "end"(): void
public "getDuration"(): long
public "getInterpolator"(): $TimeInterpolator
public "getListeners"(): $List<$AnimatorListener>
public "getStartDelay"(): long
public "getTotalDuration"(): long
public "isPaused"(): boolean
public "isRunning"(): boolean
public "isStarted"(): boolean
public "pause"(): void
public "removeAllListeners"(): void
public "removeListener"(listener: $AnimatorListener$$Type): void
public "resume"(): void
public "reverse"(): void
public "setDuration"(long0: long): $Animator
public "setInterpolator"(timeInterpolator0: $TimeInterpolator$$Type): void
public "setStartDelay"(long0: long): void
public "setTarget"(target: any): void
public "setupEndValues"(): void
public "setupStartValues"(): void
public "start"(): void
get "duration"(): long
get "interpolator"(): $TimeInterpolator
get "listeners"(): $List<$AnimatorListener>
get "startDelay"(): long
get "totalDuration"(): long
get "paused"(): boolean
get "running"(): boolean
get "started"(): boolean
set "duration"(value: long)
set "interpolator"(value: $TimeInterpolator$$Type)
set "startDelay"(value: long)
set "target"(value: any)
}
}

declare module "icyllis.modernui.graphics.drawable.Drawable$ConstantState" {
import { $Drawable } from "icyllis.modernui.graphics.drawable.Drawable"
import { $Resources$$Type } from "icyllis.modernui.resources.Resources"

export class $Drawable$ConstantState {
constructor()

public "canApplyTheme"(): boolean
public "getChangingConfigurations"(): integer
public "newDrawable"(): $Drawable
public "newDrawable"(res: $Resources$$Type): $Drawable
get "changingConfigurations"(): integer
}
}

declare module "icyllis.modernui.view.ViewManager" {
import { $ViewGroup$LayoutParams$$Type } from "icyllis.modernui.view.ViewGroup$LayoutParams"
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $ViewManager {
"addView"(view0: $View$$Type, layoutParams1: $ViewGroup$LayoutParams$$Type): void
"removeView"(view0: $View$$Type): void
"updateViewLayout"(view0: $View$$Type, layoutParams1: $ViewGroup$LayoutParams$$Type): void
}

export namespace $ViewManager {
const probejs$$marker: never
}
export abstract class $ViewManager$$Static implements $ViewManager {
}
}

declare module "icyllis.modernui.core.MessageQueue$IdleHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MessageQueue$IdleHandler {
"queueIdle"(): boolean
}

export namespace $MessageQueue$IdleHandler {
const probejs$$marker: never
}
export abstract class $MessageQueue$IdleHandler$$Static implements $MessageQueue$IdleHandler {
}
}

declare module "icyllis.modernui.view.View$OnGenericMotionListener" {
import { $View$$Type } from "icyllis.modernui.view.View"
import { $MotionEvent$$Type } from "icyllis.modernui.view.MotionEvent"

export interface $View$OnGenericMotionListener {
"onGenericMotion"(view0: $View$$Type, motionEvent1: $MotionEvent$$Type): boolean
}

export namespace $View$OnGenericMotionListener {
const probejs$$marker: never
}
export abstract class $View$OnGenericMotionListener$$Static implements $View$OnGenericMotionListener {
}
}

declare module "icyllis.modernui.graphics.Paint$Cap" {
import { $Enum } from "java.lang.Enum"

export class $Paint$Cap extends $Enum<$Paint$Cap> {
static readonly "BUTT": $Paint$Cap
static readonly "ROUND": $Paint$Cap
static readonly "SQUARE": $Paint$Cap
readonly "nativeInt": integer

public static "valueOf"(name: string): $Paint$Cap
public static "values"(): $Paint$Cap[]
}
}

declare module "icyllis.modernui.view.ActionProvider$SubUiVisibilityListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ActionProvider$SubUiVisibilityListener {
"onSubUiVisibilityChanged"(boolean0: boolean): void
}

export namespace $ActionProvider$SubUiVisibilityListener {
const probejs$$marker: never
}
export abstract class $ActionProvider$SubUiVisibilityListener$$Static implements $ActionProvider$SubUiVisibilityListener {
}
}

declare module "icyllis.modernui.util.Parcelable$Creator" {
import { $Parcel$$Type } from "icyllis.modernui.util.Parcel"

export interface $Parcelable$Creator<T = any> {
"createFromParcel"(parcel0: $Parcel$$Type): T
}

export namespace $Parcelable$Creator {
const probejs$$marker: never
}
export abstract class $Parcelable$Creator$$Static<T = any> implements $Parcelable$Creator<T> {
}
}

declare module "icyllis.modernui.graphics.Shader" {
import { $Shader as $Shader$0 } from "icyllis.arc3d.sketch.shaders.Shader"

export class $Shader {
constructor()

public "getNativeShader"(): $Shader$0
public "release"(): void
get "nativeShader"(): $Shader$0
}
}

declare module "icyllis.modernui.fragment.FragmentManager$BackStackEntry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FragmentManager$BackStackEntry {
"getId"(): integer
"getName"(): string
get "id"(): integer
get "name"(): string
}

export namespace $FragmentManager$BackStackEntry {
const probejs$$marker: never
}
export abstract class $FragmentManager$BackStackEntry$$Static implements $FragmentManager$BackStackEntry {
}
}

declare module "icyllis.modernui.lifecycle.Observer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Observer<T = any> {
"onChanged"(t0: T): void
}

export namespace $Observer {
const probejs$$marker: never
}
export abstract class $Observer$$Static<T = any> implements $Observer<T> {
}
}

declare module "icyllis.modernui.util.Parcelable$ClassLoaderCreator" {
import { $Parcel$$Type } from "icyllis.modernui.util.Parcel"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $Parcelable$Creator } from "icyllis.modernui.util.Parcelable$Creator"

export interface $Parcelable$ClassLoaderCreator<T = any> extends $Parcelable$Creator<T> {
"createFromParcel"(source: $Parcel$$Type): T
"createFromParcel"(parcel0: $Parcel$$Type, classLoader1: $ClassLoader$$Type): T
}

export namespace $Parcelable$ClassLoaderCreator {
const probejs$$marker: never
}
export abstract class $Parcelable$ClassLoaderCreator$$Static<T = any> implements $Parcelable$ClassLoaderCreator<T> {
}
}

declare module "icyllis.modernui.view.View$OnAttachStateChangeListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnAttachStateChangeListener {
"onViewAttachedToWindow"(view0: $View$$Type): void
"onViewDetachedFromWindow"(view0: $View$$Type): void
}

export namespace $View$OnAttachStateChangeListener {
const probejs$$marker: never
}
export abstract class $View$OnAttachStateChangeListener$$Static implements $View$OnAttachStateChangeListener {
}
}

declare module "icyllis.modernui.view.ViewTreeObserver$OnGlobalLayoutListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ViewTreeObserver$OnGlobalLayoutListener {
"onGlobalLayout"(): void
}

export namespace $ViewTreeObserver$OnGlobalLayoutListener {
const probejs$$marker: never
}
export abstract class $ViewTreeObserver$OnGlobalLayoutListener$$Static implements $ViewTreeObserver$OnGlobalLayoutListener {
}
}

declare module "icyllis.modernui.view.View$DragShadow" {
import { $Canvas$$Type } from "icyllis.modernui.graphics.Canvas"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $Point$$Type } from "icyllis.modernui.graphics.Point"

export class $View$DragShadow {
constructor(view: $View$$Type)
constructor()

public "getView"(): $View
public "onDrawShadow"(canvas: $Canvas$$Type): void
public "onProvideShadowCenter"(outShadowCenter: $Point$$Type): void
get "view"(): $View
}
}

declare module "icyllis.modernui.mc.mixin.AccessPostChain" {
import { $List } from "java.util.List"
import { $PostPass } from "net.minecraft.client.renderer.PostPass"

export interface $AccessPostChain {
"getPasses"(): $List<$PostPass>
get "passes"(): $List<$PostPass>
}

export namespace $AccessPostChain {
const probejs$$marker: never
}
export abstract class $AccessPostChain$$Static implements $AccessPostChain {
}
}

declare module "icyllis.modernui.graphics.text.FontFamily" {
import { $Locale$$Type } from "java.util.Locale"
import { $Map } from "java.util.Map"
import { $Font, $Font$$Type } from "icyllis.modernui.graphics.text.Font"
import { $File$$Type } from "java.io.File"
import { $InputStream$$Type } from "java.io.InputStream"

export class $FontFamily {
static readonly "MONOSPACED": $FontFamily
static readonly "SANS_SERIF": $FontFamily
static readonly "SERIF": $FontFamily

constructor(font: $Font$$Type)

public static "createFamilies"(stream: $InputStream$$Type, register: boolean): $FontFamily[]
public static "createFamilies"(file: $File$$Type, register: boolean): $FontFamily[]
public static "createFamily"(stream: $InputStream$$Type, register: boolean): $FontFamily
public static "createFamily"(file: $File$$Type, register: boolean): $FontFamily
public "getClosestMatch"(style: integer): $Font
public "getFamilyName"(locale: $Locale$$Type): string
public "getFamilyName"(): string
public static "getSystemFontAliases"(): $Map<string, string>
public static "getSystemFontMap"(): $Map<string, $FontFamily>
public static "getSystemFontWithAlias"(name: string): $FontFamily
public "hasGlyph"(ch: integer, vs: integer): boolean
public "hasGlyph"(ch: integer): boolean
public "isColorEmojiFamily"(): boolean
public "isEastAsianFamily"(): boolean
get "familyName"(): string
get "colorEmojiFamily"(): boolean
get "eastAsianFamily"(): boolean
}
}

declare module "icyllis.modernui.graphics.Point" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Point {
constructor(p: $Point$$Type)
constructor(x: integer, y: integer)
constructor()

public "copy"(): $Point
public static "copy"(p: $Point$$Type): $Point
public "negate"(): void
public "offset"(dx: integer, dy: integer): void
public "set"(x: integer, y: integer): void
public "set"(p: $Point$$Type): void
get "x"(): integer
set "x"(value: integer)
get "y"(): integer
set "y"(value: integer)
}
}

declare module "icyllis.modernui.view.AttachInfo$Callbacks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AttachInfo$Callbacks {
"performHapticFeedback"(int0: integer, boolean1: boolean): boolean
"playSoundEffect"(int0: integer): void
}

export namespace $AttachInfo$Callbacks {
const probejs$$marker: never
}
export abstract class $AttachInfo$Callbacks$$Static implements $AttachInfo$Callbacks {
}
}

declare module "icyllis.modernui.view.ActionMode$Callback" {
import { $ActionMode$$Type } from "icyllis.modernui.view.ActionMode"
import { $MenuItem$$Type } from "icyllis.modernui.view.MenuItem"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Menu$$Type } from "icyllis.modernui.view.Menu"

export interface $ActionMode$Callback {
"onActionItemClicked"(actionMode0: $ActionMode$$Type, menuItem1: $MenuItem$$Type): boolean
"onCreateActionMode"(actionMode0: $ActionMode$$Type, menu1: $Menu$$Type): boolean
"onDestroyActionMode"(actionMode0: $ActionMode$$Type): void
"onGetContentRect"(mode: $ActionMode$$Type, view: $View$$Type, outRect: $Rect$$Type): void
"onPrepareActionMode"(actionMode0: $ActionMode$$Type, menu1: $Menu$$Type): boolean
}

export namespace $ActionMode$Callback {
const probejs$$marker: never
}
export abstract class $ActionMode$Callback$$Static implements $ActionMode$Callback {
}
}

declare module "icyllis.modernui.core.Message" {
import { $Runnable, $Runnable$$Type } from "java.lang.Runnable"
import { $Handler, $Handler$$Type } from "icyllis.modernui.core.Handler"

export class $Message {
constructor()

public "getCallback"(): $Runnable
public "getTarget"(): $Handler
public "getWhen"(): long
public "isAsynchronous"(): boolean
public static "obtain"(): $Message
public static "obtain"(h: $Handler$$Type, what: integer, obj: any): $Message
public static "obtain"(o: $Message$$Type): $Message
public static "obtain"(h: $Handler$$Type): $Message
public static "obtain"(h: $Handler$$Type, callback: $Runnable$$Type): $Message
public static "obtain"(h: $Handler$$Type, what: integer, int2: integer, int3: integer): $Message
public static "obtain"(h: $Handler$$Type, what: integer, int2: integer, int3: integer, obj: any): $Message
public static "obtain"(h: $Handler$$Type, what: integer): $Message
public "recycle"(): void
public "sendToTarget"(): void
public "setAsynchronous"(async: boolean): void
get "arg1"(): integer
set "arg1"(value: integer)
get "arg2"(): integer
set "arg2"(value: integer)
get "obj"(): any
set "obj"(value: any)
get "what"(): integer
set "what"(value: integer)
get "callback"(): $Runnable
get "target"(): $Handler
get "when"(): long
get "asynchronous"(): boolean
set "asynchronous"(value: boolean)
}
}

declare module "icyllis.modernui.lifecycle.Lifecycle$State" {
import { $Enum } from "java.lang.Enum"

export class $Lifecycle$State extends $Enum<$Lifecycle$State> {
static readonly "CREATED": $Lifecycle$State
static readonly "DESTROYED": $Lifecycle$State
static readonly "INITIALIZED": $Lifecycle$State
static readonly "RESUMED": $Lifecycle$State
static readonly "STARTED": $Lifecycle$State

public "isAtLeast"(state: $Lifecycle$State$$Type): boolean
public static "valueOf"(name: string): $Lifecycle$State
public static "values"(): $Lifecycle$State[]
}
}

declare module "icyllis.modernui.view.View$OnScrollChangeListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnScrollChangeListener {
"onScrollChange"(view0: $View$$Type, int1: integer, int2: integer, int3: integer, int4: integer): void
}

export namespace $View$OnScrollChangeListener {
const probejs$$marker: never
}
export abstract class $View$OnScrollChangeListener$$Static implements $View$OnScrollChangeListener {
}
}

declare module "icyllis.modernui.mc.forge.OpenMenuEvent" {
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $IModBusEvent } from "net.minecraftforge.fml.event.IModBusEvent"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Fragment$$Type } from "icyllis.modernui.fragment.Fragment"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $OpenMenuEvent extends $Event implements $IModBusEvent, $EventItf {
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "getMenu"(): $AbstractContainerMenu
public "set"(fragment: $Fragment$$Type): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
get "menu"(): $AbstractContainerMenu
}
}

declare module "icyllis.modernui.graphics.Rect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rect {
constructor(r: $Rect$$Type)
constructor(left: integer, top: integer, right: integer, bottom: integer)
constructor()

public "centerX"(): integer
public "centerY"(): integer
public "contains"(x: integer, y: integer): boolean
public "contains"(r: $Rect$$Type): boolean
public "contains"(left: integer, top: integer, right: integer, bottom: integer): boolean
public "copy"(): $Rect
public static "copy"(r: $Rect$$Type): $Rect
public "exactCenterX"(): float
public "exactCenterY"(): float
public "height"(): integer
public "inset"(left: integer, top: integer, right: integer, bottom: integer): void
public "inset"(insets: $Rect$$Type): void
public "inset"(dx: integer, dy: integer): void
public "intersect"(left: integer, top: integer, right: integer, bottom: integer): boolean
public "intersect"(r: $Rect$$Type): boolean
public "intersectUnchecked"(other: $Rect$$Type): void
public static "intersects"(a: $Rect$$Type, b: $Rect$$Type): boolean
public "intersects"(left: integer, top: integer, right: integer, bottom: integer): boolean
public "isEmpty"(): boolean
public "join"(left: integer, top: integer, right: integer, bottom: integer): void
public "offset"(dx: integer, dy: integer): void
public "offsetTo"(newLeft: integer, newTop: integer): void
public "set"(src: $Rect$$Type): void
public "set"(left: integer, top: integer, right: integer, bottom: integer): void
public "setEmpty"(): void
public "setIntersect"(a: $Rect$$Type, b: $Rect$$Type): boolean
public "sort"(): void
public "toShortString"(): string
public "union"(left: integer, top: integer, right: integer, bottom: integer): void
public "union"(r: $Rect$$Type): void
public "union"(x: integer, y: integer): void
public "width"(): integer
public "x"(): integer
public "y"(): integer
get "bottom"(): integer
set "bottom"(value: integer)
get "left"(): integer
set "left"(value: integer)
get "right"(): integer
set "right"(value: integer)
get "top"(): integer
set "top"(value: integer)
get "empty"(): boolean
}
}

declare module "icyllis.modernui.transition.TransitionListener" {
import { $Transition$$Type } from "icyllis.modernui.transition.Transition"

export interface $TransitionListener {
"onTransitionCancel"(transition: $Transition$$Type): void
"onTransitionEnd"(transition: $Transition$$Type): void
"onTransitionPause"(transition: $Transition$$Type): void
"onTransitionResume"(transition: $Transition$$Type): void
"onTransitionStart"(transition: $Transition$$Type): void
}

export namespace $TransitionListener {
const probejs$$marker: never
}
export abstract class $TransitionListener$$Static implements $TransitionListener {
}
}

declare module "icyllis.modernui.graphics.CustomDrawable" {
import { $ImageInfo$$Type } from "icyllis.arc3d.core.ImageInfo"
import { $RectF } from "icyllis.modernui.graphics.RectF"
import { $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $CustomDrawable$DrawHandler } from "icyllis.modernui.graphics.CustomDrawable$DrawHandler"

/** @deprecated */
export interface $CustomDrawable {
"getBounds"(): $RectF
"snapDrawHandler"(int0: integer, matrix41: $Matrix4$$Type, rect2i2: $Rect2i$$Type, imageInfo3: $ImageInfo$$Type): $CustomDrawable$DrawHandler
get "bounds"(): $RectF
}

export namespace $CustomDrawable {
const probejs$$marker: never
}
export abstract class $CustomDrawable$$Static implements $CustomDrawable {
}
}

declare module "icyllis.modernui.animation.TimeInterpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TimeInterpolator {
"getInterpolation"(float0: float): float
}

export namespace $TimeInterpolator {
const ACCELERATE: $TimeInterpolator
const ACCELERATE_DECELERATE: $TimeInterpolator
const ANTICIPATE: $TimeInterpolator
const ANTICIPATE_OVERSHOOT: $TimeInterpolator
const BOUNCE: $TimeInterpolator
const DECELERATE: $TimeInterpolator
const DECELERATE_CUBIC: $TimeInterpolator
const DECELERATE_QUINTIC: $TimeInterpolator
const LINEAR: $TimeInterpolator
const OVERSHOOT: $TimeInterpolator
const SINE: $TimeInterpolator
const VISCOUS_FLUID: $TimeInterpolator
function accelerate(): $TimeInterpolator
function accelerate(factor: float): $TimeInterpolator
function anticipate(): $TimeInterpolator
function anticipate(tension: float): $TimeInterpolator
function bounce(): $TimeInterpolator
function cycle(cycle: float): $TimeInterpolator
function decelerate(): $TimeInterpolator
function decelerate(factor: float): $TimeInterpolator
function linear(): $TimeInterpolator
function overshoot(tension: float): $TimeInterpolator
function overshoot(): $TimeInterpolator
}
export abstract class $TimeInterpolator$$Static implements $TimeInterpolator {
static readonly "ACCELERATE": $TimeInterpolator
static readonly "ACCELERATE_DECELERATE": $TimeInterpolator
static readonly "ANTICIPATE": $TimeInterpolator
static readonly "ANTICIPATE_OVERSHOOT": $TimeInterpolator
static readonly "BOUNCE": $TimeInterpolator
static readonly "DECELERATE": $TimeInterpolator
static readonly "DECELERATE_CUBIC": $TimeInterpolator
static readonly "DECELERATE_QUINTIC": $TimeInterpolator
static readonly "LINEAR": $TimeInterpolator
static readonly "OVERSHOOT": $TimeInterpolator
static readonly "SINE": $TimeInterpolator
static readonly "VISCOUS_FLUID": $TimeInterpolator

static "accelerate"(): $TimeInterpolator
static "accelerate"(factor: float): $TimeInterpolator
static "anticipate"(): $TimeInterpolator
static "anticipate"(tension: float): $TimeInterpolator
static "bounce"(): $TimeInterpolator
static "cycle"(cycle: float): $TimeInterpolator
static "decelerate"(): $TimeInterpolator
static "decelerate"(factor: float): $TimeInterpolator
static "linear"(): $TimeInterpolator
static "overshoot"(tension: float): $TimeInterpolator
static "overshoot"(): $TimeInterpolator
}
}

declare module "icyllis.modernui.resources.Resources$Theme" {
import { $TypedValue$$Type } from "icyllis.modernui.resources.TypedValue"
import { $TypedArray } from "icyllis.modernui.resources.TypedArray"
import { $Resources, $Resources$$Type } from "icyllis.modernui.resources.Resources"
import { $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"
import { $AttributeSet$$Type } from "icyllis.modernui.util.AttributeSet"

export class $Resources$Theme {
constructor(this$0: $Resources$$Type)

public "applyStyle"(resId: $ResourceId$$Type, force: boolean): void
public "clear"(): void
public "getResources"(): $Resources
public "getTheme"(): string[]
public "obtainStyledAttributes"(resId: $ResourceId$$Type, attrs: string[]): $TypedArray
public "obtainStyledAttributes"(set: $AttributeSet$$Type, defStyleAttr: $ResourceId$$Type, defStyleRes: $ResourceId$$Type, attrs: string[]): $TypedArray
public "obtainStyledAttributes"(attrs: string[]): $TypedArray
public "resolveAttribute"(namespace: string, attribute: string, outValue: $TypedValue$$Type, resolveRefs: boolean): boolean
public "resolveAttribute"(resId: $ResourceId$$Type, outValue: $TypedValue$$Type, resolveRefs: boolean): boolean
public "setTo"(other: $Resources$Theme$$Type): void
get "resources"(): $Resources
get "theme"(): string[]
set "to"(value: $Resources$Theme$$Type)
}
}

declare module "icyllis.modernui.view.KeyEvent$DispatcherState" {
import { $KeyEvent$$Type } from "icyllis.modernui.view.KeyEvent"

export class $KeyEvent$DispatcherState {
constructor()

public "handleUpEvent"(event: $KeyEvent$$Type): void
public "isTracking"(event: $KeyEvent$$Type): boolean
public "performedLongPress"(event: $KeyEvent$$Type): void
public "reset"(target: any): void
public "reset"(): void
public "startTracking"(event: $KeyEvent$$Type, target: any): void
}
}

declare module "icyllis.modernui.view.View$OnClickListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnClickListener {
"onClick"(view0: $View$$Type): void
}

export namespace $View$OnClickListener {
const probejs$$marker: never
}
export abstract class $View$OnClickListener$$Static implements $View$OnClickListener {
}
}

declare module "icyllis.modernui.view.ViewTreeObserver$OnPreDrawListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ViewTreeObserver$OnPreDrawListener {
"onPreDraw"(): boolean
}

export namespace $ViewTreeObserver$OnPreDrawListener {
const probejs$$marker: never
}
export abstract class $ViewTreeObserver$OnPreDrawListener$$Static implements $ViewTreeObserver$OnPreDrawListener {
}
}

declare module "icyllis.modernui.lifecycle.LifecycleObserver" {
import { $Lifecycle$Event$$Type } from "icyllis.modernui.lifecycle.Lifecycle$Event"
import { $LifecycleOwner$$Type } from "icyllis.modernui.lifecycle.LifecycleOwner"

export interface $LifecycleObserver {
"onCreate"(owner: $LifecycleOwner$$Type): void
"onDestroy"(owner: $LifecycleOwner$$Type): void
"onPause"(owner: $LifecycleOwner$$Type): void
"onResume"(owner: $LifecycleOwner$$Type): void
"onStart"(owner: $LifecycleOwner$$Type): void
"onStateChanged"(source: $LifecycleOwner$$Type, event: $Lifecycle$Event$$Type): void
"onStop"(owner: $LifecycleOwner$$Type): void
}

export namespace $LifecycleObserver {
const probejs$$marker: never
}
export abstract class $LifecycleObserver$$Static implements $LifecycleObserver {
}
}

declare module "icyllis.modernui.fragment.FragmentLifecycleCallbacks" {
import { $DataSet$$Type } from "icyllis.modernui.util.DataSet"
import { $FragmentManager$$Type } from "icyllis.modernui.fragment.FragmentManager"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Fragment$$Type } from "icyllis.modernui.fragment.Fragment"

export interface $FragmentLifecycleCallbacks {
"onFragmentAttached"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentCreated"(fm: $FragmentManager$$Type, f: $Fragment$$Type, savedInstanceState: $DataSet$$Type): void
"onFragmentDestroyed"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentDetached"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentPaused"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentPreAttached"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentPreCreated"(fm: $FragmentManager$$Type, f: $Fragment$$Type, savedInstanceState: $DataSet$$Type): void
"onFragmentResumed"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentSaveInstanceState"(fm: $FragmentManager$$Type, f: $Fragment$$Type, outState: $DataSet$$Type): void
"onFragmentStarted"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentStopped"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
"onFragmentViewCreated"(fm: $FragmentManager$$Type, f: $Fragment$$Type, v: $View$$Type, savedInstanceState: $DataSet$$Type): void
"onFragmentViewDestroyed"(fm: $FragmentManager$$Type, f: $Fragment$$Type): void
}

export namespace $FragmentLifecycleCallbacks {
const probejs$$marker: never
}
export abstract class $FragmentLifecycleCallbacks$$Static implements $FragmentLifecycleCallbacks {
}
}

declare module "icyllis.modernui.transition.Transition$EpicenterCallback" {
import { $Transition$$Type } from "icyllis.modernui.transition.Transition"
import { $Rect } from "icyllis.modernui.graphics.Rect"

export interface $Transition$EpicenterCallback {
"onGetEpicenter"(transition0: $Transition$$Type): $Rect
}

export namespace $Transition$EpicenterCallback {
const probejs$$marker: never
}
export abstract class $Transition$EpicenterCallback$$Static implements $Transition$EpicenterCallback {
}
}

declare module "icyllis.modernui.graphics.text.FontMetricsInt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FontMetricsInt {
constructor()

public "extendBy"(ascent: integer, descent: integer, leading: integer): void
public "extendBy"(ascent: integer, descent: integer): void
public "extendBy"(fm: $FontMetricsInt$$Type): void
public "reset"(): void
get "ascent"(): integer
set "ascent"(value: integer)
get "descent"(): integer
set "descent"(value: integer)
get "leading"(): integer
set "leading"(value: integer)
}
}

declare module "icyllis.modernui.util.DisplayMetrics" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DisplayMetrics {
static readonly "DENSITY_108": integer
static readonly "DENSITY_120": integer
static readonly "DENSITY_132": integer
static readonly "DENSITY_156": integer
static readonly "DENSITY_168": integer
static readonly "DENSITY_180": integer
static readonly "DENSITY_204": integer
static readonly "DENSITY_216": integer
static readonly "DENSITY_234": integer
static readonly "DENSITY_240": integer
static readonly "DENSITY_252": integer
static readonly "DENSITY_264": integer
static readonly "DENSITY_270": integer
static readonly "DENSITY_312": integer
static readonly "DENSITY_336": integer
static readonly "DENSITY_360": integer
static readonly "DENSITY_84": integer
static readonly "DENSITY_DEFAULT": integer
static readonly "DENSITY_DEFAULT_SCALE": float
static readonly "DENSITY_HIGH": integer
static readonly "DENSITY_LOW": integer
static readonly "DENSITY_MEDIUM": integer
static readonly "DENSITY_XHIGH": integer
static readonly "DENSITY_XXHIGH": integer
static readonly "DENSITY_XXXHIGH": integer

constructor()

public "equals"(other: $DisplayMetrics$$Type): boolean
public "equalsPhysical"(other: $DisplayMetrics$$Type): boolean
public "setTo"(o: $DisplayMetrics$$Type): void
public "setToDefaults"(): void
get "density"(): float
set "density"(value: float)
get "densityDpi"(): integer
set "densityDpi"(value: integer)
get "heightPixels"(): integer
set "heightPixels"(value: integer)
get "scaledDensity"(): float
set "scaledDensity"(value: float)
get "widthPixels"(): integer
set "widthPixels"(value: integer)
get "xdpi"(): float
set "xdpi"(value: float)
get "ydpi"(): float
set "ydpi"(value: float)
set "to"(value: $DisplayMetrics$$Type)
}
}

declare module "icyllis.modernui.view.PointerIcon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PointerIcon {
static readonly "TYPE_ARROW": integer
static readonly "TYPE_DEFAULT": integer
static readonly "TYPE_HAND": integer
static readonly "TYPE_TEXT": integer

public "getHandle"(): long
public static "getSystemIcon"(type: integer): $PointerIcon
public "getType"(): integer
get "handle"(): long
get "type"(): integer
}
}

declare module "icyllis.modernui.lifecycle.ViewModelProvider$Factory" {
import { $ViewModel, $ViewModel$$Type } from "icyllis.modernui.lifecycle.ViewModel"
import { $Class$$Type } from "java.lang.Class"

export interface $ViewModelProvider$Factory {
"create"<T extends $ViewModel>(class0: $Class$$Type<T>): T
}

export namespace $ViewModelProvider$Factory {
const probejs$$marker: never
}
export abstract class $ViewModelProvider$Factory$$Static implements $ViewModelProvider$Factory {
}
}

declare module "icyllis.modernui.fragment.Fragment" {
import { $PrintWriter$$Type } from "java.io.PrintWriter"
import { $Transition, $Transition$$Type } from "icyllis.modernui.transition.Transition"
import { $ViewModelStoreOwner } from "icyllis.modernui.lifecycle.ViewModelStoreOwner"
import { $FragmentManager } from "icyllis.modernui.fragment.FragmentManager"
import { $Animator } from "icyllis.modernui.animation.Animator"
import { $SharedElementCallback$$Type } from "icyllis.modernui.fragment.SharedElementCallback"
import { $View$OnCreateContextMenuListener } from "icyllis.modernui.view.View$OnCreateContextMenuListener"
import { $TimeUnit$$Type } from "java.util.concurrent.TimeUnit"
import { $ViewGroup$$Type } from "icyllis.modernui.view.ViewGroup"
import { $ViewModelProvider$Factory } from "icyllis.modernui.lifecycle.ViewModelProvider$Factory"
import { $ContextMenu$ContextMenuInfo$$Type } from "icyllis.modernui.view.ContextMenu$ContextMenuInfo"
import { $DataSet, $DataSet$$Type } from "icyllis.modernui.util.DataSet"
import { $FileDescriptor$$Type } from "java.io.FileDescriptor"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $ViewModelStore } from "icyllis.modernui.lifecycle.ViewModelStore"
import { $Lifecycle } from "icyllis.modernui.lifecycle.Lifecycle"
import { $LiveData } from "icyllis.modernui.lifecycle.LiveData"
import { $ContextMenu$$Type } from "icyllis.modernui.view.ContextMenu"
import { $LayoutInflater$$Type } from "icyllis.modernui.view.LayoutInflater"
import { $Context, $Context$$Type } from "icyllis.modernui.core.Context"
import { $LifecycleOwner } from "icyllis.modernui.lifecycle.LifecycleOwner"
import { $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"

export class $Fragment implements $LifecycleOwner, $ViewModelStoreOwner, $View$OnCreateContextMenuListener {
constructor()

public "dump"(prefix: string, fd: $FileDescriptor$$Type, writer: $PrintWriter$$Type, ...args: string[]): void
public "getAllowEnterTransitionOverlap"(): boolean
public "getAllowReturnTransitionOverlap"(): boolean
public "getArguments"(): $DataSet
public "getChildFragmentManager"(): $FragmentManager
public "getContext"(): $Context
public "getDefaultViewModelProviderFactory"(): $ViewModelProvider$Factory
public "getEnterTransition"(): $Transition
public "getExitTransition"(): $Transition
public "getHost"(): any
public "getId"(): integer
public "getLifecycle"(): $Lifecycle
public "getParentFragment"(): $Fragment
public "getParentFragmentManager"(): $FragmentManager
public "getReenterTransition"(): $Transition
public "getReturnTransition"(): $Transition
public "getSharedElementEnterTransition"(): $Transition
public "getSharedElementReturnTransition"(): $Transition
public "getTag"(): string
public "getView"(): $View
public "getViewLifecycleOwner"(): $LifecycleOwner
public "getViewLifecycleOwnerLiveData"(): $LiveData<$LifecycleOwner>
public "getViewModelStore"(): $ViewModelStore
public "isAdded"(): boolean
public "isDetached"(): boolean
public "isHidden"(): boolean
public "isInLayout"(): boolean
public "isRemoving"(): boolean
public "isResumed"(): boolean
public "isStateSaved"(): boolean
public "isVisible"(): boolean
public "onAttach"(context: $Context$$Type): void
public "onCreate"(savedInstanceState: $DataSet$$Type): void
/** @deprecated */
public "onCreateAnimator"(transit: integer, enter: boolean, nextAnim: integer): $Animator
public "onCreateAnimator"(transit: integer, enter: boolean, isPop: boolean, nextAnim: $ResourceId$$Type): $Animator
public "onCreateContextMenu"(menu: $ContextMenu$$Type, v: $View$$Type, menuInfo: $ContextMenu$ContextMenuInfo$$Type): void
public "onCreateView"(inflater: $LayoutInflater$$Type, container: $ViewGroup$$Type, savedInstanceState: $DataSet$$Type): $View
public "onDestroy"(): void
public "onDestroyView"(): void
public "onDetach"(): void
public "onHiddenChanged"(hidden: boolean): void
public "onPause"(): void
public "onPrimaryNavigationFragmentChanged"(isPrimaryNavigationFragment: boolean): void
public "onResume"(): void
public "onSaveInstanceState"(outState: $DataSet$$Type): void
public "onStart"(): void
public "onStop"(): void
public "onViewCreated"(view: $View$$Type, savedInstanceState: $DataSet$$Type): void
public "onViewStateRestored"(savedInstanceState: $DataSet$$Type): void
public "postponeEnterTransition"(duration: long, timeUnit: $TimeUnit$$Type): void
public "postponeEnterTransition"(): void
public "registerForContextMenu"(view: $View$$Type): void
public "requireArguments"(): $DataSet
public "requireContext"(): $Context
public "requireHost"(): any
public "requireParentFragment"(): $Fragment
public "requireView"(): $View
public "setAllowEnterTransitionOverlap"(allow: boolean): void
public "setAllowReturnTransitionOverlap"(allow: boolean): void
public "setArguments"(args: $DataSet$$Type): void
public "setEnterSharedElementCallback"(callback: $SharedElementCallback$$Type): void
public "setEnterTransition"(transition: $Transition$$Type): void
public "setExitSharedElementCallback"(callback: $SharedElementCallback$$Type): void
public "setExitTransition"(transition: $Transition$$Type): void
public "setHasOptionsMenu"(hasMenu: boolean): void
public "setInitialSavedState"(state: $DataSet$$Type): void
public "setMenuVisibility"(menuVisible: boolean): void
public "setReenterTransition"(transition: $Transition$$Type): void
public "setReturnTransition"(transition: $Transition$$Type): void
public "setSharedElementEnterTransition"(transition: $Transition$$Type): void
public "setSharedElementReturnTransition"(transition: $Transition$$Type): void
public "startPostponedEnterTransition"(): void
public "unregisterForContextMenu"(view: $View$$Type): void
get "allowEnterTransitionOverlap"(): boolean
get "allowReturnTransitionOverlap"(): boolean
get "arguments"(): $DataSet
get "childFragmentManager"(): $FragmentManager
get "context"(): $Context
get "defaultViewModelProviderFactory"(): $ViewModelProvider$Factory
get "enterTransition"(): $Transition
get "exitTransition"(): $Transition
get "host"(): any
get "id"(): integer
get "lifecycle"(): $Lifecycle
get "parentFragment"(): $Fragment
get "parentFragmentManager"(): $FragmentManager
get "reenterTransition"(): $Transition
get "returnTransition"(): $Transition
get "sharedElementEnterTransition"(): $Transition
get "sharedElementReturnTransition"(): $Transition
get "tag"(): string
get "view"(): $View
get "viewLifecycleOwner"(): $LifecycleOwner
get "viewLifecycleOwnerLiveData"(): $LiveData<$LifecycleOwner>
get "viewModelStore"(): $ViewModelStore
get "added"(): boolean
get "detached"(): boolean
get "hidden"(): boolean
get "inLayout"(): boolean
get "removing"(): boolean
get "resumed"(): boolean
get "stateSaved"(): boolean
get "visible"(): boolean
set "allowEnterTransitionOverlap"(value: boolean)
set "allowReturnTransitionOverlap"(value: boolean)
set "arguments"(value: $DataSet$$Type)
set "enterSharedElementCallback"(value: $SharedElementCallback$$Type)
set "enterTransition"(value: $Transition$$Type)
set "exitSharedElementCallback"(value: $SharedElementCallback$$Type)
set "exitTransition"(value: $Transition$$Type)
set "hasOptionsMenu"(value: boolean)
set "initialSavedState"(value: $DataSet$$Type)
set "menuVisibility"(value: boolean)
set "reenterTransition"(value: $Transition$$Type)
set "returnTransition"(value: $Transition$$Type)
set "sharedElementEnterTransition"(value: $Transition$$Type)
set "sharedElementReturnTransition"(value: $Transition$$Type)
}
}

declare module "icyllis.modernui.transition.Transition" {
import { $Cloneable } from "java.lang.Cloneable"
import { $Rect } from "icyllis.modernui.graphics.Rect"
import { $TransitionValues, $TransitionValues$$Type } from "icyllis.modernui.transition.TransitionValues"
import { $Animator } from "icyllis.modernui.animation.Animator"
import { $Transition$EpicenterCallback, $Transition$EpicenterCallback$$Type } from "icyllis.modernui.transition.Transition$EpicenterCallback"
import { $ViewGroup$$Type } from "icyllis.modernui.view.ViewGroup"
import { $List } from "java.util.List"
import { $IntList } from "it.unimi.dsi.fastutil.ints.IntList"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $TransitionListener$$Type } from "icyllis.modernui.transition.TransitionListener"
import { $TransitionPropagation, $TransitionPropagation$$Type } from "icyllis.modernui.transition.TransitionPropagation"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $TimeInterpolator, $TimeInterpolator$$Type } from "icyllis.modernui.animation.TimeInterpolator"

export class $Transition implements $Cloneable {
static readonly "MATCH_ID": integer
static readonly "MATCH_INSTANCE": integer
static readonly "MATCH_ITEM_ID": integer
static readonly "MATCH_NAME": integer

constructor()

public "addListener"(listener: $TransitionListener$$Type): $Transition
public "addTarget"(targetName: string): $Transition
public "addTarget"(targetType: $Class$$Type<any>): $Transition
public "addTarget"(target: $View$$Type): $Transition
public "addTarget"(targetId: integer): $Transition
public "cancel"(): void
public "captureEndValues"(transitionValues0: $TransitionValues$$Type): void
public "captureStartValues"(transitionValues0: $TransitionValues$$Type): void
public "createAnimator"(sceneRoot: $ViewGroup$$Type, startValues: $TransitionValues$$Type, endValues: $TransitionValues$$Type): $Animator
public "excludeChildren"(type: $Class$$Type<any>, exclude: boolean): $Transition
public "excludeChildren"(targetId: integer, exclude: boolean): $Transition
public "excludeChildren"(target: $View$$Type, exclude: boolean): $Transition
public "excludeTarget"(type: $Class$$Type<any>, exclude: boolean): $Transition
public "excludeTarget"(targetName: string, exclude: boolean): $Transition
public "excludeTarget"(targetId: integer, exclude: boolean): $Transition
public "excludeTarget"(target: $View$$Type, exclude: boolean): $Transition
public "getDuration"(): long
public "getEpicenter"(): $Rect
public "getEpicenterCallback"(): $Transition$EpicenterCallback
public "getInterpolator"(): $TimeInterpolator
public "getName"(): string
public "getPropagation"(): $TransitionPropagation
public "getStartDelay"(): long
public "getTargetIds"(): $IntList
public "getTargetNames"(): $List<string>
public "getTargetTypes"(): $List<$Class<any>>
public "getTargets"(): $List<$View>
public "getTransitionProperties"(): string[]
public "getTransitionValues"(view: $View$$Type, start: boolean): $TransitionValues
public "isTransitionRequired"(startValues: $TransitionValues$$Type, endValues: $TransitionValues$$Type): boolean
public "pause"(sceneRoot: $View$$Type): void
public "removeListener"(listener: $TransitionListener$$Type): $Transition
public "removeTarget"(target: $View$$Type): $Transition
public "removeTarget"(targetId: integer): $Transition
public "removeTarget"(targetName: string): $Transition
public "removeTarget"(target: $Class$$Type<any>): $Transition
public "setDuration"(duration: long): $Transition
public "setEpicenterCallback"(epicenterCallback: $Transition$EpicenterCallback$$Type): void
public "setInterpolator"(interpolator: $TimeInterpolator$$Type): $Transition
public "setMatchOrder"(...matches: integer[]): void
public "setPropagation"(transitionPropagation: $TransitionPropagation$$Type): void
public "setStartDelay"(startDelay: long): $Transition
get "duration"(): long
get "epicenter"(): $Rect
get "epicenterCallback"(): $Transition$EpicenterCallback
get "interpolator"(): $TimeInterpolator
get "name"(): string
get "propagation"(): $TransitionPropagation
get "startDelay"(): long
get "targetIds"(): $IntList
get "targetNames"(): $List<string>
get "targetTypes"(): $List<$Class<any>>
get "targets"(): $List<$View>
get "transitionProperties"(): string[]
set "duration"(value: long)
set "epicenterCallback"(value: $Transition$EpicenterCallback$$Type)
set "interpolator"(value: $TimeInterpolator$$Type)
set "matchOrder"(value: integer[])
set "propagation"(value: $TransitionPropagation$$Type)
set "startDelay"(value: long)
}
}

declare module "icyllis.modernui.core.Handler" {
import { $Handler$Callback$$Type } from "icyllis.modernui.core.Handler$Callback"
import { $Message, $Message$$Type } from "icyllis.modernui.core.Message"
import { $Looper$$Type } from "icyllis.modernui.core.Looper"
import { $MessageQueue } from "icyllis.modernui.core.MessageQueue"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $Handler {
constructor(looper: $Looper$$Type, callback: $Handler$Callback$$Type)
constructor(looper: $Looper$$Type)

public static "createAsync"(looper: $Looper$$Type, callback: $Handler$Callback$$Type): $Handler
public static "createAsync"(looper: $Looper$$Type): $Handler
public "dispatchMessage"(msg: $Message$$Type): void
public "getMessageName"(message: $Message$$Type): string
public "getQueue"(): $MessageQueue
public "handleMessage"(msg: $Message$$Type): void
public "hasCallbacks"(r: $Runnable$$Type): boolean
public "hasMessages"(what: integer, object: any): boolean
public "hasMessages"(): boolean
public "hasMessages"(what: integer): boolean
public "isCurrentThread"(): boolean
public "obtainMessage"(what: integer, int1: integer, int2: integer, obj: any): $Message
public "obtainMessage"(what: integer, int1: integer, int2: integer): $Message
public "obtainMessage"(): $Message
public "obtainMessage"(what: integer, obj: any): $Message
public "obtainMessage"(what: integer): $Message
public "post"(r: $Runnable$$Type): boolean
public "postAtFrontOfQueue"(r: $Runnable$$Type): boolean
public "postAtTime"(r: $Runnable$$Type, timeMillis: long): boolean
public "postAtTime"(r: $Runnable$$Type, token: any, timeMillis: long): boolean
public "postDelayed"(r: $Runnable$$Type, delayMillis: long): boolean
public "postDelayed"(r: $Runnable$$Type, token: any, delayMillis: long): boolean
public "removeCallbacks"(r: $Runnable$$Type, token: any): void
public "removeCallbacks"(r: $Runnable$$Type): void
public "removeCallbacksAndMessages"(token: any): void
public "removeMessages"(what: integer, object: any): void
public "removeMessages"(what: integer): void
public "sendEmptyMessage"(what: integer): boolean
public "sendEmptyMessageAtTime"(what: integer, timeMillis: long): boolean
public "sendEmptyMessageDelayed"(what: integer, delayMillis: long): boolean
public "sendMessage"(msg: $Message$$Type): boolean
public "sendMessageAtFrontOfQueue"(msg: $Message$$Type): boolean
public "sendMessageAtTime"(msg: $Message$$Type, timeMillis: long): boolean
public "sendMessageDelayed"(msg: $Message$$Type, delayMillis: long): boolean
get "queue"(): $MessageQueue
get "currentThread"(): boolean
}
}

declare module "icyllis.modernui.view.ActionProvider$VisibilityListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ActionProvider$VisibilityListener {
"onActionProviderVisibilityChanged"(boolean0: boolean): void
}

export namespace $ActionProvider$VisibilityListener {
const probejs$$marker: never
}
export abstract class $ActionProvider$VisibilityListener$$Static implements $ActionProvider$VisibilityListener {
}
}

declare module "icyllis.modernui.graphics.text.FontPaint" {
import { $FontCollection, $FontCollection$$Type } from "icyllis.modernui.graphics.text.FontCollection"
import { $Font$$Type } from "icyllis.arc3d.sketch.Font"
import { $Locale, $Locale$$Type } from "java.util.Locale"
import { $FontMetricsInt$$Type } from "icyllis.modernui.graphics.text.FontMetricsInt"

export class $FontPaint {
static readonly "BOLD": integer
static readonly "BOLD_ITALIC": integer
static readonly "FONT_SIZE_GRANULARITY": float
static readonly "FONT_STYLE_MASK": integer
static readonly "ITALIC": integer
static readonly "NORMAL": integer

constructor()
constructor(paint: $FontPaint$$Type)

public static "getCanonicalFontSize"(fontSize: float): float
public "getFont"(): $FontCollection
public "getFontMetricsInt"(fm: $FontMetricsInt$$Type): integer
public "getFontSize"(): float
public "getFontStyle"(): integer
public "getLocale"(): $Locale
public "getNativeFont"(nativeFont: $Font$$Type): void
public "isAntiAlias"(): boolean
public "isLinearMetrics"(): boolean
public "isMetricAffecting"(paint: $FontPaint$$Type): boolean
public "set"(paint: $FontPaint$$Type): void
public "setAntiAlias"(aa: boolean): void
public "setFont"(font: $FontCollection$$Type): void
public "setFontSize"(fontSize: float): void
public "setFontStyle"(fontStyle: integer): void
public "setLinearMetrics"(linearMetrics: boolean): void
public "setLocale"(locale: $Locale$$Type): void
get "font"(): $FontCollection
get "fontSize"(): float
get "fontStyle"(): integer
get "locale"(): $Locale
get "antiAlias"(): boolean
get "linearMetrics"(): boolean
set "antiAlias"(value: boolean)
set "font"(value: $FontCollection$$Type)
set "fontSize"(value: float)
set "fontStyle"(value: integer)
set "linearMetrics"(value: boolean)
set "locale"(value: $Locale$$Type)
}
}

declare module "icyllis.modernui.util.Parcelable" {
import { $Parcel$$Type } from "icyllis.modernui.util.Parcel"

export interface $Parcelable {
"writeToParcel"(parcel0: $Parcel$$Type, int1: integer): void
}

export namespace $Parcelable {
const probejs$$marker: never
}
export abstract class $Parcelable$$Static implements $Parcelable {
}
}

declare module "icyllis.modernui.animation.AnimatorListener" {
import { $Animator$$Type } from "icyllis.modernui.animation.Animator"

export interface $AnimatorListener {
"onAnimationCancel"(animation: $Animator$$Type): void
"onAnimationEnd"(animation: $Animator$$Type, isReverse: boolean): void
"onAnimationEnd"(animation: $Animator$$Type): void
"onAnimationPause"(animation: $Animator$$Type): void
"onAnimationRepeat"(animation: $Animator$$Type): void
"onAnimationResume"(animation: $Animator$$Type): void
"onAnimationStart"(animation: $Animator$$Type): void
"onAnimationStart"(animation: $Animator$$Type, isReverse: boolean): void
}

export namespace $AnimatorListener {
const probejs$$marker: never
}
export abstract class $AnimatorListener$$Static implements $AnimatorListener {
}
}

declare module "icyllis.modernui.util.ColorStateList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ColorStateList {
constructor(states: integer[][], colors: integer[])

public "getColorForState"(stateSet: integer[], defaultColor: integer): integer
public "getColors"(): integer[]
public "getDefaultColor"(): integer
public "getStates"(): integer[][]
public "hasFocusStateSpecified"(): boolean
public "hasState"(state: integer): boolean
public "isOpaque"(): boolean
public "isStateful"(): boolean
public static "modulateColor"(baseColor: integer, alphaMod: float): integer
public static "valueOf"(color: integer): $ColorStateList
public "withAlpha"(alpha: integer): $ColorStateList
get "colors"(): integer[]
get "defaultColor"(): integer
get "states"(): integer[][]
get "opaque"(): boolean
get "stateful"(): boolean
}
}

declare module "icyllis.modernui.graphics.Paint$Join" {
import { $Enum } from "java.lang.Enum"

export class $Paint$Join extends $Enum<$Paint$Join> {
static readonly "BEVEL": $Paint$Join
static readonly "MITER": $Paint$Join
static readonly "ROUND": $Paint$Join

public static "valueOf"(name: string): $Paint$Join
public static "values"(): $Paint$Join[]
}
}

declare module "icyllis.modernui.core.Choreographer$FrameCallback" {
import { $Choreographer$$Type } from "icyllis.modernui.core.Choreographer"

export interface $Choreographer$FrameCallback {
"doFrame"(choreographer0: $Choreographer$$Type, long1: long): void
}

export namespace $Choreographer$FrameCallback {
const probejs$$marker: never
}
export abstract class $Choreographer$FrameCallback$$Static implements $Choreographer$FrameCallback {
}
}

declare module "icyllis.modernui.view.View$OnLongClickListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnLongClickListener {
"onLongClick"(view0: $View$$Type): boolean
}

export namespace $View$OnLongClickListener {
const probejs$$marker: never
}
export abstract class $View$OnLongClickListener$$Static implements $View$OnLongClickListener {
}
}

declare module "icyllis.modernui.core.Handler$Callback" {
import { $Message$$Type } from "icyllis.modernui.core.Message"

export interface $Handler$Callback {
"handleMessage"(message0: $Message$$Type): boolean
}

export namespace $Handler$Callback {
const probejs$$marker: never
}
export abstract class $Handler$Callback$$Static implements $Handler$Callback {
}
}

declare module "icyllis.modernui.lifecycle.Lifecycle" {
import { $LifecycleObserver$$Type } from "icyllis.modernui.lifecycle.LifecycleObserver"
import { $Lifecycle$State } from "icyllis.modernui.lifecycle.Lifecycle$State"

export class $Lifecycle {
constructor()

public "addObserver"(lifecycleObserver0: $LifecycleObserver$$Type): void
public "getCurrentState"(): $Lifecycle$State
public "removeObserver"(lifecycleObserver0: $LifecycleObserver$$Type): void
get "currentState"(): $Lifecycle$State
}
}

declare module "icyllis.modernui.lifecycle.ViewModelStoreOwner" {
import { $ViewModelProvider$Factory } from "icyllis.modernui.lifecycle.ViewModelProvider$Factory"
import { $ViewModelStore } from "icyllis.modernui.lifecycle.ViewModelStore"

export interface $ViewModelStoreOwner {
"getDefaultViewModelProviderFactory"(): $ViewModelProvider$Factory
"getViewModelStore"(): $ViewModelStore
get "defaultViewModelProviderFactory"(): $ViewModelProvider$Factory
get "viewModelStore"(): $ViewModelStore
}

export namespace $ViewModelStoreOwner {
const probejs$$marker: never
}
export abstract class $ViewModelStoreOwner$$Static implements $ViewModelStoreOwner {
}
}

declare module "icyllis.modernui.view.ViewParent" {
import { $ActionMode } from "icyllis.modernui.view.ActionMode"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $ActionMode$Callback$$Type } from "icyllis.modernui.view.ActionMode$Callback"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $ContextMenu$$Type } from "icyllis.modernui.view.ContextMenu"
import { $Point$$Type } from "icyllis.modernui.graphics.Point"

export interface $ViewParent {
"bringChildToFront"(view0: $View$$Type): void
"canResolveLayoutDirection"(): boolean
"canResolveTextAlignment"(): boolean
"canResolveTextDirection"(): boolean
"childDrawableStateChanged"(view0: $View$$Type): void
"childHasTransientStateChanged"(view0: $View$$Type, boolean1: boolean): void
"clearChildFocus"(view0: $View$$Type): void
"createContextMenu"(contextMenu0: $ContextMenu$$Type): void
"focusSearch"(view0: $View$$Type, int1: integer): $View
"focusableViewAvailable"(view0: $View$$Type): void
"getChildVisibleRect"(view0: $View$$Type, rect1: $Rect$$Type, point2: $Point$$Type): boolean
"getLayoutDirection"(): integer
"getNestedScrollAxes"(): integer
"getParent"(): $ViewParent
"getTextAlignment"(): integer
"getTextDirection"(): integer
"invalidateChild"(view0: $View$$Type, rect1: $Rect$$Type): void
"invalidateChildInParent"(int0s: integer[], rect1: $Rect$$Type): $ViewParent
"isLayoutDirectionResolved"(): boolean
"isLayoutRequested"(): boolean
"isTextAlignmentResolved"(): boolean
"isTextDirectionResolved"(): boolean
"keyboardNavigationClusterSearch"(view0: $View$$Type, int1: integer): $View
"onNestedFling"(view0: $View$$Type, float1: float, float2: float, boolean3: boolean): boolean
"onNestedPreFling"(view0: $View$$Type, float1: float, float2: float): boolean
"onNestedPreScroll"(view0: $View$$Type, int1: integer, int2: integer, int3s: integer[], int4: integer): void
"onNestedScroll"(view0: $View$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6s: integer[]): void
"onNestedScrollAccepted"(view0: $View$$Type, view1: $View$$Type, int2: integer, int3: integer): void
"onStartNestedScroll"(view0: $View$$Type, view1: $View$$Type, int2: integer, int3: integer): boolean
"onStopNestedScroll"(view0: $View$$Type, int1: integer): void
"requestChildFocus"(view0: $View$$Type, view1: $View$$Type): void
"requestChildRectangleOnScreen"(view0: $View$$Type, rect1: $Rect$$Type, boolean2: boolean): boolean
"requestDisallowInterceptTouchEvent"(boolean0: boolean): void
"requestLayout"(): void
"showContextMenuForChild"(view0: $View$$Type, float1: float, float2: float): boolean
"startActionModeForChild"(view0: $View$$Type, callback1: $ActionMode$Callback$$Type, int2: integer): $ActionMode
get "layoutDirection"(): integer
get "nestedScrollAxes"(): integer
get "parent"(): $ViewParent
get "textAlignment"(): integer
get "textDirection"(): integer
get "layoutDirectionResolved"(): boolean
get "layoutRequested"(): boolean
get "textAlignmentResolved"(): boolean
get "textDirectionResolved"(): boolean
}

export namespace $ViewParent {
const probejs$$marker: never
}
export abstract class $ViewParent$$Static implements $ViewParent {
}
}

declare module "icyllis.modernui.lifecycle.LiveData" {
import { $Observer$$Type } from "icyllis.modernui.lifecycle.Observer"
import { $LifecycleOwner$$Type } from "icyllis.modernui.lifecycle.LifecycleOwner"

export class $LiveData<T = any> {
constructor(value: T)
constructor()

public "getValue"(): T
public "hasActiveObservers"(): boolean
public "hasObservers"(): boolean
public "observe"(owner: $LifecycleOwner$$Type, observer: $Observer$$Type<T>): void
public "observeForever"(observer: $Observer$$Type<T>): void
public "removeObserver"(observer: $Observer$$Type<T>): void
public "removeObservers"(owner: $LifecycleOwner$$Type): void
get "value"(): T
}
}

declare module "icyllis.modernui.resources.TypedValue" {
import { $AssetManager$ResolvedBag$$Type } from "icyllis.modernui.resources.AssetManager$ResolvedBag"
import { $DisplayMetrics$$Type } from "icyllis.modernui.util.DisplayMetrics"
import { $ResourceId } from "icyllis.modernui.resources.ResourceId"

export class $TypedValue {
static readonly "COMPLEX_MANTISSA_MASK": integer
static readonly "COMPLEX_MANTISSA_SHIFT": integer
static readonly "COMPLEX_RADIX_0p23": integer
static readonly "COMPLEX_RADIX_16p7": integer
static readonly "COMPLEX_RADIX_23p0": integer
static readonly "COMPLEX_RADIX_8p15": integer
static readonly "COMPLEX_RADIX_MASK": integer
static readonly "COMPLEX_RADIX_SHIFT": integer
static readonly "COMPLEX_UNIT_DP": integer
static readonly "COMPLEX_UNIT_FRACTION": integer
static readonly "COMPLEX_UNIT_FRACTION_PARENT": integer
static readonly "COMPLEX_UNIT_IN": integer
static readonly "COMPLEX_UNIT_MASK": integer
static readonly "COMPLEX_UNIT_MM": integer
static readonly "COMPLEX_UNIT_PT": integer
static readonly "COMPLEX_UNIT_PX": integer
static readonly "COMPLEX_UNIT_SHIFT": integer
static readonly "COMPLEX_UNIT_SP": integer
static readonly "DATA_NULL_EMPTY": integer
static readonly "DATA_NULL_UNDEFINED": integer
static readonly "TYPE_ATTRIBUTE": integer
static readonly "TYPE_DIMENSION": integer
static readonly "TYPE_FACTORY": integer
static readonly "TYPE_FIRST_COLOR_INT": integer
static readonly "TYPE_FIRST_INT": integer
static readonly "TYPE_FLOAT": integer
static readonly "TYPE_FRACTION": integer
static readonly "TYPE_INT_BOOLEAN": integer
static readonly "TYPE_INT_COLOR_ARGB4": integer
static readonly "TYPE_INT_COLOR_ARGB8": integer
static readonly "TYPE_INT_COLOR_RGB4": integer
static readonly "TYPE_INT_COLOR_RGB8": integer
static readonly "TYPE_INT_DEC": integer
static readonly "TYPE_INT_HEX": integer
static readonly "TYPE_LAST_COLOR_INT": integer
static readonly "TYPE_LAST_INT": integer
static readonly "TYPE_NULL": integer
static readonly "TYPE_REFERENCE": integer
static readonly "TYPE_STRING": integer

constructor()

public static "applyDimension"(unit: integer, value: float, metrics: $DisplayMetrics$$Type): float
public static "coerceToString"(type: integer, data: integer): string
public "coerceToString"(): charseq
public static "complexToDimension"(data: integer, metrics: $DisplayMetrics$$Type): float
public static "complexToDimensionPixelOffset"(data: integer, metrics: $DisplayMetrics$$Type): integer
public static "complexToDimensionPixelSize"(data: integer, metrics: $DisplayMetrics$$Type): integer
public static "complexToFloat"(complex: integer): float
public static "complexToFraction"(data: integer, base: float, pbase: float): float
public static "createComplexDimension"(value: integer, units: integer): integer
public static "createComplexDimension"(value: float, units: integer): integer
public static "floatToComplex"(value: float): integer
public "getChangingConfigurations"(): integer
public "getComplexUnit"(): integer
public "getFloat"(): float
public "getResourceId"(): $ResourceId
public static "getUnitFromComplexDimension"(complexDimension: integer): integer
public static "intToComplex"(value: integer): integer
public "isColorType"(): boolean
public "reset"(): void
public "setTo"(v: $TypedValue$$Type): void
public "setTo"(bag: $AssetManager$ResolvedBag$$Type, index: integer): void
get "cookie"(): integer
set "cookie"(value: integer)
get "data"(): integer
set "data"(value: integer)
get "flags"(): integer
set "flags"(value: integer)
get "object"(): any
set "object"(value: any)
get "type"(): integer
set "type"(value: integer)
get "changingConfigurations"(): integer
get "complexUnit"(): integer
get "float"(): float
get "resourceId"(): $ResourceId
get "colorType"(): boolean
set "to"(value: $TypedValue$$Type)
}
}

declare module "icyllis.modernui.view.DragEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DragEvent {
static readonly "ACTION_DRAG_ENDED": integer
static readonly "ACTION_DRAG_ENTERED": integer
static readonly "ACTION_DRAG_EXITED": integer
static readonly "ACTION_DRAG_MOVED": integer
static readonly "ACTION_DRAG_STARTED": integer
static readonly "ACTION_DROP": integer

public "getAction"(): integer
public "getLocalState"(): any
public "getResult"(): boolean
public "getX"(): double
public "getY"(): double
get "action"(): integer
get "localState"(): any
get "result"(): boolean
get "x"(): double
get "y"(): double
}
}

declare module "icyllis.modernui.core.MessageQueue" {
import { $MessageQueue$IdleHandler$$Type } from "icyllis.modernui.core.MessageQueue$IdleHandler"

export class $MessageQueue {
public "addIdleHandler"(handler: $MessageQueue$IdleHandler$$Type): void
public "isIdle"(): boolean
public "isPolling"(): boolean
public "postSyncBarrier"(): integer
public "removeIdleHandler"(handler: $MessageQueue$IdleHandler$$Type): void
public "removeSyncBarrier"(token: integer): void
get "idle"(): boolean
get "polling"(): boolean
}
}

declare module "icyllis.modernui.view.MotionEvent" {
import { $Matrix$$Type } from "icyllis.modernui.graphics.Matrix"
import { $InputEvent } from "icyllis.modernui.view.InputEvent"

export class $MotionEvent extends $InputEvent {
static readonly "ACTION_BUTTON_PRESS": integer
static readonly "ACTION_BUTTON_RELEASE": integer
static readonly "ACTION_CANCEL": integer
static readonly "ACTION_DOWN": integer
static readonly "ACTION_HOVER_ENTER": integer
static readonly "ACTION_HOVER_EXIT": integer
static readonly "ACTION_HOVER_MOVE": integer
static readonly "ACTION_MASK": integer
static readonly "ACTION_MOVE": integer
static readonly "ACTION_OUTSIDE": integer
static readonly "ACTION_POINTER_DOWN": integer
static readonly "ACTION_POINTER_INDEX_MASK": integer
static readonly "ACTION_POINTER_INDEX_SHIFT": integer
static readonly "ACTION_POINTER_UP": integer
static readonly "ACTION_SCROLL": integer
static readonly "ACTION_UP": integer
static readonly "AXIS_HSCROLL": integer
static readonly "AXIS_VSCROLL": integer
static readonly "AXIS_X": integer
static readonly "AXIS_Y": integer
static readonly "BUTTON_BACK": integer
static readonly "BUTTON_FORWARD": integer
static readonly "BUTTON_PRIMARY": integer
static readonly "BUTTON_SECONDARY": integer
static readonly "BUTTON_TERTIARY": integer
static readonly "FLAG_HOVER_EXIT_PENDING": integer
static readonly "FLAG_TAINTED": integer
static readonly "INVALID_POINTER_ID": integer
static readonly "TOOL_TYPE_UNKNOWN": integer

public static "actionToString"(action: integer): string
public static "buttonStateToString"(buttonState: integer): string
public "copy"(): $MotionEvent
public "getAction"(): integer
public "getActionButton"(): integer
public "getActionMasked"(): integer
public "getAxisValue"(axis: integer): float
public "getButtonState"(): integer
public "getModifiers"(): integer
public "getPointerCount"(): integer
public "getPointerId"(pointerIndex: integer): integer
public "getRawX"(): float
public "getRawY"(): float
public "getToolType"(pointerIndex: integer): integer
public "getX"(): float
public "getY"(): float
public "hasModifiers"(modifiers: integer): boolean
public "isAltPressed"(): boolean
public "isButtonPressed"(button: integer): boolean
public "isCapsLockOn"(): boolean
public "isCtrlPressed"(): boolean
public "isHoverExitPending"(): boolean
public "isNumLockOn"(): boolean
public "isShiftPressed"(): boolean
public "isSuperPressed"(): boolean
public "isTouchEvent"(): boolean
public static "obtain"(eventTime: long, action: integer, x: float, y: float, modifiers: integer): $MotionEvent
public static "obtain"(eventTime: long, action: integer, actionButton: integer, x: float, y: float, modifiers: integer, buttonState: integer, flags: integer): $MotionEvent
public "offsetLocation"(deltaX: float, deltaY: float): void
public "setAction"(action: integer): void
public "setAxisValue"(axis: integer, value: float): void
public "setHoverExitPending"(hoverExitPending: boolean): void
public "setLocation"(x: float, y: float): void
public "transform"(matrix: $Matrix$$Type): void
get "action"(): integer
get "actionButton"(): integer
get "actionMasked"(): integer
get "buttonState"(): integer
get "modifiers"(): integer
get "pointerCount"(): integer
get "rawX"(): float
get "rawY"(): float
get "x"(): float
get "y"(): float
get "altPressed"(): boolean
get "capsLockOn"(): boolean
get "ctrlPressed"(): boolean
get "hoverExitPending"(): boolean
get "numLockOn"(): boolean
get "shiftPressed"(): boolean
get "superPressed"(): boolean
get "touchEvent"(): boolean
set "action"(value: integer)
set "hoverExitPending"(value: boolean)
}
}

declare module "icyllis.modernui.lifecycle.ViewModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ViewModel {
constructor()

}
}

declare module "icyllis.modernui.graphics.BlendMode" {
import { $BlendMode as $BlendMode$0 } from "icyllis.arc3d.sketch.BlendMode"
import { $Enum } from "java.lang.Enum"

export class $BlendMode extends $Enum<$BlendMode> {
static readonly "ADD": $BlendMode
static readonly "CLEAR": $BlendMode
static readonly "COLOR": $BlendMode
static readonly "COLOR_BURN": $BlendMode
static readonly "COLOR_DODGE": $BlendMode
static readonly "DARKEN": $BlendMode
static readonly "DARKER_COLOR": $BlendMode
static readonly "DIFFERENCE": $BlendMode
static readonly "DIVIDE": $BlendMode
static readonly "DST": $BlendMode
static readonly "DST_ATOP": $BlendMode
static readonly "DST_IN": $BlendMode
static readonly "DST_OUT": $BlendMode
static readonly "DST_OVER": $BlendMode
static readonly "EXCLUSION": $BlendMode
static readonly "HARD_LIGHT": $BlendMode
static readonly "HARD_MIX": $BlendMode
static readonly "HUE": $BlendMode
static readonly "LIGHTEN": $BlendMode
static readonly "LIGHTER_COLOR": $BlendMode
static readonly "LINEAR_BURN": $BlendMode
static readonly "LINEAR_DODGE": $BlendMode
static readonly "LINEAR_LIGHT": $BlendMode
static readonly "LUMINOSITY": $BlendMode
static readonly "MINUS": $BlendMode
static readonly "MINUS_CLAMPED": $BlendMode
static readonly "MODULATE": $BlendMode
static readonly "MULTIPLY": $BlendMode
static readonly "OVERLAY": $BlendMode
static readonly "PIN_LIGHT": $BlendMode
static readonly "PLUS": $BlendMode
static readonly "PLUS_CLAMPED": $BlendMode
static readonly "SATURATION": $BlendMode
static readonly "SCREEN": $BlendMode
static readonly "SOFT_LIGHT": $BlendMode
static readonly "SRC": $BlendMode
static readonly "SRC_ATOP": $BlendMode
static readonly "SRC_IN": $BlendMode
static readonly "SRC_OUT": $BlendMode
static readonly "SRC_OVER": $BlendMode
static readonly "SUBTRACT": $BlendMode
static readonly "VIVID_LIGHT": $BlendMode
static readonly "XOR": $BlendMode

public "getNativeBlendMode"(): $BlendMode$0
public static "valueOf"(name: string): $BlendMode
public static "values"(): $BlendMode[]
get "nativeBlendMode"(): $BlendMode$0
}
}

declare module "icyllis.modernui.lifecycle.Lifecycle$Event" {
import { $Enum } from "java.lang.Enum"
import { $Lifecycle$State, $Lifecycle$State$$Type } from "icyllis.modernui.lifecycle.Lifecycle$State"

export class $Lifecycle$Event extends $Enum<$Lifecycle$Event> {
static readonly "ON_CREATE": $Lifecycle$Event
static readonly "ON_DESTROY": $Lifecycle$Event
static readonly "ON_PAUSE": $Lifecycle$Event
static readonly "ON_RESUME": $Lifecycle$Event
static readonly "ON_START": $Lifecycle$Event
static readonly "ON_STOP": $Lifecycle$Event

public static "downFrom"(state: $Lifecycle$State$$Type): $Lifecycle$Event
public static "downTo"(state: $Lifecycle$State$$Type): $Lifecycle$Event
public "getTargetState"(): $Lifecycle$State
public static "upFrom"(state: $Lifecycle$State$$Type): $Lifecycle$Event
public static "upTo"(state: $Lifecycle$State$$Type): $Lifecycle$Event
public static "valueOf"(name: string): $Lifecycle$Event
public static "values"(): $Lifecycle$Event[]
get "targetState"(): $Lifecycle$State
}
}

declare module "icyllis.modernui.view.ActionProvider" {
import { $MenuItem$$Type } from "icyllis.modernui.view.MenuItem"
import { $SubMenu$$Type } from "icyllis.modernui.view.SubMenu"
import { $ActionProvider$VisibilityListener$$Type } from "icyllis.modernui.view.ActionProvider$VisibilityListener"
import { $View } from "icyllis.modernui.view.View"
import { $ActionProvider$SubUiVisibilityListener$$Type } from "icyllis.modernui.view.ActionProvider$SubUiVisibilityListener"

export class $ActionProvider {
constructor()

public "hasSubMenu"(): boolean
public "isVisible"(): boolean
public "onCreateActionView"(menuItem0: $MenuItem$$Type): $View
public "onPerformDefaultAction"(): boolean
public "onPrepareSubMenu"(subMenu: $SubMenu$$Type): void
public "overridesItemVisibility"(): boolean
public "refreshVisibility"(): void
public "reset"(): void
public "setSubUiVisibilityListener"(listener: $ActionProvider$SubUiVisibilityListener$$Type): void
public "setVisibilityListener"(listener: $ActionProvider$VisibilityListener$$Type): void
public "subUiVisibilityChanged"(isVisible: boolean): void
get "visible"(): boolean
set "subUiVisibilityListener"(value: $ActionProvider$SubUiVisibilityListener$$Type)
set "visibilityListener"(value: $ActionProvider$VisibilityListener$$Type)
}
}

declare module "icyllis.modernui.fragment.FragmentOnAttachListener" {
import { $FragmentManager$$Type } from "icyllis.modernui.fragment.FragmentManager"
import { $Fragment$$Type } from "icyllis.modernui.fragment.Fragment"

export interface $FragmentOnAttachListener {
"onAttachFragment"(fragmentManager0: $FragmentManager$$Type, fragment1: $Fragment$$Type): void
}

export namespace $FragmentOnAttachListener {
const probejs$$marker: never
}
export abstract class $FragmentOnAttachListener$$Static implements $FragmentOnAttachListener {
}
}

declare module "icyllis.modernui.graphics.Canvas$VertexMode" {
import { $Enum } from "java.lang.Enum"

export class $Canvas$VertexMode extends $Enum<$Canvas$VertexMode> {
static readonly "LINES": $Canvas$VertexMode
static readonly "LINE_STRIP": $Canvas$VertexMode
static readonly "POINTS": $Canvas$VertexMode
static readonly "TRIANGLES": $Canvas$VertexMode
static readonly "TRIANGLE_STRIP": $Canvas$VertexMode
readonly "nativeInt": integer

public static "valueOf"(name: string): $Canvas$VertexMode
public static "values"(): $Canvas$VertexMode[]
}
}

declare module "icyllis.modernui.view.View$OnDragListener" {
import { $View$$Type } from "icyllis.modernui.view.View"
import { $DragEvent$$Type } from "icyllis.modernui.view.DragEvent"

export interface $View$OnDragListener {
"onDrag"(view0: $View$$Type, dragEvent1: $DragEvent$$Type): boolean
}

export namespace $View$OnDragListener {
const probejs$$marker: never
}
export abstract class $View$OnDragListener$$Static implements $View$OnDragListener {
}
}

declare module "icyllis.modernui.graphics.ColorFilter" {
import { $ColorFilter as $ColorFilter$0 } from "icyllis.arc3d.sketch.effects.ColorFilter"

export class $ColorFilter {
constructor()

public "getNativeColorFilter"(): $ColorFilter$0
get "nativeColorFilter"(): $ColorFilter$0
}
}

declare module "icyllis.modernui.view.ViewGroup$LayoutParams" {
import { $Canvas$$Type } from "icyllis.modernui.graphics.Canvas"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Paint$$Type } from "icyllis.modernui.graphics.Paint"

export class $ViewGroup$LayoutParams {
static readonly "MATCH_PARENT": integer
static readonly "WRAP_CONTENT": integer

constructor(source: $ViewGroup$LayoutParams$$Type)
constructor(width: integer, height: integer)

public "onDebugDraw"(view: $View$$Type, canvas: $Canvas$$Type, paint: $Paint$$Type): void
public "resolveLayoutDirection"(layoutDirection: integer): void
get "height"(): integer
set "height"(value: integer)
get "width"(): integer
set "width"(value: integer)
}
}

declare module "icyllis.modernui.view.LayoutInflater" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LayoutInflater {
constructor()

}
}

declare module "icyllis.modernui.animation.LayoutTransition" {
import { $LayoutTransition$TransitionListener, $LayoutTransition$TransitionListener$$Type } from "icyllis.modernui.animation.LayoutTransition$TransitionListener"
import { $ViewGroup$$Type } from "icyllis.modernui.view.ViewGroup"
import { $List } from "java.util.List"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Animator, $Animator$$Type } from "icyllis.modernui.animation.Animator"
import { $TimeInterpolator, $TimeInterpolator$$Type } from "icyllis.modernui.animation.TimeInterpolator"

export class $LayoutTransition {
static readonly "APPEARING": integer
static readonly "CHANGE_APPEARING": integer
static readonly "CHANGE_DISAPPEARING": integer
static readonly "CHANGING": integer
static readonly "DISAPPEARING": integer

constructor()

public "addChild"(parent: $ViewGroup$$Type, child: $View$$Type): void
public "addTransitionListener"(listener: $LayoutTransition$TransitionListener$$Type): void
public "cancel"(transitionType: integer): void
public "cancel"(): void
public "disableTransitionType"(transitionType: integer): void
public "enableTransitionType"(transitionType: integer): void
public "endChangingAnimations"(): void
public "getAnimator"(transitionType: integer): $Animator
public "getDuration"(transitionType: integer): long
public "getInterpolator"(transitionType: integer): $TimeInterpolator
public "getStagger"(transitionType: integer): long
public "getStartDelay"(transitionType: integer): long
public "getTransitionListeners"(): $List<$LayoutTransition$TransitionListener>
public "hideChild"(parent: $ViewGroup$$Type, child: $View$$Type, newVisibility: integer): void
public "isChangingLayout"(): boolean
public "isRunning"(): boolean
public "isTransitionTypeEnabled"(transitionType: integer): boolean
public "layoutChange"(parent: $ViewGroup$$Type): void
public "removeChild"(parent: $ViewGroup$$Type, child: $View$$Type): void
public "removeTransitionListener"(listener: $LayoutTransition$TransitionListener$$Type): void
public "setAnimateParentHierarchy"(animateParentHierarchy: boolean): void
public "setAnimator"(transitionType: integer, animator: $Animator$$Type): void
public "setDuration"(duration: long): void
public "setDuration"(transitionType: integer, duration: long): void
public "setInterpolator"(transitionType: integer, interpolator: $TimeInterpolator$$Type): void
public "setStagger"(transitionType: integer, duration: long): void
public "setStartDelay"(transitionType: integer, delay: long): void
public "showChild"(parent: $ViewGroup$$Type, child: $View$$Type, oldVisibility: integer): void
public "startChangingAnimations"(): void
get "transitionListeners"(): $List<$LayoutTransition$TransitionListener>
get "changingLayout"(): boolean
get "running"(): boolean
set "animateParentHierarchy"(value: boolean)
set "duration"(value: long)
}
}

declare module "icyllis.modernui.graphics.text.LayoutPiece" {
import { $FontMetricsInt$$Type } from "icyllis.modernui.graphics.text.FontMetricsInt"
import { $Font } from "icyllis.modernui.graphics.text.Font"

export class $LayoutPiece {
public "getAdvance"(): float
public "getAdvances"(): float[]
public "getAscent"(): integer
public "getBoundsHeight"(): integer
public "getBoundsWidth"(): integer
public "getBoundsX"(): integer
public "getBoundsY"(): integer
public "getCharCount"(): integer
public "getComputeFlags"(): integer
public "getDescent"(): integer
public "getExtent"(extent: $FontMetricsInt$$Type): void
public "getFont"(i: integer): $Font
public "getGlyphCount"(): integer
public "getGlyphs"(): integer[]
public "getMemoryUsage"(): integer
public "getPositions"(): float[]
get "advance"(): float
get "advances"(): float[]
get "ascent"(): integer
get "boundsHeight"(): integer
get "boundsWidth"(): integer
get "boundsX"(): integer
get "boundsY"(): integer
get "charCount"(): integer
get "computeFlags"(): integer
get "descent"(): integer
get "glyphCount"(): integer
get "glyphs"(): integer[]
get "memoryUsage"(): integer
get "positions"(): float[]
}
}

declare module "icyllis.modernui.fragment.FragmentTransaction" {
import { $DataSet$$Type } from "icyllis.modernui.util.DataSet"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Fragment$$Type } from "icyllis.modernui.fragment.Fragment"
import { $Class$$Type } from "java.lang.Class"
import { $Lifecycle$State$$Type } from "icyllis.modernui.lifecycle.Lifecycle$State"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"

export class $FragmentTransaction {
static readonly "TRANSIT_ENTER_MASK": integer
static readonly "TRANSIT_EXIT_MASK": integer
static readonly "TRANSIT_FRAGMENT_CLOSE": integer
static readonly "TRANSIT_FRAGMENT_FADE": integer
/** @deprecated */
static readonly "TRANSIT_FRAGMENT_MATCH_ACTIVITY_CLOSE": integer
/** @deprecated */
static readonly "TRANSIT_FRAGMENT_MATCH_ACTIVITY_OPEN": integer
static readonly "TRANSIT_FRAGMENT_OPEN": integer
static readonly "TRANSIT_NONE": integer
static readonly "TRANSIT_UNSET": integer

public "add"(containerViewId: integer, fragment: $Fragment$$Type): $FragmentTransaction
public "add"(containerViewId: integer, fragmentClass: $Class$$Type<$Fragment$$Type>, args: $DataSet$$Type): $FragmentTransaction
public "add"(fragment: $Fragment$$Type, tag: string): $FragmentTransaction
public "add"(fragmentClass: $Class$$Type<$Fragment$$Type>, args: $DataSet$$Type, tag: string): $FragmentTransaction
public "add"(containerViewId: integer, fragment: $Fragment$$Type, tag: string): $FragmentTransaction
public "add"(containerViewId: integer, fragmentClass: $Class$$Type<$Fragment$$Type>, args: $DataSet$$Type, tag: string): $FragmentTransaction
public "addSharedElement"(sharedElement: $View$$Type, name: string): $FragmentTransaction
public "addToBackStack"(name: string): $FragmentTransaction
public "attach"(fragment: $Fragment$$Type): $FragmentTransaction
public "commit"(): integer
public "commitAllowingStateLoss"(): integer
public "commitNow"(): void
public "commitNowAllowingStateLoss"(): void
public "detach"(fragment: $Fragment$$Type): $FragmentTransaction
public "disallowAddToBackStack"(): $FragmentTransaction
public "hide"(fragment: $Fragment$$Type): $FragmentTransaction
public "isAddToBackStackAllowed"(): boolean
public "isEmpty"(): boolean
public "remove"(fragment: $Fragment$$Type): $FragmentTransaction
public "replace"(containerViewId: integer, fragment: $Fragment$$Type): $FragmentTransaction
public "replace"(containerViewId: integer, fragmentClass: $Class$$Type<$Fragment$$Type>, args: $DataSet$$Type): $FragmentTransaction
public "replace"(containerViewId: integer, fragmentClass: $Class$$Type<$Fragment$$Type>, args: $DataSet$$Type, tag: string): $FragmentTransaction
public "replace"(containerViewId: integer, fragment: $Fragment$$Type, tag: string): $FragmentTransaction
public "runOnCommit"(runnable: $Runnable$$Type): $FragmentTransaction
public "setCustomAnimations"(enter: $ResourceId$$Type, exit: $ResourceId$$Type, popEnter: $ResourceId$$Type, popExit: $ResourceId$$Type): $FragmentTransaction
public "setCustomAnimations"(enter: $ResourceId$$Type, exit: $ResourceId$$Type): $FragmentTransaction
public "setMaxLifecycle"(fragment: $Fragment$$Type, state: $Lifecycle$State$$Type): $FragmentTransaction
public "setPrimaryNavigationFragment"(fragment: $Fragment$$Type): $FragmentTransaction
public "setReorderingAllowed"(reorderingAllowed: boolean): $FragmentTransaction
public "setTransition"(transition: integer): $FragmentTransaction
public "show"(fragment: $Fragment$$Type): $FragmentTransaction
get "addToBackStackAllowed"(): boolean
get "empty"(): boolean
set "primaryNavigationFragment"(value: $Fragment$$Type)
set "reorderingAllowed"(value: boolean)
set "transition"(value: integer)
}
}

declare module "icyllis.modernui.lifecycle.ViewModelStore" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ViewModelStore {
constructor()

public "clear"(): void
}
}

declare module "icyllis.modernui.graphics.Paint" {
import { $ColorFilter, $ColorFilter$$Type } from "icyllis.modernui.graphics.ColorFilter"
import { $Paint$Style$$Type } from "icyllis.modernui.graphics.Paint$Style"
import { $Font$$Type } from "icyllis.arc3d.sketch.Font"
import { $BlendMode, $BlendMode$$Type } from "icyllis.modernui.graphics.BlendMode"
import { $Paint$Cap$$Type } from "icyllis.modernui.graphics.Paint$Cap"
import { $Paint$Join$$Type } from "icyllis.modernui.graphics.Paint$Join"
import { $Paint as $Paint$0 } from "icyllis.arc3d.sketch.Paint"
import { $Shader$$Type } from "icyllis.modernui.graphics.Shader"
import { $Paint$Align$$Type } from "icyllis.modernui.graphics.Paint$Align"

export class $Paint {
static readonly "ALIGN_CENTER": integer
static readonly "ALIGN_INSIDE": integer
static readonly "ALIGN_OUTSIDE": integer
static readonly "CAP_BUTT": integer
static readonly "CAP_ROUND": integer
static readonly "CAP_SQUARE": integer
static readonly "FILL": integer
static readonly "FILL_AND_STROKE": integer
static readonly "JOIN_BEVEL": integer
static readonly "JOIN_MITER": integer
static readonly "JOIN_ROUND": integer
static readonly "STROKE": integer
static readonly "STROKE_AND_FILL": integer
static "sDefaultFlags": integer

constructor()
constructor(paint: $Paint$$Type)

public "getAlpha"(): integer
public "getAlphaF"(): float
public "getBlendMode"(): $BlendMode
public "getColor"(): integer
public "getColor4f"(): float[]
public "getColor4f"(dst: float[]): float[]
public "getColorFilter"(): $ColorFilter
public "getFilterMode"(): integer
public "getMipmapMode"(): integer
public "getNativeFont"(nativeFont: $Font$$Type): void
public "getNativePaint"(): $Paint$0
public "getStrokeAlign"(): integer
public "getStrokeCap"(): integer
public "getStrokeJoin"(): integer
public "getStrokeMiter"(): float
public "getStrokeWidth"(): float
public "getStyle"(): integer
public "getTextSize"(): float
public "hasShader"(): boolean
public "isAntiAlias"(): boolean
public "isDither"(): boolean
public "isFilter"(): boolean
public "isLinearText"(): boolean
public "isTextAntiAlias"(): boolean
public static "obtain"(): $Paint
public "recycle"(): void
public "reset"(): void
public "set"(paint: $Paint$$Type): void
public "setARGB"(a: integer, r: integer, g: integer, b: integer): void
public "setAlpha"(a: integer): void
public "setAlphaF"(a: float): void
public "setAntiAlias"(aa: boolean): void
public "setBlendMode"(mode: $BlendMode$$Type): void
public "setColor"(color: integer): void
public "setColor4f"(r: float, g: float, b: float, a: float): void
public "setColorFilter"(colorFilter: $ColorFilter$$Type): void
public "setDither"(dither: boolean): void
public "setFilter"(filter: boolean): void
public "setFilterMode"(filter: integer): void
public "setLinearText"(linearText: boolean): void
public "setMipmapMode"(mipmap: integer): void
public "setRGBA"(r: integer, g: integer, b: integer, a: integer): void
public "setRGBA"(r: float, g: float, b: float, a: float): void
public "setShader"(shader: $Shader$$Type): void
public "setStroke"(stroke: boolean): void
public "setStrokeAlign"(align: $Paint$Align$$Type): void
public "setStrokeAlign"(align: integer): void
public "setStrokeCap"(cap: $Paint$Cap$$Type): void
public "setStrokeCap"(cap: integer): void
public "setStrokeJoin"(join: $Paint$Join$$Type): void
public "setStrokeJoin"(join: integer): void
public "setStrokeMiter"(miter: float): void
public "setStrokeWidth"(width: float): void
public "setStyle"(style: integer): void
public "setStyle"(style: $Paint$Style$$Type): void
public "setTextAntiAlias"(textAA: boolean): void
public "setTextSize"(textSize: float): void
get "alpha"(): integer
get "alphaF"(): float
get "blendMode"(): $BlendMode
get "color"(): integer
get "color4f"(): float[]
get "colorFilter"(): $ColorFilter
get "filterMode"(): integer
get "mipmapMode"(): integer
get "nativePaint"(): $Paint$0
get "strokeAlign"(): integer
get "strokeCap"(): integer
get "strokeJoin"(): integer
get "strokeMiter"(): float
get "strokeWidth"(): float
get "style"(): integer
get "textSize"(): float
get "antiAlias"(): boolean
get "dither"(): boolean
get "filter"(): boolean
get "linearText"(): boolean
get "textAntiAlias"(): boolean
set "alpha"(value: integer)
set "alphaF"(value: float)
set "antiAlias"(value: boolean)
set "blendMode"(value: $BlendMode$$Type)
set "color"(value: integer)
set "colorFilter"(value: $ColorFilter$$Type)
set "dither"(value: boolean)
set "filter"(value: boolean)
set "filterMode"(value: integer)
set "linearText"(value: boolean)
set "mipmapMode"(value: integer)
set "shader"(value: $Shader$$Type)
set "stroke"(value: boolean)
set "strokeAlign"(value: $Paint$Align$$Type)
set "strokeAlign"(value: integer)
set "strokeCap"(value: $Paint$Cap$$Type)
set "strokeCap"(value: integer)
set "strokeJoin"(value: $Paint$Join$$Type)
set "strokeJoin"(value: integer)
set "strokeMiter"(value: float)
set "strokeWidth"(value: float)
set "style"(value: integer)
set "style"(value: $Paint$Style$$Type)
set "textAntiAlias"(value: boolean)
set "textSize"(value: float)
}
}

declare module "icyllis.modernui.graphics.PointF" {
import { $Point$$Type } from "icyllis.modernui.graphics.Point"

export class $PointF {
constructor(p: $PointF$$Type)
constructor(p: $Point$$Type)
constructor(x: float, y: float)
constructor()

public static "copy"(p: $PointF$$Type): $PointF
public "copy"(): $PointF
public "length"(): float
public "negate"(): void
public "normalize"(): boolean
public "offset"(dx: float, dy: float): void
public "round"(dst: $Point$$Type): void
public "set"(x: float, y: float): void
public "set"(p: $Point$$Type): void
public "set"(p: $PointF$$Type): void
get "x"(): float
set "x"(value: float)
get "y"(): float
set "y"(value: float)
}
}

declare module "icyllis.modernui.graphics.Bitmap$Format" {
import { $Enum } from "java.lang.Enum"

export class $Bitmap$Format extends $Enum<$Bitmap$Format> {
static readonly "ABGR_8888": $Bitmap$Format
static readonly "ALPHA_16": $Bitmap$Format
static readonly "ALPHA_8": $Bitmap$Format
static readonly "ALPHA_F16": $Bitmap$Format
static readonly "ARGB_8888": $Bitmap$Format
static readonly "BGRA_1010102": $Bitmap$Format
static readonly "BGRA_8888": $Bitmap$Format
static readonly "BGRA_8888_PACK32": $Bitmap$Format
static readonly "BGR_565": $Bitmap$Format
static readonly "GRAY_16": $Bitmap$Format
static readonly "GRAY_8": $Bitmap$Format
static readonly "GRAY_ALPHA_1616": $Bitmap$Format
static readonly "GRAY_ALPHA_88": $Bitmap$Format
static readonly "GRAY_ALPHA_F32": $Bitmap$Format
static readonly "GRAY_F32": $Bitmap$Format
static readonly "RGBA_1010102": $Bitmap$Format
static readonly "RGBA_16161616": $Bitmap$Format
static readonly "RGBA_8888": $Bitmap$Format
static readonly "RGBA_8888_PACK32": $Bitmap$Format
static readonly "RGBA_F16": $Bitmap$Format
static readonly "RGBA_F32": $Bitmap$Format
static readonly "RGBX_8888": $Bitmap$Format
static readonly "RGB_161616": $Bitmap$Format
static readonly "RGB_888": $Bitmap$Format
static readonly "RGB_F32": $Bitmap$Format
static readonly "RG_1616": $Bitmap$Format
static readonly "RG_88": $Bitmap$Format
static readonly "RG_F16": $Bitmap$Format
static readonly "R_16": $Bitmap$Format
static readonly "R_8": $Bitmap$Format
static readonly "R_F16": $Bitmap$Format

public static "get"(chs: integer, u16: boolean, hdr: boolean): $Bitmap$Format
public "getBytesPerPixel"(): integer
public "getChannels"(): integer
public "getColorType"(): integer
public "hasAlpha"(): boolean
public "isChannelHDR"(): boolean
public "isChannelU16"(): boolean
public "isChannelU8"(): boolean
public static "valueOf"(name: string): $Bitmap$Format
public static "values"(): $Bitmap$Format[]
get "bytesPerPixel"(): integer
get "channels"(): integer
get "colorType"(): integer
get "channelHDR"(): boolean
get "channelU16"(): boolean
get "channelU8"(): boolean
}
}

declare module "icyllis.modernui.graphics.Canvas" {
import { $RectF$$Type } from "icyllis.modernui.graphics.RectF"
import { $FloatBuffer$$Type } from "java.nio.FloatBuffer"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $Paint$$Type } from "icyllis.modernui.graphics.Paint"
import { $ShortBuffer$$Type } from "java.nio.ShortBuffer"
import { $Image$$Type } from "icyllis.modernui.graphics.Image"
import { $Marker } from "org.slf4j.Marker"
import { $IntBuffer$$Type } from "java.nio.IntBuffer"
import { $Paint$Cap$$Type } from "icyllis.modernui.graphics.Paint$Cap"
import { $BlendMode$$Type } from "icyllis.modernui.graphics.BlendMode"
import { $ShapedText$$Type } from "icyllis.modernui.graphics.text.ShapedText"
import { $PointF$$Type } from "icyllis.modernui.graphics.PointF"
import { $Canvas$VertexMode$$Type } from "icyllis.modernui.graphics.Canvas$VertexMode"
import { $Matrix$$Type } from "icyllis.modernui.graphics.Matrix"
import { $Matrix4, $Matrix4$$Type } from "icyllis.arc3d.core.Matrix4"
import { $CustomDrawable$$Type } from "icyllis.modernui.graphics.CustomDrawable"
import { $TextBlob$$Type } from "icyllis.arc3d.sketch.TextBlob"
import { $Font$$Type } from "icyllis.modernui.graphics.text.Font"

export class $Canvas {
static readonly "MARKER": $Marker
static readonly "QUAD_AA_FLAG_BOTTOM": integer
static readonly "QUAD_AA_FLAG_LEFT": integer
static readonly "QUAD_AA_FLAG_RIGHT": integer
static readonly "QUAD_AA_FLAG_TOP": integer

public "clear"(r: float, g: float, b: float, a: float): void
public "clear"(color: integer): void
public "clipOutRect"(float0: float, float1: float, float2: float, float3: float): boolean
public "clipOutRect"(rect: $Rect$$Type): boolean
public "clipOutRect"(rect: $RectF$$Type): boolean
public "clipRect"(float0: float, float1: float, float2: float, float3: float): boolean
public "clipRect"(rect: $Rect$$Type): boolean
public "clipRect"(rect: $RectF$$Type): boolean
public "concat"(matrix0: $Matrix$$Type): void
public "concat"(matrix40: $Matrix4$$Type): void
public "drawArc"(center: $PointF$$Type, radius: float, startAngle: float, sweepAngle: float, paint: $Paint$$Type): void
public "drawArc"(float0: float, float1: float, float2: float, float3: float, float4: float, cap5: $Paint$Cap$$Type, float6: float, paint7: $Paint$$Type): void
public "drawArc"(float0: float, float1: float, float2: float, float3: float, float4: float, paint5: $Paint$$Type): void
/** @deprecated */
public "drawBezier"(p0: $PointF$$Type, p1: $PointF$$Type, p2: $PointF$$Type, paint: $Paint$$Type): void
/** @deprecated */
public "drawBezier"(x0: float, y0: float, x1: float, y1: float, x2: float, y2: float, paint: $Paint$$Type): void
public "drawChord"(center: $PointF$$Type, radius: float, startAngle: float, sweepAngle: float, paint: $Paint$$Type): void
public "drawChord"(float0: float, float1: float, float2: float, float3: float, float4: float, paint5: $Paint$$Type): void
public "drawCircle"(center: $PointF$$Type, radius: float, paint: $Paint$$Type): void
public "drawCircle"(float0: float, float1: float, float2: float, paint3: $Paint$$Type): void
public "drawColor"(float0: float, float1: float, float2: float, float3: float, blendMode4: $BlendMode$$Type): void
public "drawColor"(color: integer): void
public "drawColor"(int0: integer, blendMode1: $BlendMode$$Type): void
public "drawColor"(r: float, g: float, b: float, a: float): void
/** @deprecated */
public "drawCustomDrawable"(drawable: $CustomDrawable$$Type, matrix: $Matrix4$$Type): void
/** @deprecated */
public "drawCustomDrawable"(drawable: $CustomDrawable$$Type): void
public "drawEdgeAAQuad"(rect: $RectF$$Type, clip: float[], edgeFlags: integer, paint: $Paint$$Type): void
public "drawGlyphs"(int0s: integer[], int1: integer, float2s: float[], int3: integer, int4: integer, font5: $Font$$Type, float6: float, float7: float, paint8: $Paint$$Type): void
public "drawImage"(image0: $Image$$Type, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, float8: float, paint9: $Paint$$Type): void
public "drawImage"(image: $Image$$Type, src: $Rect$$Type, dst: $RectF$$Type, paint: $Paint$$Type): void
public "drawImage"(image0: $Image$$Type, float1: float, float2: float, paint3: $Paint$$Type): void
public "drawImage"(image: $Image$$Type, src: $Rect$$Type, dst: $Rect$$Type, paint: $Paint$$Type): void
public "drawLine"(x0: float, y0: float, x1: float, y1: float, thickness: float, paint: $Paint$$Type): void
public "drawLine"(float0: float, float1: float, float2: float, float3: float, paint4: $Paint$$Type): void
public "drawLine"(p0: $PointF$$Type, p1: $PointF$$Type, thickness: float, paint: $Paint$$Type): void
public "drawLine"(float0: float, float1: float, float2: float, float3: float, cap4: $Paint$Cap$$Type, float5: float, paint6: $Paint$$Type): void
public "drawLine"(p0: $PointF$$Type, p1: $PointF$$Type, paint: $Paint$$Type): void
public "drawLineListMesh"(pos: $FloatBuffer$$Type, color: $IntBuffer$$Type, paint: $Paint$$Type): void
public "drawLines"(float0s: float[], int1: integer, int2: integer, boolean3: boolean, paint4: $Paint$$Type): void
public "drawMesh"(vertexMode0: $Canvas$VertexMode$$Type, floatBuffer1: $FloatBuffer$$Type, floatBuffer2: $FloatBuffer$$Type, intBuffer3: $IntBuffer$$Type, shortBuffer4: $ShortBuffer$$Type, blendMode5: $BlendMode$$Type, paint6: $Paint$$Type): void
public "drawPaint"(paint0: $Paint$$Type): void
public "drawPie"(center: $PointF$$Type, radius: float, startAngle: float, sweepAngle: float, paint: $Paint$$Type): void
public "drawPie"(float0: float, float1: float, float2: float, float3: float, float4: float, paint5: $Paint$$Type): void
public "drawPoint"(p: $PointF$$Type, paint: $Paint$$Type): void
public "drawPoint"(float0: float, float1: float, paint2: $Paint$$Type): void
public "drawPointListMesh"(pos: $FloatBuffer$$Type, color: $IntBuffer$$Type, paint: $Paint$$Type): void
public "drawPoints"(float0s: float[], int1: integer, int2: integer, paint3: $Paint$$Type): void
public "drawPoints"(pts: float[], paint: $Paint$$Type): void
public "drawRect"(r: $Rect$$Type, paint: $Paint$$Type): void
public "drawRect"(float0: float, float1: float, float2: float, float3: float, paint4: $Paint$$Type): void
public "drawRect"(r: $RectF$$Type, paint: $Paint$$Type): void
/** @deprecated */
public "drawRoundImage"(image: $Image$$Type, left: float, top: float, radius: float, paint: $Paint$$Type): void
/** @deprecated */
public "drawRoundLines"(pts: float[], offset: integer, count: integer, strip: boolean, paint: $Paint$$Type): void
public "drawRoundRect"(rect: $RectF$$Type, radius: float, paint: $Paint$$Type): void
public "drawRoundRect"(float0: float, float1: float, float2: float, float3: float, float4: float, paint5: $Paint$$Type): void
public "drawRoundRect"(float0: float, float1: float, float2: float, float3: float, float4: float, float5: float, float6: float, float7: float, paint8: $Paint$$Type): void
public "drawRoundRect"(rect: $RectF$$Type, topLeftRadius: float, topRightRadius: float, bottomRightRadius: float, bottomLeftRadius: float, paint: $Paint$$Type): void
/** @deprecated */
public "drawRoundRect"(left: float, top: float, right: float, bottom: float, radius: float, sides: integer, paint: $Paint$$Type): void
/** @deprecated */
public "drawRoundRect"(rect: $RectF$$Type, radius: float, sides: integer, paint: $Paint$$Type): void
public "drawShapedText"(text: $ShapedText$$Type, x: float, y: float, paint: $Paint$$Type): void
public "drawSimpleText"(text: character[], font: $Font$$Type, x: float, y: float, paint: $Paint$$Type): void
public "drawSimpleText"(text: string, font: $Font$$Type, x: float, y: float, paint: $Paint$$Type): void
public "drawTextBlob"(textBlob0: $TextBlob$$Type, float1: float, float2: float, paint3: $Paint$$Type): void
public "drawTriangleListMesh"(pos: $FloatBuffer$$Type, color: $IntBuffer$$Type, paint: $Paint$$Type): void
public "drawVertices"(vertexMode0: $Canvas$VertexMode$$Type, int1: integer, float2s: float[], int3: integer, float4s: float[], int5: integer, int6s: integer[], int7: integer, short8s: short[], int9: integer, int10: integer, blendMode11: $BlendMode$$Type, paint12: $Paint$$Type): void
public "getLocalClipBounds"(rectF0: $RectF$$Type): boolean
/** @deprecated */
public "getMatrix"(): $Matrix4
public "getSaveCount"(): integer
public "isClipEmpty"(): boolean
public "isClipRect"(): boolean
public "quickReject"(rect: $RectF$$Type): boolean
public "quickReject"(float0: float, float1: float, float2: float, float3: float): boolean
public "restore"(): void
public "restoreToCount"(int0: integer): void
public "rotate"(float0: float, float1: float, float2: float): void
public "rotate"(float0: float): void
public "save"(): integer
/** @deprecated */
public "saveLayer"(float0: float, float1: float, float2: float, float3: float, int4: integer): integer
/** @deprecated */
public "saveLayer"(bounds: $RectF$$Type, alpha: integer): integer
public "scale"(float0: float, float1: float): void
public "scale"(float0: float, float1: float, float2: float, float3: float): void
public "scale"(float0: float, float1: float, float2: float): void
public "shear"(float0: float, float1: float): void
public "shear"(float0: float, float1: float, float2: float, float3: float): void
public "skew"(sx: float, sy: float, px: float, py: float): void
public "skew"(sx: float, sy: float): void
public "translate"(float0: float, float1: float, float2: float): void
public "translate"(float0: float, float1: float): void
get "matrix"(): $Matrix4
get "saveCount"(): integer
get "clipEmpty"(): boolean
}
}

declare module "icyllis.modernui.view.ViewTreeObserver" {
import { $ViewTreeObserver$OnGlobalLayoutListener$$Type } from "icyllis.modernui.view.ViewTreeObserver$OnGlobalLayoutListener"
import { $ViewTreeObserver$OnPreDrawListener$$Type } from "icyllis.modernui.view.ViewTreeObserver$OnPreDrawListener"
import { $ViewTreeObserver$OnScrollChangedListener$$Type } from "icyllis.modernui.view.ViewTreeObserver$OnScrollChangedListener"
import { $ViewTreeObserver$OnGlobalFocusChangeListener$$Type } from "icyllis.modernui.view.ViewTreeObserver$OnGlobalFocusChangeListener"

export class $ViewTreeObserver {
public "addOnGlobalFocusChangeListener"(listener: $ViewTreeObserver$OnGlobalFocusChangeListener$$Type): void
public "addOnGlobalLayoutListener"(listener: $ViewTreeObserver$OnGlobalLayoutListener$$Type): void
public "addOnPreDrawListener"(listener: $ViewTreeObserver$OnPreDrawListener$$Type): void
public "addOnScrollChangedListener"(listener: $ViewTreeObserver$OnScrollChangedListener$$Type): void
public "dispatchOnGlobalLayout"(): void
public "dispatchOnPreDraw"(): boolean
public "dispatchOnScrollChanged"(): void
public "isAlive"(): boolean
public "removeOnGlobalFocusChangeListener"(victim: $ViewTreeObserver$OnGlobalFocusChangeListener$$Type): void
public "removeOnGlobalLayoutListener"(victim: $ViewTreeObserver$OnGlobalLayoutListener$$Type): void
public "removeOnPreDrawListener"(victim: $ViewTreeObserver$OnPreDrawListener$$Type): void
public "removeOnScrollChangedListener"(victim: $ViewTreeObserver$OnScrollChangedListener$$Type): void
get "alive"(): boolean
}
}

declare module "icyllis.modernui.util.FloatProperty" {
import { $Property } from "icyllis.modernui.util.Property"

export class $FloatProperty<T = any> extends $Property<T, float> {
constructor(name: string)

/** @deprecated */
public "set"(object: T, value: float): void
public "setValue"(t0: T, float1: float): void
}
}

declare module "icyllis.modernui.resources.AssetManager$ResolvedBag" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AssetManager$ResolvedBag {
static readonly "COLUMN_COOKIE": integer
static readonly "COLUMN_DATA": integer
static readonly "COLUMN_TYPE": integer
static readonly "VALUE_COLUMNS": integer

constructor()

public "attribute"(index: integer): string
public "cookie"(index: integer): integer
public "data"(index: integer): integer
public "getEntryCount"(): integer
public "namespace"(index: integer): string
public "type"(index: integer): integer
get "keys"(): string[]
set "keys"(value: string[])
get "typeSpecFlags"(): integer
set "typeSpecFlags"(value: integer)
get "values"(): integer[]
set "values"(value: integer[])
get "entryCount"(): integer
}
}

declare module "icyllis.modernui.mc.mixin.AccessOptions" {
import { $OptionInstance$$Type } from "net.minecraft.client.OptionInstance"

export interface $AccessOptions {
"setGuiScale"(optionInstance0: $OptionInstance$$Type<integer>): void
set "guiScale"(value: $OptionInstance$$Type<integer>)
}

export namespace $AccessOptions {
const probejs$$marker: never
}
export abstract class $AccessOptions$$Static implements $AccessOptions {
}
}

declare module "icyllis.modernui.view.ViewOutlineProvider" {
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Outline$$Type } from "icyllis.modernui.graphics.Outline"

export interface $ViewOutlineProvider {
"getOutline"(view0: $View$$Type, outline1: $Outline$$Type): void
}

export namespace $ViewOutlineProvider {
const BACKGROUND: $ViewOutlineProvider
const BOUNDS: $ViewOutlineProvider
const PADDED_BOUNDS: $ViewOutlineProvider
}
export abstract class $ViewOutlineProvider$$Static implements $ViewOutlineProvider {
static readonly "BACKGROUND": $ViewOutlineProvider
static readonly "BOUNDS": $ViewOutlineProvider
static readonly "PADDED_BOUNDS": $ViewOutlineProvider

}
}

declare module "icyllis.modernui.view.View$OnCreateContextMenuListener" {
import { $ContextMenu$ContextMenuInfo$$Type } from "icyllis.modernui.view.ContextMenu$ContextMenuInfo"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $ContextMenu$$Type } from "icyllis.modernui.view.ContextMenu"

export interface $View$OnCreateContextMenuListener {
"onCreateContextMenu"(contextMenu0: $ContextMenu$$Type, view1: $View$$Type, contextMenuInfo2: $ContextMenu$ContextMenuInfo$$Type): void
}

export namespace $View$OnCreateContextMenuListener {
const probejs$$marker: never
}
export abstract class $View$OnCreateContextMenuListener$$Static implements $View$OnCreateContextMenuListener {
}
}

declare module "icyllis.modernui.util.AttributeSet" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AttributeSet {
}

export namespace $AttributeSet {
const probejs$$marker: never
}
export abstract class $AttributeSet$$Static implements $AttributeSet {
}
}

declare module "icyllis.modernui.graphics.text.FontCollection" {
import { $List } from "java.util.List"
import { $FontCollection$Run } from "icyllis.modernui.graphics.text.FontCollection$Run"
import { $BitSet$$Type } from "java.util.BitSet"
import { $FontFamily, $FontFamily$$Type } from "icyllis.modernui.graphics.text.FontFamily"

export class $FontCollection {
static readonly "GC_M_MASK": integer
static readonly "REPLACEMENT_CHARACTER": integer
static readonly "UNSUPPORTED_FONT_SCORE": integer

constructor(...families: $FontFamily$$Type[])
constructor(families: $FontFamily$$Type[], exclusiveEastAsianBits: $BitSet$$Type)

public static "doesNotNeedFontSupport"(c: integer): boolean
public "getFamilies"(): $List<$FontFamily>
public static "isCombining"(c: integer): boolean
public static "isEmojiBreak"(prevCh: integer, ch: integer): boolean
public static "isStickyWhitelisted"(c: integer): boolean
public static "isVariationSelector"(c: integer): boolean
public "itemize"(text: character[], offset: integer, limit: integer): $List<$FontCollection$Run>
public "itemize"(text: character[], offset: integer, limit: integer, runLimit: integer): $List<$FontCollection$Run>
get "families"(): $List<$FontFamily>
}
}

declare module "icyllis.modernui.view.SubMenu" {
import { $Drawable$$Type } from "icyllis.modernui.graphics.drawable.Drawable"
import { $MenuItem } from "icyllis.modernui.view.MenuItem"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $KeyEvent$$Type } from "icyllis.modernui.view.KeyEvent"
import { $Menu } from "icyllis.modernui.view.Menu"

export interface $SubMenu extends $Menu {
"add"(charSequence0: charseq): $MenuItem
"add"(int0: integer, int1: integer, int2: integer, charSequence3: charseq): $MenuItem
"addSubMenu"(int0: integer, int1: integer, int2: integer, charSequence3: charseq): $SubMenu
"addSubMenu"(charSequence0: charseq): $SubMenu
"clear"(): void
"clearHeader"(): void
"close"(): void
"findItem"(int0: integer): $MenuItem
"getItem"(): $MenuItem
"getItem"(int0: integer): $MenuItem
"hasVisibleItems"(): boolean
"isShortcutKey"(int0: integer, keyEvent1: $KeyEvent$$Type): boolean
"performIdentifierAction"(int0: integer, int1: integer): boolean
"performShortcut"(int0: integer, keyEvent1: $KeyEvent$$Type, int2: integer): boolean
"removeGroup"(int0: integer): void
"removeItem"(int0: integer): void
"setGroupCheckable"(int0: integer, boolean1: boolean, boolean2: boolean): void
"setGroupDividerEnabled"(boolean0: boolean): void
"setGroupEnabled"(int0: integer, boolean1: boolean): void
"setGroupVisible"(int0: integer, boolean1: boolean): void
"setHeaderIcon"(drawable0: $Drawable$$Type): $SubMenu
"setHeaderTitle"(charSequence0: charseq): $SubMenu
"setHeaderView"(view0: $View$$Type): $SubMenu
"setIcon"(drawable0: $Drawable$$Type): $SubMenu
"setOptionalIconsVisible"(boolean0: boolean): void
"setQwertyMode"(boolean0: boolean): void
"size"(): integer
get "item"(): $MenuItem
set "groupDividerEnabled"(value: boolean)
set "headerIcon"(value: $Drawable$$Type)
set "headerTitle"(value: charseq)
set "headerView"(value: $View$$Type)
set "icon"(value: $Drawable$$Type)
set "optionalIconsVisible"(value: boolean)
set "qwertyMode"(value: boolean)
}

export namespace $SubMenu {
const probejs$$marker: never
}
export abstract class $SubMenu$$Static implements $SubMenu {
}
}

declare module "icyllis.modernui.resources.ResourceId" {
import { $Comparable } from "java.lang.Comparable"
import { $Record } from "java.lang.Record"

export class $ResourceId extends $Record implements $Comparable<$ResourceId> {
constructor(namespace: string, type: string, entry: string)

public static "attr"(namespace: string, name: string): $ResourceId
public static "comparePair"(lhsNamespace: string, lhsName: string, rhsNamespace: string, rhsName: string): integer
public "compareTo"(o: $ResourceId$$Type): integer
public "entry"(): string
public "namespace"(): string
public static "parse"(name: string): $ResourceId
public static "parse"(name: string, fallbackType: string, fallbackNamespace: string): $ResourceId
public static "toString"(namespace: string, type: string, entry: string): string
public "type"(): string
}
}

declare module "icyllis.modernui.view.ContextMenu$ContextMenuInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContextMenu$ContextMenuInfo {
}

export namespace $ContextMenu$ContextMenuInfo {
const probejs$$marker: never
}
export abstract class $ContextMenu$ContextMenuInfo$$Static implements $ContextMenu$ContextMenuInfo {
}
}

declare module "icyllis.modernui.animation.LayoutTransition$TransitionListener" {
import { $ViewGroup$$Type } from "icyllis.modernui.view.ViewGroup"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $LayoutTransition$$Type } from "icyllis.modernui.animation.LayoutTransition"

export interface $LayoutTransition$TransitionListener {
"endTransition"(layoutTransition0: $LayoutTransition$$Type, viewGroup1: $ViewGroup$$Type, view2: $View$$Type, int3: integer): void
"startTransition"(layoutTransition0: $LayoutTransition$$Type, viewGroup1: $ViewGroup$$Type, view2: $View$$Type, int3: integer): void
}

export namespace $LayoutTransition$TransitionListener {
const probejs$$marker: never
}
export abstract class $LayoutTransition$TransitionListener$$Static implements $LayoutTransition$TransitionListener {
}
}

declare module "icyllis.modernui.view.View$OnFocusChangeListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnFocusChangeListener {
"onFocusChange"(view0: $View$$Type, boolean1: boolean): void
}

export namespace $View$OnFocusChangeListener {
const probejs$$marker: never
}
export abstract class $View$OnFocusChangeListener$$Static implements $View$OnFocusChangeListener {
}
}

declare module "icyllis.modernui.mc.mixin.AccessNativeImage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessNativeImage {
"getPixels"(): long
get "pixels"(): long
}

export namespace $AccessNativeImage {
const probejs$$marker: never
}
export abstract class $AccessNativeImage$$Static implements $AccessNativeImage {
}
}

declare module "icyllis.modernui.transition.TransitionPropagation" {
import { $Transition$$Type } from "icyllis.modernui.transition.Transition"
import { $ViewGroup$$Type } from "icyllis.modernui.view.ViewGroup"
import { $TransitionValues$$Type } from "icyllis.modernui.transition.TransitionValues"

export class $TransitionPropagation {
constructor()

public "captureValues"(transitionValues0: $TransitionValues$$Type): void
public "getPropagationProperties"(): string[]
public "getStartDelay"(viewGroup0: $ViewGroup$$Type, transition1: $Transition$$Type, transitionValues2: $TransitionValues$$Type, transitionValues3: $TransitionValues$$Type): long
get "propagationProperties"(): string[]
}
}

declare module "icyllis.modernui.graphics.Paint$Style" {
import { $Enum } from "java.lang.Enum"

export class $Paint$Style extends $Enum<$Paint$Style> {
static readonly "FILL": $Paint$Style
static readonly "FILL_AND_STROKE": $Paint$Style
static readonly "STROKE": $Paint$Style

public static "valueOf"(name: string): $Paint$Style
public static "values"(): $Paint$Style[]
}
}

declare module "icyllis.modernui.view.View" {
import { $FloatProperty } from "icyllis.modernui.util.FloatProperty"
import { $View$OnScrollChangeListener$$Type } from "icyllis.modernui.view.View$OnScrollChangeListener"
import { $View$OnGenericMotionListener$$Type } from "icyllis.modernui.view.View$OnGenericMotionListener"
import { $Canvas$$Type } from "icyllis.modernui.graphics.Canvas"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $ArrayList, $ArrayList$$Type } from "java.util.ArrayList"
import { $View$DragShadow$$Type } from "icyllis.modernui.view.View$DragShadow"
import { $IntProperty } from "icyllis.modernui.util.IntProperty"
import { $ViewTreeObserver } from "icyllis.modernui.view.ViewTreeObserver"
import { $ActionMode } from "icyllis.modernui.view.ActionMode"
import { $View$OnFocusChangeListener, $View$OnFocusChangeListener$$Type } from "icyllis.modernui.view.View$OnFocusChangeListener"
import { $View$OnAttachStateChangeListener$$Type } from "icyllis.modernui.view.View$OnAttachStateChangeListener"
import { $ViewParent } from "icyllis.modernui.view.ViewParent"
import { $View$OnClickListener$$Type } from "icyllis.modernui.view.View$OnClickListener"
import { $PointerIcon } from "icyllis.modernui.view.PointerIcon"
import { $MotionEvent$$Type } from "icyllis.modernui.view.MotionEvent"
import { $Context, $Context$$Type } from "icyllis.modernui.core.Context"
import { $KeyEvent$DispatcherState } from "icyllis.modernui.view.KeyEvent$DispatcherState"
import { $Drawable$Callback } from "icyllis.modernui.graphics.drawable.Drawable$Callback"
import { $Point$$Type } from "icyllis.modernui.graphics.Point"
import { $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"
import { $RectF$$Type } from "icyllis.modernui.graphics.RectF"
import { $ViewOutlineProvider, $ViewOutlineProvider$$Type } from "icyllis.modernui.view.ViewOutlineProvider"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Rect, $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $View$OnDragListener$$Type } from "icyllis.modernui.view.View$OnDragListener"
import { $Collection$$Type } from "java.util.Collection"
import { $ActionMode$Callback$$Type } from "icyllis.modernui.view.ActionMode$Callback"
import { $View$OnContextClickListener$$Type } from "icyllis.modernui.view.View$OnContextClickListener"
import { $View$OnLayoutChangeListener$$Type } from "icyllis.modernui.view.View$OnLayoutChangeListener"
import { $View$OnKeyListener$$Type } from "icyllis.modernui.view.View$OnKeyListener"
import { $View$OnCreateContextMenuListener$$Type } from "icyllis.modernui.view.View$OnCreateContextMenuListener"
import { $AttributeSet$$Type } from "icyllis.modernui.util.AttributeSet"
import { $Handler } from "icyllis.modernui.core.Handler"
import { $View$OnTouchListener$$Type } from "icyllis.modernui.view.View$OnTouchListener"
import { $View$OnHoverListener$$Type } from "icyllis.modernui.view.View$OnHoverListener"
import { $Drawable, $Drawable$$Type } from "icyllis.modernui.graphics.drawable.Drawable"
import { $ViewRoot } from "icyllis.modernui.view.ViewRoot"
import { $ViewGroup$LayoutParams, $ViewGroup$LayoutParams$$Type } from "icyllis.modernui.view.ViewGroup$LayoutParams"
import { $StateListAnimator, $StateListAnimator$$Type } from "icyllis.modernui.animation.StateListAnimator"
import { $ContextMenu$$Type } from "icyllis.modernui.view.ContextMenu"
import { $KeyEvent$$Type } from "icyllis.modernui.view.KeyEvent"
import { $View$OnLongClickListener, $View$OnLongClickListener$$Type } from "icyllis.modernui.view.View$OnLongClickListener"
import { $Matrix, $Matrix$$Type } from "icyllis.modernui.graphics.Matrix"
import { $DragEvent$$Type } from "icyllis.modernui.view.DragEvent"

export class $View implements $Drawable$Callback {
static readonly "ALPHA": $FloatProperty<$View>
static readonly "BOTTOM": $IntProperty<$View>
static readonly "FOCUSABLE": integer
static readonly "FOCUSABLES_ALL": integer
static readonly "FOCUSABLES_TOUCH_MODE": integer
static readonly "FOCUSABLE_AUTO": integer
static readonly "FOCUS_BACKWARD": integer
static readonly "FOCUS_DOWN": integer
static readonly "FOCUS_FORWARD": integer
static readonly "FOCUS_LEFT": integer
static readonly "FOCUS_RIGHT": integer
static readonly "FOCUS_UP": integer
static readonly "GONE": integer
static readonly "HAPTIC_FEEDBACK_ENABLED": integer
static readonly "INVISIBLE": integer
static readonly "LAYOUT_DIRECTION_INHERIT": integer
static readonly "LAYOUT_DIRECTION_LOCALE": integer
static readonly "LAYOUT_DIRECTION_LTR": integer
static readonly "LAYOUT_DIRECTION_RTL": integer
static readonly "LAYOUT_DIRECTION_UNDEFINED": integer
static readonly "LEFT": $IntProperty<$View>
static readonly "MEASURED_HEIGHT_STATE_SHIFT": integer
static readonly "MEASURED_SIZE_MASK": integer
static readonly "MEASURED_STATE_MASK": integer
static readonly "MEASURED_STATE_TOO_SMALL": integer
static readonly "NOT_FOCUSABLE": integer
static readonly "NO_ID": integer
static readonly "OVER_SCROLL_ALWAYS": integer
static readonly "OVER_SCROLL_IF_CONTENT_SCROLLS": integer
static readonly "OVER_SCROLL_NEVER": integer
static readonly "RIGHT": $IntProperty<$View>
static readonly "ROTATION": $FloatProperty<$View>
static readonly "ROTATION_X": $FloatProperty<$View>
static readonly "ROTATION_Y": $FloatProperty<$View>
static readonly "SCALE_X": $FloatProperty<$View>
static readonly "SCALE_Y": $FloatProperty<$View>
static readonly "SCROLLBARS_INSIDE_INSET": integer
static readonly "SCROLLBARS_INSIDE_OVERLAY": integer
static readonly "SCROLLBARS_OUTSIDE_INSET": integer
static readonly "SCROLLBARS_OUTSIDE_OVERLAY": integer
static readonly "SCROLL_AXIS_HORIZONTAL": integer
static readonly "SCROLL_AXIS_NONE": integer
static readonly "SCROLL_AXIS_VERTICAL": integer
static readonly "SCROLL_INDICATOR_BOTTOM": integer
static readonly "SCROLL_INDICATOR_END": integer
static readonly "SCROLL_INDICATOR_LEFT": integer
static readonly "SCROLL_INDICATOR_RIGHT": integer
static readonly "SCROLL_INDICATOR_START": integer
static readonly "SCROLL_INDICATOR_TOP": integer
static readonly "SCROLL_X": $IntProperty<$View>
static readonly "SCROLL_Y": $IntProperty<$View>
static readonly "SOUND_EFFECTS_ENABLED": integer
static readonly "TEXT_ALIGNMENT_CENTER": integer
static readonly "TEXT_ALIGNMENT_GRAVITY": integer
static readonly "TEXT_ALIGNMENT_INHERIT": integer
static readonly "TEXT_ALIGNMENT_TEXT_END": integer
static readonly "TEXT_ALIGNMENT_TEXT_START": integer
static readonly "TEXT_ALIGNMENT_VIEW_END": integer
static readonly "TEXT_ALIGNMENT_VIEW_START": integer
static readonly "TEXT_DIRECTION_ANY_RTL": integer
static readonly "TEXT_DIRECTION_FIRST_STRONG": integer
static readonly "TEXT_DIRECTION_FIRST_STRONG_LTR": integer
static readonly "TEXT_DIRECTION_FIRST_STRONG_RTL": integer
static readonly "TEXT_DIRECTION_INHERIT": integer
static readonly "TEXT_DIRECTION_LOCALE": integer
static readonly "TEXT_DIRECTION_LTR": integer
static readonly "TEXT_DIRECTION_RTL": integer
static readonly "TOP": $IntProperty<$View>
static readonly "TRANSLATION_X": $FloatProperty<$View>
static readonly "TRANSLATION_Y": $FloatProperty<$View>
static readonly "TRANSLATION_Z": $FloatProperty<$View>
static readonly "TYPE_NON_TOUCH": integer
static readonly "TYPE_TOUCH": integer
static readonly "VISIBLE": integer
static readonly "X": $FloatProperty<$View>
static readonly "Y": $FloatProperty<$View>
static readonly "Z": $FloatProperty<$View>
static "sUseMeasureCacheDuringForceLayout": boolean

constructor(context: $Context$$Type, attrs: $AttributeSet$$Type, defStyleAttr: $ResourceId$$Type, defStyleRes: $ResourceId$$Type)
constructor(context: $Context$$Type, attrs: $AttributeSet$$Type, defStyleAttr: $ResourceId$$Type)
constructor(context: $Context$$Type, attrs: $AttributeSet$$Type)
constructor(context: $Context$$Type)

public "addFocusables"(views: $ArrayList$$Type<$View$$Type>, direction: integer): void
public "addFocusables"(views: $ArrayList$$Type<$View$$Type>, direction: integer, focusableMode: integer): void
public "addKeyboardNavigationClusters"(views: $Collection$$Type<$View$$Type>, direction: integer): void
public "addOnAttachStateChangeListener"(listener: $View$OnAttachStateChangeListener$$Type): void
public "addOnLayoutChangeListener"(listener: $View$OnLayoutChangeListener$$Type): void
public "addTouchables"(views: $ArrayList$$Type<$View$$Type>): void
public "callOnClick"(): boolean
public "canResolveLayoutDirection"(): boolean
public "canResolveTextAlignment"(): boolean
public "canResolveTextDirection"(): boolean
public "canScrollHorizontally"(direction: integer): boolean
public "canScrollVertically"(direction: integer): boolean
public "cancelLongPress"(): void
public "cancelPendingInputEvents"(): void
public "clearFocus"(): void
public "clearFocusInternal"(focused: $View$$Type, propagate: boolean, refocus: boolean): void
public static "combineMeasuredStates"(curState: integer, newState: integer): integer
public "computeScroll"(): void
public "createContextMenu"(menu: $ContextMenu$$Type): void
public "dispatchDrawableHotspotChanged"(x: float, y: float): void
public "dispatchFinishTemporaryDetach"(): void
public "dispatchGenericMotionEvent"(event: $MotionEvent$$Type): boolean
public "dispatchKeyEvent"(event: $KeyEvent$$Type): boolean
public "dispatchKeyShortcutEvent"(event: $KeyEvent$$Type): boolean
public "dispatchNestedFling"(velocityX: float, velocityY: float, consumed: boolean): boolean
public "dispatchNestedPreFling"(velocityX: float, velocityY: float): boolean
public "dispatchNestedPreScroll"(dx: integer, dy: integer, consumed: integer[], offsetInWindow: integer[], type: integer): boolean
public "dispatchNestedScroll"(dxConsumed: integer, dyConsumed: integer, dxUnconsumed: integer, dyUnconsumed: integer, offsetInWindow: integer[], type: integer, consumed: integer[]): boolean
public "dispatchPointerEvent"(event: $MotionEvent$$Type): boolean
public "dispatchStartTemporaryDetach"(): void
public "dispatchTouchEvent"(event: $MotionEvent$$Type): boolean
public "dispatchWindowFocusChanged"(hasFocus: boolean): void
public "dispatchWindowVisibilityChanged"(visibility: integer): void
public "dp"(value: float): integer
public "draw"(canvas: $Canvas$$Type): void
public "drawableHotspotChanged"(x: float, y: float): void
public "findFocus"(): $View
public "findViewById"<T extends $View>(id: integer): T
public "findViewByPredicate"<T extends $View>(predicate: $Predicate$$Type<$View$$Type>): T
public "findViewByPredicateInsideOut"<T extends $View>(start: $View$$Type, predicate: $Predicate$$Type<$View$$Type>): T
public "findViewWithTag"<T extends $View>(tag: any): T
public "focusSearch"(direction: integer): $View
public "forceHasOverlappingRendering"(hasOverlappingRendering: boolean): void
public "forceLayout"(): void
public static "generateViewId"(): integer
public "getAlpha"(): float
public "getAnimationMatrix"(): $Matrix
public "getBackground"(): $Drawable
public "getBaseline"(): integer
public "getBottom"(): integer
public "getBoundsOnScreen"(outRect: $Rect$$Type, clipToParent: boolean): void
public "getBoundsOnScreen"(outRect: $Rect$$Type): void
public "getClipBounds"(): $Rect
public "getClipBounds"(outRect: $Rect$$Type): boolean
public "getContentDescription"(): charseq
public "getContext"(): $Context
public static "getDefaultSize"(size: integer, measureSpec: integer): integer
public "getDrawableState"(): integer[]
public "getDrawingRect"(outRect: $Rect$$Type): void
public "getElevation"(): float
public "getFadingEdge"(): integer
public "getFadingEdgeLength"(): integer
public "getFocusable"(): integer
public "getFocusables"(direction: integer): $ArrayList<$View>
public "getFocusedRect"(r: $Rect$$Type): void
public "getForeground"(): $Drawable
public "getForegroundGravity"(): integer
public "getGlobalVisibleRect"(r: $Rect$$Type, globalOffset: $Point$$Type): boolean
public "getGlobalVisibleRect"(r: $Rect$$Type): boolean
public "getHandler"(): $Handler
public "getHasOverlappingRendering"(): boolean
public "getHeight"(): integer
public "getHitRect"(outRect: $Rect$$Type): void
public "getHorizontalScrollbarThumbDrawable"(): $Drawable
public "getHorizontalScrollbarTrackDrawable"(): $Drawable
public "getId"(): integer
public "getInverseMatrix"(): $Matrix
public "getKeyDispatcherState"(): $KeyEvent$DispatcherState
public "getLayoutDirection"(): integer
public "getLayoutParams"(): $ViewGroup$LayoutParams
public "getLeft"(): integer
public "getLocalVisibleRect"(r: $Rect$$Type): boolean
public "getLocationInWindow"(outLocation: integer[]): void
public "getLocationOnScreen"(outLocation: integer[]): void
public "getMatrix"(): $Matrix
public "getMeasuredHeight"(): integer
public "getMeasuredHeightAndState"(): integer
public "getMeasuredState"(): integer
public "getMeasuredWidth"(): integer
public "getMeasuredWidthAndState"(): integer
public "getMinimumHeight"(): integer
public "getMinimumWidth"(): integer
public "getNextClusterForwardId"(): integer
public "getNextFocusDownId"(): integer
public "getNextFocusForwardId"(): integer
public "getNextFocusLeftId"(): integer
public "getNextFocusRightId"(): integer
public "getNextFocusUpId"(): integer
public "getOnFocusChangeListener"(): $View$OnFocusChangeListener
public "getOnLongClickListener"(): $View$OnLongClickListener
public "getOutlineProvider"(): $ViewOutlineProvider
public "getOverScrollMode"(): integer
public "getPaddingBottom"(): integer
public "getPaddingEnd"(): integer
public "getPaddingLeft"(): integer
public "getPaddingRight"(): integer
public "getPaddingStart"(): integer
public "getPaddingTop"(): integer
public "getParent"(): $ViewParent
public "getPivotX"(): float
public "getPivotY"(): float
public "getRawLayoutDirection"(): integer
public "getRawTextAlignment"(): integer
public "getRawTextDirection"(): integer
public "getRevealOnFocusHint"(): boolean
public "getRight"(): integer
public "getRootView"(): $View
public "getRotation"(): float
public "getRotationX"(): float
public "getRotationY"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getScrollBarDefaultDelayBeforeFade"(): integer
public "getScrollBarFadeDuration"(): integer
public "getScrollBarSize"(): integer
public "getScrollBarStyle"(): integer
public "getScrollIndicators"(): integer
public "getScrollX"(): integer
public "getScrollY"(): integer
public "getStateDescription"(): charseq
public "getStateListAnimator"(): $StateListAnimator
public "getTag"(): any
public "getTag"(key: integer): any
public "getTextAlignment"(): integer
public "getTextDirection"(): integer
public "getTooltipText"(): charseq
public "getTooltipView"(): $View
public "getTop"(): integer
public "getTouchables"(): $ArrayList<$View>
public "getTransitionAlpha"(): float
public "getTransitionName"(): string
public "getTranslationX"(): float
public "getTranslationY"(): float
public "getTranslationZ"(): float
public "getVerticalFadingEdgeLength"(): integer
public "getVerticalScrollbarThumbDrawable"(): $Drawable
public "getVerticalScrollbarTrackDrawable"(): $Drawable
public "getVerticalScrollbarWidth"(): integer
public "getViewRoot"(): $ViewRoot
public "getViewTreeObserver"(): $ViewTreeObserver
public "getVisibility"(): integer
public "getWidth"(): integer
public "getWindowVisibility"(): integer
public "getX"(): float
public "getY"(): float
public "getZ"(): float
public "hasExplicitFocusable"(): boolean
public "hasFocus"(): boolean
public "hasFocusable"(): boolean
public "hasIdentityMatrix"(): boolean
public "hasNestedScrollingParent"(type: integer): boolean
public "hasOnClickListeners"(): boolean
public "hasOnLongClickListeners"(): boolean
public "hasOverlappingRendering"(): boolean
public "hasTransientState"(): boolean
public "hasTranslationTransientState"(): boolean
public "hasWindowFocus"(): boolean
public "invalidate"(dirty: $Rect$$Type): void
public "invalidate"(l: integer, t: integer, r: integer, b: integer): void
public "invalidate"(): void
public "invalidateDrawable"(drawable: $Drawable$$Type): void
public "invalidateOutline"(): void
public "isActivated"(): boolean
public "isAttachedToWindow"(): boolean
public "isClickable"(): boolean
public "isContextClickable"(): boolean
public "isDuplicateParentStateEnabled"(): boolean
public "isEnabled"(): boolean
public "isFocusable"(): boolean
public "isFocusableInTouchMode"(): boolean
public "isFocused"(): boolean
public "isFocusedByDefault"(): boolean
public "isForegroundInsidePadding"(): boolean
public "isHapticFeedbackEnabled"(): boolean
public "isHorizontalFadingEdgeEnabled"(): boolean
public "isHorizontalScrollBarEnabled"(): boolean
public "isHovered"(): boolean
public "isInLayout"(): boolean
public "isInScrollingContainer"(): boolean
public "isInTouchMode"(): boolean
public "isKeyboardNavigationCluster"(): boolean
public "isLaidOut"(): boolean
public "isLayoutDirectionInherited"(): boolean
public "isLayoutDirectionResolved"(): boolean
public "isLayoutRequested"(): boolean
public "isLayoutRtl"(): boolean
public "isLongClickable"(): boolean
public "isNestedScrollingEnabled"(): boolean
public "isPaddingRelative"(): boolean
public "isPivotSet"(): boolean
public "isPressed"(): boolean
public "isRootNamespace"(): boolean
public "isScrollbarFadingEnabled"(): boolean
public "isSelected"(): boolean
public "isShowingLayoutBounds"(): boolean
public "isShown"(): boolean
public "isSoundEffectsEnabled"(): boolean
public "isTemporarilyDetached"(): boolean
public "isTextAlignmentInherited"(): boolean
public "isTextAlignmentResolved"(): boolean
public "isTextDirectionInherited"(): boolean
public "isTextDirectionResolved"(): boolean
public "isVerticalFadingEdgeEnabled"(): boolean
public "isVerticalScrollBarEnabled"(): boolean
public "jumpDrawablesToCurrentState"(): void
public "keyboardNavigationClusterSearch"(currentCluster: $View$$Type, direction: integer): $View
public "layout"(l: integer, t: integer, r: integer, b: integer): void
public "mapRectFromViewToScreenCoords"(rect: $RectF$$Type, clipToParent: boolean): void
public "measure"(widthMeasureSpec: integer, heightMeasureSpec: integer): void
public "offsetLeftAndRight"(offset: integer): void
public "offsetTopAndBottom"(offset: integer): void
public "onCancelPendingInputEvents"(): void
public "onDragEvent"(event: $DragEvent$$Type): boolean
public "onDrawForeground"(canvas: $Canvas$$Type): void
public "onFinishTemporaryDetach"(): void
public "onGenericMotionEvent"(event: $MotionEvent$$Type): boolean
public "onHoverChanged"(hovered: boolean): void
public "onHoverEvent"(event: $MotionEvent$$Type): boolean
public "onKeyDown"(keyCode: integer, event: $KeyEvent$$Type): boolean
public "onKeyShortcut"(keyCode: integer, event: $KeyEvent$$Type): boolean
public "onKeyUp"(keyCode: integer, event: $KeyEvent$$Type): boolean
public "onResolveDrawables"(layoutDirection: integer): void
public "onResolvePointerIcon"(event: $MotionEvent$$Type): $PointerIcon
public "onStartTemporaryDetach"(): void
public "onTouchEvent"(event: $MotionEvent$$Type): boolean
public "onVisibilityAggregated"(isVisible: boolean): void
public "onWindowFocusChanged"(hasWindowFocus: boolean): void
public "performClick"(): boolean
public "performContextClick"(x: float, y: float): boolean
public "performContextClick"(): boolean
public "performHapticFeedback"(feedbackConstant: integer, flags: integer): boolean
public "performHapticFeedback"(feedbackConstant: integer): boolean
public "performLongClick"(x: float, y: float): boolean
public "performLongClick"(): boolean
public "playSoundEffect"(soundConstant: integer): void
public "pointInView"(localX: float, localY: float, slop: float): boolean
public "post"(action: $Runnable$$Type): boolean
public "postDelayed"(action: $Runnable$$Type, delayMillis: long): boolean
public "postInvalidate"(): void
public "postInvalidateDelayed"(delayMilliseconds: long): void
public "postInvalidateOnAnimation"(): void
public "postOnAnimation"(action: $Runnable$$Type): void
public "postOnAnimationDelayed"(action: $Runnable$$Type, delayMillis: long): void
public "refreshDrawableState"(): void
public "removeCallbacks"(action: $Runnable$$Type): void
public "removeOnAttachStateChangeListener"(listener: $View$OnAttachStateChangeListener$$Type): void
public "removeOnLayoutChangeListener"(listener: $View$OnLayoutChangeListener$$Type): void
public "requestFocus"(): boolean
public "requestFocus"(direction: integer): boolean
public "requestFocus"(direction: integer, previouslyFocusedRect: $Rect$$Type): boolean
public "requestLayout"(): void
public "requestRectangleOnScreen"(rectangle: $Rect$$Type): boolean
public "requestRectangleOnScreen"(rectangle: $Rect$$Type, immediate: boolean): boolean
public "requireViewById"<T extends $View>(id: integer): T
public "resetPivot"(): void
public "resolveLayoutDirection"(): boolean
public "resolveLayoutParams"(): void
public "resolvePadding"(): void
public "resolveRtlPropertiesIfNeeded"(): boolean
public static "resolveSize"(size: integer, measureSpec: integer): integer
public static "resolveSizeAndState"(size: integer, measureSpec: integer, childMeasuredState: integer): integer
public "resolveTextAlignment"(): boolean
public "resolveTextDirection"(): boolean
public "restoreDefaultFocus"(): boolean
public "scheduleDrawable"(who: $Drawable$$Type, what: $Runnable$$Type, when: long): void
public "scrollBy"(x: integer, y: integer): void
public "scrollTo"(x: integer, y: integer): void
public "setActivated"(activated: boolean): void
public "setAlpha"(alpha: float): void
public "setAnimationMatrix"(matrix: $Matrix$$Type): void
public "setBackground"(background: $Drawable$$Type): void
public "setBottom"(bottom: integer): void
public "setClickable"(clickable: boolean): void
public "setClipBounds"(clipBounds: $Rect$$Type): void
public "setContentDescription"(contentDescription: charseq): void
public "setContextClickable"(contextClickable: boolean): void
public "setDuplicateParentStateEnabled"(enabled: boolean): void
public "setElevation"(elevation: float): void
public "setEnabled"(enabled: boolean): void
public "setFocusable"(focusable: integer): void
public "setFocusable"(focusable: boolean): void
public "setFocusableInTouchMode"(focusableInTouchMode: boolean): void
public "setFocusedByDefault"(isFocusedByDefault: boolean): void
public "setFocusedInCluster"(): void
public "setForeground"(foreground: $Drawable$$Type): void
public "setForegroundGravity"(gravity: integer): void
public "setHapticFeedbackEnabled"(hapticFeedbackEnabled: boolean): void
public "setHasTransientState"(hasTransientState: boolean): void
public "setHasTranslationTransientState"(hasTranslationTransientState: boolean): void
public "setHorizontalFadingEdgeEnabled"(horizontalFadingEdgeEnabled: boolean): void
public "setHorizontalScrollBarEnabled"(enabled: boolean): void
public "setHorizontalScrollbarThumbDrawable"(drawable: $Drawable$$Type): void
public "setHorizontalScrollbarTrackDrawable"(drawable: $Drawable$$Type): void
public "setHovered"(hovered: boolean): void
public "setId"(id: integer): void
public "setIsRootNamespace"(isRoot: boolean): void
public "setKeyboardNavigationCluster"(isCluster: boolean): void
public "setLayoutDirection"(layoutDirection: integer): void
public "setLayoutParams"(params: $ViewGroup$LayoutParams$$Type): void
public "setLeft"(left: integer): void
public "setLongClickable"(longClickable: boolean): void
public "setMinimumHeight"(minHeight: integer): void
public "setMinimumWidth"(minWidth: integer): void
public "setNestedScrollingEnabled"(enabled: boolean): void
public "setNextClusterForwardId"(nextClusterForwardId: integer): void
public "setNextFocusDownId"(nextFocusDownId: integer): void
public "setNextFocusForwardId"(nextFocusForwardId: integer): void
public "setNextFocusLeftId"(nextFocusLeftId: integer): void
public "setNextFocusRightId"(nextFocusRightId: integer): void
public "setNextFocusUpId"(nextFocusUpId: integer): void
public "setOnClickListener"(l: $View$OnClickListener$$Type): void
public "setOnContextClickListener"(l: $View$OnContextClickListener$$Type): void
public "setOnCreateContextMenuListener"(l: $View$OnCreateContextMenuListener$$Type): void
public "setOnDragListener"(l: $View$OnDragListener$$Type): void
public "setOnFocusChangeListener"(l: $View$OnFocusChangeListener$$Type): void
public "setOnGenericMotionListener"(l: $View$OnGenericMotionListener$$Type): void
public "setOnHoverListener"(l: $View$OnHoverListener$$Type): void
public "setOnKeyListener"(l: $View$OnKeyListener$$Type): void
public "setOnLongClickListener"(l: $View$OnLongClickListener$$Type): void
public "setOnScrollChangeListener"(l: $View$OnScrollChangeListener$$Type): void
public "setOnTouchListener"(l: $View$OnTouchListener$$Type): void
public "setOutlineProvider"(provider: $ViewOutlineProvider$$Type): void
public "setOverScrollMode"(overScrollMode: integer): void
public "setPadding"(left: integer, top: integer, right: integer, bottom: integer): void
public "setPaddingRelative"(start: integer, top: integer, end: integer, bottom: integer): void
public "setPivotX"(pivotX: float): void
public "setPivotY"(pivotY: float): void
public "setPressed"(pressed: boolean): void
public "setRevealOnFocusHint"(revealOnFocus: boolean): void
public "setRight"(right: integer): void
public "setRotation"(rotation: float): void
public "setRotationX"(rotationX: float): void
public "setRotationY"(rotationY: float): void
public "setScaleX"(scaleX: float): void
public "setScaleY"(scaleY: float): void
public "setScrollBarDefaultDelayBeforeFade"(scrollBarDefaultDelayBeforeFade: integer): void
public "setScrollBarFadeDuration"(scrollBarFadeDuration: integer): void
public "setScrollBarSize"(scrollBarSize: integer): void
public "setScrollBarStyle"(style: integer): void
public "setScrollIndicators"(indicators: integer): void
public "setScrollIndicators"(indicators: integer, mask: integer): void
public "setScrollX"(value: integer): void
public "setScrollY"(value: integer): void
public "setScrollbarFadingEnabled"(fadeScrollbars: boolean): void
public "setSelected"(selected: boolean): void
public "setSoundEffectsEnabled"(soundEffectsEnabled: boolean): void
public "setStateDescription"(stateDescription: charseq): void
public "setStateListAnimator"(stateListAnimator: $StateListAnimator$$Type): void
public "setTag"(tag: any): void
public "setTag"(key: integer, tag: any): void
public "setTextAlignment"(textAlignment: integer): void
public "setTextDirection"(textDirection: integer): void
public "setTooltipText"(tooltipText: charseq): void
public "setTop"(top: integer): void
public "setTransitionAlpha"(alpha: float): void
public "setTransitionName"(transitionName: string): void
public "setTransitionVisibility"(visibility: integer): void
public "setTranslationX"(translationX: float): void
public "setTranslationY"(translationY: float): void
public "setTranslationZ"(translationZ: float): void
public "setVerticalFadingEdgeEnabled"(verticalFadingEdgeEnabled: boolean): void
public "setVerticalScrollBarEnabled"(enabled: boolean): void
public "setVerticalScrollbarThumbDrawable"(drawable: $Drawable$$Type): void
public "setVerticalScrollbarTrackDrawable"(drawable: $Drawable$$Type): void
public "setVisibility"(visibility: integer): void
public "setWillNotDraw"(willNotDraw: boolean): void
public "setX"(x: float): void
public "setY"(y: float): void
public "setZ"(z: float): void
public "showContextMenu"(x: float, y: float): boolean
public "showContextMenu"(): boolean
public "sp"(value: float): integer
public "startActionMode"(callback: $ActionMode$Callback$$Type): $ActionMode
public "startActionMode"(callback: $ActionMode$Callback$$Type, type: integer): $ActionMode
public "startDragAndDrop"(localState: any, shadow: $View$DragShadow$$Type, flags: integer): boolean
public "startNestedScroll"(axes: integer, type: integer): boolean
public "stopNestedScroll"(type: integer): void
public "toGlobalMotionEvent"(ev: $MotionEvent$$Type): boolean
public "toLocalMotionEvent"(ev: $MotionEvent$$Type): boolean
public "transformFromViewToWindowSpace"(inOutLocation: integer[]): void
public "transformMatrixToGlobal"(matrix: $Matrix$$Type): void
public "transformMatrixToLocal"(matrix: $Matrix$$Type): void
public "unscheduleDrawable"(who: $Drawable$$Type): void
public "unscheduleDrawable"(who: $Drawable$$Type, what: $Runnable$$Type): void
public "willNotDraw"(): boolean
get "alpha"(): float
get "animationMatrix"(): $Matrix
get "background"(): $Drawable
get "baseline"(): integer
get "bottom"(): integer
get "clipBounds"(): $Rect
get "contentDescription"(): charseq
get "context"(): $Context
get "drawableState"(): integer[]
get "elevation"(): float
get "fadingEdge"(): integer
get "fadingEdgeLength"(): integer
get "focusable"(): integer
get "foreground"(): $Drawable
get "foregroundGravity"(): integer
get "handler"(): $Handler
get "height"(): integer
get "horizontalScrollbarThumbDrawable"(): $Drawable
get "horizontalScrollbarTrackDrawable"(): $Drawable
get "id"(): integer
get "inverseMatrix"(): $Matrix
get "keyDispatcherState"(): $KeyEvent$DispatcherState
get "layoutDirection"(): integer
get "layoutParams"(): $ViewGroup$LayoutParams
get "left"(): integer
get "matrix"(): $Matrix
get "measuredHeight"(): integer
get "measuredHeightAndState"(): integer
get "measuredState"(): integer
get "measuredWidth"(): integer
get "measuredWidthAndState"(): integer
get "minimumHeight"(): integer
get "minimumWidth"(): integer
get "nextClusterForwardId"(): integer
get "nextFocusDownId"(): integer
get "nextFocusForwardId"(): integer
get "nextFocusLeftId"(): integer
get "nextFocusRightId"(): integer
get "nextFocusUpId"(): integer
get "onFocusChangeListener"(): $View$OnFocusChangeListener
get "onLongClickListener"(): $View$OnLongClickListener
get "outlineProvider"(): $ViewOutlineProvider
get "overScrollMode"(): integer
get "paddingBottom"(): integer
get "paddingEnd"(): integer
get "paddingLeft"(): integer
get "paddingRight"(): integer
get "paddingStart"(): integer
get "paddingTop"(): integer
get "parent"(): $ViewParent
get "pivotX"(): float
get "pivotY"(): float
get "rawLayoutDirection"(): integer
get "rawTextAlignment"(): integer
get "rawTextDirection"(): integer
get "revealOnFocusHint"(): boolean
get "right"(): integer
get "rootView"(): $View
get "rotation"(): float
get "rotationX"(): float
get "rotationY"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scrollBarDefaultDelayBeforeFade"(): integer
get "scrollBarFadeDuration"(): integer
get "scrollBarSize"(): integer
get "scrollBarStyle"(): integer
get "scrollIndicators"(): integer
get "scrollX"(): integer
get "scrollY"(): integer
get "stateDescription"(): charseq
get "stateListAnimator"(): $StateListAnimator
get "tag"(): any
get "textAlignment"(): integer
get "textDirection"(): integer
get "tooltipText"(): charseq
get "tooltipView"(): $View
get "top"(): integer
get "touchables"(): $ArrayList<$View>
get "transitionAlpha"(): float
get "transitionName"(): string
get "translationX"(): float
get "translationY"(): float
get "translationZ"(): float
get "verticalFadingEdgeLength"(): integer
get "verticalScrollbarThumbDrawable"(): $Drawable
get "verticalScrollbarTrackDrawable"(): $Drawable
get "verticalScrollbarWidth"(): integer
get "viewRoot"(): $ViewRoot
get "viewTreeObserver"(): $ViewTreeObserver
get "visibility"(): integer
get "width"(): integer
get "windowVisibility"(): integer
get "x"(): float
get "y"(): float
get "z"(): float
get "activated"(): boolean
get "attachedToWindow"(): boolean
get "clickable"(): boolean
get "contextClickable"(): boolean
get "duplicateParentStateEnabled"(): boolean
get "enabled"(): boolean
get "focusable"(): boolean
get "focusableInTouchMode"(): boolean
get "focused"(): boolean
get "focusedByDefault"(): boolean
get "foregroundInsidePadding"(): boolean
get "hapticFeedbackEnabled"(): boolean
get "horizontalFadingEdgeEnabled"(): boolean
get "horizontalScrollBarEnabled"(): boolean
get "hovered"(): boolean
get "inLayout"(): boolean
get "inScrollingContainer"(): boolean
get "inTouchMode"(): boolean
get "keyboardNavigationCluster"(): boolean
get "laidOut"(): boolean
get "layoutDirectionInherited"(): boolean
get "layoutDirectionResolved"(): boolean
get "layoutRequested"(): boolean
get "layoutRtl"(): boolean
get "longClickable"(): boolean
get "nestedScrollingEnabled"(): boolean
get "paddingRelative"(): boolean
get "pivotSet"(): boolean
get "pressed"(): boolean
get "rootNamespace"(): boolean
get "scrollbarFadingEnabled"(): boolean
get "selected"(): boolean
get "showingLayoutBounds"(): boolean
get "shown"(): boolean
get "soundEffectsEnabled"(): boolean
get "temporarilyDetached"(): boolean
get "textAlignmentInherited"(): boolean
get "textAlignmentResolved"(): boolean
get "textDirectionInherited"(): boolean
get "textDirectionResolved"(): boolean
get "verticalFadingEdgeEnabled"(): boolean
get "verticalScrollBarEnabled"(): boolean
set "activated"(value: boolean)
set "alpha"(value: float)
set "animationMatrix"(value: $Matrix$$Type)
set "background"(value: $Drawable$$Type)
set "bottom"(value: integer)
set "clickable"(value: boolean)
set "clipBounds"(value: $Rect$$Type)
set "contentDescription"(value: charseq)
set "contextClickable"(value: boolean)
set "duplicateParentStateEnabled"(value: boolean)
set "elevation"(value: float)
set "enabled"(value: boolean)
set "focusable"(value: integer)
set "focusable"(value: boolean)
set "focusableInTouchMode"(value: boolean)
set "focusedByDefault"(value: boolean)
set "foreground"(value: $Drawable$$Type)
set "foregroundGravity"(value: integer)
set "hapticFeedbackEnabled"(value: boolean)
set "horizontalFadingEdgeEnabled"(value: boolean)
set "horizontalScrollBarEnabled"(value: boolean)
set "horizontalScrollbarThumbDrawable"(value: $Drawable$$Type)
set "horizontalScrollbarTrackDrawable"(value: $Drawable$$Type)
set "hovered"(value: boolean)
set "id"(value: integer)
set "keyboardNavigationCluster"(value: boolean)
set "layoutDirection"(value: integer)
set "layoutParams"(value: $ViewGroup$LayoutParams$$Type)
set "left"(value: integer)
set "longClickable"(value: boolean)
set "minimumHeight"(value: integer)
set "minimumWidth"(value: integer)
set "nestedScrollingEnabled"(value: boolean)
set "nextClusterForwardId"(value: integer)
set "nextFocusDownId"(value: integer)
set "nextFocusForwardId"(value: integer)
set "nextFocusLeftId"(value: integer)
set "nextFocusRightId"(value: integer)
set "nextFocusUpId"(value: integer)
set "onClickListener"(value: $View$OnClickListener$$Type)
set "onContextClickListener"(value: $View$OnContextClickListener$$Type)
set "onCreateContextMenuListener"(value: $View$OnCreateContextMenuListener$$Type)
set "onDragListener"(value: $View$OnDragListener$$Type)
set "onFocusChangeListener"(value: $View$OnFocusChangeListener$$Type)
set "onGenericMotionListener"(value: $View$OnGenericMotionListener$$Type)
set "onHoverListener"(value: $View$OnHoverListener$$Type)
set "onKeyListener"(value: $View$OnKeyListener$$Type)
set "onLongClickListener"(value: $View$OnLongClickListener$$Type)
set "onScrollChangeListener"(value: $View$OnScrollChangeListener$$Type)
set "onTouchListener"(value: $View$OnTouchListener$$Type)
set "outlineProvider"(value: $ViewOutlineProvider$$Type)
set "overScrollMode"(value: integer)
set "pivotX"(value: float)
set "pivotY"(value: float)
set "pressed"(value: boolean)
set "revealOnFocusHint"(value: boolean)
set "right"(value: integer)
set "rotation"(value: float)
set "rotationX"(value: float)
set "rotationY"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scrollBarDefaultDelayBeforeFade"(value: integer)
set "scrollBarFadeDuration"(value: integer)
set "scrollBarSize"(value: integer)
set "scrollBarStyle"(value: integer)
set "scrollIndicators"(value: integer)
set "scrollX"(value: integer)
set "scrollY"(value: integer)
set "scrollbarFadingEnabled"(value: boolean)
set "selected"(value: boolean)
set "soundEffectsEnabled"(value: boolean)
set "stateDescription"(value: charseq)
set "stateListAnimator"(value: $StateListAnimator$$Type)
set "tag"(value: any)
set "textAlignment"(value: integer)
set "textDirection"(value: integer)
set "tooltipText"(value: charseq)
set "top"(value: integer)
set "transitionAlpha"(value: float)
set "transitionName"(value: string)
set "transitionVisibility"(value: integer)
set "translationX"(value: float)
set "translationY"(value: float)
set "translationZ"(value: float)
set "verticalFadingEdgeEnabled"(value: boolean)
set "verticalScrollBarEnabled"(value: boolean)
set "verticalScrollbarThumbDrawable"(value: $Drawable$$Type)
set "verticalScrollbarTrackDrawable"(value: $Drawable$$Type)
set "visibility"(value: integer)
set "x"(value: float)
set "y"(value: float)
set "z"(value: float)
}
}

declare module "icyllis.modernui.view.ContextMenu" {
import { $Drawable$$Type } from "icyllis.modernui.graphics.drawable.Drawable"
import { $MenuItem } from "icyllis.modernui.view.MenuItem"
import { $SubMenu } from "icyllis.modernui.view.SubMenu"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $KeyEvent$$Type } from "icyllis.modernui.view.KeyEvent"
import { $Menu } from "icyllis.modernui.view.Menu"

export interface $ContextMenu extends $Menu {
"add"(charSequence0: charseq): $MenuItem
"add"(int0: integer, int1: integer, int2: integer, charSequence3: charseq): $MenuItem
"addSubMenu"(int0: integer, int1: integer, int2: integer, charSequence3: charseq): $SubMenu
"addSubMenu"(charSequence0: charseq): $SubMenu
"clear"(): void
"clearHeader"(): void
"close"(): void
"findItem"(int0: integer): $MenuItem
"getItem"(int0: integer): $MenuItem
"hasVisibleItems"(): boolean
"isShortcutKey"(int0: integer, keyEvent1: $KeyEvent$$Type): boolean
"performIdentifierAction"(int0: integer, int1: integer): boolean
"performShortcut"(int0: integer, keyEvent1: $KeyEvent$$Type, int2: integer): boolean
"removeGroup"(int0: integer): void
"removeItem"(int0: integer): void
"setGroupCheckable"(int0: integer, boolean1: boolean, boolean2: boolean): void
"setGroupDividerEnabled"(boolean0: boolean): void
"setGroupEnabled"(int0: integer, boolean1: boolean): void
"setGroupVisible"(int0: integer, boolean1: boolean): void
"setHeaderIcon"(drawable0: $Drawable$$Type): $ContextMenu
"setHeaderTitle"(charSequence0: charseq): $ContextMenu
"setHeaderView"(view0: $View$$Type): $ContextMenu
"setOptionalIconsVisible"(boolean0: boolean): void
"setQwertyMode"(boolean0: boolean): void
"size"(): integer
set "groupDividerEnabled"(value: boolean)
set "headerIcon"(value: $Drawable$$Type)
set "headerTitle"(value: charseq)
set "headerView"(value: $View$$Type)
set "optionalIconsVisible"(value: boolean)
set "qwertyMode"(value: boolean)
}

export namespace $ContextMenu {
const probejs$$marker: never
}
export abstract class $ContextMenu$$Static implements $ContextMenu {
}
}

declare module "icyllis.modernui.resources.Resources" {
import { $Marker } from "org.slf4j.Marker"
import { $TypedValue$$Type } from "icyllis.modernui.resources.TypedValue"
import { $ColorStateList } from "icyllis.modernui.util.ColorStateList"
import { $Resources$Theme, $Resources$Theme$$Type } from "icyllis.modernui.resources.Resources$Theme"
import { $DisplayMetrics, $DisplayMetrics$$Type } from "icyllis.modernui.util.DisplayMetrics"
import { $ResourceId, $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"

export class $Resources {
static readonly "DEFAULT_NAMESPACE": string
static readonly "MARKER": $Marker

constructor()

public "getColorStateList"(id: $ResourceId$$Type, theme: $Resources$Theme$$Type): $ColorStateList
public "getDisplayMetrics"(): $DisplayMetrics
public "getValue"(id: $ResourceId$$Type, outValue: $TypedValue$$Type, resolveRefs: boolean): void
public "loadColorStateList"(value: $TypedValue$$Type, theme: $Resources$Theme$$Type): $ColorStateList
public "newTheme"(): $Resources$Theme
public static "selectDefaultTheme"(curTheme: $ResourceId$$Type): $ResourceId
public "updateMetrics"(metrics: $DisplayMetrics$$Type): void
get "displayMetrics"(): $DisplayMetrics
}
}

declare module "icyllis.modernui.view.Menu" {
import { $MenuItem } from "icyllis.modernui.view.MenuItem"
import { $SubMenu } from "icyllis.modernui.view.SubMenu"
import { $KeyEvent$$Type } from "icyllis.modernui.view.KeyEvent"

export interface $Menu {
"add"(charSequence0: charseq): $MenuItem
"add"(int0: integer, int1: integer, int2: integer, charSequence3: charseq): $MenuItem
"addSubMenu"(int0: integer, int1: integer, int2: integer, charSequence3: charseq): $SubMenu
"addSubMenu"(charSequence0: charseq): $SubMenu
"clear"(): void
"close"(): void
"findItem"(int0: integer): $MenuItem
"getItem"(int0: integer): $MenuItem
"hasVisibleItems"(): boolean
"isShortcutKey"(int0: integer, keyEvent1: $KeyEvent$$Type): boolean
"performIdentifierAction"(int0: integer, int1: integer): boolean
"performShortcut"(int0: integer, keyEvent1: $KeyEvent$$Type, int2: integer): boolean
"removeGroup"(int0: integer): void
"removeItem"(int0: integer): void
"setGroupCheckable"(int0: integer, boolean1: boolean, boolean2: boolean): void
"setGroupDividerEnabled"(boolean0: boolean): void
"setGroupEnabled"(int0: integer, boolean1: boolean): void
"setGroupVisible"(int0: integer, boolean1: boolean): void
"setOptionalIconsVisible"(boolean0: boolean): void
"setQwertyMode"(boolean0: boolean): void
"size"(): integer
set "groupDividerEnabled"(value: boolean)
set "optionalIconsVisible"(value: boolean)
set "qwertyMode"(value: boolean)
}

export namespace $Menu {
const CATEGORY_ALTERNATIVE: integer
const CATEGORY_CONTAINER: integer
const CATEGORY_MASK: integer
const CATEGORY_SECONDARY: integer
const CATEGORY_SHIFT: integer
const CATEGORY_SYSTEM: integer
const FIRST: integer
const FLAG_ALWAYS_PERFORM_CLOSE: integer
const FLAG_PERFORM_NO_CLOSE: integer
const NONE: integer
const SUPPORTED_MODIFIERS_MASK: integer
const USER_MASK: integer
const USER_SHIFT: integer
}
export abstract class $Menu$$Static implements $Menu {
static readonly "CATEGORY_ALTERNATIVE": integer
static readonly "CATEGORY_CONTAINER": integer
static readonly "CATEGORY_MASK": integer
static readonly "CATEGORY_SECONDARY": integer
static readonly "CATEGORY_SHIFT": integer
static readonly "CATEGORY_SYSTEM": integer
static readonly "FIRST": integer
static readonly "FLAG_ALWAYS_PERFORM_CLOSE": integer
static readonly "FLAG_PERFORM_NO_CLOSE": integer
static readonly "NONE": integer
static readonly "SUPPORTED_MODIFIERS_MASK": integer
static readonly "USER_MASK": integer
static readonly "USER_SHIFT": integer

}
}

declare module "icyllis.modernui.util.DataSet" {
import { $Map$Entry, $Map$Entry$$Type } from "java.util.Map$Entry"
import { $BiFunction$$Type } from "java.util.function.BiFunction"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $Parcel$$Type } from "icyllis.modernui.util.Parcel"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Function$$Type } from "java.util.function.Function"
import { $List, $List$$Type } from "java.util.List"
import { $Parcelable } from "icyllis.modernui.util.Parcelable"
import { $Parcelable$ClassLoaderCreator } from "icyllis.modernui.util.Parcelable$ClassLoaderCreator"
import { $Map, $Map$$Type } from "java.util.Map"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Class$$Type } from "java.lang.Class"

export class $DataSet implements $Map<string, any>, $Parcelable {
static readonly "CREATOR": $Parcelable$ClassLoaderCreator<$DataSet>

constructor()

public "clear"(): void
public "compute"(string0: string, biFunction1: $BiFunction$$Type<string, any, any>): any
public "computeIfAbsent"(string0: string, function1: $Function$$Type<string, any>): any
public "computeIfPresent"(string0: string, biFunction1: $BiFunction$$Type<string, any, any>): any
public "containsKey"(key: any): boolean
public "containsValue"(value: any): boolean
public static "copyOf"<K, V>(map0: $Map$$Type<K, V>): $Map<K, V>
public static "entry"<K, V>(k0: K, v1: V): $Map$Entry<K, V>
public "entrySet"(): $Set<$Map$Entry<string, any>>
public "forEach"(biConsumer0: $BiConsumer$$Type<string, any>): void
public "get"(key: any): any
public "getBoolean"(key: string): boolean
public "getBoolean"(key: string, defaultValue: boolean): boolean
public "getByte"(key: string, defaultValue: byte): byte
public "getByte"(key: string): byte
public "getByteArray"(key: string): byte[]
public "getChar"(key: string, defaultValue: character): character
public "getChar"(key: string): character
public "getDataSet"(key: string): $DataSet
public "getDouble"(key: string): double
public "getDouble"(key: string, defaultValue: double): double
public "getDoubleArray"(key: string): double[]
public "getFloat"(key: string, defaultValue: float): float
public "getFloat"(key: string): float
public "getFloatArray"(key: string): float[]
public "getInt"(key: string, defaultValue: integer): integer
public "getInt"(key: string): integer
public "getIntArray"(key: string): integer[]
public "getList"<T>(key: string): $List<T>
public "getLong"(key: string): long
public "getLong"(key: string, defaultValue: long): long
public "getLongArray"(key: string): long[]
public "getOrDefault"(key: any, defaultValue: any): any
public "getShort"(key: string): short
public "getShort"(key: string, defaultValue: short): short
public "getShortArray"(key: string): short[]
public "getString"(key: string, defaultValue: string): string
public "getString"(key: string): string
public "getUUID"(key: string, defaultValue: $UUID$$Type): $UUID
public "getUUID"(key: string): $UUID
public "getValue"<T>(key: string, clazz: $Class$$Type<T>): T
public "getValue"<T>(key: string): T
public "isEmpty"(): boolean
public "keySet"(): $Set<string>
public "merge"(string0: string, object1: any, biFunction2: $BiFunction$$Type<any, any, any>): any
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V): $Map<K, V>
public static "of"<K, V>(): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V, k18: K, v19: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V, k16: K, v17: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V, k14: K, v15: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V, k10: K, v11: V, k12: K, v13: V): $Map<K, V>
public static "of"<K, V>(k0: K, v1: V, k2: K, v3: V, k4: K, v5: V, k6: K, v7: V, k8: K, v9: V): $Map<K, V>
public static "ofEntries"<K, V>(...entry0s: $Map$Entry$$Type<K, V>[]): $Map<K, V>
public "put"(key: string, value: any): any
public "putAll"(map: $Map$$Type<string, any>): void
public "putBoolean"(key: string, value: boolean): void
public "putByte"(key: string, value: byte): void
public "putByteArray"(key: string, value: byte[]): void
public "putDataSet"(key: string, value: $DataSet$$Type): void
public "putDouble"(key: string, value: double): void
public "putDoubleArray"(key: string, value: double[]): void
public "putFloat"(key: string, value: float): void
public "putFloatArray"(key: string, value: float[]): void
public "putIfAbsent"(key: string, value: any): any
public "putInt"(key: string, value: integer): void
public "putIntArray"(key: string, value: integer[]): void
public "putList"(key: string, value: $List$$Type<any>): void
public "putLong"(key: string, value: long): void
public "putLongArray"(key: string, value: long[]): void
public "putShort"(key: string, value: short): void
public "putShortArray"(key: string, value: short[]): void
public "putString"(key: string, value: string): void
public "putUUID"(key: string, value: $UUID$$Type): void
public "remove"(key: any): any
public "remove"(object0: any, object1: any): boolean
public "removeFirst"(): any
public "removeLast"(): any
public "replace"(string0: string, object1: any, object2: any): boolean
public "replace"(string0: string, object1: any): any
public "replaceAll"(biFunction0: $BiFunction$$Type<string, any, any>): void
public "size"(): integer
public "values"(): $Collection<any>
public "writeToParcel"(dest: $Parcel$$Type, flags: integer): void
[index: string | number]: any
get "empty"(): boolean
}
}

declare module "icyllis.modernui.graphics.drawable.Drawable$Callback" {
import { $Drawable$$Type } from "icyllis.modernui.graphics.drawable.Drawable"
import { $Runnable$$Type } from "java.lang.Runnable"

export interface $Drawable$Callback {
"invalidateDrawable"(drawable0: $Drawable$$Type): void
"scheduleDrawable"(drawable0: $Drawable$$Type, runnable1: $Runnable$$Type, long2: long): void
"unscheduleDrawable"(drawable0: $Drawable$$Type, runnable1: $Runnable$$Type): void
}

export namespace $Drawable$Callback {
const probejs$$marker: never
}
export abstract class $Drawable$Callback$$Static implements $Drawable$Callback {
}
}

declare module "icyllis.modernui.graphics.Bitmap" {
import { $OutputStream$$Type } from "java.io.OutputStream"
import { $ImageInfo } from "icyllis.arc3d.core.ImageInfo"
import { $Pixmap } from "icyllis.arc3d.core.Pixmap"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $ColorSpace, $ColorSpace$$Type } from "icyllis.arc3d.core.ColorSpace"
import { $Bitmap$Format, $Bitmap$Format$$Type } from "icyllis.modernui.graphics.Bitmap$Format"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $File$$Type } from "java.io.File"
import { $LongConsumer$$Type } from "java.util.function.LongConsumer"
import { $Bitmap$SaveFormat$$Type } from "icyllis.modernui.graphics.Bitmap$SaveFormat"
import { $Marker } from "org.slf4j.Marker"
import { $Buffer$$Type } from "java.nio.Buffer"
import { $WritableByteChannel$$Type } from "java.nio.channels.WritableByteChannel"
import { $DateFormat } from "com.ibm.icu.text.DateFormat"
import { $PixelRef } from "icyllis.arc3d.core.PixelRef"
import { $Path$$Type } from "java.nio.file.Path"

export class $Bitmap implements $AutoCloseable {
static readonly "DATE_FORMAT": $DateFormat
static readonly "MARKER": $Marker

public "clear"(color: float[], area: $Rect$$Type): boolean
public "clone"(): $Bitmap
public "close"(): void
public "copyPixelsFromBuffer"(src: $Buffer$$Type, rowBytes: integer, dstX: integer, dstY: integer, width: integer, height: integer): boolean
public "copyPixelsToBuffer"(dst: $Buffer$$Type, rowBytes: integer, srcX: integer, srcY: integer, width: integer, height: integer): boolean
public static "createBitmap"(width: integer, height: integer, format: $Bitmap$Format$$Type): $Bitmap
public static "createBitmap"(width: integer, height: integer, format: $Bitmap$Format$$Type, isPremultiplied: boolean, colorSpace: $ColorSpace$$Type): $Bitmap
public "getAddress"(): long
public "getAlphaType"(): integer
public "getChannels"(): integer
public "getColor4f"(x: integer, y: integer, dst: float[]): float[]
public "getColorSpace"(): $ColorSpace
public "getColorType"(): integer
public "getFormat"(): $Bitmap$Format
public "getHeight"(): integer
public "getInfo"(): $ImageInfo
public "getPixelARGB"(x: integer, y: integer): integer
public "getPixels"(dst: $Bitmap$$Type, dstX: integer, dstY: integer, srcX: integer, srcY: integer, width: integer, height: integer): void
public "getPixels"(dst: integer[], offset: integer, stride: integer, srcX: integer, srcY: integer, width: integer, height: integer): void
public "getPixels"(dst: float[], offset: integer, stride: integer, srcX: integer, srcY: integer, width: integer, height: integer): void
public "getPixels"(): $PixelRef
public "getPixmap"(): $Pixmap
public "getRowBytes"(): integer
public "getRowStride"(): integer
public "getSize"(): long
public "getWidth"(): integer
public "hasAlpha"(): boolean
public "isClosed"(): boolean
public "isImmutable"(): boolean
public "isPremultiplied"(): boolean
public "isRecycled"(): boolean
public static "openDialogGet"(format: $Bitmap$SaveFormat$$Type, title: charseq, defaultPathAndFile: charseq): string
public static "openDialogGets"(format: $Bitmap$SaveFormat$$Type, title: charseq, defaultPathAndFile: charseq): string[]
public "recycle"(): void
public "refPixels"(): $PixelRef
public "saveDialog"(format: $Bitmap$SaveFormat$$Type, quality: integer, name: string): boolean
public static "saveDialogGet"(format: $Bitmap$SaveFormat$$Type, title: charseq, name: string): string
public "saveToChannel"(format: $Bitmap$SaveFormat$$Type, quality: integer, channel: $WritableByteChannel$$Type): void
public "saveToFile"(format: $Bitmap$SaveFormat$$Type, quality: integer, file: $File$$Type): void
public "saveToPath"(format: $Bitmap$SaveFormat$$Type, quality: integer, path: $Path$$Type): void
public "saveToStream"(format: $Bitmap$SaveFormat$$Type, quality: integer, stream: $OutputStream$$Type): void
public "setColor4f"(x: integer, y: integer, src: float[]): void
public "setColorSpace"(newColorSpace: $ColorSpace$$Type): void
public "setFormat"(format: $Bitmap$Format$$Type): void
public "setImmutable"(): void
public "setPixels"(src: integer[], offset: integer, stride: integer, dstX: integer, dstY: integer, width: integer, height: integer): void
public "setPixels"(src: $Bitmap$$Type, srcX: integer, srcY: integer, dstX: integer, dstY: integer, width: integer, height: integer): void
public "setPixels"(src: float[], offset: integer, stride: integer, dstX: integer, dstY: integer, width: integer, height: integer): void
public "setPremultiplied"(premultiplied: boolean): void
public static "wrap"(address: long, rowBytes: integer, freeFn: $LongConsumer$$Type, width: integer, height: integer, format: $Bitmap$Format$$Type, isPremultiplied: boolean, colorSpace: $ColorSpace$$Type): $Bitmap
get "address"(): long
get "alphaType"(): integer
get "channels"(): integer
get "colorSpace"(): $ColorSpace
get "colorType"(): integer
get "format"(): $Bitmap$Format
get "height"(): integer
get "info"(): $ImageInfo
get "pixels"(): $PixelRef
get "pixmap"(): $Pixmap
get "rowBytes"(): integer
get "rowStride"(): integer
get "size"(): long
get "width"(): integer
get "closed"(): boolean
get "immutable"(): boolean
get "premultiplied"(): boolean
get "recycled"(): boolean
set "colorSpace"(value: $ColorSpace$$Type)
set "format"(value: $Bitmap$Format$$Type)
set "premultiplied"(value: boolean)
}
}

declare module "icyllis.modernui.view.View$OnLayoutChangeListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnLayoutChangeListener {
"onLayoutChange"(view0: $View$$Type, int1: integer, int2: integer, int3: integer, int4: integer, int5: integer, int6: integer, int7: integer, int8: integer): void
}

export namespace $View$OnLayoutChangeListener {
const probejs$$marker: never
}
export abstract class $View$OnLayoutChangeListener$$Static implements $View$OnLayoutChangeListener {
}
}

declare module "icyllis.modernui.view.ViewGroup" {
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $ActionMode$Callback$$Type } from "icyllis.modernui.view.ActionMode$Callback"
import { $ViewManager } from "icyllis.modernui.view.ViewManager"
import { $AttributeSet$$Type } from "icyllis.modernui.util.AttributeSet"
import { $ActionMode } from "icyllis.modernui.view.ActionMode"
import { $ViewGroup$LayoutParams$$Type } from "icyllis.modernui.view.ViewGroup$LayoutParams"
import { $ViewParent } from "icyllis.modernui.view.ViewParent"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $MotionEvent$$Type } from "icyllis.modernui.view.MotionEvent"
import { $ContextMenu$$Type } from "icyllis.modernui.view.ContextMenu"
import { $LayoutTransition, $LayoutTransition$$Type } from "icyllis.modernui.animation.LayoutTransition"
import { $Context$$Type } from "icyllis.modernui.core.Context"
import { $Point$$Type } from "icyllis.modernui.graphics.Point"
import { $ResourceId$$Type } from "icyllis.modernui.resources.ResourceId"

export class $ViewGroup extends $View implements $ViewParent, $ViewManager {
static readonly "FOCUS_AFTER_DESCENDANTS": integer
static readonly "FOCUS_BEFORE_DESCENDANTS": integer
static readonly "FOCUS_BLOCK_DESCENDANTS": integer

constructor(context: $Context$$Type, attrs: $AttributeSet$$Type, defStyleAttr: $ResourceId$$Type, defStyleRes: $ResourceId$$Type)
constructor(context: $Context$$Type, attrs: $AttributeSet$$Type, defStyleAttr: $ResourceId$$Type)
constructor(context: $Context$$Type, attrs: $AttributeSet$$Type)
constructor(context: $Context$$Type)

public "addStatesFromChildren"(): boolean
public "addTransientView"(view: $View$$Type, index: integer): void
public "addView"(child: $View$$Type): void
public "addView"(child: $View$$Type, index: integer): void
public "addView"(child: $View$$Type, width: integer, height: integer): void
public "addView"(child: $View$$Type, params: $ViewGroup$LayoutParams$$Type): void
public "addView"(child: $View$$Type, index: integer, params: $ViewGroup$LayoutParams$$Type): void
public "bringChildToFront"(child: $View$$Type): void
public "canResolveLayoutDirection"(): boolean
public "canResolveTextAlignment"(): boolean
public "canResolveTextDirection"(): boolean
public "childDrawableStateChanged"(child: $View$$Type): void
public "childHasTransientStateChanged"(child: $View$$Type, childHasTransientState: boolean): void
public "clearChildFocus"(child: $View$$Type): void
public "clearDisappearingChildren"(): void
public "createContextMenu"(contextMenu0: $ContextMenu$$Type): void
public "dispatchSetActivated"(activated: boolean): void
public "dispatchSetSelected"(selected: boolean): void
public "endViewTransition"(view: $View$$Type): void
public "focusSearch"(focused: $View$$Type, direction: integer): $View
public "focusableViewAvailable"(v: $View$$Type): void
public "getChildAt"(index: integer): $View
public "getChildCount"(): integer
public "getChildDrawingOrder"(drawingPosition: integer): integer
public static "getChildMeasureSpec"(spec: integer, padding: integer, childDimension: integer): integer
public "getChildVisibleRect"(child: $View$$Type, r: $Rect$$Type, offset: $Point$$Type): boolean
public "getChildVisibleRect"(child: $View$$Type, r: $Rect$$Type, offset: $Point$$Type, forceParentCheck: boolean): boolean
public "getClipChildren"(): boolean
public "getClipToPadding"(): boolean
public "getDescendantFocusability"(): integer
public "getFocusedChild"(): $View
public "getLayoutDirection"(): integer
public "getLayoutTransition"(): $LayoutTransition
public "getNestedScrollAxes"(): integer
public "getParent"(): $ViewParent
public "getTextAlignment"(): integer
public "getTextDirection"(): integer
public "getTouchscreenBlocksFocus"(): boolean
public "getTransientView"(position: integer): $View
public "getTransientViewCount"(): integer
public "getTransientViewIndex"(position: integer): integer
public "indexOfChild"(child: $View$$Type): integer
public "invalidateChild"(child: $View$$Type, dirty: $Rect$$Type): void
public "invalidateChildInParent"(location: integer[], dirty: $Rect$$Type): $ViewParent
public "isLayoutDirectionResolved"(): boolean
public "isLayoutRequested"(): boolean
public "isLayoutSuppressed"(): boolean
public "isTextAlignmentResolved"(): boolean
public "isTextDirectionResolved"(): boolean
public "isTransitionGroup"(): boolean
public "keyboardNavigationClusterSearch"(view0: $View$$Type, int1: integer): $View
public "offsetChildrenTopAndBottom"(offset: integer): void
public "offsetDescendantRectToMyCoords"(descendant: $View$$Type, rect: $Rect$$Type): void
public "offsetRectIntoDescendantCoords"(descendant: $View$$Type, rect: $Rect$$Type): void
public "onInterceptHoverEvent"(event: $MotionEvent$$Type): boolean
public "onInterceptTouchEvent"(ev: $MotionEvent$$Type): boolean
public "onNestedFling"(target: $View$$Type, velocityX: float, velocityY: float, consumed: boolean): boolean
public "onNestedPreFling"(target: $View$$Type, velocityX: float, velocityY: float): boolean
public "onNestedPreScroll"(target: $View$$Type, dx: integer, dy: integer, consumed: integer[], type: integer): void
public "onNestedScroll"(target: $View$$Type, dxConsumed: integer, dyConsumed: integer, dxUnconsumed: integer, dyUnconsumed: integer, type: integer, consumed: integer[]): void
public "onNestedScrollAccepted"(child: $View$$Type, target: $View$$Type, axes: integer, type: integer): void
public "onStartNestedScroll"(child: $View$$Type, target: $View$$Type, axes: integer, type: integer): boolean
public "onStopNestedScroll"(target: $View$$Type, type: integer): void
public "removeAllViews"(): void
public "removeAllViewsInLayout"(): void
public "removeTransientView"(view: $View$$Type): void
public "removeView"(view: $View$$Type): void
public "removeViewAt"(index: integer): void
public "removeViewInLayout"(view: $View$$Type): void
public "removeViews"(start: integer, count: integer): void
public "removeViewsInLayout"(start: integer, count: integer): void
public "requestChildFocus"(child: $View$$Type, focused: $View$$Type): void
public "requestChildRectangleOnScreen"(child: $View$$Type, rectangle: $Rect$$Type, immediate: boolean): boolean
public "requestDisallowInterceptTouchEvent"(disallowIntercept: boolean): void
public "requestLayout"(): void
public "requestTransitionStart"(transition: $LayoutTransition$$Type): void
public "setAddStatesFromChildren"(addsStates: boolean): void
public "setClipChildren"(clipChildren: boolean): void
public "setClipToPadding"(clipToPadding: boolean): void
public "setDescendantFocusability"(focusability: integer): void
public "setLayoutTransition"(transition: $LayoutTransition$$Type): void
public "setShadowAlpha"(ambientShadowAlpha: float, spotShadowAlpha: float): void
public "setTouchscreenBlocksFocus"(touchscreenBlocksFocus: boolean): void
public "setTransitionGroup"(isTransitionGroup: boolean): void
public "shouldDelayChildPressedState"(): boolean
public "showContextMenuForChild"(originalView: $View$$Type, x: float, y: float): boolean
public "startActionModeForChild"(originalView: $View$$Type, callback: $ActionMode$Callback$$Type, type: integer): $ActionMode
public "startViewTransition"(view: $View$$Type): void
public "suppressLayout"(suppress: boolean): void
public "updateViewLayout"(view: $View$$Type, params: $ViewGroup$LayoutParams$$Type): void
get "childCount"(): integer
get "clipChildren"(): boolean
get "clipToPadding"(): boolean
get "descendantFocusability"(): integer
get "focusedChild"(): $View
get "layoutDirection"(): integer
get "layoutTransition"(): $LayoutTransition
get "nestedScrollAxes"(): integer
get "parent"(): $ViewParent
get "textAlignment"(): integer
get "textDirection"(): integer
get "touchscreenBlocksFocus"(): boolean
get "transientViewCount"(): integer
get "layoutDirectionResolved"(): boolean
get "layoutRequested"(): boolean
get "layoutSuppressed"(): boolean
get "textAlignmentResolved"(): boolean
get "textDirectionResolved"(): boolean
get "transitionGroup"(): boolean
set "clipChildren"(value: boolean)
set "clipToPadding"(value: boolean)
set "descendantFocusability"(value: integer)
set "layoutTransition"(value: $LayoutTransition$$Type)
set "touchscreenBlocksFocus"(value: boolean)
set "transitionGroup"(value: boolean)
}
}

declare module "icyllis.modernui.view.ActionMode" {
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $Menu } from "icyllis.modernui.view.Menu"

export class $ActionMode {
static readonly "DEFAULT_HIDE_DURATION": integer
static readonly "TYPE_FLOATING": integer
static readonly "TYPE_PRIMARY": integer

constructor()

public "finish"(): void
public "getCustomView"(): $View
public "getMenu"(): $Menu
public "getSubtitle"(): charseq
public "getTag"(): any
public "getTitle"(): charseq
public "getTitleOptionalHint"(): boolean
public "getType"(): integer
public "hide"(duration: long): void
public "invalidate"(): void
public "invalidateContentRect"(): void
public "isTitleOptional"(): boolean
public "isUiFocusable"(): boolean
public "onWindowFocusChanged"(hasWindowFocus: boolean): void
public "setCustomView"(view0: $View$$Type): void
public "setSubtitle"(charSequence0: charseq): void
public "setTag"(tag: any): void
public "setTitle"(charSequence0: charseq): void
public "setTitleOptionalHint"(titleOptional: boolean): void
public "setType"(type: integer): void
get "customView"(): $View
get "menu"(): $Menu
get "subtitle"(): charseq
get "tag"(): any
get "title"(): charseq
get "titleOptionalHint"(): boolean
get "type"(): integer
get "titleOptional"(): boolean
get "uiFocusable"(): boolean
set "customView"(value: $View$$Type)
set "subtitle"(value: charseq)
set "tag"(value: any)
set "title"(value: charseq)
set "titleOptionalHint"(value: boolean)
set "type"(value: integer)
}
}

declare module "icyllis.modernui.view.ViewTreeObserver$OnScrollChangedListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ViewTreeObserver$OnScrollChangedListener {
"onScrollChanged"(): void
}

export namespace $ViewTreeObserver$OnScrollChangedListener {
const probejs$$marker: never
}
export abstract class $ViewTreeObserver$OnScrollChangedListener$$Static implements $ViewTreeObserver$OnScrollChangedListener {
}
}

declare module "icyllis.modernui.graphics.RectF" {
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $Matrix$$Type } from "icyllis.modernui.graphics.Matrix"

export class $RectF {
constructor(r: $Rect$$Type)
constructor(r: $RectF$$Type)
constructor(left: float, top: float, right: float, bottom: float)
constructor()

public "centerX"(): float
public "centerY"(): float
public "contains"(r: $RectF$$Type): boolean
public "contains"(left: float, top: float, right: float, bottom: float): boolean
public "contains"(x: float, y: float): boolean
public "copy"(): $RectF
public static "copy"(r: $RectF$$Type): $RectF
public "height"(): float
public "inset"(dx: float, dy: float): void
public "intersect"(left: float, top: float, right: float, bottom: float): boolean
public "intersect"(r: $RectF$$Type): boolean
public "intersects"(left: float, top: float, right: float, bottom: float): boolean
public static "intersects"(a: $RectF$$Type, b: $RectF$$Type): boolean
public "isEmpty"(): boolean
public "isFinite"(): boolean
public "isSorted"(): boolean
public "offset"(dx: float, dy: float): void
public "offsetTo"(newLeft: float, newTop: float): void
public "round"(dst: $Rect$$Type): void
public "roundOut"(dst: $Rect$$Type): void
public "set"(left: float, top: float, right: float, bottom: float): void
public "set"(src: $Rect$$Type): void
public "set"(src: $RectF$$Type): void
public "setEmpty"(): void
public "setIntersect"(a: $RectF$$Type, b: $RectF$$Type): boolean
public "sort"(): void
public "transform"(m: $Matrix$$Type): void
public "union"(left: float, top: float, right: float, bottom: float): void
public "union"(r: $RectF$$Type): void
public "union"(x: float, y: float): void
public "width"(): float
get "bottom"(): float
set "bottom"(value: float)
get "left"(): float
set "left"(value: float)
get "right"(): float
set "right"(value: float)
get "top"(): float
set "top"(value: float)
get "empty"(): boolean
get "finite"(): boolean
get "sorted"(): boolean
}
}

declare module "icyllis.modernui.view.KeyEvent" {
import { $InputEvent } from "icyllis.modernui.view.InputEvent"

export class $KeyEvent extends $InputEvent {
static readonly "ACTION_DOWN": integer
static readonly "ACTION_UP": integer
static readonly "FLAG_CANCELED": integer
static readonly "FLAG_CANCELED_LONG_PRESS": integer
static readonly "FLAG_EDITOR_ACTION": integer
static readonly "FLAG_FALLBACK": integer
static readonly "FLAG_FROM_SYSTEM": integer
static readonly "FLAG_KEEP_TOUCH_MODE": integer
static readonly "FLAG_LONG_PRESS": integer
static readonly "FLAG_PREDISPATCH": integer
static readonly "FLAG_SOFT_KEYBOARD": integer
static readonly "FLAG_START_TRACKING": integer
static readonly "FLAG_TRACKING": integer
static readonly "FLAG_VIRTUAL_HARD_KEY": integer
static readonly "KEY_0": integer
static readonly "KEY_1": integer
static readonly "KEY_2": integer
static readonly "KEY_3": integer
static readonly "KEY_4": integer
static readonly "KEY_5": integer
static readonly "KEY_6": integer
static readonly "KEY_7": integer
static readonly "KEY_8": integer
static readonly "KEY_9": integer
static readonly "KEY_A": integer
static readonly "KEY_APOSTROPHE": integer
static readonly "KEY_B": integer
static readonly "KEY_BACKSLASH": integer
static readonly "KEY_BACKSPACE": integer
static readonly "KEY_C": integer
static readonly "KEY_CAPS_LOCK": integer
static readonly "KEY_COMMA": integer
static readonly "KEY_D": integer
static readonly "KEY_DELETE": integer
static readonly "KEY_DOWN": integer
static readonly "KEY_E": integer
static readonly "KEY_END": integer
static readonly "KEY_ENTER": integer
static readonly "KEY_EQUAL": integer
static readonly "KEY_ESCAPE": integer
static readonly "KEY_F": integer
static readonly "KEY_F1": integer
static readonly "KEY_F10": integer
static readonly "KEY_F11": integer
static readonly "KEY_F12": integer
static readonly "KEY_F13": integer
static readonly "KEY_F14": integer
static readonly "KEY_F15": integer
static readonly "KEY_F16": integer
static readonly "KEY_F17": integer
static readonly "KEY_F18": integer
static readonly "KEY_F19": integer
static readonly "KEY_F2": integer
static readonly "KEY_F20": integer
static readonly "KEY_F21": integer
static readonly "KEY_F22": integer
static readonly "KEY_F23": integer
static readonly "KEY_F24": integer
static readonly "KEY_F25": integer
static readonly "KEY_F3": integer
static readonly "KEY_F4": integer
static readonly "KEY_F5": integer
static readonly "KEY_F6": integer
static readonly "KEY_F7": integer
static readonly "KEY_F8": integer
static readonly "KEY_F9": integer
static readonly "KEY_G": integer
static readonly "KEY_GRAVE_ACCENT": integer
static readonly "KEY_H": integer
static readonly "KEY_HOME": integer
static readonly "KEY_I": integer
static readonly "KEY_INSERT": integer
static readonly "KEY_J": integer
static readonly "KEY_K": integer
static readonly "KEY_KP_0": integer
static readonly "KEY_KP_1": integer
static readonly "KEY_KP_2": integer
static readonly "KEY_KP_3": integer
static readonly "KEY_KP_4": integer
static readonly "KEY_KP_5": integer
static readonly "KEY_KP_6": integer
static readonly "KEY_KP_7": integer
static readonly "KEY_KP_8": integer
static readonly "KEY_KP_9": integer
static readonly "KEY_KP_ADD": integer
static readonly "KEY_KP_DECIMAL": integer
static readonly "KEY_KP_DIVIDE": integer
static readonly "KEY_KP_ENTER": integer
static readonly "KEY_KP_EQUAL": integer
static readonly "KEY_KP_MULTIPLY": integer
static readonly "KEY_KP_SUBTRACT": integer
static readonly "KEY_L": integer
static readonly "KEY_LEFT": integer
static readonly "KEY_LEFT_ALT": integer
static readonly "KEY_LEFT_BRACKET": integer
static readonly "KEY_LEFT_CONTROL": integer
static readonly "KEY_LEFT_SHIFT": integer
static readonly "KEY_LEFT_SUPER": integer
static readonly "KEY_M": integer
static readonly "KEY_MENU": integer
static readonly "KEY_MINUS": integer
static readonly "KEY_N": integer
static readonly "KEY_NUM_LOCK": integer
static readonly "KEY_O": integer
static readonly "KEY_P": integer
static readonly "KEY_PAGE_DOWN": integer
static readonly "KEY_PAGE_UP": integer
static readonly "KEY_PAUSE": integer
static readonly "KEY_PERIOD": integer
static readonly "KEY_PRINT_SCREEN": integer
static readonly "KEY_Q": integer
static readonly "KEY_R": integer
static readonly "KEY_RIGHT": integer
static readonly "KEY_RIGHT_ALT": integer
static readonly "KEY_RIGHT_BRACKET": integer
static readonly "KEY_RIGHT_CONTROL": integer
static readonly "KEY_RIGHT_SHIFT": integer
static readonly "KEY_RIGHT_SUPER": integer
static readonly "KEY_S": integer
static readonly "KEY_SCROLL_LOCK": integer
static readonly "KEY_SEMICOLON": integer
static readonly "KEY_SLASH": integer
static readonly "KEY_SPACE": integer
static readonly "KEY_T": integer
static readonly "KEY_TAB": integer
static readonly "KEY_U": integer
static readonly "KEY_UNKNOWN": integer
static readonly "KEY_UP": integer
static readonly "KEY_V": integer
static readonly "KEY_W": integer
static readonly "KEY_WORLD_1": integer
static readonly "KEY_WORLD_2": integer
static readonly "KEY_X": integer
static readonly "KEY_Y": integer
static readonly "KEY_Z": integer
static readonly "META_ALT_ON": integer
static readonly "META_CTRL_ON": integer
static readonly "META_SHIFT_ON": integer
static readonly "META_SUPER_ON": integer

public "getAction"(): integer
public "getKeyCode"(): integer
public "getMappedChar"(): character
public "getModifiers"(): integer
public "getRepeatCount"(): integer
public "getScanCode"(): integer
public "hasModifiers"(modifiers: integer): boolean
public "hasNoModifiers"(): boolean
public "isAltPressed"(): boolean
public "isCanceled"(): boolean
public "isCapsLockOn"(): boolean
public "isCtrlPressed"(): boolean
public "isLongPress"(): boolean
public static "isModifierKey"(keyCode: integer): boolean
public "isNumLockOn"(): boolean
public "isShiftPressed"(): boolean
public "isSuperPressed"(): boolean
public "isTracking"(): boolean
public static "obtain"(eventTime: long, action: integer, code: integer, repeat: integer, modifiers: integer, scancode: integer, flags: integer): $KeyEvent
public "startTracking"(): void
get "action"(): integer
get "keyCode"(): integer
get "mappedChar"(): character
get "modifiers"(): integer
get "repeatCount"(): integer
get "scanCode"(): integer
get "altPressed"(): boolean
get "canceled"(): boolean
get "capsLockOn"(): boolean
get "ctrlPressed"(): boolean
get "longPress"(): boolean
get "numLockOn"(): boolean
get "shiftPressed"(): boolean
get "superPressed"(): boolean
get "tracking"(): boolean
}
}

declare module "icyllis.modernui.graphics.text.ShapedText" {
import { $FloatArrayList$$Type } from "it.unimi.dsi.fastutil.floats.FloatArrayList"
import { $ShapedText$RunConsumer$$Type } from "icyllis.modernui.graphics.text.ShapedText$RunConsumer"
import { $FontPaint$$Type } from "icyllis.modernui.graphics.text.FontPaint"
import { $FontMetricsInt$$Type } from "icyllis.modernui.graphics.text.FontMetricsInt"
import { $TextBlob } from "icyllis.arc3d.sketch.TextBlob"
import { $ByteArrayList$$Type } from "it.unimi.dsi.fastutil.bytes.ByteArrayList"
import { $Function$$Type } from "java.util.function.Function"
import { $Font, $Font$$Type } from "icyllis.modernui.graphics.text.Font"
import { $IntArrayList$$Type } from "it.unimi.dsi.fastutil.ints.IntArrayList"

export class $ShapedText {
static readonly "BIDI_DEFAULT_LTR": integer
static readonly "BIDI_DEFAULT_RTL": integer
static readonly "BIDI_LTR": integer
static readonly "BIDI_OVERRIDE_LTR": integer
static readonly "BIDI_OVERRIDE_RTL": integer
static readonly "BIDI_RTL": integer

constructor(text: character[], contextStart: integer, contextLimit: integer, start: integer, limit: integer, bidiFlags: integer, paint: $FontPaint$$Type)

public static "doLayoutRun"(text: character[], contextStart: integer, contextLimit: integer, start: integer, limit: integer, isRtl: boolean, paint: $FontPaint$$Type, layoutStart: integer, advances: float[], curAdvance: float, glyphs: $IntArrayList$$Type, positions: $FloatArrayList$$Type, fontIndices: $ByteArrayList$$Type, idGet: $Function$$Type<$Font$$Type, byte>, extent: $FontMetricsInt$$Type, consumer: $ShapedText$RunConsumer$$Type): float
public static "doLayoutRun"(text: character[], contextStart: integer, contextLimit: integer, start: integer, limit: integer, isRtl: boolean, paint: $FontPaint$$Type, extent: $FontMetricsInt$$Type, consumer: $ShapedText$RunConsumer$$Type): float
public "getAdvance"(i: integer): float
public "getAdvance"(): float
public "getAdvances"(): float[]
public "getAscent"(): integer
public "getCharCount"(): integer
public "getDescent"(): integer
public "getFont"(i: integer): $Font
public "getGlyph"(i: integer): integer
public "getGlyphCount"(): integer
public "getGlyphs"(): integer[]
public "getGlyphs"(glyphIndex: integer, glyphCount: integer, dstGlyphs: integer[], dstOffset: integer): void
public "getMemoryUsage"(): integer
public "getPositions"(): float[]
public "getPositions"(glyphIndex: integer, glyphCount: integer, dstPositions: float[], dstOffset: integer): void
public "getTextBlob"(): $TextBlob
public "getX"(i: integer): float
public "getY"(i: integer): float
get "advance"(): float
get "advances"(): float[]
get "ascent"(): integer
get "charCount"(): integer
get "descent"(): integer
get "glyphCount"(): integer
get "glyphs"(): integer[]
get "memoryUsage"(): integer
get "positions"(): float[]
get "textBlob"(): $TextBlob
}
}

declare module "icyllis.modernui.view.View$OnHoverListener" {
import { $View$$Type } from "icyllis.modernui.view.View"
import { $MotionEvent$$Type } from "icyllis.modernui.view.MotionEvent"

export interface $View$OnHoverListener {
"onHover"(view0: $View$$Type, motionEvent1: $MotionEvent$$Type): boolean
}

export namespace $View$OnHoverListener {
const probejs$$marker: never
}
export abstract class $View$OnHoverListener$$Static implements $View$OnHoverListener {
}
}

declare module "icyllis.modernui.core.Choreographer" {
import { $Choreographer$FrameCallback$$Type } from "icyllis.modernui.core.Choreographer$FrameCallback"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $Choreographer {
static readonly "CALLBACK_ANIMATION": integer
static readonly "CALLBACK_COMMIT": integer
static readonly "CALLBACK_INPUT": integer
static readonly "CALLBACK_TRAVERSAL": integer

public static "getFrameDelay"(): long
public "getFrameTime"(): long
public "getFrameTimeNanos"(): long
public static "getInstance"(): $Choreographer
public "getLastFrameTimeNanos"(): long
public "postCallback"(callbackType: integer, action: $Runnable$$Type, token: any): void
public "postCallbackDelayed"(callbackType: integer, action: $Runnable$$Type, token: any, delayMillis: long): void
public "postFrameCallback"(callback: $Choreographer$FrameCallback$$Type): void
public "postFrameCallbackDelayed"(callback: $Choreographer$FrameCallback$$Type, delayMillis: long): void
public "removeCallbacks"(callbackType: integer, action: $Runnable$$Type, token: any): void
public "removeFrameCallback"(callback: $Choreographer$FrameCallback$$Type): void
public static "setFrameDelay"(frameDelay: long): void
public static "subtractFrameDelay"(delayMillis: long): long
get "frameTime"(): long
get "frameTimeNanos"(): long
get "lastFrameTimeNanos"(): long
}
}

declare module "icyllis.modernui.fragment.FragmentResultOwner" {
import { $FragmentResultListener$$Type } from "icyllis.modernui.fragment.FragmentResultListener"
import { $DataSet$$Type } from "icyllis.modernui.util.DataSet"
import { $LifecycleOwner$$Type } from "icyllis.modernui.lifecycle.LifecycleOwner"

export interface $FragmentResultOwner {
"clearFragmentResult"(string0: string): void
"clearFragmentResultListener"(string0: string): void
"setFragmentResult"(string0: string, dataSet1: $DataSet$$Type): void
"setFragmentResultListener"(string0: string, lifecycleOwner1: $LifecycleOwner$$Type, fragmentResultListener2: $FragmentResultListener$$Type): void
}

export namespace $FragmentResultOwner {
const probejs$$marker: never
}
export abstract class $FragmentResultOwner$$Static implements $FragmentResultOwner {
}
}

declare module "icyllis.modernui.graphics.CustomDrawable$DrawHandler" {
import { $ImmediateContext$$Type } from "icyllis.arc3d.engine.ImmediateContext"
import { $AutoCloseable } from "java.lang.AutoCloseable"
import { $DrawableInfo$$Type } from "icyllis.arc3d.engine.DrawableInfo"

export interface $CustomDrawable$DrawHandler extends $AutoCloseable {
"close"(): void
"draw"(immediateContext0: $ImmediateContext$$Type, drawableInfo1: $DrawableInfo$$Type): void
}

export namespace $CustomDrawable$DrawHandler {
const probejs$$marker: never
}
export abstract class $CustomDrawable$DrawHandler$$Static implements $CustomDrawable$DrawHandler {
}
}

declare module "icyllis.modernui.graphics.Paint$Align" {
import { $Enum } from "java.lang.Enum"

export class $Paint$Align extends $Enum<$Paint$Align> {
static readonly "CENTER": $Paint$Align
static readonly "INSIDE": $Paint$Align
static readonly "OUTSIDE": $Paint$Align

public static "valueOf"(name: string): $Paint$Align
public static "values"(): $Paint$Align[]
}
}

declare module "icyllis.modernui.core.Looper$Observer" {
import { $Message$$Type } from "icyllis.modernui.core.Message"
import { $Exception$$Type } from "java.lang.Exception"

export interface $Looper$Observer {
"dispatchingThrewException"(object0: any, message1: $Message$$Type, exception2: $Exception$$Type): void
"messageDispatchStarting"(): any
"messageDispatched"(object0: any, message1: $Message$$Type): void
}

export namespace $Looper$Observer {
const probejs$$marker: never
}
export abstract class $Looper$Observer$$Static implements $Looper$Observer {
}
}

declare module "icyllis.modernui.util.Property" {
import { $Class, $Class$$Type } from "java.lang.Class"

export class $Property<T = any, V = any> {
constructor(type: $Class$$Type<V>, name: string)

public "get"(t0: T): V
public "getName"(): string
public "getType"(): $Class<V>
public "set"(t0: T, v1: V): void
get "name"(): string
get "type"(): $Class<V>
}
}

declare module "icyllis.modernui.view.MenuItem" {
import { $MenuItem$OnMenuItemClickListener$$Type } from "icyllis.modernui.view.MenuItem$OnMenuItemClickListener"
import { $Drawable, $Drawable$$Type } from "icyllis.modernui.graphics.drawable.Drawable"
import { $ContextMenu$ContextMenuInfo } from "icyllis.modernui.view.ContextMenu$ContextMenuInfo"
import { $SubMenu } from "icyllis.modernui.view.SubMenu"
import { $MenuItem$OnActionExpandListener$$Type } from "icyllis.modernui.view.MenuItem$OnActionExpandListener"
import { $ColorStateList, $ColorStateList$$Type } from "icyllis.modernui.util.ColorStateList"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $ActionProvider, $ActionProvider$$Type } from "icyllis.modernui.view.ActionProvider"

export interface $MenuItem {
"collapseActionView"(): boolean
"expandActionView"(): boolean
"getActionProvider"(): $ActionProvider
"getActionView"(): $View
"getAlphabeticModifiers"(): integer
"getAlphabeticShortcut"(): character
"getContentDescription"(): charseq
"getGroupId"(): integer
"getIcon"(): $Drawable
"getIconTintList"(): $ColorStateList
"getItemId"(): integer
"getMenuInfo"(): $ContextMenu$ContextMenuInfo
"getNumericModifiers"(): integer
"getNumericShortcut"(): character
"getOrder"(): integer
"getSubMenu"(): $SubMenu
"getTitle"(): charseq
"getTitleCondensed"(): charseq
"getTooltipText"(): charseq
"hasSubMenu"(): boolean
"isActionViewExpanded"(): boolean
"isCheckable"(): boolean
"isChecked"(): boolean
"isEnabled"(): boolean
"isVisible"(): boolean
"requiresActionButton"(): boolean
"requiresOverflow"(): boolean
"setActionProvider"(actionProvider0: $ActionProvider$$Type): $MenuItem
"setActionView"(view0: $View$$Type): $MenuItem
"setAlphabeticShortcut"(alphaChar: character, alphaModifiers: integer): $MenuItem
"setAlphabeticShortcut"(char0: character): $MenuItem
"setCheckable"(boolean0: boolean): $MenuItem
"setChecked"(boolean0: boolean): $MenuItem
"setContentDescription"(contentDescription: charseq): $MenuItem
"setEnabled"(boolean0: boolean): $MenuItem
"setIcon"(drawable0: $Drawable$$Type): $MenuItem
"setIconTintList"(tint: $ColorStateList$$Type): $MenuItem
"setNumericShortcut"(numericChar: character, numericModifiers: integer): $MenuItem
"setNumericShortcut"(char0: character): $MenuItem
"setOnActionExpandListener"(onActionExpandListener0: $MenuItem$OnActionExpandListener$$Type): $MenuItem
"setOnMenuItemClickListener"(onMenuItemClickListener0: $MenuItem$OnMenuItemClickListener$$Type): $MenuItem
"setShortcut"(char0: character, char1: character): $MenuItem
"setShortcut"(numericChar: character, alphaChar: character, numericModifiers: integer, alphaModifiers: integer): $MenuItem
"setShowAsAction"(int0: integer): void
"setShowAsActionFlags"(int0: integer): $MenuItem
"setTitle"(charSequence0: charseq): $MenuItem
"setTitleCondensed"(charSequence0: charseq): $MenuItem
"setTooltipText"(tooltipText: charseq): $MenuItem
"setVisible"(boolean0: boolean): $MenuItem
get "actionProvider"(): $ActionProvider
get "actionView"(): $View
get "alphabeticModifiers"(): integer
get "alphabeticShortcut"(): character
get "contentDescription"(): charseq
get "groupId"(): integer
get "icon"(): $Drawable
get "iconTintList"(): $ColorStateList
get "itemId"(): integer
get "menuInfo"(): $ContextMenu$ContextMenuInfo
get "numericModifiers"(): integer
get "numericShortcut"(): character
get "order"(): integer
get "subMenu"(): $SubMenu
get "title"(): charseq
get "titleCondensed"(): charseq
get "tooltipText"(): charseq
get "actionViewExpanded"(): boolean
get "checkable"(): boolean
get "checked"(): boolean
get "enabled"(): boolean
get "visible"(): boolean
set "actionProvider"(value: $ActionProvider$$Type)
set "actionView"(value: $View$$Type)
set "alphabeticShortcut"(value: character)
set "checkable"(value: boolean)
set "checked"(value: boolean)
set "contentDescription"(value: charseq)
set "enabled"(value: boolean)
set "icon"(value: $Drawable$$Type)
set "iconTintList"(value: $ColorStateList$$Type)
set "numericShortcut"(value: character)
set "onActionExpandListener"(value: $MenuItem$OnActionExpandListener$$Type)
set "onMenuItemClickListener"(value: $MenuItem$OnMenuItemClickListener$$Type)
set "showAsAction"(value: integer)
set "showAsActionFlags"(value: integer)
set "title"(value: charseq)
set "titleCondensed"(value: charseq)
set "tooltipText"(value: charseq)
set "visible"(value: boolean)
}

export namespace $MenuItem {
const SHOW_AS_ACTION_ALWAYS: integer
const SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW: integer
const SHOW_AS_ACTION_IF_ROOM: integer
const SHOW_AS_ACTION_NEVER: integer
const SHOW_AS_ACTION_WITH_TEXT: integer
}
export abstract class $MenuItem$$Static implements $MenuItem {
static readonly "SHOW_AS_ACTION_ALWAYS": integer
static readonly "SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW": integer
static readonly "SHOW_AS_ACTION_IF_ROOM": integer
static readonly "SHOW_AS_ACTION_NEVER": integer
static readonly "SHOW_AS_ACTION_WITH_TEXT": integer

}
}

declare module "icyllis.modernui.fragment.FragmentResultListener" {
import { $DataSet$$Type } from "icyllis.modernui.util.DataSet"

export interface $FragmentResultListener {
"onFragmentResult"(string0: string, dataSet1: $DataSet$$Type): void
}

export namespace $FragmentResultListener {
const probejs$$marker: never
}
export abstract class $FragmentResultListener$$Static implements $FragmentResultListener {
}
}

declare module "icyllis.modernui.graphics.Matrix" {
import { $Rect2f$$Type } from "icyllis.arc3d.core.Rect2f"
import { $RectF$$Type } from "icyllis.modernui.graphics.RectF"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $PointF$$Type } from "icyllis.modernui.graphics.PointF"
import { $Rect2ic$$Type } from "icyllis.arc3d.core.Rect2ic"
import { $Rect2i$$Type } from "icyllis.arc3d.core.Rect2i"
import { $Matrix as $Matrix$0 } from "icyllis.arc3d.sketch.Matrix"
import { $Rect2fc$$Type } from "icyllis.arc3d.core.Rect2fc"

export class $Matrix extends $Matrix$0 {
constructor(scaleX: float, shearY: float, persp0: float, shearX: float, scaleY: float, persp1: float, transX: float, transY: float, persp2: float)
constructor(m: $Matrix$$Type)
constructor()

public "mapPoint"(p: $PointF$$Type): void
public "mapPoint"(p: float[]): void
public "mapPoints"(pts: float[]): void
public "mapPoints"(pts: float[], pos: integer, count: integer): void
public "mapPoints"(pts: float[], count: integer): void
public "mapPoints"(src: float[], dst: float[], count: integer): void
public "mapRect"(r: $Rect$$Type, out: $Rect$$Type): void
public "mapRect"(left: float, top: float, right: float, bottom: float, out: $Rect$$Type): void
public "mapRect"(r: $RectF$$Type): void
public "mapRect"(r: $RectF$$Type, out: $Rect$$Type): void
public "mapRect"(rect: $Rect2f$$Type): boolean
public "mapRect"(r: $Rect2ic$$Type, out: $Rect2i$$Type): void
public "mapRect"(r: $Rect2fc$$Type, out: $Rect2i$$Type): void
public "mapRect"(r: $Rect2i$$Type): void
public "mapRectOut"(left: float, top: float, right: float, bottom: float, out: $Rect$$Type): void
public "mapRectOut"(r: $RectF$$Type, out: $Rect$$Type): void
public "mapRectOut"(r: $Rect$$Type, out: $Rect$$Type): void
public "mapRectOut"(r: $Rect2fc$$Type, dst: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2i$$Type): void
public "mapRectOut"(r: $Rect2ic$$Type, dst: $Rect2i$$Type): void
public "set"(m: $Matrix$$Type): void
}
}

declare module "icyllis.modernui.util.Parcel" {
import { $List$$Type } from "java.util.List"
import { $DataSet, $DataSet$$Type } from "icyllis.modernui.util.DataSet"
import { $Parcelable$$Type } from "icyllis.modernui.util.Parcelable"
import { $Class$$Type } from "java.lang.Class"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"
import { $Parcelable$Creator } from "icyllis.modernui.util.Parcelable$Creator"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Instant, $Instant$$Type } from "java.time.Instant"

export class $Parcel {
constructor()

public "capacity"(): integer
public "freeData"(): void
public "limit"(newLimit: integer): void
public "limit"(): integer
public "position"(newPosition: integer): void
public "position"(): integer
public "readArray"<T>(loader: $ClassLoader$$Type, clazz: $Class$$Type<T>): T[]
public "readBoolean"(): boolean
public "readBooleanArray"(): boolean[]
public "readByte"(): byte
public "readByteArray"(): byte[]
public "readBytes"(dst: byte[]): void
public "readBytes"(dst: byte[], off: integer, len: integer): void
public "readChar"(): character
public "readCharArray"(): character[]
public "readCharSequence"(): charseq
public "readDataSet"(loader: $ClassLoader$$Type): $DataSet
public "readDouble"(): double
public "readDoubleArray"(): double[]
public "readFloat"(): float
public "readFloatArray"(): float[]
public "readInstant"(): $Instant
public "readInt"(): integer
public "readIntArray"(): integer[]
public "readLong"(): long
public "readLongArray"(): long[]
public "readParcelable"<T>(loader: $ClassLoader$$Type, clazz: $Class$$Type<T>): T
public "readParcelable0"<T>(loader: $ClassLoader$$Type, clazz: $Class$$Type<T>): T
public "readParcelableCreator"<T>(loader: $ClassLoader$$Type, clazz: $Class$$Type<T>): $Parcelable$Creator<T>
public "readShort"(): short
public "readShortArray"(): short[]
public "readString"(): string
public "readString16"(): string
public "readString8"(): string
public "readUUID"(): $UUID
public "readValue"<T>(loader: $ClassLoader$$Type, clazz: $Class$$Type<T>, elemType: $Class$$Type<any>): T
public "writeArray"(a: any[]): void
public "writeBoolean"(b: boolean): void
public "writeBooleanArray"(value: boolean[]): void
public "writeByte"(v: integer): void
public "writeByteArray"(b: byte[]): void
public "writeByteArray"(b: byte[], off: integer, len: integer): void
public "writeBytes"(src: byte[], off: integer, len: integer): void
public "writeBytes"(src: byte[]): void
public "writeChar"(v: integer): void
public "writeCharArray"(value: character[]): void
public "writeCharSequence"(cs: charseq): void
public "writeDataSet"(source: $DataSet$$Type): void
public "writeDouble"(v: double): void
public "writeDoubleArray"(value: double[]): void
public "writeFloat"(v: float): void
public "writeFloatArray"(value: float[]): void
public "writeInstant"(value: $Instant$$Type): void
public "writeInt"(v: integer): void
public "writeIntArray"(value: integer[]): void
public "writeList"(list: $List$$Type<any>): void
public "writeLong"(v: long): void
public "writeLongArray"(value: long[]): void
public "writeParcelable"(p: $Parcelable$$Type, parcelableFlags: integer): void
public "writeParcelableCreator"(p: $Parcelable$$Type): void
public "writeShort"(v: integer): void
public "writeShortArray"(value: short[]): void
public "writeString"(s: string): void
public "writeString16"(s: string): void
public "writeString8"(s: string): void
public "writeUUID"(value: $UUID$$Type): void
public "writeValue"(v: any): void
}
}

declare module "icyllis.modernui.view.InputEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $InputEvent {
public "cancel"(): void
public "copy"(): $InputEvent
public "getEventTime"(): long
public "getEventTimeNano"(): long
public "recycle"(): void
get "eventTime"(): long
get "eventTimeNano"(): long
}
}

declare module "icyllis.modernui.view.View$OnContextClickListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $View$OnContextClickListener {
"onContextClick"(view0: $View$$Type): boolean
}

export namespace $View$OnContextClickListener {
const probejs$$marker: never
}
export abstract class $View$OnContextClickListener$$Static implements $View$OnContextClickListener {
}
}

declare module "icyllis.modernui.graphics.text.ShapedText$RunConsumer" {
import { $LayoutPiece$$Type } from "icyllis.modernui.graphics.text.LayoutPiece"
import { $FontPaint$$Type } from "icyllis.modernui.graphics.text.FontPaint"

export interface $ShapedText$RunConsumer {
"accept"(layoutPiece0: $LayoutPiece$$Type, float1: float, fontPaint2: $FontPaint$$Type): void
}

export namespace $ShapedText$RunConsumer {
const probejs$$marker: never
}
export abstract class $ShapedText$RunConsumer$$Static implements $ShapedText$RunConsumer {
}
}

declare module "icyllis.modernui.animation.StateListAnimator" {
import { $Cloneable } from "java.lang.Cloneable"
import { $View$$Type } from "icyllis.modernui.view.View"
import { $Animator$$Type } from "icyllis.modernui.animation.Animator"

export class $StateListAnimator implements $Cloneable {
constructor()

public "addState"(spec: integer[], animator: $Animator$$Type): void
public "clone"(): $StateListAnimator
public "jumpToCurrentState"(): void
public "setState"(state: integer[]): void
public "setTarget"(view: $View$$Type): void
set "state"(value: integer[])
set "target"(value: $View$$Type)
}
}

declare module "icyllis.modernui.view.View$OnKeyListener" {
import { $View$$Type } from "icyllis.modernui.view.View"
import { $KeyEvent$$Type } from "icyllis.modernui.view.KeyEvent"

export interface $View$OnKeyListener {
"onKey"(view0: $View$$Type, int1: integer, keyEvent2: $KeyEvent$$Type): boolean
}

export namespace $View$OnKeyListener {
const probejs$$marker: never
}
export abstract class $View$OnKeyListener$$Static implements $View$OnKeyListener {
}
}

declare module "icyllis.modernui.fragment.SharedElementCallback" {
import { $List$$Type } from "java.util.List"
import { $Map$$Type } from "java.util.Map"
import { $View$$Type } from "icyllis.modernui.view.View"

export class $SharedElementCallback {
constructor()

public "onMapSharedElements"(names: $List$$Type<string>, sharedElements: $Map$$Type<string, $View$$Type>): void
public "onRejectSharedElements"(rejectedSharedElements: $List$$Type<$View$$Type>): void
public "onSharedElementEnd"(sharedElementNames: $List$$Type<string>, sharedElements: $List$$Type<$View$$Type>, sharedElementSnapshots: $List$$Type<$View$$Type>): void
public "onSharedElementStart"(sharedElementNames: $List$$Type<string>, sharedElements: $List$$Type<$View$$Type>, sharedElementSnapshots: $List$$Type<$View$$Type>): void
}
}

declare module "icyllis.modernui.graphics.text.FontCollection$Run" {
import { $Font } from "icyllis.modernui.graphics.text.Font"

export class $FontCollection$Run {
public "getBestFont"(text: character[], style: integer): $Font
public "limit"(): integer
public "start"(): integer
}
}

declare module "icyllis.modernui.view.View$OnTouchListener" {
import { $View$$Type } from "icyllis.modernui.view.View"
import { $MotionEvent$$Type } from "icyllis.modernui.view.MotionEvent"

export interface $View$OnTouchListener {
"onTouch"(view0: $View$$Type, motionEvent1: $MotionEvent$$Type): boolean
}

export namespace $View$OnTouchListener {
const probejs$$marker: never
}
export abstract class $View$OnTouchListener$$Static implements $View$OnTouchListener {
}
}

declare module "icyllis.modernui.view.ViewRoot" {
import { $AttachInfo$Callbacks } from "icyllis.modernui.view.AttachInfo$Callbacks"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $ActionMode$Callback$$Type } from "icyllis.modernui.view.ActionMode$Callback"
import { $Handler } from "icyllis.modernui.core.Handler"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $ActionMode } from "icyllis.modernui.view.ActionMode"
import { $ViewParent } from "icyllis.modernui.view.ViewParent"
import { $Choreographer } from "icyllis.modernui.core.Choreographer"
import { $View, $View$$Type } from "icyllis.modernui.view.View"
import { $ContextMenu$$Type } from "icyllis.modernui.view.ContextMenu"
import { $LayoutTransition$$Type } from "icyllis.modernui.animation.LayoutTransition"
import { $InputEvent$$Type } from "icyllis.modernui.view.InputEvent"
import { $Point$$Type } from "icyllis.modernui.graphics.Point"

export class $ViewRoot implements $ViewParent, $AttachInfo$Callbacks {
readonly "mChoreographer": $Choreographer
readonly "mHandler": $Handler

public "bringChildToFront"(child: $View$$Type): void
public "canResolveLayoutDirection"(): boolean
public "canResolveTextAlignment"(): boolean
public "canResolveTextDirection"(): boolean
public "cancelInvalidate"(view: $View$$Type): void
public "childDrawableStateChanged"(child: $View$$Type): void
public "childHasTransientStateChanged"(child: $View$$Type, hasTransientState: boolean): void
public "clearChildFocus"(child: $View$$Type): void
public "createContextMenu"(menu: $ContextMenu$$Type): void
public "dispatchInvalidateDelayed"(view: $View$$Type, delayMilliseconds: long): void
public "dispatchInvalidateOnAnimation"(view: $View$$Type): void
public "enqueueInputEvent"(event: $InputEvent$$Type): void
public "focusSearch"(focused: $View$$Type, direction: integer): $View
public "focusableViewAvailable"(v: $View$$Type): void
public "getChildVisibleRect"(child: $View$$Type, r: $Rect$$Type, offset: $Point$$Type): boolean
public "getLayoutDirection"(): integer
public "getNestedScrollAxes"(): integer
public "getParent"(): $ViewParent
public "getTextAlignment"(): integer
public "getTextDirection"(): integer
public "getView"(): $View
public "invalidateChild"(child: $View$$Type, dirty: $Rect$$Type): void
public "invalidateChildInParent"(location: integer[], dirty: $Rect$$Type): $ViewParent
public "isLayoutDirectionResolved"(): boolean
public "isLayoutRequested"(): boolean
public "isTextAlignmentResolved"(): boolean
public "isTextDirectionResolved"(): boolean
public static "isViewDescendantOf"(child: $View$$Type, parent: $View$$Type): boolean
public "keyboardNavigationClusterSearch"(currentCluster: $View$$Type, direction: integer): $View
public "loadSystemProperties"(debugLayoutSupplier: $BooleanSupplier$$Type): void
public "onNestedFling"(target: $View$$Type, velocityX: float, velocityY: float, consumed: boolean): boolean
public "onNestedPreFling"(target: $View$$Type, velocityX: float, velocityY: float): boolean
public "onNestedPreScroll"(target: $View$$Type, dx: integer, dy: integer, consumed: integer[], type: integer): void
public "onNestedScroll"(target: $View$$Type, dxConsumed: integer, dyConsumed: integer, dxUnconsumed: integer, dyUnconsumed: integer, type: integer, consumed: integer[]): void
public "onNestedScrollAccepted"(child: $View$$Type, target: $View$$Type, axes: integer, type: integer): void
public "onStartNestedScroll"(child: $View$$Type, target: $View$$Type, axes: integer, type: integer): boolean
public "onStopNestedScroll"(target: $View$$Type, type: integer): void
public "performHapticFeedback"(int0: integer, boolean1: boolean): boolean
public "playSoundEffect"(int0: integer): void
public "requestChildFocus"(child: $View$$Type, focused: $View$$Type): void
public "requestChildRectangleOnScreen"(child: $View$$Type, rectangle: $Rect$$Type, immediate: boolean): boolean
public "requestDisallowInterceptTouchEvent"(disallowIntercept: boolean): void
public "requestLayout"(): void
public "requestTransitionStart"(transition: $LayoutTransition$$Type): void
public "setFrame"(width: integer, height: integer): void
public "setView"(view: $View$$Type): void
public "showContextMenuForChild"(originalView: $View$$Type, x: float, y: float): boolean
public "startActionModeForChild"(originalView: $View$$Type, callback: $ActionMode$Callback$$Type, type: integer): $ActionMode
get "layoutDirection"(): integer
get "nestedScrollAxes"(): integer
get "parent"(): $ViewParent
get "textAlignment"(): integer
get "textDirection"(): integer
get "view"(): $View
get "layoutDirectionResolved"(): boolean
get "layoutRequested"(): boolean
get "textAlignmentResolved"(): boolean
get "textDirectionResolved"(): boolean
set "view"(value: $View$$Type)
}
}

declare module "icyllis.modernui.graphics.Bitmap$SaveFormat" {
import { $Enum } from "java.lang.Enum"
import { $MemoryStack$$Type } from "org.lwjgl.system.MemoryStack"
import { $STBIWriteCallbackI$$Type } from "org.lwjgl.stb.STBIWriteCallbackI"
import { $Bitmap$Format$$Type } from "icyllis.modernui.graphics.Bitmap$Format"
import { $PointerBuffer } from "org.lwjgl.PointerBuffer"

export class $Bitmap$SaveFormat extends $Enum<$Bitmap$SaveFormat> {
static readonly "BMP": $Bitmap$SaveFormat
static readonly "HDR": $Bitmap$SaveFormat
static readonly "JPEG": $Bitmap$SaveFormat
static readonly "PNG": $Bitmap$SaveFormat
static readonly "RAW": $Bitmap$SaveFormat
static readonly "TGA": $Bitmap$SaveFormat

public static "getAllDescription"(header: string): string
public static "getAllDescription"(): string
public static "getAllFilters"(stack: $MemoryStack$$Type): $PointerBuffer
public "getDefaultExtension"(): string
public "getDescription"(): string
public static "getFileName"(format: $Bitmap$SaveFormat$$Type, name: string): string
public "getFilters"(stack: $MemoryStack$$Type): $PointerBuffer
public static "valueOf"(name: string): $Bitmap$SaveFormat
public static "values"(): $Bitmap$SaveFormat[]
public "write"(func: $STBIWriteCallbackI$$Type, width: integer, height: integer, format: $Bitmap$Format$$Type, data: long, quality: integer): boolean
get "defaultExtension"(): string
get "description"(): string
}
}

declare module "icyllis.modernui.lifecycle.LifecycleOwner" {
import { $Lifecycle } from "icyllis.modernui.lifecycle.Lifecycle"

export interface $LifecycleOwner {
"getLifecycle"(): $Lifecycle
get "lifecycle"(): $Lifecycle
}

export namespace $LifecycleOwner {
const probejs$$marker: never
}
export abstract class $LifecycleOwner$$Static implements $LifecycleOwner {
}
}

declare module "icyllis.modernui.graphics.text.Font" {
import { $FloatArrayList$$Type } from "it.unimi.dsi.fastutil.floats.FloatArrayList"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $Locale$$Type } from "java.util.Locale"
import { $Typeface } from "icyllis.arc3d.sketch.Typeface"
import { $FontPaint$$Type } from "icyllis.modernui.graphics.text.FontPaint"
import { $FontMetricsInt$$Type } from "icyllis.modernui.graphics.text.FontMetricsInt"
import { $IntArrayList$$Type } from "it.unimi.dsi.fastutil.ints.IntArrayList"

export interface $Font {
"calcGlyphScore"(buf: character[], start: integer, limit: integer): integer
"doComplexLayout"(char0s: character[], int1: integer, int2: integer, int3: integer, int4: integer, boolean5: boolean, fontPaint6: $FontPaint$$Type, intArrayList7: $IntArrayList$$Type, floatArrayList8: $FloatArrayList$$Type, float9s: float[], int10: integer, rect11: $Rect$$Type, float12: float, float13: float): float
"doSimpleLayout"(char0s: character[], int1: integer, int2: integer, fontPaint3: $FontPaint$$Type, intArrayList4: $IntArrayList$$Type, floatArrayList5: $FloatArrayList$$Type, float6: float, float7: float): float
"getFamilyName"(): string
"getFamilyName"(locale0: $Locale$$Type): string
"getFullName"(locale0: $Locale$$Type): string
"getFullName"(): string
"getMetrics"(fontPaint0: $FontPaint$$Type, fontMetricsInt1: $FontMetricsInt$$Type): integer
"getNativeTypeface"(): $Typeface
"getStyle"(): integer
"hasGlyph"(int0: integer, int1: integer): boolean
get "familyName"(): string
get "fullName"(): string
get "nativeTypeface"(): $Typeface
get "style"(): integer
}

export namespace $Font {
const probejs$$marker: never
}
export abstract class $Font$$Static implements $Font {
}
}

declare module "icyllis.modernui.util.IntProperty" {
import { $Property } from "icyllis.modernui.util.Property"

export class $IntProperty<T = any> extends $Property<T, integer> {
constructor(name: string)

/** @deprecated */
public "set"(object: T, value: integer): void
public "setValue"(t0: T, int1: integer): void
}
}

declare module "icyllis.modernui.resources.TypedArray" {
import { $Drawable } from "icyllis.modernui.graphics.drawable.Drawable"
import { $TypedValue, $TypedValue$$Type } from "icyllis.modernui.resources.TypedValue"
import { $ColorStateList } from "icyllis.modernui.util.ColorStateList"
import { $ResourceId } from "icyllis.modernui.resources.ResourceId"
import { $Resources } from "icyllis.modernui.resources.Resources"

export class $TypedArray {
public "getBoolean"(index: integer, defValue: boolean): boolean
public "getColor"(index: integer, defValue: integer): integer
public "getColorStateList"(index: integer): $ColorStateList
public "getDimension"(index: integer, defValue: float): float
public "getDimensionPixelOffset"(index: integer, defValue: integer): integer
public "getDimensionPixelSize"(index: integer, defValue: integer): integer
public "getDrawable"(index: integer): $Drawable
public "getFloat"(index: integer, defValue: float): float
public "getFraction"(index: integer, base: integer, pbase: integer, defValue: float): float
public "getIndex"(at: integer): integer
public "getIndexCount"(): integer
public "getInt"(index: integer, defValue: integer): integer
public "getInteger"(index: integer, defValue: integer): integer
public "getLayoutDimension"(index: integer, defValue: integer): integer
public "getResourceId"(index: integer): $ResourceId
public "getResources"(): $Resources
public "getType"(index: integer): integer
public "getValue"(index: integer, outValue: $TypedValue$$Type): boolean
public "hasValue"(index: integer): boolean
public "hasValueOrEmpty"(index: integer): boolean
public "length"(): integer
public "peekValue"(index: integer): $TypedValue
public "recycle"(): void
get "indexCount"(): integer
get "resources"(): $Resources
}
}

declare module "icyllis.modernui.fragment.FragmentFactory" {
import { $Fragment, $Fragment$$Type } from "icyllis.modernui.fragment.Fragment"
import { $Class, $Class$$Type } from "java.lang.Class"
import { $ClassLoader$$Type } from "java.lang.ClassLoader"

export class $FragmentFactory {
constructor()

public "instantiate"(clazz: $Class$$Type<$Fragment$$Type>): $Fragment
public "instantiate"(classLoader: $ClassLoader$$Type, className: string): $Fragment
public static "loadFragmentClass"(classLoader: $ClassLoader$$Type, className: string): $Class<$Fragment>
}
}

declare module "icyllis.modernui.graphics.Image" {
import { $ImageInfo } from "icyllis.arc3d.core.ImageInfo"
import { $RectF$$Type } from "icyllis.modernui.graphics.RectF"
import { $Image as $Image$0 } from "icyllis.arc3d.sketch.Image"
import { $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $ColorSpace } from "icyllis.arc3d.core.ColorSpace"
import { $RecordingContext$$Type } from "icyllis.arc3d.granite.RecordingContext"
import { $Bitmap$$Type } from "icyllis.modernui.graphics.Bitmap"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $Image implements $AutoCloseable {
static readonly "DENSITY_NONE": integer

public "close"(): void
public static "create"(namespace: string, entry: string): $Image
public static "createTextureFromBitmap"(bitmap: $Bitmap$$Type): $Image
public static "createTextureFromBitmap"(recordingContext: $RecordingContext$$Type, bitmap: $Bitmap$$Type): $Image
public "getBounds"(bounds: $RectF$$Type): void
public "getBounds"(bounds: $Rect$$Type): void
public "getColorSpace"(): $ColorSpace
public "getDensity"(): integer
public "getHeight"(): integer
public "getInfo"(): $ImageInfo
public "getNativeImage"(): $Image$0
public "getScaledHeight"(targetDensity: integer): integer
public "getScaledWidth"(targetDensity: integer): integer
public "getWidth"(): integer
public "isAlphaMask"(): boolean
public "isClosed"(): boolean
public "isOpaque"(): boolean
public static "scaleFromDensity"(size: integer, sourceDensity: integer, targetDensity: integer): integer
public "setDensity"(density: integer): void
get "colorSpace"(): $ColorSpace
get "density"(): integer
get "height"(): integer
get "info"(): $ImageInfo
get "nativeImage"(): $Image$0
get "width"(): integer
get "alphaMask"(): boolean
get "closed"(): boolean
get "opaque"(): boolean
set "density"(value: integer)
}
}

declare module "icyllis.modernui.graphics.drawable.Drawable" {
import { $ColorFilter, $ColorFilter$$Type } from "icyllis.modernui.graphics.ColorFilter"
import { $Rect, $Rect$$Type } from "icyllis.modernui.graphics.Rect"
import { $BlendMode$$Type } from "icyllis.modernui.graphics.BlendMode"
import { $ColorStateList$$Type } from "icyllis.modernui.util.ColorStateList"
import { $Resources$Theme$$Type } from "icyllis.modernui.resources.Resources$Theme"
import { $Canvas$$Type } from "icyllis.modernui.graphics.Canvas"
import { $Drawable$ConstantState } from "icyllis.modernui.graphics.drawable.Drawable$ConstantState"
import { $Drawable$Callback, $Drawable$Callback$$Type } from "icyllis.modernui.graphics.drawable.Drawable$Callback"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $Outline$$Type } from "icyllis.modernui.graphics.Outline"

export class $Drawable {
static readonly "MAX_LEVEL": integer

constructor()

public "applyTheme"(t: $Resources$Theme$$Type): void
public "canApplyTheme"(): boolean
public "clearMutated"(): void
public "copyBounds"(bounds: $Rect$$Type): void
public "copyBounds"(): $Rect
public "draw"(canvas0: $Canvas$$Type): void
public "getAlpha"(): integer
public "getBounds"(): $Rect
public "getCallback"(): $Drawable$Callback
public "getChangingConfigurations"(): integer
public "getColorFilter"(): $ColorFilter
public "getConstantState"(): $Drawable$ConstantState
public "getCurrent"(): $Drawable
public "getDirtyBounds"(): $Rect
public "getHotspotBounds"(outRect: $Rect$$Type): void
public "getIntrinsicHeight"(): integer
public "getIntrinsicWidth"(): integer
public "getLayoutDirection"(): integer
public "getLevel"(): integer
public "getMinimumHeight"(): integer
public "getMinimumWidth"(): integer
public "getOutline"(outline: $Outline$$Type): void
public "getPadding"(padding: $Rect$$Type): boolean
public "getState"(): integer[]
public "hasFocusStateSpecified"(): boolean
public "invalidateSelf"(): void
public "isAutoMirrored"(): boolean
public "isStateful"(): boolean
public "isVisible"(): boolean
public "jumpToCurrentState"(): void
public "mutate"(): $Drawable
public static "scaleFromDensity"(pixels: integer, sourceDensity: integer, targetDensity: integer, isSize: boolean): integer
public static "scaleFromDensity"(pixels: float, sourceDensity: integer, targetDensity: integer): float
public "scheduleSelf"(what: $Runnable$$Type, when: long): void
public "setAlpha"(alpha: integer): void
public "setAutoMirrored"(mirrored: boolean): void
public "setBounds"(left: integer, top: integer, right: integer, bottom: integer): void
public "setBounds"(bounds: $Rect$$Type): void
public "setCallback"(cb: $Drawable$Callback$$Type): void
public "setChangingConfigurations"(configs: integer): void
public "setColorFilter"(colorFilter: $ColorFilter$$Type): void
public "setHotspot"(x: float, y: float): void
public "setHotspotBounds"(left: integer, top: integer, right: integer, bottom: integer): void
public "setLayoutDirection"(layoutDirection: integer): boolean
public "setLevel"(level: integer): boolean
public "setState"(stateSet: integer[]): boolean
public "setTint"(tintColor: integer): void
public "setTintBlendMode"(blendMode: $BlendMode$$Type): void
public "setTintList"(tint: $ColorStateList$$Type): void
public "setVisible"(visible: boolean, restart: boolean): boolean
public "unscheduleSelf"(what: $Runnable$$Type): void
get "alpha"(): integer
get "bounds"(): $Rect
get "callback"(): $Drawable$Callback
get "changingConfigurations"(): integer
get "colorFilter"(): $ColorFilter
get "constantState"(): $Drawable$ConstantState
get "current"(): $Drawable
get "dirtyBounds"(): $Rect
get "intrinsicHeight"(): integer
get "intrinsicWidth"(): integer
get "layoutDirection"(): integer
get "level"(): integer
get "minimumHeight"(): integer
get "minimumWidth"(): integer
get "state"(): integer[]
get "autoMirrored"(): boolean
get "stateful"(): boolean
get "visible"(): boolean
set "alpha"(value: integer)
set "autoMirrored"(value: boolean)
set "bounds"(value: $Rect$$Type)
set "callback"(value: $Drawable$Callback$$Type)
set "changingConfigurations"(value: integer)
set "colorFilter"(value: $ColorFilter$$Type)
set "layoutDirection"(value: integer)
set "level"(value: integer)
set "state"(value: integer[])
set "tint"(value: integer)
set "tintBlendMode"(value: $BlendMode$$Type)
set "tintList"(value: $ColorStateList$$Type)
}
}

declare module "icyllis.modernui.view.MenuItem$OnMenuItemClickListener" {
import { $MenuItem$$Type } from "icyllis.modernui.view.MenuItem"

export interface $MenuItem$OnMenuItemClickListener {
"onMenuItemClick"(menuItem0: $MenuItem$$Type): boolean
}

export namespace $MenuItem$OnMenuItemClickListener {
const probejs$$marker: never
}
export abstract class $MenuItem$OnMenuItemClickListener$$Static implements $MenuItem$OnMenuItemClickListener {
}
}

declare module "icyllis.modernui.core.Looper" {
import { $Looper$Observer$$Type } from "icyllis.modernui.core.Looper$Observer"
import { $Thread } from "java.lang.Thread"
import { $MessageQueue } from "icyllis.modernui.core.MessageQueue"

export class $Looper {
public static "getMainLooper"(): $Looper
public "getQueue"(): $MessageQueue
public "getThread"(): $Thread
public "isCurrentThread"(): boolean
public static "loop"(): void
public static "myLooper"(): $Looper
public static "myQueue"(): $MessageQueue
public static "prepare"(): $Looper
public static "prepareMainLooper"(): void
public "quit"(): void
public "quitSafely"(): void
public static "setObserver"(observer: $Looper$Observer$$Type): void
public "setSlowLogThresholdMs"(slowDispatchThresholdMs: long, slowDeliveryThresholdMs: long): void
get "queue"(): $MessageQueue
get "thread"(): $Thread
get "currentThread"(): boolean
}
}

declare module "icyllis.modernui.view.ViewTreeObserver$OnGlobalFocusChangeListener" {
import { $View$$Type } from "icyllis.modernui.view.View"

export interface $ViewTreeObserver$OnGlobalFocusChangeListener {
"onGlobalFocusChanged"(view0: $View$$Type, view1: $View$$Type): void
}

export namespace $ViewTreeObserver$OnGlobalFocusChangeListener {
const probejs$$marker: never
}
export abstract class $ViewTreeObserver$OnGlobalFocusChangeListener$$Static implements $ViewTreeObserver$OnGlobalFocusChangeListener {
}
}

