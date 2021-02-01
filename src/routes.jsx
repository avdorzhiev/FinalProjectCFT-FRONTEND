import {MainPage} from "./components/mainPage/mainPage";
import {AuthPage} from "./components/authPage/authPage";
import {SearchPage} from "./components/searchPage/searchPage";
import {RegisterForm} from "./components/register-form/register-form";
import { UserProfile } from "./components/userProfile/userProfile";

export const routes = [
  {
    path: '/',
    exact: true,
    component: SearchPage
  },
  {
    path: '/auth',
    exact: true,
    component: AuthPage
  },
  {
    path: '/name=:name',
    exact: true,
    component: MainPage
  },
  {
    path: '/registration',
    exact: true,
    component: RegisterForm
  },
  {
    path: '/profile',
    exact: true,
    component: UserProfile
  }
]