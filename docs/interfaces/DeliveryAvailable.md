[ride-dbtypes](../README.md) / [Exports](../modules.md) / DeliveryAvailable

# Interface: DeliveryAvailable

Representa ordenes que estan disponibles para ser tomadas por
usuarios ciclistas.  Posiblemente sea generada por un Cloud Function
que se dispara cuando se crean ordenes

## Table of contents

### Properties

- [deliveryAddress](DeliveryAvailable.md#deliveryaddress)
- [description](DeliveryAvailable.md#description)
- [orderId](DeliveryAvailable.md#orderid)
- [originAddress](DeliveryAvailable.md#originaddress)

## Properties

### deliveryAddress

• **deliveryAddress**: `string`

Direccion de entrega (copiada de la coleccion de ordenes)

#### Defined in

src/other/deliveryAvailable.ts:17

___

### description

• **description**: `string`

Descripcion de la orden (copiado de la coleccion de ordenes)

#### Defined in

src/other/deliveryAvailable.ts:11

___

### orderId

• **orderId**: `string`

Id de la orden

#### Defined in

src/other/deliveryAvailable.ts:8

___

### originAddress

• **originAddress**: `string`

Direccion de origen (copiada de la coleccion de ordenes)

#### Defined in

src/other/deliveryAvailable.ts:14
