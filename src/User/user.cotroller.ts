import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller("users")
export class UserController{

    @Get()
    async list(){
        return {users:[]}
    }

    @Get(":id")
    async readOne(@Param() param){
        return {user:{}, param}
    }

    @Post()
    async create(@Body() {email, name, password}: CreateUserDTO) {
        return {email, name, password};
    }

    @Put(":id")
    async update(@Body() {email, name, password}: UpdateUserDTO,@Param() params){
        return {
            method: "put",
            email, name, password,
            params
        }
    }

    @Patch(":id")
    async updatePartial(@Body() {email, name, password}: UpdatePatchUserDTO, @Param() params){
        return {
            method: "patch",
            email, name, password,
            params
        }
    }
    @Delete(":id")
    async delete(@Param() params) {
        return {
            params
        }
    }

}