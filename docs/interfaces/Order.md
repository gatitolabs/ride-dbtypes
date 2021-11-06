[ride-dbtypes](../README.md) / [Exports](../modules.md) / Order

# Interface: Order

Representa una orden dentro del sistema

## Table of contents

### Properties

- [bikerId](Order.md#bikerid)
- [businessId](Order.md#businessid)
- [created](Order.md#created)
- [customerId](Order.md#customerid)
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

src/order/order.ts:56

___

### businessId

• **businessId**: `string`

Firebase User Id del negocio (de firebase auth)

#### Defined in

src/order/order.ts:53

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/order/order.ts:89

___

### customerId

• **customerId**: `string`

Firebase User Id del usuario (de firebase auth)

#### Defined in

src/order/order.ts:50

___

### deliveryLocation

• **deliveryLocation**: `Coords`

coordenadas de le entrega (se sacan de la ubicacion actual del Customer)

#### Defined in

src/order/order.ts:92

___

### destinationAddress

• **destinationAddress**: `string`

Direccion de entrega de la orden

#### Defined in

src/order/order.ts:77

___

### distance

• **distance**: `number`

Distancia entre la direccion de origen y destino

#### Defined in

src/order/order.ts:83

___

### items

• **items**: [`OrderItem`](OrderItem.md)[]

lista de items en la orden - ver [OrderItem](OrderItem.md)

#### Defined in

src/order/order.ts:65

___

### itemsCost

• **itemsCost**: `number`

Costo de los items de la orden (sin envio)

#### Defined in

src/order/order.ts:71

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/order/order.ts:95

___

### methodOfPayment

• **methodOfPayment**: [`PaymentMethod`](../modules.md#paymentmethod)

Metodo de pago de la orden - ver [PaymentMethod](../modules.md#paymentmethod)

#### Defined in

src/order/order.ts:62

___

### originAddress

• **originAddress**: `string`

Direccion de origen de la orden

#### Defined in

src/order/order.ts:80

___

### ratingScore

• **ratingScore**: `number`

Puntaje de la orden (copiado de Rating)

#### Defined in

src/order/order.ts:86

___

### serviceCost

• **serviceCost**: `number`

Costo del envio

#### Defined in

src/order/order.ts:74

___

### status

• **status**: [`OrderStatus`](../modules.md#orderstatus)

Status de la orden - ver [OrderStatus](../modules.md#orderstatus)

#### Defined in

src/order/order.ts:59

___

### totalCost

• **totalCost**: `number`

Costo total de la orden

#### Defined in

src/order/order.ts:68
