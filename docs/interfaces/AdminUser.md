[ride-dbtypes](../README.md) / [Exports](../modules.md) / AdminUser

# Interface: AdminUser

Representa un usuario administrador del sistema

## Table of contents

### Properties

- [adminRole](AdminUser.md#adminrole)
- [adminUserStatus](AdminUser.md#adminuserstatus)
- [created](AdminUser.md#created)
- [email](AdminUser.md#email)
- [firebaseUserId](AdminUser.md#firebaseuserid)
- [firstName](AdminUser.md#firstname)
- [lastName](AdminUser.md#lastname)
- [lastUpdate](AdminUser.md#lastupdate)
- [profilePhoto](AdminUser.md#profilephoto)

## Properties

### adminRole

• **adminRole**: [`AdminRole`](../modules.md#adminrole)

rol del admin - ver [AdminRole](../modules.md#adminrole)

#### Defined in

src/admin/admin.ts:29

___

### adminUserStatus

• **adminUserStatus**: `AdminUserStatus`

estado de la cuenta de usario administrado (si fue o no aprobado por un usuario admin ya registrado) - ver {@link AdminUserStatus}

#### Defined in

src/admin/admin.ts:38

___

### created

• **created**: `number`

fecha y hora de creacion

#### Defined in

src/admin/admin.ts:32

___

### email

• **email**: `string`

correo electronico

#### Defined in

src/admin/admin.ts:23

___

### firebaseUserId

• **firebaseUserId**: `string`

id de firebase auth

#### Defined in

src/admin/admin.ts:14

___

### firstName

• **firstName**: `string`

nombre

#### Defined in

src/admin/admin.ts:17

___

### lastName

• **lastName**: `string`

apellidos

#### Defined in

src/admin/admin.ts:20

___

### lastUpdate

• **lastUpdate**: `number`

fecha y hora de ultima actualizacion

#### Defined in

src/admin/admin.ts:35

___

### profilePhoto

• **profilePhoto**: `string`

URL de la foto de perfil (almacenada en Firebase Storage)

#### Defined in

src/admin/admin.ts:26
