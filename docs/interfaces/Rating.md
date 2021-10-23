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

Firebase User Id del ciclista (de firebase auth)

#### Defined in

src/order/rating.ts:12

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

src/order/rating.ts:9

___

### comment

• **comment**: `string`

Comentario del usuario asociado a este puntaje

#### Defined in

src/order/rating.ts:24

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/order/rating.ts:27

___

### customerId

• **customerId**: `string`

Firebase User Id del usuario (de firebase auth)

#### Defined in

src/order/rating.ts:6

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/order/rating.ts:30

___

### numericRating

• **numericRating**: `number`

Puntaje

#### Defined in

src/order/rating.ts:21

___

### orderDate

• **orderDate**: `number`

Fecha de la orden

#### Defined in

src/order/rating.ts:15

___

### userName

• **userName**: `string`

Nombre completo del usuario que asigno este puntaje

#### Defined in

src/order/rating.ts:18
