# Guía de Contribución

¡Gracias por querer contribuir a FinAI Agent Ecosystem!

## Estándares de Código

- **TypeScript Estricto**: No se permite el uso de `any`.
- **Clean Code**: Sigue los principios SOLID. Funciones pequeñas y con una sola responsabilidad.
- **Tipado**: Define interfaces para todos los modelos de datos y respuestas de API.
- **Idioma**: 
  - Variables y nombres de funciones en **Inglés**.
  - Comentarios y documentación en **Español**.

## Proceso de Desarrollo

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`.
2. Asegúrate de que los tests pasen: `npm test`.
3. Haz commit de tus cambios siguiendo [Conventional Commits](https://www.conventionalcommits.org/).
4. Abre un Pull Request describiendo tus cambios.

## Pruebas

Es obligatorio incluir tests unitarios para cualquier lógica de negocio nueva en `__tests__/`.
