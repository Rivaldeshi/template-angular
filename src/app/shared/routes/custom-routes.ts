import { Routes } from "@angular/router";

export const COUNTENT_ROUTES:Routes =
[
  {
    path: '',
    loadChildren: () => import('../../components/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/errorpages/errorpages.module').then(m => m.ErrorpagesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/createpassword/createpassword.module').then(m => m.CreatepasswordModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/resetpassword/resetpassword.module').then(m => m.ResetpasswordModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/lockscreen/lockscreen.module').then(m => m.LockscreenModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/two-step-verification/two-step-verification.module').then(m => m.TwoStepVerificationModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/authentication/signup/signup.module').then(m => m.SignupModule)
  },
];
