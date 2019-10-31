async function allUsers(parentValue, args, context) {
  // TODO implement a real query here, using the context to access a database
  return [
      {
          id: 0,
          firstName: 'Test0',
          lastName: 'User0',
          emailAddress: 'test1user1@example.com',
      },
      {
          id: 1,
          firstName: 'Test1',
          lastName: 'User1',
          emailAddress: 'test1user1@example.com',
      },

      {
          id: 2,
          firstName: 'Test2',
          lastName: 'User2',
          emailAddress: 'test2user2@example.com',
      },
  ];
}

export { allUsers };
