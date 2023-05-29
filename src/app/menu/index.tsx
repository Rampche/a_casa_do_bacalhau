'use client';

const getData = async () => {
  const res = await fetch('http://localhost:8080');
  const data = res.json();
  console.log(data);

  return data.toString();
};

export default async function Menu() {
  const data = await getData();

  return (
    <>
      <h1>This is the data fetched</h1>
      <p>{data}</p>
    </>
  );
}
