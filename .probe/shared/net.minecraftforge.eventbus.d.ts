declare module "net.minecraftforge.eventbus.api.BusBuilder" {
import { $IEventExceptionHandler$$Type } from "net.minecraftforge.eventbus.api.IEventExceptionHandler"
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $Class$$Type } from "java.lang.Class"
import { $IEventBus } from "net.minecraftforge.eventbus.api.IEventBus"
import { $EnumSet$$Type } from "java.util.EnumSet"

export interface $BusBuilder {
"build"(): $IEventBus
"checkTypesOnDispatch"(): $BusBuilder
"markerType"(class0: $Class$$Type<any>): $BusBuilder
"setExceptionHandler"(iEventExceptionHandler0: $IEventExceptionHandler$$Type): $BusBuilder
"setPhasesToTrack"(enumSet0: $EnumSet$$Type<$EventPriority$$Type>): $BusBuilder
"setPhasesToTrack"(...eventPriority0s: $EventPriority$$Type[]): $BusBuilder
"setPhasesToTrack"(eventPriority0: $EventPriority$$Type): $BusBuilder
"setTrackPhases"(boolean0: boolean): $BusBuilder
"startShutdown"(): $BusBuilder
"useModLauncher"(): $BusBuilder
set "exceptionHandler"(value: $IEventExceptionHandler$$Type)
set "phasesToTrack"(value: $EnumSet$$Type<$EventPriority$$Type>)
set "phasesToTrack"(value: $EventPriority$$Type[])
set "phasesToTrack"(value: $EventPriority$$Type)
set "trackPhases"(value: boolean)
}

export namespace $BusBuilder {
function builder(): $BusBuilder
}
export abstract class $BusBuilder$$Static implements $BusBuilder {
static "builder"(): $BusBuilder
}
}

declare module "net.minecraftforge.eventbus.api.IEventBus" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $GenericEvent, $GenericEvent$$Type } from "net.minecraftforge.eventbus.api.GenericEvent"
import { $Class$$Type } from "java.lang.Class"
import { $IEventBusInvokeDispatcher$$Type } from "net.minecraftforge.eventbus.api.IEventBusInvokeDispatcher"

export interface $IEventBus {
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, boolean2: boolean, class3: $Class$$Type<T>, consumer4: $Consumer$$Type<T>): void
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, consumer1: $Consumer$$Type<T>): void
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, boolean2: boolean, consumer3: $Consumer$$Type<T>): void
"addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, consumer2: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(consumer0: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, boolean1: boolean, consumer2: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, consumer1: $Consumer$$Type<T>): void
"addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, boolean1: boolean, class2: $Class$$Type<T>, consumer3: $Consumer$$Type<T>): void
"fire"<T extends $Event>(t0: T, iEventBusInvokeDispatcher1: $IEventBusInvokeDispatcher$$Type): T
"fire"<T extends $Event>(t0: T): T
"post"(event0: $Event$$Type): boolean
"post"(event0: $Event$$Type, iEventBusInvokeDispatcher1: $IEventBusInvokeDispatcher$$Type): boolean
"register"(object0: any): void
"shutdown"(): void
"start"(): void
"unregister"(object0: any): void
}

export namespace $IEventBus {
const probejs$$marker: never
}
export abstract class $IEventBus$$Static implements $IEventBus {
}
}

declare module "net.minecraftforge.eventbus.ListenerList" {
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $EventBus$$Type } from "net.minecraftforge.eventbus.EventBus"
import { $IEventListener, $IEventListener$$Type } from "net.minecraftforge.eventbus.api.IEventListener"

export class $ListenerList {
constructor()
constructor(listenerList0: $ListenerList$$Type)

public static "clearBusID"(int0: integer): void
public "getListeners"(int0: integer): $IEventListener[]
public "register"(int0: integer, eventPriority1: $EventPriority$$Type, iEventListener2: $IEventListener$$Type): void
public "register"(int0: integer, eventBus1: $EventBus$$Type, eventPriority2: $EventPriority$$Type, iEventListener3: $IEventListener$$Type): void
public "unregister"(int0: integer, iEventListener1: $IEventListener$$Type): void
public static "unregisterAll"(int0: integer, iEventListener1: $IEventListener$$Type): void
}
}

declare module "net.minecraftforge.eventbus.api.IGenericEvent" {
import { $Type } from "java.lang.reflect.Type"

export interface $IGenericEvent<T = any> {
"getGenericType"(): $Type
get "genericType"(): $Type
}

export namespace $IGenericEvent {
const probejs$$marker: never
}
export abstract class $IGenericEvent$$Static<T = any> implements $IGenericEvent<T> {
}
}

declare module "net.minecraftforge.eventbus.api.IEventBusInvokeDispatcher" {
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $IEventListener$$Type } from "net.minecraftforge.eventbus.api.IEventListener"

export interface $IEventBusInvokeDispatcher {
"invoke"(iEventListener0: $IEventListener$$Type, event1: $Event$$Type): void
}

export namespace $IEventBusInvokeDispatcher {
const probejs$$marker: never
}
export abstract class $IEventBusInvokeDispatcher$$Static implements $IEventBusInvokeDispatcher {
}
}

declare module "net.minecraftforge.eventbus.api.EventPriority" {
import { $Enum } from "java.lang.Enum"
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $IEventListener } from "net.minecraftforge.eventbus.api.IEventListener"

export class $EventPriority extends $Enum<$EventPriority> implements $IEventListener {
static readonly "HIGH": $EventPriority
static readonly "HIGHEST": $EventPriority
static readonly "LOW": $EventPriority
static readonly "LOWEST": $EventPriority
static readonly "MONITOR": $EventPriority
static readonly "NORMAL": $EventPriority

public "invoke"(event0: $Event$$Type): void
public "listenerName"(): string
public static "valueOf"(string0: string): $EventPriority
public static "values"(): $EventPriority[]
}
}

declare module "net.minecraftforge.eventbus.api.Event" {
import { $EventPriority, $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $Event$Result, $Event$Result$$Type } from "net.minecraftforge.eventbus.api.Event$Result"
import { $ListenerList } from "net.minecraftforge.eventbus.ListenerList"

export class $Event {
constructor()

public "cancel"(): void
public "getListenerList"(): $ListenerList
public "getPhase"(): $EventPriority
public "getResult"(): $Event$Result
public "hasResult"(): boolean
public "isCancelable"(): boolean
public "isCanceled"(): boolean
public "setCanceled"(boolean0: boolean): void
public "setPhase"(eventPriority0: $EventPriority$$Type): void
public "setResult"(result0: $Event$Result$$Type): void
get "listenerList"(): $ListenerList
get "phase"(): $EventPriority
get "result"(): $Event$Result
get "cancelable"(): boolean
get "canceled"(): boolean
set "canceled"(value: boolean)
set "phase"(value: $EventPriority$$Type)
set "result"(value: $Event$Result$$Type)
}
}

declare module "net.minecraftforge.eventbus.BusBuilderImpl" {
import { $IEventExceptionHandler$$Type } from "net.minecraftforge.eventbus.api.IEventExceptionHandler"
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $Class$$Type } from "java.lang.Class"
import { $IEventBus } from "net.minecraftforge.eventbus.api.IEventBus"
import { $BusBuilder } from "net.minecraftforge.eventbus.api.BusBuilder"
import { $EnumSet$$Type } from "java.util.EnumSet"

export class $BusBuilderImpl implements $BusBuilder {
constructor()

public "build"(): $IEventBus
public static "builder"(): $BusBuilder
public "checkTypesOnDispatch"(): $BusBuilder
public "markerType"(class0: $Class$$Type<any>): $BusBuilder
public "setExceptionHandler"(iEventExceptionHandler0: $IEventExceptionHandler$$Type): $BusBuilder
public "setPhasesToTrack"(eventPriority0: $EventPriority$$Type): $BusBuilder
public "setPhasesToTrack"(enumSet0: $EnumSet$$Type<$EventPriority$$Type>): $BusBuilder
public "setPhasesToTrack"(...eventPriority0s: $EventPriority$$Type[]): $BusBuilder
public "setTrackPhases"(boolean0: boolean): $BusBuilder
public "startShutdown"(): $BusBuilder
public "useModLauncher"(): $BusBuilder
set "exceptionHandler"(value: $IEventExceptionHandler$$Type)
set "phasesToTrack"(value: $EventPriority$$Type)
set "phasesToTrack"(value: $EnumSet$$Type<$EventPriority$$Type>)
set "phasesToTrack"(value: $EventPriority$$Type[])
set "trackPhases"(value: boolean)
}
}

declare module "net.minecraftforge.eventbus.api.GenericEvent" {
import { $IGenericEvent } from "net.minecraftforge.eventbus.api.IGenericEvent"
import { $Type } from "java.lang.reflect.Type"
import { $Event } from "net.minecraftforge.eventbus.api.Event"

export class $GenericEvent<T = any> extends $Event implements $IGenericEvent<T> {
constructor()

public "getGenericType"(): $Type
get "genericType"(): $Type
}
}

declare module "net.minecraftforge.eventbus.api.Event$Result" {
import { $Enum } from "java.lang.Enum"

export class $Event$Result extends $Enum<$Event$Result> {
static readonly "ALLOW": $Event$Result
static readonly "DEFAULT": $Event$Result
static readonly "DENY": $Event$Result

public "isAllowed"(): boolean
public "isDefault"(): boolean
public "isDenied"(): boolean
public static "valueOf"(string0: string): $Event$Result
public static "values"(): $Event$Result[]
get "allowed"(): boolean
get "default"(): boolean
get "denied"(): boolean
}
}

declare module "net.minecraftforge.eventbus.EventBus" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Throwable$$Type } from "java.lang.Throwable"
import { $BusBuilderImpl$$Type } from "net.minecraftforge.eventbus.BusBuilderImpl"
import { $EventPriority$$Type } from "net.minecraftforge.eventbus.api.EventPriority"
import { $IEventExceptionHandler } from "net.minecraftforge.eventbus.api.IEventExceptionHandler"
import { $Event, $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $GenericEvent, $GenericEvent$$Type } from "net.minecraftforge.eventbus.api.GenericEvent"
import { $Class$$Type } from "java.lang.Class"
import { $IEventBusInvokeDispatcher$$Type } from "net.minecraftforge.eventbus.api.IEventBusInvokeDispatcher"
import { $IEventBus, $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $IEventListener$$Type } from "net.minecraftforge.eventbus.api.IEventListener"

export class $EventBus implements $IEventExceptionHandler, $IEventBus {
constructor(busBuilderImpl0: $BusBuilderImpl$$Type)

public "addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, consumer2: $Consumer$$Type<T>): void
public "addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, boolean2: boolean, class3: $Class$$Type<T>, consumer4: $Consumer$$Type<T>): void
public "addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, eventPriority1: $EventPriority$$Type, boolean2: boolean, consumer3: $Consumer$$Type<T>): void
public "addGenericListener"<T extends $GenericEvent<F>, F>(class0: $Class$$Type<F>, consumer1: $Consumer$$Type<T>): void
public "addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, boolean1: boolean, consumer2: $Consumer$$Type<T>): void
public "addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, boolean1: boolean, class2: $Class$$Type<T>, consumer3: $Consumer$$Type<T>): void
public "addListener"<T extends $Event>(eventPriority0: $EventPriority$$Type, consumer1: $Consumer$$Type<T>): void
public "addListener"<T extends $Event>(consumer0: $Consumer$$Type<T>): void
public "fire"<T extends $Event>(t0: T, iEventBusInvokeDispatcher1: $IEventBusInvokeDispatcher$$Type): T
public "fire"<T extends $Event>(t0: T): T
public "handleException"(iEventBus0: $IEventBus$$Type, event1: $Event$$Type, iEventListener2s: $IEventListener$$Type[], int3: integer, throwable4: $Throwable$$Type): void
public "post"(event0: $Event$$Type, iEventBusInvokeDispatcher1: $IEventBusInvokeDispatcher$$Type): boolean
public "post"(event0: $Event$$Type): boolean
public "register"(object0: any): void
public "shutdown"(): void
public "start"(): void
public "unregister"(object0: any): void
}
}

declare module "net.minecraftforge.eventbus.api.IEventExceptionHandler" {
import { $Throwable$$Type } from "java.lang.Throwable"
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"
import { $IEventBus$$Type } from "net.minecraftforge.eventbus.api.IEventBus"
import { $IEventListener$$Type } from "net.minecraftforge.eventbus.api.IEventListener"

export interface $IEventExceptionHandler {
"handleException"(iEventBus0: $IEventBus$$Type, event1: $Event$$Type, iEventListener2s: $IEventListener$$Type[], int3: integer, throwable4: $Throwable$$Type): void
}

export namespace $IEventExceptionHandler {
const probejs$$marker: never
}
export abstract class $IEventExceptionHandler$$Static implements $IEventExceptionHandler {
}
}

declare module "net.minecraftforge.eventbus.api.IEventListener" {
import { $Event$$Type } from "net.minecraftforge.eventbus.api.Event"

export interface $IEventListener {
"invoke"(event0: $Event$$Type): void
"listenerName"(): string
}

export namespace $IEventListener {
const probejs$$marker: never
}
export abstract class $IEventListener$$Static implements $IEventListener {
}
}

