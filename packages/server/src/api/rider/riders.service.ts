import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { Rider } from './riders.entity';

@Injectable()
export class RidersService {
  constructor(
    @InjectRepository(Rider)
    private readonly riderRepository: Repository<Rider>
  ) {}

  findAll({ take = 10, skip = 0 }): Observable<Rider[]> {
    return from(
      this.riderRepository.find({
        take,
        skip
      })
    );
  }

  findOneById(id: number): Observable<Rider> {
    return from(this.riderRepository.findOneOrFail({ id }));
  }

  findByQuery(query: string): Observable<Rider[]> {
    return from(
      this.riderRepository.find({
        where: {
          name: query
        }
      })
    );
  }

  updateGeoPosition(data: any): Observable<UpdateResult> {
    return from(
      this.riderRepository.update({ id: 1 }, { lastName: 'xose god' })
    );
  }
}
