import { group, sleep } from "k6";
import http from "k6/http";


export default function () {

  group("Auth Login", () => {
    http.post('http://localhost:9000/api/v1/auth/login',{
        username: 'admin@gmail.com',
        password: 'Test.123',   
      });
  });

  sleep(1)

}