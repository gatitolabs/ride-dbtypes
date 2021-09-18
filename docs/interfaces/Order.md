[ride-dbtypes](../README.md) / [Exports](../modules.md) / Order

# Interface: Order

Representa una orden dentro del sistema

## Table of contents

### Properties

- [bikerId](Order.md#bikerid)
- [businessId](Order.md#businessid)
- [created](Order.md#created)
- [customerId](Order.md#customerid)
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

Id del documento con la informacion del ciclista (no de firebase auth)

#### Defined in

src/order/order.ts:40

___

### businessId

• **businessId**: `string`

Id del documento con la informacion del negocio (no de firebase auth)

#### Defined in

src/order/order.ts:37

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/order/order.ts:73

___

### customerId

• **customerId**: `string`

Id del documento con la informacion del usuario (no de firebase auth)

#### Defined in

src/order/order.ts:34

___

### destinationAddress

• **destinationAddress**: `string`

Direccion de entrega de la orden

#### Defined in

src/order/order.ts:61

___

### distance

• **distance**: `number`

Distancia entre la direccion de origen y destino

#### Defined in

src/order/order.ts:67

___

### items

• **items**: [`OrderItem`](OrderItem.md)[]

lista de items en la orden - ver [OrderItem](OrderItem.md)

#### Defined in

src/order/order.ts:49

___

### itemsCost

• **itemsCost**: `number`

Costo de los items de la orden (sin envio)

#### Defined in

src/order/order.ts:55

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/order/order.ts:76

___

### methodOfPayment

• **methodOfPayment**: [`PaymentMethod`](../modules.md#paymentmethod)

Metodo de pago de la orden - ver [PaymentMethod](../modules.md#paymentmethod)

#### Defined in

src/order/order.ts:46

___

### originAddress

• **originAddress**: `string`

Direccion de origen de la orden

#### Defined in

src/order/order.ts:64

___

### ratingScore

• **ratingScore**: `number`

Puntaje de la orden (copiado de Rating)

#### Defined in

src/order/order.ts:70

___

### serviceCost

• **serviceCost**: `number`

Costo del envio

#### Defined in

src/order/order.ts:58

___

### status

• **status**: [`OrderStatus`](../modules.md#orderstatus)

Status de la orden - ver [OrderStatus](../modules.md#orderstatus)

#### Defined in

src/order/order.ts:43

___

### totalCost

• **totalCost**: `number`

Costo total de la orden

#### Defined in

src/order/order.ts:52
