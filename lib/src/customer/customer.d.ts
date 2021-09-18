/**
 * Representa un usuario cliente de RIDE
 */
export interface Customer {
    /** nombre completo del usuario */
    firstName: string;
    /** apellidos del usuario */
    lastName: string;
    /** correo electronico del usuario */
    email: string;
    /** id de firebase auth */
    firebaseUserId: string;
    /** numero de celular del usuario */
    cellPhone: string;
    /** URL de la foto de perfil (almacenada en Firebase Storage) */
    profilePhoto: string;
    /** fecha y hora de creacion */
    created: number;
    /** fecha y hora de ultima actualizacion */
    lastUpdate: number;
}
