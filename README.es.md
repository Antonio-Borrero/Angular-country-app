Español | [English](README.md)

# CountryApp

[![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-FDE047?logo=daisyui&logoColor=black)](https://daisyui.com/)

![Country App Preview](assets/preview.png)

<br>

Este es un **proyecto de aprendizaje y práctica** construido con **Angular 21** que permite a los usuarios explorar información sobre países de todo el mundo. El proyecto se centra en el consumo de APIs, enrutamiento (rutas hijas, parámetros) y persistencia de estado.

<br>

## Aspectos Técnicos

- **Motor de Búsqueda Dinámico:** Búsqueda de países por **Nombre, Capital o Región** utilizando la REST Countries API.
- **Enrutamiento Avanzado:** Implementación de **Rutas Hijas** y **Parámetros de Ruta** para mostrar información detallada de cada país.
- **Persistencia de Estado:** Los resultados de búsqueda y las pestañas activas persisten incluso tras recargar la página, garantizando una navegación fluida.
- **Búsqueda Reactiva:** Obtención de datos optimizada mediante servicios especializados para gestionar peticiones HTTP y manejo de errores.

<br>

## Tecnologías

- **Angular 21**
- **TypeScript**
- **Tailwind CSS** & **DaisyUI**
- **REST Countries API**

<br>

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Antonio-Borrero/country-app-angular.git
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el servidor de desarrollo:

   ```
   ng serve
   ```

   - Ir a `http://localhost:4200/`.
   - La aplicación se recargará automáticamente al modificar cualquier archivo.

<br>

## Estructura del Proyecto

```bash
    src/app/
    ├── country/
    │   ├── components/      # Componentes de UI (Tablas de países, inputs de búsqueda, etc.)
    │   ├── interfaces/      # Definiciones de tipos para la REST Countries API
    │   ├── mappers/         # Lógica de transformación de datos (API a modelos internos)
    │   ├── pages/           # Vistas principales y Layouts de enrutamiento
    │   │   ├── ...          # Páginas de búsqueda (Capital, País, Región)
    │   │   └── layouts/     # Layouts maestros para el módulo de países
    │   ├── services/        # Lógica de negocio y peticiones HTTP
    │   └── shared/          # Elementos de UI globales (Footer, Home, 404)
    └── environments/        # Configuraciones específicas por entorno
```

<br>

## Aprendizaje

- Dominio del Angular Router (parámetros, redirecciones y enlaces activos).
- Implementación de lógica de debouncing en búsquedas y persistencia.
- Trabajo con interfaces complejas de TypeScript de APIs externas.
- Creación de componentes de UI reutilizables como tablas personalizadas y barras de búsqueda.

<br>

## Producción

Para generar la version de producción:

    ```bash
    ng build
    ```
