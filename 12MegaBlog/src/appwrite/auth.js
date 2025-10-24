import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({ email, password, name }) {
    // ❌ Deprecated (positional arguments):
    // const userAccount = await this.account.create(ID.unique(), email, password, name);

    // ✅ Updated (object-based arguments):
    const userAccount = await this.account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });

    if (userAccount) {
      // Automatically log in after creating account
      return this.login({ email, password });
    }

    return userAccount;
  }

  async login({ email, password }) {
    return this.account.createEmailSession(email, password);
  }

 

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


