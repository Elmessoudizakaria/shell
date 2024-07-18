import { LoadRemoteModuleOptions } from '@angular-architects/module-federation';

export const PRODUCT_LOADER: LoadRemoteModuleOptions = {
  type: 'module',
  remoteEntry: 'http://localhost:4201/remoteEntry.js',
  exposedModule: './ProductComponent',
};

export const SEARCH_BAR_LOADER: LoadRemoteModuleOptions = {
  type: 'module',
  remoteEntry: 'http://localhost:4202/remoteEntry.js',
  exposedModule: './SearchComponent',
};
export const SEARCH_CATEGORY_LOADER: LoadRemoteModuleOptions = {
  type: 'module',
  remoteEntry: 'http://localhost:4202/remoteEntry.js',
  exposedModule: './SearchCategoriesMenuComponent',
};
