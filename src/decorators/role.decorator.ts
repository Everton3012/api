import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enums/routes.enum';

export const ROLES_ENV = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_ENV, roles);
