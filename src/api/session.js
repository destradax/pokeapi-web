const USERS = [
  {
    email: 'admin@57blocks.io',
    password: 'admin123*',
    userName: 'Mr. Admin'
  },
  {
    email: 'john@57blocks.io',
    password: 'john123*',
    userName: 'John Doe'
  },
  {
    email: 'jane@57blocks.io',
    password: 'jane123*',
    userName: 'Jane Doe'
  }
];

export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find(
        u => u.email === email && u.password === password
      );

      if (user) {
        resolve(
          Response.json(
            { email: user.email, userName: user.userName },
            { status: 200 }
          )
        );
      } else {
        reject(Response.json('Invalid credentials', { status: 401 }));
      }
    }, 1500);
  });
};
