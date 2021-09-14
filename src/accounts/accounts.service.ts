import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account) private AccountnModel: typeof Account) {}

  create(createAccountDto: CreateAccountDto) {
    return this.AccountnModel.create(createAccountDto);
  }

  findAll(): Promise<Account[]> {
    return this.AccountnModel.findAll();
  }

  findOne(id: string): Promise<Account> {
    return this.AccountnModel.findByPk(id, {
      rejectOnEmpty: true,
    });
  }
}
