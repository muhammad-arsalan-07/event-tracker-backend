// src/events/events.controller.ts
import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Headers, UnauthorizedException } from '@nestjs/common';
import { CreateEventDto } from './dto/event.dto';
import { EventsService } from './event.service';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post('save')
  saveEvent(@Body() createEventDto: CreateEventDto, @Headers() headers: {authorization: string}) {
    if(headers?.authorization) {
      return this.eventsService.saveEvent(createEventDto, headers?.authorization);
    } else {
      throw new UnauthorizedException("Something went wrong")
    }
  }

  @Get('saved')
  getSavedEvents(@Headers() headers: {authorization: string}) {
    if(headers?.authorization) {
      return this.eventsService.getSavedEvents(headers?.authorization);
    } else {
      throw new UnauthorizedException("Something went wrong")
    }
  }
}
