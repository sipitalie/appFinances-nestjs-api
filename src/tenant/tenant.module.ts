import { Global, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';
import { Report } from 'src/report/entities/report.entity';
import { TenantService } from './tenant/tenant.service';

@Global()
@Module({
  imports: [SequelizeModule.forFeature([Account])],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}
