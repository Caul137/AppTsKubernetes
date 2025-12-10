import { Injectable } from '@nestjs/common';
@Injectable()
export class HealthService {
  checkHealth(): string {
   console.log("Saude da aplicação ok")
    return 'ok!';
  }


 checkReady(): string {
    console.log("Saude da aplicação ok")
    return 'ok!';
  }



}
