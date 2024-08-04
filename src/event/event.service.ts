// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/event.dto';
import { JwtService } from '@nestjs/jwt';
import { Event } from './schema/event.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>,     private jwtService: JwtService) {}

  async saveEvent(createEventDto: CreateEventDto, token: string) {
    const decodeToken = await this.jwtService.decode(token)
    const createdEvent = new this.eventModel({...createEventDto, userId: decodeToken?.id});
    return createdEvent.save();
  }

  async getSavedEvents(token: string) {
    const decodeToken = await this.jwtService.decode(token)
    console.log(process.env.MONGO_URI)
    return this.eventModel.find({userId: decodeToken?.id});
  }
}
