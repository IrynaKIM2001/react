import { useDispatch } from "react-redux";
import {store} from "../Store.ts";

export const useAppDispatch =useDispatch.withTypes<typeof store.dispatch>();