/**
 * Representa ordenes que estan disponibles para ser tomadas por
 * usuarios ciclistas.  Posiblemente sea generada por un Cloud Function
 * que se dispara cuando se crean ordenes
 */
export interface DeliveryAvailable {
    /** Id de la orden */
    orderId: string;
    /** Descripcion de la orden (copiado de la coleccion de ordenes) */
    description: string;
    /** Direccion de origen (copiada de la coleccion de ordenes) */
    originAddress: string;
    /** Direccion de entrega (copiada de la coleccion de ordenes) */
    deliveryAddress: string;
}
