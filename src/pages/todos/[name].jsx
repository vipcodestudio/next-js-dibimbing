import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    'https://restcountries.com/v3.1/name/' + context.params.name,
  );
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await res.json();
  return {
    props: {
      todo: data,
    },
  };
}

const DetailTodo = (props) => {
  const router = useRouter();
  // const { todo } = props;
  const [todo, setTodo] = useState({});
  useEffect(() => {
    if (router.query.id) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos/' + router.query.id)
        .then((res) => setTodo(res.data));
    }
  }, [router.query.id]);

  return (
    <div>
      <h1>Detail Todo {router.query.id}</h1>
      <h1>Title : {todo.title}</h1>
      <h1>Status : {`${todo.completed}`}</h1>
    </div>
  );
};

export default DetailTodo;
