import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TenantService } from 'src/tenant/tenant/tenant.service';

import { CreateTransationDto } from './dto/create-transation.dto';
import { Transation } from './entities/transation.entity';

@Injectable()
export class TransationsService {
  constructor(
    @InjectModel(Transation) private TransactionModel: typeof Transation,
    private tenantService: TenantService,
  ) {}
  create(createTransationDto: CreateTransationDto) {
    return this.TransactionModel.create({
      ...createTransationDto,
      account_id: this.tenantService.tenant.id,
    });
  }

  findAll(): Promise<Transation[]> {
    return this.TransactionModel.findAll({
      where: {
        account_id: this.tenantService.tenant.id,
      },
    });
  }
}
