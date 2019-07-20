export enum RestaurantRole {
  DELIVERY = 'DELIVERY_RESTAURANT',
  LOCAL = 'LOCAL_RESTAURANT'
}

export enum RestaurantCategory {
  HEALTHY = 'HEALTHY_RESTAURANT',
  VEGAN = 'VEGAN_RESTAURANT',
  ITALIAN = 'ITALIAN_RESTAURANT',
  FAST_FOOD = 'FAST_FOOD_RESTAURANT',
  INDIAN = 'INDIAN_RESTAURANT',
  SPANISH = 'SPANISH_RESTAURANT '
}

export interface IRestaurant {
  readonly name: string;
  readonly phone: string;
  readonly email?: string;
  readonly rate?: number;
  readonly description?: string;
  readonly roles?: RestaurantRole[];
  readonly categories?: RestaurantCategory[];
}