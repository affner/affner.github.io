# affner.dev — sitio minimal (GitHub Pages)

## Archivos incluidos
- `index.html` — portada minimal con título, subtítulo y enlaces.
- `styles.css` — estilos oscuros y responsivos.
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

## Edita
- Cambia los enlaces (LinkedIn, CV, Email) dentro de `index.html`.
- Puedes quitar Google Fonts si quieres zero-external; el stack del sistema sigue funcionando.
