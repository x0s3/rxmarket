import { StringValidator as stringValidator } from 'core/src/validators';
import React, { useRef } from 'react';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import {
  useNavigationComponentDidAppear,
  useNavigationComponentDidDisappear
} from '../hooks/use-navigation';
import { ValidationInput } from './';

export const SearchComponent = React.memo<{ id: string }>(({ ...props }) => {
  const debounceSubject = useRef(new Subject());

  useNavigationComponentDidAppear(() => {
    debounceSubject.current
      .pipe(
        map((text: any) => stringValidator(text) && text),
        debounceTime(500)
      )
      .subscribe(console.log);
  }, props.id);

  useNavigationComponentDidDisappear(() => {
    debounceSubject.current.unsubscribe();
    debounceSubject.current = new Subject();
  }, props.id);

  const onChange = (item: any) => debounceSubject.current.next(item);

  return <ValidationInput onChangeText={onChange} validator={() => true} />;
});
