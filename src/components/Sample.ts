import { Route } from "react-router-dom";
import { S } from "ts-toolbelt";
import { Extends } from "ts-toolbelt/out/Any/Extends";
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
export type Expect<T extends true> = T;

// type Fruit = "apple" | "banana" | "orange";
// type AppleOrBanana = Fruit extends infer item ?  item extends'apple'| 'banana'? item  : never:never;
// type tests = Expect<Equal<AppleOrBanana, "apple" | "banana">>;

type Fruit =
    | {
        name: "apple";
        color: "red";
    }
    | {
        name: "banana";
        color: "yellow";
    }
    | {
        name: "orange";
        color: "orange";
    };
type TransformNameColor<T> = T extends { name: infer Name extends string; color: infer Color extends string } ? `${Name}:${Color}` : never;

type TransformedFruit = {

    [K in Fruit as K['name']]: `${K["name"]}:${K["color"]}`;

}[Fruit['name']];

type testssss = [
    Expect<
        Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
    >,
];

type UserPath = "/users/:id";
type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<TPath extends string> = {
     [K in S.Split<TPath, "/">[number] as K extends `:${infer P}`
      ? P
      : never]: string;
    }
type testsssss = [
    Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
    Expect<
        Equal<
            ExtractPathParams<UserOrganisationPath>,
            { id: string; organisationId: string }
        >
    >,
];



// export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
// export type Expect<T extends true> = T;

interface Attributes {
    id: string;
    email: string;
    username: string;
}
/**
* How do we create a type helper that represents a union
* of all possible combinations of Attributes?
// */
type MutuallyExclusive<T> = {
    [K in keyof T]: {
      [P in K]: T[P];
    };
  }[keyof T];
type ExclusiveAttributes = MutuallyExclusive<Attributes>;
type testsss = [
    Expect<
        Equal<
            ExclusiveAttributes,
            | {
                id: string;
            }
            | {
                email: string;
            }
            | {
                username: string;
            }
        >
    >
];


type Route =
    | {
        route: "/";
        search: {
            page: string;
            perPage: string;
        };
    }
    | { route: "/about" }
    | { route: "/admin" }
    | { route: "/admin/users" };



type ExtractSearch<T> = T extends { search: infer S } ? S : never;

type RoutesObject = {
    [K in Route["route"]]: K extends "/"
    ? ExtractSearch<Extract<Route, { route: K }>> | never
    : never;
};
// type RoutesObject = {
//     [K in Route["route"]]: K extends "/" ? {
//         page: string;
//         perPage: string;
//     } : never;
// };
type testss = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": {
                    page: string;
                    perPage: string;
                };
                "/about": never;
                "/admin": never;
                "/admin/users": never;
            }
        >
    >,
];


type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends Array<infer U >
    ? Array<DeepPartial<U>>
    : DeepPartial<T[K]>
};
type MyType = {
    a: string;
    b: number;
    c: {
        d: string;
        e: {
            f: string;
            g: {
                h: string;
                i: string;
            }[];
        };
    };
};
type Result = DeepPartial<MyType>;
type tests = [
    Expect<
        Equal<
            Result,
            {
                a?: string;
                b?: number;
                c?: {
                    d?: string;
                    e?: {
                        f?: string;
                        g?: {
                            h?: string;
                            i?: string;
                        }[];
                    };
                };
            }
        >
    >
];