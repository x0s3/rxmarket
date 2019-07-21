import { RestaurantCategory, RestaurantRole } from 'core/src/interfaces';
import { arrayProp, prop, Typegoose } from 'typegoose';

export class Restaurant extends Typegoose {
  @prop({ required: true, index: true })
  name?: string;

  @prop({ required: true })
  phone?: string;

  @prop({ required: true })
  email?: string;

  @prop({ default: 0 })
  rate?: number;

  @prop()
  description?: string;

  @prop()
  image?: string;

  @arrayProp({ items: String, enum: RestaurantRole })
  roles?: RestaurantRole[];

  @arrayProp({ items: String, enum: RestaurantCategory })
  categories?: RestaurantCategory[];
}

const RESTAURANT_SECURE_FIELDS = {
  __v: 0
};

export const RESTAURANT_PUBLIC_FIELDS = {
  ...RESTAURANT_SECURE_FIELDS
};

export const RESTAURANT_DETAIL_FIELDS = {
  ...RESTAURANT_SECURE_FIELDS
};
