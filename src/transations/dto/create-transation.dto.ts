import {
  IsNotEmpty,
  IsISO8601,
  IsString,
  MaxLength,
  IsIn,
} from 'class-validator';
import {
  TransactionType,
  TransactionCategory,
  TransactionTypeList,
  TransactionCategoryList,
} from '../entities/transation.entity';
export class CreateTransationDto {
  @IsISO8601()
  @IsNotEmpty()
  payment_date: Date;

  @MaxLength(250)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsIn(TransactionCategoryList)
  @IsNotEmpty()
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsIn(TransactionTypeList)
  @IsNotEmpty()
  type: TransactionType;
}
