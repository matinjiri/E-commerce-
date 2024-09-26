import { AuthenticationMethod } from "src/common/enums/auth/athentication-method.enum";
import { ILoginStrategyFactory } from "../interfaces/login-strategy-factory.interface";
import { ILoginStrategy } from "../interfaces/login-strategy.interface";
import { EmailLoginStrategy } from "../strategies/email-login.strategy";
import { PhoneLoginStrategy } from "../strategies/phone-login.strategy";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginStrategyFactory implements ILoginStrategyFactory {
  constructor(
    private emailLoginStrategy: EmailLoginStrategy,
    private phoneLoginStrategy: PhoneLoginStrategy
  ){}
  create(authenticationMethod: AuthenticationMethod): ILoginStrategy {
    switch (authenticationMethod) {
      case AuthenticationMethod.EMAIL:
        return this.emailLoginStrategy;
      case AuthenticationMethod.PHONE:
        return this.phoneLoginStrategy;
      default:
        throw new Error("Invalid authentication method");
    }
  }
}
