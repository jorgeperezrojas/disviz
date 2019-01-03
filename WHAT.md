# [Galaxias de discursos](http://jorgeperezrojas.github.io)

- **¿Qué es lo que veo?**     
Es una visualización de todos los discursos de la ex-presidenta de Chile [Michelle Bechelet](https://es.wikipedia.org/wiki/Michelle_Bachelet) durante su segundo gobierno (2014-2018). La visualización es presentada como una *galaxia* 👩‍🚀 en donde cada *estrella* ✨ es una oración en un discurso. Las estrellas/oraciones están dispuestas en el espacio formando *cúmulos  de  oraciones  similares* según  los temas que aborda cada frase.

- **¿Qué puedo hacer en la visualización?**     
Puedes moverte libremente como si comandaras una nave espacial 🚀 y explorar todas las oraciones.  Si estás en un computador presiona **H** y aparecerá una ayuda con todas las formas de movimientos. Pro-tip: mueve el mouse mientras mantienes el botón (izquierdo) y la tecla **W** presionadas al mismo tiempo. El siguiente es un  ejemplo  de movimiento:   
  ![Galaxia](demo/demo-01.gif?raw=true)  
  Si estás en el celular, puedes simplemente mover el celular como si fuera un *visor* y tu estuvieras dentro de la galaxia. Con un dedo en la pantalla se moverá hacia adelante y con dos hacia atrás.

- **¿Puedo buscar alguna palabra o frase específica?**  
¡Claro! Simplemente usa la barra de búsqueda 🔍 (arriba a la izquierda) para encontrar una  palabra  o  frase y  luego selecciónala para ir directo a la estrella  correspondiente.

- **Hay unas líneas entre algunas estrellas ¿qué significan?**  
Las líneas entre estrellas indican oraciones que son muy similares en su contenido/significado. Puede que dos oraciones estén un poco lejos espacialmente pero de todas maneras tener un significado muy similar, y por eso se conectan. Las líneas permiten visualizar más fácilmente los cúmulos de temas. De todas maneras, puedes sacarlas presionando la tecla **L** (se verá aun más *galáctico* 👩‍🚀🚀).

- **¿Cómo se que estas son frases reales y no estoy frente a una *fake news*?**  
¡Qué bueno que te interese ese tema! A nosotros también, así que si seleccionas una estrella (haciendo click en ella) aparecerá en la parte  inferior de la pantalla la fecha y el título  del discurso donde se  pronunció esa frase además de un link al [sitio oficial de archivo de prensa presidencial 2014-2018](https://2014-2018-prensa.presidencia.cl).

- **Está bonito pero ¿para qué puede servir?**  
Esto es como una *memoria* de todo lo que dijo oficialmente Michelle Bachelet. La idea es preservarlo para la posteridad y que se  pueda buscar y explorar de manera simple en todos los discursos de Bachelet con las oraciones tal y como las dijo. Puede servir para  periodistas o historiadores del futuro, o para cualquier persona interesada en hacer un seguimiento de las obras de la ex-presidenta. Además creemos que es mucho mejor presentar todo de manera simple y  accesible sin tener que hacer un resumen o una típica (y aburriiiida) [nube de palabras](https://es.wikipedia.org/wiki/Nube_de_palabras).


- **¿Dibujaron todo esto a mano? ¡Se pasaron!**   
¡No! Los discursos los obtuvimos directamente desde el [sitio de archivo presidencial](https://2014-2018-prensa.presidencia.cl) y luego usamos un montón de cosas bien nerd 🤓 para procesarlos y visualizarlos de manera automática. Muy resumidamente, son técnicas de Inteligencia Artificial basadas en [representaciones de palabras](https://github.com/uchile-nlp/spanish-word-embeddings) creadas con redes neuronales, y [técnicas para proyectar](https://github.com/lvdmaaten/bhtsne) esas representaciones en 3D. Si en realidad te interesa saber más del tema puedes ver [este video general](https://www.youtube.com/watch?v=IivePz30BdA) o seguir [este tutorial con código y todo](https://github.com/mquezada/starsconf2018-word-embeddings). Y si te interesan cosas aun más técnicas,  el código para  descargar y procesar los datos crudos de discursos lo puedes encontrar [acá](https://github.com/jorgeperezrojas/discursos) y el de la visualización misma lo puedes encontrar [acá](https://github.com/jorgeperezrojas/disviz). También puedes [escribirnos](mailto:jorgeperezrojas@gmail.com) si quieres cooperar.


- **¿Por qué solo Bachelet? Me  gustaría ver lo mismo pero para otros presidentes.**  
Comenzamos con Bachelet (2014-2018) porque los datos estaban muy bien ordenados y con suficiente información por lo que era muy  fácil de descargar y procesar, además es una cantidad suficiente (1500+ discursos) como para que la visualización tuviera sentido. Tenemos los datos de otros presidentes, en particular de **Sebastián Piñera** (500+ discursos, 2010-2014) y de **Salvador Allende** (200+ discursos, 1970-1973). Puedes ver estos datos [acá](https://github.com/jorgeperezrojas/discursos). Pronto incluiremos al menos a estos dos presidentes, pero  nos interesa incluir más. Si conoces alguna buena fuente para obtener más datos [puedes escribirnos](mailto:jorgeperezrojas@gmail.com) (o, si te sientes bien usando github, puedes hacer directamente un pull request en el [repositorio](https://github.com/jorgeperezrojas/discursos)).

- **¿Se puede hacer esto mismo pero con textos de otro tipo?**  
Sí, se puede. Solo es necesario tener mucho texto y las mismas técnicas se  pueden aplicar. Si tienes una idea que creas interesante para visualizar de esta forma [escríbenos](mailto:jorgeperezrojas@gmail.com).
