Proyecto de Visualización de Datos
==================================
"Explicar con Datos"
--------------------
 
### Visualización 1
El gráfico número 1 muestra una representación de las horas de misión de cada país en la última década. Durante su creación, tomamos varias decisiones sobre la forma ideal de visualizar estos datos.
- El gráfico de barras era la elección obvia para mostrar esta información, ya que uno de los datos (nacionalidades) es categórico y facilita la comparación de datos cuantitativos
- Las horas de misión se muestran en miles de horas, para evitar clutter / atestamiento
- Las barras se muestran horizontales, ya que hay numerosas categorías. Facilita la lectura.

### Visualización 2
Este gráfico muestra el proporcional de horas de misión por año correspondientes a los distintos status (civil o militar).

- La decisión de hacer un gráfico de áreas se dió buscando un tipo de gráfico que permita comprender a primera vista qué "color" prevalece más a lo largo de la línea del tiempo
- Es intuitivo asumir que la línea de tiempo es representada por el eje x, y las cantidades por el eje y
- Los datos fueron modificados para mostrar el porcentaje de horas de cada status por año, en lugar de la cantidad de horas en sí. Esto ayuda a ver la información proporcional, eliminando información no relevante para lo que se quiere mostrar (en este caso, la cantidad de horas)
- Una vez más, las horas de misión se muestran en miles de horas para eliminar datos repetitivos.
- Se resaltó la línea del 50% para facilitar la comprensión rápida del dato de interés (mayoría por cada año)
- Lo ideal hubiera sido evitar las referencias de color arriba del gráfico, y en su lugar etiquetar cada área dentro de la misma. En este caso no se pudo, por limitaciones de nuestro conocimiento de la librería.

### Visualización 3

El tercer gráfico muestra las profesiones que más horas pasaron en misiones EVA, con el dato adicional del proporcional de cáda género dentro de las profesiones. El interés de este gráfico está dado por conocer qué características tienen las personas que más tiempo pasaron en actividades extravehiculares.
- Una vez más, se eligió un gráfico de barras ya que uno de los datos es categórico, y el otro cuantitativo.
- Las horas de misión no se pusieron como "cientos de horas de misión", ya que el espacio visual ocupado por los ceros no compensaba la complejidad adicional de comprensión de estar obligado a leer el nombre del eje para poder comprender el gráfico
- En un caso óptimo, la categoría de "participante de vuelo espacial" no debería verse en el gráfico. Si bien es una ocupación que efectivamente aparece en el conjunto de datos, la cantidad total de horas EVA de personas con esta ocupación es de cero. La categoría se muestra por la limitación de nuestro conocimiento de esta librería en cuestiones tan específicas.
- La distinción por género según el color fue añadida para mostrar con más detalle qué tipos de personas llegaron a participar en actividades extravehiculares

### Visualización 4
El último gráfico muestra información sobre las edades de los astronautas a lo largo de la última década.
- El eje x muestra los años, ya que es más intuitivo entender el tiempo como fluyendo de izquierda a derecha, a comparación de fluyendo de abajo hacia arriba
- Buscamos una forma de representar todos los datos de edad de forma sencilla. Finalmente decidimos por mostrar el rango entre máximos y mínimos como un área, y las edades promedio de cada año como una línea de color, de forma que resalte. De esta forma podemos, en un sólo vistazo, tener una idea de las edades de los astronautas de la última década.
- En este caso pareció pertinente mantener la grilla de referencia, para poder entender con mayor facilidad los valores exactos.