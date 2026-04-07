declare module "net.minecraftforge.eventbus.api.BusBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BusBuilder$$Type = ($BusBuilder);
}

declare module "net.minecraftforge.eventbus.api.IEventBus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEventBus$$Type = ($IEventBus);
}

declare module "net.minecraftforge.eventbus.ListenerList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ListenerList$$Type = ($ListenerList);
}

declare module "net.minecraftforge.eventbus.api.IGenericEvent" {
import { $Type$$Type } from "java.lang.reflect.Type"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IGenericEvent$$Type<T = any> = ($IGenericEvent<T> | (() => $Type$$Type));
}

declare module "net.minecraftforge.eventbus.api.IEventBusInvokeDispatcher" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IEventListener } from "net.minecraftforge.eventbus.api.IEventListener"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEventBusInvokeDispatcher$$Type = ($IEventBusInvokeDispatcher | ((arg0: $IEventListener, arg1: $Event) => void));
}

declare module "net.minecraftforge.eventbus.api.EventPriority" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventPriority$$Type = ($EventPriority | ("highest" | "high" | "normal" | "low" | "lowest" | "monitor"));
}

declare module "net.minecraftforge.eventbus.api.Event" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Event$$Type = ($Event);
}

declare module "net.minecraftforge.eventbus.BusBuilderImpl" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BusBuilderImpl$$Type = ($BusBuilderImpl);
}

declare module "net.minecraftforge.eventbus.api.GenericEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GenericEvent$$Type<T = any> = ($GenericEvent<T>);
}

declare module "net.minecraftforge.eventbus.api.Event$Result" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $Event$Result$$Type = ($Event$Result | ("deny" | "default" | "allow"));
}

declare module "net.minecraftforge.eventbus.EventBus" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EventBus$$Type = ($EventBus);
}

declare module "net.minecraftforge.eventbus.api.IEventExceptionHandler" {
import { $Throwable } from "java.lang.Throwable"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $IEventBus } from "net.minecraftforge.eventbus.api.IEventBus"
import { $IEventListener } from "net.minecraftforge.eventbus.api.IEventListener"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEventExceptionHandler$$Type = ($IEventExceptionHandler | ((arg0: $IEventBus, arg1: $Event, arg2: $IEventListener[], arg3: integer, arg4: $Throwable) => void));
}

declare module "net.minecraftforge.eventbus.api.IEventListener" {
import { $Event } from "net.minecraftforge.eventbus.api.Event"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IEventListener$$Type = ($IEventListener | ((arg0: $Event) => void));
}

