### Demo for using rollup to build react component ###


## Run and test component lib

```shell
yarn
yarn demo
```

## Connect your ui component to other application

./my-app is create from react ts default

```shell
yarn build
npm link
cd my-app
npm link myRollUpLib
```


## Start app with your component

```shell
cd my-app
yarn start
```