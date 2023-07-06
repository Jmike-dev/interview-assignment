export default async function Home() {
  // fetching data from the API endpoint
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return (
    <div className="">
      {/* mapping through the data to display */}
      {data.map((user) => (
        <div key={user.id} className="bg-blue-200 rounded-lg">
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
        </div>
      ))}
    </div>
  );
}
