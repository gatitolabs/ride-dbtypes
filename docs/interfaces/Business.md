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

src/business/business.ts:51

___

### canton

• **canton**: `string`

#### Defined in

src/business/business.ts:34

___

### cellPhone

• **cellPhone**: `string`

numero de celular del negocio

#### Defined in

src/business/business.ts:30

___

### contacts

• **contacts**: [`BusinessContact`](BusinessContact.md)[]

contactos extra fuera del correo y telefono - ver [BusinessContact](BusinessContact.md)

#### Defined in

src/business/business.ts:48

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/business/business.ts:63

___

### description

• **description**: `string`

descripcion del negocio

#### Defined in

src/business/business.ts:57

___

### distrito

• **distrito**: `string`

#### Defined in

src/business/business.ts:36

___

### email

• **email**: `string`

correo electronico del negocio

#### Defined in

src/business/business.ts:54

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

src/business/business.ts:21

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/business/business.ts:66

___

### name

• **name**: `string`

nombre del negocio

#### Defined in

src/business/business.ts:27

___

### otherDirections

• **otherDirections**: `string`

otras señas de la direccion del negocio

#### Defined in

src/business/business.ts:39

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

src/business/business.ts:24

___

### provincia

• **provincia**: `string`

#### Defined in

src/business/business.ts:32

___

### rating

• **rating**: `number`

promedio de ratings del negocio

#### Defined in

src/business/business.ts:45

___

### tagIds

• **tagIds**: [`Tag`](Tag.md)[]

Lista de tags a las que pertenece este negocio - ver [Tag](Tag.md)

#### Defined in

src/business/business.ts:60

___

### userStatus

• **userStatus**: [`UserStatus`](../modules.md#userstatus)

estado de la cuenta de usario de un negocio (si fue o no aprobado por un usuario admin) - ver [UserStatus](../modules.md#userstatus)

#### Defined in

src/business/business.ts:42
