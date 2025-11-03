import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.API_KEY)
    return 'Hello Worldteste!';
  }


 getK8s(): string {

    return 'rodando no k8s!';
  }



}
