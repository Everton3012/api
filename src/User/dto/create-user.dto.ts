import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;
  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  birthAT: string;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
  })
  password: string;
}
