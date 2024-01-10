export async function GET(request) {
  //handle GET request ofr api/users
  //Retrieve users from the dtabase or any data source

  const users = [{ id: 1, username: "JonnyBoy" }];

  //send the users as a response
  return new Response(JSON.stringify(users));
}
