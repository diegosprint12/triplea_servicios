# AAA Servicios Generales

Sitio corporativo SPA para AAA Servicios Generales, empresa con cobertura en el Area Metropolitana de Bucaramanga (Giron, Floridablanca, Piedecuesta). Especialistas en plomeria, electricidad, pintura, limpieza y mantenimiento residencial, con atencion 24/7.

## Stack

- **Framework**: Astro 5 (static output)
- **CSS**: PostCSS con postcss-preset-env y postcss-nesting, design tokens nativos
- **SEO**: JSON-LD (LocalBusiness + OfferCatalog), Open Graph, Twitter Cards, sitemap generado con @astrojs/sitemap
- **Rendimiento**: Sin dependencias JS en runtime, scroll reveal con IntersectionObserver, imagenes con lazy loading

## Desarrollo

```bash
npm run dev     # Servidor local
npm run build   # Build estatico en dist/
npm run preview # Vista previa del build
```

---

Creado por [Diego](https://github.com/diegosprint12)
