import React, { useEffect, useState } from 'react';
import { database } from '../../firebase';
import { ref, onValue, push } from 'firebase/database';
import './style.css';
import Trash from '../../assets/trash.svg';

function Home() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  // Função para buscar os usuários no Realtime Database
  useEffect(() => {
    const usersRef = ref(database, 'users');

    // Configura o listener
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsers(usersArray);
      } else {
        console.log('Nenhum dado encontrado no nó "users".');
      }
    });

    // Limpa o listener quando o componente é desmontado
    return () => {
      unsubscribe(); // Remove o listener
    };
  }, []);

  // Função para cadastrar um novo usuário
  const handleAddUser = async (e) => {
    e.preventDefault();

    if (!name || !age || !email) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      const usersRef = ref(database, 'users');
      await push(usersRef, {
        name,
        age: parseInt(age),
        email,
      });

      // Limpa os campos do formulário
      setName('');
      setAge('');
      setEmail('');

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div className='container'>
      <h1>Meu Web-App</h1>
      <form onSubmit={handleAddUser}>
        <h1>Cadastro de Convidados</h1>
        <input
          placeholder='Nome'
          name='nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='Idade'
          name='idade'
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder='E-mail'
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </form>

      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash} alt='Excluir' />
            </button>
          </div>
        ))
      ) : (
        <p>Nenhum usuário cadastrado.</p>
      )}
    </div>
  );
}

export default Home;