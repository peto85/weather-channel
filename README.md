# Weather channel
1) Instalar dependencias mediante `$yarn` o `$npm install`.
2) Para arrancar, el script es simplemente `yarn start` o `npm start`.
3) Se usa webpack-dev-server con valores por defecto, una vez arrancada el bundle puede ser visto en [http://localhost:8080].

Algunas notas:
- El tiempo de refresco esta definido a 5 segundos. Se puede cambiar en `App.js`.
- Se usa redux-saga para el control de los side-effects(e.g. API requests).
- La lógica de la UX no está al completo, ya que solo he preparado una especie de MVP, para demostrar mi familiaridad con React+Redux y el ecosistema de Javascript moderno.
