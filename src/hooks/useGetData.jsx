const useGetData = async () => {
  const { data } = await axios.get(
    'https://restcountries.com/v3.1/name/' + context.params.name,
  );
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await res.json();
  return data;
};

export default useGetData;
