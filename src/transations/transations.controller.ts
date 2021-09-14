import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { TransationsService } from './transations.service';
import { CreateTransationDto } from './dto/create-transation.dto';
import { JwtAuthGard } from 'src/auth/jwt-auth.guard';
import { TenantGuard } from 'src/tenant/tenant.guard';
import { TenantService } from 'src/tenant/tenant/tenant.service';

@UseGuards(JwtAuthGard, TenantGuard)
@Controller('transations')
export class TransationsController {
  constructor(
    private readonly transationsService: TransationsService,
    private teantService: TenantService,
  ) {}

  @Post()
  create(@Body() createTransationDto: CreateTransationDto) {
    return this.transationsService.create(createTransationDto);
  }

  @Get()
  findAll(@Req() req: any) {
    /* console.log({
      userTenet: this.teantService.tenant,
      payload: req.user,
    });*/
    return this.transationsService.findAll();
  }
}
