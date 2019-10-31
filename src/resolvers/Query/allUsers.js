async function allUsers(parentValue, args, context) {
  return [
    {
      id: 1,
      firstName: "Test1",
      lastName: "User1",
      emailAddress: "test1user1@example.com"
    }
  ];
}

export { allUsers };
