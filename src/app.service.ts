import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.API_KEY)
    return 'Hello Worldteste!';
  }


 getK8s(): string {
   const file = createWriteStream('stress.txt')
    for(let i = 0; i <= 10000; i++){
      file.write('loop de stress\n')
    };
    file.end();
    return 'rodando no k8s!';
  }



}
