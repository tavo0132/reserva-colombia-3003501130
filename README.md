# 🌍 Landing Page Reserva Colombia

Sitio web estático para agencia de viajes ubicada en Quimbaya, Quindío. Desarrollado con Bootstrap y alojado en GitHub Pages con traducción completa al español.

## 🌟 Características Principales

✅ **Diseño Responsive** - Compatible con dispositivos móviles y desktop  
✅ **Menú Multiidioma** - Traducción al español (INICIO, PAQUETES, GALERIA, CONTACTO)  
✅ **Información de Ubicación** - Mapa integrado de Google Maps con ubicación exacta  
✅ **Contacto Directo** - Teléfono, Email, WhatsApp e Instagram clickeables  
✅ **Redes Sociales** - Enlaces a Facebook e Instagram  
✅ **Sección de Valores** - Ubicación, Valores y Misión de la empresa  
✅ **Logo Personalizado** - Integración del logo oficial de Reserva Colombia  
✅ **Paquetes Turísticos** - 6 destinos principales con descripciones detalladas y precios.
✅ **Galería de Destinos** - 9 imágenes de alta resolución con lightbox integrado (prettyPhoto).
✅ **GitHub Pages Ready** - Sitio completamente estático, listo para producción  

## 🚀 Inicio Rápido

### Opción 1: Servidor Local

```powershell
# Desde la raíz del proyecto
.\start.bat

# O manualmente (Python 3.8+)
python -m http.server 5500
```

Acceso: `http://localhost:5500` o `http://192.168.1.10:5500` (IP local)

### Opción 2: GitHub Pages

El repositorio está configurado para GitHub Pages. Cualquier push a `main` se publica automáticamente en:
```
https://reservacolombia.com.co (Dominio Personalizado)
https://tavo0132.github.io/reserva-colombia-3003501130/ (Alternativo)
```

**Nota**: SSL/HTTPS está en proceso. Estará disponible en 24-48 horas.

## 📁 Estructura del Proyecto

```
bs-travelic/
├── Inicio.html                  # Página principal (HOME)
├── Paquetes.html                # Paquetes turísticos
├── Galeria.html                 # Galería de destinos
├── Contacto.html                # Contacto e información
├── index.html                   # Redirección a Inicio.html
├── README.md                    # Este archivo
├── start.bat                    # Inicia servidor local
├── stop.bat                     # Detiene servidor local
└── assets/
    ├── css/
    │   ├── bootstrap.css        # Framework Bootstrap
    │   ├── font-awesome.min.css # Iconos
    │   ├── prettyPhoto.css      # Plugin lightbox
    │   └── style.css            # Estilos personalizados
    ├── js/
    │   ├── custom.js            # JavaScript personalizado
    │   └── plugins/             # Bibliotecas jQuery, Bootstrap
    └── img/
        ├── reserva-colombia-logo_1.jpg      # Logo oficial
        ├── icono_whatsapp.jpg               # Icono WhatsApp
        └── portfolio/                       # Imágenes de galería
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos responsivos
- **Bootstrap 3** - Framework CSS
- **Font Awesome 4.x** - Iconos
- **jQuery 1.10.2** - Interactividad
- **Google Maps Embed API** - Mapa integrado
- **GitHub Pages** - Hosting estático

## 📋 Páginas Principales

### 1️⃣ **INICIO** (`Inicio.html`)
- Título principal: "Reserva Colombia - Agencia de Viajes"
- Sección de características: Ubicación, Valores y Misión
- 3 Tour Packages destacados:
  - **#1**: Eje Cafetero (4 días / 3 noches) - Salento, Filandia, Parque del Café ☕🌴
  - **#2**: Aventura y Relax (4 días / 3 noches) - Aguas termales de Santa Rosa de Cabal
  - **#3**: Punta Cana Todo incluido (4 días / 3 noches) - Playas paradisíacas ✅
- Enlaces de navegación principal

### 2️⃣ **PAQUETES** (`Paquetes.html`)
- 6 paquetes turísticos con descripción y precio
- Cards responsivos
- Información de tours

### 3️⃣ **GALERIA** (`Galeria.html`)
- **Título:** "Galería de Destinos"
- Descripción promocional sobre destinos colombianos, playas, montañas y ciudades coloniales
- 9 imágenes de alta resolución con fotografías reales de destinos turísticos
- Lightbox interactivo con PrettyPhoto (click en imágenes para ampliar)
- Thumbnails responsivos para navegación móvil

### 4️⃣ **CONTACTO** (`Contacto.html`)
- Formulario comentado (futuro desarrollo)
- **Información de Contacto Directo:**
  - 📞 Teléfono: 300 3501130 (link telefónico)
  - ✉️ Email: reservacolombia@outlook.com (mailto)
  - 💬 WhatsApp: +57 320 7460992 (con mensaje: "Hola, por favor bríndame información")
  - 🌐 Redes: Facebook e Instagram
- Mapa de Google Maps con ubicación exacta de oficinas

## 🔗 Enlaces Principales

```
🏠 Página Principal: http://192.168.1.10:5500/Inicio.html
📦 Paquetes:        http://192.168.1.10:5500/Paquetes.html
🖼️ Galería:         http://192.168.1.10:5500/Galeria.html
📞 Contacto:        http://192.168.1.10:5500/Contacto.html
```

## 📞 Información de Contacto

| Canal | Dato | Link |
|-------|------|------|
| 📞 Teléfono | 300 3501130 | `tel:+573003501130` |
| ✉️ Email | reservacolombia@outlook.com | `mailto:reservacolombia@outlook.com` |
| 💬 WhatsApp | +57 320 7460992 | wa.me/573207460992 |
| 📍 Ubicación | Carrera 5 entre calles 11 y 12, Quimbaya, Quindío | [Ver en Maps](#) |
| 👍 Facebook | Reserva Colombia Oficial | facebook.com/reservacolombiaoficial |
| 📷 Instagram | @reservacolombiaoficial | instagram.com/reservacolombiaoficial |

## 🎨 Personalización

### Cambiar Logo
Reemplazar archivo: `assets/img/reserva-colombia-logo_1.jpg`  
Actualizar en todos los HTML si cambias el nombre

### Cambiar Colores
Editar `assets/css/style.css` (estilos globales)

### Agregar Página Nueva
1. Crear nuevo archivo HTML (ej: `Tours.html`)
2. Copiar estructura de `Inicio.html`
3. Actualizar menú en todas las páginas
4. Hacer commit y push

## 🔄 Flujo de Actualización

```
1. Editar archivos HTML/CSS localmente
2. Probar en: http://192.168.1.10:5500
3. Hacer commit: git add .
4. Mensaje: git commit -m "Descripción del cambio"
5. Push: git push origin main
6. GitHub Pages se actualiza automáticamente
```

## 📱 Responsividad

- ✅ Desktop (1024px+)
- ✅ Tablets (768px - 1023px)
- ✅ Móviles (320px - 767px)

Bootstrap grid system garantiza flexibilidad en todos los dispositivos.

## 🔐 Seguridad

- ✅ Sitio estático (sin backend vulnerable)
- ✅ Hosted en GitHub Pages (HTTPS automático)
- ✅ No almacena datos sensibles
- ✅ Formulario comentado (futuro desarrollo)

## 🌐 Dominio Personalizado

**Dominio Base**: `reservacolombia.com.co`

### Estado de Configuración (18 Marzo 2026)
| Elemento | Estado | Detalles |
|----------|--------|---------|
| DNS | ✅ Activo | Registros A configurados en GoDaddy |
| CNAME | ✅ Configurado | Archivo CNAME en raíz del repo |
| URL Primaria | 🌍 Online | https://reservacolombia.com.co |
| URL Alternativa | 🌍 Online | https://tavo0132.github.io/reserva-colombia-3003501130/ |
| HTTPS/SSL | ⏳ En proceso | Let's Encrypt provisioning (ETA 24-48h) |

### Acceso Actual
- **Con dominio (DNS activo)**: https://reservacolombia.com.co
- **Alternativo GitHub Pages**: https://tavo0132.github.io/reserva-colombia-3003501130/
- **Local IP**: http://192.168.1.10:5500

📌 **Nota**: El certificado SSL está siendo aprovisionado. Una vez completado, ambas URLs usarán HTTPS sin advertencias de seguridad.

## 📋 Futuro Desarrollo

### Formulario de Contacto
Actualmente comentado en `Contacto.html`. Para activar:
1. Descomentar código del formulario
2. Conectar con backend (Node.js, Python, PHP)
3. Integrar con servicio de emails (SendGrid, Mailgun)
4. Opcional: Google Sheets o Base de Datos

### Blog / Noticias
Estructura lista para agregar sección de blog educativo

### Reservas Online
Integración con sistema de pagos (Stripe, PayPal)

### Multiidioma
Traducción a inglés/francés con JavaScript

## 👨‍💻 Desarrollador

**Gustavo Pérez**  
GitHub: [@tavo0132](https://github.com/tavo0132)  
Proyecto: [reserva-colombia-3003501130](https://github.com/tavo0132/reserva-colombia-3003501130)

## 📝 Notas Importantes

- Sitio completamente estático (sin dependencias de backend)
- Compatible con GitHub Pages
- Traducción al español completada
- Logo personalizado integrado
- Contacto directo con redes sociales
- Responsive Design implementado

## 🎯 Objetivo

Proporcionar una landing page profesional, informativa y responsive para dar a conocer los servicios de Reserva Colombia a nivel local y nacional.

---

**Última actualización:** 12 de Marzo de 2026  
**Estado:** ✅ Producción (GitHub Pages)  
**Versión:** 1.0.0
