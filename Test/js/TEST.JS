new Vue({
    el: '#test',
    data: {
        nombre: '',
        nombreValido: false,
        error: '',
        errorSeleccion: false,
        preguntaActual: 0,
        respuestas: [],
        preguntas: [
            { texto: "¿Cómo prefieres pasar un día libre?", opciones: ["Explorando la ciudad", "En casa con un libro", "Haciendo ejercicio al aire libre"] },
            { texto: "¿Qué estilo de música prefieres?", opciones: ["Energética y bailable", "Relajante y suave", "Variada y ecléctica"] },
            { texto: "¿Te consideras una persona creativa?", opciones: ["Sí, siempre estoy creando algo", "A veces, pero no siempre", "No, soy más práctico/a"] },
            { texto: "Cuando enfrentas un desafío, ¿cómo reaccionas?", opciones: ["Lo enfrento de inmediato", "Planeo una estrategia primero", "Busco apoyo de los demás"] },
            { texto: "¿Cuál es tu actividad favorita?", opciones: ["Cocinar nuevas recetas", "Hacer manualidades", "Practicar deportes"] },
            { texto: "¿Cómo describirías tu forma de trabajar?", opciones: ["Soy muy organizado/a", "Me gusta improvisar", "Sigo un ritmo constante"] },
            { texto: "¿Qué tan importante es para ti la opinión de los demás?", opciones: ["Muy importante", "Moderadamente importante", "No me afecta"] },
            { texto: "¿Te gusta aprender cosas nuevas?", opciones: ["Sí, siempre estoy buscando aprender", "A veces, depende del tema", "No tanto, prefiero lo conocido"] },
            { texto: "¿Cómo te sientes en situaciones sociales?", opciones: ["Extrovertido/a y seguro/a", "Cauteloso/a pero participativo/a", "Introvertido/a y observador/a"] },
            { texto: "¿Te consideras una persona optimista?", opciones: ["Sí, siempre veo el lado positivo", "A veces, depende de la situación", "No, soy más realista"] }
        ]
    },

    computed: {
        resultado() {
            let puntaje = 0;
            this.respuestas.forEach((respuesta) => {
                if (respuesta === "Sí" || respuesta === "Energética y bailable" || respuesta === "Extrovertido/a y seguro/a") {
                    puntaje++;
                } else if (respuesta === "No" || respuesta === "Introvertido/a y observador/a") {
                    puntaje--;
                }
            });

            if (puntaje >= 7) {
                return { tipo: "Gabo", razon: "Eres persuasivo, astuto, inteligente, con un carácter fuerte y seguro de ti mismo. Te gusta viajar y conocer nuevos horizontes." };
            } else if (puntaje >= 5) {
                return { tipo: "Bertha", razon: "Eres sociable, amable, carismático/a, bondadoso/a, y tienes esa chispa infantil en el corazón. Una persona con mucha energía y un gran sentido del humor." };
            } else if (puntaje >= 3) {
                return { tipo: "Teresita", razon: "Eres inteligente, segura, con carácter. Te destacas por tu astucia y carisma; sabes lo que quieres y eres decidido/a en tus objetivos." };
            } else if (puntaje >= 1) {
                return { tipo: "Anahí", razon: "Eres analítica, inteligente, persuasiva y con un carácter fuerte. La mayor parte del tiempo decidida en lo que quieres." };
            } else {
                return { tipo: "Marichuy", razon: "Eres amable, bondadosa, buena consejera, aventurera y tienes una gran alma de salvador/a. Te gusta ayudar a los demás, brindándoles apoyo y seguridad." };
            }
        }
    },

    methods: {
        iniciarCuestionario() {
            if (this.nombre.length > 0) {
                this.nombreValido = true;
                this.error = '';
                this.errorSeleccion = false;
            } else {
                this.error = 'Por favor ingresa tu nombre.';
            }
        },

        siguientePregunta() {
            if (this.respuestas[this.preguntaActual] != null) {
                this.errorSeleccion = false;
                this.preguntaActual++;
            } else {
                this.errorSeleccion = true;
            }
        }
    }
});
