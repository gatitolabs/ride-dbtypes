/**
 * Puntaje (rating) de una orden especifica
 * */
export interface Rating {
    /** Firebase User Id del usuario (de firebase auth) */
    customerId: string;
    /** Firebase User Id del negocio (de firebase auth) */
    businessId: string;
    /** Firebase User Id del ciclista (de firebase auth) */
    bikerId: string;
    /** Fecha de la orden */
    orderDate: number;
    /** Nombre completo del usuario que asigno este puntaje */
    userName: string;
    /** Puntaje */
    numericRating: number;
    /** Comentario del usuario asociado a este puntaje */
    comment: string;
    /** Puntaje del API de Analisis de Sentimiento de Google */
    sentimentScore: number;
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
    /** Firebase User Id del negocio (de firebase auth) */
    businessId: string;
    /** Puntaje promedio =>  sumOfRatings / numberOfRatings */
    average: number;
    /** Suma total de todos los ratings asignados a este negocio */
    sumOfRatings: number;
    /** Cantidad de ratings asignados a este negocio */
    numberOfRatings: number;
    /** Suma total de todos los puntajes de sentimiento asignados reviews de este negocio */
    sumOfSentimentScore: number;
    /** Puntaje promedio de sentimiento => sumOfSentimentScore / numberOfRatings */
    averageSentimentScore: number;
    /** fecha y hora de creacion */
    created: number;
    /** fecha y hora de ultima actualizacion */
    lastUpdate: number;
}
