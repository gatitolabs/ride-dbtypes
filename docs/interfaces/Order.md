[ride-dbtypes](../README.md) / [Exports](../modules.md) / Order

# Interface: Order

Representa una orden dentro del sistema

## Table of contents

### Properties

- [bikerId](Order.md#bikerid)
- [businessId](Order.md#businessid)
- [created](Order.md#created)
- [customerFirstName](Order.md#customerfirstname)
- [customerId](Order.md#customerid)
- [customerLastName](Order.md#customerlastname)
- [deliveryLocation](Order.md#deliverylocation)
- [destinationAddress](Order.md#destinationaddress)
- [distance](Order.md#distance)
- [items](Order.md#items)
- [itemsCost](Order.md#itemscost)
- [lastUpdate](Order.md#lastupdate)
- [methodOfPayment](Order.md#methodofpayment)
- [originAddress](Order.md#originaddress)
- [ratingScore](Order.md#ratingscore)
- [serviceCost](Order.md#servicecost)
- [status](Order.md#status)
- [totalCost](Order.md#totalcost)

## Properties

### bikerId

• **bikerId**: `string`

Firebase User Id del biker (de firebase auth)

#### Defined in

[src/order/order.ts:78](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L78)

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

[src/order/order.ts:75](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L75)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/order/order.ts:111](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L111)

___

### customerFirstName

• **customerFirstName**: `string`

nombre completo del cliente

#### Defined in

[src/order/order.ts:120](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L120)

___

### customerId

• **customerId**: `string`

Firebase User Id del usuario (de firebase auth)

#### Defined in

[src/order/order.ts:72](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L72)

___

### customerLastName

• **customerLastName**: `string`

apellidos del cliente

#### Defined in

[src/order/order.ts:123](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L123)

___

### deliveryLocation

• **deliveryLocation**: `Coords`

coordenadas de le entrega (se sacan de la ubicacion actual del Customer)

#### Defined in

[src/order/order.ts:114](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L114)

___

### destinationAddress

• **destinationAddress**: `string`

Direccion de entrega de la orden

#### Defined in

[src/order/order.ts:99](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L99)

___

### distance

• **distance**: `number`

Distancia entre la direccion de origen y destino

#### Defined in

[src/order/order.ts:105](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L105)

___

### items

• **items**: [`OrderItem`](OrderItem.md)[]

lista de items en la orden - ver [OrderItem](OrderItem.md)

#### Defined in

[src/order/order.ts:87](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L87)

___

### itemsCost

• **itemsCost**: `number`

Costo de los items de la orden (sin envio)

#### Defined in

[src/order/order.ts:93](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L93)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/order/order.ts:117](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L117)

___

### methodOfPayment

• **methodOfPayment**: [`PaymentMethod`](../modules.md#paymentmethod)

Metodo de pago de la orden - ver [PaymentMethod](../modules.md#paymentmethod)

#### Defined in

[src/order/order.ts:84](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L84)

___

### originAddress

• **originAddress**: `string`

Direccion de origen de la orden

#### Defined in

[src/order/order.ts:102](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L102)

___

### ratingScore

• **ratingScore**: `number`

Puntaje de la orden (copiado de Rating)

#### Defined in

[src/order/order.ts:108](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L108)

___

### serviceCost

• **serviceCost**: `number`

Costo del envio

#### Defined in

[src/order/order.ts:96](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L96)

___

### status

• **status**: [`OrderStatus`](../modules.md#orderstatus)

Status de la orden - ver [OrderStatus](../modules.md#orderstatus)

#### Defined in

[src/order/order.ts:81](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L81)

___

### totalCost

• **totalCost**: `number`

Costo total de la orden

#### Defined in

[src/order/order.ts:90](https://github.com/gatitolabs/ride-dbtypes/blob/c046978/src/order/order.ts#L90)
