/**
 * Representa un usuario cliente de RIDE
 * por ejemplo
 * ```ts
 * const miCliente:Client = {
 *   firstName: 'Juanito',
 *   lastName: 'Vainas',
 *   email: 'jvainas@mailinator.com'
 * }
 * ```
 */
export interface Client {
    /** nombre completo del usuario */
    firstName: string;
    /** apellidos del usuario */
    lastName: string;
    /** correo electronico del usuario */
    email: string;
}
