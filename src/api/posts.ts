/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * ThinkEasy
 * Test Task BE
 * OpenAPI spec version: 1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import * as axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  Auth,
  CreatePostInput,
  LoginInput,
  PostResponce,
  PostResponse,
  RefreshResponceModel,
  RefreshTokenInput,
  SignupInput
} from './model'



/**
 * @summary Signup a new user
 */
export const authControllerSignup = (
    signupInput: SignupInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Auth>> => {
    
    return axios.default.post(
      `/api/auth/signup`,
      signupInput,options
    );
  }



export const getAuthControllerSignupMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignup>>, TError,{data: SignupInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof authControllerSignup>>, TError,{data: SignupInput}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerSignup>>, {data: SignupInput}> = (props) => {
          const {data} = props ?? {};

          return  authControllerSignup(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerSignupMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerSignup>>>
    export type AuthControllerSignupMutationBody = SignupInput
    export type AuthControllerSignupMutationError = AxiosError<unknown>

    /**
 * @summary Signup a new user
 */
export const useAuthControllerSignup = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerSignup>>, TError,{data: SignupInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerSignup>>,
        TError,
        {data: SignupInput},
        TContext
      > => {

      const mutationOptions = getAuthControllerSignupMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Login an existing user
 */
export const authControllerLogin = (
    loginInput: LoginInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Auth>> => {
    
    return axios.default.post(
      `/api/auth/login`,
      loginInput,options
    );
  }



export const getAuthControllerLoginMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerLogin>>, TError,{data: LoginInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof authControllerLogin>>, TError,{data: LoginInput}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerLogin>>, {data: LoginInput}> = (props) => {
          const {data} = props ?? {};

          return  authControllerLogin(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerLoginMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerLogin>>>
    export type AuthControllerLoginMutationBody = LoginInput
    export type AuthControllerLoginMutationError = AxiosError<unknown>

    /**
 * @summary Login an existing user
 */
export const useAuthControllerLogin = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerLogin>>, TError,{data: LoginInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerLogin>>,
        TError,
        {data: LoginInput},
        TContext
      > => {

      const mutationOptions = getAuthControllerLoginMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Refresh access token using a refresh token
 */
export const authControllerRefreshToken = (
    refreshTokenInput: RefreshTokenInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<RefreshResponceModel>> => {
    
    return axios.default.post(
      `/api/auth/refresh-token`,
      refreshTokenInput,options
    );
  }



export const getAuthControllerRefreshTokenMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerRefreshToken>>, TError,{data: RefreshTokenInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof authControllerRefreshToken>>, TError,{data: RefreshTokenInput}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof authControllerRefreshToken>>, {data: RefreshTokenInput}> = (props) => {
          const {data} = props ?? {};

          return  authControllerRefreshToken(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type AuthControllerRefreshTokenMutationResult = NonNullable<Awaited<ReturnType<typeof authControllerRefreshToken>>>
    export type AuthControllerRefreshTokenMutationBody = RefreshTokenInput
    export type AuthControllerRefreshTokenMutationError = AxiosError<unknown>

    /**
 * @summary Refresh access token using a refresh token
 */
export const useAuthControllerRefreshToken = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof authControllerRefreshToken>>, TError,{data: RefreshTokenInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof authControllerRefreshToken>>,
        TError,
        {data: RefreshTokenInput},
        TContext
      > => {

      const mutationOptions = getAuthControllerRefreshTokenMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Create a new post
 */
export const postsControllerCreate = (
    createPostInput: CreatePostInput, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostResponce>> => {
    
    return axios.default.post(
      `/api/posts`,
      createPostInput,options
    );
  }



export const getPostsControllerCreateMutationOptions = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postsControllerCreate>>, TError,{data: CreatePostInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postsControllerCreate>>, TError,{data: CreatePostInput}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postsControllerCreate>>, {data: CreatePostInput}> = (props) => {
          const {data} = props ?? {};

          return  postsControllerCreate(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostsControllerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof postsControllerCreate>>>
    export type PostsControllerCreateMutationBody = CreatePostInput
    export type PostsControllerCreateMutationError = AxiosError<unknown>

    /**
 * @summary Create a new post
 */
export const usePostsControllerCreate = <TError = AxiosError<unknown>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postsControllerCreate>>, TError,{data: CreatePostInput}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof postsControllerCreate>>,
        TError,
        {data: CreatePostInput},
        TContext
      > => {

      const mutationOptions = getPostsControllerCreateMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Get all posts
 */
export const postsControllerGetAllPosts = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostResponse[]>> => {
    
    return axios.default.get(
      `/api/posts`,options
    );
  }


export const getPostsControllerGetAllPostsQueryKey = () => {
    return [`/api/posts`] as const;
    }

    
export const getPostsControllerGetAllPostsQueryOptions = <TData = Awaited<ReturnType<typeof postsControllerGetAllPosts>>, TError = AxiosError<unknown>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof postsControllerGetAllPosts>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPostsControllerGetAllPostsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof postsControllerGetAllPosts>>> = ({ signal }) => postsControllerGetAllPosts({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof postsControllerGetAllPosts>>, TError, TData> & { queryKey: QueryKey }
}

export type PostsControllerGetAllPostsQueryResult = NonNullable<Awaited<ReturnType<typeof postsControllerGetAllPosts>>>
export type PostsControllerGetAllPostsQueryError = AxiosError<unknown>


/**
 * @summary Get all posts
 */

export function usePostsControllerGetAllPosts<TData = Awaited<ReturnType<typeof postsControllerGetAllPosts>>, TError = AxiosError<unknown>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof postsControllerGetAllPosts>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPostsControllerGetAllPostsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Get all posts of a user
 */
export const postsControllerUserPosts = (
    userId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostResponse[]>> => {
    
    return axios.default.get(
      `/api/posts/user/${userId}`,options
    );
  }


export const getPostsControllerUserPostsQueryKey = (userId: string,) => {
    return [`/api/posts/user/${userId}`] as const;
    }

    
export const getPostsControllerUserPostsQueryOptions = <TData = Awaited<ReturnType<typeof postsControllerUserPosts>>, TError = AxiosError<unknown>>(userId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof postsControllerUserPosts>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPostsControllerUserPostsQueryKey(userId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof postsControllerUserPosts>>> = ({ signal }) => postsControllerUserPosts(userId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(userId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof postsControllerUserPosts>>, TError, TData> & { queryKey: QueryKey }
}

export type PostsControllerUserPostsQueryResult = NonNullable<Awaited<ReturnType<typeof postsControllerUserPosts>>>
export type PostsControllerUserPostsQueryError = AxiosError<unknown>


/**
 * @summary Get all posts of a user
 */

export function usePostsControllerUserPosts<TData = Awaited<ReturnType<typeof postsControllerUserPosts>>, TError = AxiosError<unknown>>(
 userId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof postsControllerUserPosts>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPostsControllerUserPostsQueryOptions(userId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Get a post by its ID
 */
export const postsControllerPost = (
    postId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<PostResponse>> => {
    
    return axios.default.get(
      `/api/posts/${postId}`,options
    );
  }


export const getPostsControllerPostQueryKey = (postId: string,) => {
    return [`/api/posts/${postId}`] as const;
    }

    
export const getPostsControllerPostQueryOptions = <TData = Awaited<ReturnType<typeof postsControllerPost>>, TError = AxiosError<unknown>>(postId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof postsControllerPost>>, TError, TData>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPostsControllerPostQueryKey(postId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof postsControllerPost>>> = ({ signal }) => postsControllerPost(postId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(postId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof postsControllerPost>>, TError, TData> & { queryKey: QueryKey }
}

export type PostsControllerPostQueryResult = NonNullable<Awaited<ReturnType<typeof postsControllerPost>>>
export type PostsControllerPostQueryError = AxiosError<unknown>


/**
 * @summary Get a post by its ID
 */

export function usePostsControllerPost<TData = Awaited<ReturnType<typeof postsControllerPost>>, TError = AxiosError<unknown>>(
 postId: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof postsControllerPost>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getPostsControllerPostQueryOptions(postId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




