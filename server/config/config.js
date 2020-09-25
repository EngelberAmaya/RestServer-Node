
// ========================
//   Puerto
// ========================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dÃ­as
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'; 

// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '146473606906-cov1r6cc362g7q793i5123l4spiss5vs.apps.googleusercontent.com';


