[ride-dbtypes](../README.md) / [Exports](../modules.md) / Business

# Interface: Business

Representa un usuario de un negocio del sistema

## Table of contents

### Properties

- [businessType](Business.md#businesstype)
- [canton](Business.md#canton)
- [cellPhone](Business.md#cellphone)
- [contacts](Business.md#contacts)
- [created](Business.md#created)
- [description](Business.md#description)
- [distrito](Business.md#distrito)
- [email](Business.md#email)
- [firebaseUserId](Business.md#firebaseuserid)
- [lastUpdate](Business.md#lastupdate)
- [name](Business.md#name)
- [otherDirections](Business.md#otherdirections)
- [profilePhoto](Business.md#profilephoto)
- [provincia](Business.md#provincia)
- [rating](Business.md#rating)
- [tagIds](Business.md#tagids)
- [userStatus](Business.md#userstatus)

## Properties

### businessType

• **businessType**: `string`

tipo de negocio

#### Defined in

[src/business/business.ts:53](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L53)

___

### canton

• **canton**: `string`

#### Defined in

[src/business/business.ts:36](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L36)

___

### cellPhone

• **cellPhone**: `string`

numero de celular del negocio

#### Defined in

[src/business/business.ts:32](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L32)

___

### contacts

• **contacts**: [`BusinessContact`](BusinessContact.md)[]

contactos extra fuera del correo y telefono - ver [BusinessContact](BusinessContact.md)

#### Defined in

[src/business/business.ts:50](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L50)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/business/business.ts:65](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L65)

___

### description

• **description**: `string`

descripcion del negocio

#### Defined in

[src/business/business.ts:59](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L59)

___

### distrito

• **distrito**: `string`

#### Defined in

[src/business/business.ts:38](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L38)

___

### email

• **email**: `string`

correo electronico del negocio

#### Defined in

[src/business/business.ts:56](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L56)

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

[src/business/business.ts:23](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L23)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/business/business.ts:68](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L68)

___

### name

• **name**: `string`

nombre del negocio

#### Defined in

[src/business/business.ts:29](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L29)

___

### otherDirections

• **otherDirections**: `string`

otras señas de la direccion del negocio

#### Defined in

[src/business/business.ts:41](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L41)

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

[src/business/business.ts:26](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L26)

___

### provincia

• **provincia**: `string`

#### Defined in

[src/business/business.ts:34](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L34)

___

### rating

• **rating**: `number`

promedio de ratings del negocio

#### Defined in

[src/business/business.ts:47](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L47)

___

### tagIds

• **tagIds**: [`Tag`](Tag.md)[]

Lista de tags a las que pertenece este negocio - ver [Tag](Tag.md)

#### Defined in

[src/business/business.ts:62](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L62)

___

### userStatus

• **userStatus**: [`BusinessUserStatus`](../modules.md#businessuserstatus)

estado de la cuenta de usario de un negocio (si fue o no aprobado por un usuario admin) - ver [BusinessUserStatus](../modules.md#businessuserstatus)

#### Defined in

[src/business/business.ts:44](https://github.com/gatitolabs/ride-dbtypes/blob/b7596ca/src/business/business.ts#L44)
