import * as user from './user';
import * as mail from './mail';
import * as otp from './otp';
import * as file from './file';
import * as category from './category';
import * as subCategory from './subcategory';
import * as village from './village';
import * as tehsil from './tehsil';
import * as district from './district';
import * as state from './state';
import * as modules from './modules';
import * as permission from './permission';
import * as role from './role';
import * as vendor from './vendor';
import * as asset from './asset';
import * as customer from './customer';
import * as defective from './defective';
import * as issue from './issue';
import * as mcc from './mcc';
import * as mpp from './mpp';
import * as request from './request';
import * as service from './services';
import * as ticket from './tickets';

export * from './user';
export * from './mail';
export * from './otp';
export * from './file';

export * from './category';
export * from './subcategory';

export * from './village';
export * from './tehsil';
export * from './district';
export * from './state';

export * from './modules';
export * from './permission';
export * from './role';

export * from './vendor';
export * from './asset';
export * from './customer';
export * from './defective';
export * from './issue';
export * from './mcc';
export * from './mpp';
export * from './request';
export * from './services';
export * from './tickets';

export const allModels = {
  ...user,
  ...mail,
  ...otp,
  ...file,
  ...category,
  ...subCategory,
  ...village,
  ...tehsil,
  ...district,
  ...state,
  ...modules,
  ...permission,
  ...role,
  ...vendor,
  ...asset,
  ...customer,
  ...defective,
  ...issue,
  ...mcc,
  ...mpp,
  ...request,
  ...service,
  ...ticket,
};
