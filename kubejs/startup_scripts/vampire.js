StartupEvents.registry('item', event => {
    event.create('blood_bottle')
        .maxStackSize(16)
        .useAnimation("drink")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            itemstack.shrink(1)
            if (entity.isPlayer()) {
                entity.addItem(Item.of('minecraft:glass_bottle'))
            }
            return itemstack
        }).releaseUsing((itemstack, level, entity, tick) => {
            return itemstack
        })
})
StartupEvents.registry('item', event => {
    event.create('unholy_blood_bottle')
        .maxStackSize(16)
        .useAnimation("drink")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            itemstack.shrink(1)
            if (entity.isPlayer()) {
                entity.addItem(Item.of('minecraft:glass_bottle'))
            }
            return itemstack
        }).releaseUsing((itemstack, level, entity, tick) => {
            return itemstack
        })
})