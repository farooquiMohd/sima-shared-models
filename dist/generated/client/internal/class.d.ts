import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Assets
   * const assets = await prisma.asset.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Assets
 * const assets = await prisma.asset.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.asset`: Exposes CRUD operations for the **Asset** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Assets
  * const assets = await prisma.asset.findMany()
  * ```
  */
    get asset(): Prisma.AssetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Customers
      * const customers = await prisma.customer.findMany()
      * ```
      */
    get customer(): Prisma.CustomerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.defective`: Exposes CRUD operations for the **Defective** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Defectives
      * const defectives = await prisma.defective.findMany()
      * ```
      */
    get defective(): Prisma.DefectiveDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.district`: Exposes CRUD operations for the **District** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Districts
      * const districts = await prisma.district.findMany()
      * ```
      */
    get district(): Prisma.DistrictDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.file`: Exposes CRUD operations for the **File** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Files
      * const files = await prisma.file.findMany()
      * ```
      */
    get file(): Prisma.FileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Issues
      * const issues = await prisma.issue.findMany()
      * ```
      */
    get issue(): Prisma.IssueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mCC`: Exposes CRUD operations for the **MCC** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MCCS
      * const mCCS = await prisma.mCC.findMany()
      * ```
      */
    get mCC(): Prisma.MCCDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.module`: Exposes CRUD operations for the **Module** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Modules
      * const modules = await prisma.module.findMany()
      * ```
      */
    get module(): Prisma.ModuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mPP`: Exposes CRUD operations for the **MPP** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MPPS
      * const mPPS = await prisma.mPP.findMany()
      * ```
      */
    get mPP(): Prisma.MPPDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Permissions
      * const permissions = await prisma.permission.findMany()
      * ```
      */
    get permission(): Prisma.PermissionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.request`: Exposes CRUD operations for the **Request** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Requests
      * const requests = await prisma.request.findMany()
      * ```
      */
    get request(): Prisma.RequestDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.role`: Exposes CRUD operations for the **Role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.role.findMany()
      * ```
      */
    get role(): Prisma.RoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.service`: Exposes CRUD operations for the **Service** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Services
      * const services = await prisma.service.findMany()
      * ```
      */
    get service(): Prisma.ServiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.state`: Exposes CRUD operations for the **State** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more States
      * const states = await prisma.state.findMany()
      * ```
      */
    get state(): Prisma.StateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SubCategories
      * const subCategories = await prisma.subCategory.findMany()
      * ```
      */
    get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tehsil`: Exposes CRUD operations for the **Tehsil** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tehsils
      * const tehsils = await prisma.tehsil.findMany()
      * ```
      */
    get tehsil(): Prisma.TehsilDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tickets
      * const tickets = await prisma.ticket.findMany()
      * ```
      */
    get ticket(): Prisma.TicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user`: Exposes CRUD operations for the **User** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.user.findMany()
      * ```
      */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Vendors
      * const vendors = await prisma.vendor.findMany()
      * ```
      */
    get vendor(): Prisma.VendorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.village`: Exposes CRUD operations for the **Village** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Villages
      * const villages = await prisma.village.findMany()
      * ```
      */
    get village(): Prisma.VillageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map