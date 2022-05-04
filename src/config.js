module.exports = {
  api: {
    base_url: "https://cron-tracker-api.herokuapp.com",
  },
  clients: {
    jpm: {
      name: { label: "JPM", value: "jpm" },
      envs: {
        jpm_prod_b: { label: "JPM PROD B", value: "jpm prod b" },
        stage: { label: "STAGE", value: "stage" },
        dev: { label: "DEV", value: "dev" },
        jpm_prod_c: { label: "JPM PROD C", value: "jpm prod c" },
      },
    },
    citi: {
      name: { label: "CITI", value: "citi" },
      envs: {
        citi_prod: { label: "CITI PROD", value: "citi prod" },
        stage: { label: "STAGE", value: "stage" },
        dev: { label: "DEV", value: "dev" },
      },
    },
    gs: {
      name: { label: "GS", value: "gs" },
      envs: {
        gs_prod: { label: "GS PROD", value: "gs prod" },
        stage: { label: "STAGE", value: "stage" },
        dev: { label: "DEV", value: "dev" },
        gs_pre_prod: { label: "GS PRE PROD", value: "gs pre prod" },
      },
    },
  },
  timeZones: {
    ist: {
      name: { label: "India Standard Time", value: "IST" },
      short_name: "IST",
      utc_time_difference: +5.3,
      description: "IST is 5:30 hours ahead of UTC",
    },
    gmt: {
      name: { label: "Greenwich Mean Time", value: "GMT" },
      short_name: "GMT",
      utc_time_difference: +0.0,
      description: "GMT is 0:00 hours ahead of UTC",
    },
    cst: {
      name: { label: "Central Standard Time", value: "CST" },
      short_name: "CST",
      utc_time_difference: -6.0,
      description: "GMT is 6:00 hours behind of UTC",
    },
    est5edt: {
      name: { label: "US Eastern Time", value: "EST5EDT" },
      short_name: "EST5EDT",
      utc_time_difference: -4.0,
      description: "EST5EDT is 4:00 hours behind of UTC",
    },
    asia_singapore: {
      name: { label: "Singapore Standard Time", value: "Asia/Singapore" },
      short_name: "Asia/SingaporeT",
      utc_time_difference: 8.0,
      description: "EST5EDT is 8:00 ahead behind of UTC",
    },
    cet: {
      name: { label: "Central European Time", value: "CET" },
      short_name: "CET",
      utc_time_difference: 1.0,
      description: "EST5EDT is 1:00 ahead behind of UTC",
    },
  },
  exchanges: {
    lch_ltd: { label: "LCH LTD", value: "lch ltd" },
    ice_eu: { label: "ICE EU", value: "ice eu" },
    ice_cc: { label: "ICE CC", value: "ice cc" },
    ice_us: { label: "ICE US", value: "ice us" },
    lch_sa: { label: "LCH SA", value: "lch_sa" },
    sgx: { label: "SGX", value: "sgx" },
  },
  reportCycles: {
    itd: { label: "ITD", value: "itd" },
    eod: { label: "EOD", value: "eod" },
  },
};
