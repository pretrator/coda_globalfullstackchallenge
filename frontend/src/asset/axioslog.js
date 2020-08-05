import axios from "axios";
import * as AxiosLogger from "axios-logger";

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger);