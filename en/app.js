(function(){
var KEY='wordhoard-en-v1';
// Base language: English or Spanish (Español). Chosen in Me → Progress; the page reloads to apply it.
var LANG='es';
var ES={"All":"Todos","Separable":"Separables","No ge-":"Sin ge-","Perfect tense type":"Tipo de Perfekt","haben + ge + stem + t. Regular and mixed verbs: hat gemacht, hat gebracht.":"haben + ge + raíz + t. Verbos regulares y mixtos: hat gemacht, hat gebracht.","haben + ge + stem + en, often with a vowel change: hat gesprochen, hat gegessen.":"haben + ge + raíz + en, a menudo con cambio de vocal: hat gesprochen, hat gegessen.","sein for movement from A to B or a change of state, plus sein and bleiben: ist gegangen, ist geblieben.":"sein para movimiento de A a B o un cambio de estado, y también sein y bleiben: ist gegangen, ist geblieben.","Separable verbs with haben: ge- goes between the prefix and the verb: hat eingekauft, hat angerufen.":"Verbos separables con haben: ge- va entre el prefijo y el verbo: hat eingekauft, hat angerufen.","No ge- for verbs ending in -ieren or starting with be-, ver-, er-, ent-, zer-: hat studiert, hat verstanden.":"Sin ge- en verbos terminados en -ieren o que empiezan con be-, ver-, er-, ent-, zer-: hat studiert, hat verstanden.","❄️ Streak freeze used":"❄️ Protector de racha usado","⭐ Mastered: ":"⭐ Dominada: ","a new word":"una palabra nueva","My job: ":"Mi trabajo: ","<div class=\"panel\"><h2>Vocabulary for your job</h2><p class=\"sub\">Pick your field to get German words you will use at work. You can change it any time; your progress in each field is kept.</p><div class=\"seg\" role=\"group\" aria-label=\"Job\">":"<div class=\"panel\"><h2>Vocabulario para tu trabajo</h2><p class=\"sub\">Elige tu área para aprender palabras en inglés que usarás en el trabajo. Puedes cambiarla cuando quieras; tu progreso en cada área se guarda.</p><div class=\"seg\" role=\"group\" aria-label=\"Trabajo\">","<button class=\"btn ghost wide\" data-a=\"pickjob\">Cancel</button>":"<button class=\"btn ghost wide\" data-a=\"pickjob\">Cancelar</button>"," words</span><button class=\"link\" data-a=\"pickjob\">Change job</button></div>":" palabras</span><button class=\"link\" data-a=\"pickjob\">Cambiar trabajo</button></div>"," to review, ":" por repasar, ","English to German":"Español a inglés","German to English":"Inglés a español","<div class=\"done\"><h2>Session ended</h2><p class=\"sub\">":"<div class=\"done\"><h2>Sesión terminada</h2><p class=\"sub\">","Practice rounds don’t change your progress.":"Las rondas de práctica no cambian tu progreso.","Your answers so far are saved. You went through ":"Tus respuestas hasta ahora están guardadas. Repasaste "," words.":" palabras.","</p><button class=\"btn wide\" data-a=\"lresume\">Start learning again</button><button class=\"btn ghost wide\" data-a=\"practice\">Practice 15 random words</button></div>":"</p><button class=\"btn wide\" data-a=\"lresume\">Volver a aprender</button><button class=\"btn ghost wide\" data-a=\"practice\">Practicar 15 palabras al azar</button></div>","Session complete":"¡Sesión completada!","Nothing to review here":"No hay nada que repasar aquí","Practice rounds don’t change your progress. ":"Las rondas de práctica no cambian tu progreso. ","You went through ":"Repasaste "," words. Flashcards plan your reviews. To make words count as Recognized and Mastered, practise them in Practice, especially Write the word.":" palabras. Las tarjetas planifican tus repasos. Para que las palabras cuenten como Reconocidas y Dominadas, practícalas en Practicar, sobre todo en Escribe la palabra.","Come back later, pick another category, or practice now.":"Vuelve más tarde, elige otra categoría o practica ahora.","</p><button class=\"btn wide\" data-a=\"go\" data-v=\"write\">Write these words in German</button><button class=\"btn ghost wide\" data-a=\"practice\">Practice 15 random words</button></div>":"</p><button class=\"btn wide\" data-a=\"go\" data-v=\"write\">Escribe estas palabras en inglés</button><button class=\"btn ghost wide\" data-a=\"practice\">Practicar 15 palabras al azar</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"lexit\">✕ Exit</button></div>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"lexit\">✕ Salir</button></div>","<button class=\"btn wide\" data-a=\"flip\">Show answer</button>":"<button class=\"btn wide\" data-a=\"flip\">Ver respuesta</button>","<div class=\"row\"><button class=\"btn ghost\" data-a=\"again\">Again</button><button class=\"btn\" data-a=\"good\">Got it</button></div>":"<div class=\"row\"><button class=\"btn ghost\" data-a=\"again\">Otra vez</button><button class=\"btn\" data-a=\"good\">¡La sé!</button></div>","This category has no example sentences to use. Pick another one.":"Esta categoría no tiene frases de ejemplo. Elige otra.","This category has no nouns with articles. Pick another one.":"Esta categoría no tiene sustantivos con artículo. Elige otra.","<div class=\"panel\"><h2>Quick quiz</h2><p class=\"sub\">Up to 10 questions from the selected category.</p><div class=\"seg\" role=\"group\" aria-label=\"Quiz type\">":"<div class=\"panel\"><h2>Quiz rápido</h2><p class=\"sub\">Hasta 10 preguntas de la categoría elegida.</p><div class=\"seg\" role=\"group\" aria-label=\"Tipo de quiz\">","\">Fill the gap</button>":"\">Completa el espacio</button>","\">Write the word</button>":"\">Escribe la palabra</button>","\">Cases: der / den / dem</button></div>":"\">Casos: der / den / dem</button></div>","<p class=\"sub\" style=\"margin:12px 0 0\">You see the English meaning and type the German word. Write nouns with their article, for example “der Tisch”. This is how a word becomes <b>Mastered</b>: type it exactly on ":"<p class=\"sub\" style=\"margin:12px 0 0\">Ves el significado en español y escribes la palabra en inglés. Así una palabra pasa a ser <b>Dominada</b>: escríbela exactamente en "," different days. Words you already recognize come first.</p>":" días distintos. Primero salen las palabras que ya reconoces.</p>","<p class=\"sub\" style=\"margin:12px 0 0\">Pick the right article for the sentence: Nominativ, Akkusativ or Dativ. The rules are in Learn → Rules → Cases.</p>":"<p class=\"sub\" style=\"margin:12px 0 0\">Elige el artículo correcto para la frase: Nominativ, Akkusativ o Dativ. Las reglas están en Aprender → Reglas → Casos.</p>","<p class=\"sub\" style=\"margin:12px 0 0\">Type the missing German word in the sentence. Umlauts can be typed as ae, oe, ue and ß as ss.</p>":"<p class=\"sub\" style=\"margin:12px 0 0\">Escribe la palabra en inglés que falta en la frase.</p>","<button class=\"btn wide\" data-a=\"qstart\">Start quiz</button>":"<button class=\"btn wide\" data-a=\"qstart\">Empezar quiz</button>","<div class=\"done\"><h2>Quiz finished</h2><div class=\"score\">":"<div class=\"done\"><h2>Quiz terminado</h2><div class=\"score\">","Perfect run.":"¡Ronda perfecta!","Solid. Keep going.":"¡Bien! Sigue así.","Review these words in Learn, then try again.":"Repasa estas palabras en Aprender y vuelve a intentarlo.","</p><button class=\"btn wide\" data-a=\"qstart\">Play again</button><button class=\"btn ghost wide\" data-a=\"qreset\">Change settings</button></div>":"</p><button class=\"btn wide\" data-a=\"qstart\">Jugar otra vez</button><button class=\"btn ghost wide\" data-a=\"qreset\">Cambiar ajustes</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"qexit\">✕ Exit</button></div>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"qexit\">✕ Salir</button></div>","<p class=\"qn\">Question ":"<p class=\"qn\">Pregunta ","Which article goes with this noun?":"¿Qué artículo va con este sustantivo?","What does it mean?":"¿Qué significa?","\" aria-label=\"Pronounce ":"\" aria-label=\"Pronunciar ","See score":"Ver resultado","Next question":"Siguiente pregunta","<div class=\"qtop\"><button class=\"link exit\" data-a=\"qexit\">✕ Exit</button></div><div class=\"prog\"><i style=\"width:":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"qexit\">✕ Salir</button></div><div class=\"prog\"><i style=\"width:","</p><p class=\"qlabel\">Write it in German":"</p><p class=\"qlabel\">Escríbelo en inglés"," (with the article)":" (con el artículo)","der / die / das + word":"der / die / das + palabra","German word":"Palabra en inglés","\" aria-label=\"German word\"><button class=\"btn small\" data-a=\"wcheck\">Check</button></div>":"\" aria-label=\"Palabra en inglés\"><button class=\"btn small\" data-a=\"wcheck\">Comprobar</button></div>","<button class=\"link\" data-a=\"wskip\">I don’t know</button>":"<button class=\"link\" data-a=\"wskip\">No lo sé</button>","Correct, with a small typo. Type it exactly to count toward Mastered.":"Correcto, con un pequeño error. Escríbela exacta para que cuente para Dominadas.","Correct!":"¡Correcto!","Not quite.":"Casi."," You wrote “":" Escribiste “","Here is the answer.":"Esta es la respuesta.","</p><p class=\"qlabel\">Which article fits?</p>":"</p><p class=\"qlabel\">¿Qué artículo va?</p>","<p class=\"qlabel\">Fill the gap</p>":"<p class=\"qlabel\">Completa el espacio</p>","<p class=\"ghint\">Missing word: <b>":"<p class=\"ghint\">Palabra que falta: <b>","</b> · starts with <b>":"</b> · empieza con <b>","<div class=\"bar\"><input id=\"gap-in\" type=\"text\" autocomplete=\"off\" autocapitalize=\"none\" spellcheck=\"false\" placeholder=\"Type the word\" aria-label=\"Missing word\"><button class=\"btn small\" data-a=\"gcheck\">Check</button></div>":"<div class=\"bar\"><input id=\"gap-in\" type=\"text\" autocomplete=\"off\" autocapitalize=\"none\" spellcheck=\"false\" placeholder=\"Escribe la palabra\" aria-label=\"Palabra que falta\"><button class=\"btn small\" data-a=\"gcheck\">Comprobar</button></div>","<button class=\"link\" data-a=\"gskip\">I don’t know</button>":"<button class=\"link\" data-a=\"gskip\">No lo sé</button>","Not quite. You wrote “":"Casi. Escribiste “"," <span class=\"exen\">(in this sentence: ":" <span class=\"exen\">(en esta frase: ","This category has no sentences yet. Pick another one.":"Esta categoría aún no tiene frases. Elige otra.","<div class=\"panel\"><h2>Translate sentences</h2><p class=\"sub\">You get an English sentence and write it in German. Up to 10 sentences from the selected category. Small typos count as almost right, and umlauts can be typed as ae, oe, ue and ß as ss.</p><button class=\"btn wide\" data-a=\"trstart\">Start</button>":"<div class=\"panel\"><h2>Traducir frases</h2><p class=\"sub\">Recibes una frase en español y la escribes en inglés. Hasta 10 frases de la categoría elegida. Los pequeños errores cuentan como casi correctos.</p><button class=\"btn wide\" data-a=\"trstart\">Empezar</button>","<div class=\"done\"><h2>All done</h2><div class=\"score\">":"<div class=\"done\"><h2>¡Listo!</h2><div class=\"score\">","Great translating.":"¡Gran traducción!","Good work. Keep going.":"Buen trabajo. Sigue así.","Try these words in Learn first, then come back.":"Practica primero estas palabras en Aprender y luego vuelve.","</p><button class=\"btn wide\" data-a=\"trstart\">10 more sentences</button></div>":"</p><button class=\"btn wide\" data-a=\"trstart\">10 frases más</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"trexit\">✕ Exit</button></div>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"trexit\">✕ Salir</button></div>","<p class=\"qn\">Sentence ":"<p class=\"qn\">Frase ","</p><p class=\"qlabel\">Write this in German</p>":"</p><p class=\"qlabel\">Escribe esto en inglés</p>","<p class=\"ghint\">Key word: ":"<p class=\"ghint\">Palabra clave: ","Hint shown":"Pista vista","Hint":"Pista","</button><button class=\"btn\" data-a=\"trcheck\">Check</button></div>":"</button><button class=\"btn\" data-a=\"trcheck\">Comprobar</button></div>","<button class=\"link\" data-a=\"trskip\" style=\"margin-top:12px\">Show the answer</button>":"<button class=\"link\" data-a=\"trskip\" style=\"margin-top:12px\">Ver la respuesta</button>","Perfect!":"¡Perfecto!","Almost right":"Casi correcto","Not quite":"Casi","Here is the answer":"Esta es la respuesta"," Remember that German nouns start with a capital letter.":" Recuerda que los sustantivos en inglés empiezan con mayúscula.","<p class=\"trl\">Your answer</p><p class=\"trs\">":"<p class=\"trl\">Tu respuesta</p><p class=\"trs\">","<p class=\"trl\">Correct</p><div class=\"exrow\"><p class=\"trs\">":"<p class=\"trl\">Correcto</p><div class=\"exrow\"><p class=\"trs\">","<p class=\"trkey\"><span class=\"tw miss\">red</span> missing or wrong · <span class=\"tw near\">yellow</span> small typo · <span class=\"tw extra\">crossed out</span> not needed</p>":"<p class=\"trkey\"><span class=\"tw miss\">rojo</span> falta o está mal · <span class=\"tw near\">amarillo</span> pequeño error · <span class=\"tw extra\">tachado</span> sobra</p>","Next sentence":"Siguiente frase","Translate":"Traducir","Conversation":"Conversación","Words":"Palabras","Rules":"Reglas","Progress":"Progreso","Article sprint":"Sprint de artículos","10 nouns: der, die or das?":"10 sustantivos: ¿der, die o das?","Meaning marathon":"Maratón de significados","12 words: pick the meaning.":"12 palabras: elige el significado.","Write it":"Escríbelo","Type 5 German words with their article.":"Escribe 5 palabras en inglés.","Fill the gaps":"Completa los espacios","6 sentences with a missing word.":"6 frases con una palabra que falta.","Case clinic":"Clínica de casos","8 sentences: der, den or dem?":"8 frases: ¿der, den o dem?","Present tense":"Presente","8 verb forms in the present.":"8 formas verbales en presente.","Simple past":"Pasado","6 verb forms in the Präteritum.":"6 formas verbales en past simple.","Perfect tense":"Present perfect","6 verb forms in the Perfekt.":"6 formas verbales en present perfect.","Sunday boss":"Jefe del domingo","🚀 Level ":"🚀 Nivel ","🔓 Unlocked: ":"🔓 Desbloqueado: ","First win":"Primera victoria","Finish a daily challenge":"Completa un desafío diario","Hat trick":"Triplete","Finish all 3 daily challenges in one day":"Completa los 3 desafíos diarios en un día","On fire":"En llamas","Reach a combo of 10":"Llega a un combo de 10","Speed reader":"Lector veloz","Score 200 in Time attack":"Consigue 200 en Contrarreloj","Boss beaten":"Jefe vencido","Beat a Sunday boss":"Vence a un Jefe del domingo","Word collector":"Coleccionista de palabras","Recall 7 words of the day":"Recuerda 7 palabras del día","Treasure hunter":"Cazatesoros","Open 5 mystery chests":"Abre 5 cofres misteriosos","Wordsmith":"Maestro de palabras","Master 25 words":"Domina 25 palabras","High flyer":"Por las nubes","Reach level 5":"Llega al nivel 5"," Medal: ":" Medalla: ","Ocean theme":"Tema océano","Idioms pack":"Paquete de modismos","Forest theme":"Tema bosque","C1 conversations":"Conversaciones C1","Sunset theme":"Tema atardecer","Blue buttons and accents.":"Botones y detalles en azul.","15 German sayings, in Learn, Practice and Words.":"15 modismos en inglés, en Aprender, Practicar y Palabras.","Green buttons and accents.":"Botones y detalles en verde.","Harder dialogues in Practice → Conversation.":"Diálogos más difíciles en Practicar → Conversación.","Warm orange buttons and accents.":"Botones y detalles en naranja cálido.",": done!":": ¡logrado!","You earned ":"Ganaste "," from your combos + ":" de tus combos + "," bonus).":" de bonus).","You need ":"Necesitas "," right to win. You still keep the ":" aciertos para ganar. Igual te quedas con los "," XP from your answers.":" XP de tus respuestas.","<button class=\"btn wide\" data-a=\"chchest\">🎁 Open the mystery chest</button>":"<button class=\"btn wide\" data-a=\"chchest\">🎁 Abrir el cofre misterioso</button>","\">Try again</button>":"\">Intentar de nuevo</button>","wide\" data-a=\"chhome\">Back to challenges</button></div>":"wide\" data-a=\"chhome\">Volver a desafíos</button></div>","<div class=\"done\"><h2>Time’s up!</h2><div class=\"score\">":"<div class=\"done\"><h2>¡Se acabó el tiempo!</h2><div class=\"score\">"," right of ":" aciertos de ","New personal best! +10 XP bonus.":"¡Nuevo récord personal! +10 XP de bonus.","Your best: ":"Tu récord: "," points.":" puntos.","</p><p class=\"sub\">You earned ":"</p><p class=\"sub\">Ganaste "," XP.</p><button class=\"btn wide\" data-a=\"tastart\">Play again</button><button class=\"btn ghost wide\" data-a=\"chhome\">Back to challenges</button></div>":" XP.</p><button class=\"btn wide\" data-a=\"tastart\">Jugar otra vez</button><button class=\"btn ghost wide\" data-a=\"chhome\">Volver a desafíos</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"taexit\">✕ Exit</button></div>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"taexit\">✕ Salir</button></div>","<p class=\"qlabel\">What does it mean?</p><div class=\"vhead\"><div class=\"qprompt\">":"<p class=\"qlabel\">¿Qué significa?</p><div class=\"vhead\"><div class=\"qprompt\">","<div class=\"panel chcard\"><p class=\"qlabel\">Word of the day</p>":"<div class=\"panel chcard\"><p class=\"qlabel\">Palabra del día</p>","You remembered it! +15 XP":"¡La recordaste! +15 XP","<h2>Do you still remember it?</h2><p class=\"sub\">Type today’s German word for “":"<h2>¿Todavía la recuerdas?</h2><p class=\"sub\">Escribe la palabra inglesa de hoy para “","”, with its article.</p><div class=\"bar\"><input id=\"wd-in\" type=\"text\" autocomplete=\"off\" autocapitalize=\"none\" spellcheck=\"false\" placeholder=\"der / die / das …\" aria-label=\"Word of the day\"><button class=\"btn small\" data-a=\"wdcheck\">Check</button></div><p class=\"sub\" style=\"margin-top:8px\">Starts with ":"”,.</p><div class=\"bar\"><input id=\"wd-in\" type=\"text\" autocomplete=\"off\" autocapitalize=\"none\" spellcheck=\"false\" placeholder=\"der / die / das …\" aria-label=\"Palabra del día\"><button class=\"btn small\" data-a=\"wdcheck\">Comprobar</button></div><p class=\"sub\" style=\"margin-top:8px\">Empieza con ","<p class=\"note\">Come back after ":"<p class=\"note\">Vuelve después de las "," to recall it from memory for +15 XP.</p>":" para recordarla de memoria y ganar +15 XP.</p>","<p class=\"sub\" style=\"margin-top:8px\">✓ In your words</p>":"<p class=\"sub\" style=\"margin-top:8px\">✓ En tus palabras</p>","<button class=\"btn ghost wide\" data-a=\"wdadd\">Add to my words</button>":"<button class=\"btn ghost wide\" data-a=\"wdadd\">Añadir a mis palabras</button>","</div><div><h2 style=\"margin:0\">Level ":"</div><div><h2 style=\"margin:0\">Nivel "," streak freeze":" protector de racha"," XP to level ":" XP para el nivel "," · next unlock at ":" · próximo desbloqueo a los ","<h3 class=\"rt chh\">Today’s challenges <span>":"<h3 class=\"rt chh\">Desafíos de hoy <span>"," Get ":" Meta: "," right.</span></button>":" aciertos.</span></button>","<div class=\"panel chcard chest\"><div class=\"chestrow\"><span class=\"chico\" aria-hidden=\"true\">🎁</span><div><b>Mystery chest</b><p class=\"sub\" style=\"margin:0\">":"<div class=\"panel chcard chest\"><div class=\"chestrow\"><span class=\"chico\" aria-hidden=\"true\">🎁</span><div><b>Cofre misterioso</b><p class=\"sub\" style=\"margin:0\">","You found a streak freeze ❄️. It saves your streak if you miss a day.":"Encontraste un protector de racha ❄️. Salva tu racha si te saltas un día.","You found ":"Encontraste "," New chest tomorrow.":" Nuevo cofre mañana.","Finish all 3 challenges to open it. It can hold XP or a streak freeze.":"Completa los 3 desafíos para abrirlo. Puede tener XP o un protector de racha.","Ready to open!":"¡Listo para abrir!","<button class=\"btn wide\" data-a=\"chchest\">Open the chest</button>":"<button class=\"btn wide\" data-a=\"chchest\">Abrir el cofre</button>","<div class=\"panel chcard\"><p class=\"qlabel\">Time attack</p><h2>60 seconds</h2><p class=\"sub\">Pick as many meanings as you can. Combos multiply your points. Your best: <b>":"<div class=\"panel chcard\"><p class=\"qlabel\">Contrarreloj</p><h2>60 segundos</h2><p class=\"sub\">Elige todos los significados que puedas. Los combos multiplican tus puntos. Tu récord: <b>","</b></p><button class=\"btn wide\" data-a=\"tastart\">Start</button></div>":"</b></p><button class=\"btn wide\" data-a=\"tastart\">Empezar</button></div>","<div class=\"panel chcard\"><p class=\"qlabel\">Weekly boss</p><h2>Sunday boss":"<div class=\"panel chcard\"><p class=\"qlabel\">Jefe semanal</p><h2>Jefe del domingo","<button class=\"btn wide\" data-a=\"chboss\">Fight the boss</button>":"<button class=\"btn wide\" data-a=\"chboss\">Enfrentar al jefe</button>","Beaten this week. The next boss comes on Sunday.":"Vencido esta semana. El próximo jefe llega el domingo.","The boss comes on Sunday, in ":"El jefe llega el domingo, en ","<h3 class=\"rt chh\">Medals <span>":"<h3 class=\"rt chh\">Medallas <span>","</div><h3 class=\"rt chh\">Unlocks</h3><div class=\"unl\">":"</div><h3 class=\"rt chh\">Desbloqueos</h3><div class=\"unl\">","<div class=\"w\"><div class=\"wl\"><b class=\"wde\">Classic theme</b><span class=\"wen\">The original look.</span></div><button class=\"chip\" data-a=\"skin\" data-v=\"\" aria-pressed=\"":"<div class=\"w\"><div class=\"wl\"><b class=\"wde\">Tema clásico</b><span class=\"wen\">El aspecto original.</span></div><button class=\"chip\" data-a=\"skin\" data-v=\"\" aria-pressed=\"","Use":"Usar","In use":"En uso","At ":"A los ","</div><p class=\"sub\" style=\"margin-top:14px\">Every challenge answer is checked by the app, so it counts toward recognized and mastered words, like Practice.</p>":"</div><p class=\"sub\" style=\"margin-top:14px\">La app revisa cada respuesta de los desafíos, así que cuenta para tus palabras reconocidas y dominadas, igual que en Practicar.</p>","<div class=\"panel\"><h2>Conversation</h2><p class=\"sub\">Chat in German. Read what the other person says, then write your reply. Use the hints if you get stuck. ":"<div class=\"panel\"><h2>Conversación</h2><p class=\"sub\">Chatea en inglés. Lee lo que dice la otra persona y escribe tu respuesta. Usa las pistas si te atascas. ","Claude checks each reply and corrects it.":"Claude revisa y corrige cada respuesta.","Your reply is compared with a model answer and its key words.":"Tu respuesta se compara con una respuesta modelo y sus palabras clave.","Beginner: short, simple sentences.":"Principiante: frases cortas y simples.","Elementary: everyday situations, past tense.":"Básico: situaciones cotidianas, pasado.","Intermediate: work and opinions, linking words.":"Intermedio: trabajo y opiniones, conectores.","Upper intermediate: arguing, explaining results, polite complaints.":"Intermedio alto: argumentar, explicar resultados, quejas corteses.","Advanced: negotiating and debating with nuance. Unlocked in Challenges.":"Avanzado: negociar y debatir con matices. Se desbloquea en Desafíos.","<div class=\"done\"><h2>Conversation done</h2><div class=\"score\">":"<div class=\"done\"><h2>Conversación terminada</h2><div class=\"score\">","Great chat. Try the next one or a higher level.":"¡Gran charla! Prueba la siguiente o un nivel más alto.","Good practice. Try it again with fewer hints.":"Buena práctica. Inténtalo otra vez con menos pistas.","\">Do it again</button><button class=\"btn ghost wide\" data-a=\"cvexit\">Choose another</button></div>":"\">Repetir</button><button class=\"btn ghost wide\" data-a=\"cvexit\">Elegir otra</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"cvexit\">✕ Exit</button></div><div class=\"prog\"><i style=\"width:":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"cvexit\">✕ Salir</button></div><div class=\"prog\"><i style=\"width:","<button class=\"link\" data-a=\"cven\" style=\"font-size:14px\">Show in English</button>":"<button class=\"link\" data-a=\"cven\" style=\"font-size:14px\">Ver en español</button>","<p class=\"task\">Your turn: ":"<p class=\"task\">Tu turno: ",">Key words</button><button data-a=\"cvhint\" data-v=\"st\"":">Palabras clave</button><button data-a=\"cvhint\" data-v=\"st\"",">How to start</button><button data-a=\"cvhint\" data-v=\"m\"":">Cómo empezar</button><button data-a=\"cvhint\" data-v=\"m\"",">Model answer</button></div>":">Respuesta modelo</button></div>","<p class=\"hbox\">Key words: <b>":"<p class=\"hbox\">Palabras clave: <b>","<p class=\"hbox\">Start with: <b>":"<p class=\"hbox\">Empieza con: <b>","<p class=\"hbox\">Model: <b>":"<p class=\"hbox\">Modelo: <b>","<button class=\"btn wide\" data-a=\"cvcheck\">Check</button><button class=\"link\" data-a=\"cvskip\" style=\"margin-top:12px\">I don’t know, show me</button>":"<button class=\"btn wide\" data-a=\"cvcheck\">Comprobar</button><button class=\"link\" data-a=\"cvskip\" style=\"margin-top:12px\">No lo sé, muéstramelo</button>","<div class=\"gres\"><p class=\"trl\">Your answer</p><p class=\"trs\">":"<div class=\"gres\"><p class=\"trl\">Tu respuesta</p><p class=\"trs\">","</p><p class=\"fb\">Claude is reading your answer…</p></div>":"</p><p class=\"fb\">Claude está leyendo tu respuesta…</p></div>","Here is a possible answer":"Esta es una posible respuesta","Good, with small fixes":"Bien, con pequeñas correcciones","Good answer":"¡Buena respuesta!","<p class=\"trl\">Corrected</p><div class=\"exrow\"><p class=\"trs\"><b>":"<p class=\"trl\">Corregida</p><div class=\"exrow\"><p class=\"trs\"><b>","<p class=\"fb\">Try to use: <b>":"<p class=\"fb\">Intenta usar: <b>","<p class=\"fb\">Your words can differ from the model. Compare and check word order and endings.</p>":"<p class=\"fb\">Tus palabras pueden ser distintas al modelo. Compara y revisa el orden de las palabras y las terminaciones.</p>","<p class=\"trl\">Model answer</p><div class=\"exrow\"><p class=\"trs\">":"<p class=\"trl\">Respuesta modelo</p><div class=\"exrow\"><p class=\"trs\">","Continue":"Continuar","you (informal)":"tú (informal)","he / she / it":"él / ella / ello","you (plural)":"ustedes (informal)","they / you (formal)":"ellos / usted(es) (formal)","All verbs":"Todos los verbos","Irregular":"Irregulares","Regular":"Regulares","Modal":"Modales","Work":"Trabajo","Present":"Presente","Perfect":"Perfecto","Mixed":"Mezcla","Perfect (Perfekt)":"Pretérito perfecto (Perfekt)","<div class=\"vperf\"><p class=\"vph\">Perfect</p>":"<div class=\"vperf\"><p class=\"vph\">Perfecto</p>",">Present</th><th":">Presente</th><th",">Past</th><th class=\"pc":">Pasado</th><th class=\"pc","</tbody></table><p class=\"vcap\">Tap any form to hear it. Perfect = ":"</tbody></table><p class=\"vcap\">Toca cualquier forma para escucharla. Perfecto = ","Modal verb: ich and er have the same form, with no ending (":"Verbo modal: ich y er tienen la misma forma, sin terminación (","). The second verb goes to the end as an infinitive.":"). El segundo verbo va al final en infinitivo.","Irregular present: ":"Presente irregular: ","Regular present: stem ":"Presente regular: raíz ","- + the normal endings.":"- + las terminaciones normales.","” goes to the end of the sentence.":"» va al final de la frase.","Irregular past: ":"Pasado irregular: ","Regular past: ":"Pasado regular: "," (stem + te).":" (raíz + te).","Perfect with ":"Perfecto con "," (irregular participle, ends in -en).":" (participio irregular, termina en -en).","<div class=\"vtw\"><table class=\"vt\"><thead><tr><th></th><th>Present</th><th>Past</th><th class=\"pc\">Perfect</th></tr></thead><tbody>":"<div class=\"vtw\"><table class=\"vt\"><thead><tr><th></th><th>Presente</th><th>Pasado</th><th class=\"pc\">Perfecto</th></tr></thead><tbody>","</tbody></table><p class=\"vcap\">Tap any form to hear it. <span class=\"vi\">Marked</span> forms are irregular. Perfect = ":"</tbody></table><p class=\"vcap\">Toca cualquier forma para escucharla. Las formas <span class=\"vi\">marcadas</span> son irregulares. Perfecto = ","<div class=\"qtop\"><button class=\"link exit\" data-a=\"vlesson\">✕ Close</button></div><h2 class=\"st\">How German verbs work</h2><p class=\"sub\">Six short lessons. Open one, read the examples and tap 🔊 to hear them.</p>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"vlesson\">✕ Cerrar</button></div><h2 class=\"st\">Cómo funcionan los verbos en inglés</h2><p class=\"sub\">Seis lecciones cortas. Abre una, lee los ejemplos y toca 🔊 para escucharlos.</p>","1 · Present tense: the endings":"1 · Presente: las terminaciones","<p class=\"sub\" style=\"margin:6px 0 0\">Take the infinitive, remove <b>-en</b> to get the stem (mach<b>en</b> → mach-), then add an ending for each person.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">Toma el infinitivo, quita <b>-en</b> para obtener la raíz (mach<b>en</b> → mach-) y añade una terminación para cada persona.</p>","<p class=\"warn\">If the stem ends in -t or -d, add an e: du arbeit<b>est</b>, er arbeit<b>et</b>. If it ends in -s, -ß or -z, du only adds -t: du heiß<b>t</b>.</p>":"<p class=\"warn\">Si la raíz termina en -t o -d, añade una e: du arbeit<b>est</b>, er arbeit<b>et</b>. Si termina en -s, -ß o -z, con du solo se añade -t: du heiß<b>t</b>.</p>","2 · Stem changes (only du and er/sie/es)":"2 · Cambios en la raíz (solo du y er/sie/es)","<p class=\"sub\" style=\"margin:6px 0 0\">Many common verbs change their vowel, but only for <b>du</b> and <b>er/sie/es</b>. The endings stay the same.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">Muchos verbos comunes cambian su vocal, pero solo con <b>du</b> y <b>er/sie/es</b>. Las terminaciones no cambian.</p>","3 · Separable verbs":"3 · Verbos separables","<p class=\"sub\" style=\"margin:6px 0 0\">Verbs like <b>auf</b>stehen, <b>an</b>rufen or <b>ein</b>kaufen split in a sentence: the verb is in position 2 and the prefix goes to the very end.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">Verbos como <b>auf</b>stehen, <b>an</b>rufen o <b>ein</b>kaufen se separan en la oración: el verbo va en la posición 2 y el prefijo va al final.</p>","<p class=\"warn\">In the perfect, ge- goes in the middle: aufgestanden, angerufen, eingekauft.</p>":"<p class=\"warn\">En el Perfekt, ge- va en medio: aufgestanden, angerufen, eingekauft.</p>","4 · Modal verbs":"4 · Verbos modales","<p class=\"sub\" style=\"margin:6px 0 0\">können, müssen, wollen, dürfen, sollen, mögen. ich and er/sie/es look the same and have no ending. The second verb goes to the end as an infinitive.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">können, müssen, wollen, dürfen, sollen, mögen. ich y er/sie/es son iguales y no llevan terminación. El segundo verbo va al final en infinitivo.</p>","<p class=\"sub\" style=\"margin:6px 0 0\">Regular verbs add <b>-te</b> to the stem: mach<b>te</b>, lern<b>te</b>, arbeit<b>ete</b>. Irregular verbs get a new stem: gehen → <b>ging</b>, kommen → <b>kam</b>, sprechen → <b>sprach</b>.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">Los verbos regulares añaden <b>-te</b> a la raíz: mach<b>te</b>, lern<b>te</b>, arbeit<b>ete</b>. Los irregulares cambian de raíz: gehen → <b>ging</b>, kommen → <b>kam</b>, sprechen → <b>sprach</b>.</p>","<p class=\"warn\">ich and er/sie/es are the same. In speech Germans use the Präteritum mostly for sein (war), haben (hatte) and the modal verbs (konnte, musste). For other verbs they use the perfect.</p>":"<p class=\"warn\">ich y er/sie/es son iguales. Al hablar, los ingleses usan el Präteritum sobre todo con sein (war), haben (hatte) y los verbos modales (konnte, musste). Para los demás verbos usan el Perfekt.</p>","6 · Perfect (Perfekt): the spoken past":"6 · Perfekt: el pasado hablado","<p class=\"sub\" style=\"margin:6px 0 0\"><b>haben</b> or <b>sein</b> in position 2, and the participle at the end.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\"><b>haben</b> o <b>sein</b> en la posición 2, y el participio al final.</p>","ge + stem + t":"ge + raíz + t","ge + stem + en":"ge + raíz + en","prefix + ge + …":"prefijo + ge + …","<p class=\"warn\">Use <b>sein</b> with movement from A to B (gehen, fahren, kommen, fliegen) and change of state (werden, aufstehen), plus sein and bleiben. Everything else uses haben.</p>":"<p class=\"warn\">Usa <b>sein</b> con movimiento de A a B (gehen, fahren, kommen, fliegen) y cambio de estado (werden, aufstehen), además de sein y bleiben. Todo lo demás usa haben.</p>","<button class=\"btn wide\" data-a=\"vlesson\">Back to verbs</button>":"<button class=\"btn wide\" data-a=\"vlesson\">Volver a verbos</button>","<button class=\"lessonbtn\" data-a=\"vlesson\"><b>How German verbs work</b><span>Endings, stem changes, separable and modal verbs, past and perfect. Start here.</span></button>":"<button class=\"lessonbtn\" data-a=\"vlesson\"><b>Cómo funcionan los verbos ingleses</b><span>Terminaciones, cambios de raíz, verbos separables y modales, pasado y Perfekt. Empieza aquí.</span></button>","<div class=\"panel\"><h2>Learn new verbs</h2><p class=\"sub\">Study 5 verbs at a time: meaning, all forms with sound, and an example. Then a short practice on just those 5. ":"<div class=\"panel\"><h2>Aprende verbos nuevos</h2><p class=\"sub\">Estudia 5 verbos a la vez: significado, todas las formas con audio y un ejemplo. Luego, una práctica corta solo con esos 5. "," verbs studied here.</p>":" verbos estudiados aquí.</p>","<p class=\"qlabel\">Next up</p><p class=\"vnext\">":"<p class=\"qlabel\">A continuación</p><p class=\"vnext\">","<button class=\"btn wide\" data-a=\"vlstart\">Study these 5 verbs</button>":"<button class=\"btn wide\" data-a=\"vlstart\">Estudiar estos 5 verbos</button>","<p class=\"sub\">You have studied every verb in this group. Keep them fresh in Practice, or study 5 of them again.</p><button class=\"btn wide\" data-a=\"vlstart\" data-r=\"1\">Study 5 again</button>":"<p class=\"sub\">Ya estudiaste todos los verbos de este grupo. Mantenlos frescos en Practicar o estudia 5 otra vez.</p><button class=\"btn wide\" data-a=\"vlstart\" data-r=\"1\">Estudiar 5 otra vez</button>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"vlexit\">✕ Exit</button></div><div class=\"prog\"><i style=\"width:":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"vlexit\">✕ Salir</button></div><div class=\"prog\"><i style=\"width:","<p class=\"qn\">Verb ":"<p class=\"qn\">Verbo ","<button class=\"btn ghost\" data-a=\"vlprev\">Back</button>":"<button class=\"btn ghost\" data-a=\"vlprev\">Atrás</button>","<button class=\"btn\" data-a=\"vlnext\">Next verb</button>":"<button class=\"btn\" data-a=\"vlnext\">Siguiente verbo</button>","<button class=\"btn\" data-a=\"vlprac\">Practice these 5</button>":"<button class=\"btn\" data-a=\"vlprac\">Practicar estos 5</button>","Learn":"Aprender","Practice":"Practicar","<div class=\"panel\"><h2>Verb forms</h2><p class=\"sub\">You get a person, a verb and a tense, and you type the right form. ":"<div class=\"panel\"><h2>Formas verbales</h2><p class=\"sub\">Recibes una persona, un verbo y un tiempo, y escribes la forma correcta. "," verbs here, ":" verbos aquí, "," mastered (3 right answers in a row).</p>":" dominados (3 respuestas correctas seguidas).</p>","<button class=\"btn wide\" data-a=\"vstart\">Start 10 questions</button></div>":"<button class=\"btn wide\" data-a=\"vstart\">Empezar 10 preguntas</button></div>","<p class=\"sub\" style=\"margin-top:14px\">Type just the verb (you can include the pronoun). For the perfect, include haben or sein, for example “hat gemacht”. Umlauts can be typed as ae, oe, ue and ß as ss.</p>":"<p class=\"sub\" style=\"margin-top:14px\">Escribe solo el verbo (puedes incluir el pronombre). Para el Perfekt, incluye haben o sein, por ejemplo “hat gemacht”.</p>","<div class=\"done\"><h2>5 verbs studied</h2><div class=\"score\">":"<div class=\"done\"><h2>5 verbos estudiados</h2><div class=\"score\">"," are now part of your Practice rounds.</p>":" ya forman parte de tus rondas de Practicar.</p>","<button class=\"btn wide\" data-a=\"vlstart\">Next 5 verbs</button>":"<button class=\"btn wide\" data-a=\"vlstart\">Siguientes 5 verbos</button>","<button class=\"btn ghost wide\" data-a=\"vlstudy\">Study these 5 again</button><button class=\"btn ghost wide\" data-a=\"vexit\">Back to verbs</button></div>":"<button class=\"btn ghost wide\" data-a=\"vlstudy\">Estudiar estos 5 otra vez</button><button class=\"btn ghost wide\" data-a=\"vexit\">Volver a verbos</button></div>","<div class=\"done\"><h2>Verbs done</h2><div class=\"score\">":"<div class=\"done\"><h2>Verbos terminados</h2><div class=\"score\">","Irregular verbs take time. Try again.":"Los verbos irregulares toman tiempo. Inténtalo otra vez.","</p><button class=\"btn wide\" data-a=\"vstart\">10 more</button><button class=\"btn ghost wide\" data-a=\"vreset\">Change settings</button></div>":"</p><button class=\"btn wide\" data-a=\"vstart\">10 más</button><button class=\"btn ghost wide\" data-a=\"vreset\">Cambiar ajustes</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"vexit\">✕ Exit</button></div>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"vexit\">✕ Salir</button></div>"," …\" aria-label=\"Verb form\"><button class=\"btn small\" data-a=\"vcheck\">Check</button></div>":" …\" aria-label=\"Forma verbal\"><button class=\"btn small\" data-a=\"vcheck\">Comprobar</button></div>","<button class=\"link\" data-a=\"vskip\">I don’t know</button>":"<button class=\"link\" data-a=\"vskip\">No lo sé</button>","<div class=\"done\"><h2>Review done</h2><div class=\"score\">":"<div class=\"done\"><h2>Repaso terminado</h2><div class=\"score\">"," left. Each one leaves the list after you get it right ":" pendientes. Cada uno sale de la lista cuando lo respondes bien "," times in a row.":" veces seguidas.","Meaning":"Significado","Article":"Artículo","Fill the gap":"Completa el espacio","Verb":"Verbo","Write the word":"Escribe la palabra","Cases":"Casos"," · wrong ":" · fallada "," right since":" bien desde entonces","><b>Words</b> · ":"><b>Palabras</b> · "," <span class=\"exen\">(meanings, articles, gaps, writing, cases)</span></button>":" <span class=\"exen\">(significados, artículos, espacios, escritura, casos)</span></button>","><b>Sentences</b> · ":"><b>Oraciones</b> · ","><b>Verbs</b> · ":"><b>Verbos</b> · ","><b>Conversation replies</b> · ":"><b>Respuestas de conversación</b> · ","<h3 class=\"rt\" style=\"margin:16px 0 4px\">Most missed</h3>":"<h3 class=\"rt\" style=\"margin:16px 0 4px\">Los más fallados</h3>","Tap again to clear the list":"Toca otra vez para borrar la lista","Clear the list":"Borrar la lista"," to review</b></button>":" por repasar</b></button>","<p class=\"empty\">No words match your search.</p>":"<p class=\"empty\">Ninguna palabra coincide con tu búsqueda.</p>","<span class=\"kst m\" title=\"Mastered\">★<span class=\"kt\"> mastered</span></span>":"<span class=\"kst m\" title=\"Dominada\">★<span class=\"kt\"> dominada</span></span>","<span class=\"kst r\" title=\"Recognized\">✓<span class=\"kt\"> recognized</span></span>":"<span class=\"kst r\" title=\"Reconocida\">✓<span class=\"kt\"> reconocida</span></span>","Sure?":"¿Seguro?","Delete":"Eliminar","Close":"Cerrar","Add word":"Añadir palabra","<div class=\"form\"><label>Article<select id=\"f-art\"><option value=\"\">None (verb, adjective, phrase)</option><option>der</option><option>die</option><option>das</option></select></label>":"<div class=\"form\"><label>Artículo<select id=\"f-art\"><option value=\"\">Ninguno (verbo, adjetivo, frase)</option><option>der</option><option>die</option><option>das</option></select></label>","<label>German word<input id=\"f-de\" autocomplete=\"off\" autocapitalize=\"none\"></label>":"<label>Palabra en inglés<input id=\"f-de\" autocomplete=\"off\" autocapitalize=\"none\"></label>","<label>English meaning<input id=\"f-en\" autocomplete=\"off\"></label>":"<label>Significado en español<input id=\"f-en\" autocomplete=\"off\"></label>","<label>Example sentence (optional)<input id=\"f-ex\" autocomplete=\"off\"></label>":"<label>Oración de ejemplo (opcional)<input id=\"f-ex\" autocomplete=\"off\"></label>","<label>Category<select id=\"f-cat\">":"<label>Categoría<select id=\"f-cat\">","<button class=\"btn\" data-a=\"addsave\">Save word</button>":"<button class=\"btn\" data-a=\"addsave\">Guardar palabra</button>","Masculine":"Masculino","Days, months and seasons":"Días, meses y estaciones","Weather and compass points":"Clima y puntos cardinales","People who do something (-er)":"Personas que hacen algo (-er)","Endings -ling, -ismus, -ist, -or":"Terminaciones -ling, -ismus, -ist, -or","Most alcoholic drinks":"La mayoría de las bebidas alcohólicas","Exceptions: das Bier is neuter. Not every -er word is masculine: die Butter, das Fenster, das Zimmer.":"Excepciones: das Bier es neutro. No todas las palabras en -er son masculinas: die Butter, das Fenster, das Zimmer.","Feminine":"Femenino","Endings -ung, -heit, -keit, -schaft":"Terminaciones -ung, -heit, -keit, -schaft","Female people (-in)":"Mujeres (-in)","Most nouns ending in -e":"La mayoría de los sustantivos terminados en -e","Many trees and flowers":"Muchos árboles y flores","Every plural, whatever the gender":"Todos los plurales, sin importar el género","Exceptions to the -e rule: der Käse, der Name, das Ende.":"Excepciones a la regla de -e: der Käse, der Name, das Ende.","Neuter":"Neutro","Small things (-chen, -lein)":"Cosas pequeñas (-chen, -lein)","Verbs used as nouns":"Verbos usados como sustantivos","Endings -ment, -um, -ma":"Terminaciones -ment, -um, -ma","Young people and animals":"Personas y animales jóvenes","Metals and chemical elements":"Metales y elementos químicos","Often start with Ge-":"Suelen empezar con Ge-","Languages and colors as nouns":"Idiomas y colores como sustantivos","Ge- is only a hint: der Gesang and die Gefahr are not neuter.":"Ge- es solo una pista: der Gesang y die Gefahr no son neutros.","Days, months and seasons are der":"Los días, meses y estaciones son der","Weather words are der":"Las palabras del clima son der","Most alcoholic drinks are der":"La mayoría de las bebidas alcohólicas son der","Plural-only word: plurals are always die":"Palabra solo en plural: los plurales siempre son die","Exception: ":"Excepción: ",", but this one is ":", pero esta es ","Male people who do something (-er) are der":"Los hombres que hacen algo (-er) son der","Compound word: it takes the gender of its last part, ":"Palabra compuesta: toma el género de su última parte, ","Exception: most alcoholic drinks are der, but beer is das":"Excepción: la mayoría de las bebidas alcohólicas son der, pero la cerveza es das","Female people ending in -in are die":"Las mujeres terminadas en -in son die","Verbs used as nouns are das":"Los verbos usados como sustantivos son das","Words ending in -":"Las palabras terminadas en -","Exception: words ending in -":"Excepción: las palabras terminadas en -"," are usually ":" suelen ser ","Male people ending in -e are der":"Los hombres terminados en -e son der","Most nouns ending in -e are die":"La mayoría de los sustantivos terminados en -e son die","Exception: most nouns ending in -e are die, but this one is ":"Excepción: la mayoría de los sustantivos terminados en -e son die, pero esta es ","Nouns starting with Ge- are often das":"Los sustantivos que empiezan con Ge- suelen ser das","Exception: nouns starting with Ge- are often das, but this one is ":"Excepción: los sustantivos que empiezan con Ge- suelen ser das, pero esta es ","No rule: learn this one by heart":"Sin regla: apréndela de memoria","<p class=\"rules-intro\">Patterns help you guess, but German has many exceptions. The safest habit is to learn every noun together with its article.</p>":"<p class=\"rules-intro\">Los patrones te ayudan a adivinar, pero el inglés tiene muchas excepciones. Lo más seguro es aprender cada sustantivo junto.</p>","<details class=\"rule a-none\"><summary><span>Compound words</span></summary><div class=\"rule-body\">":"<details class=\"rule a-none\"><summary><span>Palabras compuestas</span></summary><div class=\"rule-body\">","<p class=\"rt\">A compound noun takes the gender of its last word</p><div class=\"exs\">":"<p class=\"rt\">Un sustantivo compuesto toma el género de su última palabra</p><div class=\"exs\">","<details class=\"rule a-none\"><summary><span>No rule · learn by heart</span></summary><div class=\"rule-body\">":"<details class=\"rule a-none\"><summary><span>Sin regla · de memoria</span></summary><div class=\"rule-body\">","<p class=\"rt\">Many common nouns, especially short ones, follow no pattern</p>":"<p class=\"rt\">Muchos sustantivos comunes, sobre todo los cortos, no siguen ningún patrón</p>","<p class=\"sub\" style=\"margin:6px 0 0\">Words like die Post, die Hand or der Tisch don’t match any ending or group above. Nothing in the word tells you the gender, so you have to learn the article together with the word.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">Palabras como die Post, die Hand o der Tisch no coinciden con ninguna terminación ni grupo de arriba. Nada en la palabra te dice el género, así que tienes que aprender el artículo junto con la palabra.</p>","<p class=\"rt\">Examples</p><div class=\"exs\">":"<p class=\"rt\">Ejemplos</p><div class=\"exs\">","<p class=\"rt\">How to learn them</p><p class=\"sub\" style=\"margin:6px 0 0\">Always say the article out loud with the word (“die Post”, not “Post”). Use the colors: blue der, purple die, green das. Practice them in the der / die / das quiz.</p>":"<p class=\"rt\">Cómo aprenderlos</p><p class=\"sub\" style=\"margin:6px 0 0\">Di siempre el artículo en voz alta con la palabra (“die Post”, no “Post”). Usa los colores: azul der, morado die, verde das. Practícalos en el quiz de der / die / das.</p>","<p class=\"warn\">Weak hint: many one-syllable nouns are der (der Tisch, der Weg), but there are lots of exceptions (die Hand, das Bett).</p></div></details>":"<p class=\"warn\">Pista débil: muchos sustantivos de una sílaba son der (der Tisch, der Weg), pero hay muchas excepciones (die Hand, das Bett).</p></div></details>","<p class=\"sub\" style=\"margin:12px 0\">Every noun card in Learn and Words shows which rule it follows, or that it has none.</p>":"<p class=\"sub\" style=\"margin:12px 0\">Cada tarjeta de sustantivo en Aprender y Palabras muestra qué regla sigue, o si no tiene ninguna.</p>","<button class=\"btn wide\" data-a=\"qart\">Practice with the article quiz</button>":"<button class=\"btn wide\" data-a=\"qart\">Practica con el quiz de artículos</button>","Correct answer: <span>":"Respuesta correcta: <span>","</div><div class=\"heatkey\">Less <i style=\"background:var(--line)\"></i><i class=\"l1\" style=\"background:color-mix(in srgb,var(--das) 35%,var(--line))\"></i><i style=\"background:color-mix(in srgb,var(--das) 65%,var(--line))\"></i><i style=\"background:var(--das)\"></i> Goal reached</div>":"</div><div class=\"heatkey\">Menos <i style=\"background:var(--line)\"></i><i class=\"l1\" style=\"background:color-mix(in srgb,var(--das) 35%,var(--line))\"></i><i style=\"background:color-mix(in srgb,var(--das) 65%,var(--line))\"></i><i style=\"background:var(--das)\"></i> Meta cumplida</div>","🎉 Daily goal reached: ":"🎉 ¡Meta diaria cumplida: "," answers!":" respuestas!","Daily goal reached. Great work!":"Meta diaria cumplida. ¡Buen trabajo!","Only ":"Solo "," more today to keep your goal.":" más hoy para mantener tu meta."," more answers to reach today’s goal.":" respuestas más para alcanzar la meta de hoy.","\">Next up: ":"\">Siguiente: ","Master ":"Domina ","Finish the ":"Termina las conversaciones de ","Read the ":"Lee las historias de "," right answers in Cases":" respuestas correctas en Casos","take the placement test":"haz la prueba de nivel","<div class=\"done\"><h2>Your level: ":"<div class=\"done\"><h2>Tu nivel: ","</p><p class=\"sub\">Your path starts at ":"</p><p class=\"sub\">Tu camino empieza en ","The levels below are marked as passed, but you can still practice them.":"Los niveles anteriores quedan marcados como superados, pero aún puedes practicarlos.","</p><button class=\"btn wide\" data-a=\"plclose\">See my path</button></div>":"</p><button class=\"btn wide\" data-a=\"plclose\">Ver mi camino</button></div>","<div class=\"qtop\"><button class=\"link exit\" data-a=\"plclose\">✕ Exit</button></div><div class=\"prog\"><i style=\"width:":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"plclose\">✕ Salir</button></div><div class=\"prog\"><i style=\"width:","<p class=\"qn\">Placement test · ":"<p class=\"qn\">Prueba de nivel · ","See my level":"Ver mi nivel","Next":"Siguiente","<button class=\"link\" data-a=\"plpick\" data-v=\"\" style=\"margin-top:12px\">I don’t know</button>":"<button class=\"link\" data-a=\"plpick\" data-v=\"\" style=\"margin-top:12px\">No lo sé</button>","Right word, but add the article.":"Palabra correcta, pero añade el artículo.","Right word, wrong article.":"Palabra correcta, artículo incorrecto.","Who or what is here? The subject is in the Nominativ.":"¿Quién o qué está aquí? El sujeto va en Nominativ.","After “Das ist” the noun stays in the Nominativ.":"Después de “Das ist”, el sustantivo sigue en Nominativ.","suchen takes a direct object: Akkusativ.":"suchen lleva complemento directo: Akkusativ.","brauchen takes a direct object: Akkusativ.":"brauchen lleva complemento directo: Akkusativ.","für always takes the Akkusativ.":"für siempre va con Akkusativ.","ohne always takes the Akkusativ.":"ohne siempre va con Akkusativ.","sehen takes a direct object: Akkusativ.":"sehen lleva complemento directo: Akkusativ.","mit always takes the Dativ.":"mit siempre va con Dativ.","von always takes the Dativ.":"von siempre va con Dativ.","<details class=\"rule a-none\"><summary><span>Cases · der, den, dem</span></summary><div class=\"rule-body\">":"<details class=\"rule a-none\"><summary><span>Casos · der, den, dem</span></summary><div class=\"rule-body\">","<p class=\"sub\" style=\"margin:6px 0 0\">The article changes with the job of the noun in the sentence.</p>":"<p class=\"sub\" style=\"margin:6px 0 0\">El artículo cambia según la función del sustantivo en la oración.</p>","<p class=\"rt\">Nominativ: who does it (the subject)</p><div class=\"exs\">":"<p class=\"rt\">Nominativ: quién lo hace (el sujeto)</p><div class=\"exs\">","<p class=\"rt\">Akkusativ: what you do something to (direct object)</p><div class=\"exs\">":"<p class=\"rt\">Akkusativ: sobre qué recae la acción (complemento directo)</p><div class=\"exs\">","<p class=\"rt\">Dativ: to whom / with whom (indirect object)</p><div class=\"exs\">":"<p class=\"rt\">Dativ: a quién / con quién (complemento indirecto)</p><div class=\"exs\">","<p class=\"rt\">Always Dativ</p><p class=\"sub\" style=\"margin:4px 0 0\">aus, bei, mit, nach, seit, von, zu</p>":"<p class=\"rt\">Siempre Dativ</p><p class=\"sub\" style=\"margin:4px 0 0\">aus, bei, mit, nach, seit, von, zu</p>","<p class=\"rt\">Two-way: Akkusativ for movement, Dativ for place</p><p class=\"sub\" style=\"margin:4px 0 0\">an, auf, hinter, in, neben, über, unter, vor, zwischen. Ich gehe in den Park (where to?). Ich bin im Park (where?).</p>":"<p class=\"rt\">Mixtas: Akkusativ para movimiento, Dativ para lugar</p><p class=\"sub\" style=\"margin:4px 0 0\">an, auf, hinter, in, neben, über, unter, vor, zwischen. Ich gehe in den Park (¿adónde?). Ich bin im Park (¿dónde?).</p>","<p class=\"warn\">Only masculine (der) changes in the Akkusativ: der → den. In the Dativ, der → dem, die → der, das → dem.</p>":"<p class=\"warn\">Solo el masculino (der) cambia en Akkusativ: der → den. En Dativ: der → dem, die → der, das → dem.</p>","<button class=\"btn wide\" data-a=\"go\" data-v=\"case\">Practice cases</button></div></details>":"<button class=\"btn wide\" data-a=\"go\" data-v=\"case\">Practicar casos</button></div></details>","<div class=\"panel\"><h2>Read and listen</h2><p class=\"sub\">Short stories with questions. Choose <b>Read</b> to see the text, or <b>Listen</b> to hear it first without the text.</p>":"<div class=\"panel\"><h2>Leer y escuchar</h2><p class=\"sub\">Historias cortas con preguntas. Elige <b>Leer</b> para ver el texto, o <b>Escuchar</b> para oírla primero sin el texto.</p>","\">Read</button><button class=\"btn ghost small\" data-a=\"rdgo\" data-v=\"":"\">Leer</button><button class=\"btn ghost small\" data-a=\"rdgo\" data-v=\"","\" data-l=\"1\">Listen</button></div></div>":"\" data-l=\"1\">Escuchar</button></div></div>","<div class=\"story\"><b>A new story with your words</b><span class=\"exen\">Claude writes a ":"<div class=\"story\"><b>Una historia nueva con tus palabras</b><span class=\"exen\">Claude escribe una historia de nivel "," story using words you are learning.</span><button class=\"btn wide\" data-a=\"rdnew\"":" con palabras que estás aprendiendo.</span><button class=\"btn wide\" data-a=\"rdnew\"","Writing your story…":"Escribiendo tu historia…","Write a new story":"Escribir una historia nueva","<div class=\"qtop\"><button class=\"link exit\" data-a=\"rdexit\">✕ Exit</button></div>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"rdexit\">✕ Salir</button></div>"," · new story":" · historia nueva","Listening":"Escuchando","Reading":"Leyendo","<div class=\"row\"><button class=\"btn\" data-a=\"rdplay\">▶ Listen</button><button class=\"btn ghost\" data-a=\"rdstop\">■ Stop</button></div>":"<div class=\"row\"><button class=\"btn\" data-a=\"rdplay\">▶ Escuchar</button><button class=\"btn ghost\" data-a=\"rdstop\">■ Detener</button></div>","<button class=\"link\" data-a=\"rden\">Show in English</button>":"<button class=\"link\" data-a=\"rden\">Ver en español</button>","<p class=\"trkey\">Your words in this story: ":"<p class=\"trkey\">Tus palabras en esta historia: ","<p class=\"sub\" style=\"margin-top:12px\">Listen as often as you like, then answer. </p><button class=\"link\" data-a=\"rdshow\">Show the text</button>":"<p class=\"sub\" style=\"margin-top:12px\">Escucha cuantas veces quieras y luego responde. </p><button class=\"link\" data-a=\"rdshow\">Mostrar el texto</button>","<h3 class=\"rt\" style=\"margin:18px 0 6px\">Questions</h3>":"<h3 class=\"rt\" style=\"margin:18px 0 6px\">Preguntas</h3>","You understood everything.":"Lo entendiste todo.","Read it once more and listen again.":"Léela una vez más y vuelve a escucharla.","</p><button class=\"btn wide\" data-a=\"rdexit\">More stories</button></div>":"</p><button class=\"btn wide\" data-a=\"rdexit\">Más historias</button></div>","Cards":"Tarjetas","Read & listen":"Leer y escuchar","<h3 class=\"rt\" style=\"margin:18px 0 4px\">Words mastered per week</h3>":"<h3 class=\"rt\" style=\"margin:18px 0 4px\">Palabras dominadas por semana</h3>","Week of ":"Semana del ","Words mastered per week, last 8 weeks":"Palabras dominadas por semana, últimas 8 semanas","<p class=\"vcap\">A word counts when you type it correctly on ":"<p class=\"vcap\">Una palabra cuenta cuando la escribes correctamente en "," different days. Weeks before 11 October 2026 used the old flashcard rule.</p>":" días distintos. Las semanas antes del 11 de octubre de 2026 usaban la regla antigua de tarjetas.</p>","<h3 class=\"rt\" style=\"margin:18px 0 4px\">Study calendar</h3>":"<h3 class=\"rt\" style=\"margin:18px 0 4px\">Calendario de estudio</h3>","<h3 class=\"rt\" style=\"margin:18px 0 4px\">Answers per day</h3>":"<h3 class=\"rt\" style=\"margin:18px 0 4px\">Respuestas por día</h3>","Answers per day, last 14 days":"Respuestas por día, últimos 14 días","<h3 class=\"rt\" style=\"margin:18px 0 4px\">Weakest categories</h3>":"<h3 class=\"rt\" style=\"margin:18px 0 4px\">Categorías más débiles</h3>","<p class=\"sub\">Start learning words to see your categories here.</p>":"<p class=\"sub\">Empieza a aprender palabras para ver tus categorías aquí.</p>","<p class=\"sub\" style=\"margin-bottom:6px\">Most mistakes first. The bar shows how many words you have mastered.</p>":"<p class=\"sub\" style=\"margin-bottom:6px\">Primero las de más errores. La barra muestra cuántas palabras has dominado.</p>","Saved only in this browser.":"Guardado solo en este navegador.","Connecting to your Claude account…":"Conectando con tu cuenta de Claude…","Synced to your Claude account. Open the app on another device signed in to Claude and your progress follows you.":"Sincronizado con tu cuenta de Claude. Abre la app en otro dispositivo con tu sesión de Claude iniciada y tu progreso te acompañará.","Could not reach your Claude account. Your progress is still saved in this browser.":"No se pudo conectar con tu cuenta de Claude. Tu progreso sigue guardado en este navegador.","Cloud storage is full. Export a backup file instead.":"El almacenamiento en la nube está lleno. Exporta un archivo de copia de seguridad.","<h3 class=\"rt\" style=\"margin:18px 0 4px\">Backup</h3><p class=\"sub\" style=\"margin-bottom:8px\">":"<h3 class=\"rt\" style=\"margin:18px 0 4px\">Copia de seguridad</h3><p class=\"sub\" style=\"margin-bottom:8px\">","<div class=\"row\"><button class=\"btn ghost\" data-a=\"bkexp\">Export file</button><button class=\"btn ghost\" data-a=\"bkimp\">Import file</button></div><input type=\"file\" id=\"bk-file\" accept=\".json,application/json\" hidden>":"<div class=\"row\"><button class=\"btn ghost\" data-a=\"bkexp\">Exportar archivo</button><button class=\"btn ghost\" data-a=\"bkimp\">Importar archivo</button></div><input type=\"file\" id=\"bk-file\" accept=\".json,application/json\" hidden>","<div class=\"gres a-die\" style=\"margin-top:10px\"><p><b>Replace your progress?</b></p><p class=\"sub\" style=\"margin:0\">This backup is from ":"<div class=\"gres a-die\" style=\"margin-top:10px\"><p><b>¿Reemplazar tu progreso?</b></p><p class=\"sub\" style=\"margin:0\">Esta copia de seguridad es del ",". Your current progress in this browser will be replaced.</p><div class=\"row\"><button class=\"btn ghost\" data-a=\"bkno\">Cancel</button><button class=\"btn\" data-a=\"bkyes\">Replace</button></div></div>":". Tu progreso actual en este navegador será reemplazado.</p><div class=\"row\"><button class=\"btn ghost\" data-a=\"bkno\">Cancelar</button><button class=\"btn\" data-a=\"bkyes\">Reemplazar</button></div></div>","</h2><p class=\"sub\" style=\"margin:0\">answers today · streak ":"</h2><p class=\"sub\" style=\"margin:0\">respuestas hoy · racha de ","<p class=\"qlabel\" style=\"margin-top:14px\">Daily goal</p><div class=\"lvls\" role=\"group\" aria-label=\"Daily goal\">":"<p class=\"qlabel\" style=\"margin-top:14px\">Meta diaria</p><div class=\"lvls\" role=\"group\" aria-label=\"Meta diaria\">","<p class=\"sub\" style=\"margin:0\">Every answer counts: cards, quizzes, sentences, verbs, conversations and stories.</p>":"<p class=\"sub\" style=\"margin:0\">Cada respuesta cuenta: tarjetas, quizzes, oraciones, verbos, conversaciones e historias.</p>","<div class=\"sfx\"><span>Sounds for right and wrong answers</span><button class=\"chip\" data-a=\"sfxt\" aria-pressed=\"":"<div class=\"sfx\"><span>Sonidos para respuestas correctas e incorrectas</span><button class=\"chip\" data-a=\"sfxt\" aria-pressed=\"","On":"Sí","Off":"No","<h3 class=\"rt\" style=\"margin:18px 0 4px\">Your path</h3>":"<h3 class=\"rt\" style=\"margin:18px 0 4px\">Tu camino</h3>","Placement test: ":"Prueba de nivel: ","Take the placement test to find your starting level. ":"Haz la prueba de nivel para encontrar tu nivel inicial. ","Take it again":"Repetirla","Start the test":"Empezar la prueba","✓ Done":"✓ Completado","Passed in the test":"Superado en la prueba","You are here":"Estás aquí","Coming up":"Próximamente","You studied today":"Estudiaste hoy","Answer one question today to keep your streak":"Responde una pregunta hoy para mantener tu racha","</b><span>recognized</span></div><div title=\"You typed the German word with its article correctly on ":"</b><span>reconocidas</span></div><div title=\"Escribiste la palabra en inglés correctamente en ","<div class=\"helpbox\" id=\"helpbox\"><p><b>streak</b>: days in a row you studied.</p>":"<div class=\"helpbox\" id=\"helpbox\"><p><b>racha</b>: días seguidos que estudiaste.</p>","<p><b>recognized</b>: words you answered correctly in an exercise the app checks (Meanings, der / die / das, Fill the gap, Translate, Write the word). Flashcards in Learn don’t count here, because you grade those yourself.</p>":"<p><b>reconocidas</b>: palabras que respondiste bien en un ejercicio que la app comprueba (Significados, der / die / das, Completa el espacio, Traducir, Escribe la palabra). Las tarjetas de Aprender no cuentan aquí, porque tú mismo las calificas.</p>","<p><b>mastered</b>: words you can produce. You typed the German word, with its article for nouns, correctly on ":"<p><b>dominadas</b>: palabras que sabes producir. Escribiste la palabra en inglés correctamente en "," different days in Practice → Write the word. A wrong answer there starts the count again.</p>":" días distintos en Practicar → Escribe la palabra. Una respuesta incorrecta ahí reinicia la cuenta.</p>","<p>Flashcards in Learn decide when you see a word again. Your daily goal, path and charts are in Me → Progress.</p>":"<p>Las tarjetas de Aprender deciden cuándo vuelves a ver una palabra. Tu meta diaria, tu camino y tus gráficas están en Yo → Progreso.</p>","<button class=\"link\" data-a=\"help\">Close</button></div>":"<button class=\"link\" data-a=\"help\">Cerrar</button></div>","❄️ You found a streak freeze!":"❄️ ¡Encontraste un protector de racha!","🎁 You found ":"🎁 ¡Encontraste ","Added to your words":"Añadida a tus palabras","Claude is busy right now. Try again in a little while.":"Claude está ocupado ahora. Inténtalo de nuevo en un rato.","Claude could not write a story this time. Try again later.":"Claude no pudo escribir una historia esta vez. Inténtalo más tarde.","Backup file saved.":"Copia de seguridad guardada.","This browser could not save the file.":"Este navegador no pudo guardar el archivo.","Export cancelled.":"Exportación cancelada.","The file could not be saved here.":"No se pudo guardar el archivo aquí.","Backup restored.":"Copia de seguridad restaurada.","Claude is busy right now, so this was checked against the model answer.":"Claude está ocupado ahora, así que se comprobó con la respuesta modelo.","Claude could not check this one, so it was checked against the model answer.":"Claude no pudo comprobar esta, así que se comprobó con la respuesta modelo.","Enter both the German word and its meaning.":"Escribe la palabra en inglés y su significado.","an unknown date":"una fecha desconocida","That file is not a Wortschatz backup.":"Ese archivo no es una copia de seguridad de Wortschatz."," of ":" de "," are ":" son "," words":" palabras"," verbs":" verbos"," conversations":""," stories":""," mastered":" dominadas","no plural":"sin plural","plural only":"solo en plural"," new</span><button class=\"link\" data-a=\"rev\">":" nuevas</span><button class=\"link\" data-a=\"rev\">","</span><button class=\"icon\" data-a=\"say\" aria-label=\"Pronounce\">":"</span><button class=\"icon\" data-a=\"say\" aria-label=\"Pronunciar\">","</p><button class=\"icon\" data-a=\"say\" data-ex=\"1\" aria-label=\"Pronounce sentence\">":"</p><button class=\"icon\" data-a=\"say\" data-ex=\"1\" aria-label=\"Pronunciar oración\">","\" aria-label=\"Pronounce\">":"\" aria-label=\"Pronunciar\">","\" aria-label=\"Pronounce sentence\">":"\" aria-label=\"Pronunciar oración\">","\" data-ex=\"1\" aria-label=\"Pronounce sentence\">":"\" data-ex=\"1\" aria-label=\"Pronunciar oración\">","<textarea id=\"tr-in\" rows=\"2\" autocomplete=\"off\" autocapitalize=\"sentences\" spellcheck=\"false\" placeholder=\"Your German sentence\" aria-label=\"Your German translation\">":"<textarea id=\"tr-in\" rows=\"2\" autocomplete=\"off\" autocapitalize=\"sentences\" spellcheck=\"false\" placeholder=\"Tu oración en inglés\" aria-label=\"Tu traducción al inglés\">","</b> points</span></div>":"</b> puntos</span></div>","<span class=\"tick\" aria-label=\"done\">✓</span>":"<span class=\"tick\" aria-label=\"hecho\">✓</span>","<div class=\"lvls\" role=\"group\" aria-label=\"Level\" style=\"grid-template-columns:repeat(":"<div class=\"lvls\" role=\"group\" aria-label=\"Nivel\" style=\"grid-template-columns:repeat(","\" aria-label=\"Listen\">":"\" aria-label=\"Escuchar\">","<textarea id=\"cv-in\" rows=\"3\" autocomplete=\"off\" autocapitalize=\"sentences\" spellcheck=\"false\" placeholder=\"Write your answer in German\" aria-label=\"Your reply in German\">":"<textarea id=\"cv-in\" rows=\"3\" autocomplete=\"off\" autocapitalize=\"sentences\" spellcheck=\"false\" placeholder=\"Escribe tu respuesta en inglés\" aria-label=\"Tu respuesta en inglés\">","\" aria-label=\"Listen to the model answer\">":"\" aria-label=\"Escuchar la respuesta modelo\">","<div class=\"chips\" role=\"group\" aria-label=\"Verb group\">":"<div class=\"chips\" role=\"group\" aria-label=\"Grupo de verbos\">","<div class=\"bar\"><input id=\"q\" type=\"search\" placeholder=\"Search words\" value=\"":"<div class=\"bar\"><input id=\"q\" type=\"search\" placeholder=\"Buscar palabras\" value=\"","\" aria-label=\"Search words\"><button class=\"btn small\" data-a=\"addt\">":"\" aria-label=\"Buscar palabras\"><button class=\"btn small\" data-a=\"addt\">","<div class=\"heat\" role=\"img\" aria-label=\"Study days, last 16 weeks\">":"<div class=\"heat\" role=\"img\" aria-label=\"Días de estudio, últimas 16 semanas\">"," answers\"></i>":" respuestas\"></i>"," today</b><span>":" hoy</b><span>","<div class=\"lvls\" role=\"group\" aria-label=\"Level\">":"<div class=\"lvls\" role=\"group\" aria-label=\"Nivel\">","<span class=\"tick\" aria-label=\"done\">✓ </span>":"<span class=\"tick\" aria-label=\"hecho\">✓ </span>","words":"palabras","answers":"respuestas","</b><span>streak</span></div><div title=\"You chose or typed the right meaning in a checked exercise\"><b>":"</b><span>racha</span></div><div title=\"Elegiste o escribiste el significado correcto en un ejercicio que revisa la app\"><b>"," different days\"><b>":" días distintos\"><b>","</b><span>mastered</span></div><button class=\"help\" data-a=\"help\" aria-label=\"What do these numbers mean?\" aria-expanded=\"":"</b><span>dominadas</span></div><button class=\"help\" data-a=\"help\" aria-label=\"¿Qué significan estos números?\" aria-expanded=\"","Meanings, translations, lessons and buttons use this language. Your progress stays the same.":"Los significados, traducciones, lecciones y botones usan este idioma. Tu progreso no cambia.","Eight short lessons. Open one, read the examples and tap 🔊 to hear them.":"Ocho lecciones cortas. Abre una, lee los ejemplos y toca 🔊 para escucharlos.","7 · Irregular verbs: what exactly changes":"7 · Verbos irregulares: qué cambia exactamente","An irregular verb can change in three places, and each one is separate. gehen is regular in the present but irregular in the past (ging). wissen is irregular in the present (ich weiß) and only half irregular in the past (wusste).":"Un verbo irregular puede cambiar en tres lugares, y cada uno es independiente. gehen es regular en presente pero irregular en pasado (ging). wissen es irregular en presente (ich weiß) y solo a medias en pasado (wusste).","Where":"Dónde","What changes":"Qué cambia","Example":"Ejemplo","Participle":"Participio","only du and er/sie/es, the vowel":"solo du y er/sie/es, la vocal","new stem, no -te; ich and er have no ending":"raíz nueva, sin -te; ich y er sin terminación","ends in -en, often with a new vowel":"termina en -en, muchas veces con otra vocal","Present: which verbs change their vowel":"Presente: qué verbos cambian la vocal","wir, ihr and sie never change: wir fahren, ihr fahrt. Also watch the consonants: nehmen → du nimmst, er nimmt. halten → du hältst, er hält (no extra -et).":"wir, ihr y sie nunca cambian: wir fahren, ihr fahrt. Ojo también con las consonantes: nehmen → du nimmst, er nimmt. halten → du hältst, er hält (sin -et extra).","Past and participle: the vowel patterns":"Pretérito y participio: los patrones de vocales","Strong verbs follow a few vowel patterns. Learn the three forms together, like a song: trinken, trank, getrunken.":"Los verbos fuertes siguen unos pocos patrones de vocales. Aprende las tres formas juntas, como una canción: trinken, trank, getrunken.","Pattern":"Patrón","Also":"También","Mixed verbs: -te and a new vowel":"Verbos mixtos: -te y otra vocal","A few verbs take the regular -te and ge…t, but still change their stem.":"Algunos verbos llevan el -te y el ge…t regulares, pero igual cambian la raíz.","In the Verbs list, every verb card marks its irregular forms in color, so you can see exactly which persons and tenses change.":"En la lista de verbos, cada tarjeta marca en color sus formas irregulares, así ves exactamente qué personas y tiempos cambian.","8 · Full tables: sein, haben, werden, wissen and the modal verbs":"8 · Tablas completas: sein, haben, werden, wissen y los verbos modales","These are the most used verbs in German and the most irregular. Learn them by heart.":"Son los verbos más usados del inglés y los más irregulares. Apréndelos de memoria.","Past":"Pasado","Modal verbs":"Verbos modales","Modal verbs have no ending for ich and er, and most lose their umlaut in the singular (können → ich kann) and in the past (konnte, musste, durfte). möchten (would like) is a polite form of mögen. Its past is wollte.":"Los verbos modales no tienen terminación con ich y er, y la mayoría pierde la diéresis en singular (können → ich kann) y en pasado (konnte, musste, durfte). möchten (me gustaría) es una forma cortés de mögen. Su pasado es wollte.","Mixed verb: regular -te, but the stem changes: ":"Verbo mixto: -te regular, pero la raíz cambia: ","Endings, stem changes, separable and modal verbs, past and perfect, irregular verbs and full tables. Start here.":"Terminaciones, cambios de raíz, verbos separables y modales, pasado y perfecto, verbos irregulares y tablas completas. Empieza aquí.","Prepositions + article · im, am, zum":"Preposición + artículo · im, am, zum","Some prepositions merge with dem, der or das into one short word.":"Algunas preposiciones se juntan con dem, der o das en una sola palabra corta.","Dativ (where? with whom?)":"Dativ (¿dónde? ¿con quién?)","Akkusativ (where to?)":"Akkusativ (¿hacia dónde?)","Spoken, optional in writing":"Hablado, opcional al escribir","Always the short form in fixed phrases":"Siempre la forma corta en frases hechas","Use the long form when you mean one specific thing (this one, that one) or when a relative clause follows":"Usa la forma larga cuando hablas de una cosa específica (esta, esa) o cuando sigue una oración de relativo","No short form with die or plurals":"Sin forma corta con die ni con plurales","Only zu der becomes zur. in die, an die, auf die and every plural (in den, zu den) stay as two words.":"Solo zu der se vuelve zur. in die, an die, auf die y todos los plurales (in den, zu den) quedan como dos palabras.","Practice im, am, zum…":"Practicar im, am, zum…","Prepositions + article · ":"Preposición + artículo · ","Done! ":"¡Listo! "," right.":" correctas.","Practice again":"Practicar otra vez","Back to rules":"Volver a las reglas","✕ Exit":"✕ Salir","in + dem = im. Where? → Dativ.":"in + dem = im. ¿Dónde? → Dativ.","in + das = ins. Where to? → Akkusativ.":"in + das = ins. ¿Hacia dónde? → Akkusativ.","Days of the week: an + dem = am.":"Días de la semana: an + dem = am.","die Arbeit is feminine: zu + der = zur.":"die Arbeit es femenino: zu + der = zur.","der Bahnhof is masculine: zu + dem = zum.":"der Bahnhof es masculino: zu + dem = zum.","bei + dem = beim.":"bei + dem = beim.","von + dem = vom.":"von + dem = vom.","das Meer, where to? an + das = ans.":"das Meer, ¿hacia dónde? an + das = ans.","Months: in + dem = im.":"Meses: in + dem = im.","Fixed phrase: ins Bett gehen.":"Frase hecha: ins Bett gehen.","der Stadtrand, where? an + dem = am.":"der Stadtrand, ¿dónde? an + dem = am.","die Stadt, where to? in + die has no short form.":"die Stadt, ¿hacia dónde? in + die no tiene forma corta.","die Stadt, where? in + der has no short form.":"die Stadt, ¿dónde? in + der no tiene forma corta.","Fixed phrase: zum Beispiel.":"Frase hecha: zum Beispiel.","der Tisch, where? auf + dem has no short form.":"der Tisch, ¿dónde? auf + dem no tiene forma corta.","das Regal, where to? auf + das = aufs (spoken; auf das is also correct).":"das Regal, ¿hacia dónde? auf + das = aufs (hablado; auf das también es correcto).","die Freunde is plural: zu den has no short form.":"die Freunde es plural: zu den no tiene forma corta.","Seasons: in + dem = im.":"Estaciones: in + dem = im.","5 · Simple past (Präteritum)":"5 · Pasado simple (Präteritum)","Present tense: the endings":"Presente: las terminaciones","Stem changes (only du and er/sie/es)":"Cambios en la raíz (solo du y er/sie/es)","Separable verbs":"Verbos separables","Perfect (Perfekt): the spoken past":"Perfekt: el pasado hablado","Irregular verbs: what exactly changes":"Verbos irregulares: qué cambia exactamente","Full tables: sein, haben, werden, wissen and the modal verbs":"Tablas completas: sein, haben, werden, wissen y los verbos modales","Simple past (Präteritum)":"Pasado simple (Präteritum)","<div class=\"qtop\"><button class=\"link exit\" data-a=\"vlesson\">✕ Close</button></div><h2 class=\"st\">How German verbs work</h2>":"<div class=\"qtop\"><button class=\"link exit\" data-a=\"vlesson\">✕ Cerrar</button></div><h2 class=\"st\">Cómo funcionan los verbos en inglés</h2>","<button class=\"lessonbtn\" data-a=\"vlesson\"><b>How German verbs work</b>":"<button class=\"lessonbtn\" data-a=\"vlesson\"><b>Cómo funcionan los verbos ingleses</b>","Short lessons, ordered by level. Open one, read the examples and tap 🔊 to hear them.":"Lecciones cortas, ordenadas por nivel. Abre una, lee los ejemplos y toca 🔊 para escucharlos.","Show the LV lessons anyway":"Ver las lecciones de LV de todas formas","Show the LV rules anyway":"Ver las reglas de LV de todas formas","Earlier level":"Nivel anterior","Your level":"Tu nivel","Coming later":"Más adelante"," practices passed":" prácticas aprobadas","Practice: ":"Práctica: ","Not practiced yet. Pass with 8 of 10.":"Aún sin practicar. Se aprueba con 8 de 10.","Best: ":"Mejor resultado: "," · passed":" · aprobada"," · pass with 8 of 10":" · se aprueba con 8 de 10","Read the lessons":"Leer las lecciones","Rules are ordered by level, from simple to complex. Start with your level. Passing a level’s practices (8 of 10) counts toward that level in your path.":"Las reglas están ordenadas por nivel, de lo simple a lo complejo. Empieza por tu nivel. Aprobar las prácticas de un nivel (8 de 10) cuenta para ese nivel en tu ruta.","No new rules for B2 yet. Keep going with the conversations and stories.":"Todavía no hay reglas nuevas para B2. Sigue con las conversaciones y las historias.","Passed. It counts toward your ":"Aprobada. Cuenta para tu meta de "," goal.":".","You need 8 of 10 to pass. Try again when you are ready.":"Necesitas 8 de 10 para aprobar. Inténtalo otra vez cuando quieras.","Pass the ":"Aprobar las prácticas de reglas de "," rule practices":"","Noun gender: der, die, das":"Género de los sustantivos: der, die, das","Verbs: present, separable and modal":"Verbos: presente, separables y modales","Prepositions + article: im, am, zum":"Preposición + artículo: im, am, zum","Plurals":"Plurales","Verbs: simple past and perfect":"Verbos: pasado simple y perfecto","Irregular verbs: past and participle":"Verbos irregulares: pasado y participio","Plurals · die Kinder, die Häuser":"Plurales · die Kinder, die Häuser","German has several plural endings. These patterns cover most nouns. In the plural the article is always die.":"El inglés tiene varias terminaciones de plural. Estos patrones cubren la mayoría de los sustantivos. En plural el artículo siempre es die.","no change (sometimes ¨)":"sin cambio (a veces ¨)","many der nouns":"muchos sustantivos der","+ e (often ¨)":"+ e (a menudo ¨)","short das nouns":"sustantivos das cortos","+ er (with ¨)":"+ er (con ¨)","vowel at the end, foreign words":"terminan en vocal, palabras extranjeras","Dativ plural adds -n: mit den Kindern (unless the plural ends in -n or -s: mit den Autos). Every noun card shows its plural, so learn it together with the word.":"El Dativ plural agrega -n: mit den Kindern (salvo que el plural termine en -n o -s: mit den Autos). Cada tarjeta muestra el plural, así que apréndelo junto con la palabra.","-ung → always die.":"-ung → siempre die.","-chen → always das, even for a girl.":"-chen → siempre das, incluso para una niña.","Female people ending in -in → die.":"Mujeres con -in → die.","Days, months and seasons → der.":"Días, meses y estaciones → der.","-heit → always die.":"-heit → siempre die.","-ment → das.":"-ment → das.","Compound: the last part decides. der Schrank → der Kühlschrank.":"Compuesto: decide la última parte. der Schrank → der Kühlschrank.","-tät → die.":"-tät → die.","Verbs used as nouns → das.":"Verbos usados como sustantivos → das.","-ismus → der.":"-ismus → der.","Most nouns ending in -e → die.":"La mayoría de los sustantivos en -e → die.","Seasons → der.":"Estaciones → der.","Compound: das Haus → das Krankenhaus.":"Compuesto: das Haus → das Krankenhaus.","-schaft → die.":"-schaft → die.","-chen → das.":"-chen → das.","-ion → die.":"-ion → die.","e → i for du and er: du sprichst.":"e → i con du y er: du sprichst.","e → ie for du and er: er sieht.":"e → ie con du y er: er sieht.","a → ä for du and er/sie/es: sie fährt.":"a → ä con du y er/sie/es: sie fährt.","ihr → -t.":"ihr → -t.","The stem ends in -t, so add an e: du arbeitest.":"La raíz termina en -t, así que se agrega una e: du arbeitest.","The stem ends in -ß, so du only adds -t.":"La raíz termina en -ß, así que du solo agrega -t.","Separable: the verb is in position 2 and auf goes to the end.":"Separable: el verbo va en la posición 2 y auf va al final.","Separable: rufe … an.":"Separable: rufe … an.","Modal verbs: ich and er have no ending. er kann.":"Verbos modales: ich y er no tienen terminación. er kann.","ich möchte: the polite way to say what you want.":"ich möchte: la forma cortés de decir lo que quieres.","wir looks like the infinitive: wir müssen.":"wir es igual al infinitivo: wir müssen.","Modal verbs lose the umlaut in the singular: du darfst.":"Los modales pierden la diéresis en singular: du darfst.","sein: ich bin, du bist, er ist.":"sein: ich bin, du bist, er ist.","haben: du hast, er hat.":"haben: du hast, er hat.","Feminine nouns ending in -e add -n.":"Los femeninos en -e agregan -n.","-ung adds -en.":"-ung agrega -en.","-in adds -nen.":"-in agrega -nen.","der and das nouns ending in -er don’t change.":"Los sustantivos der y das en -er no cambian.","-chen doesn’t change.":"-chen no cambia.","Nouns ending in a vowel (not -e) and foreign words add -s.":"Los que terminan en vocal (no -e) y las palabras extranjeras agregan -s.","Short das nouns often add -er.":"Los sustantivos das cortos suelen agregar -er.","Short das nouns add -er, often with an umlaut.":"Los sustantivos das cortos agregan -er, a menudo con diéresis.","Many der nouns add -e.":"Muchos sustantivos der agregan -e.","Many der nouns add -e, often with an umlaut.":"Muchos sustantivos der agregan -e, a menudo con diéresis.","-ion adds -en.":"-ion agrega -en.","Foreign words add -s.":"Las palabras extranjeras agregan -s.","-er nouns get no ending, sometimes an umlaut.":"Los sustantivos en -er no llevan terminación, a veces diéresis.","Dativ plural adds -n, unless the plural already ends in -n or -s.":"El Dativ plural agrega -n, salvo que el plural ya termine en -n o -s.","Simple past of sein: war.":"Pasado simple de sein: war.","wir hatten.":"wir hatten.","Movement from A to B → sein: ich bin gefahren.":"Movimiento de A a B → sein: ich bin gefahren.","Most verbs use haben.":"La mayoría de los verbos usa haben.","Separable: ge- goes in the middle.":"Separable: ge- va en el medio.","Verbs ending in -ieren have no ge-.":"Los verbos en -ieren no llevan ge-.","Regular: ge + stem + t.":"Regular: ge + raíz + t.","Verbs with ver-, be- or er- have no ge-.":"Los verbos con ver-, be- o er- no llevan ge-.","Modal verbs in the past: konnte, musste, wollte.":"Modales en pasado: konnte, musste, wollte.","bleiben takes sein: ist geblieben.":"bleiben va con sein: ist geblieben.","Irregular participle: gegessen.":"Participio irregular: gegessen.","In speech, sein uses the simple past: ich war.":"Al hablar, sein usa el pasado simple: ich war.","Pattern i → a → u.":"Patrón i → a → u.","Pattern e → a → o.":"Patrón e → a → o.","Pattern ei → ie → ie.":"Patrón ei → ie → ie.","Pattern ie → o → o.":"Patrón ie → o → o.","Mixed verb: -te plus a new stem.":"Verbo mixto: -te y una raíz nueva.","Mixed verb: ge…t with a new stem.":"Verbo mixto: ge…t con una raíz nueva.","Pattern a → u → a.":"Patrón a → u → a.","Pattern a → ie → a.":"Patrón a → ie → a.","Mixed verb: wusste, gewusst.":"Verbo mixto: wusste, gewusst.","Pattern e → a → o, with mm.":"Patrón e → a → o, con mm.","Pattern e → a → e.":"Patrón e → a → e.","Mixed verb: kannte, gekannt.":"Verbo mixto: kannte, gekannt.","A word is mastered when you type it right, with its article, in Practice → Write the word on 2 different days. A wrong answer starts it over.":"Una palabra queda dominada cuando la escribes bien,, en Practicar → Escribe la palabra en 2 días distintos. Una respuesta incorrecta la reinicia.","Halfway now: ":"A medio camino: "," words (right on one day).":" palabras (bien en un día).","A verb is mastered after 3 right answers in a row in Practice → Verb forms, the verb lessons or verb challenges. A wrong answer or a skip starts it over.":"Un verbo queda dominado con 3 respuestas correctas seguidas en Practicar → Formas verbales, en las lecciones de verbos o en los desafíos de verbos. Un error o saltarlo lo reinicia.","Opportunities":"Oportunidades","<button class=\"mbar\" data-a=\"mopen\"><span>My opportunities</span><b>":"<button class=\"mbar\" data-a=\"mopen\"><span>Mis oportunidades</span><b>","</p><button class=\"btn wide\" data-a=\"mopen\">Back to my opportunities</button></div>":"</p><button class=\"btn wide\" data-a=\"mopen\">Volver a mis oportunidades</button></div>","<p class=\"sub\">No opportunities saved right now.</p></div>":"<p class=\"sub\">No hay oportunidades guardadas por ahora.</p></div>","Your opportunities list is empty. Great work!":"Tu lista de oportunidades está vacía. ¡Buen trabajo!","</h2><p class=\"sub\">15 mixed questions from your opportunities and the words you studied. You can miss 3. Beat it for +100 XP.</p>":"</h2><p class=\"sub\">15 preguntas variadas de tus oportunidades y de las palabras que estudiaste. Puedes fallar 3. Véncelo y gana +100 XP.</p>","See the rule →":"Ver la regla →","🎉 You recovered it! ":"🎉 ¡La recuperaste! ","You are in A1: only the present counts toward mastering verbs. Past tenses count from A2, but you can practice them now.":"Estás en A1: para dominar verbos solo cuenta el presente. Los tiempos pasados cuentan desde A2, pero puedes practicarlos desde ya.","In A1 only the present tense counts.":"En A1 solo cuenta el presente."," times in a row, you recover it (+10 XP more). Up to 15 items per round.</p>":" veces seguidas, la recuperas (+10 XP extra). Hasta 15 elementos por ronda.</p>","<div class=\"panel\"><h2>My opportunities</h2><p class=\"sub\">Every wrong answer becomes an opportunity. Each right answer on one gives +5 XP, and when you get an item right ":"<div class=\"panel\"><h2>Mis oportunidades</h2><p class=\"sub\">Cada respuesta incorrecta se convierte en una oportunidad. Cada acierto en una da +5 XP, y cuando respondes bien un elemento ","Master N LV words":"Domina N palabras de LV","Master N LV verbs":"Domina N verbos de LV","Only LV content, for your path goal.":"Solo contenido de LV, para tu meta de nivel.","Practice everything":"Practicar todo","Endings -ion, -tät, -ur, -ik, -ie":"Terminaciones -ion, -tät, -ur, -ik, -ie","Verbs":"Verbos","Stories":"Historias","Conversations":"Conversaciones","How to answer":"Cómo responder","Check":"Comprobar","Translate sentences":"Traducir frases","Correct":"Correcto","Show the answer":"Ver la respuesta","Type it":"Escríbela","Your answer":"Tu respuesta","Start":"Empezar","Build it":"Ármala","Say it":"Dila","Practice whole sentences: you get one in English and answer in German.":"Practica frases completas: ves una en español y respondes en inglés.","Tap the German words in the right order. Good for learning word order, like the verb in second place.":"Toca las palabras en inglés en el orden correcto. Sirve para aprender el orden de la frase, como sujeto + verbo + complemento.","Say the sentence out loud in German and the app checks what it hears. Speaking fixes words in memory better than reading them.":"Di la frase en voz alta en inglés y la app revisa lo que escucha. Hablar fija las palabras en la memoria mejor que leerlas.","Your browser can’t listen, so you say the sentence out loud, then compare it with the answer and mark it yourself. This practice doesn’t change your progress.":"Tu navegador no puede escuchar, así que dices la frase en voz alta, la comparas con la respuesta y te corriges tú. Esta práctica no cambia tu progreso.","Type the sentence. Small typos count as almost right, and umlauts can be typed as ae, oe, ue and ß as ss.":"Escribe la frase. Los errores pequeños cuentan como casi bien.","Sentences up to your level, LV.":"Frases hasta tu nivel, LV.","Build this in German":"Arma esto en inglés","Say this in German":"Di esto en inglés","Your sentence":"Tu frase","Tap the words below":"Toca las palabras de abajo","Speak":"Hablar","Listening… say the sentence now.":"Escuchando… di la frase ahora.","Tap the microphone and say it.":"Toca el micrófono y dila.","Say it out loud in German, then check.":"Dila en voz alta en inglés y luego revisa.","Did you say it right?":"¿La dijiste bien?","Yes":"Sí","I heard":"Escuché","Listen to it, then say it again to practice. Your first try is the one that counts.":"Escúchala y vuelve a decirla para practicar. Cuenta tu primer intento.","Say it again":"Decirla otra vez","Change settings":"Cambiar ajustes","The microphone isn’t available here, so you check yourself.":"El micrófono no está disponible aquí, así que te corriges tú.","I didn’t hear anything. Tap the microphone and try again.":"No escuché nada. Toca el micrófono e inténtalo otra vez.","That didn’t work. Tap the microphone and try again.":"No funcionó. Toca el micrófono e inténtalo otra vez.","Today":"Hoy","Me":"Yo","Help":"Ayuda"," and ":" y ","Reviewing right before you forget is what makes words stick.":"Repasar justo antes de olvidar es lo que fija las palabras.","streak":"racha","recognized":"reconocidas","mastered":"dominadas","your session for the day. Tap Continue and the app picks the next step: reviews, mistakes to recover, new words and a sentence.":"tu sesión del día. Toca Continuar y la app elige el siguiente paso: repasos, errores por recuperar, palabras nuevas y una frase.","your path by level, in short units that mix words, verbs, a rule and a conversation.":"tu camino por nivel, en unidades cortas que mezclan palabras, verbos, una regla y una conversación.","every exercise in one place. The red number counts cards due and mistakes to recover.":"todos los ejercicios en un solo lugar. El número rojo cuenta las tarjetas pendientes y los errores por recuperar.","your progress, daily goal, language, words and backup.":"tu progreso, meta diaria, idioma, palabras y copia de seguridad.","Step N of 3":"Paso N de 3","Your daily goal":"Tu meta diaria","A little every day works better than a lot once a week. You can change it later in Me.":"Un poco cada día funciona mejor que mucho una vez por semana. Puedes cambiarla después en Yo.","Relaxed":"Tranquila","Steady":"Normal","Serious":"Intensa","recommended":"recomendada","about N minutes":"unos N minutos"," answers a day":" respuestas al día","Where do you start?":"¿Desde dónde empiezas?","Start from zero":"Empezar desde cero","Begin at A1 with the most useful words.":"Empiezas en A1 con las palabras más útiles.","I already know some German":"Ya sé algo de inglés","Take a short placement test (20 questions) and start at your level.":"Haz una prueba de nivel corta (20 preguntas) y empieza en tu nivel.","Vocabulary for your job (optional)":"Vocabulario para tu trabajo (opcional)","Job":"Trabajo","You can change it any time.":"Puedes cambiarlo cuando quieras.","Review cards":"Repasar tarjetas","N cards are due":"N tarjetas pendientes","No cards due right now":"No hay tarjetas pendientes ahora","Recover mistakes":"Recuperar errores","N opportunities waiting":"N oportunidades esperando","No mistakes saved":"No hay errores guardados","New words · LV":"Palabras nuevas · LV","N new words from your path":"N palabras nuevas de tu camino","No new words left in this level":"No quedan palabras nuevas en este nivel","Say sentences out loud":"Decir frases en voz alta","Build sentences":"Armar frases","3 sentences from your level":"3 frases de tu nivel","Step done.":"Paso hecho.","Next: ":"Siguiente: ","That was the last step for today. 🎉":"Ese era el último paso de hoy. 🎉","Back to Today":"Volver a Hoy","answers today":"respuestas hoy","Your session today":"Tu sesión de hoy","You finished today’s session. Extra practice still counts toward your goal.":"Terminaste la sesión de hoy. Practicar más también suma a tu meta.","Keep practicing":"Seguir practicando","Save your progress":"Guarda tu progreso","Create a free account to keep your progress safe and use it on your other devices.":"Crea una cuenta gratis para no perder tu progreso y usarlo en tus otros dispositivos.","Not now":"Ahora no","Create account":"Crear cuenta","See your path":"Ver tu camino","You finished every level. Wunderbar!":"Terminaste todos los niveles. Awesome!","Know some German already? Take the placement test":"¿Ya sabes algo de inglés? Haz la prueba de nivel","Today’s challenges":"Desafíos de hoy","Word of the day":"Palabra del día","Review now":"Repasar ahora","D cards due and O mistakes to recover. Reviewing right before you forget is what makes words stick.":"D tarjetas pendientes y O errores por recuperar. Repasar justo antes de olvidar es lo que fija las palabras.","Nothing to review right now. Learn something new and it will come back here at the right time.":"No hay nada que repasar ahora. Aprende algo nuevo y volverá aquí en el momento justo.","Flashcards":"Tarjetas","New words and reviews, one card at a time.":"Palabras nuevas y repasos, una tarjeta a la vez.","Quick quiz":"Quiz rápido","Meanings, der / die / das, fill the gap and cases.":"Significados, completar la frase y escribir la palabra.","Type the German word. This is how words become mastered.":"Escribe la palabra en inglés. Así es como se dominan las palabras.","Sentences and speaking":"Frases y hablar","Write, build or say whole sentences.":"Escribe, arma o di frases completas.","Reply in short role-play chats.":"Responde en chats cortos de juego de rol.","Verb forms":"Formas verbales","Conjugate in the present, past and perfect.":"Conjuga en presente, pasado y present perfect.","Time attack":"Contrarreloj","60 seconds: as many meanings as you can.":"60 segundos: todos los significados que puedas.","My opportunities":"Mis oportunidades","N mistakes to recover":"N errores por recuperar","Your wrong answers, ready to recover.":"Tus respuestas incorrectas, listas para recuperar.","Rule":"Regla","Story":"Historia","Level":"Nivel","Your level.":"Tu nivel.","N of M units done":"N de M unidades hechas","next: unit N":"siguiente: unidad N","There are no units at this level yet. Use the Library below.":"Todavía no hay unidades en este nivel. Usa la Biblioteca de abajo.","A unit’s words count when you recognize 8 of every 10 in a checked exercise. Verbs count once you study them.":"Las palabras de una unidad cuentan cuando reconoces 8 de cada 10 en un ejercicio corregido. Los verbos cuentan cuando los estudias.","Library":"Biblioteca","Verb lessons":"Lecciones de verbos","How German verbs work, step by step.":"Cómo funcionan los verbos ingleses, paso a paso.","Grammar rules":"Reglas de gramática","Genders, plurals, cases and more.":"Artículos, tiempos verbales, preposiciones y más.","Short stories with audio and questions.":"Historias cortas con audio y preguntas.","All role-play chats by level.":"Todos los chats de rol por nivel.","My words":"Mis palabras","Only the words of this unit.":"Solo las palabras de esta unidad.","Filter":"Filtrar","Practice these words":"Practicar estas palabras","Meanings":"Significados","Send feedback":"Enviar comentario","Thank you! Your comment was sent. It helps us make the app better.":"¡Gracias! Tu comentario se envió. Nos ayuda a mejorar la app.","Send another one":"Enviar otro","An idea, something that doesn’t work, or anything else. We read every message.":"Una idea, algo que no funciona o cualquier otra cosa. Leemos cada mensaje.","Type":"Tipo","Idea":"Idea","Problem":"Problema","Other":"Otro","Write your comment":"Escribe tu comentario","Your comment":"Tu comentario","Your email (optional, if you want an answer)":"Tu email (opcional, si quieres respuesta)","Your email (optional)":"Tu email (opcional)","Sending…":"Enviando…","Send":"Enviar","Write your comment first.":"Escribe tu comentario primero.","That email doesn’t look right. Fix it or leave it empty.":"Ese email no parece correcto. Corrígelo o déjalo vacío.","It couldn’t be sent. Check your connection and try again.":"No se pudo enviar. Revisa tu conexión e inténtalo otra vez.","Speech recognition needs an internet connection. Try again.":"El reconocimiento de voz necesita conexión a internet. Inténtalo otra vez.","Checking…":"Revisando…","Listening. Take your time, pauses are fine. Tap Done when you finish.":"Escuchando. Tómate tu tiempo, puedes hacer pausas. Toca Listo cuando termines.","Done, check it":"Listo, revisar","Start over":"Empezar de nuevo","Tap the microphone, say the sentence at your own pace, then tap Done.":"Toca el micrófono, di la frase a tu ritmo y luego toca Listo.","…":"…","Back to the exercise":"Volver al ejercicio","Level LV complete!":"¡Nivel LV completado!","You met every LV goal. Next stop: NX.":"Cumpliste todas las metas de LV. Próxima parada: NX.","You finished the whole path up to B2. Wahnsinn!":"Terminaste todo el camino hasta B2. Amazing!","On to NX":"Vamos a NX","The cases in one line":"Los casos en una línea","Who does it (the subject). Der Mann schläft.":"Quién hace la acción (el sujeto). Der Mann schläft.","What or whom the action goes to directly, and where to with movement. Ich sehe den Mann. Ich gehe ins Kino.":"A qué o a quién va la acción directamente, y hacia dónde con movimiento. Ich sehe den Mann. Ich gehe ins Kino.","To or with whom, and where (a location). Ich helfe dem Mann. Ich bin im Kino.":"A quién o con quién, y dónde (una ubicación). Ich helfe dem Mann. Ich bin im Kino.","Whose. Das Auto des Mannes. Mostly written; in speech people say von dem (vom) Mann.":"De quién. Das Auto des Mannes. Sobre todo escrito; al hablar se dice von dem (vom) Mann.","gehen = movement into the bed, so where to? → Akkusativ: in + das = ins. In bed is im Bett (where? → Dativ).":"gehen indica movimiento hacia la cama: ¿hacia dónde? → Akkusativ: in + das = ins. Estar en la cama es im Bett (¿dónde? → Dativ).","First: where to, or where?":"Primero: ¿hacia dónde o dónde?","in, an, auf, über, unter, vor, hinter, neben and zwischen take the Akkusativ when there is movement toward a place (where to?) and the Dativ for a location (where?). The case decides the article, and the article decides the short form.":"in, an, auf, über, unter, vor, hinter, neben y zwischen llevan Akkusativ cuando hay movimiento hacia un lugar (¿hacia dónde?) y Dativ para una ubicación (¿dónde?). El caso decide el artículo, y el artículo decide la forma corta.","Where to? → Akk":"¿Hacia dónde? → Akk","Where? → Dat":"¿Dónde? → Dat","Tip: verbs of movement (gehen, fahren, legen, stellen) usually mean where to. Verbs of being (sein, wohnen, liegen, stehen) mean where.":"Pista: los verbos de movimiento (gehen, fahren, legen, stellen) suelen indicar hacia dónde. Los de estar (sein, wohnen, liegen, stehen) indican dónde.","Okay, got it":"Entendido","Short tips before exercises":"Consejos breves antes de los ejercicios","-ung, -heit, -keit and -ion are always die: die Zeitung, die Freiheit.":"-ung, -heit, -keit e -ion siempre son die: die Zeitung, die Freiheit.","-chen and -lein are always das: das Mädchen, das Brötchen.":"-chen y -lein siempre son das: das Mädchen, das Brötchen.","Days, months and seasons are der: der Montag, der Juli, der Sommer.":"Los días, meses y estaciones son der: der Montag, der Juli, der Sommer.","Present endings: ich -e, du -st, er -t, wir -en, ihr -t, sie -en.":"Terminaciones del presente: ich -e, du -st, er -t, wir -en, ihr -t, sie -en.","Some verbs change their vowel with du and er: ich spreche, du sprichst, er spricht.":"Algunos verbos cambian la vocal con du y er: ich spreche, du sprichst, er spricht.","Perfekt: haben or sein + participle. Movement from A to B uses sein: ich bin gefahren.":"Perfekt: haben o sein + participio. El movimiento de A a B usa sein: ich bin gefahren.","Who does it → Nominativ (der). What you do something to → Akkusativ (den). To or with whom → Dativ (dem).":"Quién lo hace → Nominativ (der). A qué se le hace algo → Akkusativ (den). A quién o con quién → Dativ (dem).","mit, bei, von, zu, aus, nach and seit always take the Dativ: mit dem Auto.":"mit, bei, von, zu, aus, nach y seit siempre llevan Dativ: mit dem Auto.","Movement toward a place → Akkusativ (in den Park). A location → Dativ (im Park).":"Movimiento hacia un lugar → Akkusativ (in den Park). Una ubicación → Dativ (im Park).","All nouns start with a capital letter in German: der Tisch, die Zeit.":"En inglés todos los sustantivos empiezan con mayúscula: der Tisch, die Zeit.","Type nouns with their article: der Tisch, not just Tisch.":"Escribe los sustantivos: der Tisch, no solo Tisch.","In a statement the verb is always the second element: Heute gehe ich ins Kino.":"En una afirmación el verbo siempre va en segundo lugar: Heute gehe ich ins Kino.","With a modal verb, the second verb goes to the end: Ich kann heute nicht kommen.":"Con un verbo modal, el segundo verbo va al final: Ich kann heute nicht kommen.","After weil and dass, the verb goes to the end: …, weil ich müde bin.":"Después de weil y dass, el verbo va al final: …, weil ich müde bin.","First ask: where to, with movement (Akkusativ: ins, ans), or where, a location (Dativ: im, am)?":"Primero pregúntate: ¿hacia dónde, con movimiento (Akkusativ: ins, ans), o dónde, una ubicación (Dativ: im, am)?","die and plurals have no short form: in die Stadt, zu den Freunden.":"die y los plurales no tienen forma corta: in die Stadt, zu den Freunden.","Feminine nouns mostly add -n or -en: die Lampe → die Lampen.":"Los femeninos suelen añadir -n o -en: die Lampe → die Lampen.","Nouns ending in -er, -el, -chen or -lein often add nothing: der Lehrer → die Lehrer.":"Los terminados en -er, -el, -chen o -lein a menudo no añaden nada: der Lehrer → die Lehrer.","Separable verbs send their prefix to the end: Ich stehe um sieben auf.":"Los verbos separables mandan su prefijo al final: Ich stehe um sieben auf.","Movement from A to B or a change of state uses sein: ich bin gefahren, ich bin aufgestanden.":"El movimiento de A a B o un cambio de estado usan sein: ich bin gefahren, ich bin aufgestanden.","The simple past is used mostly with sein, haben and modal verbs: ich war, ich hatte, ich konnte.":"El pasado simple se usa sobre todo con sein, haben y los modales: ich war, ich hatte, ich konnte.","Many irregular verbs follow patterns: i → a → u (trinken, trank, getrunken).":"Muchos verbos irregulares siguen patrones: i → a → u (trinken, trank, getrunken).","Other patterns: e → a → o (sprechen, sprach, gesprochen) and ei → ie → ie (bleiben, blieb, geblieben).":"Otros patrones: e → a → o (sprechen, sprach, gesprochen) y ei → ie → ie (bleiben, blieb, geblieben).","🔥 Today’s session done! Streak: N":"🔥 ¡Sesión de hoy completada! Racha: N","Finish today’s session to keep your streak":"Termina la sesión de hoy para mantener tu racha","Today’s session is done":"Sesión de hoy completada","Hide translation":"Ocultar traducción","Show translation":"Ver traducción","Type your answer first":"Escribe tu respuesta primero","Use all the words first":"Usa todas las palabras primero","Telling the time":"Decir la hora","Telling the time · Wie spät ist es?":"Decir la hora · Wie spät ist es?","Ask and answer":"Preguntar y responder","In conversation":"En la conversación","halb points to the next hour: halb vier = 3:30, not 4:30.":"halb apunta a la hora siguiente: halb vier = 3:30, no 4:30.","Official time (trains, TV, work): 24 hours, hour + Uhr + minutes":"Hora oficial (trenes, TV, trabajo): 24 horas, hora + Uhr + minutos","In conversation people use 12 hours and add morgens, nachmittags or abends: um acht Uhr abends.":"En la conversación se usan 12 horas y se añade morgens, nachmittags o abends: um acht Uhr abends.","At what time? → um":"¿A qué hora? → um","1:00 is ein Uhr (with Uhr) or eins (without): Es ist ein Uhr. Es ist halb eins.":"La 1:00 es ein Uhr (con Uhr) o eins (sin Uhr): Es ist ein Uhr. Es ist halb eins.","halb points to the next hour: halb vier = 3:30.":"halb apunta a la hora siguiente: halb vier = 3:30.","At a time use um: um acht Uhr, um halb neun.":"Para decir a qué hora, usa um: um acht Uhr, um halb neun.","Full hour: number + Uhr. Es ist sieben Uhr.":"Hora en punto: número + Uhr. Es ist sieben Uhr.","halb points to the NEXT hour: 7:30 = halb acht.":"halb apunta a la hora SIGUIENTE: 7:30 = halb acht.",":15 = Viertel nach + this hour.":":15 = Viertel nach + esta hora.",":45 = Viertel vor + the next hour.":":45 = Viertel vor + la hora siguiente.","Minutes after the hour: zehn nach zehn.":"Minutos después de la hora: zehn nach zehn.","Minutes before the next hour: zehn vor elf.":"Minutos antes de la hora siguiente: zehn vor elf.","At a time: um + time. Um neun Uhr.":"A una hora: um + hora. Um neun Uhr.","Asking the time: Wie spät ist es? or Wie viel Uhr ist es?":"Para preguntar la hora: Wie spät ist es? o Wie viel Uhr ist es?","Timetables, TV and work use 24 hours: achtzehn Uhr. In conversation: sechs Uhr (abends).":"Horarios, TV y trabajo usan 24 horas: achtzehn Uhr. En la conversación: sechs Uhr (abends).","Official time says the minutes: vierzehn Uhr dreißig.":"La hora oficial dice los minutos: vierzehn Uhr dreißig.","Before Uhr say ein: Es ist ein Uhr. Without Uhr: Es ist eins.":"Antes de Uhr se dice ein: Es ist ein Uhr. Sin Uhr: Es ist eins.","halb + the next hour: 12:30 = halb eins.":"halb + la hora siguiente: 12:30 = halb eins.","Near the half hour: 9:25 = fünf vor halb zehn (five before half ten).":"Cerca de la media: 9:25 = fünf vor halb zehn (cinco antes de la media de las diez).","When? → um + time: um halb acht.":"¿Cuándo? → um + hora: um halb acht.","Write this in German":"Escribe esto en inglés","</p><button class=\"btn wide\" data-a=\"trstart\">10 more sentences</button>":"</p><button class=\"btn wide\" data-a=\"trstart\">10 frases más</button>","Separable: “":"Separable: «","Practice this lesson":"Practicar esta lección","Lesson practice done":"Práctica de la lección terminada","Read the lesson again, then try once more.":"Vuelve a leer la lección y prueba otra vez.","Back to the lesson":"Volver a la lección","Fully irregular: sein (bin, bist, ist, sind, seid, sind), haben (du hast, er hat), werden (du wirst, er wird), wissen (ich weiß, er weiß).":"Totalmente irregulares: sein (bin, bist, ist, sind, seid, sind), haben (du hast, er hat), werden (du wirst, er wird), wissen (ich weiß, er weiß)."};
var ESD={w:{},v:{},c:{},s:{},p:{}};
var CATL={"All":"Todas","My job":"Mi trabajo","Idioms":"Modismos","Basics":"Básico","Food":"Comida","Home":"Casa","Travel":"Viajes","People":"Personas","Body":"Cuerpo","Clothes":"Ropa","Time":"Tiempo","Nature":"Naturaleza","Work":"Trabajo","City":"Ciudad","Verbs":"Verbos","Adjectives":"Adjetivos","Data science":"Ciencia de datos","Medicine":"Medicina","IT / Software":"TI / Software","Business / Office":"Negocios / Oficina","Engineering":"Ingeniería","Teaching":"Docencia"};
var NAVL={"today":"Hoy","path":"Aprender","practice":"Practicar","chal":"Desafíos","me":"Yo"};
function tl(s){return LANG==='es'&&ES.hasOwnProperty(s)?ES[s]:s}
function PL(n,a,b,c,d){return LANG==='es'?(n===1?c:d):(n===1?a:b)}
function catL(c){return LANG==='es'&&CATL[c]||c}
function applyLang(){
  if(!ESD) return;
  allWordsRaw().forEach(function(w){var t=ESD.w[w.id];if(t){w.en=t[0];w.exEn=t[1]}});
  WOTD.forEach(function(r){var t=ESD.w['w:'+r[1]];if(t){r[2]=t[0];r[5]=t[1];if(t[2])r[3]=t[2]}});
  VERBS.forEach(function(v){var t=ESD.v[v.inf];if(t){v.en=t[0];if(VEX[v.inf]&&t[1])VEX[v.inf]=[VEX[v.inf][0],t[1]]}});
  CONVS.forEach(function(c){var t=ESD.c[c.id];if(!t)return;c.t=t.t;c.set=t.set;c.turns.forEach(function(x,i){if(t.turns[i]){x.pe=t.turns[i][0];x.task=t.turns[i][1]}})});
  STORIES.forEach(function(st){var t=ESD.s[st.id];if(t){st.en=t.es;st.qs=t.qs}});
  PLACE.forEach(function(p,i){var t=ESD.p[i];if(t){p[1]=t[0];p[2]=t[1]}});
  document.documentElement.lang='es';document.title='Wordhoard – inglés';
  document.querySelectorAll('nav button[data-tab]').forEach(function(b){var t=NAVL[b.dataset.tab],l=b.querySelector('.nl');if(t&&l)l.textContent=t});
}
var CATS=['Basics','Food','Home','Travel','People','Body','Clothes','Time','Nature','Work','City','Verbs','Adjectives'];
var DAYS=[0,1,3,7,14,30];

// [category, article (unused), English, Spanish, example, example in Spanish]
var RAW=[
["Basics","","hello","hola","Hello, how are you?","Hola, ¿cómo estás?"],
["Basics","","thank you","gracias","Thank you for your help.","Gracias por tu ayuda."],
["Basics","","please","por favor","A coffee, please.","Un café, por favor."],
["Basics","","excuse me","disculpe / perdón","Excuse me, where is the station?","Disculpe, ¿dónde está la estación?"],
["Basics","","sorry","lo siento / perdón","Sorry, I’m late.","Perdón, llego tarde."],
["Basics","","yes","sí","Yes, I like it.","Sí, me gusta."],
["Basics","","no","no","No, thank you.","No, gracias."],
["Basics","","good morning","buenos días","Good morning, Mrs. Smith!","¡Buenos días, señora Smith!"],
["Basics","","good night","buenas noches (al despedirse)","Good night, sleep well.","Buenas noches, que duermas bien."],
["Basics","","goodbye","adiós","Goodbye, see you soon!","¡Adiós, hasta pronto!"],
["Basics","","I don’t understand","no entiendo","Sorry, I don’t understand.","Perdón, no entiendo."],
["Basics","","you’re welcome","de nada","“Thanks!” “You’re welcome.”","“¡Gracias!” “De nada.”"],
["Basics","","how are you?","¿cómo estás?","Hi Tom, how are you?","Hola Tom, ¿cómo estás?"],
["Basics","","fine","bien","I’m fine, thanks.","Estoy bien, gracias."],
["Basics","","nice to meet you","mucho gusto","Nice to meet you, Anna.","Mucho gusto, Anna."],
["Basics","","see you later","hasta luego","I have to go. See you later!","Tengo que irme. ¡Hasta luego!"],
["Basics","","name","nombre","What’s your name?","¿Cómo te llamas?"],
["Basics","","question","pregunta","Can I ask a question?","¿Puedo hacer una pregunta?"],
["Basics","","answer","respuesta","I don’t know the answer.","No sé la respuesta."],
["Basics","","word","palabra","What does this word mean?","¿Qué significa esta palabra?"],
["Basics","","language","idioma","English is a useful language.","El inglés es un idioma útil."],
["Basics","","help","ayuda","I need your help.","Necesito tu ayuda."],
["Basics","","maybe","quizás","Maybe tomorrow.","Quizás mañana."],
["Basics","","of course","claro / por supuesto","Of course you can come.","Claro que puedes venir."],
["Basics","","again","otra vez","Can you say that again?","¿Puedes decir eso otra vez?"],
["Basics","","slowly","despacio","Please speak slowly.","Por favor, habla despacio."],
["Food","","bread","pan","I buy fresh bread every day.","Compro pan fresco todos los días."],
["Food","","cheese","queso","This cheese is very good.","Este queso es muy bueno."],
["Food","","water","agua","A glass of water, please.","Un vaso de agua, por favor."],
["Food","","apple","manzana","I eat an apple every morning.","Como una manzana cada mañana."],
["Food","","milk","leche","Do you drink milk?","¿Tomas leche?"],
["Food","","coffee","café","I drink coffee with milk.","Tomo café con leche."],
["Food","","tea","té","Would you like some tea?","¿Quieres un poco de té?"],
["Food","","soup","sopa","The soup is too hot.","La sopa está demasiado caliente."],
["Food","","meat","carne","I don’t eat meat.","No como carne."],
["Food","","fish","pescado / pez","We have fish on Fridays.","Comemos pescado los viernes."],
["Food","","chicken","pollo","The chicken is in the oven.","El pollo está en el horno."],
["Food","","rice","arroz","Rice with beans is my favorite.","El arroz con porotos es mi favorito."],
["Food","","egg","huevo","I want two eggs for breakfast.","Quiero dos huevos para el desayuno."],
["Food","","sugar","azúcar","No sugar, thanks.","Sin azúcar, gracias."],
["Food","","salt","sal","Can you pass the salt?","¿Me pasas la sal?"],
["Food","","potato","papa","We need potatoes for dinner.","Necesitamos papas para la cena."],
["Food","","vegetables","verduras","Eat more vegetables!","¡Come más verduras!"],
["Food","","fruit","fruta","I like fresh fruit.","Me gusta la fruta fresca."],
["Food","","breakfast","desayuno","Breakfast is at eight.","El desayuno es a las ocho."],
["Food","","lunch","almuerzo","Let’s have lunch together.","Almorcemos juntos."],
["Food","","dinner","cena","What’s for dinner?","¿Qué hay de cena?"],
["Food","","the bill","la cuenta","Can we have the bill, please?","¿Nos trae la cuenta, por favor?"],
["Food","","menu","carta / menú","Can I see the menu?","¿Puedo ver la carta?"],
["Food","","delicious","delicioso","This cake is delicious.","Este pastel está delicioso."],
["Food","","hungry","con hambre","I’m very hungry.","Tengo mucha hambre."],
["Food","","thirsty","con sed","Are you thirsty?","¿Tienes sed?"],
["Food","","orange juice","jugo de naranja","An orange juice, please.","Un jugo de naranja, por favor."],
["Food","","beer","cerveza","Two beers, please.","Dos cervezas, por favor."],
["Food","","wine","vino","Red or white wine?","¿Vino tinto o blanco?"],
["Food","","cake","pastel / torta","She made a chocolate cake.","Ella hizo una torta de chocolate."],
["Home","","house","casa","Our house is small.","Nuestra casa es pequeña."],
["Home","","apartment","departamento","I live in an apartment.","Vivo en un departamento."],
["Home","","door","puerta","Please close the door.","Por favor, cierra la puerta."],
["Home","","window","ventana","Open the window, it’s hot.","Abre la ventana, hace calor."],
["Home","","table","mesa","The keys are on the table.","Las llaves están en la mesa."],
["Home","","chair","silla","This chair is comfortable.","Esta silla es cómoda."],
["Home","","kitchen","cocina","We eat in the kitchen.","Comemos en la cocina."],
["Home","","bedroom","dormitorio","My bedroom is upstairs.","Mi dormitorio está arriba."],
["Home","","bathroom","baño","Where is the bathroom?","¿Dónde está el baño?"],
["Home","","bed","cama","I go to bed at eleven.","Me acuesto a las once."],
["Home","","key","llave","I can’t find my key.","No encuentro mi llave."],
["Home","","lamp","lámpara","Turn on the lamp.","Enciende la lámpara."],
["Home","","room","habitación / pieza","The room has two windows.","La habitación tiene dos ventanas."],
["Home","","living room","sala de estar / living","We watch TV in the living room.","Vemos tele en el living."],
["Home","","floor","piso / suelo","The book is on the floor.","El libro está en el suelo."],
["Home","","wall","pared","There is a picture on the wall.","Hay un cuadro en la pared."],
["Home","","fridge","refrigerador","The milk is in the fridge.","La leche está en el refrigerador."],
["Home","","shower","ducha","I take a shower every morning.","Me ducho cada mañana."],
["Home","","stairs","escaleras","Take the stairs, not the elevator.","Toma las escaleras, no el ascensor."],
["Home","","garden","jardín","The children play in the garden.","Los niños juegan en el jardín."],
["Home","","rent","arriendo / alquiler","The rent is very high.","El arriendo es muy caro."],
["Home","","neighbor","vecino","My neighbor is very friendly.","Mi vecino es muy simpático."],
["Home","","couch","sofá","The cat sleeps on the couch.","El gato duerme en el sofá."],
["Home","","towel","toalla","Can I have a clean towel?","¿Me das una toalla limpia?"],
["Travel","","train","tren","The train leaves at nine.","El tren sale a las nueve."],
["Travel","","station","estación","The station is near here.","La estación está cerca de aquí."],
["Travel","","ticket","boleto / pasaje","One ticket to London, please.","Un boleto a Londres, por favor."],
["Travel","","airport","aeropuerto","We need to be at the airport at six.","Tenemos que estar en el aeropuerto a las seis."],
["Travel","","plane","avión","The plane is late.","El avión viene atrasado."],
["Travel","","hotel","hotel","Our hotel is near the beach.","Nuestro hotel está cerca de la playa."],
["Travel","","suitcase","maleta","My suitcase is very heavy.","Mi maleta es muy pesada."],
["Travel","","passport","pasaporte","Don’t forget your passport!","¡No olvides tu pasaporte!"],
["Travel","","bus","bus","I take the bus to work.","Tomo el bus al trabajo."],
["Travel","","car","auto","He drives a red car.","Él maneja un auto rojo."],
["Travel","","bike","bicicleta","I go to work by bike.","Voy al trabajo en bicicleta."],
["Travel","","map","mapa","Do you have a map of the city?","¿Tienes un mapa de la ciudad?"],
["Travel","","trip","viaje","How was your trip?","¿Cómo estuvo tu viaje?"],
["Travel","","vacation","vacaciones","We are on vacation in July.","Estamos de vacaciones en julio."],
["Travel","","beach","playa","Let’s go to the beach.","Vamos a la playa."],
["Travel","","left","izquierda","Turn left at the bank.","Dobla a la izquierda en el banco."],
["Travel","","right","derecha","The hotel is on the right.","El hotel está a la derecha."],
["Travel","","straight ahead","derecho / todo recto","Go straight ahead.","Sigue derecho."],
["Travel","","reservation","reserva","I have a reservation for two nights.","Tengo una reserva para dos noches."],
["Travel","","delay","retraso","There is a delay of twenty minutes.","Hay un retraso de veinte minutos."],
["Travel","","platform","andén","The train leaves from platform 3.","El tren sale del andén 3."],
["Travel","","luggage","equipaje","Where can I leave my luggage?","¿Dónde puedo dejar mi equipaje?"],
["Travel","","abroad","en el extranjero","I want to work abroad.","Quiero trabajar en el extranjero."],
["Travel","","flight","vuelo","My flight is at 7 a.m.","Mi vuelo es a las 7 de la mañana."],
["People","","family","familia","My family lives in Chile.","Mi familia vive en Chile."],
["People","","mother","madre","My mother is a teacher.","Mi madre es profesora."],
["People","","father","padre","My father works in a bank.","Mi padre trabaja en un banco."],
["People","","brother","hermano","I have one brother.","Tengo un hermano."],
["People","","sister","hermana","My sister is younger than me.","Mi hermana es menor que yo."],
["People","","son","hijo","Their son is five years old.","Su hijo tiene cinco años."],
["People","","daughter","hija","Our daughter loves music.","A nuestra hija le encanta la música."],
["People","","child","niño / niña","The child is sleeping.","El niño está durmiendo."],
["People","","children","niños / hijos","Do you have children?","¿Tienes hijos?"],
["People","","friend","amigo / amiga","She is my best friend.","Ella es mi mejor amiga."],
["People","","man","hombre","Who is that man?","¿Quién es ese hombre?"],
["People","","woman","mujer","The woman with the red bag is my boss.","La mujer de la cartera roja es mi jefa."],
["People","","people","gente / personas","Many people live here.","Mucha gente vive aquí."],
["People","","husband","esposo","Her husband is from Spain.","Su esposo es de España."],
["People","","wife","esposa","My wife works at home.","Mi esposa trabaja desde casa."],
["People","","parents","padres","My parents are retired.","Mis padres están jubilados."],
["People","","boy","niño / chico","The boy plays soccer.","El niño juega fútbol."],
["People","","girl","niña / chica","The girl has a dog.","La niña tiene un perro."],
["People","","baby","bebé","The baby is crying.","El bebé está llorando."],
["People","","boyfriend","novio","Her boyfriend is very nice.","Su novio es muy simpático."],
["People","","girlfriend","novia","I’m meeting my girlfriend tonight.","Voy a ver a mi novia esta noche."],
["People","","grandmother","abuela","My grandmother is 90.","Mi abuela tiene 90 años."],
["People","","grandfather","abuelo","My grandfather tells great stories.","Mi abuelo cuenta historias geniales."],
["People","","cousin","primo / prima","My cousin lives in Canada.","Mi primo vive en Canadá."],
["Body","","head","cabeza","My head hurts.","Me duele la cabeza."],
["Body","","eye","ojo","She has blue eyes.","Ella tiene ojos azules."],
["Body","","ear","oreja / oído","My ear hurts.","Me duele el oído."],
["Body","","nose","nariz","He has a big nose.","Él tiene la nariz grande."],
["Body","","mouth","boca","Open your mouth, please.","Abra la boca, por favor."],
["Body","","hand","mano","Wash your hands.","Lávate las manos."],
["Body","","arm","brazo","I broke my arm.","Me quebré el brazo."],
["Body","","leg","pierna","My legs are tired.","Tengo las piernas cansadas."],
["Body","","foot","pie","My foot hurts.","Me duele el pie."],
["Body","","feet","pies","My feet are cold.","Tengo los pies fríos."],
["Body","","hair","pelo","She has long hair.","Ella tiene el pelo largo."],
["Body","","tooth","diente","I brush my teeth twice a day.","Me lavo los dientes dos veces al día."],
["Body","","back","espalda","My back hurts from sitting.","Me duele la espalda de estar sentado."],
["Body","","stomach","estómago","I have a stomachache.","Me duele el estómago."],
["Body","","heart","corazón","The heart is a muscle.","El corazón es un músculo."],
["Body","","face","cara","Wash your face.","Lávate la cara."],
["Body","","finger","dedo","I cut my finger.","Me corté el dedo."],
["Body","","sick","enfermo","I’m sick today.","Hoy estoy enfermo."],
["Body","","doctor","médico / doctor","I need to see a doctor.","Necesito ir al médico."],
["Body","","medicine","medicamento / remedio","Take this medicine twice a day.","Toma este remedio dos veces al día."],
["Body","","fever","fiebre","The child has a fever.","El niño tiene fiebre."],
["Body","","cold","resfriado","I have a cold.","Estoy resfriado."],
["Clothes","","shirt","camisa","I need a white shirt.","Necesito una camisa blanca."],
["Clothes","","T-shirt","polera / camiseta","This T-shirt is cheap.","Esta polera es barata."],
["Clothes","","pants","pantalones","These pants are too long.","Estos pantalones son muy largos."],
["Clothes","","jeans","jeans","I wear jeans every day.","Uso jeans todos los días."],
["Clothes","","dress","vestido","She is wearing a blue dress.","Ella lleva un vestido azul."],
["Clothes","","skirt","falda","The skirt is too short.","La falda es muy corta."],
["Clothes","","shoes","zapatos","My shoes are new.","Mis zapatos son nuevos."],
["Clothes","","jacket","chaqueta","Take a jacket, it’s cold.","Lleva una chaqueta, hace frío."],
["Clothes","","coat","abrigo","I need a warm coat for winter.","Necesito un abrigo para el invierno."],
["Clothes","","hat","sombrero / gorro","He always wears a hat.","Él siempre usa sombrero."],
["Clothes","","socks","calcetines","Where are my socks?","¿Dónde están mis calcetines?"],
["Clothes","","bag","bolso / bolsa","My bag is in the car.","Mi bolso está en el auto."],
["Clothes","","glasses","anteojos / lentes","I can’t read without my glasses.","No puedo leer sin mis lentes."],
["Clothes","","sweater","chaleco / suéter","This sweater is very warm.","Este chaleco es muy abrigador."],
["Clothes","","size","talla","What size are you?","¿Qué talla eres?"],
["Clothes","","to try on","probarse","Can I try on these shoes?","¿Puedo probarme estos zapatos?"],
["Clothes","","to wear","llevar puesto / usar","I wear a suit to work.","Uso traje para ir al trabajo."],
["Clothes","","umbrella","paraguas","Take an umbrella, it’s raining.","Lleva paraguas, está lloviendo."],
["Time","","day","día","Have a nice day!","¡Que tengas un buen día!"],
["Time","","week","semana","I work five days a week.","Trabajo cinco días a la semana."],
["Time","","month","mes","My birthday is next month.","Mi cumpleaños es el próximo mes."],
["Time","","year","año","I started English this year.","Empecé inglés este año."],
["Time","","today","hoy","Today is Monday.","Hoy es lunes."],
["Time","","tomorrow","mañana (el día siguiente)","See you tomorrow!","¡Nos vemos mañana!"],
["Time","","yesterday","ayer","Yesterday I was tired.","Ayer estaba cansado."],
["Time","","morning","mañana (parte del día)","I run in the morning.","Corro en la mañana."],
["Time","","afternoon","tarde","The meeting is in the afternoon.","La reunión es en la tarde."],
["Time","","evening","tarde-noche","We cook in the evening.","Cocinamos en la tarde-noche."],
["Time","","night","noche","I can’t sleep at night.","No puedo dormir en la noche."],
["Time","","hour","hora","The trip takes one hour.","El viaje dura una hora."],
["Time","","minute","minuto","Wait a minute, please.","Espera un minuto, por favor."],
["Time","","Monday","lunes","On Monday I go to the gym.","El lunes voy al gimnasio."],
["Time","","Tuesday","martes","The class is on Tuesday.","La clase es el martes."],
["Time","","Wednesday","miércoles","See you on Wednesday.","Nos vemos el miércoles."],
["Time","","Thursday","jueves","Thursday is a busy day.","El jueves es un día ocupado."],
["Time","","Friday","viernes","On Friday we go out.","El viernes salimos."],
["Time","","Saturday","sábado","I sleep late on Saturday.","El sábado duermo hasta tarde."],
["Time","","Sunday","domingo","On Sunday I visit my parents.","El domingo visito a mis padres."],
["Time","","weekend","fin de semana","What are you doing this weekend?","¿Qué haces este fin de semana?"],
["Time","","now","ahora","I’m busy now.","Ahora estoy ocupado."],
["Time","","always","siempre","I always drink coffee.","Siempre tomo café."],
["Time","","never","nunca","I never eat fast food.","Nunca como comida rápida."],
["Time","","often","a menudo","We often go to the park.","A menudo vamos al parque."],
["Time","","sometimes","a veces","Sometimes I work from home.","A veces trabajo desde casa."],
["Time","","usually","normalmente","I usually get up at seven.","Normalmente me levanto a las siete."],
["Time","","early","temprano","I get up early.","Me levanto temprano."],
["Time","","late","tarde (con retraso)","Sorry I’m late.","Perdón por llegar tarde."],
["Time","","soon","pronto","See you soon!","¡Hasta pronto!"],
["Time","","ago","hace (tiempo)","I came here two years ago.","Llegué aquí hace dos años."],
["Time","","already","ya","I have already eaten.","Ya comí."],
["Time","","yet","todavía (en negativo) / ya (en pregunta)","Have you finished yet?","¿Ya terminaste?"],
["Time","","o’clock","en punto","The class starts at nine o’clock.","La clase empieza a las nueve en punto."],
["Nature","","sun","sol","The sun is shining.","Brilla el sol."],
["Nature","","rain","lluvia","I like the sound of rain.","Me gusta el sonido de la lluvia."],
["Nature","","snow","nieve","There is snow on the mountains.","Hay nieve en las montañas."],
["Nature","","wind","viento","The wind is very strong today.","El viento está muy fuerte hoy."],
["Nature","","weather","clima / tiempo","How is the weather today?","¿Cómo está el clima hoy?"],
["Nature","","sky","cielo","The sky is blue.","El cielo está azul."],
["Nature","","sea","mar","We swim in the sea.","Nadamos en el mar."],
["Nature","","mountain","montaña","We climbed the mountain.","Subimos la montaña."],
["Nature","","river","río","The river is very long.","El río es muy largo."],
["Nature","","tree","árbol","There is a big tree in the park.","Hay un árbol grande en el parque."],
["Nature","","flower","flor","These flowers are for you.","Estas flores son para ti."],
["Nature","","dog","perro","My dog loves walks.","A mi perro le encantan los paseos."],
["Nature","","cat","gato","The cat is on the bed.","El gato está en la cama."],
["Nature","","bird","pájaro","A bird is singing.","Un pájaro está cantando."],
["Nature","","summer","verano","Summer is my favorite season.","El verano es mi estación favorita."],
["Nature","","winter","invierno","Winter here is very cold.","El invierno aquí es muy frío."],
["Nature","","spring","primavera","In spring the trees are green.","En primavera los árboles están verdes."],
["Nature","","fall","otoño","In fall the leaves change color.","En otoño las hojas cambian de color."],
["Nature","","hot","caluroso / caliente","It’s very hot today.","Hoy hace mucho calor."],
["Nature","","warm","templado / cálido","It’s warm outside.","Afuera está templado."],
["Nature","","cloudy","nublado","It’s cloudy this morning.","Esta mañana está nublado."],
["Nature","","sunny","soleado","Tomorrow will be sunny.","Mañana estará soleado."],
["Nature","","lake","lago","We had a picnic by the lake.","Hicimos un picnic junto al lago."],
["Nature","","forest","bosque","We walked in the forest.","Caminamos por el bosque."],
["Work","","work","trabajo","I start work at nine.","Empiezo a trabajar a las nueve."],
["Work","","job","empleo / trabajo","I have a new job.","Tengo un trabajo nuevo."],
["Work","","office","oficina","The office is on the fifth floor.","La oficina está en el quinto piso."],
["Work","","boss","jefe / jefa","My boss is on vacation.","Mi jefe está de vacaciones."],
["Work","","colleague","colega","My colleagues are very nice.","Mis colegas son muy simpáticos."],
["Work","","meeting","reunión","We have a meeting at ten.","Tenemos una reunión a las diez."],
["Work","","computer","computador","My computer is very slow.","Mi computador está muy lento."],
["Work","","email","correo electrónico","I’ll send you an email.","Te mando un correo."],
["Work","","phone","teléfono","Can I use your phone?","¿Puedo usar tu teléfono?"],
["Work","","money","dinero / plata","I don’t have much money.","No tengo mucha plata."],
["Work","","company","empresa","She works for a big company.","Ella trabaja para una empresa grande."],
["Work","","teacher","profesor / profesora","Our teacher is from London.","Nuestro profesor es de Londres."],
["Work","","student","estudiante","I’m a student.","Soy estudiante."],
["Work","","school","colegio / escuela","The children are at school.","Los niños están en el colegio."],
["Work","","university","universidad","He studies at the university.","Él estudia en la universidad."],
["Work","","salary","sueldo","The salary is good.","El sueldo es bueno."],
["Work","","interview","entrevista","I have a job interview tomorrow.","Mañana tengo una entrevista de trabajo."],
["Work","","customer","cliente","The customer is always right.","El cliente siempre tiene la razón."],
["Work","","deadline","plazo / fecha límite","The deadline is on Friday.","El plazo es el viernes."],
["Work","","team","equipo","Our team has six people.","Nuestro equipo tiene seis personas."],
["Work","","project","proyecto","We are starting a new project.","Estamos empezando un proyecto nuevo."],
["Work","","experience","experiencia","Do you have experience in sales?","¿Tienes experiencia en ventas?"],
["Work","","busy","ocupado","I’m very busy this week.","Estoy muy ocupado esta semana."],
["City","","city","ciudad","London is a big city.","Londres es una ciudad grande."],
["City","","street","calle","I live on this street.","Vivo en esta calle."],
["City","","shop","tienda","The shop opens at ten.","La tienda abre a las diez."],
["City","","supermarket","supermercado","I go to the supermarket on Saturday.","Voy al supermercado el sábado."],
["City","","bank","banco","The bank is closed today.","El banco está cerrado hoy."],
["City","","hospital","hospital","She works at the hospital.","Ella trabaja en el hospital."],
["City","","restaurant","restaurante","Let’s go to a Thai restaurant.","Vamos a un restaurante tailandés."],
["City","","park","parque","I run in the park.","Corro en el parque."],
["City","","church","iglesia","The church is very old.","La iglesia es muy antigua."],
["City","","museum","museo","The museum is free on Sundays.","El museo es gratis los domingos."],
["City","","cinema","cine","Do you want to go to the cinema?","¿Quieres ir al cine?"],
["City","","bridge","puente","Walk across the bridge.","Cruza el puente caminando."],
["City","","pharmacy","farmacia","Is there a pharmacy near here?","¿Hay una farmacia cerca de aquí?"],
["City","","post office","correo (oficina)","Where is the post office?","¿Dónde está el correo?"],
["City","","corner","esquina","The café is on the corner.","El café está en la esquina."],
["City","","traffic","tráfico","There is a lot of traffic today.","Hay mucho tráfico hoy."],
["City","","library","biblioteca","I study at the library.","Estudio en la biblioteca."],
["City","","market","mercado","We buy fruit at the market.","Compramos fruta en el mercado."],
["Verbs","","to be","ser / estar","I am happy.","Estoy feliz."],
["Verbs","","to have","tener","I have two sisters.","Tengo dos hermanas."],
["Verbs","","to go","ir","I go to work by bus.","Voy al trabajo en bus."],
["Verbs","","to come","venir","Can you come tomorrow?","¿Puedes venir mañana?"],
["Verbs","","to eat","comer","We eat at one o’clock.","Comemos a la una."],
["Verbs","","to drink","beber / tomar","I drink a lot of water.","Tomo mucha agua."],
["Verbs","","to speak","hablar","Do you speak English?","¿Hablas inglés?"],
["Verbs","","to live","vivir","I live in Santiago.","Vivo en Santiago."],
["Verbs","","to work","trabajar","She works in a bank.","Ella trabaja en un banco."],
["Verbs","","to learn","aprender","I’m learning English.","Estoy aprendiendo inglés."],
["Verbs","","to read","leer","I read before I sleep.","Leo antes de dormir."],
["Verbs","","to write","escribir","Write your name here.","Escribe tu nombre aquí."],
["Verbs","","to buy","comprar","I want to buy a new phone.","Quiero comprar un teléfono nuevo."],
["Verbs","","to pay","pagar","Can I pay by card?","¿Puedo pagar con tarjeta?"],
["Verbs","","to like","gustar","I like this song.","Me gusta esta canción."],
["Verbs","","to want","querer","I want a coffee.","Quiero un café."],
["Verbs","","to need","necesitar","I need a new laptop.","Necesito un notebook nuevo."],
["Verbs","","to know","saber / conocer","I don’t know.","No sé."],
["Verbs","","to see","ver","Can you see the sea?","¿Puedes ver el mar?"],
["Verbs","","to watch","mirar / ver (TV, series)","We watch a series every night.","Vemos una serie cada noche."],
["Verbs","","to listen","escuchar","Listen to me.","Escúchame."],
["Verbs","","to sleep","dormir","I sleep eight hours.","Duermo ocho horas."],
["Verbs","","to open","abrir","Open the door, please.","Abre la puerta, por favor."],
["Verbs","","to close","cerrar","The shop closes at eight.","La tienda cierra a las ocho."],
["Verbs","","to help","ayudar","Can you help me?","¿Me puedes ayudar?"],
["Verbs","","to cook","cocinar","I cook every evening.","Cocino cada tarde."],
["Verbs","","to play","jugar / tocar","They play soccer on Sundays.","Juegan fútbol los domingos."],
["Verbs","","to make","hacer (fabricar, preparar)","I make breakfast for my kids.","Hago el desayuno para mis hijos."],
["Verbs","","to do","hacer","What do you do?","¿A qué te dedicas?"],
["Verbs","","to get up","levantarse","I get up at seven.","Me levanto a las siete."],
["Verbs","","to start","empezar","The movie starts at eight.","La película empieza a las ocho."],
["Verbs","","to finish","terminar","I finish work at six.","Termino de trabajar a las seis."],
["Verbs","","to wait","esperar","Wait for me!","¡Espérame!"],
["Verbs","","to ask","preguntar","Can I ask you something?","¿Te puedo preguntar algo?"],
["Verbs","","to understand","entender","I understand you.","Te entiendo."],
["Verbs","","to think","pensar / creer","I think it’s a good idea.","Creo que es una buena idea."],
["Verbs","","to call","llamar","I’ll call you later.","Te llamo más tarde."],
["Verbs","","to send","enviar","Send me a message.","Envíame un mensaje."],
["Verbs","","to forget","olvidar","Don’t forget your keys.","No olvides tus llaves."],
["Verbs","","to remember","recordar / acordarse","I don’t remember his name.","No recuerdo su nombre."],
["Verbs","","to try","intentar / probar","Try again!","¡Inténtalo otra vez!"],
["Verbs","","to travel","viajar","I love to travel.","Me encanta viajar."],
["Verbs","","to visit","visitar","We visited my aunt.","Visitamos a mi tía."],
["Verbs","","to find","encontrar","I can’t find my phone.","No encuentro mi teléfono."],
["Verbs","","to lose","perder","I lost my wallet.","Perdí mi billetera."],
["Verbs","","to win","ganar","Our team won the game.","Nuestro equipo ganó el partido."],
["Verbs","","to choose","elegir","Choose one color.","Elige un color."],
["Verbs","","to explain","explicar","Can you explain it again?","¿Puedes explicarlo otra vez?"],
["Verbs","","to borrow","pedir prestado","Can I borrow your pen?","¿Me prestas tu lápiz?"],
["Verbs","","to look for","buscar","I’m looking for a job.","Estoy buscando trabajo."],
["Adjectives","","good","bueno","This is a good book.","Este es un buen libro."],
["Adjectives","","bad","malo","The weather is bad today.","Hoy el clima está malo."],
["Adjectives","","big","grande","They have a big house.","Tienen una casa grande."],
["Adjectives","","small","pequeño","My room is small.","Mi pieza es pequeña."],
["Adjectives","","new","nuevo","I have a new phone.","Tengo un teléfono nuevo."],
["Adjectives","","old","viejo / antiguo","This building is very old.","Este edificio es muy antiguo."],
["Adjectives","","young","joven","My boss is very young.","Mi jefe es muy joven."],
["Adjectives","","happy","feliz","I’m happy to see you.","Estoy feliz de verte."],
["Adjectives","","sad","triste","Why are you sad?","¿Por qué estás triste?"],
["Adjectives","","tired","cansado","I’m tired after work.","Estoy cansado después del trabajo."],
["Adjectives","","easy","fácil","English is not easy.","El inglés no es fácil."],
["Adjectives","","difficult","difícil","This exercise is difficult.","Este ejercicio es difícil."],
["Adjectives","","cheap","barato","This shirt is cheap.","Esta camisa es barata."],
["Adjectives","","expensive","caro","London is very expensive.","Londres es muy caro."],
["Adjectives","","beautiful","hermoso / lindo","What a beautiful day!","¡Qué día tan lindo!"],
["Adjectives","","long","largo","It’s a long story.","Es una historia larga."],
["Adjectives","","short","corto / bajo","The meeting was short.","La reunión fue corta."],
["Adjectives","","fast","rápido","This train is very fast.","Este tren es muy rápido."],
["Adjectives","","slow","lento","The internet is slow today.","Internet está lento hoy."],
["Adjectives","","hot","caliente","Careful, the soup is hot.","Cuidado, la sopa está caliente."],
["Adjectives","","cold","frío","It’s cold outside.","Afuera hace frío."],
["Adjectives","","open","abierto","Is the shop open?","¿Está abierta la tienda?"],
["Adjectives","","closed","cerrado","The museum is closed on Mondays.","El museo está cerrado los lunes."],
["Adjectives","","right","correcto","That’s right!","¡Eso es correcto!"],
["Adjectives","","wrong","equivocado / incorrecto","Sorry, wrong number.","Perdón, número equivocado."],
["Adjectives","","important","importante","This is very important.","Esto es muy importante."],
["Adjectives","","interesting","interesante","The book is very interesting.","El libro es muy interesante."],
["Adjectives","","red","rojo","I like red cars.","Me gustan los autos rojos."],
["Adjectives","","blue","azul","The sky is blue.","El cielo está azul."],
["Adjectives","","green","verde","The grass is green.","El pasto es verde."],
["Adjectives","","black","negro","I drink my coffee black.","Tomo el café negro."],
["Adjectives","","white","blanco","The snow is white.","La nieve es blanca."],
["Adjectives","","yellow","amarillo","The banana is yellow.","El plátano es amarillo."],
["Adjectives","","busy","ocupado (lugar, calle)","The street is very busy.","La calle está muy concurrida."],
["Adjectives","","quiet","tranquilo / silencioso","We live in a quiet area.","Vivimos en una zona tranquila."],
["Adjectives","","loud","ruidoso / fuerte","The music is too loud.","La música está demasiado fuerte."],
["Adjectives","","friendly","simpático / amable","The people here are very friendly.","La gente aquí es muy amable."],
["Adjectives","","angry","enojado","Don’t be angry with me.","No te enojes conmigo."],
["Adjectives","","bored","aburrido (persona)","I’m bored at home.","Estoy aburrido en casa."],
["Adjectives","","boring","aburrido (cosa)","This movie is boring.","Esta película es aburrida."],
["Adjectives","","dangerous","peligroso","This road is dangerous.","Este camino es peligroso."],
["Adjectives","","healthy","saludable / sano","I want to eat healthy food.","Quiero comer comida sana."],
["Adjectives","","different","diferente","Every day is different.","Cada día es diferente."],
["Adjectives","","same","mismo","We have the same phone.","Tenemos el mismo teléfono."],
["Adjectives","","ready","listo","Are you ready?","¿Estás listo?"]
];
// Plural of every built-in noun. '-' = no plural in normal use, 'pl' = the word is already plural.
var PLURAL={};
var BASE=RAW.map(function(r,i){return {id:'b'+i,cat:r[0],art:r[1],de:r[2],en:r[3],ex:r[4],exEn:r[5],pl:PLURAL[r[2]]}});

// Job vocabulary packs. Ids are 'j'+key+index, so append new words at the end of a pack.
var JOB_CAT='My job';
var JOBS=[
{key:"data",name:"Data science",words:[
["","dataset","conjunto de datos","The dataset has a million rows.","El conjunto de datos tiene un millón de filas."],
["","model","modelo","We trained a new model.","Entrenamos un modelo nuevo."],
["","to train","entrenar","It takes two hours to train the model.","Entrenar el modelo toma dos horas."],
["","accuracy","exactitud, precisión","The accuracy is 92 percent.","La exactitud es 92 por ciento."],
["","feature","variable, característica","Age is an important feature.","La edad es una variable importante."],
["","missing values","valores faltantes","Many rows have missing values.","Muchas filas tienen valores faltantes."],
["","outlier","valor atípico","Remove the outliers first.","Primero quita los valores atípicos."],
["","chart","gráfico","This chart shows the sales.","Este gráfico muestra las ventas."],
["","forecast","pronóstico","The forecast for next month looks good.","El pronóstico para el próximo mes se ve bien."],
["","average","promedio","The average age is 35.","La edad promedio es 35."],
["","sample","muestra","We need a bigger sample.","Necesitamos una muestra más grande."],
["","bias","sesgo","The data has a strong bias.","Los datos tienen un sesgo fuerte."],
["","database","base de datos","The data is in the database.","Los datos están en la base de datos."],
["","query","consulta","This query is very slow.","Esta consulta es muy lenta."],
["","dashboard","panel, tablero","I built a dashboard for sales.","Armé un tablero para ventas."],
["","insight","hallazgo","The main insight is simple.","El hallazgo principal es simple."],
["","stakeholder","parte interesada","We present the results to the stakeholders.","Presentamos los resultados a las partes interesadas."],
["","pipeline","flujo de procesamiento","The data pipeline runs every night.","El flujo de datos corre cada noche."],
["","to clean data","limpiar datos","Cleaning data takes most of the time.","Limpiar datos toma casi todo el tiempo."],
["","trend","tendencia","There is an upward trend.","Hay una tendencia al alza."]]},
{key:"office",name:"Business / Office",words:[
["","schedule","agenda, horario","My schedule is full today.","Hoy tengo la agenda llena."],
["","to schedule a meeting","agendar una reunión","Can we schedule a meeting for Monday?","¿Podemos agendar una reunión para el lunes?"],
["","agenda","temario de la reunión","What’s on the agenda?","¿Qué hay en el temario?"],
["","report","informe","I’m writing the monthly report.","Estoy escribiendo el informe mensual."],
["","budget","presupuesto","We are over budget.","Estamos sobre el presupuesto."],
["","invoice","factura","Please send me the invoice.","Por favor envíame la factura."],
["","to follow up","hacer seguimiento","I’ll follow up next week.","Haré seguimiento la próxima semana."],
["","attachment","archivo adjunto","Please see the attachment.","Por favor revisa el adjunto."],
["","to reply","responder","I’ll reply to your email today.","Responderé tu correo hoy."],
["","manager","gerente, jefe","My manager is in a meeting.","Mi jefe está en una reunión."],
["","to hire","contratar","We are hiring two engineers.","Estamos contratando a dos ingenieros."],
["","to quit","renunciar","She quit her job last week.","Renunció a su trabajo la semana pasada."],
["","day off","día libre","I’m taking a day off on Friday.","Me tomo el viernes libre."],
["","goal","meta, objetivo","Our goal is to grow 10 percent.","Nuestra meta es crecer 10 por ciento."],
["","feedback","comentarios, retroalimentación","Thanks for the feedback.","Gracias por los comentarios."]]}
];
var JOB_WORDS={};
JOBS.forEach(function(j){JOB_WORDS[j.key]=j.words.map(function(r,i){return {id:'j'+j.key+i,cat:JOB_CAT,art:r[0],de:r[1],en:r[2],ex:r[3],exEn:r[4],pl:''}})});
function jobName(){var j=JOBS.find(function(x){return x.key===S.job});return j?catL(j.name):''}

function fresh(){return {progress:{},custom:[],streak:0,lastDay:'',reverse:false,job:'',verbs:{},lang:'es',onbStep:2}}
function load(){
  try{
    var r=localStorage.getItem(KEY);
    if(!r) return fresh();
    var o=JSON.parse(r), d=fresh();
    for(var k in d){ if(o[k]===undefined) o[k]=d[k]; }
    return o;
  }catch(e){return fresh()}
}
var S=load();
function save(){S.savedAt=Date.now();try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){};cloudSoon()}

var ui={vmode:'learn',vl:null,vlesson:false,lsub:'learn',rdl:'A1',rd:null,pl:null,wsub:'translate',msub:'prog',hub:'today',cvl:'A1',cv:null,vg:'all',vt:'pres',vq:null,help:false,pickJob:false,tab:'today',cat:'All',session:null,flipped:false,pop:false,quiz:null,mode:'meaning',msg:'',search:'',adding:false,err:'',confirmDel:null};

function plText(w){
  if(!w.art||!w.pl) return '';
  if(w.pl==='-') return tl('no plural');
  if(w.pl==='pl') return tl('plural only');
  return tl('plural: die ')+w.pl;
}
function plHtml(w,cls){var t=plText(w);return t?'<p class="'+(cls||'pl')+'">'+esc(t)+'</p>':''}
// CEFR level of each built-in word and verb. Job packs count as B1, idioms as B2; your own words have no level.
var WLV={"b0":"A1","b1":"A1","b2":"A1","b3":"A1","b4":"A1","b5":"A1","b6":"A1","b7":"A1","b8":"A1","b9":"A1","b10":"A1","b11":"A1","b12":"A1","b13":"A1","b14":"A1","b15":"A1","b16":"A1","b17":"A1","b18":"A1","b19":"A1","b20":"A1","b21":"A1","b22":"A1","b23":"A1","b24":"A2","b25":"A2","b26":"A1","b27":"A1","b28":"A1","b29":"A1","b30":"A1","b31":"A1","b32":"A1","b33":"A1","b34":"A1","b35":"A1","b36":"A1","b37":"A1","b38":"A1","b39":"A1","b40":"A1","b41":"A1","b42":"A1","b43":"A1","b44":"A1","b45":"A1","b46":"A1","b47":"A2","b48":"A2","b49":"A2","b50":"A1","b51":"A2","b52":"A1","b53":"A1","b54":"A2","b55":"A2","b56":"A1","b57":"A1","b58":"A1","b59":"A1","b60":"A1","b61":"A1","b62":"A1","b63":"A1","b64":"A1","b65":"A1","b66":"A1","b67":"A1","b68":"A1","b69":"A1","b70":"A1","b71":"A1","b72":"A1","b73":"A1","b74":"A2","b75":"A1","b76":"A2","b77":"A2","b78":"A2","b79":"A2","b80":"A1","b81":"A1","b82":"A1","b83":"A1","b84":"A1","b85":"A1","b86":"A1","b87":"A1","b88":"A1","b89":"A1","b90":"A1","b91":"A1","b92":"A1","b93":"A1","b94":"A1","b95":"A1","b96":"A1","b97":"A1","b98":"A2","b99":"A2","b100":"A2","b101":"A2","b102":"A2","b103":"A2","b104":"A1","b105":"A1","b106":"A1","b107":"A1","b108":"A1","b109":"A1","b110":"A1","b111":"A1","b112":"A1","b113":"A1","b114":"A1","b115":"A1","b116":"A1","b117":"A1","b118":"A1","b119":"A1","b120":"A1","b121":"A1","b122":"A1","b123":"A2","b124":"A2","b125":"A2","b126":"A2","b127":"A2","b128":"A1","b129":"A1","b130":"A1","b131":"A1","b132":"A1","b133":"A1","b134":"A1","b135":"A1","b136":"A1","b137":"A1","b138":"A1","b139":"A1","b140":"A1","b141":"A1","b142":"A1","b143":"A1","b144":"A1","b145":"A2","b146":"A1","b147":"A2","b148":"A2","b149":"A2","b150":"A1","b151":"A1","b152":"A1","b153":"A1","b154":"A1","b155":"A1","b156":"A1","b157":"A1","b158":"A1","b159":"A1","b160":"A1","b161":"A1","b162":"A1","b163":"A1","b164":"A2","b165":"A2","b166":"A2","b167":"A2","b168":"A1","b169":"A1","b170":"A1","b171":"A1","b172":"A1","b173":"A1","b174":"A1","b175":"A1","b176":"A1","b177":"A1","b178":"A1","b179":"A1","b180":"A1","b181":"A1","b182":"A1","b183":"A1","b184":"A1","b185":"A1","b186":"A1","b187":"A1","b188":"A1","b189":"A1","b190":"A1","b191":"A1","b192":"A2","b193":"A1","b194":"A2","b195":"A1","b196":"A1","b197":"A1","b198":"A2","b199":"A2","b200":"A2","b201":"A1","b202":"A1","b203":"A1","b204":"A1","b205":"A1","b206":"A1","b207":"A1","b208":"A1","b209":"A1","b210":"A1","b211":"A1","b212":"A1","b213":"A1","b214":"A1","b215":"A1","b216":"A1","b217":"A1","b218":"A1","b219":"A2","b220":"A1","b221":"A1","b222":"A2","b223":"A2","b224":"A2","b225":"A2","b226":"A1","b227":"A1","b228":"A1","b229":"A1","b230":"A1","b231":"A1","b232":"A1","b233":"A1","b234":"A1","b235":"A1","b236":"A1","b237":"A1","b238":"A1","b239":"A1","b240":"A1","b241":"A2","b242":"A2","b243":"A2","b244":"A2","b245":"A2","b246":"A2","b247":"A2","b248":"A2","b249":"A1","b250":"A1","b251":"A1","b252":"A1","b253":"A1","b254":"A1","b255":"A1","b256":"A1","b257":"A1","b258":"A1","b259":"A1","b260":"A2","b261":"A2","b262":"A2","b263":"A2","b264":"A2","b265":"A2","b266":"A1","b267":"A1","b268":"A1","b269":"A1","b270":"A1","b271":"A1","b272":"A1","b273":"A1","b274":"A1","b275":"A1","b276":"A1","b277":"A1","b278":"A1","b279":"A1","b280":"A1","b281":"A1","b282":"A1","b283":"A1","b284":"A1","b285":"A1","b286":"A1","b287":"A1","b288":"A1","b289":"A1","b290":"A1","b291":"A1","b292":"A1","b293":"A1","b294":"A1","b295":"A1","b296":"A1","b297":"A1","b298":"A1","b299":"A1","b300":"A1","b301":"A1","b302":"A1","b303":"A2","b304":"A2","b305":"A2","b306":"A2","b307":"A2","b308":"A2","b309":"A2","b310":"A2","b311":"A2","b312":"A2","b313":"A2","b314":"A2","b315":"A2","b316":"A2","b317":"A1","b318":"A1","b319":"A1","b320":"A1","b321":"A1","b322":"A1","b323":"A1","b324":"A1","b325":"A1","b326":"A1","b327":"A1","b328":"A1","b329":"A1","b330":"A1","b331":"A1","b332":"A1","b333":"A1","b334":"A1","b335":"A1","b336":"A1","b337":"A1","b338":"A1","b339":"A1","b340":"A1","b341":"A1","b342":"A1","b343":"A1","b344":"A1","b345":"A1","b346":"A1","b347":"A1","b348":"A1","b349":"A1","b350":"A2","b351":"A2","b352":"A2","b353":"A2","b354":"A2","b355":"A2","b356":"A2","b357":"A2","b358":"A2","b359":"A2","b360":"A2","b361":"A2"};
var VLV={"be":"A1","have":"A1","do":"A1","go":"A1","come":"A1","get":"A1","make":"A1","eat":"A1","drink":"A1","see":"A1","say":"A1","speak":"A1","read":"A1","write":"A1","buy":"A1","sleep":"A1","know":"A1","take":"A1","give":"A1","find":"A1","think":"A1","tell":"A1","get up":"A1","have breakfast":"A1","run":"A1","swim":"A1","sit":"A1","meet":"A2","leave":"A2","pay":"A2","send":"A2","spend":"A2","feel":"A2","bring":"A2","teach":"A2","catch":"A2","lose":"A2","win":"A2","begin":"A2","break":"A2","choose":"A2","drive":"A2","fly":"A2","forget":"A2","understand":"A2","sell":"A2","wear":"A2","sing":"A2","hear":"A2","put":"A2","cost":"A2","cut":"A2","let":"A2","become":"B1","keep":"B1","hold":"B1","build":"B1","grow":"B1","fall":"B1","steal":"B1","work":"A1","live":"A1","play":"A1","like":"A1","want":"A1","need":"A1","watch":"A1","listen":"A1","cook":"A1","study":"A1","open":"A1","close":"A1","help":"A1","start":"A1","finish":"A1","wait":"A1","ask":"A1","walk":"A1","talk":"A1","love":"A1","stay":"A1","call":"A2","travel":"A2","visit":"A2","try":"A2","arrive":"A2","move":"A2","decide":"A2","plan":"A2","stop":"A2","enjoy":"A2","hope":"A2","change":"A2","clean":"A2","use":"A2","carry":"A2","answer":"A2","happen":"A2","analyze":"B1","predict":"B1","measure":"B1","share":"B1","deploy":"B1","set up":"B1","lead":"B1"};
function wLevel(w){var c=String(w.id).charAt(0);return c==='b'?(WLV[w.id]||'B1'):c==='j'?'B1':c==='u'?'B2':null}
function vLevel(v){return VLV[v.inf]||'B1'}
function allWordsRaw(){return BASE.concat([].concat.apply([],JOBS.map(function(j){return JOB_WORDS[j.key]||[]})),IDIOMS)}
function allWords(){return BASE.concat(JOB_WORDS[S.job]||[],typeof IDIOMS!=='undefined'&&unlocked('idioms')?IDIOMS:[],S.custom)}
function byId(id){return allWords().find(function(w){return w.id===id})}
function pool(){if(ui.only){var o=ui.only;return allWords().filter(function(w){return o.indexOf(w.id)>-1})}var p=allWords().filter(function(w){return ui.cat==='All'||w.cat===ui.cat});if(ui.lvf){var f=p.filter(function(w){return wLevel(w)===ui.lvf});if(f.length)p=f}return p}
function lvfBar(){if(ui.only)return '<p class="note">'+tl('Only the words of this unit.')+' <button class="link" data-a="onlyx">'+tl('Practice everything')+'</button></p>';return ui.lvf?'<p class="note">'+tl('Only LV content, for your path goal.').replace('LV',ui.lvf)+' <button class="link" data-a="lvfx">'+tl('Practice everything')+'</button></p>':''}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function ac(a){return a?'a-'+a:'a-none'}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function fmt(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
// Streak freezes (from the mystery chest) bridge missed days
function dnum(s){var a=s.split('-');return Math.round(new Date(+a[0],a[1]-1,+a[2]).getTime()/864e5)}
function missed(){return S.lastDay?dnum(fmt(new Date()))-dnum(S.lastDay)-1:99}
function touch(){
  var t=fmt(new Date());
  if(S.lastDay!==t){
    var g=missed(), fz=(S.ch&&S.ch.freeze)||0;
    if(g===0) S.streak++;
    else if(g>0&&g<=fz&&S.streak){S.ch.freeze-=g;S.streak++;setTimeout(function(){toast(tl('❄️ Streak freeze used'))},500)}
    else S.streak=1;
    S.lastDay=t;
  }
}
function shownStreak(){
  var g=missed();
  return (g<=0||(S.streak&&g<=((S.ch&&S.ch.freeze)||0)))?S.streak:0;
}
function speak(text){
  try{
    var u=new SpeechSynthesisUtterance(text);
    u.lang='en-US'; u.rate=.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }catch(e){}
}
var ICON='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';

function buildSession(practice){
  var now=Date.now(), p=pool(), due=[], fr=[];
  p.forEach(function(w){
    var g=S.progress[w.id];
    if(!g) fr.push(w.id); else if(g.due<=now) due.push(w.id);
  });
  var q=practice?shuffle(p.map(function(w){return w.id})).slice(0,15):shuffle(due).concat(shuffle(fr).slice(0,8));
  ui.session={queue:q,total:q.length,done:0,practice:!!practice};
  ui.flipped=false;
}
// Mistakes: S.mist[key]={n:times wrong, ok:right answers in a row since}. Keys: mean:id, art:id, gap:id, tr:id, verb:inf|tense|person
var MIST_CLEAR=2;
// Honest progress: S.know[id]={r: checked correct answers (net), pd: days with a correct typed answer EN→DE incl. article}
// Recognized = at least one checked correct answer. Mastered = typed correctly on 2 different days. Flashcards only schedule reviews.
var MASTER_DAYS=2, _selfGrade=false;
function kn(id){S.know=S.know||{};return S.know[id]||(S.know[id]={r:0,pd:[]})}
function isMastered(id){var k=S.know&&S.know[id];return !!(k&&k.pd&&k.pd.length>=MASTER_DAYS)}
function isRecognized(id){var k=S.know&&S.know[id];return !!(k&&(k.r>0||isMastered(id)))}
function recog(id,ok){var k=kn(id);if(ok)k.r++;else k.r=Math.max(0,k.r-1)}
function prodAns(id,ok){
  var k=kn(id);
  if(!ok){k.pd=[];return}
  var d=today(); if(k.pd.indexOf(d)>-1) return;
  var was=isMastered(id); k.pd.push(d); if(k.pd.length>MASTER_DAYS+1) k.pd.shift();
  if(!was&&isMastered(id)){dayRec().l++;var w=byId(id);setTimeout(function(){toast(tl('⭐ Mastered: ')+(w?wordKey(w):tl('a new word')))},400)}
}
function migrateKnow(){
  if(S.knowV) return;
  S.know=S.know||{};
  for(var id in S.progress){var g=S.progress[id];if(g&&g.box>=3&&!(S.know[id]&&S.know[id].r))kn(id).r=1}
  S.knowV=1;
}
migrateKnow();
function mist(key,ok){
  sfx(ok);
  if(ui.tab==='chal'&&!_selfGrade) chCombo(ok);
  if(!_selfGrade){var kk=key.split(':')[0];if(['mean','art','gap','tr','prod'].indexOf(kk)>-1)recog(key.slice(kk.length+1),ok)}
  S.mist=S.mist||{}; var m=S.mist[key];
  if(!ok){ if(!m) m=S.mist[key]={n:0,ok:0}; m.n++; m.ok=0; m.at=Date.now(); }
  else if(m){ m.ok++; if(!_selfGrade) addXp(5); if(m.ok>=MIST_CLEAR){ delete S.mist[key]; if(!_selfGrade){ addXp(10); recovered(key); } } }
  save();
}
// An opportunity taken: the item left the list after MIST_CLEAR right answers in a row
function recovered(key){
  var kind=key.split(':')[0], rest=key.slice(kind.length+1), name='';
  if(kind==='verb') name=rest.split('|')[0]; else if(kind==='conv') name=''; else {var w=byId(rest.split('|')[0]); if(w) name=wordKey(w)}
  dayRec().rc=(dayRec().rc||0)+1;
  setTimeout(function(){toast(tl('🎉 You recovered it! ')+(name?name+' · ':'')+'+10 XP')},500);
}
function mistKeys(kind){return Object.keys(S.mist||{}).filter(function(k){return !kind||k.indexOf(kind+':')===0})}
function grade(good){
  var s=ui.session, id=s.queue.shift();
  _selfGrade=true; mist('mean:'+id,good); _selfGrade=false;
  if(!s.practice){
    var g=S.progress[id]||{box:0,due:0}, was=g.box;
    g.box=good?Math.min(5,g.box+1):0;
    g.due=Date.now()+(good?DAYS[g.box]:0)*864e5;
    S.progress[id]=g;
  }
  if(good) s.done++; else s.queue.push(id);
  tick();
  ui.flipped=false; ui.pop=true;
  render();
}

var FIL='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"/></svg>';
// Categories stay folded behind one Filter button so the exercise sits at the top
function chips(){
  var cur=ui.cat===JOB_CAT&&S.job?tl('My job: ')+jobName():catL(ui.cat);
  var fb='<div class="fbar"><button class="fbtn" data-a="fopen" aria-expanded="'+!!ui.fopen+'">'+FIL+tl('Filter')+': <b>'+esc(cur)+'</b> '+(ui.fopen?'▴':'▾')+'</button></div>';
  if(!ui.fopen) return fb;
  return fb+'<div class="chips" role="group" aria-label="Category">'+['All',JOB_CAT].concat(CATS,unlocked('idioms')?['Idioms']:[]).map(function(c){
    var label=c===JOB_CAT&&S.job?tl('My job: ')+jobName():catL(c);
    return '<button class="chip" data-a="cat" data-v="'+c+'" aria-pressed="'+(ui.cat===c)+'">'+esc(label)+'</button>';
  }).join('')+'</div>';
}

function jobGate(){
  if(ui.cat!==JOB_CAT) return '';
  if(!S.job||ui.pickJob){
    return tl('<div class="panel"><h2>Vocabulary for your job</h2><p class="sub">Pick your field to get German words you will use at work. You can change it any time; your progress in each field is kept.</p><div class="seg" role="group" aria-label="Job">')+
      JOBS.map(function(j){return '<button data-a="setjob" data-v="'+j.key+'" aria-pressed="'+(S.job===j.key)+'">'+esc(catL(j.name))+'</button>'}).join('')+
      '</div>'+(S.job?tl('<button class="btn ghost wide" data-a="pickjob">Cancel</button>'):'')+'</div>';
  }
  return null;
}
function fhead(){return (ui.only||ui.planCur?'':chips()+jobMeta())+lvfBar()}
function jobMeta(){
  return ui.cat===JOB_CAT&&S.job?'<div class="meta"><span>'+esc(jobName())+' · '+JOB_WORDS[S.job].length+tl(' words</span><button class="link" data-a="pickjob">Change job</button></div>'):'';
}
function vLearn(){
  var g=jobGate(); if(g) return chips()+g;
  if(!ui.session) buildSession(false);
  var s=ui.session, p=pool(), now=Date.now();
  var dueN=p.filter(function(w){var g=S.progress[w.id];return g&&g.due<=now}).length;
  var newN=p.filter(function(w){return !S.progress[w.id]}).length;
  var h=(ui.planCur||ui.only)?'':chips()+jobMeta();
  h+='<div class="meta"><span>'+dueN+tl(' to review, ')+newN+tl(' new</span><button class="link" data-a="rev">')+(S.reverse?tl('English to German'):tl('German to English'))+'</button></div>';
  if(s.exited){
    return h+tl('<div class="done"><h2>Session ended</h2><p class="sub">')+(s.practice?tl('Practice rounds don’t change your progress.'):tl('Your answers so far are saved. You went through ')+s.done+tl(' of ')+s.total+tl(' words.'))+tl('</p><button class="btn wide" data-a="lresume">Start learning again</button><button class="btn ghost wide" data-a="practice">Practice 15 random words</button></div>');
  }
  if(!s.queue.length){
    return h+planHit(['rev','new'])+(s.unit&&s.total?'<button class="btn wide" data-a="uquiz">'+tl('Practice these words')+'</button>':'')+'<div class="done"><h2>'+(s.total?tl('Session complete'):tl('Nothing to review here'))+'</h2><p class="sub">'+(s.total?(s.practice?tl('Practice rounds don’t change your progress. '):'')+tl('You went through ')+s.total+tl(' words. Flashcards plan your reviews. To make words count as Recognized and Mastered, practise them in Practice, especially Write the word.'):tl('Come back later, pick another category, or practice now.'))+tl('</p><button class="btn wide" data-a="go" data-v="write">Write these words in German</button><button class="btn ghost wide" data-a="practice">Practice 15 random words</button></div>');
  }
  var w=byId(s.queue[0]);
  if(!w){s.queue.shift();return vLearn()}
  var de=(w.art?'<span class="art">'+w.art+'</span> ':'')+esc(w.de), en=esc(w.en);
  var prompt=S.reverse?en:de, answer=S.reverse?de:en;
  var c=(S.reverse&&!ui.flipped)?'a-none':ac(w.art);
  h+=tl('<div class="qtop"><button class="link exit" data-a="lexit">✕ Exit</button></div>')+'<div class="prog"><i style="width:'+(s.total?Math.round(s.done/s.total*100):0)+'%"></i></div>';
  h+='<div class="card '+c+(ui.pop?' pop':'')+'" data-a="flip" tabindex="0" role="button" aria-label="Flip card">';
  h+='<div class="top"><span>'+esc(catL(w.cat))+tl('</span><button class="icon" data-a="say" aria-label="Pronounce">')+ICON+'</button></div>';
  h+='<div class="prompt">'+prompt+'</div>';
  if(!S.reverse) h+=plHtml(w);
  if(ui.flipped){
    h+='<div class="rev"><div class="ans">'+answer+'</div>'+(S.reverse?plHtml(w):'')+ruleHtml(w)+(w.ex?'<div class="exrow"><p class="ex">'+esc(w.ex)+tl('</p><button class="icon" data-a="say" data-ex="1" aria-label="Pronounce sentence">')+ICON+'</button></div><p class="exen">'+esc(w.exEn||'')+'</p>':'')+'</div>';
  }
  h+='</div>';
  if(!ui.flipped) h+=tl('<button class="btn wide" data-a="flip">Show answer</button>');
  else h+=tl('<div class="row"><button class="btn ghost" data-a="again">Again</button><button class="btn" data-a="good">Got it</button></div>');
  ui.pop=false;
  return h;
}

// Fill the gap: find the word (or its inflected form) in the example sentence and blank it out
function nfold(x){try{return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}catch(e){return x.toLowerCase()}}
function fold(x){return x.toLowerCase().replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ß/g,'ss')}
function gapFor(w){
  if(!w.ex) return null;
  var ex=w.ex, de=w.de.replace(/^to /,'').replace(/[?!.]$/,'').trim();
  if(!de) return null;
  var i=ex.toLowerCase().indexOf(de.toLowerCase());
  if(de.indexOf(' ')>-1){
    if(i<0||de.length>ex.length*0.6) return null;
    return {before:ex.slice(0,i),ans:ex.substr(i,de.length),after:ex.slice(i+de.length)};
  }
  var re=/[A-Za-z’']+/g, m, lo=de.toLowerCase(), stem=lo.length>3?lo.replace(/(e|y)$/,''):lo;
  while((m=re.exec(ex))){
    var t=m[0].toLowerCase();
    if(t===lo||(stem.length>=3&&t.indexOf(stem)===0&&/^(s|es|ies|d|ed|ied|ing|\w?ed|\w?ing)$/.test(t.slice(stem.length))))
      return {before:ex.slice(0,m.index),ans:m[0],after:ex.slice(m.index+m[0].length)};
  }
  return null;
}
// Answer normalizer for every typed exercise: case, umlauts (ä=ae), ß=ss, punctuation, … vs ..., smart quotes and extra spaces don't matter
function expandC(x){return String(x).replace(/[’‘`´]/g,"'").replace(/\bwon't\b/gi,'will not').replace(/\bcan't\b/gi,'can not').replace(/\bcannot\b/gi,'can not').replace(/n't\b/gi,' not').replace(/'m\b/gi,' am').replace(/'re\b/gi,' are').replace(/'ll\b/gi,' will').replace(/'ve\b/gi,' have')}
function norm(x){x=expandC(x);try{x=x.normalize('NFC')}catch(e){}return x.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/[.,!?…;:¿¡"“”„‚‘’'`´«»()]/g,'').replace(/\s+/g,' ').trim()}
function makeQ(w,mode){
  mode=mode||ui.mode;
  if(mode==='gap') return {mode:mode,w:w,gap:gapFor(w),ans:gapFor(w).ans};
  if(mode==='write') return {mode:mode,w:w,ans:wordKey(w)};
  if(mode==='case') return makeCase(w);
  if(mode==='article') return {mode:mode,w:w,opts:['der','die','das'],ans:w.art,prompt:w.de};
  var all=allWords().filter(function(x){return x.id!==w.id&&x.en!==w.en});
  var same=shuffle(all.filter(function(x){return x.cat===w.cat}));
  var rest=shuffle(all.filter(function(x){return x.cat!==w.cat}));
  var others=same.concat(rest).slice(0,3).map(function(x){return x.en});
  return {mode:'meaning',w:w,opts:shuffle([w.en].concat(others)),ans:w.en,prompt:(w.art?w.art+' ':'')+w.de};
}
function startQuiz(){
  var p=pool();
  if(ui.mode==='article') p=p.filter(function(w){return w.art});
  if(ui.mode==='gap') p=p.filter(function(w){return gapFor(w)});
  if(ui.mode==='case') p=p.filter(caseNoun);
  if(!p.length){ui.msg=ui.mode==='gap'?tl('This category has no example sentences to use. Pick another one.'):tl('This category has no nouns with articles. Pick another one.');return}
  ui.msg='';
  var order=shuffle(p);
  if(ui.mode==='write'){var a=order.filter(function(w){return isRecognized(w.id)&&!isMastered(w.id)}),b=order.filter(function(w){return !isMastered(w.id)&&!isRecognized(w.id)}),c=order.filter(function(w){return isMastered(w.id)});order=a.concat(b,c)}
  ui.quiz={qs:order.slice(0,10).map(function(w){return makeQ(w)}),i:0,score:0,picked:null};
}
function vQuiz(){
  var q=ui.quiz, h='';
  if(q&&q.ch){if(q.i>=q.qs.length) return chDone(q)}
  else {var g=jobGate(); if(g) return chips()+g; h=fhead()}
  if(!q){
    h+=tl('<div class="panel"><h2>Quick quiz</h2><p class="sub">Up to 10 questions from the selected category.</p><div class="seg" role="group" aria-label="Quiz type">');
    h+='<button data-a="mode" data-v="meaning" aria-pressed="'+(ui.mode==='meaning')+'">'+tl('Meanings')+'</button>';
    h+='<button data-a="mode" data-v="gap" aria-pressed="'+(ui.mode==='gap')+tl('">Fill the gap</button>');
    h+='<button data-a="mode" data-v="write" aria-pressed="'+(ui.mode==='write')+tl('">Write the word</button>');
    h+='</div>';
    if(ui.mode==='write') h+='<p class="sub" style="margin:12px 0 0">Ves el significado en español y escribes la palabra en inglés. Así una palabra pasa a <b>Dominada</b>: escríbela bien en '+MASTER_DAYS+' días distintos. Primero salen las palabras que ya reconoces.</p>';if(0) h+=tl('<p class="sub" style="margin:12px 0 0">You see the English meaning and type the German word. Write nouns with their article, for example “der Tisch”. This is how a word becomes <b>Mastered</b>: type it exactly on ')+MASTER_DAYS+tl(' different days. Words you already recognize come first.</p>');
    if(ui.mode==='case') h+=tl('<p class="sub" style="margin:12px 0 0">Pick the right article for the sentence: Nominativ, Akkusativ or Dativ. The rules are in Learn → Rules → Cases.</p>');
    if(ui.mode==='gap') h+='<p class="sub" style="margin:12px 0 0">Escribe la palabra en inglés que falta en la frase.</p>';if(0) h+=tl('<p class="sub" style="margin:12px 0 0">Type the missing German word in the sentence. Umlauts can be typed as ae, oe, ue and ß as ss.</p>');
    h+=tl('<button class="btn wide" data-a="qstart">Start quiz</button>')+(ui.msg?'<p class="note">'+esc(ui.msg)+'</p>':'')+'</div>';
    return h;
  }
  if(q.i>=q.qs.length&&q.review) return h+doneReview(q.score,q.qs.length);
  if(q.i>=q.qs.length){
    return h+tl('<div class="done"><h2>Quiz finished</h2><div class="score">')+q.score+'/'+q.qs.length+'</div><p class="sub">'+(q.score===q.qs.length?tl('Perfect run.'):q.score>=q.qs.length*0.7?tl('Solid. Keep going.'):tl('Review these words in Learn, then try again.'))+tl('</p><button class="btn wide" data-a="qstart">Play again</button><button class="btn ghost wide" data-a="qreset">Change settings</button></div>');
  }
  var cur=q.qs[q.i];
  if(cur.gap) return h+vGap(q,cur);
  if(cur.mode==='write') return h+vWrite(q,cur);
  if(cur.mode==='case') return h+vCase(q,cur);
  h+=tl('<div class="qtop"><button class="link exit" data-a="qexit">✕ Exit</button></div>')+'<div class="prog"><i style="width:'+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Question ')+(q.i+1)+tl(' of ')+q.qs.length+'</p>';
  h+='<p class="qlabel">'+(cur.mode==='article'?tl('Which article goes with this noun?'):tl('What does it mean?'))+'</p>';
  var sayT=(cur.mode==='article'&&q.picked===null)?cur.w.de:(cur.w.art?cur.w.art+' ':'')+cur.w.de;
  h+='<div class="vhead"><div class="qprompt">'+esc(cur.prompt)+'</div><button class="icon" data-a="vsay" data-t="'+esc(sayT)+tl('" aria-label="Pronounce ')+esc(sayT)+'">'+ICON+'</button></div>'+(cur.mode==='article'?'<p class="ghint" style="margin:-4px 0 14px">'+esc(cur.w.en)+'</p>':'')+'<div class="opts">';
  cur.opts.forEach(function(o){
    var cls='opt';
    if(q.picked!==null){ if(o===cur.ans) cls+=' ok'; else if(o===q.picked) cls+=' bad'; }
    h+='<button class="'+cls+'" data-a="qpick" data-v="'+esc(o)+'"'+(q.picked!==null?' disabled':'')+'>'+esc(o)+'</button>';
  });
  h+='</div>';
  if(q.picked!==null) h+=fbk(q.picked===cur.ans,cur.mode==='article'?cur.ans+' '+cur.w.de:cur.ans);
  if(q.picked!==null&&cur.mode==='article') h+=ruleHtml(cur.w)+(q.picked!==cur.ans?ruleLink('go','rules','details.rule.a-'+cur.w.art):'');
  if(q.picked!==null) h+='<button class="btn wide" data-a="qnext">'+(q.i+1>=q.qs.length?tl('See score'):tl('Next question'))+'</button>';
  return h;
}

function vWrite(q,cur){
  var w=cur.w, done=q.picked!==null, r=done?q.res:null;
  var h=tl('<div class="qtop"><button class="link exit" data-a="qexit">✕ Exit</button></div><div class="prog"><i style="width:')+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Question ')+(q.i+1)+tl(' of ')+q.qs.length+tl('</p><p class="qlabel">Write it in German')+''+'</p>';
  h+='<div class="qprompt">'+esc(w.en)+'</div><p class="ghint" style="margin:-2px 0 12px">'+esc(catL(w.cat))+'</p>';
  if(!done){
    h+='<div class="bar"><input id="w-in" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="'+'palabra en inglés'+tl('" aria-label="German word"><button class="btn small" data-a="wcheck">Check</button></div>');
    h+=tl('<button class="link" data-a="wskip">I don’t know</button>');
  } else {
    h+='<div class="gres '+ac(w.art)+'"><p><b>'+(r.ok?(r.typo?tl('Correct, with a small typo. Type it exactly to count toward Mastered.'):tl('Correct!')):(q.picked?(r.note||tl('Not quite.'))+tl(' You wrote “')+esc(q.picked)+'”.':tl('Here is the answer.')))+'</b></p>'+
      '<div class="exrow" style="margin-top:4px"><p class="trs"><b>'+esc(wordKey(w))+'</b></p><button class="icon" data-a="vsay" data-t="'+esc(wordKey(w))+tl('" aria-label="Pronounce">')+ICON+'</button></div>'+plHtml(w,'pl small')+ruleHtml(w)+(w.art&&!r.ok&&q.picked&&norm(q.picked).split(' ')[0]!==norm(w.art)?ruleLink('go','rules','details.rule.a-'+w.art):'')+'</div>';
    h+='<button class="btn wide" data-a="qnext">'+(q.i+1>=q.qs.length?tl('See score'):tl('Next question'))+'</button>';
  }
  return h;
}
function vCase(q,cur){
  var done=q.picked!==null, parts=cur.sent.split('___');
  var h=tl('<div class="qtop"><button class="link exit" data-a="qexit">✕ Exit</button></div><div class="prog"><i style="width:')+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Question ')+(q.i+1)+tl(' of ')+q.qs.length+tl('</p><p class="qlabel">Which article fits?</p>');
  h+='<p class="gaps">'+esc(parts[0])+(done?'<b class="gapw '+(q.picked===cur.ans?'gok':'gbad')+'">'+esc(cur.ans)+'</b>':'<span class="gapb">___</span>')+esc(parts[1])+'</p>';
  h+='<p class="ghint"><span class="art '+ac(cur.w.art)+'">'+cur.w.art+'</span> '+esc(cur.w.de)+' = '+esc(cur.w.en)+'</p><div class="opts">';
  cur.opts.forEach(function(o){var cls='opt';if(done){if(o===cur.ans)cls+=' ok';else if(o===q.picked)cls+=' bad'}h+='<button class="'+cls+'" data-a="qpick" data-v="'+esc(o)+'"'+(done?' disabled':'')+'>'+esc(o)+'</button>'});
  h+='</div>';
  if(done){
    var full=parts[0]+cur.ans+parts[1];
    h+='<div class="gres '+ac(cur.w.art)+'" style="margin-top:12px"><p><b>'+CASE_NAME[cur.cs]+'</b></p><p>'+esc(cur.why)+'</p><div class="exrow"><p class="ex">'+esc(full)+'</p><button class="icon" data-a="vsay" data-t="'+esc(full)+tl('" aria-label="Pronounce sentence">')+ICON+'</button></div>'+(q.picked!==cur.ans?ruleLink('go','rules','#rf-cases'):'')+'</div>';
    h+='<button class="btn wide" data-a="qnext">'+(q.i+1>=q.qs.length?tl('See score'):tl('Next question'))+'</button>';
  }
  return h;
}
function vGap(q,cur){
  var w=cur.w, g=cur.gap, done=q.picked!==null, ok=done&&norm(q.picked)===norm(g.ans);
  var h=tl('<div class="qtop"><button class="link exit" data-a="qexit">✕ Exit</button></div>')+'<div class="prog"><i style="width:'+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Question ')+(q.i+1)+tl(' of ')+q.qs.length+'</p>';
  h+=tl('<p class="qlabel">Fill the gap</p>');
  var blank=done?'<b class="gapw '+(ok?'gok':'gbad')+'">'+esc(g.ans)+'</b>':'<span class="gapb">'+esc(g.ans.charAt(0))+'<span aria-hidden="true">'+'_'.repeat(Math.max(2,g.ans.length-1))+'</span></span>';
  h+='<p class="gaps">'+esc(g.before)+blank+esc(g.after)+'</p>';
  h+='<p class="exen">'+esc(w.exEn||'')+'</p>';
  h+=tl('<p class="ghint">Missing word: <b>')+esc(w.en)+tl('</b> · starts with <b>')+esc(g.ans.charAt(0))+'</b>, '+g.ans.length+' letras</p>';
  if(!done){
    h+=tl('<div class="bar"><input id="gap-in" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Type the word" aria-label="Missing word"><button class="btn small" data-a="gcheck">Check</button></div>');
    h+=tl('<button class="link" data-a="gskip">I don’t know</button>');
  } else {
    h+='<div class="gres '+ac(w.art)+'"><p><b>'+(ok?tl('Correct!'):(q.picked?tl('Not quite. You wrote “')+esc(q.picked)+'”.':tl('Here is the answer.')))+'</b></p>'+
      '<p>'+(w.art?'<span class="art">'+w.art+'</span> ':'')+esc(w.de)+' = '+esc(w.en)+(w.art&&fold(g.ans)!==fold(w.de)?tl(' <span class="exen">(in this sentence: ')+esc(g.ans)+')</span>':'')+'</p>'+plHtml(w,'pl small')+
      '<div class="exrow"><p class="ex">'+esc(w.ex)+'</p><button class="icon" data-a="say" data-id="'+w.id+tl('" data-ex="1" aria-label="Pronounce sentence">')+ICON+'</button></div></div>';
    h+='<button class="btn wide" data-a="qnext">'+(q.i+1>=q.qs.length?tl('See score'):tl('Next question'))+'</button>';
  }
  return h;
}
// Translate: English sentence -> type German. Checked word by word against the example sentence.
function toks(x){return expandC(x).split(/\s+/).map(function(t){return {raw:t,n:norm(t)}}).filter(function(t){return t.n})}
function lev(a,b){
  if(Math.abs(a.length-b.length)>1) return 2;
  var d=[],i,j;for(i=0;i<=a.length;i++){d[i]=[i]}for(j=1;j<=b.length;j++)d[0][j]=j;
  for(i=1;i<=a.length;i++)for(j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  return d[a.length][b.length];
}
function same(a,b){return a===b?2:(a.length>=4&&lev(a,b)<=1?1:0)}
function checkTrans(user,target){
  var u=toks(user), t=toks(target), n=t.length, m=u.length, L=[], i, j;
  for(i=0;i<=n;i++){L[i]=[];for(j=0;j<=m;j++)L[i][j]=0}
  for(i=n-1;i>=0;i--)for(j=m-1;j>=0;j--)
    L[i][j]=same(t[i].n,u[j].n)?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
  var tm=t.map(function(){return 'miss'}), um=u.map(function(){return 'extra'}), tp=[];
  i=0;j=0;
  while(i<n&&j<m){
    var s=same(t[i].n,u[j].n);
    if(s&&L[i][j]===L[i+1][j+1]+1){tm[i]=um[j]=s===2?'ok':'near';tp[i]=j;i++;j++}
    else if(L[i+1][j]>=L[i][j+1]) i++; else j++;
  }
  var ok=tm.filter(function(x){return x==='ok'}).length, near=tm.filter(function(x){return x==='near'}).length;
  var extra=um.filter(function(x){return x==='extra'}).length;
  var pct=Math.max(0,(ok+near*0.5-extra*0.5)/n);
  return {t:t,u:u,tm:tm,um:um,tp:tp,pct:pct,perfect:ok===n&&extra===0&&m===n};
}
// Sentences: write, build from word tiles, or say out loud. Uses each word's example sentence, up to your level.
var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
var MIC='<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>';
function trm(){return ui.trmo||S.trm||'type'}
function srOk(){return !!SR&&!ui.srOff}
function trPool(){
  var p=pool().filter(function(w){return w.ex&&w.exEn}), lv=curLevel();
  if(!ui.lvf&&lv){var mx=LV.indexOf(lv),f=p.filter(function(w){var l=wLevel(w);return !l||LV.indexOf(l)<=mx});if(f.length>=5)p=f}
  if(trm()!=='type'){var b=p.filter(function(w){return toks(w.ex).length<=12});if(b.length)p=b}
  return p;
}
function startTrans(){
  var p=trPool();
  if(!p.length){ui.trMsg=tl('This category has no sentences yet. Pick another one.');ui.tr=null;return}
  ui.trMsg='';
  ui.tr={qs:shuffle(p).slice(0,10),i:0,score:0,res:null,ans:'',hint:false};
}
// Word tiles for the build mode: the sentence's words shuffled, punctuation hidden so it gives nothing away
function tiles(q){
  if(q.tiles) return q.tiles;
  var raw=q.qs[q.i].ex.split(/\s+/).filter(Boolean), t=raw.map(function(r,k){return {k:k,raw:r,show:r.replace(/^[„“"'(¿¡]+|[.,!?;:…"“”')]+$/g,'')||r}}), m;
  for(var n=0;n<6;n++){m=shuffle(t);if(m.some(function(x,k){return x.k!==k}))break}
  q.pick=[]; return (q.tiles=m);
}
function trDone(q,v){
  q.ans=v; q.res=checkTrans(v,q.qs[q.i].ex);
  if(q.again){sfx(q.res.perfect);return}
  q.score+=q.res.perfect?1:q.res.pct>=0.75?0.5:0;
  mist('tr:'+q.qs[q.i].id,q.res.perfect);
  tick();
}
// Say it: the browser's German speech recognition. It keeps listening through pauses until you tap "Done, check it",
// so you can speak slowly. Where it doesn't exist or the microphone is blocked, you check yourself.
var REC=null;
// Join two pieces of a transcript. Android Chrome repeats the whole phrase in every new result ("wir", "wir essen", ...),
// so a piece that already contains the text so far replaces it, and words that overlap at the seam are not added twice.
function srMerge(a,b){
  a=(a||'').trim(); b=(b||'').trim(); if(!a) return b; if(!b) return a;
  var A=a.split(/\s+/), B=b.split(/\s+/), na=A.map(norm), nb=B.map(norm), ja=na.join(' '), jb=nb.join(' ');
  if(jb.indexOf(ja)===0) return b;
  if(ja.indexOf(jb)>-1) return a;
  for(var k=Math.min(A.length,B.length);k>0;k--) if(na.slice(-k).join(' ')===nb.slice(0,k).join(' ')) return A.concat(B.slice(k)).join(' ');
  return a+' '+b;
}
// Last safety net: drop a word or phrase repeated right after itself ("wir wir essen wir essen" → "wir essen")
function srClean(t){
  var w=t.split(/\s+/).filter(Boolean), changed=true;
  while(changed){changed=false;
    for(var n=Math.floor(w.length/2);n>=1&&!changed;n--) for(var i=0;i+2*n<=w.length;i++){
      if(w.slice(i,i+n).map(norm).join(' ')===w.slice(i+n,i+2*n).map(norm).join(' ')){w.splice(i+n,n);changed=true;break}
    }
  }
  return w.join(' ');
}
function srText(q){return srMerge(q.heard||'',q.sess||'')}
function srAbort(){var r=REC;REC=null;if(r){try{r.onend=r.onresult=r.onerror=null;r.abort()}catch(e){}}}
function srStart(q){
  var r; try{r=new SR()}catch(e){ui.srOff=true;q.listening=false;render();return}
  r.lang='en-US'; r.interimResults=true; r.maxAlternatives=1; r.continuous=true; REC=r;
  r.onresult=function(e){
    if(ui.tr!==q||q.res) return;
    // Rebuild this listening session from all its results each time, so nothing is counted twice
    var t='';
    for(var k=0;k<e.results.length;k++) t=srMerge(t,e.results[k][0].transcript);
    q.sess=t;
    var el=document.getElementById('sr-live'); if(el){el.textContent=srText(q)||tl('…');el.classList.toggle('empty',!srText(q))}
  };
  r.onerror=function(e){
    if(ui.tr!==q) return;
    if(e.error==='not-allowed'||e.error==='service-not-allowed'||e.error==='audio-capture'){q.listening=false;REC=null;ui.srOff=true;q.srMsg=tl('The microphone isn’t available here, so you check yourself.');render()}
    else if(e.error==='network'){q.listening=false;REC=null;q.srMsg=tl('Speech recognition needs an internet connection. Try again.');render()}
  };
  // Browsers end a session after a long silence: start a new one and keep what was heard, until you tap Done
  r.onend=function(){
    if(ui.tr!==q||REC!==r) return;
    q.heard=srText(q); q.sess='';
    if(q.listening&&!q.stopping){srStart(q);return}
    REC=null; srFinish(q);
  };
  try{r.start()}catch(e){q.listening=false;REC=null;ui.srOff=true;render()}
}
function listen(){
  var q=ui.tr; if(!q||q.res||q.listening) return;
  q.listening=true; q.stopping=false; q.heard=''; q.sess=''; q.srMsg=''; render(); srStart(q);
}
function srStop(){var q=ui.tr; if(!q||!q.listening) return; q.stopping=true; render(); if(REC){try{REC.stop()}catch(e){srAbort();srFinish(q)}} else srFinish(q)}
function srFinish(q){
  if(!q.listening) return;
  var t=srText(q); q.listening=false; q.stopping=false; q.sess='';
  if(ui.tr!==q||q.res) return;
  if(!t){q.srMsg=tl('I didn’t hear anything. Tap the microphone and try again.');render();return}
  // Check both what was heard and a version without repeated words, and keep the better match
  var c=srClean(t), ex=q.qs[q.i].ex, sc=function(x){var r=checkTrans(x,ex);return r.perfect?2:r.pct-toks(x).length*0.001};
  trDone(q,sc(c)>=sc(t)?c:t); render();
}
function vTrans(){
  var g=jobGate(); if(g) return chips()+g;
  var h=fhead(), q=ui.tr, md=trm();
  if(!q){
    var lv=curLevel();
    h+='<div class="panel"><h2>'+tl('Translate sentences')+'</h2>'+'<p class="sub">'+tl('Practice whole sentences: you get one in English and answer in German.')+'</p>';
    h+='<div class="seg trseg" role="group" aria-label="'+tl('How to answer')+'">'+[['type',tl('Type it')],['build',tl('Build it')],['say',tl('Say it')]].map(function(o){return '<button data-a="trm" data-v="'+o[0]+'" aria-pressed="'+(md===o[0])+'">'+o[1]+'</button>'}).join('')+'</div>';
    h+='<p class="sub" style="margin:12px 0 0">'+(md==='build'?tl('Tap the German words in the right order. Good for learning word order, like the verb in second place.'):md==='say'?(srOk()?tl('Say the sentence out loud in German and the app checks what it hears. Speaking fixes words in memory better than reading them.'):tl('Your browser can’t listen, so you say the sentence out loud, then compare it with the answer and mark it yourself. This practice doesn’t change your progress.')):tl('Type the sentence. Small typos count as almost right, and umlauts can be typed as ae, oe, ue and ß as ss.'))+'</p>';
    if(lv&&!ui.lvf) h+='<p class="ghint" style="margin-top:8px">'+tl('Sentences up to your level, LV.').replace('LV',lv)+'</p>';
    return h+'<button class="btn wide" data-a="trstart">'+tl('Start')+'</button>'+(ui.trMsg?'<p class="note">'+esc(ui.trMsg)+'</p>':'')+'</div>';
  }
  if(q.i>=q.qs.length){
    var sc=Math.round(q.score*10)/10;
    if(q.review) return h+doneReview(sc,q.qs.length);
    return h+planHit(['sent'])+tl('<div class="done"><h2>All done</h2><div class="score">')+sc+'/'+q.qs.length+'</div><p class="sub">'+(sc>=q.qs.length*0.8?tl('Great translating.'):sc>=q.qs.length*0.5?tl('Good work. Keep going.'):tl('Try these words in Learn first, then come back.'))+tl('</p><button class="btn wide" data-a="trstart">10 more sentences</button>')+'<button class="btn ghost wide" data-a="trexit">'+tl('Change settings')+'</button>'+'</div>';
  }
  var w=q.qs[q.i], r=q.res, self=md==='say'&&!srOk();
  h+=tl('<div class="qtop"><button class="link exit" data-a="trexit">✕ Exit</button></div>')+'<div class="prog"><i style="width:'+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Sentence ')+(q.i+1)+tl(' of ')+q.qs.length+'</p><p class="qlabel">'+(md==='build'?tl('Build this in German'):md==='say'?tl('Say this in German'):tl('Write this in German'))+'</p>';
  h+='<p class="gaps">'+esc(w.exEn)+'</p>';
  if(q.hint||r||q.rev) h+=tl('<p class="ghint">Key word: ')+(w.art?'<span class="art '+ac(w.art)+'">'+w.art+'</span> ':'')+'<b>'+esc(w.de)+'</b> = '+esc(w.en)+'</p>';
  var hintBtn='<button class="btn ghost" data-a="trhint"'+(q.hint?' disabled':'')+'>'+(q.hint?tl('Hint shown'):tl('Hint'))+'</button>';
  if(!r&&md==='build'){
    var t=tiles(q), used={};q.pick.forEach(function(k){used[k]=1});
    h+='<div class="tline" aria-label="'+tl('Your sentence')+'">'+(q.pick.length?q.pick.map(function(k,n){var x=t.filter(function(y){return y.k===k})[0];return '<button class="tile" data-a="tdel" data-v="'+n+'">'+esc(x.show)+'</button>'}).join(''):'<span class="ghint">'+tl('Tap the words below')+'</span>')+'</div>';
    h+='<div class="tiles">'+t.map(function(x){return '<button class="tile'+(used[x.k]?' used':'')+'" data-a="tadd" data-v="'+x.k+'"'+(used[x.k]?' disabled aria-hidden="true"':'')+'>'+esc(x.show)+'</button>'}).join('')+'</div>';
    h+='<div class="row">'+hintBtn+'<button class="btn" data-a="trcheck"'+(q.pick.length<t.length?' disabled':'')+'>'+tl('Check')+'</button></div>';
    h+=tl('<button class="link" data-a="trskip" style="margin-top:12px">Show the answer</button>');
  } else if(!r&&md==='say'&&!self){
    if(q.listening){
      var lt=srText(q);
      h+='<div class="micw"><span class="mic on" aria-hidden="true">'+MIC+'</span><p class="ghint">'+(q.stopping?tl('Checking…'):tl('Listening. Take your time, pauses are fine. Tap Done when you finish.'))+'</p></div>';
      h+='<p class="srlive'+(lt?'':' empty')+'" id="sr-live" aria-live="polite">'+esc(lt||'…')+'</p>';
      h+='<button class="btn wide" data-a="trstop"'+(q.stopping?' disabled':'')+'>'+tl('Done, check it')+'</button><button class="link" data-a="trredo" style="margin-top:10px">'+tl('Start over')+'</button>';
    } else {
      h+='<div class="micw"><button class="mic" data-a="trlisten" aria-label="'+tl('Speak')+'">'+MIC+'</button><p class="ghint">'+tl('Tap the microphone, say the sentence at your own pace, then tap Done.')+'</p></div>';
      if(q.srMsg) h+='<p class="ghint">'+esc(q.srMsg)+'</p>';
      h+='<div class="row">'+hintBtn+'<button class="btn ghost" data-a="trskip">'+tl('Show the answer')+'</button>'+'</div>';
    }
  } else if(!r&&self){
    if(q.srMsg) h+='<p class="ghint">'+esc(q.srMsg)+'</p>';
    if(!q.rev){
      h+='<p class="sub">'+tl('Say it out loud in German, then check.')+'</p><div class="row">'+hintBtn+'<button class="btn" data-a="trreveal">'+tl('Check')+'</button>'+'</div>';
    } else {
      h+='<div class="gres a-none"><p class="trl">'+tl('Correct')+'</p><div class="exrow"><p class="trs">'+esc(w.ex)+'</p><button class="icon" data-a="say" data-id="'+w.id+tl('" data-ex="1" aria-label="Pronounce sentence">')+ICON+'</button></div></div>';
      h+='<p class="qlabel">'+tl('Did you say it right?')+'</p><div class="row"><button class="btn ghost" data-a="trself" data-v="0">'+tl('Not quite')+'</button><button class="btn" data-a="trself" data-v="1">'+tl('Yes')+'</button></div>';
    }
  } else if(!r){
    h+=tl('<textarea id="tr-in" rows="2" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Your German sentence" aria-label="Your German translation">')+esc(q.ans)+'</textarea>';
    h+='<div class="row">'+hintBtn+'<button class="btn" data-a="trcheck">'+tl('Check')+'</button></div>';
    h+=tl('<button class="link" data-a="trskip" style="margin-top:12px">Show the answer</button>');
  } else {
    var label=r.perfect?tl('Perfect!'):r.pct>=0.75?tl('Almost right'):r.u.length?tl('Not quite'):tl('Here is the answer');
    var capNote=md==='type'&&r.u.length&&r.t.some(function(t,k){var u=r.u[r.tp[k]];return k>0&&u&&/^[A-ZÄÖÜ]/.test(t.raw)&&!/^[A-ZÄÖÜ]/.test(u.raw)});
    if(0) label+=tl(' Remember that German nouns start with a capital letter.');
    h+='<div class="gres '+(r.perfect?'a-das':r.pct>=0.75?'a-der':'a-bad')+'"><p><b>'+label+'</b></p>';
    if(r.u.length) h+='<p class="trl">'+(md==='say'?tl('I heard'):tl('Your answer'))+'</p><p class="trs">'+r.u.map(function(t,k){return '<span class="tw '+r.um[k]+'">'+esc(t.raw)+'</span>'}).join(' ')+'</p>';
    h+=tl('<p class="trl">Correct</p><div class="exrow"><p class="trs">')+r.t.map(function(t,k){return '<span class="tw '+(r.u.length?r.tm[k]:'')+'">'+esc(t.raw)+'</span>'}).join(' ')+'</p><button class="icon" data-a="say" data-id="'+w.id+tl('" data-ex="1" aria-label="Pronounce sentence">')+ICON+'</button></div>';
    if(r.u.length&&!r.perfect) h+=tl('<p class="trkey"><span class="tw miss">red</span> missing or wrong · <span class="tw near">yellow</span> small typo · <span class="tw extra">crossed out</span> not needed</p>');
    if(md==='say'&&r.u.length&&!r.perfect) h+='<p class="ghint">'+tl('Listen to it, then say it again to practice. Your first try is the one that counts.')+'</p>';
    h+='</div>';
    if(md==='say'&&!r.perfect&&srOk()) h+='<button class="btn ghost wide" data-a="tragain">'+tl('Say it again')+'</button>';
    h+='<button class="btn wide" data-a="trnext">'+(q.i+1>=q.qs.length?tl('See score'):tl('Next sentence'))+'</button>';
  }
  return h;
}
// Conversation scenarios: partner line (p), English (pe), task, key words (kw), sentence starter (st), model answer (m)
// Conversation scenarios: partner line (p), Spanish (pe), task, key words (kw), sentence starter (st), model answer (m)
var CONVS=[
 {id:'a1-meet',lv:'A1',t:'Conocer a alguien',set:'En un café de idiomas, alguien empieza a hablarte.',turns:[
  {p:'Hi! I’m Emma. What’s your name?',pe:'¡Hola! Soy Emma. ¿Cómo te llamas?',task:'Saluda y di tu nombre.',kw:['Hi','name'],st:'Hi, my name is …',m:'Hi Emma, my name is Luis.'},
  {p:'Nice to meet you! Where are you from?',pe:'¡Mucho gusto! ¿De dónde eres?',task:'Di que eres de Chile.',kw:['from','Chile'],st:'I’m from …',m:'I’m from Chile.'},
  {p:'Cool! What do you do?',pe:'¡Genial! ¿A qué te dedicas?',task:'Di que eres científico de datos.',kw:['data scientist'],st:'I’m a …',m:'I’m a data scientist.'},
  {p:'Interesting! Why are you learning English?',pe:'¡Interesante! ¿Por qué estás aprendiendo inglés?',task:'Di que lo necesitas para tu trabajo.',kw:['need','work'],st:'I need it for …',m:'I need it for my work.'}]},
 {id:'a1-cafe',lv:'A1',t:'En el café',set:'Estás pidiendo en la barra de un café.',turns:[
  {p:'Hi there! What can I get you?',pe:'¡Hola! ¿Qué te sirvo?',task:'Pide un café con leche.',kw:['coffee','milk'],st:'Can I have …',m:'Can I have a coffee with milk, please?'},
  {p:'Sure. Small, medium or large?',pe:'Claro. ¿Chico, mediano o grande?',task:'Pide uno mediano.',kw:['medium'],st:'A …, please.',m:'A medium one, please.'},
  {p:'Anything to eat?',pe:'¿Algo para comer?',task:'Pide un croissant.',kw:['croissant'],st:'Yes, …',m:'Yes, a croissant, please.'},
  {p:'That’s six fifty.',pe:'Son seis cincuenta.',task:'Pregunta si puedes pagar con tarjeta.',kw:['pay','card'],st:'Can I …',m:'Can I pay by card?'}]},
 {id:'a1-shop',lv:'A1',t:'De compras',set:'Estás en una tienda de ropa.',turns:[
  {p:'Hello, can I help you?',pe:'Hola, ¿te puedo ayudar?',task:'Di que buscas una chaqueta.',kw:['looking for','jacket'],st:'Yes, I’m looking for …',m:'Yes, I’m looking for a jacket.'},
  {p:'What size are you?',pe:'¿Qué talla eres?',task:'Di que eres talla M (medium).',kw:['medium'],st:'I’m …',m:'I’m a medium.'},
  {p:'Here you are. Do you like this one?',pe:'Aquí tienes. ¿Te gusta esta?',task:'Di que sí y pregunta cuánto cuesta.',kw:['how much'],st:'Yes! How much …',m:'Yes! How much is it?'},
  {p:'It’s forty dollars.',pe:'Cuesta cuarenta dólares.',task:'Di que te la llevas.',kw:['take'],st:'OK, I’ll …',m:'OK, I’ll take it.'}]},
 {id:'a1-way',lv:'A1',t:'Pedir direcciones',set:'Estás perdido en el centro de la ciudad.',turns:[
  {p:'Are you OK? Can I help?',pe:'¿Estás bien? ¿Te ayudo?',task:'Pregunta dónde está la estación.',kw:['where','station'],st:'Excuse me, where …',m:'Excuse me, where is the station?'},
  {p:'Go straight ahead and turn left at the bank.',pe:'Sigue derecho y dobla a la izquierda en el banco.',task:'Pregunta si está lejos.',kw:['far'],st:'Is it …',m:'Is it far?'},
  {p:'No, it’s about five minutes on foot.',pe:'No, son unos cinco minutos a pie.',task:'Da las gracias.',kw:['thank'],st:'Great, …',m:'Great, thank you very much!'},
  {p:'You’re welcome. Have a nice day!',pe:'De nada. ¡Que tengas un buen día!',task:'Deséale lo mismo.',kw:['you too'],st:'… too!',m:'You too!'}]},
 {id:'a1-family',lv:'A1',t:'Hablar de tu familia',set:'Un colega te pregunta por tu familia.',turns:[
  {p:'Do you have any brothers or sisters?',pe:'¿Tienes hermanos o hermanas?',task:'Di que tienes un hermano y una hermana.',kw:['brother','sister'],st:'Yes, I have …',m:'Yes, I have one brother and one sister.'},
  {p:'Where do they live?',pe:'¿Dónde viven?',task:'Di que viven en Santiago.',kw:['live','Santiago'],st:'They …',m:'They live in Santiago.'},
  {p:'And your parents?',pe:'¿Y tus padres?',task:'Di que tus padres viven en el sur de Chile.',kw:['parents','south'],st:'My parents …',m:'My parents live in the south of Chile.'},
  {p:'Do you see them often?',pe:'¿Los ves seguido?',task:'Di que los visitas dos veces al año.',kw:['visit','twice','year'],st:'I visit them …',m:'I visit them twice a year.'}]},
 {id:'a1-hotel',lv:'A1',t:'Llegar al hotel',set:'Llegas a la recepción de un hotel.',turns:[
  {p:'Good evening! Welcome to the Park Hotel.',pe:'¡Buenas noches! Bienvenido al Park Hotel.',task:'Di que tienes una reserva.',kw:['reservation'],st:'Hi, I have …',m:'Hi, I have a reservation.'},
  {p:'What’s your name, please?',pe:'¿Su nombre, por favor?',task:'Di tu nombre: Luis Rojas.',kw:['Luis'],st:'My name is …',m:'My name is Luis Rojas.'},
  {p:'Thank you. Here is your key. Room 214.',pe:'Gracias. Aquí está su llave. Habitación 214.',task:'Pregunta a qué hora es el desayuno.',kw:['what time','breakfast'],st:'What time …',m:'What time is breakfast?'},
  {p:'From seven to ten, in the restaurant.',pe:'De siete a diez, en el restaurante.',task:'Pregunta si hay wifi.',kw:['wifi'],st:'Is there …',m:'Is there wifi in the room?'}]},
 {id:'a2-weekend',lv:'A2',t:'Tu fin de semana',set:'El lunes en la oficina, una colega te pregunta por el fin de semana.',turns:[
  {p:'Hi! How was your weekend?',pe:'¡Hola! ¿Cómo estuvo tu fin de semana?',task:'Di que estuvo genial.',kw:['was','great'],st:'It was …',m:'It was great, thanks!'},
  {p:'Nice! What did you do?',pe:'¡Qué bien! ¿Qué hiciste?',task:'Di que fuiste a la playa con amigos.',kw:['went','beach','friends'],st:'I went …',m:'I went to the beach with some friends.'},
  {p:'Lucky you! Was the weather good?',pe:'¡Qué suerte! ¿Estuvo bueno el tiempo?',task:'Di que hizo sol, pero el agua estaba muy fría.',kw:['sunny','water','cold'],st:'Yes, it was sunny, but …',m:'Yes, it was sunny, but the water was very cold.'},
  {p:'Ha! And what are you doing next weekend?',pe:'¡Ja! ¿Y qué vas a hacer el próximo fin de semana?',task:'Di que vas a visitar a tus padres.',kw:['going to','visit','parents'],st:'I’m going to …',m:'I’m going to visit my parents.'}]},
 {id:'a2-doctor',lv:'A2',t:'En el médico',set:'Estás en la consulta de una doctora.',turns:[
  {p:'Good morning. What’s the problem?',pe:'Buenos días. ¿Cuál es el problema?',task:'Di que te duele la garganta y tienes fiebre.',kw:['sore throat','fever'],st:'I have …',m:'I have a sore throat and a fever.'},
  {p:'I see. How long have you felt like this?',pe:'Ya veo. ¿Desde cuándo te sientes así?',task:'Di que desde hace tres días.',kw:['three days'],st:'For …',m:'For three days.'},
  {p:'Are you taking any medicine?',pe:'¿Estás tomando algún remedio?',task:'Di que no, solo té con miel.',kw:['no','tea','honey'],st:'No, only …',m:'No, only tea with honey.'},
  {p:'OK. You should rest and drink a lot of water.',pe:'Bien. Deberías descansar y tomar mucha agua.',task:'Pregunta si necesitas un certificado para el trabajo.',kw:['need','note','work'],st:'Do I need …',m:'Do I need a sick note for work?'}]},
 {id:'a2-restaurant',lv:'A2',t:'En el restaurante',set:'Estás cenando con un amigo en un restaurante.',turns:[
  {p:'Good evening. Are you ready to order?',pe:'Buenas noches. ¿Están listos para pedir?',task:'Pide la sopa de entrada y el pollo de fondo.',kw:['soup','chicken'],st:'Yes, I’d like …',m:'Yes, I’d like the soup to start and then the chicken.'},
  {p:'Would you like something to drink?',pe:'¿Desean algo para beber?',task:'Pide una botella de agua con gas.',kw:['bottle','sparkling water'],st:'Can we have …',m:'Can we have a bottle of sparkling water, please?'},
  {p:'How is everything?',pe:'¿Qué tal todo?',task:'Di que está delicioso, pero el pollo está un poco frío.',kw:['delicious','cold'],st:'It’s delicious, but …',m:'It’s delicious, but the chicken is a bit cold.'},
  {p:'Oh, I’m so sorry! I’ll bring you a new one.',pe:'¡Oh, lo siento mucho! Le traigo uno nuevo.',task:'Agradece y pide la cuenta al final.',kw:['thank','bill'],st:'Thank you. And …',m:'Thank you. And can we have the bill later, please?'}]},
 {id:'a2-flat',lv:'A2',t:'Arrendar un departamento',set:'Llamas por un aviso de departamento en arriendo.',turns:[
  {p:'Hello, Green Homes. How can I help you?',pe:'Hola, Green Homes. ¿En qué le puedo ayudar?',task:'Di que llamas por el departamento de Oak Street.',kw:['calling','flat','Oak Street'],st:'Hi, I’m calling about …',m:'Hi, I’m calling about the flat on Oak Street.'},
  {p:'Yes, it’s still available. It has two bedrooms.',pe:'Sí, sigue disponible. Tiene dos dormitorios.',task:'Pregunta cuánto es el arriendo.',kw:['how much','rent'],st:'How much …',m:'How much is the rent?'},
  {p:'It’s 1,200 a month, bills included.',pe:'Son 1.200 al mes, con gastos incluidos.',task:'Pregunta si puedes verlo esta semana.',kw:['see','this week'],st:'Can I …',m:'Can I see it this week?'},
  {p:'Sure. Is Thursday at six OK?',pe:'Claro. ¿Le acomoda el jueves a las seis?',task:'Acepta y pide la dirección exacta.',kw:['perfect','address'],st:'Perfect. …',m:'Perfect. Can you send me the exact address?'}]},
 {id:'a2-interview',lv:'A2',t:'Entrevista de trabajo',set:'Tienes una entrevista para un puesto de analista.',turns:[
  {p:'Thanks for coming. Can you tell me about yourself?',pe:'Gracias por venir. ¿Puede contarme sobre usted?',task:'Di que eres científico de datos y que trabajas hace cinco años.',kw:['data scientist','five years'],st:'I’m a data scientist and I have …',m:'I’m a data scientist and I have worked for five years.'},
  {p:'What tools do you use?',pe:'¿Qué herramientas usa?',task:'Di que usas Python y SQL todos los días.',kw:['use','Python','SQL'],st:'I use …',m:'I use Python and SQL every day.'},
  {p:'Why do you want this job?',pe:'¿Por qué quiere este trabajo?',task:'Di que quieres trabajar en un equipo internacional.',kw:['want','international','team'],st:'I want to …',m:'I want to work in an international team.'},
  {p:'Great. Do you have any questions for us?',pe:'Genial. ¿Tiene alguna pregunta para nosotros?',task:'Pregunta si puedes trabajar desde casa.',kw:['work from home'],st:'Yes. Can I …',m:'Yes. Can I work from home sometimes?'}]},
 {id:'a2-plans',lv:'A2',t:'Hacer planes',set:'Un amigo te escribe para salir.',turns:[
  {p:'Hey! Are you free on Saturday?',pe:'¡Hola! ¿Estás libre el sábado?',task:'Di que en la mañana no, pero en la tarde sí.',kw:['morning','afternoon'],st:'Not in the morning, but …',m:'Not in the morning, but I’m free in the afternoon.'},
  {p:'Do you want to go to the cinema?',pe:'¿Quieres ir al cine?',task:'Di que sí y pregunta qué película.',kw:['which','film'],st:'Sure! Which …',m:'Sure! Which film?'},
  {p:'The new Spider-Man. It starts at 5:30.',pe:'La nueva de Spider-Man. Empieza a las 5:30.',task:'Propón juntarse a las cinco afuera del cine.',kw:['meet','five','outside'],st:'Let’s meet …',m:'Let’s meet at five outside the cinema.'},
  {p:'Perfect. I’ll buy the tickets online.',pe:'Perfecto. Yo compro las entradas online.',task:'Agradece y di que tú invitas las palomitas.',kw:['thanks','popcorn'],st:'Thanks! I’ll …',m:'Thanks! I’ll buy the popcorn.'}]},
 {id:'b1-meeting',lv:'B1',t:'Reunión de equipo',set:'En una reunión explicas el estado de tu proyecto.',turns:[
  {p:'So, how is the forecasting project going?',pe:'Entonces, ¿cómo va el proyecto de pronóstico?',task:'Di que va bien, pero que vas un poco atrasado.',kw:['going well','behind'],st:'It’s going well, but …',m:'It’s going well, but we are a bit behind schedule.'},
  {p:'Why is that?',pe:'¿Por qué?',task:'Explica que los datos tenían muchos valores faltantes.',kw:['data','missing values'],st:'Because the data …',m:'Because the data had a lot of missing values.'},
  {p:'When do you think you can finish?',pe:'¿Cuándo crees que puedes terminar?',task:'Di que crees que terminarás a fin de mes.',kw:['think','finish','end of the month'],st:'I think we’ll …',m:'I think we’ll finish by the end of the month.'},
  {p:'OK. Do you need anything from me?',pe:'Bien. ¿Necesitas algo de mi parte?',task:'Pide acceso a la base de datos de ventas.',kw:['access','sales database'],st:'Could you give me …',m:'Could you give me access to the sales database?'}]},
 {id:'b1-complaint',lv:'B1',t:'Reclamo por teléfono',set:'Llamas a tu proveedor de internet porque no funciona.',turns:[
  {p:'Thank you for calling. How can I help?',pe:'Gracias por llamar. ¿En qué le puedo ayudar?',task:'Di que tu internet no funciona desde ayer.',kw:['internet','hasn’t worked','since yesterday'],st:'My internet …',m:'My internet hasn’t worked since yesterday.'},
  {p:'Have you tried restarting the router?',pe:'¿Ha intentado reiniciar el router?',task:'Di que sí, dos veces, pero no sirvió.',kw:['twice','didn’t help'],st:'Yes, I have …',m:'Yes, I have restarted it twice, but it didn’t help.'},
  {p:'I see. A technician can come on Friday.',pe:'Entiendo. Un técnico puede ir el viernes.',task:'Di que es demasiado tarde porque trabajas desde casa.',kw:['too late','work from home'],st:'That’s too late because …',m:'That’s too late because I work from home.'},
  {p:'Let me check… We can send someone tomorrow morning.',pe:'Déjeme revisar… Podemos enviar a alguien mañana en la mañana.',task:'Acepta y pregunta a qué hora exactamente.',kw:['great','what time'],st:'Great. What time …',m:'Great. What time exactly?'}]}
];
var C1CONVS=[
 {id:'c1-salary',lv:'C1',t:'Negociar el sueldo',set:'Negocias el sueldo de un nuevo trabajo de ciencia de datos.',turns:[
  {p:'We’re delighted to offer you the position. We were thinking of 70,000 a year.',pe:'Estamos encantados de ofrecerle el puesto. Pensábamos en 70.000 al año.',task:'Agradece y di que, por tu experiencia, esperabas 80.000.',kw:['thank','experience','expecting','80,000'],st:'Thank you for the offer. Given my experience, …',m:'Thank you for the offer. Given my experience, I was expecting around 80,000.'},
  {p:'I’m afraid that’s above our budget for this role.',pe:'Me temo que eso está por sobre nuestro presupuesto para este cargo.',task:'Di que lo entiendes y pregunta si sería posible un bono o más días de vacaciones.',kw:['understand','would it be possible','bonus','days off'],st:'I understand. Would it be possible to …',m:'I understand. Would it be possible to add a bonus or a few extra days off instead?'},
  {p:'We could consider a performance bonus.',pe:'Podríamos considerar un bono por desempeño.',task:'Pregunta cómo se mediría exactamente el desempeño.',kw:['how','performance','measured'],st:'Could you explain how …',m:'Could you explain how exactly performance would be measured?'},
  {p:'Through clear goals that we agree on together. Would that work for you?',pe:'Con metas claras que acordemos juntos. ¿Le parece?',task:'Acepta, con la condición de revisar el sueldo después de un año.',kw:['agree','provided','review','year'],st:'Yes, I’d agree to that, provided …',m:'Yes, I’d agree to that, provided that we review the salary after one year.'}]}
];
// Word of the day: [article, word, meaning, why it is fun, example, example in Spanish]
var WOTD=[
 ['','serendipity','casualidad afortunada','Encontrar algo bueno sin buscarlo. Viene de un cuento persa.','Meeting you was pure serendipity.','Conocerte fue pura casualidad afortunada.'],
 ['','awkward','incómodo, torpe','Muy usada para silencios y situaciones raras.','There was an awkward silence.','Hubo un silencio incómodo.'],
 ['','cozy','acogedor','Una casa calentita con mantas y té.','This café is so cozy.','Este café es muy acogedor.'],
 ['','procrastinate','dejar todo para después','Del latín pro (para) + cras (mañana).','Stop procrastinating and start!','¡Deja de postergar y empieza!'],
 ['','gorgeous','precioso, guapísimo','Más fuerte que beautiful.','What a gorgeous view!','¡Qué vista más preciosa!'],
 ['','binge-watch','ver una serie de un tirón','binge = darse un atracón.','We binge-watched the whole series.','Vimos la serie completa de un tirón.'],
 ['','hangry','enojado por hambre','hungry + angry. Muy real.','Don’t talk to me, I’m hangry.','No me hables, tengo hambre y estoy enojado.'],
 ['','brunch','desayuno-almuerzo','breakfast + lunch.','Let’s have brunch on Sunday.','Hagamos brunch el domingo.'],
 ['','jet lag','desfase horario','El cansancio después de un vuelo largo.','I still have jet lag.','Todavía tengo jet lag.'],
 ['','nerd','ñoño, nerd','Hoy casi es un cumplido.','He’s a total data nerd.','Es un nerd total de los datos.'],
 ['','deadline','plazo','dead + line: la línea que no se puede cruzar.','The deadline is tomorrow!','¡El plazo es mañana!'],
 ['','cringe','dar vergüenza ajena','Muy usada en redes sociales.','His joke made me cringe.','Su chiste me dio vergüenza ajena.'],
 ['','wanderlust','ganas de viajar','Palabra tomada del alemán.','Spring gives me wanderlust.','La primavera me da ganas de viajar.'],
 ['','to google','buscar en internet','Una marca que se volvió verbo.','Just google it!','¡Solo búscalo en Google!'],
 ['','fortnight','dos semanas','fourteen nights. Muy británico.','I’m on holiday for a fortnight.','Estoy de vacaciones dos semanas.'],
 ['','snack','picoteo, colación','Algo chico entre comidas.','I need a snack.','Necesito algo para picotear.'],
 ['','tricky','complicado, engañoso','Algo que parece fácil pero no lo es.','This question is tricky.','Esta pregunta es engañosa.'],
 ['','mood','ánimo, humor','I’m in a good mood = estoy de buen humor.','I’m not in the mood to cook.','No tengo ánimo para cocinar.'],
 ['','to chill','relajarse','chill = frío, pero chill out = relajarse.','Let’s just chill at home tonight.','Relajémonos en casa esta noche.'],
 ['','weird','raro','Se pronuncia “uírd”.','That’s weird.','Eso es raro.'],
 ['','sibling','hermano o hermana','Una palabra para los dos.','Do you have any siblings?','¿Tienes hermanos?'],
 ['','to sneeze','estornudar','Bless you! = ¡Salud!','I can’t stop sneezing.','No puedo dejar de estornudar.'],
 ['','butterflies','mariposas en la guata','Nervios antes de algo importante.','I have butterflies before my interview.','Tengo mariposas antes de mi entrevista.'],
 ['','bookworm','ratón de biblioteca','Literalmente un “gusano de libros”.','My sister is a real bookworm.','Mi hermana es un ratón de biblioteca.'],
 ['','couch potato','flojo de sillón','Una “papa de sofá”.','On Sundays I’m a couch potato.','Los domingos soy flojo de sillón.'],
 ['','sunburn','quemadura de sol','sun + burn.','Use sunscreen or you’ll get a sunburn.','Usa bloqueador o te vas a quemar.'],
 ['','hiccups','hipo','Suena como el hipo mismo.','I have the hiccups.','Tengo hipo.'],
 ['','to nap','dormir siesta','take a nap = tomar una siesta.','I always nap after lunch.','Siempre duermo siesta después de almorzar.'],
 ['','mouthwatering','que hace agua la boca','mouth + water.','The smell is mouthwatering.','El olor hace agua la boca.'],
 ['','heartwarming','conmovedor, enternecedor','Que calienta el corazón.','What a heartwarming story.','Qué historia más conmovedora.']
];
var IDIOMS=[
 ['It’s a piece of cake.','Es pan comido.','The exam was a piece of cake.','El examen fue pan comido.'],
 ['to break the ice','romper el hielo','He told a joke to break the ice.','Contó un chiste para romper el hielo.'],
 ['to be under the weather','estar medio enfermo','I’m a bit under the weather today.','Hoy estoy medio enfermo.'],
 ['It’s raining cats and dogs.','Está lloviendo a cántaros.','Take an umbrella, it’s raining cats and dogs.','Lleva paraguas, llueve a cántaros.'],
 ['to cost an arm and a leg','costar un ojo de la cara','This phone cost an arm and a leg.','Este teléfono costó un ojo de la cara.'],
 ['to hit the books','ponerse a estudiar','I have an exam, I need to hit the books.','Tengo examen, tengo que ponerme a estudiar.'],
 ['Break a leg!','¡Mucha suerte! (antes de actuar)','Your presentation is today? Break a leg!','¿Tu presentación es hoy? ¡Mucha suerte!'],
 ['to call it a day','dar por terminado el día','It’s late, let’s call it a day.','Es tarde, terminemos por hoy.'],
 ['once in a blue moon','muy de vez en cuando','I eat fast food once in a blue moon.','Como comida rápida muy de vez en cuando.'],
 ['to be on the same page','estar en sintonía','Let’s make sure we’re on the same page.','Asegurémonos de estar en sintonía.'],
 ['to beat around the bush','andarse con rodeos','Don’t beat around the bush, just tell me.','No te andes con rodeos, solo dímelo.'],
 ['to get cold feet','echarse para atrás (por nervios)','He got cold feet before the wedding.','Se echó para atrás antes del matrimonio.'],
 ['the best of both worlds','lo mejor de dos mundos','Hybrid work is the best of both worlds.','El trabajo híbrido es lo mejor de dos mundos.'],
 ['to keep an eye on','echar un ojo a, vigilar','Can you keep an eye on my bag?','¿Me echas un ojo al bolso?'],
 ['to spill the beans','soltar la sopa','Come on, spill the beans!','¡Vamos, suelta la sopa!']
].map(function(r,i){return {id:'u'+i,cat:'Idioms',art:'',de:r[0],en:r[1],ex:r[2],exEn:r[3]}});
// ---- Reading and listening: de = English text, en = Spanish translation ----
var STORIES=[
{id:'s-a1-day',lv:'A1',t:'My day',de:'My name is Luis. I live in Santiago. Every morning I get up at seven o’clock. I drink a coffee and eat some toast. Then I take the bus to work. I work as a data scientist. In the evening I cook dinner and read a book.',
 en:'Me llamo Luis. Vivo en Santiago. Cada mañana me levanto a las siete. Tomo un café y como unas tostadas. Luego tomo el bus al trabajo. Trabajo como científico de datos. En la tarde preparo la cena y leo un libro.',
 qs:[['¿A qué hora se levanta Luis?',['A las siete','A las ocho','A las seis']],['¿Cómo va al trabajo?',['En bus','En bicicleta','A pie']],['¿Qué hace en la tarde?',['Cocina y lee','Ve tele','Sale a correr']]]},
{id:'s-a1-shop',lv:'A1',t:'At the supermarket',de:'Anna goes to the supermarket. She needs milk, eggs and apples. The apples are cheap today. One kilo is only two dollars. Anna pays by card at the checkout. Then she walks home.',
 en:'Anna va al supermercado. Necesita leche, huevos y manzanas. Las manzanas están baratas hoy. Un kilo cuesta solo dos dólares. Anna paga con tarjeta en la caja. Luego camina a casa.',
 qs:[['¿Qué necesita Anna?',['Leche, huevos y manzanas','Pan y queso','Agua y café']],['¿Cuánto cuesta un kilo de manzanas?',['Dos dólares','Cinco dólares','Un dólar']],['¿Cómo paga Anna?',['Con tarjeta','En efectivo','Con el teléfono']]]},
{id:'s-a1-friend',lv:'A1',t:'My best friend',de:'This is Tom. He is my best friend. He is thirty-two and he lives in London. Tom is tall and he has short black hair. He is a nurse at a big hospital. He likes football and music. We talk on the phone every Sunday.',
 en:'Este es Tom. Es mi mejor amigo. Tiene treinta y dos años y vive en Londres. Tom es alto y tiene el pelo negro y corto. Es enfermero en un hospital grande. Le gusta el fútbol y la música. Hablamos por teléfono cada domingo.',
 qs:[['¿Dónde vive Tom?',['En Londres','En Santiago','En Nueva York']],['¿En qué trabaja?',['Es enfermero','Es profesor','Es médico']],['¿Cuándo hablan?',['Cada domingo','Cada día','Una vez al mes']]]},
{id:'s-a2-trip',lv:'A2',t:'A weekend in the mountains',de:'Last weekend I went to the mountains with my sister. We took the train on Friday evening and arrived very late. On Saturday we walked for six hours. The weather was beautiful, but it was very cold at night. On Sunday we visited a small village and ate a delicious soup. We were tired, but we had a great time.',
 en:'El fin de semana pasado fui a la montaña con mi hermana. Tomamos el tren el viernes en la tarde y llegamos muy tarde. El sábado caminamos seis horas. El tiempo estaba precioso, pero en la noche hacía mucho frío. El domingo visitamos un pueblo pequeño y comimos una sopa deliciosa. Estábamos cansados, pero lo pasamos genial.',
 qs:[['¿Con quién fue?',['Con su hermana','Con su jefe','Solo']],['¿Cuántas horas caminaron el sábado?',['Seis','Dos','Diez']],['¿Qué comieron el domingo?',['Una sopa','Pizza','Pescado']]]},
{id:'s-a2-doc',lv:'A2',t:'At the doctor’s',de:'I have had a sore throat and a fever for three days. This morning I called the doctor and got an appointment. The doctor examined me and said I have a cold. I should drink a lot of tea and stay at home for two days. She also gave me a sick note for work.',
 en:'Tengo dolor de garganta y fiebre desde hace tres días. Esta mañana llamé al médico y conseguí una hora. La doctora me examinó y dijo que tengo un resfriado. Debo tomar mucho té y quedarme en casa dos días. También me dio un certificado para el trabajo.',
 qs:[['¿Hace cuánto está enferma la persona?',['Tres días','Una semana','Un día']],['¿Qué dice la doctora?',['Que es un resfriado','Que es una gripe','Que no tiene nada']],['¿Qué más le dio?',['Un certificado para el trabajo','Una inyección','Antibióticos']]]},
{id:'s-a2-job',lv:'A2',t:'A new job',de:'Maria started a new job in Toronto two months ago. At first it was difficult because everybody spoke very fast. Now she understands much more. Her colleagues are friendly and they often have lunch together. Next month she is going to give her first presentation in English. She is nervous, but she has practiced a lot.',
 en:'María empezó un trabajo nuevo en Toronto hace dos meses. Al principio fue difícil porque todos hablaban muy rápido. Ahora entiende mucho más. Sus colegas son amables y a menudo almuerzan juntos. El próximo mes va a dar su primera presentación en inglés. Está nerviosa, pero ha practicado mucho.',
 qs:[['¿Por qué fue difícil al principio?',['Todos hablaban muy rápido','El trabajo era aburrido','No tenía colegas']],['¿Qué hace con sus colegas?',['Almuerzan juntos a menudo','Juegan fútbol','Nada']],['¿Qué va a hacer el próximo mes?',['Su primera presentación en inglés','Volver a casa','Cambiar de trabajo']]]},
{id:'s-b1-proj',lv:'B1',t:'The new project',de:'Our team got a new project: we have to predict how many customers will cancel next month. First we had to clean the data, because many values were missing. Then we compared different models. The best model reaches an accuracy of 87 percent. My boss is happy, but she wants us to explain the results more simply so that management understands them too.',
 en:'Nuestro equipo recibió un proyecto nuevo: tenemos que predecir cuántos clientes cancelarán el próximo mes. Primero tuvimos que limpiar los datos, porque faltaban muchos valores. Luego comparamos distintos modelos. El mejor modelo alcanza una precisión del 87 por ciento. Mi jefa está contenta, pero quiere que expliquemos los resultados de forma más simple para que la gerencia también los entienda.',
 qs:[['¿Qué debe predecir el equipo?',['Cuántos clientes cancelarán','Las ventas del próximo mes','Los precios']],['¿Por qué limpiaron los datos?',['Faltaban muchos valores','Había demasiados datos','El formato era malo']],['¿Qué quiere la jefa?',['Una explicación más simple','Un modelo mejor','Trabajo más rápido']]]}
];
// ---- Placement test: 5 questions per level; pass a level with 4 of 5 ----
var PLACE=[
['A1','I ___ from Chile.',['am','is','are','be']],
['A1','¿Qué significa “bread”?',['pan','mantequilla','queso','agua']],
['A1','___ is your name?',['What','How','Where','Who']],
['A1','She ___ in a bank.',['works','work','working','is work']],
['A1','I have ___ apple.',['an','a','the','some']],
['A2','Yesterday I ___ to the cinema.',['went','go','have gone','was go']],
['A2','I ___ TV right now.',['am watching','watch','watches','watching']],
['A2','London is ___ than my city.',['bigger','more big','biggest','big']],
['A2','¿Qué significa “the bill” en un restaurante?',['la cuenta','el menú','la propina','la mesa']],
['A2','You ___ smoke here. It’s forbidden.',['mustn’t','don’t have to','shouldn’t to','can']],
['B1','I have lived here ___ 2020.',['since','for','from','ago']],
['B1','If it rains, we ___ at home.',['will stay','stay','would stay','stayed']],
['B1','The book ___ by a famous author.',['was written','wrote','is writing','has write']],
['B1','I’m used to ___ early.',['getting up','get up','got up','gets up']],
['B1','¿Qué significa “to apply for a job”?',['postular a un trabajo','dejar un trabajo','ascender','quejarse']],
['B2','If I ___ more time, I would travel more.',['had','have','would have','will have']],
['B2','She said she ___ tired.',['was','is','will be','be']],
['B2','By the time we arrived, the film ___.',['had started','started','has started','starts']],
['B2','¿Qué significa “a requirement”?',['un requisito','un pronóstico','un resumen','una decisión']],
['B2','The more you practice, ___ you get.',['the better','better','the best','more better']]
];
// A short tip above the first question: the first time for each kind of exercise, then about one session in three
var TIPS={
 write:[['Escribe solo la palabra. Para los verbos puedes poner “to” o no: “eat” y “to eat” valen.'],['Las mayúsculas y los apóstrofos no importan: “dont” vale como “don’t”.']],
 verb:[['Con he / she / it el presente lleva -s: she works, he goes, it has.','vlgo','0'],['El pasado es igual para todas las personas: I went, she went, they went.','vlgo','2'],['Present perfect = have / has + participio: I have seen, she has seen.','vlgo','4']],
 sent:[['En inglés el sujeto siempre aparece: “Is cold” está mal, se dice “It is cold”.'],['Puedes escribir las formas cortas o largas: “I’m” e “I am” valen igual.']],
 'dr-art':[['Lo que manda es el sonido: an hour, a university.']],
 'dr-pres':[['Con does / doesn’t el verbo vuelve a la forma base: Does she work?']],
 'dr-time':[['half past three = 3:30. past = después de, to = antes de.']],
 'dr-past':[['Con did / didn’t el verbo vuelve a la forma base: I didn’t go.']],
 'dr-pperf':[['Si dices cuándo (yesterday, in 2020), usa past simple, no present perfect.']],
 'dr-modal':[['don’t have to = no hace falta. mustn’t = prohibido.']]
};
var SAMPLE=null;
try{ if(window.claude&&claude.use) claude.use('sample').then(function(s){SAMPLE=s||null;if(ui.tab==='conv'&&!ui.cv)render()},function(){}); }catch(e){}
function tkey(x){return toks(x).map(function(t){return t.n}).join(' ')}
function convById(id){return CONVS.find(function(c){return c.id===id})}
function subnav(a,cur,opts){return '<div class="subnav" role="group" style="grid-template-columns:repeat('+opts.length+',1fr)">'+opts.map(function(o){return '<button data-a="'+a+'" data-v="'+o[0]+'" aria-pressed="'+(cur===o[0])+'">'+o[1]+'</button>'}).join('')+'</div>'}
function writeNav(){return subnav('wsub',ui.tab,[['translate',tl('Translate')],['conv',tl('Conversation')]])}
function moreNav(){return subnav('msub',ui.tab,[['words',tl('Words')],['rules',tl('Rules')],['prog',tl('Progress')],['mist',tl('Opportunities')]])}
// ---- Challenges: 3 daily challenges, time attack, word of the day, Sunday boss, combo, XP, medals, unlocks, mystery chest ----
// Every challenge uses checked exercises (mist()), so answers count toward Recognized and Mastered like Practice does.
function CH(){
  var c=S.ch||(S.ch={});
  c.xp=c.xp||0; c.medals=c.medals||{}; c.best60=c.best60||0; c.freeze=c.freeze||0; c.chests=c.chests||0; c.wotdN=c.wotdN||0;
  if(!c.daily||c.daily.day!==today()) c.daily={day:today(),done:{}};
  return c;
}
function hashS(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(seed){var x=hashS(seed)||1;return function(){x^=x<<13;x>>>=0;x^=x>>>17;x^=x<<5;x>>>=0;return x/4294967296}}
function sshuffle(a,r){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function chLevel(xp){return Math.floor((xp===undefined?CH().xp:xp)/150)+1}
var CHT={
  mean:{t:tl('Meaning marathon'),d:tl('12 words: pick the meaning.'),n:12,need:10,mode:'meaning'},
  write:{t:tl('Write it'),d:tl('Type 5 German words with their article.'),n:5,need:4,mode:'write'},
  gap:{t:tl('Fill the gaps'),d:tl('6 sentences with a missing word.'),n:6,need:5,mode:'gap'},
  pres:{t:tl('Present tense'),d:tl('8 verb forms in the present.'),n:8,need:6,vt:'pres'},
  past:{t:tl('Simple past'),d:tl('6 verb forms in the Präteritum.'),n:6,need:4,vt:'past'},
  perf:{t:tl('Perfect tense'),d:tl('6 verb forms in the Perfekt.'),n:6,need:5,vt:'perf'}
};
function dailyKeys(){var r=rng('d'+today()),w=sshuffle(['mean','write','gap'],r),v=sshuffle(['pres','past','perf'],r);return [w[0],w[1],v[0]]}
function modeOk(w,mode){return mode==='article'?!!w.art:mode==='gap'?!!gapFor(w):mode==='case'?caseNoun(w):mode==='write'?w.de.length<=30:true}
// Words you are learning come first, then new ones, then mastered ones
function chWords(mode,n,src){
  var p=shuffle((src||allWords()).filter(function(w){return modeOk(w,mode)}));
  var a=p.filter(function(w){return isRecognized(w.id)&&!isMastered(w.id)}), b=p.filter(function(w){return !isRecognized(w.id)}), c=p.filter(function(w){return isMastered(w.id)});
  var half=Math.ceil(n/2);
  return shuffle(a.slice(0,half).concat(b.slice(0,n)).slice(0,n).concat(a.slice(half),c)).slice(0,n);
}
function chStart(k,type){
  var T=CHT[k]; ui.combo=0; ui.runXp=0; ui.ta=null;
  var ch={k:k,type:type||'daily',need:T.need,t:T.t};
  if(T.vt){
    var vs=VERBS.slice().sort(function(a,b){return vbox(a)-vbox(b)||Math.random()-.5}).slice(0,Math.max(T.n*2,12));
    ui.vq={qs:shuffle(vs).slice(0,T.n).map(function(v){return {v:v,t:T.vt,p:Math.floor(Math.random()*6)}}),i:0,score:0,res:null,ch:ch}; ui.quiz=null;
  } else {
    ui.quiz={qs:chWords(T.mode,T.n).map(function(w){return makeQ(w,T.mode)}),i:0,score:0,picked:null,ch:ch}; ui.vq=null;
  }
}
function weekKey(){return fmt(weekStart(new Date()))}
function isSunday(){return new Date().getDay()===0}
function bossStart(){
  ui.combo=0; ui.runXp=0; ui.ta=null; ui.vq=null;
  var qs=[], used={}, MODES=['meaning','write','gap'];
  function add(w,mode){if(qs.length>=15||used[w.id]||!modeOk(w,mode)) return; used[w.id]=1; qs.push(makeQ(w,mode))}
  // 1) words from your mistakes list, 2) words you studied, 3) anything else
  shuffle(mistKeys()).forEach(function(k){var kind=k.split(':')[0],w=byId(k.slice(kind.length+1).split('|')[0]);if(!w)return;var m={mean:'meaning',art:'article',gap:'gap',prod:'write',case:'case'}[kind];if(m)add(w,m)});
  var studied=shuffle(allWords().filter(function(w){return S.progress[w.id]||isRecognized(w.id)}));
  var rest=shuffle(allWords());
  studied.concat(rest).forEach(function(w){var ms=shuffle(MODES);for(var i=0;i<ms.length;i++){if(modeOk(w,ms[i])){add(w,ms[i]);break}}});
  ui.quiz={qs:shuffle(qs),i:0,score:0,picked:null,ch:{k:'boss',type:'boss',need:qs.length-3,t:tl('Sunday boss')}};
}
// Combo: every 3 right answers in a row raise the multiplier (max ×4). Each right answer gives XP × multiplier.
function chMult(){return Math.min(4,1+Math.floor((ui.combo||0)/3))}
function chCombo(ok){
  if(ok){ui.combo=(ui.combo||0)+1;var m=chMult();addXp(m);ui.runXp=(ui.runXp||0)+m;if(ui.combo>=10)medal('combo10')}
  else ui.combo=0;
}
function addXp(n){
  var c=CH(), was=c.xp; c.xp+=n;
  if(chLevel(c.xp)>chLevel(was)) setTimeout(function(){toast(tl('🚀 Level ')+chLevel(c.xp)+'!')},700);
  UNLOCKS.forEach(function(u){if(was<u[0]&&c.xp>=u[0])setTimeout(function(){toast(tl('🔓 Unlocked: ')+u[3])},1400)});
  if(chLevel(c.xp)>=5) medal('lvl5');
}
var MEDALS=[
  ['first','🥉',tl('First win'),tl('Finish a daily challenge')],
  ['allthree','🏅',tl('Hat trick'),tl('Finish all 3 daily challenges in one day')],
  ['combo10','🔥',tl('On fire'),tl('Reach a combo of 10')],
  ['ta200','⏱️',tl('Speed reader'),tl('Score 200 in Time attack')],
  ['boss','👑',tl('Boss beaten'),tl('Beat a Sunday boss')],
  ['wotd7','📖',tl('Word collector'),tl('Recall 7 words of the day')],
  ['chest5','🎁',tl('Treasure hunter'),tl('Open 5 mystery chests')],
  ['master25','⭐',tl('Wordsmith'),tl('Master 25 words')],
  ['lvl5','🚀',tl('High flyer'),tl('Reach level 5')]
];
function medal(k){var c=CH();if(c.medals[k])return;c.medals[k]=today();var m=MEDALS.find(function(x){return x[0]===k});setTimeout(function(){toast(m[1]+tl(' Medal: ')+m[2])},1000)}
var UNLOCKS=[[150,'ocean','theme',tl('Ocean theme')],[400,'idioms','pack',tl('Idioms pack')],[700,'forest','theme',tl('Forest theme')],[1000,'c1','conv',tl('C1 conversations')],[1500,'sunset','theme',tl('Sunset theme')]];
var UDESC={ocean:tl('Blue buttons and accents.'),idioms:tl('15 German sayings, in Learn, Practice and Words.'),forest:tl('Green buttons and accents.'),c1:tl('Harder dialogues in Practice → Conversation.'),sunset:tl('Warm orange buttons and accents.')};
function unlocked(k){var u=UNLOCKS.find(function(x){return x[1]===k});return !!u&&((S.ch&&S.ch.xp)||0)>=u[0]}
function applySkin(){var t=S.ch&&S.ch.theme;if(t&&unlocked(t))document.documentElement.setAttribute('data-skin',t);else document.documentElement.removeAttribute('data-skin')}


CONVS=CONVS.concat(C1CONVS);
function convLevels(){return unlocked('c1')?['A1','A2','B1','B2','C1']:['A1','A2','B1','B2']}

function wotd(){var r=WOTD[hashS('w'+today())%WOTD.length].slice();return {art:r[0],de:r[1],en:r[2],why:r[3],ex:r[4],exEn:r[5]}}
function wotdState(){var c=CH();if(!c.wotd||c.wotd.day!==today())c.wotd={day:today(),seen:0,res:null};return c.wotd}
function wotdUnlockAt(seen){var six=new Date();six.setHours(18,0,0,0);return Math.max(seen+36e5,Math.min(seen+3*36e5,six.getTime()))}
function hhmm(t){var d=new Date(t);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')}
function wotdCustom(w){return S.custom.find(function(x){return x.de===w.de&&x.art===w.art})}
// Mystery chest: opens after all 3 daily challenges; the reward is fixed per day
function chestReward(){var x=rng('c'+today())();return x<.40?{xp:30}:x<.65?{xp:60}:x<.75?{xp:120}:{freeze:1}}
function chestOpen(){
  var c=CH(); if(c.chest&&c.chest.day===today()) return;
  var r=chestReward(); if(r.freeze&&c.freeze>=3) r={xp:60};
  if(r.freeze) c.freeze++; else addXp(r.xp);
  c.chest={day:today(),r:r}; c.chests++; if(c.chests>=5) medal('chest5'); save();
}
function chBar(){
  var m=chMult();
  return '<div class="chbar"><span class="combo'+(m>1?' hot':'')+'">'+(ui.combo?tl('🔥 Combo ')+ui.combo:tl('Combo 0'))+'<b>×'+m+'</b></span><span>+'+(ui.runXp||0)+tl(' XP</span></div>');
}
function chDone(q){
  var c=CH(), ch=q.ch, n=q.qs.length, ok=q.score>=ch.need, h='';
  if(!ch.fin){
    ch.fin=1; ch.ok=ok;
    if(ok){
      ch.bonus=ch.type==='boss'?100:30; addXp(ch.bonus);
      if(ch.type==='daily'){c.daily.done[ch.k]=1;medal('first');if(dailyKeys().every(function(k){return c.daily.done[k]}))medal('allthree')}
      if(ch.type==='boss'){c.boss=weekKey();medal('boss')}
    }
    save();
  }
  var all=dailyKeys().every(function(k){return c.daily.done[k]}), chestNow=all&&!(c.chest&&c.chest.day===today());
  h+='<div class="done"><h2>'+esc(ch.t)+(ok?tl(': done!'):'')+'</h2><div class="score">'+q.score+'/'+n+'</div>';
  h+='<p class="sub">'+(ok?tl('You earned ')+((ui.runXp||0)+ch.bonus)+tl(' XP (')+(ui.runXp||0)+tl(' from your combos + ')+ch.bonus+tl(' bonus).'):tl('You need ')+ch.need+tl(' right to win. You still keep the ')+(ui.runXp||0)+tl(' XP from your answers.'))+'</p>';
  if(chestNow) h+=tl('<button class="btn wide" data-a="chchest">🎁 Open the mystery chest</button>');
  if(!ok) h+='<button class="btn wide" data-a="'+(ch.type==='boss'?'chboss':'chgo')+'" data-v="'+ch.k+tl('">Try again</button>');
  return h+'<button class="btn '+(ok&&!chestNow?'':'ghost ')+tl('wide" data-a="chhome">Back to challenges</button></div>');
}
// Time attack: 60 seconds of meanings. Points = 10 × combo multiplier.
var _taTimer=null;
function taStop(){if(_taTimer){clearInterval(_taTimer);_taTimer=null}}
// Each run walks through a shuffled list, so a word only comes back once every other word has been asked
function taNextQ(){var t=ui.ta;if(!t.queue||!t.queue.length){var last=t.q&&t.q.w;t.queue=chWords('meaning',9999).filter(function(w){return w!==last})}t.q=makeQ(t.queue.shift(),'meaning');t.picked=null}
function taStart(){
  ui.quiz=null; ui.vq=null; ui.combo=0; ui.runXp=0;
  ui.ta={end:Date.now()+60000,pts:0,n:0,ok:0,picked:null,done:false}; taNextQ();
  taStop(); _taTimer=setInterval(taTickFn,250);
}
function taTickFn(){
  var t=ui.ta; if(!t||t.done){taStop();return}
  var left=Math.max(0,Math.ceil((t.end-Date.now())/1000)), el=document.getElementById('ta-time');
  if(el){el.textContent=left+'s';el.classList.toggle('low',left<=10)}
  if(left<=0) taFinish();
}
function taFinish(){
  var t=ui.ta, c=CH(); if(!t||t.done) return; taStop(); t.done=true;
  t.best=t.pts>c.best60; if(t.best){c.best60=t.pts; if(t.pts>0) addXp(10)}
  if(t.pts>=200) medal('ta200');
  save(); if(ui.tab==='chal') render();
}
function vTA(){
  var t=ui.ta, c=CH();
  if(t.done) return tl('<div class="done"><h2>Time’s up!</h2><div class="score">')+t.pts+'</div><p class="sub">'+t.ok+tl(' right of ')+t.n+' · '+(t.best&&t.pts>0?tl('New personal best! +10 XP bonus.'):tl('Your best: ')+c.best60+tl(' points.'))+tl('</p><p class="sub">You earned ')+((ui.runXp||0)+(t.best&&t.pts>0?10:0))+tl(' XP.</p><button class="btn wide" data-a="tastart">Play again</button><button class="btn ghost wide" data-a="chhome">Back to challenges</button></div>');
  var q=t.q, left=Math.max(0,Math.ceil((t.end-Date.now())/1000)), h='';
  h+=tl('<div class="qtop"><button class="link exit" data-a="taexit">✕ Exit</button></div>');
  h+='<div class="tahead"><span id="ta-time" class="tatime'+(left<=10?' low':'')+'">'+left+'s</span><span class="tapts"><b>'+t.pts+tl('</b> points</span></div>')+chBar();
  h+=tl('<p class="qlabel">What does it mean?</p><div class="vhead"><div class="qprompt">')+esc(q.prompt)+'</div></div><div class="opts">';
  q.opts.forEach(function(o){var cls='opt';if(t.picked!==null){if(o===q.ans)cls+=' ok';else if(o===t.picked)cls+=' bad'}h+='<button class="'+cls+'" data-a="tapick" data-v="'+esc(o)+'"'+(t.picked!==null?' disabled':'')+'>'+esc(o)+'</button>'});
  return h+'</div>';
}
function vWotd(){
  var w=wotd(), st=wotdState(), c=CH(), h=tl('<div class="panel chcard"><p class="qlabel">Word of the day</p>');
  if(!st.seen){st.seen=Date.now();save()}
  var at=wotdUnlockAt(st.seen), open=Date.now()>=at;
  var card='<div class="vhead"><div class="qprompt">'+esc(w.de)+'</div><button class="icon" data-a="vsay" data-t="'+esc(w.de)+tl('" aria-label="Pronounce ')+esc(w.de)+'">'+ICON+'</button></div><p class="ghint" style="margin-top:0">'+esc(w.en)+'</p><p class="sub">'+esc(w.why)+'</p><div class="exrow"><p class="ex">'+esc(w.ex)+'</p><button class="icon" data-a="vsay" data-t="'+esc(w.ex)+tl('" aria-label="Pronounce sentence">')+ICON+'</button></div><p class="exen">'+esc(w.exEn)+'</p>';
  if(st.res){
    h+=card+'<div class="gres '+(st.res.ok?'a-das':'a-bad')+'"><p><b>'+(st.res.ok?tl('You remembered it! +15 XP'):tl('Not quite. You wrote “')+esc(st.res.given)+'”.')+'</b></p></div>';
  } else if(open){
    h+=tl('<h2>Do you still remember it?</h2><p class="sub">Type today’s German word for “')+esc(w.en)+tl('”, with its article.</p><div class="bar"><input id="wd-in" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="palabra en inglés" aria-label="Word of the day"><button class="btn small" data-a="wdcheck">Check</button></div><p class="sub" style="margin-top:8px">Starts with ')+esc(w.art+' '+w.de.charAt(0))+'…</p>';
    return h+'</div>';
  } else {
    h+=card+tl('<p class="note">Come back after ')+hhmm(at)+tl(' to recall it from memory for +15 XP.</p>');
  }
  h+=wotdCustom(w)?tl('<p class="sub" style="margin-top:8px">✓ In your words</p>'):tl('<button class="btn ghost wide" data-a="wdadd">Add to my words</button>');
  return h+'</div>';
}
function vChal(){
  var c=CH(), lvl=chLevel(), into=c.xp%150, keys=dailyKeys(), nd=keys.filter(function(k){return c.daily.done[k]}).length;
  var m=allWords().filter(function(w){return isMastered(w.id)}).length; if(m>=25) medal('master25');
  var next=UNLOCKS.find(function(u){return c.xp<u[0]});
  var h='<div class="panel chlvl"><div class="chlvlrow"><div class="lvlb">'+lvl+tl('</div><div><h2 style="margin:0">Level ')+lvl+'</h2><p class="sub" style="margin:0">'+c.xp+tl(' XP')+(c.freeze?' · ❄️ '+c.freeze+PL(c.freeze,' streak freeze',' streak freezes',' protector de racha',' protectores de racha'):'')+'</p></div></div><div class="prog" style="margin:12px 0 6px"><i style="width:'+Math.round(into/150*100)+'%"></i></div><p class="sub" style="margin:0">'+(150-into)+tl(' XP to level ')+(lvl+1)+(next?tl(' · next unlock at ')+next[0]+tl(' XP: ')+next[3]:'')+'</p></div>';
  h+=tl('<h3 class="rt chh">Today’s challenges <span>')+nd+'/3</span></h3><div class="opts">';
  keys.forEach(function(k){var T=CHT[k],d=c.daily.done[k];h+='<button class="opt chopt" data-a="chgo" data-v="'+k+'">'+(d?tl('<span class="tick" aria-label="done">✓</span>'):tl('<span class="xp">+30 XP</span>'))+'<b>'+esc(T.t)+'</b><span class="exen">'+esc(T.d)+tl(' Get ')+T.need+tl(' right.</span></button>')});
  h+='</div>';
  var opened=c.chest&&c.chest.day===today();
  h+=tl('<div class="panel chcard chest"><div class="chestrow"><span class="chico" aria-hidden="true">🎁</span><div><b>Mystery chest</b><p class="sub" style="margin:0">')+(opened?(c.chest.r.freeze?tl('You found a streak freeze ❄️. It saves your streak if you miss a day.'):tl('You found ')+c.chest.r.xp+tl(' XP.'))+tl(' New chest tomorrow.'):nd<3?tl('Finish all 3 challenges to open it. It can hold XP or a streak freeze.'):tl('Ready to open!'))+'</p></div></div>'+(nd>=3&&!opened?tl('<button class="btn wide" data-a="chchest">Open the chest</button>'):'')+'</div>';
  h+=vWotd();
  h+=tl('<div class="panel chcard"><p class="qlabel">Time attack</p><h2>60 seconds</h2><p class="sub">Pick as many meanings as you can. Combos multiply your points. Your best: <b>')+c.best60+tl('</b></p><button class="btn wide" data-a="tastart">Start</button></div>');
  var beat=c.boss===weekKey(), dsun=(7-new Date().getDay())%7;
  h+=tl('<div class="panel chcard"><p class="qlabel">Weekly boss</p><h2>Sunday boss')+(beat?' ✓':'')+tl('</h2><p class="sub">15 mixed questions from your opportunities and the words you studied. You can miss 3. Beat it for +100 XP.</p>')+(isSunday()&&!beat?tl('<button class="btn wide" data-a="chboss">Fight the boss</button>'):'<p class="note">'+(beat?tl('Beaten this week. The next boss comes on Sunday.'):tl('The boss comes on Sunday, in ')+dsun+PL(dsun,' day',' days',' día',' días')+'.')+'</p>')+'</div>';
  h+=tl('<h3 class="rt chh">Medals <span>')+Object.keys(c.medals).length+'/'+MEDALS.length+'</span></h3><div class="medals">';
  MEDALS.forEach(function(x){var got=c.medals[x[0]];h+='<div class="medal'+(got?' got':'')+'"><span aria-hidden="true">'+(got?x[1]:'🔒')+'</span><b>'+esc(x[2])+'</b><small>'+esc(x[3])+'</small></div>'});
  h+=tl('</div><h3 class="rt chh">Unlocks</h3><div class="unl">');
  h+=tl('<div class="w"><div class="wl"><b class="wde">Classic theme</b><span class="wen">The original look.</span></div><button class="chip" data-a="skin" data-v="" aria-pressed="')+!c.theme+'">'+(c.theme?tl('Use'):tl('In use'))+'</button></div>';
  UNLOCKS.forEach(function(u){
    var ok=c.xp>=u[0], btn='';
    if(u[2]==='theme') btn=ok?'<button class="chip" data-a="skin" data-v="'+u[1]+'" aria-pressed="'+(c.theme===u[1])+'">'+(c.theme===u[1]?tl('In use'):tl('Use'))+'</button>':'';
    else if(ok) btn='<span class="tick">✓</span>';
    h+='<div class="w'+(ok?'':' locked')+'"><div class="wl"><b class="wde">'+(ok?'':'🔒 ')+esc(u[3])+'</b><span class="wen">'+(ok?esc(UDESC[u[1]]):tl('At ')+u[0]+tl(' XP · ')+esc(UDESC[u[1]]))+'</span></div>'+btn+'</div>';
  });
  h+=tl('</div><p class="sub" style="margin-top:14px">Every challenge answer is checked by the app, so it counts toward recognized and mastered words, like Practice.</p>');
  return h;
}
function vChTab(){
  if(ui.quiz&&ui.quiz.ch) return (ui.quiz.i<ui.quiz.qs.length?chBar():'')+vQuiz();
  if(ui.vq&&ui.vq.ch) return (ui.vq.i<ui.vq.qs.length?chBar():'')+vVerbs();
  if(ui.ta) return vTA();
  return vChal();
}

function startConv(id){
  var c=convById(id); if(!c) return;
  ui.cv={items:c.turns.map(function(t,i){return {c:c,i:i}}),i:0,score:0,ans:'',hint:{},en:false,res:null,log:[]};
}
function hasKw(user,kw){
  var u=toks(user).map(function(t){return t.n});
  return kw.filter(function(k){var kn=toks(k).map(function(t){return t.n});return kn.every(function(x){return u.some(function(y){return same(x,y)})})});
}
function localConvCheck(user,t){
  var r=checkTrans(user,t.m), got=hasKw(user,t.kw);
  r.kwMiss=t.kw.filter(function(k){return got.indexOf(k)<0});
  r.ok=r.perfect||r.pct>=0.75||(!r.kwMiss.length&&toks(user).length>=Math.min(3,toks(t.m).length));
  return r;
}
function convPrompt(it,user){
  var c=it.c, t=c.turns[it.i], prev=c.turns.slice(0,it.i).map(function(x,k){var l=ui.cv.log[k];return 'Partner: '+x.p+(l?'\nLearner: '+l.u:'')}).join('\n');
  return 'You are a friendly English teacher checking one reply from a learner in a written role-play conversation.\n'+
  'Level: '+c.lv+'. Situation: '+c.set+'\n'+(prev&&!ui.cv.review?'Conversation so far:\n'+prev+'\n':'')+
  'The partner just said (English): '+t.p+'\nThe learner\'s task: '+t.task+'\nA possible model answer: '+t.m+'\n'+
  'The learner wrote: """'+user+'"""\n\n'+
  'Judge whether the reply does the task and is correct English for level '+c.lv+'. Different wording from the model answer is fine. Ignore missing final punctuation. If the learner wrote in Spanish, it is not ok.\n'+
  'Answer with JSON only, no other text: {"ok": true|false, "corrected": "the learner\'s reply with every mistake fixed, keeping their own words and ideas as much as possible (same text if already correct)", "feedback": "one or two short, simple '+'Spanish sentences: what was wrong and the rule, or praise if correct"}';
}
function vConv(){
  var h='', q=ui.cv;
  if(!q){
    var done=S.conv||{};
    h+=tl('<div class="panel"><h2>Conversation</h2><p class="sub">Chat in German. Read what the other person says, then write your reply. Use the hints if you get stuck. ')+(SAMPLE?tl('Claude checks each reply and corrects it.'):tl('Your reply is compared with a model answer and its key words.'))+'</p>';
    h+=tl('<div class="lvls" role="group" aria-label="Level" style="grid-template-columns:repeat(')+convLevels().length+',1fr)">'+convLevels().map(function(l){return '<button data-a="cvl" data-v="'+l+'" aria-pressed="'+(ui.cvl===l)+'">'+l+'</button>'}).join('')+'</div>';
    h+='<p class="sub" style="margin-bottom:10px">'+{A1:tl('Beginner: short, simple sentences.'),A2:tl('Elementary: everyday situations, past tense.'),B1:tl('Intermediate: work and opinions, linking words.'),B2:tl('Upper intermediate: arguing, explaining results, polite complaints.'),C1:tl('Advanced: negotiating and debating with nuance. Unlocked in Challenges.')}[ui.cvl]+'</p>';
    h+='<div class="opts">'+CONVS.filter(function(c){return c.lv===ui.cvl}).map(function(c){return '<button class="opt" data-a="cvstart" data-v="'+c.id+'">'+(done[c.id]?tl('<span class="tick" aria-label="done">✓</span>'):'')+'<b>'+esc(c.t)+'</b><span class="exen">'+esc(c.set)+'</span></button>'}).join('')+'</div></div>';
    return h;
  }
  if(q.i>=q.items.length){
    var sc=Math.round(q.score*10)/10;
    if(q.review) return h+doneReview(sc,q.items.length);
    return h+tl('<div class="done"><h2>Conversation done</h2><div class="score">')+sc+'/'+q.items.length+'</div><p class="sub">'+(sc>=q.items.length*0.75?tl('Great chat. Try the next one or a higher level.'):tl('Good practice. Try it again with fewer hints.'))+'</p><button class="btn wide" data-a="cvstart" data-v="'+q.items[0].c.id+tl('">Do it again</button><button class="btn ghost wide" data-a="cvexit">Choose another</button></div>');
  }
  var it=q.items[q.i], c=it.c, t=c.turns[it.i], r=q.res;
  h+=tl('<div class="qtop"><button class="link exit" data-a="cvexit">✕ Exit</button></div><div class="prog"><i style="width:')+Math.round(q.i/q.items.length*100)+'%"></i></div>';
  h+='<p class="qn">'+c.lv+' · '+esc(c.t)+' · '+(q.i+1)+tl(' of ')+q.items.length+'</p><p class="cset">'+esc(c.set)+'</p><div class="chat">';
  var tr=S.cvTr!==false;
  if(!q.review) q.log.forEach(function(l,k){var tt=c.turns[k];h+='<div class="bub them">'+esc(tt.p)+(tr&&tt.pe?'<span class="en">'+esc(tt.pe)+'</span>':'')+'</div><div class="bub me">'+esc(l.c)+'</div>'});
  h+='<div class="bub them now"><div>'+esc(t.p)+(tr&&t.pe?'<span class="en">'+esc(t.pe)+'</span>':'')+'</div><button class="icon" data-a="vsay" data-t="'+esc(t.p)+tl('" aria-label="Listen">')+ICON+'</button></div></div>';
  h+='<button class="link" data-a="cven" style="font-size:14px">'+(tr?tl('Hide translation'):tl('Show translation'))+'</button>';
  h+=tl('<p class="task">Your turn: ')+esc(t.task)+'</p>';
  if(!r){
    h+='<div class="hints" role="group" aria-label="Hints"><button data-a="cvhint" data-v="kw"'+(q.hint.kw?' disabled':'')+tl('>Key words</button><button data-a="cvhint" data-v="st"')+(q.hint.st?' disabled':'')+tl('>How to start</button><button data-a="cvhint" data-v="m"')+(q.hint.m?' disabled':'')+tl('>Model answer</button></div>');
    if(q.hint.kw) h+=tl('<p class="hbox">Key words: <b>')+t.kw.map(esc).join(', ')+'</b></p>';
    if(q.hint.st) h+=tl('<p class="hbox">Start with: <b>')+esc(t.st)+'</b></p>';
    if(q.hint.m) h+=tl('<p class="hbox">Model: <b>')+esc(t.m)+'</b></p>';
    h+=tl('<textarea id="cv-in" rows="3" autocomplete="off" autocapitalize="sentences" spellcheck="false" placeholder="Write your answer in German" aria-label="Your reply in German">')+esc(q.ans)+'</textarea>';
    h+=tl('<button class="btn wide" data-a="cvcheck">Check</button><button class="link" data-a="cvskip" style="margin-top:12px">I don’t know, show me</button>');
    return h;
  }
  if(r.loading) return h+tl('<div class="gres"><p class="trl">Your answer</p><p class="trs">')+esc(q.ans)+tl('</p><p class="fb">Claude is reading your answer…</p></div>');
  var good=r.ok;
  h+='<div class="gres '+(good?'a-das':r.skip?'a-bad':'a-der')+'"><p><b>'+(r.skip?tl('Here is a possible answer'):good?(r.ai?(tkey(r.corrected||q.ans)===tkey(q.ans)?tl('Perfect!'):tl('Good, with small fixes')):r.perfect?tl('Perfect!'):tl('Good answer')):tl('Not quite'))+'</b></p>';
  if(r.ai){
    h+=tl('<p class="trl">Your answer</p><p class="trs">')+esc(q.ans)+'</p>';
    if(r.corrected&&tkey(r.corrected)!==tkey(q.ans)) h+=tl('<p class="trl">Corrected</p><div class="exrow"><p class="trs"><b>')+esc(r.corrected)+'</b></p><button class="icon" data-a="vsay" data-t="'+esc(r.corrected)+tl('" aria-label="Listen">')+ICON+'</button></div>';
    if(r.feedback) h+='<p class="fb">'+esc(r.feedback)+'</p>';
  } else if(!r.skip){
    h+=tl('<p class="trl">Your answer</p><p class="trs">')+r.u.map(function(x,k){return '<span class="tw '+r.um[k]+'">'+esc(x.raw)+'</span>'}).join(' ')+'</p>';
    if(r.kwMiss.length) h+=tl('<p class="fb">Try to use: <b>')+r.kwMiss.map(esc).join(', ')+'</b></p>';
    h+=tl('<p class="fb">Your words can differ from the model. Compare and check word order and endings.</p>');
  }
  h+=tl('<p class="trl">Model answer</p><div class="exrow"><p class="trs">')+esc(t.m)+'</p><button class="icon" data-a="vsay" data-t="'+esc(t.m)+tl('" aria-label="Listen to the model answer">')+ICON+'</button></div>';
  if(r.err) h+='<p class="trkey">'+esc(r.err)+'</p>';
  h+='</div><button class="btn wide" data-a="cvnext">'+(q.i+1>=q.items.length?tl('See score'):tl('Continue'))+'</button>';
  return h;
}
// Verbs: [group, infinitive, Spanish, present I|you|he|we|you|they, past (one form, or 6 with |), present perfect (he form)]
var VERBS=[["irr","be","ser / estar","am|are|is|are|are|are","was|were|was|were|were|were","has been"],["irr","have","tener","have|have|has|have|have|have","had","has had"],["irr","do","hacer","do|do|does|do|do|do","did","has done"],["irr","go","ir","go|go|goes|go|go|go","went","has gone"],["irr","come","venir","come|come|comes|come|come|come","came","has come"],["irr","get","conseguir / llegar / recibir","get|get|gets|get|get|get","got","has got"],["irr","make","hacer (fabricar)","make|make|makes|make|make|make","made","has made"],["irr","eat","comer","eat|eat|eats|eat|eat|eat","ate","has eaten"],["irr","drink","beber","drink|drink|drinks|drink|drink|drink","drank","has drunk"],["irr","see","ver","see|see|sees|see|see|see","saw","has seen"],["irr","say","decir","say|say|says|say|say|say","said","has said"],["irr","speak","hablar","speak|speak|speaks|speak|speak|speak","spoke","has spoken"],["irr","read","leer","read|read|reads|read|read|read","read","has read"],["irr","write","escribir","write|write|writes|write|write|write","wrote","has written"],["irr","buy","comprar","buy|buy|buys|buy|buy|buy","bought","has bought"],["irr","sleep","dormir","sleep|sleep|sleeps|sleep|sleep|sleep","slept","has slept"],["irr","know","saber / conocer","know|know|knows|know|know|know","knew","has known"],["irr","take","tomar / llevar","take|take|takes|take|take|take","took","has taken"],["irr","give","dar","give|give|gives|give|give|give","gave","has given"],["irr","find","encontrar","find|find|finds|find|find|find","found","has found"],["irr","think","pensar / creer","think|think|thinks|think|think|think","thought","has thought"],["irr","tell","contar / decir (a alguien)","tell|tell|tells|tell|tell|tell","told","has told"],["irr","get up","levantarse","get up|get up|gets up|get up|get up|get up","got up","has got up"],["irr","have breakfast","tomar desayuno","have breakfast|have breakfast|has breakfast|have breakfast|have breakfast|have breakfast","had breakfast","has had breakfast"],["irr","run","correr","run|run|runs|run|run|run","ran","has run"],["irr","swim","nadar","swim|swim|swims|swim|swim|swim","swam","has swum"],["irr","sit","sentarse / estar sentado","sit|sit|sits|sit|sit|sit","sat","has sat"],["irr","meet","conocer / juntarse con","meet|meet|meets|meet|meet|meet","met","has met"],["irr","leave","salir / irse / dejar","leave|leave|leaves|leave|leave|leave","left","has left"],["irr","pay","pagar","pay|pay|pays|pay|pay|pay","paid","has paid"],["irr","send","enviar","send|send|sends|send|send|send","sent","has sent"],["irr","spend","gastar / pasar (tiempo)","spend|spend|spends|spend|spend|spend","spent","has spent"],["irr","feel","sentir(se)","feel|feel|feels|feel|feel|feel","felt","has felt"],["irr","bring","traer","bring|bring|brings|bring|bring|bring","brought","has brought"],["irr","teach","enseñar","teach|teach|teaches|teach|teach|teach","taught","has taught"],["irr","catch","atrapar / alcanzar (un bus)","catch|catch|catches|catch|catch|catch","caught","has caught"],["irr","lose","perder","lose|lose|loses|lose|lose|lose","lost","has lost"],["irr","win","ganar","win|win|wins|win|win|win","won","has won"],["irr","begin","empezar","begin|begin|begins|begin|begin|begin","began","has begun"],["irr","break","romper","break|break|breaks|break|break|break","broke","has broken"],["irr","choose","elegir","choose|choose|chooses|choose|choose|choose","chose","has chosen"],["irr","drive","manejar","drive|drive|drives|drive|drive|drive","drove","has driven"],["irr","fly","volar","fly|fly|flies|fly|fly|fly","flew","has flown"],["irr","forget","olvidar","forget|forget|forgets|forget|forget|forget","forgot","has forgotten"],["irr","understand","entender","understand|understand|understands|understand|understand|understand","understood","has understood"],["irr","sell","vender","sell|sell|sells|sell|sell|sell","sold","has sold"],["irr","wear","llevar puesto","wear|wear|wears|wear|wear|wear","wore","has worn"],["irr","sing","cantar","sing|sing|sings|sing|sing|sing","sang","has sung"],["irr","hear","oír","hear|hear|hears|hear|hear|hear","heard","has heard"],["irr","put","poner","put|put|puts|put|put|put","put","has put"],["irr","cost","costar","cost|cost|costs|cost|cost|cost","cost","has cost"],["irr","cut","cortar","cut|cut|cuts|cut|cut|cut","cut","has cut"],["irr","let","dejar / permitir","let|let|lets|let|let|let","let","has let"],["irr","become","llegar a ser / volverse","become|become|becomes|become|become|become","became","has become"],["irr","keep","mantener / guardar","keep|keep|keeps|keep|keep|keep","kept","has kept"],["irr","hold","sostener","hold|hold|holds|hold|hold|hold","held","has held"],["irr","build","construir","build|build|builds|build|build|build","built","has built"],["irr","grow","crecer / cultivar","grow|grow|grows|grow|grow|grow","grew","has grown"],["irr","fall","caer","fall|fall|falls|fall|fall|fall","fell","has fallen"],["irr","steal","robar","steal|steal|steals|steal|steal|steal","stole","has stolen"],["reg","work","trabajar","work|work|works|work|work|work","worked","has worked"],["reg","live","vivir","live|live|lives|live|live|live","lived","has lived"],["reg","play","jugar / tocar","play|play|plays|play|play|play","played","has played"],["reg","like","gustar","like|like|likes|like|like|like","liked","has liked"],["reg","want","querer","want|want|wants|want|want|want","wanted","has wanted"],["reg","need","necesitar","need|need|needs|need|need|need","needed","has needed"],["reg","watch","mirar","watch|watch|watches|watch|watch|watch","watched","has watched"],["reg","listen","escuchar","listen|listen|listens|listen|listen|listen","listened","has listened"],["reg","cook","cocinar","cook|cook|cooks|cook|cook|cook","cooked","has cooked"],["reg","study","estudiar","study|study|studies|study|study|study","studied","has studied"],["reg","open","abrir","open|open|opens|open|open|open","opened","has opened"],["reg","close","cerrar","close|close|closes|close|close|close","closed","has closed"],["reg","help","ayudar","help|help|helps|help|help|help","helped","has helped"],["reg","start","empezar","start|start|starts|start|start|start","started","has started"],["reg","finish","terminar","finish|finish|finishes|finish|finish|finish","finished","has finished"],["reg","wait","esperar","wait|wait|waits|wait|wait|wait","waited","has waited"],["reg","ask","preguntar","ask|ask|asks|ask|ask|ask","asked","has asked"],["reg","walk","caminar","walk|walk|walks|walk|walk|walk","walked","has walked"],["reg","talk","conversar / hablar","talk|talk|talks|talk|talk|talk","talked","has talked"],["reg","love","amar / encantar","love|love|loves|love|love|love","loved","has loved"],["reg","stay","quedarse","stay|stay|stays|stay|stay|stay","stayed","has stayed"],["reg","call","llamar","call|call|calls|call|call|call","called","has called"],["reg","travel","viajar","travel|travel|travels|travel|travel|travel","traveled","has traveled"],["reg","visit","visitar","visit|visit|visits|visit|visit|visit","visited","has visited"],["reg","try","intentar / probar","try|try|tries|try|try|try","tried","has tried"],["reg","arrive","llegar","arrive|arrive|arrives|arrive|arrive|arrive","arrived","has arrived"],["reg","move","mudarse / mover","move|move|moves|move|move|move","moved","has moved"],["reg","decide","decidir","decide|decide|decides|decide|decide|decide","decided","has decided"],["reg","plan","planear","plan|plan|plans|plan|plan|plan","planned","has planned"],["reg","stop","parar / dejar de","stop|stop|stops|stop|stop|stop","stopped","has stopped"],["reg","enjoy","disfrutar","enjoy|enjoy|enjoys|enjoy|enjoy|enjoy","enjoyed","has enjoyed"],["reg","hope","esperar (desear)","hope|hope|hopes|hope|hope|hope","hoped","has hoped"],["reg","change","cambiar","change|change|changes|change|change|change","changed","has changed"],["reg","clean","limpiar","clean|clean|cleans|clean|clean|clean","cleaned","has cleaned"],["reg","use","usar","use|use|uses|use|use|use","used","has used"],["reg","carry","llevar / cargar","carry|carry|carries|carry|carry|carry","carried","has carried"],["reg","answer","responder","answer|answer|answers|answer|answer|answer","answered","has answered"],["reg","happen","pasar / ocurrir","happen|happen|happens|happen|happen|happen","happened","has happened"],["work","analyze","analizar","analyze|analyze|analyzes|analyze|analyze|analyze","analyzed","has analyzed"],["work","predict","predecir","predict|predict|predicts|predict|predict|predict","predicted","has predicted"],["work","measure","medir","measure|measure|measures|measure|measure|measure","measured","has measured"],["work","share","compartir","share|share|shares|share|share|share","shared","has shared"],["work","deploy","desplegar / poner en producción","deploy|deploy|deploys|deploy|deploy|deploy","deployed","has deployed"],["work","set up","configurar / armar","set up|set up|sets up|set up|set up|set up","set up","has set up"],["work","lead","liderar","lead|lead|leads|lead|lead|lead","led","has led"]].map(function(r){return {g:r[0],inf:r[1],en:r[2],pres:r[3].split('|'),past:r[4],perf:r[5]}});
var VEX={"be":["I am tired today.","Hoy estoy cansado."],"have":["We have a new car.","Tenemos un auto nuevo."],"do":["I do my homework at night.","Hago mis tareas en la noche."],"go":["I go to the gym on Mondays.","Voy al gimnasio los lunes."],"come":["Where do you come from?","¿De dónde vienes?"],"get":["I get home at six.","Llego a casa a las seis."],"make":["She makes great pizza.","Ella hace una pizza buenísima."],"eat":["We eat dinner at eight.","Cenamos a las ocho."],"drink":["I drink coffee every morning.","Tomo café cada mañana."],"see":["I see my friends on Fridays.","Veo a mis amigos los viernes."],"say":["What did you say?","¿Qué dijiste?"],"speak":["She speaks three languages.","Ella habla tres idiomas."],"read":["I read the news every day.","Leo las noticias todos los días."],"write":["He writes a lot of emails.","Él escribe muchos correos."],"buy":["I buy bread at the bakery.","Compro pan en la panadería."],"sleep":["The baby sleeps a lot.","El bebé duerme mucho."],"know":["I know the answer.","Sé la respuesta."],"take":["I take the bus to work.","Tomo el bus al trabajo."],"give":["Give me the keys, please.","Dame las llaves, por favor."],"find":["I can’t find my phone.","No encuentro mi teléfono."],"think":["I think you’re right.","Creo que tienes razón."],"tell":["Tell me a story.","Cuéntame una historia."],"get up":["I get up at seven.","Me levanto a las siete."],"have breakfast":["We have breakfast together.","Tomamos desayuno juntos."],"run":["I run in the park.","Corro en el parque."],"swim":["They swim in the sea.","Ellos nadan en el mar."],"sit":["Sit down, please.","Siéntate, por favor."],"meet":["I meet my friends on Saturday.","Me junto con mis amigos el sábado."],"leave":["The train leaves at nine.","El tren sale a las nueve."],"pay":["I pay the rent every month.","Pago el arriendo cada mes."],"send":["I send messages all day.","Envío mensajes todo el día."],"spend":["We spend a lot on food.","Gastamos mucho en comida."],"feel":["I feel much better today.","Hoy me siento mucho mejor."],"bring":["Bring your passport.","Trae tu pasaporte."],"teach":["She teaches maths.","Ella enseña matemáticas."],"catch":["I catch the bus at 8:10.","Alcanzo el bus a las 8:10."],"lose":["I always lose my keys.","Siempre pierdo mis llaves."],"win":["Our team wins every year.","Nuestro equipo gana cada año."],"begin":["The class begins at six.","La clase empieza a las seis."],"break":["Don’t break the glass!","¡No rompas el vaso!"],"choose":["You choose the restaurant.","Tú eliges el restaurante."],"drive":["I drive to work.","Manejo al trabajo."],"fly":["We fly to London tomorrow.","Volamos a Londres mañana."],"forget":["I often forget names.","A menudo olvido nombres."],"understand":["I understand everything.","Entiendo todo."],"sell":["They sell old books.","Venden libros antiguos."],"wear":["He wears glasses.","Él usa lentes."],"sing":["She sings in a band.","Ella canta en una banda."],"hear":["I can’t hear you.","No te escucho."],"put":["Put your bag here.","Pon tu bolso aquí."],"cost":["How much does it cost?","¿Cuánto cuesta?"],"cut":["Cut the bread, please.","Corta el pan, por favor."],"let":["Let me help you.","Déjame ayudarte."],"become":["She became a doctor.","Ella llegó a ser doctora."],"keep":["Keep the change.","Quédese con el vuelto."],"hold":["Hold my hand.","Toma mi mano."],"build":["They build houses.","Ellos construyen casas."],"grow":["The city grows every year.","La ciudad crece cada año."],"fall":["Be careful, don’t fall.","Cuidado, no te caigas."],"steal":["Someone stole my bike.","Alguien me robó la bicicleta."],"work":["I work from home on Fridays.","Trabajo desde casa los viernes."],"live":["We live near the beach.","Vivimos cerca de la playa."],"play":["The kids play outside.","Los niños juegan afuera."],"like":["I like cats.","Me gustan los gatos."],"want":["I want a glass of water.","Quiero un vaso de agua."],"need":["We need more time.","Necesitamos más tiempo."],"watch":["I watch TV in the evening.","Veo tele en la tarde."],"listen":["I listen to podcasts.","Escucho podcasts."],"cook":["My husband cooks very well.","Mi esposo cocina muy bien."],"study":["I study English every day.","Estudio inglés todos los días."],"open":["The bank opens at nine.","El banco abre a las nueve."],"close":["Close the window, please.","Cierra la ventana, por favor."],"help":["My friends help me.","Mis amigos me ayudan."],"start":["Work starts at nine.","El trabajo empieza a las nueve."],"finish":["I finish at five.","Termino a las cinco."],"wait":["I wait for the bus.","Espero el bus."],"ask":["Ask the teacher.","Pregúntale al profesor."],"walk":["I walk to work.","Camino al trabajo."],"talk":["We talk every day.","Conversamos todos los días."],"love":["I love this song.","Me encanta esta canción."],"stay":["I stay at home on Sundays.","Me quedo en casa los domingos."],"call":["I call my mom every Sunday.","Llamo a mi mamá cada domingo."],"travel":["They travel a lot.","Ellos viajan mucho."],"visit":["We visit museums on vacation.","Visitamos museos en vacaciones."],"try":["I try to run every day.","Intento correr todos los días."],"arrive":["The plane arrives at noon.","El avión llega al mediodía."],"move":["We move to a new flat in May.","Nos mudamos a un depa nuevo en mayo."],"decide":["You decide.","Tú decides."],"plan":["We plan our trips together.","Planeamos los viajes juntos."],"stop":["The bus stops here.","El bus para aquí."],"enjoy":["I enjoy cooking.","Disfruto cocinar."],"hope":["I hope you’re well.","Espero que estés bien."],"change":["The city changes fast.","La ciudad cambia rápido."],"clean":["I clean the house on Saturday.","Limpio la casa el sábado."],"use":["I use my laptop for work.","Uso mi notebook para trabajar."],"carry":["I carry my laptop in a bag.","Llevo mi notebook en un bolso."],"answer":["Answer the question.","Responde la pregunta."],"happen":["What happened?","¿Qué pasó?"],"analyze":["We analyze the sales data.","Analizamos los datos de ventas."],"predict":["The model predicts demand.","El modelo predice la demanda."],"measure":["We measure the error.","Medimos el error."],"share":["Can you share your screen?","¿Puedes compartir tu pantalla?"],"deploy":["We deploy the model on Monday.","Ponemos el modelo en producción el lunes."],"set up":["I set up the database.","Configuro la base de datos."],"lead":["She leads the data team.","Ella lidera el equipo de datos."]};
var PERS=['I','you','he/she/it','we','you','they'];
var PERS_EN=['yo','tú / usted','él / ella / eso','nosotros','ustedes','ellos / ellas'];
var VGROUPS=[['all','Todos'],['irr','Irregulares'],['reg','Regulares'],['work','Trabajo']];
var VTENSES=[['pres','Presente'],['past','Pasado'],['perf','Present perfect'],['mix','Mezcla']];
var AUX={has:['have','have','has','have','have','have']};
function pastForms(v){var p=v.past.split('|');return p.length===6?p:[0,1,2,3,4,5].map(function(){return v.past})}
function perfForms(v){var sp=v.perf.split(' '),part=sp.slice(1).join(' ');return AUX.has.map(function(a){return a+' '+part})}
function vForm(v,t,p){return t==='pres'?v.pres[p]:t==='past'?pastForms(v)[p]:perfForms(v)[p]}
var TNAME={pres:'Present simple',past:'Past simple',perf:'Present perfect'};
function vnorm(x){
  return norm(x).split(/\s+/).filter(function(t,i){return !(i===0&&/^(i|you|he|she|it|we|they)$/.test(t))}).join(' ');
}
// In A1 only present-tense answers count toward mastering a verb; past tenses count from A2
function vCounts(t){return t==='pres'||LV.indexOf(ruleLevel())>=1}
function vbox(v){return (S.verbs&&S.verbs[v.inf])||0}
function vPool(){var p=VERBS.filter(function(v){return (ui.vg==='all'||v.g===ui.vg)&&(!ui.vp||ui.vp==='all'||pType(v)===ui.vp)});if(ui.lvf){var f=p.filter(function(v){return vLevel(v)===ui.lvf});if(f.length)p=f}return p}
// Verbs grouped by the pattern of their three forms (base, past, participle)
function vBase(v){return v.inf.split(' ')[0]}
function vPart(v){return v.perf.split(' ').slice(1).join(' ')}
function regEd(b){return /e$/.test(b)?b+'d':/[^aeiou]y$/.test(b)?b.slice(0,-1)+'ied':b+'ed'}
function isRegPast(v){var b=vBase(v),p=v.past.split(' ')[0];return v.past.indexOf('|')<0&&(p===regEd(b)||p===b+b.slice(-1)+'ed')}
var PTYPES=[['all','Todos'],['reg','Regulares -ed'],['aaa','put, put, put'],['abb','buy, bought, bought'],['aba','come, came, come'],['abc','write, wrote, written']];
var PDESC={reg:'Pasado y participio terminan en -ed: work, worked, worked.',aaa:'Las tres formas son iguales: put, put, put. cut, cut, cut.',abb:'Pasado y participio son iguales, pero irregulares: buy, bought, bought.',aba:'El participio es igual al infinitivo: come, came, come.',abc:'Las tres formas son distintas: write, wrote, written.'};
function pType(v){
  if(isRegPast(v)) return 'reg';
  var b=v.inf, p=v.past.split('|')[0], pp=vPart(v);
  if(v.past.indexOf('|')>-1) return 'abc';
  if(p===b&&pp===b) return 'aaa';
  if(p===pp) return 'abb';
  if(pp===b) return 'aba';
  return 'abc';
}
function vpChips(){
  var base=VERBS.filter(function(v){return ui.vg==='all'||v.g===ui.vg}), cur=ui.vp||'all';
  var h='<p class="qlabel" style="margin:4px 0 6px">Patrón de formas</p><div class="chips" role="group" aria-label="Patrón de formas">'+PTYPES.map(function(p){var n=p[0]==='all'?base.length:base.filter(function(v){return pType(v)===p[0]}).length;return '<button class="chip" data-a="vptype" data-v="'+p[0]+'" aria-pressed="'+(cur===p[0])+'"'+(n||p[0]==='all'?'':' disabled')+'>'+esc(p[1])+' <span class="cnt">'+n+'</span></button>'}).join('')+'</div>';
  if(cur!=='all') h+='<p class="sub vpdesc">'+esc(PDESC[cur])+'</p>';
  return h;
}
function startVerbs(){
  var p=vPool(), qs=[];
  // weaker verbs come up more often
  var bag=[];p.forEach(function(v){for(var k=0;k<6-vbox(v);k++)bag.push(v)});
  bag=shuffle(bag);
  for(var i=0;i<bag.length&&qs.length<10;i++){
    if(qs.some(function(q){return q.v===bag[i]})) continue;
    var t=ui.vt==='mix'?['pres','past','perf'][Math.floor(Math.random()*3)]:ui.vt;
    qs.push({v:bag[i],t:t,p:Math.floor(Math.random()*6)});
  }
  ui.vq={qs:qs,i:0,score:0,res:null};
}
function vIrr(v){
  var b=vBase(v), reg3=b.replace(/(s|sh|ch|x|o|z)$/,'$1e').replace(/([^aeiou])y$/,'$1ie')+'s';
  var pres=v.pres.map(function(f,k){return k===2?f.split(' ')[0]!==reg3:f.split(' ')[0]!==b});
  if(b==='be') pres=[true,true,true,true,true,true];
  var past=!isRegPast(v), part=vPart(v);
  return {pres:pres,past:past,strong:part.split(' ')[0]!==regEd(b)&&part.split(' ')[0]!==b+b.slice(-1)+'ed',part:part};
}
function vNote(v){
  var x=vIrr(v), b=vBase(v), out=[];
  if(b==='be') out.push('Presente irregular: I am, you are, he / she / it is, we / they are.');
  else if(x.pres[2]&&!/(es|ies)$/.test(v.pres[2].split(' ')[0])) out.push('Presente irregular con he / she / it: '+v.pres[2]+'.');
  else if(/ies$/.test(v.pres[2].split(' ')[0])) out.push('Presente: con he / she / it la -y cambia a -ies: '+v.pres[2]+'.');
  else if(/es$/.test(v.pres[2].split(' ')[0])&&!/e$/.test(b)) out.push('Presente: con he / she / it agrega -es: '+v.pres[2]+'.');
  else out.push('Presente regular: con he / she / it agrega -s: '+v.pres[2]+'.');
  if(b==='be') out.push('Pasado: was (I, he, she, it) y were (you, we, they).');
  else out.push(x.past?'Pasado irregular: '+v.past+'. Igual para todas las personas.':'Pasado regular: + -ed → '+v.past+'. Igual para todas las personas.');
  out.push('Present perfect: have / has + '+x.part+(x.strong?' (participio irregular).':'.'));
  return out;
}
function learnTable(v){
  var P=pastForms(v),F=perfForms(v),x=vIrr(v);
  var h='<div class="vtw"><table class="vt"><thead><tr><th></th><th>Presente</th><th>Pasado</th><th>Perfect</th></tr></thead><tbody>';
  PERS.forEach(function(pp,k){
    var pr=pp.split('/')[0];
    function cell(f,irr){return '<td class="'+(irr?'vi':'')+'"><button class="vcell" data-a="vsay" data-t="'+esc(pr+' '+f)+'" aria-label="Escuchar '+esc(pr+' '+f)+'">'+esc(f)+'</button></td>'}
    h+='<tr><th>'+pp+'</th>'+cell(v.pres[k],x.pres[k])+cell(P[k],x.past)+cell(F[k],x.strong)+'</tr>';
  });
  return h+'</tbody></table><p class="vcap">Toca una forma para escucharla. Las formas <span class="vi">marcadas</span> son irregulares. Formas: <b>'+esc(v.inf+', '+v.past.split('|')[0]+(v.past.indexOf('|')>-1?' / were':'')+', '+x.part)+'</b></p></div>';
}
function vTable(v,q){
  var P=pastForms(v),F=perfForms(v);
  var h='<div class="vtw"><table class="vt"><thead><tr><th></th><th'+(q.t==='pres'?' class="on"':'')+'>Presente</th><th'+(q.t==='past'?' class="on"':'')+'>Pasado</th><th'+(q.t==='perf'?' class="on"':'')+'>Perfect</th></tr></thead><tbody>';
  PERS.forEach(function(pp,k){
    var pr=pp.split('/')[0];
    function cell(f){return '<td><button class="vcell" data-a="vsay" data-t="'+esc(pr+' '+f)+'" aria-label="Escuchar '+esc(pr+' '+f)+'">'+esc(f)+'</button></td>'}
    h+='<tr'+(k===q.p?' class="on"':'')+'><th>'+pp+'</th>'+cell(v.pres[k])+cell(P[k])+cell(F[k])+'</tr>';
  });
  return h+'</tbody></table><p class="vcap">Toca una forma para escucharla. Formas: <b>'+esc(v.inf+', '+v.past.split('|')[0]+', '+vPart(v))+'</b></p></div>';
}
function vlPool(){return vPool().filter(function(v){return !(S.vlearn&&S.vlearn[v.inf])})}
function vLesson(){
  var t=function(rows){return '<div class="vtw"><table class="vt"><tbody>'+rows.map(function(r){return '<tr><th>'+r[0]+'</th><td>'+r[1]+'</td><td>'+(r[2]||'')+'</td></tr>'}).join('')+'</tbody></table></div>'};
  var ex=function(s){return '<div class="exrow"><p class="ex">'+esc(s)+'</p><button class="icon" data-a="vsay" data-t="'+esc(s)+'" aria-label="Escuchar">'+ICON+'</button></div>'};
  var sub=function(x){return '<p class="sub" style="margin:6px 0 0">'+x+'</p>'}, rt=function(x){return '<p class="rt">'+x+'</p>'}, warn=function(x){return '<p class="warn">'+x+'</p>'};
  var SECS=[], SECLV=['A1','A1','A2','A2','A2','B1','A1'];
  var sec=function(title,body,open){SECS.push({k:SECS.length,lv:SECLV[SECS.length],t:title,b:body,o:open});return ''};
  var h='<div class="qtop"><button class="link exit" data-a="vlesson">✕ Cerrar</button></div><h2 class="st">Cómo funcionan los verbos en inglés</h2><p class="sub">Lecciones cortas, ordenadas por nivel. Abre una, lee los ejemplos y toca 🔊 para escucharlos.</p>';
  sec('Presente: la -s de he / she / it',sub('Buena noticia: en presente el verbo casi no cambia. Solo con <b>he, she, it</b> se agrega <b>-s</b>.')+
    t([['I / you / we / they','work','play, live'],['he / she / it','work<b>s</b>','plays, lives']])+
    rt('Ortografía')+t([['-s, -sh, -ch, -x, -o','+ es','watch → watches, go → goes'],['consonante + y','→ ies','study → studies'],['vocal + y','+ s','play → plays']])+
    warn('Negativo y pregunta con do / does, y el verbo vuelve a la forma base: She doesn’t work. Does he live here?')+ex('She works in a bank and he studies at home.'),true);
  sec('be, have y do: los tres verbos clave',sub('Son los más usados y los más irregulares. Además sirven de auxiliares para otros tiempos.')+
    t([['be','am / are / is','was / were'],['have','have / has','had'],['do','do / does','did']])+
    warn('Tener años y tener hambre van con be: I am 30. I am hungry.')+ex('I am tired, I have a cold and I don’t do sport.'));
  sec('Pasado regular: -ed',sub('Para acciones terminadas. Se agrega <b>-ed</b> y es igual para todas las personas.')+
    t([['casi todos','+ ed','work → worked'],['-e final','+ d','live → lived'],['consonante + y','→ ied','study → studied'],['vocal + consonante (corto)','se dobla','stop → stopped, plan → planned']])+
    warn('La -ed suena distinto: /t/ en worked, /d/ en played, /id/ en wanted.')+ex('I worked late yesterday and then I watched a film.'));
  sec('Pasado irregular',sub('Unos 100 verbos muy comunes no usan -ed. Hay que aprenderlos, pero no cambian según la persona.')+
    t([['go','went','I went, she went'],['eat','ate','we ate'],['buy','bought','they bought'],['see','saw','he saw'],['have','had','I had']])+
    warn('En negativo y pregunta se usa did y el verbo vuelve a la base: I didn’t go. Did you see it?')+ex('Last night we went out and ate pizza.'));
  sec('Present perfect: have + participio',sub('<b>have / has + participio</b>. Para experiencias (sin decir cuándo) y cosas recientes que importan ahora.')+
    t([['I / you / we / they','have seen','I’ve seen'],['he / she / it','has seen','she’s seen']])+
    sub('El participio de los regulares es igual al pasado (worked). Los irregulares tienen su propia forma (seen, gone, written).')+
    warn('Si dices cuándo (yesterday, in 2020, ago), usa past simple.')+ex('I have never been to London, but my sister has been there twice.'));
  sec('Irregulares: los patrones de las 3 formas',sub('Aprende las tres formas juntas, como una canción: write, wrote, written.')+
    t([['A A A','put, put, put','cut, cost, let, hit'],['A B B','buy, bought, bought','bring, think, teach, catch, find, keep'],['A B A','come, came, come','become, run'],['A B C','write, wrote, written','eat, see, take, give, speak, drive, fly']])+
    warn('En la lista de verbos cada tarjeta marca en color sus formas irregulares.')+ex('I write, I wrote, I have written.'));
  sec('Tablas completas: be, have, do',
    t([['I','am · was','have · had'],['you','are · were','have · had'],['he / she / it','is · was','has · had'],['we','are · were','have · had'],['they','are · were','have · had']])+
    t([['do','do / does','did · done'],['go','go / goes','went · gone'],['get','get / gets','got · got']])+
    warn('be es el único verbo con dos pasados: was y were.')+ex('Where were you? I was at home.'));
  var cur=ruleLevel(), ci=LV.indexOf(cur), n=0;
  LV.forEach(function(lv,i){
    var ss=SECS.filter(function(x){return x.lv===lv}), dk=VDRILL[lv];
    if(!ss.length&&!dk) return;
    h+=lvHead(lv,i,ci);
    var fx=ss.some(function(x){return x.k===ui.vlFocus});
    if(i>ci&&!fx&&!(ui.rshow&&ui.rshow[lv])){n+=ss.length;h+='<button class="btn ghost wide" data-a="rshow" data-v="'+lv+'">Ver igual las lecciones de '+lv+'</button>';return}
    ss.forEach(function(x){n++;var fo=x.k===ui.vlFocus;h+='<details class="rule a-none"'+(fo?' id="vlf"':'')+((ui.vlFocus==null?x.o&&i===ci:fo)?' open':'')+'><summary><span>'+n+' · '+x.t+'</span></summary><div class="rule-body">'+vlTr(x.b)+'<button class="btn wide" data-a="vlpr" data-v="'+x.k+'" style="margin-top:12px">Practicar esta lección</button></div></details>'});
    if(dk) h+=rcard(dk,true);
  });
  h+='<button class="btn wide" data-a="vlesson">Volver a los verbos</button>';
  return h;
}
function vLearnHome(){
  var p=vPool(), left=vlPool(), next=left.slice(0,5), done=p.length-left.length;
  var h='<div class="chips" role="group" aria-label="Grupo de verbos">'+VGROUPS.map(function(g){return '<button class="chip" data-a="vgroup" data-v="'+g[0]+'" aria-pressed="'+(ui.vg===g[0])+'">'+g[1]+'</button>'}).join('')+'</div>'+vpChips();
  h+='<button class="lessonbtn" data-a="vlesson"><b>Cómo funcionan los verbos en inglés</b><span>La -s del presente, be / have / do, pasado regular e irregular, present perfect y los patrones de los irregulares. Empieza aquí.</span></button>';
  h+='<div class="panel"><h2>Aprender verbos nuevos</h2><p class="sub">Estudia 5 verbos a la vez: significado, todas las formas con audio y un ejemplo. Luego una práctica corta solo con esos 5. '+done+' de '+p.length+' verbos estudiados aquí.</p>';
  if(next.length){
    h+='<p class="qlabel">Siguen</p><p class="vnext">'+next.map(function(v){return '<b>'+esc(v.inf)+'</b> <span>'+esc(v.en)+'</span>'}).join('<br>')+'</p>';
    h+='<button class="btn wide" data-a="vlstart">Estudiar estos 5 verbos</button>';
  } else {
    h+='<p class="sub">Ya estudiaste todos los verbos de este grupo. Mantenlos frescos en Practicar, o estudia 5 otra vez.</p><button class="btn wide" data-a="vlstart" data-r="1">Estudiar 5 otra vez</button>';
  }
  return h+'</div>';
}
function vStudy(){
  var L=ui.vl, v=L.vs[L.i], e=VEX[v.inf], grp=VGROUPS.find(function(g){return g[0]===v.g});
  var h='<div class="qtop"><button class="link exit" data-a="vlexit">✕ Salir</button></div><div class="prog"><i style="width:'+Math.round(L.i/L.vs.length*100)+'%"></i></div>';
  h+='<p class="qn">Verbo '+(L.i+1)+' de '+L.vs.length+' · '+esc(grp?grp[1]:'')+'</p>';
  h+='<div class="vhead"><div class="qprompt">to '+esc(v.inf)+'</div><button class="icon" data-a="vsay" data-t="'+esc('to '+v.inf)+'" aria-label="Escuchar">'+ICON+'</button></div><p class="ghint" style="margin-top:0">'+esc(v.en)+'</p>';
  if(e) h+='<div class="exrow" style="margin-top:0"><p class="ex">'+esc(e[0])+'</p><button class="icon" data-a="vsay" data-t="'+esc(e[0])+'" aria-label="Escuchar la frase">'+ICON+'</button></div><p class="exen">'+esc(e[1])+'</p>';
  h+=learnTable(v);
  h+='<ul class="vnote">'+vNote(v).map(function(n){return '<li>'+esc(n)+'</li>'}).join('')+'</ul>';
  h+='<div class="row">'+(L.i?'<button class="btn ghost" data-a="vlprev">Atrás</button>':'<span></span>')+(L.i+1<L.vs.length?'<button class="btn" data-a="vlnext">Siguiente verbo</button>':'<button class="btn" data-a="vlprac">Practicar estos 5</button>')+'</div>';
  return h;
}
// One practice per verb lesson: 10 typed forms that use exactly what that lesson explains
var VBIG=['be','have','do'];
function lessonQs(k){
  var low=VERBS.filter(function(v){return ['A1','A2'].indexOf(vLevel(v))>-1}), R=function(a){return a[Math.floor(Math.random()*a.length)]};
  var plain=function(v){return VBIG.indexOf(v.inf)<0}, any6=function(){return Math.floor(Math.random()*6)};
  var pick=function(vs,mk){vs=shuffle(vs);var out=[];for(var i=0;out.length<10&&vs.length;i++)out.push(mk(vs[i%vs.length]));return out};
  if(k===0) return pick(low.filter(plain),function(v){return {v:v,t:'pres',p:Math.random()<.6?2:any6()}});
  if(k===1) return pick(VERBS.filter(function(v){return VBIG.indexOf(v.inf)>-1}),function(v){return {v:v,t:Math.random()<.6?'pres':'past',p:any6()}});
  if(k===2) return pick(low.filter(isRegPast),function(v){return {v:v,t:'past',p:any6()}});
  if(k===3) return pick(low.filter(function(v){return plain(v)&&!isRegPast(v)}),function(v){return {v:v,t:'past',p:any6()}});
  if(k===4) return pick(low,function(v){return {v:v,t:'perf',p:R([0,2,3,5])}});
  if(k===5) return pick(VERBS.filter(function(v){return !isRegPast(v)&&plain(v)}),function(v){return {v:v,t:R(['past','perf']),p:any6()}});
  return pick(VERBS.filter(function(v){return VBIG.indexOf(v.inf)>-1||['go','get'].indexOf(v.inf)>-1}),function(v){return {v:v,t:R(['pres','past','perf']),p:any6()}});
}
// Small translation after the first mention of each verb in a lesson (not inside the example sentences)
function vlTr(html){return html}
function startVlPractice(vs){
  var qs=[];
  vs.forEach(function(v){
    qs.push({v:v,t:'pres',p:Math.random()<.6?2:Math.floor(Math.random()*6)});
    qs.push(vCounts('past')?{v:v,t:Math.random()<0.6?'past':'perf',p:[0,2,3,5][Math.floor(Math.random()*4)]}:{v:v,t:'pres',p:[0,1,3,5][Math.floor(Math.random()*4)]});
  });
  ui.vq={qs:shuffle(qs),i:0,score:0,res:null,learn:vs};
}
function vVerbs(){
  var q=ui.vq, h='';
  if(ui.vlesson) return vLesson();
  if(!q){
    if(ui.vl) return vStudy();
    h+=subnav('vmode',ui.vmode,[['learn',tl('Learn')],['drill',tl('Practice')]]);
    h+=lvfBar();
    if(ui.vmode==='learn') return h+vLearnHome();
    var p=vPool(), m=p.filter(function(v){return vbox(v)>=3}).length;
    h+=tl('<div class="chips" role="group" aria-label="Verb group">')+VGROUPS.map(function(g){return '<button class="chip" data-a="vgroup" data-v="'+g[0]+'" aria-pressed="'+(ui.vg===g[0])+'">'+g[1]+'</button>'}).join('')+'</div>'+vpChips();
    h+=tl('<div class="panel"><h2>Verb forms</h2><p class="sub">You get a person, a verb and a tense, and you type the right form. ')+p.length+tl(' verbs here, ')+m+tl(' mastered (3 right answers in a row).</p>');
    h+='<div class="seg" role="group" aria-label="Tense">'+VTENSES.map(function(t){return '<button data-a="vtense" data-v="'+t[0]+'" aria-pressed="'+(ui.vt===t[0])+'">'+t[1]+'</button>'}).join('')+'</div>';
    if(!vCounts('past')&&ui.vt!=='pres') h+='<p class="note">'+tl('You are in A1: only the present counts toward mastering verbs. Past tenses count from A2, but you can practice them now.')+'</p>';
    h+=tl('<button class="btn wide" data-a="vstart">Start 10 questions</button></div>');
    h+='<p class="sub" style="margin-top:14px">Escribe solo el verbo (puedes incluir el pronombre). Para el present perfect incluye have o has, por ejemplo “has worked”.</p>';if(0)h+=tl('<p class="sub" style="margin-top:14px">Type just the verb (you can include the pronoun). For the perfect, include haben or sein, for example “hat gemacht”. Umlauts can be typed as ae, oe, ue and ß as ss.</p>');
    return h;
  }
  if(q.i>=q.qs.length){
    if(q.ch) return chDone(q);
    if(q.review) return doneReview(q.score,q.qs.length);
    if(q.learn) return tl('<div class="done"><h2>5 verbs studied</h2><div class="score">')+q.score+'/'+q.qs.length+'</div><p class="sub">'+q.learn.map(function(v){return v.inf}).join(', ')+tl(' are now part of your Practice rounds.</p>')+(vlPool().length?tl('<button class="btn wide" data-a="vlstart">Next 5 verbs</button>'):'')+tl('<button class="btn ghost wide" data-a="vlstudy">Study these 5 again</button><button class="btn ghost wide" data-a="vexit">Back to verbs</button></div>');
    if(q.les!=null) return '<div class="done"><h2>'+tl('Lesson practice done')+'</h2><div class="score">'+q.score+'/'+q.qs.length+'</div><p class="sub">'+(q.score===q.qs.length?tl('Perfect run.'):q.score>=7?tl('Solid. Keep going.'):tl('Read the lesson again, then try once more.'))+'</p><button class="btn wide" data-a="vlpr" data-v="'+q.les+'">'+tl('Practice again')+'</button><button class="btn ghost wide" data-a="vlback" data-v="'+q.les+'">'+tl('Back to the lesson')+'</button></div>';
    return tl('<div class="done"><h2>Verbs done</h2><div class="score">')+q.score+'/'+q.qs.length+'</div><p class="sub">'+(q.score===q.qs.length?tl('Perfect run.'):q.score>=7?tl('Solid. Keep going.'):tl('Irregular verbs take time. Try again.'))+tl('</p><button class="btn wide" data-a="vstart">10 more</button><button class="btn ghost wide" data-a="vreset">Change settings</button></div>');
  }
  var c=q.qs[q.i], v=c.v, r=q.res, ans=vForm(v,c.t,c.p);
  h+=tl('<div class="qtop"><button class="link exit" data-a="vexit">✕ Exit</button></div>')+'<div class="prog"><i style="width:'+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Question ')+(q.i+1)+tl(' of ')+q.qs.length+' · '+TNAME[c.t]+'</p>';
  h+='<div class="vhead"><div class="qprompt"><span class="vp">'+PERS[c.p]+'</span> '+esc(v.inf)+'</div><button class="icon" data-a="vsay" data-t="'+esc(v.inf)+tl('" aria-label="Pronounce ')+esc(v.inf)+'">'+ICON+'</button></div>';
  h+='<p class="ghint">'+esc(v.en)+' · '+PERS_EN[c.p]+'</p>';
  if(!r){
    h+='<div class="bar"><input id="verb-in" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="'+PERS[c.p].split('/')[0]+tl(' …" aria-label="Verb form"><button class="btn small" data-a="vcheck">Check</button></div>');
    h+=tl('<button class="link" data-a="vskip">I don’t know</button>');
  } else {
    h+='<div class="gres '+(r.ok?'a-das':'a-bad')+'"><p><b>'+(r.ok?tl('Correct!'):(r.given?tl('Not quite. You wrote “')+esc(r.given)+'”.':tl('Here is the answer.')))+'</b></p>';
    var full=PERS[c.p].split('/')[0]+' '+ans;
    h+='<div class="exrow"><p class="vans">'+PERS[c.p].split('/')[0]+' <b>'+esc(ans)+'</b></p><button class="icon" data-a="vsay" data-t="'+esc(full)+tl('" aria-label="Pronounce ')+esc(full)+'">'+ICON+'</button></div>'+(r.ok?'':'<p class="rhint">✎ '+esc(verbWhy(v,c.t))+'</p>'+ruleLink('vlgo',vLessonFor(v,c.t)))+'</div>'+vTable(v,c);
    h+='<button class="btn wide" data-a="vnext">'+(q.i+1>=q.qs.length?tl('See score'):tl('Next question'))+'</button>';
  }
  return h;
}
function doneReview(sc,n){
  var left=mistKeys().length;
  return planHit(['opp'])+tl('<div class="done"><h2>Review done</h2><div class="score">')+sc+'/'+n+'</div><p class="sub">'+(left?left+PL(left,' opportunity',' opportunities',' oportunidad',' oportunidades')+tl(' left. Each one leaves the list after you get it right ')+MIST_CLEAR+tl(' times in a row.'):tl('Your opportunities list is empty. Great work!'))+tl('</p><button class="btn wide" data-a="mopen">Back to my opportunities</button></div>');
}
function mistItem(k){
  var kind=k.split(':')[0], rest=k.slice(kind.length+1), m=S.mist[k];
  var label, type={mean:tl('Meaning'),art:tl('Article'),gap:tl('Fill the gap'),tr:tl('Translate'),verb:tl('Verb'),conv:tl('Conversation'),prod:tl('Write the word'),case:tl('Cases')}[kind];
  if(kind==='conv'){
    var ca=rest.split('|'), cc=convById(ca[0]), ct=cc&&cc.turns[+ca[1]];
    if(!ct) return null;
    label=ct.p+' → '+ct.m;
  } else if(kind==='verb'){
    var a=rest.split('|'), v=VERBS.find(function(x){return x.inf===a[0]});
    if(!v) return null;
    label=PERS[+a[2]].split('/')[0]+' '+vForm(v,a[1],+a[2])+' ('+v.inf+', '+{pres:'present',past:'past',perf:'perfect'}[a[1]]+')';
  } else if(kind==='case'){
    var cp=rest.split('|'), cw=byId(cp[0]); if(!cw||!CASE_T[+cp[1]]) return null;
    var cq=makeCase(cw,+cp[1]); label=cq.sent.replace('___',cq.ans);
  } else {
    var w=byId(rest); if(!w) return null;
    label=kind==='tr'?w.ex:(w.art?w.art+' ':'')+w.de+' = '+w.en;
  }
  return '<div class="w"><div class="wl"><b class="wde">'+esc(label)+'</b><span class="wen">'+type+tl(' · wrong ')+m.n+'×'+(m.ok?' · '+m.ok+tl(' right since'):'')+'</span></div></div>';
}
function vMist(){
  var h='';
  var nW=mistKeys('mean').length+mistKeys('art').length+mistKeys('gap').length+mistKeys('prod').length+mistKeys('case').length, nT=mistKeys('tr').length, nV=mistKeys('verb').length, nC=mistKeys('conv').length;
  h+=tl('<div class="panel"><h2>My opportunities</h2><p class="sub">Every wrong answer becomes an opportunity. Each right answer on one gives +5 XP, and when you get an item right ')+MIST_CLEAR+tl(' times in a row, you recover it (+10 XP more). Up to 15 items per round.</p>');
  if(!(nW+nT+nV+nC)) return h+tl('<p class="sub">No opportunities saved right now.</p></div>');
  h+='<div class="opts">'+
    '<button class="opt" data-a="mrev" data-v="words"'+(nW?'':' disabled')+tl('><b>Words</b> · ')+nW+tl(' <span class="exen">(meanings, articles, gaps, writing, cases)</span></button>')+
    '<button class="opt" data-a="mrev" data-v="tr"'+(nT?'':' disabled')+tl('><b>Sentences</b> · ')+nT+'</button>'+
    '<button class="opt" data-a="mrev" data-v="verbs"'+(nV?'':' disabled')+tl('><b>Verbs</b> · ')+nV+'</button>'+
    '<button class="opt" data-a="mrev" data-v="conv"'+(nC?'':' disabled')+tl('><b>Conversation replies</b> · ')+nC+'</button></div></div>';
  var keys=mistKeys().sort(function(a,b){return S.mist[b].n-S.mist[a].n});
  h+=tl('<h3 class="rt" style="margin:16px 0 4px">Most missed</h3>')+keys.slice(0,40).map(mistItem).filter(Boolean).join('');
  h+='<button class="btn ghost wide" data-a="mclear">'+(ui.confirmClear?tl('Tap again to clear the list'):tl('Clear the list'))+'</button>';
  return h;
}
function mistBar(){
  var n=mistKeys().length;
  if(!n||ui.tab==='mist') return '';
  var busy=(ui.tab==='quiz'&&ui.quiz&&ui.quiz.i<ui.quiz.qs.length)||(ui.tab==='translate'&&ui.tr&&ui.tr.i<ui.tr.qs.length)||(ui.tab==='verbs'&&ui.vq&&ui.vq.i<ui.vq.qs.length)||(ui.tab==='conv'&&ui.cv&&ui.cv.i<ui.cv.items.length);
  if(busy) return '';
  return tl('<button class="mbar" data-a="mopen"><span>My opportunities</span><b>')+n+tl(' to review</b></button>');
}
function listHtml(){
  var t=nfold(ui.search.trim());
  var ws=allWords().filter(function(w){
    return !t||nfold(w.de+' '+w.en+' '+w.cat+' '+catL(w.cat)).indexOf(t)>-1;
  });
  if(!ws.length) return tl('<p class="empty">No words match your search.</p>');
  return ws.map(function(w){
    var st=isMastered(w.id)?tl('<span class="kst m" title="Mastered">★<span class="kt"> mastered</span></span>'):isRecognized(w.id)?tl('<span class="kst r" title="Recognized">✓<span class="kt"> recognized</span></span>'):'';
    var custom=String(w.id).charAt(0)==='c';
    return '<div class="w '+ac(w.art)+'"><div class="wl"><b class="wde">'+(w.art?'<span class="art">'+w.art+'</span> ':'')+esc(w.de)+'</b><span class="wen">'+esc(w.en)+(plText(w)?' · '+esc(plText(w)):'')+'</span>'+ruleHtml(w)+'</div>'+
      '<div class="wr">'+st+
      (custom?'<button class="del" data-a="del" data-id="'+w.id+'">'+(ui.confirmDel===w.id?tl('Sure?'):tl('Delete'))+'</button>':'')+
      '<button class="icon" data-a="say" data-id="'+w.id+tl('" aria-label="Pronounce ')+esc(w.de)+'">'+ICON+'</button></div></div>';
  }).join('');
}
function vWords(){
  var h=tl('<div class="bar"><input id="q" type="search" placeholder="Search words" value="')+esc(ui.search)+tl('" aria-label="Search words"><button class="btn small" data-a="addt">')+(ui.adding?tl('Close'):tl('Add word'))+'</button></div>';
  if(ui.adding){
    h+='<div class="form"><input type="hidden" id="f-art" value="">'+
    tl('<label>German word<input id="f-de" autocomplete="off" autocapitalize="none"></label>')+
    tl('<label>Significado en español<input id="f-en" autocomplete="off"></label>')+
    tl('<label>Example sentence (optional)<input id="f-ex" autocomplete="off"></label>')+
    tl('<label>Category<select id="f-cat">')+CATS.map(function(c){return '<option value="'+c+'">'+esc(catL(c))+'</option>'}).join('')+'</select></label>'+
    tl('<button class="btn" data-a="addsave">Save word</button>')+(ui.err?'<p class="note">'+esc(ui.err)+'</p>':'')+'</div>';
  }
  return h+'<div id="list">'+listHtml()+'</div>';
}

function exChips(s){return s.split(', ').map(function(x){return '<span class="chip-ex">'+esc(x)+'</span>'}).join('')}
var _cmp=null;
function ruleFor(w){return null}
function ruleHtml(w){return ''}
function ruleLink(a,v,f){return '<button class="link rlink" data-a="'+a+'"'+(v!=null?' data-v="'+v+'"':'')+(f?' data-f="'+f+'"':'')+'>'+tl('See the rule →')+'</button>'}
// Which verb lesson explains a form (index in lesson order: 0 present -s, 1 be/have/do, 2 regular past, 3 irregular past, 4 present perfect)
function vLessonFor(v,t){if(t==='past')return isRegPast(v)?2:3;if(t==='perf')return 4;return VBIG.indexOf(v.inf)>-1?1:0}
function verbWhy(v,t){var n=vNote(v);return t==='pres'?n[0]:t==='past'?n[1]:n[2]}
function vDrill(){
  var q=ui.dr, h='';
  if(q.i>=q.qs.length) return '<div class="done"><h2>¡Listo! '+q.ok+' de '+q.qs.length+' correctas.</h2><p class="sub">'+(q.ok>=RPASS?'Aprobada. Cuenta para tu meta de '+DRILLS[q.k].lv+'.':'Necesitas 8 de 10 para aprobar. Vuelve a intentarlo cuando quieras.')+'</p><button class="btn wide" data-a="drgo" data-v="'+q.k+'">Practicar otra vez</button><button class="btn ghost wide" data-a="drx" style="margin-top:8px">Volver a las reglas</button></div>';
  var c=q.qs[q.i];
  h+='<div class="qtop"><button class="link exit" data-a="drx">✕ Salir</button></div><div class="prog"><i style="width:'+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+='<p class="qn">'+esc(DRILLS[q.k].t)+' · '+(q.i+1)+' de '+q.qs.length+'</p><div class="qprompt" style="margin:6px 0 14px">'+esc(q.picked===null?c.q:c.q.replace('___',c.ans==='–'?'':c.ans).replace(/\s+/g,' '))+'</div><div class="opts">';
  c.opts.forEach(function(o){var cls='opt';if(q.picked!==null){if(o===c.ans)cls+=' ok';else if(o===q.picked)cls+=' bad'}h+='<button class="'+cls+'" data-a="drpick" data-v="'+esc(o)+'"'+(q.picked!==null?' disabled':'')+'>'+esc(o==='–'?'– (nada)':o)+'</button>'});
  h+='</div>';
  if(q.picked!==null) h+=fbk(q.picked===c.ans,c.ans==='–'?'sin artículo':c.ans)+'<p class="sub" style="margin:12px 0">'+esc(c.why)+'</p>'+(q.picked!==c.ans&&ruleOf(q.k)?'<div style="margin-bottom:12px">'+ruleBox(ruleOf(q.k),false)+'</div>':'')+'<button class="btn wide" data-a="drnext">Siguiente</button>';
  return h;
}
// ---- English grammar rules, explained in Spanish, ordered by level. Each one can have a practice (DRILLS key). ----
function rP(x){return '<p class="sub" style="margin:6px 0 0">'+x+'</p>'}
function rT(x){return '<p class="rt">'+x+'</p>'}
function rW(x){return '<p class="warn">'+x+'</p>'}
function rX(s){return '<div class="exs">'+exChips(s)+'</div>'}
function rS(s){return '<div class="exrow"><p class="ex">'+esc(s)+'</p><button class="icon" data-a="vsay" data-t="'+esc(s)+'" aria-label="Escuchar">'+ICON+'</button></div>'}
function rTab(rows,head){return '<div class="vtw"><table class="vt wrap">'+(head?'<thead><tr>'+head.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead>':'')+'<tbody>'+rows.map(function(r){return '<tr>'+r.map(function(c,i){return i?'<td>'+c+'</td>':'<th>'+c+'</th>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>'}
var EN_RULES=[
 {id:'art',lv:'A1',dr:'art',t:'Artículos · a, an, the',b:function(){return rP('<b>a / an</b> = un, una (algo nuevo, uno cualquiera). <b>the</b> = el, la, los, las (algo concreto que ya conocemos). En inglés no hay género: siempre <b>the</b>.')+
  rTab([['a','antes de <b>sonido</b> de consonante','a car, a university, a one-way ticket'],['an','antes de <b>sonido</b> de vocal','an apple, an hour, an email'],['the','algo concreto o único','the sun, the car (el que ya mencionamos)']])+
  rW('Lo que cuenta es el sonido, no la letra: <b>an hour</b> (la h no suena), <b>a university</b> (suena “yu”).')+
  rT('Sin artículo')+rP('Con cosas en general, idiomas, deportes y comidas del día: I like coffee. I speak English. We have lunch at one.')+
  rT('Con profesiones sí va a / an')+rX('I am a teacher., She is an engineer.')+rS('I have a dog and a cat. The dog is very old.')}},
 {id:'be',lv:'A1',dr:'be',t:'El verbo to be · am, is, are',b:function(){return rP('<b>to be</b> significa ser <b>y</b> estar. Es el verbo más importante del inglés.')+
  rTab([['I','am','I’m'],['you','are','you’re'],['he / she / it','is','he’s, she’s, it’s'],['we','are','we’re'],['they','are','they’re']],['','forma','corta'])+
  rT('Negativo: agrega not')+rX('I’m not tired., She isn’t here., They aren’t at home.')+
  rT('Pregunta: cambia el orden')+rX('Are you ready?, Is he your brother?, Where is the station?')+
  rW('La edad y el hambre van con to be: I <b>am</b> 30 (tengo 30 años). I <b>am</b> hungry (tengo hambre). Nunca “I have 30 years”.')+rS('Are you from Chile? Yes, I am.')}},
 {id:'pres',lv:'A1',dr:'pres',t:'Present simple · rutinas y hechos',b:function(){return rP('Para hábitos, rutinas y cosas que siempre son verdad. El verbo no cambia, <b>excepto con he / she / it: agrega -s</b>.')+
  rTab([['I / you / we / they','work','I work in an office.'],['he / she / it','work<b>s</b>','She works in a bank.']])+
  rT('Ortografía de la -s')+rTab([['-s, -sh, -ch, -x, -o','+ es','watches, goes, does, fixes'],['consonante + y','y → ies','study → studies'],['vocal + y','+ s','play → plays'],['have','irregular','he <b>has</b>']])+
  rT('Negativo y pregunta con do / does')+rX('I don’t like coffee., He doesn’t work here., Do you live here?, Does she speak English?')+
  rW('Con does / doesn’t el verbo vuelve a la forma base: She doesn’t <b>work</b> (no “works”). Does he <b>live</b> here?')+
  rT('Adverbios de frecuencia: antes del verbo, pero después de be')+rX('I always get up early., She never eats meat., He is often late.')+rS('My brother lives in London. He doesn’t like the weather.')}},
 {id:'plural',lv:'A1',dr:'plural',t:'Plurales · cars, buses, children',b:function(){return rP('La mayoría de los sustantivos agregan <b>-s</b>.')+
  rTab([['casi todos','+ s','car → cars, book → books'],['-s, -sh, -ch, -x','+ es','bus → buses, watch → watches'],['consonante + y','y → ies','city → cities, baby → babies'],['-f / -fe','→ ves','knife → knives, wife → wives']])+
  rT('Irregulares: hay que aprenderlos')+rX('man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth, mouse → mice')+
  rW('Los adjetivos nunca van en plural: two <b>big</b> houses (no “bigs”). Y van antes del sustantivo.')+rS('I have two children and three cats.')}},
 {id:'pron',lv:'A1',dr:'pron',t:'Pronombres y posesivos · I, me, my, mine',b:function(){return rTab([['I','me','my','mine'],['you','you','your','yours'],['he','him','his','his'],['she','her','her','hers'],['it','it','its','–'],['we','us','our','ours'],['they','them','their','theirs']],['sujeto','objeto','+ sustantivo','solo'])+
  rX('I love her., She loves me., This is my car., This car is mine.')+
  rW('<b>his</b> = de él, <b>her</b> = de ella. En español “su” sirve para todo; en inglés depende de quién tiene la cosa: Anna and <b>her</b> brother. Tom and <b>his</b> sister.')+
  rT('El genitivo ’s: de quién es')+rX('Anna’s car, my parents’ house, the children’s toys')+
  rW('<b>it’s</b> = it is. <b>its</b> = su (de una cosa o animal). The dog wants its food.')}},
 {id:'there',lv:'A1',dr:'there',t:'There is / there are · some, any',b:function(){return rP('Para decir que algo <b>hay</b> o existe.')+
  rTab([['singular','There is (There’s)','There is a bank near here.'],['plural','There are','There are two parks.'],['negativo','There isn’t / aren’t','There aren’t any shops.'],['pregunta','Is there / Are there…?','Is there a pharmacy?']])+
  rT('some y any')+rP('<b>some</b> en frases afirmativas. <b>any</b> en negativas y preguntas.')+rX('There is some milk., There isn’t any milk., Are there any eggs?')+
  rW('Al ofrecer o pedir algo se usa some en la pregunta: Would you like <b>some</b> coffee?')}},
 {id:'prept',lv:'A1',dr:'prept',t:'Preposiciones de tiempo · at, on, in',b:function(){return rTab([['at','horas y momentos','at 7 o’clock, at night, at the weekend'],['on','días y fechas','on Monday, on 5 May, on my birthday'],['in','meses, años, estaciones, partes del día','in July, in 2026, in summer, in the morning']])+
  rW('Truco: de lo pequeño a lo grande: <b>at</b> (punto) → <b>on</b> (día) → <b>in</b> (periodo largo).')+
  rT('Sin preposición')+rX('next week, last year, this morning, every day, tomorrow')+rS('The meeting is on Monday at ten in the morning.')}},
 {id:'time',lv:'A1',dr:'time',t:'La hora · What time is it?',b:function(){return rTab([['3:00','three o’clock'],['3:05','five past three'],['3:15','(a) quarter past three'],['3:30','half past three'],['3:45','(a) quarter to four'],['3:50','ten to four']])+
  rP('También se puede decir los números tal cual: 3:15 = three fifteen, 3:45 = three forty-five.')+
  rW('<b>half past three</b> = 3:30 (no 2:30 ni 4:30). <b>past</b> = después de, <b>to</b> = antes de.')+
  rT('a.m. y p.m.')+rP('a.m. = de medianoche a mediodía. p.m. = de mediodía a medianoche. 8 p.m. = 20:00.')+rS('What time is it? It’s half past seven.')}},
 {id:'can',lv:'A1',dr:'can',t:'can / can’t · poder, saber hacer',b:function(){return rP('<b>can</b> + verbo base, igual para todas las personas. Sirve para habilidad, posibilidad y permiso.')+
  rX('I can swim., She can’t drive., Can you help me?, Can I open the window?')+
  rW('Nunca “to” después de can, y nunca -s: She <b>can speak</b> English (no “cans speak” ni “can to speak”).')+rS('Can you speak slowly, please?')}},
 {id:'cont',lv:'A2',dr:'cont',t:'Present continuous · lo que pasa ahora',b:function(){return rP('<b>am / is / are + verbo-ing</b>. Para lo que está pasando ahora o planes cercanos ya decididos.')+
  rX('I’m working now., She is cooking dinner., They aren’t listening., What are you doing?')+
  rT('Simple o continuous')+rTab([['present simple','rutina, siempre','I work from home on Fridays.'],['present continuous','ahora, temporal','I’m working from home today.']])+
  rT('Ortografía de -ing')+rTab([['casi todos','+ ing','work → working'],['-e final','se va la e','make → making'],['1 vocal + 1 consonante','se dobla','run → running, swim → swimming'],['-ie','→ ying','lie → lying']])+
  rW('Verbos de estado casi nunca van en -ing: like, love, want, need, know, understand. I <b>want</b> a coffee (no “I’m wanting”).')+rS('Look! It’s raining.')}},
 {id:'past',lv:'A2',dr:'past',t:'Past simple · ayer, la semana pasada',b:function(){return rP('Acciones terminadas en el pasado. <b>Igual para todas las personas.</b>')+
  rTab([['regulares','+ ed','work → worked, live → lived'],['consonante + y','y → ied','study → studied'],['1 vocal + 1 consonante','se dobla','stop → stopped, plan → planned'],['irregulares','de memoria','go → went, eat → ate, buy → bought']])+
  rT('Negativo y pregunta con did')+rX('I didn’t go., Did you see it?, What did she say?')+
  rW('Con did / didn’t el verbo vuelve a la forma base: I didn’t <b>go</b> (no “didn’t went”). Did you <b>buy</b> it?')+
  rT('to be en pasado: was / were')+rX('I was tired., You were late., It wasn’t easy., Were they at home?')+
  rT('Palabras de pasado')+rX('yesterday, last week, two days ago, in 2020')+rS('Yesterday I went to the cinema and watched a great film.')}},
 {id:'count',lv:'A2',dr:'count',t:'Contables e incontables · much, many, a lot of',b:function(){return rP('<b>Contables</b>: se pueden contar (one apple, two apples). <b>Incontables</b>: no tienen plural (water, money, information, advice, bread).')+
  rTab([['many','contables, en negativas y preguntas','How many eggs? Not many.'],['much','incontables, en negativas y preguntas','How much money? Not much.'],['a lot of','ambos, sobre todo en afirmativas','a lot of friends, a lot of time'],['a few / a little','un poco (contable / incontable)','a few minutes, a little sugar']])+
  rW('Incontables en inglés que en español sí se cuentan: information, advice, news, furniture, luggage. Some information (no “informations”).')+rS('How much is it? How many people are coming?')}},
 {id:'comp',lv:'A2',dr:'comp',t:'Comparativos y superlativos · bigger, the biggest',b:function(){return rTab([['corto (1 sílaba)','+ er / the + est','cheap → cheaper → the cheapest'],['termina en -y','-ier / -iest','easy → easier → the easiest'],['vocal + consonante','se dobla','big → bigger → the biggest'],['largo (2+ sílabas)','more / the most','expensive → more expensive → the most expensive']])+
  rT('Irregulares')+rX('good → better → the best, bad → worse → the worst, far → further → the furthest')+
  rT('Comparar: than. Igualdad: as … as')+rX('London is bigger than Santiago., My English is better than last year., She is as tall as me.')+
  rW('Nunca “more bigger”: o es -er o es more, no los dos.')+rS('This is the best coffee in the city.')}},
 {id:'fut',lv:'A2',dr:'fut',t:'Futuro · going to y will',b:function(){return rTab([['going to','planes ya decididos; algo que se ve venir','I’m going to visit my parents. Look at the clouds, it’s going to rain.'],['will','decisiones en el momento, promesas, predicciones','I’ll help you. I think it will be sunny.'],['present continuous','citas y planes con hora fija','I’m meeting Tom at six.']])+
  rT('Formas')+rX('I’m going to study., I’ll call you., I won’t forget., Will you come?')+
  rW('<b>won’t</b> = will not. Después de will el verbo va en base: She will <b>come</b> (no “will comes”).')}},
 {id:'modal',lv:'A2',dr:'modal',t:'Obligación y consejos · must, have to, should',b:function(){return rTab([['have to','obligación (reglas, trabajo)','I have to work on Saturday. She has to wear a uniform.'],['must','obligación fuerte, sobre todo escrita o personal','You must wear a seatbelt.'],['don’t have to','no es necesario','You don’t have to come.'],['mustn’t','está prohibido','You mustn’t smoke here.'],['should','consejo','You should see a doctor.']])+
  rW('Ojo: <b>don’t have to</b> (no hace falta) y <b>mustn’t</b> (prohibido) son muy distintos.')+
  rW('have to cambia con he/she: she <b>has</b> to. must y should nunca cambian y van sin “to”.')+rS('You should drink more water.')}},
 {id:'prepp',lv:'A2',dr:'prepp',t:'Preposiciones de lugar · in, on, at',b:function(){return rTab([['in','dentro; ciudades y países','in the box, in London, in Chile'],['on','sobre una superficie; calles','on the table, on the wall, on Main Street'],['at','un punto, una dirección o un lugar de actividad','at home, at work, at the station, at 25 Oak Street']])+
  rT('Otras')+rX('under the bed, next to the bank, between the café and the shop, in front of the hotel, behind the door, opposite the park')+
  rW('at home, at work, at school (sin the). Pero in the office, in the kitchen.')}},
 {id:'pperf',lv:'A2',dr:'pperf',t:'Present perfect · have done',b:function(){return rP('<b>have / has + participio</b>. Experiencias de la vida (sin decir cuándo) y cosas del pasado que importan ahora.')+
  rX('I have been to London., She has never eaten sushi., Have you ever seen snow?, I have already finished., Has he called yet?')+
  rT('Present perfect o past simple')+rTab([['present perfect','sin momento exacto','I have visited Paris.'],['past simple','con momento terminado','I visited Paris in 2019.']])+
  rW('Con yesterday, last week, in 2019, ago → siempre past simple. “I have seen him yesterday” está mal.')+
  rT('for y since')+rX('I have lived here for two years., I have lived here since 2024.')}}
];
// Rule practices: [question with ___, right answer, wrong options, why]
var DRILLS={
 art:{lv:'A1',t:'Artículos: a, an, the',items:[
  ['I have ___ apple.','an',['a','the'],'apple empieza con sonido de vocal: an.'],
  ['She is ___ teacher.','a',['an','–'],'Profesiones llevan a / an: a teacher.'],
  ['We need ___ hour.','an',['a','the'],'La h de hour no suena: an hour.'],
  ['He studies at ___ university.','a',['an','the'],'university suena “yu”, sonido de consonante: a.'],
  ['Look at ___ moon!','the',['a','an'],'Hay una sola luna: the.'],
  ['I speak ___ English.','–',['the','an'],'Idiomas sin artículo.'],
  ['Can you close ___ door, please?','the',['a','an'],'Una puerta concreta, la que ambos ven: the.'],
  ['I bought ___ umbrella.','an',['a','the'],'umbrella empieza con sonido de vocal: an.'],
  ['My brother is ___ engineer.','an',['a','the'],'engineer empieza con vocal: an.'],
  ['I love ___ coffee.','–',['the','a'],'Cosas en general, sin artículo: I love coffee.'],
  ['I have a dog. ___ dog is black.','The',['A','An'],'Ya lo mencionamos, ahora es concreto: the.'],
  ['It’s ___ one-way street.','a',['an','the'],'one suena “wan”, consonante: a.']]},
 be:{lv:'A1',t:'El verbo to be',items:[
  ['I ___ from Chile.','am',['is','are'],'I → am.'],
  ['She ___ my sister.','is',['are','am'],'she → is.'],
  ['They ___ at work.','are',['is','am'],'they → are.'],
  ['___ you hungry?','Are',['Is','Am'],'Pregunta: are + you.'],
  ['He ___ not here today.','is',['are','am'],'he → is not (isn’t).'],
  ['We ___ ready.','are',['is','am'],'we → are.'],
  ['It ___ cold today.','is',['are','am'],'it → is.'],
  ['I ___ 30 years old.','am',['have','is'],'La edad va con to be: I am 30.'],
  ['___ he your boss?','Is',['Are','Am'],'Pregunta: is + he.'],
  ['My parents ___ retired.','are',['is','am'],'my parents = they → are.'],
  ['You ___ late again!','are',['is','am'],'you → are.'],
  ['The kids ___ hungry.','are',['have','is'],'Tener hambre = to be hungry.']]},
 pres:{lv:'A1',t:'Present simple',items:[
  ['She ___ in a bank. (work)','works',['work','working'],'he / she / it → -s.'],
  ['They ___ near here. (live)','live',['lives','living'],'they → forma base.'],
  ['He ___ TV every night. (watch)','watches',['watchs','watch'],'-ch → -es.'],
  ['My son ___ English. (study)','studies',['studys','study'],'consonante + y → ies.'],
  ['She ___ a new car. (have)','has',['haves','have'],'have → has con he / she / it.'],
  ['___ you like coffee?','Do',['Does','Are'],'Pregunta con you: do.'],
  ['___ he work here?','Does',['Do','Is'],'Pregunta con he: does.'],
  ['She doesn’t ___ meat. (eat)','eat',['eats','eating'],'Después de doesn’t, forma base.'],
  ['I ___ like horror films.','don’t',['doesn’t','not'],'Negativo con I: don’t.'],
  ['He ___ to the gym on Mondays. (go)','goes',['gos','go'],'go → goes.'],
  ['Tom ___ speak Spanish.','doesn’t',['don’t','isn’t'],'Negativo con he: doesn’t.'],
  ['I ___ get up early.','always',['always do','am always'],'Adverbios de frecuencia van antes del verbo: I always get up.']]},
 plural:{lv:'A1',t:'Plurales',items:[
  ['one bus, two ___','buses',['buss','bus'],'-s → -es.'],
  ['one city, two ___','cities',['citys','cityes'],'consonante + y → ies.'],
  ['one child, two ___','children',['childs','childrens'],'Irregular: children.'],
  ['one man, two ___','men',['mans','mens'],'Irregular: men.'],
  ['one box, two ___','boxes',['boxs','box'],'-x → -es.'],
  ['one day, two ___','days',['daies','dayes'],'vocal + y → solo -s.'],
  ['one person, two ___','people',['persons','peoples'],'Lo normal es people.'],
  ['one foot, two ___','feet',['foots','feets'],'Irregular: feet.'],
  ['one knife, two ___','knives',['knifes','knifs'],'-fe → -ves.'],
  ['one watch, two ___','watches',['watchs','watch'],'-ch → -es.'],
  ['one woman, two ___','women',['womans','womens'],'Irregular: women.'],
  ['two ___ houses','big',['bigs','bigger'],'Los adjetivos no tienen plural.']]},
 pron:{lv:'A1',t:'Pronombres y posesivos',items:[
  ['Anna loves ___ brother.','her',['his','she'],'De ella → her.'],
  ['Tom and ___ sister are here.','his',['her','he'],'De él → his.'],
  ['Can you help ___?','me',['I','my'],'Después del verbo, objeto: me.'],
  ['This bag is ___.','mine',['my','me'],'Solo, sin sustantivo: mine.'],
  ['We love ___ new flat.','our',['us','ours'],'Antes de sustantivo: our.'],
  ['I see ___ every day. (they)','them',['they','their'],'Objeto de they: them.'],
  ['The dog wants ___ food.','its',['it’s','his'],'its = su (de una cosa o animal). it’s = it is.'],
  ['Is this ___ phone? (you)','your',['you','yours'],'Antes de sustantivo: your.'],
  ['___ is my friend Sarah.','She',['Her','Hers'],'Sujeto: she.'],
  ['This is ___ car. (Anna)','Anna’s',['Annas','of Anna'],'De quién es: ’s.'],
  ['Call ___ tomorrow. (he)','him',['he','his'],'Objeto de he: him.'],
  ['The house is ___. (we)','ours',['our','us'],'Solo, sin sustantivo: ours.']]},
 there:{lv:'A1',t:'There is / there are',items:[
  ['___ a bank near here.','There is',['There are','It is'],'Singular: there is.'],
  ['___ two cafés on this street.','There are',['There is','They are'],'Plural: there are.'],
  ['___ a pharmacy near here?','Is there',['There is','Are there'],'Pregunta singular: is there.'],
  ['There aren’t ___ eggs.','any',['some','a'],'Negativo: any.'],
  ['There is ___ milk in the fridge.','some',['any','a'],'Afirmativo: some.'],
  ['Are there ___ questions?','any',['some','a'],'Pregunta: any.'],
  ['There ___ any shops here.','aren’t',['isn’t','not'],'Plural negativo: aren’t.'],
  ['Would you like ___ tea?','some',['any','a'],'Ofrecer: some.'],
  ['___ many people at the party?','Were there',['Was there','There were'],'Pasado plural, pregunta: were there.'],
  ['There ___ a problem with my car yesterday.','was',['were','is'],'Pasado singular: there was.'],
  ['How many rooms ___?','are there',['is there','there are'],'Pregunta plural: are there.']]},
 prept:{lv:'A1',t:'at, on, in (tiempo)',items:[
  ['The class is ___ Monday.','on',['in','at'],'Días: on.'],
  ['I get up ___ 7 o’clock.','at',['on','in'],'Horas: at.'],
  ['My birthday is ___ May.','in',['on','at'],'Meses: in.'],
  ['We go skiing ___ winter.','in',['on','at'],'Estaciones: in.'],
  ['I work ___ the morning.','in',['at','on'],'Partes del día: in the morning.'],
  ['I can’t sleep ___ night.','at',['in','on'],'Excepción: at night.'],
  ['She was born ___ 1995.','in',['on','at'],'Años: in.'],
  ['The party is ___ 5 June.','on',['in','at'],'Fechas: on.'],
  ['See you ___ the weekend!','at',['in','to'],'at the weekend (inglés británico; en EE.UU. también on the weekend).'],
  ['We have a meeting ___ Friday afternoon.','on',['in','at'],'Día + parte del día: on.'],
  ['I’ll see you ___ next week.','–',['in','on'],'Con next, last, this, every: sin preposición.']]},
 time:{lv:'A1',t:'La hora',items:[
  ['3:30 → It’s ___.','half past three',['half past four','half three past'],'half past + la hora que pasó.'],
  ['7:15 → It’s a quarter ___ seven.','past',['to','after of'],':15 = quarter past.'],
  ['8:45 → It’s a quarter ___ nine.','to',['past','at'],':45 = quarter to + la hora siguiente.'],
  ['10:05 → It’s five ___ ten.','past',['to','of'],'Minutos después: past.'],
  ['6:50 → It’s ten ___ seven.','to',['past','before'],'Minutos antes: to.'],
  ['9:00 → It’s nine ___.','o’clock',['hours','clock'],'Hora en punto: o’clock.'],
  ['20:00 → It’s 8 ___.','p.m.',['a.m.','o’clock p.m.'],'Después del mediodía: p.m.'],
  ['The film starts ___ eight.','at',['in','on'],'Una hora: at.'],
  ['___ is it? – It’s two o’clock.','What time',['How much time','Which hour'],'Preguntar la hora: What time is it?'],
  ['4:20 → It’s twenty ___ four.','past',['to','after of'],'Minutos después: past.'],
  ['11:40 → It’s twenty ___ twelve.','to',['past','for'],'Minutos antes: to.']]},
 can:{lv:'A1',t:'can / can’t',items:[
  ['She ___ swim very well.','can',['cans','can to'],'can no cambia y va sin to.'],
  ['I can ___ the guitar. (play)','play',['to play','playing'],'Después de can, forma base.'],
  ['___ you help me, please?','Can',['Do','Are'],'Pedir ayuda: Can you…?'],
  ['He ___ drive. He has no licence.','can’t',['don’t can','not can'],'Negativo: can’t.'],
  ['___ I open the window?','Can',['Do','Am'],'Pedir permiso: Can I…?'],
  ['They can ___ English and French.','speak',['speaks','speaking'],'Después de can, forma base.'],
  ['Sorry, I ___ come tonight.','can’t',['cannot to','don’t can'],'Negativo: can’t / cannot.'],
  ['My son ___ read. He’s five.','can',['cans','is can'],'can es igual para todas las personas.'],
  ['Can she cook? – Yes, she ___.','can',['does','cans'],'Respuesta corta: Yes, she can.'],
  ['Can you speak more ___?','slowly',['slow','slowlier'],'Para el verbo se usa el adverbio: slowly.']]},
 cont:{lv:'A2',t:'Present continuous',items:[
  ['Shh! The baby ___. (sleep)','is sleeping',['sleeps','sleeping'],'Ahora mismo: is + -ing.'],
  ['I ___ now, can I call you later? (work)','am working',['work','working'],'Ahora mismo: am working.'],
  ['She usually ___ the bus. (take)','takes',['is taking','taking'],'Rutina (usually): present simple.'],
  ['What ___ you doing?','are',['do','is'],'Pregunta: are you doing.'],
  ['They ___ TV right now.','are watching',['watch','is watching'],'right now: are + -ing.'],
  ['run → ___','running',['runing','runnning'],'1 vocal + 1 consonante: se dobla.'],
  ['make → ___','making',['makeing','makking'],'-e final se va: making.'],
  ['I ___ a coffee, please.','want',['am wanting','wanting'],'want es de estado: no va en -ing.'],
  ['Look! It ___.','’s raining',['rains','rain'],'Lo que pasa ahora: is raining.'],
  ['He ___ to the gym every day.','goes',['is going','going'],'Rutina (every day): present simple.'],
  ['I ___ Tom tonight at eight.','’m meeting',['meet','meeting'],'Plan fijo cercano: present continuous.'],
  ['We ___ listening.','aren’t',['don’t','isn’t'],'Negativo con we: aren’t.']]},
 past:{lv:'A2',t:'Past simple',items:[
  ['Yesterday I ___ to the cinema. (go)','went',['goed','go'],'go → went.'],
  ['We ___ a great film. (watch)','watched',['watch','watchd'],'Regular: + ed.'],
  ['She ___ English at school. (study)','studied',['studyed','studies'],'consonante + y → ied.'],
  ['I didn’t ___ the email. (see)','see',['saw','seen'],'Después de didn’t, forma base.'],
  ['___ you buy the tickets?','Did',['Do','Were'],'Pregunta en pasado: did.'],
  ['They ___ at home last night. (be)','were',['was','are'],'they → were.'],
  ['I ___ very tired yesterday.','was',['were','am'],'I → was.'],
  ['He ___ the bus. (stop)','stopped',['stoped','stopt'],'1 vocal + 1 consonante: se dobla.'],
  ['We ___ pizza for dinner. (eat)','ate',['eated','eat'],'eat → ate.'],
  ['What did she ___?','say',['said','says'],'Después de did, forma base.'],
  ['I ___ a new phone last week. (buy)','bought',['buyed','buy'],'buy → bought.'],
  ['I saw him two days ___.','ago',['before','past'],'Hace dos días = two days ago.']]},
 count:{lv:'A2',t:'much, many, a lot of',items:[
  ['How ___ eggs do we need?','many',['much','a lot'],'eggs se cuentan: many.'],
  ['How ___ money do you have?','much',['many','a few'],'money es incontable: much.'],
  ['There isn’t ___ time.','much',['many','a few'],'time incontable, negativo: much.'],
  ['I have ___ friends in London.','a lot of',['much','a little'],'Afirmativo: a lot of.'],
  ['Can I have ___ sugar?','a little',['a few','many'],'Incontable, poco: a little.'],
  ['I need some ___.','information',['informations','an information'],'information es incontable.'],
  ['We waited a ___ minutes.','few',['little','much'],'minutes se cuentan: a few.'],
  ['There aren’t ___ people here.','many',['much','a little'],'people se cuentan: many.'],
  ['Can you give me some ___?','advice',['advices','an advice'],'advice es incontable.'],
  ['How ___ is this jacket?','much',['many','cost'],'Precio: How much is it?'],
  ['I don’t have ___ luggage.','much',['many','a few'],'luggage es incontable.']]},
 comp:{lv:'A2',t:'Comparativos y superlativos',items:[
  ['A car is ___ than a bike. (fast)','faster',['more fast','fastest'],'Corto: + er.'],
  ['This hotel is ___ than that one. (expensive)','more expensive',['expensiver','most expensive'],'Largo: more.'],
  ['It’s the ___ day of the year. (hot)','hottest',['hotest','most hot'],'Vocal + consonante: se dobla.'],
  ['My English is ___ now. (good)','better',['gooder','more good'],'Irregular: better.'],
  ['This is the ___ film I have ever seen. (bad)','worst',['baddest','worse'],'Irregular: the worst.'],
  ['Spanish is ___ than English for me. (easy)','easier',['more easy','easyer'],'-y → ier.'],
  ['She is taller ___ her brother.','than',['that','as'],'Comparar: than.'],
  ['He is as old ___ me.','as',['than','like'],'Igualdad: as … as.'],
  ['It’s the ___ building in the city. (big)','biggest',['bigest','most big'],'Se dobla la g: biggest.'],
  ['Which is the ___ beautiful beach? ','most',['more','much'],'Superlativo largo: the most.'],
  ['London is ___ than Madrid. (big)','bigger',['more big','more bigger'],'Nunca more + -er.']]},
 fut:{lv:'A2',t:'going to y will',items:[
  ['Look at those clouds! It ___ rain.','’s going to',['will','is'],'Se ve venir: going to.'],
  ['The phone is ringing. – I ___ answer it.','’ll',['’m going to','am'],'Decisión en el momento: will.'],
  ['We ___ visit Paris next summer. We bought the tickets.','are going to',['will','go'],'Plan decidido: going to.'],
  ['I promise I ___ forget.','won’t',['don’t','am not going'],'Promesa: won’t.'],
  ['I think it ___ be sunny tomorrow.','will',['is','is being'],'Opinión sobre el futuro: will.'],
  ['She will ___ tomorrow. (come)','come',['comes','to come'],'Después de will, forma base.'],
  ['What ___ you going to do?','are',['will','do'],'Pregunta: are you going to.'],
  ['I’m tired. I think I ___ go to bed.','’ll',['’m going','go'],'Decisión ahora: I’ll.'],
  ['___ you help me with this box?','Will',['Are','Going'],'Pedir un favor: Will you…?'],
  ['He ___ going to buy a car.','is',['will','does'],'he → is going to.']]},
 modal:{lv:'A2',t:'must, have to, should',items:[
  ['You ___ see a doctor. You look ill.','should',['must to','have'],'Consejo: should.'],
  ['She ___ work on Saturdays.','has to',['have to','must to'],'he / she → has to.'],
  ['You ___ smoke here. It’s forbidden.','mustn’t',['don’t have to','shouldn’t to'],'Prohibido: mustn’t.'],
  ['You ___ come if you’re busy. It’s fine.','don’t have to',['mustn’t','haven’t'],'No es necesario: don’t have to.'],
  ['I ___ get up early tomorrow, I have a flight.','have to',['has to','must to'],'Obligación: have to.'],
  ['You should ___ more water. (drink)','drink',['to drink','drinks'],'Después de should, forma base.'],
  ['___ I wear a suit to the interview?','Should',['Must to','Have'],'Pedir consejo: Should I…?'],
  ['Does he ___ to wear a uniform?','have',['has','must'],'Pregunta: does he have to.'],
  ['Drivers ___ wear a seatbelt.','must',['should to','musts'],'Regla fuerte: must.'],
  ['You ___ eat so much sugar. It’s bad for you.','shouldn’t',['mustn’t to','don’t should'],'Consejo negativo: shouldn’t.']]},
 prepp:{lv:'A2',t:'in, on, at (lugar)',items:[
  ['The keys are ___ the table.','on',['in','at'],'Sobre una superficie: on.'],
  ['She lives ___ London.','in',['at','on'],'Ciudades: in.'],
  ['I’m ___ home.','at',['in','on'],'Fijo: at home.'],
  ['There’s a picture ___ the wall.','on',['in','at'],'En la pared: on.'],
  ['The milk is ___ the fridge.','in',['on','at'],'Dentro: in.'],
  ['I’ll meet you ___ the station.','at',['in','on'],'Un punto de encuentro: at.'],
  ['The cat is ___ the bed.','under',['below of','down'],'Debajo: under.'],
  ['The bank is next ___ the café.','to',['of','at'],'Al lado: next to.'],
  ['He works ___ a hospital.','in',['on','at the'],'in a hospital (dentro de un edificio).'],
  ['The shop is ___ the bank and the park.','between',['among','in middle'],'Entre dos cosas: between.'],
  ['She is ___ work right now.','at',['in','on'],'Fijo: at work.']]},
 pperf:{lv:'A2',t:'Present perfect',items:[
  ['I ___ been to London twice.','have',['has','am'],'I → have + participio.'],
  ['She has never ___ sushi. (eat)','eaten',['ate','eat'],'Participio: eaten.'],
  ['___ you ever seen snow?','Have',['Did','Do'],'Experiencia: Have you ever…?'],
  ['I visited Paris ___.','in 2019',['ever','already'],'Con fecha: past simple.'],
  ['Has he called ___?','yet',['already','ago'],'Pregunta: yet al final.'],
  ['I have ___ finished. (ya)','already',['yet','ago'],'Afirmativo: already.'],
  ['We have lived here ___ two years.','for',['since','ago'],'Un periodo: for.'],
  ['We have lived here ___ 2024.','since',['for','from'],'Un punto de inicio: since.'],
  ['He ___ his keys. He can’t open the door.','has lost',['have lost','lost yesterday'],'Resultado ahora: has lost.'],
  ['I ___ him yesterday.','saw',['have seen','has seen'],'yesterday → past simple.'],
  ['They have ___ the report. (write)','written',['wrote','writed'],'Participio: written.']]},
 vA1:{lv:'A1',t:'Verbos: presente',items:[
  ['He ___ in Madrid. (live)','lives',['live','livs'],'he → -s.'],
  ['She ___ a lot of tea. (drink)','drinks',['drink','drinkes'],'she → -s.'],
  ['My dad ___ the dishes. (wash)','washes',['washs','wash'],'-sh → -es.'],
  ['It ___ ten dollars. (cost)','costs',['cost','costes'],'it → -s.'],
  ['She ___ hard. (try)','tries',['trys','try'],'consonante + y → ies.'],
  ['He ___ football. (play)','plays',['plaies','play'],'vocal + y → -s.'],
  ['My mom ___ two cats. (have)','has',['haves','have'],'have → has.'],
  ['I ___ at home. (be)','am',['is','are'],'I → am.'],
  ['Does she ___ here? (work)','work',['works','working'],'Con does, forma base.'],
  ['We ___ dinner at eight. (have)','have',['has','haves'],'we → have.'],
  ['He ___ his homework. (do)','does',['dos','do'],'do → does.'],
  ['They ___ to school by bus. (go)','go',['goes','gos'],'they → forma base.']]},
 vA2:{lv:'A2',t:'Verbos: pasado y present perfect',items:[
  ['I ___ a letter yesterday. (write)','wrote',['writed','written'],'write → wrote.'],
  ['She ___ the train. (catch)','caught',['catched','cought'],'catch → caught.'],
  ['We ___ in a nice hotel. (stay)','stayed',['staid','stood'],'vocal + y: + ed.'],
  ['He has ___ to Japan. (fly)','flown',['flew','flied'],'Participio de fly: flown.'],
  ['I have ___ my phone. (lose)','lost',['losed','lose'],'lose → lost → lost.'],
  ['They ___ married in 2020. (get)','got',['getted','gotten'],'get → got.'],
  ['She ___ me the truth. (tell)','told',['telled','tell'],'tell → told.'],
  ['I ___ to the party. (not go)','didn’t go',['didn’t went','don’t went'],'didn’t + forma base.'],
  ['Have you ___ the news? (hear)','heard',['heared','hear'],'hear → heard.'],
  ['We ___ the house last year. (sell)','sold',['selled','sell'],'sell → sold.'],
  ['He has ___ a lot of money. (spend)','spent',['spended','spend'],'spend → spent → spent.'],
  ['I ___ the window. (break)','broke',['breaked','broken'],'Pasado: broke. Participio: broken.']]},
 vB1:{lv:'B1',t:'Verbos irregulares: las 3 formas',items:[
  ['begin, ___, begun','began',['begined','begun'],'Patrón i → a → u.'],
  ['drink, drank, ___','drunk',['drinked','drank'],'Patrón i → a → u.'],
  ['write, ___, written','wrote',['writed','writ'],'Patrón i → o → i(tten).'],
  ['choose, chose, ___','chosen',['choosed','chose'],'Participio con -en.'],
  ['bring, ___, brought','brought',['brang','bringed'],'-ought: bring, buy, think.'],
  ['teach, taught, ___','taught',['teached','tought'],'-aught: teach, catch.'],
  ['put, ___, put','put',['putted','pat'],'Las tres formas iguales.'],
  ['come, came, ___','come',['came','comed'],'Participio igual al infinitivo.'],
  ['know, ___, known','knew',['knowed','known'],'Patrón ow → ew → own.'],
  ['grow, grew, ___','grown',['grew','growed'],'Patrón ow → ew → own.'],
  ['keep, ___, kept','kept',['keeped','kep'],'-ee → -e + t: keep, sleep, feel (felt).'],
  ['become, became, ___','become',['became','becomed'],'Como come.']]}
};
var VDRILL={A1:'vA1',A2:'vA2',B1:'vB1'};
var RPASS=8;
function ruleLevel(){return curLevel()||'B2'}
function rpBest(k){return (S.rp||{})[k]}
function rpPassed(k){return (rpBest(k)||0)>=RPASS}
function rpUnits(lv){return Object.keys(DRILLS).filter(function(k){return DRILLS[k].lv===lv})}
function lvHead(lv,i,ci){
  var u=rpUnits(lv), p=u.filter(rpPassed).length;
  return '<h3 class="rt lvh"><span class="lvt'+(i>ci?' lock':'')+'">'+(i>ci?'🔒 ':'')+lv+'</span> '+(i<ci?tl('Earlier level'):i===ci?tl('Your level'):tl('Coming later'))+(u.length?'<span class="lvn">'+p+'/'+u.length+tl(' practices passed')+'</span>':'')+'</h3>';
}
function rcard(k,inLesson){
  var u=DRILLS[k], b=rpBest(k), ok=rpPassed(k);
  return '<div class="story"><b>'+(ok?'<span class="tick">✓</span> ':'')+'Práctica: '+esc(u.t)+'</b><span class="exen">'+(b==null?'Aún sin practicar. Apruebas con 8 de 10.':'Mejor: '+b+'/10'+(ok?' · aprobada':' · apruebas con 8 de 10'))+'</span><div class="row" style="margin-top:8px">'+
    (u.lv&&VDRILL[u.lv]===k&&!inLesson?'<button class="btn ghost" data-a="vlgo">Leer las lecciones</button>':'')+'<button class="btn" data-a="drgo" data-v="'+k+'">Practicar</button></div></div>';
}
function ruleOf(k){return EN_RULES.find(function(r){return r.dr===k})}
function ruleBox(r,open){return '<details class="rule a-none" id="rf-'+r.id+'"'+(open?' open':'')+'><summary><span>'+esc(r.t)+'</span></summary><div class="rule-body">'+r.b()+'</div></details>'}
function vRules(){
  if(ui.dr) return vDrill();
  var cur=ruleLevel(), ci=LV.indexOf(cur);
  var h='<p class="rules-intro">Las reglas están ordenadas por nivel, de lo simple a lo complejo. Empieza por tu nivel. Aprobar las prácticas de un nivel (8 de 10) cuenta para ese nivel en tu camino.</p>';
  LV.forEach(function(lv,i){
    var rs=EN_RULES.filter(function(r){return r.lv===lv});
    h+=lvHead(lv,i,ci);
    if(i>ci&&!(ui.rshow&&ui.rshow[lv])){h+='<button class="btn ghost wide" data-a="rshow" data-v="'+lv+'">Ver igual las reglas de '+lv+'</button>';return}
    rs.forEach(function(r){h+=ruleBox(r,false)+(r.dr?rcard(r.dr):'')});
    if(VDRILL[lv]) h+=rcard(VDRILL[lv]);
    if(!rs.length&&!VDRILL[lv]) h+='<p class="sub">Todavía no hay reglas para '+lv+'. Sigue con las conversaciones e historias.</p>';
  });
  return h;
}
// ---- Daily goal and activity log: S.days[YYYY-MM-DD]={n:answers,l:words that reached "learned"} ----
var GOALS=[10,20,30,50];
function today(){return fmt(new Date())}
var PRAISE=['Richtig!','Super!','Genau!','Sehr gut!','Perfekt!','Toll!'];
function fbk(ok,ans){return '<div class="fbk '+(ok?'ok':'bad')+'" role="status"><span class="ico" aria-hidden="true">'+(ok?'✓':'✕')+'</span>'+(ok?PRAISE[Math.floor(Math.random()*PRAISE.length)]:tl('Correct answer: <span>')+esc(ans)+'</span>')+'</div>'}
// Short answer sounds (Web Audio, no files). Off switch in Me → Progress.
var _ac=null;
function sfx(ok){
  exAns(ok);
  if(S.sfx===false) return;
  try{
    _ac=_ac||new (window.AudioContext||window.webkitAudioContext)();
    var t=_ac.currentTime, notes=ok?[[660,0],[880,.09]]:[[220,0],[196,.12]];
    notes.forEach(function(n){var o=_ac.createOscillator(),g=_ac.createGain();o.type=ok?'sine':'triangle';o.frequency.value=n[0];g.gain.setValueAtTime(0.0001,t+n[1]);g.gain.exponentialRampToValueAtTime(ok?0.18:0.12,t+n[1]+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+n[1]+0.18);o.connect(g);g.connect(_ac.destination);o.start(t+n[1]);o.stop(t+n[1]+0.2)});
  }catch(e){}
}
// "Check" with nothing typed: say why nothing happened instead of staying silent
function nudge(el){el.focus();toast(tl('Type your answer first'))}
function toast(msg){try{var o=document.querySelector('.toast');if(o)o.remove();var d=document.createElement('div');d.className='toast';d.setAttribute('role','status');d.textContent=msg;document.body.appendChild(d);setTimeout(function(){d.remove()},2700)}catch(e){}}
function heatmap(){
  var days=S.days||{}, start=new Date(); start.setHours(12,0,0,0); start.setDate(start.getDate()-((start.getDay()+6)%7)-7*15);
  var h=tl('<div class="heat" role="img" aria-label="Study days, last 16 weeks">'), now=Date.now();
  for(var i=0;i<16*7;i++){var d=new Date(start.getTime()+i*864e5), k=fmt(d), n=(days[k]&&days[k].n)||0;
    var c=d.getTime()>now?'fut':n>=goal()?'l3':n>=goal()/2?'l2':n>0?'l1':'';
    h+='<i class="'+c+'" title="'+k+': '+n+tl(' answers"></i>')}
  return h+tl('</div><div class="heatkey">Less <i style="background:var(--line)"></i><i class="l1" style="background:color-mix(in srgb,var(--das) 35%,var(--line))"></i><i style="background:color-mix(in srgb,var(--das) 65%,var(--line))"></i><i style="background:var(--das)"></i> Goal reached</div>');
}
function dayRec(d){S.days=S.days||{};d=d||today();return S.days[d]||(S.days[d]={n:0,l:0})}
function tick(learned){
  var x=dayRec(); x.n++; if(learned) x.l++;
  if(x.n===goal()) setTimeout(function(){toast(tl('🎉 Daily goal reached: ')+goal()+tl(' answers!'))},350);
  var cut=fmt(new Date(Date.now()-180*864e5));
  for(var k in S.days) if(k<cut) delete S.days[k];
  save();
}
function goal(){return S.goal||20}
function doneToday(){return (S.days&&S.days[today()]&&S.days[today()].n)||0}
function ring(n,g,size){
  var r=size/2-4, c=2*Math.PI*r, f=Math.min(1,n/g);
  return '<svg class="ring" viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'" aria-hidden="true"><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke="var(--line)" stroke-width="5"/>'+
    (f>0?'<circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke="'+(f>=1?'var(--das)':'var(--ink)')+'" stroke-width="5" stroke-linecap="round" stroke-dasharray="'+(c*f).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 '+size/2+' '+size/2+')"/>':'')+'</svg>';
}
// Current level at a glance: one chip per path goal, each opens that level's practice
function lvRow(){
  var lv=curLevel(); if(!lv) return '';
  var name=function(go){return go==='write'?tl('Words'):go==='verbs'?tl('Verbs'):go==='case'?tl('Cases'):go==='rules'?tl('Rules'):go==='read'?tl('Stories'):tl('Conversations')};
  return '<div class="lvrow" role="group" aria-label="'+tl('Your level')+'"><span class="lvt">'+lv+'</span>'+pathGoals(lv).map(function(x){var ok=x.have>=x.need;
    return '<button class="lvc'+(ok?' done':'')+'" data-a="go" data-v="'+x.go+'">'+name(x.go)+' '+(ok?'✓':Math.min(x.have,x.need)+'/'+x.need)+'</button>'}).join('')+'</div>';
}
function todayStrip(){
  var n=doneToday(), g=goal(), nx=nextUp(), left=g-n;
  var msg=n>=g?tl('Daily goal reached. Great work!'):(new Date().getHours()>=18&&n<g?tl('Only ')+left+tl(' more today to keep your goal.'):left+tl(' more answers to reach today’s goal.'));
  return '<div class="today">'+ring(n,g,44)+'<div class="tt"><b>'+Math.min(n,g)+' / '+g+tl(' today</b><span>')+esc(msg)+'</span>'+
    (nx?'<button class="link nx" data-a="go" data-v="'+nx.go+tl('">Next up: ')+esc(nx.t)+' →</button>':'')+'</div></div>';
}

// ---- Path A1 → B2 ----
var LV=['A1','A2','B1','B2'];
function halfN(){return allWords().filter(function(w){var k=S.know&&S.know[w.id];return k&&k.pd&&k.pd.length>0&&!isMastered(w.id)}).length}
function learnedN(){return allWords().filter(function(w){return isMastered(w.id)}).length}
function verbsN(){return VERBS.filter(function(v){return vbox(v)>=3}).length}
function pathGoals(lv){
  var i=LV.indexOf(lv);
  // Only this level's own content counts: its words, its verbs, its conversations, stories, case answers and rule practices
  var ws=allWords().filter(function(w){return wLevel(w)===lv}), vs=VERBS.filter(function(v){return vLevel(v)===lv});
  var W=Math.max(1,Math.min([60,90,110,120][i],Math.round(ws.length*0.8))), V=Math.max(1,Math.min([15,20,25,25][i],Math.round(vs.length*0.8))), C=0;
  var convs=CONVS.filter(function(c){return c.lv===lv}), st=STORIES.filter(function(s){return s.lv===lv});
  var g=[
    {t:tl('Master N LV words').replace('N',W).replace('LV',lv),have:ws.filter(function(w){return isMastered(w.id)}).length,need:W,go:'write'},
    {t:tl('Master N LV verbs').replace('N',V).replace('LV',lv),have:vs.filter(function(v){return vbox(v)>=3}).length,need:V,go:'verbs'},
    {t:tl('Finish the ')+lv+tl(' conversations'),have:convs.filter(function(c){return S.conv&&S.conv[c.id]}).length,need:convs.length,go:'conv'+lv},
    {t:tl('Read the ')+lv+tl(' stories'),have:st.filter(function(s){return S.read&&S.read[s.id]}).length,need:st.length,go:'read'}
  ].filter(function(x,k){return k>1||(k===0?ws.length:vs.length)});
  if(C) g.push({t:C+tl(' right answers in Cases'),have:(S.csl||{})[lv]||0,need:C,go:'case'});
  var ru=rpUnits(lv).filter(function(k){return !(DRILLS[k].extra&&S.lvDone&&S.lvDone[lv])}); if(ru.length) g.push({t:tl('Pass the ')+lv+tl(' rule practices'),have:ru.filter(rpPassed).length,need:ru.length,go:'rules'});
  return g.filter(function(x){return x.need>0});
}
function levelDone(lv){var gg=pathGoals(lv);return gg.length>0&&gg.every(function(x){return x.have>=x.need})}
function startIdx(){return S.place?LV.indexOf(S.place.lvl):0}
// Celebrate each level the moment its last goal is met (once per level; levels already done before this existed are noted silently)
function lvCheck(){
  if(!S.onb||ui.lvUp||busy()) return;
  var seed=!S.lvDone; S.lvDone=S.lvDone||{}; var got=null;
  for(var i=seed?0:startIdx();i<LV.length;i++){var lv=LV[i]; if(S.lvDone[lv]) continue; if(levelDone(lv)){S.lvDone[lv]=today(); if(!seed&&!got) got=lv} else if(!seed) break}
  if(seed||got) save();
  if(got){ui.lvUp=got;setTimeout(lvShow,250)}
}
function lvShow(){
  var lv=ui.lvUp; if(!lv||document.querySelector('.lvup')) return;
  var nx=LV[LV.indexOf(lv)+1], cols=['var(--der)','var(--die)','var(--das)','#f5b700','#8b5cf6'], cf='';
  for(var i=0;i<60;i++) cf+='<i style="left:'+(Math.random()*100).toFixed(1)+'%;background:'+cols[i%5]+';animation-delay:'+(Math.random()*0.9).toFixed(2)+'s;animation-duration:'+(2.2+Math.random()*1.6).toFixed(2)+'s;--dx:'+Math.round(Math.random()*160-80)+'px;--r:'+Math.round(Math.random()*720-360)+'deg"></i>';
  var d=document.createElement('div'); d.className='lvup'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true'); d.setAttribute('aria-labelledby','lvup-t');
  d.innerHTML='<div class="lvcf" aria-hidden="true">'+cf+'</div><div class="lvcard"><div class="lvbadge">'+lv+'</div><h2 id="lvup-t">'+tl('Level LV complete!').replace('LV',lv)+'</h2><p class="sub">'+
    (nx?tl('You met every LV goal. Next stop: NX.').replace('LV',lv).replace('NX',nx):tl('You finished the whole path up to B2. Wahnsinn!'))+'</p>'+
    '<button class="btn wide big" data-a="lvupx">'+(nx?tl('On to NX').replace('NX',nx)+' →':tl('Continue'))+'</button></div>';
  document.body.appendChild(d); gc('level-'+lv,1);
  if(S.sfx!==false){try{_ac=_ac||new (window.AudioContext||window.webkitAudioContext)();var t=_ac.currentTime;[[523,0],[659,.12],[784,.24],[1047,.4]].forEach(function(n){var o=_ac.createOscillator(),g=_ac.createGain();o.type='triangle';o.frequency.value=n[0];g.gain.setValueAtTime(0.0001,t+n[1]);g.gain.exponentialRampToValueAtTime(0.18,t+n[1]+0.02);g.gain.exponentialRampToValueAtTime(0.0001,t+n[1]+(n[1]>.3?0.6:0.2));o.connect(g);g.connect(_ac.destination);o.start(t+n[1]);o.stop(t+n[1]+0.7)})}catch(e){}}
  try{if(navigator.vibrate)navigator.vibrate([60,40,60,40,120])}catch(e){}
  var b=d.querySelector('button'); if(b) b.focus();
}
function curLevel(){for(var i=startIdx();i<LV.length;i++) if(!levelDone(LV[i])) return LV[i]; return null}
function nextUp(){
  if(!S.place) return {t:tl('take the placement test'),go:'place'};
  var lv=curLevel(); if(!lv) return null;
  var g=pathGoals(lv).find(function(x){return x.have<x.need});if(!g) return null;
  return {t:lv+' · '+g.t.charAt(0).toLowerCase()+g.t.slice(1)+' ('+Math.min(g.have,g.need)+'/'+g.need+')',go:g.go};
}

// ---- Placement test: PLACE is defined with the content above ----
function startPlace(){ui.pl={qs:PLACE.map(function(p){return {lv:p[0],q:p[1],ans:p[2][0],opts:shuffle(p[2])}}),i:0,right:{},picked:null};ui.tab=ui.msub='prog'}
function placeResult(r){
  var lvl='A1';
  for(var i=0;i<LV.length;i++){ if((r[LV[i]]||0)>=4) lvl=LV[Math.min(i+1,LV.length-1)]; else break; }
  if((r.B2||0)>=4) lvl='B2';
  return lvl;
}
function vPlace(){
  var q=ui.pl, h='';
  if(q.i>=q.qs.length){
    var lvl=S.place.lvl;
    h+=tl('<div class="done"><h2>Your level: ')+lvl+'</h2><p class="sub">'+LV.map(function(l){return l+': '+(q.right[l]||0)+'/5'}).join(' · ')+tl('</p><p class="sub">Your path starts at ')+lvl+'. '+(lvl!=='A1'?tl('The levels below are marked as passed, but you can still practice them.'):'')+tl('</p><button class="btn wide" data-a="plclose">See my path</button></div>');
    return h;
  }
  var c=q.qs[q.i];
  h+=tl('<div class="qtop"><button class="link exit" data-a="plclose">✕ Exit</button></div><div class="prog"><i style="width:')+Math.round(q.i/q.qs.length*100)+'%"></i></div>';
  h+=tl('<p class="qn">Placement test · ')+(q.i+1)+tl(' of ')+q.qs.length+'</p><div class="qprompt" style="margin:6px 0 14px">'+esc(c.q)+'</div><div class="opts">';
  c.opts.forEach(function(o){var cls='opt';if(q.picked!==null){if(o===c.ans)cls+=' ok';else if(o===q.picked)cls+=' bad'}h+='<button class="'+cls+'" data-a="plpick" data-v="'+esc(o)+'"'+(q.picked!==null?' disabled':'')+'>'+esc(o)+'</button>'});
  h+='</div>';
  if(q.picked!==null) h+=fbk(q.picked===c.ans,c.ans);
  if(q.picked!==null) h+='<button class="btn wide" data-a="plnext">'+(q.i+1>=q.qs.length?tl('See my level'):tl('Next'))+'</button>';
  else h+=tl('<button class="link" data-a="plpick" data-v="" style="margin-top:12px">I don’t know</button>');
  return h;
}

// ---- English → German: write the word ----
function wordKey(w){return (w.art?w.art+' ':'')+w.de}
function checkWord(v,w){
  var strip=function(s){return s.replace(/^(to|a|an|the) /,'')};
  var t=toks(strip(norm(v))).map(function(x){return x.n}), art=w.art, wd=strip(norm(w.de));
  var given=t.join(' '), full=wd;
  if(given===full) return {ok:true};
  var hasArt=art&&['der','die','das'].indexOf(t[0])>-1, rest=hasArt?t.slice(1).join(' '):given;
  var wordOk=rest===wd||(wd.length>=5&&lev(rest,wd)<=1);
  if(art&&wordOk&&!hasArt) return {ok:false,note:tl('Right word, but add the article.')};
  if(art&&wordOk&&t[0]!==art) return {ok:false,note:tl('Right word, wrong article.')};
  if(wordOk) return {ok:true,typo:rest!==wd};
  return {ok:false};
}

// ---- Cases: der/den/dem ----
var ART={def:{nom:{der:'der',die:'die',das:'das'},akk:{der:'den',die:'die',das:'das'},dat:{der:'dem',die:'der',das:'dem'}},
  ind:{nom:{der:'ein',die:'eine',das:'ein'},akk:{der:'einen',die:'eine',das:'ein'},dat:{der:'einem',die:'einer',das:'einem'}}};
var CASE_T=[
 ['nom','def','___ {N} ist hier.',tl('Who or what is here? The subject is in the Nominativ.')],
 ['nom','ind','Das ist ___ {N}.',tl('After “Das ist” the noun stays in the Nominativ.')],
 ['akk','def','Ich suche ___ {N}.',tl('suchen takes a direct object: Akkusativ.')],
 ['akk','ind','Wir brauchen ___ {N}.',tl('brauchen takes a direct object: Akkusativ.')],
 ['akk','def','Das ist für ___ {N}.',tl('für always takes the Akkusativ.')],
 ['akk','def','Ohne ___ {N} geht es nicht.',tl('ohne always takes the Akkusativ.')],
 ['akk','ind','Ich sehe ___ {N}.',tl('sehen takes a direct object: Akkusativ.')],
 ['dat','def','Was machen wir mit ___ {N}?',tl('mit always takes the Dativ.')],
 ['dat','def','Ich bin zufrieden mit ___ {N}.',tl('mit always takes the Dativ.')],
 ['dat','ind','Hier ist ein Foto von ___ {N}.',tl('von always takes the Dativ.')],
 ['dat','def','Hast du ein Problem mit ___ {N}?',tl('mit always takes the Dativ.')],
 ['dat','ind','Ich träume von ___ {N}.',tl('von always takes the Dativ.')]
];
var WEAK=/(e|ent|ant|ist|at|oge|af)$/;
function caseNoun(w){return w.art&&w.pl!=='pl'&&/^[A-ZÄÖÜ][a-zäöüß]+$/.test(w.de)&&!(w.art==='der'&&(WEAK.test(w.de)||/^(Herr|Mensch|Nachbar|Bauer|Held|Bär)$/.test(w.de)))}
function makeCase(w,ti){
  if(ti===undefined) ti=Math.floor(Math.random()*CASE_T.length);
  var T=CASE_T[ti], ans=ART[T[1]][T[0]][w.art];
  var opts=T[1]==='def'?['der','die','das','den','dem']:['ein','eine','einen','einem','einer'];
  var s=T[2].replace('{N}',w.de); if(s.indexOf('___')===0) ans=ans.charAt(0).toUpperCase()+ans.slice(1), opts=opts.map(function(o){return o.charAt(0).toUpperCase()+o.slice(1)});
  return {mode:'case',w:w,ti:ti,opts:opts,ans:ans,sent:s,why:T[3],cs:T[0]};
}
var CASE_NAME={nom:tl('Nominativ'),akk:tl('Akkusativ'),dat:tl('Dativ')};
function casesRule(){
  var row=function(k){return '<tr><th>'+CASE_NAME[k]+'</th><td class="a-der">'+ART.def[k].der+' / '+ART.ind[k].der+'</td><td class="a-die">'+ART.def[k].die+' / '+ART.ind[k].die+'</td><td class="a-das">'+ART.def[k].das+' / '+ART.ind[k].das+tl('</td><td>die / –</td></tr>')};
  return tl('<details class="rule a-none"><summary><span>Cases · der, den, dem</span></summary><div class="rule-body">')+
    tl('<p class="sub" style="margin:6px 0 0">The article changes with the job of the noun in the sentence.</p>')+
    tl('<div class="tbl"><table class="ctab"><thead><tr><th></th><th>der</th><th>die</th><th>das</th><th>plural</th></tr></thead><tbody>')+row('nom')+row('akk')+row('dat')+'</tbody></table></div>'+
    tl('<p class="vcap">Dativ plural: den … + n (mit den Kindern)</p>')+
    tl('<p class="rt">Nominativ: who does it (the subject)</p><div class="exs">')+exChips('Der Hund schläft., Die Frau arbeitet.')+'</div>'+
    tl('<p class="rt">Akkusativ: what you do something to (direct object)</p><div class="exs">')+exChips(tl('Ich sehe den Hund., Ich kaufe einen Tisch.'))+'</div>'+
    tl('<p class="rt">Dativ: to whom / with whom (indirect object)</p><div class="exs">')+exChips(tl('Ich helfe dem Mann., Ich gebe der Frau das Buch.'))+'</div>'+
    '<p class="rt">Always Akkusativ</p><p class="sub" style="margin:4px 0 0">durch, für, gegen, ohne, um</p>'+
    tl('<p class="rt">Always Dativ</p><p class="sub" style="margin:4px 0 0">aus, bei, mit, nach, seit, von, zu</p>')+
    tl('<p class="rt">Two-way: Akkusativ for movement, Dativ for place</p><p class="sub" style="margin:4px 0 0">an, auf, hinter, in, neben, über, unter, vor, zwischen. Ich gehe in den Park (where to?). Ich bin im Park (where?).</p>')+
    tl('<p class="warn">Only masculine (der) changes in the Akkusativ: der → den. In the Dativ, der → dem, die → der, das → dem.</p>')+
    tl('<button class="btn wide" data-a="go" data-v="case">Practice cases</button></div></details>');
}

// ---- Reading and listening: see STORIES above ----
function storyQs(s){return s.qs.map(function(q){return {q:q[0],ans:q[1][0],opts:shuffle(q[1])}})}
function startStory(s,listen){ui.rd={s:s,listen:!!listen,show:!listen,en:false,qs:storyQs(s),picks:{}};}
function myWords(){
  var ws=allWords().filter(function(w){var g=S.progress[w.id];return g&&g.box>=1&&g.box<5});
  var mw=mistKeys().map(function(k){return byId(k.split(':')[1].split('|')[0])}).filter(Boolean);
  var all=shuffle(mw).concat(shuffle(ws)), seen={}, out=[];
  all.forEach(function(w){if(!seen[w.id]&&out.length<12){seen[w.id]=1;out.push(w)}});
  if(out.length<6) shuffle(BASE).slice(0,12-out.length).forEach(function(w){out.push(w)});
  return out;
}
function vRead(){
  var h='', r=ui.rd;
  if(!r){
    h+=tl('<div class="panel"><h2>Read and listen</h2><p class="sub">Short stories with questions. Choose <b>Read</b> to see the text, or <b>Listen</b> to hear it first without the text.</p>');
    h+=tl('<div class="lvls" role="group" aria-label="Level">')+LV.map(function(l){return '<button data-a="rdl" data-v="'+l+'" aria-pressed="'+(ui.rdl===l)+'">'+l+'</button>'}).join('')+'</div>';
    h+=STORIES.filter(function(s){return s.lv===ui.rdl}).map(function(s){return '<div class="story"><b>'+(S.read&&S.read[s.id]?tl('<span class="tick" aria-label="done">✓ </span>'):'')+esc(s.t)+'</b><div class="row" style="margin-top:8px"><button class="btn ghost small" data-a="rdgo" data-v="'+s.id+tl('">Read</button><button class="btn ghost small" data-a="rdgo" data-v="')+s.id+tl('" data-l="1">Listen</button></div></div>')}).join('');
    if(SAMPLE) h+=tl('<div class="story"><b>A new story with your words</b><span class="exen">Claude writes a ')+ui.rdl+tl(' story using words you are learning.</span><button class="btn wide" data-a="rdnew"')+(ui.rdBusy?' disabled':'')+'>'+(ui.rdBusy?tl('Writing your story…'):tl('Write a new story'))+'</button>'+(ui.rdErr?'<p class="note">'+esc(ui.rdErr)+'</p>':'')+'</div>';
    return h+'</div>';
  }
  var s=r.s, all=r.qs.length, got=Object.keys(r.picks).length;
  h+=tl('<div class="qtop"><button class="link exit" data-a="rdexit">✕ Exit</button></div>');
  h+='<p class="qn">'+s.lv+(s.gen?tl(' · new story'):'')+' · '+(r.listen?tl('Listening'):tl('Reading'))+'</p><h2 class="st">'+esc(s.t)+'</h2>';
  h+=tl('<div class="row"><button class="btn" data-a="rdplay">▶ Listen</button><button class="btn ghost" data-a="rdstop">■ Stop</button></div>');
  if(r.show){
    h+='<p class="stext">'+esc(s.de)+'</p>';
    h+=r.en?'<p class="exen stext-en">'+esc(s.en)+'</p>':tl('<button class="link" data-a="rden">Show in English</button>');
    if(s.words) h+=tl('<p class="trkey">Your words in this story: ')+s.words.map(esc).join(', ')+'</p>';
  } else h+=tl('<p class="sub" style="margin-top:12px">Listen as often as you like, then answer. </p><button class="link" data-a="rdshow">Show the text</button>');
  h+=tl('<h3 class="rt" style="margin:18px 0 6px">Questions</h3>');
  r.qs.forEach(function(q,k){
    var p=r.picks[k];
    h+='<p class="qlabel" style="margin-top:12px">'+esc(q.q)+'</p><div class="opts">'+q.opts.map(function(o){var cls='opt';if(p!==undefined){if(o===q.ans)cls+=' ok';else if(o===p)cls+=' bad'}return '<button class="'+cls+'" data-a="rdpick" data-k="'+k+'" data-v="'+esc(o)+'"'+(p!==undefined?' disabled':'')+'>'+esc(o)+'</button>'}).join('')+'</div>';
  });
  if(got===all){
    var sc=r.qs.filter(function(q,k){return r.picks[k]===q.ans}).length;
    h+='<div class="done" style="margin-top:16px"><h2>'+sc+' / '+all+'</h2><p class="sub">'+(sc===all?tl('You understood everything.'):tl('Read it once more and listen again.'))+tl('</p><button class="btn wide" data-a="rdexit">More stories</button></div>');
  }
  return h;
}
function learnNav(){return subnav('lsub',ui.tab==='read'?'read':'learn',[['learn',tl('Cards')],['read',tl('Read & listen')]])}

// ---- Stats ----
function weekStart(d){var x=new Date(d);x.setHours(0,0,0,0);x.setDate(x.getDate()-((x.getDay()+6)%7));return x}
function bars(data,label,unit){
  var W=320,H=140,pad=22,max=Math.max.apply(null,data.map(function(d){return d.v}).concat([1])),bw=(W-8)/data.length;
  var top=Math.ceil(max/5)*5||5;
  var s='<svg viewBox="0 0 '+W+' '+(H+pad)+'" class="chart" role="img" aria-label="'+esc(label)+'">';
  s+='<line x1="0" x2="'+W+'" y1="'+H+'" y2="'+H+'" stroke="var(--line)"/>';
  s+='<text x="'+W+'" y="10" text-anchor="end" class="cl">'+top+'</text><line x1="0" x2="'+(W-24)+'" y1="6" y2="6" stroke="var(--line)" stroke-dasharray="2 4"/>';
  data.forEach(function(d,i){
    var h=d.v/top*(H-8), x=4+i*bw+bw*0.18, w=bw*0.64;
    s+='<g class="bar"><title>'+esc(d.k+': '+d.v+' '+unit)+'</title><rect x="'+(i*bw+4)+'" y="0" width="'+bw+'" height="'+H+'" fill="transparent"/>';
    if(d.v) s+='<path d="M'+x+' '+H+'V'+(H-h+4)+'q0-4 4-4h'+(w-8)+'q4 0 4 4V'+H+'z" fill="var(--ink)" opacity="'+(i===data.length-1?1:.55)+'"/>';
    s+='</g>';
    if(i%Math.ceil(data.length/7)===0||i===data.length-1) s+='<text x="'+(x+w/2)+'" y="'+(H+15)+'" text-anchor="middle" class="cl">'+esc(d.s)+'</text>';
  });
  return s+'</svg>';
}
function vStats(){
  var days=S.days||{}, h=tl('<h3 class="rt" style="margin:18px 0 4px">Words mastered per week</h3>');
  var wk=[], ws=weekStart(Date.now());
  for(var i=7;i>=0;i--){var a=new Date(ws);a.setDate(a.getDate()-7*i);var b=new Date(a);b.setDate(b.getDate()+7);var v=0;for(var k in days){var d=new Date(k+'T12:00');if(d>=a&&d<b)v+=days[k].l||0}wk.push({k:tl('Week of ')+a.getDate()+'.'+(a.getMonth()+1)+'.',s:a.getDate()+'.'+(a.getMonth()+1)+'.',v:v})}
  h+=bars(wk,tl('Words mastered per week, last 8 weeks'),tl('words'))+tl('<p class="vcap">A word counts when you type it correctly on ')+MASTER_DAYS+tl(' different days. Weeks before 11 October 2026 used the old flashcard rule.</p>');
  var dd=[];for(var j=13;j>=0;j--){var t=new Date(Date.now()-j*864e5), key=fmt(t);dd.push({k:key,s:t.getDate()+'.',v:(days[key]&&days[key].n)||0})}
  h+=tl('<h3 class="rt" style="margin:18px 0 4px">Study calendar</h3>')+heatmap();
  h+=tl('<h3 class="rt" style="margin:18px 0 4px">Answers per day</h3>')+bars(dd,tl('Answers per day, last 14 days'),tl('answers'));
  var cats={};
  allWords().forEach(function(w){var c=cats[w.cat]||(cats[w.cat]={n:0,seen:0,l:0,m:0});c.n++;var g=S.progress[w.id];if((g&&g.box)||isRecognized(w.id)){c.seen++;if(isMastered(w.id))c.l++}});
  mistKeys().forEach(function(k){var w=byId(k.split(':')[1].split('|')[0]);if(w&&cats[w.cat])cats[w.cat].m++});
  var list=Object.keys(cats).map(function(c){var x=cats[c];x.c=c;x.p=x.l/x.n;return x}).filter(function(x){return x.seen||x.m});
  list.sort(function(a,b){return (b.m/b.n-a.m/a.n)||(a.p-b.p)});
  h+=tl('<h3 class="rt" style="margin:18px 0 4px">Weakest categories</h3>');
  if(!list.length) h+=tl('<p class="sub">Start learning words to see your categories here.</p>');
  else h+=tl('<p class="sub" style="margin-bottom:6px">Most mistakes first. The bar shows how many words you have mastered.</p>')+list.slice(0,5).map(function(x){return '<div class="catrow"><div class="ch"><b>'+esc(catL(x.c))+'</b><span>'+x.l+'/'+x.n+tl(' mastered')+(x.m?' · '+x.m+PL(x.m,' mistake',' mistakes',' error',' errores'):'')+'</span></div><div class="prog"><i style="width:'+Math.round(x.p*100)+'%"></i></div></div>'}).join('');
  return h;
}

// ---- Backup: file export/import and sync to the Claude account ----
var CLOUD={db:null,uid:null,state:'off',busy:false,again:false,timer:null};
var LOCAL_FRESH=(function(){try{return !localStorage.getItem(KEY)}catch(e){return true}})();
function hasProg(o){return !!o&&['know','days','progress','verbs'].some(function(k){return o[k]&&Object.keys(o[k]).length>0})}
function cloudRef(){return CLOUD.db.doc('data/users/'+CLOUD.uid+'/save')}
function cloudPush(){
  if(!CLOUD.db) return;
  if(CLOUD.busy){CLOUD.again=true;return}
  CLOUD.busy=true;
  cloudRef().set({state:JSON.stringify(S),at:S.savedAt||Date.now()}).then(function(){CLOUD.state='on';CLOUD.at=Date.now()},function(e){CLOUD.state=e&&e.code==='quota_exceeded'?'full':'err'}).then(function(){CLOUD.busy=false;if(CLOUD.again){CLOUD.again=false;cloudPush()}if(ui.tab==='prog')render()});
}
function cloudSoon(){if(!CLOUD||!CLOUD.db)return;clearTimeout(CLOUD.timer);CLOUD.timer=setTimeout(cloudPush,2500)}
function adopt(o){var d=fresh();for(var k in d) if(o[k]===undefined) o[k]=d[k];S=o;migrateKnow();try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){};ui.session=null;ui.quiz=null}
function cloudInit(){
  try{ if(!(window.claude&&claude.use)) return; }catch(e){return}
  Promise.all([claude.use('db'),claude.use('user')]).then(function(r){
    var db=r[0], user=r[1]; if(!db||!user) return;
    return user.id().then(function(id){
      if(!id) return;
      CLOUD.db=db; CLOUD.uid=id; CLOUD.state='sync';
      return cloudRef().get().then(function(snap){
        var d=snap.exists&&snap.data();
        if(d&&d.state&&(LOCAL_FRESH||!hasProg(S)||(d.at||0)>(S.savedAt||0))){
          try{adopt(JSON.parse(d.state));CLOUD.state='on';CLOUD.at=Date.now();if(!ui.cv&&!ui.tr&&!ui.vq&&!ui.quiz&&!ui.rd&&!ui.pl)render();else stats();return}catch(e){}
        }
        cloudPush();
      });
    });
  }).catch(function(){CLOUD.state='err';CLOUD.db=null});
}
function backupData(){return JSON.stringify({app:'wordhoard',v:1,exported:new Date().toISOString(),state:S})}
function vBackup(){
  var st={off:tl('Saved only in this browser.'),sync:tl('Connecting to your Claude account…'),on:tl('Synced to your Claude account. Open the app on another device signed in to Claude and your progress follows you.'),err:tl('Could not reach your Claude account. Your progress is still saved in this browser.'),full:tl('Cloud storage is full. Export a backup file instead.')}[CLOUD.state];
  var h=tl('<h3 class="rt" style="margin:18px 0 4px">Backup</h3><p class="sub" style="margin-bottom:8px">')+(CLOUD.state==='on'?'☁ ':'')+esc(st)+'</p>';
  h+=tl('<div class="row"><button class="btn ghost" data-a="bkexp">Export file</button><button class="btn ghost" data-a="bkimp">Import file</button></div><input type="file" id="bk-file" accept=".json,application/json" hidden>');
  if(ui.bkMsg) h+='<p class="note">'+esc(ui.bkMsg)+'</p>';
  if(ui.bkPending) h+=tl('<div class="gres a-die" style="margin-top:10px"><p><b>Replace your progress?</b></p><p class="sub" style="margin:0">This backup is from ')+esc(ui.bkPending.when)+tl('. Your current progress in this browser will be replaced.</p><div class="row"><button class="btn ghost" data-a="bkno">Cancel</button><button class="btn" data-a="bkyes">Replace</button></div></div>');
  return h;
}

// ---- Progress tab ----
function vProg(){
  if(ui.pl) return vPlace();
  var h=meNav(), n=doneToday(), g=goal();
  h+='<div class="panel"><div class="goalrow">'+ring(n,g,72)+'<div><h2 style="margin:0">'+Math.min(n,g)+' / '+g+tl('</h2><p class="sub" style="margin:0">answers today · streak ')+shownStreak()+PL(shownStreak(),' day',' days',' día',' días')+'</p></div></div>';
  h+=tl('<p class="qlabel" style="margin-top:14px">Daily goal</p><div class="lvls" role="group" aria-label="Daily goal">')+GOALS.map(function(x){return '<button data-a="setgoal" data-v="'+x+'" aria-pressed="'+(g===x)+'">'+x+'</button>'}).join('')+'</div>';
  h+=tl('<p class="sub" style="margin:0">Every answer counts: cards, quizzes, sentences, verbs, conversations and stories.</p>');
  h+=tl('<div class="sfx"><span>Sounds for right and wrong answers</span><button class="chip" data-a="sfxt" aria-pressed="')+(S.sfx!==false)+'">'+(S.sfx!==false?tl('On'):tl('Off'))+'</button></div>'+
    '<div class="sfx"><span>'+tl('Short tips before exercises')+'</span><button class="chip" data-a="tipoff" aria-pressed="'+!S.tipsOff+'">'+(!S.tipsOff?tl('On'):tl('Off'))+'</button></div></div>';
  var cur=curLevel(), si=startIdx();
  h+=tl('<h3 class="rt" style="margin:18px 0 4px">Your path</h3>');
  h+='<p class="sub" style="margin-bottom:8px">'+(S.place?tl('Placement test: ')+S.place.lvl+'. ':tl('Take the placement test to find your starting level. '))+'<button class="link" data-a="go" data-v="place">'+(S.place?tl('Take it again'):tl('Start the test'))+'</button></p>';
  LV.forEach(function(lv,i){
    var gs=pathGoals(lv), done=levelDone(lv), skipped=i<si&&!done;
    h+='<details class="lvl'+(lv===cur?' cur':'')+'"'+(lv===cur?' open':'')+'><summary><b>'+lv+'</b><span>'+(done?tl('✓ Done'):skipped?tl('Passed in the test'):lv===cur?tl('You are here'):tl('Coming up'))+'</span></summary><div class="lvb">';
    gs.forEach(function(x){var f=Math.min(1,x.have/x.need);h+='<button class="goalline" data-a="go" data-v="'+x.go+'"><span>'+(f>=1?'✓ ':'')+esc(x.t)+'</span><span class="gn">'+Math.min(x.have,x.need)+'/'+x.need+'</span><div class="prog"><i style="width:'+Math.round(f*100)+'%"></i></div></button>'});
    if(lv===cur){var hn=halfN();h+='<p class="sub" style="margin:8px 2px 0">'+tl('A word is mastered when you type it right, with its article, in Practice → Write the word on 2 different days. A wrong answer starts it over.')+(hn?' '+tl('Halfway now: ')+hn+tl(' words (right on one day).'):'')+'</p><p class="sub" style="margin:6px 2px 0">'+tl('A verb is mastered after 3 right answers in a row in Practice → Verb forms, the verb lessons or verb challenges. A wrong answer or a skip starts it over.')+(vCounts('past')?'':' '+tl('In A1 only the present tense counts.'))+'</p>'}
    h+='</div></details>';
  });
  h+=vStats()+'<div id="bkp">'+vBackup()+'</div>';
  return h;
}

// ---- Navigation: Today · Learn · Practice · Challenges · Me. Other screens open from one of these and show a back link. ----
var HUBS={today:1,path:1,practice:1,chal:1,me:1};
function dueIds(){var now=Date.now();return allWords().filter(function(w){var g=S.progress[w.id];return g&&g.due<=now}).map(function(w){return w.id})}
// ---- Feedback: on the web it goes to Supabase (table comentarios, insert only); in Claude to this artifact's shared data ----
function fbSend(p){
  if(typeof SB_CFG!=='undefined'&&SB_CFG.url&&SB_CFG.anonKey)
    return fetch(SB_CFG.url+'/rest/v1/comentarios',{method:'POST',headers:{apikey:SB_CFG.anonKey,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(p)}).then(function(r){if(!r.ok)throw new Error('http '+r.status)});
  if(CLOUD.db) return CLOUD.db.doc('feedback/'+Date.now().toString(36)+Math.random().toString(36).slice(2,6)).set(p);
  return Promise.reject(new Error('offline'));
}
function vFeedback(){
  var f=ui.fb||(ui.fb={tipo:'idea',msg:'',email:(typeof CLOUD!=='undefined'&&CLOUD.email)||''});
  var h='<div class="panel fbp" id="fbp"><h2>'+tl('Send feedback')+'</h2>';
  if(f.ok) return h+'<p class="sub">'+tl('Thank you! Your comment was sent. It helps us make the app better.')+'</p><button class="btn ghost wide" data-a="fbnew">'+tl('Send another one')+'</button></div>';
  h+='<p class="sub">'+tl('An idea, something that doesn’t work, or anything else. We read every message.')+'</p>';
  h+='<div class="seg trseg" role="group" aria-label="'+tl('Type')+'">'+[['idea',tl('Idea')],['error',tl('Problem')],['otro',tl('Other')]].map(function(o){return '<button data-a="fbtipo" data-v="'+o[0]+'" aria-pressed="'+(f.tipo===o[0])+'">'+o[1]+'</button>'}).join('')+'</div>';
  h+='<textarea id="fb-msg" rows="4" maxlength="2000" placeholder="'+tl('Write your comment')+'" aria-label="'+tl('Your comment')+'" style="margin-top:12px">'+esc(f.msg)+'</textarea>';
  h+='<input id="fb-email" type="email" autocomplete="email" maxlength="254" placeholder="'+tl('Your email (optional, if you want an answer)')+'" aria-label="'+tl('Your email (optional)')+'" value="'+esc(f.email)+'" style="margin-top:8px;width:100%">';
  if(f.err) h+='<p class="note">'+esc(f.err)+'</p>';
  return h+'<button class="btn wide" data-a="fbsend"'+(f.busy?' disabled':'')+' style="margin-top:12px">'+(f.busy?tl('Sending…'):tl('Send'))+'</button></div>';
}
// ---- Anonymous, cookieless usage counts (GoatCounter, web only): which screens open and which steps finish ----
var GCQ=[], _scr='';
function gc(path,ev){var o={path:'app/'+path,title:path,event:!!ev};try{if(window.goatcounter&&goatcounter.count)goatcounter.count(o);else if(GCQ.length<30)GCQ.push(o)}catch(e){}}
window.gcFlush=function(){try{GCQ.splice(0).forEach(function(o){goatcounter.count(o)})}catch(e){}};
// ---- Exercise stats (anonymous, same GoatCounter): which exercises people start, finish or leave, and how well they do ----
// Paths: ex/<kind>/start, ex/<kind>/done, ex/<kind>/score-<band>, ex/<kind>/quit-after-<answers>. Closing the app mid-exercise sends nothing, so start minus done is every exercise left unfinished.
var EX=null;
function exNow(){
  var t=ui.tab,q;
  if(ui.pl&&(t==='prog'||!S.onb)) return {k:'placement',ref:ui.pl,fin:ui.pl.i>=ui.pl.qs.length};
  if(!S.onb) return null;
  if(t==='chal'){
    if(ui.ta) return {k:'chal-time',ref:ui.ta,fin:!!ui.ta.done};
    q=ui.vq&&ui.vq.ch?ui.vq:ui.quiz&&ui.quiz.ch?ui.quiz:null;
    return q&&{k:'chal-'+q.ch.k,ref:q,fin:q.i>=q.qs.length};
  }
  if(t==='quiz'&&ui.quiz){q=ui.quiz;return {k:'quiz-'+((q.qs[0]&&q.qs[0].mode)||ui.mode||'meaning'),ref:q,fin:q.i>=q.qs.length}}
  if(t==='verbs'&&ui.vq){q=ui.vq;return {k:q.les!=null?'verbs-lesson':q.learn?'verbs-new':q.review?'verbs-review':'verbs-practice',ref:q,fin:q.i>=q.qs.length}}
  if(t==='translate'&&ui.tr){q=ui.tr;return {k:'translate',ref:q,fin:q.i>=q.qs.length}}
  if(t==='conv'&&ui.cv){q=ui.cv;return {k:'conversation',ref:q,fin:q.i>=q.items.length}}
  if(t==='rules'&&ui.dr){q=ui.dr;return {k:'rule-'+q.k,ref:q,fin:q.i>=q.qs.length}}
  if(t==='learn'&&ui.session){q=ui.session;return {k:q.practice?'cards-practice':'cards',ref:q,fin:!q.queue.length}}
  if(t==='read'&&ui.rd){q=ui.rd;return {k:'story',ref:q,fin:Object.keys(q.picks).length>=q.qs.length}}
  return null;
}
// Every answer passes through sfx(ok), so this sees all of them once
function exAns(ok){
  var c=exNow(); if(!c) return;
  if(!EX||EX.ref!==c.ref){exEnd(null,true);EX={k:c.k,ref:c.ref,n:0,ok:0};gc('ex/'+c.k+'/start',1)}
  EX.n++; if(ok) EX.ok++;
}
// Runs on every render: the exercise finished, or the learner went somewhere else
function exEnd(c,force){
  if(!EX) return;
  var same=c&&c.ref===EX.ref;
  if(!force&&((same&&!c.fin)||(!c&&ui.ruleBack))) return;
  var e=EX; EX=null;
  if(same&&c.fin){var p=e.ok/e.n;gc('ex/'+e.k+'/done',1);gc('ex/'+e.k+'/score-'+(p>=.8?'80-100':p>=.5?'50-79':'0-49'),1)}
  else gc('ex/'+e.k+'/quit-after-'+(e.n<=2?'1-2':e.n<=5?'3-5':'6+'),1);
}
// ---- Coming back: one anonymous count per learner when they return 1, 7 and 30 days after their first day ----
function retCheck(){
  if(!S.onb) return;
  var d, r=S.ret;
  if(!r){
    var ds=Object.keys(S.days||{}).sort();
    r=S.ret={first:ds[0]||today(),sent:{}};
    d=dnum(today())-dnum(r.first);
    [1,7,30].forEach(function(n){if(d>=n)r.sent[n]=1}); // learners from before this count: their past returns are not counted again
    save(); return;
  }
  d=dnum(today())-dnum(r.first); r.sent=r.sent||{};
  var ch=0; [1,7,30].forEach(function(n){if(d>=n&&!r.sent[n]){r.sent[n]=1;ch=1;gc('ret/day-'+n,1)}});
  if(ch) save();
}
document.addEventListener('visibilitychange',function(){if(document.visibilityState==='visible')retCheck()});
function badge(){var b=document.getElementById('pbadge');if(!b)return;var n=mistKeys().length+dueIds().length;b.hidden=!n||!S.onb;b.textContent=n>99?'99+':n}
function stats(){
  badge();
  var on=S.lastDay===today();
  document.getElementById('stats').innerHTML=(ui.tab==='today'?'':'<div class="strk'+(on?' on':'')+'" title="'+(on?tl('Today’s session is done'):tl('Finish today’s session to keep your streak'))+'"><b>'+shownStreak()+'</b><span>'+tl('streak')+'</span></div>')+'<button class="help" data-a="help" aria-label="'+tl('Help')+'" aria-expanded="'+ui.help+'" aria-controls="helpbox">?</button>';
}
function helpHtml(){
  if(!ui.help) return '';
  return '<div class="helpbox" id="helpbox"><p><b>'+tl('Today')+'</b>: '+tl('your session for the day. Tap Continue and the app picks the next step: reviews, mistakes to recover, new words and a sentence.')+'</p>'+
  '<p><b>'+tl('Learn')+'</b>: '+tl('your path by level, in short units that mix words, verbs, a rule and a conversation.')+'</p>'+
  '<p><b>'+tl('Practice')+'</b>: '+tl('every exercise in one place. The red number counts cards due and mistakes to recover.')+'</p>'+
  '<p><b>'+tl('Me')+'</b>: '+tl('your progress, daily goal, language, words and backup.')+'</p>'+
  '<p><b>reconocidas</b>: palabras que respondiste bien en un ejercicio que la app revisa (Significados, Completar la frase, Traducir, Escribir la palabra). Las tarjetas de Aprender no cuentan aquí, porque esas las calificas tú.</p>'+
  tl('<p><b>mastered</b>: words you can produce. You typed the German word, with its article for nouns, correctly on ')+MASTER_DAYS+tl(' different days in Practice → Write the word. A wrong answer there starts the count again.</p>')+
  tl('<button class="link" data-a="help">Close</button></div>');
}
// An exercise is running: hide the back link so the screen stays calm
function busy(){
  var t=ui.tab;
  return (t==='quiz'&&ui.quiz&&ui.quiz.i<ui.quiz.qs.length)||(t==='translate'&&ui.tr&&ui.tr.i<ui.tr.qs.length)||(t==='verbs'&&((ui.vq&&ui.vq.i<ui.vq.qs.length)||ui.vl))||
    (t==='conv'&&ui.cv&&ui.cv.i<ui.cv.items.length)||(t==='learn'&&ui.session&&ui.session.queue.length&&!ui.session.exited)||(t==='rules'&&ui.dr&&ui.dr.i<ui.dr.qs.length)||(t==='read'&&ui.rd);
}
// "See the rule" from an exercise: remember where you were, so one tap brings you back to the same question
function markBack(){if(!ui.ruleBack)ui.ruleBack={tab:ui.tab,hub:ui.hub,lvf:ui.lvf,only:ui.only,planCur:ui.planCur,y:document.getElementById('main').scrollTop}}
function crumb(){
  if(ui.ruleBack&&(ui.tab==='rules'||(ui.tab==='verbs'&&ui.vlesson))) return '<button class="btn ghost wide backex" data-a="ruleback">← '+tl('Back to the exercise')+'</button>';
  var h=ui.hub; if(!h||h==='chal'||busy()) return '';
  var n={today:tl('Today'),path:tl('Learn'),practice:tl('Practice'),me:tl('Me')}[h];
  return '<button class="link crumb" data-a="tab" data-v="'+h+'">← '+n+'</button>';
}
function render(){
  _cmp=null;
  var m=document.getElementById('main');
  applySkin(); onbAuto();
  document.body.classList.toggle('onbm',!S.onb);
  var t=ui.tab;
  var scr=S.onb?(t==='prog'||t==='words'?'me-'+t:t):'welcome-'+(ui.onb||S.onbStep||1); exEnd(exNow());if(scr!==_scr){_scr=scr;window.wsScreen=scr;gc(scr)}
  m.innerHTML=!S.onb?vOnb():helpHtml()+(t==='today'?vToday():t==='path'?vPath():t==='practice'?vPractice():t==='chal'?vChTab():(t==='prog'||t==='words')?vMe():
    crumb()+(t==='mist'?vMist():t==='learn'?vLearn():t==='read'?vRead():t==='quiz'?vQuiz():t==='translate'?vTrans():t==='conv'?vConv():t==='verbs'?vVerbs():t==='rules'?vRules():vToday()));
  var grp=HUBS[t]?t:(t==='prog'||t==='words')?'me':ui.hub||'today';
  document.querySelectorAll('nav button').forEach(function(b){
    b.setAttribute('aria-current',b.dataset.tab===grp?'page':'false');
  });
  stats(); unitCont(m); tipCard(m); lvCheck();
  m.querySelectorAll('.chips').forEach(function(c){var b=c.querySelector('[aria-pressed="true"]');if(b&&b.offsetLeft+b.offsetWidth>c.clientWidth+c.offsetLeft)c.scrollLeft=b.offsetLeft-c.offsetLeft-16});
  try{if(matchMedia('(pointer:fine)').matches){var inp=m.querySelector('#verb-in,#w-in,#gap-in,#tr-in,#cv-in,#wd-in');if(inp&&document.activeElement!==inp)inp.focus({preventScroll:true})}}catch(e){}
}

// ---- Welcome: language, daily goal, where to start. Shown once, to new learners only. ----
function onbAuto(){
  if(!S.onb&&S.onbNext&&S.lang===LANG) S.onb=1;
  if(S.onb&&S.onbNext){var nx=S.onbNext;delete S.onbNext;save();if(nx==='test'){startPlace();ui.afterPl='path';ui.hub='today'}}
if(!S.onb&&(S.lastDay||S.place||Object.keys(S.progress||{}).length||Object.keys(S.know||{}).length||Object.keys(S.verbs||{}).length)){S.onb=1;save()}}
// The welcome follows the language picked in step 1 right away; the rest of the app switches when it reloads at the end
var OTES={"Step N of 3":"Paso N de 3","Your daily goal":"Tu meta diaria","A little every day works better than a lot once a week. You can change it later in Me.":"Un poco cada día funciona mejor que mucho una vez por semana. Puedes cambiarla después en Yo.","Relaxed":"Tranquila","Steady":"Normal","Serious":"Intensa","recommended":"recomendada","about N minutes":"unos N minutos"," answers a day":" respuestas al día","Where do you start?":"¿Desde dónde empiezas?","Start from zero":"Empezar desde cero","Begin at A1 with the most useful words.":"Empiezas en A1 con las palabras más útiles.","I already know some German":"Ya sé algo de inglés","Take a short placement test (20 questions) and start at your level.":"Haz una prueba de nivel corta (20 preguntas) y empieza en tu nivel.","Vocabulary for your job (optional)":"Vocabulario para tu trabajo (opcional)","Job":"Trabajo","You can change it any time.":"Puedes cambiarlo cuando quieras.","Data science":"Ciencia de datos","Medicine":"Medicina","IT / Software":"TI / Software","Business / Office":"Negocios / Oficina","Engineering":"Ingeniería","Teaching":"Docencia","Getting the app ready…":"Preparando la app…"};
function ot(x){return (ui.olang||S.lang||LANG)==='es'?(OTES[x]||tl(x)):x}
function vOnb(){
  if(ui.onbWait) return '<div class="onb"><p class="sub">'+ot('Getting the app ready…')+'</p></div>';
  var st=ui.onb||S.onbStep||2, h='<div class="onb"><p class="onbstep">'+ot('Step N of 3').replace('N',st-1).replace('3','2')+'</p>';
  if(st===1){
    h+='<h2>Willkommen! 👋</h2><p class="sub">'+(LANG==='es'?'Elige el idioma de la app · Choose the app language':'Choose the app language · Elige el idioma de la app')+'</p>';
    h+='<div class="onbopts"><button class="opt" data-a="onblang" data-v="es"><b>Español</b></button><button class="opt" data-a="onblang" data-v="en"><b>English</b></button></div>';
  } else if(st===2){
    h+='<h2>'+ot('Your daily goal')+'</h2><p class="sub">'+ot('A little every day works better than a lot once a week. You can change it later in Me.')+'</p><div class="onbopts">'+
      [[10,ot('Relaxed'),'5'],[20,ot('Steady'),'10'],[30,ot('Serious'),'15']].map(function(x){return '<button class="opt" data-a="onbgoal" data-v="'+x[0]+'"'+(x[0]===20?' aria-describedby="onbrec"':'')+'><b>'+x[1]+(x[0]===20?' <span class="rec" id="onbrec">'+ot('recommended')+'</span>':'')+'</b><span class="exen">'+ot('about N minutes').replace('N',x[2])+' · '+x[0]+ot(' answers a day')+'</span></button>'}).join('')+'</div>';
  } else {
    h+='<h2>'+ot('Where do you start?')+'</h2><div class="onbopts">'+
      '<button class="opt" data-a="onbgo" data-v="zero"><b>'+ot('Start from zero')+'</b><span class="exen">'+ot('Begin at A1 with the most useful words.')+'</span></button>'+
      '<button class="opt" data-a="onbgo" data-v="test"><b>'+ot('I already know some German')+'</b><span class="exen">'+ot('Take a short placement test (20 questions) and start at your level.')+'</span></button></div>';
    h+='<p class="qlabel" style="margin-top:22px">'+ot('Vocabulary for your job (optional)')+'</p><div class="chips wrap" role="group" aria-label="'+ot('Job')+'">'+JOBS.map(function(j){return '<button class="chip" data-a="onbjob" data-v="'+j.key+'" aria-pressed="'+(S.job===j.key)+'">'+esc(ot(j.name))+'</button>'}).join('')+'</div><p class="sub" style="margin-top:6px">'+ot('You can change it any time.')+'</p>';
  }
  return h+'</div>';
}

// ---- Today: streak and goal first, then one Continue button that runs the day's session ----
function todayPlan(){var p=S.plan;if(!p||p.day!==today())p=S.plan={day:today(),done:{}};return p}
function unseenLevel(){
  var lv=curLevel()||'A1', ids=[];
  pathUnits(lv).forEach(function(u){u.items.forEach(function(it){if(it.k==='w')it.ids.forEach(function(id){if(!S.progress[id])ids.push(id)})})});
  return ids;
}
function planSteps(){
  var P=todayPlan(), due=dueIds().length, op=mistKeys().length, nw=unseenLevel().length, lv=curLevel()||'A1', say=srOk();
  return [
    {k:'rev',t:tl('Review cards'),d:due?Math.min(due,20)+' '+PL(Math.min(due,20),'card due','cards due','tarjeta pendiente','tarjetas pendientes'):tl('No cards due right now'),skip:!due},
    {k:'opp',t:tl('Recover mistakes'),d:op?op+' '+PL(op,'mistake to recover','mistakes to recover','error por recuperar','errores por recuperar'):tl('No mistakes saved'),skip:!op},
    {k:'new',t:tl('New words · LV').replace('LV',lv),d:nw?tl('N new words from your path').replace('N',Math.min(8,nw)):tl('No new words left in this level'),skip:!nw},
    {k:'sent',t:say?tl('Say sentences out loud'):tl('Build sentences'),d:tl('3 sentences from your level')}
  ].map(function(x){x.done=!!P.done[x.k];if(x.done)x.skip=false;return x});
}
// The streak grows when today's session is finished, not with the first answer
function planDone(){var P=planSteps();return P.some(function(x){return x.done})&&!P.some(function(x){return !x.done&&!x.skip})}
function streakCheck(){if(S.lastDay!==today()&&planDone()){touch();save();setTimeout(function(){toast(tl('🔥 Today’s session done! Streak: N').replace('N',S.streak))},300)}}
function planNext(){return planSteps().find(function(x){return !x.done&&!x.skip})}
// When a step of today's session ends, mark it and offer the next one
function planHit(keys){
  if(ui.planCur&&keys.indexOf(ui.planCur)>-1){todayPlan().done[ui.planCur]=1;save();gc('step-'+ui.planCur,true);streakCheck();ui.planBox=ui.planCur;ui.planCur=null}
  if(!ui.planBox||keys.indexOf(ui.planBox)<0) return '';
  var nx=planNext();
  return '<div class="planbox"><p><b>✓ '+tl('Step done.')+'</b> '+(nx?tl('Next: ')+esc(nx.t):tl('That was the last step for today. 🎉'))+'</p><button class="btn wide" data-a="cont">'+(nx?tl('Continue'):tl('Back to Today'))+'</button></div>';
}
function planStart(k){
  ui.only=null;ui.lvf=null;ui.cat='All';ui.fopen=false;ui.planCur=k;ui.planBox=null;ui.hub='today';
  if(k==='rev'||k==='new'){
    var q=k==='rev'?shuffle(dueIds()).slice(0,20):unseenLevel().slice(0,8);
    ui.session={queue:q,total:q.length,done:0,practice:false};ui.flipped=false;ui.tab='learn';
  } else if(k==='opp'){
    var kind=mistKeys('mean').length+mistKeys('art').length+mistKeys('gap').length+mistKeys('prod').length+mistKeys('case').length?'words':mistKeys('tr').length?'tr':mistKeys('verb').length?'verbs':'conv';
    var t0=ui.tab; A.mrev({v:kind});
    if(ui.tab===t0){todayPlan().done.opp=1;save();ui.planCur=null;streakCheck();render()}
    return;
  } else {
    ui.trmo=srOk()?'say':'build';
    ui.tr={qs:shuffle(trPool()).slice(0,3),i:0,score:0,res:null,ans:'',hint:false};ui.tab='translate';
  }
  render();document.getElementById('main').scrollTop=0;
}
function vToday(){
  streakCheck();
  var n=doneToday(), g=goal(), st=shownStreak(), on=S.lastDay===today(), left=Math.max(0,g-n);
  var msg=n>=g?tl('Daily goal reached. Great work!'):on?left+tl(' more answers to reach today’s goal.'):tl('Finish today’s session to keep your streak');
  var h='<div class="panel hero"><div class="streakb'+(on?' on':'')+'"><span class="fl" aria-hidden="true">🔥</span><b>'+st+'</b><span>'+PL(st,'day in a row','days in a row','día seguido','días seguidos')+'</span></div>'+
    '<div class="goalb">'+ring(n,g,64)+'<div><b>'+Math.min(n,g)+' / '+g+'</b><span>'+tl('answers today')+'</span></div></div><p class="sub hmsg">'+esc(msg)+'</p></div>';
  var P=planSteps(), nx=planNext(), any=P.some(function(x){return x.done});
  h+='<div class="panel plan"><h2>'+tl('Your session today')+'</h2><ol class="steps">'+P.map(function(x){
    return '<li class="'+(x.done?'done':x===nx?'cur':x.skip?'skip':'')+'"><span class="sk" aria-hidden="true">'+(x.done?'✓':x.skip?'–':'')+'</span><span><b>'+esc(x.t)+'</b><span class="exen">'+esc(x.d)+'</span></span></li>'}).join('')+'</ol>';
  h+=nx?'<button class="btn wide big" data-a="cont">'+(any?tl('Continue'):tl('Start'))+'</button>':'<p class="sub">🎉 '+tl('You finished today’s session. Extra practice still counts toward your goal.')+'</p><button class="btn ghost wide" data-a="tab" data-v="practice">'+tl('Keep practicing')+'</button>';
  h+='</div>';
  if(typeof SB_CFG!=='undefined'&&!CLOUD.uid&&!(typeof sbSignedIn==='function'&&sbSignedIn())&&Object.keys(S.days||{}).length&&!S.acctNo)
    h+='<div class="panel acct"><b>'+tl('Save your progress')+'</b><p class="sub">'+tl('Create a free account to keep your progress safe and use it on your other devices.')+'</p><div class="row"><button class="btn ghost" data-a="acctno">'+tl('Not now')+'</button><button class="btn" data-a="acct">'+tl('Create account')+'</button></div></div>';
  var cl=curLevel();
  h+='<div class="panel lvp"><div class="lvph"><b>'+tl('Your level')+'</b><button class="link" data-a="tab" data-v="path">'+tl('See your path')+' →</button></div>'+(cl?lvRow():'<p class="sub">'+'Terminaste todos los niveles. Awesome!'+'</p>')+
    (S.place?'':'<button class="link" data-a="go" data-v="place" style="margin-top:8px">'+tl('Know some German already? Take the placement test')+'</button>')+'</div>';
  var c=CH(), keys=dailyKeys(), nd=keys.filter(function(k){return c.daily.done[k]}).length, w=wotd();
  h+='<div class="tlinks"><button class="tl2" data-a="tab" data-v="chal"><span class="hi" aria-hidden="true">🏆</span><span><b>'+tl('Today’s challenges')+'</b><span class="exen">'+nd+'/3 · +30 XP</span></span></button>'+
    '<button class="tl2" data-a="tab" data-v="chal"><span class="hi" aria-hidden="true">📅</span><span><b>'+tl('Word of the day')+'</b><span class="exen">'+esc(w.de)+'</span></span></button></div>';
  return h;
}

// ---- Practice: one place for every exercise, with reviews first ----
function vPractice(){
  var due=dueIds().length, op=mistKeys().length, n=due+op;
  var h='<div class="panel revp"><div class="revh"><h2>'+tl('Review now')+'</h2>'+(n?'<span class="cnt">'+(n>99?'99+':n)+'</span>':'')+'</div><p class="sub">'+
    (n?due+' '+PL(due,'card due','cards due','tarjeta pendiente','tarjetas pendientes')+tl(' and ')+op+' '+PL(op,'mistake to recover','mistakes to recover','error por recuperar','errores por recuperar')+'. '+tl('Reviewing right before you forget is what makes words stick.'):tl('Nothing to review right now. Learn something new and it will come back here at the right time.'))+'</p>'+
    (n?'<button class="btn wide" data-a="revnow">'+tl('Review now')+'</button>':'')+'</div>';
  var items=[['cards','🃏',tl('Flashcards'),tl('New words and reviews, one card at a time.')],
    ['quiz','✅',tl('Quick quiz'),'Significados, completar la frase y escribir la palabra.'],
    ['write','✍️',tl('Write the word'),tl('Type the German word. This is how words become mastered.')],
    ['sent','🗣️',tl('Sentences and speaking'),tl('Write, build or say whole sentences.')],
    ['conv','💬',tl('Conversation'),tl('Reply in short role-play chats.')],
    ['verbs','🔁',tl('Verb forms'),tl('Conjugate in the present, past and perfect.')],
    ['ta','⏱️',tl('Time attack'),tl('60 seconds: as many meanings as you can.')],
    ['mist','🎯',tl('My opportunities'),op?op+' '+PL(op,'mistake to recover','mistakes to recover','error por recuperar','errores por recuperar'):tl('Your wrong answers, ready to recover.')]];
  return h+'<div class="hub">'+items.map(function(x){return '<button class="hubc" data-a="pgo" data-v="'+x[0]+'"><span class="hi" aria-hidden="true">'+x[1]+'</span><b>'+x[2]+'</b><span class="exen">'+x[3]+'</span></button>'}).join('')+'</div>';
}

// ---- Learn: the path by level, in short units that mix words, verbs, a rule and a conversation or story ----
function pathUnits(lv){
  var all=allWords(), ws=all.filter(function(w){return wLevel(w)===lv}), vs=VERBS.filter(function(v){return vLevel(v)===lv});
  var chunks=[];
  CATS.concat(['Other']).forEach(function(c){
    var cw=ws.filter(function(w){return c==='Other'?CATS.indexOf(w.cat)<0:w.cat===c}); if(!cw.length) return;
    var k=Math.ceil(cw.length/12), sz=Math.ceil(cw.length/k);
    for(var i=0;i<cw.length;i+=sz) chunks.push({cat:c==='Other'?cw[0].cat:c,ids:cw.slice(i,i+sz).map(function(w){return w.id})});
  });
  var ex=[], ru=rpUnits(lv), cv=CONVS.filter(function(c){return c.lv===lv}), st=STORIES.filter(function(s){return s.lv===lv});
  for(var e=0;e<Math.max(ru.length,cv.length,st.length);e++){if(ru[e])ex.push({k:'r',key:ru[e]});if(cv[e])ex.push({k:'c',id:cv[e].id});if(st[e])ex.push({k:'s',id:st[e].id})}
  var U=chunks.length||Math.ceil(vs.length/4)||ex.length; if(!U) return [];
  var vsz=chunks.length?Math.max(2,Math.min(5,Math.ceil(vs.length/U))):4, units=[];
  for(var u=0;u<U;u++){
    var items=[];
    if(chunks[u]) items.push({k:'w',ids:chunks[u].ids});
    var vv=vs.slice(u*vsz,u*vsz+vsz); if(vv.length) items.push({k:'v',vs:vv});
    units.push({t:chunks[u]?catL(chunks[u].cat):vv.length?tl('Verbs'):'',items:items});
  }
  ex.forEach(function(x,k){var u=Math.min(U-1,Math.floor((k+1)*U/(ex.length+1)));units[u].items.push(x)});
  units.forEach(function(u){
    u.items.forEach(function(it){
      if(it.k==='w'){it.have=it.ids.filter(isRecognized).length;it.done=it.have>=Math.ceil(it.ids.length*0.8)}
      else if(it.k==='v') it.done=it.vs.every(function(v){return S.vlearn&&S.vlearn[v.inf]});
      else if(it.k==='r') it.done=rpPassed(it.key);
      else if(it.k==='c') it.done=!!(S.conv&&S.conv[it.id]);
      else it.done=!!(S.read&&S.read[it.id]);
    });
    if(!u.t){var f=u.items[0];u.t=f.k==='r'?tl(DRILLS[f.key].t):f.k==='c'?convById(f.id).t:STORIES.find(function(s){return s.id===f.id}).t}
    u.n=u.items.filter(function(it){return it.done}).length; u.done=u.n===u.items.length;
  });
  return units;
}
function uLabel(it){
  if(it.k==='w') return ['📖',tl('Words')+' · '+it.ids.length,it.done?'✓':it.have+'/'+it.ids.length];
  if(it.k==='v') return ['🔁',tl('Verbs')+': '+it.vs.map(function(v){return v.inf}).join(', '),it.done?'✓':''];
  if(it.k==='r') return ['📏',tl('Rule')+': '+tl(DRILLS[it.key].t),it.done?'✓':''];
  if(it.k==='c') return ['💬',tl('Conversation')+': '+convById(it.id).t,it.done?'✓':''];
  return ['📚',tl('Story')+': '+STORIES.find(function(s){return s.id===it.id}).t,it.done?'✓':''];
}
// After a unit activity: the next unfinished item in the same unit, then in the next units of that level
function unitTarget(){
  var c=ui.uCur; if(!c) return null; var U=pathUnits(c.lv), u=U[c.u]; if(!u) return null;
  for(var j=c.k+1;j<u.items.length;j++) if(!u.items[j].done) return {u:c.u,k:j,it:u.items[j]};
  for(j=0;j<c.k;j++) if(!u.items[j].done) return {u:c.u,k:j,it:u.items[j]};
  for(var x=c.u+1;x<U.length;x++) for(j=0;j<U[x].items.length;j++) if(!U[x].items[j].done) return {u:x,k:j,it:U[x].items[j]};
  return null;
}
function unitCont(m){
  if(!ui.uCur||ui.hub!=='path'||busy()||['learn','quiz','verbs','rules','conv','read'].indexOf(ui.tab)<0) return;
  var d=m.querySelector('.done'); if(!d) return;
  var t=unitTarget(), b=document.createElement('button'); b.className='btn wide big ucont'; b.dataset.a='unext';
  b.innerHTML=t?esc(tl('Continue'))+' →<span class="exen">'+esc(tl('Next: ')+uLabel(t.it)[1])+'</span>':esc(tl('See your path'))+' →';
  var f=d.querySelector('.btn'); if(f) f.parentNode.insertBefore(b,f); else d.appendChild(b);
}
// A short tip above the first question: the first time for each kind of exercise, then about one session in three

function tipObj(){
  var t=ui.tab, q;
  if(t==='quiz'&&(q=ui.quiz)&&q.qs&&q.qs[0]){var md=q.qs[0].mode;return [q,md==='article'?'art':md==='case'?'case':md==='write'?'write':'']}
  if(t==='verbs'&&ui.vq&&!ui.vlesson&&!ui.vl) return [ui.vq,'verb'];
  if(t==='translate'&&ui.tr&&ui.tr.qs) return [ui.tr,'sent'];
  if(t==='rules'&&ui.dr) return [ui.dr,'dr-'+ui.dr.k];
  return null;
}
function tipCard(m){
  var o=tipObj(); ui.tipObj=o&&o[0]; if(!o||!TIPS[o[1]]||S.tipsOff) return;
  var q=o[0], k=o[1], L=TIPS[k];
  if(q._tip===undefined){
    S.tips=S.tips||{}; var n=S.tips[k]||0; S.tips[k]=n+1; q._tip=false;
    if(n%3===0){S.tipsI=S.tipsI||{}; var i=(S.tipsI[k]||0)%L.length; S.tipsI[k]=i+1; q._tip=i}
    save();
  }
  if(q._tip===false||q.i!==0) return;
  var x=L[q._tip], d=document.createElement('div'); d.className='tip'; d.setAttribute('role','note');
  d.innerHTML='<span class="tipi" aria-hidden="true">💡</span><div><p>'+esc(tl(x[0]))+'</p><div class="tipr">'+(x[1]?ruleLink(x[1],x[2]||'',x[3]||''):'')+'<button class="link" data-a="tipx">'+tl('Okay, got it')+'</button></div></div>';
  var at=m.querySelector('.prog')||m.querySelector('.qtop'); if(at) at.parentNode.insertBefore(d,at.nextSibling); else m.insertBefore(d,m.firstChild);
}
function tipGone(){if(ui.tipObj&&ui.tipObj._tip!==undefined)ui.tipObj._tip=false}
function vPath(){
  var cl=curLevel(), lv=ui.pathLv||cl||'A1', U=pathUnits(lv), ci=U.findIndex(function(u){return !u.done}), nd=U.filter(function(u){return u.done}).length;
  var h='<div class="lvls" role="group" aria-label="'+tl('Level')+'">'+LV.map(function(l){return '<button data-a="plv" data-v="'+l+'" aria-pressed="'+(l===lv)+'">'+l+(levelDone(l)?' ✓':'')+'</button>'}).join('')+'</div>';
  h+='<p class="sub" style="margin:0 0 6px">'+(lv===cl?tl('Your level.')+' ':'')+tl('N of M units done').replace('N',nd).replace('M',U.length)+(lv===cl&&ci>-1?' · '+tl('next: unit N').replace('N',ci+1):'')+'</p><div class="prog"><i style="width:'+(U.length?Math.round(nd/U.length*100):0)+'%"></i></div>';
  if(!U.length) h+='<p class="sub">'+tl('There are no units at this level yet. Use the Library below.')+'</p>';
  var open=ui.uOpen!=null&&ui.uLv===lv?ui.uOpen:ci;
  U.forEach(function(u,i){
    h+='<details class="unit'+(u.done?' done':i===ci?' cur':'')+'"'+(i===open?' open':'')+'><summary><span class="un">'+(u.done?'✓':i+1)+'</span><b>'+esc(u.t)+'</b><span class="us">'+u.n+'/'+u.items.length+'</span></summary><div class="ubody">'+
      u.items.map(function(it,k){var L=uLabel(it);return '<button class="uitem'+(it.done?' ok':'')+'" data-a="ugo" data-v="'+i+'" data-k="'+k+'"><span aria-hidden="true">'+L[0]+'</span><span>'+esc(L[1])+'</span><span class="st">'+L[2]+'</span></button>'}).join('')+'</div></details>';
  });
  h+='<p class="sub" style="margin-top:10px">'+tl('A unit’s words count when you recognize 8 of every 10 in a checked exercise. Verbs count once you study them.')+'</p>';
  h+='<h3 class="rt" style="margin:20px 0 4px">'+tl('Library')+'</h3><div class="hub">'+[['vlessons','🧩',tl('Verb lessons'),tl('How German verbs work, step by step.')],['rules','📏',tl('Grammar rules'),tl('Genders, plurals, cases and more.')],['read','🎧',tl('Read & listen'),tl('Short stories with audio and questions.')],['conv','💬',tl('Conversations'),tl('All role-play chats by level.')]]
    .map(function(x){return '<button class="hubc" data-a="lgo" data-v="'+x[0]+'"><span class="hi" aria-hidden="true">'+x[1]+'</span><b>'+x[2]+'</b><span class="exen">'+x[3]+'</span></button>'}).join('')+'</div>';
  return h;
}

// ---- Me: numbers, progress and settings, my words ----
function meNav(){return subnav('msub',ui.tab,[['prog',tl('Progress')],['words',tl('My words')]])}
function vMe(){
  if(ui.pl) return vPlace();
  var all=allWords(), m=0, r=0;
  all.forEach(function(w){if(isMastered(w.id))m++;else if(isRecognized(w.id))r++});
  var h='<div class="mehead"><div><b>'+shownStreak()+'</b><span>'+tl('streak')+'</span></div><div><b>'+r+'</b><span>'+tl('recognized')+'</span></div><div><b>'+m+'/'+all.length+'</b><span>'+tl('mastered')+'</span></div></div>';
  
  return h+(ui.tab==='words'?meNav()+vWords():vProg());
}
var A={
  onblang:function(d){S.lang=d.v;ui.olang=d.v;S.onbStep=2;ui.onb=2;save();render()},
  onbgoal:function(d){S.goal=+d.v;S.onbStep=3;ui.onb=3;save();render()},
  onbjob:function(d){S.job=S.job===d.v?'':d.v;save();render()},
  onbgo:function(d){
    gc('welcome-done-'+d.v,true);S.ret={first:today(),sent:{}};
    delete S.onbStep;ui.onb=null;ui.tab=ui.hub='today';
    // A different language than the one the page loaded with: save, reload once, then open the test there
    if(S.lang&&S.lang!==LANG){S.onbNext=d.v;save();try{cloudPush()}catch(e){}ui.onbWait=true;render();
      setTimeout(function(){try{location.reload()}catch(e){}},700);
      setTimeout(function(){ui.onbWait=false;S.onb=1;save();render()},2500);return}
    S.onb=1;S.onbNext=d.v;save();render();document.getElementById('main').scrollTop=0},
  cont:function(){var s=planNext();ui.planBox=null;if(!s){ui.tab=ui.hub='today';render();document.getElementById('main').scrollTop=0;return}planStart(s.k)},
  acct:function(){ui.tab='prog';ui.msub='prog';ui.hub='me';render();var el=document.getElementById('bkp');if(el)el.scrollIntoView({block:'start'})},
  acctno:function(){S.acctNo=1;save();render()},
  fopen:function(){ui.fopen=!ui.fopen;render()},
  onlyx:function(){ui.uCur=null;ui.only=null;ui.quiz=null;ui.session=null;render()},
  revnow:function(){ui.only=null;ui.lvf=null;ui.cat='All';if(dueIds().length){var q=shuffle(dueIds()).slice(0,20);ui.session={queue:q,total:q.length,done:0,practice:false};ui.flipped=false;ui.tab='learn';render();document.getElementById('main').scrollTop=0}else A.mopen()},
  pgo:function(d){
    var v=d.v; ui.only=null; ui.lvf=null; ui.trmo=null;
    if(v==='cards'){ui.tab='learn';if(ui.session&&ui.session.exited)ui.session=null}
    else if(v==='quiz'){ui.tab='quiz';if(ui.mode==='write')ui.mode='meaning';ui.quiz=null;ui.msg=''}
    else if(v==='write'){ui.tab='quiz';ui.mode='write';ui.quiz=null;ui.msg=''}
    else if(v==='sent'){ui.tab='translate';ui.tr=null}
    else if(v==='conv'){ui.tab='conv';ui.cv=null}
    else if(v==='verbs'){ui.tab='verbs';ui.vmode='drill';ui.vq=null;ui.vl=null;ui.vlesson=false}
    else if(v==='ta'){ui.tab=ui.hub='chal';taStart()}
    else if(v==='mist'){A.mopen();return}
    render();document.getElementById('main').scrollTop=0;
  },
  plv:function(d){ui.pathLv=d.v;ui.uOpen=null;render()},
  ugo:function(d){
    var lv=ui.pathLv||curLevel()||'A1', u=pathUnits(lv)[+d.v], it=u&&u.items[+d.k]; if(!it) return;
    ui.lvf=null; ui.uOpen=+d.v; ui.uLv=lv; ui.uCur={lv:lv,u:+d.v,k:+d.k};
    if(it.k==='w'){
      var un=it.ids.filter(function(id){return !S.progress[id]}); ui.only=it.ids;
      if(un.length){ui.session={queue:un,total:un.length,done:0,practice:false,unit:1};ui.flipped=false;ui.tab='learn'}
      else {ui.tab='quiz';ui.mode='meaning';ui.quiz=null;startQuiz()}
    }
    else if(it.k==='v'){ui.vq=null;ui.vlesson=false;ui.vl={vs:it.vs,i:0};ui.tab='verbs'}
    else if(it.k==='r'){A.drgo({v:it.key});return}
    else if(it.k==='c'){startConv(it.id);ui.tab='conv'}
    else {var s=STORIES.find(function(x){return x.id===it.id});startStory(s,false);ui.tab='read'}
    render();document.getElementById('main').scrollTop=0;
  },
  uquiz:function(){ui.tab='quiz';ui.mode='meaning';ui.quiz=null;startQuiz();render();document.getElementById('main').scrollTop=0},
  unext:function(){
    var c=ui.uCur, t=unitTarget(); ui.uCur=null; ui.only=null;
    if(!t){ui.tab=ui.hub='path';render();document.getElementById('main').scrollTop=0;return}
    ui.pathLv=c.lv; A.ugo({v:t.u,k:t.k});
  },
  lgo:function(d){ui.uCur=null;
    if(d.v==='vlessons'){A.vlgo({});return}
    if(d.v==='rules'){A.go({v:'rules'});return}
    if(d.v==='read'){ui.tab='read';ui.rd=null;ui.rdl=curLevel()||'A1'}
    else {ui.tab='conv';ui.cv=null;ui.cvl=curLevel()||'A1'}
    render();document.getElementById('main').scrollTop=0;
  },
  fbtipo:function(d){ui.fb.tipo=d.v;render()},
  fbnew:function(){ui.fb=null;render();var el=document.getElementById('fbp');if(el)el.scrollIntoView({block:'start'})},
  fbsend:function(){
    var f=ui.fb; if(!f||f.busy) return; var msg=f.msg.trim(), em=f.email.trim();
    if(!msg){f.err=tl('Write your comment first.');render();return}
    if(em&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){f.err=tl('That email doesn’t look right. Fix it or leave it empty.');render();return}
    f.busy=true;f.err='';render();
    fbSend({mensaje:msg.slice(0,2000),tipo:f.tipo,email:em||null,idioma:LANG,nivel:curLevel()||'',origen:typeof SB_CFG!=='undefined'?'web':'claude'}).then(function(){
      f.busy=false;f.ok=true;f.msg='';gc('feedback-'+f.tipo,true);render();
    },function(){f.busy=false;f.err=tl('It couldn’t be sent. Check your connection and try again.');render()});
  },
  fbgo:function(){ui.tab=ui.msub='prog';render();var el=document.getElementById('fbp');if(el)el.scrollIntoView({block:'start'})},
  ruleback:function(){
    var b=ui.ruleBack; if(!b) return; ui.ruleBack=null;
    ui.vlesson=false; ui.vlFocus=null; ui.vlBack=null; ui.rFocus=null;
    ui.tab=b.tab; ui.hub=b.hub; ui.lvf=b.lvf; ui.only=b.only; ui.planCur=b.planCur;
    render(); document.getElementById('main').scrollTop=b.y;
  },
  lvupx:function(){var o=document.querySelector('.lvup');if(o)o.remove();ui.lvUp=null;ui.tab=ui.hub='path';ui.pathLv=null;ui.uOpen=null;render();document.getElementById('main').scrollTop=0},
  setlang:function(d){if(d.v===LANG)return;S.lang=d.v;save();try{location.reload()}catch(e){}},
  setjob:function(d){S.job=d.v;save();ui.tr=null;ui.pickJob=false;ui.session=null;ui.quiz=null;ui.msg='';render()},
  pickjob:function(){ui.pickJob=!ui.pickJob;render()},
  help:function(){ui.help=!ui.help;render();if(ui.help)document.getElementById('main').scrollTop=0},
  tab:function(d){if(ui.ruleBack){if(d.v===ui.ruleBack.hub||d.v===ui.ruleBack.tab){A.ruleback();return}ui.ruleBack=null}ui.uCur=null;srAbort();if(ui.tr)ui.tr.listening=false;if(d.v!=='chal'){if(ui.quiz&&ui.quiz.ch)ui.quiz=null;if(ui.vq&&ui.vq.ch)ui.vq=null;if(ui.ta){taStop();ui.ta=null}}ui.hub=d.v;ui.tab=d.v==='me'?(ui.msub==='words'?'words':'prog'):d.v;ui.only=null;ui.trmo=null;ui.planCur=null;ui.planBox=null;ui.lvf=null;ui.fopen=false;ui.err='';render();document.getElementById('main').scrollTop=0},
  wsub:function(d){ui.wsub=ui.tab=d.v;render()},
  chgo:function(d){chStart(d.v,'daily');ui.tab='chal';render();document.getElementById('main').scrollTop=0},
  chboss:function(){bossStart();ui.tab='chal';render();document.getElementById('main').scrollTop=0},
  chhome:function(){ui.quiz=null;ui.vq=null;taStop();ui.ta=null;render();document.getElementById('main').scrollTop=0},
  chchest:function(){chestOpen();ui.quiz=null;ui.vq=null;render();document.getElementById('main').scrollTop=0;var r=S.ch.chest.r;toast(r.freeze?tl('❄️ You found a streak freeze!'):tl('🎁 You found ')+r.xp+tl(' XP!'))},
  tastart:function(){taStart();render();document.getElementById('main').scrollTop=0},
  taexit:function(){taStop();ui.ta=null;render();document.getElementById('main').scrollTop=0},
  tapick:function(d){
    var t=ui.ta; if(!t||t.done||t.picked!==null) return;
    t.picked=d.v; var ok=d.v===t.q.ans; t.n++;
    mist('mean:'+t.q.w.id,ok); if(ok){t.ok++;t.pts+=10*chMult()}
    tick(); render();
    setTimeout(function(){if(ui.ta!==t||t.done) return; if(Date.now()>=t.end){taFinish();return} taNextQ(); if(ui.tab==='chal') render()},ok?350:900);
  },
  wdcheck:function(){
    var el=document.getElementById('wd-in'); if(!el) return;
    var v=el.value.trim(); if(!v){nudge(el);return}
    var w=wotd(), st=wotdState(); if(st.res) return;
    var r=checkWord(v,w), cw=wotdCustom(w); st.res={ok:r.ok,given:v};
    if(cw){mist('prod:'+cw.id,r.ok);if(!r.typo)prodAns(cw.id,r.ok)} else sfx(r.ok);
    if(r.ok){var c=CH();addXp(15);c.wotdN++;if(c.wotdN>=7)medal('wotd7')}
    tick(); render();
  },
  wdadd:function(){var w=wotd();if(wotdCustom(w))return;S.custom.push({id:'c'+Date.now(),cat:'Basics',art:w.art,de:w.de,en:w.en,ex:w.ex,exEn:w.exEn});save();toast(tl('Added to your words'));render()},
  skin:function(d){var c=CH();c.theme=d.v||'';save();render()},

  lsub:function(d){ui.lsub=ui.tab=d.v;render()},
  go:function(d){
    if(d.v==='rules'&&d.f) markBack();
    var v=d.v; ui.lvf=['write','verbs','case'].indexOf(v)>-1?curLevel():null;
    if(v==='place'){startPlace()}
    else if(v==='learn'){ui.tab=ui.lsub='learn'}
    else if(v==='verbs'){ui.tab='verbs';ui.vmode='drill';ui.vq=null;ui.vg='all';ui.vp='all'}
    else if(v==='read'){ui.tab=ui.lsub='read';ui.rd=null;ui.rdl=curLevel()||'A1'}
    else if(v==='write'){ui.tab='quiz';ui.mode='write';ui.quiz=null;ui.msg='';ui.cat='All'}
    else if(v==='case'){ui.tab='quiz';ui.mode='case';ui.quiz=null;ui.msg='';ui.cat='All'}
    else if(v==='rules'){ui.tab=ui.msub='rules';ui.dr=null;ui.rFocus=d.f||null;if(d.f==='#rf-cases'){ui.rshow=ui.rshow||{};ui.rshow.A2=true}}
    else if(v.indexOf('conv')===0){ui.tab=ui.wsub='conv';ui.cv=null;ui.cvl=v.slice(4)}
    render();document.getElementById('main').scrollTop=0;
    if(ui.rFocus){var el=document.querySelector(ui.rFocus);ui.rFocus=null;if(el){if(el.tagName==='DETAILS')el.open=true;el.scrollIntoView({block:'start'})}}
  },
  tipx:function(){render()},
  tipoff:function(){S.tipsOff=!S.tipsOff;save();render()},
  sfxt:function(){S.sfx=S.sfx===false;save();render();if(S.sfx)sfx(true)},
  setgoal:function(d){S.goal=+d.v;save();render()},
  drgo:function(d){var k=d.v||'contr';ui.dr={k:k,qs:shuffle(DRILLS[k].items).slice(0,10).map(function(c){return {q:c[0],ans:c[1],opts:shuffle([c[1]].concat(c[2])),why:c[3]}}),i:0,ok:0,picked:null};ui.tab=ui.msub='rules';render();document.getElementById('main').scrollTop=0},
  drpick:function(d){var q=ui.dr;if(!q||q.picked!==null)return;q.picked=d.v;var c=q.qs[q.i];var ok=d.v===c.ans;sfx(ok);if(ok)q.ok++;tick();save();render()},
  drnext:function(){var q=ui.dr;q.i++;q.picked=null;if(q.i>=q.qs.length){S.rp=S.rp||{};S.rp[q.k]=Math.max(S.rp[q.k]||0,q.ok);save()}render();document.getElementById('main').scrollTop=0},
  lvfx:function(){ui.lvf=null;ui.quiz=null;ui.vq=null;render()},
  rshow:function(d){ui.rshow=ui.rshow||{};ui.rshow[d.v]=true;render()},
  vlgo:function(d){if(d&&d.v!=null&&d.v!=='')markBack();ui.dr=null;ui.vlBack=ui.tab!=='verbs'?ui.tab:null;ui.vlFocus=d&&d.v!=null&&d.v!==''?+d.v:null;if(!ui.vq)ui.vmode='learn';ui.tab='verbs';ui.vlesson=true;render();var el=document.getElementById('vlf');if(el)el.scrollIntoView({block:'start'});else document.getElementById('main').scrollTop=0},
  drx:function(){ui.dr=null;render();document.getElementById('main').scrollTop=0},
  plpick:function(d){var q=ui.pl;if(!q||q.picked!==null)return;q.picked=d.v;var c=q.qs[q.i];sfx(d.v===c.ans);if(d.v===c.ans)q.right[c.lv]=(q.right[c.lv]||0)+1;render()},
  plnext:function(){var q=ui.pl;q.i++;q.picked=null;if(q.i>=q.qs.length){S.place={lvl:placeResult(q.right),at:today()};save()}render();document.getElementById('main').scrollTop=0},
  plclose:function(){ui.pl=null;if(ui.afterPl){ui.tab=ui.hub=ui.afterPl;ui.afterPl=null}render();document.getElementById('main').scrollTop=0},
  rdl:function(d){ui.rdl=d.v;ui.rdErr='';render()},
  rdgo:function(d){var s=STORIES.find(function(x){return x.id===d.v});if(!s)return;startStory(s,d.l);render();document.getElementById('main').scrollTop=0},
  rdplay:function(){if(ui.rd)speak(ui.rd.s.de)},
  rdstop:function(){try{speechSynthesis.cancel()}catch(e){}},
  rden:function(){ui.rd.en=true;render()},
  rdshow:function(){ui.rd.show=true;render()},
  rdpick:function(d){var r=ui.rd;if(!r||r.picks[d.k]!==undefined)return;r.picks[d.k]=d.v;sfx(d.v===r.qs[+d.k].ans);tick();
    if(Object.keys(r.picks).length===r.qs.length&&!r.s.gen){S.read=S.read||{};S.read[r.s.id]=1;save()}
    var y=document.getElementById('main').scrollTop;render();document.getElementById('main').scrollTop=y},
  rdexit:function(){try{speechSynthesis.cancel()}catch(e){};ui.rd=null;render();document.getElementById('main').scrollTop=0},
  rdnew:function(){
    if(!SAMPLE||ui.rdBusy) return;
    var lv=ui.rdl, ws=myWords(), len={A1:'60 to 90',A2:'90 to 130',B1:'120 to 160',B2:'150 to 200'}[lv];
    ui.rdBusy=true; ui.rdErr=''; render();
    var prompt='Write a short English reading text for a Spanish-speaking learner at CEFR level '+lv+' ('+len+' words). Use only grammar and vocabulary suitable for '+lv+'. '+
      'Use as many of these words as fit naturally: '+ws.map(wordKey).join(', ')+'. Topic: everyday life or work as a data scientist.\n'+
      'Answer with JSON only: {"title": "short English title", "de": "the English text", "en": "a '+(LANG==='es'?'Spanish':'English')+' translation", "used": ["the words from the list that you used, as given"], "questions": [{"q": "a comprehension question in '+(LANG==='es'?'Spanish':'English')+'", "options": ["the correct answer", "a wrong answer", "a wrong answer"]}]} with exactly 3 questions.';
    SAMPLE.json(prompt,{modelTier:'quick',cache:false}).then(function(j){
      if(!j||typeof j.de!=='string'||!Array.isArray(j.questions)||!j.questions.length) throw {code:'invalid_json'};
      var s={id:'gen',gen:true,lv:lv,t:String(j.title||'Neue Geschichte'),de:j.de,en:String(j.en||''),words:(j.used||[]).map(String).slice(0,12),
        qs:j.questions.slice(0,3).filter(function(q){return q&&q.q&&Array.isArray(q.options)&&q.options.length>=2}).map(function(q){return [String(q.q),q.options.map(String)]})};
      ui.rdBusy=false; startStory(s,false); render(); document.getElementById('main').scrollTop=0;
    }).catch(function(e){
      ui.rdBusy=false;
      if(e&&e.code==='not_granted') SAMPLE=null;
      ui.rdErr=e&&e.code==='rate_limited'?tl('Claude is busy right now. Try again in a little while.'):tl('Claude could not write a story this time. Try again later.');
      render();
    });
  },
  bkexp:function(){
    var name='wordhoard-backup-'+today()+'.json', data=backupData();
    function fallback(){try{var a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));a.download=name;document.body.appendChild(a);a.click();a.remove();ui.bkMsg=tl('Backup file saved.')}catch(e){ui.bkMsg=tl('This browser could not save the file.')}render()}
    var p=null; try{if(window.claude&&claude.use)p=claude.use('downloads')}catch(e){}
    if(!p){fallback();return}
    p.then(function(dl){
      if(!dl){fallback();return}
      return dl.save({filename:name,data:data}).then(function(){ui.bkMsg=tl('Backup file saved.');render()},function(e){ui.bkMsg=e&&e.code==='declined'?tl('Export cancelled.'):tl('The file could not be saved here.');render()});
    },fallback);
  },
  bkimp:function(){ui.bkMsg='';var f=document.getElementById('bk-file');if(f)f.click()},
  bkno:function(){ui.bkPending=null;render()},
  bkyes:function(){var p=ui.bkPending;if(!p)return;adopt(p.state);ui.bkPending=null;save();ui.bkMsg=tl('Backup restored.');render()},
  msub:function(d){ui.msub=ui.tab=d.v;render()},
  cvl:function(d){ui.cvl=d.v;render()},
  cvstart:function(d){startConv(d.v);render();document.getElementById('main').scrollTop=0},
  cvexit:function(){ui.planCur=null;if(ui.cv&&ui.cv.req)ui.cv.req.abort();ui.cv=null;render();document.getElementById('main').scrollTop=0},
  cven:function(){var el=document.getElementById('cv-in');if(el)ui.cv.ans=el.value;S.cvTr=S.cvTr===false;save();render()},
  cvhint:function(d){var q=ui.cv,el=document.getElementById('cv-in');if(el)q.ans=el.value;q.hint[d.v]=true;render();var e2=document.getElementById('cv-in');if(e2){e2.focus();e2.setSelectionRange(e2.value.length,e2.value.length)}},
  cvcheck:function(){
    var q=ui.cv, el=document.getElementById('cv-in'); if(!q||q.res||!el) return;
    var v=el.value.trim(); if(!v){nudge(el);return}
    q.ans=v;
    var it=q.items[q.i], t=it.c.turns[it.i], key='conv:'+it.c.id+'|'+it.i;
    function finish(r){
      if(ui.cv!==q) return;
      q.res=r; q.req=null;
      var credit=r.ok?(q.hint.m?0.5:1):0; q.score+=credit;
      mist(key,r.ok&&!q.hint.m);
      tick(); render();
    }
    if(!SAMPLE){finish(localConvCheck(v,t));return}
    q.res={loading:true}; render();
    var ctl=new AbortController(); q.req=ctl;
    SAMPLE.json(convPrompt(it,v),{modelTier:'quick',cache:false,signal:ctl.signal}).then(function(j){
      if(!j||typeof j.ok!=='boolean') throw {code:'invalid_json'};
      finish({ai:true,ok:j.ok,corrected:String(j.corrected||''),feedback:String(j.feedback||'')});
    }).catch(function(e){
      if(e&&e.code==='cancelled') return;
      if(e&&e.code==='not_granted') SAMPLE=null;
      var r=localConvCheck(v,t);
      r.err=e&&e.code==='rate_limited'?tl('Claude is busy right now, so this was checked against the model answer.'):tl('Claude could not check this one, so it was checked against the model answer.');
      finish(r);
    });
  },
  cvskip:function(){var q=ui.cv; if(!q||q.res) return; var it=q.items[q.i]; q.ans=''; q.res={skip:true,ok:false}; mist('conv:'+it.c.id+'|'+it.i,false); render()},
  cvnext:function(){
    var q=ui.cv, it=q.items[q.i], t=it.c.turns[it.i], r=q.res;
    q.log.push({u:q.ans||t.m,c:r.skip||!q.ans?t.m:(r.ai&&r.corrected?r.corrected:q.ans)});
    q.i++; q.res=null; q.ans=''; q.hint={}; q.en=false;
    if(q.i>=q.items.length&&!q.review){S.conv=S.conv||{};S.conv[it.c.id]=1;save()}
    render(); document.getElementById('main').scrollTop=0;
  },
  cat:function(d){ui.cat=d.v;ui.fopen=false;ui.pickJob=false;ui.tr=null;ui.trMsg='';ui.session=null;ui.quiz=null;ui.msg='';render()},
  rev:function(){S.reverse=!S.reverse;save();ui.flipped=false;render()},
  flip:function(){if(!ui.flipped){ui.flipped=true;render()}},
  again:function(){grade(false)},
  good:function(){grade(true)},
  practice:function(){buildSession(true);render()},
  say:function(d){
    var id=d.id||(ui.session&&ui.session.queue[0]);
    var w=id&&byId(id);
    if(w) speak(d.ex?w.ex:(w.art?w.art+' ':'')+w.de);
  },
  mode:function(d){ui.mode=d.v;ui.msg='';render()},
  qstart:function(){ui.quiz=null;startQuiz();render()},
  qpick:function(d){
    var q=ui.quiz; if(q.picked!==null) return;
    q.picked=d.v;
    var cq=q.qs[q.i], okk=d.v===cq.ans;
    if(okk) q.score++;
    if(cq.mode==='case'){mist('case:'+cq.w.id+'|'+cq.ti,okk);if(okk){S.cs=(S.cs||0)+1;var cl=curLevel();if(cl){S.csl=S.csl||{};S.csl[cl]=(S.csl[cl]||0)+1}}}
    else mist((cq.mode==='article'?'art:':'mean:')+cq.w.id,okk);
    tick(); render();
  },
  gcheck:function(){
    var q=ui.quiz, el=document.getElementById('gap-in'); if(!q||q.picked!==null||!el) return;
    var v=el.value.trim(); if(!v){nudge(el);return}
    q.picked=v;
    var gok=norm(v)===norm(q.qs[q.i].ans);
    if(gok) q.score++;
    mist('gap:'+q.qs[q.i].w.id,gok);
    tick(); render();
  },
  wcheck:function(){
    var q=ui.quiz, el=document.getElementById('w-in'); if(!q||q.picked!==null||!el) return;
    var v=el.value.trim(); if(!v){nudge(el);return}
    var cur=q.qs[q.i]; q.picked=v; q.res=checkWord(v,cur.w);
    if(q.res.ok) q.score++;
    mist('prod:'+cur.w.id,q.res.ok); if(!q.res.typo) prodAns(cur.w.id,q.res.ok); tick(); render();
  },
  wskip:function(){var q=ui.quiz; if(!q||q.picked!==null) return; q.picked='';q.res={ok:false};mist('prod:'+q.qs[q.i].w.id,false);prodAns(q.qs[q.i].w.id,false);render()},
  gskip:function(){var q=ui.quiz; if(!q||q.picked!==null) return; q.picked='';mist('gap:'+q.qs[q.i].w.id,false);render()},
  trstart:function(){startTrans();render()},
  trhint:function(){var q=ui.tr,el=document.getElementById('tr-in');if(el)q.ans=el.value;q.hint=true;render();var e2=document.getElementById('tr-in');if(e2)e2.focus()},
  trcheck:function(){
    var q=ui.tr; if(!q||q.res) return;
    if(trm()==='build'){if(!q.tiles||q.pick.length<q.tiles.length){toast(tl('Use all the words first'));return} trDone(q,q.pick.map(function(k){return q.qs[q.i].ex.split(/\s+/).filter(Boolean)[k]}).join(' ')); render(); return}
    var el=document.getElementById('tr-in'); if(!el) return;
    var v=el.value.trim(); if(!v){nudge(el);return}
    trDone(q,v); render();
  },
  trm:function(d){ui.trmo=null;S.trm=d.v;save();ui.trMsg='';render()},
  tadd:function(d){var q=ui.tr;if(!q||q.res)return;var k=+d.v;if(q.pick.indexOf(k)<0)q.pick.push(k);render()},
  tdel:function(d){var q=ui.tr;if(!q||q.res)return;q.pick.splice(+d.v,1);render()},
  trlisten:function(){listen()},
  trstop:function(){srStop()},
  trredo:function(){var q=ui.tr;if(!q)return;q.heard='';q.sess='';if(q.listening){srAbort();srStart(q)}var el=document.getElementById('sr-live');if(el){el.textContent='…';el.classList.add('empty')}},
  tragain:function(){var q=ui.tr;if(!q)return;q.again=true;q.res=null;listen()},
  trreveal:function(){var q=ui.tr;if(q){q.rev=true;render()}},
  trself:function(d){var q=ui.tr;if(!q||q.res)return;var ok=d.v==='1';sfx(ok);if(ok)q.score++;tick();q.res=checkTrans(ok?q.qs[q.i].ex:'',q.qs[q.i].ex);q.res.self=1;A.trnext()},
  trskip:function(){var q=ui.tr; if(!q||q.res) return; srAbort(); q.listening=false; q.res=checkTrans('',q.qs[q.i].ex);if(!q.again)mist('tr:'+q.qs[q.i].id,false);render()},
  trnext:function(){srAbort();var q=ui.tr;q.i++;q.res=null;q.ans='';q.hint=false;q.tiles=null;q.pick=[];q.rev=false;q.again=false;q.srMsg='';render();document.getElementById('main').scrollTop=0},
  mopen:function(){ui.tab=ui.msub='mist';if(ui.ta){taStop();ui.ta=null}ui.rd=null;ui.quiz=null;ui.tr=null;ui.vq=null;ui.cv=null;ui.confirmClear=false;render();document.getElementById('main').scrollTop=0},
  mclose:function(){ui.tab=ui.hub||'today';render()},
  mclear:function(){if(!ui.confirmClear){ui.confirmClear=true;render();return}S.mist={};save();ui.confirmClear=false;render()},
  mrev:function(d){
    var keys=shuffle(mistKeys()), qs=[];
    if(d.v==='words'){
      keys.forEach(function(k){
        var kind=k.split(':')[0]; if(['mean','art','gap','prod','case'].indexOf(kind)<0||qs.length>=15) return;
        var rp=k.slice(kind.length+1).split('|'), w=byId(rp[0]); if(!w) return;
        if(kind==='prod'){qs.push(makeQ(w,'write'));return}
        if(kind==='case'){if(CASE_T[+rp[1]])qs.push(makeCase(w,+rp[1]));return}
        if(kind==='gap'&&!gapFor(w)) return;
        if(kind==='art'&&!w.art) return;
        qs.push(makeQ(w,kind==='mean'?'meaning':kind==='art'?'article':'gap'));
      });
      if(!qs.length) return;
      ui.quiz={qs:qs,i:0,score:0,picked:null,review:true}; ui.tab='quiz';
    } else if(d.v==='tr'){
      keys.forEach(function(k){if(k.indexOf('tr:')!==0||qs.length>=15) return; var w=byId(k.slice(3)); if(w&&w.ex&&w.exEn) qs.push(w)});
      if(!qs.length) return;
      ui.tr={qs:qs,i:0,score:0,res:null,ans:'',hint:false,review:true}; ui.tab=ui.wsub='translate';
    } else if(d.v==='conv'){
      keys.forEach(function(k){if(k.indexOf('conv:')!==0||qs.length>=15) return; var a=k.slice(5).split('|'), c=convById(a[0]); if(c&&c.turns[+a[1]]) qs.push({c:c,i:+a[1]})});
      if(!qs.length) return;
      ui.cv={items:qs,i:0,score:0,ans:'',hint:{},en:false,res:null,log:[],review:true}; ui.tab=ui.wsub='conv';
    } else {
      keys.forEach(function(k){if(k.indexOf('verb:')!==0||qs.length>=15) return; var a=k.slice(5).split('|'), v=VERBS.find(function(x){return x.inf===a[0]}); if(v) qs.push({v:v,t:a[1],p:+a[2]})});
      if(!qs.length) return;
      ui.vq={qs:qs,i:0,score:0,res:null,review:true}; ui.tab='verbs';
    }
    render();document.getElementById('main').scrollTop=0;
  },
  vsay:function(d){if(d.t) speak(d.t)},
  lexit:function(){ui.planCur=null;if(ui.session){ui.session.exited=true;ui.flipped=false};render();document.getElementById('main').scrollTop=0},
  lresume:function(){ui.session=null;render()},
  qexit:function(){ui.planCur=null;ui.quiz=null;render();document.getElementById('main').scrollTop=0},
  trexit:function(){srAbort();ui.planCur=null;ui.tr=null;ui.trMsg='';render();document.getElementById('main').scrollTop=0},
  vexit:function(){ui.planCur=null;ui.vq=null;render();document.getElementById('main').scrollTop=0},
  vgroup:function(d){ui.vg=d.v;render()},
  vptype:function(d){ui.vp=d.v;if(d.v!=='all')ui.vt='perf';render()},
  vtense:function(d){ui.vt=d.v;render()},
  vlpr:function(d){var k=+d.v,qs=lessonQs(k);if(!qs.length)return;ui.vq={qs:qs,i:0,score:0,res:null,les:k};ui.vl=null;ui.vlesson=false;ui.vlFocus=null;ui.tab='verbs';render();document.getElementById('main').scrollTop=0},
  vlback:function(d){ui.vq=null;ui.vlesson=true;ui.vlFocus=+d.v;render();var el=document.getElementById('vlf');if(el)el.scrollIntoView({block:'start'})},
  vstart:function(){startVerbs();render()},
  vreset:function(){ui.vq=null;render()},
  vcheck:function(){
    var q=ui.vq, el=document.getElementById('verb-in'); if(!q||q.res||!el) return;
    var val=el.value.trim(); if(!val){nudge(el);return}
    var c=q.qs[q.i], ok=vnorm(val)===vnorm(vForm(c.v,c.t,c.p));
    q.res={ok:ok,given:val}; if(ok) q.score++;
    mist('verb:'+c.v.inf+'|'+c.t+'|'+c.p,ok);
    S.verbs=S.verbs||{}; if(vCounts(c.t)) S.verbs[c.v.inf]=ok?Math.min(5,vbox(c.v)+1):0;
    tick(); render();
  },
  vskip:function(){
    var q=ui.vq; if(!q||q.res) return; var c=q.qs[q.i];
    q.res={ok:false,given:''}; S.verbs=S.verbs||{}; if(vCounts(c.t)) S.verbs[c.v.inf]=0; mist('verb:'+c.v.inf+'|'+c.t+'|'+c.p,false); render();
  },
  vmode:function(d){ui.vmode=d.v;render()},
  vlesson:function(){if(ui.vlesson&&ui.ruleBack){A.ruleback();return}ui.vlesson=!ui.vlesson;if(!ui.vlesson){ui.vlFocus=null;if(ui.vlBack){ui.tab=ui.vlBack;ui.vlBack=null}}render();document.getElementById('main').scrollTop=0},
  vlstart:function(d){var vs=d.r?shuffle(vPool()).slice(0,5):vlPool().slice(0,5);if(!vs.length)return;ui.vq=null;ui.vl={vs:vs,i:0};render();document.getElementById('main').scrollTop=0},
  vlstudy:function(){var vs=ui.vq&&ui.vq.learn;if(!vs)return;ui.vq=null;ui.vl={vs:vs,i:0};render();document.getElementById('main').scrollTop=0},
  vlnext:function(){ui.vl.i++;render();document.getElementById('main').scrollTop=0},
  vlprev:function(){ui.vl.i--;render();document.getElementById('main').scrollTop=0},
  vlexit:function(){ui.vl=null;render();document.getElementById('main').scrollTop=0},
  vlprac:function(){var vs=ui.vl.vs;ui.vl=null;startVlPractice(vs);render();document.getElementById('main').scrollTop=0},
  vnext:function(){ui.vq.i++;ui.vq.res=null;if(ui.vq.learn&&ui.vq.i>=ui.vq.qs.length){S.vlearn=S.vlearn||{};ui.vq.learn.forEach(function(v){S.vlearn[v.inf]=1});save()}render();document.getElementById('main').scrollTop=0},
  qnext:function(){ui.quiz.i++;ui.quiz.picked=null;render()},
  qreset:function(){ui.quiz=null;render()},
  qart:function(){ui.tab='quiz';ui.mode='article';ui.quiz=null;ui.msg='';render();document.getElementById('main').scrollTop=0},
  addt:function(){ui.adding=!ui.adding;ui.err='';render()},
  addsave:function(){
    var de=document.getElementById('f-de').value.trim();
    var en=document.getElementById('f-en').value.trim();
    if(!de||!en){ui.err=tl('Enter both the German word and its meaning.');
      var keep={a:document.getElementById('f-art').value,x:document.getElementById('f-ex').value,c:document.getElementById('f-cat').value};
      render();
      document.getElementById('f-de').value=de;document.getElementById('f-en').value=en;
      document.getElementById('f-art').value=keep.a;document.getElementById('f-ex').value=keep.x;document.getElementById('f-cat').value=keep.c;
      return;
    }
    S.custom.push({id:'c'+Date.now(),cat:document.getElementById('f-cat').value,art:document.getElementById('f-art').value,de:de,en:en,ex:document.getElementById('f-ex').value.trim(),exEn:''});
    save();
    ui.adding=false;ui.err='';ui.session=null;ui.quiz=null;
    render();
  },
  del:function(d){
    if(ui.confirmDel!==d.id){ui.confirmDel=d.id;render();return}
    S.custom=S.custom.filter(function(w){return w.id!==d.id});
    delete S.progress[d.id];
    ui.confirmDel=null;ui.session=null;ui.quiz=null;
    save();render();
  }
};

document.addEventListener('click',function(e){
  var t=e.target.closest('[data-a]');
  if(!t) return;
  if(!/^(go|vlgo|vsay|ruleback|vlesson|tipoff)$/.test(t.dataset.a)) tipGone();
  var f=A[t.dataset.a];
  if(f) f(t.dataset,e);
});
document.addEventListener('keydown',function(e){
  if(e.key==='Enter'&&/^(tr-in|verb-in|w-in|gap-in)$/.test(e.target.id)) tipGone();
  if(e.key==='Enter'&&!e.shiftKey&&e.target.id==='tr-in'){e.preventDefault();A.trcheck();return}
  if(e.key==='Enter'&&!e.shiftKey&&e.target.id==='cv-in'){e.preventDefault();A.cvcheck();return}
  if(e.key==='Enter'&&e.target.id==='verb-in'){e.preventDefault();A.vcheck();return}
  if(e.key==='Enter'&&e.target.id==='w-in'){e.preventDefault();A.wcheck();return}
  if(e.key==='Enter'&&e.target.id==='gap-in'){e.preventDefault();A.gcheck();return}
  if(e.key==='Enter'&&e.target.id==='wd-in'){e.preventDefault();A.wdcheck();return}
  if((e.key==='Enter'||e.key===' ')&&e.target.classList&&e.target.classList.contains('card')){
    e.preventDefault();A.flip();return;
  }
  keyNav(e);
});
// Keyboard shortcuts for computers: 1-5 pick an answer, Enter / Space for next, arrows in verb cards, Esc to exit
function keyNav(e){
  if(e.ctrlKey||e.metaKey||e.altKey) return;
  var m=document.getElementById('main'), tag=e.target.tagName;
  if(e.key==='Escape'){var x=m.querySelector('.qtop .exit, .qtop [data-a=vlesson]');if(x){e.preventDefault();x.click()}return}
  if(/^(INPUT|TEXTAREA|SELECT|BUTTON|SUMMARY|A)$/.test(tag)) return;
  var click=function(sel){var b=m.querySelector(sel);if(b&&!b.disabled){e.preventDefault();b.click();return true}return false};
  if(/^[1-5]$/.test(e.key)){
    var n=+e.key-1;
    if(m.querySelector('[data-a=good]')){click(n===0?'[data-a=again]':'[data-a=good]');return}
    var groups=m.querySelectorAll('.opts');
    for(var i=0;i<groups.length;i++){
      var bs=[].filter.call(groups[i].querySelectorAll('button[data-a]'),function(b){return /^(qpick|plpick|rdpick|tapick)$/.test(b.dataset.a)});
      if(bs.length&&!bs[0].disabled){if(bs[n]){e.preventDefault();bs[n].click()}return}
    }
    return;
  }
  if(e.key==='Enter'||e.key===' '){click('[data-a=qnext],[data-a=vnext],[data-a=trnext],[data-a=cvnext],[data-a=plnext],[data-a=vlnext],[data-a=vlprac],.btn[data-a=flip]');return}
  if(e.key==='ArrowRight'){click('[data-a=vlnext],[data-a=vlprac]');return}
  if(e.key==='ArrowLeft'){click('[data-a=vlprev]');return}
}
document.addEventListener('change',function(e){
  if(e.target.id!=='bk-file'||!e.target.files||!e.target.files[0]) return;
  var rd=new FileReader();
  rd.onload=function(){
    try{
      var o=JSON.parse(rd.result), st=o&&o.state?o.state:o;
      if(!st||typeof st!=='object'||!st.progress) throw 0;
      ui.bkPending={state:st,when:o.exported?new Date(o.exported).toLocaleString():tl('an unknown date')}; ui.bkMsg='';
    }catch(err){ui.bkMsg='Ese archivo no es una copia de Wordhoard.'}
    render();
  };
  rd.readAsText(e.target.files[0]);
});
document.addEventListener('input',function(e){
  if(ui.fb&&(e.target.id==='fb-msg'||e.target.id==='fb-email')){ui.fb[e.target.id==='fb-msg'?'msg':'email']=e.target.value;return}
  if(e.target.id==='q'){
    ui.search=e.target.value;
    document.getElementById('list').innerHTML=listHtml();
  }
});

applyLang();
cloudInit();
retCheck();
render();
})();

if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})}
