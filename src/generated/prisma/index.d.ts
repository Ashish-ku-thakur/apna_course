
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model EnrolledCourse
 * 
 */
export type EnrolledCourse = $Result.DefaultSelection<Prisma.$EnrolledCoursePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Lecture
 * 
 */
export type Lecture = $Result.DefaultSelection<Prisma.$LecturePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  INSTRUCTOR: 'INSTRUCTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Level: {
  BIGGNER: 'BIGGNER',
  MEDIUM: 'MEDIUM',
  ADVANCE: 'ADVANCE'
};

export type Level = (typeof Level)[keyof typeof Level]


export const Status: {
  CREATED: 'CREATED',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Level = $Enums.Level

export const Level: typeof $Enums.Level

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrolledCourse`: Exposes CRUD operations for the **EnrolledCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnrolledCourses
    * const enrolledCourses = await prisma.enrolledCourse.findMany()
    * ```
    */
  get enrolledCourse(): Prisma.EnrolledCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture`: Exposes CRUD operations for the **Lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.LectureDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    EnrolledCourse: 'EnrolledCourse',
    Payment: 'Payment',
    Lecture: 'Lecture'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "enrolledCourse" | "payment" | "lecture"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      EnrolledCourse: {
        payload: Prisma.$EnrolledCoursePayload<ExtArgs>
        fields: Prisma.EnrolledCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrolledCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrolledCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>
          }
          findFirst: {
            args: Prisma.EnrolledCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrolledCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>
          }
          findMany: {
            args: Prisma.EnrolledCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>[]
          }
          create: {
            args: Prisma.EnrolledCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>
          }
          createMany: {
            args: Prisma.EnrolledCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrolledCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>[]
          }
          delete: {
            args: Prisma.EnrolledCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>
          }
          update: {
            args: Prisma.EnrolledCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>
          }
          deleteMany: {
            args: Prisma.EnrolledCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrolledCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrolledCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>[]
          }
          upsert: {
            args: Prisma.EnrolledCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrolledCoursePayload>
          }
          aggregate: {
            args: Prisma.EnrolledCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrolledCourse>
          }
          groupBy: {
            args: Prisma.EnrolledCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrolledCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrolledCourseCountArgs<ExtArgs>
            result: $Utils.Optional<EnrolledCourseCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Lecture: {
        payload: Prisma.$LecturePayload<ExtArgs>
        fields: Prisma.LectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findFirst: {
            args: Prisma.LectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findMany: {
            args: Prisma.LectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          create: {
            args: Prisma.LectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          createMany: {
            args: Prisma.LectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          delete: {
            args: Prisma.LectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          update: {
            args: Prisma.LectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          deleteMany: {
            args: Prisma.LectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          upsert: {
            args: Prisma.LectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.LectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    enrolledCourse?: EnrolledCourseOmit
    payment?: PaymentOmit
    lecture?: LectureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdCourses: number
    enrolledCourses: number
    Payment: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCourses?: boolean | UserCountOutputTypeCountCreatedCoursesArgs
    enrolledCourses?: boolean | UserCountOutputTypeCountEnrolledCoursesArgs
    Payment?: boolean | UserCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledCourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    enrolledUsers: number
    Lecture: number
    Payment: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledUsers?: boolean | CourseCountOutputTypeCountEnrolledUsersArgs
    Lecture?: boolean | CourseCountOutputTypeCountLectureArgs
    Payment?: boolean | CourseCountOutputTypeCountPaymentArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrolledUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    imageurl: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    imageurl: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    imageurl: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    imageurl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    imageurl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    imageurl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    name: string
    email: string
    imageurl: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    imageurl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdCourses?: boolean | User$createdCoursesArgs<ExtArgs>
    enrolledCourses?: boolean | User$enrolledCoursesArgs<ExtArgs>
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    imageurl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    imageurl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    imageurl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "imageurl" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCourses?: boolean | User$createdCoursesArgs<ExtArgs>
    enrolledCourses?: boolean | User$enrolledCoursesArgs<ExtArgs>
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdCourses: Prisma.$CoursePayload<ExtArgs>[]
      enrolledCourses: Prisma.$EnrolledCoursePayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      name: string
      email: string
      imageurl: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdCourses<T extends User$createdCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrolledCourses<T extends User$enrolledCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$enrolledCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends User$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly imageurl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdCourses
   */
  export type User$createdCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.enrolledCourses
   */
  export type User$enrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    where?: EnrolledCourseWhereInput
    orderBy?: EnrolledCourseOrderByWithRelationInput | EnrolledCourseOrderByWithRelationInput[]
    cursor?: EnrolledCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrolledCourseScalarFieldEnum | EnrolledCourseScalarFieldEnum[]
  }

  /**
   * User.Payment
   */
  export type User$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    courseTitle: string | null
    courseDescription: string | null
    courseSubtitle: string | null
    courseCategory: string | null
    courseLevel: $Enums.Level | null
    coursePrice: string | null
    courseThumbnail: string | null
    courseCompleted: boolean | null
    coursePublished: boolean | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    courseTitle: string | null
    courseDescription: string | null
    courseSubtitle: string | null
    courseCategory: string | null
    courseLevel: $Enums.Level | null
    coursePrice: string | null
    courseThumbnail: string | null
    courseCompleted: boolean | null
    coursePublished: boolean | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseTitle: number
    courseDescription: number
    courseSubtitle: number
    courseCategory: number
    courseLevel: number
    coursePrice: number
    courseThumbnail: number
    courseCompleted: number
    coursePublished: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    courseTitle?: true
    courseDescription?: true
    courseSubtitle?: true
    courseCategory?: true
    courseLevel?: true
    coursePrice?: true
    courseThumbnail?: true
    courseCompleted?: true
    coursePublished?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseTitle?: true
    courseDescription?: true
    courseSubtitle?: true
    courseCategory?: true
    courseLevel?: true
    coursePrice?: true
    courseThumbnail?: true
    courseCompleted?: true
    coursePublished?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseTitle?: true
    courseDescription?: true
    courseSubtitle?: true
    courseCategory?: true
    courseLevel?: true
    coursePrice?: true
    courseThumbnail?: true
    courseCompleted?: true
    coursePublished?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    courseTitle: string
    courseDescription: string | null
    courseSubtitle: string | null
    courseCategory: string | null
    courseLevel: $Enums.Level
    coursePrice: string | null
    courseThumbnail: string | null
    courseCompleted: boolean
    coursePublished: boolean
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseTitle?: boolean
    courseDescription?: boolean
    courseSubtitle?: boolean
    courseCategory?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    enrolledUsers?: boolean | Course$enrolledUsersArgs<ExtArgs>
    Lecture?: boolean | Course$LectureArgs<ExtArgs>
    Payment?: boolean | Course$PaymentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseTitle?: boolean
    courseDescription?: boolean
    courseSubtitle?: boolean
    courseCategory?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseTitle?: boolean
    courseDescription?: boolean
    courseSubtitle?: boolean
    courseCategory?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseTitle?: boolean
    courseDescription?: boolean
    courseSubtitle?: boolean
    courseCategory?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseTitle" | "courseDescription" | "courseSubtitle" | "courseCategory" | "courseLevel" | "coursePrice" | "courseThumbnail" | "courseCompleted" | "coursePublished" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    enrolledUsers?: boolean | Course$enrolledUsersArgs<ExtArgs>
    Lecture?: boolean | Course$LectureArgs<ExtArgs>
    Payment?: boolean | Course$PaymentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      enrolledUsers: Prisma.$EnrolledCoursePayload<ExtArgs>[]
      Lecture: Prisma.$LecturePayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseTitle: string
      courseDescription: string | null
      courseSubtitle: string | null
      courseCategory: string | null
      courseLevel: $Enums.Level
      coursePrice: string | null
      courseThumbnail: string | null
      courseCompleted: boolean
      coursePublished: boolean
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrolledUsers<T extends Course$enrolledUsersArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrolledUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Lecture<T extends Course$LectureArgs<ExtArgs> = {}>(args?: Subset<T, Course$LectureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends Course$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Course$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly courseTitle: FieldRef<"Course", 'String'>
    readonly courseDescription: FieldRef<"Course", 'String'>
    readonly courseSubtitle: FieldRef<"Course", 'String'>
    readonly courseCategory: FieldRef<"Course", 'String'>
    readonly courseLevel: FieldRef<"Course", 'Level'>
    readonly coursePrice: FieldRef<"Course", 'String'>
    readonly courseThumbnail: FieldRef<"Course", 'String'>
    readonly courseCompleted: FieldRef<"Course", 'Boolean'>
    readonly coursePublished: FieldRef<"Course", 'Boolean'>
    readonly creatorId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.enrolledUsers
   */
  export type Course$enrolledUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    where?: EnrolledCourseWhereInput
    orderBy?: EnrolledCourseOrderByWithRelationInput | EnrolledCourseOrderByWithRelationInput[]
    cursor?: EnrolledCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrolledCourseScalarFieldEnum | EnrolledCourseScalarFieldEnum[]
  }

  /**
   * Course.Lecture
   */
  export type Course$LectureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    where?: LectureWhereInput
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    cursor?: LectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Course.Payment
   */
  export type Course$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model EnrolledCourse
   */

  export type AggregateEnrolledCourse = {
    _count: EnrolledCourseCountAggregateOutputType | null
    _min: EnrolledCourseMinAggregateOutputType | null
    _max: EnrolledCourseMaxAggregateOutputType | null
  }

  export type EnrolledCourseMinAggregateOutputType = {
    id: string | null
    courseAmount: string | null
    status: $Enums.Status | null
    userId: string | null
    courseId: string | null
    enrolledAt: Date | null
  }

  export type EnrolledCourseMaxAggregateOutputType = {
    id: string | null
    courseAmount: string | null
    status: $Enums.Status | null
    userId: string | null
    courseId: string | null
    enrolledAt: Date | null
  }

  export type EnrolledCourseCountAggregateOutputType = {
    id: number
    courseAmount: number
    status: number
    userId: number
    courseId: number
    enrolledAt: number
    _all: number
  }


  export type EnrolledCourseMinAggregateInputType = {
    id?: true
    courseAmount?: true
    status?: true
    userId?: true
    courseId?: true
    enrolledAt?: true
  }

  export type EnrolledCourseMaxAggregateInputType = {
    id?: true
    courseAmount?: true
    status?: true
    userId?: true
    courseId?: true
    enrolledAt?: true
  }

  export type EnrolledCourseCountAggregateInputType = {
    id?: true
    courseAmount?: true
    status?: true
    userId?: true
    courseId?: true
    enrolledAt?: true
    _all?: true
  }

  export type EnrolledCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledCourse to aggregate.
     */
    where?: EnrolledCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourses to fetch.
     */
    orderBy?: EnrolledCourseOrderByWithRelationInput | EnrolledCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrolledCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnrolledCourses
    **/
    _count?: true | EnrolledCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrolledCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrolledCourseMaxAggregateInputType
  }

  export type GetEnrolledCourseAggregateType<T extends EnrolledCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrolledCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrolledCourse[P]>
      : GetScalarType<T[P], AggregateEnrolledCourse[P]>
  }




  export type EnrolledCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrolledCourseWhereInput
    orderBy?: EnrolledCourseOrderByWithAggregationInput | EnrolledCourseOrderByWithAggregationInput[]
    by: EnrolledCourseScalarFieldEnum[] | EnrolledCourseScalarFieldEnum
    having?: EnrolledCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrolledCourseCountAggregateInputType | true
    _min?: EnrolledCourseMinAggregateInputType
    _max?: EnrolledCourseMaxAggregateInputType
  }

  export type EnrolledCourseGroupByOutputType = {
    id: string
    courseAmount: string
    status: $Enums.Status
    userId: string
    courseId: string
    enrolledAt: Date
    _count: EnrolledCourseCountAggregateOutputType | null
    _min: EnrolledCourseMinAggregateOutputType | null
    _max: EnrolledCourseMaxAggregateOutputType | null
  }

  type GetEnrolledCourseGroupByPayload<T extends EnrolledCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrolledCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrolledCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrolledCourseGroupByOutputType[P]>
            : GetScalarType<T[P], EnrolledCourseGroupByOutputType[P]>
        }
      >
    >


  export type EnrolledCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseAmount?: boolean
    status?: boolean
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourse"]>

  export type EnrolledCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseAmount?: boolean
    status?: boolean
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourse"]>

  export type EnrolledCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseAmount?: boolean
    status?: boolean
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrolledCourse"]>

  export type EnrolledCourseSelectScalar = {
    id?: boolean
    courseAmount?: boolean
    status?: boolean
    userId?: boolean
    courseId?: boolean
    enrolledAt?: boolean
  }

  export type EnrolledCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseAmount" | "status" | "userId" | "courseId" | "enrolledAt", ExtArgs["result"]["enrolledCourse"]>
  export type EnrolledCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrolledCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrolledCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrolledCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnrolledCourse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseAmount: string
      status: $Enums.Status
      userId: string
      courseId: string
      enrolledAt: Date
    }, ExtArgs["result"]["enrolledCourse"]>
    composites: {}
  }

  type EnrolledCourseGetPayload<S extends boolean | null | undefined | EnrolledCourseDefaultArgs> = $Result.GetResult<Prisma.$EnrolledCoursePayload, S>

  type EnrolledCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrolledCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrolledCourseCountAggregateInputType | true
    }

  export interface EnrolledCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnrolledCourse'], meta: { name: 'EnrolledCourse' } }
    /**
     * Find zero or one EnrolledCourse that matches the filter.
     * @param {EnrolledCourseFindUniqueArgs} args - Arguments to find a EnrolledCourse
     * @example
     * // Get one EnrolledCourse
     * const enrolledCourse = await prisma.enrolledCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrolledCourseFindUniqueArgs>(args: SelectSubset<T, EnrolledCourseFindUniqueArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnrolledCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrolledCourseFindUniqueOrThrowArgs} args - Arguments to find a EnrolledCourse
     * @example
     * // Get one EnrolledCourse
     * const enrolledCourse = await prisma.enrolledCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrolledCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrolledCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseFindFirstArgs} args - Arguments to find a EnrolledCourse
     * @example
     * // Get one EnrolledCourse
     * const enrolledCourse = await prisma.enrolledCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrolledCourseFindFirstArgs>(args?: SelectSubset<T, EnrolledCourseFindFirstArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnrolledCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseFindFirstOrThrowArgs} args - Arguments to find a EnrolledCourse
     * @example
     * // Get one EnrolledCourse
     * const enrolledCourse = await prisma.enrolledCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrolledCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrolledCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnrolledCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourse.findMany()
     * 
     * // Get first 10 EnrolledCourses
     * const enrolledCourses = await prisma.enrolledCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrolledCourseWithIdOnly = await prisma.enrolledCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrolledCourseFindManyArgs>(args?: SelectSubset<T, EnrolledCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnrolledCourse.
     * @param {EnrolledCourseCreateArgs} args - Arguments to create a EnrolledCourse.
     * @example
     * // Create one EnrolledCourse
     * const EnrolledCourse = await prisma.enrolledCourse.create({
     *   data: {
     *     // ... data to create a EnrolledCourse
     *   }
     * })
     * 
     */
    create<T extends EnrolledCourseCreateArgs>(args: SelectSubset<T, EnrolledCourseCreateArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnrolledCourses.
     * @param {EnrolledCourseCreateManyArgs} args - Arguments to create many EnrolledCourses.
     * @example
     * // Create many EnrolledCourses
     * const enrolledCourse = await prisma.enrolledCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrolledCourseCreateManyArgs>(args?: SelectSubset<T, EnrolledCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnrolledCourses and returns the data saved in the database.
     * @param {EnrolledCourseCreateManyAndReturnArgs} args - Arguments to create many EnrolledCourses.
     * @example
     * // Create many EnrolledCourses
     * const enrolledCourse = await prisma.enrolledCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnrolledCourses and only return the `id`
     * const enrolledCourseWithIdOnly = await prisma.enrolledCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrolledCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrolledCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnrolledCourse.
     * @param {EnrolledCourseDeleteArgs} args - Arguments to delete one EnrolledCourse.
     * @example
     * // Delete one EnrolledCourse
     * const EnrolledCourse = await prisma.enrolledCourse.delete({
     *   where: {
     *     // ... filter to delete one EnrolledCourse
     *   }
     * })
     * 
     */
    delete<T extends EnrolledCourseDeleteArgs>(args: SelectSubset<T, EnrolledCourseDeleteArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnrolledCourse.
     * @param {EnrolledCourseUpdateArgs} args - Arguments to update one EnrolledCourse.
     * @example
     * // Update one EnrolledCourse
     * const enrolledCourse = await prisma.enrolledCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrolledCourseUpdateArgs>(args: SelectSubset<T, EnrolledCourseUpdateArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnrolledCourses.
     * @param {EnrolledCourseDeleteManyArgs} args - Arguments to filter EnrolledCourses to delete.
     * @example
     * // Delete a few EnrolledCourses
     * const { count } = await prisma.enrolledCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrolledCourseDeleteManyArgs>(args?: SelectSubset<T, EnrolledCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnrolledCourses
     * const enrolledCourse = await prisma.enrolledCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrolledCourseUpdateManyArgs>(args: SelectSubset<T, EnrolledCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnrolledCourses and returns the data updated in the database.
     * @param {EnrolledCourseUpdateManyAndReturnArgs} args - Arguments to update many EnrolledCourses.
     * @example
     * // Update many EnrolledCourses
     * const enrolledCourse = await prisma.enrolledCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnrolledCourses and only return the `id`
     * const enrolledCourseWithIdOnly = await prisma.enrolledCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrolledCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrolledCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnrolledCourse.
     * @param {EnrolledCourseUpsertArgs} args - Arguments to update or create a EnrolledCourse.
     * @example
     * // Update or create a EnrolledCourse
     * const enrolledCourse = await prisma.enrolledCourse.upsert({
     *   create: {
     *     // ... data to create a EnrolledCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnrolledCourse we want to update
     *   }
     * })
     */
    upsert<T extends EnrolledCourseUpsertArgs>(args: SelectSubset<T, EnrolledCourseUpsertArgs<ExtArgs>>): Prisma__EnrolledCourseClient<$Result.GetResult<Prisma.$EnrolledCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnrolledCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseCountArgs} args - Arguments to filter EnrolledCourses to count.
     * @example
     * // Count the number of EnrolledCourses
     * const count = await prisma.enrolledCourse.count({
     *   where: {
     *     // ... the filter for the EnrolledCourses we want to count
     *   }
     * })
    **/
    count<T extends EnrolledCourseCountArgs>(
      args?: Subset<T, EnrolledCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrolledCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnrolledCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrolledCourseAggregateArgs>(args: Subset<T, EnrolledCourseAggregateArgs>): Prisma.PrismaPromise<GetEnrolledCourseAggregateType<T>>

    /**
     * Group by EnrolledCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrolledCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrolledCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrolledCourseGroupByArgs['orderBy'] }
        : { orderBy?: EnrolledCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrolledCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrolledCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnrolledCourse model
   */
  readonly fields: EnrolledCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnrolledCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrolledCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnrolledCourse model
   */
  interface EnrolledCourseFieldRefs {
    readonly id: FieldRef<"EnrolledCourse", 'String'>
    readonly courseAmount: FieldRef<"EnrolledCourse", 'String'>
    readonly status: FieldRef<"EnrolledCourse", 'Status'>
    readonly userId: FieldRef<"EnrolledCourse", 'String'>
    readonly courseId: FieldRef<"EnrolledCourse", 'String'>
    readonly enrolledAt: FieldRef<"EnrolledCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnrolledCourse findUnique
   */
  export type EnrolledCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourse to fetch.
     */
    where: EnrolledCourseWhereUniqueInput
  }

  /**
   * EnrolledCourse findUniqueOrThrow
   */
  export type EnrolledCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourse to fetch.
     */
    where: EnrolledCourseWhereUniqueInput
  }

  /**
   * EnrolledCourse findFirst
   */
  export type EnrolledCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourse to fetch.
     */
    where?: EnrolledCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourses to fetch.
     */
    orderBy?: EnrolledCourseOrderByWithRelationInput | EnrolledCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledCourses.
     */
    cursor?: EnrolledCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledCourses.
     */
    distinct?: EnrolledCourseScalarFieldEnum | EnrolledCourseScalarFieldEnum[]
  }

  /**
   * EnrolledCourse findFirstOrThrow
   */
  export type EnrolledCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourse to fetch.
     */
    where?: EnrolledCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourses to fetch.
     */
    orderBy?: EnrolledCourseOrderByWithRelationInput | EnrolledCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnrolledCourses.
     */
    cursor?: EnrolledCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnrolledCourses.
     */
    distinct?: EnrolledCourseScalarFieldEnum | EnrolledCourseScalarFieldEnum[]
  }

  /**
   * EnrolledCourse findMany
   */
  export type EnrolledCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * Filter, which EnrolledCourses to fetch.
     */
    where?: EnrolledCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnrolledCourses to fetch.
     */
    orderBy?: EnrolledCourseOrderByWithRelationInput | EnrolledCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnrolledCourses.
     */
    cursor?: EnrolledCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnrolledCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnrolledCourses.
     */
    skip?: number
    distinct?: EnrolledCourseScalarFieldEnum | EnrolledCourseScalarFieldEnum[]
  }

  /**
   * EnrolledCourse create
   */
  export type EnrolledCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a EnrolledCourse.
     */
    data: XOR<EnrolledCourseCreateInput, EnrolledCourseUncheckedCreateInput>
  }

  /**
   * EnrolledCourse createMany
   */
  export type EnrolledCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnrolledCourses.
     */
    data: EnrolledCourseCreateManyInput | EnrolledCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnrolledCourse createManyAndReturn
   */
  export type EnrolledCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * The data used to create many EnrolledCourses.
     */
    data: EnrolledCourseCreateManyInput | EnrolledCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrolledCourse update
   */
  export type EnrolledCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a EnrolledCourse.
     */
    data: XOR<EnrolledCourseUpdateInput, EnrolledCourseUncheckedUpdateInput>
    /**
     * Choose, which EnrolledCourse to update.
     */
    where: EnrolledCourseWhereUniqueInput
  }

  /**
   * EnrolledCourse updateMany
   */
  export type EnrolledCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnrolledCourses.
     */
    data: XOR<EnrolledCourseUpdateManyMutationInput, EnrolledCourseUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledCourses to update
     */
    where?: EnrolledCourseWhereInput
    /**
     * Limit how many EnrolledCourses to update.
     */
    limit?: number
  }

  /**
   * EnrolledCourse updateManyAndReturn
   */
  export type EnrolledCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * The data used to update EnrolledCourses.
     */
    data: XOR<EnrolledCourseUpdateManyMutationInput, EnrolledCourseUncheckedUpdateManyInput>
    /**
     * Filter which EnrolledCourses to update
     */
    where?: EnrolledCourseWhereInput
    /**
     * Limit how many EnrolledCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnrolledCourse upsert
   */
  export type EnrolledCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the EnrolledCourse to update in case it exists.
     */
    where: EnrolledCourseWhereUniqueInput
    /**
     * In case the EnrolledCourse found by the `where` argument doesn't exist, create a new EnrolledCourse with this data.
     */
    create: XOR<EnrolledCourseCreateInput, EnrolledCourseUncheckedCreateInput>
    /**
     * In case the EnrolledCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrolledCourseUpdateInput, EnrolledCourseUncheckedUpdateInput>
  }

  /**
   * EnrolledCourse delete
   */
  export type EnrolledCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
    /**
     * Filter which EnrolledCourse to delete.
     */
    where: EnrolledCourseWhereUniqueInput
  }

  /**
   * EnrolledCourse deleteMany
   */
  export type EnrolledCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnrolledCourses to delete
     */
    where?: EnrolledCourseWhereInput
    /**
     * Limit how many EnrolledCourses to delete.
     */
    limit?: number
  }

  /**
   * EnrolledCourse without action
   */
  export type EnrolledCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnrolledCourse
     */
    select?: EnrolledCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnrolledCourse
     */
    omit?: EnrolledCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrolledCourseInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    paymentId: string | null
    status: $Enums.Status | null
    amount: string | null
    currency: string | null
    userId: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    paymentId: string | null
    status: $Enums.Status | null
    amount: string | null
    currency: string | null
    userId: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    paymentId: number
    status: number
    amount: number
    currency: number
    userId: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    paymentId?: true
    status?: true
    amount?: true
    currency?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    paymentId?: true
    status?: true
    amount?: true
    currency?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    paymentId?: true
    status?: true
    amount?: true
    currency?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    paymentId: string | null
    status: $Enums.Status
    amount: string
    currency: string
    userId: string
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentId?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentId?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentId?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    paymentId?: boolean
    status?: boolean
    amount?: boolean
    currency?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "paymentId" | "status" | "amount" | "currency" | "userId" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      paymentId: string | null
      status: $Enums.Status
      amount: string
      currency: string
      userId: string
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly paymentId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'Status'>
    readonly amount: FieldRef<"Payment", 'String'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly courseId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureMinAggregateOutputType = {
    id: string | null
    lectureTitle: string | null
    lectureVideoUrl: string | null
    courseId: string | null
    viewd: boolean | null
    isFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LectureMaxAggregateOutputType = {
    id: string | null
    lectureTitle: string | null
    lectureVideoUrl: string | null
    courseId: string | null
    viewd: boolean | null
    isFree: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LectureCountAggregateOutputType = {
    id: number
    lectureTitle: number
    lectureVideoUrl: number
    courseId: number
    viewd: number
    isFree: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LectureMinAggregateInputType = {
    id?: true
    lectureTitle?: true
    lectureVideoUrl?: true
    courseId?: true
    viewd?: true
    isFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LectureMaxAggregateInputType = {
    id?: true
    lectureTitle?: true
    lectureVideoUrl?: true
    courseId?: true
    viewd?: true
    isFree?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LectureCountAggregateInputType = {
    id?: true
    lectureTitle?: true
    lectureVideoUrl?: true
    courseId?: true
    viewd?: true
    isFree?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecture to aggregate.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type LectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureWhereInput
    orderBy?: LectureOrderByWithAggregationInput | LectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: LectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    id: string
    lectureTitle: string
    lectureVideoUrl: string | null
    courseId: string
    viewd: boolean
    isFree: boolean
    createdAt: Date
    updatedAt: Date
    _count: LectureCountAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends LectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type LectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureTitle?: boolean
    lectureVideoUrl?: boolean
    courseId?: boolean
    viewd?: boolean
    isFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureTitle?: boolean
    lectureVideoUrl?: boolean
    courseId?: boolean
    viewd?: boolean
    isFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureTitle?: boolean
    lectureVideoUrl?: boolean
    courseId?: boolean
    viewd?: boolean
    isFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectScalar = {
    id?: boolean
    lectureTitle?: boolean
    lectureVideoUrl?: boolean
    courseId?: boolean
    viewd?: boolean
    isFree?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lectureTitle" | "lectureVideoUrl" | "courseId" | "viewd" | "isFree" | "createdAt" | "updatedAt", ExtArgs["result"]["lecture"]>
  export type LectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LectureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type LectureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $LecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecture"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lectureTitle: string
      lectureVideoUrl: string | null
      courseId: string
      viewd: boolean
      isFree: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type LectureGetPayload<S extends boolean | null | undefined | LectureDefaultArgs> = $Result.GetResult<Prisma.$LecturePayload, S>

  type LectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface LectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecture'], meta: { name: 'Lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {LectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureFindUniqueArgs>(args: SelectSubset<T, LectureFindUniqueArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureFindFirstArgs>(args?: SelectSubset<T, LectureFindFirstArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureWithIdOnly = await prisma.lecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureFindManyArgs>(args?: SelectSubset<T, LectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture.
     * @param {LectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends LectureCreateArgs>(args: SelectSubset<T, LectureCreateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lectures.
     * @param {LectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureCreateManyArgs>(args?: SelectSubset<T, LectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lectures and returns the data saved in the database.
     * @param {LectureCreateManyAndReturnArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecture.
     * @param {LectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends LectureDeleteArgs>(args: SelectSubset<T, LectureDeleteArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture.
     * @param {LectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureUpdateArgs>(args: SelectSubset<T, LectureUpdateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lectures.
     * @param {LectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureDeleteManyArgs>(args?: SelectSubset<T, LectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureUpdateManyArgs>(args: SelectSubset<T, LectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures and returns the data updated in the database.
     * @param {LectureUpdateManyAndReturnArgs} args - Arguments to update many Lectures.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LectureUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecture.
     * @param {LectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends LectureUpsertArgs>(args: SelectSubset<T, LectureUpsertArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends LectureCountArgs>(
      args?: Subset<T, LectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureGroupByArgs['orderBy'] }
        : { orderBy?: LectureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecture model
   */
  readonly fields: LectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lecture model
   */
  interface LectureFieldRefs {
    readonly id: FieldRef<"Lecture", 'String'>
    readonly lectureTitle: FieldRef<"Lecture", 'String'>
    readonly lectureVideoUrl: FieldRef<"Lecture", 'String'>
    readonly courseId: FieldRef<"Lecture", 'String'>
    readonly viewd: FieldRef<"Lecture", 'Boolean'>
    readonly isFree: FieldRef<"Lecture", 'Boolean'>
    readonly createdAt: FieldRef<"Lecture", 'DateTime'>
    readonly updatedAt: FieldRef<"Lecture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecture findUnique
   */
  export type LectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findUniqueOrThrow
   */
  export type LectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findFirst
   */
  export type LectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findFirstOrThrow
   */
  export type LectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findMany
   */
  export type LectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lectures to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture create
   */
  export type LectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecture.
     */
    data: XOR<LectureCreateInput, LectureUncheckedCreateInput>
  }

  /**
   * Lecture createMany
   */
  export type LectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecture createManyAndReturn
   */
  export type LectureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecture update
   */
  export type LectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecture.
     */
    data: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
    /**
     * Choose, which Lecture to update.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture updateMany
   */
  export type LectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
  }

  /**
   * Lecture updateManyAndReturn
   */
  export type LectureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecture upsert
   */
  export type LectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecture to update in case it exists.
     */
    where: LectureWhereUniqueInput
    /**
     * In case the Lecture found by the `where` argument doesn't exist, create a new Lecture with this data.
     */
    create: XOR<LectureCreateInput, LectureUncheckedCreateInput>
    /**
     * In case the Lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
  }

  /**
   * Lecture delete
   */
  export type LectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter which Lecture to delete.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture deleteMany
   */
  export type LectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lectures to delete
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to delete.
     */
    limit?: number
  }

  /**
   * Lecture without action
   */
  export type LectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    imageurl: 'imageurl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseTitle: 'courseTitle',
    courseDescription: 'courseDescription',
    courseSubtitle: 'courseSubtitle',
    courseCategory: 'courseCategory',
    courseLevel: 'courseLevel',
    coursePrice: 'coursePrice',
    courseThumbnail: 'courseThumbnail',
    courseCompleted: 'courseCompleted',
    coursePublished: 'coursePublished',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrolledCourseScalarFieldEnum: {
    id: 'id',
    courseAmount: 'courseAmount',
    status: 'status',
    userId: 'userId',
    courseId: 'courseId',
    enrolledAt: 'enrolledAt'
  };

  export type EnrolledCourseScalarFieldEnum = (typeof EnrolledCourseScalarFieldEnum)[keyof typeof EnrolledCourseScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    paymentId: 'paymentId',
    status: 'status',
    amount: 'amount',
    currency: 'currency',
    userId: 'userId',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const LectureScalarFieldEnum: {
    id: 'id',
    lectureTitle: 'lectureTitle',
    lectureVideoUrl: 'lectureVideoUrl',
    courseId: 'courseId',
    viewd: 'viewd',
    isFree: 'isFree',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Level'
   */
  export type EnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level'>
    


  /**
   * Reference to a field of type 'Level[]'
   */
  export type ListEnumLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Level[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    imageurl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCourses?: CourseListRelationFilter
    enrolledCourses?: EnrolledCourseListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageurl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdCourses?: CourseOrderByRelationAggregateInput
    enrolledCourses?: EnrolledCourseOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    imageurl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCourses?: CourseListRelationFilter
    enrolledCourses?: EnrolledCourseListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageurl?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    imageurl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    courseTitle?: StringFilter<"Course"> | string
    courseDescription?: StringNullableFilter<"Course"> | string | null
    courseSubtitle?: StringNullableFilter<"Course"> | string | null
    courseCategory?: StringNullableFilter<"Course"> | string | null
    courseLevel?: EnumLevelFilter<"Course"> | $Enums.Level
    coursePrice?: StringNullableFilter<"Course"> | string | null
    courseThumbnail?: StringNullableFilter<"Course"> | string | null
    courseCompleted?: BoolFilter<"Course"> | boolean
    coursePublished?: BoolFilter<"Course"> | boolean
    creatorId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrolledUsers?: EnrolledCourseListRelationFilter
    Lecture?: LectureListRelationFilter
    Payment?: PaymentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrderInput | SortOrder
    courseSubtitle?: SortOrderInput | SortOrder
    courseCategory?: SortOrderInput | SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrderInput | SortOrder
    courseThumbnail?: SortOrderInput | SortOrder
    courseCompleted?: SortOrder
    coursePublished?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    enrolledUsers?: EnrolledCourseOrderByRelationAggregateInput
    Lecture?: LectureOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseTitle?: StringFilter<"Course"> | string
    courseDescription?: StringNullableFilter<"Course"> | string | null
    courseSubtitle?: StringNullableFilter<"Course"> | string | null
    courseCategory?: StringNullableFilter<"Course"> | string | null
    courseLevel?: EnumLevelFilter<"Course"> | $Enums.Level
    coursePrice?: StringNullableFilter<"Course"> | string | null
    courseThumbnail?: StringNullableFilter<"Course"> | string | null
    courseCompleted?: BoolFilter<"Course"> | boolean
    coursePublished?: BoolFilter<"Course"> | boolean
    creatorId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrolledUsers?: EnrolledCourseListRelationFilter
    Lecture?: LectureListRelationFilter
    Payment?: PaymentListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrderInput | SortOrder
    courseSubtitle?: SortOrderInput | SortOrder
    courseCategory?: SortOrderInput | SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrderInput | SortOrder
    courseThumbnail?: SortOrderInput | SortOrder
    courseCompleted?: SortOrder
    coursePublished?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    courseTitle?: StringWithAggregatesFilter<"Course"> | string
    courseDescription?: StringNullableWithAggregatesFilter<"Course"> | string | null
    courseSubtitle?: StringNullableWithAggregatesFilter<"Course"> | string | null
    courseCategory?: StringNullableWithAggregatesFilter<"Course"> | string | null
    courseLevel?: EnumLevelWithAggregatesFilter<"Course"> | $Enums.Level
    coursePrice?: StringNullableWithAggregatesFilter<"Course"> | string | null
    courseThumbnail?: StringNullableWithAggregatesFilter<"Course"> | string | null
    courseCompleted?: BoolWithAggregatesFilter<"Course"> | boolean
    coursePublished?: BoolWithAggregatesFilter<"Course"> | boolean
    creatorId?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type EnrolledCourseWhereInput = {
    AND?: EnrolledCourseWhereInput | EnrolledCourseWhereInput[]
    OR?: EnrolledCourseWhereInput[]
    NOT?: EnrolledCourseWhereInput | EnrolledCourseWhereInput[]
    id?: StringFilter<"EnrolledCourse"> | string
    courseAmount?: StringFilter<"EnrolledCourse"> | string
    status?: EnumStatusFilter<"EnrolledCourse"> | $Enums.Status
    userId?: StringFilter<"EnrolledCourse"> | string
    courseId?: StringFilter<"EnrolledCourse"> | string
    enrolledAt?: DateTimeFilter<"EnrolledCourse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type EnrolledCourseOrderByWithRelationInput = {
    id?: SortOrder
    courseAmount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrolledCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_courseId?: EnrolledCourseUserIdCourseIdCompoundUniqueInput
    AND?: EnrolledCourseWhereInput | EnrolledCourseWhereInput[]
    OR?: EnrolledCourseWhereInput[]
    NOT?: EnrolledCourseWhereInput | EnrolledCourseWhereInput[]
    courseAmount?: StringFilter<"EnrolledCourse"> | string
    status?: EnumStatusFilter<"EnrolledCourse"> | $Enums.Status
    userId?: StringFilter<"EnrolledCourse"> | string
    courseId?: StringFilter<"EnrolledCourse"> | string
    enrolledAt?: DateTimeFilter<"EnrolledCourse"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "userId_courseId">

  export type EnrolledCourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseAmount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
    _count?: EnrolledCourseCountOrderByAggregateInput
    _max?: EnrolledCourseMaxOrderByAggregateInput
    _min?: EnrolledCourseMinOrderByAggregateInput
  }

  export type EnrolledCourseScalarWhereWithAggregatesInput = {
    AND?: EnrolledCourseScalarWhereWithAggregatesInput | EnrolledCourseScalarWhereWithAggregatesInput[]
    OR?: EnrolledCourseScalarWhereWithAggregatesInput[]
    NOT?: EnrolledCourseScalarWhereWithAggregatesInput | EnrolledCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnrolledCourse"> | string
    courseAmount?: StringWithAggregatesFilter<"EnrolledCourse"> | string
    status?: EnumStatusWithAggregatesFilter<"EnrolledCourse"> | $Enums.Status
    userId?: StringWithAggregatesFilter<"EnrolledCourse"> | string
    courseId?: StringWithAggregatesFilter<"EnrolledCourse"> | string
    enrolledAt?: DateTimeWithAggregatesFilter<"EnrolledCourse"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    paymentId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumStatusFilter<"Payment"> | $Enums.Status
    amount?: StringFilter<"Payment"> | string
    currency?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    courseId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paymentId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumStatusFilter<"Payment"> | $Enums.Status
    amount?: StringFilter<"Payment"> | string
    currency?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    courseId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    paymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Payment"> | $Enums.Status
    amount?: StringWithAggregatesFilter<"Payment"> | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    courseId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type LectureWhereInput = {
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    id?: StringFilter<"Lecture"> | string
    lectureTitle?: StringFilter<"Lecture"> | string
    lectureVideoUrl?: StringNullableFilter<"Lecture"> | string | null
    courseId?: StringFilter<"Lecture"> | string
    viewd?: BoolFilter<"Lecture"> | boolean
    isFree?: BoolFilter<"Lecture"> | boolean
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeFilter<"Lecture"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type LectureOrderByWithRelationInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    lectureVideoUrl?: SortOrderInput | SortOrder
    courseId?: SortOrder
    viewd?: SortOrder
    isFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type LectureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    lectureTitle?: StringFilter<"Lecture"> | string
    lectureVideoUrl?: StringNullableFilter<"Lecture"> | string | null
    courseId?: StringFilter<"Lecture"> | string
    viewd?: BoolFilter<"Lecture"> | boolean
    isFree?: BoolFilter<"Lecture"> | boolean
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeFilter<"Lecture"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type LectureOrderByWithAggregationInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    lectureVideoUrl?: SortOrderInput | SortOrder
    courseId?: SortOrder
    viewd?: SortOrder
    isFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LectureCountOrderByAggregateInput
    _max?: LectureMaxOrderByAggregateInput
    _min?: LectureMinOrderByAggregateInput
  }

  export type LectureScalarWhereWithAggregatesInput = {
    AND?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    OR?: LectureScalarWhereWithAggregatesInput[]
    NOT?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lecture"> | string
    lectureTitle?: StringWithAggregatesFilter<"Lecture"> | string
    lectureVideoUrl?: StringNullableWithAggregatesFilter<"Lecture"> | string | null
    courseId?: StringWithAggregatesFilter<"Lecture"> | string
    viewd?: BoolWithAggregatesFilter<"Lecture"> | boolean
    isFree?: BoolWithAggregatesFilter<"Lecture"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lecture"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCourses?: CourseCreateNestedManyWithoutCreatorInput
    enrolledCourses?: EnrolledCourseCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    enrolledCourses?: EnrolledCourseUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCourses?: CourseUpdateManyWithoutCreatorNestedInput
    enrolledCourses?: EnrolledCourseUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    enrolledCourses?: EnrolledCourseUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCoursesInput
    enrolledUsers?: EnrolledCourseCreateNestedManyWithoutCourseInput
    Lecture?: LectureCreateNestedManyWithoutCourseInput
    Payment?: PaymentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledUsers?: EnrolledCourseUncheckedCreateNestedManyWithoutCourseInput
    Lecture?: LectureUncheckedCreateNestedManyWithoutCourseInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCoursesNestedInput
    enrolledUsers?: EnrolledCourseUpdateManyWithoutCourseNestedInput
    Lecture?: LectureUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledUsers?: EnrolledCourseUncheckedUpdateManyWithoutCourseNestedInput
    Lecture?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseCreateInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrolledCoursesInput
    course: CourseCreateNestedOneWithoutEnrolledUsersInput
  }

  export type EnrolledCourseUncheckedCreateInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    userId: string
    courseId: string
    enrolledAt?: Date | string
  }

  export type EnrolledCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolledCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrolledUsersNestedInput
  }

  export type EnrolledCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseCreateManyInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    userId: string
    courseId: string
    enrolledAt?: Date | string
  }

  export type EnrolledCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
    course: CourseCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    userId: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
    course?: CourseUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    userId: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateInput = {
    id?: string
    lectureTitle: string
    lectureVideoUrl?: string | null
    viewd?: boolean
    isFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutLectureInput
  }

  export type LectureUncheckedCreateInput = {
    id?: string
    lectureTitle: string
    lectureVideoUrl?: string | null
    courseId: string
    viewd?: boolean
    isFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutLectureNestedInput
  }

  export type LectureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateManyInput = {
    id?: string
    lectureTitle: string
    lectureVideoUrl?: string | null
    courseId: string
    viewd?: boolean
    isFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type EnrolledCourseListRelationFilter = {
    every?: EnrolledCourseWhereInput
    some?: EnrolledCourseWhereInput
    none?: EnrolledCourseWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrolledCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageurl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageurl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageurl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LectureListRelationFilter = {
    every?: LectureWhereInput
    some?: LectureWhereInput
    none?: LectureWhereInput
  }

  export type LectureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    courseSubtitle?: SortOrder
    courseCategory?: SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrder
    courseThumbnail?: SortOrder
    courseCompleted?: SortOrder
    coursePublished?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    courseSubtitle?: SortOrder
    courseCategory?: SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrder
    courseThumbnail?: SortOrder
    courseCompleted?: SortOrder
    coursePublished?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    courseDescription?: SortOrder
    courseSubtitle?: SortOrder
    courseCategory?: SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrder
    courseThumbnail?: SortOrder
    courseCompleted?: SortOrder
    coursePublished?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrolledCourseUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type EnrolledCourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseAmount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrolledCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseAmount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnrolledCourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseAmount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrolledAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LectureCountOrderByAggregateInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    lectureVideoUrl?: SortOrder
    courseId?: SortOrder
    viewd?: SortOrder
    isFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LectureMaxOrderByAggregateInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    lectureVideoUrl?: SortOrder
    courseId?: SortOrder
    viewd?: SortOrder
    isFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LectureMinOrderByAggregateInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    lectureVideoUrl?: SortOrder
    courseId?: SortOrder
    viewd?: SortOrder
    isFree?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrolledCourseCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrolledCourseCreateWithoutUserInput, EnrolledCourseUncheckedCreateWithoutUserInput> | EnrolledCourseCreateWithoutUserInput[] | EnrolledCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutUserInput | EnrolledCourseCreateOrConnectWithoutUserInput[]
    createMany?: EnrolledCourseCreateManyUserInputEnvelope
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrolledCourseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrolledCourseCreateWithoutUserInput, EnrolledCourseUncheckedCreateWithoutUserInput> | EnrolledCourseCreateWithoutUserInput[] | EnrolledCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutUserInput | EnrolledCourseCreateOrConnectWithoutUserInput[]
    createMany?: EnrolledCourseCreateManyUserInputEnvelope
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatorInput | CourseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatorInput | CourseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatorInput | CourseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrolledCourseUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrolledCourseCreateWithoutUserInput, EnrolledCourseUncheckedCreateWithoutUserInput> | EnrolledCourseCreateWithoutUserInput[] | EnrolledCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutUserInput | EnrolledCourseCreateOrConnectWithoutUserInput[]
    upsert?: EnrolledCourseUpsertWithWhereUniqueWithoutUserInput | EnrolledCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrolledCourseCreateManyUserInputEnvelope
    set?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    disconnect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    delete?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    update?: EnrolledCourseUpdateWithWhereUniqueWithoutUserInput | EnrolledCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrolledCourseUpdateManyWithWhereWithoutUserInput | EnrolledCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrolledCourseScalarWhereInput | EnrolledCourseScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatorInput | CourseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatorInput | CourseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatorInput | CourseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrolledCourseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrolledCourseCreateWithoutUserInput, EnrolledCourseUncheckedCreateWithoutUserInput> | EnrolledCourseCreateWithoutUserInput[] | EnrolledCourseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutUserInput | EnrolledCourseCreateOrConnectWithoutUserInput[]
    upsert?: EnrolledCourseUpsertWithWhereUniqueWithoutUserInput | EnrolledCourseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrolledCourseCreateManyUserInputEnvelope
    set?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    disconnect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    delete?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    update?: EnrolledCourseUpdateWithWhereUniqueWithoutUserInput | EnrolledCourseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrolledCourseUpdateManyWithWhereWithoutUserInput | EnrolledCourseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrolledCourseScalarWhereInput | EnrolledCourseScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCoursesInput = {
    create?: XOR<UserCreateWithoutCreatedCoursesInput, UserUncheckedCreateWithoutCreatedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type EnrolledCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrolledCourseCreateWithoutCourseInput, EnrolledCourseUncheckedCreateWithoutCourseInput> | EnrolledCourseCreateWithoutCourseInput[] | EnrolledCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutCourseInput | EnrolledCourseCreateOrConnectWithoutCourseInput[]
    createMany?: EnrolledCourseCreateManyCourseInputEnvelope
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
  }

  export type LectureCreateNestedManyWithoutCourseInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCourseInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnrolledCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrolledCourseCreateWithoutCourseInput, EnrolledCourseUncheckedCreateWithoutCourseInput> | EnrolledCourseCreateWithoutCourseInput[] | EnrolledCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutCourseInput | EnrolledCourseCreateOrConnectWithoutCourseInput[]
    createMany?: EnrolledCourseCreateManyCourseInputEnvelope
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
  }

  export type LectureUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumLevelFieldUpdateOperationsInput = {
    set?: $Enums.Level
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCreatedCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCoursesInput, UserUncheckedCreateWithoutCreatedCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCoursesInput
    upsert?: UserUpsertWithoutCreatedCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCoursesInput, UserUpdateWithoutCreatedCoursesInput>, UserUncheckedUpdateWithoutCreatedCoursesInput>
  }

  export type EnrolledCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrolledCourseCreateWithoutCourseInput, EnrolledCourseUncheckedCreateWithoutCourseInput> | EnrolledCourseCreateWithoutCourseInput[] | EnrolledCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutCourseInput | EnrolledCourseCreateOrConnectWithoutCourseInput[]
    upsert?: EnrolledCourseUpsertWithWhereUniqueWithoutCourseInput | EnrolledCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrolledCourseCreateManyCourseInputEnvelope
    set?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    disconnect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    delete?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    update?: EnrolledCourseUpdateWithWhereUniqueWithoutCourseInput | EnrolledCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrolledCourseUpdateManyWithWhereWithoutCourseInput | EnrolledCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrolledCourseScalarWhereInput | EnrolledCourseScalarWhereInput[]
  }

  export type LectureUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    upsert?: LectureUpsertWithWhereUniqueWithoutCourseInput | LectureUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    set?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    disconnect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    delete?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    update?: LectureUpdateWithWhereUniqueWithoutCourseInput | LectureUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LectureUpdateManyWithWhereWithoutCourseInput | LectureUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LectureScalarWhereInput | LectureScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCourseInput | PaymentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCourseInput | PaymentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCourseInput | PaymentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type EnrolledCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrolledCourseCreateWithoutCourseInput, EnrolledCourseUncheckedCreateWithoutCourseInput> | EnrolledCourseCreateWithoutCourseInput[] | EnrolledCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrolledCourseCreateOrConnectWithoutCourseInput | EnrolledCourseCreateOrConnectWithoutCourseInput[]
    upsert?: EnrolledCourseUpsertWithWhereUniqueWithoutCourseInput | EnrolledCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrolledCourseCreateManyCourseInputEnvelope
    set?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    disconnect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    delete?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    connect?: EnrolledCourseWhereUniqueInput | EnrolledCourseWhereUniqueInput[]
    update?: EnrolledCourseUpdateWithWhereUniqueWithoutCourseInput | EnrolledCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrolledCourseUpdateManyWithWhereWithoutCourseInput | EnrolledCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrolledCourseScalarWhereInput | EnrolledCourseScalarWhereInput[]
  }

  export type LectureUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    upsert?: LectureUpsertWithWhereUniqueWithoutCourseInput | LectureUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    set?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    disconnect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    delete?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    update?: LectureUpdateWithWhereUniqueWithoutCourseInput | LectureUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LectureUpdateManyWithWhereWithoutCourseInput | LectureUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LectureScalarWhereInput | LectureScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput> | PaymentCreateWithoutCourseInput[] | PaymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCourseInput | PaymentCreateOrConnectWithoutCourseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCourseInput | PaymentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: PaymentCreateManyCourseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCourseInput | PaymentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCourseInput | PaymentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnrolledCoursesInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrolledUsersInput = {
    create?: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledUsersInput
    connect?: CourseWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutEnrolledCoursesNestedInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput
    upsert?: UserUpsertWithoutEnrolledCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrolledCoursesInput, UserUpdateWithoutEnrolledCoursesInput>, UserUncheckedUpdateWithoutEnrolledCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrolledUsersNestedInput = {
    create?: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledUsersInput
    upsert?: CourseUpsertWithoutEnrolledUsersInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrolledUsersInput, CourseUpdateWithoutEnrolledUsersInput>, CourseUncheckedUpdateWithoutEnrolledUsersInput>
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutPaymentInput = {
    create?: XOR<CourseCreateWithoutPaymentInput, CourseUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPaymentInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type CourseUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<CourseCreateWithoutPaymentInput, CourseUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: CourseCreateOrConnectWithoutPaymentInput
    upsert?: CourseUpsertWithoutPaymentInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutPaymentInput, CourseUpdateWithoutPaymentInput>, CourseUncheckedUpdateWithoutPaymentInput>
  }

  export type CourseCreateNestedOneWithoutLectureInput = {
    create?: XOR<CourseCreateWithoutLectureInput, CourseUncheckedCreateWithoutLectureInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLectureInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutLectureNestedInput = {
    create?: XOR<CourseCreateWithoutLectureInput, CourseUncheckedCreateWithoutLectureInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLectureInput
    upsert?: CourseUpsertWithoutLectureInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLectureInput, CourseUpdateWithoutLectureInput>, CourseUncheckedUpdateWithoutLectureInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelFilter<$PrismaModel> | $Enums.Level
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Level | EnumLevelFieldRefInput<$PrismaModel>
    in?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.Level[] | ListEnumLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumLevelWithAggregatesFilter<$PrismaModel> | $Enums.Level
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLevelFilter<$PrismaModel>
    _max?: NestedEnumLevelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type CourseCreateWithoutCreatorInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledUsers?: EnrolledCourseCreateNestedManyWithoutCourseInput
    Lecture?: LectureCreateNestedManyWithoutCourseInput
    Payment?: PaymentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCreatorInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledUsers?: EnrolledCourseUncheckedCreateNestedManyWithoutCourseInput
    Lecture?: LectureUncheckedCreateNestedManyWithoutCourseInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCreatorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput>
  }

  export type CourseCreateManyCreatorInputEnvelope = {
    data: CourseCreateManyCreatorInput | CourseCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EnrolledCourseCreateWithoutUserInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    enrolledAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrolledUsersInput
  }

  export type EnrolledCourseUncheckedCreateWithoutUserInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    courseId: string
    enrolledAt?: Date | string
  }

  export type EnrolledCourseCreateOrConnectWithoutUserInput = {
    where: EnrolledCourseWhereUniqueInput
    create: XOR<EnrolledCourseCreateWithoutUserInput, EnrolledCourseUncheckedCreateWithoutUserInput>
  }

  export type EnrolledCourseCreateManyUserInputEnvelope = {
    data: EnrolledCourseCreateManyUserInput | EnrolledCourseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCreatorInput, CourseUncheckedUpdateWithoutCreatorInput>
    create: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCreatorInput, CourseUncheckedUpdateWithoutCreatorInput>
  }

  export type CourseUpdateManyWithWhereWithoutCreatorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    courseTitle?: StringFilter<"Course"> | string
    courseDescription?: StringNullableFilter<"Course"> | string | null
    courseSubtitle?: StringNullableFilter<"Course"> | string | null
    courseCategory?: StringNullableFilter<"Course"> | string | null
    courseLevel?: EnumLevelFilter<"Course"> | $Enums.Level
    coursePrice?: StringNullableFilter<"Course"> | string | null
    courseThumbnail?: StringNullableFilter<"Course"> | string | null
    courseCompleted?: BoolFilter<"Course"> | boolean
    coursePublished?: BoolFilter<"Course"> | boolean
    creatorId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type EnrolledCourseUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrolledCourseWhereUniqueInput
    update: XOR<EnrolledCourseUpdateWithoutUserInput, EnrolledCourseUncheckedUpdateWithoutUserInput>
    create: XOR<EnrolledCourseCreateWithoutUserInput, EnrolledCourseUncheckedCreateWithoutUserInput>
  }

  export type EnrolledCourseUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrolledCourseWhereUniqueInput
    data: XOR<EnrolledCourseUpdateWithoutUserInput, EnrolledCourseUncheckedUpdateWithoutUserInput>
  }

  export type EnrolledCourseUpdateManyWithWhereWithoutUserInput = {
    where: EnrolledCourseScalarWhereInput
    data: XOR<EnrolledCourseUpdateManyMutationInput, EnrolledCourseUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrolledCourseScalarWhereInput = {
    AND?: EnrolledCourseScalarWhereInput | EnrolledCourseScalarWhereInput[]
    OR?: EnrolledCourseScalarWhereInput[]
    NOT?: EnrolledCourseScalarWhereInput | EnrolledCourseScalarWhereInput[]
    id?: StringFilter<"EnrolledCourse"> | string
    courseAmount?: StringFilter<"EnrolledCourse"> | string
    status?: EnumStatusFilter<"EnrolledCourse"> | $Enums.Status
    userId?: StringFilter<"EnrolledCourse"> | string
    courseId?: StringFilter<"EnrolledCourse"> | string
    enrolledAt?: DateTimeFilter<"EnrolledCourse"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    paymentId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumStatusFilter<"Payment"> | $Enums.Status
    amount?: StringFilter<"Payment"> | string
    currency?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    courseId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutCreatedCoursesInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: EnrolledCourseCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCoursesInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: EnrolledCourseUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCoursesInput, UserUncheckedCreateWithoutCreatedCoursesInput>
  }

  export type EnrolledCourseCreateWithoutCourseInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    enrolledAt?: Date | string
    user: UserCreateNestedOneWithoutEnrolledCoursesInput
  }

  export type EnrolledCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    userId: string
    enrolledAt?: Date | string
  }

  export type EnrolledCourseCreateOrConnectWithoutCourseInput = {
    where: EnrolledCourseWhereUniqueInput
    create: XOR<EnrolledCourseCreateWithoutCourseInput, EnrolledCourseUncheckedCreateWithoutCourseInput>
  }

  export type EnrolledCourseCreateManyCourseInputEnvelope = {
    data: EnrolledCourseCreateManyCourseInput | EnrolledCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type LectureCreateWithoutCourseInput = {
    id?: string
    lectureTitle: string
    lectureVideoUrl?: string | null
    viewd?: boolean
    isFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureUncheckedCreateWithoutCourseInput = {
    id?: string
    lectureTitle: string
    lectureVideoUrl?: string | null
    viewd?: boolean
    isFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureCreateOrConnectWithoutCourseInput = {
    where: LectureWhereUniqueInput
    create: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput>
  }

  export type LectureCreateManyCourseInputEnvelope = {
    data: LectureCreateManyCourseInput | LectureCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCourseInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCourseInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCourseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput>
  }

  export type PaymentCreateManyCourseInputEnvelope = {
    data: PaymentCreateManyCourseInput | PaymentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedCoursesInput = {
    update: XOR<UserUpdateWithoutCreatedCoursesInput, UserUncheckedUpdateWithoutCreatedCoursesInput>
    create: XOR<UserCreateWithoutCreatedCoursesInput, UserUncheckedCreateWithoutCreatedCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCoursesInput, UserUncheckedUpdateWithoutCreatedCoursesInput>
  }

  export type UserUpdateWithoutCreatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: EnrolledCourseUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: EnrolledCourseUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnrolledCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrolledCourseWhereUniqueInput
    update: XOR<EnrolledCourseUpdateWithoutCourseInput, EnrolledCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrolledCourseCreateWithoutCourseInput, EnrolledCourseUncheckedCreateWithoutCourseInput>
  }

  export type EnrolledCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrolledCourseWhereUniqueInput
    data: XOR<EnrolledCourseUpdateWithoutCourseInput, EnrolledCourseUncheckedUpdateWithoutCourseInput>
  }

  export type EnrolledCourseUpdateManyWithWhereWithoutCourseInput = {
    where: EnrolledCourseScalarWhereInput
    data: XOR<EnrolledCourseUpdateManyMutationInput, EnrolledCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type LectureUpsertWithWhereUniqueWithoutCourseInput = {
    where: LectureWhereUniqueInput
    update: XOR<LectureUpdateWithoutCourseInput, LectureUncheckedUpdateWithoutCourseInput>
    create: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput>
  }

  export type LectureUpdateWithWhereUniqueWithoutCourseInput = {
    where: LectureWhereUniqueInput
    data: XOR<LectureUpdateWithoutCourseInput, LectureUncheckedUpdateWithoutCourseInput>
  }

  export type LectureUpdateManyWithWhereWithoutCourseInput = {
    where: LectureScalarWhereInput
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyWithoutCourseInput>
  }

  export type LectureScalarWhereInput = {
    AND?: LectureScalarWhereInput | LectureScalarWhereInput[]
    OR?: LectureScalarWhereInput[]
    NOT?: LectureScalarWhereInput | LectureScalarWhereInput[]
    id?: StringFilter<"Lecture"> | string
    lectureTitle?: StringFilter<"Lecture"> | string
    lectureVideoUrl?: StringNullableFilter<"Lecture"> | string | null
    courseId?: StringFilter<"Lecture"> | string
    viewd?: BoolFilter<"Lecture"> | boolean
    isFree?: BoolFilter<"Lecture"> | boolean
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeFilter<"Lecture"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutCourseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCourseInput, PaymentUncheckedUpdateWithoutCourseInput>
    create: XOR<PaymentCreateWithoutCourseInput, PaymentUncheckedCreateWithoutCourseInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCourseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCourseInput, PaymentUncheckedUpdateWithoutCourseInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCourseInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCreateWithoutEnrolledCoursesInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCourses?: CourseCreateNestedManyWithoutCreatorInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrolledCoursesInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrolledCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
  }

  export type CourseCreateWithoutEnrolledUsersInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCoursesInput
    Lecture?: LectureCreateNestedManyWithoutCourseInput
    Payment?: PaymentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrolledUsersInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Lecture?: LectureUncheckedCreateNestedManyWithoutCourseInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrolledUsersInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
  }

  export type UserUpsertWithoutEnrolledCoursesInput = {
    update: XOR<UserUpdateWithoutEnrolledCoursesInput, UserUncheckedUpdateWithoutEnrolledCoursesInput>
    create: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrolledCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrolledCoursesInput, UserUncheckedUpdateWithoutEnrolledCoursesInput>
  }

  export type UserUpdateWithoutEnrolledCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCourses?: CourseUpdateManyWithoutCreatorNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrolledCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrolledUsersInput = {
    update: XOR<CourseUpdateWithoutEnrolledUsersInput, CourseUncheckedUpdateWithoutEnrolledUsersInput>
    create: XOR<CourseCreateWithoutEnrolledUsersInput, CourseUncheckedCreateWithoutEnrolledUsersInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrolledUsersInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrolledUsersInput, CourseUncheckedUpdateWithoutEnrolledUsersInput>
  }

  export type CourseUpdateWithoutEnrolledUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCoursesNestedInput
    Lecture?: LectureUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrolledUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Lecture?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutPaymentInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCourses?: CourseCreateNestedManyWithoutCreatorInput
    enrolledCourses?: EnrolledCourseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id?: string
    clerkId: string
    name: string
    email: string
    imageurl?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCourses?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    enrolledCourses?: EnrolledCourseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type CourseCreateWithoutPaymentInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCoursesInput
    enrolledUsers?: EnrolledCourseCreateNestedManyWithoutCourseInput
    Lecture?: LectureCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPaymentInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledUsers?: EnrolledCourseUncheckedCreateNestedManyWithoutCourseInput
    Lecture?: LectureUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPaymentInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPaymentInput, CourseUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCourses?: CourseUpdateManyWithoutCreatorNestedInput
    enrolledCourses?: EnrolledCourseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageurl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCourses?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    enrolledCourses?: EnrolledCourseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutPaymentInput = {
    update: XOR<CourseUpdateWithoutPaymentInput, CourseUncheckedUpdateWithoutPaymentInput>
    create: XOR<CourseCreateWithoutPaymentInput, CourseUncheckedCreateWithoutPaymentInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutPaymentInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutPaymentInput, CourseUncheckedUpdateWithoutPaymentInput>
  }

  export type CourseUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCoursesNestedInput
    enrolledUsers?: EnrolledCourseUpdateManyWithoutCourseNestedInput
    Lecture?: LectureUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledUsers?: EnrolledCourseUncheckedUpdateManyWithoutCourseNestedInput
    Lecture?: LectureUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutLectureInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCoursesInput
    enrolledUsers?: EnrolledCourseCreateNestedManyWithoutCourseInput
    Payment?: PaymentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLectureInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledUsers?: EnrolledCourseUncheckedCreateNestedManyWithoutCourseInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLectureInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLectureInput, CourseUncheckedCreateWithoutLectureInput>
  }

  export type CourseUpsertWithoutLectureInput = {
    update: XOR<CourseUpdateWithoutLectureInput, CourseUncheckedUpdateWithoutLectureInput>
    create: XOR<CourseCreateWithoutLectureInput, CourseUncheckedCreateWithoutLectureInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLectureInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLectureInput, CourseUncheckedUpdateWithoutLectureInput>
  }

  export type CourseUpdateWithoutLectureInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCoursesNestedInput
    enrolledUsers?: EnrolledCourseUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLectureInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledUsers?: EnrolledCourseUncheckedUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyCreatorInput = {
    id?: string
    courseTitle: string
    courseDescription?: string | null
    courseSubtitle?: string | null
    courseCategory?: string | null
    courseLevel: $Enums.Level
    coursePrice?: string | null
    courseThumbnail?: string | null
    courseCompleted?: boolean
    coursePublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrolledCourseCreateManyUserInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    courseId: string
    enrolledAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledUsers?: EnrolledCourseUpdateManyWithoutCourseNestedInput
    Lecture?: LectureUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledUsers?: EnrolledCourseUncheckedUpdateManyWithoutCourseNestedInput
    Lecture?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseTitle?: StringFieldUpdateOperationsInput | string
    courseDescription?: NullableStringFieldUpdateOperationsInput | string | null
    courseSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    courseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    courseLevel?: EnumLevelFieldUpdateOperationsInput | $Enums.Level
    coursePrice?: NullableStringFieldUpdateOperationsInput | string | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    courseCompleted?: BoolFieldUpdateOperationsInput | boolean
    coursePublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrolledUsersNestedInput
  }

  export type EnrolledCourseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    courseId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseCreateManyCourseInput = {
    id?: string
    courseAmount: string
    status: $Enums.Status
    userId: string
    enrolledAt?: Date | string
  }

  export type LectureCreateManyCourseInput = {
    id?: string
    lectureTitle: string
    lectureVideoUrl?: string | null
    viewd?: boolean
    isFree?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyCourseInput = {
    id?: string
    orderId: string
    paymentId?: string | null
    status: $Enums.Status
    amount: string
    currency?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrolledCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrolledCoursesNestedInput
  }

  export type EnrolledCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrolledCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseAmount?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    userId?: StringFieldUpdateOperationsInput | string
    enrolledAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    lectureTitle?: StringFieldUpdateOperationsInput | string
    lectureVideoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    viewd?: BoolFieldUpdateOperationsInput | boolean
    isFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    amount?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}