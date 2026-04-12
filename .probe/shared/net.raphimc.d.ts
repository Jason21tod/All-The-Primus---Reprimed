declare module "net.raphimc.immediatelyfast.injection.interfaces.IBufferBuilder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBufferBuilder {
"immediatelyFast$isReleased"(): boolean
"immediatelyFast$release"(): void
}

export namespace $IBufferBuilder {
const probejs$$marker: never
}
export abstract class $IBufferBuilder$$Static implements $IBufferBuilder {
}
}

declare module "net.raphimc.immediatelyfast.injection.interfaces.IMapRenderer" {
import { $MapAtlasTexture } from "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture"

export interface $IMapRenderer {
"immediatelyFast$getAtlasMapping"(int0: integer): integer
"immediatelyFast$getMapAtlasTexture"(int0: integer): $MapAtlasTexture
}

export namespace $IMapRenderer {
const probejs$$marker: never
}
export abstract class $IMapRenderer$$Static implements $IMapRenderer {
}
}

declare module "net.raphimc.immediatelyfast.feature.map_atlas_generation.MapAtlasTexture" {
import { $ResourceLocation } from "net.minecraft.resources.ResourceLocation"
import { $DynamicTexture } from "net.minecraft.client.renderer.texture.DynamicTexture"
import { $AutoCloseable } from "java.lang.AutoCloseable"

export class $MapAtlasTexture implements $AutoCloseable {
static readonly "ATLAS_SIZE": integer
static readonly "MAPS_PER_ATLAS": integer
static readonly "MAP_SIZE": integer

constructor(id: integer)

public "close"(): void
public "getId"(): integer
public "getIdentifier"(): $ResourceLocation
public "getNextMapLocation"(): integer
public "getTexture"(): $DynamicTexture
get "id"(): integer
get "identifier"(): $ResourceLocation
get "nextMapLocation"(): integer
get "texture"(): $DynamicTexture
}
}

