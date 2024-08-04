import { Body, Controller, Post } from '@nestjs/common';
import { SecurityService } from './security.service';
import { LoginRequest, SignupRequest } from './dto/security.dto';

@Controller('security')
export class SecurityController {
  constructor(private readonly securityService: SecurityService) {}

    @Post("signup")
    Signup(@Body() body : SignupRequest) {
        return this.securityService.Signup(body)
    }

    @Post("login")
    login(@Body() body : LoginRequest) {
        return this.securityService.login(body)
    }
}