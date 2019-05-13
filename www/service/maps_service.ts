import axios from './axios';
import { MAPS_ENDPOINT } from './service_endpoint';
import Map from './map_interface';

export default class Maps_service {
  static getMap(id: string = ""): Promise<any> {
    return axios.get(MAPS_ENDPOINT + id);
  }

  static deleteMap(id: string): Promise<any> {
    return axios.delete(MAPS_ENDPOINT + id);
  }

  static postMap(map: Map): Promise<any> {
    return axios.post(MAPS_ENDPOINT, map);
  }

  static getMaps(): Promise<any> {
    return axios.get(MAPS_ENDPOINT);
  }
}
