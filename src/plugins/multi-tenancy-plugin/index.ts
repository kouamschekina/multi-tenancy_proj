import { TenantModule } from "./src";

export default async function (container: any){
    container.registerModule(TenantModule);
}