// ! Recuerden hacer export de cada interface
// ! que necesiten exponer para ser consumida
// ! por las aplicaciones de Ionic y Angular

export {Client} from './src/client/client';
export {Biker} from './src/biker/biker';

/** Coleccion de Firebasse para los usuarios clientes */
export const clientColection = 'clients';

/** Coleccion de Firebasse para los usuarios ciclistas */
export const bikerColection = 'bikers';
