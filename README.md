# affner.dev — portafolio estático (GitHub Pages)

## Archivos incluidos
- `index.html` — portafolio de una página: presentación, perfil, proyectos, stack y contacto.
- `styles.css` — diseño responsive, animaciones y soporte para `prefers-reduced-motion`.
- `script.js` — menú móvil, copiar correo, animaciones de entrada y proyectos desde la API pública de GitHub.
- `404.html` — página 404 simple.
- `robots.txt` — permitir indexación.
- `CNAME` — define el dominio canónico `www.affner.dev` (ajústalo si decides usar el root `affner.dev`).

## Pasos rápidos
1. Crea/usa el repo `affner.github.io` (público).
2. Sube estos archivos a la rama `main`.
3. En **Settings → Pages**: Deploy from a branch → `main` / root, y coloca `www.affner.dev` como *Custom domain*.
4. En **Squarespace Domains → DNS**:
   - CNAME `www` → `affner.github.io`
   - (Rápido) Redirige el apex `affner.dev` → `www.affner.dev`
     —o—
     (Apex directo) añade A records del root a `185.199.108.153 / 109.153 / 110.153 / 111.153`.

## Personaliza
- Cambia `hello@affner.dev` en `index.html` por tu correo definitivo si usas otro.
- La sección de proyectos toma los repositorios `ConsultaSismos`, `SoapToRestIntegration` y `monsterdam-microservices` de `github.com/affner`. Puedes editar el arreglo `featuredRepositories` en `script.js` para destacar otros.
- Si GitHub no está disponible, se muestran las tarjetas de respaldo definidas dentro de `script.js`; la página nunca queda vacía.
- Puedes quitar Google Fonts si buscas cero dependencias externas: el stack del sistema seguirá funcionando.
