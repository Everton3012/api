import {
  ExecutionContext,
  NotFoundException,
  createParamDecorator,
} from '@nestjs/common';

export const User = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (!request.user) {
      throw new NotFoundException(
        'Usuário não encontrado no Request: User o AuthGuard para obter o usuário',
      );
    } else {
      if (!filter) {
        return request.user;
      } else {
        return request.user[filter];
      }
      return request.user;
    }
  },
);
