/**
 * Status de la Orden
 * Pending: orden creada por el usuario final, a la espera de que RIDE asigne un costo de envío Y confirmar que el negocio puede hacerse cargo del pedido
 * AcceptedByClient: cliente acepta las condiciones y costo del envío, el negocio todavía necesita aprobar que puede encargarse de la orden.
 * Processing: el usuario final aceptó el precio de envío Y el negocio se encuentra preparando el pedido.  Todavía no se le ha entregado el pedido al ciclista.
 * AssignedToBiker: orden asignada a ciclista, pero todavía no la ha retirado del negocio
 * InTransit: el ciclista retiró el pedido y se dispone a ir a dejarlo
 * Arriving: el ciclista está a menos de 500mts del destino (opcional, nice to have)
 * Finished: pedido entregado satisfactoriamente al cliente (este evento lo dispara el ciclista)
 * RatedByClient: pedido tiene un review del usuario (este evento lo dispara el cliente)
 * Rejected: Pedido rechazado
 * */
export type OrderStatus =
  | 'Pending'
  | 'AcceptedByClient'
  | 'Processing'
  | 'AssignedToBiker'
  | 'InTransit'
  | 'Arriving'
  | 'Finished'
  | 'RatedByClient'
  | 'Rejected';

/** Metodos de pago */
export type PaymentMethod = 'SINPE' | 'Cash';

/**
 * Representa un item dentro de una orden.  La informacion se copia de la
 * coleccion de productos.  Si el producto es borrado, este item persiste
 * como informacion historica de las ordenes de un usuario.
 */
export interface OrderItem {
  /** Id del producto (de la coleccion de productos - puede ser de un producto borrado) */
  productId: string;
  /** nombre del producto */
  name: string;
  /** costo del producto */
  cost: number;
  /** notas para el producto dentro de la orden */
  notes: string;
}

/**
 * Representa una orden dentro del sistema
 */
export interface Order {
  /** Firebase User Id del usuario (de firebase auth) */
  customerId: string;

  /** Firebase User Id del negocio (de firebase auth) */
  businessId: string;

  /** Firebase User Id del biker (de firebase auth) */
  bikerId: string;

  /** Status de la orden - ver {@link OrderStatus} */
  status: OrderStatus;

  /** Metodo de pago de la orden - ver {@link PaymentMethod} */
  methodOfPayment: PaymentMethod;

  /** lista de items en la orden - ver {@link OrderItem} */
  items: OrderItem[];

  /** Costo total de la orden */
  totalCost: number;

  /** Costo de los items de la orden (sin envio) */
  itemsCost: number;

  /** Costo del envio */
  serviceCost: number;

  /** Direccion de entrega de la orden */
  destinationAddress: string;

  /** Direccion de origen de la orden */
  originAddress: string;

  /** Distancia entre la direccion de origen y destino */
  distance: number;

  /** Puntaje de la orden (copiado de Rating) */
  ratingScore: number;

  /** fecha y hora de creacion */
  created: number;

  /** fecha y hora de ultima actualizacion */
  lastUpdate: number;
}
