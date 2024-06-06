export const fetchUsers = async (results = 50) => {
    try {
      const response = await fetch(`https://randomuser.me/api?results=${results}`);
      if (!response.ok) {
        throw new Error('Problemas con la red');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error trayendo usuarios:', error);
      throw error; 
    }
  };
  