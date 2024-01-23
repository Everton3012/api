import { Module } from "@nestjs/common";
import { UserController } from "./user.cotroller";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [],
    exports: []
})
export class UserModule {

}