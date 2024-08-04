// src/events/schemas/event.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop()
  name: string;

  @Prop()
  date: string;

  @Prop()
  location: string;

  @Prop()
  description: string;

  @Prop()
  userId: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
