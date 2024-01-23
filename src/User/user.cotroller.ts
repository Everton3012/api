import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

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
    async create(@Body() body) {
        return {body};
    }

    @Put(":id")
    async update(@Body() body,@Param() params){
        return {
            method: "put",
            body,
            params
        }
    }

    @Patch(":id")
    async updatePartial(@Body() body, @Param() params){
        return {
            method: "patch",
            body,
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