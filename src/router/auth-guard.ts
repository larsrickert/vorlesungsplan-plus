import { useAuthStore } from '@/store/auth';
import { useErrorStore } from '@/store/error-handler';
import { CustomError, ErrorCode } from '@/types/errors';
import { NavigationGuardWithThis, RouteLocationRaw } from 'vue-router';

// Auth guard can also be async!

/**
 * Router guard that cancels navigation if user does not have the required permissions to access
 * the new route.
 *
 * @param to Route to be navigated to.
 * @returns true if routing is successfull, false if the routing is canceled (e.g. not authenticated) or route redirect.
 */
const authGuard: NavigationGuardWithThis<undefined> = (to, from): boolean | RouteLocationRaw => {
  const authStore = useAuthStore();

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!requiresAuth || authStore.isAuthenticated) return true;

  console.warn(`Tried to access route "${to.path}"" but user is not authenticated.`);

  // cancel current navigation
  // we are not able to throw the error because router.onError() handler would still throw the error after being handled
  const errorHandler = useErrorStore();

  errorHandler.handle(
    new CustomError(
      ErrorCode.ROUTER_NOT_AUTHENTICATED,
      `Tried to access page "${to.path}" but you are not logged in.`
    )
  );

  // redirect to home page if the its the first route / app launch, would not display app content otherwise
  // if first visited route required auth and user is not authenticated
  if (from.path && !from.meta.requiresAuth) return '/';
  return false;
};

export default authGuard;
