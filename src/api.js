import axios from "axios";

export default function api() {
  return axios.get("https://motor.tractian.com/api/test");
}
