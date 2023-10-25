/** Configuración general sobre RIDE */
export interface ConfigItem {
    /** nombre de la aplicación RIDE */
    name: string;
    /** da información sobre la aplicación RIDE */
    description: string;
    /** número de emergencia para comunicarse con RIDE dashboard */
    phoneEmergency: string;
    /** número para obtener información sobre la aplicación RIDE */
    phoneInformation: string;
    /** correo electrónico oficial de la aplicación RIDE */
    email: string;
    /** URL de facebook oficial de la aplicación RIDE */
    facebook: string;
    /** URL de instagram oficial de la aplicación RIDE */
    instragram: string;
}
