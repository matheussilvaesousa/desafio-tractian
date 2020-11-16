import axios from "axios";

export default function api() {
  return axios.get("http://test.motor.tractian.com/api/test");
}
