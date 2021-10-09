[ride-dbtypes](../README.md) / [Exports](../modules.md) / AverageRating

# Interface: AverageRating

Promedio de ratings por negocio
Calculado automaticamente por un Cloud Function

## Table of contents

### Properties

- [average](AverageRating.md#average)
- [businessId](AverageRating.md#businessid)
- [created](AverageRating.md#created)
- [lastUpdate](AverageRating.md#lastupdate)
- [numberOfRatings](AverageRating.md#numberofratings)
- [sumOfRatings](AverageRating.md#sumofratings)

## Properties

### average

• **average**: `number`

Puntaje promedio =>  sumOfRatings / numberOfRatings

#### Defined in

[src/order/rating.ts:42](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/order/rating.ts#L42)

___

### businessId

• **businessId**: `string`

Id del documento con la informacion del negocio (no de firebase auth)

#### Defined in

[src/order/rating.ts:39](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/order/rating.ts#L39)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/order/rating.ts:51](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/order/rating.ts#L51)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/order/rating.ts:54](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/order/rating.ts#L54)

___

### numberOfRatings

• **numberOfRatings**: `number`

Cantidad de ratings asignados a este negocio

#### Defined in

[src/order/rating.ts:48](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/order/rating.ts#L48)

___

### sumOfRatings

• **sumOfRatings**: `number`

Suma total de todos los ratings asignados a este negocio

#### Defined in

[src/order/rating.ts:45](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/order/rating.ts#L45)
