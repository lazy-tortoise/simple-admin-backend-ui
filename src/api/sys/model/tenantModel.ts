import { BaseListResp } from '@/api/model/baseModel';

/**
 *  @description: Tenant info response
 */
export interface TenantInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  tenantId?: number;
  name?: string;
}

/**
 *  @description: Tenant list response
 */

export type TenantListResp = BaseListResp<TenantInfo>;
