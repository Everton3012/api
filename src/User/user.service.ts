import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    return await this.prisma.user.create({
      data,
    });
  }
  async list() {
    return await this.prisma.user.findMany();
  }
  async show(id: number) {
    await this.exists(id);
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
  async update(
    id: number,
    { email, name, password, birthAT, role }: UpdateUserDTO,
  ) {
    await this.exists(id);
    const data: any = {};

    if (birthAT) {
      data.birthAT = new Date(birthAT);
    }

    if (email) {
      data.email = email;
    }

    if (name) {
      data.name = name;
    }

    if (password) {
      data.password = password;
    }

    const salt = await bcrypt.genSalt();

    password = await bcrypt.hash(password, salt);


    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async updatePartial(
    id: number,
    { email, name, password, birthAT, role }: UpdatePatchUserDTO,
  ) {
    await this.exists(id);
    const data: any = {};

    if (birthAT) {
      data.birthAT = new Date(birthAT);
    }

    if (email) {
      data.email = email;
    }

    if (name) {
      data.name = name;
    }

    if (password) {
      const salt = await bcrypt.genSalt();

      data.password = await bcrypt.hash(password, salt);
    }

    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
  async remove(id: number) {
    await this.exists(id);
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
  async exists(id: number) {
    if (
      !(await this.prisma.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário ${id} não existe`);
    }
  }
}
