export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@57blocks.io' && password === 'admin123*') {
        resolve(Response.json('OK', { status: 200 }));
      }

      reject(Response.json('Invalid credentials', { status: 401 }));
    }, 1500);
  });
};
