import Axios, { AxiosRequestConfig  } from "axios";
import { mergeRight } from "ramda";
import Api from "../core/api.core";


export class ExperiencesRepository extends Api {

  protected readonly endpoints = {
    search: '/posts',
    byId: '/{experienceId}',
    byName: '/{experienceName}',
  }

  constructor (baseOptions: AxiosRequestConfig = {}){
    super(mergeRight({baseURL:"https://jsonplaceholder.typicode.com"}, baseOptions));
  }

  async search(){
    return this.get(this.endpoints.search).then((response) => response.data);
  }
}

export default new ExperiencesRepository();
