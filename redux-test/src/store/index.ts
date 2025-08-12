import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

// 🔹 Função para salvar no localStorage
function saveToLocalStorage(state: any) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("reduxState", serialized);
  } catch (e) {
    console.error("Erro ao salvar no localStorage", e);
  }
}

// 🔹 Função para carregar do localStorage
function loadFromLocalStorage(): any {
  try {
    const serialized = localStorage.getItem("reduxState");
    if (serialized === null) return undefined; // deixa o Redux usar o initialState
    return JSON.parse(serialized);
  } catch (e) {
    console.error("Erro ao ler do localStorage", e);
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    //@ts-expect-error tipagem errada
    counter: counterReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
