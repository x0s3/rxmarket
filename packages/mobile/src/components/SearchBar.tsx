import { StringValidator as stringValidator } from 'core/src/validators';
import React, { useCallback, useRef } from 'react';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import {
  useNavigationComponentDidAppear,
  useNavigationComponentDidDisappear
} from '../hooks/use-navigation';
import { ValidationInput } from './';

interface ISearch {
  id: string;
  placeHolderText: string;
  action: (searchQuery: any) => void;
  debounce?: number;
}

export const SearchComponent = React.memo<ISearch>(
  ({ id, placeHolderText, action, debounce = 500, ...props }) => {
    const debounceSubject = useRef(new Subject());

    useNavigationComponentDidAppear(() => {
      debounceSubject.current
        .pipe(
          map(({ searchQuery }: any) => ({ searchQuery })),
          debounceTime(debounce)
        )
        .subscribe(action);
    }, id);

    useNavigationComponentDidDisappear(() => {
      debounceSubject.current.unsubscribe();
      debounceSubject.current = new Subject();
    }, id);

    const onChange = useCallback(
      (searchQuery: string) =>
        stringValidator(searchQuery) &&
        debounceSubject.current.next({ searchQuery }),
      []
    );

    return (
      <ValidationInput
        placeholder={placeHolderText}
        onChangeText={onChange}
        validator={() => true}
      />
    );
  }
);
