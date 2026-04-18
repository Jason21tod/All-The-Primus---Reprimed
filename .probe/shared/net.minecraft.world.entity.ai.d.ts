declare module "net.minecraft.world.entity.ai.sensing.TemptingSensor" {
import { $PathfinderMob, $PathfinderMob$$Type } from "net.minecraft.world.entity.PathfinderMob"
import { $AccessorTemptingSensor } from "org.violetmoon.quark.mixin.mixins.accessor.AccessorTemptingSensor"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"

export class $TemptingSensor extends $Sensor<$PathfinderMob> implements $AccessorTemptingSensor {
static readonly "TEMPTATION_RANGE": integer

constructor(ingredient0: $Ingredient$$Type)

public "modifyExpressionValue$icj000$quark$findTroughs"(object0: any, serverLevel1: $ServerLevel$$Type, pathfinderMob2: $PathfinderMob$$Type): any
}
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeMap" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $IAttributeManager } from "dev.shadowsoffire.attributeslib.util.IAttributeManager"
import { $AttributeSupplier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier"
import { $Collection } from "java.util.Collection"
import { $Set } from "java.util.Set"
import { $UUID$$Type } from "java.util.UUID"
import { $Multimap$$Type } from "com.google.common.collect.Multimap"
import { $IEntityOwned } from "dev.shadowsoffire.attributeslib.util.IEntityOwned"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Holder$$Type } from "net.minecraft.core.Holder"
import { $AttributeInstance, $AttributeInstance$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $ListTag, $ListTag$$Type } from "net.minecraft.nbt.ListTag"

export class $AttributeMap implements $IEntityOwned, $IAttributeManager {
constructor(attributeSupplier0: $AttributeSupplier$$Type)

public "addTransientAttributeModifiers"(multimap0: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>): void
public "areAttributesUpdating"(): boolean
public "assignValues"(attributeMap0: $AttributeMap$$Type): void
public "getBaseValue"(attribute0: $Attribute$$Type): double
public "getDirtyAttributes"(): $Set<$AttributeInstance>
public "getInstance"(attribute0: $Attribute$$Type): $AttributeInstance
public "getInstance"(holder0: $Holder$$Type<$Attribute$$Type>): $AttributeInstance
public "getModifierValue"(holder0: $Holder$$Type<$Attribute$$Type>, uUID1: $UUID$$Type): double
public "getModifierValue"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): double
public "getOwner"(): $LivingEntity
public "getSyncableAttributes"(): $Collection<$AttributeInstance>
public "getValue"(attribute0: $Attribute$$Type): double
public "handler$dcf000$apoth_attrModifiedEvent"(attributeInstance0: $AttributeInstance$$Type, callbackInfo1: $CallbackInfo$$Type): void
public "hasAttribute"(attribute0: $Attribute$$Type): boolean
public "hasAttribute"(holder0: $Holder$$Type<$Attribute$$Type>): boolean
public "hasModifier"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): boolean
public "hasModifier"(holder0: $Holder$$Type<$Attribute$$Type>, uUID1: $UUID$$Type): boolean
public "load"(listTag0: $ListTag$$Type): void
public "removeAttributeModifiers"(multimap0: $Multimap$$Type<$Attribute$$Type, $AttributeModifier$$Type>): void
public "save"(): $ListTag
public "setAttributesUpdating"(boolean0: boolean): void
public "setOwner"(livingEntity0: $LivingEntity$$Type): void
get "dirtyAttributes"(): $Set<$AttributeInstance>
get "owner"(): $LivingEntity
get "syncableAttributes"(): $Collection<$AttributeInstance>
set "attributesUpdating"(value: boolean)
set "owner"(value: $LivingEntity$$Type)
}
}

declare module "net.minecraft.world.entity.ai.behavior.EntityTracker" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"
import { $PositionTracker } from "net.minecraft.world.entity.ai.behavior.PositionTracker"

export class $EntityTracker implements $PositionTracker {
constructor(entity0: $Entity$$Type, boolean1: boolean)

public "currentBlockPosition"(): $BlockPos
public "currentPosition"(): $Vec3
public "getEntity"(): $Entity
public "isVisibleBy"(livingEntity0: $LivingEntity$$Type): boolean
get "entity"(): $Entity
}
}

declare module "net.minecraft.world.entity.ai.behavior.declarative.Trigger" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export interface $Trigger<E extends $LivingEntity = $LivingEntity> {
"trigger"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
}

export namespace $Trigger {
const probejs$$marker: never
}
export abstract class $Trigger$$Static<E extends $LivingEntity = $LivingEntity> implements $Trigger<E> {
}
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeModifier" {
import { $AttributeModifier$Operation, $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $Supplier, $Supplier$$Type } from "java.util.function.Supplier"

export class $AttributeModifier {
constructor(uUID0: $UUID$$Type, supplier1: $Supplier$$Type<string>, double2: double, operation3: $AttributeModifier$Operation$$Type)
constructor(uUID0: $UUID$$Type, string1: string, double2: double, operation3: $AttributeModifier$Operation$$Type)
constructor(string0: string, double1: double, operation2: $AttributeModifier$Operation$$Type)

public "getAmount"(): double
public "getId"(): $UUID
public "getName"(): string
public "getOperation"(): $AttributeModifier$Operation
public static "load"(compoundTag0: $CompoundTag$$Type): $AttributeModifier
public "save"(): $CompoundTag
get "nameGetter"(): $Supplier<string>
set "nameGetter"(value: $Supplier$$Type<string>)
get "amount"(): double
get "id"(): $UUID
get "name"(): string
get "operation"(): $AttributeModifier$Operation
}
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiManager" {
import { $LevelHeightAccessor$$Type } from "net.minecraft.world.level.LevelHeightAccessor"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $PoiType, $PoiType$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $RegistryAccess$$Type } from "net.minecraft.core.RegistryAccess"
import { $LevelReader$$Type } from "net.minecraft.world.level.LevelReader"
import { $DataFixer$$Type } from "com.mojang.datafixers.DataFixer"
import { $ResourceKey$$Type } from "net.minecraft.resources.ResourceKey"
import { $Pair } from "com.mojang.datafixers.util.Pair"
import { $BooleanSupplier$$Type } from "java.util.function.BooleanSupplier"
import { $PoiRecord } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $ChunkPos$$Type } from "net.minecraft.world.level.ChunkPos"
import { $PoiManager$Occupancy$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $LevelChunkSection$$Type } from "net.minecraft.world.level.chunk.LevelChunkSection"
import { $Optional } from "java.util.Optional"
import { $SectionStorage } from "net.minecraft.world.level.chunk.storage.SectionStorage"
import { $SectionPos$$Type } from "net.minecraft.core.SectionPos"
import { $Path$$Type } from "java.nio.file.Path"
import { $PoiSection } from "net.minecraft.world.entity.ai.village.poi.PoiSection"

export class $PoiManager extends $SectionStorage<$PoiSection> {
static readonly "MAX_VILLAGE_DISTANCE": integer
static readonly "VILLAGE_SECTION_SIZE": integer

constructor(path0: $Path$$Type, dataFixer1: $DataFixer$$Type, boolean2: boolean, registryAccess3: $RegistryAccess$$Type, levelHeightAccessor4: $LevelHeightAccessor$$Type)

public "add"(blockPos0: $BlockPos$$Type, holder1: $Holder$$Type<$PoiType$$Type>): void
public "checkConsistencyWithBlocks"(sectionPos0: $SectionPos$$Type, levelChunkSection1: $LevelChunkSection$$Type): void
public "ensureLoadedAndValid"(levelReader0: $LevelReader$$Type, blockPos1: $BlockPos$$Type, int2: integer): void
public "exists"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>): boolean
public "existsAtPosition"(resourceKey0: $ResourceKey$$Type<$PoiType>, blockPos1: $BlockPos$$Type): boolean
public "find"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Optional<$BlockPos>
public "findAll"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Stream<$BlockPos>
public "findAllClosestFirstWithType"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>
public "findAllWithType"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>
public "findClosest"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer, occupancy4: $PoiManager$Occupancy$$Type): $Optional<$BlockPos>
public "findClosest"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Optional<$BlockPos>
public "findClosestWithType"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Optional<$Pair<$Holder<$PoiType>, $BlockPos>>
public "getCountInRange"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): long
/** @deprecated */
public "getFreeTickets"(blockPos0: $BlockPos$$Type): integer
public "getInChunk"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, chunkPos1: $ChunkPos$$Type, occupancy2: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getInRange"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getInSquare"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, blockPos1: $BlockPos$$Type, int2: integer, occupancy3: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getRandom"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, predicate1: $Predicate$$Type<$BlockPos$$Type>, occupancy2: $PoiManager$Occupancy$$Type, blockPos3: $BlockPos$$Type, int4: integer, randomSource5: $RandomSource$$Type): $Optional<$BlockPos>
public "getType"(blockPos0: $BlockPos$$Type): $Optional<$Holder<$PoiType>>
public "release"(blockPos0: $BlockPos$$Type): boolean
public "remove"(blockPos0: $BlockPos$$Type): void
public "sectionsToVillage"(sectionPos0: $SectionPos$$Type): integer
public "take"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, biPredicate1: $BiPredicate$$Type<$Holder$$Type<$PoiType$$Type>, $BlockPos$$Type>, blockPos2: $BlockPos$$Type, int3: integer): $Optional<$BlockPos>
public "tick"(booleanSupplier0: $BooleanSupplier$$Type): void
}
}

declare module "net.minecraft.world.entity.ai.sensing.GolemSensor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $GolemSensor extends $Sensor<$LivingEntity> {
constructor()
constructor(int0: integer)

public static "checkForNearbyGolem"(livingEntity0: $LivingEntity$$Type): void
public static "golemDetected"(livingEntity0: $LivingEntity$$Type): void
}
}

declare module "net.minecraft.world.entity.ai.sensing.Sensor" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MemoryModuleType } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $Set } from "java.util.Set"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $Sensor<E extends $LivingEntity = $LivingEntity> {
constructor(int0: integer)
constructor()

public static "isEntityAttackable"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "isEntityAttackableIgnoringLineOfSight"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
public static "isEntityTargetable"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
public "requires"(): $Set<$MemoryModuleType<any>>
public "tick"(serverLevel0: $ServerLevel$$Type, e1: E): void
}
}

declare module "net.minecraft.world.entity.ai.navigation.FlyingPathNavigation" {
import { $PathNavigation } from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $FlyingPathNavigation extends $PathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

public "canOpenDoors"(): boolean
public "canPassDoors"(): boolean
public "setCanOpenDoors"(boolean0: boolean): void
public "setCanPassDoors"(boolean0: boolean): void
}
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeInstance" {
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $EntityAttributeInstanceAccess } from "io.github.apace100.apoli.access.EntityAttributeInstanceAccess"
import { $Set } from "java.util.Set"
import { $AccessorAttributeInstance } from "com.mega.endinglib.mixin.accessor.AccessorAttributeInstance"
import { $EntityAttributeInstanceInvoker } from "net.puffish.attributesmod.mixin.EntityAttributeInstanceInvoker"
import { $UUID$$Type } from "java.util.UUID"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CompoundTag, $CompoundTag$$Type } from "net.minecraft.nbt.CompoundTag"
import { $AttributeModifier, $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $AttributeInstanceAccessor } from "dev.shadowsoffire.attributeslib.mixin.AttributeInstanceAccessor"

export class $AttributeInstance implements $EntityAttributeInstanceAccess, $AccessorAttributeInstance, $AttributeInstanceAccessor, $EntityAttributeInstanceInvoker {
constructor(attribute0: $Attribute$$Type, consumer1: $Consumer$$Type<$AttributeInstance$$Type>)

public "addPermanentModifier"(attributeModifier0: $AttributeModifier$$Type): void
public "addTransientModifier"(attributeModifier0: $AttributeModifier$$Type): void
public "getAttribute"(): $Attribute
public "getBaseValue"(): double
public "getEntity"(): $Entity
public "getModifier"(uUID0: $UUID$$Type): $AttributeModifier
public "getModifiers"(): $Set<$AttributeModifier>
public "getModifiers"(operation0: $AttributeModifier$Operation$$Type): $Set<$AttributeModifier>
public "getValue"(): double
public "hasModifier"(attributeModifier0: $AttributeModifier$$Type): boolean
public "load"(compoundTag0: $CompoundTag$$Type): void
public "removeModifier"(uUID0: $UUID$$Type): void
public "removeModifier"(attributeModifier0: $AttributeModifier$$Type): void
public "removeModifiers"(): void
public "removePermanentModifier"(uUID0: $UUID$$Type): boolean
public "replaceFrom"(attributeInstance0: $AttributeInstance$$Type): void
public "save"(): $CompoundTag
public "setBaseValue"(double0: double): void
public "setEntity"(entity0: $Entity$$Type): void
get "attribute"(): $Attribute
get "baseValue"(): double
get "entity"(): $Entity
get "modifiers"(): $Set<$AttributeModifier>
get "value"(): double
set "baseValue"(value: double)
set "entity"(value: $Entity$$Type)
}
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation" {
import { $Enum } from "java.lang.Enum"

export class $AttributeModifier$Operation extends $Enum<$AttributeModifier$Operation> {
static readonly "ADDITION": $AttributeModifier$Operation
static readonly "MULTIPLY_BASE": $AttributeModifier$Operation
static readonly "MULTIPLY_TOTAL": $AttributeModifier$Operation

public static "fromValue"(int0: integer): $AttributeModifier$Operation
public "toValue"(): integer
public static "valueOf"(string0: string): $AttributeModifier$Operation
public static "values"(): $AttributeModifier$Operation[]
}
}

declare module "net.minecraft.world.entity.ai.behavior.AnimalPanic" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $PathfinderMob, $PathfinderMob$$Type } from "net.minecraft.world.entity.PathfinderMob"

export class $AnimalPanic extends $Behavior<$PathfinderMob> {
constructor(float0: float)
constructor(float0: float, predicate1: $Predicate$$Type<$PathfinderMob$$Type>)

}
}

declare module "net.minecraft.world.entity.ai.navigation.GroundPathNavigation" {
import { $PathNavigation } from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $GroundPathNavigation extends $PathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

public "canOpenDoors"(): boolean
public "canPassDoors"(): boolean
public "setAvoidSun"(boolean0: boolean): void
public "setCanOpenDoors"(boolean0: boolean): void
public "setCanPassDoors"(boolean0: boolean): void
public "setCanWalkOverFences"(boolean0: boolean): void
set "avoidSun"(value: boolean)
set "canWalkOverFences"(value: boolean)
}
}

declare module "net.minecraft.world.entity.ai.behavior.PlayTagWithOtherKids" {
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $BehaviorControl } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"

export class $PlayTagWithOtherKids {
constructor()

public static "create"(): $BehaviorControl<$PathfinderMob>
}
}

declare module "net.minecraft.world.entity.ai.behavior.Swim" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $Swim extends $Behavior<$Mob> {
constructor(float0: float)

}
}

declare module "net.minecraft.world.entity.ai.gossip.GossipContainer$EntityGossips" {
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $GossipContainer$GossipEntry } from "net.minecraft.world.entity.ai.gossip.GossipContainer$GossipEntry"
import { $UUID$$Type } from "java.util.UUID"
import { $GossipType$$Type } from "net.minecraft.world.entity.ai.gossip.GossipType"

export class $GossipContainer$EntityGossips {
public "decay"(): void
public "isEmpty"(): boolean
public "makeSureValueIsntTooLowOrTooHigh"(gossipType0: $GossipType$$Type): void
public "remove"(gossipType0: $GossipType$$Type): void
public "unpack"(uUID0: $UUID$$Type): $Stream<$GossipContainer$GossipEntry>
public "weightedValue"(predicate0: $Predicate$$Type<$GossipType$$Type>): integer
get "empty"(): boolean
}
}

declare module "net.minecraft.world.entity.ai.sensing.VillagerBabiesSensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $VillagerBabiesSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.behavior.OneShot" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior$Status } from "net.minecraft.world.entity.ai.behavior.Behavior$Status"
import { $Trigger } from "net.minecraft.world.entity.ai.behavior.declarative.Trigger"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BehaviorControl } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"

export class $OneShot<E extends $LivingEntity = $LivingEntity> implements $BehaviorControl<E>, $Trigger<E> {
constructor()

public "debugString"(): string
public "doStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
public "getStatus"(): $Behavior$Status
public "tickOrStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
public "trigger"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
public "tryStart"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
get "status"(): $Behavior$Status
}
}

declare module "net.minecraft.world.entity.ai.behavior.ShufflingList" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $Iterator } from "java.util.Iterator"
import { $Spliterator } from "java.util.Spliterator"
import { $Iterable } from "java.lang.Iterable"

export class $ShufflingList<U = any> implements $Iterable<U> {
constructor()

public "add"(u0: U, int1: integer): $ShufflingList<U>
public static "codec"<U>(codec0: $Codec$$Type<U>): $Codec<$ShufflingList<U>>
public "forEach"(consumer0: $Consumer$$Type<U>): void
public "iterator"(): $Iterator<U>
public "shuffle"(): $ShufflingList<U>
public "spliterator"(): $Spliterator<U>
public "stream"(): $Stream<U>
[Symbol.iterator](): IterableIterator<U>;
}
}

declare module "net.minecraft.world.entity.ai.village.VillageSiege" {
import { $CustomSpawner } from "net.minecraft.world.level.CustomSpawner"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export class $VillageSiege implements $CustomSpawner {
constructor()

public "tick"(serverLevel0: $ServerLevel$$Type, boolean1: boolean, boolean2: boolean): integer
}
}

declare module "net.minecraft.world.entity.ai.gossip.GossipContainer" {
import { $GossipContainer$EntityGossips } from "net.minecraft.world.entity.ai.gossip.GossipContainer$EntityGossips"
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $Object2IntMap } from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Map } from "java.util.Map"
import { $RandomSource$$Type } from "net.minecraft.util.RandomSource"
import { $UUID, $UUID$$Type } from "java.util.UUID"
import { $DoublePredicate$$Type } from "java.util.function.DoublePredicate"
import { $GossipType, $GossipType$$Type } from "net.minecraft.world.entity.ai.gossip.GossipType"

export class $GossipContainer {
static readonly "DISCARD_THRESHOLD": integer
readonly "gossips": $Map<$UUID, $GossipContainer$EntityGossips>

constructor()

public "add"(uUID0: $UUID$$Type, gossipType1: $GossipType$$Type, int2: integer): void
public "decay"(): void
public "getCountForType"(gossipType0: $GossipType$$Type, doublePredicate1: $DoublePredicate$$Type): long
public "getGossipEntries"(): $Map<$UUID, $Object2IntMap<$GossipType>>
public "getReputation"(uUID0: $UUID$$Type, predicate1: $Predicate$$Type<$GossipType$$Type>): integer
public "remove"(uUID0: $UUID$$Type, gossipType1: $GossipType$$Type): void
public "remove"(uUID0: $UUID$$Type, gossipType1: $GossipType$$Type, int2: integer): void
public "remove"(gossipType0: $GossipType$$Type): void
public "store"<T>(dynamicOps0: $DynamicOps$$Type<T>): T
public "transferFrom"(gossipContainer0: $GossipContainer$$Type, randomSource1: $RandomSource$$Type, int2: integer): void
public "update"(dynamic0: $Dynamic$$Type<any>): void
get "gossipEntries"(): $Map<$UUID, $Object2IntMap<$GossipType>>
}
}

declare module "net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos" {
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $UniformInt$$Type } from "net.minecraft.util.valueproviders.UniformInt"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Function$$Type } from "java.util.function.Function"

export class $LongJumpToRandomPos<E extends $Mob = $Mob> extends $Behavior<E> {
constructor(uniformInt0: $UniformInt$$Type, int1: integer, int2: integer, float3: float, function4: $Function$$Type<E, $SoundEvent>)
constructor(uniformInt0: $UniformInt$$Type, int1: integer, int2: integer, float3: float, function4: $Function$$Type<E, $SoundEvent>, biPredicate5: $BiPredicate$$Type<E, $BlockPos$$Type>)

public static "defaultAcceptableLandingSpot"<E extends $Mob>(e0: E, blockPos1: $BlockPos$$Type): boolean
}
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeSupplier" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AttributeInstance, $AttributeInstance$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $Map$$Type } from "java.util.Map"
import { $UUID$$Type } from "java.util.UUID"
import { $AttributeSupplier$Builder } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AttributeSupplier {
constructor(map0: $Map$$Type<$Attribute$$Type, $AttributeInstance$$Type>)

public static "builder"(): $AttributeSupplier$Builder
public "createInstance"(consumer0: $Consumer$$Type<$AttributeInstance$$Type>, attribute1: $Attribute$$Type): $AttributeInstance
public "getBaseValue"(attribute0: $Attribute$$Type): double
public "getModifierValue"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): double
public "getValue"(attribute0: $Attribute$$Type): double
public "hasAttribute"(attribute0: $Attribute$$Type): boolean
public "hasModifier"(attribute0: $Attribute$$Type, uUID1: $UUID$$Type): boolean
}
}

declare module "net.minecraft.world.entity.ai.sensing.SecondaryPoiSensor" {
import { $Villager } from "net.minecraft.world.entity.npc.Villager"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $SecondaryPoiSensor extends $Sensor<$Villager> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.sensing.HoglinSpecificSensor" {
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Hoglin } from "net.minecraft.world.entity.monster.hoglin.Hoglin"

export class $HoglinSpecificSensor extends $Sensor<$Hoglin> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.behavior.AnimalMakeLove" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Animal, $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"

export class $AnimalMakeLove extends $Behavior<$Animal> {
constructor(entityType0: $EntityType$$Type<$Animal$$Type>, float1: float)

}
}

declare module "net.minecraft.world.entity.ai.sensing.NearestItemSensor" {
import { $Mob } from "net.minecraft.world.entity.Mob"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $NearestItemSensor extends $Sensor<$Mob> {
static readonly "MAX_DISTANCE_TO_WANTED_ITEM": integer

constructor()

}
}

declare module "net.minecraft.world.entity.ai.memory.ExpirableValue" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"

export class $ExpirableValue<T = any> {
constructor(t0: T, long1: long)

public "canExpire"(): boolean
public static "codec"<T>(codec0: $Codec$$Type<T>): $Codec<$ExpirableValue<T>>
public "getTimeToLive"(): long
public "getValue"(): T
public "hasExpired"(): boolean
public static "of"<T>(t0: T): $ExpirableValue<T>
public static "of"<T>(t0: T, long1: long): $ExpirableValue<T>
public "tick"(): void
get "timeToLive"(): long
get "value"(): T
}
}

declare module "net.minecraft.world.entity.ai.memory.MemoryStatus" {
import { $Enum } from "java.lang.Enum"

export class $MemoryStatus extends $Enum<$MemoryStatus> {
static readonly "REGISTERED": $MemoryStatus
static readonly "VALUE_ABSENT": $MemoryStatus
static readonly "VALUE_PRESENT": $MemoryStatus

public static "valueOf"(string0: string): $MemoryStatus
public static "values"(): $MemoryStatus[]
}
}

declare module "net.minecraft.world.entity.ai.sensing.WardenEntitySensor" {
import { $NearestLivingEntitySensor } from "net.minecraft.world.entity.ai.sensing.NearestLivingEntitySensor"
import { $Warden } from "net.minecraft.world.entity.monster.warden.Warden"

export class $WardenEntitySensor extends $NearestLivingEntitySensor<$Warden> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.goal.Goal" {
import { $Goal$Flag, $Goal$Flag$$Type } from "net.minecraft.world.entity.ai.goal.Goal$Flag"
import { $EnumSet, $EnumSet$$Type } from "java.util.EnumSet"

export class $Goal {
constructor()

public "canContinueToUse"(): boolean
public "canUse"(): boolean
public "getFlags"(): $EnumSet<$Goal$Flag>
public "isInterruptable"(): boolean
public "requiresUpdateEveryTick"(): boolean
public "setFlags"(enumSet0: $EnumSet$$Type<$Goal$Flag$$Type>): void
public "start"(): void
public "stop"(): void
public "tick"(): void
get "flags"(): $EnumSet<$Goal$Flag>
get "interruptable"(): boolean
set "flags"(value: $EnumSet$$Type<$Goal$Flag$$Type>)
}
}

declare module "net.minecraft.world.entity.ai.behavior.LongJumpMidJump" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $UniformInt$$Type } from "net.minecraft.util.valueproviders.UniformInt"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $LongJumpMidJump extends $Behavior<$Mob> {
static readonly "TIME_OUT_DURATION": integer

constructor(uniformInt0: $UniformInt$$Type, soundEvent1: $SoundEvent$$Type)

}
}

declare module "net.minecraft.world.entity.ai.control.BodyRotationControl" {
import { $Control } from "net.minecraft.world.entity.ai.control.Control"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $BodyRotationControl implements $Control {
readonly "mob": $Mob

constructor(mob0: $Mob$$Type)

public "clientTick"(): void
public "rotateBodyIfNecessary"(): void
public "rotateHeadIfNecessary"(): void
public "rotateHeadTowardsFront"(): void
}
}

declare module "net.minecraft.world.entity.ai.sensing.PiglinBruteSpecificSensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $PiglinBruteSpecificSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $NearestVisibleLivingEntitySensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.behavior.SleepInBed" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"

export class $SleepInBed extends $Behavior<$LivingEntity> {
static readonly "COOLDOWN_AFTER_BEING_WOKEN": integer

constructor()

}
}

declare module "net.minecraft.world.entity.ai.behavior.MoveToTargetSink" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $MoveToTargetSink extends $Behavior<$Mob> {
constructor()
constructor(int0: integer, int1: integer)

}
}

declare module "net.minecraft.world.entity.ai.behavior.LongJumpToPreferredBlock" {
import { $TagKey$$Type } from "net.minecraft.tags.TagKey"
import { $BiPredicate$$Type } from "java.util.function.BiPredicate"
import { $UniformInt$$Type } from "net.minecraft.util.valueproviders.UniformInt"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Block$$Type } from "net.minecraft.world.level.block.Block"
import { $LongJumpToRandomPos } from "net.minecraft.world.entity.ai.behavior.LongJumpToRandomPos"
import { $Mob } from "net.minecraft.world.entity.Mob"
import { $Function$$Type } from "java.util.function.Function"

export class $LongJumpToPreferredBlock<E extends $Mob = $Mob> extends $LongJumpToRandomPos<E> {
constructor(uniformInt0: $UniformInt$$Type, int1: integer, int2: integer, float3: float, function4: $Function$$Type<E, $SoundEvent>, tagKey5: $TagKey$$Type<$Block$$Type>, float6: float, biPredicate7: $BiPredicate$$Type<E, $BlockPos$$Type>)

}
}

declare module "net.minecraft.world.entity.ai.control.LookControl" {
import { $Control } from "net.minecraft.world.entity.ai.control.Control"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $LookControl implements $Control {
constructor(mob0: $Mob$$Type)

public "getWantedX"(): double
public "getWantedY"(): double
public "getWantedZ"(): double
public "isLookingAtTarget"(): boolean
public "setLookAt"(entity0: $Entity$$Type, float1: float, float2: float): void
public "setLookAt"(double0: double, double1: double, double2: double): void
public "setLookAt"(entity0: $Entity$$Type): void
public "setLookAt"(double0: double, double1: double, double2: double, float3: float, float4: float): void
public "setLookAt"(vec30: $Vec3$$Type): void
public "tick"(): void
get "lookAtCooldown"(): integer
set "lookAtCooldown"(value: integer)
get "xMaxRotAngle"(): float
set "xMaxRotAngle"(value: float)
get "yMaxRotSpeed"(): float
set "yMaxRotSpeed"(value: float)
get "wantedX"(): double
get "wantedY"(): double
get "wantedZ"(): double
get "lookingAtTarget"(): boolean
set "lookAt"(value: $Entity$$Type)
set "lookAt"(value: $Vec3$$Type)
}
}

declare module "net.minecraft.world.entity.ai.sensing.IsInWaterSensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $IsInWaterSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.gossip.GossipContainer$GossipEntry" {
import { $List } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Record } from "java.lang.Record"
import { $UUID } from "java.util.UUID"
import { $GossipType } from "net.minecraft.world.entity.ai.gossip.GossipType"

export class $GossipContainer$GossipEntry extends $Record {
static readonly "CODEC": $Codec<$GossipContainer$GossipEntry>
static readonly "LIST_CODEC": $Codec<$List<$GossipContainer$GossipEntry>>

public "target"(): $UUID
public "type"(): $GossipType
public "value"(): integer
public "weightedValue"(): integer
}
}

declare module "net.minecraft.world.entity.ai.sensing.PiglinSpecificSensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $PiglinSpecificSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiRecord" {
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PoiType, $PoiType$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $Runnable$$Type } from "java.lang.Runnable"

export class $PoiRecord {
constructor(blockPos0: $BlockPos$$Type, holder1: $Holder$$Type<$PoiType$$Type>, runnable2: $Runnable$$Type)

public static "codec"(runnable0: $Runnable$$Type): $Codec<$PoiRecord>
/** @deprecated */
public "getFreeTickets"(): integer
public "getPoiType"(): $Holder<$PoiType>
public "getPos"(): $BlockPos
public "hasSpace"(): boolean
public "isOccupied"(): boolean
get "freeTickets"(): integer
get "poiType"(): $Holder<$PoiType>
get "pos"(): $BlockPos
get "occupied"(): boolean
}
}

declare module "net.minecraft.world.entity.ai.behavior.ShufflingList$WeightedEntry" {
import { $Codec, $Codec$$Type } from "com.mojang.serialization.Codec"

export class $ShufflingList$WeightedEntry<T = any> {
public static "codec"<E>(codec0: $Codec$$Type<E>): $Codec<$ShufflingList$WeightedEntry<E>>
public "getData"(): T
public "getWeight"(): integer
get "data"(): T
get "weight"(): integer
}
}

declare module "net.minecraft.world.entity.ai.sensing.VillagerHostilesSensor" {
import { $NearestVisibleLivingEntitySensor } from "net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor"

export class $VillagerHostilesSensor extends $NearestVisibleLivingEntitySensor {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy" {
import { $PoiRecord } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $Enum } from "java.lang.Enum"
import { $Predicate } from "java.util.function.Predicate"

export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
static readonly "ANY": $PoiManager$Occupancy
static readonly "HAS_SPACE": $PoiManager$Occupancy
static readonly "IS_OCCUPIED": $PoiManager$Occupancy

public "getTest"(): $Predicate<$PoiRecord>
public static "valueOf"(string0: string): $PoiManager$Occupancy
public static "values"(): $PoiManager$Occupancy[]
get "test"(): $Predicate<$PoiRecord>
}
}

declare module "net.minecraft.world.entity.ai.sensing.DummySensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $DummySensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.navigation.PathNavigation" {
import { $CallbackInfo$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import { $Path, $Path$$Type } from "net.minecraft.world.level.pathfinder.Path"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Stream$$Type } from "java.util.stream.Stream"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BlockPathTypes$$Type } from "net.minecraft.world.level.pathfinder.BlockPathTypes"
import { $NodeEvaluator } from "net.minecraft.world.level.pathfinder.NodeEvaluator"
import { $Set$$Type } from "java.util.Set"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"
import { $CallbackInfoReturnable$$Type } from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $PathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

public "canCutCorner"(blockPathTypes0: $BlockPathTypes$$Type): boolean
public "canFloat"(): boolean
public "createPath"(entity0: $Entity$$Type, int1: integer): $Path
public "createPath"(blockPos0: $BlockPos$$Type, int1: integer, int2: integer): $Path
public "createPath"(stream0: $Stream$$Type<$BlockPos$$Type>, int1: integer): $Path
public "createPath"(set0: $Set$$Type<$BlockPos$$Type>, int1: integer): $Path
public "createPath"(double0: double, double1: double, double2: double, int3: integer): $Path
public "createPath"(blockPos0: $BlockPos$$Type, int1: integer): $Path
public "getMaxDistanceToWaypoint"(): float
public "getNodeEvaluator"(): $NodeEvaluator
public "getPath"(): $Path
public "getTargetPos"(): $BlockPos
public "handler$dhn000$shouldRecomputePath"(blockPos0: $BlockPos$$Type, callbackInfoReturnable1: $CallbackInfoReturnable$$Type): void
public "handler$dho000$recomputePath"(callbackInfo0: $CallbackInfo$$Type): void
public "isDone"(): boolean
public "isInProgress"(): boolean
public "isStableDestination"(blockPos0: $BlockPos$$Type): boolean
public "isStuck"(): boolean
public "moveTo"(path0: $Path$$Type, double1: double): boolean
public "moveTo"(entity0: $Entity$$Type, double1: double): boolean
public "moveTo"(double0: double, double1: double, double2: double, double3: double): boolean
public "recomputePath"(): void
public "resetMaxVisitedNodesMultiplier"(): void
public "setCanFloat"(boolean0: boolean): void
public "setMaxVisitedNodesMultiplier"(float0: float): void
public "setSpeedModifier"(double0: double): void
public "shouldRecomputePath"(blockPos0: $BlockPos$$Type): boolean
public "stop"(): void
public "tick"(): void
get "maxDistanceToWaypoint"(): float
get "nodeEvaluator"(): $NodeEvaluator
get "path"(): $Path
get "targetPos"(): $BlockPos
get "done"(): boolean
get "inProgress"(): boolean
get "stuck"(): boolean
set "maxVisitedNodesMultiplier"(value: float)
set "speedModifier"(value: double)
}
}

declare module "net.minecraft.world.entity.ai.sensing.FrogAttackablesSensor" {
import { $NearestVisibleLivingEntitySensor } from "net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor"

export class $FrogAttackablesSensor extends $NearestVisibleLivingEntitySensor {
static readonly "TARGET_DETECTION_DISTANCE": float

constructor()

}
}

declare module "net.minecraft.world.entity.ai.attributes.RangedAttribute" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AttributeModifier$Operation$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import { $Component, $Component$$Type } from "net.minecraft.network.chat.Component"
import { $AttributeModifier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import { $TooltipFlag$$Type } from "net.minecraft.world.item.TooltipFlag"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $UUID } from "java.util.UUID"
import { $AccessorRangedAttribute } from "net.darkhax.attributefix.mixin.AccessorRangedAttribute"
import { $MutableComponent } from "net.minecraft.network.chat.MutableComponent"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $RangedAttribute extends $Attribute implements $AccessorRangedAttribute {
constructor(string0: string, double1: double, double2: double, double3: double)

public "addBonusTooltips"(itemStack0: $ItemStack$$Type, consumer1: $Consumer$$Type<$Component$$Type>, tooltipFlag2: $TooltipFlag$$Type): void
public "getBaseUUID"(): $UUID
public "getBonusBaseValue"(itemStack0: $ItemStack$$Type): double
public "getDebugInfo"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $Component
public "getMaxValue"(): double
public "getMinValue"(): double
public static "isNullOrAddition"(operation0: $AttributeModifier$Operation$$Type): boolean
public "ths"(): $Attribute
public "toBaseComponent"(double0: double, double1: double, boolean2: boolean, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
public static "toBaseComponent"(attribute0: $Attribute$$Type, double1: double, double2: double, boolean3: boolean, tooltipFlag4: $TooltipFlag$$Type): $MutableComponent
public static "toComponent"(attribute0: $Attribute$$Type, attributeModifier1: $AttributeModifier$$Type, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
public "toComponent"(attributeModifier0: $AttributeModifier$$Type, tooltipFlag1: $TooltipFlag$$Type): $MutableComponent
public static "toValueComponent"(attribute0: $Attribute$$Type, operation1: $AttributeModifier$Operation$$Type, double2: double, tooltipFlag3: $TooltipFlag$$Type): $MutableComponent
public "toValueComponent"(operation0: $AttributeModifier$Operation$$Type, double1: double, tooltipFlag2: $TooltipFlag$$Type): $MutableComponent
get "baseUUID"(): $UUID
get "maxValue"(): double
get "minValue"(): double
}
}

declare module "net.minecraft.world.entity.ai.behavior.BehaviorControl" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior$Status } from "net.minecraft.world.entity.ai.behavior.Behavior$Status"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"

export interface $BehaviorControl<E extends $LivingEntity = $LivingEntity> {
"debugString"(): string
"doStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
"getStatus"(): $Behavior$Status
"tickOrStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
"tryStart"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
get "status"(): $Behavior$Status
}

export namespace $BehaviorControl {
const probejs$$marker: never
}
export abstract class $BehaviorControl$$Static<E extends $LivingEntity = $LivingEntity> implements $BehaviorControl<E> {
}
}

declare module "net.minecraft.world.entity.ai.goal.WrappedGoal" {
import { $Goal, $Goal$$Type } from "net.minecraft.world.entity.ai.goal.Goal"

export class $WrappedGoal extends $Goal {
constructor(int0: integer, goal1: $Goal$$Type)

public "canBeReplacedBy"(wrappedGoal0: $WrappedGoal$$Type): boolean
public "getGoal"(): $Goal
public "getPriority"(): integer
public "isRunning"(): boolean
get "goal"(): $Goal
get "priority"(): integer
get "running"(): boolean
}
}

declare module "net.minecraft.world.entity.ai.behavior.CountDownCooldownTicks" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"

export class $CountDownCooldownTicks extends $Behavior<$LivingEntity> {
constructor(memoryModuleType0: $MemoryModuleType$$Type<integer>)

}
}

declare module "net.minecraft.world.entity.ai.Brain" {
import { $SensorType$$Type } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $Activity, $Activity$$Type } from "net.minecraft.world.entity.schedule.Activity"
import { $ImmutableList$$Type } from "com.google.common.collect.ImmutableList"
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $Map } from "java.util.Map"
import { $Brain$MemoryValue$$Type } from "net.minecraft.world.entity.ai.Brain$MemoryValue"
import { $Brain$Provider } from "net.minecraft.world.entity.ai.Brain$Provider"
import { $DataResult } from "com.mojang.serialization.DataResult"
import { $BrainBuilder, $BrainBuilder$$Type } from "net.minecraftforge.common.util.BrainBuilder"
import { $Collection$$Type } from "java.util.Collection"
import { $MemoryModuleType, $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $Set, $Set$$Type } from "java.util.Set"
import { $MemoryStatus$$Type } from "net.minecraft.world.entity.ai.memory.MemoryStatus"
import { $BrainAccessor } from "net.mehvahdjukaar.moonlight.core.mixins.accessor.BrainAccessor"
import { $ExpirableValue } from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import { $Sensor$$Type } from "net.minecraft.world.entity.ai.sensing.Sensor"
import { $Pair$$Type } from "com.mojang.datafixers.util.Pair"
import { $BehaviorControl, $BehaviorControl$$Type } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $Schedule, $Schedule$$Type } from "net.minecraft.world.entity.schedule.Schedule"
import { $List, $List$$Type } from "java.util.List"
import { $Codec } from "com.mojang.serialization.Codec"
import { $BrainAccess } from "com.github.raverbury.aggroindicator.util.BrainAccess"
import { $Optional, $Optional$$Type } from "java.util.Optional"

export class $Brain<E extends $LivingEntity = $LivingEntity> implements $BrainAccess, $BrainAccessor {
constructor(collection0: $Collection$$Type<$MemoryModuleType$$Type<any>>, collection1: $Collection$$Type<$SensorType$$Type<$Sensor$$Type<E>>>, immutableList2: $ImmutableList$$Type<$Brain$MemoryValue$$Type<any>>, supplier3: $Supplier$$Type<$Codec<$Brain<E>>>)

public "addActivity"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<E>>>): void
public "addActivity"(activity0: $Activity$$Type, int1: integer, immutableList2: $ImmutableList$$Type<$BehaviorControl$$Type<E>>): void
public "addActivityAndRemoveMemoriesWhenStopped"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<E>>>, set2: $Set$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>, set3: $Set$$Type<$MemoryModuleType$$Type<any>>): void
public "addActivityAndRemoveMemoryWhenStopped"(activity0: $Activity$$Type, int1: integer, immutableList2: $ImmutableList$$Type<$BehaviorControl$$Type<E>>, memoryModuleType3: $MemoryModuleType$$Type<any>): void
public "addActivityWithConditions"(activity0: $Activity$$Type, immutableList1: $ImmutableList$$Type<$Pair$$Type<integer, $BehaviorControl$$Type<E>>>, set2: $Set$$Type<$Pair$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>>): void
public "aggroIndicator$setBrainOwner"(livingEntity0: $LivingEntity$$Type): void
public "checkMemory"(memoryModuleType0: $MemoryModuleType$$Type<any>, memoryStatus1: $MemoryStatus$$Type): boolean
public "clearMemories"(): void
public static "codec"<E extends $LivingEntity>(collection0: $Collection$$Type<$MemoryModuleType$$Type<any>>, collection1: $Collection$$Type<$SensorType$$Type<$Sensor$$Type<E>>>): $Codec<$Brain<E>>
public "copyFromBuilder"(brainBuilder0: $BrainBuilder$$Type<E>): void
public "copyWithoutBehaviors"(): $Brain<E>
public "createBuilder"(): $BrainBuilder<E>
public "eraseMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): void
/** @deprecated */
public "getActiveActivities"(): $Set<$Activity>
public "getActiveNonCoreActivity"(): $Optional<$Activity>
/** @deprecated */
public "getMemories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
public "getMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): $Optional<U>
public "getMemoryInternal"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): $Optional<U>
/** @deprecated */
public "getRunningBehaviors"(): $List<$BehaviorControl<E>>
public "getSchedule"(): $Schedule
public "getTimeUntilExpiry"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>): long
public "hasMemoryValue"(memoryModuleType0: $MemoryModuleType$$Type<any>): boolean
public "isActive"(activity0: $Activity$$Type): boolean
public "isMemoryValue"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, u1: U): boolean
public static "provider"<E extends $LivingEntity>(collection0: $Collection$$Type<$MemoryModuleType$$Type<any>>, collection1: $Collection$$Type<$SensorType$$Type<$Sensor$$Type<E>>>): $Brain$Provider<E>
public "removeAllBehaviors"(): void
public "serializeStart"<T>(dynamicOps0: $DynamicOps$$Type<T>): $DataResult<T>
public "setActiveActivityIfPossible"(activity0: $Activity$$Type): void
public "setActiveActivityToFirstValid"(list0: $List$$Type<$Activity$$Type>): void
public "setCoreActivities"(set0: $Set$$Type<$Activity$$Type>): void
public "setDefaultActivity"(activity0: $Activity$$Type): void
public "setMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, optional1: $Optional$$Type<U>): void
public "setMemory"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, u1: U): void
public "setMemoryWithExpiry"<U>(memoryModuleType0: $MemoryModuleType$$Type<U>, u1: U, long2: long): void
public "setSchedule"(schedule0: $Schedule$$Type): void
public "stopAll"(serverLevel0: $ServerLevel$$Type, e1: E): void
public "tick"(serverLevel0: $ServerLevel$$Type, e1: E): void
public "updateActivityFromSchedule"(long0: long, long1: long): void
public "useDefaultActivity"(): void
get "activeActivities"(): $Set<$Activity>
get "activeNonCoreActivity"(): $Optional<$Activity>
get "memories"(): $Map<$MemoryModuleType<any>, $Optional<$ExpirableValue<any>>>
get "runningBehaviors"(): $List<$BehaviorControl<E>>
get "schedule"(): $Schedule
set "activeActivityIfPossible"(value: $Activity$$Type)
set "activeActivityToFirstValid"(value: $List$$Type<$Activity$$Type>)
set "coreActivities"(value: $Set$$Type<$Activity$$Type>)
set "defaultActivity"(value: $Activity$$Type)
set "schedule"(value: $Schedule$$Type)
}
}

declare module "net.minecraft.world.entity.ai.goal.GoalSelector" {
import { $Stream } from "java.util.stream.Stream"
import { $ProfilerFiller } from "net.minecraft.util.profiling.ProfilerFiller"
import { $Goal$Flag$$Type } from "net.minecraft.world.entity.ai.goal.Goal$Flag"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $WrappedGoal } from "net.minecraft.world.entity.ai.goal.WrappedGoal"
import { $Set } from "java.util.Set"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Goal$$Type } from "net.minecraft.world.entity.ai.goal.Goal"

export class $GoalSelector {
readonly "availableGoals": $Set<$WrappedGoal>

constructor(supplier0: $Supplier$$Type<$ProfilerFiller>)

public "addGoal"(int0: integer, goal1: $Goal$$Type): void
public "disableControlFlag"(flag0: $Goal$Flag$$Type): void
public "enableControlFlag"(flag0: $Goal$Flag$$Type): void
public "getAvailableGoals"(): $Set<$WrappedGoal>
public "getRunningGoals"(): $Stream<$WrappedGoal>
public "removeAllGoals"(predicate0: $Predicate$$Type<$Goal$$Type>): void
public "removeGoal"(goal0: $Goal$$Type): void
public "setControlFlag"(flag0: $Goal$Flag$$Type, boolean1: boolean): void
public "setNewGoalRate"(int0: integer): void
public "tick"(): void
public "tickRunningGoals"(boolean0: boolean): void
get "runningGoals"(): $Stream<$WrappedGoal>
set "newGoalRate"(value: integer)
}
}

declare module "net.minecraft.world.entity.ai.behavior.PositionTracker" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos } from "net.minecraft.core.BlockPos"
import { $Vec3 } from "net.minecraft.world.phys.Vec3"

export interface $PositionTracker {
"currentBlockPosition"(): $BlockPos
"currentPosition"(): $Vec3
"isVisibleBy"(livingEntity0: $LivingEntity$$Type): boolean
}

export namespace $PositionTracker {
const probejs$$marker: never
}
export abstract class $PositionTracker$$Static implements $PositionTracker {
}
}

declare module "net.minecraft.world.entity.ai.sensing.AxolotlAttackablesSensor" {
import { $NearestVisibleLivingEntitySensor } from "net.minecraft.world.entity.ai.sensing.NearestVisibleLivingEntitySensor"

export class $AxolotlAttackablesSensor extends $NearestVisibleLivingEntitySensor {
static readonly "TARGET_DETECTION_DISTANCE": float

constructor()

}
}

declare module "net.minecraft.world.entity.ai.navigation.WaterBoundPathNavigation" {
import { $PathNavigation } from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $WaterBoundPathNavigation extends $PathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

}
}

declare module "net.minecraft.world.entity.ai.memory.NearestVisibleLivingEntities" {
import { $List$$Type } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Stream } from "java.util.stream.Stream"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Optional } from "java.util.Optional"
import { $Iterable } from "java.lang.Iterable"

export class $NearestVisibleLivingEntities {
constructor(livingEntity0: $LivingEntity$$Type, list1: $List$$Type<$LivingEntity$$Type>)

public "contains"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): boolean
public "contains"(livingEntity0: $LivingEntity$$Type): boolean
public static "empty"(): $NearestVisibleLivingEntities
public "find"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $Stream<$LivingEntity>
public "findAll"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $Iterable<$LivingEntity>
public "findClosest"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $Optional<$LivingEntity>
}
}

declare module "net.minecraft.world.entity.ai.behavior.Behavior" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Map$$Type } from "java.util.Map"
import { $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $Behavior$Status } from "net.minecraft.world.entity.ai.behavior.Behavior$Status"
import { $MemoryStatus$$Type } from "net.minecraft.world.entity.ai.memory.MemoryStatus"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BehaviorControl } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"

export class $Behavior<E extends $LivingEntity = $LivingEntity> implements $BehaviorControl<E> {
static readonly "DEFAULT_DURATION": integer

constructor(map0: $Map$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>, int1: integer, int2: integer)
constructor(map0: $Map$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>, int1: integer)
constructor(map0: $Map$$Type<$MemoryModuleType$$Type<any>, $MemoryStatus$$Type>)

public "debugString"(): string
public "doStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
public "getStatus"(): $Behavior$Status
public "tickOrStop"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): void
public "tryStart"(serverLevel0: $ServerLevel$$Type, e1: E, long2: long): boolean
get "status"(): $Behavior$Status
}
}

declare module "net.minecraft.world.entity.ai.behavior.LookAtTargetSink" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $LookAtTargetSink extends $Behavior<$Mob> {
constructor(int0: integer, int1: integer)

}
}

declare module "net.minecraft.world.entity.ai.control.JumpControl" {
import { $Control } from "net.minecraft.world.entity.ai.control.Control"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $JumpControl implements $Control {
constructor(mob0: $Mob$$Type)

public "jump"(): void
public "tick"(): void
}
}

declare module "net.minecraft.world.entity.ai.navigation.WallClimberNavigation" {
import { $GroundPathNavigation } from "net.minecraft.world.entity.ai.navigation.GroundPathNavigation"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $WallClimberNavigation extends $GroundPathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

}
}

declare module "net.minecraft.world.entity.ai.gossip.GossipType" {
import { $Codec } from "com.mojang.serialization.Codec"
import { $Enum, $Enum$$Type } from "java.lang.Enum"
import { $StringRepresentable, $StringRepresentable$$Type } from "net.minecraft.util.StringRepresentable"
import { $StringRepresentable$EnumCodec } from "net.minecraft.util.StringRepresentable$EnumCodec"
import { $Keyable } from "com.mojang.serialization.Keyable"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Function$$Type } from "java.util.function.Function"

export class $GossipType extends $Enum<$GossipType> implements $StringRepresentable {
static readonly "CODEC": $Codec<$GossipType>
static readonly "MAJOR_NEGATIVE": $GossipType
static readonly "MAJOR_POSITIVE": $GossipType
static readonly "MINOR_NEGATIVE": $GossipType
static readonly "MINOR_POSITIVE": $GossipType
static readonly "REPUTATION_CHANGE_PER_EVENT": integer
static readonly "REPUTATION_CHANGE_PER_EVERLASTING_MEMORY": integer
static readonly "REPUTATION_CHANGE_PER_TRADE": integer
static readonly "TRADING": $GossipType
readonly "decayPerDay": integer
readonly "decayPerTransfer": integer
readonly "id": string
readonly "max": integer
readonly "weight": integer

public static "fromEnum"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>): $StringRepresentable$EnumCodec<E>
public static "fromEnumWithMapping"<E extends ($Enum<E> & $StringRepresentable)>(supplier0: $Supplier$$Type<E[]>, function1: $Function$$Type<string, string>): $StringRepresentable$EnumCodec<E>
public "getSerializedName"(): string
public static "keys"(stringRepresentable0s: $StringRepresentable$$Type[]): $Keyable
public static "valueOf"(string0: string): $GossipType
public static "values"(): $GossipType[]
get "serializedName"(): string
}
}

declare module "net.minecraft.world.entity.ai.behavior.PrepareRamNearestTarget" {
import { $TargetingConditions$$Type } from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $SoundEvent } from "net.minecraft.sounds.SoundEvent"
import { $ToIntFunction$$Type } from "java.util.function.ToIntFunction"
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $Function$$Type } from "java.util.function.Function"

export class $PrepareRamNearestTarget<E extends $PathfinderMob = $PathfinderMob> extends $Behavior<E> {
static readonly "TIME_OUT_DURATION": integer

constructor(toIntFunction0: $ToIntFunction$$Type<E>, int1: integer, int2: integer, float3: float, targetingConditions4: $TargetingConditions$$Type, int5: integer, function6: $Function$$Type<E, $SoundEvent>)

}
}

declare module "net.minecraft.world.entity.ai.behavior.InteractWithDoor" {
import { $GlobalPos$$Type } from "net.minecraft.core.GlobalPos"
import { $List$$Type } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Set$$Type } from "java.util.Set"
import { $Optional$$Type } from "java.util.Optional"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BehaviorControl } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import { $Node$$Type } from "net.minecraft.world.level.pathfinder.Node"

export class $InteractWithDoor {
constructor()

public static "closeDoorsThatIHaveOpenedOrPassedThrough"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, node2: $Node$$Type, node3: $Node$$Type, set4: $Set$$Type<$GlobalPos$$Type>, optional5: $Optional$$Type<$List$$Type<$LivingEntity$$Type>>): void
public static "create"(): $BehaviorControl<$LivingEntity>
}
}

declare module "net.minecraft.world.entity.ai.village.ReputationEventType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReputationEventType {
}

export namespace $ReputationEventType {
const GOLEM_KILLED: $ReputationEventType
const TRADE: $ReputationEventType
const VILLAGER_HURT: $ReputationEventType
const VILLAGER_KILLED: $ReputationEventType
const ZOMBIE_VILLAGER_CURED: $ReputationEventType
function register(string0: string): $ReputationEventType
}
export abstract class $ReputationEventType$$Static implements $ReputationEventType {
static readonly "GOLEM_KILLED": $ReputationEventType
static readonly "TRADE": $ReputationEventType
static readonly "VILLAGER_HURT": $ReputationEventType
static readonly "VILLAGER_KILLED": $ReputationEventType
static readonly "ZOMBIE_VILLAGER_CURED": $ReputationEventType

static "register"(string0: string): $ReputationEventType
}
}

declare module "net.minecraft.world.entity.ai.behavior.Behavior$Status" {
import { $Enum } from "java.lang.Enum"

export class $Behavior$Status extends $Enum<$Behavior$Status> {
static readonly "RUNNING": $Behavior$Status
static readonly "STOPPED": $Behavior$Status

public static "valueOf"(string0: string): $Behavior$Status
public static "values"(): $Behavior$Status[]
}
}

declare module "net.minecraft.world.entity.ai.control.MoveControl$Operation" {
import { $Enum } from "java.lang.Enum"

export class $MoveControl$Operation extends $Enum<$MoveControl$Operation> {
static readonly "JUMPING": $MoveControl$Operation
static readonly "MOVE_TO": $MoveControl$Operation
static readonly "STRAFE": $MoveControl$Operation
static readonly "WAIT": $MoveControl$Operation

public static "valueOf"(string0: string): $MoveControl$Operation
public static "values"(): $MoveControl$Operation[]
}
}

declare module "net.minecraft.world.entity.ai.behavior.DoNothing" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior$Status } from "net.minecraft.world.entity.ai.behavior.Behavior$Status"
import { $ServerLevel$$Type } from "net.minecraft.server.level.ServerLevel"
import { $BehaviorControl } from "net.minecraft.world.entity.ai.behavior.BehaviorControl"

export class $DoNothing implements $BehaviorControl<$LivingEntity> {
constructor(int0: integer, int1: integer)

public "debugString"(): string
public "doStop"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, long2: long): void
public "getStatus"(): $Behavior$Status
public "tickOrStop"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, long2: long): void
public "tryStart"(serverLevel0: $ServerLevel$$Type, livingEntity1: $LivingEntity$$Type, long2: long): boolean
get "status"(): $Behavior$Status
}
}

declare module "net.minecraft.world.entity.ai.behavior.warden.ForceUnmount" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"

export class $ForceUnmount extends $Behavior<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.sensing.Sensing" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $Sensing {
constructor(mob0: $Mob$$Type)

public "hasLineOfSight"(entity0: $Entity$$Type): boolean
public "tick"(): void
}
}

declare module "net.minecraft.world.entity.ai.sensing.AdultSensor" {
import { $AgeableMob } from "net.minecraft.world.entity.AgeableMob"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $AdultSensor extends $Sensor<$AgeableMob> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.sensing.NearestBedSensor" {
import { $Mob } from "net.minecraft.world.entity.Mob"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $NearestBedSensor extends $Sensor<$Mob> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.village.poi.PoiSection" {
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $PoiType, $PoiType$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiType"
import { $Runnable$$Type } from "java.lang.Runnable"
import { $PoiRecord } from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $PoiManager$Occupancy$$Type } from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import { $Holder, $Holder$$Type } from "net.minecraft.core.Holder"
import { $Codec } from "com.mojang.serialization.Codec"
import { $Stream } from "java.util.stream.Stream"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $BiConsumer$$Type } from "java.util.function.BiConsumer"
import { $Optional } from "java.util.Optional"

export class $PoiSection {
constructor(runnable0: $Runnable$$Type)

public "add"(blockPos0: $BlockPos$$Type, holder1: $Holder$$Type<$PoiType$$Type>): void
public static "codec"(runnable0: $Runnable$$Type): $Codec<$PoiSection>
public "exists"(blockPos0: $BlockPos$$Type, predicate1: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>): boolean
/** @deprecated */
public "getFreeTickets"(blockPos0: $BlockPos$$Type): integer
public "getRecords"(predicate0: $Predicate$$Type<$Holder$$Type<$PoiType$$Type>>, occupancy1: $PoiManager$Occupancy$$Type): $Stream<$PoiRecord>
public "getType"(blockPos0: $BlockPos$$Type): $Optional<$Holder<$PoiType>>
public "refresh"(consumer0: $Consumer$$Type<$BiConsumer$$Type<$BlockPos$$Type, $Holder$$Type<$PoiType$$Type>>>): void
public "release"(blockPos0: $BlockPos$$Type): boolean
public "remove"(blockPos0: $BlockPos$$Type): void
}
}

declare module "net.minecraft.world.entity.ai.behavior.BlockPosTracker" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BlockPos, $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $Vec3, $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $PositionTracker } from "net.minecraft.world.entity.ai.behavior.PositionTracker"

export class $BlockPosTracker implements $PositionTracker {
constructor(blockPos0: $BlockPos$$Type)
constructor(vec30: $Vec3$$Type)

public "currentBlockPosition"(): $BlockPos
public "currentPosition"(): $Vec3
public "isVisibleBy"(livingEntity0: $LivingEntity$$Type): boolean
}
}

declare module "net.minecraft.world.entity.ai.goal.RangedBowAttackGoal" {
import { $Monster, $Monster$$Type } from "net.minecraft.world.entity.monster.Monster"
import { $RangedAttackMob, $RangedAttackMob$$Type } from "net.minecraft.world.entity.monster.RangedAttackMob"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Goal } from "net.minecraft.world.entity.ai.goal.Goal"

export class $RangedBowAttackGoal<T extends ($Mob & $RangedAttackMob) = ($Mob & $RangedAttackMob)> extends $Goal {
readonly "attackRadiusSqr": float

constructor<M extends ($Monster & $RangedAttackMob)>(m0: M, double1: double, int2: integer, float3: float)
constructor(t0: T, double1: double, int2: integer, float3: float)

public "setMinAttackInterval"(int0: integer): void
get "strafingTime"(): integer
set "strafingTime"(value: integer)
set "minAttackInterval"(value: integer)
}
}

declare module "net.minecraft.world.entity.ai.sensing.NearestLivingEntitySensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $NearestLivingEntitySensor<T extends $LivingEntity = $LivingEntity> extends $Sensor<T> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder" {
import { $AttributeInstance } from "net.minecraft.world.entity.ai.attributes.AttributeInstance"
import { $AttributeSupplier, $AttributeSupplier$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier"
import { $Map } from "java.util.Map"
import { $Attribute, $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AttributeSupplier$Builder {
readonly "builder": $Map<$Attribute, $AttributeInstance>

constructor()
constructor(attributeSupplier0: $AttributeSupplier$$Type)

public "add"(attribute0: $Attribute$$Type, double1: double): $AttributeSupplier$Builder
public "add"(attribute0: $Attribute$$Type): $AttributeSupplier$Builder
public "build"(): $AttributeSupplier
public "combine"(builder0: $AttributeSupplier$Builder$$Type): void
public "hasAttribute"(attribute0: $Attribute$$Type): boolean
}
}

declare module "net.minecraft.world.entity.ai.Brain$MemoryValue" {
import { $DynamicOps$$Type } from "com.mojang.serialization.DynamicOps"
import { $RecordBuilder$$Type } from "com.mojang.serialization.RecordBuilder"

export class $Brain$MemoryValue<U = any> {
public "serialize"<T>(dynamicOps0: $DynamicOps$$Type<T>, recordBuilder1: $RecordBuilder$$Type<T>): void
}
}

declare module "net.minecraft.world.entity.ai.targeting.TargetingConditions" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Predicate$$Type } from "java.util.function.Predicate"

export class $TargetingConditions {
static readonly "DEFAULT": $TargetingConditions

constructor(boolean0: boolean)

public "copy"(): $TargetingConditions
public static "forCombat"(): $TargetingConditions
public static "forNonCombat"(): $TargetingConditions
public "ignoreInvisibilityTesting"(): $TargetingConditions
public "ignoreLineOfSight"(): $TargetingConditions
public "range"(double0: double): $TargetingConditions
public "selector"(predicate0: $Predicate$$Type<$LivingEntity$$Type>): $TargetingConditions
public "test"(livingEntity0: $LivingEntity$$Type, livingEntity1: $LivingEntity$$Type): boolean
}
}

declare module "net.minecraft.world.entity.ai.memory.WalkTarget" {
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $Vec3$$Type } from "net.minecraft.world.phys.Vec3"
import { $BlockPos$$Type } from "net.minecraft.core.BlockPos"
import { $PositionTracker, $PositionTracker$$Type } from "net.minecraft.world.entity.ai.behavior.PositionTracker"

export class $WalkTarget {
constructor(positionTracker0: $PositionTracker$$Type, float1: float, int2: integer)
constructor(entity0: $Entity$$Type, float1: float, int2: integer)
constructor(vec30: $Vec3$$Type, float1: float, int2: integer)
constructor(blockPos0: $BlockPos$$Type, float1: float, int2: integer)

public "getCloseEnoughDist"(): integer
public "getSpeedModifier"(): float
public "getTarget"(): $PositionTracker
get "closeEnoughDist"(): integer
get "speedModifier"(): float
get "target"(): $PositionTracker
}
}

declare module "net.minecraft.world.entity.ai.goal.Goal$Flag" {
import { $Enum } from "java.lang.Enum"

export class $Goal$Flag extends $Enum<$Goal$Flag> {
static readonly "JUMP": $Goal$Flag
static readonly "LOOK": $Goal$Flag
static readonly "MOVE": $Goal$Flag
static readonly "TARGET": $Goal$Flag

public static "valueOf"(string0: string): $Goal$Flag
public static "values"(): $Goal$Flag[]
}
}

declare module "net.minecraft.world.entity.ai.control.Control" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Control {
}

export namespace $Control {
const probejs$$marker: never
}
export abstract class $Control$$Static implements $Control {
}
}

declare module "net.minecraft.world.entity.ai.Brain$Provider" {
import { $Dynamic$$Type } from "com.mojang.serialization.Dynamic"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Brain } from "net.minecraft.world.entity.ai.Brain"

export class $Brain$Provider<E extends $LivingEntity = $LivingEntity> {
public "makeBrain"(dynamic0: $Dynamic$$Type<any>): $Brain<E>
}
}

declare module "net.minecraft.world.entity.ai.behavior.FollowTemptation" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $Function$$Type } from "java.util.function.Function"

export class $FollowTemptation extends $Behavior<$PathfinderMob> {
static readonly "CLOSE_ENOUGH_DIST": double
static readonly "TEMPTATION_COOLDOWN": integer

constructor(function0: $Function$$Type<$LivingEntity$$Type, float>)
constructor(function0: $Function$$Type<$LivingEntity$$Type, float>, function1: $Function$$Type<$LivingEntity$$Type, double>)

}
}

declare module "net.minecraft.world.entity.ai.sensing.HurtBySensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $HurtBySensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.navigation.AmphibiousPathNavigation" {
import { $PathNavigation } from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Level$$Type } from "net.minecraft.world.level.Level"

export class $AmphibiousPathNavigation extends $PathNavigation {
constructor(mob0: $Mob$$Type, level1: $Level$$Type)

}
}

declare module "net.minecraft.world.entity.ai.sensing.PlayerSensor" {
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $Sensor } from "net.minecraft.world.entity.ai.sensing.Sensor"

export class $PlayerSensor extends $Sensor<$LivingEntity> {
constructor()

}
}

declare module "net.minecraft.world.entity.ai.behavior.JumpOnBed" {
import { $Behavior } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Mob } from "net.minecraft.world.entity.Mob"

export class $JumpOnBed extends $Behavior<$Mob> {
constructor(float0: float)

}
}

declare module "net.minecraft.world.entity.ai.control.MoveControl" {
import { $Control } from "net.minecraft.world.entity.ai.control.Control"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MoveControl implements $Control {
static readonly "MIN_SPEED": float
static readonly "MIN_SPEED_SQR": float

constructor(mob0: $Mob$$Type)

public "getSpeedModifier"(): double
public "getWantedX"(): double
public "getWantedY"(): double
public "getWantedZ"(): double
public "hasWanted"(): boolean
public "setWantedPosition"(double0: double, double1: double, double2: double, double3: double): void
public "strafe"(float0: float, float1: float): void
public "tick"(): void
get "speedModifier"(): double
get "wantedX"(): double
get "wantedY"(): double
get "wantedZ"(): double
}
}

