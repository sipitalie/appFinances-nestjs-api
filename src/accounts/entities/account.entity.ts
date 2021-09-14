import {
  Model,
  Column,
  Table,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript';
import { ToNumber } from '../../common/db/to-number.decorate';
@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @ToNumber
  @Default(0)
  @Column({
    allowNull: false,
    type: DataType.DECIMAL({ precision: 10, scale: 2 }),
  })
  balance: number;

  @Column({ allowNull: false })
  subdomain: string;
}
