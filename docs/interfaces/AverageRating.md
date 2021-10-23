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

src/order/rating.ts:42

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

src/order/rating.ts:39

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/order/rating.ts:51

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/order/rating.ts:54

___

### numberOfRatings

• **numberOfRatings**: `number`

Cantidad de ratings asignados a este negocio

#### Defined in

src/order/rating.ts:48

___

### sumOfRatings

• **sumOfRatings**: `number`

Suma total de todos los ratings asignados a este negocio

#### Defined in

src/order/rating.ts:45
