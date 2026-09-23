# Portafolio profesional de Josué Coeto

## Objetivo

Desarrollar un portafolio web profesional para presentar el área de desarrollo web de Josué Coeto, sus habilidades y sus proyectos mediante una experiencia clara, responsive, accesible y fácil de navegar.

## Descripción general

El sitio es una página web de una sola vista que presenta a Josué Coeto y sus habilidades principales. El proyecto destacado es una propuesta de sitio para presentar y ofrecer clases de música a posibles alumnos.

El contenido evita inventar datos personales. La información de contacto se indicará cuando esté disponible.

## Público objetivo

- Profesores.
- Compañeros.
- Posibles clientes.
- Personas interesadas en los proyectos de Josué.

## Tecnologías utilizadas

- HTML5 semántico.
- CSS3.
- JavaScript.

No se utilizaron Bootstrap, React ni otros frameworks o librerías.

## Estructura del proyecto

```text
Portafolio-4B/
├── .github/
│   └── agents/
├── .agents/
├── css/
├── docs/
│   ├── README.md
│   └── evidencias/
│       └── README.md
└── web/
    ├── index.html
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

### Archivos principales

- `web/index.html`: estructura semántica y contenido del portafolio.
- `web/css/styles.css`: paleta, tipografía, composición visual, responsive y estados de interacción.
- `web/js/main.js`: menú responsive, cierre del menú al seleccionar una sección y año automático del pie de página.
- `docs/README.md`: documentación del proyecto y del proceso.
- `docs/evidencias/`: espacio destinado a evidencias reales de revisión y pruebas.

## Secciones del portafolio

### Inicio

Presenta el nombre de Josué Coeto, el área de desarrollo web, una descripción breve y botones para acceder a proyectos y contacto.

### Sobre mí

Describe el área profesional y el propósito del portafolio usando únicamente información confirmada.

### Habilidades

Presenta las tecnologías principales:

- HTML5: estructura semántica.
- CSS3: estilos y diseño responsive.
- JavaScript: interacciones funcionales.

### Proyectos

Destaca el proyecto principal de clases de música y enlaza con la sección de contacto.

### Contacto

Incluye una llamada a conocer el proyecto. El mensaje de contacto se mantiene neutral porque todavía no se ha proporcionado correo, teléfono ni redes sociales.

## Proyecto destacado: Clases de música

Es una propuesta de sitio web para explicar y ofrecer clases de música. Incluye:

- Información general sobre las clases.
- Contenidos: fundamentos musicales, técnica y práctica progresiva.
- Metodología: aprendizaje práctico y progresivo adaptado al nivel del estudiante.
- Público: personas interesadas en iniciar o fortalecer su aprendizaje musical.
- Enlace de llamada a la acción hacia contacto.

La composición visual del proyecto se creó con HTML y CSS, sin fotografías personales inventadas.

## Decisiones de diseño y UX/UI

- Estilo minimalista, limpio, moderno y profesional.
- Fondo claro con una paleta basada en blanco cálido, gris suave, carbón y verde azulado.
- Encabezados con tipografía serif y texto general con una tipografía sans serif disponible localmente.
- Espaciado amplio para mejorar la lectura.
- Tarjetas simples para las habilidades.
- El proyecto de clases de música se destaca mediante una composición de mayor tamaño.
- Botones con acciones descriptivas y estados visuales de `hover` y `focus`.
- Navegación de una sola página mediante anclas internas.
- Se evitaron dependencias externas y elementos visuales innecesarios.

## Responsive

El diseño se adapta a:

- Computadoras: navegación horizontal y composición de dos columnas.
- Tablets: distribución compacta y cuadrículas adaptadas.
- Móviles: navegación colapsable, contenido en una columna y botones de ancho cómodo.

También se comprobó que no existiera desbordamiento horizontal en las pruebas realizadas.

## Accesibilidad

- Uso de elementos semánticos como `header`, `nav`, `main`, `section`, `article` y `footer`.
- Jerarquía de encabezados con un `h1` y títulos de sección.
- Enlaces con textos descriptivos.
- Etiquetas ARIA para la navegación y el menú móvil.
- Estado `aria-expanded` para indicar si el menú está abierto.
- Atributo `aria-controls` asociado al menú.
- Descripciones `aria-label` para las composiciones visuales decorativas.
- Estados de foco visibles mediante `:focus-visible`.
- Soporte para `prefers-reduced-motion`.
- Contraste visual cuidado entre textos y fondos.
- Navegación funcional mediante teclado.

## Funcionalidades JavaScript

- Apertura y cierre del menú móvil.
- Actualización de `aria-expanded` en el botón del menú.
- Cierre automático del menú al seleccionar un enlace.
- Inserción automática del año actual en el pie de página.

## Pruebas de la Fase 5

Se realizaron pruebas estáticas y en navegador sobre:

- Enlaces del menú y botones.
- Destinos internos y enlaces rotos.
- HTML, CSS y JavaScript.
- Errores de consola.
- Menú responsive.
- Visualización en computadora, tablet y móvil.
- Desbordamiento horizontal.
- Legibilidad de textos y botones.
- Estados `hover` y `focus`.
- Navegación mediante teclado.
- Atributos básicos de accesibilidad.
- Funcionamiento del JavaScript.
- Soporte de `prefers-reduced-motion`.
- Ausencia de Bootstrap, React y otros frameworks no autorizados.
- Ausencia de textos como “pendiente de definir”.

### Problema detectado

Durante las pruebas se observó que el mensaje “Información de contacto disponible próximamente” aparecía dos veces en la sección de contacto.

## Corrección de la Fase 6

Se eliminó la segunda instancia del mensaje en `web/index.html` y se conservó una sola instancia en el bloque principal de la sección de contacto.

## Verificación posterior

Después de la corrección se comprobó que:

- El mensaje aparece una sola vez.
- Los enlaces internos siguen apuntando a secciones existentes.
- No hay errores detectados en HTML, CSS ni JavaScript.
- La consola del navegador no muestra errores.
- No existe desbordamiento horizontal en móvil ni escritorio.

## Proceso seguido

1. **Fase 1: Analizar.** Se inspeccionó la estructura existente y se identificaron archivos incompletos, contenido que debía reemplazarse e información faltante.
2. **Fase 2: Organizar.** Se definieron las carpetas, los archivos principales y las responsabilidades de cada uno.
3. **Fase 3: Diseñar.** Se aprobó la estructura visual, la navegación, la paleta, la tipografía, los componentes y el comportamiento responsive.
4. **Fase 4: Desarrollar.** Se implementó el sitio con HTML5, CSS3 y JavaScript, sin Bootstrap ni frameworks.
5. **Fase 5: Probar.** Se revisaron navegación, responsive, accesibilidad, JavaScript, consola, estilos e integridad de enlaces.
6. **Fase 6: Corregir.** Se eliminó el mensaje de contacto duplicado y se repitieron las verificaciones relacionadas.

La Fase 8, correspondiente a la entrega final, queda pendiente de aprobación.
---

## Evidencias del proyecto

El proceso de desarrollo fue documentado mediante evidencias de cada una de las fases realizadas con el agente profesional.

Las capturas se encuentran almacenadas en:

`docs/evidencias/`

Se incluyen evidencias de:

1. Creación y configuración del agente.
2. Fase 1: Análisis.
3. Fase 2: Organización.
4. Fase 3: Diseño.
5. Fase 4: Desarrollo.
6. Resultado visual del portafolio.
7. Fase 5: Pruebas.
8. Fase 6: Corrección.
9. Fase 7: Documentación.
10. Fase 8: Entrega y comprobación responsive.

La descripción detallada de cada evidencia se encuentra en:

`docs/evidencias/README.md`

## Configuración del agente

La definición y reglas de funcionamiento del agente profesional utilizado durante el proyecto se encuentran documentadas en:

`.agents/agente_profesional.md`

El agente trabajó mediante fases y requirió la revisión y aprobación del alumno antes de continuar con cada etapa.

## Estado final

El portafolio fue desarrollado utilizando HTML5, CSS3 y JavaScript.

El proyecto fue sometido a pruebas de navegación, diseño responsive, accesibilidad básica y funcionamiento de JavaScript. Durante las pruebas se detectó una duplicación del mensaje de contacto, la cual fue corregida y verificada posteriormente.

El proyecto se encuentra documentado y acompañado de evidencias del proceso de desarrollo.