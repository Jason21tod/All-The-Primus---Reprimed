StartupEvents.registry('item', event => {
    event.create('blood_bottle')
        .maxStackSize(16)
        .useAnimation("drink")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            const effects = entity.potionEffects;
            effects.add('minecraft:regeneration', 5 *20);
            effects.add('minecraft:saturation', 5)
            itemstack.shrink(1)
            if (entity.isPlayer()) {
                entity.addItem(Item.of('minecraft:glass_bottle'))
            }
            return itemstack
        }).releaseUsing((itemstack, level, entity, tick) => {
            return itemstack
        })
})