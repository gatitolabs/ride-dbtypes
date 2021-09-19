/**
 * Tipo de usuario adminsitrador
 */
export declare type AdminRole = 'Full' | 'Other';
/**
 * Representa un usuario administrador del sistema
 */
export interface AdminUser {
    /** id de firebase auth */
    firebaseUserId: string;
    /** nombre */
    firstName: string;
    /** apellidos */
    lastName: string;
    /** correo electronico */
    email: string;
    /** URL de la foto de perfil (almacenada en Firebase Storage) */
    profilePhoto: string;
    /** rol del admin - ver {@link AdminRole}*/
    adminRole: AdminRole;
    /** fecha y hora de creacion */
    created: number;
    /** fecha y hora de ultima actualizacion */
    lastUpdate: number;
}