import { Controller, Get, UseGuards } from '@nestjs/common';
import { TenantService } from '../../../tenant/tenant/tenant.service';
import { TenantGuard } from '../../../tenant/tenant.guard';
import { JwtAuthGard } from '../../../auth/jwt-auth.guard';

@UseGuards(JwtAuthGard, TenantGuard)
@Controller('my-account')
export class MyAccountController {
  constructor(private tenantService: TenantService) {}
  @Get()
  find() {
    return this.tenantService.tenant;
  }
}
