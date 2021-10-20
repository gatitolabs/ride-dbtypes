[ride-dbtypes](../README.md) / [Exports](../modules.md) / OrderItem

# Interface: OrderItem

Representa un item dentro de una orden.  La informacion se copia de la
coleccion de productos.  Si el producto es borrado, este item persiste
como informacion historica de las ordenes de un usuario.

## Table of contents

### Properties

- [cost](OrderItem.md#cost)
- [name](OrderItem.md#name)
- [notes](OrderItem.md#notes)
- [productId](OrderItem.md#productid)

## Properties

### cost

• **cost**: `number`

costo del producto

#### Defined in

[src/order/order.ts:24](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/order/order.ts#L24)

___

### name

• **name**: `string`

nombre del producto

#### Defined in

[src/order/order.ts:22](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/order/order.ts#L22)

___

### notes

• **notes**: `string`

notas para el producto dentro de la orden

#### Defined in

[src/order/order.ts:26](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/order/order.ts#L26)

___

### productId

• **productId**: `string`

Id del producto (de la coleccion de productos - puede ser de un producto borrado)

#### Defined in

[src/order/order.ts:20](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/order/order.ts#L20)
