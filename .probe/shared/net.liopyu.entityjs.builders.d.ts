declare module "net.liopyu.entityjs.builders.living.entityjs.MobBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ContextUtils$TargetChangeContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$TargetChangeContext"
import { $SpawnEggItemBuilder$$Type } from "net.liopyu.entityjs.item.SpawnEggItemBuilder"
import { $ContextUtils$EntityDistanceToPlayerContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityDistanceToPlayerContext"
import { $ContextUtils$PlayerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext"
import { $ContextUtils$EntityProjectileWeaponContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityProjectileWeaponContext"
import { $Function$$Type } from "java.util.function.Function"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BaseLivingEntityBuilder } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import { $ContextUtils$EntityItemStackContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityItemStackContext"
import { $ContextUtils$EntityLevelContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityLevelContext"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $MobBuilder<T extends ($Mob & $IAnimatableJS) = ($Mob & $IAnimatableJS)> extends $BaseLivingEntityBuilder<T> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets the interval in ticks between ambient sounds for the mob entity.
 * 
 * @param ambientSoundInterval The interval in ticks between ambient sounds.
 * Defaults to 120.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.ambientSoundInterval(100);
 * ```
 */
public "ambientSoundInterval"(ambientSoundInterval: integer): $MobBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs an eating action.
 * 
 * @param ate A Consumer accepting a LivingEntity parameter,
 *            defining the behavior to be executed when the entity eats.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.ate(entity => {
 *     // Custom logic to handle the entity's eating action
 *     // Access information about the entity using the provided parameter.
 * });
 * ```
 */
public "ate"(ate: $Consumer$$Type<$LivingEntity$$Type>): $MobBuilder<T>
/**
 * Sets a function to determine if the entity can be leashed.
 * 
 * @param canBeLeashed A Function accepting a ContextUtils.PlayerEntityContext parameter
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.canBeLeashed(context => {
 *     return true // Return true if the entity can be leashed, false otherwise.
 * });
 * ```
 */
public "canBeLeashed"(canBeLeashed: $Function$$Type<$ContextUtils$PlayerEntityContext$$Type, any>): $MobBuilder<T>
/**
 * Sets the ingredient required for the entity to fire a projectile weapon.
 * 
 * @param canFireProjectileWeapon An Ingredient representing the required item for firing a projectile weapon.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.canFireProjectileWeapon([
 *     'minecraft:bow',
 *     'minecraft:crossbow'
 * ]);
 * ```
 */
public "canFireProjectileWeapon"(canFireProjectileWeapon: $Ingredient$$Type): $MobBuilder<T>
/**
 * Sets a predicate to determine whether the entity can fire a projectile weapon.
 * 
 * @param canFireProjectileWeaponPredicate A Predicate accepting a
 *            ContextUtils.EntityProjectileWeaponContext parameter,
 *            defining the condition under which the entity can fire a projectile weapon.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.canFireProjectileWeaponPredicate(context => {
 *     // Custom logic to determine whether the entity can fire a projectile weapon
 *     // Access information about the entity and the projectile weapon using the provided context.
 *     return context.projectileWeapon.id == 'minecraft:bow'; // Replace with your specific condition.
 * });
 * ```
 */
public "canFireProjectileWeaponPredicate"(canFireProjectileWeaponPredicate: $Function$$Type<$ContextUtils$EntityProjectileWeaponContext$$Type, any>): $MobBuilder<T>
/**
 * Sets the function to determine whether the entity can hold an item.
 * 
 * @param canHoldItem A Function accepting a {@link ContextUtils.EntityItemStackContext} parameter,
 *                    defining the condition for the entity to hold an item.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.canHoldItem(context => {
 *     // Custom logic to determine whether the entity can hold an item based on the provided context.
 *     return true;
 * });
 * ```
 */
public "canHoldItem"(canHoldItem: $Function$$Type<$ContextUtils$EntityItemStackContext$$Type, any>): $MobBuilder<T>
/**
 * Sets whether the entity can jump.
 * 
 * @param canJump A boolean indicating whether the entity can jump.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.canJump(true);
 * ```
 */
public "canJump"(canJump: boolean): $MobBuilder<T>
/**
 * Sets the function to determine whether the entity can pick up loot.
 * 
 * @param canPickUpLoot A Function accepting a {@link Mob} parameter,
 *                      defining the condition for the entity to pick up loot.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.canPickUpLoot(entity => {
 *     // Custom logic to determine whether the entity can pick up loot based on the provided mob.
 *     return true;
 * });
 * ```
 */
public "canPickUpLoot"(canPickUpLoot: $Function$$Type<$Mob$$Type, any>): $MobBuilder<T>
/**
 * Sets a function to determine the PathNavigation of the entity.
 * 
 * @param createNavigation A Function accepting an EntityLevelContext parameter
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.createNavigation(context => {
 *     const {entity, level} = context
 *     return EntityJSUtils.createWallClimberNavigation(entity, level) // Return some path navigation
 * });
 * ```
 */
public "createNavigation"(createNavigation: $Function$$Type<$ContextUtils$EntityLevelContext$$Type, any>): $MobBuilder<T>
/** Creates a spawn egg item for this entity type */
public "eggItem"(eggItem: $Consumer$$Type<$SpawnEggItemBuilder$$Type>): $MobBuilder<T>
/**
 * Sets whether persistence is required for the entity.
 * 
 * @param isPersistenceRequired A boolean indicating whether persistence is required.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.isPersistenceRequired(true);
 * ```
 */
public "isPersistenceRequired"(isPersistenceRequired: boolean): $MobBuilder<T>
/**
 * Sets the function to determine the squared melee attack range for the entity.
 * 
 * @param meleeAttackRangeSqr A Function accepting a {@link Mob} parameter,
 *                           defining the squared melee attack range based on the entity's state.
 *                           Returns a 'Double' value representing the squared melee attack range.
 * Example usage:
 * ```javascript
 * mobBuilder.meleeAttackRangeSqr(entity => {
 *     // Custom logic to calculate the squared melee attack range based on the provided mob.
 *     return 2;
 * });
 * ```
 */
public "meleeAttackRangeSqr"(meleeAttackRangeSqr: $Function$$Type<$Mob$$Type, any>): $MobBuilder<T>
/**
 * Function which sets the offset for riding on the mob entity.
 * 
 * @param myRidingOffset The offset value for riding on the mob.
 * Defaults to 0.0.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.myRidingOffset(entity => {
 *     //Use the provided context about the entity to determine the riding offset of the passengers
 *     return 5 //Some double value;
 * })
 * ```
 */
public "myRidingOffset"(myRidingOffset: $Function$$Type<$LivingEntity$$Type, any>): $MobBuilder<T>
/** Indicates that no egg item should be created for this entity type */
public "noEggItem"(): $MobBuilder<T>
/**
 * Sets a callback function to be executed when the entity's target changes.
 * 
 * @param setTarget A Consumer accepting a ContextUtils.TargetChangeContext parameter,
 *                  defining the behavior to be executed when the entity's target changes.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.onTargetChanged(context => {
 *     // Custom logic to handle the entity's target change
 *     // Access information about the target change using the provided context.
 * });
 * ```
 */
public "onTargetChanged"(setTarget: $Consumer$$Type<$ContextUtils$TargetChangeContext$$Type>): $MobBuilder<T>
/**
 * Sets a predicate to determine if the entity should be removed when far away from the player.
 * 
 * @param removeWhenFarAway A Function accepting a ContextUtils.EntityDistanceToPlayerContext parameter,
 *                          defining the condition for the entity to be removed when far away.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.removeWhenFarAway(context => {
 *     // Custom logic to determine if the entity should be removed when far away
 *     // Return true if the entity should be removed based on the provided context.
 * });
 * ```
 */
public "removeWhenFarAway"(removeWhenFarAway: $Function$$Type<$ContextUtils$EntityDistanceToPlayerContext$$Type, any>): $MobBuilder<T>
/**
 * Sets the sound to play when the entity is ambient using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.setAmbientSound("minecraft:entity.zombie.ambient");
 * ```
 */
public "setAmbientSound"(ambientSound: any): $MobBuilder<T>
/** Sets a function to define the entity's JumpControl behavior */
public "setJumpControl"(setJumpControl: $Function$$Type<$LivingEntity$$Type, any>): $MobBuilder<T>
/** Sets a function to define the entity's LookControl behavior */
public "setLookControl"(setLookControl: $Function$$Type<$LivingEntity$$Type, any>): $MobBuilder<T>
/** Sets a function to define the entity's MoveControl behavior */
public "setMoveControl"(setMoveControl: $Function$$Type<$LivingEntity$$Type, any>): $MobBuilder<T>
/**
 * Sets whether the entity should despawn in peaceful difficulty.
 * 
 * @param shouldDespawnInPeaceful A boolean indicating whether the entity should despawn in peaceful difficulty.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.shouldDespawnInPeaceful(true);
 * ```
 */
public "shouldDespawnInPeaceful"(shouldDespawnInPeaceful: boolean): $MobBuilder<T>
/**
 * Sets the callback function to be executed when the entity ticks while leashed.
 * 
 * @param consumer A Consumer accepting a {@link ContextUtils.PlayerEntityContext} parameter,
 *                 defining the behavior to be executed when the entity ticks while leashed.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.tickLeash(context => {
 *     // Custom logic to handle the entity's behavior while leashed.
 *     // Access information about the player and entity using the provided context.
 * });
 * ```
 */
public "tickLeash"(consumer: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $MobBuilder<T>
set "ambientSound"(value: any)
set "jumpControl"(value: $Function$$Type<$LivingEntity$$Type, any>)
set "lookControl"(value: $Function$$Type<$LivingEntity$$Type, any>)
set "moveControl"(value: $Function$$Type<$LivingEntity$$Type, any>)
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.HorseJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$PlayerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext"
import { $HorseEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.HorseEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $HorseJSBuilder extends $AnimalEntityBuilder<$HorseEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultBehaviourGoals(false);
 * ```
 */
public "defaultBehaviourGoals"(defaultBehaviourGoals: boolean): $HorseJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $HorseJSBuilder
/**
 * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
 * This is fired after the entity is tamed and all tame logic has already taken place.
 * Useful if you don't want to mess with the UUID logic in the tameOverride method.
 * 
 * @param onTamed A Consumer that fires when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * builder.onTamed(entity => {
 *     // Do stuff when the entity is tamed.
 * });
 * ```
 */
public "onTamed"(onTamed: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $HorseJSBuilder
/**
 * Sets a Consumer invoked after the entity is tamed
 * and replaces the logic used to set the UUID of the owner
 * with the parameter of ContextUtils.PlayerEntityContext callback
 * 
 * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * builder.tameOverride(context => {
 *     const {entity,player} = context
 *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
 *     entity.setOwnerUUID(player.getUUID());
 * });
 * ```
 */
public "tameOverride"(tameOverride: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $HorseJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.BoatJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $BoatEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.vanilla.BoatEntityBuilder"
import { $BoatEntityJS } from "net.liopyu.entityjs.entities.nonliving.vanilla.BoatEntityJS"

export class $BoatJSBuilder extends $BoatEntityBuilder<$BoatEntityJS> {
constructor(i: $ResourceLocation$$Type)

public "createObject"(): $EntityType<$BoatEntityJS>
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ArrowEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ContextUtils$ArrowPlayerContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ArrowPlayerContext"
import { $ContextUtils$ArrowLivingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ArrowLivingEntityContext"
import { $ContextUtils$CollidingProjectileEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CollidingProjectileEntityContext"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $AbstractArrow, $AbstractArrow$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $List } from "java.util.List"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BaseNonAnimatableEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseNonAnimatableEntityBuilder"
import { $ContextUtils$ArrowEntityHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ArrowEntityHitContext"
import { $ContextUtils$ArrowBlockHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ArrowBlockHitContext"
import { $IArrowEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.IArrowEntityJS"

export class $ArrowEntityBuilder<T extends ($AbstractArrow & $IArrowEntityJS) = ($AbstractArrow & $IArrowEntityJS)> extends $BaseNonAnimatableEntityBuilder<T> {
static readonly "thisList": $List<$ArrowEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

/**
 * Sets a function to determine if the arrow entity can hit a specific entity.
 * 
 * @param canHitEntity Function to check if the arrow can hit the entity.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.canHitEntity(entity => {
 *     // Custom logic to determine if the arrow can hit the specified entity
 *     // Return true if the arrow can hit, false otherwise.
 * });
 * ```
 */
public "canHitEntity"(function_: $Function$$Type<$Entity$$Type, any>): $ArrowEntityBuilder<T>
/**
 * Sets the default sound event played when the arrow hits the ground using a string representation.
 * 
 * @param defaultHitGroundSoundEvent A string representing the ResourceLocation of the sound event.
 * 
 * Example usage:
 * ```javascript
 * // Example to set a custom sound event for the arrow hitting the ground.
 * arrowEntityBuilder.defaultHitGroundSoundEvent("minecraft:entity.arrow.hit");
 * ```
 */
public "defaultHitGroundSoundEvent"(sound: any): $ArrowEntityBuilder<T>
/**
 * Sets a consumer to perform additional effects after the arrow successfully hurts a living entity.
 * 
 * @param doPostHurtEffects The consumer to perform additional effects.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.doPostHurtEffects(context => {
 *     // Custom logic to perform additional effects after the arrow hurts a living entity.
 * });
 * ```
 */
public "doPostHurtEffects"(consumer: $Consumer$$Type<$ContextUtils$ArrowLivingEntityContext$$Type>): $ArrowEntityBuilder<T>
/**
 * Sets a callback function to be executed when the arrow
 * collides with an entity.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.onEntityCollision(context => {
 *     const { entity, target } = context
 *     console.log(entity)
 * });
 * ```
 */
public "onEntityCollision"(consumer: $Consumer$$Type<$ContextUtils$CollidingProjectileEntityContext$$Type>): $ArrowEntityBuilder<T>
/**
 * Sets a consumer to be called when the arrow entity hits a block.
 * 
 * @param onHitBlock The consumer to handle the arrow block hit context.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.onHitBlock(context => {
 *     // Custom logic to handle the arrow hitting a block
 * });
 * ```
 */
public "onHitBlock"(consumer: $Consumer$$Type<$ContextUtils$ArrowBlockHitContext$$Type>): $ArrowEntityBuilder<T>
/**
 * Sets a consumer to be called when the arrow entity hits another entity.
 * 
 * @param onHitEntity The consumer to handle the arrow entity hit context.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.onHitEntity(context => {
 *     // Custom logic to handle the arrow hitting another entity
 * });
 * ```
 */
public "onHitEntity"(consumer: $Consumer$$Type<$ContextUtils$ArrowEntityHitContext$$Type>): $ArrowEntityBuilder<T>
/**
 * Sets the base damage value for the arrow entity.
 * 
 * @param baseDamage The base damage value to be set.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.setBaseDamage(8.0);
 * ```
 */
public "setBaseDamage"(baseDamage: double): $ArrowEntityBuilder<T>
/** Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior. */
public "setCanShootFromDispenser"(canShootFromDispenser: boolean): $ArrowEntityBuilder<T>
/**
 * Sets the base damage value with a function for the arrow entity for more control.
 * 
 * @param setDamageFunction Function which returns a double.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.setBaseDamage(entity => {
 *     return 10; //Some double based off entity context.
 * });
 * ```
 */
public "setDamageFunction"(baseDamage: $Function$$Type<$Entity$$Type, any>): $ArrowEntityBuilder<T>
/**
 * Sets the knockback value for the arrow entity when a bow has Punch Enchantment.
 * 
 * @param setKnockback The knockback value of the Punch Enchantment to be set.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.setKnockback(2);
 * ```
 */
public "setKnockback"(knockback: integer): $ArrowEntityBuilder<T>
/**
 * Sets the water inertia value for the arrow entity.
 * 
 * @param setWaterInertia The water inertia value to be set.
 * Defaults to 0.6 for AbstractArrow
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.setWaterInertia(0.5);
 * ```
 */
public "setWaterInertia"(waterInertia: float): $ArrowEntityBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/projectiles/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/projectiles/arrow.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureLocation"(function_: $Function$$Type<T, any>): $ArrowEntityBuilder<T>
/**
 * Sets a consumer to be called during each tick to handle arrow entity despawn logic.
 * 
 * @param tickDespawn The consumer to handle the arrow entity tick despawn logic.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.tickDespawn(arrow => {
 *     // Custom logic to handle arrow entity despawn during each tick
 * });
 * ```
 */
public "tickDespawn"(consumer: $Consumer$$Type<$AbstractArrow$$Type>): $ArrowEntityBuilder<T>
/**
 * Sets a function to determine if a player can pick up the arrow entity.
 * 
 * @param tryPickup The function to check if a player can pick up the arrow.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.tryPickup(context => {
 *     // Custom logic to determine if the player can pick up the arrow
 *     // Return true if the player can pick up, false otherwise.
 * });
 * ```
 */
public "tryPickup"(function_: $Function$$Type<$ContextUtils$ArrowPlayerContext$$Type, any>): $ArrowEntityBuilder<T>
get "canShootFromDispenser"(): boolean
set "canShootFromDispenser"(value: boolean)
set "baseDamage"(value: double)
set "damageFunction"(value: $Function$$Type<$Entity$$Type, any>)
set "knockback"(value: integer)
set "waterInertia"(value: float)
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ISoundListenerJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BaseLivingEntityBuilder$SoundKeyFrameEventJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$SoundKeyFrameEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"

export interface $BaseLivingEntityBuilder$ISoundListenerJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
"playSound"(event: $BaseLivingEntityBuilder$SoundKeyFrameEventJS$$Type<E>): void
}

export namespace $BaseLivingEntityBuilder$ISoundListenerJS {
const probejs$$marker: never
}
export abstract class $BaseLivingEntityBuilder$ISoundListenerJS$$Static<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> implements $BaseLivingEntityBuilder$ISoundListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.BaseLivingEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BaseLivingEntityJS } from "net.liopyu.entityjs.entities.living.entityjs.BaseLivingEntityJS"
import { $BaseLivingEntityBuilder } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"

export class $BaseLivingEntityJSBuilder extends $BaseLivingEntityBuilder<$BaseLivingEntityJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.WolfJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TameableMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.TameableMobBuilder"
import { $WolfEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.WolfEntityJS"

export class $WolfJSBuilder extends $TameableMobBuilder<$WolfEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $WolfJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.PartBuilder" {
import { $ContextUtils$EEntityFallDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EEntityFallDamageContext"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $ContextUtils$EntitySqrDistanceContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntitySqrDistanceContext"
import { $ContextUtils$EThunderHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EThunderHitContext"
import { $ContextUtils$ECollidingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECollidingEntityContext"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$EMayInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EMayInteractContext"
import { $ContextUtils$MovementContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$MovementContext"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ContextUtils$LerpToContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LerpToContext"
import { $ContextUtils$EPassengerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EPassengerEntityContext"
import { $ContextUtils$EDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EDamageContext"
import { $ContextUtils$PartHurtContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PartHurtContext"
import { $ContextUtils$ECanTrampleContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECanTrampleContext"
import { $ContextUtils$EntityPlayerContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityPlayerContext"
import { $ContextUtils$PositionRiderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PositionRiderContext"

export class $PartBuilder<T extends $LivingEntity = $LivingEntity> {
constructor()

/**
 * Sets a function to determine the block speed factor of the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose block speed factor is being determined.
 * It returns a Float representing the block speed factor.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.blockSpeedFactor(entity => {
 *     // Define logic to calculate and return the block speed factor for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the block speed factor;
 * });
 * ```
 */
public "blockSpeedFactor"(callback: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate to determine if a passenger can be added to the entity.
 * 
 * @param predicate The predicate to check if a passenger can be added.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canAddPassenger(context => {
 *     // Custom logic to determine if a passenger can be added to the entity
 *     return true;
 * });
 * ```
 */
public "canAddPassenger"(predicate: $Function$$Type<$ContextUtils$EPassengerEntityContext$$Type, any>): $PartBuilder<T>
/**
 * Determines if the entity's hitbox collides with other entities the same as a solic block.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.canBeCollidedWith(entity => {
 *         return true
 *     });
 *     ```
 */
public "canBeCollidedWith"(canBeCollidedWith: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can change dimensions.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may attempt to change dimensions.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canChangeDimensions(entity => {
 *     // Define the conditions for the entity to be able to change dimensions
 *     // Use information about the Entity provided by the context.
 *     return false // Some boolean condition indicating if the entity can change dimensions;
 * });
 * ```
 */
public "canChangeDimensions"(supplier: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Function determining if the entity may collide with another entity
 * using the ContextUtils.CollidingEntityContext which has this entity and the
 * one colliding with this entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canCollideWith(context => {
 *     return true //Some Boolean value determining whether the entity may collide with another
 * });
 * ```
 */
public "canCollideWith"(canCollideWith: $Function$$Type<$ContextUtils$ECollidingEntityContext$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can undergo freezing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be subjected to freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canFreeze(entity => {
 *     // Define the conditions for the entity to be able to freeze
 *     // Use information about the Entity provided by the context.
 *     return true //someBoolean;
 * });
 * ```
 */
public "canFreeze"(predicate: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can trample or step on something.
 * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
 * representing the context of the potential trampling action, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canTrample(context => {
 *     // Define conditions for the entity to be allowed to trample
 *     // Use information about the CanTrampleContext provided by the context.
 *     return false // Some boolean condition indicating if the entity can trample;
 * });
 * ```
 */
public "canTrample"(predicate: $Function$$Type<$ContextUtils$ECanTrampleContext$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate to determine whether the living entity dampens vibrations.
 * 
 * @param predicate The predicate to determine whether the living entity dampens vibrations.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.dampensVibrations(entity => {
 *     // Determine whether the living entity dampens vibrations
 *     // Return true if the entity dampens vibrations, false otherwise
 * });
 * ```
 */
public "dampensVibrations"(predicate: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is attackable.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its attackability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAttackable(entity => {
 *     // Define conditions to check if the entity is attackable
 *     // Use information about the Entity provided by the context.
 *     return // Some boolean condition indicating if the entity is attackable;
 * });
 * ```
 */
public "isAttackable"(predicate: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is currently glowing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its glowing state.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isCurrentlyGlowing(entity => {
 *     // Define the conditions to check if the entity is currently glowing
 *     // Use information about the Entity provided by the context.
 *     const isGlowing = // Some boolean condition to check if the entity is glowing;
 *     return isGlowing;
 * });
 * ```
 */
public "isCurrentlyGlowing"(predicate: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a function to determine whether the entity is currently flapping.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose flapping status is being determined.
 * It returns a Boolean indicating whether the entity is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFlapping(entity => {
 *     // Define logic to determine whether the entity is currently flapping
 *     // Use information about the Entity provided by the context.
 *     return // Some Boolean value indicating whether the entity is flapping;
 * });
 * ```
 */
public "isFlapping"(b: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Defines in what condition the entity will start freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFreezing(entity => {
 *     return true;
 * });
 * ```
 */
public "isFreezing"(isFreezing: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
 * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
 * representing the context of the damage, and returns a boolean indicating invulnerability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isInvulnerableTo(context => {
 *     // Define conditions for the entity to be invulnerable to the specific type of damage
 *     // Use information about the DamageContext provided by the context.
 *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
 * });
 * ```
 */
public "isInvulnerableTo"(predicate: $Function$$Type<$ContextUtils$EDamageContext$$Type, any>): $PartBuilder<T>
/**
 * Boolean determining if the part entity is pickable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPickable(true)
 * ```
 */
public "isPickable"(isPickable: boolean): $PartBuilder<T>
/**
 * Sets whether the entity is pushable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPushable(true);
 * ```
 */
public "isPushable"(b: boolean): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hurt by lava.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is affected by lava.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lavaHurt(entity => {
 *     // Define custom logic for handling the entity being hurt by lava
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "lavaHurt"(consumer: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
 * 
 * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
 *                 providing information and control over the lerping process.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lerpTo(context => {
 *     // Custom logic for lerping the entity's position
 *     // Access information about the lerping process using the provided context.
 * });
 * ```
 */
public "lerpTo"(consumer: $Consumer$$Type<$ContextUtils$LerpToContext$$Type>): $PartBuilder<T>
/**
 * Sets a predicate function to determine whether the entity may interact with something.
 * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
 * representing the context of the potential interaction, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mayInteract(context => {
 *     // Define conditions for the entity to be allowed to interact
 *     // Use information about the MayInteractContext provided by the context.
 *     return false // Some boolean condition indicating if the entity may interact;
 * });
 * ```
 */
public "mayInteract"(predicate: $Function$$Type<$ContextUtils$EMayInteractContext$$Type, any>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a movement action.
 * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
 * representing the context of the entity's movement.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.move(context => {
 *     // Custom logic to handle the entity's movement action
 *     // Access information about the movement using the provided context.
 * });
 * ```
 */
public "move"(consumer: $Consumer$$Type<$ContextUtils$MovementContext$$Type>): $PartBuilder<T>
/**
 * Sets a function to determine the next step distance for the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose next step distance is being determined.
 * It returns a Float representing the next step distance.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.nextStep(entity => {
 *     // Define logic to calculate and return the next step distance for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the next step distance;
 * });
 * ```
 */
public "nextStep"(nextStep: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity is added to the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is added to the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onAddedToWorld(entity => {
 *     // Define custom logic for handling when the entity is added to the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onAddedToWorld"(onAddedToWorldCallback: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed on the client side.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed on the client side.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onClientRemoval(entity => {
 *     // Define custom logic for handling the removal of the entity on the client side
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onClientRemoval"(consumer: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity falls and takes damage.
 * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
 * representing the context of the entity falling and taking fall damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFall(context => {
 *     // Define custom logic for handling when the entity falls and takes damage
 *     // Use information about the EEntityFallDamageContext provided by the context.
 * });
 * ```
 */
public "onFall"(c: $Consumer$$Type<$ContextUtils$EEntityFallDamageContext$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a flap action.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFlap(entity => {
 *     // Define custom logic for handling the entity's flap action
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onFlap"(consumer: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a consumer to handle part entity hurt logic of the entity's parts.
 * 
 * @param onPartHurt Consumer accepting a {@link ContextUtils.PartHurtContext<T>} parameter
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onPartHurt(context => {
 *     const { entity, part, source, amount } = context
 *     // Custom logic for determining how the parts of the entity should relay damage
 *     // For example, hurt the parent entity twice the damage when this part is hit.
 *     entity.attack(source, amount * 2)
 * })
 * ```
 */
public "onPartHurt"(onPartHurt: $Consumer$$Type<$ContextUtils$PartHurtContext$$Type<T>>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed from the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed from the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onRemovedFromWorld(entity => {
 *     // Define custom logic for handling the removal of the entity from the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onRemovedFromWorld"(consumer: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity starts sprinting.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has started sprinting.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onSprint(entity => {
 *     // Define custom logic for handling when the entity starts sprinting
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onSprint"(consumer: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity stops riding.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has stopped being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onStopRiding(entity => {
 *     // Define custom logic for handling when the entity stops being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onStopRiding"(callback: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when a player touches the entity.
 * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
 * representing the context of the player's interaction with the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.playerTouch(context => {
 *     // Custom logic to handle the player's touch interaction with the entity
 *     // Access information about the interaction using the provided context.
 * });
 * ```
 */
public "playerTouch"(consumer: $Consumer$$Type<$ContextUtils$EntityPlayerContext$$Type>): $PartBuilder<T>
/**
 * @param positionRider A consumer determining the position of rider/riders.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.positionRider(context => {
 *         const {entity, passenger, moveFunction} = context
 *     });
 *     ```
 */
public "positionRider"(builderConsumer: $Consumer$$Type<$ContextUtils$PositionRiderContext$$Type>): $PartBuilder<T>
/**
 * Sets whether to reposition the entity after loading.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.repositionEntityAfterLoad(true);
 * ```
 */
public "repositionEntityAfterLoad"(customRepositionEntityAfterLoad: boolean): $PartBuilder<T>
/**
 * Sets a callback function to be executed during each tick when the entity is being ridden.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.rideTick(entity => {
 *     // Define custom logic for handling each tick when the entity is being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "rideTick"(callback: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
/**
 * Sets the block jump factor for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setBlockJumpFactor(entity => {
 *     //Set the jump factor for the entity through context
 *     return 1 //some float value;
 * });
 * ```
 */
public "setBlockJumpFactor"(blockJumpFactor: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets the minimum fall distance for the entity before taking damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setMaxFallDistance(entity => {
 *     // Define custom logic to determine the maximum fall distance
 *     // Use information about the Entity provided by the context.
 *     return 3;
 * });
 * ```
 */
public "setMaxFallDistance"(maxFallDistance: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets the swim sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
 * ```
 */
public "setSwimSound"(sound: any): $PartBuilder<T>
/**
 * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
 * ```
 */
public "setSwimSplashSound"(sound: any): $PartBuilder<T>
/**
 * Sets a function to determine whether the entity should render at a squared distance.
 * 
 * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
 *                  defining the conditions under which the entity should render.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldRenderAtSqrDistance(context => {
 *     // Custom logic to determine whether the entity should render
 *     // Access information about the distance using the provided context.
 *     return true;
 * });
 * ```
 */
public "shouldRenderAtSqrDistance"(func: $Function$$Type<$ContextUtils$EntitySqrDistanceContext$$Type, any>): $PartBuilder<T>
/**
 * Sets a predicate to determine whether to show the vehicle health for the living entity.
 * 
 * @param predicate The predicate to determine whether to show the vehicle health.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.showVehicleHealth(entity => {
 *     // Determine whether to show the vehicle health for the living entity
 *     // Return true to show the vehicle health, false otherwise
 * });
 * ```
 */
public "showVehicleHealth"(predicate: $Function$$Type<$Entity$$Type, any>): $PartBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hit by thunder.
 * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
 * representing the context of the entity being hit by thunder.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.thunderHit(context => {
 *     // Define custom logic for handling the entity being hit by thunder
 *     // Use information about the ThunderHitContext provided by the context.
 * });
 * ```
 */
public "thunderHit"(consumer: $Consumer$$Type<$ContextUtils$EThunderHitContext$$Type>): $PartBuilder<T>
/**
 * Sets a callback function to be executed on each tick for the entity.
 * 
 * @param consumer A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.tick(entity => {
 *     // Custom logic to be executed on each tick of the entity.
 *     // Access information about the entity using the provided parameter.
 * });
 * ```
 */
public "tick"(consumer: $Consumer$$Type<$Entity$$Type>): $PartBuilder<T>
set "blockJumpFactor"(value: $Function$$Type<$Entity$$Type, any>)
set "maxFallDistance"(value: $Function$$Type<$Entity$$Type, any>)
set "swimSound"(value: any)
set "swimSplashSound"(value: any)
}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.WaterEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $WaterEntityJS } from "net.liopyu.entityjs.entities.living.entityjs.WaterEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import { $Function$$Type } from "java.util.function.Function"

export class $WaterEntityJSBuilder extends $PathfinderMobBuilder<$WaterEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param bucketItemStack Function returning the itemstack to receive when bucketed
 * Defaults to Empty Itemstack
 * Example usage:
 * ```javascript
 * builder.bucketItemStack(entity => {
 *     // Use information about the entity to return an ItemStack.
 *     return Item.of('minecraft:diamond')
 * })
 * ```
 */
public "bucketItemStack"(function_: $Function$$Type<$LivingEntity$$Type, any>): $WaterEntityJSBuilder
/**
 * Whether or not the fish can be bucketed, if true it is recommended to set the
 * bucketItemStack function in the builder otherwise it will give an empty itemstack
 * and the bucket will be lost.
 * Defaults to false
 * Example usage:
 * ```javascript
 * builder.setCanBeBucketed(true)
 * ```
 */
public "setCanBeBucketed"(canBeBucketed: boolean): $WaterEntityJSBuilder
/**
 * Whether or not the fish retains default swimming goals.
 * Defaults to True
 * Example usage:
 * ```javascript
 * builder.setDefaultGoals(false)
 * ```
 */
public "setDefaultGoals"(defaultGoals: boolean): $WaterEntityJSBuilder
set "canBeBucketed"(value: boolean)
set "defaultGoals"(value: boolean)
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.BeeJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BeeEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.BeeEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $BeeJSBuilder extends $AnimalEntityBuilder<$BeeEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $BeeJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.PandaJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PandaEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.PandaEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $PandaJSBuilder extends $AnimalEntityBuilder<$PandaEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $PandaJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CatJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TameableMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.TameableMobBuilder"
import { $CatEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.CatEntityJS"

export class $CatJSBuilder extends $TameableMobBuilder<$CatEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $CatJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ISoundListenerJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$SoundKeyFrameEventJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$SoundKeyFrameEventJS"

export interface $BaseEntityBuilder$ISoundListenerJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> {
"playSound"(event: $BaseEntityBuilder$SoundKeyFrameEventJS$$Type<E>): void
}

export namespace $BaseEntityBuilder$ISoundListenerJS {
const probejs$$marker: never
}
export abstract class $BaseEntityBuilder$ISoundListenerJS$$Static<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> implements $BaseEntityBuilder$ISoundListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$IParticleListenerJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder$ParticleKeyFrameEventJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ParticleKeyFrameEventJS"

export interface $BaseLivingEntityBuilder$IParticleListenerJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
"summonParticle"(event: $BaseLivingEntityBuilder$ParticleKeyFrameEventJS$$Type<E>): void
}

export namespace $BaseLivingEntityBuilder$IParticleListenerJS {
const probejs$$marker: never
}
export abstract class $BaseLivingEntityBuilder$IParticleListenerJS$$Static<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> implements $BaseLivingEntityBuilder$IParticleListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SpawnEggItemBuilder$$Type } from "net.liopyu.entityjs.item.SpawnEggItemBuilder"
import { $EntityType$EntityFactory } from "net.minecraft.world.entity.EntityType$EntityFactory"
import { $Class$$Type } from "java.lang.Class"
import { $CustomEntityJSBuilder } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder"

export class $CustomEntityBuilder extends $CustomEntityJSBuilder {
constructor(i: $ResourceLocation$$Type, entityClass: $Class$$Type<$LivingEntity$$Type>)

/** Creates a spawn egg item for this entity type */
public "eggItem"(eggItem: $Consumer$$Type<$SpawnEggItemBuilder$$Type>): $CustomEntityBuilder
public "factory"(): $EntityType$EntityFactory<$LivingEntity>
/** Indicates that no egg item should be created for this entity type */
public "noEggItem"(): $CustomEntityBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.BoatEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $Boat$$Type } from "net.minecraft.world.entity.vehicle.Boat"
import { $BaseEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"
import { $Function$$Type } from "java.util.function.Function"

export class $BoatEntityBuilder<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $BaseEntityBuilder<T> {
static readonly "thisList": $List<$BoatEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

/**
 * Sets a function to determine the speed of the boat when in reverse.
 * Example usage:
 * ```javascript
 * builder.backwardsBoatSpeed(entity => {
 *     // Use information about the entity provided by the context.
 *     return 1 // Some Float
 * });
 * ```
 */
public "backwardsBoatSpeed"(function_: $Function$$Type<$Boat$$Type, any>): $BoatEntityBuilder<T>
/**
 * Sets a function to determine the speed of the boat when going forward.
 * Example usage:
 * ```javascript
 * builder.forwardBoatSpeed(entity => {
 *     // Use information about the entity provided by the context.
 *     return 1 // Some Float
 * });
 * ```
 */
public "forwardBoatSpeed"(function_: $Function$$Type<$Boat$$Type, any>): $BoatEntityBuilder<T>
/**
 * Sets a function to determine the Item the entity drops when it
 * turns back into an item.
 * Defaults to Boat super method.
 * Example usage:
 * ```javascript
 * builder.getDropItem(entity => {
 *     // Use information about the entity provided by the context.
 *     return Item.of('amethyst_block').item // Some Item
 * });
 * ```
 */
public "getDropItem"(function_: $Function$$Type<$Boat$$Type, any>): $BoatEntityBuilder<T>
/**
 * Sets the shadow radius of the entity.
 * Defaults to 0.3.
 * Example usage:
 * ```javascript
 * builder.setShadowRadius(0.8);
 * ```
 */
public "setShadowRadius"(f: float): $BoatEntityBuilder<T>
/**
 * Sets a function to determine the speed of the boat when it turns.
 * Example usage:
 * ```javascript
 * builder.turningBoatSpeed(entity => {
 *     // Use information about the entity provided by the context.
 *     return 1 // Some Float
 * });
 * ```
 */
public "turningBoatSpeed"(function_: $Function$$Type<$Boat$$Type, any>): $BoatEntityBuilder<T>
set "shadowRadius"(value: float)
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.EnderManJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import { $EnderManEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.EnderManEntityJS"

export class $EnderManJSBuilder extends $PathfinderMobBuilder<$EnderManEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $EnderManJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$IParticleListenerJS" {
import { $BaseEntityBuilder$ParticleKeyFrameEventJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ParticleKeyFrameEventJS"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

export interface $BaseEntityBuilder$IParticleListenerJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> {
"summonParticle"(event: $BaseEntityBuilder$ParticleKeyFrameEventJS$$Type<E>): void
}

export namespace $BaseEntityBuilder$IParticleListenerJS {
const probejs$$marker: never
}
export abstract class $BaseEntityBuilder$IParticleListenerJS$$Static<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> implements $BaseEntityBuilder$IParticleListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ICustomInstructionListenerJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"

export interface $BaseLivingEntityBuilder$ICustomInstructionListenerJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
"executeInstruction"(event: $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS$$Type<E>): void
}

export namespace $BaseLivingEntityBuilder$ICustomInstructionListenerJS {
const probejs$$marker: never
}
export abstract class $BaseLivingEntityBuilder$ICustomInstructionListenerJS$$Static<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> implements $BaseLivingEntityBuilder$ICustomInstructionListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.EvokerJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EvokerEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.EvokerEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $EvokerJSBuilder extends $PathfinderMobBuilder<$EvokerEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $EvokerJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$IAnimationPredicateJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $CustomEntityJSBuilder$AnimationEventJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$AnimationEventJS"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $AnimationController$AnimationStateHandler } from "software.bernie.geckolib.core.animation.AnimationController$AnimationStateHandler"

export interface $CustomEntityJSBuilder$IAnimationPredicateJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
/**
 * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
 * 
 * @param event - The AnimationEvent, provides values that can be used to determine if the animation should continue or not
 */
"test"(event: $CustomEntityJSBuilder$AnimationEventJS$$Type<E>): boolean
"toGecko"(): $AnimationController$AnimationStateHandler<E>
}

export namespace $CustomEntityJSBuilder$IAnimationPredicateJS {
const probejs$$marker: never
}
export abstract class $CustomEntityJSBuilder$IAnimationPredicateJS$$Static<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> implements $CustomEntityJSBuilder$IAnimationPredicateJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.DonkeyJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"
import { $DonkeyEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.DonkeyEntityJS"

export class $DonkeyJSBuilder extends $AnimalEntityBuilder<$DonkeyEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultBehaviourGoals(false);
 * ```
 */
public "defaultBehaviourGoals"(defaultBehaviourGoals: boolean): $DonkeyJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $DonkeyJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ProjectileItemBuilder$$Type } from "net.liopyu.entityjs.item.ProjectileItemBuilder"
import { $ProjectileEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.ProjectileEntityJS"
import { $ProjectileEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityBuilder"

export class $ProjectileEntityJSBuilder extends $ProjectileEntityBuilder<$ProjectileEntityJS> {
constructor(i: $ResourceLocation$$Type)

/** Creates the arrow item for this entity type */
public "item"(item: $Consumer$$Type<$ProjectileItemBuilder$$Type>): $ProjectileEntityJSBuilder
/** Indicates that no projectile item should be created for this entity type */
public "noItem"(): $ProjectileEntityJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.GoatJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GoatEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.GoatEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $GoatJSBuilder extends $AnimalEntityBuilder<$GoatEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $GoatJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AnimalEntityJS } from "net.liopyu.entityjs.entities.living.entityjs.AnimalEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $AnimalEntityJSBuilder extends $AnimalEntityBuilder<$AnimalEntityJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$SoundKeyFrameEventJS" {
import { $SoundKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.SoundKeyframeEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

export class $CustomEntityJSBuilder$SoundKeyFrameEventJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
/** The name of the sound to play */
readonly "sound": string

constructor(parent: $SoundKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ParticleKeyFrameEventJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $ParticleKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.ParticleKeyframeEvent"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

export class $CustomEntityJSBuilder$ParticleKeyFrameEventJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
readonly "effect": string
readonly "locator": string
readonly "script": string

constructor(parent: $ParticleKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.ZombieJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ZombieEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.ZombieEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $ZombieJSBuilder extends $PathfinderMobBuilder<$ZombieEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param isSunSensitive Sets whether the mob should convert in water to another mob
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.convertsInWater(false);
 * ```
 */
public "convertsInWater"(convertsInWater: boolean): $ZombieJSBuilder
/**
 * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultBehaviourGoals(false);
 * ```
 */
public "defaultBehaviourGoals"(defaultBehaviourGoals: boolean): $ZombieJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $ZombieJSBuilder
/**
 * @param isSunSensitive Sets whether the mob should burn in daylight
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.isSunSensitive(false);
 * ```
 */
public "isSunSensitive"(isSunSensitive: boolean): $ZombieJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ISoundListenerJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $CustomEntityJSBuilder$SoundKeyFrameEventJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$SoundKeyFrameEventJS"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

export interface $CustomEntityJSBuilder$ISoundListenerJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
"playSound"(event: $CustomEntityJSBuilder$SoundKeyFrameEventJS$$Type<E>): void
}

export namespace $CustomEntityJSBuilder$ISoundListenerJS {
const probejs$$marker: never
}
export abstract class $CustomEntityJSBuilder$ISoundListenerJS$$Static<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> implements $CustomEntityJSBuilder$ISoundListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.DolphinJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $DolphinEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.DolphinEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $DolphinJSBuilder extends $PathfinderMobBuilder<$DolphinEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $DolphinJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.misc.LookControlJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$RotationTowardsContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$RotationTowardsContext"
import { $ContextUtils$RotationContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$RotationContext"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Function$$Type } from "java.util.function.Function"

export class $LookControlJSBuilder {
constructor()

public "setClampHeadRotationToBody"(clampHeadRotationToBody: $Consumer$$Type<$Mob$$Type>): $LookControlJSBuilder
public "setIsLookingAtTarget"(isLookingAtTarget: $Function$$Type<$Mob$$Type, boolean>): $LookControlJSBuilder
public "setLookAtCoords"(setLookAtCoords: $Consumer$$Type<$Mob$$Type>): $LookControlJSBuilder
public "setLookAtEntity"(setLookAtEntity: $Consumer$$Type<$Mob$$Type>): $LookControlJSBuilder
public "setLookAtEntityWithRotation"(setLookAtEntityWithRotation: $Consumer$$Type<$Mob$$Type>): $LookControlJSBuilder
public "setLookAtVec3"(setLookAtVec3: $Consumer$$Type<$Mob$$Type>): $LookControlJSBuilder
public "setResetXRotOnTick"(resetXRotOnTick: $Function$$Type<$Mob$$Type, boolean>): $LookControlJSBuilder
public "setRotateTowards"(rotateTowards: $Function$$Type<$ContextUtils$RotationTowardsContext$$Type, any>): $LookControlJSBuilder
public "setWantedX"(setWantedX: $Function$$Type<$Mob$$Type, double>): $LookControlJSBuilder
public "setWantedY"(setWantedY: $Function$$Type<$Mob$$Type, double>): $LookControlJSBuilder
public "setWantedZ"(setWantedZ: $Function$$Type<$Mob$$Type, double>): $LookControlJSBuilder
public "setXRotD"(getXRotD: $Function$$Type<$ContextUtils$RotationContext$$Type, any>): $LookControlJSBuilder
public "setYRotD"(getYRotD: $Function$$Type<$ContextUtils$RotationContext$$Type, any>): $LookControlJSBuilder
public "tick"(tick: $Consumer$$Type<$Mob$$Type>): $LookControlJSBuilder
set "clampHeadRotationToBody"(value: $Consumer$$Type<$Mob$$Type>)
set "isLookingAtTarget"(value: $Function$$Type<$Mob$$Type, boolean>)
set "lookAtCoords"(value: $Consumer$$Type<$Mob$$Type>)
set "lookAtEntity"(value: $Consumer$$Type<$Mob$$Type>)
set "lookAtEntityWithRotation"(value: $Consumer$$Type<$Mob$$Type>)
set "lookAtVec3"(value: $Consumer$$Type<$Mob$$Type>)
set "resetXRotOnTick"(value: $Function$$Type<$Mob$$Type, boolean>)
set "rotateTowards"(value: $Function$$Type<$ContextUtils$RotationTowardsContext$$Type, any>)
set "wantedX"(value: $Function$$Type<$Mob$$Type, double>)
set "wantedY"(value: $Function$$Type<$Mob$$Type, double>)
set "wantedZ"(value: $Function$$Type<$Mob$$Type, double>)
set "xRotD"(value: $Function$$Type<$ContextUtils$RotationContext$$Type, any>)
set "yRotD"(value: $Function$$Type<$ContextUtils$RotationContext$$Type, any>)
}
}

declare module "net.liopyu.entityjs.builders.modification.ModifyEntityBuilder" {
import { $ContextUtils$EEntityFallDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EEntityFallDamageContext"
import { $EntityType, $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$CollidingProjectileEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CollidingProjectileEntityContext"
import { $ContextUtils$EntitySqrDistanceContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntitySqrDistanceContext"
import { $ContextUtils$EThunderHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EThunderHitContext"
import { $ContextUtils$ECollidingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECollidingEntityContext"
import { $Function$$Type } from "java.util.function.Function"
import { $ContextUtils$EntityInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityInteractContext"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$EMayInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EMayInteractContext"
import { $ContextUtils$MovementContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$MovementContext"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ContextUtils$LerpToContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LerpToContext"
import { $Map } from "java.util.Map"
import { $ContextUtils$RendererModelContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$RendererModelContext"
import { $EventJS } from "dev.latvian.mods.kubejs.event.EventJS"
import { $ContextUtils$EPassengerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EPassengerEntityContext"
import { $ContextUtils$EDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EDamageContext"
import { $ContextUtils$ECanTrampleContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECanTrampleContext"
import { $ContextUtils$EntityPlayerContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityPlayerContext"
import { $ContextUtils$PositionRiderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PositionRiderContext"

export class $ModifyEntityBuilder extends $EventJS {
static "builderMap": $Map<$EntityType<any>, $ModifyEntityBuilder>
readonly "entityType": $EntityType<any>

constructor(entityType: $EntityType$$Type<any>)

/**
 * Sets a function to determine the block speed factor of the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose block speed factor is being determined.
 * It returns a Float representing the block speed factor.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.blockSpeedFactor(entity => {
 *     // Define logic to calculate and return the block speed factor for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the block speed factor;
 * });
 * ```
 */
public "blockSpeedFactor"(callback: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Will output the entity type as well as the builder pertaining to the entity type 
 *  
 * Example usage: 
 * ```javascript
 * EntityJSEvents.modifyEntity(event => {
 *     event.modify("minecraft:zombie", builder => {
 *         console.log(builder.builderType())
 *     })
 * })
 * ```
 */
public "builderType"(): string
/**
 * Sets a predicate to determine if a passenger can be added to the entity.
 * 
 * @param predicate The predicate to check if a passenger can be added.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.canAddPassenger(context => {
 *     // Custom logic to determine if a passenger can be added to the entity
 *     return true;
 * });
 * ```
 */
public "canAddPassenger"(predicate: $Function$$Type<$ContextUtils$EPassengerEntityContext$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a predicate function to determine whether the entity can change dimensions.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may attempt to change dimensions.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.canChangeDimensions(entity => {
 *     // Define the conditions for the entity to be able to change dimensions
 *     // Use information about the Entity provided by the context.
 *     return false // Some boolean condition indicating if the entity can change dimensions;
 * });
 * ```
 */
public "canChangeDimensions"(supplier: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Function determining if the entity may collide with another entity
 * using the ContextUtils.CollidingEntityContext which has this entity and the
 * one colliding with this entity.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.canCollideWith(context => {
 *     return true //Some Boolean value determining whether the entity may collide with another
 * });
 * ```
 */
public "canCollideWith"(canCollideWith: $Function$$Type<$ContextUtils$ECollidingEntityContext$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a predicate function to determine whether the entity can undergo freezing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be subjected to freezing.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.canFreeze(entity => {
 *     // Define the conditions for the entity to be able to freeze
 *     // Use information about the Entity provided by the context.
 *     return true //someBoolean;
 * });
 * ```
 */
public "canFreeze"(predicate: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a predicate function to determine whether the entity can trample or step on something.
 * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
 * representing the context of the potential trampling action, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.canTrample(context => {
 *     // Define conditions for the entity to be allowed to trample
 *     // Use information about the CanTrampleContext provided by the context.
 *     return false // Some boolean condition indicating if the entity can trample;
 * });
 * ```
 */
public "canTrample"(predicate: $Function$$Type<$ContextUtils$ECanTrampleContext$$Type, any>): $ModifyEntityBuilder
/**
 * Boolean determining if the entity is controlled by the first passenger
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.controlledByFirstPassenger(true)
 * ```
 */
public "controlledByFirstPassenger"(controlledByFirstPassenger: boolean): $ModifyEntityBuilder
/**
 * Sets a predicate to determine whether the living entity dampens vibrations.
 * 
 * @param predicate The predicate to determine whether the living entity dampens vibrations.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.dampensVibrations(entity => {
 *     // Determine whether the living entity dampens vibrations
 *     // Return true if the entity dampens vibrations, false otherwise
 * });
 * ```
 */
public "dampensVibrations"(predicate: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
public "getEntityType"(): $EntityType<any>
/**
 * Sets whether an entity should ignore explosions.
 * The provided function should return a truthy value (e.g., true) to ignore explosion effects.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.ignoreExplosion(entity => {
 *     // Ignore explosions only for entities named "BoomProof"
 *     return entity.name?.getString() == "BoomProof";
 * });
 * ```
 */
public "ignoreExplosion"(ignoreExplosion: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets whether the entity is attackable or not.
 * 
 * @param isAttackable Boolean value indicating whether the entity is attackable.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isAttackable(true);
 * ```
 */
public "isAttackable"(b: boolean): $ModifyEntityBuilder
/**
 * Sets a predicate function to determine whether the entity is currently glowing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its glowing state.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isCurrentlyGlowing(entity => {
 *     // Define the conditions to check if the entity is currently glowing
 *     // Use information about the Entity provided by the context.
 *     const isGlowing = // Some boolean condition to check if the entity is glowing;
 *     return isGlowing;
 * });
 * ```
 */
public "isCurrentlyGlowing"(predicate: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a function to determine whether the entity is currently flapping.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose flapping status is being determined.
 * It returns a Boolean indicating whether the entity is flapping.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isFlapping(entity => {
 *     // Define logic to determine whether the entity is currently flapping
 *     // Use information about the Entity provided by the context.
 *     return // Some Boolean value indicating whether the entity is flapping;
 * });
 * ```
 */
public "isFlapping"(b: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Defines in what condition the entity will start freezing.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isFreezing(entity => {
 *     return true;
 * });
 * ```
 */
public "isFreezing"(isFreezing: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
 * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
 * representing the context of the damage, and returns a boolean indicating invulnerability.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isInvulnerableTo(context => {
 *     // Define conditions for the entity to be invulnerable to the specific type of damage
 *     // Use information about the DamageContext provided by the context.
 *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
 * });
 * ```
 */
public "isInvulnerableTo"(predicate: $Function$$Type<$ContextUtils$EDamageContext$$Type, any>): $ModifyEntityBuilder
/**
 * Function determining if the entity is pickable.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isPickable(entity => {
 *     return true;
 * })
 * ```
 */
public "isPickable"(isPickable: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets whether the entity is pushable.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.isPushable(true);
 * ```
 */
public "isPushable"(b: boolean): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity is hurt by lava.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is affected by lava.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.lavaHurt(entity => {
 *     // Define custom logic for handling the entity being hurt by lava
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "lavaHurt"(consumer: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
 * 
 * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
 *                 providing information and control over the lerping process.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.lerpTo(context => {
 *     // Custom logic for lerping the entity's position
 *     // Access information about the lerping process using the provided context.
 * });
 * ```
 */
public "lerpTo"(consumer: $Consumer$$Type<$ContextUtils$LerpToContext$$Type>): $ModifyEntityBuilder
/**
 * Sets a predicate function to determine whether the entity may interact with something.
 * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
 * representing the context of the potential interaction, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.mayInteract(context => {
 *     // Define conditions for the entity to be allowed to interact
 *     // Use information about the MayInteractContext provided by the context.
 *     return false // Some boolean condition indicating if the entity may interact;
 * });
 * ```
 */
public "mayInteract"(predicate: $Function$$Type<$ContextUtils$EMayInteractContext$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity performs a movement action.
 * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
 * representing the context of the entity's movement.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.move(context => {
 *     // Custom logic to handle the entity's movement action
 *     // Access information about the movement using the provided context.
 * });
 * ```
 */
public "move"(consumer: $Consumer$$Type<$ContextUtils$MovementContext$$Type>): $ModifyEntityBuilder
/**
 * Function which sets the offset for riding on the entity.
 * 
 * @param myRidingOffset The offset value for riding on the mob.
 * Defaults to 0.0.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.myRidingOffset(entity => {
 *     //Use the provided context about the entity to determine the riding offset of the passengers
 *     return 5 //Some double value;
 * })
 * ```
 */
public "myRidingOffset"(myRidingOffset: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity is added to the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is added to the world.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onAddedToWorld(entity => {
 *     // Define custom logic for handling when the entity is added to the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onAddedToWorld"(onAddedToWorldCallback: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity is removed on the client side.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed on the client side.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onClientRemoval(entity => {
 *     // Define custom logic for handling the removal of the entity on the client side
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onClientRemoval"(consumer: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity
 * collides with another entity.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onEntityCollision(context => {
 *     const { entity, target } = context
 *     console.log(entity)
 * });
 * ```
 */
public "onEntityCollision"(consumer: $Consumer$$Type<$ContextUtils$CollidingProjectileEntityContext$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity falls and takes damage.
 * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
 * representing the context of the entity falling and taking fall damage.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onFall(context => {
 *     // Define custom logic for handling when the entity falls and takes damage
 *     // Use information about the EEntityFallDamageContext provided by the context.
 * });
 * ```
 */
public "onFall"(c: $Consumer$$Type<$ContextUtils$EEntityFallDamageContext$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity performs a flap action.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is flapping.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onFlap(entity => {
 *     // Define custom logic for handling the entity's flap action
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onFlap"(consumer: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a consumer to handle the interaction with the entity.
 * The provided Consumer accepts a {@link ContextUtils.EntityInteractContext} parameter,
 * representing the context of the interaction
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onInteract(context => {
 *     // Define custom logic for the interaction with the entity
 *     // Use information about the EntityInteractContext provided by the context.
 *     if (context.player.isShiftKeyDown()) return
 *     context.player.startRiding(context.entity);
 * });
 * ```
 */
public "onInteract"(c: $Consumer$$Type<$ContextUtils$EntityInteractContext$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity is removed from the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed from the world.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onRemovedFromWorld(entity => {
 *     // Define custom logic for handling the removal of the entity from the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onRemovedFromWorld"(consumer: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity starts sprinting.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has started sprinting.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onSprint(entity => {
 *     // Define custom logic for handling when the entity starts sprinting
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onSprint"(consumer: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity stops riding.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has stopped being ridden.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.onStopRiding(entity => {
 *     // Define custom logic for handling when the entity stops being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onStopRiding"(callback: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when a player touches the entity.
 * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
 * representing the context of the player's interaction with the entity.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.playerTouch(context => {
 *     // Custom logic to handle the player's touch interaction with the entity
 *     // Access information about the interaction using the provided context.
 * });
 * ```
 */
public "playerTouch"(consumer: $Consumer$$Type<$ContextUtils$EntityPlayerContext$$Type>): $ModifyEntityBuilder
/**
 * @param positionRider A consumer determining the position of rider/riders.
 * 
 *     Example usage:
 *     ```javascript
 *     modifyBuilder.positionRider(context => {
 *         const {entity, passenger, moveFunction} = context
 *     });
 *     ```
 */
public "positionRider"(builderConsumer: $Consumer$$Type<$ContextUtils$PositionRiderContext$$Type>): $ModifyEntityBuilder
/**
 * Sets whether to reposition the entity after loading.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.repositionEntityAfterLoad(true);
 * ```
 */
public "repositionEntityAfterLoad"(customRepositionEntityAfterLoad: boolean): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed during each tick when the entity is being ridden.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being ridden.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.rideTick(entity => {
 *     // Define custom logic for handling each tick when the entity is being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "rideTick"(callback: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
/**
 * Sets the block jump factor for the entity.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.setBlockJumpFactor(entity => {
 *     //Set the jump factor for the entity through context
 *     return 1 //some float value;
 * });
 * ```
 */
public "setBlockJumpFactor"(blockJumpFactor: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets the minimum fall distance for the entity before taking damage.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.setMaxFallDistance(entity => {
 *     // Define custom logic to determine the maximum fall distance
 *     // Use information about the Entity provided by the context.
 *     return 3;
 * });
 * ```
 */
public "setMaxFallDistance"(maxFallDistance: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets the RenderType of the entity, effectively capable of dynamically replacing texture locations.
 * Return null for the default render type.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.setRenderType(context => {
 *     // Sets the entity's texture to default Steve
 *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
 *     let skin = DefaultPlayerSkin.getDefaultSkin();
 *     return RenderType.entityCutout(skin);
 * });
 * ```
 */
public "setRenderType"(setRenderType: $Function$$Type<$ContextUtils$RendererModelContext$$Type, any>): $ModifyEntityBuilder
/**
 * Sets the swim sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.setSwimSound("minecraft:entity.generic.swim");
 * ```
 */
public "setSwimSound"(sound: any): $ModifyEntityBuilder
/**
 * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
 * ```
 */
public "setSwimSplashSound"(sound: any): $ModifyEntityBuilder
/**
 * Sets the Texture Location of the entity without modifying the RenderType logic.
 * Returns a ResourceLocation.
 * Return null for the default entity's location
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.setTextureLocation(context => {
 *     // Sets the entity's texture to default Steve
 *     let DefaultPlayerSkin = Java.loadClass("net.minecraft.client.resources.DefaultPlayerSkin")
 *     let skin = DefaultPlayerSkin.getDefaultSkin();
 *     return skin;
 * });
 * ```
 */
public "setTextureLocation"(setTextureLocation: $Function$$Type<$ContextUtils$RendererModelContext$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a function to determine whether the entity should render at a squared distance.
 * 
 * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
 *                  defining the conditions under which the entity should render.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.shouldRenderAtSqrDistance(context => {
 *     // Custom logic to determine whether the entity should render
 *     // Access information about the distance using the provided context.
 *     return true;
 * });
 * ```
 */
public "shouldRenderAtSqrDistance"(func: $Function$$Type<$ContextUtils$EntitySqrDistanceContext$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a predicate to determine whether to show the vehicle health for the living entity.
 * 
 * @param predicate The predicate to determine whether to show the vehicle health.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.showVehicleHealth(entity => {
 *     // Determine whether to show the vehicle health for the living entity
 *     // Return true to show the vehicle health, false otherwise
 * });
 * ```
 */
public "showVehicleHealth"(predicate: $Function$$Type<$Entity$$Type, any>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed when the entity is hit by thunder.
 * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
 * representing the context of the entity being hit by thunder.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.thunderHit(context => {
 *     // Define custom logic for handling the entity being hit by thunder
 *     // Use information about the ThunderHitContext provided by the context.
 * });
 * ```
 */
public "thunderHit"(consumer: $Consumer$$Type<$ContextUtils$EThunderHitContext$$Type>): $ModifyEntityBuilder
/**
 * Sets a callback function to be executed on each tick for the entity.
 * 
 * @param tick A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
 * 
 * Example usage:
 * ```javascript
 * modifyBuilder.tick(entity => {
 *     // Custom logic to be executed on each tick of the entity.
 *     // Access information about the entity using the provided parameter.
 * });
 * ```
 */
public "tick"(consumer: $Consumer$$Type<$Entity$$Type>): $ModifyEntityBuilder
set "blockJumpFactor"(value: $Function$$Type<$Entity$$Type, any>)
set "maxFallDistance"(value: $Function$$Type<$Entity$$Type, any>)
set "renderType"(value: $Function$$Type<$ContextUtils$RendererModelContext$$Type, any>)
set "swimSound"(value: any)
set "swimSplashSound"(value: any)
set "textureLocation"(value: $Function$$Type<$ContextUtils$RendererModelContext$$Type, any>)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$AnimationEventJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $AnimationController } from "software.bernie.geckolib.core.animation.AnimationController"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $Map } from "java.util.Map"
import { $PlayState } from "software.bernie.geckolib.core.object.PlayState"
import { $DataTicket } from "software.bernie.geckolib.core.object.DataTicket"
import { $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $BaseEntityBuilder$AnimationEventJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> {
constructor(parent: $AnimationState$$Type<E>)

/**
 * Sets a triggerable animation with a specified loop type callable anywhere from the entity.
 * 
 * @param animationName The name of the animation to be triggered, this is the animation named in the json.
 * @param triggerableAnimationID The unique identifier for the triggerable animation.
 * @param loopTypeEnum The loop type for the triggerable animation. Accepts 'LOOP', 'PLAY_ONCE', 'HOLD_ON_LAST_FRAME', or 'DEFAULT'.
 * ```javascript
 *  event.addTriggerableAnimation('spawn', 'spawning', 'default')
 *  ```
 */
public "addTriggerableAnimation"(animationName: string, triggerableAnimationID: string, loopTypeEnum: any): $PlayState
/** Returns the number of ticks the entity has been animating for */
public "getAnimationTick"(): double
/** Returns the animation controller this event is part of */
public "getController"(): $AnimationController<E>
/** Returns the entity that is being animated */
public "getEntity"(): E
/**
 * Returns any extra data that the event may have
 * 
 * Usually used by armor animations to know what item is worn
 */
public "getExtraData"(): $Map<$DataTicket<any>, any>
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
/** Returns a number, in the range [0, 1], how far through the tick it currently is */
public "getPartialTick"(): float
/** If the entity is moving */
public "isMoving"(): boolean
/** Adds an animation to the current animation list */
public "then"(animationName: string, loopType: $Animation$LoopType$$Type): $BaseEntityBuilder$AnimationEventJS<E>
/** Sets an animation to play in a loop */
public "thenLoop"(animationName: string): $PlayState
/** Sets an animation to play defaulting to the animations.json file loop type */
public "thenPlay"(animationName: string): $PlayState
/** Sets an animation to play and hold on the last frame */
public "thenPlayAndHold"(animationName: string): $PlayState
/** Sets an animation to play an x amount of times */
public "thenPlayXTimes"(animationName: string, times: integer): $PlayState
/** Wait a certain amount of ticks before starting the next animation */
public "thenWait"(ticks: integer): $PlayState
get "animationTick"(): double
get "controller"(): $AnimationController<E>
get "entity"(): E
get "extraData"(): $Map<$DataTicket<any>, any>
get "limbSwing"(): float
get "limbSwingAmount"(): float
get "partialTick"(): float
get "moving"(): boolean
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$IParticleListenerJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $CustomEntityJSBuilder$ParticleKeyFrameEventJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ParticleKeyFrameEventJS"

export interface $CustomEntityJSBuilder$IParticleListenerJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
"summonParticle"(event: $CustomEntityJSBuilder$ParticleKeyFrameEventJS$$Type<E>): void
}

export namespace $CustomEntityJSBuilder$IParticleListenerJS {
const probejs$$marker: never
}
export abstract class $CustomEntityJSBuilder$IParticleListenerJS$$Static<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> implements $CustomEntityJSBuilder$IParticleListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.EyeOfEnderEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $List } from "java.util.List"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $BaseNonAnimatableEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseNonAnimatableEntityBuilder"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $IProjectileEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.IProjectileEntityJS"
import { $Function$$Type } from "java.util.function.Function"

export class $EyeOfEnderEntityBuilder<T extends ($Entity & $IProjectileEntityJS) = ($Entity & $IProjectileEntityJS)> extends $BaseNonAnimatableEntityBuilder<T> {
static readonly "thisList": $List<$EyeOfEnderEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

public "createObject"(): $EntityType<T>
/**
 * Sets the offset for rendering the projectile entity.
 * 
 * @param vX The X-axis offset.
 * 
 * @param vY The Y-axis offset.
 * 
 * @param vZ The Z-axis offset.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.renderOffset(0.5, 1.0, -0.5);
 * ```
 */
public "renderOffset"(vX: float, vY: float, vZ: float): $EyeOfEnderEntityBuilder<T>
/**
 * Sets the scale for rendering the projectile entity.
 * 
 * @param pX The X-axis scale.
 * 
 * @param pY The Y-axis scale.
 * 
 * @param pZ The Z-axis scale.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.renderScale(1.5, 1.5, 1.5);
 * ```
 */
public "renderScale"(pX: float, pY: float, pZ: float): $EyeOfEnderEntityBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/projectiles/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureLocation"(function_: $Function$$Type<T, any>): $EyeOfEnderEntityBuilder<T>
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.GhastJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.MobBuilder"
import { $GhastEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.GhastEntityJS"

export class $GhastJSBuilder extends $MobBuilder<$GhastEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $GhastJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.BaseEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BaseEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.BaseEntityJS"
import { $BaseEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"

export class $BaseEntityJSBuilder extends $BaseEntityBuilder<$BaseEntityJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.IllusionerJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import { $IllusionerEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.IllusionerEntityJS"

export class $IllusionerJSBuilder extends $PathfinderMobBuilder<$IllusionerEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $IllusionerJSBuilder
/**
 * Sets the sound to play when the entity is celebrating using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.setCelebrateSound("minecraft:entity.zombie.ambient");
 * ```
 */
public "setCelebrateSound"(ambientSound: any): $IllusionerJSBuilder
set "celebrateSound"(value: any)
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $CustomInstructionKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.CustomInstructionKeyframeEvent"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder$KeyFrameEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$KeyFrameEventJS"
import { $CustomInstructionKeyframeData } from "software.bernie.geckolib.core.keyframe.event.data.CustomInstructionKeyframeData"

export class $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $BaseLivingEntityBuilder$KeyFrameEventJS<E, $CustomInstructionKeyframeData> {
/** A list of all the custom instructions. In Blockbench, each line in the custom instruction box is a separate instruction. */
readonly "instructions": string

constructor(parent: $CustomInstructionKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CowJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CowEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.CowEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $CowJSBuilder extends $AnimalEntityBuilder<$CowEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $CowJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ICustomInstructionListenerJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$CustomInstructionKeyframeEventJS"

export interface $CustomEntityJSBuilder$ICustomInstructionListenerJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
"executeInstruction"(event: $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS$$Type<E>): void
}

export namespace $CustomEntityJSBuilder$ICustomInstructionListenerJS {
const probejs$$marker: never
}
export abstract class $CustomEntityJSBuilder$ICustomInstructionListenerJS$$Static<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> implements $CustomEntityJSBuilder$ICustomInstructionListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ContextUtils$BreedableEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$BreedableEntityContext"
import { $ContextUtils$EntityAnimalContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityAnimalContext"
import { $Animal } from "net.minecraft.world.entity.animal.Animal"
import { $Function$$Type } from "java.util.function.Function"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $ContextUtils$EntityItemStackContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityItemStackContext"
import { $ContextUtils$LevelAnimalContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LevelAnimalContext"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $AnimalEntityBuilder<T extends ($Animal & $IAnimatableJS) = ($Animal & $IAnimatableJS)> extends $PathfinderMobBuilder<T> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets a predicate to determine if the animal entity can breed.
 * 
 * @param canBreed A Function that defines the conditions for breeding.
 * 
 * Example usage:
 * ```javascript
 * animalBuilder.canBreed(entity => {
 *     // Custom logic to determine if the entity can breed
 *     // Return true if the entity can breed, false otherwise.
 * });
 * ```
 */
public "canBreed"(canBreed: $Function$$Type<$LivingEntity$$Type, any>): $AnimalEntityBuilder<T>
/**
 * Sets a predicate to determine if the entity can mate.
 * 
 * @param predicate A Function accepting a ContextUtils.EntityAnimalContext parameter,
 *                  defining the condition for the entity to be able to mate.
 * 
 * Example usage:
 * ```javascript
 * animalBuilder.canMate(context => {
 *     // Custom logic to determine if the entity can mate
 *     // Return true if mating is allowed based on the provided context.
 * });
 * ```
 */
public "canMate"(predicate: $Function$$Type<$ContextUtils$EntityAnimalContext$$Type, any>): $AnimalEntityBuilder<T>
/**
 * Sets the ingredient representing the list of items that the animal entity can eat.
 * 
 * @param isFood An {@link Ingredient} specifying the items that the entity can eat.
 * 
 * Example usage:
 * ```javascript
 * animalBuilder.isFood([
 *     "#minecraft:apple",
 *     "minecraft:golden_apple",
 *     "minecraft:diamond"
 * ]);
 * ```
 */
public "isFood"(isFood: $Ingredient$$Type): $AnimalEntityBuilder<T>
/**
 * Sets the predicate to determine if an entity item stack is considered as food for the animal entity.
 * 
 * @param isFoodPredicate A predicate accepting a {@link ContextUtils.EntityItemStackContext} parameter,
 *                        defining the conditions for an entity item stack to be considered as food.
 * 
 * Example usage:
 * ```javascript
 * animalBuilder.isFoodPredicate(context => {
 *     // Custom logic to determine if the entity item stack is considered as food.
 *     // Access information about the item stack using the provided context.
 *     return true // Some Boolean value;
 * });
 * ```
 */
public "isFoodPredicate"(isFoodPredicate: $Function$$Type<$ContextUtils$EntityItemStackContext$$Type, any>): $AnimalEntityBuilder<T>
/**
 * Sets a callback function to be executed when a child is spawned from breeding.
 * 
 * @param consumer A Consumer accepting a ContextUtils.LevelAnimalContext parameter,
 *                  defining the behavior to be executed when a child is spawned from breeding.
 * 
 * Example usage:
 * ```javascript
 * animalBuilder.onSpawnChildFromBreeding(context => {
 *     // Custom logic to handle the spawning of a child from breeding
 *     // Access information about the breeding event using the provided context.
 * });
 * ```
 */
public "onSpawnChildFromBreeding"(consumer: $Consumer$$Type<$ContextUtils$LevelAnimalContext$$Type>): $AnimalEntityBuilder<T>
/**
 * Sets the offspring for the Animal Entity.
 * 
 * @param breedOffspring Function returning a resource location for the breed offspring.
 * 
 * Example usage:
 * ```javascript
 * animalBuilder.setBreedOffspring(context => {
 *     const { entity, mate, level } = context
 *     // Use the context to return a ResourceLocation of an entity to spawn when the entity mates
 *     return 'minecraft:cow' //Some Resource location representing the entity to spawn.
 * })
 * ```
 */
public "setBreedOffspring"(breedOffspring: $Function$$Type<$ContextUtils$BreedableEntityContext$$Type, any>): $AnimalEntityBuilder<T>
set "breedOffspring"(value: $Function$$Type<$ContextUtils$BreedableEntityContext$$Type, any>)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseNonAnimatableEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ContextUtils$EEntityFallDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EEntityFallDamageContext"
import { $ContextUtils$NLRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$NLRenderContext"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$EntitySqrDistanceContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntitySqrDistanceContext"
import { $ContextUtils$EThunderHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EThunderHitContext"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ContextUtils$ECollidingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECollidingEntityContext"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$EMayInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EMayInteractContext"
import { $List } from "java.util.List"
import { $ContextUtils$MovementContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$MovementContext"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ContextUtils$LerpToContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LerpToContext"
import { $ContextUtils$EPassengerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EPassengerEntityContext"
import { $ContextUtils$EDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EDamageContext"
import { $ContextUtils$ECanTrampleContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECanTrampleContext"
import { $ContextUtils$EntityPlayerContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityPlayerContext"
import { $ContextUtils$PositionRiderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PositionRiderContext"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $BaseNonAnimatableEntityBuilder<T extends $Entity = $Entity> extends $BuilderBase<$EntityType<T>> {
static readonly "thisList": $List<$BaseNonAnimatableEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

/**
 * Sets a function to determine the block speed factor of the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose block speed factor is being determined.
 * It returns a Float representing the block speed factor.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.blockSpeedFactor(entity => {
 *     // Define logic to calculate and return the block speed factor for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the block speed factor;
 * });
 * ```
 */
public "blockSpeedFactor"(callback: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate to determine if a passenger can be added to the entity.
 * 
 * @param predicate The predicate to check if a passenger can be added.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canAddPassenger(context => {
 *     // Custom logic to determine if a passenger can be added to the entity
 *     return true;
 * });
 * ```
 */
public "canAddPassenger"(predicate: $Function$$Type<$ContextUtils$EPassengerEntityContext$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Determines if the entity's hitbox collides with other entities the same as a solic block.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.canBeCollidedWith(entity => {
 *         return true
 *     });
 *     ```
 */
public "canBeCollidedWith"(canBeCollidedWith: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can change dimensions.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may attempt to change dimensions.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canChangeDimensions(entity => {
 *     // Define the conditions for the entity to be able to change dimensions
 *     // Use information about the Entity provided by the context.
 *     return false // Some boolean condition indicating if the entity can change dimensions;
 * });
 * ```
 */
public "canChangeDimensions"(supplier: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Function determining if the entity may collide with another entity
 * using the ContextUtils.CollidingEntityContext which has this entity and the
 * one colliding with this entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canCollideWith(context => {
 *     return true //Some Boolean value determining whether the entity may collide with another
 * });
 * ```
 */
public "canCollideWith"(canCollideWith: $Function$$Type<$ContextUtils$ECollidingEntityContext$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can undergo freezing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be subjected to freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canFreeze(entity => {
 *     // Define the conditions for the entity to be able to freeze
 *     // Use information about the Entity provided by the context.
 *     return true //someBoolean;
 * });
 * ```
 */
public "canFreeze"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets whether the entity can spawn far from the player.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canSpawnFarFromPlayer(true);
 * ```
 */
public "canSpawnFarFromPlayer"(canSpawnFar: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can trample or step on something.
 * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
 * representing the context of the potential trampling action, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canTrample(context => {
 *     // Define conditions for the entity to be allowed to trample
 *     // Use information about the CanTrampleContext provided by the context.
 *     return false // Some boolean condition indicating if the entity can trample;
 * });
 * ```
 */
public "canTrample"(predicate: $Function$$Type<$ContextUtils$ECanTrampleContext$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the client tracking range. Defaults to 5.
 * 
 * @param trackingRange The client tracking range.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.clientTrackingRange(8);
 * ```
 */
public "clientTrackingRange"(trackingRange: integer): $BaseNonAnimatableEntityBuilder<T>
public "createObject"(): $EntityType<T>
/**
 * Sets a predicate to determine whether the living entity dampens vibrations.
 * 
 * @param predicate The predicate to determine whether the living entity dampens vibrations.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.dampensVibrations(entity => {
 *     // Determine whether the living entity dampens vibrations
 *     // Return true if the entity dampens vibrations, false otherwise
 * });
 * ```
 */
public "dampensVibrations"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets whether the entity is immune to fire damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.fireImmune(true);
 * ```
 */
public "fireImmune"(isFireImmune: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the list of block names to which the entity is immune.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
 * ```
 */
public "immuneTo"(...blockNames: string[]): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets whether the entity is attackable or not.
 * 
 * @param isAttackable Boolean value indicating whether the entity is attackable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAttackable(true);
 * ```
 */
public "isAttackable"(b: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is attackable.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its attackability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAttackable(entity => {
 *     // Define conditions to check if the entity is attackable
 *     // Use information about the Entity provided by the context.
 *     return // Some boolean condition indicating if the entity is attackable;
 * });
 * ```
 */
public "isAttackable"(predicate: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is currently glowing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its glowing state.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isCurrentlyGlowing(entity => {
 *     // Define the conditions to check if the entity is currently glowing
 *     // Use information about the Entity provided by the context.
 *     const isGlowing = // Some boolean condition to check if the entity is glowing;
 *     return isGlowing;
 * });
 * ```
 */
public "isCurrentlyGlowing"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a function to determine whether the entity is currently flapping.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose flapping status is being determined.
 * It returns a Boolean indicating whether the entity is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFlapping(entity => {
 *     // Define logic to determine whether the entity is currently flapping
 *     // Use information about the Entity provided by the context.
 *     return // Some Boolean value indicating whether the entity is flapping;
 * });
 * ```
 */
public "isFlapping"(b: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Defines in what condition the entity will start freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFreezing(entity => {
 *     return true;
 * });
 * ```
 */
public "isFreezing"(isFreezing: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
 * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
 * representing the context of the damage, and returns a boolean indicating invulnerability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isInvulnerableTo(context => {
 *     // Define conditions for the entity to be invulnerable to the specific type of damage
 *     // Use information about the DamageContext provided by the context.
 *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
 * });
 * ```
 */
public "isInvulnerableTo"(predicate: $Function$$Type<$ContextUtils$EDamageContext$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Boolean determining if the part entity is pickable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPickable(true)
 * ```
 */
public "isPickable"(isPickable: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets whether the entity is pushable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPushable(true);
 * ```
 */
public "isPushable"(b: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hurt by lava.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is affected by lava.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lavaHurt(entity => {
 *     // Define custom logic for handling the entity being hurt by lava
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "lavaHurt"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
 * 
 * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
 *                 providing information and control over the lerping process.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lerpTo(context => {
 *     // Custom logic for lerping the entity's position
 *     // Access information about the lerping process using the provided context.
 * });
 * ```
 */
public "lerpTo"(consumer: $Consumer$$Type<$ContextUtils$LerpToContext$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity may interact with something.
 * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
 * representing the context of the potential interaction, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mayInteract(context => {
 *     // Define conditions for the entity to be allowed to interact
 *     // Use information about the MayInteractContext provided by the context.
 *     return false // Some boolean condition indicating if the entity may interact;
 * });
 * ```
 */
public "mayInteract"(predicate: $Function$$Type<$ContextUtils$EMayInteractContext$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the mob category for the entity.
 * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
 * Defaults to 'misc'.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mobCategory('monster');
 * ```
 */
public "mobCategory"(category: string): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a movement action.
 * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
 * representing the context of the entity's movement.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.move(context => {
 *     // Custom logic to handle the entity's movement action
 *     // Access information about the movement using the provided context.
 * });
 * ```
 */
public "move"(consumer: $Consumer$$Type<$ContextUtils$MovementContext$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a function to determine the next step distance for the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose next step distance is being determined.
 * It returns a Float representing the next step distance.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.nextStep(entity => {
 *     // Define logic to calculate and return the next step distance for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the next step distance;
 * });
 * ```
 */
public "nextStep"(nextStep: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is added to the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is added to the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onAddedToWorld(entity => {
 *     // Define custom logic for handling when the entity is added to the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onAddedToWorld"(onAddedToWorldCallback: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed on the client side.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed on the client side.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onClientRemoval(entity => {
 *     // Define custom logic for handling the removal of the entity on the client side
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onClientRemoval"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity falls and takes damage.
 * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
 * representing the context of the entity falling and taking fall damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFall(context => {
 *     // Define custom logic for handling when the entity falls and takes damage
 *     // Use information about the EEntityFallDamageContext provided by the context.
 * });
 * ```
 */
public "onFall"(c: $Consumer$$Type<$ContextUtils$EEntityFallDamageContext$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a flap action.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFlap(entity => {
 *     // Define custom logic for handling the entity's flap action
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onFlap"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed from the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed from the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onRemovedFromWorld(entity => {
 *     // Define custom logic for handling the removal of the entity from the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onRemovedFromWorld"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity starts sprinting.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has started sprinting.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onSprint(entity => {
 *     // Define custom logic for handling when the entity starts sprinting
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onSprint"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity stops riding.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has stopped being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onStopRiding(entity => {
 *     // Define custom logic for handling when the entity stops being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onStopRiding"(callback: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when a player touches the entity.
 * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
 * representing the context of the player's interaction with the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.playerTouch(context => {
 *     // Custom logic to handle the player's touch interaction with the entity
 *     // Access information about the interaction using the provided context.
 * });
 * ```
 */
public "playerTouch"(consumer: $Consumer$$Type<$ContextUtils$EntityPlayerContext$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * @param positionRider A consumer determining the position of rider/riders.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.positionRider(context => {
 *         const {entity, passenger, moveFunction} = context
 *     });
 *     ```
 */
public "positionRider"(builderConsumer: $Consumer$$Type<$ContextUtils$PositionRiderContext$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Defines logic to render the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.render(context => {
 *     // Define logic to render the entity
 *     context.poseStack.scale(0.5, 0.5, 0.5);
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$NLRenderContext$$Type<T>>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the render type for the entity via a function.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
 * ```
 */
public "renderType"(type: $Function$$Type<T, $RenderType>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets whether to reposition the entity after loading.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.repositionEntityAfterLoad(true);
 * ```
 */
public "repositionEntityAfterLoad"(customRepositionEntityAfterLoad: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed during each tick when the entity is being ridden.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.rideTick(entity => {
 *     // Define custom logic for handling each tick when the entity is being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "rideTick"(callback: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Determines if the entity should serialize its data. Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.saves(false);
 * ```
 */
public "saves"(shouldSave: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the block jump factor for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setBlockJumpFactor(entity => {
 *     //Set the jump factor for the entity through context
 *     return 1 //some float value;
 * });
 * ```
 */
public "setBlockJumpFactor"(blockJumpFactor: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the minimum fall distance for the entity before taking damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setMaxFallDistance(entity => {
 *     // Define custom logic to determine the maximum fall distance
 *     // Use information about the Entity provided by the context.
 *     return 3;
 * });
 * ```
 */
public "setMaxFallDistance"(maxFallDistance: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets whether the entity is summonable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSummonable(true);
 * ```
 */
public "setSummonable"(b: boolean): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the swim sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
 * ```
 */
public "setSwimSound"(sound: any): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
 * ```
 */
public "setSwimSplashSound"(sound: any): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a function to determine whether the entity should render at a squared distance.
 * 
 * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
 *                  defining the conditions under which the entity should render.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldRenderAtSqrDistance(context => {
 *     // Custom logic to determine whether the entity should render
 *     // Access information about the distance using the provided context.
 *     return true;
 * });
 * ```
 */
public "shouldRenderAtSqrDistance"(func: $Function$$Type<$ContextUtils$EntitySqrDistanceContext$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a predicate to determine whether to show the vehicle health for the living entity.
 * 
 * @param predicate The predicate to determine whether to show the vehicle health.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.showVehicleHealth(entity => {
 *     // Determine whether to show the vehicle health for the living entity
 *     // Return true to show the vehicle health, false otherwise
 * });
 * ```
 */
public "showVehicleHealth"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the hit box of the entity type.
 * 
 * @param width The width of the entity. Defaults to 0.5.
 * @param height The height of the entity. Defaults to 0.5.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.sized(1.0f, 1.5f);
 * ```
 */
public "sized"(width: float, height: float): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hit by thunder.
 * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
 * representing the context of the entity being hit by thunder.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.thunderHit(context => {
 *     // Define custom logic for handling the entity being hit by thunder
 *     // Use information about the ThunderHitContext provided by the context.
 * });
 * ```
 */
public "thunderHit"(consumer: $Consumer$$Type<$ContextUtils$EThunderHitContext$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets a callback function to be executed on each tick for the entity.
 * 
 * @param consumer A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.tick(entity => {
 *     // Custom logic to be executed on each tick of the entity.
 *     // Access information about the entity using the provided parameter.
 * });
 * ```
 */
public "tick"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseNonAnimatableEntityBuilder<T>
/**
 * Sets the update interval in ticks of the entity.
 * Defaults to 1 tick.
 * 
 * @param updateInterval The update interval in ticks.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.updateInterval(5);
 * ```
 */
public "updateInterval"(updateInterval: integer): $BaseNonAnimatableEntityBuilder<T>
set "blockJumpFactor"(value: $Function$$Type<$Entity$$Type, any>)
set "maxFallDistance"(value: $Function$$Type<$Entity$$Type, any>)
set "summonable"(value: boolean)
set "swimSound"(value: any)
set "swimSplashSound"(value: any)
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ParticleKeyFrameEventJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder$KeyFrameEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$KeyFrameEventJS"
import { $ParticleKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.ParticleKeyframeEvent"
import { $ParticleKeyframeData } from "software.bernie.geckolib.core.keyframe.event.data.ParticleKeyframeData"

export class $BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $BaseLivingEntityBuilder$KeyFrameEventJS<E, $ParticleKeyframeData> {
/** Gets the effect id given by the Keyframe instruction from the animation.json */
readonly "effect": string
/** Gets the locator string given by the Keyframe instruction from the animation.json */
readonly "locator": string
/** Gets the script string given by the Keyframe instruction from the animation.json */
readonly "script": string

constructor(parent: $ParticleKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ContextUtils$ApplyRotationsContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ApplyRotationsContext"
import { $ContextUtils$EntityEquipmentContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityEquipmentContext"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ContextUtils$EntityBlockPosContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityBlockPosContext"
import { $ContextUtils$DamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$DamageContext"
import { $SpawnPlacements$Type, $SpawnPlacements$Type$$Type } from "net.minecraft.world.entity.SpawnPlacements$Type"
import { $SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$$Type } from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import { $ItemArmorJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.ItemArmorJSBuilder"
import { $ContextUtils$LerpToContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LerpToContext"
import { $GeoLayerJSBuilder, $GeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.GeoLayerJSBuilder"
import { $ContextUtils$RenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$RenderContext"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $ContextUtils$EntityItemLevelContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityItemLevelContext"
import { $ContextUtils$CanTrampleContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CanTrampleContext"
import { $Predicate$$Type } from "java.util.function.Predicate"
import { $ContextUtils$LineOfSightContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LineOfSightContext"
import { $ItemModelJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.ItemModelJSBuilder"
import { $EventBasedSpawnModifier$BiomeSpawn } from "net.liopyu.entityjs.util.implementation.EventBasedSpawnModifier$BiomeSpawn"
import { $ContextUtils$PassengerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PassengerEntityContext"
import { $ContextUtils$VisualContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$VisualContext"
import { $List, $List$$Type } from "java.util.List"
import { $ContextUtils$OnEffectContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$OnEffectContext"
import { $Heightmap$Types, $Heightmap$Types$$Type } from "net.minecraft.world.level.levelgen.Heightmap$Types"
import { $ContextUtils$EntityDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityDamageContext"
import { $ContextUtils$EntityItemEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityItemEntityContext"
import { $BaseLivingEntityBuilder$IParticleListenerJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$IParticleListenerJS"
import { $ContextUtils$EntityLootContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityLootContext"
import { $ContextUtils$ScaleModelRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ScaleModelRenderContext"
import { $ContextUtils$EntitySqrDistanceContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntitySqrDistanceContext"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$PlayerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext"
import { $ContextUtils$CalculateFallDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CalculateFallDamageContext"
import { $PartBuilder$$Type } from "net.liopyu.entityjs.builders.nonliving.entityjs.PartBuilder"
import { $Function$$Type } from "java.util.function.Function"
import { $ContextUtils$LivingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LivingEntityContext"
import { $Entity$MovementEmission$$Type } from "net.minecraft.world.entity.Entity$MovementEmission"
import { $ContextUtils$EntityPoseDimensionsContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityPoseDimensionsContext"
import { $ContextUtils$FinalRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$FinalRenderContext"
import { $ContextUtils$EntityTypeEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityTypeEntityContext"
import { $ContextUtils$PassengerVehicleContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PassengerVehicleContext"
import { $ContextUtils$DeathContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$DeathContext"
import { $ContextUtils$PositionRiderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PositionRiderContext"
import { $ContextUtils$Vec3Context$$Type } from "net.liopyu.entityjs.util.ContextUtils$Vec3Context"
import { $ContextUtils$MobInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$MobInteractContext"
import { $ContextUtils$EntityHealContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityHealContext"
import { $BaseLivingEntityBuilder$ISoundListenerJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ISoundListenerJS"
import { $ContextUtils$EntityFallDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityFallDamageContext"
import { $ContextUtils$HurtContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$HurtContext"
import { $ContextUtils$EntityFluidStateContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityFluidStateContext"
import { $ContextUtils$CollidingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CollidingEntityContext"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ContextUtils$MayInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$MayInteractContext"
import { $BaseLivingEntityBuilder$IAnimationPredicateJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$IAnimationPredicateJS"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ContextUtils$ThunderHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ThunderHitContext"
import { $ContextUtils$AutoAttackContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$AutoAttackContext"
import { $BaseLivingEntityBuilder$ICustomInstructionListenerJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ICustomInstructionListenerJS"
import { $ContextUtils$PartEntityParams } from "net.liopyu.entityjs.util.ContextUtils$PartEntityParams"

export class $BaseLivingEntityBuilder<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $BuilderBase<$EntityType<T>> {
static readonly "biomeSpawnList": $List<$EventBasedSpawnModifier$BiomeSpawn>
readonly "glowingLayerList": $List<$GeoLayerJSBuilder<T>>
readonly "layerList": $List<$GeoLayerJSBuilder<T>>
readonly "partEntityParamsList": $List<$ContextUtils$PartEntityParams<T>>
static readonly "spawnList": $List<$BaseLivingEntityBuilder<any>>
static readonly "thisList": $List<$BaseLivingEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

/**
 * Adds an animation controller to the entity with the specified parameters.
 * 
 * @param name The name of the animation controller.
 * @param translationTicksLength The length of translation ticks for the animation.
 * @param predicate The animation predicate defining the conditions for the animation to be played.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.addAnimationController('exampleController', 5, event => {
 *     // Define conditions for the animation to be played based on the entity.
 *     if (event.entity.hurtTime > 0) {
 *         event.thenLoop('spawn');
 *     } else {
 *         event.thenPlayAndHold('idle');
 *     }
 *     return true; // Some boolean condition indicating if the animation should be played;
 * });
 * ```
 */
public "addAnimationController"(name: string, translationTicksLength: integer, predicate: $BaseLivingEntityBuilder$IAnimationPredicateJS$$Type<T>): $BaseLivingEntityBuilder<T>
public "addArmorItemLayer"(itemArmorJSBuilder: $Consumer$$Type<$ItemArmorJSBuilder$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * Adds a new AnimationController to the entity, with the ability to add event listeners
 * 
 * @param name - The name of the controller
 * @param translationTicksLength - How many ticks it takes to transition between different animations
 * @param predicate - The predicate for the controller, determines if an animation should continue or not
 * @param soundListener - A sound listener, used to execute actions when the json requests a sound to play. May be null
 * @param particleListener - A particle listener, used to execute actions when the json requests a particle. May be null
 * @param instructionListener - A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
 */
public "addKeyAnimationController"(name: string, translationTicksLength: integer, predicate: $BaseLivingEntityBuilder$IAnimationPredicateJS$$Type<T>, soundListener: $BaseLivingEntityBuilder$ISoundListenerJS$$Type<T>, particleListener: $BaseLivingEntityBuilder$IParticleListenerJS$$Type<T>, instructionListener: $BaseLivingEntityBuilder$ICustomInstructionListenerJS$$Type<T>): $BaseLivingEntityBuilder<T>
/**
 * Adds an extra hitbox to the mob. Aka part-entities.
 * Vanilla ticks extra hitboxes(for example the ender dragon's) with the
 * .tickPart method which specifies which hitbox to move to the entity and
 * its offset. This method is available off of the parent entity anywhere
 * including non EntityJS callbacks. (Usually used in the entity's aiStep method)
 * For example: `entity.tickPart("head", 0, 1, 0)`
 * 
 * Creation of the hitbox:
 * ```javascript
 * entityBuilder.addPartEntity("head", 1, 2, builder => {
 *     // Can also be null
 *     builder.isPickable(true)
 * });
 * ```
 * 
 * @param name - The name of the part
 * @param width - The width of the part
 * @param height - The height of the part
 * @param builderConsumer - The builder for the part, very similar to the normal builder callbacks
 */
public "addPartEntity"(name: string, width: float, height: float, builderConsumer: $Consumer$$Type<$PartBuilder$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * Adds a custom item render layer to the entity model using GeckoLib's bone system.
 * 
 * The first argument is a function that returns the bone name to attach the item to, based on the entity.
 * The second argument allows configuration of the item render using an ItemModelJSBuilder.
 * 
 * Example usage:
 * ```javascript
 * builder.addRenderItemLayer(entity => "right_hand", item => {
 *     item.renderItem(context => {
 *         let {
 *             poseStack,
 *             bone,
 *             item,
 *             entity,
 *             bufferSource,
 *             partialTick,
 *             packedLight,
 *             packedOverlay
 *         } = context
 *         try {
 *             poseStack.translate(0.05, -0.5, -0.5)
 *             poseStack.mulPose(Axis.YP.rotationDegrees(90))
 *             poseStack.mulPose(Axis.ZP.rotationDegrees(-40))
 *         } catch (error) {
 *             console.log(error)
 *         }
 *     })
 * })
 * ```
 */
public "addRenderItemLayer"(handPartName: $Function$$Type<$LivingEntity$$Type, string>, consumer: $Consumer$$Type<$ItemModelJSBuilder$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
 * 
 * @param name - The name of the controller
 * @param translationTicksLength - How many ticks it takes to transition between different animations
 * @param triggerableAnimationID - The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
 * @param triggerableAnimationName - The name of the animation defined in the animations.json
 * @param loopType - The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
 */
public "addTriggerableAnimationController"(name: string, translationTicksLength: integer, triggerableAnimationID: string, triggerableAnimationName: string, loopType: string): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed during the living entity's AI step.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * allowing customization of the AI behavior.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.aiStep(entity => {
 *     // Custom logic to be executed during the living entity's AI step
 *     // Access and modify information about the entity using the provided context.
 * });
 * ```
 */
public "aiStep"(aiStep: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the animation resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the animations based on information about the entity.
 * The default behavior returns <namespace>:animations/<path>.animation.json.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.animationResource(entity => {
 *     // Define logic to determine the animation resource for the entity
 *     // Use information about the entity provided by the context.
 *     //return some ResourceLocation representing the animation resource;
 *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
 * });
 * ```
 */
public "animationResource"(function_: $Function$$Type<T, any>): $BaseLivingEntityBuilder<T>
/**
 * @param applyRotations A consumer for applying additional rotations or transforms to the entity model.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.applyRotations(context => {
 *         const { entity, poseStack, ageInTicks, rotationYaw, partialTick } = context
 *         // apply your transforms here
 *     });
 *     ```
 */
public "applyRotations"(builderConsumer: $Consumer$$Type<$ContextUtils$ApplyRotationsContext$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * Adds a spawner for this entity to the provided biome(s)
 * 
 * @param biomes - A list of biomes that the entity should spawn in. If using a tag, only one value may be provided
 * @param weight - The spawn weight the entity should have
 * @param minCount - The minimum number of entities that can spawn at a time
 * @param maxCount - The maximum number of entities that can spawn at a time
 */
public "biomeSpawn"(biomes: $List$$Type<string>, weight: integer, minCount: integer, maxCount: integer): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the block speed factor of the entity.
 * The provided Function accepts a {@link LivingEntity} parameter,
 * representing the entity whose block speed factor is being determined.
 * It returns a Float representing the block speed factor.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.blockSpeedFactor(entity => {
 *     // Define logic to calculate and return the block speed factor for the entity
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Float value representing the block speed factor;
 * });
 * ```
 */
public "blockSpeedFactor"(callback: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to calculate fall damage for the entity.
 * The provided Function accepts a {@link ContextUtils.CalculateFallDamageContext} parameter,
 * representing the context of the fall damage calculation.
 * It returns an Integer representing the calculated fall damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.calculateFallDamage(context => {
 *     // Define logic to calculate and return the fall damage for the entity
 *     // Use information about the CalculateFallDamageContext provided by the context.
 *     return // Some Integer value representing the calculated fall damage;
 * });
 * ```
 */
public "calculateFallDamage"(calculation: $Function$$Type<$ContextUtils$CalculateFallDamageContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine if a passenger can be added to the entity.
 * 
 * @param predicate The predicate to check if a passenger can be added.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canAddPassenger(context => {
 *     // Custom logic to determine if a passenger can be added to the entity
 *     return true;
 * });
 * ```
 */
public "canAddPassenger"(predicate: $Function$$Type<$ContextUtils$PassengerEntityContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can attack another entity.
 * The provided Predicate accepts a {@link ContextUtils.LivingEntityContext} parameter,
 * representing the entity that may be attacked.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canAttack(context => {
 *     // Define conditions to check if the entity can attack the targetEntity
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity can attack the targetEntity;
 * });
 * ```
 */
public "canAttack"(customCanAttack: $Function$$Type<$ContextUtils$LivingEntityContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can attack a specific entity type.
 * The provided Predicate accepts a {@link ContextUtils.EntityTypeEntityContext} parameter,
 * representing the context of the entity attacking a specific entity type.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canAttackType(context => {
 *     // Define conditions to check if the entity can attack the specified entity type
 *     // Use information about the EntityTypeEntityContext provided by the context.
 *     return // Some boolean condition indicating if the entity can attack the specified entity type;
 * });
 * ```
 */
public "canAttackType"(canAttackType: $Function$$Type<$ContextUtils$EntityTypeEntityContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can be affected by an effect.
 * The provided Predicate accepts a {@link ContextUtils.OnEffectContext} parameter,
 * representing the context of the effect that may affect the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canBeAffected(context => {
 *     // Define conditions to check if the entity can be affected by the effect
 *     // Use information about the OnEffectContext provided by the context.
 *     return // Some boolean condition indicating if the entity can be affected by an effect;
 * });
 * ```
 */
public "canBeAffected"(predicate: $Function$$Type<$ContextUtils$OnEffectContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Determines if the entity's hitbox collides with other entities the same as a solic block.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.canBeCollidedWith(entity => {
 *         return true
 *     });
 *     ```
 */
public "canBeCollidedWith"(canBeCollidedWith: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets whether the entity can breathe underwater.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canBreatheUnderwater(true);
 * ```
 */
public "canBreatheUnderwater"(canBreatheUnderwater: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can change dimensions.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may attempt to change dimensions.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canChangeDimensions(entity => {
 *     // Define the conditions for the entity to be able to change dimensions
 *     // Use information about the LivingEntity provided by the context.
 *     return false // Some boolean condition indicating if the entity can change dimensions;
 * });
 * ```
 */
public "canChangeDimensions"(supplier: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Function determining if the entity may collide with another entity
 * using the ContextUtils.CollidingEntityContext which has this entity and the
 * one colliding with this entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canCollideWith(context => {
 *     return true //Some Boolean value determining whether the entity may collide with another
 * });
 * ```
 */
public "canCollideWith"(canCollideWith: $Function$$Type<$ContextUtils$CollidingEntityContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine whether the entity can disable its target's shield.
 * The provided Predicate accepts a {@link LivingEntity} parameter.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canDisableShield(entity => {
 *     // Define the conditions to check if the entity can disable its shield
 *     // Use information about the LivingEntity provided by the context.
 *     return true;
 * });
 * ```
 */
public "canDisableShield"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can undergo freezing.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be subjected to freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canFreeze(entity => {
 *     // Define the conditions for the entity to be able to freeze
 *     // Use information about the LivingEntity provided by the context.
 *     return true //someBoolean;
 * });
 * ```
 */
public "canFreeze"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine whether the entity can ride another entity.
 * 
 * @param canRide Predicate accepting a {@link ContextUtils.PassengerVehicleContext} parameter,
 *                  defining the conditions under which the entity should ride
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canRide(context => {
 *     return true;
 * });
 * ```
 */
public "canRide"(func: $Predicate$$Type<$ContextUtils$PassengerVehicleContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets whether the entity can spawn far from the player.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canSpawnFarFromPlayer(true);
 * ```
 */
public "canSpawnFarFromPlayer"(canSpawnFar: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can stand on a fluid.
 * The provided Predicate accepts a {@link ContextUtils.EntityFluidStateContext} parameter,
 * representing the context of the entity potentially standing on a fluid.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canStandOnFluid(context => {
 *     // Define conditions for the entity to be able to stand on a fluid
 *     // Use information about the EntityFluidStateContext provided by the context.
 *     return // Some boolean condition indicating if the entity can stand on the fluid;
 * });
 * ```
 */
public "canStandOnFluid"(predicate: $Function$$Type<$ContextUtils$EntityFluidStateContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Boolean determining whether the passenger is able to steer the entity while riding.
 * Defaults to true.
 * Example usage:
 * ```javascript
 * entityBuilder.canSteer(false);
 * ```
 */
public "canSteer"(canSteer: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can take an item.
 * The provided Predicate accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
 * representing the context of the entity potentially taking an item.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canTakeItem(context => {
 *     // Define conditions for the entity to be able to take an item
 *     // Use information about the EntityItemLevelContext provided by the context.
 *     return // Some boolean condition indicating if the entity can take the item;
 * });
 * ```
 */
public "canTakeItem"(predicate: $Function$$Type<$ContextUtils$EntityItemLevelContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can trample or step on something.
 * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
 * representing the context of the potential trampling action, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canTrample(context => {
 *     // Define conditions for the entity to be allowed to trample
 *     // Use information about the CanTrampleContext provided by the context.
 *     return false // Some boolean condition indicating if the entity can trample;
 * });
 * ```
 */
public "canTrample"(predicate: $Function$$Type<$ContextUtils$CanTrampleContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the client tracking range for the entity.
 * Defaults to 5.
 * Example usage:
 * ```javascript
 * entityBuilder.clientTrackingRange(64); // Set the client tracking range to 64 blocks
 * ```
 */
public "clientTrackingRange"(i: integer): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine whether the living entity dampens vibrations.
 * 
 * @param predicate The predicate to determine whether the living entity dampens vibrations.
 * 
 * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
 * 
 * Example usage:
 * ```javascript
 * baseLivingEntityBuilder.dampensVibrations(entity => {
 *     // Determine whether the living entity dampens vibrations
 *     // Return true if the entity dampens vibrations, false otherwise
 * });
 * ```
 */
public "dampensVibrations"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Boolean determining if the entity will turn sideways on death.
 * Defaults to true.
 * Example usage:
 * ```javascript
 * entityBuilder.defaultDeathPose(false);
 * ```
 */
public "defaultDeathPose"(defaultDeathPose: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity automatically attacks on touch.
 * The provided Consumer accepts a {@link ContextUtils.AutoAttackContext} parameter,
 * representing the context of the auto-attack when the entity touches another entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.doAutoAttackOnTouch(context => {
 *     // Define custom logic for handling when the entity automatically attacks on touch
 *     // Use information about the AutoAttackContext provided by the context.
 * });
 * ```
 */
public "doAutoAttackOnTouch"(doAutoAttackOnTouch: $Consumer$$Type<$ContextUtils$AutoAttackContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity drops custom loot upon death.
 * The provided Consumer accepts a {@link ContextUtils.EntityLootContext} parameter,
 * representing the context of the entity's death and loot dropping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.dropCustomDeathLoot(context => {
 *     // Define custom logic for handling the entity dropping custom loot upon death
 *     // Use information about the EntityLootContext provided by the context.
 * });
 * ```
 */
public "dropCustomDeathLoot"(consumer: $Consumer$$Type<$ContextUtils$EntityLootContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs an eating action.
 * The provided Consumer accepts a {@link ContextUtils.EntityItemLevelContext} parameter,
 * representing the context of the entity's interaction with a specific item during eating.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.eat(context => {
 *     // Custom logic to handle the entity's eating action
 *     // Access information about the item being consumed using the provided context.
 * });
 * ```
 */
public "eat"(function_: $Consumer$$Type<$ContextUtils$EntityItemLevelContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets the sound resource location for the entity's eating sound using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.eatingSound("minecraft:entity.zombie.ambient");
 * ```
 */
public "eatingSound"(sound: any): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the experience reward for killing the entity.
 * The provided Function accepts a {@link LivingEntity} parameter,
 * representing the entity whose experience reward is being determined.
 * It returns an Integer representing the experience reward.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.experienceReward(killedEntity => {
 *     // Define logic to calculate and return the experience reward for the killedEntity
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Integer value representing the experience reward;
 * });
 * ```
 */
public "experienceReward"(experienceReward: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the sound resource locations for small and large falls of the entity using either string representations or ResourceLocation objects.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.fallSounds("minecraft:entity.generic.small_fall",
 *     "minecraft:entity.generic.large_fall");
 * ```
 */
public "fallSounds"(smallFallSound: any, largeFallSound: any): $BaseLivingEntityBuilder<T>
/**
 * Sets whether the entity is immune to fire damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.fireImmune(true);
 * ```
 */
public "fireImmune"(isFireImmune: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity has line of sight to another entity.
 * The provided Function accepts a {@link LineOfSightContext} parameter,
 * representing the entity to check for line of sight.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.hasLineOfSight(context => {
 *     // Define conditions to check if the entity has line of sight to the target entity
 *     // Use information about the Entity provided by the context.
 *     return // Some boolean condition indicating if there is line of sight;
 * });
 * ```
 */
public "hasLineOfSight"(f: $Function$$Type<$ContextUtils$LineOfSightContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the list of block names to which the entity is immune.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
 * ```
 */
public "immuneTo"(...blockNames: string[]): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine if the entity has inverted heal and harm behavior.
 * 
 * @param invertedHealAndHarm The predicate to check for inverted heal and harm behavior.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.invertedHealAndHarm(entity => {
 *     // Custom logic to determine if the entity has inverted heal and harm behavior
 *     return true; // Replace with your custom boolean condition
 * });
 * ```
 */
public "invertedHealAndHarm"(invertedHealAndHarm: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine whether the entity is affected by fluids.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity whose interaction with fluids is being determined.
 * It returns a Boolean indicating whether the entity is affected by fluids.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAffectedByFluids(entity => {
 *     // Define logic to determine whether the entity is affected by fluids
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Boolean value indicating whether the entity is affected by fluids;
 * });
 * ```
 */
public "isAffectedByFluids"(b: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is affected by potions.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be checked for its susceptibility to potions.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAffectedByPotions(entity => {
 *     // Define conditions to check if the entity is affected by potions
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity is affected by potions;
 * });
 * ```
 */
public "isAffectedByPotions"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Function determining if the entity is allied with a potential target.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAlliedTo(context => {
 *     const {entity, target} = context
 *     return target.type == 'minecraft:blaze'
 * });
 * ```
 */
public "isAlliedTo"(isAlliedTo: $Function$$Type<$ContextUtils$LineOfSightContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets whether the entity is always considered as an experience dropper.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAlwaysExperienceDropper(true);
 * ```
 */
public "isAlwaysExperienceDropper"(b: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is attackable.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be checked for its attackability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAttackable(entity => {
 *     // Define conditions to check if the entity is attackable
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity is attackable;
 * });
 * ```
 */
public "isAttackable"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is currently glowing.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be checked for its glowing state.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isCurrentlyGlowing(entity => {
 *     // Define the conditions to check if the entity is currently glowing
 *     // Use information about the LivingEntity provided by the context.
 *     const isGlowing = // Some boolean condition to check if the entity is glowing;
 *     return isGlowing;
 * });
 * ```
 */
public "isCurrentlyGlowing"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine whether the entity is currently flapping.
 * The provided Function accepts a {@link LivingEntity} parameter,
 * representing the entity whose flapping status is being determined.
 * It returns a Boolean indicating whether the entity is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFlapping(entity => {
 *     // Define logic to determine whether the entity is currently flapping
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Boolean value indicating whether the entity is flapping;
 * });
 * ```
 */
public "isFlapping"(b: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Defines in what condition the entity will start freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFreezing(entity => {
 *     return true;
 * });
 * ```
 */
public "isFreezing"(isFreezing: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine whether the entity is immobile.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity whose immobility is being determined.
 * It returns a Boolean indicating whether the entity is immobile.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isImmobile(entity => {
 *     // Define logic to determine whether the entity is immobile
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Boolean value indicating whether the entity is immobile;
 * });
 * ```
 */
public "isImmobile"(b: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
 * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
 * representing the context of the damage, and returns a boolean indicating invulnerability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isInvulnerableTo(context => {
 *     // Define conditions for the entity to be invulnerable to the specific type of damage
 *     // Use information about the DamageContext provided by the context.
 *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
 * });
 * ```
 */
public "isInvulnerableTo"(predicate: $Function$$Type<$ContextUtils$DamageContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets whether the entity is pushable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPushable(true);
 * ```
 */
public "isPushable"(b: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is sensitive to water.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be checked for sensitivity to water.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isSensitiveToWater(entity => {
 *     // Define conditions to check if the entity is sensitive to water
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity is sensitive to water;
 * });
 * ```
 */
public "isSensitiveToWater"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is currently sleeping.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be checked for its sleeping state.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isSleeping(entity => {
 *     // Define conditions to check if the entity is currently sleeping
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity is sleeping;
 * });
 * ```
 */
public "isSleeping"(supplier: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the jump boost power for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.jumpBoostPower(entity => {
 *     return //some float value
 * });
 * ```
 */
public "jumpBoostPower"(jumpBoostPower: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hurt by lava.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is affected by lava.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lavaHurt(entity => {
 *     // Define custom logic for handling the entity being hurt by lava
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "lavaHurt"(consumer: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a consumer to handle custom lerping logic for the living entity.
 * 
 * @param lerpTo The consumer to handle the custom lerping logic.
 * 
 * The consumer should take a LerpToContext as a parameter, providing information about the lerping operation, including the target position, yaw, pitch, increment count, teleport flag, and the entity itself.
 * 
 * Example usage:
 * ```javascript
 * baseLivingEntityBuilder.lerpTo(context => {
 *     // Custom lerping logic for the living entity
 *     const { x, y, z, yaw, pitch, posRotationIncrements, teleport, entity } = context;
 *     // Perform custom lerping operations using the provided context
 *     // For example, you can smoothly move the entity from its current position to the target position
 *     entity.setPositionAndRotation(x, y, z, yaw, pitch);
 * });
 * ```
 */
public "lerpTo"(lerpTo: $Consumer$$Type<$ContextUtils$LerpToContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets the main arm of the entity. Defaults to 'right'.
 * 
 * @param arm The main arm of the entity. Accepts values "left" or "right".
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mainArm("left");
 * ```
 */
public "mainArm"(arm: any): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity may interact with something.
 * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
 * representing the context of the potential interaction, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mayInteract(context => {
 *     // Define conditions for the entity to be allowed to interact
 *     // Use information about the MayInteractContext provided by the context.
 *     return false // Some boolean condition indicating if the entity may interact;
 * });
 * ```
 */
public "mayInteract"(predicate: $Function$$Type<$ContextUtils$MayInteractContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the mob category for the entity.
 * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
 * Defaults to 'misc'.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mobCategory('monster');
 * ```
 */
public "mobCategory"(category: string): $BaseLivingEntityBuilder<T>
/**
 * Defines the Mob's Type
 * Examples: 'undead', 'water', 'arthropod', 'undefined', 'illager'
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mobType('undead');
 * ```
 */
public "mobType"(mt: any): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the model resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the model based on information about the entity.
 * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.modelResource(entity => {
 *     // Define logic to determine the model resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
 * });
 * ```
 */
public "modelResource"(function_: $Function$$Type<T, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the scale of the model.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.modelSize(2,2);
 * ```
 */
public "modelSize"(scaleHeight: float, scaleWidth: float): $BaseLivingEntityBuilder<T>
/**
 * Boolean determining whether the entity can jump while mounted by a player.
 * (Currently experimental jumping logic subject to change in the future)
 * Defaults to false.
 * Example usage:
 * ```javascript
 * entityBuilder.mountJumpingEnabled(true);
 * ```
 */
public "mountJumpingEnabled"(mountJumpingEnabled: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets the movement emission for the entity which determines whether it will play sounds or spawn particles.
 * 
 * Example usage:
 * ```javascript
 * builder.movementEmission("none")
 * ```
 */
public "movementEmission"(emission: $Entity$MovementEmission$$Type): $BaseLivingEntityBuilder<T>
/**
 * Adds an extra render layer to the mob.
 * @param newGeoLayer The builder Consumer for the new render layer.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.newGeoLayer(builder => {
 *         builder.textureResource(entity => {
 *             return "kubejs:textures/entity/sasuke.png"
 *         })
 *     });
 *     ```
 */
public "newGeoLayer"(builderConsumer: $Consumer$$Type<any>): $BaseLivingEntityBuilder<T>
/**
 * Adds an extra glowing render layer to the mob.
 * @param newGlowingGeoLayer The builder Consumer for the new render layer.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.newGlowingGeoLayer(builder => {
 *         builder.textureResource(entity => {
 *             return "kubejs:textures/entity/sasuke.png"
 *         })
 *     });
 *     ```
 */
public "newGlowingGeoLayer"(builderConsumer: $Consumer$$Type<$GeoLayerJSBuilder$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the next step distance for the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose next step distance is being determined.
 * It returns a Float representing the next step distance.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.nextStep(entity => {
 *     // Define logic to calculate and return the next step distance for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the next step distance;
 * });
 * ```
 */
public "nextStep"(nextStep: $Function$$Type<$Entity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is added to the world.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is added to the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onAddedToWorld(entity => {
 *     // Define custom logic for handling when the entity is added to the world
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onAddedToWorld"(onAddedToWorldCallback: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is blocked by a shield.
 * The provided Consumer accepts a {@link ContextUtils.LivingEntityContext} parameter,
 * representing the entity that is blocked by a shield.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onBlockedByShield(context => {
 *     // Define custom logic for handling when the entity is blocked by a shield
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onBlockedByShield"(onBlockedByShield: $Consumer$$Type<$ContextUtils$LivingEntityContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed on the client side.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is being removed on the client side.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onClientRemoval(entity => {
 *     // Define custom logic for handling the removal of the entity on the client side
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onClientRemoval"(consumer: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is on a climbable surface.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity that may be checked for being on a climbable surface.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onClimbable(entity => {
 *     // Define conditions to check if the entity is on a climbable surface
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity is on a climbable surface;
 * });
 * ```
 */
public "onClimbable"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity dies.
 * The provided Consumer accepts a {@link ContextUtils.DeathContext} parameter,
 * representing the context of the entity's death.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onDeath(context => {
 *     // Define custom logic for handling the entity's death
 *     // Use information about the DeathContext provided by the context.
 * });
 * ```
 */
public "onDeath"(consumer: $Consumer$$Type<$ContextUtils$DeathContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity's air supply decreases.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity whose air supply is being decreased.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onDecreaseAirSupply(entity => {
 *     // Define custom logic for handling when the entity's air supply decreases
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onDecreaseAirSupply"(onDecreaseAirSupply: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when an effect is added to the entity.
 * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
 * representing the context of the effect being added to the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onEffectAdded(context => {
 *     // Define custom logic for handling when an effect is added to the entity
 *     // Use information about the OnEffectContext provided by the context.
 * });
 * ```
 */
public "onEffectAdded"(consumer: $Consumer$$Type<$ContextUtils$OnEffectContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when an effect is removed from the entity.
 * The provided Consumer accepts a {@link ContextUtils.OnEffectContext} parameter,
 * representing the context of the effect being removed from the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onEffectRemoved(context => {
 *     // Define custom logic for handling when an effect is removed from the entity
 *     // Use information about the OnEffectContext provided by the context.
 * });
 * ```
 */
public "onEffectRemoved"(consumer: $Consumer$$Type<$ContextUtils$OnEffectContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity enters combat.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that has entered combat.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onEnterCombat(entity => {
 *     // Define custom logic for handling the entity entering combat
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onEnterCombat"(c: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity equips an item.
 * The provided Consumer accepts a {@link ContextUtils.EntityEquipmentContext} parameter,
 * representing the context of the entity equipping an item.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onEquipItem(context => {
 *     // Define custom logic for handling when the entity equips an item
 *     // Use information about the EntityEquipmentContext provided by the context.
 * });
 * ```
 */
public "onEquipItem"(onEquipItem: $Consumer$$Type<$ContextUtils$EntityEquipmentContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a flap action.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFlap(entity => {
 *     // Define custom logic for handling the entity's flap action
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onFlap"(consumer: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hurt.
 * The provided Consumer accepts a {@link ContextUtils.EntityDamageContext} parameter,
 * representing the context of the entity being hurt.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onHurt(context => {
 *     // Define custom logic for handling when the entity is hurt
 *     // Use information about the EntityDamageContext provided by the context.
 * });
 * ```
 */
public "onHurt"(predicate: $Consumer$$Type<$ContextUtils$EntityDamageContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * @param onHurtTarget A Consumer to execute when the mob attacks its target
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.onHurtTarget(context => {
 *     const {entity, targetEntity} = context
 *     //Execute code when the target is hurt
 * });
 * ```
 */
public "onHurtTarget"(onHurtTarget: $Consumer$$Type<$ContextUtils$LineOfSightContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity's air supply increases.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity whose air supply is being increased.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onIncreaseAirSupply(entity => {
 *     // Define custom logic for handling when the entity's air supply increases
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onIncreaseAirSupply"(onIncreaseAirSupply: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a consumer to handle the interaction with the entity.
 * The provided Consumer accepts a {@link ContextUtils.MobInteractContext} parameter,
 * representing the context of the interaction
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onInteract(context => {
 *     // Define custom logic for the interaction with the entity
 *     // Use information about the MobInteractContext provided by the context.
 *     if (context.player.isShiftKeyDown()) return
 *     context.player.startRiding(context.entity);
 * });
 * ```
 */
public "onInteract"(c: $Consumer$$Type<$ContextUtils$MobInteractContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity picks up an item.
 * The provided Consumer accepts a {@link ContextUtils.EntityItemEntityContext} parameter,
 * representing the context of the entity picking up an item with another entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onItemPickup(context => {
 *     // Define custom logic for handling the entity picking up an item
 *     // Use information about the EntityItemEntityContext provided by the context.
 * });
 * ```
 */
public "onItemPickup"(consumer: $Consumer$$Type<$ContextUtils$EntityItemEntityContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity leaves combat.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that has left combat.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onLeaveCombat(entity => {
 *     // Define custom logic for handling the entity leaving combat
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onLeaveCombat"(runnable: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the living entity falls and takes damage.
 * The provided Consumer accepts a {@link ContextUtils.EntityFallDamageContext} parameter,
 * representing the context of the entity falling and taking fall damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onLivingFall(context => {
 *     // Define custom logic for handling when the living entity falls and takes damage
 *     // Use information about the EntityFallDamageContext provided by the context.
 * });
 * ```
 */
public "onLivingFall"(c: $Consumer$$Type<$ContextUtils$EntityFallDamageContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity receives healing.
 * The provided Consumer accepts a {@link ContextUtils.EntityHealContext} parameter,
 * representing the context of the entity receiving healing.
 * Very similar to {@link ForgeEventFactory.onLivingHeal}
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onLivingHeal(context => {
 *     // Define custom logic for handling when the entity receives healing
 *     // Use information about the EntityHealContext provided by the context.
 * });
 * ```
 */
public "onLivingHeal"(callback: $Consumer$$Type<$ContextUtils$EntityHealContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity jumps.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onLivingJump(entity => {
 *     // Custom logic to handle the entity's jump action
 * });
 * ```
 */
public "onLivingJump"(onJump: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed from the world.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is being removed from the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onRemovedFromWorld(entity => {
 *     // Define custom logic for handling the removal of the entity from the world
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onRemovedFromWorld"(consumer: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity starts sprinting.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that has started sprinting.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onSprint(entity => {
 *     // Define custom logic for handling when the entity starts sprinting
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onSprint"(consumer: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity starts sleeping.
 * The provided Consumer accepts a {@link ContextUtils.EntityBlockPosContext} parameter,
 * representing the context of the entity starting to sleep at a specific block position.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onStartSleeping(context => {
 *     // Define custom logic for handling the entity starting to sleep
 *     // Use information about the EntityBlockPosContext provided by the context.
 * });
 * ```
 */
public "onStartSleeping"(consumer: $Consumer$$Type<$ContextUtils$EntityBlockPosContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity stops riding.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that has stopped being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onStopRiding(entity => {
 *     // Define custom logic for handling when the entity stops being ridden
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onStopRiding"(callback: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity stops sleeping.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that has stopped sleeping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onStopSleeping(entity => {
 *     // Define custom logic for handling the entity stopping sleeping
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "onStopSleeping"(runnable: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when a player interacts with the entity.
 * The provided Consumer accepts a {@link ContextUtils.PlayerEntityContext} parameter,
 * representing the context of the player's interaction with the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.playerTouch(context => {
 *     // Define custom logic for handling player interaction with the entity
 *     // Use information about the PlayerEntityContext provided by the context.
 * });
 * ```
 */
public "playerTouch"(consumer: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * @param positionRider A consumer determining the position of rider/riders.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.positionRider(context => {
 *         const {entity, passenger, moveFunction} = context
 *     });
 *     ```
 */
public "positionRider"(builderConsumer: $Consumer$$Type<$ContextUtils$PositionRiderContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Defines logic to render the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.render(context => {
 *     // Define logic to render the entity
 *     if (context.entity.isBaby()) {
 *         context.poseStack.scale(0.5, 0.5, 0.5);
 *     }
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$RenderContext$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * A Consumer determining logic for the final render.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.renderFinal(context => {
 *     const {
 *         poseStack,
 *         entity,
 *         model,
 *         bufferSource,
 *         buffer,
 *         partialTick,
 *         packedLight,
 *         packedOverlay,
 *         red,
 *         green,
 *         blue,
 *         alpha
 *     } = context
 *     if (entity.isBaby()) {
 *         poseStack.scale(0.5, 0.5, 0.5)
 *     }
 * })
 * ```
 */
public "renderFinal"(renderFinal: $Consumer$$Type<$ContextUtils$FinalRenderContext$$Type<T>>): $BaseLivingEntityBuilder<T>
/**
 * Sets the render type for the entity via a function.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
 * ```
 */
public "renderType"(type: $Function$$Type<T, $RenderType>): $BaseLivingEntityBuilder<T>
/**
 * Sets whether to reposition the entity after loading.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.repositionEntityAfterLoad(true);
 * ```
 */
public "repositionEntityAfterLoad"(customRepositionEntityAfterLoad: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed during each tick when the entity is being ridden.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.rideTick(entity => {
 *     // Define custom logic for handling each tick when the entity is being ridden
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "rideTick"(callback: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Determines if the entity should serialize its data. Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.saves(false);
 * ```
 */
public "saves"(shouldSave: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the custom hitbox scale of the entity.
 * The provided Function accepts a {@link LivingEntity} parameter,
 * representing the entity whose scale is being determined.
 * It returns a Float representing the custom scale.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.scale(entity => {
 *     // Define logic to calculate and return the custom scale for the entity
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Float value;
 * });
 * ```
 */
public "scale"(customScale: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
 *     without affecting core logic such as hitbox sizing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.scaleModelForRender(context => {
 *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
 *     if (entity.isBaby()) {
 *         poseStack.scale(0.5, 0.5, 0.5)
 *     }
 * });
 * ```
 */
public "scaleModelForRender"(scaleModelForRender: $Consumer$$Type<$ContextUtils$ScaleModelRenderContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets the block jump factor for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setBlockJumpFactor(entity => {
 *     //Set the jump factor for the entity through context
 *     return 1 //some float value;
 * });
 * ```
 */
public "setBlockJumpFactor"(blockJumpFactor: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the death sound for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setDeathSound("minecraft:entity.generic.death");
 * ```
 */
public "setDeathSound"(sound: any): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the custom hurt sound of the entity.
 * The provided Function accepts a {@link ContextUtils.HurtContext} parameter,
 * ```javascript
 * entityBuilder.setHurtSound(context => {
 *     // Custom logic to determine the hurt sound for the entity
 *     // You can use information from the HurtContext to customize the sound based on the context
 *     const { entity, damageSource } = context;
 *     // Determine the hurt sound based on the type of damage source
 *     switch (damageSource.getType()) {
 *         case "fire":
 *             return "minecraft:entity.generic.burn";
 *         case "fall":
 *             return "minecraft:entity.generic.hurt";
 *         case "drown":
 *             return "minecraft:entity.generic.hurt";
 *         case "explosion":
 *             return "minecraft:entity.generic.explode";
 *         default:
 *             return "minecraft:entity.generic.explode";
 *     }
 * })
 * ```
 */
public "setHurtSound"(sound: $Function$$Type<$ContextUtils$HurtContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the minimum fall distance for the entity before taking damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setMaxFallDistance(entity => {
 *     // Define custom logic to determine the maximum fall distance
 *     // Use information about the LivingEntity provided by the context.
 *     return 3;
 * });
 * ```
 */
public "setMaxFallDistance"(maxFallDistance: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the render type for the entity.
 * 
 * @param type The render type to be set. Acceptable values are:
 *              - "solid
 *              - "cutout"
 *              - "translucent"
 *              - RenderType.SOLID
 *              - RenderType.CUTOUT
 *              - RenderType.TRANSLUCENT
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setRenderType("translucent");
 * ```
 */
public "setRenderType"(type: any): $BaseLivingEntityBuilder<T>
/**
 * Sets the overall sound volume for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSoundVolume(0.5);
 * ```
 */
public "setSoundVolume"(volume: float): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the standing eye height of the entity.
 * The provided Function accepts a {@link ContextUtils.EntityPoseDimensionsContext} parameter,
 * representing the context of the entity's pose and dimensions when standing.
 * It returns a Float representing the standing eye height.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setStandingEyeHeight(context => {
 *     // Define logic to calculate and return the standing eye height for the entity
 *     // Use information about the EntityPoseDimensionsContext provided by the context.
 *     return // Some Float value representing the standing eye height;
 * });
 * ```
 */
public "setStandingEyeHeight"(setStandingEyeHeight: $Function$$Type<$ContextUtils$EntityPoseDimensionsContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets whether the entity is summonable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSummonable(true);
 * ```
 */
public "setSummonable"(b: boolean): $BaseLivingEntityBuilder<T>
/**
 * Sets the swim sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
 * ```
 */
public "setSwimSound"(sound: any): $BaseLivingEntityBuilder<T>
/**
 * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
 * ```
 */
public "setSwimSplashSound"(sound: any): $BaseLivingEntityBuilder<T>
/**
 * Sets the water slowdown factor for the entity. Defaults to 0.8.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setWaterSlowDown(0.6);
 * ```
 */
public "setWaterSlowDown"(slowdownFactor: float): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity should drop experience upon death.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity whose experience drop is being determined.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldDropExperience(entity => {
 *     // Define conditions to check if the entity should drop experience upon death
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some boolean condition indicating if the entity should drop experience;
 * });
 * ```
 */
public "shouldDropExperience"(p: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine whether the entity should drop loot upon death.
 * The provided Predicate accepts a {@link LivingEntity} parameter,
 * representing the entity whose loot dropping behavior is being determined.
 * It returns a Boolean indicating whether the entity should drop loot.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldDropLoot(entity => {
 *     // Define logic to determine whether the entity should drop loot
 *     // Use information about the LivingEntity provided by the context.
 *     return // Some Boolean value indicating whether the entity should drop loot;
 * });
 * ```
 */
public "shouldDropLoot"(b: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine whether the entity should render at a squared distance.
 * 
 * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
 *                  defining the conditions under which the entity should render.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldRenderAtSqrDistance(context => {
 *     // Custom logic to determine whether the entity should render
 *     // Access information about the distance using the provided context.
 *     return true;
 * });
 * ```
 */
public "shouldRenderAtSqrDistance"(func: $Function$$Type<$ContextUtils$EntitySqrDistanceContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the rider of the entity should face forward.
 * The provided Predicate accepts a {@link ContextUtils.PlayerEntityContext} parameter,
 * representing the context of the player entity riding the main entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldRiderFaceForward(context => {
 *     // Define the conditions for the rider to face forward
 *     // Use information about the player entity provided by the context.
 *     return true //someBoolean;
 * });
 * ```
 */
public "shouldRiderFaceForward"(predicate: $Function$$Type<$ContextUtils$PlayerEntityContext$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a predicate to determine whether to show the vehicle health for the living entity.
 * 
 * @param predicate The predicate to determine whether to show the vehicle health.
 * 
 * The predicate should take a LivingEntity as a parameter and return a boolean value indicating whether to show the vehicle health.
 * 
 * Example usage:
 * ```javascript
 * baseLivingEntityBuilder.showVehicleHealth(entity => {
 *     // Determine whether to show the vehicle health for the living entity
 *     // Return true to show the vehicle health, false otherwise
 * });
 * ```
 */
public "showVehicleHealth"(predicate: $Function$$Type<$LivingEntity$$Type, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets the hit box of the entity type.
 * 
 * @param width The width of the entity, defaults to 1.
 * @param height The height of the entity, defaults to 1.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.sized(2, 3);
 * ```
 */
public "sized"(width: float, height: float): $BaseLivingEntityBuilder<T>
/**
 * Sets the spawn placement of the entity type
 * entityBuilder.spawnPlacement('on_ground', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
 *     if (levelaccessor.getLevel().getBiome(blockpos) == 'minecraft:plains') return true;
 *     return false
 * })
 * 
 * @param placementType - The placement type of the spawn, accepts 'on_ground', 'in_water', 'no_restrictions', 'in_lava'
 * @param heightMap - The height map used for the spawner
 * @param spawnPredicate - The predicate that determines if the entity will spawn
 */
public "spawnPlacement"(placementType: $SpawnPlacements$Type$$Type, heightMap: $Heightmap$Types$$Type, spawnPredicate: $SpawnPlacements$SpawnPredicate$$Type<T>): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureResource"(function_: $Function$$Type<T, any>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hit by thunder.
 * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
 * representing the context of the entity being hit by thunder.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.thunderHit(context => {
 *     // Define custom logic for handling the entity being hit by thunder
 *     // Use information about the ThunderHitContext provided by the context.
 * });
 * ```
 */
public "thunderHit"(consumer: $Consumer$$Type<$ContextUtils$ThunderHitContext$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets a callback function to be executed during each tick of the entity.
 * The provided Consumer accepts a {@link LivingEntity} parameter,
 * representing the entity that is being ticked.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.tick(entity => {
 *     // Define custom logic for handling during each tick of the entity
 *     // Use information about the LivingEntity provided by the context.
 * });
 * ```
 */
public "tick"(tickCallback: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Consumer overriding the tickDeath responsible to counting down
 * the ticks it takes to remove the entity when it dies.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.tickDeath(entity => {
 *     // Override the tickDeath method in the entity
 * });
 * ```
 */
public "tickDeath"(tickDeath: $Consumer$$Type<$LivingEntity$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Consumer determining travel logic for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.travel(context => {
 *     const {entity, vec3} = context
 *     // Use the vec3 and entity to determine the travel logic of the entity
 * });
 * ```
 */
public "travel"(travel: $Consumer$$Type<$ContextUtils$Vec3Context$$Type>): $BaseLivingEntityBuilder<T>
/**
 * Sets the update interval for the entity.
 * Defaults to 1 tick.
 * Example usage:
 * ```javascript
 * entityBuilder.updateInterval(20); // Set the update interval to 20 ticks
 * ```
 */
public "updateInterval"(i: integer): $BaseLivingEntityBuilder<T>
/**
 * Sets a function to determine the visibility percentage of the entity.
 * The provided Function accepts a {@link ContextUtils.VisualContext} parameter,
 * representing both the entity whose visibility percentage is being determined
 * and the the builder entity who is being looked at.
 * It returns a Double representing the visibility percentage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.visibilityPercent(context => {
 *     // Define logic to calculate and return the visibility percentage for the targetEntity
 *     // Use information about the Entity provided by the context.
 *     return // Some Double value representing the visibility percentage;
 * });
 * ```
 */
public "visibilityPercent"(visibilityPercent: $Function$$Type<$ContextUtils$VisualContext$$Type, any>): $BaseLivingEntityBuilder<T>
get "heightMap"(): $Heightmap$Types
set "heightMap"(value: $Heightmap$Types$$Type)
get "placementType"(): $SpawnPlacements$Type
set "placementType"(value: $SpawnPlacements$Type$$Type)
get "spawnPredicate"(): $SpawnPlacements$SpawnPredicate<$Entity>
set "spawnPredicate"(value: $SpawnPlacements$SpawnPredicate$$Type<$Entity$$Type>)
set "blockJumpFactor"(value: $Function$$Type<$LivingEntity$$Type, any>)
set "deathSound"(value: any)
set "hurtSound"(value: $Function$$Type<$ContextUtils$HurtContext$$Type, any>)
set "maxFallDistance"(value: $Function$$Type<$LivingEntity$$Type, any>)
set "soundVolume"(value: float)
set "standingEyeHeight"(value: $Function$$Type<$ContextUtils$EntityPoseDimensionsContext$$Type, any>)
set "summonable"(value: boolean)
set "swimSound"(value: any)
set "swimSplashSound"(value: any)
set "waterSlowDown"(value: float)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$SoundKeyFrameEventJS" {
import { $SoundKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.SoundKeyframeEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $SoundKeyframeData } from "software.bernie.geckolib.core.keyframe.event.data.SoundKeyframeData"
import { $BaseEntityBuilder$KeyFrameEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$KeyFrameEventJS"

export class $BaseEntityBuilder$SoundKeyFrameEventJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $BaseEntityBuilder$KeyFrameEventJS<E, $SoundKeyframeData> {
/** Gets the sound id given by the Keyframe instruction from the animation. json */
readonly "sound": string

constructor(parent: $SoundKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.misc.MoveControlJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$SetWantedPositionContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$SetWantedPositionContext"
import { $ContextUtils$RotLerpContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$RotLerpContext"
import { $ContextUtils$IsWalkableContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$IsWalkableContext"
import { $ContextUtils$StrafeContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$StrafeContext"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Function$$Type } from "java.util.function.Function"

export class $MoveControlJSBuilder {
constructor()

public "setHasWanted"(hasWanted: $Function$$Type<$Mob$$Type, any>): $MoveControlJSBuilder
public "setIsWalkable"(isWalkable: $Function$$Type<$ContextUtils$IsWalkableContext$$Type, any>): $MoveControlJSBuilder
public "setRotlerp"(rotlerp: $Function$$Type<$ContextUtils$RotLerpContext$$Type, any>): $MoveControlJSBuilder
public "setSpeedModifier"(getSpeedModifier: $Function$$Type<$Mob$$Type, any>): $MoveControlJSBuilder
public "setStrafe"(strafe: $Consumer$$Type<$ContextUtils$StrafeContext$$Type>): $MoveControlJSBuilder
public "setWantedPosition"(setWantedPosition: $Consumer$$Type<$ContextUtils$SetWantedPositionContext$$Type>): $MoveControlJSBuilder
public "tick"(tick: $Consumer$$Type<$Mob$$Type>): $MoveControlJSBuilder
set "hasWanted"(value: $Function$$Type<$Mob$$Type, any>)
set "isWalkable"(value: $Function$$Type<$ContextUtils$IsWalkableContext$$Type, any>)
set "rotlerp"(value: $Function$$Type<$ContextUtils$RotLerpContext$$Type, any>)
set "speedModifier"(value: $Function$$Type<$Mob$$Type, any>)
set "strafe"(value: $Consumer$$Type<$ContextUtils$StrafeContext$$Type>)
set "wantedPosition"(value: $Consumer$$Type<$ContextUtils$SetWantedPositionContext$$Type>)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.TridentJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$CollidingProjectileEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CollidingProjectileEntityContext"
import { $TridentEntityJS, $TridentEntityJS$$Type } from "net.liopyu.entityjs.entities.nonliving.vanilla.TridentEntityJS"
import { $ContextUtils$ProjectileEntityHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ProjectileEntityHitContext"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $TridentItemBuilder$$Type } from "net.liopyu.entityjs.item.TridentItemBuilder"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $DamageSource$$Type } from "net.minecraft.world.damagesource.DamageSource"
import { $ContextUtils$ProjectileBlockHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ProjectileBlockHitContext"
import { $BaseEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"

export class $TridentJSBuilder extends $BaseEntityBuilder<$TridentEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets a function to determine if the projectile entity can hit a specific entity.
 * 
 * @param canHitEntity The predicate to check if the arrow can hit the entity.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.canHitEntity(entity -> {
 *     // Custom logic to determine if the projectile can hit the specified entity
 *     // Return true if the arrow can hit, false otherwise.
 * });
 * ```
 */
public "canHitEntity"(function_: $Function$$Type<$Entity$$Type, any>): $TridentJSBuilder
public "createObject"(): $EntityType<$TridentEntityJS>
/** Creates the arrow item for this entity type */
public "item"(item: $Consumer$$Type<$TridentItemBuilder$$Type>): $TridentJSBuilder
/** Indicates that no projectile item should be created for this entity type */
public "noItem"(): $TridentJSBuilder
/**
 * Sets a callback function to be executed when the projectile
 * collides with an entity.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.onEntityCollision(context => {
 *     const { entity, target } = context
 *     console.log(entity)
 * });
 * ```
 */
public "onEntityCollision"(consumer: $Consumer$$Type<$ContextUtils$CollidingProjectileEntityContext$$Type>): $TridentJSBuilder
/**
 * Sets a callback function to be executed when the projectile hits a block.
 * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
 * representing the context of the projectile's interaction with a specific block.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.onHitBlock(context -> {
 *     // Custom logic to handle the projectile hitting a block.
 *     // Access information about the block and projectile using the provided context.
 * });
 * ```
 */
public "onHitBlock"(consumer: $Consumer$$Type<$ContextUtils$ProjectileBlockHitContext$$Type>): $TridentJSBuilder
/**
 * Sets a callback function to be executed when the projectile hits an entity.
 * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
 * representing the context of the projectile's interaction with a specific entity.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.onHitEntity(context -> {
 *     // Custom logic to handle the projectile hitting an entity.
 *     // Access information about the entity and projectile using the provided context.
 * });
 * ```
 */
public "onHitEntity"(consumer: $Consumer$$Type<$ContextUtils$ProjectileEntityHitContext$$Type>): $TridentJSBuilder
/**
 * @param alwaysThunder A boolean value determining if the trident always causes thunder on hit, regardless of weather.
 * 
 *     Example usage:
 *     ```javascript
 *     tridentBuilder.setAlwaysThunder(true);
 *     ```
 */
public "setAlwaysThunder"(alwaysThunder: boolean): $TridentJSBuilder
/** Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior. */
public "setCanShootFromDispenser"(canShootFromDispenser: boolean): $TridentJSBuilder
/**
 * @param damageSource The source of damage caused by the trident.
 * 
 *     Example usage:
 *     ```javascript
 *     tridentBuilder.setDamageSource(DamageSource.thrownProjectile);
 *     ```
 */
public "setDamageSource"(damageSource: $DamageSource$$Type): $TridentJSBuilder
/**
 * @param defaultHitGroundSoundEvent The sound event to be played when the trident hits the ground by default.
 * 
 *     Example usage:
 *     ```javascript
 *     tridentBuilder.setDefaultHitGroundSoundEvent(SoundEvents.GENERIC_HIT);
 *     ```
 */
public "setDefaultHitGroundSoundEvent"(defaultHitGroundSoundEvent: $SoundEvent$$Type): $TridentJSBuilder
/**
 * @param defaultTridentHitSound The sound event to be played when the trident hits an entity by default.
 * 
 *     Example usage:
 *     ```javascript
 *     tridentBuilder.setDefaultTridentHitSound(SoundEvents.TRIDENT_HIT);
 *     ```
 */
public "setDefaultTridentHitSound"(defaultTridentHitSound: $SoundEvent$$Type): $TridentJSBuilder
/**
 * @param isChanneling A function that determines whether the trident entity has the channeling enchantment.
 * 
 *     Example usage:
 *     ```javascript
 *     tridentBuilder.setIsChanneling(tridentEntity => {
 *         return false;
 *     });
 *     ```
 */
public "setIsChanneling"(isChanneling: $Function$$Type<$TridentEntityJS$$Type, any>): $TridentJSBuilder
/**
 * @param thunderHitSound The sound event to be played when the trident hits an entity during a thunderstorm.
 * 
 *     Example usage:
 *     ```javascript
 *     tridentBuilder.setThunderHitSound(SoundEvents.THUNDER);
 *     ```
 */
public "setThunderHitSound"(thunderHitSound: $SoundEvent$$Type): $TridentJSBuilder
get "canShootFromDispenser"(): boolean
set "canShootFromDispenser"(value: boolean)
set "alwaysThunder"(value: boolean)
set "damageSource"(value: $DamageSource$$Type)
set "defaultHitGroundSoundEvent"(value: $SoundEvent$$Type)
set "defaultTridentHitSound"(value: $SoundEvent$$Type)
set "isChanneling"(value: $Function$$Type<$TridentEntityJS$$Type, any>)
set "thunderHitSound"(value: $SoundEvent$$Type)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$KeyFrameEventJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $AnimationController } from "software.bernie.geckolib.core.animation.AnimationController"
import { $KeyFrameData } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

export class $BaseEntityBuilder$KeyFrameEventJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL), B extends $KeyFrameData = $KeyFrameData> {
/** The current tick of the animation. */
readonly "animationTick": double
/** The controller handling this animation. */
readonly "controller": $AnimationController<E>
/** The entity this animation is being applied to. */
readonly "entity": E
/** The keyframe data containing extra information about the instruction. */
readonly "keyframeData": B

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.BlazeJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $BlazeEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.BlazeEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $BlazeJSBuilder extends $PathfinderMobBuilder<$BlazeEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $BlazeJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.SkeletonJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $EntityType$$Type } from "net.minecraft.world.entity.EntityType"
import { $SkeletonEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.SkeletonEntityJS"
import { $ItemStack$$Type } from "net.minecraft.world.item.ItemStack"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Function$$Type } from "java.util.function.Function"

export class $SkeletonJSBuilder extends $PathfinderMobBuilder<$SkeletonEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param canConvert Sets whether the mob should convert while freezing to another mob
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.canConvert(false);
 * ```
 */
public "canConvert"(canConvert: boolean): $SkeletonJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $SkeletonJSBuilder
/**
 * @param isSunBurnTick Sets whether the mob should burn in daylight
 * 
 * Example usage:
 * ```javascript
 * builder.isSunBurnTick(entity => {
 *     return false
 * });
 * ```
 */
public "isSunBurnTick"(isSunBurnTick: $Function$$Type<$LivingEntity$$Type, any>): $SkeletonJSBuilder
/**
 * @param setArrow Sets the arrow entity to be fired.
 * Defaults to "minecraft:arrow".
 * 
 * Example usage:
 * ```javascript
 * builder.setArrow("minecraft:arrow");
 * ```
 */
public "setArrow"(setArrow: $ItemStack$$Type): $SkeletonJSBuilder
/**
 * @param setConversionType Sets what mob the entity should convert to after freezing. Must be a Mob.
 * Defaults to "minecraft:stray".
 * 
 * Example usage:
 * ```javascript
 * builder.setConversionType("minecraft:stray");
 * ```
 */
public "setConversionType"(conversionType: $EntityType$$Type<$Mob$$Type>): $SkeletonJSBuilder
/**
 * @param setShootSound Sets the mobs shooting sound
 * 
 * Example usage:
 * ```javascript
 * builder.setShootSound("entity.skeleton.shoot");
 * ```
 */
public "setShootSound"(shootSound: $SoundEvent$$Type): $SkeletonJSBuilder
set "arrow"(value: $ItemStack$$Type)
set "conversionType"(value: $EntityType$$Type<$Mob$$Type>)
set "shootSound"(value: $SoundEvent$$Type)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $ContextUtils$NLRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$NLRenderContext"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$EntitySqrDistanceContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntitySqrDistanceContext"
import { $BaseEntityBuilder$IAnimationPredicateJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$IAnimationPredicateJS"
import { $Function$$Type } from "java.util.function.Function"
import { $ContextUtils$EMayInteractContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EMayInteractContext"
import { $ContextUtils$LerpToContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LerpToContext"
import { $ContextUtils$ScaleModelRenderContextNL$$Type } from "net.liopyu.entityjs.util.ContextUtils$ScaleModelRenderContextNL"
import { $ContextUtils$EDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EDamageContext"
import { $ContextUtils$EntityPlayerContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityPlayerContext"
import { $ContextUtils$PositionRiderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PositionRiderContext"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"
import { $ContextUtils$EEntityFallDamageContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EEntityFallDamageContext"
import { $ContextUtils$EThunderHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EThunderHitContext"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $ContextUtils$ECollidingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECollidingEntityContext"
import { $BaseEntityBuilder$IParticleListenerJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$IParticleListenerJS"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $ContextUtils$MovementContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$MovementContext"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $NLGeoLayerJSBuilder, $NLGeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.nonliving.model.NLGeoLayerJSBuilder"
import { $BaseEntityBuilder$ICustomInstructionListenerJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ICustomInstructionListenerJS"
import { $ContextUtils$EPassengerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EPassengerEntityContext"
import { $BaseEntityBuilder$ISoundListenerJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ISoundListenerJS"
import { $ContextUtils$ECanTrampleContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ECanTrampleContext"

export class $BaseEntityBuilder<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $BuilderBase<$EntityType<T>> {
readonly "glowingLayerList": $List<$NLGeoLayerJSBuilder<T>>
readonly "layerList": $List<$NLGeoLayerJSBuilder<T>>
static readonly "thisList": $List<$BaseEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

/**
 * Adds an animation controller to the entity with the specified parameters.
 * 
 * @param name The name of the animation controller.
 * @param translationTicksLength The length of translation ticks for the animation.
 * @param predicate The animation predicate defining the conditions for the animation to be played.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.addAnimationController('exampleController', 5, event => {
 *     // Define conditions for the animation to be played based on the entity.
 *     if (event.entity.hurtTime > 0) {
 *         event.thenLoop('spawn');
 *     } else {
 *         event.thenPlayAndHold('idle');
 *     }
 *     return true; // Some boolean condition indicating if the animation should be played;
 * });
 * ```
 */
public "addAnimationController"(name: string, translationTicksLength: integer, predicate: $BaseEntityBuilder$IAnimationPredicateJS$$Type<T>): $BaseEntityBuilder<T>
/**
 * Adds a new AnimationController to the entity, with the ability to add event listeners
 * 
 * @param name - The name of the controller
 * @param translationTicksLength - How many ticks it takes to transition between different animations
 * @param predicate - The predicate for the controller, determines if an animation should continue or not
 * @param soundListener - A sound listener, used to execute actions when the json requests a sound to play. May be null
 * @param particleListener - A particle listener, used to execute actions when the json requests a particle. May be null
 * @param instructionListener - A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
 */
public "addKeyAnimationController"(name: string, translationTicksLength: integer, predicate: $BaseEntityBuilder$IAnimationPredicateJS$$Type<T>, soundListener: $BaseEntityBuilder$ISoundListenerJS$$Type<T>, particleListener: $BaseEntityBuilder$IParticleListenerJS$$Type<T>, instructionListener: $BaseEntityBuilder$ICustomInstructionListenerJS$$Type<T>): $BaseEntityBuilder<T>
/**
 * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
 * 
 * @param name - The name of the controller
 * @param translationTicksLength - How many ticks it takes to transition between different animations
 * @param triggerableAnimationID - The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
 * @param triggerableAnimationName - The name of the animation defined in the animations.json
 * @param loopType - The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
 */
public "addTriggerableAnimationController"(name: string, translationTicksLength: integer, triggerableAnimationID: string, triggerableAnimationName: string, loopType: string): $BaseEntityBuilder<T>
/**
 * Sets a function to determine the animation resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the animations based on information about the entity.
 * The default behavior returns <namespace>:animations/<path>.animation.json.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.animationResource(entity => {
 *     // Define logic to determine the animation resource for the entity
 *     // Use information about the entity provided by the context.
 *     //return some ResourceLocation representing the animation resource;
 *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
 * });
 * ```
 */
public "animationResource"(function_: $Function$$Type<T, any>): $BaseEntityBuilder<T>
/**
 * Sets a function to determine the block speed factor of the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose block speed factor is being determined.
 * It returns a Float representing the block speed factor.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.blockSpeedFactor(entity => {
 *     // Define logic to calculate and return the block speed factor for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the block speed factor;
 * });
 * ```
 */
public "blockSpeedFactor"(callback: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a predicate to determine if a passenger can be added to the entity.
 * 
 * @param predicate The predicate to check if a passenger can be added.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canAddPassenger(context => {
 *     // Custom logic to determine if a passenger can be added to the entity
 *     return true;
 * });
 * ```
 */
public "canAddPassenger"(predicate: $Function$$Type<$ContextUtils$EPassengerEntityContext$$Type, any>): $BaseEntityBuilder<T>
/**
 * Determines if the entity's hitbox collides with other entities the same as a solic block.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.canBeCollidedWith(entity => {
 *         return true
 *     });
 *     ```
 */
public "canBeCollidedWith"(canBeCollidedWith: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can change dimensions.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may attempt to change dimensions.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canChangeDimensions(entity => {
 *     // Define the conditions for the entity to be able to change dimensions
 *     // Use information about the Entity provided by the context.
 *     return false // Some boolean condition indicating if the entity can change dimensions;
 * });
 * ```
 */
public "canChangeDimensions"(supplier: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Function determining if the entity may collide with another entity
 * using the ContextUtils.CollidingEntityContext which has this entity and the
 * one colliding with this entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canCollideWith(context => {
 *     return true //Some Boolean value determining whether the entity may collide with another
 * });
 * ```
 */
public "canCollideWith"(canCollideWith: $Function$$Type<$ContextUtils$ECollidingEntityContext$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can undergo freezing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be subjected to freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canFreeze(entity => {
 *     // Define the conditions for the entity to be able to freeze
 *     // Use information about the Entity provided by the context.
 *     return true //someBoolean;
 * });
 * ```
 */
public "canFreeze"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets whether the entity can spawn far from the player.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canSpawnFarFromPlayer(true);
 * ```
 */
public "canSpawnFarFromPlayer"(canSpawnFar: boolean): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity can trample or step on something.
 * The provided Predicate accepts a {@link ContextUtils.CanTrampleContext} parameter,
 * representing the context of the potential trampling action, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canTrample(context => {
 *     // Define conditions for the entity to be allowed to trample
 *     // Use information about the CanTrampleContext provided by the context.
 *     return false // Some boolean condition indicating if the entity can trample;
 * });
 * ```
 */
public "canTrample"(predicate: $Function$$Type<$ContextUtils$ECanTrampleContext$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets the client tracking range. Defaults to 5.
 * 
 * @param trackingRange The client tracking range.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.clientTrackingRange(8);
 * ```
 */
public "clientTrackingRange"(trackingRange: integer): $BaseEntityBuilder<T>
public "createObject"(): $EntityType<T>
/**
 * Sets a predicate to determine whether the living entity dampens vibrations.
 * 
 * @param predicate The predicate to determine whether the living entity dampens vibrations.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether the living entity dampens vibrations.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.dampensVibrations(entity => {
 *     // Determine whether the living entity dampens vibrations
 *     // Return true if the entity dampens vibrations, false otherwise
 * });
 * ```
 */
public "dampensVibrations"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets whether the entity is immune to fire damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.fireImmune(true);
 * ```
 */
public "fireImmune"(isFireImmune: boolean): $BaseEntityBuilder<T>
/**
 * Sets the list of block names to which the entity is immune.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
 * ```
 */
public "immuneTo"(...blockNames: string[]): $BaseEntityBuilder<T>
/**
 * Sets whether the entity is attackable or not.
 * 
 * @param isAttackable Boolean value indicating whether the entity is attackable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAttackable(true);
 * ```
 */
public "isAttackable"(b: boolean): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is attackable.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its attackability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isAttackable(entity => {
 *     // Define conditions to check if the entity is attackable
 *     // Use information about the Entity provided by the context.
 *     return // Some boolean condition indicating if the entity is attackable;
 * });
 * ```
 */
public "isAttackable"(predicate: boolean): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is currently glowing.
 * The provided Predicate accepts a {@link Entity} parameter,
 * representing the entity that may be checked for its glowing state.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isCurrentlyGlowing(entity => {
 *     // Define the conditions to check if the entity is currently glowing
 *     // Use information about the Entity provided by the context.
 *     const isGlowing = // Some boolean condition to check if the entity is glowing;
 *     return isGlowing;
 * });
 * ```
 */
public "isCurrentlyGlowing"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a function to determine whether the entity is currently flapping.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose flapping status is being determined.
 * It returns a Boolean indicating whether the entity is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFlapping(entity => {
 *     // Define logic to determine whether the entity is currently flapping
 *     // Use information about the Entity provided by the context.
 *     return // Some Boolean value indicating whether the entity is flapping;
 * });
 * ```
 */
public "isFlapping"(b: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Defines in what condition the entity will start freezing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isFreezing(entity => {
 *     return true;
 * });
 * ```
 */
public "isFreezing"(isFreezing: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity is invulnerable to a specific type of damage.
 * The provided Predicate accepts a {@link ContextUtils.DamageContext} parameter,
 * representing the context of the damage, and returns a boolean indicating invulnerability.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isInvulnerableTo(context => {
 *     // Define conditions for the entity to be invulnerable to the specific type of damage
 *     // Use information about the DamageContext provided by the context.
 *     return true // Some boolean condition indicating if the entity has invulnerability to the damage type;
 * });
 * ```
 */
public "isInvulnerableTo"(predicate: $Function$$Type<$ContextUtils$EDamageContext$$Type, any>): $BaseEntityBuilder<T>
/**
 * Boolean determining if the part entity is pickable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPickable(true)
 * ```
 */
public "isPickable"(isPickable: boolean): $BaseEntityBuilder<T>
/**
 * Sets whether the entity is pushable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.isPushable(true);
 * ```
 */
public "isPushable"(b: boolean): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hurt by lava.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is affected by lava.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lavaHurt(entity => {
 *     // Define custom logic for handling the entity being hurt by lava
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "lavaHurt"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a consumer to handle lerping (linear interpolation) of the entity's position.
 * 
 * @param lerpTo Consumer accepting a {@link ContextUtils.LerpToContext} parameter,
 *                 providing information and control over the lerping process.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.lerpTo(context => {
 *     // Custom logic for lerping the entity's position
 *     // Access information about the lerping process using the provided context.
 * });
 * ```
 */
public "lerpTo"(consumer: $Consumer$$Type<$ContextUtils$LerpToContext$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a predicate function to determine whether the entity may interact with something.
 * The provided Predicate accepts a {@link ContextUtils.MayInteractContext} parameter,
 * representing the context of the potential interaction, and returns a boolean.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mayInteract(context => {
 *     // Define conditions for the entity to be allowed to interact
 *     // Use information about the MayInteractContext provided by the context.
 *     return false // Some boolean condition indicating if the entity may interact;
 * });
 * ```
 */
public "mayInteract"(predicate: $Function$$Type<$ContextUtils$EMayInteractContext$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets the mob category for the entity.
 * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
 * Defaults to 'misc'.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mobCategory('monster');
 * ```
 */
public "mobCategory"(category: string): $BaseEntityBuilder<T>
/**
 * Sets a function to determine the model resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the model based on information about the entity.
 * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.modelResource(entity => {
 *     // Define logic to determine the model resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
 * });
 * ```
 */
public "modelResource"(function_: $Function$$Type<T, any>): $BaseEntityBuilder<T>
/**
 * Sets the scale of the model.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.modelSize(2,2);
 * ```
 */
public "modelSize"(scaleHeight: float, scaleWidth: float): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a movement action.
 * The provided Consumer accepts a {@link ContextUtils.MovementContext} parameter,
 * representing the context of the entity's movement.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.move(context => {
 *     // Custom logic to handle the entity's movement action
 *     // Access information about the movement using the provided context.
 * });
 * ```
 */
public "move"(consumer: $Consumer$$Type<$ContextUtils$MovementContext$$Type>): $BaseEntityBuilder<T>
/**
 * Adds an extra render layer to the entity.
 * @param newGeoLayer The builder Consumer for the new render layer.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.newGeoLayer(builder => {
 *         builder.textureResource(entity => {
 *             return "kubejs:textures/entity/sasuke.png"
 *         })
 *     });
 *     ```
 */
public "newGeoLayer"(builderConsumer: $Consumer$$Type<$NLGeoLayerJSBuilder$$Type<T>>): $BaseEntityBuilder<T>
/**
 * Adds an extra glowing render layer to the entity.
 * @param newGlowingGeoLayer The builder Consumer for the new render layer.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.newGlowingGeoLayer(builder => {
 *         builder.textureResource(entity => {
 *             return "kubejs:textures/entity/sasuke.png"
 *         })
 *     });
 *     ```
 */
public "newGlowingGeoLayer"(builderConsumer: $Consumer$$Type<$NLGeoLayerJSBuilder$$Type<T>>): $BaseEntityBuilder<T>
/**
 * Sets a function to determine the next step distance for the entity.
 * The provided Function accepts a {@link Entity} parameter,
 * representing the entity whose next step distance is being determined.
 * It returns a Float representing the next step distance.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.nextStep(entity => {
 *     // Define logic to calculate and return the next step distance for the entity
 *     // Use information about the Entity provided by the context.
 *     return // Some Float value representing the next step distance;
 * });
 * ```
 */
public "nextStep"(nextStep: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is added to the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is added to the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onAddedToWorld(entity => {
 *     // Define custom logic for handling when the entity is added to the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onAddedToWorld"(onAddedToWorldCallback: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed on the client side.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed on the client side.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onClientRemoval(entity => {
 *     // Define custom logic for handling the removal of the entity on the client side
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onClientRemoval"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity falls and takes damage.
 * The provided Consumer accepts a {@link ContextUtils.EEntityFallDamageContext} parameter,
 * representing the context of the entity falling and taking fall damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFall(context => {
 *     // Define custom logic for handling when the entity falls and takes damage
 *     // Use information about the EEntityFallDamageContext provided by the context.
 * });
 * ```
 */
public "onFall"(c: $Consumer$$Type<$ContextUtils$EEntityFallDamageContext$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity performs a flap action.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is flapping.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onFlap(entity => {
 *     // Define custom logic for handling the entity's flap action
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onFlap"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is removed from the world.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being removed from the world.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onRemovedFromWorld(entity => {
 *     // Define custom logic for handling the removal of the entity from the world
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onRemovedFromWorld"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity starts sprinting.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has started sprinting.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onSprint(entity => {
 *     // Define custom logic for handling when the entity starts sprinting
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onSprint"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity stops riding.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that has stopped being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.onStopRiding(entity => {
 *     // Define custom logic for handling when the entity stops being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "onStopRiding"(callback: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when a player touches the entity.
 * The provided Consumer accepts a {@link ContextUtils.EntityPlayerContext} parameter,
 * representing the context of the player's interaction with the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.playerTouch(context => {
 *     // Custom logic to handle the player's touch interaction with the entity
 *     // Access information about the interaction using the provided context.
 * });
 * ```
 */
public "playerTouch"(consumer: $Consumer$$Type<$ContextUtils$EntityPlayerContext$$Type>): $BaseEntityBuilder<T>
/**
 * @param positionRider A consumer determining the position of rider/riders.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.positionRider(context => {
 *         const {entity, passenger, moveFunction} = context
 *     });
 *     ```
 */
public "positionRider"(builderConsumer: $Consumer$$Type<$ContextUtils$PositionRiderContext$$Type>): $BaseEntityBuilder<T>
/**
 * Defines logic to render the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.render(context => {
 *     // Define logic to render the entity
 *     context.poseStack.scale(0.5, 0.5, 0.5);
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$NLRenderContext$$Type<T>>): $BaseEntityBuilder<T>
/**
 * Sets the render type for the entity via a function.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
 * ```
 */
public "renderType"(type: $Function$$Type<T, $RenderType>): $BaseEntityBuilder<T>
/**
 * Sets whether to reposition the entity after loading.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.repositionEntityAfterLoad(true);
 * ```
 */
public "repositionEntityAfterLoad"(customRepositionEntityAfterLoad: boolean): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed during each tick when the entity is being ridden.
 * The provided Consumer accepts a {@link Entity} parameter,
 * representing the entity that is being ridden.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.rideTick(entity => {
 *     // Define custom logic for handling each tick when the entity is being ridden
 *     // Use information about the Entity provided by the context.
 * });
 * ```
 */
public "rideTick"(callback: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Determines if the entity should serialize its data. Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.saves(false);
 * ```
 */
public "saves"(shouldSave: boolean): $BaseEntityBuilder<T>
/**
 * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
 *     without affecting core logic such as hitbox sizing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.scaleModelForRender(context => {
 *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
 *     poseStack.scale(0.5, 0.5, 0.5)
 * });
 * ```
 */
public "scaleModelForRender"(scaleModelForRender: $Consumer$$Type<$ContextUtils$ScaleModelRenderContextNL$$Type<T>>): $BaseEntityBuilder<T>
/**
 * Sets the block jump factor for the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setBlockJumpFactor(entity => {
 *     //Set the jump factor for the entity through context
 *     return 1 //some float value;
 * });
 * ```
 */
public "setBlockJumpFactor"(blockJumpFactor: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Boolean determining if the entity's model visually faces the direction it's currently headed.
 * Saves manual implementation of this assumed behavior from the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setFacesTrajectory(false)
 * ```
 */
public "setFacesTrajectory"(facesTrajectory: boolean): $BaseEntityBuilder<T>
/**
 * Sets the minimum fall distance for the entity before taking damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setMaxFallDistance(entity => {
 *     // Define custom logic to determine the maximum fall distance
 *     // Use information about the Entity provided by the context.
 *     return 3;
 * });
 * ```
 */
public "setMaxFallDistance"(maxFallDistance: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets the render type for the entity.
 * 
 * @param type The render type to be set. Acceptable values are:
 *              - "solid
 *              - "cutout"
 *              - "translucent"
 *              - RenderType.SOLID
 *              - RenderType.CUTOUT
 *              - RenderType.TRANSLUCENT
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setRenderType("translucent");
 * ```
 */
public "setRenderType"(type: any): $BaseEntityBuilder<T>
/**
 * Sets whether the entity is summonable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSummonable(true);
 * ```
 */
public "setSummonable"(b: boolean): $BaseEntityBuilder<T>
/**
 * Sets the swim sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSound("minecraft:entity.generic.swim");
 * ```
 */
public "setSwimSound"(sound: any): $BaseEntityBuilder<T>
/**
 * Sets the swim splash sound for the entity using either a string representation or a ResourceLocation object.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSwimSplashSound("minecraft:entity.generic.splash");
 * ```
 */
public "setSwimSplashSound"(sound: any): $BaseEntityBuilder<T>
/**
 * Sets a function to determine whether the entity should render at a squared distance.
 * 
 * @param shouldRenderAtSqrDistance Function accepting a {@link ContextUtils.EntitySqrDistanceContext} parameter,
 *                  defining the conditions under which the entity should render.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.shouldRenderAtSqrDistance(context => {
 *     // Custom logic to determine whether the entity should render
 *     // Access information about the distance using the provided context.
 *     return true;
 * });
 * ```
 */
public "shouldRenderAtSqrDistance"(func: $Function$$Type<$ContextUtils$EntitySqrDistanceContext$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets a predicate to determine whether to show the vehicle health for the living entity.
 * 
 * @param predicate The predicate to determine whether to show the vehicle health.
 * 
 * The predicate should take a Entity as a parameter and return a boolean value indicating whether to show the vehicle health.
 * 
 * Example usage:
 * ```javascript
 * baseEntityBuilder.showVehicleHealth(entity => {
 *     // Determine whether to show the vehicle health for the living entity
 *     // Return true to show the vehicle health, false otherwise
 * });
 * ```
 */
public "showVehicleHealth"(predicate: $Function$$Type<$Entity$$Type, any>): $BaseEntityBuilder<T>
/**
 * Sets the hit box of the entity type.
 * 
 * @param width The width of the entity. Defaults to 0.5.
 * @param height The height of the entity. Defaults to 0.5.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.sized(1.0f, 1.5f);
 * ```
 */
public "sized"(width: float, height: float): $BaseEntityBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureResource"(function_: $Function$$Type<T, any>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed when the entity is hit by thunder.
 * The provided Consumer accepts a {@link ContextUtils.ThunderHitContext} parameter,
 * representing the context of the entity being hit by thunder.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.thunderHit(context => {
 *     // Define custom logic for handling the entity being hit by thunder
 *     // Use information about the ThunderHitContext provided by the context.
 * });
 * ```
 */
public "thunderHit"(consumer: $Consumer$$Type<$ContextUtils$EThunderHitContext$$Type>): $BaseEntityBuilder<T>
/**
 * Sets a callback function to be executed on each tick for the entity.
 * 
 * @param tick A Consumer accepting a {@link Entity} parameter, defining the behavior to be executed on each tick.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.tick(entity => {
 *     // Custom logic to be executed on each tick of the entity.
 *     // Access information about the entity using the provided parameter.
 * });
 * ```
 */
public "tick"(consumer: $Consumer$$Type<$Entity$$Type>): $BaseEntityBuilder<T>
/**
 * Sets the update interval in ticks of the entity.
 * Defaults to 1 tick.
 * 
 * @param updateInterval The update interval in ticks.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.updateInterval(5);
 * ```
 */
public "updateInterval"(updateInterval: integer): $BaseEntityBuilder<T>
set "blockJumpFactor"(value: $Function$$Type<$Entity$$Type, any>)
set "facesTrajectory"(value: boolean)
set "maxFallDistance"(value: $Function$$Type<$Entity$$Type, any>)
set "summonable"(value: boolean)
set "swimSound"(value: any)
set "swimSplashSound"(value: any)
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CamelJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$PlayerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext"
import { $CamelEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.CamelEntityJS"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $CamelJSBuilder extends $AnimalEntityBuilder<$CamelEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultBehaviourGoals Sets whether the mob should inherit it's goal behavior from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultBehaviourGoals(false);
 * ```
 */
public "defaultBehaviourGoals"(defaultBehaviourGoals: boolean): $CamelJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $CamelJSBuilder
/**
 * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
 * This is fired after the entity is tamed and all tame logic has already taken place.
 * Useful if you don't want to mess with the UUID logic in the tameOverride method.
 * 
 * @param onTamed A Consumer that fires when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * builder.onTamed(entity => {
 *     // Do stuff when the entity is tamed.
 * });
 * ```
 */
public "onTamed"(onTamed: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $CamelJSBuilder
/**
 * Sets a Consumer invoked after the entity is tamed
 * and replaces the logic used to set the UUID of the owner
 * with the parameter of ContextUtils.PlayerEntityContext callback
 * 
 * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * builder.tameOverride(context => {
 *     const {entity,player} = context
 *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
 *     entity.setOwnerUUID(player.getUUID());
 * });
 * ```
 */
public "tameOverride"(tameOverride: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $CamelJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ParticleKeyFrameEventJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $ParticleKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.ParticleKeyframeEvent"
import { $BaseEntityBuilder$KeyFrameEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$KeyFrameEventJS"
import { $ParticleKeyframeData } from "software.bernie.geckolib.core.keyframe.event.data.ParticleKeyframeData"

export class $BaseEntityBuilder$ParticleKeyFrameEventJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $BaseEntityBuilder$KeyFrameEventJS<E, $ParticleKeyframeData> {
/** Gets the effect id given by the Keyframe instruction from the animation.json */
readonly "effect": string
/** Gets the locator string given by the Keyframe instruction from the animation.json */
readonly "locator": string
/** Gets the script string given by the Keyframe instruction from the animation.json */
readonly "script": string

constructor(parent: $ParticleKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.BatJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.MobBuilder"
import { $BatEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.BatEntityJS"

export class $BatJSBuilder extends $MobBuilder<$BatEntityJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$IAnimationPredicateJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BaseLivingEntityBuilder$AnimationEventJS$$Type } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$AnimationEventJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $AnimationController$AnimationStateHandler } from "software.bernie.geckolib.core.animation.AnimationController$AnimationStateHandler"

export interface $BaseLivingEntityBuilder$IAnimationPredicateJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
/**
 * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
 * 
 * @param event - The AnimationEvent, provides values that can be used to determine if the animation should continue or not
 */
"test"(event: $BaseLivingEntityBuilder$AnimationEventJS$$Type<E>): boolean
"toGecko"(): $AnimationController$AnimationStateHandler<E>
}

export namespace $BaseLivingEntityBuilder$IAnimationPredicateJS {
const probejs$$marker: never
}
export abstract class $BaseLivingEntityBuilder$IAnimationPredicateJS$$Static<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> implements $BaseLivingEntityBuilder$IAnimationPredicateJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.PiglinJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $PiglinEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.PiglinEntityJS"
import { $ContextUtils$EntityServerLevelContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityServerLevelContext"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import { $Function$$Type } from "java.util.function.Function"

export class $PiglinJSBuilder extends $PathfinderMobBuilder<$PiglinEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $PiglinJSBuilder
/**
 * Sets a consumer responsible for spawning an entity after the mob has converted.
 * 
 * @param finishConversion A Function accepting an entity parameter
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.finishConversion(entity => {
 *     //Convert to a ghast instead of a zombified piglin when in the overworld
 *     let EntityType = Java.loadClass("net.minecraft.world.entity.EntityType");
 *     entity.convertTo(EntityType.GHAST, true);
 * });
 * ```
 */
public "finishConversion"(finishConversion: $Consumer$$Type<$ContextUtils$EntityServerLevelContext$$Type>): $PiglinJSBuilder
/**
 * Sets a function to determine if the entity is converting.
 * 
 * @param isConverting A Function accepting an entity parameter
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.isConverting(entity => {
 *     return entity.age > 500;
 * });
 * ```
 */
public "isConverting"(isConverting: $Function$$Type<$LivingEntity$$Type, any>): $PiglinJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.AxolotlJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $AxolotlEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.AxolotlEntityJS"
import { $Function$$Type } from "java.util.function.Function"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $AxolotlJSBuilder extends $AnimalEntityBuilder<$AxolotlEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param bucketItemStack Function returning the itemstack to receive when bucketed
 * Defaults to Axolotl Bucket
 * Example usage:
 * ```javascript
 * builder.bucketItemStack(entity => {
 *     // Use information about the entity to return an ItemStack.
 *     return Item.of('minecraft:diamond')
 * })
 * ```
 */
public "bucketItemStack"(function_: $Function$$Type<$LivingEntity$$Type, any>): $AxolotlJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.AllayJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $AllayEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.AllayEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $AllayJSBuilder extends $PathfinderMobBuilder<$AllayEntityJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $MobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.MobBuilder"
import { $PathfinderMob } from "net.minecraft.world.entity.PathfinderMob"
import { $ContextUtils$EntityBlockPosLevelContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityBlockPosLevelContext"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"
import { $Function$$Type } from "java.util.function.Function"

export class $PathfinderMobBuilder<T extends ($PathfinderMob & $IAnimatableJS) = ($PathfinderMob & $IAnimatableJS)> extends $MobBuilder<T> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets the follow leash speed for the entity.
 * 
 * @param speed The follow leash speed.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.followLeashSpeed(1.5);
 * ```
 */
public "followLeashSpeed"(speed: double): $PathfinderMobBuilder<T>
/**
 * Sets the function to determine whether the entity should stay close to its leash holder.
 * 
 * @param predicate A Function accepting a {@link Mob} parameter,
 *                  defining the condition for the entity to stay close to its leash holder.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.shouldStayCloseToLeashHolder(entity => {
 *     // Custom logic to determine whether the entity should stay close to its leash holder.
 *     return true;
 * });
 * ```
 */
public "shouldStayCloseToLeashHolder"(predicate: $Function$$Type<$Mob$$Type, any>): $PathfinderMobBuilder<T>
/**
 * Sets the walk target value function for the entity.
 * 
 * @param function A Function accepting a {@link ContextUtils.EntityBlockPosLevelContext} parameter,
 *                 defining the walk target value based on the entity's interaction with a specific block.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.walkTargetValue(context => {
 *     // Custom logic to calculate the walk target value based on the provided context.
 *     // Access information about the block position and level using the provided context.
 *     return 10;
 * });
 * ```
 */
public "walkTargetValue"(function_: $Function$$Type<$ContextUtils$EntityBlockPosLevelContext$$Type, any>): $PathfinderMobBuilder<T>
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.ChickenJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $ChickenEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.ChickenEntityJS"
import { $Function$$Type } from "java.util.function.Function"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"

export class $ChickenJSBuilder extends $AnimalEntityBuilder<$ChickenEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $ChickenJSBuilder
/**
 * @param eggTime Sets a function to determine the laying egg time of the entity
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.eggTime(entity => {
 *     return 100 // returning 100 here will result in the entity laying an egg every 100 ticks
 * });
 * ```
 */
public "eggTime"(eggTime: $Function$$Type<$LivingEntity$$Type, any>): $ChickenJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CreeperJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $CreeperEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.CreeperEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $CreeperJSBuilder extends $PathfinderMobBuilder<$CreeperEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $CreeperJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.IronGolemJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $IronGolemEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.IronGolemEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $IronGolemJSBuilder extends $PathfinderMobBuilder<$IronGolemEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $IronGolemJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$SoundKeyFrameEventJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $SoundKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.SoundKeyframeEvent"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder$KeyFrameEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$KeyFrameEventJS"
import { $SoundKeyframeData } from "software.bernie.geckolib.core.keyframe.event.data.SoundKeyframeData"

export class $BaseLivingEntityBuilder$SoundKeyFrameEventJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> extends $BaseLivingEntityBuilder$KeyFrameEventJS<E, $SoundKeyframeData> {
/** Gets the sound id given by the Keyframe instruction from the animation. json */
readonly "sound": string

constructor(parent: $SoundKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$ScaleModelRenderContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ScaleModelRenderContext"
import { $ContextUtils$RenderContextCustom$$Type } from "net.liopyu.entityjs.util.ContextUtils$RenderContextCustom"
import { $RenderType } from "net.minecraft.client.renderer.RenderType"
import { $Function$$Type } from "java.util.function.Function"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $CustomEntityJSBuilder$ICustomInstructionListenerJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ICustomInstructionListenerJS"
import { $EntityType$EntityFactory } from "net.minecraft.world.entity.EntityType$EntityFactory"
import { $CustomEntityJSBuilder$IAnimationPredicateJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$IAnimationPredicateJS"
import { $CustomGeoLayerJSBuilder, $CustomGeoLayerJSBuilder$$Type } from "net.liopyu.entityjs.client.living.model.CustomGeoLayerJSBuilder"
import { $CustomEntityJSBuilder$ISoundListenerJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ISoundListenerJS"
import { $CustomEntityJSBuilder$IParticleListenerJS$$Type } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$IParticleListenerJS"
import { $BuilderBase } from "dev.latvian.mods.kubejs.registry.BuilderBase"

export class $CustomEntityJSBuilder extends $BuilderBase<$EntityType<any>> {
readonly "glowingLayerList": $List<$CustomGeoLayerJSBuilder<$LivingEntity>>
readonly "layerList": $List<$CustomGeoLayerJSBuilder<$LivingEntity>>
static readonly "thisList": $List<$CustomEntityJSBuilder>

constructor(i: $ResourceLocation$$Type)

/**
 * Adds an animation controller to the entity with the specified parameters.
 * 
 * @param name The name of the animation controller.
 * @param translationTicksLength The length of translation ticks for the animation.
 * @param predicate The animation predicate defining the conditions for the animation to be played.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.addAnimationController('exampleController', 5, event => {
 *     // Define conditions for the animation to be played based on the entity.
 *     if (event.entity.hurtTime > 0) {
 *         event.thenLoop('spawn');
 *     } else {
 *         event.thenPlayAndHold('idle');
 *     }
 *     return true; // Some boolean condition indicating if the animation should be played;
 * });
 * ```
 */
public "addAnimationController"(name: string, translationTicksLength: integer, predicate: $CustomEntityJSBuilder$IAnimationPredicateJS$$Type<any>): $CustomEntityJSBuilder
/**
 * Adds a new AnimationController to the entity, with the ability to add event listeners
 * 
 * @param name - The name of the controller
 * @param translationTicksLength - How many ticks it takes to transition between different animations
 * @param predicate - The predicate for the controller, determines if an animation should continue or not
 * @param soundListener - A sound listener, used to execute actions when the json requests a sound to play. May be null
 * @param particleListener - A particle listener, used to execute actions when the json requests a particle. May be null
 * @param instructionListener - A custom instruction listener, used to execute actions based on arbitrary instructions provided by the json. May be null
 */
public "addKeyAnimationController"(name: string, translationTicksLength: integer, predicate: $CustomEntityJSBuilder$IAnimationPredicateJS$$Type, soundListener: $CustomEntityJSBuilder$ISoundListenerJS$$Type, particleListener: $CustomEntityJSBuilder$IParticleListenerJS$$Type, instructionListener: $CustomEntityJSBuilder$ICustomInstructionListenerJS$$Type): $CustomEntityJSBuilder
/**
 * Adds a triggerable AnimationController to the entity callable off the entity's methods anywhere.
 * 
 * @param name - The name of the controller
 * @param translationTicksLength - How many ticks it takes to transition between different animations
 * @param triggerableAnimationID - The unique identifier of the triggerable animation(sets it apart from other triggerable animations)
 * @param triggerableAnimationName - The name of the animation defined in the animations.json
 * @param loopType - The loop type for the triggerable animation, either 'LOOP' or 'PLAY_ONCE' or 'HOLD_ON_LAST_FRAME' or 'DEFAULT'
 */
public "addTriggerableAnimationController"(name: string, translationTicksLength: integer, triggerableAnimationID: string, triggerableAnimationName: string, loopType: string): $CustomEntityJSBuilder
/**
 * Sets a function to determine the animation resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the animations based on information about the entity.
 * The default behavior returns <namespace>:animations/<path>.animation.json.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.animationResource(entity => {
 *     // Define logic to determine the animation resource for the entity
 *     // Use information about the entity provided by the context.
 *     //return some ResourceLocation representing the animation resource;
 *     return "kubejs:animations/entity/wyrm.animation.json" // Some ResourceLocation representing the animation resource;
 * });
 * ```
 */
public "animationResource"(function_: $Function$$Type<$LivingEntity$$Type, any>): $CustomEntityJSBuilder
/**
 * Sets whether the entity can spawn far from the player.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.canSpawnFarFromPlayer(true);
 * ```
 */
public "canSpawnFarFromPlayer"(canSpawnFar: boolean): $CustomEntityJSBuilder
/**
 * Sets the client tracking range. Defaults to 5.
 * 
 * @param trackingRange The client tracking range.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.clientTrackingRange(8);
 * ```
 */
public "clientTrackingRange"(trackingRange: integer): $CustomEntityJSBuilder
public "createObject"(): $EntityType<any>
/**
 * Boolean determining if the entity will turn sideways on death.
 * Defaults to true.
 * Example usage:
 * ```javascript
 * entityBuilder.defaultDeathPose(false);
 * ```
 */
public "defaultDeathPose"(defaultDeathPose: boolean): $CustomEntityJSBuilder
public "factory"(): $EntityType$EntityFactory<any>
/**
 * Sets whether the entity is immune to fire damage.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.fireImmune(true);
 * ```
 */
public "fireImmune"(isFireImmune: boolean): $CustomEntityJSBuilder
/**
 * Sets the list of block names to which the entity is immune.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.immuneTo("minecraft:stone", "minecraft:dirt");
 * ```
 */
public "immuneTo"(...blockNames: string[]): $CustomEntityJSBuilder
/**
 * Sets the mob category for the entity.
 * Available options: 'monster', 'creature', 'ambient', 'water_creature', 'misc'.
 * Defaults to 'misc'.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.mobCategory('monster');
 * ```
 */
public "mobCategory"(category: string): $CustomEntityJSBuilder
/**
 * Sets a function to determine the model resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the model based on information about the entity.
 * The default behavior returns <namespace>:geo/entity/<path>.geo.json.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.modelResource(entity => {
 *     // Define logic to determine the model resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:geo/entity/wyrm.geo.json" // Some ResourceLocation representing the model resource;
 * });
 * ```
 */
public "modelResource"(function_: $Function$$Type<$LivingEntity$$Type, any>): $CustomEntityJSBuilder
/**
 * Sets the scale of the model.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.modelSize(2,2);
 * ```
 */
public "modelSize"(scaleHeight: float, scaleWidth: float): $CustomEntityJSBuilder
/**
 * Adds an extra render layer to the mob.
 * @param newGeoLayer The builder Consumer for the new render layer.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.newGeoLayer(builder => {
 *         builder.textureResource(entity => {
 *             return "kubejs:textures/entity/sasuke.png"
 *         })
 *     });
 *     ```
 */
public "newGeoLayer"(builderConsumer: $Consumer$$Type<$CustomGeoLayerJSBuilder$$Type<$LivingEntity$$Type>>): $CustomEntityJSBuilder
/**
 * Adds an extra glowing render layer to the mob.
 * @param newGlowingGeoLayer The builder Consumer for the new render layer.
 * 
 *     Example usage:
 *     ```javascript
 *     entityBuilder.newGlowingGeoLayer(builder => {
 *         builder.textureResource(entity => {
 *             return "kubejs:textures/entity/sasuke.png"
 *         })
 *     });
 *     ```
 */
public "newGlowingGeoLayer"(builderConsumer: $Consumer$$Type<$CustomGeoLayerJSBuilder$$Type<$LivingEntity$$Type>>): $CustomEntityJSBuilder
/**
 * Defines logic to render the entity.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.render(context => {
 *     // Define logic to render the entity
 *     context.poseStack.scale(0.5, 0.5, 0.5);
 * });
 * ```
 */
public "render"(render: $Consumer$$Type<$ContextUtils$RenderContextCustom$$Type<any>>): $CustomEntityJSBuilder
/**
 * Sets the render type for the entity via a function.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.renderType(entity => RenderType.entityCutoutNoCull("kubejs:path/to/texture", outlineEntityBoolean));
 * ```
 */
public "renderType"(type: $Function$$Type<$LivingEntity$$Type, $RenderType>): $CustomEntityJSBuilder
/**
 * Determines if the entity should serialize its data. Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.saves(false);
 * ```
 */
public "saves"(shouldSave: boolean): $CustomEntityJSBuilder
/**
 * @param scaleModelForRender A Consumer to determing logic for model scaling and rendering
 *     without affecting core logic such as hitbox sizing.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.scaleModelForRender(context => {
 *     const { entity, widthScale, heightScale, poseStack, model, isReRender, partialTick, packedLight, packedOverlay } = context
 *     poseStack.scale(0.5, 0.5, 0.5)
 * });
 * ```
 */
public "scaleModelForRender"(scaleModelForRender: $Consumer$$Type<$ContextUtils$ScaleModelRenderContext$$Type>): $CustomEntityJSBuilder
/**
 * Sets the render type for the entity.
 * 
 * @param type The render type to be set. Acceptable values are:
 *              - "solid
 *              - "cutout"
 *              - "translucent"
 *              - RenderType.SOLID
 *              - RenderType.CUTOUT
 *              - RenderType.TRANSLUCENT
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setRenderType("translucent");
 * ```
 */
public "setRenderType"(type: any): $CustomEntityJSBuilder
/**
 * Sets whether the entity is summonable.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.setSummonable(true);
 * ```
 */
public "setSummonable"(b: boolean): $CustomEntityJSBuilder
/**
 * Sets the hit box of the entity type.
 * 
 * @param width The width of the entity. Defaults to 0.5.
 * @param height The height of the entity. Defaults to 0.5.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.sized(1.0f, 1.5f);
 * ```
 */
public "sized"(width: float, height: float): $CustomEntityJSBuilder
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureResource"(function_: $Function$$Type<$LivingEntity$$Type, any>): $CustomEntityJSBuilder
/**
 * Sets the update interval in ticks of the entity.
 * Defaults to 1 tick.
 * 
 * @param updateInterval The update interval in ticks.
 * 
 * Example usage:
 * ```javascript
 * entityBuilder.updateInterval(5);
 * ```
 */
public "updateInterval"(updateInterval: integer): $CustomEntityJSBuilder
set "summonable"(value: boolean)
}
}

declare module "net.liopyu.entityjs.builders.misc.JumpControlJSBuilder" {
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Mob$$Type } from "net.minecraft.world.entity.Mob"

export class $JumpControlJSBuilder {
constructor()

public "jump"(jump: $Consumer$$Type<$Mob$$Type>): $JumpControlJSBuilder
public "tick"(tick: $Consumer$$Type<$Mob$$Type>): $JumpControlJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.TameableMobBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.MobBuilder"
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $ContextUtils$EntityItemStackContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$EntityItemStackContext"
import { $ContextUtils$PlayerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext"
import { $Function$$Type } from "java.util.function.Function"
import { $AnimalEntityBuilder } from "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder"
import { $Ingredient$$Type } from "net.minecraft.world.item.crafting.Ingredient"
import { $TamableAnimal } from "net.minecraft.world.entity.TamableAnimal"

export class $TameableMobBuilder<T extends ($TamableAnimal & $IAnimatableJS) = ($TamableAnimal & $IAnimatableJS)> extends $AnimalEntityBuilder<T> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
 * This is fired after the entity is tamed and all tame logic has already taken place.
 * Useful if you don't want to mess with the UUID logic in the tameOverride method.
 * 
 * @param onTamed A Consumer that fires when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.onTamed(entity => {
 *     // Do stuff when the entity is tamed.
 * });
 * ```
 */
public "onTamed"(onTamed: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $MobBuilder<T>
/**
 * Sets a function to determine if the player's current itemstack will tame the mob.
 * 
 * @param tamableFoodPredicate A Function accepting a ContextUtils.EntityItemStackContext parameter
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.tamableFood([
 *     'minecraft:diamond',
 *     'minecraft:wheat'
 * ]);
 * ```
 */
public "tamableFood"(tamableFood: $Ingredient$$Type): $MobBuilder<T>
/**
 * Sets a function to determine if the player's current itemstack will tame the mob.
 * 
 * @param tamableFoodPredicate A Function accepting a ContextUtils.EntityItemStackContext parameter
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.tamableFoodPredicate(context => {
 *     const { entity, item } = context
 *     return item.id == 'minecraft:diamond' // Return true if the player's current itemstack will tame the mob.
 * });
 * ```
 */
public "tamableFoodPredicate"(tamableFoodPredicate: $Function$$Type<$ContextUtils$EntityItemStackContext$$Type, any>): $MobBuilder<T>
/**
 * Sets a Consumer invoked after the entity is tamed
 * and replaces the logic used to set the UUID of the owner
 * with the parameter of ContextUtils.PlayerEntityContext callback
 * 
 * @param tameOverride A Consumer responsible for determining the uuid to set when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * mobBuilder.tameOverride(context => {
 *     const {entity,player} = context
 *     // Mimic the vanilla way of setting the uuid when the entity is tamed.
 *     entity.setOwnerUUID(player.getUUID());
 * });
 * ```
 */
public "tameOverride"(tameOverride: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $MobBuilder<T>
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$KeyFrameEventJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $AnimationController } from "software.bernie.geckolib.core.animation.AnimationController"
import { $KeyFrameData } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

export class $BaseLivingEntityBuilder$KeyFrameEventJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS), B extends $KeyFrameData = $KeyFrameData> {
/** The current tick of the animation. */
readonly "animationTick": double
/** The controller handling this animation. */
readonly "controller": $AnimationController<E>
/** The entity this animation is being applied to. */
readonly "entity": E
/** The keyframe data containing extra information about the instruction. */
readonly "keyframeData": B

}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.MobEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $MobEntityJS } from "net.liopyu.entityjs.entities.living.entityjs.MobEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $MobEntityJSBuilder extends $PathfinderMobBuilder<$MobEntityJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.SlimeJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $MobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.MobBuilder"
import { $SoundEvent$$Type } from "net.minecraft.sounds.SoundEvent"
import { $SlimeEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.SlimeEntityJS"
import { $ParticleType$$Type } from "net.minecraft.core.particles.ParticleType"
import { $ContextUtils$LivingEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$LivingEntityContext"

export class $SlimeJSBuilder extends $MobBuilder<$SlimeEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param dealDamage Overrides the way the slime deals damage
 * 
 * Example usage:
 * ```javascript
 * builder.dealDamage(ctx => {
 * 	const { entity, target } = ctx
 * 	// Determine how the slime deals damage
 * });
 * ```
 */
public "dealDamage"(dealDamage: $Consumer$$Type<$ContextUtils$LivingEntityContext$$Type>): $SlimeJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $SlimeJSBuilder
/**
 * @param setParticleType Sets the particles emitted off the slime
 * Defaults to slime particles
 * 
 * Example usage:
 * ```javascript
 * builder.setParticleType("crit");
 * ```
 */
public "setParticleType"(type: $ParticleType$$Type<any>): $SlimeJSBuilder
/**
 * @param setSquishSound Sets the squish sound
 * 
 * Example usage:
 * ```javascript
 * builder.setSquishSound("block.azalea.hit");
 * ```
 */
public "setSquishSound"(sound: $SoundEvent$$Type): $SlimeJSBuilder
set "particleType"(value: $ParticleType$$Type<any>)
set "squishSound"(value: $SoundEvent$$Type)
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.GuardianJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $GuardianEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.GuardianEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $GuardianJSBuilder extends $PathfinderMobBuilder<$GuardianEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $GuardianJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$CustomInstructionKeyframeEventJS" {
import { $CustomInstructionKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.CustomInstructionKeyframeEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$KeyFrameEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$KeyFrameEventJS"
import { $CustomInstructionKeyframeData } from "software.bernie.geckolib.core.keyframe.event.data.CustomInstructionKeyframeData"

export class $BaseEntityBuilder$CustomInstructionKeyframeEventJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> extends $BaseEntityBuilder$KeyFrameEventJS<E, $CustomInstructionKeyframeData> {
/** A list of all the custom instructions. In Blockbench, each line in the custom instruction box is a separate instruction. */
readonly "instructions": string

constructor(parent: $CustomInstructionKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.WitherJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $WitherEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.WitherEntityJS"
import { $PathfinderMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"

export class $WitherJSBuilder extends $PathfinderMobBuilder<$WitherEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param attackProjectile Sets the projectile shot by the wither.
 * Defaults to a wither skull.
 * 
 * Example usage:
 * ```javascript
 * builder.attackProjectile("minecraft:arrow");
 * ```
 */
public "attackProjectile"(attackProjectile: string): $WitherJSBuilder
/**
 * @param customServerAiStep Sets whether the mob has its default custom server ai step behavior
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.customServerAiStep(false);
 * ```
 */
public "customServerAiStep"(customServerAiStep: boolean): $WitherJSBuilder
/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $WitherJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ArrowEntityJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ArrowEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.entityjs.ArrowEntityBuilder"
import { $ArrowItemBuilder$$Type } from "net.liopyu.entityjs.item.ArrowItemBuilder"
import { $ArrowEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.ArrowEntityJS"

export class $ArrowEntityJSBuilder extends $ArrowEntityBuilder<$ArrowEntityJS> {
constructor(i: $ResourceLocation$$Type)

/** Creates the arrow item for this entity type */
public "item"(item: $Consumer$$Type<$ArrowItemBuilder$$Type>): $ArrowEntityJSBuilder
/** Indicates that no arrow item should be created for this entity type */
public "noItem"(): $ArrowEntityJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$CustomInstructionKeyframeEventJS" {
import { $CustomInstructionKeyframeEvent$$Type } from "software.bernie.geckolib.core.keyframe.event.CustomInstructionKeyframeEvent"
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

export class $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
/** A list of all the custom instructions. In blockbench, each line in the custom instruction box is a separate instruction. */
readonly "instructions": string

constructor(parent: $CustomInstructionKeyframeEvent$$Type<E>)

}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ICustomInstructionListenerJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$CustomInstructionKeyframeEventJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$CustomInstructionKeyframeEventJS"

export interface $BaseEntityBuilder$ICustomInstructionListenerJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> {
"executeInstruction"(event: $BaseEntityBuilder$CustomInstructionKeyframeEventJS$$Type<E>): void
}

export namespace $BaseEntityBuilder$ICustomInstructionListenerJS {
const probejs$$marker: never
}
export abstract class $BaseEntityBuilder$ICustomInstructionListenerJS$$Static<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> implements $BaseEntityBuilder$ICustomInstructionListenerJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileAnimatableJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $ProjectileItemBuilder$$Type } from "net.liopyu.entityjs.item.ProjectileItemBuilder"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$CollidingProjectileEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CollidingProjectileEntityContext"
import { $ContextUtils$ProjectileBlockHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ProjectileBlockHitContext"
import { $BaseEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder"
import { $ContextUtils$ProjectileEntityHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ProjectileEntityHitContext"
import { $Function$$Type } from "java.util.function.Function"
import { $ProjectileAnimatableJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.ProjectileAnimatableJS"

export class $ProjectileAnimatableJSBuilder extends $BaseEntityBuilder<$ProjectileAnimatableJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * Sets a function to determine if the projectile entity can hit a specific entity.
 * 
 * @param canHitEntity The predicate to check if the arrow can hit the entity.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.canHitEntity(entity -> {
 *     // Custom logic to determine if the projectile can hit the specified entity
 *     // Return true if the arrow can hit, false otherwise.
 * });
 * ```
 */
public "canHitEntity"(function_: $Function$$Type<$Entity$$Type, any>): $ProjectileAnimatableJSBuilder
public "createObject"(): $EntityType<$ProjectileAnimatableJS>
/** Creates the arrow item for this entity type */
public "item"(item: $Consumer$$Type<$ProjectileItemBuilder$$Type>): $ProjectileAnimatableJSBuilder
/** Indicates that no projectile item should be created for this entity type */
public "noItem"(): $ProjectileAnimatableJSBuilder
/**
 * Sets a callback function to be executed when the projectile
 * collides with an entity.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.onEntityCollision(context => {
 *     const { entity, target } = context
 *     console.log(entity)
 * });
 * ```
 */
public "onEntityCollision"(consumer: $Consumer$$Type<$ContextUtils$CollidingProjectileEntityContext$$Type>): $ProjectileAnimatableJSBuilder
/**
 * Sets a callback function to be executed when the projectile hits a block.
 * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
 * representing the context of the projectile's interaction with a specific block.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.onHitBlock(context -> {
 *     // Custom logic to handle the projectile hitting a block.
 *     // Access information about the block and projectile using the provided context.
 * });
 * ```
 */
public "onHitBlock"(consumer: $Consumer$$Type<$ContextUtils$ProjectileBlockHitContext$$Type>): $ProjectileAnimatableJSBuilder
/**
 * Sets a callback function to be executed when the projectile hits an entity.
 * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
 * representing the context of the projectile's interaction with a specific entity.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.onHitEntity(context -> {
 *     // Custom logic to handle the projectile hitting an entity.
 *     // Access information about the entity and projectile using the provided context.
 * });
 * ```
 */
public "onHitEntity"(consumer: $Consumer$$Type<$ContextUtils$ProjectileEntityHitContext$$Type>): $ProjectileAnimatableJSBuilder
/** Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior. */
public "setCanShootFromDispenser"(canShootFromDispenser: boolean): $ProjectileAnimatableJSBuilder
get "canShootFromDispenser"(): boolean
set "canShootFromDispenser"(value: boolean)
}
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$IAnimationPredicateJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$AnimationEventJS$$Type } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$AnimationEventJS"
import { $AnimationController$AnimationStateHandler } from "software.bernie.geckolib.core.animation.AnimationController$AnimationStateHandler"

export interface $BaseEntityBuilder$IAnimationPredicateJS<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> {
/**
 * Determines if an animation should continue for a given AnimationEvent. Return true to continue the current animation
 * 
 * @param event - The AnimationEvent, provides values that can be used to determine if the animation should continue or not
 */
"test"(event: $BaseEntityBuilder$AnimationEventJS$$Type<E>): boolean
"toGecko"(): $AnimationController$AnimationStateHandler<E>
}

export namespace $BaseEntityBuilder$IAnimationPredicateJS {
const probejs$$marker: never
}
export abstract class $BaseEntityBuilder$IAnimationPredicateJS$$Static<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> implements $BaseEntityBuilder$IAnimationPredicateJS<E> {
}
}

declare module "net.liopyu.entityjs.builders.living.entityjs.TameableMobJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $TameableMobJS } from "net.liopyu.entityjs.entities.living.entityjs.TameableMobJS"
import { $TameableMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.TameableMobBuilder"

export class $TameableMobJSBuilder extends $TameableMobBuilder<$TameableMobJS> {
constructor(i: $ResourceLocation$$Type)

}
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.EyeOfEnderJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $EyeOfEnderItemBuilder$$Type } from "net.liopyu.entityjs.item.EyeOfEnderItemBuilder"
import { $EyeOfEnderEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.vanilla.EyeOfEnderEntityBuilder"
import { $Function$$Type } from "java.util.function.Function"
import { $EyeOfEnderEntityJS } from "net.liopyu.entityjs.entities.nonliving.vanilla.EyeOfEnderEntityJS"
import { $EyeOfEnder$$Type } from "net.minecraft.world.entity.projectile.EyeOfEnder"

export class $EyeOfEnderJSBuilder extends $EyeOfEnderEntityBuilder<$EyeOfEnderEntityJS> {
constructor(i: $ResourceLocation$$Type)

/** Disables the default ender eye break sound as well as the death particles. */
public "disableDefaultDeathLogic"(): $EyeOfEnderJSBuilder
/** The default trail particles will be disabled */
public "disableTrailParticles"(): $EyeOfEnderJSBuilder
/**
 * Sets a function to determine the itemstack the entity drops when it
 * turns back into an item
 * Defaults to eye of ender.
 * Example usage:
 * ```javascript
 * builder.getItem(entity => {
 *     // Use information about the entity provided by the context.
 *     return Item.of('kubejs:eye_of_ender')// Some ItemStack
 * });
 * ```
 */
public "getItem"(function_: $Function$$Type<$EyeOfEnder$$Type, any>): $EyeOfEnderJSBuilder
/** Creates the item for this entity type */
public "item"(item: $Consumer$$Type<$EyeOfEnderItemBuilder$$Type>): $EyeOfEnderJSBuilder
/** Indicates that no item should be created for this entity type */
public "noItem"(): $EyeOfEnderJSBuilder
/**
 * @param survivalChance A float value from 0 to 1 representing the chance that the Eye of Ender will not break after use.
 * 
 *     Example usage:
 *     ```javascript
 *     eyeOfEnderBuilder.setSurvivalChance(0.8);
 *     ```
 */
public "setSurvivalChance"(survivalChance: float): $EyeOfEnderJSBuilder
set "survivalChance"(value: float)
}
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$AnimationEventJS" {
import { $Entity } from "net.minecraft.world.entity.Entity"
import { $AnimationController } from "software.bernie.geckolib.core.animation.AnimationController"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $Map } from "java.util.Map"
import { $IAnimatableJSCustom } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $PlayState } from "software.bernie.geckolib.core.object.PlayState"
import { $DataTicket } from "software.bernie.geckolib.core.object.DataTicket"
import { $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $CustomEntityJSBuilder$AnimationEventJS<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> {
constructor(parent: $AnimationState$$Type<E>)

/**
 * Sets a triggerable animation with a specified loop type callable anywhere from the entity.
 * 
 * @param animationName The name of the animation to be triggered, this is the animation named in the json.
 * @param triggerableAnimationID The unique identifier for the triggerable animation.
 * @param loopTypeEnum The loop type for the triggerable animation. Accepts 'LOOP', 'PLAY_ONCE', 'HOLD_ON_LAST_FRAME', or 'DEFAULT'.
 * ```javascript
 *  event.addTriggerableAnimation('spawn', 'spawning', 'default')
 *  ```
 */
public "addTriggerableAnimation"(animationName: string, triggerableAnimationID: string, loopTypeEnum: any): $PlayState
/** Returns the number of ticks the entity has been animating for */
public "getAnimationTick"(): double
/** Returns the animation controller this event is part of */
public "getController"(): $AnimationController<E>
/** Returns the entity that is being animated */
public "getEntity"(): E
/**
 * Returns any extra data that the event may have
 * 
 * Usually used by armor animations to know what item is worn
 */
public "getExtraData"(): $Map<$DataTicket<any>, any>
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
/** Returns a number, in the range [0, 1], how far through the tick it currently is */
public "getPartialTick"(): float
/** If the entity is moving */
public "isMoving"(): boolean
/** Adds an animation to the current animation list */
public "then"(animationName: string, loopType: $Animation$LoopType$$Type): $CustomEntityJSBuilder$AnimationEventJS<E>
/** Sets an animation to play in a loop */
public "thenLoop"(animationName: string): $PlayState
/** Sets an animation to play defaulting to the animations.json file loop type */
public "thenPlay"(animationName: string): $PlayState
/** Sets an animation to play and hold on the last frame */
public "thenPlayAndHold"(animationName: string): $PlayState
/** Sets an animation to play an x amount of times */
public "thenPlayXTimes"(animationName: string, times: integer): $PlayState
/** Wait a certain amount of ticks before starting the next animation */
public "thenWait"(ticks: integer): $PlayState
get "animationTick"(): double
get "controller"(): $AnimationController<E>
get "entity"(): E
get "extraData"(): $Map<$DataTicket<any>, any>
get "limbSwing"(): float
get "limbSwingAmount"(): float
get "partialTick"(): float
get "moving"(): boolean
}
}

declare module "net.liopyu.entityjs.builders.living.vanilla.ParrotJSBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $ContextUtils$PlayerEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$PlayerEntityContext"
import { $ParrotEntityJS } from "net.liopyu.entityjs.entities.living.vanilla.ParrotEntityJS"
import { $TameableMobBuilder } from "net.liopyu.entityjs.builders.living.entityjs.TameableMobBuilder"

export class $ParrotJSBuilder extends $TameableMobBuilder<$ParrotEntityJS> {
constructor(i: $ResourceLocation$$Type)

/**
 * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
 * Defaults to true.
 * 
 * Example usage:
 * ```javascript
 * builder.defaultGoals(false);
 * ```
 */
public "defaultGoals"(defaultGoals: boolean): $ParrotJSBuilder
/**
 * Sets a Consumer with the parameter of ContextUtils.PlayerEntityContext callback
 * This is fired after the entity is tamed and all tame logic has already taken place.
 * Useful if you don't want to mess with the UUID logic in the tameOverride method.
 * 
 * @param onTamed A Consumer that fires when the entity is tamed.
 * 
 * Example usage:
 * ```javascript
 * builder.onTamed(entity => {
 *     // Do stuff when the entity is tamed.
 * });
 * ```
 */
public "onTamed"(onTamed: $Consumer$$Type<$ContextUtils$PlayerEntityContext$$Type>): $ParrotJSBuilder
}
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$AnimationEventJS" {
import { $IAnimatableJS } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity } from "net.minecraft.world.entity.LivingEntity"
import { $AnimationController } from "software.bernie.geckolib.core.animation.AnimationController"
import { $AnimationState$$Type } from "software.bernie.geckolib.core.animation.AnimationState"
import { $Map } from "java.util.Map"
import { $PlayState } from "software.bernie.geckolib.core.object.PlayState"
import { $DataTicket } from "software.bernie.geckolib.core.object.DataTicket"
import { $Animation$LoopType$$Type } from "software.bernie.geckolib.core.animation.Animation$LoopType"

export class $BaseLivingEntityBuilder$AnimationEventJS<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> {
constructor(parent: $AnimationState$$Type<E>)

/**
 * Sets a triggerable animation with a specified loop type callable anywhere from the entity.
 * 
 * @param animationName The name of the animation to be triggered, this is the animation named in the json.
 * @param triggerableAnimationID The unique identifier for the triggerable animation.
 * @param loopTypeEnum The loop type for the triggerable animation. Accepts 'LOOP', 'PLAY_ONCE', 'HOLD_ON_LAST_FRAME', or 'DEFAULT'.
 * ```javascript
 *  event.addTriggerableAnimation('spawn', 'spawning', 'default')
 *  ```
 */
public "addTriggerableAnimation"(animationName: string, triggerableAnimationID: string, loopTypeEnum: any): $PlayState
/** Returns the number of ticks the entity has been animating for */
public "getAnimationTick"(): double
/** Returns the animation controller this event is part of */
public "getController"(): $AnimationController<E>
/** Returns the entity that is being animated */
public "getEntity"(): E
/**
 * Returns any extra data that the event may have
 * 
 * Usually used by armor animations to know what item is worn
 */
public "getExtraData"(): $Map<$DataTicket<any>, any>
public "getLimbSwing"(): float
public "getLimbSwingAmount"(): float
/** Returns a number, in the range [0, 1], how far through the tick it currently is */
public "getPartialTick"(): float
/** If the entity is moving */
public "isMoving"(): boolean
/** Adds an animation to the current animation list */
public "then"(animationName: string, loopType: $Animation$LoopType$$Type): $BaseLivingEntityBuilder$AnimationEventJS<E>
/** Sets an animation to play in a loop */
public "thenLoop"(animationName: string): $PlayState
/** Sets an animation to play defaulting to the animations.json file loop type */
public "thenPlay"(animationName: string): $PlayState
/** Sets an animation to play and hold on the last frame */
public "thenPlayAndHold"(animationName: string): $PlayState
/** Sets an animation to play an x amount of times */
public "thenPlayXTimes"(animationName: string, times: integer): $PlayState
/** Wait a certain amount of ticks before starting the next animation */
public "thenWait"(ticks: integer): $PlayState
get "animationTick"(): double
get "controller"(): $AnimationController<E>
get "entity"(): E
get "extraData"(): $Map<$DataTicket<any>, any>
get "limbSwing"(): float
get "limbSwingAmount"(): float
get "partialTick"(): float
get "moving"(): boolean
}
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityBuilder" {
import { $ResourceLocation$$Type } from "net.minecraft.resources.ResourceLocation"
import { $Consumer$$Type } from "java.util.function.Consumer"
import { $List } from "java.util.List"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $BaseNonAnimatableEntityBuilder } from "net.liopyu.entityjs.builders.nonliving.BaseNonAnimatableEntityBuilder"
import { $EntityType } from "net.minecraft.world.entity.EntityType"
import { $ContextUtils$CollidingProjectileEntityContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$CollidingProjectileEntityContext"
import { $IProjectileEntityJS } from "net.liopyu.entityjs.entities.nonliving.entityjs.IProjectileEntityJS"
import { $ContextUtils$ProjectileBlockHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ProjectileBlockHitContext"
import { $ContextUtils$ProjectileEntityHitContext$$Type } from "net.liopyu.entityjs.util.ContextUtils$ProjectileEntityHitContext"
import { $Function$$Type } from "java.util.function.Function"

export class $ProjectileEntityBuilder<T extends ($Entity & $IProjectileEntityJS) = ($Entity & $IProjectileEntityJS)> extends $BaseNonAnimatableEntityBuilder<T> {
static readonly "thisList": $List<$ProjectileEntityBuilder<any>>

constructor(i: $ResourceLocation$$Type)

/**
 * Sets a function to determine if the projectile entity can hit a specific entity.
 * 
 * @param canHitEntity The predicate to check if the arrow can hit the entity.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.canHitEntity(entity -> {
 *     // Custom logic to determine if the projectile can hit the specified entity
 *     // Return true if the arrow can hit, false otherwise.
 * });
 * ```
 */
public "canHitEntity"(function_: $Function$$Type<$Entity$$Type, any>): $ProjectileEntityBuilder<T>
public "createObject"(): $EntityType<T>
/**
 * Sets a callback function to be executed when the projectile
 * collides with an entity.
 * 
 * Example usage:
 * ```javascript
 * arrowEntityBuilder.onEntityCollision(context => {
 *     const { entity, target } = context
 *     console.log(entity)
 * });
 * ```
 */
public "onEntityCollision"(consumer: $Consumer$$Type<$ContextUtils$CollidingProjectileEntityContext$$Type>): $ProjectileEntityBuilder<T>
/**
 * Sets a callback function to be executed when the projectile hits a block.
 * The provided Consumer accepts a {@link ContextUtils.ProjectileBlockHitContext} parameter,
 * representing the context of the projectile's interaction with a specific block.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.onHitBlock(context -> {
 *     // Custom logic to handle the projectile hitting a block.
 *     // Access information about the block and projectile using the provided context.
 * });
 * ```
 */
public "onHitBlock"(consumer: $Consumer$$Type<$ContextUtils$ProjectileBlockHitContext$$Type>): $ProjectileEntityBuilder<T>
/**
 * Sets a callback function to be executed when the projectile hits an entity.
 * The provided Consumer accepts a {@link ContextUtils.ProjectileEntityHitContext} parameter,
 * representing the context of the projectile's interaction with a specific entity.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.onHitEntity(context -> {
 *     // Custom logic to handle the projectile hitting an entity.
 *     // Access information about the entity and projectile using the provided context.
 * });
 * ```
 */
public "onHitEntity"(consumer: $Consumer$$Type<$ContextUtils$ProjectileEntityHitContext$$Type>): $ProjectileEntityBuilder<T>
/**
 * Sets the offset for rendering the projectile entity.
 * 
 * @param vX The X-axis offset.
 * 
 * @param vY The Y-axis offset.
 * 
 * @param vZ The Z-axis offset.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.renderOffset(0.5, 1.0, -0.5);
 * ```
 */
public "renderOffset"(vX: float, vY: float, vZ: float): $ProjectileEntityBuilder<T>
/**
 * Sets the scale for rendering the projectile entity.
 * 
 * @param pX The X-axis scale.
 * 
 * @param pY The Y-axis scale.
 * 
 * @param pZ The Z-axis scale.
 * 
 * Example usage:
 * ```javascript
 * projectileEntityBuilder.renderScale(1.5, 1.5, 1.5);
 * ```
 */
public "renderScale"(pX: float, pY: float, pZ: float): $ProjectileEntityBuilder<T>
/** Sets whether or not the projectile can be shot from dispenser blocks, if noItem is set to true this will not register DispenserBehavior. */
public "setCanShootFromDispenser"(canShootFromDispenser: boolean): $ProjectileEntityBuilder<T>
/**
 * Sets a function to determine the texture resource for the entity.
 * The provided Function accepts a parameter of type T (the entity),
 * allowing changing the texture based on information about the entity.
 * The default behavior returns <namespace>:textures/entity/projectiles/<path>.png.
 * 
 * Example usage:
 * ```javascript
 * projectileBuilder.textureResource(entity => {
 *     // Define logic to determine the texture resource for the entity
 *     // Use information about the entity provided by the context.
 *     return // Some ResourceLocation representing the texture resource;
 * });
 * ```
 */
public "textureLocation"(function_: $Function$$Type<T, any>): $ProjectileEntityBuilder<T>
get "canShootFromDispenser"(): boolean
set "canShootFromDispenser"(value: boolean)
}
}

