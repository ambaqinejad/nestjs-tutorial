import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: "Valid role is required ['INTERN', 'ENGINEER', 'ADMIN']",
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
