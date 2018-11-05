# Galaxias de discursos

Este repositorio contiene visualizaciones de textos de discursos de presidentes chilenos en forma de galaxias.
Es un fork de [https://github.com/anvaka/pm](https://github.com/anvaka/pm) para adaptarlo a texto, en particular, frases de discursos de presidentes chilenos, fechas, y links a discursos originales e imágenes, y agregar etiquetas a clusters. La información de cómo hacer andar todo la pueden enconotrar en el [repositorio original](https://github.com/anvaka/pm).

Por ahora sólo está el código para correr la visualización. Estoy lejos de ser un experto en javascript así que seguro encontrarán barbaridades 🙈. El código para generar los datos de input necesarios para la visualización los subiré en algún momento, cuando lo haya ordenado, pero se basa en [Word Embeddings en Español](https://github.com/uchile-nlp/spanish-word-embeddings) y una [implementación de t-SNE en C++](https://github.com/lvdmaaten/bhtsne). Los datos crudos de textos los pueden encontrar en el repositorio de [Discursos Presidenciales Chilenos](https://github.com/jorgeperezrojas/discursos)

# Desarrollo local

```
git clone https://github.com/jorgeperezrojas/disviz.git
cd disviz
npm i
npm start
```

# Demo

Una versión online para los discursos de Bachelet (2014-2018) la pueden encontrar en [https://jorgeperezrojas.github.io/](https://jorgeperezrojas.github.io/). 
El siguiente video muestra un ejemplo (link a twitter) [Demo](https://twitter.com/perez/status/993291012087967744)
