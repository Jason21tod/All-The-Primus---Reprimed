StartupEvents.registry('item', event => {
    event.create('blood_bottle')
        .maxStackSize(16)
        .useAnimation("drink")
        .useDuration(itemstack => 64)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            if (entity.isPlayer()) {
                if (entity.tags.contains("vampire")){
                    const effects = entity.potionEffects;
                    effects.add('minecraft:regeneration', 5 *20);
                    effects.add('minecraft:saturation', 5)
                    itemstack.shrink(1)
                    entity.addItem(Item.of('minecraft:glass_bottle'))
                    return itemstack
            }}
            entity.tell("Você não pode beber esse líquido...")
            return itemstack
        }).releaseUsing((itemstack, level, entity, tick) => {
            return itemstack
        })
})