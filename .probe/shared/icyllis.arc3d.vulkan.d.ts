declare module "icyllis.arc3d.vulkan.VulkanImageDesc" {
import { $ImageDesc } from "icyllis.arc3d.engine.ImageDesc"

export class $VulkanImageDesc extends $ImageDesc {
readonly "mFormat": integer
readonly "mImageTiling": integer
readonly "mImageUsageFlags": integer
readonly "mSharingMode": integer
readonly "mVkFlags": integer
readonly "mVkImageType": integer

constructor(vkFlags: integer, vkImageType: integer, format: integer, imageTiling: integer, imageUsageFlags: integer, sharingMode: integer, imageType: integer, width: integer, height: integer, depth: integer, arraySize: integer, mipLevelCount: integer, sampleCount: integer, flags: integer)

}
}

