excusator
=========

Responde con precisión a la pregunta de "cuando se acabará el proyecto?"

## Uso

```
    $> [sudo] npm install -g git://github.com/guumaster/excusator
    $> excusator
    // output: Cuando averiguemos por qué se cae el proceso de la versión customizada del directorio LDAP
```

## Problemas

Una de las dependencias necesita ciertas librerias de audio. Si teneis este error durante la instalacion: 

```
        ../deps/mpg123/src/output/alsa.c:19:28: fatal error: alsa/asoundlib.h: No existe el archivo o el directorio
         #include <alsa/asoundlib.h>
                                    ^
                                    compilation terminated.
```

En ubuntu se arregla con  este comando:

```
    $> [sudo] apt-get install libasound2-dev
```

## Contribuir

Fork, agrega tus excusas a `lib/excusas.json`, pull request.
