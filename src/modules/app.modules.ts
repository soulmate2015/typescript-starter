import { Module } from '@nestjs/common';

/* 基础节点 */
// ...

/* 业务节点 */
// import { DemoModule } from './demo/demo.module';
import { AppModule } from './app/app.module';

@Module({
  modules: [
    AppModule
  ],
})
export class ApplicationModule {}