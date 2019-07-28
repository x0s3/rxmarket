export enum RestaurantRole {
  DELIVERY = 'Delivery',
  LOCAL = 'Local'
}

export enum RestaurantCategory {
  HEALTHY = 'Healthy',
  VEGAN = 'Vegan',
  ITALIAN = 'Italian',
  FAST_FOOD = 'Fast Food',
  INDIAN = 'Indian',
  SPANISH = 'Spanish '
}

export interface IRestaurant {
  readonly id: number;
  readonly name: string;
  readonly phone?: string;
  readonly email?: string;
  readonly rate: number;
  readonly description?: string;
  readonly image?: string;
  readonly roles: RestaurantRole[];
  readonly categories?: RestaurantCategory[];
}
