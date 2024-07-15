import { Module } from '@nestjs/common';
import { TenantService } from "./services/tenant-services";
import { Tenant } from "./models/Tenant";
import {TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Tenant])],
    providers: [TenantService],
    exports: [TenantService],
})
export class TenantModule {};

export default TenantModule;