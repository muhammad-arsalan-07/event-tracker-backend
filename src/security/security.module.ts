import { Module } from '@nestjs/common';
import { SecurityController } from './security.controller';
import { SecurityService } from './security.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/security.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name:User.name, schema: UserSchema }]),],
  controllers: [SecurityController],
  providers: [SecurityService],
})

export class SecurityModule {}