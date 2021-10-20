[ride-dbtypes](../README.md) / [Exports](../modules.md) / Rating

# Interface: Rating

Puntaje (rating) de una orden especifica

## Table of contents

### Properties

- [bikerId](Rating.md#bikerid)
- [businessId](Rating.md#businessid)
- [comment](Rating.md#comment)
- [created](Rating.md#created)
- [customerId](Rating.md#customerid)
- [lastUpdate](Rating.md#lastupdate)
- [numericRating](Rating.md#numericrating)
- [orderDate](Rating.md#orderdate)
- [userName](Rating.md#username)

## Properties

### bikerId

• **bikerId**: `string`

Id del documento con la informacion del ciclista (no de firebase auth)

#### Defined in

[src/order/rating.ts:12](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L12)

___

### businessId

• **businessId**: `string`

Id del documento con la informacion del negocio (no de firebase auth)

#### Defined in

[src/order/rating.ts:9](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L9)

___

### comment

• **comment**: `string`

Comentario del usuario asociado a este puntaje

#### Defined in

[src/order/rating.ts:24](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L24)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/order/rating.ts:27](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L27)

___

### customerId

• **customerId**: `string`

Id del documento con la informacion del usuario (no de firebase auth)

#### Defined in

[src/order/rating.ts:6](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L6)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/order/rating.ts:30](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L30)

___

### numericRating

• **numericRating**: `number`

Puntaje

#### Defined in

[src/order/rating.ts:21](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L21)

___

### orderDate

• **orderDate**: `number`

Fecha de la orden

#### Defined in

[src/order/rating.ts:15](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L15)

___

### userName

• **userName**: `string`

Nombre completo del usuario que asigno este puntaje

#### Defined in

[src/order/rating.ts:18](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/rating.ts#L18)
