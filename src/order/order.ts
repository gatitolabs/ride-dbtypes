/** Status de la Orden */
export type OrderStatus =
  | 'Processing'
  | 'Sent'
  | 'InTransit'
  | 'Arriving'
  | 'Finished'
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
  /** Id del documento con la informacion del usuario (no de firebase auth) */
  customerId: string;

  /** Id del documento con la informacion del negocio (no de firebase auth) */
  businessId: string;

  /** Id del documento con la informacion del ciclista (no de firebase auth) */
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
