declare module "net.liopyu.entityjs.builders.living.entityjs.MobBuilder" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $Mob, $Mob$$Type } from "net.minecraft.world.entity.Mob"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobBuilder$$Type<T extends ($Mob & $IAnimatableJS) = ($Mob & $IAnimatableJS)> = ($MobBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.HorseJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $HorseJSBuilder$$Type = ($HorseJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.BoatJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BoatJSBuilder$$Type = ($BoatJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ArrowEntityBuilder" {
import { $AbstractArrow, $AbstractArrow$$Type } from "net.minecraft.world.entity.projectile.AbstractArrow"
import { $IArrowEntityJS, $IArrowEntityJS$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IArrowEntityJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArrowEntityBuilder$$Type<T extends ($AbstractArrow & $IArrowEntityJS) = ($AbstractArrow & $IArrowEntityJS)> = ($ArrowEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ISoundListenerJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BaseLivingEntityBuilder$SoundKeyFrameEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$SoundKeyFrameEventJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$ISoundListenerJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$ISoundListenerJS<E> | ((event: $BaseLivingEntityBuilder$SoundKeyFrameEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.living.entityjs.BaseLivingEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityJSBuilder$$Type = ($BaseLivingEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.WolfJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WolfJSBuilder$$Type = ($WolfJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.PartBuilder" {
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PartBuilder$$Type<T extends $LivingEntity = $LivingEntity> = ($PartBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.entityjs.WaterEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WaterEntityJSBuilder$$Type = ($WaterEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.BeeJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BeeJSBuilder$$Type = ($BeeJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.PandaJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PandaJSBuilder$$Type = ($PandaJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CatJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CatJSBuilder$$Type = ($CatJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ISoundListenerJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$SoundKeyFrameEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$SoundKeyFrameEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$ISoundListenerJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$ISoundListenerJS<E> | ((event: $BaseEntityBuilder$SoundKeyFrameEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$IParticleListenerJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder$ParticleKeyFrameEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ParticleKeyFrameEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$IParticleListenerJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$IParticleListenerJS<E> | ((event: $BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityBuilder$$Type = ($CustomEntityBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.BoatEntityBuilder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BoatEntityBuilder$$Type<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BoatEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.EnderManJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EnderManJSBuilder$$Type = ($EnderManJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$IParticleListenerJS" {
import { $BaseEntityBuilder$ParticleKeyFrameEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ParticleKeyFrameEventJS"
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$IParticleListenerJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$IParticleListenerJS<E> | ((event: $BaseEntityBuilder$ParticleKeyFrameEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ICustomInstructionListenerJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$ICustomInstructionListenerJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$ICustomInstructionListenerJS<E> | ((event: $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.living.vanilla.EvokerJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EvokerJSBuilder$$Type = ($EvokerJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$IAnimationPredicateJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CustomEntityJSBuilder$AnimationEventJS } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$AnimationEventJS"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$IAnimationPredicateJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$IAnimationPredicateJS<E> | ((event: $CustomEntityJSBuilder$AnimationEventJS<E>) => boolean));
}

declare module "net.liopyu.entityjs.builders.living.vanilla.DonkeyJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DonkeyJSBuilder$$Type = ($DonkeyJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProjectileEntityJSBuilder$$Type = ($ProjectileEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.GoatJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GoatJSBuilder$$Type = ($GoatJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimalEntityJSBuilder$$Type = ($AnimalEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$SoundKeyFrameEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$SoundKeyFrameEventJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$SoundKeyFrameEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ParticleKeyFrameEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$ParticleKeyFrameEventJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$ParticleKeyFrameEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.ZombieJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ZombieJSBuilder$$Type = ($ZombieJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ISoundListenerJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $CustomEntityJSBuilder$SoundKeyFrameEventJS } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$SoundKeyFrameEventJS"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$ISoundListenerJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$ISoundListenerJS<E> | ((event: $CustomEntityJSBuilder$SoundKeyFrameEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.living.vanilla.DolphinJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $DolphinJSBuilder$$Type = ($DolphinJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.LookControlJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $LookControlJSBuilder$$Type = ($LookControlJSBuilder);
}

declare module "net.liopyu.entityjs.builders.modification.ModifyEntityBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ModifyEntityBuilder$$Type = ($ModifyEntityBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$AnimationEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$AnimationEventJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$AnimationEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$IParticleListenerJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $CustomEntityJSBuilder$ParticleKeyFrameEventJS } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ParticleKeyFrameEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$IParticleListenerJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$IParticleListenerJS<E> | ((event: $CustomEntityJSBuilder$ParticleKeyFrameEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.EyeOfEnderEntityBuilder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IProjectileEntityJS, $IProjectileEntityJS$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IProjectileEntityJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EyeOfEnderEntityBuilder$$Type<T extends ($Entity & $IProjectileEntityJS) = ($Entity & $IProjectileEntityJS)> = ($EyeOfEnderEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.GhastJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GhastJSBuilder$$Type = ($GhastJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.BaseEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityJSBuilder$$Type = ($BaseEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.IllusionerJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IllusionerJSBuilder$$Type = ($IllusionerJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CowJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CowJSBuilder$$Type = ($CowJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$ICustomInstructionListenerJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"
import { $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS } from "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$CustomInstructionKeyframeEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$ICustomInstructionListenerJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$ICustomInstructionListenerJS<E> | ((event: $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.living.entityjs.AnimalEntityBuilder" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $Animal, $Animal$$Type } from "net.minecraft.world.entity.animal.Animal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AnimalEntityBuilder$$Type<T extends ($Animal & $IAnimatableJS) = ($Animal & $IAnimatableJS)> = ($AnimalEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseNonAnimatableEntityBuilder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseNonAnimatableEntityBuilder$$Type<T extends $Entity = $Entity> = ($BaseNonAnimatableEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$ParticleKeyFrameEventJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$ParticleKeyFrameEventJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$$Type<T extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$SoundKeyFrameEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$SoundKeyFrameEventJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$SoundKeyFrameEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.misc.MoveControlJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MoveControlJSBuilder$$Type = ($MoveControlJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.TridentJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TridentJSBuilder$$Type = ($TridentJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$KeyFrameEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $KeyFrameData, $KeyFrameData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$KeyFrameEventJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL), B extends $KeyFrameData = $KeyFrameData> = ($BaseEntityBuilder$KeyFrameEventJS<E, B>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.BlazeJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BlazeJSBuilder$$Type = ($BlazeJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.SkeletonJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SkeletonJSBuilder$$Type = ($SkeletonJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$$Type<T extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CamelJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CamelJSBuilder$$Type = ($CamelJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ParticleKeyFrameEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$ParticleKeyFrameEventJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$ParticleKeyFrameEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.BatJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BatJSBuilder$$Type = ($BatJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$IAnimationPredicateJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $BaseLivingEntityBuilder$AnimationEventJS } from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$AnimationEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$IAnimationPredicateJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$IAnimationPredicateJS<E> | ((event: $BaseLivingEntityBuilder$AnimationEventJS<E>) => boolean));
}

declare module "net.liopyu.entityjs.builders.living.vanilla.PiglinJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PiglinJSBuilder$$Type = ($PiglinJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.AxolotlJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AxolotlJSBuilder$$Type = ($AxolotlJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.AllayJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $AllayJSBuilder$$Type = ($AllayJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $PathfinderMob, $PathfinderMob$$Type } from "net.minecraft.world.entity.PathfinderMob"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $PathfinderMobBuilder$$Type<T extends ($PathfinderMob & $IAnimatableJS) = ($PathfinderMob & $IAnimatableJS)> = ($PathfinderMobBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.ChickenJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ChickenJSBuilder$$Type = ($ChickenJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.CreeperJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CreeperJSBuilder$$Type = ($CreeperJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.IronGolemJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $IronGolemJSBuilder$$Type = ($IronGolemJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$SoundKeyFrameEventJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$SoundKeyFrameEventJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$SoundKeyFrameEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$$Type = ($CustomEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.JumpControlJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $JumpControlJSBuilder$$Type = ($JumpControlJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.entityjs.TameableMobBuilder" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $TamableAnimal, $TamableAnimal$$Type } from "net.minecraft.world.entity.TamableAnimal"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TameableMobBuilder$$Type<T extends ($TamableAnimal & $IAnimatableJS) = ($TamableAnimal & $IAnimatableJS)> = ($TameableMobBuilder<T>);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$KeyFrameEventJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"
import { $KeyFrameData, $KeyFrameData$$Type } from "software.bernie.geckolib.core.keyframe.event.data.KeyFrameData"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$KeyFrameEventJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS), B extends $KeyFrameData = $KeyFrameData> = ($BaseLivingEntityBuilder$KeyFrameEventJS<E, B>);
}

declare module "net.liopyu.entityjs.builders.living.entityjs.MobEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $MobEntityJSBuilder$$Type = ($MobEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.SlimeJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $SlimeJSBuilder$$Type = ($SlimeJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.GuardianJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $GuardianJSBuilder$$Type = ($GuardianJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$CustomInstructionKeyframeEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$CustomInstructionKeyframeEventJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$CustomInstructionKeyframeEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.WitherJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $WitherJSBuilder$$Type = ($WitherJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ArrowEntityJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ArrowEntityJSBuilder$$Type = ($ArrowEntityJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$CustomInstructionKeyframeEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$CustomInstructionKeyframeEventJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$ICustomInstructionListenerJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$CustomInstructionKeyframeEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$CustomInstructionKeyframeEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$ICustomInstructionListenerJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$ICustomInstructionListenerJS<E> | ((event: $BaseEntityBuilder$CustomInstructionKeyframeEventJS<E>) => void));
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileAnimatableJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProjectileAnimatableJSBuilder$$Type = ($ProjectileAnimatableJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$IAnimationPredicateJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSNL, $IAnimatableJSNL$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IAnimatableJSNL"
import { $BaseEntityBuilder$AnimationEventJS } from "net.liopyu.entityjs.builders.nonliving.BaseEntityBuilder$AnimationEventJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseEntityBuilder$IAnimationPredicateJS$$Type<E extends ($Entity & $IAnimatableJSNL) = ($Entity & $IAnimatableJSNL)> = ($BaseEntityBuilder$IAnimationPredicateJS<E> | ((event: $BaseEntityBuilder$AnimationEventJS<E>) => boolean));
}

declare module "net.liopyu.entityjs.builders.living.entityjs.TameableMobJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $TameableMobJSBuilder$$Type = ($TameableMobJSBuilder);
}

declare module "net.liopyu.entityjs.builders.nonliving.vanilla.EyeOfEnderJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $EyeOfEnderJSBuilder$$Type = ($EyeOfEnderJSBuilder);
}

declare module "net.liopyu.entityjs.builders.misc.CustomEntityJSBuilder$AnimationEventJS" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IAnimatableJSCustom, $IAnimatableJSCustom$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJSCustom"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $CustomEntityJSBuilder$AnimationEventJS$$Type<E extends ($Entity & $IAnimatableJSCustom) = ($Entity & $IAnimatableJSCustom)> = ($CustomEntityJSBuilder$AnimationEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.living.vanilla.ParrotJSBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ParrotJSBuilder$$Type = ($ParrotJSBuilder);
}

declare module "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder$AnimationEventJS" {
import { $IAnimatableJS, $IAnimatableJS$$Type } from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import { $LivingEntity, $LivingEntity$$Type } from "net.minecraft.world.entity.LivingEntity"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $BaseLivingEntityBuilder$AnimationEventJS$$Type<E extends ($LivingEntity & $IAnimatableJS) = ($LivingEntity & $IAnimatableJS)> = ($BaseLivingEntityBuilder$AnimationEventJS<E>);
}

declare module "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityBuilder" {
import { $Entity, $Entity$$Type } from "net.minecraft.world.entity.Entity"
import { $IProjectileEntityJS, $IProjectileEntityJS$$Type } from "net.liopyu.entityjs.entities.nonliving.entityjs.IProjectileEntityJS"

/** Use `Internal.{Type}` and `Internal.{Type}_` for referencing this type in JS file */
export type $ProjectileEntityBuilder$$Type<T extends ($Entity & $IProjectileEntityJS) = ($Entity & $IProjectileEntityJS)> = ($ProjectileEntityBuilder<T>);
}

