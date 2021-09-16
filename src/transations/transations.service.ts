import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Account } from 'src/accounts/entities/account.entity';
import { TenantService } from 'src/tenant/tenant/tenant.service';

import { CreateTransationDto } from './dto/create-transation.dto';
import { TransactionType, Transation } from './entities/transation.entity';

@Injectable()
export class TransationsService {
  constructor(
    @InjectModel(Transation) private TransactionModel: typeof Transation,
    @InjectModel(Account) private AccountModel: typeof Account,
    private tenantService: TenantService,
    private sequelize: Sequelize,
  ) {}
  async create(createTransationDto: CreateTransationDto) {
    const atomic = await this.sequelize.transaction();
    try {
      const transaction = await this.TransactionModel.create({
        ...createTransationDto,
        account_id: this.tenantService.tenant.id,
      });
      const account = await this.AccountModel.findByPk(transaction.account_id, {
        lock: atomic.LOCK.UPDATE,
        transaction: atomic,
      });
      const amount =
        createTransationDto.type === TransactionType.DEBIT
          ? -transaction.amount
          : transaction.amount;
      await account.update(
        { balance: account.balance + amount },
        { transaction: atomic },
      );
      await atomic.commit();
      return transaction;
    } catch (err) {
      await atomic.rollback();
      throw err;
    }
  }

  findAll(): Promise<Transation[]> {
    return this.TransactionModel.findAll({
      where: {
        account_id: this.tenantService.tenant.id,
      },
    });
  }
}
