# ShieldFree Antivirus Landing Page

Una landing page estática inspirada en la experiencia visual de un antivirus gratuito moderno, con estética naranja/blanca, bloques de confianza, panel de escaneo y llamadas a la acción.

> Proyecto demo no afiliado a Avast ni a ninguna marca registrada.



## ¿Cómo lo descargo a mi PC?

Si estás viendo este proyecto en GitHub, la forma más fácil es:

1. Pulsa el botón verde **Code**.
2. Elige **Download ZIP**.
3. Descomprime el ZIP en tu computadora.
4. Entra a la carpeta descomprimida.
5. Haz doble clic en `ABRE_AQUI.html`.

Si estás usando una interfaz de Codex, Replit, Codespaces u otro entorno remoto, busca una opción como **Download**, **Export**, **Download workspace** o **Download ZIP** para descargar la carpeta completa del proyecto. La carpeta que debes descargar es:

```text
/workspace/shiny-guacamole-
```

Asegúrate de descargar juntos estos archivos, porque la página los necesita en la misma carpeta:

```text
ABRE_AQUI.html
index.html
styles.css
script.js
README.md
```

Después de descargarlos, abre `ABRE_AQUI.html` con doble clic.

Si tienes Git instalado, también puedes clonar el repositorio desde PowerShell o Terminal con la URL real del repo:

```bash
git clone URL_DEL_REPOSITORIO
cd shiny-guacamole-
```

Luego abre `ABRE_AQUI.html`.

## Si no ves nada

Trabajé dentro de esta carpeta exacta del entorno:

```bash
/workspace/shiny-guacamole-
```

Los archivos creados están en la raíz de esa carpeta:

```text
/workspace/shiny-guacamole-/
├── ABRE_AQUI.html
├── index.html
├── styles.css
├── script.js
└── README.md
```

La forma más directa de verlo es abrir `ABRE_AQUI.html` o `index.html`. Si estás en la terminal, ejecuta:

```bash
cd /workspace/shiny-guacamole-
python3 -m http.server 4173
```

Después abre `http://localhost:4173` en el navegador.

## ¿Dónde está la carpeta del proyecto?

> Importante: `/workspace/shiny-guacamole-` es la ruta dentro de este entorno remoto/Linux. En Windows PowerShell esa ruta no existe; allí debes entrar a la carpeta donde descargaste o copiaste el proyecto.

En este entorno, la carpeta del proyecto es:

```bash
/workspace/shiny-guacamole-
```

Si estás en la terminal, entra con:

```bash
cd /workspace/shiny-guacamole-
```

Para confirmar que estás en la carpeta correcta, ejecuta:

```bash
pwd
```

Deberías ver `/workspace/shiny-guacamole-`.


## Si estás en Windows / PowerShell

El error `C:\workspace\shiny-guacamole- no existe` aparece porque PowerShell convierte `/workspace/...` a una ruta de Windows. Esa ruta solo existe dentro del entorno remoto donde se creó el proyecto.

En Windows, abre la carpeta real donde tengas el proyecto. Ejemplos comunes:

```powershell
cd "$env:USERPROFILE\Downloads\shiny-guacamole-"
```

O si lo tienes en el Escritorio:

```powershell
cd "$env:USERPROFILE\Desktop\shiny-guacamole-"
```

Cuando estés dentro, deberías ver estos archivos con:

```powershell
dir
```

Busca `ABRE_AQUI.html`, `index.html`, `styles.css` y `script.js`. Para abrir la demo directamente desde PowerShell:

```powershell
start .\ABRE_AQUI.html
```

También puedes servirla localmente con Python para verla en `http://localhost:4173`:

```powershell
python -m http.server 4173
```

Si no sabes dónde quedó la carpeta, usa el Explorador de archivos de Windows y busca `ABRE_AQUI.html` o `index.html`; cuando la encuentres, haz doble clic en `ABRE_AQUI.html`.

## Archivos

- `index.html`: estructura de la página.
- `styles.css`: sistema visual responsive.
- `script.js`: interacciones del panel de escaneo, acordeón FAQ y formulario.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador o servir la carpeta desde la terminal.

Desde la carpeta del proyecto, ejecuta:

```bash
python3 -m http.server 4173
```

Luego visita en tu navegador:

```text
http://localhost:4173
```

Si estás usando un entorno remoto o Codespaces, usa la opción de "Ports" / "Puertos" para abrir el puerto `4173` en el navegador.
