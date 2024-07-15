import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantService } from '../services/tenant-services';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly tenantService: TenantService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id']; 
    if (tenantId) {
      const tenant = await this.tenantService.getTenantById(parseInt(tenantId as string, 10));
      if (tenant) {
        req['tenant'] = tenant; 
    }
    next();
  }
  }
}