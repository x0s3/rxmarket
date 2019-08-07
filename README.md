> WIP

# Rx Market

# What and why

Rx Market is a monorepo created with lerna, typescript and rxjs and the purpose of it is try to create a copy of b2c apps (customer and rider)

# Commands

## Adding new dependencies to the project

```sh
lerna add [--dev] package-name [--scope package name ex: components]
```

## Starters

#### Start customer dev server

```sh
 yarn dev:customer
```

#### Start dev server

```sh
 yarn dev:server[-watch]
```

## Tests

#### Start Unit tests

```sh
 yarn test:[package name]
```

## Builds

> Will compile typescript and create the dist dir

#### Build android apk

```sh
 yarn build:customer:android
```

```sh
 yarn build:customer:ios
```

#### Build server

```sh
 yarn build:server
```

## Push new changes/versions

After having the commit well commented for deploying the changes to the repo just launch this command and lerna will do the rest

```sh
 yarn push
```

# Teach Stack

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Lerna](https://github.com/lerna/lerna) (Monorepo)
- [React](https://github.com/facebook/react) ([Hooks](https://reactjs.org/docs/hooks-intro.html))
- [React-Native](https://github.com/facebook/react-native)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux-Observable](https://github.com/redux-observable/redux-observable/)
- [RxJS](https://github.com/ReactiveX/RxJS)
- [NestJS](https://nestjs.com)
- [TypeORM](https://github.com/typeorm/typeorm)
- [NextJS](https://github.com/zeit/next.js)
- [React-Apollo](https://github.com/apollographql/react-apollo)

# IN PROGRESS

- [ ] Client customer apps
- [ ] Manager web app
- [ ] Server PART: I

# TODOS

- [ ] Add FastLane for mobile (customer / rider) release apps
- [ ] Rider App
- [ ] Manager App / WebApp
- [ ] Server PART: II
- [ ] CodePush
- [ ] FCM
- [ ] Add some serverless endpoint
- [ ] ¿¿Add some native-module with Go or Kotlin-Native?? 🙀

# License

Copyright (©) 2019 Xose.