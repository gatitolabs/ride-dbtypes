[ride-dbtypes](../README.md) / [Exports](../modules.md) / Biker

# Interface: Biker

Representa un usuario ciclista del sistema

## Table of contents

### Properties

- [bikerUserStatus](Biker.md#bikeruserstatus)
- [canton](Biker.md#canton)
- [cellPhone](Biker.md#cellphone)
- [created](Biker.md#created)
- [distrito](Biker.md#distrito)
- [email](Biker.md#email)
- [firebaseUserId](Biker.md#firebaseuserid)
- [firstName](Biker.md#firstname)
- [lastName](Biker.md#lastname)
- [lastUpdate](Biker.md#lastupdate)
- [profilePhoto](Biker.md#profilephoto)
- [provincia](Biker.md#provincia)
- [status](Biker.md#status)

## Properties

### bikerUserStatus

• **bikerUserStatus**: [`UserStatus`](../modules.md#userstatus)

estado de la cuenta de usario ciclista (si fue o no aprobado por un usuario admin) - ver [UserStatus](../modules.md#userstatus)

#### Defined in

src/biker/biker.ts:44

___

### canton

• **canton**: `string`

#### Defined in

src/biker/biker.ts:33

___

### cellPhone

• **cellPhone**: `string`

numero de celular

#### Defined in

src/biker/biker.ts:23

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/biker/biker.ts:38

___

### distrito

• **distrito**: `string`

#### Defined in

src/biker/biker.ts:35

___

### email

• **email**: `string`

correo electronico

#### Defined in

src/biker/biker.ts:20

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

src/biker/biker.ts:11

___

### firstName

• **firstName**: `string`

nombre

#### Defined in

src/biker/biker.ts:14

___

### lastName

• **lastName**: `string`

apellidos

#### Defined in

src/biker/biker.ts:17

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/biker/biker.ts:41

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

src/biker/biker.ts:26

___

### provincia

• **provincia**: `string`

#### Defined in

src/biker/biker.ts:31

___

### status

• **status**: [`BikerStatus`](../modules.md#bikerstatus)

status del ciclista, relacionado con la capacidad de recibir ordenes - ver [BikerStatus](../modules.md#bikerstatus)

#### Defined in

src/biker/biker.ts:29
