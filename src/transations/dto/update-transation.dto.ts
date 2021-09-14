import { PartialType } from '@nestjs/mapped-types';
import { CreateTransationDto } from './create-transation.dto';

export class UpdateTransationDto extends PartialType(CreateTransationDto) {}
