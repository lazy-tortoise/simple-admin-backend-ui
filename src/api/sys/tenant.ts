import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { BaseDataResp, BaseListReq, BaseResp, BaseIDsReq, BaseIDReq } from '@/api/model/baseModel';
import { TenantInfo, TenantListResp } from './model/tenantModel';

enum Api {
  CreateTenant = '/sys-api/tenant/create',
  UpdateTenant = '/sys-api/tenant/update',
  GetTenantList = '/sys-api/tenant/list',
  DeleteTenant = '/sys-api/tenant/delete',
  GetTenantById = '/sys-apii/tenant',
}

/**
 * @description: Get tenant list
 */

export const getTenantList = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TenantListResp>>(
    { url: Api.GetTenantList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Create a new tenant
 */
export const createTenant = (params: TenantInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.CreateTenant, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Update the tenant
 */
export const updateTenant = (params: TenantInfo, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.UpdateTenant, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Delete tenants
 */
export const deleteTenant = (params: BaseIDsReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseResp>(
    { url: Api.DeleteTenant, params: params },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
};

/**
 *  @description: Get tenant By ID
 */
export const getTenantById = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<TenantInfo>>(
    { url: Api.GetTenantById, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
