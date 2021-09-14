import { Module } from '@nestjs/common';
import { TransationsService } from './transations.service';
import { TransationsController } from './transations.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transation } from './entities/transation.entity';
import { Account } from 'src/accounts/entities/account.entity';

@Module({
  imports: [SequelizeModule.forFeature([Transation, Account])],
  controllers: [TransationsController],
  providers: [TransationsService],
})
export class TransationsModule {}
