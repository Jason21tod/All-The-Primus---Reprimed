declare module "net.liopyu.entityjs.events.AddGoalSelectorsEventJS" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GoalSelector$$Type } from "net.minecraft.world.entity.ai.goal.GoalSelector"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"
import { $GoalEventJS } from "net.liopyu.entityjs.events.GoalEventJS"
import { $Function$$Type } from "java.util.function.Function"
import { $Supplier$$Type } from "java.util.function.Supplier"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Class$$Type } from "java.lang.Class"
import { $RangedAttackMob, $RangedAttackMob$$Type } from "net.minecraft.world.entity.monster.RangedAttackMob"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Difficulty$$Type } from "net.minecraft.world.Difficulty"
import { $Goal, $Goal$$Type } from "net.minecraft.world.entity.ai.goal.Goal"
import { $ContextUtils$GoalContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$GoalContext"

export class $AddGoalSelectorsEventJS<T extends $Mob = $Mob> extends $GoalEventJS<T> {
constructor(mob: T, selector: $GoalSelector$$Type)

/**
 * Enables the addition of arbitrary goals to an entity
 * 
 * It is the responsibility of the user to ensure the goal is
 * compatible with the entity
 * 
 * Example of usage:
 * =====================================
 * builder.arbitraryGoal(3, entity -> new $PathFindToRaidGoal(entity))
 * =====================================
 * 
 * Note in the example the entity must be an instance of Raider
 * 
 * @param priority - The priority of the goal
 * @param goalSupplier - The goal supplier, a function that takes a Mob and returns a Goal
 */
public "arbitraryGoal"(priority: integer, goalSupplier: $Function$$Type<T, $Goal>): void
/**
 * Adds a `AvoidEntityGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param entityClassToAvoid - The class of entity to avoid
 * @param avoidPredicate - The conditions under which an entity will be avoided
 * @param maxDist - The maximum distance from a entity the mob will detect and flee from it
 * @param walkSpeedModifier - Modifies the mob's speed when avoiding an entity
 * @param sprintSpeedModifier - Modifies the mob's speed when avoiding an entity at close range
 * @param onAvoidEntityPredicate - An additional predicate for entity avoidance
 */
public "avoidEntity"<E extends $LivingEntity>(priority: integer, entityClassToAvoid: $Class$$Type<E>, avoidPredicate: $Predicate$$Type<$LivingEntity$$Type>, maxDist: float, walkSpeedModifier: double, sprintSpeedModifier: double, onAvoidEntityPredicate: $Predicate$$Type<$LivingEntity$$Type>): void
/**
 * Adds a `BreakDoorGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param doorBreakTime - The time it takes to break a door, limited to 240 ticks
 * @param validDifficulties - Determines what difficulties are valid for the goal
 */
public "breakDoor"(priority: integer, doorBreakTime: integer, validDifficulties: $Predicate$$Type<$Difficulty$$Type>): void
/**
 * Adds a `BreathAirGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 */
public "breathAir"(priority: integer): void
/**
 * Adds a `BreedGoal` to the entity, only applicable to **animal** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param partnerClass - The class of animal that this entity breeds with, may be null to specify it be the same class as this entity
 */
public "breed"(priority: integer, speedModifier: double, partnerClass: $Class$$Type<$Animal$$Type>): void
/**
 * Adds a `ClimbOnTopOfPowderSnowGoal` to the entity
 * 
 * @param priority - The priority of the goal
 */
public "climbOnTopOfPowderedSnow"(priority: integer): void
/**
 * Adds a custom goal to the entity
 * 
 * @param name - The name of the custom goal
 * @param priority - The priority of the goal
 * @param canUse - Determines if the entity can use the goal
 * @param canContinueToUse - Determines if the entity can continue to use the goal, may be null
 * @param isInterruptable - If the goal may be interrupted
 * @param start - The action to perform when the goal starts
 * @param stop - The action to perform when the goal stops
 * @param requiresUpdateEveryTick - If the goal needs to be updated every tick
 * @param tick - The action to perform when the goal ticks
 */
public "customGoal"(name: string, priority: integer, canUse: $Predicate$$Type<T>, canContinueToUse: $Predicate$$Type<T>, isInterruptable: boolean, start: $Consumer$$Type<T>, stop: $Consumer$$Type<T>, requiresUpdateEveryTick: boolean, tick: $Consumer$$Type<T>): void
/**
 * Adds a `EatBlockGoal` to the entity
 * 
 * @param priority - The priority of the goal
 */
public "eatGrass"(priority: integer): void
/**
 * Adds a `FleeSunGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 */
public "fleeSun"(priority: integer, speedModifier: double): void
/**
 * Adds a `FloatGoal` to the entity
 * 
 * @param priority - The priority of the goal
 */
public "floatSwim"(priority: integer): void
/**
 * Adds a `FollowBoatGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 */
public "followBoat"(priority: integer): void
/**
 * Adds a `FollowMobGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param stopDistance - The distance away from the target the mob will stop
 * @param areaSize - The distance away from the mob, that will be searched for mobs to follow
 */
public "followMob"(priority: integer, speedModifier: double, stopDistance: float, areaSize: float): void
/**
 * Adds a `FollowOwnerGoal` to the entity, only applicable to **tamable** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param startDistance - The distance away from the owner the mob will start moving
 * @param stopDistance - The distance away from the owner the mob will stop moving
 * @param canFly - If the mob can teleport into leaves
 */
public "followOwner"(priority: integer, speedModifier: double, startDistance: float, stopDistance: float, canFly: boolean): void
/**
 * Adds a `FollowParentGoal` to the entity, only applicable to **animal** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 */
public "followParent"(priority: integer, speedModifier: double): void
/**
 * Adds a `RunAroundLikeCrazyGoal` to the entity, only applicable to **horse** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 */
public "horseRunAroundLikeCrazy"(priority: integer, speedModifier: double): void
/**
 * Adds a `LeapAtTargetGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param deltaY - Sets the delta movement of the animal in the y-axis
 */
public "leapAtTarget"(priority: integer, deltaY: float): void
/**
 * Adds a `LookAtPlayerGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param targetClass - The entity class that should be looked at
 * @param lookDistance - How far away the entity should be looked at
 * @param probability - The probability, in the range [0, 1], that the goal may be used
 * @param onlyHorizontal - Determines if the eye level must be the same to follow the target entity
 */
public "lookAtEntity"<E extends $LivingEntity>(priority: integer, targetClass: $Class$$Type<E>, lookDistance: float, probability: float, onlyHorizontal: boolean): void
/**
 * Adds a `MeleeAttackGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param followTargetEventIfNotSeen - Determines if the entity should follow the target even if it doesn't see it
 */
public "meleeAttack"(priority: integer, speedModifier: double, followTargetEventIfNotSeen: boolean): void
/**
 * Adds a `MoveBackToVillageGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param checkNoActionTime - Determines if the mob's noActionTime property should be checked
 */
public "moveBackToVillage"(priority: integer, speedModifier: double, checkNoActionTime: boolean): void
/**
 * Adds a `MoveThroughVillageGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param onlyAtNight - If this goal should only apply at night
 * @param distanceToPoi - The minimum distance to a poi the mob must be to have it be considered 'visited'
 * @param canDealWithDoors - If doors can be opened to navigate as part of this goal
 */
public "moveThroughVillage"(priority: integer, speedModifier: double, onlyAtNight: boolean, distanceToPoi: integer, canDealWithDoors: $Supplier$$Type<boolean>): void
/**
 * Adds a `MoveTowardsRestrictionGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 */
public "moveTowardsRestriction"(priority: integer, speedModifier: double): void
/**
 * Adds a `MoveTowardsTargetGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param distanceWithin - The distance the target must be within to move towards it
 */
public "moveTowardsTarget"(priority: integer, speedModifier: double, distanceWithin: float): void
/**
 * Adds a `OcelotAttackGoal` to the entity
 * 
 * @param priority - The priority of the goal
 */
public "ocelotAttack"(priority: integer): void
/**
 * Adds a `OpenDoorGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param closeDoor - If the entity should also close doors
 */
public "openDoor"(priority: integer, closeDoor: boolean): void
/**
 * Adds a `PanicGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 */
public "panic"(priority: integer, speedModifier: double): void
/**
 * Adds a `RandomLookAroundGoal` to the entity
 * 
 * @param priority - The priority of the goal
 */
public "randomLookAround"(priority: integer): void
/**
 * Adds a `RandomStrollGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param interval - Sets the interval at which the goal will be 'refreshed, any values below 1 will be 1.'
 * @param checkNoActionTime - Determines if the mob's noActionTime property should be checked
 */
public "randomStroll"(priority: integer, speedModifier: double, interval: integer, checkNoActionTime: boolean): void
/**
 * Adds a `RandomSwimmingGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param interval - Sets the interval at which the goal will be refreshed
 */
public "randomSwimming"(priority: integer, speedModifier: double, interval: integer): void
/**
 * Adds a `RangedAttackGoal` to the entity, only applicable to **ranged attack** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param attackIntervalMin - The minimum interval between attacks
 * @param attackIntervalMax - The maximum interval between attacks
 * @param attackRadius - The maximum distance something can be attacked from
 */
public "rangedAttack"<E extends ($Mob & $RangedAttackMob)>(priority: integer, speedModifier: double, attackIntervalMin: integer, attackIntervalMax: integer, attackRadius: float): void
/**
 * Remove all goals.
 * 
 * Example of usage:
 * =====================================
 * builder.removeAllGoals()
 * =====================================
 */
public "removeAllGoals"(): void
/**
 * Adds a `RemoveBlockGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param block - The registry name of a block, the block to be removed
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param verticalSearchRange - The vertical range the mob will search for the block
 */
public "removeBlock"(priority: integer, block: $ResourceLocation$$Type, speedModifier: double, verticalSearchRange: integer): void
/**
 * Remove a goal from the entity via class reference.
 * 
 * Example of usage:
 * =====================================
 * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
 * builder.removeGoal($PanicGoal)
 * =====================================
 * 
 * @param goal - The goal class to remove
 */
public "removeGoal"(goal: $Class$$Type<$Goal$$Type>): void
/**
 * Remove all goals fitting the specified predicate. Returns a boolean
 * 
 * Example of usage:
 * =====================================
 * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
 * e.removeGoals(context => {
 *     const { goal, entity } = context
 *     return goal.getClass() == $PanicGoal
 * })
 * =====================================
 * 
 * @param goalFunction - A function to remove goals with entity & available goals as arguments
 */
public "removeGoals"(goalFunction: $Function$$Type<$ContextUtils$GoalContext$$Type, boolean>): void
/**
 * Adds a `RestrictSunGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 */
public "restrictSun"(priority: integer): void
/**
 * Adds a `SitWhenOrderedToGoal` to the entity, only applicable to **tamable** mobs
 * 
 * @param priority - The priority of the goal
 */
public "sitWhenOrdered"(priority: integer): void
/**
 * Adds a `StrollThroughVillageGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param interval - Sets how often the goal 'refreshes'
 */
public "strollThroughVillage"(priority: integer, interval: integer): void
/**
 * Adds a `TemptGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param temptItems - The ingredient that determines what items tempt the mob
 * @param canScare - If the mob can be scared by getting to close to the tempter
 */
public "tempt"(priority: integer, speedModifier: double, temptItems: $Ingredient$$Type, canScare: boolean): void
/**
 * Adds a `TryFindWaterGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 */
public "tryFindWater"(priority: integer): void
/**
 * Adds a `UseItemGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param itemToUse - The item that will be used
 * @param soundEvent - The registry name of a sound event that should play when the item is used, may be null to indicate not sound event should play
 * @param canUseSelector - Determines when the item may be used
 */
public "useItem"(priority: integer, itemToUse: $ItemStack$$Type, soundEvent: $ResourceLocation$$Type, canUseSelector: $Predicate$$Type<T>): void
/**
 * Adds a `WaterAvoidingRandomFlyingGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 */
public "waterAvoidingRandomFlying"(priority: integer, speedModifier: double): void
/**
 * Adds a `WaterAvoidRandomStrollingGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param speedModifier - Sets the speed at which the mob should try to move
 * @param probability - The probability, in the range [0, 1], that the entity picks a new position
 */
public "waterAvoidingRandomStroll"(priority: integer, speedModifier: double, probability: float): void
}
}

declare module "net.liopyu.entityjs.events.EntityModificationEventJS" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $Consumer, $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $Map } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ModifyEntityBuilder, $ModifyEntityBuilder$$Type } from "net.liopyu.entityjs.builders.modification.ModifyEntityBuilder"

export class $EntityModificationEventJS extends $EventJS {
static readonly "createCustomMap": $Map<$ResourceLocation, $Consumer<$ModifyEntityBuilder>>
static readonly "eventMap": $Map<$EntityType<any>, $EntityModificationEventJS>

public "determineModificationType"(type: $EntityType$$Type<any>, entity: $Entity$$Type): $ModifyEntityBuilder
public static "getOrCreate"(entityType: $EntityType$$Type<any>, entity: $Entity$$Type): $EntityModificationEventJS
/**
 * Entity type modification event. Allows modification of methods for any existing entity. 
 *  
 * This event determines the entity's type and uses the appropriate builder for modification. 
 *  
 * Builders: 
 *     - ModifyPathfinderMobBuilder: For entities extending {@link PathfinderMob} 
 *     - ModifyMobBuilder: For entities extending {@link Mob} 
 *     - ModifyLivingEntityBuilder: For entities extending {@link LivingEntity} 
 *     - ModifyEntityBuilder: For entities extending {@link Entity} 
 *  
 * Example usage: 
 * ```javascript
 * EntityJSEvents.modifyEntity(event => {
 *     event.modify("minecraft:zombie", builder => {
 *         builder.onRemovedFromWorld(entity => {
 *             // Execute code when the zombie is removed from the world.
 *         })
 *     })
 * })
 * ```
 * 
 * @param entityType - The entity type to modify
 * @param modifyBuilder - A consumer to modify the entity type.
 */
public "modify"(entityType: $EntityType$$Type<any>, modifyBuilder: $Consumer$$Type<$ModifyEntityBuilder$$Type>): void
}
}

declare module "net.liopyu.entityjs.events.GoalEventJS" {
import { $GoalSelector$$Type } from "net.minecraft.world.entity.ai.goal.GoalSelector"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $GoalEventJS<T extends $Mob = $Mob> extends $EventJS {
constructor(mob: T, selector: $GoalSelector$$Type)

public "getEntity"(): $Mob
get "entity"(): $Mob
}
}

declare module "net.liopyu.entityjs.events.RegisterMobCategoryEventJS$RegisterMobCategoryEvent" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EventItf } from "com.mega.endinglib.api.event.EventItf"
import { $Event } from "net.minecraftforge.eventbus.api.Event"
import { $RegisterMobCategoryEventJS$MobCategoryRegistrationHelper$$Type } from "net.liopyu.entityjs.events.RegisterMobCategoryEventJS$MobCategoryRegistrationHelper"

export class $RegisterMobCategoryEventJS$RegisterMobCategoryEvent extends $Event implements $EventItf {
constructor(registrationHelperConsumer: $Consumer$$Type<$RegisterMobCategoryEventJS$MobCategoryRegistrationHelper$$Type>)
constructor()

public "el_isEventUnCancelable"(): boolean
public "el_setEventUnCancelable"(boolean0: boolean): void
public "registerCategories"(name: string, displayName: string, max: integer, isFriendly: boolean, isPersistent: boolean, despawnDistance: integer): void
get "el_isUnCancelable"(): boolean
set "el_isUnCancelable"(value: boolean)
}
}

declare module "net.liopyu.entityjs.events.BuildBrainEventJS" {
import { $List$$Type } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $Behavior$$Type } from "net.minecraft.world.entity.ai.behavior.Behavior"
import { $Behaviors } from "net.liopyu.entityjs.util.ai.Behaviors"
import { $Brain$$Type } from "net.minecraft.world.entity.ai.Brain"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Activity$$Type } from "net.minecraft.world.entity.schedule.Activity"

export class $BuildBrainEventJS<T extends $LivingEntity = $LivingEntity> extends $EventJS {
readonly "behaviors": $Behaviors

constructor(base: $Brain$$Type<T>)

public "addActivity"(activity: $Activity$$Type, i: integer, behaviors: $List$$Type<$Behavior$$Type<$LivingEntity$$Type>>): void
public "coreActivity"(i: integer, behaviors: $List$$Type<$Behavior$$Type<$LivingEntity$$Type>>): void
public "idleActivity"(i: integer, behaviors: $List$$Type<$Behavior$$Type<$LivingEntity$$Type>>): void
}
}

declare module "net.liopyu.entityjs.events.AddGoalTargetsEventJS" {
import { $GoalSelector$$Type } from "net.minecraft.world.entity.ai.goal.GoalSelector"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AABB$$Type } from "net.minecraft.world.phys.AABB"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $NeutralMob, $NeutralMob$$Type } from "net.minecraft.world.entity.NeutralMob"
import { $GoalEventJS } from "net.liopyu.entityjs.events.GoalEventJS"
import { $Function$$Type } from "java.util.function.Function"
import { $List$$Type } from "java.util.List"
import { $Class$$Type } from "java.lang.Class"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Goal, $Goal$$Type } from "net.minecraft.world.entity.ai.goal.Goal"
import { $ContextUtils$GoalContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$GoalContext"

export class $AddGoalTargetsEventJS<T extends $Mob = $Mob> extends $GoalEventJS<T> {
constructor(mob: T, selector: $GoalSelector$$Type)

/**
 * Enables the addition of arbitrary goals to an entity
 * 
 * It is the responsibility of the user to ensure the goal is
 * compatible with the entity
 * 
 * Example of usage:
 * =====================================
 * builder.arbitraryTargetGoal(3, entity -> new $DefendVillageTargetGoal(entity))
 * =====================================
 * 
 * Note in the example the entity must be an instance of IronGolem
 * 
 * @param priority - The priority of the goal
 * @param goalSupplier - The goal supplier, a function that takes a Mob and returns a Goal
 */
public "arbitraryTargetGoal"(priority: integer, goalSupplier: $Function$$Type<T, $Goal>): void
/**
 * Adds s `HurtByTargetGoal` to the entity, only applicable to **pathfinder** mobs
 * 
 * @param priority - The priority of the goal
 * @param toIgnoreDamage - The classes that damage should be ignored from
 * @param alertOthers - If other mobs should be alerted when this mob is damaged
 * @param toIgnoreAlert - The entity classes that should not be alerted
 */
public "hurtByTarget"(priority: integer, toIgnoreDamage: $List$$Type<$Class$$Type<any>>, alertOthers: boolean, toIgnoreAlert: $List$$Type<$Class$$Type<any>>): void
/**
 * Adds a `NearestAttackableTargetGoalJS` to the entity
 * 
 * @param priority - The priority of the goal
 * @param targetClass - The entity class that should be targeted
 * @param randomInterval - The interval at which the goal amy be 'refreshed'
 * @param mustSee - If the mob must have line of sight at all times
 * @param mustReach - If the mob must be able to reach the target to attack
 * @param targetConditions - The conditions under which the targeted entity will be targeted, may be null
 * @param radius - The AABB radius to check for a potential target
 */
public "nearestAttackableTarget"<E extends $LivingEntity>(priority: integer, targetClass: $Class$$Type<E>, randomInterval: integer, mustSee: boolean, mustReach: boolean, targetConditions: $Predicate$$Type<$LivingEntity$$Type>, radius: $AABB$$Type): void
/**
 * Adds a `NearestAttackableTargetGoal` to the entity
 * 
 * @param priority - The priority of the goal
 * @param targetClass - The entity class that should be targeted
 * @param randomInterval - The interval at which the goal amy be 'refreshed'
 * @param mustSee - If the mob must have line of sight at all times
 * @param mustReach - If the mob must be able to reach the target to attack
 * @param targetConditions - The conditions under which the targeted entity will be targeted, may be null
 */
public "nearestAttackableTarget"<E extends $LivingEntity>(priority: integer, targetClass: $Class$$Type<E>, randomInterval: integer, mustSee: boolean, mustReach: boolean, targetConditions: $Predicate$$Type<$LivingEntity$$Type>): void
/**
 * Adds a `NonTameRandomTargetGoal` to the entity, only applicable to **tamable** mobs
 * 
 * @param priority - The priority of the goal
 * @param targetClass - The entity class that should be targeted
 * @param mustSee - If the mob must have line of sight at all times
 * @param targetConditions - The conditions under which the targeted entity will be targeted, may be null
 */
public "nonTameRandomTarget"<E extends $LivingEntity>(priority: integer, targetClass: $Class$$Type<E>, mustSee: boolean, targetConditions: $Predicate$$Type<$LivingEntity$$Type>): void
/**
 * Adds a `OwnerHurtByTargetGoal` to the entity, only applicable to **tamable** mobs
 * 
 * @param priority - The priority of the goal
 */
public "ownerHurtByTarget"(priority: integer): void
/**
 * Remove all goals.
 * 
 * Example of usage:
 * =====================================
 * builder.removeAllGoals()
 * =====================================
 */
public "removeAllGoals"(): void
/**
 * Remove a goal from the entity via class reference.
 * 
 * Example of usage:
 * =====================================
 * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
 * builder.removeGoal($PanicGoal)
 * =====================================
 * 
 * @param goal - The goal class to remove
 */
public "removeGoal"(goal: $Class$$Type<$Goal$$Type>): void
/**
 * Remove all goals fitting the specified predicate. Returns a boolean
 * 
 * Example of usage:
 * =====================================
 * let $PanicGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.PanicGoal")
 * e.removeGoals(context => {
 *     const { goal, entity } = context
 *     return goal.getClass() == $PanicGoal
 * })
 * =====================================
 * 
 * @param goalFunction - A function to remove goals with entity & available goals as arguments
 */
public "removeGoals"(goalFunction: $Function$$Type<$ContextUtils$GoalContext$$Type, boolean>): void
/**
 * Adds a `ResetUniversalAngerTargetGoal` to the entity, only applicable to **neutral** mobs
 * 
 * @param priority - The priority of the goal
 * @param alertOthersOfSameType - If other mobs of the same type should be alerted
 */
public "resetUniversalAngerTarget"<E extends ($Mob & $NeutralMob)>(priority: integer, alertOthersOfSameType: boolean): void
}
}

declare module "net.liopyu.entityjs.events.AttributeCreationEventJS$AttributeCreationHelper" {
import { $AttributeSupplier$Builder$$Type } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AttributeCreationEventJS$AttributeCreationHelper {
constructor(builder: $AttributeSupplier$Builder$$Type)

/** Adds the given attribute with default value */
public "add"(attribute: $Attribute$$Type, value: double): void
/**
 * Adds the given attribute with default value
 * 
 * @param attribute - Attribute or resource location string
 * @param value - Default value for the attribute
 */
public "add"(attribute: any, value: double): void
}
}

declare module "net.liopyu.entityjs.events.ModifyAttributeEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $EntityAttributeModificationEvent$$Type } from "net.minecraftforge.event.entity.EntityAttributeModificationEvent"
import { $ModifyAttributeEventJS$AttributeModificationHelper$$Type } from "net.liopyu.entityjs.events.ModifyAttributeEventJS$AttributeModificationHelper"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $ModifyAttributeEventJS extends $EventJS {
constructor(event: $EntityAttributeModificationEvent$$Type)

/** Returns a list of all entity types that can have their attributes modified by this event */
public "getAllTypes"(): $List<$EntityType<$LivingEntity>>
/** Returns a list of all attributes the given entity type has by default */
public "getAttributes"(entityType: $EntityType$$Type<$LivingEntity$$Type>): $List<$Attribute>
/**
 * Modifies the given entity type's attributes
 * 
 * @param entityType - The entity type whose default attributes are to be modified
 * @param attributes - A consumer for setting the default attributes and their values
 */
public "modify"(entityType: $EntityType$$Type<$LivingEntity$$Type>, attributes: $Consumer$$Type<$ModifyAttributeEventJS$AttributeModificationHelper$$Type>): void
get "allTypes"(): $List<$EntityType<$LivingEntity>>
}
}

declare module "net.liopyu.entityjs.events.ModifyAttributeEventJS$AttributeModificationHelper" {
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $EntityAttributeModificationEvent$$Type } from "net.minecraftforge.event.entity.EntityAttributeModificationEvent"
import { $Record } from "java.lang.Record"
import { $Attribute$$Type } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $ModifyAttributeEventJS$AttributeModificationHelper extends $Record {
constructor(type: $EntityType$$Type<$LivingEntity$$Type>, event: $EntityAttributeModificationEvent$$Type)

/**
 * Adds the given attribute to the entity type, using the provided default value
 * 
 * It is safe to add an attribute that an entity type already has
 * 
 * @param attribute - The attribute to add
 * @param defaultValue - The default value of the attribute
 */
public "add"(attribute: any, defaultValue: double): void
/**
 * Adds the given attribute to the entity type, using its default value
 * 
 * It is safe to add an attribute that an entity type already has
 */
public "add"(attribute: $Attribute$$Type): void
}
}

declare module "net.liopyu.entityjs.events.RegisterMobCategoryEventJS$MobCategoryRegistrationHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $RegisterMobCategoryEventJS$MobCategoryRegistrationHelper {
constructor(name: string, displayName: string, max: integer, isFriendly: boolean, isPersistent: boolean, despawnDistance: integer)

public "getDespawnDistance"(): integer
public "getDisplayName"(): string
public "getMax"(): integer
public "getName"(): string
public "isFriendly"(): boolean
public "isPersistent"(): boolean
get "despawnDistance"(): integer
get "displayName"(): string
get "max"(): integer
get "name"(): string
get "friendly"(): boolean
get "persistent"(): boolean
}
}

declare module "net.liopyu.entityjs.events.AttributeCreationEventJS" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AttributeCreationEventJS$AttributeCreationHelper$$Type } from "net.liopyu.entityjs.events.AttributeCreationEventJS$AttributeCreationHelper"
import { $List } from "java.util.List"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityAttributeCreationEvent$$Type } from "net.minecraftforge.event.entity.EntityAttributeCreationEvent"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $AttributeSupplier } from "net.minecraft.world.entity.ai.attributes.AttributeSupplier"
import { $Map } from "java.util.Map"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Attribute } from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $AttributeCreationEventJS extends $EventJS {
constructor(event: $EntityAttributeCreationEvent$$Type)

/**
 * Modifies the given entity type's default attributes
 * 
 * @param entityType - The entity type whose default attributes are to be modified
 * @param attributes - A consumer for modifying the default attributes and their values
 */
public "create"(entityType: $EntityType$$Type<$LivingEntity$$Type>, attributes: $Consumer$$Type<$AttributeCreationEventJS$AttributeCreationHelper$$Type>): void
/** Returns a list of all entity types available in the attribute map */
public "getAllTypes"(): $List<$EntityType<$LivingEntity>>
/** Returns a list of all attributes the given entity type has by default */
public "getAttributes"(entityType: $EntityType$$Type<$LivingEntity$$Type>): $List<$Attribute>
public "getMap"(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>
get "allTypes"(): $List<$EntityType<$LivingEntity>>
get "map"(): $Map<$EntityType<$LivingEntity>, $AttributeSupplier>
}
}

declare module "net.liopyu.entityjs.events.RegisterSpawnPlacementsEventJS" {
import { $SpawnPlacements$SpawnPredicate$$Type } from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $SpawnPlacementRegisterEvent$$Type } from "net.minecraftforge.event.entity.SpawnPlacementRegisterEvent"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"

export class $RegisterSpawnPlacementsEventJS extends $EventJS {
constructor(event: $SpawnPlacementRegisterEvent$$Type)

/**
 * ANDs the given spawn predicate with the existing spawn predicates of the given entity type
 * 
 * @param entityType - The entity type whose spawn placement is being modified
 * @param predicate - The spawn predicate that will be ANDed with the entity type's existing spawn predicates
 */
public "and"<T extends $Entity>(entityType: $EntityType$$Type<T>, predicate: $SpawnPlacements$SpawnPredicate$$Type<T>): void
/**
 * ORs the given spawn predicate with the existing spawn predicate of the given entity type
 * 
 * @param entityType - The entity type whose spawn placement is being modified
 * @param predicate - The spawn predicate that will be ORed with the entity type's existing spawn predicates
 */
public "or"<T extends $Entity>(entityType: $EntityType$$Type<T>, predicate: $SpawnPlacements$SpawnPredicate$$Type<T>): void
/**
 * Replaces the given entity type's spawn rules
 * 
 * @param entityType - The entity type whose spawn placement is being replaced
 * @param placementType - The spawn placement type to use
 * @param heightmap - The heightmap to use
 * @param predicate - The spawn predicate for the entity type's spawning
 */
public "replace"<T extends $Entity>(entityType: $EntityType$$Type<T>, placementType: $SpawnPlacements$Type$$Type, heightmap: $Heightmap$Types$$Type, predicate: $SpawnPlacements$SpawnPredicate$$Type<T>): void
}
}

declare module "net.liopyu.entityjs.events.BuildBrainProviderEventJS" {
import { $SensorType$$Type } from "net.minecraft.world.entity.ai.sensing.SensorType"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $MemoryModuleType$$Type } from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $Brain$Provider } from "net.minecraft.world.entity.ai.Brain$Provider"
import { $Sensor$$Type } from "net.minecraft.world.entity.ai.sensing.Sensor"

/**
 * This event is fired during entity creation and is responsible
 * for adding the `MemoryModuleType` and `SensorType`s the used
 * by the entity.
 * 
 * This is only posted for entities made through a builder
 */
export class $BuildBrainProviderEventJS<T extends $LivingEntity = $LivingEntity> extends $EventJS {
constructor()

/** Adds the provided `MemoryModuleType` to the entity type's memories */
public "addMemory"(memory: $MemoryModuleType$$Type<any>): void
/** Adds the provided `SensorType` to the entity type's sensors */
public "addSensor"(sensor: $SensorType$$Type<$Sensor$$Type<$LivingEntity$$Type>>): void
public "provide"(): $Brain$Provider<T>
}
}

declare module "net.liopyu.entityjs.events.BiomeSpawnsEventJS" {
import { $List$$Type } from "java.util.List"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"

export class $BiomeSpawnsEventJS extends $EventJS {
constructor()

/**
 * Adds a spawn to the given entity type in the given biomes
 * 
 * @param entityType - The entity type to add a spawn to
 * @param biomes - A list of biomes and biome tags to spawn in
 * @param weight - The spawn weight
 * @param minCount - The minimum number of entities to spawn
 * @param maxCount - The maximum number of entities to spawn
 */
public "addSpawn"(entityType: $EntityType$$Type<any>, biomes: $List$$Type<string>, weight: integer, minCount: integer, maxCount: integer): void
/**
 * Removes the given entity type spawns from the given biomes
 * 
 * @param entityType - The entity type to remove spawns from
 * @param biomes - A list of biomes and biome tags to remove the spawns from
 */
public "removeSpawn"(entityType: $EntityType$$Type<any>, biomes: $List$$Type<string>): void
}
}

