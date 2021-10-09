[ride-dbtypes](../README.md) / [Exports](../modules.md) / Product

# Interface: Product

Representa un producto suministrado por un negocio.
Por el momento NO tiene variantes (como talla o color).
Si se necesitaran variantes, es necesario crear varios productos
Por ejemplo: camiseta blanca, camiseta azul, camiseta verde, etc

## Table of contents

### Properties

- [businessId](Product.md#businessid)
- [cost](Product.md#cost)
- [created](Product.md#created)
- [description](Product.md#description)
- [lastUpdate](Product.md#lastupdate)
- [name](Product.md#name)
- [productPhoto](Product.md#productphoto)
- [tags](Product.md#tags)

## Properties

### businessId

• **businessId**: `string`

Id del documento con la informacion del negocio (no de firebase auth)

#### Defined in

[src/product/product.ts:20](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L20)

___

### cost

• **cost**: `number`

Costo unitario del producto

#### Defined in

[src/product/product.ts:17](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L17)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/product/product.ts:29](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L29)

___

### description

• **description**: `string`

Descripcion del producto

#### Defined in

[src/product/product.ts:14](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L14)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/product/product.ts:32](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L32)

___

### name

• **name**: `string`

Nombre del producto

#### Defined in

[src/product/product.ts:11](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L11)

___

### productPhoto

• **productPhoto**: `string`

URL de la foto de producto (almacenada en Firebase Storage)

#### Defined in

[src/product/product.ts:26](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L26)

___

### tags

• **tags**: [`Tag`](Tag.md)[]

Lista de Etiquetas a las que pertenece el producto - ver [Tag](Tag.md)

#### Defined in

[src/product/product.ts:23](https://github.com/gatitolabs/ride-dbtypes/blob/b537781/src/product/product.ts#L23)
