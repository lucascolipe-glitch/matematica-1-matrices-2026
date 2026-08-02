# Matemática 1 · Unidad 4: Matrices

Página web teórico-práctica e interactiva para la Unidad 4 de Matemática 1 de FaCiAS, Universidad Nacional del Comahue.

## Materiales tomados como base

La organización teórica sigue el apunte completo de matrices, el resumen para taller y la presentación de la materia. Las actividades y aplicaciones contextualizadas se apoyan principalmente en el Trabajo Práctico de Matrices 2026.

El archivo del TP 2026 se presenta como “Trabajo práctico 3”, pero en este proyecto se lo ubica como **Unidad 4: Matrices**, de acuerdo con la organización indicada por la cátedra.

Se mantiene la convención:

```text
orden de una matriz = cantidad de filas × cantidad de columnas
```

## Contenidos

- Definición, orden y notación de una matriz.
- Lectura e interpretación de entradas.
- Construcción de matrices a partir de una fórmula para `a_ij`.
- Suma, resta, producto por escalar y traspuesta.
- Compatibilidad y producto fila por columna.
- Matrices nula, identidad, triangular y simétrica.
- Propiedades de las operaciones.
- Igualdad y ecuaciones matriciales.
- Matrices inversibles y aplicación de la inversa.
- Operaciones elementales y método de Gauss–Jordan.
- Aplicaciones a residuos, ruido, EPP, riesgos, ventilación y mediciones ambientales.

## Interactividad

- Solo una sección permanece visible por vez.
- Navegación lateral y botones Anterior/Siguiente.
- Actividades con tarjetas seleccionables y devolución explicada.
- Fórmulas renderizadas mediante MathJax.
- Explorador de entradas de una matriz contextualizada.
- Constructor de matrices por fórmula.
- Calculadora de matrices 2×2.
- Visualizador del producto fila por columna.
- Laboratorio vertical de Gauss–Jordan.
- Explorador de aplicaciones del TP.
- Práctica integradora aleatoria y registro de racha.
- Guardado automático en `localStorage`.
- Impresión completa o guardado como PDF.
- Diseño responsive.

## Estructura

```text
matematica-1-matrices-2026/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── app.js
```

## Uso local

Se puede abrir `index.html` directamente. Para evitar restricciones del navegador y probarlo como un sitio publicado, también se puede iniciar un servidor local desde la carpeta:

```bash
python3 -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

## Publicación en GitHub Pages

1. Crear un repositorio.
2. Subir el contenido de esta carpeta conservando la estructura.
3. Abrir `Settings > Pages`.
4. Seleccionar la rama `main` y la carpeta raíz `/`.
5. Guardar y esperar la publicación.

## Dependencia externa

La página utiliza MathJax desde una CDN. El resto del proyecto es HTML, CSS y JavaScript sin base de datos ni instalación adicional.
