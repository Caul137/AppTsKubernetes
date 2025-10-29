import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


 getK8s(): string {
    return 'rodando no k8s!';
  }



}
