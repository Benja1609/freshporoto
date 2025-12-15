// ======================================================
// --- 1. CONFIGURACIÓN EMAILJS ---
// ======================================================
// (MANTENER TU CONFIGURACIÓN ORIGINAL AQUÍ)
const EMAIL_SERVICE_ID = 'service_05uqqfj';   
const EMAIL_PUBLIC_KEY = '-3Fm0PeEIL0MF9snd';  
const EMAIL_TEMPLATE_RECOVERY_ID = 'template_ouhyyvm'; 
const EMAIL_TEMPLATE_WELCOME_ID = 'PEGAR_AQUI_TU_NUEVA_TEMPLATE_ID'; 

(function() {
    // emailjs.init(EMAIL_PUBLIC_KEY); // Descomentar si usas EmailJS real
})();


// ======================================================
// --- 2. GESTIÓN DE DATOS Y USUARIOS ---
// ======================================================

/* --- CORRECCIÓN DE IMÁGENES EN EL MENÚ --- */
const menuItems = [
    { id: 1, category: 'principal', name: "Pastel de Choclo", price: 5900, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?auto=format&fit=crop&w=400" },
    { id: 2, category: 'principal', name: "Cazuela de Vacuno", price: 5200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 3)
    { id: 3, category: 'principal', name: "Porotos con Riendas", price: 4800, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1616432614230-461685363656?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 4)
    { id: 4, category: 'principal', name: "Charquicán", price: 4900, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1604503682701-75f2e7463a47?auto=format&fit=crop&w=400" },
    { id: 5, category: 'principal', name: "Carne Mechada", price: 6500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 6)
    { id: 6, category: 'principal', name: "Lomo a lo Pobre", price: 8500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 7)
    { id: 7, category: 'principal', name: "Humitas (2u)", price: 5000, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1615486511484-92e172cc416d?auto=format&fit=crop&w=400" },
    { id: 8, category: 'principal', name: "Pollo Arvejado", price: 5200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 9)
    { id: 9, category: 'principal', name: "Paila Marina", price: 7500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1613564826330-27f234807569?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 11)
    { id: 11, category: 'principal', name: "Lasaña Boloñesa", price: 5800, provider: "La Nonna", img: "https://images.unsplash.com/photo-1619895092538-128341c89c13?auto=format&fit=crop&w=400" },
    { id: 12, category: 'principal', name: "Pizza Margarita", price: 5000, provider: "Luigi's", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400" },
    { id: 13, category: 'principal', name: "Pizza Pepperoni", price: 5500, provider: "Luigi's", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400" },
    { id: 14, category: 'principal', name: "Spaghetti Carbonara", price: 5600, provider: "La Nonna", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=400" },
    { id: 15, category: 'principal', name: "Sushi Mix (12p)", price: 6900, provider: "SushiKing", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=400" },
    { id: 17, category: 'principal', name: "Ají de Gallina", price: 6200, provider: "Sabor Peruano", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 18)
    { id: 18, category: 'principal', name: "Lomo Saltado", price: 7200, provider: "Sabor Peruano", img: "https://images.unsplash.com/photo-1628476648447-21a10ba24347?auto=format&fit=crop&w=400" },
    // IMAGEN CORREGIDA (ID 30)
    { id: 30, category: 'principal', name: "Salmón con Arroz", price: 7900, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=400" },
    { id: 31, category: 'principal', name: "Bowl César Pollo", price: 4500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=400" },
    { id: 10, category: 'salada', name: "Empanada Pino (2u)", price: 3800, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1553878726-2186835a6397?auto=format&fit=crop&w=400" },
    { id: 16, category: 'salada', name: "Sushi Avocado", price: 6200, provider: "SushiKing", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400" },
    { id: 19, category: 'salada', name: "Cebiche", price: 7000, provider: "PacificSea", img: "https://images.unsplash.com/photo-1573295802271-e940a0211516?auto=format&fit=crop&w=400" },
    { id: 20, category: 'salada', name: "Tacos al Pastor", price: 5400, provider: "MexicoLindo", img: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=400" },
    { id: 21, category: 'salada', name: "Hamburguesa Veggie", price: 5500, provider: "GreenLife", img: "https://images.unsplash.com/photo-1520072959219-c595dc3f3a58?auto=format&fit=crop&w=400" },
    { id: 22, category: 'salada', name: "Cheeseburger Doble", price: 6500, provider: "BurgerBros", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400" },
    { id: 23, category: 'salada', name: "Completo Italiano", price: 2500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1623224716926-28fa0332822a?auto=format&fit=crop&w=400" },
    { id: 24, category: 'salada', name: "Churrasco Italiano", price: 4200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1565060299525-45229b4724b5?auto=format&fit=crop&w=400" },
    { id: 25, category: 'salada', name: "Fajitas Pollo", price: 5400, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1575797379201-16327471965e?auto=format&fit=crop&w=400" },
    { id: 26, category: 'salada', name: "Wrap Pollo Palta", price: 4200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400" },
    { id: 27, category: 'salada', name: "Quiche Espinaca", price: 4500, provider: "GreenLife", img: "https://images.unsplash.com/photo-1563223552-30d0130e13eb?auto=format&fit=crop&w=400" },
    { id: 28, category: 'salada', name: "Papas Fritas", price: 2500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1573080496987-a199f8cd75ec?auto=format&fit=crop&w=400" },
    { id: 29, category: 'salada', name: "Nuggets (6u)", price: 3000, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400" },
    { id: 32, category: 'salada', name: "Bowl Quinoa", price: 4900, provider: "GreenLife", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400" },
    { id: 33, category: 'salada', name: "Ensalada Griega", price: 4600, provider: "GreenLife", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400" },
    { id: 34, category: 'salada', name: "Ensalada de Frutas", price: 2500, provider: "GreenLife", img: "https://images.unsplash.com/photo-1519996529931-28324d1a2924?auto=format&fit=crop&w=400" },
    { id: 35, category: 'dulce', name: "Tiramisú", price: 3200, provider: "SweetCorner", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400" },
    { id: 36, category: 'dulce', name: "Sopaipillas Pasadas", price: 3500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1601057390237-775b06f236e8?auto=format&fit=crop&w=400" },
    { id: 37, category: 'dulce', name: "Brownie Helado", price: 3500, provider: "SweetCorner", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=400" },
    { id: 38, category: 'dulce', name: "Cheesecake", price: 3800, provider: "SweetCorner", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400" },
    { id: 39, category: 'dulce', name: "Leche Asada", price: 2800, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1616031036734-7a469736c28f?auto=format&fit=crop&w=400" },
    { id: 40, category: 'dulce', name: "Muffin Arándano", price: 1500, provider: "SweetCorner", img: "https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&w=400" },
    { id: 41, category: 'dulce', name: "Pie de Limón", price: 3000, provider: "SweetCorner", img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400" },
    { id: 42, category: 'dulce', name: "Waffles Dulces", price: 3500, provider: "SweetCorner", img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=400" },
    { id: 50, category: 'dulce', name: "Mote con Huesillos", price: 2500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1630440330990-2796246e4b90?auto=format&fit=crop&w=400" },
    { id: 43, category: 'liquidos', sub: 'bebida', name: "Jugo Natural 500cc", price: 2000, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400" },
    { id: 44, category: 'liquidos', sub: 'bebida', name: "Bebida Lata 350cc", price: 1200, provider: "CocaCola", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400" },
    { id: 48, category: 'liquidos', sub: 'bebida', name: "Limonada Menta", price: 2200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400" },
    { id: 46, category: 'liquidos', sub: 'cafe', name: "Café Americano", price: 1500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=400" },
    { id: 51, category: 'liquidos', sub: 'cafe', name: "Espresso Doble", price: 1800, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400" },
    { id: 56, category: 'liquidos', sub: 'cafe', name: "Cappuccino", price: 2000, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400" },
    { id: 57, category: 'liquidos', sub: 'cafe', name: "Latte Vainilla", price: 2200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1556484687-30636164638a?auto=format&fit=crop&w=400" },
    { id: 47, category: 'liquidos', sub: 'te', name: "Té Helado", price: 1800, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400" },
    { id: 52, category: 'liquidos', sub: 'te', name: "Té de Hierbas", price: 1200, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=400" },
    { id: 58, category: 'liquidos', sub: 'te', name: "Té Chai Latte", price: 2000, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1576092762791-2f9a963e7741?auto=format&fit=crop&w=400" },
    { id: 59, category: 'liquidos', sub: 'te', name: "Té Verde Jazmín", price: 1500, provider: "FreshPoroto", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=400" },
    { id: 53, category: 'liquidos', sub: 'coctel', name: "Pisco Sour", price: 3500, provider: "Bar", img: "https://images.unsplash.com/photo-1599021406437-0138402db399?auto=format&fit=crop&w=400" },
    { id: 54, category: 'liquidos', sub: 'coctel', name: "Mojito Cubano", price: 3900, provider: "Bar", img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32d?auto=format&fit=crop&w=400" },
    { id: 60, category: 'liquidos', sub: 'coctel', name: "Ramazzotti Spritz", price: 4200, provider: "Bar", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400" },
    { id: 61, category: 'liquidos', sub: 'coctel', name: "Aperol Spritz", price: 4200, provider: "Bar", img: "https://images.unsplash.com/photo-1560512823-8db03e1b0f49?auto=format&fit=crop&w=400" },
    { id: 62, category: 'liquidos', sub: 'coctel', name: "Mango Sour", price: 3800, provider: "Bar", img: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=400" },
    { id: 49, category: 'liquidos', sub: 'alcohol', name: "Cerveza Lager", price: 2500, provider: "Heineken", img: "https://images.unsplash.com/photo-1623247293527-3df382b683df?auto=format&fit=crop&w=400" },
    { id: 55, category: 'liquidos', sub: 'alcohol', name: "Copa Vino Tinto", price: 2900, provider: "Bar", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400" },
    { id: 63, category: 'liquidos', sub: 'alcohol', name: "Royal Guard", price: 2800, provider: "Bar", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400" },
    { id: 64, category: 'liquidos', sub: 'alcohol', name: "Austral Calafate", price: 3200, provider: "Bar", img: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=400" },
    { id: 65, category: 'liquidos', sub: 'alcohol', name: "Kuntsmann Torobayo", price: 3200, provider: "Bar", img: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=400" }
];

let myOrders = [];
let userName = "Usuario";
let deliveryType = "pickup";
// NUEVO: Variable para el tipo de pago
let paymentType = "cash"; 
let generatedRecoveryCode = null;

// Funciones Auxiliares para la "Base de Datos" de Usuarios en LocalStorage
function getUsersDB() {
    const users = localStorage.getItem('fp_users_db');
    return users ? JSON.parse(users) : [];
}

function saveUserToDB(user) {
    const users = getUsersDB();
    const exists = users.find(u => u.email === user.email);
    if (!exists) {
        users.push(user);
        localStorage.setItem('fp_users_db', JSON.stringify(users));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const activeSessionEmail = localStorage.getItem('fp_active_session_email');
    
    if (activeSessionEmail) {
        const users = getUsersDB();
        const user = users.find(u => u.email === activeSessionEmail);
        
        if (user) {
            userName = user.name;
            updateUserDisplay();
        } else {
            logout(); 
        }
    }
    
    renderMenu();
    showSection('about'); 
});

// --- AUTH SYSTEM (LOGIN, REGISTER, RECOVERY) ---
// (MANTENER TODAS LAS FUNCIONES DE AUTH ORIGINALES: openAuthModal, closeAuthModal, switchAuth, showStatusMsg, login, register, recoverPassword, validateCode)
function openAuthModal(mode = 'login') {
    document.getElementById('auth-modal').style.display = 'flex';
    document.getElementById('auth-msg').style.display = 'none';
    const codeInput = document.getElementById('input-code');
    if(codeInput) codeInput.value = "";
    switchAuth(mode);
}

function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function switchAuth(mode) {
    document.querySelectorAll('.form-view').forEach(f => f.classList.remove('active'));
    document.getElementById('form-' + mode).classList.add('active');
    const tabs = document.querySelector('.auth-tabs');
    if(mode === 'recovery' || mode === 'code-validation') {
        tabs.style.display = 'none';
    } else {
        tabs.style.display = 'flex';
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        if(mode === 'login') document.querySelectorAll('.tab')[0].classList.add('active');
        if(mode === 'register') document.querySelectorAll('.tab')[1].classList.add('active');
    }
    document.getElementById('auth-msg').style.display = 'none';
}

function showStatusMsg(msg, type) {
    const el = document.getElementById('auth-msg');
    el.textContent = msg;
    el.className = 'status-msg ' + type;
    el.style.display = 'block';
}

function login() { 
    const inputEmail = document.getElementById('login-email').value;
    const inputPass = document.getElementById('login-pass').value;
    if(inputEmail === "" || inputPass === "") {
        showStatusMsg("Por favor completa todos los campos.", "error"); return;
    }
    const users = getUsersDB();
    const user = users.find(u => u.email === inputEmail);
    if (!user) { showStatusMsg("Este correo no está registrado.", "error"); return; }
    if (user.pass !== inputPass) { showStatusMsg("Contraseña incorrecta.", "error"); return; }
    localStorage.setItem('fp_active_session_email', user.email);
    showStatusMsg(`¡Bienvenido de nuevo, ${user.name}!`, "success");
    setTimeout(() => { userName = user.name; closeAuthModal(); updateUserDisplay(); }, 1000);
}

function register() { 
    const nameInput = document.getElementById('reg-name');
    const emailInput = document.getElementById('reg-email');
    const passInput = document.getElementById('reg-pass');
    const name = nameInput.value; const email = emailInput.value; const pass = passInput.value;
    const btn = document.querySelector('#form-register .btn-action');
    if(name === "" || email === "" || pass === "") { showStatusMsg("Todos los campos son obligatorios.", "error"); return; }
    if(!email.includes('@')) { showStatusMsg("Ingresa un correo válido.", "error"); return; }
    const users = getUsersDB();
    if(users.find(u => u.email === email)) { showStatusMsg("Este correo ya está registrado. Intenta iniciar sesión.", "error"); return; }
    const originalText = btn.innerText; btn.innerText = "Registrando..."; btn.disabled = true;
    const templateParams = { destinatario: email, name: name };
    // emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_WELCOME_ID, templateParams) // Descomentar para EmailJS
    Promise.resolve() // Simulación de éxito
        .then(() => {
            const newUser = { email: email, pass: pass, name: name };
            saveUserToDB(newUser);
            localStorage.setItem('fp_active_session_email', email);
            userName = name;
            showStatusMsg("¡Cuenta creada con éxito!", "success");
            setTimeout(() => {
                closeAuthModal(); updateUserDisplay();
                nameInput.value = ""; emailInput.value = ""; passInput.value = "";
                btn.innerText = originalText; btn.disabled = false;
            }, 2000);
        });
}

function recoverPassword() {
    const emailInput = document.getElementById('rec-email');
    const email = emailInput.value;
    const btn = document.querySelector('#form-recovery .btn-action');
    if(!email || !email.includes('@')) { showStatusMsg("Ingresa un correo válido.", "error"); return; }
    const users = getUsersDB();
    const user = users.find(u => u.email === email);
    if (!user) { showStatusMsg("Este correo no está registrado en el sistema.", "error"); return; }
    const originalText = btn.innerText; btn.innerText = "Enviando..."; btn.disabled = true;
    generatedRecoveryCode = Math.floor(100000 + Math.random() * 900000); 
    // const templateParams = { destinatario: email, recovery_code: generatedRecoveryCode, reply_to: email };
    // emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_RECOVERY_ID, templateParams) // Descomentar para EmailJS
    Promise.resolve() // Simulación de éxito
        .then(function(response) {
            showStatusMsg(`Código enviado a ${email} (Simulado: ${generatedRecoveryCode})`, "success");
            setTimeout(() => { switchAuth('code-validation'); showStatusMsg("Revisa tu correo e ingresa el código.", "success"); }, 1500);
        })
        .finally(() => { btn.innerText = originalText; btn.disabled = false; });
}

function validateCode() {
    const input = document.getElementById('input-code').value;
    if(!input) { showStatusMsg("Por favor escribe el código.", "error"); return; }
    if(input == generatedRecoveryCode) {
        showStatusMsg("¡Código Correcto! Contraseña restablecida.", "success");
        setTimeout(() => { switchAuth('login'); showStatusMsg("Ingresa con tu contraseña.", "success"); generatedRecoveryCode = null; document.getElementById('input-code').value = ""; }, 2000);
    } else {
        showStatusMsg("Código incorrecto. Intenta de nuevo.", "error");
    }
}

// --- UI Y NAVEGACIÓN ---
// (MANTENER FUNCIONES ORIGINALES: updateUserDisplay, logout, goToMenu, showSection, toggleSidebar)
function updateUserDisplay() {
    document.getElementById('top-auth-panel').style.display = 'none';
    document.getElementById('sidebar-user-info').style.display = 'flex';
    document.getElementById('username-display').innerText = userName;
    document.getElementById('avatar').innerText = userName.charAt(0).toUpperCase();
    const mobileLoginBtn = document.querySelector('.mobile-login-btn');
    if(mobileLoginBtn) mobileLoginBtn.style.display = 'none';
}

function logout() { 
    localStorage.removeItem('fp_active_session_email');
    location.reload(); 
}

function goToMenu() {
    const menuLink = document.querySelectorAll('.nav-link')[1];
    showSection('menu', menuLink);
}

function showSection(id, element) {
    document.getElementById('section-about').style.display = 'none';
    document.getElementById('section-menu').style.display = 'none';
    document.getElementById('section-orders').style.display = 'none';
    document.getElementById('section-' + id).style.display = 'block';
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    if (element) element.classList.add('active');
    else {
        if(id === 'orders') document.querySelectorAll('.nav-link')[2].classList.add('active');
        if(id === 'menu') document.querySelectorAll('.nav-link')[1].classList.add('active');
        if(id === 'about') document.querySelectorAll('.nav-link')[0].classList.add('active');
    }
    if(window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('open');
        document.querySelector('.sidebar-overlay').classList.remove('active');
    }
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.sidebar-overlay').classList.toggle('active');
}

// --- LÓGICA DEL CARRITO Y PEDIDOS ---

function setDeliveryMode(mode, element) {
    deliveryType = mode;
    document.querySelectorAll('.toggle-delivery').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    
    const form = document.getElementById('delivery-form');
    const feeRow = document.getElementById('delivery-fee-row');
    if(mode === 'delivery') {
        form.style.display = 'block';
        feeRow.style.display = 'flex';
    } else {
        form.style.display = 'none';
        feeRow.style.display = 'none';
    }
    updateTotal();
}

/* --- NUEVA FUNCIÓN: GESTIONAR MODO DE PAGO --- */
function setPaymentMode(mode, element) {
    paymentType = mode;
    // Gestionar clases activas en los botones de pago
    document.querySelectorAll('.toggle-payment').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    
    // Mostrar/ocultar detalles de transferencia
    const details = document.getElementById('bank-details');
    if(mode === 'transfer') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
        // Reiniciar el checkbox si se cambia de método
        document.getElementById('transfer-confirmed').checked = false;
    }
}

// (MANTENER FUNCIONES DE RENDERIZADO DEL MENÚ: renderMenu, renderCategory, renderSubCategory, createCard)
function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    renderCategory(container, 'Platos de Comida', menuItems.filter(i => i.category === 'principal'));
    renderCategory(container, 'Otras Cosas Saladas', menuItems.filter(i => i.category === 'salada'));
    renderCategory(container, 'Cosas Dulces', menuItems.filter(i => i.category === 'dulce'));
    const liquids = menuItems.filter(i => i.category === 'liquidos');
    if(liquids.length > 0) {
        const liqHeader = document.createElement('div');
        liqHeader.className = 'category-header';
        liqHeader.innerHTML = '<i class="fas fa-glass-martini-alt"></i> Líquidos';
        container.appendChild(liqHeader);
        renderSubCategory(container, 'Bebidas y Jugos', liquids.filter(i => i.sub === 'bebida'));
        renderSubCategory(container, 'Café', liquids.filter(i => i.sub === 'cafe'));
        renderSubCategory(container, 'Té', liquids.filter(i => i.sub === 'te'));
        renderSubCategory(container, 'Cócteles', liquids.filter(i => i.sub === 'coctel'));
        renderSubCategory(container, 'Bebidas Alcohólicas', liquids.filter(i => i.sub === 'alcohol'));
    }
}

function renderCategory(container, title, items) {
    if(items.length === 0) return;
    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `<i class="fas fa-utensils"></i> ${title}`;
    container.appendChild(header);
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    items.forEach(item => grid.appendChild(createCard(item)));
    container.appendChild(grid);
}

function renderSubCategory(container, title, items) {
    if(items.length === 0) return;
    const header = document.createElement('div');
    header.className = 'subcategory-header';
    header.innerText = title;
    container.appendChild(header);
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    items.forEach(item => grid.appendChild(createCard(item)));
    container.appendChild(grid);
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.innerHTML = `
        <div class="dish-img-container">
            <span class="badge">${item.provider}</span>
            <img src="${item.img}" class="dish-img" alt="${item.name}">
        </div>
        <div class="dish-content">
            <div class="dish-title">${item.name}</div>
            <div class="dish-footer">
                <div class="dish-price">$${item.price.toLocaleString('es-CL')}</div>
                <button class="btn-add" onclick="addOrder(${item.id})"><i class="fas fa-plus"></i></button>
            </div>
        </div>`;
    return card;
}

// (MANTENER FUNCIONES DEL CARRITO: addOrder, updateCartUI, updateTotal, removeOrder, showToast)
function addOrder(id) {
    const item = {...menuItems.find(i => i.id === id)};
    myOrders.push(item);
    updateCartUI();
    showToast("Agregado al pedido");
}

function updateCartUI() {
    const list = document.getElementById('orders-list');
    document.getElementById('mobile-cart-count').innerText = myOrders.length;
    list.innerHTML = '';
    const cartActions = document.getElementById('cart-actions');
    if(myOrders.length === 0) {
        list.innerHTML = '<p style="text-align:center; color:#999; padding:40px; font-size:1.1rem;"><i class="fas fa-utensils" style="display:block; font-size:3rem; margin-bottom:15px; opacity:0.3;"></i>Bandeja vacía</p>';
        cartActions.style.display = 'none';
    } else {
        myOrders.forEach((item, idx) => {
            list.innerHTML += `
                <div style="display:flex; justify-content:space-between; padding:15px; border-bottom:1px solid #eee; background:white; margin-bottom:10px; border-radius:10px; align-items:center;">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${item.img}" style="width:50px; height:50px; border-radius:5px; object-fit:cover;">
                        <div>
                            <div style="font-weight:600;">${item.name}</div>
                            <div style="font-size:0.9rem; color:#777;">$${item.price.toLocaleString('es-CL')}</div>
                        </div>
                    </div>
                    <i class="fas fa-trash" style="color:#e74c3c; cursor:pointer; font-size:1.1rem; padding:10px;" onclick="removeOrder(${idx})"></i>
                </div>`;
        });
        cartActions.style.display = 'block';
        updateTotal();
    }
}

function updateTotal() {
    let subtotal = myOrders.reduce((sum, item) => sum + item.price, 0);
    let deliveryFee = (deliveryType === 'delivery') ? 2000 : 0;
    let total = subtotal + deliveryFee;
    document.getElementById('subtotal-price').innerText = '$' + subtotal.toLocaleString('es-CL');
    document.getElementById('total-price').innerText = '$' + total.toLocaleString('es-CL');
    // Actualizar también el monto en los datos de transferencia si es necesario
    document.getElementById('transfer-amount-display').innerText = '$' + total.toLocaleString('es-CL');
}

function removeOrder(idx) {
    myOrders.splice(idx, 1);
    updateCartUI(); 
}

function showToast(msg) {
    const t = document.createElement('div');
    t.className = 'toast'; t.innerText = msg; document.body.appendChild(t);
    setTimeout(()=>t.remove(), 2000);
}

/* --- ACTUALIZACIÓN DE LA FUNCIÓN PROCESSORDER --- */
function processOrder() {
    // 1. Validaciones de Delivery
    if (deliveryType === 'delivery') {
        const addr = document.getElementById('user-address').value;
        const phone = document.getElementById('user-phone').value;
        if (!addr || addr.length < 5) { alert("Por favor ingresa una dirección de envío."); return; }
        if (!phone || phone.length < 8) { alert("Por favor ingresa un número de teléfono válido."); return; }
    }

    // 2. Validaciones de Pago (NUEVO)
    if (paymentType === 'transfer') {
        const confirmed = document.getElementById('transfer-confirmed').checked;
        if (!confirmed) {
            alert("Por favor, confirma que realizaste la transferencia bancaria antes de continuar.");
            return;
        }
    }

    // 3. Procesamiento Simulado
    const btn = document.getElementById('btn-confirm');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
    btn.disabled = true;

    setTimeout(() => {
        let msg = '';
        // Mensaje personalizado según el tipo de pago y entrega
        if(paymentType === 'transfer') {
            msg = deliveryType === 'delivery' 
                ? '¡Pedido recibido! Verificaremos tu transferencia y enviaremos tu pedido.' 
                : '¡Pedido recibido! Verificaremos tu transferencia. Puedes pasar a retirar pronto.';
        } else {
             msg = deliveryType === 'delivery' 
                ? '¡Tu Delivery está confirmado! Paga al repartidor al recibir.' 
                : '¡Pedido listo para retiro! Paga en caja al buscar tu pedido.';
        }
       
        alert(msg);
        
        // Resetear UI
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Confirmar Pedido';
        btn.disabled = false;
        myOrders = [];
        updateCartUI();
        // Volver a la carta y resetear formularios
        const menuLink = document.querySelectorAll('.nav-link')[1];
        showSection('menu', menuLink); 
        document.getElementById('user-address').value = '';
        document.getElementById('user-phone').value = '';
        document.getElementById('transfer-confirmed').checked = false;
        setDeliveryMode('pickup', document.querySelector('.toggle-delivery')); // Reset a retiro
        setPaymentMode('cash', document.querySelector('.toggle-payment')); // Reset a efectivo
        
    }, 2000);
}