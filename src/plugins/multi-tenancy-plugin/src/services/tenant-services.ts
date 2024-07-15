import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Tenant } from '../models/Tenant';

@Injectable()
export class TenantService{
    constructor(

        @InjectRepository(Tenant) private readonly tenantRepository: Repository<Tenant>,
    ) {}

    async createTenant(tenantData: Partial<Tenant>): Promise<Tenant> {
        const tenant = this.tenantRepository.create(tenantData);
        return await this.tenantRepository.save(tenant);
    }

    async getTenantById(id: number): Promise<Tenant | undefined> {
        return await this.tenantRepository.findOne( {where: { id }});   
    }
}