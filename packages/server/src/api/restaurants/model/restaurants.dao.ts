import { from } from 'rxjs';
import {
  Restaurant,
  RESTAURANT_DETAIL_FIELDS,
  RESTAURANT_PUBLIC_FIELDS
} from './restaurants.model';

export namespace RestaurantDao {
  export const model = new Restaurant().getModelForClass(Restaurant);

  export const findById = (id: string) =>
    from(
      model
        .findById(id)
        .select(RESTAURANT_DETAIL_FIELDS)
        .exec()
    );

  export const findByIdPublic = (id: string) =>
    from(
      model
        .findById(id)
        .select(RESTAURANT_DETAIL_FIELDS)
        .exec()
    );

  export const findAll = () =>
    from(
      model
        .find()
        .select(RESTAURANT_PUBLIC_FIELDS)
        .exec()
    );

  export const findByCategory = () => from(model.find().select({}));

  export const findAllPublic = () =>
    from(
      model
        .find()
        .select(RESTAURANT_PUBLIC_FIELDS)
        .exec()
    );
}
