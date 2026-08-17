
/* VLAW - JavaScript compartido entre todas las páginas */
(function () {
  const STORAGE_USERS = "vlaw_users";
  const STORAGE_CURRENT = "vlaw_current";

  const esc = (v = "") => String(v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const getUsers = () => JSON.parse(localStorage.getItem(STORAGE_USERS) || "[]");
  const saveUsers = users => localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
  const currentUser = () => localStorage.getItem(STORAGE_CURRENT);

  const images = {
    goteo: "https://commons.wikimedia.org/wiki/Special:FilePath/Drip_irrigation_%282552390830%29.jpg?width=500",
    mulch: "https://commons.wikimedia.org/wiki/Special:FilePath/Drip_irrigation_and_mulching.jpg?width=500",
    vinedo: "https://commons.wikimedia.org/wiki/Special:FilePath/VineyardDrip.JPG?width=500",
    fuga: "https://commons.wikimedia.org/wiki/Special:FilePath/Irrigation_drip_leaks.jpg?width=500",
    aspersor: "https://commons.wikimedia.org/wiki/Special:FilePath/Sprinkler03.jpg?width=500",
    aspersor2: "https://commons.wikimedia.org/wiki/Special:FilePath/Irrigational_sprinkler.jpg?width=500",
    sensor: "https://commons.wikimedia.org/wiki/Special:FilePath/Soil_moisture_sensor.JPG?width=500",
    sistema: "https://commons.wikimedia.org/wiki/Special:FilePath/Irrigation_system.JPG?width=500",
    solar: "https://commons.wikimedia.org/wiki/Special:FilePath/Solar_panels_on_the_edge_of_farm.jpg?width=500"
  };

  const data = {
    "grid-sobre": [
      ["mision","Nuestra Misión","Reducir el desperdicio de agua en la agricultura con tecnología accesible.",
       "Diseñamos e instalamos sistemas que entregan exactamente el agua que cada cultivo necesita, ni una gota más, ayudando a productores a rendir más usando menos recursos.",images.vinedo],
      ["equipo","Nuestro Equipo","Ingenieros agrónomos e hidráulicos con experiencia real en campo.",
       "Combinamos conocimiento agronómico e hidráulico para diseñar soluciones que funcionan en la práctica, acompañando cada proyecto de principio a fin.",images.fuga],
      ["valores","Nuestros Valores","Sostenibilidad, precisión y cercanía con cada cliente.",
       "Recomendamos lo que el terreno realmente necesita, damos seguimiento después de la instalación y medimos resultados, no solo entregamos equipos.",images.solar]
    ],
    "serviciosGrid": [
      ["goteo","Riego por Goteo","Aplicación precisa de agua directamente en la raíz de cada planta.",
       "Ideal para huertos y cultivos en hilera. Minimiza la evaporación y el crecimiento de maleza, siendo el sistema más eficiente para cultivos de alto valor.",images.goteo],
      ["aspersion","Riego por Aspersión","Cobertura uniforme para jardines, céspedes y áreas verdes.",
       "Simula la lluvia natural cubriendo grandes superficies de forma pareja. Recomendado para pastos, forrajes y áreas verdes extensas.",images.aspersor],
      ["microaspersion","Microaspersión","Solución intermedia entre goteo y aspersión.",
       "Perfecta para viveros y cultivos sensibles que necesitan humedad constante sin encharcar el suelo.",images.mulch],
      ["mantenimiento","Mantenimiento Preventivo y Correctivo","Revisiones periódicas y reparación de sistemas.",
       "Programamos visitas de revisión para detectar fugas, obstrucciones o desgaste antes de que afecten tu cosecha o jardín.",images.fuga],
      ["consultoria","Consultoría en Eficiencia Hídrica","Análisis para reducir el consumo de agua sin afectar la producción.",
       "Evaluamos tu sistema actual y te entregamos un plan concreto para ahorrar agua y energía sin sacrificar rendimiento.",images.sensor],
      ["automatizacion","Automatización y Control Remoto","Programa y monitorea el riego desde cualquier lugar.",
       "Controladores inteligentes conectados a internet que te avisan si algo falla y permiten ajustar horarios desde el celular.",images.sistema]
    ],
    "grid-sistemas": [
      ["goteo2","Riego por Goteo","Ideal para huertos y cultivos en hilera.",
       "Entrega agua gota a gota directo a la raíz, reduciendo pérdidas por evaporación y viento.",images.goteo],
      ["aspersion2","Riego por Aspersión","Cobertura uniforme para jardines y céspedes.",
       "Distribuye agua como lluvia artificial, cubriendo grandes extensiones de forma pareja.",images.aspersor2],
      ["subterraneo","Riego Subterráneo","Máxima eficiencia con mínima evaporación.",
       "Las líneas se instalan bajo tierra, entregando agua directo a la zona radicular. Ideal para climas cálidos y secos.",images.mulch]
    ],
    "grid-productos": [
      ["controladores","Controladores Automáticos","Programa y monitorea el riego con conexión remota.",
       "Permiten crear horarios de riego, recibir alertas y ajustar el sistema desde el celular, incluso desde otra ciudad.",images.sistema],
      ["sensores","Sensores de Humedad","Miden en tiempo real la humedad del suelo.",
       "El sistema solo riega cuando el suelo realmente lo necesita, evitando el desperdicio de agua y energía.",images.sensor],
      ["tuberias","Tuberías y Goteros","Materiales de alta durabilidad para uso en campo.",
       "Resistentes a rayos UV, presión y obstrucciones, pensados para años de uso continuo con mínimo mantenimiento.",images.fuga]
    ],
    "grid-proyectos": [
      ["vinedos","Viñedos · 200 hectáreas","Modernización completa de un sistema de riego tradicional.",
       "Reemplazamos aspersión antigua por goteo tecnificado, reduciendo el consumo de agua en más de un tercio sin afectar la producción.",images.vinedo],
      ["parques","Parques Públicos","Riego inteligente en tres ciudades.",
       "Instalamos controladores automáticos y sensores de humedad en áreas verdes municipales, bajando costos de mantenimiento.",images.aspersor],
      ["coop-proy","Cooperativas Agrícolas","Sistemas compartidos para pequeños productores.",
       "Diseñamos infraestructura de riego colectiva que varias familias administran de forma conjunta, reduciendo el costo por hectárea.",images.mulch]
    ],
    "grid-clientes": [
      ["agricultores","Agricultores Independientes","Soluciones a la medida del tamaño de cada predio.",
       "Acompañamos desde el diagnóstico hasta la instalación, con planes de pago flexibles.",images.goteo],
      ["cooperativas","Cooperativas Agrícolas","Proyectos colectivos con múltiples beneficiarios.",
       "Coordinamos instalaciones donde varias familias comparten infraestructura, optimizando costos.",images.mulch],
      ["municipios","Municipios","Riego eficiente para espacios públicos.",
       "Trabajamos con gobiernos locales para modernizar el riego de parques, camellones y áreas verdes urbanas.",images.aspersor]
    ],
    "grid-sostenibilidad": [
      ["ahorro","Ahorro de Agua","Hasta 40% menos consumo frente a métodos tradicionales.",
       "La combinación de riego de precisión y sensores de humedad evita el desperdicio, entregando solo el agua que la planta necesita.",images.goteo],
      ["energia","Energía Solar","Bombeo de agua con energía limpia.",
       "Instalamos sistemas de bombeo solar que reducen la dependencia de combustibles fósiles y bajan los costos operativos.",images.solar],
      ["impacto","Impacto Ambiental","Menos presión sobre fuentes de agua locales.",
       "Cada sistema que instalamos ayuda a preservar acuíferos y ríos, protegiendo el recurso para las próximas generaciones.",images.sistema]
    ],
    "grid-faq": [
      ["tiempo","¿Cuánto tiempo toma una instalación?","",
       "Entre 3 y 10 días según el tamaño y la complejidad del proyecto.",""],
      ["garantia","¿Ofrecen garantía?","",
       "Sí, todos nuestros sistemas cuentan con 2 años de garantía sobre equipos e instalación.",""],
      ["costo","¿Cómo se calcula el costo?","",
       "Depende del área, el tipo de sistema y el terreno. Hacemos una visita técnica gratuita para entregar una cotización precisa.",""]
    ],
    "grid-contacto": [
      ["ventas","Ventas","Cotizaciones y nuevos proyectos.",
       "Cuéntanos sobre tu terreno o jardín y te ayudamos a elegir el sistema adecuado. Correo: ventas@vlaw.com",images.vinedo],
      ["soporte","Soporte Técnico","Ayuda con sistemas ya instalados.",
       "Si tienes un sistema VLAW, sistemas verdes y necesitas mantenimiento o revisión, escríbenos. Correo: soporte@vlaw.com",images.fuga],
      ["oficinas","Oficinas","Armenia, Sonsonate, calle #13.",
       "Visítanos con cita previa para conocer nuestros equipos de demostración. Tel: +503 7195 9635",images.sistema]
    ]
  };

  function renderCards() {
    Object.entries(data).forEach(([gridId, items]) => {
      const grid = document.getElementById(gridId);
      if (!grid) return;
      const faq = gridId === "grid-faq";
      grid.innerHTML = items.map(it => `
        <div class="info-card">
          <h3>${esc(it[1])}</h3>
          ${it[2] ? `<p>${esc(it[2])}</p>` : ""}
          <button class="info-btn" type="button" data-target="info-${gridId}-${esc(it[0])}">${faq ? "Ver respuesta" : "Más información"}</button>
          <div class="info-box" id="info-${gridId}-${esc(it[0])}">
            ${it[4] ? `<img class="info-img" src="${it[4]}" alt="${esc(it[1])}" loading="lazy">` : ""}
            <p class="detalle-text">${esc(it[3])}</p>
          </div>
        </div>`).join("");

      grid.querySelectorAll(".info-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const box = document.getElementById(btn.dataset.target);
          const active = box.classList.contains("active");
          grid.querySelectorAll(".info-box").forEach(b => b.classList.remove("active"));
          grid.querySelectorAll(".info-btn").forEach(b => b.textContent = faq ? "Ver respuesta" : "Más información");
          if (!active) {
            box.classList.add("active");
            btn.textContent = "Ocultar";
          }
        });
      });
    });
  }

  function updateAuthUI() {
    const name = currentUser();
    const loginBtn = document.getElementById("loginBtn");
    const panel = document.getElementById("userPanel");
    const nameSpan = document.getElementById("userName");
    if (name) {
      const user = getUsers().find(u => u.user === name);
      if (loginBtn) loginBtn.style.display = "none";
      if (panel) panel.style.display = "flex";
      if (nameSpan) nameSpan.textContent = "Hola, " + (user?.name || name);
    } else {
      if (loginBtn) loginBtn.style.display = "inline-block";
      if (panel) panel.style.display = "none";
    }
    const mi = document.querySelector('[data-page="Mi información"]');
    if (mi) mi.style.display = name ? "block" : "none";
  }

  function setupAuth() {
    const overlay = document.getElementById("modalOverlay");
    const loginBtn = document.getElementById("loginBtn");
    if (!overlay || !loginBtn) return;

    loginBtn.onclick = () => overlay.classList.add("active");
    document.getElementById("closeModal").onclick = () => overlay.classList.remove("active");
    document.getElementById("showRegister").onclick = () => {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("registerForm").style.display = "block";
    };
    document.getElementById("showLogin").onclick = () => {
      document.getElementById("registerForm").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
    };

    document.getElementById("registerSubmit").onclick = () => {
      const ids = ["regName","regEmail","regPhone","regCity","regCompany","regUser","regPass"];
      const [name,email,phone,city,company,user,pass] = ids.map(id => document.getElementById(id).value.trim());
      const msg = document.getElementById("registerMsg");
      if (!name || !email || !phone || !city || !user || !pass) {
        msg.textContent = "Completa todos los campos obligatorios.";
        msg.className = "msg error"; return;
      }
      const users = getUsers();
      if (users.some(u => u.user === user)) {
        msg.textContent = "Ese usuario ya existe.";
        msg.className = "msg error"; return;
      }
      users.push({user,pass,name,email,phone,city,company,project:""});
      saveUsers(users);
      msg.textContent = "Cuenta creada. Ahora inicia sesión.";
      msg.className = "msg success";
    };

    document.getElementById("loginSubmit").onclick = () => {
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value.trim();
      const found = getUsers().find(u => u.user === user && u.pass === pass);
      const msg = document.getElementById("loginMsg");
      if (!found) {
        msg.textContent = "Usuario o contraseña incorrectos.";
        msg.className = "msg error"; return;
      }
      localStorage.setItem(STORAGE_CURRENT, user);
      overlay.classList.remove("active");
      updateAuthUI();
      if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/")) {
        location.href = "mi-informacion.html";
      }
    };

    document.getElementById("logoutBtn").onclick = () => {
      localStorage.removeItem(STORAGE_CURRENT);
      updateAuthUI();
    };
  }

  function renderProfile() {
    const c = document.getElementById("miInfoContainer");
    if (!c) return;
    const username = currentUser();
    if (!username) {
      c.innerHTML = `<div class="highlight-box"><p><strong>Sin sesión activa.</strong> Inicia sesión para ver tu información.</p></div>`;
      return;
    }
    const users = getUsers();
    const u = users.find(x => x.user === username);
    if (!u) { localStorage.removeItem(STORAGE_CURRENT); return; }

    c.innerHTML = `
      <div class="user-form">
        <div class="field"><label>Nombre completo</label><input id="infoName" value="${esc(u.name)}"></div>
        <div class="field"><label>Usuario</label><input id="infoUser" value="${esc(u.user)}" readonly></div>
        <div class="field"><label>Correo electrónico</label><input id="infoEmail" type="email" value="${esc(u.email)}"></div>
        <div class="field"><label>Teléfono</label><input id="infoPhone" value="${esc(u.phone)}"></div>
        <div class="field"><label>Ciudad</label><input id="infoCity" value="${esc(u.city)}"></div>
        <div class="field"><label>Empresa o proyecto</label><input id="infoCompany" value="${esc(u.company)}"></div>
        <div class="field full-width"><label>Necesidad o descripción del proyecto</label><textarea id="infoProject">${esc(u.project)}</textarea></div>
        <div class="field full-width"><button class="btn" id="guardarInfoBtn">Guardar información</button></div>
      </div>
      <p class="msg" id="profileMsg"></p>`;

    document.getElementById("guardarInfoBtn").onclick = () => {
      u.name = document.getElementById("infoName").value.trim();
      u.email = document.getElementById("infoEmail").value.trim();
      u.phone = document.getElementById("infoPhone").value.trim();
      u.city = document.getElementById("infoCity").value.trim();
      u.company = document.getElementById("infoCompany").value.trim();
      u.project = document.getElementById("infoProject").value.trim();
      const msg = document.getElementById("profileMsg");
      if (!u.name || !u.email || !u.phone || !u.city) {
        msg.textContent = "Completa nombre, correo, teléfono y ciudad para continuar.";
        msg.className = "msg error"; return;
      }
      saveUsers(users);
      msg.textContent = "Tu información se guardó correctamente.";
      msg.className = "msg success";
      updateAuthUI();
    };
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCards();
    setupAuth();
    renderProfile();
    updateAuthUI();

    const current = document.querySelector(".nav-link[href='" + location.pathname.split("/").pop() + "']");
    if (current) current.classList.add("active");

    document.querySelectorAll(".menu-toggle").forEach(btn => {
      btn.onclick = () => {
        const nav = document.querySelector("nav.tabs");
        const open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      };
    });
  });
})();
