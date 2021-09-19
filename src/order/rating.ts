/**
 * Puntaje (rating) de una orden especifica
 * */
export interface Rating {
  /** Id del documento con la informacion del usuario (no de firebase auth) */
  customerId: string;

  /** Id del documento con la informacion del negocio (no de firebase auth) */
  businessId: string;

  /** Id del documento con la informacion del ciclista (no de firebase auth) */
  bikerId: string;

  /** Fecha de la orden */
  orderDate: number;

  /** Nombre completo del usuario que asigno este puntaje */
  userName: string;

  /** Puntaje */
  numericRating: number;

  /** Comentario del usuario asociado a este puntaje */
  comment: string;

  /** fecha y hora de creacion */
  created: number;

  /** fecha y hora de ultima actualizacion */
  lastUpdate: number;
}

/**
 * Promedio de ratings por negocio
 * Calculado automaticamente por un Cloud Function
 */
export interface AverageRating {
  /** Id del documento con la informacion del negocio (no de firebase auth) */
  businessId: string;

  /** Puntaje promedio =>  sumOfRatings / numberOfRatings */
  average: number;

  /** Suma total de todos los ratings asignados a este negocio */
  sumOfRatings: number;

  /** Cantidad de ratings asignados a este negocio */
  numberOfRatings: number;

  /** fecha y hora de creacion */
  created: number;

  /** fecha y hora de ultima actualizacion */
  lastUpdate: number;
}
