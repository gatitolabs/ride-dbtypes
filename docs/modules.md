[ride-dbtypes](README.md) / Exports

# ride-dbtypes

## Table of contents

### Enumerations

- [FirestoreCollections](enums/FirestoreCollections.md)

### Interfaces

- [AdminUser](interfaces/AdminUser.md)
- [AverageRating](interfaces/AverageRating.md)
- [Biker](interfaces/Biker.md)
- [Business](interfaces/Business.md)
- [BusinessContact](interfaces/BusinessContact.md)
- [ConfigItem](interfaces/ConfigItem.md)
- [Customer](interfaces/Customer.md)
- [DeliveryAvailable](interfaces/DeliveryAvailable.md)
- [Order](interfaces/Order.md)
- [OrderItem](interfaces/OrderItem.md)
- [Product](interfaces/Product.md)
- [Rating](interfaces/Rating.md)
- [Tag](interfaces/Tag.md)

### Type aliases

- [AdminRole](modules.md#adminrole)
- [BikerStatus](modules.md#bikerstatus)
- [BikerUserStatus](modules.md#bikeruserstatus)
- [BusinessContactType](modules.md#businesscontacttype)
- [BusinessUserStatus](modules.md#businessuserstatus)
- [OrderStatus](modules.md#orderstatus)
- [PaymentMethod](modules.md#paymentmethod)

## Type aliases

### AdminRole

Ƭ **AdminRole**: ``"Full"`` \| ``"Other"``

Tipo de usuario adminsitrador

#### Defined in

[src/admin/admin.ts:7](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/admin/admin.ts#L7)

___

### BikerStatus

Ƭ **BikerStatus**: ``"Disconnected"`` \| ``"Available"`` \| ``"Delivering"``

Si el usuario ciclista esta disponible o no para hacer entregas

#### Defined in

[src/biker/biker.ts:5](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/biker/biker.ts#L5)

___

### BikerUserStatus

Ƭ **BikerUserStatus**: ``"Pending"`` \| ``"Accepted"`` \| ``"Rejected"``

Status de la cuenta de usuario ciclista

#### Defined in

[src/biker/biker.ts:2](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/biker/biker.ts#L2)

___

### BusinessContactType

Ƭ **BusinessContactType**: ``"Facebook"`` \| ``"Instagram"`` \| ``"Website"`` \| ``"Other Phone"`` \| ``"Fax"``

tipo del contacto adicional, como redes sociales o sitio web

#### Defined in

[src/business/business.ts:7](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L7)

___

### BusinessUserStatus

Ƭ **BusinessUserStatus**: ``"Pending"`` \| ``"Accepted"`` \| ``"Rejected"``

Status de la cuenta de usuario de un negocio

#### Defined in

[src/business/business.ts:4](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L4)

___

### OrderStatus

Ƭ **OrderStatus**: ``"Processing"`` \| ``"Sent"`` \| ``"InTransit"`` \| ``"Arriving"`` \| ``"Finished"`` \| ``"Rejected"``

Status de la Orden

#### Defined in

[src/order/order.ts:2](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/order.ts#L2)

___

### PaymentMethod

Ƭ **PaymentMethod**: ``"SINPE"`` \| ``"Cash"``

Metodos de pago

#### Defined in

[src/order/order.ts:11](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/order/order.ts#L11)
