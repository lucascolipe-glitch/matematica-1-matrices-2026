'use strict';

const CLAVE = 'm1-matrices-2026-v1';
const TOTAL_ACTIVIDADES = 9;

const datos = {
  notacion: [
    {
      id: 'n1',
      texto: 'La matriz \\(A=\\begin{pmatrix}4&-1&3\\\\0&5&2\\end{pmatrix}\\) tiene orden:',
      correcta: '2x3',
      opciones: [
        { valor: '2x3', etiqueta: '\\(2\\times3\\)' },
        { valor: '3x2', etiqueta: '\\(3\\times2\\)' },
        { valor: '2x2', etiqueta: '\\(2\\times2\\)' },
        { valor: '3x3', etiqueta: '\\(3\\times3\\)' }
      ],
      explicacion: 'Tiene 2 filas y 3 columnas.'
    },
    {
      id: 'n2',
      texto: 'En esa misma matriz, el valor de \\(a_{23}\\) es:',
      correcta: '2',
      opciones: ['3', '5', '2', '0'],
      explicacion: 'La fila 2 es \\((0,5,2)\\) y su tercera entrada es 2.'
    },
    {
      id: 'n3',
      texto: 'En la notación \\(a_{ij}\\), el índice \\(i\\) indica:',
      correcta: 'fila',
      opciones: [
        { valor: 'fila', etiqueta: 'La fila' },
        { valor: 'columna', etiqueta: 'La columna' },
        { valor: 'orden', etiqueta: 'El orden total' },
        { valor: 'valor', etiqueta: 'El valor de la entrada' }
      ],
      explicacion: 'El primer índice indica la fila y el segundo la columna.'
    }
  ],
  construccion: [
    {
      id: 'c1',
      texto: 'Si \\(A=(a_{ij})\\) es de orden \\(2\\times2\\) y \\(a_{ij}=i+j\\), entonces \\(A\\) es:',
      correcta: 'A1',
      opciones: [
        { valor: 'A1', etiqueta: '\\(\\begin{pmatrix}2&3\\\\3&4\\end{pmatrix}\\)' },
        { valor: 'A2', etiqueta: '\\(\\begin{pmatrix}1&2\\\\2&3\\end{pmatrix}\\)' },
        { valor: 'A3', etiqueta: '\\(\\begin{pmatrix}2&2\\\\4&4\\end{pmatrix}\\)' },
        { valor: 'A4', etiqueta: '\\(\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\)' }
      ],
      explicacion: 'Se evalúa la regla en las posiciones (1,1), (1,2), (2,1) y (2,2).'
    },
    {
      id: 'c2',
      texto: 'Si \\(b_{ij}=(-1)^{i+j}(i-2j)\\), el valor de \\(b_{23}\\) es:',
      correcta: '4',
      opciones: ['-4', '4', '-8', '8'],
      explicacion: '\\((-1)^{2+3}(2-6)=(-1)(-4)=4\\).'
    },
    {
      id: 'c3',
      texto: 'Para \\(c_{ij}=3\\) si \\(i\\ge j\\) y \\(c_{ij}=-2\\) si \\(i\\lt j\\), la entrada \\(c_{13}\\) vale:',
      correcta: '-2',
      opciones: ['3', '-2', '1', '0'],
      explicacion: 'Como \\(1\\lt3\\), se utiliza la segunda rama.'
    }
  ],
  operaciones: [
    {
      id: 'o1',
      texto: 'Si \\(A\\) es de orden \\(3\\times2\\), entonces \\(A^t\\) es de orden:',
      correcta: '2x3',
      opciones: [
        { valor: '2x3', etiqueta: '\\(2\\times3\\)' },
        { valor: '3x2', etiqueta: '\\(3\\times2\\)' },
        { valor: '3x3', etiqueta: '\\(3\\times3\\)' },
        { valor: '2x2', etiqueta: '\\(2\\times2\\)' }
      ],
      explicacion: 'La trasposición intercambia filas y columnas.'
    },
    {
      id: 'o2',
      texto: 'Sean \\(A=\\begin{pmatrix}2&-1\\\\0&4\\end{pmatrix}\\) y \\(B=\\begin{pmatrix}1&2\\\\5&0\\end{pmatrix}\\). Entonces \\(A+B\\) es:',
      correcta: 'S1',
      opciones: [
        { valor: 'S1', etiqueta: '\\(\\begin{pmatrix}3&1\\\\5&4\\end{pmatrix}\\)' },
        { valor: 'S2', etiqueta: '\\(\\begin{pmatrix}2&-2\\\\0&0\\end{pmatrix}\\)' },
        { valor: 'S3', etiqueta: '\\(\\begin{pmatrix}3&-3\\\\5&4\\end{pmatrix}\\)' },
        { valor: 'S4', etiqueta: '\\(\\begin{pmatrix}2&1\\\\5&0\\end{pmatrix}\\)' }
      ],
      explicacion: 'La suma se realiza entrada por entrada.'
    },
    {
      id: 'o3',
      texto: 'Para sumar dos matrices es necesario que:',
      correcta: 'mismoOrden',
      opciones: [
        { valor: 'mismoOrden', etiqueta: 'Tengan el mismo orden' },
        { valor: 'cuadradas', etiqueta: 'Ambas sean cuadradas' },
        { valor: 'columnasFilas', etiqueta: 'Las columnas de la primera coincidan con las filas de la segunda' },
        { valor: 'inversibles', etiqueta: 'Ambas sean inversibles' }
      ],
      explicacion: 'La suma y la resta requieren matrices del mismo orden.'
    }
  ],
  producto: [
    {
      id: 'p1',
      texto: 'Si \\(P\\) es \\(2\\times2\\) y \\(Q\\) es \\(2\\times3\\), el producto \\(PQ\\):',
      correcta: 'posible2x3',
      opciones: [
        { valor: 'posible2x3', etiqueta: 'Es posible y resulta \\(2\\times3\\)' },
        { valor: 'posible2x2', etiqueta: 'Es posible y resulta \\(2\\times2\\)' },
        { valor: 'imposible', etiqueta: 'No es posible' },
        { valor: 'posible3x2', etiqueta: 'Es posible y resulta \\(3\\times2\\)' }
      ],
      explicacion: 'Coinciden las 2 columnas de P con las 2 filas de Q. Se conservan las dimensiones externas.'
    },
    {
      id: 'p2',
      texto: 'Si \\(M\\) es \\(3\\times3\\) y \\(P\\) es \\(2\\times2\\), el producto \\(MP\\):',
      correcta: 'imposible',
      opciones: [
        { valor: 'imposible', etiqueta: 'No es posible' },
        { valor: '3x2', etiqueta: 'Resulta \\(3\\times2\\)' },
        { valor: '2x3', etiqueta: 'Resulta \\(2\\times3\\)' },
        { valor: '3x3', etiqueta: 'Resulta \\(3\\times3\\)' }
      ],
      explicacion: 'Las 3 columnas de M no coinciden con las 2 filas de P.'
    },
    {
      id: 'p3',
      texto: 'Con \\(A=\\begin{pmatrix}2&-1&3\\\\1&4&0\\end{pmatrix}\\) y \\(B=\\begin{pmatrix}5&2\\\\0&-1\\\\2&3\\end{pmatrix}\\), la entrada \\((AB)_{12}\\) es:',
      correcta: '14',
      opciones: ['16', '14', '5', '-2'],
      explicacion: '\\(2\\cdot2+(-1)(-1)+3\\cdot3=4+1+9=14\\).'
    }
  ],
  especiales: [
    {
      id: 'e1',
      texto: 'La matriz \\(\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\) es:',
      correcta: 'identidad',
      opciones: ['Nula', { valor: 'identidad', etiqueta: 'Identidad' }, 'Simétrica únicamente', 'No cuadrada'],
      explicacion: 'Tiene unos en la diagonal principal y ceros fuera de ella.'
    },
    {
      id: 'e2',
      texto: '¿Cuál propiedad de la traspuesta es correcta?',
      correcta: 'productoOrdenInverso',
      opciones: [
        { valor: 'productoOrdenInverso', etiqueta: '\\((AB)^t=B^tA^t\\)' },
        { valor: 'mismoOrden', etiqueta: '\\((AB)^t=A^tB^t\\)' },
        { valor: 'sumaProducto', etiqueta: '\\((A+B)^t=A^tB^t\\)' },
        { valor: 'negacion', etiqueta: '\\((A^t)^t=-A\\)' }
      ],
      explicacion: 'Al trasponer un producto se invierte el orden de los factores.'
    },
    {
      id: 'e3',
      texto: 'En general, para el producto de matrices:',
      correcta: 'noConmutativo',
      opciones: [
        { valor: 'noConmutativo', etiqueta: '\\(AB\\ne BA\\)' },
        { valor: 'conmutativo', etiqueta: '\\(AB=BA\\)' },
        { valor: 'siempreCero', etiqueta: '\\(AB=O\\)' },
        { valor: 'soloRectangulares', etiqueta: 'Solo existe para matrices rectangulares' }
      ],
      explicacion: 'El producto matricial no es conmutativo en general.'
    }
  ],
  ecuaciones: [
    {
      id: 'q1',
      texto: 'Si \\(\\begin{pmatrix}x&2\\\\3&y\\end{pmatrix}=\\begin{pmatrix}5&2\\\\3&-1\\end{pmatrix}\\), entonces:',
      correcta: 'x5y-1',
      opciones: [
        { valor: 'x5y-1', etiqueta: '\\(x=5,\\ y=-1\\)' },
        { valor: 'x2y3', etiqueta: '\\(x=2,\\ y=3\\)' },
        { valor: 'x-1y5', etiqueta: '\\(x=-1,\\ y=5\\)' },
        { valor: 'sin', etiqueta: 'No tiene solución' }
      ],
      explicacion: 'Las entradas correspondientes deben ser iguales.'
    },
    {
      id: 'q2',
      texto: 'Si \\(3A-B=C\\), el despeje correcto de \\(A\\) es:',
      correcta: 'A=(C+B)/3',
      opciones: [
        { valor: 'A=(C+B)/3', etiqueta: '\\(A=\\frac13(C+B)\\)' },
        { valor: 'A=C-3B', etiqueta: '\\(A=C-3B\\)' },
        { valor: 'A=3(C+B)', etiqueta: '\\(A=3(C+B)\\)' },
        { valor: 'A=B-C', etiqueta: '\\(A=B-C\\)' }
      ],
      explicacion: 'Primero se suma B en ambos miembros y luego se multiplica por 1/3.'
    },
    {
      id: 'q3',
      texto: 'Una igualdad matricial puede transformarse en:',
      correcta: 'sistema',
      opciones: [
        { valor: 'sistema', etiqueta: 'Un sistema de ecuaciones entre entradas correspondientes' },
        { valor: 'unaInecuacion', etiqueta: 'Una única inecuación' },
        { valor: 'unProducto', etiqueta: 'Un producto escalar' },
        { valor: 'unaFuncion', etiqueta: 'Una función exponencial' }
      ],
      explicacion: 'Cada posición genera una igualdad escalar.'
    }
  ],
  inversas: [
    {
      id: 'i1',
      texto: 'La matriz \\(A=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\) es:',
      correcta: 'noInvertible',
      opciones: [
        { valor: 'noInvertible', etiqueta: 'No inversible: sus filas son iguales' },
        { valor: 'invertible', etiqueta: 'Inversible porque es cuadrada' },
        { valor: 'identidad', etiqueta: 'La matriz identidad' },
        { valor: 'rectangular', etiqueta: 'Rectangular' }
      ],
      explicacion: 'Ser cuadrada es necesario, pero no suficiente. Las filas dependientes impiden llegar a la identidad.'
    },
    {
      id: 'i2',
      texto: 'Si \\(AX=B\\) y \\(A\\) es inversible, entonces:',
      correcta: 'izquierda',
      opciones: [
        { valor: 'izquierda', etiqueta: '\\(X=A^{-1}B\\)' },
        { valor: 'derecha', etiqueta: '\\(X=BA^{-1}\\)' },
        { valor: 'sumar', etiqueta: '\\(X=A+B\\)' },
        { valor: 'transponer', etiqueta: '\\(X=A^tB\\)' }
      ],
      explicacion: 'Se multiplica por A⁻¹ a la izquierda de ambos miembros.'
    },
    {
      id: 'i3',
      texto: 'La inversa de \\(A=\\begin{pmatrix}2&5\\\\1&3\\end{pmatrix}\\) es:',
      correcta: 'inv1',
      opciones: [
        { valor: 'inv1', etiqueta: '\\(\\begin{pmatrix}3&-5\\\\-1&2\\end{pmatrix}\\)' },
        { valor: 'inv2', etiqueta: '\\(\\begin{pmatrix}2&-5\\\\-1&3\\end{pmatrix}\\)' },
        { valor: 'inv3', etiqueta: '\\(\\begin{pmatrix}3&5\\\\1&2\\end{pmatrix}\\)' },
        { valor: 'sin', etiqueta: 'No tiene inversa' }
      ],
      explicacion: 'El laboratorio de Gauss–Jordan permite obtener y verificar esta matriz.'
    }
  ],
  aplicaciones: [
    {
      id: 'a1',
      texto: 'Una empresa de saneamiento gestiona residuos en dos localidades. Las cantidades recolectadas anualmente  (en miles toneladas) de tres tipos de residuos (orgánicos, plásticos y papel) se representan mediante la matriz \\(Q=\\begin{pmatrix}50&100&80\\\\60&120&90\\end{pmatrix}\\) y costos \\(P=\\begin{pmatrix}200\\\\50\\\\150\\end{pmatrix}\\), el costo anual de tratamiento por cada mil toneladas están dados por:',
      correcta: '27000',
      opciones: ['22000', '27000', '31500', '54000'],
      explicacion: '\\(50(200)+100(50)+80(150)=27000\\).'
    },
    {
      id: 'a2',
      texto: 'En tres sectores de una planta se evalúan dos tipos de riesgo: físico, químico. Los valores obtenidos se organizan en la matriz   \\(A=\\begin{pmatrix}3&2\\\\4&3\\\\2&1\\end{pmatrix}\\) y se establece un vector de ponderación según la importancia de cada riesgo \\(W=\\begin{pmatrix}2\\\\3\\end{pmatrix}\\), el sector con mayor índice de riesgo es:',
      correcta: 'sector2',
      opciones: [
        { valor: 'sector1', etiqueta: 'Sector 1, índice 12' },
        { valor: 'sector2', etiqueta: 'Sector 2, índice 17' },
        { valor: 'sector3', etiqueta: 'Sector 3, índice 7' },
        { valor: 'empate', etiqueta: 'Los tres sectores empatan' }
      ],
      explicacion: 'El producto \\(AW\\) da \\(\\begin{pmatrix}12\\\\17\\\\7\\end{pmatrix}\\). por lo tanto larespuesta es el sector 2.'
    },
    {
      id: 'a3',
      texto: 'Una planta industrial genera distintos tipos de residuos (orgánicos, químicos y reciclables) en dos sectores de trabajo. Las cantidadesLos costos de tratamiento por tonelada de cada tipo de residuo están dados por: (en toneladas) se representan mediante \\(R=\\begin{pmatrix}120&60&30\\\\100&50&20\\end{pmatrix}\\) y los costos de tratamiento por tonelada de cada tipo de residuo están dados por: \\(C=\\begin{pmatrix}300\\\\500\\\\100\\end{pmatrix}\\), el costo del sector 1 es:',
      correcta: '69000',
      opciones: ['57000', '69000', '126000', '36000'],
      explicacion: '\\(120(300)+60(500)+30(100)=69000\\).'
    },
    {
      id: 'a4',
      texto: 'En un sistema de ventilación se registran los caudales (m³/s) en tres puntos y dos conductos: \\(V=\\begin{pmatrix}2&3\\\\4&1\\\\3&2\\end{pmatrix}\\), como hay perdida en los conductos se decide aplicar un factor de corrección\\(F=\\begin{pmatrix}0.9&0\\\\0&0.8\\end{pmatrix}\\), la entrada corregida de la fila 2, columna 1 es:',
      correcta: '3.6',
      opciones: ['4.0', '3.6', '0.8', '3.2'],
      explicacion: 'La primera componente de cada fila se multiplica por 0,9: \\(4(0.9)=3.6\\).'
    }
  ]
};

const aplicacionesCasos = [
  {
    titulo: 'Niveles de ruido por sector',
    descripcion: 'En una planta industrial se realiza un monitoreo de los niveles de ruido (medidos en decibeles, dB) en tres sectores de trabajo (A, B y C), durante los tres turnos diarios (mañana, tarde y noche). Los datos relevados se organizan en la siguiente matriz, Cada fila representa un sector y cada columna un turno. Calculamos el promedio por fila.',
    matrices: [[[85,90,88],[80,87,85],[78,82,80]],[[⅓],[⅓],[⅓]]],
    operadores: ['×'],
    resultado: [[87.67],[84],[80]],
    calculo: '\\(A: (85+90+88)/3\\approx87.67\\), \\(B:84\\), \\(C:80\\).',
    interpretacion: 'El sector A presenta la mayor exposición promedio.'
  },
  {
    titulo: 'Costo de EPP por mes',
    descripcion: 'Las cantidades de cascos, guantes y gafas se multiplican por sus costos unitarios.',
    matrices: [[[50,100,80],[60,120,90]], [[200],[50],[150]]],
    operadores: ['×'],
    resultado: [[27000],[31500]],
    calculo: '\\(QP=\\begin{pmatrix}27000\\\\31500\\end{pmatrix}\\).',
    interpretacion: 'El segundo mes implicó una inversión mayor.'
  },
  {
    titulo: 'Índice de riesgo ponderado',
    descripcion: 'Los riesgos físico y químico se ponderan con pesos 2 y 3.',
    matrices: [[[3,2],[4,3],[2,1]], [[2],[3]]],
    operadores: ['×'],
    resultado: [[12],[17],[7]],
    calculo: '\\(AW=\\begin{pmatrix}12\\\\17\\\\7\\end{pmatrix}\\).',
    interpretacion: 'El sector 2 requiere atención prioritaria.'
  },
  {
    titulo: 'Costo de tratamiento de residuos',
    descripcion: 'Las toneladas de residuos orgánicos, químicos y reciclables se combinan con sus costos.',
    matrices: [[[120,60,30],[100,50,20]], [[300],[500],[100]]],
    operadores: ['×'],
    resultado: [[69000],[57000]],
    calculo: '\\(RC=\\begin{pmatrix}69000\\\\57000\\end{pmatrix}\\).',
    interpretacion: 'El sector 1 genera el mayor costo de tratamiento.'
  },
  {
    titulo: 'Corrección de caudales',
    descripcion: 'Una matriz diagonal aplica pérdidas diferentes a cada conducto.',
    matrices: [[[2,3],[4,1],[3,2]], [[0.9,0],[0,0.8]]],
    operadores: ['×'],
    resultado: [[1.8,2.4],[3.6,0.8],[2.7,1.6]],
    calculo: '\\(VF=\\begin{pmatrix}1.8&2.4\\\\3.6&0.8\\\\2.7&1.6\\end{pmatrix}\\).',
    interpretacion: 'El primer conducto conserva el 90 % y el segundo el 80 % de cada caudal.'
  },
  {
    titulo: 'Transformación de datos ambientales',
    descripcion: 'La matriz T combina la primera fila de M con el doble de la segunda y conserva la segunda fila.',
    matrices: [[[1,2],[0,1]], [[5,3],[2,4]]],
    operadores: ['×'],
    resultado: [[9,11],[2,4]],
    calculo: '\\(TM=\\begin{pmatrix}9&11\\\\2&4\\end{pmatrix}\\).',
    interpretacion: 'La primera fila se transforma; la segunda permanece igual.'
  }
];

const practicaBanco = Object.values(datos).flat().map(q => ({
  pregunta: q.texto,
  opciones: q.opciones,
  correcta: q.correcta,
  explicacion: q.explicacion
}));

let estado = cargarEstado();
let practicaActual = null;
let racha = estado.racha || 0;
let mejorRacha = estado.mejorRacha || 0;
let productoPaso = 0;
let operacionActual = 'suma';
let casoActual = 0;

function estadoInicial() {
  return { nombre: '', completadas: {}, respuestas: {}, racha: 0, mejorRacha: 0, gaussPaso: 0 };
}
function cargarEstado() {
  try { return { ...estadoInicial(), ...(JSON.parse(localStorage.getItem(CLAVE)) || {}) }; }
  catch { return estadoInicial(); }
}
function guardarEstado() {
  estado.racha = racha;
  estado.mejorRacha = mejorRacha;
  try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch {}
  actualizarProgreso();
}
function typeset(elemento) {
  if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise(elemento ? [elemento] : undefined).catch(() => {});
}
function escapar(texto) {
  return String(texto).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
}
function fmt(valor, decimales = 2) {
  const n = Number(valor);
  if (!Number.isFinite(n)) return String(valor);
  if (Math.abs(n - Math.round(n)) < 1e-10) return String(Math.round(n));
  return n.toFixed(decimales).replace(/0+$/,'').replace(/\.$/,'');
}
function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.classList.add('visible');
  clearTimeout(mostrarToast.timer);
  mostrarToast.timer = setTimeout(() => toast.classList.remove('visible'), 2600);
}
function opcionesNormalizadas(opciones) {
  return opciones.map(o => typeof o === 'string' ? { valor: o, etiqueta: o } : o);
}
function renderQuiz(tipo) {
  const contenedor = document.getElementById(`quiz-${tipo}`);
  const preguntas = datos[tipo];
  contenedor.innerHTML = preguntas.map((q, indice) => {
    const guardada = estado.respuestas[q.id] || '';
    return `<article class="pregunta" data-pregunta="${q.id}">
      <p class="pregunta__enunciado"><span>${indice + 1}.</span> ${q.texto}</p>
      <div class="opciones">${opcionesNormalizadas(q.opciones).map(o => `<label class="opcion opcion--tarjeta"><input type="radio" name="${q.id}" value="${escapar(o.valor)}" ${guardada === o.valor ? 'checked' : ''}><span class="opcion__contenido">${o.etiqueta}</span></label>`).join('')}</div>
      <p class="explicacion" hidden></p>
    </article>`;
  }).join('');
  typeset(contenedor);
}
function renderTodo() {
  Object.keys(datos).forEach(renderQuiz);
  restaurarEstadosVisuales();
  actualizarProgreso();
}
function comprobarActividad(tipo) {
  const preguntas = datos[tipo];
  let correctas = 0;
  let respondidas = 0;
  preguntas.forEach(q => {
    const input = document.querySelector(`input[name="${q.id}"]:checked`);
    const respuesta = input?.value || '';
    estado.respuestas[q.id] = respuesta;
    if (respuesta) respondidas++;
    const tarjeta = document.querySelector(`[data-pregunta="${q.id}"]`);
    tarjeta?.classList.remove('correcta','incorrecta');
    tarjeta?.querySelectorAll('.opcion').forEach(op => op.classList.remove('correcta-marcada','incorrecta-marcada'));
    const elegida = input?.closest('.opcion');
    const correctaInput = [...document.querySelectorAll(`input[name="${q.id}"]`)].find(i => i.value === q.correcta);
    if (respuesta === q.correcta) {
      correctas++;
      tarjeta?.classList.add('correcta');
      elegida?.classList.add('correcta-marcada');
    } else {
      tarjeta?.classList.add('incorrecta');
      elegida?.classList.add('incorrecta-marcada');
      correctaInput?.closest('.opcion')?.classList.add('correcta-marcada');
    }
    const explicacion = tarjeta?.querySelector('.explicacion');
    if (explicacion) {
      const etiquetaCorrecta = opcionesNormalizadas(q.opciones).find(o => o.valor === q.correcta)?.etiqueta || q.correcta;
      explicacion.hidden = false;
      explicacion.innerHTML = respuesta === q.correcta ? `✓ Correcto. ${q.explicacion}` : `Respuesta esperada: <strong>${etiquetaCorrecta}</strong>. ${q.explicacion}`;
    }
  });
  const completa = correctas === preguntas.length;
  estado.completadas[tipo] = completa;
  guardarEstado();
  marcarActividad(tipo, completa);
  const feedback = document.getElementById(`feedback-${tipo}`);
  feedback.className = `retroalimentacion ${completa ? 'ok' : 'error'}`;
  feedback.innerHTML = completa ? `<strong>¡Actividad completa!</strong> Resolviste correctamente ${correctas} de ${preguntas.length}.` : `<strong>Resultado: ${correctas} de ${preguntas.length}.</strong> Respondidas: ${respondidas}. Revisá las devoluciones y volvé a intentar.`;
  typeset(feedback);
}
function borrarActividad(tipo) {
  datos[tipo].forEach(q => delete estado.respuestas[q.id]);
  delete estado.completadas[tipo];
  guardarEstado();
  renderQuiz(tipo);
  marcarActividad(tipo, false);
  const feedback = document.getElementById(`feedback-${tipo}`);
  feedback.textContent = '';
  feedback.className = 'retroalimentacion';
}
function marcarActividad(tipo, completa) {
  const seccion = document.querySelector(`[data-actividad="${tipo}"]`);
  const etiqueta = document.getElementById(`estado-${tipo}`);
  seccion?.classList.toggle('resuelta', Boolean(completa));
  if (etiqueta) {
    etiqueta.textContent = completa ? 'Completada' : 'Pendiente';
    etiqueta.classList.toggle('ok', Boolean(completa));
  }
}
function restaurarEstadosVisuales() {
  Object.entries(estado.completadas).forEach(([tipo, completa]) => marcarActividad(tipo, completa));
}
function actualizarProgreso() {
  const logradas = Object.values(estado.completadas).filter(Boolean).length;
  const porcentaje = Math.round((logradas / TOTAL_ACTIVIDADES) * 100);
  document.getElementById('progreso-texto').textContent = `${porcentaje}%`;
  document.getElementById('progreso-barra').style.width = `${porcentaje}%`;
  document.getElementById('aciertos-total').textContent = logradas;
  document.getElementById('resumen-progreso').textContent = `${porcentaje}%`;
  document.getElementById('resumen-logradas').textContent = `${logradas} de ${TOTAL_ACTIVIDADES}`;
  document.getElementById('resumen-racha').textContent = mejorRacha;
  document.getElementById('resumen-nombre').textContent = estado.nombre?.trim() || 'Sin completar';
}

function matrizHTML(matriz, opciones = {}) {
  const { clickeable = false, activa = null } = opciones;
  const columnas = Math.max(...matriz.map(f => f.length));
  return `<div class="matriz-grande">${matriz.map((fila,i) => `<div class="fila-matriz" style="grid-template-columns:repeat(${columnas},minmax(52px,1fr))">${fila.map((valor,j) => clickeable ? `<button class="entrada-matriz ${activa?.[0] === i && activa?.[1] === j ? 'activa' : ''}" type="button" data-fila="${i}" data-columna="${j}">${fmt(valor)}</button>` : `<span class="entrada-matriz">${fmt(valor)}</span>`).join('')}</div>`).join('')}</div>`;
}
function tablaMatriz(matriz, opciones = {}) {
  const { filaActiva = -1, columnaActiva = -1, resultadoPaso = -1, mostrarHasta = Infinity } = opciones;
  let contador = 0;
  return `<table class="matriz-tabla"><tbody>${matriz.map((fila,i) => `<tr>${fila.map((valor,j) => {
    const actual = contador++;
    const clases = [i === filaActiva ? 'fila-activa' : '', j === columnaActiva ? 'columna-activa' : '', actual === resultadoPaso ? 'resultado-activo' : ''].filter(Boolean).join(' ');
    const contenido = actual <= mostrarHasta ? fmt(valor) : '·';
    return `<td class="${clases}">${contenido}</td>`;
  }).join('')}</tr>`).join('')}</tbody></table>`;
}

function configurarExploradorCeldas() {
  const matriz = [[12,8,5],[15,10,7]];
  const contaminantes = ['A','B','C'];
  [0,1].forEach(i => {
    const contenedor = document.getElementById(`matriz-celdas-${i+1}`);
    contenedor.innerHTML = matriz[i].map((valor,j) => `<button type="button" class="celda-matriz" data-i="${i}" data-j="${j}">${valor}</button>`).join('');
  });
  const mostrar = (i,j) => {
    document.querySelectorAll('.celda-matriz').forEach(b => b.classList.toggle('activa', Number(b.dataset.i) === i && Number(b.dataset.j) === j));
    document.getElementById('celda-datos').innerHTML = `La entrada \\(c_{${i+1},${j+1}}=${matriz[i][j]}\\) representa la concentración del contaminante ${contaminantes[j]} en el área ${i+1}.`;
    typeset(document.getElementById('celda-datos'));
  };
  document.querySelectorAll('.celda-matriz').forEach(b => b.addEventListener('click', () => mostrar(Number(b.dataset.i), Number(b.dataset.j))));
  mostrar(0,0);
}

const formulas = {
  suma: { latex: 'a_{ij}=i+j', fn: (i,j) => i+j, detalle: (i,j) => `${i}+${j}=${i+j}` },
  cuadrado: { latex: 'a_{ij}=i^2+2j', fn: (i,j) => i*i+2*j, detalle: (i,j) => `${i}^2+2\\cdot${j}=${i*i+2*j}` },
  alternada: { latex: 'a_{ij}=(-1)^{i+j}', fn: (i,j) => (-1)**(i+j), detalle: (i,j) => `(-1)^{${i}+${j}}=${(-1)**(i+j)}` },
  tramos: { latex: 'a_{ij}=\\begin{cases}3,&i\\ge j\\\\-2,&i\\lt j\\end{cases}', fn: (i,j) => i>=j?3:-2, detalle: (i,j) => i>=j ? `${i}\\ge${j}\\Rightarrow3` : `${i}\\lt${j}\\Rightarrow-2` }
};
function actualizarConstructor(celda = [0,0]) {
  const clave = document.getElementById('formula-matriz').value;
  const filas = Number(document.getElementById('filas-matriz').value);
  const columnas = Number(document.getElementById('columnas-matriz').value);
  const regla = formulas[clave];
  const matriz = Array.from({length:filas},(_,i) => Array.from({length:columnas},(_,j) => regla.fn(i+1,j+1)));
  const contenedor = document.getElementById('constructor-resultado');
  contenedor.innerHTML = matrizHTML(matriz,{clickeable:true,activa:celda});
  contenedor.querySelectorAll('button').forEach(b => b.addEventListener('click', () => actualizarConstructor([Number(b.dataset.fila),Number(b.dataset.columna)])));
  const [i,j] = celda;
  document.getElementById('constructor-explicacion').innerHTML = `Regla: \\(${regla.latex}\\). Para la entrada \\(a_{${i+1},${j+1}}\\): \\(${regla.detalle(i+1,j+1)}\\).`;
  typeset(document.getElementById('construccion'));
}

function leerMatrizEntradas(prefijo) {
  return [[0,0],[0,1],[1,0],[1,1]].reduce((m,[i,j]) => { m[i] ||= []; m[i][j] = Number(document.getElementById(`${prefijo}${i}${j}`).value); return m; },[]);
}
function crearEntradasMatriz(prefijo, matriz) {
  const contenedor = document.getElementById(`entradas-${prefijo}`);
  contenedor.innerHTML = matriz.flatMap((fila,i) => fila.map((valor,j) => `<input id="${prefijo}${i}${j}" type="number" step="any" value="${valor}" aria-label="${prefijo} fila ${i+1} columna ${j+1}">`)).join('');
  contenedor.querySelectorAll('input').forEach(input => input.addEventListener('input', actualizarCalculadora));
}
function sumarMatrices(A,B,signo=1) { return A.map((fila,i) => fila.map((v,j) => v + signo*B[i][j])); }
function escalarMatriz(A,k) { return A.map(f => f.map(v => k*v)); }
function transponer(A) { return A[0].map((_,j) => A.map(f => f[j])); }
function productoMatrices(A,B) { return A.map(fila => B[0].map((_,j) => fila.reduce((s,v,k) => s + v*B[k][j],0))); }
function actualizarCalculadora() {
  const A = leerMatrizEntradas('A');
  const B = leerMatrizEntradas('B');
  const k = Number(document.getElementById('escalar-k').value);
  let R, texto;
  if (operacionActual === 'suma') { R = sumarMatrices(A,B); texto = 'Se sumó cada entrada de A con la entrada correspondiente de B.'; }
  if (operacionActual === 'resta') { R = sumarMatrices(A,B,-1); texto = 'Se restó cada entrada de B a la entrada correspondiente de A.'; }
  if (operacionActual === 'AB') { R = productoMatrices(A,B); texto = 'Se calculó A·B mediante productos fila por columna.'; }
  if (operacionActual === 'BA') { R = productoMatrices(B,A); texto = 'Se calculó B·A. Comparalo con A·B: el orden puede cambiar el resultado.'; }
  if (operacionActual === 'At') { R = transponer(A); texto = 'Las filas de A pasaron a ser columnas.'; }
  if (operacionActual === 'kA') { R = escalarMatriz(A,k); texto = `Cada entrada de A se multiplicó por ${fmt(k)}.`; }
  document.getElementById('resultado-operacion').innerHTML = matrizHTML(R);
  document.getElementById('calculadora-explicacion').textContent = texto;
}
function configurarCalculadora() {
  crearEntradasMatriz('A',[[2,-1],[0,4]]);
  crearEntradasMatriz('B',[[1,2],[5,0]]);
  const operaciones = [
    ['suma','A + B'],['resta','A − B'],['AB','A · B'],['BA','B · A'],['At','Aᵗ'],['kA','kA']
  ];
  const contenedor = document.getElementById('botones-operacion');
  contenedor.innerHTML = operaciones.map(([valor,etiqueta]) => `<button type="button" data-op="${valor}" class="${valor === operacionActual ? 'activo' : ''}">${etiqueta}</button>`).join('');
  contenedor.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    operacionActual = b.dataset.op;
    contenedor.querySelectorAll('button').forEach(x => x.classList.toggle('activo',x === b));
    actualizarCalculadora();
  }));
  document.getElementById('escalar-k').addEventListener('input',actualizarCalculadora);
  actualizarCalculadora();
}

const productoA = [[2,-1,3],[1,4,0]];
const productoB = [[5,2],[0,-1],[2,3]];
const productoR = productoMatrices(productoA,productoB);
const productoPasos = [
  {f:0,c:0,cuenta:'2\\cdot5+(-1)\\cdot0+3\\cdot2=16'},
  {f:0,c:1,cuenta:'2\\cdot2+(-1)(-1)+3\\cdot3=14'},
  {f:1,c:0,cuenta:'1\\cdot5+4\\cdot0+0\\cdot2=5'},
  {f:1,c:1,cuenta:'1\\cdot2+4(-1)+0\\cdot3=-2'}
];
function renderProducto() {
  const paso = productoPasos[productoPaso];
  document.getElementById('producto-visual').innerHTML = `${tablaMatriz(productoA,{filaActiva:paso.f})}<strong>×</strong>${tablaMatriz(productoB,{columnaActiva:paso.c})}<strong>=</strong>${tablaMatriz(productoR,{resultadoPaso:productoPaso,mostrarHasta:productoPaso})}`;
  document.getElementById('producto-explicacion').innerHTML = `Entrada \\(c_{${paso.f+1},${paso.c+1}}\\): \\(${paso.cuenta}\\).`;
  document.getElementById('producto-anterior').disabled = productoPaso === 0;
  document.getElementById('producto-siguiente').disabled = productoPaso === productoPasos.length-1;
  typeset(document.getElementById('producto'));
}

function comprobarEcuacionLab() {
  const x = Number(document.getElementById('ecuacion-x').value);
  const y = Number(document.getElementById('ecuacion-y').value);
  const caja = document.getElementById('ecuacion-lab-feedback');
  const eq = [2*x+3*y-7 === -5, 5+2*y === 1, 4*x+3 === 2, y+6 === 8];
  if (eq.every(Boolean)) {
    caja.innerHTML = '<strong>Correcto.</strong> El par verifica las cuatro entradas.';
  } else {
    caja.innerHTML = '<strong>No existe un par que verifique simultáneamente las cuatro entradas.</strong> La posición (1,2) exige \\(y=-2\\), mientras que la posición (2,2) exige \\(y=2\\). La igualdad escrita en el práctico es incompatible.';
  }
  typeset(caja);
}

const gaussEstados = [
  [[2,5,1,0],[1,3,0,1]],
  [[1,3,0,1],[2,5,1,0]],
  [[1,3,0,1],[0,-1,1,-2]],
  [[1,3,0,1],[0,1,-1,2]],
  [[1,0,3,-5],[0,1,-1,2]]
];
const gaussOperaciones = [
  { correcta:'swap', etiqueta:'F₁ ↔ F₂', opciones:[['swap','F₁ ↔ F₂'],['f1half','F₁ ← ½F₁'],['f2minus','F₂ ← F₂ − F₁']] },
  { correcta:'elim', etiqueta:'F₂ ← F₂ − 2F₁', opciones:[['elim','F₂ ← F₂ − 2F₁'],['sum','F₂ ← F₂ + 2F₁'],['swap','F₁ ↔ F₂']] },
  { correcta:'neg', etiqueta:'F₂ ← −F₂', opciones:[['neg','F₂ ← −F₂'],['half','F₂ ← ½F₂'],['f1','F₁ ← F₁ − F₂']] },
  { correcta:'finish', etiqueta:'F₁ ← F₁ − 3F₂', opciones:[['finish','F₁ ← F₁ − 3F₂'],['plus','F₁ ← F₁ + 3F₂'],['swap','F₁ ↔ F₂']] }
];
function matrizAumentadaHTML(estadoMatriz) {
  return `<div class="matriz-aumentada">${estadoMatriz.map(f => `<div class="fila-aumentada"><span class="entrada-aumentada">${fmt(f[0])}</span><span class="entrada-aumentada">${fmt(f[1])}</span><span class="separador"></span><span class="entrada-aumentada">${fmt(f[2])}</span><span class="entrada-aumentada">${fmt(f[3])}</span></div>`).join('')}</div>`;
}
function renderGauss() {
  const paso = Math.min(estado.gaussPaso || 0, gaussEstados.length-1);
  document.getElementById('gauss-actual').innerHTML = matrizAumentadaHTML(gaussEstados[paso]);
  document.getElementById('gauss-historial').innerHTML = gaussEstados.slice(0,paso+1).map((m,i) => `<div class="paso-gauss"><p>${i===0?'Matriz inicial':gaussOperaciones[i-1].etiqueta}</p>${matrizAumentadaHTML(m)}</div>`).join('');
  const opciones = document.getElementById('gauss-opciones');
  if (paso >= gaussOperaciones.length) {
    opciones.innerHTML = '<div class="resultado-lab"><strong>Proceso completo.</strong> La parte derecha es \\(A^{-1}=\\begin{pmatrix}3&-5\\\\-1&2\\end{pmatrix}\\).</div>';
    const feedback = document.getElementById('gauss-feedback');
    feedback.className = 'retroalimentacion ok';
    feedback.innerHTML = 'La matriz izquierda quedó convertida en la identidad.';
    estado.completadas.gauss = true;
    guardarEstado();
    marcarActividad('gauss',true);
  } else {
    opciones.innerHTML = gaussOperaciones[paso].opciones.map(([valor,etiqueta]) => `<button type="button" data-gauss="${valor}">${etiqueta}</button>`).join('');
    opciones.querySelectorAll('button').forEach(b => b.addEventListener('click', () => comprobarGauss(b.dataset.gauss)));
  }
  typeset(document.getElementById('gauss'));
}
function comprobarGauss(valor) {
  const paso = estado.gaussPaso || 0;
  const feedback = document.getElementById('gauss-feedback');
  if (valor === gaussOperaciones[paso].correcta) {
    estado.gaussPaso = paso + 1;
    guardarEstado();
    feedback.className = 'retroalimentacion ok';
    feedback.textContent = 'Operación correcta. Continuemos.';
    renderGauss();
  } else {
    feedback.className = 'retroalimentacion error';
    feedback.textContent = 'Esa operación no produce el próximo pivote o cero que necesitamos. Revisá la columna activa.';
  }
}
function reiniciarGauss() {
  estado.gaussPaso = 0;
  delete estado.completadas.gauss;
  guardarEstado();
  marcarActividad('gauss',false);
  const feedback = document.getElementById('gauss-feedback');
  feedback.className = 'retroalimentacion';
  feedback.textContent = '';
  renderGauss();
}

function renderCasoAplicacion() {
  const caso = aplicacionesCasos[casoActual];
  document.getElementById('caso-enunciado').innerHTML = `<h4>${caso.titulo}</h4><p>${caso.descripcion}</p>`;
  const bloques = [];
  caso.matrices.forEach((m,i) => {
    bloques.push(matrizHTML(m));
    if (caso.operadores[i]) bloques.push(`<strong class="simbolo-operacion">${caso.operadores[i]}</strong>`);
  });
  bloques.push('<strong class="simbolo-operacion">=</strong>');
  bloques.push(matrizHTML(caso.resultado));
  document.getElementById('caso-visual').innerHTML = `<div><div class="caso-visual__matrices">${bloques.join('')}</div><p class="caso-visual__leyenda">${caso.interpretacion}</p></div>`;
  const calculo = document.getElementById('caso-calculo');
  calculo.hidden = true;
  calculo.innerHTML = `<strong>Cálculo:</strong> ${caso.calculo}<br><strong>Interpretación:</strong> ${caso.interpretacion}`;
  typeset(document.getElementById('aplicaciones'));
}
function configurarCasos() {
  const selector = document.getElementById('caso-aplicacion');
  selector.innerHTML = aplicacionesCasos.map((c,i) => `<option value="${i}">${c.titulo}</option>`).join('');
  selector.addEventListener('change', () => { casoActual = Number(selector.value); renderCasoAplicacion(); });
  document.getElementById('mostrar-calculo-caso').addEventListener('click', () => {
    const caja = document.getElementById('caso-calculo');
    caja.hidden = !caja.hidden;
    typeset(caja);
  });
  renderCasoAplicacion();
}

function mezcla(array) { return [...array].sort(() => Math.random() - .5); }
function nuevaPractica() {
  practicaActual = practicaBanco[Math.floor(Math.random()*practicaBanco.length)];
  document.getElementById('practica-pregunta').innerHTML = practicaActual.pregunta;
  const opciones = mezcla(opcionesNormalizadas(practicaActual.opciones));
  document.getElementById('practica-opciones').innerHTML = opciones.map(o => `<label class="opcion opcion--tarjeta"><input type="radio" name="practica" value="${escapar(o.valor)}"><span class="opcion__contenido">${o.etiqueta}</span></label>`).join('');
  document.getElementById('practica-comprobar').disabled = false;
  const feedback = document.getElementById('practica-feedback');
  feedback.className = 'retroalimentacion';
  feedback.textContent = '';
  typeset(document.getElementById('practica-final'));
}
function comprobarPractica() {
  if (!practicaActual) return;
  const input = document.querySelector('input[name="practica"]:checked');
  const feedback = document.getElementById('practica-feedback');
  document.querySelectorAll('#practica-opciones .opcion').forEach(op => op.classList.remove('correcta-marcada','incorrecta-marcada'));
  if (!input) {
    feedback.className = 'retroalimentacion error';
    feedback.textContent = 'Elegí una opción antes de comprobar.';
    return;
  }
  const respuesta = input.value;
  const elegida = input.closest('.opcion');
  const correctaInput = [...document.querySelectorAll('input[name="practica"]')].find(i => i.value === practicaActual.correcta);
  if (respuesta === practicaActual.correcta) {
    racha++;
    mejorRacha = Math.max(mejorRacha,racha);
    elegida.classList.add('correcta-marcada');
    feedback.className = 'retroalimentacion ok';
    feedback.innerHTML = `<strong>Correcto.</strong> ${practicaActual.explicacion}`;
  } else {
    racha = 0;
    elegida.classList.add('incorrecta-marcada');
    correctaInput?.closest('.opcion')?.classList.add('correcta-marcada');
    const etiqueta = opcionesNormalizadas(practicaActual.opciones).find(o => o.valor === practicaActual.correcta)?.etiqueta || practicaActual.correcta;
    feedback.className = 'retroalimentacion error';
    feedback.innerHTML = `<strong>No es esa.</strong> La respuesta correcta es ${etiqueta}. ${practicaActual.explicacion}`;
  }
  document.getElementById('racha').textContent = `Racha: ${racha}`;
  guardarEstado();
  typeset(feedback);
}

function agregarNavegacionSecuencial(enlaces) {
  enlaces.forEach((enlace,indice) => {
    const seccion = document.querySelector(enlace.getAttribute('href'));
    if (!seccion || seccion.querySelector(':scope > .navegacion-secuencial')) return;
    const contenedor = document.createElement('nav');
    contenedor.className = 'navegacion-secuencial';
    contenedor.setAttribute('aria-label','Navegación entre secciones');
    if (enlaces[indice-1]) {
      const a = document.createElement('a'); a.className='boton boton--fantasma'; a.href=enlaces[indice-1].getAttribute('href'); a.textContent=`← ${enlaces[indice-1].textContent.trim()}`; contenedor.appendChild(a);
    }
    if (enlaces[indice+1]) {
      const a = document.createElement('a'); a.className='boton boton--secundario boton--siguiente'; a.href=enlaces[indice+1].getAttribute('href'); a.textContent=`${enlaces[indice+1].textContent.trim()} →`; contenedor.appendChild(a);
    }
    seccion.appendChild(contenedor);
  });
}
function configurarNavegacion() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('lista-navegacion');
  const enlaces = [...nav.querySelectorAll('a[href^="#"]')];
  const secciones = enlaces.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function mostrar(id,{actualizarUrl=false,desplazar=true}={}) {
    const destino = document.getElementById(id) || document.getElementById('inicio');
    secciones.forEach(s => { const activa=s===destino; s.classList.toggle('activa',activa); s.setAttribute('aria-hidden',String(!activa)); if ('inert' in s) s.inert=!activa; });
    enlaces.forEach(a => { const activa=a.getAttribute('href')===`#${destino.id}`; a.classList.toggle('activo',activa); activa?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'); });
    nav.classList.remove('abierto'); toggle.setAttribute('aria-expanded','false');
    if (actualizarUrl && location.hash !== `#${destino.id}`) history.pushState({seccion:destino.id},'',`#${destino.id}`);
    if (desplazar) destino.scrollIntoView({behavior:'smooth',block:'start'});
  }
  toggle.addEventListener('click',() => { const abierto=nav.classList.toggle('abierto'); toggle.setAttribute('aria-expanded',String(abierto)); });
  document.addEventListener('click',e => { const a=e.target.closest('a[href^="#"]'); if(!a)return; const id=a.getAttribute('href').slice(1); if(!document.getElementById(id))return; e.preventDefault(); mostrar(id,{actualizarUrl:true,desplazar:true}); });
  window.addEventListener('popstate',() => mostrar(location.hash.slice(1)||'inicio',{desplazar:false}));
  window.addEventListener('hashchange',() => mostrar(location.hash.slice(1)||'inicio',{desplazar:false}));
  agregarNavegacionSecuencial(enlaces);
  mostrar(location.hash.slice(1)||'inicio',{desplazar:false});
}
function configurarEventos() {
  document.querySelectorAll('[data-check]').forEach(b => b.addEventListener('click',() => comprobarActividad(b.dataset.check)));
  document.querySelectorAll('[data-reset]').forEach(b => b.addEventListener('click',() => borrarActividad(b.dataset.reset)));
  ['formula-matriz','filas-matriz','columnas-matriz'].forEach(id => document.getElementById(id).addEventListener('change',() => actualizarConstructor([0,0])));
  document.getElementById('producto-anterior').addEventListener('click',() => { productoPaso=Math.max(0,productoPaso-1); renderProducto(); });
  document.getElementById('producto-siguiente').addEventListener('click',() => { productoPaso=Math.min(productoPasos.length-1,productoPaso+1); renderProducto(); });
  document.getElementById('comprobar-ecuacion-lab').addEventListener('click',comprobarEcuacionLab);
  document.getElementById('reiniciar-gauss').addEventListener('click',reiniciarGauss);
  document.getElementById('practica-nueva').addEventListener('click',nuevaPractica);
  document.getElementById('practica-comprobar').addEventListener('click',comprobarPractica);
  const nombre = document.getElementById('nombre-estudiante');
  nombre.value = estado.nombre || '';
  nombre.addEventListener('input',() => { estado.nombre=nombre.value; guardarEstado(); });
  document.getElementById('imprimir').addEventListener('click',() => window.print());
  document.getElementById('reiniciar').addEventListener('click',() => {
    if (!confirm('¿Querés borrar todas las respuestas y el progreso guardado en este dispositivo?')) return;
    try { localStorage.removeItem(CLAVE); } catch {}
    estado = estadoInicial(); racha=0; mejorRacha=0; nombre.value='';
    document.getElementById('racha').textContent='Racha: 0';
    document.querySelectorAll('.retroalimentacion').forEach(e => { e.textContent=''; e.className='retroalimentacion'; });
    renderTodo(); renderGauss(); mostrarToast('Progreso reiniciado.');
  });
}
function iniciar() {
  renderTodo();
  configurarExploradorCeldas();
  actualizarConstructor([0,0]);
  configurarCalculadora();
  renderProducto();
  renderGauss();
  configurarCasos();
  configurarEventos();
  configurarNavegacion();
  document.getElementById('racha').textContent = `Racha: ${racha}`;
}

document.addEventListener('DOMContentLoaded',iniciar);
