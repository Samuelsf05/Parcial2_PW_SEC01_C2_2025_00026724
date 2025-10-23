# Parcial2_PW_SEC01_C2_2025_00026724
## Samuel Francisco Amaya Sánchez, 00026724
- Seccion 01

## Casos de Ejemplos de uso
### Request:
- GET http://localhost:3130/cuentas

### Buscar por nombre del cliente:
- GET http://localhost:3130/cuentas?queryParam=katia

### Buscar por género:
- GET http://localhost:3130/cuentas?queryParam=female

### Buscar por _id:
- GET http://localhost:3130/cuentas?queryParam=e1b2c3d4e5f60718293a4b5

### Buscar un valor inexistente:
- GET http://localhost:3130/cuentas?queryParam=banana

### Obtener una cuenta por su _id:
- GET http://localhost:3130/cuentas/cuenta/a77d7s87yd87sd8sd89s98

### Calcular el balance total de cuentas activas:
- GET http://localhost:3130/cuentas/cuentasBalance

### Acceder a una cuenta inexistente:
- GET http://localhost:3130/cuentas/cuenta/99999999