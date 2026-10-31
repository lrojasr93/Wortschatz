# Wortschatz para Android (Google Play)

App de Android que abre https://rumboalemania.com/app/ a pantalla completa (Trusted Web Activity, generada con Bubblewrap). El contenido es siempre el de la web: al publicar cambios en `app/`, la app de Play los recibe sin subir una versión nueva.

- Paquete: `com.rumboalemania.wortschatz`.
- `twa-manifest.json` describe la app; `app/build.gradle` tiene `versionCode`/`versionName` (súbelos en cada versión nueva para Play).
- `.github/workflows/android.yml` compila el paquete (`.aab`) sin firmar y lo publica como pre-release `android-vN-unsigned`.
- La firma se hace fuera de GitHub con la clave de subida (`upload-key.jks`, nunca en el repo): `jarsigner -keystore upload-key.jks app-release.aab upload`.
- `/.well-known/assetlinks.json` en la raíz del dominio enlaza la web con la app. Lleva la huella SHA-256 de la clave de subida; cuando Play Console active la firma de apps de Google, hay que añadir también la huella de la clave de firma de Play (Play Console → Configuración → Integridad de la app). Sin eso la app muestra la barra del navegador.
