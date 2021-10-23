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
- [BusinessContactType](modules.md#businesscontacttype)
- [OrderStatus](modules.md#orderstatus)
- [PaymentMethod](modules.md#paymentmethod)
- [UserStatus](modules.md#userstatus)

## Type aliases

### AdminRole

Ƭ **AdminRole**: ``"Full"`` \| ``"Other"``

Tipo de usuario adminsitrador

#### Defined in

src/admin/admin.ts:6

___

### BikerStatus

Ƭ **BikerStatus**: ``"Disconnected"`` \| ``"Available"`` \| ``"Delivering"``

Si el usuario ciclista esta disponible o no para hacer entregas

#### Defined in

src/biker/biker.ts:4

___

### BusinessContactType

Ƭ **BusinessContactType**: ``"Facebook"`` \| ``"Instagram"`` \| ``"Website"`` \| ``"Other Phone"`` \| ``"Fax"``

tipo del contacto adicional, como redes sociales o sitio web

#### Defined in

src/business/business.ts:5

___

### OrderStatus

Ƭ **OrderStatus**: ``"Processing"`` \| ``"Sent"`` \| ``"InTransit"`` \| ``"Arriving"`` \| ``"Finished"`` \| ``"Rejected"``

Status de la Orden

#### Defined in

src/order/order.ts:2

___

### PaymentMethod

Ƭ **PaymentMethod**: ``"SINPE"`` \| ``"Cash"``

Metodos de pago

#### Defined in

src/order/order.ts:11

___

### UserStatus

Ƭ **UserStatus**: ``"Pending"`` \| ``"Accepted"`` \| ``"Rejected"``

Status de la cuenta de usuario.  Aplica para
Bikers, Admin y Business

#### Defined in

src/other/shared.ts:5
