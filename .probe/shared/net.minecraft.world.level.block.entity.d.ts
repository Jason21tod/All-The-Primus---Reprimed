declare module "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $SpecialLogicInventory } from "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BaseContainerBlockEntity } from "net.minecraft.world.level.block.entity.BaseContainerBlockEntity"

export class $RandomizableContainerBlockEntity extends $BaseContainerBlockEntity implements $SpecialLogicInventory {
static readonly "LOOT_TABLE_SEED_TAG": string
static readonly "LOOT_TABLE_TAG": string

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onFinalCommit"(slot: integer, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): void
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "fabric_setSuppress"(suppress: boolean): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "redirect$gnc000$fabric_redirectMarkDirty"(self: $RandomizableContainerBlockEntity$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type, long1: long): void
public static "setLootTable"(blockGetter0: $BlockGetter$$Type, randomSource1: $RandomSource$$Type, blockPos2: $BlockPos$$Type, resourceLocation3: $ResourceLocation$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
public "unpackLootTable"(player0: $Player$$Type): void
get "lootTable"(): $ResourceLocation
set "lootTable"(value: $ResourceLocation$$Type)
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.BellBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BellBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, bellBlockEntity3: $BellBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onHit"(direction0: $Direction$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, bellBlockEntity3: $BellBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "clickDirection"(): $Direction
set "clickDirection"(value: $Direction$$Type)
get "shaking"(): boolean
set "shaking"(value: boolean)
get "ticks"(): integer
set "ticks"(value: integer)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.BaseContainerBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $LockCode, $LockCode$$Type } from "net.minecraft.world.LockCode"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $Optional } from "java.util.Optional"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BaseContainerBlockEntity extends $BlockEntity implements $Container, $MenuProvider, $Nameable {
public "asContainer"(): $Container
public "canOpen"(player0: $Player$$Type): boolean
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "canUnlock"(player0: $Player$$Type, lockCode1: $LockCode$$Type, component2: $Component$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public "getName"(): $Component
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$fpp000$getCapability"(capability0: $Capability$$Type, direction1: $Direction$$Type, callbackInfoReturnable2: $CallbackInfoReturnable$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setCustomName"(component0: $Component$$Type): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "lockKey"(): $LockCode
set "lockKey"(value: $LockCode$$Type)
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "customName"(): $Component
get "displayName"(): $Component
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "name"(): $Component
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "customName"(value: $Component$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $StackedContentsCompatible } from "net.minecraft.world.inventory.StackedContentsCompatible"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Map, $Map$$Type } from "java.util.Map"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $RecipeHolder } from "net.minecraft.world.inventory.RecipeHolder"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $AccessorAbstractFurnaceBlockEntity } from "com.illusivesoulworks.polymorph.mixin.core.AccessorAbstractFurnaceBlockEntity"
import { $SpecialLogicInventory } from "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory"
import { $WorldlyContainer } from "net.minecraft.world.WorldlyContainer"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ItemLike$$Type } from "net.minecraft.world.level.ItemLike"
import { $StackedContents$$Type } from "net.minecraft.world.entity.player.StackedContents"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Recipe, $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BaseContainerBlockEntity } from "net.minecraft.world.level.block.entity.BaseContainerBlockEntity"

export class $AbstractFurnaceBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer, $RecipeHolder, $StackedContentsCompatible, $AccessorAbstractFurnaceBlockEntity, $SpecialLogicInventory {
static readonly "BURN_COOL_SPEED": integer
static readonly "BURN_TIME_STANDARD": integer
static readonly "DATA_COOKING_PROGRESS": integer
static readonly "DATA_COOKING_TOTAL_TIME": integer
static readonly "DATA_LIT_DURATION": integer
static readonly "DATA_LIT_TIME": integer
static readonly "NUM_DATA_VALUES": integer

public static "add"(map0: $Map$$Type<$Item$$Type, integer>, itemLike1: $ItemLike$$Type, int2: integer): void
public static "add"(map0: $Map$$Type<$Item$$Type, integer>, tagKey1: $TagKey$$Type<$Item$$Type>, int2: integer): void
public "asContainer"(): $Container
public "awardUsedRecipes"(player0: $Player$$Type, list1: $List$$Type<$ItemStack$$Type>): void
public "awardUsedRecipesAndPopExperience"(serverPlayer0: $ServerPlayer$$Type): void
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onFinalCommit"(slot: integer, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): void
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "fabric_setSuppress"(suppress: boolean): void
public "fillStackedContents"(stackedContents0: $StackedContents$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
/** @deprecated */
public static "getFuel"(): $Map<$Item, integer>
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRecipeUsed"(): $Recipe<any>
public "getRecipesToAwardAndPopExperience"(serverLevel0: $ServerLevel$$Type, vec31: $Vec3$$Type): $List<$Recipe<any>>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$gmn000$setStackSuppressUpdate"(slot: integer, stack: $ItemStack$$Type, ci: $CallbackInfo$$Type): void
public "handler$hgl000$onDropExperience"(player: $ServerPlayer$$Type, ci: $CallbackInfo$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public static "isFuel"(itemStack0: $ItemStack$$Type): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, abstractFurnaceBlockEntity3: $AbstractFurnaceBlockEntity$$Type): void
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setRecipeUsed"(recipe0: $Recipe$$Type<any>): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "cookingProgress"(): integer
set "cookingProgress"(value: integer)
get "cookingTotalTime"(): integer
set "cookingTotalTime"(value: integer)
get "litTime"(): integer
set "litTime"(value: integer)
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "recipeUsed"(): $Recipe<any>
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
set "recipeUsed"(value: $Recipe$$Type<any>)
}
}

declare module "net.minecraft.world.level.block.entity.Hopper" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Set$$Type } from "java.util.Set"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $List } from "java.util.List"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export interface $Hopper extends $Container {
"asContainer"(): $Container
"canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
"canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
"clear"(): void
"clear"(ingredient: $Ingredient$$Type): void
"clearContent"(): void
"count"(ingredient: $Ingredient$$Type): integer
"count"(): integer
"countItem"(item0: $Item$$Type): integer
"countNonEmpty"(): integer
"countNonEmpty"(ingredient: $Ingredient$$Type): integer
"extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
"find"(): integer
"find"(ingredient: $Ingredient$$Type): integer
"getAllItems"(): $List<$ItemStack>
"getBlock"(level: $Level$$Type): $BlockContainerJS
"getContainerSize"(): integer
"getHeight"(): integer
"getItem"(int0: integer): $ItemStack
"getLevelX"(): double
"getLevelY"(): double
"getLevelZ"(): double
"getMaxStackSize"(): integer
"getSlotLimit"(slot: integer): integer
"getSlots"(): integer
"getStackInSlot"(slot: integer): $ItemStack
"getSuckShape"(): $VoxelShape
"getWidth"(): integer
"hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
"hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
"insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
"isEmpty"(): boolean
"isEmpty"(): boolean
"isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
"isMutable"(): boolean
"kjs$self"(): $Container
"removeItem"(int0: integer, int1: integer): $ItemStack
"removeItemNoUpdate"(int0: integer): $ItemStack
"setChanged"(): void
"setChanged"(): void
"setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
"setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
"startOpen"(player0: $Player$$Type): void
"stillValid"(player0: $Player$$Type): boolean
"stopOpen"(player0: $Player$$Type): void
get "allItems"(): $List<$ItemStack>
get "containerSize"(): integer
get "height"(): integer
get "levelX"(): double
get "levelY"(): double
get "levelZ"(): double
get "maxStackSize"(): integer
get "slots"(): integer
get "suckShape"(): $VoxelShape
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}

export namespace $Hopper {
const ABOVE: $VoxelShape
const INSIDE: $VoxelShape
const SUCK: $VoxelShape
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
function stillValidBlockEntity(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
function stillValidBlockEntity(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
function tryClear(object0: any): void
}
export abstract class $Hopper$$Static implements $Hopper {
static readonly "ABOVE": $VoxelShape
static readonly "INSIDE": $VoxelShape
static readonly "SUCK": $VoxelShape

static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
static "tryClear"(object0: any): void
}
}

declare module "net.minecraft.world.level.block.entity.BlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $TrackedDataKey$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Team } from "net.minecraft.world.scores.Team"
import { $ClientGamePacketListener } from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import { $Pose } from "net.minecraft.world.entity.Pose"
import { $Map } from "java.util.Map"
import { $AttachmentTargetImpl } from "net.fabricmc.fabric.impl.attachment.AttachmentTargetImpl"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Collection } from "java.util.Collection"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $LevelRenderer$$Type } from "net.minecraft.client.renderer.LevelRenderer"
import { $UUID } from "java.util.UUID"
import { $EMFEntity } from "traben.entity_model_features.utils.EMFEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $ETFEntity } from "traben.entity_texture_features.utils.ETFEntity"
import { $BlockEntityType, $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $DynamicLightSource } from "toni.sodiumdynamiclights.DynamicLightSource"
import { $Optional } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level, $Level$$Type } from "net.minecraft.world.level.Level"
import { $IForgeBlockEntity } from "net.minecraftforge.common.extensions.IForgeBlockEntity"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $BlockState, $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $CrashReportCategory$$Type } from "net.minecraft.CrashReportCategory"
import { $AzAnimator, $AzAnimator$$Type } from "mod.azure.azurelib.animation.AzAnimator"
import { $RenderAttachmentBlockEntity } from "net.fabricmc.fabric.api.rendering.data.v1.RenderAttachmentBlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Iterable } from "java.lang.Iterable"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Object2FloatOpenHashMap } from "it.unimi.dsi.fastutil.objects.Object2FloatOpenHashMap"
import { $CapabilityProvider } from "net.minecraftforge.common.capabilities.CapabilityProvider"
import { $Component } from "net.minecraft.network.chat.Component"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $RenderDataBlockEntity } from "net.fabricmc.fabric.api.blockview.v2.RenderDataBlockEntity"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $Cullable } from "dev.tr7zw.entityculling.versionless.access.Cullable"

export class $BlockEntity extends $CapabilityProvider<$BlockEntity> implements $IForgeBlockEntity, $RenderDataBlockEntity, $RenderAttachmentBlockEntity, $Cullable, $AttachmentTargetImpl, $DynamicLightSource, $EMFEntity, $ETFEntity, $TrackedDataContainer, $AzAnimatorAccessor {
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public static "addEntityType"(compoundTag0: $CompoundTag$$Type, blockEntityType1: $BlockEntityType$$Type<any>): void
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clearRemoved"(): void
public "dataAnchor$createTrackedData"(): void
public "dataAnchor$getTrackedData"(key: $TrackedDataKey$$Type): $Optional
public "dataAnchor$getTrackedDataKeys"(): $Collection
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "emf$age"(): float
public "emf$getPitch"(): float
public "emf$getTypeString"(): string
public "emf$getVariableMap"(): $Object2FloatOpenHashMap
public "emf$getVelocity"(): $Vec3
public "emf$getX"(): double
public "emf$getY"(): double
public "emf$getYaw"(): float
public "emf$getZ"(): double
public "emf$hasPassengers"(): boolean
public "emf$hasVehicle"(): boolean
public "emf$isAlive"(): boolean
public "emf$isGlowing"(): boolean
public "emf$isInLava"(): boolean
public "emf$isInvisible"(): boolean
public "emf$isOnFire"(): boolean
public "emf$isOnGround"(): boolean
public "emf$isSneaking"(): boolean
public "emf$isSprinting"(): boolean
public "emf$isTouchingWater"(): boolean
public "emf$isWet"(): boolean
public "emf$prevPitch"(): float
public "emf$prevX"(): double
public "emf$prevY"(): double
public "emf$prevZ"(): double
public "etf$canBeBright"(): boolean
public "etf$distanceTo"(entity: $Entity$$Type): float
public "etf$getArmorItems"(): $Iterable
public "etf$getBlockPos"(): $BlockPos
public "etf$getBlockY"(): integer
public "etf$getCustomName"(): $Component
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "etf$getEntityKey"(): string
public "etf$getHandItems"(): $Iterable
public "etf$getItemsEquipped"(): $Iterable
public "etf$getNbt"(): $CompoundTag
public "etf$getOptifineId"(): integer
public "etf$getOptifineVehicleId"(): integer
public "etf$getPose"(): $Pose
public "etf$getScoreboardTeam"(): $Team
public "etf$getType"(): $EntityType
public "etf$getUuid"(): $UUID
public "etf$getVelocity"(): $Vec3
public "etf$getWorld"(): $Level
public "etf$hasCustomName"(): boolean
public "etf$isBlockEntity"(): boolean
public "fabric_getAttachments"(): $Map
public "fabric_hasPersistentAttachments"(): boolean
public "fabric_readAttachmentsFromNbt"(nbt: $CompoundTag$$Type): void
public "fabric_writeAttachmentsToNbt"(nbt: $CompoundTag$$Type): void
public "fillCrashReportCategory"(crashReportCategory0: $CrashReportCategory$$Type): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAnimatorOrNull"(): $AzAnimator
public "getAttached"(type: $AttachmentType$$Type): any
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getLevel"(): $Level
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getPersistentData"(): $CompoundTag
public static "getPosFromTag"(compoundTag0: $CompoundTag$$Type): $BlockPos
public "getRenderAttachmentData"(): any
public "getRenderBoundingBox"(): $AABB
public "getRenderData"(): any
public "getType"(): $BlockEntityType<any>
public "getUpdatePacket"(): $Packet<$ClientGamePacketListener>
public "getUpdateTag"(): $CompoundTag
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAttached"(type: $AttachmentType$$Type): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasLevel"(): boolean
public "isCulled"(): boolean
public "isForcedVisible"(): boolean
public "isOutOfCamera"(): boolean
public "isRemoved"(): boolean
public "load"(compoundTag0: $CompoundTag$$Type): void
public static "loadStatic"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, compoundTag2: $CompoundTag$$Type): $BlockEntity
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onChunkUnloaded"(): void
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "onlyOpCanSetNbt"(): boolean
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "saveToItem"(itemStack0: $ItemStack$$Type): void
public "saveWithFullMetadata"(): $CompoundTag
public "saveWithId"(): $CompoundTag
public "saveWithoutMetadata"(): $CompoundTag
public "sdl$dynamicLightTick"(): void
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$getLuminance"(): integer
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$resetDynamicLight"(): void
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "sdl$shouldUpdateDynamicLight"(): boolean
public "setAnimator"(azAnimator0: $AzAnimator$$Type): void
public "setAttached"(type: $AttachmentType$$Type, value: any): any
/** @deprecated */
public "setBlockState"(blockState0: $BlockState$$Type): void
public "setChanged"(): void
public "setCulled"(value: boolean): void
public "setLevel"(level0: $Level$$Type): void
public "setOutOfCamera"(value: boolean): void
public "setRemoved"(): void
public "setTimeout"(): void
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(renderer: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(renderer: $LevelRenderer$$Type): boolean
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "triggerEvent"(int0: integer, int1: integer): boolean
get "blockState"(): $BlockState
set "blockState"(value: $BlockState$$Type)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "animatorOrNull"(): $AzAnimator
get "blockPos"(): $BlockPos
get "level"(): $Level
get "modelData"(): $ModelData
get "persistentData"(): $CompoundTag
get "renderAttachmentData"(): any
get "renderBoundingBox"(): $AABB
get "renderData"(): any
get "type"(): $BlockEntityType<any>
get "updatePacket"(): $Packet<$ClientGamePacketListener>
get "updateTag"(): $CompoundTag
get "culled"(): boolean
get "forcedVisible"(): boolean
get "outOfCamera"(): boolean
get "removed"(): boolean
set "animator"(value: $AzAnimator$$Type)
set "culled"(value: boolean)
set "level"(value: $Level$$Type)
set "outOfCamera"(value: boolean)
}
}

declare module "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $DecoratedPotBlockEntity$Decorations } from "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity$Decorations"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"

export class $DecoratedPotBlockEntity extends $BlockEntity {
static readonly "TAG_SHERDS": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDecorations"(): $DecoratedPotBlockEntity$Decorations
public "getDirection"(): $Direction
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setFromItem"(itemStack0: $ItemStack$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "decorations"(): $DecoratedPotBlockEntity$Decorations
get "direction"(): $Direction
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "fromItem"(value: $ItemStack$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.SmokerBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AbstractFurnaceBlockEntity } from "net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SmokerBlockEntity extends $AbstractFurnaceBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.SignBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $SignText, $SignText$$Type } from "net.minecraft.world.level.block.entity.SignText"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $FilteredText$$Type } from "net.minecraft.server.network.FilteredText"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List$$Type } from "java.util.List"
import { $AccessorSignBlockEntity } from "net.darkhax.bookshelf.mixin.accessors.block.entity.AccessorSignBlockEntity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SignBlockEntity extends $BlockEntity implements $AccessorSignBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockEntityType0: $BlockEntityType$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public "canExecuteClickCommands"(boolean0: boolean, player1: $Player$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "executeClickCommandsIfPresent"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, boolean3: boolean): boolean
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBackText"(): $SignText
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getFrontText"(): $SignText
public "getMaxTextLineWidth"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getPlayerWhoMayEdit"(): $UUID
public "getRenderBoundingBox"(): $AABB
public "getText"(boolean0: boolean): $SignText
public "getTextFacingPlayer"(player0: $Player$$Type): $SignText
public "getTextLineHeight"(): integer
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isFacingFrontText"(player0: $Player$$Type): boolean
public "isWaxed"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "playerIsTooFarAwayToEdit"(uUID0: $UUID$$Type): boolean
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAllowedPlayerEditor"(uUID0: $UUID$$Type): void
public "setText"(signText0: $SignText$$Type, boolean1: boolean): boolean
public "setWaxed"(boolean0: boolean): boolean
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, signBlockEntity3: $SignBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "updateSignText"(player0: $Player$$Type, boolean1: boolean, list2: $List$$Type<$FilteredText$$Type>): void
public "updateText"(unaryOperator0: $UnaryOperator$$Type<$SignText$$Type>, boolean1: boolean): boolean
get "animator"(): $Optional<$AzAnimator<K, T>>
get "backText"(): $SignText
get "frontText"(): $SignText
get "maxTextLineWidth"(): integer
get "modelData"(): $ModelData
get "playerWhoMayEdit"(): $UUID
get "renderBoundingBox"(): $AABB
get "textLineHeight"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "waxed"(): boolean
set "allowedPlayerEditor"(value: $UUID$$Type)
set "waxed"(value: boolean)
}
}

declare module "net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AbstractFurnaceBlockEntity } from "net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BlastFurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.ChestLidController" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChestLidController {
constructor()

public "getOpenness"(float0: float): float
public "shouldBeOpen"(boolean0: boolean): void
public "tickLid"(): void
}
}

declare module "net.minecraft.world.level.block.entity.ComparatorBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $ComparatorBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getOutputSignal"(): integer
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setOutputSignal"(int0: integer): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "outputSignal"(): integer
get "renderBoundingBox"(): $AABB
set "outputSignal"(value: integer)
}
}

declare module "net.minecraft.world.level.block.entity.ConduitBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $ConduitBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, conduitBlockEntity3: $ConduitBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getActiveRotation"(float0: float): float
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isActive"(): boolean
public "isHunting"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, conduitBlockEntity3: $ConduitBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "tickCount"(): integer
set "tickCount"(value: integer)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "active"(): boolean
get "hunting"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.HangingSignBlockEntity" {
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockEntityType$$Type } from "net.minecraft.world.level.block.entity.BlockEntityType"
import { $Optional } from "java.util.Optional"
import { $SignBlockEntity } from "net.minecraft.world.level.block.entity.SignBlockEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $HangingSignBlockEntity extends $SignBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockEntityType0: $BlockEntityType$$Type<any>, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
}
}

declare module "net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType" {
import { $Enum } from "java.lang.Enum"

export class $StructureBlockEntity$UpdateType extends $Enum<$StructureBlockEntity$UpdateType> {
static readonly "LOAD_AREA": $StructureBlockEntity$UpdateType
static readonly "SAVE_AREA": $StructureBlockEntity$UpdateType
static readonly "SCAN_AREA": $StructureBlockEntity$UpdateType
static readonly "UPDATE_DATA": $StructureBlockEntity$UpdateType

public static "valueOf"(string0: string): $StructureBlockEntity$UpdateType
public static "values"(): $StructureBlockEntity$UpdateType[]
}
}

declare module "net.minecraft.world.level.block.entity.HopperBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $RandomizableContainerBlockEntity } from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $Hopper, $Hopper$$Type } from "net.minecraft.world.level.block.entity.Hopper"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $ItemEntity, $ItemEntity$$Type } from "net.minecraft.world.entity.item.ItemEntity"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $VoxelShape } from "net.minecraft.world.phys.shapes.VoxelShape"

export class $HopperBlockEntity extends $RandomizableContainerBlockEntity implements $Hopper {
static readonly "HOPPER_CONTAINER_SIZE": integer
static readonly "MOVE_ITEM_SPEED": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "addItem"(container0: $Container$$Type, itemEntity1: $ItemEntity$$Type): boolean
public static "addItem"(container0: $Container$$Type, container1: $Container$$Type, itemStack2: $ItemStack$$Type, direction3: $Direction$$Type): $ItemStack
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public static "entityInside"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, entity3: $Entity$$Type, hopperBlockEntity4: $HopperBlockEntity$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getContainerAt"(level0: $Level$$Type, blockPos1: $BlockPos$$Type): $Container
public "getContainerSize"(): integer
public "getHeight"(): integer
public static "getItemsAtAndAbove"(level0: $Level$$Type, hopper1: $Hopper$$Type): $List<$ItemEntity>
public "getLastUpdateTime"(): long
public "getLevelX"(): double
public "getLevelY"(): double
public "getLevelZ"(): double
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getSuckShape"(): $VoxelShape
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "isOnCustomCooldown"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "pushItemsTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, hopperBlockEntity3: $HopperBlockEntity$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setCooldown"(int0: integer): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "suckInItems"(level0: $Level$$Type, hopper1: $Hopper$$Type): boolean
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "lastUpdateTime"(): long
get "levelX"(): double
get "levelY"(): double
get "levelZ"(): double
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "suckShape"(): $VoxelShape
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
get "onCustomCooldown"(): boolean
set "cooldown"(value: integer)
}
}

declare module "net.minecraft.world.level.block.entity.ChestBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $RandomizableContainerBlockEntity } from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $BlockGetter$$Type } from "net.minecraft.world.level.BlockGetter"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $LidBlockEntity } from "net.minecraft.world.level.block.entity.LidBlockEntity"
import { $AccessorChestBlockEntity } from "com.leclowndu93150.particular.mixin.AccessorChestBlockEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ChestBlockEntity extends $RandomizableContainerBlockEntity implements $LidBlockEntity, $AccessorChestBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOpenCount"(blockGetter0: $BlockGetter$$Type, blockPos1: $BlockPos$$Type): integer
public "getOpenNess"(float0: float): float
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "lidAnimateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, chestBlockEntity3: $ChestBlockEntity$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "recheckOpen"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "swapContents"(chestBlockEntity0: $ChestBlockEntity$$Type, chestBlockEntity1: $ChestBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityType$BlockEntitySupplier<T extends $BlockEntity = $BlockEntity> {
"create"(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type): T
}

export namespace $BlockEntityType$BlockEntitySupplier {
const probejs$$marker: never
}
export abstract class $BlockEntityType$BlockEntitySupplier$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityType$BlockEntitySupplier<T> {
}
}

declare module "net.minecraft.world.level.block.entity.DaylightDetectorBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $DaylightDetectorBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.ContainerOpenersCounter" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $InvokerViewerCountManager } from "com.leclowndu93150.particular.mixin.InvokerViewerCountManager"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $ContainerOpenersCounter implements $InvokerViewerCountManager {
constructor()

public "decrementOpeners"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "getOpenerCount"(): integer
public "incrementOpeners"(player0: $Player$$Type, level1: $Level$$Type, blockPos2: $BlockPos$$Type, blockState3: $BlockState$$Type): void
public "recheckOpeners"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type): void
get "openerCount"(): integer
}
}

declare module "net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $TheEndPortalBlockEntity } from "net.minecraft.world.level.block.entity.TheEndPortalBlockEntity"

export class $TheEndGatewayBlockEntity extends $TheEndPortalBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "beamAnimationTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, theEndGatewayBlockEntity3: $TheEndGatewayBlockEntity$$Type): void
public static "canEntityTeleport"(entity0: $Entity$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCooldownPercent"(float0: float): float
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getParticleAmount"(): integer
public "getRenderBoundingBox"(): $AABB
public "getSpawnPercent"(float0: float): float
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isCoolingDown"(): boolean
public "isSpawning"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setExitPosition"(blockPos0: $BlockPos$$Type, boolean1: boolean): void
public static "teleportEntity"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, entity3: $Entity$$Type, theEndGatewayBlockEntity4: $TheEndGatewayBlockEntity$$Type): void
public static "teleportTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, theEndGatewayBlockEntity3: $TheEndGatewayBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "particleAmount"(): integer
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "coolingDown"(): boolean
get "spawning"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.SignText" {
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $FormattedCharSequence } from "net.minecraft.util.FormattedCharSequence"
import { $Function$$Type } from "java.util.function.Function"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"

export class $SignText {
static readonly "DIRECT_CODEC": $Codec<$SignText>
static readonly "LINES": integer

constructor()
constructor(component0s: $Component$$Type[], component1s: $Component$$Type[], dyeColor2: $DyeColor$$Type, boolean3: boolean)

public "getColor"(): $DyeColor
public "getMessage"(int0: integer, boolean1: boolean): $Component
public "getMessages"(boolean0: boolean): $Component[]
public "getRenderMessages"(boolean0: boolean, function1: $Function$$Type<$Component$$Type, $FormattedCharSequence>): $FormattedCharSequence[]
public "hasAnyClickCommands"(player0: $Player$$Type): boolean
public "hasGlowingText"(): boolean
public "hasMessage"(player0: $Player$$Type): boolean
public "setColor"(dyeColor0: $DyeColor$$Type): $SignText
public "setHasGlowingText"(boolean0: boolean): $SignText
public "setMessage"(int0: integer, component1: $Component$$Type, component2: $Component$$Type): $SignText
public "setMessage"(int0: integer, component1: $Component$$Type): $SignText
get "color"(): $DyeColor
set "color"(value: $DyeColor$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.BeaconBlockEntity" {
import { $BeaconBlockEntity$BeaconBeamSection, $BeaconBlockEntity$BeaconBeamSection$$Type } from "net.minecraft.world.level.block.entity.BeaconBlockEntity$BeaconBeamSection"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List, $List$$Type } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $Optional } from "java.util.Optional"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $MobEffect } from "net.minecraft.world.effect.MobEffect"

export class $BeaconBlockEntity extends $BlockEntity implements $MenuProvider, $Nameable {
static readonly "BEACON_EFFECTS": $MobEffect[][]
static readonly "DATA_LEVELS": integer
static readonly "DATA_PRIMARY": integer
static readonly "DATA_SECONDARY": integer
static readonly "NUM_DATA_VALUES": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBeamSections"(): $List<$BeaconBlockEntity$BeaconBeamSection>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public "getName"(): $Component
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "playSound"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, soundEvent2: $SoundEvent$$Type): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setCustomName"(component0: $Component$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, beaconBlockEntity3: $BeaconBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "checkingBeamSections"(): $List<$BeaconBlockEntity$BeaconBeamSection>
set "checkingBeamSections"(value: $List$$Type<$BeaconBlockEntity$BeaconBeamSection$$Type>)
get "lastCheckY"(): integer
set "lastCheckY"(value: integer)
get "levels"(): integer
set "levels"(value: integer)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "beamSections"(): $List<$BeaconBlockEntity$BeaconBeamSection>
get "customName"(): $Component
get "displayName"(): $Component
get "modelData"(): $ModelData
get "name"(): $Component
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "customName"(value: $Component$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.TheEndPortalBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $TheEndPortalBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "shouldRenderFace"(direction0: $Direction$$Type): boolean
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.SculkCatalystBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $SculkCatalystBlockEntity$CatalystListener } from "net.minecraft.world.level.block.entity.SculkCatalystBlockEntity$CatalystListener"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $GameEventListener$Holder } from "net.minecraft.world.level.gameevent.GameEventListener$Holder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SculkCatalystBlockEntity extends $BlockEntity implements $GameEventListener$Holder<$SculkCatalystBlockEntity$CatalystListener> {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getListener"(): $SculkCatalystBlockEntity$CatalystListener
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, sculkCatalystBlockEntity3: $SculkCatalystBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "listener"(): $SculkCatalystBlockEntity$CatalystListener
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity" {
import { $SculkSensorBlockEntity } from "net.minecraft.world.level.block.entity.SculkSensorBlockEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $CalibratedSculkSensorBlockEntity extends $SculkSensorBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public "getRenderBoundingBox"(): $AABB
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.SculkSensorBlockEntity" {
import { $VibrationSystem$Listener } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Listener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $VibrationSystem$Data } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Data"
import { $VibrationSystem } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $GameEventListener$Holder } from "net.minecraft.world.level.gameevent.GameEventListener$Holder"
import { $VibrationSystem$User } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$User"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"

export class $SculkSensorBlockEntity extends $BlockEntity implements $GameEventListener$Holder<$VibrationSystem$Listener>, $VibrationSystem {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "createVibrationUser"(): $VibrationSystem$User
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getLastVibrationFrequency"(): integer
public "getListener"(): $VibrationSystem$Listener
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public "getRenderBoundingBox"(): $AABB
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "getVibrationData"(): $VibrationSystem$Data
public "getVibrationUser"(): $VibrationSystem$User
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setLastVibrationFrequency"(int0: integer): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "lastVibrationFrequency"(): integer
get "listener"(): $VibrationSystem$Listener
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
set "lastVibrationFrequency"(value: integer)
}
}

declare module "net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType" {
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $Component } from "net.minecraft.network.chat.Component"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $Optional } from "java.util.Optional"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $JigsawBlockEntity$JointType extends $Enum<$JigsawBlockEntity$JointType> implements $StringRepresentable {
static readonly "ALIGNED": $JigsawBlockEntity$JointType
static readonly "ROLLABLE": $JigsawBlockEntity$JointType

public static "byName"(string0: string): $Optional<$JigsawBlockEntity$JointType>
public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public "getTranslatedName"(): $Component
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $JigsawBlockEntity$JointType
public static "values"(): $JigsawBlockEntity$JointType[]
get "serializedName"(): string
get "translatedName"(): $Component
}
}

declare module "net.minecraft.world.level.block.entity.JigsawBlockEntity" {
import { $ResourceLocation, $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $StructureTemplatePool } from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $JigsawBlockEntity$JointType, $JigsawBlockEntity$JointType$$Type } from "net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $ResourceKey, $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"

export class $JigsawBlockEntity extends $BlockEntity {
static readonly "FINAL_STATE": string
static readonly "JOINT": string
static readonly "NAME": string
static readonly "POOL": string
static readonly "TARGET": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "generate"(serverLevel0: $ServerLevel$$Type, int1: integer, boolean2: boolean): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getFinalState"(): string
public "getJoint"(): $JigsawBlockEntity$JointType
public "getModelData"(): $ModelData
public "getName"(): $ResourceLocation
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getPool"(): $ResourceKey<$StructureTemplatePool>
public "getRenderBoundingBox"(): $AABB
public "getTarget"(): $ResourceLocation
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setFinalState"(string0: string): void
public "setJoint"(jointType0: $JigsawBlockEntity$JointType$$Type): void
public "setName"(resourceLocation0: $ResourceLocation$$Type): void
public "setPool"(resourceKey0: $ResourceKey$$Type<$StructureTemplatePool>): void
public "setTarget"(resourceLocation0: $ResourceLocation$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "finalState"(): string
get "joint"(): $JigsawBlockEntity$JointType
get "modelData"(): $ModelData
get "name"(): $ResourceLocation
get "pool"(): $ResourceKey<$StructureTemplatePool>
get "renderBoundingBox"(): $AABB
get "target"(): $ResourceLocation
set "finalState"(value: string)
set "joint"(value: $JigsawBlockEntity$JointType$$Type)
set "name"(value: $ResourceLocation$$Type)
set "pool"(value: $ResourceKey$$Type<$StructureTemplatePool>)
set "target"(value: $ResourceLocation$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.BlockEntityTicker" {
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityTicker<T extends $BlockEntity = $BlockEntity> {
"tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, t3: T): void
}

export namespace $BlockEntityTicker {
const probejs$$marker: never
}
export abstract class $BlockEntityTicker$$Static<T extends $BlockEntity = $BlockEntity> implements $BlockEntityTicker<T> {
}
}

declare module "net.minecraft.world.level.block.entity.BannerBlockEntity" {
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $BannerPattern } from "net.minecraft.world.level.block.entity.BannerPattern"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Holder } from "net.minecraft.core.Holder"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $BannerBlockEntity extends $BlockEntity implements $Nameable {
static readonly "MAX_PATTERNS": integer
static readonly "TAG_COLOR": string
static readonly "TAG_PATTERN": string
static readonly "TAG_PATTERNS": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, dyeColor2: $DyeColor$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "createPatterns"(dyeColor0: $DyeColor$$Type, listTag1: $ListTag$$Type): $List<$Pair<$Holder<$BannerPattern>, $DyeColor>>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "fromItem"(itemStack0: $ItemStack$$Type, dyeColor1: $DyeColor$$Type): void
public "fromItem"(itemStack0: $ItemStack$$Type): void
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBaseColor"(): $DyeColor
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getItem"(): $ItemStack
public static "getItemPatterns"(itemStack0: $ItemStack$$Type): $ListTag
public "getModelData"(): $ModelData
public "getName"(): $Component
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public static "getPatternCount"(itemStack0: $ItemStack$$Type): integer
public "getPatterns"(): $List<$Pair<$Holder<$BannerPattern>, $DyeColor>>
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public static "removeLastPattern"(itemStack0: $ItemStack$$Type): void
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setCustomName"(component0: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "baseColor"(): $DyeColor
get "customName"(): $Component
get "displayName"(): $Component
get "item"(): $ItemStack
get "modelData"(): $ModelData
get "name"(): $Component
get "patterns"(): $List<$Pair<$Holder<$BannerPattern>, $DyeColor>>
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "customName"(value: $Component$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.TickingBlockEntity" {
import { $BlockPos } from "net.minecraft.core.BlockPos"

export interface $TickingBlockEntity {
"getPos"(): $BlockPos
"getType"(): string
"isRemoved"(): boolean
"tick"(): void
get "pos"(): $BlockPos
get "type"(): string
get "removed"(): boolean
}

export namespace $TickingBlockEntity {
const probejs$$marker: never
}
export abstract class $TickingBlockEntity$$Static implements $TickingBlockEntity {
}
}

declare module "net.minecraft.world.level.block.entity.BeehiveBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $BeehiveBlockEntity$BeeReleaseStatus$$Type } from "net.minecraft.world.level.block.entity.BeehiveBlockEntity$BeeReleaseStatus"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $ListTag } from "net.minecraft.nbt.ListTag"

export class $BeehiveBlockEntity extends $BlockEntity {
static readonly "BEES": string
static readonly "ENTITY_DATA": string
static readonly "HAS_NECTAR": string
static readonly "MAX_OCCUPANTS": integer
static readonly "MIN_OCCUPATION_TICKS": string
static readonly "MIN_OCCUPATION_TICKS_NECTARLESS": integer
static readonly "TAG_FLOWER_POS": string
static readonly "TICKS_IN_HIVE": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "addOccupant"(entity0: $Entity$$Type, boolean1: boolean): void
public "addOccupantWithPresetTicks"(entity0: $Entity$$Type, boolean1: boolean, int2: integer): void
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "emptyAllLivingFromHive"(player0: $Player$$Type, blockState1: $BlockState$$Type, beeReleaseStatus2: $BeehiveBlockEntity$BeeReleaseStatus$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getHoneyLevel"(blockState0: $BlockState$$Type): integer
public "getModelData"(): $ModelData
public "getOccupantCount"(): integer
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isEmpty"(): boolean
public "isFireNearby"(): boolean
public "isFull"(): boolean
public "isSedated"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, beehiveBlockEntity3: $BeehiveBlockEntity$$Type): void
public "storeBee"(compoundTag0: $CompoundTag$$Type, int1: integer, boolean2: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "writeBees"(): $ListTag
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "occupantCount"(): integer
get "renderBoundingBox"(): $AABB
get "empty"(): boolean
get "fireNearby"(): boolean
get "full"(): boolean
get "sedated"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.LecternBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AbstractContainerMenu } from "net.minecraft.world.inventory.AbstractContainerMenu"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Inventory$$Type } from "net.minecraft.world.entity.player.Inventory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Packet } from "net.minecraft.network.protocol.Packet"
import { $MenuProvider } from "net.minecraft.world.MenuProvider"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Clearable } from "net.minecraft.world.Clearable"

export class $LecternBlockEntity extends $BlockEntity implements $Clearable, $MenuProvider {
static readonly "DATA_PAGE": integer
static readonly "NUM_DATA": integer
static readonly "NUM_SLOTS": integer
static readonly "SLOT_BOOK": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clearContent"(): void
public "createMenu"(int0: integer, inventory1: $Inventory$$Type, player2: $Player$$Type): $AbstractContainerMenu
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBook"(): $ItemStack
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getPage"(): integer
public "getRedstoneSignal"(): integer
public "getRenderBoundingBox"(): $AABB
public "getUpdatePacket"(): $Packet
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasBook"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setBook"(itemStack0: $ItemStack$$Type, player1: $Player$$Type): void
public "setBook"(itemStack0: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "book"(): $ItemStack
get "displayName"(): $Component
get "modelData"(): $ModelData
get "page"(): integer
get "redstoneSignal"(): integer
get "renderBoundingBox"(): $AABB
get "updatePacket"(): $Packet
set "book"(value: $ItemStack$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.CommandBlockEntity$Mode" {
import { $Enum } from "java.lang.Enum"

export class $CommandBlockEntity$Mode extends $Enum<$CommandBlockEntity$Mode> {
static readonly "AUTO": $CommandBlockEntity$Mode
static readonly "REDSTONE": $CommandBlockEntity$Mode
static readonly "SEQUENCE": $CommandBlockEntity$Mode

public static "valueOf"(string0: string): $CommandBlockEntity$Mode
public static "values"(): $CommandBlockEntity$Mode[]
}
}

declare module "net.minecraft.world.level.block.entity.CommandBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $CommandBlockEntity$Mode } from "net.minecraft.world.level.block.entity.CommandBlockEntity$Mode"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $BaseCommandBlock } from "net.minecraft.world.level.BaseCommandBlock"

export class $CommandBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCommandBlock"(): $BaseCommandBlock
public "getMode"(): $CommandBlockEntity$Mode
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "isAutomatic"(): boolean
public "isConditional"(): boolean
public "isPowered"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "markConditionMet"(): boolean
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "onModeSwitch"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setAutomatic"(boolean0: boolean): void
public "setPowered"(boolean0: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "wasConditionMet"(): boolean
get "animator"(): $Optional<$AzAnimator<K, T>>
get "commandBlock"(): $BaseCommandBlock
get "mode"(): $CommandBlockEntity$Mode
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "automatic"(): boolean
get "conditional"(): boolean
get "powered"(): boolean
set "automatic"(value: boolean)
set "powered"(value: boolean)
}
}

declare module "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity" {
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $WorldlyContainer } from "net.minecraft.world.WorldlyContainer"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $RandomizableContainerBlockEntity } from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $ShulkerBoxBlockEntity$AnimationStatus } from "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity$AnimationStatus"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ShulkerBoxBlockEntity extends $RandomizableContainerBlockEntity implements $WorldlyContainer {
static readonly "COLUMNS": integer
static readonly "CONTAINER_SIZE": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "ITEMS_TAG": string
static readonly "MAX_LID_HEIGHT": float
static readonly "MAX_LID_ROTATION": float
static readonly "OPENING_TICK_LENGTH": integer
static readonly "ROWS": integer

constructor(dyeColor0: $DyeColor$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimationStatus"(): $ShulkerBoxBlockEntity$AnimationStatus
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getBoundingBox"(blockState0: $BlockState$$Type): $AABB
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getColor"(): $DyeColor
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getProgress"(float0: float): float
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isClosed"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public "loadFromTag"(compoundTag0: $CompoundTag$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "tick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, shulkerBoxBlockEntity3: $ShulkerBoxBlockEntity$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animationStatus"(): $ShulkerBoxBlockEntity$AnimationStatus
get "animator"(): $Optional<$AzAnimator<K, T>>
get "color"(): $DyeColor
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "closed"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.SpawnerBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BaseSpawner } from "net.minecraft.world.level.BaseSpawner"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $SpawnerBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "clientTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, spawnerBlockEntity3: $SpawnerBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSpawner"(): $BaseSpawner
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, spawnerBlockEntity3: $SpawnerBlockEntity$$Type): void
public "setEntityId"(entityType0: $EntityType$$Type<any>, randomSource1: $RandomSource$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "spawner"(): $BaseSpawner
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
}

declare module "net.minecraft.world.level.block.entity.EnchantmentTableBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Nameable } from "net.minecraft.world.Nameable"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $EnchantmentTableBlockEntity extends $BlockEntity implements $Nameable {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "bookAnimationTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, enchantmentTableBlockEntity3: $EnchantmentTableBlockEntity$$Type): void
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCustomName"(): $Component
public "getDisplayName"(): $Component
public "getModelData"(): $ModelData
public "getName"(): $Component
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setCustomName"(component0: $Component$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "flip"(): float
set "flip"(value: float)
get "flipA"(): float
set "flipA"(value: float)
get "flipT"(): float
set "flipT"(value: float)
get "oFlip"(): float
set "oFlip"(value: float)
get "oOpen"(): float
set "oOpen"(value: float)
get "oRot"(): float
set "oRot"(value: float)
get "open"(): float
set "open"(value: float)
get "rot"(): float
set "rot"(value: float)
get "tRot"(): float
set "tRot"(value: float)
get "time"(): integer
set "time"(value: integer)
get "animator"(): $Optional<$AzAnimator<K, T>>
get "customName"(): $Component
get "displayName"(): $Component
get "modelData"(): $ModelData
get "name"(): $Component
get "renderBoundingBox"(): $AABB
set "customName"(value: $Component$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.CampfireBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $CampfireCookingRecipe } from "net.minecraft.world.item.crafting.CampfireCookingRecipe"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $NonNullList } from "net.minecraft.core.NonNullList"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Clearable } from "net.minecraft.world.Clearable"

export class $CampfireBlockEntity extends $BlockEntity implements $Clearable {
readonly "cookingProgress": integer[]
readonly "cookingTime": integer[]

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clearContent"(): void
public static "cookTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, campfireBlockEntity3: $CampfireBlockEntity$$Type): void
public static "cooldownTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, campfireBlockEntity3: $CampfireBlockEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "dowse"(): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getCookableRecipe"(itemStack0: $ItemStack$$Type): $Optional<$CampfireCookingRecipe>
public "getItems"(): $NonNullList<$ItemStack>
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "particleTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, campfireBlockEntity3: $CampfireBlockEntity$$Type): void
public "placeFood"(entity0: $Entity$$Type, itemStack1: $ItemStack$$Type, int2: integer): boolean
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "items"(): $NonNullList<$ItemStack>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.DropperBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $DispenserBlockEntity } from "net.minecraft.world.level.block.entity.DispenserBlockEntity"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $DropperBlockEntity extends $DispenserBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity$AnimationStatus" {
import { $Enum } from "java.lang.Enum"

export class $ShulkerBoxBlockEntity$AnimationStatus extends $Enum<$ShulkerBoxBlockEntity$AnimationStatus> {
static readonly "CLOSED": $ShulkerBoxBlockEntity$AnimationStatus
static readonly "CLOSING": $ShulkerBoxBlockEntity$AnimationStatus
static readonly "OPENED": $ShulkerBoxBlockEntity$AnimationStatus
static readonly "OPENING": $ShulkerBoxBlockEntity$AnimationStatus

public static "valueOf"(string0: string): $ShulkerBoxBlockEntity$AnimationStatus
public static "values"(): $ShulkerBoxBlockEntity$AnimationStatus[]
}
}

declare module "net.minecraft.world.level.block.entity.SkullBlockEntity" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $GameProfile, $GameProfile$$Type } from "com.mojang.authlib.GameProfile"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Inventory } from "net.minecraft.world.entity.player.Inventory"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ETFPlayerEntity } from "traben.entity_texture_features.features.player.ETFPlayerEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $PlayerModelPart$$Type } from "net.minecraft.world.entity.player.PlayerModelPart"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Component } from "net.minecraft.network.chat.Component"
import { $Executor$$Type } from "java.util.concurrent.Executor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Services$$Type } from "net.minecraft.server.Services"

export class $SkullBlockEntity extends $BlockEntity implements $ETFPlayerEntity {
static readonly "TAG_NOTE_BLOCK_SOUND": string
static readonly "TAG_SKULL_OWNER": string

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "animation"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, skullBlockEntity3: $SkullBlockEntity$$Type): void
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "clear"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "etf$getEntity"(): $Entity
public "etf$getInventory"(): $Inventory
public "etf$getName"(): $Component
public "etf$getUuidAsString"(): string
public "etf$isPartVisible"(part: $PlayerModelPart$$Type): boolean
public "etf$isTeammate"(player: $Player$$Type): boolean
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimation"(float0: float): float
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getNoteBlockSound"(): $ResourceLocation
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getOwnerProfile"(): $GameProfile
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setOwner"(gameProfile0: $GameProfile$$Type): void
public static "setup"(services0: $Services$$Type, executor1: $Executor$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "updateGameprofile"(gameProfile0: $GameProfile$$Type, consumer1: $Consumer$$Type<$GameProfile$$Type>): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "noteBlockSound"(): $ResourceLocation
get "ownerProfile"(): $GameProfile
get "renderBoundingBox"(): $AABB
set "owner"(value: $GameProfile$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.SculkShriekerBlockEntity" {
import { $VibrationSystem$Listener } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Listener"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $GameEvent, $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $ServerPlayer, $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $VibrationSystem$Data } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$Data"
import { $VibrationSystem } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $GameEventListener$Holder } from "net.minecraft.world.level.gameevent.GameEventListener$Holder"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $VibrationSystem$User } from "net.minecraft.world.level.gameevent.vibrations.VibrationSystem$User"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"

export class $SculkShriekerBlockEntity extends $BlockEntity implements $GameEventListener$Holder<$VibrationSystem$Listener>, $VibrationSystem {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public static "getGameEventFrequency"(gameEvent0: $GameEvent$$Type): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public static "getRedstoneStrengthForDistance"(float0: float, int1: integer): integer
public "getRenderBoundingBox"(): $AABB
public static "getResonanceEventByFrequency"(int0: integer): $GameEvent
public "getVibrationData"(): $VibrationSystem$Data
public "getVibrationUser"(): $VibrationSystem$User
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryGetPlayer"(entity0: $Entity$$Type): $ServerPlayer
public "tryRespond"(serverLevel0: $ServerLevel$$Type): void
public "tryShriek"(serverLevel0: $ServerLevel$$Type, serverPlayer1: $ServerPlayer$$Type): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "vibrationData"(): $VibrationSystem$Data
get "vibrationUser"(): $VibrationSystem$User
}
}

declare module "net.minecraft.world.level.block.entity.BeehiveBlockEntity$BeeReleaseStatus" {
import { $Enum } from "java.lang.Enum"

export class $BeehiveBlockEntity$BeeReleaseStatus extends $Enum<$BeehiveBlockEntity$BeeReleaseStatus> {
static readonly "BEE_RELEASED": $BeehiveBlockEntity$BeeReleaseStatus
static readonly "EMERGENCY": $BeehiveBlockEntity$BeeReleaseStatus
static readonly "HONEY_DELIVERED": $BeehiveBlockEntity$BeeReleaseStatus

public static "valueOf"(string0: string): $BeehiveBlockEntity$BeeReleaseStatus
public static "values"(): $BeehiveBlockEntity$BeeReleaseStatus[]
}
}

declare module "net.minecraft.world.level.block.entity.BarrelBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $RandomizableContainerBlockEntity } from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $BarrelBlockEntity extends $RandomizableContainerBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "recheckOpen"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.BrewingStandBlockEntity" {
import { $WorldlyContainer } from "net.minecraft.world.WorldlyContainer"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $BaseContainerBlockEntity } from "net.minecraft.world.level.block.entity.BaseContainerBlockEntity"

export class $BrewingStandBlockEntity extends $BaseContainerBlockEntity implements $WorldlyContainer {
static readonly "DATA_BREW_TIME": integer
static readonly "DATA_FUEL_USES": integer
static readonly "FUEL_USES": integer
static readonly "NUM_DATA_VALUES": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canPlaceItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public "canTakeItemThroughFace"(int0: integer, itemStack1: $ItemStack$$Type, direction2: $Direction$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getSlotsForFace"(direction0: $Direction$$Type): integer[]
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public static "serverTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, brewingStandBlockEntity3: $BrewingStandBlockEntity$$Type): void
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "brewTime"(): integer
set "brewTime"(value: integer)
get "fuel"(): integer
set "fuel"(value: integer)
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.DecoratedPotBlockEntity$Decorations" {
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $Stream } from "java.util.stream.Stream"
import { $Item, $Item$$Type } from "net.minecraft.world.item.Item"
import { $Record } from "java.lang.Record"

export class $DecoratedPotBlockEntity$Decorations extends $Record {
static readonly "EMPTY": $DecoratedPotBlockEntity$Decorations

constructor(item0: $Item$$Type, item1: $Item$$Type, item2: $Item$$Type, item3: $Item$$Type)

public "back"(): $Item
public "front"(): $Item
public "left"(): $Item
public static "load"(compoundTag0: $CompoundTag$$Type): $DecoratedPotBlockEntity$Decorations
public "right"(): $Item
public "save"(compoundTag0: $CompoundTag$$Type): $CompoundTag
public "sorted"(): $Stream<$Item>
}
}

declare module "net.minecraft.world.level.block.entity.BrushableBlockEntity" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction, $Direction$$Type } from "net.minecraft.core.Direction"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack } from "net.minecraft.world.item.ItemStack"

export class $BrushableBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "brush"(long0: long, player1: $Player$$Type, direction2: $Direction$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "checkReset"(): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHitDirection"(): $Direction
public "getItem"(): $ItemStack
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setLootTable"(resourceLocation0: $ResourceLocation$$Type, long1: long): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "unpackLootTable"(player0: $Player$$Type): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "hitDirection"(): $Direction
get "item"(): $ItemStack
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.BedBlockEntity" {
import { $DyeColor, $DyeColor$$Type } from "net.minecraft.world.item.DyeColor"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $BedBlockEntity extends $BlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type, dyeColor2: $DyeColor$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getColor"(): $DyeColor
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setColor"(dyeColor0: $DyeColor$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "color"(): $DyeColor
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
set "color"(value: $DyeColor$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.TrappedChestBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $ChestBlockEntity } from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $TrappedChestBlockEntity extends $ChestBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.JukeboxBlockEntity" {
import { $SpecialLogicInventory } from "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $ContainerSingleItem } from "net.minecraft.world.ticks.ContainerSingleItem"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $Clearable } from "net.minecraft.world.Clearable"

export class $JukeboxBlockEntity extends $BlockEntity implements $Clearable, $ContainerSingleItem, $SpecialLogicInventory {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onFinalCommit"(slot: integer, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): void
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "fabric_setSuppress"(suppress: boolean): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getFirstItem"(): $ItemStack
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$iea002$load"(compoundTag0: $CompoundTag$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "isRecordPlaying"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public static "playRecordTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, jukeboxBlockEntity3: $JukeboxBlockEntity$$Type): void
public "popOutRecord"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeFirstItem"(): $ItemStack
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setFirstItem"(itemStack0: $ItemStack$$Type): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setRecordWithoutPlaying"(itemStack0: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "startPlaying"(): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "firstItem"(): $ItemStack
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
get "recordPlaying"(): boolean
set "firstItem"(value: $ItemStack$$Type)
set "recordWithoutPlaying"(value: $ItemStack$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.SculkCatalystBlockEntity$CatalystListener" {
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $GameEventListener$DeliveryMode } from "net.minecraft.world.level.gameevent.GameEventListener$DeliveryMode"
import { $GameEventListener } from "net.minecraft.world.level.gameevent.GameEventListener"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $GameEvent$$Type } from "net.minecraft.world.level.gameevent.GameEvent"
import { $GameEvent$Context$$Type } from "net.minecraft.world.level.gameevent.GameEvent$Context"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $PositionSource, $PositionSource$$Type } from "net.minecraft.world.level.gameevent.PositionSource"
import { $SculkSpreader } from "net.minecraft.world.level.block.SculkSpreader"

export class $SculkCatalystBlockEntity$CatalystListener implements $GameEventListener {
static readonly "PULSE_TICKS": integer

constructor(blockState0: $BlockState$$Type, positionSource1: $PositionSource$$Type)

public "getDeliveryMode"(): $GameEventListener$DeliveryMode
public "getListenerRadius"(): integer
public "getListenerSource"(): $PositionSource
public "getSculkSpreader"(): $SculkSpreader
public "handleGameEvent"(serverLevel0: $ServerLevel$$Type, gameEvent1: $GameEvent$$Type, context2: $GameEvent$Context$$Type, vec33: $Vec3$$Type): boolean
get "deliveryMode"(): $GameEventListener$DeliveryMode
get "listenerRadius"(): integer
get "listenerSource"(): $PositionSource
get "sculkSpreader"(): $SculkSpreader
}
}

declare module "net.minecraft.world.level.block.entity.DispenserBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $RandomizableContainerBlockEntity } from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $DispenserBlockEntityAccessor } from "net.mehvahdjukaar.moonlight.core.mixins.accessor.DispenserBlockEntityAccessor"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $DispenserBlockEntity extends $RandomizableContainerBlockEntity implements $DispenserBlockEntityAccessor {
static readonly "CONTAINER_SIZE": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "addItem"(itemStack0: $ItemStack$$Type): integer
public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRandomSlot"(randomSource0: $RandomSource$$Type): integer
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.EnderChestBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $LidBlockEntity } from "net.minecraft.world.level.block.entity.LidBlockEntity"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AccessorEnderChestBlockEntity } from "com.leclowndu93150.particular.mixin.AccessorEnderChestBlockEntity"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $EnderChestBlockEntity extends $BlockEntity implements $LidBlockEntity, $AccessorEnderChestBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getModelData"(): $ModelData
public "getOpenNess"(float0: float): float
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public static "lidAnimateTick"(level0: $Level$$Type, blockPos1: $BlockPos$$Type, blockState2: $BlockState$$Type, enderChestBlockEntity3: $EnderChestBlockEntity$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "recheckOpen"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
get "animator"(): $Optional<$AzAnimator<K, T>>
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
}
}

declare module "net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity" {
import { $SpecialLogicInventory } from "net.fabricmc.fabric.impl.transfer.item.SpecialLogicInventory"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Direction$$Type } from "net.minecraft.core.Direction"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity, $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $ChiseledBookShelfBlockEntity extends $BlockEntity implements $Container, $SpecialLogicInventory {
static readonly "MAX_BOOKS_IN_STORAGE": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canPlaceItem"(int0: integer, itemStack1: $ItemStack$$Type): boolean
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "clearContent"(): void
public "count"(): integer
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onFinalCommit"(slot: integer, oldStack: $ItemStack$$Type, newStack: $ItemStack$$Type): void
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "fabric_setSuppress"(suppress: boolean): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>, direction1: $Direction$$Type): $LazyOptional<T>
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getContainerSize"(): integer
public "getHeight"(): integer
public "getItem"(int0: integer): $ItemStack
public "getLastInteractedSlot"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "handler$gmp000$setStackBypass"(slot: integer, stack: $ItemStack$$Type, ci: $CallbackInfo$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "removeItem"(int0: integer, int1: integer): $ItemStack
public "removeItemNoUpdate"(int0: integer): $ItemStack
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setItem"(int0: integer, itemStack1: $ItemStack$$Type): void
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "startOpen"(player0: $Player$$Type): void
public "stillValid"(player0: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "containerSize"(): integer
get "height"(): integer
get "lastInteractedSlot"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.StructureBlockEntity" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $Rotation, $Rotation$$Type } from "net.minecraft.world.level.block.Rotation"
import { $Mirror, $Mirror$$Type } from "net.minecraft.world.level.block.Mirror"
import { $Vec3i, $Vec3i$$Type } from "net.minecraft.core.Vec3i"
import { $StructureTemplate$$Type } from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $RandomSource } from "net.minecraft.util.RandomSource"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $StructureMode, $StructureMode$$Type } from "net.minecraft.world.level.block.state.properties.StructureMode"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Optional } from "java.util.Optional"

export class $StructureBlockEntity extends $BlockEntity {
static readonly "AUTHOR_TAG": string
static readonly "MAX_OFFSET_PER_AXIS": integer
static readonly "MAX_SIZE_PER_AXIS": integer

constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public static "createRandom"(long0: long): $RandomSource
public "createdBy"(livingEntity0: $LivingEntity$$Type): void
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "detectSize"(): boolean
public "etf$getETFRenderState"(): $ETFEntityRenderState
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getIntegrity"(): float
public "getMetaData"(): string
public "getMirror"(): $Mirror
public "getMode"(): $StructureMode
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getRotation"(): $Rotation
public "getSeed"(): long
public "getShowAir"(): boolean
public "getShowBoundingBox"(): boolean
public "getStructureName"(): string
public "getStructurePath"(): string
public "getStructurePos"(): $BlockPos
public "getStructureSize"(): $Vec3i
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "hasStructureName"(): boolean
public "isIgnoreEntities"(): boolean
public "isPowered"(): boolean
public "isStructureLoadable"(): boolean
public "loadStructure"(serverLevel0: $ServerLevel$$Type): boolean
public "loadStructure"(serverLevel0: $ServerLevel$$Type, boolean1: boolean, structureTemplate2: $StructureTemplate$$Type): boolean
public "loadStructure"(serverLevel0: $ServerLevel$$Type, boolean1: boolean): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "saveStructure"(): boolean
public "saveStructure"(boolean0: boolean): boolean
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setIgnoreEntities"(boolean0: boolean): void
public "setIntegrity"(float0: float): void
public "setMetaData"(string0: string): void
public "setMirror"(mirror0: $Mirror$$Type): void
public "setMode"(structureMode0: $StructureMode$$Type): void
public "setPowered"(boolean0: boolean): void
public "setRotation"(rotation0: $Rotation$$Type): void
public "setSeed"(long0: long): void
public "setShowAir"(boolean0: boolean): void
public "setShowBoundingBox"(boolean0: boolean): void
public "setStructureName"(string0: string): void
public "setStructureName"(resourceLocation0: $ResourceLocation$$Type): void
public "setStructurePos"(blockPos0: $BlockPos$$Type): void
public "setStructureSize"(vec3i0: $Vec3i$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public "unloadStructure"(): void
public "usedBy"(player0: $Player$$Type): boolean
get "animator"(): $Optional<$AzAnimator<K, T>>
get "integrity"(): float
get "metaData"(): string
get "mirror"(): $Mirror
get "mode"(): $StructureMode
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "rotation"(): $Rotation
get "seed"(): long
get "showAir"(): boolean
get "showBoundingBox"(): boolean
get "structureName"(): string
get "structurePath"(): string
get "structurePos"(): $BlockPos
get "structureSize"(): $Vec3i
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "ignoreEntities"(): boolean
get "powered"(): boolean
get "structureLoadable"(): boolean
set "ignoreEntities"(value: boolean)
set "integrity"(value: float)
set "metaData"(value: string)
set "mirror"(value: $Mirror$$Type)
set "mode"(value: $StructureMode$$Type)
set "powered"(value: boolean)
set "rotation"(value: $Rotation$$Type)
set "seed"(value: long)
set "showAir"(value: boolean)
set "showBoundingBox"(value: boolean)
set "structureName"(value: string)
set "structureName"(value: $ResourceLocation$$Type)
set "structurePos"(value: $BlockPos$$Type)
set "structureSize"(value: $Vec3i$$Type)
}
}

declare module "net.minecraft.world.level.block.entity.FurnaceBlockEntity" {
import { $AABB } from "net.minecraft.world.phys.AABB"
import { $Item$$Type } from "net.minecraft.world.item.Item"
import { $Connection$$Type } from "net.minecraft.network.Connection"
import { $BlockState$$Type } from "net.minecraft.world.level.block.state.BlockState"
import { $AzAnimator } from "mod.azure.azurelib.animation.AzAnimator"
import { $UnaryOperator$$Type } from "java.util.function.UnaryOperator"
import { $AttachmentTarget$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentTarget"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $LazyOptional } from "net.minecraftforge.common.util.LazyOptional"
import { $TrackedData, $TrackedData$$Type } from "dev.corgitaco.dataanchor.data.TrackedData"
import { $BlockContainerJS } from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import { $ServerPlayer$$Type } from "net.minecraft.server.level.ServerPlayer"
import { $Container, $Container$$Type } from "net.minecraft.world.Container"
import { $TrackedDataRegistry$$Type } from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import { $AzAnimatorAccessor } from "mod.azure.azurelib.animation.AzAnimatorAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ETFEntityRenderState } from "traben.entity_texture_features.features.state.ETFEntityRenderState"
import { $TransactionContext$$Type } from "net.fabricmc.fabric.api.transfer.v1.transaction.TransactionContext"
import { $Set$$Type } from "java.util.Set"
import { $ClientboundBlockEntityDataPacket$$Type } from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import { $AttachmentType$$Type } from "net.fabricmc.fabric.api.attachment.v1.AttachmentType"
import { $ModelData } from "net.minecraftforge.client.model.data.ModelData"
import { $BlockEntity$$Type } from "net.minecraft.world.level.block.entity.BlockEntity"
import { $Capability$$Type } from "net.minecraftforge.common.capabilities.Capability"
import { $Player$$Type } from "net.minecraft.world.entity.player.Player"
import { $AbstractFurnaceBlockEntity } from "net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity"
import { $List } from "java.util.List"
import { $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $TrackedDataContainer } from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Recipe$$Type } from "net.minecraft.world.item.crafting.Recipe"
import { $Optional } from "java.util.Optional"
import { $ItemStack, $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FurnaceBlockEntity extends $AbstractFurnaceBlockEntity {
constructor(blockPos0: $BlockPos$$Type, blockState1: $BlockState$$Type)

public "asContainer"(): $Container
public "canTakeItem"(container0: $Container$$Type, int1: integer, itemStack2: $ItemStack$$Type): boolean
public static "cast"<K, T>(t0: T): $AzAnimatorAccessor<K, T>
public "clear"(): void
public "clear"(ingredient: $Ingredient$$Type): void
public "count"(ingredient: $Ingredient$$Type): integer
public "count"(): integer
public "countItem"(item0: $Item$$Type): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$$Type): integer
public "deserializeNBT"(compoundTag0: $CompoundTag$$Type): void
public "etf$getETFRenderState"(): $ETFEntityRenderState
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$$Type): integer
public static "get"<K, T>(t0: T): $Optional<$AzAnimator<K, T>>
public "getAllItems"(): $List<$ItemStack>
public "getAnimator"(): $Optional<$AzAnimator<K, T>>
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>): A
public "getAttachedOrCreate"<A>(type: $AttachmentType$$Type<A>, initializer: $Supplier$$Type<A>): A
public "getAttachedOrElse"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrGet"<A>(type: $AttachmentType$$Type<A>, defaultValue: $Supplier$$Type<A>): A
public "getAttachedOrSet"<A>(type: $AttachmentType$$Type<A>, defaultValue: A): A
public "getAttachedOrThrow"<A>(type: $AttachmentType$$Type<A>): A
public "getBlock"(level: $Level$$Type): $BlockContainerJS
public "getCapability"<T>(capability0: $Capability$$Type<T>): $LazyOptional<T>
public "getHeight"(): integer
public "getMaxStackSize"(): integer
public "getModelData"(): $ModelData
public static "getOrNull"<K, T>(t0: T): $AzAnimator<K, T>
public "getRenderBoundingBox"(): $AABB
public "getSlotLimit"(slot: integer): integer
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "getWidth"(): integer
public "handleUpdateTag"(compoundTag0: $CompoundTag$$Type): void
public "hasAnyMatching"(predicate0: $Predicate$$Type<$ItemStack$$Type>): boolean
public "hasAnyOf"(set0: $Set$$Type<$Item$$Type>): boolean
public "hasCustomName"(): boolean
public "hasCustomOutlineRendering"(player0: $Player$$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "isEmpty"(): boolean
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "isMutable"(): boolean
public "kjs$self"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean): $TrackedDataContainer<O, T>
public static "makeBasicContainer"<O, T extends $TrackedData<O>>(registry: $TrackedDataRegistry$$Type<O, T>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<O, T>
public "modifyAttached"<A>(type: $AttachmentType$$Type<A>, modifier: $UnaryOperator$$Type<A>): A
public "onDataPacket"(connection0: $Connection$$Type, clientboundBlockEntityDataPacket1: $ClientboundBlockEntityDataPacket$$Type): void
public "onLoad"(): void
public "removeAttached"<A>(type: $AttachmentType$$Type<A>): A
public "requestModelDataUpdate"(): void
public "sdl$isDynamicLightEnabled"(): boolean
public "sdl$setDynamicLightEnabled"(enabled: boolean): void
public "setChanged"(): void
public "setChanged"(): void
public "setRecipeUsed"(level0: $Level$$Type, serverPlayer1: $ServerPlayer$$Type, recipe2: $Recipe$$Type<any>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "shouldCloseCurrentScreen"(): boolean
public "startOpen"(player0: $Player$$Type): void
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type, double2: double): boolean
public static "stillValidBlockEntity"(blockEntity0: $BlockEntity$$Type, player1: $Player$$Type): boolean
public static "stillValidBlockEntity"(blockEntity: $BlockEntity$$Type, player: $Player$$Type, range: integer): boolean
public "stopOpen"(player0: $Player$$Type): void
public static "transfer"(original: $AttachmentTarget$$Type, target: $AttachmentTarget$$Type, isDeath: boolean): void
public static "tryClear"(object0: any): void
get "allItems"(): $List<$ItemStack>
get "animator"(): $Optional<$AzAnimator<K, T>>
get "height"(): integer
get "maxStackSize"(): integer
get "modelData"(): $ModelData
get "renderBoundingBox"(): $AABB
get "slots"(): integer
get "width"(): integer
get "empty"(): boolean
get "mutable"(): boolean
}
}

declare module "net.minecraft.world.level.block.entity.LidBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LidBlockEntity {
"getOpenNess"(float0: float): float
}

export namespace $LidBlockEntity {
const probejs$$marker: never
}
export abstract class $LidBlockEntity$$Static implements $LidBlockEntity {
}
}

declare module "net.minecraft.world.level.block.entity.BeaconBlockEntity$BeaconBeamSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BeaconBlockEntity$BeaconBeamSection {
constructor(float0s: float[])

public "getColor"(): float[]
public "getHeight"(): integer
get "height"(): integer
set "height"(value: integer)
get "color"(): float[]
}
}

