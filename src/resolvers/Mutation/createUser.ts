import { Context } from '../../tsTypes/resolvers';

async function createUser(parent: object, args: object, context: Context) {
    // TODO implement a real mutation here, using the context to access a database
    return {
        id: 3,
        firstName: 'Test3',
        lastName: 'User3',
        emailAddress: 'test3user3@example.com',
    };
}

export { createUser };
