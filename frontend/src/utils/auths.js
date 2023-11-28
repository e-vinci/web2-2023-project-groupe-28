const STORE_NAME = 'user';
let currentUser;

// permet la valeur associée à la clé donnée en argument
const getAuthenticatedUser = () => {
  if (currentUser !== undefined) return currentUser;

  const serializedUser = localStorage.getItem(STORE_NAME);
  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
};

// permet d'enregistrer pour une clé la valeur associé
const setAuthenticatedUser = (authenticatedUser) => {
  const serializedUser = JSON.stringify(authenticatedUser);
  localStorage.setItem(STORE_NAME, serializedUser);

  currentUser = authenticatedUser;
};

const isAuthenticated = () => currentUser !== undefined;

// pour le logout, elle efface la clé (valeur)
const clearAuthenticatedUser = () => {
  localStorage.removeItem(STORE_NAME);
  currentUser = undefined;
};

// eslint-disable-next-line object-curly-newline
export { getAuthenticatedUser, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser };

// on stoque les données sous forme de cookies sur le browser, mais ne sont pas sécurisé