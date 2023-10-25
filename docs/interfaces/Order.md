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
- [ratings](Order.md#ratings)
- [reportByBiker](Order.md#reportbybiker)
- [serviceCost](Order.md#servicecost)
- [status](Order.md#status)
- [tip](Order.md#tip)
- [totalCost](Order.md#totalcost)

## Properties

### bikerId

• **bikerId**: `string`

Firebase User Id del biker (de firebase auth)

#### Defined in

[src/order/order.ts:82](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L82)

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

[src/order/order.ts:79](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L79)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/order/order.ts:118](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L118)

___

### customerFirstName

• **customerFirstName**: `string`

nombre completo del cliente

#### Defined in

[src/order/order.ts:127](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L127)

___

### customerId

• **customerId**: `string`

Firebase User Id del usuario (de firebase auth)

#### Defined in

[src/order/order.ts:76](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L76)

___

### customerLastName

• **customerLastName**: `string`

apellidos del cliente

#### Defined in

[src/order/order.ts:130](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L130)

___

### deliveryLocation

• **deliveryLocation**: `Coords`

coordenadas de le entrega (se sacan de la ubicacion actual del Customer)

#### Defined in

[src/order/order.ts:121](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L121)

___

### destinationAddress

• **destinationAddress**: `string`

Direccion de entrega de la orden

#### Defined in

[src/order/order.ts:106](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L106)

___

### distance

• **distance**: `number`

Distancia entre la direccion de origen y destino

#### Defined in

[src/order/order.ts:112](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L112)

___

### items

• **items**: [`OrderItem`](OrderItem.md)[]

lista de items en la orden - ver [OrderItem](OrderItem.md)

#### Defined in

[src/order/order.ts:91](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L91)

___

### itemsCost

• **itemsCost**: `number`

Costo de los items de la orden (sin envio)

#### Defined in

[src/order/order.ts:97](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L97)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/order/order.ts:124](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L124)

___

### methodOfPayment

• **methodOfPayment**: [`PaymentMethod`](../modules.md#paymentmethod)

Metodo de pago de la orden - ver [PaymentMethod](../modules.md#paymentmethod)

#### Defined in

[src/order/order.ts:88](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L88)

___

### originAddress

• **originAddress**: `string`

Direccion de origen de la orden

#### Defined in

[src/order/order.ts:109](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L109)

___

### ratings

• **ratings**: `Rating`[]

Calificanes de las órdenes

#### Defined in

[src/order/order.ts:115](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L115)

___

### reportByBiker

• **reportByBiker**: `string`

Reporte del ciclista

#### Defined in

[src/order/order.ts:133](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L133)

___

### serviceCost

• **serviceCost**: `number`

Costo del envio

#### Defined in

[src/order/order.ts:100](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L100)

___

### status

• **status**: [`OrderStatus`](../modules.md#orderstatus)

Status de la orden - ver [OrderStatus](../modules.md#orderstatus)

#### Defined in

[src/order/order.ts:85](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L85)

___

### tip

• **tip**: `number`

Propina para el ciclista

#### Defined in

[src/order/order.ts:103](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L103)

___

### totalCost

• **totalCost**: `number`

Costo total de la orden

#### Defined in

[src/order/order.ts:94](https://github.com/gatitolabs/ride-dbtypes/blob/c1fc7c5/src/order/order.ts#L94)
