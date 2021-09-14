import { TenantGuard } from './../tenant/tenant.guard';
import { JwtAuthGard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
//import { MessagePattern, Payload } from '@nestjs/microservices';
//import { KafkaMessage } from '@nestjs/microservices/external/kafka.interface';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportsService: ReportService) {}

  @UseGuards(JwtAuthGard, TenantGuard)
  @Post()
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @UseGuards(JwtAuthGard, TenantGuard)
  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  /*@MessagePattern('reports-generated')
  async reportGenerated(@Payload() message: KafkaMessage) {
    const { id, ...other } = message.value as any;
    await this.reportsService.update(id, other);
  }*/
}
