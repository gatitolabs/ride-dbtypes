[ride-dbtypes](../README.md) / [Exports](../modules.md) / Rating

# Interface: Rating

Rating proporcionado por un usuario para un negocio u otro usuario.

## Table of contents

### Properties

- [feedback](Rating.md#feedback)
- [ratedUserId](Rating.md#rateduserid)
- [ratedUserType](Rating.md#ratedusertype)
- [raterUserId](Rating.md#rateruserid)
- [raterUserType](Rating.md#raterusertype)
- [ratingValue](Rating.md#ratingvalue)

## Properties

### feedback

• **feedback**: `string`

Comentario recibido

#### Defined in

[src/order/rating.ts:12](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L12)

___

### ratedUserId

• **ratedUserId**: `string`

Firebase User Id del usuario calificado (de firebase auth).

#### Defined in

[src/order/rating.ts:9](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L9)

___

### ratedUserType

• **ratedUserType**: [`UserType`](../modules.md#usertype)

Tipo del usuario calificado (customer, business, biker, etc.).

#### Defined in

[src/order/rating.ts:24](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L24)

___

### raterUserId

• **raterUserId**: `string`

Firebase User Id del usuario que proporcionó el rating

#### Defined in

[src/order/rating.ts:30](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L30)

___

### raterUserType

• **raterUserType**: [`UserType`](../modules.md#usertype)

Tipo del usuario que proporcionó el rating

#### Defined in

[src/order/rating.ts:6](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L6)

___

### ratingValue

• **ratingValue**: `number`

Valor numérico del rating (puede ser una puntuación, estrella, etc.)

#### Defined in

[src/order/rating.ts:33](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L33)

___

### numericRating

• **numericRating**: `number`

Puntaje

#### Defined in

[src/order/rating.ts:21](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L21)

___

### orderDate

• **orderDate**: `number`

Fecha de la orden

#### Defined in

[src/order/rating.ts:15](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L15)

___

### sentimentScore

• **sentimentScore**: `number`

Puntaje del API de Analisis de Sentimiento de Google

#### Defined in

[src/order/rating.ts:27](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L27)

___

### userName

• **userName**: `string`

Nombre completo del usuario que asigno este puntaje

#### Defined in

[src/order/rating.ts:18](https://github.com/gatitolabs/ride-dbtypes/blob/de85d58/src/order/rating.ts#L18)
