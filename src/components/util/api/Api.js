import axios from "axios";
import { api } from "../../../config";

export class API {
  constructor() {
    this.host = api.base_url;
  }

  getTriggerTimes = function () {
    return axios({
      url: `${this.host}/cron/triggerTimes`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  };

  getCronInfo = function (cron) {
    return axios({
      url: `${this.host}/cron/info`,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "POST",
      data: JSON.stringify({
        cron: cron,
      }),
    });
  };

  getRecords = function (request) {
    return axios({
      url: `${this.host}/cron/getAllCronRecords`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
  };

   uploadFile = function (data) {
    return axios({
      url: `${this.host}/cron/upload`,
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
      method: "POST",
      data
    });
  };
}
