[ride-dbtypes](../README.md) / [Exports](../modules.md) / AverageRating

# Interface: AverageRating

Promedio de ratings por usuario (puede ser un cliente, un negocio, un repartidor, etc.)
Calculado automáticamente por un Cloud Function

## Table of contents

### Properties

- [average](AverageRating.md#average)
- [numberOfRatings](AverageRating.md#numberofratings)
- [ratedUserId](AverageRating.md#rateduserid)
- [ratedUserType](AverageRating.md#ratedusertype)
- [sumOfRatings](AverageRating.md#sumofratings)

## Properties

### average

• **average**: `number`

Puntaje promedio => sumOfRatings / numberOfRatings

#### Defined in

[src/order/rating.ts:45](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L45)

___

### averageSentimentScore

• **averageSentimentScore**: `number`

Puntaje promedio de sentimiento => sumOfSentimentScore / numberOfRatings

#### Defined in

[src/order/rating.ts:57](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L57)

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

[src/order/rating.ts:42](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L42)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/order/rating.ts:60](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L60)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/order/rating.ts:63](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L63)

___

### numberOfRatings

• **numberOfRatings**: `number`

Cantidad de ratings asignados a este usuario

#### Defined in

[src/order/rating.ts:51](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L51)

___

### sumOfRatings

• **sumOfRatings**: `number`

Suma total de todos los ratings asignados a este usuario

#### Defined in

[src/order/rating.ts:48](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L48)

___

### sumOfSentimentScore

• **sumOfSentimentScore**: `number`

Suma total de todos los puntajes de sentimiento asignados reviews de este negocio

#### Defined in

[src/order/rating.ts:54](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L54)
