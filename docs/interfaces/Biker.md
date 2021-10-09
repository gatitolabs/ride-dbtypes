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

• **bikerUserStatus**: [`BikerUserStatus`](../modules.md#bikeruserstatus)

estado de la cuenta de usario ciclista (si fue o no aprobado por un usuario admin) - ver [BikerUserStatus](../modules.md#bikeruserstatus)

#### Defined in

[src/biker/biker.ts:45](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L45)

___

### canton

• **canton**: `string`

#### Defined in

[src/biker/biker.ts:34](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L34)

___

### cellPhone

• **cellPhone**: `string`

numero de celular

#### Defined in

[src/biker/biker.ts:24](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L24)

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

[src/biker/biker.ts:39](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L39)

___

### distrito

• **distrito**: `string`

#### Defined in

[src/biker/biker.ts:36](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L36)

___

### email

• **email**: `string`

correo electronico

#### Defined in

[src/biker/biker.ts:21](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L21)

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

[src/biker/biker.ts:12](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L12)

___

### firstName

• **firstName**: `string`

nombre

#### Defined in

[src/biker/biker.ts:15](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L15)

___

### lastName

• **lastName**: `string`

apellidos

#### Defined in

[src/biker/biker.ts:18](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L18)

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

[src/biker/biker.ts:42](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L42)

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

[src/biker/biker.ts:27](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L27)

___

### provincia

• **provincia**: `string`

#### Defined in

[src/biker/biker.ts:32](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L32)

___

### status

• **status**: [`BikerStatus`](../modules.md#bikerstatus)

status del ciclista, relacionado con la capacidad de recibir ordenes - ver [BikerStatus](../modules.md#bikerstatus)

#### Defined in

[src/biker/biker.ts:30](https://github.com/gatitolabs/ride-dbtypes/blob/0b20e32/src/biker/biker.ts#L30)
