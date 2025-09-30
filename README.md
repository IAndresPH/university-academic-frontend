# HU-105: Mensajes claros de error en el login

## Descripción de la historia de usuario

**Como usuario**, quiero recibir mensajes claros de error (credenciales inválidas, usuario no encontrado, etc.), **para comprender la causa del fallo en el login**.

## Objetivo

Brindar retroalimentación clara y precisa al usuario en el proceso de autenticación, de forma que sepa por qué su acceso no fue exitoso y pueda tomar acciones correctivas.

## Cambios realizados

- Se integró un sistema de mensajes de error en el flujo de login.
- Los mensajes son visibles en la interfaz del formulario de inicio de sesión mediante un componente de alerta.
- Se diferenciaron los principales casos de error, por ejemplo:
  - Credenciales inválidas.
  - Usuario no encontrado.
  - Problemas de conexión con el servidor.

- Se garantizó que los mensajes se muestren de forma clara, en un tono entendible y no técnico para el usuario final.

## Resultados esperados

- El usuario tiene claridad inmediata sobre la causa del error al intentar iniciar sesión.
- Mejora la experiencia de uso, ya que no queda en incertidumbre sobre lo que falló.
- Se establece una base para mantener consistencia en los mensajes de error dentro del sistema.
