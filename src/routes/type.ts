import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import { IRole } from '~/interfaces';

export interface CustomRouteObj
  extends Omit<IndexRouteObject, 'index' | 'children'>,
    Omit<NonIndexRouteObject, 'index' | 'children'> {
  auth?: {
    requireAuth: boolean;
    role?: IRole;
  };
  children?: CustomRouteObj[];
  idx: number;
}
