# Utilisation de React Native

NodeJS et npm doivent être installés

Dans ce dossier tapez la commandes suivantes ;

`npm install`

## Pour Android

Créez le fichier *local.properties* dans le dossier ./android/
et écrivez:

`sdk.dir=/chemin/vers/votre/sdk`

Lancez votre machine virtuelle Android ou branchez votre appareil Android

Tapez dans le terminal :

`react-native run-android`

Si jamais le terminal indique une erreur `adb not found`, vous devez renseigner le chemin vers le sdk
avec */platform-tools* à la fin dans la variable d'environnement PATH.

## Pour iOS

Xcode doit être installé

Tapez dans le terminal :

`react-native run-ios`
