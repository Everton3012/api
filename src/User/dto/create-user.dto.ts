import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from 'src/enums/routes.enum';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  birthAT: string;

  @IsOptional()
  @IsEnum(Role)
  role: number;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
  })
  password: string;
}
